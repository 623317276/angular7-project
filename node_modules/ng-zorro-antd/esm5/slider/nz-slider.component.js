/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { Marks } from './nz-slider-marks.component';
import { NzSliderService } from './nz-slider.service';
var SliderHandle = /** @class */ (function () {
    function SliderHandle() {
    }
    return SliderHandle;
}());
export { SliderHandle };
function SliderHandle_tsickle_Closure_declarations() {
    /** @type {?} */
    SliderHandle.prototype.offset;
    /** @type {?} */
    SliderHandle.prototype.value;
    /** @type {?} */
    SliderHandle.prototype.active;
}
/**
 * @record
 */
function MouseTouchObserverConfig() { }
function MouseTouchObserverConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    MouseTouchObserverConfig.prototype.start;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.move;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.end;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.pluckKey;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.filter;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.startPlucked$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.end$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.moveResolved$;
}
var NzSliderComponent = /** @class */ (function () {
    // |--------------------------------------------------------------------------------------------
    // | Lifecycle hooks
    // |--------------------------------------------------------------------------------------------
    function NzSliderComponent(utils) {
        this.utils = utils;
        // Debugging
        this.nzDebugId = null;
        // Static configurations (properties that can only specify once)
        this.nzStep = 1;
        this.nzMarks = null;
        this.nzMin = 0;
        this.nzMax = 100;
        this.nzDefaultValue = null;
        this.nzOnAfterChange = new EventEmitter();
        this._disabled = false;
        this._dots = false;
        this._included = true;
        this._range = false;
        this._vertical = false;
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.prefixCls = 'ant-slider';
        this.activeValueIndex = null;
        this.track = { offset: null, length: null };
        this.bounds = { lower: null, upper: null };
        this.onTouched = function () {
        } // onTouch function registered via registerOnTouch (ControlValueAccessor).
        ;
        this.isDragging = false;
    }
    Object.defineProperty(NzSliderComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        // Dynamic property settings
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._range;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._range = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzDots", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dots;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dots = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    // |--------------------------------------------------------------------------------------------
    // | value accessors & ngModel accessors
    // |--------------------------------------------------------------------------------------------
    /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    NzSliderComponent.prototype.setValue = /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    function (val, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) { // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            this.value = this.formatValue(val);
            this.log("[ngModel:setValue/writeValue]Update track & handles");
            this.updateTrackAndHandles();
            // if (!this.isValueEqual(this.value, val)) {
            //   this.log(`[ngModel:setValue/writeValue]onValueChange`, val);
            //   if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
            //     this.onValueChange(this.value);
            //   }
            // }
        }
        else { // [Normal]: setting value, ONLY check changed, then update and trigger onValueChange
            // [Normal]: setting value, ONLY check changed, then update and trigger onValueChange
            if (!this.isValueEqual(this.value, val)) {
                this.value = val;
                this.log("[Normal:setValue]Update track & handles");
                this.updateTrackAndHandles();
                this.log("[Normal:setValue]onValueChange", val);
                if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    this.onValueChange(this.value);
                }
            }
        }
    };
    /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    NzSliderComponent.prototype.getValue = /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        // TODO: using type guard, remove type cast
        if (cloneAndSort && this.nzRange) { // clone & sort range values
            // clone & sort range values
            return this.utils.cloneArray(/** @type {?} */ (this.value)).sort(function (a, b) { return a - b; });
        }
        return this.value;
    };
    // clone & sort current value and convert them to offsets, then return the new one
    /**
     * @param {?=} value
     * @return {?}
     */
    NzSliderComponent.prototype.getValueToOffset = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        // TODO: using type guard, remove type cast
        return this.nzRange ?
            (/** @type {?} */ (normalizedValue)).map(function (val) { return _this.valueToOffset(val); }) :
            this.valueToOffset(/** @type {?} */ (normalizedValue));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NzSliderComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.log("[ngModel/writeValue]current writing value = ", val);
        this.setValue(val, true);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValueChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSliderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
        this.setClassMap();
    };
    // initialize event binding, class init, etc. (called only once)
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // initial checking
        this.checkValidValue(this.nzDefaultValue); // check nzDefaultValue
        // default handles
        this.handles = this._generateHandles(this.nzRange ? 2 : 1);
        // initialize
        this.sliderDOM = this.slider.nativeElement;
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        } // init with default value
        this.marksArray = this.nzMarks === null ? null : this.toMarksArray(this.nzMarks);
        // event bindings
        this.createDrag();
        // initialize drag's disabled status
        this.toggleDragDisabled(this.nzDisabled);
        // the first time to init classes
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzDisabled = changes.nzDisabled, nzMarks = changes.nzMarks, nzRange = changes.nzRange;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
            this.setClassMap();
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.toMarksArray(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null)); // Change to default value when nzRange changed
        }
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeDrag();
    };
    // |--------------------------------------------------------------------------------------------
    // | Basic flow functions
    // |--------------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-disabled"] = this.nzDisabled,
            _a[this.prefixCls + "-vertical"] = this.nzVertical,
            _a[this.prefixCls + "-with-marks"] = this.marksArray ? this.marksArray.length : 0,
            _a);
    };
    // find the cloest value to be activated (only for range = true)
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValueIndex = /**
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            var minimal_1 = null;
            /** @type {?} */
            var gap_1 = void 0;
            /** @type {?} */
            var activeIndex_1 = void 0;
            // TODO: using type guard, remove type cast
            (/** @type {?} */ (this.getValue())).forEach(function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < minimal_1) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            });
            this.activeValueIndex = activeIndex_1;
        }
    };
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValue = /**
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            var newValue = this.utils.cloneArray(/** @type {?} */ (this.value));
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.updateTrackAndHandles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a, _b;
        /** @type {?} */
        var value = this.getValue();
        /** @type {?} */
        var offset = this.getValueToOffset(value);
        /** @type {?} */
        var valueSorted = this.getValue(true);
        /** @type {?} */
        var offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        var boundParts = this.nzRange ? /** @type {?} */ (valueSorted) : [0, valueSorted];
        /** @type {?} */
        var trackParts = this.nzRange ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach(function (handle, index) {
            handle.offset = _this.nzRange ? offset[index] : offset;
            handle.value = _this.nzRange ? value[index] : value;
        });
        _a = tslib_1.__read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
        _b = tslib_1.__read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
    };
    /**
     * @param {?} marks
     * @return {?}
     */
    NzSliderComponent.prototype.toMarksArray = /**
     * @param {?} marks
     * @return {?}
     */
    function (marks) {
        /** @type {?} */
        var marksArray = [];
        for (var key in marks) {
            /** @type {?} */
            var mark = marks[key];
            /** @type {?} */
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val < this.nzMin || val > this.nzMax) {
                continue;
            }
            marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
        }
        return marksArray;
    };
    // |--------------------------------------------------------------------------------------------
    // | Event listeners & bindings
    // |--------------------------------------------------------------------------------------------
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragStart = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.log('[onDragStart]dragging value = ', value);
        this.toggleDragMoving(true);
        // cache DOM layout/reflow operations
        this.cacheSliderProperty();
        // trigger drag start
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        // Tooltip visibility of handles
        this._showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragMove = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.log('[onDragMove]dragging value = ', value);
        // trigger drag moving
        this.setActiveValue(value);
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.onDragEnd = /**
     * @return {?}
     */
    function () {
        this.log('[onDragEnd]');
        this.toggleDragMoving(false);
        this.nzOnAfterChange.emit(this.getValue(true));
        // remove cache DOM layout/reflow operations
        this.cacheSliderProperty(true);
        // Hide all tooltip
        this._hideAllHandleTooltip();
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.createDrag = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        /** @type {?} */
        var orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        var mouse = {
            start: 'mousedown', move: 'mousemove', end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        var touch = {
            start: 'touchstart', move: 'touchmove', end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: function (e) { return !_this.utils.isNotTouchEvent(/** @type {?} */ (e)); }
        };
        // make observables
        [mouse, touch].forEach(function (source) {
            var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? (function () { return true; }) : _a;
            // start
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(_this.utils.pauseEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), map(function (position) { return _this.findClosestValue(position); }));
            // end
            source.end$ = fromEvent(document, end);
            // resolve move
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(_this.utils.pauseEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), distinctUntilChanged(), map(function (position) { return _this.findClosestValue(position); }), distinctUntilChanged(), takeUntil(source.end$));
            // merge to become moving
            // source.move$ = source.startPlucked$.mergeMapTo(source.moveResolved$);
        });
        // merge mouse and touch observables
        this.dragstart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        // this.dragmove$ = Observable.merge(mouse.move$, touch.move$);
        this.dragmove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragend$ = merge(mouse.end$, touch.end$);
    };
    /**
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.subscribeDrag = /**
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[subscribeDrag]this.dragstart$ = ', this.dragstart$);
        if (periods.indexOf('start') !== -1 && this.dragstart$ && !this.dragstart_) {
            this.dragstart_ = this.dragstart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragmove$ && !this.dragmove_) {
            this.dragmove_ = this.dragmove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragend$ && !this.dragend_) {
            this.dragend_ = this.dragend$.subscribe(this.onDragEnd.bind(this));
        }
    };
    /**
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.unsubscribeDrag = /**
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[unsubscribeDrag]this.dragstart_ = ', this.dragstart_);
        if (periods.indexOf('start') !== -1 && this.dragstart_) {
            this.dragstart_.unsubscribe();
            this.dragstart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragmove_) {
            this.dragmove_.unsubscribe();
            this.dragmove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragend_) {
            this.dragend_.unsubscribe();
            this.dragend_ = null;
        }
    };
    /**
     * @param {?} movable
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragMoving = /**
     * @param {?} movable
     * @return {?}
     */
    function (movable) {
        /** @type {?} */
        var periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    // |--------------------------------------------------------------------------------------------
    // | Util functions (tools)
    // |--------------------------------------------------------------------------------------------
    // find the closest value depend on pointer's position
    /**
     * @param {?} position
     * @return {?}
     */
    NzSliderComponent.prototype.findClosestValue = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        var sliderLength = this.getSliderLength();
        /** @type {?} */
        var ratio = this.utils.correctNumLimit((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        var val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        var points = (this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat));
        // push closest step
        if (this.nzStep !== null && !this.nzDots) {
            /** @type {?} */
            var closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        var gaps = points.map(function (point) { return Math.abs(val - point); });
        /** @type {?} */
        var closest = points[gaps.indexOf(Math.min.apply(Math, tslib_1.__spread(gaps)))];
        // return the fixed
        return this.nzStep === null ? closest :
            parseFloat(closest.toFixed(this.utils.getPrecision(this.nzStep)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.valueToOffset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.utils.valueToOffset(this.nzMin, this.nzMax, value);
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderStartPosition = /**
     * @return {?}
     */
    function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        var offset = this.utils.getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderLength = /**
     * @return {?}
     */
    function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        return this.nzVertical ?
            sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    // cache DOM layout/reflow operations for performance (may not necessary?)
    /**
     * @param {?=} remove
     * @return {?}
     */
    NzSliderComponent.prototype.cacheSliderProperty = /**
     * @param {?=} remove
     * @return {?}
     */
    function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.formatValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var res = value;
        if (!this.checkValidValue(value)) { // if empty, use default value
            // if empty, use default value
            res = this.nzDefaultValue === null ?
                (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else { // format
            // format
            // TODO: using type guard, remove type cast
            res = this.nzRange ?
                (/** @type {?} */ (value)).map(function (val) { return _this.utils.correctNumLimit(val, _this.nzMin, _this.nzMax); }) :
                this.utils.correctNumLimit(/** @type {?} */ (value), this.nzMin, this.nzMax);
        }
        return res;
    };
    // check if value is valid and throw error if value-type/range not match
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.checkValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var range = this.nzRange;
        if (value === null || value === undefined) {
            return false;
        }
        /** @type {?} */
        var isArray = Array.isArray(value);
        if (!Array.isArray(value)) {
            /** @type {?} */
            var parsedValue = value;
            if (typeof value !== 'number') {
                parsedValue = parseFloat(value);
            }
            if (isNaN(parsedValue)) {
                return false;
            } // it's an invalid value, just return
        }
        if (isArray !== !!range) { // value type not match
            // value type not match
            throw new Error("The \"nzRange\" can't match the \"nzValue\"'s type, please check these properties: \"nzRange\", \"nzValue\", \"nzDefaultValue\".");
        }
        return true;
    };
    /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    NzSliderComponent.prototype.isValueEqual = /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    function (value, val) {
        if (typeof value !== typeof val) {
            return false;
        }
        if (Array.isArray(value)) {
            /** @type {?} */
            var len = value.length;
            for (var i = 0; i < len; i++) {
                if (value[i] !== val[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return value === val;
        }
    };
    // print debug info
    // TODO: should not kept in component
    /* tslint:disable-next-line:no-any */
    /**
     * @param {...?} messages
     * @return {?}
     */
    NzSliderComponent.prototype.log = /**
     * @param {...?} messages
     * @return {?}
     */
    function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.nzDebugId !== null) {
            /** @type {?} */
            var args = ["[nz-slider][#" + this.nzDebugId + "] "].concat(Array.prototype.slice.call(arguments));
            console.log.apply(null, args);
        }
    };
    /**
     * @param {?=} handleIndex
     * @return {?}
     */
    NzSliderComponent.prototype._showHandleTooltip = /**
     * @param {?=} handleIndex
     * @return {?}
     */
    function (handleIndex) {
        var _this = this;
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach(function (handle, index) {
            _this.handles[index].active = index === handleIndex;
        });
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype._hideAllHandleTooltip = /**
     * @return {?}
     */
    function () {
        this.handles.forEach(function (handle) { return handle.active = false; });
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    NzSliderComponent.prototype._generateHandles = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var handles = [];
        for (var i = 0; i < amount; i++) {
            handles.push({ offset: null, value: null, active: false });
        }
        return handles;
    };
    NzSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider',
                    preserveWhitespaces: false,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzSliderComponent; }),
                            multi: true
                        }],
                    template: "<div #slider [ngClass]=\"classMap\">\n  <div class=\"ant-slider-rail\"></div>\n  <nz-slider-track\n    nzClassName=\"{{prefixCls}}-track\"\n    [nzVertical]=\"nzVertical\"\n    [nzIncluded]=\"nzIncluded\"\n    [nzOffset]=\"track.offset\"\n    [nzLength]=\"track.length\"\n  ></nz-slider-track>\n  <nz-slider-step *ngIf=\"marksArray\"\n    nzPrefixCls=\"{{prefixCls}}\"\n    [nzVertical]=\"nzVertical\"\n    [nzLowerBound]=\"bounds.lower\"\n    [nzUpperBound]=\"bounds.upper\"\n    [nzMarksArray]=\"marksArray\"\n    [nzIncluded]=\"nzIncluded\"\n  ></nz-slider-step>\n  <nz-slider-handle\n    *ngFor=\"let handle of handles;\"\n    nzClassName=\"{{prefixCls}}-handle\"\n    [nzVertical]=\"nzVertical\"\n    [nzOffset]=\"handle.offset\"\n    [nzValue]=\"handle.value\"\n    [nzActive]=\"handle.active\"\n    [nzTipFormatter]=\"nzTipFormatter\"\n  ></nz-slider-handle>\n  <nz-slider-marks *ngIf=\"marksArray\"\n    nzClassName=\"{{prefixCls}}-mark\"\n    [nzVertical]=\"nzVertical\"\n    [nzMin]=\"nzMin\"\n    [nzMax]=\"nzMax\"\n    [nzLowerBound]=\"bounds.lower\"\n    [nzUpperBound]=\"bounds.upper\"\n    [nzMarksArray]=\"marksArray\"\n    [nzIncluded]=\"nzIncluded\"\n  ></nz-slider-marks>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzSliderComponent.ctorParameters = function () { return [
        { type: NzSliderService }
    ]; };
    NzSliderComponent.propDecorators = {
        nzDebugId: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzStep: [{ type: Input }],
        nzMarks: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzDefaultValue: [{ type: Input }],
        nzTipFormatter: [{ type: Input }],
        nzOnAfterChange: [{ type: Output }],
        nzVertical: [{ type: Input }],
        nzRange: [{ type: Input }],
        nzDots: [{ type: Input }],
        nzIncluded: [{ type: Input }],
        slider: [{ type: ViewChild, args: ['slider',] }]
    };
    return NzSliderComponent;
}());
export { NzSliderComponent };
function NzSliderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderComponent.prototype.nzDebugId;
    /** @type {?} */
    NzSliderComponent.prototype.nzStep;
    /** @type {?} */
    NzSliderComponent.prototype.nzMarks;
    /** @type {?} */
    NzSliderComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderComponent.prototype.nzDefaultValue;
    /** @type {?} */
    NzSliderComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderComponent.prototype.nzOnAfterChange;
    /** @type {?} */
    NzSliderComponent.prototype._disabled;
    /** @type {?} */
    NzSliderComponent.prototype._dots;
    /** @type {?} */
    NzSliderComponent.prototype._included;
    /** @type {?} */
    NzSliderComponent.prototype._range;
    /** @type {?} */
    NzSliderComponent.prototype._vertical;
    /** @type {?} */
    NzSliderComponent.prototype.value;
    /** @type {?} */
    NzSliderComponent.prototype.slider;
    /** @type {?} */
    NzSliderComponent.prototype.sliderDOM;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderStart;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderLength;
    /** @type {?} */
    NzSliderComponent.prototype.prefixCls;
    /** @type {?} */
    NzSliderComponent.prototype.classMap;
    /** @type {?} */
    NzSliderComponent.prototype.activeValueIndex;
    /** @type {?} */
    NzSliderComponent.prototype.track;
    /** @type {?} */
    NzSliderComponent.prototype.handles;
    /** @type {?} */
    NzSliderComponent.prototype.marksArray;
    /** @type {?} */
    NzSliderComponent.prototype.bounds;
    /** @type {?} */
    NzSliderComponent.prototype.onValueChange;
    /** @type {?} */
    NzSliderComponent.prototype.onTouched;
    /** @type {?} */
    NzSliderComponent.prototype.isDragging;
    /** @type {?} */
    NzSliderComponent.prototype.dragstart$;
    /** @type {?} */
    NzSliderComponent.prototype.dragmove$;
    /** @type {?} */
    NzSliderComponent.prototype.dragend$;
    /** @type {?} */
    NzSliderComponent.prototype.dragstart_;
    /** @type {?} */
    NzSliderComponent.prototype.dragmove_;
    /** @type {?} */
    NzSliderComponent.prototype.dragend_;
    /** @type {?} */
    NzSliderComponent.prototype.utils;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXRELElBQUE7Ozt1QkF6QkE7SUE2QkMsQ0FBQTtBQUpELHdCQUlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdMQyxnR0FBZ0c7SUFDaEcsb0JBQW9CO0lBQ3BCLGdHQUFnRztJQUVoRywyQkFBb0IsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7O3lCQWhLSixJQUFJOztzQkFheEIsQ0FBQzt1QkFDTyxJQUFJO3FCQUNiLENBQUM7cUJBQ0QsR0FBRzs4QkFDbUIsSUFBSTsrQkFFZixJQUFJLFlBQVksRUFBZTt5QkF1Q3ZDLEtBQUs7cUJBQ1QsS0FBSzt5QkFDRCxJQUFJO3NCQUNQLEtBQUs7eUJBQ0YsS0FBSztxQkFFSixJQUFJO2dDQUdFLElB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QUFnQjs7OztjQUFDLE1BQWM7O1FBQ3JDLElBQU0sT0FBTyxHQUFtQixFQUFFLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxPQUFPLENBQUM7OztnQkE3aEJsQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFdBQVc7b0JBQ2hDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFNBQVMsRUFBWSxDQUFFOzRCQUNyQixPQUFPLEVBQU0saUJBQWlCOzRCQUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs0QkFDaEQsS0FBSyxFQUFRLElBQUk7eUJBQ2xCLENBQUU7b0JBQ0gsMHJDQUFpRDtpQkFDbEQ7Ozs7Z0JBaENRLGVBQWU7Ozs0QkFvQ3JCLEtBQUs7NkJBR0wsS0FBSzt5QkFVTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxNQUFNOzZCQUVOLEtBQUs7MEJBU0wsS0FBSzt5QkFTTCxLQUFLOzZCQVNMLEtBQUs7eUJBaUJMLFNBQVMsU0FBQyxRQUFROzs0QkExSHJCOztTQXNEYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTp2YXJpYWJsZS1uYW1lICovXG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHBsdWNrLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBNYXJrcywgTWFya3NBcnJheSB9IGZyb20gJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNsaWRlclNlcnZpY2UgfSBmcm9tICcuL256LXNsaWRlci5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgU2xpZGVyVmFsdWUgPSBudW1iZXJbXSB8IG51bWJlcjtcblxuZXhwb3J0IGNsYXNzIFNsaWRlckhhbmRsZSB7XG4gIG9mZnNldDogbnVtYmVyO1xuICB2YWx1ZTogbnVtYmVyO1xuICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcge1xuICBzdGFydDogc3RyaW5nO1xuICBtb3ZlOiBzdHJpbmc7XG4gIGVuZDogc3RyaW5nO1xuICBwbHVja0tleTogc3RyaW5nW107XG5cbiAgZmlsdGVyPyhlOiBFdmVudCk6IGJvb2xlYW47XG5cbiAgc3RhcnRQbHVja2VkJD86IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgZW5kJD86IE9ic2VydmFibGU8RXZlbnQ+O1xuICBtb3ZlUmVzb2x2ZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNsaWRlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIHtcbiAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpTbGlkZXJDb21wb25lbnQpLFxuICAgIG11bHRpICAgICAgOiB0cnVlXG4gIH0gXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2xpZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvLyBEZWJ1Z2dpbmdcbiAgQElucHV0KCkgbnpEZWJ1Z0lkOiBudW1iZXIgfCBzdHJpbmcgPSBudWxsOyAvLyBzZXQgdGhpcyBpZCB3aWxsIHByaW50IGRlYnVnIGluZm9ybWF0aW9ucyB0byBjb25zb2xlXG5cbiAgLy8gRHluYW1pYyBwcm9wZXJ0eSBzZXR0aW5nc1xuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIC8vIFN0YXRpYyBjb25maWd1cmF0aW9ucyAocHJvcGVydGllcyB0aGF0IGNhbiBvbmx5IHNwZWNpZnkgb25jZSlcbiAgQElucHV0KCkgbnpTdGVwID0gMTtcbiAgQElucHV0KCkgbnpNYXJrczogTWFya3MgPSBudWxsO1xuICBASW5wdXQoKSBuek1pbiA9IDA7XG4gIEBJbnB1dCgpIG56TWF4ID0gMTAwO1xuICBASW5wdXQoKSBuekRlZmF1bHRWYWx1ZTogU2xpZGVyVmFsdWUgPSBudWxsO1xuICBASW5wdXQoKSBuelRpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcbiAgQE91dHB1dCgpIG56T25BZnRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U2xpZGVyVmFsdWU+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpSYW5nZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JhbmdlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelJhbmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yYW5nZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRvdHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kb3RzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRvdHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RvdHM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuXG4gIC8vIEluc2lkZSBwcm9wZXJ0aWVzXG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2RvdHMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSB0cnVlO1xuICBwcml2YXRlIF9yYW5nZSA9IGZhbHNlO1xuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuXG4gIHZhbHVlOiBTbGlkZXJWYWx1ZSA9IG51bGw7IC8vIENPUkUgdmFsdWUgc3RhdGVcbiAgQFZpZXdDaGlsZCgnc2xpZGVyJykgc2xpZGVyOiBFbGVtZW50UmVmO1xuICBzbGlkZXJET006IEhUTUxEaXZFbGVtZW50O1xuICBjYWNoZVNsaWRlclN0YXJ0OiBudW1iZXIgPSBudWxsO1xuICBjYWNoZVNsaWRlckxlbmd0aDogbnVtYmVyID0gbnVsbDtcbiAgcHJlZml4Q2xzID0gJ2FudC1zbGlkZXInO1xuICBjbGFzc01hcDogb2JqZWN0O1xuICBhY3RpdmVWYWx1ZUluZGV4OiBudW1iZXIgPSBudWxsOyAvLyBDdXJyZW50IGFjdGl2YXRlZCBoYW5kbGUncyBpbmRleCBPTkxZIGZvciByYW5nZT10cnVlXG4gIHRyYWNrID0geyBvZmZzZXQ6IG51bGwsIGxlbmd0aDogbnVsbCB9OyAvLyBUcmFjaydzIG9mZnNldCBhbmQgbGVuZ3RoXG4gIGhhbmRsZXM6IFNsaWRlckhhbmRsZVtdOyAvLyBIYW5kbGVzJyBvZmZzZXRcbiAgbWFya3NBcnJheTogTWFya3NbXTsgLy8gXCJtYXJrc1wiIGluIGFycmF5IHR5cGUgd2l0aCBtb3JlIGRhdGEgJiBGSUxURVIgb3V0IHRoZSBpbnZhbGlkIG1hcmtcbiAgYm91bmRzID0geyBsb3dlcjogbnVsbCwgdXBwZXI6IG51bGwgfTsgLy8gbm93IGZvciBuei1zbGlkZXItc3RlcFxuICBvblZhbHVlQ2hhbmdlOiAodmFsdWU6IFNsaWRlclZhbHVlKSA9PiB2b2lkOyAvLyBVc2VkIGJ5IG5nTW9kZWwuIEJVRzogb25WYWx1ZUNoYW5nZSgpIHdpbGwgbm90IHN1Y2Nlc3MgdG8gZWZmZWN0IHRoZSBcInZhbHVlXCIgdmFyaWFibGUgKCBbKG5nTW9kZWwpXT1cInZhbHVlXCIgKSB3aGVuIHRoZSBmaXJzdCBpbml0aWFsaXppbmcsIGV4Y2VwdCB1c2luZyBcIm5leHRUaWNrXCIgZnVuY3Rpb25hbGl0eSAoTUFZIGFuZ3VsYXIyJ3MgcHJvYmxlbSA/KVxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG4gIH0gLy8gb25Ub3VjaCBmdW5jdGlvbiByZWdpc3RlcmVkIHZpYSByZWdpc3Rlck9uVG91Y2ggKENvbnRyb2xWYWx1ZUFjY2Vzc29yKS5cbiAgaXNEcmFnZ2luZyA9IGZhbHNlOyAvLyBDdXJyZW50IGRyYWdnaW5nIHN0YXRlXG5cbiAgLy8gRXZlbnRzIG9ic2VydmFibGVzICYgc3Vic2NyaXB0aW9uc1xuICBkcmFnc3RhcnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIGRyYWdtb3ZlJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBkcmFnZW5kJDogT2JzZXJ2YWJsZTxFdmVudD47XG4gIGRyYWdzdGFydF86IFN1YnNjcmlwdGlvbjtcbiAgZHJhZ21vdmVfOiBTdWJzY3JpcHRpb247XG4gIGRyYWdlbmRfOiBTdWJzY3JpcHRpb247XG5cbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgdmFsdWUgYWNjZXNzb3JzICYgbmdNb2RlbCBhY2Nlc3NvcnNcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc2V0VmFsdWUodmFsOiBTbGlkZXJWYWx1ZSwgaXNXcml0ZVZhbHVlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoaXNXcml0ZVZhbHVlKSB7IC8vIFtuZ01vZGVsLXdyaXRlVmFsdWVdOiBGb3JtYXR0aW5nIGJlZm9yZSBzZXR0aW5nIHZhbHVlLCBhbHdheXMgdXBkYXRlIGN1cnJlbnQgdmFsdWUsIGJ1dCB0cmlnZ2VyIG9uVmFsdWVDaGFuZ2UgT05MWSB3aGVuIHRoZSBcImZvcm1hdHRlZCB2YWx1ZVwiIG5vdCBlcXVhbHMgXCJpbnB1dCB2YWx1ZVwiXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWwpO1xuICAgICAgdGhpcy5sb2coYFtuZ01vZGVsOnNldFZhbHVlL3dyaXRlVmFsdWVdVXBkYXRlIHRyYWNrICYgaGFuZGxlc2ApO1xuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcbiAgICAgIC8vIGlmICghdGhpcy5pc1ZhbHVlRXF1YWwodGhpcy52YWx1ZSwgdmFsKSkge1xuICAgICAgLy8gICB0aGlzLmxvZyhgW25nTW9kZWw6c2V0VmFsdWUvd3JpdGVWYWx1ZV1vblZhbHVlQ2hhbmdlYCwgdmFsKTtcbiAgICAgIC8vICAgaWYgKHRoaXMub25WYWx1ZUNoYW5nZSkgeyAvLyBOT1RFOiBvblZhbHVlQ2hhbmdlIHdpbGwgYmUgdW5hdmFpbGFibGUgd2hlbiB3cml0ZVZhbHVlKCkgY2FsbGVkIGF0IHRoZSBmaXJzdCB0aW1lXG4gICAgICAvLyAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgLy8gICB9XG4gICAgICAvLyB9XG4gICAgfSBlbHNlIHsgLy8gW05vcm1hbF06IHNldHRpbmcgdmFsdWUsIE9OTFkgY2hlY2sgY2hhbmdlZCwgdGhlbiB1cGRhdGUgYW5kIHRyaWdnZXIgb25WYWx1ZUNoYW5nZVxuICAgICAgaWYgKCF0aGlzLmlzVmFsdWVFcXVhbCh0aGlzLnZhbHVlLCB2YWwpKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWw7XG4gICAgICAgIHRoaXMubG9nKGBbTm9ybWFsOnNldFZhbHVlXVVwZGF0ZSB0cmFjayAmIGhhbmRsZXNgKTtcbiAgICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcbiAgICAgICAgdGhpcy5sb2coYFtOb3JtYWw6c2V0VmFsdWVdb25WYWx1ZUNoYW5nZWAsIHZhbCk7XG4gICAgICAgIGlmICh0aGlzLm9uVmFsdWVDaGFuZ2UpIHsgLy8gTk9URTogb25WYWx1ZUNoYW5nZSB3aWxsIGJlIHVuYXZhaWxhYmxlIHdoZW4gd3JpdGVWYWx1ZSgpIGNhbGxlZCBhdCB0aGUgZmlyc3QgdGltZVxuICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlKGNsb25lQW5kU29ydDogYm9vbGVhbiA9IGZhbHNlKTogU2xpZGVyVmFsdWUge1xuICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICBpZiAoY2xvbmVBbmRTb3J0ICYmIHRoaXMubnpSYW5nZSkgeyAvLyBjbG9uZSAmIHNvcnQgcmFuZ2UgdmFsdWVzXG4gICAgICByZXR1cm4gdGhpcy51dGlscy5jbG9uZUFycmF5KHRoaXMudmFsdWUgYXMgbnVtYmVyW10pLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICAvLyBjbG9uZSAmIHNvcnQgY3VycmVudCB2YWx1ZSBhbmQgY29udmVydCB0aGVtIHRvIG9mZnNldHMsIHRoZW4gcmV0dXJuIHRoZSBuZXcgb25lXG4gIGdldFZhbHVlVG9PZmZzZXQodmFsdWU/OiBTbGlkZXJWYWx1ZSk6IFNsaWRlclZhbHVlIHtcbiAgICBsZXQgbm9ybWFsaXplZFZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBub3JtYWxpemVkVmFsdWUgPSB0aGlzLmdldFZhbHVlKHRydWUpO1xuICAgIH1cbiAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XG4gICAgcmV0dXJuIHRoaXMubnpSYW5nZSA/XG4gICAgICAobm9ybWFsaXplZFZhbHVlIGFzIG51bWJlcltdKS5tYXAodmFsID0+IHRoaXMudmFsdWVUb09mZnNldCh2YWwpKSA6XG4gICAgICB0aGlzLnZhbHVlVG9PZmZzZXQobm9ybWFsaXplZFZhbHVlIGFzIG51bWJlcik7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbDogU2xpZGVyVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLmxvZyhgW25nTW9kZWwvd3JpdGVWYWx1ZV1jdXJyZW50IHdyaXRpbmcgdmFsdWUgPSBgLCB2YWwpO1xuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogU2xpZGVyVmFsdWUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQoaXNEaXNhYmxlZCk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgTGlmZWN5Y2xlIGhvb2tzXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXRpbHM6IE56U2xpZGVyU2VydmljZSkge1xuICB9XG5cbiAgLy8gaW5pdGlhbGl6ZSBldmVudCBiaW5kaW5nLCBjbGFzcyBpbml0LCBldGMuIChjYWxsZWQgb25seSBvbmNlKVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBpbml0aWFsIGNoZWNraW5nXG4gICAgdGhpcy5jaGVja1ZhbGlkVmFsdWUodGhpcy5uekRlZmF1bHRWYWx1ZSk7IC8vIGNoZWNrIG56RGVmYXVsdFZhbHVlXG4gICAgLy8gZGVmYXVsdCBoYW5kbGVzXG4gICAgdGhpcy5oYW5kbGVzID0gdGhpcy5fZ2VuZXJhdGVIYW5kbGVzKHRoaXMubnpSYW5nZSA/IDIgOiAxKTtcbiAgICAvLyBpbml0aWFsaXplXG4gICAgdGhpcy5zbGlkZXJET00gPSB0aGlzLnNsaWRlci5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmdldFZhbHVlKCkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7XG4gICAgfSAvLyBpbml0IHdpdGggZGVmYXVsdCB2YWx1ZVxuICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLnRvTWFya3NBcnJheSh0aGlzLm56TWFya3MpO1xuICAgIC8vIGV2ZW50IGJpbmRpbmdzXG4gICAgdGhpcy5jcmVhdGVEcmFnKCk7XG4gICAgLy8gaW5pdGlhbGl6ZSBkcmFnJ3MgZGlzYWJsZWQgc3RhdHVzXG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQodGhpcy5uekRpc2FibGVkKTtcbiAgICAvLyB0aGUgZmlyc3QgdGltZSB0byBpbml0IGNsYXNzZXNcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBuekRpc2FibGVkLCBuek1hcmtzLCBuelJhbmdlIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChuekRpc2FibGVkICYmICFuekRpc2FibGVkLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZChuekRpc2FibGVkLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfSBlbHNlIGlmIChuek1hcmtzICYmICFuek1hcmtzLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLm56TWFya3MgPyB0aGlzLnRvTWFya3NBcnJheSh0aGlzLm56TWFya3MpIDogbnVsbDtcbiAgICB9IGVsc2UgaWYgKG56UmFuZ2UgJiYgIW56UmFuZ2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7IC8vIENoYW5nZSB0byBkZWZhdWx0IHZhbHVlIHdoZW4gbnpSYW5nZSBjaGFuZ2VkXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcbiAgfVxuXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IEJhc2ljIGZsb3cgZnVuY3Rpb25zXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgIF0gIDogdGhpcy5uekRpc2FibGVkLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tdmVydGljYWxgIF0gIDogdGhpcy5uelZlcnRpY2FsLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30td2l0aC1tYXJrc2AgXTogdGhpcy5tYXJrc0FycmF5ID8gdGhpcy5tYXJrc0FycmF5Lmxlbmd0aCA6IDBcbiAgICB9O1xuICB9XG5cbiAgLy8gZmluZCB0aGUgY2xvZXN0IHZhbHVlIHRvIGJlIGFjdGl2YXRlZCAob25seSBmb3IgcmFuZ2UgPSB0cnVlKVxuICBzZXRBY3RpdmVWYWx1ZUluZGV4KHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpSYW5nZSkge1xuICAgICAgbGV0IG1pbmltYWwgPSBudWxsO1xuICAgICAgbGV0IGdhcDtcbiAgICAgIGxldCBhY3RpdmVJbmRleDtcbiAgICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICAgICh0aGlzLmdldFZhbHVlKCkgYXMgbnVtYmVyW10pLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgICAgZ2FwID0gTWF0aC5hYnMocG9pbnRlclZhbHVlIC0gdmFsKTtcbiAgICAgICAgaWYgKG1pbmltYWwgPT09IG51bGwgfHwgZ2FwIDwgbWluaW1hbCkge1xuICAgICAgICAgIG1pbmltYWwgPSBnYXA7XG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmVWYWx1ZShwb2ludGVyVmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLm56UmFuZ2UpIHtcbiAgICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy51dGlscy5jbG9uZUFycmF5KHRoaXMudmFsdWUgYXMgbnVtYmVyW10pO1xuICAgICAgbmV3VmFsdWVbIHRoaXMuYWN0aXZlVmFsdWVJbmRleCBdID0gcG9pbnRlclZhbHVlO1xuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUocG9pbnRlclZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVUcmFja0FuZEhhbmRsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlKTtcbiAgICBjb25zdCB2YWx1ZVNvcnRlZCA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XG4gICAgY29uc3Qgb2Zmc2V0U29ydGVkID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlU29ydGVkKTtcbiAgICBjb25zdCBib3VuZFBhcnRzID0gdGhpcy5uelJhbmdlID8gdmFsdWVTb3J0ZWQgYXMgbnVtYmVyW10gOiBbIDAsIHZhbHVlU29ydGVkIF07XG4gICAgY29uc3QgdHJhY2tQYXJ0cyA9IHRoaXMubnpSYW5nZSA/IFsgb2Zmc2V0U29ydGVkWyAwIF0sIG9mZnNldFNvcnRlZFsgMSBdIC0gb2Zmc2V0U29ydGVkWyAwIF0gXSA6IFsgMCwgb2Zmc2V0U29ydGVkIF07XG5cbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgaGFuZGxlLm9mZnNldCA9IHRoaXMubnpSYW5nZSA/IG9mZnNldFsgaW5kZXggXSA6IG9mZnNldDtcbiAgICAgIGhhbmRsZS52YWx1ZSA9IHRoaXMubnpSYW5nZSA/IHZhbHVlWyBpbmRleCBdIDogdmFsdWU7XG4gICAgfSk7XG4gICAgWyB0aGlzLmJvdW5kcy5sb3dlciwgdGhpcy5ib3VuZHMudXBwZXIgXSA9IGJvdW5kUGFydHM7XG4gICAgWyB0aGlzLnRyYWNrLm9mZnNldCwgdGhpcy50cmFjay5sZW5ndGggXSA9IHRyYWNrUGFydHM7XG4gIH1cblxuICB0b01hcmtzQXJyYXkobWFya3M6IE1hcmtzKTogTWFya3NbXSB7XG4gICAgY29uc3QgbWFya3NBcnJheSA9IFtdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIG1hcmtzKSB7XG4gICAgICBjb25zdCBtYXJrID0gbWFya3NbIGtleSBdO1xuICAgICAgY29uc3QgdmFsID0gdHlwZW9mIGtleSA9PT0gJ251bWJlcicgPyBrZXkgOiBwYXJzZUZsb2F0KGtleSk7XG4gICAgICBpZiAodmFsIDwgdGhpcy5uek1pbiB8fCB2YWwgPiB0aGlzLm56TWF4KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbWFya3NBcnJheS5wdXNoKHsgdmFsdWU6IHZhbCwgb2Zmc2V0OiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSwgY29uZmlnOiBtYXJrIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWFya3NBcnJheTtcbiAgfVxuXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IEV2ZW50IGxpc3RlbmVycyAmIGJpbmRpbmdzXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIG9uRHJhZ1N0YXJ0KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvZygnW29uRHJhZ1N0YXJ0XWRyYWdnaW5nIHZhbHVlID0gJywgdmFsdWUpO1xuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyh0cnVlKTtcbiAgICAvLyBjYWNoZSBET00gbGF5b3V0L3JlZmxvdyBvcGVyYXRpb25zXG4gICAgdGhpcy5jYWNoZVNsaWRlclByb3BlcnR5KCk7XG4gICAgLy8gdHJpZ2dlciBkcmFnIHN0YXJ0XG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZUluZGV4KHZhbHVlKTtcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcbiAgICAvLyBUb29sdGlwIHZpc2liaWxpdHkgb2YgaGFuZGxlc1xuICAgIHRoaXMuX3Nob3dIYW5kbGVUb29sdGlwKHRoaXMubnpSYW5nZSA/IHRoaXMuYWN0aXZlVmFsdWVJbmRleCA6IDApO1xuICB9XG5cbiAgb25EcmFnTW92ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sb2coJ1tvbkRyYWdNb3ZlXWRyYWdnaW5nIHZhbHVlID0gJywgdmFsdWUpO1xuICAgIC8vIHRyaWdnZXIgZHJhZyBtb3ZpbmdcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIG9uRHJhZ0VuZCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvZygnW29uRHJhZ0VuZF0nKTtcbiAgICB0aGlzLnRvZ2dsZURyYWdNb3ZpbmcoZmFsc2UpO1xuICAgIHRoaXMubnpPbkFmdGVyQ2hhbmdlLmVtaXQodGhpcy5nZXRWYWx1ZSh0cnVlKSk7XG4gICAgLy8gcmVtb3ZlIGNhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnNcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkodHJ1ZSk7XG4gICAgLy8gSGlkZSBhbGwgdG9vbHRpcFxuICAgIHRoaXMuX2hpZGVBbGxIYW5kbGVUb29sdGlwKCk7XG4gIH1cblxuICBjcmVhdGVEcmFnKCk6IHZvaWQge1xuICAgIGNvbnN0IHNsaWRlckRPTSA9IHRoaXMuc2xpZGVyRE9NO1xuICAgIGNvbnN0IG9yaWVudEZpZWxkID0gdGhpcy5uelZlcnRpY2FsID8gJ3BhZ2VZJyA6ICdwYWdlWCc7XG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0ICAgOiAnbW91c2Vkb3duJywgbW92ZTogJ21vdXNlbW92ZScsIGVuZDogJ21vdXNldXAnLFxuICAgICAgcGx1Y2tLZXk6IFsgb3JpZW50RmllbGQgXVxuICAgIH07XG4gICAgY29uc3QgdG91Y2g6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcbiAgICAgIHN0YXJ0ICAgOiAndG91Y2hzdGFydCcsIG1vdmU6ICd0b3VjaG1vdmUnLCBlbmQ6ICd0b3VjaGVuZCcsXG4gICAgICBwbHVja0tleTogWyAndG91Y2hlcycsICcwJywgb3JpZW50RmllbGQgXSxcbiAgICAgIGZpbHRlciAgOiAoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+ICF0aGlzLnV0aWxzLmlzTm90VG91Y2hFdmVudChlIGFzIFRvdWNoRXZlbnQpXG4gICAgfTtcbiAgICAvLyBtYWtlIG9ic2VydmFibGVzXG4gICAgWyBtb3VzZSwgdG91Y2ggXS5mb3JFYWNoKHNvdXJjZSA9PiB7XG4gICAgICBjb25zdCB7IHN0YXJ0LCBtb3ZlLCBlbmQsIHBsdWNrS2V5LCBmaWx0ZXI6IGZpbHRlckZ1bmMgPSAoKCkgPT4gdHJ1ZSkgfSA9IHNvdXJjZTtcbiAgICAgIC8vIHN0YXJ0XG4gICAgICBzb3VyY2Uuc3RhcnRQbHVja2VkJCA9IGZyb21FdmVudChzbGlkZXJET00sIHN0YXJ0KS5waXBlKFxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXG4gICAgICAgIHRhcCh0aGlzLnV0aWxzLnBhdXNlRXZlbnQpLFxuICAgICAgICBwbHVjayguLi5wbHVja0tleSksXG4gICAgICAgIG1hcCgocG9zaXRpb246IG51bWJlcikgPT4gdGhpcy5maW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uKSlcbiAgICAgICk7XG4gICAgICAvLyBlbmRcbiAgICAgIHNvdXJjZS5lbmQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBlbmQpO1xuICAgICAgLy8gcmVzb2x2ZSBtb3ZlXG4gICAgICBzb3VyY2UubW92ZVJlc29sdmVkJCA9IGZyb21FdmVudChkb2N1bWVudCwgbW92ZSkucGlwZShcbiAgICAgICAgZmlsdGVyKGZpbHRlckZ1bmMpLFxuICAgICAgICB0YXAodGhpcy51dGlscy5wYXVzZUV2ZW50KSxcbiAgICAgICAgcGx1Y2soLi4ucGx1Y2tLZXkpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICB0YWtlVW50aWwoc291cmNlLmVuZCQpXG4gICAgICApO1xuICAgICAgLy8gbWVyZ2UgdG8gYmVjb21lIG1vdmluZ1xuICAgICAgLy8gc291cmNlLm1vdmUkID0gc291cmNlLnN0YXJ0UGx1Y2tlZCQubWVyZ2VNYXBUbyhzb3VyY2UubW92ZVJlc29sdmVkJCk7XG4gICAgfSk7XG4gICAgLy8gbWVyZ2UgbW91c2UgYW5kIHRvdWNoIG9ic2VydmFibGVzXG4gICAgdGhpcy5kcmFnc3RhcnQkID0gbWVyZ2UobW91c2Uuc3RhcnRQbHVja2VkJCwgdG91Y2guc3RhcnRQbHVja2VkJCk7XG4gICAgLy8gdGhpcy5kcmFnbW92ZSQgPSBPYnNlcnZhYmxlLm1lcmdlKG1vdXNlLm1vdmUkLCB0b3VjaC5tb3ZlJCk7XG4gICAgdGhpcy5kcmFnbW92ZSQgPSBtZXJnZShtb3VzZS5tb3ZlUmVzb2x2ZWQkLCB0b3VjaC5tb3ZlUmVzb2x2ZWQkKTtcbiAgICB0aGlzLmRyYWdlbmQkID0gbWVyZ2UobW91c2UuZW5kJCwgdG91Y2guZW5kJCk7XG4gIH1cblxuICBzdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWyAnc3RhcnQnLCAnbW92ZScsICdlbmQnIF0pOiB2b2lkIHtcbiAgICB0aGlzLmxvZygnW3N1YnNjcmliZURyYWdddGhpcy5kcmFnc3RhcnQkID0gJywgdGhpcy5kcmFnc3RhcnQkKTtcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdzdGFydCQgJiYgIXRoaXMuZHJhZ3N0YXJ0Xykge1xuICAgICAgdGhpcy5kcmFnc3RhcnRfID0gdGhpcy5kcmFnc3RhcnQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ21vdmUnKSAhPT0gLTEgJiYgdGhpcy5kcmFnbW92ZSQgJiYgIXRoaXMuZHJhZ21vdmVfKSB7XG4gICAgICB0aGlzLmRyYWdtb3ZlXyA9IHRoaXMuZHJhZ21vdmUkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ01vdmUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ2VuZCQgJiYgIXRoaXMuZHJhZ2VuZF8pIHtcbiAgICAgIHRoaXMuZHJhZ2VuZF8gPSB0aGlzLmRyYWdlbmQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZURyYWcocGVyaW9kczogc3RyaW5nW10gPSBbICdzdGFydCcsICdtb3ZlJywgJ2VuZCcgXSk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdbdW5zdWJzY3JpYmVEcmFnXXRoaXMuZHJhZ3N0YXJ0XyA9ICcsIHRoaXMuZHJhZ3N0YXJ0Xyk7XG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignc3RhcnQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnc3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdzdGFydF8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ3N0YXJ0XyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdtb3ZlXykge1xuICAgICAgdGhpcy5kcmFnbW92ZV8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHJhZ21vdmVfID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnZW5kXykge1xuICAgICAgdGhpcy5kcmFnZW5kXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnZW5kXyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJhZ01vdmluZyhtb3ZhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgcGVyaW9kcyA9IFsgJ21vdmUnLCAnZW5kJyBdO1xuICAgIGlmIChtb3ZhYmxlKSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZURyYWdEaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKFsgJ3N0YXJ0JyBdKTtcbiAgICB9XG4gIH1cblxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBVdGlsIGZ1bmN0aW9ucyAodG9vbHMpXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGZpbmQgdGhlIGNsb3Nlc3QgdmFsdWUgZGVwZW5kIG9uIHBvaW50ZXIncyBwb3NpdGlvblxuICBmaW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHNsaWRlclN0YXJ0ID0gdGhpcy5nZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk7XG4gICAgY29uc3Qgc2xpZGVyTGVuZ3RoID0gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcbiAgICBjb25zdCByYXRpbyA9IHRoaXMudXRpbHMuY29ycmVjdE51bUxpbWl0KChwb3NpdGlvbiAtIHNsaWRlclN0YXJ0KSAvIHNsaWRlckxlbmd0aCwgMCwgMSk7XG4gICAgY29uc3QgdmFsID0gKHRoaXMubnpNYXggLSB0aGlzLm56TWluKSAqICh0aGlzLm56VmVydGljYWwgPyAxIC0gcmF0aW8gOiByYXRpbykgKyB0aGlzLm56TWluO1xuICAgIGNvbnN0IHBvaW50cyA9ICh0aGlzLm56TWFya3MgPT09IG51bGwgPyBbXSA6IE9iamVjdC5rZXlzKHRoaXMubnpNYXJrcykubWFwKHBhcnNlRmxvYXQpKTtcbiAgICAvLyBwdXNoIGNsb3Nlc3Qgc3RlcFxuICAgIGlmICh0aGlzLm56U3RlcCAhPT0gbnVsbCAmJiAhdGhpcy5uekRvdHMpIHtcbiAgICAgIGNvbnN0IGNsb3Nlc3RPbmUgPSBNYXRoLnJvdW5kKHZhbCAvIHRoaXMubnpTdGVwKSAqIHRoaXMubnpTdGVwO1xuICAgICAgcG9pbnRzLnB1c2goY2xvc2VzdE9uZSk7XG4gICAgfVxuICAgIC8vIGNhbGN1bGF0ZSBnYXBzXG4gICAgY29uc3QgZ2FwcyA9IHBvaW50cy5tYXAocG9pbnQgPT4gTWF0aC5hYnModmFsIC0gcG9pbnQpKTtcbiAgICBjb25zdCBjbG9zZXN0ID0gcG9pbnRzWyBnYXBzLmluZGV4T2YoTWF0aC5taW4oLi4uZ2FwcykpIF07XG4gICAgLy8gcmV0dXJuIHRoZSBmaXhlZFxuICAgIHJldHVybiB0aGlzLm56U3RlcCA9PT0gbnVsbCA/IGNsb3Nlc3QgOlxuICAgICAgcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQodGhpcy51dGlscy5nZXRQcmVjaXNpb24odGhpcy5uelN0ZXApKSk7XG4gIH1cblxuICB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnV0aWxzLnZhbHVlVG9PZmZzZXQodGhpcy5uek1pbiwgdGhpcy5uek1heCwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyU3RhcnQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMudXRpbHMuZ2V0RWxlbWVudE9mZnNldCh0aGlzLnNsaWRlckRPTSk7XG4gICAgcmV0dXJuIHRoaXMubnpWZXJ0aWNhbCA/IG9mZnNldC50b3AgOiBvZmZzZXQubGVmdDtcbiAgfVxuXG4gIGdldFNsaWRlckxlbmd0aCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVNsaWRlckxlbmd0aDtcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XG4gICAgcmV0dXJuIHRoaXMubnpWZXJ0aWNhbCA/XG4gICAgICBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgLy8gY2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9ucyBmb3IgcGVyZm9ybWFuY2UgKG1heSBub3QgbmVjZXNzYXJ5PylcbiAgY2FjaGVTbGlkZXJQcm9wZXJ0eShyZW1vdmU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuY2FjaGVTbGlkZXJTdGFydCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcbiAgICB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyTGVuZ3RoKCk7XG4gIH1cblxuICBmb3JtYXRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiBTbGlkZXJWYWx1ZSB7IC8vIE5PVEU6IHdpbGwgcmV0dXJuIG5ldyB2YWx1ZVxuICAgIGxldCByZXMgPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuY2hlY2tWYWxpZFZhbHVlKHZhbHVlKSkgeyAvLyBpZiBlbXB0eSwgdXNlIGRlZmF1bHQgdmFsdWVcbiAgICAgIHJlcyA9IHRoaXMubnpEZWZhdWx0VmFsdWUgPT09IG51bGwgP1xuICAgICAgICAodGhpcy5uelJhbmdlID8gWyB0aGlzLm56TWluLCB0aGlzLm56TWF4IF0gOiB0aGlzLm56TWluKSA6IHRoaXMubnpEZWZhdWx0VmFsdWU7XG4gICAgfSBlbHNlIHsgLy8gZm9ybWF0XG4gICAgICAvLyBUT0RPOiB1c2luZyB0eXBlIGd1YXJkLCByZW1vdmUgdHlwZSBjYXN0XG4gICAgICByZXMgPSB0aGlzLm56UmFuZ2UgP1xuICAgICAgICAodmFsdWUgYXMgbnVtYmVyW10pLm1hcCh2YWwgPT4gdGhpcy51dGlscy5jb3JyZWN0TnVtTGltaXQodmFsLCB0aGlzLm56TWluLCB0aGlzLm56TWF4KSkgOlxuICAgICAgICB0aGlzLnV0aWxzLmNvcnJlY3ROdW1MaW1pdCh2YWx1ZSBhcyBudW1iZXIsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgdmFsaWQgYW5kIHRocm93IGVycm9yIGlmIHZhbHVlLXR5cGUvcmFuZ2Ugbm90IG1hdGNoXG4gIGNoZWNrVmFsaWRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUpOiBib29sZWFuIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMubnpSYW5nZTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gaXQncyBhbiBpbnZhbGlkIHZhbHVlLCBqdXN0IHJldHVyblxuICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBsZXQgcGFyc2VkVmFsdWU6IG51bWJlciA9IHZhbHVlO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgcGFyc2VkVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc05hTihwYXJzZWRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSAvLyBpdCdzIGFuIGludmFsaWQgdmFsdWUsIGp1c3QgcmV0dXJuXG4gICAgfVxuICAgIGlmIChpc0FycmF5ICE9PSAhIXJhbmdlKSB7IC8vIHZhbHVlIHR5cGUgbm90IG1hdGNoXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIm56UmFuZ2VcIiBjYW4ndCBtYXRjaCB0aGUgXCJuelZhbHVlXCIncyB0eXBlLCBwbGVhc2UgY2hlY2sgdGhlc2UgcHJvcGVydGllczogXCJuelJhbmdlXCIsIFwibnpWYWx1ZVwiLCBcIm56RGVmYXVsdFZhbHVlXCIuYCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNWYWx1ZUVxdWFsKHZhbHVlOiBTbGlkZXJWYWx1ZSwgdmFsOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IHR5cGVvZiB2YWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBjb25zdCBsZW4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmICh2YWx1ZVsgaSBdICE9PSB2YWxbIGkgXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIC8vIHByaW50IGRlYnVnIGluZm9cbiAgLy8gVE9ETzogc2hvdWxkIG5vdCBrZXB0IGluIGNvbXBvbmVudFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGxvZyguLi5tZXNzYWdlczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRlYnVnSWQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbIGBbbnotc2xpZGVyXVsjJHt0aGlzLm56RGVidWdJZH1dIGAgXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICAvLyBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycydcbiAgcHJpdmF0ZSBfc2hvd0hhbmRsZVRvb2x0aXAoaGFuZGxlSW5kZXg6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZXMuZm9yRWFjaCgoaGFuZGxlLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVzWyBpbmRleCBdLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGVBbGxIYW5kbGVUb29sdGlwKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKGhhbmRsZSA9PiBoYW5kbGUuYWN0aXZlID0gZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVIYW5kbGVzKGFtb3VudDogbnVtYmVyKTogU2xpZGVySGFuZGxlW10ge1xuICAgIGNvbnN0IGhhbmRsZXM6IFNsaWRlckhhbmRsZVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7IGkrKykge1xuICAgICAgaGFuZGxlcy5wdXNoKHsgb2Zmc2V0OiBudWxsLCB2YWx1ZTogbnVsbCwgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZXM7XG4gIH1cblxufVxuIl19