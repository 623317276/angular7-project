/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Component, ContentChild, EventEmitter, Inject, Input, NgZone, Optional, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, merge } from 'rxjs';
import { DEFAULT_MENTION_POSITIONS } from '../core/overlay/overlay-position-map';
import { getMentions } from '../core/util/getMentions';
import { getCaretCoordinates } from '../core/util/textarea-caret-position';
import { NzMentionSuggestionDirective } from './mention-suggestions';
import { NzMentionTriggerDirective } from './mention-trigger';
/**
 * @record
 */
export function MentionOnSearchTypes() { }
function MentionOnSearchTypes_tsickle_Closure_declarations() {
    /** @type {?} */
    MentionOnSearchTypes.prototype.value;
    /** @type {?} */
    MentionOnSearchTypes.prototype.prefix;
}
export class NzMentionComponent {
    /**
     * @param {?} document
     * @param {?} ngZone
     * @param {?} overlay
     * @param {?} viewContainerRef
     */
    constructor(document, ngZone, overlay, viewContainerRef) {
        this.document = document;
        this.ngZone = ngZone;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzOnSelect = new EventEmitter();
        this.nzOnSearchChange = new EventEmitter();
        this.nzValueWith = value => value;
        this.nzPrefix = '@';
        this.nzLoading = false;
        this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
        this.isOpen = false;
        this.suggestionTemplate = null;
        this.activeIndex = -1;
        this._placement = 'bottom';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSuggestions(value) {
        this._suggestions = value;
        if (this.isOpen) {
            this.previousValue = null;
            this.activeIndex = -1;
            this.resetDropdown(false);
        }
    }
    /**
     * @return {?}
     */
    get nzSuggestions() {
        return this._suggestions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPlacement(value) {
        this._placement = value;
    }
    /**
     * @return {?}
     */
    get nzPlacement() {
        return this._placement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set suggestionChild(value) {
        if (value) {
            this.suggestionTemplate = value;
        }
    }
    /**
     * @return {?}
     */
    get triggerNativeElement() {
        return this.trigger.el.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.bindTriggerEvents();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeDropdown();
    }
    /**
     * @return {?}
     */
    closeDropdown() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.attachOverlay();
        this.isOpen = true;
    }
    /**
     * @return {?}
     */
    getMentions() {
        return getMentions(this.trigger.value, this.nzPrefix);
    }
    /**
     * @param {?} suggestion
     * @return {?}
     */
    selectSuggestion(suggestion) {
        /** @type {?} */
        const value = this.nzValueWith(suggestion);
        this.trigger.insertMention({
            mention: value,
            startPos: this.cursorMentionStart,
            endPos: this.cursorMentionEnd
        });
        this.nzOnSelect.emit(suggestion);
        this.closeDropdown();
        this.activeIndex = -1;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        /** @type {?} */
        const target = /** @type {?} */ (event.target);
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
            this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
            event.preventDefault();
        }
        else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            this.resetDropdown();
            event.stopPropagation();
        }
        else {
            if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
                this.closeDropdown();
                return;
            }
            if (this.isOpen && (keyCode === UP_ARROW)) {
                this.setPreviousItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
            if (this.isOpen && (keyCode === DOWN_ARROW)) {
                this.setNextItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
    /**
     * @return {?}
     */
    handleClick() {
        this.resetDropdown();
    }
    /**
     * @return {?}
     */
    bindTriggerEvents() {
        this.trigger.onInput.subscribe((e) => this.handleInput(e));
        this.trigger.onKeydown.subscribe((e) => this.handleKeydown(e));
        this.trigger.onClick.subscribe(() => this.handleClick());
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    suggestionsFilter(value, emit) {
        /** @type {?} */
        const suggestions = value.substring(1);
        if (this.previousValue === value) {
            return;
        }
        this.previousValue = value;
        if (emit) {
            this.nzOnSearchChange.emit({
                value: this.cursorMention.substring(1),
                prefix: this.cursorMention[0]
            });
        }
        /** @type {?} */
        const searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions
            .filter(suggestion => this.nzValueWith(suggestion).toLowerCase().includes(searchValue));
    }
    /**
     * @param {?=} emit
     * @return {?}
     */
    resetDropdown(emit = true) {
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        /** @type {?} */
        const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    }
    /**
     * @return {?}
     */
    setNextItemActive() {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1
            ? this.activeIndex + 1
            : 0;
    }
    /**
     * @return {?}
     */
    setPreviousItemActive() {
        this.activeIndex = this.activeIndex - 1 < 0
            ? this.filteredSuggestions.length - 1
            : this.activeIndex - 1;
    }
    /**
     * @return {?}
     */
    canOpen() {
        /** @type {?} */
        const element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    }
    /**
     * @return {?}
     */
    resetCursorMention() {
        /** @type {?} */
        const value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        /** @type {?} */
        const selectionStart = this.triggerNativeElement.selectionStart;
        /** @type {?} */
        const prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        /** @type {?} */
        let i = prefix.length;
        while (i >= 0) {
            /** @type {?} */
            const startPos = value.lastIndexOf(prefix[i], selectionStart);
            /** @type {?} */
            const endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            /** @type {?} */
            const mention = value.substring(startPos, endPos);
            if ((startPos > 0 && value[startPos - 1] !== ' ')
                || startPos < 0
                || mention.includes(prefix[i], 1)
                || mention.includes(' ')) {
                this.cursorMention = null;
                this.cursorMentionStart = -1;
                this.cursorMentionEnd = -1;
            }
            else {
                this.cursorMention = mention;
                this.cursorMentionStart = startPos;
                this.cursorMentionEnd = endPos;
                return;
            }
            i--;
        }
    }
    /**
     * @return {?}
     */
    updatePositions() {
        /** @type {?} */
        const coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        /** @type {?} */
        const top = coordinates.top
            - this.triggerNativeElement.getBoundingClientRect().height
            - this.triggerNativeElement.scrollTop
            + (this.nzPlacement === 'bottom' ? coordinates.height : 0);
        /** @type {?} */
        const left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions([DEFAULT_MENTION_POSITIONS[0]]);
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions([DEFAULT_MENTION_POSITIONS[1]]);
        }
        this.positionStrategy.apply();
    }
    /**
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend'))
            .subscribe((event) => {
            /** @type {?} */
            const clickTarget = /** @type {?} */ (event.target);
            if (clickTarget !== this.trigger.el.nativeElement && this.isOpen) {
                this.closeDropdown();
            }
        });
    }
    /**
     * @return {?}
     */
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
        }
        this.updatePositions();
    }
    /**
     * @return {?}
     */
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    }
    /**
     * @return {?}
     */
    getOverlayPosition() {
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.trigger.el)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
}
NzMentionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-mention',
                template: "<ng-content></ng-content>\n<ng-template #suggestions>\n  <ul class=\"ant-mention-dropdown\">\n    <li class=\"ant-mention-dropdown-item\"\n        *ngFor=\"let suggestion of filteredSuggestions; let i = index\"\n        [class.focus]=\"i === activeIndex\"\n        (click)=\"selectSuggestion(suggestion)\">\n      <ng-container *ngIf=\"suggestionTemplate else defaultSuggestion\">\n        <ng-container *ngTemplateOutlet=\"suggestionTemplate; context: {$implicit: suggestion}\"></ng-container>\n      </ng-container>\n      <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>\n    </li>\n    <li class=\"ant-mention-dropdown-notfound ant-mention-dropdown-item\"\n        *ngIf=\"filteredSuggestions.length === 0\">\n      <span *ngIf=\"nzLoading\"><i nz-icon type=\"loading\"></i></span>\n      <span *ngIf=\"!nzLoading\">{{ nzNotFoundContent }}</span>\n    </li>\n  </ul>\n</ng-template>\n",
                preserveWhitespaces: false,
                styles: [`
    .ant-mention-dropdown {
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
    }
  `]
            }] }
];
/** @nocollapse */
NzMentionComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: Overlay },
    { type: ViewContainerRef }
];
NzMentionComponent.propDecorators = {
    nzOnSelect: [{ type: Output }],
    nzOnSearchChange: [{ type: Output }],
    nzValueWith: [{ type: Input }],
    nzPrefix: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzSuggestions: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    trigger: [{ type: ContentChild, args: [NzMentionTriggerDirective,] }],
    suggestionsTemp: [{ type: ViewChild, args: [TemplateRef,] }],
    suggestionChild: [{ type: ContentChild, args: [NzMentionSuggestionDirective, { read: TemplateRef },] }]
};
function NzMentionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSelect;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSearchChange;
    /** @type {?} */
    NzMentionComponent.prototype.nzValueWith;
    /** @type {?} */
    NzMentionComponent.prototype.nzPrefix;
    /** @type {?} */
    NzMentionComponent.prototype.nzLoading;
    /** @type {?} */
    NzMentionComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzMentionComponent.prototype.trigger;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionsTemp;
    /** @type {?} */
    NzMentionComponent.prototype.isOpen;
    /** @type {?} */
    NzMentionComponent.prototype.filteredSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionTemplate;
    /** @type {?} */
    NzMentionComponent.prototype.activeIndex;
    /** @type {?} */
    NzMentionComponent.prototype._suggestions;
    /** @type {?} */
    NzMentionComponent.prototype._placement;
    /** @type {?} */
    NzMentionComponent.prototype.previousValue;
    /** @type {?} */
    NzMentionComponent.prototype.cursorMention;
    /** @type {?} */
    NzMentionComponent.prototype.cursorMentionStart;
    /** @type {?} */
    NzMentionComponent.prototype.cursorMentionEnd;
    /** @type {?} */
    NzMentionComponent.prototype.overlayRef;
    /** @type {?} */
    NzMentionComponent.prototype.portal;
    /** @type {?} */
    NzMentionComponent.prototype.positionStrategy;
    /** @type {?} */
    NzMentionComponent.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    NzMentionComponent.prototype.document;
    /** @type {?} */
    NzMentionComponent.prototype.ngZone;
    /** @type {?} */
    NzMentionComponent.prototype.overlay;
    /** @type {?} */
    NzMentionComponent.prototype.viewContainerRef;
}
/**
 * @record
 */
