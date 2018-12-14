/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
var MonthPanelComponent = /** @class */ (function () {
    function MonthPanelComponent() {
        this.valueChange = new EventEmitter();
        this.yearPanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    MonthPanelComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
    };
    MonthPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'month-panel',
                    template: "<div class=\"{{ prefixCls }}\">\n  <div>\n    <div class=\"{{ prefixCls }}-header\">\n      <a\n        class=\"{{ prefixCls }}-prev-year-btn\"\n        role=\"button\"\n        (click)=\"previousYear()\"\n        title=\"{{ locale.previousYear }}\"\n      ></a>\n\n      <a\n        class=\"{{ prefixCls }}-year-select\"\n        role=\"button\"\n        (click)=\"yearPanelShow.emit()\"\n        title=\"{{ locale.yearSelect }}\"\n      >\n        <span class=\"{{ prefixCls }}-year-select-content\">{{ value.getYear() }}</span>\n        <span class=\"{{ prefixCls }}-year-select-arrow\">x</span>\n      </a>\n\n      <a\n        class=\"{{ prefixCls }}-next-year-btn\"\n        role=\"button\"\n        (click)=\"nextYear()\"\n        title=\"{{ locale.nextYear }}\"\n      ></a>\n    </div>\n    <div class=\"{{ prefixCls }}-body\">\n      <month-table [disabledDate]=\"disabledDate\" [value]=\"value\" (valueChange)=\"valueChange.emit($event)\"></month-table>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    MonthPanelComponent.ctorParameters = function () { return []; };
    MonthPanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }],
        yearPanelShow: [{ type: Output }]
    };
    return MonthPanelComponent;
}());
export { MonthPanelComponent };
function MonthPanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthPanelComponent.prototype.locale;
    /** @type {?} */
    MonthPanelComponent.prototype.value;
    /** @type {?} */
    MonthPanelComponent.prototype.valueChange;
    /** @type {?} */
    MonthPanelComponent.prototype.disabledDate;
    /** @type {?} */
    MonthPanelComponent.prototype.yearPanelShow;
    /** @type {?} */
    MonthPanelComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2xpYi9tb250aC9tb250aC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFtQnhDOzJCQVJ3QixJQUFJLFlBQVksRUFBYTs2QkFJM0IsSUFBSSxZQUFZLEVBQVE7eUJBRTlCLDBCQUEwQjtLQUU3Qjs7OztJQUVqQixzQ0FBUTs7O0lBQVIsZUFBb0I7Ozs7SUFFcEIsMENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25COzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQjs7Ozs7SUFHTyxzQ0FBUTs7OztjQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7OztnQkEvQjVDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsOCtCQUF5QztpQkFDMUM7Ozs7O3lCQUdFLEtBQUs7d0JBRUwsS0FBSzs4QkFDTCxNQUFNOytCQUVOLEtBQUs7Z0NBRUwsTUFBTTs7OEJBbEJUOztTQVVhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtb250aC1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9udGgtcGFuZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgTW9udGhQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgeWVhclBhbmVsU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXItbW9udGgtcGFuZWwnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICBwcmV2aW91c1llYXIoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigtMSk7XG4gIH1cblxuICBuZXh0WWVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKDEpO1xuICB9XG5cbiAgLy8gUmUtcmVuZGVyIHBhbmVsIGNvbnRlbnQgYnkgdGhlIGhlYWRlcidzIGJ1dHRvbnMgKE5PVEU6IERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2UpXG4gIHByaXZhdGUgZ290b1llYXIoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5hZGRZZWFycyhhbW91bnQpO1xuICAgIC8vIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTsgLy8gRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZVxuICB9XG59XG4iXX0=