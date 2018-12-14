import { TemplateRef } from '@angular/core';
import { PopoverOptions } from './popover-options.provider';
export declare class PopoverComponentOptions extends PopoverOptions {
    onAfterViewInit: () => void;
    hidePopover: () => void;
    overlay: TemplateRef<any>;
}
