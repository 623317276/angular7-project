/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
/** @type {?} */
const MAX_ROW = 4;
/** @type {?} */
const MAX_COL = 3;
export class DecadePanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    /**
     * @return {?}
     */
    get startYear() {
        return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
    }
    /**
     * @return {?}
     */
    get endYear() {
        return this.startYear + 99;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["value"]) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    previousCentury() {
        this.gotoYear(-100);
    }
    /**
     * @return {?}
     */
    nextCentury() {
        this.gotoYear(100);
    }
    /**
     * @param {?} index
     * @param {?} decadeData
     * @return {?}
     */
    trackPanelDecade(index, decadeData) {
        return decadeData.content;
    }
    /**
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
        }
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    }
    /**
     * @param {?} startYear
     * @return {?}
     */
    chooseDecade(startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    }
    /**
     * @return {?}
     */
    makePanelDecades() {
        /** @type {?} */
        const decades = [];
        /** @type {?} */
        const currentYear = this.value.getYear();
        /** @type {?} */
        const startYear = this.startYear;
        /** @type {?} */
        const endYear = this.endYear;
        /** @type {?} */
        const previousYear = startYear - 10;
        /** @type {?} */
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const start = previousYear + index * 10;
                /** @type {?} */
                const end = previousYear + index * 10 + 9;
                /** @type {?} */
                const content = `${start}-${end}`;
                /** @type {?} */
                const cell = decades[rowIndex][colIndex] = {
                    content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                };
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-last-century-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-century-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = () => this.previousCentury();
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = () => this.nextCentury();
                }
                else {
                    cell.onClick = () => this.chooseDecade(start);
                }
                index++;
            }
        }
        return decades;
    }
}
DecadePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'decade-panel',
                template: "<div class=\"{{ prefixCls }}\">\n  <div class=\"{{ prefixCls }}-header\">\n    <a\n      class=\"{{ prefixCls }}-prev-century-btn\"\n      role=\"button\"\n      (click)=\"previousCentury()\"\n      title=\"{{ locale.previousCentury }}\"\n    ></a>\n\n    <div class=\"{{ prefixCls }}-century\">\n      {{ startYear }}-{{ endYear }}\n    </div>\n    <a\n      class=\"{{ prefixCls }}-next-century-btn\"\n      role=\"button\"\n      (click)=\"nextCentury()\"\n      title=\"{{ locale.nextCentury }}\"\n    ></a>\n  </div>\n  <div class=\"{{ prefixCls }}-body\">\n    <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n      <tbody class=\"{{ prefixCls }}-tbody\">\n        <tr *ngFor=\"let row of panelDecades\" role=\"row\">\n          <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\"\n            role=\"gridcell\"\n            title=\"{{ cell.title }}\"\n            (click)=\"cell.onClick()\"\n            [ngClass]=\"cell.classMap\"\n          >\n            <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
