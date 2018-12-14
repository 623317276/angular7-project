/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
var NzTransferComponent = /** @class */ (function () {
    // endregion
    function NzTransferComponent(i18n, el) {
        var _this = this;
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
        this.nzCanMove = function (arg) { return of(arg.list); };
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
        this.handleLeftSelectAll = function (checked) { return _this.handleSelect('left', checked); };
        this.handleRightSelectAll = function (checked) { return _this.handleSelect('right', checked); };
        this.handleLeftSelect = function (item) { return _this.handleSelect('left', item.checked, item); };
        this.handleRightSelect = function (item) { return _this.handleSelect('right', item.checked, item); };
        // endregion
        // region: operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = function () { return _this.moveTo('left'); };
        this.moveToRight = function () { return _this.moveTo('right'); };
    }
    Object.defineProperty(NzTransferComponent.prototype, "nzShowSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSearch;
        },
        // search
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.splitDataSource = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach(function (record) {
            if (record.direction === 'right') {
                _this.rightDataSource.push(record);
            }
            else {
                _this.leftDataSource.push(record);
            }
        });
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.getCheckedData = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(function (w) { return w.checked; });
    };
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    NzTransferComponent.prototype.handleSelect = /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    function (direction, checked, item) {
        /** @type {?} */
        var list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
    };
    /**
     * @param {?} ret
     * @return {?}
     */
    NzTransferComponent.prototype.handleFilterChange = /**
     * @param {?} ret
     * @return {?}
     */
    function (ret) {
        this.nzSearchChange.emit(ret);
    };
    /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    NzTransferComponent.prototype.updateOperationStatus = /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    function (direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] = (typeof count === 'undefined' ? this.getCheckedData(direction).filter(function (w) { return !w.disabled; }).length : count) > 0;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.moveTo = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _this = this;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var moveList = datasource.filter(function (item) { return item.checked === true && !item.disabled; });
        this.nzCanMove({ direction: direction, list: moveList })
            .subscribe(function (newMoveList) { return _this.truthMoveTo(direction, newMoveList.filter(function (i) { return !!i; })); }, function () { return moveList.forEach(function (i) { return i.checked = false; }); });
    };
    /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    NzTransferComponent.prototype.truthMoveTo = /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    function (direction, list) {
        var e_1, _a;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                item.checked = false;
                targetDatasource.push(item);
                datasource.splice(datasource.indexOf(item), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list: list
        });
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Transfer'); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('nzDataSource' in changes) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
        }
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
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
    NzTransferComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ElementRef }
    ]; };
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
    return NzTransferComponent;
}());
export { NzTransferComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyYW5zZmVyL256LXRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsRUFBRSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUF5SXRELFlBQVk7SUFFWiw2QkFBb0IsSUFBbUIsRUFBVSxFQUFjO1FBQS9ELGlCQUNDO1FBRG1CLFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZOzRCQTlIeEMsSUFBSSxPQUFPLEVBQVE7O3NCQUU1QixFQUFFOzJCQUNNLEtBQUs7MEJBRWQsRUFBRTsyQkFDRCxFQUFFOzs0QkFJd0IsRUFBRTt3QkFDWixDQUFFLEVBQUUsRUFBRSxFQUFFLENBQUU7NEJBQ04sRUFBRTt5QkFJdUMsVUFBQyxHQUFvQixJQUFLLE9BQUEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBWixDQUFZOzt3QkFtQjlELElBQUksWUFBWSxFQUFFOzhCQUNOLElBQUksWUFBWSxFQUFFOzhCQUNsQixJQUFJLFlBQVksRUFBRTs7Ozs4QkFPaEQsRUFBRTs7K0JBR0QsRUFBRTttQ0FrQmQsVUFBQyxPQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQWxDLENBQWtDO29D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LGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckM7S0FDRjs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7Z0JBekpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsYUFBYTtvQkFDbEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsMDZEQUFtRDtvQkFDbkQsSUFBSSxFQUFpQjt3QkFDbkIsc0JBQXNCLEVBQUUsTUFBTTtxQkFDL0I7aUJBQ0Y7Ozs7Z0JBWFEsYUFBYTtnQkFmcEIsVUFBVTs7OytCQXNDVCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFHTCxLQUFLO2lDQVNMLEtBQUs7c0NBQ0wsS0FBSztvQ0FDTCxLQUFLOzJCQUdMLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNOzs4QkFuRVQ7O1NBNkJhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVHJhbnNmZXJDYW5Nb3ZlLCBUcmFuc2ZlckNoYW5nZSwgVHJhbnNmZXJJdGVtLCBUcmFuc2ZlclNlYXJjaENoYW5nZSwgVHJhbnNmZXJTZWxlY3RDaGFuZ2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdHJhbnNmZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdHJhbnNmZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtdHJhbnNmZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfc2hvd1NlYXJjaCA9IGZhbHNlO1xuXG4gIGxlZnRGaWx0ZXIgPSAnJztcbiAgcmlnaHRGaWx0ZXIgPSAnJztcblxuICAvLyByZWdpb246IGZpZWxkc1xuXG4gIEBJbnB1dCgpIG56RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcbiAgQElucHV0KCkgbnpUaXRsZXM6IHN0cmluZ1tdID0gWyAnJywgJycgXTtcbiAgQElucHV0KCkgbnpPcGVyYXRpb25zOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBuekxpc3RTdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBuekl0ZW1Vbml0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SXRlbXNVbml0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Q2FuTW92ZTogKGFyZzogVHJhbnNmZXJDYW5Nb3ZlKSA9PiBPYnNlcnZhYmxlPFRyYW5zZmVySXRlbVtdPiA9IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gb2YoYXJnLmxpc3QpO1xuICBASW5wdXQoKSBuelJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56Rm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvLyBzZWFyY2hcbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1NlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dTZWFyY2ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1NlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NlYXJjaDtcbiAgfVxuXG4gIEBJbnB1dCgpIG56RmlsdGVyT3B0aW9uOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56U2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcblxuICAvLyBldmVudHNcbiAgQE91dHB1dCgpIG56Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpTZWFyY2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2ZlclNlYXJjaENoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VsZWN0Q2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IHByb2Nlc3MgZGF0YVxuXG4gIC8vIGxlZnRcbiAgbGVmdERhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG5cbiAgLy8gcmlnaHRcbiAgcmlnaHREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgc3BsaXREYXRhU291cmNlKCk6IHZvaWQge1xuICAgIHRoaXMubGVmdERhdGFTb3VyY2UgPSBbXTtcbiAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA9IFtdO1xuICAgIHRoaXMubnpEYXRhU291cmNlLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgIGlmIChyZWNvcmQuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHRoaXMucmlnaHREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVmdERhdGFTb3VyY2UucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGVja2VkRGF0YShkaXJlY3Rpb246IHN0cmluZyk6IFRyYW5zZmVySXRlbVtdIHtcbiAgICByZXR1cm4gdGhpc1sgZGlyZWN0aW9uID09PSAnbGVmdCcgPyAnbGVmdERhdGFTb3VyY2UnIDogJ3JpZ2h0RGF0YVNvdXJjZScgXS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICB9XG5cbiAgaGFuZGxlTGVmdFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgnbGVmdCcsIGNoZWNrZWQpO1xuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcblxuICBoYW5kbGVMZWZ0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCBpdGVtLmNoZWNrZWQsIGl0ZW0pO1xuICBoYW5kbGVSaWdodFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdyaWdodCcsIGl0ZW0uY2hlY2tlZCwgaXRlbSk7XG5cbiAgaGFuZGxlU2VsZWN0KGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JywgY2hlY2tlZDogYm9vbGVhbiwgaXRlbT86IFRyYW5zZmVySXRlbSk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbik7XG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uLCBsaXN0Lmxlbmd0aCk7XG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KHsgZGlyZWN0aW9uLCBjaGVja2VkLCBsaXN0LCBpdGVtIH0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKHJldDogeyBkaXJlY3Rpb246IHN0cmluZywgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5uelNlYXJjaENoYW5nZS5lbWl0KHJldCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IG9wZXJhdGlvblxuXG4gIGxlZnRBY3RpdmUgPSBmYWxzZTtcbiAgcmlnaHRBY3RpdmUgPSBmYWxzZTtcblxuICBwcml2YXRlIHVwZGF0ZU9wZXJhdGlvblN0YXR1cyhkaXJlY3Rpb246IHN0cmluZywgY291bnQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzWyBkaXJlY3Rpb24gPT09ICdyaWdodCcgPyAnbGVmdEFjdGl2ZScgOiAncmlnaHRBY3RpdmUnIF0gPSAodHlwZW9mIGNvdW50ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uKS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoIDogY291bnQpID4gMDtcbiAgfVxuXG4gIG1vdmVUb0xlZnQgPSAoKSA9PiB0aGlzLm1vdmVUbygnbGVmdCcpO1xuICBtb3ZlVG9SaWdodCA9ICgpID0+IHRoaXMubW92ZVRvKCdyaWdodCcpO1xuXG4gIG1vdmVUbyhkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uLCAwKTtcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XG4gICAgY29uc3QgbW92ZUxpc3QgPSBkYXRhc291cmNlLmZpbHRlcihpdGVtID0+IGl0ZW0uY2hlY2tlZCA9PT0gdHJ1ZSAmJiAhaXRlbS5kaXNhYmxlZCk7XG4gICAgdGhpcy5uekNhbk1vdmUoeyBkaXJlY3Rpb24sIGxpc3Q6IG1vdmVMaXN0IH0pXG4gICAgLnN1YnNjcmliZShcbiAgICAgIG5ld01vdmVMaXN0ID0+IHRoaXMudHJ1dGhNb3ZlVG8oZGlyZWN0aW9uLCBuZXdNb3ZlTGlzdC5maWx0ZXIoaSA9PiAhIWkpKSxcbiAgICAgICgpID0+IG1vdmVMaXN0LmZvckVhY2goaSA9PiBpLmNoZWNrZWQgPSBmYWxzZSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnV0aE1vdmVUbyhkaXJlY3Rpb246IHN0cmluZywgbGlzdDogVHJhbnNmZXJJdGVtW10pOiB2b2lkIHtcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICBjb25zdCBkYXRhc291cmNlID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA6IHRoaXMubGVmdERhdGFTb3VyY2U7XG4gICAgY29uc3QgdGFyZ2V0RGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5sZWZ0RGF0YVNvdXJjZSA6IHRoaXMucmlnaHREYXRhU291cmNlO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRhcmdldERhdGFzb3VyY2UucHVzaChpdGVtKTtcbiAgICAgIGRhdGFzb3VyY2Uuc3BsaWNlKGRhdGFzb3VyY2UuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKG9wcG9zaXRlRGlyZWN0aW9uKTtcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xuICAgICAgZnJvbTogb3Bwb3NpdGVEaXJlY3Rpb24sXG4gICAgICB0byAgOiBkaXJlY3Rpb24sXG4gICAgICBsaXN0XG4gICAgfSk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVHJhbnNmZXInKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCduekRhdGFTb3VyY2UnIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuc3BsaXREYXRhU291cmNlKCk7XG4gICAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cygnbGVmdCcpO1xuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ3JpZ2h0Jyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==