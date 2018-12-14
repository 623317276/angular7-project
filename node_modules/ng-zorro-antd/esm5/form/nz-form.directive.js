/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzFormDirective = /** @class */ (function () {
    function NzFormDirective(elementRef, renderer, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-form';
        this._layout = 'horizontal';
    }
    Object.defineProperty(NzFormDirective.prototype, "nzLayout", {
        get: /**
         * @return {?}
         */
        function () {
            return this._layout;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._layout = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzFormDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.nzLayout] = this.nzLayout,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzFormDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    NzFormDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-form]',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzFormDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService }
    ]; };
    NzFormDirective.propDecorators = {
        nzLayout: [{ type: Input }]
    };
    return NzFormDirective;
}());
export { NzFormDirective };
function NzFormDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormDirective.prototype.el;
    /** @type {?} */
    NzFormDirective.prototype.prefixCls;
    /** @type {?} */
    NzFormDirective.prototype._layout;
    /** @type {?} */
    NzFormDirective.prototype.elementRef;
    /** @type {?} */
    NzFormDirective.prototype.renderer;
    /** @type {?} */
    NzFormDirective.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZm9ybS9uei1mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7SUE2QnBGLHlCQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQVUsd0JBQWtEO1FBQS9HLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtrQkF0QmpILElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTt5QkFDbkMsVUFBVTt1QkFDSixZQUFZO0tBcUI3QjtJQW5CRCxzQkFDSSxxQ0FBUTs7OztRQUtaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVJELFVBQ2EsS0FBYTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7OztPQUFBOzs7O0lBTUQscUNBQVc7OztJQUFYOzs7UUFDRSxJQUFNLFFBQVE7WUFDWixHQUFFLEtBQUcsSUFBSSxDQUFDLFNBQVcsSUFBcUIsSUFBSTtZQUM5QyxHQUFLLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVUsSUFBSSxJQUFJLENBQUMsUUFBUTtnQkFDdkQ7UUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDbEU7Ozs7SUFLRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFHLFdBQVc7b0JBQ3RCLFNBQVMsRUFBRSxDQUFFLHdCQUF3QixDQUFFO2lCQUN4Qzs7OztnQkFObUIsVUFBVTtnQkFBaUIsU0FBUztnQkFDL0Msd0JBQXdCOzs7MkJBVzlCLEtBQUs7OzBCQVpSOztTQU9hLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yIDogJ1tuei1mb3JtXScsXG4gIHByb3ZpZGVyczogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBOekZvcm1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJlZml4Q2xzID0gJ2FudC1mb3JtJztcbiAgcHJpdmF0ZSBfbGF5b3V0ID0gJ2hvcml6b250YWwnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekxheW91dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGF5b3V0ID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56TGF5b3V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dDtcbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc31gIF0gICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uekxheW91dH1gIF06IHRoaXMubnpMYXlvdXRcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=