import { AfterContentChecked, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { NzIconService } from './nz-icon.service';
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 */
export declare class NzIconDirective extends IconDirective implements OnInit, OnChanges, OnDestroy, AfterContentChecked {
    _iconService: NzIconService;
    _elementRef: ElementRef;
    _renderer: Renderer2;
    spin: boolean;
    iconfont: string;
    private _classNameObserver;
    private _el;
    /**
     * In order to make this directive compatible to old API, we had do some ugly stuff here.
     * TODO: Should be removed in next major version.
     */
    private _classChangeHandler;
    /**
     * In order to make this directive compatible to old API, we had do some ugly stuff here.
     * TODO: Should be removed in next major version.
     */
    private _warnAPI;
    private _toggleSpin;
    private _setClassName;
    private _setSVGData;
    private _addExtraModifications;
    constructor(_iconService: NzIconService, _elementRef: ElementRef, _renderer: Renderer2);
    ngOnChanges(): void;
    /**
     * Subscribe to DOM element attribute change events, so when user use ngClass or something the icon changes with it.
     */
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * If custom content is provided, should try to normalize the svg element.
     */
    ngAfterContentChecked(): void;
}
