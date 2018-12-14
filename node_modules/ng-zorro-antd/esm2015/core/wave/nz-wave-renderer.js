/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
export class NzWaveRenderer {
    /**
     * @param {?} triggerElement
     * @param {?} ngZone
     * @param {?} insertExtraNode
     */
    constructor(triggerElement, ngZone, insertExtraNode) {
        this.triggerElement = triggerElement;
        this.ngZone = ngZone;
        this.insertExtraNode = insertExtraNode;
        this.waveTransitionDuration = 400;
        this.lastTime = 0;
        this.onClick = (event) => {
            if (!this.triggerElement ||
                !this.triggerElement.getAttribute ||
                this.triggerElement.getAttribute('disabled') ||
                (/** @type {?} */ (event.target)).tagName === 'INPUT' ||
                this.triggerElement.className.indexOf('disabled') >= 0) {
                return;
            }
            this.fadeOutWave();
        };
        /** @type {?} */
        const platform = new Platform();
        if (platform.isBrowser) {
            this.bindTriggerEvent();
        }
    }
    /**
     * @return {?}
     */
    get waveAttributeName() {
        return this.insertExtraNode ? 'ant-click-animating' : 'ant-click-animating-without-extra-node';
    }
    /**
     * @return {?}
     */
    bindTriggerEvent() {
        this.ngZone.runOutsideAngular(() => {
            if (this.triggerElement) {
                this.triggerElement.addEventListener('click', this.onClick, true);
            }
        });
    }
    /**
     * @return {?}
     */
    removeTriggerEvent() {
        if (this.triggerElement) {
            this.triggerElement.removeEventListener('click', this.onClick, true);
        }
    }
    /**
     * @return {?}
     */
    removeStyleAndExtraNode() {
        if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
            document.body.removeChild(this.styleForPseudo);
            this.styleForPseudo = null;
        }
        if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
            this.triggerElement.removeChild(this.extraNode);
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        this.removeTriggerEvent();
        this.removeStyleAndExtraNode();
    }
    /**
     * @return {?}
     */
    fadeOutWave() {
        /** @type {?} */
        const node = this.triggerElement;
        /** @type {?} */
        const waveColor = this.getWaveColor(node);
        node.setAttribute(this.waveAttributeName, 'true');
        if (Date.now() < this.lastTime + this.waveTransitionDuration) {
            return;
        }
        if (this.isValidColor(waveColor)) {
            if (!this.styleForPseudo) {
                this.styleForPseudo = document.createElement('style');
            }
            this.styleForPseudo.innerHTML =
                `[ant-click-animating-without-extra-node]:after { border-color: ${waveColor}; }`;
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
        this.runTimeoutOutsideZone(() => {
            node.removeAttribute(this.waveAttributeName);
            this.removeStyleAndExtraNode();
        }, this.waveTransitionDuration);
    }
    /**
     * @param {?} color
     * @return {?}
     */
    isValidColor(color) {
        return color
            && color !== '#ffffff'
            && color !== 'rgb(255, 255, 255)'
            && this.isNotGrey(color)
            && !/rgba\(\d*, \d*, \d*, 0\)/.test(color)
            && color !== 'transparent';
    }
    /**
     * @param {?} color
     * @return {?}
     */
    isNotGrey(color) {
        /** @type {?} */
        const match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
        if (match && match[1] && match[2] && match[3]) {
            return !(match[1] === match[2] && match[2] === match[3]);
        }
        return true;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getWaveColor(node) {
        /** @type {?} */
        const nodeStyle = getComputedStyle(node);
        return nodeStyle.getPropertyValue('border-top-color') || // Firefox Compatible
            // Firefox Compatible
            nodeStyle.getPropertyValue('border-color') ||
            nodeStyle.getPropertyValue('background-color');
    }
    /**
     * @param {?} fn
     * @param {?} delay
     * @return {?}
     */
    runTimeoutOutsideZone(fn, delay) {
        this.ngZone.runOutsideAngular(() => setTimeout(fn, delay));
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3dhdmUvbnotd2F2ZS1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2pELE1BQU07Ozs7OztJQVdKLFlBQW9CLGNBQTJCLEVBQVUsTUFBYyxFQUFVLGVBQXdCO1FBQXJGLG1CQUFjLEdBQWQsY0FBYyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFTO3NDQVR2RSxHQUFHO3dCQUdsQixDQUFDO3VCQWFWLENBQUMsS0FBaUIsRUFBRSxFQUFFO1lBQzlCLElBQ0UsQ0FBQyxJQUFJLENBQUMsY0FBYztnQkFDcEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7Z0JBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztnQkFDNUMsbUJBQUMsS0FBSyxDQUFDLE1BQXFCLEVBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTztnQkFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEQsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCOztRQWhCQyxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtLQUNGOzs7O0lBVEQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsd0NBQXdDLENBQUM7S0FDaEc7Ozs7SUFxQkQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25FO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEU7S0FDRjs7OztJQUVELHVCQUF1QjtRQUNyQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3RFLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pEO0tBQ0Y7Ozs7SUFFRCxPQUFPO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7S0FDL0I7Ozs7SUFFTyxXQUFXOztRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDOztRQUNqQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzVELE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZEO1lBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTO2dCQUMzQixrRUFBa0UsU0FBUyxLQUFLLENBQUM7WUFDbkYsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQztZQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzs7Ozs7SUFHMUIsWUFBWSxDQUFDLEtBQWE7UUFDaEMsT0FBTyxLQUFLO2VBQ1AsS0FBSyxLQUFLLFNBQVM7ZUFDbkIsS0FBSyxLQUFLLG9CQUFvQjtlQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztlQUNyQixDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7ZUFDdkMsS0FBSyxLQUFLLGFBQWEsQ0FBQzs7Ozs7O0lBR3ZCLFNBQVMsQ0FBQyxLQUFhOztRQUM3QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFFLENBQUMsQ0FBRSxJQUFJLEtBQUssQ0FBRSxDQUFDLENBQUUsSUFBSSxLQUFLLENBQUUsQ0FBQyxDQUFFLEVBQUU7WUFDbkQsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxLQUFLLEtBQUssQ0FBRSxDQUFDLENBQUUsSUFBSSxLQUFLLENBQUUsQ0FBQyxDQUFFLEtBQUssS0FBSyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUM7U0FDbEU7UUFDRCxPQUFPLElBQUksQ0FBQzs7Ozs7O0lBR04sWUFBWSxDQUFDLElBQWlCOztRQUNwQyxNQUFNLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLHFCQUFxQjs7WUFDNUUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztZQUMxQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7OztJQUczQyxxQkFBcUIsQ0FBQyxFQUFjLEVBQUUsS0FBYTtRQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Q0FFOUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE56V2F2ZVJlbmRlcmVyIHtcblxuICByZWFkb25seSB3YXZlVHJhbnNpdGlvbkR1cmF0aW9uID0gNDAwO1xuICBwcml2YXRlIHN0eWxlRm9yUHNldWRvOiBIVE1MU3R5bGVFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBleHRyYU5vZGU6IEhUTUxEaXZFbGVtZW50IHwgbnVsbDtcbiAgcHJpdmF0ZSBsYXN0VGltZSA9IDA7XG5cbiAgZ2V0IHdhdmVBdHRyaWJ1dGVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0RXh0cmFOb2RlID8gJ2FudC1jbGljay1hbmltYXRpbmcnIDogJ2FudC1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJpZ2dlckVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGluc2VydEV4dHJhTm9kZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHBsYXRmb3JtID0gbmV3IFBsYXRmb3JtKCk7XG4gICAgaWYgKHBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5iaW5kVHJpZ2dlckV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLnRyaWdnZXJFbGVtZW50IHx8XG4gICAgICAhdGhpcy50cmlnZ2VyRWxlbWVudC5nZXRBdHRyaWJ1dGUgfHxcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8XG4gICAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lID09PSAnSU5QVVQnIHx8XG4gICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKCdkaXNhYmxlZCcpID49IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5mYWRlT3V0V2F2ZSgpO1xuICB9XG5cbiAgYmluZFRyaWdnZXJFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCkge1xuICAgICAgICB0aGlzLnRyaWdnZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZVRyaWdnZXJFdmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyRWxlbWVudCkge1xuICAgICAgdGhpcy50cmlnZ2VyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljaywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3R5bGVGb3JQc2V1ZG8gJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLnN0eWxlRm9yUHNldWRvKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnN0eWxlRm9yUHNldWRvKTtcbiAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbnNlcnRFeHRyYU5vZGUgJiYgdGhpcy50cmlnZ2VyRWxlbWVudC5jb250YWlucyh0aGlzLmV4dHJhTm9kZSkpIHtcbiAgICAgIHRoaXMudHJpZ2dlckVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICB0aGlzLnJlbW92ZVRyaWdnZXJFdmVudCgpO1xuICAgdGhpcy5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmYWRlT3V0V2F2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy50cmlnZ2VyRWxlbWVudDtcbiAgICBjb25zdCB3YXZlQ29sb3IgPSB0aGlzLmdldFdhdmVDb2xvcihub2RlKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSh0aGlzLndhdmVBdHRyaWJ1dGVOYW1lLCAndHJ1ZScpO1xuICAgIGlmIChEYXRlLm5vdygpIDwgdGhpcy5sYXN0VGltZSArIHRoaXMud2F2ZVRyYW5zaXRpb25EdXJhdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzVmFsaWRDb2xvcih3YXZlQ29sb3IpKSB7XG4gICAgICBpZiAoIXRoaXMuc3R5bGVGb3JQc2V1ZG8pIHtcbiAgICAgICAgdGhpcy5zdHlsZUZvclBzZXVkbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3R5bGVGb3JQc2V1ZG8uaW5uZXJIVE1MID1cbiAgICAgICAgYFthbnQtY2xpY2stYW5pbWF0aW5nLXdpdGhvdXQtZXh0cmEtbm9kZV06YWZ0ZXIgeyBib3JkZXItY29sb3I6ICR7d2F2ZUNvbG9yfTsgfWA7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3R5bGVGb3JQc2V1ZG8pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluc2VydEV4dHJhTm9kZSkge1xuICAgICAgaWYgKCF0aGlzLmV4dHJhTm9kZSkge1xuICAgICAgICB0aGlzLmV4dHJhTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgfVxuICAgICAgdGhpcy5leHRyYU5vZGUuY2xhc3NOYW1lID0gJ2FudC1jbGljay1hbmltYXRpbmctbm9kZSc7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHRoaXMuZXh0cmFOb2RlKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgIHRoaXMucnVuVGltZW91dE91dHNpZGVab25lKCgpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHRoaXMud2F2ZUF0dHJpYnV0ZU5hbWUpO1xuICAgICAgdGhpcy5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xuICAgIH0sIHRoaXMud2F2ZVRyYW5zaXRpb25EdXJhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGlzVmFsaWRDb2xvcihjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNvbG9yXG4gICAgICAmJiBjb2xvciAhPT0gJyNmZmZmZmYnXG4gICAgICAmJiBjb2xvciAhPT0gJ3JnYigyNTUsIDI1NSwgMjU1KSdcbiAgICAgICYmIHRoaXMuaXNOb3RHcmV5KGNvbG9yKVxuICAgICAgJiYgIS9yZ2JhXFwoXFxkKiwgXFxkKiwgXFxkKiwgMFxcKS8udGVzdChjb2xvcilcbiAgICAgICYmIGNvbG9yICE9PSAndHJhbnNwYXJlbnQnO1xuICB9XG5cbiAgcHJpdmF0ZSBpc05vdEdyZXkoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1hdGNoID0gY29sb3IubWF0Y2goL3JnYmE/XFwoKFxcZCopLCAoXFxkKiksIChcXGQqKSgsIFtcXC5cXGRdKik/XFwpLyk7XG4gICAgaWYgKG1hdGNoICYmIG1hdGNoWyAxIF0gJiYgbWF0Y2hbIDIgXSAmJiBtYXRjaFsgMyBdKSB7XG4gICAgICByZXR1cm4gIShtYXRjaFsgMSBdID09PSBtYXRjaFsgMiBdICYmIG1hdGNoWyAyIF0gPT09IG1hdGNoWyAzIF0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2F2ZUNvbG9yKG5vZGU6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICBjb25zdCBub2RlU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIHJldHVybiBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLXRvcC1jb2xvcicpIHx8IC8vIEZpcmVmb3ggQ29tcGF0aWJsZVxuICAgICAgbm9kZVN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JvcmRlci1jb2xvcicpIHx8XG4gICAgICBub2RlU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5UaW1lb3V0T3V0c2lkZVpvbmUoZm46ICgpID0+IHZvaWQsIGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KGZuLCBkZWxheSkpO1xuICB9XG59XG4iXX0=