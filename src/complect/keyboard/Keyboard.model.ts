import React from "react";


export const keyboardKeyTranslateLangs = ['ru', 'ua', 'en'] as const;
export const keyboardKeyTranslateCase = ['lower', 'upper'] as const;

export type KeyboardKeyTranslateLanguage = typeof keyboardKeyTranslateLangs[number];
export type KeyboardKeyTranslateCase = typeof keyboardKeyTranslateCase[number];

export type KeyboardKeyTranslate = Record<KeyboardKeyTranslateLanguage, string>;

export type KeyboardKeyDict = Record<KeyboardKeyTranslateLanguage, { lower: string[][]; upper: string[][]; }>;
export type KeyboardInputPropsType = 'password' | 'text' | 'number';

export interface KeyboardInputProps {
    initialValue?: string;
    multiline?: boolean;
    type?: KeyboardInputPropsType;
    preferLanguage?: KeyboardKeyTranslateLanguage;
    closeButton?: boolean;
    className?: string;
    placeholder?: string;
    onBlur?: () => void;
    onChange?: (value: string) => void;
    onPaste?: (value: string) => void;
};

export type KeyboardMemoryPointAction = 'type' | 'delete' | 'backspace' | 'replaceAll' | 'replaceSelected' | 'memoShift';
export const keyboardInlineActions: KeyboardMemoryPointAction[] = ['memoShift'];

export type KeyboardStorageEvent = React.MouseEvent<HTMLSpanElement, MouseEvent>
    | React.TouchEvent<HTMLSpanElement>
    | React.MouseEvent<HTMLOrSVGElement, MouseEvent>
    | KeyboardEvent;

export interface KeyboardMemoryPoint {
    selected: [number, number];
    value: string;
    valueChars: string[];
    valueCharLines: string[][];
    cursorPosition: number;
    isSelected: boolean;
    action: KeyboardMemoryPointAction;
}

