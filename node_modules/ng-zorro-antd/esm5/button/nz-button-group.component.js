/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
var NzButtonGroupComponent = /** @class */ (function () {
    function NzButtonGroupComponent() {
        var _a;
        this.prefixCls = 'ant-btn-group';
        this.sizeMap = { large: 'lg', small: 'sm' };
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.sizeMap[this.nzSize]] = this.sizeMap[this.nzSize],
            _a);
    }
    Object.defineProperty(NzButtonGroupComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _a;
            this._size = value;
            this.classMap = (_a = {},
                _a[this.prefixCls] = true,
                _a[this.prefixCls + "-" + this.sizeMap[this.nzSize]] = this.sizeMap[this.nzSize],
                _a);
        },
        enumerable: true,
        configurable: true
    });
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
    return NzButtonGroupComponent;
}());
export { NzButtonGroupComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJidXR0b24vbnotYnV0dG9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozt5QkFXbEQsZUFBZTt1QkFDakIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7O1lBRTVDLEdBQUUsSUFBSSxDQUFDLFNBQVMsSUFBd0MsSUFBSTtZQUM1RCxHQUFLLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFOzs7SUFJckYsc0JBQ0ksMENBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7UUFFRCxVQUFXLEtBQXdCOztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUTtnQkFDWCxHQUFFLElBQUksQ0FBQyxTQUFTLElBQXdDLElBQUk7Z0JBQzVELEdBQUssSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUU7bUJBQ3BGLENBQUM7U0FDSDs7O09BUkE7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGlCQUFpQjtvQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsMkZBQXVEO2lCQUN4RDs7OytCQVNFLFNBQVMsU0FBQyxjQUFjO3lCQUV4QixLQUFLOztpQ0FuQlI7O1NBU2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIE56QnV0dG9uR3JvdXBTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCcgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWJ1dHRvbi1ncm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56QnV0dG9uR3JvdXBDb21wb25lbnQge1xuICBwcml2YXRlIF9zaXplOiBOekJ1dHRvbkdyb3VwU2l6ZTtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWJ0bi1ncm91cCc7XG4gIHByaXZhdGUgc2l6ZU1hcCA9IHsgbGFyZ2U6ICdsZycsIHNtYWxsOiAnc20nIH07XG4gIGNsYXNzTWFwID0ge1xuICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuc2l6ZU1hcFsgdGhpcy5uelNpemUgXX1gIF06IHRoaXMuc2l6ZU1hcFsgdGhpcy5uelNpemUgXVxuICB9O1xuICBAVmlld0NoaWxkKCdncm91cFdyYXBwZXInKSBncm91cFdyYXBwZXI6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56U2l6ZSgpOiBOekJ1dHRvbkdyb3VwU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBzZXQgbnpTaXplKHZhbHVlOiBOekJ1dHRvbkdyb3VwU2l6ZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF19YCBdOiB0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF1cbiAgICB9O1xuICB9XG59XG4iXX0=