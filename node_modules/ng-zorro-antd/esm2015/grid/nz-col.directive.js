/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Host, Optional, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzColComponent } from './nz-col.component';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
export class NzColDirective extends NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzRowComponent
     * @param {?} nzRowDirective
     * @param {?} renderer
     */
    constructor(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) {
        super(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer);
    }
}
NzColDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-col]',
                providers: [NzUpdateHostClassService]
            },] }
];
/** @nocollapse */
NzColDirective.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixRQUFRLEVBQ1IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTXBELE1BQU0scUJBQXNCLFNBQVEsY0FBYzs7Ozs7Ozs7SUFDaEQsWUFBWSx3QkFBa0QsRUFBRSxVQUFzQixFQUFzQixjQUE4QixFQUFzQixjQUE4QixFQUFFLFFBQW1CO1FBQ2pOLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUN2Rjs7O1lBUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRyxVQUFVO2dCQUNyQixTQUFTLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTthQUN4Qzs7OztZQVRRLHdCQUF3QjtZQU4vQixVQUFVO1lBU0gsY0FBYyx1QkFRb0UsUUFBUSxZQUFJLElBQUk7WUFQbEcsY0FBYyx1QkFPd0gsUUFBUSxZQUFJLElBQUk7WUFkN0osU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTnpDb2xDb21wb25lbnQgfSBmcm9tICcuL256LWNvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSb3dDb21wb25lbnQgfSBmcm9tICcuL256LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL256LXJvdy5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IgOiAnW256LWNvbF0nLFxuICBwcm92aWRlcnM6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xEaXJlY3RpdmUgZXh0ZW5kcyBOekNvbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93Q29tcG9uZW50OiBOelJvd0NvbXBvbmVudCwgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Um93Q29tcG9uZW50LCBuelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXIpO1xuICB9XG59XG4iXX0=