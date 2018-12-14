/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class NzTdComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._showExpand = false;
        this._expand = false;
        this._showCheckbox = false;
        this.isIndentSizeSet = false;
        this.el = this.elementRef.nativeElement;
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzCheckedChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIndentSize(value) {
        this._indentSize = value;
        this.isIndentSizeSet = isNotNil(value);
        this.updateExpandIconClass();
    }
    /**
     * @return {?}
     */
    get nzIndentSize() {
        return this._indentSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpand(value) {
        this._expand = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzExpand() {
        return this._expand;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowExpand(value) {
        this._showExpand = toBoolean(value);
        this.updateExpandIconClass();
    }
    /**
     * @return {?}
     */
    get nzShowExpand() {
        return this._showExpand;
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
    set nzLeft(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-td-left-sticky');
            this.renderer.setStyle(this.el, 'left', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-td-left-sticky');
            this.renderer.removeStyle(this.el, 'left');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzRight(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-td-right-sticky');
            this.renderer.setStyle(this.el, 'right', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-td-right-sticky');
            this.renderer.removeStyle(this.el, 'right');
        }
    }
    /**
     * @return {?}
     */
    updateExpandIconClass() {
        if (this.nzShowExpand && !this.isIndentSizeSet) {
            this.renderer.addClass(this.el, 'ant-table-row-expand-icon-cell');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-row-expand-icon-cell');
        }
    }
    /**
     * @return {?}
     */
    expandChange() {
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    }
}
NzTdComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'td:not(.nz-disable-td)',
                template: "<span class=\"ant-table-row-indent\" *ngIf=\"nzIndentSize >= 0\" [style.padding-left.px]=\"nzIndentSize\"></span>\n<label\n  *ngIf=\"nzShowCheckbox\"\n  nz-checkbox\n  [nzDisabled]=\"nzDisabled\"\n  [(ngModel)]=\"nzChecked\"\n  [nzIndeterminate]=\"nzIndeterminate\"\n  (ngModelChange)=\"nzCheckedChange.emit($event)\">\n</label>\n<span\n  *ngIf=\"!nzShowExpand && nzIndentSize != null\"\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\"></span>\n<span\n  *ngIf=\"nzShowExpand\"\n  class=\"ant-table-row-expand-icon\"\n  (click)=\"expandChange()\"\n  [class.ant-table-row-expanded]=\"nzExpand\"\n  [class.ant-table-row-collapsed]=\"!nzExpand\"></span>\n<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzTdComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzTdComponent.propDecorators = {
    nzChecked: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzIndeterminate: [{ type: Input }],
    nzCheckedChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzIndentSize: [{ type: Input }],
    nzExpand: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzShowCheckbox: [{ type: Input }],
    nzLeft: [{ type: Input }],
    nzRight: [{ type: Input }]
};
function NzTdComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTdComponent.prototype._showExpand;
    /** @type {?} */
    NzTdComponent.prototype._indentSize;
    /** @type {?} */
    NzTdComponent.prototype._expand;
    /** @type {?} */
    NzTdComponent.prototype._showCheckbox;
    /** @type {?} */
    NzTdComponent.prototype.isIndentSizeSet;
    /** @type {?} */
    NzTdComponent.prototype.el;
    /** @type {?} */
    NzTdComponent.prototype.nzChecked;
    /** @type {?} */
    NzTdComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTdComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzTdComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTdComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTdComponent.prototype.elementRef;
    /** @type {?} */
    NzTdComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPakQsTUFBTTs7Ozs7SUE0RkosWUFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzsyQkEzRmpELEtBQUs7dUJBRVQsS0FBSzs2QkFDQyxLQUFLOytCQUNYLEtBQUs7a0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUMxQixLQUFLOzBCQUNKLEtBQUs7K0JBQ0EsS0FBSzsrQkFDSixJQUFJLFlBQVksRUFBVzs4QkFDNUIsSUFBSSxZQUFZLEVBQVc7S0FrRnJEOzs7OztJQWhGRCxJQUNJLFlBQVksQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELElBQ0ksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElB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QkFDTixNQUFNOzJCQUVOLEtBQUs7dUJBV0wsS0FBSzsyQkFTTCxLQUFLOzZCQVVMLEtBQUs7cUJBY0wsS0FBSztzQkFXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvciAgIDogJ3RkOm5vdCgubnotZGlzYWJsZS10ZCknLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGRDb21wb25lbnQge1xuICBwcml2YXRlIF9zaG93RXhwYW5kID0gZmFsc2U7XG4gIHByaXZhdGUgX2luZGVudFNpemU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZXhwYW5kID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dDaGVja2JveCA9IGZhbHNlO1xuICBpc0luZGVudFNpemVTZXQgPSBmYWxzZTtcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIEBJbnB1dCgpIG56Q2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56SW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56SW5kZW50U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5kZW50U2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMuaXNJbmRlbnRTaXplU2V0ID0gaXNOb3ROaWwodmFsdWUpO1xuICAgIHRoaXMudXBkYXRlRXhwYW5kSWNvbkNsYXNzKCk7XG4gIH1cblxuICBnZXQgbnpJbmRlbnRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGVudFNpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpFeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9leHBhbmQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RXhwYW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93RXhwYW5kKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0V4cGFuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVFeHBhbmRJY29uQ2xhc3MoKTtcbiAgfVxuXG4gIGdldCBuelNob3dFeHBhbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dFeHBhbmQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93Q2hlY2tib3godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93Q2hlY2tib3ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9zaG93Q2hlY2tib3gpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2hvd0NoZWNrYm94KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q2hlY2tib3g7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpMZWZ0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGQtbGVmdC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xlZnQnLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10ZC1sZWZ0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAnbGVmdCcpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelJpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGQtcmlnaHQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdyaWdodCcsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRkLXJpZ2h0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncmlnaHQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVFeHBhbmRJY29uQ2xhc3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTaG93RXhwYW5kICYmICF0aGlzLmlzSW5kZW50U2l6ZVNldCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jZWxsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24tY2VsbCcpO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56RXhwYW5kID0gIXRoaXMubnpFeHBhbmQ7XG4gICAgdGhpcy5uekV4cGFuZENoYW5nZS5lbWl0KHRoaXMubnpFeHBhbmQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxufVxuIl19