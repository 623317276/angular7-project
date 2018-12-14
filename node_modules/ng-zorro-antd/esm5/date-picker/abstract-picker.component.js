/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { CandyDate } from './lib/candy-date';
import { NzPickerComponent } from './picker.component';
/** @type {?} */
var POPUP_STYLE_PATCH = { 'position': 'relative' };
/**
 * The base picker for all common APIs
 * @abstract
 */
var AbstractPickerComponent = /** @class */ (function () {
    function AbstractPickerComponent(i18n) {
        this.i18n = i18n;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzOnOpenChange = new EventEmitter();
        this.isRange = false;
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = function () { return void 0; };
        this.onTouchedFn = function () { return void 0; };
    }
    Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.picker.animationOpenState;
        } // Use picker's real open state to let re-render the picker's content when shown up
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.initValue = /**
     * @return {?}
     */
    function () {
        this.nzValue = this.isRange ? [] : null;
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange
                .pipe(takeUntil(this.destroyed$))
                .subscribe(function () { return _this.setLocale(); });
        }
        // Default value
        this.initValue();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzPopupStyle"]) { // Always assign the popup style patch
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? tslib_1.__assign({}, this.nzPopupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if (changes["nzPlaceHolder"] && changes["nzPlaceHolder"].firstChange && typeof this.nzPlaceHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes["nzLocale"]) { // The nzLocale is currently handled by user
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.closeOverlay = /**
     * @return {?}
     */
    function () {
        this.picker.hideOverlay();
    };
    /**
     * Common handle for value changes
     * @param value changed value
     */
    /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    AbstractPickerComponent.prototype.onValueChange = /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    function (value) {
        this.nzValue = value;
        if (this.isRange) {
            if ((/** @type {?} */ (this.nzValue)).length) {
                this.onChangeFn([this.nzValue[0].nativeDate, this.nzValue[1].nativeDate]);
            }
            else {
                this.onChangeFn([]);
            }
        }
        else {
            if (this.nzValue) {
                this.onChangeFn((/** @type {?} */ (this.nzValue)).nativeDate);
            }
            else {
                this.onChangeFn(null);
            }
        }
        this.onTouchedFn();
    };
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    AbstractPickerComponent.prototype.onOpenChange = /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    function (open) {
        this.nzOnOpenChange.emit(open);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        // tslint:disable-line:no-any
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        // tslint:disable-line:no-any
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.setLocale = /**
     * @return {?}
     */
    function () {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDefaultPlaceHolder = /**
     * @return {?}
     */
    function () {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    AbstractPickerComponent.prototype.formatDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date ? this.i18n.formatDateCompatible(date.nativeDate, this.nzFormat) : '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            this.nzValue = value ? (/** @type {?} */ (value)).map(function (val) { return new CandyDate(val); }) : [];
        }
        else {
            this.nzValue = value ? new CandyDate(/** @type {?} */ (value)) : null;
        }
    };
    AbstractPickerComponent.propDecorators = {
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzDisabledDate: [{ type: Input }],
        nzLocale: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzPopupStyle: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzOnOpenChange: [{ type: Output }],
        nzFormat: [{ type: Input }],
        nzValue: [{ type: Input }],
        picker: [{ type: ViewChild, args: [NzPickerComponent,] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzOpen", void 0);
    return AbstractPickerComponent;
}());
export { AbstractPickerComponent };
function AbstractPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AbstractPickerComponent.prototype.nzAllowClear;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDisabled;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzOpen;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDisabledDate;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzLocale;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzPopupStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzSize;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzOnOpenChange;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzFormat;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzValue;
    /** @type {?} */
    AbstractPickerComponent.prototype.picker;
    /** @type {?} */
    AbstractPickerComponent.prototype.isRange;
    /** @type {?} */
    AbstractPickerComponent.prototype.destroyed$;
    /** @type {?} */
    AbstractPickerComponent.prototype.isCustomPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.onChangeFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.onTouchedFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV2RCxJQUFNLGlCQUFpQixHQUFHLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDOzs7Ozs7SUF3Q25ELGlDQUFzQixJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlOzs0QkFqQ1EsSUFBSTsyQkFDTCxLQUFLOzBCQUNOLEtBQUs7NEJBTXBCLGlCQUFpQjs4QkFJdEIsSUFBSSxZQUFZLEVBQVc7dUJBUW5DLEtBQUs7MEJBVWMsSUFBSSxPQUFPLEVBQUU7bUNBQ1YsS0FBSzs7Ozs7MEJBNEVGLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNOzJCQUM5QixjQUFNLE9BQUEsS0FBSyxDQUFDLEVBQU4sQ0FBTTtLQTFFckM7SUFaRCxzQkFBSSxrREFBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztTQUN2QyxDQUFDLG1GQUFtRjs7OztPQUFwRjs7OztJQUVELDJDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcs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QyxLQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQzVEOzs7K0JBeEpGLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLO3NDQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLE1BQU07MkJBRU4sS0FBSzswQkFFTCxLQUFLO3lCQUVMLFNBQVMsU0FBQyxpQkFBaUI7OztRQWxCbEIsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7a0NBOUIxQjs7U0F5QnNCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuL2xpYi9jYW5keS1kYXRlJztcbmltcG9ydCB7IE56UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcblxuY29uc3QgUE9QVVBfU1RZTEVfUEFUQ0ggPSB7ICdwb3NpdGlvbic6ICdyZWxhdGl2ZScgfTsgLy8gQWltIHRvIG92ZXJyaWRlIGFudGQncyBzdHlsZSB0byBzdXBwb3J0IG92ZXJsYXkncyBwb3NpdGlvbiBzdHJhdGVneSAocG9zaXRpb246YWJzb2x1dGUgd2lsbCBjYXVzZSBpdCBub3Qgd29ya2luZyBiZWFjdXNlIHRoZSBvdmVybGF5IGNhbid0IGdldCB0aGUgaGVpZ2h0L3dpZHRoIG9mIGl0J3MgY29udGVudClcblxuLyoqXG4gKiBUaGUgYmFzZSBwaWNrZXIgZm9yIGFsbCBjb21tb24gQVBJc1xuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8vIC0tLSBDb21tb24gQVBJXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXI6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3BlbjogYm9vbGVhbjtcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpEaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBuekxvY2FsZTogTnpEYXRlUGlja2VySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIG56UG9wdXBTdHlsZTogb2JqZWN0ID0gUE9QVVBfU1RZTEVfUEFUQ0g7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpTaXplOiAnbGFyZ2UnIHwgJ3NtYWxsJztcbiAgQElucHV0KCkgbnpTdHlsZTogb2JqZWN0O1xuICBAT3V0cHV0KCkgbnpPbk9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgbnpGb3JtYXQ6IHN0cmluZztcblxuICBASW5wdXQoKSBuelZhbHVlOiBDb21wYXRpYmxlVmFsdWU7XG5cbiAgQFZpZXdDaGlsZChOelBpY2tlckNvbXBvbmVudCkgcHJvdGVjdGVkIHBpY2tlcjogTnpQaWNrZXJDb21wb25lbnQ7XG5cbiAgaXNSYW5nZTogYm9vbGVhbiA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHRoZSB2YWx1ZSBpcyBhIHJhbmdlIHZhbHVlXG5cbiAgZ2V0IHJlYWxPcGVuU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGlja2VyLmFuaW1hdGlvbk9wZW5TdGF0ZTtcbiAgfSAvLyBVc2UgcGlja2VyJ3MgcmVhbCBvcGVuIHN0YXRlIHRvIGxldCByZS1yZW5kZXIgdGhlIHBpY2tlcidzIGNvbnRlbnQgd2hlbiBzaG93biB1cFxuXG4gIGluaXRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56VmFsdWUgPSB0aGlzLmlzUmFuZ2UgPyBbXSA6IG51bGw7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGVzdHJveWVkJDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByb3RlY3RlZCBpc0N1c3RvbVBsYWNlSG9sZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFN1YnNjcmliZSB0aGUgZXZlcnkgbG9jYWxlIGNoYW5nZSBpZiB0aGUgbnpMb2NhbGUgaXMgbm90IGhhbmRsZWQgYnkgdXNlclxuICAgIGlmICghdGhpcy5uekxvY2FsZSkge1xuICAgICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95ZWQkKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldExvY2FsZSgpKTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHZhbHVlXG4gICAgdGhpcy5pbml0VmFsdWUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelBvcHVwU3R5bGUpIHsgLy8gQWx3YXlzIGFzc2lnbiB0aGUgcG9wdXAgc3R5bGUgcGF0Y2hcbiAgICAgIHRoaXMubnpQb3B1cFN0eWxlID0gdGhpcy5uelBvcHVwU3R5bGUgPyB7IC4uLnRoaXMubnpQb3B1cFN0eWxlLCAuLi5QT1BVUF9TVFlMRV9QQVRDSCB9IDogUE9QVVBfU1RZTEVfUEFUQ0g7XG4gICAgfVxuXG4gICAgLy8gTWFyayBhcyBjdXN0b21pemVkIHBsYWNlaG9sZGVyIGJ5IHVzZXIgb25jZSBuelBsYWNlSG9sZGVyIGFzc2lnbmVkIGF0IHRoZSBmaXJzdCB0aW1lXG4gICAgaWYgKGNoYW5nZXMubnpQbGFjZUhvbGRlciAmJiBjaGFuZ2VzLm56UGxhY2VIb2xkZXIuZmlyc3RDaGFuZ2UgJiYgdHlwZW9mIHRoaXMubnpQbGFjZUhvbGRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMubnpMb2NhbGUpIHsgLy8gVGhlIG56TG9jYWxlIGlzIGN1cnJlbnRseSBoYW5kbGVkIGJ5IHVzZXJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3llZCQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGNsb3NlT3ZlcmxheSgpOiB2b2lkIHtcbiAgICB0aGlzLnBpY2tlci5oaWRlT3ZlcmxheSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbW1vbiBoYW5kbGUgZm9yIHZhbHVlIGNoYW5nZXNcbiAgICogQHBhcmFtIHZhbHVlIGNoYW5nZWQgdmFsdWVcbiAgICovXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENvbXBhdGlibGVWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMubnpWYWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGlmICgodGhpcy5uelZhbHVlIGFzIENhbmR5RGF0ZVtdKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKFsgdGhpcy5uelZhbHVlWyAwIF0ubmF0aXZlRGF0ZSwgdGhpcy5uelZhbHVlWyAxIF0ubmF0aXZlRGF0ZSBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihbXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm56VmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKCh0aGlzLm56VmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5vblRvdWNoZWRGbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJlZCB3aGVuIG92ZXJsYXlPcGVuIGNoYW5nZXMgKGRpZmZlcmVudCB3aXRoIHJlYWxPcGVuU3RhdGUpXG4gICAqIEBwYXJhbSBvcGVuIFRoZSBvdmVybGF5T3BlbiBpbiBwaWNrZXIgY29tcG9uZW50XG4gICAqL1xuICBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgaW1wbGVtZW50c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBOT1RFOiBvbkNoYW5nZUZuL29uVG91Y2hlZEZuIHdpbGwgbm90IGJlIGFzc2lnbmVkIGlmIHVzZXIgbm90IHVzZSBhcyBuZ01vZGVsXG4gIG9uQ2hhbmdlRm46ICh2YWw6IENvbXBhdGlibGVEYXRlKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuICBvblRvdWNoZWRGbjogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgdGhpcy5vblRvdWNoZWRGbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgSW50ZXJuYWwgbWV0aG9kc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBSZWxvYWQgbG9jYWxlIGZyb20gaTE4biB3aXRoIHNpZGUgZWZmZWN0c1xuICBwcml2YXRlIHNldExvY2FsZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56TG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXInLCB7fSk7XG4gICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0N1c3RvbVBsYWNlSG9sZGVyICYmIHRoaXMubnpMb2NhbGUpIHtcbiAgICAgIHRoaXMubnpQbGFjZUhvbGRlciA9IHRoaXMuaXNSYW5nZSA/IHRoaXMubnpMb2NhbGUubGFuZy5yYW5nZVBsYWNlaG9sZGVyIDogdGhpcy5uekxvY2FsZS5sYW5nLnBsYWNlaG9sZGVyO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0RGF0ZShkYXRlOiBDYW5keURhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBkYXRlID8gdGhpcy5pMThuLmZvcm1hdERhdGVDb21wYXRpYmxlKGRhdGUubmF0aXZlRGF0ZSwgdGhpcy5uekZvcm1hdCkgOiAnJztcbiAgfVxuXG4gIC8vIFNhZmUgd2F5IG9mIHNldHRpbmcgdmFsdWUgd2l0aCBkZWZhdWx0XG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgdGhpcy5uelZhbHVlID0gdmFsdWUgPyAodmFsdWUgYXMgRGF0ZVtdKS5tYXAodmFsID0+IG5ldyBDYW5keURhdGUodmFsKSkgOiBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uelZhbHVlID0gdmFsdWUgPyBuZXcgQ2FuZHlEYXRlKHZhbHVlIGFzIERhdGUpIDogbnVsbDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ29tcGF0aWJsZVZhbHVlID0gQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW107XG5cbmV4cG9ydCB0eXBlIENvbXBhdGlibGVEYXRlID0gRGF0ZSB8IERhdGVbXTtcbiJdfQ==