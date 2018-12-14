/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Host, HostBinding, Input, Optional, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
function EmbeddedProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    EmbeddedProperty.prototype.span;
    /** @type {?} */
    EmbeddedProperty.prototype.pull;
    /** @type {?} */
    EmbeddedProperty.prototype.push;
    /** @type {?} */
    EmbeddedProperty.prototype.offset;
    /** @type {?} */
    EmbeddedProperty.prototype.order;
}
export class NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzRowComponent
     * @param {?} nzRowDirective
     * @param {?} renderer
     */
    constructor(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowComponent = nzRowComponent;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
    }
    /**
     * @return {?}
     */
    get paddingLeft() {
        return this.nzRow && this.nzRow.actualGutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.nzRow && this.nzRow.actualGutter / 2;
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [`${this.prefixCls}-${this.nzSpan}`]: isNotNil(this.nzSpan), [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil(this.nzPush) }, this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    generateClass() {
        /** @type {?} */
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            /** @type {?} */
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if ((typeof (this[name]) === 'number') || (typeof (this[name]) === 'string')) {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name].span}`] = this[name] && isNotNil(this[name].span);
                    listClassMap[`${this.prefixCls}-${sizeName}-pull-${this[name].pull}`] = this[name] && isNotNil(this[name].pull);
                    listClassMap[`${this.prefixCls}-${sizeName}-push-${this[name].push}`] = this[name] && isNotNil(this[name].push);
                    listClassMap[`${this.prefixCls}-${sizeName}-offset-${this[name].offset}`] = this[name] && isNotNil(this[name].offset);
                    listClassMap[`${this.prefixCls}-${sizeName}-order-${this[name].order}`] = this[name] && isNotNil(this[name].order);
                }
            }
        });
        return listClassMap;
    }
    /**
     * @return {?}
     */
    get nzRow() {
        return this.nzRowComponent || this.nzRowDirective;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
}
NzColComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-col',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzColComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 }
];
NzColComponent.propDecorators = {
    paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
    paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
    nzSpan: [{ type: Input }],
    nzOrder: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzPush: [{ type: Input }],
    nzPull: [{ type: Input }],
    nzXs: [{ type: Input }],
    nzSm: [{ type: Input }],
    nzMd: [{ type: Input }],
    nzLg: [{ type: Input }],
    nzXl: [{ type: Input }],
    nzXXl: [{ type: Input }]
};
function NzColComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzColComponent.prototype.el;
    /** @type {?} */
    NzColComponent.prototype.prefixCls;
    /** @type {?} */
    NzColComponent.prototype.nzSpan;
    /** @type {?} */
    NzColComponent.prototype.nzOrder;
    /** @type {?} */
    NzColComponent.prototype.nzOffset;
    /** @type {?} */
    NzColComponent.prototype.nzPush;
    /** @type {?} */
    NzColComponent.prototype.nzPull;
    /** @type {?} */
    NzColComponent.prototype.nzXs;
    /** @type {?} */
    NzColComponent.prototype.nzSm;
    /** @type {?} */
    NzColComponent.prototype.nzMd;
    /** @type {?} */
    NzColComponent.prototype.nzLg;
    /** @type {?} */
    NzColComponent.prototype.nzXl;
    /** @type {?} */
    NzColComponent.prototype.nzXXl;
    /** @type {?} */
    NzColComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzColComponent.prototype.elementRef;
    /** @type {?} */
    NzColComponent.prototype.nzRowComponent;
    /** @type {?} */
    NzColComponent.prototype.nzRowDirective;
    /** @type {?} */
    NzColComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JwRCxNQUFNOzs7Ozs7OztJQW9FSixZQUFvQix3QkFBa0QsRUFBVSxVQUFzQixFQUE2QixjQUE4QixFQUE2QixjQUE4QixFQUFVLFFBQW1CO1FBQXJPLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQTZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUE2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO2tCQW5FL04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUNuQyxTQUFTO0tBbUU1Qjs7OztJQWpFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0tBQ2xEOzs7O0lBRUQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztLQUNsRDs7Ozs7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cG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5cbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcbiAgc3BhbjogbnVtYmVyO1xuICBwdWxsOiBudW1iZXI7XG4gIHB1c2g6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIG9yZGVyOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY29sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNvbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1jb2wnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcbiAgZ2V0IHBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpSb3cgJiYgdGhpcy5uelJvdy5hY3R1YWxHdXR0ZXIgLyAyO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXJpZ2h0LnB4JylcbiAgZ2V0IHBhZGRpbmdSaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm56Um93ICYmIHRoaXMubnpSb3cuYWN0dWFsR3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBJbnB1dCgpIG56U3BhbjogbnVtYmVyO1xuICBASW5wdXQoKSBuek9yZGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56T2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG56UHVzaDogbnVtYmVyO1xuICBASW5wdXQoKSBuelB1bGw6IG51bWJlcjtcbiAgQElucHV0KCkgbnpYczogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpTbTogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpNZDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpMZzogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcbiAgQElucHV0KCkgbnpYWGw6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG5cbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelNwYW59YCBdICAgICAgICAgOiBpc05vdE5pbCh0aGlzLm56U3BhbiksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1vcmRlci0ke3RoaXMubnpPcmRlcn1gIF0gIDogaXNOb3ROaWwodGhpcy5uek9yZGVyKSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW9mZnNldC0ke3RoaXMubnpPZmZzZXR9YCBdOiBpc05vdE5pbCh0aGlzLm56T2Zmc2V0KSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXB1bGwtJHt0aGlzLm56UHVsbH1gIF0gICAgOiBpc05vdE5pbCh0aGlzLm56UHVsbCksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1wdXNoLSR7dGhpcy5uelB1c2h9YCBdICAgIDogaXNOb3ROaWwodGhpcy5uelB1c2gpLFxuICAgICAgLi4udGhpcy5nZW5lcmF0ZUNsYXNzKClcbiAgICB9O1xuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKCk6IG9iamVjdCB7XG4gICAgY29uc3QgbGlzdE9mU2l6ZUlucHV0TmFtZSA9IFsgJ256WHMnLCAnbnpTbScsICduek1kJywgJ256TGcnLCAnbnpYbCcsICduelhYbCcgXTtcbiAgICBjb25zdCBsaXN0Q2xhc3NNYXAgPSB7fTtcbiAgICBsaXN0T2ZTaXplSW5wdXROYW1lLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBzaXplTmFtZSA9IG5hbWUucmVwbGFjZSgnbnonLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzWyBuYW1lIF0pKSB7XG4gICAgICAgIGlmICgodHlwZW9mKHRoaXNbIG5hbWUgXSkgPT09ICdudW1iZXInKSB8fCAodHlwZW9mICh0aGlzWyBuYW1lIF0pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS0ke3RoaXNbIG5hbWUgXX1gIF0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LSR7dGhpc1sgbmFtZSBdLnNwYW59YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5zcGFuKTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1wdWxsLSR7dGhpc1sgbmFtZSBdLnB1bGx9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5wdWxsKTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1wdXNoLSR7dGhpc1sgbmFtZSBdLnB1c2h9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5wdXNoKTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1vZmZzZXQtJHt0aGlzWyBuYW1lIF0ub2Zmc2V0fWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ub2Zmc2V0KTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1vcmRlci0ke3RoaXNbIG5hbWUgXS5vcmRlcn1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLm9yZGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3RDbGFzc01hcDtcbiAgfVxuXG4gIGdldCBuelJvdygpOiBOelJvd0NvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMubnpSb3dDb21wb25lbnQgfHwgdGhpcy5uelJvd0RpcmVjdGl2ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgWyBwcm9wZXJ0eU5hbWU6IHN0cmluZyBdOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dDb21wb25lbnQ6IE56Um93Q29tcG9uZW50LCBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=