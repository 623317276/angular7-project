import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export declare type NzJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export declare type NzAlign = 'top' | 'middle' | 'bottom';
export declare type NzType = 'flex' | null;
export declare type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export interface BreakpointMap {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xxl?: string;
}
export declare class NzRowComponent implements OnInit {
    elementRef: ElementRef;
    renderer: Renderer2;
    nzUpdateHostClassService: NzUpdateHostClassService;
    private _gutter;
    private _type;
    private _align;
    private _justify;
    private el;
    private prefixCls;
    private breakPoint;
    actualGutter: number;
    nzType: NzType;
    nzAlign: NzAlign;
    nzJustify: NzJustify;
    nzGutter: number | object;
    setStyle(): void;
    calculateGutter(): number;
    updateGutter(): void;
    onWindowResize(e: UIEvent): void;
    watchMedia(): void;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
}
