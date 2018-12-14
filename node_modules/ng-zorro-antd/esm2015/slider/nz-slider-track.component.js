/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzSliderTrackComponent {
    constructor() {
        this._vertical = false;
        this._included = false;
        this.style = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        // Required
        this._vertical = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIncluded(value) {
        this._included = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzIncluded() {
        return this._included;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzIncluded"]) {
            this.style.visibility = this.nzIncluded ? 'visible' : 'hidden';
        }
        if (changes["nzVertical"] || changes["nzOffset"] || changes["nzLength"]) {
            if (this.nzVertical) {
                this.style.bottom = `${this.nzOffset}%`;
                this.style.height = `${this.nzLength}%`;
            }
            else {
                this.style.left = `${this.nzOffset}%`;
                this.style.width = `${this.nzLength}%`;
            }
        }
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU9qRCxNQUFNOzt5QkFDZ0IsS0FBSzt5QkFDTCxLQUFLO3FCQTJCeUUsRUFBRTs7Ozs7O0lBbEJwRyxJQUNJLFVBQVUsQ0FBQyxLQUFjOztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUlELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sZ0JBQWE7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDaEU7UUFDRCxJQUFJLE9BQU8sa0JBQWUsT0FBTyxZQUFTLElBQUksT0FBTyxZQUFTLEVBQUU7WUFDOUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7YUFDekM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2FBQ3hDO1NBQ0Y7S0FDRjs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsaUJBQWlCO2dCQUN0QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtRUFBdUQ7YUFDeEQ7Ozt1QkFNRSxLQUFLO3VCQUNMLEtBQUs7MEJBR0wsS0FBSzt5QkFFTCxLQUFLO3lCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNsaWRlci10cmFjaycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zbGlkZXItdHJhY2suY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyVHJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmNsdWRlZCA9IGZhbHNlO1xuXG4gIC8vIER5bmFtaWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBuek9mZnNldDtcbiAgQElucHV0KCkgbnpMZW5ndGg7XG5cbiAgLy8gU3RhdGljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgbnpDbGFzc05hbWU7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHsgLy8gUmVxdWlyZWRcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekluY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuXG4gIHN0eWxlOiB7IGJvdHRvbT86IHN0cmluZywgaGVpZ2h0Pzogc3RyaW5nLCBsZWZ0Pzogc3RyaW5nLCB3aWR0aD86IHN0cmluZywgdmlzaWJpbGl0eT86IHN0cmluZyB9ID0ge307XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56SW5jbHVkZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9IHRoaXMubnpJbmNsdWRlZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uelZlcnRpY2FsIHx8IGNoYW5nZXMubnpPZmZzZXQgfHwgY2hhbmdlcy5uekxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xuICAgICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IGAke3RoaXMubnpPZmZzZXR9JWA7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5uekxlbmd0aH0lYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3R5bGUubGVmdCA9IGAke3RoaXMubnpPZmZzZXR9JWA7XG4gICAgICAgIHRoaXMuc3R5bGUud2lkdGggPSBgJHt0aGlzLm56TGVuZ3RofSVgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=