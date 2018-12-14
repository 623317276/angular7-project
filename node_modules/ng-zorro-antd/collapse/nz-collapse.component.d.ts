import { NzCollapsePanelComponent } from './nz-collapse-panel.component';
export declare class NzCollapseComponent {
    private _accordion;
    private _bordered;
    private listOfPanel;
    nzAccordion: boolean;
    nzBordered: boolean;
    click(collapse: NzCollapsePanelComponent): void;
    addCollapse(collapse: NzCollapsePanelComponent): void;
    removeCollapse(collapse: NzCollapsePanelComponent): void;
}
