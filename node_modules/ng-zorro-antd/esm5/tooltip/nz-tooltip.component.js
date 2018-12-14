/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimation } from '../core/animation/fade-animations';
import { DEFAULT_4_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var NzToolTipComponent = /** @class */ (function () {
    function NzToolTipComponent(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = tslib_1.__spread(DEFAULT_4_POSITIONS);
        this._classMap = {};
        this._placement = 'top';
        this._trigger = 'hover';
        this.visibleSource = new BehaviorSubject(false);
        this.visible$ = this.visibleSource.asObservable();
        this.nzVisibleChange = new EventEmitter();
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15;
        this.nzMouseLeaveDelay = 0.1;
    }
    Object.defineProperty(NzToolTipComponent.prototype, "nzContent", {
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
            this.isContentString = !(value instanceof TemplateRef);
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isTitleString = !(value instanceof TemplateRef);
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visibleSource.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = toBoolean(value);
            if (this.visibleSource.value !== visible) {
                this.visibleSource.next(visible);
                this.nzVisibleChange.emit(visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzTrigger", {
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
            this._hasBackdrop = this._trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzToolTipComponent.prototype, "nzPlacement", {
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
            if (value !== this._placement) {
                this._placement = value;
                this._positions.unshift(/** @type {?} */ (POSITION_MAP[this.nzPlacement]));
            }
        },
        enumerable: true,
        configurable: true
    });
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzToolTipComponent.prototype.onPositionChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        for (var key in POSITION_MAP) {
            if (JSON.stringify($event.connectionPair) === JSON.stringify(POSITION_MAP[key])) {
                this.nzPlacement = key;
                break;
            }
        }
        this.setClassMap();
        /** TODO may cause performance problem */
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.isContentEmpty()) {
            this.nzVisible = true;
        }
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.nzVisible = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzToolTipComponent.prototype._afterVisibilityAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'false' && !this.nzVisible) {
            this.nzVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.nzVisible) {
            this.nzVisibleChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this._classMap = (_a = {},
            _a[this.nzOverlayClassName] = true,
            _a[this._prefix + "-" + this._placement] = true,
            _a);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    NzToolTipComponent.prototype.setOverlayOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        this.overlayOrigin = origin;
    };
    /**
     * @return {?}
     */
    NzToolTipComponent.prototype.isContentEmpty = /**
     * @return {?}
     */
    function () {
        return this.isTitleString ? (this.nzTitle === '' || !isNotNil(this.nzTitle)) : false; // Pity, can't detect whether nzTemplate is empty due to can't get it's content before shown up
    };
    NzToolTipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tooltip',
                    animations: [fadeAnimation],
                    template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-tooltip\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow\"></div>\n      <div class=\"ant-tooltip-inner\">\n        <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n        <ng-template #titleTemplate>\n          <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    preserveWhitespaces: false,
                    styles: ["\n    .ant-tooltip {\n      position: relative;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzToolTipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzToolTipComponent.propDecorators = {
        _title: [{ type: ContentChild, args: ['nzTemplate',] }],
        overlay: [{ type: ViewChild, args: ['overlay',] }],
        nzVisibleChange: [{ type: Output }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzTrigger: [{ type: Input }],
        nzPlacement: [{ type: Input }]
    };
    return NzToolTipComponent;
}());
export { NzToolTipComponent };
function NzToolTipComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzToolTipComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzToolTipComponent.prototype._prefix;
    /** @type {?} */
    NzToolTipComponent.prototype._positions;
    /** @type {?} */
    NzToolTipComponent.prototype._classMap;
    /** @type {?} */
    NzToolTipComponent.prototype._placement;
    /** @type {?} */
    NzToolTipComponent.prototype._trigger;
    /** @type {?} */
    NzToolTipComponent.prototype._content;
    /** @type {?} */
    NzToolTipComponent.prototype.overlayOrigin;
    /** @type {?} */
    NzToolTipComponent.prototype.isContentString;
    /** @type {?} */
    NzToolTipComponent.prototype.isTitleString;
    /** @type {?} */
    NzToolTipComponent.prototype.visibleSource;
    /** @type {?} */
    NzToolTipComponent.prototype.visible$;
    /** @type {?} */
    NzToolTipComponent.prototype._title;
    /** @type {?} */
    NzToolTipComponent.prototype.overlay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidG9vbHRpcC9uei10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFDTCxtQkFBbUIsRUFJcEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUEwSS9DLDRCQUFtQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjs0QkE1SDFCLEtBQUs7dUJBQ1YsdUJBQXVCOzJDQUNXLG1CQUFtQjt5QkFDbkQsRUFBRTswQkFDRCxLQUFLO3dCQUNQLE9BQU87NkJBS0YsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDO3dCQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTsrQkFHZCxJQUFJLFlBQVksRUFBRTtrQ0FFdkMsRUFBRTs4QkFDdUIsRUFBRTtpQ0FDNUIsSUFBSTtpQ0FDSixHQUFHO0tBMEcvQjtJQXpHRCxzQkFDSSx5Q0FBUzs7OztRQUtiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQVJELFVBQ2MsS0FBaUM7WUFDN0MsSUFBSSxDQUFD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dCI6WyJpbXBvcnQge1xuICBBbmltYXRpb25FdmVudFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXG4gIENka092ZXJsYXlPcmlnaW4sXG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmYWRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZmFkZS1hbmltYXRpb25zJztcbmltcG9ydCB7IERFRkFVTFRfNF9QT1NJVElPTlMsIFBPU0lUSU9OX01BUCB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdG9vbHRpcCcsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFsgZmFkZUFuaW1hdGlvbiBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIC5hbnQtdG9vbHRpcCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUb29sVGlwQ29tcG9uZW50IHtcbiAgX2hhc0JhY2tkcm9wID0gZmFsc2U7XG4gIF9wcmVmaXggPSAnYW50LXRvb2x0aXAtcGxhY2VtZW50JztcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWyAuLi5ERUZBVUxUXzRfUE9TSVRJT05TIF07XG4gIF9jbGFzc01hcCA9IHt9O1xuICBfcGxhY2VtZW50ID0gJ3RvcCc7XG4gIF90cmlnZ2VyID0gJ2hvdmVyJztcbiAgX2NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBvdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBpc0NvbnRlbnRTdHJpbmc6IGJvb2xlYW47XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG4gIHZpc2libGVTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgdmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnZpc2libGVTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAVmlld0NoaWxkKCdvdmVybGF5Jykgb3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcbiAgQE91dHB1dCgpIG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIG56T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9ID0ge307XG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5ID0gMC4xNTsgLy8gVW5pdDogc2Vjb25kXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5ID0gMC4xOyAvLyBVbml0OiBzZWNvbmRcbiAgQElucHV0KClcbiAgc2V0IG56Q29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzQ29udGVudFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56Q29udGVudCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLnZpc2libGVTb3VyY2UudmFsdWUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZVNvdXJjZS5uZXh0KHZpc2libGUpO1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVTb3VyY2UudmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUcmlnZ2VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0aGlzLl90cmlnZ2VyID09PSAnY2xpY2snO1xuICB9XG5cbiAgZ2V0IG56VHJpZ2dlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3BsYWNlbWVudCkge1xuICAgICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XG4gICAgICB0aGlzLl9wb3NpdGlvbnMudW5zaGlmdChQT1NJVElPTl9NQVBbIHRoaXMubnpQbGFjZW1lbnQgXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICB9XG5cbiAgLy8gTWFudWFsbHkgZm9yY2UgdXBkYXRpbmcgY3VycmVudCBvdmVybGF5J3MgcG9zaXRpb25cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKCRldmVudDogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gUE9TSVRJT05fTUFQKSB7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoJGV2ZW50LmNvbm5lY3Rpb25QYWlyKSA9PT0gSlNPTi5zdHJpbmdpZnkoUE9TSVRJT05fTUFQWyBrZXkgXSkpIHtcbiAgICAgICAgdGhpcy5uelBsYWNlbWVudCA9IGtleTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICAvKiogVE9ETyBtYXkgY2F1c2UgcGVyZm9ybWFuY2UgcHJvYmxlbSAqL1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ29udGVudEVtcHR5KCkpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMubnpWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBfYWZ0ZXJWaXNpYmlsaXR5QW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ2ZhbHNlJyAmJiAhdGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoZS50b1N0YXRlID09PSAndHJ1ZScgJiYgdGhpcy5uelZpc2libGUpIHtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMubnpPdmVybGF5Q2xhc3NOYW1lIF0gICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5fcGxhY2VtZW50fWAgXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbik6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheU9yaWdpbiA9IG9yaWdpbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBpc0NvbnRlbnRFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1RpdGxlU3RyaW5nID8gKHRoaXMubnpUaXRsZSA9PT0gJycgfHwgIWlzTm90TmlsKHRoaXMubnpUaXRsZSkpIDogZmFsc2U7IC8vIFBpdHksIGNhbid0IGRldGVjdCB3aGV0aGVyIG56VGVtcGxhdGUgaXMgZW1wdHkgZHVlIHRvIGNhbid0IGdldCBpdCdzIGNvbnRlbnQgYmVmb3JlIHNob3duIHVwXG4gIH1cbn1cbiJdfQ==