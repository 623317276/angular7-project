/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Inject, Injector, Input, Output, Renderer2, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMeasureScrollbarService } from '../core/services/nz-measure-scrollbar.service';
import { InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import ModalUtil from './modal-util';
import { NZ_MODAL_CONFIG, NZ_MODAL_DEFAULT_CONFIG } from './nz-modal-config';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalRef } from './nz-modal-ref.class';
/** @type {?} */
export const MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
/**
 * @template T, R
 */
// tslint:disable-next-line:no-any
export class NzModalComponent extends NzModalRef {
    /**
     * @param {?} overlay
     * @param {?} i18n
     * @param {?} renderer
     * @param {?} cfr
     * @param {?} elementRef
     * @param {?} viewContainer
     * @param {?} nzMeasureScrollbarService
     * @param {?} modalControl
     * @param {?} focusTrapFactory
     * @param {?} config
     * @param {?} document
     */
    constructor(overlay, i18n, renderer, cfr, elementRef, viewContainer, nzMeasureScrollbarService, modalControl, focusTrapFactory, config, document) {
        // tslint:disable-line:no-any
        super();
        this.overlay = overlay;
        this.i18n = i18n;
        this.renderer = renderer;
        this.cfr = cfr;
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.modalControl = modalControl;
        this.focusTrapFactory = focusTrapFactory;
        this.config = config;
        this.document = document;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.nzModalType = 'default';
        this.nzGetContainer = () => this.overlay.create();
        this.nzVisible = false;
        this.nzVisibleChange = new EventEmitter();
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzIconType = 'question-circle';
        this.nzClosable = true;
        this.nzMask = true;
        this.nzMaskClosable = true;
        this.nzAfterOpen = new EventEmitter();
        this.nzAfterClose = new EventEmitter();
        this.nzOkType = 'primary';
        this.nzOkLoading = false;
        this.nzOnOk = new EventEmitter();
        this.nzCancelLoading = false;
        this.nzOnCancel = new EventEmitter();
        this.transformOrigin = '0px 0px 0px';
        this.config = this.mergeDefaultConfig(this.config);
    }
    /**
     * @return {?}
     */
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.nzAfterOpen.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.nzAfterClose.asObservable();
    }
    /**
     * @return {?}
     */
    get okText() {
        return this.nzOkText || this.locale.okText;
    }
    /**
     * @return {?}
     */
    get cancelText() {
        return this.nzCancelText || this.locale.cancelText;
    }
    /**
     * @return {?}
     */
    get hidden() {
        return !this.nzVisible && !this.animationState;
    } // Indicate whether this dialog should hidden
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Modal'));
        if (this.isComponent(this.nzContent)) {
            this.createDynamicComponent(/** @type {?} */ (this.nzContent)); // Create component along without View
        }
        if (this.isModalButtons(this.nzFooter)) { // Setup default button options
            // Setup default button options
            this.nzFooter = this.formatModalButtons(/** @type {?} */ (this.nzFooter));
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.nzGetContainer === 'function' ? this.nzGetContainer() : this.nzGetContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
        }
        else if (this.container instanceof OverlayRef) { // NOTE: only attach the dom to overlay, the view container is not changed actually
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzVisible"]) {
            this.handleVisibleStateChange(this.nzVisible, !changes["nzVisible"].firstChange); // Do not trigger animation while initializing
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            (/** @type {?} */ (this.autoFocusButtonOk.nativeElement)).focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Close self before destructing
        this.changeVisibleFromInside(false).then(() => {
            this.modalControl.deregisterModal(this);
            if (this.container instanceof OverlayRef) {
                this.container.dispose();
            }
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
    }
    /**
     * @return {?}
     */
    open() {
        this.changeVisibleFromInside(true);
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this.changeVisibleFromInside(false, result);
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    destroy(result) {
        // Destroy equals Close
        this.close(result);
    }
    /**
     * @return {?}
     */
    triggerOk() {
        this.onClickOkCancel('ok');
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        this.onClickOkCancel('cancel');
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this;
    }
    /**
     * @return {?}
     */
    getContentComponentRef() {
        return this.contentComponentRef;
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        return this.contentComponentRef && this.contentComponentRef.instance;
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClickMask($event) {
        if (this.nzMask &&
            this.nzMaskClosable &&
            (/** @type {?} */ ($event.target)).classList.contains('ant-modal-wrap') &&
            this.nzVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isModalType(type) {
        return this.nzModalType === type;
    }
    /**
     * @return {?}
     */
    onClickCloseBtn() {
        if (this.nzVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    onClickOkCancel(type) {
        /** @type {?} */
        const trigger = { 'ok': this.nzOnOk, 'cancel': this.nzOnCancel }[type];
        /** @type {?} */
        const loadingKey = { 'ok': 'nzOkLoading', 'cancel': 'nzCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            const result = trigger(this.getContentComponent());
            /** @type {?} */
            const caseClose = (doClose) => (doClose !== false) && this.close(/** @type {?} */ (doClose)); // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                /** @type {?} */
                const handleThen = (doClose) => {
                    this[loadingKey] = false;
                    caseClose(doClose);
                };
                (/** @type {?} */ (result)).then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isComponent(value) {
        return value instanceof Type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isModalButtons(value) {
        return Array.isArray(value) && value.length > 0;
    }
    /**
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    handleVisibleStateChange(visible, animation = true, closeResult) {
        if (visible) { // Hide scrollbar at the first time when shown up
            // Hide scrollbar at the first time when shown up
            this.changeBodyOverflow(1);
            this.savePreviouslyFocusedElement();
            this.trapFocus();
        }
        return Promise
            .resolve(animation && this.animateTo(visible))
            .then(() => {
            // Emit open/close event after animations over
            if (visible) {
                this.nzAfterOpen.emit();
            }
            else {
                this.nzAfterClose.emit(closeResult);
                this.restoreFocus();
                this.changeBodyOverflow(); // Show/hide scrollbar when animation is over
            }
        });
        // .then(() => this.changeBodyOverflow());
    }
    /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    getButtonCallableProp(options, prop) {
        /** @type {?} */
        const value = options[prop];
        /** @type {?} */
        const args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    }
    /**
     * @param {?} button
     * @return {?}
     */
    onButtonClick(button) {
        /** @type {?} */
        const result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            (/** @type {?} */ (result)).then(() => button.loading = false).catch(() => button.loading = false);
        }
    }
    /**
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    changeVisibleFromInside(visible, closeResult) {
        if (this.nzVisible !== visible) {
            // Change nzVisible value immediately
            this.nzVisible = visible;
            this.nzVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    changeAnimationState(state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = {
                [`fade-${state}`]: true,
                [`fade-${state}-active`]: true
            };
            this.modalAnimationClassMap = {
                [`zoom-${state}`]: true,
                [`zoom-${state}-active`]: true
            };
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    animateTo(isVisible) {
        if (isVisible) { // Figure out the lastest click position when shows up
            // Figure out the lastest click position when shows up
            window.setTimeout(() => this.updateTransformOrigin()); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise((resolve) => window.setTimeout(() => {
            // Return when animation is over
            this.changeAnimationState(null);
            resolve();
        }, MODAL_ANIMATE_DURATION));
    }
    /**
     * @param {?} buttons
     * @return {?}
     */
    formatModalButtons(buttons) {
        return buttons.map((button) => {
            /** @type {?} */
            const mixedButton = Object.assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
            // if (mixedButton.autoLoading) { mixedButton.loading = false; } // Force loading to false when autoLoading=true
            return mixedButton;
        });
    }
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param {?} component Component class
     * @return {?}
     */
    createDynamicComponent(component) {
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(component);
        /** @type {?} */
        const childInjector = Injector.create({
            providers: [{ provide: NzModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.nzComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.nzComponentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    updateTransformOrigin() {
        /** @type {?} */
        const modalElement = /** @type {?} */ (this.modalContainer.nativeElement);
        /** @type {?} */
        const lastPosition = ModalUtil.getLastClickPosition();
        if (lastPosition) {
            this.transformOrigin = `${lastPosition.x - modalElement.offsetLeft}px ${lastPosition.y - modalElement.offsetTop}px 0px`;
        }
        // else {
        //   this.transformOrigin = '0px 0px 0px';
        // }
    }
    /**
     * Take care of the body's overflow to decide the existense of scrollbar
     * @param {?=} plusNum The number that the openModals.length will increase soon
     * @return {?}
     */
    changeBodyOverflow(plusNum = 0) {
        if (this.config.autoBodyPadding) {
            /** @type {?} */
            const openModals = this.modalControl.openModals;
            if (openModals.length + plusNum > 0) {
                if (this.hasBodyScrollBar()) { // Adding padding-right only when body's scrollbar is able to shown up
                    // Adding padding-right only when body's scrollbar is able to shown up
                    this.renderer.setStyle(this.document.body, 'padding-right', `${this.nzMeasureScrollbarService.scrollBarWidth}px`);
                    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
                }
            }
            else { // NOTE: we need to always remove the padding due to the scroll bar may be disappear by window resizing before modal closed
                // NOTE: we need to always remove the padding due to the scroll bar may be disappear by window resizing before modal closed
                this.renderer.removeStyle(this.document.body, 'padding-right');
                this.renderer.removeStyle(this.document.body, 'overflow');
            }
        }
    }
    /**
     * Check whether the body element is able to has the scroll bar (if the body content height exceeds the window's height)
     * Exceptional Cases: users can show the scroll bar by their own permanently (eg. overflow: scroll)
     * @return {?}
     */
    hasBodyScrollBar() {
        return this.document.body.scrollHeight > (window.innerHeight || this.document.documentElement.clientHeight);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    mergeDefaultConfig(config) {
        return Object.assign({}, NZ_MODAL_DEFAULT_CONFIG, config);
    }
    /**
     * @return {?}
     */
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.previouslyFocusedElement = /** @type {?} */ (this.document.activeElement);
            this.previouslyFocusedElement.blur();
        }
    }
    /**
     * @return {?}
     */
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    }
    /**
     * @return {?}
     */
    restoreFocus() {
        if (this.previouslyFocusedElement) {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
NzModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-modal',
                template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\n\n<div>\n  <div *ngIf=\"nzMask\"\n    class=\"ant-modal-mask\"\n    [ngClass]=\"maskAnimationClassMap\"\n    [class.ant-modal-mask-hidden]=\"hidden\"\n    [ngStyle]=\"nzMaskStyle\"\n    [style.zIndex]=\"nzZIndex\"\n  ></div>\n  <div\n    (click)=\"onClickMask($event)\"\n    class=\"ant-modal-wrap {{ nzWrapClassName }}\"\n    [style.zIndex]=\"nzZIndex\"\n    [style.display]=\"hidden ? 'none' : ''\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n  >\n    <div #modalContainer\n      class=\"ant-modal {{ nzClassName }}\"\n      [ngClass]=\"modalAnimationClassMap\"\n      [ngStyle]=\"nzStyle\"\n      [style.width]=\"nzWidth | toCssUnit\"\n      [style.transform-origin]=\"transformOrigin\"\n      role=\"document\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"nzClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\n          <span class=\"ant-modal-close-x\">\n            <i nz-icon type=\"close\" class=\"ant-modal-close-icon\"></i>\n          </span>\n        </button>\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinel</div>\n  </div>\n</div>\n\n<!-- [Predefined] Default Modal Content -->\n<ng-template #tplContentDefault>\n  <div *ngIf=\"nzTitle\" class=\"ant-modal-header\">\n    <div class=\"ant-modal-title\">\n      <ng-container [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><div [innerHTML]=\"nzTitle\"></div></ng-container>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\n    <ng-container #bodyContainer>\n      <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n      </ng-container>\n    </ng-container>\n  </div>\n  <div *ngIf=\"nzFooter !== null\" class=\"ant-modal-footer\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(nzFooter)\" [ngTemplateOutlet]=\"nzFooter\"></ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(nzFooter)\"><div [innerHTML]=\"nzFooter\"></div></ng-container>\n      <ng-container *ngSwitchCase=\"isModalButtons(nzFooter)\">\n        <button *ngFor=\"let button of nzFooter\" nz-button\n          (click)=\"onButtonClick(button)\"\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\n          [nzLoading]=\"getButtonCallableProp(button, 'loading')\"\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n          [nzType]=\"button.type\"\n          [nzShape]=\"button.shape\"\n          [nzSize]=\"button.size\"\n          [nzGhost]=\"button.ghost\"\n        >{{ button.label }}</button>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button *ngIf=\"nzCancelText!==null\" nz-button (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"nzCancelLoading\">\n          {{ cancelText }}\n        </button>\n        <button *ngIf=\"nzOkText!==null\" nz-button [nzType]=\"nzOkType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"nzOkLoading\">\n          {{ okText }}\n        </button>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-template>\n<!-- /[Predefined] Default Modal Content -->\n\n<!-- [Predefined] Confirm Modal Content -->\n<ng-template #tplContentConfirm>\n  <div class=\"ant-modal-body\" [ngStyle]=\"nzBodyStyle\">\n    <div class=\"ant-modal-confirm-body-wrapper\">\n      <div class=\"ant-modal-confirm-body\">\n        <i nz-icon [type]=\"nzIconType\"></i>\n        <span class=\"ant-modal-confirm-title\">\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"isTemplateRef(nzTitle)\" [ngTemplateOutlet]=\"nzTitle\"></ng-container>\n            <ng-container *ngSwitchCase=\"isNonEmptyString(nzTitle)\"><span [innerHTML]=\"nzTitle\"></span></ng-container>\n          </ng-container>\n        </span>\n        <div class=\"ant-modal-confirm-content\">\n          <ng-container #bodyContainer>\n            <ng-container *ngIf=\"!isComponent(nzContent)\" [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(nzContent)\" [ngTemplateOutlet]=\"nzContent\"></ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(nzContent)\"><div [innerHTML]=\"nzContent\"></div></ng-container>\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"ant-modal-confirm-btns\">\n        <button nz-button *ngIf=\"nzCancelText!==null\" (click)=\"onClickOkCancel('cancel')\" [nzLoading]=\"nzCancelLoading\">\n          {{ cancelText }}\n        </button>\n        <button *ngIf=\"nzOkText!==null\" #autoFocusButtonOk nz-button [nzType]=\"nzOkType\" (click)=\"onClickOkCancel('ok')\" [nzLoading]=\"nzOkLoading\">\n          {{ okText }}\n        </button>\n      </div>\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\n  </div>\n</ng-template>\n<!-- /[Predefined] Confirm Modal Content -->\n"
            }] }
];
/** @nocollapse */
NzModalComponent.ctorParameters = () => [
    { type: Overlay },
    { type: NzI18nService },
    { type: Renderer2 },
    { type: ComponentFactoryResolver },
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: NzMeasureScrollbarService },
    { type: NzModalControlService },
    { type: FocusTrapFactory },
    { type: undefined, decorators: [{ type: Inject, args: [NZ_MODAL_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
NzModalComponent.propDecorators = {
    nzModalType: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzComponentParams: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzGetContainer: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzVisibleChange: [{ type: Output }],
    nzZIndex: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzWrapClassName: [{ type: Input }],
    nzClassName: [{ type: Input }],
    nzStyle: [{ type: Input }],
    nzIconType: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzClosable: [{ type: Input }],
    nzMask: [{ type: Input }],
    nzMaskClosable: [{ type: Input }],
    nzMaskStyle: [{ type: Input }],
    nzBodyStyle: [{ type: Input }],
    nzAfterOpen: [{ type: Output }],
    nzAfterClose: [{ type: Output }],
    nzOkText: [{ type: Input }],
    nzOkType: [{ type: Input }],
    nzOkLoading: [{ type: Input }],
    nzOnOk: [{ type: Input }, { type: Output }],
    autoFocusButtonOk: [{ type: ViewChild, args: ['autoFocusButtonOk', { read: ElementRef },] }],
    nzCancelText: [{ type: Input }],
    nzCancelLoading: [{ type: Input }],
    nzOnCancel: [{ type: Input }, { type: Output }],
    modalContainer: [{ type: ViewChild, args: ['modalContainer',] }],
    bodyContainer: [{ type: ViewChild, args: ['bodyContainer', { read: ViewContainerRef },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzVisible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzClosable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMask", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzMaskClosable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzOkLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelLoading", void 0);
function NzModalComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzModalComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzModalComponent.prototype.previouslyFocusedElement;
    /** @type {?} */
    NzModalComponent.prototype.focusTrap;
    /** @type {?} */
    NzModalComponent.prototype.locale;
    /** @type {?} */
    NzModalComponent.prototype.nzModalType;
    /** @type {?} */
    NzModalComponent.prototype.nzContent;
    /** @type {?} */
    NzModalComponent.prototype.nzComponentParams;
    /** @type {?} */
    NzModalComponent.prototype.nzFooter;
    /** @type {?} */
    NzModalComponent.prototype.nzGetContainer;
    /** @type {?} */
    NzModalComponent.prototype.nzVisible;
    /** @type {?} */
    NzModalComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzModalComponent.prototype.nzZIndex;
    /** @type {?} */
    NzModalComponent.prototype.nzWidth;
    /** @type {?} */
    NzModalComponent.prototype.nzWrapClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzClassName;
    /** @type {?} */
    NzModalComponent.prototype.nzStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzIconType;
    /** @type {?} */
    NzModalComponent.prototype.nzTitle;
    /** @type {?} */
    NzModalComponent.prototype.nzClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzMask;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskClosable;
    /** @type {?} */
    NzModalComponent.prototype.nzMaskStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterOpen;
    /** @type {?} */
    NzModalComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzModalComponent.prototype.nzOkText;
    /** @type {?} */
    NzModalComponent.prototype.nzOkType;
    /** @type {?} */
    NzModalComponent.prototype.nzOkLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzOnOk;
    /** @type {?} */
    NzModalComponent.prototype.autoFocusButtonOk;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelText;
    /** @type {?} */
    NzModalComponent.prototype.nzCancelLoading;
    /** @type {?} */
    NzModalComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzModalComponent.prototype.modalContainer;
    /** @type {?} */
    NzModalComponent.prototype.bodyContainer;
    /** @type {?} */
    NzModalComponent.prototype.maskAnimationClassMap;
    /** @type {?} */
    NzModalComponent.prototype.modalAnimationClassMap;
    /** @type {?} */
    NzModalComponent.prototype.transformOrigin;
    /** @type {?} */
    NzModalComponent.prototype.contentComponentRef;
    /** @type {?} */
    NzModalComponent.prototype.animationState;
    /** @type {?} */
    NzModalComponent.prototype.container;
    /** @type {?} */
    NzModalComponent.prototype.overlay;
    /** @type {?} */
    NzModalComponent.prototype.i18n;
    /** @type {?} */
    NzModalComponent.prototype.renderer;
    /** @type {?} */
    NzModalComponent.prototype.cfr;
    /** @type {?} */
    NzModalComponent.prototype.elementRef;
    /** @type {?} */
    NzModalComponent.prototype.viewContainer;
    /** @type {?} */
    NzModalComponent.prototype.nzMeasureScrollbarService;
    /** @type {?} */
    NzModalComponent.prototype.modalControl;
    /** @type {?} */
    NzModalComponent.prototype.focusTrapFactory;
    /** @type {?} */
    NzModalComponent.prototype.config;
    /** @type {?} */
    NzModalComponent.prototype.document;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof (/** @type {?} */ (obj)).then === 'function' && typeof (/** @type {?} */ (obj)).catch === 'function';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbIm1vZGFsL256LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCxTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxXQUFXLEVBQ1gsSUFBSSxFQUNKLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFDckMsT0FBTyxFQUFpQixlQUFlLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBR2xELGFBQWEsc0JBQXNCLEdBQUcsR0FBRyxDQUFDOzs7O0FBSTFDO0FBTUEsTUFBTSx1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QU07dUJBRU4sS0FBSztzQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBRUwsTUFBTTsyQkFDTixNQUFNO3VCQVVOLEtBQUs7dUJBTUwsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUssWUFBSSxNQUFNO2dDQUNmLFNBQVMsU0FBQyxtQkFBbUIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7MkJBQ25ELEtBQUs7OEJBTUwsS0FBSzt5QkFDTCxLQUFLLFlBQUksTUFBTTs2QkFDZixTQUFTLFNBQUMsZ0JBQWdCOzRCQUMxQixTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7SUE5QzVDLFlBQVksRUFBRTs7OztJQVVkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQXNCZCxZQUFZLEVBQUU7Ozs7SUFTZCxZQUFZLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc1gxQixtQkFBbUIsR0FBYztJQUMvQixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssVUFBVSxDQUFDLElBQUksT0FBTyxtQkFBQyxHQUFrQixFQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxPQUFPLG1CQUFDLEdBQWtCLEVBQUMsQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDO0NBQy9LIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5pbXBvcnQgTW9kYWxVdGlsIGZyb20gJy4vbW9kYWwtdXRpbCc7XG5pbXBvcnQgeyBOek1vZGFsQ29uZmlnLCBOWl9NT0RBTF9DT05GSUcsIE5aX01PREFMX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9uei1tb2RhbC1jb25maWcnO1xuaW1wb3J0IHsgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9uei1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcbmltcG9ydCB7IE1vZGFsQnV0dG9uT3B0aW9ucywgTW9kYWxPcHRpb25zLCBNb2RhbFR5cGUsIE9uQ2xpY2tDYWxsYmFjayB9IGZyb20gJy4vbnotbW9kYWwudHlwZSc7XG5cbmV4cG9ydCBjb25zdCBNT0RBTF9BTklNQVRFX0RVUkFUSU9OID0gMjAwOyAvLyBEdXJhdGlvbiB3aGVuIHBlcmZvcm0gYW5pbWF0aW9ucyAobXMpXG5cbnR5cGUgQW5pbWF0aW9uU3RhdGUgPSAnZW50ZXInIHwgJ2xlYXZlJyB8IG51bGw7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGNsYXNzIE56TW9kYWxDb21wb25lbnQ8VCA9IGFueSwgUiA9IGFueT4gZXh0ZW5kcyBOek1vZGFsUmVmPFQsIFI+IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgTW9kYWxPcHRpb25zPFQ+IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSBuek1vZGFsVHlwZTogTW9kYWxUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IFR5cGU8VD47IC8vIFtTVEFUSUNdIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgdXNlIDxuZy1jb250ZW50PlxuICBASW5wdXQoKSBuekNvbXBvbmVudFBhcmFtczogVDsgLy8gW1NUQVRJQ10gT05MWSBhdmFsaWFibGUgd2hlbiBuekNvbnRlbnQgaXMgYSBjb21wb25lbnRcbiAgQElucHV0KCkgbnpGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj47IC8vIFtTVEFUSUNdIERlZmF1bHQgTW9kYWwgT05MWVxuICBASW5wdXQoKSBuekdldENvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmIHwgKCgpID0+IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZikgPSAoKSA9PiB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7IC8vIFtTVEFUSUNdXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIG56WkluZGV4OiBudW1iZXIgPSAxMDAwO1xuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSA1MjA7XG4gIEBJbnB1dCgpIG56V3JhcENsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuelN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIG56SWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek1hc2s6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNYXNrQ2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBuek1hc2tTdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuekJvZHlTdHlsZTogb2JqZWN0O1xuXG4gIEBPdXRwdXQoKSBuekFmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIG9wZW4odmlzaWJsZSkgYWZ0ZXIgYW5pbWF0aW9uc1xuICBAT3V0cHV0KCkgbnpBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgbGVhdmUtYW5pbWF0aW9uIG92ZXJcbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHsgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgbnpBZnRlck9wZW5cbiAgICByZXR1cm4gdGhpcy5uekFmdGVyT3Blbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4geyAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBuekFmdGVyQ2xvc2VcbiAgICByZXR1cm4gdGhpcy5uekFmdGVyQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvLyAtLS0gUHJlZGVmaW5lZCBPSyAmIENhbmNlbCBidXR0b25zXG4gIEBJbnB1dCgpIG56T2tUZXh0OiBzdHJpbmc7XG5cbiAgZ2V0IG9rVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm56T2tUZXh0IHx8IHRoaXMubG9jYWxlLm9rVGV4dDtcbiAgfVxuXG4gIEBJbnB1dCgpIG56T2tUeXBlID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPa0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQE91dHB1dCgpIG56T25PazogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAVmlld0NoaWxkKCdhdXRvRm9jdXNCdXR0b25PaycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBhdXRvRm9jdXNCdXR0b25PazogRWxlbWVudFJlZjsgLy8gT25seSBhaW0gdG8gZm9jdXMgdGhlIG9rIGJ1dHRvbiB0aGF0IG5lZWRzIHRvIGJlIGF1dG8gZm9jdXNlZFxuICBASW5wdXQoKSBuekNhbmNlbFRleHQ6IHN0cmluZztcblxuICBnZXQgY2FuY2VsVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm56Q2FuY2VsVGV4dCB8fCB0aGlzLmxvY2FsZS5jYW5jZWxUZXh0O1xuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2FuY2VsTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAT3V0cHV0KCkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAVmlld0NoaWxkKCdtb2RhbENvbnRhaW5lcicpIG1vZGFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdib2R5Q29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGJvZHlDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMubnpWaXNpYmxlICYmICF0aGlzLmFuaW1hdGlvblN0YXRlO1xuICB9IC8vIEluZGljYXRlIHdoZXRoZXIgdGhpcyBkaWFsb2cgc2hvdWxkIGhpZGRlblxuICBtYXNrQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdDtcbiAgbW9kYWxBbmltYXRpb25DbGFzc01hcDogb2JqZWN0O1xuICB0cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnOyAvLyBUaGUgb3JpZ2luIHBvaW50IHRoYXQgYW5pbWF0aW9uIGJhc2VkIG9uXG5cbiAgcHJpdmF0ZSBjb250ZW50Q29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD47IC8vIEhhbmRsZSB0aGUgcmVmZXJlbmNlIHdoZW4gdXNpbmcgbnpDb250ZW50IGFzIENvbXBvbmVudFxuICBwcml2YXRlIGFuaW1hdGlvblN0YXRlOiBBbmltYXRpb25TdGF0ZTsgLy8gQ3VycmVudCBhbmltYXRpb24gc3RhdGVcbiAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBuek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlOiBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sOiBOek1vZGFsQ29udHJvbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxuICAgIEBJbmplY3QoTlpfTU9EQUxfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogTnpNb2RhbENvbmZpZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMubWVyZ2VEZWZhdWx0Q29uZmlnKHRoaXMuY29uZmlnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnTW9kYWwnKSk7XG5cbiAgICBpZiAodGhpcy5pc0NvbXBvbmVudCh0aGlzLm56Q29udGVudCkpIHtcbiAgICAgIHRoaXMuY3JlYXRlRHluYW1pY0NvbXBvbmVudCh0aGlzLm56Q29udGVudCBhcyBUeXBlPFQ+KTsgLy8gQ3JlYXRlIGNvbXBvbmVudCBhbG9uZyB3aXRob3V0IFZpZXdcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc01vZGFsQnV0dG9ucyh0aGlzLm56Rm9vdGVyKSkgeyAvLyBTZXR1cCBkZWZhdWx0IGJ1dHRvbiBvcHRpb25zXG4gICAgICB0aGlzLm56Rm9vdGVyID0gdGhpcy5mb3JtYXRNb2RhbEJ1dHRvbnModGhpcy5uekZvb3RlciBhcyBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTtcbiAgICB9XG5cbiAgICAvLyBQbGFjZSB0aGUgbW9kYWwgZG9tIHRvIGVsc2V3aGVyZVxuICAgIHRoaXMuY29udGFpbmVyID0gdHlwZW9mIHRoaXMubnpHZXRDb250YWluZXIgPT09ICdmdW5jdGlvbicgPyB0aGlzLm56R2V0Q29udGFpbmVyKCkgOiB0aGlzLm56R2V0Q29udGFpbmVyO1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHsgLy8gTk9URTogb25seSBhdHRhY2ggdGhlIGRvbSB0byBvdmVybGF5LCB0aGUgdmlldyBjb250YWluZXIgaXMgbm90IGNoYW5nZWQgYWN0dWFsbHlcbiAgICAgIHRoaXMuY29udGFpbmVyLm92ZXJsYXlFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlciBtb2RhbCB3aGVuIGFmdGVyT3Blbi9hZnRlckNsb3NlIGlzIHN0YWJsZVxuICAgIHRoaXMubW9kYWxDb250cm9sLnJlZ2lzdGVyTW9kYWwodGhpcyk7XG4gIH1cblxuICAvLyBbTk9URV0gTk9UIGF2YWlsYWJsZSB3aGVuIHVzaW5nIGJ5IHNlcnZpY2UhXG4gIC8vIEJlY2F1c2UgbmdPbkNoYW5nZXMgbmV2ZXIgYmUgY2FsbGVkIHdoZW4gdXNpbmcgYnkgc2VydmljZSxcbiAgLy8gaGVyZSB3ZSBjYW4ndCBzdXBwb3J0IFwibnpDb250ZW50XCIoQ29tcG9uZW50KSBldGMuIGFzIGlucHV0cyB0aGF0IGluaXRpYWxpemVkIGR5bmFtaWNhbGx5LlxuICAvLyBCVVQ6IFVzZXIgYWxzbyBjYW4gY2hhbmdlIFwibnpDb250ZW50XCIgZHluYW1pY2FsbHkgdG8gdHJpZ2dlciBVSSBjaGFuZ2VzIChwcm92aWRlZCB5b3UgZG9uJ3QgdXNlIFxiQ29tcG9uZW50IHRoYXQgbmVlZHMgaW5pdGlhbGl6YXRpb25zKVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpWaXNpYmxlKSB7XG4gICAgICB0aGlzLmhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh0aGlzLm56VmlzaWJsZSwgIWNoYW5nZXMubnpWaXNpYmxlLmZpcnN0Q2hhbmdlKTsgLy8gRG8gbm90IHRyaWdnZXIgYW5pbWF0aW9uIHdoaWxlIGluaXRpYWxpemluZ1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBJZiB1c2luZyBDb21wb25lbnQsIGl0IGlzIHRoZSB0aW1lIHRvIGF0dGFjaCBWaWV3IHdoaWxlIGJvZHlDb250YWluZXIgaXMgcmVhZHlcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICB0aGlzLmJvZHlDb250YWluZXIuaW5zZXJ0KHRoaXMuY29udGVudENvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2spIHtcbiAgICAgICh0aGlzLmF1dG9Gb2N1c0J1dHRvbk9rLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gQ2xvc2Ugc2VsZiBiZWZvcmUgZGVzdHJ1Y3RpbmdcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKGZhbHNlKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxDb250cm9sLmRlcmVnaXN0ZXJNb2RhbCh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5kaXNwb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodHJ1ZSk7XG4gIH1cblxuICBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSwgcmVzdWx0KTtcbiAgfVxuXG4gIGRlc3Ryb3kocmVzdWx0PzogUik6IHZvaWQgeyAvLyBEZXN0cm95IGVxdWFscyBDbG9zZVxuICAgIHRoaXMuY2xvc2UocmVzdWx0KTtcbiAgfVxuXG4gIHRyaWdnZXJPaygpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnb2snKTtcbiAgfVxuXG4gIHRyaWdnZXJDYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogTnpNb2RhbENvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudENvbXBvbmVudFJlZjtcbiAgfVxuXG4gIGdldENvbnRlbnRDb21wb25lbnQoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudENvbXBvbmVudFJlZiAmJiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gIH1cblxuICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgb25DbGlja01hc2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5uek1hc2sgJiZcbiAgICAgIHRoaXMubnpNYXNrQ2xvc2FibGUgJiZcbiAgICAgICgkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoJ2FudC1tb2RhbC13cmFwJykgJiZcbiAgICAgIHRoaXMubnpWaXNpYmxlXG4gICAgKSB7XG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XG4gICAgfVxuICB9XG5cbiAgaXNNb2RhbFR5cGUodHlwZTogTW9kYWxUeXBlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNb2RhbFR5cGUgPT09IHR5cGU7XG4gIH1cblxuICBwdWJsaWMgb25DbGlja0Nsb3NlQnRuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56VmlzaWJsZSkge1xuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrT2tDYW5jZWwodHlwZTogJ29rJyB8ICdjYW5jZWwnKTogdm9pZCB7XG4gICAgY29uc3QgdHJpZ2dlciA9IHsgJ29rJzogdGhpcy5uek9uT2ssICdjYW5jZWwnOiB0aGlzLm56T25DYW5jZWwgfVsgdHlwZSBdO1xuICAgIGNvbnN0IGxvYWRpbmdLZXkgPSB7ICdvayc6ICduek9rTG9hZGluZycsICdjYW5jZWwnOiAnbnpDYW5jZWxMb2FkaW5nJyB9WyB0eXBlIF07XG4gICAgaWYgKHRyaWdnZXIgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICAgIHRyaWdnZXIuZW1pdCh0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHJpZ2dlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdHJpZ2dlcih0aGlzLmdldENvbnRlbnRDb21wb25lbnQoKSk7XG4gICAgICBjb25zdCBjYXNlQ2xvc2UgPSAoZG9DbG9zZTogYm9vbGVhbiB8IHZvaWQgfCB7fSkgPT4gKGRvQ2xvc2UgIT09IGZhbHNlKSAmJiB0aGlzLmNsb3NlKGRvQ2xvc2UgYXMgUik7IC8vIFVzZXJzIGNhbiByZXR1cm4gXCJmYWxzZVwiIHRvIHByZXZlbnQgY2xvc2luZyBieSBkZWZhdWx0XG4gICAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgICAgdGhpc1sgbG9hZGluZ0tleSBdID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaGFuZGxlVGhlbiA9IChkb0Nsb3NlKSA9PiB7XG4gICAgICAgICAgdGhpc1sgbG9hZGluZ0tleSBdID0gZmFsc2U7XG4gICAgICAgICAgY2FzZUNsb3NlKGRvQ2xvc2UpO1xuICAgICAgICB9O1xuICAgICAgICAocmVzdWx0IGFzIFByb21pc2U8dm9pZD4pLnRoZW4oaGFuZGxlVGhlbikuY2F0Y2goaGFuZGxlVGhlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXNlQ2xvc2UocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XG4gIH1cblxuICBwdWJsaWMgaXNUZW1wbGF0ZVJlZih2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIHB1YmxpYyBpc0NvbXBvbmVudCh2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUeXBlO1xuICB9XG5cbiAgcHVibGljIGlzTW9kYWxCdXR0b25zKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLy8gRG8gcmVzdCB0aGluZ3Mgd2hlbiB2aXNpYmxlIHN0YXRlIGNoYW5nZWRcbiAgcHJpdmF0ZSBoYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodmlzaWJsZTogYm9vbGVhbiwgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZSwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHZpc2libGUpIHsgLy8gSGlkZSBzY3JvbGxiYXIgYXQgdGhlIGZpcnN0IHRpbWUgd2hlbiBzaG93biB1cFxuICAgICAgdGhpcy5jaGFuZ2VCb2R5T3ZlcmZsb3coMSk7XG4gICAgICB0aGlzLnNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTtcbiAgICAgIHRoaXMudHJhcEZvY3VzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2VcbiAgICAucmVzb2x2ZShhbmltYXRpb24gJiYgdGhpcy5hbmltYXRlVG8odmlzaWJsZSkpXG4gICAgLnRoZW4oKCkgPT4geyAvLyBFbWl0IG9wZW4vY2xvc2UgZXZlbnQgYWZ0ZXIgYW5pbWF0aW9ucyBvdmVyXG4gICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICB0aGlzLm56QWZ0ZXJPcGVuLmVtaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpBZnRlckNsb3NlLmVtaXQoY2xvc2VSZXN1bHQpO1xuICAgICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xuICAgICAgICB0aGlzLmNoYW5nZUJvZHlPdmVyZmxvdygpOyAvLyBTaG93L2hpZGUgc2Nyb2xsYmFyIHdoZW4gYW5pbWF0aW9uIGlzIG92ZXJcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAudGhlbigoKSA9PiB0aGlzLmNoYW5nZUJvZHlPdmVyZmxvdygpKTtcbiAgfVxuXG4gIC8vIExvb2t1cCBhIGJ1dHRvbidzIHByb3BlcnR5LCBpZiB0aGUgcHJvcCBpcyBhIGZ1bmN0aW9uLCBjYWxsICYgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCwgb3RoZXJ3aXNlLCByZXR1cm4gaXRzZWxmLlxuICBwdWJsaWMgZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKG9wdGlvbnM6IE1vZGFsQnV0dG9uT3B0aW9uczxUPiwgcHJvcDogc3RyaW5nKToge30ge1xuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1sgcHJvcCBdO1xuICAgIGNvbnN0IGFyZ3MgPSBbXTtcbiAgICBpZiAodGhpcy5jb250ZW50Q29tcG9uZW50UmVmKSB7XG4gICAgICBhcmdzLnB1c2godGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KG9wdGlvbnMsIGFyZ3MpIDogdmFsdWU7XG4gIH1cblxuICAvLyBPbiBuekZvb3RlcidzIG1vZGFsIGJ1dHRvbiBjbGlja1xuICBwdWJsaWMgb25CdXR0b25DbGljayhidXR0b246IE1vZGFsQnV0dG9uT3B0aW9uczxUPik6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ29uQ2xpY2snKTsgLy8gQ2FsbCBvbkNsaWNrIGRpcmVjdGx5XG4gICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICBidXR0b24ubG9hZGluZyA9IHRydWU7XG4gICAgICAocmVzdWx0IGFzIFByb21pc2U8e30+KS50aGVuKCgpID0+IGJ1dHRvbi5sb2FkaW5nID0gZmFsc2UpLmNhdGNoKCgpID0+IGJ1dHRvbi5sb2FkaW5nID0gZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoYW5nZSBuelZpc2libGUgZnJvbSBpbnNpZGVcbiAgcHJpdmF0ZSBjaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh2aXNpYmxlOiBib29sZWFuLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5uelZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIC8vIENoYW5nZSBuelZpc2libGUgdmFsdWUgaW1tZWRpYXRlbHlcbiAgICAgIHRoaXMubnpWaXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodmlzaWJsZSwgdHJ1ZSwgY2xvc2VSZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUFuaW1hdGlvblN0YXRlKHN0YXRlOiBBbmltYXRpb25TdGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSBzdGF0ZTtcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0ge1xuICAgICAgICBbIGBmYWRlLSR7c3RhdGV9YCBdICAgICAgIDogdHJ1ZSxcbiAgICAgICAgWyBgZmFkZS0ke3N0YXRlfS1hY3RpdmVgIF06IHRydWVcbiAgICAgIH07XG4gICAgICB0aGlzLm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XG4gICAgICAgIFsgYHpvb20tJHtzdGF0ZX1gIF0gICAgICAgOiB0cnVlLFxuICAgICAgICBbIGB6b29tLSR7c3RhdGV9LWFjdGl2ZWAgXTogdHJ1ZVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXNrQW5pbWF0aW9uQ2xhc3NNYXAgPSB0aGlzLm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXAgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYW5pbWF0ZVRvKGlzVmlzaWJsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChpc1Zpc2libGUpIHsgLy8gRmlndXJlIG91dCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvbiB3aGVuIHNob3dzIHVwXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpKTsgLy8gW05PVEVdIFVzaW5nIHRpbWVvdXQgZHVlIHRvIHRoZSBkb2N1bWVudC5jbGljayBldmVudCBpcyBmaXJlZCBsYXRlciB0aGFuIHZpc2libGUgY2hhbmdlLCBzbyBpZiBub3QgcG9zdHBvbmVkIHRvIG5leHQgZXZlbnQtbG9vcCwgd2UgY2FuJ3QgZ2V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShpc1Zpc2libGUgPyAnZW50ZXInIDogJ2xlYXZlJyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7IC8vIFJldHVybiB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXG4gICAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblN0YXRlKG51bGwpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIE1PREFMX0FOSU1BVEVfRFVSQVRJT04pKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0TW9kYWxCdXR0b25zKGJ1dHRvbnM6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+IHtcbiAgICByZXR1cm4gYnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4ge1xuICAgICAgY29uc3QgbWl4ZWRCdXR0b24gPSB7XG4gICAgICAgIC4uLntcbiAgICAgICAgICB0eXBlICAgICAgIDogJ2RlZmF1bHQnLFxuICAgICAgICAgIHNpemUgICAgICAgOiAnZGVmYXVsdCcsXG4gICAgICAgICAgYXV0b0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgc2hvdyAgICAgICA6IHRydWUsXG4gICAgICAgICAgbG9hZGluZyAgICA6IGZhbHNlLFxuICAgICAgICAgIGRpc2FibGVkICAgOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAuLi5idXR0b25cbiAgICAgIH07XG5cbiAgICAgIC8vIGlmIChtaXhlZEJ1dHRvbi5hdXRvTG9hZGluZykgeyBtaXhlZEJ1dHRvbi5sb2FkaW5nID0gZmFsc2U7IH0gLy8gRm9yY2UgbG9hZGluZyB0byBmYWxzZSB3aGVuIGF1dG9Mb2FkaW5nPXRydWVcblxuICAgICAgcmV0dXJuIG1peGVkQnV0dG9uO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGNvbXBvbmVudCBkeW5hbWljYWxseSBidXQgbm90IGF0dGFjaCB0byBhbnkgVmlldyAodGhpcyBhY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIGJvZHlDb250YWluZXIgaXMgcmVhZHkpXG4gICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGNsYXNzXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUR5bmFtaWNDb21wb25lbnQoY29tcG9uZW50OiBUeXBlPFQ+KTogdm9pZCB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XG4gICAgY29uc3QgY2hpbGRJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBOek1vZGFsUmVmLCB1c2VWYWx1ZTogdGhpcyB9IF0sXG4gICAgICBwYXJlbnQgICA6IHRoaXMudmlld0NvbnRhaW5lci5wYXJlbnRJbmplY3RvclxuICAgIH0pO1xuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGNoaWxkSW5qZWN0b3IpO1xuICAgIGlmICh0aGlzLm56Q29tcG9uZW50UGFyYW1zKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZSwgdGhpcy5uekNvbXBvbmVudFBhcmFtcyk7XG4gICAgfVxuICAgIC8vIERvIHRoZSBmaXJzdCBjaGFuZ2UgZGV0ZWN0aW9uIGltbWVkaWF0ZWx5IChvciB3ZSBkbyBkZXRlY3Rpb24gYXQgbmdBZnRlclZpZXdJbml0LCBtdWx0aS1jaGFuZ2VzIGVycm9yIHdpbGwgYmUgdGhyb3duKVxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdHJhbnNmb3JtLW9yaWdpbiB0byB0aGUgbGFzdCBjbGljayBwb3NpdGlvbiBvbiBkb2N1bWVudFxuICBwcml2YXRlIHVwZGF0ZVRyYW5zZm9ybU9yaWdpbigpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSB0aGlzLm1vZGFsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgbGFzdFBvc2l0aW9uID0gTW9kYWxVdGlsLmdldExhc3RDbGlja1Bvc2l0aW9uKCk7XG4gICAgaWYgKGxhc3RQb3NpdGlvbikge1xuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSBgJHtsYXN0UG9zaXRpb24ueCAtIG1vZGFsRWxlbWVudC5vZmZzZXRMZWZ0fXB4ICR7bGFzdFBvc2l0aW9uLnkgLSBtb2RhbEVsZW1lbnQub2Zmc2V0VG9wfXB4IDBweGA7XG4gICAgfVxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnO1xuICAgIC8vIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlIGNhcmUgb2YgdGhlIGJvZHkncyBvdmVyZmxvdyB0byBkZWNpZGUgdGhlIGV4aXN0ZW5zZSBvZiBzY3JvbGxiYXJcbiAgICogQHBhcmFtIHBsdXNOdW0gVGhlIG51bWJlciB0aGF0IHRoZSBvcGVuTW9kYWxzLmxlbmd0aCB3aWxsIGluY3JlYXNlIHNvb25cbiAgICovXG4gIHByaXZhdGUgY2hhbmdlQm9keU92ZXJmbG93KHBsdXNOdW06IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuYXV0b0JvZHlQYWRkaW5nKSB7XG4gICAgICBjb25zdCBvcGVuTW9kYWxzID0gdGhpcy5tb2RhbENvbnRyb2wub3Blbk1vZGFscztcblxuICAgICAgaWYgKG9wZW5Nb2RhbHMubGVuZ3RoICsgcGx1c051bSA+IDApIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzQm9keVNjcm9sbEJhcigpKSB7IC8vIEFkZGluZyBwYWRkaW5nLXJpZ2h0IG9ubHkgd2hlbiBib2R5J3Mgc2Nyb2xsYmFyIGlzIGFibGUgdG8gc2hvd24gdXBcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnLCBgJHt0aGlzLm56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2Uuc2Nyb2xsQmFyV2lkdGh9cHhgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBOT1RFOiB3ZSBuZWVkIHRvIGFsd2F5cyByZW1vdmUgdGhlIHBhZGRpbmcgZHVlIHRvIHRoZSBzY3JvbGwgYmFyIG1heSBiZSBkaXNhcHBlYXIgYnkgd2luZG93IHJlc2l6aW5nIGJlZm9yZSBtb2RhbCBjbG9zZWRcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdwYWRkaW5nLXJpZ2h0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciB0aGUgYm9keSBlbGVtZW50IGlzIGFibGUgdG8gaGFzIHRoZSBzY3JvbGwgYmFyIChpZiB0aGUgYm9keSBjb250ZW50IGhlaWdodCBleGNlZWRzIHRoZSB3aW5kb3cncyBoZWlnaHQpXG4gICAqIEV4Y2VwdGlvbmFsIENhc2VzOiB1c2VycyBjYW4gc2hvdyB0aGUgc2Nyb2xsIGJhciBieSB0aGVpciBvd24gcGVybWFuZW50bHkgKGVnLiBvdmVyZmxvdzogc2Nyb2xsKVxuICAgKi9cbiAgcHJpdmF0ZSBoYXNCb2R5U2Nyb2xsQmFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBtZXJnZURlZmF1bHRDb25maWcoY29uZmlnOiBOek1vZGFsQ29uZmlnKTogTnpNb2RhbENvbmZpZyB7XG4gICAgcmV0dXJuIHsgLi4uTlpfTU9EQUxfREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRvY3VtZW50KSB7XG4gICAgICB0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYXBGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICB0aGlzLmZvY3VzVHJhcCA9IHRoaXMuZm9jdXNUcmFwRmFjdG9yeS5jcmVhdGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuXG4vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iajoge30gfCB2b2lkKTogYm9vbGVhbiB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIChvYmogYXMgUHJvbWlzZTx7fT4pLnRoZW4gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIChvYmogYXMgUHJvbWlzZTx7fT4pLmNhdGNoID09PSAnZnVuY3Rpb24nO1xufVxuIl19