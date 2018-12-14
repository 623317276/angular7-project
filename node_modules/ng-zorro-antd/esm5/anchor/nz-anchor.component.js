/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
import { toBoolean, toNumber } from '../core/util/convert';
/**
 * @record
 */
function Section() { }
function Section_tsickle_Closure_declarations() {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
var sharpMatcherRegx = /#([^#]+)$/;
var NzAnchorComponent = /** @class */ (function () {
    // endregion
    /* tslint:disable-next-line:no-any */
    function NzAnchorComponent(scrollSrv, doc, cd) {
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cd = cd;
        this.links = [];
        this.animating = false;
        this.target = null;
        this.scroll$ = null;
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this._affix = true;
        this._bounds = 5;
        this._showInkInFixed = false;
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
    }
    Object.defineProperty(NzAnchorComponent.prototype, "nzAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._affix;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._affix = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzBounds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bounds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bounds = toNumber(value, 5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzOffsetTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetTop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._offsetTop = toNumber(value, 0);
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this._offsetTop + "px)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzShowInkInFixed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showInkInFixed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showInkInFixed = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.registerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.unregisterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.getTarget = /**
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListen();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.registerScrollEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll').pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(function (e) { return _this.handleScroll(); });
        // 由于页面刷新时滚动条位置的记忆
        // 倒置在dom未渲染完成，导致计算不正确
        setTimeout(function () { return _this.handleScroll(); });
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.removeListen = /**
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzAnchorComponent.prototype.getOffsetTop = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        var rect = element.getBoundingClientRect();
        if (!rect.width && !rect.height) {
            return rect.top;
        }
        return rect.top - element.ownerDocument.documentElement.clientTop;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.animating) {
            return;
        }
        /** @type {?} */
        var sections = [];
        /** @type {?} */
        var scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach(function (comp) {
            /** @type {?} */
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target && _this.getOffsetTop(target) < scope) {
                /** @type {?} */
                var top_1 = _this.getOffsetTop(target);
                sections.push({
                    top: top_1,
                    comp: comp
                });
            }
        });
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cd.detectChanges();
        }
        else {
            /** @type {?} */
            var maxSection = sections.reduce(function (prev, curr) { return curr.top > prev.top ? curr : prev; });
            this.handleActive(maxSection.comp);
        }
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.clearActive = /**
     * @return {?}
     */
    function () {
        this.links.forEach(function (i) { return i.active = false; });
    };
    /**
     * @param {?} comp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleActive = /**
     * @param {?} comp
     * @return {?}
     */
    function (comp) {
        this.clearActive();
        comp.active = true;
        this.cd.detectChanges();
        /** @type {?} */
        var linkNode = /** @type {?} */ ((/** @type {?} */ (comp.el.nativeElement)).querySelector('.ant-anchor-link-title'));
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.nzScroll.emit(comp);
    };
    /**
     * @param {?} linkComp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScrollTo = /**
     * @param {?} linkComp
     * @return {?}
     */
    function (linkComp) {
        var _this = this;
        /** @type {?} */
        var el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        var containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        var elOffsetTop = this.scrollSrv.getOffset(el).top;
        /** @type {?} */
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, null, function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        });
        this.nzClick.emit(linkComp.nzHref);
    };
    NzAnchorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-anchor',
                    preserveWhitespaces: false,
                    template: "<nz-affix *ngIf=\"nzAffix;else content\" [nzOffsetTop]=\"nzOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</nz-affix>\n<ng-template #content>\n  <div class=\"ant-anchor-wrapper\" #wrap [ngStyle]=\"wrapperStyle\">\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !nzAffix && !nzShowInkInFixed}\">\n      <div class=\"ant-anchor-ink\">\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzAnchorComponent.ctorParameters = function () { return [
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
    NzAnchorComponent.propDecorators = {
        wrap: [{ type: ViewChild, args: ['wrap',] }],
        ink: [{ type: ViewChild, args: ['ink',] }],
        nzAffix: [{ type: Input }],
        nzBounds: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzShowInkInFixed: [{ type: Input }],
        nzTarget: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzScroll: [{ type: Output }]
    };
    return NzAnchorComponent;
}());
export { NzAnchorComponent };
function NzAnchorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAnchorComponent.prototype.links;
    /** @type {?} */
    NzAnchorComponent.prototype.animating;
    /** @type {?} */
    NzAnchorComponent.prototype.target;
    /** @type {?} */
    NzAnchorComponent.prototype.scroll$;
    /** @type {?} */
    NzAnchorComponent.prototype.visible;
    /** @type {?} */
    NzAnchorComponent.prototype.wrapperStyle;
    /** @type {?} */
    NzAnchorComponent.prototype.wrap;
    /** @type {?} */
    NzAnchorComponent.prototype.ink;
    /** @type {?} */
    NzAnchorComponent.prototype._affix;
    /** @type {?} */
    NzAnchorComponent.prototype._bounds;
    /** @type {?} */
    NzAnchorComponent.prototype._offsetTop;
    /** @type {?} */
    NzAnchorComponent.prototype._showInkInFixed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzClick;
    /** @type {?} */
    NzAnchorComponent.prototype.nzScroll;
    /** @type {?} */
    NzAnchorComponent.prototype.scrollSrv;
    /** @type {?} */
    NzAnchorComponent.prototype.doc;
    /** @type {?} */
    NzAnchorComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhbmNob3IvbnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7OztBQVMzRCxJQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQzs7SUE4RW5DLFlBQVk7SUFFWixxQ0FBcUM7SUFDckMsMkJBQW9CLFNBQTBCLEVBQTRCLEdBQVEsRUFBVSxFQUFxQjtRQUE3RixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUE0QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7cUJBdkV4RSxFQUFFO3lCQUN2QixLQUFLO3NCQUNDLElBQUk7dUJBQ04sSUFBSTt1QkFDbEIsS0FBSzs0QkFDSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUU7c0JBTWxCLElBQUk7dUJBV0osQ0FBQzsrQkF5QlEsS0FBSzt1QkFpQkUsSUFBSSxZQUFZLEVBQUU7d0JBRUYsSUFBSSxZQUFZLEVBQUU7S0FNM0U7SUEzREQsc0JBQ0ksc0NBQU87Ozs7UUFJ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QUFNOzJCQUVOLE1BQU07OzRCQXRHVDs7U0FrQ2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCB0b051bWJlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpBbmNob3JMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQnO1xuXG5pbnRlcmZhY2UgU2VjdGlvbiB7XG4gIGNvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudDtcbiAgdG9wOiBudW1iZXI7XG59XG5cbmNvbnN0IHNoYXJwTWF0Y2hlclJlZ3ggPSAvIyhbXiNdKykkLztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1hbmNob3InLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYW5jaG9yLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56QW5jaG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIGxpbmtzOiBOekFuY2hvckxpbmtDb21wb25lbnRbXSA9IFtdO1xuICBwcml2YXRlIGFuaW1hdGluZyA9IGZhbHNlO1xuICBwcml2YXRlIHRhcmdldDogRWxlbWVudCA9IG51bGw7XG4gIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIHZpc2libGUgPSBmYWxzZTtcbiAgd3JhcHBlclN0eWxlOiB7fSA9IHsgJ21heC1oZWlnaHQnOiAnMTAwdmgnIH07XG4gIEBWaWV3Q2hpbGQoJ3dyYXAnKSBwcml2YXRlIHdyYXA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2luaycpIHByaXZhdGUgaW5rOiBFbGVtZW50UmVmO1xuXG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgcHJpdmF0ZSBfYWZmaXg6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFmZml4KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWZmaXggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56QWZmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FmZml4O1xuICB9XG5cbiAgcHJpdmF0ZSBfYm91bmRzOiBudW1iZXIgPSA1O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekJvdW5kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYm91bmRzID0gdG9OdW1iZXIodmFsdWUsIDUpO1xuICB9XG5cbiAgZ2V0IG56Qm91bmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JvdW5kcztcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldFRvcDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuek9mZnNldFRvcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIDApO1xuICAgIHRoaXMud3JhcHBlclN0eWxlID0ge1xuICAgICAgJ21heC1oZWlnaHQnOiBgY2FsYygxMDB2aCAtICR7dGhpcy5fb2Zmc2V0VG9wfXB4KWBcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRvcDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dJbmtJbkZpeGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0lua0luRml4ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93SW5rSW5GaXhlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93SW5rSW5GaXhlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0lua0luRml4ZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUYXJnZXQoZWw6IEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldCA9IGVsO1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgQE91dHB1dCgpIG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBuelNjcm9sbDogRXZlbnRFbWl0dGVyPE56QW5jaG9yTGlua0NvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgcmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MucHVzaChsaW5rKTtcbiAgfVxuXG4gIHVucmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3Muc3BsaWNlKHRoaXMubGlua3MuaW5kZXhPZihsaW5rKSwgMSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgfHwgd2luZG93O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh0aGlzLmdldFRhcmdldCgpLCAnc2Nyb2xsJykucGlwZSh0aHJvdHRsZVRpbWUoNTApLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcbiAgICAvLyDnlLHkuo7pobXpnaLliLfmlrDml7bmu5rliqjmnaHkvY3nva7nmoTorrDlv4ZcbiAgICAvLyDlgJLnva7lnKhkb23mnKrmuLLmn5PlrozmiJDvvIzlr7zoh7TorqHnrpfkuI3mraPnoa5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkge1xuICAgICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPZmZzZXRUb3AoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghcmVjdC53aWR0aCAmJiAhcmVjdC5oZWlnaHQpIHtcbiAgICAgIHJldHVybiByZWN0LnRvcDtcbiAgICB9XG4gICAgcmV0dXJuIHJlY3QudG9wIC0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3A7XG4gIH1cblxuICBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjdGlvbnM6IFNlY3Rpb25bXSA9IFtdO1xuICAgIGNvbnN0IHNjb3BlID0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCkgKyB0aGlzLm56Qm91bmRzO1xuICAgIHRoaXMubGlua3MuZm9yRWFjaChjb21wID0+IHtcbiAgICAgIGNvbnN0IHNoYXJwTGlua01hdGNoID0gc2hhcnBNYXRjaGVyUmVneC5leGVjKGNvbXAubnpIcmVmLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKCFzaGFycExpbmtNYXRjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZChzaGFycExpbmtNYXRjaFsgMSBdKTtcbiAgICAgIGlmICh0YXJnZXQgJiYgdGhpcy5nZXRPZmZzZXRUb3AodGFyZ2V0KSA8IHNjb3BlKSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0T2Zmc2V0VG9wKHRhcmdldCk7XG4gICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgIHRvcCxcbiAgICAgICAgICBjb21wXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy52aXNpYmxlID0gISFzZWN0aW9ucy5sZW5ndGg7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXhTZWN0aW9uID0gc2VjdGlvbnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLnRvcCA+IHByZXYudG9wID8gY3VyciA6IHByZXYpO1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobWF4U2VjdGlvbi5jb21wKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MuZm9yRWFjaChpID0+IGkuYWN0aXZlID0gZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmUoY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xuXG4gICAgY29tcC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgY29uc3QgbGlua05vZGUgPSAoY29tcC5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCcuYW50LWFuY2hvci1saW5rLXRpdGxlJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5pbmsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtsaW5rTm9kZS5vZmZzZXRUb3AgKyBsaW5rTm9kZS5jbGllbnRIZWlnaHQgLyAyIC0gNC41fXB4YDtcblxuICAgIHRoaXMubnpTY3JvbGwuZW1pdChjb21wKTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbFRvKGxpbmtDb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IobGlua0NvbXAubnpIcmVmKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGNvbnRhaW5lclNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0aGlzLmdldFRhcmdldCgpKTtcbiAgICBjb25zdCBlbE9mZnNldFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldE9mZnNldChlbCkudG9wO1xuICAgIGNvbnN0IHRhcmdldFNjcm9sbFRvcCA9IGNvbnRhaW5lclNjcm9sbFRvcCArIGVsT2Zmc2V0VG9wIC0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCk7XG4gICAgdGhpcy5zY3JvbGxTcnYuc2Nyb2xsVG8odGhpcy5nZXRUYXJnZXQoKSwgdGFyZ2V0U2Nyb2xsVG9wLCBudWxsLCAoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobGlua0NvbXApO1xuICAgIH0pO1xuICAgIHRoaXMubnpDbGljay5lbWl0KGxpbmtDb21wLm56SHJlZik7XG4gIH1cblxufVxuIl19