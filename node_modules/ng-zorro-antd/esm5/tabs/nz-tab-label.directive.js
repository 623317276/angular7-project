/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzTabLabelDirective = /** @class */ (function () {
    function NzTabLabelDirective(elementRef) {
        this.elementRef = elementRef;
        this._disabled = false;
    }
    Object.defineProperty(NzTabLabelDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetLeft = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetWidth = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetTop = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetTop;
    };
    /**
     * @return {?}
     */
    NzTabLabelDirective.prototype.getOffsetHeight = /**
     * @return {?}
     */
    function () {
        return this.elementRef.nativeElement.offsetHeight;
    };
    NzTabLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-tab-label]',
                    host: {
                        '[class.ant-tabs-tab]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTabLabelDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NzTabLabelDirective.propDecorators = {
        disabled: [{ type: Input }, { type: HostBinding, args: ['class.ant-tabs-tab-disabled',] }]
    };
    return NzTabLabelDirective;
}());
export { NzTabLabelDirective };
function NzTabLabelDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabLabelDirective.prototype._disabled;
    /** @type {?} */
    NzTabLabelDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYi1sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXNCL0MsNkJBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7eUJBWnJCLEtBQUs7S0FheEI7SUFYRCxzQkFFSSx5Q0FBUTs7OztRQUlaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVJELFVBRWEsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7Ozs7SUFTRCwyQ0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztLQUNqRDs7OztJQUVELDRDQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0tBQ2xEOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7S0FDaEQ7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztLQUNuRDs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixJQUFJLEVBQU07d0JBQ1Isc0JBQXNCLEVBQUUsTUFBTTtxQkFDL0I7aUJBQ0Y7Ozs7Z0JBVG1CLFVBQVU7OzsyQkFjM0IsS0FBSyxZQUNMLFdBQVcsU0FBQyw2QkFBNkI7OzhCQWY1Qzs7U0FVYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei10YWItbGFiZWxdJyxcbiAgaG9zdCAgICA6IHtcbiAgICAnW2NsYXNzLmFudC10YWJzLXRhYl0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelRhYkxhYmVsRGlyZWN0aXZlIHtcblxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXRhYnMtdGFiLWRpc2FibGVkJylcbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBnZXRPZmZzZXRMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XG4gIH1cblxuICBnZXRPZmZzZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgfVxuXG4gIGdldE9mZnNldFRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRUb3A7XG4gIH1cblxuICBnZXRPZmZzZXRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICB9XG59XG4iXX0=