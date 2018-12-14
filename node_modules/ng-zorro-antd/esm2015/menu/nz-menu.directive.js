/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzMenuDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._selectable = true;
        this._inlineCollapsed = false;
        this._inDropDown = false;
        /**
         * view init flat
         */
        this.isInit = false;
        /**
         * opened index of array
         */
        this.subMenusOpenIndex = [];
        /**
         * collection of menu item
         */
        this.menuItems = [];
        /**
         * collection of sub menu
         */
        this.subMenus = [];
        this.nzTheme = 'light';
        this.nzInlineIndent = 24;
        this.nzMode = 'vertical';
        this.nzClick = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzInDropDown(value) {
        this._inDropDown = toBoolean(value);
        this.nzSelectable = !this._inDropDown;
        this.menuItems.forEach(menu => menu.isInDropDown = this._inDropDown);
        this.subMenus.forEach(subMenu => subMenu.isInDropDown = this._inDropDown);
    }
    /**
     * @return {?}
     */
    get nzInDropDown() {
        return this._inDropDown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectable(value) {
        this._selectable = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzSelectable() {
        return this._selectable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzInlineCollapsed(value) {
        this._inlineCollapsed = toBoolean(value);
        if (this.isInit) {
            this.updateInlineCollapse();
        }
    }
    /**
     * @return {?}
     */
    get nzInlineCollapsed() {
        return this._inlineCollapsed;
    }
    /**
     * @return {?}
     */
    updateInlineCollapse() {
        if (this._inlineCollapsed) {
            this.hideSubMenus();
            this.nzMode = 'vertical';
        }
        else {
            this.reductionSubMenus();
            this.nzMode = this.cacheMode;
        }
    }
    /**
     * define host class
     * @return {?}
     */
    get isInDropDownClass() {
        return this.nzInDropDown;
    }
    /**
     * @return {?}
     */
    get isNotInDropDownClass() {
        return !this.nzInDropDown;
    }
    /**
     * @return {?}
     */
    get setDropDownThemeLightClass() {
        return this.nzInDropDown && (this.nzTheme === 'light');
    }
    /**
     * @return {?}
     */
    get setDropDownThemeDarkClass() {
        return this.nzInDropDown && (this.nzTheme === 'dark');
    }
    /**
     * @return {?}
     */
    get setMenuThemeLightClass() {
        return (!this.nzInDropDown) && (this.nzTheme === 'light');
    }
    /**
     * @return {?}
     */
    get setMenuThemeDarkClass() {
        return (!this.nzInDropDown) && (this.nzTheme === 'dark');
    }
    /**
     * @return {?}
     */
    get setMenuVerticalClass() {
        return (!this.nzInDropDown) && (this.nzMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setMenuHorizontalClass() {
        return (!this.nzInDropDown) && (this.nzMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setMenuInlineClass() {
        return (!this.nzInDropDown) && (this.nzMode === 'inline');
    }
    /**
     * @return {?}
     */
    get setMenuInlineCollapsedClass() {
        return (!this.nzInDropDown) && (this.nzMode !== 'horizontal') && this.nzInlineCollapsed;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.isInit = true;
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    }
    /**
     * trigger when menu item clicked
     * @return {?}
     */
    clearAllSelected() {
        this.menuItems.forEach(menu => menu.nzSelected = false);
    }
    /**
     * @return {?}
     */
    hideSubMenus() {
        this.subMenusOpenIndex = [];
        this.subMenus.forEach((submenu, index) => {
            if (submenu.nzOpen) {
                this.subMenusOpenIndex.push(index);
            }
            submenu.nzOpen = false;
        });
    }
    /**
     * @return {?}
     */
    reductionSubMenus() {
        this.subMenusOpenIndex.forEach(i => this.subMenus[i].nzOpen = true);
        this.subMenusOpenIndex = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    clickItem(value) {
        this.nzClick.emit(value);
    }
}
NzMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-menu]'
            },] }
];
/** @nocollapse */
NzMenuDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzMenuDirective.propDecorators = {
    nzTheme: [{ type: Input }],
    nzInlineIndent: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzClick: [{ type: Output }],
    nzInDropDown: [{ type: Input }],
    nzSelectable: [{ type: Input }],
    nzInlineCollapsed: [{ type: Input }],
    isInDropDownClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu',] }, { type: HostBinding, args: ['class.ant-menu-dropdown-vertical',] }, { type: HostBinding, args: ['class.ant-dropdown-menu-root',] }],
    isNotInDropDownClass: [{ type: HostBinding, args: ['class.ant-menu',] }, { type: HostBinding, args: ['class.ant-menu-root',] }],
    setDropDownThemeLightClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-light',] }],
    setDropDownThemeDarkClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-dark',] }],
    setMenuThemeLightClass: [{ type: HostBinding, args: ['class.ant-menu-light',] }],
    setMenuThemeDarkClass: [{ type: HostBinding, args: ['class.ant-menu-dark',] }],
    setMenuVerticalClass: [{ type: HostBinding, args: ['class.ant-menu-vertical',] }],
    setMenuHorizontalClass: [{ type: HostBinding, args: ['class.ant-menu-horizontal',] }],
    setMenuInlineClass: [{ type: HostBinding, args: ['class.ant-menu-inline',] }],
    setMenuInlineCollapsedClass: [{ type: HostBinding, args: ['class.ant-menu-inline-collapsed',] }]
};
function NzMenuDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMenuDirective.prototype._selectable;
    /** @type {?} */
    NzMenuDirective.prototype._inlineCollapsed;
    /** @type {?} */
    NzMenuDirective.prototype._inDropDown;
    /**
     * view init flat
     * @type {?}
     */
    NzMenuDirective.prototype.isInit;
    /**
     * cache mode
     * @type {?}
     */
    NzMenuDirective.prototype.cacheMode;
    /**
     * opened index of array
     * @type {?}
     */
    NzMenuDirective.prototype.subMenusOpenIndex;
    /**
     * collection of menu item
     * @type {?}
     */
    NzMenuDirective.prototype.menuItems;
    /**
     * collection of sub menu
     * @type {?}
     */
    NzMenuDirective.prototype.subMenus;
    /** @type {?} */
    NzMenuDirective.prototype.nzTheme;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineIndent;
    /** @type {?} */
    NzMenuDirective.prototype.nzMode;
    /** @type {?} */
    NzMenuDirective.prototype.nzClick;
    /** @type {?} */
    NzMenuDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVdqRCxNQUFNOzs7O0lBcUhKLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOzJCQXBIWCxJQUFJO2dDQUNDLEtBQUs7MkJBQ1YsS0FBSzs7OztzQkFFVixLQUFLOzs7O2lDQUlNLEVBQUU7Ozs7eUJBR0ssRUFBRTs7Ozt3QkFFSixFQUFFO3VCQUNFLE9BQU87OEJBQ2xCLEVBQUU7c0JBQ0YsVUFBVTt1QkFDaEIsSUFBSSxZQUFZLEVBQXVCO0tBcUcxRDs7Ozs7SUFuR0QsSUFDSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDM0U7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDekI7Ozs7O0lBRUQsSUFDSSxZQUFZ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eUJBQXlCO3FDQUtyQyxXQUFXLFNBQUMsMkJBQTJCO2lDQUt2QyxXQUFXLFNBQUMsdUJBQXVCOzBDQUtuQyxXQUFXLFNBQUMsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9uei1zdWJtZW51LmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE56TW9kZSA9ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgfCAnaW5saW5lJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LW1lbnVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIE56TWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9zZWxlY3RhYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaW5saW5lQ29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgX2luRHJvcERvd24gPSBmYWxzZTtcbiAgLyoqIHZpZXcgaW5pdCBmbGF0ICovXG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XG4gIC8qKiBjYWNoZSBtb2RlICovXG4gIHByaXZhdGUgY2FjaGVNb2RlOiBOek1vZGU7XG4gIC8qKiBvcGVuZWQgaW5kZXggb2YgYXJyYXkgKi9cbiAgcHJpdmF0ZSBzdWJNZW51c09wZW5JbmRleCA9IFtdO1xuXG4gIC8qKiBjb2xsZWN0aW9uIG9mIG1lbnUgaXRlbSAqL1xuICBtZW51SXRlbXM6IE56TWVudUl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuICAvKiogY29sbGVjdGlvbiBvZiBzdWIgbWVudSAqL1xuICBzdWJNZW51czogTnpTdWJNZW51Q29tcG9uZW50W10gPSBbXTtcbiAgQElucHV0KCkgbnpUaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIG56SW5saW5lSW5kZW50ID0gMjQ7XG4gIEBJbnB1dCgpIG56TW9kZTogTnpNb2RlID0gJ3ZlcnRpY2FsJztcbiAgQE91dHB1dCgpIG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56TWVudUl0ZW1EaXJlY3RpdmU+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56SW5Ecm9wRG93bih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luRHJvcERvd24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMubnpTZWxlY3RhYmxlID0gIXRoaXMuX2luRHJvcERvd247XG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUuaXNJbkRyb3BEb3duID0gdGhpcy5faW5Ecm9wRG93bik7XG4gICAgdGhpcy5zdWJNZW51cy5mb3JFYWNoKHN1Yk1lbnUgPT4gc3ViTWVudS5pc0luRHJvcERvd24gPSB0aGlzLl9pbkRyb3BEb3duKTtcbiAgfVxuXG4gIGdldCBuekluRHJvcERvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luRHJvcERvd247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWxlY3RhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0YWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RhYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SW5saW5lQ29sbGFwc2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5saW5lQ29sbGFwc2VkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpJbmxpbmVDb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lubGluZUNvbGxhcHNlZDtcbiAgfVxuXG4gIHVwZGF0ZUlubGluZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaGlkZVN1Yk1lbnVzKCk7XG4gICAgICB0aGlzLm56TW9kZSA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVkdWN0aW9uU3ViTWVudXMoKTtcbiAgICAgIHRoaXMubnpNb2RlID0gdGhpcy5jYWNoZU1vZGU7XG4gICAgfVxuICB9XG5cbiAgLyoqIGRlZmluZSBob3N0IGNsYXNzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUnKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWRyb3Bkb3duLXZlcnRpY2FsJylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1yb290JylcbiAgZ2V0IGlzSW5Ecm9wRG93bkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56SW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUnKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXJvb3QnKVxuICBnZXQgaXNOb3RJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLm56SW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtbGlnaHQnKVxuICBnZXQgc2V0RHJvcERvd25UaGVtZUxpZ2h0Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpJbkRyb3BEb3duICYmICh0aGlzLm56VGhlbWUgPT09ICdsaWdodCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1kYXJrJylcbiAgZ2V0IHNldERyb3BEb3duVGhlbWVEYXJrQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpJbkRyb3BEb3duICYmICh0aGlzLm56VGhlbWUgPT09ICdkYXJrJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWxpZ2h0JylcbiAgZ2V0IHNldE1lbnVUaGVtZUxpZ2h0Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56VGhlbWUgPT09ICdsaWdodCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1kYXJrJylcbiAgZ2V0IHNldE1lbnVUaGVtZURhcmtDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLm56SW5Ecm9wRG93bikgJiYgKHRoaXMubnpUaGVtZSA9PT0gJ2RhcmsnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtdmVydGljYWwnKVxuICBnZXQgc2V0TWVudVZlcnRpY2FsQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSA9PT0gJ3ZlcnRpY2FsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWhvcml6b250YWwnKVxuICBnZXQgc2V0TWVudUhvcml6b250YWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLm56SW5Ecm9wRG93bikgJiYgKHRoaXMubnpNb2RlID09PSAnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pbmxpbmUnKVxuICBnZXQgc2V0TWVudUlubGluZUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMubnpJbkRyb3BEb3duKSAmJiAodGhpcy5uek1vZGUgPT09ICdpbmxpbmUnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaW5saW5lLWNvbGxhcHNlZCcpXG4gIGdldCBzZXRNZW51SW5saW5lQ29sbGFwc2VkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSAhPT0gJ2hvcml6b250YWwnKSAmJiB0aGlzLm56SW5saW5lQ29sbGFwc2VkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgdGhpcy5jYWNoZU1vZGUgPSB0aGlzLm56TW9kZTtcbiAgICB0aGlzLnVwZGF0ZUlubGluZUNvbGxhcHNlKCk7XG4gIH1cblxuICAvKiogdHJpZ2dlciB3aGVuIG1lbnUgaXRlbSBjbGlja2VkICovXG4gIGNsZWFyQWxsU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUubnpTZWxlY3RlZCA9IGZhbHNlKTtcbiAgfVxuXG4gIGhpZGVTdWJNZW51cygpOiB2b2lkIHtcbiAgICB0aGlzLnN1Yk1lbnVzT3BlbkluZGV4ID0gW107XG4gICAgdGhpcy5zdWJNZW51cy5mb3JFYWNoKChzdWJtZW51LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHN1Ym1lbnUubnpPcGVuKSB7XG4gICAgICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXgucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgICBzdWJtZW51Lm56T3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVkdWN0aW9uU3ViTWVudXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJNZW51c09wZW5JbmRleC5mb3JFYWNoKGkgPT4gdGhpcy5zdWJNZW51c1sgaSBdLm56T3BlbiA9IHRydWUpO1xuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXggPSBbXTtcbiAgfVxuXG4gIGNsaWNrSXRlbSh2YWx1ZTogTnpNZW51SXRlbURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMubnpDbGljay5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19