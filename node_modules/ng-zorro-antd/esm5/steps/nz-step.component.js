/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzStepComponent = /** @class */ (function () {
    function NzStepComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this._status = 'wait';
        this._currentIndex = 0;
        this.el = this.elementRef.nativeElement;
        this.oldAPIIcon = true;
        this.isCustomStatus = false;
        this.isDescriptionString = true;
        this.isTitleString = true;
        this.isIconString = true;
        this.last = false;
        this.showProcessDot = false;
        this.direction = 'horizontal';
        this.outStatus = 'process';
        this.index = 0;
    }
    Object.defineProperty(NzStepComponent.prototype, "nzTitle", {
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
    Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!(value instanceof TemplateRef)) {
                this.isIconString = true;
                if (typeof value === 'string') {
                    /** @type {?} */
                    var str = /** @type {?} */ (value);
                    this.oldAPIIcon = str.indexOf('anticon') > -1;
                }
                else {
                    this.oldAPIIcon = true;
                }
            }
            else {
                this.isIconString = false;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.isCustomStatus = true;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._description;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isDescriptionString = !(value instanceof TemplateRef);
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentIndex;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                if (current > this.index) {
                    this._status = 'finish';
                }
                else if (current === this.index) {
                    if (this.outStatus) {
                        this._status = this.outStatus;
                    }
                }
                else {
                    this._status = 'wait';
                }
            }
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStepComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a['ant-steps-item'] = true,
            _a["ant-steps-item-wait"] = this.nzStatus === 'wait',
            _a["ant-steps-item-process"] = this.nzStatus === 'process',
            _a["ant-steps-item-finish"] = this.nzStatus === 'finish',
            _a["ant-steps-item-error"] = this.nzStatus === 'error',
            _a['ant-steps-custom'] = !!this.nzIcon,
            _a['ant-steps-next-error'] = (this.outStatus === 'error') && (this.currentIndex === this.index + 1),
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    NzStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-step',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    template: "<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n</ng-template>\n<ng-template #descriptionTemplate>\n  <ng-template [ngTemplateOutlet]=\"nzDescription\"></ng-template>\n</ng-template>\n<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n<div class=\"ant-steps-item-icon\">\n  <ng-template [ngIf]=\"!showProcessDot\">\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\">\n      <i nz-icon type=\"check\"></i>\n    </span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\">\n      <i nz-icon type=\"close\"></i>\n    </span>\n    <span class=\"ant-steps-icon\" *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">\n      {{ index + 1 }}\n    </span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n      </ng-container>\n      <ng-template #iconTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzIcon\"></ng-template>\n    </ng-template>\n    </span>\n  </ng-template>\n  <ng-template [ngIf]=\"showProcessDot\">\n    <span class=\"ant-steps-icon\">\n      <ng-template #processDotTemplate>\n        <span class=\"ant-steps-icon-dot\"></span>\n      </ng-template>\n      <ng-template [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:nzStatus, index:index }\"></ng-template>\n    </span>\n  </ng-template>\n</div>\n<div class=\"ant-steps-item-content\">\n  <div class=\"ant-steps-item-title\">\n    <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n  </div>\n  <div class=\"ant-steps-item-description\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ nzDescription }}</ng-container>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzStepComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzStepComponent.propDecorators = {
        processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
        nzTitle: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzDescription: [{ type: Input }]
    };
    return NzStepComponent;
}());
export { NzStepComponent };
function NzStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype._currentIndex;
    /** @type {?} */
    NzStepComponent.prototype._description;
    /** @type {?} */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype._title;
    /** @type {?} */
    NzStepComponent.prototype.el;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /** @type {?} */
    NzStepComponent.prototype.isDescriptionString;
    /** @type {?} */
    NzStepComponent.prototype.isTitleString;
    /** @type {?} */
    NzStepComponent.prototype.isIconString;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.elementRef;
    /** @type {?} */
    NzStepComponent.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3RlcHMvbnotc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOztJQW1IcEYseUJBQW9CLFVBQXNCLEVBQVUsd0JBQWtEO1FBQWxGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO3VCQXZHcEYsTUFBTTs2QkFDQSxDQUFDO2tCQUlDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTswQkFDMUMsSUFBSTs4QkFDQSxLQUFLO21DQUNBLElBQUk7NkJBQ1YsSUFBSTs0QkFDTCxJQUFJO29CQUNaLEtBQUs7OEJBQ0ssS0FBSzt5QkFDVixZQUFZO3lCQUNaLFNBQVM7cUJBQ2IsQ0FBQztLQXlGUjtJQXJGRCxzQkFDSSxvQ0FBTzs7OztRQUtYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVJELFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCOzs7T0FBQTtJQU1ELHNCQUNJLG1DQUFNOzs7O1FBZVY7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBbEJELFVBQ1csS0FBMEM7WUFDbkQsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFB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Z0JBTUgsd0JBQXdCOzs7cUNBNEI5QixTQUFTLFNBQUMsb0JBQW9COzBCQUc5QixLQUFLO3lCQVVMLEtBQUs7MkJBb0JMLEtBQUs7Z0NBV0wsS0FBSzs7MEJBaEZSOztTQW1CYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IHR5cGUgU3RlcE5nQ2xhc3NUeXBlID0gc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgWyBrbGFzczogc3RyaW5nIF06IGFueTsgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zdGVwJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXN0ZXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U3RlcENvbXBvbmVudCB7XG4gIHByaXZhdGUgX3N0YXR1cyA9ICd3YWl0JztcbiAgcHJpdmF0ZSBfY3VycmVudEluZGV4ID0gMDtcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9pY29uOiBTdGVwTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBvbGRBUElJY29uID0gdHJ1ZTsgLy8gTWFrZSB0aGUgdXNlciBkZWZpbmVkIGljb24gY29tcGF0aWJsZSB0byBvbGQgQVBJLiBTaG91bGQgYmUgcmVtb3ZlZCBpbiAyLjAuXG4gIGlzQ3VzdG9tU3RhdHVzID0gZmFsc2U7XG4gIGlzRGVzY3JpcHRpb25TdHJpbmcgPSB0cnVlO1xuICBpc1RpdGxlU3RyaW5nID0gdHJ1ZTtcbiAgaXNJY29uU3RyaW5nID0gdHJ1ZTtcbiAgbGFzdCA9IGZhbHNlO1xuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xuICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIG91dFN0YXR1cyA9ICdwcm9jZXNzJztcbiAgaW5kZXggPSAwO1xuICBAVmlld0NoaWxkKCdwcm9jZXNzRG90VGVtcGxhdGUnKSBwcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBjdXN0b21Qcm9jZXNzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPiwgc3RhdHVzOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgfT47XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekljb24odmFsdWU6IFN0ZXBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikpIHtcbiAgICAgIHRoaXMuaXNJY29uU3RyaW5nID0gdHJ1ZTtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IHZhbHVlIGFzIHN0cmluZztcbiAgICAgICAgdGhpcy5vbGRBUElJY29uID0gc3RyLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbGRBUElJY29uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56SWNvbigpOiBTdGVwTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5pc0N1c3RvbVN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56U3RhdHVzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNEZXNjcmlwdGlvblN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekRlc2NyaXB0aW9uKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRJbmRleDtcbiAgfVxuXG4gIHNldCBjdXJyZW50SW5kZXgoY3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3VycmVudEluZGV4ID0gY3VycmVudDtcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21TdGF0dXMpIHtcbiAgICAgIGlmIChjdXJyZW50ID4gdGhpcy5pbmRleCkge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSAnZmluaXNoJztcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gdGhpcy5pbmRleCkge1xuICAgICAgICBpZiAodGhpcy5vdXRTdGF0dXMpIHtcbiAgICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLm91dFN0YXR1cztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gJ3dhaXQnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC1zdGVwcy1pdGVtJyBdICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtc3RlcHMtaXRlbS13YWl0YCBdICAgOiB0aGlzLm56U3RhdHVzID09PSAnd2FpdCcsXG4gICAgICBbIGBhbnQtc3RlcHMtaXRlbS1wcm9jZXNzYCBdOiB0aGlzLm56U3RhdHVzID09PSAncHJvY2VzcycsXG4gICAgICBbIGBhbnQtc3RlcHMtaXRlbS1maW5pc2hgIF0gOiB0aGlzLm56U3RhdHVzID09PSAnZmluaXNoJyxcbiAgICAgIFsgYGFudC1zdGVwcy1pdGVtLWVycm9yYCBdICA6IHRoaXMubnpTdGF0dXMgPT09ICdlcnJvcicsXG4gICAgICBbICdhbnQtc3RlcHMtY3VzdG9tJyBdICAgICAgOiAhIXRoaXMubnpJY29uLFxuICAgICAgWyAnYW50LXN0ZXBzLW5leHQtZXJyb3InIF0gIDogKHRoaXMub3V0U3RhdHVzID09PSAnZXJyb3InKSAmJiAodGhpcy5jdXJyZW50SW5kZXggPT09IHRoaXMuaW5kZXggKyAxKVxuICAgIH07XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICB9XG59XG4iXX0=