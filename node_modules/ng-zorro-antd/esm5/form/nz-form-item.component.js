/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzRowComponent } from '../grid/nz-row.component';
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
var NzFormItemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzFormItemComponent, _super);
    function NzFormItemComponent(elementRef, renderer, nzUpdateHostClassService) {
        var _this = _super.call(this, elementRef, renderer, nzUpdateHostClassService) || this;
        _this._flex = false;
        _this.withHelp = 0;
        return _this;
    }
    Object.defineProperty(NzFormItemComponent.prototype, "nzFlex", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._flex = toBoolean(value);
            if (this._flex) {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
            }
            else {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzFormItemComponent.prototype.enableHelp = /**
     * @return {?}
     */
    function () {
        this.withHelp++;
    };
    /**
     * @return {?}
     */
    NzFormItemComponent.prototype.disableHelp = /**
     * @return {?}
     */
    function () {
        this.withHelp--;
    };
    NzFormItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-item',
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-form-item]': 'true',
                        '[class.ant-form-item-with-help]': 'withHelp>0'
                    },
                    styles: [":host {\n    display: block;\n  }"]
                }] }
    ];
    /** @nocollapse */
    NzFormItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService }
    ]; };
    NzFormItemComponent.propDecorators = {
        nzFlex: [{ type: Input }]
    };
    return NzFormItemComponent;
}(NzRowComponent));
export { NzFormItemComponent };
function NzFormItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormItemComponent.prototype._flex;
    /** @type {?} */
    NzFormItemComponent.prototype.withHelp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0lBZ0JqQiwrQ0FBYztJQXNCckQsNkJBQVksVUFBc0IsRUFBRSxRQUFtQixFQUFFLHdCQUFrRDtRQUEzRyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLENBQUMsU0FDdEQ7c0JBdkJlLEtBQUs7eUJBQ1YsQ0FBQzs7S0FzQlg7SUFwQkQsc0JBQ0ksdUNBQU07Ozs7O1FBRFYsVUFDVyxLQUFjO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDMUU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDckU7U0FDRjs7O09BQUE7Ozs7SUFFRCx3Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGNBQWM7b0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO29CQUNqRCxxQ0FBb0Q7b0JBQ3BELElBQUksRUFBaUI7d0JBQ25CLHVCQUF1QixFQUFZLE1BQU07d0JBQ3pDLGlDQUFpQyxFQUFFLFlBQVk7cUJBQ2hEOzZCQUNzQixtQ0FFckI7aUJBQ0g7Ozs7Z0JBbEJtQixVQUFVO2dCQUFTLFNBQVM7Z0JBQ3ZDLHdCQUF3Qjs7O3lCQXNCOUIsS0FBSzs7OEJBdkJSO0VBbUJ5QyxjQUFjO1NBQTFDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC9uei1yb3cuY29tcG9uZW50JztcblxuLyoqIHNob3VsZCBhZGQgbnotcm93IGRpcmVjdGl2ZSB0byBob3N0LCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy84Nzg1ICoqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1mb3JtLWl0ZW0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotZm9ybS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbV0nICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdJzogJ3dpdGhIZWxwPjAnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfWAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekZvcm1JdGVtQ29tcG9uZW50IGV4dGVuZHMgTnpSb3dDb21wb25lbnQge1xuICBwcml2YXRlIF9mbGV4ID0gZmFsc2U7XG4gIHdpdGhIZWxwID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgbnpGbGV4KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmxleCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2ZsZXgpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICB9XG4gIH1cblxuICBlbmFibGVIZWxwKCk6IHZvaWQge1xuICAgIHRoaXMud2l0aEhlbHArKztcbiAgfVxuXG4gIGRpc2FibGVIZWxwKCk6IHZvaWQge1xuICAgIHRoaXMud2l0aEhlbHAtLTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgcmVuZGVyZXIsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==