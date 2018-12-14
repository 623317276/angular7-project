/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import setMonth from 'date-fns/set_month';
import { NzI18nService as I18n } from '../i18n/nz-i18n.service';
export class NzCalendarHeaderComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.mode = 'month';
        this.modeChange = new EventEmitter();
        this.fullscreen = true;
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        this._activeDate = new Date();
        this.yearOffset = 10;
        this.yearTotal = 20;
        this.prefixCls = 'ant-fullcalendar';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._activeDate = value;
        this.setUpYears();
    }
    /**
     * @return {?}
     */
    get activeDate() {
        return this._activeDate;
    }
    /**
     * @return {?}
     */
    get activeYear() {
        return this.activeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    /**
     * @return {?}
     */
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    /**
     * @return {?}
     */
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.year;
    }
    /**
     * @return {?}
     */
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.month;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    /**
     * @param {?=} year
     * @return {?}
     */
    setUpYears(year) {
        /** @type {?} */
        const start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    /**
     * @return {?}
     */
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const dateInMonth = setMonth(this.activeDate, i);
            /** @type {?} */
            const monthText = this.i18n.formatDate(dateInMonth, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
NzCalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-calendar-header',
                template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\">\n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\n</nz-select>\n\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\n</nz-select>\n\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\n</nz-radio-group>\n",
                host: {
                    '[style.display]': `'block'`,
                    '[class.ant-fullcalendar-header]': `true`
                }
            }] }
];
/** @nocollapse */
NzCalendarHeaderComponent.ctorParameters = () => [
    { type: I18n }
];
NzCalendarHeaderComponent.propDecorators = {
    mode: [{ type: Input }],
    modeChange: [{ type: Output }],
    fullscreen: [{ type: Input }],
    activeDate: [{ type: Input }],
    yearChange: [{ type: Output }],
    monthChange: [{ type: Output }]
};
function NzCalendarHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.mode;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.modeChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.monthChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype._activeDate;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearOffset;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearTotal;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.years;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.months;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjYWxlbmRhci9uei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFVaEUsTUFBTTs7OztJQStDSixZQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkE5Q0ksT0FBTzswQkFDYyxJQUFJLFlBQVksRUFBRTswQkFFMUMsSUFBSTswQkFZVSxJQUFJLFlBQVksRUFBRTsyQkFDakIsSUFBSSxZQUFZLEVBQUU7MkJBRWxELElBQUksSUFBSSxFQUFFOzBCQUNILEVBQUU7eUJBQ0gsRUFBRTt5QkF3QkYsa0JBQWtCO0tBR3JDOzs7OztJQTFDRCxJQUNJLFVBQVUsQ0FBQyxLQUFXO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6Qjs7OztJQVdELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN0Qzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNuQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7S0FDOUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUM1Qzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0tBQzdDOzs7O0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2Qjs7Ozs7SUFFTyxVQUFVLENBQUMsSUFBYTs7UUFDOUIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O1FBQzFELE1BQU0sR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRW5DLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5Qzs7Ozs7SUFHSyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRWpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQzNCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDOztZQUNqRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEOzs7O1lBckZKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUssb0JBQW9CO2dCQUNqQywrNUJBQWtEO2dCQUNsRCxJQUFJLEVBQVM7b0JBQ1gsaUJBQWlCLEVBQWtCLFNBQVM7b0JBQzVDLGlDQUFpQyxFQUFFLE1BQU07aUJBQzFDO2FBQ0Y7Ozs7WUFUeUIsSUFBSTs7O21CQVczQixLQUFLO3lCQUNMLE1BQU07eUJBRU4sS0FBSzt5QkFFTCxLQUFLO3lCQVVMLE1BQU07MEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRfbW9udGgnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSBhcyBJMThuIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICduei1jYWxlbmRhci1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJyAgICAgICAgICAgICAgICA6IGAnYmxvY2snYCxcbiAgICAnW2NsYXNzLmFudC1mdWxsY2FsZW5kYXItaGVhZGVyXSc6IGB0cnVlYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtb2RlOiAnbW9udGgnIHwgJ3llYXInID0gJ21vbnRoJztcbiAgQE91dHB1dCgpIG1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjwnbW9udGgnIHwgJ3llYXInPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldFVwWWVhcnMoKTtcbiAgfVxuXG4gIGdldCBhY3RpdmVEYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xuICB9XG5cbiAgQE91dHB1dCgpIHllYXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbW9udGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIF9hY3RpdmVEYXRlID0gbmV3IERhdGUoKTtcbiAgeWVhck9mZnNldDogbnVtYmVyID0gMTA7XG4gIHllYXJUb3RhbDogbnVtYmVyID0gMjA7XG4gIHllYXJzOiBBcnJheTx7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfT47XG4gIG1vbnRoczogQXJyYXk8eyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+O1xuXG4gIGdldCBhY3RpdmVZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xuICB9XG5cbiAgZ2V0IGFjdGl2ZU1vbnRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xuICB9XG5cbiAgZ2V0IHNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gJ2RlZmF1bHQnIDogJ3NtYWxsJztcbiAgfVxuXG4gIGdldCB5ZWFyVHlwZVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLnllYXI7XG4gIH1cblxuICBnZXQgbW9udGhUeXBlVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkuQ2FsZW5kYXIubW9udGg7XG4gIH1cblxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtZnVsbGNhbGVuZGFyJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IEkxOG4pIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VXBZZWFycygpO1xuICAgIHRoaXMuc2V0VXBNb250aHMoKTtcbiAgfVxuXG4gIHVwZGF0ZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy55ZWFyQ2hhbmdlLmVtaXQoeWVhcik7XG4gICAgdGhpcy5zZXRVcFllYXJzKHllYXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFllYXJzKHllYXI/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFydCA9ICh5ZWFyIHx8IHRoaXMuYWN0aXZlWWVhcikgLSB0aGlzLnllYXJPZmZzZXQ7XG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLnllYXJUb3RhbDtcblxuICAgIHRoaXMueWVhcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpcy55ZWFycy5wdXNoKHsgbGFiZWw6IGAke2l9YCwgdmFsdWU6IGkgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcE1vbnRocygpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRocyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRlSW5Nb250aCA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgaSk7XG4gICAgICBjb25zdCBtb250aFRleHQgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlSW5Nb250aCwgJ01NTScpO1xuICAgICAgdGhpcy5tb250aHMucHVzaCh7IGxhYmVsOiBtb250aFRleHQsIHZhbHVlOiBpIH0pO1xuICAgIH1cbiAgfVxufVxuIl19