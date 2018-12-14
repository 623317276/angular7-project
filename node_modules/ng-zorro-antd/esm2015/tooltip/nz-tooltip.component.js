/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimation } from '../core/animation/fade-animations';
import { DEFAULT_4_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class NzToolTipComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = [...DEFAULT_4_POSITIONS];
        this._classMap = {};
        this._placement = 'top';
        this._trigger = 'hover';
        this.visibleSource = new BehaviorSubject(false);
        this.visible$ = this.visibleSource.asObservable();
        this.nzVisibleChange = new EventEmitter();
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzMouseEnterDelay = 0.15;
        this.nzMouseLeaveDelay = 0.1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzContent(value) {
        this.isContentString = !(value instanceof TemplateRef);
        this._content = value;
    }
    /**
     * @return {?}
     */
    get nzContent() {
        return this._content;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
    /**
     * @return {?}
     */
    get nzTitle() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVisible(value) {
        /** @type {?} */
        const visible = toBoolean(value);
        if (this.visibleSource.value !== visible) {
            this.visibleSource.next(visible);
            this.nzVisibleChange.emit(visible);
        }
    }
    /**
     * @return {?}
     */
    get nzVisible() {
        return this.visibleSource.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get nzTrigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        if (value !== this._placement) {
            this._placement = value;
            this._positions.unshift(/** @type {?} */ (POSITION_MAP[this.nzPlacement]));
        }
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this._placement;
    }
    /**
     * @return {?}
     */
    updatePosition() {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPositionChange($event) {
        for (const key in POSITION_MAP) {
            if (JSON.stringify($event.connectionPair) === JSON.stringify(POSITION_MAP[key])) {
                this.nzPlacement = key;
                break;
            }
        }
        this.setClassMap();
        /** TODO may cause performance problem */
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.isContentEmpty()) {
            this.nzVisible = true;
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.nzVisible = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _afterVisibilityAnimation(e) {
        if (e.toState === 'false' && !this.nzVisible) {
            this.nzVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.nzVisible) {
            this.nzVisibleChange.emit(true);
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [this.nzOverlayClassName]: true,
            [`${this._prefix}-${this._placement}`]: true
        };
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    setOverlayOrigin(origin) {
        this.overlayOrigin = origin;
    }
    /**
     * @return {?}
     */
    isContentEmpty() {
        return this.isTitleString ? (this.nzTitle === '' || !isNotNil(this.nzTitle)) : false; // Pity, can't detect whether nzTemplate is empty due to can't get it's content before shown up
    }
}
NzToolTipComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tooltip',
                animations: [fadeAnimation],
                template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-tooltip\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow\"></div>\n      <div class=\"ant-tooltip-inner\">\n        <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n        <ng-template #titleTemplate>\n          <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                preserveWhitespaces: false,
                styles: [`
    .ant-tooltip {
      position: relative;
    }
  `]
            }] }
];
/** @nocollapse */
NzToolTipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzToolTipComponent.propDecorators = {
    _title: [{ type: ContentChild, args: ['nzTemplate',] }],
    overlay: [{ type: ViewChild, args: ['overlay',] }],
    nzVisibleChange: [{ type: Output }],
    nzOverlayClassName: [{ type: Input }],
    nzOverlayStyle: [{ type: Input }],
    nzMouseEnterDelay: [{ type: Input }],
    nzMouseLeaveDelay: [{ type: Input }],
    nzContent: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzVisible: [{ type: Input }],
    nzTrigger: [{ type: Input }],
    nzPlacement: [{ type: Input }]
};
function NzToolTipComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzToolTipComponent.prototype._hasBackdrop;
    /** @type {?} */
    NzToolTipComponent.prototype._prefix;
    /** @type {?} */
    NzToolTipComponent.prototype._positions;
    /** @type {?} */
    NzToolTipComponent.prototype._classMap;
    /** @type {?} */
    NzToolTipComponent.prototype._placement;
    /** @type {?} */
    NzToolTipComponent.prototype._trigger;
    /** @type {?} */
    NzToolTipComponent.prototype._content;
    /** @type {?} */
    NzToolTipComponent.prototype.overlayOrigin;
    /** @type {?} */
    NzToolTipComponent.prototype.isContentString;
    /** @type {?} */
    NzToolTipComponent.prototype.isTitleString;
    /** @type {?} */
    NzToolTipComponent.prototype.visibleSource;
    /** @type {?} */
    NzToolTipComponent.prototype.visible$;
    /** @type {?} */
    NzToolTipComponent.prototype._title;
    /** @type {?} */
    NzToolTipComponent.prototype.overlay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzToolTipComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzToolTipComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidG9vbHRpcC9uei10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUNMLG1CQUFtQixFQUlwQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBYWpELE1BQU07Ozs7SUE2SEosWUFBbUIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7NEJBNUgxQixLQUFLO3VCQUNWLHVCQUF1QjswQkFDTSxDQUFFLEdBQUcsbUJBQW1CLENBQUU7eUJBQ3JELEVBQUU7MEJBQ0QsS0FBSzt3QkFDUCxPQUFPOzZCQUtGLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7K0JBR2QsSUFBSSxZQUFZLEVBQUU7a0NBRXZDLEVBQUU7OEJBQ3VCLEVBQUU7aUNBQzVCLElBQUk7aUNBQ0osR0FBRztLQTBHL0I7Ozs7O0lBekdELElBQ0ksU0FBUyxDQUFDLEtBQWlDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUss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QyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsQ0FBRSxJQUFJLENBQUMsa0JBQWtCLENBQUUsRUFBZSxJQUFJO1lBQzlDLENBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBRSxFQUFFLElBQUk7U0FDL0MsQ0FBQztLQUNIOzs7OztJQUVELGdCQUFnQixDQUFDLE1BQXdCO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0tBQzdCOzs7O0lBS0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ3RGOzs7WUE3SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxZQUFZO2dCQUNqQyxVQUFVLEVBQVcsQ0FBRSxhQUFhLENBQUU7Z0JBQ3RDLHUvQkFBa0Q7Z0JBQ2xELG1CQUFtQixFQUFFLEtBQUs7eUJBQ0g7Ozs7R0FJdEI7YUFDRjs7OztZQTFCQyxpQkFBaUI7OztxQkF3Q2hCLFlBQVksU0FBQyxZQUFZO3NCQUN6QixTQUFTLFNBQUMsU0FBUzs4QkFDbkIsTUFBTTtpQ0FFTixLQUFLOzZCQUNMLEtBQUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLO3dCQUNMLEtBQUs7c0JBVUwsS0FBSzt3QkFVTCxLQUFLO3dCQWFMLEtBQUs7MEJBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFuaW1hdGlvbkV2ZW50XG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ2RrQ29ubmVjdGVkT3ZlcmxheSxcbiAgQ2RrT3ZlcmxheU9yaWdpbixcbiAgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGZhZGVBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9mYWRlLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgREVGQVVMVF80X1BPU0lUSU9OUywgUE9TSVRJT05fTUFQIH0gZnJvbSAnLi4vY29yZS9vdmVybGF5L292ZXJsYXktcG9zaXRpb24tbWFwJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10b29sdGlwJyxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBmYWRlQW5pbWF0aW9uIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC10b29sdGlwIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelRvb2xUaXBDb21wb25lbnQge1xuICBfaGFzQmFja2Ryb3AgPSBmYWxzZTtcbiAgX3ByZWZpeCA9ICdhbnQtdG9vbHRpcC1wbGFjZW1lbnQnO1xuICBfcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbIC4uLkRFRkFVTFRfNF9QT1NJVElPTlMgXTtcbiAgX2NsYXNzTWFwID0ge307XG4gIF9wbGFjZW1lbnQgPSAndG9wJztcbiAgX3RyaWdnZXIgPSAnaG92ZXInO1xuICBfY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIG92ZXJsYXlPcmlnaW46IENka092ZXJsYXlPcmlnaW47XG4gIGlzQ29udGVudFN0cmluZzogYm9vbGVhbjtcbiAgaXNUaXRsZVN0cmluZzogYm9vbGVhbjtcbiAgdmlzaWJsZVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICB2aXNpYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMudmlzaWJsZVNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgQENvbnRlbnRDaGlsZCgnbnpUZW1wbGF0ZScpIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknKSBvdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAT3V0cHV0KCkgbnpWaXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgbnpPdmVybGF5Q2xhc3NOYW1lID0gJyc7XG4gIEBJbnB1dCgpIG56T3ZlcmxheVN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0gPSB7fTtcbiAgQElucHV0KCkgbnpNb3VzZUVudGVyRGVsYXkgPSAwLjE1OyAvLyBVbml0OiBzZWNvbmRcbiAgQElucHV0KCkgbnpNb3VzZUxlYXZlRGVsYXkgPSAwLjE7IC8vIFVuaXQ6IHNlY29uZFxuICBASW5wdXQoKVxuICBzZXQgbnpDb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNDb250ZW50U3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9jb250ZW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpDb250ZW50KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuelRpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMudmlzaWJsZVNvdXJjZS52YWx1ZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy52aXNpYmxlU291cmNlLm5leHQodmlzaWJsZSk7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZVNvdXJjZS52YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRyaWdnZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RyaWdnZXIgPSB2YWx1ZTtcbiAgICB0aGlzLl9oYXNCYWNrZHJvcCA9IHRoaXMuX3RyaWdnZXIgPT09ICdjbGljayc7XG4gIH1cblxuICBnZXQgbnpUcmlnZ2VyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fcGxhY2VtZW50KSB7XG4gICAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9ucy51bnNoaWZ0KFBPU0lUSU9OX01BUFsgdGhpcy5uelBsYWNlbWVudCBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelBsYWNlbWVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XG4gIH1cblxuICAvLyBNYW51YWxseSBmb3JjZSB1cGRhdGluZyBjdXJyZW50IG92ZXJsYXkncyBwb3NpdGlvblxuICB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5ICYmIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50OiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBQT1NJVElPTl9NQVApIHtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeSgkZXZlbnQuY29ubmVjdGlvblBhaXIpID09PSBKU09OLnN0cmluZ2lmeShQT1NJVElPTl9NQVBbIGtleSBdKSkge1xuICAgICAgICB0aGlzLm56UGxhY2VtZW50ID0ga2V5O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIC8qKiBUT0RPIG1heSBjYXVzZSBwZXJmb3JtYW5jZSBwcm9ibGVtICovXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDb250ZW50RW1wdHkoKSkge1xuICAgICAgdGhpcy5uelZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5uelZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIF9hZnRlclZpc2liaWxpdHlBbmltYXRpb24oZTogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS50b1N0YXRlID09PSAnZmFsc2UnICYmICF0aGlzLm56VmlzaWJsZSkge1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XG4gICAgfVxuICAgIGlmIChlLnRvU3RhdGUgPT09ICd0cnVlJyAmJiB0aGlzLm56VmlzaWJsZSkge1xuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5uek92ZXJsYXlDbGFzc05hbWUgXSAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMuX3ByZWZpeH0tJHt0aGlzLl9wbGFjZW1lbnR9YCBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHNldE92ZXJsYXlPcmlnaW4ob3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5T3JpZ2luID0gb3JpZ2luO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIGlzQ29udGVudEVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzVGl0bGVTdHJpbmcgPyAodGhpcy5uelRpdGxlID09PSAnJyB8fCAhaXNOb3ROaWwodGhpcy5uelRpdGxlKSkgOiBmYWxzZTsgLy8gUGl0eSwgY2FuJ3QgZGV0ZWN0IHdoZXRoZXIgbnpUZW1wbGF0ZSBpcyBlbXB0eSBkdWUgdG8gY2FuJ3QgZ2V0IGl0J3MgY29udGVudCBiZWZvcmUgc2hvd24gdXBcbiAgfVxufVxuIl19