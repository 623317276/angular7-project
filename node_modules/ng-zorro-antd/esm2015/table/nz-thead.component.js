/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Host, Input, Optional, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzThComponent } from './nz-th.component';
import { NzTableComponent } from './nz-table.component';
export class NzTheadComponent {
    /**
     * @param {?} nzTableComponent
     */
    constructor(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
        this._singleSort = false;
        this.unsubscribe$ = new Subject();
        this.nzSortChange = new EventEmitter();
        if (this.nzTableComponent) {
            this.nzTableComponent.nzTheadComponent = this;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSingleSort(value) {
        this._singleSort = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzSingleSort() {
        return this._singleSort;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        let sortChange = new Subject().asObservable();
        /** @type {?} */
        const listOfTh = this.listOfNzThComponent.toArray();
        /** @type {?} */
        const sortChangeArray = listOfTh.map(th => th.nzSortChangeWithKey);
        if (sortChangeArray.length) {
            sortChangeArray.forEach(sort => {
                sortChange = merge(sort.asObservable(), sortChange);
            });
        }
        sortChange.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
            this.nzSortChange.emit(data);
            if (this.nzSingleSort) {
                listOfTh.forEach(th => th.nzSort = (th.nzSortKey === data.key ? th.nzSort : null));
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
NzTheadComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'thead:not(.ant-table-thead)',
                template: "<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n<ng-container *ngIf=\"!nzTableComponent\">\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n</ng-container>"
            }] }
];
/** @nocollapse */
NzTheadComponent.ctorParameters = () => [
    { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
];
NzTheadComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['contentTemplate',] }],
    listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
    nzSortChange: [{ type: Output }],
    nzSingleSort: [{ type: Input }]
};
function NzTheadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTheadComponent.prototype._singleSort;
    /** @type {?} */
    NzTheadComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTheadComponent.prototype.template;
    /** @type {?} */
    NzTheadComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTheadComponent.prototype.nzSortChange;
    /** @type {?} */
    NzTheadComponent.prototype.nzTableComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRoZWFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU94RCxNQUFNOzs7O0lBaUJKLFlBQXVDLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCOzJCQWhCbkQsS0FBSzs0QkFDSixJQUFJLE9BQU8sRUFBUTs0QkFJakIsSUFBSSxZQUFZLEVBQWtDO1FBWXpFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDL0M7S0FDRjs7Ozs7SUFiRCxJQUNJLFlBQVksQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7O0lBUUQsa0JBQWtCOztRQUNoQixJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBa0MsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFDOUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNwRCxNQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkUsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3JELENBQUMsQ0FBQztTQUNKO1FBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDcEY7U0FDRixDQUFDLENBQUM7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7OztZQWhERixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBSyw2QkFBNkI7Z0JBQzFDLDBOQUF3QzthQUN6Qzs7OztZQU5RLGdCQUFnQix1QkF3QlYsSUFBSSxZQUFJLFFBQVE7Ozt1QkFiNUIsU0FBUyxTQUFDLGlCQUFpQjtrQ0FDM0IsZUFBZSxTQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7MkJBQ3BELE1BQU07MkJBRU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3IgICA6ICd0aGVhZDpub3QoLmFudC10YWJsZS10aGVhZCknLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGhlYWQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zaW5nbGVTb3J0ID0gZmFsc2U7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpUaENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZOelRoQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpUaENvbXBvbmVudD47XG4gIEBPdXRwdXQoKSBuelNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpTaW5nbGVTb3J0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2luZ2xlU29ydCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaW5nbGVTb3J0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW5nbGVTb3J0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbnpUYWJsZUNvbXBvbmVudDogTnpUYWJsZUNvbXBvbmVudCkge1xuICAgIGlmICh0aGlzLm56VGFibGVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpUYWJsZUNvbXBvbmVudC5uelRoZWFkQ29tcG9uZW50ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgbGV0IHNvcnRDaGFuZ2UgPSBuZXcgU3ViamVjdDx7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+KCkuYXNPYnNlcnZhYmxlKCk7XG4gICAgY29uc3QgbGlzdE9mVGggPSB0aGlzLmxpc3RPZk56VGhDb21wb25lbnQudG9BcnJheSgpO1xuICAgIGNvbnN0IHNvcnRDaGFuZ2VBcnJheSA9IGxpc3RPZlRoLm1hcCh0aCA9PiB0aC5uelNvcnRDaGFuZ2VXaXRoS2V5KTtcbiAgICBpZiAoc29ydENoYW5nZUFycmF5Lmxlbmd0aCkge1xuICAgICAgc29ydENoYW5nZUFycmF5LmZvckVhY2goc29ydCA9PiB7XG4gICAgICAgIHNvcnRDaGFuZ2UgPSBtZXJnZShzb3J0LmFzT2JzZXJ2YWJsZSgpLCBzb3J0Q2hhbmdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzb3J0Q2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5uelNvcnRDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgIGlmICh0aGlzLm56U2luZ2xlU29ydCkge1xuICAgICAgICBsaXN0T2ZUaC5mb3JFYWNoKHRoID0+IHRoLm56U29ydCA9ICh0aC5uelNvcnRLZXkgPT09IGRhdGEua2V5ID8gdGgubnpTb3J0IDogbnVsbCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==