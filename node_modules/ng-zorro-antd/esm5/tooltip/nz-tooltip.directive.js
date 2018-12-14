/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, HostBinding, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { isNotNil } from '../core/util/check';
import { NzToolTipComponent } from './nz-tooltip.component';
var NzTooltipDirective = /** @class */ (function () {
    function NzTooltipDirective(elementRef, hostView, resolver, renderer, tooltip) {
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
    Object.defineProperty(NzTooltipDirective.prototype, "nzTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this._title = title;
            this.updateCompValue('nzTitle', title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "setTitle", {
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this.nzTitle = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "nzContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._content;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._content = value;
            this.updateCompValue('nzContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "nzOverlayClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._overlayClassName;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._overlayClassName = value;
            this.updateCompValue('nzOverlayClassName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "nzOverlayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._overlayStyle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._overlayStyle = value;
            this.updateCompValue('nzOverlayStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "nzMouseEnterDelay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mouseEnterDelay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mouseEnterDelay = value;
            this.updateCompValue('nzMouseEnterDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "nzMouseLeaveDelay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mouseEnterDelay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mouseLeaveDelay = value;
            this.updateCompValue('nzMouseLeaveDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visible = value;
            this.updateCompValue('nzVisible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "nzTrigger", {
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
            this.updateCompValue('nzTrigger', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "nzPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placement = value;
            this.updateCompValue('nzPlacement', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTooltipDirective.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isTooltipOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.tooltip.show();
        this.isTooltipOpen = true;
    };
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.tooltip.hide();
        this.isTooltipOpen = false;
    };
    /**
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    NzTooltipDirective.prototype.delayEnterLeave = /**
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) { // Clear timer during the delay time
            // Clear timer during the delay time
            window.clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
        else if (delay > 0) {
            this.delayTimer = window.setTimeout(function () {
                _this.delayTimer = null;
                isEnter ? _this.show() : _this.hide();
            }, delay * 1000);
        }
        else {
            isEnter && isOrigin ? this.show() : this.hide(); // [Compatible] The "isOrigin" is used due to the tooltip will not hide immediately (may caused by the fade-out animation)
        }
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NzTooltipDirective.prototype.updateCompValue = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (this.isDynamicTooltip && isNotNil(value)) {
            this.tooltip[key] = value;
        }
    };
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Support faster tooltip mode: <a nz-tooltip="xxx"></a>. [NOTE] Used only under NzTooltipDirective currently.
        if (!this.tooltip) {
            /** @type {?} */
            var tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            /** @type {?} */
            var properties = ['nzTitle', 'nzContent', 'nzOverlayClassName', 'nzOverlayStyle', 'nzMouseEnterDelay', 'nzMouseLeaveDelay', 'nzVisible', 'nzTrigger', 'nzPlacement'];
            properties.forEach(function (property) { return _this.updateCompValue(property, _this[property]); });
            this.tooltip.nzVisibleChange.pipe(takeUntil(this.unsubscribe$), distinctUntilChanged()).subscribe(function (data) {
                _this._visible = data;
                _this.nzVisibleChange.emit(data);
            });
        }
        this.tooltip.setOverlayOrigin(this);
    };
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip.nzTrigger === 'hover') {
            /** @type {?} */
            var overlayElement_1 = void 0;
            this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', function () { return _this.delayEnterLeave(true, true, _this.tooltip.nzMouseEnterDelay); });
            this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', function () {
                _this.delayEnterLeave(true, false, _this.tooltip.nzMouseLeaveDelay);
                if (_this.tooltip.overlay.overlayRef && !overlayElement_1) { // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                    _this.renderer.listen(overlayElement_1, 'mouseenter', function () { return _this.delayEnterLeave(false, true); });
                    _this.renderer.listen(overlayElement_1, 'mouseleave', function () { return _this.delayEnterLeave(false, false); });
                }
            });
        }
        else if (this.tooltip.nzTrigger === 'focus') {
            this.renderer.listen(this.elementRef.nativeElement, 'focus', function () { return _this.show(); });
            this.renderer.listen(this.elementRef.nativeElement, 'blur', function () { return _this.hide(); });
        }
        else if (this.tooltip.nzTrigger === 'click') {
            this.renderer.listen(this.elementRef.nativeElement, 'click', function (e) {
                e.preventDefault();
                _this.show();
            });
        }
    };
    /**
     * @return {?}
     */
    NzTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-tooltip]'
                },] }
    ];
    /** @nocollapse */
    NzTooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzToolTipComponent, decorators: [{ type: Optional }] }
    ]; };
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
    return NzTooltipDirective;
}());
export { NzTooltipDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidG9vbHRpcC9uei10b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHdCQUF3QixFQUN4QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBMkoxRCw0QkFDUyxZQUNBLFVBQ0EsVUFDQSxVQUNZLE9BQTJCO1FBSnZDLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUFDUixhQUFRLEdBQVIsUUFBUTtRQUNSLGFBQVEsR0FBUixRQUFRO1FBQ0ksWUFBTyxHQUFQLE9BQU8sQ0FBb0I7NEJBMUp6QixJQUFJLE9BQU8sRUFBUTs7NkJBR2pCLEtBQUs7Z0NBQ1gsS0FBSzt1QkFXd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQzsrQkFDN0UsSUFBSSxZQUFZLEVBQVc7S0EySXREO0lBeklELHNCQUNJLHVDQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBUkQsVUFDWSxLQUFpQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFB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LFxuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuL256LXRvb2x0aXAuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LXRvb2x0aXBdJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRvb2x0aXBEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvLyBbTk9URV0gSGVyZSBoYXJkIGNvZGVkLCBhbmQgbnpUaXRsZSB1c2VkIG9ubHkgdW5kZXIgTnpUb29sdGlwRGlyZWN0aXZlIGN1cnJlbnRseS5cbiAgaXNUb29sdGlwT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0R5bmFtaWNUb29sdGlwID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgY3VycmVudCB0b29sdGlwIGlzIGR5bmFtaWMgY3JlYXRlZFxuICBkZWxheVRpbWVyOyAvLyBUaW1lciBmb3IgZGVsYXkgZW50ZXIvbGVhdmVcbiAgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgX2NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBfb3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nO1xuICBfb3ZlcmxheVN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XG4gIF9tb3VzZUVudGVyRGVsYXk6IG51bWJlcjtcbiAgX21vdXNlTGVhdmVEZWxheTogbnVtYmVyO1xuICBfdmlzaWJsZTogYm9vbGVhbjtcbiAgX3RyaWdnZXI6IHN0cmluZztcbiAgX3BsYWNlbWVudDogc3RyaW5nO1xuICBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PE56VG9vbFRpcENvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KE56VG9vbFRpcENvbXBvbmVudCk7XG4gIEBPdXRwdXQoKSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCduei10b29sdGlwJylcbiAgc2V0IG56VGl0bGUodGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpUaXRsZScsIHRpdGxlKTtcbiAgfVxuXG4gIGdldCBuelRpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBASW5wdXQoJ256VGl0bGUnKVxuICBzZXQgc2V0VGl0bGUodGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5uelRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuX2NvbnRlbnQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnbnpDb250ZW50JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56Q29udGVudCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpPdmVybGF5Q2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9vdmVybGF5Q2xhc3NOYW1lID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ256T3ZlcmxheUNsYXNzTmFtZScsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuek92ZXJsYXlDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheUNsYXNzTmFtZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek92ZXJsYXlTdHlsZSh2YWx1ZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9KSB7XG4gICAgdGhpcy5fb3ZlcmxheVN0eWxlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ256T3ZlcmxheVN0eWxlJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56T3ZlcmxheVN0eWxlKCk6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlTdHlsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek1vdXNlRW50ZXJEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbW91c2VFbnRlckRlbGF5ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ256TW91c2VFbnRlckRlbGF5JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56TW91c2VFbnRlckRlbGF5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21vdXNlRW50ZXJEZWxheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek1vdXNlTGVhdmVEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbW91c2VMZWF2ZURlbGF5ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ256TW91c2VMZWF2ZURlbGF5JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56TW91c2VMZWF2ZURlbGF5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21vdXNlRW50ZXJEZWxheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ256VmlzaWJsZScsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUcmlnZ2VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ256VHJpZ2dlcicsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelRyaWdnZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ256UGxhY2VtZW50JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56UGxhY2VtZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXRvb2x0aXAtb3BlbicpXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNUb29sdGlwT3BlbjtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLnRvb2x0aXAuc2hvdygpO1xuICAgIHRoaXMuaXNUb29sdGlwT3BlbiA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy50b29sdGlwLmhpZGUoKTtcbiAgICB0aGlzLmlzVG9vbHRpcE9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsYXlFbnRlckxlYXZlKGlzT3JpZ2luOiBib29sZWFuLCBpc0VudGVyOiBib29sZWFuLCBkZWxheTogbnVtYmVyID0gLTEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7IC8vIENsZWFyIHRpbWVyIGR1cmluZyB0aGUgZGVsYXkgdGltZVxuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xuICAgICAgICBpc0VudGVyID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgICAgIH0sIGRlbGF5ICogMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzRW50ZXIgJiYgaXNPcmlnaW4gPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpOyAvLyBbQ29tcGF0aWJsZV0gVGhlIFwiaXNPcmlnaW5cIiBpcyB1c2VkIGR1ZSB0byB0aGUgdG9vbHRpcCB3aWxsIG5vdCBoaWRlIGltbWVkaWF0ZWx5IChtYXkgY2F1c2VkIGJ5IHRoZSBmYWRlLW91dCBhbmltYXRpb24pXG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVDb21wVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0R5bmFtaWNUb29sdGlwICYmIGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy50b29sdGlwWyBrZXkgXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdG9vbHRpcDogTnpUb29sVGlwQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBTdXBwb3J0IGZhc3RlciB0b29sdGlwIG1vZGU6IDxhIG56LXRvb2x0aXA9XCJ4eHhcIj48L2E+LiBbTk9URV0gVXNlZCBvbmx5IHVuZGVyIE56VG9vbHRpcERpcmVjdGl2ZSBjdXJyZW50bHkuXG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHtcbiAgICAgIGNvbnN0IHRvb2x0aXBDb21wb25lbnQgPSB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudCh0aGlzLmZhY3RvcnkpO1xuICAgICAgdGhpcy50b29sdGlwID0gdG9vbHRpcENvbXBvbmVudC5pbnN0YW5jZTtcbiAgICAgIC8vIFJlbW92ZSBlbGVtZW50IHdoZW4gdXNlIGRpcmVjdGl2ZSBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTk2N1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0b29sdGlwQ29tcG9uZW50LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5pc0R5bmFtaWNUb29sdGlwID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbICduelRpdGxlJywgJ256Q29udGVudCcsICduek92ZXJsYXlDbGFzc05hbWUnLCAnbnpPdmVybGF5U3R5bGUnLCAnbnpNb3VzZUVudGVyRGVsYXknLCAnbnpNb3VzZUxlYXZlRGVsYXknLCAnbnpWaXNpYmxlJywgJ256VHJpZ2dlcicsICduelBsYWNlbWVudCcgXTtcbiAgICAgIHByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB0aGlzLnVwZGF0ZUNvbXBWYWx1ZShwcm9wZXJ0eSwgdGhpc1sgcHJvcGVydHkgXSkpO1xuICAgICAgdGhpcy50b29sdGlwLm56VmlzaWJsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IGRhdGE7XG4gICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50b29sdGlwLnNldE92ZXJsYXlPcmlnaW4odGhpcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudG9vbHRpcC5uelRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIGxldCBvdmVybGF5RWxlbWVudDtcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHRoaXMuZGVsYXlFbnRlckxlYXZlKHRydWUsIHRydWUsIHRoaXMudG9vbHRpcC5uek1vdXNlRW50ZXJEZWxheSkpO1xuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCBmYWxzZSwgdGhpcy50b29sdGlwLm56TW91c2VMZWF2ZURlbGF5KTtcbiAgICAgICAgaWYgKHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYgJiYgIW92ZXJsYXlFbGVtZW50KSB7IC8vIE5PVEU6IHdlIGJpbmQgZXZlbnRzIHVuZGVyIFwibW91c2VsZWF2ZVwiIGR1ZSB0byB0aGUgb3ZlcmxheVJlZiBpcyBvbmx5IGNyZWF0ZWQgYWZ0ZXIgdGhlIG92ZXJsYXkgd2FzIGNvbXBsZXRlbHkgc2hvd24gdXBcbiAgICAgICAgICBvdmVybGF5RWxlbWVudCA9IHRoaXMudG9vbHRpcC5vdmVybGF5Lm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQ7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4gdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIHRydWUpKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihvdmVybGF5RWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB0aGlzLmRlbGF5RW50ZXJMZWF2ZShmYWxzZSwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRvb2x0aXAubnpUcmlnZ2VyID09PSAnZm9jdXMnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2ZvY3VzJywgKCkgPT4gdGhpcy5zaG93KCkpO1xuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdibHVyJywgKCkgPT4gdGhpcy5oaWRlKCkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy50b29sdGlwLm56VHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG59XG4iXX0=