/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isInteger } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
export class NzPaginationComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this._showSizeChanger = false;
        this._showQuickJumper = false;
        this._simple = false;
        this._hideOnSinglePage = false;
        this._pageSize = 10;
        this._pageSizeOptions = [10, 20, 30, 40];
        this._pageIndex = 1;
        this.firstIndex = 1;
        this.pages = [];
        this.nzInTable = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzItemRender(value) {
        this._itemRender = value;
    }
    /**
     * @return {?}
     */
    get nzItemRender() {
        return this._itemRender;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowSizeChanger(value) {
        this._showSizeChanger = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowSizeChanger() {
        return this._showSizeChanger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHideOnSinglePage(value) {
        this._hideOnSinglePage = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzHideOnSinglePage() {
        return this._hideOnSinglePage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowQuickJumper(value) {
        this._showQuickJumper = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowQuickJumper() {
        return this._showQuickJumper;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSimple(value) {
        this._simple = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzSimple() {
        return this._simple;
    }
    /**
     * page size changer select values
     * @param {?} value
     * @return {?}
     */
    set nzPageSizeOptions(value) {
        if (value && value.length) {
            this._pageSizeOptions = value;
        }
    }
    /**
     * @return {?}
     */
    get nzPageSizeOptions() {
        return this._pageSizeOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPageIndex(value) {
        if (this._pageIndex === value) {
            return;
        }
        if (value > this.lastIndex) {
            this._pageIndex = this.lastIndex;
        }
        else if (value < this.firstIndex) {
            this._pageIndex = this.firstIndex;
        }
        else {
            this._pageIndex = Number(value);
        }
        this.buildIndexes();
    }
    /**
     * @return {?}
     */
    get nzPageIndex() {
        return this._pageIndex;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPageSize(value) {
        if (value === this._pageSize) {
            return;
        }
        this._pageSize = value;
        /** @type {?} */
        const pageIndexOverflow = this.checkLastIndexOverflow();
        if (pageIndexOverflow) {
            this.nzPageIndex = this.lastIndex;
            this.nzPageIndexChange.emit(this.lastIndex);
        }
        this.buildIndexes();
    }
    /**
     * @return {?}
     */
    get nzPageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTotal(value) {
        this._total = value;
        this.buildIndexes();
    }
    /**
     * @return {?}
     */
    get nzTotal() {
        return this._total;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    jumpPage(index) {
        if (index === this.nzPageIndex) {
            return;
        }
        if (index < this.firstIndex) {
            this.nzPageIndex = this.firstIndex;
        }
        else if (index > this.lastIndex) {
            this.nzPageIndex = this.lastIndex;
        }
        else {
            this.nzPageIndex = index;
        }
        this.nzPageIndexChange.emit(this.nzPageIndex);
    }
    /**
     * @return {?}
     */
    jumpPreFive() {
        this.jumpPage(this.nzPageIndex - 5);
    }
    /**
     * @return {?}
     */
    jumpNextFive() {
        this.jumpPage(this.nzPageIndex + 5);
    }
    /**
     * @return {?}
     */
    jumpPreOne() {
        if (this.isFirstIndex) {
            return;
        }
        this.jumpPage(this.nzPageIndex - 1);
    }
    /**
     * @return {?}
     */
    jumpNextOne() {
        if (this.isLastIndex) {
            return;
        }
        this.jumpPage(this.nzPageIndex + 1);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPageSizeChange($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
    }
    /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    handleKeyDown(e, input, clearInputValue) {
        /** @type {?} */
        const target = input;
        /** @type {?} */
        const inputValue = target.value;
        /** @type {?} */
        const currentInputValue = this.nzPageIndex;
        /** @type {?} */
        let value;
        if (inputValue === '') {
            value = inputValue;
        }
        else if (isNaN(Number(inputValue))) {
            value = currentInputValue;
        }
        else {
            value = Number(inputValue);
        }
        this.handleChange(value, target, clearInputValue);
    }
    /**
     * @param {?} page
     * @return {?}
     */
    isValid(page) {
        return isInteger(page) && (page >= 1) && (page !== this.nzPageIndex) && (page <= this.lastIndex);
    }
    /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    handleChange(value, target, clearInputValue) {
        /** @type {?} */
        const page = value;
        if (this.isValid(page)) {
            this.nzPageIndex = page;
            this.nzPageIndexChange.emit(this.nzPageIndex);
        }
        if (clearInputValue) {
            target.value = null;
        }
        else {
            target.value = `${this.nzPageIndex}`;
        }
    }
    /**
     * @return {?}
     */
    checkLastIndexOverflow() {
        return this.nzPageIndex > this.lastIndex;
    }
    /**
     * @return {?}
     */
    get lastIndex() {
        return Math.ceil(this.nzTotal / this.nzPageSize);
    }
    /**
     * generate indexes list
     * @return {?}
     */
    buildIndexes() {
        /** @type {?} */
        const tmpPages = [];
        if (this.lastIndex <= 9) {
            for (let i = 2; i <= this.lastIndex - 1; i++) {
                tmpPages.push({ index: i });
            }
        }
        else {
            /** @type {?} */
            const current = +this.nzPageIndex;
            /** @type {?} */
            let left = Math.max(2, current - 2);
            /** @type {?} */
            let right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (let i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    }
    /**
     * @return {?}
     */
    get isLastIndex() {
        return this.nzPageIndex === this.lastIndex;
    }
    /**
     * @return {?}
     */
    get isFirstIndex() {
        return this.nzPageIndex === this.firstIndex;
    }
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    min(val1, val2) {
        return Math.min(val1, val2);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Pagination'));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-pagination',
                preserveWhitespaces: false,
                template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon type=\"left\"></i></a>\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon type=\"right\"></i></a>\n  <a *ngIf=\"type=='page'\">{{page}}</a>\n</ng-template>\n<ng-container *ngIf=\"(nzHideOnSinglePage&&(nzTotal>nzPageSize))||!nzHideOnSinglePage\">\n  <ul\n    *ngIf=\"nzSimple\"\n    [class.ant-table-pagination]=\"nzInTable\"\n    class=\"ant-pagination ant-pagination-simple\">\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li [attr.title]=\"nzPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\n      <input\n        #simplePagerInput\n        [ngModel]=\"nzPageIndex\"\n        (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\n        size=\"3\">\n      <span class=\"ant-pagination-slash\">\uFF0F</span>\n      {{ lastIndex }}\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n  </ul>\n  <ul\n    *ngIf=\"!nzSimple\"\n    [class.mini]=\"nzSize=='small'\"\n    [class.ant-table-pagination]=\"nzInTable\"\n    class=\"ant-pagination\">\n    <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\n      <ng-template\n        [ngTemplateOutlet]=\"nzShowTotal\"\n        [ngTemplateOutletContext]=\"{ $implicit: nzTotal,range:[(nzPageIndex-1)*nzPageSize+1, min(nzPageIndex*nzPageSize, nzTotal)] }\">\n      </ng-template>\n    </li>\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"firstIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(firstIndex)\"\n      [class.ant-pagination-item-active]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.prev_5\"\n      (click)=\"jumpPreFive()\"\n      class=\"ant-pagination-jump-prev\"\n      *ngIf=\"(lastIndex >9)&&(nzPageIndex-3>firstIndex)\">\n      <a class=\"ant-pagination-item-link\">\n        <div class=\"ant-pagination-item-container\">\n          <i nz-icon type=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n          <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n        </div>\n      </a>\n    </li>\n    <li\n      *ngFor=\"let page of pages\"\n      [attr.title]=\"page.index\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(page.index)\"\n      [class.ant-pagination-item-active]=\"nzPageIndex==page.index\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page.index }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.next_5\"\n      (click)=\"jumpNextFive()\"\n      class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\n      *ngIf=\"(lastIndex >9)&&(nzPageIndex+3<lastIndex)\">\n      <a class=\"ant-pagination-item-link\">\n        <div class=\"ant-pagination-item-container\">\n          <i nz-icon type=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n          <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n        </div>\n      </a>\n    </li>\n    <li\n      [attr.title]=\"lastIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(lastIndex)\"\n      *ngIf=\"(lastIndex>0)&&(lastIndex!==firstIndex)\"\n      [class.ant-pagination-item-active]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n    <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper||nzShowSizeChanger\">\n      <nz-select\n        *ngIf=\"nzShowSizeChanger\"\n        [nzSize]=\"nzSize=='small'?'small':''\"\n        class=\"ant-pagination-options-size-changer\"\n        [ngModel]=\"nzPageSize\"\n        (ngModelChange)=\"onPageSizeChange($event)\">\n        <nz-option\n          *ngFor=\"let option of nzPageSizeOptions\"\n          [nzLabel]=\"option + locale.items_per_page\"\n          [nzValue]=\"option\">\n        </nz-option>\n        <nz-option\n          *ngIf=\"nzPageSizeOptions.indexOf(nzPageSize)==-1\"\n          [nzLabel]=\"nzPageSize + locale.items_per_page\"\n          [nzValue]=\"nzPageSize\">\n        </nz-option>\n      </nz-select>\n      <div class=\"ant-pagination-options-quick-jumper\"\n        *ngIf=\"nzShowQuickJumper\">\n        {{ locale.jump_to }}\n        <input #quickJumperInput (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\n        {{ locale.page }}\n      </div>\n    </div>\n  </ul>\n</ng-container>"
            }] }
];
/** @nocollapse */
NzPaginationComponent.ctorParameters = () => [
    { type: NzI18nService }
];
NzPaginationComponent.propDecorators = {
    _itemRender: [{ type: ViewChild, args: ['renderItemTemplate',] }],
    nzShowTotal: [{ type: Input }],
    nzInTable: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzItemRender: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }],
    nzTotal: [{ type: Input }]
};
function NzPaginationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPaginationComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzPaginationComponent.prototype.locale;
    /** @type {?} */
    NzPaginationComponent.prototype._itemRender;
    /** @type {?} */
    NzPaginationComponent.prototype._showSizeChanger;
    /** @type {?} */
    NzPaginationComponent.prototype._showQuickJumper;
    /** @type {?} */
    NzPaginationComponent.prototype._simple;
    /** @type {?} */
    NzPaginationComponent.prototype._hideOnSinglePage;
    /** @type {?} */
    NzPaginationComponent.prototype._pageSize;
    /** @type {?} */
    NzPaginationComponent.prototype._pageSizeOptions;
    /** @type {?} */
    NzPaginationComponent.prototype._total;
    /** @type {?} */
    NzPaginationComponent.prototype._pageIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.firstIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.pages;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzInTable;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzPaginationComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi9uei1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBT3hELE1BQU07Ozs7SUF1UEosWUFBb0IsSUFBbUI7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBZTs0QkF0UGhCLElBQUksT0FBTyxFQUFROztzQkFFNUIsRUFBRTtnQ0FFVyxLQUFLO2dDQUNMLEtBQUs7dUJBQ2QsS0FBSztpQ0FDSyxLQUFLO3lCQUNiLEVBQUU7Z0NBQ0ssQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUU7MEJBRXhCLENBQUM7MEJBQ1QsQ0FBQztxQkFDTixFQUFFO3lCQUVXLEtBQUs7Z0NBRXlCLElBQUksWUFBWSxFQUFFO2lDQUNqQixJQUFJLFlBQVksRUFBRTtLQXFPckU7Ozs7O0lBbk9ELElBQ0ksWUFBWSxDQUFDLEtBQXlFO1FBQ3hGLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELElB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TCxLQUFLO3VCQVNMLEtBQUs7Z0NBVUwsS0FBSzswQkFXTCxLQUFLO3lCQW1CTCxLQUFLO3NCQWtCTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzSW50ZWdlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXBhZ2luYXRpb24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJykgcHJpdmF0ZSBfaXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JywgcGFnZTogbnVtYmVyIH0+O1xuICBwcml2YXRlIF9zaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XG4gIHByaXZhdGUgX3NpbXBsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9oaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XG4gIHByaXZhdGUgX3BhZ2VTaXplID0gMTA7XG4gIHByaXZhdGUgX3BhZ2VTaXplT3B0aW9ucyA9IFsgMTAsIDIwLCAzMCwgNDAgXTtcbiAgcHJpdmF0ZSBfdG90YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcGFnZUluZGV4ID0gMTtcbiAgZmlyc3RJbmRleCA9IDE7XG4gIHBhZ2VzID0gW107XG4gIEBJbnB1dCgpIG56U2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyLCByYW5nZTogWyBudW1iZXIsIG51bWJlciBdIH0+O1xuICBASW5wdXQoKSBuekluVGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBuelBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpJdGVtUmVuZGVyKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnLCBwYWdlOiBudW1iZXIgfT4pIHtcbiAgICB0aGlzLl9pdGVtUmVuZGVyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpJdGVtUmVuZGVyKCk6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCcsIHBhZ2U6IG51bWJlciB9PiB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1SZW5kZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93U2l6ZUNoYW5nZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93U2l6ZUNoYW5nZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1NpemVDaGFuZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93U2l6ZUNoYW5nZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpIaWRlT25TaW5nbGVQYWdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZU9uU2luZ2xlUGFnZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpIaWRlT25TaW5nbGVQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlT25TaW5nbGVQYWdlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1F1aWNrSnVtcGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1F1aWNrSnVtcGVyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dRdWlja0p1bXBlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1F1aWNrSnVtcGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2ltcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2ltcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNpbXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlO1xuICB9XG5cbiAgLyoqIHBhZ2Ugc2l6ZSBjaGFuZ2VyIHNlbGVjdCB2YWx1ZXMgKi9cbiAgQElucHV0KClcbiAgc2V0IG56UGFnZVNpemVPcHRpb25zKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3BhZ2VTaXplT3B0aW9ucyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelBhZ2VTaXplT3B0aW9ucygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplT3B0aW9ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3BhZ2VJbmRleCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID4gdGhpcy5sYXN0SW5kZXgpIHtcbiAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IHRoaXMubGFzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPCB0aGlzLmZpcnN0SW5kZXgpIHtcbiAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IHRoaXMuZmlyc3RJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFnZUluZGV4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgfVxuXG4gIGdldCBuelBhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlSW5kZXg7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl9wYWdlU2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbHVlO1xuICAgIGNvbnN0IHBhZ2VJbmRleE92ZXJmbG93ID0gdGhpcy5jaGVja0xhc3RJbmRleE92ZXJmbG93KCk7XG4gICAgaWYgKHBhZ2VJbmRleE92ZXJmbG93KSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gdGhpcy5sYXN0SW5kZXg7XG4gICAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5sYXN0SW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLmJ1aWxkSW5kZXhlcygpO1xuICB9XG5cbiAgZ2V0IG56UGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUb3RhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWwgPSB2YWx1ZTtcbiAgICB0aGlzLmJ1aWxkSW5kZXhlcygpO1xuICB9XG5cbiAgZ2V0IG56VG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWw7XG4gIH1cblxuICBqdW1wUGFnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLm56UGFnZUluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgdGhpcy5maXJzdEluZGV4KSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gdGhpcy5maXJzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPiB0aGlzLmxhc3RJbmRleCkge1xuICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IHRoaXMubGFzdEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gaW5kZXg7XG4gICAgfVxuICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcbiAgfVxuXG4gIGp1bXBQcmVGaXZlKCk6IHZvaWQge1xuICAgIHRoaXMuanVtcFBhZ2UodGhpcy5uelBhZ2VJbmRleCAtIDUpO1xuICB9XG5cbiAganVtcE5leHRGaXZlKCk6IHZvaWQge1xuICAgIHRoaXMuanVtcFBhZ2UodGhpcy5uelBhZ2VJbmRleCArIDUpO1xuICB9XG5cbiAganVtcFByZU9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0ZpcnN0SW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLm56UGFnZUluZGV4IC0gMSk7XG4gIH1cblxuICBqdW1wTmV4dE9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0xhc3RJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMubnpQYWdlSW5kZXggKyAxKTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2UoJGV2ZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm56UGFnZVNpemUgPSAkZXZlbnQ7XG4gICAgdGhpcy5uelBhZ2VTaXplQ2hhbmdlLmVtaXQoJGV2ZW50KTtcbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZTogS2V5Ym9hcmRFdmVudCwgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNsZWFySW5wdXRWYWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGlucHV0O1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgY3VycmVudElucHV0VmFsdWUgPSB0aGlzLm56UGFnZUluZGV4O1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgdmFsdWUgPSBpbnB1dFZhbHVlO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4oTnVtYmVyKGlucHV0VmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBjdXJyZW50SW5wdXRWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBOdW1iZXIoaW5wdXRWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHZhbHVlLCB0YXJnZXQsIGNsZWFySW5wdXRWYWx1ZSk7XG4gIH1cblxuICBpc1ZhbGlkKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0ludGVnZXIocGFnZSkgJiYgKHBhZ2UgPj0gMSkgJiYgKHBhZ2UgIT09IHRoaXMubnpQYWdlSW5kZXgpICYmIChwYWdlIDw9IHRoaXMubGFzdEluZGV4KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZTogbnVtYmVyLCB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNsZWFySW5wdXRWYWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2UgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKHBhZ2UpKSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gcGFnZTtcbiAgICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcbiAgICB9XG4gICAgaWYgKGNsZWFySW5wdXRWYWx1ZSkge1xuICAgICAgdGFyZ2V0LnZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnZhbHVlID0gYCR7dGhpcy5uelBhZ2VJbmRleH1gO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrTGFzdEluZGV4T3ZlcmZsb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPiB0aGlzLmxhc3RJbmRleDtcbiAgfVxuXG4gIGdldCBsYXN0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMubnpUb3RhbCAvIHRoaXMubnpQYWdlU2l6ZSk7XG4gIH1cblxuICAvKiogZ2VuZXJhdGUgaW5kZXhlcyBsaXN0ICovXG4gIGJ1aWxkSW5kZXhlcygpOiB2b2lkIHtcbiAgICBjb25zdCB0bXBQYWdlcyA9IFtdO1xuICAgIGlmICh0aGlzLmxhc3RJbmRleCA8PSA5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSB0aGlzLmxhc3RJbmRleCAtIDE7IGkrKykge1xuICAgICAgICB0bXBQYWdlcy5wdXNoKHsgaW5kZXg6IGkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSArdGhpcy5uelBhZ2VJbmRleDtcbiAgICAgIGxldCBsZWZ0ID0gTWF0aC5tYXgoMiwgY3VycmVudCAtIDIpO1xuICAgICAgbGV0IHJpZ2h0ID0gTWF0aC5taW4oY3VycmVudCArIDIsIHRoaXMubGFzdEluZGV4IC0gMSk7XG5cbiAgICAgIGlmIChjdXJyZW50IC0gMSA8PSAyKSB7XG4gICAgICAgIHJpZ2h0ID0gNTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubGFzdEluZGV4IC0gY3VycmVudCA8PSAyKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmxhc3RJbmRleCAtIDQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgdG1wUGFnZXMucHVzaCh7IGluZGV4OiBpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBhZ2VzID0gdG1wUGFnZXM7XG4gIH1cblxuICBnZXQgaXNMYXN0SW5kZXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPT09IHRoaXMubGFzdEluZGV4O1xuICB9XG5cbiAgZ2V0IGlzRmlyc3RJbmRleCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelBhZ2VJbmRleCA9PT0gdGhpcy5maXJzdEluZGV4O1xuICB9XG5cbiAgbWluKHZhbDE6IG51bWJlciwgdmFsMjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5taW4odmFsMSwgdmFsMik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnUGFnaW5hdGlvbicpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=