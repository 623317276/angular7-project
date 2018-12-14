/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowComponent } from '../grid/nz-row.component';
import { NzRowDirective } from '../grid/nz-row.directive';
export class NzFormLabelComponent extends NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzRowComponent
     * @param {?} nzRowDirective
     * @param {?} renderer
     */
    constructor(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) {
        super(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer);
        this._required = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzRequired(value) {
        this._required = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzRequired() {
        return this._required;
    }
}
NzFormLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-label',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                template: "<label [attr.for]=\"nzFor\" [class.ant-form-item-required]=\"nzRequired\">\n  <ng-content></ng-content>\n</label>",
                host: {
                    '[class.ant-form-item-label]': 'true'
                }
            }] }
];
/** @nocollapse */
NzFormLabelComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 }
];
NzFormLabelComponent.propDecorators = {
    nzFor: [{ type: Input }],
    nzRequired: [{ type: Input }]
};
function NzFormLabelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormLabelComponent.prototype.nzFor;
    /** @type {?} */
    NzFormLabelComponent.prototype._required;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZm9ybS9uei1mb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVcxRCxNQUFNLDJCQUE0QixTQUFRLGNBQWM7Ozs7Ozs7O0lBYXRELFlBQVksd0JBQWtELEVBQUUsVUFBc0IsRUFBc0IsY0FBOEIsRUFBc0IsY0FBOEIsRUFBRSxRQUFtQjtRQUNqTixLQUFLLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7eUJBWnBFLEtBQUs7S0FheEI7Ozs7O0lBWEQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsZUFBZTtnQkFDcEMsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7Z0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLDZIQUFxRDtnQkFDckQsSUFBSSxFQUFpQjtvQkFDbkIsNkJBQTZCLEVBQUUsTUFBTTtpQkFDdEM7YUFDRjs7OztZQWRRLHdCQUF3QjtZQURiLFVBQVU7WUFJckIsY0FBYyx1QkF5Qm9FLFFBQVEsWUFBSSxJQUFJO1lBeEJsRyxjQUFjLHVCQXdCd0gsUUFBUSxZQUFJLElBQUk7WUE3QnhHLFNBQVM7OztvQkFpQjdELEtBQUs7eUJBR0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekNvbENvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQvbnotY29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJvd0NvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQvbnotcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4uL2dyaWQvbnotcm93LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotZm9ybS1sYWJlbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1sYWJlbF0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekZvcm1MYWJlbENvbXBvbmVudCBleHRlbmRzIE56Q29sQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpGb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpSZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93Q29tcG9uZW50OiBOelJvd0NvbXBvbmVudCwgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Um93Q29tcG9uZW50LCBuelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXIpO1xuICB9XG59XG4iXX0=