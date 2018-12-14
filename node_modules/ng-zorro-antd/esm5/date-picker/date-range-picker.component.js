/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { AbstractPickerComponent } from './abstract-picker.component';
var DateRangePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateRangePickerComponent, _super);
    function DateRangePickerComponent(i18n) {
        var _this = _super.call(this, i18n) || this;
        _this.showWeek = false;
        _this.nzShowToday = true;
        _this.nzOnPanelChange = new EventEmitter();
        _this.nzOnOk = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DateRangePickerComponent.prototype, "nzShowTime", {
        get: /**
         * @return {?}
         */
        function () { return this._showTime; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showTime = typeof value === 'object' ? value : toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePickerComponent.prototype, "realShowToday", {
        get: /**
         * @return {?}
         */
        function () {
            // Range not support nzShowToday currently
            return !this.isRange && this.nzShowToday;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        // Default format when it's empty
        if (!this.nzFormat) {
            if (this.showWeek) {
                this.nzFormat = 'yyyy-ww'; // Format for week
            }
            else {
                this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes["nzRenderExtraFooter"]) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes["nzShowTime"] || changes["nzStyle"]) {
            this.setFixedPickerStyle();
        }
    };
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePickerComponent.prototype.onValueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        _super.prototype.onValueChange.call(this, value);
        if (!this.nzShowTime) {
            this.closeOverlay();
        }
    };
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.onResultOk = /**
     * @return {?}
     */
    function () {
        if (this.isRange) {
            if ((/** @type {?} */ (this.nzValue)).length) {
                this.nzOnOk.emit([this.nzValue[0].nativeDate, this.nzValue[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.nzValue) {
                this.nzOnOk.emit((/** @type {?} */ (this.nzValue)).nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.closeOverlay();
    };
    /**
     * @param {?} open
     * @return {?}
     */
    DateRangePickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.nzOnOpenChange.emit(open);
    };
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.setFixedPickerStyle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var showTimeFixes = {};
        if (this.nzShowTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = tslib_1.__assign({}, showTimeFixes, this.nzStyle);
    };
    DateRangePickerComponent.decorators = [
        { type: Component, args: [{
                    template: "" // Just for rollup
                    // Just for rollup
                }] }
    ];
    /** @nocollapse */
    DateRangePickerComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    DateRangePickerComponent.propDecorators = {
        nzDateRender: [{ type: Input }],
        nzDisabledTime: [{ type: Input }],
        nzRenderExtraFooter: [{ type: Input }],
        nzShowToday: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzRanges: [{ type: Input }],
        nzOnPanelChange: [{ type: Output }],
        nzShowTime: [{ type: Input }],
        nzOnOk: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DateRangePickerComponent.prototype, "nzShowToday", void 0);
    return DateRangePickerComponent;
}(AbstractPickerComponent));
export { DateRangePickerComponent };
function DateRangePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateRangePickerComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDateRender;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDisabledTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzShowToday;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzMode;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRanges;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnPanelChange;
    /** @type {?} */
    DateRangePickerComponent.prototype._showTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnOk;
    /** @type {?} */
    DateRangePickerComponent.prototype.pickerStyle;
    /** @type {?} */
    DateRangePickerComponent.prototype.extraFooter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE4QixNQUFNLGVBQWUsQ0FBQztBQUd0SCxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQWtCLE1BQU0sNkJBQTZCLENBQUM7O0lBT3hDLG9EQUF1QjtJQTBCbkUsa0NBQVksSUFBbUI7UUFBL0IsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FDWjt5QkEzQm1CLEtBQUs7NEJBS3VCLElBQUk7Z0NBR3hCLElBQUksWUFBWSxFQUEyQjt1QkFRcEQsSUFBSSxZQUFZLEVBQWtCOztLQVdwRDtJQWhCRCxzQkFBYSxnREFBVTs7OztRQUF2QixjQUE4QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTs7Ozs7UUFDdEUsVUFBZSxLQUF1QjtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkU7OztPQUhxRTtJQU90RSxzQkFBSSxtREFBYTs7OztRQUFqQjs7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzFDOzs7T0FBQTs7OztJQVNELDJDQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDOztRQUdqQixJQUFJ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T25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vY29yZS90eXBlcy9jb21tb24td3JhcCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHZhbHVlRnVuY3Rpb25Qcm9wLCBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50LCBDb21wYXRpYmxlRGF0ZSB9IGZyb20gJy4vYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXNhYmxlZFRpbWVGbiwgUGFuZWxNb2RlLCBQcmVzZXRSYW5nZXMgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgYCAvLyBKdXN0IGZvciByb2xsdXBcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTsgLy8gU2hvdWxkIHNob3cgYXMgd2VlayBwaWNrZXJcblxuICBASW5wdXQoKSBuekRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpNb2RlOiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcbiAgQElucHV0KCkgbnpSYW5nZXM6IEZ1bmN0aW9uUHJvcDxQcmVzZXRSYW5nZXM+O1xuICBAT3V0cHV0KCkgbnpPblBhbmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXT4oKTtcblxuICBwcml2YXRlIF9zaG93VGltZTogb2JqZWN0IHwgYm9vbGVhbjtcbiAgQElucHV0KCkgZ2V0IG56U2hvd1RpbWUoKTogb2JqZWN0IHwgYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zaG93VGltZTsgfVxuICBzZXQgbnpTaG93VGltZSh2YWx1ZTogb2JqZWN0IHwgYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dUaW1lID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDogdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBuek9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBhdGlibGVEYXRlPigpO1xuXG4gIGdldCByZWFsU2hvd1RvZGF5KCk6IGJvb2xlYW4geyAvLyBSYW5nZSBub3Qgc3VwcG9ydCBuelNob3dUb2RheSBjdXJyZW50bHlcbiAgICByZXR1cm4gIXRoaXMuaXNSYW5nZSAmJiB0aGlzLm56U2hvd1RvZGF5O1xuICB9XG5cbiAgcGlja2VyU3R5bGU6IG9iamVjdDsgLy8gRmluYWwgcGlja2VyIHN0eWxlIHRoYXQgY29udGFpbnMgd2lkdGggZml4IGNvcnJlY3Rpb25zIGV0Yy5cbiAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgICBzdXBlcihpMThuKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICAvLyBEZWZhdWx0IGZvcm1hdCB3aGVuIGl0J3MgZW1wdHlcbiAgICBpZiAoIXRoaXMubnpGb3JtYXQpIHtcbiAgICAgIGlmICh0aGlzLnNob3dXZWVrKSB7XG4gICAgICAgIHRoaXMubnpGb3JtYXQgPSAneXl5eS13dyc7IC8vIEZvcm1hdCBmb3Igd2Vla1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uekZvcm1hdCA9IHRoaXMubnpTaG93VGltZSA/ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyA6ICd5eXl5LU1NLWRkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG5cbiAgICBpZiAoY2hhbmdlcy5uelJlbmRlckV4dHJhRm9vdGVyKSB7XG4gICAgICB0aGlzLmV4dHJhRm9vdGVyID0gdmFsdWVGdW5jdGlvblByb3AodGhpcy5uelJlbmRlckV4dHJhRm9vdGVyKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5uelNob3dUaW1lIHx8IGNoYW5nZXMubnpTdHlsZSkge1xuICAgICAgdGhpcy5zZXRGaXhlZFBpY2tlclN0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgaGFzIG5vIHRpbWVwaWNrZXIgYW5kIHRoZSB1c2VyIHNlbGVjdCBhIGRhdGUgYnkgZGF0ZSBwYW5lbCwgdGhlbiBjbG9zZSBwaWNrZXJcbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgc3VwZXIub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XG5cbiAgICBpZiAoIXRoaXMubnpTaG93VGltZSkge1xuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcbiAgICB9XG4gIH1cblxuICAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXG4gIG9uUmVzdWx0T2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgaWYgKCh0aGlzLm56VmFsdWUgYXMgQ2FuZHlEYXRlW10pLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm56T25Pay5lbWl0KFsgdGhpcy5uelZhbHVlWyAwIF0ubmF0aXZlRGF0ZSwgdGhpcy5uelZhbHVlWyAxIF0ubmF0aXZlRGF0ZSBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoW10pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5uelZhbHVlKSB7XG4gICAgICAgIHRoaXMubnpPbk9rLmVtaXQoKHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcbiAgfVxuXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uek9uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xuICB9XG5cbiAgLy8gU2V0dXAgZml4ZWQgc3R5bGUgZm9yIHBpY2tlclxuICBwcml2YXRlIHNldEZpeGVkUGlja2VyU3R5bGUoKTogdm9pZCB7XG4gICAgY29uc3Qgc2hvd1RpbWVGaXhlczogeyB3aWR0aD86IHN0cmluZyB9ID0ge307XG4gICAgaWYgKHRoaXMubnpTaG93VGltZSkge1xuICAgICAgc2hvd1RpbWVGaXhlcy53aWR0aCA9IHRoaXMuaXNSYW5nZSA/ICczNTBweCcgOiAnMTk1cHgnO1xuICAgIH1cblxuICAgIHRoaXMucGlja2VyU3R5bGUgPSB7IC4uLnNob3dUaW1lRml4ZXMsIC4uLnRoaXMubnpTdHlsZSB9O1xuICB9XG59XG4iXX0=