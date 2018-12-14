/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
var NzDropdownContextComponent = /** @class */ (function () {
    function NzDropdownContextComponent() {
        this.dropDownPosition = 'bottom';
        this.open = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzDropdownContextComponent.prototype.setTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.template = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzDropdownContextComponent.prototype.setControl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.control = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzDropdownContextComponent.prototype.setDropDownPosition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.dropDownPosition = value;
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open = false;
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.afterAnimation = /**
     * @return {?}
     */
    function () {
        if (!this.open) {
            this.control.close();
        }
    };
    /**
     * @return {?}
     */
    NzDropdownContextComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // TODO auto set dropdown class after the bug resolved
        /** https://github.com/angular/angular/issues/14842 **/
    };
    NzDropdownContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown-context',
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<div class=\"ant-dropdown ant-dropdown-placement-bottomLeft\" [@dropDownAnimation]=\"dropDownPosition\" (@dropDownAnimation.done)=\"afterAnimation()\" *ngIf=\"open\">\n  <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n</div>",
                    styles: ["\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    return NzDropdownContextComponent;
}());
export { NzDropdownContextComponent };
function NzDropdownContextComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropdownContextComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropdownContextComponent.prototype.control;
    /** @type {?} */
    NzDropdownContextComponent.prototype.template;
    /** @type {?} */
    NzDropdownContextComponent.prototype.open;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXRFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Z0NBd0JuQyxRQUFRO29CQUd0QyxJQUFJOzs7Ozs7SUFFWCxtREFBYzs7OztJQUFkLFVBQWUsS0FBd0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdkI7Ozs7O0lBRUQsK0NBQVU7Ozs7SUFBVixVQUFXLEtBQXdCO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELHdEQUFtQjs7OztJQUFuQixVQUFvQixLQUF1QjtRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0tBQy9COzs7O0lBRUQsMENBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFFRCxtREFBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEI7S0FDRjs7OztJQUVELG9EQUFlOzs7SUFBZjs7O0tBR0M7O2dCQWxERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFLLHFCQUFxQjtvQkFDbEMsVUFBVSxFQUFHO3dCQUNYLGlCQUFpQjtxQkFDbEI7b0JBQ0QseVBBQW1EOzZCQUVqRCx3TEFTQztpQkFFSjs7cUNBeEJEOztTQXlCYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IE56RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9uei1kcm9wZG93bi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnbnotZHJvcGRvd24tY29udGV4dCcsXG4gIGFuaW1hdGlvbnMgOiBbXG4gICAgZHJvcERvd25BbmltYXRpb25cbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgIDogW1xuICAgIGBcbiAgICAgIC5hbnQtZHJvcGRvd24ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekRyb3Bkb3duQ29udGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIGNvbnRyb2w6IE56RHJvcGRvd25TZXJ2aWNlO1xuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIG9wZW4gPSB0cnVlO1xuXG4gIHNldFRlbXBsYXRlUmVmKHZhbHVlOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldENvbnRyb2wodmFsdWU6IE56RHJvcGRvd25TZXJ2aWNlKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sID0gdmFsdWU7XG4gIH1cblxuICBzZXREcm9wRG93blBvc2l0aW9uKHZhbHVlOiAndG9wJyB8ICdib3R0b20nKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGFmdGVyQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gVE9ETyBhdXRvIHNldCBkcm9wZG93biBjbGFzcyBhZnRlciB0aGUgYnVnIHJlc29sdmVkXG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE0ODQyICoqL1xuICB9XG59XG4iXX0=