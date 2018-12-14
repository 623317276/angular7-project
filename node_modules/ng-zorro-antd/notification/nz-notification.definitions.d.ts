import { TemplateRef } from '@angular/core';
import { NzMessageData, NzMessageDataOptions } from '../message/nz-message.definitions';
export interface NzNotificationData extends NzMessageData {
    template?: TemplateRef<{}>;
    type?: 'success' | 'info' | 'warning' | 'error' | 'blank' | string;
    title?: string;
}
export interface NzNotificationDataOptions extends NzMessageDataOptions {
    nzStyle?: any;
    nzClass?: any;
}
export interface NzNotificationDataFilled extends NzNotificationData {
    messageId: string;
    state?: 'enter' | 'leave';
    options?: NzNotificationDataOptions;
    createdAt: Date;
}
