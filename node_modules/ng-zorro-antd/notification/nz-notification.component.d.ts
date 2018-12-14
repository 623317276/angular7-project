import { NzMessageComponent } from '../message/nz-message.component';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import { NzNotificationDataFilled } from './nz-notification.definitions';
export declare class NzNotificationComponent extends NzMessageComponent {
    private container;
    nzMessage: NzNotificationDataFilled;
    constructor(container: NzNotificationContainerComponent);
    close(): void;
    readonly state: string;
}
