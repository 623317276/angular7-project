/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent(i18n) {
        this.i18n = i18n;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.chooseDecade = new EventEmitter();
        this.chooseYear = new EventEmitter();
        this.chooseMonth = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false;
    }
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] || changes["showTimePicker"] || changes["panelMode"]) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(1);
    };
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changePanel = /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    function (mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseDecade = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeToMonthPanel = /**
     * @return {?}
     */
    function () {
        this.changePanel('month');
        this.yearToMonth = true;
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoMonth = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeValueFromInside = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    };
    /**
     * @param {?} localeFormat
     * @return {?}
     */
    CalendarHeaderComponent.prototype.formatDateTime = /**
     * @param {?} localeFormat
     * @return {?}
     */
    function (localeFormat) {
        return this.i18n.formatDateCompatible(this.value.nativeDate, localeFormat);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var year;
        /** @type {?} */
        var month;
        /** @type {?} */
        var day;
        year = {
            className: this.prefixCls + "-year-select",
            title: this.locale.yearSelect,
            onClick: function () { return _this.showTimePicker ? null : _this.changePanel('year'); },
            label: this.formatDateTime(this.locale.yearFormat)
        };
        month = {
            className: this.prefixCls + "-month-select",
            title: this.locale.monthSelect,
            onClick: function () { return _this.showTimePicker ? null : _this.changeToMonthPanel(); },
            label: this.locale.monthFormat ? this.formatDateTime(this.locale.monthFormat) : this.i18n.formatDate(this.value.nativeDate, 'MMM')
        };
        if (this.showTimePicker) {
            day = {
                className: this.prefixCls + "-day-select",
                label: this.formatDateTime(this.locale.dayFormat)
            };
        }
        /** @type {?} */
        var result;
        if (this.locale.monthBeforeYear) {
            result = [month, day, year];
        }
        else {
            result = [year, month, day];
        }
        return result.filter(function (selector) { return !!selector; });
    };
    CalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-header',
                    template: "<div class=\"{{ prefixCls }}-header\">\n  <div style=\"position: relative;\">\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-year-btn\"\n      role=\"button\"\n      (click)=\"previousYear()\"\n      title=\"{{ locale.previousYear }}\"\n    ></a>\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-month-btn\"\n      role=\"button\"\n      (click)=\"previousMonth()\"\n      title=\"{{ locale.previousMonth }}\"\n    ></a>\n\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\n        <a class=\"{{ selector.className }}\"\n          role=\"button\"\n          (click)=\"selector.onClick ? selector.onClick() : null\"\n          title=\"{{ selector.title || null }}\"\n        >\n          {{ selector.label }}\n        </a>\n      </ng-container>\n    </span>\n\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-month-btn\"\n      role=\"button\"\n      (click)=\"nextMonth()\"\n      title=\"{{ locale.nextMonth }}\"\n    ></a>\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-year-btn\"\n      role=\"button\"\n      (click)=\"nextYear()\"\n      title=\"{{ locale.nextYear }}\"\n    ></a>\n  </div>\n\n  <ng-container [ngSwitch]=\"panelMode\">\n    <ng-container *ngSwitchCase=\"'decade'\">\n      <decade-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        (valueChange)=\"onChooseDecade($event)\"\n      ></decade-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'year'\">\n      <year-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        (valueChange)=\"onChooseYear($event)\"\n        (decadePanelShow)=\"changePanel('decade')\"\n      ></year-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'month'\">\n      <month-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        [disabledDate]=\"disabledMonth\"\n        (valueChange)=\"onChooseMonth($event)\"\n        (yearPanelShow)=\"changePanel('year')\"\n      ></month-panel>\n    </ng-container>\n  </ng-container>\n</div>"
                }] }
    ];
    /** @nocollapse */
    CalendarHeaderComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    CalendarHeaderComponent.propDecorators = {
        locale: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledMonth: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        chooseDecade: [{ type: Output }],
        chooseYear: [{ type: Output }],
        chooseMonth: [{ type: Output }]
    };
    return CalendarHeaderComponent;
}());
export { CalendarHeaderComponent };
function CalendarHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarHeaderComponent.prototype.locale;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enablePrev;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enableNext;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarHeaderComponent.prototype.value;
    /** @type {?} */
    CalendarHeaderComponent.prototype.valueChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelMode;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelModeChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseDecade;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearMonthDaySelectors;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearToMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.i18n;
}
/**
 * @record
 */
