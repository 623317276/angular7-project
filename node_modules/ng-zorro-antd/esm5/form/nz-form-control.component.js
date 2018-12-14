/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowComponent } from '../grid/nz-row.component';
import { NzRowDirective } from '../grid/nz-row.directive';
var NzFormControlComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzFormControlComponent, _super);
    function NzFormControlComponent(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) || this;
        _this._hasFeedback = false;
        return _this;
    }
    Object.defineProperty(NzFormControlComponent.prototype, "nzHasFeedback", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFeedback;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasFeedback = toBoolean(value);
            this.setControlClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "nzValidateStatus", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.removeSubscribe = /**
     * @return {?}
     */
    function () {
        if (this.validateChanges) {
            this.validateChanges.unsubscribe();
            this.validateChanges = null;
        }
    };
    /**
     * @param {?} status
     * @return {?}
     */
    NzFormControlComponent.prototype.updateValidateStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        if (this.validateControl.dirty || this.validateControl.touched) {
            this.controlStatus = status;
            this.setControlClassMap();
        }
        else {
            this.controlStatus = null;
            this.setControlClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.watchControl = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.subscribe(function (data) { return _this.updateValidateStatus(data); });
        }
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.setControlClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.controlClassMap = (_a = {},
            _a["has-warning"] = this.validateString === 'warning',
            _a["is-validating"] = this.validateString === 'validating' || this.validateString === 'pending' || this.controlStatus === 'PENDING',
            _a["has-error"] = this.validateString === 'error' || this.controlStatus === 'INVALID',
            _a["has-success"] = this.validateString === 'success' || this.controlStatus === 'VALID',
            _a["has-feedback"] = this.nzHasFeedback,
            _a);
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
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.setControlClassMap();
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeSubscribe();
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.watchControl();
        if (this.validateControl) {
            this.updateValidateStatus(this.validateControl.status);
        }
    };
    NzFormControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-control',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\n  <span class=\"ant-form-item-children\">\n    <ng-content></ng-content>\n    <span class=\"ant-form-item-children-icon\">\n      <i *ngIf=\"nzHasFeedback && iconType\" nz-icon [type]=\"iconType\"></i>\n    </span>\n  </span>\n  <ng-content select=\"nz-form-explain\"></ng-content>\n</div>",
                    host: {
                        '[class.ant-form-item-control-wrapper]': 'true'
                    },
                    styles: [":host {\n    display: block;\n  }"]
                }] }
    ];
    /** @nocollapse */
    NzFormControlComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 }
    ]; };
    NzFormControlComponent.propDecorators = {
        validateControl: [{ type: ContentChild, args: [NgControl,] }],
        nzHasFeedback: [{ type: Input }],
        nzValidateStatus: [{ type: Input }]
    };
    return NzFormControlComponent;
}(NzColComponent));
export { NzFormControlComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQWNkLGtEQUFjO0lBbUZ4RCxnQ0FBWSx3QkFBa0QsRUFBRSxVQUFzQixFQUFzQixjQUE4QixFQUFzQixjQUE4QixFQUFFLFFBQW1CO1FBQW5OLFlBQ0Usa0JBQU0sd0JBQXdCLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsUUFBUSxDQUFDLFNBQ3RGOzZCQXBGc0IsS0FBSzs7S0FvRjNCO0lBNUVELHNCQUNJLGlEQUFhOzs7O1FBS2pCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCOzs7OztRQVJELFVBQ2tCLEtBQWM7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7OztPQUFBO0lBTUQsc0JBQ0ksb0RB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QUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztTQUNyQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDcEI7S0FDRjs7OztJQU1ELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELG1EQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RDtLQUNGOztnQkFqSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxpQkFBaUI7b0JBQ3RDLFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO29CQUNqRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixrWEFBdUQ7b0JBQ3ZELElBQUksRUFBaUI7d0JBQ25CLHVDQUF1QyxFQUFFLE1BQU07cUJBQ2hEOzZCQUNzQixtQ0FFckI7aUJBQ0g7Ozs7Z0JBakJRLHdCQUF3QjtnQkFUL0IsVUFBVTtnQkFZSCxjQUFjLHVCQWtHb0UsUUFBUSxZQUFJLElBQUk7Z0JBakdsRyxjQUFjLHVCQWlHd0gsUUFBUSxZQUFJLElBQUk7Z0JBeEc3SixTQUFTOzs7a0NBNEJSLFlBQVksU0FBQyxTQUFTO2dDQUV0QixLQUFLO21DQVVMLEtBQUs7O2lDQWxEUjtFQStCNEMsY0FBYztTQUE3QyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpDb2xDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkL256LWNvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSb3dDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkL256LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuLi9ncmlkL256LXJvdy5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0tY29udHJvbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlcl0nOiAndHJ1ZSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9YCBdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBOekNvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfaGFzRmVlZGJhY2sgPSBmYWxzZTtcbiAgdmFsaWRhdGVDaGFuZ2VzOiBTdWJzY3JpcHRpb247XG4gIHZhbGlkYXRlU3RyaW5nOiBzdHJpbmc7XG4gIGNvbnRyb2xTdGF0dXM6IHN0cmluZztcbiAgY29udHJvbENsYXNzTWFwO1xuICBpY29uVHlwZTogc3RyaW5nO1xuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCkgdmFsaWRhdGVDb250cm9sOiBGb3JtQ29udHJvbDtcblxuICBASW5wdXQoKVxuICBzZXQgbnpIYXNGZWVkYmFjayh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc0ZlZWRiYWNrID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56SGFzRmVlZGJhY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0ZlZWRiYWNrO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IEZvcm1Db250cm9sKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWU7XG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcbiAgICAgIHRoaXMuY29udHJvbFN0YXR1cyA9IG51bGw7XG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IHZhbHVlO1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSBudWxsO1xuICAgICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ2hhbmdlcykge1xuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWxpZGF0ZVN0YXR1cyhzdGF0dXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbC5kaXJ0eSB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbC50b3VjaGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2xTdGF0dXMgPSBzdGF0dXM7XG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2xTdGF0dXMgPSBudWxsO1xuICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICB3YXRjaENvbnRyb2woKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcbiAgICAvKiogbWlzcyBkZXRlY3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4ODcgKiovXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sICYmIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLnVwZGF0ZVZhbGlkYXRlU3RhdHVzKGRhdGEpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHNldENvbnRyb2xDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2xDbGFzc01hcCA9IHtcbiAgICAgIFsgYGhhcy13YXJuaW5nYCBdICA6IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd3YXJuaW5nJyxcbiAgICAgIFsgYGlzLXZhbGlkYXRpbmdgIF06IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICd2YWxpZGF0aW5nJyB8fCB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAncGVuZGluZycgfHwgdGhpcy5jb250cm9sU3RhdHVzID09PSAnUEVORElORycsXG4gICAgICBbIGBoYXMtZXJyb3JgIF0gICAgOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMuY29udHJvbFN0YXR1cyA9PT0gJ0lOVkFMSUQnLFxuICAgICAgWyBgaGFzLXN1Y2Nlc3NgIF0gIDogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMuY29udHJvbFN0YXR1cyA9PT0gJ1ZBTElEJyxcbiAgICAgIFsgYGhhcy1mZWVkYmFja2AgXSA6IHRoaXMubnpIYXNGZWVkYmFja1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5jb250cm9sQ2xhc3NNYXBbICdoYXMtd2FybmluZycgXSkge1xuICAgICAgdGhpcy5pY29uVHlwZSA9ICdleGNsYW1hdGlvbi1jaXJjbGUtZmlsbCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2xDbGFzc01hcFsgJ2lzLXZhbGlkYXRpbmcnIF0pIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnbG9hZGluZyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2xDbGFzc01hcFsnaGFzLWVycm9yJ10pIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2xvc2UtY2lyY2xlLWZpbGwnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sQ2xhc3NNYXBbJ2hhcy1zdWNjZXNzJ10pIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2hlY2stY2lyY2xlLWZpbGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb25UeXBlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpSb3dDb21wb25lbnQ6IE56Um93Q29tcG9uZW50LCBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSwgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZiwgbnpSb3dDb21wb25lbnQsIG56Um93RGlyZWN0aXZlLCByZW5kZXJlcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy53YXRjaENvbnRyb2woKTtcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsaWRhdGVTdGF0dXModGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==