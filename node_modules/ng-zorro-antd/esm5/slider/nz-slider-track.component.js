/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzSliderTrackComponent = /** @class */ (function () {
    function NzSliderTrackComponent() {
        this._vertical = false;
        this._included = false;
        this.style = {};
    }
    Object.defineProperty(NzSliderTrackComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Required
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderTrackComponent.prototype, "nzIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderTrackComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzIncluded"]) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes["nzVertical"] || changes["nzOffset"] || changes["nzLength"]) {
            if (this.nzVertical) {
                this.style.bottom = this.nzOffset + "%";
                this.style.height = this.nzLength + "%";
            }
            else {
                this.style.left = this.nzOffset + "%";
                this.style.width = this.nzLength + "%";
            }
        }
    };
    NzSliderTrackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider-track',
                    preserveWhitespaces: false,
                    template: "<div [class]=\"nzClassName\" [ngStyle]=\"style\"></div>"
                }] }
    ];
    NzSliderTrackComponent.propDecorators = {
        nzOffset: [{ type: Input }],
        nzLength: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    return NzSliderTrackComponent;
}());
export { NzSliderTrackComponent };
function NzSliderTrackComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderTrackComponent.prototype._vertical;
    /** @type {?} */
    NzSliderTrackComponent.prototype._included;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzOffset;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzLength;
    /** @type {?} */
    NzSliderTrackComponent.prototype.nzClassName;
    /** @type {?} */
    NzSliderTrackComponent.prototype.style;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O3lCQVEzQixLQUFLO3lCQUNMLEtBQUs7cUJBMkJ5RSxFQUFFOztJQWxCcEcsc0JBQ0ksOENBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7O1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTtJQU1ELHNCQUNJLDhDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTs7Ozs7SUFRRCw0Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGdCQUFhO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxPQUFPLGtCQUFlLE9BQU8sWUFBUyxJQUFJLE9BQU8sWUFBUyxFQUFFO1lBQzlELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxJQUFJLENBQUMsUUFBUSxNQUFHLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBTSxJQUFJLENBQUMsUUFBUSxNQUFHLENBQUM7YUFDeEM7U0FDRjtLQUNGOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxpQkFBaUI7b0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLG1FQUF1RDtpQkFDeEQ7OzsyQkFNRSxLQUFLOzJCQUNMLEtBQUs7OEJBR0wsS0FBSzs2QkFFTCxLQUFLOzZCQVNMLEtBQUs7O2lDQTdCUjs7U0FTYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNsaWRlci10cmFjaycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zbGlkZXItdHJhY2suY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyVHJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmNsdWRlZCA9IGZhbHNlO1xuXG4gIC8vIER5bmFtaWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBuek9mZnNldDtcbiAgQElucHV0KCkgbnpMZW5ndGg7XG5cbiAgLy8gU3RhdGljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgbnpDbGFzc05hbWU7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHsgLy8gUmVxdWlyZWRcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuXG4gIHN0eWxlOiB7IGJvdHRvbT86IHN0cmluZywgaGVpZ2h0Pzogc3RyaW5nLCBsZWZ0Pzogc3RyaW5nLCB3aWR0aD86IHN0cmluZywgdmlzaWJpbGl0eT86IHN0cmluZyB9ID0ge307XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56SW5jbHVkZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMubnpJbmNsdWRlZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelZlcnRpY2FsIHx8IGNoYW5nZXMubnpPZmZzZXQgfHwgY2hhbmdlcy5uekxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xuICAgICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5uekxlbmd0aH0lYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGUubGVmdCA9IGAke3RoaXMubnpPZmZzZXR9JWA7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBgJHt0aGlzLm56TGVuZ3RofSVgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=