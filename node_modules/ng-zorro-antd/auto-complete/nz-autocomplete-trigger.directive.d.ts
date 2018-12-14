import { Overlay } from '@angular/cdk/overlay';
import { ElementRef, ExistingProvider, OnDestroy, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
export declare const NZ_AUTOCOMPLETE_VALUE_ACCESSOR: ExistingProvider;
export declare function getNzAutocompleteMissingPanelError(): Error;
export declare class NzAutocompleteTriggerDirective implements ControlValueAccessor, OnDestroy {
    private _element;
    private _overlay;
    private _viewContainerRef;
    private _document;
    private overlayRef;
    private portal;
    private positionStrategy;
    private previousValue;
    private selectionChangeSubscription;
    private optionsChangeSubscription;
    private overlayBackdropClickSubscription;
    private overlayPositionChangeSubscription;
    _onChange: (value: {}) => void;
    _onTouched: () => void;
    panelOpen: boolean;
    /** 用于绑定 nzAutocomplete 组件 */
    nzAutocomplete: NzAutocompleteComponent;
    /**
     * 当前被激活的 Option
     */
    readonly activeOption: NzAutocompleteOptionComponent;
    constructor(_element: ElementRef, _overlay: Overlay, _viewContainerRef: ViewContainerRef, _document: any);
    openPanel(): void;
    closePanel(): void;
    /**
     * 订阅数据源改变事件
     */
    private subscribeOptionsChange;
    /**
     * 订阅 option 选择事件
     * 并设置值
     */
    private subscribeSelectionChange;
    /**
     * 订阅组件外部的单击事件
     * 并关闭弹窗
     */
    private subscribeOverlayBackdropClick;
    /**
     * 订阅 Overlay 位置改变事件
     * 并重新设置动画方向
     */
    private subscribeOverlayPositionChange;
    private attachOverlay;
    private destroyPanel;
    private getOverlayConfig;
    private getConnectedElement;
    private getHostWidth;
    private getOverlayPosition;
    private resetActiveItem;
    handleKeydown(event: KeyboardEvent): void;
    private setValueAndClose;
    private setTriggerValue;
    private doBackfill;
    handleInput(event: KeyboardEvent): void;
    handleFocus(): void;
    handleBlur(): void;
    private canOpen;
    writeValue(value: any): void;
    registerOnChange(fn: (value: {}) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnDestroy(): void;
}
