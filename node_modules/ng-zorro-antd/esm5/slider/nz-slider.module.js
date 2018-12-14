/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzToolTipModule } from '../tooltip/nz-tooltip.module';
import { NzSliderHandleComponent } from './nz-slider-handle.component';
import { NzSliderMarksComponent } from './nz-slider-marks.component';
import { NzSliderStepComponent } from './nz-slider-step.component';
import { NzSliderTrackComponent } from './nz-slider-track.component';
import { NzSliderComponent } from './nz-slider.component';
import { NzSliderService } from './nz-slider.service';
var NzSliderModule = /** @class */ (function () {
    function NzSliderModule() {
    }
    NzSliderModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                    declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                    imports: [CommonModule, NzToolTipModule],
                    providers: [NzSliderService]
                },] }
    ];
    return NzSliderModule;
}());
export { NzSliderModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Z0JBRXJELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBRTtvQkFDOUgsWUFBWSxFQUFFLENBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLENBQUU7b0JBQ25JLE9BQU8sRUFBRSxDQUFFLFlBQVksRUFBRSxlQUFlLENBQUU7b0JBQzFDLFNBQVMsRUFBRSxDQUFFLGVBQWUsQ0FBRTtpQkFDL0I7O3lCQWpCRDs7U0FrQmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL256LXRvb2x0aXAubW9kdWxlJztcblxuaW1wb3J0IHsgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci1oYW5kbGUuY29tcG9uZW50JztcbmltcG9ydCB7IE56U2xpZGVyTWFya3NDb21wb25lbnQgfSBmcm9tICcuL256LXNsaWRlci1tYXJrcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTbGlkZXJTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zbGlkZXItc3RlcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpTbGlkZXJUcmFja0NvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLXRyYWNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc2xpZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelNsaWRlclNlcnZpY2UgfSBmcm9tICcuL256LXNsaWRlci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogWyBOelNsaWRlckNvbXBvbmVudCwgTnpTbGlkZXJUcmFja0NvbXBvbmVudCwgTnpTbGlkZXJIYW5kbGVDb21wb25lbnQsIE56U2xpZGVyU3RlcENvbXBvbmVudCwgTnpTbGlkZXJNYXJrc0NvbXBvbmVudCBdLFxuICBkZWNsYXJhdGlvbnM6IFsgTnpTbGlkZXJDb21wb25lbnQsIE56U2xpZGVyVHJhY2tDb21wb25lbnQsIE56U2xpZGVySGFuZGxlQ29tcG9uZW50LCBOelNsaWRlclN0ZXBDb21wb25lbnQsIE56U2xpZGVyTWFya3NDb21wb25lbnQgXSxcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsIE56VG9vbFRpcE1vZHVsZSBdLFxuICBwcm92aWRlcnM6IFsgTnpTbGlkZXJTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJNb2R1bGUgeyB9XG4iXX0=