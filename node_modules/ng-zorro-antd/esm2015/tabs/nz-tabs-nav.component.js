/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directionality } from '@angular/cdk/bidi';
import { Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, merge, of as observableOf } from 'rxjs';
import { auditTime, startWith } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
/** @type {?} */
const EXAGGERATED_OVERSCROLL = 64;
export class NzTabsNavComponent {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} dir
     */
    constructor(elementRef, ngZone, renderer, dir) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.dir = dir;
        this._animated = true;
        this._hideBar = false;
        this._showPagination = true;
        this._type = 'line';
        this._tabPositionMode = 'horizontal';
        this._scrollDistance = 0;
        this._selectedIndex = 0;
        this.showPaginationControls = false;
        this.disableScrollAfter = true;
        this.disableScrollBefore = true;
        this.selectedIndexChanged = false;
        this.realignInkBar = null;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAnimated(value) {
        this._animated = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAnimated() {
        return this._animated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHideBar(value) {
        this._hideBar = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzHideBar() {
        return this._hideBar;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this._type = value;
        if (this._type !== 'line') {
            this.nzTabsInkBarDirective.setDisplay('none');
        }
        else {
            this.nzTabsInkBarDirective.setDisplay('block');
        }
    }
    /**
     * @return {?}
     */
    get nzType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowPagination(value) {
        this._showPagination = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowPagination() {
        return this._showPagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPositionMode(value) {
        this._tabPositionMode = value;
        this.alignInkBarToSelectedTab();
        if (this.nzShowPagination) {
            this.updatePagination();
        }
    }
    /**
     * @return {?}
     */
    get nzPositionMode() {
        return this._tabPositionMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedIndex(value) {
        this.selectedIndexChanged = this._selectedIndex !== value;
        this._selectedIndex = value;
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    onContentChanges() {
        if (this.nzShowPagination) {
            this.updatePagination();
        }
        this.alignInkBarToSelectedTab();
    }
    /**
     * @param {?} scrollDir
     * @return {?}
     */
    scrollHeader(scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.nzOnPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.nzOnNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix / 3;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.tabLabelCount !== this.listOfNzTabLabelDirective.length) {
            if (this.nzShowPagination) {
                this.updatePagination();
            }
            this.tabLabelCount = this.listOfNzTabLabelDirective.length;
        }
        if (this.selectedIndexChanged) {
            this.scrollToLabel(this._selectedIndex);
            if (this.nzShowPagination) {
                this.checkScrollingControls();
            }
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
        }
        if (this.scrollDistanceChanged) {
            if (this.nzShowPagination) {
                this.updateTabScrollPosition();
            }
            this.scrollDistanceChanged = false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.realignInkBar = this.ngZone.runOutsideAngular(() => {
            /** @type {?} */
            const dirChange = this.dir ? this.dir.change : observableOf(null);
            /** @type {?} */
            const resize = typeof window !== 'undefined' ?
                fromEvent(window, 'resize').pipe(auditTime(10)) :
                observableOf(null);
            return merge(dirChange, resize).pipe(startWith(null)).subscribe(() => {
                if (this.nzShowPagination) {
                    this.updatePagination();
                }
                this.alignInkBarToSelectedTab();
            });
        });
    }
    /**
     * @return {?}
     */
    updateTabScrollPosition() {
        /** @type {?} */
        const scrollDistance = this.scrollDistance;
        if (this.nzPositionMode === 'horizontal') {
            /** @type {?} */
            const translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(${translateX}px, 0, 0)`);
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(0,${-scrollDistance}px, 0)`);
        }
    }
    /**
     * @return {?}
     */
    updatePagination() {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    }
    /**
     * @return {?}
     */
    checkPaginationEnabled() {
        this.showPaginationControls =
            this.tabListScrollWidthHeightPix > this.elementRefOffSetWidthHeight;
        if (!this.showPaginationControls) {
            this.scrollDistance = 0;
        }
    }
    /**
     * @param {?} labelIndex
     * @return {?}
     */
    scrollToLabel(labelIndex) {
        /** @type {?} */
        const selectedLabel = this.listOfNzTabLabelDirective
            ? this.listOfNzTabLabelDirective.toArray()[labelIndex]
            : null;
        if (selectedLabel) {
            /** @type {?} */
            let labelBeforePos;
            /** @type {?} */
            let labelAfterPos;
            if (this.nzPositionMode === 'horizontal') {
                if (this.getLayoutDirection() === 'ltr') {
                    labelBeforePos = selectedLabel.getOffsetLeft();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                }
                else {
                    labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                    labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                }
            }
            else {
                labelBeforePos = selectedLabel.getOffsetTop();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
            }
            /** @type {?} */
            const beforeVisiblePos = this.scrollDistance;
            /** @type {?} */
            const afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
            if (labelBeforePos < beforeVisiblePos) {
                // Scroll header to move label to the before direction
                this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            }
            else if (labelAfterPos > afterVisiblePos) {
                // Scroll header to move label to the after direction
                this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
        }
    }
    /**
     * @return {?}
     */
    checkScrollingControls() {
        // Check if the pagination arrows should be activated.
        this.disableScrollBefore = this.scrollDistance === 0;
        this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    getMaxScrollDistance() {
        return (this.tabListScrollWidthHeightPix - this.viewWidthHeightPix) || 0;
    }
    /**
     * Sets the distance in pixels that the tab header should be transformed in the X-axis.
     * @param {?} v
     * @return {?}
     */
    set scrollDistance(v) {
        this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this.scrollDistanceChanged = true;
        this.checkScrollingControls();
    }
    /**
     * @return {?}
     */
    get scrollDistance() {
        return this._scrollDistance;
    }
    /**
     * @return {?}
     */
    get viewWidthHeightPix() {
        /** @type {?} */
        let PAGINATION_PIX = 0;
        if (this.showPaginationControls) {
            PAGINATION_PIX = 64;
        }
        if (this.nzPositionMode === 'horizontal') {
            return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
        }
        else {
            return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
        }
    }
    /**
     * @return {?}
     */
    get tabListScrollWidthHeightPix() {
        if (this.nzPositionMode === 'horizontal') {
            return this.navListElement.nativeElement.scrollWidth;
        }
        else {
            return this.navListElement.nativeElement.scrollHeight;
        }
    }
    /**
     * @return {?}
     */
    get elementRefOffSetWidthHeight() {
        if (this.nzPositionMode === 'horizontal') {
            return this.elementRef.nativeElement.offsetWidth;
        }
        else {
            return this.elementRef.nativeElement.offsetHeight;
        }
    }
    /**
     * @return {?}
     */
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * @return {?}
     */
    alignInkBarToSelectedTab() {
        if (this.nzType === 'line') {
            /** @type {?} */
            const selectedLabelWrapper = this.listOfNzTabLabelDirective && this.listOfNzTabLabelDirective.length
                ? this.listOfNzTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.nzTabsInkBarDirective) {
                this.nzTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    }
}
NzTabsNavComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-tabs-nav]',
                preserveWhitespaces: false,
                template: "<div style=\"float:right;\" *ngIf=\"nzTabBarExtraContent\" class=\"ant-tabs-extra-content\">\n  <ng-template [ngTemplateOutlet]=\"nzTabBarExtraContent\"></ng-template>\n</div>\n<div class=\"ant-tabs-nav-container\" [class.ant-tabs-nav-container-scrolling]=\"showPaginationControls\" #navContainerElement>\n  <span class=\"ant-tabs-tab-prev\" (click)=\"scrollHeader('before')\" [class.ant-tabs-tab-btn-disabled]=\"disableScrollBefore\" [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\n    <span class=\"ant-tabs-tab-prev-icon\">\n      <i nz-icon [type]=\"nzPositionMode === 'horizontal' ? 'left' : 'up'\" class=\"ant-tabs-tab-prev-icon-target\"></i>\n    </span>\n  </span>\n  <span class=\"ant-tabs-tab-next\" (click)=\"scrollHeader('after')\" [class.ant-tabs-tab-btn-disabled]=\"disableScrollAfter\" [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\n    <span class=\"ant-tabs-tab-next-icon\">\n      <i nz-icon [type]=\"nzPositionMode === 'horizontal' ? 'right' : 'down'\" class=\"ant-tabs-tab-next-icon-target\"></i>\n    </span>\n  </span>\n  <div class=\"ant-tabs-nav-wrap\">\n    <div class=\"ant-tabs-nav-scroll\">\n      <div\n        class=\"ant-tabs-nav\"\n        [class.ant-tabs-nav-animated]=\"nzAnimated\"\n        #navListElement\n        (cdkObserveContent)=\"onContentChanges()\">\n        <div nz-tabs-ink-bar [hidden]=\"nzHideBar\" [nzAnimated]=\"nzAnimated\" [nzPositionMode]=\"nzPositionMode\" style=\"display: block;\"></div>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
NzTabsNavComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 },
    { type: Directionality, decorators: [{ type: Optional }] }
];
NzTabsNavComponent.propDecorators = {
    listOfNzTabLabelDirective: [{ type: ContentChildren, args: [NzTabLabelDirective,] }],
    nzTabsInkBarDirective: [{ type: ViewChild, args: [NzTabsInkBarDirective,] }],
    navContainerElement: [{ type: ViewChild, args: ['navContainerElement',] }],
    navListElement: [{ type: ViewChild, args: ['navListElement',] }],
    nzOnNextClick: [{ type: Output }],
    nzOnPrevClick: [{ type: Output }],
    nzTabBarExtraContent: [{ type: Input }],
    nzAnimated: [{ type: Input }],
    nzHideBar: [{ type: Input }],
    nzType: [{ type: Input }],
    nzShowPagination: [{ type: Input }],
    nzPositionMode: [{ type: Input }],
    selectedIndex: [{ type: Input }]
};
function NzTabsNavComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabsNavComponent.prototype._animated;
    /** @type {?} */
    NzTabsNavComponent.prototype._hideBar;
    /** @type {?} */
    NzTabsNavComponent.prototype._showPagination;
    /** @type {?} */
    NzTabsNavComponent.prototype._type;
    /** @type {?} */
    NzTabsNavComponent.prototype._tabPositionMode;
    /** @type {?} */
    NzTabsNavComponent.prototype._scrollDistance;
    /** @type {?} */
    NzTabsNavComponent.prototype._selectedIndex;
    /** @type {?} */
    NzTabsNavComponent.prototype.showPaginationControls;
    /** @type {?} */
    NzTabsNavComponent.prototype.disableScrollAfter;
    /** @type {?} */
    NzTabsNavComponent.prototype.disableScrollBefore;
    /** @type {?} */
    NzTabsNavComponent.prototype.selectedIndexChanged;
    /** @type {?} */
    NzTabsNavComponent.prototype.realignInkBar;
    /** @type {?} */
    NzTabsNavComponent.prototype.tabLabelCount;
    /** @type {?} */
    NzTabsNavComponent.prototype.scrollDistanceChanged;
    /** @type {?} */
    NzTabsNavComponent.prototype.listOfNzTabLabelDirective;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzTabsInkBarDirective;
    /** @type {?} */
    NzTabsNavComponent.prototype.navContainerElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.navListElement;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabsNavComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabsNavComponent.prototype.elementRef;
    /** @type {?} */
    NzTabsNavComponent.prototype.ngZone;
    /** @type {?} */
    NzTabsNavComponent.prototype.renderer;
    /** @type {?} */
    NzTabsNavComponent.prototype.dir;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYnMvbnotdGFicy1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUdMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUVwRSxNQUFNLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztBQVVsQyxNQUFNOzs7Ozs7O0lBd0ZKLFlBQW1CLFVBQXNCLEVBQ3JCLFFBQ0EsVUFDWSxHQUFtQjtRQUhoQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3JCLFdBQU0sR0FBTixNQUFNO1FBQ04sYUFBUSxHQUFSLFFBQVE7UUFDSSxRQUFHLEdBQUgsR0FBRyxDQUFnQjt5QkExRi9CLElBQUk7d0JBQ0wsS0FBSzsrQkFDRSxJQUFJO3FCQUNkLE1BQU07Z0NBQ3dCLFlBQVk7K0JBQ2hDLENBQUM7OEJBQ0YsQ0FBQztzQ0FDRCxLQUFLO2tDQUNULElBQUk7bUNBQ0gsSUFB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Q0FBQyxDQUFDO2FBQ2pFO1NBQ0Y7S0FDRjs7O1lBaFNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsZUFBZTtnQkFDcEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsMGhEQUFtRDthQUNwRDs7OztZQTVCQyxVQUFVO1lBR1YsTUFBTTtZQUlOLFNBQVM7WUFiUyxjQUFjLHVCQThIbkIsUUFBUTs7O3dDQTVFcEIsZUFBZSxTQUFDLG1CQUFtQjtvQ0FDbkMsU0FBUyxTQUFDLHFCQUFxQjtrQ0FDL0IsU0FBUyxTQUFDLHFCQUFxQjs2QkFDL0IsU0FBUyxTQUFDLGdCQUFnQjs0QkFDMUIsTUFBTTs0QkFDTixNQUFNO21DQUNOLEtBQUs7eUJBRUwsS0FBSzt3QkFTTCxLQUFLO3FCQVNMLEtBQUs7K0JBY0wsS0FBSzs2QkFTTCxLQUFLOzRCQWFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMiAqL1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgb2YgYXMgb2JzZXJ2YWJsZU9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56VGFiTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL256LXRhYi1sYWJlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpUYWJzSW5rQmFyRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10YWJzLWluay1iYXIuZGlyZWN0aXZlJztcblxuY29uc3QgRVhBR0dFUkFURURfT1ZFUlNDUk9MTCA9IDY0O1xuZXhwb3J0IHR5cGUgU2Nyb2xsRGlyZWN0aW9uID0gJ2FmdGVyJyB8ICdiZWZvcmUnO1xuXG5pbXBvcnQgeyBOelRhYlBvc2l0aW9uTW9kZSB9IGZyb20gJy4vbnotdGFic2V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXRhYnMtbmF2XScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWJzLW5hdi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJzTmF2Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2FuaW1hdGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaGlkZUJhciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgX3R5cGUgPSAnbGluZSc7XG4gIHByaXZhdGUgX3RhYlBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlID0gMDtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHNob3dQYWdpbmF0aW9uQ29udHJvbHMgPSBmYWxzZTtcbiAgZGlzYWJsZVNjcm9sbEFmdGVyID0gdHJ1ZTtcbiAgZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRydWU7XG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gZmFsc2U7XG4gIHJlYWxpZ25JbmtCYXI6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICB0YWJMYWJlbENvdW50OiBudW1iZXI7XG4gIHNjcm9sbERpc3RhbmNlQ2hhbmdlZDogYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZHJlbihOelRhYkxhYmVsRGlyZWN0aXZlKSBsaXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlOiBRdWVyeUxpc3Q8TnpUYWJMYWJlbERpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGQoTnpUYWJzSW5rQmFyRGlyZWN0aXZlKSBuelRhYnNJbmtCYXJEaXJlY3RpdmU6IE56VGFic0lua0JhckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnbmF2Q29udGFpbmVyRWxlbWVudCcpIG5hdkNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25hdkxpc3RFbGVtZW50JykgbmF2TGlzdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBuek9uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgbnpPblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQElucHV0KCkgbnpUYWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFuaW1hdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56QW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SGlkZUJhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVCYXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56SGlkZUJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZUJhcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fdHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICB0aGlzLm56VGFic0lua0JhckRpcmVjdGl2ZS5zZXREaXNwbGF5KCdub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnpUYWJzSW5rQmFyRGlyZWN0aXZlLnNldERpc3BsYXkoJ2Jsb2NrJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1BhZ2luYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UGFnaW5hdGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93UGFnaW5hdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BhZ2luYXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQb3NpdGlvbk1vZGUodmFsdWU6IE56VGFiUG9zaXRpb25Nb2RlKSB7XG4gICAgdGhpcy5fdGFiUG9zaXRpb25Nb2RlID0gdmFsdWU7XG4gICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQb3NpdGlvbk1vZGUoKTogTnpUYWJQb3NpdGlvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLl90YWJQb3NpdGlvbk1vZGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZCA9IHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IHZhbHVlO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyOiBEaXJlY3Rpb25hbGl0eSkge1xuICB9XG5cbiAgb25Db250ZW50Q2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgfVxuXG4gIHNjcm9sbEhlYWRlcihzY3JvbGxEaXI6IFNjcm9sbERpcmVjdGlvbik6IHZvaWQge1xuICAgIGlmIChzY3JvbGxEaXIgPT09ICdiZWZvcmUnICYmICF0aGlzLmRpc2FibGVTY3JvbGxCZWZvcmUpIHtcbiAgICAgIHRoaXMubnpPblByZXZDbGljay5lbWl0KCk7XG4gICAgfSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdhZnRlcicgJiYgIXRoaXMuZGlzYWJsZVNjcm9sbEFmdGVyKSB7XG4gICAgICB0aGlzLm56T25OZXh0Q2xpY2suZW1pdCgpO1xuICAgIH1cbiAgICAvLyBNb3ZlIHRoZSBzY3JvbGwgZGlzdGFuY2Ugb25lLXRoaXJkIHRoZSBsZW5ndGggb2YgdGhlIHRhYiBsaXN0J3Mgdmlld3BvcnQuXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSAoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyA/IC0xIDogMSkgKiB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeCAvIDM7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cbiAgICBpZiAodGhpcy50YWJMYWJlbENvdW50ICE9PSB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5uelNob3dQYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy50YWJMYWJlbENvdW50ID0gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9MYWJlbCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQpIHtcbiAgICAgIGlmICh0aGlzLm56U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy51cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWFsaWduSW5rQmFyID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3QgZGlyQ2hhbmdlID0gdGhpcy5kaXIgPyB0aGlzLmRpci5jaGFuZ2UgOiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgICBjb25zdCByZXNpemUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKGF1ZGl0VGltZSgxMCkpIDpcbiAgICAgICAgb2JzZXJ2YWJsZU9mKG51bGwpO1xuICAgICAgcmV0dXJuIG1lcmdlKGRpckNoYW5nZSwgcmVzaXplKS5waXBlKHN0YXJ0V2l0aChudWxsKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubnpTaG93UGFnaW5hdGlvbikge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gdGhpcy5zY3JvbGxEaXN0YW5jZTtcbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVYID0gdGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicgPyAtc2Nyb2xsRGlzdGFuY2UgOiBzY3JvbGxEaXN0YW5jZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwgMCwgMClgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwkey1zY3JvbGxEaXN0YW5jZX1weCwgMClgKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xuICAgIHRoaXMudXBkYXRlVGFiU2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIGNoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzID1cbiAgICAgIHRoaXMudGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4ID4gdGhpcy5lbGVtZW50UmVmT2ZmU2V0V2lkdGhIZWlnaHQ7XG5cbiAgICBpZiAoIXRoaXMuc2hvd1BhZ2luYXRpb25Db250cm9scykge1xuICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9MYWJlbChsYWJlbEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZExhYmVsID0gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlXG4gICAgICA/IHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS50b0FycmF5KClbIGxhYmVsSW5kZXggXVxuICAgICAgOiBudWxsO1xuXG4gICAgaWYgKHNlbGVjdGVkTGFiZWwpIHtcbiAgICAgIC8vIFRoZSB2aWV3IGxlbmd0aCBpcyB0aGUgdmlzaWJsZSB3aWR0aCBvZiB0aGUgdGFiIGxhYmVscy5cblxuICAgICAgbGV0IGxhYmVsQmVmb3JlUG9zOiBudW1iZXI7XG4gICAgICBsZXQgbGFiZWxBZnRlclBvczogbnVtYmVyO1xuICAgICAgaWYgKHRoaXMubnpQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicpIHtcbiAgICAgICAgICBsYWJlbEJlZm9yZVBvcyA9IHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0TGVmdCgpO1xuICAgICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSBsYWJlbEJlZm9yZVBvcyArIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYWJlbEFmdGVyUG9zID0gdGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRMZWZ0KCk7XG4gICAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBsYWJlbEFmdGVyUG9zIC0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbEJlZm9yZVBvcyA9IHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0VG9wKCk7XG4gICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSBsYWJlbEJlZm9yZVBvcyArIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0SGVpZ2h0KCk7XG4gICAgICB9XG4gICAgICBjb25zdCBiZWZvcmVWaXNpYmxlUG9zID0gdGhpcy5zY3JvbGxEaXN0YW5jZTtcbiAgICAgIGNvbnN0IGFmdGVyVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgKyB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeDtcblxuICAgICAgaWYgKGxhYmVsQmVmb3JlUG9zIDwgYmVmb3JlVmlzaWJsZVBvcykge1xuICAgICAgICAvLyBTY3JvbGwgaGVhZGVyIHRvIG1vdmUgbGFiZWwgdG8gdGhlIGJlZm9yZSBkaXJlY3Rpb25cbiAgICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSAtPSBiZWZvcmVWaXNpYmxlUG9zIC0gbGFiZWxCZWZvcmVQb3MgKyBFWEFHR0VSQVRFRF9PVkVSU0NST0xMO1xuICAgICAgfSBlbHNlIGlmIChsYWJlbEFmdGVyUG9zID4gYWZ0ZXJWaXNpYmxlUG9zKSB7XG4gICAgICAgIC8vIFNjcm9sbCBoZWFkZXIgdG8gbW92ZSBsYWJlbCB0byB0aGUgYWZ0ZXIgZGlyZWN0aW9uXG4gICAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgKz0gbGFiZWxBZnRlclBvcyAtIGFmdGVyVmlzaWJsZVBvcyArIEVYQUdHRVJBVEVEX09WRVJTQ1JPTEw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTY3JvbGxpbmdDb250cm9scygpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcGFnaW5hdGlvbiBhcnJvd3Mgc2hvdWxkIGJlIGFjdGl2YXRlZC5cbiAgICB0aGlzLmRpc2FibGVTY3JvbGxCZWZvcmUgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSAwO1xuICAgIHRoaXMuZGlzYWJsZVNjcm9sbEFmdGVyID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gdGhpcy5nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hhdCBpcyB0aGUgbWF4aW11bSBsZW5ndGggaW4gcGl4ZWxzIHRoYXQgY2FuIGJlIHNldCBmb3IgdGhlIHNjcm9sbCBkaXN0YW5jZS4gVGhpc1xuICAgKiBpcyBlcXVhbCB0byB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRoZSB0YWIgbGlzdCBjb250YWluZXIgYW5kIHRhYiBoZWFkZXIgY29udGFpbmVyLlxuICAgKlxuICAgKiBUaGlzIGlzIGFuIGV4cGVuc2l2ZSBjYWxsIHRoYXQgZm9yY2VzIGEgbGF5b3V0IHJlZmxvdyB0byBjb21wdXRlIGJveCBhbmQgc2Nyb2xsIG1ldHJpY3MgYW5kXG4gICAqIHNob3VsZCBiZSBjYWxsZWQgc3BhcmluZ2x5LlxuICAgKi9cbiAgZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMudGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4IC0gdGhpcy52aWV3V2lkdGhIZWlnaHRQaXgpIHx8IDA7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZGlzdGFuY2UgaW4gcGl4ZWxzIHRoYXQgdGhlIHRhYiBoZWFkZXIgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGluIHRoZSBYLWF4aXMuICovXG4gIHNldCBzY3JvbGxEaXN0YW5jZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKSwgdikpO1xuXG4gICAgLy8gTWFyayB0aGF0IHRoZSBzY3JvbGwgZGlzdGFuY2UgaGFzIGNoYW5nZWQgc28gdGhhdCBhZnRlciB0aGUgdmlldyBpcyBjaGVja2VkLCB0aGUgQ1NTXG4gICAgLy8gdHJhbnNmb3JtYXRpb24gY2FuIG1vdmUgdGhlIGhlYWRlci5cbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlQ2hhbmdlZCA9IHRydWU7XG5cbiAgICB0aGlzLmNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgfVxuXG4gIGdldCBzY3JvbGxEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxEaXN0YW5jZTtcbiAgfVxuXG4gIGdldCB2aWV3V2lkdGhIZWlnaHRQaXgoKTogbnVtYmVyIHtcbiAgICBsZXQgUEFHSU5BVElPTl9QSVggPSAwO1xuICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uQ29udHJvbHMpIHtcbiAgICAgIFBBR0lOQVRJT05fUElYID0gNjQ7XG4gICAgfVxuICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdkNvbnRhaW5lckVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIFBBR0lOQVRJT05fUElYO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXZDb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gUEFHSU5BVElPTl9QSVg7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm56UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIGdldCBlbGVtZW50UmVmT2ZmU2V0V2lkdGhIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5uelBvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyICYmIHRoaXMuZGlyLnZhbHVlID09PSAncnRsJyA/ICdydGwnIDogJ2x0cic7XG4gIH1cblxuICBhbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpUeXBlID09PSAnbGluZScpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxXcmFwcGVyID0gdGhpcy5saXN0T2ZOelRhYkxhYmVsRGlyZWN0aXZlICYmIHRoaXMubGlzdE9mTnpUYWJMYWJlbERpcmVjdGl2ZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLmxpc3RPZk56VGFiTGFiZWxEaXJlY3RpdmUudG9BcnJheSgpWyB0aGlzLnNlbGVjdGVkSW5kZXggXS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgOiBudWxsO1xuICAgICAgaWYgKHRoaXMubnpUYWJzSW5rQmFyRGlyZWN0aXZlKSB7XG4gICAgICAgIHRoaXMubnpUYWJzSW5rQmFyRGlyZWN0aXZlLmFsaWduVG9FbGVtZW50KHNlbGVjdGVkTGFiZWxXcmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==