/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzTagComponent = /** @class */ (function () {
    function NzTagComponent(renderer) {
        this.renderer = renderer;
        this._checked = false;
        this._mode = 'default';
        this.closed = false;
        this.nzAfterClose = new EventEmitter();
        this.nzOnClose = new EventEmitter();
        this.nzCheckedChange = new EventEmitter();
    }
    Object.defineProperty(NzTagComponent.prototype, "nzMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mode = value;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTagComponent.prototype, "nzColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._color = value;
            this.isPreset = this.isPresetColor(value);
            this.updateClassMap();
            this.updateColorStatus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTagComponent.prototype, "nzChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._checked = toBoolean(value);
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} color
     * @return {?}
     */
    NzTagComponent.prototype.isPresetColor = /**
     * @param {?=} color
     * @return {?}
     */
    function (color) {
        if (!color) {
            return false;
        }
        return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/
            .test(color));
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.updateCheckedStatus = /**
     * @return {?}
     */
    function () {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.closeTag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.closed = true;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTagComponent.prototype.afterAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.closed && !e.fromState) {
            this.nzAfterClose.emit();
        }
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var isPresetColor = this.isPresetColor(this.nzColor);
        this.classMap = (_a = {},
            _a["ant-tag"] = true,
            _a["ant-tag-has-color"] = this.nzColor && !isPresetColor,
            _a["ant-tag-" + this.nzColor] = isPresetColor,
            _a["ant-tag-checkable"] = this.nzMode === 'checkable',
            _a["ant-tag-checkable-checked"] = this.nzChecked,
            _a);
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.updateColorStatus = /**
     * @return {?}
     */
    function () {
        if (this.wrapperElement && this.nzColor) {
            if (this.isPreset) {
                this.renderer.removeStyle(this.wrapperElement.nativeElement, 'background-color');
            }
            else {
                this.renderer.setStyle(this.wrapperElement.nativeElement, 'background-color', this.nzColor);
            }
        }
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    NzTagComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateColorStatus();
    };
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
    NzTagComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NzTagComponent.propDecorators = {
        wrapperElement: [{ type: ViewChild, args: ['wrapperElement',] }],
        nzAfterClose: [{ type: Output }],
        nzOnClose: [{ type: Output }],
        nzCheckedChange: [{ type: Output }],
        nzMode: [{ type: Input }],
        nzColor: [{ type: Input }],
        nzChecked: [{ type: Input }]
    };
    return NzTagComponent;
}());
export { NzTagComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0YWcvbnotdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBRVIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFrSC9DLHdCQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3dCQTdGcEIsS0FBSztxQkFFQyxTQUFTO3NCQUV6QixLQUFLOzRCQUVXLElBQUksWUFBWSxFQUFRO3lCQUMzQixJQUFJLFlBQVksRUFBYzsrQkFDeEIsSUFBSSxZQUFZLEVBQVc7S0F1RnREO0lBckZELHNCQUNJLGtDQUFNOzs7O1FBS1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBUkQsVUFDVyxLQUFjO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2Qjs7O09BQUE7SUFNRCxzQkFDSSxtQ0FBTzs7OztRQU9YO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVZELFVBQ1ksS0FBYTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElB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NEJBQ2pDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLDRDQUE0QyxDQUFDOzZCQUN0RCxDQUFDOzRCQUNGLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ3BDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckIsT0FBTyxDQUFDLDRDQUE0QyxDQUFDOzZCQUN0RCxDQUFDO3lCQUNILENBQUMsQ0FBRTtvQkFDSixpVUFBOEM7aUJBQy9DOzs7O2dCQXZCQyxTQUFTOzs7aUNBK0JSLFNBQVMsU0FBQyxnQkFBZ0I7K0JBQzFCLE1BQU07NEJBQ04sTUFBTTtrQ0FDTixNQUFNO3lCQUVOLEtBQUs7MEJBVUwsS0FBSzs0QkFZTCxLQUFLOzt5QkExRVI7O1NBd0NhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXIsXG4gIEFuaW1hdGlvbkV2ZW50XG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRhZ1R5cGUgPSAnZGVmYXVsdCcgfCAnY2xvc2VhYmxlJyB8ICdjaGVja2FibGUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRhZycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbIHRyaWdnZXIoJ3RhZ0FuaW1hdGlvbicsIFtcbiAgICBzdGF0ZSgnKicsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgYW5pbWF0ZSgnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpJylcbiAgICBdKSxcbiAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxuICAgICAgYW5pbWF0ZSgnMzAwbXMgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpJylcbiAgICBdKVxuICBdKSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10YWcuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcbiAgcHJpdmF0ZSBfY2hlY2tlZCA9IGZhbHNlO1xuICBwcml2YXRlIGlzUHJlc2V0OiBib29sZWFuO1xuICBwcml2YXRlIF9tb2RlOiBUYWdUeXBlID0gJ2RlZmF1bHQnO1xuICBjbGFzc01hcDtcbiAgY2xvc2VkID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXJFbGVtZW50Jykgd3JhcHBlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBuekFmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBuek9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBuekNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56TW9kZSh2YWx1ZTogVGFnVHlwZSkge1xuICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpNb2RlKCk6IFRhZ1R5cGUge1xuICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XG4gICAgdGhpcy5pc1ByZXNldCA9IHRoaXMuaXNQcmVzZXRDb2xvcih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlQ29sb3JTdGF0dXMoKTtcbiAgfVxuXG4gIGdldCBuekNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoZWNrZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBuekNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cblxuICBpc1ByZXNldENvbG9yKGNvbG9yPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgL14ocGlua3xyZWR8eWVsbG93fG9yYW5nZXxjeWFufGdyZWVufGJsdWV8cHVycGxlfGdlZWtibHVlfG1hZ2VudGF8dm9sY2Fub3xnb2xkfGxpbWUpKC1pbnZlcnNlKT8kL1xuICAgICAgLnRlc3QoY29sb3IpXG4gICAgKTtcbiAgfVxuXG4gIHVwZGF0ZUNoZWNrZWRTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpNb2RlID09PSAnY2hlY2thYmxlJykge1xuICAgICAgdGhpcy5uekNoZWNrZWQgPSAhdGhpcy5uekNoZWNrZWQ7XG4gICAgICB0aGlzLm56Q2hlY2tlZENoYW5nZS5lbWl0KHRoaXMubnpDaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5uek9uQ2xvc2UuZW1pdChlKTtcbiAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFmdGVyQW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xvc2VkICYmICFlLmZyb21TdGF0ZSkge1xuICAgICAgdGhpcy5uekFmdGVyQ2xvc2UuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzUHJlc2V0Q29sb3IgPSB0aGlzLmlzUHJlc2V0Q29sb3IodGhpcy5uekNvbG9yKTtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgWyBgYW50LXRhZ2AgXSAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYGFudC10YWctaGFzLWNvbG9yYCBdICAgICAgICA6IHRoaXMubnpDb2xvciAmJiAhaXNQcmVzZXRDb2xvcixcbiAgICAgIFsgYGFudC10YWctJHt0aGlzLm56Q29sb3J9YCBdICA6IGlzUHJlc2V0Q29sb3IsXG4gICAgICBbIGBhbnQtdGFnLWNoZWNrYWJsZWAgXSAgICAgICAgOiB0aGlzLm56TW9kZSA9PT0gJ2NoZWNrYWJsZScsXG4gICAgICBbIGBhbnQtdGFnLWNoZWNrYWJsZS1jaGVja2VkYCBdOiB0aGlzLm56Q2hlY2tlZFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVDb2xvclN0YXR1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy53cmFwcGVyRWxlbWVudCAmJiB0aGlzLm56Q29sb3IpIHtcbiAgICAgIGlmICh0aGlzLmlzUHJlc2V0KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy53cmFwcGVyRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLndyYXBwZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgdGhpcy5uekNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ29sb3JTdGF0dXMoKTtcbiAgfVxufVxuIl19