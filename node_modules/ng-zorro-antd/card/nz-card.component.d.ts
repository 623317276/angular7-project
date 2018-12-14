import { TemplateRef } from '@angular/core';
import { NzCardTabComponent } from './nz-card-tab.component';
export declare class NzCardComponent {
    private _bordered;
    private _loading;
    private _hoverable;
    private _title;
    private _extra;
    isTitleString: boolean;
    isExtraString: boolean;
    tab: NzCardTabComponent;
    nzBodyStyle: {
        [key: string]: string;
    };
    nzCover: TemplateRef<void>;
    nzActions: Array<TemplateRef<void>>;
    nzType: string;
    nzTitle: string | TemplateRef<void>;
    nzExtra: string | TemplateRef<void>;
    readonly isInner: boolean;
    readonly isTabs: boolean;
    nzBordered: boolean;
    nzLoading: boolean;
    nzHoverable: boolean;
}
