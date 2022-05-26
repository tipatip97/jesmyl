

export const keyboardKeyTranslateLangs = ['ru', 'ua', 'en'] as const;
export const keyboardKeyTranslateCase = ['lower', 'upper'] as const;

export type KeyboardKeyTranslateLangs = typeof keyboardKeyTranslateLangs[number];
export type KeyboardKeyTranslateCase = typeof keyboardKeyTranslateCase[number];

export type KeyboardKeyTranslate = Record<KeyboardKeyTranslateLangs, string>;

export type KeyboardKeyDict = Record<KeyboardKeyTranslateLangs, { lower: string[][]; upper: string[][]; }>;


export interface KeyboardInputProps {
    value?: string;
    className?: string;
    placeholder?: string;
    onBlur?: () => void;
    onChange?: (value: string) => void;
};

export type KeyboardMemoryPointAction = 'type' | 'delete' | 'backspace' | 'replaceAll' | 'replaceSelected' | 'memoShift';
export const keyboardInlineActions: KeyboardMemoryPointAction[] = ['memoShift'];

export interface KeyboardMemoryPoint {
    selected: [number, number];
    value: string;
    valueChars: string[];
    cursorPosition: number;
    isSelected: boolean;
    action: KeyboardMemoryPointAction;
}

