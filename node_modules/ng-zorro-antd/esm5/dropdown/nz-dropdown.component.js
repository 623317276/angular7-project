/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
import { NzMenuDirective } from '../menu/nz-menu.directive';
import { NzDropDownDirective } from './nz-dropdown.directive';
var NzDropDownComponent = /** @class */ (function () {
    function NzDropDownComponent(renderer, changeDetector) {
        var _this = this;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this._clickHide = true;
        this._visible = false;
        this._disabled = false;
        this.unsubscribe$ = new Subject();
        this.hasFilterButton = false;
        this.triggerWidth = 0;
        this.placement = 'bottomLeft';
        this.dropDownPosition = 'bottom';
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
        this.$subOpen = new BehaviorSubject(false);
        this.$visibleChange = new Subject();
        this.nzTrigger = 'hover';
        this.nzVisibleChange = new EventEmitter();
        this.onVisibleChange = function (visible) {
            if (visible) {
                _this.setTriggerWidth();
            }
            if (_this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.nzVisibleChange.emit(_this.nzVisible);
            }
            _this.changeDetector.markForCheck();
        };
    }
    Object.defineProperty(NzDropDownComponent.prototype, "nzClickHide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clickHide;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clickHide = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDropDownComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            if (this._disabled) {
                this.renderer.setAttribute(this.nzOrigin.elementRef.nativeElement, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(this.nzOrigin.elementRef.nativeElement, 'disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDropDownComponent.prototype, "nzVisible", {
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
            this._visible = toBoolean(value);
            /** handle nzVisible change with mouse event **/
            this.$visibleChange.next(this._visible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDropDownComponent.prototype, "nzPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.placement = value;
            this.dropDownPosition = (this.nzPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
            this.positions.unshift(/** @type {?} */ (POSITION_MAP[this.placement]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.onClickEvent = /**
     * @return {?}
     */
    function () {
        if (this.nzTrigger === 'click') {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.onMouseEnterEvent = /**
     * @return {?}
     */
    function () {
        if (this.nzTrigger === 'hover') {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.onMouseLeaveEvent = /**
     * @return {?}
     */
    function () {
        if (this.nzTrigger === 'hover') {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.$visibleChange.next(false);
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.$visibleChange.next(true);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzDropDownComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.setTriggerWidth = /**
     * @return {?}
     */
    function () {
        this.triggerWidth = this.nzOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        /** should remove after https://github.com/angular/material2/pull/8765 merged **/
        if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
            this.cdkOverlay.overlayRef.updateSize({
                minWidth: this.triggerWidth
            });
        }
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    NzDropDownComponent.prototype.startSubscribe = /**
     * @param {?} observable$
     * @return {?}
     */
    function (observable$) {
        /** @type {?} */
        var $pre = observable$;
        if (this.nzClickHide && this.nzMenu) {
            /** @type {?} */
            var $menuItemClick = this.nzMenu.nzClick.asObservable().pipe(mapTo(false));
            $pre = merge($pre, $menuItemClick);
        }
        /** @type {?} */
        var final$ = combineLatest($pre, this.$subOpen).pipe(map(function (value) { return value[0] || value[1]; }), debounceTime(50), distinctUntilChanged());
        final$.pipe(takeUntil(this.unsubscribe$)).subscribe(this.onVisibleChange);
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.nzMenu) {
            this.nzMenu.nzInDropDown = true;
        }
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    NzDropDownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mouse$;
        if (this.nzTrigger === 'hover') {
            /** @type {?} */
            var mouseEnterOrigin$ = this.nzOrigin.$mouseenter.pipe(mapTo(true));
            /** @type {?} */
            var mouseLeaveOrigin$ = this.nzOrigin.$mouseleave.pipe(mapTo(false));
            mouse$ = merge(mouseLeaveOrigin$, mouseEnterOrigin$);
        }
        if (this.nzTrigger === 'click') {
            mouse$ = this.nzOrigin.$click.pipe(mapTo(true));
        }
        /** @type {?} */
        var observable$ = merge(this.$visibleChange, mouse$);
        this.startSubscribe(observable$);
    };
    Object.defineProperty(NzDropDownComponent.prototype, "hasBackdrop", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzTrigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    NzDropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown',
                    preserveWhitespaces: false,
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<ng-content select=\"[nz-dropdown]\"></ng-content>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzOrigin\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\n  <div\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <div [class.ant-table-filter-dropdown]=\"hasFilterButton\">\n      <ng-content select=\"[nz-menu]\"></ng-content>\n      <ng-content select=\".ant-table-filter-dropdown-btns\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                    styles: ["\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDropDownComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzDropDownComponent.propDecorators = {
        hasFilterButton: [{ type: Input }],
        nzOrigin: [{ type: ContentChild, args: [NzDropDownDirective,] }],
        nzMenu: [{ type: ContentChild, args: [NzMenuDirective,] }],
        nzTrigger: [{ type: Input }],
        nzVisibleChange: [{ type: Output }],
        cdkOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        nzClickHide: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzPlacement: [{ type: Input }]
    };
    return NzDropDownComponent;
}());
export { NzDropDownComponent };
function NzDropDownComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropDownComponent.prototype._clickHide;
    /** @type {?} */
    NzDropDownComponent.prototype._visible;
    /** @type {?} */
    NzDropDownComponent.prototype._disabled;
    /** @type {?} */
    NzDropDownComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzDropDownComponent.prototype.hasFilterButton;
    /** @type {?} */
    NzDropDownComponent.prototype.triggerWidth;
    /** @type {?} */
    NzDropDownComponent.prototype.placement;
    /** @type {?} */
    NzDropDownComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropDownComponent.prototype.positions;
    /** @type {?} */
    NzDropDownComponent.prototype.$subOpen;
    /** @type {?} */
    NzDropDownComponent.prototype.$visibleChange;
    /** @type {?} */
    NzDropDownComponent.prototype.nzOrigin;
    /** @type {?} */
    NzDropDownComponent.prototype.nzMenu;
    /** @type {?} */
    NzDropDownComponent.prototype.nzTrigger;
    /** @type {?} */
    NzDropDownComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzDropDownComponent.prototype.cdkOverlay;
    /** @type {?} */
    NzDropDownComponent.prototype.onVisibleChange;
    /** @type {?} */
    NzDropDownComponent.prototype.renderer;
    /** @type {?} */
    NzDropDownComponent.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL256LWRyb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBMEQsTUFBTSxzQkFBc0IsQ0FBQztBQUNuSCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFtTDVELDZCQUFvQixRQUFtQixFQUFZLGNBQWlDO1FBQXBGLGlCQUNDO1FBRG1CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBWSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7MEJBekovRCxJQUFJO3dCQUNOLEtBQUs7eUJBQ0osS0FBSzs0QkFDRixJQUFJLE9BQU8sRUFBUTsrQkFFZixLQUFLOzRCQUNqQixDQUFDO3lCQUNTLFlBQVk7Z0NBQ1csUUFB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TSxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNsQztJQUVELHNCQUFJLDRDQUFXOzs7O1FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDO1NBQ25DOzs7T0FBQTs7Z0JBN0tGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsYUFBYTtvQkFDbEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsVUFBVSxFQUFXO3dCQUNuQixpQkFBaUI7cUJBQ2xCO29CQUNELDI3QkFBbUQ7NkJBRWpELHdMQVNDO2lCQUVKOzs7O2dCQW5DQyxTQUFTO2dCQVJULGlCQUFpQjs7O2tDQW1EaEIsS0FBSzsyQkFPTCxZQUFZLFNBQUMsbUJBQW1CO3lCQUNoQyxZQUFZLFNBQUMsZUFBZTs0QkFDNUIsS0FBSztrQ0FDTCxNQUFNOzZCQUNOLFNBQVMsU0FBQyxtQkFBbUI7OEJBRTdCLEtBQUs7NkJBU0wsS0FBSzs0QkFjTCxLQUFLOzhCQVdMLEtBQUs7OzhCQXJHUjs7U0FnRGEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgbWVyZ2UsIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBtYXBUbywgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMsIFBPU0lUSU9OX01BUCB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOek1lbnVEaXJlY3RpdmUgfSBmcm9tICcuLi9tZW51L256LW1lbnUuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24uZGlyZWN0aXZlJztcblxuZXhwb3J0IHR5cGUgTnpQbGFjZW1lbnQgPSAnYm90dG9tTGVmdCcgfCAnYm90dG9tQ2VudGVyJyB8ICdib3R0b21SaWdodCcgfCAndG9wTGVmdCcgfCAndG9wQ2VudGVyJyB8ICd0b3BSaWdodCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotZHJvcGRvd24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIGRyb3BEb3duQW5pbWF0aW9uXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgIGBcbiAgICAgIC5hbnQtZHJvcGRvd24ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2NsaWNrSGlkZSA9IHRydWU7XG4gIHByaXZhdGUgX3Zpc2libGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIGhhc0ZpbHRlckJ1dHRvbiA9IGZhbHNlO1xuICB0cmlnZ2VyV2lkdGggPSAwO1xuICBwbGFjZW1lbnQ6IE56UGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnO1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbIC4uLkRFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TIF07XG4gICRzdWJPcGVuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gICR2aXNpYmxlQ2hhbmdlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgQENvbnRlbnRDaGlsZChOekRyb3BEb3duRGlyZWN0aXZlKSBuek9yaWdpbjogTnpEcm9wRG93bkRpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChOek1lbnVEaXJlY3RpdmUpIG56TWVudTogTnpNZW51RGlyZWN0aXZlO1xuICBASW5wdXQoKSBuelRyaWdnZXI6ICdjbGljaycgfCAnaG92ZXInID0gJ2hvdmVyJztcbiAgQE91dHB1dCgpIG56VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka092ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2xpY2tIaWRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2xpY2tIaWRlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekNsaWNrSGlkZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpY2tIaWRlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLm56T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm56T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Zpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIC8qKiBoYW5kbGUgbnpWaXNpYmxlIGNoYW5nZSB3aXRoIG1vdXNlIGV2ZW50ICoqL1xuICAgIHRoaXMuJHZpc2libGVDaGFuZ2UubmV4dCh0aGlzLl92aXNpYmxlKTtcbiAgfVxuXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IE56UGxhY2VtZW50KSB7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSB2YWx1ZTtcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSAodGhpcy5uelBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSAhPT0gLTEpID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgICB0aGlzLnBvc2l0aW9ucy51bnNoaWZ0KFBPU0lUSU9OX01BUFsgdGhpcy5wbGFjZW1lbnQgXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKTtcbiAgfVxuXG4gIGdldCBuelBsYWNlbWVudCgpOiBOelBsYWNlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMucGxhY2VtZW50O1xuICB9XG5cbiAgb25DbGlja0V2ZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZUVudGVyRXZlbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpUcmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlTGVhdmVFdmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy4kdmlzaWJsZUNoYW5nZS5uZXh0KGZhbHNlKTtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy4kdmlzaWJsZUNoYW5nZS5uZXh0KHRydWUpO1xuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcbiAgfVxuXG4gIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMubnpPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIC8qKiBzaG91bGQgcmVtb3ZlIGFmdGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9wdWxsLzg3NjUgbWVyZ2VkICoqL1xuICAgIGlmICh0aGlzLmNka092ZXJsYXkgJiYgdGhpcy5jZGtPdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVNpemUoe1xuICAgICAgICBtaW5XaWR0aDogdGhpcy50cmlnZ2VyV2lkdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0U3Vic2NyaWJlKG9ic2VydmFibGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+KTogdm9pZCB7XG4gICAgbGV0ICRwcmUgPSBvYnNlcnZhYmxlJDtcbiAgICBpZiAodGhpcy5uekNsaWNrSGlkZSAmJiB0aGlzLm56TWVudSkge1xuICAgICAgY29uc3QgJG1lbnVJdGVtQ2xpY2sgPSB0aGlzLm56TWVudS5uekNsaWNrLmFzT2JzZXJ2YWJsZSgpLnBpcGUobWFwVG8oZmFsc2UpKTtcbiAgICAgICRwcmUgPSBtZXJnZSgkcHJlLCAkbWVudUl0ZW1DbGljayk7XG4gICAgfVxuICAgIGNvbnN0IGZpbmFsJCA9IGNvbWJpbmVMYXRlc3QoJHByZSwgdGhpcy4kc3ViT3BlbikucGlwZShtYXAodmFsdWUgPT4gdmFsdWVbIDAgXSB8fCB2YWx1ZVsgMSBdKSwgZGVib3VuY2VUaW1lKDUwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XG4gICAgZmluYWwkLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKHRoaXMub25WaXNpYmxlQ2hhbmdlKTtcbiAgfVxuXG4gIG9uVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlcldpZHRoKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy5uelZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLm56VmlzaWJsZSk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uek1lbnUpIHtcbiAgICAgIHRoaXMubnpNZW51Lm56SW5Ecm9wRG93biA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgbGV0IG1vdXNlJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBpZiAodGhpcy5uelRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIGNvbnN0IG1vdXNlRW50ZXJPcmlnaW4kID0gdGhpcy5uek9yaWdpbi4kbW91c2VlbnRlci5waXBlKG1hcFRvKHRydWUpKTtcbiAgICAgIGNvbnN0IG1vdXNlTGVhdmVPcmlnaW4kID0gdGhpcy5uek9yaWdpbi4kbW91c2VsZWF2ZS5waXBlKG1hcFRvKGZhbHNlKSk7XG4gICAgICBtb3VzZSQgPSBtZXJnZShtb3VzZUxlYXZlT3JpZ2luJCwgbW91c2VFbnRlck9yaWdpbiQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgIG1vdXNlJCA9IHRoaXMubnpPcmlnaW4uJGNsaWNrLnBpcGUobWFwVG8odHJ1ZSkpO1xuICAgIH1cbiAgICBjb25zdCBvYnNlcnZhYmxlJCA9IG1lcmdlKHRoaXMuJHZpc2libGVDaGFuZ2UsIG1vdXNlJCk7XG4gICAgdGhpcy5zdGFydFN1YnNjcmliZShvYnNlcnZhYmxlJCk7XG4gIH1cblxuICBnZXQgaGFzQmFja2Ryb3AoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmlnZ2VyID09PSAnY2xpY2snO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcm90ZWN0ZWQgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cbn1cbiJdfQ==