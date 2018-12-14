/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzSliderMarksComponent = /** @class */ (function () {
    function NzSliderMarksComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.nzLowerBound = null;
        this.nzUpperBound = null;
    }
    Object.defineProperty(NzSliderMarksComponent.prototype, "nzVertical", {
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
            // Required
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderMarksComponent.prototype, "nzIncluded", {
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
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderMarksComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["nzMarksArray"] || changes["nzLowerBound"] || changes["nzUpperBound"]) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    NzSliderMarksComponent.prototype.trackById = /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    function (index, attr) {
        return attr.id;
    };
    /**
     * @return {?}
     */
    NzSliderMarksComponent.prototype.buildAttrs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var range = this.nzMax - this.nzMin;
        this.attrs = this.nzMarksArray.map(function (mark) {
            var _a;
            var value = mark.value, offset = mark.offset, config = mark.config;
            /** @type {?} */
            var label = config;
            /** @type {?} */
            var style;
            if (_this.nzVertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: (value - _this.nzMin) / range * 100 + "%"
                };
            }
            else {
                /** @type {?} */
                var marksCount = _this.nzMarksArray.length;
                /** @type {?} */
                var unit = 100 / (marksCount - 1);
                /** @type {?} */
                var markWidth = unit * 0.9;
                style = {
                    width: markWidth + "%",
                    marginLeft: -markWidth / 2 + "%",
                    left: (value - _this.nzMin) / range * 100 + "%"
                };
            }
            // custom configuration
            if (typeof config === 'object') {
                label = config.label;
                if (config.style) {
                    style = tslib_1.__assign({}, style, config.style);
                }
            }
            return {
                id: value,
                value: value,
                offset: offset,
                classes: (_a = {},
                    _a[_this.nzClassName + "-text"] = true,
                    _a),
                style: style,
                label: label
            };
        }); // END - map
    };
    /**
     * @return {?}
     */
    NzSliderMarksComponent.prototype.togglePointActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.attrs && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.attrs.forEach(function (attr) {
                /** @type {?} */
                var value = attr.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= _this.nzUpperBound && value >= _this.nzLowerBound);
                attr.classes[_this.nzClassName + "-text-active"] = isActive;
            });
        }
    };
    NzSliderMarksComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider-marks',
                    preserveWhitespaces: false,
                    template: "<div [class]=\"nzClassName\">\n  <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\" [innerHTML]=\"attr.label\"></span>\n</div>"
                }] }
    ];
    NzSliderMarksComponent.propDecorators = {
        nzLowerBound: [{ type: Input }],
        nzUpperBound: [{ type: Input }],
        nzMarksArray: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    return NzSliderMarksComponent;
}());
export { NzSliderMarksComponent };
function NzSliderMarksComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderMarksComponent.prototype._vertical;
    /** @type {?} */
    NzSliderMarksComponent.prototype._included;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzClassName;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderMarksComponent.prototype.attrs;
}
var Marks = /** @class */ (function () {
    function Marks() {
    }
    return Marks;
}());
export { Marks };
function Marks_tsickle_Closure_declarations() {
    /** @type {?} */
    Marks.prototype.number;
}
var MarksArray = /** @class */ (function (_super) {
    tslib_1.__extends(MarksArray, _super);
    function MarksArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MarksArray;
}(Array));
export { MarksArray };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozt5QkFRM0IsS0FBSzt5QkFDTCxLQUFLOzs0QkFHTyxJQUFJOzRCQUNKLElBQUk7O0lBUXBDLHNCQUNJLDhDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjOztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7Ozs7O0lBU0QsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxrQkFBZTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sb0JBQWlCLE9BQU8sZ0JBQWEsSUFBSSxPQUFPLGdCQUFhLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7S0FDRjs7Ozs7O0lBRUQsMENBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsSUFBc0g7UUFDN0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hCOzs7O0lBRUQsMkNBQVU7OztJQUFWO1FBQUEsaUJB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QyxJQUFBOzs7Z0JBdkhBO0lBeUhDLENBQUE7QUFGRCxpQkFFQzs7Ozs7QUFHRCxJQUFBO0lBQWdDLHNDQUFzRDs7OztxQkE1SHRGO0VBNEhnQyxLQUFLLEVBTXBDLENBQUE7QUFORCxzQkFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyLW1hcmtzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNsaWRlci1tYXJrcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJNYXJrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XG4gIHByaXZhdGUgX2luY2x1ZGVkID0gZmFsc2U7XG5cbiAgLy8gRHluYW1pYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyID0gbnVsbDtcbiAgQElucHV0KCkgbnpVcHBlckJvdW5kOiBudW1iZXIgPSBudWxsO1xuICBASW5wdXQoKSBuek1hcmtzQXJyYXk6IE1hcmtzQXJyYXk7XG5cbiAgLy8gU3RhdGljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpNaW46IG51bWJlcjsgLy8gUmVxdWlyZWRcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlcjsgLy8gUmVxdWlyZWRcblxuICBASW5wdXQoKVxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikgeyAvLyBSZXF1aXJlZFxuICAgIHRoaXMuX3ZlcnRpY2FsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekluY2x1ZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5jbHVkZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56SW5jbHVkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xuICB9XG5cbiAgLy8gVE9ETzogdXNpbmcgbmFtZWQgaW50ZXJmYWNlXG4gIGF0dHJzOiBBcnJheTx7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0LCBsYWJlbDogTWFyayB9PjsgLy8gcG9pbnRzIGZvciBpbm5lciB1c2VcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XG4gICAgICB0aGlzLmJ1aWxkQXR0cnMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGF0dHI6IHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QsIGxhYmVsOiBNYXJrIH0pOiBudW1iZXIge1xuICAgIHJldHVybiBhdHRyLmlkO1xuICB9XG5cbiAgYnVpbGRBdHRycygpOiB2b2lkIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMubnpNYXggLSB0aGlzLm56TWluO1xuICAgIHRoaXMuYXR0cnMgPSB0aGlzLm56TWFya3NBcnJheS5tYXAobWFyayA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQsIGNvbmZpZyB9ID0gbWFyaztcbiAgICAgIC8vIGNhbGMgc3R5bGVzXG4gICAgICBsZXQgbGFiZWwgPSBjb25maWc7XG4gICAgICBsZXQgc3R5bGU6IG9iamVjdDtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAnLTUwJScsXG4gICAgICAgICAgYm90dG9tICAgICAgOiBgJHsodmFsdWUgLSB0aGlzLm56TWluKSAvIHJhbmdlICogMTAwfSVgXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtYXJrc0NvdW50ID0gdGhpcy5uek1hcmtzQXJyYXkubGVuZ3RoO1xuICAgICAgICBjb25zdCB1bml0ID0gMTAwIC8gKG1hcmtzQ291bnQgLSAxKTtcbiAgICAgICAgY29uc3QgbWFya1dpZHRoID0gdW5pdCAqIDAuOTtcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgd2lkdGggICAgIDogYCR7bWFya1dpZHRofSVgLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IGAkey1tYXJrV2lkdGggLyAyfSVgLFxuICAgICAgICAgIGxlZnQgICAgICA6IGAkeyh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UgKiAxMDB9JWBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGN1c3RvbSBjb25maWd1cmF0aW9uXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbGFiZWwgPSBjb25maWcubGFiZWw7XG4gICAgICAgIGlmIChjb25maWcuc3R5bGUpIHtcbiAgICAgICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIC4uLmNvbmZpZy5zdHlsZSB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCAgICAgOiB2YWx1ZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgIFsgYCR7dGhpcy5uekNsYXNzTmFtZX0tdGV4dGAgXTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzdHlsZSxcbiAgICAgICAgbGFiZWxcbiAgICAgIH07XG4gICAgfSk7IC8vIEVORCAtIG1hcFxuICB9XG5cbiAgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXR0cnMgJiYgdGhpcy5uekxvd2VyQm91bmQgIT09IG51bGwgJiYgdGhpcy5uelVwcGVyQm91bmQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICghdGhpcy5uekluY2x1ZGVkICYmIHZhbHVlID09PSB0aGlzLm56VXBwZXJCb3VuZCkgfHxcbiAgICAgICAgICAodGhpcy5uekluY2x1ZGVkICYmIHZhbHVlIDw9IHRoaXMubnpVcHBlckJvdW5kICYmIHZhbHVlID49IHRoaXMubnpMb3dlckJvdW5kKTtcbiAgICAgICAgYXR0ci5jbGFzc2VzWyBgJHt0aGlzLm56Q2xhc3NOYW1lfS10ZXh0LWFjdGl2ZWAgXSA9IGlzQWN0aXZlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cblxuLy8gREVGSU5JVElPTlNcblxuZXhwb3J0IHR5cGUgTWFyayA9IHN0cmluZyB8IHtcbiAgc3R5bGU6IG9iamVjdDtcbiAgbGFiZWw6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjbGFzcyBNYXJrcyB7XG4gIG51bWJlcjogTWFyaztcbn1cblxuLy8gVE9ETzogZXh0ZW5kcyBBcnJheSBjb3VsZCBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yIHdoZW4gdGFyZ2V0aW5nIGVzNSBvciBiZWxvd1xuZXhwb3J0IGNsYXNzIE1hcmtzQXJyYXkgZXh0ZW5kcyBBcnJheTx7IHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjb25maWc6IE1hcmsgfT4ge1xuICBbIGluZGV4OiBudW1iZXIgXToge1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgb2Zmc2V0OiBudW1iZXI7XG4gICAgY29uZmlnOiBNYXJrO1xuICB9XG59XG4iXX0=