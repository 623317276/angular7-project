/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export var selectDropDownAnimation = trigger('selectDropDownAnimation', [
    state('hidden', style({
        opacity: 0,
        display: 'none'
    })),
    state('bottom', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 0%'
    })),
    state('top', style({
        opacity: 1,
        transform: 'scaleY(1)',
        transformOrigin: '0% 100%'
    })),
    transition('hidden => bottom', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }),
        animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
    ]),
    transition('bottom => hidden', [
        animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 0%'
        }))
    ]),
    transition('hidden => top', [
        style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }),
        animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
    ]),
    transition('top => hidden', [
        animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
            opacity: 0,
            transform: 'scaleY(0.8)',
            transformOrigin: '0% 100%'
        }))
    ])
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLWFuaW1hdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9hbmltYXRpb24vc2VsZWN0LWRyb3Bkb3duLWFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7O0FBRTdCLFdBQWEsdUJBQXVCLEdBQTZCLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRTtJQUNsRyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztRQUNwQixPQUFPLEVBQUUsQ0FBQztRQUNWLE9BQU8sRUFBRSxNQUFNO0tBQ2hCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sRUFBVSxDQUFDO1FBQ2xCLFNBQVMsRUFBUSxXQUFXO1FBQzVCLGVBQWUsRUFBRSxPQUFPO0tBQ3pCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ2pCLE9BQU8sRUFBVSxDQUFDO1FBQ2xCLFNBQVMsRUFBUSxXQUFXO1FBQzVCLGVBQWUsRUFBRSxTQUFTO0tBQzNCLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxrQkFBa0IsRUFBRTtRQUM3QixLQUFLLENBQUM7WUFDSixPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDO1FBQ0YsT0FBTyxDQUFDLDhDQUE4QyxDQUFDO0tBQ3hELENBQUM7SUFDRixVQUFVLENBQUMsa0JBQWtCLEVBQUU7UUFDN0IsT0FBTyxDQUFDLDhDQUE4QyxFQUFFLEtBQUssQ0FBQztZQUM1RCxPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsT0FBTztTQUN6QixDQUFDLENBQUM7S0FDSixDQUFDO0lBQ0YsVUFBVSxDQUFDLGVBQWUsRUFBRTtRQUMxQixLQUFLLENBQUM7WUFDSixPQUFPLEVBQVUsQ0FBQztZQUNsQixTQUFTLEVBQVEsYUFBYTtZQUM5QixlQUFlLEVBQUUsU0FBUztTQUMzQixDQUFDO1FBQ0YsT0FBTyxDQUFDLDhDQUE4QyxDQUFDO0tBQ3hELENBQUM7SUFDRixVQUFVLENBQUMsZUFBZSxFQUFFO1FBQzFCLE9BQU8sQ0FBQyw4Q0FBOEMsRUFBRSxLQUFLLENBQUM7WUFDNUQsT0FBTyxFQUFVLENBQUM7WUFDbEIsU0FBUyxFQUFRLGFBQWE7WUFDOUIsZUFBZSxFQUFFLFNBQVM7U0FDM0IsQ0FBQyxDQUFDO0tBQ0osQ0FBQztDQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlcixcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0RHJvcERvd25BbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NlbGVjdERyb3BEb3duQW5pbWF0aW9uJywgW1xuICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoe1xuICAgIG9wYWNpdHk6IDAsXG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH0pKSxcbiAgc3RhdGUoJ2JvdHRvbScsIHN0eWxlKHtcbiAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgfSkpLFxuICBzdGF0ZSgndG9wJywgc3R5bGUoe1xuICAgIG9wYWNpdHkgICAgICAgIDogMSxcbiAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXG4gIH0pKSxcbiAgdHJhbnNpdGlvbignaGlkZGVuID0+IGJvdHRvbScsIFtcbiAgICBzdHlsZSh7XG4gICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICB9KSxcbiAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScpXG4gIF0pLFxuICB0cmFuc2l0aW9uKCdib3R0b20gPT4gaGlkZGVuJywgW1xuICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJywgc3R5bGUoe1xuICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgfSkpXG4gIF0pLFxuICB0cmFuc2l0aW9uKCdoaWRkZW4gPT4gdG9wJywgW1xuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXG4gICAgfSksXG4gICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknKVxuICBdKSxcbiAgdHJhbnNpdGlvbigndG9wID0+IGhpZGRlbicsIFtcbiAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScsIHN0eWxlKHtcbiAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDEwMCUnXG4gICAgfSkpXG4gIF0pXG5dKTtcbiJdfQ==