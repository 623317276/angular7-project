import { AfterContentInit, ElementRef, EventEmitter } from '@angular/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
export declare type NzMode = 'vertical' | 'horizontal' | 'inline';
export declare class NzMenuDirective implements AfterContentInit {
    el: ElementRef;
    private _selectable;
    private _inlineCollapsed;
    private _inDropDown;
    /** view init flat */
    private isInit;
    /** cache mode */
    private cacheMode;
    /** opened index of array */
    private subMenusOpenIndex;
    /** collection of menu item */
    menuItems: NzMenuItemDirective[];
    /** collection of sub menu */
    subMenus: NzSubMenuComponent[];
    nzTheme: 'light' | 'dark';
    nzInlineIndent: number;
    nzMode: NzMode;
    nzClick: EventEmitter<NzMenuItemDirective>;
    nzInDropDown: boolean;
    nzSelectable: boolean;
    nzInlineCollapsed: boolean;
    updateInlineCollapse(): void;
    /** define host class */
    readonly isInDropDownClass: boolean;
    readonly isNotInDropDownClass: boolean;
    readonly setDropDownThemeLightClass: boolean;
    readonly setDropDownThemeDarkClass: boolean;
    readonly setMenuThemeLightClass: boolean;
    readonly setMenuThemeDarkClass: boolean;
    readonly setMenuVerticalClass: boolean;
    readonly setMenuHorizontalClass: boolean;
    readonly setMenuInlineClass: boolean;
    readonly setMenuInlineCollapsedClass: boolean;
    constructor(el: ElementRef);
    ngAfterContentInit(): void;
    /** trigger when menu item clicked */
    clearAllSelected(): void;
    hideSubMenus(): void;
    reductionSubMenus(): void;
    clickItem(value: NzMenuItemDirective): void;
}
