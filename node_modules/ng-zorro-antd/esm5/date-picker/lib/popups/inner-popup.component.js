/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
var InnerPopupComponent = /** @class */ (function () {
    function InnerPopupComponent() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter();
        this.selectDate = new EventEmitter();
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    InnerPopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    InnerPopupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] && !this.value) {
            this.value = new CandyDate();
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    InnerPopupComponent.prototype.onSelectTime = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectTime.emit(new CandyDate(date));
    };
    // The value real changed to outside
    /**
     * @param {?} date
     * @return {?}
     */
    InnerPopupComponent.prototype.onSelectDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var value = date instanceof CandyDate ? date : new CandyDate(date);
        this.selectDate.emit(value);
    };
    InnerPopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'inner-popup',
                    template: "<calendar-header\n  [(panelMode)]=\"panelMode\"\n  (panelModeChange)=\"panelModeChange.emit($event)\"\n  [(value)]=\"value\"\n  (valueChange)=\"headerChange.emit($event)\"\n  [locale]=\"locale\"\n  [showTimePicker]=\"showTimePicker\"\n  [enablePrev]=\"enablePrev\"\n  [enableNext]=\"enableNext\"\n></calendar-header>\n\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\n  <nz-time-picker-panel\n    [nzInDatePicker]=\"true\"\n    [ngModel]=\"value.nativeDate\"\n    (ngModelChange)=\"onSelectTime($event)\"\n    [format]=\"timeOptions.nzFormat\"\n    [nzHourStep]=\"timeOptions.nzHourStep\"\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\n    [nzAddOn]=\"timeOptions.nzAddOn\"\n  ></nz-time-picker-panel>\n</ng-container>\n\n<div class=\"{{ prefixCls }}-body\">\n  <date-table\n    [showWeek]=\"showWeek\"\n    [value]=\"value\"\n    (valueChange)=\"onSelectDate($event)\"\n    showWeekNumber=\"false\"\n    [disabledDate]=\"disabledDate\"\n    [dateRender]=\"dateRender\"\n    [selectedValue]=\"selectedValue\"\n    [hoverValue]=\"hoverValue\"\n    (dayHover)=\"dayHover.emit($event)\"\n  ></date-table>\n</div>"
                }] }
    ];
    /** @nocollapse */
    InnerPopupComponent.ctorParameters = function () { return []; };
    InnerPopupComponent.propDecorators = {
        showWeek: [{ type: Input }],
        locale: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        timeOptions: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateRender: [{ type: Input }],
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        value: [{ type: Input }],
        headerChange: [{ type: Output }],
        selectDate: [{ type: Output }],
        selectTime: [{ type: Output }],
        dayHover: [{ type: Output }]
    };
    return InnerPopupComponent;
}());
export { InnerPopupComponent };
function InnerPopupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    InnerPopupComponent.prototype.showWeek;
    /** @type {?} */
    InnerPopupComponent.prototype.locale;
    /** @type {?} */
    InnerPopupComponent.prototype.showTimePicker;
    /** @type {?} */
    InnerPopupComponent.prototype.timeOptions;
    /** @type {?} */
    InnerPopupComponent.prototype.enablePrev;
    /** @type {?} */
    InnerPopupComponent.prototype.enableNext;
    /** @type {?} */
    InnerPopupComponent.prototype.disabledDate;
    /** @type {?} */
    InnerPopupComponent.prototype.dateRender;
    /** @type {?} */
    InnerPopupComponent.prototype.selectedValue;
    /** @type {?} */
    InnerPopupComponent.prototype.hoverValue;
    /** @type {?} */
    InnerPopupComponent.prototype.panelMode;
    /** @type {?} */
    InnerPopupComponent.prototype.panelModeChange;
    /** @type {?} */
    InnerPopupComponent.prototype.value;
    /** @type {?} */
    InnerPopupComponent.prototype.headerChange;
    /** @type {?} */
    InnerPopupComponent.prototype.selectDate;
    /** @type {?} */
    InnerPopupComponent.prototype.selectTime;
    /** @type {?} */
    InnerPopupComponent.prototype.dayHover;
    /** @type {?} */
    InnerPopupComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2xpYi9wb3B1cHMvaW5uZXItcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBOEIsTUFBTSxlQUFlLENBQUM7QUFLdEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFpQ3hDOytCQVg0QixJQUFJLFlBQVksRUFBYTs0QkFJaEMsSUFBSSxZQUFZLEVBQWE7MEJBQy9CLElBQUksWUFBWSxFQUFhOzBCQUM3QixJQUFJLFlBQVksRUFBYTt3QkFDL0IsSUFBSSxZQUFZLEVBQWE7eUJBRTlCLGNBQWM7S0FFakI7Ozs7SUFFakIsc0NBQVE7OztJQUFSLGVBQW9COzs7OztJQUVwQix5Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGFBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7OztJQUVELDBDQUFZOzs7O0lBQVosVUFBYSxJQUFVO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFFRCxvQ0FBb0M7Ozs7O0lBQ3BDLDBDQUFZOzs7O0lBQVosVUFBYSxJQUFzQjs7UUFFakMsSUFBTSxLQUFLLEdBQUksSUFBSSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3Qjs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsMDhDQUF5QztpQkFDMUM7Ozs7OzJCQUdFLEtBQUs7eUJBRUwsS0FBSztpQ0FDTCxLQUFLOzhCQUVMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUNMLEtBQUs7NEJBRUwsS0FBSztrQ0FDTCxNQUFNO3dCQUVOLEtBQUs7K0JBRUwsTUFBTTs2QkFDTixNQUFNOzZCQUNOLE1BQU07MkJBQ04sTUFBTTs7OEJBbENUOztTQVlhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vLi4vLi4vY29yZS90eXBlcy9jb21tb24td3JhcCc7XG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbm5lci1wb3B1cCcsXG4gIHRlbXBsYXRlVXJsOiAnaW5uZXItcG9wdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSW5uZXJQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgdGltZU9wdGlvbnM6IGFueTtcbiAgQElucHV0KCkgZW5hYmxlUHJldjogYm9vbGVhbjtcbiAgQElucHV0KCkgZW5hYmxlTmV4dDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiBEaXNhYmxlZERhdGVGbjtcbiAgQElucHV0KCkgZGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgQElucHV0KCkgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcblxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZTtcbiAgQE91dHB1dCgpIHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlPigpO1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG5cbiAgQE91dHB1dCgpIGhlYWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdXNlciBjaGFuZ2VkIHRoZSBoZWFkZXIncyB2YWx1ZVxuICBAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdGhlIGRhdGUgaXMgc2VsZWN0ZWQgYnkgY2xpY2sgdGhlIGRhdGUgcGFuZWxcbiAgQE91dHB1dCgpIHNlbGVjdFRpbWUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcbiAgQE91dHB1dCgpIGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSAmJiAhdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDYW5keURhdGUoKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdFRpbWUoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0VGltZS5lbWl0KG5ldyBDYW5keURhdGUoZGF0ZSkpO1xuICB9XG5cbiAgLy8gVGhlIHZhbHVlIHJlYWwgY2hhbmdlZCB0byBvdXRzaWRlXG4gIG9uU2VsZWN0RGF0ZShkYXRlOiBDYW5keURhdGUgfCBEYXRlKTogdm9pZCB7XG4gICAgLy8gdGhpcy52YWx1ZSA9IGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlIDogbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgICBjb25zdCB2YWx1ZSAgPSBkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZSA6IG5ldyBDYW5keURhdGUoZGF0ZSk7XG4gICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=