/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { valueFunctionProp } from '../../../core/util/convert';
import { CandyDate } from '../candy-date';
import { getTimeConfig, isAllowedDate } from '../util';
export class DateRangePopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.resultOk = new EventEmitter();
        this.closePicker = new EventEmitter();
        // @Output() selectDate = new EventEmitter<CandyDate>(); // Emitted when the date is selected by click the date panel (if isRange, the returned date is from one of the range parts)
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { 'left': 0, 'right': 1 };
        this.disabledStartTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        };
        this.disabledEndTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        };
    }
    /**
     * @return {?}
     */
    get hasTimePicker() {
        return !!this.showTime;
    }
    /**
     * @return {?}
     */
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach((prop) => this.initialArray(prop));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isRange) {
            if (changes["value"]) { // Re-initialize all related values
                // Re-initialize all related values
                this.clearHoverValue();
                this.selectedValue = /** @type {?} */ (this.value);
                this.valueForRangeShow = this.normalizeRangeValue(/** @type {?} */ (this.value));
            }
        }
        // Parse showTime options
        if (changes["showTime"] || changes["disabledTime"]) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        // Show time picker when assigned panel mode as "time"
        if (changes["panelMode"] && this.hasTimePicker) {
            this.showTimePicker = this.panelMode === 'time';
        }
    }
    /**
     * @param {?} show
     * @return {?}
     */
    onShowTimePickerChange(show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onClickToday(value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            this.value = null; // Clear current value to not sync time by next step
            this.changeValue(value);
        }
        this.closePickerPanel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDayHover(value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) { // When right value is selected, don't do hover
            /** @type {?} */
            const base = this.selectedValue[0]; // Use the left of selected value as the base to decide later hoverValue
            if (base.isBefore(value, 'day')) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            (/** @type {?} */ (this.panelMode))[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    onHeaderChange(value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    onSelectTime(value, partType) {
        if (this.isRange) {
            /** @type {?} */
            const newValue = this.cloneRangeDate(/** @type {?} */ (this.value));
            /** @type {?} */
            const index = this.getPartTypeIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.setValue(newValue);
        }
        else {
            this.setValue(this.overrideHms(value, (/** @type {?} */ (this.value)) || new CandyDate())); // If not select a date currently, use today
        }
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    changeValue(value, partType) {
        if (this.isRange) {
            /** @type {?} */
            const index = this.getPartTypeIndex(partType);
            this.selectedValue[index] = value;
            if (this.isValidRange(this.selectedValue)) {
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    changeValueFromSelect(value) {
        if (this.isRange) {
            const [left, right] = /** @type {?} */ (this.selectedValue); // NOTE: the left/right maybe not the sequence it select at the date panels
            if ((!left && !right) || (left && right)) { // If totally full or empty, clean up && re-assign left first
                // If totally full or empty, clean up && re-assign left first
                this.hoverValue = this.selectedValue = [value];
            }
            else if (left && !right) { // If one of them is empty, assign the other one and sort, then set the final values
                // If one of them is empty, assign the other one and sort, then set the final values
                this.clearHoverValue(); // Clean up
                this.setRangeValue('selectedValue', 'right', value);
                this.sortRangeValue('selectedValue'); // Sort
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
        // this.selectDate.emit(value);
    }
    /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    enablePrevNext(direction, partType) {
        if (this.isRange) {
            const [start, end] = this.valueForRangeShow;
            /** @type {?} */
            const showMiddle = !start.addMonths(1).isSame(end, 'month'); // One month diff then don't show middle prev/next
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPanelMode(partType) {
        if (this.isRange) {
            return /** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]);
        }
        else {
            return /** @type {?} */ (this.panelMode);
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getValue(partType) {
        if (this.isRange) {
            return this.value[this.getPartTypeIndex(partType)];
        }
        else {
            return /** @type {?} */ (this.value);
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getValueBySelector(partType) {
        if (this.isRange) {
            /** @type {?} */
            const valueShow = this.showTimePicker ? this.value : this.valueForRangeShow; // Use the real time value that without decorations when timepicker is shown up
            return valueShow[this.getPartTypeIndex(partType)];
        }
        else {
            return /** @type {?} */ (this.value);
        }
    }
    /**
     * @param {?} partType
     * @return {?}
     */
    getPartTypeIndex(partType) {
        return this.partTypeMap[partType];
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : /** @type {?} */ (this.placeholder);
    }
    /**
     * @return {?}
     */
    hasSelectedValue() {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    }
    /**
     * @return {?}
     */
    isAllowedSelectedValue() {
        /** @type {?} */
        const selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime);
        }
        return false;
    }
    /**
     * @return {?}
     */
    timePickerDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    okDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate(/** @type {?} */ (this.value), this.disabledDate, this.disabledTime) : false;
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.isRange ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onClickPresetRange(val) {
        /** @type {?} */
        const value = valueFunctionProp(val);
        this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
        this.resultOk.emit();
    }
    /**
     * @return {?}
     */
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onHoverPresetRange(val) {
        this.hoverValue = ([new CandyDate(val[0]), new CandyDate(val[1])]);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    /**
     * @return {?}
     */
    closePickerPanel() {
        this.closePicker.emit();
    }
    /**
     * @return {?}
     */
    clearHoverValue() {
        this.hoverValue = [];
    }
    /**
     * @return {?}
     */
    buildTimeOptions() {
        if (this.showTime) {
            /** @type {?} */
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                this.timeOptions = [this.overrideTimeOptions(showTime, this.value[0], 'start'), this.overrideTimeOptions(showTime, this.value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, /** @type {?} */ (this.value));
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    /**
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    overrideTimeOptions(origin, value, partial) {
        /** @type {?} */
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return Object.assign({}, origin, getTimeConfig(value, disabledTimeFn));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        /** @type {?} */
        const newValue = value;
        // TODO: Sync original time (NOTE: this should take more care of beacuse it may depend on many change sources)
        // if (this.isRange) {
        //   // TODO: Sync time
        // } else {
        //   if (this.value) { // Sync time from the original one if it's available
        //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
        //   }
        // }
        this.value = newValue;
        this.valueChange.emit(this.value);
        this.buildTimeOptions();
    }
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    overrideHms(from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isValidRange(value) {
        if (Array.isArray(value)) {
            const [start, end] = value;
            /** @type {?} */
            const grain = this.hasTimePicker ? 'second' : 'day';
            return start && end && (start.isBefore(end, grain) || start.isSame(end, grain));
        }
        return false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    normalizeRangeValue(value) {
        const [start, end] = value;
        /** @type {?} */
        const newStart = start || new CandyDate();
        /** @type {?} */
        const newEnd = end && end.isSame(newStart, 'month') ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sortRangeValue(key) {
        if (Array.isArray(this[key])) {
            const [start, end] = this[key];
            if (start && end && start.isAfter(end, 'day')) {
                this[key] = [end, start];
            }
        }
    }
    /**
     * @param {?} key
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    setRangeValue(key, partType, value) {
        /** @type {?} */
        const ref = this[key] = this.cloneRangeDate(/** @type {?} */ (this[key]));
        ref[this.getPartTypeIndex(partType)] = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cloneRangeDate(value) {
        return /** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    initialArray(key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    }
}
DateRangePopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'date-range-popup',
                template: "<div\n  class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\"\n  [ngStyle]=\"popupStyle\">\n\n  <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\">\n    <div class=\"{{ prefixCls }}-panel\">\n      <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\n        <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container>\n      </ng-container>\n      <div class=\"{{ prefixCls }}-date-panel\">\n        <ng-container *ngIf=\"isRange; else tplSinglePart\">\n          <!-- Range Selectors -->\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\n          <div class=\"ant-calendar-range-middle\">~</div>\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </ng-container>\n      </div>\n      <ng-container *ngIf=\"isRange\"> <!-- Range ONLY -->\n        <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #tplCalendarInput let-partType=\"partType\">\n  <calendar-input\n    [value]=\"getValue(partType)\"\n    (valueChange)=\"changeValue($event, partType)\"\n    [locale]=\"locale\"\n    [disabledDate]=\"disabledDate\"\n    [format]=\"format\"\n    [placeholder]=\"getPlaceholder(partType)\"\n  ></calendar-input>\n</ng-template>\n\n<ng-template #tplInnerPopup let-partType=\"partType\">\n  <inner-popup\n    [showWeek]=\"showWeek\"\n    [locale]=\"locale\"\n    [showTimePicker]=\"hasTimePicker && showTimePicker\"\n    [timeOptions]=\"getTimeOptions(partType)\"\n    [panelMode]=\"getPanelMode(partType)\"\n    (panelModeChange)=\"onPanelModeChange($event, partType)\"\n    [value]=\"getValueBySelector(partType)\"\n    [disabledDate]=\"disabledDate\"\n    [dateRender]=\"dateRender\"\n    [selectedValue]=\"selectedValue\"\n    [hoverValue]=\"hoverValue\"\n    [enablePrev]=\"enablePrevNext('prev', partType)\"\n    [enableNext]=\"enablePrevNext('next', partType)\"\n    (dayHover)=\"onDayHover($event)\"\n    (selectDate)=\"changeValueFromSelect($event)\"\n    (selectTime)=\"onSelectTime($event, partType)\"\n    (headerChange)=\"onHeaderChange($event, partType)\"\n  ></inner-popup>\n</ng-template>\n\n<ng-template #tplFooter>\n  <calendar-footer\n    *ngIf=\"hasFooter\"\n    [locale]=\"locale\"\n    [showToday]=\"showToday\"\n    [hasTimePicker]=\"hasTimePicker\"\n    [timePickerDisabled]=\"timePickerDisabled()\"\n    [okDisabled]=\"okDisabled()\"\n    [extraFooter]=\"extraFooter\"\n    [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\n    [(showTimePicker)]=\"showTimePicker\"\n    (showTimePickerChange)=\"onShowTimePickerChange($event)\"\n    (clickOk)=\"resultOk.emit()\"\n    (clickToday)=\"onClickToday($event)\"\n  ></calendar-footer>\n</ng-template>\n\n<!-- Single ONLY -->\n<ng-template #tplSinglePart>\n  <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\n</ng-template>\n\n<!-- Range ONLY -->\n<ng-template #tplRangePart let-partType=\"partType\">\n  <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\">\n    <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container>\n    <div style=\"outline: none;\">\n      <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<!-- Range ONLY: Range Quick Selector -->\n<ng-template #tplRangeQuickSelector>\n  <a *ngFor=\"let name of getObjectKeys(ranges)\"\n    (click)=\"onClickPresetRange(ranges[name])\"\n    (mouseenter)=\"onHoverPresetRange(ranges[name])\"\n    (mouseleave)=\"onPresetRangeMouseLeave()\"\n  >{{ name }}</a>\n</ng-template>"
            }] }
];
DateRangePopupComponent.propDecorators = {
    isRange: [{ type: Input }],
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    format: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabledDate: [{ type: Input }],
    disabledTime: [{ type: Input }],
    showToday: [{ type: Input }],
    showTime: [{ type: Input }],
    extraFooter: [{ type: Input }],
    ranges: [{ type: Input }],
    dateRender: [{ type: Input }],
    popupStyle: [{ type: Input }],
    dropdownClassName: [{ type: Input }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    resultOk: [{ type: Output }],
    closePicker: [{ type: Output }]
};
function DateRangePopupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateRangePopupComponent.prototype.isRange;
    /** @type {?} */
    DateRangePopupComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePopupComponent.prototype.locale;
    /** @type {?} */
    DateRangePopupComponent.prototype.format;
    /** @type {?} */
    DateRangePopupComponent.prototype.placeholder;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledDate;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.showToday;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.extraFooter;
    /** @type {?} */
    DateRangePopupComponent.prototype.ranges;
    /** @type {?} */
    DateRangePopupComponent.prototype.dateRender;
    /** @type {?} */
    DateRangePopupComponent.prototype.popupStyle;
    /** @type {?} */
    DateRangePopupComponent.prototype.dropdownClassName;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelMode;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelModeChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.value;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.resultOk;
    /** @type {?} */
    DateRangePopupComponent.prototype.closePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.prefixCls;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTimePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.timeOptions;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueForRangeShow;
    /** @type {?} */
    DateRangePopupComponent.prototype.selectedValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.hoverValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.partTypeMap;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledStartTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledEndTime;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQThCLE1BQU0sZUFBZSxDQUFDO0FBR3RILE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBVy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFPdkQsTUFBTTs7K0JBa0J3QixJQUFJLFlBQVksRUFBMkI7MkJBRy9DLElBQUksWUFBWSxFQUEyQjt3QkFFOUMsSUFBSSxZQUFZLEVBQVE7MkJBQ3JCLElBQUksWUFBWSxFQUFROzt5QkFHNUIsY0FBYzs4QkFDUixLQUFLOzJCQW1CVCxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtpQ0EwSzNCLENBQUMsS0FBVyxFQUFzQixFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUMvRDsrQkFFaUIsQ0FBQyxLQUFXLEVBQXNCLEVBQUU7WUFDcEQsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdEOzs7OztJQXhMRCxJQUFJLGFBQWE7UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3hCOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxJ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QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt3QkFFTCxLQUFLOzhCQUNMLE1BQU07b0JBRU4sS0FBSzswQkFDTCxNQUFNO3VCQUVOLE1BQU07MEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vLi4vLi4vY29yZS90eXBlcy9jb21tb24td3JhcCc7XG5pbXBvcnQgeyB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQge1xuICBEaXNhYmxlZERhdGVGbixcbiAgRGlzYWJsZWRUaW1lQ29uZmlnLFxuICBEaXNhYmxlZFRpbWVGbixcbiAgRGlzYWJsZWRUaW1lUGFydGlhbCxcbiAgUGFuZWxNb2RlLFxuICBQcmVzZXRSYW5nZXMsXG4gIFN1cHBvcnRUaW1lT3B0aW9uc1xufSBmcm9tICcuLi8uLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlJztcbmltcG9ydCB7IGdldFRpbWVDb25maWcsIGlzQWxsb3dlZERhdGUgfSBmcm9tICcuLi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnZGF0ZS1yYW5nZS1wb3B1cCcsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgaXNSYW5nZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiBEaXNhYmxlZERhdGVGbjtcbiAgQElucHV0KCkgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjsgLy8gVGhpcyB3aWxsIGxlYWQgdG8gcmVidWlsZCB0aW1lIG9wdGlvbnNcbiAgQElucHV0KCkgc2hvd1RvZGF5OiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93VGltZTogU3VwcG9ydFRpbWVPcHRpb25zIHwgYm9vbGVhbjtcbiAgQElucHV0KCkgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuICBASW5wdXQoKSByYW5nZXM6IEZ1bmN0aW9uUHJvcDxQcmVzZXRSYW5nZXM+O1xuICBASW5wdXQoKSBkYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBwb3B1cFN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgcGFuZWxNb2RlOiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcbiAgQE91dHB1dCgpIHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlIHwgUGFuZWxNb2RlW10+KCk7XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdPigpO1xuXG4gIEBPdXRwdXQoKSByZXN1bHRPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xuICBAT3V0cHV0KCkgY2xvc2VQaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIE5vdGlmeSBvdXRzaWRlIHRvIGNsb3NlIHRoZSBwaWNrZXIgcGFuZWxcbiAgLy8gQE91dHB1dCgpIHNlbGVjdERhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIHRoZSBkYXRlIGlzIHNlbGVjdGVkIGJ5IGNsaWNrIHRoZSBkYXRlIHBhbmVsIChpZiBpc1JhbmdlLCB0aGUgcmV0dXJuZWQgZGF0ZSBpcyBmcm9tIG9uZSBvZiB0aGUgcmFuZ2UgcGFydHMpXG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcbiAgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGltZU9wdGlvbnM6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IFN1cHBvcnRUaW1lT3B0aW9uc1tdO1xuICAvLyB2YWx1ZUZvclNlbGVjdG9yOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuICB2YWx1ZUZvclJhbmdlU2hvdzogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgLy8gaW5pdGlhbFZhbHVlOiBDYW5keURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7IC8vIEluaXRpYWwgZGF0ZSB0byBzaG93IHdoZW4gbm8gdmFsdWUgaW5wdXRzXG5cbiAgLy8gZ2V0IHZhbHVlT3JJbml0aWFsKCk6IENhbmR5RGF0ZSB7XG4gIC8vICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgdGhpcy5pbml0aWFsVmFsdWU7XG4gIC8vIH1cbiAgZ2V0IGhhc1RpbWVQaWNrZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5zaG93VGltZTtcbiAgfVxuXG4gIGdldCBoYXNGb290ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1RvZGF5IHx8IHRoaXMuaGFzVGltZVBpY2tlciB8fCAhIXRoaXMuZXh0cmFGb290ZXIgfHwgISF0aGlzLnJhbmdlcztcbiAgfVxuXG4gIHByaXZhdGUgcGFydFR5cGVNYXAgPSB7ICdsZWZ0JzogMCwgJ3JpZ2h0JzogMSB9O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIEluaXRpYWxpemF0aW9uIGZvciByYW5nZSBwcm9wZXJ0aWVzIHRvIHByZXZlbnQgZXJyb3JzIHdoaWxlIGxhdGVyIGFzc2lnbm1lbnRcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBbICdwbGFjZWhvbGRlcicsICdwYW5lbE1vZGUnLCAnc2VsZWN0ZWRWYWx1ZScsICdob3ZlclZhbHVlJyBdLmZvckVhY2goKHByb3ApID0+IHRoaXMuaW5pdGlhbEFycmF5KHByb3ApKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgaWYgKGNoYW5nZXMudmFsdWUpIHsgLy8gUmUtaW5pdGlhbGl6ZSBhbGwgcmVsYXRlZCB2YWx1ZXNcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQYXJzZSBzaG93VGltZSBvcHRpb25zXG4gICAgaWYgKGNoYW5nZXMuc2hvd1RpbWUgfHwgY2hhbmdlcy5kaXNhYmxlZFRpbWUpIHtcbiAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XG4gICAgICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgdGltZSBwaWNrZXIgd2hlbiBhc3NpZ25lZCBwYW5lbCBtb2RlIGFzIFwidGltZVwiXG4gICAgaWYgKGNoYW5nZXMucGFuZWxNb2RlICYmIHRoaXMuaGFzVGltZVBpY2tlcikge1xuICAgICAgdGhpcy5zaG93VGltZVBpY2tlciA9IHRoaXMucGFuZWxNb2RlID09PSAndGltZSc7XG4gICAgfVxuICB9XG5cbiAgb25TaG93VGltZVBpY2tlckNoYW5nZShzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gdGhpcy5wYW5lbE1vZGUgPSBzaG93ID8gJ3RpbWUnIDogJ2RhdGUnO1xuICAgIC8vIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYW5lbE1vZGUpO1xuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQoc2hvdyA/ICd0aW1lJyA6ICdkYXRlJyk7XG4gIH1cblxuICBvbkNsaWNrVG9kYXkodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIC8vIGlmICh0aGlzLmlzUmFuZ2UpIHsgLy8gU2hvdyB0b2RheSBpcyBub3Qgc3VwcG9ydCBieSByYW5nZVxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdcIm56U2hvd1RvZGF5XCIgaXMgbm90IHN1cHBvcnQgZm9yIFwiUmFuZ2VQaWNrZXJcIiEnKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5pc1JhbmdlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDsgLy8gQ2xlYXIgY3VycmVudCB2YWx1ZSB0byBub3Qgc3luYyB0aW1lIGJ5IG5leHQgc3RlcFxuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VQaWNrZXJQYW5lbCgpO1xuICB9XG5cbiAgb25EYXlIb3Zlcih2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSAmJiB0aGlzLnNlbGVjdGVkVmFsdWVbIDAgXSAmJiAhdGhpcy5zZWxlY3RlZFZhbHVlWyAxIF0pIHsgLy8gV2hlbiByaWdodCB2YWx1ZSBpcyBzZWxlY3RlZCwgZG9uJ3QgZG8gaG92ZXJcbiAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLnNlbGVjdGVkVmFsdWVbIDAgXTsgLy8gVXNlIHRoZSBsZWZ0IG9mIHNlbGVjdGVkIHZhbHVlIGFzIHRoZSBiYXNlIHRvIGRlY2lkZSBsYXRlciBob3ZlclZhbHVlXG4gICAgICBpZiAoYmFzZS5pc0JlZm9yZSh2YWx1ZSwgJ2RheScpKSB7XG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFsgYmFzZSwgdmFsdWUgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFsgdmFsdWUsIGJhc2UgXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBhbmVsTW9kZUNoYW5nZShtb2RlOiBQYW5lbE1vZGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICh0aGlzLnBhbmVsTW9kZSBhcyBQYW5lbE1vZGVbXSlbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXSA9IG1vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcbiAgICB9XG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhbmVsTW9kZSk7XG4gIH1cblxuICBvbkhlYWRlckNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93WyB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpIF0gPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy52YWx1ZUZvclJhbmdlU2hvdyk7IC8vIFNob3VsZCBhbHdheXMgdGFrZSBjYXJlIG9mIHN0YXJ0L2VuZFxuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0VGltZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSk7XG4gICAgICBuZXdWYWx1ZVsgaW5kZXggXSA9IHRoaXMub3ZlcnJpZGVIbXModmFsdWUsIG5ld1ZhbHVlWyBpbmRleCBdKTtcbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMub3ZlcnJpZGVIbXModmFsdWUsICh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSkgfHwgbmV3IENhbmR5RGF0ZSgpKSk7IC8vIElmIG5vdCBzZWxlY3QgYSBkYXRlIGN1cnJlbnRseSwgdXNlIHRvZGF5XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpO1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlWyBpbmRleCBdID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkUmFuZ2UodGhpcy5zZWxlY3RlZFZhbHVlKSkge1xuICAgICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVmFsdWVGcm9tU2VsZWN0KHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCBbIGxlZnQsIHJpZ2h0IF0gPSB0aGlzLnNlbGVjdGVkVmFsdWUgYXMgQ2FuZHlEYXRlW107IC8vIE5PVEU6IHRoZSBsZWZ0L3JpZ2h0IG1heWJlIG5vdCB0aGUgc2VxdWVuY2UgaXQgc2VsZWN0IGF0IHRoZSBkYXRlIHBhbmVsc1xuXG4gICAgICBpZiAoKCFsZWZ0ICYmICFyaWdodCkgfHwgKGxlZnQgJiYgcmlnaHQpKSB7IC8vIElmIHRvdGFsbHkgZnVsbCBvciBlbXB0eSwgY2xlYW4gdXAgJiYgcmUtYXNzaWduIGxlZnQgZmlyc3RcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlID0gWyB2YWx1ZSBdO1xuICAgICAgfSBlbHNlIGlmIChsZWZ0ICYmICFyaWdodCkgeyAvLyBJZiBvbmUgb2YgdGhlbSBpcyBlbXB0eSwgYXNzaWduIHRoZSBvdGhlciBvbmUgYW5kIHNvcnQsIHRoZW4gc2V0IHRoZSBmaW5hbCB2YWx1ZXNcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTsgLy8gQ2xlYW4gdXBcbiAgICAgICAgdGhpcy5zZXRSYW5nZVZhbHVlKCdzZWxlY3RlZFZhbHVlJywgJ3JpZ2h0JywgdmFsdWUpO1xuICAgICAgICB0aGlzLnNvcnRSYW5nZVZhbHVlKCdzZWxlY3RlZFZhbHVlJyk7IC8vIFNvcnRcblxuICAgICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIC8vIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGVuYWJsZVByZXZOZXh0KGRpcmVjdGlvbjogJ3ByZXYnIHwgJ25leHQnLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCBbIHN0YXJ0LCBlbmQgXSA9IHRoaXMudmFsdWVGb3JSYW5nZVNob3c7XG4gICAgICBjb25zdCBzaG93TWlkZGxlID0gIXN0YXJ0LmFkZE1vbnRocygxKS5pc1NhbWUoZW5kLCAnbW9udGgnKTsgLy8gT25lIG1vbnRoIGRpZmYgdGhlbiBkb24ndCBzaG93IG1pZGRsZSBwcmV2L25leHRcbiAgICAgIGlmICgocGFydFR5cGUgPT09ICdsZWZ0JyAmJiBkaXJlY3Rpb24gPT09ICduZXh0JykgfHwgKHBhcnRUeXBlID09PSAncmlnaHQnICYmIGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSkge1xuICAgICAgICByZXR1cm4gc2hvd01pZGRsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXRQYW5lbE1vZGUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogUGFuZWxNb2RlIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYW5lbE1vZGVbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXSBhcyBQYW5lbE1vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBhbmVsTW9kZSBhcyBQYW5lbE1vZGU7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IHNpbmdsZSB2YWx1ZSBvciBwYXJ0IHZhbHVlIG9mIGEgcmFuZ2VcbiAgZ2V0VmFsdWUocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZVsgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWVCeVNlbGVjdG9yKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IENhbmR5RGF0ZSB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgdmFsdWVTaG93ID0gdGhpcy5zaG93VGltZVBpY2tlciA/IHRoaXMudmFsdWUgOiB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93OyAvLyBVc2UgdGhlIHJlYWwgdGltZSB2YWx1ZSB0aGF0IHdpdGhvdXQgZGVjb3JhdGlvbnMgd2hlbiB0aW1lcGlja2VyIGlzIHNob3duIHVwXG4gICAgICByZXR1cm4gdmFsdWVTaG93WyB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZTtcbiAgICB9XG4gIH1cblxuICBnZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0VHlwZU1hcFsgcGFydFR5cGUgXTtcbiAgfVxuXG4gIGdldFBsYWNlaG9sZGVyKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMucGxhY2Vob2xkZXJbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXSA6IHRoaXMucGxhY2Vob2xkZXIgYXMgc3RyaW5nO1xuICB9XG5cbiAgaGFzU2VsZWN0ZWRWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlICYmICEhdGhpcy5zZWxlY3RlZFZhbHVlWyAxIF0gJiYgISF0aGlzLnNlbGVjdGVkVmFsdWVbIDAgXTtcbiAgfVxuXG4gIGRpc2FibGVkU3RhcnRUaW1lID0gKHZhbHVlOiBEYXRlKTogRGlzYWJsZWRUaW1lQ29uZmlnID0+IHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFRpbWUgJiYgdGhpcy5kaXNhYmxlZFRpbWUodmFsdWUsICdzdGFydCcpO1xuICB9XG5cbiAgZGlzYWJsZWRFbmRUaW1lID0gKHZhbHVlOiBEYXRlKTogRGlzYWJsZWRUaW1lQ29uZmlnID0+IHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZFRpbWUgJiYgdGhpcy5kaXNhYmxlZFRpbWUodmFsdWUsICdlbmQnKTtcbiAgfVxuXG4gIGlzQWxsb3dlZFNlbGVjdGVkVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlWyAwIF0gJiYgc2VsZWN0ZWRWYWx1ZVsgMSBdKSB7XG4gICAgICByZXR1cm4gaXNBbGxvd2VkRGF0ZShzZWxlY3RlZFZhbHVlWyAwIF0sIHRoaXMuZGlzYWJsZWREYXRlLCB0aGlzLmRpc2FibGVkU3RhcnRUaW1lKSAmJlxuICAgICAgICBpc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWVbIDEgXSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRFbmRUaW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGltZVBpY2tlckRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5oYXNUaW1lUGlja2VyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaGFzU2VsZWN0ZWRWYWx1ZSgpIHx8ICEhdGhpcy5ob3ZlclZhbHVlLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9rRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVQaWNrZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc0FsbG93ZWRTZWxlY3RlZFZhbHVlKCkgfHwgIXRoaXMuaGFzU2VsZWN0ZWRWYWx1ZSgpIHx8ICEhdGhpcy5ob3ZlclZhbHVlLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPyAhaXNBbGxvd2VkRGF0ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRUaW1lKSA6IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldFRpbWVPcHRpb25zKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFN1cHBvcnRUaW1lT3B0aW9ucyB7XG4gICAgaWYgKHRoaXMuc2hvd1RpbWUgJiYgdGhpcy50aW1lT3B0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuaXNSYW5nZSA/IHRoaXMudGltZU9wdGlvbnNbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXSA6IHRoaXMudGltZU9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgb25DbGlja1ByZXNldFJhbmdlKHZhbDogRGF0ZVtdKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh2YWwpO1xuICAgIHRoaXMuc2V0VmFsdWUoWyBuZXcgQ2FuZHlEYXRlKHZhbHVlWyAwIF0pLCBuZXcgQ2FuZHlEYXRlKHZhbHVlWyAxIF0pIF0pO1xuICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xuICB9XG5cbiAgb25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcbiAgfVxuXG4gIG9uSG92ZXJQcmVzZXRSYW5nZSh2YWw6IERhdGVbXSk6IHZvaWQge1xuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IChbIG5ldyBDYW5keURhdGUodmFsWyAwIF0pLCBuZXcgQ2FuZHlEYXRlKHZhbFsgMSBdKSBdKTtcbiAgfVxuXG4gIGdldE9iamVjdEtleXMob2JqOiBvYmplY3QpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VQaWNrZXJQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlUGlja2VyLmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJIb3ZlclZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFRpbWVPcHRpb25zKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XG4gICAgICBjb25zdCBzaG93VGltZSA9IHR5cGVvZiB0aGlzLnNob3dUaW1lID09PSAnb2JqZWN0JyA/IHRoaXMuc2hvd1RpbWUgOiB7fTtcbiAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IFsgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB0aGlzLnZhbHVlWyAwIF0sICdzdGFydCcpLCB0aGlzLm92ZXJyaWRlVGltZU9wdGlvbnMoc2hvd1RpbWUsIHRoaXMudmFsdWVbIDEgXSwgJ2VuZCcpIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWVPcHRpb25zID0gdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3ZlcnJpZGVUaW1lT3B0aW9ucyhvcmlnaW46IFN1cHBvcnRUaW1lT3B0aW9ucywgdmFsdWU6IENhbmR5RGF0ZSwgcGFydGlhbD86IERpc2FibGVkVGltZVBhcnRpYWwpOiBTdXBwb3J0VGltZU9wdGlvbnMge1xuICAgIGxldCBkaXNhYmxlZFRpbWVGbjtcbiAgICBpZiAocGFydGlhbCkge1xuICAgICAgZGlzYWJsZWRUaW1lRm4gPSBwYXJ0aWFsID09PSAnc3RhcnQnID8gdGhpcy5kaXNhYmxlZFN0YXJ0VGltZSA6IHRoaXMuZGlzYWJsZWRFbmRUaW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHRoaXMuZGlzYWJsZWRUaW1lO1xuICAgIH1cbiAgICByZXR1cm4geyAuLi5vcmlnaW4sIC4uLmdldFRpbWVDb25maWcodmFsdWUsIGRpc2FibGVkVGltZUZuKSB9O1xuICB9XG5cbiAgLy8gU2V0IHZhbHVlIGFuZCB0cmlnZ2VyIGNoYW5nZSBldmVudFxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWU7XG5cbiAgICAvLyBUT0RPOiBTeW5jIG9yaWdpbmFsIHRpbWUgKE5PVEU6IHRoaXMgc2hvdWxkIHRha2UgbW9yZSBjYXJlIG9mIGJlYWN1c2UgaXQgbWF5IGRlcGVuZCBvbiBtYW55IGNoYW5nZSBzb3VyY2VzKVxuICAgIC8vIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAvLyAgIC8vIFRPRE86IFN5bmMgdGltZVxuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBpZiAodGhpcy52YWx1ZSkgeyAvLyBTeW5jIHRpbWUgZnJvbSB0aGUgb3JpZ2luYWwgb25lIGlmIGl0J3MgYXZhaWxhYmxlXG4gICAgLy8gICAgIG5ld1ZhbHVlID0gdGhpcy5vdmVycmlkZUhtcyh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSwgbmV3VmFsdWUgYXMgQ2FuZHlEYXRlKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuXG4gICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlSG1zKGZyb206IENhbmR5RGF0ZSwgdG86IENhbmR5RGF0ZSk6IENhbmR5RGF0ZSB7XG4gICAgaWYgKCFmcm9tIHx8ICF0bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0by5zZXRIbXMoZnJvbS5nZXRIb3VycygpLCBmcm9tLmdldE1pbnV0ZXMoKSwgZnJvbS5nZXRTZWNvbmRzKCkpO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIHJhbmdlIHZhbHVlXG4gIHByaXZhdGUgaXNWYWxpZFJhbmdlKHZhbHVlOiBDYW5keURhdGVbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY29uc3QgWyBzdGFydCwgZW5kIF0gPSB2YWx1ZTtcbiAgICAgIGNvbnN0IGdyYWluID0gdGhpcy5oYXNUaW1lUGlja2VyID8gJ3NlY29uZCcgOiAnZGF5JztcbiAgICAgIHJldHVybiBzdGFydCAmJiBlbmQgJiYgKHN0YXJ0LmlzQmVmb3JlKGVuZCwgZ3JhaW4pIHx8IHN0YXJ0LmlzU2FtZShlbmQsIGdyYWluKSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplUmFuZ2VWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBDYW5keURhdGVbXSB7XG4gICAgY29uc3QgWyBzdGFydCwgZW5kIF0gPSB2YWx1ZTtcbiAgICBjb25zdCBuZXdTdGFydCA9IHN0YXJ0IHx8IG5ldyBDYW5keURhdGUoKTtcbiAgICBjb25zdCBuZXdFbmQgPSBlbmQgJiYgZW5kLmlzU2FtZShuZXdTdGFydCwgJ21vbnRoJykgPyBlbmQuYWRkTW9udGhzKDEpIDogZW5kIHx8IG5ld1N0YXJ0LmFkZE1vbnRocygxKTtcbiAgICByZXR1cm4gWyBuZXdTdGFydCwgbmV3RW5kIF07XG4gIH1cblxuICAvLyBwcml2YXRlIGlzRW1wdHlSYW5nZVZhbHVlKHZhbHVlOiBDYW5keURhdGVbXSk6IGJvb2xlYW4ge1xuICAvLyAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KCh2YWwpID0+ICF2YWwpO1xuICAvLyB9XG5cbiAgLy8gU29ydCBhIHJhbmdlIHZhbHVlIChhY2N1cmF0ZSB0byBzZWNvbmQpXG4gIHByaXZhdGUgc29ydFJhbmdlVmFsdWUoa2V5OiAnc2VsZWN0ZWRWYWx1ZScpOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzWyBrZXkgXSkpIHtcbiAgICAgIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gdGhpc1sga2V5IF07XG4gICAgICBpZiAoc3RhcnQgJiYgZW5kICYmIHN0YXJ0LmlzQWZ0ZXIoZW5kLCAnZGF5JykpIHtcbiAgICAgICAgdGhpc1sga2V5IF0gPSBbIGVuZCwgc3RhcnQgXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZW5ldyBhbmQgc2V0IGEgcmFuZ2UgdmFsdWUgdG8gdHJpZ2dlciBzdWItY29tcG9uZW50J3MgY2hhbmdlIGRldGVjdGlvblxuICBwcml2YXRlIHNldFJhbmdlVmFsdWUoa2V5OiAndmFsdWUnIHwgJ3NlbGVjdGVkVmFsdWUnLCBwYXJ0VHlwZTogUmFuZ2VQYXJ0VHlwZSwgdmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IHJlZiA9IHRoaXNbIGtleSBdID0gdGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzWyBrZXkgXSBhcyBDYW5keURhdGVbXSk7XG4gICAgcmVmWyB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpIF0gPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvbmVSYW5nZURhdGUodmFsdWU6IENhbmR5RGF0ZVtdKTogQ2FuZHlEYXRlW10ge1xuICAgIHJldHVybiBbIHZhbHVlWyAwIF0gJiYgdmFsdWVbIDAgXS5jbG9uZSgpLCB2YWx1ZVsgMSBdICYmIHZhbHVlWyAxIF0uY2xvbmUoKSBdIGFzIENhbmR5RGF0ZVtdO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsQXJyYXkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXNbIGtleSBdIHx8ICFBcnJheS5pc0FycmF5KHRoaXNbIGtleSBdKSkge1xuICAgICAgdGhpc1sga2V5IF0gPSBbXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUmFuZ2VQYXJ0VHlwZSA9ICdsZWZ0JyB8ICdyaWdodCc7XG4iXX0=