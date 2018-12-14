/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger, } from '@angular/animations';
/** @type {?} */
export const fadeAnimation = trigger('fadeAnimation', [
    state('void', style({ opacity: 0 })),
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0 })),
    transition('* => true', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
    transition('* => void', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZS1hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEdBRVIsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0IsYUFBYSxhQUFhLEdBQThCLE9BQU8sQ0FBQyxlQUFlLEVBQUU7SUFDL0UsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUN4RSxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0NBQ3ZFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlcixcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuZXhwb3J0IGNvbnN0IGZhZGVBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9ICB0cmlnZ2VyKCdmYWRlQW5pbWF0aW9uJywgW1xuICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXG4gIHN0YXRlKCd0cnVlJywgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKSxcbiAgc3RhdGUoJ2ZhbHNlJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcbiAgdHJhbnNpdGlvbignKiA9PiB0cnVlJywgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpJykpLFxuICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpJykpLFxuXSk7XG4iXX0=