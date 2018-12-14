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
export class NzScrollStrategyOptions {
    /**
     * @param {?} rendererFactory
     * @param {?} nzMeasureScrollbarService
     * @param {?} document
     */
    constructor(rendererFactory, nzMeasureScrollbarService, 
    // tslint:disable-next-line:no-any
    document) {
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.block = () => new NzBlockScrollStrategy(this.document, this.renderer, this.nzMeasureScrollbarService);
        this.document = document;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
}
NzScrollStrategyOptions.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NzScrollStrategyOptions.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: NzMeasureScrollbarService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NzScrollStrategyOptions.ngInjectableDef = i0.defineInjectable({ factory: function NzScrollStrategyOptions_Factory() { return new NzScrollStrategyOptions(i0.inject(i0.RendererFactory2), i0.inject(i1.NzMeasureScrollbarService), i0.inject(i2.DOCUMENT)); }, token: NzScrollStrategyOptions, providedIn: "root" });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9vdmVybGF5L3Njcm9sbC9uei1zY3JvbGwtc3RyYXRlZ3ktb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBR25FLE1BQU07Ozs7OztJQUdKLFlBQ0UsZUFBaUMsRUFDekI7O0lBRVUsUUFBYTtRQUZ2Qiw4QkFBeUIsR0FBekIseUJBQXlCO3FCQVEzQixHQUFHLEVBQUUsQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUM7UUFKbkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1RDs7O1lBWkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztZQUpRLGdCQUFnQjtZQUMvQyx5QkFBeUI7NENBVzdCLE1BQU0sU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uei1tZWFzdXJlLXNjcm9sbGJhci5zZXJ2aWNlJ1xuaW1wb3J0IHsgTnpCbG9ja1Njcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi9uei1ibG9jay1zY3JvbGwtc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBOelNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBwcml2YXRlIG56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2U6IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICBibG9jayA9ICgpID0+IG5ldyBOekJsb2NrU2Nyb2xsU3RyYXRlZ3kodGhpcy5kb2N1bWVudCwgdGhpcy5yZW5kZXJlciwgdGhpcy5uek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlKTtcbn1cbiJdfQ==