"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const config_1 = require("../utils/devkit-utils/config");
const project_targets_1 = require("../utils/project-targets");
const ICON_ASSET_CONFIG = {
    'glob': '**/*',
    'input': './node_modules/@ant-design/icons-angular/src/inline-svg/',
    'output': '/assets/'
};
function default_1(options) {
    return schematics_1.chain([
        addIconToAssets(options)
    ]);
}
exports.default = default_1;
function addIconToAssets(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = config_1.getProjectFromWorkspace(workspace, options.project);
        const targetOptions = project_targets_1.getProjectTargetOptions(project, 'build');
        if (!targetOptions.assets) {
            targetOptions.assets = [Object.assign({}, ICON_ASSET_CONFIG)];
        }
        else {
            let hasIconAssetConfig = false;
            // tslint:disable-next-line
            for (let i = 0; i < targetOptions.assets.length; i++) {
                const asset = targetOptions.assets[i];
                if (typeof asset === 'object' && !Array.isArray(asset) && equalObjects(ICON_ASSET_CONFIG, asset)) {
                    hasIconAssetConfig = true;
                    break;
                }
            }
            if (!hasIconAssetConfig) {
                targetOptions.assets.push(Object.assign({}, ICON_ASSET_CONFIG));
            }
        }
        host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
        return host;
    };
}
function equalObjects(object, other) {
    const objectKeys = Object.keys(object);
    const otherKeys = Object.keys(other);
    if (objectKeys.length !== otherKeys.length) {
        return false;
    }
    for (let i = 0; i < otherKeys.length; i++) {
        const key = objectKeys[i];
        if (!other.hasOwnProperty(key) || object[key] !== other[key]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=index.js.map