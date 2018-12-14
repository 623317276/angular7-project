/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
export class NzDropDownDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.$mouseenter = new Subject();
        this.$mouseleave = new Subject();
        this.$click = new Subject();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseEnter(e) {
        this.$mouseenter.next(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseLeave(e) {
        this.$mouseleave.next(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.stopPropagation();
        this.$click.next(e);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.elementRef.nativeElement.nodeName === 'A') {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
        }
    }
}
NzDropDownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-dropdown]',
                host: {
                    '[class.ant-dropdown-trigger]': 'true'
                }
            },] }
];
/** @nocollapse */
NzDropDownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzDropDownDirective.propDecorators = {
    onMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
function NzDropDownDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropDownDirective.prototype.$mouseenter;
    /** @type {?} */
    NzDropDownDirective.prototype.$mouseleave;
    /** @type {?} */
    NzDropDownDirective.prototype.$click;
    /** @type {?} */
    NzDropDownDirective.prototype.elementRef;
    /** @type {?} */
    NzDropDownDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL256LWRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUS9CLE1BQU07Ozs7O0lBcUJKLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7MkJBcEJ4RCxJQUFJLE9BQU8sRUFBYzsyQkFDekIsSUFBSSxPQUFPLEVBQWM7c0JBQzlCLElBQUksT0FBTyxFQUFjO0tBbUJqQzs7Ozs7SUFoQkQsWUFBWSxDQUFDLENBQWE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBR0QsWUFBWSxDQUFDLENBQWE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBR0QsT0FBTyxDQUFDLENBQWE7UUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JCOzs7O0lBS0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxLQUFLLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQzVFO0tBQ0Y7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLElBQUksRUFBTTtvQkFDUiw4QkFBOEIsRUFBRSxNQUFNO2lCQUN2QzthQUNGOzs7O1lBUm1CLFVBQVU7WUFBd0IsU0FBUzs7OzJCQWM1RCxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFOzJCQUt2QyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFO3NCQUt2QyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei1kcm9wZG93bl0nLFxuICBob3N0ICAgIDoge1xuICAgICdbY2xhc3MuYW50LWRyb3Bkb3duLXRyaWdnZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpEcm9wRG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICRtb3VzZWVudGVyID0gbmV3IFN1YmplY3Q8TW91c2VFdmVudD4oKTtcbiAgJG1vdXNlbGVhdmUgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuICAkY2xpY2sgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbICckZXZlbnQnIF0pXG4gIG9uTW91c2VFbnRlcihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy4kbW91c2VlbnRlci5uZXh0KGUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsgJyRldmVudCcgXSlcbiAgb25Nb3VzZUxlYXZlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLiRtb3VzZWxlYXZlLm5leHQoZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcbiAgb25DbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLiRjbGljay5uZXh0KGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lID09PSAnQScpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZHJvcGRvd24tbGluaycpO1xuICAgIH1cbiAgfVxufVxuIl19