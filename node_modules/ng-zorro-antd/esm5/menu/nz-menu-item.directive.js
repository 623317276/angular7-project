/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzMenuDirective } from './nz-menu.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
var NzMenuItemDirective = /** @class */ (function () {
    function NzMenuItemDirective(renderer, cd, nzMenuDirective, nzSubMenuComponent, hostElement) {
        this.renderer = renderer;
        this.cd = cd;
        this.nzMenuDirective = nzMenuDirective;
        this.nzSubMenuComponent = nzSubMenuComponent;
        this.hostElement = hostElement;
        this._disabled = false;
        this._selected = false;
        this.level = 0;
        this.padding = null;
        this.isInDropDown = false;
    }
    Object.defineProperty(NzMenuItemDirective.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "nzSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = toBoolean(value);
            if (this._selected) {
                this.renderer.addClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
            }
            else {
                this.renderer.removeClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
            }
        },
        enumerable: true,
        configurable: true
    });
    /** clear all item selected status except this */
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    NzMenuItemDirective.prototype.onClickItem = /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.nzMenuDirective.clickItem(this);
        if (this.nzMenuDirective.nzSelectable) {
            this.nzMenuDirective.clearAllSelected();
            this.nzSelected = true;
        }
        if (this.nzSubMenuComponent) {
            this.nzSubMenuComponent.clickSubMenuDropDown();
        }
    };
    Object.defineProperty(NzMenuItemDirective.prototype, "isInDropDownClass", {
        /** define host class */
        get: /**
         * define host class
         * @return {?}
         */
        function () {
            return this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "isNotInDropDownClass", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "setDropDownDisableClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown && this.nzDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "setMenuDisableClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && this.nzDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuItemDirective.prototype, "setPaddingLeft", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzMenuDirective.nzMode === 'inline') {
                if (this.nzSubMenuComponent) {
                    /** if in sub menu component and host menu's mode is inline add PADDING_BASE * level padding */
                    return (this.nzSubMenuComponent.level + 1) * this.nzMenuDirective.nzInlineIndent;
                }
                else {
                    /** not in sub menu component but root menu's mode is inline return default padding */
                    return this.nzMenuDirective.nzInlineIndent;
                }
            }
            else {
                return this.padding;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMenuItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.nzMenuDirective.menuItems.push(this);
        /** store origin padding in padding */
        if (this.hostElement.nativeElement.style['padding-left']) {
            this.padding = parseInt(this.hostElement.nativeElement.style['padding-left'], 10);
        }
        this.isInDropDown = this.nzMenuDirective.nzInDropDown;
    };
    NzMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu-item]'
                },] }
    ];
    /** @nocollapse */
    NzMenuItemDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NzMenuDirective },
        { type: NzSubMenuComponent, decorators: [{ type: Optional }] },
        { type: ElementRef }
    ]; };
    NzMenuItemDirective.propDecorators = {
        nzDisabled: [{ type: Input }],
        nzSelected: [{ type: Input }],
        onClickItem: [{ type: HostListener, args: ['click', ['$event'],] }],
        isInDropDownClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-item',] }],
        isNotInDropDownClass: [{ type: HostBinding, args: ['class.ant-menu-item',] }],
        setDropDownDisableClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-item-disabled',] }],
        setMenuDisableClass: [{ type: HostBinding, args: ['class.ant-menu-item-disabled',] }],
        setPaddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }]
    };
    return NzMenuItemDirective;
}());
export { NzMenuItemDirective };
function NzMenuItemDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMenuItemDirective.prototype._disabled;
    /** @type {?} */
    NzMenuItemDirective.prototype._selected;
    /** @type {?} */
    NzMenuItemDirective.prototype.level;
    /** @type {?} */
    NzMenuItemDirective.prototype.padding;
    /** @type {?} */
    NzMenuItemDirective.prototype.isInDropDown;
    /** @type {?} */
    NzMenuItemDirective.prototype.renderer;
    /** @type {?} */
    NzMenuItemDirective.prototype.cd;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzMenuDirective;
    /** @type {?} */
    NzMenuItemDirective.prototype.nzSubMenuComponent;
    /** @type {?} */
    NzMenuItemDirective.prototype.hostElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtZW51L256LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxRQUFRLEVBQ1IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBeUYxRCw2QkFBb0IsUUFBbUIsRUFBUyxFQUFxQixFQUFVLGVBQWdDLEVBQXFCLGtCQUFzQyxFQUFVLFdBQXVCO1FBQXZMLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7eUJBbkZ2TCxLQUFLO3lCQUNMLEtBQUs7cUJBQ2pCLENBQUM7dUJBQ0MsSUFBSTs0QkFDQyxLQUFLO0tBZ0ZuQjtJQTlFRCxzQkFDSSwyQ0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSwyQ0FBVTs7OztRQVNkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVpELFVBQ2UsS0FBYztZQUMzQixJ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Z0JBakdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFWQyxTQUFTO2dCQVJULGlCQUFpQjtnQkFhVixlQUFlO2dCQUNmLGtCQUFrQix1QkF5RnlGLFFBQVE7Z0JBckcxSCxVQUFVOzs7NkJBd0JULEtBQUs7NkJBU0wsS0FBSzs4QkFlTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFO29DQWtCbEMsV0FBVyxTQUFDLDhCQUE4Qjt1Q0FLMUMsV0FBVyxTQUFDLHFCQUFxQjswQ0FLakMsV0FBVyxTQUFDLHVDQUF1QztzQ0FLbkQsV0FBVyxTQUFDLDhCQUE4QjtpQ0FLMUMsV0FBVyxTQUFDLHVCQUF1Qjs7OEJBekZ0Qzs7U0FvQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBOek1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56U3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbnotc3VibWVudS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotbWVudS1pdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgTnpNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3NlbGVjdGVkID0gZmFsc2U7XG4gIGxldmVsID0gMDtcbiAgcGFkZGluZyA9IG51bGw7XG4gIGlzSW5Ecm9wRG93biA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5pc0luRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZCcgOiAnYW50LW1lbnUtaXRlbS1zZWxlY3RlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5pc0luRHJvcERvd24gPyAnYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZCcgOiAnYW50LW1lbnUtaXRlbS1zZWxlY3RlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIC8qKiBjbGVhciBhbGwgaXRlbSBzZWxlY3RlZCBzdGF0dXMgZXhjZXB0IHRoaXMgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbICckZXZlbnQnIF0pXG4gIG9uQ2xpY2tJdGVtKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm56TWVudURpcmVjdGl2ZS5jbGlja0l0ZW0odGhpcyk7XG4gICAgaWYgKHRoaXMubnpNZW51RGlyZWN0aXZlLm56U2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5uek1lbnVEaXJlY3RpdmUuY2xlYXJBbGxTZWxlY3RlZCgpO1xuICAgICAgdGhpcy5uelNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpTdWJNZW51Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56U3ViTWVudUNvbXBvbmVudC5jbGlja1N1Yk1lbnVEcm9wRG93bigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBkZWZpbmUgaG9zdCBjbGFzcyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0nKVxuICBnZXQgaXNJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pdGVtJylcbiAgZ2V0IGlzTm90SW5Ecm9wRG93bkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0luRHJvcERvd247XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWQnKVxuICBnZXQgc2V0RHJvcERvd25EaXNhYmxlQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duICYmIHRoaXMubnpEaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaXRlbS1kaXNhYmxlZCcpXG4gIGdldCBzZXRNZW51RGlzYWJsZUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiB0aGlzLm56RGlzYWJsZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXG4gIGdldCBzZXRQYWRkaW5nTGVmdCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLm56TWVudURpcmVjdGl2ZS5uek1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICBpZiAodGhpcy5uelN1Yk1lbnVDb21wb25lbnQpIHtcbiAgICAgICAgLyoqIGlmIGluIHN1YiBtZW51IGNvbXBvbmVudCBhbmQgaG9zdCBtZW51J3MgbW9kZSBpcyBpbmxpbmUgYWRkIFBBRERJTkdfQkFTRSAqIGxldmVsIHBhZGRpbmcgKi9cbiAgICAgICAgcmV0dXJuICh0aGlzLm56U3ViTWVudUNvbXBvbmVudC5sZXZlbCArIDEpICogdGhpcy5uek1lbnVEaXJlY3RpdmUubnpJbmxpbmVJbmRlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiogbm90IGluIHN1YiBtZW51IGNvbXBvbmVudCBidXQgcm9vdCBtZW51J3MgbW9kZSBpcyBpbmxpbmUgcmV0dXJuIGRlZmF1bHQgcGFkZGluZyAqL1xuICAgICAgICByZXR1cm4gdGhpcy5uek1lbnVEaXJlY3RpdmUubnpJbmxpbmVJbmRlbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBhZGRpbmc7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIG56TWVudURpcmVjdGl2ZTogTnpNZW51RGlyZWN0aXZlLCBAT3B0aW9uYWwoKSBwdWJsaWMgbnpTdWJNZW51Q29tcG9uZW50OiBOelN1Yk1lbnVDb21wb25lbnQsIHByaXZhdGUgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubnpNZW51RGlyZWN0aXZlLm1lbnVJdGVtcy5wdXNoKHRoaXMpO1xuICAgIC8qKiBzdG9yZSBvcmlnaW4gcGFkZGluZyBpbiBwYWRkaW5nICovXG4gICAgaWYgKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZVsgJ3BhZGRpbmctbGVmdCcgXSkge1xuICAgICAgdGhpcy5wYWRkaW5nID0gcGFyc2VJbnQodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlWyAncGFkZGluZy1sZWZ0JyBdLCAxMCk7XG4gICAgfVxuICAgIHRoaXMuaXNJbkRyb3BEb3duID0gdGhpcy5uek1lbnVEaXJlY3RpdmUubnpJbkRyb3BEb3duO1xuICB9XG59XG4iXX0=