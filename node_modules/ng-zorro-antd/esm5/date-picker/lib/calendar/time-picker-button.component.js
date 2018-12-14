/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var TimePickerButtonComponent = /** @class */ (function () {
    function TimePickerButtonComponent() {
        this.timePickerDisabled = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    TimePickerButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.showTimePicker = !this.showTimePicker;
        this.showTimePickerChange.emit(this.showTimePicker);
    };
    TimePickerButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'time-picker-button',
                    template: "<a\n  class=\"{{ prefixCls }}-time-picker-btn {{ timePickerDisabled ? prefixCls + '-time-picker-btn-disabled' : '' }}\"\n  role=\"button\"\n  (click)=\"timePickerDisabled ? null : onClick()\"\n>\n  {{ showTimePicker ? locale.dateSelect : locale.timeSelect }}\n</a>"
                }] }
    ];
    TimePickerButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        timePickerDisabled: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }]
    };
    return TimePickerButtonComponent;
}());
export { TimePickerButtonComponent };
function TimePickerButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TimePickerButtonComponent.prototype.locale;
    /** @type {?} */
    TimePickerButtonComponent.prototype.timePickerDisabled;
    /** @type {?} */
    TimePickerButtonComponent.prototype.showTimePicker;
    /** @type {?} */
    TimePickerButtonComponent.prototype.showTimePickerChange;
    /** @type {?} */
    TimePickerButtonComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FsZW5kYXIvdGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O2tDQVc5QixLQUFLOzhCQUVULEtBQUs7b0NBQ1AsSUFBSSxZQUFZLEVBQVc7eUJBRXhDLGNBQWM7Ozs7O0lBRWxDLDJDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3JEOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLG9SQUFnRDtpQkFDakQ7Ozt5QkFHRSxLQUFLO3FDQUNMLEtBQUs7aUNBRUwsS0FBSzt1Q0FDTCxNQUFNOztvQ0FkVDs7U0FTYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0aW1lLXBpY2tlci1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJ3RpbWUtcGlja2VyLWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUaW1lUGlja2VyQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgdGltZVBpY2tlckRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHNob3dUaW1lUGlja2VyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG5cbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dUaW1lUGlja2VyID0gIXRoaXMuc2hvd1RpbWVQaWNrZXI7XG4gICAgdGhpcy5zaG93VGltZVBpY2tlckNoYW5nZS5lbWl0KHRoaXMuc2hvd1RpbWVQaWNrZXIpO1xuICB9XG59XG4iXX0=