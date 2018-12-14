/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { HeaderPickerComponent } from './header-picker.component';
var NzMonthPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzMonthPickerComponent, _super);
    function NzMonthPickerComponent(i18n) {
        var _this = _super.call(this, i18n) || this;
        _this.nzFormat = 'yyyy-MM';
        _this.endPanelMode = 'month';
        return _this;
    }
    NzMonthPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-month-picker',
                    template: "<nz-picker\n  [isRange]=\"false\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"nzStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <div *ngIf=\"realOpenState\">\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\n        <div class=\"ant-calendar-month-calendar-content\">\n          <div class=\"ant-calendar-month-header-wrap\">\n            <calendar-header\n              [disabledMonth]=\"nzDisabledDate\"\n              [panelMode]=\"panelMode\"\n              (panelModeChange)=\"onPanelModeChange($event)\"\n              [value]=\"nzValue\"\n              (chooseYear)=\"onChooseValue('year', $event)\"\n              (chooseMonth)=\"onChooseValue('month', $event)\"\n              [locale]=\"nzLocale.lang\"\n              [enablePrev]=\"true\"\n              [enableNext]=\"true\"\n            ></calendar-header>\n          </div>\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</nz-picker>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return NzMonthPickerComponent; })
                        }],
                    host: {
                        '[class.ant-calendar-picker]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzMonthPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    NzMonthPickerComponent.propDecorators = {
        nzFormat: [{ type: Input }]
    };
    return NzMonthPickerComponent;
}(HeaderPickerComponent));
export { NzMonthPickerComponent };
function NzMonthPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMonthPickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzMonthPickerComponent.prototype.endPanelMode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9tb250aC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUscUJBQXFCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7O0lBZTFDLGtEQUFxQjtJQUkvRCxnQ0FBWSxJQUFtQjtRQUEvQixZQUNFLGtCQUFNLElBQUksQ0FBQyxTQUNaO3lCQUwyQixTQUFTOzZCQUVGLE9BQU87O0tBR3pDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDg4Q0FBNkM7b0JBQzdDLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLEtBQUssRUFBRSxJQUFJOzRCQUNYLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixDQUFDO3lCQUN0RCxDQUFDO29CQUNGLElBQUksRUFBaUI7d0JBQ25CLDZCQUE2QixFQUFFLE1BQU07cUJBQ3RDO2lCQUNGOzs7O2dCQWZRLGFBQWE7OzsyQkFrQm5CLEtBQUs7O2lDQXBCUjtFQW1CNEMscUJBQXFCO1NBQXBELHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSGVhZGVyUGlja2VyQ29tcG9uZW50LCBTdXBwb3J0SGVhZGVyUGFuZWwgfSBmcm9tICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbW9udGgtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgbXVsdGk6IHRydWUsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpNb250aFBpY2tlckNvbXBvbmVudClcbiAgfV0sXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYWxlbmRhci1waWNrZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOek1vbnRoUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgSGVhZGVyUGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpGb3JtYXQ6IHN0cmluZyA9ICd5eXl5LU1NJztcblxuICBlbmRQYW5lbE1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbCA9ICdtb250aCc7XG4gIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgICBzdXBlcihpMThuKTtcbiAgfVxufVxuIl19