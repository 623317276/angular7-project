/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Host, HostBinding, HostListener, Input, Optional, Output, TemplateRef, ViewChild } from '@angular/core';
import { NzMatchMediaService } from '../core/services/nz-match-media.service';
import { toBoolean } from '../core/util/convert';
import { NzLayoutComponent } from './nz-layout.component';
var NzSiderComponent = /** @class */ (function () {
    function NzSiderComponent(nzLayoutComponent, nzMatchMediaService) {
        this.nzLayoutComponent = nzLayoutComponent;
        this.nzMatchMediaService = nzMatchMediaService;
        this._collapsed = false;
        this._collapsible = false;
        this._reverseArrow = false;
        this.below = false;
        this.isInit = false;
        this.dimensionMap = {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1600px'
        };
        this.nzWidth = 200;
        this.nzCollapsedWidth = 80;
        this.nzCollapsedChange = new EventEmitter();
    }
    Object.defineProperty(NzSiderComponent.prototype, "nzReverseArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._reverseArrow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._reverseArrow = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "nzTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "nzCollapsible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._collapsible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._collapsible = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "nzCollapsed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._collapsed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._collapsed = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "setZeroClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzCollapsed && (this.nzCollapsedWidth === 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "setFlex", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzCollapsed) {
                return "0 0 " + this.nzCollapsedWidth + "px";
            }
            else {
                return "0 0 " + this.nzWidth + "px";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "setWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzCollapsed) {
                return this.nzCollapsedWidth;
            }
            else {
                return this.nzWidth;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    NzSiderComponent.prototype.onWindowResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.watchMatchMedia();
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.watchMatchMedia = /**
     * @return {?}
     */
    function () {
        if (this.nzBreakpoint) {
            /** @type {?} */
            var matchBelow = this.nzMatchMediaService.matchMedia("(max-width: " + this.dimensionMap[this.nzBreakpoint] + ")").matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            if (this.isInit) {
                this.nzCollapsedChange.emit(matchBelow);
            }
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    };
    Object.defineProperty(NzSiderComponent.prototype, "isZeroTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzCollapsible && this.nzTrigger && (this.nzCollapsedWidth === 0) && ((this.nzBreakpoint && this.below) || (!this.nzBreakpoint));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSiderComponent.prototype, "isSiderTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzCollapsible && this.nzTrigger && (this.nzCollapsedWidth !== 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.hasSider = true;
        }
    };
    /**
     * @return {?}
     */
    NzSiderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isInit = true;
        Promise.resolve().then(function () { return _this.watchMatchMedia(); });
    };
    NzSiderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-sider',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-layout-sider-children\">\n  <ng-content></ng-content>\n</div>\n<span class=\"ant-layout-sider-zero-width-trigger\" *ngIf=\"isZeroTrigger\" (click)=\"toggleCollapse()\">\n  <i nz-icon type=\"bars\"></i>\n</span>\n<div class=\"ant-layout-sider-trigger\" *ngIf=\"isSiderTrigger\" (click)=\"toggleCollapse()\" [style.width.px]=\"nzCollapsed?nzCollapsedWidth:nzWidth\">\n  <ng-template [ngTemplateOutlet]=\"nzTrigger\"></ng-template>\n</div>\n<ng-template #defaultTrigger>\n  <i nz-icon [type]=\"nzCollapsed ? 'right' : 'left'\" *ngIf=\"!nzReverseArrow\"></i>\n  <i nz-icon [type]=\"nzCollapsed ? 'left' : 'right'\" *ngIf=\"nzReverseArrow\"></i>\n</ng-template>",
                    host: {
                        '[class.ant-layout-sider]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSiderComponent.ctorParameters = function () { return [
        { type: NzLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzMatchMediaService }
    ]; };
    NzSiderComponent.propDecorators = {
        _trigger: [{ type: ViewChild, args: ['defaultTrigger',] }],
        nzWidth: [{ type: Input }],
        nzCollapsedWidth: [{ type: Input }],
        nzBreakpoint: [{ type: Input }],
        nzReverseArrow: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzCollapsible: [{ type: Input }],
        nzCollapsed: [{ type: Input }, { type: HostBinding, args: ['class.ant-layout-sider-collapsed',] }],
        nzCollapsedChange: [{ type: Output }],
        setZeroClass: [{ type: HostBinding, args: ['class.ant-layout-sider-zero-width',] }],
        setFlex: [{ type: HostBinding, args: ['style.flex',] }],
        setWidth: [{ type: HostBinding, args: ['style.max-width.px',] }, { type: HostBinding, args: ['style.min-width.px',] }, { type: HostBinding, args: ['style.width.px',] }],
        onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return NzSiderComponent;
}());
export { NzSiderComponent };
function NzSiderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSiderComponent.prototype._collapsed;
    /** @type {?} */
    NzSiderComponent.prototype._collapsible;
    /** @type {?} */
    NzSiderComponent.prototype._trigger;
    /** @type {?} */
    NzSiderComponent.prototype._reverseArrow;
    /** @type {?} */
    NzSiderComponent.prototype.below;
    /** @type {?} */
    NzSiderComponent.prototype.isInit;
    /** @type {?} */
    NzSiderComponent.prototype.dimensionMap;
    /** @type {?} */
    NzSiderComponent.prototype.nzWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedWidth;
    /** @type {?} */
    NzSiderComponent.prototype.nzBreakpoint;
    /** @type {?} */
    NzSiderComponent.prototype.nzCollapsedChange;
    /** @type {?} */
    NzSiderComponent.prototype.nzLayoutComponent;
    /** @type {?} */
    NzSiderComponent.prototype.nzMatchMediaService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImxheW91dC9uei1zaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQTRIeEQsMEJBQXdDLGlCQUFvQyxFQUFVLG1CQUF3QztRQUF0RixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjswQkEvR3pHLEtBQUs7NEJBQ0gsS0FBSzs2QkFFSixLQUFLO3FCQUNiLEtBQUs7c0JBQ0osS0FBSzs0QkFDQztZQUNyQixFQUFFLEVBQUcsT0FBTztZQUNaLEVBQUUsRUFBRyxPQUFPO1lBQ1osRUFBRSxFQUFHLE9BQU87WUFDWixFQUFFLEVBQUcsT0FBTztZQUNaLEVBQUUsRUFBRyxRQUFRO1lBQ2IsR0FBRyxFQUFFLFFBQVE7U0FDZDt1QkFDa0IsR0FBRztnQ0FDTSxFQUFFO2lDQXdDQSxJQUFJLFlBQVksRUFBRTtLQXlEL0M7SUE5RkQsc0JBQ0ksNENBQWM7Ozs7UUFJbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7Ozs7O1FBUEQsVUFDbUIsS0FBYztZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2Qzs7O09BQUE7SUFN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Q0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QztLQUNGOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxFQUFFLEVBQXRCLENBQXNCLENBQUMsQ0FBQztLQUN0RDs7Z0JBcElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsVUFBVTtvQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsNnFCQUFnRDtvQkFDaEQsSUFBSSxFQUFpQjt3QkFDbkIsMEJBQTBCLEVBQUUsTUFBTTtxQkFDbkM7aUJBQ0Y7Ozs7Z0JBWFEsaUJBQWlCLHVCQTRIWCxRQUFRLFlBQUksSUFBSTtnQkEvSHRCLG1CQUFtQjs7OzJCQWtCekIsU0FBUyxTQUFDLGdCQUFnQjswQkFZMUIsS0FBSzttQ0FDTCxLQUFLOytCQUNMLEtBQUs7aUNBRUwsS0FBSzs0QkFTTCxLQUFLO2dDQVNMLEtBQUs7OEJBU0wsS0FBSyxZQUNMLFdBQVcsU0FBQyxrQ0FBa0M7b0NBUzlDLE1BQU07K0JBRU4sV0FBVyxTQUFDLG1DQUFtQzswQkFLL0MsV0FBVyxTQUFDLFlBQVk7MkJBU3hCLFdBQVcsU0FBQyxvQkFBb0IsY0FDaEMsV0FBVyxTQUFDLG9CQUFvQixjQUNoQyxXQUFXLFNBQUMsZ0JBQWdCO2lDQVM1QixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFOzsyQkFqSDdDOztTQThCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpNYXRjaE1lZGlhU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvbnotbWF0Y2gtbWVkaWEuc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9uei1sYXlvdXQuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTnpCcmVha1BvaW50ID0gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zaWRlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zaWRlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2NvbGxhcHNlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2xsYXBzaWJsZSA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdkZWZhdWx0VHJpZ2dlcicpIF90cmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfcmV2ZXJzZUFycm93ID0gZmFsc2U7XG4gIHByaXZhdGUgYmVsb3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0luaXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkaW1lbnNpb25NYXAgPSB7XG4gICAgeHMgOiAnNDgwcHgnLFxuICAgIHNtIDogJzU3NnB4JyxcbiAgICBtZCA6ICc3NjhweCcsXG4gICAgbGcgOiAnOTkycHgnLFxuICAgIHhsIDogJzEyMDBweCcsXG4gICAgeHhsOiAnMTYwMHB4J1xuICB9O1xuICBASW5wdXQoKSBueldpZHRoID0gMjAwO1xuICBASW5wdXQoKSBuekNvbGxhcHNlZFdpZHRoID0gODA7XG4gIEBJbnB1dCgpIG56QnJlYWtwb2ludDogTnpCcmVha1BvaW50O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelJldmVyc2VBcnJvdyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JldmVyc2VBcnJvdyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpSZXZlcnNlQXJyb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldmVyc2VBcnJvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VHJpZ2dlcigpOiBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDb2xsYXBzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbGxhcHNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekNvbGxhcHNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzaWJsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWQnKVxuICBzZXQgbnpDb2xsYXBzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb2xsYXBzZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56Q29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZWQ7XG4gIH1cblxuICBAT3V0cHV0KCkgbnpDb2xsYXBzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGgnKVxuICBnZXQgc2V0WmVyb0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56Q29sbGFwc2VkICYmICh0aGlzLm56Q29sbGFwc2VkV2lkdGggPT09IDApO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4JylcbiAgZ2V0IHNldEZsZXgoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5uekNvbGxhcHNlZCkge1xuICAgICAgcmV0dXJuIGAwIDAgJHt0aGlzLm56Q29sbGFwc2VkV2lkdGh9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYDAgMCAke3RoaXMubnpXaWR0aH1weGA7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXgtd2lkdGgucHgnKVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1pbi13aWR0aC5weCcpXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICBnZXQgc2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5uekNvbGxhcHNlZCkge1xuICAgICAgcmV0dXJuIHRoaXMubnpDb2xsYXBzZWRXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubnpXaWR0aDtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyAnJGV2ZW50JyBdKVxuICBvbldpbmRvd1Jlc2l6ZShlOiBVSUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy53YXRjaE1hdGNoTWVkaWEoKTtcbiAgfVxuXG4gIHdhdGNoTWF0Y2hNZWRpYSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekJyZWFrcG9pbnQpIHtcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm56TWF0Y2hNZWRpYVNlcnZpY2UubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt0aGlzLmRpbWVuc2lvbk1hcFsgdGhpcy5uekJyZWFrcG9pbnQgXX0pYCkubWF0Y2hlcztcbiAgICAgIHRoaXMuYmVsb3cgPSBtYXRjaEJlbG93O1xuICAgICAgdGhpcy5uekNvbGxhcHNlZCA9IG1hdGNoQmVsb3c7XG4gICAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgICAgdGhpcy5uekNvbGxhcHNlZENoYW5nZS5lbWl0KG1hdGNoQmVsb3cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIHRoaXMubnpDb2xsYXBzZWQgPSAhdGhpcy5uekNvbGxhcHNlZDtcbiAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQodGhpcy5uekNvbGxhcHNlZCk7XG4gIH1cblxuICBnZXQgaXNaZXJvVHJpZ2dlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekNvbGxhcHNpYmxlICYmIHRoaXMubnpUcmlnZ2VyICYmICh0aGlzLm56Q29sbGFwc2VkV2lkdGggPT09IDApICYmICgodGhpcy5uekJyZWFrcG9pbnQgJiYgdGhpcy5iZWxvdykgfHwgKCF0aGlzLm56QnJlYWtwb2ludCkpO1xuICB9XG5cbiAgZ2V0IGlzU2lkZXJUcmlnZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56Q29sbGFwc2libGUgJiYgdGhpcy5uelRyaWdnZXIgJiYgKHRoaXMubnpDb2xsYXBzZWRXaWR0aCAhPT0gMCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgbnpMYXlvdXRDb21wb25lbnQ6IE56TGF5b3V0Q29tcG9uZW50LCBwcml2YXRlIG56TWF0Y2hNZWRpYVNlcnZpY2U6IE56TWF0Y2hNZWRpYVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TGF5b3V0Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56TGF5b3V0Q29tcG9uZW50Lmhhc1NpZGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy53YXRjaE1hdGNoTWVkaWEoKSk7XG4gIH1cblxufVxuIl19