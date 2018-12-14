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
const sharpMatcherRegx = /#([^#]+)$/;
export class NzAnchorComponent {
    /**
     * @param {?} scrollSrv
     * @param {?} doc
     * @param {?} cd
     */
    constructor(scrollSrv, doc, cd) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAffix(value) {
        this._affix = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAffix() {
        return this._affix;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzBounds(value) {
        this._bounds = toNumber(value, 5);
    }
    /**
     * @return {?}
     */
    get nzBounds() {
        return this._bounds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOffsetTop(value) {
        this._offsetTop = toNumber(value, 0);
        this.wrapperStyle = {
            'max-height': `calc(100vh - ${this._offsetTop}px)`
        };
    }
    /**
     * @return {?}
     */
    get nzOffsetTop() {
        return this._offsetTop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowInkInFixed(value) {
        this._showInkInFixed = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowInkInFixed() {
        return this._showInkInFixed;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set nzTarget(el) {
        this.target = el;
        this.registerScrollEvent();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    registerLink(link) {
        this.links.push(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    unregisterLink(link) {
        this.links.splice(this.links.indexOf(link), 1);
    }
    /**
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListen();
    }
    /**
     * @return {?}
     */
    registerScrollEvent() {
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll').pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(e => this.handleScroll());
        // 由于页面刷新时滚动条位置的记忆
        // 倒置在dom未渲染完成，导致计算不正确
        setTimeout(() => this.handleScroll());
    }
    /**
     * @return {?}
     */
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getOffsetTop(element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        if (!rect.width && !rect.height) {
            return rect.top;
        }
        return rect.top - element.ownerDocument.documentElement.clientTop;
    }
    /**
     * @return {?}
     */
    handleScroll() {
        if (this.animating) {
            return;
        }
        /** @type {?} */
        const sections = [];
        /** @type {?} */
        const scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach(comp => {
            /** @type {?} */
            const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            const target = this.doc.getElementById(sharpLinkMatch[1]);
            if (target && this.getOffsetTop(target) < scope) {
                /** @type {?} */
                const top = this.getOffsetTop(target);
                sections.push({
                    top,
                    comp
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
            const maxSection = sections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
            this.handleActive(maxSection.comp);
        }
    }
    /**
     * @return {?}
     */
    clearActive() {
        this.links.forEach(i => i.active = false);
    }
    /**
     * @param {?} comp
     * @return {?}
     */
    handleActive(comp) {
        this.clearActive();
        comp.active = true;
        this.cd.detectChanges();
        /** @type {?} */
        const linkNode = /** @type {?} */ ((/** @type {?} */ (comp.el.nativeElement)).querySelector('.ant-anchor-link-title'));
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        this.nzScroll.emit(comp);
    }
    /**
     * @param {?} linkComp
     * @return {?}
     */
    handleScrollTo(linkComp) {
        /** @type {?} */
        const el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        const containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        const elOffsetTop = this.scrollSrv.getOffset(el).top;
        /** @type {?} */
        const targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, null, () => {
            this.animating = false;
            this.handleActive(linkComp);
        });
        this.nzClick.emit(linkComp.nzHref);
    }
}
NzAnchorComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-anchor',
                preserveWhitespaces: false,
                template: "<nz-affix *ngIf=\"nzAffix;else content\" [nzOffsetTop]=\"nzOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</nz-affix>\n<ng-template #content>\n  <div class=\"ant-anchor-wrapper\" #wrap [ngStyle]=\"wrapperStyle\">\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !nzAffix && !nzShowInkInFixed}\">\n      <div class=\"ant-anchor-ink\">\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzAnchorComponent.ctorParameters = () => [
    { type: NzScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhbmNob3IvbnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7OztBQVMzRCxNQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQVFyQyxNQUFNOzs7Ozs7SUF5RUosWUFBb0IsU0FBMEIsRUFBNEIsR0FBUSxFQUFVLEVBQXFCO1FBQTdGLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQTRCLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtxQkF2RXhFLEVBQUU7eUJBQ3ZCLEtBQUs7c0JBQ0MsSUFBSTt1QkFDTixJQUFJO3VCQUNsQixLQUFLOzRCQUNJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRTtzQkFNbEIsSUFBSTt1QkFXSixDQUFDOytCQXlCUSxLQUFLO3VCQWlCRSxJQUFJLFlBQVksRUFBRTt3QkFFRixJQUFJLFlBQVksRUFBRTtLQU0zRTs7Ozs7SUEzREQsSUFDSSxPQUFPLENBQUMsS0FBYztRQUN4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LFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQzs7UUFDdEUsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDOztRQUNyRCxNQUFNLGVBQWUsR0FBRyxrQkFBa0IsR0FBRyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNwRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwQzs7O1lBL0xGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsV0FBVztnQkFDaEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsbWlCQUFpRDtnQkFDakQsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07YUFDcEQ7Ozs7WUFqQlEsZUFBZTs0Q0EyRjJCLE1BQU0sU0FBQyxRQUFRO1lBdkdoRSxpQkFBaUI7OzttQkFzQ2hCLFNBQVMsU0FBQyxNQUFNO2tCQUNoQixTQUFTLFNBQUMsS0FBSztzQkFNZixLQUFLO3VCQVdMLEtBQUs7MEJBV0wsS0FBSzsrQkFjTCxLQUFLO3VCQVNMLEtBQUs7c0JBTUwsTUFBTTt1QkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGhyb3R0bGVUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCB0b051bWJlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpBbmNob3JMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQnO1xuXG5pbnRlcmZhY2UgU2VjdGlvbiB7XG4gIGNvbXA6IE56QW5jaG9yTGlua0NvbXBvbmVudDtcbiAgdG9wOiBudW1iZXI7XG59XG5cbmNvbnN0IHNoYXJwTWF0Y2hlclJlZ3ggPSAvIyhbXiNdKykkLztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1hbmNob3InLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYW5jaG9yLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56QW5jaG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcblxuICBwcml2YXRlIGxpbmtzOiBOekFuY2hvckxpbmtDb21wb25lbnRbXSA9IFtdO1xuICBwcml2YXRlIGFuaW1hdGluZyA9IGZhbHNlO1xuICBwcml2YXRlIHRhcmdldDogRWxlbWVudCA9IG51bGw7XG4gIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIHZpc2libGUgPSBmYWxzZTtcbiAgd3JhcHBlclN0eWxlOiB7fSA9IHsgJ21heC1oZWlnaHQnOiAnMTAwdmgnIH07XG4gIEBWaWV3Q2hpbGQoJ3dyYXAnKSBwcml2YXRlIHdyYXA6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2luaycpIHByaXZhdGUgaW5rOiBFbGVtZW50UmVmO1xuXG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgcHJpdmF0ZSBfYWZmaXg6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFmZml4KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWZmaXggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56QWZmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FmZml4O1xuICB9XG5cbiAgcHJpdmF0ZSBfYm91bmRzOiBudW1iZXIgPSA1O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekJvdW5kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYm91bmRzID0gdG9OdW1iZXIodmFsdWUsIDUpO1xuICB9XG5cbiAgZ2V0IG56Qm91bmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JvdW5kcztcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldFRvcDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuek9mZnNldFRvcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIDApO1xuICAgIHRoaXMud3JhcHBlclN0eWxlID0ge1xuICAgICAgJ21heC1oZWlnaHQnOiBgY2FsYygxMDB2aCAtICR7dGhpcy5fb2Zmc2V0VG9wfXB4KWBcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRvcDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dJbmtJbkZpeGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0lua0luRml4ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93SW5rSW5GaXhlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93SW5rSW5GaXhlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0lua0luRml4ZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUYXJnZXQoZWw6IEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldCA9IGVsO1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgQE91dHB1dCgpIG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBuelNjcm9sbDogRXZlbnRFbWl0dGVyPE56QW5jaG9yTGlua0NvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgcmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MucHVzaChsaW5rKTtcbiAgfVxuXG4gIHVucmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3Muc3BsaWNlKHRoaXMubGlua3MuaW5kZXhPZihsaW5rKSwgMSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgfHwgd2luZG93O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh0aGlzLmdldFRhcmdldCgpLCAnc2Nyb2xsJykucGlwZSh0aHJvdHRsZVRpbWUoNTApLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcbiAgICAvLyDnlLHkuo7pobXpnaLliLfmlrDml7bmu5rliqjmnaHkvY3nva7nmoTorrDlv4ZcbiAgICAvLyDlgJLnva7lnKhkb23mnKrmuLLmn5PlrozmiJDvvIzlr7zoh7TorqHnrpfkuI3mraPnoa5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkge1xuICAgICAgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPZmZzZXRUb3AoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghcmVjdC53aWR0aCAmJiAhcmVjdC5oZWlnaHQpIHtcbiAgICAgIHJldHVybiByZWN0LnRvcDtcbiAgICB9XG4gICAgcmV0dXJuIHJlY3QudG9wIC0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3A7XG4gIH1cblxuICBoYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjdGlvbnM6IFNlY3Rpb25bXSA9IFtdO1xuICAgIGNvbnN0IHNjb3BlID0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCkgKyB0aGlzLm56Qm91bmRzO1xuICAgIHRoaXMubGlua3MuZm9yRWFjaChjb21wID0+IHtcbiAgICAgIGNvbnN0IHNoYXJwTGlua01hdGNoID0gc2hhcnBNYXRjaGVyUmVneC5leGVjKGNvbXAubnpIcmVmLnRvU3RyaW5nKCkpO1xuICAgICAgaWYgKCFzaGFycExpbmtNYXRjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvYy5nZXRFbGVtZW50QnlJZChzaGFycExpbmtNYXRjaFsgMSBdKTtcbiAgICAgIGlmICh0YXJnZXQgJiYgdGhpcy5nZXRPZmZzZXRUb3AodGFyZ2V0KSA8IHNjb3BlKSB7XG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0T2Zmc2V0VG9wKHRhcmdldCk7XG4gICAgICAgIHNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgIHRvcCxcbiAgICAgICAgICBjb21wXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy52aXNpYmxlID0gISFzZWN0aW9ucy5sZW5ndGg7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXhTZWN0aW9uID0gc2VjdGlvbnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLnRvcCA+IHByZXYudG9wID8gY3VyciA6IHByZXYpO1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobWF4U2VjdGlvbi5jb21wKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyQWN0aXZlKCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MuZm9yRWFjaChpID0+IGkuYWN0aXZlID0gZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3RpdmUoY29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xuXG4gICAgY29tcC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgY29uc3QgbGlua05vZGUgPSAoY29tcC5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCcuYW50LWFuY2hvci1saW5rLXRpdGxlJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgdGhpcy5pbmsubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtsaW5rTm9kZS5vZmZzZXRUb3AgKyBsaW5rTm9kZS5jbGllbnRIZWlnaHQgLyAyIC0gNC41fXB4YDtcblxuICAgIHRoaXMubnpTY3JvbGwuZW1pdChjb21wKTtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbFRvKGxpbmtDb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IobGlua0NvbXAubnpIcmVmKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGNvbnRhaW5lclNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0aGlzLmdldFRhcmdldCgpKTtcbiAgICBjb25zdCBlbE9mZnNldFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldE9mZnNldChlbCkudG9wO1xuICAgIGNvbnN0IHRhcmdldFNjcm9sbFRvcCA9IGNvbnRhaW5lclNjcm9sbFRvcCArIGVsT2Zmc2V0VG9wIC0gKHRoaXMubnpPZmZzZXRUb3AgfHwgMCk7XG4gICAgdGhpcy5zY3JvbGxTcnYuc2Nyb2xsVG8odGhpcy5nZXRUYXJnZXQoKSwgdGFyZ2V0U2Nyb2xsVG9wLCBudWxsLCAoKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmUobGlua0NvbXApO1xuICAgIH0pO1xuICAgIHRoaXMubnpDbGljay5lbWl0KGxpbmtDb21wLm56SHJlZik7XG4gIH1cblxufVxuIl19