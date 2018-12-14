/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export const NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export const NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export const DEFAULT_TWOTONE_COLOR = '#1890ff';
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
export class NzIconService extends IconService {
    /**
     * @param {?} _rendererFactory
     * @param {?} _handler
     * @param {?} _document
     * @param {?} _icons
     * @param {?} _defaultColor
     */
    constructor(_rendererFactory, _handler, _document, _icons, _defaultColor) {
        super(_rendererFactory, _handler, _document);
        this._rendererFactory = _rendererFactory;
        this._handler = _handler;
        this._document = _document;
        this._icons = _icons;
        this._defaultColor = _defaultColor;
        this._iconfontCache = new Set();
        this.warnedAboutAPI = false;
        this.warnedAboutCross = false;
        this.warnedAboutVertical = false;
        /** @type {?} */
        const iconsUsedByZorro = [
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
        this.addIcon(...iconsUsedByZorro);
        if (this._icons) {
            this.addIcon(...this._icons);
        }
        /** @type {?} */
        let primaryColor = DEFAULT_TWOTONE_COLOR;
        if (this._defaultColor) {
            if (this._defaultColor.startsWith('#')) {
                primaryColor = this._defaultColor;
            }
            else {
                if (isDevMode()) {
                    console.error('[NG-ZORRO] twotone color must be a hex color!');
                }
            }
        }
        this.twoToneColor = { primaryColor };
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    normalizeSvgElement(svg) {
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
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    fetchFromIconfont(opt) {
        const { scriptUrl } = opt;
        if (this._document && !this._iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            const script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._iconfontCache.add(scriptUrl);
            this._renderer.appendChild(this._document.body, script);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    createIconfontIcon(type) {
        return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
    }
}
NzIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzIconService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: HttpBackend, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
];
/** @nocollapse */ NzIconService.ngInjectableDef = i0.defineInjectable({ factory: function NzIconService_Factory() { return new i1.NzIconService(i0.inject(i0.RendererFactory2), i0.inject(i2.HttpBackend, 8), i0.inject(i3.DOCUMENT, 8), i0.inject(i1.NZ_ICONS, 8), i0.inject(i1.NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: i1.NzIconService, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImljb24vbnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBa0IsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDeEUsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUFFLFVBQVUsRUFDcEMsY0FBYyxFQUNkLGlCQUFpQixFQUNqQixXQUFXLEVBQ1gsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixxQkFBcUIsRUFDckIsWUFBWSxFQUNaLGFBQWEsRUFDYixTQUFTLEVBQ1YsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFNekMsYUFBYSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBQ3ZELGFBQWEsNkJBQTZCLEdBQUcsSUFBSSxjQUFjLENBQUMsK0JBQStCLENBQUMsQ0FBQzs7QUFDakcsYUFBYSxxQkFBcUIsR0FBRyxTQUFTLENBQUM7Ozs7QUFRL0MsTUFBTSxvQkFBcUIsU0FBUSxXQUFXOzs7Ozs7OztJQW9DNUMsWUFDWSxnQkFBa0MsRUFDdEIsUUFBcUIsRUFDSCxTQUFjLEVBQ2hCLE1BQXdCLEVBQ0gsYUFBcUI7UUFFaEYsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQU5uQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDSCxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ0gsa0JBQWEsR0FBYixhQUFhLENBQVE7OEJBeEN6RCxJQUFJLEdBQUcsRUFBVTs4QkFFekIsS0FBSztnQ0FDSCxLQUFLO21DQUNGLEtBQUs7O1FBd0N6QixNQUFNLGdCQUFnQixHQUFxQjtZQUN6QyxlQUFlO1lBQ2YsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsVUFBVTtZQUNWLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIsV0FBVztZQUNYLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLFlBQVk7WUFDWixhQUFhO1lBQ2IsU0FBUztTQUNWLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztRQUVsQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQUU7O1FBRWxELElBQUksWUFBWSxHQUFHLHFCQUFxQixDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxJQUFJLFNBQVMsRUFBRSxFQUFFO29CQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztpQkFBRTthQUNyRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDO0tBQ3RDOzs7OztJQTVFRCxtQkFBbUIsQ0FBQyxHQUFlO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDOUQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMxRDtLQUNGOzs7OztJQUVELGlCQUFpQixDQUFDLEdBQXFCO1FBQ3JDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7O1lBQ3pELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN6RDtLQUNGOzs7OztJQUVELGtCQUFrQixDQUFDLElBQVk7UUFDN0IsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMseUJBQXlCLElBQUksVUFBVSxDQUFDLENBQUM7S0FDbEY7OztZQXBDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUF4Q2lFLGdCQUFnQjtZQUR6RSxXQUFXLHVCQWdGZixRQUFROzRDQUNSLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTt3Q0FDM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFRO3lDQUMzQixRQUFRLFlBQUksTUFBTSxTQUFDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgaXNEZXZNb2RlLCBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIEljb25TZXJ2aWNlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5pbXBvcnQge1xuICBDYWxlbmRhck91dGxpbmUsXG4gIENoZWNrQ2lyY2xlRmlsbCxcbiAgQ2hlY2tDaXJjbGVPdXRsaW5lLFxuICBDaGVja091dGxpbmUsXG4gIENsb2NrQ2lyY2xlT3V0bGluZSxcbiAgQ2xvc2VDaXJjbGVGaWxsLFxuICBDbG9zZUNpcmNsZU91dGxpbmUsXG4gIENsb3NlT3V0bGluZSxcbiAgRG91YmxlTGVmdE91dGxpbmUsXG4gIERvdWJsZVJpZ2h0T3V0bGluZSxcbiAgRG93bk91dGxpbmUsXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbCxcbiAgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lLCBGaWx0ZXJGaWxsLFxuICBJbmZvQ2lyY2xlRmlsbCxcbiAgSW5mb0NpcmNsZU91dGxpbmUsXG4gIExlZnRPdXRsaW5lLFxuICBMb2FkaW5nT3V0bGluZSxcbiAgUGFwZXJDbGlwT3V0bGluZSxcbiAgUXVlc3Rpb25DaXJjbGVPdXRsaW5lLFxuICBSaWdodE91dGxpbmUsXG4gIFVwbG9hZE91dGxpbmUsXG4gIFVwT3V0bGluZVxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2ljb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBOekljb25mb250T3B0aW9uIHtcbiAgc2NyaXB0VXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBOWl9JQ09OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbnMnKTtcbmV4cG9ydCBjb25zdCBOWl9JQ09OX0RFRkFVTFRfVFdPVE9ORV9DT0xPUiA9IG5ldyBJbmplY3Rpb25Ub2tlbignbnpfaWNvbl9kZWZhdWx0X3R3b3RvbmVfY29sb3InKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSAnIzE4OTBmZic7XG5cbi8qKlxuICogSXQgc2hvdWxkIGJlIGEgZ2xvYmFsIHNpbmdsZXRvbiwgb3RoZXJ3aXNlIHJlZ2lzdGVyZWQgaWNvbnMgY291bGQgbm90IGJlIGZvdW5kLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOekljb25TZXJ2aWNlIGV4dGVuZHMgSWNvblNlcnZpY2Uge1xuICBwcml2YXRlIF9pY29uZm9udENhY2hlID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgd2FybmVkQWJvdXRBUEkgPSBmYWxzZTtcbiAgd2FybmVkQWJvdXRDcm9zcyA9IGZhbHNlOyAvLyBUT0RPOiByZW1vdmUgaW4gMi4wXG4gIHdhcm5lZEFib3V0VmVydGljYWwgPSBmYWxzZTtcblxuICBub3JtYWxpemVTdmdFbGVtZW50KHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgndmlld0JveCcpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAndmlld0JveCcsICcwIDAgMTAyNCAxMDI0Jyk7XG4gICAgfVxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSB8fCAhc3ZnLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd3aWR0aCcsICcxZW0nKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdoZWlnaHQnLCAnMWVtJyk7XG4gICAgfVxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgnZmlsbCcpKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZmlsbCcsICdjdXJyZW50Q29sb3InKTtcbiAgICB9XG4gIH1cblxuICBmZXRjaEZyb21JY29uZm9udChvcHQ6IE56SWNvbmZvbnRPcHRpb24pOiB2b2lkIHtcbiAgICBjb25zdCB7IHNjcmlwdFVybCB9ID0gb3B0O1xuICAgIGlmICh0aGlzLl9kb2N1bWVudCAmJiAhdGhpcy5faWNvbmZvbnRDYWNoZS5oYXMoc2NyaXB0VXJsKSkge1xuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnc3JjJywgc2NyaXB0VXJsKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzY3JpcHQsICdkYXRhLW5hbWVzcGFjZScsIHNjcmlwdFVybC5yZXBsYWNlKC9eKGh0dHBzP3xodHRwKTovZywgJycpKTtcbiAgICAgIHRoaXMuX2ljb25mb250Q2FjaGUuYWRkKHNjcmlwdFVybCk7XG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9kb2N1bWVudC5ib2R5LCBzY3JpcHQpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUljb25mb250SWNvbih0eXBlOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoYDxzdmc+PHVzZSB4bGluazpocmVmPVwiJHt0eXBlfVwiPjwvc3ZnPmApO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBfaGFuZGxlcjogSHR0cEJhY2tlbmQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIF9kb2N1bWVudDogYW55LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTlMpIHByaXZhdGUgX2ljb25zOiBJY29uRGVmaW5pdGlvbltdLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1IpIHByaXZhdGUgX2RlZmF1bHRDb2xvcjogc3RyaW5nXG4gICkge1xuICAgIHN1cGVyKF9yZW5kZXJlckZhY3RvcnksIF9oYW5kbGVyLCBfZG9jdW1lbnQpO1xuXG4gICAgY29uc3QgaWNvbnNVc2VkQnlab3JybzogSWNvbkRlZmluaXRpb25bXSA9IFtcbiAgICAgIENhbGVuZGFyT3V0bGluZSxcbiAgICAgIENoZWNrQ2lyY2xlRmlsbCxcbiAgICAgIENoZWNrQ2lyY2xlT3V0bGluZSxcbiAgICAgIENoZWNrT3V0bGluZSxcbiAgICAgIENsb2NrQ2lyY2xlT3V0bGluZSxcbiAgICAgIENsb3NlQ2lyY2xlT3V0bGluZSxcbiAgICAgIENsb3NlQ2lyY2xlRmlsbCxcbiAgICAgIENsb3NlT3V0bGluZSxcbiAgICAgIERvdWJsZUxlZnRPdXRsaW5lLFxuICAgICAgRG91YmxlUmlnaHRPdXRsaW5lLFxuICAgICAgRG93bk91dGxpbmUsXG4gICAgICBFeGNsYW1hdGlvbkNpcmNsZUZpbGwsXG4gICAgICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmUsXG4gICAgICBGaWx0ZXJGaWxsLFxuICAgICAgSW5mb0NpcmNsZUZpbGwsXG4gICAgICBJbmZvQ2lyY2xlT3V0bGluZSxcbiAgICAgIExlZnRPdXRsaW5lLFxuICAgICAgTG9hZGluZ091dGxpbmUsXG4gICAgICBQYXBlckNsaXBPdXRsaW5lLFxuICAgICAgUXVlc3Rpb25DaXJjbGVPdXRsaW5lLFxuICAgICAgUmlnaHRPdXRsaW5lLFxuICAgICAgVXBsb2FkT3V0bGluZSxcbiAgICAgIFVwT3V0bGluZVxuICAgIF07XG4gICAgdGhpcy5hZGRJY29uKC4uLmljb25zVXNlZEJ5Wm9ycm8pO1xuXG4gICAgaWYgKHRoaXMuX2ljb25zKSB7IHRoaXMuYWRkSWNvbiguLi50aGlzLl9pY29ucyk7IH1cblxuICAgIGxldCBwcmltYXJ5Q29sb3IgPSBERUZBVUxUX1RXT1RPTkVfQ09MT1I7XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRDb2xvcikge1xuICAgICAgaWYgKHRoaXMuX2RlZmF1bHRDb2xvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgcHJpbWFyeUNvbG9yID0gdGhpcy5fZGVmYXVsdENvbG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7IGNvbnNvbGUuZXJyb3IoJ1tORy1aT1JST10gdHdvdG9uZSBjb2xvciBtdXN0IGJlIGEgaGV4IGNvbG9yIScpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudHdvVG9uZUNvbG9yID0geyBwcmltYXJ5Q29sb3IgfTtcbiAgfVxufVxuIl19