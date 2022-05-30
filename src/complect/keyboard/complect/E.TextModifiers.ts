import { KeyboardStorageTextNavigate } from './D.TextNavigate';

export class KeyboardStorageTextModifiers extends KeyboardStorageTextNavigate {

    replaceAll(value: string) {
        this.remember('replaceAll');
        this.valueChars = value.split('');
        this.cursorPosition = this.valueChars.length;
        this.isNeedSetLastFocusedOffset = true;
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
            this.cursorPosition = start + value.length;
            this.isNeedSetLastFocusedOffset = true;
            this.isSelected = false;
            this.setValues();

            return true;
        }
        return false;
    }

    backspace(ctrlKey: boolean) {
        if (this.replaceSelected()) return;
        this.remember('backspace');
        if (this.cursorPosition > 0) {
            if (ctrlKey) {
                const start = this.findWordStart(this.cursorPosition);
                this.valueChars.splice(start, this.cursorPosition - start);
                this.cursorPosition = start;
                this.isNeedSetLastFocusedOffset = true;
            } else {
                this.valueChars.splice(this.cursorPosition - 1, 1);
                this.cursorPosition--;
            }

            this.setValues();
        }
    }

    delete(ctrlKey: boolean) {
        if (this.replaceSelected()) return;
        this.remember('delete');

        if (ctrlKey) {
            const finish = this.findWordFinish(this.cursorPosition);
            this.valueChars.splice(this.cursorPosition, finish - this.cursorPosition);
        } else {
            this.valueChars.splice(this.cursorPosition, 1);
        }

        this.setValues();
    }

    type(value: string, isRememberAsPart = false) {
        if (this.replaceSelected(value)) return;
        if (
            value === ' ' ||
            !this.value ||
            this.memoryPosition < this.memory.length ||
            this.cursorMovedTo === this.cursorPosition
        )
            this.remember('type');

        this.valueChars.splice(this.cursorPosition, 0, ...value.split(''));

        this.cursorPosition += value.length;
        if (isRememberAsPart) this.cursorMovedTo = this.cursorPosition;
        this.setValues();
        this.scrollToView();
    }

    async paste() {
        const text = await navigator.clipboard.readText();
        text && this.type(text, true);
    }

    copy() {
        if (this.isSelected) {
            const [start, finish] = this.selected;
            navigator.clipboard.writeText(this.value.slice(start, finish));
            this.isSelected = false;
            this.forceUpdate();
        }
    }

    cut() {
        if (this.isSelected) {
            const [start, finish] = this.selected;
            navigator.clipboard.writeText(this.value.slice(start, finish));
            if (this.replaceSelected('')) return;
        }
    }
}