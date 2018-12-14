/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from '../icon/nz-icon.module';
import { NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER } from './nz-notification-config';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import { NzNotificationComponent } from './nz-notification.component';
import { NzNotificationService } from './nz-notification.service';
var NzNotificationModule = /** @class */ (function () {
    function NzNotificationModule() {
    }
    NzNotificationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzIconModule],
                    declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                    providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER, NzNotificationService],
                    entryComponents: [NzNotificationContainerComponent]
                },] }
    ];
    return NzNotificationModule;
}());
export { NzNotificationModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJub3RpZmljYXRpb24vbnotbm90aWZpY2F0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Z0JBRWpFLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQVUsQ0FBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBRTtvQkFDOUQsWUFBWSxFQUFLLENBQUUsdUJBQXVCLEVBQUUsZ0NBQWdDLENBQUU7b0JBQzlFLFNBQVMsRUFBUSxDQUFFLHVDQUF1QyxFQUFFLHFCQUFxQixDQUFFO29CQUNuRixlQUFlLEVBQUUsQ0FBRSxnQ0FBZ0MsQ0FBRTtpQkFDdEQ7OytCQWZEOztTQWdCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL256LWljb24ubW9kdWxlJztcblxuaW1wb3J0IHsgTlpfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHX1BST1ZJREVSIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29uZmlnJztcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0cyAgICAgICAgOiBbIENvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpJY29uTW9kdWxlIF0sXG4gIGRlY2xhcmF0aW9ucyAgIDogWyBOek5vdGlmaWNhdGlvbkNvbXBvbmVudCwgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgXSxcbiAgcHJvdmlkZXJzICAgICAgOiBbIE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJR19QUk9WSURFUiwgTnpOb3RpZmljYXRpb25TZXJ2aWNlIF0sXG4gIGVudHJ5Q29tcG9uZW50czogWyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIE56Tm90aWZpY2F0aW9uTW9kdWxlIHtcbn1cbiJdfQ==