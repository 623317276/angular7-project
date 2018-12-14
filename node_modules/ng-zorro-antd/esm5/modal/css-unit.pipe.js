/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var CssUnitPipe = /** @class */ (function () {
    function CssUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    CssUnitPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    function (value, defaultUnit) {
        if (defaultUnit === void 0) { defaultUnit = 'px'; }
        /** @type {?} */
        var formatted = +value; // force convert
        return isNaN(formatted) ? "" + value : "" + formatted + defaultUnit;
    };
    CssUnitPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'toCssUnit'
                },] }
    ];
    return CssUnitPipe;
}());
export { CssUnitPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtb2RhbC9jc3MtdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lBT2xELCtCQUFTOzs7OztJQUFULFVBQVUsS0FBc0IsRUFBRSxXQUEwQjtRQUExQiw0QkFBQSxFQUFBLGtCQUEwQjs7UUFDMUQsSUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDekIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsS0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFHLFNBQVMsR0FBRyxXQUFhLENBQUM7S0FDckU7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7O3NCQUpEOztTQU1hLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RvQ3NzVW5pdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDc3NVbml0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZywgZGVmYXVsdFVuaXQ6IHN0cmluZyA9ICdweCcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZvcm1hdHRlZCA9ICt2YWx1ZTsgLy8gZm9yY2UgY29udmVydFxuICAgIHJldHVybiBpc05hTihmb3JtYXR0ZWQpID8gYCR7dmFsdWV9YCA6IGAke2Zvcm1hdHRlZH0ke2RlZmF1bHRVbml0fWA7XG4gIH1cbn1cbiJdfQ==