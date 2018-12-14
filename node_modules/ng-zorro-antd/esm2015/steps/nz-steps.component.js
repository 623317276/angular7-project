/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzStepComponent } from './nz-step.component';
export class NzStepsComponent {
    constructor() {
        this._status = 'process';
        this._current = 0;
        this._size = 'default';
        this._direction = 'horizontal';
        this._startIndex = 0;
        this.unsubscribe$ = new Subject();
        this.showProcessDot = false;
        this.updateChildrenSteps = () => {
            if (this.steps) {
                this.steps.toArray().forEach((step, index, arr) => {
                    Promise.resolve().then(() => {
                        step.outStatus = this.nzStatus;
                        step.showProcessDot = this.showProcessDot;
                        if (this.customProcessDotTemplate) {
                            step.customProcessTemplate = this.customProcessDotTemplate;
                        }
                        step.direction = this.nzDirection;
                        step.index = index + this.nzStartIndex;
                        step.currentIndex = this.nzCurrent;
                        step.last = arr.length === index + 1;
                        step.updateClassMap();
                    });
                });
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStartIndex(value) {
        this._startIndex = value;
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    get nzStartIndex() {
        return this._startIndex;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDirection(value) {
        this._direction = value;
        this.updateClassMap();
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    get nzDirection() {
        return this._direction;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzProgressDot(value) {
        if (value instanceof TemplateRef) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = toBoolean(value);
        }
        this.updateChildrenSteps();
        this.updateClassMap();
    }
    /**
     * @param {?} status
     * @return {?}
     */
    set nzStatus(status) {
        this._status = status;
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    get nzStatus() {
        return this._status;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    set nzCurrent(current) {
        this._current = current;
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    get nzCurrent() {
        return this._current;
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        this.stepsClassMap = {
            [`ant-steps-${this.nzDirection}`]: true,
            [`ant-steps-label-horizontal`]: this.nzDirection === 'horizontal',
            [`ant-steps-label-vertical`]: this.showProcessDot && (this.nzDirection === 'horizontal'),
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.nzSize === 'small'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenSteps();
        if (this.steps) {
            this.steps.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(this.updateChildrenSteps);
        }
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInN0ZXBzL256LXN0ZXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLFNBQVMsRUFDVCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVd0RCxNQUFNOzt1QkFDNEIsU0FBUzt3QkFDdEIsQ0FBQztxQkFDUSxTQUFTOzBCQUNDLFlBQVk7MkJBQzVCLENBQUM7NEJBQ0EsSUFBSSxPQUFPLEVBQVE7OEJBR3pCLEtBQUs7bUNBNEVBLEdBQUcsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNoRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7d0JBQzFDLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFOzRCQUNqQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDO3lCQUM1RDt3QkFDRCxJQUFJLENBQUMsU0FBUyxH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Q0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQzVGO0tBQ0Y7OztZQTNIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFVBQVU7Z0JBQy9CLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLHNHQUFnRDthQUNqRDs7O29CQVlFLGVBQWUsU0FBQyxlQUFlO3FCQUUvQixLQUFLOzJCQVNMLEtBQUs7MEJBVUwsS0FBSzs0QkFXTCxLQUFLO3VCQVlMLEtBQUs7d0JBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBOelN0ZXBDb21wb25lbnQgfSBmcm9tICcuL256LXN0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbmV4cG9ydCB0eXBlIE56U3RhdHVzVHlwZSA9ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcbmV4cG9ydCB0eXBlIE56U2l6ZVR5cGUgPSAnZGVmYXVsdCcgfCAnc21hbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXN0ZXBzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXN0ZXBzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelN0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9zdGF0dXM6IE56U3RhdHVzVHlwZSA9ICdwcm9jZXNzJztcbiAgcHJpdmF0ZSBfY3VycmVudCA9IDA7XG4gIHByaXZhdGUgX3NpemU6IE56U2l6ZVR5cGUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX2RpcmVjdGlvbjogTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnO1xuICBwcml2YXRlIF9zdGFydEluZGV4ID0gMDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHN0ZXBzQ2xhc3NNYXA6IG9iamVjdDtcbiAgc2hvd1Byb2Nlc3NEb3QgPSBmYWxzZTtcbiAgY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD4sIHN0YXR1czogc3RyaW5nLCBpbmRleDogbnVtYmVyIH0+O1xuICBAQ29udGVudENoaWxkcmVuKE56U3RlcENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxOelN0ZXBDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIHNldCBuelNpemUodmFsdWU6IE56U2l6ZVR5cGUpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56U2l6ZSgpOiBOelNpemVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0YXJ0SW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0YXJ0SW5kZXggPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgfVxuXG4gIGdldCBuelN0YXJ0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRJbmRleDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpcmVjdGlvbih2YWx1ZTogTnpEaXJlY3Rpb25UeXBlKSB7XG4gICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICB9XG5cbiAgZ2V0IG56RGlyZWN0aW9uKCk6IE56RGlyZWN0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelByb2dyZXNzRG90KHZhbHVlOiBib29sZWFuIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+LCBzdGF0dXM6IHN0cmluZywgaW5kZXg6IG51bWJlciB9Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTdGF0dXMoc3RhdHVzOiBOelN0YXR1c1R5cGUpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cblxuICBnZXQgbnpTdGF0dXMoKTogTnpTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q3VycmVudChjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9jdXJyZW50ID0gY3VycmVudDtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgfVxuXG4gIGdldCBuekN1cnJlbnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudDtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuc3RlcHNDbGFzc01hcCA9IHtcbiAgICAgIFsgYGFudC1zdGVwcy0ke3RoaXMubnpEaXJlY3Rpb259YCBdOiB0cnVlLFxuICAgICAgWyBgYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWxgIF0gICA6IHRoaXMubnpEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcbiAgICAgIFsgYGFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbGAgXSAgICAgOiB0aGlzLnNob3dQcm9jZXNzRG90ICYmICh0aGlzLm56RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpLFxuICAgICAgWyBgYW50LXN0ZXBzLWRvdGAgXSAgICAgICAgICAgICAgICA6IHRoaXMuc2hvd1Byb2Nlc3NEb3QsXG4gICAgICBbICdhbnQtc3RlcHMtc21hbGwnIF0gICAgICAgICAgICAgIDogdGhpcy5uelNpemUgPT09ICdzbWFsbCdcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQ2hpbGRyZW5TdGVwcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGVwcykge1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KCkuZm9yRWFjaCgoc3RlcCwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzdGVwLm91dFN0YXR1cyA9IHRoaXMubnpTdGF0dXM7XG4gICAgICAgICAgc3RlcC5zaG93UHJvY2Vzc0RvdCA9IHRoaXMuc2hvd1Byb2Nlc3NEb3Q7XG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBzdGVwLmN1c3RvbVByb2Nlc3NUZW1wbGF0ZSA9IHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGVwLmRpcmVjdGlvbiA9IHRoaXMubnpEaXJlY3Rpb247XG4gICAgICAgICAgc3RlcC5pbmRleCA9IGluZGV4ICsgdGhpcy5uelN0YXJ0SW5kZXg7XG4gICAgICAgICAgc3RlcC5jdXJyZW50SW5kZXggPSB0aGlzLm56Q3VycmVudDtcbiAgICAgICAgICBzdGVwLmxhc3QgPSBhcnIubGVuZ3RoID09PSBpbmRleCArIDE7XG4gICAgICAgICAgc3RlcC51cGRhdGVDbGFzc01hcCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICAgIGlmICh0aGlzLnN0ZXBzKSB7XG4gICAgICAgdGhpcy5zdGVwcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcyk7XG4gICAgfVxuICB9XG59XG4iXX0=