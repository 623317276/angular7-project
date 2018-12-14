import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
export declare class NzDropDownDirective implements OnInit {
    elementRef: ElementRef;
    private renderer;
    $mouseenter: Subject<MouseEvent>;
    $mouseleave: Subject<MouseEvent>;
    $click: Subject<MouseEvent>;
    onMouseEnter(e: MouseEvent): void;
    onMouseLeave(e: MouseEvent): void;
    onClick(e: MouseEvent): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}
