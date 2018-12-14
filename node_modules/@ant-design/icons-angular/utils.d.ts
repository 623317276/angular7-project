import { IconDefinition, ThemeType } from './types';
export declare function printErr(message: string): void;
export declare function printWarn(message: string): void;
/**
 * Use ant-design-palettes to generate a secondary color.
 */
export declare function getSecondaryColor(primaryColor: string): string;
/**
 * Append a theme suffix to a type.
 */
export declare function withSuffix(name: string, theme: ThemeType): string;
export declare function withSuffixAndColor(name: string, theme: ThemeType, pri: string, sec: string): string;
export declare function mapAbbrToTheme(abbr: string): ThemeType;
export declare function alreadyHasAThemeSuffix(name: string): boolean;
export declare function isIconDefinition(target: any): target is IconDefinition;
export declare function getIconDefinitionFromAbbr(str: string): IconDefinition;
export declare function cloneSVG(svg: SVGElement): SVGElement;
export declare function replaceFillColor(raw: string): string;
