import { KeyboardStorageBase } from './A.Base';

export class KeyboardStorageSelect extends KeyboardStorageBase {
    cursorPosition = 0;
    isSelecting = false;
    isSelected = false;
    selected: [number, number] = [-1, -1];
    event: { shiftKey: boolean } = {} as never;

    isSelectedChar(chari: number) {
        return (
            this.isSelected &&
            ((this.selected[0] <= chari && this.selected[1] > chari) ||
                (this.selected[0] > chari && this.selected[1] <= chari))
        );
    }
    selectByShift(event: KeyboardEvent, cb: (shiftKey: boolean) => void) {
        if (event.shiftKey || this.event.shiftKey) {
            if (!this.isSelected) this.selected[0] = this.cursorPosition;
            cb(true);

            if (this.selected[0] === this.cursorPosition) this.isSelected = false;
            else {
                this.selected[1] = this.cursorPosition;
                this.isSelected = true;
            }
        } else {
            cb(false);
            this.isSelected = false;
        }

        this.forceUpdate();
    }

    selectAll() {
        this.selected = [0, this.valueChars.length];
        this.isSelected = true;
        this.forceUpdate();
    }


    selectWord(chari: number) {
        this.selected = [this.findWordStart(chari), this.findWordFinish(chari)];
        this.isSelected = true;
        this.forceUpdate();
    }

    findWordStart(chari: number, isSpaceInWord = false): number {
        return (
            this.valueChars.reduceRight(
                (acc, curr, curri): number | null =>
                    acc != null
                        ? acc
                        : curr === ' ' && curri < chari
                            ? curri + (isSpaceInWord ? 0 : curri + 1 === chari ? 0 : 1)
                            : null,
                null as null | number
            ) || 0
        );
    }

    findWordFinish(chari: number): number {
        return (
            this.valueChars.reduce(
                (acc, curr, curri): number | null =>
                    acc != null ? acc : curr === ' ' && curri > chari ? curri : null,
                null as null | number
            ) || this.valueChars.length
        );
    }
}