import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export declare type NzCascaderExpandTrigger = 'click' | 'hover';
export declare type NzCascaderTriggerType = 'click' | 'hover';
export declare type NzCascaderSize = 'small' | 'large' | 'default';
export interface CascaderOption {
    value?: any;
    label?: string;
    title?: string;
    disabled?: boolean;
    loading?: boolean;
    isLeaf?: boolean;
    parent?: CascaderOption;
    children?: CascaderOption[];
    [key: string]: any;
}
export interface CascaderSearchOption extends CascaderOption {
    path: CascaderOption[];
}
export interface NzShowSearchOptions {
    filter?(inputValue: string, path: CascaderOption[]): boolean;
    sorter?(a: CascaderOption[], b: CascaderOption[], inputValue: string): number;
}
export declare class NzCascaderComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private elementRef;
    private cdr;
    private nzUpdateHostClassService;
    private allowClear;
    private autoFocus;
    private disabled;
    private enableCache;
    private showArrow;
    private showInput;
    private size;
    private prefixCls;
    private inputPrefixCls;
    private menuClassName;
    private columnClassName;
    private changeOnSelect;
    private showSearch;
    private defaultValue;
    dropDownPosition: string;
    menuVisible: boolean;
    isLoading: boolean;
    private isOpening;
    private _arrowCls;
    private _clearCls;
    private _inputCls;
    private _labelCls;
    private _loadingCls;
    private _menuCls;
    private _menuColumnCls;
    el: HTMLElement;
    private isFocused;
    /** 选择选项后，渲染显示文本 */
    private labelRenderTpl;
    isLabelRenderTemplate: boolean;
    labelRenderText: string;
    labelRenderContext: any;
    private value;
    private selectedOptions;
    private activatedOptions;
    nzColumns: CascaderOption[][];
    private delayTimer;
    private delaySelectTimer;
    /** 搜索相关的输入值 */
    private _inputValue;
    inputValue: string;
    onChange: any;
    onTouched: any;
    positions: ConnectionPositionPair[];
    /** Display Render ngTemplate */
    nzLabelRender: TemplateRef<any>;
    /** prefixCls */
    nzPrefixCls: string;
    /** Whether is disabled */
    nzDisabled: boolean;
    /** Input size, one of `large` `default` `small` */
    nzSize: NzCascaderSize;
    /** Whether show input box. Defaults to `true`. */
    nzShowInput: boolean;
    /** Whether can search. Defaults to `false`. */
    nzShowSearch: boolean | NzShowSearchOptions;
    searchWidthStyle: string;
    private oldColumnsHolder;
    private oldActivatedOptions;
    /** If cascader is in search mode. */
    inSearch: boolean;
    /** Whether allow clear. Defaults to `true`. */
    nzAllowClear: boolean;
    /** Whether auto focus. */
    nzAutoFocus: boolean;
    /** Whether to show arrow */
    nzShowArrow: boolean;
    /** Additional className of popup overlay */
    nzMenuClassName: string;
    /** Additional className of popup overlay column */
    nzColumnClassName: string;
    /** Options for first column, sub column will be load async */
    nzOptions: CascaderOption[] | null;
    /** Change value on each selection if set to true */
    nzChangeOnSelect: boolean;
    /** Hover text for the clear icon */
    nzClearText: string;
    /** Expand column item when click or hover, one of 'click' 'hover' */
    nzExpandTrigger: NzCascaderExpandTrigger;
    /** Specify content to show when no result matches. */
    nzNotFoundContent: string;
    /** Input placeholder */
    nzPlaceHolder: string;
    /** Additional style of popup overlay */
    nzMenuStyle: {
        [key: string]: string;
    };
    /** Change value on selection only if this function returns `true` */
    nzChangeOn: (option: CascaderOption, level: number) => boolean;
    /** Delay time to show when mouse enter, when `nzExpandTrigger` is `hover`. */
    nzMouseEnterDelay: number;
    /** Delay time to hide when mouse enter, when `nzExpandTrigger` is `hover`. */
    nzMouseLeaveDelay: number;
    /** Triggering mode: can be Array<'click'|'hover'> */
    nzTriggerAction: NzCascaderTriggerType | NzCascaderTriggerType[];
    /** Property name for getting `value` in the option */
    nzValueProperty: string;
    /** Property name for getting `label` in the option */
    nzLabelProperty: string;
    /** 异步加载数据 */
    nzLoadData: (node: CascaderOption, index?: number) => PromiseLike<any>;
    /** Event: emit on popup show or hide */
    nzVisibleChange: EventEmitter<boolean>;
    /** Event: emit on values changed */
    nzChange: EventEmitter<any[]>;
    /** Event: emit on values and selection changed */
    nzSelectionChange: EventEmitter<CascaderOption[]>;
    /**
     * Event: emit on option selected, event data：{option: any, index: number}
     */
    nzSelect: EventEmitter<{
        option: CascaderOption;
        index: number;
    }>;
    /** Event: emit on the clear button clicked */
    nzClear: EventEmitter<void>;
    input: ElementRef;
    /** 浮层菜单 */
    menu: ElementRef;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    focus(): void;
    blur(): void;
    private setClassMap;
    /** 标签 样式 */
    readonly labelCls: any;
    private setLabelClass;
    /** 箭头 样式 */
    readonly arrowCls: any;
    private setArrowClass;
    /** 加载中图标 样式 */
    readonly loadingCls: any;
    private setLoadingClass;
    /** 清除图标 样式 */
    readonly clearCls: any;
    private setClearClass;
    /** 输入框 样式 */
    readonly inputCls: any;
    private setInputClass;
    /** 浮层 样式 */
    readonly menuCls: any;
    private setMenuClass;
    /** 浮层列 样式 */
    readonly menuColumnCls: any;
    private setMenuColumnClass;
    /** 获取列中Option的样式 */
    getOptionCls(option: CascaderOption, index: number): any;
    /** prevent input change event */
    handlerInputChange(event: Event): void;
    /** input element blur */
    handleInputBlur(event: Event): void;
    /** input element focus */
    handleInputFocus(event: Event): void;
    private hasInput;
    private hasValue;
    /** Whether to show input element placeholder */
    readonly showPlaceholder: boolean;
    /** Whether the clear button is visible */
    readonly showClearIcon: boolean;
    /** clear the input box and selected options */
    clearSelection(event?: Event): void;
    private buildDisplayLabel;
    onKeyDown(event: KeyboardEvent): void;
    onTriggerClick(event: MouseEvent): void;
    onTriggerMouseEnter(event: MouseEvent): void;
    onTriggerMouseLeave(event: MouseEvent): void;
    private isClickTiggerAction;
    private isPointerTiggerAction;
    closeMenu(): void;
    private clearDelayTimer;
    /**
     * 显示或者隐藏菜单
     *
     * @param visible true-显示，false-隐藏
     * @param delay 延迟时间
     */
    delaySetMenuVisible(visible: boolean, delay: number, setOpening?: boolean): void;
    isMenuVisible(): boolean;
    setMenuVisible(menuVisible: boolean): void;
    /** load init data if necessary */
    private beforeVisible;
    private loadRootOptions;
    /** 获取Option的值，例如，可以指定labelProperty="name"来取Name */
    getOptionLabel(option: CascaderOption): any;
    /** 获取Option的值，例如，可以指定valueProperty="id"来取ID */
    getOptionValue(option: CascaderOption): any;
    private isActivedOption;
    /**
     * 设置某列的激活的菜单选项
     *
     * @param option 菜单选项
     * @param index  选项所在的列组的索引
     * @param select 是否触发选择结点
     */
    private setActiveOption;
    private loadChildren;
    private onSelectOption;
    /** 由用户来定义点击后是否变更 */
    private isChangeOn;
    private setColumnData;
    /**
     * 鼠标点击选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    onOptionClick(option: CascaderOption, index: number, event: Event): void;
    /** 按下回车键时选择 */
    private onEnter;
    /**
     * press `up` or `down` arrow to activate the sibling option.
     */
    private moveUpOrDown;
    private moveUp;
    private moveDown;
    /**
     * press `left` arrow to remove the last selected option.
     */
    private moveLeft;
    /**
     * press `right` arrow to select the next column option.
     */
    private moveRight;
    /**
     * 鼠标划入选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    onOptionMouseEnter(option: CascaderOption, index: number, event: Event): void;
    /**
     * 鼠标划出选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    onOptionMouseLeave(option: CascaderOption, index: number, event: Event): void;
    private clearDelaySelectTimer;
    private delaySelect;
    getSubmitValue(): any[];
    private onValueChange;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, nzUpdateHostClassService: NzUpdateHostClassService);
    private findOption;
    private isLoaded;
    private activateOnInit;
    private initOptions;
    afterWriteValue(): void;
    /**
     * Write a new value to the element.
     *
     * @Override (From ControlValueAccessor interface)
     */
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    private prepareSearchValue;
    renderSearchString(str: string): string;
    setSearchActiveOption(result: CascaderSearchOption, event: Event): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
