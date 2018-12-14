/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class NzBlockScrollStrategy {
    /**
     * @param {?} document
     * @param {?} renderer
     * @param {?} nzMeasureScrollbarService
     */
    constructor(document, renderer, nzMeasureScrollbarService) {
        this.document = document;
        this.renderer = renderer;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
    }
    /**
     * @return {?}
     */
    attach() { }
    /**
     * @return {?}
     */
    enable() {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
        this.renderer.setStyle(this.document.body, 'padding-right', `${this.nzMeasureScrollbarService.scrollBarWidth}px`);
    }
    /**
     * @return {?}
     */
    disable() {
        this.renderer.removeStyle(document.body, 'overflow');
        this.renderer.removeStyle(document.body, 'padding-right');
    }
}
function NzBlockScrollStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBlockScrollStrategy.prototype.document;
    /** @type {?} */
    NzBlockScrollStrategy.prototype.renderer;
    /** @type {?} */
    NzBlockScrollStrategy.prototype.nzMeasureScrollbarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9zY3JvbGwvbnotYmxvY2stc2Nyb2xsLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxNQUFNOzs7Ozs7SUFFSixZQUFvQixRQUFrQixFQUFVLFFBQW1CLEVBQVUseUJBQW9EO1FBQTdHLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtLQUNoSTs7OztJQUVELE1BQU0sTUFBVzs7OztJQUVqQixNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7S0FFbkg7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQzNEO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY3JvbGxTdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UnXG5cbmV4cG9ydCBjbGFzcyBOekJsb2NrU2Nyb2xsU3RyYXRlZ3kgaW1wbGVtZW50cyBTY3JvbGxTdHJhdGVneSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlOiBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlKSB7XG4gIH1cblxuICBhdHRhY2goKTogdm9pZCB7fVxuXG4gIGVuYWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnLCBgJHt0aGlzLm56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2Uuc2Nyb2xsQmFyV2lkdGh9cHhgKTtcblxuICB9XG5cbiAgZGlzYWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGRvY3VtZW50LmJvZHksICdvdmVyZmxvdycpO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnKTtcbiAgfVxuXG59XG4iXX0=