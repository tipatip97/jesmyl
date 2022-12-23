import React, { ReactNode } from "react";


export const keyboardKeyTranslateLangs = ['ru', 'ua', 'en'] as const;
export const keyboardKeyTranslateCase = ['lower', 'upper'] as const;

export type KeyboardKeyTranslateLanguage = typeof keyboardKeyTranslateLangs[number];
export type KeyboardKeyTranslateCase = typeof keyboardKeyTranslateCase[number];

export type KeyboardKeyTranslate = Record<KeyboardKeyTranslateLanguage, string>;

export type KeyboardKeyDict = Record<KeyboardKeyTranslateLanguage, { lower: string[][]; upper: string[][]; }>;
export type KeyboardInputPropsType = 'password' | 'text' | 'number';
export type TouchSelectionMode = 'select' | 'delete' | 'navigate';

export interface KeyboardInputProps {
    initialValue?: string;
    multiline?: boolean;
    type?: KeyboardInputPropsType;
    preferLanguage?: KeyboardKeyTranslateLanguage;
    closeButton?: boolean;
    autofocus?: boolean;
    className?: string;
    placeholder?: string;
    onBlur?: () => void;
    onFocus?: () => void;
    onClick?: () => void;
    // срабатывает только при вводе в поле инпута
    onInput?: (value: string, prev: string) => void;
    // сабатывает при любом изменении значения
    onChange?: (value: string, prev: string) => void;
    onPaste?: (value: string) => void;
    setIsUnknownSymbols?: (char: string) => boolean;
    mapChar?: (char: string) => ReactNode;
};

export type KeyboardMemoryPointAction = 'write' | 'delete' | 'backspace' | 'replaceAll' | 'replaceSelected' | 'memoShift';
export const keyboardInlineActions: KeyboardMemoryPointAction[] = ['memoShift'];

export type KeyboardStorageEvent = React.MouseEvent<HTMLSpanElement, MouseEvent>
    | React.TouchEvent<HTMLSpanElement>
    | React.MouseEvent<HTMLOrSVGElement, MouseEvent>
    | KeyboardEvent;

export interface KeyboardMemoryPoint {
    selected: [number, number];
    value: string;
    valueChars: string[];
    valueCharLines: ReactNode[][];
    cursorPosition: number;
    isSelected: boolean;
    action: KeyboardMemoryPointAction;
}

