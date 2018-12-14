/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzTabBodyComponent } from './nz-tab-body.component';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
import { NzTabSetComponent } from './nz-tabset.component';
var NzTabsModule = /** @class */ (function () {
    function NzTabsModule() {
    }
    NzTabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzTabComponent, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent],
                    exports: [NzTabComponent, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent],
                    imports: [CommonModule, ObserversModule, NzIconModule]
                },] }
    ];
    return NzTabsModule;
}());
export { NzTabsModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGFicy9uei10YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O2dCQUV6RCxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixDQUFFO29CQUN2SSxPQUFPLEVBQU8sQ0FBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLENBQUU7b0JBQ3ZJLE9BQU8sRUFBTyxDQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxDQUFFO2lCQUM5RDs7dUJBaEJEOztTQWlCYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vbnotaWNvbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOelRhYkJvZHlDb21wb25lbnQgfSBmcm9tICcuL256LXRhYi1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRhYkxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10YWItbGFiZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRhYnNOYXZDb21wb25lbnQgfSBmcm9tICcuL256LXRhYnMtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRhYlNldENvbXBvbmVudCB9IGZyb20gJy4vbnotdGFic2V0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBOelRhYkNvbXBvbmVudCwgTnpUYWJTZXRDb21wb25lbnQsIE56VGFic05hdkNvbXBvbmVudCwgTnpUYWJMYWJlbERpcmVjdGl2ZSwgTnpUYWJzSW5rQmFyRGlyZWN0aXZlLCBOelRhYkJvZHlDb21wb25lbnQgXSxcbiAgZXhwb3J0cyAgICAgOiBbIE56VGFiQ29tcG9uZW50LCBOelRhYlNldENvbXBvbmVudCwgTnpUYWJzTmF2Q29tcG9uZW50LCBOelRhYkxhYmVsRGlyZWN0aXZlLCBOelRhYnNJbmtCYXJEaXJlY3RpdmUsIE56VGFiQm9keUNvbXBvbmVudCBdLFxuICBpbXBvcnRzICAgICA6IFsgQ29tbW9uTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGUsIE56SWNvbk1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIE56VGFic01vZHVsZSB7XG59XG4iXX0=