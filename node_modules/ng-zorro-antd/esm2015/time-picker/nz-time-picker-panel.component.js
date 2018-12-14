/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { reqAnimFrame } from '../core/polyfill/request-animation';
import { NzUpdateHostClassService as UpdateCls } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { NzTimeValueAccessorDirective } from './nz-time-value-accessor.directive';
import { TimeHolder } from './time-holder';
/**
 * @param {?} length
 * @param {?=} step
 * @return {?}
 */
function makeRange(length, step = 1) {
    return new Array(Math.ceil(length / step)).fill(0).map((_, i) => i * step);
}
export class NzTimePickerPanelComponent {
    /**
     * @param {?} element
     * @param {?} updateCls
     */
    constructor(element, updateCls) {
        this.element = element;
        this.updateCls = updateCls;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._defaultOpenValue = new Date();
        this._opened = false;
        this._allowEmpty = true;
        this.prefixCls = 'ant-time-picker-panel';
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.enabledColumns = 3;
        this.nzInDatePicker = false;
        this.nzHideDisabledOptions = false;
        this.timeClear = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowEmpty(value) {
        if (isNotNil(value)) {
            this._allowEmpty = value;
        }
    }
    /**
     * @return {?}
     */
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) {
        this._opened = value;
        if (this.opened) {
            this.initPosition();
            this.selectInputRange();
        }
    }
    /**
     * @return {?}
     */
    get opened() {
        return this._opened;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDefaultOpenValue(value) {
        if (isNotNil(value)) {
            this._defaultOpenValue = value;
            this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
        }
    }
    /**
     * @return {?}
     */
    get nzDefaultOpenValue() {
        return this._defaultOpenValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledHours(value) {
        this._disabledHours = value;
        if (this._disabledHours) {
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledHours() {
        return this._disabledHours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledMinutes(value) {
        if (isNotNil(value)) {
            this._disabledMinutes = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledMinutes() {
        return this._disabledMinutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledSeconds(value) {
        if (isNotNil(value)) {
            this._disabledSeconds = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledSeconds() {
        return this._disabledSeconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set format(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.enabledColumns = 0;
            /** @type {?} */
            const charSet = new Set(value);
            this.hourEnabled = charSet.has('H') || charSet.has('h');
            this.minuteEnabled = charSet.has('m');
            this.secondEnabled = charSet.has('s');
            if (this.hourEnabled) {
                this.enabledColumns++;
            }
            if (this.minuteEnabled) {
                this.enabledColumns++;
            }
            if (this.secondEnabled) {
                this.enabledColumns++;
            }
        }
    }
    /**
     * @return {?}
     */
    get format() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHourStep(value) {
        if (isNotNil(value)) {
            this._nzHourStep = value;
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzHourStep() {
        return this._nzHourStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMinuteStep(value) {
        if (isNotNil(value)) {
            this._nzMinuteStep = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzMinuteStep() {
        return this._nzMinuteStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSecondStep(value) {
        if (isNotNil(value)) {
            this._nzSecondStep = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzSecondStep() {
        return this._nzSecondStep;
    }
    /**
     * @return {?}
     */
    selectInputRange() {
        setTimeout(() => {
            if (this.nzTimeValueAccessorDirective) {
                this.nzTimeValueAccessorDirective.setRange();
            }
        });
    }
    /**
     * @return {?}
     */
    buildHours() {
        this.hourRange = makeRange(24, this.nzHourStep).map(r => {
            return {
                index: r,
                disabled: this.nzDisabledHours && (this.nzDisabledHours().indexOf(r) !== -1)
            };
        });
    }
    /**
     * @return {?}
     */
    buildMinutes() {
        this.minuteRange = makeRange(60, this.nzMinuteStep).map(r => {
            return {
                index: r,
                disabled: this.nzDisabledMinutes && (this.nzDisabledMinutes(this.time.hours).indexOf(r) !== -1)
            };
        });
    }
    /**
     * @return {?}
     */
    buildSeconds() {
        this.secondRange = makeRange(60, this.nzSecondStep).map(r => {
            return {
                index: r,
                disabled: this.nzDisabledSeconds && (this.nzDisabledSeconds(this.time.hours, this.time.minutes).indexOf(r) !== -1)
            };
        });
    }
    /**
     * @return {?}
     */
    buildTimes() {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    selectHour(hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    selectMinute(minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} second
     * @return {?}
     */
    selectSecond(second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    }
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    scrollToSelected(instance, index, duration = 0, unit) {
        /** @type {?} */
        const transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        const currentOption = /** @type {?} */ ((instance.children[0].children[transIndex] || instance.children[0].children[0]));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    }
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    translateIndex(index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            const disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map(item => item.index).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            const disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours);
            return this.calcIndex(disabledMinutes, this.minuteRange.map(item => item.index).indexOf(index));
        }
        else if (unit === 'second') {
            /** @type {?} */
            const disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes);
            return this.calcIndex(disabledSeconds, this.secondRange.map(item => item.index).indexOf(index));
        }
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    scrollTo(element, to, duration) {
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        const difference = to - element.scrollTop;
        /** @type {?} */
        const perTick = difference / duration * 10;
        reqAnimFrame(() => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        });
    }
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    calcIndex(array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return index - array.reduce((pre, value) => {
                return pre + (value < index ? 1 : 0);
            }, 0);
        }
        else {
            return index;
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.time.clear();
        this.timeClear.emit();
    }
    /**
     * @return {?}
     */
    changed() {
        if (this.onChange) {
            this.onChange(this.time.value);
        }
    }
    /**
     * @return {?}
     */
    touched() {
        if (this.onTouch) {
            this.onTouch();
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-column-${this.enabledColumns}`]: this.nzInDatePicker ? false : true,
            [`${this.prefixCls}-narrow`]: this.enabledColumns < 3,
            [`${this.prefixCls}-placement-bottomLeft`]: this.nzInDatePicker ? false : true
        });
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    isSelectedHour(hour) {
        return (hour.index === this.time.hours) || (!isNotNil(this.time.hours) && (hour.index === this.time.defaultHours));
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    isSelectedMinute(minute) {
        return (minute.index === this.time.minutes) || (!isNotNil(this.time.minutes) && (minute.index === this.time.defaultMinutes));
    }
    /**
     * @param {?} second
     * @return {?}
     */
    isSelectedSecond(second) {
        return (second.index === this.time.seconds) || (!isNotNil(this.time.seconds) && (second.index === this.time.defaultSeconds));
    }
    /**
     * @return {?}
     */
    initPosition() {
        setTimeout(() => {
            if (this.hourEnabled && this.hourListElement) {
                if (isNotNil(this.time.hours)) {
                    this.scrollToSelected(this.hourListElement.nativeElement, this.time.hours, 0, 'hour');
                }
                else {
                    this.scrollToSelected(this.hourListElement.nativeElement, this.time.defaultHours, 0, 'hour');
                }
            }
            if (this.minuteEnabled && this.minuteListElement) {
                if (isNotNil(this.time.minutes)) {
                    this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, 0, 'minute');
                }
                else {
                    this.scrollToSelected(this.minuteListElement.nativeElement, this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (this.secondEnabled && this.secondListElement) {
                if (isNotNil(this.time.seconds)) {
                    this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, 0, 'second');
                }
                else {
                    this.scrollToSelected(this.secondListElement.nativeElement, this.time.defaultSeconds, 0, 'second');
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.changed();
            this.touched();
        });
        this.buildTimes();
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.time.value = value;
        this.buildTimes();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
}
NzTimePickerPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-time-picker-panel',
                template: "<div class=\"{{ nzInDatePicker ? prefixCls + '-panel' : '' }}\">\n  <div\n    class=\"{{ prefixCls }}-inner {{ nzInDatePicker ? prefixCls + '-column-' + enabledColumns : '' }}\"\n    [style.width.px]=\"nzInDatePicker ? null : enabledColumns * 56\">\n    <div class=\"{{ prefixCls }}-input-wrap\">\n      <input\n        type=\"text\"\n        class=\"{{ prefixCls }}-input\"\n        [placeholder]=\"nzPlaceHolder\"\n        [nzTime]=\"format\"\n        [(ngModel)]=\"time.value\"\n        (blur)=\"time.changed()\">\n      <a\n        *ngIf=\"nzAllowEmpty\"\n        class=\"{{ prefixCls }}-clear-btn\"\n        [attr.title]=\"nzClearText\"\n        (click)=\"clear()\">\n        <i nz-icon type=\"close-circle\" theme=\"fill\" class=\"ant-time-picker-panel-clear-btn-icon\"></i>\n      </a>\n    </div>\n    <div class=\"{{ prefixCls }}-combobox\">\n      <div\n        *ngIf=\"hourEnabled\"\n        #hourListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let hour of hourRange\">\n            <li\n              *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\n              (click)=\"selectHour(hour)\"\n              class=\"\n                {{ isSelectedHour(hour) ? prefixCls + '-select-option-selected' : '' }}\n                {{ hour.disabled ? prefixCls + '-select-option-disabled' : '' }}\n              \"\n            >\n              {{ hour.index | number:'2.0-0' }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n      <div\n        *ngIf=\"minuteEnabled\"\n        #minuteListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let minute of minuteRange\">\n            <li\n              *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\n              (click)=\"selectMinute(minute)\"\n              class=\"\n                {{ isSelectedMinute(minute) ? prefixCls + '-select-option-selected' : '' }}\n                {{ minute.disabled ? prefixCls + '-select-option-disabled' : '' }}\n              \"\n            >\n              {{ minute.index | number:'2.0-0' }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n      <div\n        *ngIf=\"secondEnabled\"\n        #secondListElement\n        class=\"{{ prefixCls }}-select\">\n        <ul>\n          <ng-container *ngFor=\"let second of secondRange\">\n            <li\n              *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\n              (click)=\"selectSecond(second)\"\n              class=\"\n                {{ isSelectedSecond(second) ? prefixCls + '-select-option-selected' : '' }}\n                {{ second.disabled ? prefixCls + '-select-option-disabled' : '' }}\n              \"\n            >\n              {{ second.index | number:'2.0-0' }}\n            </li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n    <div class=\"{{ prefixCls }}-addon\" *ngIf=\"nzAddOn\">\n      <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\n    </div>\n  </div>\n</div>",
                providers: [
                    UpdateCls,
                    { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerPanelComponent, multi: true }
                ]
            }] }
];
/** @nocollapse */
NzTimePickerPanelComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: UpdateCls }
];
NzTimePickerPanelComponent.propDecorators = {
    nzTimeValueAccessorDirective: [{ type: ViewChild, args: [NzTimeValueAccessorDirective,] }],
    hourListElement: [{ type: ViewChild, args: ['hourListElement',] }],
    minuteListElement: [{ type: ViewChild, args: ['minuteListElement',] }],
    secondListElement: [{ type: ViewChild, args: ['secondListElement',] }],
    nzInDatePicker: [{ type: Input }],
    nzAddOn: [{ type: Input }],
    nzHideDisabledOptions: [{ type: Input }],
    nzClearText: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    timeClear: [{ type: Output }],
    nzAllowEmpty: [{ type: Input }],
    opened: [{ type: Input }],
    nzDefaultOpenValue: [{ type: Input }],
    nzDisabledHours: [{ type: Input }],
    nzDisabledMinutes: [{ type: Input }],
    nzDisabledSeconds: [{ type: Input }],
    format: [{ type: Input }],
    nzHourStep: [{ type: Input }],
    nzMinuteStep: [{ type: Input }],
    nzSecondStep: [{ type: Input }]
};
function NzTimePickerPanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._nzHourStep;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._nzMinuteStep;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._nzSecondStep;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.onChange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.onTouch;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._format;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._disabledHours;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._disabledMinutes;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._disabledSeconds;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._defaultOpenValue;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._opened;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.prefixCls;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.time;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondEnabled;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.enabledColumns;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondRange;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzTimeValueAccessorDirective;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.hourListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.minuteListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.secondListElement;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzInDatePicker;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.timeClear;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.element;
    /** @type {?} */
    NzTimePickerPanelComponent.prototype.updateCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL256LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxTQUFTLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRTNDLG1CQUFtQixNQUFjLEVBQUUsT0FBZSxDQUFDO0lBQ2pELE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0NBQzVFO0FBVUQsTUFBTTs7Ozs7SUEwVkosWUFBb0IsT0FBbUIsRUFBVSxTQUFvQjtRQUFqRCxZ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RCxVQUFVLENBQUMsS0FBVztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXlCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDbkI7OztZQWxZRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFLLHNCQUFzQjtnQkFDbkMsOC9GQUFvRDtnQkFDcEQsU0FBUyxFQUFJO29CQUNYLFNBQVM7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLDBCQUEwQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ3JGO2FBQ0Y7Ozs7WUEvQkMsVUFBVTtZQWV5QixTQUFTOzs7MkNBd0MzQyxTQUFTLFNBQUMsNEJBQTRCOzhCQUN0QyxTQUFTLFNBQUMsaUJBQWlCO2dDQUMzQixTQUFTLFNBQUMsbUJBQW1CO2dDQUM3QixTQUFTLFNBQUMsbUJBQW1COzZCQUM3QixLQUFLO3NCQUNMLEtBQUs7b0NBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsTUFBTTsyQkFFTixLQUFLO3FCQVdMLEtBQUs7aUNBYUwsS0FBSzs4QkFZTCxLQUFLO2dDQVlMLEtBQUs7Z0NBWUwsS0FBSztxQkFZTCxLQUFLO3lCQXlCTCxLQUFLOzJCQVlMLEtBQUs7MkJBWUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICcuLi9jb3JlL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBhcyBVcGRhdGVDbHMgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGltZUhvbGRlciB9IGZyb20gJy4vdGltZS1ob2xkZXInO1xuXG5mdW5jdGlvbiBtYWtlUmFuZ2UobGVuZ3RoOiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDEpOiBudW1iZXJbXSB7XG4gIHJldHVybiBuZXcgQXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIHN0ZXApKS5maWxsKDApLm1hcCgoXywgaSkgPT4gaSAqIHN0ZXApO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICduei10aW1lLXBpY2tlci1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgOiBbXG4gICAgVXBkYXRlQ2xzLFxuICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVQaWNrZXJQYW5lbENvbXBvbmVudCwgbXVsdGk6IHRydWUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbnpIb3VyU3RlcCA9IDE7XG4gIHByaXZhdGUgX256TWludXRlU3RlcCA9IDE7XG4gIHByaXZhdGUgX256U2Vjb25kU3RlcCA9IDE7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIG9uVG91Y2g6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2Zvcm1hdCA9ICdISDptbTpzcyc7XG4gIHByaXZhdGUgX2Rpc2FibGVkSG91cnM6ICgpID0+IG51bWJlcltdO1xuICBwcml2YXRlIF9kaXNhYmxlZE1pbnV0ZXM6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdO1xuICBwcml2YXRlIF9kaXNhYmxlZFNlY29uZHM6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wZW5WYWx1ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgX29wZW5lZCA9IGZhbHNlO1xuICBwcml2YXRlIF9hbGxvd0VtcHR5ID0gdHJ1ZTtcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LXRpbWUtcGlja2VyLXBhbmVsJztcbiAgdGltZSA9IG5ldyBUaW1lSG9sZGVyKCk7XG4gIGhvdXJFbmFibGVkID0gdHJ1ZTtcbiAgbWludXRlRW5hYmxlZCA9IHRydWU7XG4gIHNlY29uZEVuYWJsZWQgPSB0cnVlO1xuICBlbmFibGVkQ29sdW1ucyA9IDM7XG4gIGhvdXJSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuIH0+O1xuICBtaW51dGVSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuIH0+O1xuICBzZWNvbmRSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuIH0+O1xuICBAVmlld0NoaWxkKE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpIG56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU6IE56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoJ2hvdXJMaXN0RWxlbWVudCcpIGhvdXJMaXN0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnbWludXRlTGlzdEVsZW1lbnQnKSBtaW51dGVMaXN0RWxlbWVudDtcbiAgQFZpZXdDaGlsZCgnc2Vjb25kTGlzdEVsZW1lbnQnKSBzZWNvbmRMaXN0RWxlbWVudDtcbiAgQElucHV0KCkgbnpJbkRhdGVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSWYgaW5zaWRlIGEgZGF0ZS1waWNrZXIsIG1vcmUgZGlmZiB3b3JrcyBuZWVkIHRvIGJlIGRvbmVcbiAgQElucHV0KCkgbnpBZGRPbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56SGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNsZWFyVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSB0aW1lQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56QWxsb3dFbXB0eSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2FsbG93RW1wdHkgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpBbGxvd0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0VtcHR5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG9wZW5lZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX29wZW5lZCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5pbml0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuc2VsZWN0SW5wdXRSYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW5lZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRPcGVuVmFsdWUodmFsdWU6IERhdGUpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0T3BlblZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnRpbWUuc2V0RGVmYXVsdE9wZW5WYWx1ZSh0aGlzLm56RGVmYXVsdE9wZW5WYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGVmYXVsdE9wZW5WYWx1ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkSG91cnModmFsdWU6ICgpID0+IG51bWJlcltdKSB7XG4gICAgdGhpcy5fZGlzYWJsZWRIb3VycyA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZEhvdXJzKCk6ICgpID0+IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRIb3VycztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkTWludXRlcyh2YWx1ZTogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWRNaW51dGVzKCk6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRNaW51dGVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRTZWNvbmRzKHZhbHVlOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZFNlY29uZHMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWRTZWNvbmRzKCk6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkU2Vjb25kcztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtYXQodmFsdWU6IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlO1xuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucyA9IDA7XG4gICAgICBjb25zdCBjaGFyU2V0ID0gbmV3IFNldCh2YWx1ZSk7XG4gICAgICB0aGlzLmhvdXJFbmFibGVkID0gY2hhclNldC5oYXMoJ0gnKSB8fCBjaGFyU2V0LmhhcygnaCcpO1xuICAgICAgdGhpcy5taW51dGVFbmFibGVkID0gY2hhclNldC5oYXMoJ20nKTtcbiAgICAgIHRoaXMuc2Vjb25kRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdzJyk7XG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5taW51dGVFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlY29uZEVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SG91clN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256SG91clN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekhvdXJTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256SG91clN0ZXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpNaW51dGVTdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9uek1pbnV0ZVN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56TWludXRlU3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uek1pbnV0ZVN0ZXA7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWNvbmRTdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9uelNlY29uZFN0ZXAgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2Vjb25kU3RlcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uelNlY29uZFN0ZXA7XG4gIH1cblxuICBzZWxlY3RJbnB1dFJhbmdlKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUuc2V0UmFuZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGJ1aWxkSG91cnMoKTogdm9pZCB7XG4gICAgdGhpcy5ob3VyUmFuZ2UgPSBtYWtlUmFuZ2UoMjQsIHRoaXMubnpIb3VyU3RlcCkubWFwKHIgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGluZGV4ICAgOiByLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLm56RGlzYWJsZWRIb3VycyAmJiAodGhpcy5uekRpc2FibGVkSG91cnMoKS5pbmRleE9mKHIpICE9PSAtMSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgYnVpbGRNaW51dGVzKCk6IHZvaWQge1xuICAgIHRoaXMubWludXRlUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpNaW51dGVTdGVwKS5tYXAociA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5kZXggICA6IHIsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgKHRoaXMubnpEaXNhYmxlZE1pbnV0ZXModGhpcy50aW1lLmhvdXJzKS5pbmRleE9mKHIpICE9PSAtMSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgYnVpbGRTZWNvbmRzKCk6IHZvaWQge1xuICAgIHRoaXMuc2Vjb25kUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpTZWNvbmRTdGVwKS5tYXAociA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5kZXggICA6IHIsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZFNlY29uZHMgJiYgKHRoaXMubnpEaXNhYmxlZFNlY29uZHModGhpcy50aW1lLmhvdXJzLCB0aGlzLnRpbWUubWludXRlcykuaW5kZXhPZihyKSAhPT0gLTEpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGJ1aWxkVGltZXMoKTogdm9pZCB7XG4gICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICB9XG5cbiAgc2VsZWN0SG91cihob3VyOiB7IGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0SG91cnMoaG91ci5pbmRleCwgaG91ci5kaXNhYmxlZCk7XG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGhvdXIuaW5kZXgsIDEyMCwgJ2hvdXInKTtcblxuICAgIGlmICh0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMgfHwgdGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdE1pbnV0ZShtaW51dGU6IHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRNaW51dGVzKG1pbnV0ZS5pbmRleCwgbWludXRlLmRpc2FibGVkKTtcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBtaW51dGUuaW5kZXgsIDEyMCwgJ21pbnV0ZScpO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMpIHtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0U2Vjb25kKHNlY29uZDogeyBpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldFNlY29uZHMoc2Vjb25kLmluZGV4LCBzZWNvbmQuZGlzYWJsZWQpO1xuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHNlY29uZC5pbmRleCwgMTIwLCAnc2Vjb25kJyk7XG4gIH1cblxuICBzY3JvbGxUb1NlbGVjdGVkKGluc3RhbmNlOiBIVE1MRWxlbWVudCwgaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDAsIHVuaXQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHRyYW5zSW5kZXggPSB0aGlzLnRyYW5zbGF0ZUluZGV4KGluZGV4LCB1bml0KTtcbiAgICBjb25zdCBjdXJyZW50T3B0aW9uID0gKGluc3RhbmNlLmNoaWxkcmVuWyAwIF0uY2hpbGRyZW5bIHRyYW5zSW5kZXggXSB8fCBpbnN0YW5jZS5jaGlsZHJlblsgMCBdLmNoaWxkcmVuWyAwIF0pIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuc2Nyb2xsVG8oaW5zdGFuY2UsIGN1cnJlbnRPcHRpb24ub2Zmc2V0VG9wLCBkdXJhdGlvbik7XG4gIH1cblxuICB0cmFuc2xhdGVJbmRleChpbmRleDogbnVtYmVyLCB1bml0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGlmICh1bml0ID09PSAnaG91cicpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkSG91cnMgPSB0aGlzLm56RGlzYWJsZWRIb3VycyAmJiB0aGlzLm56RGlzYWJsZWRIb3VycygpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkSG91cnMsIHRoaXMuaG91clJhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XG4gICAgICBjb25zdCBkaXNhYmxlZE1pbnV0ZXMgPSB0aGlzLm56RGlzYWJsZWRNaW51dGVzICYmIHRoaXMubnpEaXNhYmxlZE1pbnV0ZXModGhpcy50aW1lLmhvdXJzKTtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZE1pbnV0ZXMsIHRoaXMubWludXRlUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3NlY29uZCcpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkU2Vjb25kcyA9IHRoaXMubnpEaXNhYmxlZFNlY29uZHMgJiYgdGhpcy5uekRpc2FibGVkU2Vjb25kcyh0aGlzLnRpbWUuaG91cnMsIHRoaXMudGltZS5taW51dGVzKTtcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZFNlY29uZHMsIHRoaXMuc2Vjb25kUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHBlclRpY2sgPSBkaWZmZXJlbmNlIC8gZHVyYXRpb24gKiAxMDtcblxuICAgIHJlcUFuaW1GcmFtZSgoKSA9PiB7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wICsgcGVyVGljaztcbiAgICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XG4gICAgfSk7XG4gIH1cblxuICBjYWxjSW5kZXgoYXJyYXk6IG51bWJlcltdLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoICYmIHRoaXMubnpIaWRlRGlzYWJsZWRPcHRpb25zKSB7XG4gICAgICByZXR1cm4gaW5kZXggLSBhcnJheS5yZWR1Y2UoKHByZSwgdmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZSArICh2YWx1ZSA8IGluZGV4ID8gMSA6IDApO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuY2xlYXIoKTtcbiAgICB0aGlzLnRpbWVDbGVhci5lbWl0KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hhbmdlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnRpbWUudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB0b3VjaGVkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uVG91Y2gpIHtcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDbHMudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY29sdW1uLSR7dGhpcy5lbmFibGVkQ29sdW1uc31gXSAgICAgOiB0aGlzLm56SW5EYXRlUGlja2VyID8gZmFsc2UgOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uYXJyb3dgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZW5hYmxlZENvbHVtbnMgPCAzLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1wbGFjZW1lbnQtYm90dG9tTGVmdGBdICAgICAgICAgICAgICA6IHRoaXMubnpJbkRhdGVQaWNrZXIgPyBmYWxzZSA6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoaG91ci5pbmRleCA9PT0gdGhpcy50aW1lLmhvdXJzKSB8fCAoIWlzTm90TmlsKHRoaXMudGltZS5ob3VycykgJiYgKGhvdXIuaW5kZXggPT09IHRoaXMudGltZS5kZWZhdWx0SG91cnMpKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWRNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gKG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLm1pbnV0ZXMpIHx8ICghaXNOb3ROaWwodGhpcy50aW1lLm1pbnV0ZXMpICYmIChtaW51dGUuaW5kZXggPT09IHRoaXMudGltZS5kZWZhdWx0TWludXRlcykpO1xuICB9XG5cbiAgaXNTZWxlY3RlZFNlY29uZChzZWNvbmQ6IHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuc2Vjb25kcykgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUuc2Vjb25kcykgJiYgKHNlY29uZC5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRTZWNvbmRzKSk7XG4gIH1cblxuICBpbml0UG9zaXRpb24oKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCAmJiB0aGlzLmhvdXJMaXN0RWxlbWVudCkge1xuICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy50aW1lLmhvdXJzKSkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLmhvdXJMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuaG91cnMsIDAsICdob3VyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0SG91cnMsIDAsICdob3VyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQgJiYgdGhpcy5taW51dGVMaXN0RWxlbWVudCkge1xuICAgICAgICBpZiAoaXNOb3ROaWwodGhpcy50aW1lLm1pbnV0ZXMpKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMubWludXRlTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLm1pbnV0ZXMsIDAsICdtaW51dGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMsIDAsICdtaW51dGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCAmJiB0aGlzLnNlY29uZExpc3RFbGVtZW50KSB7XG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUuc2Vjb25kcykpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5zZWNvbmRMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuc2Vjb25kcywgMCwgJ3NlY29uZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcywgMCwgJ3NlY29uZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlQ2xzOiBVcGRhdGVDbHMpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56SW5EYXRlUGlja2VyKSB7XG4gICAgICB0aGlzLnByZWZpeENscyA9ICdhbnQtY2FsZW5kYXItdGltZS1waWNrZXInO1xuICAgIH1cblxuICAgIHRoaXMudGltZS5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2hhbmdlZCgpO1xuICAgICAgdGhpcy50b3VjaGVkKCk7XG4gICAgfSk7XG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xuICB9XG5cbn1cbiJdfQ==