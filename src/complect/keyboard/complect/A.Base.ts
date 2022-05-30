
export class KeyboardStorageBase {
    valueChars: string[] = [];
    valueCharLines: string[][] = [];
    value: string = '';
    onChange?: (value: string) => void;
    onFocus?: () => void;
    forceUpdate: () => void = () => { };
    onBlur: () => void = () => { };
    isFocused = false;

    focus() {
        if (!this.isFocused) this.onFocus?.();
        this.isFocused = true;
        this.forceUpdate();
    }

    blur(): boolean {
        if (this.isFocused) {
            this.isFocused = false;
            this.forceUpdate();
            this.onBlur();

            return true;
        }

        return false;
    }

    textUpdate() {
        this.onChange?.(this.value);
        this.forceUpdate();
    }
}