/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzStepComponent } from './nz-step.component';
var NzStepsComponent = /** @class */ (function () {
    function NzStepsComponent() {
        var _this = this;
        this._status = 'process';
        this._current = 0;
        this._size = 'default';
        this._direction = 'horizontal';
        this._startIndex = 0;
        this.unsubscribe$ = new Subject();
        this.showProcessDot = false;
        this.updateChildrenSteps = function () {
            if (_this.steps) {
                _this.steps.toArray().forEach(function (step, index, arr) {
                    Promise.resolve().then(function () {
                        step.outStatus = _this.nzStatus;
                        step.showProcessDot = _this.showProcessDot;
                        if (_this.customProcessDotTemplate) {
                            step.customProcessTemplate = _this.customProcessDotTemplate;
                        }
                        step.direction = _this.nzDirection;
                        step.index = index + _this.nzStartIndex;
                        step.currentIndex = _this.nzCurrent;
                        step.last = arr.length === index + 1;
                        step.updateClassMap();
                    });
                });
            }
        };
    }
    Object.defineProperty(NzStepsComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepsComponent.prototype, "nzStartIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._startIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startIndex = value;
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepsComponent.prototype, "nzDirection", {
        get: /**
         * @return {?}
         */
        function () {
            return this._direction;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._direction = value;
            this.updateClassMap();
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepsComponent.prototype, "nzProgressDot", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.showProcessDot = true;
                this.customProcessDotTemplate = value;
            }
            else {
                this.showProcessDot = toBoolean(value);
            }
            this.updateChildrenSteps();
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepsComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepsComponent.prototype, "nzCurrent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._current;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._current = current;
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.stepsClassMap = (_a = {},
            _a["ant-steps-" + this.nzDirection] = true,
            _a["ant-steps-label-horizontal"] = this.nzDirection === 'horizontal',
            _a["ant-steps-label-vertical"] = this.showProcessDot && (this.nzDirection === 'horizontal'),
            _a["ant-steps-dot"] = this.showProcessDot,
            _a['ant-steps-small'] = this.nzSize === 'small',
            _a);
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateChildrenSteps();
        if (this.steps) {
            this.steps.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(this.updateChildrenSteps);
        }
    };
    NzStepsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-steps',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-steps\" [ngClass]=\"stepsClassMap\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    NzStepsComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [NzStepComponent,] }],
        nzSize: [{ type: Input }],
        nzStartIndex: [{ type: Input }],
        nzDirection: [{ type: Input }],
        nzProgressDot: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzCurrent: [{ type: Input }]
    };
    return NzStepsComponent;
}());
export { NzStepsComponent };
function NzStepsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzStepsComponent.prototype._status;
    /** @type {?} */
    NzStepsComponent.prototype._current;
    /** @type {?} */
    NzStepsComponent.prototype._size;
    /** @type {?} */
    NzStepsComponent.prototype._direction;
    /** @type {?} */
    NzStepsComponent.prototype._startIndex;
    /** @type {?} */
    NzStepsComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzStepsComponent.prototype.stepsClassMap;
    /** @type {?} */
    NzStepsComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepsComponent.prototype.customProcessDotTemplate;
    /** @type {?} */
    NzStepsComponent.prototype.steps;
    /** @type {?} */
    NzStepsComponent.prototype.updateChildrenSteps;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInN0ZXBzL256LXN0ZXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLFNBQVMsRUFDVCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozt1QkFZcEIsU0FBUzt3QkFDdEIsQ0FBQztxQkFDUSxTQUFTOzBCQUNDLFlBQVk7MkJBQzVCLENBQUM7NEJBQ0EsSUFBSSxPQUFPLEVBQVE7OEJBR3pCLEtBQUs7bUNBNEVBO1lBQ3BCLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRztvQkFDNUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO3dCQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7d0JBQzFDLElBQUksS0FBSSxDQUFDLHdCQUF3QixFQUFFOzRCQUNqQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLHdCQUF3QixDQUFDO3lCQUM1RDt3QkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7d0JBQ2xDLElBQUksQ0FB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O1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7Ozs7SUFFRCw2Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQzVGO0tBQ0Y7O2dCQTNIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFVBQVU7b0JBQy9CLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHNHQUFnRDtpQkFDakQ7Ozt3QkFZRSxlQUFlLFNBQUMsZUFBZTt5QkFFL0IsS0FBSzsrQkFTTCxLQUFLOzhCQVVMLEtBQUs7Z0NBV0wsS0FBSzsyQkFZTCxLQUFLOzRCQVVMLEtBQUs7OzJCQTVGUjs7U0EyQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56U3RlcENvbXBvbmVudCB9IGZyb20gJy4vbnotc3RlcC5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBOekRpcmVjdGlvblR5cGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuZXhwb3J0IHR5cGUgTnpTdGF0dXNUeXBlID0gJ3dhaXQnIHwgJ3Byb2Nlc3MnIHwgJ2ZpbmlzaCcgfCAnZXJyb3InO1xuZXhwb3J0IHR5cGUgTnpTaXplVHlwZSA9ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc3RlcHMnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc3RlcHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX3N0YXR1czogTnpTdGF0dXNUeXBlID0gJ3Byb2Nlc3MnO1xuICBwcml2YXRlIF9jdXJyZW50ID0gMDtcbiAgcHJpdmF0ZSBfc2l6ZTogTnpTaXplVHlwZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBOekRpcmVjdGlvblR5cGUgPSAnaG9yaXpvbnRhbCc7XG4gIHByaXZhdGUgX3N0YXJ0SW5kZXggPSAwO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgc3RlcHNDbGFzc01hcDogb2JqZWN0O1xuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xuICBjdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPiwgc3RhdHVzOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgfT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpTdGVwQ29tcG9uZW50KSBzdGVwczogUXVlcnlMaXN0PE56U3RlcENvbXBvbmVudD47XG5cbiAgQElucHV0KCkgc2V0IG56U2l6ZSh2YWx1ZTogTnpTaXplVHlwZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpTaXplKCk6IE56U2l6ZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U3RhcnRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3RhcnRJbmRleCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICB9XG5cbiAgZ2V0IG56U3RhcnRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdGFydEluZGV4O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlyZWN0aW9uKHZhbHVlOiBOekRpcmVjdGlvblR5cGUpIHtcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cblxuICBnZXQgbnpEaXJlY3Rpb24oKTogTnpEaXJlY3Rpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UHJvZ3Jlc3NEb3QodmFsdWU6IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD4sIHN0YXR1czogc3RyaW5nLCBpbmRleDogbnVtYmVyIH0+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0cnVlO1xuICAgICAgdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0YXR1cyhzdGF0dXM6IE56U3RhdHVzVHlwZSkge1xuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgfVxuXG4gIGdldCBuelN0YXR1cygpOiBOelN0YXR1c1R5cGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDdXJyZW50KGN1cnJlbnQ6IG51bWJlcikge1xuICAgIHRoaXMuX2N1cnJlbnQgPSBjdXJyZW50O1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICB9XG5cbiAgZ2V0IG56Q3VycmVudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50O1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5zdGVwc0NsYXNzTWFwID0ge1xuICAgICAgWyBgYW50LXN0ZXBzLSR7dGhpcy5uekRpcmVjdGlvbn1gIF06IHRydWUsXG4gICAgICBbIGBhbnQtc3RlcHMtbGFiZWwtaG9yaXpvbnRhbGAgXSAgIDogdGhpcy5uekRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxuICAgICAgWyBgYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsYCBdICAgICA6IHRoaXMuc2hvd1Byb2Nlc3NEb3QgJiYgKHRoaXMubnpEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyksXG4gICAgICBbIGBhbnQtc3RlcHMtZG90YCBdICAgICAgICAgICAgICAgIDogdGhpcy5zaG93UHJvY2Vzc0RvdCxcbiAgICAgIFsgJ2FudC1zdGVwcy1zbWFsbCcgXSAgICAgICAgICAgICAgOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJ1xuICAgIH07XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlblN0ZXBzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0ZXBzKSB7XG4gICAgICB0aGlzLnN0ZXBzLnRvQXJyYXkoKS5mb3JFYWNoKChzdGVwLCBpbmRleCwgYXJyKSA9PiB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHN0ZXAub3V0U3RhdHVzID0gdGhpcy5uelN0YXR1cztcbiAgICAgICAgICBzdGVwLnNob3dQcm9jZXNzRG90ID0gdGhpcy5zaG93UHJvY2Vzc0RvdDtcbiAgICAgICAgICBpZiAodGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHN0ZXAuY3VzdG9tUHJvY2Vzc1RlbXBsYXRlID0gdGhpcy5jdXN0b21Qcm9jZXNzRG90VGVtcGxhdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN0ZXAuZGlyZWN0aW9uID0gdGhpcy5uekRpcmVjdGlvbjtcbiAgICAgICAgICBzdGVwLmluZGV4ID0gaW5kZXggKyB0aGlzLm56U3RhcnRJbmRleDtcbiAgICAgICAgICBzdGVwLmN1cnJlbnRJbmRleCA9IHRoaXMubnpDdXJyZW50O1xuICAgICAgICAgIHN0ZXAubGFzdCA9IGFyci5sZW5ndGggPT09IGluZGV4ICsgMTtcbiAgICAgICAgICBzdGVwLnVwZGF0ZUNsYXNzTWFwKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcbiAgICAgICB0aGlzLnN0ZXBzLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUodGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==