import { DoCheck, ElementRef, EventEmitter, IterableDiffer, IterableDiffers, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { TransferItem } from './interface';
export declare class NzTransferListComponent implements OnChanges, OnInit, DoCheck {
    private el;
    private updateHostClassService;
    private _showSearch;
    direction: string;
    titleText: string;
    dataSource: TransferItem[];
    itemUnit: string;
    itemsUnit: string;
    filter: string;
    showSearch: boolean;
    searchPlaceholder: string;
    notFoundContent: string;
    filterOption: (inputValue: string, item: TransferItem) => boolean;
    render: TemplateRef<void>;
    footer: TemplateRef<void>;
    handleSelectAll: EventEmitter<boolean>;
    handleSelect: EventEmitter<TransferItem>;
    filterChange: EventEmitter<{
        direction: string;
        value: string;
    }>;
    prefixCls: string;
    setClassMap(): void;
    stat: {
        checkAll: boolean;
        checkHalf: boolean;
        checkCount: number;
        shownCount: number;
    };
    onHandleSelectAll(status: boolean): void;
    private updateCheckStatus;
    handleFilter(value: string): void;
    handleClear(): void;
    private matchFilter;
    listDiffer: IterableDiffer<{}>;
    constructor(el: ElementRef, updateHostClassService: NzUpdateHostClassService, differs: IterableDiffers);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    _handleSelect(item: TransferItem): void;
}
