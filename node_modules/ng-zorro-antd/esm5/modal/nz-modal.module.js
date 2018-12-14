/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from '../button/nz-button.module';
import { LoggerModule } from '../core/util/logger/logger.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { CssUnitPipe } from './css-unit.pipe';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalComponent } from './nz-modal.component';
import { NzModalService } from './nz-modal.service';
var NzModalModule = /** @class */ (function () {
    function NzModalModule() {
    }
    NzModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzI18nModule, NzButtonModule, LoggerModule, NzIconModule],
                    exports: [NzModalComponent],
                    declarations: [NzModalComponent, CssUnitPipe],
                    entryComponents: [NzModalComponent],
                    providers: [NzModalControlService, NzModalService]
                },] }
    ];
    return NzModalModule;
}());
export { NzModalModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztnQkFFbkQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBVSxDQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFFO29CQUMxRyxPQUFPLEVBQVUsQ0FBRSxnQkFBZ0IsQ0FBRTtvQkFDckMsWUFBWSxFQUFLLENBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFFO29CQUNsRCxlQUFlLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtvQkFDckMsU0FBUyxFQUFRLENBQUUscUJBQXFCLEVBQUUsY0FBYyxDQUFFO2lCQUMzRDs7d0JBcEJEOztTQXFCYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9uei1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdXRpbC9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL256LWkxOG4ubW9kdWxlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDc3NVbml0UGlwZSB9IGZyb20gJy4vY3NzLXVuaXQucGlwZSc7XG5pbXBvcnQgeyBOek1vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL256LW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XG5pbXBvcnQgeyBOek1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9uei1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICcuL256LW1vZGFsLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzICAgICAgICA6IFsgQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOekkxOG5Nb2R1bGUsIE56QnV0dG9uTW9kdWxlLCBMb2dnZXJNb2R1bGUsIE56SWNvbk1vZHVsZSBdLFxuICBleHBvcnRzICAgICAgICA6IFsgTnpNb2RhbENvbXBvbmVudCBdLFxuICBkZWNsYXJhdGlvbnMgICA6IFsgTnpNb2RhbENvbXBvbmVudCwgQ3NzVW5pdFBpcGUgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbIE56TW9kYWxDb21wb25lbnQgXSxcbiAgcHJvdmlkZXJzICAgICAgOiBbIE56TW9kYWxDb250cm9sU2VydmljZSwgTnpNb2RhbFNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBOek1vZGFsTW9kdWxlIHtcbn1cbiJdfQ==