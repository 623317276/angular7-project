/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzMenuDirective = /** @class */ (function () {
    function NzMenuDirective(el) {
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
    Object.defineProperty(NzMenuDirective.prototype, "nzInDropDown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inDropDown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._inDropDown = toBoolean(value);
            this.nzSelectable = !this._inDropDown;
            this.menuItems.forEach(function (menu) { return menu.isInDropDown = _this._inDropDown; });
            this.subMenus.forEach(function (subMenu) { return subMenu.isInDropDown = _this._inDropDown; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "nzSelectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectable = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "nzInlineCollapsed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inlineCollapsed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._inlineCollapsed = toBoolean(value);
            if (this.isInit) {
                this.updateInlineCollapse();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.updateInlineCollapse = /**
     * @return {?}
     */
    function () {
        if (this._inlineCollapsed) {
            this.hideSubMenus();
            this.nzMode = 'vertical';
        }
        else {
            this.reductionSubMenus();
            this.nzMode = this.cacheMode;
        }
    };
    Object.defineProperty(NzMenuDirective.prototype, "isInDropDownClass", {
        /** define host class */
        get: /**
         * define host class
         * @return {?}
         */
        function () {
            return this.nzInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "isNotInDropDownClass", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setDropDownThemeLightClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzInDropDown && (this.nzTheme === 'light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setDropDownThemeDarkClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzInDropDown && (this.nzTheme === 'dark');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuThemeLightClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzTheme === 'light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuThemeDarkClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzTheme === 'dark');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuVerticalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode === 'vertical');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuHorizontalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode === 'horizontal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuInlineClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode === 'inline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuInlineCollapsedClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode !== 'horizontal') && this.nzInlineCollapsed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    };
    /** trigger when menu item clicked */
    /**
     * trigger when menu item clicked
     * @return {?}
     */
    NzMenuDirective.prototype.clearAllSelected = /**
     * trigger when menu item clicked
     * @return {?}
     */
    function () {
        this.menuItems.forEach(function (menu) { return menu.nzSelected = false; });
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.hideSubMenus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subMenusOpenIndex = [];
        this.subMenus.forEach(function (submenu, index) {
            if (submenu.nzOpen) {
                _this.subMenusOpenIndex.push(index);
            }
            submenu.nzOpen = false;
        });
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.reductionSubMenus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subMenusOpenIndex.forEach(function (i) { return _this.subMenus[i].nzOpen = true; });
        this.subMenusOpenIndex = [];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMenuDirective.prototype.clickItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzClick.emit(value);
    };
    NzMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu]'
                },] }
    ];
    /** @nocollapse */
    NzMenuDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return NzMenuDirective;
}());
export { NzMenuDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFnSS9DLHlCQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTsyQkFwSFgsSUFBSTtnQ0FDQyxLQUFLOzJCQUNWLEtBQUs7Ozs7c0JBRVYsS0FBSzs7OztpQ0FJTSxFQUFFOzs7O3lCQUdLLEVBQUU7Ozs7d0JBRUosRUFBRTt1QkFDRSxPQUFPOzhCQUNsQixFQUFFO3NCQUNGLFVBQVU7dUJBQ2hCLElBQUksWUFBWSxFQUF1QjtLQXFHMUQ7SUFuR0Qsc0JBQ0kseUNBQVk7Ozs7UUFPaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7Ozs7O1FBVkQsVUFDaUIsS0FBYztZQUQvQixpQkFNQztZQUpDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsV0FBVyxFQUFwQyxDQUFvQyxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxXQUFXLEVBQXZDLENBQXVDLENBQUMsQ0FBQztT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TCxLQUFLOzBCQUNMLE1BQU07K0JBRU4sS0FBSzsrQkFZTCxLQUFLO29DQVNMLEtBQUs7b0NBdUJMLFdBQVcsU0FBQyx5QkFBeUIsY0FDckMsV0FBVyxTQUFDLGtDQUFrQyxjQUM5QyxXQUFXLFNBQUMsOEJBQThCO3VDQUsxQyxXQUFXLFNBQUMsZ0JBQWdCLGNBQzVCLFdBQVcsU0FBQyxxQkFBcUI7NkNBS2pDLFdBQVcsU0FBQywrQkFBK0I7NENBSzNDLFdBQVcsU0FBQyw4QkFBOEI7eUNBSzFDLFdBQVcsU0FBQyxzQkFBc0I7d0NBS2xDLFdBQVcsU0FBQyxxQkFBcUI7dUNBS2pDLFdBQVcsU0FBQyx5QkFBeUI7eUNBS3JDLFdBQVcsU0FBQywyQkFBMkI7cUNBS3ZDLFdBQVcsU0FBQyx1QkFBdUI7OENBS25DLFdBQVcsU0FBQyxpQ0FBaUM7OzBCQXJJaEQ7O1NBcUJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTnpNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbnotbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL256LXN1Ym1lbnUuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTnpNb2RlID0gJ3ZlcnRpY2FsJyB8ICdob3Jpem9udGFsJyB8ICdpbmxpbmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotbWVudV0nXG59KVxuXG5leHBvcnQgY2xhc3MgTnpNZW51RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX3NlbGVjdGFibGUgPSB0cnVlO1xuICBwcml2YXRlIF9pbmxpbmVDb2xsYXBzZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5Ecm9wRG93biA9IGZhbHNlO1xuICAvKiogdmlldyBpbml0IGZsYXQgKi9cbiAgcHJpdmF0ZSBpc0luaXQgPSBmYWxzZTtcbiAgLyoqIGNhY2hlIG1vZGUgKi9cbiAgcHJpdmF0ZSBjYWNoZU1vZGU6IE56TW9kZTtcbiAgLyoqIG9wZW5lZCBpbmRleCBvZiBhcnJheSAqL1xuICBwcml2YXRlIHN1Yk1lbnVzT3BlbkluZGV4ID0gW107XG5cbiAgLyoqIGNvbGxlY3Rpb24gb2YgbWVudSBpdGVtICovXG4gIG1lbnVJdGVtczogTnpNZW51SXRlbURpcmVjdGl2ZVtdID0gW107XG4gIC8qKiBjb2xsZWN0aW9uIG9mIHN1YiBtZW51ICovXG4gIHN1Yk1lbnVzOiBOelN1Yk1lbnVDb21wb25lbnRbXSA9IFtdO1xuICBASW5wdXQoKSBuelRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2xpZ2h0JztcbiAgQElucHV0KCkgbnpJbmxpbmVJbmRlbnQgPSAyNDtcbiAgQElucHV0KCkgbnpNb2RlOiBOek1vZGUgPSAndmVydGljYWwnO1xuICBAT3V0cHV0KCkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TnpNZW51SXRlbURpcmVjdGl2ZT4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpJbkRyb3BEb3duKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5Ecm9wRG93biA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5uelNlbGVjdGFibGUgPSAhdGhpcy5faW5Ecm9wRG93bjtcbiAgICB0aGlzLm1lbnVJdGVtcy5mb3JFYWNoKG1lbnUgPT4gbWVudS5pc0luRHJvcERvd24gPSB0aGlzLl9pbkRyb3BEb3duKTtcbiAgICB0aGlzLnN1Yk1lbnVzLmZvckVhY2goc3ViTWVudSA9PiBzdWJNZW51LmlzSW5Ecm9wRG93biA9IHRoaXMuX2luRHJvcERvd24pO1xuICB9XG5cbiAgZ2V0IG56SW5Ecm9wRG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlbGVjdGFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWxlY3RhYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNlbGVjdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGFibGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpJbmxpbmVDb2xsYXBzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmxpbmVDb2xsYXBzZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLmlzSW5pdCkge1xuICAgICAgdGhpcy51cGRhdGVJbmxpbmVDb2xsYXBzZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBueklubGluZUNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5saW5lQ29sbGFwc2VkO1xuICB9XG5cbiAgdXBkYXRlSW5saW5lQ29sbGFwc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2lubGluZUNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5oaWRlU3ViTWVudXMoKTtcbiAgICAgIHRoaXMubnpNb2RlID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWR1Y3Rpb25TdWJNZW51cygpO1xuICAgICAgdGhpcy5uek1vZGUgPSB0aGlzLmNhY2hlTW9kZTtcbiAgICB9XG4gIH1cblxuICAvKiogZGVmaW5lIGhvc3QgY2xhc3MgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudScpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtZHJvcGRvd24tdmVydGljYWwnKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXJvb3QnKVxuICBnZXQgaXNJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpJbkRyb3BEb3duO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudScpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtcm9vdCcpXG4gIGdldCBpc05vdEluRHJvcERvd25DbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMubnpJbkRyb3BEb3duO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1saWdodCcpXG4gIGdldCBzZXREcm9wRG93blRoZW1lTGlnaHRDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekluRHJvcERvd24gJiYgKHRoaXMubnpUaGVtZSA9PT0gJ2xpZ2h0Jyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWRhcmsnKVxuICBnZXQgc2V0RHJvcERvd25UaGVtZURhcmtDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekluRHJvcERvd24gJiYgKHRoaXMubnpUaGVtZSA9PT0gJ2RhcmsnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtbGlnaHQnKVxuICBnZXQgc2V0TWVudVRoZW1lTGlnaHRDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLm56SW5Ecm9wRG93bikgJiYgKHRoaXMubnpUaGVtZSA9PT0gJ2xpZ2h0Jyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWRhcmsnKVxuICBnZXQgc2V0TWVudVRoZW1lRGFya0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMubnpJbkRyb3BEb3duKSAmJiAodGhpcy5uelRoZW1lID09PSAnZGFyaycpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS12ZXJ0aWNhbCcpXG4gIGdldCBzZXRNZW51VmVydGljYWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLm56SW5Ecm9wRG93bikgJiYgKHRoaXMubnpNb2RlID09PSAndmVydGljYWwnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaG9yaXpvbnRhbCcpXG4gIGdldCBzZXRNZW51SG9yaXpvbnRhbENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMubnpJbkRyb3BEb3duKSAmJiAodGhpcy5uek1vZGUgPT09ICdob3Jpem9udGFsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWlubGluZScpXG4gIGdldCBzZXRNZW51SW5saW5lQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSA9PT0gJ2lubGluZScpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pbmxpbmUtY29sbGFwc2VkJylcbiAgZ2V0IHNldE1lbnVJbmxpbmVDb2xsYXBzZWRDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLm56SW5Ecm9wRG93bikgJiYgKHRoaXMubnpNb2RlICE9PSAnaG9yaXpvbnRhbCcpICYmIHRoaXMubnpJbmxpbmVDb2xsYXBzZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcblxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLmNhY2hlTW9kZSA9IHRoaXMubnpNb2RlO1xuICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcbiAgfVxuXG4gIC8qKiB0cmlnZ2VyIHdoZW4gbWVudSBpdGVtIGNsaWNrZWQgKi9cbiAgY2xlYXJBbGxTZWxlY3RlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnVJdGVtcy5mb3JFYWNoKG1lbnUgPT4gbWVudS5uelNlbGVjdGVkID0gZmFsc2UpO1xuICB9XG5cbiAgaGlkZVN1Yk1lbnVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXggPSBbXTtcbiAgICB0aGlzLnN1Yk1lbnVzLmZvckVhY2goKHN1Ym1lbnUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc3VibWVudS5uek9wZW4pIHtcbiAgICAgICAgdGhpcy5zdWJNZW51c09wZW5JbmRleC5wdXNoKGluZGV4KTtcbiAgICAgIH1cbiAgICAgIHN1Ym1lbnUubnpPcGVuID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICByZWR1Y3Rpb25TdWJNZW51cygpOiB2b2lkIHtcbiAgICB0aGlzLnN1Yk1lbnVzT3BlbkluZGV4LmZvckVhY2goaSA9PiB0aGlzLnN1Yk1lbnVzWyBpIF0ubnpPcGVuID0gdHJ1ZSk7XG4gICAgdGhpcy5zdWJNZW51c09wZW5JbmRleCA9IFtdO1xuICB9XG5cbiAgY2xpY2tJdGVtKHZhbHVlOiBOek1lbnVJdGVtRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgdGhpcy5uekNsaWNrLmVtaXQodmFsdWUpO1xuICB9XG59XG4iXX0=