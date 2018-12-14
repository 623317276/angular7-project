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
const DATE_ROW_NUM = 6;
/** @type {?} */
const DATE_COL_NUM = 7;
export class DateTableComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
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
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDateRealChange(changes["value"]) ||
            this.isDateRealChange(changes["selectedValue"]) ||
            this.isDateRealChange(changes["hoverValue"])) {
            this.render();
        }
    }
    /**
     * @param {?} change
     * @return {?}
     */
    isDateRealChange(change) {
        if (change) {
            /** @type {?} */
            const previousValue = change.previousValue;
            /** @type {?} */
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return !Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((value, index) => !this.isSameDate(previousValue[index], value));
            }
            else {
                return !this.isSameDate(/** @type {?} */ (previousValue), currentValue);
            }
        }
        return false;
    }
    /**
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSame(left, 'day'));
    }
    /**
     * @return {?}
     */
    render() {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        if (this.value !== value) {
            // this.value = value;
            // this.valueChange.emit(this.value);
            // this.render();
            this.valueChange.emit(value);
        }
    }
    /**
     * @return {?}
     */
    makeHeadWeekDays() {
        /** @type {?} */
        const weekDays = [];
        /** @type {?} */
        const firstDayOfWeek = this.getFirstDayOfWeek();
        for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            const day = (firstDayOfWeek + colIndex) % DATE_COL_NUM;
            /** @type {?} */
            const tempDate = this.value.setDay(day);
            weekDays[colIndex] = {
                short: this.i18n.formatDate(tempDate.nativeDate, 'E'),
                // eg. Tue
                veryShort: this.i18n.formatDate(tempDate.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    }
    /**
     * @return {?}
     */
    getVeryShortWeekFormat() {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    }
    /**
     * @return {?}
     */
    makeWeekRows() {
        /** @type {?} */
        const weekRows = [];
        /** @type {?} */
        const firstDayOfWeek = this.getFirstDayOfWeek();
        /** @type {?} */
        const firstDateOfMonth = this.value.setDate(1);
        /** @type {?} */
        const firstDateOffset = (firstDateOfMonth.getDay() + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        const firstDateToShow = firstDateOfMonth.addDays(0 - firstDateOffset);
        /** @type {?} */
        let increased = 0;
        for (let rowIndex = 0; rowIndex < DATE_ROW_NUM; rowIndex++) {
            /** @type {?} */
            const week = weekRows[rowIndex] = {
                isActive: false,
                isCurrent: false,
                dateCells: []
            };
            for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                /** @type {?} */
                const current = firstDateToShow.addDays(increased++);
                /** @type {?} */
                const isBeforeMonthYear = this.isBeforeMonthYear(current, this.value);
                /** @type {?} */
                const isAfterMonthYear = this.isAfterMonthYear(current, this.value);
                /** @type {?} */
                const cell = {
                    value: current,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: this.getDateTitle(current),
                    customContent: valueFunctionProp(this.dateRender, current),
                    // Customized content
                    content: `${current.getDate()}`,
                    onClick: () => this.changeValueFromInside(current),
                    onMouseEnter: () => this.dayHover.emit(cell.value)
                };
                if (this.showWeek && !week.weekNum) {
                    week.weekNum = this.getWeekNum(current);
                }
                if (current.isToday()) {
                    cell.isToday = true;
                    week.isCurrent = true;
                }
                if (Array.isArray(this.selectedValue) && !isBeforeMonthYear && !isAfterMonthYear) { // Range selections
                    /** @type {?} */
                    const rangeValue = this.hoverValue && this.hoverValue.length ? this.hoverValue : this.selectedValue;
                    /** @type {?} */
                    const start = rangeValue[0];
                    /** @type {?} */
                    const end = rangeValue[1];
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
                else if (current.isSame(this.value, 'day')) {
                    cell.isSelected = true;
                    week.isActive = true;
                }
                if (this.disabledDate && this.disabledDate(current.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    // [`${this.prefixCls}-selected-date`]: false,
                    [`${this.prefixCls}-today`]: cell.isToday,
                    [`${this.prefixCls}-last-month-cell`]: isBeforeMonthYear,
                    [`${this.prefixCls}-next-month-btn-day`]: isAfterMonthYear,
                    [`${this.prefixCls}-selected-day`]: cell.isSelected,
                    [`${this.prefixCls}-disabled-cell`]: cell.isDisabled,
                    [`${this.prefixCls}-selected-start-date`]: !!cell.isSelectedStartDate,
                    [`${this.prefixCls}-selected-end-date`]: !!cell.isSelectedEndDate,
                    [`${this.prefixCls}-in-range-cell`]: !!cell.isInRange
                };
                week.dateCells.push(cell);
            }
            week.classMap = {
                [`${this.prefixCls}-current-week`]: week.isCurrent,
                [`${this.prefixCls}-active-week`]: week.isActive
            };
        }
        return weekRows;
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        return this.value.firstDayOfWeek(this.i18n.getLocaleId());
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateTitle(date) {
        return this.i18n.formatDate(date.nativeDate, 'longDate');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekNum(date) {
        return +this.i18n.formatDate(date.nativeDate, 'w');
    }
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    isBeforeMonthYear(current, target) {
        if (current.getYear() < target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() < target.getMonth();
    }
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    isAfterMonthYear(current, target) {
        if (current.getYear() > target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() > target.getMonth();
    }
}
DateTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'date-table',
                template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n  <thead>\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\n      </th>\n      <th *ngFor=\"let cell of headWeekDays\"\n        role=\"columnheader\"\n        title=\"{{ cell.short }}\"\n        class=\"{{ prefixCls }}-column-header\"\n      >\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"{{ prefixCls }}-tbody\">\n    <tr *ngFor=\"let row of weekRows\" [ngClass]=\"row.classMap\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\n        title=\"{{ cell.title }}\"\n        [ngClass]=\"cell.classMap\"\n        role=\"gridcell\"\n      >\n\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isTemplateRef(cell.customContent)\">\n            <ng-container *ngTemplateOutlet=\"cell.customContent; context: { $implicit: cell.value }\"></ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"isNonEmptyString(cell.customContent)\">\n            <span [innerHTML]=\"cell.customContent\"></span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <div\n              class=\"{{ prefixCls }}-date\"\n              [attr.aria-selected]=\"cell.isSelected\"\n              [attr.aria-disabled]=\"cell.isDisabled\"\n            >\n              {{ cell.content }}\n            </div>\n          </ng-container>\n        </ng-container>\n\n      </td>\n    </tr>\n  </tbody>\n</table>"
            }] }
];
/** @nocollapse */
DateTableComponent.ctorParameters = () => [
    { type: NzI18nService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL2RhdGUvZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQUdwSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFDdkIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBT3ZCLE1BQU07Ozs7SUFvQkosWUFBb0IsSUFBbUI7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBZTsyQkFmZixJQUFJLFlBQVksRUFBYTt3QkFNaEMsSUFBSSxZQUFZLEVBQWE7eUJBRTlCLGNBQWM7NkJBSWxCLGFBQWE7Z0NBQ1YsZ0JBQWdCO0tBRVM7Ozs7SUFFNUMsUUFBUSxNQUFZOzs7OztJQUVwQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxVQUFPO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLGtCQUFlO1lBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLGVBQVksRUFBRTtZQUU3QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtLQUNGOzs7OztJQUVPLGdCQUFnQixDQUFDLE1BQW9CO1FBQzNDLElBQUksTUFBTSxFQUFFOztZQUNWLE1BQU0s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QUFDLENBQUM7Ozs7Ozs7SUFHN0MsaUJBQWlCLENBQUMsT0FBa0IsRUFBRSxNQUFpQjtRQUM3RCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7Ozs7O0lBR2xGLGdCQUFnQixDQUFDLE9BQWtCLEVBQUUsTUFBaUI7UUFDNUQsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7OztZQXZOM0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QiwyOURBQXdDO2FBQ3pDOzs7O1lBVFEsYUFBYTs7OzRCQVluQixLQUFLO3lCQUNMLEtBQUs7b0JBRUwsS0FBSzswQkFDTCxNQUFNO3VCQUVOLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBTaW1wbGVDaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vLi4vLi4vY29yZS90eXBlcy9jb21tb24td3JhcCc7XG5pbXBvcnQgeyBpc05vbkVtcHR5U3RyaW5nLCBpc1RlbXBsYXRlUmVmIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xuXG5jb25zdCBEQVRFX1JPV19OVU0gPSA2O1xuY29uc3QgREFURV9DT0xfTlVNID0gNztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS10YWJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRlVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXG4gIEBJbnB1dCgpIGhvdmVyVmFsdWU6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47IC8vIEN1c3RvbWl6ZSBkYXRlIGNvbnRlbnQgd2hpbGUgcmVuZGVyaW5nXG5cbiAgQE91dHB1dCgpIGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG4gIGhlYWRXZWVrRGF5czogV2Vla0RheUxhYmVsW107XG4gIHdlZWtSb3dzOiBXZWVrUm93W107XG5cbiAgaXNUZW1wbGF0ZVJlZiA9IGlzVGVtcGxhdGVSZWY7XG4gIGlzTm9uRW1wdHlTdHJpbmcgPSBpc05vbkVtcHR5U3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEYXRlUmVhbENoYW5nZShjaGFuZ2VzLnZhbHVlKSB8fFxuICAgICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5zZWxlY3RlZFZhbHVlKSB8fFxuICAgICAgICB0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy5ob3ZlclZhbHVlKSkge1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNEYXRlUmVhbENoYW5nZShjaGFuZ2U6IFNpbXBsZUNoYW5nZSk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLnByZXZpb3VzVmFsdWU7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICFBcnJheS5pc0FycmF5KHByZXZpb3VzVmFsdWUpIHx8XG4gICAgICAgICAgY3VycmVudFZhbHVlLmxlbmd0aCAhPT0gcHJldmlvdXNWYWx1ZS5sZW5ndGggfHxcbiAgICAgICAgICBjdXJyZW50VmFsdWUuc29tZSgodmFsdWUsIGluZGV4KSA9PiAhdGhpcy5pc1NhbWVEYXRlKHByZXZpb3VzVmFsdWVbaW5kZXhdLCB2YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzU2FtZURhdGUocHJldmlvdXNWYWx1ZSBhcyBDYW5keURhdGUsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaXNTYW1lRGF0ZShsZWZ0OiBDYW5keURhdGUsIHJpZ2h0OiBDYW5keURhdGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCFsZWZ0ICYmICFyaWdodCkgfHwgKGxlZnQgJiYgcmlnaHQgJiYgcmlnaHQuaXNTYW1lKGxlZnQsICdkYXknKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5oZWFkV2Vla0RheXMgPSB0aGlzLm1ha2VIZWFkV2Vla0RheXMoKTtcbiAgICAgIHRoaXMud2Vla1Jvd3MgPSB0aGlzLm1ha2VXZWVrUm93cygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIC8vIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFrZUhlYWRXZWVrRGF5cygpOiBXZWVrRGF5TGFiZWxbXSB7XG4gICAgY29uc3Qgd2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdID0gW107XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSB0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXggKyspIHtcbiAgICAgIGNvbnN0IGRheSA9IChmaXJzdERheU9mV2VlayArIGNvbEluZGV4KSAlIERBVEVfQ09MX05VTTtcbiAgICAgIGNvbnN0IHRlbXBEYXRlID0gdGhpcy52YWx1ZS5zZXREYXkoZGF5KTtcbiAgICAgIHdlZWtEYXlzWyBjb2xJbmRleCBdID0ge1xuICAgICAgICBzaG9ydDogdGhpcy5pMThuLmZvcm1hdERhdGUodGVtcERhdGUubmF0aXZlRGF0ZSwgJ0UnKSwgLy8gZWcuIFR1ZVxuICAgICAgICB2ZXJ5U2hvcnQ6IHRoaXMuaTE4bi5mb3JtYXREYXRlKHRlbXBEYXRlLm5hdGl2ZURhdGUsIHRoaXMuZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpKSAvLyBlZy4gVHVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB3ZWVrRGF5cztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmVyeVNob3J0V2Vla0Zvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlSWQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3poJykgPT09IDAgPyAnRUVFRUUnIDogJ0VFRUVFRSc7IC8vIFVzZSBleHRyZW1lIHNob3J0IGZvciBjaGluZXNlXG4gIH1cblxuICBwcml2YXRlIG1ha2VXZWVrUm93cygpOiBXZWVrUm93W10ge1xuICAgIC8vIGxldCBqdXN0UmVuZGVyZWQgPSB0cnVlO1xuICAgIGNvbnN0IHdlZWtSb3dzOiBXZWVrUm93W10gPSBbXTtcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IHRoaXMuZ2V0Rmlyc3REYXlPZldlZWsoKTtcbiAgICBjb25zdCBmaXJzdERhdGVPZk1vbnRoID0gdGhpcy52YWx1ZS5zZXREYXRlKDEpO1xuICAgIC8vIGNvbnN0IGZpcnN0RGF0ZVRvU2hvdyA9IGZpcnN0RGF0ZU9mTW9udGguc2V0RGF5KGZpcnN0RGF5T2ZXZWVrLCB7IHdlZWtTdGFydHNPbjogZmlyc3REYXlPZldlZWsgfSk7XG4gICAgY29uc3QgZmlyc3REYXRlT2Zmc2V0ID0gKGZpcnN0RGF0ZU9mTW9udGguZ2V0RGF5KCkgKyA3IC0gZmlyc3REYXlPZldlZWspICUgNztcbiAgICBjb25zdCBmaXJzdERhdGVUb1Nob3cgPSBmaXJzdERhdGVPZk1vbnRoLmFkZERheXMoMCAtIGZpcnN0RGF0ZU9mZnNldCk7XG5cbiAgICBsZXQgaW5jcmVhc2VkID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgREFURV9ST1dfTlVNOyByb3dJbmRleCArKykge1xuICAgICAgY29uc3Qgd2VlazogV2Vla1JvdyA9IHdlZWtSb3dzW3Jvd0luZGV4XSA9IHtcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICBpc0N1cnJlbnQ6IGZhbHNlLFxuICAgICAgICBkYXRlQ2VsbHM6IFtdXG4gICAgICB9O1xuXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgREFURV9DT0xfTlVNOyBjb2xJbmRleCArKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gZmlyc3REYXRlVG9TaG93LmFkZERheXMoaW5jcmVhc2VkICsrKTtcbiAgICAgICAgY29uc3QgaXNCZWZvcmVNb250aFllYXIgPSB0aGlzLmlzQmVmb3JlTW9udGhZZWFyKGN1cnJlbnQsIHRoaXMudmFsdWUpO1xuICAgICAgICBjb25zdCBpc0FmdGVyTW9udGhZZWFyID0gdGhpcy5pc0FmdGVyTW9udGhZZWFyKGN1cnJlbnQsIHRoaXMudmFsdWUpO1xuICAgICAgICBjb25zdCBjZWxsOiBEYXRlQ2VsbCA9IHtcbiAgICAgICAgICB2YWx1ZTogY3VycmVudCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICBpc1RvZGF5OiBmYWxzZSxcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZXREYXRlVGl0bGUoY3VycmVudCksXG4gICAgICAgICAgY3VzdG9tQ29udGVudDogdmFsdWVGdW5jdGlvblByb3AodGhpcy5kYXRlUmVuZGVyLCBjdXJyZW50KSwgLy8gQ3VzdG9taXplZCBjb250ZW50XG4gICAgICAgICAgY29udGVudDogYCR7Y3VycmVudC5nZXREYXRlKCl9YCxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZShjdXJyZW50KSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHRoaXMuZGF5SG92ZXIuZW1pdChjZWxsLnZhbHVlKVxuICAgICAgICAgIC8vIG9uTW91c2VFbnRlcjogKCkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgKCFqdXN0UmVuZGVyZWQpIHsgLy8gW0hhY2tdIFRvIHByZXZlbnQgdGhlIGltbWVkaWF0ZWx5IFwibW91c2VlbnRlclwiIGV2ZW50IHdoZW4gaXQganVzdCByZW5kZXJlZCwgb3IgdGhlIFwiaG92ZXJWYWx1ZVwiIG1heSBhbHdheXMgc2FpZCBhcyBjaGFuZ2VkXG4gICAgICAgICAgICAgIC8vIHRoaXMuZGF5SG92ZXIuZW1pdChjZWxsLnZhbHVlKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGp1c3RSZW5kZXJlZCA9IGZhbHNlO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5zaG93V2VlayAmJiAhd2Vlay53ZWVrTnVtKSB7XG4gICAgICAgICAgd2Vlay53ZWVrTnVtID0gdGhpcy5nZXRXZWVrTnVtKGN1cnJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnQuaXNUb2RheSgpKSB7XG4gICAgICAgICAgY2VsbC5pc1RvZGF5ID0gdHJ1ZTtcbiAgICAgICAgICB3ZWVrLmlzQ3VycmVudCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnNlbGVjdGVkVmFsdWUpICYmICFpc0JlZm9yZU1vbnRoWWVhciAmJiAhaXNBZnRlck1vbnRoWWVhcikgeyAvLyBSYW5nZSBzZWxlY3Rpb25zXG4gICAgICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHRoaXMuaG92ZXJWYWx1ZSAmJiB0aGlzLmhvdmVyVmFsdWUubGVuZ3RoID8gdGhpcy5ob3ZlclZhbHVlIDogdGhpcy5zZWxlY3RlZFZhbHVlO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcmFuZ2VWYWx1ZVswXTtcbiAgICAgICAgICBjb25zdCBlbmQgPSByYW5nZVZhbHVlWzFdO1xuICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNTYW1lKHN0YXJ0LCAnZGF5JykpIHtcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgd2Vlay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50LmlzU2FtZShlbmQsICdkYXknKSkge1xuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZEVuZERhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2Vlay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5pc0FmdGVyKHN0YXJ0LCAnZGF5JykgJiYgY3VycmVudC5pc0JlZm9yZShlbmQsICdkYXknKSkge1xuICAgICAgICAgICAgICAgIGNlbGwuaXNJblJhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50LmlzU2FtZSh0aGlzLnZhbHVlLCAnZGF5JykpIHtcbiAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIHdlZWsuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGN1cnJlbnQubmF0aXZlRGF0ZSkpIHtcbiAgICAgICAgICBjZWxsLmlzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcbiAgICAgICAgICAvLyBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRhdGVgXTogZmFsc2UsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS10b2RheWBdOiBjZWxsLmlzVG9kYXksXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LW1vbnRoLWNlbGxgXTogaXNCZWZvcmVNb250aFllYXIsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LW1vbnRoLWJ0bi1kYXlgXTogaXNBZnRlck1vbnRoWWVhcixcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWRheWBdOiBjZWxsLmlzU2VsZWN0ZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZC1jZWxsYF06IGNlbGwuaXNEaXNhYmxlZCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLXN0YXJ0LWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRTdGFydERhdGUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1lbmQtZGF0ZWBdOiAhIWNlbGwuaXNTZWxlY3RlZEVuZERhdGUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1pbi1yYW5nZS1jZWxsYF06ICEhY2VsbC5pc0luUmFuZ2VcbiAgICAgICAgfTtcblxuICAgICAgICB3ZWVrLmRhdGVDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgfVxuXG4gICAgICB3ZWVrLmNsYXNzTWFwID0ge1xuICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWN1cnJlbnQtd2Vla2BdOiB3ZWVrLmlzQ3VycmVudCxcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1hY3RpdmUtd2Vla2BdOiB3ZWVrLmlzQWN0aXZlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gd2Vla1Jvd3M7XG4gIH1cblxuICBwcml2YXRlIGdldEZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUuZmlyc3REYXlPZldlZWsodGhpcy5pMThuLmdldExvY2FsZUlkKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRlVGl0bGUoZGF0ZTogQ2FuZHlEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZS5uYXRpdmVEYXRlLCAnbG9uZ0RhdGUnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2Vla051bShkYXRlOiBDYW5keURhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiArdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZS5uYXRpdmVEYXRlLCAndycpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0JlZm9yZU1vbnRoWWVhcihjdXJyZW50OiBDYW5keURhdGUsIHRhcmdldDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKGN1cnJlbnQuZ2V0WWVhcigpIDwgdGFyZ2V0LmdldFllYXIoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50LmdldFllYXIoKSA9PT0gdGFyZ2V0LmdldFllYXIoKSAmJiBjdXJyZW50LmdldE1vbnRoKCkgPCB0YXJnZXQuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNBZnRlck1vbnRoWWVhcihjdXJyZW50OiBDYW5keURhdGUsIHRhcmdldDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XG4gICAgaWYgKGN1cnJlbnQuZ2V0WWVhcigpID4gdGFyZ2V0LmdldFllYXIoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50LmdldFllYXIoKSA9PT0gdGFyZ2V0LmdldFllYXIoKSAmJiBjdXJyZW50LmdldE1vbnRoKCkgPiB0YXJnZXQuZ2V0TW9udGgoKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtEYXlMYWJlbCB7XG4gIHNob3J0OiBzdHJpbmc7XG4gIHZlcnlTaG9ydDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVDZWxsIHtcbiAgdmFsdWU6IENhbmR5RGF0ZTtcbiAgdGl0bGU6IHN0cmluZztcbiAgY3VzdG9tQ29udGVudDogVGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XG4gIGlzVG9kYXk/OiBib29sZWFuO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZFN0YXJ0RGF0ZT86IGJvb2xlYW47XG4gIGlzU2VsZWN0ZWRFbmREYXRlPzogYm9vbGVhbjtcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcbiAgY2xhc3NNYXA/OiBvYmplY3Q7XG4gIG9uQ2xpY2soZGF0ZTogQ2FuZHlEYXRlKTogdm9pZDtcbiAgb25Nb3VzZUVudGVyKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1JvdyB7XG4gIGlzQ3VycmVudD86IGJvb2xlYW47IC8vIElzIHRoZSB3ZWVrIHRoYXQgdG9kYXkgc3RheXMgaW5cbiAgaXNBY3RpdmU/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IGN1cnJlbnQgc2V0dGluZyBkYXRlIHN0YXlzIGluXG4gIHdlZWtOdW0/OiBudW1iZXI7XG4gIGNsYXNzTWFwPzogb2JqZWN0O1xuICBkYXRlQ2VsbHM6IERhdGVDZWxsW107XG59XG4iXX0=