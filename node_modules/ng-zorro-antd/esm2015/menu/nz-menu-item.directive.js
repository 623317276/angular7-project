/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzMenuDirective } from './nz-menu.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
export class NzMenuItemDirective {
    /**
     * @param {?} renderer
     * @param {?} cd
     * @param {?} nzMenuDirective
     * @param {?} nzSubMenuComponent
     * @param {?} hostElement
     */
    constructor(renderer, cd, nzMenuDirective, nzSubMenuComponent, hostElement) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelected(value) {
        this._selected = toBoolean(value);
        if (this._selected) {
            this.renderer.addClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
        }
    }
    /**
     * @return {?}
     */
    get nzSelected() {
        return this._selected;
    }
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    onClickItem(e) {
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
    }
    /**
     * define host class
     * @return {?}
     */
    get isInDropDownClass() {
        return this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get isNotInDropDownClass() {
        return !this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setDropDownDisableClass() {
        return this.isInDropDown && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    get setMenuDisableClass() {
        return (!this.isInDropDown) && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    get setPaddingLeft() {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzMenuDirective.menuItems.push(this);
        /** store origin padding in padding */
        if (this.hostElement.nativeElement.style['padding-left']) {
            this.padding = parseInt(this.hostElement.nativeElement.style['padding-left'], 10);
        }
        this.isInDropDown = this.nzMenuDirective.nzInDropDown;
    }
}
NzMenuItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-menu-item]'
            },] }
];
/** @nocollapse */
NzMenuItemDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NzMenuDirective },
    { type: NzSubMenuComponent, decorators: [{ type: Optional }] },
    { type: ElementRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtZW51L256LW1lbnUtaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxRQUFRLEVBQ1IsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLNUQsTUFBTTs7Ozs7Ozs7SUFvRkosWUFBb0IsUUFBbUIsRUFBUyxFQUFxQixFQUFVLGVBQWdDLEVBQXFCLGtCQUFzQyxFQUFVLFdBQXVCO1FBQXZMLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7eUJBbkZ2TCxLQUFLO3lCQUNMLEtBQUs7cUJBQ2pCLENBQUM7dUJBQ0MsSUFBSTs0QkFDQyxLQUFLO0tBZ0ZuQjs7Ozs7SUE5RUQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxD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SCxVQUFVOzs7eUJBd0JULEtBQUs7eUJBU0wsS0FBSzswQkFlTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFO2dDQWtCbEMsV0FBVyxTQUFDLDhCQUE4QjttQ0FLMUMsV0FBVyxTQUFDLHFCQUFxQjtzQ0FLakMsV0FBVyxTQUFDLHVDQUF1QztrQ0FLbkQsV0FBVyxTQUFDLDhCQUE4Qjs2QkFLMUMsV0FBVyxTQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LXN1Ym1lbnUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LW1lbnUtaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIE56TWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWxlY3RlZCA9IGZhbHNlO1xuICBsZXZlbCA9IDA7XG4gIHBhZGRpbmcgPSBudWxsO1xuICBpc0luRHJvcERvd24gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJ2FudC1tZW51LWl0ZW0tc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJ2FudC1tZW51LWl0ZW0tc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICAvKiogY2xlYXIgYWxsIGl0ZW0gc2VsZWN0ZWQgc3RhdHVzIGV4Y2VwdCB0aGlzICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxuICBvbkNsaWNrSXRlbShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uek1lbnVEaXJlY3RpdmUuY2xpY2tJdGVtKHRoaXMpO1xuICAgIGlmICh0aGlzLm56TWVudURpcmVjdGl2ZS5uelNlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMubnpNZW51RGlyZWN0aXZlLmNsZWFyQWxsU2VsZWN0ZWQoKTtcbiAgICAgIHRoaXMubnpTZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm56U3ViTWVudUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5uelN1Yk1lbnVDb21wb25lbnQuY2xpY2tTdWJNZW51RHJvcERvd24oKTtcbiAgICB9XG4gIH1cblxuICAvKiogZGVmaW5lIGhvc3QgY2xhc3MgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtJylcbiAgZ2V0IGlzSW5Ecm9wRG93bkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaXRlbScpXG4gIGdldCBpc05vdEluRHJvcERvd25DbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNJbkRyb3BEb3duO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkJylcbiAgZ2V0IHNldERyb3BEb3duRGlzYWJsZUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93biAmJiB0aGlzLm56RGlzYWJsZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWl0ZW0tZGlzYWJsZWQnKVxuICBnZXQgc2V0TWVudURpc2FibGVDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgdGhpcy5uekRpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxuICBnZXQgc2V0UGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5uek1lbnVEaXJlY3RpdmUubnpNb2RlID09PSAnaW5saW5lJykge1xuICAgICAgaWYgKHRoaXMubnpTdWJNZW51Q29tcG9uZW50KSB7XG4gICAgICAgIC8qKiBpZiBpbiBzdWIgbWVudSBjb21wb25lbnQgYW5kIGhvc3QgbWVudSdzIG1vZGUgaXMgaW5saW5lIGFkZCBQQURESU5HX0JBU0UgKiBsZXZlbCBwYWRkaW5nICovXG4gICAgICAgIHJldHVybiAodGhpcy5uelN1Yk1lbnVDb21wb25lbnQubGV2ZWwgKyAxKSAqIHRoaXMubnpNZW51RGlyZWN0aXZlLm56SW5saW5lSW5kZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIG5vdCBpbiBzdWIgbWVudSBjb21wb25lbnQgYnV0IHJvb3QgbWVudSdzIG1vZGUgaXMgaW5saW5lIHJldHVybiBkZWZhdWx0IHBhZGRpbmcgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMubnpNZW51RGlyZWN0aXZlLm56SW5saW5lSW5kZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWRkaW5nO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuek1lbnVEaXJlY3RpdmU6IE56TWVudURpcmVjdGl2ZSwgQE9wdGlvbmFsKCkgcHVibGljIG56U3ViTWVudUNvbXBvbmVudDogTnpTdWJNZW51Q29tcG9uZW50LCBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56TWVudURpcmVjdGl2ZS5tZW51SXRlbXMucHVzaCh0aGlzKTtcbiAgICAvKiogc3RvcmUgb3JpZ2luIHBhZGRpbmcgaW4gcGFkZGluZyAqL1xuICAgIGlmICh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGVbICdwYWRkaW5nLWxlZnQnIF0pIHtcbiAgICAgIHRoaXMucGFkZGluZyA9IHBhcnNlSW50KHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZVsgJ3BhZGRpbmctbGVmdCcgXSwgMTApO1xuICAgIH1cbiAgICB0aGlzLmlzSW5Ecm9wRG93biA9IHRoaXMubnpNZW51RGlyZWN0aXZlLm56SW5Ecm9wRG93bjtcbiAgfVxufVxuIl19