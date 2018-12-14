/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { Marks } from './nz-slider-marks.component';
import { NzSliderService } from './nz-slider.service';
export class SliderHandle {
}
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
export class NzSliderComponent {
    /**
     * @param {?} utils
     */
    constructor(utils) {
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
        this.onTouched = () => {
        };
        this.isDragging = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        this._vertical = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzRange(value) {
        this._range = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzRange() {
        return this._range;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDots(value) {
        this._dots = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDots() {
        return this._dots;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIncluded(value) {
        this._included = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzIncluded() {
        return this._included;
    }
    /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    setValue(val, isWriteValue = false) {
        if (isWriteValue) { // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            this.value = this.formatValue(val);
            this.log(`[ngModel:setValue/writeValue]Update track & handles`);
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
                this.log(`[Normal:setValue]Update track & handles`);
                this.updateTrackAndHandles();
                this.log(`[Normal:setValue]onValueChange`, val);
                if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    this.onValueChange(this.value);
                }
            }
        }
    }
    /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    getValue(cloneAndSort = false) {
        // TODO: using type guard, remove type cast
        if (cloneAndSort && this.nzRange) { // clone & sort range values
            // clone & sort range values
            return this.utils.cloneArray(/** @type {?} */ (this.value)).sort((a, b) => a - b);
        }
        return this.value;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    getValueToOffset(value) {
        /** @type {?} */
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        // TODO: using type guard, remove type cast
        return this.nzRange ?
            (/** @type {?} */ (normalizedValue)).map(val => this.valueToOffset(val)) :
            this.valueToOffset(/** @type {?} */ (normalizedValue));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.log(`[ngModel/writeValue]current writing value = `, val);
        this.setValue(val, true);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDisabled, nzMarks, nzRange } = changes;
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeDrag();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-disabled`]: this.nzDisabled,
            [`${this.prefixCls}-vertical`]: this.nzVertical,
            [`${this.prefixCls}-with-marks`]: this.marksArray ? this.marksArray.length : 0
        };
    }
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValueIndex(pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            let minimal = null;
            /** @type {?} */
            let gap;
            /** @type {?} */
            let activeIndex;
            // TODO: using type guard, remove type cast
            (/** @type {?} */ (this.getValue())).forEach((val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < minimal) {
                    minimal = gap;
                    activeIndex = index;
                }
            });
            this.activeValueIndex = activeIndex;
        }
    }
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValue(pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            const newValue = this.utils.cloneArray(/** @type {?} */ (this.value));
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * @return {?}
     */
    updateTrackAndHandles() {
        /** @type {?} */
        const value = this.getValue();
        /** @type {?} */
        const offset = this.getValueToOffset(value);
        /** @type {?} */
        const valueSorted = this.getValue(true);
        /** @type {?} */
        const offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        const boundParts = this.nzRange ? /** @type {?} */ (valueSorted) : [0, valueSorted];
        /** @type {?} */
        const trackParts = this.nzRange ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((handle, index) => {
            handle.offset = this.nzRange ? offset[index] : offset;
            handle.value = this.nzRange ? value[index] : value;
        });
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
    }
    /**
     * @param {?} marks
     * @return {?}
     */
    toMarksArray(marks) {
        /** @type {?} */
        const marksArray = [];
        for (const key in marks) {
            /** @type {?} */
            const mark = marks[key];
            /** @type {?} */
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val < this.nzMin || val > this.nzMax) {
                continue;
            }
            marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
        }
        return marksArray;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDragStart(value) {
        this.log('[onDragStart]dragging value = ', value);
        this.toggleDragMoving(true);
        // cache DOM layout/reflow operations
        this.cacheSliderProperty();
        // trigger drag start
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        // Tooltip visibility of handles
        this._showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDragMove(value) {
        this.log('[onDragMove]dragging value = ', value);
        // trigger drag moving
        this.setActiveValue(value);
    }
    /**
     * @return {?}
     */
    onDragEnd() {
        this.log('[onDragEnd]');
        this.toggleDragMoving(false);
        this.nzOnAfterChange.emit(this.getValue(true));
        // remove cache DOM layout/reflow operations
        this.cacheSliderProperty(true);
        // Hide all tooltip
        this._hideAllHandleTooltip();
    }
    /**
     * @return {?}
     */
    createDrag() {
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        /** @type {?} */
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        const mouse = {
            start: 'mousedown', move: 'mousemove', end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        const touch = {
            start: 'touchstart', move: 'touchmove', end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (e) => !this.utils.isNotTouchEvent(/** @type {?} */ (e))
        };
        // make observables
        [mouse, touch].forEach(source => {
            const { start, move, end, pluckKey, filter: filterFunc = (() => true) } = source;
            // start
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(this.utils.pauseEvent), pluck(...pluckKey), map((position) => this.findClosestValue(position)));
            // end
            source.end$ = fromEvent(document, end);
            // resolve move
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(this.utils.pauseEvent), pluck(...pluckKey), distinctUntilChanged(), map((position) => this.findClosestValue(position)), distinctUntilChanged(), takeUntil(source.end$));
            // merge to become moving
            // source.move$ = source.startPlucked$.mergeMapTo(source.moveResolved$);
        });
        // merge mouse and touch observables
        this.dragstart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        // this.dragmove$ = Observable.merge(mouse.move$, touch.move$);
        this.dragmove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragend$ = merge(mouse.end$, touch.end$);
    }
    /**
     * @param {?=} periods
     * @return {?}
     */
    subscribeDrag(periods = ['start', 'move', 'end']) {
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
    }
    /**
     * @param {?=} periods
     * @return {?}
     */
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
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
    }
    /**
     * @param {?} movable
     * @return {?}
     */
    toggleDragMoving(movable) {
        /** @type {?} */
        const periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    findClosestValue(position) {
        /** @type {?} */
        const sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        const sliderLength = this.getSliderLength();
        /** @type {?} */
        const ratio = this.utils.correctNumLimit((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        const points = (this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat));
        // push closest step
        if (this.nzStep !== null && !this.nzDots) {
            /** @type {?} */
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        const gaps = points.map(point => Math.abs(val - point));
        /** @type {?} */
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        // return the fixed
        return this.nzStep === null ? closest :
            parseFloat(closest.toFixed(this.utils.getPrecision(this.nzStep)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    valueToOffset(value) {
        return this.utils.valueToOffset(this.nzMin, this.nzMax, value);
    }
    /**
     * @return {?}
     */
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        const offset = this.utils.getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    }
    /**
     * @return {?}
     */
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        return this.nzVertical ?
            sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * @param {?=} remove
     * @return {?}
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        /** @type {?} */
        let res = value;
        if (!this.checkValidValue(value)) { // if empty, use default value
            // if empty, use default value
            res = this.nzDefaultValue === null ?
                (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else { // format
            // format
            // TODO: using type guard, remove type cast
            res = this.nzRange ?
                (/** @type {?} */ (value)).map(val => this.utils.correctNumLimit(val, this.nzMin, this.nzMax)) :
                this.utils.correctNumLimit(/** @type {?} */ (value), this.nzMin, this.nzMax);
        }
        return res;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    checkValidValue(value) {
        /** @type {?} */
        const range = this.nzRange;
        if (value === null || value === undefined) {
            return false;
        }
        /** @type {?} */
        const isArray = Array.isArray(value);
        if (!Array.isArray(value)) {
            /** @type {?} */
            let parsedValue = value;
            if (typeof value !== 'number') {
                parsedValue = parseFloat(value);
            }
            if (isNaN(parsedValue)) {
                return false;
            } // it's an invalid value, just return
        }
        if (isArray !== !!range) { // value type not match
            // value type not match
            throw new Error(`The "nzRange" can't match the "nzValue"'s type, please check these properties: "nzRange", "nzValue", "nzDefaultValue".`);
        }
        return true;
    }
    /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    isValueEqual(value, val) {
        if (typeof value !== typeof val) {
            return false;
        }
        if (Array.isArray(value)) {
            /** @type {?} */
            const len = value.length;
            for (let i = 0; i < len; i++) {
                if (value[i] !== val[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return value === val;
        }
    }
    /**
     * @param {...?} messages
     * @return {?}
     */
    log(...messages) {
        if (this.nzDebugId !== null) {
            /** @type {?} */
            const args = [`[nz-slider][#${this.nzDebugId}] `].concat(Array.prototype.slice.call(arguments));
            console.log.apply(null, args);
        }
    }
    /**
     * @param {?=} handleIndex
     * @return {?}
     */
    _showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((handle, index) => {
            this.handles[index].active = index === handleIndex;
        });
    }
    /**
     * @return {?}
     */
    _hideAllHandleTooltip() {
        this.handles.forEach(handle => handle.active = false);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    _generateHandles(amount) {
        /** @type {?} */
        const handles = [];
        for (let i = 0; i < amount; i++) {
            handles.push({ offset: null, value: null, active: false });
        }
        return handles;
    }
}
NzSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-slider',
                preserveWhitespaces: false,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzSliderComponent),
                        multi: true
                    }],
                template: "<div #slider [ngClass]=\"classMap\">\n  <div class=\"ant-slider-rail\"></div>\n  <nz-slider-track\n    nzClassName=\"{{prefixCls}}-track\"\n    [nzVertical]=\"nzVertical\"\n    [nzIncluded]=\"nzIncluded\"\n    [nzOffset]=\"track.offset\"\n    [nzLength]=\"track.length\"\n  ></nz-slider-track>\n  <nz-slider-step *ngIf=\"marksArray\"\n    nzPrefixCls=\"{{prefixCls}}\"\n    [nzVertical]=\"nzVertical\"\n    [nzLowerBound]=\"bounds.lower\"\n    [nzUpperBound]=\"bounds.upper\"\n    [nzMarksArray]=\"marksArray\"\n    [nzIncluded]=\"nzIncluded\"\n  ></nz-slider-step>\n  <nz-slider-handle\n    *ngFor=\"let handle of handles;\"\n    nzClassName=\"{{prefixCls}}-handle\"\n    [nzVertical]=\"nzVertical\"\n    [nzOffset]=\"handle.offset\"\n    [nzValue]=\"handle.value\"\n    [nzActive]=\"handle.active\"\n    [nzTipFormatter]=\"nzTipFormatter\"\n  ></nz-slider-handle>\n  <nz-slider-marks *ngIf=\"marksArray\"\n    nzClassName=\"{{prefixCls}}-mark\"\n    [nzVertical]=\"nzVertical\"\n    [nzMin]=\"nzMin\"\n    [nzMax]=\"nzMax\"\n    [nzLowerBound]=\"bounds.lower\"\n    [nzUpperBound]=\"bounds.upper\"\n    [nzMarksArray]=\"marksArray\"\n    [nzIncluded]=\"nzIncluded\"\n  ></nz-slider-marks>\n</div>"
            }] }
];
/** @nocollapse */
NzSliderComponent.ctorParameters = () => [
    { type: NzSliderService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxLQUFLLEVBQWMsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdEQsTUFBTTtDQUlMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJELE1BQU07Ozs7SUFtS0osWUFBb0IsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7O3lCQWhLSixJQUFJOztzQkFheEIsQ0FBQzt1QkFDTyxJQUFJO3FCQUNiLENBQUM7cUJBQ0QsR0FBRzs4QkFDbUIsSUFBSTsrQkFFZixJQUFJLFlBQVksRUFBZTt5QkF1Q3ZDLEtBQUs7cUJBQ1QsS0FBSzt5QkFDRCxJQUFJO3NCQUNQLEtBQUs7eUJBQ0YsS0FBSztxQkFFSixJQUFJO2dDQUdFLElBQUk7aUNBQ0gsSUFBSTt5QkFDcEIsWUFBWTtnQ0FFRyxJQUFJO3FCQUN2QixFQUFFLE1BQU0s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bmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgcGx1Y2ssIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE1hcmtzLCBNYXJrc0FycmF5IH0gZnJvbSAnLi9uei1zbGlkZXItbWFya3MuY29tcG9uZW50JztcbmltcG9ydCB7IE56U2xpZGVyU2VydmljZSB9IGZyb20gJy4vbnotc2xpZGVyLnNlcnZpY2UnO1xuXG5leHBvcnQgdHlwZSBTbGlkZXJWYWx1ZSA9IG51bWJlcltdIHwgbnVtYmVyO1xuXG5leHBvcnQgY2xhc3MgU2xpZGVySGFuZGxlIHtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyB7XG4gIHN0YXJ0OiBzdHJpbmc7XG4gIG1vdmU6IHN0cmluZztcbiAgZW5kOiBzdHJpbmc7XG4gIHBsdWNrS2V5OiBzdHJpbmdbXTtcblxuICBmaWx0ZXI/KGU6IEV2ZW50KTogYm9vbGVhbjtcblxuICBzdGFydFBsdWNrZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBlbmQkPzogT2JzZXJ2YWJsZTxFdmVudD47XG4gIG1vdmVSZXNvbHZlZCQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsge1xuICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelNsaWRlckNvbXBvbmVudCksXG4gICAgbXVsdGkgICAgICA6IHRydWVcbiAgfSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zbGlkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIC8vIERlYnVnZ2luZ1xuICBASW5wdXQoKSBuekRlYnVnSWQ6IG51bWJlciB8IHN0cmluZyA9IG51bGw7IC8vIHNldCB0aGlzIGlkIHdpbGwgcHJpbnQgZGVidWcgaW5mb3JtYXRpb25zIHRvIGNvbnNvbGVcblxuICAvLyBEeW5hbWljIHByb3BlcnR5IHNldHRpbmdzXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgLy8gU3RhdGljIGNvbmZpZ3VyYXRpb25zIChwcm9wZXJ0aWVzIHRoYXQgY2FuIG9ubHkgc3BlY2lmeSBvbmNlKVxuICBASW5wdXQoKSBuelN0ZXAgPSAxO1xuICBASW5wdXQoKSBuek1hcmtzOiBNYXJrcyA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWluID0gMDtcbiAgQElucHV0KCkgbnpNYXggPSAxMDA7XG4gIEBJbnB1dCgpIG56RGVmYXVsdFZhbHVlOiBTbGlkZXJWYWx1ZSA9IG51bGw7XG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xuICBAT3V0cHV0KCkgbnpPbkFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTbGlkZXJWYWx1ZT4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelJhbmdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmFuZ2UgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56UmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RG90cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RvdHMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RG90cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZG90cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekluY2x1ZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5jbHVkZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56SW5jbHVkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xuICB9XG5cbiAgLy8gSW5zaWRlIHByb3BlcnRpZXNcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZG90cyA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmNsdWRlZCA9IHRydWU7XG4gIHByaXZhdGUgX3JhbmdlID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XG5cbiAgdmFsdWU6IFNsaWRlclZhbHVlID0gbnVsbDsgLy8gQ09SRSB2YWx1ZSBzdGF0ZVxuICBAVmlld0NoaWxkKCdzbGlkZXInKSBzbGlkZXI6IEVsZW1lbnRSZWY7XG4gIHNsaWRlckRPTTogSFRNTERpdkVsZW1lbnQ7XG4gIGNhY2hlU2xpZGVyU3RhcnQ6IG51bWJlciA9IG51bGw7XG4gIGNhY2hlU2xpZGVyTGVuZ3RoOiBudW1iZXIgPSBudWxsO1xuICBwcmVmaXhDbHMgPSAnYW50LXNsaWRlcic7XG4gIGNsYXNzTWFwOiBvYmplY3Q7XG4gIGFjdGl2ZVZhbHVlSW5kZXg6IG51bWJlciA9IG51bGw7IC8vIEN1cnJlbnQgYWN0aXZhdGVkIGhhbmRsZSdzIGluZGV4IE9OTFkgZm9yIHJhbmdlPXRydWVcbiAgdHJhY2sgPSB7IG9mZnNldDogbnVsbCwgbGVuZ3RoOiBudWxsIH07IC8vIFRyYWNrJ3Mgb2Zmc2V0IGFuZCBsZW5ndGhcbiAgaGFuZGxlczogU2xpZGVySGFuZGxlW107IC8vIEhhbmRsZXMnIG9mZnNldFxuICBtYXJrc0FycmF5OiBNYXJrc1tdOyAvLyBcIm1hcmtzXCIgaW4gYXJyYXkgdHlwZSB3aXRoIG1vcmUgZGF0YSAmIEZJTFRFUiBvdXQgdGhlIGludmFsaWQgbWFya1xuICBib3VuZHMgPSB7IGxvd2VyOiBudWxsLCB1cHBlcjogbnVsbCB9OyAvLyBub3cgZm9yIG56LXNsaWRlci1zdGVwXG4gIG9uVmFsdWVDaGFuZ2U6ICh2YWx1ZTogU2xpZGVyVmFsdWUpID0+IHZvaWQ7IC8vIFVzZWQgYnkgbmdNb2RlbC4gQlVHOiBvblZhbHVlQ2hhbmdlKCkgd2lsbCBub3Qgc3VjY2VzcyB0byBlZmZlY3QgdGhlIFwidmFsdWVcIiB2YXJpYWJsZSAoIFsobmdNb2RlbCldPVwidmFsdWVcIiApIHdoZW4gdGhlIGZpcnN0IGluaXRpYWxpemluZywgZXhjZXB0IHVzaW5nIFwibmV4dFRpY2tcIiBmdW5jdGlvbmFsaXR5IChNQVkgYW5ndWxhcjIncyBwcm9ibGVtID8pXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHtcbiAgfSAvLyBvblRvdWNoIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgdmlhIHJlZ2lzdGVyT25Ub3VjaCAoQ29udHJvbFZhbHVlQWNjZXNzb3IpLlxuICBpc0RyYWdnaW5nID0gZmFsc2U7IC8vIEN1cnJlbnQgZHJhZ2dpbmcgc3RhdGVcblxuICAvLyBFdmVudHMgb2JzZXJ2YWJsZXMgJiBzdWJzY3JpcHRpb25zXG4gIGRyYWdzdGFydCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgZHJhZ21vdmUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIGRyYWdlbmQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgZHJhZ3N0YXJ0XzogU3Vic2NyaXB0aW9uO1xuICBkcmFnbW92ZV86IFN1YnNjcmlwdGlvbjtcbiAgZHJhZ2VuZF86IFN1YnNjcmlwdGlvbjtcblxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCB2YWx1ZSBhY2Nlc3NvcnMgJiBuZ01vZGVsIGFjY2Vzc29yc1xuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBzZXRWYWx1ZSh2YWw6IFNsaWRlclZhbHVlLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChpc1dyaXRlVmFsdWUpIHsgLy8gW25nTW9kZWwtd3JpdGVWYWx1ZV06IEZvcm1hdHRpbmcgYmVmb3JlIHNldHRpbmcgdmFsdWUsIGFsd2F5cyB1cGRhdGUgY3VycmVudCB2YWx1ZSwgYnV0IHRyaWdnZXIgb25WYWx1ZUNoYW5nZSBPTkxZIHdoZW4gdGhlIFwiZm9ybWF0dGVkIHZhbHVlXCIgbm90IGVxdWFscyBcImlucHV0IHZhbHVlXCJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKHZhbCk7XG4gICAgICB0aGlzLmxvZyhgW25nTW9kZWw6c2V0VmFsdWUvd3JpdGVWYWx1ZV1VcGRhdGUgdHJhY2sgJiBoYW5kbGVzYCk7XG4gICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xuICAgICAgLy8gaWYgKCF0aGlzLmlzVmFsdWVFcXVhbCh0aGlzLnZhbHVlLCB2YWwpKSB7XG4gICAgICAvLyAgIHRoaXMubG9nKGBbbmdNb2RlbDpzZXRWYWx1ZS93cml0ZVZhbHVlXW9uVmFsdWVDaGFuZ2VgLCB2YWwpO1xuICAgICAgLy8gICBpZiAodGhpcy5vblZhbHVlQ2hhbmdlKSB7IC8vIE5PVEU6IG9uVmFsdWVDaGFuZ2Ugd2lsbCBiZSB1bmF2YWlsYWJsZSB3aGVuIHdyaXRlVmFsdWUoKSBjYWxsZWQgYXQgdGhlIGZpcnN0IHRpbWVcbiAgICAgIC8vICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICB9IGVsc2UgeyAvLyBbTm9ybWFsXTogc2V0dGluZyB2YWx1ZSwgT05MWSBjaGVjayBjaGFuZ2VkLCB0aGVuIHVwZGF0ZSBhbmQgdHJpZ2dlciBvblZhbHVlQ2hhbmdlXG4gICAgICBpZiAoIXRoaXMuaXNWYWx1ZUVxdWFsKHRoaXMudmFsdWUsIHZhbCkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5sb2coYFtOb3JtYWw6c2V0VmFsdWVdVXBkYXRlIHRyYWNrICYgaGFuZGxlc2ApO1xuICAgICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xuICAgICAgICB0aGlzLmxvZyhgW05vcm1hbDpzZXRWYWx1ZV1vblZhbHVlQ2hhbmdlYCwgdmFsKTtcbiAgICAgICAgaWYgKHRoaXMub25WYWx1ZUNoYW5nZSkgeyAvLyBOT1RFOiBvblZhbHVlQ2hhbmdlIHdpbGwgYmUgdW5hdmFpbGFibGUgd2hlbiB3cml0ZVZhbHVlKCkgY2FsbGVkIGF0IHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUoY2xvbmVBbmRTb3J0OiBib29sZWFuID0gZmFsc2UpOiBTbGlkZXJWYWx1ZSB7XG4gICAgLy8gVE9ETzogdXNpbmcgdHlwZSBndWFyZCwgcmVtb3ZlIHR5cGUgY2FzdFxuICAgIGlmIChjbG9uZUFuZFNvcnQgJiYgdGhpcy5uelJhbmdlKSB7IC8vIGNsb25lICYgc29ydCByYW5nZSB2YWx1ZXNcbiAgICAgIHJldHVybiB0aGlzLnV0aWxzLmNsb25lQXJyYXkodGhpcy52YWx1ZSBhcyBudW1iZXJbXSkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8vIGNsb25lICYgc29ydCBjdXJyZW50IHZhbHVlIGFuZCBjb252ZXJ0IHRoZW0gdG8gb2Zmc2V0cywgdGhlbiByZXR1cm4gdGhlIG5ldyBvbmVcbiAgZ2V0VmFsdWVUb09mZnNldCh2YWx1ZT86IFNsaWRlclZhbHVlKTogU2xpZGVyVmFsdWUge1xuICAgIGxldCBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIG5vcm1hbGl6ZWRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XG4gICAgfVxuICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICByZXR1cm4gdGhpcy5uelJhbmdlID9cbiAgICAgIChub3JtYWxpemVkVmFsdWUgYXMgbnVtYmVyW10pLm1hcCh2YWwgPT4gdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCkpIDpcbiAgICAgIHRoaXMudmFsdWVUb09mZnNldChub3JtYWxpemVkVmFsdWUgYXMgbnVtYmVyKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBTbGlkZXJWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMubG9nKGBbbmdNb2RlbC93cml0ZVZhbHVlXWN1cnJlbnQgd3JpdGluZyB2YWx1ZSA9IGAsIHZhbCk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBTbGlkZXJWYWx1ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25WYWx1ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBMaWZlY3ljbGUgaG9va3NcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1dGlsczogTnpTbGlkZXJTZXJ2aWNlKSB7XG4gIH1cblxuICAvLyBpbml0aWFsaXplIGV2ZW50IGJpbmRpbmcsIGNsYXNzIGluaXQsIGV0Yy4gKGNhbGxlZCBvbmx5IG9uY2UpXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluaXRpYWwgY2hlY2tpbmdcbiAgICB0aGlzLmNoZWNrVmFsaWRWYWx1ZSh0aGlzLm56RGVmYXVsdFZhbHVlKTsgLy8gY2hlY2sgbnpEZWZhdWx0VmFsdWVcbiAgICAvLyBkZWZhdWx0IGhhbmRsZXNcbiAgICB0aGlzLmhhbmRsZXMgPSB0aGlzLl9nZW5lcmF0ZUhhbmRsZXModGhpcy5uelJhbmdlID8gMiA6IDEpO1xuICAgIC8vIGluaXRpYWxpemVcbiAgICB0aGlzLnNsaWRlckRPTSA9IHRoaXMuc2xpZGVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcbiAgICB9IC8vIGluaXQgd2l0aCBkZWZhdWx0IHZhbHVlXG4gICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5uek1hcmtzID09PSBudWxsID8gbnVsbCA6IHRoaXMudG9NYXJrc0FycmF5KHRoaXMubnpNYXJrcyk7XG4gICAgLy8gZXZlbnQgYmluZGluZ3NcbiAgICB0aGlzLmNyZWF0ZURyYWcoKTtcbiAgICAvLyBpbml0aWFsaXplIGRyYWcncyBkaXNhYmxlZCBzdGF0dXNcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZCh0aGlzLm56RGlzYWJsZWQpO1xuICAgIC8vIHRoZSBmaXJzdCB0aW1lIHRvIGluaXQgY2xhc3Nlc1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56RGlzYWJsZWQsIG56TWFya3MsIG56UmFuZ2UgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56RGlzYWJsZWQgJiYgIW56RGlzYWJsZWQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKG56RGlzYWJsZWQuY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9IGVsc2UgaWYgKG56TWFya3MgJiYgIW56TWFya3MuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMudG9NYXJrc0FycmF5KHRoaXMubnpNYXJrcykgOiBudWxsO1xuICAgIH0gZWxzZSBpZiAobnpSYW5nZSAmJiAhbnpSYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTsgLy8gQ2hhbmdlIHRvIGRlZmF1bHQgdmFsdWUgd2hlbiBuelJhbmdlIGNoYW5nZWRcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xuICB9XG5cbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgQmFzaWMgZmxvdyBmdW5jdGlvbnNcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGAgXSAgOiB0aGlzLm56RGlzYWJsZWQsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS12ZXJ0aWNhbGAgXSAgOiB0aGlzLm56VmVydGljYWwsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS13aXRoLW1hcmtzYCBdOiB0aGlzLm1hcmtzQXJyYXkgPyB0aGlzLm1hcmtzQXJyYXkubGVuZ3RoIDogMFxuICAgIH07XG4gIH1cblxuICAvLyBmaW5kIHRoZSBjbG9lc3QgdmFsdWUgdG8gYmUgYWN0aXZhdGVkIChvbmx5IGZvciByYW5nZSA9IHRydWUpXG4gIHNldEFjdGl2ZVZhbHVlSW5kZXgocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelJhbmdlKSB7XG4gICAgICBsZXQgbWluaW1hbCA9IG51bGw7XG4gICAgICBsZXQgZ2FwO1xuICAgICAgbGV0IGFjdGl2ZUluZGV4O1xuICAgICAgLy8gVE9ETzogdXNpbmcgdHlwZSBndWFyZCwgcmVtb3ZlIHR5cGUgY2FzdFxuICAgICAgKHRoaXMuZ2V0VmFsdWUoKSBhcyBudW1iZXJbXSkuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICBnYXAgPSBNYXRoLmFicyhwb2ludGVyVmFsdWUgLSB2YWwpO1xuICAgICAgICBpZiAobWluaW1hbCA9PT0gbnVsbCB8fCBnYXAgPCBtaW5pbWFsKSB7XG4gICAgICAgICAgbWluaW1hbCA9IGdhcDtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWN0aXZlVmFsdWVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHNldEFjdGl2ZVZhbHVlKHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpSYW5nZSkge1xuICAgICAgLy8gVE9ETzogdXNpbmcgdHlwZSBndWFyZCwgcmVtb3ZlIHR5cGUgY2FzdFxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLnV0aWxzLmNsb25lQXJyYXkodGhpcy52YWx1ZSBhcyBudW1iZXJbXSk7XG4gICAgICBuZXdWYWx1ZVsgdGhpcy5hY3RpdmVWYWx1ZUluZGV4IF0gPSBwb2ludGVyVmFsdWU7XG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShwb2ludGVyVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWUpO1xuICAgIGNvbnN0IHZhbHVlU29ydGVkID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcbiAgICBjb25zdCBvZmZzZXRTb3J0ZWQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWVTb3J0ZWQpO1xuICAgIGNvbnN0IGJvdW5kUGFydHMgPSB0aGlzLm56UmFuZ2UgPyB2YWx1ZVNvcnRlZCBhcyBudW1iZXJbXSA6IFsgMCwgdmFsdWVTb3J0ZWQgXTtcbiAgICBjb25zdCB0cmFja1BhcnRzID0gdGhpcy5uelJhbmdlID8gWyBvZmZzZXRTb3J0ZWRbIDAgXSwgb2Zmc2V0U29ydGVkWyAxIF0gLSBvZmZzZXRTb3J0ZWRbIDAgXSBdIDogWyAwLCBvZmZzZXRTb3J0ZWQgXTtcblxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XG4gICAgICBoYW5kbGUub2Zmc2V0ID0gdGhpcy5uelJhbmdlID8gb2Zmc2V0WyBpbmRleCBdIDogb2Zmc2V0O1xuICAgICAgaGFuZGxlLnZhbHVlID0gdGhpcy5uelJhbmdlID8gdmFsdWVbIGluZGV4IF0gOiB2YWx1ZTtcbiAgICB9KTtcbiAgICBbIHRoaXMuYm91bmRzLmxvd2VyLCB0aGlzLmJvdW5kcy51cHBlciBdID0gYm91bmRQYXJ0cztcbiAgICBbIHRoaXMudHJhY2sub2Zmc2V0LCB0aGlzLnRyYWNrLmxlbmd0aCBdID0gdHJhY2tQYXJ0cztcbiAgfVxuXG4gIHRvTWFya3NBcnJheShtYXJrczogTWFya3MpOiBNYXJrc1tdIHtcbiAgICBjb25zdCBtYXJrc0FycmF5ID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbWFya3MpIHtcbiAgICAgIGNvbnN0IG1hcmsgPSBtYXJrc1sga2V5IF07XG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleSA6IHBhcnNlRmxvYXQoa2V5KTtcbiAgICAgIGlmICh2YWwgPCB0aGlzLm56TWluIHx8IHZhbCA+IHRoaXMubnpNYXgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBtYXJrc0FycmF5LnB1c2goeyB2YWx1ZTogdmFsLCBvZmZzZXQ6IHRoaXMudmFsdWVUb09mZnNldCh2YWwpLCBjb25maWc6IG1hcmsgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXJrc0FycmF5O1xuICB9XG5cbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgRXZlbnQgbGlzdGVuZXJzICYgYmluZGluZ3NcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgb25EcmFnU3RhcnQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubG9nKCdbb25EcmFnU3RhcnRdZHJhZ2dpbmcgdmFsdWUgPSAnLCB2YWx1ZSk7XG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKHRydWUpO1xuICAgIC8vIGNhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnNcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkoKTtcbiAgICAvLyB0cmlnZ2VyIGRyYWcgc3RhcnRcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlSW5kZXgodmFsdWUpO1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodmFsdWUpO1xuICAgIC8vIFRvb2x0aXAgdmlzaWJpbGl0eSBvZiBoYW5kbGVzXG4gICAgdGhpcy5fc2hvd0hhbmRsZVRvb2x0aXAodGhpcy5uelJhbmdlID8gdGhpcy5hY3RpdmVWYWx1ZUluZGV4IDogMCk7XG4gIH1cblxuICBvbkRyYWdNb3ZlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvZygnW29uRHJhZ01vdmVdZHJhZ2dpbmcgdmFsdWUgPSAnLCB2YWx1ZSk7XG4gICAgLy8gdHJpZ2dlciBkcmFnIG1vdmluZ1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgb25EcmFnRW5kKCk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdbb25EcmFnRW5kXScpO1xuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyhmYWxzZSk7XG4gICAgdGhpcy5uek9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLmdldFZhbHVlKHRydWUpKTtcbiAgICAvLyByZW1vdmUgY2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9uc1xuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcbiAgICAvLyBIaWRlIGFsbCB0b29sdGlwXG4gICAgdGhpcy5faGlkZUFsbEhhbmRsZVRvb2x0aXAoKTtcbiAgfVxuXG4gIGNyZWF0ZURyYWcoKTogdm9pZCB7XG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XG4gICAgY29uc3Qgb3JpZW50RmllbGQgPSB0aGlzLm56VmVydGljYWwgPyAncGFnZVknIDogJ3BhZ2VYJztcbiAgICBjb25zdCBtb3VzZTogTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnID0ge1xuICAgICAgc3RhcnQgICA6ICdtb3VzZWRvd24nLCBtb3ZlOiAnbW91c2Vtb3ZlJywgZW5kOiAnbW91c2V1cCcsXG4gICAgICBwbHVja0tleTogWyBvcmllbnRGaWVsZCBdXG4gICAgfTtcbiAgICBjb25zdCB0b3VjaDogTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnID0ge1xuICAgICAgc3RhcnQgICA6ICd0b3VjaHN0YXJ0JywgbW92ZTogJ3RvdWNobW92ZScsIGVuZDogJ3RvdWNoZW5kJyxcbiAgICAgIHBsdWNrS2V5OiBbICd0b3VjaGVzJywgJzAnLCBvcmllbnRGaWVsZCBdLFxuICAgICAgZmlsdGVyICA6IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gIXRoaXMudXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUgYXMgVG91Y2hFdmVudClcbiAgICB9O1xuICAgIC8vIG1ha2Ugb2JzZXJ2YWJsZXNcbiAgICBbIG1vdXNlLCB0b3VjaCBdLmZvckVhY2goc291cmNlID0+IHtcbiAgICAgIGNvbnN0IHsgc3RhcnQsIG1vdmUsIGVuZCwgcGx1Y2tLZXksIGZpbHRlcjogZmlsdGVyRnVuYyA9ICgoKSA9PiB0cnVlKSB9ID0gc291cmNlO1xuICAgICAgLy8gc3RhcnRcbiAgICAgIHNvdXJjZS5zdGFydFBsdWNrZWQkID0gZnJvbUV2ZW50KHNsaWRlckRPTSwgc3RhcnQpLnBpcGUoXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcbiAgICAgICAgdGFwKHRoaXMudXRpbHMucGF1c2VFdmVudCksXG4gICAgICAgIHBsdWNrKC4uLnBsdWNrS2V5KSxcbiAgICAgICAgbWFwKChwb3NpdGlvbjogbnVtYmVyKSA9PiB0aGlzLmZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb24pKVxuICAgICAgKTtcbiAgICAgIC8vIGVuZFxuICAgICAgc291cmNlLmVuZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIGVuZCk7XG4gICAgICAvLyByZXNvbHZlIG1vdmVcbiAgICAgIHNvdXJjZS5tb3ZlUmVzb2x2ZWQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBtb3ZlKS5waXBlKFxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXG4gICAgICAgIHRhcCh0aGlzLnV0aWxzLnBhdXNlRXZlbnQpLFxuICAgICAgICBwbHVjayguLi5wbHVja0tleSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIG1hcCgocG9zaXRpb246IG51bWJlcikgPT4gdGhpcy5maW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbChzb3VyY2UuZW5kJClcbiAgICAgICk7XG4gICAgICAvLyBtZXJnZSB0byBiZWNvbWUgbW92aW5nXG4gICAgICAvLyBzb3VyY2UubW92ZSQgPSBzb3VyY2Uuc3RhcnRQbHVja2VkJC5tZXJnZU1hcFRvKHNvdXJjZS5tb3ZlUmVzb2x2ZWQkKTtcbiAgICB9KTtcbiAgICAvLyBtZXJnZSBtb3VzZSBhbmQgdG91Y2ggb2JzZXJ2YWJsZXNcbiAgICB0aGlzLmRyYWdzdGFydCQgPSBtZXJnZShtb3VzZS5zdGFydFBsdWNrZWQkLCB0b3VjaC5zdGFydFBsdWNrZWQkKTtcbiAgICAvLyB0aGlzLmRyYWdtb3ZlJCA9IE9ic2VydmFibGUubWVyZ2UobW91c2UubW92ZSQsIHRvdWNoLm1vdmUkKTtcbiAgICB0aGlzLmRyYWdtb3ZlJCA9IG1lcmdlKG1vdXNlLm1vdmVSZXNvbHZlZCQsIHRvdWNoLm1vdmVSZXNvbHZlZCQpO1xuICAgIHRoaXMuZHJhZ2VuZCQgPSBtZXJnZShtb3VzZS5lbmQkLCB0b3VjaC5lbmQkKTtcbiAgfVxuXG4gIHN1YnNjcmliZURyYWcocGVyaW9kczogc3RyaW5nW10gPSBbICdzdGFydCcsICdtb3ZlJywgJ2VuZCcgXSk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdbc3Vic2NyaWJlRHJhZ110aGlzLmRyYWdzdGFydCQgPSAnLCB0aGlzLmRyYWdzdGFydCQpO1xuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ3N0YXJ0JCAmJiAhdGhpcy5kcmFnc3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdzdGFydF8gPSB0aGlzLmRyYWdzdGFydCQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdtb3ZlJCAmJiAhdGhpcy5kcmFnbW92ZV8pIHtcbiAgICAgIHRoaXMuZHJhZ21vdmVfID0gdGhpcy5kcmFnbW92ZSQuc3Vic2NyaWJlKHRoaXMub25EcmFnTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnZW5kJCAmJiAhdGhpcy5kcmFnZW5kXykge1xuICAgICAgdGhpcy5kcmFnZW5kXyA9IHRoaXMuZHJhZ2VuZCQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJyBdKTogdm9pZCB7XG4gICAgdGhpcy5sb2coJ1t1bnN1YnNjcmliZURyYWdddGhpcy5kcmFnc3RhcnRfID0gJywgdGhpcy5kcmFnc3RhcnRfKTtcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdzdGFydF8pIHtcbiAgICAgIHRoaXMuZHJhZ3N0YXJ0Xy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnc3RhcnRfID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdtb3ZlJykgIT09IC0xICYmIHRoaXMuZHJhZ21vdmVfKSB7XG4gICAgICB0aGlzLmRyYWdtb3ZlXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnbW92ZV8gPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ2VuZCcpICE9PSAtMSAmJiB0aGlzLmRyYWdlbmRfKSB7XG4gICAgICB0aGlzLmRyYWdlbmRfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRyYWdlbmRfID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEcmFnTW92aW5nKG1vdmFibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBwZXJpb2RzID0gWyAnbW92ZScsICdlbmQnIF07XG4gICAgaWYgKG1vdmFibGUpIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnN1YnNjcmliZURyYWcocGVyaW9kcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcocGVyaW9kcyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJhZ0Rpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmliZURyYWcoWyAnc3RhcnQnIF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFV0aWwgZnVuY3Rpb25zICh0b29scylcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gZmluZCB0aGUgY2xvc2VzdCB2YWx1ZSBkZXBlbmQgb24gcG9pbnRlcidzIHBvc2l0aW9uXG4gIGZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb246IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2xpZGVyU3RhcnQgPSB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcbiAgICBjb25zdCBzbGlkZXJMZW5ndGggPSB0aGlzLmdldFNsaWRlckxlbmd0aCgpO1xuICAgIGNvbnN0IHJhdGlvID0gdGhpcy51dGlscy5jb3JyZWN0TnVtTGltaXQoKHBvc2l0aW9uIC0gc2xpZGVyU3RhcnQpIC8gc2xpZGVyTGVuZ3RoLCAwLCAxKTtcbiAgICBjb25zdCB2YWwgPSAodGhpcy5uek1heCAtIHRoaXMubnpNaW4pICogKHRoaXMubnpWZXJ0aWNhbCA/IDEgLSByYXRpbyA6IHJhdGlvKSArIHRoaXMubnpNaW47XG4gICAgY29uc3QgcG9pbnRzID0gKHRoaXMubnpNYXJrcyA9PT0gbnVsbCA/IFtdIDogT2JqZWN0LmtleXModGhpcy5uek1hcmtzKS5tYXAocGFyc2VGbG9hdCkpO1xuICAgIC8vIHB1c2ggY2xvc2VzdCBzdGVwXG4gICAgaWYgKHRoaXMubnpTdGVwICE9PSBudWxsICYmICF0aGlzLm56RG90cykge1xuICAgICAgY29uc3QgY2xvc2VzdE9uZSA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5uelN0ZXApICogdGhpcy5uelN0ZXA7XG4gICAgICBwb2ludHMucHVzaChjbG9zZXN0T25lKTtcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGdhcHNcbiAgICBjb25zdCBnYXBzID0gcG9pbnRzLm1hcChwb2ludCA9PiBNYXRoLmFicyh2YWwgLSBwb2ludCkpO1xuICAgIGNvbnN0IGNsb3Nlc3QgPSBwb2ludHNbIGdhcHMuaW5kZXhPZihNYXRoLm1pbiguLi5nYXBzKSkgXTtcbiAgICAvLyByZXR1cm4gdGhlIGZpeGVkXG4gICAgcmV0dXJuIHRoaXMubnpTdGVwID09PSBudWxsID8gY2xvc2VzdCA6XG4gICAgICBwYXJzZUZsb2F0KGNsb3Nlc3QudG9GaXhlZCh0aGlzLnV0aWxzLmdldFByZWNpc2lvbih0aGlzLm56U3RlcCkpKTtcbiAgfVxuXG4gIHZhbHVlVG9PZmZzZXQodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudXRpbHMudmFsdWVUb09mZnNldCh0aGlzLm56TWluLCB0aGlzLm56TWF4LCB2YWx1ZSk7XG4gIH1cblxuICBnZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJTdGFydCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJTdGFydDtcbiAgICB9XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy51dGlscy5nZXRFbGVtZW50T2Zmc2V0KHRoaXMuc2xpZGVyRE9NKTtcbiAgICByZXR1cm4gdGhpcy5uelZlcnRpY2FsID8gb2Zmc2V0LnRvcCA6IG9mZnNldC5sZWZ0O1xuICB9XG5cbiAgZ2V0U2xpZGVyTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlckRPTTtcbiAgICByZXR1cm4gdGhpcy5uelZlcnRpY2FsID9cbiAgICAgIHNsaWRlckRPTS5jbGllbnRIZWlnaHQgOiBzbGlkZXJET00uY2xpZW50V2lkdGg7XG4gIH1cblxuICAvLyBjYWNoZSBET00gbGF5b3V0L3JlZmxvdyBvcGVyYXRpb25zIGZvciBwZXJmb3JtYW5jZSAobWF5IG5vdCBuZWNlc3Nhcnk/KVxuICBjYWNoZVNsaWRlclByb3BlcnR5KHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZVNsaWRlclN0YXJ0ID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xuICAgIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlOiBTbGlkZXJWYWx1ZSk6IFNsaWRlclZhbHVlIHsgLy8gTk9URTogd2lsbCByZXR1cm4gbmV3IHZhbHVlXG4gICAgbGV0IHJlcyA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5jaGVja1ZhbGlkVmFsdWUodmFsdWUpKSB7IC8vIGlmIGVtcHR5LCB1c2UgZGVmYXVsdCB2YWx1ZVxuICAgICAgcmVzID0gdGhpcy5uekRlZmF1bHRWYWx1ZSA9PT0gbnVsbCA/XG4gICAgICAgICh0aGlzLm56UmFuZ2UgPyBbIHRoaXMubnpNaW4sIHRoaXMubnpNYXggXSA6IHRoaXMubnpNaW4pIDogdGhpcy5uekRlZmF1bHRWYWx1ZTtcbiAgICB9IGVsc2UgeyAvLyBmb3JtYXRcbiAgICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICAgIHJlcyA9IHRoaXMubnpSYW5nZSA/XG4gICAgICAgICh2YWx1ZSBhcyBudW1iZXJbXSkubWFwKHZhbCA9PiB0aGlzLnV0aWxzLmNvcnJlY3ROdW1MaW1pdCh2YWwsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpKSA6XG4gICAgICAgIHRoaXMudXRpbHMuY29ycmVjdE51bUxpbWl0KHZhbHVlIGFzIG51bWJlciwgdGhpcy5uek1pbiwgdGhpcy5uek1heCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBjaGVjayBpZiB2YWx1ZSBpcyB2YWxpZCBhbmQgdGhyb3cgZXJyb3IgaWYgdmFsdWUtdHlwZS9yYW5nZSBub3QgbWF0Y2hcbiAgY2hlY2tWYWxpZFZhbHVlKHZhbHVlOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5uelJhbmdlO1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBpdCdzIGFuIGludmFsaWQgdmFsdWUsIGp1c3QgcmV0dXJuXG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGxldCBwYXJzZWRWYWx1ZTogbnVtYmVyID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgICBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IC8vIGl0J3MgYW4gaW52YWxpZCB2YWx1ZSwganVzdCByZXR1cm5cbiAgICB9XG4gICAgaWYgKGlzQXJyYXkgIT09ICEhcmFuZ2UpIHsgLy8gdmFsdWUgdHlwZSBub3QgbWF0Y2hcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibnpSYW5nZVwiIGNhbid0IG1hdGNoIHRoZSBcIm56VmFsdWVcIidzIHR5cGUsIHBsZWFzZSBjaGVjayB0aGVzZSBwcm9wZXJ0aWVzOiBcIm56UmFuZ2VcIiwgXCJuelZhbHVlXCIsIFwibnpEZWZhdWx0VmFsdWVcIi5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpc1ZhbHVlRXF1YWwodmFsdWU6IFNsaWRlclZhbHVlLCB2YWw6IFNsaWRlclZhbHVlKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gdHlwZW9mIHZhbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHZhbHVlWyBpIF0gIT09IHZhbFsgaSBdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB2YWw7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJpbnQgZGVidWcgaW5mb1xuICAvLyBUT0RPOiBzaG91bGQgbm90IGtlcHQgaW4gY29tcG9uZW50XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgbG9nKC4uLm1lc3NhZ2VzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGVidWdJZCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXJncyA9IFsgYFtuei1zbGlkZXJdWyMke3RoaXMubnpEZWJ1Z0lkfV0gYCBdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgb25lIGhhbmRsZSdzIHRvb2x0aXAgYW5kIGhpZGUgb3RoZXJzJ1xuICBwcml2YXRlIF9zaG93SGFuZGxlVG9vbHRpcChoYW5kbGVJbmRleDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZXNbIGluZGV4IF0uYWN0aXZlID0gaW5kZXggPT09IGhhbmRsZUluZGV4O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goaGFuZGxlID0+IGhhbmRsZS5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZUhhbmRsZXMoYW1vdW50OiBudW1iZXIpOiBTbGlkZXJIYW5kbGVbXSB7XG4gICAgY29uc3QgaGFuZGxlczogU2xpZGVySGFuZGxlW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgICBoYW5kbGVzLnB1c2goeyBvZmZzZXQ6IG51bGwsIHZhbHVlOiBudWxsLCBhY3RpdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlcztcbiAgfVxuXG59XG4iXX0=