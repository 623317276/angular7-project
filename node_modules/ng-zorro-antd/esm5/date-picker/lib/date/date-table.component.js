/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from '../../../core/util/check';
import { valueFunctionProp } from '../../../core/util/convert';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
/** @type {?} */
var DATE_ROW_NUM = 6;
/** @type {?} */
var DATE_COL_NUM = 7;
var DateTableComponent = /** @class */ (function () {
    function DateTableComponent(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.dayHover = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    /**
     * @return {?}
     */
    DateTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDateRealChange(changes["value"]) ||
            this.isDateRealChange(changes["selectedValue"]) ||
            this.isDateRealChange(changes["hoverValue"])) {
            this.render();
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DateTableComponent.prototype.isDateRealChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        var _this = this;
        if (change) {
            /** @type {?} */
            var previousValue_1 = change.previousValue;
            /** @type {?} */
            var currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return !Array.isArray(previousValue_1) ||
                    currentValue.length !== previousValue_1.length ||
                    currentValue.some(function (value, index) { return !_this.isSameDate(previousValue_1[index], value); });
            }
            else {
                return !this.isSameDate(/** @type {?} */ (previousValue_1), currentValue);
            }
        }
        return false;
    };
    /**
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateTableComponent.prototype.isSameDate = /**
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (left, right) {
        return (!left && !right) || (left && right && right.isSame(left, 'day'));
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateTableComponent.prototype.changeValueFromInside = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            // this.value = value;
            // this.valueChange.emit(this.value);
            // this.render();
            this.valueChange.emit(value);
        }
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.makeHeadWeekDays = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var weekDays = [];
        /** @type {?} */
        var firstDayOfWeek = this.getFirstDayOfWeek();
        for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            var day = (firstDayOfWeek + colIndex) % DATE_COL_NUM;
            /** @type {?} */
            var tempDate = this.value.setDay(day);
            weekDays[colIndex] = {
                short: this.i18n.formatDate(tempDate.nativeDate, 'E'),
                // eg. Tue
                veryShort: this.i18n.formatDate(tempDate.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.getVeryShortWeekFormat = /**
     * @return {?}
     */
    function () {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.makeWeekRows = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a;
        /** @type {?} */
        var weekRows = [];
        /** @type {?} */
        var firstDayOfWeek = this.getFirstDayOfWeek();
        /** @type {?} */
        var firstDateOfMonth = this.value.setDate(1);
        /** @type {?} */
        var firstDateOffset = (firstDateOfMonth.getDay() + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        var firstDateToShow = firstDateOfMonth.addDays(0 - firstDateOffset);
        /** @type {?} */
        var increased = 0;
        for (var rowIndex = 0; rowIndex < DATE_ROW_NUM; rowIndex++) {
            /** @type {?} */
            var week = weekRows[rowIndex] = {
                isActive: false,
                isCurrent: false,
                dateCells: []
            };
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var current = firstDateToShow.addDays(increased++);
                /** @type {?} */
                var isBeforeMonthYear = this_1.isBeforeMonthYear(current, this_1.value);
                /** @type {?} */
                var isAfterMonthYear = this_1.isAfterMonthYear(current, this_1.value);
                /** @type {?} */
                var cell = {
                    value: current,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: this_1.getDateTitle(current),
                    customContent: valueFunctionProp(this_1.dateRender, current),
                    // Customized content
                    content: "" + current.getDate(),
                    onClick: function () { return _this.changeValueFromInside(current); },
                    onMouseEnter: function () { return _this.dayHover.emit(cell.value); }
                };
                if (this_1.showWeek && !week.weekNum) {
                    week.weekNum = this_1.getWeekNum(current);
                }
                if (current.isToday()) {
                    cell.isToday = true;
                    week.isCurrent = true;
                }
                if (Array.isArray(this_1.selectedValue) && !isBeforeMonthYear && !isAfterMonthYear) { // Range selections
                    /** @type {?} */
                    var rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                    /** @type {?} */
                    var start = rangeValue[0];
                    /** @type {?} */
                    var end = rangeValue[1];
                    if (start) {
                        if (current.isSame(start, 'day')) {
                            cell.isSelectedStartDate = true;
                            cell.isSelected = true;
                            week.isActive = true;
                        }
                        if (end) {
                            if (current.isSame(end, 'day')) {
                                cell.isSelectedEndDate = true;
                                cell.isSelected = true;
                                week.isActive = true;
                            }
                            else if (current.isAfter(start, 'day') && current.isBefore(end, 'day')) {
                                cell.isInRange = true;
                            }
                        }
                    }
                }
                else if (current.isSame(this_1.value, 'day')) {
                    cell.isSelected = true;
                    week.isActive = true;
                }
                if (this_1.disabledDate && this_1.disabledDate(current.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    // [`${this.prefixCls}-selected-date`]: false,
                    _a[this_1.prefixCls + "-today"] = cell.isToday,
                    _a[this_1.prefixCls + "-last-month-cell"] = isBeforeMonthYear,
                    _a[this_1.prefixCls + "-next-month-btn-day"] = isAfterMonthYear,
                    _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                    _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                    _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                    _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                    _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                    _a);
                week.dateCells.push(cell);
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                _loop_1(colIndex);
            }
            week.classMap = (_a = {},
                _a[this.prefixCls + "-current-week"] = week.isCurrent,
                _a[this.prefixCls + "-active-week"] = week.isActive,
                _a);
        }
        return weekRows;
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this.value.firstDayOfWeek(this.i18n.getLocaleId());
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateTableComponent.prototype.getDateTitle = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.i18n.formatDate(date.nativeDate, 'longDate');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateTableComponent.prototype.getWeekNum = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return +this.i18n.formatDate(date.nativeDate, 'w');
    };
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    DateTableComponent.prototype.isBeforeMonthYear = /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    function (current, target) {
        if (current.getYear() < target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() < target.getMonth();
    };
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    DateTableComponent.prototype.isAfterMonthYear = /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    function (current, target) {
        if (current.getYear() > target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() > target.getMonth();
    };
    DateTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-table',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n  <thead>\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\n      </th>\n      <th *ngFor=\"let cell of headWeekDays\"\n        role=\"columnheader\"\n        title=\"{{ cell.short }}\"\n        class=\"{{ prefixCls }}-column-header\"\n      >\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"{{ prefixCls }}-tbody\">\n    <tr *ngFor=\"let row of weekRows\" [ngClass]=\"row.classMap\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\n        title=\"{{ cell.title }}\"\n        [ngClass]=\"cell.classMap\"\n        role=\"gridcell\"\n      >\n\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isTemplateRef(cell.customContent)\">\n            <ng-container *ngTemplateOutlet=\"cell.customContent; context: { $implicit: cell.value }\"></ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"isNonEmptyString(cell.customContent)\">\n            <span [innerHTML]=\"cell.customContent\"></span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <div\n              class=\"{{ prefixCls }}-date\"\n              [attr.aria-selected]=\"cell.isSelected\"\n              [attr.aria-disabled]=\"cell.isDisabled\"\n            >\n              {{ cell.content }}\n            </div>\n          </ng-container>\n        </ng-container>\n\n      </td>\n    </tr>\n  </tbody>\n</table>"
                }] }
    ];
    /** @nocollapse */
    DateTableComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    DateTableComponent.propDecorators = {
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        showWeek: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateRender: [{ type: Input }],
        dayHover: [{ type: Output }]
    };
    return DateTableComponent;
}());
export { DateTableComponent };
function DateTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateTableComponent.prototype.selectedValue;
    /** @type {?} */
    DateTableComponent.prototype.hoverValue;
    /** @type {?} */
    DateTableComponent.prototype.value;
    /** @type {?} */
    DateTableComponent.prototype.valueChange;
    /** @type {?} */
    DateTableComponent.prototype.showWeek;
    /** @type {?} */
    DateTableComponent.prototype.disabledDate;
    /** @type {?} */
    DateTableComponent.prototype.dateRender;
    /** @type {?} */
    DateTableComponent.prototype.dayHover;
    /** @type {?} */
    DateTableComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableComponent.prototype.headWeekDays;
    /** @type {?} */
    DateTableComponent.prototype.weekRows;
    /** @type {?} */
    DateTableComponent.prototype.isTemplateRef;
    /** @type {?} */
    DateTableComponent.prototype.isNonEmptyString;
    /** @type {?} */
    DateTableComponent.prototype.i18n;
}
/**
 * @record
 */
