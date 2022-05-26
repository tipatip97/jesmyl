import { ReactNode } from "react";
import EvaIcon from "../eva-icon/EvaIcon";
import mylib from "../my-lib/MyLib";
import {
  KeyboardInputProps,
  KeyboardMemoryPoint,
  KeyboardMemoryPointAction,
} from "./Keyboard.model";

export class KeyboardInputStorage {
  node: (
    props: KeyboardInputProps,
    forceUpdater: () => void,
    onBlur: () => void,
    onFocus: () => void
  ) => ReactNode;
  valueChars: string[] = [];
  value: string = "";
  cursorPosition = 0;
  onChange?: (value: string) => void;
  forceUpdate: () => void = () => {};
  onBlur: () => void = () => {};
  isFocused = false;
  scrollToView = () => {};
  isSelecting = false;
  isWordSelecting = false;
  isSelected = false;
  downTs = 0;
  selected: [number, number] = [-1, -1];
  memory: KeyboardMemoryPoint[] = [];
  memoryPosition = 0;
  cursorMovedTo = -1;
  event: { shiftKey: boolean } = {} as never;

  constructor() {
    this.node = (props, forceUpdater, onBlur, onFocus) => {
      let charList: HTMLDivElement;
      let focusedCharItem: HTMLSpanElement;
      this.onChange = props.onChange;
      this.forceUpdate = forceUpdater;
      this.onBlur = onBlur;
      this.scrollToView = () => {
        if (charList && focusedCharItem)
          if (charList.scrollLeft > focusedCharItem.offsetLeft) {
            charList.scrollLeft = focusedCharItem.offsetLeft;
          } else if (
            charList.scrollLeft <
            focusedCharItem.offsetLeft -
              charList.clientWidth +
              focusedCharItem.clientWidth
          )
            charList.scrollLeft =
              focusedCharItem.offsetLeft -
              charList.clientWidth +
              focusedCharItem.clientWidth +
              2;
      };

      // if (this.isMemoShifted) this.isMemoShifted = false;
      // else if (props.value !== this.value) this.replaceAll(props.value || "");

      return (
        <div
          className={`${props.className || ""} ${
            this.isFocused ? "focused" : ""
          } ${this.value ? "" : "empty-input"} input-keyboard-flash-controlled`}
          onMouseDown={(event) => {
            event.stopPropagation();
            if (!this.isFocused) onFocus();
            this.cursorPosition = this.valueChars.length;
            if (!this.isSelecting) this.isSelected = false;
            this.focus();
            this.cursorMovedTo = this.cursorPosition;
          }}
        >
          <div
            className="input-keyboard-flash-controlled-char-list"
            ref={(el) => el && (charList = el)}
          >
            <span
              className={`input-keyboard-flash-controlled-char-list-inner ${
                !this.isSelected && this.cursorPosition === 0
                  ? "zero-cursor"
                  : ""
              }`}
            >
              {this.valueChars.map((char, chari) => (
                <span
                  key={`node-${chari}`}
                  ref={(el) =>
                    el &&
                    !this.isSelected &&
                    this.cursorPosition - 1 === chari &&
                    (focusedCharItem = el)
                  }
                  onContextMenu={(event) => {
                    event.preventDefault();
                    this.selectWord(chari);
                  }}
                  onDoubleClick={(event) => {
                    event.preventDefault();
                    this.isWordSelecting = true;
                    this.selectWord(chari);
                  }}
                  className={`input-keyboard-flash-controlled-char ${
                    !this.isSelected && this.cursorPosition - 1 === chari
                      ? "cursor"
                      : ""
                  } ${
                    this.isSelected &&
                    ((this.selected[0] <= chari && this.selected[1] > chari) ||
                      (this.selected[0] > chari && this.selected[1] <= chari))
                      ? "selected"
                      : ""
                  }`}
                  onMouseDown={(event) => this.onMouseDown(event, chari)}
                  onMouseOver={() => {
                    if (this.isSelecting) {
                      this.isSelected = true;
                      this.selected[1] = chari;
                      this.forceUpdate();
                    }
                  }}
                  onMouseUp={(event) => {
                    event.stopPropagation();
                    this.onMouseUp(chari);
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
            <div className=""/>
          </div>
          <EvaIcon
            name="close"
            className="close-icon"
            onClick={() => this.replaceAll("")}
          />
        </div>
      );
    };
  }

  onMouseDown(
    event: MouseEvent | React.MouseEvent<HTMLSpanElement, MouseEvent>,
    chari?: number
  ) {
    event.stopPropagation();
    this.downTs = Date.now();

    if (chari == null) {
      this.isSelecting = false;
      this.forceUpdate();
    } else {
      this.isSelecting = true;
      this.isSelected = false;
      this.selected[0] = chari;
      this.forceUpdate();
    }
  }

  onMouseUp(chari?: number) {
    const isClick = Date.now() - this.downTs < 300;

    if (chari == null) {
      if (isClick) this.blur();
      else {
        this.isSelecting = false;
        this.downTs = 0;
        this.forceUpdate();
      }
    } else {
      if (isClick) {
        this.cursorMovedTo = chari;
        this.isSelected = false;
        this.isSelecting = false;
        this.focus();
        setTimeout(() => {
          this.cursorPosition = chari;
          this.focus();
        });
      } else {
        this.selected[1] = chari;
        this.isSelecting = false;
        this.forceUpdate();
      }
    }
  }

  onKeyUp(event: KeyboardEvent) {}

  onKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case "Backspace":
        this.backspace(event.ctrlKey);
        return;
      case "Delete":
        this.delete(event.ctrlKey);
        return;
      case "ArrowLeft":
        this.arrowLeft(event);
        return;
      case "ArrowRight":
        this.arrowRight(event);
        return;
    }

    if (event.ctrlKey) {
      switch (event.code) {
        case "KeyA":
          this.selectAll();
          break;
        case "KeyZ":
          if (event.shiftKey) this.redo();
          else this.undo();
          break;
        case "KeyY":
          this.redo();
          break;
        case "KeyV":
          this.paste();
          break;
        case "KeyC":
          this.copy();
          break;
      }

      return;
    }

    switch (event.key) {
      case "Escape":
        if (this.isSelected) {
          this.selected = [-1, -1];
          this.isSelected = false;
          this.isSelecting = false;
          this.forceUpdate();
        }
        break;
      case "ArrowUp":
        this.arrowUp(event);
        break;
      case "ArrowDown":
        this.arrowDown(event);
        break;
      default:
        if (event.key.length === 1) this.type(event.key);
    }
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

  async paste() {
    const text = await navigator.clipboard.readText();
    if (this.replaceSelected(text)) return;
  }

  copy() {
    if (this.isSelected) {
      const [start, finish] = this.selected;
      navigator.clipboard.writeText(this.value.slice(start, finish));
    }
  }

  arrowLeft(event: KeyboardEvent) {
    if (this.cursorPosition) {
      this.selectByShift(event, () => {
        if (event.ctrlKey) {
          this.cursorMovedTo = this.cursorPosition =
            this.findWordStart(this.cursorPosition, true) +
            (this.isSelecting ? 1 : 0);
        } else this.cursorMovedTo = --this.cursorPosition;
      });
    }
  }

  arrowRight(event: KeyboardEvent) {
    if (this.cursorPosition < this.valueChars.length) {
      this.selectByShift(event, () => {
        if (event.ctrlKey)
          this.cursorMovedTo = this.cursorPosition = this.findWordFinish(
            this.cursorPosition
          );
        else this.cursorMovedTo = ++this.cursorPosition;
      });
    }
  }

  arrowUp(event: KeyboardEvent) {
    this.selectByShift(event, () => {
      this.cursorMovedTo = this.cursorPosition = 0;
    });
  }

  arrowDown(event: KeyboardEvent) {
    this.selectByShift(event, () => {
      this.cursorPosition = this.valueChars.length;
    });
  }

  focus() {
    this.isFocused = true;
    this.forceUpdate();
  }

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
          action,
        })
      );

    if (action === "backspace" || action === "delete") {
      if (prev?.action !== action && (!prev || prev.value !== this.value))
        push();
    } else if (action !== "memoShift" || prev?.action !== action) {
      this.memory.splice(this.memoryPosition, this.memory.length);

      push();
    }
    if (action !== "memoShift") this.memoryPosition = this.memory.length;
  }

