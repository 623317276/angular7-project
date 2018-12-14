import { OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { IconService } from './icon.service';
import { IconDefinition, ThemeType } from '../types';
/**
 * Developers use this component to render an SVG element.
 */
export declare class IconDirective implements OnChanges {
    protected _iconService: IconService;
    protected _elementRef: ElementRef;
    protected _renderer: Renderer2;
    type: string | IconDefinition;
    theme: ThemeType;
    twoToneColor: string;
    /**
     * Render an icon with given type and theme. Return an SVG element for extra behaviors (extended by child classes).
     */
    protected _changeIcon(): Promise<SVGAElement | null>;
    /**
     * Parse an icon's type.
     */
    protected _parseIcon(type: string | IconDefinition, theme: ThemeType): IconDefinition | string;
    /**
     * Render an SVG element into the directive after removing other icons.
     */
    protected _setSVGElement(svg: SVGElement): void;
    protected _clearSVGElement(): void;
    constructor(_iconService: IconService, _elementRef: ElementRef, _renderer: Renderer2);
    ngOnChanges(): void;
}
