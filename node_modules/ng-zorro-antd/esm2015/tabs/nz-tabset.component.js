/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** get some code from https://github.com/angular/material2 */
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { toNumber } from '../core/util/convert';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
/**
 * @record
 */
export function NzAnimatedInterface() { }
function NzAnimatedInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAnimatedInterface.prototype.inkBar;
    /** @type {?} */
    NzAnimatedInterface.prototype.tabPane;
}
export class NzTabChangeEvent {
}
function NzTabChangeEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabChangeEvent.prototype.index;
    /** @type {?} */
    NzTabChangeEvent.prototype.tab;
}
export class NzTabSetComponent {
    /**
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} document
     */
    constructor(renderer, nzUpdateHostClassService, elementRef, document) {
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.document = document;
        this._tabPosition = 'top';
        this._indexToSelect = 0;
        this._selectedIndex = null;
        this._type = 'line';
        this._size = 'default';
        this._animated = true;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-tabs';
        this.tabPositionMode = 'horizontal';
        this.inkBarAnimated = true;
        this.tabPaneAnimated = true;
        this.isViewInit = false;
        this.listOfNzTabComponent = [];
        this.nzShowPagination = true;
        this.nzHideAll = false;
        this.nzOnNextClick = new EventEmitter();
        this.nzOnPrevClick = new EventEmitter();
        this.nzSelectChange = new EventEmitter(true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAnimated(value) {
        this._animated = value;
        this.setClassMap();
        this.inkBarAnimated = (this.nzAnimated === true) || ((/** @type {?} */ (this.nzAnimated)).inkBar === true);
        this.tabPaneAnimated = (this.nzAnimated === true) || ((/** @type {?} */ (this.nzAnimated)).tabPane === true);
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
    set nzSelectedIndex(value) {
        this._indexToSelect = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    get nzSelectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    get nzSelectedIndexChange() {
        return this.nzSelectChange.pipe(map(event => event.index));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTabPosition(value) {
        if (this._tabPosition === value) {
            return;
        }
        this._tabPosition = value;
        if ((this._tabPosition === 'top') || (this._tabPosition === 'bottom')) {
            this.tabPositionMode = 'horizontal';
        }
        else {
            this.tabPositionMode = 'vertical';
        }
        this.setPosition(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzTabPosition() {
        return this._tabPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        if (this._type === value) {
            return;
        }
        this._type = value;
        if (this._type === 'card') {
            this.nzAnimated = false;
        }
        this.setClassMap();
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
    setPosition(value) {
        if (this.isViewInit) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.nzTabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-vertical`]: (this.nzTabPosition === 'left') || (this.nzTabPosition === 'right'),
            [`${this.prefixCls}-${this.nzTabPosition}`]: this.nzTabPosition,
            [`${this.prefixCls}-no-animation`]: (this.nzAnimated === false) || ((/** @type {?} */ (this.nzAnimated)).tabPane === false),
            [`${this.prefixCls}-${this.nzType}`]: this.nzType,
            [`${this.prefixCls}-large`]: this.nzSize === 'large',
            [`${this.prefixCls}-small`]: this.nzSize === 'small'
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    clickLabel(index, disabled) {
        if (!disabled) {
            this.nzSelectedIndex = index;
            this.listOfNzTabComponent[index].nzClick.emit();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const indexToSelect = this._indexToSelect =
            Math.min(this.listOfNzTabComponent.length - 1, Math.max(this._indexToSelect || 0, 0));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex !== indexToSelect && isNotNil(this._selectedIndex)) {
            this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this.listOfNzTabComponent.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (isNotNil(this._selectedIndex) && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - this._selectedIndex;
            }
        });
        this._selectedIndex = indexToSelect;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    createChangeEvent(index) {
        /** @type {?} */
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent[index];
            this.listOfNzTabComponent.forEach((item, i) => {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            });
            event.tab.nzSelect.emit();
        }
        return event;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addTab(value) {
        this.listOfNzTabComponent.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeTab(value) {
        this.listOfNzTabComponent.splice(this.listOfNzTabComponent.indexOf(value), 1);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onScroll($event) {
        /** @type {?} */
        const target = /** @type {?} */ ($event.target);
        if (target.scrollLeft > 0) {
            target.scrollLeft = 0;
            if (this.document && this.document.activeElement) {
                (/** @type {?} */ (this.document.activeElement)).blur();
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isViewInit = true;
        this.setPosition(this.nzTabPosition);
    }
}
NzTabSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tabset',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                template: "<div \n  class=\"ant-tabs-bar\"\n  nz-tabs-nav\n  role=\"tablist\"\n  tabindex=\"0\"\n  [nzType]=\"nzType\"\n  [nzShowPagination]=\"nzShowPagination\"\n  [nzPositionMode]=\"tabPositionMode\"\n  [nzAnimated]=\"inkBarAnimated\"\n  [ngStyle]=\"nzTabBarStyle\"\n  [nzHideBar]=\"nzHideAll\"\n  [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\n  [selectedIndex]=\"nzSelectedIndex\"\n  (nzOnNextClick)=\"nzOnNextClick.emit()\"\n  (nzOnPrevClick)=\"nzOnPrevClick.emit()\">\n  <div\n    nz-tab-label\n    role=\"tab\"\n    [style.margin-right.px]=\"nzTabBarGutter\"\n    [class.ant-tabs-tab-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\n    [disabled]=\"tab.nzDisabled\"\n    (click)=\"clickLabel(i,tab.nzDisabled)\"\n    *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\n    <ng-container *ngIf=\"tab.isTitleString; else titleTemplate\">{{ tab.nzTitle }}</ng-container>\n    <ng-template #titleTemplate>\n      <ng-template [ngTemplateOutlet]=\"tab.nzTitle\"></ng-template>\n    </ng-template>\n  </div>\n</div>\n<div\n  class=\"ant-tabs-content\"\n  #tabContent\n  [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n  [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\n  [style.margin-left.%]=\"tabPaneAnimated&&(-nzSelectedIndex*100)\">\n  <div nz-tab-body\n    class=\"ant-tabs-tabpane\"\n    [class.ant-tabs-tabpane-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\n    [class.ant-tabs-tabpane-inactive]=\"(nzSelectedIndex != i) || nzHideAll\"\n    [content]=\"tab.content\"\n    *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\n  </div>\n</div>",
                host: {
                    '(scroll)': 'onScroll($event)'
                },
                styles: [`
    :host {
      display: block;
    }
  `]
            }] }
];
/** @nocollapse */
NzTabSetComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NzTabSetComponent.propDecorators = {
    nzTabBarExtraContent: [{ type: Input }],
    nzTabsNavComponent: [{ type: ViewChild, args: [NzTabsNavComponent,] }],
    tabContent: [{ type: ViewChild, args: ['tabContent',] }],
    nzShowPagination: [{ type: Input }],
    nzHideAll: [{ type: Input }],
    nzTabBarGutter: [{ type: Input }],
    nzTabBarStyle: [{ type: Input }],
    nzOnNextClick: [{ type: Output }],
    nzOnPrevClick: [{ type: Output }],
    nzAnimated: [{ type: Input }],
    nzSelectedIndex: [{ type: Input }],
    nzSelectedIndexChange: [{ type: Output }],
    nzSelectChange: [{ type: Output }],
    nzSize: [{ type: Input }],
    nzTabPosition: [{ type: Input }],
    nzType: [{ type: Input }]
};
function NzTabSetComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabSetComponent.prototype._tabPosition;
    /** @type {?} */
    NzTabSetComponent.prototype._indexToSelect;
    /** @type {?} */
    NzTabSetComponent.prototype._selectedIndex;
    /** @type {?} */
    NzTabSetComponent.prototype._type;
    /** @type {?} */
    NzTabSetComponent.prototype._size;
    /** @type {?} */
    NzTabSetComponent.prototype._animated;
    /** @type {?} */
    NzTabSetComponent.prototype.el;
    /** @type {?} */
    NzTabSetComponent.prototype.prefixCls;
    /** @type {?} */
    NzTabSetComponent.prototype.tabPositionMode;
    /** @type {?} */
    NzTabSetComponent.prototype.inkBarAnimated;
    /** @type {?} */
    NzTabSetComponent.prototype.tabPaneAnimated;
    /** @type {?} */
    NzTabSetComponent.prototype.isViewInit;
    /** @type {?} */
    NzTabSetComponent.prototype.listOfNzTabComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarExtraContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabsNavComponent;
    /** @type {?} */
    NzTabSetComponent.prototype.tabContent;
    /** @type {?} */
    NzTabSetComponent.prototype.nzShowPagination;
    /** @type {?} */
    NzTabSetComponent.prototype.nzHideAll;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarGutter;
    /** @type {?} */
    NzTabSetComponent.prototype.nzTabBarStyle;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnNextClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzOnPrevClick;
    /** @type {?} */
    NzTabSetComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTabSetComponent.prototype.renderer;
    /** @type {?} */
    NzTabSetComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzTabSetComponent.prototype.elementRef;
    /** @type {?} */
    NzTabSetComponent.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztBQU83RCxNQUFNO0NBR0w7Ozs7Ozs7QUFvQkQsTUFBTTs7Ozs7OztJQWdNSixZQUFvQixRQUFtQixFQUFVLHdCQUFrRCxFQUFVLFVBQXNCLEVBQXdDLFFBQWE7UUFBcEssYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQXdDLGFBQVEsR0FBUixRQUFRLENBQUs7NEJBL0xsSixLQUFLOzhCQUNILENBQUM7OEJBQ0QsSUFBSTtxQkFDakIsTUFBTTtxQkFDakIsU0FBUzt5QkFDMEIsSUFBSTtrQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUNu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QUFNLE1BQU0scUJBQVksTUFBTSxDQUFDLE1BQWlCLEVBQUM7UUFDakQsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN6QixNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hELG1CQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBNEIsRUFBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JEO1NBQ0Y7S0FDRjs7OztJQU1ELGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUN0Qzs7O1lBcE5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsV0FBVztnQkFDaEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7Z0JBQ2pELHNqREFBaUQ7Z0JBQ2pELElBQUksRUFBaUI7b0JBQ25CLFVBQVUsRUFBRSxrQkFBa0I7aUJBQy9CO3lCQUNzQjs7OztHQUl0QjthQUNGOzs7O1lBekNDLFNBQVM7WUFPRix3QkFBd0I7WUFkL0IsVUFBVTs0Q0FpUDRILFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7O21DQWxMaEssS0FBSztpQ0FDTCxTQUFTLFNBQUMsa0JBQWtCO3lCQUM1QixTQUFTLFNBQUMsWUFBWTsrQkFDdEIsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxNQUFNOzRCQUNOLE1BQU07eUJBRU4sS0FBSzs4QkFZTCxLQUFLO29DQVNMLE1BQU07NkJBS04sTUFBTTtxQkFFTixLQUFLOzRCQVNMLEtBQUs7cUJBbUJMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogZ2V0IHNvbWUgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMiAqL1xuXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpUYWJDb21wb25lbnQgfSBmcm9tICcuL256LXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUYWJzTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJzLW5hdi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56QW5pbWF0ZWRJbnRlcmZhY2Uge1xuICBpbmtCYXI6IGJvb2xlYW47XG4gIHRhYlBhbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBOelRhYkNoYW5nZUV2ZW50IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgdGFiOiBOelRhYkNvbXBvbmVudDtcbn1cblxuZXhwb3J0IHR5cGUgTnpUYWJQb3NpdGlvbiA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xuZXhwb3J0IHR5cGUgTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuZXhwb3J0IHR5cGUgTnpUYWJUeXBlID0gJ2xpbmUnIHwgJ2NhcmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRhYnNldCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWJzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJyhzY3JvbGwpJzogJ29uU2Nyb2xsKCRldmVudCknXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIE56VGFiU2V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfdGFiUG9zaXRpb246IE56VGFiUG9zaXRpb24gPSAndG9wJztcbiAgcHJpdmF0ZSBfaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF90eXBlOiBOelRhYlR5cGUgPSAnbGluZSc7XG4gIHByaXZhdGUgX3NpemUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX2FuaW1hdGVkOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbiA9IHRydWU7XG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcmVmaXhDbHMgPSAnYW50LXRhYnMnO1xuICB0YWJQb3NpdGlvbk1vZGU6IE56VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuICBpbmtCYXJBbmltYXRlZCA9IHRydWU7XG4gIHRhYlBhbmVBbmltYXRlZCA9IHRydWU7XG4gIGlzVmlld0luaXQgPSBmYWxzZTtcbiAgbGlzdE9mTnpUYWJDb21wb25lbnQ6IE56VGFiQ29tcG9uZW50W10gPSBbXTtcbiAgQElucHV0KCkgbnpUYWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAVmlld0NoaWxkKE56VGFic05hdkNvbXBvbmVudCkgbnpUYWJzTmF2Q29tcG9uZW50OiBOelRhYnNOYXZDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3RhYkNvbnRlbnQnKSB0YWJDb250ZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBuelNob3dQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpIaWRlQWxsID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56VGFiQmFyR3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56VGFiQmFyU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcbiAgQE91dHB1dCgpIG56T25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBuek9uUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFuaW1hdGVkKHZhbHVlOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbikge1xuICAgIHRoaXMuX2FuaW1hdGVkID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuaW5rQmFyQW5pbWF0ZWQgPSAodGhpcy5uekFuaW1hdGVkID09PSB0cnVlKSB8fCAoKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS5pbmtCYXIgPT09IHRydWUpO1xuICAgIHRoaXMudGFiUGFuZUFuaW1hdGVkID0gKHRoaXMubnpBbmltYXRlZCA9PT0gdHJ1ZSkgfHwgKCh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkudGFiUGFuZSA9PT0gdHJ1ZSk7XG4gIH1cblxuICBnZXQgbnpBbmltYXRlZCgpOiBOekFuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xuICAgIHRoaXMuX2luZGV4VG9TZWxlY3QgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBnZXQgbnpTZWxlY3RlZEluZGV4KCk6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICB9XG5cbiAgQE91dHB1dCgpXG4gIGdldCBuelNlbGVjdGVkSW5kZXhDaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5uelNlbGVjdENoYW5nZS5waXBlKG1hcChldmVudCA9PiBldmVudC5pbmRleCkpO1xuICB9XG5cbiAgQE91dHB1dCgpIG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE56VGFiQ2hhbmdlRXZlbnQ+KHRydWUpO1xuXG4gIEBJbnB1dCgpIHNldCBuelNpemUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpTaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUYWJQb3NpdGlvbih2YWx1ZTogTnpUYWJQb3NpdGlvbikge1xuICAgIGlmICh0aGlzLl90YWJQb3NpdGlvbiA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdGFiUG9zaXRpb24gPSB2YWx1ZTtcbiAgICBpZiAoKHRoaXMuX3RhYlBvc2l0aW9uID09PSAndG9wJykgfHwgKHRoaXMuX3RhYlBvc2l0aW9uID09PSAnYm90dG9tJykpIHtcbiAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYlBvc2l0aW9uTW9kZSA9ICd2ZXJ0aWNhbCc7XG4gICAgfVxuICAgIHRoaXMuc2V0UG9zaXRpb24odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuelRhYlBvc2l0aW9uKCk6IE56VGFiUG9zaXRpb24ge1xuICAgIHJldHVybiB0aGlzLl90YWJQb3NpdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelR5cGUodmFsdWU6IE56VGFiVHlwZSkge1xuICAgIGlmICh0aGlzLl90eXBlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX3R5cGUgPT09ICdjYXJkJykge1xuICAgICAgdGhpcy5uekFuaW1hdGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuelR5cGUoKTogTnpUYWJUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHZhbHVlOiBOelRhYlBvc2l0aW9uKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNWaWV3SW5pdCkge1xuICAgICAgaWYgKHZhbHVlID09PSAnYm90dG9tJykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudCwgdGhpcy5uelRhYnNOYXZDb21wb25lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRoaXMubnpUYWJzTmF2Q29tcG9uZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS12ZXJ0aWNhbGAgXSAgICAgICAgICAgICA6ICh0aGlzLm56VGFiUG9zaXRpb24gPT09ICdsZWZ0JykgfHwgKHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ3JpZ2h0JyksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUYWJQb3NpdGlvbn1gIF06IHRoaXMubnpUYWJQb3NpdGlvbixcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW5vLWFuaW1hdGlvbmAgXSAgICAgICAgIDogKHRoaXMubnpBbmltYXRlZCA9PT0gZmFsc2UpIHx8ICgodGhpcy5uekFuaW1hdGVkIGFzIE56QW5pbWF0ZWRJbnRlcmZhY2UpLnRhYlBhbmUgPT09IGZhbHNlKSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9YCBdICAgICAgIDogdGhpcy5uelR5cGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1sYXJnZWAgXSAgICAgICAgICAgICAgICA6IHRoaXMubnpTaXplID09PSAnbGFyZ2UnLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc21hbGxgIF0gICAgICAgICAgICAgICAgOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJ1xuICAgIH07XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGNsaWNrTGFiZWwoaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB0aGlzLm56U2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudFsgaW5kZXggXS5uekNsaWNrLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgLy8gQ2xhbXAgdGhlIG5leHQgc2VsZWN0ZWQgaW5kZXggdG8gdGhlIGJvdW5kcyBvZiAwIGFuZCB0aGUgdGFicyBsZW5ndGguIE5vdGUgdGhlIGB8fCAwYCwgd2hpY2hcbiAgICAvLyBlbnN1cmVzIHRoYXQgdmFsdWVzIGxpa2UgTmFOIGNhbid0IGdldCB0aHJvdWdoIGFuZCB3aGljaCB3b3VsZCBvdGhlcndpc2UgdGhyb3cgdGhlXG4gICAgLy8gY29tcG9uZW50IGludG8gYW4gaW5maW5pdGUgbG9vcCAoc2luY2UgTWF0aC5tYXgoTmFOLCAwKSA9PT0gTmFOKS5cbiAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gdGhpcy5faW5kZXhUb1NlbGVjdCA9XG4gICAgICBNYXRoLm1pbih0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCAtIDEsIE1hdGgubWF4KHRoaXMuX2luZGV4VG9TZWxlY3QgfHwgMCwgMCkpO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxuICAgIC8vIHRoZSBzZWxlY3RlZCBpbmRleCBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpemVkLlxuICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0ICYmIGlzTm90TmlsKHRoaXMuX3NlbGVjdGVkSW5kZXgpKSB7XG4gICAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XG4gICAgfVxuXG4gICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxuICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiOiBOelRhYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgdGFiLnBvc2l0aW9uID0gaW5kZXggLSBpbmRleFRvU2VsZWN0O1xuICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcbiAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cbiAgICAgIGlmIChpc05vdE5pbCh0aGlzLl9zZWxlY3RlZEluZGV4KSAmJiB0YWIucG9zaXRpb24gPT09IDAgJiYgIXRhYi5vcmlnaW4pIHtcbiAgICAgICAgdGFiLm9yaWdpbiA9IGluZGV4VG9TZWxlY3QgLSB0aGlzLl9zZWxlY3RlZEluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xuICB9XG5cbiAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IE56VGFiQ2hhbmdlRXZlbnQge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE56VGFiQ2hhbmdlRXZlbnQoKTtcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XG4gICAgICBldmVudC50YWIgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50WyBpbmRleCBdO1xuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIGl0ZW0ubnpEZXNlbGVjdC5lbWl0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZXZlbnQudGFiLm56U2VsZWN0LmVtaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG5cbiAgYWRkVGFiKHZhbHVlOiBOelRhYkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVUYWIodmFsdWU6IE56VGFiQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5zcGxpY2UodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5pbmRleE9mKHZhbHVlKSwgMSk7XG4gIH1cblxuICAvLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdGFicy9ibG9iL21hc3Rlci9zcmMvVGFicy5qc1xuICAvLyBQcmV2ZW50IGZvY3VzIHRvIG1ha2UgdGhlIFRhYnMgc2Nyb2xsIG9mZnNldFxuICBvblNjcm9sbCgkZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0OiBFbGVtZW50ID0gJGV2ZW50LnRhcmdldCBhcyBFbGVtZW50O1xuICAgIGlmICh0YXJnZXQuc2Nyb2xsTGVmdCA+IDApIHtcbiAgICAgIHRhcmdldC5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgIGlmICh0aGlzLmRvY3VtZW50ICYmIHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAodGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc1ZpZXdJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMubnpUYWJQb3NpdGlvbik7XG4gIH1cblxufVxuIl19