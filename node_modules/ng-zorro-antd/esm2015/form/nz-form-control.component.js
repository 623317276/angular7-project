/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowComponent } from '../grid/nz-row.component';
import { NzRowDirective } from '../grid/nz-row.directive';
export class NzFormControlComponent extends NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzRowComponent
     * @param {?} nzRowDirective
     * @param {?} renderer
     */
    constructor(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) {
        super(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer);
        this._hasFeedback = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    get nzHasFeedback() {
        return this._hasFeedback;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValidateStatus(value) {
        if (value instanceof FormControl) {
            this.validateControl = value;
            this.validateString = null;
            this.controlStatus = null;
            this.setControlClassMap();
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.removeSubscribe();
            this.setControlClassMap();
        }
    }
    /**
     * @return {?}
     */
    removeSubscribe() {
        if (this.validateChanges) {
            this.validateChanges.unsubscribe();
            this.validateChanges = null;
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateValidateStatus(status) {
        if (this.validateControl.dirty || this.validateControl.touched) {
            this.controlStatus = status;
            this.setControlClassMap();
        }
        else {
            this.controlStatus = null;
            this.setControlClassMap();
        }
    }
    /**
     * @return {?}
     */
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.subscribe(data => this.updateValidateStatus(data));
        }
    }
    /**
     * @return {?}
     */
    setControlClassMap() {
        this.controlClassMap = {
            [`has-warning`]: this.validateString === 'warning',
            [`is-validating`]: this.validateString === 'validating' || this.validateString === 'pending' || this.controlStatus === 'PENDING',
            [`has-error`]: this.validateString === 'error' || this.controlStatus === 'INVALID',
            [`has-success`]: this.validateString === 'success' || this.controlStatus === 'VALID',
            [`has-feedback`]: this.nzHasFeedback
        };
        if (this.controlClassMap['has-warning']) {
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.controlClassMap['is-validating']) {
            this.iconType = 'loading';
        }
        else if (this.controlClassMap['has-error']) {
            this.iconType = 'close-circle-fill';
        }
        else if (this.controlClassMap['has-success']) {
            this.iconType = 'check-circle-fill';
        }
        else {
            this.iconType = '';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeSubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.watchControl();
        if (this.validateControl) {
            this.updateValidateStatus(this.validateControl.status);
        }
    }
}
NzFormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-control',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\n  <span class=\"ant-form-item-children\">\n    <ng-content></ng-content>\n    <span class=\"ant-form-item-children-icon\">\n      <i *ngIf=\"nzHasFeedback && iconType\" nz-icon [type]=\"iconType\"></i>\n    </span>\n  </span>\n  <ng-content select=\"nz-form-explain\"></ng-content>\n</div>",
                host: {
                    '[class.ant-form-item-control-wrapper]': 'true'
                },
                styles: [`:host {
    display: block;
  }`]
            }] }
];
/** @nocollapse */
NzFormControlComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 }
];
NzFormControlComponent.propDecorators = {
    validateControl: [{ type: ContentChild, args: [NgControl,] }],
    nzHasFeedback: [{ type: Input }],
    nzValidateStatus: [{ type: Input }]
};
function NzFormControlComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormControlComponent.prototype._hasFeedback;
    /** @type {?} */
    NzFormControlComponent.prototype.validateChanges;
    /** @type {?} */
    NzFormControlComponent.prototype.validateString;
    /** @type {?} */
    NzFormControlComponent.prototype.controlStatus;
    /** @type {?} */
    NzFormControlComponent.prototype.controlClassMap;
    /** @type {?} */
    NzFormControlComponent.prototype.iconType;
    /** @type {?} */
    NzFormControlComponent.prototype.validateControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFjMUQsTUFBTSw2QkFBOEIsU0FBUSxjQUFjOzs7Ozs7OztJQW1GeEQsWUFBWSx3QkFBa0QsRUFBRSxVQUFzQixFQUFzQixjQUE4QixFQUFzQixjQUE4QixFQUFFLFFBQW1CO1FBQ2pOLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQzs0QkFuRmpFLEtBQUs7S0FvRjNCOzs7OztJQTVFRCxJQUNJLGFBQWEsQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7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TCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztTQUNwQjtLQUNGOzs7O0lBTUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RDtLQUNGOzs7WUFqSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxpQkFBaUI7Z0JBQ3RDLFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO2dCQUNqRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixrWEFBdUQ7Z0JBQ3ZELElBQUksRUFBaUI7b0JBQ25CLHVDQUF1QyxFQUFFLE1BQU07aUJBQ2hEO3lCQUNzQjs7SUFFckI7YUFDSDs7OztZQWpCUSx3QkFBd0I7WUFUL0IsVUFBVTtZQVlILGNBQWMsdUJBa0dvRSxRQUFRLFlBQUksSUFBSTtZQWpHbEcsY0FBYyx1QkFpR3dILFFBQVEsWUFBSSxJQUFJO1lBeEc3SixTQUFTOzs7OEJBNEJSLFlBQVksU0FBQyxTQUFTOzRCQUV0QixLQUFLOytCQVVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpDb2xDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkL256LWNvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSb3dDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkL256LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuLi9ncmlkL256LXJvdy5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0tY29udHJvbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlcl0nOiAndHJ1ZSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9YCBdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBOekNvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfaGFzRmVlZGJhY2sgPSBmYWxzZTtcbiAgdmFsaWRhdGVDaGFuZ2VzOiBTdWJzY3JpcHRpb247XG4gIHZhbGlkYXRlU3RyaW5nOiBzdHJpbmc7XG4gIGNvbnRyb2xTdGF0dXM6IHN0cmluZztcbiAgY29udHJvbENsYXNzTWFwO1xuICBpY29uVHlwZTogc3RyaW5nO1xuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCkgdmFsaWRhdGVDb250cm9sOiBGb3JtQ29udHJvbDtcblxuICBASW5wdXQoKVxuICBzZXQgbnpIYXNGZWVkYmFjayh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc0ZlZWRiYWNrID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56SGFzRmVlZGJhY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0ZlZWRiYWNrO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IEZvcm1Db250cm9sKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWU7XG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuY29udHJvbFN0YXR1cyA9IG51bGw7XG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IHZhbHVlO1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSBudWxsO1xuICAgICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ2hhbmdlcykge1xuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWxpZGF0ZVN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbC5kaXJ0eSB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbC50b3VjaGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTdGF0dXMgPSBzdGF0dXM7XG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2xTdGF0dXMgPSBudWxsO1xuICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICB3YXRjaENvbnRyb2woKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcbiAgICAvKiogbWlzcyBkZXRlY3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4ODcgKiovXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sICYmIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnVwZGF0ZVZhbGlkYXRlU3RhdHVzKGRhdGEpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHNldENvbnRyb2xDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2xDbGFzc01hcCA9IHtcbiAgICAgIFsgYGhhcy13YXJuaW5nYCBdICA6IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd3YXJuaW5nJyxcbiAgICAgIFsgYGlzLXZhbGlkYXRpbmdgIF06IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd2YWxpZGF0aW5nJyB8fCB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAncGVuZGluZycgfHwgdGhpcy5jb250cm9sU3RhdHVzID09PSAnUEVORElORycsXG4gICAgICBbIGBoYXMtZXJyb3JgIF0gICAgOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMuY29udHJvbFN0YXR1cyA9PT0gJ0lOVkFMSUQnLFxuICAgICAgWyBgaGFzLXN1Y2Nlc3NgIF0gIDogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMuY29udHJvbFN0YXR1cyA9PT0gJ1ZBTElEJyxcbiAgICAgIFsgYGhhcy1mZWVkYmFja2AgXSA6IHRoaXMubnpIYXNGZWVkYmFja1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5jb250cm9sQ2xhc3NNYXBbICdoYXMtd2FybmluZycgXSkge1xuICAgICAgdGhpcy5pY29uVHlwZSA9ICdleGNsYW1hdGlvbi1jaXJjbGUtZmlsbCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2xDbGFzc01hcFsgJ2lzLXZhbGlkYXRpbmcnIF0pIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnbG9hZGluZyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2xDbGFzc01hcFsnaGFzLWVycm9yJ10pIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2xvc2UtY2lyY2xlLWZpbGwnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sQ2xhc3NNYXBbJ2hhcy1zdWNjZXNzJ10pIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2hlY2stY2lyY2xlLWZpbGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb25UeXBlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpSb3dDb21wb25lbnQ6IE56Um93Q29tcG9uZW50LCBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZiwgbnpSb3dDb21wb25lbnQsIG56Um93RGlyZWN0aXZlLCByZW5kZXJlcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy53YXRjaENvbnRyb2woKTtcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRhdGVTdGF0dXModGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==