/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
export class CalendarInputComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onInputKeyup(event) {
        /** @type {?} */
        const date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        if (!date.isSame(this.value, 'second')) { // Not same with original value
            // Not same with original value
            this.value = date;
            this.valueChange.emit(this.value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    toReadableInput(value) {
        return value ? this.i18n.formatDateCompatible(value.nativeDate, this.format) : '';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    checkValidInputDate(event) {
        /** @type {?} */
        const input = (/** @type {?} */ (event.target)).value;
        /** @type {?} */
        const date = new CandyDate(input);
        this.invalidInputClass = '';
        if (date.isInvalid() || input !== this.toReadableInput(date)) { // Should also match the input format exactly
            // Should also match the input format exactly
            this.invalidInputClass = `${this.prefixCls}-input-invalid`;
            return null;
        }
        return date;
    }
}
CalendarInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-input',
                template: "<div class=\"{{ prefixCls }}-input-wrap\">\n  <div class=\"{{ prefixCls }}-date-input-wrap\">\n    <input\n      class=\"{{ prefixCls }}-input {{ invalidInputClass }}\"\n      placeholder=\"{{ placeholder || locale.dateSelect }}\"\n      value=\"{{ toReadableInput(value) }}\"\n      (keyup)=\"onInputKeyup($event)\"\n    />\n  </div>\n  <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\">\n    <!--<i nz-icon type=\"close\"></i>-->\n  </a>\n</div>"
            }] }
];
/** @nocollapse */
CalendarInputComponent.ctorParameters = () => [
    { type: NzI18nService }
];
CalendarInputComponent.propDecorators = {
    locale: [{ type: Input }],
    format: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabledDate: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }]
};
function CalendarInputComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarInputComponent.prototype.locale;
    /** @type {?} */
    CalendarInputComponent.prototype.format;
    /** @type {?} */
    CalendarInputComponent.prototype.placeholder;
    /** @type {?} */
    CalendarInputComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarInputComponent.prototype.value;
    /** @type {?} */
    CalendarInputComponent.prototype.valueChange;
    /** @type {?} */
    CalendarInputComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarInputComponent.prototype.invalidInputClass;
    /** @type {?} */
    CalendarInputComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2xpYi9jYWxlbmRhci9jYWxlbmRhci1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPMUMsTUFBTTs7OztJQVlKLFlBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7MkJBTGYsSUFBSSxZQUFZLEVBQWE7eUJBRWpDLGNBQWM7aUNBQ04sRUFBRTtLQUVjOzs7O0lBRTVDLFFBQVEsTUFBWTs7Ozs7SUFFcEIsWUFBWSxDQUFDLEtBQVk7O1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQ3RFLE9BQVE7U0FDVDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSwrQkFBK0I7O1lBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztLQUNGOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFnQjtRQUM5QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ25GOzs7OztJQUVPLG1CQUFtQixDQUFDLEtBQVk7O1FBQ3RDLE1BQU0sS0FBSyxHQUFHLG1CQUFDLEtBQUssQ0FBQyxNQUEwQixFQUFDLENBQUMsS0FBSyxDQUFDOztRQUN2RCxNQUFNLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsNkNBQTZDOztZQUMzRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxnQkFBZ0IsQ0FBQztZQUMzRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUM7Ozs7WUFoRGYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDZlQUE0QzthQUM3Qzs7OztZQU5RLGFBQWE7OztxQkFTbkIsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSztvQkFFTCxLQUFLOzBCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhbGVuZGFyLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1pbnB1dC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhcklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcbiAgaW52YWxpZElucHV0Q2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICBvbklucHV0S2V5dXAoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuY2hlY2tWYWxpZElucHV0RGF0ZShldmVudCk7XG5cbiAgICBpZiAoIWRhdGUgfHwgKHRoaXMuZGlzYWJsZWREYXRlICYmIHRoaXMuZGlzYWJsZWREYXRlKGRhdGUubmF0aXZlRGF0ZSkpKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIGlmICghZGF0ZS5pc1NhbWUodGhpcy52YWx1ZSwgJ3NlY29uZCcpKSB7IC8vIE5vdCBzYW1lIHdpdGggb3JpZ2luYWwgdmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHRvUmVhZGFibGVJbnB1dCh2YWx1ZTogQ2FuZHlEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUgPyB0aGlzLmkxOG4uZm9ybWF0RGF0ZUNvbXBhdGlibGUodmFsdWUubmF0aXZlRGF0ZSwgdGhpcy5mb3JtYXQpIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrVmFsaWRJbnB1dERhdGUoZXZlbnQ6IEV2ZW50KTogQ2FuZHlEYXRlIHtcbiAgICBjb25zdCBpbnB1dCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBDYW5keURhdGUoaW5wdXQpO1xuXG4gICAgdGhpcy5pbnZhbGlkSW5wdXRDbGFzcyA9ICcnO1xuICAgIGlmIChkYXRlLmlzSW52YWxpZCgpIHx8IGlucHV0ICE9PSB0aGlzLnRvUmVhZGFibGVJbnB1dChkYXRlKSkgeyAvLyBTaG91bGQgYWxzbyBtYXRjaCB0aGUgaW5wdXQgZm9ybWF0IGV4YWN0bHlcbiAgICAgIHRoaXMuaW52YWxpZElucHV0Q2xhc3MgPSBgJHt0aGlzLnByZWZpeENsc30taW5wdXQtaW52YWxpZGA7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuIl19