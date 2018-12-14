import { ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
export declare class NzWaveDirective implements OnInit, OnDestroy {
    private ngZone;
    private elementRef;
    private waveRenderer;
    nzWaveExtraNode: boolean;
    constructor(ngZone: NgZone, elementRef: ElementRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
}
