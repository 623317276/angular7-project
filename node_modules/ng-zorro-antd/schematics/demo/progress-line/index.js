"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const component_1 = require("../../utils/devkit-utils/component");
function default_1(options) {
    return schematics_1.chain([
        component_1.buildComponent(Object.assign({}, options))
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map