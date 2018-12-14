/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from '../button/nz-button.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
import { NzPopconfirmDirective } from './nz-popconfirm.directive';
var NzPopconfirmModule = /** @class */ (function () {
    function NzPopconfirmModule() {
    }
    NzPopconfirmModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzPopconfirmComponent, NzPopconfirmDirective],
                    exports: [NzPopconfirmComponent, NzPopconfirmDirective],
                    imports: [CommonModule, NzButtonModule, OverlayModule, NzI18nModule, NzIconModule],
                    entryComponents: [NzPopconfirmComponent]
                },] }
    ];
    return NzPopconfirmModule;
}());
export { NzPopconfirmModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wY29uZmlybS9uei1wb3Bjb25maXJtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztnQkFFakUsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBSyxDQUFFLHFCQUFxQixFQUFFLHFCQUFxQixDQUFFO29CQUNqRSxPQUFPLEVBQVUsQ0FBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBRTtvQkFDakUsT0FBTyxFQUFVLENBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBRTtvQkFDNUYsZUFBZSxFQUFFLENBQUUscUJBQXFCLENBQUU7aUJBRTNDOzs2QkFqQkQ7O1NBbUJhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vbnotYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL256LWkxOG4ubW9kdWxlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOelBvcGNvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL256LXBvcGNvbmZpcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE56UG9wY29uZmlybURpcmVjdGl2ZSB9IGZyb20gJy4vbnotcG9wY29uZmlybS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMgICA6IFsgTnpQb3Bjb25maXJtQ29tcG9uZW50LCBOelBvcGNvbmZpcm1EaXJlY3RpdmUgXSxcbiAgZXhwb3J0cyAgICAgICAgOiBbIE56UG9wY29uZmlybUNvbXBvbmVudCwgTnpQb3Bjb25maXJtRGlyZWN0aXZlIF0sXG4gIGltcG9ydHMgICAgICAgIDogWyBDb21tb25Nb2R1bGUsIE56QnV0dG9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekkxOG5Nb2R1bGUsIE56SWNvbk1vZHVsZSBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsgTnpQb3Bjb25maXJtQ29tcG9uZW50IF1cblxufSlcblxuZXhwb3J0IGNsYXNzIE56UG9wY29uZmlybU1vZHVsZSB7XG59XG4iXX0=