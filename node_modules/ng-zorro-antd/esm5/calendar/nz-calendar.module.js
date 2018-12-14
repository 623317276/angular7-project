/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzRadioModule } from '../radio/nz-radio.module';
import { NzSelectModule } from '../select/nz-select.module';
import { NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective } from './nz-calendar-cells';
import { NzCalendarHeaderComponent } from './nz-calendar-header.component';
import { NzCalendarComponent } from './nz-calendar.component';
var NzCalendarModule = /** @class */ (function () {
    function NzCalendarModule() {
    }
    NzCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzCalendarHeaderComponent,
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective
                    ],
                    exports: [
                        NzCalendarComponent,
                        NzDateCellDirective,
                        NzDateFullCellDirective,
                        NzMonthCellDirective,
                        NzMonthFullCellDirective
                    ],
                    imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]
                },] }
    ];
    return NzCalendarModule;
}());
export { NzCalendarModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25JLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztnQkFFN0QsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQU87d0JBQ1osbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBTyxDQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUU7aUJBQ3pGOzsyQkEzQkQ7O1NBNEJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekkxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL256LWkxOG4ubW9kdWxlJztcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICcuLi9yYWRpby9uei1yYWRpby5tb2R1bGUnO1xuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICcuLi9zZWxlY3Qvbnotc2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOekRhdGVDZWxsRGlyZWN0aXZlLCBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSwgTnpNb250aENlbGxEaXJlY3RpdmUsIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vbnotY2FsZW5kYXItY2VsbHMnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekNhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYWxlbmRhci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50LFxuICAgIE56Q2FsZW5kYXJDb21wb25lbnQsXG4gICAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcbiAgICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcbiAgICBOek1vbnRoQ2VsbERpcmVjdGl2ZSxcbiAgICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0cyAgICAgOiBbXG4gICAgTnpDYWxlbmRhckNvbXBvbmVudCxcbiAgICBOekRhdGVDZWxsRGlyZWN0aXZlLFxuICAgIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxuICAgIE56TW9udGhDZWxsRGlyZWN0aXZlLFxuICAgIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzICAgICA6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpJMThuTW9kdWxlLCBOelJhZGlvTW9kdWxlLCBOelNlbGVjdE1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJNb2R1bGUgeyB9XG4iXX0=