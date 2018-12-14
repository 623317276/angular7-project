/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2, Self } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import calculateNodeHeight from '../core/util/calculate-node-height';
import { toBoolean } from '../core/util/convert';
/**
 * @record
 */
export function AutoSizeType() { }
function AutoSizeType_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    AutoSizeType.prototype.minRows;
    /** @type {?|undefined} */
    AutoSizeType.prototype.maxRows;
}
var NzInputDirective = /** @class */ (function () {
    function NzInputDirective(elementRef, renderer, ngModel, ngControl) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngModel = ngModel;
        this.ngControl = ngControl;
        this._size = 'default';
        this._disabled = false;
        this._autosize = false;
        this.el = this.elementRef.nativeElement;
        this.isInit = false;
    }
    Object.defineProperty(NzInputDirective.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
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
    Object.defineProperty(NzInputDirective.prototype, "nzAutosize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autosize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this._autosize = true;
            }
            else {
                this._autosize = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputDirective.prototype, "setLgClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzInputDirective.prototype, "setSmClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzInputDirective.prototype.textAreaOnChange = /**
     * @return {?}
     */
    function () {
        if (this.nzAutosize) {
            this.resizeTextArea();
        }
    };
    /**
     * @return {?}
     */
    NzInputDirective.prototype.resizeTextArea = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var textAreaRef = /** @type {?} */ (this.el);
        /** @type {?} */
        var maxRows = this.nzAutosize ? (/** @type {?} */ (this.nzAutosize)).maxRows || null : null;
        /** @type {?} */
        var minRows = this.nzAutosize ? (/** @type {?} */ (this.nzAutosize)).minRows || null : null;
        if ((this.previousValue === textAreaRef.value) && (this.previewsMaxRows === maxRows) && (this.previewsMinRows === minRows)) {
            return;
        }
        this.previousValue = textAreaRef.value;
        this.previewsMinRows = minRows;
        this.previewsMaxRows = maxRows;
        // eliminate jitter
        this.renderer.setStyle(textAreaRef, 'height', 'auto');
        /** @type {?} */
        var textAreaStyles = calculateNodeHeight(textAreaRef, false, minRows, maxRows);
        this.renderer.setStyle(textAreaRef, 'height', textAreaStyles.height + "px");
        this.renderer.setStyle(textAreaRef, 'overflowY', textAreaStyles.overflowY);
        this.renderer.setStyle(textAreaRef, 'minHeight', textAreaStyles.minHeight + "px");
        this.renderer.setStyle(textAreaRef, 'maxHeight', textAreaStyles.maxHeight + "px");
    };
    /**
     * @return {?}
     */
    NzInputDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.nzAutosize && this.isInit) {
            this.resizeTextArea();
        }
    };
    /**
     * @return {?}
     */
    NzInputDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        if (this.nzAutosize) {
            this.resizeTextArea();
        }
    };
    NzInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-input]',
                    host: {
                        '[class.ant-input]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzInputDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgModel, decorators: [{ type: Optional }] },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
    NzInputDirective.propDecorators = {
        nzSize: [{ type: Input }],
        disabled: [{ type: Input }, { type: HostBinding, args: ["class.ant-input-disabled",] }],
        nzAutosize: [{ type: Input }],
        setLgClass: [{ type: HostBinding, args: ["class.ant-input-lg",] }],
        setSmClass: [{ type: HostBinding, args: ["class.ant-input-sm",] }],
        textAreaOnChange: [{ type: HostListener, args: ['input',] }]
    };
    return NzInputDirective;
}());
export { NzInputDirective };
function NzInputDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzInputDirective.prototype._size;
    /** @type {?} */
    NzInputDirective.prototype._disabled;
    /** @type {?} */
    NzInputDirective.prototype._autosize;
    /** @type {?} */
    NzInputDirective.prototype.el;
    /** @type {?} */
    NzInputDirective.prototype.previousValue;
    /** @type {?} */
    NzInputDirective.prototype.previewsMinRows;
    /** @type {?} */
    NzInputDirective.prototype.previewsMaxRows;
    /** @type {?} */
    NzInputDirective.prototype.isInit;
    /** @type {?} */
    NzInputDirective.prototype.elementRef;
    /** @type {?} */
    NzInputDirective.prototype.renderer;
    /** @type {?} */
    NzInputDirective.prototype.ngModel;
    /** @type {?} */
    NzInputDirective.prototype.ngControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImlucHV0L256LWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLFNBQVMsRUFDVCxJQUFJLEVBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRCxPQUFPLG1CQUFtQixNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lBK0YvQywwQkFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUFzQixPQUFnQixFQUE2QixTQUFvQjtRQUExSSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFzQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQTZCLGNBQVMsR0FBVCxTQUFTLENBQVc7cUJBakY5SSxTQUFTO3lCQUNMLEtBQUs7eUJBQ21CLEtBQUs7a0JBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3NCQUlqRSxLQUFLO0tBMkVyQjtJQXpFRCxzQkFDSSxvQ0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQUVELFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjs7O09BSkE7SUFNRCxzQkFFSSxzQ0FBUTs7OztRQUlaO1lBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtnQkFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFD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Rjs7OztJQUVELDBDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7S0FDRjs7Z0JBdEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsSUFBSSxFQUFNO3dCQUNSLG1CQUFtQixFQUFFLE1BQU07cUJBQzVCO2lCQUNGOzs7O2dCQXZCQyxVQUFVO2dCQUtWLFNBQVM7Z0JBR1MsT0FBTyx1QkFrR2lELFFBQVE7Z0JBbEczRSxTQUFTLHVCQWtHZ0csUUFBUSxZQUFJLElBQUk7Ozt5QkF4RS9ILEtBQUs7MkJBU0wsS0FBSyxZQUNMLFdBQVcsU0FBQywwQkFBMEI7NkJBWXRDLEtBQUs7NkJBYUwsV0FBVyxTQUFDLG9CQUFvQjs2QkFLaEMsV0FBVyxTQUFDLG9CQUFvQjttQ0FLaEMsWUFBWSxTQUFDLE9BQU87OzJCQW5GdkI7O1NBNEJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCBjYWxjdWxhdGVOb2RlSGVpZ2h0IGZyb20gJy4uL2NvcmUvdXRpbC9jYWxjdWxhdGUtbm9kZS1oZWlnaHQnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9TaXplVHlwZSB7XG4gIG1pblJvd3M/OiBudW1iZXI7XG4gIG1heFJvd3M/OiBudW1iZXI7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1pbnB1dF0nLFxuICBob3N0ICAgIDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0XSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXREaXJlY3RpdmUgaW1wbGVtZW50cyBEb0NoZWNrLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfc2l6ZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXV0b3NpemU6IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbDogSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgcHJldmlld3NNaW5Sb3dzOiBudW1iZXI7XG4gIHByaXZhdGUgcHJldmlld3NNYXhSb3dzOiBudW1iZXI7XG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56U2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgc2V0IG56U2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRgKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekF1dG9zaXplKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgQXV0b1NpemVUeXBlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2F1dG9zaXplID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXV0b3NpemUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpBdXRvc2l6ZSgpOiBzdHJpbmcgfCBib29sZWFuIHwgQXV0b1NpemVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NpemU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1sZ2ApXG4gIGdldCBzZXRMZ0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LXNtYClcbiAgZ2V0IHNldFNtQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaXplID09PSAnc21hbGwnO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICB0ZXh0QXJlYU9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b3NpemUpIHtcbiAgICAgIHRoaXMucmVzaXplVGV4dEFyZWEoKTtcbiAgICB9XG4gIH1cblxuICByZXNpemVUZXh0QXJlYSgpOiB2b2lkIHtcbiAgICBjb25zdCB0ZXh0QXJlYVJlZiA9IHRoaXMuZWwgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBjb25zdCBtYXhSb3dzID0gdGhpcy5uekF1dG9zaXplID8gKHRoaXMubnpBdXRvc2l6ZSBhcyBBdXRvU2l6ZVR5cGUpLm1heFJvd3MgfHwgbnVsbCA6IG51bGw7XG4gICAgY29uc3QgbWluUm93cyA9IHRoaXMubnpBdXRvc2l6ZSA/ICh0aGlzLm56QXV0b3NpemUgYXMgQXV0b1NpemVUeXBlKS5taW5Sb3dzIHx8IG51bGwgOiBudWxsO1xuICAgIGlmICgodGhpcy5wcmV2aW91c1ZhbHVlID09PSB0ZXh0QXJlYVJlZi52YWx1ZSkgJiYgKHRoaXMucHJldmlld3NNYXhSb3dzID09PSBtYXhSb3dzKSAmJiAodGhpcy5wcmV2aWV3c01pblJvd3MgPT09IG1pblJvd3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRleHRBcmVhUmVmLnZhbHVlO1xuICAgIHRoaXMucHJldmlld3NNaW5Sb3dzID0gbWluUm93cztcbiAgICB0aGlzLnByZXZpZXdzTWF4Um93cyA9IG1heFJvd3M7XG4gICAgLy8gZWxpbWluYXRlIGppdHRlclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGV4dEFyZWFSZWYsICdoZWlnaHQnLCAnYXV0bycpO1xuXG4gICAgY29uc3QgdGV4dEFyZWFTdHlsZXMgPSBjYWxjdWxhdGVOb2RlSGVpZ2h0KHRleHRBcmVhUmVmLCBmYWxzZSwgbWluUm93cywgbWF4Um93cyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0ZXh0QXJlYVJlZiwgJ2hlaWdodCcsIGAke3RleHRBcmVhU3R5bGVzLmhlaWdodH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGV4dEFyZWFSZWYsICdvdmVyZmxvd1knLCB0ZXh0QXJlYVN0eWxlcy5vdmVyZmxvd1kpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGV4dEFyZWFSZWYsICdtaW5IZWlnaHQnLCBgJHt0ZXh0QXJlYVN0eWxlcy5taW5IZWlnaHR9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRleHRBcmVhUmVmLCAnbWF4SGVpZ2h0JywgYCR7dGV4dEFyZWFTdHlsZXMubWF4SGVpZ2h0fXB4YCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsLCBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b3NpemUgJiYgdGhpcy5pc0luaXQpIHtcbiAgICAgIHRoaXMucmVzaXplVGV4dEFyZWEoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIGlmICh0aGlzLm56QXV0b3NpemUpIHtcbiAgICAgIHRoaXMucmVzaXplVGV4dEFyZWEoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==