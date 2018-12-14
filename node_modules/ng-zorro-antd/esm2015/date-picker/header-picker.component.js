/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { valueFunctionProp } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date';
/**
 * The base picker for header panels, current support: Year/Month
 */
export class HeaderPickerComponent extends AbstractPickerComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        super(i18n);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        const allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes["nzRenderExtraFooter"]) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onPanelModeChange(mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else { // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    }
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    onChooseValue(mode, value) {
        if (this.endPanelMode === mode) {
            super.onValueChange(value);
            this.closeOverlay();
        }
    }
    /**
     * @param {?} open
     * @return {?}
     */
    onOpenChange(open) {
        if (!open) {
            this.cleanUp();
        }
        this.nzOnOpenChange.emit(open);
    }
    /**
     * @return {?}
     */
    cleanUp() {
        this.panelMode = this.endPanelMode;
    }
}
HeaderPickerComponent.decorators = [
    { type: Component, args: [{
                template: ``
            }] }
];
/** @nocollapse */
HeaderPickerComponent.ctorParameters = () => [
    { type: NzI18nService }
];
HeaderPickerComponent.propDecorators = {
    nzPlaceHolder: [{ type: Input }],
    nzRenderExtraFooter: [{ type: Input }],
    nzDefaultValue: [{ type: Input }],
    nzFormat: [{ type: Input }]
};
function HeaderPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzDefaultValue;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzFormat;
    /** @type {?} */
    HeaderPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.panelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.extraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.supportPanels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvaGVhZGVyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFpRCxNQUFNLGVBQWUsQ0FBQztBQUdoRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBVTdDLE1BQU0sNEJBQTZCLFNBQVEsdUJBQXVCOzs7O0lBYWhFLFlBQVksSUFBbUI7UUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2I7Ozs7SUFFRCxRQUFRO1FBQ04sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7UUFFbkMsTUFBTSxlQUFlLEdBQWdCLENBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUUsQ0FBQztRQUNuRSxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQy9GOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksT0FBTyx5QkFBc0I7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNoRTtLQUNGOzs7OztJQUVELGlCQUFpQixDQUFDLElBQWU7UUFDL0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNLEVBQUUscUhBQXFIOztZQUM1SCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEM7S0FDRjs7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQXdCLEVBQUUsS0FBZ0I7UUFDdEQsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUM5QixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtLQUNGOzs7OztJQUVELFlBQVksQ0FBQyxJQUFhO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoQzs7OztJQUdPLE9BQU87UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Ozs7WUE5RHRDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBWFEsYUFBYTs7OzRCQWFuQixLQUFLO2tDQUVMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uL2NvcmUvdHlwZXMvY29tbW9uLXdyYXAnO1xuaW1wb3J0IHsgdmFsdWVGdW5jdGlvblByb3AgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0LXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZSc7XG5pbXBvcnQgeyBQYW5lbE1vZGUgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBwaWNrZXIgZm9yIGhlYWRlciBwYW5lbHMsIGN1cnJlbnQgc3VwcG9ydDogWWVhci9Nb250aFxuICovXG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYGBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZztcblxuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBuekRlZmF1bHRWYWx1ZTogQ2FuZHlEYXRlO1xuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nOyAvLyBbQ2FubXBsZW1lbnRlZCBieSBzdWIgY2xhc3NdIFRoZSBvdXRwdXQgZm9ybWF0XG5cbiAgZW5kUGFuZWxNb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWw7IC8vIFtJbXBsZW1lbnRlZCBieSBzdWIgY2xhc3NdIFRoZSBmaW5hbCBwYW5lbCBmb3IgcGlja2luZyBhIGRhdGVcbiAgcGFuZWxNb2RlOiBQYW5lbE1vZGU7IC8vIEN1cnJlbnQgcGFuZWwgbW9kZVxuICBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBzdXBwb3J0UGFuZWxzOiBQYW5lbE1vZGVbXTtcblxuICBjb25zdHJ1Y3RvcihpMThuOiBOekkxOG5TZXJ2aWNlKSB7XG4gICAgc3VwZXIoaTE4bik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcblxuICAgIGNvbnN0IGFsbEhlYWRlclBhbmVsczogUGFuZWxNb2RlW10gPSBbICdkZWNhZGUnLCAneWVhcicsICdtb250aCcgXTtcbiAgICB0aGlzLnN1cHBvcnRQYW5lbHMgPSBhbGxIZWFkZXJQYW5lbHMuc2xpY2UoMCwgYWxsSGVhZGVyUGFuZWxzLmluZGV4T2YodGhpcy5lbmRQYW5lbE1vZGUpICsgMSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG5cbiAgICBpZiAoY2hhbmdlcy5uelJlbmRlckV4dHJhRm9vdGVyKSB7XG4gICAgICB0aGlzLmV4dHJhRm9vdGVyID0gdmFsdWVGdW5jdGlvblByb3AodGhpcy5uelJlbmRlckV4dHJhRm9vdGVyKTtcbiAgICB9XG4gIH1cblxuICBvblBhbmVsTW9kZUNoYW5nZShtb2RlOiBQYW5lbE1vZGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdXBwb3J0UGFuZWxzLmluZGV4T2YobW9kZSkgPiAtMSkge1xuICAgICAgdGhpcy5wYW5lbE1vZGUgPSBtb2RlO1xuICAgIH0gZWxzZSB7IC8vIFNpbmNlIHRoZSBkZWZhdWx0IFwiY2xpY2sgeWVhclwiIGxvZ2ljIGNhbiBiZSBcInllYXIgcGFuZWxcIiAtPiBcImRhdGUgcGFuZWxcIiwgd2UgbmVlZCBmb3JjZSB0byB0aGUgZW5kIHBhbmVsIG90aGVyd2lzZVxuICAgICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcbiAgICB9XG4gIH1cblxuICBvbkNob29zZVZhbHVlKG1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbCwgdmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVuZFBhbmVsTW9kZSA9PT0gbW9kZSkge1xuICAgICAgc3VwZXIub25WYWx1ZUNoYW5nZSh2YWx1ZSk7XG5cbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgfVxuICB9XG5cbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHRoaXMuY2xlYW5VcCgpO1xuICAgIH1cbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XG4gIH1cblxuICAvLyBSZXN0b3JlIHNvbWUgaW5pdGlhbCBwcm9wcyB0byBsZXQgb3BlbiBhcyBuZXcgaW4gbmV4dCB0aW1lXG4gIHByaXZhdGUgY2xlYW5VcCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVsTW9kZSA9IHRoaXMuZW5kUGFuZWxNb2RlO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFN1cHBvcnRIZWFkZXJQYW5lbCA9ICd5ZWFyJyB8ICdtb250aCc7XG4iXX0=