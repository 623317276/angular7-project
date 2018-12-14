/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from '../icon/nz-icon.module';
import { NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER } from './nz-message-config';
import { NzMessageContainerComponent } from './nz-message-container.component';
import { NzMessageComponent } from './nz-message.component';
import { NzMessageService } from './nz-message.service';
var NzMessageModule = /** @class */ (function () {
    function NzMessageModule() {
    }
    NzMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzIconModule],
                    declarations: [NzMessageContainerComponent, NzMessageComponent],
                    providers: [NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER, NzMessageService],
                    entryComponents: [NzMessageContainerComponent]
                },] }
    ];
    return NzMessageModule;
}());
export { NzMessageModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVzc2FnZS9uei1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Z0JBRXZELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQVUsQ0FBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBRTtvQkFDOUQsWUFBWSxFQUFLLENBQUUsMkJBQTJCLEVBQUUsa0JBQWtCLENBQUU7b0JBQ3BFLFNBQVMsRUFBUSxDQUFFLGtDQUFrQyxFQUFFLGdCQUFnQixDQUFFO29CQUN6RSxlQUFlLEVBQUUsQ0FBRSwyQkFBMkIsQ0FBRTtpQkFDakQ7OzBCQWZEOztTQWdCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUdfUFJPVklERVIgfSBmcm9tICcuL256LW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vbnotbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vbnotbWVzc2FnZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0cyAgICAgICAgOiBbIENvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpJY29uTW9kdWxlIF0sXG4gIGRlY2xhcmF0aW9ucyAgIDogWyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIE56TWVzc2FnZUNvbXBvbmVudCBdLFxuICBwcm92aWRlcnMgICAgICA6IFsgTlpfTUVTU0FHRV9ERUZBVUxUX0NPTkZJR19QUk9WSURFUiwgTnpNZXNzYWdlU2VydmljZSBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgTnpNZXNzYWdlTW9kdWxlIHtcbn1cbiJdfQ==