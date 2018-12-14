/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, HostBinding, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { isNotNil } from '../core/util/check';
import { NzToolTipComponent } from './nz-tooltip.component';
export class NzTooltipDirective {
    /**
     * @param {?} elementRef
     * @param {?} hostView
     * @param {?} resolver
     * @param {?} renderer
     * @param {?} tooltip
     */
    constructor(elementRef, hostView, resolver, renderer, tooltip) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.tooltip = tooltip;
        this.unsubscribe$ = new Subject();
        // [NOTE] Here hard coded, and nzTitle used only under NzTooltipDirective currently.
        this.isTooltipOpen = false;
        this.isDynamicTooltip = false;
        this.factory = this.resolver.resolveComponentFactory(NzToolTipComponent);
        this.nzVisibleChange = new EventEmitter();
    }
    /**
     * @param {?} title
     * @return {?}
     */
    set nzTitle(title) {
        this._title = title;
        this.updateCompValue('nzTitle', title);
    }
    /**
     * @return {?}
     */
    get nzTitle() {
        return this._title;
    }
    /**
     * @param {?} title
     * @return {?}
     */
    set setTitle(title) {
        this.nzTitle = title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzContent(value) {
        this._content = value;
        this.updateCompValue('nzContent', value);
    }
    /**
     * @return {?}
     */
    get nzContent() {
        return this._content;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOverlayClassName(value) {
        this._overlayClassName = value;
        this.updateCompValue('nzOverlayClassName', value);
    }
    /**
     * @return {?}
     */
    get nzOverlayClassName() {
        return this._overlayClassName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOverlayStyle(value) {
        this._overlayStyle = value;
        this.updateCompValue('nzOverlayStyle', value);
    }
    /**
     * @return {?}
     */
    get nzOverlayStyle() {
        return this._overlayStyle;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMouseEnterDelay(value) {
        this._mouseEnterDelay = value;
        this.updateCompValue('nzMouseEnterDelay', value);
    }
    /**
     * @return {?}
     */
    get nzMouseEnterDelay() {
        return this._mouseEnterDelay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMouseLeaveDelay(value) {
        this._mouseLeaveDelay = value;
        this.updateCompValue('nzMouseLeaveDelay', value);
    }
    /**
     * @return {?}
     */
    get nzMouseLeaveDelay() {
        return this._mouseEnterDelay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        this._visible = value;
        this.updateCompValue('nzVisible', value);
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this.updateCompValue('nzTrigger', value);
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
    set nzPlacement(value) {
        this._placement = value;
        this.updateCompValue('nzPlacement', value);
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this._placement;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this.isTooltipOpen;
    }
    /**
     * @return {?}
     */
    show() {
        this.tooltip.show();
        this.isTooltipOpen = true;
    }
    /**
     * @return {?}
     */
    hide() {
        this.tooltip.hide();
        this.isTooltipOpen = false;
    }
    /**
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) { // Clear timer during the delay time
            // Clear timer during the delay time
            window.clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
        else if (delay > 0) {
            this.delayTimer = window.setTimeout(() => {
                this.delayTimer = null;
                isEnter ? this.show() : this.hide();
            }, delay * 1000);
        }
        else {
            isEnter && isOrigin ? this.show() : this.hide(); // [Compatible] The "isOrigin" is used due to the tooltip will not hide immediately (may caused by the fade-out animation)
        }
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    updateCompValue(key, value) {
        if (this.isDynamicTooltip && isNotNil(value)) {
            this.tooltip[key] = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Support faster tooltip mode: <a nz-tooltip="xxx"></a>. [NOTE] Used only under NzTooltipDirective currently.
        if (!this.tooltip) {
            /** @type {?} */
            const tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            /** @type {?} */
            const properties = ['nzTitle', 'nzContent', 'nzOverlayClassName', 'nzOverlayStyle', 'nzMouseEnterDelay', 'nzMouseLeaveDelay', 'nzVisible', 'nzTrigger', 'nzPlacement'];
            properties.forEach(property => this.updateCompValue(property, this[property]));
            this.tooltip.nzVisibleChange.pipe(takeUntil(this.unsubscribe$), distinctUntilChanged()).subscribe(data => {
                this._visible = data;
                this.nzVisibleChange.emit(data);
            });
        }
        this.tooltip.setOverlayOrigin(this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.tooltip.nzTrigger === 'hover') {
            /** @type {?} */
            let overlayElement;
            this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => this.delayEnterLeave(true, true, this.tooltip.nzMouseEnterDelay));
            this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => {
                this.delayEnterLeave(true, false, this.tooltip.nzMouseLeaveDelay);
                if (this.tooltip.overlay.overlayRef && !overlayElement) { // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    overlayElement = this.tooltip.overlay.overlayRef.overlayElement;
                    this.renderer.listen(overlayElement, 'mouseenter', () => this.delayEnterLeave(false, true));
                    this.renderer.listen(overlayElement, 'mouseleave', () => this.delayEnterLeave(false, false));
                }
            });
        }
        else if (this.tooltip.nzTrigger === 'focus') {
            this.renderer.listen(this.elementRef.nativeElement, 'focus', () => this.show());
            this.renderer.listen(this.elementRef.nativeElement, 'blur', () => this.hide());
        }
        else if (this.tooltip.nzTrigger === 'click') {
            this.renderer.listen(this.elementRef.nativeElement, 'click', (e) => {
                e.preventDefault();
                this.show();
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-tooltip]'
            },] }
];
/** @nocollapse */
NzTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: Renderer2 },
    { type: NzToolTipComponent, decorators: [{ type: Optional }] }
];
NzTooltipDirective.propDecorators = {
    nzVisibleChange: [{ type: Output }],
    nzTitle: [{ type: Input, args: ['nz-tooltip',] }],
    setTitle: [{ type: Input, args: ['nzTitle',] }],
    nzContent: [{ type: Input }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    isOpen: [{ type: HostBinding, args: ['class.ant-tooltip-open',] }]
};
function NzTooltipDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTooltipDirective.prototype.unsubscribe$;
    /** @type {?} */
    NzTooltipDirective.prototype.isTooltipOpen;
    /** @type {?} */
    NzTooltipDirective.prototype.isDynamicTooltip;
    /** @type {?} */
    NzTooltipDirective.prototype.delayTimer;
    /** @type {?} */
    NzTooltipDirective.prototype._title;
    /** @type {?} */
    NzTooltipDirective.prototype._content;
    /** @type {?} */
    NzTooltipDirective.prototype._overlayClassName;
    /** @type {?} */
    NzTooltipDirective.prototype._overlayStyle;
    /** @type {?} */
    NzTooltipDirective.prototype._mouseEnterDelay;
    /** @type {?} */
    NzTooltipDirective.prototype._mouseLeaveDelay;
    /** @type {?} */
    NzTooltipDirective.prototype._visible;
    /** @type {?} */
    NzTooltipDirective.prototype._trigger;
    /** @type {?} */
    NzTooltipDirective.prototype._placement;
    /** @type {?} */
    NzTooltipDirective.prototype.factory;
    /** @type {?} */
    NzTooltipDirective.prototype.nzVisibleChange;
    /** @type {?} */
    NzTooltipDirective.prototype.elementRef;
    /** @type {?} */
    NzTooltipDirective.prototype.hostView;
    /** @type {?} */
    NzTooltipDirective.prototype.resolver;
    /** @type {?} */
    NzTooltipDirective.prototype.renderer;
    /** @type {?} */
    NzTooltipDirective.prototype.tooltip;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidG9vbHRpcC9uei10b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLNUQsTUFBTTs7Ozs7Ozs7SUFzSkosWUFDUyxZQUNBLFVBQ0EsVUFDQSxVQUNZLE9BQTJCO1FBSnZDLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUFDUixhQUFRLEdBQVIsUUFBUTtRQUNSLGFBQVEsR0FBUixRQUFRO1FBQ0ksWUFBTyxHQUFQLE9BQU8sQ0FBb0I7NEJBMUp6QixJQUFJLE9BQU8sRUFBUTs7NkJBR2pCLEtBQUs7Z0NBQ1gsS0FBSzt1QkFXd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQzsrQkFDN0UsSUFBSSxZQUFZLEVBQVc7S0EySXREOzs7OztJQXpJRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN4Qzs7OztJQUVELElBQUks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QUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7U0FDaEY7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDakUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjtLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7O1lBN01GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQXJCQyxVQUFVO1lBVVYsZ0JBQWdCO1lBWmhCLHdCQUF3QjtZQVV4QixTQUFTO1lBU0Ysa0JBQWtCLHVCQWdLdEIsUUFBUTs7OzhCQTFJVixNQUFNO3NCQUVOLEtBQUssU0FBQyxZQUFZO3VCQVVsQixLQUFLLFNBQUMsU0FBUzt3QkFLZixLQUFLO2lDQVVMLEtBQUs7NkJBVUwsS0FBSztnQ0FVTCxLQUFLO2dDQVVMLEtBQUs7d0JBVUwsS0FBSzt3QkFVTCxLQUFLOzBCQVVMLEtBQUs7cUJBVUwsV0FBVyxTQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IE56VG9vbFRpcENvbXBvbmVudCB9IGZyb20gJy4vbnotdG9vbHRpcC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotdG9vbHRpcF0nXG59KVxuZXhwb3J0IGNsYXNzIE56VG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8vIFtOT1RFXSBIZXJlIGhhcmQgY29kZWQsIGFuZCBuelRpdGxlIHVzZWQgb25seSB1bmRlciBOelRvb2x0aXBEaXJlY3RpdmUgY3VycmVudGx5LlxuICBpc1Rvb2x0aXBPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIGlzRHluYW1pY1Rvb2x0aXAgPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciBjdXJyZW50IHRvb2x0aXAgaXMgZHluYW1pYyBjcmVhdGVkXG4gIGRlbGF5VGltZXI7IC8vIFRpbWVyIGZvciBkZWxheSBlbnRlci9sZWF2ZVxuICBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBfY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIF9vdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIF9vdmVybGF5U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcbiAgX21vdXNlRW50ZXJEZWxheTogbnVtYmVyO1xuICBfbW91c2VMZWF2ZURlbGF5OiBudW1iZXI7XG4gIF92aXNpYmxlOiBib29sZWFuO1xuICBfdHJpZ2dlcjogc3RyaW5nO1xuICBfcGxhY2VtZW50OiBzdHJpbmc7XG4gIGZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8TnpUb29sVGlwQ29tcG9uZW50PiA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoTnpUb29sVGlwQ29tcG9uZW50KTtcbiAgQE91dHB1dCgpIG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoJ256LXRvb2x0aXAnKVxuICBzZXQgbnpUaXRsZSh0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCduelRpdGxlJywgdGl0bGUpO1xuICB9XG5cbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgnbnpUaXRsZScpXG4gIHNldCBzZXRUaXRsZSh0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLm56VGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekNvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCduekNvbnRlbnQnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpDb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek92ZXJsYXlDbGFzc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX292ZXJsYXlDbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpPdmVybGF5Q2xhc3NOYW1lJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56T3ZlcmxheUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5Q2xhc3NOYW1lO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56T3ZlcmxheVN0eWxlKHZhbHVlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLl9vdmVybGF5U3R5bGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpPdmVybGF5U3R5bGUnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpPdmVybGF5U3R5bGUoKTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVN0eWxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TW91c2VFbnRlckRlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tb3VzZUVudGVyRGVsYXkgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpNb3VzZUVudGVyRGVsYXknLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpNb3VzZUVudGVyRGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbW91c2VFbnRlckRlbGF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TW91c2VMZWF2ZURlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tb3VzZUxlYXZlRGVsYXkgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpNb3VzZUxlYXZlRGVsYXknLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpNb3VzZUxlYXZlRGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbW91c2VFbnRlckRlbGF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpWaXNpYmxlJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpUcmlnZ2VyJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56VHJpZ2dlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpQbGFjZW1lbnQnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtdG9vbHRpcC1vcGVuJylcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1Rvb2x0aXBPcGVuO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XG4gICAgdGhpcy5pc1Rvb2x0aXBPcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xuICAgIHRoaXMuaXNUb29sdGlwT3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxheUVudGVyTGVhdmUoaXNPcmlnaW46IGJvb2xlYW4sIGlzRW50ZXI6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHsgLy8gQ2xlYXIgdGltZXIgZHVyaW5nIHRoZSBkZWxheSB0aW1lXG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XG4gICAgICAgIGlzRW50ZXIgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNFbnRlciAmJiBpc09yaWdpbiA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7IC8vIFtDb21wYXRpYmxlXSBUaGUgXCJpc09yaWdpblwiIGlzIHVzZWQgZHVlIHRvIHRoZSB0b29sdGlwIHdpbGwgbm90IGhpZGUgaW1tZWRpYXRlbHkgKG1heSBjYXVzZWQgYnkgdGhlIGZhZGUtb3V0IGFuaW1hdGlvbilcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZUNvbXBWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRHluYW1pY1Rvb2x0aXAgJiYgaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnRvb2x0aXBbIGtleSBdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHB1YmxpYyByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyB0b29sdGlwOiBOelRvb2xUaXBDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFN1cHBvcnQgZmFzdGVyIHRvb2x0aXAgbW9kZTogPGEgbnotdG9vbHRpcD1cInh4eFwiPjwvYT4uIFtOT1RFXSBVc2VkIG9ubHkgdW5kZXIgTnpUb29sdGlwRGlyZWN0aXZlIGN1cnJlbnRseS5cbiAgICBpZiAoIXRoaXMudG9vbHRpcCkge1xuICAgICAgY29uc3QgdG9vbHRpcENvbXBvbmVudCA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KHRoaXMuZmFjdG9yeSk7XG4gICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwQ29tcG9uZW50Lmluc3RhbmNlO1xuICAgICAgLy8gUmVtb3ZlIGVsZW1lbnQgd2hlbiB1c2UgZGlyZWN0aXZlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8xOTY3XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRvb2x0aXBDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IFsgJ256VGl0bGUnLCAnbnpDb250ZW50JywgJ256T3ZlcmxheUNsYXNzTmFtZScsICduek92ZXJsYXlTdHlsZScsICduek1vdXNlRW50ZXJEZWxheScsICduek1vdXNlTGVhdmVEZWxheScsICduelZpc2libGUnLCAnbnpUcmlnZ2VyJywgJ256UGxhY2VtZW50JyBdO1xuICAgICAgcHJvcGVydGllcy5mb3JFYWNoKHByb3BlcnR5ID0+IHRoaXMudXBkYXRlQ29tcFZhbHVlKHByb3BlcnR5LCB0aGlzWyBwcm9wZXJ0eSBdKSk7XG4gICAgICB0aGlzLnRvb2x0aXAubnpWaXNpYmxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gZGF0YTtcbiAgICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRvb2x0aXAuc2V0T3ZlcmxheU9yaWdpbih0aGlzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwLm56VHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgbGV0IG92ZXJsYXlFbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgdHJ1ZSwgdGhpcy50b29sdGlwLm56TW91c2VFbnRlckRlbGF5KSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIGZhbHNlLCB0aGlzLnRvb2x0aXAubnpNb3VzZUxlYXZlRGVsYXkpO1xuICAgICAgICBpZiAodGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZiAmJiAhb3ZlcmxheUVsZW1lbnQpIHsgLy8gTk9URTogd2UgYmluZCBldmVudHMgdW5kZXIgXCJtb3VzZWxlYXZlXCIgZHVlIHRvIHRoZSBvdmVybGF5UmVmIGlzIG9ubHkgY3JlYXRlZCBhZnRlciB0aGUgb3ZlcmxheSB3YXMgY29tcGxldGVseSBzaG93biB1cFxuICAgICAgICAgIG92ZXJsYXlFbGVtZW50ID0gdGhpcy50b29sdGlwLm92ZXJsYXkub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudDtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgdHJ1ZSkpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG9vbHRpcC5uelRyaWdnZXIgPT09ICdmb2N1cycpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZm9jdXMnLCAoKSA9PiB0aGlzLnNob3coKSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JsdXInLCAoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2x0aXAubnpUcmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbn1cbiJdfQ==