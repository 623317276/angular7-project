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
var DecadePanelComponent = /** @class */ (function () {
    function DecadePanelComponent() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    Object.defineProperty(DecadePanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.value.getYear() / 100, 10) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecadePanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 99;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DecadePanelComponent.prototype.ngOnChanges = /**
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
    DecadePanelComponent.prototype.previousCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-100);
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.nextCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(100);
    };
    /**
     * @param {?} index
     * @param {?} decadeData
     * @return {?}
     */
    DecadePanelComponent.prototype.trackPanelDecade = /**
     * @param {?} index
     * @param {?} decadeData
     * @return {?}
     */
    function (index, decadeData) {
        return decadeData.content;
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
        }
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    DecadePanelComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    };
    /**
     * @param {?} startYear
     * @return {?}
     */
    DecadePanelComponent.prototype.chooseDecade = /**
     * @param {?} startYear
     * @return {?}
     */
    function (startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.makePanelDecades = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var decades = [];
        /** @type {?} */
        var currentYear = this.value.getYear();
        /** @type {?} */
        var startYear = this.startYear;
        /** @type {?} */
        var endYear = this.endYear;
        /** @type {?} */
        var previousYear = startYear - 10;
        /** @type {?} */
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var start = previousYear + index * 10;
                /** @type {?} */
                var end = previousYear + index * 10 + 9;
                /** @type {?} */
                var content = start + "-" + end;
                /** @type {?} */
                var cell = decades[rowIndex][colIndex] = {
                    content: content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                };
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-last-century-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-century-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = function () { return _this.previousCentury(); };
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = function () { return _this.nextCentury(); };
                }
                else {
                    cell.onClick = function () { return _this.chooseDecade(start); };
                }
                index++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return decades;
    };
    DecadePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'decade-panel',
                    template: "<div class=\"{{ prefixCls }}\">\n  <div class=\"{{ prefixCls }}-header\">\n    <a\n      class=\"{{ prefixCls }}-prev-century-btn\"\n      role=\"button\"\n      (click)=\"previousCentury()\"\n      title=\"{{ locale.previousCentury }}\"\n    ></a>\n\n    <div class=\"{{ prefixCls }}-century\">\n      {{ startYear }}-{{ endYear }}\n    </div>\n    <a\n      class=\"{{ prefixCls }}-next-century-btn\"\n      role=\"button\"\n      (click)=\"nextCentury()\"\n      title=\"{{ locale.nextCentury }}\"\n    ></a>\n  </div>\n  <div class=\"{{ prefixCls }}-body\">\n    <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n      <tbody class=\"{{ prefixCls }}-tbody\">\n        <tr *ngFor=\"let row of panelDecades\" role=\"row\">\n          <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\"\n            role=\"gridcell\"\n            title=\"{{ cell.title }}\"\n            (click)=\"cell.onClick()\"\n            [ngClass]=\"cell.classMap\"\n          >\n            <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DecadePanelComponent.ctorParameters = function () { return []; };
    DecadePanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }]
    };
    return DecadePanelComponent;
}());
export { DecadePanelComponent };
function DecadePanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DecadePanelComponent.prototype.locale;
    /** @type {?} */
    DecadePanelComponent.prototype.value;
    /** @type {?} */
    DecadePanelComponent.prototype.valueChange;
    /** @type {?} */
    DecadePanelComponent.prototype.prefixCls;
    /** @type {?} */
    DecadePanelComponent.prototype.panelDecades;
}
/**
 * @record
 */
