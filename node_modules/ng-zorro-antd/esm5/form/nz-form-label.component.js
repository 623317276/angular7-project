/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowComponent } from '../grid/nz-row.component';
import { NzRowDirective } from '../grid/nz-row.directive';
var NzFormLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzFormLabelComponent, _super);
    function NzFormLabelComponent(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) || this;
        _this._required = false;
        return _this;
    }
    Object.defineProperty(NzFormLabelComponent.prototype, "nzRequired", {
        get: /**
         * @return {?}
         */
        function () {
            return this._required;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
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
    NzFormLabelComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 }
    ]; };
    NzFormLabelComponent.propDecorators = {
        nzFor: [{ type: Input }],
        nzRequired: [{ type: Input }]
    };
    return NzFormLabelComponent;
}(NzColComponent));
export { NzFormLabelComponent };
function NzFormLabelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormLabelComponent.prototype.nzFor;
    /** @type {?} */
    NzFormLabelComponent.prototype._required;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZm9ybS9uei1mb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBV2hCLGdEQUFjO0lBYXRELDhCQUFZLHdCQUFrRCxFQUFFLFVBQXNCLEVBQXNCLGNBQThCLEVBQXNCLGNBQThCLEVBQUUsUUFBbUI7UUFBbk4sWUFDRSxrQkFBTSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsU0FDdEY7MEJBYm1CLEtBQUs7O0tBYXhCO0lBWEQsc0JBQ0ksNENBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxlQUFlO29CQUNwQyxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtvQkFDakQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsNkhBQXFEO29CQUNyRCxJQUFJLEVBQWlCO3dCQUNuQiw2QkFBNkIsRUFBRSxNQUFNO3FCQUN0QztpQkFDRjs7OztnQkFkUSx3QkFBd0I7Z0JBRGIsVUFBVTtnQkFJckIsY0FBYyx1QkF5Qm9FLFFBQVEsWUFBSSxJQUFJO2dCQXhCbEcsY0FBYyx1QkF3QndILFFBQVEsWUFBSSxJQUFJO2dCQTdCeEcsU0FBUzs7O3dCQWlCN0QsS0FBSzs2QkFHTCxLQUFLOzsrQkFwQlI7RUFnQjBDLGNBQWM7U0FBM0Msb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Q29sQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC9uei1jb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC9uei1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi4vZ3JpZC9uei1yb3cuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1mb3JtLWxhYmVsJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWZvcm0tbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWxhYmVsXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUxhYmVsQ29tcG9uZW50IGV4dGVuZHMgTnpDb2xDb21wb25lbnQge1xuICBASW5wdXQoKSBuekZvcjogc3RyaW5nO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56UmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpSb3dDb21wb25lbnQ6IE56Um93Q29tcG9uZW50LCBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZiwgbnpSb3dDb21wb25lbnQsIG56Um93RGlyZWN0aXZlLCByZW5kZXJlcik7XG4gIH1cbn1cbiJdfQ==