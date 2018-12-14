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
export class NzCalendarModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25JLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBb0I5RCxNQUFNOzs7WUFsQkwsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix5QkFBeUI7b0JBQ3pCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQU87b0JBQ1osbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsb0JBQW9CO29CQUNwQix3QkFBd0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBTyxDQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUU7YUFDekYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLm1vZHVsZSc7XG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnLi4vcmFkaW8vbnotcmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IE56U2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vc2VsZWN0L256LXNlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgTnpEYXRlQ2VsbERpcmVjdGl2ZSwgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsIE56TW9udGhDZWxsRGlyZWN0aXZlLCBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL256LWNhbGVuZGFyLWNlbGxzJztcbmltcG9ydCB7IE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FsZW5kYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTnpDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcbiAgICBOekNhbGVuZGFyQ29tcG9uZW50LFxuICAgIE56RGF0ZUNlbGxEaXJlY3RpdmUsXG4gICAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsXG4gICAgTnpNb250aENlbGxEaXJlY3RpdmUsXG4gICAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHMgICAgIDogW1xuICAgIE56Q2FsZW5kYXJDb21wb25lbnQsXG4gICAgTnpEYXRlQ2VsbERpcmVjdGl2ZSxcbiAgICBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcbiAgICBOek1vbnRoQ2VsbERpcmVjdGl2ZSxcbiAgICBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpSYWRpb01vZHVsZSwgTnpTZWxlY3RNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyTW9kdWxlIHsgfVxuIl19