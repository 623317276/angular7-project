/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { NzMeasureScrollbarService } from '../../services/nz-measure-scrollbar.service';
import { NzBlockScrollStrategy } from './nz-block-scroll-strategy';
import * as i0 from "@angular/core";
import * as i1 from "../../services/nz-measure-scrollbar.service";
import * as i2 from "@angular/common";
var NzScrollStrategyOptions = /** @class */ (function () {
    function NzScrollStrategyOptions(rendererFactory, nzMeasureScrollbarService, 
    // tslint:disable-next-line:no-any
    document) {
        var _this = this;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.block = function () { return new NzBlockScrollStrategy(_this.document, _this.renderer, _this.nzMeasureScrollbarService); };
        this.document = document;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    NzScrollStrategyOptions.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NzScrollStrategyOptions.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: NzMeasureScrollbarService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzScrollStrategyOptions.ngInjectableDef = i0.defineInjectable({ factory: function NzScrollStrategyOptions_Factory() { return new NzScrollStrategyOptions(i0.inject(i0.RendererFactory2), i0.inject(i1.NzMeasureScrollbarService), i0.inject(i2.DOCUMENT)); }, token: NzScrollStrategyOptions, providedIn: "root" });
    return NzScrollStrategyOptions;
}());
export { NzScrollStrategyOptions };
function NzScrollStrategyOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    NzScrollStrategyOptions.prototype.document;
    /** @type {?} */
    NzScrollStrategyOptions.prototype.renderer;
    /** @type {?} */
    NzScrollStrategyOptions.prototype.block;
    /** @type {?} */
    NzScrollStrategyOptions.prototype.nzMeasureScrollbarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9vdmVybGF5L3Njcm9sbC9uei1zY3JvbGwtc3RyYXRlZ3ktb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7OztJQU1qRSxpQ0FDRSxlQUFpQyxFQUN6Qjs7SUFFVSxRQUFhO1FBSmpDLGlCQVFDO1FBTlMsOEJBQXlCLEdBQXpCLHlCQUF5QjtxQkFRM0IsY0FBTSxPQUFBLElBQUkscUJBQXFCLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxFQUF2RixDQUF1RjtRQUpuRyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzVEOztnQkFaRixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7O2dCQUpRLGdCQUFnQjtnQkFDL0MseUJBQXlCO2dEQVc3QixNQUFNLFNBQUMsUUFBUTs7O2tDQWJwQjs7U0FNYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UnXG5pbXBvcnQgeyBOekJsb2NrU2Nyb2xsU3RyYXRlZ3kgfSBmcm9tICcuL256LWJsb2NrLXNjcm9sbC1zdHJhdGVneSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE56U2Nyb2xsU3RyYXRlZ3lPcHRpb25zIHtcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgY29uc3RydWN0b3IoXG4gICAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIHByaXZhdGUgbnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZTogTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxuXG4gIGJsb2NrID0gKCkgPT4gbmV3IE56QmxvY2tTY3JvbGxTdHJhdGVneSh0aGlzLmRvY3VtZW50LCB0aGlzLnJlbmRlcmVyLCB0aGlzLm56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UpO1xufVxuIl19