/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { defer, merge } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
/**
 * @record
 */
export function AutocompleteDataSourceItem() { }
function AutocompleteDataSourceItem_tsickle_Closure_declarations() {
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.value;
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.label;
}
var NzAutocompleteComponent = /** @class */ (function () {
    function NzAutocompleteComponent(changeDetectorRef, _ngZone) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this._ngZone = _ngZone;
        this.activeItemIndex = -1;
        this.showPanel = false;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this._defaultActiveFirstOption = true;
        this._backfill = false;
        /**
         * 选择时发出的事件
         */
        this.selectionChange = new EventEmitter();
        /**
         * 用于组件内部监听 options 的选择变化
         */
        this.optionSelectionChanges = defer(function () {
            if (_this.options) {
                return merge.apply(void 0, tslib_1.__spread(_this.options.map(function (option) { return option.selectionChange; })));
            }
            return _this._ngZone.onStable
                .asObservable()
                .pipe(take(1), switchMap(function () { return _this.optionSelectionChanges; }));
        });
    }
    Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
        /** 组件支持设置 dataSource 和 content 设置 options
         *  这个属性为其提供方便的访问方式 */
        get: /**
         * 组件支持设置 dataSource 和 content 设置 options
         *  这个属性为其提供方便的访问方式
         * @return {?}
         */
        function () {
            // 优先使用 dataSource
            if (this.nzDataSource) {
                return this.fromDataSourceOptions;
            }
            else {
                return this.fromContentOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", {
        /** 是否默认高亮第一个选项，默认 `true` */
        get: /**
         * 是否默认高亮第一个选项，默认 `true`
         * @return {?}
         */
        function () {
            return this._defaultActiveFirstOption;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._defaultActiveFirstOption = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAutocompleteComponent.prototype, "nzBackfill", {
        /** 使用键盘选择选项的时候把选中项回填到输入框中，默认 `false` */
        get: /**
         * 使用键盘选择选项的时候把选中项回填到输入框中，默认 `false`
         * @return {?}
         */
        function () {
            return this._backfill;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._backfill = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAutocompleteComponent.prototype, "nzDataSource", {
        /** 自动完成的数据源 */
        get: /**
         * 自动完成的数据源
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dataSource = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.optionsInit();
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setVisibility = /**
     * @return {?}
     */
    function () {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setNextItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setPreviousItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NzAutocompleteComponent.prototype.getOptionIndex = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.options.reduce(function (result, current, index) {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.optionsInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // 用于处理动态/异步的 options
        changes.subscribe(function (e) {
            if (!e.dirty && _this.isOpen) {
                setTimeout(function (_) { return _this.setVisibility(); });
            }
            _this.subscribeOptionChanges();
        });
    };
    /**
     * 清除 Options 的激活状态
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    NzAutocompleteComponent.prototype.clearSelectedOptions = /**
     * 清除 Options 的激活状态
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    function (skip, deselect) {
        if (deselect === void 0) { deselect = false; }
        this.options.forEach(function (option) {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        });
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.subscribeOptionChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter(function (event) { return event.isUserInput; }))
            .subscribe(function (event) {
            event.source.select();
            event.source.setActiveStyles();
            _this.activeItem = event.source;
            _this.activeItemIndex = _this.getOptionIndex(_this.activeItem);
            _this.clearSelectedOptions(event.source, true);
            _this.selectionChange.emit(event.source);
        });
    };
    NzAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-autocomplete',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<ng-template>\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\n    #panel\n    [@dropDownAnimation]=\"dropDownPosition\"\n    [class.ant-select-dropdown-hidden]=\"!showPanel\">\n    <div style=\"overflow: auto;\">\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n        role=\"menu\"\n        aria-activedescendant>\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\n      </ul>\n    </div>\n  </div>\n  <ng-template #contentTemplate>\n    <ng-content></ng-content>\n  </ng-template>\n  <ng-template #optionsTemplate>\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\n  </ng-template>\n</ng-template>",
                    styles: ["\n    .ant-select-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    NzAutocompleteComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        panel: [{ type: ViewChild, args: ['panel',] }],
        content: [{ type: ViewChild, args: ['content',] }],
        fromContentOptions: [{ type: ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
        fromDataSourceOptions: [{ type: ViewChildren, args: [NzAutocompleteOptionComponent,] }],
        nzWidth: [{ type: Input }],
        nzDefaultActiveFirstOption: [{ type: Input }],
        nzBackfill: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    return NzAutocompleteComponent;
}());
export { NzAutocompleteComponent };
function NzAutocompleteComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAutocompleteComponent.prototype.activeItemIndex;
    /** @type {?} */
    NzAutocompleteComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzAutocompleteComponent.prototype.showPanel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.isOpen;
    /** @type {?} */
    NzAutocompleteComponent.prototype.activeItem;
    /** @type {?} */
    NzAutocompleteComponent.prototype.dropDownPosition;
    /**
     * 提供给 cdk-overlay 用于渲染
     * @type {?}
     */
    NzAutocompleteComponent.prototype.template;
    /** @type {?} */
    NzAutocompleteComponent.prototype.panel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.content;
    /**
     * 由 Content 提供 options
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromContentOptions;
    /**
     * 由 nzDataSource 提供 options
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromDataSourceOptions;
    /**
     * 自定义宽度单位 px
     * @type {?}
     */
    NzAutocompleteComponent.prototype.nzWidth;
    /** @type {?} */
    NzAutocompleteComponent.prototype._defaultActiveFirstOption;
    /** @type {?} */
    NzAutocompleteComponent.prototype._backfill;
    /** @type {?} */
    NzAutocompleteComponent.prototype._dataSource;
    /**
     * 选择时发出的事件
     * @type {?}
     */
    NzAutocompleteComponent.prototype.selectionChange;
    /**
     * 用于组件内部监听 options 的选择变化
     * @type {?}
     */
    NzAutocompleteComponent.prototype.optionSelectionChanges;
    /** @type {?} */
    NzAutocompleteComponent.prototype.changeDetectorRef;
    /** @type {?} */
    NzAutocompleteComponent.prototype._ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdXRvLWNvbXBsZXRlL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQUUsWUFBWSxFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBMkIsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7O0lBa0gxRyxpQ0FBb0IsaUJBQW9DLEVBQVUsT0FBZTtRQUFqRixpQkFDQztRQURtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTsrQkFuRi9DLENBQUMsQ0FBQzt5QkFHZixLQUFLO3NCQUNSLEtBQUs7Z0NBRXlCLFFBQVE7eUNBc0NuQixJQUFJO3lCQVlwQixLQUFLOzs7OytCQWUrQyxJQUFJLFlBQVksRUFBaUM7Ozs7c0NBR25ELEtBQUssQ0FBQztZQUMzRSxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE9BQU8sS0FBSyxnQ0FBSSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcs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LE9BQU87MEJBQ2pCLFNBQVMsU0FBQyxTQUFTO3FDQUduQixlQUFlLFNBQUMsNkJBQTZCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO3dDQUdwRSxZQUFZLFNBQUMsNkJBQTZCOzBCQUcxQyxLQUFLOzZDQUdMLEtBQUs7NkJBWUwsS0FBSzsrQkFZTCxLQUFLO2tDQVlMLE1BQU07O2tDQTFIVDs7U0FrRGEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCwgTmdab25lLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmZXIsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tICcuL256LWF1dG9jb21wbGV0ZS1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRvY29tcGxldGVEYXRhU291cmNlSXRlbSB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2UgPSBBdXRvY29tcGxldGVEYXRhU291cmNlSXRlbVtdIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1hdXRvY29tcGxldGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgZHJvcERvd25BbmltYXRpb25cbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgIGBcbiAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgc2hvd1BhbmVsOiBib29sZWFuID0gZmFsc2U7XG4gIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBhY3RpdmVJdGVtOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudDtcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG5cbiAgLyoqIOe7hOS7tuaUr+aMgeiuvue9riBkYXRhU291cmNlIOWSjCBjb250ZW50IOiuvue9riBvcHRpb25zXG4gICAqICDov5nkuKrlsZ7mgKfkuLrlhbbmj5Dkvpvmlrnkvr/nmoTorr/pl67mlrnlvI8gKi9cbiAgZ2V0IG9wdGlvbnMoKTogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiB7XG4gICAgLy8g5LyY5YWI5L2/55SoIGRhdGFTb3VyY2VcbiAgICBpZiAodGhpcy5uekRhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmZyb21EYXRhU291cmNlT3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZnJvbUNvbnRlbnRPcHRpb25zO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDmj5Dkvpvnu5kgY2RrLW92ZXJsYXkg55So5LqO5riy5p+TICovXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT47XG5cbiAgQFZpZXdDaGlsZCgncGFuZWwnKSBwYW5lbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgLyoqIOeUsSBDb250ZW50IOaPkOS+myBvcHRpb25zICovXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgZnJvbUNvbnRlbnRPcHRpb25zOiBRdWVyeUxpc3Q8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+O1xuXG4gIC8qKiDnlLEgbnpEYXRhU291cmNlIOaPkOS+myBvcHRpb25zICovXG4gIEBWaWV3Q2hpbGRyZW4oTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpIGZyb21EYXRhU291cmNlT3B0aW9uczogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcblxuICAvKiog6Ieq5a6a5LmJ5a695bqm5Y2V5L2NIHB4ICovXG4gIEBJbnB1dCgpIG56V2lkdGg6IG51bWJlcjtcblxuICAvKiog5piv5ZCm6buY6K6k6auY5Lqu56ys5LiA5Liq6YCJ6aG577yM6buY6K6kIGB0cnVlYCAqL1xuICBASW5wdXQoKVxuICBnZXQgbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjtcbiAgfVxuXG4gIHNldCBuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBfZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICAvKiog5L2/55So6ZSu55uY6YCJ5oup6YCJ6aG555qE5pe25YCZ5oqK6YCJ5Lit6aG55Zue5aGr5Yiw6L6T5YWl5qGG5Lit77yM6buY6K6kIGBmYWxzZWAgKi9cbiAgQElucHV0KClcbiAgZ2V0IG56QmFja2ZpbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tmaWxsO1xuICB9XG5cbiAgc2V0IG56QmFja2ZpbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9iYWNrZmlsbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBfYmFja2ZpbGw6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiog6Ieq5Yqo5a6M5oiQ55qE5pWw5o2u5rqQICovXG4gIEBJbnB1dCgpXG4gIGdldCBuekRhdGFTb3VyY2UoKTogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XG4gIH1cblxuICBzZXQgbnpEYXRhU291cmNlKHZhbHVlOiBBdXRvY29tcGxldGVEYXRhU291cmNlKSB7XG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IHZhbHVlO1xuICB9XG5cbiAgX2RhdGFTb3VyY2U6IEF1dG9jb21wbGV0ZURhdGFTb3VyY2U7XG5cbiAgLyoqIOmAieaLqeaXtuWPkeWHuueahOS6i+S7tiAqL1xuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4oKTtcblxuICAvKiog55So5LqO57uE5Lu25YaF6YOo55uR5ZCsIG9wdGlvbnMg55qE6YCJ5oup5Y+Y5YyWICovXG4gIHJlYWRvbmx5IG9wdGlvblNlbGVjdGlvbkNoYW5nZXM6IE9ic2VydmFibGU8TnpPcHRpb25TZWxlY3Rpb25DaGFuZ2U+ID0gZGVmZXIoKCkgPT4ge1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBtZXJnZSguLi50aGlzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0aW9uQ2hhbmdlKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9uZ1pvbmUub25TdGFibGVcbiAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAucGlwZSh0YWtlKDEpLCBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzKSk7XG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9uc0luaXQoKTtcbiAgfVxuXG4gIHNldFZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGFuZWwgPSAhIXRoaXMub3B0aW9ucy5sZW5ndGg7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNldEFjdGl2ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpWyBpbmRleCBdO1xuICAgIGlmIChhY3RpdmVJdGVtICYmICFhY3RpdmVJdGVtLmFjdGl2ZSkge1xuICAgICAgdGhpcy5hY3RpdmVJdGVtID0gYWN0aXZlSXRlbTtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRPcHRpb25zKHRoaXMuYWN0aXZlSXRlbSk7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0uc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHNldE5leHRJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4ICsgMSA8PSB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSA/IHRoaXMuYWN0aXZlSXRlbUluZGV4ICsgMSA6IDA7XG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKG5leHRJbmRleCk7XG4gIH1cblxuICBzZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgY29uc3QgcHJldmlvdXNJbmRleCA9IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMSA8IDAgPyB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSA6IHRoaXMuYWN0aXZlSXRlbUluZGV4IC0gMTtcbiAgICB0aGlzLnNldEFjdGl2ZUl0ZW0ocHJldmlvdXNJbmRleCk7XG4gIH1cblxuICBnZXRPcHRpb25JbmRleChvcHRpb246IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJlZHVjZSgocmVzdWx0OiBudW1iZXIsIGN1cnJlbnQ6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyAob3B0aW9uID09PSBjdXJyZW50ID8gaW5kZXggOiB1bmRlZmluZWQpIDogcmVzdWx0O1xuICAgIH0sIHVuZGVmaW5lZCk7XG4gIH1cblxuICBwcml2YXRlIG9wdGlvbnNJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmlzaWJpbGl0eSgpO1xuICAgIHRoaXMuc3Vic2NyaWJlT3B0aW9uQ2hhbmdlcygpO1xuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLm56RGF0YVNvdXJjZSA/IHRoaXMuZnJvbURhdGFTb3VyY2VPcHRpb25zLmNoYW5nZXMgOiB0aGlzLmZyb21Db250ZW50T3B0aW9ucy5jaGFuZ2VzO1xuXG4gICAgLy8g55So5LqO5aSE55CG5Yqo5oCBL+W8guatpeeahCBvcHRpb25zXG4gICAgY2hhbmdlcy5zdWJzY3JpYmUoZSA9PiB7XG4gICAgICBpZiAoIWUuZGlydHkgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgICAgc2V0VGltZW91dChfID0+IHRoaXMuc2V0VmlzaWJpbGl0eSgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3Vic2NyaWJlT3B0aW9uQ2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOa4hemZpCBPcHRpb25zIOeahOa/gOa0u+eKtuaAgVxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhclNlbGVjdGVkT3B0aW9ucyhza2lwPzogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIGRlc2VsZWN0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgaWYgKG9wdGlvbiAhPT0gc2tpcCkge1xuICAgICAgICBpZiAoZGVzZWxlY3QpIHtcbiAgICAgICAgICBvcHRpb24uZGVzZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb24uc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlT3B0aW9uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlc1xuICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlKSA9PiBldmVudC5pc1VzZXJJbnB1dCkpXG4gICAgLnN1YnNjcmliZSgoZXZlbnQ6IE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlKSA9PiB7XG4gICAgICBldmVudC5zb3VyY2Uuc2VsZWN0KCk7XG4gICAgICBldmVudC5zb3VyY2Uuc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBldmVudC5zb3VyY2U7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IHRoaXMuZ2V0T3B0aW9uSW5kZXgodGhpcy5hY3RpdmVJdGVtKTtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZE9wdGlvbnMoZXZlbnQuc291cmNlLCB0cnVlKTtcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQoZXZlbnQuc291cmNlKTtcbiAgICB9KTtcbiAgfVxufVxuIl19