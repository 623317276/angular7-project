/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
import { shallowEqual } from '../core/util/check';
import { toNumber } from '../core/util/convert';
import { throttleByAnimationFrameDecorator } from '../core/util/throttleByAnimationFrame';
var NzAffixComponent = /** @class */ (function () {
    function NzAffixComponent(scrollSrv, _el, cd) {
        this.scrollSrv = scrollSrv;
        this._el = _el;
        this.cd = cd;
        this.events = [
            'resize',
            'scroll',
            'touchstart',
            'touchmove',
            'touchend',
            'pageshow',
            'load'
        ];
        this._target = window;
        this.nzChange = new EventEmitter();
    }
    Object.defineProperty(NzAffixComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.clearEventListeners();
            this._target = value || window;
            this.setTargetEventListeners();
            this.updatePosition({});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAffixComponent.prototype, "nzOffsetTop", {
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
            if (typeof value === 'undefined') {
                return;
            }
            this._offsetTop = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAffixComponent.prototype, "nzOffsetBottom", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'undefined') {
                return;
            }
            this._offsetBottom = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.timeout = setTimeout(function () {
            _this.setTargetEventListeners();
            _this.updatePosition({});
        });
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.setTargetEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearEventListeners();
        this.events.forEach(function (eventName) {
            _this._target.addEventListener(eventName, _this.updatePosition, false);
        });
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.clearEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.events.forEach(function (eventName) {
            _this._target.removeEventListener(eventName, _this.updatePosition, false);
        });
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearEventListeners();
        clearTimeout(this.timeout);
        (/** @type {?} */ (this.updatePosition)).cancel();
    };
    /**
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getTargetRect = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return target !== window ?
            (/** @type {?} */ (target)).getBoundingClientRect() : /** @type {?} */ ({ top: 0, left: 0, bottom: 0 });
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getOffset = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elemRect = element.getBoundingClientRect();
        /** @type {?} */
        var targetRect = this.getTargetRect(target);
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        var scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        var docElem = window.document.body;
        /** @type {?} */
        var clientTop = docElem.clientTop || 0;
        /** @type {?} */
        var clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    };
    /**
     * @param {?} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.genStyle = /**
     * @param {?} affixStyle
     * @return {?}
     */
    function (affixStyle) {
        if (affixStyle == null) {
            return '';
        }
        return Object.keys(affixStyle).map(function (key) {
            /** @type {?} */
            var val = affixStyle[key];
            return key + ":" + (typeof val === 'string' ? val : val + 'px');
        }).join(';');
    };
    /**
     * @param {?} e
     * @param {?} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setAffixStyle = /**
     * @param {?} e
     * @param {?} affixStyle
     * @return {?}
     */
    function (e, affixStyle) {
        /** @type {?} */
        var originalAffixStyle = this.affixStyle;
        /** @type {?} */
        var isWindow = this._target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        var fixed = !!affixStyle;
        /** @type {?} */
        var wrapEl = /** @type {?} */ (this.wrap.nativeElement);
        wrapEl.style.cssText = this.genStyle(affixStyle);
        this.affixStyle = affixStyle;
        /** @type {?} */
        var cls = 'ant-affix';
        if (fixed) {
            wrapEl.classList.add(cls);
        }
        else {
            wrapEl.classList.remove(cls);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    };
    /**
     * @param {?} placeholderStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setPlaceholderStyle = /**
     * @param {?} placeholderStyle
     * @return {?}
     */
    function (placeholderStyle) {
        /** @type {?} */
        var originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        (/** @type {?} */ (this._el.nativeElement)).style.cssText = this.genStyle(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzAffixComponent.prototype.updatePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var targetNode = this._target;
        /** @type {?} */
        var offsetTop = this.nzOffsetTop;
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        var affixNode = /** @type {?} */ (this._el.nativeElement);
        /** @type {?} */
        var elemOffset = this.getOffset(affixNode, targetNode);
        /** @type {?} */
        var elemSize = {
            width: affixNode.offsetWidth,
            height: affixNode.offsetHeight
        };
        /** @type {?} */
        var offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this._offsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this._offsetBottom === 'number';
        }
        /** @type {?} */
        var targetRect = this.getTargetRect(targetNode);
        /** @type {?} */
        var targetInnerHeight = (/** @type {?} */ (targetNode)).innerHeight || (/** @type {?} */ (targetNode)).clientHeight;
        if (scrollTop > elemOffset.top - (/** @type {?} */ (offsetTop)) && offsetMode.top) {
            /** @type {?} */
            var width = elemOffset.width;
            /** @type {?} */
            var top_1 = targetRect.top + (/** @type {?} */ (offsetTop));
            this.setAffixStyle(e, {
                position: 'fixed',
                top: top_1,
                left: targetRect.left + elemOffset.left,
                maxHeight: "calc(100vh - " + top_1 + "px)",
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemSize.height
            });
        }
        else if (scrollTop < elemOffset.top + elemSize.height + (/** @type {?} */ (this._offsetBottom)) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            var targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
            /** @type {?} */
            var width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + (/** @type {?} */ (this._offsetBottom)),
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' && this.affixStyle && this.affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, { width: affixNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e, null);
            }
            this.setPlaceholderStyle(null);
        }
    };
    NzAffixComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-affix',
                    template: "<div #wrap>\n  <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host {\n      display: block;\n    }"]
                }] }
    ];
    /** @nocollapse */
    NzAffixComponent.ctorParameters = function () { return [
        { type: NzScrollService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    NzAffixComponent.propDecorators = {
        wrap: [{ type: ViewChild, args: ['wrap',] }],
        nzTarget: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzOffsetBottom: [{ type: Input }],
        nzChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        throttleByAnimationFrameDecorator(),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NzAffixComponent.prototype, "updatePosition", null);
    return NzAffixComponent;
}());
export { NzAffixComponent };
function NzAffixComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAffixComponent.prototype.timeout;
    /** @type {?} */
    NzAffixComponent.prototype.events;
    /** @type {?} */
    NzAffixComponent.prototype.affixStyle;
    /** @type {?} */
    NzAffixComponent.prototype.placeholderStyle;
    /** @type {?} */
    NzAffixComponent.prototype.wrap;
    /** @type {?} */
    NzAffixComponent.prototype._target;
    /** @type {?} */
    NzAffixComponent.prototype._offsetTop;
    /** @type {?} */
    NzAffixComponent.prototype._offsetBottom;
    /** @type {?} */
    NzAffixComponent.prototype.nzChange;
    /** @type {?} */
    NzAffixComponent.prototype.scrollSrv;
    /** @type {?} */
    NzAffixComponent.prototype._el;
    /** @type {?} */
    NzAffixComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFmZml4L256LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQWlFeEYsMEJBQW9CLFNBQTBCLEVBQVUsR0FBZSxFQUFVLEVBQXFCO1FBQWxGLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO3NCQWxEckY7WUFDZixRQUFRO1lBQ1IsUUFBUTtZQUNSLFlBQVk7WUFDWixXQUFXO1lBQ1gsVUFBVTtZQUNWLFVBQVU7WUFDVixNQUFNO1NBQ1A7dUJBTW1DLE1BQU07d0JBa0NFLElBQUksWUFBWSxFQUFFO0tBRzdEO0lBbkNELHNCQUNJLHNDQUFROzs7OztRQURaLFVBQ2EsS0FBdUI7WUFDbEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDO1lBQy9CLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekI7OztPQUFBO0lBSUQsc0JBQ0kseUNB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TyxJQUFJLFNBQVMsQ0FBQyxXQUFXLEVBQUU7Z0JBQzNHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyx1QkFBTyxJQUFJLENBQUMsVUFBVSxJQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsV0FBVyxJQUFHLENBQUM7YUFDN0U7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7S0FDRjs7Z0JBeE9GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQVMsVUFBVTtvQkFDM0IsNERBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFFN0MsdUNBRUU7aUJBRUw7Ozs7Z0JBZFEsZUFBZTtnQkFUdEIsVUFBVTtnQkFGVixpQkFBaUI7Ozt1QkF5Q2hCLFNBQVMsU0FBQyxNQUFNOzJCQUloQixLQUFLOzhCQVVMLEtBQUs7aUNBY0wsS0FBSzsyQkFRTCxNQUFNOzs7UUEwR04saUNBQWlDLEVBQUU7Ozs7MERBaUVuQzsyQkEzUEg7O1NBNkJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yIH0gZnJvbSAnLi4vY29yZS91dGlsL3Rocm90dGxlQnlBbmltYXRpb25GcmFtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICA6ICduei1hZmZpeCcsXG4gIHRlbXBsYXRlVXJsICAgIDogJy4vbnotYWZmaXguY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVzICAgICAgICAgOiBbXG4gICAgYDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpBZmZpeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIHRpbWVvdXQ6IGFueTtcbiAgcHJpdmF0ZSBldmVudHMgPSBbXG4gICAgJ3Jlc2l6ZScsXG4gICAgJ3Njcm9sbCcsXG4gICAgJ3RvdWNoc3RhcnQnLFxuICAgICd0b3VjaG1vdmUnLFxuICAgICd0b3VjaGVuZCcsXG4gICAgJ3BhZ2VzaG93JyxcbiAgICAnbG9hZCdcbiAgXTtcbiAgcHJpdmF0ZSBhZmZpeFN0eWxlOiBhbnk7XG4gIHByaXZhdGUgcGxhY2Vob2xkZXJTdHlsZTogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ3dyYXAnKSBwcml2YXRlIHdyYXA6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0OiBFbGVtZW50IHwgV2luZG93ID0gd2luZG93O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRhcmdldCh2YWx1ZTogRWxlbWVudCB8IFdpbmRvdykge1xuICAgIHRoaXMuY2xlYXJFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3RhcmdldCA9IHZhbHVlIHx8IHdpbmRvdztcbiAgICB0aGlzLnNldFRhcmdldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbih7fSk7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXRUb3A6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX29mZnNldFRvcCA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgfVxuXG4gIGdldCBuek9mZnNldFRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUb3A7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXRCb3R0b206IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpPZmZzZXRCb3R0b20odmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX29mZnNldEJvdHRvbSA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBuekNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFRhcmdldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGFyZ2V0RXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5ldmVudHMuZm9yRWFjaCgoZXZlbnROYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuX3RhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy51cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgIHRoaXMuX3RhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcy51cGRhdGVQb3NpdGlvbiwgZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgKHRoaXMudXBkYXRlUG9zaXRpb24gYXMgYW55KS5jYW5jZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGFyZ2V0UmVjdCh0YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cgfCBudWxsKTogQ2xpZW50UmVjdCB7XG4gICAgcmV0dXJuIHRhcmdldCAhPT0gd2luZG93ID9cbiAgICAgICh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDpcbiAgICAgIHsgdG9wOiAwLCBsZWZ0OiAwLCBib3R0b206IDAgfSBhcyBDbGllbnRSZWN0O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KGVsZW1lbnQ6IEVsZW1lbnQsIHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyB8IG51bGwpOiB7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gIH0ge1xuICAgIGNvbnN0IGVsZW1SZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5nZXRUYXJnZXRSZWN0KHRhcmdldCk7XG5cbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCB0cnVlKTtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldCwgZmFsc2UpO1xuXG4gICAgY29uc3QgZG9jRWxlbSA9IHdpbmRvdy5kb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGNsaWVudFRvcCA9IGRvY0VsZW0uY2xpZW50VG9wIHx8IDA7XG4gICAgY29uc3QgY2xpZW50TGVmdCA9IGRvY0VsZW0uY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcCAgIDogZWxlbVJlY3QudG9wIC0gdGFyZ2V0UmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgICBsZWZ0ICA6IGVsZW1SZWN0LmxlZnQgLSB0YXJnZXRSZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCxcbiAgICAgIHdpZHRoIDogZWxlbVJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1SZWN0LmhlaWdodFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdlblN0eWxlKGFmZml4U3R5bGU6IHt9KTogc3RyaW5nIHtcbiAgICBpZiAoYWZmaXhTdHlsZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhhZmZpeFN0eWxlKS5tYXAoa2V5ID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGFmZml4U3R5bGVbIGtleSBdO1xuICAgICAgcmV0dXJuIGAke2tleX06JHt0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IHZhbCA6IHZhbCArICdweCd9YDtcbiAgICB9KS5qb2luKCc7Jyk7XG4gIH1cblxuICBwcml2YXRlIHNldEFmZml4U3R5bGUoZTogYW55LCBhZmZpeFN0eWxlOiB7fSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsQWZmaXhTdHlsZSA9IHRoaXMuYWZmaXhTdHlsZTtcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRoaXMuX3RhcmdldCA9PT0gd2luZG93O1xuICAgIGlmIChlLnR5cGUgPT09ICdzY3JvbGwnICYmIG9yaWdpbmFsQWZmaXhTdHlsZSAmJiBhZmZpeFN0eWxlICYmIGlzV2luZG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzaGFsbG93RXF1YWwob3JpZ2luYWxBZmZpeFN0eWxlLCBhZmZpeFN0eWxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpeGVkID0gISFhZmZpeFN0eWxlO1xuICAgIGNvbnN0IHdyYXBFbCA9IHRoaXMud3JhcC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIHdyYXBFbC5zdHlsZS5jc3NUZXh0ID0gdGhpcy5nZW5TdHlsZShhZmZpeFN0eWxlKTtcbiAgICB0aGlzLmFmZml4U3R5bGUgPSBhZmZpeFN0eWxlO1xuICAgIGNvbnN0IGNscyA9ICdhbnQtYWZmaXgnO1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcEVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICB9XG5cbiAgICBpZiAoKGFmZml4U3R5bGUgJiYgIW9yaWdpbmFsQWZmaXhTdHlsZSkgfHwgKCFhZmZpeFN0eWxlICYmIG9yaWdpbmFsQWZmaXhTdHlsZSkpIHtcbiAgICAgIHRoaXMubnpDaGFuZ2UuZW1pdChmaXhlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQbGFjZWhvbGRlclN0eWxlKHBsYWNlaG9sZGVyU3R5bGU6IHt9KTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZ2luYWxQbGFjZWhvbGRlclN0eWxlID0gdGhpcy5wbGFjZWhvbGRlclN0eWxlO1xuICAgIGlmIChzaGFsbG93RXF1YWwocGxhY2Vob2xkZXJTdHlsZSwgb3JpZ2luYWxQbGFjZWhvbGRlclN0eWxlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAodGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuY3NzVGV4dCA9IHRoaXMuZ2VuU3R5bGUocGxhY2Vob2xkZXJTdHlsZSk7XG4gICAgdGhpcy5wbGFjZWhvbGRlclN0eWxlID0gcGxhY2Vob2xkZXJTdHlsZTtcbiAgfVxuXG4gIEB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IoKVxuICB1cGRhdGVQb3NpdGlvbihlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5fdGFyZ2V0O1xuICAgIC8vIEJhY2t3YXJkcyBzdXBwb3J0XG4gICAgbGV0IG9mZnNldFRvcCA9IHRoaXMubnpPZmZzZXRUb3A7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldE5vZGUsIHRydWUpO1xuICAgIGNvbnN0IGFmZml4Tm9kZSA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZWxlbU9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KGFmZml4Tm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgY29uc3QgZWxlbVNpemUgPSB7XG4gICAgICB3aWR0aCA6IGFmZml4Tm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogYWZmaXhOb2RlLm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgY29uc3Qgb2Zmc2V0TW9kZSA9IHtcbiAgICAgIHRvcCAgIDogZmFsc2UsXG4gICAgICBib3R0b206IGZhbHNlXG4gICAgfTtcbiAgICAvLyBEZWZhdWx0IHRvIGBvZmZzZXRUb3A9MGAuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRUb3AgIT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlzLl9vZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHRydWU7XG4gICAgICBvZmZzZXRUb3AgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHR5cGVvZiBvZmZzZXRUb3AgPT09ICdudW1iZXInO1xuICAgICAgb2Zmc2V0TW9kZS5ib3R0b20gPSB0eXBlb2YgdGhpcy5fb2Zmc2V0Qm90dG9tID09PSAnbnVtYmVyJztcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXROb2RlKTtcbiAgICBjb25zdCB0YXJnZXRJbm5lckhlaWdodCA9XG4gICAgICAgICAgICAodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpLmlubmVySGVpZ2h0IHx8ICh0YXJnZXROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XG4gICAgaWYgKHNjcm9sbFRvcCA+IGVsZW1PZmZzZXQudG9wIC0gKG9mZnNldFRvcCBhcyBudW1iZXIpICYmIG9mZnNldE1vZGUudG9wKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XG4gICAgICBjb25zdCB0b3AgPSB0YXJnZXRSZWN0LnRvcCArIChvZmZzZXRUb3AgYXMgbnVtYmVyKTtcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XG4gICAgICAgIHBvc2l0aW9uIDogJ2ZpeGVkJyxcbiAgICAgICAgdG9wLFxuICAgICAgICBsZWZ0ICAgICA6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcbiAgICAgICAgbWF4SGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7dG9wfXB4KWAsXG4gICAgICAgIHdpZHRoXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZW1TaXplLmhlaWdodFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHNjcm9sbFRvcCA8IGVsZW1PZmZzZXQudG9wICsgZWxlbVNpemUuaGVpZ2h0ICsgKHRoaXMuX29mZnNldEJvdHRvbSBhcyBudW1iZXIpIC0gdGFyZ2V0SW5uZXJIZWlnaHQgJiZcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tXG4gICAgKSB7XG4gICAgICBjb25zdCB0YXJnZXRCb3R0b21PZmZldCA9IHRhcmdldE5vZGUgPT09IHdpbmRvdyA/IDAgOiAod2luZG93LmlubmVySGVpZ2h0IC0gdGFyZ2V0UmVjdC5ib3R0b20pO1xuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIGJvdHRvbSAgOiB0YXJnZXRCb3R0b21PZmZldCArICh0aGlzLl9vZmZzZXRCb3R0b20gYXMgbnVtYmVyKSxcbiAgICAgICAgbGVmdCAgICA6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbU9mZnNldC5oZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZS50eXBlID09PSAncmVzaXplJyAmJiB0aGlzLmFmZml4U3R5bGUgJiYgdGhpcy5hZmZpeFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnICYmIGFmZml4Tm9kZS5vZmZzZXRXaWR0aCkge1xuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwgeyAuLi50aGlzLmFmZml4U3R5bGUsIHdpZHRoOiBhZmZpeE5vZGUub2Zmc2V0V2lkdGggfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwgbnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUobnVsbCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==