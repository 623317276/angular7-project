/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzSliderMarksComponent {
    constructor() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.nzLowerBound = null;
        this.nzUpperBound = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        // Required
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
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["nzMarksArray"] || changes["nzLowerBound"] || changes["nzUpperBound"]) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    trackById(index, attr) {
        return attr.id;
    }
    /**
     * @return {?}
     */
    buildAttrs() {
        /** @type {?} */
        const range = this.nzMax - this.nzMin;
        this.attrs = this.nzMarksArray.map(mark => {
            const { value, offset, config } = mark;
            /** @type {?} */
            let label = config;
            /** @type {?} */
            let style;
            if (this.nzVertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: `${(value - this.nzMin) / range * 100}%`
                };
            }
            else {
                /** @type {?} */
                const marksCount = this.nzMarksArray.length;
                /** @type {?} */
                const unit = 100 / (marksCount - 1);
                /** @type {?} */
                const markWidth = unit * 0.9;
                style = {
                    width: `${markWidth}%`,
                    marginLeft: `${-markWidth / 2}%`,
                    left: `${(value - this.nzMin) / range * 100}%`
                };
            }
            // custom configuration
            if (typeof config === 'object') {
                label = config.label;
                if (config.style) {
                    style = Object.assign({}, style, config.style);
                }
            }
            return {
                id: value,
                value,
                offset,
                classes: {
                    [`${this.nzClassName}-text`]: true
                },
                style,
                label
            };
        }); // END - map
    }
    /**
     * @return {?}
     */
    togglePointActive() {
        if (this.attrs && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.attrs.forEach(attr => {
                /** @type {?} */
                const value = attr.value;
                /** @type {?} */
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= this.nzUpperBound && value >= this.nzLowerBound);
                attr.classes[`${this.nzClassName}-text-active`] = isActive;
            });
        }
    }
}
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
export class Marks {
}
function Marks_tsickle_Closure_declarations() {
    /** @type {?} */
    Marks.prototype.number;
}
export class MarksArray extends Array {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU9qRCxNQUFNOzt5QkFDZ0IsS0FBSzt5QkFDTCxLQUFLOzs0QkFHTyxJQUFJOzRCQUNKLElBQUk7Ozs7OztJQVFwQyxJQUNJLFVBQVUsQ0FBQyxLQUFjOztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUtELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sa0JBQWU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxPQUFPLG9CQUFpQixPQUFPLGdCQUFhLElBQUksT0FBTyxnQkFBYSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBc0g7UUFDN0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hCOzs7O0lBRUQsVUFBVTs7UUFDUixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FB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QVEsS0FBc0Q7Q0FNckYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNsaWRlci1tYXJrcycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zbGlkZXItbWFya3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyTWFya3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmNsdWRlZCA9IGZhbHNlO1xuXG4gIC8vIER5bmFtaWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBuekxvd2VyQm91bmQ6IG51bWJlciA9IG51bGw7XG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyID0gbnVsbDtcbiAgQElucHV0KCkgbnpNYXJrc0FycmF5OiBNYXJrc0FycmF5O1xuXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXI7IC8vIFJlcXVpcmVkXG4gIEBJbnB1dCgpIG56TWF4OiBudW1iZXI7IC8vIFJlcXVpcmVkXG5cbiAgQElucHV0KClcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHsgLy8gUmVxdWlyZWRcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuXG4gIC8vIFRPRE86IHVzaW5nIG5hbWVkIGludGVyZmFjZVxuICBhdHRyczogQXJyYXk8eyBpZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2xhc3NlczogeyBbIGtleTogc3RyaW5nIF06IGJvb2xlYW4gfSwgc3R5bGU6IG9iamVjdCwgbGFiZWw6IE1hcmsgfT47IC8vIHBvaW50cyBmb3IgaW5uZXIgdXNlXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56TWFya3NBcnJheSkge1xuICAgICAgdGhpcy5idWlsZEF0dHJzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56TWFya3NBcnJheSB8fCBjaGFuZ2VzLm56TG93ZXJCb3VuZCB8fCBjaGFuZ2VzLm56VXBwZXJCb3VuZCkge1xuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBhdHRyOiB7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0LCBsYWJlbDogTWFyayB9KTogbnVtYmVyIHtcbiAgICByZXR1cm4gYXR0ci5pZDtcbiAgfVxuXG4gIGJ1aWxkQXR0cnMoKTogdm9pZCB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm56TWF4IC0gdGhpcy5uek1pbjtcbiAgICB0aGlzLmF0dHJzID0gdGhpcy5uek1hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0LCBjb25maWcgfSA9IG1hcms7XG4gICAgICAvLyBjYWxjIHN0eWxlc1xuICAgICAgbGV0IGxhYmVsID0gY29uZmlnO1xuICAgICAgbGV0IHN0eWxlOiBvYmplY3Q7XG4gICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJy01MCUnLFxuICAgICAgICAgIGJvdHRvbSAgICAgIDogYCR7KHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSAqIDEwMH0lYFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWFya3NDb3VudCA9IHRoaXMubnpNYXJrc0FycmF5Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgdW5pdCA9IDEwMCAvIChtYXJrc0NvdW50IC0gMSk7XG4gICAgICAgIGNvbnN0IG1hcmtXaWR0aCA9IHVuaXQgKiAwLjk7XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHdpZHRoICAgICA6IGAke21hcmtXaWR0aH0lYCxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHstbWFya1dpZHRoIC8gMn0lYCxcbiAgICAgICAgICBsZWZ0ICAgICAgOiBgJHsodmFsdWUgLSB0aGlzLm56TWluKSAvIHJhbmdlICogMTAwfSVgXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBjdXN0b20gY29uZmlndXJhdGlvblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxhYmVsID0gY29uZmlnLmxhYmVsO1xuICAgICAgICBpZiAoY29uZmlnLnN0eWxlKSB7XG4gICAgICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5jb25maWcuc3R5bGUgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQgICAgIDogdmFsdWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICBbIGAke3RoaXMubnpDbGFzc05hbWV9LXRleHRgIF06IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIGxhYmVsXG4gICAgICB9O1xuICAgIH0pOyAvLyBFTkQgLSBtYXBcbiAgfVxuXG4gIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF0dHJzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoIXRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy5uelVwcGVyQm91bmQpIHx8XG4gICAgICAgICAgKHRoaXMubnpJbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLm56VXBwZXJCb3VuZCAmJiB2YWx1ZSA+PSB0aGlzLm56TG93ZXJCb3VuZCk7XG4gICAgICAgIGF0dHIuY2xhc3Nlc1sgYCR7dGhpcy5uekNsYXNzTmFtZX0tdGV4dC1hY3RpdmVgIF0gPSBpc0FjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vIERFRklOSVRJT05TXG5cbmV4cG9ydCB0eXBlIE1hcmsgPSBzdHJpbmcgfCB7XG4gIHN0eWxlOiBvYmplY3Q7XG4gIGxhYmVsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgTWFya3Mge1xuICBudW1iZXI6IE1hcms7XG59XG5cbi8vIFRPRE86IGV4dGVuZHMgQXJyYXkgY291bGQgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvciB3aGVuIHRhcmdldGluZyBlczUgb3IgYmVsb3dcbmV4cG9ydCBjbGFzcyBNYXJrc0FycmF5IGV4dGVuZHMgQXJyYXk8eyB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY29uZmlnOiBNYXJrIH0+IHtcbiAgWyBpbmRleDogbnVtYmVyIF06IHtcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIG9mZnNldDogbnVtYmVyO1xuICAgIGNvbmZpZzogTWFyaztcbiAgfVxufVxuIl19