/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzDrawerComponent } from './nz-drawer.component';
import { NzDrawerService } from './nz-drawer.service';
export class NzDrawerModule {
}
NzDrawerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, PortalModule, NzIconModule],
                exports: [NzDrawerComponent],
                declarations: [NzDrawerComponent],
                entryComponents: [NzDrawerComponent],
                providers: [NzDrawerService]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkcmF3ZXIvbnotZHJhd2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBU3RELE1BQU07OztZQVBMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQVUsQ0FBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUU7Z0JBQzVFLE9BQU8sRUFBVSxDQUFFLGlCQUFpQixDQUFFO2dCQUN0QyxZQUFZLEVBQUssQ0FBRSxpQkFBaUIsQ0FBRTtnQkFDdEMsZUFBZSxFQUFFLENBQUUsaUJBQWlCLENBQUU7Z0JBQ3RDLFNBQVMsRUFBUSxDQUFFLGVBQWUsQ0FBRTthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbi9uei1pY29uLm1vZHVsZSc7XG5cbmltcG9ydCB7IE56RHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcmF3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56RHJhd2VyU2VydmljZSB9IGZyb20gJy4vbnotZHJhd2VyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzICAgICAgICA6IFsgQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGUsIE56SWNvbk1vZHVsZSBdLFxuICBleHBvcnRzICAgICAgICA6IFsgTnpEcmF3ZXJDb21wb25lbnQgXSxcbiAgZGVjbGFyYXRpb25zICAgOiBbIE56RHJhd2VyQ29tcG9uZW50IF0sXG4gIGVudHJ5Q29tcG9uZW50czogWyBOekRyYXdlckNvbXBvbmVudCBdLFxuICBwcm92aWRlcnMgICAgICA6IFsgTnpEcmF3ZXJTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpEcmF3ZXJNb2R1bGUge1xufVxuIl19