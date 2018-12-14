/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzTagComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this._checked = false;
        this._mode = 'default';
        this.closed = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMode(value) {
        this._mode = value;
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    get nzMode() {
        return this._mode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzColor(value) {
        this._color = value;
        this.isPreset = this.isPresetColor(value);
        this.updateClassMap();
        this.updateColorStatus();
    }
    /**
     * @return {?}
     */
    get nzColor() {
        return this._color;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzChecked(value) {
        this._checked = toBoolean(value);
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    get nzChecked() {
        return this._checked;
    }
    /**
     * @param {?=} color
     * @return {?}
     */
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/
            .test(color));
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.closed = true;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (this.closed && !e.fromState) {
            this.nzAfterClose.emit();
        }
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        /** @type {?} */
        const isPresetColor = this.isPresetColor(this.nzColor);
        this.classMap = {
            [`ant-tag`]: true,
            [`ant-tag-has-color`]: this.nzColor && !isPresetColor,
            [`ant-tag-${this.nzColor}`]: isPresetColor,
            [`ant-tag-checkable`]: this.nzMode === 'checkable',
            [`ant-tag-checkable-checked`]: this.nzChecked
        };
    }
    /**
     * @return {?}
     */
    updateColorStatus() {
        if (this.wrapperElement && this.nzColor) {
            if (this.isPreset) {
                this.renderer.removeStyle(this.wrapperElement.nativeElement, 'background-color');
            }
            else {
                this.renderer.setStyle(this.wrapperElement.nativeElement, 'background-color', this.nzColor);
            }
        }
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
    ngAfterViewInit() {
        this.updateColorStatus();
    }
}
NzTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tag',
                preserveWhitespaces: false,
                animations: [trigger('tagAnimation', [
                        state('*', style({ opacity: 1 })),
                        transition('void => *', [
                            style({ opacity: 0 }),
                            animate('300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)')
                        ]),
                        state('void', style({ opacity: 0 })),
                        transition('* => void', [
                            style({ opacity: 1 }),
                            animate('300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)')
                        ])
                    ])],
                template: "<div\n  *ngIf=\"!closed\"\n  [ngClass]=\"classMap\"\n  #wrapperElement\n  [@tagAnimation]\n  (@tagAnimation.done)=\"afterAnimation($event)\"\n  (click)=\"updateCheckedStatus()\">\n  <ng-content></ng-content>\n  <i nz-icon type=\"close\" *ngIf=\"nzMode==='closeable'\" (click)=\"closeTag($event)\"></i>\n</div>"
            }] }
];
/** @nocollapse */
NzTagComponent.ctorParameters = () => [
    { type: Renderer2 }
];
NzTagComponent.propDecorators = {
    wrapperElement: [{ type: ViewChild, args: ['wrapperElement',] }],
    nzAfterClose: [{ type: Output }],
    nzOnClose: [{ type: Output }],
    nzCheckedChange: [{ type: Output }],
    nzMode: [{ type: Input }],
    nzColor: [{ type: Input }],
    nzChecked: [{ type: Input }]
};
function NzTagComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTagComponent.prototype._color;
    /** @type {?} */
    NzTagComponent.prototype._checked;
    /** @type {?} */
    NzTagComponent.prototype.isPreset;
    /** @type {?} */
    NzTagComponent.prototype._mode;
    /** @type {?} */
    NzTagComponent.prototype.classMap;
    /** @type {?} */
    NzTagComponent.prototype.closed;
    /** @type {?} */
    NzTagComponent.prototype.wrapperElement;
    /** @type {?} */
    NzTagComponent.prototype.nzAfterClose;
    /** @type {?} */
    NzTagComponent.prototype.nzOnClose;
    /** @type {?} */
    NzTagComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzTagComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWcvbnotdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBRVIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQW1CakQsTUFBTTs7OztJQStGSixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3dCQTdGcEIsS0FBSztxQkFFQyxTQUFTO3NCQUV6QixLQUFLOzRCQUVXLElBQUksWUFBWSxFQUFRO3lCQUMzQixJQUFJLFlBQVksRUFBYzsrQkFDeEIsSUFBSSxZQUFZLEVBQVc7S0F1RnREOzs7OztJQXJGRCxJQUNJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDMUI7Ozs7SUFFRCxJQUFJ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QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NEJBQ3JCLE9BQU8sQ0FBQyw0Q0FBNEMsQ0FBQzt5QkFDdEQsQ0FBQzt3QkFDRixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNwQyxVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NEJBQ3JCLE9BQU8sQ0FBQyw0Q0FBNEMsQ0FBQzt5QkFDdEQsQ0FBQztxQkFDSCxDQUFDLENBQUU7Z0JBQ0osaVVBQThDO2FBQy9DOzs7O1lBdkJDLFNBQVM7Ozs2QkErQlIsU0FBUyxTQUFDLGdCQUFnQjsyQkFDMUIsTUFBTTt3QkFDTixNQUFNOzhCQUNOLE1BQU07cUJBRU4sS0FBSztzQkFVTCxLQUFLO3dCQVlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXIsXG4gIEFuaW1hdGlvbkV2ZW50XG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRhZ1R5cGUgPSAnZGVmYXVsdCcgfCAnY2xvc2VhYmxlJyB8ICdjaGVja2FibGUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRhZycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbIHRyaWdnZXIoJ3RhZ0FuaW1hdGlvbicsIFtcbiAgICBzdGF0ZSgnKicsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgYW5pbWF0ZSgnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpJylcbiAgICBdKSxcbiAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxuICAgICAgYW5pbWF0ZSgnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpJylcbiAgICBdKVxuICBdKSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuICBwcml2YXRlIGlzUHJlc2V0OiBib29sZWFuO1xuICBwcml2YXRlIF9tb2RlOiBUYWdUeXBlID0gJ2RlZmF1bHQnO1xuICBjbGFzc01hcDtcbiAgY2xvc2VkID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXJFbGVtZW50Jykgd3JhcHBlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBuekFmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56TW9kZSh2YWx1ZTogVGFnVHlwZSkge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpNb2RlKCk6IFRhZ1R5cGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgdGhpcy5pc1ByZXNldCA9IHRoaXMuaXNQcmVzZXRDb2xvcih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlQ29sb3JTdGF0dXMoKTtcbiAgfVxuXG4gIGdldCBuekNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoZWNrZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuekNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cblxuICBpc1ByZXNldENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgL14ocGlua3xyZWR8eWVsbG93fG9yYW5nZXxjeWFufGdyZWVufGJsdWV8cHVycGxlfGdlZWtibHVlfG1hZ2VudGF8dm9sY2Fub3xnb2xkfGxpbWUpKC1pbnZlcnNlKT8kL1xuICAgICAgLnRlc3QoY29sb3IpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUNoZWNrZWRTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpNb2RlID09PSAnY2hlY2thYmxlJykge1xuICAgICAgdGhpcy5uekNoZWNrZWQgPSAhdGhpcy5uekNoZWNrZWQ7XG4gICAgICB0aGlzLm56Q2hlY2tlZENoYW5nZS5lbWl0KHRoaXMubnpDaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uek9uQ2xvc2UuZW1pdChlKTtcbiAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFmdGVyQW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xvc2VkICYmICFlLmZyb21TdGF0ZSkge1xuICAgICAgdGhpcy5uekFmdGVyQ2xvc2UuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzUHJlc2V0Q29sb3IgPSB0aGlzLmlzUHJlc2V0Q29sb3IodGhpcy5uekNvbG9yKTtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgWyBgYW50LXRhZ2AgXSAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYGFudC10YWctaGFzLWNvbG9yYCBdICAgICAgICA6IHRoaXMubnpDb2xvciAmJiAhaXNQcmVzZXRDb2xvcixcbiAgICAgIFsgYGFudC10YWctJHt0aGlzLm56Q29sb3J9YCBdICA6IGlzUHJlc2V0Q29sb3IsXG4gICAgICBbIGBhbnQtdGFnLWNoZWNrYWJsZWAgXSAgICAgICAgOiB0aGlzLm56TW9kZSA9PT0gJ2NoZWNrYWJsZScsXG4gICAgICBbIGBhbnQtdGFnLWNoZWNrYWJsZS1jaGVja2VkYCBdOiB0aGlzLm56Q2hlY2tlZFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVDb2xvclN0YXR1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy53cmFwcGVyRWxlbWVudCAmJiB0aGlzLm56Q29sb3IpIHtcbiAgICAgIGlmICh0aGlzLmlzUHJlc2V0KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy53cmFwcGVyRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLndyYXBwZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5uekNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ29sb3JTdGF0dXMoKTtcbiAgfVxufVxuIl19