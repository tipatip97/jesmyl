import { KeyboardStorageBuffer } from './C.Buffer';

export class KeyboardStorageTextNavigate extends KeyboardStorageBuffer {
    downTs = 0;
    cursorMovedTo = -1;
    flowCharListElement: HTMLDivElement | nil;
    focusedCharItem: HTMLSpanElement | nil;
    focusedLinei: number = -1;
    focusedOffset: number = 0;
    offsetElements: HTMLSpanElement[] = [];

    arrowLeft(event: KeyboardEvent) {
        event.preventDefault();
        if (this.isSelected && (this.selected[0] === 0 || this.selected[1] === 0)) {
            this.cursorMovedTo = this.cursorPosition = 0;
            this.isNeedSetLastFocusedOffset = true;
            this.isSelected = false;
            this.forceUpdate();
        } else if (this.cursorPosition) {
            this.selectByShift(event, () => {
                this.isNeedSetLastFocusedOffset = true;
                if (event.ctrlKey) {
                    this.cursorMovedTo = this.cursorPosition =
                        this.findWordStart(this.cursorPosition, true) +
                        (this.isSelecting ? 1 : 0);
                } else this.cursorMovedTo = --this.cursorPosition;
            });
        }
        this.scrollToView();
    }

    arrowRight(event: KeyboardEvent) {
        event.preventDefault();
        if (
            this.isSelected &&
            (this.selected[0] === this.valueChars.length ||
                this.selected[1] === this.valueChars.length)
        ) {
            this.cursorMovedTo = this.cursorPosition = this.valueChars.length;
            this.isNeedSetLastFocusedOffset = true;
            this.isSelected = false;
            this.forceUpdate();
        } else if (this.cursorPosition < this.valueChars.length) {
            this.selectByShift(event, () => {
                this.isNeedSetLastFocusedOffset = true;
                if (event.ctrlKey)
                    this.cursorMovedTo = this.cursorPosition = this.findWordFinish(
                        this.cursorPosition
                    );
                else this.cursorMovedTo = ++this.cursorPosition;
            });
        }

        this.scrollToView();
    }

    arrowUp(event: KeyboardEvent) {
        event.preventDefault();
        this.selectByShift(event, () => this.onArrowUpward());
        this.scrollToView();
    }

    arrowDown(event: KeyboardEvent) {
        event.preventDefault();
        this.selectByShift(event, () => this.onArrowDownward());
        this.scrollToView();
    }

    onArrowUpward() {
        let isZeroFind = false;

        const revIndex = this.offsetElements
            .slice(0, this.cursorPosition - this.focusedLinei - 1)
            .reverse()
            .findIndex((element) => {
                if (element.offsetLeft === 0) {
                    isZeroFind = true;
                    return false;
                }
                if (
                    (isZeroFind &&
                        this.focusedOffset > element.offsetLeft + element.clientWidth) ||
                    (this.focusedOffset > element.offsetLeft &&
                        this.focusedOffset <= element.offsetLeft + element.clientWidth)
                ) {
                    return true;
                }

                return false;
            });

        if (revIndex < 0) this.cursorPosition = 0;
        else this.cursorPosition -= revIndex + 2;

        this.cursorMovedTo = this.cursorPosition;
    }

    onArrowDownward() {
        let isZeroFind = 0;
        let prev: number;
        let isNeedMinus = false;

        const index = this.offsetElements
            .slice(this.cursorPosition)
            .findIndex((element) => {
                if (this.focusedOffset === element.offsetLeft) return false;
                if (element.offsetLeft === 0) {
                    if (isZeroFind && this.focusedOffset > prev) {
                        isNeedMinus = true;
                        return true;
                    }
                    isZeroFind++;
                    return false;
                }

                if (
                    this.focusedOffset >= element.offsetLeft &&
                    this.focusedOffset <= element.offsetLeft + element.clientWidth
                ) {
                    return true;
                }

                prev = element.offsetLeft + element.clientWidth;
                return false;
            });

        if (index < 0) this.cursorPosition = this.valueChars.length;
        else
            this.cursorPosition += index + this.focusedLinei + (isNeedMinus ? 0 : 1);

        this.cursorMovedTo = this.cursorPosition;
    }

    scrollToView() {
        if (this.flowCharListElement && this.focusedCharItem)
            if (
                this.flowCharListElement.scrollLeft > this.focusedCharItem.offsetLeft
            ) {
                this.flowCharListElement.scrollLeft = this.focusedCharItem.offsetLeft;
            } else if (
                this.flowCharListElement.scrollLeft <
                this.focusedCharItem.offsetLeft -
                this.flowCharListElement.clientWidth +
                this.focusedCharItem.clientWidth
            )
                this.flowCharListElement.scrollLeft =
                    this.focusedCharItem.offsetLeft -
                    this.flowCharListElement.clientWidth +
                    this.focusedCharItem.clientWidth +
                    2;
    }
    isZeroCursorOn(charLinei: number) {
        return (
            (!this.isSelected && this.cursorPosition === 0 && charLinei === 0) ||
            this.cursorPosition === charLinei
        );
    }

    isCursorOn(chari: number) {
        return !this.isSelected && this.cursorPosition - 1 === chari;
    }

    onCharMouseDown(chari: number) {
        this.downTs = Date.now();

        this.isSelecting = true;
        this.isSelected = false;
        this.cursorPosition = this.selected[0] = chari;
        this.focus();
    }

    onCharMouseOver(chari: number) {
        if (this.isSelecting) {
            this.isSelected = true;
            this.selected[1] = chari;
            this.forceUpdate();
        }
    }

    onCharMouseUp(chari: number) {
        if (Date.now() - this.downTs < 300) {
            this.isSelected = false;
            this.isSelecting = false;
            this.cursorPosition = this.cursorMovedTo = chari;
            this.isNeedSetLastFocusedOffset = true;
            this.focus();
        } else {
            this.selected[1] = chari;
            this.isSelecting = false;
            this.forceUpdate();
        }
    }
}