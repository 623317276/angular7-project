import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class NzCarouselContentDirective implements OnInit {
    private elementRef;
    private renderer;
    private _active;
    private _width;
    private _left;
    private _top;
    private _fadeMode;
    el: HTMLElement;
    width: number;
    left: number;
    top: number;
    isActive: boolean;
    fadeMode: boolean;
    updateOpacity(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
