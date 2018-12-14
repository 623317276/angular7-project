/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var NzSkeletonComponent = /** @class */ (function () {
    function NzSkeletonComponent() {
        this.rowsList = [];
        this.widthList = [];
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
    }
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.getTitleProps = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        var width;
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return tslib_1.__assign({ width: width }, this.getProps(this.nzTitle));
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.getAvatarProps = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shape = (!!this.nzTitle && !this.nzParagraph) ? 'square' : 'circle';
        /** @type {?} */
        var size = 'large';
        return tslib_1.__assign({ shape: shape, size: size }, this.getProps(this.nzAvatar));
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.getParagraphProps = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasTitle = !!this.nzTitle;
        /** @type {?} */
        var basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return tslib_1.__assign({}, basicProps, this.getProps(this.nzParagraph));
    };
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    NzSkeletonComponent.prototype.getProps = /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        if (prop && typeof prop === 'object') {
            return prop;
        }
        return {};
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    NzSkeletonComponent.prototype.toCSSUnit = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (typeof value === 'number') {
            return value + "px";
        }
        else if (typeof value === 'string') {
            return value;
        }
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.getWidthList = /**
     * @return {?}
     */
    function () {
        var _a = this.paragraph, width = _a.width, rows = _a.rows;
        /** @type {?} */
        var widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[rows - 1] = width;
        }
        return widthList;
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.avatarClassMap = (_a = {},
            _a["ant-skeleton-avatar-lg"] = this.avatar.size === 'large',
            _a["ant-skeleton-avatar-sm "] = this.avatar.size === 'small',
            _a["ant-skeleton-avatar-circle"] = this.avatar.shape === 'circle',
            _a["ant-skeleton-avatar-square "] = this.avatar.shape === 'square',
            _a);
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.updateProps = /**
     * @return {?}
     */
    function () {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = tslib_1.__spread(Array(this.paragraph.rows));
        this.widthList = this.getWidthList();
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateProps();
        this.updateClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzTitle"] || changes["nzAvatar"] || changes["nzParagraph"]) {
            this.updateProps();
            this.updateClassMap();
        }
    };
    NzSkeletonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-skeleton',
                    template: "<ng-container *ngIf=\"nzLoading\">\n  <div class=\"ant-skeleton-header\">\n    <span *ngIf=\"!!nzAvatar\" \n      class=\"ant-skeleton-avatar\" \n      [ngClass]=\"avatarClassMap\">\n    </span>\n  </div>\n  <div class=\"ant-skeleton-content\">\n    <h3 *ngIf=\"!!nzTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\n    <ul *ngIf=\"!!nzParagraph\" class=\"ant-skeleton-paragraph\">\n      <li *ngFor=\"let row of rowsList;let i=index\" [style.width]=\"toCSSUnit(widthList[i])\">\n      </li>\n    </ul>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"!nzLoading\">\n  <ng-content></ng-content>\n</ng-container>",
                    host: {
                        '[class.ant-skeleton]': 'true',
                        '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                        '[class.ant-skeleton-active]': 'nzActive'
                    }
                }] }
    ];
    NzSkeletonComponent.propDecorators = {
        nzActive: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzAvatar: [{ type: Input }],
        nzParagraph: [{ type: Input }]
    };
    return NzSkeletonComponent;
}());
export { NzSkeletonComponent };
function NzSkeletonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSkeletonComponent.prototype.title;
    /** @type {?} */
    NzSkeletonComponent.prototype.avatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.avatarClassMap;
    /** @type {?} */
    NzSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    NzSkeletonComponent.prototype.widthList;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzActive;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzLoading;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzTitle;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzAvatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzParagraph;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNrZWxldG9uL256LXNrZWxldG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQzs7O3dCQWlCNUQsRUFBRTt5QkFDYSxFQUFFO3dCQUVsQixLQUFLO3lCQUNKLElBQUk7dUJBQ3FCLElBQUk7d0JBQ0YsS0FBSzsyQkFDQyxJQUFJOzs7OztJQUVsRCwyQ0FBYTs7Ozs7UUFDbkIsSUFBTSxTQUFTLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7O1FBQzNDLElBQU0sWUFBWSxHQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOztRQUNqRCxJQUFJLEtBQUssQ0FBUztRQUNsQixJQUFJLENBQUMsU0FBUyxJQUFJLFlBQVksRUFBRTtZQUM5QixLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2Y7YUFBTSxJQUFJLFNBQVMsSUFBSSxZQUFZLEVBQUU7WUFDcEMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNmO1FBQ0QsMEJBQVMsS0FBSyxPQUFBLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUc7Ozs7O0lBRzNDLDRDQUFjOzs7OztRQUNwQixJQUFNLEtBQUssR0FBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7O1FBQ3ZGLElBQU0sSUFBSSxHQUFlLE9BQU8sQ0FBQztRQUNqQywwQkFBUyxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsSUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFB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T0FBc0I7UUFDaEMsSUFBSSxPQUFPLGVBQVksT0FBTyxZQUFTLElBQUksT0FBTyxlQUFZLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtLQUNGOztnQkFoSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixtcEJBQTJDO29CQUMzQyxJQUFJLEVBQUU7d0JBQ0osc0JBQXNCLEVBQUUsTUFBTTt3QkFDOUIsa0NBQWtDLEVBQUUsWUFBWTt3QkFDaEQsNkJBQTZCLEVBQUUsVUFBVTtxQkFDMUM7aUJBQ0Y7OzsyQkFTRSxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7OzhCQXhCUjs7U0FZYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXZhdGFyU2hhcGUsIEF2YXRhclNpemUsIE56U2tlbGV0b25BdmF0YXIsIE56U2tlbGV0b25QYXJhZ3JhcGgsIE56U2tlbGV0b25UaXRsZSB9IGZyb20gJy4vbnotc2tlbGV0b24udHlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXNrZWxldG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNrZWxldG9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXNrZWxldG9uXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1za2VsZXRvbi13aXRoLWF2YXRhcl0nOiAnISFuekF2YXRhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b24tYWN0aXZlXSc6ICduekFjdGl2ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNrZWxldG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICB0aXRsZTogTnpTa2VsZXRvblRpdGxlO1xuICBhdmF0YXI6IE56U2tlbGV0b25BdmF0YXI7XG4gIHBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaDtcbiAgYXZhdGFyQ2xhc3NNYXA7XG4gIHJvd3NMaXN0OiBudW1iZXJbXSA9IFtdO1xuICB3aWR0aExpc3Q6IEFycmF5PG51bWJlciB8IHN0cmluZz4gPSBbXTtcblxuICBASW5wdXQoKSBuekFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuekxvYWRpbmcgPSB0cnVlO1xuICBASW5wdXQoKSBuelRpdGxlOiBOelNrZWxldG9uVGl0bGUgfCBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpBdmF0YXI6IE56U2tlbGV0b25BdmF0YXIgfCBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56UGFyYWdyYXBoOiBOelNrZWxldG9uUGFyYWdyYXBoIHwgYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSBnZXRUaXRsZVByb3BzKCk6IE56U2tlbGV0b25UaXRsZSB7XG4gICAgY29uc3QgaGFzQXZhdGFyOiBib29sZWFuID0gISF0aGlzLm56QXZhdGFyO1xuICAgIGNvbnN0IGhhc1BhcmFncmFwaDogYm9vbGVhbiA9ICEhdGhpcy5uelBhcmFncmFwaDtcbiAgICBsZXQgd2lkdGg6IHN0cmluZztcbiAgICBpZiAoIWhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcbiAgICAgIHdpZHRoID0gJzM4JSc7XG4gICAgfSBlbHNlIGlmIChoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XG4gICAgICB3aWR0aCA9ICc1MCUnO1xuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aCwgLi4udGhpcy5nZXRQcm9wcyh0aGlzLm56VGl0bGUpIH07XG4gIH1cblxuICBwcml2YXRlIGdldEF2YXRhclByb3BzKCk6IE56U2tlbGV0b25BdmF0YXIge1xuICAgIGNvbnN0IHNoYXBlOiBBdmF0YXJTaGFwZSA9ICghIXRoaXMubnpUaXRsZSAmJiAhdGhpcy5uelBhcmFncmFwaCkgPyAnc3F1YXJlJyA6ICdjaXJjbGUnO1xuICAgIGNvbnN0IHNpemU6IEF2YXRhclNpemUgPSAnbGFyZ2UnO1xuICAgIHJldHVybiB7IHNoYXBlLCBzaXplLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpBdmF0YXIpIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFncmFwaFByb3BzKCk6IE56U2tlbGV0b25QYXJhZ3JhcGgge1xuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcbiAgICBjb25zdCBoYXNUaXRsZTogYm9vbGVhbiA9ICEhdGhpcy5uelRpdGxlO1xuICAgIGNvbnN0IGJhc2ljUHJvcHM6IE56U2tlbGV0b25QYXJhZ3JhcGggPSB7fTtcbiAgICAvLyBXaWR0aFxuICAgIGlmICghaGFzQXZhdGFyIHx8ICFoYXNUaXRsZSkge1xuICAgICAgYmFzaWNQcm9wcy53aWR0aCA9ICc2MSUnO1xuICAgIH1cbiAgICAvLyBSb3dzXG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzVGl0bGUpIHtcbiAgICAgIGJhc2ljUHJvcHMucm93cyA9IDM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2ljUHJvcHMucm93cyA9IDI7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmJhc2ljUHJvcHMsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelBhcmFncmFwaCkgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvcHM8VD4ocHJvcDogVCB8IGJvb2xlYW4gfCB1bmRlZmluZWQpOiBUIHwge30gIHtcbiAgICBpZiAocHJvcCAmJiB0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBwcm9wO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICB0b0NTU1VuaXQodmFsdWU6IG51bWJlciB8IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFdpZHRoTGlzdCgpOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHtcbiAgICBjb25zdCB7IHdpZHRoLCByb3dzIH0gPSB0aGlzLnBhcmFncmFwaDtcbiAgICBsZXQgd2lkdGhMaXN0ID0gW107XG4gICAgaWYgKHdpZHRoICYmIEFycmF5LmlzQXJyYXkod2lkdGgpKSB7XG4gICAgICB3aWR0aExpc3QgPSB3aWR0aDtcbiAgICB9IGVsc2UgaWYgKHdpZHRoICYmICFBcnJheS5pc0FycmF5KHdpZHRoKSkge1xuICAgICAgd2lkdGhMaXN0ID0gW107XG4gICAgICB3aWR0aExpc3Rbcm93cyAtIDFdID0gd2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aExpc3Q7XG4gIH1cblxuICB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmF2YXRhckNsYXNzTWFwID0ge1xuICAgICAgWyBgYW50LXNrZWxldG9uLWF2YXRhci1sZ2AgXSAgICAgOiB0aGlzLmF2YXRhci5zaXplID09PSAnbGFyZ2UnLFxuICAgICAgWyBgYW50LXNrZWxldG9uLWF2YXRhci1zbSBgIF0gICAgOiB0aGlzLmF2YXRhci5zaXplID09PSAnc21hbGwnLFxuICAgICAgWyBgYW50LXNrZWxldG9uLWF2YXRhci1jaXJjbGVgIF0gOiB0aGlzLmF2YXRhci5zaGFwZSA9PT0gJ2NpcmNsZScsXG4gICAgICBbIGBhbnQtc2tlbGV0b24tYXZhdGFyLXNxdWFyZSBgIF06IHRoaXMuYXZhdGFyLnNoYXBlID09PSAnc3F1YXJlJ1xuICAgIH07XG4gIH1cblxuICB1cGRhdGVQcm9wcygpOiB2b2lkIHtcbiAgICB0aGlzLnRpdGxlICAgICA9IHRoaXMuZ2V0VGl0bGVQcm9wcygpO1xuICAgIHRoaXMuYXZhdGFyICAgID0gdGhpcy5nZXRBdmF0YXJQcm9wcygpO1xuICAgIHRoaXMucGFyYWdyYXBoID0gdGhpcy5nZXRQYXJhZ3JhcGhQcm9wcygpO1xuICAgIHRoaXMucm93c0xpc3QgID0gWy4uLkFycmF5KHRoaXMucGFyYWdyYXBoLnJvd3MpXTtcbiAgICB0aGlzLndpZHRoTGlzdCA9IHRoaXMuZ2V0V2lkdGhMaXN0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVByb3BzKCk7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VGl0bGUgfHwgY2hhbmdlcy5uekF2YXRhciB8fCBjaGFuZ2VzLm56UGFyYWdyYXBoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVByb3BzKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gICAgfVxuICB9XG59XG4iXX0=