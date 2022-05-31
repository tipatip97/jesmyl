import React from "react";


export const keyboardKeyTranslateLangs = ['ru', 'ua', 'en'] as const;
export const keyboardKeyTranslateCase = ['lower', 'upper'] as const;

export type KeyboardKeyTranslateLangs = typeof keyboardKeyTranslateLangs[number];
export type KeyboardKeyTranslateCase = typeof keyboardKeyTranslateCase[number];

export type KeyboardKeyTranslate = Record<KeyboardKeyTranslateLangs, string>;

export type KeyboardKeyDict = Record<KeyboardKeyTranslateLangs, { lower: string[][]; upper: string[][]; }>;
export type KeyboardInputPropsType = 'password' | 'text';

export interface KeyboardInputProps {
    initialValue?: string;
    multiline?: boolean;
    type?: KeyboardInputPropsType;
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

