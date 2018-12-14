/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Host, HostBinding, HostListener, Input, Optional, Output, TemplateRef, ViewChild } from '@angular/core';
import { NzMatchMediaService } from '../core/services/nz-match-media.service';
import { toBoolean } from '../core/util/convert';
import { NzLayoutComponent } from './nz-layout.component';
export class NzSiderComponent {
    /**
     * @param {?} nzLayoutComponent
     * @param {?} nzMatchMediaService
     */
    constructor(nzLayoutComponent, nzMatchMediaService) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzReverseArrow(value) {
        this._reverseArrow = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzReverseArrow() {
        return this._reverseArrow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCollapsible(value) {
        this._collapsible = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzCollapsible() {
        return this._collapsible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCollapsed(value) {
        this._collapsed = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzCollapsed() {
        return this._collapsed;
    }
    /**
     * @return {?}
     */
    get setZeroClass() {
        return this.nzCollapsed && (this.nzCollapsedWidth === 0);
    }
    /**
     * @return {?}
     */
    get setFlex() {
        if (this.nzCollapsed) {
            return `0 0 ${this.nzCollapsedWidth}px`;
        }
        else {
            return `0 0 ${this.nzWidth}px`;
        }
    }
    /**
     * @return {?}
     */
    get setWidth() {
        if (this.nzCollapsed) {
            return this.nzCollapsedWidth;
        }
        else {
            return this.nzWidth;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onWindowResize(e) {
        this.watchMatchMedia();
    }
    /**
     * @return {?}
     */
    watchMatchMedia() {
        if (this.nzBreakpoint) {
            /** @type {?} */
            const matchBelow = this.nzMatchMediaService.matchMedia(`(max-width: ${this.dimensionMap[this.nzBreakpoint]})`).matches;
            this.below = matchBelow;
            this.nzCollapsed = matchBelow;
            if (this.isInit) {
                this.nzCollapsedChange.emit(matchBelow);
            }
        }
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.nzCollapsed = !this.nzCollapsed;
        this.nzCollapsedChange.emit(this.nzCollapsed);
    }
    /**
     * @return {?}
     */
    get isZeroTrigger() {
        return this.nzCollapsible && this.nzTrigger && (this.nzCollapsedWidth === 0) && ((this.nzBreakpoint && this.below) || (!this.nzBreakpoint));
    }
    /**
     * @return {?}
     */
    get isSiderTrigger() {
        return this.nzCollapsible && this.nzTrigger && (this.nzCollapsedWidth !== 0);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzLayoutComponent) {
            this.nzLayoutComponent.hasSider = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        Promise.resolve().then(() => this.watchMatchMedia());
    }
}
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
NzSiderComponent.ctorParameters = () => [
    { type: NzLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzMatchMediaService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImxheW91dC9uei1zaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLElBQUksRUFDSixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBWTFELE1BQU07Ozs7O0lBZ0hKLFlBQXdDLGlCQUFvQyxFQUFVLG1CQUF3QztRQUF0RixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjswQkEvR3pHLEtBQUs7NEJBQ0gsS0FBSzs2QkFFSixLQUFLO3FCQUNiLEtBQUs7c0JBQ0osS0FBSzs0QkFDQztZQUNyQixFQUFFLEVBQUcsT0FBTztZQUNaLEVBQUUsRUFBRyxPQUFPO1lBQ1osRUFBRSxFQUFHLE9BQU87WUFDWixFQUFFLEVBQUcsT0FBTztZQUNaLEVBQUUsRUFBRyxRQUFRO1lBQ2IsR0FBRyxFQUFFLFFBQVE7U0FDZDt1QkFDa0IsR0FBRztnQ0FDTSxFQUFFO2lDQXdDQSxJQUFJLFlBQVksRUFBRTtLQXlEL0M7Ozs7O0lBOUZELElBQ0ksY0FBYyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkM7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0tB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QUFDO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7S0FDdEQ7OztZQXBJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFVBQVU7Z0JBQy9CLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLDZxQkFBZ0Q7Z0JBQ2hELElBQUksRUFBaUI7b0JBQ25CLDBCQUEwQixFQUFFLE1BQU07aUJBQ25DO2FBQ0Y7Ozs7WUFYUSxpQkFBaUIsdUJBNEhYLFFBQVEsWUFBSSxJQUFJO1lBL0h0QixtQkFBbUI7Ozt1QkFrQnpCLFNBQVMsU0FBQyxnQkFBZ0I7c0JBWTFCLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUVMLEtBQUs7d0JBU0wsS0FBSzs0QkFTTCxLQUFLOzBCQVNMLEtBQUssWUFDTCxXQUFXLFNBQUMsa0NBQWtDO2dDQVM5QyxNQUFNOzJCQUVOLFdBQVcsU0FBQyxtQ0FBbUM7c0JBSy9DLFdBQVcsU0FBQyxZQUFZO3VCQVN4QixXQUFXLFNBQUMsb0JBQW9CLGNBQ2hDLFdBQVcsU0FBQyxvQkFBb0IsY0FDaEMsV0FBVyxTQUFDLGdCQUFnQjs2QkFTNUIsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1hdGNoTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9uei1tYXRjaC1tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL256LWxheW91dC5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBOekJyZWFrUG9pbnQgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNpZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlcl0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfY29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbGxhcHNpYmxlID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUcmlnZ2VyJykgX3RyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9yZXZlcnNlQXJyb3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBiZWxvdyA9IGZhbHNlO1xuICBwcml2YXRlIGlzSW5pdCA9IGZhbHNlO1xuICBwcml2YXRlIGRpbWVuc2lvbk1hcCA9IHtcbiAgICB4cyA6ICc0ODBweCcsXG4gICAgc20gOiAnNTc2cHgnLFxuICAgIG1kIDogJzc2OHB4JyxcbiAgICBsZyA6ICc5OTJweCcsXG4gICAgeGwgOiAnMTIwMHB4JyxcbiAgICB4eGw6ICcxNjAwcHgnXG4gIH07XG4gIEBJbnB1dCgpIG56V2lkdGggPSAyMDA7XG4gIEBJbnB1dCgpIG56Q29sbGFwc2VkV2lkdGggPSA4MDtcbiAgQElucHV0KCkgbnpCcmVha3BvaW50OiBOekJyZWFrUG9pbnQ7XG5cbiAgQElucHV0KClcbiAgc2V0IG56UmV2ZXJzZUFycm93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmV2ZXJzZUFycm93ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelJldmVyc2VBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZUFycm93O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHJpZ2dlcih2YWx1ZTogVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpUcmlnZ2VyKCk6IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNvbGxhcHNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29sbGFwc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56Q29sbGFwc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNpYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZCcpXG4gIHNldCBuekNvbGxhcHNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbGxhcHNlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpDb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlZDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBuekNvbGxhcHNlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1sYXlvdXQtc2lkZXItemVyby13aWR0aCcpXG4gIGdldCBzZXRaZXJvQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpDb2xsYXBzZWQgJiYgKHRoaXMubnpDb2xsYXBzZWRXaWR0aCA9PT0gMCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgnKVxuICBnZXQgc2V0RmxleCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm56Q29sbGFwc2VkKSB7XG4gICAgICByZXR1cm4gYDAgMCAke3RoaXMubnpDb2xsYXBzZWRXaWR0aH1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgMCAwICR7dGhpcy5ueldpZHRofXB4YDtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aC5weCcpXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoLnB4JylcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC5weCcpXG4gIGdldCBzZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm56Q29sbGFwc2VkKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekNvbGxhcHNlZFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5ueldpZHRoO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbICckZXZlbnQnIF0pXG4gIG9uV2luZG93UmVzaXplKGU6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoTWF0Y2hNZWRpYSgpO1xuICB9XG5cbiAgd2F0Y2hNYXRjaE1lZGlhKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QnJlYWtwb2ludCkge1xuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubnpNYXRjaE1lZGlhU2VydmljZS5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3RoaXMuZGltZW5zaW9uTWFwWyB0aGlzLm56QnJlYWtwb2ludCBdfSlgKS5tYXRjaGVzO1xuICAgICAgdGhpcy5iZWxvdyA9IG1hdGNoQmVsb3c7XG4gICAgICB0aGlzLm56Q29sbGFwc2VkID0gbWF0Y2hCZWxvdztcbiAgICAgIGlmICh0aGlzLmlzSW5pdCkge1xuICAgICAgICB0aGlzLm56Q29sbGFwc2VkQ2hhbmdlLmVtaXQobWF0Y2hCZWxvdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ29sbGFwc2UoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbGxhcHNlZCA9ICF0aGlzLm56Q29sbGFwc2VkO1xuICAgIHRoaXMubnpDb2xsYXBzZWRDaGFuZ2UuZW1pdCh0aGlzLm56Q29sbGFwc2VkKTtcbiAgfVxuXG4gIGdldCBpc1plcm9UcmlnZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56Q29sbGFwc2libGUgJiYgdGhpcy5uelRyaWdnZXIgJiYgKHRoaXMubnpDb2xsYXBzZWRXaWR0aCA9PT0gMCkgJiYgKCh0aGlzLm56QnJlYWtwb2ludCAmJiB0aGlzLmJlbG93KSB8fCAoIXRoaXMubnpCcmVha3BvaW50KSk7XG4gIH1cblxuICBnZXQgaXNTaWRlclRyaWdnZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpDb2xsYXBzaWJsZSAmJiB0aGlzLm56VHJpZ2dlciAmJiAodGhpcy5uekNvbGxhcHNlZFdpZHRoICE9PSAwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBuekxheW91dENvbXBvbmVudDogTnpMYXlvdXRDb21wb25lbnQsIHByaXZhdGUgbnpNYXRjaE1lZGlhU2VydmljZTogTnpNYXRjaE1lZGlhU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpMYXlvdXRDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpMYXlvdXRDb21wb25lbnQuaGFzU2lkZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLndhdGNoTWF0Y2hNZWRpYSgpKTtcbiAgfVxuXG59XG4iXX0=