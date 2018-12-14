import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NzSkeletonAvatar, NzSkeletonParagraph, NzSkeletonTitle } from './nz-skeleton.type';
export declare class NzSkeletonComponent implements OnInit, OnChanges {
    title: NzSkeletonTitle;
    avatar: NzSkeletonAvatar;
    paragraph: NzSkeletonParagraph;
    avatarClassMap: any;
    rowsList: number[];
    widthList: Array<number | string>;
    nzActive: boolean;
    nzLoading: boolean;
    nzTitle: NzSkeletonTitle | boolean;
    nzAvatar: NzSkeletonAvatar | boolean;
    nzParagraph: NzSkeletonParagraph | boolean;
    private getTitleProps;
    private getAvatarProps;
    private getParagraphProps;
    private getProps;
    toCSSUnit(value?: number | string): string;
    private getWidthList;
    updateClassMap(): void;
    updateProps(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
