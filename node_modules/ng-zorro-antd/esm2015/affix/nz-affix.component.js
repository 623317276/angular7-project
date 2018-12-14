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
export class NzAffixComponent {
    /**
     * @param {?} scrollSrv
     * @param {?} _el
     * @param {?} cd
     */
    constructor(scrollSrv, _el, cd) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTarget(value) {
        this.clearEventListeners();
        this._target = value || window;
        this.setTargetEventListeners();
        this.updatePosition({});
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOffsetTop(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this._offsetTop = toNumber(value, null);
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
    set nzOffsetBottom(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this._offsetBottom = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.timeout = setTimeout(() => {
            this.setTargetEventListeners();
            this.updatePosition({});
        });
    }
    /**
     * @return {?}
     */
    setTargetEventListeners() {
        this.clearEventListeners();
        this.events.forEach((eventName) => {
            this._target.addEventListener(eventName, this.updatePosition, false);
        });
    }
    /**
     * @return {?}
     */
    clearEventListeners() {
        this.events.forEach(eventName => {
            this._target.removeEventListener(eventName, this.updatePosition, false);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearEventListeners();
        clearTimeout(this.timeout);
        (/** @type {?} */ (this.updatePosition)).cancel();
    }
    /**
     * @param {?} target
     * @return {?}
     */
    getTargetRect(target) {
        return target !== window ?
            (/** @type {?} */ (target)).getBoundingClientRect() : /** @type {?} */ ({ top: 0, left: 0, bottom: 0 });
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    getOffset(element, target) {
        /** @type {?} */
        const elemRect = element.getBoundingClientRect();
        /** @type {?} */
        const targetRect = this.getTargetRect(target);
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        const scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        const docElem = window.document.body;
        /** @type {?} */
        const clientTop = docElem.clientTop || 0;
        /** @type {?} */
        const clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    }
    /**
     * @param {?} affixStyle
     * @return {?}
     */
    genStyle(affixStyle) {
        if (affixStyle == null) {
            return '';
        }
        return Object.keys(affixStyle).map(key => {
            /** @type {?} */
            const val = affixStyle[key];
            return `${key}:${typeof val === 'string' ? val : val + 'px'}`;
        }).join(';');
    }
    /**
     * @param {?} e
     * @param {?} affixStyle
     * @return {?}
     */
    setAffixStyle(e, affixStyle) {
        /** @type {?} */
        const originalAffixStyle = this.affixStyle;
        /** @type {?} */
        const isWindow = this._target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        const fixed = !!affixStyle;
        /** @type {?} */
        const wrapEl = /** @type {?} */ (this.wrap.nativeElement);
        wrapEl.style.cssText = this.genStyle(affixStyle);
        this.affixStyle = affixStyle;
        /** @type {?} */
        const cls = 'ant-affix';
        if (fixed) {
            wrapEl.classList.add(cls);
        }
        else {
            wrapEl.classList.remove(cls);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    }
    /**
     * @param {?} placeholderStyle
     * @return {?}
     */
    setPlaceholderStyle(placeholderStyle) {
        /** @type {?} */
        const originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        (/** @type {?} */ (this._el.nativeElement)).style.cssText = this.genStyle(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    updatePosition(e) {
        /** @type {?} */
        const targetNode = this._target;
        /** @type {?} */
        let offsetTop = this.nzOffsetTop;
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        const affixNode = /** @type {?} */ (this._el.nativeElement);
        /** @type {?} */
        const elemOffset = this.getOffset(affixNode, targetNode);
        /** @type {?} */
        const elemSize = {
            width: affixNode.offsetWidth,
            height: affixNode.offsetHeight
        };
        /** @type {?} */
        const offsetMode = {
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
        const targetRect = this.getTargetRect(targetNode);
        /** @type {?} */
        const targetInnerHeight = (/** @type {?} */ (targetNode)).innerHeight || (/** @type {?} */ (targetNode)).clientHeight;
        if (scrollTop > elemOffset.top - (/** @type {?} */ (offsetTop)) && offsetMode.top) {
            /** @type {?} */
            const width = elemOffset.width;
            /** @type {?} */
            const top = targetRect.top + (/** @type {?} */ (offsetTop));
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                maxHeight: `calc(100vh - ${top}px)`,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height
            });
        }
        else if (scrollTop < elemOffset.top + elemSize.height + (/** @type {?} */ (this._offsetBottom)) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            const targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
            /** @type {?} */
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + (/** @type {?} */ (this._offsetBottom)),
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' && this.affixStyle && this.affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                this.setAffixStyle(e, Object.assign({}, this.affixStyle, { width: affixNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e, null);
            }
            this.setPlaceholderStyle(null);
        }
    }
}
NzAffixComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-affix',
                template: "<div #wrap>\n  <ng-content></ng-content>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`:host {
      display: block;
    }`]
            }] }
];
/** @nocollapse */
NzAffixComponent.ctorParameters = () => [
    { type: NzScrollService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFmZml4L256LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBWTFGLE1BQU07Ozs7OztJQXFESixZQUFvQixTQUEwQixFQUFVLEdBQWUsRUFBVSxFQUFxQjtRQUFsRixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtzQkFsRHJGO1lBQ2YsUUFBUTtZQUNSLFFBQVE7WUFDUixZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7WUFDVixVQUFVO1lBQ1YsTUFBTTtTQUNQO3VCQU1tQyxNQUFNO3dCQWtDRSxJQUFJLFlBQVksRUFBRTtLQUc3RDs7Ozs7SUFuQ0QsSUFDSSxRQUFRLENBQUMsS0FBdUI7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDekI7Ozs7O0lBSUQsSUFDSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBSUQsSUFDSSxjQUFjLENBQUMsS0FBYTtRQUM5QixJQUFJLE9BQU8sS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUNoQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFTyx1QkFBdUI7UUFDN0IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFpQixFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0RSxDQUFDLENBQUM7Ozs7O0lBR0csbUJBQW1CO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekUsQ0FBQyxDQUFDOzs7OztJQUdMLFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLG1CQUFDLElBQUksQ0FBQyxjQUFxQixFQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDdkM7Ozs7O0lBRU8sYUFBYSxDQUFDLE1BQStCO1FBQ25ELE9BQU8sTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLG1CQUFDLE1BQXFCLEVBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUMsbUJBQ2pELEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQWdCLENBQUEsQ0FBQzs7Ozs7OztJQUdqRCxTQUFTLENBQUMsT0FBZ0IsRUFBRSxNQUErQjs7UUFNekQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7O1FBQ2pELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBRTlDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFDekQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDOztRQUUzRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzs7UUFDckMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7O1FBQ3pDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBRTNDLE9BQU87WUFDTCxHQUFHLEVBQUssUUFBUSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxTQUFTO1lBQzdELElBQUksRUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLFVBQVU7WUFDakUsS0FBSyxFQUFHLFFBQVEsQ0FBQyxLQUFLO1lBQ3RCLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtTQUN4QixDQUFDO0tBQ0g7Ozs7O0lBRU8sUUFBUSxDQUFDLFVBQWM7UUFDN0IsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQ3RCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztZQUN2QyxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUUsR0FBRyxDQUFFLENBQUM7WUFDOUIsT0FBTyxHQUFHLEdBQUcsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1NBQy9ELENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7SUFHUCxhQUFhLENBQUMsQ0FBTSxFQUFFLFVBQWM7O1FBQzFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7UUFDM0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxrQkFBa0IsSUFBSSxVQUFVLElBQUksUUFBUSxFQUFFO1lBQ3ZFLE9BQU87U0FDUjtRQUNELElBQUksWUFBWSxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBQ2hELE9BQU87U0FDUjs7UUFFRCxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDOztRQUMzQixNQUFNLE1BQU0scUJBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUE0QixFQUFDO1FBQ3RELE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7O1FBQzdCLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQztRQUN4QixJQUFJLEtBQUssRUFBRTtZQUNULE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM5QjtRQUVELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksa0JBQWtCLENBQUMsRUFBRTtZQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjs7Ozs7O0lBR0ssbUJBQW1CLENBQUMsZ0JBQW9COztRQUM5QyxNQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFO1lBQzVELE9BQU87U0FDUjtRQUNELG1CQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBNEIsRUFBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQzs7Ozs7O0lBSTNDLGNBQWMsQ0FBQyxDQUFNOztRQUNuQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOztRQUVoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOztRQUNqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBQzdELE1BQU0sU0FBUyxxQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQTRCLEVBQUM7O1FBQ3hELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDOztRQUN6RCxNQUFNLFFBQVEsR0FBRztZQUNmLEtBQUssRUFBRyxTQUFTLENBQUMsV0FBVztZQUM3QixNQUFNLEVBQUUsU0FBUyxDQUFDLFlBQVk7U0FDL0IsQ0FBQzs7UUFDRixNQUFNLFVBQVUsR0FBRztZQUNqQixHQUFHLEVBQUssS0FBSztZQUNiLE1BQU0sRUFBRSxLQUFLO1NBQ2QsQ0FBQzs7UUFFRixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQzNFLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0wsVUFBVSxDQUFDLEdBQUcsR0FBRyxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUM7WUFDL0MsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssUUFBUSxDQUFDO1NBQzVEOztRQUNELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7O1FBQ2xELE1BQU0saUJBQWlCLEdBQ2YsbUJBQUMsVUFBb0IsRUFBQyxDQUFDLFdBQVcsSUFBSSxtQkFBQyxVQUF5QixFQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3ZGLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsbUJBQUMsU0FBbUIsRUFBQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7O1lBQ3hFLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7O1lBQy9CLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsbUJBQUMsU0FBbUIsRUFBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixRQUFRLEVBQUcsT0FBTztnQkFDbEIsR0FBRztnQkFDSCxJQUFJLEVBQU8sVUFBVSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSTtnQkFDNUMsU0FBUyxFQUFFLGdCQUFnQixHQUFHLEtBQUs7Z0JBQ25DLEtBQUs7YUFDTixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3ZCLEtBQUs7Z0JBQ0wsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNO2FBQ3hCLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFDTCxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLG1CQUFDLElBQUksQ0FBQyxhQUF1QixFQUFDLEdBQUcsaUJBQWlCO1lBQ2pHLFVBQVUsQ0FBQyxNQUFNLEVBQ2pCOztZQUNBLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUMvRixNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixRQUFRLEVBQUUsT0FBTztnQkFDakIsTUFBTSxFQUFJLGlCQUFpQixHQUFHLG1CQUFDLElBQUksQ0FBQyxhQUF1QixFQUFDO2dCQUM1RCxJQUFJLEVBQU0sVUFBVSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSTtnQkFDM0MsS0FBSzthQUNOLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdkIsS0FBSztnQkFDTCxNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07YUFDMUIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxPQUFPLElBQUksU0FBUyxDQUFDLFdBQVcsRUFBRTtnQkFDM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLG9CQUFPLElBQUksQ0FBQyxVQUFVLElBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxXQUFXLElBQUcsQ0FBQzthQUM3RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztLQUNGOzs7WUF4T0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBUyxVQUFVO2dCQUMzQiw0REFBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUU3Qzs7TUFFRTthQUVMOzs7O1lBZFEsZUFBZTtZQVR0QixVQUFVO1lBRlYsaUJBQWlCOzs7bUJBeUNoQixTQUFTLFNBQUMsTUFBTTt1QkFJaEIsS0FBSzswQkFVTCxLQUFLOzZCQWNMLEtBQUs7dUJBUUwsTUFBTTs7O0lBMEdOLGlDQUFpQyxFQUFFOzs7O3NEQWlFbkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL256LXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IHNoYWxsb3dFcXVhbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IHRocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvciB9IGZyb20gJy4uL2NvcmUvdXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgOiAnbnotYWZmaXgnLFxuICB0ZW1wbGF0ZVVybCAgICA6ICcuL256LWFmZml4LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlcyAgICAgICAgIDogW1xuICAgIGA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56QWZmaXhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSB0aW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgZXZlbnRzID0gW1xuICAgICdyZXNpemUnLFxuICAgICdzY3JvbGwnLFxuICAgICd0b3VjaHN0YXJ0JyxcbiAgICAndG91Y2htb3ZlJyxcbiAgICAndG91Y2hlbmQnLFxuICAgICdwYWdlc2hvdycsXG4gICAgJ2xvYWQnXG4gIF07XG4gIHByaXZhdGUgYWZmaXhTdHlsZTogYW55O1xuICBwcml2YXRlIHBsYWNlaG9sZGVyU3R5bGU6IGFueTtcblxuICBAVmlld0NoaWxkKCd3cmFwJykgcHJpdmF0ZSB3cmFwOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX3RhcmdldDogRWxlbWVudCB8IFdpbmRvdyA9IHdpbmRvdztcblxuICBASW5wdXQoKVxuICBzZXQgbnpUYXJnZXQodmFsdWU6IEVsZW1lbnQgfCBXaW5kb3cpIHtcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl90YXJnZXQgPSB2YWx1ZSB8fCB3aW5kb3c7XG4gICAgdGhpcy5zZXRUYXJnZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30pO1xuICB9XG5cbiAgcHJpdmF0ZSBfb2Zmc2V0VG9wOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IG56T2Zmc2V0VG9wKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vZmZzZXRUb3AgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBnZXQgbnpPZmZzZXRUb3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBfb2Zmc2V0Qm90dG9tOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IG56T2Zmc2V0Qm90dG9tKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vZmZzZXRCb3R0b20gPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBAT3V0cHV0KCkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLCBwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUYXJnZXRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbih7fSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFRhcmdldEV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLl90YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMudXBkYXRlUG9zaXRpb24sIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICB0aGlzLl90YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMudXBkYXRlUG9zaXRpb24sIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJFdmVudExpc3RlbmVycygpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICh0aGlzLnVwZGF0ZVBvc2l0aW9uIGFzIGFueSkuY2FuY2VsKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFRhcmdldFJlY3QodGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgbnVsbCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0YXJnZXQgIT09IHdpbmRvdyA/XG4gICAgICAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6XG4gICAgICB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAwIH0gYXMgQ2xpZW50UmVjdDtcbiAgfVxuXG4gIGdldE9mZnNldChlbGVtZW50OiBFbGVtZW50LCB0YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cgfCBudWxsKToge1xuICAgIHRvcDogbnVtYmVyO1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICB9IHtcbiAgICBjb25zdCBlbGVtUmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXQpO1xuXG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldCwgdHJ1ZSk7XG4gICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIGZhbHNlKTtcblxuICAgIGNvbnN0IGRvY0VsZW0gPSB3aW5kb3cuZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbGVtLmNsaWVudFRvcCB8fCAwO1xuICAgIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgMDtcblxuICAgIHJldHVybiB7XG4gICAgICB0b3AgICA6IGVsZW1SZWN0LnRvcCAtIHRhcmdldFJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgICAgbGVmdCAgOiBlbGVtUmVjdC5sZWZ0IC0gdGFyZ2V0UmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgICB3aWR0aCA6IGVsZW1SZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiBlbGVtUmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TdHlsZShhZmZpeFN0eWxlOiB7fSk6IHN0cmluZyB7XG4gICAgaWYgKGFmZml4U3R5bGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYWZmaXhTdHlsZSkubWFwKGtleSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBhZmZpeFN0eWxlWyBrZXkgXTtcbiAgICAgIHJldHVybiBgJHtrZXl9OiR7dHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyB2YWwgOiB2YWwgKyAncHgnfWA7XG4gICAgfSkuam9pbignOycpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBZmZpeFN0eWxlKGU6IGFueSwgYWZmaXhTdHlsZToge30pOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbEFmZml4U3R5bGUgPSB0aGlzLmFmZml4U3R5bGU7XG4gICAgY29uc3QgaXNXaW5kb3cgPSB0aGlzLl90YXJnZXQgPT09IHdpbmRvdztcbiAgICBpZiAoZS50eXBlID09PSAnc2Nyb2xsJyAmJiBvcmlnaW5hbEFmZml4U3R5bGUgJiYgYWZmaXhTdHlsZSAmJiBpc1dpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2hhbGxvd0VxdWFsKG9yaWdpbmFsQWZmaXhTdHlsZSwgYWZmaXhTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXhlZCA9ICEhYWZmaXhTdHlsZTtcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLndyYXAubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICB3cmFwRWwuc3R5bGUuY3NzVGV4dCA9IHRoaXMuZ2VuU3R5bGUoYWZmaXhTdHlsZSk7XG4gICAgdGhpcy5hZmZpeFN0eWxlID0gYWZmaXhTdHlsZTtcbiAgICBjb25zdCBjbHMgPSAnYW50LWFmZml4JztcbiAgICBpZiAoZml4ZWQpIHtcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuXG4gICAgaWYgKChhZmZpeFN0eWxlICYmICFvcmlnaW5hbEFmZml4U3R5bGUpIHx8ICghYWZmaXhTdHlsZSAmJiBvcmlnaW5hbEFmZml4U3R5bGUpKSB7XG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoZml4ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGxhY2Vob2xkZXJTdHlsZShwbGFjZWhvbGRlclN0eWxlOiB7fSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSA9IHRoaXMucGxhY2Vob2xkZXJTdHlsZTtcbiAgICBpZiAoc2hhbGxvd0VxdWFsKHBsYWNlaG9sZGVyU3R5bGUsIG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmNzc1RleHQgPSB0aGlzLmdlblN0eWxlKHBsYWNlaG9sZGVyU3R5bGUpO1xuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHBsYWNlaG9sZGVyU3R5bGU7XG4gIH1cblxuICBAdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yKClcbiAgdXBkYXRlUG9zaXRpb24oZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuX3RhcmdldDtcbiAgICAvLyBCYWNrd2FyZHMgc3VwcG9ydFxuICAgIGxldCBvZmZzZXRUb3AgPSB0aGlzLm56T2Zmc2V0VG9wO1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXROb2RlLCB0cnVlKTtcbiAgICBjb25zdCBhZmZpeE5vZGUgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGVsZW1PZmZzZXQgPSB0aGlzLmdldE9mZnNldChhZmZpeE5vZGUsIHRhcmdldE5vZGUpO1xuICAgIGNvbnN0IGVsZW1TaXplID0ge1xuICAgICAgd2lkdGggOiBhZmZpeE5vZGUub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGFmZml4Tm9kZS5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICAgIGNvbnN0IG9mZnNldE1vZGUgPSB7XG4gICAgICB0b3AgICA6IGZhbHNlLFxuICAgICAgYm90dG9tOiBmYWxzZVxuICAgIH07XG4gICAgLy8gRGVmYXVsdCB0byBgb2Zmc2V0VG9wPTBgLlxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0VG9wICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcy5fb2Zmc2V0Qm90dG9tICE9PSAnbnVtYmVyJykge1xuICAgICAgb2Zmc2V0TW9kZS50b3AgPSB0cnVlO1xuICAgICAgb2Zmc2V0VG9wID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2Zmc2V0TW9kZS50b3AgPSB0eXBlb2Ygb2Zmc2V0VG9wID09PSAnbnVtYmVyJztcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tID0gdHlwZW9mIHRoaXMuX29mZnNldEJvdHRvbSA9PT0gJ251bWJlcic7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0Tm9kZSk7XG4gICAgY29uc3QgdGFyZ2V0SW5uZXJIZWlnaHQgPVxuICAgICAgICAgICAgKHRhcmdldE5vZGUgYXMgV2luZG93KS5pbm5lckhlaWdodCB8fCAodGFyZ2V0Tm9kZSBhcyBIVE1MRWxlbWVudCkuY2xpZW50SGVpZ2h0O1xuICAgIGlmIChzY3JvbGxUb3AgPiBlbGVtT2Zmc2V0LnRvcCAtIChvZmZzZXRUb3AgYXMgbnVtYmVyKSAmJiBvZmZzZXRNb2RlLnRvcCkge1xuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xuICAgICAgY29uc3QgdG9wID0gdGFyZ2V0UmVjdC50b3AgKyAob2Zmc2V0VG9wIGFzIG51bWJlcik7XG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgICBwb3NpdGlvbiA6ICdmaXhlZCcsXG4gICAgICAgIHRvcCxcbiAgICAgICAgbGVmdCAgICAgOiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXG4gICAgICAgIG1heEhlaWdodDogYGNhbGMoMTAwdmggLSAke3RvcH1weClgLFxuICAgICAgICB3aWR0aFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBlbGVtU2l6ZS5oZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBzY3JvbGxUb3AgPCBlbGVtT2Zmc2V0LnRvcCArIGVsZW1TaXplLmhlaWdodCArICh0aGlzLl9vZmZzZXRCb3R0b20gYXMgbnVtYmVyKSAtIHRhcmdldElubmVySGVpZ2h0ICYmXG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbVxuICAgICkge1xuICAgICAgY29uc3QgdGFyZ2V0Qm90dG9tT2ZmZXQgPSB0YXJnZXROb2RlID09PSB3aW5kb3cgPyAwIDogKHdpbmRvdy5pbm5lckhlaWdodCAtIHRhcmdldFJlY3QuYm90dG9tKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICBib3R0b20gIDogdGFyZ2V0Qm90dG9tT2ZmZXQgKyAodGhpcy5fb2Zmc2V0Qm90dG9tIGFzIG51bWJlciksXG4gICAgICAgIGxlZnQgICAgOiB0YXJnZXRSZWN0LmxlZnQgKyBlbGVtT2Zmc2V0LmxlZnQsXG4gICAgICAgIHdpZHRoXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZW1PZmZzZXQuaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ3Jlc2l6ZScgJiYgdGhpcy5hZmZpeFN0eWxlICYmIHRoaXMuYWZmaXhTdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyAmJiBhZmZpeE5vZGUub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHsgLi4udGhpcy5hZmZpeFN0eWxlLCB3aWR0aDogYWZmaXhOb2RlLm9mZnNldFdpZHRoIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIG51bGwpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKG51bGwpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=