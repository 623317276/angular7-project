import { AfterViewInit, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzToolTipComponent } from './nz-tooltip.component';
export declare class NzTooltipDirective implements AfterViewInit, OnInit, OnDestroy {
    elementRef: ElementRef;
    hostView: ViewContainerRef;
    resolver: ComponentFactoryResolver;
    renderer: Renderer2;
    tooltip: NzToolTipComponent;
    private unsubscribe$;
    isTooltipOpen: boolean;
    isDynamicTooltip: boolean;
    delayTimer: any;
    _title: string | TemplateRef<void>;
    _content: string | TemplateRef<void>;
    _overlayClassName: string;
    _overlayStyle: {
        [key: string]: string;
    };
    _mouseEnterDelay: number;
    _mouseLeaveDelay: number;
    _visible: boolean;
    _trigger: string;
    _placement: string;
    factory: ComponentFactory<NzToolTipComponent>;
    nzVisibleChange: EventEmitter<boolean>;
    nzTitle: string | TemplateRef<void>;
    setTitle: string | TemplateRef<void>;
    nzContent: string | TemplateRef<void>;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzVisible: boolean;
    nzTrigger: string;
    nzPlacement: string;
    readonly isOpen: boolean;
    private show;
    private hide;
    private delayEnterLeave;
    updateCompValue(key: string, value: any): void;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: NzToolTipComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
