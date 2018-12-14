import { AnimationEvent } from '@angular/animations';
import { AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
export declare type TagType = 'default' | 'closeable' | 'checkable';
export declare class NzTagComponent implements OnInit, AfterViewInit {
    private renderer;
    private _color;
    private _checked;
    private isPreset;
    private _mode;
    classMap: any;
    closed: boolean;
    wrapperElement: ElementRef;
    nzAfterClose: EventEmitter<void>;
    nzOnClose: EventEmitter<MouseEvent>;
    nzCheckedChange: EventEmitter<boolean>;
    nzMode: TagType;
    nzColor: string;
    nzChecked: boolean;
    isPresetColor(color?: string): boolean;
    updateCheckedStatus(): void;
    closeTag(e: MouseEvent): void;
    afterAnimation(e: AnimationEvent): void;
    updateClassMap(): void;
    updateColorStatus(): void;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
