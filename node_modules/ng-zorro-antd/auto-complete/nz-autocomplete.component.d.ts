import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, QueryList, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzAutocompleteOptionComponent, NzOptionSelectionChange } from './nz-autocomplete-option.component';
export interface AutocompleteDataSourceItem {
    value: string;
    label: string;
}
export declare type AutocompleteDataSource = AutocompleteDataSourceItem[] | string[] | number[];
export declare class NzAutocompleteComponent implements AfterViewInit {
    private changeDetectorRef;
    private _ngZone;
    private activeItemIndex;
    private selectionChangeSubscription;
    showPanel: boolean;
    isOpen: boolean;
    activeItem: NzAutocompleteOptionComponent;
    dropDownPosition: 'top' | 'center' | 'bottom';
    /** 组件支持设置 dataSource 和 content 设置 options
     *  这个属性为其提供方便的访问方式 */
    readonly options: QueryList<NzAutocompleteOptionComponent>;
    /** 提供给 cdk-overlay 用于渲染 */
    template: TemplateRef<{}>;
    panel: ElementRef;
    content: ElementRef;
    /** 由 Content 提供 options */
    fromContentOptions: QueryList<NzAutocompleteOptionComponent>;
    /** 由 nzDataSource 提供 options */
    fromDataSourceOptions: QueryList<NzAutocompleteOptionComponent>;
    /** 自定义宽度单位 px */
    nzWidth: number;
    /** 是否默认高亮第一个选项，默认 `true` */
    nzDefaultActiveFirstOption: boolean;
    _defaultActiveFirstOption: boolean;
    /** 使用键盘选择选项的时候把选中项回填到输入框中，默认 `false` */
    nzBackfill: boolean;
    _backfill: boolean;
    /** 自动完成的数据源 */
    nzDataSource: AutocompleteDataSource;
    _dataSource: AutocompleteDataSource;
    /** 选择时发出的事件 */
    selectionChange: EventEmitter<NzAutocompleteOptionComponent>;
    /** 用于组件内部监听 options 的选择变化 */
    readonly optionSelectionChanges: Observable<NzOptionSelectionChange>;
    constructor(changeDetectorRef: ChangeDetectorRef, _ngZone: NgZone);
    ngAfterViewInit(): void;
    setVisibility(): void;
    setActiveItem(index: number): void;
    setNextItemActive(): void;
    setPreviousItemActive(): void;
    getOptionIndex(option: NzAutocompleteOptionComponent): number | undefined;
    private optionsInit;
    /**
     * 清除 Options 的激活状态
     */
    private clearSelectedOptions;
    private subscribeOptionChanges;
}
