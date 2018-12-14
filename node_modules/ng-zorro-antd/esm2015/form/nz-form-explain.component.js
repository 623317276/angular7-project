/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NzFormItemComponent } from './nz-form-item.component';
export class NzFormExplainComponent {
    /**
     * @param {?} nzFormItemComponent
     */
    constructor(nzFormItemComponent) {
        this.nzFormItemComponent = nzFormItemComponent;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.nzFormItemComponent.disableHelp();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzFormItemComponent.enableHelp();
    }
}
NzFormExplainComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-explain',
                preserveWhitespaces: false,
                animations: [
                    trigger('formExplainAnimation', [
                        transition('void => *', [
                            style({
                                opacity: 0,
                                transform: 'translateY(-5px)'
                            }),
                            animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                opacity: 1,
                                transform: 'translateY(0)'
                            }))
                        ]),
                        transition('* => void', [
                            style({
                                opacity: 1,
                                transform: 'translateY(0)'
                            }),
                            animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                opacity: 0,
                                transform: 'translateY(-5px)'
                            }))
                        ])
                    ])
                ],
                template: "<div [@formExplainAnimation]>\n  <ng-content></ng-content>\n</div>",
                host: {
                    '[class.ant-form-explain]': 'true'
                },
                styles: [`:host{
      display:block;
    }`]
            }] }
];
/** @nocollapse */
NzFormExplainComponent.ctorParameters = () => [
    { type: NzFormItemComponent }
];
function NzFormExplainComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormExplainComponent.prototype.nzFormItemComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQXVDL0QsTUFBTTs7OztJQUNKLFlBQW9CLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0tBQzNEOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN4Qzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDdkM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGlCQUFpQjtnQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsVUFBVSxFQUFXO29CQUNuQixPQUFPLENBQUMsc0JBQXNCLEVBQUU7d0JBQzlCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3RCLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUksQ0FBQztnQ0FDWixTQUFTLEVBQUUsa0JBQWtCOzZCQUM5QixDQUFDOzRCQUNGLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRSxLQUFLLENBQUM7Z0NBQ3pELE9BQU8sRUFBSSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxlQUFlOzZCQUMzQixDQUFDLENBQUM7eUJBQ0osQ0FBQzt3QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFJLENBQUM7Z0NBQ1osU0FBUyxFQUFFLGVBQWU7NkJBQzNCLENBQUM7NEJBQ0YsT0FBTyxDQUFDLDJDQUEyQyxFQUFFLEtBQUssQ0FBQztnQ0FDekQsT0FBTyxFQUFJLENBQUM7Z0NBQ1osU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQyxDQUFDO3lCQUNKLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDtnQkFDRCw4RUFBdUQ7Z0JBQ3ZELElBQUksRUFBaUI7b0JBQ25CLDBCQUEwQixFQUFFLE1BQU07aUJBQ25DO3lCQUVDOztNQUVFO2FBRUw7Ozs7WUF0Q1EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekZvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1mb3JtLWV4cGxhaW4nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ2Zvcm1FeHBsYWluQW5pbWF0aW9uJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICA6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgIDogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXG4gICAgICAgIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWV4cGxhaW4uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1leHBsYWluXSc6ICd0cnVlJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYDpob3N0e1xuICAgICAgZGlzcGxheTpibG9jaztcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUV4cGxhaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpGb3JtSXRlbUNvbXBvbmVudDogTnpGb3JtSXRlbUNvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5uekZvcm1JdGVtQ29tcG9uZW50LmRpc2FibGVIZWxwKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Rm9ybUl0ZW1Db21wb25lbnQuZW5hYmxlSGVscCgpO1xuICB9XG59XG4iXX0=