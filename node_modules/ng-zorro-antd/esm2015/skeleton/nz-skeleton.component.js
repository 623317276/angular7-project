/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NzSkeletonComponent {
    constructor() {
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
    getTitleProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        let width;
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.nzTitle));
    }
    /**
     * @return {?}
     */
    getAvatarProps() {
        /** @type {?} */
        const shape = (!!this.nzTitle && !this.nzParagraph) ? 'square' : 'circle';
        /** @type {?} */
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
    }
    /**
     * @return {?}
     */
    getParagraphProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasTitle = !!this.nzTitle;
        /** @type {?} */
        const basicProps = {};
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
        return Object.assign({}, basicProps, this.getProps(this.nzParagraph));
    }
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    getProps(prop) {
        if (prop && typeof prop === 'object') {
            return prop;
        }
        return {};
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    toCSSUnit(value = '') {
        if (typeof value === 'number') {
            return `${value}px`;
        }
        else if (typeof value === 'string') {
            return value;
        }
    }
    /**
     * @return {?}
     */
    getWidthList() {
        const { width, rows } = this.paragraph;
        /** @type {?} */
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[rows - 1] = width;
        }
        return widthList;
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        this.avatarClassMap = {
            [`ant-skeleton-avatar-lg`]: this.avatar.size === 'large',
            [`ant-skeleton-avatar-sm `]: this.avatar.size === 'small',
            [`ant-skeleton-avatar-circle`]: this.avatar.shape === 'circle',
            [`ant-skeleton-avatar-square `]: this.avatar.shape === 'square'
        };
    }
    /**
     * @return {?}
     */
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateProps();
        this.updateClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzTitle"] || changes["nzAvatar"] || changes["nzParagraph"]) {
            this.updateProps();
            this.updateClassMap();
        }
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNrZWxldG9uL256LXNrZWxldG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBWW5GLE1BQU07O3dCQUtpQixFQUFFO3lCQUNhLEVBQUU7d0JBRWxCLEtBQUs7eUJBQ0osSUFBSTt1QkFDcUIsSUFBSTt3QkFDRixLQUFLOzJCQUNDLElBQUk7Ozs7O0lBRWxELGFBQWE7O1FBQ25CLE1BQU0sU0FBUyxHQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOztRQUMzQyxNQUFNLFlBQVksR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7UUFDakQsSUFBSSxLQUFLLENBQVM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxZQUFZLEVBQUU7WUFDOUIsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNmO2FBQU0sSUFBSSxTQUFTLElBQUksWUFBWSxFQUFFO1lBQ3BDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDZjtRQUNELHVCQUFTLEtBQUssSUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRzs7Ozs7SUFHM0MsY0FBYzs7UUFDcEIsTUFBTSxLQUFLLEdBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDOztRQUN2RixNQUFNLElBQUksR0FBZSxPQUFPLENBQUM7UUFDakMsdUJBQVMsS0FBSyxFQUFFLElBQUksSUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRzs7Ozs7SUFHbEQsaUJB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ZUFBWSxPQUFPLFlBQVMsSUFBSSxPQUFPLGVBQVksRUFBRTtZQUM5RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Y7OztZQWhIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLG1wQkFBMkM7Z0JBQzNDLElBQUksRUFBRTtvQkFDSixzQkFBc0IsRUFBRSxNQUFNO29CQUM5QixrQ0FBa0MsRUFBRSxZQUFZO29CQUNoRCw2QkFBNkIsRUFBRSxVQUFVO2lCQUMxQzthQUNGOzs7dUJBU0UsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF2YXRhclNoYXBlLCBBdmF0YXJTaXplLCBOelNrZWxldG9uQXZhdGFyLCBOelNrZWxldG9uUGFyYWdyYXBoLCBOelNrZWxldG9uVGl0bGUgfSBmcm9tICcuL256LXNrZWxldG9uLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1za2VsZXRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1za2VsZXRvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1za2VsZXRvbl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b24td2l0aC1hdmF0YXJdJzogJyEhbnpBdmF0YXInLFxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLWFjdGl2ZV0nOiAnbnpBY3RpdmUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTa2VsZXRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgdGl0bGU6IE56U2tlbGV0b25UaXRsZTtcbiAgYXZhdGFyOiBOelNrZWxldG9uQXZhdGFyO1xuICBwYXJhZ3JhcGg6IE56U2tlbGV0b25QYXJhZ3JhcGg7XG4gIGF2YXRhckNsYXNzTWFwO1xuICByb3dzTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgd2lkdGhMaXN0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XG5cbiAgQElucHV0KCkgbnpBY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpUaXRsZTogTnpTa2VsZXRvblRpdGxlIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56QXZhdGFyOiBOelNrZWxldG9uQXZhdGFyIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuelBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaCB8IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgZ2V0VGl0bGVQcm9wcygpOiBOelNrZWxldG9uVGl0bGUge1xuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcbiAgICBjb25zdCBoYXNQYXJhZ3JhcGg6IGJvb2xlYW4gPSAhIXRoaXMubnpQYXJhZ3JhcGg7XG4gICAgbGV0IHdpZHRoOiBzdHJpbmc7XG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XG4gICAgICB3aWR0aCA9ICczOCUnO1xuICAgIH0gZWxzZSBpZiAoaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xuICAgICAgd2lkdGggPSAnNTAlJztcbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGgsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelRpdGxlKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdmF0YXJQcm9wcygpOiBOelNrZWxldG9uQXZhdGFyIHtcbiAgICBjb25zdCBzaGFwZTogQXZhdGFyU2hhcGUgPSAoISF0aGlzLm56VGl0bGUgJiYgIXRoaXMubnpQYXJhZ3JhcGgpID8gJ3NxdWFyZScgOiAnY2lyY2xlJztcbiAgICBjb25zdCBzaXplOiBBdmF0YXJTaXplID0gJ2xhcmdlJztcbiAgICByZXR1cm4geyBzaGFwZSwgc2l6ZSwgLi4udGhpcy5nZXRQcm9wcyh0aGlzLm56QXZhdGFyKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJhZ3JhcGhQcm9wcygpOiBOelNrZWxldG9uUGFyYWdyYXBoIHtcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMubnpBdmF0YXI7XG4gICAgY29uc3QgaGFzVGl0bGU6IGJvb2xlYW4gPSAhIXRoaXMubnpUaXRsZTtcbiAgICBjb25zdCBiYXNpY1Byb3BzOiBOelNrZWxldG9uUGFyYWdyYXBoID0ge307XG4gICAgLy8gV2lkdGhcbiAgICBpZiAoIWhhc0F2YXRhciB8fCAhaGFzVGl0bGUpIHtcbiAgICAgIGJhc2ljUHJvcHMud2lkdGggPSAnNjElJztcbiAgICB9XG4gICAgLy8gUm93c1xuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1RpdGxlKSB7XG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAzO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAyO1xuICAgIH1cbiAgICByZXR1cm4geyAuLi5iYXNpY1Byb3BzLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpQYXJhZ3JhcGgpIH07XG4gIH1cblxuICBwcml2YXRlIGdldFByb3BzPFQ+KHByb3A6IFQgfCBib29sZWFuIHwgdW5kZWZpbmVkKTogVCB8IHt9ICB7XG4gICAgaWYgKHByb3AgJiYgdHlwZW9mIHByb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcHJvcDtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdG9DU1NVbml0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaWR0aExpc3QoKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XG4gICAgY29uc3QgeyB3aWR0aCwgcm93cyB9ID0gdGhpcy5wYXJhZ3JhcGg7XG4gICAgbGV0IHdpZHRoTGlzdCA9IFtdO1xuICAgIGlmICh3aWR0aCAmJiBBcnJheS5pc0FycmF5KHdpZHRoKSkge1xuICAgICAgd2lkdGhMaXN0ID0gd2lkdGg7XG4gICAgfSBlbHNlIGlmICh3aWR0aCAmJiAhQXJyYXkuaXNBcnJheSh3aWR0aCkpIHtcbiAgICAgIHdpZHRoTGlzdCA9IFtdO1xuICAgICAgd2lkdGhMaXN0W3Jvd3MgLSAxXSA9IHdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gd2lkdGhMaXN0O1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5hdmF0YXJDbGFzc01hcCA9IHtcbiAgICAgIFsgYGFudC1za2VsZXRvbi1hdmF0YXItbGdgIF0gICAgIDogdGhpcy5hdmF0YXIuc2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFsgYGFudC1za2VsZXRvbi1hdmF0YXItc20gYCBdICAgIDogdGhpcy5hdmF0YXIuc2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgIFsgYGFudC1za2VsZXRvbi1hdmF0YXItY2lyY2xlYCBdIDogdGhpcy5hdmF0YXIuc2hhcGUgPT09ICdjaXJjbGUnLFxuICAgICAgWyBgYW50LXNrZWxldG9uLWF2YXRhci1zcXVhcmUgYCBdOiB0aGlzLmF2YXRhci5zaGFwZSA9PT0gJ3NxdWFyZSdcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlUHJvcHMoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSAgICAgPSB0aGlzLmdldFRpdGxlUHJvcHMoKTtcbiAgICB0aGlzLmF2YXRhciAgICA9IHRoaXMuZ2V0QXZhdGFyUHJvcHMoKTtcbiAgICB0aGlzLnBhcmFncmFwaCA9IHRoaXMuZ2V0UGFyYWdyYXBoUHJvcHMoKTtcbiAgICB0aGlzLnJvd3NMaXN0ICA9IFsuLi5BcnJheSh0aGlzLnBhcmFncmFwaC5yb3dzKV07XG4gICAgdGhpcy53aWR0aExpc3QgPSB0aGlzLmdldFdpZHRoTGlzdCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQcm9wcygpO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelRpdGxlIHx8IGNoYW5nZXMubnpBdmF0YXIgfHwgY2hhbmdlcy5uelBhcmFncmFwaCkge1xuICAgICAgdGhpcy51cGRhdGVQcm9wcygpO1xuICAgICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxufVxuIl19