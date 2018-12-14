/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Injector, Input, Optional, Output, Renderer2, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortalOutlet, ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { NzScrollStrategyOptions } from '../core/overlay/scroll/nz-scroll-strategy-options';
import { toCssPixel, InputBoolean } from '../core/util/convert';
import { NzDrawerRef } from './nz-drawer-ref';
/** @type {?} */
export var DRAWER_ANIMATE_DURATION = 300;
/**
 * @template T, R, D
 */
var NzDrawerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzDrawerComponent, _super);
    function NzDrawerComponent(
    // tslint:disable-next-line:no-any
    document, renderer, overlay, elementRef, injector, changeDetectorRef, focusTrapFactory, nzScrollStrategyOptions, viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.document = document;
        _this.renderer = renderer;
        _this.overlay = overlay;
        _this.elementRef = elementRef;
        _this.injector = injector;
        _this.changeDetectorRef = changeDetectorRef;
        _this.focusTrapFactory = focusTrapFactory;
        _this.nzScrollStrategyOptions = nzScrollStrategyOptions;
        _this.viewContainerRef = viewContainerRef;
        _this.isOpen = false;
        _this.templateContext = {
            $implicit: undefined,
            drawerRef: /** @type {?} */ (_this)
        };
        _this.nzClosable = true;
        _this.nzMaskClosable = true;
        _this.nzMask = true;
        _this.nzPlacement = 'right';
        _this.nzMaskStyle = {};
        _this.nzBodyStyle = {};
        _this.nzWidth = 256;
        _this.nzHeight = 256;
        _this.nzZIndex = 1000;
        _this.nzOffsetX = 0;
        _this.nzOffsetY = 0;
        _this.nzOnViewInit = new EventEmitter();
        _this.nzOnClose = new EventEmitter();
        _this.nzAfterOpen = new Subject();
        _this.nzAfterClose = new Subject();
        return _this;
    }
    Object.defineProperty(NzDrawerComponent.prototype, "offsetTransform", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.isOpen || (this.nzOffsetX + this.nzOffsetY) === 0) {
                return null;
            }
            switch (this.nzPlacement) {
                case 'left':
                    return "translateX(" + this.nzOffsetX + "px)";
                case 'right':
                    return "translateX(-" + this.nzOffsetX + "px)";
                case 'top':
                    return "translateY(" + this.nzOffsetY + "px)";
                case 'bottom':
                    return "translateY(-" + this.nzOffsetY + "px)";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "transform", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isOpen) {
                return null;
            }
            switch (this.nzPlacement) {
                case 'left':
                    return "translateX(-100%)";
                case 'right':
                    return "translateX(100%)";
                case 'top':
                    return "translateY(-100%)";
                case 'bottom':
                    return "translateY(100%)";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isLeftOrRight ? toCssPixel(this.nzWidth) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isLeftOrRight ? toCssPixel(this.nzHeight) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "isLeftOrRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPlacement === 'left' || this.nzPlacement === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "nzVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "afterOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDrawerComponent.prototype, "afterClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzDrawerComponent.prototype.isNonEmptyString = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' && value !== '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzDrawerComponent.prototype.isTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof TemplateRef;
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.nzContentParams, drawerRef: /** @type {?} */ (this) };
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.attachBodyContent();
        setTimeout(function () {
            _this.nzOnViewInit.emit();
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDrawerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('nzVisible')) {
            /** @type {?} */
            var value = changes["nzVisible"].currentValue;
            this.updateOverlayStyle();
            if (value) {
                this.updateBodyOverflow();
                this.savePreviouslyFocusedElement();
                this.trapFocus();
            }
            else {
                setTimeout(function () {
                    _this.updateBodyOverflow();
                    _this.restoreFocus();
                }, DRAWER_ANIMATE_DURATION);
            }
        }
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.disposeOverlay();
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    NzDrawerComponent.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        var _this = this;
        this.isOpen = false;
        this.updateOverlayStyle();
        this.changeDetectorRef.detectChanges();
        setTimeout(function () {
            _this.updateBodyOverflow();
            _this.restoreFocus();
            _this.nzAfterClose.next(result);
            _this.nzAfterClose.complete();
        }, DRAWER_ANIMATE_DURATION);
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isOpen = true;
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout(function () {
            _this.nzAfterOpen.next();
        }, DRAWER_ANIMATE_DURATION);
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.closeClick = /**
     * @return {?}
     */
    function () {
        this.nzOnClose.emit();
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.maskClick = /**
     * @return {?}
     */
    function () {
        if (this.nzMaskClosable && this.nzMask) {
            this.nzOnClose.emit();
        }
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.attachBodyContent = /**
     * @return {?}
     */
    function () {
        this.bodyPortalOutlet.dispose();
        if (this.nzContent instanceof Type) {
            /** @type {?} */
            var childInjector = new PortalInjector(this.injector, new WeakMap([[NzDrawerRef, this]]));
            /** @type {?} */
            var componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
            /** @type {?} */
            var componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            Object.assign(componentRef.instance, this.nzContentParams);
            componentRef.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.attachOverlay = /**
     * @return {?}
     */
    function () {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
        }
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.disposeOverlay = /**
     * @return {?}
     */
    function () {
        this.overlayRef.dispose();
        this.overlayRef = null;
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.getOverlayConfig = /**
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            scrollStrategy: this.nzScrollStrategyOptions.block()
        });
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.updateOverlayStyle = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.updateBodyOverflow = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            if (this.isOpen) {
                this.overlayRef.getConfig().scrollStrategy.enable();
            }
            else {
                this.overlayRef.getConfig().scrollStrategy.disable();
            }
        }
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.savePreviouslyFocusedElement = /**
     * @return {?}
     */
    function () {
        if (this.document) {
            this.previouslyFocusedElement = /** @type {?} */ (this.document.activeElement);
            this.previouslyFocusedElement.blur();
        }
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.trapFocus = /**
     * @return {?}
     */
    function () {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    };
    /**
     * @return {?}
     */
    NzDrawerComponent.prototype.restoreFocus = /**
     * @return {?}
     */
    function () {
        if (this.previouslyFocusedElement) {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
    NzDrawerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-drawer',
                    template: "<ng-template #drawerTemplate>\n  <div\n    class=\"ant-drawer\"\n    [class.ant-drawer-open]=\"isOpen\"\n    [class.ant-drawer-top]=\"nzPlacement === 'top'\"\n    [class.ant-drawer-bottom]=\"nzPlacement === 'bottom'\"\n    [class.ant-drawer-right]=\"nzPlacement === 'right'\"\n    [class.ant-drawer-left]=\"nzPlacement === 'left'\"\n    [style.transform]=\"offsetTransform\">\n    <div  class=\"ant-drawer-mask\" (click)=\"maskClick()\" *ngIf=\"nzMask\" [style.zIndex]=\"nzZIndex\" [ngStyle]=\"nzMaskStyle\"></div>\n    <div class=\"ant-drawer-content-wrapper {{ nzWrapClassName }}\"\n         [style.zIndex]=\"nzZIndex\"\n         [style.width]=\"width\"\n         [style.height]=\"height\"\n         [style.transform]=\"transform\">\n      <div class=\"ant-drawer-content\">\n        <div class=\"ant-drawer-wrapper-body\"\n          [style.overflow]=\"isLeftOrRight ? 'auto' : null\"\n          [style.height]=\"isLeftOrRight ? '100%' : null\">\n          <div *ngIf=\"nzTitle\" class=\"ant-drawer-header\">\n            <div class=\"ant-drawer-title\">\n              <ng-container [ngSwitch]=\"true\">\n                <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\n                <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><div [innerHTML]=\"nzTitle\"></div></ng-container>\n              </ng-container>\n            </div>\n          </div>\n          <button *ngIf=\"nzClosable\" (click)=\"closeClick()\" aria-label=\"Close\" class=\"ant-drawer-close\">\n            <span class=\"ant-drawer-close-x\"><i nz-icon type=\"close\"></i></span>\n          </button>\n          <div class=\"ant-drawer-body\" [ngStyle]=\"nzBodyStyle\">\n            <ng-template cdkPortalOutlet></ng-template>\n            <ng-container *ngIf=\"isTemplateRef(nzContent)\">\n              <ng-container *ngTemplateOutlet=\"nzContent; context: templateContext\"></ng-container>\n            </ng-container>\n            <ng-content *ngIf=\"!nzContent\"></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzDrawerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: Overlay },
        { type: ElementRef },
        { type: Injector },
        { type: ChangeDetectorRef },
        { type: FocusTrapFactory },
        { type: NzScrollStrategyOptions },
        { type: ViewContainerRef }
    ]; };
    NzDrawerComponent.propDecorators = {
        drawerTemplate: [{ type: ViewChild, args: ['drawerTemplate',] }],
        contentTemplate: [{ type: ViewChild, args: ['contentTemplate',] }],
        bodyPortalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet,] }],
        nzContent: [{ type: Input }],
        nzClosable: [{ type: Input }],
        nzMaskClosable: [{ type: Input }],
        nzMask: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzPlacement: [{ type: Input }],
        nzMaskStyle: [{ type: Input }],
        nzBodyStyle: [{ type: Input }],
        nzWrapClassName: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzHeight: [{ type: Input }],
        nzZIndex: [{ type: Input }],
        nzOffsetX: [{ type: Input }],
        nzOffsetY: [{ type: Input }],
        nzVisible: [{ type: Input }],
        nzOnViewInit: [{ type: Output }],
        nzOnClose: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDrawerComponent.prototype, "nzClosable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDrawerComponent.prototype, "nzMask", void 0);
    return NzDrawerComponent;
}(NzDrawerRef));
export { NzDrawerComponent };
function NzDrawerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDrawerComponent.prototype.previouslyFocusedElement;
    /** @type {?} */
    NzDrawerComponent.prototype.nzContentParams;
    /** @type {?} */
    NzDrawerComponent.prototype.overlayRef;
    /** @type {?} */
    NzDrawerComponent.prototype.portal;
    /** @type {?} */
    NzDrawerComponent.prototype.focusTrap;
    /** @type {?} */
    NzDrawerComponent.prototype.isOpen;
    /** @type {?} */
    NzDrawerComponent.prototype.templateContext;
    /** @type {?} */
    NzDrawerComponent.prototype.drawerTemplate;
    /** @type {?} */
    NzDrawerComponent.prototype.contentTemplate;
    /** @type {?} */
    NzDrawerComponent.prototype.bodyPortalOutlet;
    /** @type {?} */
    NzDrawerComponent.prototype.nzContent;
    /** @type {?} */
    NzDrawerComponent.prototype.nzClosable;
    /** @type {?} */
    NzDrawerComponent.prototype.nzMaskClosable;
    /** @type {?} */
    NzDrawerComponent.prototype.nzMask;
    /** @type {?} */
    NzDrawerComponent.prototype.nzTitle;
    /** @type {?} */
    NzDrawerComponent.prototype.nzPlacement;
    /** @type {?} */
    NzDrawerComponent.prototype.nzMaskStyle;
    /** @type {?} */
    NzDrawerComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzDrawerComponent.prototype.nzWrapClassName;
    /** @type {?} */
    NzDrawerComponent.prototype.nzWidth;
    /** @type {?} */
    NzDrawerComponent.prototype.nzHeight;
    /** @type {?} */
    NzDrawerComponent.prototype.nzZIndex;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOffsetX;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOffsetY;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOnViewInit;
    /** @type {?} */
    NzDrawerComponent.prototype.nzOnClose;
    /** @type {?} */
    NzDrawerComponent.prototype.nzAfterOpen;
    /** @type {?} */
    NzDrawerComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzDrawerComponent.prototype.document;
    /** @type {?} */
    NzDrawerComponent.prototype.renderer;
    /** @type {?} */
    NzDrawerComponent.prototype.overlay;
    /** @type {?} */
    NzDrawerComponent.prototype.elementRef;
    /** @type {?} */
    NzDrawerComponent.prototype.injector;
    /** @type {?} */
    NzDrawerComponent.prototype.changeDetectorRef;
    /** @type {?} */
    NzDrawerComponent.prototype.focusTrapFactory;
    /** @type {?} */
    NzDrawerComponent.prototype.nzScrollStrategyOptions;
    /** @type {?} */
    NzDrawerComponent.prototype.viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkcmF3ZXIvbnotZHJhd2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsSUFBSSxFQUNKLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFhLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDaEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkcsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFOUMsV0FBYSx1QkFBdUIsR0FBRyxHQUFHLENBQUM7Ozs7O0lBU3VCLDZDQUFjO0lBMEc5RTs7SUFFd0MsUUFBYSxFQUMzQyxVQUNBLFNBQ0EsWUFDQSxVQUNBLG1CQUNBLGtCQUNBLHlCQUNBO1FBVlYsWUFXRSxpQkFBTyxTQUNSO1FBVnVDLGNBQVEsR0FBUixRQUFRLENBQUs7UUFD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Q0wsS0FBSztrQ0FDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFFTCxLQUFLOytCQVNMLE1BQU07NEJBQ04sTUFBTTs7O1FBeEJHLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OzRCQTVHMUI7RUE0Q2tFLFdBQVc7U0FBaEUsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENka1BvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOelNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9zY3JvbGwvbnotc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMnO1xuaW1wb3J0IHsgdG9Dc3NQaXhlbCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpEcmF3ZXJPcHRpb25zLCBOekRyYXdlclBsYWNlbWVudCB9IGZyb20gJy4vbnotZHJhd2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJSZWYgfSBmcm9tICcuL256LWRyYXdlci1yZWYnO1xuXG5leHBvcnQgY29uc3QgRFJBV0VSX0FOSU1BVEVfRFVSQVRJT04gPSAzMDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjbGFzcyBOekRyYXdlckNvbXBvbmVudDxUID0gYW55LCBSID0gYW55LCBEID0gYW55PiBleHRlbmRzIE56RHJhd2VyUmVmPFI+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgTnpEcmF3ZXJPcHRpb25zIHtcbiAgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgbnpDb250ZW50UGFyYW1zOiBEOyAvLyBvbmx5IHNlcnZpY2VcbiAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcbiAgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG4gIGlzT3BlbiA9IGZhbHNlO1xuICB0ZW1wbGF0ZUNvbnRleHQ6IHsgJGltcGxpY2l0OiBEOyBkcmF3ZXJSZWY6IE56RHJhd2VyUmVmPFI+IH0gPSB7XG4gICAgJGltcGxpY2l0OiB1bmRlZmluZWQsXG4gICAgZHJhd2VyUmVmOiB0aGlzIGFzIE56RHJhd2VyUmVmPFI+XG4gIH07XG5cbiAgZ2V0IG9mZnNldFRyYW5zZm9ybSgpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5pc09wZW4gfHwgKHRoaXMubnpPZmZzZXRYICsgdGhpcy5uek9mZnNldFkpID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLm56UGxhY2VtZW50KSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKCR7dGhpcy5uek9mZnNldFh9cHgpYDtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKC0ke3RoaXMubnpPZmZzZXRYfXB4KWA7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVkoJHt0aGlzLm56T2Zmc2V0WX1weClgO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVZKC0ke3RoaXMubnpPZmZzZXRZfXB4KWA7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRyYW5zZm9ybSgpOiBzdHJpbmcge1xuXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMubnpQbGFjZW1lbnQpIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZVgoLTEwMCUpYDtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVYKDEwMCUpYDtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHJldHVybiBgdHJhbnNsYXRlWSgtMTAwJSlgO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGVZKDEwMCUpYDtcbiAgICB9XG4gIH1cblxuICBnZXQgd2lkdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc0xlZnRPclJpZ2h0ID8gdG9Dc3NQaXhlbCh0aGlzLm56V2lkdGgpIDogbnVsbDtcbiAgfVxuXG4gIGdldCBoZWlnaHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gIXRoaXMuaXNMZWZ0T3JSaWdodCA/IHRvQ3NzUGl4ZWwodGhpcy5uekhlaWdodCkgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGlzTGVmdE9yUmlnaHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpQbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCB0aGlzLm56UGxhY2VtZW50ID09PSAncmlnaHQnO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnZHJhd2VyVGVtcGxhdGUnKSBkcmF3ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xuICBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnKSBjb250ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjtcbiAgQFZpZXdDaGlsZChDZGtQb3J0YWxPdXRsZXQpIGJvZHlQb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcbiAgQElucHV0KCkgbnpDb250ZW50OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRCwgZHJhd2VyUmVmOiBOekRyYXdlclJlZjxSPiB9PiB8IFR5cGU8VD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNsb3NhYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TWFza0Nsb3NhYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TWFzayA9IHRydWU7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PjtcbiAgQElucHV0KCkgbnpQbGFjZW1lbnQ6IE56RHJhd2VyUGxhY2VtZW50ID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgbnpNYXNrU3R5bGU6IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKSBuekJvZHlTdHlsZTogb2JqZWN0ID0ge307XG4gIEBJbnB1dCgpIG56V3JhcENsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSAyNTY7XG4gIEBJbnB1dCgpIG56SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcgPSAyNTY7XG4gIEBJbnB1dCgpIG56WkluZGV4ID0gMTAwMDtcbiAgQElucHV0KCkgbnpPZmZzZXRYID0gMDtcbiAgQElucHV0KCkgbnpPZmZzZXRZID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgbnpWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuO1xuICB9XG5cbiAgQE91dHB1dCgpIG56T25WaWV3SW5pdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG56T25DbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcbiAgbnpBZnRlck9wZW4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBuekFmdGVyQ2xvc2UgPSBuZXcgU3ViamVjdDxSPigpO1xuXG4gIGdldCBhZnRlck9wZW4oKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubnpBZnRlck9wZW4uYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgYWZ0ZXJDbG9zZSgpOiBPYnNlcnZhYmxlPFI+IHtcbiAgICByZXR1cm4gdGhpcy5uekFmdGVyQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcbiAgfVxuXG4gIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSxcbiAgICBwcml2YXRlIG56U2Nyb2xsU3RyYXRlZ3lPcHRpb25zOiBOelNjcm9sbFN0cmF0ZWd5T3B0aW9ucyxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hPdmVybGF5KCk7XG4gICAgdGhpcy51cGRhdGVPdmVybGF5U3R5bGUoKTtcbiAgICB0aGlzLnVwZGF0ZUJvZHlPdmVyZmxvdygpO1xuICAgIHRoaXMudGVtcGxhdGVDb250ZXh0ID0geyAkaW1wbGljaXQ6IHRoaXMubnpDb250ZW50UGFyYW1zLCBkcmF3ZXJSZWY6IHRoaXMgYXMgTnpEcmF3ZXJSZWY8Uj4gfTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaEJvZHlDb250ZW50KCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm56T25WaWV3SW5pdC5lbWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256VmlzaWJsZScpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNoYW5nZXMubnpWaXNpYmxlLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlT3ZlcmxheVN0eWxlKCk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVCb2R5T3ZlcmZsb3coKTtcbiAgICAgICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMudHJhcEZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUJvZHlPdmVyZmxvdygpO1xuICAgICAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XG4gICAgICAgIH0sIERSQVdFUl9BTklNQVRFX0RVUkFUSU9OKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3Bvc2VPdmVybGF5KCk7XG4gIH1cblxuICBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZU92ZXJsYXlTdHlsZSgpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVCb2R5T3ZlcmZsb3coKTtcbiAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XG4gICAgICB0aGlzLm56QWZ0ZXJDbG9zZS5uZXh0KHJlc3VsdCk7XG4gICAgICB0aGlzLm56QWZ0ZXJDbG9zZS5jb21wbGV0ZSgpO1xuICAgIH0sIERSQVdFUl9BTklNQVRFX0RVUkFUSU9OKTtcbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlT3ZlcmxheVN0eWxlKCk7XG4gICAgdGhpcy51cGRhdGVCb2R5T3ZlcmZsb3coKTtcbiAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICB0aGlzLnRyYXBGb2N1cygpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uekFmdGVyT3Blbi5uZXh0KCk7XG4gICAgfSwgRFJBV0VSX0FOSU1BVEVfRFVSQVRJT04pO1xuICB9XG5cbiAgY2xvc2VDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLm56T25DbG9zZS5lbWl0KCk7XG4gIH1cblxuICBtYXNrQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpNYXNrQ2xvc2FibGUgJiYgdGhpcy5uek1hc2spIHtcbiAgICAgIHRoaXMubnpPbkNsb3NlLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaEJvZHlDb250ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuYm9keVBvcnRhbE91dGxldC5kaXNwb3NlKCk7XG5cbiAgICBpZiAodGhpcy5uekNvbnRlbnQgaW5zdGFuY2VvZiBUeXBlKSB7XG4gICAgICBjb25zdCBjaGlsZEluamVjdG9yID0gbmV3IFBvcnRhbEluamVjdG9yKHRoaXMuaW5qZWN0b3IsIG5ldyBXZWFrTWFwKFsgWyBOekRyYXdlclJlZiwgdGhpcyBdIF0pKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWw8VD4odGhpcy5uekNvbnRlbnQsIG51bGwsIGNoaWxkSW5qZWN0b3IpO1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5ib2R5UG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChjb21wb25lbnRQb3J0YWwpO1xuICAgICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMubnpDb250ZW50UGFyYW1zKTtcbiAgICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmRyYXdlclRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGlzcG9zZU92ZXJsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5uelNjcm9sbFN0cmF0ZWd5T3B0aW9ucy5ibG9jaygpXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU92ZXJsYXlTdHlsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQsICdwb2ludGVyLWV2ZW50cycsIHRoaXMuaXNPcGVuID8gJ2F1dG8nIDogJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUJvZHlPdmVyZmxvdygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLnNjcm9sbFN0cmF0ZWd5LmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmdldENvbmZpZygpLnNjcm9sbFN0cmF0ZWd5LmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRvY3VtZW50KSB7XG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYXBGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50KTtcbiAgICB9XG4gICAgdGhpcy5mb2N1c1RyYXAuZm9jdXNJbml0aWFsRWxlbWVudFdoZW5SZWFkeSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50KSB7XG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c1RyYXApIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==