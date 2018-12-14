import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
export declare class NzAffixComponent implements OnInit, OnDestroy {
    private scrollSrv;
    private _el;
    private cd;
    private timeout;
    private events;
    private affixStyle;
    private placeholderStyle;
    private wrap;
    private _target;
    nzTarget: Element | Window;
    private _offsetTop;
    nzOffsetTop: number;
    private _offsetBottom;
    nzOffsetBottom: number;
    nzChange: EventEmitter<boolean>;
    constructor(scrollSrv: NzScrollService, _el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    private setTargetEventListeners;
    private clearEventListeners;
    ngOnDestroy(): void;
    private getTargetRect;
    getOffset(element: Element, target: Element | Window | null): {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    private genStyle;
    private setAffixStyle;
    private setPlaceholderStyle;
    updatePosition(e: any): void;
}
