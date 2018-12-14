/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Optional, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzColComponent } from './nz-col.component';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
var NzColDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzColDirective, _super);
    function NzColDirective(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) {
        return _super.call(this, nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) || this;
    }
    NzColDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-col]',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzColDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 }
    ]; };
    return NzColDirective;
}(NzColComponent));
export { NzColDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFNaEIsMENBQWM7SUFDaEQsd0JBQVksd0JBQWtELEVBQUUsVUFBc0IsRUFBc0IsY0FBOEIsRUFBc0IsY0FBOEIsRUFBRSxRQUFtQjtlQUNqTixrQkFBTSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUM7S0FDdEY7O2dCQVBGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUcsVUFBVTtvQkFDckIsU0FBUyxFQUFFLENBQUUsd0JBQXdCLENBQUU7aUJBQ3hDOzs7O2dCQVRRLHdCQUF3QjtnQkFOL0IsVUFBVTtnQkFTSCxjQUFjLHVCQVFvRSxRQUFRLFlBQUksSUFBSTtnQkFQbEcsY0FBYyx1QkFPd0gsUUFBUSxZQUFJLElBQUk7Z0JBZDdKLFNBQVM7O3lCQUxYO0VBa0JvQyxjQUFjO1NBQXJDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbmltcG9ydCB7IE56Q29sQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yIDogJ1tuei1jb2xdJyxcbiAgcHJvdmlkZXJzOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q29sRGlyZWN0aXZlIGV4dGVuZHMgTnpDb2xDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0NvbXBvbmVudDogTnpSb3dDb21wb25lbnQsIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpSb3dEaXJlY3RpdmU6IE56Um93RGlyZWN0aXZlLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgc3VwZXIobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmLCBuelJvd0NvbXBvbmVudCwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcbiAgfVxufVxuIl19