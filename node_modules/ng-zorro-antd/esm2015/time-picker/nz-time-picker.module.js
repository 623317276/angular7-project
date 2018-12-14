/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzTimePickerPanelComponent } from './nz-time-picker-panel.component';
import { NzTimePickerComponent } from './nz-time-picker.component';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
export class NzTimePickerModule {
}
NzTimePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NzTimePickerComponent,
                    NzTimePickerPanelComponent,
                    NzTimeValueAccessorDirective
                ],
                exports: [
                    NzTimePickerPanelComponent,
                    NzTimePickerComponent
                ],
                imports: [CommonModule, FormsModule, NzI18nModule, OverlayModule, NzIconModule],
                entryComponents: []
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL256LXRpbWUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBZWxGLE1BQU07OztZQWJMLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUs7b0JBQ2YscUJBQXFCO29CQUNyQiwwQkFBMEI7b0JBQzFCLDRCQUE0QjtpQkFDN0I7Z0JBQ0QsT0FBTyxFQUFVO29CQUNmLDBCQUEwQjtvQkFDMUIscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQVUsQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFFO2dCQUN6RixlQUFlLEVBQUUsRUFBRTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLm1vZHVsZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL256LWljb24ubW9kdWxlJztcbmltcG9ydCB7IE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMgICA6IFtcbiAgICBOelRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsXG4gICAgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzICAgICAgICA6IFtcbiAgICBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCxcbiAgICBOelRpbWVQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0cyAgICAgICAgOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56STE4bk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgTnpJY29uTW9kdWxlIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW11cbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lUGlja2VyTW9kdWxlIHtcbn1cbiJdfQ==