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
export class NzTableComponent {
    /**
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} nzMeasureScrollbarService
     * @param {?} i18n
     */
    constructor(renderer, ngZone, elementRef, cdr, nzMeasureScrollbarService, i18n) {
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
     * @param {?} value
     * @return {?}
     */
    set nzFrontPagination(value) {
        this._frontPagination = toBoolean(value);
        this.parseInputData();
    }
    /**
     * @return {?}
     */
    get nzFrontPagination() {
        return this._frontPagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzWidthConfig(value) {
        this.isWidthConfigSet = true;
        this._widthConfig = value;
    }
    /**
     * @return {?}
     */
    get nzWidthConfig() {
        return this._widthConfig;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
    /**
     * @return {?}
     */
    get nzTitle() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFooter(value) {
        this.isFooterString = !(value instanceof TemplateRef);
        this._footer = value;
    }
    /**
     * @return {?}
     */
    get nzFooter() {
        return this._footer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzNoResult(value) {
        this.isNoResultString = !(value instanceof TemplateRef);
        this._noResult = value;
    }
    /**
     * @return {?}
     */
    get nzNoResult() {
        return this._noResult;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzBordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzBordered() {
        return this._bordered;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowPagination(value) {
        this._showPagination = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowPagination() {
        return this._showPagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLoading(value) {
        this._loading = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzLoading() {
        return this._loading;
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
    set nzScroll(value) {
        if (isNotNil(value)) {
            this._scroll = value;
        }
        else {
            this._scroll = { x: null, y: null };
        }
        this.cdr.detectChanges();
        this.setScrollPositionClassName();
    }
    /**
     * @return {?}
     */
    get nzScroll() {
        return this._scroll;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set nzData(data) {
        if (Array.isArray(data)) {
            this.rawData = data;
            this.parseInputData();
        }
        else {
            console.warn('nzData only accept array');
        }
    }
    /**
     * @return {?}
     */
    parseInputData() {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPageIndex(value) {
        if (this._pageIndex === value) {
            return;
        }
        this._pageIndex = value;
        if (this.nzFrontPagination) {
            this.generateSyncDisplayData();
        }
    }
    /**
     * @return {?}
     */
    get nzPageIndex() {
        return this._pageIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    emitPageIndex(index) {
        this.nzPageIndex = index;
        this.nzPageIndexChange.emit(this.nzPageIndex);
    }
    /**
     * @param {?} size
     * @return {?}
     */
    emitPageSize(size) {
        this.nzPageSize = size;
        this.nzPageSizeChange.emit(this.nzPageSize);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPageSize(value) {
        if (this._pageSize === value) {
            return;
        }
        this._pageSize = value;
        if (this.nzFrontPagination) {
            this.checkPageIndexBounding();
            this.generateSyncDisplayData();
        }
    }
    /**
     * @return {?}
     */
    get nzPageSize() {
        return this._pageSize;
    }
    /**
     * @return {?}
     */
    checkPageIndexBounding() {
        if (this.nzFrontPagination) {
            /** @type {?} */
            const maxPageIndex = Math.ceil(this.syncData.length / this.nzPageSize);
            /** @type {?} */
            const pageIndex = !this.nzPageIndex ? 1 : (this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex);
            if (pageIndex !== this.nzPageIndex) {
                this._pageIndex = pageIndex;
                Promise.resolve().then(() => this.nzPageIndexChange.emit(pageIndex));
            }
        }
    }
    /**
     * @return {?}
     */
    generateSyncDisplayData() {
        this.data = this.syncData.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        this.nzCurrentPageDataChange.emit(this.data);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    syncScrollTable(e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            const target = /** @type {?} */ (e.target);
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
    }
    /**
     * @return {?}
     */
    setScrollPositionClassName() {
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
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    setScrollName(position) {
        /** @type {?} */
        const prefix = 'ant-table-scroll-position';
        /** @type {?} */
        const classList = ['left', 'right', 'middle'];
        classList.forEach(name => {
            this.renderer.removeClass(this.tableMainElement.nativeElement, `${prefix}-${name}`);
        });
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, `${prefix}-${position}`);
        }
    }
    /**
     * @return {?}
     */
    fitScrollBar() {
        /** @type {?} */
        const scrollbarWidth = this.nzMeasureScrollbarService.scrollBarWidth;
        if (scrollbarWidth) {
            this.headerBottomStyle = {
                marginBottom: `-${scrollbarWidth}px`,
                paddingBottom: `0px`
            };
        }
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        this.fitScrollBar();
        this.setScrollPositionClassName();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Table'));
        this.fitScrollBar();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => this.setScrollPositionClassName());
        this.ngZone.runOutsideAngular(() => {
            if (this.tableHeaderElement
                && this.tableHeaderElement.nativeElement
                && this.tableBodyElement
                && this.tableBodyElement.nativeElement) {
                merge(fromEvent(this.tableHeaderElement.nativeElement, 'scroll'), fromEvent(this.tableBodyElement.nativeElement, 'scroll')).pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
                    this.syncScrollTable(data);
                });
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-table',
                preserveWhitespaces: false,
                template: "<ng-template #colGroupTemplate>\n  <colgroup *ngIf=\"!isWidthConfigSet\">\n    <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\n  </colgroup>\n  <colgroup *ngIf=\"isWidthConfigSet\">\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\n  </colgroup>\n</ng-template>\n<ng-template #tableInnerTemplate>\n  <div\n    #tableHeaderElement\n    *ngIf=\"nzScroll.x || nzScroll.y\"\n    class=\"ant-table-header\"\n    [ngStyle]=\"headerBottomStyle\">\n    <table\n      [class.ant-table-fixed]=\"nzScroll.x\"\n      [style.width]=\"nzScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\n      </thead>\n    </table>\n  </div>\n  <div\n    #tableBodyElement\n    class=\"ant-table-body\"\n    [style.maxHeight]=\"nzScroll.y\"\n    [style.overflow-y]=\"nzScroll.y?'scroll':''\"\n    [style.overflow-x]=\"nzScroll.x?'auto':''\">\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\n      </thead>\n      <ng-content></ng-content>\n    </table>\n  </div>\n  <div class=\"ant-table-placeholder\" *ngIf=\"(data.length==0)&&!nzLoading\">\n    <span *ngIf=\"!nzNoResult\">{{ locale.emptyText }}</span>\n    <ng-container *ngIf=\"nzNoResult\">\n      <ng-container *ngIf=\"isNoResultString; else noResultTemplate\">{{ nzNoResult }}</ng-container>\n      <ng-template #noResultTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzNoResult\"></ng-template>\n      </ng-template>\n    </ng-container>\n  </div>\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\n    <ng-container *ngIf=\"isFooterString; else footerTemplate\">{{ nzFooter }}</ng-container>\n    <ng-template #footerTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzFooter\"></ng-template>\n    </ng-template>\n  </div>\n</ng-template>\n<div\n  class=\"ant-table-wrapper\"\n  [class.ant-table-empty]=\"data.length==0\">\n  <nz-spin\n    [nzDelay]=\"nzLoadingDelay\"\n    [nzSpinning]=\"nzLoading\">\n    <div>\n      <div\n        class=\"ant-table\"\n        #tableMainElement\n        [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\n        [class.ant-table-bordered]=\"nzBordered\"\n        [class.ant-table-large]=\"nzSize=='default'\"\n        [class.ant-table-middle]=\"nzSize=='middle'\"\n        [class.ant-table-small]=\"nzSize=='small'\">\n        <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\n          <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n          <ng-template #titleTemplate>\n            <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n          </ng-template>\n        </div>\n        <div class=\"ant-table-content\">\n          <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\n            <div class=\"ant-table-scroll\">\n              <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <nz-pagination\n      *ngIf=\"nzShowPagination&&data.length\"\n      [nzInTable]=\"true\"\n      [nzShowSizeChanger]=\"nzShowSizeChanger\"\n      [nzPageSizeOptions]=\"nzPageSizeOptions\"\n      [nzShowQuickJumper]=\"nzShowQuickJumper\"\n      [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\n      [nzShowTotal]=\"nzShowTotal\"\n      [nzSize]=\"(nzSize=='middle'||nzSize=='small')?'small':''\"\n      [nzPageSize]=\"nzPageSize\"\n      (nzPageSizeChange)=\"emitPageSize($event)\"\n      [nzTotal]=\"nzTotal\"\n      [nzSimple]=\"nzSimple\"\n      [nzPageIndex]=\"nzPageIndex\"\n      (nzPageIndexChange)=\"emitPageIndex($event)\">\n    </nz-pagination>\n  </nz-spin>\n</div>"
            }] }
];
/** @nocollapse */
NzTableComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzMeasureScrollbarService },
    { type: NzI18nService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVFsRCxNQUFNOzs7Ozs7Ozs7SUFzVkosWUFBb0IsUUFBbUIsRUFBVSxNQUFjLEVBQVUsVUFBc0IsRUFBVSxHQUFzQixFQUFVLHlCQUFvRCxFQUFVLElBQW1CO1FBQXRNLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7NEJBclZuTSxJQUFJLE9BQU8sRUFBUTt5QkFDdEIsS0FBSzsrQkFDQyxJQUFJO3dCQUNYLEtBQUs7Z0NBQ0csS0FBSztnQ0FDTCxLQUFLO2lDQUNKLEtBQUs7dUJBQ1csRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUU7MEJBSTNDLENBQUM7eUJBQ0YsRUFBRTs0QkFDVyxFQUFFO2dDQUNSLElBQUk7dUJBQ2IsS0FBSzs7c0JBRVQsRUFBRTtrQkFLRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7OEJBQzlCLENBQUM7O3VCQUVELEVBQUU7O3dCQUVELEVBQUU7Ozs7b0JBR04sRUFBRTtnQ0FFRyxLQUFLO2dDQU0yQixJQUFJLFlBQVksRUFBRTtpQ0FDakIsSUFBSSxZQUFZLEVBQUU7O3VDQUliLElBQUksWUFBWSxFQUFFO3NCQUNqRCxTQUFTOzs7O2lDQUVOLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRTs4QkFDekIsQ0FBQztLQXVTMUI7Ozs7O0lBcFNELElBQ0ksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFDSSxpQkFBaUIsQ0FBQyxLQUFjO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDOUI7Ozs7O0lBRUQsSUFDSSxhQUFhLENBQUMsS0FBZTtRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0tBQzNCOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7OztJQUVELElBQ0ksT0FBTyxDQUFDLEtBQWlDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUNyQjs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFpQztRQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBaUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDeEI7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUNJLGdCQUFnQixDQUFDLEtBQWM7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekM7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7S0FDN0I7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxJQUNJLGlCQUFpQixDQUFDLEtBQWM7UUFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQzs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCOzs7OztJQUVELElBQ0ksa0JBQWtCLENBQUMsS0FBYztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNDOzs7O0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7S0FDL0I7Ozs7O0lBRUQsSUFDSSxpQkFBaUIsQ0FBQyxLQUFjO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUErQjtRQUMxQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztLQUNuQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7SUFFRCxJQUVJLE1BQU0sQ0FBQyxJQUFXO1FBQ3BCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUMxQztLQUNGOzs7O0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7S0FDRjs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLLEVBQUU7WUFDN0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7S0FDRjs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMvQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUM3Qzs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFhO1FBQzFCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEM7S0FDRjs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7OztJQUVELHNCQUFzQjtRQUNwQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTs7WUFDMUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O1lBQ3ZFLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5RyxJQUFJLFNBQVMsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDdEU7U0FDRjtLQUNGOzs7O0lBRUQsdUJBQXVCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUM7Ozs7O0lBRUQsZUFBZSxDQUFDLENBQWE7UUFDM0IsSUFBSSxDQUFDLENBQUMsYUFBYSxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7O1lBQ2hDLE1BQU0sTUFBTSxxQkFBRyxDQUFDLENBQUMsTUFBcUIsRUFBQztZQUN2QyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO2dCQUNqRixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDN0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztpQkFDdEU7cUJBQU0sSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3BGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7aUJBQ3BFO2dCQUNELElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3pDO0tBQ0Y7Ozs7SUFFRCwwQkFBMEI7UUFDeEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNwSyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7aUJBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2pLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QjtTQUNGO0tBQ0Y7Ozs7O0lBRUQsYUFBYSxDQUFDLFFBQWlCOztRQUM3QixNQUFNLE1BQU0sR0FBRywyQkFBMkIsQ0FBQzs7UUFDM0MsTUFBTSxTQUFTLEdBQUcsQ0FBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGLENBQUMsQ0FBQztRQUNILElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxHQUFHLE1BQU0sSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3RGO0tBQ0Y7Ozs7SUFFRCxZQUFZOztRQUNWLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUM7UUFDckUsSUFBSSxjQUFjLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHO2dCQUN2QixZQUFZLEVBQUcsSUFBSSxjQUFjLElBQUk7Z0JBQ3JDLGFBQWEsRUFBRSxLQUFLO2FBQ3JCLENBQUM7U0FDSDtLQUNGOzs7O0lBR0QsY0FBYztRQUNaLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztLQUNuQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUgsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLGtCQUFrQjttQkFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWE7bUJBQ3JDLElBQUksQ0FBQyxnQkFBZ0I7bUJBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7Z0JBQ3hDLEtBQUssQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsRUFDMUQsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQ3pELENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7b0JBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzVCLENBQUMsQ0FBQzthQUNKO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOzs7WUF6VkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxVQUFVO2dCQUMvQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixpaElBQWdEO2FBQ2pEOzs7O1lBcEJDLFNBQVM7WUFMVCxNQUFNO1lBSk4sVUFBVTtZQUhWLGlCQUFpQjtZQW9CVix5QkFBeUI7WUFHekIsYUFBYTs7O2lDQTRDbkIsU0FBUyxTQUFDLG9CQUFvQjsrQkFDOUIsU0FBUyxTQUFDLGtCQUFrQjsrQkFDNUIsU0FBUyxTQUFDLGtCQUFrQjtrQ0FDNUIsZUFBZSxTQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7K0JBRXBELE1BQU07Z0NBQ04sTUFBTTswQkFDTixLQUFLO3NDQUdMLE1BQU07cUJBQ04sS0FBSztnQ0FFTCxLQUFLOzZCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFFTCxLQUFLO2dDQVNMLEtBQUs7NEJBVUwsS0FBSztzQkFVTCxLQUFLO3VCQVVMLEtBQUs7eUJBVUwsS0FBSzt5QkFVTCxLQUFLOytCQVNMLEtBQUs7d0JBU0wsS0FBSztnQ0FTTCxLQUFLO2lDQVNMLEtBQUs7Z0NBU0wsS0FBSzt1QkFTTCxLQUFLO3FCQWVMLEtBQUs7MEJBdUJMLEtBQUs7eUJBeUJMLEtBQUs7NkJBa0ZMLFlBQVksU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvbnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10YWJsZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9ib3JkZXJlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dRdWlja0p1bXBlciA9IGZhbHNlO1xuICBwcml2YXRlIF9oaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XG4gIHByaXZhdGUgX3Njcm9sbDogeyB4OiBzdHJpbmc7IHk6IHN0cmluZyB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG4gIHByaXZhdGUgX2Zvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9wYWdlSW5kZXggPSAxO1xuICBwcml2YXRlIF9wYWdlU2l6ZSA9IDEwO1xuICBwcml2YXRlIF93aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBfZnJvbnRQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfc2ltcGxlID0gZmFsc2U7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgbnpUaGVhZENvbXBvbmVudDogTnpUaGVhZENvbXBvbmVudDtcbiAgaXNGb290ZXJTdHJpbmc6IGJvb2xlYW47XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG4gIGlzTm9SZXN1bHRTdHJpbmc6IGJvb2xlYW47XG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBsYXN0U2Nyb2xsTGVmdCA9IDA7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgcmF3RGF0YTogYW55W10gPSBbXTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzeW5jRGF0YTogYW55W10gPSBbXTtcbiAgLyoqIHB1YmxpYyBkYXRhIGZvciBuZ0ZvciB0ciAqL1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGRhdGE6IGFueVtdID0gW107XG4gIGhlYWRlckJvdHRvbVN0eWxlO1xuICBpc1dpZHRoQ29uZmlnU2V0ID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlSGVhZGVyRWxlbWVudCcpIHRhYmxlSGVhZGVyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVCb2R5RWxlbWVudCcpIHRhYmxlQm9keUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlTWFpbkVsZW1lbnQnKSB0YWJsZU1haW5FbGVtZW50OiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKE56VGhDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpUaENvbXBvbmVudDogUXVlcnlMaXN0PE56VGhDb21wb25lbnQ+O1xuXG4gIEBPdXRwdXQoKSBuelBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgbnpTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIsIHJhbmdlOiBbIG51bWJlciwgbnVtYmVyIF0gfT47XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgbnpDdXJyZW50UGFnZURhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG56U2l6ZTogc3RyaW5nID0gJ2RlZmF1bHQnO1xuICAvKiogcGFnZSBzaXplIGNoYW5nZXIgc2VsZWN0IHZhbHVlcyAqL1xuICBASW5wdXQoKSBuelBhZ2VTaXplT3B0aW9ucyA9IFsgMTAsIDIwLCAzMCwgNDAsIDUwIF07XG4gIEBJbnB1dCgpIG56TG9hZGluZ0RlbGF5ID0gMDtcbiAgQElucHV0KCkgbnpUb3RhbDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpbXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NpbXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaW1wbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZyb250UGFnaW5hdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Zyb250UGFnaW5hdGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5wYXJzZUlucHV0RGF0YSgpO1xuICB9XG5cbiAgZ2V0IG56RnJvbnRQYWdpbmF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mcm9udFBhZ2luYXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpXaWR0aENvbmZpZyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLmlzV2lkdGhDb25maWdTZXQgPSB0cnVlO1xuICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpXaWR0aENvbmZpZygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoQ29uZmlnO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZvb3Rlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzRm9vdGVyU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9mb290ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekZvb3RlcigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvb3RlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek5vUmVzdWx0KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNOb1Jlc3VsdFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fbm9SZXN1bHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuek5vUmVzdWx0KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbm9SZXN1bHQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpCb3JkZXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2JvcmRlcmVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekJvcmRlcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ib3JkZXJlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dQYWdpbmF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1BhZ2luYXRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1BhZ2luYXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQYWdpbmF0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56TG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dTaXplQ2hhbmdlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dTaXplQ2hhbmdlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93U2l6ZUNoYW5nZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTaXplQ2hhbmdlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekhpZGVPblNpbmdsZVBhZ2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlT25TaW5nbGVQYWdlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekhpZGVPblNpbmdsZVBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVPblNpbmdsZVBhZ2U7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93UXVpY2tKdW1wZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UXVpY2tKdW1wZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1F1aWNrSnVtcGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UXVpY2tKdW1wZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTY3JvbGwodmFsdWU6IHsgeDogc3RyaW5nOyB5OiBzdHJpbmcgfSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3Njcm9sbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zY3JvbGwgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcbiAgfVxuXG4gIGdldCBuelNjcm9sbCgpOiB7IHg6IHN0cmluZzsgeTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGw7XG4gIH1cblxuICBASW5wdXQoKVxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHNldCBuekRhdGEoZGF0YTogYW55W10pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgdGhpcy5yYXdEYXRhID0gZGF0YTtcbiAgICAgIHRoaXMucGFyc2VJbnB1dERhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCduekRhdGEgb25seSBhY2NlcHQgYXJyYXknKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZUlucHV0RGF0YSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekZyb250UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5zeW5jRGF0YSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIHRoaXMubnpUb3RhbCA9IHRoaXMuc3luY0RhdGEubGVuZ3RoO1xuICAgICAgdGhpcy5jaGVja1BhZ2VJbmRleEJvdW5kaW5nKCk7XG4gICAgICB0aGlzLmdlbmVyYXRlU3luY0Rpc3BsYXlEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMucmF3RGF0YTtcbiAgICAgIHRoaXMubnpDdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3BhZ2VJbmRleCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcGFnZUluZGV4ID0gdmFsdWU7XG4gICAgaWYgKHRoaXMubnpGcm9udFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQYWdlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUluZGV4O1xuICB9XG5cbiAgZW1pdFBhZ2VJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uelBhZ2VJbmRleCA9IGluZGV4O1xuICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcbiAgfVxuXG4gIGVtaXRQYWdlU2l6ZShzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm56UGFnZVNpemUgPSBzaXplO1xuICAgIHRoaXMubnpQYWdlU2l6ZUNoYW5nZS5lbWl0KHRoaXMubnpQYWdlU2l6ZSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3BhZ2VTaXplID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLm56RnJvbnRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLmNoZWNrUGFnZUluZGV4Qm91bmRpbmcoKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIGNoZWNrUGFnZUluZGV4Qm91bmRpbmcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpGcm9udFBhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbCh0aGlzLnN5bmNEYXRhLmxlbmd0aCAvIHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgICBjb25zdCBwYWdlSW5kZXggPSAhdGhpcy5uelBhZ2VJbmRleCA/IDEgOiAodGhpcy5uelBhZ2VJbmRleCA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHRoaXMubnpQYWdlSW5kZXgpO1xuICAgICAgaWYgKHBhZ2VJbmRleCAhPT0gdGhpcy5uelBhZ2VJbmRleCkge1xuICAgICAgICB0aGlzLl9wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5uelBhZ2VJbmRleENoYW5nZS5lbWl0KHBhZ2VJbmRleCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlU3luY0Rpc3BsYXlEYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuc3luY0RhdGEuc2xpY2UoKHRoaXMubnpQYWdlSW5kZXggLSAxKSAqIHRoaXMubnpQYWdlU2l6ZSwgdGhpcy5uelBhZ2VJbmRleCAqIHRoaXMubnpQYWdlU2l6ZSk7XG4gICAgdGhpcy5uekN1cnJlbnRQYWdlRGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG4gIH1cblxuICBzeW5jU2Nyb2xsVGFibGUoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQgPT09IGUudGFyZ2V0KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0YXJnZXQuc2Nyb2xsTGVmdCAhPT0gdGhpcy5sYXN0U2Nyb2xsTGVmdCAmJiB0aGlzLm56U2Nyb2xsICYmIHRoaXMubnpTY3JvbGwueCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCAmJiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudCAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfVxuXG4gIHNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQgJiYgdGhpcy5uelNjcm9sbCAmJiB0aGlzLm56U2Nyb2xsLngpIHtcbiAgICAgIGlmICgodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggPT09IHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSAmJiAodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggIT09IDApKSB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgnbGVmdCcpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA9PT0gKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgKyB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkpIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdyaWdodCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdtaWRkbGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRTY3JvbGxOYW1lKHBvc2l0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcHJlZml4ID0gJ2FudC10YWJsZS1zY3JvbGwtcG9zaXRpb24nO1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IFsgJ2xlZnQnLCAncmlnaHQnLCAnbWlkZGxlJyBdO1xuICAgIGNsYXNzTGlzdC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7cHJlZml4fS0ke25hbWV9YCk7XG4gICAgfSk7XG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtwcmVmaXh9LSR7cG9zaXRpb259YCk7XG4gICAgfVxuICB9XG5cbiAgZml0U2Nyb2xsQmFyKCk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5uek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLnNjcm9sbEJhcldpZHRoO1xuICAgIGlmIChzY3JvbGxiYXJXaWR0aCkge1xuICAgICAgdGhpcy5oZWFkZXJCb3R0b21TdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luQm90dG9tIDogYC0ke3Njcm9sbGJhcldpZHRofXB4YCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogYDBweGBcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uV2luZG93UmVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuZml0U2Nyb2xsQmFyKCk7XG4gICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdUYWJsZScpKTtcbiAgICB0aGlzLmZpdFNjcm9sbEJhcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpKTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy50YWJsZUhlYWRlckVsZW1lbnRcbiAgICAgICAgJiYgdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudFxuICAgICAgICAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnRcbiAgICAgICAgJiYgdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgZnJvbUV2ZW50KHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKSxcbiAgICAgICAgICBmcm9tRXZlbnQodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnKVxuICAgICAgICApLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKChkYXRhOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5zeW5jU2Nyb2xsVGFibGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2U6IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UsIHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkge1xuICB9XG59XG4iXX0=