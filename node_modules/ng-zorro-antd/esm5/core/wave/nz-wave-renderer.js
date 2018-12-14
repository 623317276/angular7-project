/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
var NzWaveRenderer = /** @class */ (function () {
    function NzWaveRenderer(triggerElement, ngZone, insertExtraNode) {
        var _this = this;
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.waveTransitionDuration = 400;
        this.lastTime = 0;
        this.onClick = function (event) {
            if (!_this.triggerElement ||
                !_this.triggerElement.getAttribute ||
                _this.triggerElement.getAttribute('disabled') ||
                (/** @type {?} */ (event.target)).tagName === 'INPUT' ||
                _this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            _this.fadeOutWave();
        };
        /** @type {?} */
        var platform = new Platform();
        if (platform.isBrowser) {
            this.bindTriggerEvent();
        }
    }
    Object.defineProperty(NzWaveRenderer.prototype, "waveAttributeName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.bindTriggerEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.triggerElement) {
                _this.triggerElement.addEventListener('click', _this.onClick, true);
            }
        });
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.removeTriggerEvent = /**
     * @return {?}
     */
    function () {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.onClick, true);
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.removeStyleAndExtraNode = /**
     * @return {?}
     */
    function () {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild(this.extraNode);
        }
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    };
    /**
     * @return {?}
     */
    NzWaveRenderer.prototype.fadeOutWave = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var node = this.triggerElement;
        /** @type {?} */
        var waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML =
                "[ant-click-animating-without-extra-node]:after { border-color: " + waveColor + "; }";
            document.body.appendChild(this.styleForPseudo);
        }
        if (this.insertExtraNode) {
            if (!this.extraNode) {
                this.extraNode = document.createElement('div');
            }
            this.extraNode.className = 'ant-click-animating-node';
            node.appendChild(this.extraNode);
        }
        this.lastTime = Date.now();
        this.runTimeoutOutsideZone(function () {
            node.removeAttribute(_this.waveAttributeName);
            _this.removeStyleAndExtraNode();
        }, this.waveTransitionDuration);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    NzWaveRenderer.prototype.isValidColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return color
            && color !== '#ffffff'
            && color !== 'rgb(255, 255, 255)'
            && this.isNotGrey(color)
            && !/rgba\(\d*, \d*, \d*, 0\)/.test(color)
            && color !== 'transparent';
    };
    /**
     * @param {?} color
     * @return {?}
     */
    NzWaveRenderer.prototype.isNotGrey = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzWaveRenderer.prototype.getWaveColor = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var nodeStyle = getComputedStyle(node);
        return nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color');
    };
    /**
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    NzWaveRenderer.prototype.runTimeoutOutsideZone = /**
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    function (fn, delay) {
        this.ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    return NzWaveRenderer;
}());
export { NzWaveRenderer };
function NzWaveRenderer_tsickle_Closure_declarations() {
    /** @type {?} */
    NzWaveRenderer.prototype.waveTransitionDuration;
    /** @type {?} */
    NzWaveRenderer.prototype.styleForPseudo;
    /** @type {?} */
    NzWaveRenderer.prototype.extraNode;
    /** @type {?} */
    NzWaveRenderer.prototype.lastTime;
    /** @type {?} */
    NzWaveRenderer.prototype.onClick;
    /** @type {?} */
    NzWaveRenderer.prototype.triggerElement;
    /** @type {?} */
    NzWaveRenderer.prototype.ngZone;
    /** @type {?} */
    NzWaveRenderer.prototype.insertExtraNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3dhdmUvbnotd2F2ZS1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2pELElBQUE7SUFXRSx3QkFBb0IsY0FBMkIsRUFBVSxNQUFjLEVBQVUsZUFBd0I7UUFBekcsaUJBS0M7UUFMbUIsbUJBQWMsR0FBZCxjQUFjLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQVM7c0NBVHZFLEdBQUc7d0JBR2xCLENBQUM7dUJBYVYsVUFBQyxLQUFpQjtZQUMxQixJQUNFLENBQUMsS0FBSSxDQUFDLGNBQWM7Z0JBQ3BCLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZO2dCQUNqQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7Z0JBQzVDLG1CQUFDLEtBQUssQ0FBQyxNQUFxQixFQUFDLENBQUMsT0FBTyxLQUFLLE9BQU87Z0JBQ2pELEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hELE9BQU87YUFDUjtZQUNELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjs7UUFoQkMsSUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7S0FDRjtJQVRELHNCQUFJLDZDQUFpQjs7OztRQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLHdDQUF3QyxDQUFDO1NBQ2hHOzs7T0FBQTs7OztJQXFCRCx5Q0FBZ0I7OztJQUFoQjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUM1QixJQUFJLEtBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbkU7U0FDRixDQUFDLENBQUM7S0FDSjs7OztJQUVELDJDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEU7S0FDRjs7OztJQUVELGdEQUF1Qjs7O0lBQXZCO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0RSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqRDtLQUNGOzs7O0lBRUQsZ0NBQU87OztJQUFQO1FBQ0MsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7S0FDL0I7Ozs7SUFFTyxvQ0FBVzs7Ozs7O1FBQ2pCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7O1FBQ2pDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDNUQsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkQ7WUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVM7Z0JBQzNCLG9FQUFrRSxTQUFTLFFBQUssQ0FBQztZQUNuRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO1lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7U0FDaEMsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7Ozs7O0lBRzFCLHFDQUFZOzs7O2NBQUMsS0FBYTtRQUNoQyxPQUFPLEtBQUs7ZUFDUCxLQUFLLEtBQUssU0FBUztlQUNuQixLQUFLLEtBQUssb0JBQW9CO2VBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2VBQ3JCLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztlQUN2QyxLQUFLLEtBQUssYUFBYSxDQUFDOzs7Ozs7SUFHdkIsa0NBQVM7Ozs7Y0FBQyxLQUFhOztRQUM3QixJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFFLENBQUMsQ0FBRSxJQUFJLEtBQUssQ0FBRSxDQUFDLENBQUUsSUFBSSxLQUFLLENBQUUsQ0FBQyxDQUFFLEVBQUU7WUFDbkQsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxLQUFLLEtBQUssQ0FBRSxDQUFDLENBQUUsSUFBSSxLQUFLLENBQUUsQ0FBQyxDQUFFLEtBQUssS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUM7U0FDbEU7UUFDRCxPQUFPLElBQUksQ0FBQzs7Ozs7O0lBR04scUNBQVk7Ozs7Y0FBQyxJQUFpQjs7UUFDcEMsSUFBTSxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsT0FBTyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxxQkFBcUI7O1lBQzVFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFDMUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7Ozs7Ozs7SUFHM0MsOENBQXFCOzs7OztjQUFDLEVBQWMsRUFBRSxLQUFhO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsY0FBTSxPQUFBLFVBQVUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQzs7eUJBekgvRDtJQTJIQyxDQUFBO0FBeEhELDBCQXdIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTnpXYXZlUmVuZGVyZXIge1xuXG4gIHJlYWRvbmx5IHdhdmVUcmFuc2l0aW9uRHVyYXRpb24gPSA0MDA7XG4gIHByaXZhdGUgc3R5bGVGb3JQc2V1ZG86IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIGV4dHJhTm9kZTogSFRNTERpdkVsZW1lbnQgfCBudWxsO1xuICBwcml2YXRlIGxhc3RUaW1lID0gMDtcblxuICBnZXQgd2F2ZUF0dHJpYnV0ZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pbnNlcnRFeHRyYU5vZGUgPyAnYW50LWNsaWNrLWFuaW1hdGluZycgOiAnYW50LWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGUnO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmlnZ2VyRWxlbWVudDogSFRNTEVsZW1lbnQsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgaW5zZXJ0RXh0cmFOb2RlOiBib29sZWFuKSB7XG4gICAgY29uc3QgcGxhdGZvcm0gPSBuZXcgUGxhdGZvcm0oKTtcbiAgICBpZiAocGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmJpbmRUcmlnZ2VyRXZlbnQoKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMudHJpZ2dlckVsZW1lbnQgfHxcbiAgICAgICF0aGlzLnRyaWdnZXJFbGVtZW50LmdldEF0dHJpYnV0ZSB8fFxuICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHxcbiAgICAgIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnRhZ05hbWUgPT09ICdJTlBVVCcgfHxcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoJ2Rpc2FibGVkJykgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZhZGVPdXRXYXZlKCk7XG4gIH1cblxuICBiaW5kVHJpZ2dlckV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50KSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlVHJpZ2dlckV2ZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRyaWdnZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdHlsZUZvclBzZXVkbyAmJiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuc3R5bGVGb3JQc2V1ZG8pKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuc3R5bGVGb3JQc2V1ZG8pO1xuICAgICAgdGhpcy5zdHlsZUZvclBzZXVkbyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmluc2VydEV4dHJhTm9kZSAmJiB0aGlzLnRyaWdnZXJFbGVtZW50LmNvbnRhaW5zKHRoaXMuZXh0cmFOb2RlKSkge1xuICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmV4dHJhTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgIHRoaXMucmVtb3ZlVHJpZ2dlckV2ZW50KCk7XG4gICB0aGlzLnJlbW92ZVN0eWxlQW5kRXh0cmFOb2RlKCk7XG4gIH1cblxuICBwcml2YXRlIGZhZGVPdXRXYXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRyaWdnZXJFbGVtZW50O1xuICAgIGNvbnN0IHdhdmVDb2xvciA9IHRoaXMuZ2V0V2F2ZUNvbG9yKG5vZGUpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKHRoaXMud2F2ZUF0dHJpYnV0ZU5hbWUsICd0cnVlJyk7XG4gICAgaWYgKERhdGUubm93KCkgPCB0aGlzLmxhc3RUaW1lICsgdGhpcy53YXZlVHJhbnNpdGlvbkR1cmF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNWYWxpZENvbG9yKHdhdmVDb2xvcikpIHtcbiAgICAgIGlmICghdGhpcy5zdHlsZUZvclBzZXVkbykge1xuICAgICAgICB0aGlzLnN0eWxlRm9yUHNldWRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdHlsZUZvclBzZXVkby5pbm5lckhUTUwgPVxuICAgICAgICBgW2FudC1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlXTphZnRlciB7IGJvcmRlci1jb2xvcjogJHt3YXZlQ29sb3J9OyB9YDtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdHlsZUZvclBzZXVkbyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5zZXJ0RXh0cmFOb2RlKSB7XG4gICAgICBpZiAoIXRoaXMuZXh0cmFOb2RlKSB7XG4gICAgICAgIHRoaXMuZXh0cmFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLmV4dHJhTm9kZS5jbGFzc05hbWUgPSAnYW50LWNsaWNrLWFuaW1hdGluZy1ub2RlJztcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gICAgdGhpcy5ydW5UaW1lb3V0T3V0c2lkZVpvbmUoKCkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUodGhpcy53YXZlQXR0cmlidXRlTmFtZSk7XG4gICAgICB0aGlzLnJlbW92ZVN0eWxlQW5kRXh0cmFOb2RlKCk7XG4gICAgfSwgdGhpcy53YXZlVHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNWYWxpZENvbG9yKGNvbG9yOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29sb3JcbiAgICAgICYmIGNvbG9yICE9PSAnI2ZmZmZmZidcbiAgICAgICYmIGNvbG9yICE9PSAncmdiKDI1NSwgMjU1LCAyNTUpJ1xuICAgICAgJiYgdGhpcy5pc05vdEdyZXkoY29sb3IpXG4gICAgICAmJiAhL3JnYmFcXChcXGQqLCBcXGQqLCBcXGQqLCAwXFwpLy50ZXN0KGNvbG9yKVxuICAgICAgJiYgY29sb3IgIT09ICd0cmFuc3BhcmVudCc7XG4gIH1cblxuICBwcml2YXRlIGlzTm90R3JleShjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbWF0Y2ggPSBjb2xvci5tYXRjaCgvcmdiYT9cXCgoXFxkKiksIChcXGQqKSwgKFxcZCopKCwgW1xcLlxcZF0qKT9cXCkvKTtcbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbIDEgXSAmJiBtYXRjaFsgMiBdICYmIG1hdGNoWyAzIF0pIHtcbiAgICAgIHJldHVybiAhKG1hdGNoWyAxIF0gPT09IG1hdGNoWyAyIF0gJiYgbWF0Y2hbIDIgXSA9PT0gbWF0Y2hbIDMgXSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXYXZlQ29sb3Iobm9kZTogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIGNvbnN0IG5vZGVTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgcmV0dXJuIG5vZGVTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLWNvbG9yJykgfHwgLy8gRmlyZWZveCBDb21wYXRpYmxlXG4gICAgICBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLWNvbG9yJykgfHxcbiAgICAgIG5vZGVTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIH1cblxuICBwcml2YXRlIHJ1blRpbWVvdXRPdXRzaWRlWm9uZShmbjogKCkgPT4gdm9pZCwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoZm4sIGRlbGF5KSk7XG4gIH1cbn1cbiJdfQ==