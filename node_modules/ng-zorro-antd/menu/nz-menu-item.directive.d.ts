import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NzMenuDirective } from './nz-menu.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
export declare class NzMenuItemDirective implements OnInit {
    private renderer;
    cd: ChangeDetectorRef;
    private nzMenuDirective;
    nzSubMenuComponent: NzSubMenuComponent;
    private hostElement;
    private _disabled;
    private _selected;
    level: number;
    padding: any;
    isInDropDown: boolean;
    nzDisabled: boolean;
    nzSelected: boolean;
    /** clear all item selected status except this */
    onClickItem(e: MouseEvent): void;
    /** define host class */
    readonly isInDropDownClass: boolean;
    readonly isNotInDropDownClass: boolean;
    readonly setDropDownDisableClass: boolean;
    readonly setMenuDisableClass: boolean;
    readonly setPaddingLeft: number;
    constructor(renderer: Renderer2, cd: ChangeDetectorRef, nzMenuDirective: NzMenuDirective, nzSubMenuComponent: NzSubMenuComponent, hostElement: ElementRef);
    ngOnInit(): void;
}
