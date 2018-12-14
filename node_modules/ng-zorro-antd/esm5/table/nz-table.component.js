/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMeasureScrollbarService } from '../core/services/nz-measure-scrollbar.service';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzThComponent } from './nz-th.component';
var NzTableComponent = /** @class */ (function () {
    function NzTableComponent(renderer, ngZone, elementRef, cdr, nzMeasureScrollbarService, i18n) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        this._bordered = false;
        this._showPagination = true;
        this._loading = false;
        this._showSizeChanger = false;
        this._showQuickJumper = false;
        this._hideOnSinglePage = false;
        this._scroll = { x: null, y: null };
        this._pageIndex = 1;
        this._pageSize = 10;
        this._widthConfig = [];
        this._frontPagination = true;
        this._simple = false;
        /* tslint:disable-next-line:no-any */
        this.locale = {};
        this.el = this.elementRef.nativeElement;
        this.lastScrollLeft = 0;
        /* tslint:disable-next-line:no-any */
        this.rawData = [];
        /* tslint:disable-next-line:no-any */
        this.syncData = [];
        /**
         * public data for ngFor tr
         */
        this.data = [];
        this.isWidthConfigSet = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzCurrentPageDataChange = new EventEmitter();
        this.nzSize = 'default';
        /**
         * page size changer select values
         */
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzLoadingDelay = 0;
    }
    Object.defineProperty(NzTableComponent.prototype, "nzSimple", {
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
    Object.defineProperty(NzTableComponent.prototype, "nzFrontPagination", {
        get: /**
         * @return {?}
         */
        function () {
            return this._frontPagination;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._frontPagination = toBoolean(value);
            this.parseInputData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzWidthConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._widthConfig;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isWidthConfigSet = true;
            this._widthConfig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isTitleString = !(value instanceof TemplateRef);
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzFooter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._footer;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isFooterString = !(value instanceof TemplateRef);
            this._footer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzNoResult", {
        get: /**
         * @return {?}
         */
        function () {
            return this._noResult;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isNoResultString = !(value instanceof TemplateRef);
            this._noResult = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzBordered", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bordered;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bordered = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzShowPagination", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showPagination;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showPagination = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzShowSizeChanger", {
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
    Object.defineProperty(NzTableComponent.prototype, "nzHideOnSinglePage", {
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
    Object.defineProperty(NzTableComponent.prototype, "nzShowQuickJumper", {
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
    Object.defineProperty(NzTableComponent.prototype, "nzScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scroll;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._scroll = value;
            }
            else {
                this._scroll = { x: null, y: null };
            }
            this.cdr.detectChanges();
            this.setScrollPositionClassName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTableComponent.prototype, "nzData", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (Array.isArray(data)) {
                this.rawData = data;
                this.parseInputData();
            }
            else {
                console.warn('nzData only accept array');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTableComponent.prototype.parseInputData = /**
     * @return {?}
     */
    function () {
        if (this.nzFrontPagination) {
            this.syncData = this.rawData;
            this.nzTotal = this.syncData.length;
            this.checkPageIndexBounding();
            this.generateSyncDisplayData();
        }
        else {
            this.data = this.rawData;
            this.nzCurrentPageDataChange.emit(this.data);
        }
    };
    Object.defineProperty(NzTableComponent.prototype, "nzPageIndex", {
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
            this._pageIndex = value;
            if (this.nzFrontPagination) {
                this.generateSyncDisplayData();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    NzTableComponent.prototype.emitPageIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.nzPageIndex = index;
        this.nzPageIndexChange.emit(this.nzPageIndex);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    NzTableComponent.prototype.emitPageSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.nzPageSize = size;
        this.nzPageSizeChange.emit(this.nzPageSize);
    };
    Object.defineProperty(NzTableComponent.prototype, "nzPageSize", {
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
            if (this._pageSize === value) {
                return;
            }
            this._pageSize = value;
            if (this.nzFrontPagination) {
                this.checkPageIndexBounding();
                this.generateSyncDisplayData();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTableComponent.prototype.checkPageIndexBounding = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzFrontPagination) {
            /** @type {?} */
            var maxPageIndex = Math.ceil(this.syncData.length / this.nzPageSize);
            /** @type {?} */
            var pageIndex_1 = !this.nzPageIndex ? 1 : (this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex);
            if (pageIndex_1 !== this.nzPageIndex) {
                this._pageIndex = pageIndex_1;
                Promise.resolve().then(function () { return _this.nzPageIndexChange.emit(pageIndex_1); });
            }
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.generateSyncDisplayData = /**
     * @return {?}
     */
    function () {
        this.data = this.syncData.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        this.nzCurrentPageDataChange.emit(this.data);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTableComponent.prototype.syncScrollTable = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            var target = /** @type {?} */ (e.target);
            if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                if (target === this.tableBodyElement.nativeElement && this.tableHeaderElement) {
                    this.tableHeaderElement.nativeElement.scrollLeft = target.scrollLeft;
                }
                else if (target === this.tableHeaderElement.nativeElement && this.tableBodyElement) {
                    this.tableBodyElement.nativeElement.scrollLeft = target.scrollLeft;
                }
                this.setScrollPositionClassName();
            }
            this.lastScrollLeft = target.scrollLeft;
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.setScrollPositionClassName = /**
     * @return {?}
     */
    function () {
        if (this.tableBodyElement && this.nzScroll && this.nzScroll.x) {
            if ((this.tableBodyElement.nativeElement.scrollWidth === this.tableBodyElement.nativeElement.clientWidth) && (this.tableBodyElement.nativeElement.scrollWidth !== 0)) {
                this.setScrollName();
            }
            else if (this.tableBodyElement.nativeElement.scrollLeft === 0) {
                this.setScrollName('left');
            }
            else if (this.tableBodyElement.nativeElement.scrollWidth === (this.tableBodyElement.nativeElement.scrollLeft + this.tableBodyElement.nativeElement.clientWidth)) {
                this.setScrollName('right');
            }
            else {
                this.setScrollName('middle');
            }
        }
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    NzTableComponent.prototype.setScrollName = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        /** @type {?} */
        var prefix = 'ant-table-scroll-position';
        /** @type {?} */
        var classList = ['left', 'right', 'middle'];
        classList.forEach(function (name) {
            _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
        });
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.fitScrollBar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollbarWidth = this.nzMeasureScrollbarService.scrollBarWidth;
        if (scrollbarWidth) {
            this.headerBottomStyle = {
                marginBottom: "-" + scrollbarWidth + "px",
                paddingBottom: "0px"
            };
        }
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.fitScrollBar();
        this.setScrollPositionClassName();
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Table'); });
        this.fitScrollBar();
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.setScrollPositionClassName(); });
        this.ngZone.runOutsideAngular(function () {
            if (_this.tableHeaderElement
                && _this.tableHeaderElement.nativeElement
                && _this.tableBodyElement
                && _this.tableBodyElement.nativeElement) {
                merge(fromEvent(_this.tableHeaderElement.nativeElement, 'scroll'), fromEvent(_this.tableBodyElement.nativeElement, 'scroll')).pipe(takeUntil(_this.unsubscribe$)).subscribe(function (data) {
                    _this.syncScrollTable(data);
                });
            }
        });
    };
    /**
     * @return {?}
     */
    NzTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-table',
                    preserveWhitespaces: false,
                    template: "<ng-template #colGroupTemplate>\n  <colgroup *ngIf=\"!isWidthConfigSet\">\n    <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\n  </colgroup>\n  <colgroup *ngIf=\"isWidthConfigSet\">\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\n  </colgroup>\n</ng-template>\n<ng-template #tableInnerTemplate>\n  <div\n    #tableHeaderElement\n    *ngIf=\"nzScroll.x || nzScroll.y\"\n    class=\"ant-table-header\"\n    [ngStyle]=\"headerBottomStyle\">\n    <table\n      [class.ant-table-fixed]=\"nzScroll.x\"\n      [style.width]=\"nzScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\n      </thead>\n    </table>\n  </div>\n  <div\n    #tableBodyElement\n    class=\"ant-table-body\"\n    [style.maxHeight]=\"nzScroll.y\"\n    [style.overflow-y]=\"nzScroll.y?'scroll':''\"\n    [style.overflow-x]=\"nzScroll.x?'auto':''\">\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\n      </thead>\n      <ng-content></ng-content>\n    </table>\n  </div>\n  <div class=\"ant-table-placeholder\" *ngIf=\"(data.length==0)&&!nzLoading\">\n    <span *ngIf=\"!nzNoResult\">{{ locale.emptyText }}</span>\n    <ng-container *ngIf=\"nzNoResult\">\n      <ng-container *ngIf=\"isNoResultString; else noResultTemplate\">{{ nzNoResult }}</ng-container>\n      <ng-template #noResultTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzNoResult\"></ng-template>\n      </ng-template>\n    </ng-container>\n  </div>\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\n    <ng-container *ngIf=\"isFooterString; else footerTemplate\">{{ nzFooter }}</ng-container>\n    <ng-template #footerTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzFooter\"></ng-template>\n    </ng-template>\n  </div>\n</ng-template>\n<div\n  class=\"ant-table-wrapper\"\n  [class.ant-table-empty]=\"data.length==0\">\n  <nz-spin\n    [nzDelay]=\"nzLoadingDelay\"\n    [nzSpinning]=\"nzLoading\">\n    <div>\n      <div\n        class=\"ant-table\"\n        #tableMainElement\n        [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\n        [class.ant-table-bordered]=\"nzBordered\"\n        [class.ant-table-large]=\"nzSize=='default'\"\n        [class.ant-table-middle]=\"nzSize=='middle'\"\n        [class.ant-table-small]=\"nzSize=='small'\">\n        <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\n          <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n          <ng-template #titleTemplate>\n            <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n          </ng-template>\n        </div>\n        <div class=\"ant-table-content\">\n          <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\n            <div class=\"ant-table-scroll\">\n              <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <nz-pagination\n      *ngIf=\"nzShowPagination&&data.length\"\n      [nzInTable]=\"true\"\n      [nzShowSizeChanger]=\"nzShowSizeChanger\"\n      [nzPageSizeOptions]=\"nzPageSizeOptions\"\n      [nzShowQuickJumper]=\"nzShowQuickJumper\"\n      [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\n      [nzShowTotal]=\"nzShowTotal\"\n      [nzSize]=\"(nzSize=='middle'||nzSize=='small')?'small':''\"\n      [nzPageSize]=\"nzPageSize\"\n      (nzPageSizeChange)=\"emitPageSize($event)\"\n      [nzTotal]=\"nzTotal\"\n      [nzSimple]=\"nzSimple\"\n      [nzPageIndex]=\"nzPageIndex\"\n      (nzPageIndexChange)=\"emitPageIndex($event)\">\n    </nz-pagination>\n  </nz-spin>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzTableComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NgZone },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzMeasureScrollbarService },
        { type: NzI18nService }
    ]; };
    NzTableComponent.propDecorators = {
        tableHeaderElement: [{ type: ViewChild, args: ['tableHeaderElement',] }],
        tableBodyElement: [{ type: ViewChild, args: ['tableBodyElement',] }],
        tableMainElement: [{ type: ViewChild, args: ['tableMainElement',] }],
        listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
        nzPageSizeChange: [{ type: Output }],
        nzPageIndexChange: [{ type: Output }],
        nzShowTotal: [{ type: Input }],
        nzCurrentPageDataChange: [{ type: Output }],
        nzSize: [{ type: Input }],
        nzPageSizeOptions: [{ type: Input }],
        nzLoadingDelay: [{ type: Input }],
        nzTotal: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzFrontPagination: [{ type: Input }],
        nzWidthConfig: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzNoResult: [{ type: Input }],
        nzBordered: [{ type: Input }],
        nzShowPagination: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzShowSizeChanger: [{ type: Input }],
        nzHideOnSinglePage: [{ type: Input }],
        nzShowQuickJumper: [{ type: Input }],
        nzScroll: [{ type: Input }],
        nzData: [{ type: Input }],
        nzPageIndex: [{ type: Input }],
        nzPageSize: [{ type: Input }],
        onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return NzTableComponent;
}());
export { NzTableComponent };
function NzTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTableComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTableComponent.prototype._bordered;
    /** @type {?} */
    NzTableComponent.prototype._showPagination;
    /** @type {?} */
    NzTableComponent.prototype._loading;
    /** @type {?} */
    NzTableComponent.prototype._showSizeChanger;
    /** @type {?} */
    NzTableComponent.prototype._showQuickJumper;
    /** @type {?} */
    NzTableComponent.prototype._hideOnSinglePage;
    /** @type {?} */
    NzTableComponent.prototype._scroll;
    /** @type {?} */
    NzTableComponent.prototype._footer;
    /** @type {?} */
    NzTableComponent.prototype._title;
    /** @type {?} */
    NzTableComponent.prototype._noResult;
    /** @type {?} */
    NzTableComponent.prototype._pageIndex;
    /** @type {?} */
    NzTableComponent.prototype._pageSize;
    /** @type {?} */
    NzTableComponent.prototype._widthConfig;
    /** @type {?} */
    NzTableComponent.prototype._frontPagination;
    /** @type {?} */
    NzTableComponent.prototype._simple;
    /** @type {?} */
    NzTableComponent.prototype.locale;
    /** @type {?} */
    NzTableComponent.prototype.nzTheadComponent;
    /** @type {?} */
    NzTableComponent.prototype.isFooterString;
    /** @type {?} */
    NzTableComponent.prototype.isTitleString;
    /** @type {?} */
    NzTableComponent.prototype.isNoResultString;
    /** @type {?} */
    NzTableComponent.prototype.el;
    /** @type {?} */
    NzTableComponent.prototype.lastScrollLeft;
    /** @type {?} */
    NzTableComponent.prototype.rawData;
    /** @type {?} */
    NzTableComponent.prototype.syncData;
    /**
     * public data for ngFor tr
     * @type {?}
     */
    NzTableComponent.prototype.data;
    /** @type {?} */
    NzTableComponent.prototype.headerBottomStyle;
    /** @type {?} */
    NzTableComponent.prototype.isWidthConfigSet;
    /** @type {?} */
    NzTableComponent.prototype.tableHeaderElement;
    /** @type {?} */
    NzTableComponent.prototype.tableBodyElement;
    /** @type {?} */
    NzTableComponent.prototype.tableMainElement;
    /** @type {?} */
    NzTableComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzTableComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzCurrentPageDataChange;
    /** @type {?} */
    NzTableComponent.prototype.nzSize;
    /**
     * page size changer select values
     * @type {?}
     */
    NzTableComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingDelay;
    /** @type {?} */
    NzTableComponent.prototype.nzTotal;
    /** @type {?} */
    NzTableComponent.prototype.renderer;
    /** @type {?} */
    NzTableComponent.prototype.ngZone;
    /** @type {?} */
    NzTableComponent.prototype.elementRef;
    /** @type {?} */
    NzTableComponent.prototype.cdr;
    /** @type {?} */
    NzTableComponent.prototype.nzMeasureScrollbarService;
    /** @type {?} */
    NzTableComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUE4VmhELDBCQUFvQixRQUFtQixFQUFVLE1BQWMsRUFBVSxVQUFzQixFQUFVLEdBQXNCLEVBQVUseUJBQW9ELEVBQVUsSUFBbUI7UUFBdE0sYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTs0QkFyVm5NLElBQUksT0FBTyxFQUFRO3lCQUN0QixLQUFL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QUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO21DQUVwRCxNQUFNO29DQUNOLE1BQU07OEJBQ04sS0FBSzswQ0FHTCxNQUFNO3lCQUNOLEtBQUs7b0NBRUwsS0FBSztpQ0FDTCxLQUFLOzBCQUNMLEtBQUs7MkJBRUwsS0FBSztvQ0FTTCxLQUFLO2dDQVVMLEtBQUs7MEJBVUwsS0FBSzsyQkFVTCxLQUFLOzZCQVVMLEtBQUs7NkJBVUwsS0FBSzttQ0FTTCxLQUFLOzRCQVNMLEtBQUs7b0NBU0wsS0FBSztxQ0FTTCxLQUFLO29DQVNMLEtBQUs7MkJBU0wsS0FBSzt5QkFlTCxLQUFLOzhCQXVCTCxLQUFLOzZCQXlCTCxLQUFLO2lDQWtGTCxZQUFZLFNBQUMsZUFBZTs7MkJBeFYvQjs7U0FtQ2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvbnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10YWJsZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9ib3JkZXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dRdWlja0p1bXBlciA9IGZhbHNlO1xuICBwcml2YXRlIF9oaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XG4gIHByaXZhdGUgX3Njcm9sbDogeyB4OiBzdHJpbmc7IHk6IHN0cmluZyB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG4gIHByaXZhdGUgX2Zvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9wYWdlSW5kZXggPSAxO1xuICBwcml2YXRlIF9wYWdlU2l6ZSA9IDEwO1xuICBwcml2YXRlIF93aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBfZnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfc2ltcGxlID0gZmFsc2U7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgbnpUaGVhZENvbXBvbmVudDogTnpUaGVhZENvbXBvbmVudDtcbiAgaXNGb290ZXJTdHJpbmc6IGJvb2xlYW47XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG4gIGlzTm9SZXN1bHRTdHJpbmc6IGJvb2xlYW47XG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBsYXN0U2Nyb2xsTGVmdCA9IDA7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcmF3RGF0YTogYW55W10gPSBbXTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzeW5jRGF0YTogYW55W10gPSBbXTtcbiAgLyoqIHB1YmxpYyBkYXRhIGZvciBuZ0ZvciB0ciAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGRhdGE6IGFueVtdID0gW107XG4gIGhlYWRlckJvdHRvbVN0eWxlO1xuICBpc1dpZHRoQ29uZmlnU2V0ID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlSGVhZGVyRWxlbWVudCcpIHRhYmxlSGVhZGVyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVCb2R5RWxlbWVudCcpIHRhYmxlQm9keUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlTWFpbkVsZW1lbnQnKSB0YWJsZU1haW5FbGVtZW50OiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKE56VGhDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpUaENvbXBvbmVudDogUXVlcnlMaXN0PE56VGhDb21wb25lbnQ+O1xuXG4gIEBPdXRwdXQoKSBuelBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgbnpTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIsIHJhbmdlOiBbIG51bWJlciwgbnVtYmVyIF0gfT47XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgbnpDdXJyZW50UGFnZURhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG56U2l6ZTogc3RyaW5nID0gJ2RlZmF1bHQnO1xuICAvKiogcGFnZSBzaXplIGNoYW5nZXIgc2VsZWN0IHZhbHVlcyAqL1xuICBASW5wdXQoKSBuelBhZ2VTaXplT3B0aW9ucyA9IFsgMTAsIDIwLCAzMCwgNDAsIDUwIF07XG4gIEBJbnB1dCgpIG56TG9hZGluZ0RlbGF5ID0gMDtcbiAgQElucHV0KCkgbnpUb3RhbDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpbXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NpbXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaW1wbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZyb250UGFnaW5hdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zyb250UGFnaW5hdGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5wYXJzZUlucHV0RGF0YSgpO1xuICB9XG5cbiAgZ2V0IG56RnJvbnRQYWdpbmF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mcm9udFBhZ2luYXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpXaWR0aENvbmZpZyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLmlzV2lkdGhDb25maWdTZXQgPSB0cnVlO1xuICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpXaWR0aENvbmZpZygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoQ29uZmlnO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZvb3Rlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzRm9vdGVyU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9mb290ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekZvb3RlcigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvb3RlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek5vUmVzdWx0KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNOb1Jlc3VsdFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fbm9SZXN1bHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuek5vUmVzdWx0KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbm9SZXN1bHQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpCb3JkZXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2JvcmRlcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekJvcmRlcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ib3JkZXJlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dQYWdpbmF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1BhZ2luYXRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1BhZ2luYXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQYWdpbmF0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56TG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dTaXplQ2hhbmdlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dTaXplQ2hhbmdlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93U2l6ZUNoYW5nZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTaXplQ2hhbmdlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekhpZGVPblNpbmdsZVBhZ2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlT25TaW5nbGVQYWdlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekhpZGVPblNpbmdsZVBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVPblNpbmdsZVBhZ2U7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93UXVpY2tKdW1wZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UXVpY2tKdW1wZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1F1aWNrSnVtcGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UXVpY2tKdW1wZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTY3JvbGwodmFsdWU6IHsgeDogc3RyaW5nOyB5OiBzdHJpbmcgfSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3Njcm9sbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zY3JvbGwgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcbiAgfVxuXG4gIGdldCBuelNjcm9sbCgpOiB7IHg6IHN0cmluZzsgeTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGw7XG4gIH1cblxuICBASW5wdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHNldCBuekRhdGEoZGF0YTogYW55W10pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgdGhpcy5yYXdEYXRhID0gZGF0YTtcbiAgICAgIHRoaXMucGFyc2VJbnB1dERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCduekRhdGEgb25seSBhY2NlcHQgYXJyYXknKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZUlucHV0RGF0YSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekZyb250UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5zeW5jRGF0YSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIHRoaXMubnpUb3RhbCA9IHRoaXMuc3luY0RhdGEubGVuZ3RoO1xuICAgICAgdGhpcy5jaGVja1BhZ2VJbmRleEJvdW5kaW5nKCk7XG4gICAgICB0aGlzLmdlbmVyYXRlU3luY0Rpc3BsYXlEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIHRoaXMubnpDdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3BhZ2VJbmRleCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcGFnZUluZGV4ID0gdmFsdWU7XG4gICAgaWYgKHRoaXMubnpGcm9udFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQYWdlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUluZGV4O1xuICB9XG5cbiAgZW1pdFBhZ2VJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uelBhZ2VJbmRleCA9IGluZGV4O1xuICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcbiAgfVxuXG4gIGVtaXRQYWdlU2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm56UGFnZVNpemUgPSBzaXplO1xuICAgIHRoaXMubnpQYWdlU2l6ZUNoYW5nZS5lbWl0KHRoaXMubnpQYWdlU2l6ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3BhZ2VTaXplID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLm56RnJvbnRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLmNoZWNrUGFnZUluZGV4Qm91bmRpbmcoKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIGNoZWNrUGFnZUluZGV4Qm91bmRpbmcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpGcm9udFBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbCh0aGlzLnN5bmNEYXRhLmxlbmd0aCAvIHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgICBjb25zdCBwYWdlSW5kZXggPSAhdGhpcy5uelBhZ2VJbmRleCA/IDEgOiAodGhpcy5uelBhZ2VJbmRleCA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHRoaXMubnpQYWdlSW5kZXgpO1xuICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCkge1xuICAgICAgICB0aGlzLl9wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHBhZ2VJbmRleCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlU3luY0Rpc3BsYXlEYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuc3luY0RhdGEuc2xpY2UoKHRoaXMubnpQYWdlSW5kZXggLSAxKSAqIHRoaXMubnpQYWdlU2l6ZSwgdGhpcy5uelBhZ2VJbmRleCAqIHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgdGhpcy5uekN1cnJlbnRQYWdlRGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBzeW5jU2Nyb2xsVGFibGUoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT09IGUudGFyZ2V0KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0YXJnZXQuc2Nyb2xsTGVmdCAhPT0gdGhpcy5sYXN0U2Nyb2xsTGVmdCAmJiB0aGlzLm56U2Nyb2xsICYmIHRoaXMubnpTY3JvbGwueCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCAmJiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudCAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfVxuXG4gIHNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQgJiYgdGhpcy5uelNjcm9sbCAmJiB0aGlzLm56U2Nyb2xsLngpIHtcbiAgICAgIGlmICgodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggPT09IHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAmJiAodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggIT09IDApKSB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgnbGVmdCcpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA9PT0gKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgKyB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkpIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdyaWdodCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdtaWRkbGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRTY3JvbGxOYW1lKHBvc2l0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC10YWJsZS1zY3JvbGwtcG9zaXRpb24nO1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IFsgJ2xlZnQnLCAncmlnaHQnLCAnbWlkZGxlJyBdO1xuICAgIGNsYXNzTGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7cHJlZml4fS0ke25hbWV9YCk7XG4gICAgfSk7XG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtwcmVmaXh9LSR7cG9zaXRpb259YCk7XG4gICAgfVxuICB9XG5cbiAgZml0U2Nyb2xsQmFyKCk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5uek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLnNjcm9sbEJhcldpZHRoO1xuICAgIGlmIChzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgdGhpcy5oZWFkZXJCb3R0b21TdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luQm90dG9tIDogYC0ke3Njcm9sbGJhcldpZHRofXB4YCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogYDBweGBcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uV2luZG93UmVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuZml0U2Nyb2xsQmFyKCk7XG4gICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpKTtcbiAgICB0aGlzLmZpdFNjcm9sbEJhcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy50YWJsZUhlYWRlckVsZW1lbnRcbiAgICAgICAgJiYgdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnRcbiAgICAgICAgJiYgdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgZnJvbUV2ZW50KHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKSxcbiAgICAgICAgICBmcm9tRXZlbnQodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuICAgICAgICApLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKChkYXRhOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5zeW5jU2Nyb2xsVGFibGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2U6IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge1xuICB9XG59XG4iXX0=