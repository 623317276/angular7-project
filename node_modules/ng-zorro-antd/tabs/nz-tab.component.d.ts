import { EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzTabSetComponent } from './nz-tabset.component';
export declare class NzTabComponent implements OnDestroy, OnInit {
    private nzTabSetComponent;
    private _title;
    private _disabled;
    position: number | null;
    origin: number | null;
    isTitleString: boolean;
    nzDisabled: boolean;
    nzClick: EventEmitter<void>;
    nzSelect: EventEmitter<void>;
    nzDeselect: EventEmitter<void>;
    content: TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    constructor(nzTabSetComponent: NzTabSetComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
