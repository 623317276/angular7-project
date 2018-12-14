import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export declare class NzFormDirective implements OnInit {
    private elementRef;
    private renderer;
    private nzUpdateHostClassService;
    el: HTMLElement;
    prefixCls: string;
    private _layout;
    nzLayout: string;
    setClassMap(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
}
