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
var NzCalendarComponent = /** @class */ (function () {
    function NzCalendarComponent(i18n) {
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
        this.onChangeFn = function () { };
        this.onTouchFn = function () { };
    }
    Object.defineProperty(NzCalendarComponent.prototype, "nzValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.updateDate(value, false); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzDateCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.dateCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzDateFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.dateFullCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzMonthCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.monthCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzMonthFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.monthFullCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzFullscreen", {
        get: /**
         * @return {?}
         */
        function () { return this.fullscreen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.fullscreen = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "nzCard", {
        get: /**
         * @return {?}
         */
        function () { return !this.fullscreen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.fullscreen = !coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.dateCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "dateFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.dateFullCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.monthCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "monthFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.monthFullCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarComponent.prototype, "calendarStart", {
        get: /**
         * @return {?}
         */
        function () {
            return startOfWeek(startOfMonth(this.activeDate));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    NzCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.nzModeChange.emit(mode);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NzCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.updateDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = setYear(this.activeDate, year);
        this.updateDate(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    NzCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = setMonth(this.activeDate, month);
        this.updateDate(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(value || new Date(), false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    NzCalendarComponent.prototype.updateDate = /**
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        /** @type {?} */
        var dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        var monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        var yearChanged = !isSameYear(date, this.activeDate);
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
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.setUpDaysInWeek = /**
     * @return {?}
     */
    function () {
        this.daysInWeek = [];
        /** @type {?} */
        var weekStart = startOfWeek(this.activeDate);
        for (var i = 0; i < 7; i++) {
            /** @type {?} */
            var date = addDays(weekStart, i);
            /** @type {?} */
            var title = this.i18n.formatDate(date, 'E');
            /** @type {?} */
            var label = this.i18n.formatDate(date, 'EEEEEE');
            this.daysInWeek.push({ title: title, label: label });
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.setUpMonthsInYear = /**
     * @return {?}
     */
    function () {
        this.monthsInYear = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var date = setMonth(this.activeDate, i);
            /** @type {?} */
            var title = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            var label = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            var start = startOfMonth(date);
            this.monthsInYear.push({ title: title, label: label, start: start });
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.setUpDateMatrix = /**
     * @return {?}
     */
    function () {
        this.dateMatrix = [];
        /** @type {?} */
        var monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        var monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        var weekDiff = differenceInCalendarWeeks(monthEnd, monthStart) + 2;
        for (var week = 0; week < weekDiff; week++) {
            /** @type {?} */
            var row = [];
            /** @type {?} */
            var weekStart = addDays(this.calendarStart, week * 7);
            for (var day = 0; day < 7; day++) {
                /** @type {?} */
                var date = addDays(weekStart, day);
                /** @type {?} */
                var monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                var title = this.i18n.formatDate(date, 'longDate');
                /** @type {?} */
                var label = this.i18n.formatDate(date, 'dd');
                /** @type {?} */
                var rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title: title, label: label, rel: rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateCurrentDate = /**
     * @return {?}
     */
    function () {
        if (isThisMonth(this.activeDate)) {
            this.currentDateRow = differenceInCalendarWeeks(this.currentDate, this.calendarStart);
            this.currentDateCol = differenceInCalendarDays(this.currentDate, addDays(this.calendarStart, this.currentDateRow * 7));
        }
        else {
            this.currentDateRow = -1;
            this.currentDateCol = -1;
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateActiveDate = /**
     * @return {?}
     */
    function () {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart);
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateCurrentMonth = /**
     * @return {?}
     */
    function () {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            var yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            var monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    };
    /**
     * @return {?}
     */
    NzCalendarComponent.prototype.calculateActiveMonth = /**
     * @return {?}
     */
    function () {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    };
    NzCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-calendar',
                    template: "<nz-calendar-header [fullscreen]=\"fullscreen\" [activeDate]=\"activeDate\"\n                    [(mode)]=\"nzMode\" (modeChange)=\"onModeChange($event)\"\n                    (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\n</nz-calendar-header>\n\n<div class=\"ant-fullcalendar ant-fullcalendar-full\" [ngClass]=\"fullscreen ? 'ant-fullcalendar-fullscreen' : ''\">\n  <div class=\"ant-fullcalendar-calendar-body\">\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\n  </div>\n</div>\n\n<ng-template #monthModeTable>\n  <table class=\"ant-fullcalendar-table\" cellspacing=\"0\" role=\"grid\">\n    <thead>\n      <tr role=\"row\">\n        <th *ngFor=\"let day of daysInWeek\" class=\"ant-fullcalendar-column-header\" role=\"columnheader\" [title]=\"day.title\">\n          <span class=\"ant-fullcalendar-column-header-inner\">{{ day.label }}</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"ant-fullcalendar-tbody\">\n      <tr *ngFor=\"let week of dateMatrix; index as row\"\n          [class.ant-fullcalendar-current-week]=\"row === currentDateRow\"\n          [class.ant-fullcalendar-active-week]=\"row === activeDateRow\">\n        <td *ngFor=\"let day of week; index as col\" role=\"gridcell\" class=\"ant-fullcalendar-cell\" [title]=\"day.title\"\n            [class.ant-fullcalendar-today]=\"row === currentDateRow && col === currentDateCol\"\n            [class.ant-fullcalendar-selected-day]=\"row === activeDateRow && col === activeDateCol\"\n            [class.ant-fullcalendar-last-month-cell]=\"day.rel === 'last'\"\n            [class.ant-fullcalendar-next-month-btn-day]=\"day.rel === 'next'\"\n            (click)=\"onDateSelect(day.value)\">\n            <div class=\"ant-fullcalendar-date\">\n              <ng-container *ngIf=\"dateFullCell else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"dateFullCell; context: {$implicit: day.value}\"></ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"ant-fullcalendar-value\">{{ day.label }}</div>\n                <div *ngIf=\"dateCell\" class=\"ant-fullcalendar-content\">\n                  <ng-container *ngTemplateOutlet=\"dateCell; context: {$implicit: day.value}\"></ng-container>\n                </div>\n              </ng-template>\n            </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template #yearModeTable>\n  <table class=\"ant-fullcalendar-month-panel-table\" cellspacing=\"0\" role=\"grid\">\n    <tbody class=\"ant-fullcalendar-month-panel-tbody\">\n      <tr *ngFor=\"let row of [0, 1, 2, 3]\" role=\"row\">\n        <td *ngFor=\"let col of [0, 1, 2]\" role=\"gridcell\" [title]=\"monthsInYear[row * 3 + col].title\"\n            class=\"ant-fullcalendar-month-panel-cell\"\n            [class.ant-fullcalendar-month-panel-current-cell]=\"row === currentMonthRow && col === currentMonthCol\"\n            [class.ant-fullcalendar-month-panel-selected-cell]=\"row === activeMonthRow && col === activeMonthCol\"\n            (click)=\"onMonthSelect(row * 3 + col)\">\n          <div class=\"ant-fullcalendar-month\">\n            <ng-container *ngIf=\"monthFullCell else defaultCell\">\n              <ng-container *ngTemplateOutlet=\"monthFullCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\n            </ng-container>\n            <ng-template #defaultCell>\n              <div class=\"ant-fullcalendar-value\">{{ monthsInYear[row * 3 + col].label }}</div>\n              <div *ngIf=\"monthCell\" class=\"ant-fullcalendar-content\">\n                <ng-container *ngTemplateOutlet=\"monthCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\n              </div>\n            </ng-template>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ng-template>\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return NzCalendarComponent; }), multi: true }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzCalendarComponent.ctorParameters = function () { return [
        { type: I18n }
    ]; };
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
    return NzCalendarComponent;
}());
export { NzCalendarComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sd0JBQXdCLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTywwQkFBMEIsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLHlCQUF5QixNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sU0FBUyxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sWUFBWSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0s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WSxTQUFDLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7cUNBRzNDLFlBQVksU0FBQyxhQUFhLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDOzZCQUcvQyxXQUFXLFNBQUMsb0NBQW9DOzs4QkFuRW5EOztTQTRCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZF9kYXlzJztcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzJztcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX21vbnRocyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX3dlZWtzJztcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl9tb250aCc7XG5pbXBvcnQgaXNTYW1lRGF5IGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfZGF5JztcbmltcG9ydCBpc1NhbWVNb250aCBmcm9tICdkYXRlLWZucy9pc19zYW1lX21vbnRoJztcbmltcG9ydCBpc1NhbWVZZWFyIGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfeWVhcic7XG5pbXBvcnQgaXNUaGlzTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNfdGhpc19tb250aCc7XG5pbXBvcnQgaXNUaGlzWWVhciBmcm9tICdkYXRlLWZucy9pc190aGlzX3llYXInO1xuaW1wb3J0IHNldE1vbnRoIGZyb20gJ2RhdGUtZm5zL3NldF9tb250aCc7XG5pbXBvcnQgc2V0WWVhciBmcm9tICdkYXRlLWZucy9zZXRfeWVhcic7XG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX21vbnRoJztcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydF9vZl93ZWVrJztcbmltcG9ydCBzdGFydE9mWWVhciBmcm9tICdkYXRlLWZucy9zdGFydF9vZl95ZWFyJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IE56RGF0ZUNlbGxEaXJlY3RpdmUgYXMgRGF0ZUNlbGwsIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlIGFzIERhdGVGdWxsQ2VsbCwgTnpNb250aENlbGxEaXJlY3RpdmUgYXMgTW9udGhDZWxsLCBOek1vbnRoRnVsbENlbGxEaXJlY3RpdmUgYXMgTW9udGhGdWxsQ2VsbCB9IGZyb20gJy4vbnotY2FsZW5kYXItY2VsbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1jYWxlbmRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56Q2FsZW5kYXJDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICBASW5wdXQoKSBuek1vZGU6ICdtb250aCd8J3llYXInID0gJ21vbnRoJztcbiAgQE91dHB1dCgpIG56TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPCdtb250aCd8J3llYXInPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBzZXQgbnpWYWx1ZSh2YWx1ZTogRGF0ZSkgeyB0aGlzLnVwZGF0ZURhdGUodmFsdWUsIGZhbHNlKTsgfVxuICBAT3V0cHV0KCkgbnpWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRhdGVDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgdGhpcy5kYXRlQ2VsbCA9IHZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGF0ZUZ1bGxDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgdGhpcy5kYXRlRnVsbENlbGwgPSB2YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek1vbnRoQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IHRoaXMubW9udGhDZWxsID0gdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpNb250aEZ1bGxDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgdGhpcy5tb250aEZ1bGxDZWxsID0gdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpGdWxsc2NyZWVuKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuZnVsbHNjcmVlbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgZ2V0IG56RnVsbHNjcmVlbigpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbjsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNhcmQodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5mdWxsc2NyZWVuID0gIWNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgZ2V0IG56Q2FyZCgpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmZ1bGxzY3JlZW47IH1cblxuICBAQ29udGVudENoaWxkKERhdGVDZWxsLCB7cmVhZDogVGVtcGxhdGVSZWZ9KVxuICBzZXQgZGF0ZUNlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IGlmICh2YWx1ZSkgeyB0aGlzLmRhdGVDZWxsID0gdmFsdWU7IH0gfVxuXG4gIEBDb250ZW50Q2hpbGQoRGF0ZUZ1bGxDZWxsLCB7cmVhZDogVGVtcGxhdGVSZWZ9KVxuICBzZXQgZGF0ZUZ1bGxDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5kYXRlRnVsbENlbGwgPSB2YWx1ZTsgfSB9XG5cbiAgQENvbnRlbnRDaGlsZChNb250aENlbGwsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pXG4gIHNldCBtb250aENlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IGlmICh2YWx1ZSkgeyB0aGlzLm1vbnRoQ2VsbCA9IHZhbHVlOyB9IH1cblxuICBAQ29udGVudENoaWxkKE1vbnRoRnVsbENlbGwsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pXG4gIHNldCBtb250aEZ1bGxDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5tb250aEZ1bGxDZWxsID0gdmFsdWU7IH0gfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWZ1bGxjYWxlbmRhci0tZnVsbHNjcmVlbicpXG4gIGZ1bGxzY3JlZW4gPSB0cnVlO1xuXG4gIGRheXNJbldlZWs6IERheUNlbGxDb250ZXh0W10gPSBbXTtcbiAgbW9udGhzSW5ZZWFyOiBNb250aENlbGxDb250ZXh0W10gPSBbXTtcbiAgZGF0ZU1hdHJpeDogRGF0ZUNlbGxDb250ZXh0W11bXSA9IFtdO1xuICBhY3RpdmVEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgY3VycmVudERhdGVSb3c6IG51bWJlciA9IC0xO1xuICBjdXJyZW50RGF0ZUNvbDogbnVtYmVyID0gLTE7XG4gIGFjdGl2ZURhdGVSb3c6IG51bWJlciA9IC0xO1xuICBhY3RpdmVEYXRlQ29sOiBudW1iZXIgPSAtMTtcbiAgY3VycmVudE1vbnRoUm93OiBudW1iZXIgPSAtMTtcbiAgY3VycmVudE1vbnRoQ29sOiBudW1iZXIgPSAtMTtcbiAgYWN0aXZlTW9udGhSb3c6IG51bWJlciA9IC0xO1xuICBhY3RpdmVNb250aENvbDogbnVtYmVyID0gLTE7XG4gIGRhdGVDZWxsOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT58bnVsbCA9IG51bGw7XG4gIGRhdGVGdWxsQ2VsbDogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+fG51bGwgPSBudWxsO1xuICBtb250aENlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcbiAgbW9udGhGdWxsQ2VsbDogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+fG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1mdWxsY2FsZW5kYXInO1xuICBwcml2YXRlIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uVG91Y2hGbjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIHByaXZhdGUgZ2V0IGNhbGVuZGFyU3RhcnQoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHN0YXJ0T2ZXZWVrKHN0YXJ0T2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogSTE4bikgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRVcERheXNJbldlZWsoKTtcbiAgICB0aGlzLnNldFVwTW9udGhzSW5ZZWFyKCk7XG4gICAgdGhpcy5zZXRVcERhdGVNYXRyaXgoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnREYXRlKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVEYXRlKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50TW9udGgoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vbnRoKCk7XG4gIH1cblxuICBvbk1vZGVDaGFuZ2UobW9kZTogJ21vbnRoJ3wneWVhcicpOiB2b2lkIHtcbiAgICB0aGlzLm56TW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xuICB9XG5cbiAgb25EYXRlU2VsZWN0KGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XG4gIH1cblxuICBvblllYXJTZWxlY3QoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGF0ZSA9IHNldFllYXIodGhpcy5hY3RpdmVEYXRlLCB5ZWFyKTtcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XG4gIH1cblxuICBvbk1vbnRoU2VsZWN0KG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLCBtb250aCk7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZXxudWxsKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVEYXRlKHZhbHVlIHx8IG5ldyBEYXRlKCksIGZhbHNlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChkYXRlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaEZuID0gZm47XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURhdGUoZGF0ZTogRGF0ZSwgdG91Y2hlZDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBjb25zdCBkYXlDaGFuZ2VkID0gIWlzU2FtZURheShkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xuICAgIGNvbnN0IG1vbnRoQ2hhbmdlZCA9ICFpc1NhbWVNb250aChkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xuICAgIGNvbnN0IHllYXJDaGFuZ2VkID0gIWlzU2FtZVllYXIoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcblxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGRhdGU7XG5cbiAgICBpZiAoZGF5Q2hhbmdlZCkge1xuICAgICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVEYXRlKCk7XG4gICAgfVxuICAgIGlmIChtb250aENoYW5nZWQpIHtcbiAgICAgIHRoaXMuc2V0VXBEYXRlTWF0cml4KCk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnREYXRlKCk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vbnRoKCk7XG4gICAgfVxuICAgIGlmICh5ZWFyQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50TW9udGgoKTtcbiAgICB9XG5cbiAgICBpZiAodG91Y2hlZCkge1xuICAgICAgdGhpcy5vbkNoYW5nZUZuKGRhdGUpO1xuICAgICAgdGhpcy5vblRvdWNoRm4oKTtcbiAgICAgIHRoaXMubnpWYWx1ZUNoYW5nZS5lbWl0KGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBEYXlzSW5XZWVrKCk6IHZvaWQge1xuICAgIHRoaXMuZGF5c0luV2VlayA9IFtdO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHN0YXJ0T2ZXZWVrKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBhZGREYXlzKHdlZWtTdGFydCwgaSk7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdFJyk7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdFRUVFRUUnKTtcbiAgICAgIHRoaXMuZGF5c0luV2Vlay5wdXNoKHt0aXRsZSwgbGFiZWx9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFVwTW9udGhzSW5ZZWFyKCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhzSW5ZZWFyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRlID0gc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLCBpKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ01NTScpO1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnTU1NJyk7XG4gICAgICBjb25zdCBzdGFydCA9IHN0YXJ0T2ZNb250aChkYXRlKTtcbiAgICAgIHRoaXMubW9udGhzSW5ZZWFyLnB1c2goe3RpdGxlLCBsYWJlbCwgc3RhcnR9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFVwRGF0ZU1hdHJpeCgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGVNYXRyaXggPSBbXTtcbiAgICBjb25zdCBtb250aFN0YXJ0ID0gc3RhcnRPZk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgY29uc3QgbW9udGhFbmQgPSBlbmRPZk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgY29uc3Qgd2Vla0RpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKG1vbnRoRW5kLCBtb250aFN0YXJ0KSArIDI7XG5cbiAgICBmb3IgKGxldCB3ZWVrID0gMDsgd2VlayA8IHdlZWtEaWZmOyB3ZWVrKyspIHtcbiAgICAgIGNvbnN0IHJvdzogRGF0ZUNlbGxDb250ZXh0W10gPSBbXTtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB3ZWVrICogNyk7XG5cbiAgICAgIGZvciAobGV0IGRheSA9IDA7IGRheSA8IDc7IGRheSsrKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBhZGREYXlzKHdlZWtTdGFydCwgZGF5KTtcbiAgICAgICAgY29uc3QgbW9udGhEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnbG9uZ0RhdGUnKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnZGQnKTtcbiAgICAgICAgY29uc3QgcmVsID0gbW9udGhEaWZmID09PSAwID8gJ2N1cnJlbnQnIDogbW9udGhEaWZmIDwgMCA/ICdsYXN0JyA6ICduZXh0JztcbiAgICAgICAgcm93LnB1c2goe3RpdGxlLCBsYWJlbCwgcmVsLCB2YWx1ZTogZGF0ZX0pO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRlTWF0cml4LnB1c2gocm93KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUN1cnJlbnREYXRlKCk6IHZvaWQge1xuICAgIGlmIChpc1RoaXNNb250aCh0aGlzLmFjdGl2ZURhdGUpKSB7XG4gICAgICB0aGlzLmN1cnJlbnREYXRlUm93ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyh0aGlzLmN1cnJlbnREYXRlLCB0aGlzLmNhbGVuZGFyU3RhcnQpO1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZUNvbCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0aGlzLmN1cnJlbnREYXRlLCBhZGREYXlzKHRoaXMuY2FsZW5kYXJTdGFydCwgdGhpcy5jdXJyZW50RGF0ZVJvdyAqIDcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZVJvdyA9IC0xO1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZUNvbCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlQWN0aXZlRGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGVSb3cgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5jYWxlbmRhclN0YXJ0KTtcbiAgICB0aGlzLmFjdGl2ZURhdGVDb2wgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXModGhpcy5hY3RpdmVEYXRlLCBhZGREYXlzKHRoaXMuY2FsZW5kYXJTdGFydCwgdGhpcy5hY3RpdmVEYXRlUm93ICogNykpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVDdXJyZW50TW9udGgoKTogdm9pZCB7XG4gICAgaWYgKGlzVGhpc1llYXIodGhpcy5hY3RpdmVEYXRlKSkge1xuICAgICAgY29uc3QgeWVhclN0YXJ0ID0gc3RhcnRPZlllYXIodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICBjb25zdCBtb250aERpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyh0aGlzLmN1cnJlbnREYXRlLCB5ZWFyU3RhcnQpO1xuICAgICAgdGhpcy5jdXJyZW50TW9udGhSb3cgPSBNYXRoLmZsb29yKG1vbnRoRGlmZiAvIDMpO1xuICAgICAgdGhpcy5jdXJyZW50TW9udGhDb2wgPSBtb250aERpZmYgJSAzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRNb250aFJvdyA9IC0xO1xuICAgICAgdGhpcy5jdXJyZW50TW9udGhDb2wgPSAtMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUFjdGl2ZU1vbnRoKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlTW9udGhSb3cgPSBNYXRoLmZsb29yKHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpIC8gMyk7XG4gICAgdGhpcy5hY3RpdmVNb250aENvbCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICUgMztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERheUNlbGxDb250ZXh0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb250aENlbGxDb250ZXh0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgc3RhcnQ6IERhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUNlbGxDb250ZXh0IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgcmVsOiAnbGFzdCd8J2N1cnJlbnQnfCduZXh0JztcbiAgdmFsdWU6IERhdGU7XG59XG4iXX0=