DecadePanelComponent.ctorParameters = () => [];
DecadePanelComponent.propDecorators = {
    locale: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvZGVjYWRlL2RlY2FkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQzs7QUFDbEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBT2xCLE1BQU07SUFnQko7MkJBWndCLElBQUksWUFBWSxFQUFhO3lCQVNqQywyQkFBMkI7S0FHL0I7Ozs7SUFWaEIsSUFBSSxTQUFTO1FBQ1gsT0FBTyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUM1RDs7OztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDNUI7Ozs7O0lBT0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxXQUFRO1lBQ2pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0tBQ0Y7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDcEI7Ozs7OztJQUVELGdCQUFnQixDQUFDLEtBQWEsRUFBRSxVQUEyQjtRQUN6RCxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUM7S0FDM0I7Ozs7SUFFTyxNQUFNO1FBQ1os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QUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDL0M7Z0JBRUQsS0FBSyxFQUFHLENBQUM7YUFDVjtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUM7Ozs7WUF0R2xCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIseW5DQUEwQzthQUMzQzs7Ozs7cUJBR0UsS0FBSztvQkFFTCxLQUFLOzBCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlJztcblxuY29uc3QgTUFYX1JPVyA9IDQ7XG5jb25zdCBNQVhfQ09MID0gMztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVjYWRlLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICdkZWNhZGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRGVjYWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIGdldCBzdGFydFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy52YWx1ZS5nZXRZZWFyKCkgLyAxMDB9YCwgMTApICogMTAwO1xuICB9XG4gIGdldCBlbmRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRZZWFyICsgOTk7XG4gIH1cblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXItZGVjYWRlLXBhbmVsJztcbiAgcGFuZWxEZWNhZGVzOiBQYW5lbERlY2FkZURhdGFbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldmlvdXNDZW50dXJ5KCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoLTEwMCk7XG4gIH1cblxuICBuZXh0Q2VudHVyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKDEwMCk7XG4gIH1cblxuICB0cmFja1BhbmVsRGVjYWRlKGluZGV4OiBudW1iZXIsIGRlY2FkZURhdGE6IFBhbmVsRGVjYWRlRGF0YSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRlY2FkZURhdGEuY29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnBhbmVsRGVjYWRlcyA9IHRoaXMubWFrZVBhbmVsRGVjYWRlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlLXJlbmRlciBwYW5lbCBjb250ZW50IGJ5IHRoZSBoZWFkZXIncyBidXR0b25zIChOT1RFOiBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlKVxuICBwcml2YXRlIGdvdG9ZZWFyKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuYWRkWWVhcnMoYW1vdW50KTtcbiAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7IC8vIERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2VcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VEZWNhZGUoc3RhcnRZZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zZXRZZWFyKHN0YXJ0WWVhcik7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlUGFuZWxEZWNhZGVzKCk6IFBhbmVsRGVjYWRlRGF0YVtdW10ge1xuICAgIGNvbnN0IGRlY2FkZXM6IFBhbmVsRGVjYWRlRGF0YVtdW10gPSBbXTtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXMudmFsdWUuZ2V0WWVhcigpO1xuICAgIGNvbnN0IHN0YXJ0WWVhciA9IHRoaXMuc3RhcnRZZWFyO1xuICAgIGNvbnN0IGVuZFllYXIgPSB0aGlzLmVuZFllYXI7XG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gc3RhcnRZZWFyIC0gMTA7XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCArKykge1xuICAgICAgZGVjYWRlc1tyb3dJbmRleF0gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBNQVhfQ09MOyBjb2xJbmRleCArKykge1xuICAgICAgICBjb25zdCBzdGFydCA9IHByZXZpb3VzWWVhciArIGluZGV4ICogMTA7XG4gICAgICAgIGNvbnN0IGVuZCA9IHByZXZpb3VzWWVhciArIGluZGV4ICogMTAgKyA5O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYCR7c3RhcnR9LSR7ZW5kfWA7XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IGRlY2FkZXNbcm93SW5kZXhdW2NvbEluZGV4XSA9IHtcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxuICAgICAgICAgIGlzQ3VycmVudDogY3VycmVudFllYXIgPj0gc3RhcnQgJiYgY3VycmVudFllYXIgPD0gZW5kLFxuICAgICAgICAgIGlzTG93ZXJUaGFuU3RhcnQ6IGVuZCA8IHN0YXJ0WWVhcixcbiAgICAgICAgICBpc0JpZ2dlclRoYW5FbmQ6IHN0YXJ0ID4gZW5kWWVhcixcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcbiAgICAgICAgICBvbkNsaWNrOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWNlbGxgXTogY2VsbC5pc0N1cnJlbnQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LWNlbnR1cnktY2VsbGBdOiBjZWxsLmlzTG93ZXJUaGFuU3RhcnQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LWNlbnR1cnktY2VsbGBdOiBjZWxsLmlzQmlnZ2VyVGhhbkVuZFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjZWxsLmlzTG93ZXJUaGFuU3RhcnQpIHtcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLnByZXZpb3VzQ2VudHVyeSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuaXNCaWdnZXJUaGFuRW5kKSB7XG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5uZXh0Q2VudHVyeSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMuY2hvb3NlRGVjYWRlKHN0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4ICsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjYWRlcztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsRGVjYWRlRGF0YSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaXNDdXJyZW50OiBib29sZWFuO1xuICBpc0xvd2VyVGhhblN0YXJ0OiBib29sZWFuO1xuICBpc0JpZ2dlclRoYW5FbmQ6IGJvb2xlYW47XG4gIGNsYXNzTWFwOiBvYmplY3Q7XG4gIG9uQ2xpY2soKTogdm9pZDtcbn1cbiJdfQ==