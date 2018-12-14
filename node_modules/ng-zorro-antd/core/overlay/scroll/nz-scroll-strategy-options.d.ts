import { RendererFactory2 } from '@angular/core';
import { NzMeasureScrollbarService } from '../../services/nz-measure-scrollbar.service';
import { NzBlockScrollStrategy } from './nz-block-scroll-strategy';
export declare class NzScrollStrategyOptions {
    private nzMeasureScrollbarService;
    private document;
    private renderer;
    constructor(rendererFactory: RendererFactory2, nzMeasureScrollbarService: NzMeasureScrollbarService, document: any);
    block: () => NzBlockScrollStrategy;
}
