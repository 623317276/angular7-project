import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { AfterViewInit, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzMeasureScrollbarService } from '../core/services/nz-measure-scrollbar.service';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzModalConfig } from './nz-modal-config';
import { NzModalControlService } from './nz-modal-control.service';
import { NzModalRef } from './nz-modal-ref.class';
import { ModalButtonOptions, ModalOptions, ModalType, OnClickCallback } from './nz-modal.type';
export declare const MODAL_ANIMATE_DURATION = 200;
export declare class NzModalComponent<T = any, R = any> extends NzModalRef<T, R> implements OnInit, OnChanges, AfterViewInit, OnDestroy, ModalOptions<T> {
    private overlay;
    private i18n;
    private renderer;
    private cfr;
    private elementRef;
    private viewContainer;
    private nzMeasureScrollbarService;
    private modalControl;
    private focusTrapFactory;
    private config;
    private document;
    private unsubscribe$;
    private previouslyFocusedElement;
    private focusTrap;
    locale: any;
    nzModalType: ModalType;
    nzContent: string | TemplateRef<{}> | Type<T>;
    nzComponentParams: T;
    nzFooter: string | TemplateRef<{}> | Array<ModalButtonOptions<T>>;
    nzGetContainer: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    nzVisible: boolean;
    nzVisibleChange: EventEmitter<boolean>;
    nzZIndex: number;
    nzWidth: number | string;
    nzWrapClassName: string;
    nzClassName: string;
    nzStyle: object;
    nzIconType: string;
    nzTitle: string | TemplateRef<{}>;
    nzClosable: boolean;
    nzMask: boolean;
    nzMaskClosable: boolean;
    nzMaskStyle: object;
    nzBodyStyle: object;
    nzAfterOpen: EventEmitter<void>;
    nzAfterClose: EventEmitter<R>;
    readonly afterOpen: Observable<void>;
    readonly afterClose: Observable<R>;
    nzOkText: string;
    readonly okText: string;
    nzOkType: string;
    nzOkLoading: boolean;
    nzOnOk: EventEmitter<T> | OnClickCallback<T>;
    autoFocusButtonOk: ElementRef;
    nzCancelText: string;
    readonly cancelText: string;
    nzCancelLoading: boolean;
    nzOnCancel: EventEmitter<T> | OnClickCallback<T>;
    modalContainer: ElementRef;
    bodyContainer: ViewContainerRef;
    readonly hidden: boolean;
    maskAnimationClassMap: object;
    modalAnimationClassMap: object;
    transformOrigin: string;
    private contentComponentRef;
    private animationState;
    private container;
    constructor(overlay: Overlay, i18n: NzI18nService, renderer: Renderer2, cfr: ComponentFactoryResolver, elementRef: ElementRef, viewContainer: ViewContainerRef, nzMeasureScrollbarService: NzMeasureScrollbarService, modalControl: NzModalControlService, focusTrapFactory: FocusTrapFactory, config: NzModalConfig, document: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    open(): void;
    close(result?: R): void;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    getInstance(): NzModalComponent;
    getContentComponentRef(): ComponentRef<T>;
    getContentComponent(): T;
    getElement(): HTMLElement;
    onClickMask($event: MouseEvent): void;
    isModalType(type: ModalType): boolean;
    onClickCloseBtn(): void;
    onClickOkCancel(type: 'ok' | 'cancel'): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    isComponent(value: {}): boolean;
    isModalButtons(value: {}): boolean;
    private handleVisibleStateChange;
    getButtonCallableProp(options: ModalButtonOptions<T>, prop: string): {};
    onButtonClick(button: ModalButtonOptions<T>): void;
    private changeVisibleFromInside;
    private changeAnimationState;
    private animateTo;
    private formatModalButtons;
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    private createDynamicComponent;
    private updateTransformOrigin;
    /**
     * Take care of the body's overflow to decide the existense of scrollbar
     * @param plusNum The number that the openModals.length will increase soon
     */
    private changeBodyOverflow;
    /**
     * Check whether the body element is able to has the scroll bar (if the body content height exceeds the window's height)
     * Exceptional Cases: users can show the scroll bar by their own permanently (eg. overflow: scroll)
     */
    private hasBodyScrollBar;
    private mergeDefaultConfig;
    private savePreviouslyFocusedElement;
    private trapFocus;
    private restoreFocus;
}
