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
var NzTimePickerModule = /** @class */ (function () {
    function NzTimePickerModule() {
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
    return NzTimePickerModule;
}());
export { NzTimePickerModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL256LXRpbWUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztnQkFFakYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBSzt3QkFDZixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQVU7d0JBQ2YsMEJBQTBCO3dCQUMxQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBVSxDQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUU7b0JBQ3pGLGVBQWUsRUFBRSxFQUFFO2lCQUNwQjs7NkJBdEJEOztTQXVCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbnotdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuL256LXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zICAgOiBbXG4gICAgTnpUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgIE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50LFxuICAgIE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0cyAgICAgICAgOiBbXG4gICAgTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsXG4gICAgTnpUaW1lUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHMgICAgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekkxOG5Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIE56SWNvbk1vZHVsZSBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZVBpY2tlck1vZHVsZSB7XG59XG4iXX0=