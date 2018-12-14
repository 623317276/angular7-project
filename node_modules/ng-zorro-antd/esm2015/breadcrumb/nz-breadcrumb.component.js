/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Injector, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
/** @type {?} */
const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
/**
 * @record
 */
export function BreadcrumbOption() { }
function BreadcrumbOption_tsickle_Closure_declarations() {
    /** @type {?} */
    BreadcrumbOption.prototype.label;
    /** @type {?} */
    BreadcrumbOption.prototype.params;
    /** @type {?} */
    BreadcrumbOption.prototype.url;
}
export class NzBreadCrumbComponent {
    /**
     * @param {?} _injector
     */
    constructor(_injector) {
        this._injector = _injector;
        this._separator = '/';
        this.$destroy = new Subject();
        this.isTemplateRef = false;
        this.nzAutoGenerate = false;
        this.breadcrumbs = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSeparator(value) {
        this._separator = value;
        this.isTemplateRef = value instanceof TemplateRef;
    }
    /**
     * @return {?}
     */
    get nzSeparator() {
        return this._separator;
    }
    /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        /** @type {?} */
        const children = route.children;
        if (children.length === 0) {
            return breadcrumbs; // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        }
        for (const child of children) {
            if (child.outlet === PRIMARY_OUTLET) {
                /** @type {?} */
                const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
                /** @type {?} */
                const nextUrl = url + `/${routeURL}`;
                // If have data, go to generate a breadcrumb for it.
                if (child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                    /** @type {?} */
                    const breadcrumb = {
                        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB] || 'Breadcrumb',
                        params: child.snapshot.params,
                        url: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
    }
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    navigate(url, e) {
        e.preventDefault(); // Stop browsers' default navigation behavior.
        try {
            /** @type {?} */
            const router = this._injector.get(Router);
            router.navigateByUrl(url);
        }
        catch (e) {
            console.error(e);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzAutoGenerate) {
            try {
                /** @type {?} */
                const activatedRoute = this._injector.get(ActivatedRoute);
                /** @type {?} */
                const router = this._injector.get(Router);
                router.events.pipe(filter(e => e instanceof NavigationEnd), takeUntil(this.$destroy)).subscribe(() => {
                    this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root); // Build the breadcrumb tree from root route.
                });
            }
            catch (e) {
                throw new Error('You should import RouterModule if you want to use NzAutoGenerate');
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$destroy.next();
        this.$destroy.complete();
    }
}
NzBreadCrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-breadcrumb',
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>\n<ng-container *ngIf=\"nzAutoGenerate\">\n  <nz-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\n    <!-- We do not simply use routerLink here to avoid importing RouterModule to BreadcrumbModule. -->\n    <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\n  </nz-breadcrumb-item>\n</ng-container>\n",
                host: {
                    '[class.ant-breadcrumb]': 'true'
                },
                styles: [`
    :host {
      display: block;
    }
  `]
            }] }
];
/** @nocollapse */
NzBreadCrumbComponent.ctorParameters = () => [
    { type: Injector }
];
NzBreadCrumbComponent.propDecorators = {
    nzAutoGenerate: [{ type: Input }],
    nzSeparator: [{ type: Input }]
};
function NzBreadCrumbComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBreadCrumbComponent.prototype._separator;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.$destroy;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.isTemplateRef;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.nzAutoGenerate;
    /** @type {?} */
    NzBreadCrumbComponent.prototype.breadcrumbs;
    /** @type {?} */
    NzBreadCrumbComponent.prototype._injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYi9uei1icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxRQUFRLEVBQ1IsS0FBSyxFQUdMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBVSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVuRCxNQUFNLHFCQUFxQixHQUFHLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7OztBQXFCM0MsTUFBTTs7OztJQXNESixZQUFvQixTQUFtQjtRQUFuQixjQUFTLEdBQVQsU0FBUyxDQUFVOzBCQXJEVSxHQUFHO3dCQUNqQyxJQUFJLE9BQU8sRUFBRTs2QkFDaEIsS0FBSzs4QkFFSyxLQUFLOzJCQVlHLEVBQUU7S0FzQ25DOzs7OztJQWhERCxJQUNJLFdBQVcsQ0FBQyxLQUFpQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssWUFBWSxXQUFXLENBQUM7S0FDbkQ7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7Ozs7SUFJRCxjQUFjLENBQUMsS0FBcUIsRUFBRSxNQUFjLEVBQUUsRUFBRSxjQUFrQyxFQUFFOztRQUMxRixNQUFNLFFBQVEsR0FBcUIsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNsRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO1FBQ0QsS0FBSyxNQUFNLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDNUIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLGNBQWMsRUFBRTs7Z0JBR25DLE1BQU0sUUFBUSxHQUFXLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O2dCQUNuRixNQUFNLE9BQU8sR0FBRyxHQUFHLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQzs7Z0JBRXJDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEVBQUU7O29CQUM3RCxNQUFNLFVBQVUsR0FBcUI7d0JBQ25DLEtBQUssRUFBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxxQkFBcUIsQ0FBRSxJQUFJLFlBQVk7d0JBQ3BFLE1BQU0sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU07d0JBQzdCLEdBQUcsRUFBSyxPQUFPO3FCQUNoQixDQUFDO29CQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzlCO2dCQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7S0FDRjs7Ozs7O0lBRUQsUUFBUSxDQUFDLEdBQVcsRUFBRSxDQUFhO1FBQ2pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJOztZQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7S0FDRjs7OztJQUtELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSTs7Z0JBQ0YsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7O2dCQUMxRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLGFBQWEsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO29CQUNuRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3RCxDQUFDLENBQUM7YUFDSjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQzthQUNyRjtTQUNGO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzFCOzs7WUF2RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxlQUFlO2dCQUNwQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixrWkFBcUQ7Z0JBQ3JELElBQUksRUFBaUI7b0JBQ25CLHdCQUF3QixFQUFFLE1BQU07aUJBQ2pDO3lCQUNzQjs7OztHQUl0QjthQUNGOzs7O1lBOUJDLFFBQVE7Ozs2QkFvQ1AsS0FBSzswQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBQYXJhbXMsIFBSSU1BUllfT1VUTEVULCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IFJPVVRFX0RBVEFfQlJFQURDUlVNQiA9ICdicmVhZGNydW1iJztcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iT3B0aW9uIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgcGFyYW1zOiBQYXJhbXM7XG4gIHVybDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWJyZWFkY3J1bWInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1icmVhZGNydW1iXSc6ICd0cnVlJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekJyZWFkQ3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3NlcGFyYXRvcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnLyc7XG4gIHByaXZhdGUgJGRlc3Ryb3kgPSBuZXcgU3ViamVjdCgpO1xuICBpc1RlbXBsYXRlUmVmID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpBdXRvR2VuZXJhdGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpTZXBhcmF0b3IodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5fc2VwYXJhdG9yID0gdmFsdWU7XG4gICAgdGhpcy5pc1RlbXBsYXRlUmVmID0gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcbiAgfVxuXG4gIGdldCBuelNlcGFyYXRvcigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcjtcbiAgfVxuXG4gIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iT3B0aW9uW10gPSBbXTtcblxuICBnZXRCcmVhZGNydW1icyhyb3V0ZTogQWN0aXZhdGVkUm91dGUsIHVybDogc3RyaW5nID0gJycsIGJyZWFkY3J1bWJzOiBCcmVhZGNydW1iT3B0aW9uW10gPSBbXSk6IEJyZWFkY3J1bWJPcHRpb25bXSB7XG4gICAgY29uc3QgY2hpbGRyZW46IEFjdGl2YXRlZFJvdXRlW10gPSByb3V0ZS5jaGlsZHJlbjtcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnJlYWRjcnVtYnM7IC8vIElmIHRoZXJlJ3Mgbm8gc3ViIHJvb3QsIHRoZW4gc3RvcCB0aGUgcmVjdXJzZSBhbmQgcmV0dXJucyB0aGUgZ2VuZXJhdGVkIGJyZWFkY3J1bWJzLlxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICBpZiAoY2hpbGQub3V0bGV0ID09PSBQUklNQVJZX09VVExFVCkge1xuICAgICAgICAvLyBPbmx5IHBhcnNlIGNvbXBvbmVudHMgaW4gcHJpbWFyeSByb3V0ZXItb3V0bGV0IChpbiBhbm90aGVyIHdvcmQsIHJvdXRlci1vdXRsZXQgd2l0aG91dCBhIHNwZWNpZmljIG5hbWUpLlxuICAgICAgICAvLyBQYXJzZSB0aGlzIGxheWVyIGFuZCBnZW5lcmF0ZSBhIGJyZWFkY3J1bWIgaXRlbS5cbiAgICAgICAgY29uc3Qgcm91dGVVUkw6IHN0cmluZyA9IGNoaWxkLnNuYXBzaG90LnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcbiAgICAgICAgY29uc3QgbmV4dFVybCA9IHVybCArIGAvJHtyb3V0ZVVSTH1gO1xuICAgICAgICAvLyBJZiBoYXZlIGRhdGEsIGdvIHRvIGdlbmVyYXRlIGEgYnJlYWRjcnVtYiBmb3IgaXQuXG4gICAgICAgIGlmIChjaGlsZC5zbmFwc2hvdC5kYXRhLmhhc093blByb3BlcnR5KFJPVVRFX0RBVEFfQlJFQURDUlVNQikpIHtcbiAgICAgICAgICBjb25zdCBicmVhZGNydW1iOiBCcmVhZGNydW1iT3B0aW9uID0ge1xuICAgICAgICAgICAgbGFiZWwgOiBjaGlsZC5zbmFwc2hvdC5kYXRhWyBST1VURV9EQVRBX0JSRUFEQ1JVTUIgXSB8fCAnQnJlYWRjcnVtYicsXG4gICAgICAgICAgICBwYXJhbXM6IGNoaWxkLnNuYXBzaG90LnBhcmFtcyxcbiAgICAgICAgICAgIHVybCAgIDogbmV4dFVybFxuICAgICAgICAgIH07XG4gICAgICAgICAgYnJlYWRjcnVtYnMucHVzaChicmVhZGNydW1iKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCcmVhZGNydW1icyhjaGlsZCwgbmV4dFVybCwgYnJlYWRjcnVtYnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5hdmlnYXRlKHVybDogc3RyaW5nLCBlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBTdG9wIGJyb3dzZXJzJyBkZWZhdWx0IG5hdmlnYXRpb24gYmVoYXZpb3IuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuX2luamVjdG9yLmdldChSb3V0ZXIpO1xuICAgICAgcm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvR2VuZXJhdGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjdGl2YXRlZFJvdXRlID0gdGhpcy5faW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcbiAgICAgICAgY29uc3Qgcm91dGVyID0gdGhpcy5faW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgICAgIHJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksIHRha2VVbnRpbCh0aGlzLiRkZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gdGhpcy5nZXRCcmVhZGNydW1icyhhY3RpdmF0ZWRSb3V0ZS5yb290KTsgLy8gQnVpbGQgdGhlIGJyZWFkY3J1bWIgdHJlZSBmcm9tIHJvb3Qgcm91dGUuXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBzaG91bGQgaW1wb3J0IFJvdXRlck1vZHVsZSBpZiB5b3Ugd2FudCB0byB1c2UgTnpBdXRvR2VuZXJhdGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLiRkZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLiRkZXN0cm95LmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==