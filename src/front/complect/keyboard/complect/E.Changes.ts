import { ReactNode } from 'react';
import { KeyboardStorageEvent } from '../Keyboard.model';
import { KeyboardStorageNavigate } from './D.Navigate';

export class KeyboardStorageChanges extends KeyboardStorageNavigate {
    prevTypedValue: string = '';
    shadowCursorPosition = this.cursorPosition;
    dafaultSetIsUnknownSymbols = () => false;
    dafaultMapChar = (char: string) => char;
    setIsUnknownSymbols: (char: string) => boolean = this.dafaultSetIsUnknownSymbols;
    mapChar: (char: string) => ReactNode = this.dafaultMapChar;

    replaceAll = (value: string, isRemember = true, isInvokeOnInputEvent = false) => {
        if (value === this.value) return;
        const prev = this.value;
        if (isRemember) this.remember('replaceAll');
        this.valueChars = value?.split('') || [];
        this.setCursorPosition(this.valueChars.length);
        this.scrollToView();
        this.setValues();
        if (isInvokeOnInputEvent) this.onInput?.(this.value, prev);
    }

    setValues() {
        let lastLine: ReactNode[] = [];
        const lines: ReactNode[][] = [lastLine];

        this.valueChars.forEach((char) => {
            if (char === '\n') {
                if (this.isMultiline) {
                    lastLine = [];
                    lines.push(lastLine);
                } else lastLine.push(' ');

                return;
            }
            lastLine.push(this.setIsUnknownSymbols(char) ? '�' : this.mapChar(char));
        });

        this.valueCharLines = lines;
        const prev = this.value;
        this.value = this.valueChars.join('');

        this.textUpdate(prev);
    }

    replaceSelected(value = ''): boolean {
        if (this.isSelected) {
            this.remember('replaceSelected');
            const [start, finish] = this.selected.sort((a, b) => a - b);

            if (start === finish) return false;

            this.valueChars.splice(start, finish - start, ...value.split(''));
            this.setCursorPosition(start + value.length);
            this.isSelected = false;
            this.scrollToView();
            this.setValues();

            return true;
        }
        return false;
    }

    backspace(event: KeyboardStorageEvent) {
        if (this.replaceSelected()) return;
        this.remember('backspace');
        if (this.cursorPosition > 0) {
            if (this.isCtrlKey(event)) {
                const start = this.findWordStart(this.cursorPosition);
                this.valueChars.splice(start, this.cursorPosition - start);
                this.setCursorPosition(start);
            } else {
                this.valueChars.splice(this.cursorPosition - 1, 1);
                this.setCursorPosition(this.cursorPosition - 1);
            }
            this.isSelected = false;

            this.scrollToView();
            const prev = this.value;
            this.setValues();
            this.onInput?.(this.value, prev);
        }
    }

    delete(event: KeyboardStorageEvent) {
        if (this.replaceSelected()) return;
        this.remember('delete');

        if (this.isCtrlKey(event)) {
            const finish = this.findWordFinish(this.cursorPosition);
            this.valueChars.splice(this.cursorPosition, finish - this.cursorPosition);
        } else {
            this.valueChars.splice(this.cursorPosition, 1);
        }
        this.isSelected = false;

        this.scrollToView();
        const prev = this.value;
        this.setValues();
        this.onInput?.(this.value, prev);
    }

    write(value: string, isRememberAsPart?: boolean) {
        if (this.replaceSelected(value)) return;
        if (
            (value === ' ' && this.prevTypedValue !== ' ') ||
            !this.value ||
            this.memoryPosition < this.memory.length ||
            this.shadowCursorPosition !== this.cursorPosition
        )
            this.remember('write');

        this.valueChars.splice(this.cursorPosition, 0, ...value.split(''));

        this.setCursorPosition(this.cursorPosition + value.length);
        this.isSelected = false;
        this.prevTypedValue = value;
        if (!isRememberAsPart) this.shadowCursorPosition = this.cursorPosition;
        if (!this.isCapsLock) this.event.shiftKey = false;
        const prev = this.value;
        this.setValues();
        this.onInput?.(this.value, prev);
        this.scrollToView();
    }

    async paste(position?: 'before' | 'after') {
        const text = await navigator.clipboard.readText();
        if (text && position) {
            this.isSelected = false;
            this.setCursorPosition(position === 'before' ? Math.min(...this.selected) : Math.max(...this.selected));
        }
        text && this.write(text, true);
    }

    copy() {
        if (this.isSelected) {
            const [start, finish] = [...this.selected].sort((a, b) => a - b);
            navigator.clipboard.writeText(this.value.slice(start, finish));
            this.isSelected = false;
            this.forceUpdate();
        }
    }

    cut() {
        if (this.isSelected) {
            const [start, finish] = [...this.selected].sort((a, b) => a - b);
            navigator.clipboard.writeText(this.value.slice(start, finish));
            if (this.replaceSelected('')) return;
            this.scrollToView();
        }
    }
}