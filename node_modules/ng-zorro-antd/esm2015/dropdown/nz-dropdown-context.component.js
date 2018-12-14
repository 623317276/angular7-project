/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
export class NzDropdownContextComponent {
    constructor() {
        this.dropDownPosition = 'bottom';
        this.open = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTemplateRef(value) {
        this.template = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setControl(value) {
        this.control = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDropDownPosition(value) {
        this.dropDownPosition = value;
    }
    /**
     * @return {?}
     */
    close() {
        this.open = false;
    }
    /**
     * @return {?}
     */
    afterAnimation() {
        if (!this.open) {
            this.control.close();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // TODO auto set dropdown class after the bug resolved
        /** https://github.com/angular/angular/issues/14842 **/
    }
}
NzDropdownContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown-context',
                animations: [
                    dropDownAnimation
                ],
                template: "<div class=\"ant-dropdown ant-dropdown-placement-bottomLeft\" [@dropDownAnimation]=\"dropDownPosition\" (@dropDownAnimation.done)=\"afterAnimation()\" *ngIf=\"open\">\n  <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n</div>",
                styles: [`
      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXRFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBdUIxRSxNQUFNOztnQ0FDaUMsUUFBUTtvQkFHdEMsSUFBSTs7Ozs7O0lBRVgsY0FBYyxDQUFDLEtBQXdCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCOzs7OztJQUVELFVBQVUsQ0FBQyxLQUF3QjtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxLQUF1QjtRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0tBQy9COzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0tBQ25COzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtLQUNGOzs7O0lBRUQsZUFBZTs7O0tBR2Q7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFLLHFCQUFxQjtnQkFDbEMsVUFBVSxFQUFHO29CQUNYLGlCQUFpQjtpQkFDbEI7Z0JBQ0QseVBBQW1EO3lCQUVqRDs7Ozs7Ozs7O0tBU0M7YUFFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zJztcblxuaW1wb3J0IHsgTnpEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LWRyb3Bkb3duLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICduei1kcm9wZG93bi1jb250ZXh0JyxcbiAgYW5pbWF0aW9ucyA6IFtcbiAgICBkcm9wRG93bkFuaW1hdGlvblxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgOiBbXG4gICAgYFxuICAgICAgLmFudC1kcm9wZG93biB7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgY29udHJvbDogTnpEcm9wZG93blNlcnZpY2U7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgb3BlbiA9IHRydWU7XG5cbiAgc2V0VGVtcGxhdGVSZWYodmFsdWU6IFRlbXBsYXRlUmVmPHZvaWQ+KTogdm9pZCB7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0Q29udHJvbCh2YWx1ZTogTnpEcm9wZG93blNlcnZpY2UpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldERyb3BEb3duUG9zaXRpb24odmFsdWU6ICd0b3AnIHwgJ2JvdHRvbScpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgYWZ0ZXJBbmltYXRpb24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuY29udHJvbC5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyBUT0RPIGF1dG8gc2V0IGRyb3Bkb3duIGNsYXNzIGFmdGVyIHRoZSBidWcgcmVzb2x2ZWRcbiAgICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTQ4NDIgKiovXG4gIH1cbn1cbiJdfQ==