export function Mention() { }
function Mention_tsickle_Closure_declarations() {
    /** @type {?} */
    Mention.prototype.startPos;
    /** @type {?} */
    Mention.prototype.endPos;
    /** @type {?} */
    Mention.prototype.mention;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudGlvbi9tZW50aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFHLE9BQU8sRUFDTCxzQkFBc0IsRUFFdEIsT0FBTyxFQUNQLGFBQWEsRUFHZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBRU4sUUFBUSxFQUNSLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRXRELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7QUF1QjlELE1BQU07Ozs7Ozs7SUFnRUosWUFBa0QsUUFBYSxFQUMzQyxRQUNBLFNBQ0E7UUFIOEIsYUFBUSxHQUFSLFFB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QUNULFFBQVEsRUFBYSxZQUFZO2dCQUNqQywrNUJBQStDO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQUNIOzs7Ozs7Ozs7R0FTdEI7YUFDRjs7Ozs0Q0FrRWMsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFRO1lBeEd4QyxNQUFNO1lBYk4sT0FBTztZQW1CUCxnQkFBZ0I7Ozt5QkFvQ2YsTUFBTTsrQkFDTixNQUFNOzBCQUVOLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLO2dDQUNMLEtBQUs7NEJBRUwsS0FBSzswQkFjTCxLQUFLO3NCQVNMLFlBQVksU0FBQyx5QkFBeUI7OEJBQ3RDLFNBQVMsU0FBQyxXQUFXOzhCQUVyQixZQUFZLFNBQUMsNEJBQTRCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFRBQiwgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmLFxuICBQb3NpdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERFRkFVTFRfTUVOVElPTl9QT1NJVElPTlMgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xuaW1wb3J0IHsgZ2V0TWVudGlvbnMgfSBmcm9tICcuLi9jb3JlL3V0aWwvZ2V0TWVudGlvbnMnO1xuaW1wb3J0IHsgZ2V0Q2FyZXRDb29yZGluYXRlcyB9IGZyb20gJy4uL2NvcmUvdXRpbC90ZXh0YXJlYS1jYXJldC1wb3NpdGlvbic7XG5cbmltcG9ydCB7IE56TWVudGlvblN1Z2dlc3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL21lbnRpb24tc3VnZ2VzdGlvbnMnO1xuaW1wb3J0IHsgTnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbWVudGlvbi10cmlnZ2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uT25TZWFyY2hUeXBlcyB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHByZWZpeDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LW1lbnRpb24nLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9tZW50aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIC5hbnQtbWVudGlvbi1kcm9wZG93biB7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICBgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOek1lbnRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBPdXRwdXQoKSBuek9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwge30+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbnpPblNlYXJjaENoYW5nZTogRXZlbnRFbWl0dGVyPE1lbnRpb25PblNlYXJjaFR5cGVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBuelZhbHVlV2l0aDogKHZhbHVlOiBhbnkpID0+IHN0cmluZyA9IHZhbHVlID0+IHZhbHVlOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBASW5wdXQoKSBuelByZWZpeDogc3RyaW5nIHwgc3RyaW5nW10gPSAnQCc7XG4gIEBJbnB1dCgpIG56TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nID0gJ+aXoOWMuemFjee7k+aenO+8jOi9u+aVsuepuuagvOWujOaIkOi+k+WFpSc7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U3VnZ2VzdGlvbnModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc3VnZ2VzdGlvbnMgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gLTE7XG4gICAgICB0aGlzLnJlc2V0RHJvcGRvd24oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelN1Z2dlc3Rpb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fc3VnZ2VzdGlvbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQbGFjZW1lbnQodmFsdWU6IE1lbnRpb25QbGFjZW1lbnQpIHtcbiAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuelBsYWNlbWVudCgpOiBNZW50aW9uUGxhY2VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZChOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlKSB0cmlnZ2VyO1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBzdWdnZXN0aW9uc1RlbXA7XG5cbiAgQENvbnRlbnRDaGlsZChOek1lbnRpb25TdWdnZXN0aW9uRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IHN1Z2dlc3Rpb25DaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9Pikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zdWdnZXN0aW9uVGVtcGxhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmlsdGVyZWRTdWdnZXN0aW9uczogc3RyaW5nW107XG4gIHN1Z2dlc3Rpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueSB9PiB8IG51bGwgPSBudWxsOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBhY3RpdmVJbmRleDogbnVtYmVyID0gLTE7XG5cbiAgcHJpdmF0ZSBfc3VnZ2VzdGlvbnM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9wbGFjZW1lbnQ6IE1lbnRpb25QbGFjZW1lbnQgPSAnYm90dG9tJztcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgY3Vyc29yTWVudGlvbjogc3RyaW5nO1xuICBwcml2YXRlIGN1cnNvck1lbnRpb25TdGFydDogbnVtYmVyO1xuICBwcml2YXRlIGN1cnNvck1lbnRpb25FbmQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPHt9PjtcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByaXZhdGUgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIGdldCB0cmlnZ2VyTmF0aXZlRWxlbWVudCgpOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlci5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgICAgICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYmluZFRyaWdnZXJFdmVudHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICB9XG5cbiAgY2xvc2VEcm9wZG93bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gIH1cblxuICBnZXRNZW50aW9ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGdldE1lbnRpb25zKHRoaXMudHJpZ2dlci52YWx1ZSwgdGhpcy5uelByZWZpeCk7XG4gIH1cblxuICBzZWxlY3RTdWdnZXN0aW9uKHN1Z2dlc3Rpb246IHN0cmluZyB8IHt9KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLm56VmFsdWVXaXRoKHN1Z2dlc3Rpb24pO1xuICAgIHRoaXMudHJpZ2dlci5pbnNlcnRNZW50aW9uKHtcbiAgICAgIG1lbnRpb24gOiB2YWx1ZSxcbiAgICAgIHN0YXJ0UG9zOiB0aGlzLmN1cnNvck1lbnRpb25TdGFydCxcbiAgICAgIGVuZFBvcyAgOiB0aGlzLmN1cnNvck1lbnRpb25FbmRcbiAgICB9KTtcbiAgICB0aGlzLm56T25TZWxlY3QuZW1pdChzdWdnZXN0aW9uKTtcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gLTE7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUlucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHRoaXMudHJpZ2dlci5vbkNoYW5nZSh0YXJnZXQudmFsdWUpO1xuICAgIHRoaXMudHJpZ2dlci52YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGlmICh0aGlzLmlzT3BlbiAmJiBrZXlDb2RlID09PSBFTlRFUiAmJiB0aGlzLmFjdGl2ZUluZGV4ICE9PSAtMSAmJiB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNlbGVjdFN1Z2dlc3Rpb24odGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zWyB0aGlzLmFjdGl2ZUluZGV4IF0pO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cgfHwga2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgIHRoaXMucmVzZXREcm9wZG93bigpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIChrZXlDb2RlID09PSBUQUIgfHwga2V5Q29kZSA9PT0gRVNDQVBFKSkge1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSkge1xuICAgICAgICB0aGlzLnNldFByZXZpb3VzSXRlbUFjdGl2ZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIChrZXlDb2RlID09PSBET1dOX0FSUk9XKSkge1xuICAgICAgICB0aGlzLnNldE5leHRJdGVtQWN0aXZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldERyb3Bkb3duKCk7XG4gIH1cblxuICBwcml2YXRlIGJpbmRUcmlnZ2VyRXZlbnRzKCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlci5vbklucHV0LnN1YnNjcmliZSgoZSkgPT4gdGhpcy5oYW5kbGVJbnB1dChlKSk7XG4gICAgdGhpcy50cmlnZ2VyLm9uS2V5ZG93bi5zdWJzY3JpYmUoKGUpID0+IHRoaXMuaGFuZGxlS2V5ZG93bihlKSk7XG4gICAgdGhpcy50cmlnZ2VyLm9uQ2xpY2suc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlQ2xpY2soKSk7XG4gIH1cblxuICBwcml2YXRlIHN1Z2dlc3Rpb25zRmlsdGVyKHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHZhbHVlLnN1YnN0cmluZygxKTtcbiAgICBpZiAodGhpcy5wcmV2aW91c1ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5uek9uU2VhcmNoQ2hhbmdlLmVtaXQoe1xuICAgICAgICB2YWx1ZSA6IHRoaXMuY3Vyc29yTWVudGlvbi5zdWJzdHJpbmcoMSksXG4gICAgICAgIHByZWZpeDogdGhpcy5jdXJzb3JNZW50aW9uWyAwIF1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHN1Z2dlc3Rpb25zLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zID0gdGhpcy5uelN1Z2dlc3Rpb25zXG4gICAgLmZpbHRlcihzdWdnZXN0aW9uID0+IHRoaXMubnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbikudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldERyb3Bkb3duKGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldEN1cnNvck1lbnRpb24oKTtcbiAgICBpZiAodHlwZW9mIHRoaXMuY3Vyc29yTWVudGlvbiAhPT0gJ3N0cmluZycgfHwgIXRoaXMuY2FuT3BlbigpKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdWdnZXN0aW9uc0ZpbHRlcih0aGlzLmN1cnNvck1lbnRpb24sIGVtaXQpO1xuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmluZGV4T2YodGhpcy5jdXJzb3JNZW50aW9uLnN1YnN0cmluZygxKSk7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ID49IDAgPyBhY3RpdmVJbmRleCA6IDA7XG4gICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TmV4dEl0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggKyAxIDw9IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggLSAxXG4gICAgICA/IHRoaXMuYWN0aXZlSW5kZXggKyAxXG4gICAgICA6IDA7XG4gIH1cblxuICBwcml2YXRlIHNldFByZXZpb3VzSXRlbUFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCAtIDEgPCAwXG4gICAgICA/IHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGggLSAxXG4gICAgICA6IHRoaXMuYWN0aXZlSW5kZXggLSAxO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5PcGVuKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50ID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gIWVsZW1lbnQucmVhZE9ubHkgJiYgIWVsZW1lbnQuZGlzYWJsZWQ7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0Q3Vyc29yTWVudGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQudmFsdWUucmVwbGFjZSgvW1xcclxcbl0vZywgJyAnKSB8fCAnJztcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgY29uc3QgcHJlZml4ID0gdHlwZW9mIHRoaXMubnpQcmVmaXggPT09ICdzdHJpbmcnID8gWyB0aGlzLm56UHJlZml4IF0gOiB0aGlzLm56UHJlZml4O1xuICAgIGxldCBpID0gcHJlZml4Lmxlbmd0aDtcbiAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICBjb25zdCBzdGFydFBvcyA9IHZhbHVlLmxhc3RJbmRleE9mKHByZWZpeFsgaSBdLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICBjb25zdCBlbmRQb3MgPSB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpID4gLTEgPyB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpIDogdmFsdWUubGVuZ3RoO1xuICAgICAgY29uc3QgbWVudGlvbiA9IHZhbHVlLnN1YnN0cmluZyhzdGFydFBvcywgZW5kUG9zKTtcbiAgICAgIGlmICgoc3RhcnRQb3MgPiAwICYmIHZhbHVlWyBzdGFydFBvcyAtIDEgXSAhPT0gJyAnKVxuICAgICAgICB8fCBzdGFydFBvcyA8IDBcbiAgICAgICAgfHwgbWVudGlvbi5pbmNsdWRlcyhwcmVmaXhbIGkgXSwgMSlcbiAgICAgICAgfHwgbWVudGlvbi5pbmNsdWRlcygnICcpKSB7XG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0ID0gLTE7XG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbkVuZCA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uID0gbWVudGlvbjtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQgPSBzdGFydFBvcztcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uRW5kID0gZW5kUG9zO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpLS07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbnMoKTogdm9pZCB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDYXJldENvb3JkaW5hdGVzKHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQsIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0KTtcbiAgICBjb25zdCB0b3AgPSBjb29yZGluYXRlcy50b3BcbiAgICAgIC0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgIC0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICsgKHRoaXMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gY29vcmRpbmF0ZXMuaGVpZ2h0IDogMCk7XG4gICAgY29uc3QgbGVmdCA9IGNvb3JkaW5hdGVzLmxlZnQgLSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhEZWZhdWx0T2Zmc2V0WChsZWZ0KS53aXRoRGVmYXVsdE9mZnNldFkodG9wKTtcbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsgREVGQVVMVF9NRU5USU9OX1BPU0lUSU9OU1sgMCBdIF0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsgREVGQVVMVF9NRU5USU9OX1BPU0lUSU9OU1sgMSBdIF0pO1xuICAgIH1cbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kuYXBwbHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ2NsaWNrJyksXG4gICAgICBmcm9tRXZlbnQodGhpcy5kb2N1bWVudCwgJ3RvdWNoZW5kJylcbiAgICApXG4gICAgLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjbGlja1RhcmdldCAhPT0gdGhpcy50cmlnZ2VyLmVsLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaE92ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuc3VnZ2VzdGlvbnNUZW1wLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgIXRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlUG9zaXRpb25zKCk7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXG4gICAgICBzY3JvbGxTdHJhdGVneSAgOiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICBdO1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy50cmlnZ2VyLmVsKVxuICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucylcbiAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAud2l0aFB1c2goZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3k7XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnRpb24ge1xuICBzdGFydFBvczogbnVtYmVyO1xuICBlbmRQb3M6IG51bWJlcjtcbiAgbWVudGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBNZW50aW9uUGxhY2VtZW50ID0gJ3RvcCcgfCAnYm90dG9tJztcbiJdfQ==