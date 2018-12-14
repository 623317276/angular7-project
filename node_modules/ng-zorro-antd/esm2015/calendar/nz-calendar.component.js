/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { forwardRef, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import addDays from 'date-fns/add_days';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_months';
import differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks';
import endOfMonth from 'date-fns/end_of_month';
import isSameDay from 'date-fns/is_same_day';
import isSameMonth from 'date-fns/is_same_month';
import isSameYear from 'date-fns/is_same_year';
import isThisMonth from 'date-fns/is_this_month';
import isThisYear from 'date-fns/is_this_year';
import setMonth from 'date-fns/set_month';
import setYear from 'date-fns/set_year';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import startOfYear from 'date-fns/start_of_year';
import { NzI18nService as I18n } from '../i18n/nz-i18n.service';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './nz-calendar-cells';
export class NzCalendarComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.fullscreen = true;
        this.daysInWeek = [];
        this.monthsInYear = [];
        this.dateMatrix = [];
        this.activeDate = new Date();
        this.currentDateRow = -1;
        this.currentDateCol = -1;
        this.activeDateRow = -1;
        this.activeDateCol = -1;
        this.currentMonthRow = -1;
        this.currentMonthCol = -1;
        this.activeMonthRow = -1;
        this.activeMonthCol = -1;
        this.dateCell = null;
        this.dateFullCell = null;
        this.monthCell = null;
        this.monthFullCell = null;
        this.prefixCls = 'ant-fullcalendar';
        this.currentDate = new Date();
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValue(value) { this.updateDate(value, false); }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateCell(value) { this.dateCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateFullCell(value) { this.dateFullCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthCell(value) { this.monthCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthFullCell(value) { this.monthFullCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFullscreen(value) { this.fullscreen = coerceBooleanProperty(value); }
    /**
     * @return {?}
     */
    get nzFullscreen() { return this.fullscreen; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCard(value) { this.fullscreen = !coerceBooleanProperty(value); }
    /**
     * @return {?}
     */
    get nzCard() { return !this.fullscreen; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateCellChild(value) { if (value) {
        this.dateCell = value;
    } }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateFullCellChild(value) { if (value) {
        this.dateFullCell = value;
    } }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthCellChild(value) { if (value) {
        this.monthCell = value;
    } }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthFullCellChild(value) { if (value) {
        this.monthFullCell = value;
    } }
    /**
     * @return {?}
     */
    get calendarStart() {
        return startOfWeek(startOfMonth(this.activeDate));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        this.updateDate(date);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    onYearSelect(year) {
        /** @type {?} */
        const date = setYear(this.activeDate, year);
        this.updateDate(date);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    onMonthSelect(month) {
        /** @type {?} */
        const date = setMonth(this.activeDate, month);
        this.updateDate(date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateDate(value || new Date(), false);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    /**
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    updateDate(date, touched = true) {
        /** @type {?} */
        const dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        const monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        const yearChanged = !isSameYear(date, this.activeDate);
        this.activeDate = date;
        if (dayChanged) {
            this.calculateActiveDate();
        }
        if (monthChanged) {
            this.setUpDateMatrix();
            this.calculateCurrentDate();
            this.calculateActiveMonth();
        }
        if (yearChanged) {
            this.calculateCurrentMonth();
        }
        if (touched) {
            this.onChangeFn(date);
            this.onTouchFn();
            this.nzValueChange.emit(date);
        }
    }
    /**
     * @return {?}
     */
    setUpDaysInWeek() {
        this.daysInWeek = [];
        /** @type {?} */
        const weekStart = startOfWeek(this.activeDate);
        for (let i = 0; i < 7; i++) {
            /** @type {?} */
            const date = addDays(weekStart, i);
            /** @type {?} */
            const title = this.i18n.formatDate(date, 'E');
            /** @type {?} */
            const label = this.i18n.formatDate(date, 'EEEEEE');
            this.daysInWeek.push({ title, label });
        }
    }
    /**
     * @return {?}
     */
    setUpMonthsInYear() {
        this.monthsInYear = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const date = setMonth(this.activeDate, i);
            /** @type {?} */
            const title = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            const label = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            const start = startOfMonth(date);
            this.monthsInYear.push({ title, label, start });
        }
    }
    /**
     * @return {?}
     */
    setUpDateMatrix() {
        this.dateMatrix = [];
        /** @type {?} */
        const monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        const monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        const weekDiff = differenceInCalendarWeeks(monthEnd, monthStart) + 2;
        for (let week = 0; week < weekDiff; week++) {
            /** @type {?} */
            const row = [];
            /** @type {?} */
            const weekStart = addDays(this.calendarStart, week * 7);
            for (let day = 0; day < 7; day++) {
                /** @type {?} */
                const date = addDays(weekStart, day);
                /** @type {?} */
                const monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                const title = this.i18n.formatDate(date, 'longDate');
                /** @type {?} */
                const label = this.i18n.formatDate(date, 'dd');
                /** @type {?} */
                const rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title, label, rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    }
    /**
     * @return {?}
     */
    calculateCurrentDate() {
        if (isThisMonth(this.activeDate)) {
            this.currentDateRow = differenceInCalendarWeeks(this.currentDate, this.calendarStart);
            this.currentDateCol = differenceInCalendarDays(this.currentDate, addDays(this.calendarStart, this.currentDateRow * 7));
        }
        else {
            this.currentDateRow = -1;
            this.currentDateCol = -1;
        }
    }
    /**
     * @return {?}
     */
    calculateActiveDate() {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart);
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    }
    /**
     * @return {?}
     */
    calculateCurrentMonth() {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            const yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            const monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    }
    /**
     * @return {?}
     */
    calculateActiveMonth() {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    }
}
NzCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-calendar',
                template: "<nz-calendar-header [fullscreen]=\"fullscreen\" [activeDate]=\"activeDate\"\n                    [(mode)]=\"nzMode\" (modeChange)=\"onModeChange($event)\"\n                    (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\n</nz-calendar-header>\n\n<div class=\"ant-fullcalendar ant-fullcalendar-full\" [ngClass]=\"fullscreen ? 'ant-fullcalendar-fullscreen' : ''\">\n  <div class=\"ant-fullcalendar-calendar-body\">\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\n  </div>\n</div>\n\n<ng-template #monthModeTable>\n  <table class=\"ant-fullcalendar-table\" cellspacing=\"0\" role=\"grid\">\n    <thead>\n      <tr role=\"row\">\n        <th *ngFor=\"let day of daysInWeek\" class=\"ant-fullcalendar-column-header\" role=\"columnheader\" [title]=\"day.title\">\n          <span class=\"ant-fullcalendar-column-header-inner\">{{ day.label }}</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"ant-fullcalendar-tbody\">\n      <tr *ngFor=\"let week of dateMatrix; index as row\"\n          [class.ant-fullcalendar-current-week]=\"row === currentDateRow\"\n          [class.ant-fullcalendar-active-week]=\"row === activeDateRow\">\n        <td *ngFor=\"let day of week; index as col\" role=\"gridcell\" class=\"ant-fullcalendar-cell\" [title]=\"day.title\"\n            [class.ant-fullcalendar-today]=\"row === currentDateRow && col === currentDateCol\"\n            [class.ant-fullcalendar-selected-day]=\"row === activeDateRow && col === activeDateCol\"\n            [class.ant-fullcalendar-last-month-cell]=\"day.rel === 'last'\"\n            [class.ant-fullcalendar-next-month-btn-day]=\"day.rel === 'next'\"\n            (click)=\"onDateSelect(day.value)\">\n            <div class=\"ant-fullcalendar-date\">\n              <ng-container *ngIf=\"dateFullCell else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"dateFullCell; context: {$implicit: day.value}\"></ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"ant-fullcalendar-value\">{{ day.label }}</div>\n                <div *ngIf=\"dateCell\" class=\"ant-fullcalendar-content\">\n                  <ng-container *ngTemplateOutlet=\"dateCell; context: {$implicit: day.value}\"></ng-container>\n                </div>\n              </ng-template>\n            </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template #yearModeTable>\n  <table class=\"ant-fullcalendar-month-panel-table\" cellspacing=\"0\" role=\"grid\">\n    <tbody class=\"ant-fullcalendar-month-panel-tbody\">\n      <tr *ngFor=\"let row of [0, 1, 2, 3]\" role=\"row\">\n        <td *ngFor=\"let col of [0, 1, 2]\" role=\"gridcell\" [title]=\"monthsInYear[row * 3 + col].title\"\n            class=\"ant-fullcalendar-month-panel-cell\"\n            [class.ant-fullcalendar-month-panel-current-cell]=\"row === currentMonthRow && col === currentMonthCol\"\n            [class.ant-fullcalendar-month-panel-selected-cell]=\"row === activeMonthRow && col === activeMonthCol\"\n            (click)=\"onMonthSelect(row * 3 + col)\">\n          <div class=\"ant-fullcalendar-month\">\n            <ng-container *ngIf=\"monthFullCell else defaultCell\">\n              <ng-container *ngTemplateOutlet=\"monthFullCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\n            </ng-container>\n            <ng-template #defaultCell>\n              <div class=\"ant-fullcalendar-value\">{{ monthsInYear[row * 3 + col].label }}</div>\n              <div *ngIf=\"monthCell\" class=\"ant-fullcalendar-content\">\n                <ng-container *ngTemplateOutlet=\"monthCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\n              </div>\n            </ng-template>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ng-template>\n",
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NzCalendarComponent), multi: true }
                ]
            }] }
];
/** @nocollapse */
NzCalendarComponent.ctorParameters = () => [
    { type: I18n }
];
NzCalendarComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzModeChange: [{ type: Output }],
    nzValue: [{ type: Input }],
    nzValueChange: [{ type: Output }],
    nzDateCell: [{ type: Input }],
    nzDateFullCell: [{ type: Input }],
    nzMonthCell: [{ type: Input }],
    nzMonthFullCell: [{ type: Input }],
    nzFullscreen: [{ type: Input }],
    nzCard: [{ type: Input }],
    dateCellChild: [{ type: ContentChild, args: [DateCell, { read: TemplateRef },] }],
    dateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { read: TemplateRef },] }],
    monthCellChild: [{ type: ContentChild, args: [MonthCell, { read: TemplateRef },] }],
    monthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { read: TemplateRef },] }],
    fullscreen: [{ type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }]
};
function NzCalendarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /** @type {?} */
    NzCalendarComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarComponent.prototype.daysInWeek;
    /** @type {?} */
    NzCalendarComponent.prototype.monthsInYear;
    /** @type {?} */
    NzCalendarComponent.prototype.dateMatrix;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDateRow;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDateCol;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDateRow;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDateCol;
    /** @type {?} */
    NzCalendarComponent.prototype.currentMonthRow;
    /** @type {?} */
    NzCalendarComponent.prototype.currentMonthCol;
    /** @type {?} */
    NzCalendarComponent.prototype.activeMonthRow;
    /** @type {?} */
    NzCalendarComponent.prototype.activeMonthCol;
    /** @type {?} */
    NzCalendarComponent.prototype.dateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.dateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.monthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.monthFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.prefixCls;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDate;
    /** @type {?} */
    NzCalendarComponent.prototype.onChangeFn;
    /** @type {?} */
    NzCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    NzCalendarComponent.prototype.i18n;
}
/**
 * @record
 */
