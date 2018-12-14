/** get some code from https://github.com/angular/material2 */
import { AfterContentChecked, AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
export interface NzAnimatedInterface {
    inkBar: boolean;
    tabPane: boolean;
}
export declare class NzTabChangeEvent {
    index: number;
    tab: NzTabComponent;
}
export declare type NzTabPosition = 'top' | 'bottom' | 'left' | 'right';
export declare type NzTabPositionMode = 'horizontal' | 'vertical';
export declare type NzTabType = 'line' | 'card';
export declare class NzTabSetComponent implements AfterContentChecked, OnInit, AfterViewInit {
    private renderer;
    private nzUpdateHostClassService;
    private elementRef;
    private document;
    private _tabPosition;
    private _indexToSelect;
    private _selectedIndex;
    private _type;
    private _size;
    private _animated;
    el: HTMLElement;
    prefixCls: string;
    tabPositionMode: NzTabPositionMode;
    inkBarAnimated: boolean;
    tabPaneAnimated: boolean;
    isViewInit: boolean;
    listOfNzTabComponent: NzTabComponent[];
    nzTabBarExtraContent: TemplateRef<void>;
    nzTabsNavComponent: NzTabsNavComponent;
    tabContent: ElementRef;
    nzShowPagination: boolean;
    nzHideAll: boolean;
    nzTabBarGutter: number;
    nzTabBarStyle: {
        [key: string]: string;
    };
    nzOnNextClick: EventEmitter<void>;
    nzOnPrevClick: EventEmitter<void>;
    nzAnimated: NzAnimatedInterface | boolean;
    nzSelectedIndex: number | null;
    readonly nzSelectedIndexChange: Observable<number>;
    nzSelectChange: EventEmitter<NzTabChangeEvent>;
    nzSize: string;
    nzTabPosition: NzTabPosition;
    nzType: NzTabType;
    setPosition(value: NzTabPosition): void;
    setClassMap(): void;
    clickLabel(index: number, disabled: boolean): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    createChangeEvent(index: number): NzTabChangeEvent;
    addTab(value: NzTabComponent): void;
    removeTab(value: NzTabComponent): void;
    onScroll($event: Event): void;
    constructor(renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, document: any);
    ngAfterViewInit(): void;
}
