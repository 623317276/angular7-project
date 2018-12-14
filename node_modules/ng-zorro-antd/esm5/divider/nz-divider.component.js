/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
var NzDividerComponent = /** @class */ (function () {
    function NzDividerComponent(el, cd, updateHostClassService) {
        this.el = el;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        // region fields
        this.isText = false;
        this.textStr = '';
        this.nzType = 'horizontal';
        this.nzOrientation = '';
        this._dashed = false;
    }
    Object.defineProperty(NzDividerComponent.prototype, "nzText", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.textStr = null;
                this.textTpl = value;
            }
            else {
                this.textStr = value;
            }
            this.isText = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzDividerComponent.prototype, "nzDashed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dashed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dashed = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzDividerComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var orientationPrefix = (this.nzOrientation.length > 0) ? '-' + this.nzOrientation : this.nzOrientation;
        /** @type {?} */
        var classMap = (_a = {},
            _a['ant-divider'] = true,
            _a["ant-divider-" + this.nzType] = true,
            _a["ant-divider-with-text" + orientationPrefix] = this.isText,
            _a["ant-divider-dashed"] = this.nzDashed,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        this.cd.detectChanges();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDividerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClass();
    };
    /**
     * @return {?}
     */
    NzDividerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    NzDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-divider',
                    template: "<span *ngIf=\"isText\" class=\"ant-divider-inner-text\">\n  <ng-container *ngIf=\"textStr; else textTpl\">{{ textStr }}</ng-container>\n</span>",
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzDividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzDividerComponent.propDecorators = {
        nzText: [{ type: Input }],
        nzType: [{ type: Input }],
        nzOrientation: [{ type: Input }],
        nzDashed: [{ type: Input }]
    };
    return NzDividerComponent;
}());
export { NzDividerComponent };
function NzDividerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDividerComponent.prototype.isText;
    /** @type {?} */
    NzDividerComponent.prototype.textStr;
    /** @type {?} */
    NzDividerComponent.prototype.textTpl;
    /** @type {?} */
    NzDividerComponent.prototype.nzType;
    /** @type {?} */
    NzDividerComponent.prototype.nzOrientation;
    /** @type {?} */
    NzDividerComponent.prototype._dashed;
    /** @type {?} */
    NzDividerComponent.prototype.el;
    /** @type {?} */
    NzDividerComponent.prototype.cd;
    /** @type {?} */
    NzDividerComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGl2aWRlci9uei1kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUF1RC9DLDRCQUFvQixFQUFjLEVBQVUsRUFBcUIsRUFBVSxzQkFBZ0Q7UUFBdkcsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjs7c0JBM0NsSCxLQUFLO3VCQUNKLEVBQUU7c0JBY2lDLFlBQVk7NkJBRVQsRUFBRTt1QkFFaEMsS0FBSztLQXlCdEI7SUF4Q0Qsc0JBQ0ksc0NBQU07Ozs7O1FBRFYsVUFDVyxLQUFpQztZQUMxQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN2Qjs7O09BQUE7SUFRRCxzQkFDSSx3Q0FBUTs7OztRQUlaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVBELFVBQ2EsS0FBYztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzs7O09BQUE7Ozs7SUFPTyxxQ0FBUTs7Ozs7O1FBQ2QsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7UUFDMUcsSUFBTSxRQUFRO1lBQ1osR0FBRSxhQUFhLElBQWtDLElBQUk7WUFDckQsR0FBRSxpQkFBZSxJQUFJLENBQUMsTUFBUSxJQUFtQixJQUFJO1lBQ3JELEdBQUUsMEJBQXdCLGlCQUFtQixJQUFJLElBQUksQ0FBQyxNQUFNO1lBQzVELEdBQUUsb0JBQW9CLElBQTJCLElBQUksQ0FBQyxRQUFRO2dCQUM5RDtRQUNGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7O0lBTTFCLHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFlBQVk7b0JBQ2pDLDJKQUFrRDtvQkFDbEQsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7b0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNwRDs7OztnQkFqQkMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBVVYsd0JBQXdCOzs7eUJBaUI5QixLQUFLO3lCQVdMLEtBQUs7Z0NBRUwsS0FBSzsyQkFJTCxLQUFLOzs2QkE5Q1I7O1NBc0JhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWRpdmlkZXInLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1kaXZpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekRpdmlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8vIHJlZ2lvbiBmaWVsZHNcblxuICBpc1RleHQgPSBmYWxzZTtcbiAgdGV4dFN0ciA9ICcnO1xuICB0ZXh0VHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpUZXh0KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnRleHRTdHIgPSBudWxsO1xuICAgICAgdGhpcy50ZXh0VHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGV4dFN0ciA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmlzVGV4dCA9ICEhdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBuelR5cGU6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG5cbiAgQElucHV0KCkgbnpPcmllbnRhdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICcnID0gJyc7XG5cbiAgcHJpdmF0ZSBfZGFzaGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGFzaGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGFzaGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRhc2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGVkO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZW50YXRpb25QcmVmaXggPSAodGhpcy5uek9yaWVudGF0aW9uLmxlbmd0aCA+IDApID8gJy0nICsgdGhpcy5uek9yaWVudGF0aW9uIDogdGhpcy5uek9yaWVudGF0aW9uO1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyAnYW50LWRpdmlkZXInIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtZGl2aWRlci0ke3RoaXMubnpUeXBlfWAgXSAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYGFudC1kaXZpZGVyLXdpdGgtdGV4dCR7b3JpZW50YXRpb25QcmVmaXh9YCBdOiB0aGlzLmlzVGV4dCxcbiAgICAgIFsgYGFudC1kaXZpZGVyLWRhc2hlZGAgXSAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm56RGFzaGVkXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iXX0=