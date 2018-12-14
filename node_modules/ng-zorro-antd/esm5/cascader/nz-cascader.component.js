/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    var ret;
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
    var len = array1.length;
    for (var i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
/** @type {?} */
var defaultDisplayRender = function (label) { return label.join(' / '); };
var ɵ0 = defaultDisplayRender;
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
var NzCascaderComponent = /** @class */ (function () {
    function NzCascaderComponent(elementRef, cdr, nzUpdateHostClassService) {
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
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
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
    Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inputValue;
        },
        set: /**
         * @param {?} inputValue
         * @return {?}
         */
        function (inputValue) {
            this._inputValue = inputValue;
            /** @type {?} */
            var willBeInSearch = !!inputValue;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzLabelRender", {
        get: /**
         * @return {?}
         */
        function () {
            return this.labelRenderTpl;
        },
        /** Display Render ngTemplate */
        set: /**
         * Display Render ngTemplate
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.labelRenderTpl = value;
            this.isLabelRenderTemplate = (value instanceof TemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzPrefixCls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.prefixCls;
        },
        /** prefixCls */
        set: /**
         * prefixCls
         * @param {?} prefixCls
         * @return {?}
         */
        function (prefixCls) {
            this.prefixCls = prefixCls;
            this.setClassMap();
            this.setLabelClass();
            this.setArrowClass();
            this.setLoadingClass();
            this.setClearClass();
            this.setInputClass();
            this.setMenuClass();
            this.setMenuColumnClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        /** Whether is disabled */
        set: /**
         * Whether is disabled
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.disabled = toBoolean(value);
            this.setClassMap();
            this.setInputClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size;
        },
        /** Input size, one of `large` `default` `small` */
        set: /**
         * Input size, one of `large` `default` `small`
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.size = value;
            this.setClassMap();
            this.setInputClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzShowInput", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showInput;
        },
        /** Whether show input box. Defaults to `true`. */
        set: /**
         * Whether show input box. Defaults to `true`.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.showInput = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzShowSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showSearch;
        },
        /** Whether can search. Defaults to `false`. */
        set: /**
         * Whether can search. Defaults to `false`.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.showSearch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzAllowClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.allowClear;
        },
        /** Whether allow clear. Defaults to `true`. */
        set: /**
         * Whether allow clear. Defaults to `true`.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.allowClear = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this.autoFocus;
        },
        /** Whether auto focus. */
        set: /**
         * Whether auto focus.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.autoFocus = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzShowArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showArrow;
        },
        /** Whether to show arrow */
        set: /**
         * Whether to show arrow
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.showArrow = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzMenuClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.menuClassName;
        },
        /** Additional className of popup overlay */
        set: /**
         * Additional className of popup overlay
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.menuClassName = value;
            this.setMenuClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzColumnClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.columnClassName;
        },
        /** Additional className of popup overlay column */
        set: /**
         * Additional className of popup overlay column
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.columnClassName = value;
            this.setMenuColumnClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzColumns[0];
        },
        /** Options for first column, sub column will be load async */
        set: /**
         * Options for first column, sub column will be load async
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.oldColumnsHolder = this.nzColumns = options && options.length ? [options] : [];
            if (!this.inSearch) {
                if (this.defaultValue && this.nzColumns.length) {
                    this.initOptions(0);
                }
            }
            else {
                this.prepareSearchValue();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "nzChangeOnSelect", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeOnSelect;
        },
        /** Change value on each selection if set to true */
        set: /**
         * Change value on each selection if set to true
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeOnSelect = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} position
     * @return {?}
     */
    NzCascaderComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (!this.isFocused) {
            /** @type {?} */
            var input = /** @type {?} */ (this.el.querySelector("." + this.prefixCls + "-input"));
            if (input && input.focus) {
                input.focus();
            }
            else {
                this.el.focus();
            }
            this.isFocused = true;
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            /** @type {?} */
            var input = /** @type {?} */ (this.el.querySelector("." + this.prefixCls + "-input"));
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
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = 1,
            _a[this.prefixCls + "-picker"] = 1,
            _a[this.prefixCls + "-lg"] = this.nzSize === 'large',
            _a[this.prefixCls + "-sm"] = this.nzSize === 'small',
            _a[this.prefixCls + "-picker-disabled"] = this.disabled,
            _a[this.prefixCls + "-focused"] = this.isFocused,
            _a[this.prefixCls + "-picker-open"] = this.menuVisible,
            _a[this.prefixCls + "-picker-with-value"] = this.inputValue && this.inputValue.length,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "labelCls", {
        get: /**
         * 标签 样式
         * @return {?}
         */
        function () {
            return this._labelCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.setLabelClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._labelCls = (_a = {},
            _a[this.prefixCls + "-picker-label"] = true,
            _a[this.prefixCls + "-show-search"] = !!this.nzShowSearch,
            _a[this.prefixCls + "-focused"] = !!this.nzShowSearch && this.isFocused && !this._inputValue,
            _a);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "arrowCls", {
        get: /**
         * 箭头 样式
         * @return {?}
         */
        function () {
            return this._arrowCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.setArrowClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._arrowCls = (_a = {},
            _a[this.prefixCls + "-picker-arrow"] = true,
            _a[this.prefixCls + "-picker-arrow-expand"] = this.menuVisible,
            _a);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "loadingCls", {
        get: /**
         * 加载中图标 样式
         * @return {?}
         */
        function () {
            return this._loadingCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.setLoadingClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._loadingCls = (_a = {},
            _a[this.prefixCls + "-picker-arrow"] = true,
            _a);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "clearCls", {
        get: /**
         * 清除图标 样式
         * @return {?}
         */
        function () {
            return this._clearCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.setClearClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._clearCls = (_a = {},
            _a[this.prefixCls + "-picker-clear"] = true,
            _a);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "inputCls", {
        get: /**
         * 输入框 样式
         * @return {?}
         */
        function () {
            return this._inputCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.setInputClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._inputCls = (_a = {},
            _a[this.prefixCls + "-input"] = 1,
            _a[this.inputPrefixCls + "-disabled"] = this.nzDisabled,
            _a[this.inputPrefixCls + "-lg"] = this.nzSize === 'large',
            _a[this.inputPrefixCls + "-sm"] = this.nzSize === 'small',
            _a);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
        get: /**
         * 浮层 样式
         * @return {?}
         */
        function () {
            return this._menuCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.setMenuClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._menuCls = (_a = {},
            _a[this.prefixCls + "-menus"] = true,
            _a[this.prefixCls + "-menus-hidden"] = !this.menuVisible,
            _a["" + this.nzMenuClassName] = this.nzMenuClassName,
            _a);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
        get: /**
         * 浮层列 样式
         * @return {?}
         */
        function () {
            return this._menuColumnCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.setMenuColumnClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._menuColumnCls = (_a = {},
            _a[this.prefixCls + "-menu"] = true,
            _a["" + this.nzColumnClassName] = this.nzColumnClassName,
            _a);
    };
    /**
     * 获取列中Option的样式
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.getOptionCls = /**
     * 获取列中Option的样式
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        var _a;
        return _a = {},
            _a[this.prefixCls + "-menu-item"] = true,
            _a[this.prefixCls + "-menu-item-expand"] = !option.isLeaf,
            _a[this.prefixCls + "-menu-item-active"] = this.isActivedOption(option, index),
            _a[this.prefixCls + "-menu-item-disabled"] = option.disabled,
            _a;
    };
    /**
     * prevent input change event
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.handlerInputChange = /**
     * prevent input change event
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     * input element blur
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputBlur = /**
     * input element blur
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * input element focus
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputFocus = /**
     * input element focus
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /*
            if (!this.nzShowSearch) {
              return;
            }
            */
        this.focus();
        this.setLabelClass();
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.hasInput = /**
     * @return {?}
     */
    function () {
        return this.inputValue.length > 0;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.hasValue = /**
     * @return {?}
     */
    function () {
        return this.value && this.value.length > 0;
    };
    Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
        get: /**
         * Whether to show input element placeholder
         * @return {?}
         */
        function () {
            return !(this.hasInput() || this.hasValue());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "showClearIcon", {
        get: /**
         * Whether the clear button is visible
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isHasValue = this.hasValue();
            /** @type {?} */
            var isHasInput = this.hasInput();
            return this.nzAllowClear && !this.nzDisabled && (isHasValue || isHasInput);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * clear the input box and selected options
     * @param {?=} event
     * @return {?}
     */
    NzCascaderComponent.prototype.clearSelection = /**
     * clear the input box and selected options
     * @param {?=} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.buildDisplayLabel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedOptions = this.selectedOptions;
        /** @type {?} */
        var labels = selectedOptions.map(function (o) { return _this.getOptionLabel(o); });
        // 设置当前控件的显示值
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (this.isPointerTiggerAction()) {
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (!this.isMenuVisible() || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isPointerTiggerAction()) {
            /** @type {?} */
            var mouseTarget = /** @type {?} */ (event.relatedTarget);
            /** @type {?} */
            var hostEl = this.el;
            /** @type {?} */
            var menuEl = this.menu && /** @type {?} */ (this.menu.nativeElement);
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))
            /*|| mouseTarget.parentElement.contains(menuEl)*/ ) {
                // 因为浮层的backdrop出现，暂时没有办法自动消失
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.isClickTiggerAction = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzTriggerAction === 'string') {
            return this.nzTriggerAction === 'click';
        }
        return this.nzTriggerAction.indexOf('click') !== -1;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.isPointerTiggerAction = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzTriggerAction === 'string') {
            return this.nzTriggerAction === 'hover';
        }
        return this.nzTriggerAction.indexOf('hover') !== -1;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.blur();
        this.clearDelayTimer();
        this.setMenuVisible(false);
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelayTimer = /**
     * @return {?}
     */
    function () {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
    };
    /**
     * 显示或者隐藏菜单
     *
     * @param {?} visible true-显示，false-隐藏
     * @param {?} delay 延迟时间
     * @param {?=} setOpening
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySetMenuVisible = /**
     * 显示或者隐藏菜单
     *
     * @param {?} visible true-显示，false-隐藏
     * @param {?} delay 延迟时间
     * @param {?=} setOpening
     * @return {?}
     */
    function (visible, delay, setOpening) {
        var _this = this;
        if (setOpening === void 0) { setOpening = false; }
        this.clearDelayTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayTimer = setTimeout(function () {
                _this.setMenuVisible(visible);
                _this.clearDelayTimer();
                if (visible) {
                    setTimeout(function () {
                        _this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.isMenuVisible = /**
     * @return {?}
     */
    function () {
        return this.menuVisible;
    };
    /**
     * @param {?} menuVisible
     * @return {?}
     */
    NzCascaderComponent.prototype.setMenuVisible = /**
     * @param {?} menuVisible
     * @return {?}
     */
    function (menuVisible) {
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
    };
    /**
     * load init data if necessary
     * @return {?}
     */
    NzCascaderComponent.prototype.beforeVisible = /**
     * load init data if necessary
     * @return {?}
     */
    function () {
        this.loadRootOptions();
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.loadRootOptions = /**
     * @return {?}
     */
    function () {
        if (!this.nzColumns.length) {
            /** @type {?} */
            var root = {};
            this.loadChildren(root, -1);
        }
    };
    /**
     * 获取Option的值，例如，可以指定labelProperty="name"来取Name
     * @param {?} option
     * @return {?}
     */
    NzCascaderComponent.prototype.getOptionLabel = /**
     * 获取Option的值，例如，可以指定labelProperty="name"来取Name
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.nzLabelProperty || 'label'];
    };
    /**
     * 获取Option的值，例如，可以指定valueProperty="id"来取ID
     * @param {?} option
     * @return {?}
     */
    NzCascaderComponent.prototype.getOptionValue = /**
     * 获取Option的值，例如，可以指定valueProperty="id"来取ID
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.nzValueProperty || 'value'];
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isActivedOption = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    };
    /**
     * 设置某列的激活的菜单选项
     *
     * @param {?} option 菜单选项
     * @param {?} index  选项所在的列组的索引
     * @param {?=} select 是否触发选择结点
     * @param {?=} loadChildren
     * @return {?}
     */
    NzCascaderComponent.prototype.setActiveOption = /**
     * 设置某列的激活的菜单选项
     *
     * @param {?} option 菜单选项
     * @param {?} index  选项所在的列组的索引
     * @param {?=} select 是否触发选择结点
     * @param {?=} loadChildren
     * @return {?}
     */
    function (option, index, select, loadChildren) {
        if (select === void 0) { select = false; }
        if (loadChildren === void 0) { loadChildren = true; }
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[index] = option;
        // 当直接选择最后一级时，前面的选项要补全。例如，选择“城市”，则自动补全“国家”、“省份”
        for (var i = index - 1; i >= 0; i--) {
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
            option.children.forEach(function (child) { return child.parent = option; });
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
    };
    /**
     * @param {?} option
     * @param {?} index
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    NzCascaderComponent.prototype.loadChildren = /**
     * @param {?} option
     * @param {?} index
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, index, success, failure) {
        var _this = this;
        if (this.nzLoadData) {
            this.isLoading = index < 0;
            option.loading = true;
            this.nzLoadData(option, index).then(function () {
                option.loading = _this.isLoading = false;
                if (option.children) {
                    option.children.forEach(function (child) { return child.parent = index < 0 ? undefined : option; });
                    _this.setColumnData(option.children, index + 1);
                }
                if (success) {
                    success();
                }
            }, function () {
                option.loading = _this.isLoading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
            });
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.onSelectOption = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        // trigger `nzSelect` event
        this.nzSelect.emit({ option: option, index: index });
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
    };
    /**
     * 由用户来定义点击后是否变更
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isChangeOn = /**
     * 由用户来定义点击后是否变更
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        if (typeof this.nzChangeOn === 'function') {
            return this.nzChangeOn(option, index) === true;
        }
        return false;
    };
    /**
     * @param {?} options
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.setColumnData = /**
     * @param {?} options
     * @param {?} index
     * @return {?}
     */
    function (options, index) {
        if (!arrayEquals(this.nzColumns[index], options)) {
            this.nzColumns[index] = options;
            if (index < this.nzColumns.length - 1) {
                this.nzColumns = this.nzColumns.slice(0, index + 1);
            }
        }
    };
    /**
     * 鼠标点击选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    /**
     * 鼠标点击选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionClick = /**
     * 鼠标点击选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    function (option, index, event) {
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
    };
    /**
     * 按下回车键时选择
     * @return {?}
     */
    NzCascaderComponent.prototype.onEnter = /**
     * 按下回车键时选择
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.activatedOptions[columnIndex];
        if (activeOption && !activeOption.disabled) {
            if (this.inSearch) {
                this.setSearchActiveOption(/** @type {?} */ (activeOption), null);
            }
            else {
                this.onSelectOption(activeOption, columnIndex);
            }
        }
    };
    /**
     * press `up` or `down` arrow to activate the sibling option.
     * @param {?} isUp
     * @return {?}
     */
    NzCascaderComponent.prototype.moveUpOrDown = /**
     * press `up` or `down` arrow to activate the sibling option.
     * @param {?} isUp
     * @return {?}
     */
    function (isUp) {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.activatedOptions[columnIndex];
        /** @type {?} */
        var options = this.nzColumns[columnIndex] || [];
        /** @type {?} */
        var length = options.length;
        /** @type {?} */
        var nextIndex = -1;
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
            var nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.setActiveOption(nextOption, columnIndex);
            break;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.moveUp = /**
     * @return {?}
     */
    function () {
        this.moveUpOrDown(true);
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.moveDown = /**
     * @return {?}
     */
    function () {
        this.moveUpOrDown(false);
    };
    /**
     * press `left` arrow to remove the last selected option.
     * @return {?}
     */
    NzCascaderComponent.prototype.moveLeft = /**
     * press `left` arrow to remove the last selected option.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    };
    /**
     * press `right` arrow to select the next column option.
     * @return {?}
     */
    NzCascaderComponent.prototype.moveRight = /**
     * press `right` arrow to select the next column option.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var length = this.activatedOptions.length;
        /** @type {?} */
        var options = this.nzColumns[length];
        if (options && options.length) {
            /** @type {?} */
            var nextOpt = options.find(function (o) { return !o.disabled; });
            if (nextOpt) {
                this.setActiveOption(nextOpt, length);
            }
        }
    };
    /**
     * 鼠标划入选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    /**
     * 鼠标划入选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseEnter = /**
     * 鼠标划入选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    function (option, index, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelect(option, index, true);
        }
    };
    /**
     * 鼠标划出选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    /**
     * 鼠标划出选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseLeave = /**
     * 鼠标划出选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    function (option, index, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelect(option, index, false);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelaySelectTimer = /**
     * @return {?}
     */
    function () {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySelect = /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    function (option, index, doSelect) {
        var _this = this;
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout(function () {
                // 鼠标滑入只展开，不进行选中操作
                // 鼠标滑入只展开，不进行选中操作
                _this.setActiveOption(option, index);
                _this.delaySelectTimer = null;
            }, 150);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.getSubmitValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var values = [];
        this.selectedOptions.forEach(function (option) {
            values.push(_this.getOptionValue(option));
        });
        return values;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onValueChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getSubmitValue();
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
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.findOption = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        var _this = this;
        /** @type {?} */
        var options = this.nzColumns[index];
        if (options) {
            /** @type {?} */
            var value_1 = typeof option === 'object' ? this.getOptionValue(option) : option;
            return options.find(function (o) { return value_1 === _this.getOptionValue(o); });
        }
        return null;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isLoaded = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.nzColumns[index] && this.nzColumns[index].length > 0;
    };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    NzCascaderComponent.prototype.activateOnInit = /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    function (index, value) {
        var _a;
        /** @type {?} */
        var option = this.findOption(value, index);
        if (!option) {
            option = typeof value === 'object' ? value : (_a = {},
                _a["" + (this.nzValueProperty || 'value')] = value,
                _a["" + (this.nzLabelProperty || 'label')] = value,
                _a);
        }
        this.setActiveOption(option, index, false, false);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.initOptions = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var vs = this.defaultValue;
        /** @type {?} */
        var load = function () {
            _this.activateOnInit(index, vs[index]);
            if (index < vs.length - 1) {
                _this.initOptions(index + 1);
            }
            if (index === vs.length - 1) {
                _this.afterWriteValue();
            }
        };
        if (this.isLoaded(index) || !this.nzLoadData) {
            load();
        }
        else {
            /** @type {?} */
            var node = this.activatedOptions[index - 1] || {};
            this.loadChildren(node, index - 1, load, this.afterWriteValue);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.afterWriteValue = /**
     * @return {?}
     */
    function () {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    };
    /**
     * Write a new value to the element.
     *
     * @Override (From ControlValueAccessor interface)
     */
    /**
     * Write a new value to the element.
     *
     * \@Override (From ControlValueAccessor interface)
     * @param {?} value
     * @return {?}
     */
    NzCascaderComponent.prototype.writeValue = /**
     * Write a new value to the element.
     *
     * \@Override (From ControlValueAccessor interface)
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var vs = this.defaultValue = toArray(value);
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnChange = /**
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
    NzCascaderComponent.prototype.registerOnTouched = /**
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
    NzCascaderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.prepareSearchValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var results = [];
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = function (inputValue, p) {
            /** @type {?} */
            var flag = false;
            p.forEach(function (n) {
                /** @type {?} */
                var labelName = _this.nzLabelProperty;
                if (n[labelName] && n[labelName].indexOf(inputValue) > -1) {
                    flag = true;
                }
            });
            return flag;
        };
        /** @type {?} */
        var filter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).filter
            ? (/** @type {?} */ (this.nzShowSearch)).filter
            : defaultFilter;
        /** @type {?} */
        var sorter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).sorter;
        /** @type {?} */
        var loopParent = function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach(function (sNode) {
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
        var loopChild = function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            var _a;
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(_this._inputValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                /** @type {?} */
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.nzLabelProperty] = cPath.map(function (p) { return p.label; }).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        };
        this.oldColumnsHolder[0].forEach(function (node) { return (node.isLeaf || !node.children || !node.children.length)
            ? loopChild(node)
            : loopParent(node); });
        if (sorter) {
            results.sort(function (a, b) { return sorter(a.path, b.path, _this._inputValue); });
        }
        this.nzColumns = [results];
    };
    /**
     * @param {?} str
     * @return {?}
     */
    NzCascaderComponent.prototype.renderSearchString = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(new RegExp(this._inputValue, 'g'), "<span class=\"ant-cascader-menu-item-keyword\">" + this._inputValue + "</span>");
    };
    /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.setSearchActiveOption = /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    function (result, event) {
        var _this = this;
        this.activatedOptions = [result];
        this.delaySetMenuVisible(false, 200);
        setTimeout(function () {
            _this.inputValue = '';
            /** @type {?} */
            var index = result.path.length - 1;
            /** @type {?} */
            var destiNode = result.path[index];
            /** @type {?} */
            var mockClickParent = function (node, cIndex) {
                if (node && node.parent) {
                    mockClickParent(node.parent, cIndex - 1);
                }
                _this.onOptionClick(node, cIndex, event);
            };
            mockClickParent(destiNode, index);
        }, 300);
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // 设置样式
        this.setClassMap();
        this.setLabelClass();
        this.setArrowClass();
        this.setLoadingClass();
        this.setClearClass();
        this.setInputClass();
        this.setMenuClass();
        this.setMenuColumnClass();
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearDelayTimer();
        this.clearDelaySelectTimer();
    };
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
                            useExisting: forwardRef(function () { return NzCascaderComponent; }),
                            multi: true
                        }
                    ],
                    host: {
                        '[attr.tabIndex]': '"0"'
                    },
                    styles: [".ant-cascader-menus {\n      margin-top: 4px;\n      margin-bottom: 4px;\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n    }"]
                }] }
    ];
    /** @nocollapse */
    NzCascaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService }
    ]; };
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
    return NzCascaderComponent;
}());
export { NzCascaderComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUVqRCxpQkFBb0IsS0FBYzs7SUFDaEMsSUFBSSxHQUFHLENBQU07SUFDYixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNWO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDaEMsR0FBRyxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUM7S0FDakI7U0FBTTtRQUNMLEdBQUcsR0FBRyxLQUFLLENBQUM7S0FDYjtJQUNELE9BQU8sR0FBRyxDQUFDO0NBQ1o7Ozs7Ozs7QUFFRCxxQkFBd0IsTUFBVyxF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O29DQUdMLEtBQUs7b0NBR0wsS0FBSztrQ0FHTCxLQUFLO2tDQUdMLEtBQUs7a0NBR0wsS0FBSzs2QkFHTCxLQUFLO2tDQUdMLE1BQU07MkJBR04sTUFBTTtvQ0FHTixNQUFNOzJCQUtOLE1BQU07MEJBTU4sTUFBTTt3QkFFTixTQUFTLFNBQUMsT0FBTzt1QkFFakIsU0FBUyxTQUFDLE1BQU07NEJBb09oQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFO2lDQWtEcEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTtzQ0FlbEMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTtzQ0FVdkMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTs7OEJBL3NCMUM7O1NBNkdhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5mdW5jdGlvbiB0b0FycmF5PFQ+KHZhbHVlOiBUIHwgVFtdKTogVFtdIHtcbiAgbGV0IHJldDogVFtdO1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldCA9IFtdO1xuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldCA9IFsgdmFsdWUgXTtcbiAgfSBlbHNlIHtcbiAgICByZXQgPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhcnJheUVxdWFsczxUPihhcnJheTE6IFRbXSwgYXJyYXkyOiBUW10pOiBib29sZWFuIHtcbiAgaWYgKCFhcnJheTEgfHwgIWFycmF5MiB8fCBhcnJheTEubGVuZ3RoICE9PSBhcnJheTIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbGVuID0gYXJyYXkxLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJheTFbIGkgXSAhPT0gYXJyYXkyWyBpIF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IGRlZmF1bHREaXNwbGF5UmVuZGVyID0gbGFiZWwgPT4gbGFiZWwuam9pbignIC8gJyk7XG5cbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJyB8ICdob3Zlcic7XG5leHBvcnQgdHlwZSBOekNhc2NhZGVyVHJpZ2dlclR5cGUgPSAnY2xpY2snIHwgJ2hvdmVyJztcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCcgO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyT3B0aW9uIHtcbiAgdmFsdWU/OiBhbnk7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgaXNMZWFmPzogYm9vbGVhbjtcbiAgcGFyZW50PzogQ2FzY2FkZXJPcHRpb247XG4gIGNoaWxkcmVuPzogQ2FzY2FkZXJPcHRpb25bXTtcblxuICBbIGtleTogc3RyaW5nIF06IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlclNlYXJjaE9wdGlvbiBleHRlbmRzIENhc2NhZGVyT3B0aW9uIHtcbiAgcGF0aDogQ2FzY2FkZXJPcHRpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOelNob3dTZWFyY2hPcHRpb25zIHtcbiAgZmlsdGVyPyhpbnB1dFZhbHVlOiBzdHJpbmcsIHBhdGg6IENhc2NhZGVyT3B0aW9uW10pOiBib29sZWFuO1xuXG4gIHNvcnRlcj8oYTogQ2FzY2FkZXJPcHRpb25bXSwgYjogQ2FzY2FkZXJPcHRpb25bXSwgaW5wdXRWYWx1ZTogc3RyaW5nKTogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhc2NhZGVyLFtuei1jYXNjYWRlcl0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIGRyb3BEb3duQW5pbWF0aW9uXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNhc2NhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogW1xuICAgIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhc2NhZGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1thdHRyLnRhYkluZGV4XSc6ICdcIjBcIidcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgICAgYC5hbnQtY2FzY2FkZXItbWVudXMge1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgYWxsb3dDbGVhciA9IHRydWU7XG4gIHByaXZhdGUgYXV0b0ZvY3VzID0gZmFsc2U7XG4gIHByaXZhdGUgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbmFibGVDYWNoZSA9IHRydWU7XG4gIHByaXZhdGUgc2hvd0Fycm93ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzaG93SW5wdXQgPSB0cnVlO1xuICBwcml2YXRlIHNpemU6IE56Q2FzY2FkZXJTaXplID0gJ2RlZmF1bHQnO1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtY2FzY2FkZXInO1xuICBwcml2YXRlIGlucHV0UHJlZml4Q2xzID0gJ2FudC1pbnB1dCc7XG4gIHByaXZhdGUgbWVudUNsYXNzTmFtZTtcbiAgcHJpdmF0ZSBjb2x1bW5DbGFzc05hbWU7XG4gIHByaXZhdGUgY2hhbmdlT25TZWxlY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzaG93U2VhcmNoOiBib29sZWFuIHwgTnpTaG93U2VhcmNoT3B0aW9ucztcbiAgcHJpdmF0ZSBkZWZhdWx0VmFsdWU6IGFueVtdO1xuXG4gIHB1YmxpYyBkcm9wRG93blBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gIHB1YmxpYyBtZW51VmlzaWJsZSA9IGZhbHNlO1xuICBwdWJsaWMgaXNMb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgaXNPcGVuaW5nID0gZmFsc2U7XG5cbiAgLy8g5YaF6YOo5qC35byPXG4gIHByaXZhdGUgX2Fycm93Q2xzOiB7IFsgbmFtZTogc3RyaW5nIF06IGFueSB9O1xuICBwcml2YXRlIF9jbGVhckNsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfaW5wdXRDbHM6IHsgWyBuYW1lOiBzdHJpbmcgXTogYW55IH07XG4gIHByaXZhdGUgX2xhYmVsQ2xzOiB7IFsgbmFtZTogc3RyaW5nIF06IGFueSB9O1xuICBwcml2YXRlIF9sb2FkaW5nQ2xzOiB7IFsgbmFtZTogc3RyaW5nIF06IGFueSB9O1xuICBwcml2YXRlIF9tZW51Q2xzOiB7IFsgbmFtZTogc3RyaW5nIF06IGFueSB9O1xuICBwcml2YXRlIF9tZW51Q29sdW1uQ2xzOiB7IFsgbmFtZTogc3RyaW5nIF06IGFueSB9O1xuXG4gIHB1YmxpYyBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICBwcml2YXRlIGlzRm9jdXNlZCA9IGZhbHNlO1xuXG4gIC8qKiDpgInmi6npgInpobnlkI7vvIzmuLLmn5PmmL7npLrmlofmnKwgKi9cbiAgcHJpdmF0ZSBsYWJlbFJlbmRlclRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgcHVibGljIGlzTGFiZWxSZW5kZXJUZW1wbGF0ZSA9IGZhbHNlO1xuICBwdWJsaWMgbGFiZWxSZW5kZXJUZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBsYWJlbFJlbmRlckNvbnRleHQ6IGFueSA9IHt9O1xuXG4gIC8vIOW9k+WJjeWAvFxuICBwcml2YXRlIHZhbHVlOiBhbnlbXTtcbiAgLy8g5bey6YCJ5oup55qE6YCJ6aG56KGo56S65b2T5YmN5bey56Gu6K6k55qE6YCJ6aG577yac2VsZWN0aW9uIHdpbGwgdHJpZ2dlciB2YWx1ZSBjaGFuZ2VcbiAgcHJpdmF0ZSBzZWxlY3RlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcbiAgLy8g5bey5r+A5rS755qE6YCJ6aG56KGo56S66YCa6L+H6ZSu55uY5pa55ZCR6ZSu6YCJ5oup55qE6YCJ6aG577yM5bm25pyq5pyA57uI56Gu6K6k77yI6Zmk6Z2e5oyJRU5URVLplK7vvInvvJphY3RpdmFjdGlvbiB3aWxsIG5vdCB0cmlnZ2VyIHZhbHVlIGNoYW5nZVxuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcbiAgLy8g6KGo56S65b2T5YmN6I+c5Y2V55qE5pWw5o2u5YiX77yaYWxsIGRhdGEgY29sdW1uc1xuICBwdWJsaWMgbnpDb2x1bW5zOiBDYXNjYWRlck9wdGlvbltdW10gPSBbXTtcblxuICAvLyDmmL7npLrmiJbpmpDol4/oj5zljZXorqHml7blmahcbiAgcHJpdmF0ZSBkZWxheVRpbWVyOiBhbnk7XG4gIHByaXZhdGUgZGVsYXlTZWxlY3RUaW1lcjogYW55O1xuXG4gIC8qKiDmkJzntKLnm7jlhbPnmoTovpPlhaXlgLwgKi9cbiAgcHJpdmF0ZSBfaW5wdXRWYWx1ZSA9ICcnO1xuICBnZXQgaW5wdXRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFZhbHVlO1xuICB9XG5cbiAgc2V0IGlucHV0VmFsdWUoaW5wdXRWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5wdXRWYWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgY29uc3Qgd2lsbEJlSW5TZWFyY2ggPSAhIWlucHV0VmFsdWU7XG5cbiAgICAvLyDmkJzntKLnirbmgIHlj5jliqjkuYvliY3vvIzlpoLopoHov5vlhaXliJnopoHkv53nlZnkuYvliY3mv4DmtLvpgInpobnnmoTlv6vnhafvvIzpgIDlh7rmkJzntKLnirbmgIHopoHov5jljp/or6Xlv6vnhadcbiAgICBpZiAoIXRoaXMuaW5TZWFyY2ggJiYgd2lsbEJlSW5TZWFyY2gpIHtcbiAgICAgIHRoaXMub2xkQWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pblNlYXJjaCAmJiAhd2lsbEJlSW5TZWFyY2gpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMub2xkQWN0aXZhdGVkT3B0aW9ucztcbiAgICB9XG5cbiAgICAvLyDmkJzntKLnirbmgIHlj5jmm7TkuYvlkI5cbiAgICB0aGlzLmluU2VhcmNoID0gISF3aWxsQmVJblNlYXJjaDtcbiAgICBpZiAodGhpcy5pblNlYXJjaCkge1xuICAgICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaFZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNob3dTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5uekNvbHVtbnMgPSB0aGlzLm9sZENvbHVtbnNIb2xkZXI7XG4gICAgICB9XG4gICAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XG4gICAgICB0aGlzLnNlYXJjaFdpZHRoU3R5bGUgPSAnJztcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8gbmdNb2RlbCBBY2Nlc3NcbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWyAuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyBdO1xuXG4gIC8qKiBEaXNwbGF5IFJlbmRlciBuZ1RlbXBsYXRlICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekxhYmVsUmVuZGVyKHZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5sYWJlbFJlbmRlclRwbCA9IHZhbHVlO1xuICAgIHRoaXMuaXNMYWJlbFJlbmRlclRlbXBsYXRlID0gKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICB9XG5cbiAgZ2V0IG56TGFiZWxSZW5kZXIoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxSZW5kZXJUcGw7XG4gIH1cblxuICAvKiogcHJlZml4Q2xzICovXG4gIEBJbnB1dCgpXG4gIHNldCBuelByZWZpeENscyhwcmVmaXhDbHM6IHN0cmluZykge1xuICAgIHRoaXMucHJlZml4Q2xzID0gcHJlZml4Q2xzO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnNldExhYmVsQ2xhc3MoKTtcbiAgICB0aGlzLnNldEFycm93Q2xhc3MoKTtcbiAgICB0aGlzLnNldExvYWRpbmdDbGFzcygpO1xuICAgIHRoaXMuc2V0Q2xlYXJDbGFzcygpO1xuICAgIHRoaXMuc2V0SW5wdXRDbGFzcygpO1xuICAgIHRoaXMuc2V0TWVudUNsYXNzKCk7XG4gICAgdGhpcy5zZXRNZW51Q29sdW1uQ2xhc3MoKTtcbiAgfVxuXG4gIGdldCBuelByZWZpeENscygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnByZWZpeENscztcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGlzIGRpc2FibGVkICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuc2V0SW5wdXRDbGFzcygpO1xuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKiogSW5wdXQgc2l6ZSwgb25lIG9mIGBsYXJnZWAgYGRlZmF1bHRgIGBzbWFsbGAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56U2l6ZSh2YWx1ZTogTnpDYXNjYWRlclNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5zZXRJbnB1dENsYXNzKCk7XG4gIH1cblxuICBnZXQgbnpTaXplKCk6IE56Q2FzY2FkZXJTaXplIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgc2hvdyBpbnB1dCBib3guIERlZmF1bHRzIHRvIGB0cnVlYC4gKi9cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0lucHV0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93SW5wdXQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd0lucHV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dJbnB1dDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGNhbiBzZWFyY2guIERlZmF1bHRzIHRvIGBmYWxzZWAuICovXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dTZWFyY2godmFsdWU6IGJvb2xlYW4gfCBOelNob3dTZWFyY2hPcHRpb25zKSB7XG4gICAgdGhpcy5zaG93U2VhcmNoID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpTaG93U2VhcmNoKCk6IGJvb2xlYW4gfCBOelNob3dTZWFyY2hPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5zaG93U2VhcmNoO1xuICB9XG5cbiAgcHVibGljIHNlYXJjaFdpZHRoU3R5bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBvbGRDb2x1bW5zSG9sZGVyO1xuICBwcml2YXRlIG9sZEFjdGl2YXRlZE9wdGlvbnM7XG5cbiAgLyoqIElmIGNhc2NhZGVyIGlzIGluIHNlYXJjaCBtb2RlLiAqL1xuICBwdWJsaWMgaW5TZWFyY2ggPSBmYWxzZTtcblxuICAvKiogV2hldGhlciBhbGxvdyBjbGVhci4gRGVmYXVsdHMgdG8gYHRydWVgLiAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpBbGxvd0NsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbGxvd0NsZWFyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekFsbG93Q2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWxsb3dDbGVhcjtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGF1dG8gZm9jdXMuICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekF1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hdXRvRm9jdXM7XG4gIH1cblxuICAvKiogV2hldGhlciB0byBzaG93IGFycm93ICovXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dBcnJvdyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd0Fycm93ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93QXJyb3c7XG4gIH1cblxuICAvKiogQWRkaXRpb25hbCBjbGFzc05hbWUgb2YgcG9wdXAgb3ZlcmxheSAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpNZW51Q2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lbnVDbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldE1lbnVDbGFzcygpO1xuICB9XG5cbiAgZ2V0IG56TWVudUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1lbnVDbGFzc05hbWU7XG4gIH1cblxuICAvKiogQWRkaXRpb25hbCBjbGFzc05hbWUgb2YgcG9wdXAgb3ZlcmxheSBjb2x1bW4gKi9cbiAgQElucHV0KClcbiAgc2V0IG56Q29sdW1uQ2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbHVtbkNsYXNzTmFtZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0TWVudUNvbHVtbkNsYXNzKCk7XG4gIH1cblxuICBnZXQgbnpDb2x1bW5DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5DbGFzc05hbWU7XG4gIH1cblxuICAvKiogT3B0aW9ucyBmb3IgZmlyc3QgY29sdW1uLCBzdWIgY29sdW1uIHdpbGwgYmUgbG9hZCBhc3luYyAqL1xuICBASW5wdXQoKSBzZXQgbnpPcHRpb25zKG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gfCBudWxsKSB7XG4gICAgdGhpcy5vbGRDb2x1bW5zSG9sZGVyID0gdGhpcy5uekNvbHVtbnMgPSBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID8gWyBvcHRpb25zIF0gOiBbXTtcbiAgICBpZiAoIXRoaXMuaW5TZWFyY2gpIHtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZSAmJiB0aGlzLm56Q29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucygwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmVwYXJlU2VhcmNoVmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpPcHRpb25zKCk6IENhc2NhZGVyT3B0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLm56Q29sdW1uc1sgMCBdO1xuICB9XG5cbiAgLyoqIENoYW5nZSB2YWx1ZSBvbiBlYWNoIHNlbGVjdGlvbiBpZiBzZXQgdG8gdHJ1ZSAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpDaGFuZ2VPblNlbGVjdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY2hhbmdlT25TZWxlY3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56Q2hhbmdlT25TZWxlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlT25TZWxlY3Q7XG4gIH1cblxuICAvKiogSG92ZXIgdGV4dCBmb3IgdGhlIGNsZWFyIGljb24gKi9cbiAgQElucHV0KCkgbnpDbGVhclRleHQgPSAnQ2xlYXInO1xuXG4gIC8qKiBFeHBhbmQgY29sdW1uIGl0ZW0gd2hlbiBjbGljayBvciBob3Zlciwgb25lIG9mICdjbGljaycgJ2hvdmVyJyAqL1xuICBASW5wdXQoKSBuekV4cGFuZFRyaWdnZXI6IE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJztcblxuICAvKiogU3BlY2lmeSBjb250ZW50IHRvIHNob3cgd2hlbiBubyByZXN1bHQgbWF0Y2hlcy4gKi9cbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQgPSAnTm90IEZvdW5kJztcblxuICAvKiogSW5wdXQgcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICdQbGVhc2Ugc2VsZWN0JztcblxuICAvKiogQWRkaXRpb25hbCBzdHlsZSBvZiBwb3B1cCBvdmVybGF5ICovXG4gIEBJbnB1dCgpIG56TWVudVN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nOyB9O1xuXG4gIC8qKiBDaGFuZ2UgdmFsdWUgb24gc2VsZWN0aW9uIG9ubHkgaWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCAqL1xuICBASW5wdXQoKSBuekNoYW5nZU9uOiAob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgbGV2ZWw6IG51bWJlcikgPT4gYm9vbGVhbjtcblxuICAvKiogRGVsYXkgdGltZSB0byBzaG93IHdoZW4gbW91c2UgZW50ZXIsIHdoZW4gYG56RXhwYW5kVHJpZ2dlcmAgaXMgYGhvdmVyYC4gKi9cbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXkgPSAxNTA7IC8vIG1zXG5cbiAgLyoqIERlbGF5IHRpbWUgdG8gaGlkZSB3aGVuIG1vdXNlIGVudGVyLCB3aGVuIGBuekV4cGFuZFRyaWdnZXJgIGlzIGBob3ZlcmAuICovXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5ID0gMTUwOyAvLyBtc1xuXG4gIC8qKiBUcmlnZ2VyaW5nIG1vZGU6IGNhbiBiZSBBcnJheTwnY2xpY2snfCdob3Zlcic+ICovXG4gIEBJbnB1dCgpIG56VHJpZ2dlckFjdGlvbjogTnpDYXNjYWRlclRyaWdnZXJUeXBlIHwgTnpDYXNjYWRlclRyaWdnZXJUeXBlW10gPSBbICdjbGljaycgXTtcblxuICAvKiogUHJvcGVydHkgbmFtZSBmb3IgZ2V0dGluZyBgdmFsdWVgIGluIHRoZSBvcHRpb24gKi9cbiAgQElucHV0KCkgbnpWYWx1ZVByb3BlcnR5ID0gJ3ZhbHVlJztcblxuICAvKiogUHJvcGVydHkgbmFtZSBmb3IgZ2V0dGluZyBgbGFiZWxgIGluIHRoZSBvcHRpb24gKi9cbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcblxuICAvKiog5byC5q2l5Yqg6L295pWw5o2uICovXG4gIEBJbnB1dCgpIG56TG9hZERhdGE6IChub2RlOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg/OiBudW1iZXIpID0+IFByb21pc2VMaWtlPGFueT47XG5cbiAgLyoqIEV2ZW50OiBlbWl0IG9uIHBvcHVwIHNob3cgb3IgaGlkZSAqL1xuICBAT3V0cHV0KCkgbnpWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKiBFdmVudDogZW1pdCBvbiB2YWx1ZXMgY2hhbmdlZCAqL1xuICBAT3V0cHV0KCkgbnpDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuXG4gIC8qKiBFdmVudDogZW1pdCBvbiB2YWx1ZXMgYW5kIHNlbGVjdGlvbiBjaGFuZ2VkICovXG4gIEBPdXRwdXQoKSBuelNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZXJPcHRpb25bXT4oKTtcblxuICAvKipcbiAgICogRXZlbnQ6IGVtaXQgb24gb3B0aW9uIHNlbGVjdGVkLCBldmVudCBkYXRh77yae29wdGlvbjogYW55LCBpbmRleDogbnVtYmVyfVxuICAgKi9cbiAgQE91dHB1dCgpIG56U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgb3B0aW9uOiBDYXNjYWRlck9wdGlvbixcbiAgICBpbmRleDogbnVtYmVyXG4gIH0+KCk7XG5cbiAgLyoqIEV2ZW50OiBlbWl0IG9uIHRoZSBjbGVhciBidXR0b24gY2xpY2tlZCAqL1xuICBAT3V0cHV0KCkgbnpDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmO1xuICAvKiog5rWu5bGC6I+c5Y2VICovXG4gIEBWaWV3Q2hpbGQoJ21lbnUnKSBtZW51OiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICdib3R0b20nID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICBpZiAodGhpcy5kcm9wRG93blBvc2l0aW9uICE9PSBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnByZWZpeENsc30taW5wdXRgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5mb2N1cykge1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMucHJlZml4Q2xzfS1pbnB1dGApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmJsdXIpIHtcbiAgICAgICAgaW5wdXQuYmx1cigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5ibHVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgICAgdGhpcy5zZXRMYWJlbENsYXNzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9YCBdICAgICAgICAgICAgICAgICAgOiAxLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyYCBdICAgICAgICAgICA6IDEsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1sZ2AgXSAgICAgICAgICAgICAgIDogdGhpcy5uelNpemUgPT09ICdsYXJnZScsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1zbWAgXSAgICAgICAgICAgICAgIDogdGhpcy5uelNpemUgPT09ICdzbWFsbCcsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItZGlzYWJsZWRgIF0gIDogdGhpcy5kaXNhYmxlZCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWZvY3VzZWRgIF0gICAgICAgICAgOiB0aGlzLmlzRm9jdXNlZCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1vcGVuYCBdICAgICAgOiB0aGlzLm1lbnVWaXNpYmxlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLXdpdGgtdmFsdWVgIF06IHRoaXMuaW5wdXRWYWx1ZSAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoXG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgLyoqIOagh+etviDmoLflvI8gKi9cbiAgcHVibGljIGdldCBsYWJlbENscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbENscztcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGFiZWxDbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYWJlbENscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1sYWJlbGAgXTogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXNob3ctc2VhcmNoYCBdIDogISF0aGlzLm56U2hvd1NlYXJjaCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWZvY3VzZWRgIF0gICAgIDogISF0aGlzLm56U2hvd1NlYXJjaCAmJiB0aGlzLmlzRm9jdXNlZCAmJiAhdGhpcy5faW5wdXRWYWx1ZVxuICAgIH07XG4gIH1cblxuICAvKiog566t5aS0IOagt+W8jyAqL1xuICBwdWJsaWMgZ2V0IGFycm93Q2xzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fycm93Q2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBcnJvd0NsYXNzKCk6IHZvaWQge1xuICAgIHRoaXMuX2Fycm93Q2xzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLWFycm93YCBdICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1hcnJvdy1leHBhbmRgIF06IHRoaXMubWVudVZpc2libGVcbiAgICB9O1xuICB9XG5cbiAgLyoqIOWKoOi9veS4reWbvuaghyDmoLflvI8gKi9cbiAgcHVibGljIGdldCBsb2FkaW5nQ2xzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmdDbHM7XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmdDbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2FkaW5nQ2xzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLWFycm93YCBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDmuIXpmaTlm77moIcg5qC35byPICovXG4gIHB1YmxpYyBnZXQgY2xlYXJDbHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYXJDbHM7XG4gIH1cblxuICBwcml2YXRlIHNldENsZWFyQ2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xlYXJDbHMgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItY2xlYXJgIF06IHRydWVcbiAgICB9O1xuICB9XG5cbiAgLyoqIOi+k+WFpeahhiDmoLflvI8gKi9cbiAgcHVibGljIGdldCBpbnB1dENscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dENscztcbiAgfVxuXG4gIHByaXZhdGUgc2V0SW5wdXRDbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnB1dENscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWlucHV0YCBdICAgICAgICA6IDEsXG4gICAgICBbIGAke3RoaXMuaW5wdXRQcmVmaXhDbHN9LWRpc2FibGVkYCBdOiB0aGlzLm56RGlzYWJsZWQsXG4gICAgICBbIGAke3RoaXMuaW5wdXRQcmVmaXhDbHN9LWxnYCBdICAgICAgOiB0aGlzLm56U2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFsgYCR7dGhpcy5pbnB1dFByZWZpeENsc30tc21gIF0gICAgICA6IHRoaXMubnpTaXplID09PSAnc21hbGwnXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDmta7lsYIg5qC35byPICovXG4gIHB1YmxpYyBnZXQgbWVudUNscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tZW51Q2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRNZW51Q2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVudUNscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnVzYCBdICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnVzLWhpZGRlbmAgXTogIXRoaXMubWVudVZpc2libGUsXG4gICAgICBbIGAke3RoaXMubnpNZW51Q2xhc3NOYW1lfWAgXSAgICAgICA6IHRoaXMubnpNZW51Q2xhc3NOYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDmta7lsYLliJcg5qC35byPICovXG4gIHB1YmxpYyBnZXQgbWVudUNvbHVtbkNscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tZW51Q29sdW1uQ2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRNZW51Q29sdW1uQ2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVudUNvbHVtbkNscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnVgIF0gICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMubnpDb2x1bW5DbGFzc05hbWV9YCBdOiB0aGlzLm56Q29sdW1uQ2xhc3NOYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDojrflj5bliJfkuK1PcHRpb27nmoTmoLflvI8gKi9cbiAgcHVibGljIGdldE9wdGlvbkNscyhvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudS1pdGVtYCBdICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudS1pdGVtLWV4cGFuZGAgXSAgOiAhb3B0aW9uLmlzTGVhZixcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnUtaXRlbS1hY3RpdmVgIF0gIDogdGhpcy5pc0FjdGl2ZWRPcHRpb24ob3B0aW9uLCBpbmRleCksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1tZW51LWl0ZW0tZGlzYWJsZWRgIF06IG9wdGlvbi5kaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICAvKiogcHJldmVudCBpbnB1dCBjaGFuZ2UgZXZlbnQgKi9cbiAgcHVibGljIGhhbmRsZXJJbnB1dENoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKiBpbnB1dCBlbGVtZW50IGJsdXIgKi9cbiAgcHVibGljIGhhbmRsZUlucHV0Qmx1cihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAvKlxuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKi9cbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSkge1xuICAgICAgdGhpcy5mb2N1cygpOyAvLyBrZWVwIGlucHV0IGhhcyBmb2N1cyB3aGVuIG1lbnUgb3BlbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBpbnB1dCBlbGVtZW50IGZvY3VzICovXG4gIHB1YmxpYyBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIC8qXG4gICAgaWYgKCF0aGlzLm56U2hvd1NlYXJjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAqL1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgICB0aGlzLnNldExhYmVsQ2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzSW5wdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZS5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKiogV2hldGhlciB0byBzaG93IGlucHV0IGVsZW1lbnQgcGxhY2Vob2xkZXIgKi9cbiAgcHVibGljIGdldCBzaG93UGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEodGhpcy5oYXNJbnB1dCgpIHx8IHRoaXMuaGFzVmFsdWUoKSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgY2xlYXIgYnV0dG9uIGlzIHZpc2libGUgKi9cbiAgcHVibGljIGdldCBzaG93Q2xlYXJJY29uKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzSGFzVmFsdWUgPSB0aGlzLmhhc1ZhbHVlKCk7XG4gICAgY29uc3QgaXNIYXNJbnB1dCA9IHRoaXMuaGFzSW5wdXQoKTtcbiAgICByZXR1cm4gdGhpcy5uekFsbG93Q2xlYXIgJiYgIXRoaXMubnpEaXNhYmxlZCAmJiAoaXNIYXNWYWx1ZSB8fCBpc0hhc0lucHV0KTtcbiAgfVxuXG4gIC8qKiBjbGVhciB0aGUgaW5wdXQgYm94IGFuZCBzZWxlY3RlZCBvcHRpb25zICovXG4gIHB1YmxpYyBjbGVhclNlbGVjdGlvbihldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcbiAgICAvLyB0aGlzLmlzTGFiZWxSZW5kZXJUZW1wbGF0ZSA9IGZhbHNlO1xuICAgIC8vIGNsZWFyIGN1c3RvbSBjb250ZXh0XG4gICAgdGhpcy5sYWJlbFJlbmRlckNvbnRleHQgPSB7fTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xuXG4gICAgLy8gdHJpZ2dlciBjaGFuZ2UgZXZlbnRcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGREaXNwbGF5TGFiZWwoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnM7XG4gICAgY29uc3QgbGFiZWxzOiBzdHJpbmdbXSA9IHNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmdldE9wdGlvbkxhYmVsKG8pKTtcbiAgICAvLyDorr7nva7lvZPliY3mjqfku7bnmoTmmL7npLrlgLxcbiAgICBpZiAodGhpcy5pc0xhYmVsUmVuZGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0geyBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9IGRlZmF1bHREaXNwbGF5UmVuZGVyLmNhbGwodGhpcywgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbICckZXZlbnQnIF0pXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBpZiAoa2V5Q29kZSAhPT0gRE9XTl9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gVVBfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IExFRlRfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IFJJR0hUX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBFTlRFUiAmJlxuICAgICAga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmXG4gICAgICBrZXlDb2RlICE9PSBFU0NBUEUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pblNlYXJjaCAmJiAoXG4gICAgICBrZXlDb2RlID09PSBCQUNLU1BBQ0UgfHxcbiAgICAgIGtleUNvZGUgPT09IExFRlRfQVJST1cgfHxcbiAgICAgIGtleUNvZGUgPT09IFJJR0hUX0FSUk9XXG4gICAgKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXNzIGFueSBrZXlzIGFib3ZlIHRvIHJlb3BlbiBtZW51XG4gICAgaWYgKCF0aGlzLmlzTWVudVZpc2libGUoKSAmJlxuICAgICAga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmXG4gICAgICBrZXlDb2RlICE9PSBFU0NBUEUpIHtcbiAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFByZXNzIEVTQyB0byBjbG9zZSBtZW51XG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRSkge1xuICAgICAgLy8gdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7IC8vIGFscmVhZHkgY2FsbCBieSBjZGstb3ZlcmxheSBkZXRhY2hcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc01lbnVWaXNpYmxlKCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVEb3duKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZVVwKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlTGVmdCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgICB0aGlzLm9uRW50ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcbiAgcHVibGljIG9uVHJpZ2dlckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9uVG91Y2hlZCgpOyAvLyBzZXQgeW91ciBjb250cm9sIHRvICd0b3VjaGVkJ1xuICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2xpY2tUaWdnZXJBY3Rpb24oKSkge1xuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKCF0aGlzLm1lbnVWaXNpYmxlLCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbICckZXZlbnQnIF0pXG4gIHB1YmxpYyBvblRyaWdnZXJNb3VzZUVudGVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1BvaW50ZXJUaWdnZXJBY3Rpb24oKSkge1xuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKHRydWUsIHRoaXMubnpNb3VzZUVudGVyRGVsYXksIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbICckZXZlbnQnIF0pXG4gIHB1YmxpYyBvblRyaWdnZXJNb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNNZW51VmlzaWJsZSgpIHx8IHRoaXMuaXNPcGVuaW5nKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1BvaW50ZXJUaWdnZXJBY3Rpb24oKSkge1xuICAgICAgY29uc3QgbW91c2VUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgaG9zdEVsID0gdGhpcy5lbDtcbiAgICAgIGNvbnN0IG1lbnVFbCA9IHRoaXMubWVudSAmJiB0aGlzLm1lbnUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChob3N0RWwuY29udGFpbnMobW91c2VUYXJnZXQpIHx8IChtZW51RWwgJiYgbWVudUVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSlcbiAgICAgIC8qfHwgbW91c2VUYXJnZXQucGFyZW50RWxlbWVudC5jb250YWlucyhtZW51RWwpKi8pIHtcbiAgICAgICAgLy8g5Zug5Li65rWu5bGC55qEYmFja2Ryb3Dlh7rnjrDvvIzmmoLml7bmsqHmnInlip7ms5Xoh6rliqjmtojlpLFcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCB0aGlzLm56TW91c2VMZWF2ZURlbGF5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzQ2xpY2tUaWdnZXJBY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56VHJpZ2dlckFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLm56VHJpZ2dlckFjdGlvbiA9PT0gJ2NsaWNrJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubnpUcmlnZ2VyQWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1BvaW50ZXJUaWdnZXJBY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56VHJpZ2dlckFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLm56VHJpZ2dlckFjdGlvbiA9PT0gJ2hvdmVyJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubnpUcmlnZ2VyQWN0aW9uLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xO1xuICB9XG5cbiAgcHVibGljIGNsb3NlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLmJsdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRlbGF5VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmmL7npLrmiJbogIXpmpDol4/oj5zljZVcbiAgICpcbiAgICogQHBhcmFtIHZpc2libGUgdHJ1ZS3mmL7npLrvvIxmYWxzZS3pmpDol49cbiAgICogQHBhcmFtIGRlbGF5IOW7tui/n+aXtumXtFxuICAgKi9cbiAgcHVibGljIGRlbGF5U2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgc2V0T3BlbmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGlmICh2aXNpYmxlICYmIHNldE9wZW5pbmcpIHtcbiAgICAgICAgdGhpcy5pc09wZW5pbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNNZW51VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZW51VmlzaWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRNZW51VmlzaWJsZShtZW51VmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSAhPT0gbWVudVZpc2libGUpIHtcbiAgICAgIHRoaXMubWVudVZpc2libGUgPSBtZW51VmlzaWJsZTtcblxuICAgICAgLy8gdXBkYXRlIGNsYXNzXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgICB0aGlzLnNldEFycm93Q2xhc3MoKTtcbiAgICAgIHRoaXMuc2V0TWVudUNsYXNzKCk7XG5cbiAgICAgIGlmIChtZW51VmlzaWJsZSkge1xuICAgICAgICB0aGlzLmJlZm9yZVZpc2libGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQobWVudVZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBsb2FkIGluaXQgZGF0YSBpZiBuZWNlc3NhcnkgKi9cbiAgcHJpdmF0ZSBiZWZvcmVWaXNpYmxlKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZFJvb3RPcHRpb25zKCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRSb290T3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgY29uc3Qgcm9vdDogYW55ID0ge307XG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihyb290LCAtMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOiOt+WPlk9wdGlvbueahOWAvO+8jOS+i+Wmgu+8jOWPr+S7peaMh+WummxhYmVsUHJvcGVydHk9XCJuYW1lXCLmnaXlj5ZOYW1lICovXG4gIHB1YmxpYyBnZXRPcHRpb25MYWJlbChvcHRpb246IENhc2NhZGVyT3B0aW9uKTogYW55IHtcbiAgICByZXR1cm4gb3B0aW9uWyB0aGlzLm56TGFiZWxQcm9wZXJ0eSB8fCAnbGFiZWwnIF07XG4gIH1cblxuICAvKiog6I635Y+WT3B0aW9u55qE5YC877yM5L6L5aaC77yM5Y+v5Lul5oyH5a6admFsdWVQcm9wZXJ0eT1cImlkXCLmnaXlj5ZJRCAqL1xuICBwdWJsaWMgZ2V0T3B0aW9uVmFsdWUob3B0aW9uOiBDYXNjYWRlck9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvblsgdGhpcy5uelZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJyBdO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0FjdGl2ZWRPcHRpb24ob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFjdGl2ZU9wdCA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaW5kZXggXTtcbiAgICByZXR1cm4gYWN0aXZlT3B0ID09PSBvcHRpb247XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5p+Q5YiX55qE5r+A5rS755qE6I+c5Y2V6YCJ6aG5XG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb24g6I+c5Y2V6YCJ6aG5XG4gICAqIEBwYXJhbSBpbmRleCAg6YCJ6aG55omA5Zyo55qE5YiX57uE55qE57Si5byVXG4gICAqIEBwYXJhbSBzZWxlY3Qg5piv5ZCm6Kem5Y+R6YCJ5oup57uT54K5XG4gICAqL1xuICBwcml2YXRlIHNldEFjdGl2ZU9wdGlvbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSwgbG9hZENoaWxkcmVuOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICghb3B0aW9uIHx8IG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaW5kZXggXSA9IG9wdGlvbjtcblxuICAgIC8vIOW9k+ebtOaOpemAieaLqeacgOWQjuS4gOe6p+aXtu+8jOWJjemdoueahOmAiemhueimgeihpeWFqOOAguS+i+Wmgu+8jOmAieaLqeKAnOWfjuW4guKAne+8jOWImeiHquWKqOihpeWFqOKAnOWbveWutuKAneOAgeKAnOecgeS7veKAnVxuICAgIGZvciAobGV0IGkgPSBpbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaSBdKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaSBdID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpICsgMSBdLnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5oiq5pat5aSa5L2Z55qE6YCJ6aG577yM5aaC6YCJ5oup4oCc55yB5Lu94oCd77yM5YiZ5Y+q5Lya5pyJ4oCc5Zu95a624oCd44CB4oCc55yB5Lu94oCd77yM5Y675o6J4oCc5Z+O5biC4oCd44CB4oCc5Yy65Y6/4oCdXG4gICAgaWYgKGluZGV4IDwgdGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zbGljZSgwLCBpbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8vIGxvYWQgY2hpbGRyZW5cbiAgICBpZiAob3B0aW9uLmNoaWxkcmVuICYmIG9wdGlvbi5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIG9wdGlvbi5pc0xlYWYgPSBmYWxzZTtcbiAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnBhcmVudCA9IG9wdGlvbik7XG4gICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuLCBpbmRleCArIDEpO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZENoaWxkcmVuKSB7XG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihvcHRpb24sIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2xpY2tpbmcgbGVhZiBub2RlIHdpbGwgcmVtb3ZlIGFueSBjaGlsZHJlbiBjb2x1bW5zXG4gICAgICBpZiAoaW5kZXggPCB0aGlzLm56Q29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMubnpDb2x1bW5zID0gdGhpcy5uekNvbHVtbnMuc2xpY2UoMCwgaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0cmlnZ2VyIHNlbGVjdCBldmVudCwgYW5kIGRpc3BsYXkgbGFiZWxcbiAgICBpZiAoc2VsZWN0KSB7XG4gICAgICB0aGlzLm9uU2VsZWN0T3B0aW9uKG9wdGlvbiwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZENoaWxkcmVuKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIHN1Y2Nlc3M/OiAoKSA9PiB2b2lkLCBmYWlsdXJlPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56TG9hZERhdGEpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gaW5kZXggPCAwO1xuICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5uekxvYWREYXRhKG9wdGlvbiwgaW5kZXgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBvcHRpb24pO1xuICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBvcHRpb24uaXNMZWFmID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZhaWx1cmUpIHtcbiAgICAgICAgICBmYWlsdXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25TZWxlY3RPcHRpb24ob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIC8vIHRyaWdnZXIgYG56U2VsZWN0YCBldmVudFxuICAgIHRoaXMubnpTZWxlY3QuZW1pdCh7IG9wdGlvbiwgaW5kZXggfSk7XG5cbiAgICAvLyDnlJ/miJDmmL7npLpcbiAgICBpZiAob3B0aW9uLmlzTGVhZiB8fCB0aGlzLm56Q2hhbmdlT25TZWxlY3QgfHwgdGhpcy5pc0NoYW5nZU9uKG9wdGlvbiwgaW5kZXgpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcbiAgICAgIC8vIOiuvue9ruW9k+WJjeaOp+S7tueahOaYvuekuuWAvFxuICAgICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xuICAgICAgLy8g6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNrIG9uIGxlYWZcbiAgICBpZiAob3B0aW9uLmlzTGVhZikge1xuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCB0aGlzLm56TW91c2VMZWF2ZURlbGF5KTtcbiAgICB9XG4gIH1cblxuICAvKiog55Sx55So5oi35p2l5a6a5LmJ54K55Ye75ZCO5piv5ZCm5Y+Y5pu0ICovXG4gIHByaXZhdGUgaXNDaGFuZ2VPbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56Q2hhbmdlT24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLm56Q2hhbmdlT24ob3B0aW9uLCBpbmRleCkgPT09IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29sdW1uRGF0YShvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCFhcnJheUVxdWFscyh0aGlzLm56Q29sdW1uc1sgaW5kZXggXSwgb3B0aW9ucykpIHtcbiAgICAgIHRoaXMubnpDb2x1bW5zWyBpbmRleCBdID0gb3B0aW9ucztcbiAgICAgIGlmIChpbmRleCA8IHRoaXMubnpDb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5uekNvbHVtbnMgPSB0aGlzLm56Q29sdW1ucy5zbGljZSgwLCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpvKDmoIfngrnlh7vpgInpoblcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbiDoj5zljZXpgInpoblcbiAgICogQHBhcmFtIGluZGV4IOmAiemhueaJgOWcqOeahOWIl+e7hOeahOe0ouW8lVxuICAgKiBAcGFyYW0gZXZlbnQg6byg5qCH5LqL5Lu2XG4gICAqL1xuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvLyBLZWVwIGZvY3VzZWQgc3RhdGUgZm9yIGtleWJvYXJkIHN1cHBvcnRcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG5cbiAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluU2VhcmNoKSB7XG4gICAgICB0aGlzLnNldFNlYXJjaEFjdGl2ZU9wdGlvbihvcHRpb24gYXMgQ2FzY2FkZXJTZWFyY2hPcHRpb24sIGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uLCBpbmRleCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOaMieS4i+Wbnui9pumUruaXtumAieaLqSAqL1xuICBwcml2YXRlIG9uRW50ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XG4gICAgY29uc3QgYWN0aXZlT3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBjb2x1bW5JbmRleCBdO1xuICAgIGlmIChhY3RpdmVPcHRpb24gJiYgIWFjdGl2ZU9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMuaW5TZWFyY2gpIHtcbiAgICAgICAgdGhpcy5zZXRTZWFyY2hBY3RpdmVPcHRpb24oYWN0aXZlT3B0aW9uIGFzIENhc2NhZGVyU2VhcmNoT3B0aW9uLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25TZWxlY3RPcHRpb24oYWN0aXZlT3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHByZXNzIGB1cGAgb3IgYGRvd25gIGFycm93IHRvIGFjdGl2YXRlIHRoZSBzaWJsaW5nIG9wdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbW92ZVVwT3JEb3duKGlzVXA6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcbiAgICAvLyDor6Xnu4TkuK3lt7Lnu4/ooqvmv4DmtLvnmoTpgInpoblcbiAgICBjb25zdCBhY3RpdmVPcHRpb24gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGNvbHVtbkluZGV4IF07XG4gICAgLy8g6K+l57uE5omA5pyJ55qE6YCJ6aG577yM55So5LqO6YGN5Y6G6I635Y+W5LiL5LiA5Liq6KKr5r+A5rS755qE6YCJ6aG5XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMubnpDb2x1bW5zWyBjb2x1bW5JbmRleCBdIHx8IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcbiAgICBpZiAoIWFjdGl2ZU9wdGlvbikgeyAvLyDor6XliJfov5jmsqHmnInpgInkuK3nmoTpgInpoblcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBsZW5ndGggOiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dEluZGV4ID0gb3B0aW9ucy5pbmRleE9mKGFjdGl2ZU9wdGlvbik7XG4gICAgfVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBuZXh0SW5kZXggLSAxIDogbmV4dEluZGV4ICsgMTtcbiAgICAgIGlmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0T3B0aW9uID0gb3B0aW9uc1sgbmV4dEluZGV4IF07XG4gICAgICBpZiAoIW5leHRPcHRpb24gfHwgbmV4dE9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKG5leHRPcHRpb24sIGNvbHVtbkluZGV4KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZVVwKCk6IHZvaWQge1xuICAgIHRoaXMubW92ZVVwT3JEb3duKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmVVcE9yRG93bihmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogcHJlc3MgYGxlZnRgIGFycm93IHRvIHJlbW92ZSB0aGUgbGFzdCBzZWxlY3RlZCBvcHRpb24uXG4gICAqL1xuICBwcml2YXRlIG1vdmVMZWZ0KCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBvcHRpb25zLnBvcCgpOyAvLyBSZW1vdmUgdGhlIGxhc3Qgb25lXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHByZXNzIGByaWdodGAgYXJyb3cgdG8gc2VsZWN0IHRoZSBuZXh0IGNvbHVtbiBvcHRpb24uXG4gICAqL1xuICBwcml2YXRlIG1vdmVSaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm56Q29sdW1uc1sgbGVuZ3RoIF07XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRPcHQgPSBvcHRpb25zLmZpbmQobyA9PiAhby5kaXNhYmxlZCk7XG4gICAgICBpZiAobmV4dE9wdCkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihuZXh0T3B0LCBsZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpvKDmoIfliJLlhaXpgInpoblcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbiDoj5zljZXpgInpoblcbiAgICogQHBhcmFtIGluZGV4IOmAiemhueaJgOWcqOeahOWIl+e7hOeahOe0ouW8lVxuICAgKiBAcGFyYW0gZXZlbnQg6byg5qCH5LqL5Lu2XG4gICAqL1xuICBvbk9wdGlvbk1vdXNlRW50ZXIob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3Qob3B0aW9uLCBpbmRleCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOm8oOagh+WIkuWHuumAiemhuVxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uIOiPnOWNlemAiemhuVxuICAgKiBAcGFyYW0gaW5kZXgg6YCJ6aG55omA5Zyo55qE5YiX57uE55qE57Si5byVXG4gICAqIEBwYXJhbSBldmVudCDpvKDmoIfkuovku7ZcbiAgICovXG4gIG9uT3B0aW9uTW91c2VMZWF2ZShvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm56RXhwYW5kVHJpZ2dlciA9PT0gJ2hvdmVyJyAmJiAhb3B0aW9uLmlzTGVhZikge1xuICAgICAgdGhpcy5kZWxheVNlbGVjdChvcHRpb24sIGluZGV4LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRlbGF5U2VsZWN0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlTZWxlY3RUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlTZWxlY3RUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVsYXlTZWxlY3Qob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgZG9TZWxlY3Q6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xuICAgIGlmIChkb1NlbGVjdCkge1xuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIOm8oOagh+a7keWFpeWPquWxleW8gO+8jOS4jei/m+ihjOmAieS4reaTjeS9nFxuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihvcHRpb24sIGluZGV4KTtcbiAgICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFN1Ym1pdFZhbHVlKCk6IGFueVtdIHtcbiAgICBjb25zdCB2YWx1ZXM6IGFueVtdID0gW107XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgdmFsdWVzLnB1c2godGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRTdWJtaXRWYWx1ZSgpO1xuICAgIGlmICghYXJyYXlFcXVhbHModGhpcy52YWx1ZSwgdmFsdWUpKSB7XG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG51bGw7IC8vIGNsZWFyIHRoZSBpbml0LXZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTsgLy8gQW5ndWxhciBuZWVkIHRoaXNcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5uekNsZWFyLmVtaXQoKTsgLy8gZmlyc3QgdHJpZ2dlciBgY2xlYXJgIGFuZCB0aGVuIGBjaGFuZ2VgXG4gICAgICB9XG4gICAgICB0aGlzLm56U2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kT3B0aW9uKG9wdGlvbjogYW55LCBpbmRleDogbnVtYmVyKTogQ2FzY2FkZXJPcHRpb24ge1xuICAgIGNvbnN0IG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSB0aGlzLm56Q29sdW1uc1sgaW5kZXggXTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSA6IG9wdGlvbjtcbiAgICAgIHJldHVybiBvcHRpb25zLmZpbmQobyA9PiB2YWx1ZSA9PT0gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0xvYWRlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpDb2x1bW5zWyBpbmRleCBdICYmIHRoaXMubnpDb2x1bW5zWyBpbmRleCBdLmxlbmd0aCA+IDA7XG4gIH1cblxuICBwcml2YXRlIGFjdGl2YXRlT25Jbml0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgb3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHZhbHVlLCBpbmRleCk7XG4gICAgaWYgKCFvcHRpb24pIHtcbiAgICAgIG9wdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHtcbiAgICAgICAgWyBgJHt0aGlzLm56VmFsdWVQcm9wZXJ0eSB8fCAndmFsdWUnfWAgXTogdmFsdWUsXG4gICAgICAgIFsgYCR7dGhpcy5uekxhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJ31gIF06IHZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihvcHRpb24sIGluZGV4LCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0T3B0aW9ucyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdnMgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZU9uSW5pdChpbmRleCwgdnNbIGluZGV4IF0pO1xuICAgICAgaWYgKGluZGV4IDwgdnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IHZzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5hZnRlcldyaXRlVmFsdWUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaXNMb2FkZWQoaW5kZXgpIHx8ICF0aGlzLm56TG9hZERhdGEpIHtcbiAgICAgIGxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaW5kZXggLSAxIF0gfHwge307XG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihub2RlLCBpbmRleCAtIDEsIGxvYWQsIHRoaXMuYWZ0ZXJXcml0ZVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBhZnRlcldyaXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0U3VibWl0VmFsdWUoKTtcbiAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXG4gICAqXG4gICAqIEBPdmVycmlkZSAoRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UpXG4gICAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2cyA9IHRoaXMuZGVmYXVsdFZhbHVlID0gdG9BcnJheSh2YWx1ZSk7XG4gICAgaWYgKHZzLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbml0T3B0aW9ucygwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHZzO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgICB0aGlzLmFmdGVyV3JpdGVWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb3NlTWVudSgpO1xuICAgIH1cbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU2VhcmNoVmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgcmVzdWx0czogQ2FzY2FkZXJTZWFyY2hPcHRpb25bXSA9IFtdO1xuICAgIGNvbnN0IHBhdGg6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcbiAgICBjb25zdCBkZWZhdWx0RmlsdGVyID0gKGlucHV0VmFsdWU6IHN0cmluZywgcDogQ2FzY2FkZXJPcHRpb25bXSk6IGJvb2xlYW4gPT4ge1xuICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICAgIHAuZm9yRWFjaChuID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWxOYW1lID0gdGhpcy5uekxhYmVsUHJvcGVydHk7XG4gICAgICAgIGlmIChuWyBsYWJlbE5hbWUgXSAmJiBuWyBsYWJlbE5hbWUgXS5pbmRleE9mKGlucHV0VmFsdWUpID4gLTEpIHtcbiAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmxhZztcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsdGVyOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBwOiBDYXNjYWRlck9wdGlvbltdKSA9PiBib29sZWFuID1cbiAgICAgIHRoaXMubnpTaG93U2VhcmNoIGluc3RhbmNlb2YgT2JqZWN0ICYmICh0aGlzLm56U2hvd1NlYXJjaCBhcyBOelNob3dTZWFyY2hPcHRpb25zKS5maWx0ZXJcbiAgICAgICAgPyAodGhpcy5uelNob3dTZWFyY2ggYXMgTnpTaG93U2VhcmNoT3B0aW9ucykuZmlsdGVyXG4gICAgICAgIDogZGVmYXVsdEZpbHRlcjtcbiAgICBjb25zdCBzb3J0ZXI6IChhOiBDYXNjYWRlck9wdGlvbltdLCBiOiBDYXNjYWRlck9wdGlvbltdLCBpbnB1dFZhbHVlOiBzdHJpbmcpID0+IG51bWJlciA9XG4gICAgICB0aGlzLm56U2hvd1NlYXJjaCBpbnN0YW5jZW9mIE9iamVjdCAmJiAodGhpcy5uelNob3dTZWFyY2ggYXMgTnpTaG93U2VhcmNoT3B0aW9ucykuc29ydGVyO1xuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICBwYXRoLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKHNOb2RlKSA9PiB7XG4gICAgICAgIGlmICghc05vZGUucGFyZW50KSB7XG4gICAgICAgICAgc05vZGUucGFyZW50ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvKiog5pCc57Si55qE5ZCM5pe25bu656uLIHBhcmVudCDov57mjqXvvIzlm6DkuLrnlKjmiLfnm7TmjqXmkJzntKLnmoTor53mmK/msqHmnInlu7rnq4vov57mjqXnmoTvvIzkvJrmj5DljYfku47lj7blrZDoioLngrnlm57muq/nmoTpmr7luqYgKi9cbiAgICAgICAgaWYgKCFzTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgICBsb29wUGFyZW50KHNOb2RlLCBkaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNOb2RlLmlzTGVhZiB8fCAhc05vZGUuY2hpbGRyZW4gfHwgIXNOb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGxvb3BDaGlsZChzTm9kZSwgZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfTtcbiAgICBjb25zdCBsb29wQ2hpbGQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xuICAgICAgaWYgKGZpbHRlcih0aGlzLl9pbnB1dFZhbHVlLCBjUGF0aCkpIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbjogQ2FzY2FkZXJTZWFyY2hPcHRpb24gPSB7XG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgaXNMZWFmICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICAgICAgcGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNQYXRoLFxuICAgICAgICAgIFsgdGhpcy5uekxhYmVsUHJvcGVydHkgXTogY1BhdGgubWFwKHAgPT4gcC5sYWJlbCkuam9pbignIC8gJylcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKG9wdGlvbik7XG4gICAgICB9XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH07XG5cbiAgICB0aGlzLm9sZENvbHVtbnNIb2xkZXJbIDAgXS5mb3JFYWNoKG5vZGUgPT4gKG5vZGUuaXNMZWFmIHx8ICFub2RlLmNoaWxkcmVuIHx8ICFub2RlLmNoaWxkcmVuLmxlbmd0aClcbiAgICAgID8gbG9vcENoaWxkKG5vZGUpXG4gICAgICA6IGxvb3BQYXJlbnQobm9kZSkpO1xuICAgIGlmIChzb3J0ZXIpIHtcbiAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gc29ydGVyKGEucGF0aCwgYi5wYXRoLCB0aGlzLl9pbnB1dFZhbHVlKSk7XG4gICAgfVxuICAgIHRoaXMubnpDb2x1bW5zID0gWyByZXN1bHRzIF07XG4gIH1cblxuICByZW5kZXJTZWFyY2hTdHJpbmcoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuX2lucHV0VmFsdWUsICdnJyksXG4gICAgICBgPHNwYW4gY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudS1pdGVtLWtleXdvcmRcIj4ke3RoaXMuX2lucHV0VmFsdWV9PC9zcGFuPmApO1xuICB9XG5cbiAgc2V0U2VhcmNoQWN0aXZlT3B0aW9uKHJlc3VsdDogQ2FzY2FkZXJTZWFyY2hPcHRpb24sIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsgcmVzdWx0IF07XG4gICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCAyMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJzsgLy8gTm90IG9ubHkgcmVtb3ZlIGBpbnB1dFZhbHVlYCBidXQgYWxzbyByZXZlcnNlIGBuekNvbHVtbnNgIGluIHRoZSBob29rLlxuICAgICAgY29uc3QgaW5kZXggPSByZXN1bHQucGF0aC5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgZGVzdGlOb2RlID0gcmVzdWx0LnBhdGhbIGluZGV4IF07XG4gICAgICBjb25zdCBtb2NrQ2xpY2tQYXJlbnQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGNJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChub2RlICYmIG5vZGUucGFyZW50KSB7XG4gICAgICAgICAgbW9ja0NsaWNrUGFyZW50KG5vZGUucGFyZW50LCBjSW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uT3B0aW9uQ2xpY2sobm9kZSwgY0luZGV4LCBldmVudCk7XG4gICAgICB9O1xuICAgICAgbW9ja0NsaWNrUGFyZW50KGRlc3RpTm9kZSwgaW5kZXgpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyDorr7nva7moLflvI9cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5zZXRMYWJlbENsYXNzKCk7XG4gICAgdGhpcy5zZXRBcnJvd0NsYXNzKCk7XG4gICAgdGhpcy5zZXRMb2FkaW5nQ2xhc3MoKTtcbiAgICB0aGlzLnNldENsZWFyQ2xhc3MoKTtcbiAgICB0aGlzLnNldElucHV0Q2xhc3MoKTtcbiAgICB0aGlzLnNldE1lbnVDbGFzcygpO1xuICAgIHRoaXMuc2V0TWVudUNvbHVtbkNsYXNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XG4gIH1cblxufVxuIl19