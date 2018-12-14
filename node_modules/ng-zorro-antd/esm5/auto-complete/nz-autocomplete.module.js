/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAutocompleteOptgroupComponent } from './nz-autocomplete-optgroup.component';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
import { NzAutocompleteTriggerDirective } from './nz-autocomplete-trigger.directive';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
var NzAutocompleteModule = /** @class */ (function () {
    function NzAutocompleteModule() {
    }
    NzAutocompleteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                    exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
                    imports: [CommonModule, OverlayModule, FormsModule]
                },] }
    ];
    return NzAutocompleteModule;
}());
export { NzAutocompleteModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdXRvLWNvbXBsZXRlL256LWF1dG9jb21wbGV0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O2dCQUVyRSxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsOEJBQThCLEVBQUUsK0JBQStCLENBQUM7b0JBQ3ZJLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLDhCQUE4QixFQUFFLCtCQUErQixDQUFDO29CQUNsSSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztpQkFDcEQ7OytCQWREOztTQWVhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0Z3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LWF1dG9jb21wbGV0ZS10cmlnZ2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW056QXV0b2NvbXBsZXRlQ29tcG9uZW50LCBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlLCBOekF1dG9jb21wbGV0ZU9wdGdyb3VwQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW056QXV0b2NvbXBsZXRlQ29tcG9uZW50LCBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlLCBOekF1dG9jb21wbGV0ZU9wdGdyb3VwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgRm9ybXNNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlTW9kdWxlIHtcbn1cbiJdfQ==