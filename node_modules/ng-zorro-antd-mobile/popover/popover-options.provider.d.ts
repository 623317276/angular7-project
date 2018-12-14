export interface PopoverOptionsInterface {
    mask?: boolean;
    visible?: boolean;
    placement?: string;
    appendToBody?: boolean;
    className?: string;
    autoClose?: boolean;
}
export declare class PopoverOptions implements PopoverOptionsInterface {
    showArrow: boolean;
    mask: boolean;
    placement: string;
    appendToBody: boolean;
    className: string;
    autoClose: boolean;
}
