import { KeyboardStorageTextModifiers } from './E.TextModifiers';


export class KeyboardStorageOverflows extends KeyboardStorageTextModifiers {
    onOverflowMouseDown() {
        if (!this.isFocused) return;
        this.blur();
    }

    onOverflowMouseUp() {
        if (!this.isFocused) return;
        const isClick = Date.now() - this.downTs < 300;

        if (isClick) this.blur();
        else {
            this.isSelecting = false;
            this.downTs = 0;
            this.forceUpdate();
        }
    }

    onOverflowKeyDown(event: KeyboardEvent) {
        if (!this.isFocused) return;
        switch (event.key) {
            case 'Backspace':
                this.backspace(event);
                return;
            case 'Delete':
                this.delete(event);
                return;
            case 'Enter':
                this.isMultiline && this.write('\n');
                return;
            case 'ArrowLeft':
                this.arrowLeft(event);
                return;
            case 'ArrowRight':
                this.arrowRight(event);
                return;
        }

        if (event.ctrlKey) {
            switch (event.code) {
                case 'KeyA':
                    this.selectAll();
                    break;
                case 'KeyZ':
                    if (event.shiftKey) this.redo();
                    else this.undo();
                    break;
                case 'KeyY':
                    this.redo();
                    break;
                case 'KeyV':
                    this.paste();
                    break;
                case 'KeyC':
                    this.copy();
                    break;
                case 'KeyX':
                    this.cut();
                    break;
            }

            return;
        }

        switch (event.key) {
            case 'Escape':
                if (this.isSelected) {
                    this.selected = [-1, -1];
                    this.isSelected = false;
                    this.isSelecting = false;
                    this.forceUpdate();
                }
                break;
            case 'ArrowUp':
                this.arrowUp(event);
                break;
            case 'ArrowDown':
                this.arrowDown(event);
                break;
            default:
                if (event.key.length === 1) {
                    event.preventDefault();
                    this.write(event.key);
                }
        }
    }
}