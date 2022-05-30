import mylib from '../../my-lib/MyLib';
import { KeyboardMemoryPoint, KeyboardMemoryPointAction } from '../Keyboard.model';
import { KeyboardStorageSelect } from './B.Select';

export class KeyboardStorageBuffer extends KeyboardStorageSelect {
    memory: KeyboardMemoryPoint[] = [];
    memoryPosition = 0;

    remember(action: KeyboardMemoryPointAction) {
        const prev = this.memory[this.memory.length - 1];
        const push = () =>
            this.memory.push(
                mylib.clone({
                    selected: this.selected,
                    value: this.value,
                    valueChars: this.valueChars,
                    cursorPosition: this.cursorPosition,
                    isSelected: this.isSelected,
                    valueCharLines: this.valueCharLines,
                    action,
                })
            );

        if (action === 'backspace' || action === 'delete') {
            if (prev?.action !== action && (!prev || prev.value !== this.value))
                push();
        } else if (action !== 'memoShift' || prev?.action !== action) {
            this.memory.splice(this.memoryPosition, this.memory.length);

            push();
        }
        if (action !== 'memoShift') this.memoryPosition = this.memory.length;
    }

    memoShift(isUndo: boolean) {
        const prev = this.memory[this.memoryPosition + (isUndo ? -1 : 1)];

        if (prev) {
            this.remember('memoShift');
            const {
                cursorPosition,
                selected,
                value,
                valueChars,
                isSelected,
                valueCharLines,
            } = mylib.clone(prev);

            this.setCursorPosition(cursorPosition);
            this.selected = selected;
            this.value = value;
            this.valueChars = valueChars;
            this.valueCharLines = valueCharLines;
            this.isSelected = isSelected;

            this.memoryPosition += isUndo ? -1 : 1;

            this.textUpdate();
        }
    }

    undo() {
        this.memoShift(true);
    }

    redo() {
        this.memoShift(false);
    }

    canUndo() {
        return this.memory.length && this.memoryPosition > 0;
    }

    canRedo() {
        return this.memory.length && this.memoryPosition < this.memory.length - 1;
    }
}