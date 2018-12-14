/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';
export class NzTimelineItemComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this._color = 'blue';
        this._isLast = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isLast(value) {
        this._isLast = value;
        if (this.isLast) {
            this.renderer.addClass(this.liTemplate.nativeElement, 'ant-timeline-item-last');
        }
        else {
            this.renderer.removeClass(this.liTemplate.nativeElement, 'ant-timeline-item-last');
        }
    }
    /**
     * @return {?}
     */
    get isLast() {
        return this._isLast;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDot(value) {
        this.isDotString = !(value instanceof TemplateRef);
        this._dot = value;
    }
    /**
     * @return {?}
     */
    get nzDot() {
        return this._dot;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    set nzColor(color) {
        this._color = color;
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    get nzColor() {
        return this._color;
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        /** @type {?} */
        const defaultColors = ['blue', 'red', 'green'];
        /** @type {?} */
        const circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this._color) === -1) {
            this.renderer.setStyle(circle, 'border-color', this._color);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
        this.classMap = {
            ['ant-timeline-item-head-green']: this.nzColor === 'green',
            ['ant-timeline-item-head-red']: this.nzColor === 'red',
            ['ant-timeline-item-head-blue']: this.nzColor === 'blue'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
}
NzTimelineItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-timeline-item',
                preserveWhitespaces: false,
                template: "<li class=\"ant-timeline-item\" #liTemplate>\n  <div class=\"ant-timeline-item-tail\"></div>\n  <div\n    class=\"ant-timeline-item-head\"\n    [class.ant-timeline-item-head-custom]=\"nzDot\"\n    [ngClass]=\"classMap\">\n    <ng-container *ngIf=\"isDotString; else dotTemplate\">{{ nzDot }}</ng-container>\n    <ng-template #dotTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzDot\"></ng-template>\n    </ng-template>\n  </div>\n  <div class=\"ant-timeline-item-content\">\n    <ng-content></ng-content>\n  </div>\n</li>"
            }] }
];
/** @nocollapse */
NzTimelineItemComponent.ctorParameters = () => [
    { type: Renderer2 }
];
NzTimelineItemComponent.propDecorators = {
    liTemplate: [{ type: ViewChild, args: ['liTemplate',] }],
    nzDot: [{ type: Input }],
    nzColor: [{ type: Input }]
};
function NzTimelineItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimelineItemComponent.prototype._dot;
    /** @type {?} */
    NzTimelineItemComponent.prototype._color;
    /** @type {?} */
    NzTimelineItemComponent.prototype._isLast;
    /** @type {?} */
    NzTimelineItemComponent.prototype.liTemplate;
    /** @type {?} */
    NzTimelineItemComponent.prototype.isDotString;
    /** @type {?} */
    NzTimelineItemComponent.prototype.classMap;
    /** @type {?} */
    NzTimelineItemComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGltZWxpbmUvbnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNOzs7O0lBMERKLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7c0JBeERkLE1BQU07dUJBQ2IsS0FBSztLQXdEdEI7Ozs7O0lBbkRELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUNqRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUNwRjtLQUNGOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQ0ksS0FBSyxDQUFDLEtBQWlDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztLQUNuQjs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7OztJQUVELGNBQWM7O1FBRVosTUFBTSxhQUFhLEdBQUcsQ0FBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBRSxDQUFDOztRQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN0RixJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsQ0FBRSw4QkFBOEIsQ0FBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTztZQUM1RCxDQUFFLDRCQUE0QixDQUFFLEVBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLO1lBQzFELENBQUUsNkJBQTZCLENBQUUsRUFBRyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU07U0FDNUQsQ0FBQztLQUNIOzs7O0lBS0QsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsa0JBQWtCO2dCQUN2QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQix5aEJBQXdEO2FBQ3pEOzs7O1lBVEMsU0FBUzs7O3lCQWNSLFNBQVMsU0FBQyxZQUFZO29CQWlCdEIsS0FBSztzQkFVTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdGltZWxpbmUtaXRlbScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2RvdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcgPSAnYmx1ZSc7XG4gIHByaXZhdGUgX2lzTGFzdCA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdsaVRlbXBsYXRlJykgbGlUZW1wbGF0ZTogRWxlbWVudFJlZjtcbiAgaXNEb3RTdHJpbmc6IGJvb2xlYW47XG4gIGNsYXNzTWFwO1xuXG4gIHNldCBpc0xhc3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0xhc3QgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5pc0xhc3QpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5saVRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGltZWxpbmUtaXRlbS1sYXN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5saVRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGltZWxpbmUtaXRlbS1sYXN0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzTGFzdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNMYXN0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RG90KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNEb3RTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2RvdCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56RG90KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZG90O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56Q29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICAvLyBTdXBwb3J0IGN1c3RvbSBjb2xvclxuICAgIGNvbnN0IGRlZmF1bHRDb2xvcnMgPSBbICdibHVlJywgJ3JlZCcsICdncmVlbicgXTtcbiAgICBjb25zdCBjaXJjbGUgPSB0aGlzLmxpVGVtcGxhdGUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXRpbWVsaW5lLWl0ZW0taGVhZCcpO1xuICAgIGlmIChkZWZhdWx0Q29sb3JzLmluZGV4T2YodGhpcy5fY29sb3IpID09PSAtMSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InLCB0aGlzLl9jb2xvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoY2lyY2xlLCAnYm9yZGVyLWNvbG9yJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JlZW4nIF06IHRoaXMubnpDb2xvciA9PT0gJ2dyZWVuJyxcbiAgICAgIFsgJ2FudC10aW1lbGluZS1pdGVtLWhlYWQtcmVkJyBdICA6IHRoaXMubnpDb2xvciA9PT0gJ3JlZCcsXG4gICAgICBbICdhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWJsdWUnIF0gOiB0aGlzLm56Q29sb3IgPT09ICdibHVlJ1xuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG59XG4iXX0=