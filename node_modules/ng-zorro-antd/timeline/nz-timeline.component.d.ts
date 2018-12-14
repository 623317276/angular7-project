import { AfterContentInit, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
export declare class NzTimelineComponent implements AfterContentInit, OnDestroy {
    private _pending;
    private unsubscribe$;
    isPendingString: boolean;
    isPendingBoolean: boolean;
    nzPending: string | boolean | TemplateRef<void>;
    listOfTimeLine: QueryList<NzTimelineItemComponent>;
    _pendingContent: TemplateRef<void>;
    updateChildrenTimeLine(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}
