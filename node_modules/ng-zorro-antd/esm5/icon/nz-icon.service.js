/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { isDevMode, Inject, Injectable, InjectionToken, Optional, RendererFactory2 } from '@angular/core';
import { IconService } from '@ant-design/icons-angular';
import { CalendarOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleFill, CloseCircleOutline, CloseOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, ExclamationCircleFill, ExclamationCircleOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, UploadOutline, UpOutline } from '@ant-design/icons-angular/icons';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/common";
/**
 * @record
 */
export function NzIconfontOption() { }
function NzIconfontOption_tsickle_Closure_declarations() {
    /** @type {?} */
    NzIconfontOption.prototype.scriptUrl;
}
/** @type {?} */
export var NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export var NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export var DEFAULT_TWOTONE_COLOR = '#1890ff';
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
var NzIconService = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconService, _super);
    // tslint:disable:no-any
    function NzIconService(_rendererFactory, _handler, _document, _icons, _defaultColor) {
        var _this = _super.call(this, _rendererFactory, _handler, _document) || this;
        _this._rendererFactory = _rendererFactory;
        _this._handler = _handler;
        _this._document = _document;
        _this._icons = _icons;
        _this._defaultColor = _defaultColor;
        _this._iconfontCache = new Set();
        _this.warnedAboutAPI = false;
        _this.warnedAboutCross = false;
        _this.warnedAboutVertical = false;
        /** @type {?} */
        var iconsUsedByZorro = [
            CalendarOutline,
            CheckCircleFill,
            CheckCircleOutline,
            CheckOutline,
            ClockCircleOutline,
            CloseCircleOutline,
            CloseCircleFill,
            CloseOutline,
            DoubleLeftOutline,
            DoubleRightOutline,
            DownOutline,
            ExclamationCircleFill,
            ExclamationCircleOutline,
            FilterFill,
            InfoCircleFill,
            InfoCircleOutline,
            LeftOutline,
            LoadingOutline,
            PaperClipOutline,
            QuestionCircleOutline,
            RightOutline,
            UploadOutline,
            UpOutline
        ];
        _this.addIcon.apply(_this, tslib_1.__spread(iconsUsedByZorro));
        if (_this._icons) {
            _this.addIcon.apply(_this, tslib_1.__spread(_this._icons));
        }
        /** @type {?} */
        var primaryColor = DEFAULT_TWOTONE_COLOR;
        if (_this._defaultColor) {
            if (_this._defaultColor.startsWith('#')) {
                primaryColor = _this._defaultColor;
            }
            else {
                if (isDevMode()) {
                    console.error('[NG-ZORRO] twotone color must be a hex color!');
                }
            }
        }
        _this.twoToneColor = { primaryColor: primaryColor };
        return _this;
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    NzIconService.prototype.normalizeSvgElement = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    NzIconService.prototype.fetchFromIconfont = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        var scriptUrl = opt.scriptUrl;
        if (this._document && !this._iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            var script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._iconfontCache.add(scriptUrl);
            this._renderer.appendChild(this._document.body, script);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NzIconService.prototype.createIconfontIcon = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._createSVGElementFromString("<svg><use xlink:href=\"" + type + "\"></svg>");
    };
    NzIconService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzIconService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: HttpBackend, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
    ]; };
    /** @nocollapse */ NzIconService.ngInjectableDef = i0.defineInjectable({ factory: function NzIconService_Factory() { return new i1.NzIconService(i0.inject(i0.RendererFactory2), i0.inject(i2.HttpBackend, 8), i0.inject(i3.DOCUMENT, 8), i0.inject(i1.NZ_ICONS, 8), i0.inject(i1.NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: i1.NzIconService, providedIn: "root" });
    return NzIconService;
}(IconService));
export { NzIconService };
function NzIconService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzIconService.prototype._iconfontCache;
    /** @type {?} */
    NzIconService.prototype.warnedAboutAPI;
    /** @type {?} */
    NzIconService.prototype.warnedAboutCross;
    /** @type {?} */
    NzIconService.prototype.warnedAboutVertical;
    /** @type {?} */
    NzIconService.prototype._rendererFactory;
    /** @type {?} */
    NzIconService.prototype._handler;
    /** @type {?} */
    NzIconService.prototype._document;
    /** @type {?} */
    NzIconService.prototype._icons;
    /** @type {?} */
    NzIconService.prototype._defaultColor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImljb24vbnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQWtCLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLHFCQUFxQixFQUNyQix3QkFBd0IsRUFBRSxVQUFVLEVBQ3BDLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixhQUFhLEVBQ2IsU0FBUyxFQUNWLE1BQU0saUNBQWlDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBTXpDLFdBQWEsUUFBUSxHQUFHLElBQUksY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUN2RCxXQUFhLDZCQUE2QixHQUFHLElBQUksY0FBYyxDQUFDLCtCQUErQixDQUFDLENBQUM7O0FBQ2pHLFdBQWEscUJBQXFCLEdBQUcsU0FBUyxDQUFDOzs7OztJQVFaLHlDQUFXO0lBbUM1Qyx3QkFBd0I7SUFDeEIsdUJBQ1ksZ0JBQWtDLEVBQ3RCLFFBQXFCLEVBQ0gsU0FBYyxFQUNoQixNQUF3QixFQUNILGFB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LFNBQVMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekQ7S0FDRjs7Ozs7SUFFRCwwQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsSUFBWTtRQUM3QixPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyw0QkFBeUIsSUFBSSxjQUFVLENBQUMsQ0FBQztLQUNsRjs7Z0JBcENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBeENpRSxnQkFBZ0I7Z0JBRHpFLFdBQVcsdUJBZ0ZmLFFBQVE7Z0RBQ1IsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzRDQUMzQixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7NkNBQzNCLFFBQVEsWUFBSSxNQUFNLFNBQUMsNkJBQTZCOzs7d0JBcEZyRDtFQTJDbUMsV0FBVztTQUFqQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBpc0Rldk1vZGUsIEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgSWNvblNlcnZpY2UgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcbmltcG9ydCB7XG4gIENhbGVuZGFyT3V0bGluZSxcbiAgQ2hlY2tDaXJjbGVGaWxsLFxuICBDaGVja0NpcmNsZU91dGxpbmUsXG4gIENoZWNrT3V0bGluZSxcbiAgQ2xvY2tDaXJjbGVPdXRsaW5lLFxuICBDbG9zZUNpcmNsZUZpbGwsXG4gIENsb3NlQ2lyY2xlT3V0bGluZSxcbiAgQ2xvc2VPdXRsaW5lLFxuICBEb3VibGVMZWZ0T3V0bGluZSxcbiAgRG91YmxlUmlnaHRPdXRsaW5lLFxuICBEb3duT3V0bGluZSxcbiAgRXhjbGFtYXRpb25DaXJjbGVGaWxsLFxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmUsIEZpbHRlckZpbGwsXG4gIEluZm9DaXJjbGVGaWxsLFxuICBJbmZvQ2lyY2xlT3V0bGluZSxcbiAgTGVmdE91dGxpbmUsXG4gIExvYWRpbmdPdXRsaW5lLFxuICBQYXBlckNsaXBPdXRsaW5lLFxuICBRdWVzdGlvbkNpcmNsZU91dGxpbmUsXG4gIFJpZ2h0T3V0bGluZSxcbiAgVXBsb2FkT3V0bGluZSxcbiAgVXBPdXRsaW5lXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE56SWNvbmZvbnRPcHRpb24ge1xuICBzY3JpcHRVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IE5aX0lDT05TID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29ucycpO1xuZXhwb3J0IGNvbnN0IE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29uX2RlZmF1bHRfdHdvdG9uZV9jb2xvcicpO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVFdPVE9ORV9DT0xPUiA9ICcjMTg5MGZmJztcblxuLyoqXG4gKiBJdCBzaG91bGQgYmUgYSBnbG9iYWwgc2luZ2xldG9uLCBvdGhlcndpc2UgcmVnaXN0ZXJlZCBpY29ucyBjb3VsZCBub3QgYmUgZm91bmQuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE56SWNvblNlcnZpY2UgZXh0ZW5kcyBJY29uU2VydmljZSB7XG4gIHByaXZhdGUgX2ljb25mb250Q2FjaGUgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICB3YXJuZWRBYm91dEFQSSA9IGZhbHNlO1xuICB3YXJuZWRBYm91dENyb3NzID0gZmFsc2U7IC8vIFRPRE86IHJlbW92ZSBpbiAyLjBcbiAgd2FybmVkQWJvdXRWZXJ0aWNhbCA9IGZhbHNlO1xuXG4gIG5vcm1hbGl6ZVN2Z0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd2aWV3Qm94JykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd2aWV3Qm94JywgJzAgMCAxMDI0IDEwMjQnKTtcbiAgICB9XG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCd3aWR0aCcpIHx8ICFzdmcuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3dpZHRoJywgJzFlbScpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2hlaWdodCcsICcxZW0nKTtcbiAgICB9XG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCdmaWxsJykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdmaWxsJywgJ2N1cnJlbnRDb2xvcicpO1xuICAgIH1cbiAgfVxuXG4gIGZldGNoRnJvbUljb25mb250KG9wdDogTnpJY29uZm9udE9wdGlvbik6IHZvaWQge1xuICAgIGNvbnN0IHsgc2NyaXB0VXJsIH0gPSBvcHQ7XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50ICYmICF0aGlzLl9pY29uZm9udENhY2hlLmhhcyhzY3JpcHRVcmwpKSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLl9yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdzcmMnLCBzY3JpcHRVcmwpO1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHNjcmlwdCwgJ2RhdGEtbmFtZXNwYWNlJywgc2NyaXB0VXJsLnJlcGxhY2UoL14oaHR0cHM/fGh0dHApOi9nLCAnJykpO1xuICAgICAgdGhpcy5faWNvbmZvbnRDYWNoZS5hZGQoc2NyaXB0VXJsKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2RvY3VtZW50LmJvZHksIHNjcmlwdCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlSWNvbmZvbnRJY29uKHR5cGU6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTVkdFbGVtZW50RnJvbVN0cmluZyhgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIke3R5cGV9XCI+PC9zdmc+YCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIF9yZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIF9oYW5kbGVyOiBIdHRwQmFja2VuZCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgX2RvY3VtZW50OiBhbnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JQ09OUykgcHJpdmF0ZSBfaWNvbnM6IEljb25EZWZpbml0aW9uW10sXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUikgcHJpdmF0ZSBfZGVmYXVsdENvbG9yOiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoX3JlbmRlcmVyRmFjdG9yeSwgX2hhbmRsZXIsIF9kb2N1bWVudCk7XG5cbiAgICBjb25zdCBpY29uc1VzZWRCeVpvcnJvOiBJY29uRGVmaW5pdGlvbltdID0gW1xuICAgICAgQ2FsZW5kYXJPdXRsaW5lLFxuICAgICAgQ2hlY2tDaXJjbGVGaWxsLFxuICAgICAgQ2hlY2tDaXJjbGVPdXRsaW5lLFxuICAgICAgQ2hlY2tPdXRsaW5lLFxuICAgICAgQ2xvY2tDaXJjbGVPdXRsaW5lLFxuICAgICAgQ2xvc2VDaXJjbGVPdXRsaW5lLFxuICAgICAgQ2xvc2VDaXJjbGVGaWxsLFxuICAgICAgQ2xvc2VPdXRsaW5lLFxuICAgICAgRG91YmxlTGVmdE91dGxpbmUsXG4gICAgICBEb3VibGVSaWdodE91dGxpbmUsXG4gICAgICBEb3duT3V0bGluZSxcbiAgICAgIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbCxcbiAgICAgIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZSxcbiAgICAgIEZpbHRlckZpbGwsXG4gICAgICBJbmZvQ2lyY2xlRmlsbCxcbiAgICAgIEluZm9DaXJjbGVPdXRsaW5lLFxuICAgICAgTGVmdE91dGxpbmUsXG4gICAgICBMb2FkaW5nT3V0bGluZSxcbiAgICAgIFBhcGVyQ2xpcE91dGxpbmUsXG4gICAgICBRdWVzdGlvbkNpcmNsZU91dGxpbmUsXG4gICAgICBSaWdodE91dGxpbmUsXG4gICAgICBVcGxvYWRPdXRsaW5lLFxuICAgICAgVXBPdXRsaW5lXG4gICAgXTtcbiAgICB0aGlzLmFkZEljb24oLi4uaWNvbnNVc2VkQnlab3Jybyk7XG5cbiAgICBpZiAodGhpcy5faWNvbnMpIHsgdGhpcy5hZGRJY29uKC4uLnRoaXMuX2ljb25zKTsgfVxuXG4gICAgbGV0IHByaW1hcnlDb2xvciA9IERFRkFVTFRfVFdPVE9ORV9DT0xPUjtcbiAgICBpZiAodGhpcy5fZGVmYXVsdENvbG9yKSB7XG4gICAgICBpZiAodGhpcy5fZGVmYXVsdENvbG9yLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICBwcmltYXJ5Q29sb3IgPSB0aGlzLl9kZWZhdWx0Q29sb3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNEZXZNb2RlKCkpIHsgY29uc29sZS5lcnJvcignW05HLVpPUlJPXSB0d290b25lIGNvbG9yIG11c3QgYmUgYSBoZXggY29sb3IhJyk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50d29Ub25lQ29sb3IgPSB7IHByaW1hcnlDb2xvciB9O1xuICB9XG59XG4iXX0=