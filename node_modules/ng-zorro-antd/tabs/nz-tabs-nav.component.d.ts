/** code from https://github.com/angular/material2 */
import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentChecked, AfterContentInit, ElementRef, EventEmitter, NgZone, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
export declare type ScrollDirection = 'after' | 'before';
import { NzTabPositionMode } from './nz-tabset.component';
export declare class NzTabsNavComponent implements AfterContentChecked, AfterContentInit {
    elementRef: ElementRef;
    private ngZone;
    private renderer;
    private dir;
    private _animated;
    private _hideBar;
    private _showPagination;
    private _type;
    private _tabPositionMode;
    private _scrollDistance;
    private _selectedIndex;
    showPaginationControls: boolean;
    disableScrollAfter: boolean;
    disableScrollBefore: boolean;
    selectedIndexChanged: boolean;
    realignInkBar: Subscription | null;
    tabLabelCount: number;
    scrollDistanceChanged: boolean;
    listOfNzTabLabelDirective: QueryList<NzTabLabelDirective>;
    nzTabsInkBarDirective: NzTabsInkBarDirective;
    navContainerElement: ElementRef;
    navListElement: ElementRef;
    nzOnNextClick: EventEmitter<void>;
    nzOnPrevClick: EventEmitter<void>;
    nzTabBarExtraContent: TemplateRef<void>;
    nzAnimated: boolean;
    nzHideBar: boolean;
    nzType: string;
    nzShowPagination: boolean;
    nzPositionMode: NzTabPositionMode;
    selectedIndex: number;
    constructor(elementRef: ElementRef, ngZone: NgZone, renderer: Renderer2, dir: Directionality);
    onContentChanges(): void;
    scrollHeader(scrollDir: ScrollDirection): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    updateTabScrollPosition(): void;
    updatePagination(): void;
    checkPaginationEnabled(): void;
    scrollToLabel(labelIndex: number): void;
    checkScrollingControls(): void;
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    getMaxScrollDistance(): number;
    /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
    scrollDistance: number;
    readonly viewWidthHeightPix: number;
    readonly tabListScrollWidthHeightPix: number;
    readonly elementRefOffSetWidthHeight: number;
    getLayoutDirection(): Direction;
    alignInkBarToSelectedTab(): void;
}
