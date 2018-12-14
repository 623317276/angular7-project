import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
export declare type NzThFilterType = Array<{
    text: string;
    value: any;
    byDefault?: boolean;
}>;
export interface NzThItemInterface {
    text: string;
    value: any;
    checked: boolean;
}
export declare class NzThComponent {
    private elementRef;
    private renderer;
    private _sort;
    private _filters;
    private _showSort;
    private _showFilter;
    private _showCheckbox;
    private _showRowSelection;
    private _hasDefaultFilter;
    private _customFilter;
    el: HTMLElement;
    hasFilterValue: boolean;
    filterVisible: boolean;
    multipleFilterList: NzThItemInterface[];
    singleFilterList: NzThItemInterface[];
    nzDropDownComponent: NzDropDownComponent;
    nzSelections: Array<{
        text: string;
        onSelect: any;
    }>;
    nzChecked: boolean;
    nzDisabled: boolean;
    nzIndeterminate: boolean;
    nzSortKey: string;
    nzFilterMultiple: boolean;
    nzWidth: string;
    nzCheckedChange: EventEmitter<boolean>;
    nzSortChange: EventEmitter<string>;
    nzSortChangeWithKey: EventEmitter<{
        key: string;
        value: string;
    }>;
    nzFilterChange: EventEmitter<any>;
    readonly hasActionsClass: boolean;
    readonly hasFiltersClass: boolean;
    readonly hasSortersClass: boolean;
    updateSortValue(): void;
    nzCustomFilter: boolean;
    nzShowSort: boolean;
    nzShowFilter: boolean;
    nzShowRowSelection: boolean;
    nzLeft: string;
    nzRight: string;
    nzExpand: boolean;
    nzShowCheckbox: boolean;
    nzSort: string;
    setSortValue(value: string): void;
    readonly filterList: NzThItemInterface[];
    readonly filterValue: any;
    updateFilterStatus(): void;
    search(): void;
    reset(): void;
    checkMultiple(filter: NzThItemInterface): void;
    checkSingle(filter: NzThItemInterface): void;
    hideDropDown(): void;
    dropDownVisibleChange(value: boolean): void;
    nzFilters: NzThFilterType;
    initMultipleFilterList(force?: boolean): void;
    initSingleFilterList(force?: boolean): void;
    checkDefaultFilters(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
