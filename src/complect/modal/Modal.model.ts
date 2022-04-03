import { CSSProperties, ReactNode } from "react";


export interface ModalType {
    config: ModalConfig;
}

export interface ModalConfig {
    title?: string,
    description?: ReactNode,
    inputs?: Partial<ModalConfigInput>[] | null,
    buttons?: (ModalConfigButton | string)[] | null,
    closeOnClick: boolean,
    theme: string,
    withoutCloseButton: boolean,
    onCloseButtonClick: (config: ModalConfig) => boolean,
    setError: (err: string) => void,
    closeModal: () => void,
};

export interface ModalConfigButton {
    title?: string,
    className?: string,
    onClick?: (config: ModalConfig) => void,
    closable?: boolean,
    disabled?: boolean,
    hidden?: boolean,
    confirm?: string,
    modal?: Function,
    value?: any;
}

export interface ModalConfigInput {
    title: string,
    type: 'textarea' | 'input' | 'password' | 'button',
    placeholder: string;
    set: (attrn: keyof ModalConfigInput, val: string) => void,
    element: HTMLElement,
    setVal: (val: string) => void,
    value: string,
    style: CSSProperties,
    className: string,
    hidden: boolean,
    disabled: boolean;
    checked: boolean;
    min: number;
    max: number;
    onInput: (config: ModalConfig) => void,
    onClick: (config: ModalConfig) => void,
    confirm: string;
    modal: Function;
    closable: boolean;

    rows: number;
}