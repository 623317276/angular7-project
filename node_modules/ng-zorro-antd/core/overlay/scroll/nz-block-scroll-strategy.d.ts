import { ScrollStrategy } from '@angular/cdk/overlay';
import { Renderer2 } from '@angular/core';
import { NzMeasureScrollbarService } from '../../services/nz-measure-scrollbar.service';
export declare class NzBlockScrollStrategy implements ScrollStrategy {
    private document;
    private renderer;
    private nzMeasureScrollbarService;
    constructor(document: Document, renderer: Renderer2, nzMeasureScrollbarService: NzMeasureScrollbarService);
    attach(): void;
    enable(): void;
    disable(): void;
}
