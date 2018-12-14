/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';
var NzBreadCrumbItemComponent = /** @class */ (function () {
    function NzBreadCrumbItemComponent(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
    NzBreadCrumbItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-breadcrumb-item',
                    preserveWhitespaces: false,
                    template: "\n    <span class=\"ant-breadcrumb-link\">\n      <ng-content></ng-content>\n    </span>\n    <span class=\"ant-breadcrumb-separator\">\n      <ng-container *ngIf=\"nzBreadCrumbComponent.isTemplateRef; else stringTemplate\">\n        <ng-template [ngTemplateOutlet]=\"nzBreadCrumbComponent.nzSeparator\"></ng-template>\n      </ng-container>\n      <ng-template #stringTemplate>\n         {{ nzBreadCrumbComponent.nzSeparator }}\n      </ng-template>\n    </span>",
                    styles: [":host:last-child {\n      color: rgba(0, 0, 0, 0.65);\n    }\n\n    :host:last-child .ant-breadcrumb-separator{\n      display: none;\n    }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzBreadCrumbItemComponent.ctorParameters = function () { return [
        { type: NzBreadCrumbComponent }
    ]; };
    return NzBreadCrumbItemComponent;
}());
export { NzBreadCrumbItemComponent };
function NzBreadCrumbItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBreadCrumbItemComponent.prototype.nzBreadCrumbComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJicmVhZGNydW1iL256LWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBNkJoRSxtQ0FBbUIscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7S0FDOUQ7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLG9CQUFvQjtvQkFDekMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsUUFBUSxFQUFhLGlkQVdYOzZCQUVOLG9KQU9EO2lCQUVKOzs7O2dCQTNCUSxxQkFBcUI7O29DQUY5Qjs7U0E4QmEseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QnJlYWRDcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vbnotYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWJyZWFkY3J1bWItaXRlbScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZSAgICAgICAgICAgOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJhbnQtYnJlYWRjcnVtYi1saW5rXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiYW50LWJyZWFkY3J1bWItc2VwYXJhdG9yXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibnpCcmVhZENydW1iQ29tcG9uZW50LmlzVGVtcGxhdGVSZWY7IGVsc2Ugc3RyaW5nVGVtcGxhdGVcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm56QnJlYWRDcnVtYkNvbXBvbmVudC5uelNlcGFyYXRvclwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjc3RyaW5nVGVtcGxhdGU+XG4gICAgICAgICB7eyBuekJyZWFkQ3J1bWJDb21wb25lbnQubnpTZXBhcmF0b3IgfX1cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9zcGFuPmAsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICAgIGA6aG9zdDpsYXN0LWNoaWxkIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICAgIH1cblxuICAgIDpob3N0Omxhc3QtY2hpbGQgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvcntcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekJyZWFkQ3J1bWJJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIG56QnJlYWRDcnVtYkNvbXBvbmVudDogTnpCcmVhZENydW1iQ29tcG9uZW50KSB7XG4gIH1cblxufVxuIl19