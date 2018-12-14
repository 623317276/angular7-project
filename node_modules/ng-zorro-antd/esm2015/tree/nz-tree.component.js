/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { isNotNil } from '../core/util/check';
import { InputBoolean } from '../core/util/convert';
import { NzTreeNode } from './nz-tree-node';
import { NzTreeService } from './nz-tree.service';
export class NzTreeComponent {
    /**
     * @param {?} nzTreeService
     */
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
        this.nzShowIcon = false;
        this.nzShowLine = false;
        this.nzCheckStrictly = false;
        this.nzCheckable = false;
        this.nzShowExpand = true;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzMultiple = false;
        this.nzExpandAll = false;
        this.nzHideUnMatched = false;
        /**
         * @deprecated use
         * nzExpandAll instead
         */
        this.nzDefaultExpandAll = false;
        // model bind
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use
         * nzSearchValueChange instead
         */
        this.nzOnSearchNode = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        this._searchValue = null;
        // tslint:disable-next-line:no-any
        this.nzDefaultSubject = new ReplaySubject(6);
        this.nzNodes = [];
        this.prefixCls = 'ant-tree';
        this.nzTreeClass = {};
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzData(value) {
        if (Array.isArray(value)) {
            if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
                // has not been new NzTreeNode
                this.nzNodes = value.map(item => (new NzTreeNode(item)));
            }
            else {
                this.nzNodes = value;
            }
            this.nzTreeService.conductOption.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(this.nzNodes);
        }
        else {
            if (value !== null) {
                console.warn('ngModel only accepts an array and must be not empty');
            }
        }
    }
    /**
     * @deprecated use
     * nzExpandedKeys instead
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated use
     * nzSelectedKeys instead
     * @param {?} value
     * @return {?}
     */
    set nzDefaultSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated use
     * nzCheckedKeys instead
     * @param {?} value
     * @return {?}
     */
    set nzDefaultCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSearchValue(value) {
        this._searchValue = value;
        this.nzTreeService.searchExpand(value);
        if (isNotNil(value)) {
            this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
        }
    }
    /**
     * @return {?}
     */
    get nzSearchValue() {
        return this._searchValue;
    }
    /**
     * @return {?}
     */
    getTreeNodes() {
        return this.nzNodes;
    }
    /**
     * public function
     * @return {?}
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * @return {?}
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * @return {?}
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * @return {?}
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.nzTreeClass = {
            [this.prefixCls]: true,
            [this.prefixCls + '-show-line']: this.nzShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.nzShowIcon,
            ['draggable-tree']: this.nzDraggable
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (Array.isArray(value)) {
            this.nzNodes = value;
            this.nzTreeService.conductOption.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(this.nzNodes);
        }
        else {
            if (value !== null) {
                console.warn('ngModel only accepts an array and should be not empty');
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.nzDefaultSubscription = this.nzDefaultSubject.subscribe((data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.nzNodes);
                    this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.nzNodes, this.nzCheckStrictly);
                    this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzCheckStrictly"]) {
            this.nzTreeService.conductOption.isCheckStrictly = changes["nzCheckStrictly"].currentValue;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.nzDefaultSubscription) {
            this.nzDefaultSubscription.unsubscribe();
            this.nzDefaultSubscription = null;
        }
    }
}
NzTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree',
                template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"nzTreeClass\">\n  <nz-tree-node\n    *ngFor=\"let node of nzNodes\"\n    [nzTreeNode]=\"node\"\n    [nzShowLine]=\"nzShowLine\"\n    [nzDraggable]=\"nzDraggable\"\n    [nzCheckable]=\"nzCheckable\"\n    [nzShowExpand]=\"nzShowExpand\"\n    [nzAsyncData]=\"nzAsyncData\"\n    [nzMultiple]=\"nzMultiple\"\n    [nzSearchValue]=\"nzSearchValue\"\n    [nzHideUnMatched]=\"nzHideUnMatched\"\n    [nzBeforeDrop]=\"nzBeforeDrop\"\n    [nzCheckStrictly]=\"nzCheckStrictly\"\n    [nzExpandAll]=\"nzExpandAll\"\n    [nzDefaultExpandAll]=\"nzDefaultExpandAll\"\n    [nzTreeTemplate]=\"nzTreeTemplate\"\n    (clickNode)=\"nzClick.emit($event)\"\n    (dblClick)=\"nzDblClick.emit($event)\"\n    (contextMenu)=\"nzContextMenu.emit($event)\"\n    (clickExpand)=\"nzExpandChange.emit($event)\"\n    (clickCheckBox)=\"nzCheckBoxChange.emit($event)\"\n    (nzDragStart)=\"nzOnDragStart.emit($event)\"\n    (nzDragEnter)=\"nzOnDragEnter.emit($event)\"\n    (nzDragOver)=\"nzOnDragOver.emit($event)\"\n    (nzDragLeave)=\"nzOnDragLeave.emit($event)\"\n    (nzDrop)=\"nzOnDrop.emit($event)\"\n    (nzDragEnd)=\"nzOnDragEnd.emit($event)\">\n  </nz-tree-node>\n</ul>",
                providers: [
                    NzTreeService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzTreeComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzTreeComponent.ctorParameters = () => [
    { type: NzTreeService }
];
NzTreeComponent.propDecorators = {
    nzShowIcon: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzCheckStrictly: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzDraggable: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzExpandAll: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzDefaultExpandAll: [{ type: Input }],
    nzBeforeDrop: [{ type: Input }],
    nzData: [{ type: Input }],
    nzDefaultExpandedKeys: [{ type: Input }],
    nzDefaultSelectedKeys: [{ type: Input }],
    nzDefaultCheckedKeys: [{ type: Input }],
    nzExpandedKeys: [{ type: Input }],
    nzSelectedKeys: [{ type: Input }],
    nzCheckedKeys: [{ type: Input }],
    nzSearchValue: [{ type: Input }],
    nzExpandedKeysChange: [{ type: Output }],
    nzSelectedKeysChange: [{ type: Output }],
    nzCheckedKeysChange: [{ type: Output }],
    nzSearchValueChange: [{ type: Output }],
    nzOnSearchNode: [{ type: Output }],
    nzClick: [{ type: Output }],
    nzDblClick: [{ type: Output }],
    nzContextMenu: [{ type: Output }],
    nzCheckBoxChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnDragStart: [{ type: Output }],
    nzOnDragEnter: [{ type: Output }],
    nzOnDragOver: [{ type: Output }],
    nzOnDragLeave: [{ type: Output }],
    nzOnDrop: [{ type: Output }],
    nzOnDragEnd: [{ type: Output }],
    nzTreeTemplate: [{ type: ContentChild, args: ['nzTreeTemplate',] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowIcon", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowLine", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowExpand", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzAsyncData", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzDraggable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzMultiple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzExpandAll", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzDefaultExpandAll", void 0);
function NzTreeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeComponent.prototype.nzDraggable;
    /** @type {?} */
    NzTreeComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzHideUnMatched;
    /**
     * @deprecated use
     * nzExpandAll instead
     * @type {?}
     */
    NzTreeComponent.prototype.nzDefaultExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchValueChange;
    /**
     * @deprecated use
     * nzSearchValueChange instead
     * @type {?}
     */
    NzTreeComponent.prototype.nzOnSearchNode;
    /** @type {?} */
    NzTreeComponent.prototype.nzClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzDblClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzContextMenu;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnd;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeComponent.prototype._searchValue;
    /** @type {?} */
    NzTreeComponent.prototype.nzDefaultSubject;
    /** @type {?} */
    NzTreeComponent.prototype.nzDefaultSubscription;
    /** @type {?} */
    NzTreeComponent.prototype.nzNodes;
    /** @type {?} */
    NzTreeComponent.prototype.prefixCls;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeClass;
    /** @type {?} */
    NzTreeComponent.prototype.onChange;
    /** @type {?} */
    NzTreeComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFjLGFBQWEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBZWxELE1BQU07Ozs7SUEyTEosWUFBbUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7MEJBMUxULEtBQUs7MEJBQ0wsS0FBSzsrQkFDQSxLQUFLOzJCQUNULEtBQUs7NEJBQ0osSUFBSTsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ04sS0FBSzsyQkFDSyxLQUFLOytCQUNWLEtBQUs7Ozs7O2tDQUtPLEtBQUs7O29DQStFSCxJQUFJLFlBQVksRUFBWTtvQ0FDNUIsSUFBSSxZQUFZLEVBQVk7bUNBQzdCLElBQUksWUFBWSxFQUFZO21DQUVuQixJQUFJLFlBQVksRUFBRTs7Ozs7OEJBS3ZCLElBQUksWUFBWSxFQUFFO3VCQUV6QixJQUFJLFlBQVksRUFBRTswQkFDZixJQUFJLFlBQVksRUFBRTs2QkFDZixJQUFJLFlBQVksRUFBRTtnQ0FDZixJQUFJLFlBQVksRUFBRTs4QkFDcEIsSUFB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SzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO2lDQUtMLEtBQUs7MkJBQ0wsS0FBSztxQkFFTCxLQUFLO29DQXVCTCxLQUFLO29DQVNMLEtBQUs7bUNBU0wsS0FBSzs2QkFLTCxLQUFLOzZCQUtMLEtBQUs7NEJBS0wsS0FBSzs0QkFLTCxLQUFLO21DQWVMLE1BQU07bUNBQ04sTUFBTTtrQ0FDTixNQUFNO2tDQUVOLE1BQU07NkJBS04sTUFBTTtzQkFFTixNQUFNO3lCQUNOLE1BQU07NEJBQ04sTUFBTTsrQkFDTixNQUFNOzZCQUNOLE1BQU07NEJBRU4sTUFBTTs0QkFDTixNQUFNOzJCQUNOLE1BQU07NEJBQ04sTUFBTTt1QkFDTixNQUFNOzBCQUNOLE1BQU07NkJBR04sWUFBWSxTQUFDLGdCQUFnQjs7O0lBdEhwQixZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFLZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LCBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4uL3RyZWUvaW50ZXJmYWNlJztcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtbm9kZSc7XG5pbXBvcnQgeyBOelRyZWVTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICduei10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgIDogW1xuICAgIE56VHJlZVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpUcmVlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTnpUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJY29uID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dMaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrU3RyaWN0bHkgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2thYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBc3luY0RhdGEgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RHJhZ2dhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekV4cGFuZEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlVW5NYXRjaGVkID0gZmFsc2U7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2VcbiAgICogbnpFeHBhbmRBbGwgaW5zdGVhZFxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGVmYXVsdEV4cGFuZEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuekJlZm9yZURyb3A6IChjb25maXJtOiBOekZvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBuekRhdGEodmFsdWU6IGFueVtdKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0FycmF5T2ZOelRyZWVOb2RlKHZhbHVlKSkge1xuICAgICAgICAvLyBoYXMgbm90IGJlZW4gbmV3IE56VHJlZU5vZGVcbiAgICAgICAgdGhpcy5uek5vZGVzID0gdmFsdWUubWFwKGl0ZW0gPT4gKG5ldyBOelRyZWVOb2RlKGl0ZW0pKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56Tm9kZXMgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMubnpOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ25nTW9kZWwgb25seSBhY2NlcHRzIGFuIGFycmF5IGFuZCBtdXN0IGJlIG5vdCBlbXB0eScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2VcbiAgICogbnpFeHBhbmRlZEtleXMgaW5zdGVhZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdEV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBuelNlbGVjdGVkS2V5cyBpbnN0ZWFkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbnpEZWZhdWx0U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIG56Q2hlY2tlZEtleXMgaW5zdGVhZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdENoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekV4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMubnpEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ256U2VsZWN0ZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2VhcmNoRXhwYW5kKHZhbHVlKTtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLm56U2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcbiAgICAgIHRoaXMubnpPblNlYXJjaE5vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcbiAgfVxuXG4gIC8vIG1vZGVsIGJpbmRcbiAgQE91dHB1dCgpIG56RXhwYW5kZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIG56U2VsZWN0ZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIG56Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIEBPdXRwdXQoKSBuelNlYXJjaFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIG56U2VhcmNoVmFsdWVDaGFuZ2UgaW5zdGVhZFxuICAgKi9cbiAgQE91dHB1dCgpIG56T25TZWFyY2hOb2RlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBuekNsaWNrOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpEYmxDbGljazogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG56Q29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuekNoZWNrQm94Q2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpFeHBhbmRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIG56T25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBuek9uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpPbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpPbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG56T25Ecm9wOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpPbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBAQ29udGVudENoaWxkKCduelRyZWVUZW1wbGF0ZScpIG56VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBfc2VhcmNoVmFsdWUgPSBudWxsO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG56RGVmYXVsdFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdCg2KTtcbiAgbnpEZWZhdWx0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIG56Tm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xuICBuelRyZWVDbGFzcyA9IHt9O1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IE56VHJlZU5vZGVbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgZ2V0VHJlZU5vZGVzKCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpOb2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBwdWJsaWMgZnVuY3Rpb25cbiAgICovXG4gIGdldENoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0Q2hlY2tlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBnZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBnZXRFeHBhbmRlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRFeHBhbmRlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBnZXRNYXRjaGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldE1hdGNoZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5uelRyZWVDbGFzcyA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgKyAnLXNob3ctbGluZScgXTogdGhpcy5uelNob3dMaW5lLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taWNvbi1oaWRlYCBdOiAhdGhpcy5uelNob3dJY29uLFxuICAgICAgWyAnZHJhZ2dhYmxlLXRyZWUnIF0gICAgICAgICAgICAgOiB0aGlzLm56RHJhZ2dhYmxlXG4gICAgfTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5uek5vZGVzID0gdmFsdWU7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdE9wdGlvbi5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLm56Tm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCduZ01vZGVsIG9ubHkgYWNjZXB0cyBhbiBhcnJheSBhbmQgc2hvdWxkIGJlIG5vdCBlbXB0eScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBOelRyZWVOb2RlW10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpUcmVlU2VydmljZTogTnpUcmVlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMubnpEZWZhdWx0U3Vic2NyaXB0aW9uID0gdGhpcy5uekRlZmF1bHRTdWJqZWN0LnN1YnNjcmliZSgoZGF0YTogeyB0eXBlOiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdIH0pID0+IHtcbiAgICAgIGlmICghZGF0YSB8fCAhZGF0YS5rZXlzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ256RXhwYW5kZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0V4cGFuZGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2Rlcyk7XG4gICAgICAgICAgdGhpcy5uekV4cGFuZGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ256U2VsZWN0ZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uek11bHRpcGxlKTtcbiAgICAgICAgICB0aGlzLm56U2VsZWN0ZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnpDaGVja2VkS2V5cyc6XG4gICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhkYXRhLmtleXMsIHRoaXMubnpOb2RlcywgdGhpcy5uekNoZWNrU3RyaWN0bHkpO1xuICAgICAgICAgIHRoaXMubnpDaGVja2VkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFsgcHJvcGVydHlOYW1lOiBzdHJpbmcgXTogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSA9IGNoYW5nZXMubnpDaGVja1N0cmljdGx5LmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRlZmF1bHRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMubnpEZWZhdWx0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLm56RGVmYXVsdFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=