/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
/**
 * @record
 */
export function NzThItemInterface() { }
function NzThItemInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    NzThItemInterface.prototype.text;
    /** @type {?} */
    NzThItemInterface.prototype.value;
    /** @type {?} */
    NzThItemInterface.prototype.checked;
}
export class NzThComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._sort = null;
        this._filters = [];
        this._showSort = false;
        this._showFilter = false;
        this._showCheckbox = false;
        this._showRowSelection = false;
        this._hasDefaultFilter = false;
        this._customFilter = false;
        this.el = this.elementRef.nativeElement;
        this.hasFilterValue = false;
        this.filterVisible = false;
        this.multipleFilterList = [];
        this.singleFilterList = [];
        /* tslint:disable-next-line:no-any */
        this.nzSelections = [];
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzFilterMultiple = true;
        this.nzCheckedChange = new EventEmitter();
        this.nzSortChange = new EventEmitter();
        this.nzSortChangeWithKey = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzFilterChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get hasActionsClass() {
        return this.nzShowFilter || this.nzShowSort || this.nzCustomFilter;
    }
    /**
     * @return {?}
     */
    get hasFiltersClass() {
        return this.nzShowFilter || this.nzCustomFilter;
    }
    /**
     * @return {?}
     */
    get hasSortersClass() {
        return this.nzShowSort;
    }
    /**
     * @return {?}
     */
    updateSortValue() {
        if (this.nzShowSort) {
            if (this.nzSort === 'descend') {
                this.setSortValue('ascend');
            }
            else if (this.nzSort === 'ascend') {
                this.setSortValue(null);
            }
            else {
                this.setSortValue('descend');
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCustomFilter(value) {
        this._customFilter = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzCustomFilter() {
        return this._customFilter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowSort(value) {
        this._showSort = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowSort() {
        return this._showSort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowFilter(value) {
        this._showFilter = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowFilter() {
        return this._showFilter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowRowSelection(value) {
        this._showRowSelection = toBoolean(value);
        if (this._showRowSelection) {
            this.renderer.addClass(this.el, 'ant-table-selection-column-custom');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-selection-column-custom');
        }
    }
    /**
     * @return {?}
     */
    get nzShowRowSelection() {
        return this._showRowSelection;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLeft(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-th-left-sticky');
            this.renderer.setStyle(this.el, 'left', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-th-left-sticky');
            this.renderer.removeStyle(this.el, 'left');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzRight(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-th-right-sticky');
            this.renderer.setStyle(this.el, 'right', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-th-right-sticky');
            this.renderer.removeStyle(this.el, 'right');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpand(value) {
        /** @type {?} */
        const isExpand = toBoolean(value);
        if (isExpand) {
            this.renderer.addClass(this.el, 'ant-table-expand-icon-th');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-expand-icon-th');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowCheckbox(value) {
        this._showCheckbox = toBoolean(value);
        if (this._showCheckbox) {
            this.renderer.addClass(this.el, 'ant-table-selection-column');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-selection-column');
        }
    }
    /**
     * @return {?}
     */
    get nzShowCheckbox() {
        return this._showCheckbox;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSort(value) {
        this._sort = value;
        if ((value !== 'ascend') && (value !== 'descend')) {
            this.renderer.removeClass(this.el, 'ant-table-column-sort');
        }
        else {
            this.renderer.addClass(this.el, 'ant-table-column-sort');
        }
    }
    /**
     * @return {?}
     */
    get nzSort() {
        return this._sort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSortValue(value) {
        this.nzSort = value;
        this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
        this.nzSortChange.emit(this.nzSort);
    }
    /**
     * @return {?}
     */
    get filterList() {
        return this.multipleFilterList.filter(item => item.checked).map(item => item.value);
    }
    /**
     * @return {?}
     */
    get filterValue() {
        /** @type {?} */
        const checkedFilter = this.singleFilterList.find(item => item.checked);
        return checkedFilter ? checkedFilter.value : null;
    }
    /**
     * @return {?}
     */
    updateFilterStatus() {
        if (this.nzFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    }
    /**
     * @return {?}
     */
    search() {
        this.updateFilterStatus();
        if (this.nzFilterMultiple) {
            this.nzFilterChange.emit(this.filterList);
        }
        else {
            this.nzFilterChange.emit(this.filterValue);
        }
        this.hideDropDown();
    }
    /**
     * @return {?}
     */
    reset() {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.search();
        this.hideDropDown();
        this.hasFilterValue = false;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    checkMultiple(filter) {
        filter.checked = !filter.checked;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    checkSingle(filter) {
        this.singleFilterList.forEach(item => item.checked = item === filter);
    }
    /**
     * @return {?}
     */
    hideDropDown() {
        this.nzDropDownComponent.nzVisible = false;
        this.nzDropDownComponent.hide();
        this.filterVisible = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    dropDownVisibleChange(value) {
        this.filterVisible = value;
        if (!value) {
            this.search();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFilters(value) {
        if (Array.isArray(value)) {
            this._filters = value;
            this.initMultipleFilterList();
            this.initSingleFilterList();
            this.updateFilterStatus();
        }
        else {
            console.warn('nzFilters only accept type of Array<{ text: string; value: any }>');
        }
    }
    /**
     * @return {?}
     */
    get nzFilters() {
        return this._filters;
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    initMultipleFilterList(force) {
        this.multipleFilterList = this.nzFilters.map(item => {
            /** @type {?} */
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        });
        this.checkDefaultFilters();
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    initSingleFilterList(force) {
        this.singleFilterList = this.nzFilters.map(item => {
            /** @type {?} */
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        });
        this.checkDefaultFilters();
    }
    /**
     * @return {?}
     */
    checkDefaultFilters() {
        if (!this.nzFilters || this.nzFilters.length === 0 || !this._hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    }
}
NzThComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'th:not(.nz-disable-th)',
                preserveWhitespaces: false,
                template: "<ng-template #checkboxTemplate>\n  <label\n    [class.ant-table-selection-select-all-custom]=\"nzShowRowSelection\"\n    nz-checkbox\n    [(ngModel)]=\"nzChecked\"\n    [nzDisabled]=\"nzDisabled\"\n    [nzIndeterminate]=\"nzIndeterminate\"\n    (ngModelChange)=\"nzCheckedChange.emit($event)\">\n  </label>\n</ng-template>\n<div [class.ant-table-column-sorters]=\"nzShowSort\" (click)=\"updateSortValue()\">\n  <div class=\"ant-table-selection\" *ngIf=\"nzShowRowSelection\">\n    <ng-container *ngIf=\"nzShowCheckbox\">\n      <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n    </ng-container>\n    <nz-dropdown nzPlacement=\"bottomLeft\">\n      <div nz-dropdown class=\"ant-table-selection-down\">\n        <i nz-icon type=\"down\"></i>\n      </div>\n      <ul nz-menu class=\"ant-table-selection-menu\">\n        <li nz-menu-item *ngFor=\"let selection of nzSelections\" (click)=\"selection.onSelect()\">{{selection.text}}</li>\n      </ul>\n    </nz-dropdown>\n  </div>\n  <ng-container *ngIf=\"nzShowCheckbox && !nzShowRowSelection\">\n    <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n  </ng-container>\n  <ng-content></ng-content>\n  <div class=\"ant-table-column-sorter\" *ngIf=\"nzShowSort\">\n    <i nz-icon\n      type=\"caret-up\"\n      class=\"ant-table-column-sorter-up\"\n      [class.on]=\"nzSort == 'ascend'\"\n      [class.off]=\"nzSort != 'ascend'\"></i>\n    <i nz-icon\n      type=\"caret-down\"\n      class=\"ant-table-column-sorter-down\"\n      [class.on]=\"nzSort == 'descend'\"\n      [class.off]=\"nzSort != 'descend'\"></i>\n  </div>\n</div>\n<nz-dropdown nzTrigger=\"click\" *ngIf=\"nzShowFilter\" [nzClickHide]=\"false\" [hasFilterButton]=\"true\" (nzVisibleChange)=\"dropDownVisibleChange($event)\">\n  <i nz-icon type=\"filter\" theme=\"fill\" [class.ant-table-filter-selected]=\"hasFilterValue\" [class.ant-table-filter-open]=\"filterVisible\" nz-dropdown></i>\n  <ul nz-menu>\n    <ng-container *ngIf=\"nzFilterMultiple\">\n      <li nz-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\n        <label nz-checkbox [ngModel]=\"filter.checked\"></label><span>{{filter.text}}</span>\n      </li>\n    </ng-container>\n    <ng-container *ngIf=\"!nzFilterMultiple\">\n      <li nz-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\n        <label nz-radio [ngModel]=\"filter.checked\">{{filter.text}}</label>\n      </li>\n    </ng-container>\n  </ul>\n  <div class=\"ant-table-filter-dropdown-btns\">\n    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\n      <span (click)=\"search()\">{{'Table.filterConfirm' | nzI18n}}</span>\n    </a>\n    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"hideDropDown()\">\n      <span (click)=\"reset()\">{{'Table.filterReset' | nzI18n}}</span>\n    </a>\n  </div>\n</nz-dropdown>\n"
            }] }
];
/** @nocollapse */
NzThComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzThComponent.propDecorators = {
    nzDropDownComponent: [{ type: ViewChild, args: [NzDropDownComponent,] }],
    nzSelections: [{ type: Input }],
    nzChecked: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzSortKey: [{ type: Input }],
    nzFilterMultiple: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzCheckedChange: [{ type: Output }],
    nzSortChange: [{ type: Output }],
    nzSortChangeWithKey: [{ type: Output }],
    nzFilterChange: [{ type: Output }],
    hasActionsClass: [{ type: HostBinding, args: ['class.ant-table-column-has-actions',] }],
    hasFiltersClass: [{ type: HostBinding, args: ['class.ant-table-column-has-filters',] }],
    hasSortersClass: [{ type: HostBinding, args: ['class.ant-table-column-has-sorters',] }],
    nzCustomFilter: [{ type: Input }],
    nzShowSort: [{ type: Input }],
    nzShowFilter: [{ type: Input }],
    nzShowRowSelection: [{ type: Input }],
    nzLeft: [{ type: Input }],
    nzRight: [{ type: Input }],
    nzExpand: [{ type: Input }],
    nzShowCheckbox: [{ type: Input }],
    nzSort: [{ type: Input }],
    nzFilters: [{ type: Input }]
};
function NzThComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzThComponent.prototype._sort;
    /** @type {?} */
    NzThComponent.prototype._filters;
    /** @type {?} */
    NzThComponent.prototype._showSort;
    /** @type {?} */
    NzThComponent.prototype._showFilter;
    /** @type {?} */
    NzThComponent.prototype._showCheckbox;
    /** @type {?} */
    NzThComponent.prototype._showRowSelection;
    /** @type {?} */
    NzThComponent.prototype._hasDefaultFilter;
    /** @type {?} */
    NzThComponent.prototype._customFilter;
    /** @type {?} */
    NzThComponent.prototype.el;
    /** @type {?} */
    NzThComponent.prototype.hasFilterValue;
    /** @type {?} */
    NzThComponent.prototype.filterVisible;
    /** @type {?} */
    NzThComponent.prototype.multipleFilterList;
    /** @type {?} */
    NzThComponent.prototype.singleFilterList;
    /** @type {?} */
    NzThComponent.prototype.nzDropDownComponent;
    /** @type {?} */
    NzThComponent.prototype.nzSelections;
    /** @type {?} */
    NzThComponent.prototype.nzChecked;
    /** @type {?} */
    NzThComponent.prototype.nzDisabled;
    /** @type {?} */
    NzThComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzThComponent.prototype.nzSortKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterMultiple;
    /** @type {?} */
    NzThComponent.prototype.nzWidth;
    /** @type {?} */
    NzThComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChangeWithKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterChange;
    /** @type {?} */
    NzThComponent.prototype.elementRef;
    /** @type {?} */
    NzThComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWtCeEUsTUFBTTs7Ozs7SUF5UUosWUFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztxQkF4UXZELElBQUk7d0JBQ2UsRUFBRTt5QkFDakIsS0FBSzsyQkFDSCxLQUFLOzZCQUNILEtBQUs7aUNBQ0QsS0FBSztpQ0FDTCxLQUFLOzZCQUNULEtBQUs7a0JBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhOzhCQUM5QixLQUFLOzZCQUNOLEtBQUs7a0NBQ3FCLEVBQUU7Z0NBQ0osRUFBRTs7NEJBR3NCLEVBQUU7eUJBQzdDLEtBQUs7MEJBQ0osS0FBSzsrQkFDQSxLQUFLO2dDQUVKLElBQUk7K0JBRUosSUFBSSxZQUFZLEVBQVc7NEJBQzlCLElBQUksWUFBWSxFQUFVO21DQUNuQixJQUFJLFlBQVksRUFBa0M7OzhCQUV2RCxJQUFJLFlBQVksRUFBZTtLQStPekQ7Ozs7SUE3T0QsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxjQUFjLENB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MkJBU0wsS0FBSztpQ0FTTCxLQUFLO3FCQWNMLEtBQUs7c0JBV0wsS0FBSzt1QkFXTCxLQUFLOzZCQVVMLEtBQUs7cUJBY0wsS0FBSzt3QkE2RUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3Bkb3duL256LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbmV4cG9ydCB0eXBlIE56VGhGaWx0ZXJUeXBlID0gQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBhbnk7IGJ5RGVmYXVsdD86IGJvb2xlYW4gfT47XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnpUaEl0ZW1JbnRlcmZhY2Uge1xuICB0ZXh0OiBzdHJpbmc7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgdmFsdWU6IGFueTtcbiAgY2hlY2tlZDogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ3RoOm5vdCgubnotZGlzYWJsZS10aCknLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdGguY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGhDb21wb25lbnQge1xuICBwcml2YXRlIF9zb3J0ID0gbnVsbDtcbiAgcHJpdmF0ZSBfZmlsdGVyczogTnpUaEZpbHRlclR5cGUgPSBbXTtcbiAgcHJpdmF0ZSBfc2hvd1NvcnQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0ZpbHRlciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93Q2hlY2tib3ggPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1Jvd1NlbGVjdGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9oYXNEZWZhdWx0RmlsdGVyID0gZmFsc2U7XG4gIHByaXZhdGUgX2N1c3RvbUZpbHRlciA9IGZhbHNlO1xuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgaGFzRmlsdGVyVmFsdWUgPSBmYWxzZTtcbiAgZmlsdGVyVmlzaWJsZSA9IGZhbHNlO1xuICBtdWx0aXBsZUZpbHRlckxpc3Q6IE56VGhJdGVtSW50ZXJmYWNlW10gPSBbXTtcbiAgc2luZ2xlRmlsdGVyTGlzdDogTnpUaEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xuICBAVmlld0NoaWxkKE56RHJvcERvd25Db21wb25lbnQpIG56RHJvcERvd25Db21wb25lbnQ6IE56RHJvcERvd25Db21wb25lbnQ7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQElucHV0KCkgbnpTZWxlY3Rpb25zOiBBcnJheTx7IHRleHQ6IHN0cmluZywgb25TZWxlY3Q6IGFueSB9PiA9IFtdO1xuICBASW5wdXQoKSBuekNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpTb3J0S2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RmlsdGVyTXVsdGlwbGUgPSB0cnVlO1xuICBASW5wdXQoKSBueldpZHRoOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBuelNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIG56U29ydENoYW5nZVdpdGhLZXkgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4oKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgbnpGaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdIHwgYW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtYWN0aW9ucycpXG4gIGdldCBoYXNBY3Rpb25zQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaG93RmlsdGVyIHx8IHRoaXMubnpTaG93U29ydCB8fCB0aGlzLm56Q3VzdG9tRmlsdGVyO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1maWx0ZXJzJylcbiAgZ2V0IGhhc0ZpbHRlcnNDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelNob3dGaWx0ZXIgfHwgdGhpcy5uekN1c3RvbUZpbHRlcjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtc29ydGVycycpXG4gIGdldCBoYXNTb3J0ZXJzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaG93U29ydDtcbiAgfVxuXG4gIHVwZGF0ZVNvcnRWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelNob3dTb3J0KSB7XG4gICAgICBpZiAodGhpcy5uelNvcnQgPT09ICdkZXNjZW5kJykge1xuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZSgnYXNjZW5kJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubnpTb3J0ID09PSAnYXNjZW5kJykge1xuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZShudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U29ydFZhbHVlKCdkZXNjZW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q3VzdG9tRmlsdGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY3VzdG9tRmlsdGVyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekN1c3RvbUZpbHRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tRmlsdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1NvcnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93U29ydCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93U29ydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NvcnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93RmlsdGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0ZpbHRlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93RmlsdGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93RmlsdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1Jvd1NlbGVjdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dSb3dTZWxlY3Rpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9zaG93Um93U2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbi1jdXN0b20nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4tY3VzdG9tJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2hvd1Jvd1NlbGVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1Jvd1NlbGVjdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekxlZnQodmFsdWU6IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10aC1sZWZ0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGVmdCcsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRoLWxlZnQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdsZWZ0Jyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UmlnaHQodmFsdWU6IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10aC1yaWdodC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3JpZ2h0JywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGgtcmlnaHQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdyaWdodCcpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekV4cGFuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGlzRXhwYW5kID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAoaXNFeHBhbmQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1leHBhbmQtaWNvbi10aCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtZXhwYW5kLWljb24tdGgnKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93Q2hlY2tib3godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93Q2hlY2tib3ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9zaG93Q2hlY2tib3gpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2hvd0NoZWNrYm94KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q2hlY2tib3g7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTb3J0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3J0ID0gdmFsdWU7XG4gICAgaWYgKCh2YWx1ZSAhPT0gJ2FzY2VuZCcpICYmICh2YWx1ZSAhPT0gJ2Rlc2NlbmQnKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLWNvbHVtbi1zb3J0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1jb2x1bW4tc29ydCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNvcnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydDtcbiAgfVxuXG4gIHNldFNvcnRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5uelNvcnQgPSB2YWx1ZTtcbiAgICB0aGlzLm56U29ydENoYW5nZVdpdGhLZXkuZW1pdCh7IGtleTogdGhpcy5uelNvcnRLZXksIHZhbHVlOiB0aGlzLm56U29ydCB9KTtcbiAgICB0aGlzLm56U29ydENoYW5nZS5lbWl0KHRoaXMubnpTb3J0KTtcbiAgfVxuXG4gIGdldCBmaWx0ZXJMaXN0KCk6IE56VGhJdGVtSW50ZXJmYWNlW10ge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlRmlsdGVyTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBnZXQgZmlsdGVyVmFsdWUoKTogYW55IHtcbiAgICBjb25zdCBjaGVja2VkRmlsdGVyID0gdGhpcy5zaW5nbGVGaWx0ZXJMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLmNoZWNrZWQpO1xuICAgIHJldHVybiBjaGVja2VkRmlsdGVyID8gY2hlY2tlZEZpbHRlci52YWx1ZSA6IG51bGw7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpGaWx0ZXJNdWx0aXBsZSkge1xuICAgICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IHRoaXMuZmlsdGVyTGlzdC5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gaXNOb3ROaWwodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMubnpGaWx0ZXJNdWx0aXBsZSkge1xuICAgICAgdGhpcy5uekZpbHRlckNoYW5nZS5lbWl0KHRoaXMuZmlsdGVyTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnpGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlclZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5oaWRlRHJvcERvd24oKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdE11bHRpcGxlRmlsdGVyTGlzdCh0cnVlKTtcbiAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KHRydWUpO1xuICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgdGhpcy5oaWRlRHJvcERvd24oKTtcbiAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XG4gIH1cblxuICBjaGVja011bHRpcGxlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBmaWx0ZXIuY2hlY2tlZCA9ICFmaWx0ZXIuY2hlY2tlZDtcbiAgfVxuXG4gIGNoZWNrU2luZ2xlKGZpbHRlcjogTnpUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2hlY2tlZCA9IGl0ZW0gPT09IGZpbHRlcik7XG4gIH1cblxuICBoaWRlRHJvcERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5uekRyb3BEb3duQ29tcG9uZW50Lm56VmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMubnpEcm9wRG93bkNvbXBvbmVudC5oaWRlKCk7XG4gICAgdGhpcy5maWx0ZXJWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBkcm9wRG93blZpc2libGVDaGFuZ2UodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlclZpc2libGUgPSB2YWx1ZTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZpbHRlcnModmFsdWU6IE56VGhGaWx0ZXJUeXBlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLl9maWx0ZXJzID0gdmFsdWU7XG4gICAgICB0aGlzLmluaXRNdWx0aXBsZUZpbHRlckxpc3QoKTtcbiAgICAgIHRoaXMuaW5pdFNpbmdsZUZpbHRlckxpc3QoKTtcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignbnpGaWx0ZXJzIG9ubHkgYWNjZXB0IHR5cGUgb2YgQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBhbnkgfT4nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpGaWx0ZXJzKCk6IE56VGhGaWx0ZXJUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycztcbiAgfVxuXG4gIGluaXRNdWx0aXBsZUZpbHRlckxpc3QoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aXBsZUZpbHRlckxpc3QgPSB0aGlzLm56RmlsdGVycy5tYXAoaXRlbSA9PiB7XG4gICAgICBjb25zdCBjaGVja2VkID0gZm9yY2UgPyBmYWxzZSA6ICEhaXRlbS5ieURlZmF1bHQ7XG4gICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICB0aGlzLl9oYXNEZWZhdWx0RmlsdGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHRleHQ6IGl0ZW0udGV4dCwgdmFsdWU6IGl0ZW0udmFsdWUsIGNoZWNrZWQgfTtcbiAgICB9KTtcbiAgICB0aGlzLmNoZWNrRGVmYXVsdEZpbHRlcnMoKTtcbiAgfVxuXG4gIGluaXRTaW5nbGVGaWx0ZXJMaXN0KGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVyTGlzdCA9IHRoaXMubnpGaWx0ZXJzLm1hcChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBmb3JjZSA/IGZhbHNlIDogISFpdGVtLmJ5RGVmYXVsdDtcbiAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgIHRoaXMuX2hhc0RlZmF1bHRGaWx0ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgdGV4dDogaXRlbS50ZXh0LCB2YWx1ZTogaXRlbS52YWx1ZSwgY2hlY2tlZCB9O1xuICAgIH0pO1xuICAgIHRoaXMuY2hlY2tEZWZhdWx0RmlsdGVycygpO1xuICB9XG5cbiAgY2hlY2tEZWZhdWx0RmlsdGVycygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpGaWx0ZXJzIHx8IHRoaXMubnpGaWx0ZXJzLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5faGFzRGVmYXVsdEZpbHRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxufVxuIl19