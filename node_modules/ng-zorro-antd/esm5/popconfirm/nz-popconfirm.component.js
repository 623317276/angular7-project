/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { toBoolean } from '../core/util/convert';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
var NzPopconfirmComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopconfirmComponent, _super);
    function NzPopconfirmComponent(cdr) {
        var _this = _super.call(this, cdr) || this;
        _this._condition = false;
        _this._prefix = 'ant-popover-placement';
        _this._trigger = 'click';
        _this._hasBackdrop = true;
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        _this.nzOkType = 'primary';
        return _this;
    }
    Object.defineProperty(NzPopconfirmComponent.prototype, "nzCondition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._condition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._condition = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.nzCondition) {
            this.nzVisible = true;
        }
        else {
            this.onConfirm();
        }
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.nzOnCancel.emit();
        this.nzVisible = false;
    };
    /**
     * @return {?}
     */
    NzPopconfirmComponent.prototype.onConfirm = /**
     * @return {?}
     */
    function () {
        this.nzOnConfirm.emit();
        this.nzVisible = false;
    };
    NzPopconfirmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-popconfirm',
                    preserveWhitespaces: false,
                    animations: [fadeAnimation],
                    template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow\"></div>\n      <div class=\"ant-popover-inner\">\n        <div>\n          <div class=\"ant-popover-inner-content\">\n            <div class=\"ant-popover-message\">\n              <ng-container *ngIf=\"isTitleString; else titleTemplate\">\n                <i nz-icon type=\"exclamation-circle\" theme=\"fill\"></i>\n                <div class=\"ant-popover-message-title\">{{ nzTitle }}</div>\n              </ng-container>\n              <ng-template #titleTemplate>\n                <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n              </ng-template>\n            </div>\n            <div class=\"ant-popover-buttons\">\n              <button nz-button [nzSize]=\"'small'\" (click)=\"onCancel()\">\n                <ng-container *ngIf=\"nzCancelText\">{{ nzCancelText }}</ng-container>\n                <ng-container *ngIf=\"!nzCancelText\">{{ 'Modal.cancelText' | nzI18n }}</ng-container>\n              </button>\n              <button nz-button [nzSize]=\"'small'\" [nzType]=\"nzOkType\" (click)=\"onConfirm()\">\n                <ng-container *ngIf=\"nzOkText\">{{ nzOkText }}</ng-container>\n                <ng-container *ngIf=\"!nzOkText\">{{ 'Modal.okText' | nzI18n }}</ng-container>\n              </button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    styles: ["\n    .ant-popover {\n      position: relative;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzPopconfirmComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzPopconfirmComponent.propDecorators = {
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }],
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzCondition: [{ type: Input }]
    };
    return NzPopconfirmComponent;
}(NzToolTipComponent));
export { NzPopconfirmComponent };
function NzPopconfirmComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPopconfirmComponent.prototype._condition;
    /** @type {?} */
    NzPopconfirmComponent.prototype._prefix;
    /** @type {?} */
    NzPopconfirmComponent.prototype._trigger;
    /** @type {?} */
    NzPopconfirmComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmComponent.prototype.nzCancelText;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicG9wY29uZmlybS9uei1wb3Bjb25maXJtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0lBYTFCLGlEQUFrQjtJQXVDM0QsK0JBQVksR0FBc0I7UUFBbEMsWUFDRSxrQkFBTSxHQUFHLENBQUMsU0FDWDsyQkF4Q1ksS0FBSzt3QkFDUix1QkFBdUI7eUJBQ3RCLE9BQU87NkJBQ0gsSUFBSTsyQkFDd0IsSUFBSSxZQUFZLEVBQUU7NEJBQ2pCLElBQUksWUFBWSxFQUFFO3lCQUdsQyxTQUFTOztLQWdDcEM7SUE3QkQsc0JBQ0ksOENBQVc7Ozs7UUFJZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7UUFQRCxVQUNnQixLQUFjO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7T0FBQTs7OztJQU1ELG9DQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7S0FDRjs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDeEI7Ozs7SUFFRCx5Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxlQUFlO29CQUNwQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixVQUFVLEVBQVcsQ0FBRSxhQUFhLENBQUU7b0JBQ3RDLG0vREFBcUQ7NkJBQzlCLDREQUl0QjtpQkFDRjs7OztnQkFwQkMsaUJBQWlCOzs7NkJBMEJoQixNQUFNOzhCQUNOLE1BQU07MkJBRU4sS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBRUwsS0FBSzs7Z0NBbENSO0VBc0IyQyxrQkFBa0I7U0FBaEQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL256LXRvb2x0aXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1wb3Bjb25maXJtJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFsgZmFkZUFuaW1hdGlvbiBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1wb3Bjb25maXJtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC1wb3BvdmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelBvcGNvbmZpcm1Db21wb25lbnQgZXh0ZW5kcyBOelRvb2xUaXBDb21wb25lbnQge1xuICBfY29uZGl0aW9uID0gZmFsc2U7XG4gIF9wcmVmaXggPSAnYW50LXBvcG92ZXItcGxhY2VtZW50JztcbiAgX3RyaWdnZXIgPSAnY2xpY2snO1xuICBfaGFzQmFja2Ryb3AgPSB0cnVlO1xuICBAT3V0cHV0KCkgbnpPbkNhbmNlbDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpPbkNvbmZpcm06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBuek9rVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBuek9rVHlwZTogc3RyaW5nID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBuekNhbmNlbFRleHQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbnpDb25kaXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb25kaXRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56Q29uZGl0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb25kaXRpb247XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekNvbmRpdGlvbikge1xuICAgICAgdGhpcy5uelZpc2libGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ29uZmlybSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkNhbmNlbC5lbWl0KCk7XG4gICAgdGhpcy5uelZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIG9uQ29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLm56T25Db25maXJtLmVtaXQoKTtcbiAgICB0aGlzLm56VmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGNkcik7XG4gIH1cblxufVxuIl19