/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var YearPanelComponent = /** @class */ (function () {
    function YearPanelComponent() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.currentYear / 10, 10) * 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 9;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    YearPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"]) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.previousDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-10);
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.nextDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(10);
    };
    /**
     * @param {?} index
     * @param {?} yearData
     * @return {?}
     */
    YearPanelComponent.prototype.trackPanelYear = /**
     * @param {?} index
     * @param {?} yearData
     * @return {?}
     */
    function (index, yearData) {
        return yearData.content;
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    YearPanelComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    YearPanelComponent.prototype.chooseYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.makePanelYears = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var years = [];
        /** @type {?} */
        var currentYear = this.currentYear;
        /** @type {?} */
        var startYear = this.startYear;
        /** @type {?} */
        var endYear = this.endYear;
        /** @type {?} */
        var previousYear = startYear - 1;
        /** @type {?} */
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            years[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var year = previousYear + index;
                /** @type {?} */
                var content = String(year);
                /** @type {?} */
                var cell = years[rowIndex][colIndex] = {
                    content: content,
                    year: year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                };
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = function () { return _this.previousDecade(); };
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = function () { return _this.nextDecade(); };
                }
                else {
                    cell.onClick = function () { return _this.chooseYear(cell.year); };
                }
                index++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return years;
    };
    YearPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'year-panel',
                    template: "<div class=\"{{ prefixCls }}\">\n  <div>\n    <div class=\"{{ prefixCls }}-header\">\n      <a\n        class=\"{{ prefixCls }}-prev-decade-btn\"\n        role=\"button\"\n        (click)=\"previousDecade()\"\n        title=\"{{ locale.previousDecade }}\"\n      ></a>\n      <a\n        class=\"{{ prefixCls }}-decade-select\"\n        role=\"button\"\n        (click)=\"decadePanelShow.emit()\"\n        title=\"{{ locale.decadeSelect }}\"\n      >\n        <span class=\"{{ prefixCls }}-decade-select-content\">\n          {{ startYear }}-{{ endYear }}\n        </span>\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\n      </a>\n\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\n    </div>\n    <div class=\"{{ prefixCls }}-body\">\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n        <tbody class=\"{{ prefixCls }}-tbody\">\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\n              role=\"gridcell\"\n              title=\"{{ yearCell.title }}\"\n              (click)=\"yearCell.onClick()\"\n              [ngClass]=\"yearCell.classMap\"\n            >\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    YearPanelComponent.ctorParameters = function () { return []; };
    YearPanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        decadePanelShow: [{ type: Output }]
    };
    return YearPanelComponent;
}());
export { YearPanelComponent };
function YearPanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    YearPanelComponent.prototype.locale;
    /** @type {?} */
    YearPanelComponent.prototype.value;
    /** @type {?} */
    YearPanelComponent.prototype.valueChange;
    /** @type {?} */
    YearPanelComponent.prototype.decadePanelShow;
    /** @type {?} */
    YearPanelComponent.prototype.prefixCls;
    /** @type {?} */
    YearPanelComponent.prototype.panelYears;
}
/**
 * @record
 */
