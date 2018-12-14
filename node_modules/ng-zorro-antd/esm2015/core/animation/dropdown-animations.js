/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export const dropDownAnimation = trigger('dropDownAnimation', [
    state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    transition('void => bottom', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }),
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
    ]),
    transition('bottom => void', [
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }))
    ]),
    state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    transition('void => top', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }),
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
    ]),
    transition('top => void', [
        animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }))
    ])
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFFUixNQUFNLHFCQUFxQixDQUFDOztBQUU3QixhQUFhLGlCQUFpQixHQUE2QixPQUFPLENBQUMsbUJBQW1CLEVBQUU7SUFDdEYsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7UUFDcEIsT0FBTyxFQUFVLENBQUM7UUFDbEIsU0FBUyxFQUFRLFdBQVc7UUFDNUIsZUFBZSxFQUFFLE9BQU87S0FDekIsQ0FBQyxDQUFDO0lBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFO1FBQzNCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBUSxhQUFhO1lBQzlCLGVBQWUsRUFBRSxPQUFPO1NBQ3pCLENBQUM7UUFDRixPQUFPLENBQUMsc0NBQXNDLENBQUM7S0FDaEQsQ0FBQztJQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtRQUMzQixPQUFPLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxDQUFDO1lBQ3BELE9BQU8sRUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBUSxhQUFhO1lBQzlCLGVBQWUsRUFBRSxPQUFPO1NBQ3pCLENBQUMsQ0FBQztLQUNKLENBQUM7SUFDRixLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUNqQixPQUFPLEVBQVUsQ0FBQztRQUNsQixTQUFTLEVBQVEsV0FBVztRQUM1QixlQUFlLEVBQUUsU0FBUztLQUMzQixDQUFDLENBQUM7SUFDSCxVQUFVLENBQUMsYUFBYSxFQUFFO1FBQ3hCLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBVSxDQUFDO1lBQ2xCLFNBQVMsRUFBUSxhQUFhO1lBQzlCLGVBQWUsRUFBRSxTQUFTO1NBQzNCLENBQUM7UUFDRixPQUFPLENBQUMsc0NBQXNDLENBQUM7S0FDaEQsQ0FBQztJQUNGLFVBQVUsQ0FBQyxhQUFhLEVBQUU7UUFDeEIsT0FBTyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQztZQUNwRCxPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsU0FBUztTQUMzQixDQUFDLENBQUM7S0FDSixDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyLFxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGFcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBkcm9wRG93bkFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignZHJvcERvd25BbmltYXRpb24nLCBbXG4gIHN0YXRlKCdib3R0b20nLCBzdHlsZSh7XG4gICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gIH0pKSxcbiAgdHJhbnNpdGlvbigndm9pZCA9PiBib3R0b20nLCBbXG4gICAgc3R5bGUoe1xuICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgfSksXG4gICAgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJylcbiAgXSksXG4gIHRyYW5zaXRpb24oJ2JvdHRvbSA9PiB2b2lkJywgW1xuICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgIH0pKVxuICBdKSxcbiAgc3RhdGUoJ3RvcCcsIHN0eWxlKHtcbiAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICB9KSksXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gdG9wJywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXG4gICAgfSksXG4gICAgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJylcbiAgXSksXG4gIHRyYW5zaXRpb24oJ3RvcCA9PiB2b2lkJywgW1xuICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXG4gICAgfSkpXG4gIF0pXG5dKTtcbiJdfQ==