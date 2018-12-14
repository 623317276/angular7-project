import { AfterViewInit, ElementRef, NgZone, Renderer2, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export declare class NzSpinComponent implements AfterViewInit {
    private elementRef;
    private renderer;
    private zone;
    private _tip;
    private _delay;
    el: HTMLElement;
    baseSpinning$: BehaviorSubject<boolean>;
    resultSpinning$: Observable<boolean>;
    containerElement: ElementRef;
    nestedElement: ElementRef;
    nzIndicator: TemplateRef<void>;
    nzSize: string;
    nzDelay: number;
    nzTip: string;
    nzSpinning: boolean;
    checkNested(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, zone: NgZone);
    ngAfterViewInit(): void;
}
