import { EventEmitter, ElementRef, OnInit, Renderer2, InjectionToken } from '@angular/core';
export declare const INTERFACE_TOKEN: InjectionToken<any>;
export declare class TouchFeedbackDirective implements OnInit {
    private _elementRef;
    private _renderer;
    private _className;
    className: Array<string>;
    activeStyle: boolean;
    clickStart: EventEmitter<any>;
    clickEnd: EventEmitter<any>;
    constructor(_elementRef: ElementRef, _renderer: Renderer2);
    private addClass;
    private removeClass;
    ngOnInit(): void;
    touchStart(): void;
    touchEnd(): void;
}
