/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOWN_ARROW, SPACE, TAB } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, Component, ContentChildren, EventEmitter, HostListener, Input, Output, QueryList, Renderer2, SimpleChange, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzOptionContainerComponent } from './nz-option-container.component';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { defaultFilterOption } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
var NzSelectComponent = /** @class */ (function () {
    function NzSelectComponent(renderer) {
        this.renderer = renderer;
        this._disabled = false;
        this._allowClear = false;
        this._showSearch = false;
        this._open = false;
        this._autoFocus = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.dropDownPosition = 'bottom';
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        this.listOfTemplateOption = [];
        this.searchValue = '';
        this.isDestroy = true;
        this.isInit = false;
        this.nzOnSearch = new EventEmitter();
        this.nzScrollToBottom = new EventEmitter();
        this.nzOpenChange = new EventEmitter();
        this.nzSize = 'default';
        this.nzServerSearch = false;
        this.nzMode = 'default';
        this.nzDropdownMatchSelectWidth = true;
        this.nzFilterOption = defaultFilterOption;
        this.nzMaxMultipleCount = Infinity;
        /**
         * https://github.com/angular/angular/pull/13349/files *
         */
        this.compareWith = function (o1, o2) { return o1 === o2; };
    }
    Object.defineProperty(NzSelectComponent.prototype, "nzDropdownClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dropdownClassName;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dropdownClassName = value;
            this.updateDropDownClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._open = value;
            this.handleEscBug();
            this.updateCdkConnectedOverlayStatus();
            this.updateDropDownClassMap();
            if (this.nzOpen) {
                if (this.nzSelectTopControlComponent) {
                    this.nzSelectTopControlComponent.focusOnInput();
                    this.nzSelectTopControlComponent.setInputValue('', true);
                }
                if (this.nzOptionContainerComponent) {
                    this.nzOptionContainerComponent.scrollIntoView();
                }
                if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                    this.cdkConnectedOverlay.overlayRef.updatePosition();
                    /** @type {?} */
                    var backdropElement = this.cdkConnectedOverlay.overlayRef.backdropElement;
                    /** @type {?} */
                    var parentNode = this.renderer.parentNode(backdropElement);
                    /** @type {?} */
                    var hostElement = this.cdkConnectedOverlay.overlayRef.hostElement;
                    this.renderer.appendChild(parentNode, backdropElement);
                    this.renderer.appendChild(parentNode, hostElement);
                }
            }
            else {
                if (this.nzSelectTopControlComponent) {
                    this.nzSelectTopControlComponent.setInputValue('', false);
                }
                if (this.nzOptionContainerComponent) {
                    this.nzOptionContainerComponent.resetActiveOption();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzDisabled", {
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
            if (this.nzDisabled) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzAllowClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowClear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowClear = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzShowSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSearch;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzPlaceHolder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzOpen = !this.nzOpen;
            this.nzOpenChange.emit(this.nzOpen);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzSelectComponent.prototype._handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._disabled) {
            return;
        }
        /** @type {?} */
        var keyCode = event.keyCode;
        if (!this._open) {
            if (keyCode === SPACE || keyCode === DOWN_ARROW) {
                this.nzOpen = true;
                this.nzOpenChange.emit(this.nzOpen);
                event.preventDefault();
            }
        }
        else {
            if (keyCode === TAB) {
                // if (keyCode === SPACE || keyCode === TAB) { // #2201
                this.nzOpen = false;
                this.nzOpenChange.emit(this.nzOpen);
                event.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && this.nzSelectTopControlComponent.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlComponent.inputElement) {
            this.nzSelectTopControlComponent.inputElement.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlComponent.inputElement) {
            this.nzSelectTopControlComponent.inputElement.nativeElement.blur();
        }
    };
    /** overlay can not be always open , reopen overlay after press esc **/
    /**
     * overlay can not be always open , reopen overlay after press esc *
     * @return {?}
     */
    NzSelectComponent.prototype.handleEscBug = /**
     * overlay can not be always open , reopen overlay after press esc *
     * @return {?}
     */
    function () {
        if (this.nzOpen && this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && !this.cdkConnectedOverlay.overlayRef.backdropElement) {
            this.cdkConnectedOverlay.open = true;
            this.cdkConnectedOverlay.ngOnChanges({ open: new SimpleChange(false, true, false) });
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectComponent.prototype.onKeyDownCdkOverlayOrigin = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzOptionContainerComponent) {
            this.nzOptionContainerComponent.onKeyDownUl(e);
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        if (this.nzOpen) {
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
            this.blur();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.updateDropDownClassMap();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onClickOptionFromOptionContainer = /**
     * @return {?}
     */
    function () {
        if (this.isSingleMode) {
            this.closeDropDown();
        }
        else if (this.nzMode === 'tags') {
            this.onSearch('', true);
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && this.nzOpen && this.cdkOverlayOrigin) {
            if (this.nzDropdownMatchSelectWidth) {
                this.overlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdkConnectedOverlay.overlayRef.updateSize({ width: this.overlayWidth });
            }
            else {
                this.overlayMinWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdkConnectedOverlay.overlayRef.updateSize({ minWidth: this.overlayMinWidth });
            }
        }
        this.updateCdkConnectedOverlayPositions();
        if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && this.cdkConnectedOverlay.overlayRef.backdropElement) {
            if (this.nzOpen) {
                this.renderer.removeStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display');
            }
            else {
                this.renderer.setStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display', 'none');
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** wait for input size change **/
        setTimeout(function () { return _this.cdkConnectedOverlay.overlayRef.updatePosition(); }, 160);
    };
    Object.defineProperty(NzSelectComponent.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'tags' || this.nzMode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    /** option container nzListOfSelectedValueChange -> update ngModel **/
    // tslint:disable-next-line:no-any
    /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateListOfSelectedValueFromOptionContainer = /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    };
    /** option container nzListOfSelectedValueChange -> update ngModel **/
    // tslint:disable-next-line:no-any
    /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateListOfSelectedValueFromTopControl = /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateFromSelectedList = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var modelValue;
        if (this.isSingleMode) {
            if (value.length) {
                modelValue = value[0];
            }
        }
        else {
            modelValue = value;
            this.updateCdkConnectedOverlayPositions();
        }
        this.updateNgModel(value, modelValue);
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzSelectComponent.prototype.onSearch = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        if (emit && (this.searchValue !== value)) {
            this.nzOnSearch.emit(value);
            this.searchValue = value;
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.clearNgModel = /**
     * @return {?}
     */
    function () {
        if (this.isSingleMode) {
            this.updateNgModel([], null);
        }
        else {
            this.updateNgModel([], []);
        }
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} list
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateNgModel = /**
     * @param {?} list
     * @param {?} value
     * @return {?}
     */
    function (list, value) {
        this.listOfSelectedValue = list;
        if (value !== this.value) {
            this.value = value;
            this.onChange(this.value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.listOfTemplateOptionChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfTemplateOption = value;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateDropDownClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.dropDownClassMap = (_a = {},
            _a['ant-select-dropdown'] = true,
            _a["ant-select-dropdown--single"] = this.isSingleMode,
            _a["ant-select-dropdown--multiple"] = this.isMultipleOrTags,
            _a["ant-select-dropdown-placement-bottomLeft"] = this.dropDownPosition === 'bottom',
            _a["ant-select-dropdown-placement-topLeft"] = this.dropDownPosition === 'top',
            _a["" + this.nzDropdownClassName] = !!this.nzDropdownClassName,
            _a);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // TODO: should not clear disabled option ?
        e.stopPropagation();
        this.clearNgModel();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.clearSearchValue = /**
     * @return {?}
     */
    function () {
        if (this.isSingleMode) {
            this.nzSelectTopControlComponent.setInputValue('', false);
        }
        else {
            this.nzSelectTopControlComponent.setInputValue('', false);
        }
    };
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.writeValue = /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                this.listOfSelectedValue = value;
            }
            else {
                this.listOfSelectedValue = [value];
            }
        }
        else {
            this.listOfSelectedValue = [];
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isDestroy = false;
        this.updateDropDownClassMap();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isInit = true;
        Promise.resolve().then(function () { return _this.updateCdkConnectedOverlayStatus(); });
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
    };
    NzSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-select',
                    preserveWhitespaces: false,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzSelectComponent; }),
                            multi: true
                        }
                    ],
                    animations: [
                        trigger('dropDownAnimation', [
                            state('hidden', style({
                                opacity: 0,
                                display: 'none'
                            })),
                            state('bottom', style({
                                opacity: 1,
                                transform: 'scaleY(1)',
                                transformOrigin: '0% 0%'
                            })),
                            state('top', style({
                                opacity: 1,
                                transform: 'scaleY(1)',
                                transformOrigin: '0% 100%'
                            })),
                            transition('hidden => bottom', [
                                style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }),
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                            ]),
                            transition('bottom => hidden', [
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }))
                            ]),
                            transition('hidden => top', [
                                style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 100%'
                                }),
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                            ]),
                            transition('top => hidden', [
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 100%'
                                }))
                            ])
                        ])
                    ],
                    template: "<div\n  cdkOverlayOrigin\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"isSingleMode\"\n  [class.ant-select-selection--multiple]=\"isMultipleOrTags\"\n  (keydown)=\"onKeyDownCdkOverlayOrigin($event)\"\n  tabindex=\"0\">\n  <div\n    nz-select-top-control\n    [nzOpen]=\"nzOpen\"\n    [compareWith]=\"compareWith\"\n    [nzPlaceHolder]=\"nzPlaceHolder\"\n    [nzShowSearch]=\"nzShowSearch\"\n    [nzDisabled]=\"nzDisabled\"\n    [nzMode]=\"nzMode\"\n    [nzListTemplateOfOption]=\"listOfTemplateOption\"\n    [nzListOfSelectedValue]=\"listOfSelectedValue\"\n    (nzOnSearch)=\"onSearch($event.value,$event.emit)\"\n    (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromTopControl($event)\">\n  </div>\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\" nz-select-unselectable (click)=\"onClearSelection($event)\">\n    <i nz-icon type=\"close-circle\" theme=\"fill\" class=\"ant-select-close-icon\"></i>\n  </span>\n  <span class=\"ant-select-arrow\" nz-select-unselectable>\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\n    <b></b>\n  </span>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown();\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayWidth]=\"overlayWidth\"\n  [cdkConnectedOverlayMinWidth]=\"overlayMinWidth\"\n  [cdkConnectedOverlayOpen]=\"!isDestroy\">\n  <div [ngClass]=\"dropDownClassMap\" [@dropDownAnimation]=\"nzOpen ? dropDownPosition : 'hidden' \" [ngStyle]=\"nzDropdownStyle\">\n    <div\n      style=\"overflow: auto\"\n      nz-option-container\n      [listOfNzOptionComponent]=\"listOfNzOptionComponent\"\n      [listOfNzOptionGroupComponent]=\"listOfNzOptionGroupComponent\"\n      [nzSearchValue]=\"searchValue\"\n      [nzFilterOption]=\"nzFilterOption\"\n      [nzServerSearch]=\"nzServerSearch\"\n      [compareWith]=\"compareWith\"\n      [nzNotFoundContent]=\"nzNotFoundContent\"\n      [nzMaxMultipleCount]=\"nzMaxMultipleCount\"\n      [nzMode]=\"nzMode\"\n      (nzScrollToBottom)=\"nzScrollToBottom.emit()\"\n      (nzClickOption)=\"onClickOptionFromOptionContainer()\"\n      (nzListOfTemplateOptionChange)=\"listOfTemplateOptionChange($event)\"\n      (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromOptionContainer($event)\"\n      [nzListOfSelectedValue]=\"listOfSelectedValue\">\n    </div>\n  </div>\n</ng-template>\n<!--can not use ViewChild since it will match sub options in option group -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    host: {
                        '[class.ant-select]': 'true',
                        '[class.ant-select-lg]': 'nzSize==="large"',
                        '[class.ant-select-sm]': 'nzSize==="small"',
                        '[class.ant-select-enabled]': '!nzDisabled',
                        '[class.ant-select-disabled]': 'nzDisabled',
                        '[class.ant-select-allow-clear]': 'nzAllowClear',
                        '[class.ant-select-open]': 'nzOpen'
                    },
                    styles: ["\n    .ant-select-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NzSelectComponent.propDecorators = {
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin,] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        nzSelectTopControlComponent: [{ type: ViewChild, args: [NzSelectTopControlComponent,] }],
        nzOptionContainerComponent: [{ type: ViewChild, args: [NzOptionContainerComponent,] }],
        listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
        listOfNzOptionGroupComponent: [{ type: ContentChildren, args: [NzOptionGroupComponent,] }],
        nzOnSearch: [{ type: Output }],
        nzScrollToBottom: [{ type: Output }],
        nzOpenChange: [{ type: Output }],
        nzSize: [{ type: Input }],
        nzServerSearch: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzDropdownMatchSelectWidth: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzMaxMultipleCount: [{ type: Input }],
        nzDropdownStyle: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        _handleKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return NzSelectComponent;
}());
export { NzSelectComponent };
function NzSelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSelectComponent.prototype._disabled;
    /** @type {?} */
    NzSelectComponent.prototype._allowClear;
    /** @type {?} */
    NzSelectComponent.prototype._showSearch;
    /** @type {?} */
    NzSelectComponent.prototype._open;
    /** @type {?} */
    NzSelectComponent.prototype._placeholder;
    /** @type {?} */
    NzSelectComponent.prototype._autoFocus;
    /** @type {?} */
    NzSelectComponent.prototype._dropdownClassName;
    /** @type {?} */
    NzSelectComponent.prototype.onChange;
    /** @type {?} */
    NzSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzSelectComponent.prototype.listOfSelectedValue;
    /** @type {?} */
    NzSelectComponent.prototype.listOfTemplateOption;
    /** @type {?} */
    NzSelectComponent.prototype.value;
    /** @type {?} */
    NzSelectComponent.prototype.overlayWidth;
    /** @type {?} */
    NzSelectComponent.prototype.overlayMinWidth;
    /** @type {?} */
    NzSelectComponent.prototype.searchValue;
    /** @type {?} */
    NzSelectComponent.prototype.isDestroy;
    /** @type {?} */
    NzSelectComponent.prototype.isInit;
    /** @type {?} */
    NzSelectComponent.prototype.dropDownClassMap;
    /** @type {?} */
    NzSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectTopControlComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzOptionContainerComponent;
    /**
     * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
     * @type {?}
     */
    NzSelectComponent.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectComponent.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzOnSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzSelectComponent.prototype.nzServerSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzMode;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzSelectComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxMultipleCount;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzSelectComponent.prototype.nzNotFoundContent;
    /**
     * https://github.com/angular/angular/pull/13349/files *
     * @type {?}
     */
    NzSelectComponent.prototype.compareWith;
    /** @type {?} */
    NzSelectComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztJQXVhOUUsMkJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7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QVNMLEtBQUs7MEJBU0wsWUFBWSxTQUFDLE9BQU87aUNBUXBCLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBRSxRQUFRLENBQUU7OzRCQXBRdkM7O1NBaUhhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IERPV05fQVJST1csIFNQQUNFLCBUQUIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ2RrQ29ubmVjdGVkT3ZlcmxheSwgQ2RrT3ZlcmxheU9yaWdpbiwgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgVEZpbHRlck9wdGlvbiB9IGZyb20gJy4vbnotb3B0aW9uLnBpcGUnO1xuaW1wb3J0IHsgTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zZWxlY3QnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogW1xuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56U2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignZHJvcERvd25BbmltYXRpb24nLCBbXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdib3R0b20nLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHkgICAgICAgIDogMSxcbiAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgndG9wJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYm90dG9tID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiB0b3AnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3RvcCA9PiBoaWRkZW4nLCBbXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJywgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3RdJyAgICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nICAgICAgICAgOiAnbnpTaXplPT09XCJsYXJnZVwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJyAgICAgICAgIDogJ256U2l6ZT09PVwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJyAgICA6ICchbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXScgICA6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ256QWxsb3dDbGVhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJyAgICAgICA6ICduek9wZW4nXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2FsbG93Q2xlYXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1NlYXJjaCA9IGZhbHNlO1xuICBwcml2YXRlIF9vcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xuICBwcml2YXRlIF9kcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdID0gW107XG4gIGxpc3RPZlRlbXBsYXRlT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdmFsdWU6IGFueSB8IGFueVtdO1xuICBvdmVybGF5V2lkdGg6IG51bWJlcjtcbiAgb3ZlcmxheU1pbldpZHRoOiBudW1iZXI7XG4gIHNlYXJjaFZhbHVlOiBzdHJpbmcgPSAnJztcbiAgaXNEZXN0cm95ID0gdHJ1ZTtcbiAgaXNJbml0ID0gZmFsc2U7XG4gIGRyb3BEb3duQ2xhc3NNYXA7XG4gIEBWaWV3Q2hpbGQoQ2RrT3ZlcmxheU9yaWdpbikgY2RrT3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtDb25uZWN0ZWRPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkKE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkgbnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50OiBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoTnpPcHRpb25Db250YWluZXJDb21wb25lbnQpIG56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50OiBOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudDtcbiAgLyoqIHNob3VsZCBtb3ZlIHRvIG56LW9wdGlvbi1jb250YWluZXIgd2hlbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDgxMCByZXNvbHZlZCAqKi9cbiAgQENvbnRlbnRDaGlsZHJlbihOek9wdGlvbkNvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpPcHRpb25Hcm91cENvbXBvbmVudCkgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uR3JvdXBDb21wb25lbnQ+O1xuICBAT3V0cHV0KCkgbnpPblNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG56T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQElucHV0KCkgbnpTaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelNlcnZlclNlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBuek1vZGU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24gPSBkZWZhdWx0RmlsdGVyT3B0aW9uO1xuICBASW5wdXQoKSBuek1heE11bHRpcGxlQ291bnQgPSBJbmZpbml0eTtcbiAgQElucHV0KCkgbnpEcm9wZG93blN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nOyB9O1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9wdWxsLzEzMzQ5L2ZpbGVzICoqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRyb3Bkb3duQ2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kcm9wZG93bkNsYXNzTmFtZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56RHJvcGRvd25DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd25DbGFzc05hbWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gIH1cblxuICBnZXQgbnpBdXRvRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek9wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vcGVuID0gdmFsdWU7XG4gICAgdGhpcy5oYW5kbGVFc2NCdWcoKTtcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcbiAgICBpZiAodGhpcy5uek9wZW4pIHtcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5mb2N1c09uSW5wdXQoKTtcbiAgICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuc2V0SW5wdXRWYWx1ZSgnJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wRWxlbWVudCA9IHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudDtcbiAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZShiYWNrZHJvcEVsZW1lbnQpO1xuICAgICAgICBjb25zdCBob3N0RWxlbWVudCA9IHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmhvc3RFbGVtZW50O1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudE5vZGUsIGJhY2tkcm9wRWxlbWVudCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50Tm9kZSwgaG9zdEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuc2V0SW5wdXRWYWx1ZSgnJywgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubnpPcHRpb25Db250YWluZXJDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudC5yZXNldEFjdGl2ZU9wdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBuek9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBbGxvd0NsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWxsb3dDbGVhciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpBbGxvd0NsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0NsZWFyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1NlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dTZWFyY2ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1NlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NlYXJjaDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBsYWNlSG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56UGxhY2VIb2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubnpPcGVuID0gIXRoaXMubnpPcGVuO1xuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsgJyRldmVudCcgXSlcbiAgX2hhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmICghdGhpcy5fb3Blbikge1xuICAgICAgaWYgKGtleUNvZGUgPT09IFNQQUNFIHx8IGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgdGhpcy5uek9wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleUNvZGUgPT09IFRBQikge1xuICAgICAgLy8gaWYgKGtleUNvZGUgPT09IFNQQUNFIHx8IGtleUNvZGUgPT09IFRBQikgeyAvLyAjMjIwMVxuICAgICAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJbml0ICYmIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIG92ZXJsYXkgY2FuIG5vdCBiZSBhbHdheXMgb3BlbiAsIHJlb3BlbiBvdmVybGF5IGFmdGVyIHByZXNzIGVzYyAqKi9cbiAgaGFuZGxlRXNjQnVnKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56T3BlbiAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYgJiYgIXRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm5nT25DaGFuZ2VzKHsgb3BlbjogbmV3IFNpbXBsZUNoYW5nZShmYWxzZSwgdHJ1ZSwgZmFsc2UpIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bkNka092ZXJsYXlPcmlnaW4oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50Lm9uS2V5RG93blVsKGUpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWTtcbiAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG9uQ2xpY2tPcHRpb25Gcm9tT3B0aW9uQ29udGFpbmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoKCcnLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5pdCAmJiB0aGlzLm56T3BlbiAmJiB0aGlzLmNka092ZXJsYXlPcmlnaW4pIHtcbiAgICAgIGlmICh0aGlzLm56RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVdpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IHdpZHRoOiB0aGlzLm92ZXJsYXlXaWR0aCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3ZlcmxheU1pbldpZHRoID0gdGhpcy5jZGtPdmVybGF5T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IG1pbldpZHRoOiB0aGlzLm92ZXJsYXlNaW5XaWR0aCB9KTtcbiAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTtcbiAgICBpZiAodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5ICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk6IHZvaWQge1xuICAgIC8qKiB3YWl0IGZvciBpbnB1dCBzaXplIGNoYW5nZSAqKi9cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCksIDE2MCk7XG4gIH1cblxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ2RlZmF1bHQnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAndGFncycgfHwgdGhpcy5uek1vZGUgPT09ICdtdWx0aXBsZSc7XG4gIH1cblxuICAvKiogb3B0aW9uIGNvbnRhaW5lciBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgLT4gdXBkYXRlIG5nTW9kZWwgKiovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZUZyb21PcHRpb25Db250YWluZXIodmFsdWU6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclNlYXJjaFZhbHVlKCk7XG4gICAgdGhpcy51cGRhdGVGcm9tU2VsZWN0ZWRMaXN0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKiBvcHRpb24gY29udGFpbmVyIG56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSAtPiB1cGRhdGUgbmdNb2RlbCAqKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlRnJvbVRvcENvbnRyb2wodmFsdWU6IGFueVtdKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclNlYXJjaFZhbHVlKCk7XG4gICAgdGhpcy51cGRhdGVGcm9tU2VsZWN0ZWRMaXN0KHZhbHVlKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdXBkYXRlRnJvbVNlbGVjdGVkTGlzdCh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICBsZXQgbW9kZWxWYWx1ZTtcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgbW9kZWxWYWx1ZSA9IHZhbHVlWyAwIF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZGVsVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU5nTW9kZWwodmFsdWUsIG1vZGVsVmFsdWUpO1xuICB9XG5cbiAgb25TZWFyY2godmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChlbWl0ICYmICh0aGlzLnNlYXJjaFZhbHVlICE9PSB2YWx1ZSkpIHtcbiAgICAgIHRoaXMubnpPblNlYXJjaC5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjbGVhck5nTW9kZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XG4gICAgICB0aGlzLnVwZGF0ZU5nTW9kZWwoW10sIG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwZGF0ZU5nTW9kZWwoW10sIFtdKTtcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZU5nTW9kZWwobGlzdDogYW55W10sIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGxpc3Q7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGxpc3RPZlRlbXBsYXRlT3B0aW9uQ2hhbmdlKHZhbHVlOiBOek9wdGlvbkNvbXBvbmVudFtdKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgdXBkYXRlRHJvcERvd25DbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BEb3duQ2xhc3NNYXAgPSB7XG4gICAgICBbICdhbnQtc2VsZWN0LWRyb3Bkb3duJyBdICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi0tc2luZ2xlYCBdICAgICAgICAgICAgIDogdGhpcy5pc1NpbmdsZU1vZGUsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLS1tdWx0aXBsZWAgXSAgICAgICAgICAgOiB0aGlzLmlzTXVsdGlwbGVPclRhZ3MsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0YCBdOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b20nLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wTGVmdGAgXSAgIDogdGhpcy5kcm9wRG93blBvc2l0aW9uID09PSAndG9wJyxcbiAgICAgIFsgYCR7dGhpcy5uekRyb3Bkb3duQ2xhc3NOYW1lfWAgXSAgICAgICAgICAgICA6ICEhdGhpcy5uekRyb3Bkb3duQ2xhc3NOYW1lXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xlYXJTZWxlY3Rpb24oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8vIFRPRE86IHNob3VsZCBub3QgY2xlYXIgZGlzYWJsZWQgb3B0aW9uID9cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY2xlYXJOZ01vZGVsKCk7XG4gIH1cblxuICBjbGVhclNlYXJjaFZhbHVlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuc2V0SW5wdXRWYWx1ZSgnJywgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5zZXRJbnB1dFZhbHVlKCcnLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICAvKiogdXBkYXRlIG5nTW9kZWwgLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkVmFsdWUgKiovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gWyB2YWx1ZSBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbXTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xuICB9XG59XG4iXX0=