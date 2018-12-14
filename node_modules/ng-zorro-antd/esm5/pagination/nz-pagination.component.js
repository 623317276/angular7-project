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
var NzPaginationComponent = /** @class */ (function () {
    function NzPaginationComponent(i18n) {
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
    Object.defineProperty(NzPaginationComponent.prototype, "nzItemRender", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemRender;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemRender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzShowSizeChanger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSizeChanger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSizeChanger = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzHideOnSinglePage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideOnSinglePage;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideOnSinglePage = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzShowQuickJumper", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showQuickJumper;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showQuickJumper = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzSimple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._simple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._simple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzPageSizeOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSizeOptions;
        },
        /** page size changer select values */
        set: /**
         * page size changer select values
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.length) {
                this._pageSizeOptions = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzPageIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzPageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === this._pageSize) {
                return;
            }
            this._pageSize = value;
            /** @type {?} */
            var pageIndexOverflow = this.checkLastIndexOverflow();
            if (pageIndexOverflow) {
                this.nzPageIndex = this.lastIndex;
                this.nzPageIndexChange.emit(this.lastIndex);
            }
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._total;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._total = value;
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
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
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPreFive = /**
     * @return {?}
     */
    function () {
        this.jumpPage(this.nzPageIndex - 5);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpNextFive = /**
     * @return {?}
     */
    function () {
        this.jumpPage(this.nzPageIndex + 5);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPreOne = /**
     * @return {?}
     */
    function () {
        if (this.isFirstIndex) {
            return;
        }
        this.jumpPage(this.nzPageIndex - 1);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpNextOne = /**
     * @return {?}
     */
    function () {
        if (this.isLastIndex) {
            return;
        }
        this.jumpPage(this.nzPageIndex + 1);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzPaginationComponent.prototype.onPageSizeChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
    };
    /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    NzPaginationComponent.prototype.handleKeyDown = /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    function (e, input, clearInputValue) {
        /** @type {?} */
        var target = input;
        /** @type {?} */
        var inputValue = target.value;
        /** @type {?} */
        var currentInputValue = this.nzPageIndex;
        /** @type {?} */
        var value;
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
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NzPaginationComponent.prototype.isValid = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return isInteger(page) && (page >= 1) && (page !== this.nzPageIndex) && (page <= this.lastIndex);
    };
    /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    NzPaginationComponent.prototype.handleChange = /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    function (value, target, clearInputValue) {
        /** @type {?} */
        var page = value;
        if (this.isValid(page)) {
            this.nzPageIndex = page;
            this.nzPageIndexChange.emit(this.nzPageIndex);
        }
        if (clearInputValue) {
            target.value = null;
        }
        else {
            target.value = "" + this.nzPageIndex;
        }
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.checkLastIndexOverflow = /**
     * @return {?}
     */
    function () {
        return this.nzPageIndex > this.lastIndex;
    };
    Object.defineProperty(NzPaginationComponent.prototype, "lastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.nzTotal / this.nzPageSize);
        },
        enumerable: true,
        configurable: true
    });
    /** generate indexes list */
    /**
     * generate indexes list
     * @return {?}
     */
    NzPaginationComponent.prototype.buildIndexes = /**
     * generate indexes list
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tmpPages = [];
        if (this.lastIndex <= 9) {
            for (var i = 2; i <= this.lastIndex - 1; i++) {
                tmpPages.push({ index: i });
            }
        }
        else {
            /** @type {?} */
            var current = +this.nzPageIndex;
            /** @type {?} */
            var left = Math.max(2, current - 2);
            /** @type {?} */
            var right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (var i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    };
    Object.defineProperty(NzPaginationComponent.prototype, "isLastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.lastIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "isFirstIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.firstIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    NzPaginationComponent.prototype.min = /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    function (val1, val2) {
        return Math.min(val1, val2);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Pagination'); });
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-pagination',
                    preserveWhitespaces: false,
                    template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon type=\"left\"></i></a>\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon type=\"right\"></i></a>\n  <a *ngIf=\"type=='page'\">{{page}}</a>\n</ng-template>\n<ng-container *ngIf=\"(nzHideOnSinglePage&&(nzTotal>nzPageSize))||!nzHideOnSinglePage\">\n  <ul\n    *ngIf=\"nzSimple\"\n    [class.ant-table-pagination]=\"nzInTable\"\n    class=\"ant-pagination ant-pagination-simple\">\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li [attr.title]=\"nzPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\n      <input\n        #simplePagerInput\n        [ngModel]=\"nzPageIndex\"\n        (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\n        size=\"3\">\n      <span class=\"ant-pagination-slash\">\uFF0F</span>\n      {{ lastIndex }}\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n  </ul>\n  <ul\n    *ngIf=\"!nzSimple\"\n    [class.mini]=\"nzSize=='small'\"\n    [class.ant-table-pagination]=\"nzInTable\"\n    class=\"ant-pagination\">\n    <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\n      <ng-template\n        [ngTemplateOutlet]=\"nzShowTotal\"\n        [ngTemplateOutletContext]=\"{ $implicit: nzTotal,range:[(nzPageIndex-1)*nzPageSize+1, min(nzPageIndex*nzPageSize, nzTotal)] }\">\n      </ng-template>\n    </li>\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"firstIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(firstIndex)\"\n      [class.ant-pagination-item-active]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.prev_5\"\n      (click)=\"jumpPreFive()\"\n      class=\"ant-pagination-jump-prev\"\n      *ngIf=\"(lastIndex >9)&&(nzPageIndex-3>firstIndex)\">\n      <a class=\"ant-pagination-item-link\">\n        <div class=\"ant-pagination-item-container\">\n          <i nz-icon type=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n          <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n        </div>\n      </a>\n    </li>\n    <li\n      *ngFor=\"let page of pages\"\n      [attr.title]=\"page.index\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(page.index)\"\n      [class.ant-pagination-item-active]=\"nzPageIndex==page.index\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page.index }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.next_5\"\n      (click)=\"jumpNextFive()\"\n      class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\n      *ngIf=\"(lastIndex >9)&&(nzPageIndex+3<lastIndex)\">\n      <a class=\"ant-pagination-item-link\">\n        <div class=\"ant-pagination-item-container\">\n          <i nz-icon type=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n          <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n        </div>\n      </a>\n    </li>\n    <li\n      [attr.title]=\"lastIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(lastIndex)\"\n      *ngIf=\"(lastIndex>0)&&(lastIndex!==firstIndex)\"\n      [class.ant-pagination-item-active]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n    <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper||nzShowSizeChanger\">\n      <nz-select\n        *ngIf=\"nzShowSizeChanger\"\n        [nzSize]=\"nzSize=='small'?'small':''\"\n        class=\"ant-pagination-options-size-changer\"\n        [ngModel]=\"nzPageSize\"\n        (ngModelChange)=\"onPageSizeChange($event)\">\n        <nz-option\n          *ngFor=\"let option of nzPageSizeOptions\"\n          [nzLabel]=\"option + locale.items_per_page\"\n          [nzValue]=\"option\">\n        </nz-option>\n        <nz-option\n          *ngIf=\"nzPageSizeOptions.indexOf(nzPageSize)==-1\"\n          [nzLabel]=\"nzPageSize + locale.items_per_page\"\n          [nzValue]=\"nzPageSize\">\n        </nz-option>\n      </nz-select>\n      <div class=\"ant-pagination-options-quick-jumper\"\n        *ngIf=\"nzShowQuickJumper\">\n        {{ locale.jump_to }}\n        <input #quickJumperInput (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\n        {{ locale.page }}\n      </div>\n    </div>\n  </ul>\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    NzPaginationComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
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
    return NzPaginationComponent;
}());
export { NzPaginationComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi9uei1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQThQdEQsK0JBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7NEJBdFBoQixJQUFJLE9BQU8sRUFBUTs7c0JBRTVCLEVBQUU7Z0NBRVcsS0FBSztnQ0FDTCxLQUFLO3VCQUNkLEtBQUs7aUNBQ0ssS0FBSzt5QkFDYixFQUFFO2dDQUNLLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFOzBCQUV4QixDQUFDOzBCQUNULENBQUM7cUJBQ04sRUFBRTt5QkFFVyxLQUFLO2dDQUV5QixJQUFJLFlBQVksRUFBRTtpQ0FDakIsSUFBSSxZQUFZLEVBQUU7S0FxT3JFO0lBbk9ELHNCQUNJLCtDQUFZOzs7O1FBSWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQVBELFVBQ2lCLEtBQXlFO1lBQ3hGLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzFCOzs7T0FBQTtJQU1ELHNCQUNJLG9EQUFp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LFFBQVEsRUFBRSxDQUFDO0tBQzlCOztnQkF0UUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxlQUFlO29CQUNwQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQiw4bkxBQXFEO2lCQUN0RDs7OztnQkFOUSxhQUFhOzs7OEJBV25CLFNBQVMsU0FBQyxvQkFBb0I7OEJBVzlCLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLO21DQUNMLE1BQU07b0NBQ04sTUFBTTsrQkFFTixLQUFLO29DQVNMLEtBQUs7cUNBU0wsS0FBSztvQ0FTTCxLQUFLOzJCQVNMLEtBQUs7b0NBVUwsS0FBSzs4QkFXTCxLQUFLOzZCQW1CTCxLQUFLOzBCQWtCTCxLQUFLOztnQ0ExSVI7O1NBdUJhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0ludGVnZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1wYWdpbmF0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56UGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvY2FsZTogYW55ID0ge307XG4gIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScpIHByaXZhdGUgX2l0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCcsIHBhZ2U6IG51bWJlciB9PjtcbiAgcHJpdmF0ZSBfc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dRdWlja0p1bXBlciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaW1wbGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xuICBwcml2YXRlIF9wYWdlU2l6ZSA9IDEwO1xuICBwcml2YXRlIF9wYWdlU2l6ZU9wdGlvbnMgPSBbIDEwLCAyMCwgMzAsIDQwIF07XG4gIHByaXZhdGUgX3RvdGFsOiBudW1iZXI7XG4gIHByaXZhdGUgX3BhZ2VJbmRleCA9IDE7XG4gIGZpcnN0SW5kZXggPSAxO1xuICBwYWdlcyA9IFtdO1xuICBASW5wdXQoKSBuelNob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciwgcmFuZ2U6IFsgbnVtYmVyLCBudW1iZXIgXSB9PjtcbiAgQElucHV0KCkgbnpJblRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U2l6ZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuelBhZ2VJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56SXRlbVJlbmRlcih2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JywgcGFnZTogbnVtYmVyIH0+KSB7XG4gICAgdGhpcy5faXRlbVJlbmRlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56SXRlbVJlbmRlcigpOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnLCBwYWdlOiBudW1iZXIgfT4ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtUmVuZGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1NpemVDaGFuZ2VyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NpemVDaGFuZ2VyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dTaXplQ2hhbmdlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NpemVDaGFuZ2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SGlkZU9uU2luZ2xlUGFnZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVPblNpbmdsZVBhZ2UgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56SGlkZU9uU2luZ2xlUGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZU9uU2luZ2xlUGFnZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dRdWlja0p1bXBlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dRdWlja0p1bXBlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93UXVpY2tKdW1wZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dRdWlja0p1bXBlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpbXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NpbXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaW1wbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZTtcbiAgfVxuXG4gIC8qKiBwYWdlIHNpemUgY2hhbmdlciBzZWxlY3QgdmFsdWVzICovXG4gIEBJbnB1dCgpXG4gIHNldCBuelBhZ2VTaXplT3B0aW9ucyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9wYWdlU2l6ZU9wdGlvbnMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQYWdlU2l6ZU9wdGlvbnMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZU9wdGlvbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9wYWdlSW5kZXggPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZSA+IHRoaXMubGFzdEluZGV4KSB7XG4gICAgICB0aGlzLl9wYWdlSW5kZXggPSB0aGlzLmxhc3RJbmRleDtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIDwgdGhpcy5maXJzdEluZGV4KSB7XG4gICAgICB0aGlzLl9wYWdlSW5kZXggPSB0aGlzLmZpcnN0SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IE51bWJlcih2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuYnVpbGRJbmRleGVzKCk7XG4gIH1cblxuICBnZXQgbnpQYWdlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUluZGV4O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGFnZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fcGFnZVNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcbiAgICBjb25zdCBwYWdlSW5kZXhPdmVyZmxvdyA9IHRoaXMuY2hlY2tMYXN0SW5kZXhPdmVyZmxvdygpO1xuICAgIGlmIChwYWdlSW5kZXhPdmVyZmxvdykge1xuICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IHRoaXMubGFzdEluZGV4O1xuICAgICAgdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMubGFzdEluZGV4KTtcbiAgICB9XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgfVxuXG4gIGdldCBuelBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VG90YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsID0gdmFsdWU7XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgfVxuXG4gIGdldCBuelRvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsO1xuICB9XG5cbiAganVtcFBhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5uelBhZ2VJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IHRoaXMuZmlyc3RJbmRleCkge1xuICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IHRoaXMuZmlyc3RJbmRleDtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gdGhpcy5sYXN0SW5kZXgpIHtcbiAgICAgIHRoaXMubnpQYWdlSW5kZXggPSB0aGlzLmxhc3RJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5uelBhZ2VJbmRleCk7XG4gIH1cblxuICBqdW1wUHJlRml2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMubnpQYWdlSW5kZXggLSA1KTtcbiAgfVxuXG4gIGp1bXBOZXh0Rml2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMubnpQYWdlSW5kZXggKyA1KTtcbiAgfVxuXG4gIGp1bXBQcmVPbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNGaXJzdEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuanVtcFBhZ2UodGhpcy5uelBhZ2VJbmRleCAtIDEpO1xuICB9XG5cbiAganVtcE5leHRPbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNMYXN0SW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLm56UGFnZUluZGV4ICsgMSk7XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlKCRldmVudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uelBhZ2VTaXplID0gJGV2ZW50O1xuICAgIHRoaXMubnpQYWdlU2l6ZUNoYW5nZS5lbWl0KCRldmVudCk7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBjbGVhcklucHV0VmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBpbnB1dDtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRJbnB1dFZhbHVlID0gdGhpcy5uelBhZ2VJbmRleDtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGlzTmFOKE51bWJlcihpbnB1dFZhbHVlKSkpIHtcbiAgICAgIHZhbHVlID0gY3VycmVudElucHV0VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyKGlucHV0VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSh2YWx1ZSwgdGFyZ2V0LCBjbGVhcklucHV0VmFsdWUpO1xuICB9XG5cbiAgaXNWYWxpZChwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNJbnRlZ2VyKHBhZ2UpICYmIChwYWdlID49IDEpICYmIChwYWdlICE9PSB0aGlzLm56UGFnZUluZGV4KSAmJiAocGFnZSA8PSB0aGlzLmxhc3RJbmRleCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UodmFsdWU6IG51bWJlciwgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50LCBjbGVhcklucHV0VmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaXNWYWxpZChwYWdlKSkge1xuICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IHBhZ2U7XG4gICAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5uelBhZ2VJbmRleCk7XG4gICAgfVxuICAgIGlmIChjbGVhcklucHV0VmFsdWUpIHtcbiAgICAgIHRhcmdldC52YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC52YWx1ZSA9IGAke3RoaXMubnpQYWdlSW5kZXh9YDtcbiAgICB9XG4gIH1cblxuICBjaGVja0xhc3RJbmRleE92ZXJmbG93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56UGFnZUluZGV4ID4gdGhpcy5sYXN0SW5kZXg7XG4gIH1cblxuICBnZXQgbGFzdEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLm56VG90YWwgLyB0aGlzLm56UGFnZVNpemUpO1xuICB9XG5cbiAgLyoqIGdlbmVyYXRlIGluZGV4ZXMgbGlzdCAqL1xuICBidWlsZEluZGV4ZXMoKTogdm9pZCB7XG4gICAgY29uc3QgdG1wUGFnZXMgPSBbXTtcbiAgICBpZiAodGhpcy5sYXN0SW5kZXggPD0gOSkge1xuICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gdGhpcy5sYXN0SW5kZXggLSAxOyBpKyspIHtcbiAgICAgICAgdG1wUGFnZXMucHVzaCh7IGluZGV4OiBpIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gK3RoaXMubnpQYWdlSW5kZXg7XG4gICAgICBsZXQgbGVmdCA9IE1hdGgubWF4KDIsIGN1cnJlbnQgLSAyKTtcbiAgICAgIGxldCByaWdodCA9IE1hdGgubWluKGN1cnJlbnQgKyAyLCB0aGlzLmxhc3RJbmRleCAtIDEpO1xuXG4gICAgICBpZiAoY3VycmVudCAtIDEgPD0gMikge1xuICAgICAgICByaWdodCA9IDU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhc3RJbmRleCAtIGN1cnJlbnQgPD0gMikge1xuICAgICAgICBsZWZ0ID0gdGhpcy5sYXN0SW5kZXggLSA0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgIHRtcFBhZ2VzLnB1c2goeyBpbmRleDogaSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wYWdlcyA9IHRtcFBhZ2VzO1xuICB9XG5cbiAgZ2V0IGlzTGFzdEluZGV4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56UGFnZUluZGV4ID09PSB0aGlzLmxhc3RJbmRleDtcbiAgfVxuXG4gIGdldCBpc0ZpcnN0SW5kZXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPT09IHRoaXMuZmlyc3RJbmRleDtcbiAgfVxuXG4gIG1pbih2YWwxOiBudW1iZXIsIHZhbDI6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKHZhbDEsIHZhbDIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1BhZ2luYXRpb24nKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19