export function WeekDayLabel() { }
function WeekDayLabel_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekDayLabel.prototype.short;
    /** @type {?} */
    WeekDayLabel.prototype.veryShort;
}
/**
 * @record
 */
export function DateCell() { }
function DateCell_tsickle_Closure_declarations() {
    /** @type {?} */
    DateCell.prototype.value;
    /** @type {?} */
    DateCell.prototype.title;
    /** @type {?} */
    DateCell.prototype.customContent;
    /** @type {?} */
    DateCell.prototype.content;
    /** @type {?|undefined} */
    DateCell.prototype.isSelected;
    /** @type {?|undefined} */
    DateCell.prototype.isToday;
    /** @type {?|undefined} */
    DateCell.prototype.isDisabled;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedStartDate;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedEndDate;
    /** @type {?|undefined} */
    DateCell.prototype.isInRange;
    /** @type {?|undefined} */
    DateCell.prototype.classMap;
    /** @type {?} */
    DateCell.prototype.onClick;
    /** @type {?} */
    DateCell.prototype.onMouseEnter;
}
/**
 * @record
 */
export function WeekRow() { }
function WeekRow_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    WeekRow.prototype.isCurrent;
    /** @type {?|undefined} */
    WeekRow.prototype.isActive;
    /** @type {?|undefined} */
    WeekRow.prototype.weekNum;
    /** @type {?|undefined} */
    WeekRow.prototype.classMap;
    /** @type {?} */
    WeekRow.prototype.dateCells;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL2RhdGUvZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQUdwSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFDdkIsSUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDOztJQTJCckIsNEJBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7MkJBZmYsSUFBSSxZQUFZLEVBQWE7d0JBTWhDLElBQUksWUFBWSxFQUFhO3lCQUU5QixjQUFjOzZCQUlsQixhQUFhO2dDQUNWLGdCQUFnQjtLQUVTOzs7O0lBRTVDLHFDQUFROzs7SUFBUixlQUFvQjs7Ozs7SUFFcEIsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sVUFBTztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxrQkFBZTtZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxlQUFZLEVBQUU7WUFFN0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7S0FDRjs7Ozs7SUFFTyw2Q0FBZ0I7Ozs7Y0FBQyxNQUFvQjs7UUFDM0MsSUFBSSxNQUFNLEVBQUU7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Q0QsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7Ozs7SUFHbEYsNkNBQWdCOzs7OztjQUFDLE9BQWtCLEVBQUUsTUFBaUI7UUFDNUQsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7O2dCQXZOM0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwyOURBQXdDO2lCQUN6Qzs7OztnQkFUUSxhQUFhOzs7Z0NBWW5CLEtBQUs7NkJBQ0wsS0FBSzt3QkFFTCxLQUFLOzhCQUNMLE1BQU07MkJBRU4sS0FBSzsrQkFDTCxLQUFLOzZCQUNMLEtBQUs7MkJBRUwsTUFBTTs7NkJBM0JUOztTQWdCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vLi4vLi4vY29yZS90eXBlcy9jb21tb24td3JhcCc7XG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xuXG5jb25zdCBEQVRFX1JPV19OVU0gPSA2O1xuY29uc3QgREFURV9DT0xfTlVNID0gNztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS10YWJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47IC8vIEN1c3RvbWl6ZSBkYXRlIGNvbnRlbnQgd2hpbGUgcmVuZGVyaW5nXG5cbiAgQE91dHB1dCgpIGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG4gIGhlYWRXZWVrRGF5czogV2Vla0RheUxhYmVsW107XG4gIHdlZWtSb3dzOiBXZWVrUm93W107XG5cbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG4gIGlzTm9uRW1wdHlTdHJpbmcgPSBpc05vbkVtcHR5U3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnZhbHVlKSB8fFxuICAgICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5zZWxlY3RlZFZhbHVlKSB8fFxuICAgICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5ob3ZlclZhbHVlKSkge1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLnByZXZpb3VzVmFsdWU7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KHByZXZpb3VzVmFsdWUpIHx8XG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcbiAgICAgICAgICBjdXJyZW50VmFsdWUuc29tZSgodmFsdWUsIGluZGV4KSA9PiAhdGhpcy5pc1NhbWVEYXRlKHByZXZpb3VzVmFsdWVbaW5kZXhdLCB2YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZSBhcyBDYW5keURhdGUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTYW1lRGF0ZShsZWZ0OiBDYW5keURhdGUsIHJpZ2h0OiBDYW5keURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCFsZWZ0ICYmICFyaWdodCkgfHwgKGxlZnQgJiYgcmlnaHQgJiYgcmlnaHQuaXNTYW1lKGxlZnQsICdkYXknKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5oZWFkV2Vla0RheXMgPSB0aGlzLm1ha2VIZWFkV2Vla0RheXMoKTtcbiAgICAgIHRoaXMud2Vla1Jvd3MgPSB0aGlzLm1ha2VXZWVrUm93cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIC8vIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFrZUhlYWRXZWVrRGF5cygpOiBXZWVrRGF5TGFiZWxbXSB7XG4gICAgY29uc3Qgd2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdID0gW107XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSB0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXggKyspIHtcbiAgICAgIGNvbnN0IGRheSA9IChmaXJzdERheU9mV2VlayArIGNvbEluZGV4KSAlIERBVEVfQ09MX05VTTtcbiAgICAgIGNvbnN0IHRlbXBEYXRlID0gdGhpcy52YWx1ZS5zZXREYXkoZGF5KTtcbiAgICAgIHdlZWtEYXlzWyBjb2xJbmRleCBdID0ge1xuICAgICAgICBzaG9ydDogdGhpcy5pMThuLmZvcm1hdERhdGUodGVtcERhdGUubmF0aXZlRGF0ZSwgJ0UnKSwgLy8gZWcuIFR1ZVxuICAgICAgICB2ZXJ5U2hvcnQ6IHRoaXMuaTE4bi5mb3JtYXREYXRlKHRlbXBEYXRlLm5hdGl2ZURhdGUsIHRoaXMuZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpKSAvLyBlZy4gVHVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB3ZWVrRGF5cztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3poJykgPT09IDAgPyAnRUVFRUUnIDogJ0VFRUVFRSc7IC8vIFVzZSBleHRyZW1lIHNob3J0IGZvciBjaGluZXNlXG4gIH1cblxuICBwcml2YXRlIG1ha2VXZWVrUm93cygpOiBXZWVrUm93W10ge1xuICAgIC8vIGxldCBqdXN0UmVuZGVyZWQgPSB0cnVlO1xuICAgIGNvbnN0IHdlZWtSb3dzOiBXZWVrUm93W10gPSBbXTtcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IHRoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKTtcbiAgICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gdGhpcy52YWx1ZS5zZXREYXRlKDEpO1xuICAgIC8vIGNvbnN0IGZpcnN0RGF0ZVRvU2hvdyA9IGZpcnN0RGF0ZU9mTW9udGguc2V0RGF5KGZpcnN0RGF5T2ZXZWVrLCB7IHdlZWtTdGFydHNPbjogZmlyc3REYXlPZldlZWsgfSk7XG4gICAgY29uc3QgZmlyc3REYXRlT2Zmc2V0ID0gKGZpcnN0RGF0ZU9mTW9udGguZ2V0RGF5KCkgKyA3IC0gZmlyc3REYXlPZldlZWspICUgNztcbiAgICBjb25zdCBmaXJzdERhdGVUb1Nob3cgPSBmaXJzdERhdGVPZk1vbnRoLmFkZERheXMoMCAtIGZpcnN0RGF0ZU9mZnNldCk7XG5cbiAgICBsZXQgaW5jcmVhc2VkID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgREFURV9ST1dfTlVNOyByb3dJbmRleCArKykge1xuICAgICAgY29uc3Qgd2VlazogV2Vla1JvdyA9IHdlZWtSb3dzW3Jvd0luZGV4XSA9IHtcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICBpc0N1cnJlbnQ6IGZhbHNlLFxuICAgICAgICBkYXRlQ2VsbHM6IFtdXG4gICAgICB9O1xuXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgREFURV9DT0xfTlVNOyBjb2xJbmRleCArKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gZmlyc3REYXRlVG9TaG93LmFkZERheXMoaW5jcmVhc2VkICsrKTtcbiAgICAgICAgY29uc3QgaXNCZWZvcmVNb250aFllYXIgPSB0aGlzLmlzQmVmb3JlTW9udGhZZWFyKGN1cnJlbnQsIHRoaXMudmFsdWUpO1xuICAgICAgICBjb25zdCBpc0FmdGVyTW9udGhZZWFyID0gdGhpcy5pc0FmdGVyTW9udGhZZWFyKGN1cnJlbnQsIHRoaXMudmFsdWUpO1xuICAgICAgICBjb25zdCBjZWxsOiBEYXRlQ2VsbCA9IHtcbiAgICAgICAgICB2YWx1ZTogY3VycmVudCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICBpc1RvZGF5OiBmYWxzZSxcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZXREYXRlVGl0bGUoY3VycmVudCksXG4gICAgICAgICAgY3VzdG9tQ29udGVudDogdmFsdWVGdW5jdGlvblByb3AodGhpcy5kYXRlUmVuZGVyLCBjdXJyZW50KSwgLy8gQ3VzdG9taXplZCBjb250ZW50XG4gICAgICAgICAgY29udGVudDogYCR7Y3VycmVudC5nZXREYXRlKCl9YCxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZShjdXJyZW50KSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHRoaXMuZGF5SG92ZXIuZW1pdChjZWxsLnZhbHVlKVxuICAgICAgICAgIC8vIG9uTW91c2VFbnRlcjogKCkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgKCFqdXN0UmVuZGVyZWQpIHsgLy8gW0hhY2tdIFRvIHByZXZlbnQgdGhlIGltbWVkaWF0ZWx5IFwibW91c2VlbnRlclwiIGV2ZW50IHdoZW4gaXQganVzdCByZW5kZXJlZCwgb3IgdGhlIFwiaG92ZXJWYWx1ZVwiIG1heSBhbHdheXMgc2FpZCBhcyBjaGFuZ2VkXG4gICAgICAgICAgICAgIC8vIHRoaXMuZGF5SG92ZXIuZW1pdChjZWxsLnZhbHVlKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGp1c3RSZW5kZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zaG93V2VlayAmJiAhd2Vlay53ZWVrTnVtKSB7XG4gICAgICAgICAgd2Vlay53ZWVrTnVtID0gdGhpcy5nZXRXZWVrTnVtKGN1cnJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuaXNUb2RheSgpKSB7XG4gICAgICAgICAgY2VsbC5pc1RvZGF5ID0gdHJ1ZTtcbiAgICAgICAgICB3ZWVrLmlzQ3VycmVudCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkVmFsdWUpICYmICFpc0JlZm9yZU1vbnRoWWVhciAmJiAhaXNBZnRlck1vbnRoWWVhcikgeyAvLyBSYW5nZSBzZWxlY3Rpb25zXG4gICAgICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmhvdmVyVmFsdWUubGVuZ3RoID8gdGhpcy5ob3ZlclZhbHVlIDogdGhpcy5zZWxlY3RlZFZhbHVlO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcmFuZ2VWYWx1ZVswXTtcbiAgICAgICAgICBjb25zdCBlbmQgPSByYW5nZVZhbHVlWzFdO1xuICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNTYW1lKHN0YXJ0LCAnZGF5JykpIHtcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgd2Vlay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50LmlzU2FtZShlbmQsICdkYXknKSkge1xuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2Vlay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5pc0FmdGVyKHN0YXJ0LCAnZGF5JykgJiYgY3VycmVudC5pc0JlZm9yZShlbmQsICdkYXknKSkge1xuICAgICAgICAgICAgICAgIGNlbGwuaXNJblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50LmlzU2FtZSh0aGlzLnZhbHVlLCAnZGF5JykpIHtcbiAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHdlZWsuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGN1cnJlbnQubmF0aXZlRGF0ZSkpIHtcbiAgICAgICAgICBjZWxsLmlzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcbiAgICAgICAgICAvLyBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRhdGVgXTogZmFsc2UsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10b2RheWBdOiBjZWxsLmlzVG9kYXksXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LW1vbnRoLWNlbGxgXTogaXNCZWZvcmVNb250aFllYXIsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LW1vbnRoLWJ0bi1kYXlgXTogaXNBZnRlck1vbnRoWWVhcixcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRheWBdOiBjZWxsLmlzU2VsZWN0ZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZC1jZWxsYF06IGNlbGwuaXNEaXNhYmxlZCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLXN0YXJ0LWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1lbmQtZGF0ZWBdOiAhIWNlbGwuaXNTZWxlY3RlZEVuZERhdGUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pbi1yYW5nZS1jZWxsYF06ICEhY2VsbC5pc0luUmFuZ2VcbiAgICAgICAgfTtcblxuICAgICAgICB3ZWVrLmRhdGVDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuXG4gICAgICB3ZWVrLmNsYXNzTWFwID0ge1xuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWN1cnJlbnQtd2Vla2BdOiB3ZWVrLmlzQ3VycmVudCxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1hY3RpdmUtd2Vla2BdOiB3ZWVrLmlzQWN0aXZlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gd2Vla1Jvd3M7XG4gIH1cblxuICBwcml2YXRlIGdldEZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUuZmlyc3REYXlPZldlZWsodGhpcy5pMThuLmdldExvY2FsZUlkKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRlVGl0bGUoZGF0ZTogQ2FuZHlEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZS5uYXRpdmVEYXRlLCAnbG9uZ0RhdGUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2Vla051bShkYXRlOiBDYW5keURhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiArdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZS5uYXRpdmVEYXRlLCAndycpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0JlZm9yZU1vbnRoWWVhcihjdXJyZW50OiBDYW5keURhdGUsIHRhcmdldDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKGN1cnJlbnQuZ2V0WWVhcigpIDwgdGFyZ2V0LmdldFllYXIoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50LmdldFllYXIoKSA9PT0gdGFyZ2V0LmdldFllYXIoKSAmJiBjdXJyZW50LmdldE1vbnRoKCkgPCB0YXJnZXQuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNBZnRlck1vbnRoWWVhcihjdXJyZW50OiBDYW5keURhdGUsIHRhcmdldDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKGN1cnJlbnQuZ2V0WWVhcigpID4gdGFyZ2V0LmdldFllYXIoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50LmdldFllYXIoKSA9PT0gdGFyZ2V0LmdldFllYXIoKSAmJiBjdXJyZW50LmdldE1vbnRoKCkgPiB0YXJnZXQuZ2V0TW9udGgoKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtEYXlMYWJlbCB7XG4gIHNob3J0OiBzdHJpbmc7XG4gIHZlcnlTaG9ydDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVDZWxsIHtcbiAgdmFsdWU6IENhbmR5RGF0ZTtcbiAgdGl0bGU6IHN0cmluZztcbiAgY3VzdG9tQ29udGVudDogVGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XG4gIGlzVG9kYXk/OiBib29sZWFuO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZFN0YXJ0RGF0ZT86IGJvb2xlYW47XG4gIGlzU2VsZWN0ZWRFbmREYXRlPzogYm9vbGVhbjtcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcbiAgY2xhc3NNYXA/OiBvYmplY3Q7XG4gIG9uQ2xpY2soZGF0ZTogQ2FuZHlEYXRlKTogdm9pZDtcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1JvdyB7XG4gIGlzQ3VycmVudD86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgdG9kYXkgc3RheXMgaW5cbiAgaXNBY3RpdmU/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IGN1cnJlbnQgc2V0dGluZyBkYXRlIHN0YXlzIGluXG4gIHdlZWtOdW0/OiBudW1iZXI7XG4gIGNsYXNzTWFwPzogb2JqZWN0O1xuICBkYXRlQ2VsbHM6IERhdGVDZWxsW107XG59XG4iXX0=