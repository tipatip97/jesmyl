import { KeyboardStorageEvent } from '../Keyboard.model';
import { KeyboardStorageTextNavigate } from './D.TextNavigate';

export class KeyboardStorageTextModifiers extends KeyboardStorageTextNavigate {
    prevTypedValue: string = '';
    typedCursorPosition = -1;

    replaceAll(value: string, isRemember = true) {
        if (value === this.value) return;
        if (isRemember) this.remember('replaceAll');
        this.valueChars = value.split('');
        this.setCursorPosition(this.valueChars.length);
        this.setValues();
    }

    setValues() {
        let lastLine: string[] = [];
        const lines: string[][] = [lastLine];

        this.valueChars.forEach((char) => {
            if (char === '\n') {
                lastLine = [];
                lines.push(lastLine);
                return;
            }
            lastLine.push(char);
        });

        this.valueCharLines = lines;
        this.value = this.valueChars.join('');

        this.textUpdate();
    }

    replaceSelected(value = ''): boolean {
        if (this.isSelected) {
            this.remember('replaceSelected');
            const [start, finish] = this.selected.sort((a, b) => a - b);

            if (start === finish) return false;

            this.valueChars.splice(start, finish - start + 1, ...value.split(''));
            this.setCursorPosition(start + value.length);
            this.isSelected = false;
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

            this.setValues();
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

        this.setValues();
    }

    type(value: string, isRememberAsPart?: boolean) {
        if (this.replaceSelected(value)) return;
        if (
            (value === ' ' && this.prevTypedValue !== ' ') ||
            !this.value ||
            this.memoryPosition < this.memory.length ||
            this.typedCursorPosition !== this.cursorPosition
        )
            this.remember('type');

        this.valueChars.splice(this.cursorPosition, 0, ...value.split(''));

        this.setCursorPosition(this.cursorPosition + value.length);
        this.prevTypedValue = value;
        if (!isRememberAsPart) this.typedCursorPosition = this.cursorPosition;
        if (!this.isCapsLock) this.event.shiftKey = false;
        this.setValues();
        this.scrollToView();
    }

    async paste() {
        const text = await navigator.clipboard.readText();
        text && this.type(text, true);
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
        }
    }
}