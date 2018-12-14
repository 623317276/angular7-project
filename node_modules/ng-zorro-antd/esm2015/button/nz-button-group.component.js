/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
export class NzButtonGroupComponent {
    constructor() {
        this.prefixCls = 'ant-btn-group';
        this.sizeMap = { large: 'lg', small: 'sm' };
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.nzSize]}`]: this.sizeMap[this.nzSize]
        };
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.nzSize]}`]: this.sizeMap[this.nzSize]
        };
    }
}
NzButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-button-group',
                preserveWhitespaces: false,
                template: "<div [ngClass]=\"classMap\" #groupWrapper>\n  <ng-content></ng-content>\n</div>"
            }] }
];
NzButtonGroupComponent.propDecorators = {
    groupWrapper: [{ type: ViewChild, args: ['groupWrapper',] }],
    nzSize: [{ type: Input }]
};
function NzButtonGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzButtonGroupComponent.prototype._size;
    /** @type {?} */
    NzButtonGroupComponent.prototype.prefixCls;
    /** @type {?} */
    NzButtonGroupComponent.prototype.sizeMap;
    /** @type {?} */
    NzButtonGroupComponent.prototype.classMap;
    /** @type {?} */
    NzButtonGroupComponent.prototype.groupWrapper;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJidXR0b24vbnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4RSxNQUFNOzt5QkFFZ0IsZUFBZTt1QkFDakIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7d0JBQ25DO1lBQ1QsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLEVBQXNDLElBQUk7WUFDNUQsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLEVBQUUsQ0FBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRTtTQUNwRjs7Ozs7SUFHRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBd0I7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxFQUFzQyxJQUFJO1lBQzVELENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUU7U0FDcEYsQ0FBQztLQUNIOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxpQkFBaUI7Z0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLDJGQUF1RDthQUN4RDs7OzJCQVNFLFNBQVMsU0FBQyxjQUFjO3FCQUV4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIE56QnV0dG9uR3JvdXBTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCcgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWJ1dHRvbi1ncm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56QnV0dG9uR3JvdXBDb21wb25lbnQge1xuICBwcml2YXRlIF9zaXplOiBOekJ1dHRvbkdyb3VwU2l6ZTtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWJ0bi1ncm91cCc7XG4gIHByaXZhdGUgc2l6ZU1hcCA9IHsgbGFyZ2U6ICdsZycsIHNtYWxsOiAnc20nIH07XG4gIGNsYXNzTWFwID0ge1xuICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuc2l6ZU1hcFsgdGhpcy5uelNpemUgXX1gIF06IHRoaXMuc2l6ZU1hcFsgdGhpcy5uelNpemUgXVxuICB9O1xuICBAVmlld0NoaWxkKCdncm91cFdyYXBwZXInKSBncm91cFdyYXBwZXI6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56U2l6ZSgpOiBOekJ1dHRvbkdyb3VwU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBzZXQgbnpTaXplKHZhbHVlOiBOekJ1dHRvbkdyb3VwU2l6ZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF19YCBdOiB0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF1cbiAgICB9O1xuICB9XG59XG4iXX0=