export function PanelDecadeData() { }
function PanelDecadeData_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelDecadeData.prototype.content;
    /** @type {?} */
    PanelDecadeData.prototype.title;
    /** @type {?} */
    PanelDecadeData.prototype.isCurrent;
    /** @type {?} */
    PanelDecadeData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelDecadeData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelDecadeData.prototype.classMap;
    /** @type {?} */
    PanelDecadeData.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvZGVjYWRlL2RlY2FkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQzs7QUFDbEIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztJQXVCaEI7MkJBWndCLElBQUksWUFBWSxFQUFhO3lCQVNqQywyQkFBMkI7S0FHL0I7SUFWaEIsc0JBQUksMkNBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sUUFBUSxDQUFDLEtBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzVEOzs7T0FBQTtJQUNELHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQzVCOzs7T0FBQTs7Ozs7SUFPRCwwQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLFdBQVE7WUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7S0FDRjs7OztJQUVELDhDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQjs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7Ozs7OztJQUVELCtDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsS0FBYSxFQUFFLFVBQTJCO1FBQ3pE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QUFLLEVBQUcsQ0FBQzs7O1lBOUJYLEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxPQUFPLEVBQUUsUUFBUSxFQUFHO3dCQUE3QyxRQUFRO2FBK0JoQjtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7OztnQkF0R2xCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIseW5DQUEwQztpQkFDM0M7Ozs7O3lCQUdFLEtBQUs7d0JBRUwsS0FBSzs4QkFDTCxNQUFNOzsrQkFqQlQ7O1NBYWEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XG5cbmNvbnN0IE1BWF9ST1cgPSA0O1xuY29uc3QgTUFYX0NPTCA9IDM7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlY2FkZS1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERlY2FkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcblxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMudmFsdWUuZ2V0WWVhcigpIC8gMTAwfWAsIDEwKSAqIDEwMDtcbiAgfVxuICBnZXQgZW5kWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0WWVhciArIDk5O1xuICB9XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyLWRlY2FkZS1wYW5lbCc7XG4gIHBhbmVsRGVjYWRlczogUGFuZWxEZWNhZGVEYXRhW11bXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzQ2VudHVyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKC0xMDApO1xuICB9XG5cbiAgbmV4dENlbnR1cnkoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigxMDApO1xuICB9XG5cbiAgdHJhY2tQYW5lbERlY2FkZShpbmRleDogbnVtYmVyLCBkZWNhZGVEYXRhOiBQYW5lbERlY2FkZURhdGEpOiBzdHJpbmcge1xuICAgIHJldHVybiBkZWNhZGVEYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5wYW5lbERlY2FkZXMgPSB0aGlzLm1ha2VQYW5lbERlY2FkZXMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZS1yZW5kZXIgcGFuZWwgY29udGVudCBieSB0aGUgaGVhZGVyJ3MgYnV0dG9ucyAoTk9URTogRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZSlcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCk7XG4gICAgLy8gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpOyAvLyBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hvb3NlRGVjYWRlKHN0YXJ0WWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0WWVhcihzdGFydFllYXIpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhbmVsRGVjYWRlcygpOiBQYW5lbERlY2FkZURhdGFbXVtdIHtcbiAgICBjb25zdCBkZWNhZGVzOiBQYW5lbERlY2FkZURhdGFbXVtdID0gW107XG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLnZhbHVlLmdldFllYXIoKTtcbiAgICBjb25zdCBzdGFydFllYXIgPSB0aGlzLnN0YXJ0WWVhcjtcbiAgICBjb25zdCBlbmRZZWFyID0gdGhpcy5lbmRZZWFyO1xuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IHN0YXJ0WWVhciAtIDEwO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXggKyspIHtcbiAgICAgIGRlY2FkZXNbcm93SW5kZXhdID0gW107XG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXggKyspIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwO1xuICAgICAgICBjb25zdCBlbmQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwICsgOTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGAke3N0YXJ0fS0ke2VuZH1gO1xuXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkZWNhZGVzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcbiAgICAgICAgICBpc0N1cnJlbnQ6IGN1cnJlbnRZZWFyID49IHN0YXJ0ICYmIGN1cnJlbnRZZWFyIDw9IGVuZCxcbiAgICAgICAgICBpc0xvd2VyVGhhblN0YXJ0OiBlbmQgPCBzdGFydFllYXIsXG4gICAgICAgICAgaXNCaWdnZXJUaGFuRW5kOiBzdGFydCA+IGVuZFllYXIsXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXG4gICAgICAgICAgb25DbGljazogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1jZWxsYF06IGNlbGwuaXNDdXJyZW50LFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1jZW50dXJ5LWNlbGxgXTogY2VsbC5pc0xvd2VyVGhhblN0YXJ0LFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbmV4dC1jZW50dXJ5LWNlbGxgXTogY2VsbC5pc0JpZ2dlclRoYW5FbmRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2VsbC5pc0xvd2VyVGhhblN0YXJ0KSB7XG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5wcmV2aW91c0NlbnR1cnkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmlzQmlnZ2VyVGhhbkVuZCkge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMubmV4dENlbnR1cnkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLmNob29zZURlY2FkZShzdGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCArKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY2FkZXM7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5lbERlY2FkZURhdGEge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGlzQ3VycmVudDogYm9vbGVhbjtcbiAgaXNMb3dlclRoYW5TdGFydDogYm9vbGVhbjtcbiAgaXNCaWdnZXJUaGFuRW5kOiBib29sZWFuO1xuICBjbGFzc01hcDogb2JqZWN0O1xuICBvbkNsaWNrKCk6IHZvaWQ7XG59XG4iXX0=