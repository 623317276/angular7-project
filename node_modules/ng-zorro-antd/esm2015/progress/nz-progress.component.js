/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class NzProgressComponent {
    constructor() {
        this._gapDegree = 0;
        this._gapPosition = 'top';
        this._percent = 0;
        this._status = 'normal';
        this._cacheStatus = 'normal';
        this._strokeWidth = 8;
        this._size = 'default';
        this._type = 'line';
        this._format = (percent) => `${percent}%`;
        this.isStatusSet = false;
        this.isStrokeWidthSet = false;
        this.isFormatSet = false;
        this.isGapDegreeSet = false;
        this.isGapPositionSet = false;
        this.statusColorMap = {
            normal: '#108ee9',
            exception: '#ff5500',
            success: '#87d068'
        };
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzSuccessPercent = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        if (this.nzSize === 'small' && !this.isStrokeWidthSet) {
            this._strokeWidth = 6;
        }
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
    set nzFormat(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.isFormatSet = true;
        }
    }
    /**
     * @return {?}
     */
    get nzFormat() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPercent(value) {
        this._percent = value;
        if (isNotNil(value)) {
            /** @type {?} */
            const fillAll = parseInt(value.toString(), 10) >= 100;
            if (fillAll && !this.isStatusSet) {
                this._status = 'success';
            }
            else {
                this._status = this._cacheStatus;
            }
            this.updatePathStyles();
            this.updateIcon();
        }
    }
    /**
     * @return {?}
     */
    get nzPercent() {
        return this._percent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStrokeWidth(value) {
        if (isNotNil(value)) {
            this._strokeWidth = value;
            this.isStrokeWidthSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzStrokeWidth() {
        return this._strokeWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStatus(value) {
        if (isNotNil(value)) {
            this._status = value;
            this._cacheStatus = value;
            this.isStatusSet = true;
            this.updateIcon();
        }
    }
    /**
     * @return {?}
     */
    get nzStatus() {
        return this._status;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this._type = value;
        if (!this.isStrokeWidthSet) {
            if (this.nzType !== 'line') {
                this._strokeWidth = 6;
            }
        }
        if (this.nzType === 'dashboard') {
            if (!this.isGapPositionSet) {
                this._gapPosition = 'bottom';
            }
            if (!this.isGapDegreeSet) {
                this._gapDegree = 75;
            }
        }
        this.updateIcon();
        this.updatePathStyles();
    }
    /**
     * @return {?}
     */
    get nzType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGapDegree(value) {
        if (isNotNil(value)) {
            this._gapDegree = value;
            this.isGapDegreeSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzGapDegree() {
        return this._gapDegree;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGapPosition(value) {
        if (isNotNil(value)) {
            this._gapPosition = value;
            this.isGapPositionSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzGapPosition() {
        return this._gapPosition;
    }
    /**
     * @return {?}
     */
    get isCirCleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    /**
     * @return {?}
     */
    updatePathStyles() {
        /** @type {?} */
        const radius = 50 - (this.nzStrokeWidth / 2);
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
        switch (this.nzGapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
     a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
     a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        this.trailPathStyle = {
            strokeDasharray: `${len - this.nzGapDegree}px ${len}px`,
            strokeDashoffset: `-${this.nzGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: `${(this.nzPercent / 100) * (len - this.nzGapDegree)}px ${len}px`,
            strokeDashoffset: `-${this.nzGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    }
    /**
     * @return {?}
     */
    updateIcon() {
        /** @type {?} */
        const isCircle = (this.nzType === 'circle' || this.nzType === 'dashboard');
        /** @type {?} */
        let ret = '';
        if (this.nzStatus === 'success') {
            ret = 'check';
        }
        if (this.nzStatus === 'exception') {
            ret = 'close';
        }
        if (ret) {
            if (!isCircle) {
                ret += '-circle';
                this.iconTheme = 'fill';
            }
            else {
                this.iconTheme = 'outline';
            }
        }
        this.icon = ret;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updatePathStyles();
        this.updateIcon();
    }
}
NzProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-progress',
                preserveWhitespaces: false,
                template: "<ng-template #progressInfoTemplate>\n  <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\n    <ng-container *ngIf=\"(nzStatus=='exception')||(nzStatus=='success')&&(!isFormatSet); else formatTemplate\">\n      <!-- Theme is handled in type here. -->\n      <i nz-icon [type]=\"icon\" [theme]=\"iconTheme\"></i>\n    </ng-container>\n    <ng-template #formatTemplate>\n      {{ nzFormat(nzPercent) }}\n    </ng-template>\n  </span>\n</ng-template>\n<div [ngClass]=\"'ant-progress ant-progress-status-'+nzStatus\"\n  [class.ant-progress-line]=\"nzType=='line'\"\n  [class.ant-progress-small]=\"nzSize=='small'\"\n  [class.ant-progress-show-info]=\"nzShowInfo\"\n  [class.ant-progress-circle]=\"isCirCleStyle\">\n  <div *ngIf=\"nzType=='line'\">\n    <div class=\"ant-progress-outer\">\n      <div class=\"ant-progress-inner\">\n        <div class=\"ant-progress-bg\" [style.width.%]=\"nzPercent\" [style.height.px]=\"nzStrokeWidth\"></div>\n        <div class=\"ant-progress-success-bg\" [style.width.%]=\"nzSuccessPercent\" [style.height.px]=\"nzStrokeWidth\"></div>\n      </div>\n    </div>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n  <div\n    [style.width.px]=\"this.nzWidth\"\n    [style.height.px]=\"this.nzWidth\"\n    [style.fontSize.px]=\"this.nzWidth*0.15+6\"\n    class=\"ant-progress-inner\"\n    *ngIf=\"isCirCleStyle\">\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\n      <path\n        class=\"ant-progress-circle-trail\"\n        stroke=\"#f3f3f3\"\n        fill-opacity=\"0\"\n        [attr.stroke-width]=\"nzStrokeWidth\"\n        [ngStyle]=\"trailPathStyle\"\n        [attr.d]=\"pathString\">\n      </path>\n      <path\n        class=\"ant-progress-circle-path\"\n        [attr.d]=\"pathString\"\n        stroke-linecap=\"round\"\n        fill-opacity=\"0\"\n        [attr.stroke]=\"statusColorMap[nzStatus]\"\n        [attr.stroke-width]=\"nzPercent?nzStrokeWidth:0\"\n        [ngStyle]=\"strokePathStyle\">\n      </path>\n    </svg>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n</div>"
            }] }
];
NzProgressComponent.propDecorators = {
    nzShowInfo: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzSuccessPercent: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzPercent: [{ type: Input }],
    nzStrokeWidth: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzType: [{ type: Input }],
    nzGapDegree: [{ type: Input }],
    nzGapPosition: [{ type: Input }]
};
function NzProgressComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzProgressComponent.prototype._gapDegree;
    /** @type {?} */
    NzProgressComponent.prototype._gapPosition;
    /** @type {?} */
    NzProgressComponent.prototype._percent;
    /** @type {?} */
    NzProgressComponent.prototype._status;
    /** @type {?} */
    NzProgressComponent.prototype._cacheStatus;
    /** @type {?} */
    NzProgressComponent.prototype._strokeWidth;
    /** @type {?} */
    NzProgressComponent.prototype._size;
    /** @type {?} */
    NzProgressComponent.prototype._type;
    /** @type {?} */
    NzProgressComponent.prototype._format;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.strokePathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.iconTheme;
    /** @type {?} */
    NzProgressComponent.prototype.isStatusSet;
    /** @type {?} */
    NzProgressComponent.prototype.isStrokeWidthSet;
    /** @type {?} */
    NzProgressComponent.prototype.isFormatSet;
    /** @type {?} */
    NzProgressComponent.prototype.isGapDegreeSet;
    /** @type {?} */
    NzProgressComponent.prototype.isGapPositionSet;
    /** @type {?} */
    NzProgressComponent.prototype.statusColorMap;
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInByb2dyZXNzL256LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTzlDLE1BQU07OzBCQUNpQixDQUFDOzRCQUM0QixLQUFLO3dCQUNwQyxDQUFDO3VCQUNvQixRQUFROzRCQUNILFFBQVE7NEJBQzlCLENBQUM7cUJBQ1IsU0FBUztxQkFDVyxNQUFNO3VCQUN4QixDQUFDLE9BQWUsRUFBVSxFQUFFLENBQUMsR0FBRyxPQUFPLEdBQUc7MkJBTTlDLEtBQUs7Z0NBQ0EsS0FBSzsyQkFDVixLQUFLOzhCQUNGLEtBQUs7Z0NBQ0gsS0FBSzs4QkFDUDtZQUNmLE1BQU0sRUFBSyxTQUFTO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE9BQU8sRUFBSSxTQUFTO1NBQ3JCOzBCQUNxQixJQUFJO3VCQUNQLEdBQUc7Z0NBQ00sQ0FBQzs7Ozs7O0lBRTdCLElBQ0ksTUFBTSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUVELElBQ0ksUUFBUSxDQUFDLEtBQWtDO1FBQzdDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxD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QUssU0FBUyxFQUFFO1lBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUFFO1FBQ25ELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFBRSxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQUU7UUFDckQsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNiLEdBQUcsSUFBSSxTQUFTLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO2FBQzVCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztLQUNqQjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7OztZQTNORixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGFBQWE7Z0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLHVsRUFBbUQ7YUFDcEQ7Ozt5QkEwQkUsS0FBSztzQkFDTCxLQUFLOytCQUNMLEtBQUs7cUJBRUwsS0FBSzt1QkFZTCxLQUFLO3dCQVlMLEtBQUs7NEJBbUJMLEtBQUs7dUJBYUwsS0FBSztxQkFjTCxLQUFLOzBCQXdCTCxLQUFLOzRCQWNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2V4Y2VwdGlvbicgfCAnYWN0aXZlJyB8ICdub3JtYWwnO1xuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnIHwgJ2NpcmNsZScgfCAnZGFzaGJvYXJkJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1wcm9ncmVzcycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2dhcERlZ3JlZSA9IDA7XG4gIHByaXZhdGUgX2dhcFBvc2l0aW9uOiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlID0gJ3RvcCc7XG4gIHByaXZhdGUgX3BlcmNlbnQgPSAwO1xuICBwcml2YXRlIF9zdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgX2NhY2hlU3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xuICBwcml2YXRlIF9zdHJva2VXaWR0aCA9IDg7XG4gIHByaXZhdGUgX3NpemUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX3R5cGU6IE56UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJztcbiAgcHJpdmF0ZSBfZm9ybWF0ID0gKHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwZXJjZW50fSVgO1xuICB0cmFpbFBhdGhTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBzdHJva2VQYXRoU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcbiAgcGF0aFN0cmluZzogc3RyaW5nO1xuICBpY29uO1xuICBpY29uVGhlbWU7XG4gIGlzU3RhdHVzU2V0ID0gZmFsc2U7XG4gIGlzU3Ryb2tlV2lkdGhTZXQgPSBmYWxzZTtcbiAgaXNGb3JtYXRTZXQgPSBmYWxzZTtcbiAgaXNHYXBEZWdyZWVTZXQgPSBmYWxzZTtcbiAgaXNHYXBQb3NpdGlvblNldCA9IGZhbHNlO1xuICBzdGF0dXNDb2xvck1hcCA9IHtcbiAgICBub3JtYWwgICA6ICcjMTA4ZWU5JyxcbiAgICBleGNlcHRpb246ICcjZmY1NTAwJyxcbiAgICBzdWNjZXNzICA6ICcjODdkMDY4J1xuICB9O1xuICBASW5wdXQoKSBuelNob3dJbmZvID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpXaWR0aCA9IDEzMjtcbiAgQElucHV0KCkgbnpTdWNjZXNzUGVyY2VudCA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJyAmJiAhdGhpcy5pc1N0cm9rZVdpZHRoU2V0KSB7XG4gICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IDY7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Rm9ybWF0KHZhbHVlOiAocGVyY2VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNGb3JtYXRTZXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekZvcm1hdCgpOiAocGVyY2VudDogbnVtYmVyKSA9PiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQZXJjZW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wZXJjZW50ID0gdmFsdWU7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgY29uc3QgZmlsbEFsbCA9IHBhcnNlSW50KHZhbHVlLnRvU3RyaW5nKCksIDEwKSA+PSAxMDA7XG4gICAgICBpZiAoZmlsbEFsbCAmJiAhdGhpcy5pc1N0YXR1c1NldCkge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWNoZVN0YXR1cztcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56UGVyY2VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U3Ryb2tlV2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gdmFsdWU7XG4gICAgICB0aGlzLmlzU3Ryb2tlV2lkdGhTZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGg7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTdGF0dXModmFsdWU6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gICAgICB0aGlzLl9jYWNoZVN0YXR1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5pc1N0YXR1c1NldCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTdGF0dXMoKTogTnpQcm9ncmVzc1N0YXR1c1R5cGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUeXBlKHZhbHVlOiBOelByb2dyZXNzVHlwZVR5cGUpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgaWYgKCF0aGlzLmlzU3Ryb2tlV2lkdGhTZXQpIHtcbiAgICAgIGlmICh0aGlzLm56VHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gNjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJykge1xuICAgICAgaWYgKCF0aGlzLmlzR2FwUG9zaXRpb25TZXQpIHtcbiAgICAgICAgdGhpcy5fZ2FwUG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pc0dhcERlZ3JlZVNldCkge1xuICAgICAgICB0aGlzLl9nYXBEZWdyZWUgPSA3NTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gIH1cblxuICBnZXQgbnpUeXBlKCk6IE56UHJvZ3Jlc3NUeXBlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpHYXBEZWdyZWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2dhcERlZ3JlZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pc0dhcERlZ3JlZVNldCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldCBuekdhcERlZ3JlZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9nYXBEZWdyZWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpHYXBQb3NpdGlvbih2YWx1ZTogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2dhcFBvc2l0aW9uID0gdmFsdWU7XG4gICAgICB0aGlzLmlzR2FwUG9zaXRpb25TZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56R2FwUG9zaXRpb24oKTogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhcFBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IGlzQ2lyQ2xlU3R5bGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyB8fCB0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCc7XG4gIH1cblxuICB1cGRhdGVQYXRoU3R5bGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gKHRoaXMubnpTdHJva2VXaWR0aCAvIDIpO1xuICAgIGxldCBiZWdpblBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGJlZ2luUG9zaXRpb25ZID0gLXJhZGl1cztcbiAgICBsZXQgZW5kUG9zaXRpb25YID0gMDtcbiAgICBsZXQgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogLTI7XG4gICAgc3dpdGNoICh0aGlzLm56R2FwUG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IC1yYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICAgIHRoaXMucGF0aFN0cmluZyA9IGBNIDUwLDUwIG0gJHtiZWdpblBvc2l0aW9uWH0sJHtiZWdpblBvc2l0aW9uWX1cbiAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7ZW5kUG9zaXRpb25YfSwkey1lbmRQb3NpdGlvbll9XG4gICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAkey1lbmRQb3NpdGlvblh9LCR7ZW5kUG9zaXRpb25ZfWA7XG4gICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XG4gICAgdGhpcy50cmFpbFBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheSA6IGAke2xlbiAtIHRoaXMubnpHYXBEZWdyZWV9cHggJHtsZW59cHhgLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke3RoaXMubnpHYXBEZWdyZWUgLyAyfXB4YCxcbiAgICAgIHRyYW5zaXRpb24gICAgICA6ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcydcbiAgICB9O1xuICAgIHRoaXMuc3Ryb2tlUGF0aFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5IDogYCR7KHRoaXMubnpQZXJjZW50IC8gMTAwKSAqIChsZW4gLSB0aGlzLm56R2FwRGVncmVlKX1weCAke2xlbn1weGAsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7dGhpcy5uekdhcERlZ3JlZSAvIDJ9cHhgLFxuICAgICAgdHJhbnNpdGlvbiAgICAgIDogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzLCBzdHJva2Utd2lkdGggLjA2cyBlYXNlIC4zcycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH07XG4gIH1cblxuICB1cGRhdGVJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQ2lyY2xlID0gKHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyB8fCB0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCcpO1xuICAgIGxldCByZXQgPSAnJztcbiAgICBpZiAodGhpcy5uelN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7IHJldCA9ICdjaGVjayc7IH1cbiAgICBpZiAodGhpcy5uelN0YXR1cyA9PT0gJ2V4Y2VwdGlvbicpIHsgcmV0ID0gJ2Nsb3NlJzsgfVxuICAgIGlmIChyZXQpIHtcbiAgICAgIGlmICghaXNDaXJjbGUpIHtcbiAgICAgICAgcmV0ICs9ICctY2lyY2xlJztcbiAgICAgICAgdGhpcy5pY29uVGhlbWUgPSAnZmlsbCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pY29uID0gcmV0O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgdGhpcy51cGRhdGVJY29uKCk7XG4gIH1cblxufVxuIl19