  memoShift(isUndo: boolean) {
    const prev = this.memory[this.memoryPosition + (isUndo ? -1 : 1)];

    if (prev) {
      this.remember("memoShift");
      const { cursorPosition, selected, value, valueChars, isSelected } =
        mylib.clone(prev);

      this.cursorPosition = cursorPosition;
      this.selected = selected;
      this.value = value;
      this.valueChars = valueChars;
      this.isSelected = isSelected;

      this.memoryPosition += isUndo ? -1 : 1;

      this.forceUpdate();
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

  blur() {
    this.isFocused = false;
    this.forceUpdate();
    this.onBlur();
  }

  selectAll() {
    this.selected = [0, this.valueChars.length];
    this.isSelected = true;
    this.forceUpdate();
  }

  findWordStart(chari: number, isSpaceInWord = false): number {
    return (
      this.valueChars.reduceRight(
        (acc, curr, curri): number | null =>
          acc != null
            ? acc
            : curr === " " && curri < chari
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
          acc != null ? acc : curr === " " && curri > chari ? curri : null,
        null as null | number
      ) || this.valueChars.length
    );
  }

  selectWord(chari: number) {
    this.selected = [this.findWordStart(chari), this.findWordFinish(chari)];
    this.isSelected = true;
    this.forceUpdate();
  }

  textUpdate() {
    this.onChange?.(this.value);
  }

  replaceAll(value: string) {
    this.remember("replaceAll");
    this.value = value;
    this.valueChars = value.split("");
    this.cursorPosition = this.valueChars.length;
    this.textUpdate();
  }

  replaceSelected(value = ""): boolean {
    if (this.isSelected) {
      this.remember("replaceSelected");
      const [start, finish] = this.selected.sort((a, b) => a - b);

      if (start === finish) return false;

      this.valueChars.splice(start, finish - start, ...value.split(""));
      this.value = this.valueChars.join("");
      this.cursorPosition = start + value.length;
      this.isSelected = false;
      this.textUpdate();

      return true;
    }
    return false;
  }

  backspace(ctrlKey: boolean) {
    if (this.replaceSelected()) return;
    this.remember("backspace");
    if (this.cursorPosition > 0) {
      if (ctrlKey) {
        const start = this.findWordStart(this.cursorPosition);
        this.valueChars.splice(start, this.cursorPosition - start);
        this.cursorPosition = start;
      } else {
        this.valueChars.splice(this.cursorPosition - 1, 1);
        this.cursorPosition--;
      }

      this.value = this.valueChars.join("");
      this.textUpdate();
    }
  }

  delete(ctrlKey: boolean) {
    if (this.replaceSelected()) return;
    this.remember("delete");

    if (ctrlKey) {
      const finish = this.findWordFinish(this.cursorPosition);
      this.valueChars.splice(this.cursorPosition, finish - this.cursorPosition);
    } else {
      this.valueChars.splice(this.cursorPosition, 1);
    }

    this.value = this.valueChars.join("");
    this.textUpdate();
  }

  type(char: string) {
    if (this.replaceSelected(char)) return;
    if (
      char === " " ||
      !this.value ||
      this.memoryPosition < this.memory.length ||
      this.cursorMovedTo === this.cursorPosition
    )
      this.remember("type");

    this.valueChars.splice(this.cursorPosition, 0, char);

    this.value = this.valueChars.join("");
    this.cursorPosition++;
    this.textUpdate();
    this.forceUpdate();
    this.scrollToView();
  }
}
