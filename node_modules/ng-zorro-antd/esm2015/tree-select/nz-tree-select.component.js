/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { forwardRef, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Inject, Input, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { selectDropDownAnimation } from '../core/animation/select-dropdown-animations';
import { selectTagAnimation } from '../core/animation/select-tag-animations';
import { InputBoolean } from '../core/util/convert';
import { NzTreeComponent } from '../tree/nz-tree.component';
export class NzTreeSelectComponent {
    /**
     * @param {?} document
     * @param {?} element
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} overlay
     * @param {?} viewContainerRef
     */
    constructor(document, // tslint:disable-line:no-any
    // tslint:disable-line:no-any
    element, renderer, cdr, overlay, viewContainerRef) {
        this.document = document;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nodes = [];
        this.isComposing = false;
        this.isDestroy = true;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.value = [];
        this.nzAllowClear = true;
        this.nzShowExpand = true;
        this.nzDropdownMatchSelectWidth = true;
        this.nzCheckable = false;
        this.nzShowSearch = false;
        this.nzDisabled = false;
        this.nzShowLine = false;
        this.nzAsyncData = false;
        this.nzMultiple = false;
        this.nzDefaultExpandAll = false;
        this.nzOpen = false;
        this.nzSize = 'default';
        this.nzPlaceHolder = '';
        this.nzDefaultExpandedKeys = [];
        this.nzDisplayWith = (node) => node.title;
        this.nzOpenChange = new EventEmitter();
        this.nzCleared = new EventEmitter();
        this.nzRemoved = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzTreeClick = new EventEmitter();
        this.nzTreeCheckBoxChange = new EventEmitter();
        this.onTouched = () => null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzNodes(value) {
        this.nodes = value;
        setTimeout(() => this.updateSelectedNodes(), 0);
    }
    /**
     * @return {?}
     */
    get nzNodes() {
        return this.nodes;
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get searchDisplay() {
        return this.nzOpen ? 'block' : 'none';
    }
    /**
     * @return {?}
     */
    get isMultiple() {
        return this.nzMultiple || this.nzCheckable;
    }
    /**
     * @return {?}
     */
    get selectedValueDisplay() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
        if (!this.nzShowSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.nzOpen) {
                showSelectedValue = !(this.inputValue || this.isComposing);
                if (showSelectedValue) {
                    opacity = 0.4;
                }
            }
            else {
                showSelectedValue = true;
            }
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            opacity: `${opacity}`
        };
    }
    /**
     * @return {?}
     */
    trigger() {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch) {
                this.focusOnInput();
            }
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
            this.updateDropDownClassMap();
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.onTouched();
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.updateCdkConnectedOverlayStatus();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownInput(e) {
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = /** @type {?} */ (e.target);
        if (this.isMultiple &&
            !eventTarget.value &&
            keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                this.removeSelected(this.selectedNodes[this.selectedNodes.length - 1]);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    }
    /**
     * @return {?}
     */
    detachOverlay() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
        }
    }
    /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    removeSelected(node, emit = true, event) {
        node.isSelected = false;
        node.isChecked = false;
        if (this.nzCheckable) {
            this.treeRef.nzTreeService.conduct(node);
            this.treeRef.nzTreeService.setCheckedNodeList(node);
        }
        else {
            this.treeRef.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
        }
        if (emit) {
            this.nzRemoved.emit(node);
        }
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    }
    /**
     * @return {?}
     */
    focusOnInput() {
        setTimeout(() => {
            if (this.inputElement) {
                this.inputElement.nativeElement.focus();
            }
        });
    }
    /**
     * @return {?}
     */
    attachOverlay() {
        this.portal = new TemplatePortal(this.dropdownTemplate, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.attach(this.portal);
        this.cdr.detectChanges();
        this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
    }
    /**
     * @return {?}
     */
    getOverlayConfig() {
        /** @type {?} */
        const overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            [this.nzDropdownMatchSelectWidth ? 'width' : 'minWidth']: overlayWidth,
            hasBackdrop: true
        });
    }
    /**
     * @return {?}
     */
    getOverlayPosition() {
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.treeSelect)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
    /**
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return this.overlayRef.backdropClick()
            .subscribe(() => {
            this.closeDropDown();
        });
    }
    /**
     * @return {?}
     */
    subscribeSelectionChange() {
        return merge(this.nzTreeClick.pipe(tap((event) => {
            /** @type {?} */
            const node = event.node;
            if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                this.treeRef.nzTreeService.conduct(node);
                this.treeRef.nzTreeService.setCheckedNodeList(node);
            }
            if (this.nzCheckable) {
                node.isSelected = false;
            }
        }), filter((event) => {
            return this.nzCheckable ? (!event.node.isDisabled && !event.node.isDisableCheckbox) : !event.node.isDisabled;
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe(() => {
            this.updateSelectedNodes();
            /** @type {?} */
            const value = this.selectedNodes.map(node => node.key);
            this.value = [...value];
            if (this.nzShowSearch) {
                this.inputValue = '';
            }
            if (this.isMultiple) {
                this.onChange(value);
                if (this.nzShowSearch) {
                    this.focusOnInput();
                }
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        });
    }
    /**
     * @return {?}
     */
    updateSelectedNodes() {
        if (this.treeRef) {
            this.selectedNodes = [...(this.nzCheckable ? this.treeRef.getCheckedNodeList() : this.treeRef.getSelectedNodeList())];
        }
    }
    /**
     * @return {?}
     */
    updatePosition() {
        this.overlayRef.updatePosition();
    }
    /**
     * @return {?}
     */
    updateInputWidth() {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    /**
     * @return {?}
     */
    onClearSelection() {
        this.selectedNodes.forEach(node => {
            this.removeSelected(node, false);
        });
        this.nzCleared.emit();
        this.closeDropDown();
    }
    /**
     * @return {?}
     */
    updateDropDownClassMap() {
        if (this.treeRef && !this.treeRef.nzTreeClass['ant-select-tree']) {
            this.treeRef.nzTreeClass = Object.assign({}, this.treeRef.nzTreeClass, { ['ant-select-tree']: true });
        }
        this.dropDownClassMap = {
            ['ant-select-dropdown']: true,
            ['ant-select-tree-dropdown']: true,
            [`ant-select-dropdown--single`]: !this.nzMultiple,
            [`ant-select-dropdown--multiple`]: this.nzMultiple,
            [`ant-select-dropdown-placement-bottomLeft`]: this.dropDownPosition === 'bottom',
            [`ant-select-dropdown-placement-topLeft`]: this.dropDownPosition === 'top'
        };
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        /** @type {?} */
        const overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        if (this.nzDropdownMatchSelectWidth) {
            this.overlayRef.updateSize({ width: overlayWidth });
        }
        else {
            this.overlayRef.updateSize({ minWidth: overlayWidth });
        }
        if (this.nzOpen) {
            this.renderer.removeStyle(this.overlayRef.backdropElement, 'display');
        }
        else {
            this.renderer.setStyle(this.overlayRef.backdropElement, 'display', 'none');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [(/** @type {?} */ (value))];
            }
            this.updateSelectedNodes();
        }
        else {
            this.value = [];
            this.selectedNodes.forEach(node => {
                this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
        Promise.resolve().then(() => {
            this.updateDropDownClassMap();
            this.updateCdkConnectedOverlayStatus();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroy = true;
        this.detachOverlay();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayBackdropClickSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.attachOverlay();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    }
}
NzTreeSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-select',
                animations: [selectDropDownAnimation, selectTagAnimation],
                template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"off\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    (keydown)=\"onKeyDownInput($event)\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzDisabled\">\n</ng-template>\n\n<ng-template #dropdownTemplate>\n  <div [ngClass]=\"dropDownClassMap\" [@selectDropDownAnimation]=\"nzOpen ? dropDownPosition : 'hidden'\"\n    [ngStyle]=\"nzDropdownStyle\">\n    <nz-tree\n      #treeRef\n      [nzData]=\"nzNodes\"\n      [nzMultiple]=\"nzMultiple\"\n      [nzSearchValue]=\"inputValue\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandAll]=\"nzDefaultExpandAll\"\n      [nzExpandedKeys]=\"nzDefaultExpandedKeys\"\n      [nzCheckedKeys]=\"nzCheckable ? value : []\"\n      [nzSelectedKeys]=\"!nzCheckable ? value : []\"\n      (nzExpandChange)=\"nzExpandChange.emit($event)\"\n      (nzClick)=\"nzTreeClick.emit($event)\"\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\n      (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\">\n    </nz-tree>\n  </div>\n</ng-template>\n\n<div\n  #treeSelect\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"!isMultiple\"\n  [class.ant-select-selection--multiple]=\"isMultiple\"\n  tabindex=\"0\">\n  <ng-container *ngIf=\"!isMultiple\">\n    <div class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n\n      <div\n        *ngIf=\"selectedNodes.length === 1\"\n        class=\"ant-select-selection-selected-value\"\n        [attr.title]=\"nzDisplayWith(selectedNodes[0])\"\n        [ngStyle]=\"selectedValueDisplay\">\n        {{ nzDisplayWith(selectedNodes[0]) }}\n      </div>\n\n      <div\n        *ngIf=\"nzShowSearch\"\n        [style.display]=\"searchDisplay\"\n        class=\"ant-select-search ant-select-search--inline\">\n        <div class=\"ant-select-search__field__wrap\">\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"isMultiple\">\n    <ul class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n      <ng-container *ngFor=\"let node of selectedNodes\">\n        <li\n          [@selectTagAnimation]\n          (@selectTagAnimation.done)=\"updatePosition()\"\n          [attr.title]=\"nzDisplayWith(node)\"\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\n          class=\"ant-select-selection__choice\">\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\" (click)=\"removeSelected(node, true, $event)\">\n                 <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\n               </span>\n          <span class=\"ant-select-selection__choice__content\">{{ nzDisplayWith(node) }}</span>\n        </li>\n      </ng-container>\n      <li class=\"ant-select-search ant-select-search--inline\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </li>\n    </ul>\n  </ng-container>\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\" (click)=\"onClearSelection()\">\n    <i nz-icon type=\"close-circle\" class=\"ant-select-clear-icon\" theme=\"fill\"></i>\n  </span>\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\n  </span>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzTreeSelectComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select]': 'true',
                    '[class.ant-select-lg]': 'nzSize==="large"',
                    '[class.ant-select-sm]': 'nzSize==="small"',
                    '[class.ant-select-enabled]': '!nzDisabled',
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-open]': 'nzOpen'
                },
                styles: [`
    .ant-select-dropdown {
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
      overflow: auto;
    }
  `]
            }] }
];
/** @nocollapse */
NzTreeSelectComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Overlay },
    { type: ViewContainerRef }
];
NzTreeSelectComponent.propDecorators = {
    nzAllowClear: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzDropdownMatchSelectWidth: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzDefaultExpandAll: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzDropdownStyle: [{ type: Input }],
    nzDefaultExpandedKeys: [{ type: Input }],
    nzDisplayWith: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    nzCleared: [{ type: Output }],
    nzRemoved: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzTreeClick: [{ type: Output }],
    nzTreeCheckBoxChange: [{ type: Output }],
    nzNodes: [{ type: Input }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    treeSelect: [{ type: ViewChild, args: ['treeSelect',] }],
    dropdownTemplate: [{ type: ViewChild, args: ['dropdownTemplate', { read: TemplateRef },] }],
    treeRef: [{ type: ViewChild, args: ['treeRef',] }],
    trigger: [{ type: HostListener, args: ['click',] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
function NzTreeSelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeSelectComponent.prototype.nodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isComposing;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isDestroy;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputValue;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropDownClassMap;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzTreeSelectComponent.prototype.overlayRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.portal;
    /** @type {?} */
    NzTreeSelectComponent.prototype.positionStrategy;
    /** @type {?} */
    NzTreeSelectComponent.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectedNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.value;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDefaultExpandAll;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpen;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDefaultExpandedKeys;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisplayWith;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCleared;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzRemoved;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeClick;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeCheckBoxChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputElement;
    /** @type {?} */
    NzTreeSelectComponent.prototype.treeSelect;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropdownTemplate;
    /** @type {?} */
    NzTreeSelectComponent.prototype.treeRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeSelectComponent.prototype.document;
    /** @type {?} */
    NzTreeSelectComponent.prototype.element;
    /** @type {?} */
    NzTreeSelectComponent.prototype.renderer;
    /** @type {?} */
    NzTreeSelectComponent.prototype.cdr;
    /** @type {?} */
    NzTreeSelectComponent.prototype.overlay;
    /** @type {?} */
    NzTreeSelectComponent.prototype.viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUtc2VsZWN0L256LXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBRVYsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQ0wsS0FBSyxFQUNMLEVBQUUsSUFBSSxZQUFZLEVBRW5CLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBa0M1RCxNQUFNOzs7Ozs7Ozs7SUEyRkos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RUFBRTs7OztJQUNkLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBQ0tTUEFDRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWYsXG4gIFBvc2l0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuICBtZXJnZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICBTdWJzY3JpcHRpb25cbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgc2VsZWN0RHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9zZWxlY3QtZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3RUYWdBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9zZWxlY3QtdGFnLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuLi90cmVlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi4vdHJlZS9uei10cmVlLW5vZGUnO1xuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi4vdHJlZS9uei10cmVlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LXRyZWUtc2VsZWN0JyxcbiAgYW5pbWF0aW9ucyA6IFsgc2VsZWN0RHJvcERvd25BbmltYXRpb24sIHNlbGVjdFRhZ0FuaW1hdGlvbiBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJlZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgIDogW1xuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZVNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3RdJyAgICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nICAgICAgICAgOiAnbnpTaXplPT09XCJsYXJnZVwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJyAgICAgICAgIDogJ256U2l6ZT09PVwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJyAgICA6ICchbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXScgICA6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ256QWxsb3dDbGVhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJyAgICAgICA6ICduek9wZW4nXG4gIH0sXG4gIHN0eWxlcyAgICAgOiBbIGBcbiAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgbm9kZXMgPSBbXTtcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgaXNEZXN0cm95ID0gdHJ1ZTtcbiAgaW5wdXRWYWx1ZSA9ICcnO1xuICBkcm9wRG93bkNsYXNzTWFwOiB7IFsgY2xhc3NOYW1lOiBzdHJpbmcgXTogYm9vbGVhbiB9O1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDx7fT47XG4gIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgc2VsZWN0ZWROb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXIgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2thYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0xpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRlZmF1bHRFeHBhbmRBbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBuekRyb3Bkb3duU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XG4gIEBJbnB1dCgpIG56RGVmYXVsdEV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbnpEaXNwbGF5V2l0aDogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyA9IChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlO1xuICBAT3V0cHV0KCkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgbnpDbGVhcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbnpSZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xuICBAT3V0cHV0KCkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgbnpUcmVlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgbnpUcmVlQ2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuek5vZGVzKHZhbHVlOiBOelRyZWVOb2RlW10pIHtcbiAgICB0aGlzLm5vZGVzID0gdmFsdWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKSwgMCk7XG4gIH1cblxuICBnZXQgbnpOb2RlcygpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0cmVlU2VsZWN0JykgdHJlZVNlbGVjdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25UZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgZHJvcGRvd25UZW1wbGF0ZTtcbiAgQFZpZXdDaGlsZCgndHJlZVJlZicpIHRyZWVSZWY6IE56VHJlZUNvbXBvbmVudDtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZykgPT4gdm9pZDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZ2V0IHNlYXJjaERpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uek9wZW4gPyAnYmxvY2snIDogJ25vbmUnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNdWx0aXBsZSB8fCB0aGlzLm56Q2hlY2thYmxlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSB7XG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG9wYWNpdHkgPSAxO1xuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0cmlnZ2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uek9wZW4pKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCkge1xuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uek9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChcbiAgICAgIHRoaXMuaXNNdWx0aXBsZSAmJlxuICAgICAgIWV2ZW50VGFyZ2V0LnZhbHVlICYmXG4gICAgICBrZXlDb2RlID09PSBCQUNLU1BBQ0VcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQodGhpcy5zZWxlY3RlZE5vZGVzWyB0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gMSBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICBkZXRhY2hPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU2VsZWN0ZWQobm9kZTogTnpUcmVlTm9kZSwgZW1pdDogYm9vbGVhbiA9IHRydWUsIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcbiAgICAgIHRoaXMudHJlZVJlZi5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XG4gICAgICB0aGlzLnRyZWVSZWYubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3Qobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJlZVJlZi5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgdGhpcy5uek11bHRpcGxlKTtcbiAgICB9XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMubnpSZW1vdmVkLmVtaXQobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IHRyaWdnZXIgdGhlIHBvcHVwXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNPbklucHV0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGF0dGFjaE92ZXJsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5kcm9wZG93blRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xuICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpO1xuICB9XG5cbiAgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBvdmVybGF5V2lkdGggPSB0aGlzLnRyZWVTZWxlY3QubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24oKSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKSxcbiAgICAgIFsgdGhpcy5uekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA/ICd3aWR0aCcgOiAnbWluV2lkdGgnIF06IG92ZXJsYXlXaWR0aCxcbiAgICAgIGhhc0JhY2tkcm9wICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGdldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgXTtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMudHJlZVNlbGVjdClcbiAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpXG4gICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXG4gICAgLndpdGhQdXNoKGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblN0cmF0ZWd5O1xuICB9XG5cbiAgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICB0aGlzLm56VHJlZUNsaWNrLnBpcGUoXG4gICAgICAgIHRhcCgoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGU7XG4gICAgICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUgJiYgIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xuICAgICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSAhbm9kZS5pc0NoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLnRyZWVSZWYubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xuICAgICAgICAgICAgdGhpcy50cmVlUmVmLm56VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xuICAgICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5uekNoZWNrYWJsZSA/ICghZXZlbnQubm9kZS5pc0Rpc2FibGVkICYmICFldmVudC5ub2RlLmlzRGlzYWJsZUNoZWNrYm94KSA6ICFldmVudC5ub2RlLmlzRGlzYWJsZWQ7XG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdGhpcy5uekNoZWNrYWJsZSA/IHRoaXMubnpUcmVlQ2hlY2tCb3hDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKSxcbiAgICAgIHRoaXMubnpDbGVhcmVkLFxuICAgICAgdGhpcy5uelJlbW92ZWRcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RlZE5vZGVzLm1hcChub2RlID0+IG5vZGUua2V5KTtcbiAgICAgIHRoaXMudmFsdWUgPSBbIC4uLnZhbHVlIF07XG4gICAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZS5sZW5ndGggPyB2YWx1ZVsgMCBdIDogbnVsbCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkTm9kZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJlZVJlZikge1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWyAuLi4odGhpcy5uekNoZWNrYWJsZSA/IHRoaXMudHJlZVJlZi5nZXRDaGVja2VkTm9kZUxpc3QoKSA6IHRoaXMudHJlZVJlZi5nZXRTZWxlY3RlZE5vZGVMaXN0KCkpIF07XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICB1cGRhdGVJbnB1dFdpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMubnpDbGVhcmVkLmVtaXQoKTtcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgfVxuXG4gIHVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJlZVJlZiAmJiAhdGhpcy50cmVlUmVmLm56VHJlZUNsYXNzWyAnYW50LXNlbGVjdC10cmVlJyBdKSB7XG4gICAgICB0aGlzLnRyZWVSZWYubnpUcmVlQ2xhc3MgPSB7IC4uLnRoaXMudHJlZVJlZi5uelRyZWVDbGFzcywgWyAnYW50LXNlbGVjdC10cmVlJyBdOiB0cnVlIH07XG4gICAgfVxuICAgIHRoaXMuZHJvcERvd25DbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC1zZWxlY3QtZHJvcGRvd24nIF0gICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbICdhbnQtc2VsZWN0LXRyZWUtZHJvcGRvd24nIF0gICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi0tc2luZ2xlYCBdICAgICAgICAgICAgIDogIXRoaXMubnpNdWx0aXBsZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tLW11bHRpcGxlYCBdICAgICAgICAgICA6IHRoaXMubnpNdWx0aXBsZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRgIF06IHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbScsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0YCBdICAgOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICd0b3AnXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheVdpZHRoID0gdGhpcy50cmVlU2VsZWN0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgaWYgKHRoaXMubnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IG92ZXJsYXlXaWR0aCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyBtaW5XaWR0aDogb3ZlcmxheVdpZHRoIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LCAnZGlzcGxheScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gWyAodmFsdWUgYXMgc3RyaW5nKSBdO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW107XG4gICAgfVxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZ1tdIHwgc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcbiAgICB0aGlzLmRldGFjaE92ZXJsYXkoKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gIH1cbn1cbiJdfQ==