export class KeyboardStorageBase {
    value: string = '';
    onChange?: (value: string) => void;
    onFocus?: () => void;
    forceUpdate: () => void = () => { };
    onBlur: () => void = () => { };
    isFocused = false;
    isMultiline?: boolean = false;
    isSelected = false;

    focus() {
        if (!this.isFocused) this.onFocus?.();
        this.isFocused = true;
        this.forceUpdate();
    }

    blur(resetSelected = false): boolean {
        if (resetSelected) this.isSelected = false;

        if (this.isFocused) {
            this.isFocused = false;
            this.forceUpdate();
            this.onBlur();
            this.forceUpdate();

            return true;
        }

        return false;
    }

    textUpdate() {
        this.onChange?.(this.value);
        this.forceUpdate();
    }
}