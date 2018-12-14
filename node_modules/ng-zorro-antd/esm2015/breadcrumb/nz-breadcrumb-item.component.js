/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';
export class NzBreadCrumbItemComponent {
    /**
     * @param {?} nzBreadCrumbComponent
     */
    constructor(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
}
NzBreadCrumbItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-breadcrumb-item',
                preserveWhitespaces: false,
                template: `
    <span class="ant-breadcrumb-link">
      <ng-content></ng-content>
    </span>
    <span class="ant-breadcrumb-separator">
      <ng-container *ngIf="nzBreadCrumbComponent.isTemplateRef; else stringTemplate">
        <ng-template [ngTemplateOutlet]="nzBreadCrumbComponent.nzSeparator"></ng-template>
      </ng-container>
      <ng-template #stringTemplate>
         {{ nzBreadCrumbComponent.nzSeparator }}
      </ng-template>
    </span>`,
                styles: [`:host:last-child {
      color: rgba(0, 0, 0, 0.65);
    }

    :host:last-child .ant-breadcrumb-separator{
      display: none;
    }
    `]
            }] }
];
/** @nocollapse */
NzBreadCrumbItemComponent.ctorParameters = () => [
    { type: NzBreadCrumbComponent }
];
function NzBreadCrumbItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBreadCrumbItemComponent.prototype.nzBreadCrumbComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJicmVhZGNydW1iL256LWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUE0QmxFLE1BQU07Ozs7SUFDSixZQUFtQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtLQUM5RDs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsb0JBQW9CO2dCQUN6QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixRQUFRLEVBQWE7Ozs7Ozs7Ozs7O1lBV1g7eUJBRU47Ozs7Ozs7S0FPRDthQUVKOzs7O1lBM0JRLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekJyZWFkQ3J1bWJDb21wb25lbnQgfSBmcm9tICcuL256LWJyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1icmVhZGNydW1iLWl0ZW0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGUgICAgICAgICAgIDogYFxuICAgIDxzcGFuIGNsYXNzPVwiYW50LWJyZWFkY3J1bWItbGlua1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImFudC1icmVhZGNydW1iLXNlcGFyYXRvclwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm56QnJlYWRDcnVtYkNvbXBvbmVudC5pc1RlbXBsYXRlUmVmOyBlbHNlIHN0cmluZ1RlbXBsYXRlXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJuekJyZWFkQ3J1bWJDb21wb25lbnQubnpTZXBhcmF0b3JcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctdGVtcGxhdGUgI3N0cmluZ1RlbXBsYXRlPlxuICAgICAgICAge3sgbnpCcmVhZENydW1iQ29tcG9uZW50Lm56U2VwYXJhdG9yIH19XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvc3Bhbj5gLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgICBgOmhvc3Q6bGFzdC1jaGlsZCB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgICB9XG5cbiAgICA6aG9zdDpsYXN0LWNoaWxkIC5hbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3J7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpCcmVhZENydW1iSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuekJyZWFkQ3J1bWJDb21wb25lbnQ6IE56QnJlYWRDcnVtYkNvbXBvbmVudCkge1xuICB9XG5cbn1cbiJdfQ==