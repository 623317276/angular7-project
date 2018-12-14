"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const ts = require("typescript");
const ast_1 = require("../utils/ast");
const custom_theme_1 = require("../utils/custom-theme");
const ast_utils_1 = require("../utils/devkit-utils/ast-utils");
const change_1 = require("../utils/devkit-utils/change");
const config_1 = require("../utils/devkit-utils/config");
const ng_ast_utils_1 = require("../utils/devkit-utils/ng-ast-utils");
const route_utils_1 = require("../utils/devkit-utils/route-utils");
const lib_versions_1 = require("../utils/lib-versions");
const package_1 = require("../utils/package");
const project_targets_1 = require("../utils/project-targets");
const index_1 = require("../fix-icon/index");
const ADD_CONFIG = {
    LESS_VERSION: '^2.7.3',
    CUSTOM_THEME_PATH: 'src/theme.less',
    COMPILED_THEME_PATH: 'node_modules/ng-zorro-antd/ng-zorro-antd.min.css',
    BOOT_PAGE_PATH: 'src/app/app.component.html',
    BOOT_PAGE_HTML: `<!-- NG-ZORRO -->
<a href="https://github.com/NG-ZORRO/ng-zorro-antd" target="_blank" style="display: flex;align-items: center;justify-content: center;height: 100%;width: 100%;">
  <img height="300" src="https://img.alicdn.com/tfs/TB1NvvIwTtYBeNjy1XdXXXXyVXa-89-131.svg">
</a>`
};
function default_1(options) {
    return schematics_1.chain([
        options && options.skipPackageJson ? schematics_1.noop() : addZorroToPackageJson(),
        options && options.theme ? downgradeLess() : schematics_1.noop(),
        setBootstrapPage(),
        addThemeToAppStyles(options),
        addModulesToAppModule(options),
        addI18n(options),
        (options && !options.skipPackageJson) || (options && !options.theme) ? installNodeDeps() : schematics_1.noop(),
        index_1.default(options)
    ]);
}
exports.default = default_1;
/** 添加 i18n 配置, 取决于 options.i18n */
function addI18n(options) {
    return function (host) {
        const workspace = config_1.getWorkspace(host);
        const project = config_1.getProjectFromWorkspace(workspace, options.project);
        const modulePath = ng_ast_utils_1.getAppModulePath(host, project_targets_1.getProjectTargetOptions(project, 'build').main);
        const moduleSource = ast_1.getSourceFile(host, modulePath);
        const locale = options.i18n;
        const localePrefix = locale.split('_')[0];
        if (!moduleSource) {
            throw new schematics_1.SchematicsException(`Module not found: ${modulePath}`);
        }
        if (!locale) {
            throw new schematics_1.SchematicsException(`Invalid locale-symbol`);
        }
        const changes = [
            route_utils_1.insertImport(moduleSource, modulePath, 'NZ_I18N', 'ng-zorro-antd'),
            route_utils_1.insertImport(moduleSource, modulePath, locale, 'ng-zorro-antd'),
            route_utils_1.insertImport(moduleSource, modulePath, 'registerLocaleData', '@angular/common'),
            route_utils_1.insertImport(moduleSource, modulePath, localePrefix, `@angular/common/locales/${localePrefix}`, true),
            registerLocaleData(moduleSource, modulePath, localePrefix),
            ...insertI18nTokenProvide(moduleSource, modulePath, locale)
        ];
        const recorder = host.beginUpdate(modulePath);
        changes.forEach((change) => {
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
            if (change instanceof change_1.ReplaceChange) {
                recorder.remove(change.pos, change.oldText.length);
                recorder.insertLeft(change.pos, change.newText);
            }
        });
        host.commitUpdate(recorder);
        return host;
    };
}
function insertI18nTokenProvide(moduleSource, modulePath, locale) {
    const metadataField = 'providers';
    const nodes = ast_utils_1.getDecoratorMetadata(moduleSource, 'NgModule', '@angular/core');
    const addProvide = ast_utils_1.addSymbolToNgModuleMetadata(moduleSource, modulePath, 'providers', `{ provide: NZ_I18N, useValue: ${locale} }`, null);
    let node = nodes[0]; // tslint:disable-line:no-any
    if (!node) {
        return [];
    }
    const matchingProperties = node.properties
        .filter(prop => prop.kind === ts.SyntaxKind.PropertyAssignment)
        .filter((prop) => {
        const name = prop.name;
        switch (name.kind) {
            case ts.SyntaxKind.Identifier:
                return name.getText(moduleSource) === metadataField;
            case ts.SyntaxKind.StringLiteral:
                return name.text === metadataField;
        }
        return false;
    });
    if (!matchingProperties) {
        return [];
    }
    if (matchingProperties.length) {
        const assignment = matchingProperties[0];
        if (assignment.initializer.kind !== ts.SyntaxKind.ArrayLiteralExpression) {
            return [];
        }
        const arrLiteral = assignment.initializer;
        if (arrLiteral.elements.length === 0) {
            return addProvide;
        }
        else {
            node = arrLiteral.elements.filter(e => e.getText && e.getText().includes('NZ_I18N'));
            if (node.length === 0) {
                return addProvide;
            }
            return node.map(e => new change_1.ReplaceChange(modulePath, e.getStart(), e.getText(), `{ provide: NZ_I18N, useValue: ${locale} }`));
        }
    }
    else {
        return addProvide;
    }
}
/** 注册 ng 国际化 */
function registerLocaleData(moduleSource, modulePath, locale) {
    const allImports = ast_utils_1.findNodes(moduleSource, ts.SyntaxKind.ImportDeclaration);
    const allFun = ast_utils_1.findNodes(moduleSource, ts.SyntaxKind.ExpressionStatement);
    const registerLocaleDataFun = allFun.filter(node => {
        const fun = node.getChildren();
        return fun[0].getChildren()[0] && fun[0].getChildren()[0].getText() === 'registerLocaleData';
    });
    return registerLocaleDataFun.length === 0
        ? ast_utils_1.insertAfterLastOccurrence(allImports, `\n\nregisterLocaleData(${locale});`, modulePath, 0)
        : new change_1.ReplaceChange(modulePath, registerLocaleDataFun[0].getStart(), registerLocaleDataFun[0].getText(), `registerLocaleData(${locale});`);
}
/** 降级 less */
function downgradeLess() {
    return (host) => {
        package_1.addPackageToPackageJson(host, 'dependencies', 'less', ADD_CONFIG.LESS_VERSION);
        return host;
    };
}
/** 添加 ng-zorro-antd 到 package.json 的 dependencies */
function addZorroToPackageJson() {
    return (host) => {
        package_1.addPackageToPackageJson(host, 'dependencies', 'ng-zorro-antd', lib_versions_1.zorroVersion);
        return host;
    };
}
/** 添加 BrowserAnimationsModule FormsModule HttpClientModule NgZorroAntdModule 到 app.module */
function addModulesToAppModule(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = config_1.getProjectFromWorkspace(workspace, options.project);
        ast_1.addModuleImportToRootModule(host, 'BrowserAnimationsModule', '@angular/platform-browser/animations', project);
        ast_1.addModuleImportToRootModule(host, 'FormsModule', '@angular/forms', project);
        ast_1.addModuleImportToRootModule(host, 'HttpClientModule', '@angular/common/http', project);
        ast_1.addModuleImportToRootModule(host, 'NgZorroAntdModule', 'ng-zorro-antd', project);
        return host;
    };
}
/** 添加样式配置 */
function addThemeToAppStyles(options) {
    return function (host) {
        const workspace = config_1.getWorkspace(host);
        const project = config_1.getProjectFromWorkspace(workspace, options.project);
        if (options.theme) {
            insertCustomTheme(project, host, workspace);
        }
        else {
            insertCompiledTheme(project, host, workspace);
        }
        return host;
    };
}
exports.addThemeToAppStyles = addThemeToAppStyles;
/** 将预设样式写入 theme.less，并添加到 angular.json */
function insertCustomTheme(project, host, workspace) {
    const themePath = ADD_CONFIG.CUSTOM_THEME_PATH;
    const customTheme = custom_theme_1.createCustomTheme();
    if (host.exists(themePath)) {
        const beforeContent = host.read(themePath).toString('utf8');
        if (beforeContent.indexOf(customTheme) === -1) {
            host.overwrite(themePath, `${customTheme}\n${beforeContent}`);
        }
    }
    else {
        host.create(themePath, custom_theme_1.createCustomTheme());
    }
    // tslint:disable-next-line:no-any
    if (project.targets || project.architect) {
        addStyleToTarget('build', host, workspace, project, themePath, ADD_CONFIG.COMPILED_THEME_PATH);
        addStyleToTarget('test', host, workspace, project, themePath, ADD_CONFIG.COMPILED_THEME_PATH);
    }
    else {
        throw new schematics_1.SchematicsException(`${project.name} does not have an architect or targets configuration`);
    }
}
/** 设置引导页面到 app.component.ts */
function setBootstrapPage() {
    return (host) => {
        host.overwrite(ADD_CONFIG.BOOT_PAGE_PATH, ADD_CONFIG.BOOT_PAGE_HTML);
        return host;
    };
}
/** 安装依赖 */
function installNodeDeps() {
    return (host, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
    };
}
/** 将编译的 css 添加到 angular.json */
function insertCompiledTheme(project, host, workspace) {
    const themePath = ADD_CONFIG.COMPILED_THEME_PATH;
    // tslint:disable-next-line:no-any
    if (project.targets || project.architect) {
        addStyleToTarget('build', host, workspace, project, themePath);
        addStyleToTarget('test', host, workspace, project, themePath);
    }
    else {
        throw new schematics_1.SchematicsException(`${project.name} does not have an architect or targets configuration`);
    }
}
/** Adds a style entry to the given target. */
function addStyleToTarget(targetName, host, workspace, project, asset, exclude = '') {
    const styleEntry = asset;
    const targetOptions = project_targets_1.getProjectTargetOptions(project, targetName);
    // We can't assume that any of these properties are defined, so safely add them as we go
    // if necessary.
    if (!targetOptions.styles) {
        targetOptions.styles = [styleEntry];
    }
    else {
        const existingStyles = targetOptions.styles.map(s => typeof s === 'string' ? s : s.input);
        const hasGivenTheme = existingStyles.find(s => s.includes(asset));
        if (exclude) {
            const removeIndex = targetOptions.styles.indexOf(exclude);
            if (removeIndex >= 0) {
                targetOptions.styles.splice(removeIndex, 1);
            }
        }
        if (!hasGivenTheme) {
            targetOptions.styles.splice(0, 0, styleEntry);
        }
    }
    host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
}
//# sourceMappingURL=index.js.map