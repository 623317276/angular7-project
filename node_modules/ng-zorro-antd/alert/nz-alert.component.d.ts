import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
export declare type NgClassType = string | string[] | Set<string> | {
    [klass: string]: any;
};
export declare class NzAlertComponent implements OnInit {
    private _banner;
    private _closeable;
    private _showIcon;
    private _type;
    private _description;
    private _message;
    private _closeText;
    display: boolean;
    isTypeSet: boolean;
    isShowIconSet: boolean;
    prefixClass: string;
    isDescriptionString: boolean;
    isMessageString: boolean;
    isCloseTextString: boolean;
    outerClassMap: any;
    iconType: any;
    nzOnClose: EventEmitter<boolean>;
    nzIconType: NgClassType;
    nzDescription: string | TemplateRef<void>;
    nzCloseText: string | TemplateRef<void>;
    nzMessage: string | TemplateRef<void>;
    nzType: string;
    nzBanner: boolean;
    nzCloseable: boolean;
    nzShowIcon: boolean;
    closeAlert(): void;
    onFadeAnimationDone(): void;
    updateOuterClassMap(): void;
    updateIconClassMap(): void;
    ngOnInit(): void;
}
