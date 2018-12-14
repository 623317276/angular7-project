/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { DateRangePickerComponent } from './date-range-picker.component';
var NzRangePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzRangePickerComponent, _super);
    function NzRangePickerComponent(i18n) {
        var _this = _super.call(this, i18n) || this;
        _this.isRange = true;
        return _this;
    }
    NzRangePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-range-picker',
                    template: "<nz-picker\n  [isRange]=\"isRange\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"pickerStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"nzMode\"\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\n    [value]=\"nzValue\"\n    (valueChange)=\"onValueChange($event)\"\n    [locale]=\"nzLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"nzShowTime\"\n    [format]=\"nzFormat\"\n    [dateRender]=\"nzDateRender\"\n    [disabledDate]=\"nzDisabledDate\"\n    [disabledTime]=\"nzDisabledTime\"\n    [placeholder]=\"nzPlaceHolder\"\n    [dropdownClassName]=\"nzDropdownClassName\"\n    [popupStyle]=\"nzPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"nzRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</nz-picker>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return NzRangePickerComponent; })
                        }],
                    host: {
                        '[class.ant-calendar-picker]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzRangePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    return NzRangePickerComponent;
}(DateRangePickerComponent));
export { NzRangePickerComponent };
function NzRangePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRangePickerComponent.prototype.isRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9yYW5nZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQWU3QixrREFBd0I7SUFFbEUsZ0NBQVksSUFBbUI7UUFBL0IsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FDWjt3QkFIa0IsSUFBSTs7S0FHdEI7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFLLGlCQUFpQjtvQkFDOUIsNHFDQUFpRDtvQkFDakQsU0FBUyxFQUFJLENBQUU7NEJBQ2IsT0FBTyxFQUFNLGlCQUFpQjs0QkFDOUIsS0FBSyxFQUFRLElBQUk7NEJBQ2pCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixDQUFDO3lCQUN0RCxDQUFFO29CQUNILElBQUksRUFBUzt3QkFDWCw2QkFBNkIsRUFBRSxNQUFNO3FCQUN0QztpQkFDRjs7OztnQkFmUSxhQUFhOztpQ0FGdEI7RUFtQjRDLHdCQUF3QjtTQUF2RCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICduei1yYW5nZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgIDogWyB7XG4gICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIG11bHRpICAgICAgOiB0cnVlLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFuZ2VQaWNrZXJDb21wb25lbnQpXG4gIH0gXSxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYWxlbmRhci1waWNrZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOelJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IHtcbiAgaXNSYW5nZTogYm9vbGVhbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgICBzdXBlcihpMThuKTtcbiAgfVxuXG59XG4iXX0=