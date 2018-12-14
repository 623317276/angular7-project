/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export class NzAutocompleteComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} _ngZone
     */
    constructor(changeDetectorRef, _ngZone) {
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
        this.optionSelectionChanges = defer(() => {
            if (this.options) {
                return merge(...this.options.map(option => option.selectionChange));
            }
            return this._ngZone.onStable
                .asObservable()
                .pipe(take(1), switchMap(() => this.optionSelectionChanges));
        });
    }
    /**
     * 组件支持设置 dataSource 和 content 设置 options
     *  这个属性为其提供方便的访问方式
     * @return {?}
     */
    get options() {
        // 优先使用 dataSource
        if (this.nzDataSource) {
            return this.fromDataSourceOptions;
        }
        else {
            return this.fromContentOptions;
        }
    }
    /**
     * 是否默认高亮第一个选项，默认 `true`
     * @return {?}
     */
    get nzDefaultActiveFirstOption() {
        return this._defaultActiveFirstOption;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDefaultActiveFirstOption(value) {
        this._defaultActiveFirstOption = toBoolean(value);
    }
    /**
     * 使用键盘选择选项的时候把选中项回填到输入框中，默认 `false`
     * @return {?}
     */
    get nzBackfill() {
        return this._backfill;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzBackfill(value) {
        this._backfill = toBoolean(value);
    }
    /**
     * 自动完成的数据源
     * @return {?}
     */
    get nzDataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDataSource(value) {
        this._dataSource = value;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.optionsInit();
    }
    /**
     * @return {?}
     */
    setVisibility() {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveItem(index) {
        /** @type {?} */
        const activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    setNextItemActive() {
        /** @type {?} */
        const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    }
    /**
     * @return {?}
     */
    setPreviousItemActive() {
        /** @type {?} */
        const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOptionIndex(option) {
        return this.options.reduce((result, current, index) => {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    }
    /**
     * @return {?}
     */
    optionsInit() {
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // 用于处理动态/异步的 options
        changes.subscribe(e => {
            if (!e.dirty && this.isOpen) {
                setTimeout(_ => this.setVisibility());
            }
            this.subscribeOptionChanges();
        });
    }
    /**
     * 清除 Options 的激活状态
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    clearSelectedOptions(skip, deselect = false) {
        this.options.forEach(option => {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        });
    }
    /**
     * @return {?}
     */
    subscribeOptionChanges() {
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((event) => event.isUserInput))
            .subscribe((event) => {
            event.source.select();
            event.source.setActiveStyles();
            this.activeItem = event.source;
            this.activeItemIndex = this.getOptionIndex(this.activeItem);
            this.clearSelectedOptions(event.source, true);
            this.selectionChange.emit(event.source);
        });
    }
}
NzAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-autocomplete',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    dropDownAnimation
                ],
                template: "<ng-template>\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\n    #panel\n    [@dropDownAnimation]=\"dropDownPosition\"\n    [class.ant-select-dropdown-hidden]=\"!showPanel\">\n    <div style=\"overflow: auto;\">\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n        role=\"menu\"\n        aria-activedescendant>\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\n      </ul>\n    </div>\n  </div>\n  <ng-template #contentTemplate>\n    <ng-content></ng-content>\n  </ng-template>\n  <ng-template #optionsTemplate>\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\n  </ng-template>\n</ng-template>",
                styles: [`
    .ant-select-dropdown {
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
    }
    `]
            }] }
];
/** @nocollapse */
NzAutocompleteComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdXRvLWNvbXBsZXRlL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQUUsTUFBTSxFQUNiLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFBRSxZQUFZLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDZCQUE2QixFQUEyQixNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7Ozs7OztBQThCNUcsTUFBTTs7Ozs7SUFvRkosWUFBb0IsaUJBQW9DLEVBQVUsT0FBZTtRQUE3RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTsrQkFuRi9DLENBQUMsQ0FBQzt5QkFHZixLQUFLO3NCQUNSLEtBQUs7Z0NBRXlCLFFBQVE7eUNBc0NuQixJQUFJO3lCQVlwQixLQUFLOzs7OytCQWUrQyxJQUFJLFlBQVksRUFBaUM7Ozs7c0NBR25ELEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDaEYsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxP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LEtBQUs7OEJBWUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsIE5nWm9uZSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZmVyLCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlRGF0YVNvdXJjZUl0ZW0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBdXRvY29tcGxldGVEYXRhU291cmNlID0gQXV0b2NvbXBsZXRlRGF0YVNvdXJjZUl0ZW1bXSB8IHN0cmluZ1tdIHwgbnVtYmVyW107XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYXV0b2NvbXBsZXRlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIGRyb3BEb3duQW5pbWF0aW9uXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgXG4gICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHNob3dQYW5lbDogYm9vbGVhbiA9IGZhbHNlO1xuICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgYWN0aXZlSXRlbTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ7XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuXG4gIC8qKiDnu4Tku7bmlK/mjIHorr7nva4gZGF0YVNvdXJjZSDlkowgY29udGVudCDorr7nva4gb3B0aW9uc1xuICAgKiAg6L+Z5Liq5bGe5oCn5Li65YW25o+Q5L6b5pa55L6/55qE6K6/6Zeu5pa55byPICovXG4gIGdldCBvcHRpb25zKCk6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4ge1xuICAgIC8vIOS8mOWFiOS9v+eUqCBkYXRhU291cmNlXG4gICAgaWYgKHRoaXMubnpEYXRhU291cmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5mcm9tRGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZyb21Db250ZW50T3B0aW9ucztcbiAgICB9XG4gIH1cblxuICAvKiog5o+Q5L6b57uZIGNkay1vdmVybGF5IOeUqOS6jua4suafkyAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xuXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJykgcGFuZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIC8qKiDnlLEgQ29udGVudCDmj5Dkvpsgb3B0aW9ucyAqL1xuICBAQ29udGVudENoaWxkcmVuKE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGZyb21Db250ZW50T3B0aW9uczogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcblxuICAvKiog55SxIG56RGF0YVNvdXJjZSDmj5Dkvpsgb3B0aW9ucyAqL1xuICBAVmlld0NoaWxkcmVuKE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSBmcm9tRGF0YVNvdXJjZU9wdGlvbnM6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD47XG5cbiAgLyoqIOiHquWumuS5ieWuveW6puWNleS9jSBweCAqL1xuICBASW5wdXQoKSBueldpZHRoOiBudW1iZXI7XG5cbiAgLyoqIOaYr+WQpum7mOiupOmrmOS6ruesrOS4gOS4qumAiemhue+8jOm7mOiupCBgdHJ1ZWAgKi9cbiAgQElucHV0KClcbiAgZ2V0IG56RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb247XG4gIH1cblxuICBzZXQgbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgX2RlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIOS9v+eUqOmUruebmOmAieaLqemAiemhueeahOaXtuWAmeaKiumAieS4remhueWbnuWhq+WIsOi+k+WFpeahhuS4re+8jOm7mOiupCBgZmFsc2VgICovXG4gIEBJbnB1dCgpXG4gIGdldCBuekJhY2tmaWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZmlsbDtcbiAgfVxuXG4gIHNldCBuekJhY2tmaWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYmFja2ZpbGwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgX2JhY2tmaWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIOiHquWKqOWujOaIkOeahOaVsOaNrua6kCAqL1xuICBASW5wdXQoKVxuICBnZXQgbnpEYXRhU291cmNlKCk6IEF1dG9jb21wbGV0ZURhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xuICB9XG5cbiAgc2V0IG56RGF0YVNvdXJjZSh2YWx1ZTogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZSkge1xuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSB2YWx1ZTtcbiAgfVxuXG4gIF9kYXRhU291cmNlOiBBdXRvY29tcGxldGVEYXRhU291cmNlO1xuXG4gIC8qKiDpgInmi6nml7blj5Hlh7rnmoTkuovku7YgKi9cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+KCk7XG5cbiAgLyoqIOeUqOS6jue7hOS7tuWGhemDqOebkeWQrCBvcHRpb25zIOeahOmAieaLqeWPmOWMliAqL1xuICByZWFkb25seSBvcHRpb25TZWxlY3Rpb25DaGFuZ2VzOiBPYnNlcnZhYmxlPE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlPiA9IGRlZmVyKCgpID0+IHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gbWVyZ2UoLi4udGhpcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGlvbkNoYW5nZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmdab25lLm9uU3RhYmxlXG4gICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgLnBpcGUodGFrZSgxKSwgc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcykpO1xuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnNJbml0KCk7XG4gIH1cblxuICBzZXRWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd1BhbmVsID0gISF0aGlzLm9wdGlvbnMubGVuZ3RoO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZXRBY3RpdmVJdGVtKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5vcHRpb25zLnRvQXJyYXkoKVsgaW5kZXggXTtcbiAgICBpZiAoYWN0aXZlSXRlbSAmJiAhYWN0aXZlSXRlbS5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGFjdGl2ZUl0ZW07XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGVkT3B0aW9ucyh0aGlzLmFjdGl2ZUl0ZW0pO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtLnNldEFjdGl2ZVN0eWxlcygpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzZXROZXh0SXRlbUFjdGl2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmFjdGl2ZUl0ZW1JbmRleCArIDEgPD0gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEgPyB0aGlzLmFjdGl2ZUl0ZW1JbmRleCArIDEgOiAwO1xuICAgIHRoaXMuc2V0QWN0aXZlSXRlbShuZXh0SW5kZXgpO1xuICB9XG5cbiAgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzSW5kZXggPSB0aGlzLmFjdGl2ZUl0ZW1JbmRleCAtIDEgPCAwID8gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEgOiB0aGlzLmFjdGl2ZUl0ZW1JbmRleCAtIDE7XG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgZ2V0T3B0aW9uSW5kZXgob3B0aW9uOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWR1Y2UoKHJlc3VsdDogbnVtYmVyLCBjdXJyZW50OiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gKG9wdGlvbiA9PT0gY3VycmVudCA/IGluZGV4IDogdW5kZWZpbmVkKSA6IHJlc3VsdDtcbiAgICB9LCB1bmRlZmluZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcHRpb25zSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcbiAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5uekRhdGFTb3VyY2UgPyB0aGlzLmZyb21EYXRhU291cmNlT3B0aW9ucy5jaGFuZ2VzIDogdGhpcy5mcm9tQ29udGVudE9wdGlvbnMuY2hhbmdlcztcblxuICAgIC8vIOeUqOS6juWkhOeQhuWKqOaAgS/lvILmraXnmoQgb3B0aW9uc1xuICAgIGNoYW5nZXMuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKCFlLmRpcnR5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoXyA9PiB0aGlzLnNldFZpc2liaWxpdHkoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXpmaQgT3B0aW9ucyDnmoTmv4DmtLvnirbmgIFcbiAgICovXG4gIHByaXZhdGUgY2xlYXJTZWxlY3RlZE9wdGlvbnMoc2tpcD86IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBkZXNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGlmIChvcHRpb24gIT09IHNraXApIHtcbiAgICAgICAgaWYgKGRlc2VsZWN0KSB7XG4gICAgICAgICAgb3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXNcbiAgICAucGlwZShmaWx0ZXIoKGV2ZW50OiBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4gZXZlbnQuaXNVc2VySW5wdXQpKVxuICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4ge1xuICAgICAgZXZlbnQuc291cmNlLnNlbGVjdCgpO1xuICAgICAgZXZlbnQuc291cmNlLnNldEFjdGl2ZVN0eWxlcygpO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtID0gZXZlbnQuc291cmNlO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSB0aGlzLmdldE9wdGlvbkluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRPcHRpb25zKGV2ZW50LnNvdXJjZSwgdHJ1ZSk7XG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGV2ZW50LnNvdXJjZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==