export function PanelYearData() { }
function PanelYearData_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelYearData.prototype.content;
    /** @type {?} */
    PanelYearData.prototype.year;
    /** @type {?} */
    PanelYearData.prototype.title;
    /** @type {?} */
    PanelYearData.prototype.isCurrent;
    /** @type {?} */
    PanelYearData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelYearData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelYearData.prototype.classMap;
    /** @type {?} */
    PanelYearData.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL3llYXIveWVhci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQzs7QUFDbEIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztJQTRCaEI7MkJBakJ3QixJQUFJLFlBQVksRUFBYTsrQkFFekIsSUFBSSxZQUFZLEVBQVE7eUJBWWhDLHlCQUF5QjtLQUc1QjtJQWJqQixzQkFBSSwyQ0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCOzs7T0FBQTtJQUNELHNCQUFJLHlDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLFFBQVEsQ0FBQyxLQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN0RDs7O09BQUE7SUFDRCxzQkFBSSx1Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUMzQjs7O09BQUE7Ozs7O0lBT0Qsd0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxXQUFRO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0tBQ0Y7Ozs7SUFFRCwyQ0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDcEI7Ozs7SUFFRCx1Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMs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RUFBMUIsQ0FBMEIsQ0FBQztpQkFDakQ7Z0JBRUQsS0FBSyxFQUFHLENBQUM7OztZQTlCWCxLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLFFBQVEsRUFBRzt3QkFBN0MsUUFBUTthQStCaEI7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDOzs7Z0JBM0doQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHc4Q0FBd0M7aUJBQ3pDOzs7Ozt5QkFHRSxLQUFLO3dCQUVMLEtBQUs7OEJBQ0wsTUFBTTtrQ0FFTixNQUFNOzs2QkFuQlQ7O1NBYWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XG5cbmNvbnN0IE1BWF9ST1cgPSA0O1xuY29uc3QgTUFYX0NPTCA9IDM7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3llYXItcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJ3llYXItcGFuZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgWWVhclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcblxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBAT3V0cHV0KCkgZGVjYWRlUGFuZWxTaG93ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGdldCBjdXJyZW50WWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLmdldFllYXIoKTtcbiAgfVxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMuY3VycmVudFllYXIgLyAxMH1gLCAxMCkgKiAxMDtcbiAgfVxuICBnZXQgZW5kWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0WWVhciArIDk7XG4gIH1cblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXIteWVhci1wYW5lbCc7XG4gIHBhbmVsWWVhcnM6IFBhbmVsWWVhckRhdGFbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzRGVjYWRlKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoLTEwKTtcbiAgfVxuXG4gIG5leHREZWNhZGUoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigxMCk7XG4gIH1cblxuICB0cmFja1BhbmVsWWVhcihpbmRleDogbnVtYmVyLCB5ZWFyRGF0YTogUGFuZWxZZWFyRGF0YSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHllYXJEYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5wYW5lbFllYXJzID0gdGhpcy5tYWtlUGFuZWxZZWFycygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlLXJlbmRlciBwYW5lbCBjb250ZW50IGJ5IHRoZSBoZWFkZXIncyBidXR0b25zIChOT1RFOiBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlKVxuICBwcml2YXRlIGdvdG9ZZWFyKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuYWRkWWVhcnMoYW1vdW50KTtcbiAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7IC8vIERvIG5vdCB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZVxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGNob29zZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0WWVhcih5ZWFyKTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhbmVsWWVhcnMoKTogUGFuZWxZZWFyRGF0YVtdW10ge1xuICAgIGNvbnN0IHllYXJzOiBQYW5lbFllYXJEYXRhW11bXSA9IFtdO1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gdGhpcy5jdXJyZW50WWVhcjtcbiAgICBjb25zdCBzdGFydFllYXIgPSB0aGlzLnN0YXJ0WWVhcjtcbiAgICBjb25zdCBlbmRZZWFyID0gdGhpcy5lbmRZZWFyO1xuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IHN0YXJ0WWVhciAtIDE7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXggKyspIHtcbiAgICAgIHllYXJzW3Jvd0luZGV4XSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4ICsrKSB7XG4gICAgICAgIGNvbnN0IHllYXIgPSBwcmV2aW91c1llYXIgKyBpbmRleDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IFN0cmluZyh5ZWFyKTtcblxuICAgICAgICBjb25zdCBjZWxsID0geWVhcnNbcm93SW5kZXhdW2NvbEluZGV4XSA9IHtcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIHllYXIsXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXG4gICAgICAgICAgaXNDdXJyZW50OiB5ZWFyID09PSBjdXJyZW50WWVhcixcbiAgICAgICAgICBpc0xvd2VyVGhhblN0YXJ0OiB5ZWFyIDwgc3RhcnRZZWFyLFxuICAgICAgICAgIGlzQmlnZ2VyVGhhbkVuZDogeWVhciA+IGVuZFllYXIsXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXG4gICAgICAgICAgb25DbGljazogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1jZWxsYF06IGNlbGwuaXNDdXJyZW50LFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1kZWNhZGUtY2VsbGBdOiBjZWxsLmlzTG93ZXJUaGFuU3RhcnQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LWRlY2FkZS1jZWxsYF06IGNlbGwuaXNCaWdnZXJUaGFuRW5kXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNlbGwuaXNMb3dlclRoYW5TdGFydCkge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMucHJldmlvdXNEZWNhZGUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmlzQmlnZ2VyVGhhbkVuZCkge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMubmV4dERlY2FkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMuY2hvb3NlWWVhcihjZWxsLnllYXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXggKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB5ZWFycztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsWWVhckRhdGEge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHllYXI6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXNDdXJyZW50OiBib29sZWFuO1xuICBpc0xvd2VyVGhhblN0YXJ0OiBib29sZWFuO1xuICBpc0JpZ2dlclRoYW5FbmQ6IGJvb2xlYW47XG4gIGNsYXNzTWFwOiBvYmplY3Q7XG4gIG9uQ2xpY2soKTogdm9pZDtcbn1cbiJdfQ==