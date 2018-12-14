/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from '../button/nz-button.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzMenuModule } from '../menu/nz-menu.module';
import { NzDropDownButtonComponent } from './nz-dropdown-button.component';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
import { NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
var NzDropDownModule = /** @class */ (function () {
    function NzDropDownModule() {
    }
    NzDropDownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, FormsModule, NzButtonModule, NzMenuModule, NzIconModule],
                    declarations: [NzDropDownComponent, NzDropDownButtonComponent, NzDropDownDirective, NzDropdownContextComponent],
                    entryComponents: [NzDropdownContextComponent],
                    exports: [NzDropDownComponent, NzDropDownButtonComponent, NzDropDownDirective]
                },] }
    ];
    return NzDropDownModule;
}());
export { NzDropDownModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL256LWRyb3Bkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Z0JBRTdELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQVUsQ0FBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBRTtvQkFDekcsWUFBWSxFQUFLLENBQUUsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsMEJBQTBCLENBQUU7b0JBQ3BILGVBQWUsRUFBRSxDQUFFLDBCQUEwQixDQUFFO29CQUMvQyxPQUFPLEVBQVUsQ0FBRSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsQ0FBRTtpQkFDekY7OzJCQW5CRDs7U0FvQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL256LWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICcuLi9tZW51L256LW1lbnUubW9kdWxlJztcblxuaW1wb3J0IHsgTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IE56RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICcuL256LWRyb3Bkb3duLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHMgICAgICAgIDogWyBDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIEZvcm1zTW9kdWxlLCBOekJ1dHRvbk1vZHVsZSwgTnpNZW51TW9kdWxlLCBOekljb25Nb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zICAgOiBbIE56RHJvcERvd25Db21wb25lbnQsIE56RHJvcERvd25CdXR0b25Db21wb25lbnQsIE56RHJvcERvd25EaXJlY3RpdmUsIE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IF0sXG4gIGVudHJ5Q29tcG9uZW50czogWyBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCBdLFxuICBleHBvcnRzICAgICAgICA6IFsgTnpEcm9wRG93bkNvbXBvbmVudCwgTnpEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCwgTnpEcm9wRG93bkRpcmVjdGl2ZSBdXG59KVxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25Nb2R1bGUge1xufVxuIl19