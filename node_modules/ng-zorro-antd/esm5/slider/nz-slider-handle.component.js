/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
import { NzSliderComponent } from './nz-slider.component';
var NzSliderHandleComponent = /** @class */ (function () {
    function NzSliderHandleComponent(_slider) {
        this._slider = _slider;
        this.style = {};
    }
    Object.defineProperty(NzSliderHandleComponent.prototype, "nzActive", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var show = toBoolean(value);
            if (this.tooltip) {
                if (show) {
                    this.tooltip.show();
                }
                else {
                    this.tooltip.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderHandleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzOffset"]) {
            this._updateStyle();
        }
        if (changes["nzValue"]) {
            this._updateTooltipTitle(); // [For tooltip]
            this._updateTooltipPosition(); // [For tooltip]
        }
    };
    // Hover to toggle tooltip when not dragging
    /**
     * @param {?} $event
     * @return {?}
     */
    NzSliderHandleComponent.prototype.onMouseEnter = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this._slider.isDragging) {
            this.nzActive = true;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzSliderHandleComponent.prototype.onMouseLeave = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this._slider.isDragging) {
            this.nzActive = false;
        }
    };
    /**
     * @return {?}
     */
    NzSliderHandleComponent.prototype._updateTooltipTitle = /**
     * @return {?}
     */
    function () {
        // [For tooltip]
        this.tooltipTitle = this.nzTipFormatter ? this.nzTipFormatter(this.nzValue) : "" + this.nzValue;
    };
    /**
     * @return {?}
     */
    NzSliderHandleComponent.prototype._updateTooltipPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // [For tooltip]
        if (this.tooltip) {
            window.setTimeout(function () { return _this.tooltip.updatePosition(); }, 0); // MAY use ngAfterViewChecked? but this will be called so many times.
        }
    };
    /**
     * @return {?}
     */
    NzSliderHandleComponent.prototype._updateStyle = /**
     * @return {?}
     */
    function () {
        this.style[this.nzVertical ? 'bottom' : 'left'] = this.nzOffset + "%";
    };
    NzSliderHandleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider-handle',
                    preserveWhitespaces: false,
                    template: "<nz-tooltip *ngIf=\"nzTipFormatter !== null\" #tooltip [nzTitle]=\"tooltipTitle\" [nzTrigger]=\"null\">\n  <div nz-tooltip [class]=\"nzClassName\" [ngStyle]=\"style\"></div>\n</nz-tooltip>\n<div *ngIf=\"nzTipFormatter === null\" [class]=\"nzClassName\" [ngStyle]=\"style\"></div>"
                }] }
    ];
    /** @nocollapse */
    NzSliderHandleComponent.ctorParameters = function () { return [
        { type: NzSliderComponent }
    ]; };
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
    return NzSliderHandleComponent;
}());
export { NzSliderHandleComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2xpZGVyL256LXNsaWRlci1oYW5kbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBK0J4RCxpQ0FBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7cUJBRjlCLEVBQUU7S0FHakI7SUFqQkQsc0JBQWEsNkNBQVE7Ozs7O1FBQXJCLFVBQXNCLEtBQWM7O1lBQ2xDLElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksSUFBSSxFQUFFO29CQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JCO2FBQ0Y7U0FDRjs7O09BQUE7Ozs7O0lBVUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxjQUFXO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtRQUNELElBQUksT0FBTyxhQUFVO1lBQ25CLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQy9CO0tBQ0Y7SUFFRCw0Q0FBNEM7Ozs7O0lBRTVDLDhDQUFZOzs7O0lBRFosVUFDYSxNQUFrQjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7S0FDRjs7Ozs7SUFHRCw4Q0FBWTs7OztJQURaLFVBQ2EsTUFBa0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7SUFFTyxxREFBbUI7Ozs7O1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsQ0FBQzs7Ozs7SUFHMUYsd0RBQXNCOzs7Ozs7UUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQTdCLENBQTZCLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7Ozs7O0lBR0ssOENBQVk7Ozs7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxHQUFNLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQzs7O2dCQXBFM0UsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxrQkFBa0I7b0JBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLG1TQUF3RDtpQkFDekQ7Ozs7Z0JBTlEsaUJBQWlCOzs7OEJBVXZCLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQVlMLFNBQVMsU0FBQyxTQUFTOytCQWtCbkIsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTsrQkFPdkMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTs7a0NBekQxQzs7U0FZYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4uL3Rvb2x0aXAvbnotdG9vbHRpcC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBOelNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyLWhhbmRsZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlckhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgLy8gU3RhdGljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgbnpDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpWZXJ0aWNhbDogc3RyaW5nO1xuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xuICBASW5wdXQoKSBuelZhbHVlOiBudW1iZXI7IC8vIFtGb3IgdG9vbHRpcF1cbiAgQElucHV0KCkgbnpUaXBGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7IC8vIFtGb3IgdG9vbHRpcF1cbiAgQElucHV0KCkgc2V0IG56QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7IC8vIFtGb3IgdG9vbHRpcF1cbiAgICBjb25zdCBzaG93ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b29sdGlwLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBMb2NhbHNcbiAgQFZpZXdDaGlsZCgndG9vbHRpcCcpIHRvb2x0aXA6IE56VG9vbFRpcENvbXBvbmVudDsgLy8gW0ZvciB0b29sdGlwXVxuICB0b29sdGlwVGl0bGU6IHN0cmluZzsgLy8gW0ZvciB0b29sdGlwXVxuICBzdHlsZTogb2JqZWN0ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2xpZGVyOiBOelNsaWRlckNvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56T2Zmc2V0KSB7XG4gICAgICB0aGlzLl91cGRhdGVTdHlsZSgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelZhbHVlKSB7XG4gICAgICB0aGlzLl91cGRhdGVUb29sdGlwVGl0bGUoKTsgLy8gW0ZvciB0b29sdGlwXVxuICAgICAgdGhpcy5fdXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk7IC8vIFtGb3IgdG9vbHRpcF1cbiAgICB9XG4gIH1cblxuICAvLyBIb3ZlciB0byB0b2dnbGUgdG9vbHRpcCB3aGVuIG5vdCBkcmFnZ2luZ1xuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJywgWyAnJGV2ZW50JyBdKVxuICBvbk1vdXNlRW50ZXIoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zbGlkZXIuaXNEcmFnZ2luZykge1xuICAgICAgdGhpcy5uekFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsgJyRldmVudCcgXSlcbiAgb25Nb3VzZUxlYXZlKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc2xpZGVyLmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMubnpBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUb29sdGlwVGl0bGUoKTogdm9pZCB7IC8vIFtGb3IgdG9vbHRpcF1cbiAgICB0aGlzLnRvb2x0aXBUaXRsZSA9IHRoaXMubnpUaXBGb3JtYXR0ZXIgPyB0aGlzLm56VGlwRm9ybWF0dGVyKHRoaXMubnpWYWx1ZSkgOiBgJHt0aGlzLm56VmFsdWV9YDtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVRvb2x0aXBQb3NpdGlvbigpOiB2b2lkIHsgLy8gW0ZvciB0b29sdGlwXVxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMudG9vbHRpcC51cGRhdGVQb3NpdGlvbigpLCAwKTsgLy8gTUFZIHVzZSBuZ0FmdGVyVmlld0NoZWNrZWQ/IGJ1dCB0aGlzIHdpbGwgYmUgY2FsbGVkIHNvIG1hbnkgdGltZXMuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlU3R5bGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdHlsZVsgdGhpcy5uelZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCcgXSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XG4gIH1cbn1cbiJdfQ==