/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';
var NzTimelineItemComponent = /** @class */ (function () {
    function NzTimelineItemComponent(renderer) {
        this.renderer = renderer;
        this._color = 'blue';
        this._isLast = false;
    }
    Object.defineProperty(NzTimelineItemComponent.prototype, "isLast", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isLast;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLast = value;
            if (this.isLast) {
                this.renderer.addClass(this.liTemplate.nativeElement, 'ant-timeline-item-last');
            }
            else {
                this.renderer.removeClass(this.liTemplate.nativeElement, 'ant-timeline-item-last');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimelineItemComponent.prototype, "nzDot", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dot;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isDotString = !(value instanceof TemplateRef);
            this._dot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimelineItemComponent.prototype, "nzColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            this._color = color;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTimelineItemComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var defaultColors = ['blue', 'red', 'green'];
        /** @type {?} */
        var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this._color) === -1) {
            this.renderer.setStyle(circle, 'border-color', this._color);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
        this.classMap = (_a = {},
            _a['ant-timeline-item-head-green'] = this.nzColor === 'green',
            _a['ant-timeline-item-head-red'] = this.nzColor === 'red',
            _a['ant-timeline-item-head-blue'] = this.nzColor === 'blue',
            _a);
    };
    /**
     * @return {?}
     */
    NzTimelineItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    NzTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-timeline-item',
                    preserveWhitespaces: false,
                    template: "<li class=\"ant-timeline-item\" #liTemplate>\n  <div class=\"ant-timeline-item-tail\"></div>\n  <div\n    class=\"ant-timeline-item-head\"\n    [class.ant-timeline-item-head-custom]=\"nzDot\"\n    [ngClass]=\"classMap\">\n    <ng-container *ngIf=\"isDotString; else dotTemplate\">{{ nzDot }}</ng-container>\n    <ng-template #dotTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzDot\"></ng-template>\n    </ng-template>\n  </div>\n  <div class=\"ant-timeline-item-content\">\n    <ng-content></ng-content>\n  </div>\n</li>"
                }] }
    ];
    /** @nocollapse */
    NzTimelineItemComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NzTimelineItemComponent.propDecorators = {
        liTemplate: [{ type: ViewChild, args: ['liTemplate',] }],
        nzDot: [{ type: Input }],
        nzColor: [{ type: Input }]
    };
    return NzTimelineItemComponent;
}());
export { NzTimelineItemComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGltZWxpbmUvbnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQzs7SUFpRXJCLGlDQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3NCQXhEZCxNQUFNO3VCQUNiLEtBQUs7S0F3RHRCO0lBbkRELHNCQUFJLDJDQUFNOzs7O1FBU1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBWEQsVUFBVyxLQUFjO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO2FBQ2pGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7YUFDcEY7U0FDRjs7O09BQUE7SUFNRCxzQkFDSSwwQ0FBSzs7OztRQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCOzs7OztRQVJELFVBQ1UsS0FBaUM7WUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ25COzs7T0FBQTtJQU1ELHNCQUNJLDRDQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBUkQsVUFDWSxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2Qjs7O09BQUE7Ozs7SUFNRCxnREFBYzs7O0lBQWQ7OztRQUVFLElBQU0sYUFBYSxHQUFHLENBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUUsQ0FBQzs7UUFDakQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdEYsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxDQUFDLFFBQVE7WUFDWCxHQUFFLDhCQUE4QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTztZQUM1RCxHQUFFLDRCQUE0QixJQUFNLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSztZQUMxRCxHQUFFLDZCQUE2QixJQUFLLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTTtlQUM1RCxDQUFDO0tBQ0g7Ozs7SUFLRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGtCQUFrQjtvQkFDdkMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIseWhCQUF3RDtpQkFDekQ7Ozs7Z0JBVEMsU0FBUzs7OzZCQWNSLFNBQVMsU0FBQyxZQUFZO3dCQWlCdEIsS0FBSzswQkFVTCxLQUFLOztrQ0E5Q1I7O1NBZWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdGltZWxpbmUtaXRlbScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2RvdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmcgPSAnYmx1ZSc7XG4gIHByaXZhdGUgX2lzTGFzdCA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdsaVRlbXBsYXRlJykgbGlUZW1wbGF0ZTogRWxlbWVudFJlZjtcbiAgaXNEb3RTdHJpbmc6IGJvb2xlYW47XG4gIGNsYXNzTWFwO1xuXG4gIHNldCBpc0xhc3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0xhc3QgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5pc0xhc3QpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5saVRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGltZWxpbmUtaXRlbS1sYXN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5saVRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGltZWxpbmUtaXRlbS1sYXN0Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzTGFzdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNMYXN0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RG90KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNEb3RTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2RvdCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56RG90KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZG90O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gY29sb3I7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56Q29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29sb3I7XG4gIH1cblxuICB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICAvLyBTdXBwb3J0IGN1c3RvbSBjb2xvclxuICAgIGNvbnN0IGRlZmF1bHRDb2xvcnMgPSBbICdibHVlJywgJ3JlZCcsICdncmVlbicgXTtcbiAgICBjb25zdCBjaXJjbGUgPSB0aGlzLmxpVGVtcGxhdGUubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW50LXRpbWVsaW5lLWl0ZW0taGVhZCcpO1xuICAgIGlmIChkZWZhdWx0Q29sb3JzLmluZGV4T2YodGhpcy5fY29sb3IpID09PSAtMSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InLCB0aGlzLl9jb2xvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoY2lyY2xlLCAnYm9yZGVyLWNvbG9yJyk7XG4gICAgfVxuXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC10aW1lbGluZS1pdGVtLWhlYWQtZ3JlZW4nIF06IHRoaXMubnpDb2xvciA9PT0gJ2dyZWVuJyxcbiAgICAgIFsgJ2FudC10aW1lbGluZS1pdGVtLWhlYWQtcmVkJyBdICA6IHRoaXMubnpDb2xvciA9PT0gJ3JlZCcsXG4gICAgICBbICdhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWJsdWUnIF0gOiB0aGlzLm56Q29sb3IgPT09ICdibHVlJ1xuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG59XG4iXX0=