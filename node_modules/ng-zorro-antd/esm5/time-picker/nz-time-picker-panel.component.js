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
function makeRange(length, step) {
    if (step === void 0) { step = 1; }
    return new Array(Math.ceil(length / step)).fill(0).map(function (_, i) { return i * step; });
}
var NzTimePickerPanelComponent = /** @class */ (function () {
    function NzTimePickerPanelComponent(element, updateCls) {
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
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzAllowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._allowEmpty = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "opened", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._opened = value;
            if (this.opened) {
                this.initPosition();
                this.selectInputRange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDefaultOpenValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._defaultOpenValue = value;
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledHours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledHours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledHours = value;
            if (this._disabledHours) {
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledMinutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledMinutes = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzDisabledSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledSeconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledSeconds = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.enabledColumns = 0;
                /** @type {?} */
                var charSet = new Set(value);
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzHourStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzHourStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzHourStep = value;
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzMinuteStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMinuteStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzMinuteStep = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerPanelComponent.prototype, "nzSecondStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzSecondStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzSecondStep = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectInputRange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.nzTimeValueAccessorDirective) {
                _this.nzTimeValueAccessorDirective.setRange();
            }
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildHours = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hourRange = makeRange(24, this.nzHourStep).map(function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledHours && (_this.nzDisabledHours().indexOf(r) !== -1)
            };
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildMinutes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.minuteRange = makeRange(60, this.nzMinuteStep).map(function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledMinutes && (_this.nzDisabledMinutes(_this.time.hours).indexOf(r) !== -1)
            };
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildSeconds = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.secondRange = makeRange(60, this.nzSecondStep).map(function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledSeconds && (_this.nzDisabledSeconds(_this.time.hours, _this.time.minutes).indexOf(r) !== -1)
            };
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.buildTimes = /**
     * @return {?}
     */
    function () {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.selectSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    };
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollToSelected = /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        /** @type {?} */
        var transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        var currentOption = /** @type {?} */ ((instance.children[0].children[transIndex] || instance.children[0].children[0]));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.translateIndex = /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    function (index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map(function (item) { return item.index; }).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            var disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours);
            return this.calcIndex(disabledMinutes, this.minuteRange.map(function (item) { return item.index; }).indexOf(index));
        }
        else if (unit === 'second') {
            /** @type {?} */
            var disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes);
            return this.calcIndex(disabledSeconds, this.secondRange.map(function (item) { return item.index; }).indexOf(index));
        }
    };
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollTop;
        /** @type {?} */
        var perTick = difference / duration * 10;
        reqAnimFrame(function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        });
    };
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.calcIndex = /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    function (array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return index - array.reduce(function (pre, value) {
                return pre + (value < index ? 1 : 0);
            }, 0);
        }
        else {
            return index;
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.time.clear();
        this.timeClear.emit();
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.changed = /**
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange(this.time.value);
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.touched = /**
     * @return {?}
     */
    function () {
        if (this.onTouch) {
            this.onTouch();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-column-" + this.enabledColumns] = this.nzInDatePicker ? false : true,
            _a[this.prefixCls + "-narrow"] = this.enabledColumns < 3,
            _a[this.prefixCls + "-placement-bottomLeft"] = this.nzInDatePicker ? false : true,
            _a));
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        return (hour.index === this.time.hours) || (!isNotNil(this.time.hours) && (hour.index === this.time.defaultHours));
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        return (minute.index === this.time.minutes) || (!isNotNil(this.time.minutes) && (minute.index === this.time.defaultMinutes));
    };
    /**
     * @param {?} second
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.isSelectedSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return (second.index === this.time.seconds) || (!isNotNil(this.time.seconds) && (second.index === this.time.defaultSeconds));
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.initPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.hourEnabled && _this.hourListElement) {
                if (isNotNil(_this.time.hours)) {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.hours, 0, 'hour');
                }
                else {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.defaultHours, 0, 'hour');
                }
            }
            if (_this.minuteEnabled && _this.minuteListElement) {
                if (isNotNil(_this.time.minutes)) {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.minutes, 0, 'minute');
                }
                else {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (_this.secondEnabled && _this.secondListElement) {
                if (isNotNil(_this.time.seconds)) {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.seconds, 0, 'second');
                }
                else {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.defaultSeconds, 0, 'second');
                }
            }
        });
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.changed();
            _this.touched();
        });
        this.buildTimes();
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.value = value;
        this.buildTimes();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerPanelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
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
    NzTimePickerPanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: UpdateCls }
    ]; };
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
    return NzTimePickerPanelComponent;
}());
export { NzTimePickerPanelComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL256LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxTQUFTLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRTNDLG1CQUFtQixNQUFjLEVBQUUsSUFBZ0I7SUFBaEIscUJBQUEsRUFBQSxRQUFnQjtJQUNqRCxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsSUFBSSxFQUFSLENBQVEsQ0FBQyxDQUFDO0NBQzVFOztJQW9XQyxvQ0FBb0IsT0FBbUIsRUFBVSxT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TCxLQUFLOzRCQUNMLE1BQU07K0JBRU4sS0FBSzt5QkFXTCxLQUFLO3FDQWFMLEtBQUs7a0NBWUwsS0FBSztvQ0FZTCxLQUFLO29DQVlMLEtBQUs7eUJBWUwsS0FBSzs2QkF5QkwsS0FBSzsrQkFZTCxLQUFLOytCQVlMLEtBQUs7O3FDQTdMUjs7U0FrQ2EsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL2NvcmUvcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10aW1lLXZhbHVlLWFjY2Vzc29yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaW1lSG9sZGVyIH0gZnJvbSAnLi90aW1lLWhvbGRlcic7XG5cbmZ1bmN0aW9uIG1ha2VSYW5nZShsZW5ndGg6IG51bWJlciwgc3RlcDogbnVtYmVyID0gMSk6IG51bWJlcltdIHtcbiAgcmV0dXJuIG5ldyBBcnJheShNYXRoLmNlaWwobGVuZ3RoIC8gc3RlcCkpLmZpbGwoMCkubWFwKChfLCBpKSA9PiBpICogc3RlcCk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LXRpbWUtcGlja2VyLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICA6IFtcbiAgICBVcGRhdGVDbHMsXG4gICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE56VGltZVBpY2tlclBhbmVsQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lUGlja2VyUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9uekhvdXJTdGVwID0gMTtcbiAgcHJpdmF0ZSBfbnpNaW51dGVTdGVwID0gMTtcbiAgcHJpdmF0ZSBfbnpTZWNvbmRTdGVwID0gMTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XG4gIHByaXZhdGUgb25Ub3VjaDogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfZm9ybWF0ID0gJ0hIOm1tOnNzJztcbiAgcHJpdmF0ZSBfZGlzYWJsZWRIb3VyczogKCkgPT4gbnVtYmVyW107XG4gIHByaXZhdGUgX2Rpc2FibGVkTWludXRlczogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XG4gIHByaXZhdGUgX2Rpc2FibGVkU2Vjb25kczogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdO1xuICBwcml2YXRlIF9kZWZhdWx0T3BlblZhbHVlID0gbmV3IERhdGUoKTtcbiAgcHJpdmF0ZSBfb3BlbmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2FsbG93RW1wdHkgPSB0cnVlO1xuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtdGltZS1waWNrZXItcGFuZWwnO1xuICB0aW1lID0gbmV3IFRpbWVIb2xkZXIoKTtcbiAgaG91ckVuYWJsZWQgPSB0cnVlO1xuICBtaW51dGVFbmFibGVkID0gdHJ1ZTtcbiAgc2Vjb25kRW5hYmxlZCA9IHRydWU7XG4gIGVuYWJsZWRDb2x1bW5zID0gMztcbiAgaG91clJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XG4gIG1pbnV0ZVJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XG4gIHNlY29uZFJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XG4gIEBWaWV3Q2hpbGQoTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkgbnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTogTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnaG91ckxpc3RFbGVtZW50JykgaG91ckxpc3RFbGVtZW50O1xuICBAVmlld0NoaWxkKCdtaW51dGVMaXN0RWxlbWVudCcpIG1pbnV0ZUxpc3RFbGVtZW50O1xuICBAVmlld0NoaWxkKCdzZWNvbmRMaXN0RWxlbWVudCcpIHNlY29uZExpc3RFbGVtZW50O1xuICBASW5wdXQoKSBuekluRGF0ZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyBJZiBpbnNpZGUgYSBkYXRlLXBpY2tlciwgbW9yZSBkaWZmIHdvcmtzIG5lZWQgdG8gYmUgZG9uZVxuICBASW5wdXQoKSBuekFkZE9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpIaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q2xlYXJUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcbiAgQE91dHB1dCgpIHRpbWVDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpBbGxvd0VtcHR5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fYWxsb3dFbXB0eSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekFsbG93RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93RW1wdHk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb3BlbmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb3BlbmVkID0gdmFsdWU7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLmluaXRQb3NpdGlvbigpO1xuICAgICAgdGhpcy5zZWxlY3RJbnB1dFJhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdE9wZW5WYWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudGltZS5zZXREZWZhdWx0T3BlblZhbHVlKHRoaXMubnpEZWZhdWx0T3BlblZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEZWZhdWx0T3BlblZhbHVlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRIb3Vycyh2YWx1ZTogKCkgPT4gbnVtYmVyW10pIHtcbiAgICB0aGlzLl9kaXNhYmxlZEhvdXJzID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkSG91cnMpIHtcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRpc2FibGVkSG91cnMoKTogKCkgPT4gbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZEhvdXJzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWRNaW51dGVzKHZhbHVlOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkTWludXRlcyA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZE1pbnV0ZXMoKTogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZE1pbnV0ZXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZFNlY29uZHModmFsdWU6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkU2Vjb25kcyA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZFNlY29uZHMoKTogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRTZWNvbmRzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGZvcm1hdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XG4gICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zID0gMDtcbiAgICAgIGNvbnN0IGNoYXJTZXQgPSBuZXcgU2V0KHZhbHVlKTtcbiAgICAgIHRoaXMuaG91ckVuYWJsZWQgPSBjaGFyU2V0LmhhcygnSCcpIHx8IGNoYXJTZXQuaGFzKCdoJyk7XG4gICAgICB0aGlzLm1pbnV0ZUVuYWJsZWQgPSBjaGFyU2V0LmhhcygnbScpO1xuICAgICAgdGhpcy5zZWNvbmRFbmFibGVkID0gY2hhclNldC5oYXMoJ3MnKTtcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGZvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpIb3VyU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbnpIb3VyU3RlcCA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56SG91clN0ZXAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnpIb3VyU3RlcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek1pbnV0ZVN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256TWludXRlU3RlcCA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpNaW51dGVTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256TWludXRlU3RlcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlY29uZFN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX256U2Vjb25kU3RlcCA9IHZhbHVlO1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTZWNvbmRTdGVwKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX256U2Vjb25kU3RlcDtcbiAgfVxuXG4gIHNlbGVjdElucHV0UmFuZ2UoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5uelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlKSB7XG4gICAgICAgIHRoaXMubnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZS5zZXRSYW5nZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYnVpbGRIb3VycygpOiB2b2lkIHtcbiAgICB0aGlzLmhvdXJSYW5nZSA9IG1ha2VSYW5nZSgyNCwgdGhpcy5uekhvdXJTdGVwKS5tYXAociA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5kZXggICA6IHIsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmICh0aGlzLm56RGlzYWJsZWRIb3VycygpLmluZGV4T2YocikgIT09IC0xKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBidWlsZE1pbnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5taW51dGVSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uek1pbnV0ZVN0ZXApLm1hcChyID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbmRleCAgIDogcixcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkTWludXRlcyAmJiAodGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMpLmluZGV4T2YocikgIT09IC0xKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBidWlsZFNlY29uZHMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWNvbmRSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uelNlY29uZFN0ZXApLm1hcChyID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbmRleCAgIDogcixcbiAgICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkU2Vjb25kcyAmJiAodGhpcy5uekRpc2FibGVkU2Vjb25kcyh0aGlzLnRpbWUuaG91cnMsIHRoaXMudGltZS5taW51dGVzKS5pbmRleE9mKHIpICE9PSAtMSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgYnVpbGRUaW1lcygpOiB2b2lkIHtcbiAgICB0aGlzLmJ1aWxkSG91cnMoKTtcbiAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xuICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gIH1cblxuICBzZWxlY3RIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIHRoaXMudGltZS5zZXRIb3Vycyhob3VyLmluZGV4LCBob3VyLmRpc2FibGVkKTtcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgaG91ci5pbmRleCwgMTIwLCAnaG91cicpO1xuXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcyB8fCB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0TWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XG4gICAgdGhpcy50aW1lLnNldE1pbnV0ZXMobWludXRlLmluZGV4LCBtaW51dGUuZGlzYWJsZWQpO1xuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG1pbnV0ZS5pbmRleCwgMTIwLCAnbWludXRlJyk7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUuc2V0U2Vjb25kcyhzZWNvbmQuaW5kZXgsIHNlY29uZC5kaXNhYmxlZCk7XG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgc2Vjb25kLmluZGV4LCAxMjAsICdzZWNvbmQnKTtcbiAgfVxuXG4gIHNjcm9sbFRvU2VsZWN0ZWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMCwgdW5pdDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdHJhbnNJbmRleCA9IHRoaXMudHJhbnNsYXRlSW5kZXgoaW5kZXgsIHVuaXQpO1xuICAgIGNvbnN0IGN1cnJlbnRPcHRpb24gPSAoaW5zdGFuY2UuY2hpbGRyZW5bIDAgXS5jaGlsZHJlblsgdHJhbnNJbmRleCBdIHx8IGluc3RhbmNlLmNoaWxkcmVuWyAwIF0uY2hpbGRyZW5bIDAgXSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5zY3JvbGxUbyhpbnN0YW5jZSwgY3VycmVudE9wdGlvbi5vZmZzZXRUb3AsIGR1cmF0aW9uKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZUluZGV4KGluZGV4OiBudW1iZXIsIHVuaXQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKHVuaXQgPT09ICdob3VyJykge1xuICAgICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIHRoaXMubnpEaXNhYmxlZEhvdXJzKCk7XG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoZGlzYWJsZWRIb3VycywgdGhpcy5ob3VyUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgdGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkTWludXRlcywgdGhpcy5taW51dGVSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xuICAgICAgY29uc3QgZGlzYWJsZWRTZWNvbmRzID0gdGhpcy5uekRpc2FibGVkU2Vjb25kcyAmJiB0aGlzLm56RGlzYWJsZWRTZWNvbmRzKHRoaXMudGltZS5ob3VycywgdGhpcy50aW1lLm1pbnV0ZXMpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkU2Vjb25kcywgdGhpcy5zZWNvbmRSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG8oZWxlbWVudDogSFRNTEVsZW1lbnQsIHRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSB0bztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGlmZmVyZW5jZSA9IHRvIC0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3QgcGVyVGljayA9IGRpZmZlcmVuY2UgLyBkdXJhdGlvbiAqIDEwO1xuXG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgKyBwZXJUaWNrO1xuICAgICAgaWYgKGVsZW1lbnQuc2Nyb2xsVG9wID09PSB0bykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbFRvKGVsZW1lbnQsIHRvLCBkdXJhdGlvbiAtIDEwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGNJbmRleChhcnJheTogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChhcnJheSAmJiBhcnJheS5sZW5ndGggJiYgdGhpcy5uekhpZGVEaXNhYmxlZE9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBpbmRleCAtIGFycmF5LnJlZHVjZSgocHJlLCB2YWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gcHJlICsgKHZhbHVlIDwgaW5kZXggPyAxIDogMCk7XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudGltZS5jbGVhcigpO1xuICAgIHRoaXMudGltZUNsZWFyLmVtaXQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjaGFuZ2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudGltZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHRvdWNoZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub25Ub3VjaCkge1xuICAgICAgdGhpcy5vblRvdWNoKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNscy51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc31gXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jb2x1bW4tJHt0aGlzLmVuYWJsZWRDb2x1bW5zfWBdICAgICA6IHRoaXMubnpJbkRhdGVQaWNrZXIgPyBmYWxzZSA6IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5hcnJvd2BdICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5lbmFibGVkQ29sdW1ucyA8IDMsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXBsYWNlbWVudC1ib3R0b21MZWZ0YF0gICAgICAgICAgICAgIDogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgaXNTZWxlY3RlZEhvdXIoaG91cjogeyBpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbiB9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChob3VyLmluZGV4ID09PSB0aGlzLnRpbWUuaG91cnMpIHx8ICghaXNOb3ROaWwodGhpcy50aW1lLmhvdXJzKSAmJiAoaG91ci5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRIb3VycykpO1xuICB9XG5cbiAgaXNTZWxlY3RlZE1pbnV0ZShtaW51dGU6IHsgaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAobWludXRlLmluZGV4ID09PSB0aGlzLnRpbWUubWludXRlcykgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykgJiYgKG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRNaW51dGVzKSk7XG4gIH1cblxuICBpc1NlbGVjdGVkU2Vjb25kKHNlY29uZDogeyBpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbiB9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChzZWNvbmQuaW5kZXggPT09IHRoaXMudGltZS5zZWNvbmRzKSB8fCAoIWlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSAmJiAoc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFNlY29uZHMpKTtcbiAgfVxuXG4gIGluaXRQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkICYmIHRoaXMuaG91ckxpc3RFbGVtZW50KSB7XG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUuaG91cnMpKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5ob3VycywgMCwgJ2hvdXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRIb3VycywgMCwgJ2hvdXInKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWludXRlRW5hYmxlZCAmJiB0aGlzLm1pbnV0ZUxpc3RFbGVtZW50KSB7XG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUubWludXRlcywgMCwgJ21pbnV0ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0TWludXRlcywgMCwgJ21pbnV0ZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWNvbmRFbmFibGVkICYmIHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSkge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5zZWNvbmRzLCAwLCAnc2Vjb25kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRTZWNvbmRzLCAwLCAnc2Vjb25kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscykge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpJbkRhdGVQaWNrZXIpIHtcbiAgICAgIHRoaXMucHJlZml4Q2xzID0gJ2FudC1jYWxlbmRhci10aW1lLXBpY2tlcic7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VkKCk7XG4gICAgICB0aGlzLnRvdWNoZWQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmJ1aWxkVGltZXMoKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWUudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmJ1aWxkVGltZXMoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoID0gZm47XG4gIH1cblxufVxuIl19