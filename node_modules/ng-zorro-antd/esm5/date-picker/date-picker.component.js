/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { DateRangePickerComponent } from './date-range-picker.component';
var NzDatePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzDatePickerComponent, _super);
    function NzDatePickerComponent(i18n) {
        var _this = _super.call(this, i18n) || this;
        _this.isRange = false;
        return _this;
    }
    NzDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-date-picker',
                    template: "<nz-picker\n  [isRange]=\"isRange\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"pickerStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"nzMode\"\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\n    [value]=\"nzValue\"\n    (valueChange)=\"onValueChange($event)\"\n    [locale]=\"nzLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"nzShowTime\"\n    [format]=\"nzFormat\"\n    [dateRender]=\"nzDateRender\"\n    [disabledDate]=\"nzDisabledDate\"\n    [disabledTime]=\"nzDisabledTime\"\n    [placeholder]=\"nzPlaceHolder\"\n    [dropdownClassName]=\"nzDropdownClassName\"\n    [popupStyle]=\"nzPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"nzRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</nz-picker>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return NzDatePickerComponent; })
                        }],
                    host: {
                        '[class.ant-calendar-picker]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzDatePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    return NzDatePickerComponent;
}(DateRangePickerComponent));
export { NzDatePickerComponent };
function NzDatePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDatePickerComponent.prototype.isRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFlOUIsaURBQXdCO0lBRWpFLCtCQUFZLElBQW1CO1FBQS9CLFlBQ0Usa0JBQU0sSUFBSSxDQUFDLFNBQ1o7d0JBSGtCLEtBQUs7O0tBR3ZCOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBSyxnQkFBZ0I7b0JBQzdCLDRxQ0FBaUQ7b0JBQ2pELFNBQVMsRUFBSSxDQUFFOzRCQUNiLE9BQU8sRUFBTSxpQkFBaUI7NEJBQzlCLEtBQUssRUFBUSxJQUFJOzRCQUNqQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsQ0FBQzt5QkFDckQsQ0FBRTtvQkFDSCxJQUFJLEVBQVM7d0JBQ1gsNkJBQTZCLEVBQUUsTUFBTTtxQkFDdEM7aUJBQ0Y7Ozs7Z0JBZlEsYUFBYTs7Z0NBRnRCO0VBbUIyQyx3QkFBd0I7U0FBdEQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5cbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnbnotZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgIDogWyB7XG4gICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIG11bHRpICAgICAgOiB0cnVlLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56RGF0ZVBpY2tlckNvbXBvbmVudClcbiAgfSBdLFxuICBob3N0ICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNhbGVuZGFyLXBpY2tlcl0nOiAndHJ1ZSdcbiAgfVxufSlcblxuZXhwb3J0IGNsYXNzIE56RGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XG4gIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoaTE4bjogTnpJMThuU2VydmljZSkge1xuICAgIHN1cGVyKGkxOG4pO1xuICB9XG59XG4iXX0=