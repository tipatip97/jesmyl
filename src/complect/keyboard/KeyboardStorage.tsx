import { ReactNode } from "react";
import EvaIcon from "../eva-icon/EvaIcon";
import { KeyboardStorageOverflows } from "./complect/F.Overflows";
import { KeyboardInputProps } from "./Keyboard.model";

export class KeyboardInputStorage extends KeyboardStorageOverflows {
  node: (
    props: KeyboardInputProps,
    forceUpdater: () => void,
    onBlur: () => void,
    onFocus: () => void
  ) => ReactNode;

  constructor(initialValue?: string) {
    super();
    this.replaceAll(initialValue || "");
    this.node = (props, forceUpdater, onBlur, onFocus) => {
      this.offsetElements = [];

      this.onChange = props.onChange;
      this.onFocus = onFocus;
      this.forceUpdate = forceUpdater;
      this.onBlur = onBlur;

      let currentChari = 0;

      return (
        <div
          className={`${props.className || ""} ${
            this.isFocused ? "focused" : ""
          } ${this.value ? "" : "empty-input"} ${
            props.multiline ? "multiline" : ""
          } ${
            props.closeButton ? "" : "without-close-button"
          } input-keyboard-flash-controlled`}
          placeholder={props.placeholder}
        >
          <div
            className="input-keyboard-flash-controlled-char-list"
            ref={(el) => el && (this.flowCharListElement = el)}
          >
            <div className={`input-keyboard-flash-controlled-char-list-inner`}>
              {this.valueCharLines.map((line, linei) => {
                const charLinei = currentChari;

                return (
                  <div
                    key={`line ${linei}`}
                    className={`input-keyboard-flash-controlled-char-list-line ${
                      this.isZeroCursorOn(charLinei) ? "zero-cursor" : ""
                    }`}
                    onMouseDown={(event) => {
                      event.stopPropagation();
                      this.onCharMouseDown(charLinei + line.length);
                    }}
                    onMouseOver={(event) => {
                      event.stopPropagation();
                      this.onCharMouseOver(charLinei + line.length);
                    }}
                    onMouseUp={(event) => {
                      event.stopPropagation();
                      this.onCharMouseUp(charLinei + line.length);
                    }}
                  >
                    {line.map((letter, letteri) => {
                      const chari = currentChari - (letteri ? 1 : 0);
                      currentChari += letteri ? 1 : 2;

                      return (
                        <span
                          key={`node-${letteri}`}
                          className={`input-keyboard-flash-controlled-char ${
                            this.isCursorOn(chari) ? "cursor" : ""
                          } ${this.isSelectedChar(chari) ? "selected" : ""}`}
                          ref={(element) => {
                            this.charElementReference(element, linei, chari);
                          }}
                          onContextMenu={(event) => {
                            event.preventDefault();
                            this.selectWord(chari);
                          }}
                          onDoubleClick={(event) => {
                            event.preventDefault();
                            this.selectWord(chari);
                          }}
                          onMouseDown={(event) => {
                            event.stopPropagation();
                            this.onCharMouseDown(chari);
                          }}
                          onMouseOver={(event) => {
                            event.stopPropagation();
                            this.onCharMouseOver(chari);
                          }}
                          onMouseUp={(event) => {
                            event.stopPropagation();
                            this.onCharMouseUp(chari);
                          }}
                        >
                          {letter}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <EvaIcon
            name="close"
            className="close-icon"
            onMouseDown={() => {
              this.replaceAll("");
              this.focus();
            }}
          />
          <div
            className={`menu-actions-with-selected ${
              this.isSelected && this.isFocused ? "open" : ""
            }`}
          >
            {this.nullOrCanSelectAll() && (
              <div
                onMouseDown={(event) => {
                  event.stopPropagation();
                  this.selectAll();
                }}
              >
                Выделить всё
              </div>
            )}
            <div
              onMouseDown={(event) => {
                event.stopPropagation();
                this.copy();
              }}
            >
              Копировать
            </div>
            <div
              onMouseDown={(event) => {
                event.stopPropagation();
                this.paste();
              }}
            >
              Вставить
            </div>
          </div>
        </div>
      );
    };
  }

  charElementReference(
    element: HTMLSpanElement | nil,
    linei: number,
    chari: number
  ) {
    if (element) {
      if (!this.isSelected && this.cursorPosition - 1 === chari) {
        this.focusedCharItem = element;
        this.focusedLinei = linei;
        if (this.isNeedSetLastFocusedOffset) {
          this.focusedOffset = element.offsetLeft + element.clientWidth;
          this.isNeedSetLastFocusedOffset = false;
          console.log(element.innerText, this.focusedOffset);
        }
      }

      this.offsetElements.push(element);
    }
  }

  nullOrCanSelectAll() {
    return (this.selected[0] === 0 &&
      this.selected[1] === this.valueChars.length) ||
      (this.selected[0] === this.valueChars.length && this.selected[1] === 0)
      ? null
      : true;
  }
}
