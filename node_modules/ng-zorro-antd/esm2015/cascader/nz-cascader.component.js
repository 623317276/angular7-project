/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { DEFAULT_DROPDOWN_POSITIONS } from '../core/overlay/overlay-position-map';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function toArray(value) {
    /** @type {?} */
    let ret;
    if (value == null) {
        ret = [];
    }
    else if (!Array.isArray(value)) {
        ret = [value];
    }
    else {
        ret = value;
    }
    return ret;
}
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @return {?}
 */
function arrayEquals(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    /** @type {?} */
    const len = array1.length;
    for (let i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
/** @type {?} */
const defaultDisplayRender = label => label.join(' / ');
const ɵ0 = defaultDisplayRender;
/**
 * @record
 */
export function CascaderOption() { }
function CascaderOption_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    CascaderOption.prototype.value;
    /** @type {?|undefined} */
    CascaderOption.prototype.label;
    /** @type {?|undefined} */
    CascaderOption.prototype.title;
    /** @type {?|undefined} */
    CascaderOption.prototype.disabled;
    /** @type {?|undefined} */
    CascaderOption.prototype.loading;
    /** @type {?|undefined} */
    CascaderOption.prototype.isLeaf;
    /** @type {?|undefined} */
    CascaderOption.prototype.parent;
    /** @type {?|undefined} */
    CascaderOption.prototype.children;
    /* TODO: handle strange member:
    [ key: string ]: any;
    */
}
/**
 * @record
 */
export function CascaderSearchOption() { }
function CascaderSearchOption_tsickle_Closure_declarations() {
    /** @type {?} */
    CascaderSearchOption.prototype.path;
}
/**
 * @record
 */
export function NzShowSearchOptions() { }
function NzShowSearchOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.filter;
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.sorter;
}
export class NzCascaderComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} nzUpdateHostClassService
     */
    constructor(elementRef, cdr, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.allowClear = true;
        this.autoFocus = false;
        this.disabled = false;
        this.enableCache = true;
        this.showArrow = true;
        this.showInput = true;
        this.size = 'default';
        this.prefixCls = 'ant-cascader';
        this.inputPrefixCls = 'ant-input';
        this.changeOnSelect = false;
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.isOpening = false;
        this.el = this.elementRef.nativeElement;
        this.isFocused = false;
        this.isLabelRenderTemplate = false;
        this.labelRenderContext = {};
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.nzColumns = [];
        /**
         * 搜索相关的输入值
         */
        this._inputValue = '';
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        /**
         * If cascader is in search mode.
         */
        this.inSearch = false;
        /**
         * Hover text for the clear icon
         */
        this.nzClearText = 'Clear';
        /**
         * Expand column item when click or hover, one of 'click' 'hover'
         */
        this.nzExpandTrigger = 'click';
        /**
         * Specify content to show when no result matches.
         */
        this.nzNotFoundContent = 'Not Found';
        /**
         * Input placeholder
         */
        this.nzPlaceHolder = 'Please select';
        /**
         * Delay time to show when mouse enter, when `nzExpandTrigger` is `hover`.
         */
        this.nzMouseEnterDelay = 150;
        /**
         * Delay time to hide when mouse enter, when `nzExpandTrigger` is `hover`.
         */
        this.nzMouseLeaveDelay = 150;
        /**
         * Triggering mode: can be Array<'click'|'hover'>
         */
        this.nzTriggerAction = ['click'];
        /**
         * Property name for getting `value` in the option
         */
        this.nzValueProperty = 'value';
        /**
         * Property name for getting `label` in the option
         */
        this.nzLabelProperty = 'label';
        /**
         * Event: emit on popup show or hide
         */
        this.nzVisibleChange = new EventEmitter();
        /**
         * Event: emit on values changed
         */
        this.nzChange = new EventEmitter();
        /**
         * Event: emit on values and selection changed
         */
        this.nzSelectionChange = new EventEmitter();
        /**
         * Event: emit on option selected, event data：{option: any, index: number}
         */
        this.nzSelect = new EventEmitter();
        /**
         * Event: emit on the clear button clicked
         */
        this.nzClear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get inputValue() {
        return this._inputValue;
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    set inputValue(inputValue) {
        this._inputValue = inputValue;
        /** @type {?} */
        const willBeInSearch = !!inputValue;
        // 搜索状态变动之前，如要进入则要保留之前激活选项的快照，退出搜索状态要还原该快照
        if (!this.inSearch && willBeInSearch) {
            this.oldActivatedOptions = this.activatedOptions;
            this.activatedOptions = [];
        }
        else if (this.inSearch && !willBeInSearch) {
            this.activatedOptions = this.oldActivatedOptions;
        }
        // 搜索状态变更之后
        this.inSearch = !!willBeInSearch;
        if (this.inSearch) {
            this.labelRenderText = '';
            this.prepareSearchValue();
        }
        else {
            if (this.showSearch) {
                this.nzColumns = this.oldColumnsHolder;
            }
            this.buildDisplayLabel();
            this.searchWidthStyle = '';
        }
        this.setClassMap();
    }
    /**
     * Display Render ngTemplate
     * @param {?} value
     * @return {?}
     */
    set nzLabelRender(value) {
        this.labelRenderTpl = value;
        this.isLabelRenderTemplate = (value instanceof TemplateRef);
    }
    /**
     * @return {?}
     */
    get nzLabelRender() {
        return this.labelRenderTpl;
    }
    /**
     * prefixCls
     * @param {?} prefixCls
     * @return {?}
     */
    set nzPrefixCls(prefixCls) {
        this.prefixCls = prefixCls;
        this.setClassMap();
        this.setLabelClass();
        this.setArrowClass();
        this.setLoadingClass();
        this.setClearClass();
        this.setInputClass();
        this.setMenuClass();
        this.setMenuColumnClass();
    }
    /**
     * @return {?}
     */
    get nzPrefixCls() {
        return this.prefixCls;
    }
    /**
     * Whether is disabled
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this.disabled = toBoolean(value);
        this.setClassMap();
        this.setInputClass();
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this.disabled;
    }
    /**
     * Input size, one of `large` `default` `small`
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this.size = value;
        this.setClassMap();
        this.setInputClass();
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this.size;
    }
    /**
     * Whether show input box. Defaults to `true`.
     * @param {?} value
     * @return {?}
     */
    set nzShowInput(value) {
        this.showInput = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowInput() {
        return this.showInput;
    }
    /**
     * Whether can search. Defaults to `false`.
     * @param {?} value
     * @return {?}
     */
    set nzShowSearch(value) {
        this.showSearch = value;
    }
    /**
     * @return {?}
     */
    get nzShowSearch() {
        return this.showSearch;
    }
    /**
     * Whether allow clear. Defaults to `true`.
     * @param {?} value
     * @return {?}
     */
    set nzAllowClear(value) {
        this.allowClear = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAllowClear() {
        return this.allowClear;
    }
    /**
     * Whether auto focus.
     * @param {?} value
     * @return {?}
     */
    set nzAutoFocus(value) {
        this.autoFocus = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAutoFocus() {
        return this.autoFocus;
    }
    /**
     * Whether to show arrow
     * @param {?} value
     * @return {?}
     */
    set nzShowArrow(value) {
        this.showArrow = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowArrow() {
        return this.showArrow;
    }
    /**
     * Additional className of popup overlay
     * @param {?} value
     * @return {?}
     */
    set nzMenuClassName(value) {
        this.menuClassName = value;
        this.setMenuClass();
    }
    /**
     * @return {?}
     */
    get nzMenuClassName() {
        return this.menuClassName;
    }
    /**
     * Additional className of popup overlay column
     * @param {?} value
     * @return {?}
     */
    set nzColumnClassName(value) {
        this.columnClassName = value;
        this.setMenuColumnClass();
    }
    /**
     * @return {?}
     */
    get nzColumnClassName() {
        return this.columnClassName;
    }
    /**
     * Options for first column, sub column will be load async
     * @param {?} options
     * @return {?}
     */
    set nzOptions(options) {
        this.oldColumnsHolder = this.nzColumns = options && options.length ? [options] : [];
        if (!this.inSearch) {
            if (this.defaultValue && this.nzColumns.length) {
                this.initOptions(0);
            }
        }
        else {
            this.prepareSearchValue();
        }
    }
    /**
     * @return {?}
     */
    get nzOptions() {
        return this.nzColumns[0];
    }
    /**
     * Change value on each selection if set to true
     * @param {?} value
     * @return {?}
     */
    set nzChangeOnSelect(value) {
        this.changeOnSelect = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzChangeOnSelect() {
        return this.changeOnSelect;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        /** @type {?} */
        const newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (!this.isFocused) {
            /** @type {?} */
            const input = /** @type {?} */ (this.el.querySelector(`.${this.prefixCls}-input`));
            if (input && input.focus) {
                input.focus();
            }
            else {
                this.el.focus();
            }
            this.isFocused = true;
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.isFocused) {
            /** @type {?} */
            const input = /** @type {?} */ (this.el.querySelector(`.${this.prefixCls}-input`));
            if (input && input.blur) {
                input.blur();
            }
            else {
                this.el.blur();
            }
            this.isFocused = false;
            this.setClassMap();
            this.setLabelClass();
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [`${this.prefixCls}`]: 1,
            [`${this.prefixCls}-picker`]: 1,
            [`${this.prefixCls}-lg`]: this.nzSize === 'large',
            [`${this.prefixCls}-sm`]: this.nzSize === 'small',
            [`${this.prefixCls}-picker-disabled`]: this.disabled,
            [`${this.prefixCls}-focused`]: this.isFocused,
            [`${this.prefixCls}-picker-open`]: this.menuVisible,
            [`${this.prefixCls}-picker-with-value`]: this.inputValue && this.inputValue.length
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * 标签 样式
     * @return {?}
     */
    get labelCls() {
        return this._labelCls;
    }
    /**
     * @return {?}
     */
    setLabelClass() {
        this._labelCls = {
            [`${this.prefixCls}-picker-label`]: true,
            [`${this.prefixCls}-show-search`]: !!this.nzShowSearch,
            [`${this.prefixCls}-focused`]: !!this.nzShowSearch && this.isFocused && !this._inputValue
        };
    }
    /**
     * 箭头 样式
     * @return {?}
     */
    get arrowCls() {
        return this._arrowCls;
    }
    /**
     * @return {?}
     */
    setArrowClass() {
        this._arrowCls = {
            [`${this.prefixCls}-picker-arrow`]: true,
            [`${this.prefixCls}-picker-arrow-expand`]: this.menuVisible
        };
    }
    /**
     * 加载中图标 样式
     * @return {?}
     */
    get loadingCls() {
        return this._loadingCls;
    }
    /**
     * @return {?}
     */
    setLoadingClass() {
        this._loadingCls = {
            [`${this.prefixCls}-picker-arrow`]: true
        };
    }
    /**
     * 清除图标 样式
     * @return {?}
     */
    get clearCls() {
        return this._clearCls;
    }
    /**
     * @return {?}
     */
    setClearClass() {
        this._clearCls = {
            [`${this.prefixCls}-picker-clear`]: true
        };
    }
    /**
     * 输入框 样式
     * @return {?}
     */
    get inputCls() {
        return this._inputCls;
    }
    /**
     * @return {?}
     */
    setInputClass() {
        this._inputCls = {
            [`${this.prefixCls}-input`]: 1,
            [`${this.inputPrefixCls}-disabled`]: this.nzDisabled,
            [`${this.inputPrefixCls}-lg`]: this.nzSize === 'large',
            [`${this.inputPrefixCls}-sm`]: this.nzSize === 'small'
        };
    }
    /**
     * 浮层 样式
     * @return {?}
     */
    get menuCls() {
        return this._menuCls;
    }
    /**
     * @return {?}
     */
    setMenuClass() {
        this._menuCls = {
            [`${this.prefixCls}-menus`]: true,
            [`${this.prefixCls}-menus-hidden`]: !this.menuVisible,
            [`${this.nzMenuClassName}`]: this.nzMenuClassName
        };
    }
    /**
     * 浮层列 样式
     * @return {?}
     */
    get menuColumnCls() {
        return this._menuColumnCls;
    }
    /**
     * @return {?}
     */
    setMenuColumnClass() {
        this._menuColumnCls = {
            [`${this.prefixCls}-menu`]: true,
            [`${this.nzColumnClassName}`]: this.nzColumnClassName
        };
    }
    /**
     * 获取列中Option的样式
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    getOptionCls(option, index) {
        return {
            [`${this.prefixCls}-menu-item`]: true,
            [`${this.prefixCls}-menu-item-expand`]: !option.isLeaf,
            [`${this.prefixCls}-menu-item-active`]: this.isActivedOption(option, index),
            [`${this.prefixCls}-menu-item-disabled`]: option.disabled
        };
    }
    /**
     * prevent input change event
     * @param {?} event
     * @return {?}
     */
    handlerInputChange(event) {
        event.stopPropagation();
    }
    /**
     * input element blur
     * @param {?} event
     * @return {?}
     */
    handleInputBlur(event) {
        /*
            if (!this.nzShowSearch) {
              return;
            }
            */
        if (this.menuVisible) {
            this.focus(); // keep input has focus when menu opened
        }
        else {
            this.blur();
        }
    }
    /**
     * input element focus
     * @param {?} event
     * @return {?}
     */
    handleInputFocus(event) {
        /*
            if (!this.nzShowSearch) {
              return;
            }
            */
        this.focus();
        this.setLabelClass();
    }
    /**
     * @return {?}
     */
    hasInput() {
        return this.inputValue.length > 0;
    }
    /**
     * @return {?}
     */
    hasValue() {
        return this.value && this.value.length > 0;
    }
    /**
     * Whether to show input element placeholder
     * @return {?}
     */
    get showPlaceholder() {
        return !(this.hasInput() || this.hasValue());
    }
    /**
     * Whether the clear button is visible
     * @return {?}
     */
    get showClearIcon() {
        /** @type {?} */
        const isHasValue = this.hasValue();
        /** @type {?} */
        const isHasInput = this.hasInput();
        return this.nzAllowClear && !this.nzDisabled && (isHasValue || isHasInput);
    }
    /**
     * clear the input box and selected options
     * @param {?=} event
     * @return {?}
     */
    clearSelection(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        // this.isLabelRenderTemplate = false;
        // clear custom context
        this.labelRenderContext = {};
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.inputValue = '';
        this.setMenuVisible(false);
        // trigger change event
        this.onValueChange();
    }
    /**
     * @return {?}
     */
    buildDisplayLabel() {
        /** @type {?} */
        const selectedOptions = this.selectedOptions;
        /** @type {?} */
        const labels = selectedOptions.map(o => this.getOptionLabel(o));
        // 设置当前控件的显示值
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels, selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW &&
            keyCode !== UP_ARROW &&
            keyCode !== LEFT_ARROW &&
            keyCode !== RIGHT_ARROW &&
            keyCode !== ENTER &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            return;
        }
        if (this.inSearch && (keyCode === BACKSPACE ||
            keyCode === LEFT_ARROW ||
            keyCode === RIGHT_ARROW)) {
            return;
        }
        // Press any keys above to reopen menu
        if (!this.isMenuVisible() &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            this.setMenuVisible(true);
            return;
        }
        // Press ESC to close menu
        if (keyCode === ESCAPE) {
            // this.setMenuVisible(false); // already call by cdk-overlay detach
            return;
        }
        if (this.isMenuVisible()) {
            event.preventDefault();
            if (keyCode === DOWN_ARROW) {
                this.moveDown();
            }
            else if (keyCode === UP_ARROW) {
                this.moveUp();
            }
            else if (keyCode === LEFT_ARROW) {
                this.moveLeft();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.moveRight();
            }
            else if (keyCode === ENTER) {
                this.onEnter();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerClick(event) {
        if (this.nzDisabled) {
            return;
        }
        this.onTouched(); // set your control to 'touched'
        if (this.nzShowSearch) {
            this.focus();
        }
        if (this.isClickTiggerAction()) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseEnter(event) {
        if (this.nzDisabled) {
            return;
        }
        if (this.isPointerTiggerAction()) {
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseLeave(event) {
        if (this.nzDisabled) {
            return;
        }
        if (!this.isMenuVisible() || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isPointerTiggerAction()) {
            /** @type {?} */
            const mouseTarget = /** @type {?} */ (event.relatedTarget);
            /** @type {?} */
            const hostEl = this.el;
            /** @type {?} */
            const menuEl = this.menu && /** @type {?} */ (this.menu.nativeElement);
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))
            /*|| mouseTarget.parentElement.contains(menuEl)*/ ) {
                // 因为浮层的backdrop出现，暂时没有办法自动消失
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    }
    /**
     * @return {?}
     */
    isClickTiggerAction() {
        if (typeof this.nzTriggerAction === 'string') {
            return this.nzTriggerAction === 'click';
        }
        return this.nzTriggerAction.indexOf('click') !== -1;
    }
    /**
     * @return {?}
     */
    isPointerTiggerAction() {
        if (typeof this.nzTriggerAction === 'string') {
            return this.nzTriggerAction === 'hover';
        }
        return this.nzTriggerAction.indexOf('hover') !== -1;
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.blur();
        this.clearDelayTimer();
        this.setMenuVisible(false);
    }
    /**
     * @return {?}
     */
    clearDelayTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
    }
    /**
     * 显示或者隐藏菜单
     *
     * @param {?} visible true-显示，false-隐藏
     * @param {?} delay 延迟时间
     * @param {?=} setOpening
     * @return {?}
     */
    delaySetMenuVisible(visible, delay, setOpening = false) {
        this.clearDelayTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayTimer = setTimeout(() => {
                this.setMenuVisible(visible);
                this.clearDelayTimer();
                if (visible) {
                    setTimeout(() => {
                        this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    }
    /**
     * @return {?}
     */
    isMenuVisible() {
        return this.menuVisible;
    }
    /**
     * @param {?} menuVisible
     * @return {?}
     */
    setMenuVisible(menuVisible) {
        if (this.nzDisabled) {
            return;
        }
        if (this.menuVisible !== menuVisible) {
            this.menuVisible = menuVisible;
            // update class
            this.setClassMap();
            this.setArrowClass();
            this.setMenuClass();
            if (menuVisible) {
                this.beforeVisible();
            }
            this.nzVisibleChange.emit(menuVisible);
        }
    }
    /**
     * load init data if necessary
     * @return {?}
     */
    beforeVisible() {
        this.loadRootOptions();
    }
    /**
     * @return {?}
     */
    loadRootOptions() {
        if (!this.nzColumns.length) {
            /** @type {?} */
            const root = {};
            this.loadChildren(root, -1);
        }
    }
    /**
     * 获取Option的值，例如，可以指定labelProperty="name"来取Name
     * @param {?} option
     * @return {?}
     */
    getOptionLabel(option) {
        return option[this.nzLabelProperty || 'label'];
    }
    /**
     * 获取Option的值，例如，可以指定valueProperty="id"来取ID
     * @param {?} option
     * @return {?}
     */
    getOptionValue(option) {
        return option[this.nzValueProperty || 'value'];
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    isActivedOption(option, index) {
        /** @type {?} */
        const activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    }
    /**
     * 设置某列的激活的菜单选项
     *
     * @param {?} option 菜单选项
     * @param {?} index  选项所在的列组的索引
     * @param {?=} select 是否触发选择结点
     * @param {?=} loadChildren
     * @return {?}
     */
    setActiveOption(option, index, select = false, loadChildren = true) {
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[index] = option;
        // 当直接选择最后一级时，前面的选项要补全。例如，选择“城市”，则自动补全“国家”、“省份”
        for (let i = index - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
            }
        }
        // 截断多余的选项，如选择“省份”，则只会有“国家”、“省份”，去掉“城市”、“区县”
        if (index < this.activatedOptions.length - 1) {
            this.activatedOptions = this.activatedOptions.slice(0, index + 1);
        }
        // load children
        if (option.children && option.children.length) {
            option.isLeaf = false;
            option.children.forEach(child => child.parent = option);
            this.setColumnData(option.children, index + 1);
        }
        else if (!option.isLeaf && loadChildren) {
            this.loadChildren(option, index);
        }
        else {
            // clicking leaf node will remove any children columns
            if (index < this.nzColumns.length - 1) {
                this.nzColumns = this.nzColumns.slice(0, index + 1);
            }
        }
        // trigger select event, and display label
        if (select) {
            this.onSelectOption(option, index);
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    loadChildren(option, index, success, failure) {
        if (this.nzLoadData) {
            this.isLoading = index < 0;
            option.loading = true;
            this.nzLoadData(option, index).then(() => {
                option.loading = this.isLoading = false;
                if (option.children) {
                    option.children.forEach(child => child.parent = index < 0 ? undefined : option);
                    this.setColumnData(option.children, index + 1);
                }
                if (success) {
                    success();
                }
            }, () => {
                option.loading = this.isLoading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
            });
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    onSelectOption(option, index) {
        // trigger `nzSelect` event
        this.nzSelect.emit({ option, index });
        // 生成显示
        if (option.isLeaf || this.nzChangeOnSelect || this.isChangeOn(option, index)) {
            this.selectedOptions = this.activatedOptions;
            // 设置当前控件的显示值
            this.buildDisplayLabel();
            // 触发变更事件
            this.onValueChange();
        }
        // close menu if click on leaf
        if (option.isLeaf) {
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    }
    /**
     * 由用户来定义点击后是否变更
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    isChangeOn(option, index) {
        if (typeof this.nzChangeOn === 'function') {
            return this.nzChangeOn(option, index) === true;
        }
        return false;
    }
    /**
     * @param {?} options
     * @param {?} index
     * @return {?}
     */
    setColumnData(options, index) {
        if (!arrayEquals(this.nzColumns[index], options)) {
            this.nzColumns[index] = options;
            if (index < this.nzColumns.length - 1) {
                this.nzColumns = this.nzColumns.slice(0, index + 1);
            }
        }
    }
    /**
     * 鼠标点击选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    onOptionClick(option, index, event) {
        if (event) {
            event.preventDefault();
        }
        // Keep focused state for keyboard support
        this.el.focus();
        if (option && option.disabled) {
            return;
        }
        if (this.inSearch) {
            this.setSearchActiveOption(/** @type {?} */ (option), event);
        }
        else {
            this.setActiveOption(option, index, true);
        }
    }
    /**
     * 按下回车键时选择
     * @return {?}
     */
    onEnter() {
        /** @type {?} */
        const columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        const activeOption = this.activatedOptions[columnIndex];
        if (activeOption && !activeOption.disabled) {
            if (this.inSearch) {
                this.setSearchActiveOption(/** @type {?} */ (activeOption), null);
            }
            else {
                this.onSelectOption(activeOption, columnIndex);
            }
        }
    }
    /**
     * press `up` or `down` arrow to activate the sibling option.
     * @param {?} isUp
     * @return {?}
     */
    moveUpOrDown(isUp) {
        /** @type {?} */
        const columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        const activeOption = this.activatedOptions[columnIndex];
        /** @type {?} */
        const options = this.nzColumns[columnIndex] || [];
        /** @type {?} */
        const length = options.length;
        /** @type {?} */
        let nextIndex = -1;
        if (!activeOption) { // 该列还没有选中的选项
            // 该列还没有选中的选项
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            /** @type {?} */
            const nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.setActiveOption(nextOption, columnIndex);
            break;
        }
    }
    /**
     * @return {?}
     */
    moveUp() {
        this.moveUpOrDown(true);
    }
    /**
     * @return {?}
     */
    moveDown() {
        this.moveUpOrDown(false);
    }
    /**
     * press `left` arrow to remove the last selected option.
     * @return {?}
     */
    moveLeft() {
        /** @type {?} */
        const options = this.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    }
    /**
     * press `right` arrow to select the next column option.
     * @return {?}
     */
    moveRight() {
        /** @type {?} */
        const length = this.activatedOptions.length;
        /** @type {?} */
        const options = this.nzColumns[length];
        if (options && options.length) {
            /** @type {?} */
            const nextOpt = options.find(o => !o.disabled);
            if (nextOpt) {
                this.setActiveOption(nextOpt, length);
            }
        }
    }
    /**
     * 鼠标划入选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    onOptionMouseEnter(option, index, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelect(option, index, true);
        }
    }
    /**
     * 鼠标划出选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    onOptionMouseLeave(option, index, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelect(option, index, false);
        }
    }
    /**
     * @return {?}
     */
    clearDelaySelectTimer() {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    delaySelect(option, index, doSelect) {
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout(() => {
                // 鼠标滑入只展开，不进行选中操作
                this.setActiveOption(option, index);
                this.delaySelectTimer = null;
            }, 150);
        }
    }
    /**
     * @return {?}
     */
    getSubmitValue() {
        /** @type {?} */
        const values = [];
        this.selectedOptions.forEach(option => {
            values.push(this.getOptionValue(option));
        });
        return values;
    }
    /**
     * @return {?}
     */
    onValueChange() {
        /** @type {?} */
        const value = this.getSubmitValue();
        if (!arrayEquals(this.value, value)) {
            this.defaultValue = null; // clear the init-value
            this.value = value;
            this.onChange(value); // Angular need this
            if (value.length === 0) {
                this.nzClear.emit(); // first trigger `clear` and then `change`
            }
            this.nzSelectionChange.emit(this.selectedOptions);
            this.nzChange.emit(value);
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    findOption(option, index) {
        /** @type {?} */
        const options = this.nzColumns[index];
        if (options) {
            /** @type {?} */
            const value = typeof option === 'object' ? this.getOptionValue(option) : option;
            return options.find(o => value === this.getOptionValue(o));
        }
        return null;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    isLoaded(index) {
        return this.nzColumns[index] && this.nzColumns[index].length > 0;
    }
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    activateOnInit(index, value) {
        /** @type {?} */
        let option = this.findOption(value, index);
        if (!option) {
            option = typeof value === 'object' ? value : {
                [`${this.nzValueProperty || 'value'}`]: value,
                [`${this.nzLabelProperty || 'label'}`]: value
            };
        }
        this.setActiveOption(option, index, false, false);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    initOptions(index) {
        /** @type {?} */
        const vs = this.defaultValue;
        /** @type {?} */
        const load = () => {
            this.activateOnInit(index, vs[index]);
            if (index < vs.length - 1) {
                this.initOptions(index + 1);
            }
            if (index === vs.length - 1) {
                this.afterWriteValue();
            }
        };
        if (this.isLoaded(index) || !this.nzLoadData) {
            load();
        }
        else {
            /** @type {?} */
            const node = this.activatedOptions[index - 1] || {};
            this.loadChildren(node, index - 1, load, this.afterWriteValue);
        }
    }
    /**
     * @return {?}
     */
    afterWriteValue() {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    }
    /**
     * Write a new value to the element.
     *
     * \@Override (From ControlValueAccessor interface)
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        const vs = this.defaultValue = toArray(value);
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
        }
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
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    prepareSearchValue() {
        /** @type {?} */
        const results = [];
        /** @type {?} */
        const path = [];
        /** @type {?} */
        const defaultFilter = (inputValue, p) => {
            /** @type {?} */
            let flag = false;
            p.forEach(n => {
                /** @type {?} */
                const labelName = this.nzLabelProperty;
                if (n[labelName] && n[labelName].indexOf(inputValue) > -1) {
                    flag = true;
                }
            });
            return flag;
        };
        /** @type {?} */
        const filter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).filter
            ? (/** @type {?} */ (this.nzShowSearch)).filter
            : defaultFilter;
        /** @type {?} */
        const sorter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).sorter;
        /** @type {?} */
        const loopParent = (node, forceDisabled = false) => {
            /** @type {?} */
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach((sNode) => {
                if (!sNode.parent) {
                    sNode.parent = node;
                }
                /** 搜索的同时建立 parent 连接，因为用户直接搜索的话是没有建立连接的，会提升从叶子节点回溯的难度 */
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            });
            path.pop();
        };
        /** @type {?} */
        const loopChild = (node, forceDisabled = false) => {
            path.push(node);
            /** @type {?} */
            const cPath = Array.from(path);
            if (filter(this._inputValue, cPath)) {
                /** @type {?} */
                const disabled = forceDisabled || node.disabled;
                /** @type {?} */
                const option = {
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    [this.nzLabelProperty]: cPath.map(p => p.label).join(' / ')
                };
                results.push(option);
            }
            path.pop();
        };
        this.oldColumnsHolder[0].forEach(node => (node.isLeaf || !node.children || !node.children.length)
            ? loopChild(node)
            : loopParent(node));
        if (sorter) {
            results.sort((a, b) => sorter(a.path, b.path, this._inputValue));
        }
        this.nzColumns = [results];
    }
    /**
     * @param {?} str
     * @return {?}
     */
    renderSearchString(str) {
        return str.replace(new RegExp(this._inputValue, 'g'), `<span class="ant-cascader-menu-item-keyword">${this._inputValue}</span>`);
    }
    /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    setSearchActiveOption(result, event) {
        this.activatedOptions = [result];
        this.delaySetMenuVisible(false, 200);
        setTimeout(() => {
            this.inputValue = '';
            /** @type {?} */
            const index = result.path.length - 1;
            /** @type {?} */
            const destiNode = result.path[index];
            /** @type {?} */
            const mockClickParent = (node, cIndex) => {
                if (node && node.parent) {
                    mockClickParent(node.parent, cIndex - 1);
                }
                this.onOptionClick(node, cIndex, event);
            };
            mockClickParent(destiNode, index);
        }, 300);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // 设置样式
        this.setClassMap();
        this.setLabelClass();
        this.setArrowClass();
        this.setLoadingClass();
        this.setClearClass();
        this.setInputClass();
        this.setMenuClass();
        this.setMenuColumnClass();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearDelayTimer();
        this.clearDelaySelectTimer();
    }
}
NzCascaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-cascader,[nz-cascader]',
                preserveWhitespaces: false,
                animations: [
                    dropDownAnimation
                ],
                template: "<div\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  #trigger>\n  <div *ngIf=\"nzShowInput\">\n    <input #input\n      nz-input\n      [attr.autoComplete]=\"'off'\"\n      [attr.placeholder]=\"showPlaceholder ? nzPlaceHolder : null\"\n      [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n      [readonly]=\"!nzShowSearch\"\n      [disabled]=\"nzDisabled\"\n      [nzSize]=\"nzSize\"\n      [ngClass]=\"inputCls\"\n      [(ngModel)]=\"inputValue\"\n      (blur)=\"handleInputBlur($event)\"\n      (focus)=\"handleInputFocus($event)\"\n      (change)=\"handlerInputChange($event)\">\n    <i *ngIf=\"showClearIcon\"\n      nz-icon\n      type=\"close-circle\"\n      theme=\"fill\"\n      [ngClass]=\"clearCls\"\n      [attr.title]=\"nzClearText\"\n      (click)=\"clearSelection($event)\"></i>\n    <i *ngIf=\"nzShowArrow && !isLoading\"\n      nz-icon\n      type=\"down\"\n      [ngClass]=\"arrowCls\"></i>\n    <i *ngIf=\"isLoading\"\n      nz-icon\n      type=\"loading\"\n      [ngClass]=\"loadingCls\"></i>\n    <span [ngClass]=\"labelCls\">\n      <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container>\n      <ng-template #labelTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template>\n      </ng-template>\n    </span>\n  </div>\n  <ng-content></ng-content>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  (backdropClick)=\"closeMenu()\"\n  (detach)=\"closeMenu()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"menuVisible\">\n  <div #menu\n    [ngClass]=\"menuCls\" [ngStyle]=\"nzMenuStyle\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseleave)=\"onTriggerMouseLeave($event)\">\n    <ul *ngFor=\"let options of nzColumns; let i = index;\" [ngClass]=\"menuColumnCls\"\n      [style.height]=\"inSearch && !nzColumns[0].length ? 'auto': ''\" [style.width]=\"searchWidthStyle\">\n      <li *ngFor=\"let option of options\"\n        [attr.title]=\"option.title || getOptionLabel(option)\"\n        [ngClass]=\"getOptionCls(option, i)\"\n        (mouseenter)=\"onOptionMouseEnter(option, i, $event)\"\n        (mouseleave)=\"onOptionMouseLeave(option, i, $event)\"\n        (click)=\"onOptionClick(option, i, $event)\">\n        <ng-container *ngIf=\"inSearch\">\n          <span [innerHTML]=\"renderSearchString(getOptionLabel(option))\"></span>\n        </ng-container>\n        <ng-container *ngIf=\"!inSearch\">\n          {{ getOptionLabel(option) }}\n        </ng-container>\n        <span *ngIf=\"!option.isLeaf || option.children && option.children.length || option.loading\" class=\"ant-cascader-menu-item-expand-icon\">\n          <i nz-icon [type]=\"option.loading ? 'loading' : 'right'\"></i>\n        </span>\n      </li>\n      <li *ngIf=\"inSearch && !nzColumns[0].length\" class=\"ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled\">\n        Not Found\n      </li>\n    </ul>\n  </div>\n</ng-template>\n",
                providers: [
                    NzUpdateHostClassService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzCascaderComponent),
                        multi: true
                    }
                ],
                host: {
                    '[attr.tabIndex]': '"0"'
                },
                styles: [`.ant-cascader-menus {
      margin-top: 4px;
      margin-bottom: 4px;
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
    }`]
            }] }
];
/** @nocollapse */
NzCascaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService }
];
NzCascaderComponent.propDecorators = {
    nzLabelRender: [{ type: Input }],
    nzPrefixCls: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzShowInput: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzAllowClear: [{ type: Input }],
    nzAutoFocus: [{ type: Input }],
    nzShowArrow: [{ type: Input }],
    nzMenuClassName: [{ type: Input }],
    nzColumnClassName: [{ type: Input }],
    nzOptions: [{ type: Input }],
    nzChangeOnSelect: [{ type: Input }],
    nzClearText: [{ type: Input }],
    nzExpandTrigger: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzMenuStyle: [{ type: Input }],
    nzChangeOn: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzTriggerAction: [{ type: Input }],
    nzValueProperty: [{ type: Input }],
    nzLabelProperty: [{ type: Input }],
    nzLoadData: [{ type: Input }],
    nzVisibleChange: [{ type: Output }],
    nzChange: [{ type: Output }],
    nzSelectionChange: [{ type: Output }],
    nzSelect: [{ type: Output }],
    nzClear: [{ type: Output }],
    input: [{ type: ViewChild, args: ['input',] }],
    menu: [{ type: ViewChild, args: ['menu',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onTriggerClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onTriggerMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
    onTriggerMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
function NzCascaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCascaderComponent.prototype.allowClear;
    /** @type {?} */
    NzCascaderComponent.prototype.autoFocus;
    /** @type {?} */
    NzCascaderComponent.prototype.disabled;
    /** @type {?} */
    NzCascaderComponent.prototype.enableCache;
    /** @type {?} */
    NzCascaderComponent.prototype.showArrow;
    /** @type {?} */
    NzCascaderComponent.prototype.showInput;
    /** @type {?} */
    NzCascaderComponent.prototype.size;
    /** @type {?} */
    NzCascaderComponent.prototype.prefixCls;
    /** @type {?} */
    NzCascaderComponent.prototype.inputPrefixCls;
    /** @type {?} */
    NzCascaderComponent.prototype.menuClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.columnClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.changeOnSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.showSearch;
    /** @type {?} */
    NzCascaderComponent.prototype.defaultValue;
    /** @type {?} */
    NzCascaderComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzCascaderComponent.prototype.menuVisible;
    /** @type {?} */
    NzCascaderComponent.prototype.isLoading;
    /** @type {?} */
    NzCascaderComponent.prototype.isOpening;
    /** @type {?} */
    NzCascaderComponent.prototype._arrowCls;
    /** @type {?} */
    NzCascaderComponent.prototype._clearCls;
    /** @type {?} */
    NzCascaderComponent.prototype._inputCls;
    /** @type {?} */
    NzCascaderComponent.prototype._labelCls;
    /** @type {?} */
    NzCascaderComponent.prototype._loadingCls;
    /** @type {?} */
    NzCascaderComponent.prototype._menuCls;
    /** @type {?} */
    NzCascaderComponent.prototype._menuColumnCls;
    /** @type {?} */
    NzCascaderComponent.prototype.el;
    /** @type {?} */
    NzCascaderComponent.prototype.isFocused;
    /**
     * 选择选项后，渲染显示文本
     * @type {?}
     */
    NzCascaderComponent.prototype.labelRenderTpl;
    /** @type {?} */
    NzCascaderComponent.prototype.isLabelRenderTemplate;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderText;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderContext;
    /** @type {?} */
    NzCascaderComponent.prototype.value;
    /** @type {?} */
    NzCascaderComponent.prototype.selectedOptions;
    /** @type {?} */
    NzCascaderComponent.prototype.activatedOptions;
    /** @type {?} */
    NzCascaderComponent.prototype.nzColumns;
    /** @type {?} */
    NzCascaderComponent.prototype.delayTimer;
    /** @type {?} */
    NzCascaderComponent.prototype.delaySelectTimer;
    /**
     * 搜索相关的输入值
     * @type {?}
     */
    NzCascaderComponent.prototype._inputValue;
    /** @type {?} */
    NzCascaderComponent.prototype.onChange;
    /** @type {?} */
    NzCascaderComponent.prototype.onTouched;
    /** @type {?} */
    NzCascaderComponent.prototype.positions;
    /** @type {?} */
    NzCascaderComponent.prototype.searchWidthStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.oldColumnsHolder;
    /** @type {?} */
    NzCascaderComponent.prototype.oldActivatedOptions;
    /**
     * If cascader is in search mode.
     * @type {?}
     */
    NzCascaderComponent.prototype.inSearch;
    /**
     * Hover text for the clear icon
     * @type {?}
     */
    NzCascaderComponent.prototype.nzClearText;
    /**
     * Expand column item when click or hover, one of 'click' 'hover'
     * @type {?}
     */
    NzCascaderComponent.prototype.nzExpandTrigger;
    /**
     * Specify content to show when no result matches.
     * @type {?}
     */
    NzCascaderComponent.prototype.nzNotFoundContent;
    /**
     * Input placeholder
     * @type {?}
     */
    NzCascaderComponent.prototype.nzPlaceHolder;
    /**
     * Additional style of popup overlay
     * @type {?}
     */
    NzCascaderComponent.prototype.nzMenuStyle;
    /**
     * Change value on selection only if this function returns `true`
     * @type {?}
     */
    NzCascaderComponent.prototype.nzChangeOn;
    /**
     * Delay time to show when mouse enter, when `nzExpandTrigger` is `hover`.
     * @type {?}
     */
    NzCascaderComponent.prototype.nzMouseEnterDelay;
    /**
     * Delay time to hide when mouse enter, when `nzExpandTrigger` is `hover`.
     * @type {?}
     */
    NzCascaderComponent.prototype.nzMouseLeaveDelay;
    /**
     * Triggering mode: can be Array<'click'|'hover'>
     * @type {?}
     */
    NzCascaderComponent.prototype.nzTriggerAction;
    /**
     * Property name for getting `value` in the option
     * @type {?}
     */
    NzCascaderComponent.prototype.nzValueProperty;
    /**
     * Property name for getting `label` in the option
     * @type {?}
     */
    NzCascaderComponent.prototype.nzLabelProperty;
    /**
     * 异步加载数据
     * @type {?}
     */
    NzCascaderComponent.prototype.nzLoadData;
    /**
     * Event: emit on popup show or hide
     * @type {?}
     */
    NzCascaderComponent.prototype.nzVisibleChange;
    /**
     * Event: emit on values changed
     * @type {?}
     */
    NzCascaderComponent.prototype.nzChange;
    /**
     * Event: emit on values and selection changed
     * @type {?}
     */
    NzCascaderComponent.prototype.nzSelectionChange;
    /**
     * Event: emit on option selected, event data：{option: any, index: number}
     * @type {?}
     */
    NzCascaderComponent.prototype.nzSelect;
    /**
     * Event: emit on the clear button clicked
     * @type {?}
     */
    NzCascaderComponent.prototype.nzClear;
    /** @type {?} */
    NzCascaderComponent.prototype.input;
    /**
     * 浮层菜单
     * @type {?}
     */
    NzCascaderComponent.prototype.menu;
    /** @type {?} */
    NzCascaderComponent.prototype.elementRef;
    /** @type {?} */
    NzCascaderComponent.prototype.cdr;
    /** @type {?} */
    NzCascaderComponent.prototype.nzUpdateHostClassService;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWhILE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWxGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0FBRWpELGlCQUFvQixLQUFjOztJQUNoQyxJQUFJLEdBQUcsQ0FBTTtJQUNiLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQixHQUFHLEdBQUcsRUFBRSxDQUFDO0tBQ1Y7U0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNoQyxHQUFHLEdBQUcsQ0FBRSxLQUFLLENBQUUsQ0FBQztLQUNqQjtTQUFNO1FBQ0wsR0FBRyxHQUFHLEtBQUssQ0FBQztLQUNiO0lBQ0QsT0FBTyxHQUFHLENBQUM7Q0FDWjs7Ozs7OztBQUVELHFCQUF3QixNQUFXLEVB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QyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEQsS0FBSyxFQUFRLElBQUk7cUJBQ2xCO2lCQUNGO2dCQUNELElBQUksRUFBaUI7b0JBQ25CLGlCQUFpQixFQUFFLEtBQUs7aUJBQ3pCO3lCQUVHOzs7Ozs7O01BT0E7YUFFTDs7OztZQXZHQyxVQUFVO1lBRlYsaUJBQWlCO1lBbUJWLHdCQUF3Qjs7OzRCQW1MOUIsS0FBSzswQkFXTCxLQUFLO3lCQWtCTCxLQUFLO3FCQVlMLEtBQUs7MEJBWUwsS0FBSzsyQkFVTCxLQUFLOzJCQWlCTCxLQUFLOzBCQVVMLEtBQUs7MEJBVUwsS0FBSzs4QkFVTCxLQUFLO2dDQVdMLEtBQUs7d0JBV0wsS0FBSzsrQkFnQkwsS0FBSzswQkFVTCxLQUFLOzhCQUdMLEtBQUs7Z0NBR0wsS0FBSzs0QkFHTCxLQUFLOzBCQUdMLEtBQUs7eUJBR0wsS0FBSztnQ0FHTCxLQUFLO2dDQUdMLEtBQUs7OEJBR0wsS0FBSzs4QkFHTCxLQUFLOzhCQUdMLEtBQUs7eUJBR0wsS0FBSzs4QkFHTCxNQUFNO3VCQUdOLE1BQU07Z0NBR04sTUFBTTt1QkFLTixNQUFNO3NCQU1OLE1BQU07b0JBRU4sU0FBUyxTQUFDLE9BQU87bUJBRWpCLFNBQVMsU0FBQyxNQUFNO3dCQW9PaEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFFLFFBQVEsQ0FBRTs2QkFrRHBDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUU7a0NBZWxDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUU7a0NBVXZDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQkFDS1NQQUNFLCBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xuXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuZnVuY3Rpb24gdG9BcnJheTxUPih2YWx1ZTogVCB8IFRbXSk6IFRbXSB7XG4gIGxldCByZXQ6IFRbXTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXQgPSBbXTtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXQgPSBbIHZhbHVlIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0ID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gYXJyYXlFcXVhbHM8VD4oYXJyYXkxOiBUW10sIGFycmF5MjogVFtdKTogYm9vbGVhbiB7XG4gIGlmICghYXJyYXkxIHx8ICFhcnJheTIgfHwgYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IGFycmF5MS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXkxWyBpIF0gIT09IGFycmF5MlsgaSBdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5jb25zdCBkZWZhdWx0RGlzcGxheVJlbmRlciA9IGxhYmVsID0+IGxhYmVsLmpvaW4oJyAvICcpO1xuXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlciA9ICdjbGljaycgfCAnaG92ZXInO1xuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclRyaWdnZXJUeXBlID0gJ2NsaWNrJyB8ICdob3Zlcic7XG5leHBvcnQgdHlwZSBOekNhc2NhZGVyU2l6ZSA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2RlZmF1bHQnIDtcblxuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlck9wdGlvbiB7XG4gIHZhbHVlPzogYW55O1xuICBsYWJlbD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIGlzTGVhZj86IGJvb2xlYW47XG4gIHBhcmVudD86IENhc2NhZGVyT3B0aW9uO1xuICBjaGlsZHJlbj86IENhc2NhZGVyT3B0aW9uW107XG5cbiAgWyBrZXk6IHN0cmluZyBdOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FzY2FkZXJTZWFyY2hPcHRpb24gZXh0ZW5kcyBDYXNjYWRlck9wdGlvbiB7XG4gIHBhdGg6IENhc2NhZGVyT3B0aW9uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpTaG93U2VhcmNoT3B0aW9ucyB7XG4gIGZpbHRlcj8oaW5wdXRWYWx1ZTogc3RyaW5nLCBwYXRoOiBDYXNjYWRlck9wdGlvbltdKTogYm9vbGVhbjtcblxuICBzb3J0ZXI/KGE6IENhc2NhZGVyT3B0aW9uW10sIGI6IENhc2NhZGVyT3B0aW9uW10sIGlucHV0VmFsdWU6IHN0cmluZyk6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1jYXNjYWRlcixbbnotY2FzY2FkZXJdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICBkcm9wRG93bkFuaW1hdGlvblxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jYXNjYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYXNjYWRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbYXR0ci50YWJJbmRleF0nOiAnXCIwXCInXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICAgIGAuYW50LWNhc2NhZGVyLW1lbnVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIGFsbG93Q2xlYXIgPSB0cnVlO1xuICBwcml2YXRlIGF1dG9Gb2N1cyA9IGZhbHNlO1xuICBwcml2YXRlIGRpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZW5hYmxlQ2FjaGUgPSB0cnVlO1xuICBwcml2YXRlIHNob3dBcnJvdyA9IHRydWU7XG4gIHByaXZhdGUgc2hvd0lucHV0ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzaXplOiBOekNhc2NhZGVyU2l6ZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWNhc2NhZGVyJztcbiAgcHJpdmF0ZSBpbnB1dFByZWZpeENscyA9ICdhbnQtaW5wdXQnO1xuICBwcml2YXRlIG1lbnVDbGFzc05hbWU7XG4gIHByaXZhdGUgY29sdW1uQ2xhc3NOYW1lO1xuICBwcml2YXRlIGNoYW5nZU9uU2VsZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgc2hvd1NlYXJjaDogYm9vbGVhbiB8IE56U2hvd1NlYXJjaE9wdGlvbnM7XG4gIHByaXZhdGUgZGVmYXVsdFZhbHVlOiBhbnlbXTtcblxuICBwdWJsaWMgZHJvcERvd25Qb3NpdGlvbiA9ICdib3R0b20nO1xuICBwdWJsaWMgbWVudVZpc2libGUgPSBmYWxzZTtcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIGlzT3BlbmluZyA9IGZhbHNlO1xuXG4gIC8vIOWGhemDqOagt+W8j1xuICBwcml2YXRlIF9hcnJvd0NsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfY2xlYXJDbHM6IHsgWyBuYW1lOiBzdHJpbmcgXTogYW55IH07XG4gIHByaXZhdGUgX2lucHV0Q2xzOiB7IFsgbmFtZTogc3RyaW5nIF06IGFueSB9O1xuICBwcml2YXRlIF9sYWJlbENsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfbG9hZGluZ0NsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfbWVudUNsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfbWVudUNvbHVtbkNsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcblxuICBwdWJsaWMgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBpc0ZvY3VzZWQgPSBmYWxzZTtcblxuICAvKiog6YCJ5oup6YCJ6aG55ZCO77yM5riy5p+T5pi+56S65paH5pysICovXG4gIHByaXZhdGUgbGFiZWxSZW5kZXJUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIHB1YmxpYyBpc0xhYmVsUmVuZGVyVGVtcGxhdGUgPSBmYWxzZTtcbiAgcHVibGljIGxhYmVsUmVuZGVyVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgbGFiZWxSZW5kZXJDb250ZXh0OiBhbnkgPSB7fTtcblxuICAvLyDlvZPliY3lgLxcbiAgcHJpdmF0ZSB2YWx1ZTogYW55W107XG4gIC8vIOW3sumAieaLqeeahOmAiemhueihqOekuuW9k+WJjeW3suehruiupOeahOmAiemhue+8mnNlbGVjdGlvbiB3aWxsIHRyaWdnZXIgdmFsdWUgY2hhbmdlXG4gIHByaXZhdGUgc2VsZWN0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XG4gIC8vIOW3sua/gOa0u+eahOmAiemhueihqOekuumAmui/h+mUruebmOaWueWQkemUrumAieaLqeeahOmAiemhue+8jOW5tuacquacgOe7iOehruiupO+8iOmZpOmdnuaMiUVOVEVS6ZSu77yJ77yaYWN0aXZhY3Rpb24gd2lsbCBub3QgdHJpZ2dlciB2YWx1ZSBjaGFuZ2VcbiAgcHJpdmF0ZSBhY3RpdmF0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XG4gIC8vIOihqOekuuW9k+WJjeiPnOWNleeahOaVsOaNruWIl++8mmFsbCBkYXRhIGNvbHVtbnNcbiAgcHVibGljIG56Q29sdW1uczogQ2FzY2FkZXJPcHRpb25bXVtdID0gW107XG5cbiAgLy8g5pi+56S65oiW6ZqQ6JeP6I+c5Y2V6K6h5pe25ZmoXG4gIHByaXZhdGUgZGVsYXlUaW1lcjogYW55O1xuICBwcml2YXRlIGRlbGF5U2VsZWN0VGltZXI6IGFueTtcblxuICAvKiog5pCc57Si55u45YWz55qE6L6T5YWl5YC8ICovXG4gIHByaXZhdGUgX2lucHV0VmFsdWUgPSAnJztcbiAgZ2V0IGlucHV0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRWYWx1ZTtcbiAgfVxuXG4gIHNldCBpbnB1dFZhbHVlKGlucHV0VmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0VmFsdWUgPSBpbnB1dFZhbHVlO1xuICAgIGNvbnN0IHdpbGxCZUluU2VhcmNoID0gISFpbnB1dFZhbHVlO1xuXG4gICAgLy8g5pCc57Si54q25oCB5Y+Y5Yqo5LmL5YmN77yM5aaC6KaB6L+b5YWl5YiZ6KaB5L+d55WZ5LmL5YmN5r+A5rS76YCJ6aG555qE5b+r54Wn77yM6YCA5Ye65pCc57Si54q25oCB6KaB6L+Y5Y6f6K+l5b+r54WnXG4gICAgaWYgKCF0aGlzLmluU2VhcmNoICYmIHdpbGxCZUluU2VhcmNoKSB7XG4gICAgICB0aGlzLm9sZEFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5TZWFyY2ggJiYgIXdpbGxCZUluU2VhcmNoKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLm9sZEFjdGl2YXRlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgLy8g5pCc57Si54q25oCB5Y+Y5pu05LmL5ZCOXG4gICAgdGhpcy5pblNlYXJjaCA9ICEhd2lsbEJlSW5TZWFyY2g7XG4gICAgaWYgKHRoaXMuaW5TZWFyY2gpIHtcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gJyc7XG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hWYWx1ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zaG93U2VhcmNoKSB7XG4gICAgICAgIHRoaXMubnpDb2x1bW5zID0gdGhpcy5vbGRDb2x1bW5zSG9sZGVyO1xuICAgICAgfVxuICAgICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xuICAgICAgdGhpcy5zZWFyY2hXaWR0aFN0eWxlID0gJyc7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8vIG5nTW9kZWwgQWNjZXNzXG4gIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsgLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMgXTtcblxuICAvKiogRGlzcGxheSBSZW5kZXIgbmdUZW1wbGF0ZSAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpMYWJlbFJlbmRlcih2YWx1ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMubGFiZWxSZW5kZXJUcGwgPSB2YWx1ZTtcbiAgICB0aGlzLmlzTGFiZWxSZW5kZXJUZW1wbGF0ZSA9ICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgfVxuXG4gIGdldCBuekxhYmVsUmVuZGVyKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxhYmVsUmVuZGVyVHBsO1xuICB9XG5cbiAgLyoqIHByZWZpeENscyAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpQcmVmaXhDbHMocHJlZml4Q2xzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByZWZpeENscyA9IHByZWZpeENscztcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5zZXRMYWJlbENsYXNzKCk7XG4gICAgdGhpcy5zZXRBcnJvd0NsYXNzKCk7XG4gICAgdGhpcy5zZXRMb2FkaW5nQ2xhc3MoKTtcbiAgICB0aGlzLnNldENsZWFyQ2xhc3MoKTtcbiAgICB0aGlzLnNldElucHV0Q2xhc3MoKTtcbiAgICB0aGlzLnNldE1lbnVDbGFzcygpO1xuICAgIHRoaXMuc2V0TWVudUNvbHVtbkNsYXNzKCk7XG4gIH1cblxuICBnZXQgbnpQcmVmaXhDbHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhDbHM7XG4gIH1cblxuICAvKiogV2hldGhlciBpcyBkaXNhYmxlZCAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnNldElucHV0Q2xhc3MoKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIElucHV0IHNpemUsIG9uZSBvZiBgbGFyZ2VgIGBkZWZhdWx0YCBgc21hbGxgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpemUodmFsdWU6IE56Q2FzY2FkZXJTaXplKSB7XG4gICAgdGhpcy5zaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuc2V0SW5wdXRDbGFzcygpO1xuICB9XG5cbiAgZ2V0IG56U2l6ZSgpOiBOekNhc2NhZGVyU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHNob3cgaW5wdXQgYm94LiBEZWZhdWx0cyB0byBgdHJ1ZWAuICovXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dJbnB1dCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dJbnB1dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93SW5wdXQ7XG4gIH1cblxuICAvKiogV2hldGhlciBjYW4gc2VhcmNoLiBEZWZhdWx0cyB0byBgZmFsc2VgLiAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpTaG93U2VhcmNoKHZhbHVlOiBib29sZWFuIHwgTnpTaG93U2VhcmNoT3B0aW9ucykge1xuICAgIHRoaXMuc2hvd1NlYXJjaCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56U2hvd1NlYXJjaCgpOiBib29sZWFuIHwgTnpTaG93U2VhcmNoT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1NlYXJjaDtcbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2hXaWR0aFN0eWxlOiBzdHJpbmc7XG4gIHByaXZhdGUgb2xkQ29sdW1uc0hvbGRlcjtcbiAgcHJpdmF0ZSBvbGRBY3RpdmF0ZWRPcHRpb25zO1xuXG4gIC8qKiBJZiBjYXNjYWRlciBpcyBpbiBzZWFyY2ggbW9kZS4gKi9cbiAgcHVibGljIGluU2VhcmNoID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgYWxsb3cgY2xlYXIuIERlZmF1bHRzIHRvIGB0cnVlYC4gKi9cbiAgQElucHV0KClcbiAgc2V0IG56QWxsb3dDbGVhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsb3dDbGVhciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpBbGxvd0NsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFsbG93Q2xlYXI7XG4gIH1cblxuICAvKiogV2hldGhlciBhdXRvIGZvY3VzLiAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpBdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmF1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpBdXRvRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0b0ZvY3VzO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdG8gc2hvdyBhcnJvdyAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpTaG93QXJyb3codmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dBcnJvdyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93QXJyb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd0Fycm93O1xuICB9XG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3NOYW1lIG9mIHBvcHVwIG92ZXJsYXkgKi9cbiAgQElucHV0KClcbiAgc2V0IG56TWVudUNsYXNzTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZW51Q2xhc3NOYW1lID0gdmFsdWU7XG4gICAgdGhpcy5zZXRNZW51Q2xhc3MoKTtcbiAgfVxuXG4gIGdldCBuek1lbnVDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZW51Q2xhc3NOYW1lO1xuICB9XG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3NOYW1lIG9mIHBvcHVwIG92ZXJsYXkgY29sdW1uICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekNvbHVtbkNsYXNzTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2x1bW5DbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldE1lbnVDb2x1bW5DbGFzcygpO1xuICB9XG5cbiAgZ2V0IG56Q29sdW1uQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uQ2xhc3NOYW1lO1xuICB9XG5cbiAgLyoqIE9wdGlvbnMgZm9yIGZpcnN0IGNvbHVtbiwgc3ViIGNvbHVtbiB3aWxsIGJlIGxvYWQgYXN5bmMgKi9cbiAgQElucHV0KCkgc2V0IG56T3B0aW9ucyhvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdIHwgbnVsbCkge1xuICAgIHRoaXMub2xkQ29sdW1uc0hvbGRlciA9IHRoaXMubnpDb2x1bW5zID0gb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA/IFsgb3B0aW9ucyBdIDogW107XG4gICAgaWYgKCF0aGlzLmluU2VhcmNoKSB7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUgJiYgdGhpcy5uekNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMoMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaFZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56T3B0aW9ucygpOiBDYXNjYWRlck9wdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5uekNvbHVtbnNbIDAgXTtcbiAgfVxuXG4gIC8qKiBDaGFuZ2UgdmFsdWUgb24gZWFjaCBzZWxlY3Rpb24gaWYgc2V0IHRvIHRydWUgKi9cbiAgQElucHV0KClcbiAgc2V0IG56Q2hhbmdlT25TZWxlY3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNoYW5nZU9uU2VsZWN0ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekNoYW5nZU9uU2VsZWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZU9uU2VsZWN0O1xuICB9XG5cbiAgLyoqIEhvdmVyIHRleHQgZm9yIHRoZSBjbGVhciBpY29uICovXG4gIEBJbnB1dCgpIG56Q2xlYXJUZXh0ID0gJ0NsZWFyJztcblxuICAvKiogRXhwYW5kIGNvbHVtbiBpdGVtIHdoZW4gY2xpY2sgb3IgaG92ZXIsIG9uZSBvZiAnY2xpY2snICdob3ZlcicgKi9cbiAgQElucHV0KCkgbnpFeHBhbmRUcmlnZ2VyOiBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlciA9ICdjbGljayc7XG5cbiAgLyoqIFNwZWNpZnkgY29udGVudCB0byBzaG93IHdoZW4gbm8gcmVzdWx0IG1hdGNoZXMuICovXG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50ID0gJ05vdCBGb3VuZCc7XG5cbiAgLyoqIElucHV0IHBsYWNlaG9sZGVyICovXG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXIgPSAnUGxlYXNlIHNlbGVjdCc7XG5cbiAgLyoqIEFkZGl0aW9uYWwgc3R5bGUgb2YgcG9wdXAgb3ZlcmxheSAqL1xuICBASW5wdXQoKSBuek1lbnVTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZzsgfTtcblxuICAvKiogQ2hhbmdlIHZhbHVlIG9uIHNlbGVjdGlvbiBvbmx5IGlmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAgKi9cbiAgQElucHV0KCkgbnpDaGFuZ2VPbjogKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpID0+IGJvb2xlYW47XG5cbiAgLyoqIERlbGF5IHRpbWUgdG8gc2hvdyB3aGVuIG1vdXNlIGVudGVyLCB3aGVuIGBuekV4cGFuZFRyaWdnZXJgIGlzIGBob3ZlcmAuICovXG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5ID0gMTUwOyAvLyBtc1xuXG4gIC8qKiBEZWxheSB0aW1lIHRvIGhpZGUgd2hlbiBtb3VzZSBlbnRlciwgd2hlbiBgbnpFeHBhbmRUcmlnZ2VyYCBpcyBgaG92ZXJgLiAqL1xuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheSA9IDE1MDsgLy8gbXNcblxuICAvKiogVHJpZ2dlcmluZyBtb2RlOiBjYW4gYmUgQXJyYXk8J2NsaWNrJ3wnaG92ZXInPiAqL1xuICBASW5wdXQoKSBuelRyaWdnZXJBY3Rpb246IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSB8IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdID0gWyAnY2xpY2snIF07XG5cbiAgLyoqIFByb3BlcnR5IG5hbWUgZm9yIGdldHRpbmcgYHZhbHVlYCBpbiB0aGUgb3B0aW9uICovXG4gIEBJbnB1dCgpIG56VmFsdWVQcm9wZXJ0eSA9ICd2YWx1ZSc7XG5cbiAgLyoqIFByb3BlcnR5IG5hbWUgZm9yIGdldHRpbmcgYGxhYmVsYCBpbiB0aGUgb3B0aW9uICovXG4gIEBJbnB1dCgpIG56TGFiZWxQcm9wZXJ0eSA9ICdsYWJlbCc7XG5cbiAgLyoqIOW8guatpeWKoOi9veaVsOaNriAqL1xuICBASW5wdXQoKSBuekxvYWREYXRhOiAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGluZGV4PzogbnVtYmVyKSA9PiBQcm9taXNlTGlrZTxhbnk+O1xuXG4gIC8qKiBFdmVudDogZW1pdCBvbiBwb3B1cCBzaG93IG9yIGhpZGUgKi9cbiAgQE91dHB1dCgpIG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKiogRXZlbnQ6IGVtaXQgb24gdmFsdWVzIGNoYW5nZWQgKi9cbiAgQE91dHB1dCgpIG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICAvKiogRXZlbnQ6IGVtaXQgb24gdmFsdWVzIGFuZCBzZWxlY3Rpb24gY2hhbmdlZCAqL1xuICBAT3V0cHV0KCkgbnpTZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhc2NhZGVyT3B0aW9uW10+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50OiBlbWl0IG9uIG9wdGlvbiBzZWxlY3RlZCwgZXZlbnQgZGF0Ye+8mntvcHRpb246IGFueSwgaW5kZXg6IG51bWJlcn1cbiAgICovXG4gIEBPdXRwdXQoKSBuelNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sXG4gICAgaW5kZXg6IG51bWJlclxuICB9PigpO1xuXG4gIC8qKiBFdmVudDogZW1pdCBvbiB0aGUgY2xlYXIgYnV0dG9uIGNsaWNrZWQgKi9cbiAgQE91dHB1dCgpIG56Q2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dDogRWxlbWVudFJlZjtcbiAgLyoqIOa1ruWxguiPnOWNlSAqL1xuICBAVmlld0NoaWxkKCdtZW51JykgbWVudTogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgb25Qb3NpdGlvbkNoYW5nZShwb3NpdGlvbjogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZID09PSAnYm90dG9tJyA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgaWYgKHRoaXMuZHJvcERvd25Qb3NpdGlvbiAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5wcmVmaXhDbHN9LWlucHV0YCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZm9jdXMpIHtcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnByZWZpeENsc30taW5wdXRgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5ibHVyKSB7XG4gICAgICAgIGlucHV0LmJsdXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWwuYmx1cigpO1xuICAgICAgfVxuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICAgIHRoaXMuc2V0TGFiZWxDbGFzcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfWAgXSAgICAgICAgICAgICAgICAgIDogMSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlcmAgXSAgICAgICAgICAgOiAxLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbGdgIF0gICAgICAgICAgICAgICA6IHRoaXMubnpTaXplID09PSAnbGFyZ2UnLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc21gIF0gICAgICAgICAgICAgICA6IHRoaXMubnpTaXplID09PSAnc21hbGwnLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLWRpc2FibGVkYCBdICA6IHRoaXMuZGlzYWJsZWQsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1mb2N1c2VkYCBdICAgICAgICAgIDogdGhpcy5pc0ZvY3VzZWQsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItb3BlbmAgXSAgICAgIDogdGhpcy5tZW51VmlzaWJsZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci13aXRoLXZhbHVlYCBdOiB0aGlzLmlucHV0VmFsdWUgJiYgdGhpcy5pbnB1dFZhbHVlLmxlbmd0aFxuICAgIH07XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIC8qKiDmoIfnrb4g5qC35byPICovXG4gIHB1YmxpYyBnZXQgbGFiZWxDbHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxDbHM7XG4gIH1cblxuICBwcml2YXRlIHNldExhYmVsQ2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5fbGFiZWxDbHMgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItbGFiZWxgIF06IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1zaG93LXNlYXJjaGAgXSA6ICEhdGhpcy5uelNob3dTZWFyY2gsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1mb2N1c2VkYCBdICAgICA6ICEhdGhpcy5uelNob3dTZWFyY2ggJiYgdGhpcy5pc0ZvY3VzZWQgJiYgIXRoaXMuX2lucHV0VmFsdWVcbiAgICB9O1xuICB9XG5cbiAgLyoqIOeureWktCDmoLflvI8gKi9cbiAgcHVibGljIGdldCBhcnJvd0NscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9hcnJvd0NscztcbiAgfVxuXG4gIHByaXZhdGUgc2V0QXJyb3dDbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9hcnJvd0NscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1hcnJvd2AgXSAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItYXJyb3ctZXhwYW5kYCBdOiB0aGlzLm1lbnVWaXNpYmxlXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDliqDovb3kuK3lm77moIcg5qC35byPICovXG4gIHB1YmxpYyBnZXQgbG9hZGluZ0NscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nQ2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRMb2FkaW5nQ2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5fbG9hZGluZ0NscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1hcnJvd2AgXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICAvKiog5riF6Zmk5Zu+5qCHIOagt+W8jyAqL1xuICBwdWJsaWMgZ2V0IGNsZWFyQ2xzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsZWFyQ2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGVhckNsYXNzKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsZWFyQ2xzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLWNsZWFyYCBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDovpPlhaXmoYYg5qC35byPICovXG4gIHB1YmxpYyBnZXQgaW5wdXRDbHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRDbHM7XG4gIH1cblxuICBwcml2YXRlIHNldElucHV0Q2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5faW5wdXRDbHMgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pbnB1dGAgXSAgICAgICAgOiAxLFxuICAgICAgWyBgJHt0aGlzLmlucHV0UHJlZml4Q2xzfS1kaXNhYmxlZGAgXTogdGhpcy5uekRpc2FibGVkLFxuICAgICAgWyBgJHt0aGlzLmlucHV0UHJlZml4Q2xzfS1sZ2AgXSAgICAgIDogdGhpcy5uelNpemUgPT09ICdsYXJnZScsXG4gICAgICBbIGAke3RoaXMuaW5wdXRQcmVmaXhDbHN9LXNtYCBdICAgICAgOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJ1xuICAgIH07XG4gIH1cblxuICAvKiog5rWu5bGCIOagt+W8jyAqL1xuICBwdWJsaWMgZ2V0IG1lbnVDbHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWVudUNscztcbiAgfVxuXG4gIHByaXZhdGUgc2V0TWVudUNsYXNzKCk6IHZvaWQge1xuICAgIHRoaXMuX21lbnVDbHMgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1tZW51c2AgXSAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1tZW51cy1oaWRkZW5gIF06ICF0aGlzLm1lbnVWaXNpYmxlLFxuICAgICAgWyBgJHt0aGlzLm56TWVudUNsYXNzTmFtZX1gIF0gICAgICAgOiB0aGlzLm56TWVudUNsYXNzTmFtZVxuICAgIH07XG4gIH1cblxuICAvKiog5rWu5bGC5YiXIOagt+W8jyAqL1xuICBwdWJsaWMgZ2V0IG1lbnVDb2x1bW5DbHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWVudUNvbHVtbkNscztcbiAgfVxuXG4gIHByaXZhdGUgc2V0TWVudUNvbHVtbkNsYXNzKCk6IHZvaWQge1xuICAgIHRoaXMuX21lbnVDb2x1bW5DbHMgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1tZW51YCBdICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLm56Q29sdW1uQ2xhc3NOYW1lfWAgXTogdGhpcy5uekNvbHVtbkNsYXNzTmFtZVxuICAgIH07XG4gIH1cblxuICAvKiog6I635Y+W5YiX5LitT3B0aW9u55qE5qC35byPICovXG4gIHB1YmxpYyBnZXRPcHRpb25DbHMob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnUtaXRlbWAgXSAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnUtaXRlbS1leHBhbmRgIF0gIDogIW9wdGlvbi5pc0xlYWYsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1tZW51LWl0ZW0tYWN0aXZlYCBdICA6IHRoaXMuaXNBY3RpdmVkT3B0aW9uKG9wdGlvbiwgaW5kZXgpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudS1pdGVtLWRpc2FibGVkYCBdOiBvcHRpb24uZGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgLyoqIHByZXZlbnQgaW5wdXQgY2hhbmdlIGV2ZW50ICovXG4gIHB1YmxpYyBoYW5kbGVySW5wdXRDaGFuZ2UoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvKiogaW5wdXQgZWxlbWVudCBibHVyICovXG4gIHB1YmxpYyBoYW5kbGVJbnB1dEJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLypcbiAgICBpZiAoIXRoaXMubnpTaG93U2VhcmNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICovXG4gICAgaWYgKHRoaXMubWVudVZpc2libGUpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTsgLy8ga2VlcCBpbnB1dCBoYXMgZm9jdXMgd2hlbiBtZW51IG9wZW5lZFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICAvKiogaW5wdXQgZWxlbWVudCBmb2N1cyAqL1xuICBwdWJsaWMgaGFuZGxlSW5wdXRGb2N1cyhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAvKlxuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKi9cbiAgICB0aGlzLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRMYWJlbENsYXNzKCk7XG4gIH1cblxuICBwcml2YXRlIGhhc0lucHV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdG8gc2hvdyBpbnB1dCBlbGVtZW50IHBsYWNlaG9sZGVyICovXG4gIHB1YmxpYyBnZXQgc2hvd1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKHRoaXMuaGFzSW5wdXQoKSB8fCB0aGlzLmhhc1ZhbHVlKCkpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNsZWFyIGJ1dHRvbiBpcyB2aXNpYmxlICovXG4gIHB1YmxpYyBnZXQgc2hvd0NsZWFySWNvbigpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0hhc1ZhbHVlID0gdGhpcy5oYXNWYWx1ZSgpO1xuICAgIGNvbnN0IGlzSGFzSW5wdXQgPSB0aGlzLmhhc0lucHV0KCk7XG4gICAgcmV0dXJuIHRoaXMubnpBbGxvd0NsZWFyICYmICF0aGlzLm56RGlzYWJsZWQgJiYgKGlzSGFzVmFsdWUgfHwgaXNIYXNJbnB1dCk7XG4gIH1cblxuICAvKiogY2xlYXIgdGhlIGlucHV0IGJveCBhbmQgc2VsZWN0ZWQgb3B0aW9ucyAqL1xuICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gJyc7XG4gICAgLy8gdGhpcy5pc0xhYmVsUmVuZGVyVGVtcGxhdGUgPSBmYWxzZTtcbiAgICAvLyBjbGVhciBjdXN0b20gY29udGV4dFxuICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0ge307XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcblxuICAgIC8vIHRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRGlzcGxheUxhYmVsKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zO1xuICAgIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBzZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5nZXRPcHRpb25MYWJlbChvKSk7XG4gICAgLy8g6K6+572u5b2T5YmN5o6n5Lu255qE5pi+56S65YC8XG4gICAgaWYgKHRoaXMuaXNMYWJlbFJlbmRlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHsgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSBkZWZhdWx0RGlzcGxheVJlbmRlci5jYWxsKHRoaXMsIGxhYmVscywgc2VsZWN0ZWRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyAnJGV2ZW50JyBdKVxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgaWYgKGtleUNvZGUgIT09IERPV05fQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IFVQX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBMRUZUX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBSSUdIVF9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gRU5URVIgJiZcbiAgICAgIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJlxuICAgICAga2V5Q29kZSAhPT0gRVNDQVBFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5TZWFyY2ggJiYgKFxuICAgICAga2V5Q29kZSA9PT0gQkFDS1NQQUNFIHx8XG4gICAgICBrZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8XG4gICAgICBrZXlDb2RlID09PSBSSUdIVF9BUlJPV1xuICAgICkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmVzcyBhbnkga2V5cyBhYm92ZSB0byByZW9wZW4gbWVudVxuICAgIGlmICghdGhpcy5pc01lbnVWaXNpYmxlKCkgJiZcbiAgICAgIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJlxuICAgICAga2V5Q29kZSAhPT0gRVNDQVBFKSB7XG4gICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBQcmVzcyBFU0MgdG8gY2xvc2UgbWVudVxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEUpIHtcbiAgICAgIC8vIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpOyAvLyBhbHJlYWR5IGNhbGwgYnkgY2RrLW92ZXJsYXkgZGV0YWNoXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNNZW51VmlzaWJsZSgpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlRG93bigpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVVcCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgICAgdGhpcy5vbkVudGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbICckZXZlbnQnIF0pXG4gIHB1YmxpYyBvblRyaWdnZXJDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vblRvdWNoZWQoKTsgLy8gc2V0IHlvdXIgY29udHJvbCB0byAndG91Y2hlZCdcbiAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NsaWNrVGlnZ2VyQWN0aW9uKCkpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSghdGhpcy5tZW51VmlzaWJsZSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJywgWyAnJGV2ZW50JyBdKVxuICBwdWJsaWMgb25UcmlnZ2VyTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNQb2ludGVyVGlnZ2VyQWN0aW9uKCkpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSh0cnVlLCB0aGlzLm56TW91c2VFbnRlckRlbGF5LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyAnJGV2ZW50JyBdKVxuICBwdWJsaWMgb25UcmlnZ2VyTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzTWVudVZpc2libGUoKSB8fCB0aGlzLmlzT3BlbmluZykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNQb2ludGVyVGlnZ2VyQWN0aW9uKCkpIHtcbiAgICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGhvc3RFbCA9IHRoaXMuZWw7XG4gICAgICBjb25zdCBtZW51RWwgPSB0aGlzLm1lbnUgJiYgdGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaG9zdEVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSB8fCAobWVudUVsICYmIG1lbnVFbC5jb250YWlucyhtb3VzZVRhcmdldCkpXG4gICAgICAvKnx8IG1vdXNlVGFyZ2V0LnBhcmVudEVsZW1lbnQuY29udGFpbnMobWVudUVsKSovKSB7XG4gICAgICAgIC8vIOWboOS4uua1ruWxgueahGJhY2tkcm9w5Ye6546w77yM5pqC5pe25rKh5pyJ5Yqe5rOV6Ieq5Yqo5raI5aSxXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWNrVGlnZ2VyQWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdjbGljayc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm56VHJpZ2dlckFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgfVxuXG4gIHByaXZhdGUgaXNQb2ludGVyVGlnZ2VyQWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdob3Zlcic7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm56VHJpZ2dlckFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5ibHVyKCk7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEZWxheVRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5pi+56S65oiW6ICF6ZqQ6JeP6I+c5Y2VXG4gICAqXG4gICAqIEBwYXJhbSB2aXNpYmxlIHRydWUt5pi+56S677yMZmFsc2Ut6ZqQ6JePXG4gICAqIEBwYXJhbSBkZWxheSDlu7bov5/ml7bpl7RcbiAgICovXG4gIHB1YmxpYyBkZWxheVNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIsIHNldE9wZW5pbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBpZiAodmlzaWJsZSAmJiBzZXRPcGVuaW5nKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzTWVudVZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVudVZpc2libGU7XG4gIH1cblxuICBwdWJsaWMgc2V0TWVudVZpc2libGUobWVudVZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWVudVZpc2libGUgIT09IG1lbnVWaXNpYmxlKSB7XG4gICAgICB0aGlzLm1lbnVWaXNpYmxlID0gbWVudVZpc2libGU7XG5cbiAgICAgIC8vIHVwZGF0ZSBjbGFzc1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgICAgdGhpcy5zZXRBcnJvd0NsYXNzKCk7XG4gICAgICB0aGlzLnNldE1lbnVDbGFzcygpO1xuXG4gICAgICBpZiAobWVudVZpc2libGUpIHtcbiAgICAgICAgdGhpcy5iZWZvcmVWaXNpYmxlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KG1lbnVWaXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICAvKiogbG9hZCBpbml0IGRhdGEgaWYgbmVjZXNzYXJ5ICovXG4gIHByaXZhdGUgYmVmb3JlVmlzaWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRSb290T3B0aW9ucygpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUm9vdE9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56Q29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJvb3Q6IGFueSA9IHt9O1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ocm9vdCwgLTEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDojrflj5ZPcHRpb27nmoTlgLzvvIzkvovlpoLvvIzlj6/ku6XmjIflrppsYWJlbFByb3BlcnR5PVwibmFtZVwi5p2l5Y+WTmFtZSAqL1xuICBwdWJsaWMgZ2V0T3B0aW9uTGFiZWwob3B0aW9uOiBDYXNjYWRlck9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvblsgdGhpcy5uekxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJyBdO1xuICB9XG5cbiAgLyoqIOiOt+WPlk9wdGlvbueahOWAvO+8jOS+i+Wmgu+8jOWPr+S7peaMh+WumnZhbHVlUHJvcGVydHk9XCJpZFwi5p2l5Y+WSUQgKi9cbiAgcHVibGljIGdldE9wdGlvblZhbHVlKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24pOiBhbnkge1xuICAgIHJldHVybiBvcHRpb25bIHRoaXMubnpWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZScgXTtcbiAgfVxuXG4gIHByaXZhdGUgaXNBY3RpdmVkT3B0aW9uKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBhY3RpdmVPcHQgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGluZGV4IF07XG4gICAgcmV0dXJuIGFjdGl2ZU9wdCA9PT0gb3B0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruafkOWIl+eahOa/gOa0u+eahOiPnOWNlemAiemhuVxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uIOiPnOWNlemAiemhuVxuICAgKiBAcGFyYW0gaW5kZXggIOmAiemhueaJgOWcqOeahOWIl+e7hOeahOe0ouW8lVxuICAgKiBAcGFyYW0gc2VsZWN0IOaYr+WQpuinpuWPkemAieaLqee7k+eCuVxuICAgKi9cbiAgcHJpdmF0ZSBzZXRBY3RpdmVPcHRpb24ob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgc2VsZWN0OiBib29sZWFuID0gZmFsc2UsIGxvYWRDaGlsZHJlbjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoIW9wdGlvbiB8fCBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGluZGV4IF0gPSBvcHRpb247XG5cbiAgICAvLyDlvZPnm7TmjqXpgInmi6nmnIDlkI7kuIDnuqfml7bvvIzliY3pnaLnmoTpgInpobnopoHooaXlhajjgILkvovlpoLvvIzpgInmi6nigJzln47luILigJ3vvIzliJnoh6rliqjooaXlhajigJzlm73lrrbigJ3jgIHigJznnIHku73igJ1cbiAgICBmb3IgKGxldCBpID0gaW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgXSkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaSArIDEgXS5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOaIquaWreWkmuS9meeahOmAiemhue+8jOWmgumAieaLqeKAnOecgeS7veKAne+8jOWImeWPquS8muacieKAnOWbveWutuKAneOAgeKAnOecgeS7veKAne+8jOWOu+aOieKAnOWfjuW4guKAneOAgeKAnOWMuuWOv+KAnVxuICAgIGlmIChpbmRleCA8IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMuc2xpY2UoMCwgaW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICAvLyBsb2FkIGNoaWxkcmVuXG4gICAgaWYgKG9wdGlvbi5jaGlsZHJlbiAmJiBvcHRpb24uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBvcHRpb24uaXNMZWFmID0gZmFsc2U7XG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSBvcHRpb24pO1xuICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgaW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb24uaXNMZWFmICYmIGxvYWRDaGlsZHJlbikge1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNsaWNraW5nIGxlYWYgbm9kZSB3aWxsIHJlbW92ZSBhbnkgY2hpbGRyZW4gY29sdW1uc1xuICAgICAgaWYgKGluZGV4IDwgdGhpcy5uekNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLm56Q29sdW1ucyA9IHRoaXMubnpDb2x1bW5zLnNsaWNlKDAsIGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHJpZ2dlciBzZWxlY3QgZXZlbnQsIGFuZCBkaXNwbGF5IGxhYmVsXG4gICAgaWYgKHNlbGVjdCkge1xuICAgICAgdGhpcy5vblNlbGVjdE9wdGlvbihvcHRpb24sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRDaGlsZHJlbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBzdWNjZXNzPzogKCkgPT4gdm9pZCwgZmFpbHVyZT86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekxvYWREYXRhKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGluZGV4IDwgMDtcbiAgICAgIG9wdGlvbi5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMubnpMb2FkRGF0YShvcHRpb24sIGluZGV4KS50aGVuKCgpID0+IHtcbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuKSB7XG4gICAgICAgICAgb3B0aW9uLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucGFyZW50ID0gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogb3B0aW9uKTtcbiAgICAgICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuLCBpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIG9wdGlvbi5sb2FkaW5nID0gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9uLmlzTGVhZiA9IHRydWU7XG4gICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgZmFpbHVyZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uU2VsZWN0T3B0aW9uKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyB0cmlnZ2VyIGBuelNlbGVjdGAgZXZlbnRcbiAgICB0aGlzLm56U2VsZWN0LmVtaXQoeyBvcHRpb24sIGluZGV4IH0pO1xuXG4gICAgLy8g55Sf5oiQ5pi+56S6XG4gICAgaWYgKG9wdGlvbi5pc0xlYWYgfHwgdGhpcy5uekNoYW5nZU9uU2VsZWN0IHx8IHRoaXMuaXNDaGFuZ2VPbihvcHRpb24sIGluZGV4KSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgICAvLyDorr7nva7lvZPliY3mjqfku7bnmoTmmL7npLrlgLxcbiAgICAgIHRoaXMuYnVpbGREaXNwbGF5TGFiZWwoKTtcbiAgICAgIC8vIOinpuWPkeWPmOabtOS6i+S7tlxuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLy8gY2xvc2UgbWVudSBpZiBjbGljayBvbiBsZWFmXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOeUseeUqOaIt+adpeWumuS5ieeCueWHu+WQjuaYr+WQpuWPmOabtCAqL1xuICBwcml2YXRlIGlzQ2hhbmdlT24ob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5uekNoYW5nZU9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekNoYW5nZU9uKG9wdGlvbiwgaW5kZXgpID09PSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHNldENvbHVtbkRhdGEob3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghYXJyYXlFcXVhbHModGhpcy5uekNvbHVtbnNbIGluZGV4IF0sIG9wdGlvbnMpKSB7XG4gICAgICB0aGlzLm56Q29sdW1uc1sgaW5kZXggXSA9IG9wdGlvbnM7XG4gICAgICBpZiAoaW5kZXggPCB0aGlzLm56Q29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMubnpDb2x1bW5zID0gdGhpcy5uekNvbHVtbnMuc2xpY2UoMCwgaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6byg5qCH54K55Ye76YCJ6aG5XG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb24g6I+c5Y2V6YCJ6aG5XG4gICAqIEBwYXJhbSBpbmRleCDpgInpobnmiYDlnKjnmoTliJfnu4TnmoTntKLlvJVcbiAgICogQHBhcmFtIGV2ZW50IOm8oOagh+S6i+S7tlxuICAgKi9cbiAgb25PcHRpb25DbGljayhvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgLy8gS2VlcCBmb2N1c2VkIHN0YXRlIGZvciBrZXlib2FyZCBzdXBwb3J0XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuXG4gICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pblNlYXJjaCkge1xuICAgICAgdGhpcy5zZXRTZWFyY2hBY3RpdmVPcHRpb24ob3B0aW9uIGFzIENhc2NhZGVyU2VhcmNoT3B0aW9uLCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKG9wdGlvbiwgaW5kZXgsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDmjInkuIvlm57ovabplK7ml7bpgInmi6kgKi9cbiAgcHJpdmF0ZSBvbkVudGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTWF0aC5tYXgodGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xuICAgIGNvbnN0IGFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgY29sdW1uSW5kZXggXTtcbiAgICBpZiAoYWN0aXZlT3B0aW9uICYmICFhY3RpdmVPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLmluU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuc2V0U2VhcmNoQWN0aXZlT3B0aW9uKGFjdGl2ZU9wdGlvbiBhcyBDYXNjYWRlclNlYXJjaE9wdGlvbiwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uU2VsZWN0T3B0aW9uKGFjdGl2ZU9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwcmVzcyBgdXBgIG9yIGBkb3duYCBhcnJvdyB0byBhY3RpdmF0ZSB0aGUgc2libGluZyBvcHRpb24uXG4gICAqL1xuICBwcml2YXRlIG1vdmVVcE9yRG93bihpc1VwOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XG4gICAgLy8g6K+l57uE5Lit5bey57uP6KKr5r+A5rS755qE6YCJ6aG5XG4gICAgY29uc3QgYWN0aXZlT3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBjb2x1bW5JbmRleCBdO1xuICAgIC8vIOivpee7hOaJgOacieeahOmAiemhue+8jOeUqOS6jumBjeWOhuiOt+WPluS4i+S4gOS4quiiq+a/gOa0u+eahOmAiemhuVxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm56Q29sdW1uc1sgY29sdW1uSW5kZXggXSB8fCBbXTtcbiAgICBjb25zdCBsZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgICBsZXQgbmV4dEluZGV4ID0gLTE7XG4gICAgaWYgKCFhY3RpdmVPcHRpb24pIHsgLy8g6K+l5YiX6L+Y5rKh5pyJ6YCJ5Lit55qE6YCJ6aG5XG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbGVuZ3RoIDogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZihhY3RpdmVPcHRpb24pO1xuICAgIH1cblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbmV4dEluZGV4IC0gMSA6IG5leHRJbmRleCArIDE7XG4gICAgICBpZiAobmV4dEluZGV4IDwgMCB8fCBuZXh0SW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dE9wdGlvbiA9IG9wdGlvbnNbIG5leHRJbmRleCBdO1xuICAgICAgaWYgKCFuZXh0T3B0aW9uIHx8IG5leHRPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihuZXh0T3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVVcCgpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmVVcE9yRG93bih0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZURvd24oKTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlVXBPckRvd24oZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIHByZXNzIGBsZWZ0YCBhcnJvdyB0byByZW1vdmUgdGhlIGxhc3Qgc2VsZWN0ZWQgb3B0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlTGVmdCgpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgb3B0aW9ucy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBsYXN0IG9uZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwcmVzcyBgcmlnaHRgIGFycm93IHRvIHNlbGVjdCB0aGUgbmV4dCBjb2x1bW4gb3B0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlUmlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aDtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5uekNvbHVtbnNbIGxlbmd0aCBdO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0T3B0ID0gb3B0aW9ucy5maW5kKG8gPT4gIW8uZGlzYWJsZWQpO1xuICAgICAgaWYgKG5leHRPcHQpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24obmV4dE9wdCwgbGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6byg5qCH5YiS5YWl6YCJ6aG5XG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb24g6I+c5Y2V6YCJ6aG5XG4gICAqIEBwYXJhbSBpbmRleCDpgInpobnmiYDlnKjnmoTliJfnu4TnmoTntKLlvJVcbiAgICogQHBhcmFtIGV2ZW50IOm8oOagh+S6i+S7tlxuICAgKi9cbiAgb25PcHRpb25Nb3VzZUVudGVyKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMubnpFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInICYmICFvcHRpb24uaXNMZWFmKSB7XG4gICAgICB0aGlzLmRlbGF5U2VsZWN0KG9wdGlvbiwgaW5kZXgsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpvKDmoIfliJLlh7rpgInpoblcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbiDoj5zljZXpgInpoblcbiAgICogQHBhcmFtIGluZGV4IOmAiemhueaJgOWcqOeahOWIl+e7hOeahOe0ouW8lVxuICAgKiBAcGFyYW0gZXZlbnQg6byg5qCH5LqL5Lu2XG4gICAqL1xuICBvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3Qob3B0aW9uLCBpbmRleCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5U2VsZWN0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5U2VsZWN0VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlbGF5U2VsZWN0KG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIGRvU2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcbiAgICBpZiAoZG9TZWxlY3QpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyDpvKDmoIfmu5HlhaXlj6rlsZXlvIDvvIzkuI3ov5vooYzpgInkuK3mk43kvZxcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XG4gICAgICB9LCAxNTApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRTdWJtaXRWYWx1ZSgpOiBhbnlbXSB7XG4gICAgY29uc3QgdmFsdWVzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHByaXZhdGUgb25WYWx1ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U3VibWl0VmFsdWUoKTtcbiAgICBpZiAoIWFycmF5RXF1YWxzKHRoaXMudmFsdWUsIHZhbHVlKSkge1xuICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBudWxsOyAvLyBjbGVhciB0aGUgaW5pdC12YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7IC8vIEFuZ3VsYXIgbmVlZCB0aGlzXG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMubnpDbGVhci5lbWl0KCk7IC8vIGZpcnN0IHRyaWdnZXIgYGNsZWFyYCBhbmQgdGhlbiBgY2hhbmdlYFxuICAgICAgfVxuICAgICAgdGhpcy5uelNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcbiAgICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE9wdGlvbihvcHRpb246IGFueSwgaW5kZXg6IG51bWJlcik6IENhc2NhZGVyT3B0aW9uIHtcbiAgICBjb25zdCBvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gdGhpcy5uekNvbHVtbnNbIGluZGV4IF07XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgPyB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbikgOiBvcHRpb247XG4gICAgICByZXR1cm4gb3B0aW9ucy5maW5kKG8gPT4gdmFsdWUgPT09IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaXNMb2FkZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56Q29sdW1uc1sgaW5kZXggXSAmJiB0aGlzLm56Q29sdW1uc1sgaW5kZXggXS5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZU9uSW5pdChpbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IG9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbih2YWx1ZSwgaW5kZXgpO1xuICAgIGlmICghb3B0aW9uKSB7XG4gICAgICBvcHRpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7XG4gICAgICAgIFsgYCR7dGhpcy5uelZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJ31gIF06IHZhbHVlLFxuICAgICAgICBbIGAke3RoaXMubnpMYWJlbFByb3BlcnR5IHx8ICdsYWJlbCd9YCBdOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uLCBpbmRleCwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9wdGlvbnMoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHZzID0gdGhpcy5kZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVPbkluaXQoaW5kZXgsIHZzWyBpbmRleCBdKTtcbiAgICAgIGlmIChpbmRleCA8IHZzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucyhpbmRleCArIDEpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSB2cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJXcml0ZVZhbHVlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlzTG9hZGVkKGluZGV4KSB8fCAhdGhpcy5uekxvYWREYXRhKSB7XG4gICAgICBsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGluZGV4IC0gMSBdIHx8IHt9O1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4obm9kZSwgaW5kZXggLSAxLCBsb2FkLCB0aGlzLmFmdGVyV3JpdGVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgYWZ0ZXJXcml0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldFN1Ym1pdFZhbHVlKCk7XG4gICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgbmV3IHZhbHVlIHRvIHRoZSBlbGVtZW50LlxuICAgKlxuICAgKiBAT3ZlcnJpZGUgKEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlKVxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdnMgPSB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRvQXJyYXkodmFsdWUpO1xuICAgIGlmICh2cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5pdE9wdGlvbnMoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2cztcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5hZnRlcldyaXRlVmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVNlYXJjaFZhbHVlKCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdHM6IENhc2NhZGVyU2VhcmNoT3B0aW9uW10gPSBbXTtcbiAgICBjb25zdCBwYXRoOiBDYXNjYWRlck9wdGlvbltdID0gW107XG4gICAgY29uc3QgZGVmYXVsdEZpbHRlciA9IChpbnB1dFZhbHVlOiBzdHJpbmcsIHA6IENhc2NhZGVyT3B0aW9uW10pOiBib29sZWFuID0+IHtcbiAgICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgICBwLmZvckVhY2gobiA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsTmFtZSA9IHRoaXMubnpMYWJlbFByb3BlcnR5O1xuICAgICAgICBpZiAoblsgbGFiZWxOYW1lIF0gJiYgblsgbGFiZWxOYW1lIF0uaW5kZXhPZihpbnB1dFZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZsYWc7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlcjogKGlucHV0VmFsdWU6IHN0cmluZywgcDogQ2FzY2FkZXJPcHRpb25bXSkgPT4gYm9vbGVhbiA9XG4gICAgICB0aGlzLm56U2hvd1NlYXJjaCBpbnN0YW5jZW9mIE9iamVjdCAmJiAodGhpcy5uelNob3dTZWFyY2ggYXMgTnpTaG93U2VhcmNoT3B0aW9ucykuZmlsdGVyXG4gICAgICAgID8gKHRoaXMubnpTaG93U2VhcmNoIGFzIE56U2hvd1NlYXJjaE9wdGlvbnMpLmZpbHRlclxuICAgICAgICA6IGRlZmF1bHRGaWx0ZXI7XG4gICAgY29uc3Qgc29ydGVyOiAoYTogQ2FzY2FkZXJPcHRpb25bXSwgYjogQ2FzY2FkZXJPcHRpb25bXSwgaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiBudW1iZXIgPVxuICAgICAgdGhpcy5uelNob3dTZWFyY2ggaW5zdGFuY2VvZiBPYmplY3QgJiYgKHRoaXMubnpTaG93U2VhcmNoIGFzIE56U2hvd1NlYXJjaE9wdGlvbnMpLnNvcnRlcjtcbiAgICBjb25zdCBsb29wUGFyZW50ID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChzTm9kZSkgPT4ge1xuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkge1xuICAgICAgICAgIHNOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqIOaQnOe0oueahOWQjOaXtuW7uueriyBwYXJlbnQg6L+e5o6l77yM5Zug5Li655So5oi355u05o6l5pCc57Si55qE6K+d5piv5rKh5pyJ5bu656uL6L+e5o6l55qE77yM5Lya5o+Q5Y2H5LuO5Y+25a2Q6IqC54K55Zue5rqv55qE6Zq+5bqmICovXG4gICAgICAgIGlmICghc05vZGUuaXNMZWFmKSB7XG4gICAgICAgICAgbG9vcFBhcmVudChzTm9kZSwgZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzTm9kZS5pc0xlYWYgfHwgIXNOb2RlLmNoaWxkcmVuIHx8ICFzTm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBsb29wQ2hpbGQoc05vZGUsIGRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH07XG4gICAgY29uc3QgbG9vcENoaWxkID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcbiAgICAgIHBhdGgucHVzaChub2RlKTtcbiAgICAgIGNvbnN0IGNQYXRoID0gQXJyYXkuZnJvbShwYXRoKTtcbiAgICAgIGlmIChmaWx0ZXIodGhpcy5faW5wdXRWYWx1ZSwgY1BhdGgpKSB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgICBjb25zdCBvcHRpb246IENhc2NhZGVyU2VhcmNoT3B0aW9uID0ge1xuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIGlzTGVhZiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgIHBhdGggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjUGF0aCxcbiAgICAgICAgICBbIHRoaXMubnpMYWJlbFByb3BlcnR5IF06IGNQYXRoLm1hcChwID0+IHAubGFiZWwpLmpvaW4oJyAvICcpXG4gICAgICAgIH07XG4gICAgICAgIHJlc3VsdHMucHVzaChvcHRpb24pO1xuICAgICAgfVxuICAgICAgcGF0aC5wb3AoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5vbGRDb2x1bW5zSG9sZGVyWyAwIF0uZm9yRWFjaChub2RlID0+IChub2RlLmlzTGVhZiB8fCAhbm9kZS5jaGlsZHJlbiB8fCAhbm9kZS5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICA/IGxvb3BDaGlsZChub2RlKVxuICAgICAgOiBsb29wUGFyZW50KG5vZGUpKTtcbiAgICBpZiAoc29ydGVyKSB7XG4gICAgICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHNvcnRlcihhLnBhdGgsIGIucGF0aCwgdGhpcy5faW5wdXRWYWx1ZSkpO1xuICAgIH1cbiAgICB0aGlzLm56Q29sdW1ucyA9IFsgcmVzdWx0cyBdO1xuICB9XG5cbiAgcmVuZGVyU2VhcmNoU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLl9pbnB1dFZhbHVlLCAnZycpLFxuICAgICAgYDxzcGFuIGNsYXNzPVwiYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1rZXl3b3JkXCI+JHt0aGlzLl9pbnB1dFZhbHVlfTwvc3Bhbj5gKTtcbiAgfVxuXG4gIHNldFNlYXJjaEFjdGl2ZU9wdGlvbihyZXN1bHQ6IENhc2NhZGVyU2VhcmNoT3B0aW9uLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbIHJlc3VsdCBdO1xuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgMjAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7IC8vIE5vdCBvbmx5IHJlbW92ZSBgaW5wdXRWYWx1ZWAgYnV0IGFsc28gcmV2ZXJzZSBgbnpDb2x1bW5zYCBpbiB0aGUgaG9vay5cbiAgICAgIGNvbnN0IGluZGV4ID0gcmVzdWx0LnBhdGgubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGRlc3RpTm9kZSA9IHJlc3VsdC5wYXRoWyBpbmRleCBdO1xuICAgICAgY29uc3QgbW9ja0NsaWNrUGFyZW50ID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBjSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAobm9kZSAmJiBub2RlLnBhcmVudCkge1xuICAgICAgICAgIG1vY2tDbGlja1BhcmVudChub2RlLnBhcmVudCwgY0luZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbk9wdGlvbkNsaWNrKG5vZGUsIGNJbmRleCwgZXZlbnQpO1xuICAgICAgfTtcbiAgICAgIG1vY2tDbGlja1BhcmVudChkZXN0aU5vZGUsIGluZGV4KTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8g6K6+572u5qC35byPXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuc2V0TGFiZWxDbGFzcygpO1xuICAgIHRoaXMuc2V0QXJyb3dDbGFzcygpO1xuICAgIHRoaXMuc2V0TG9hZGluZ0NsYXNzKCk7XG4gICAgdGhpcy5zZXRDbGVhckNsYXNzKCk7XG4gICAgdGhpcy5zZXRJbnB1dENsYXNzKCk7XG4gICAgdGhpcy5zZXRNZW51Q2xhc3MoKTtcbiAgICB0aGlzLnNldE1lbnVDb2x1bW5DbGFzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xuICB9XG5cbn1cbiJdfQ==