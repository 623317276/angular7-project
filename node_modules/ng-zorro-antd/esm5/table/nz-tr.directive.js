/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { NzTableComponent } from './nz-table.component';
var NzTrDirective = /** @class */ (function () {
    function NzTrDirective(elementRef, renderer, nzTableComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzTableComponent = nzTableComponent;
    }
    Object.defineProperty(NzTrDirective.prototype, "nzExpand", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (toBoolean(value)) {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
            else {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
        },
        enumerable: true,
        configurable: true
    });
    NzTrDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: 'tr',
                    host: {
                        '[class.ant-table-row]': 'nzTableComponent'
                    }
                },] }
    ];
    /** @nocollapse */
    NzTrDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTrDirective.propDecorators = {
        nzExpand: [{ type: Input }]
    };
    return NzTrDirective;
}());
export { NzTrDirective };
function NzTrDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTrDirective.prototype.elementRef;
    /** @type {?} */
    NzTrDirective.prototype.renderer;
    /** @type {?} */
    NzTrDirective.prototype.nzTableComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUF1QnRELHVCQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQTZCLGdCQUFrQztRQUFsSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0tBRXJJO0lBYkQsc0JBQ0ksbUNBQVE7Ozs7O1FBRFosVUFDYSxLQUFjO1lBQ3pCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7YUFDcEY7U0FDRjs7O09BQUE7O2dCQW5CRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxJQUFJO29CQUNkLElBQUksRUFBTTt3QkFDUix1QkFBdUIsRUFBRSxrQkFBa0I7cUJBQzVDO2lCQUNGOzs7O2dCQVZtQixVQUFVO2dCQUF5QixTQUFTO2dCQUV2RCxnQkFBZ0IsdUJBdUJtRCxJQUFJLFlBQUksUUFBUTs7OzJCQVh6RixLQUFLOzt3QkFkUjs7U0FZYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBJbnB1dCwgT3B0aW9uYWwsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbnotdGFibGUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICd0cicsXG4gIGhvc3QgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcm93XSc6ICduelRhYmxlQ29tcG9uZW50J1xuICB9XG59KVxuXG5leHBvcnQgY2xhc3MgTnpUckRpcmVjdGl2ZSB7XG5cbiAgQElucHV0KClcbiAgc2V0IG56RXhwYW5kKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLWV4cGFuZGVkLXJvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXRhYmxlLWV4cGFuZGVkLXJvdycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBuelRhYmxlQ29tcG9uZW50OiBOelRhYmxlQ29tcG9uZW50KSB7XG5cbiAgfVxufVxuIl19