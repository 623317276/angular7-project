/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Renderer2 } from '@angular/core';
export class NzUpdateHostClassService {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.classMap = {};
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    updateHostClass(el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = Object.assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    removeClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    addClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                if (classMap[i]) {
                    renderer.addClass(el, i);
                }
            }
        }
    }
}
NzUpdateHostClassService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzUpdateHostClassService.ctorParameters = () => [
    { type: Renderer2 }
];
function NzUpdateHostClassService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUpdateHostClassService.prototype.classMap;
    /** @type {?} */
    NzUpdateHostClassService.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RELE1BQU07Ozs7SUEyQkosWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVzt3QkExQnBCLEVBQUU7S0E0QnBCOzs7Ozs7SUExQkQsZUFBZSxDQUFDLEVBQWUsRUFBRSxRQUFnQjtRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxxQkFBUSxRQUFRLENBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNqRDs7Ozs7OztJQUVPLFdBQVcsQ0FBQyxFQUFlLEVBQUUsUUFBZ0IsRUFBRSxRQUFtQjtRQUN4RSxLQUFLLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7Ozs7Ozs7O0lBR0ssUUFBUSxDQUFDLEVBQWUsRUFBRSxRQUFnQixFQUFFLFFBQW1CO1FBQ3JFLEtBQUssTUFBTSxDQUFDLElBQUksUUFBUSxFQUFFO1lBQ3hCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxRQUFRLENBQUUsQ0FBQyxDQUFFLEVBQUU7b0JBQ2pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7Ozs7WUF6QkosVUFBVTs7OztZQUZVLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB7XG4gIHByaXZhdGUgY2xhc3NNYXAgPSB7fTtcblxuICB1cGRhdGVIb3N0Q2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbCwgdGhpcy5jbGFzc01hcCwgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5jbGFzc01hcCA9IHsgLi4uY2xhc3NNYXAgfTtcbiAgICB0aGlzLmFkZENsYXNzKGVsLCB0aGlzLmNsYXNzTWFwLCB0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgICBpZiAoY2xhc3NNYXAuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgICBpZiAoY2xhc3NNYXAuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgaWYgKGNsYXNzTWFwWyBpIF0pIHtcbiAgICAgICAgICByZW5kZXJlci5hZGRDbGFzcyhlbCwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICB9XG59XG4iXX0=