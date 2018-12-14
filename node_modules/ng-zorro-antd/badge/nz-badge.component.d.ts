import { AfterViewInit, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
export declare type NzBadgeStatusType = 'success' | 'processing' | 'default' | 'error' | 'warning';
export declare class NzBadgeComponent implements OnInit, AfterViewInit {
    private zone;
    private renderer;
    private elementRef;
    private _showDot;
    private _showZero;
    private _count;
    maxNumberArray: any[];
    countArray: any[];
    countSingleArray: number[];
    contentElement: ElementRef;
    nzOverflowCount: number;
    nzText: string;
    nzStyle: {
        [key: string]: string;
    };
    nzStatus: NzBadgeStatusType;
    nzShowZero: boolean;
    nzDot: boolean;
    nzCount: number;
    readonly showSup: boolean;
    checkContent(): void;
    constructor(zone: NgZone, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
