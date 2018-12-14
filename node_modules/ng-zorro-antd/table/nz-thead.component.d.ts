import { AfterContentInit, EventEmitter, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { NzThComponent } from './nz-th.component';
import { NzTableComponent } from './nz-table.component';
export declare class NzTheadComponent implements AfterContentInit, OnDestroy {
    nzTableComponent: NzTableComponent;
    private _singleSort;
    private unsubscribe$;
    template: TemplateRef<void>;
    listOfNzThComponent: QueryList<NzThComponent>;
    nzSortChange: EventEmitter<{
        key: string;
        value: string;
    }>;
    nzSingleSort: boolean;
    constructor(nzTableComponent: NzTableComponent);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
