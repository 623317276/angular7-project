import { AfterViewInit, DoCheck, ElementRef, Renderer2 } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
export declare class NzInputDirective implements DoCheck, AfterViewInit {
    private elementRef;
    private renderer;
    private ngModel;
    ngControl: NgControl;
    private _size;
    private _disabled;
    private _autosize;
    private el;
    private previousValue;
    private previewsMinRows;
    private previewsMaxRows;
    private isInit;
    nzSize: string;
    disabled: boolean;
    nzAutosize: string | boolean | AutoSizeType;
    readonly setLgClass: boolean;
    readonly setSmClass: boolean;
    textAreaOnChange(): void;
    resizeTextArea(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, ngModel: NgModel, ngControl: NgControl);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
}