export function YearMonthDaySelector() { }
function YearMonthDaySelector_tsickle_Closure_declarations() {
    /** @type {?} */
    YearMonthDaySelector.prototype.className;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.title;
    /** @type {?} */
    YearMonthDaySelector.prototype.label;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FsZW5kYXIvY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTZCeEMsaUNBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7MEJBcEJSLElBQUk7MEJBQ0osSUFBSTs4QkFFQSxLQUFLOzJCQUdoQixJQUFJLFlBQVksRUFBYTsrQkFHekIsSUFBSSxZQUFZLEVBQWE7NEJBRWhDLElBQUksWUFBWSxFQUFhOzBCQUMvQixJQUFJLFlBQVksRUFBYTsyQkFDNUIsSUFBSSxZQUFZLEVBQWE7eUJBRWpDLGNBQWM7MkJBR0gsS0FBSztLQUVROzs7O0lBRTVDLDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxhQUFVLE9BQU8sa0JBQWUsSUFBSSxPQUFPLGFBQVUsRUFBRTtZQUNoRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtLQUNGOzs7O0lBRUQsOENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25COzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQjs7OztJQUVELCtDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQjs7OztJQUVELDJDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7Ozs7OztJQUVELDZDQUFXOzs7OztJQUFYLFVBQVksSUFBZSxFQUFFLEtBQWlCO1FBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0tBQ0Y7Ozs7O0lBRUQsZ0RBQWM7Ozs7SUFBZCxVQUFlLEtBQWdCO1FBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COzs7OztJQUVELDhDQUFZOzs7O0lBQVosVUFBYSxLQUFnQjtRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxLQUFnQjtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM5Qjs7OztJQUVELG9EQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztLQUN6Qjs7OztJQUVPLHdDQUFNOzs7O1FBQ1osSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1NBQ2pFOzs7Ozs7SUFHSywyQ0FBUzs7OztjQUFDLE1BQWM7UUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUduRCwwQ0FBUTs7OztjQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7OztJQUdsRCx1REFBcUI7Ozs7Y0FBQyxLQUFnQjtRQUM1QyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjs7Ozs7O0lBR0ssZ0RBQWM7Ozs7Y0FBQyxZQUFvQjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7Ozs7O0lBR3JFLDZEQUEyQjs7Ozs7O1FBQ2pDLElBQUksSUFBSSxDQUF1Qjs7UUFDL0IsSUFBSSxLQUFLLENBQXVCOztRQUNoQyxJQUFJLEdBQUcsQ0FBdUI7UUFFOUIsSUFBSSxHQUFHO1lBQ0wsU0FBUyxFQUFLLElBQUksQ0FBQyxTQUFTLGlCQUFjO1lBQzFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVU7WUFDN0IsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQXJELENBQXFEO1lBQ3BFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ25ELENBQUM7UUFFRixLQUFLLEdBQUc7WUFDTixTQUFTLEVBQUssSUFBSSxDQUFDLFNBQVMsa0JBQWU7WUFDM0MsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztZQUM5QixPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGtCQUFrQixFQUFFLEVBQXRELENBQXNEO1lBQ3JFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7U0FDbkksQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixHQUFHLEdBQUc7Z0JBQ0osU0FBUyxFQUFLLElBQUksQ0FBQyxTQUFTLGdCQUFhO2dCQUN6QyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUNsRCxDQUFDO1NBQ0g7O1FBRUQsSUFBSSxNQUFNLENBQXlCO1FBRW5DLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDL0IsTUFBTSxHQUFHLENBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUUsQ0FBQztTQUMvQjthQUFNO1lBQ0wsTUFBTSxHQUFHLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUUsQ0FBQztTQUMvQjtRQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUM7OztnQkFsSmhELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixxckVBQTZDO2lCQUM5Qzs7OztnQkFQUSxhQUFhOzs7eUJBVW5CLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7aUNBQ0wsS0FBSzt3QkFFTCxLQUFLOzhCQUNMLE1BQU07NEJBRU4sS0FBSztrQ0FDTCxNQUFNOytCQUVOLE1BQU07NkJBQ04sTUFBTTs4QkFDTixNQUFNOztrQ0EzQlQ7O1NBWWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFuZWxNb2RlIH0gZnJvbSAnLi4vLi4vc3RhbmRhcmQtdHlwZXMnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBlbmFibGVQcmV2OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlTmV4dDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGRpc2FibGVkTW9udGg6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIEBJbnB1dCgpIHBhbmVsTW9kZTogUGFuZWxNb2RlO1xuICBAT3V0cHV0KCkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGU+KCk7XG5cbiAgQE91dHB1dCgpIGNob29zZURlY2FkZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuICBAT3V0cHV0KCkgY2hvb3NlWWVhciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuICBAT3V0cHV0KCkgY2hvb3NlTW9udGggPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xuICB5ZWFyTW9udGhEYXlTZWxlY3RvcnM6IFllYXJNb250aERheVNlbGVjdG9yW107XG5cbiAgcHJpdmF0ZSB5ZWFyVG9Nb250aDogYm9vbGVhbiA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHNob3VsZCBjaGFuZ2UgdG8gbW9udGggcGFuZWwgd2hlbiBjdXJyZW50IGlzIHllYXIgcGFuZWwgKGlmIHJlZmVyZXI9bW9udGgsIGl0IHNob3VsZCBzaG93IG1vbnRoIHBhbmVsIHdoZW4gY2hvb3NlZCBhIHllYXIpXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2FuZHlEYXRlKCk7IC8vIFNob3cgdG9kYXkgYnkgZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSB8fCBjaGFuZ2VzLnNob3dUaW1lUGlja2VyIHx8IGNoYW5nZXMucGFuZWxNb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzWWVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKC0xKTtcbiAgfVxuXG4gIG5leHRZZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoMSk7XG4gIH1cblxuICBwcmV2aW91c01vbnRoKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b01vbnRoKC0xKTtcbiAgfVxuXG4gIG5leHRNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9Nb250aCgxKTtcbiAgfVxuXG4gIGNoYW5nZVBhbmVsKG1vZGU6IFBhbmVsTW9kZSwgdmFsdWU/OiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hvb3NlRGVjYWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCd5ZWFyJywgdmFsdWUpO1xuICAgIHRoaXMuY2hvb3NlRGVjYWRlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgb25DaG9vc2VZZWFyKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVBhbmVsKHRoaXMueWVhclRvTW9udGggPyAnbW9udGgnIDogJ2RhdGUnLCB2YWx1ZSk7XG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxuICAgIHRoaXMuY2hvb3NlWWVhci5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hvb3NlTW9udGgodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ2RhdGUnLCB2YWx1ZSk7XG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxuICAgIHRoaXMuY2hvb3NlTW9udGguZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VUb01vbnRoUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VQYW5lbCgnbW9udGgnKTtcbiAgICB0aGlzLnllYXJUb01vbnRoID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnllYXJNb250aERheVNlbGVjdG9ycyA9IHRoaXMuY3JlYXRlWWVhck1vbnRoRGF5U2VsZWN0b3JzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnb3RvTW9udGgoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh0aGlzLnZhbHVlLmFkZE1vbnRocyhhbW91bnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ290b1llYXIoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERhdGVUaW1lKGxvY2FsZUZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmZvcm1hdERhdGVDb21wYXRpYmxlKHRoaXMudmFsdWUubmF0aXZlRGF0ZSwgbG9jYWxlRm9ybWF0KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlWWVhck1vbnRoRGF5U2VsZWN0b3JzKCk6IFllYXJNb250aERheVNlbGVjdG9yW10ge1xuICAgIGxldCB5ZWFyOiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcbiAgICBsZXQgbW9udGg6IFllYXJNb250aERheVNlbGVjdG9yO1xuICAgIGxldCBkYXk6IFllYXJNb250aERheVNlbGVjdG9yO1xuXG4gICAgeWVhciA9IHtcbiAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LXllYXItc2VsZWN0YCxcbiAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS55ZWFyU2VsZWN0LFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5zaG93VGltZVBpY2tlciA/IG51bGwgOiB0aGlzLmNoYW5nZVBhbmVsKCd5ZWFyJyksXG4gICAgICBsYWJlbDogdGhpcy5mb3JtYXREYXRlVGltZSh0aGlzLmxvY2FsZS55ZWFyRm9ybWF0KVxuICAgIH07XG5cbiAgICBtb250aCA9IHtcbiAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LW1vbnRoLXNlbGVjdGAsXG4gICAgICB0aXRsZTogdGhpcy5sb2NhbGUubW9udGhTZWxlY3QsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLnNob3dUaW1lUGlja2VyID8gbnVsbCA6IHRoaXMuY2hhbmdlVG9Nb250aFBhbmVsKCksXG4gICAgICBsYWJlbDogdGhpcy5sb2NhbGUubW9udGhGb3JtYXQgPyB0aGlzLmZvcm1hdERhdGVUaW1lKHRoaXMubG9jYWxlLm1vbnRoRm9ybWF0KSA6IHRoaXMuaTE4bi5mb3JtYXREYXRlKHRoaXMudmFsdWUubmF0aXZlRGF0ZSwgJ01NTScpXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnNob3dUaW1lUGlja2VyKSB7XG4gICAgICBkYXkgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LWRheS1zZWxlY3RgLFxuICAgICAgICBsYWJlbDogdGhpcy5mb3JtYXREYXRlVGltZSh0aGlzLmxvY2FsZS5kYXlGb3JtYXQpXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCByZXN1bHQ6IFllYXJNb250aERheVNlbGVjdG9yW107XG5cbiAgICBpZiAodGhpcy5sb2NhbGUubW9udGhCZWZvcmVZZWFyKSB7XG4gICAgICByZXN1bHQgPSBbIG1vbnRoLCBkYXksIHllYXIgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gWyB5ZWFyLCBtb250aCwgZGF5IF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoc2VsZWN0b3IgPT4gISFzZWxlY3Rvcik7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBZZWFyTW9udGhEYXlTZWxlY3RvciB7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgb25DbGljaz8oKTogdm9pZDtcbn1cbiJdfQ==