import { KeyboardStorageEvent } from '../Keyboard.model';
import { KeyboardStorageNavigate } from './D.Navigate';

export class KeyboardStorageChanges extends KeyboardStorageNavigate {
    prevTypedValue: string = '';
    typedCursorPosition = -1;
    dafaultSetIsUnknownSymbols = () => false;
    setIsUnknownSymbols: (char: string) => boolean = this.dafaultSetIsUnknownSymbols;

    replaceAll = (value: string, isRemember = true) => {
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
                if (this.isMultiline) {
                    lastLine = [];
                    lines.push(lastLine);
                } else lastLine.push(' ');

                return;
            }
            lastLine.push(this.setIsUnknownSymbols(char) ? '�' : char);
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
            this.isSelected = false;

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
        this.isSelected = false;

        this.setValues();
    }

    write(value: string, isRememberAsPart?: boolean) {
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
        this.isSelected = false;
        this.prevTypedValue = value;
        if (!isRememberAsPart) this.typedCursorPosition = this.cursorPosition;
        if (!this.isCapsLock) this.event.shiftKey = false;
        this.setValues();
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
        }
    }
}