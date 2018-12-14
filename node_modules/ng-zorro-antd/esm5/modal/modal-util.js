/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function ClickPosition() { }
function ClickPosition_tsickle_Closure_declarations() {
    /** @type {?} */
    ClickPosition.prototype.x;
    /** @type {?} */
    ClickPosition.prototype.y;
}
var ModalUtil = /** @class */ (function () {
    function ModalUtil(document) {
        this.document = document;
        this.lastPosition = null;
        this.listenDocumentClick();
    }
    /**
     * @return {?}
     */
    ModalUtil.prototype.getLastClickPosition = /**
     * @return {?}
     */
    function () {
        return this.lastPosition;
    };
    /**
     * @return {?}
     */
    ModalUtil.prototype.listenDocumentClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.document.addEventListener('click', function (event) {
            _this.lastPosition = { x: event.clientX, y: event.clientY };
        });
    };
    return ModalUtil;
}());
export { ModalUtil };
function ModalUtil_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalUtil.prototype.lastPosition;
    /** @type {?} */
    ModalUtil.prototype.document;
}
export default new ModalUtil(document);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBQTtJQUdFLG1CQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOzRCQUZBLElBQUk7UUFHeEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7Ozs7SUFFRCx3Q0FBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7OztJQUVELHVDQUFtQjs7O0lBQW5CO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQWlCO1lBQ3hELEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVELENBQUMsQ0FBQztLQUNKO29CQXBCSDtJQXFCQyxDQUFBO0FBaEJELHFCQWdCQzs7Ozs7OztBQUVELGVBQWUsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENsaWNrUG9zaXRpb24ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE1vZGFsVXRpbCB7XG4gIHByaXZhdGUgbGFzdFBvc2l0aW9uOiBDbGlja1Bvc2l0aW9uID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCkge1xuICAgIHRoaXMubGlzdGVuRG9jdW1lbnRDbGljaygpO1xuICB9XG5cbiAgZ2V0TGFzdENsaWNrUG9zaXRpb24oKTogQ2xpY2tQb3NpdGlvbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmxhc3RQb3NpdGlvbjtcbiAgfVxuXG4gIGxpc3RlbkRvY3VtZW50Q2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgdGhpcy5sYXN0UG9zaXRpb24gPSB7IHg6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFkgfTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTW9kYWxVdGlsKGRvY3VtZW50KTtcbiJdfQ==