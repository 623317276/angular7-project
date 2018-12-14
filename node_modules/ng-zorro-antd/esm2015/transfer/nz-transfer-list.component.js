/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, IterableDiffers, Output, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
export class NzTransferListComponent {
    /**
     * @param {?} el
     * @param {?} updateHostClassService
     * @param {?} differs
     */
    constructor(el, updateHostClassService, differs) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this._showSearch = false;
        // region: fields
        this.direction = '';
        this.titleText = '';
        this.dataSource = [];
        this.itemUnit = '';
        this.itemsUnit = '';
        this.filter = '';
        // events
        this.handleSelectAll = new EventEmitter();
        this.handleSelect = new EventEmitter();
        this.filterChange = new EventEmitter();
        // endregion
        // region: styles
        this.prefixCls = 'ant-transfer-list';
        // endregion
        // region: select all
        this.stat = {
            checkAll: false,
            checkHalf: false,
            checkCount: 0,
            shownCount: 0
        };
        this.listDiffer = differs.find([]).create(null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showSearch(value) {
        this._showSearch = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get showSearch() {
        return this._showSearch;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-with-footer`]: !!this.footer
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @param {?} status
     * @return {?}
     */
    onHandleSelectAll(status) {
        this.dataSource.forEach(item => {
            if (!item.disabled && !item._hiden) {
                item.checked = status;
            }
        });
        this.updateCheckStatus();
        this.handleSelectAll.emit(status);
    }
    /**
     * @return {?}
     */
    updateCheckStatus() {
        /** @type {?} */
        const validCount = this.dataSource.filter(w => !w.disabled).length;
        this.stat.checkCount = this.dataSource.filter(w => w.checked && !w.disabled).length;
        this.stat.shownCount = this.dataSource.filter(w => !w._hiden).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleFilter(value) {
        this.filter = value;
        this.dataSource.forEach(item => {
            item._hiden = value.length > 0 && !this.matchFilter(value, item);
        });
        this.stat.shownCount = this.dataSource.filter(w => !w._hiden).length;
        this.filterChange.emit({ direction: this.direction, value });
    }
    /**
     * @return {?}
     */
    handleClear() {
        this.handleFilter('');
    }
    /**
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    matchFilter(text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('footer' in changes) {
            this.setClassMap();
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
    ngDoCheck() {
        /** @type {?} */
        const change = this.listDiffer.diff(this.dataSource);
        if (change) {
            this.updateCheckStatus();
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _handleSelect(item) {
        if (item.disabled) {
            return;
        }
        item.checked = !item.checked;
        this.updateCheckStatus();
        this.handleSelect.emit(item);
    }
}
NzTransferListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-transfer-list',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                template: "<div class=\"ant-transfer-list-header\">\n  <label nz-checkbox [ngModel]=\"stat.checkAll\" (ngModelChange)=\"onHandleSelectAll($event)\"\n    [nzIndeterminate]=\"stat.checkHalf\">\n  </label>\n  <span class=\"ant-transfer-list-header-selected\">\n    <span>{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }} {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span>\n    <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\n  </span>\n</div>\n<div class=\"{{showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body'}}\"\n  [ngClass]=\"{'ant-transfer__nodata': stat.shownCount === 0}\">\n  <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\n    <div nz-transfer-search\n      (valueChanged)=\"handleFilter($event)\"\n      (valueClear)=\"handleClear()\"\n      [placeholder]=\"searchPlaceholder\"\n      [value]=\"filter\"></div>\n  </div>\n  <ul class=\"ant-transfer-list-content\">\n    <ng-container *ngFor=\"let item of dataSource\">\n      <li *ngIf=\"!item._hiden\" (click)=\"_handleSelect(item)\" class=\"ant-transfer-list-content-item\">\n        <label nz-checkbox [ngModel]=\"item.checked\" [nzDisabled]=\"item.disabled\">\n          <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\n          <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n        </label>\n      </li>\n    </ng-container>\n  </ul>\n  <div class=\"ant-transfer-list-body-not-found\">{{ notFoundContent }}</div>\n</div>\n<div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\n  <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\n</div>"
            }] }
];
/** @nocollapse */
NzTransferListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService },
    { type: IterableDiffers }
];
NzTransferListComponent.propDecorators = {
    direction: [{ type: Input }],
    titleText: [{ type: Input }],
    dataSource: [{ type: Input }],
    itemUnit: [{ type: Input }],
    itemsUnit: [{ type: Input }],
    filter: [{ type: Input }],
    showSearch: [{ type: Input }],
    searchPlaceholder: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    filterOption: [{ type: Input }],
    render: [{ type: Input }],
    footer: [{ type: Input }],
    handleSelectAll: [{ type: Output }],
    handleSelect: [{ type: Output }],
    filterChange: [{ type: Output }]
};
function NzTransferListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTransferListComponent.prototype._showSearch;
    /** @type {?} */
    NzTransferListComponent.prototype.direction;
    /** @type {?} */
    NzTransferListComponent.prototype.titleText;
    /** @type {?} */
    NzTransferListComponent.prototype.dataSource;
    /** @type {?} */
    NzTransferListComponent.prototype.itemUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.itemsUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.filter;
    /** @type {?} */
    NzTransferListComponent.prototype.searchPlaceholder;
    /** @type {?} */
    NzTransferListComponent.prototype.notFoundContent;
    /** @type {?} */
    NzTransferListComponent.prototype.filterOption;
    /** @type {?} */
    NzTransferListComponent.prototype.render;
    /** @type {?} */
    NzTransferListComponent.prototype.footer;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.filterChange;
    /** @type {?} */
    NzTransferListComponent.prototype.prefixCls;
    /** @type {?} */
    NzTransferListComponent.prototype.stat;
    /** @type {?} */
    NzTransferListComponent.prototype.listDiffer;
    /** @type {?} */
    NzTransferListComponent.prototype.el;
    /** @type {?} */
    NzTransferListComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidHJhbnNmZXIvbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsZUFBZSxFQUdmLE1BQU0sRUFFTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBVWpELE1BQU07Ozs7OztJQTRHSixZQUFvQixFQUFjLEVBQVUsc0JBQWdELEVBQUUsT0FBd0I7UUFBbEcsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7MkJBM0d0RSxLQUFLOzt5QkFJTixFQUFFO3lCQUNGLEVBQUU7MEJBRWUsRUFBRTt3QkFFcEIsRUFBRTt5QkFDRCxFQUFFO3NCQUNMLEVBQUU7OytCQW9CK0IsSUFBSSxZQUFZLEVBQVc7NEJBQ3pCLElBQUksWUFBWSxFQUFFOzRCQUNNLElBQUksWUFBWSxFQUFFOzs7eUJBTW5GLG1CQUFtQjs7O29CQWN4QjtZQUNMLFFBQVEsRUFBSSxLQUFLO1lBQ2pCLFNBQVMsRUFBRyxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxDQUFDO1lBQ2IsVUFBVSxFQUFFLENBQUM7U0FDZDtRQWtEQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pEOzs7OztJQS9GRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7O0lBb0JELFdBQVc7O1FBQ1QsTUFBTSxRQUFRLEdBQUc7WUFDZixDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBbUIsSUFBSTtZQUN6QyxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsY0FBYyxDQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO1NBQ25ELENBQUM7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQzlFOzs7OztJQWFELGlCQUFpQixDQUFDLE1BQWU7UUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzthQUN2QjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRU8saUJBQWlCOztRQUN2QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3BGLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxDQUFDLElBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozs7SUFPeEUsWUFBWSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2xFLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUM5RDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCOzs7Ozs7SUFFTyxXQUFXLENBQUMsSUFBWSxFQUFFLElBQWtCO1FBQ2xELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0lBV25DLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0tBQ0Y7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7O0lBRUQsU0FBUzs7UUFDUCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFrQjtRQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7OztZQTlJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGtCQUFrQjtnQkFDdkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7Z0JBQ2pELDR5REFBd0Q7YUFDekQ7Ozs7WUF0QkMsVUFBVTtZQVlILHdCQUF3QjtZQVIvQixlQUFlOzs7d0JBd0JkLEtBQUs7d0JBQ0wsS0FBSzt5QkFFTCxLQUFLO3VCQUVMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUdMLEtBQUs7Z0NBU0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBRUwsS0FBSztxQkFDTCxLQUFLOzhCQUdMLE1BQU07MkJBQ04sTUFBTTsyQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgVHJhbnNmZXJJdGVtIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRyYW5zZmVyLWxpc3QnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2Zlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgRG9DaGVjayB7XG4gIHByaXZhdGUgX3Nob3dTZWFyY2ggPSBmYWxzZTtcblxuICAvLyByZWdpb246IGZpZWxkc1xuXG4gIEBJbnB1dCgpIGRpcmVjdGlvbiA9ICcnO1xuICBASW5wdXQoKSB0aXRsZVRleHQgPSAnJztcblxuICBASW5wdXQoKSBkYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGl0ZW1Vbml0ID0gJyc7XG4gIEBJbnB1dCgpIGl0ZW1zVW5pdCA9ICcnO1xuICBASW5wdXQoKSBmaWx0ZXIgPSAnJztcblxuICAvLyBzZWFyY2hcbiAgQElucHV0KClcbiAgc2V0IHNob3dTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93U2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBzaG93U2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93U2VhcmNoO1xuICB9XG5cbiAgQElucHV0KCkgc2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbHRlck9wdGlvbjogKGlucHV0VmFsdWU6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLy8gZXZlbnRzXG4gIEBPdXRwdXQoKSBoYW5kbGVTZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGhhbmRsZVNlbGVjdDogRXZlbnRFbWl0dGVyPFRyYW5zZmVySXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGRpcmVjdGlvbjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8vIHJlZ2lvbjogc3R5bGVzXG5cbiAgcHJlZml4Q2xzID0gJ2FudC10cmFuc2Zlci1saXN0JztcblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30td2l0aC1mb290ZXJgIF06ICEhdGhpcy5mb290ZXJcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IHNlbGVjdCBhbGxcblxuICBzdGF0ID0ge1xuICAgIGNoZWNrQWxsICA6IGZhbHNlLFxuICAgIGNoZWNrSGFsZiA6IGZhbHNlLFxuICAgIGNoZWNrQ291bnQ6IDAsXG4gICAgc2hvd25Db3VudDogMFxuICB9O1xuXG4gIG9uSGFuZGxlU2VsZWN0QWxsKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKCFpdGVtLmRpc2FibGVkICYmICFpdGVtLl9oaWRlbikge1xuICAgICAgICBpdGVtLmNoZWNrZWQgPSBzdGF0dXM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUNoZWNrU3RhdHVzKCk7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RBbGwuZW1pdChzdGF0dXMpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGVja1N0YXR1cygpOiB2b2lkIHtcbiAgICBjb25zdCB2YWxpZENvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgdGhpcy5zdGF0LmNoZWNrQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gdy5jaGVja2VkICYmICF3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgdGhpcy5zdGF0LnNob3duQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gIXcuX2hpZGVuKS5sZW5ndGg7XG4gICAgdGhpcy5zdGF0LmNoZWNrQWxsID0gdmFsaWRDb3VudCA+IDAgJiYgdmFsaWRDb3VudCA9PT0gdGhpcy5zdGF0LmNoZWNrQ291bnQ7XG4gICAgdGhpcy5zdGF0LmNoZWNrSGFsZiA9IHRoaXMuc3RhdC5jaGVja0NvdW50ID4gMCAmJiAhdGhpcy5zdGF0LmNoZWNrQWxsO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBzZWFyY2hcblxuICBoYW5kbGVGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyID0gdmFsdWU7XG4gICAgdGhpcy5kYXRhU291cmNlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLl9oaWRlbiA9IHZhbHVlLmxlbmd0aCA+IDAgJiYgIXRoaXMubWF0Y2hGaWx0ZXIodmFsdWUsIGl0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3Ll9oaWRlbikubGVuZ3RoO1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoeyBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKCcnKTtcbiAgfVxuXG4gIHByaXZhdGUgbWF0Y2hGaWx0ZXIodGV4dDogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5maWx0ZXJPcHRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlck9wdGlvbih0ZXh0LCBpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW0udGl0bGUuaW5jbHVkZXModGV4dCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICBsaXN0RGlmZmVyOiBJdGVyYWJsZURpZmZlcjx7fT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGRpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycykge1xuICAgIHRoaXMubGlzdERpZmZlciA9IGRpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICgnZm9vdGVyJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoYW5nZSA9IHRoaXMubGlzdERpZmZlci5kaWZmKHRoaXMuZGF0YVNvdXJjZSk7XG4gICAgaWYgKGNoYW5nZSkge1xuICAgICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVTZWxlY3QoaXRlbTogVHJhbnNmZXJJdGVtKTogdm9pZCB7XG4gICAgaWYgKGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLnVwZGF0ZUNoZWNrU3RhdHVzKCk7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3QuZW1pdChpdGVtKTtcbiAgfVxufVxuIl19