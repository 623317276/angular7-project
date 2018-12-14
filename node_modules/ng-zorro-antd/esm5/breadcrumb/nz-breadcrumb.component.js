/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Injector, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
/** @type {?} */
var ROUTE_DATA_BREADCRUMB = 'breadcrumb';
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
var NzBreadCrumbComponent = /** @class */ (function () {
    function NzBreadCrumbComponent(_injector) {
        this._injector = _injector;
        this._separator = '/';
        this.$destroy = new Subject();
        this.isTemplateRef = false;
        this.nzAutoGenerate = false;
        this.breadcrumbs = [];
    }
    Object.defineProperty(NzBreadCrumbComponent.prototype, "nzSeparator", {
        get: /**
         * @return {?}
         */
        function () {
            return this._separator;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._separator = value;
            this.isTemplateRef = value instanceof TemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.getBreadcrumbs = /**
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var e_1, _a;
        /** @type {?} */
        var children = route.children;
        if (children.length === 0) {
            return breadcrumbs; // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        }
        try {
            for (var children_1 = tslib_1.__values(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.outlet === PRIMARY_OUTLET) {
                    /** @type {?} */
                    var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
                    /** @type {?} */
                    var nextUrl = url + ("/" + routeURL);
                    // If have data, go to generate a breadcrumb for it.
                    if (child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                        /** @type {?} */
                        var breadcrumb = {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.navigate = /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    function (url, e) {
        e.preventDefault(); // Stop browsers' default navigation behavior.
        try {
            /** @type {?} */
            var router = this._injector.get(Router);
            router.navigateByUrl(url);
        }
        catch (e) {
            console.error(e);
        }
    };
    /**
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzAutoGenerate) {
            try {
                /** @type {?} */
                var activatedRoute_1 = this._injector.get(ActivatedRoute);
                /** @type {?} */
                var router = this._injector.get(Router);
                router.events.pipe(filter(function (e) { return e instanceof NavigationEnd; }), takeUntil(this.$destroy)).subscribe(function () {
                    _this.breadcrumbs = _this.getBreadcrumbs(activatedRoute_1.root); // Build the breadcrumb tree from root route.
                });
            }
            catch (e) {
                throw new Error('You should import RouterModule if you want to use NzAutoGenerate');
            }
        }
    };
    /**
     * @return {?}
     */
    NzBreadCrumbComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.$destroy.next();
        this.$destroy.complete();
    };
    NzBreadCrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-breadcrumb',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>\n<ng-container *ngIf=\"nzAutoGenerate\">\n  <nz-breadcrumb-item *ngFor=\"let breadcrumb of breadcrumbs\">\n    <!-- We do not simply use routerLink here to avoid importing RouterModule to BreadcrumbModule. -->\n    <a [attr.href]=\"breadcrumb.url\" (click)=\"navigate(breadcrumb.url, $event)\">{{ breadcrumb.label }}</a>\n  </nz-breadcrumb-item>\n</ng-container>\n",
                    host: {
                        '[class.ant-breadcrumb]': 'true'
                    },
                    styles: ["\n    :host {\n      display: block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzBreadCrumbComponent.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    NzBreadCrumbComponent.propDecorators = {
        nzAutoGenerate: [{ type: Input }],
        nzSeparator: [{ type: Input }]
    };
    return NzBreadCrumbComponent;
}());
export { NzBreadCrumbComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYi9uei1icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsUUFBUSxFQUNSLEtBQUssRUFHTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQVUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsSUFBTSxxQkFBcUIsR0FBRyxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBMkV6QywrQkFBb0IsU0FBbUI7UUFBbkIsY0FBUyxHQUFULFNBQVMsQ0FBVTswQkFyRFUsR0FBRzt3QkFDakMsSUFBSSxPQUFPLEVBQUU7NkJBQ2hCLEtBQUs7OEJBRUssS0FBSzsyQkFZRyxFQUFFO0tBc0NuQztJQWhERCxzQkFDSSw4Q0FBVzs7OztRQUtmO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQVJELFVBQ2dCLEtBQWlDO1lBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxZQUFZLFdBQVcsQ0FBQztTQUNuRDs7O09BQUE7Ozs7Ozs7SUFRRCw4Q0FBYzs7Ozs7O0lBQWQsVUFBZSxLQUFxQixFQUFFLEdBQWdCLEVBQUUsV0FBb0M7UUFBdEQsb0JBQUEsRUFBQSxRQUFnQjtRQUFFLDRCQUFBLEVBQUEsZ0JBQW9DOzs7UUFDMUYsSUFBTSxRQUFRLEdBQXFCLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFD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QixpREFJdEI7aUJBQ0Y7Ozs7Z0JBOUJDLFFBQVE7OztpQ0FvQ1AsS0FBSzs4QkFFTCxLQUFLOztnQ0F4Q1I7O1NBaUNhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUGFyYW1zLCBQUklNQVJZX09VVExFVCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBST1VURV9EQVRBX0JSRUFEQ1JVTUIgPSAnYnJlYWRjcnVtYic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYk9wdGlvbiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBhcmFtczogUGFyYW1zO1xuICB1cmw6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1icmVhZGNydW1iJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtYnJlYWRjcnVtYl0nOiAndHJ1ZSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpCcmVhZENydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zZXBhcmF0b3I6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJy8nO1xuICBwcml2YXRlICRkZXN0cm95ID0gbmV3IFN1YmplY3QoKTtcbiAgaXNUZW1wbGF0ZVJlZiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG56QXV0b0dlbmVyYXRlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuX3NlcGFyYXRvciA9IHZhbHVlO1xuICAgIHRoaXMuaXNUZW1wbGF0ZVJlZiA9IHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICBnZXQgbnpTZXBhcmF0b3IoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9zZXBhcmF0b3I7XG4gIH1cblxuICBicmVhZGNydW1iczogQnJlYWRjcnVtYk9wdGlvbltdID0gW107XG5cbiAgZ2V0QnJlYWRjcnVtYnMocm91dGU6IEFjdGl2YXRlZFJvdXRlLCB1cmw6IHN0cmluZyA9ICcnLCBicmVhZGNydW1iczogQnJlYWRjcnVtYk9wdGlvbltdID0gW10pOiBCcmVhZGNydW1iT3B0aW9uW10ge1xuICAgIGNvbnN0IGNoaWxkcmVuOiBBY3RpdmF0ZWRSb3V0ZVtdID0gcm91dGUuY2hpbGRyZW47XG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGJyZWFkY3J1bWJzOyAvLyBJZiB0aGVyZSdzIG5vIHN1YiByb290LCB0aGVuIHN0b3AgdGhlIHJlY3Vyc2UgYW5kIHJldHVybnMgdGhlIGdlbmVyYXRlZCBicmVhZGNydW1icy5cbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKGNoaWxkLm91dGxldCA9PT0gUFJJTUFSWV9PVVRMRVQpIHtcbiAgICAgICAgLy8gT25seSBwYXJzZSBjb21wb25lbnRzIGluIHByaW1hcnkgcm91dGVyLW91dGxldCAoaW4gYW5vdGhlciB3b3JkLCByb3V0ZXItb3V0bGV0IHdpdGhvdXQgYSBzcGVjaWZpYyBuYW1lKS5cbiAgICAgICAgLy8gUGFyc2UgdGhpcyBsYXllciBhbmQgZ2VuZXJhdGUgYSBicmVhZGNydW1iIGl0ZW0uXG4gICAgICAgIGNvbnN0IHJvdXRlVVJMOiBzdHJpbmcgPSBjaGlsZC5zbmFwc2hvdC51cmwubWFwKHNlZ21lbnQgPT4gc2VnbWVudC5wYXRoKS5qb2luKCcvJyk7XG4gICAgICAgIGNvbnN0IG5leHRVcmwgPSB1cmwgKyBgLyR7cm91dGVVUkx9YDtcbiAgICAgICAgLy8gSWYgaGF2ZSBkYXRhLCBnbyB0byBnZW5lcmF0ZSBhIGJyZWFkY3J1bWIgZm9yIGl0LlxuICAgICAgICBpZiAoY2hpbGQuc25hcHNob3QuZGF0YS5oYXNPd25Qcm9wZXJ0eShST1VURV9EQVRBX0JSRUFEQ1JVTUIpKSB7XG4gICAgICAgICAgY29uc3QgYnJlYWRjcnVtYjogQnJlYWRjcnVtYk9wdGlvbiA9IHtcbiAgICAgICAgICAgIGxhYmVsIDogY2hpbGQuc25hcHNob3QuZGF0YVsgUk9VVEVfREFUQV9CUkVBRENSVU1CIF0gfHwgJ0JyZWFkY3J1bWInLFxuICAgICAgICAgICAgcGFyYW1zOiBjaGlsZC5zbmFwc2hvdC5wYXJhbXMsXG4gICAgICAgICAgICB1cmwgICA6IG5leHRVcmxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGJyZWFkY3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnJlYWRjcnVtYnMoY2hpbGQsIG5leHRVcmwsIGJyZWFkY3J1bWJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuYXZpZ2F0ZSh1cmw6IHN0cmluZywgZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gU3RvcCBicm93c2VycycgZGVmYXVsdCBuYXZpZ2F0aW9uIGJlaGF2aW9yLlxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSB0aGlzLl9pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b0dlbmVyYXRlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY3RpdmF0ZWRSb3V0ZSA9IHRoaXMuX2luamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuX2luamVjdG9yLmdldChSb3V0ZXIpO1xuICAgICAgICByb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGUgPT4gZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLCB0YWtlVW50aWwodGhpcy4kZGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5icmVhZGNydW1icyA9IHRoaXMuZ2V0QnJlYWRjcnVtYnMoYWN0aXZhdGVkUm91dGUucm9vdCk7IC8vIEJ1aWxkIHRoZSBicmVhZGNydW1iIHRyZWUgZnJvbSByb290IHJvdXRlLlxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3Ugc2hvdWxkIGltcG9ydCBSb3V0ZXJNb2R1bGUgaWYgeW91IHdhbnQgdG8gdXNlIE56QXV0b0dlbmVyYXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kZGVzdHJveS5uZXh0KCk7XG4gICAgdGhpcy4kZGVzdHJveS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=