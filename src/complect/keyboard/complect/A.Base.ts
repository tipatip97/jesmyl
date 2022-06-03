export class KeyboardStorageBase {
    value: string = '';
    onChange?: (value: string) => void;
    onFocus?: () => void;
    forceUpdate: () => void = () => { };
    onBlur: () => void = () => { };
    isFocused = false;
    isMultiline?: boolean = false;
    isSelected = false;
    focusedCharItem: HTMLSpanElement | nil;

    focus(rejectForceUpdate?: boolean) {
        if (!this.isFocused) this.onFocus?.();
        this.isFocused = true;
        if (!rejectForceUpdate) this.forceUpdate();
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

    scrollToView(arg: ScrollIntoViewOptions | boolean = { block: 'nearest', inline: 'nearest' }) {
        if (this.isFocused) this.focusedCharItem?.scrollIntoView(arg);
    }
}