import { Renderer2 } from '@angular/core';
export declare class NzUpdateHostClassService {
    private renderer;
    private classMap;
    updateHostClass(el: HTMLElement, classMap: object): void;
    private removeClass;
    private addClass;
    constructor(renderer: Renderer2);
}
