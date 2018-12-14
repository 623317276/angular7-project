/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
import { NzSliderComponent } from './nz-slider.component';
export class NzSliderHandleComponent {
    /**
     * @param {?} _slider
     */
    constructor(_slider) {
        this._slider = _slider;
        this.style = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzActive(value) {
        /** @type {?} */
        const show = toBoolean(value);
        if (this.tooltip) {
            if (show) {
                this.tooltip.show();
            }
            else {
                this.tooltip.hide();
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzOffset"]) {
            this._updateStyle();
        }
        if (changes["nzValue"]) {
            this._updateTooltipTitle(); // [For tooltip]
            this._updateTooltipPosition(); // [For tooltip]
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseEnter($event) {
        if (!this._slider.isDragging) {
            this.nzActive = true;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseLeave($event) {
        if (!this._slider.isDragging) {
            this.nzActive = false;
        }
    }
    /**
     * @return {?}
     */
    _updateTooltipTitle() {
        // [For tooltip]
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : `${this.nzValue}`;
    }
    /**
     * @return {?}
     */
    _updateTooltipPosition() {
        // [For tooltip]
        if (this.tooltip) {
            window.setTimeout(() => this.tooltip.updatePosition(), 0); // MAY use ngAfterViewChecked? but this will be called so many times.
        }
    }
    /**
     * @return {?}
     */
    _updateStyle() {
        this.style[this.nzVertical ? 'bottom' : 'left'] = `${this.nzOffset}%`;
    }
}
NzSliderHandleComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-slider-handle',
                preserveWhitespaces: false,
                template: "<nz-tooltip *ngIf=\"nzTipFormatter !== null\" #tooltip [nzTitle]=\"tooltipTitle\" [nzTrigger]=\"null\">\n  <div nz-tooltip [class]=\"nzClassName\" [ngStyle]=\"style\"></div>\n</nz-tooltip>\n<div *ngIf=\"nzTipFormatter === null\" [class]=\"nzClassName\" [ngStyle]=\"style\"></div>"
            }] }
];
/** @nocollapse */
NzSliderHandleComponent.ctorParameters = () => [
    { type: NzSliderComponent }
];
NzSliderHandleComponent.propDecorators = {
    nzClassName: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzValue: [{ type: Input }],
    nzTipFormatter: [{ type: Input }],
    nzActive: [{ type: Input }],
    tooltip: [{ type: ViewChild, args: ['tooltip',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
function NzSliderHandleComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzClassName;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzValue;
    /** @type {?} */
    NzSliderHandleComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltip;
    /** @type {?} */
    NzSliderHandleComponent.prototype.tooltipTitle;
    /** @type {?} */
    NzSliderHandleComponent.prototype.style;
    /** @type {?} */
    NzSliderHandleComponent.prototype._slider;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2xpZGVyL256LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQsTUFBTTs7OztJQXdCSixZQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtxQkFGOUIsRUFBRTtLQUdqQjs7Ozs7SUFqQkQsSUFBYSxRQUFRLENBQUMsS0FBYzs7UUFDbEMsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7U0FDRjtLQUNGOzs7OztJQVVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sY0FBVztZQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLE9BQU8sYUFBVTtZQUNuQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtLQUNGOzs7OztJQUlELFlBQVksQ0FBQyxNQUFrQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7S0FDRjs7Ozs7SUFHRCxZQUFZLENBQUMsTUFBa0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7SUFFTyxtQkFBbUI7O1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOzs7OztJQUcxRixzQkFBc0I7O1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7Ozs7O0lBR0ssWUFBWTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Ozs7WUFwRTNFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsa0JBQWtCO2dCQUN2QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtU0FBd0Q7YUFDekQ7Ozs7WUFOUSxpQkFBaUI7OzswQkFVdkIsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBWUwsU0FBUyxTQUFDLFNBQVM7MkJBa0JuQixZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFOzJCQU92QyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL256LXRvb2x0aXAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTnpTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNsaWRlci1oYW5kbGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56VmVydGljYWw6IHN0cmluZztcbiAgQElucHV0KCkgbnpPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnpWYWx1ZTogbnVtYmVyOyAvLyBbRm9yIHRvb2x0aXBdXG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nOyAvLyBbRm9yIHRvb2x0aXBdXG4gIEBJbnB1dCgpIHNldCBuekFjdGl2ZSh2YWx1ZTogYm9vbGVhbikgeyAvLyBbRm9yIHRvb2x0aXBdXG4gICAgY29uc3Qgc2hvdyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgdGhpcy50b29sdGlwLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9vbHRpcC5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTG9jYWxzXG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXAnKSB0b29sdGlwOiBOelRvb2xUaXBDb21wb25lbnQ7IC8vIFtGb3IgdG9vbHRpcF1cbiAgdG9vbHRpcFRpdGxlOiBzdHJpbmc7IC8vIFtGb3IgdG9vbHRpcF1cbiAgc3R5bGU6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NsaWRlcjogTnpTbGlkZXJDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uek9mZnNldCkge1xuICAgICAgdGhpcy5fdXBkYXRlU3R5bGUoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpWYWx1ZSkge1xuICAgICAgdGhpcy5fdXBkYXRlVG9vbHRpcFRpdGxlKCk7IC8vIFtGb3IgdG9vbHRpcF1cbiAgICAgIHRoaXMuX3VwZGF0ZVRvb2x0aXBQb3NpdGlvbigpOyAvLyBbRm9yIHRvb2x0aXBdXG4gICAgfVxuICB9XG5cbiAgLy8gSG92ZXIgdG8gdG9nZ2xlIHRvb2x0aXAgd2hlbiBub3QgZHJhZ2dpbmdcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsIFsgJyRldmVudCcgXSlcbiAgb25Nb3VzZUVudGVyKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc2xpZGVyLmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMubnpBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbICckZXZlbnQnIF0pXG4gIG9uTW91c2VMZWF2ZSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3NsaWRlci5pc0RyYWdnaW5nKSB7XG4gICAgICB0aGlzLm56QWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVG9vbHRpcFRpdGxlKCk6IHZvaWQgeyAvLyBbRm9yIHRvb2x0aXBdXG4gICAgdGhpcy50b29sdGlwVGl0bGUgPSB0aGlzLm56VGlwRm9ybWF0dGVyID8gdGhpcy5uelRpcEZvcm1hdHRlcih0aGlzLm56VmFsdWUpIDogYCR7dGhpcy5uelZhbHVlfWA7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7IC8vIFtGb3IgdG9vbHRpcF1cbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oKSwgMCk7IC8vIE1BWSB1c2UgbmdBZnRlclZpZXdDaGVja2VkPyBidXQgdGhpcyB3aWxsIGJlIGNhbGxlZCBzbyBtYW55IHRpbWVzLlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlKCk6IHZvaWQge1xuICAgIHRoaXMuc3R5bGVbIHRoaXMubnpWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnIF0gPSBgJHt0aGlzLm56T2Zmc2V0fSVgO1xuICB9XG59XG4iXX0=