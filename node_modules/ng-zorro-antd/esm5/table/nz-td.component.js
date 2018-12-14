/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var NzTdComponent = /** @class */ (function () {
    function NzTdComponent(elementRef, renderer) {
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
    Object.defineProperty(NzTdComponent.prototype, "nzIndentSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._indentSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._indentSize = value;
            this.isIndentSizeSet = isNotNil(value);
            this.updateExpandIconClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTdComponent.prototype, "nzExpand", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expand;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expand = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTdComponent.prototype, "nzShowExpand", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showExpand;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showExpand = toBoolean(value);
            this.updateExpandIconClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTdComponent.prototype, "nzShowCheckbox", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showCheckbox;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showCheckbox = toBoolean(value);
            if (this._showCheckbox) {
                this.renderer.addClass(this.el, 'ant-table-selection-column');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-selection-column');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTdComponent.prototype, "nzLeft", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-td-left-sticky');
                this.renderer.setStyle(this.el, 'left', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-td-left-sticky');
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTdComponent.prototype, "nzRight", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-td-right-sticky');
                this.renderer.setStyle(this.el, 'right', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-td-right-sticky');
                this.renderer.removeStyle(this.el, 'right');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTdComponent.prototype.updateExpandIconClass = /**
     * @return {?}
     */
    function () {
        if (this.nzShowExpand && !this.isIndentSizeSet) {
            this.renderer.addClass(this.el, 'ant-table-row-expand-icon-cell');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-row-expand-icon-cell');
        }
    };
    /**
     * @return {?}
     */
    NzTdComponent.prototype.expandChange = /**
     * @return {?}
     */
    function () {
        this.nzExpand = !this.nzExpand;
        this.nzExpandChange.emit(this.nzExpand);
    };
    NzTdComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'td:not(.nz-disable-td)',
                    template: "<span class=\"ant-table-row-indent\" *ngIf=\"nzIndentSize >= 0\" [style.padding-left.px]=\"nzIndentSize\"></span>\n<label\n  *ngIf=\"nzShowCheckbox\"\n  nz-checkbox\n  [nzDisabled]=\"nzDisabled\"\n  [(ngModel)]=\"nzChecked\"\n  [nzIndeterminate]=\"nzIndeterminate\"\n  (ngModelChange)=\"nzCheckedChange.emit($event)\">\n</label>\n<span\n  *ngIf=\"!nzShowExpand && nzIndentSize != null\"\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\"></span>\n<span\n  *ngIf=\"nzShowExpand\"\n  class=\"ant-table-row-expand-icon\"\n  (click)=\"expandChange()\"\n  [class.ant-table-row-expanded]=\"nzExpand\"\n  [class.ant-table-row-collapsed]=\"!nzExpand\"></span>\n<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NzTdComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return NzTdComponent;
}());
export { NzTdComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBbUcvQyx1QkFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzsyQkEzRmpELEtBQUs7dUJBRVQsS0FBSzs2QkFDQyxLQUFLOytCQUNYLEtBQUs7a0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUMxQixLQUFLOzBCQUNKLEtBQUs7K0JBQ0EsS0FBSzsrQkFDSixJQUFJLFlBQVksRUFBVzs4QkFDNUIsSUFBSSxZQUFZLEVBQVc7S0FrRnJEO0lBaEZELHNCQUNJLHVDQUFZOzs7O1FBTWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQVRELFVBQ2lCLEtBQWE7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7OztPQUFBO0lBTUQsc0JBQ0ksbUNBQVE7Ozs7UUFJWjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFQRCxVQUNhLEtBQWM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxD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QWRDLFVBQVU7Z0JBSVYsU0FBUzs7OzRCQWtCUixLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxNQUFNO2lDQUNOLE1BQU07K0JBRU4sS0FBSzsyQkFXTCxLQUFLOytCQVNMLEtBQUs7aUNBVUwsS0FBSzt5QkFjTCxLQUFLOzBCQVdMLEtBQUs7O3dCQXJGUjs7U0FpQmEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3IgICA6ICd0ZDpub3QoLm56LWRpc2FibGUtdGQpJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRkQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfc2hvd0V4cGFuZCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmRlbnRTaXplOiBudW1iZXI7XG4gIHByaXZhdGUgX2V4cGFuZCA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93Q2hlY2tib3ggPSBmYWxzZTtcbiAgaXNJbmRlbnRTaXplU2V0ID0gZmFsc2U7XG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBASW5wdXQoKSBuekNoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIG56Q2hlY2tlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG56RXhwYW5kQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekluZGVudFNpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2luZGVudFNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzSW5kZW50U2l6ZVNldCA9IGlzTm90TmlsKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUV4cGFuZEljb25DbGFzcygpO1xuICB9XG5cbiAgZ2V0IG56SW5kZW50U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbmRlbnRTaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RXhwYW5kKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXhwYW5kID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekV4cGFuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZXhwYW5kO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0V4cGFuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dFeHBhbmQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlRXhwYW5kSWNvbkNsYXNzKCk7XG4gIH1cblxuICBnZXQgbnpTaG93RXhwYW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93RXhwYW5kO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0NoZWNrYm94KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0NoZWNrYm94ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2hvd0NoZWNrYm94KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNob3dDaGVja2JveCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NoZWNrYm94O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TGVmdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRkLWxlZnQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdsZWZ0JywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGQtbGVmdC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ2xlZnQnKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpSaWdodCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRkLXJpZ2h0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncmlnaHQnLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10ZC1yaWdodC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ3JpZ2h0Jyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRXhwYW5kSWNvbkNsYXNzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56U2hvd0V4cGFuZCAmJiAhdGhpcy5pc0luZGVudFNpemVTZXQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24tY2VsbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtcm93LWV4cGFuZC1pY29uLWNlbGwnKTtcbiAgICB9XG4gIH1cblxuICBleHBhbmRDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uekV4cGFuZCA9ICF0aGlzLm56RXhwYW5kO1xuICAgIHRoaXMubnpFeHBhbmRDaGFuZ2UuZW1pdCh0aGlzLm56RXhwYW5kKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cbn1cbiJdfQ==