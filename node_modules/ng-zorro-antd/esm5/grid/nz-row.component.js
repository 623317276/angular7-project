/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { matchMedia } from '../core/polyfill/match-media';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
/**
 * @record
 */
export function BreakpointMap() { }
function BreakpointMap_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BreakpointMap.prototype.xs;
    /** @type {?|undefined} */
    BreakpointMap.prototype.sm;
    /** @type {?|undefined} */
    BreakpointMap.prototype.md;
    /** @type {?|undefined} */
    BreakpointMap.prototype.lg;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xl;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xxl;
}
/** @type {?} */
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
var NzRowComponent = /** @class */ (function () {
    function NzRowComponent(elementRef, renderer, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this._align = 'top';
        this._justify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
    }
    Object.defineProperty(NzRowComponent.prototype, "nzType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRowComponent.prototype, "nzAlign", {
        get: /**
         * @return {?}
         */
        function () {
            return this._align;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._align = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRowComponent.prototype, "nzJustify", {
        get: /**
         * @return {?}
         */
        function () {
            return this._justify;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justify = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRowComponent.prototype, "nzGutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._gutter = value;
            this.updateGutter();
            this.setStyle();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzRowComponent.prototype.setStyle = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
        this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.calculateGutter = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return;
        }
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.updateGutter = /**
     * @return {?}
     */
    function () {
        this.actualGutter = this.calculateGutter();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRowComponent.prototype.onWindowResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.watchMedia();
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.watchMedia = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(responsiveMap).map(function (screen) {
            /** @type {?} */
            var matchBelow = matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                _this.breakPoint = screen;
            }
        });
        this.updateGutter();
        this.setStyle();
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzRowComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = !this.nzType,
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.watchMedia();
    };
    NzRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-row',
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NzRowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService }
    ]; };
    NzRowComponent.propDecorators = {
        nzType: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzJustify: [{ type: Input }],
        nzGutter: [{ type: Input }],
        onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return NzRowComponent;
}());
export { NzRowComponent };
function NzRowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRowComponent.prototype._gutter;
    /** @type {?} */
    NzRowComponent.prototype._type;
    /** @type {?} */
    NzRowComponent.prototype._align;
    /** @type {?} */
    NzRowComponent.prototype._justify;
    /** @type {?} */
    NzRowComponent.prototype.el;
    /** @type {?} */
    NzRowComponent.prototype.prefixCls;
    /** @type {?} */
    NzRowComponent.prototype.breakPoint;
    /** @type {?} */
    NzRowComponent.prototype.actualGutter;
    /** @type {?} */
    NzRowComponent.prototype.elementRef;
    /** @type {?} */
    NzRowComponent.prototype.renderer;
    /** @type {?} */
    NzRowComponent.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnRGLElBQU0sYUFBYSxHQUFrQjtJQUNuQyxFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxxQkFBcUI7SUFDMUIsR0FBRyxFQUFFLHFCQUFxQjtDQUMzQixDQUFDOztJQTBHQSx3QkFBbUIsVUFBc0IsRUFBUyxRQUFtQixFQUFTLHdCQUFrRDtRQUE3RyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7c0JBOUZ0RyxLQUFLO3dCQUNELE9BQU87a0JBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUNuQyxTQUFTO0tBNEY1QjtJQXhGRCxzQkFDSSxrQ0FBTTs7OztRQUtWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVJELFVBQ1csS0FBYTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7OztPQUFBO0lBTUQsc0JBQ0ksbUNBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFB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QUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVM7Z0JBQ3ZGO1FBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2xFOzs7O0lBS0QsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjs7Z0JBOUdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsUUFBUTtvQkFDN0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7b0JBQ2pELHFDQUE4QztpQkFDL0M7Ozs7Z0JBdENDLFVBQVU7Z0JBSVYsU0FBUztnQkFJRix3QkFBd0I7Ozt5QkEwQzlCLEtBQUs7MEJBVUwsS0FBSzs0QkFVTCxLQUFLOzJCQVVMLEtBQUs7aUNBOEJMLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBRSxRQUFRLENBQUU7O3lCQWhIN0M7O1NBeUNhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBtYXRjaE1lZGlhIH0gZnJvbSAnLi4vY29yZS9wb2x5ZmlsbC9tYXRjaC1tZWRpYSc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuXG5leHBvcnQgdHlwZSBOekp1c3RpZnkgPSAnc3RhcnQnIHwgJ2VuZCcgfCAnY2VudGVyJyB8ICdzcGFjZS1hcm91bmQnIHwgJ3NwYWNlLWJldHdlZW4nO1xuZXhwb3J0IHR5cGUgTnpBbGlnbiA9ICd0b3AnIHwgJ21pZGRsZScgfCAnYm90dG9tJztcbmV4cG9ydCB0eXBlIE56VHlwZSA9ICdmbGV4JyB8IG51bGw7XG5leHBvcnQgdHlwZSBCcmVha3BvaW50ID0gJ3h4bCcgfCAneGwnIHwgJ2xnJyB8ICdtZCcgfCAnc20nIHwgJ3hzJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVha3BvaW50TWFwIHtcbiAgeHM/OiBzdHJpbmc7XG4gIHNtPzogc3RyaW5nO1xuICBtZD86IHN0cmluZztcbiAgbGc/OiBzdHJpbmc7XG4gIHhsPzogc3RyaW5nO1xuICB4eGw/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHJlc3BvbnNpdmVNYXA6IEJyZWFrcG9pbnRNYXAgPSB7XG4gIHhzIDogJyhtYXgtd2lkdGg6IDU3NXB4KScsXG4gIHNtIDogJyhtaW4td2lkdGg6IDU3NnB4KScsXG4gIG1kIDogJyhtaW4td2lkdGg6IDc2OHB4KScsXG4gIGxnIDogJyhtaW4td2lkdGg6IDk5MnB4KScsXG4gIHhsIDogJyhtaW4td2lkdGg6IDEyMDBweCknLFxuICB4eGw6ICcobWluLXdpZHRoOiAxNjAwcHgpJ1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1yb3cnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcm93LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBudW1iZXIgfCBvYmplY3Q7XG4gIHByaXZhdGUgX3R5cGU6IE56VHlwZTtcbiAgcHJpdmF0ZSBfYWxpZ246IE56QWxpZ24gPSAndG9wJztcbiAgcHJpdmF0ZSBfanVzdGlmeTogTnpKdXN0aWZ5ID0gJ3N0YXJ0JztcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXJvdyc7XG4gIHByaXZhdGUgYnJlYWtQb2ludDogQnJlYWtwb2ludDtcbiAgYWN0dWFsR3V0dGVyOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHlwZSh2YWx1ZTogTnpUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuelR5cGUoKTogTnpUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFsaWduKHZhbHVlOiBOekFsaWduKSB7XG4gICAgdGhpcy5fYWxpZ24gPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpBbGlnbigpOiBOekFsaWduIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpKdXN0aWZ5KHZhbHVlOiBOekp1c3RpZnkpIHtcbiAgICB0aGlzLl9qdXN0aWZ5ID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56SnVzdGlmeSgpOiBOekp1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IG56R3V0dGVyKCk6IG51bWJlciB8IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuXG4gIHNldCBuekd1dHRlcih2YWx1ZTogbnVtYmVyIHwgb2JqZWN0KSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBzZXRTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tbGVmdCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tcmlnaHQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XG4gIH1cblxuICBjYWxjdWxhdGVHdXR0ZXIoKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpHdXR0ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJlYWtQb2ludCAmJiB0aGlzLm56R3V0dGVyWyB0aGlzLmJyZWFrUG9pbnQgXSkge1xuICAgICAgcmV0dXJuIHRoaXMubnpHdXR0ZXJbIHRoaXMuYnJlYWtQb2ludCBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlR3V0dGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0dWFsR3V0dGVyID0gdGhpcy5jYWxjdWxhdGVHdXR0ZXIoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbICckZXZlbnQnIF0pXG4gIG9uV2luZG93UmVzaXplKGU6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoTWVkaWEoKTtcbiAgfVxuXG4gIHdhdGNoTWVkaWEoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChzY3JlZW46IEJyZWFrcG9pbnQpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSBtYXRjaE1lZGlhKHJlc3BvbnNpdmVNYXBbIHNjcmVlbiBdKS5tYXRjaGVzO1xuICAgICAgaWYgKG1hdGNoQmVsb3cpIHtcbiAgICAgICAgdGhpcy5icmVha1BvaW50ID0gc2NyZWVuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9YCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAhdGhpcy5uelR5cGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWAgXSAgICAgICAgICAgICAgICAgIDogdGhpcy5uelR5cGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfS0ke3RoaXMubnpBbGlnbn1gIF0gIDogdGhpcy5uelR5cGUgJiYgdGhpcy5uekFsaWduLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX0tJHt0aGlzLm56SnVzdGlmeX1gIF06IHRoaXMubnpUeXBlICYmIHRoaXMubnpKdXN0aWZ5XG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLndhdGNoTWVkaWEoKTtcbiAgfVxufVxuIl19