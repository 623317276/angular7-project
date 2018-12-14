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
var NzTabChangeEvent = /** @class */ (function () {
    function NzTabChangeEvent() {
    }
    return NzTabChangeEvent;
}());
export { NzTabChangeEvent };
function NzTabChangeEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTabChangeEvent.prototype.index;
    /** @type {?} */
    NzTabChangeEvent.prototype.tab;
}
var NzTabSetComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzTabSetComponent(renderer, nzUpdateHostClassService, elementRef, document) {
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
    Object.defineProperty(NzTabSetComponent.prototype, "nzAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._animated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animated = value;
            this.setClassMap();
            this.inkBarAnimated = (this.nzAnimated === true) || ((/** @type {?} */ (this.nzAnimated)).inkBar === true);
            this.tabPaneAnimated = (this.nzAnimated === true) || ((/** @type {?} */ (this.nzAnimated)).tabPane === true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "nzSelectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._indexToSelect = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "nzSelectedIndexChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzSelectChange.pipe(map(function (event) { return event.index; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "nzTabPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tabPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTabSetComponent.prototype, "nzType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._type === value) {
                return;
            }
            this._type = value;
            if (this._type === 'card') {
                this.nzAnimated = false;
            }
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzTabSetComponent.prototype.setPosition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isViewInit) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.nzTabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.nzTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-vertical"] = (this.nzTabPosition === 'left') || (this.nzTabPosition === 'right'),
            _a[this.prefixCls + "-" + this.nzTabPosition] = this.nzTabPosition,
            _a[this.prefixCls + "-no-animation"] = (this.nzAnimated === false) || ((/** @type {?} */ (this.nzAnimated)).tabPane === false),
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-large"] = this.nzSize === 'large',
            _a[this.prefixCls + "-small"] = this.nzSize === 'small',
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    NzTabSetComponent.prototype.clickLabel = /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    function (index, disabled) {
        if (!disabled) {
            this.nzSelectedIndex = index;
            this.listOfNzTabComponent[index].nzClick.emit();
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var indexToSelect = this._indexToSelect =
            Math.min(this.listOfNzTabComponent.length - 1, Math.max(this._indexToSelect || 0, 0));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex !== indexToSelect && isNotNil(this._selectedIndex)) {
            this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this.listOfNzTabComponent.forEach(function (tab, index) {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (isNotNil(_this._selectedIndex) && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - _this._selectedIndex;
            }
        });
        this._selectedIndex = indexToSelect;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzTabSetComponent.prototype.createChangeEvent = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var event = new NzTabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent[index];
            this.listOfNzTabComponent.forEach(function (item, i) {
                if (i !== index) {
                    item.nzDeselect.emit();
                }
            });
            event.tab.nzSelect.emit();
        }
        return event;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTabSetComponent.prototype.addTab = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfNzTabComponent.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTabSetComponent.prototype.removeTab = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfNzTabComponent.splice(this.listOfNzTabComponent.indexOf(value), 1);
    };
    // From https://github.com/react-component/tabs/blob/master/src/Tabs.js
    // Prevent focus to make the Tabs scroll offset
    /**
     * @param {?} $event
     * @return {?}
     */
    NzTabSetComponent.prototype.onScroll = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = /** @type {?} */ ($event.target);
        if (target.scrollLeft > 0) {
            target.scrollLeft = 0;
            if (this.document && this.document.activeElement) {
                (/** @type {?} */ (this.document.activeElement)).blur();
            }
        }
    };
    /**
     * @return {?}
     */
    NzTabSetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isViewInit = true;
        this.setPosition(this.nzTabPosition);
    };
    NzTabSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tabset',
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    template: "<div \n  class=\"ant-tabs-bar\"\n  nz-tabs-nav\n  role=\"tablist\"\n  tabindex=\"0\"\n  [nzType]=\"nzType\"\n  [nzShowPagination]=\"nzShowPagination\"\n  [nzPositionMode]=\"tabPositionMode\"\n  [nzAnimated]=\"inkBarAnimated\"\n  [ngStyle]=\"nzTabBarStyle\"\n  [nzHideBar]=\"nzHideAll\"\n  [nzTabBarExtraContent]=\"nzTabBarExtraContent\"\n  [selectedIndex]=\"nzSelectedIndex\"\n  (nzOnNextClick)=\"nzOnNextClick.emit()\"\n  (nzOnPrevClick)=\"nzOnPrevClick.emit()\">\n  <div\n    nz-tab-label\n    role=\"tab\"\n    [style.margin-right.px]=\"nzTabBarGutter\"\n    [class.ant-tabs-tab-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\n    [disabled]=\"tab.nzDisabled\"\n    (click)=\"clickLabel(i,tab.nzDisabled)\"\n    *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\n    <ng-container *ngIf=\"tab.isTitleString; else titleTemplate\">{{ tab.nzTitle }}</ng-container>\n    <ng-template #titleTemplate>\n      <ng-template [ngTemplateOutlet]=\"tab.nzTitle\"></ng-template>\n    </ng-template>\n  </div>\n</div>\n<div\n  class=\"ant-tabs-content\"\n  #tabContent\n  [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n  [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\n  [style.margin-left.%]=\"tabPaneAnimated&&(-nzSelectedIndex*100)\">\n  <div nz-tab-body\n    class=\"ant-tabs-tabpane\"\n    [class.ant-tabs-tabpane-active]=\"(nzSelectedIndex == i) && !nzHideAll\"\n    [class.ant-tabs-tabpane-inactive]=\"(nzSelectedIndex != i) || nzHideAll\"\n    [content]=\"tab.content\"\n    *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\n  </div>\n</div>",
                    host: {
                        '(scroll)': 'onScroll($event)'
                    },
                    styles: ["\n    :host {\n      display: block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzTabSetComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
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
    return NzTabSetComponent;
}());
export { NzTabSetComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWJzL256LXRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztBQU83RCxJQUFBOzs7MkJBakNBO0lBb0NDLENBQUE7QUFIRCw0QkFHQzs7Ozs7Ozs7SUFtTkMsa0NBQWtDO0lBQ2xDLDJCQUFvQixRQUFtQixFQUFVLHdCQUFrRCxFQUFVLFVBQXNCLEVBQXdDLFFBQWE7UUFBcEssYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQXdDLGFBQVEsR0FBUixRQUFRLENBQUs7NEJBL0xsSixLQUFLOzhCQUNILENBQUM7OEJBQ0QsSUFBSTtxQkFDakIsTUFBTTtxQkFDakIsU0FBUzt5QkFDMEIsSUFBSTtrQkFDckMsSUFBSSxD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Q0FTTCxLQUFLO3lCQW1CTCxLQUFLOzs0QkF4SVI7O1NBd0RhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBnZXQgc29tZSBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBOelRhYkNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRhYnNOYXZDb21wb25lbnQgfSBmcm9tICcuL256LXRhYnMtbmF2LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpBbmltYXRlZEludGVyZmFjZSB7XG4gIGlua0JhcjogYm9vbGVhbjtcbiAgdGFiUGFuZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIE56VGFiQ2hhbmdlRXZlbnQge1xuICBpbmRleDogbnVtYmVyO1xuICB0YWI6IE56VGFiQ29tcG9uZW50O1xufVxuXG5leHBvcnQgdHlwZSBOelRhYlBvc2l0aW9uID0gJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCc7XG5leHBvcnQgdHlwZSBOelRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5leHBvcnQgdHlwZSBOelRhYlR5cGUgPSAnbGluZScgfCAnY2FyZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdGFic2V0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRhYnNldC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnKHNjcm9sbCknOiAnb25TY3JvbGwoJGV2ZW50KSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJTZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF90YWJQb3NpdGlvbjogTnpUYWJQb3NpdGlvbiA9ICd0b3AnO1xuICBwcml2YXRlIF9pbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gMDtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3R5cGU6IE56VGFiVHlwZSA9ICdsaW5lJztcbiAgcHJpdmF0ZSBfc2l6ZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBfYW5pbWF0ZWQ6IE56QW5pbWF0ZWRJbnRlcmZhY2UgfCBib29sZWFuID0gdHJ1ZTtcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByZWZpeENscyA9ICdhbnQtdGFicyc7XG4gIHRhYlBvc2l0aW9uTW9kZTogTnpUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gIGlua0JhckFuaW1hdGVkID0gdHJ1ZTtcbiAgdGFiUGFuZUFuaW1hdGVkID0gdHJ1ZTtcbiAgaXNWaWV3SW5pdCA9IGZhbHNlO1xuICBsaXN0T2ZOelRhYkNvbXBvbmVudDogTnpUYWJDb21wb25lbnRbXSA9IFtdO1xuICBASW5wdXQoKSBuelRhYkJhckV4dHJhQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoTnpUYWJzTmF2Q29tcG9uZW50KSBuelRhYnNOYXZDb21wb25lbnQ6IE56VGFic05hdkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudCcpIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG56U2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBuekhpZGVBbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpUYWJCYXJHdXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgbnpUYWJCYXJTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBAT3V0cHV0KCkgbnpPbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG56T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56QW5pbWF0ZWQodmFsdWU6IE56QW5pbWF0ZWRJbnRlcmZhY2UgfCBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5pbmtCYXJBbmltYXRlZCA9ICh0aGlzLm56QW5pbWF0ZWQgPT09IHRydWUpIHx8ICgodGhpcy5uekFuaW1hdGVkIGFzIE56QW5pbWF0ZWRJbnRlcmZhY2UpLmlua0JhciA9PT0gdHJ1ZSk7XG4gICAgdGhpcy50YWJQYW5lQW5pbWF0ZWQgPSAodGhpcy5uekFuaW1hdGVkID09PSB0cnVlKSB8fCAoKHRoaXMubnpBbmltYXRlZCBhcyBOekFuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSB0cnVlKTtcbiAgfVxuXG4gIGdldCBuekFuaW1hdGVkKCk6IE56QW5pbWF0ZWRJbnRlcmZhY2UgfCBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0ZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5faW5kZXhUb1NlbGVjdCA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgfVxuXG4gIGdldCBuelNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgZ2V0IG56U2VsZWN0ZWRJbmRleENoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLm56U2VsZWN0Q2hhbmdlLnBpcGUobWFwKGV2ZW50ID0+IGV2ZW50LmluZGV4KSk7XG4gIH1cblxuICBAT3V0cHV0KCkgbnpTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOelRhYkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XG5cbiAgQElucHV0KCkgc2V0IG56U2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuelNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRhYlBvc2l0aW9uKHZhbHVlOiBOelRhYlBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMuX3RhYlBvc2l0aW9uID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl90YWJQb3NpdGlvbiA9IHZhbHVlO1xuICAgIGlmICgodGhpcy5fdGFiUG9zaXRpb24gPT09ICd0b3AnKSB8fCAodGhpcy5fdGFiUG9zaXRpb24gPT09ICdib3R0b20nKSkge1xuICAgICAgdGhpcy50YWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ3ZlcnRpY2FsJztcbiAgICB9XG4gICAgdGhpcy5zZXRQb3NpdGlvbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56VGFiUG9zaXRpb24oKTogTnpUYWJQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYlBvc2l0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHlwZSh2YWx1ZTogTnpUYWJUeXBlKSB7XG4gICAgaWYgKHRoaXMuX3R5cGUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gJ2NhcmQnKSB7XG4gICAgICB0aGlzLm56QW5pbWF0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56VHlwZSgpOiBOelRhYlR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgc2V0UG9zaXRpb24odmFsdWU6IE56VGFiUG9zaXRpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1ZpZXdJbml0KSB7XG4gICAgICBpZiAodmFsdWUgPT09ICdib3R0b20nKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50LCB0aGlzLm56VGFic05hdkNvbXBvbmVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5lbCwgdGhpcy5uelRhYnNOYXZDb21wb25lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXZlcnRpY2FsYCBdICAgICAgICAgICAgIDogKHRoaXMubnpUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnKSB8fCAodGhpcy5uelRhYlBvc2l0aW9uID09PSAncmlnaHQnKSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelRhYlBvc2l0aW9ufWAgXTogdGhpcy5uelRhYlBvc2l0aW9uLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbm8tYW5pbWF0aW9uYCBdICAgICAgICAgOiAodGhpcy5uekFuaW1hdGVkID09PSBmYWxzZSkgfHwgKCh0aGlzLm56QW5pbWF0ZWQgYXMgTnpBbmltYXRlZEludGVyZmFjZSkudGFiUGFuZSA9PT0gZmFsc2UpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gIF0gICAgICAgOiB0aGlzLm56VHlwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWxhcmdlYCBdICAgICAgICAgICAgICAgIDogdGhpcy5uelNpemUgPT09ICdsYXJnZScsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1zbWFsbGAgXSAgICAgICAgICAgICAgICA6IHRoaXMubnpTaXplID09PSAnc21hbGwnXG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50WyBpbmRleCBdLm56Q2xpY2suZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAvLyBDbGFtcCB0aGUgbmV4dCBzZWxlY3RlZCBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gTm90ZSB0aGUgYHx8IDBgLCB3aGljaFxuICAgIC8vIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2ggYW5kIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyB0aGVcbiAgICAvLyBjb21wb25lbnQgaW50byBhbiBpbmZpbml0ZSBsb29wIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxuICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSB0aGlzLl9pbmRleFRvU2VsZWN0ID1cbiAgICAgIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgodGhpcy5faW5kZXhUb1NlbGVjdCB8fCAwLCAwKSk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBzZWxlY3RlZCBpbmRleCwgZW1pdCBhIGNoYW5nZSBldmVudC4gU2hvdWxkIG5vdCB0cmlnZ2VyIGlmXG4gICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QgJiYgaXNOb3ROaWwodGhpcy5fc2VsZWN0ZWRJbmRleCkpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWI6IE56VGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VsZWN0ZWQgdGFiLCB0aGVuIHNldCB1cCBhbiBvcmlnaW4gZm9yIHRoZSBuZXh0IHNlbGVjdGVkIHRhYlxuICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuX3NlbGVjdGVkSW5kZXgpICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xuICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XG4gIH1cblxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogTnpUYWJDaGFuZ2VFdmVudCB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgTnpUYWJDaGFuZ2VFdmVudCgpO1xuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnRbIGluZGV4IF07XG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgaXRlbS5uekRlc2VsZWN0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBldmVudC50YWIubnpTZWxlY3QuZW1pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBhZGRUYWIodmFsdWU6IE56VGFiQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZVRhYih2YWx1ZTogTnpUYWJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LnNwbGljZSh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgfVxuXG4gIC8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90YWJzL2Jsb2IvbWFzdGVyL3NyYy9UYWJzLmpzXG4gIC8vIFByZXZlbnQgZm9jdXMgdG8gbWFrZSB0aGUgVGFicyBzY3JvbGwgb2Zmc2V0XG4gIG9uU2Nyb2xsKCRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQ6IEVsZW1lbnQgPSAkZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5zY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgdGFyZ2V0LnNjcm9sbExlZnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZG9jdW1lbnQgJiYgdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICh0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzVmlld0luaXQgPSB0cnVlO1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5uelRhYlBvc2l0aW9uKTtcbiAgfVxuXG59XG4iXX0=