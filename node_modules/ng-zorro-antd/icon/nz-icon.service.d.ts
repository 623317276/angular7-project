import { HttpBackend } from '@angular/common/http';
import { InjectionToken, RendererFactory2 } from '@angular/core';
import { IconDefinition, IconService } from '@ant-design/icons-angular';
export interface NzIconfontOption {
    scriptUrl: string;
}
export declare const NZ_ICONS: InjectionToken<{}>;
export declare const NZ_ICON_DEFAULT_TWOTONE_COLOR: InjectionToken<{}>;
export declare const DEFAULT_TWOTONE_COLOR = "#1890ff";
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
export declare class NzIconService extends IconService {
    protected _rendererFactory: RendererFactory2;
    protected _handler: HttpBackend;
    protected _document: any;
    private _icons;
    private _defaultColor;
    private _iconfontCache;
    warnedAboutAPI: boolean;
    warnedAboutCross: boolean;
    warnedAboutVertical: boolean;
    normalizeSvgElement(svg: SVGElement): void;
    fetchFromIconfont(opt: NzIconfontOption): void;
    createIconfontIcon(type: string): SVGElement;
    constructor(_rendererFactory: RendererFactory2, _handler: HttpBackend, _document: any, _icons: IconDefinition[], _defaultColor: string);
}
