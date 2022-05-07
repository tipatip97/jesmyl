import { CSSProperties, ReactNode } from "react";


export interface ModalType {
    config: ModalConfig;
}

export interface ModalConfigBase {
    title?: FuncableVal<ReactNode>;
    description?: FuncableVal<ReactNode>;
    closeOnClick: boolean;
    theme: string;
    withoutCloseButton: boolean;
    onCloseAcion: (config: ModalConfig) => boolean | void;
    setError: (err: string) => void;
    closeModal: () => void;
    getInput: (index?: number) => Partial<ModalConfigInput> | und;
    deep: number;
};

export interface ModalConfig extends ModalConfigBase {
    theInputs?: JSX.Element[] | null;
    theButtons?: JSX.Element[] | null;
}

export interface ModalConfig extends ModalConfigBase {
    inputs?: (Partial<ModalConfigInput> | null | [JSX.Element])[] | null;
    buttons?: (ModalConfigButton | string)[] | null;
}

type FuncableVal<Value, Config = ModalConfig> = null | Value | ((config: Config) => Value);

export interface ModalConfigButton {
    title?: FuncableVal<ReactNode>;
    className?: string;
    onClick?: (config: ModalConfig) => void;
    closable?: FuncableVal<boolean>;
    disabled?: FuncableVal<boolean>;
    hidden?: FuncableVal<boolean>;
    confirm?: string;
    modal?: Function;
    value?: any;
}

export interface ModalConfigInput extends ModalConfig {
    placeholder: string;
    value: string;
    style: FuncableVal<CSSProperties>;
    className: string;
    hidden: FuncableVal<boolean>;
    disabled: FuncableVal<boolean>;

    rows: number;

    type: 'text' | 'textarea' | 'input' | 'password' | 'button' | 'number' | 'date' | 'checkbox';
    checked: FuncableVal<boolean>;
    min: FuncableVal<string | number>;
    max: FuncableVal<string | number>;

    onInput: (config: ModalConfigInput) => void;
    onClick: (config: ModalConfig) => void;
    set: (attrn: keyof ModalConfigInput, val: string) => void;
    element: HTMLElement;
    setVal: (val: string) => void;
    input: ModalConfigInput;
    confirm: string;
    modal: Function;
    closable: boolean;
}

export interface TheModalInputProps {
    // второй параметр - уникальный ключ инпута
    config: Partial<ModalConfigInput> | [Partial<ModalConfigInput>, (number | string)?];
    forceUpdate: () => void;
}

export interface TheModalButtonProps {
    // второй параметр - уникальный ключ инпута
    config: [Partial<ModalConfigButton> | string, (number | string)?];
}

export interface ModalFixed {
    inputs?: ReactNode;
    buttons?: ReactNode;
}
