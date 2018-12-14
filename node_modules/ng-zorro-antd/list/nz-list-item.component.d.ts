import { QueryList, TemplateRef } from '@angular/core';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
export declare class NzListItemComponent {
    nzActions: Array<TemplateRef<void>>;
    metas: QueryList<NzListItemMetaComponent>;
    isCon: boolean;
    conStr: string;
    conTpl: TemplateRef<void>;
    nzContent: string | TemplateRef<void>;
    nzExtra: TemplateRef<void>;
}
