/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzTabLabelDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this._disabled = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
    }
    /**
     * @return {?}
     */
    getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    getOffsetTop() {
        return this.elementRef.nativeElement.offsetTop;
    }
    /**
     * @return {?}
     */
    getOffsetHeight() {
        return this.elementRef.nativeElement.offsetHeight;
    }
}
NzTabLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tab-label]',
                host: {
                    '[class.ant-tabs-tab]': 'true'
                }
            },] }
];
/** @nocollapse */
NzTabLabelDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzTabLabelDirective.propDecorators = {
    disabled: [{ type: Input }, { type: HostBinding, args: ['class.ant-tabs-tab-disabled',] }]
};
function NzTabLabelDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabLabelDirective.prototype._disabled;
    /** @type {?} */
    NzTabLabelDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFiLWxhYmVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYi1sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUWpELE1BQU07Ozs7SUFjSixZQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO3lCQVpyQixLQUFLO0tBYXhCOzs7OztJQVhELElBRUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7SUFLRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7S0FDakQ7Ozs7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7S0FDbEQ7Ozs7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7S0FDaEQ7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7S0FDbkQ7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsSUFBSSxFQUFNO29CQUNSLHNCQUFzQixFQUFFLE1BQU07aUJBQy9CO2FBQ0Y7Ozs7WUFUbUIsVUFBVTs7O3VCQWMzQixLQUFLLFlBQ0wsV0FBVyxTQUFDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXRhYi1sYWJlbF0nLFxuICBob3N0ICAgIDoge1xuICAgICdbY2xhc3MuYW50LXRhYnMtdGFiXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56VGFiTGFiZWxEaXJlY3RpdmUge1xuXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtdGFicy10YWItZGlzYWJsZWQnKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIGdldE9mZnNldExlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgfVxuXG4gIGdldE9mZnNldFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICB9XG5cbiAgZ2V0T2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcDtcbiAgfVxuXG4gIGdldE9mZnNldEhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH1cbn1cbiJdfQ==