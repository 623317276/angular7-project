import { ElementRef, OnInit, Renderer2, TemplateRef } from '@angular/core';
export declare class NzTimelineItemComponent implements OnInit {
    private renderer;
    private _dot;
    private _color;
    private _isLast;
    liTemplate: ElementRef;
    isDotString: boolean;
    classMap: any;
    isLast: boolean;
    nzDot: string | TemplateRef<void>;
    nzColor: string;
    updateClassMap(): void;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
}