export function DayCellContext() { }
function DayCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    DayCellContext.prototype.title;
    /** @type {?} */
    DayCellContext.prototype.label;
}
/**
 * @record
 */
export function MonthCellContext() { }
function MonthCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthCellContext.prototype.title;
    /** @type {?} */
    MonthCellContext.prototype.label;
    /** @type {?} */
    MonthCellContext.prototype.start;
}
/**
 * @record
 */
export function DateCellContext() { }
function DateCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    DateCellContext.prototype.title;
    /** @type {?} */
    DateCellContext.prototype.label;
    /** @type {?} */
    DateCellContext.prototype.rel;
    /** @type {?} */
    DateCellContext.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sd0JBQXdCLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTywwQkFBMEIsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLHlCQUF5QixNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sU0FBUyxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sWUFBWSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixJQUFJLFFBQVEsRUFBRSx1QkFBdUIsSUFBSSxZQUFZLEVBQUUsb0JBQW9CLElBQUksU0FBUyxFQUFFLHdCQUF3QixJQUFJLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBUzdMLE1BQU07Ozs7SUFvRUosWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07c0JBbkVJLE9BQU87NEJBQ2MsSUFBSSxZQUFZLEVBQUU7NkJBRzNCLElBQUksWUFBWSxFQUFFOzBCQW1DbkQsSUFBSTswQkFFYyxFQUFFOzRCQUNFLEVBQUU7MEJBQ0gsRUFBRTswQkFDakIsSUFBSSxJQUFJLEVBQUU7OEJBQ0osQ0FBQyxDQUFDOzhCQUNGLENBQUMsQ0FBQzs2QkFDSCxDQUFDLENBQUM7NkJBQ0YsQ0FBQyxDQUFDOytCQUNBLENBQUMsQ0FBQzsrQkFDRixDQUFDLENBQUM7OEJBQ0gsQ0FBQyxDQUFDOzhCQUNGLENBQUMsQ0FBQzt3QkFDcUIsSUFBSTs0QkFDQSxJQUFJO3lCQUNQLElBQUk7NkJBQ0EsSUFBSTt5QkFFckMsa0JBQWtCOzJCQUNoQixJQUFJLElBQUksRUFBRTswQkFDVyxHQUFHLEVBQUUsSUFBRzt5QkFDbkIsR0FBRyxFQUFFLElBQUc7S0FNTDs7Ozs7SUFoRW5DLElBQWEsT0FBTyxDQUFDLEtBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFOzs7OztJQUdwRSxJQUNJLFVBQVUsQ0FBQyxLQUFxQyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEVBQUU7Ozs7O0lBRWhGLElBQ0ksY0FBYyxDQUFDLEtBQXFDLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsRUFBRTs7Ozs7SUFFeEYsSUFDSSxXQUFXLENBQUMsS0FBcUMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUFFOzs7OztJQUVsRixJQUNJLGVBQWUsQ0FBQyxLQUFxQyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEVBQUU7Ozs7O0lBRTFGLElBQ0ksWUFBWSxDQUFDLEtBQWMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Ozs7SUFDcEYsSUFBSSxZQUFZLEtBQWMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Ozs7O0lBRXZELElBQ0ksTUFBTSxDQUFDLEtBQWMsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7OztJQUMvRSxJQUFJLE1BQU0sS0FBYyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOzs7OztJQUVsRCxJQUNJLGFBQWEsQ0FBQyxLQUFxQyxJQUFJLElBQUksS0FBSyxFQUFFO1FBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FBRSxFQUFFOzs7OztJQUVsRyxJQUNJLGlCQUFpQixDQUFDLEtBQXFDLElBQUksSUFBSSxLQUFLLEVBQUU7UUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztLQUFFLEVBQUU7Ozs7O0lBRTFHLElBQ0ksY0FBYyxDQUFDLEtBQXFDLElBQUksSUFBSSxLQUFLLEVBQUU7UUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUFFLEVBQUU7Ozs7O0lBRXBHLElBQ0ksa0JBQWtCLENBQUMsS0FBcUMsSUFBSSxJQUFJLEtBQUssRUFBRTtRQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0tBQUUsRUFBRTs7OztRQTJCaEcsYUFBYTtRQUN2QixPQUFPLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBS3BELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0tBQzdCOzs7OztJQUVELFlBQVksQ0FBQyxJQUFvQjtRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBVTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCOzs7OztJQUVELFlBQVksQ0FBQyxJQUFZOztRQUN2QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFhOztRQUN6QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFnQjtRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzdDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7OztJQUVPLFVBQVUsQ0FBQyxJQUFVLEVBQUUsVUFBbUIsSUFBSTs7UUFDcEQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7UUFDckQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7UUFDekQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7Ozs7O0lBR0ssZUFBZTtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7UUFDckIsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMxQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUNuQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7O1lBQzlDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1NBQ3RDOzs7OztJQUdLLGlCQUFpQjtRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMzQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDMUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUNoRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7O1lBQ2hELE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUMvQzs7Ozs7SUFHSyxlQUFlO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztRQUNyQixNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztRQUNqRCxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztRQUM3QyxNQUFNLFFBQVEsR0FBRyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJFLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUU7O1lBQzFDLE1BQU0sR0FBRyxHQUFzQixFQUFFLENBQUM7O1lBQ2xDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUV4RCxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFOztnQkFDaEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3JDLE1BQU0sU0FBUyxHQUFHLDBCQUEwQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O2dCQUNwRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7O2dCQUNyRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O2dCQUMvQyxNQUFNLEdBQUcsR0FBRyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUMxRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7YUFDNUM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQjs7Ozs7SUFHSyxvQkFBb0I7UUFDMUIsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEYsSUFBSSxDQUFDLGNBQWMsR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4SDthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFCOzs7OztJQUdLLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxhQUFhLEdBQUcsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBRzlHLHFCQUFxQjtRQUMzQixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O1lBQy9CLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQ2hELE1BQU0sU0FBUyxHQUFHLDBCQUEwQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQjs7Ozs7SUFHSyxvQkFBb0I7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzs7OztZQXhOeEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwrM0hBQTJDO2dCQUMzQyxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ2hHO2FBQ0Y7Ozs7WUFUeUIsSUFBSTs7O3FCQVczQixLQUFLOzJCQUNMLE1BQU07c0JBRU4sS0FBSzs0QkFDTCxNQUFNO3lCQUVOLEtBQUs7NkJBR0wsS0FBSzswQkFHTCxLQUFLOzhCQUdMLEtBQUs7MkJBR0wsS0FBSztxQkFJTCxLQUFLOzRCQUlMLFlBQVksU0FBQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDO2dDQUcxQyxZQUFZLFNBQUMsWUFBWSxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzs2QkFHOUMsWUFBWSxTQUFDLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7aUNBRzNDLFlBQVksU0FBQyxhQUFhLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDO3lCQUcvQyxXQUFXLFNBQUMsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IGZvcndhcmRSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGRfZGF5cyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfZGF5cyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9tb250aHMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl93ZWVrcyc7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnO1xuaW1wb3J0IGlzU2FtZURheSBmcm9tICdkYXRlLWZucy9pc19zYW1lX2RheSc7XG5pbXBvcnQgaXNTYW1lTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV9tb250aCc7XG5pbXBvcnQgaXNTYW1lWWVhciBmcm9tICdkYXRlLWZucy9pc19zYW1lX3llYXInO1xuaW1wb3J0IGlzVGhpc01vbnRoIGZyb20gJ2RhdGUtZm5zL2lzX3RoaXNfbW9udGgnO1xuaW1wb3J0IGlzVGhpc1llYXIgZnJvbSAnZGF0ZS1mbnMvaXNfdGhpc195ZWFyJztcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRfbW9udGgnO1xuaW1wb3J0IHNldFllYXIgZnJvbSAnZGF0ZS1mbnMvc2V0X3llYXInO1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9tb250aCc7XG5pbXBvcnQgc3RhcnRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2Zfd2Vlayc7XG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhcic7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIGFzIEkxOG4gfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBOekRhdGVDZWxsRGlyZWN0aXZlIGFzIERhdGVDZWxsLCBOekRhdGVGdWxsQ2VsbERpcmVjdGl2ZSBhcyBEYXRlRnVsbENlbGwsIE56TW9udGhDZWxsRGlyZWN0aXZlIGFzIE1vbnRoQ2VsbCwgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlIGFzIE1vbnRoRnVsbENlbGwgfSBmcm9tICcuL256LWNhbGVuZGFyLWNlbGxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhbGVuZGFyQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KCkgbnpNb2RlOiAnbW9udGgnfCd5ZWFyJyA9ICdtb250aCc7XG4gIEBPdXRwdXQoKSBuek1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjwnbW9udGgnfCd5ZWFyJz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgc2V0IG56VmFsdWUodmFsdWU6IERhdGUpIHsgdGhpcy51cGRhdGVEYXRlKHZhbHVlLCBmYWxzZSk7IH1cbiAgQE91dHB1dCgpIG56VmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpEYXRlQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IHRoaXMuZGF0ZUNlbGwgPSB2YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRhdGVGdWxsQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IHRoaXMuZGF0ZUZ1bGxDZWxsID0gdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpNb250aENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyB0aGlzLm1vbnRoQ2VsbCA9IHZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TW9udGhGdWxsQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IHRoaXMubW9udGhGdWxsQ2VsbCA9IHZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLmZ1bGxzY3JlZW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIGdldCBuekZ1bGxzY3JlZW4oKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmZ1bGxzY3JlZW47IH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDYXJkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuZnVsbHNjcmVlbiA9ICFjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIGdldCBuekNhcmQoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5mdWxsc2NyZWVuOyB9XG5cbiAgQENvbnRlbnRDaGlsZChEYXRlQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgc2V0IGRhdGVDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5kYXRlQ2VsbCA9IHZhbHVlOyB9IH1cblxuICBAQ29udGVudENoaWxkKERhdGVGdWxsQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgc2V0IGRhdGVGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgaWYgKHZhbHVlKSB7IHRoaXMuZGF0ZUZ1bGxDZWxsID0gdmFsdWU7IH0gfVxuXG4gIEBDb250ZW50Q2hpbGQoTW9udGhDZWxsLCB7cmVhZDogVGVtcGxhdGVSZWZ9KVxuICBzZXQgbW9udGhDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5tb250aENlbGwgPSB2YWx1ZTsgfSB9XG5cbiAgQENvbnRlbnRDaGlsZChNb250aEZ1bGxDZWxsLCB7cmVhZDogVGVtcGxhdGVSZWZ9KVxuICBzZXQgbW9udGhGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgaWYgKHZhbHVlKSB7IHRoaXMubW9udGhGdWxsQ2VsbCA9IHZhbHVlOyB9IH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1mdWxsY2FsZW5kYXItLWZ1bGxzY3JlZW4nKVxuICBmdWxsc2NyZWVuID0gdHJ1ZTtcblxuICBkYXlzSW5XZWVrOiBEYXlDZWxsQ29udGV4dFtdID0gW107XG4gIG1vbnRoc0luWWVhcjogTW9udGhDZWxsQ29udGV4dFtdID0gW107XG4gIGRhdGVNYXRyaXg6IERhdGVDZWxsQ29udGV4dFtdW10gPSBbXTtcbiAgYWN0aXZlRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGN1cnJlbnREYXRlUm93OiBudW1iZXIgPSAtMTtcbiAgY3VycmVudERhdGVDb2w6IG51bWJlciA9IC0xO1xuICBhY3RpdmVEYXRlUm93OiBudW1iZXIgPSAtMTtcbiAgYWN0aXZlRGF0ZUNvbDogbnVtYmVyID0gLTE7XG4gIGN1cnJlbnRNb250aFJvdzogbnVtYmVyID0gLTE7XG4gIGN1cnJlbnRNb250aENvbDogbnVtYmVyID0gLTE7XG4gIGFjdGl2ZU1vbnRoUm93OiBudW1iZXIgPSAtMTtcbiAgYWN0aXZlTW9udGhDb2w6IG51bWJlciA9IC0xO1xuICBkYXRlQ2VsbDogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+fG51bGwgPSBudWxsO1xuICBkYXRlRnVsbENlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcbiAgbW9udGhDZWxsOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT58bnVsbCA9IG51bGw7XG4gIG1vbnRoRnVsbENlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtZnVsbGNhbGVuZGFyJztcbiAgcHJpdmF0ZSBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKGRhdGU6IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoRm46ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBwcml2YXRlIGdldCBjYWxlbmRhclN0YXJ0KCk6IERhdGUge1xuICAgIHJldHVybiBzdGFydE9mV2VlayhzdGFydE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IEkxOG4pIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VXBEYXlzSW5XZWVrKCk7XG4gICAgdGhpcy5zZXRVcE1vbnRoc0luWWVhcigpO1xuICAgIHRoaXMuc2V0VXBEYXRlTWF0cml4KCk7XG4gICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50RGF0ZSgpO1xuICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlRGF0ZSgpO1xuICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVNb250aCgpO1xuICB9XG5cbiAgb25Nb2RlQ2hhbmdlKG1vZGU6ICdtb250aCd8J3llYXInKTogdm9pZCB7XG4gICAgdGhpcy5uek1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcbiAgfVxuXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgb25ZZWFyU2VsZWN0KHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSBzZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSwgeWVhcik7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgb25Nb250aFNlbGVjdChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgbW9udGgpO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGV8bnVsbCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRGF0ZSh2YWx1ZSB8fCBuZXcgRGF0ZSgpLCBmYWxzZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hGbiA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEYXRlKGRhdGU6IERhdGUsIHRvdWNoZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgY29uc3QgZGF5Q2hhbmdlZCA9ICFpc1NhbWVEYXkoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcbiAgICBjb25zdCBtb250aENoYW5nZWQgPSAhaXNTYW1lTW9udGgoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcbiAgICBjb25zdCB5ZWFyQ2hhbmdlZCA9ICFpc1NhbWVZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XG5cbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xuXG4gICAgaWYgKGRheUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlRGF0ZSgpO1xuICAgIH1cbiAgICBpZiAobW9udGhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNldFVwRGF0ZU1hdHJpeCgpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50RGF0ZSgpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVNb250aCgpO1xuICAgIH1cbiAgICBpZiAoeWVhckNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk7XG4gICAgfVxuXG4gICAgaWYgKHRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VGbihkYXRlKTtcbiAgICAgIHRoaXMub25Ub3VjaEZuKCk7XG4gICAgICB0aGlzLm56VmFsdWVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFVwRGF5c0luV2VlaygpOiB2b2lkIHtcbiAgICB0aGlzLmRheXNJbldlZWsgPSBbXTtcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSBzdGFydE9mV2Vlayh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRlID0gYWRkRGF5cyh3ZWVrU3RhcnQsIGkpO1xuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnRScpO1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnRUVFRUVFJyk7XG4gICAgICB0aGlzLmRheXNJbldlZWsucHVzaCh7dGl0bGUsIGxhYmVsfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcE1vbnRoc0luWWVhcigpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoc0luWWVhciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgaSk7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdNTU0nKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ01NTScpO1xuICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydE9mTW9udGgoZGF0ZSk7XG4gICAgICB0aGlzLm1vbnRoc0luWWVhci5wdXNoKHt0aXRsZSwgbGFiZWwsIHN0YXJ0fSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcERhdGVNYXRyaXgoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlTWF0cml4ID0gW107XG4gICAgY29uc3QgbW9udGhTdGFydCA9IHN0YXJ0T2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIGNvbnN0IG1vbnRoRW5kID0gZW5kT2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIGNvbnN0IHdlZWtEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhtb250aEVuZCwgbW9udGhTdGFydCkgKyAyO1xuXG4gICAgZm9yIChsZXQgd2VlayA9IDA7IHdlZWsgPCB3ZWVrRGlmZjsgd2VlaysrKSB7XG4gICAgICBjb25zdCByb3c6IERhdGVDZWxsQ29udGV4dFtdID0gW107XG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBhZGREYXlzKHRoaXMuY2FsZW5kYXJTdGFydCwgd2VlayAqIDcpO1xuXG4gICAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCA3OyBkYXkrKykge1xuICAgICAgICBjb25zdCBkYXRlID0gYWRkRGF5cyh3ZWVrU3RhcnQsIGRheSk7XG4gICAgICAgIGNvbnN0IG1vbnRoRGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ2xvbmdEYXRlJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ2RkJyk7XG4gICAgICAgIGNvbnN0IHJlbCA9IG1vbnRoRGlmZiA9PT0gMCA/ICdjdXJyZW50JyA6IG1vbnRoRGlmZiA8IDAgPyAnbGFzdCcgOiAnbmV4dCc7XG4gICAgICAgIHJvdy5wdXNoKHt0aXRsZSwgbGFiZWwsIHJlbCwgdmFsdWU6IGRhdGV9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0ZU1hdHJpeC5wdXNoKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVDdXJyZW50RGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAoaXNUaGlzTW9udGgodGhpcy5hY3RpdmVEYXRlKSkge1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZVJvdyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3ModGhpcy5jdXJyZW50RGF0ZSwgdGhpcy5jYWxlbmRhclN0YXJ0KTtcbiAgICAgIHRoaXMuY3VycmVudERhdGVDb2wgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXModGhpcy5jdXJyZW50RGF0ZSwgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuY3VycmVudERhdGVSb3cgKiA3KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudERhdGVSb3cgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudERhdGVDb2wgPSAtMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUFjdGl2ZURhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlUm93ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyh0aGlzLmFjdGl2ZURhdGUsIHRoaXMuY2FsZW5kYXJTdGFydCk7XG4gICAgdGhpcy5hY3RpdmVEYXRlQ29sID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRoaXMuYWN0aXZlRGF0ZSwgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuYWN0aXZlRGF0ZVJvdyAqIDcpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk6IHZvaWQge1xuICAgIGlmIChpc1RoaXNZZWFyKHRoaXMuYWN0aXZlRGF0ZSkpIHtcbiAgICAgIGNvbnN0IHllYXJTdGFydCA9IHN0YXJ0T2ZZZWFyKHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgY29uc3QgbW9udGhEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHModGhpcy5jdXJyZW50RGF0ZSwgeWVhclN0YXJ0KTtcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoUm93ID0gTWF0aC5mbG9vcihtb250aERpZmYgLyAzKTtcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoQ29sID0gbW9udGhEaWZmICUgMztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50TW9udGhSb3cgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoQ29sID0gLTE7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBY3RpdmVNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZU1vbnRoUm93ID0gTWF0aC5mbG9vcih0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSAvIDMpO1xuICAgIHRoaXMuYWN0aXZlTW9udGhDb2wgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSAlIDM7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlDZWxsQ29udGV4dCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhDZWxsQ29udGV4dCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHN0YXJ0OiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVDZWxsQ29udGV4dCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJlbDogJ2xhc3QnfCdjdXJyZW50J3wnbmV4dCc7XG4gIHZhbHVlOiBEYXRlO1xufVxuIl19