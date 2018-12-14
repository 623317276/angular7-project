/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
export class NzTransferComponent {
    /**
     * @param {?} i18n
     * @param {?} el
     */
    constructor(i18n, el) {
        this.i18n = i18n;
        this.el = el;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this._showSearch = false;
        this.leftFilter = '';
        this.rightFilter = '';
        // region: fields
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzCanMove = (arg) => of(arg.list);
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // endregion
        // region: process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = (checked) => this.handleSelect('left', checked);
        this.handleRightSelectAll = (checked) => this.handleSelect('right', checked);
        this.handleLeftSelect = (item) => this.handleSelect('left', item.checked, item);
        this.handleRightSelect = (item) => this.handleSelect('right', item.checked, item);
        // endregion
        // region: operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = () => this.moveTo('left');
        this.moveToRight = () => this.moveTo('right');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowSearch(value) {
        this._showSearch = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowSearch() {
        return this._showSearch;
    }
    /**
     * @return {?}
     */
    splitDataSource() {
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach(record => {
            if (record.direction === 'right') {
                this.rightDataSource.push(record);
            }
            else {
                this.leftDataSource.push(record);
            }
        });
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    getCheckedData(direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(w => w.checked);
    }
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    handleSelect(direction, checked, item) {
        /** @type {?} */
        const list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction, checked, list, item });
    }
    /**
     * @param {?} ret
     * @return {?}
     */
    handleFilterChange(ret) {
        this.nzSearchChange.emit(ret);
    }
    /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    updateOperationStatus(direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] = (typeof count === 'undefined' ? this.getCheckedData(direction).filter(w => !w.disabled).length : count) > 0;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    moveTo(direction) {
        /** @type {?} */
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        const moveList = datasource.filter(item => item.checked === true && !item.disabled);
        this.nzCanMove({ direction, list: moveList })
            .subscribe(newMoveList => this.truthMoveTo(direction, newMoveList.filter(i => !!i)), () => moveList.forEach(i => i.checked = false));
    }
    /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    truthMoveTo(direction, list) {
        /** @type {?} */
        const oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        const datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        const targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        for (const item of list) {
            item.checked = false;
            targetDatasource.push(item);
            datasource.splice(datasource.indexOf(item), 1);
        }
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Transfer'));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('nzDataSource' in changes) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzTransferComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-transfer',
                preserveWhitespaces: false,
                template: "<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"left\"\n  [titleText]=\"nzTitles[0]\"\n  [dataSource]=\"leftDataSource\"\n  [filter]=\"leftFilter\"\n  [filterOption]=\"nzFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [render]=\"nzRender\"\n  [showSearch]=\"nzShowSearch\"\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"nzNotFoundContent || locale.notFoundContent\"\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\n  [footer]=\"nzFooter\"\n  (handleSelect)=\"handleLeftSelect($event)\"\n  (handleSelectAll)=\"handleLeftSelectAll($event)\"></nz-transfer-list>\n<div class=\"ant-transfer-operation\">\n  <button nz-button (click)=\"moveToLeft()\" [disabled]=\"!leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n    <i nz-icon type=\"left\"></i><span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\n  </button>\n  <button nz-button (click)=\"moveToRight()\" [disabled]=\"!rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n    <i nz-icon type=\"right\"></i><span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\n  </button>\n</div>\n<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"right\"\n  [titleText]=\"nzTitles[1]\"\n  [dataSource]=\"rightDataSource\"\n  [filter]=\"rightFilter\"\n  [filterOption]=\"nzFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [render]=\"nzRender\"\n  [showSearch]=\"nzShowSearch\"\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"nzNotFoundContent || locale.notFoundContent\"\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\n  [footer]=\"nzFooter\"\n  (handleSelect)=\"handleRightSelect($event)\"\n  (handleSelectAll)=\"handleRightSelectAll($event)\"></nz-transfer-list>",
                host: {
                    '[class.ant-transfer]': 'true'
                }
            }] }
];
/** @nocollapse */
NzTransferComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ElementRef }
];
NzTransferComponent.propDecorators = {
    nzDataSource: [{ type: Input }],
    nzTitles: [{ type: Input }],
    nzOperations: [{ type: Input }],
    nzListStyle: [{ type: Input }],
    nzItemUnit: [{ type: Input }],
    nzItemsUnit: [{ type: Input }],
    nzCanMove: [{ type: Input }],
    nzRender: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzFilterOption: [{ type: Input }],
    nzSearchPlaceholder: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzChange: [{ type: Output }],
    nzSearchChange: [{ type: Output }],
    nzSelectChange: [{ type: Output }]
};
function NzTransferComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTransferComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTransferComponent.prototype.locale;
    /** @type {?} */
    NzTransferComponent.prototype._showSearch;
    /** @type {?} */
    NzTransferComponent.prototype.leftFilter;
    /** @type {?} */
    NzTransferComponent.prototype.rightFilter;
    /** @type {?} */
    NzTransferComponent.prototype.nzDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.nzTitles;
    /** @type {?} */
    NzTransferComponent.prototype.nzOperations;
    /** @type {?} */
    NzTransferComponent.prototype.nzListStyle;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemsUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzCanMove;
    /** @type {?} */
    NzTransferComponent.prototype.nzRender;
    /** @type {?} */
    NzTransferComponent.prototype.nzFooter;
    /** @type {?} */
    NzTransferComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchPlaceholder;
    /** @type {?} */
    NzTransferComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTransferComponent.prototype.nzChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTransferComponent.prototype.leftDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.rightDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelect;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelect;
    /** @type {?} */
    NzTransferComponent.prototype.leftActive;
    /** @type {?} */
    NzTransferComponent.prototype.rightActive;
    /** @type {?} */
    NzTransferComponent.prototype.moveToLeft;
    /** @type {?} */
    NzTransferComponent.prototype.moveToRight;
    /** @type {?} */
    NzTransferComponent.prototype.i18n;
    /** @type {?} */
    NzTransferComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyYW5zZmVyL256LXRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxFQUFFLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBWXhELE1BQU07Ozs7O0lBK0hKLFlBQW9CLElBQW1CLEVBQVUsRUFBYztRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTs0QkE5SHhDLElBQUksT0FBTyxFQUFROztzQkFFNUIsRUFBRTsyQkFDTSxLQUFLOzBCQUVkLEVBQUU7MkJBQ0QsRUFBRTs7NEJBSXdCLEVBQUU7d0JBQ1osQ0FBRSxFQUFFLEVBQUUsRUFBRSxDQUFFOzRCQUNOLEVBQUU7eUJBSXVDLENBQUMsR0FBb0IsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7O3dCQW1COUQsSUFBSSxZQUFZLEVBQUU7OEJBQ04sSUFBSSxZQUFZLEVBQUU7OEJBQ2xCLElBQUksWUFBWSxFQUFFOzs7OzhCQU9oRCxFQUFFOzsrQkFHRCxFQUFFO21DQWtCZCxDQUFDLE9BQWdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztvQ0FDdkQsQ0FBQyxPQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7Z0NBRTdELENBQUMsSUFBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7aUNBQ3BFLENBQUMsSUFBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7OzswQkFnQjdFLEtBQUs7MkJBQ0osS0FBSzswQkFNTixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzsyQkFDeEIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FrQ3ZDOzs7OztJQTFHRCxJQUNJLFlBQVksQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7O0lBcUJPLGVBQWU7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakMsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEM7U0FDRixDQUFDLENBQUM7Ozs7OztJQUdHLGNBQWMsQ0FBQyxTQUFpQjtRQUN0QyxPQUFPLElBQUksQ0FBRSxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7O0lBU3BHLFlBQVksQ0FBQyxTQUEyQixFQUFFLE9BQWdCLEVBQUUsSUFBbUI7O1FBQzdFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQzlEOzs7OztJQUVELGtCQUFrQixDQUFDLEdBQXlDO1FBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQy9COzs7Ozs7SUFTTyxxQkFBcUIsQ0FBQyxTQUFpQixFQUFFLEtBQWM7UUFDN0QsSUFBSSxDQUFFLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFFLEdBQUcsQ0FBQyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7OztJQU03SyxNQUFNLENBQUMsU0FBaUI7O1FBQ3RCLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbEUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDOztRQUNqRCxNQUFNLFVBQVUsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDOztRQUNyRixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDNUMsU0FBUyxDQUNSLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4RSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FDL0MsQ0FBQztLQUNIOzs7Ozs7SUFFTyxXQUFXLENBQUMsU0FBaUIsRUFBRSxJQUFvQjs7UUFDekQsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7UUFDbEUsTUFBTSxVQUFVLEdBQUcsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7UUFDckYsTUFBTSxnQkFBZ0IsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzNGLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLEVBQUUsRUFBSSxTQUFTO1lBQ2YsSUFBSTtTQUNMLENBQUMsQ0FBQzs7Ozs7SUFRTCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBQzlIOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLGNBQWMsSUFBSSxPQUFPLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7OztZQXpKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGFBQWE7Z0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLDA2REFBbUQ7Z0JBQ25ELElBQUksRUFBaUI7b0JBQ25CLHNCQUFzQixFQUFFLE1BQU07aUJBQy9CO2FBQ0Y7Ozs7WUFYUSxhQUFhO1lBZnBCLFVBQVU7OzsyQkFzQ1QsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBR0wsS0FBSzs2QkFTTCxLQUFLO2tDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt1QkFHTCxNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVHJhbnNmZXJDYW5Nb3ZlLCBUcmFuc2ZlckNoYW5nZSwgVHJhbnNmZXJJdGVtLCBUcmFuc2ZlclNlYXJjaENoYW5nZSwgVHJhbnNmZXJTZWxlY3RDaGFuZ2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdHJhbnNmZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdHJhbnNmZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfc2hvd1NlYXJjaCA9IGZhbHNlO1xuXG4gIGxlZnRGaWx0ZXIgPSAnJztcbiAgcmlnaHRGaWx0ZXIgPSAnJztcblxuICAvLyByZWdpb246IGZpZWxkc1xuXG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgbnpUaXRsZXM6IHN0cmluZ1tdID0gWyAnJywgJycgXTtcbiAgQElucHV0KCkgbnpPcGVyYXRpb25zOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBuekxpc3RTdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuekl0ZW1Vbml0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SXRlbXNVbml0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Q2FuTW92ZTogKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKSA9PiBPYnNlcnZhYmxlPFRyYW5zZmVySXRlbVtdPiA9IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gb2YoYXJnLmxpc3QpO1xuICBASW5wdXQoKSBuelJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56Rm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvLyBzZWFyY2hcbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1NlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dTZWFyY2ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1NlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NlYXJjaDtcbiAgfVxuXG4gIEBJbnB1dCgpIG56RmlsdGVyT3B0aW9uOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56U2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcblxuICAvLyBldmVudHNcbiAgQE91dHB1dCgpIG56Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpTZWFyY2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2ZlclNlYXJjaENoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VsZWN0Q2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IHByb2Nlc3MgZGF0YVxuXG4gIC8vIGxlZnRcbiAgbGVmdERhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG5cbiAgLy8gcmlnaHRcbiAgcmlnaHREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgc3BsaXREYXRhU291cmNlKCk6IHZvaWQge1xuICAgIHRoaXMubGVmdERhdGFTb3VyY2UgPSBbXTtcbiAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA9IFtdO1xuICAgIHRoaXMubnpEYXRhU291cmNlLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgIGlmIChyZWNvcmQuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHRoaXMucmlnaHREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVmdERhdGFTb3VyY2UucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGVja2VkRGF0YShkaXJlY3Rpb246IHN0cmluZyk6IFRyYW5zZmVySXRlbVtdIHtcbiAgICByZXR1cm4gdGhpc1sgZGlyZWN0aW9uID09PSAnbGVmdCcgPyAnbGVmdERhdGFTb3VyY2UnIDogJ3JpZ2h0RGF0YVNvdXJjZScgXS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICB9XG5cbiAgaGFuZGxlTGVmdFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgnbGVmdCcsIGNoZWNrZWQpO1xuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcblxuICBoYW5kbGVMZWZ0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCBpdGVtLmNoZWNrZWQsIGl0ZW0pO1xuICBoYW5kbGVSaWdodFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdyaWdodCcsIGl0ZW0uY2hlY2tlZCwgaXRlbSk7XG5cbiAgaGFuZGxlU2VsZWN0KGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JywgY2hlY2tlZDogYm9vbGVhbiwgaXRlbT86IFRyYW5zZmVySXRlbSk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbik7XG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uLCBsaXN0Lmxlbmd0aCk7XG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KHsgZGlyZWN0aW9uLCBjaGVja2VkLCBsaXN0LCBpdGVtIH0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKHJldDogeyBkaXJlY3Rpb246IHN0cmluZywgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5uelNlYXJjaENoYW5nZS5lbWl0KHJldCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IG9wZXJhdGlvblxuXG4gIGxlZnRBY3RpdmUgPSBmYWxzZTtcbiAgcmlnaHRBY3RpdmUgPSBmYWxzZTtcblxuICBwcml2YXRlIHVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb246IHN0cmluZywgY291bnQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzWyBkaXJlY3Rpb24gPT09ICdyaWdodCcgPyAnbGVmdEFjdGl2ZScgOiAncmlnaHRBY3RpdmUnIF0gPSAodHlwZW9mIGNvdW50ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoIDogY291bnQpID4gMDtcbiAgfVxuXG4gIG1vdmVUb0xlZnQgPSAoKSA9PiB0aGlzLm1vdmVUbygnbGVmdCcpO1xuICBtb3ZlVG9SaWdodCA9ICgpID0+IHRoaXMubW92ZVRvKCdyaWdodCcpO1xuXG4gIG1vdmVUbyhkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uLCAwKTtcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XG4gICAgY29uc3QgbW92ZUxpc3QgPSBkYXRhc291cmNlLmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSAmJiAhaXRlbS5kaXNhYmxlZCk7XG4gICAgdGhpcy5uekNhbk1vdmUoeyBkaXJlY3Rpb24sIGxpc3Q6IG1vdmVMaXN0IH0pXG4gICAgLnN1YnNjcmliZShcbiAgICAgIG5ld01vdmVMaXN0ID0+IHRoaXMudHJ1dGhNb3ZlVG8oZGlyZWN0aW9uLCBuZXdNb3ZlTGlzdC5maWx0ZXIoaSA9PiAhIWkpKSxcbiAgICAgICgpID0+IG1vdmVMaXN0LmZvckVhY2goaSA9PiBpLmNoZWNrZWQgPSBmYWxzZSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnV0aE1vdmVUbyhkaXJlY3Rpb246IHN0cmluZywgbGlzdDogVHJhbnNmZXJJdGVtW10pOiB2b2lkIHtcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XG4gICAgY29uc3QgdGFyZ2V0RGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5sZWZ0RGF0YVNvdXJjZSA6IHRoaXMucmlnaHREYXRhU291cmNlO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRhcmdldERhdGFzb3VyY2UucHVzaChpdGVtKTtcbiAgICAgIGRhdGFzb3VyY2Uuc3BsaWNlKGRhdGFzb3VyY2UuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uKTtcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xuICAgICAgZnJvbTogb3Bwb3NpdGVEaXJlY3Rpb24sXG4gICAgICB0byAgOiBkaXJlY3Rpb24sXG4gICAgICBsaXN0XG4gICAgfSk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVHJhbnNmZXInKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCduekRhdGFTb3VyY2UnIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuc3BsaXREYXRhU291cmNlKCk7XG4gICAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cygnbGVmdCcpO1xuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ3JpZ2h0Jyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==