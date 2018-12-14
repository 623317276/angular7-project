import { ElementRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzCollapseComponent } from './nz-collapse.component';
export declare class NzCollapsePanelComponent implements OnDestroy, OnInit {
    private nzCollapseComponent;
    private elementRef;
    private _disabled;
    private _showArrow;
    private _active;
    private _header;
    isHeaderString: boolean;
    private el;
    nzActiveChange: EventEmitter<boolean>;
    nzShowArrow: boolean;
    readonly isNoArrow: boolean;
    nzHeader: string | TemplateRef<void>;
    nzDisabled: boolean;
    nzActive: boolean;
    clickHeader(): void;
    constructor(nzCollapseComponent: NzCollapseComponent, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
