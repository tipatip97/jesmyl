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

  constructor(initialValue?: string, id?: string) {
    super();
    this.replaceAll(initialValue || "", false);
    this.node = (props, forceUpdater, onBlur, onFocus) => {
      this.offsetElements = [];

      this.onChange = props.onChange;
      this.onFocus = onFocus;
      this.forceUpdate = forceUpdater;
      this.onBlur = onBlur;
      this.isMultiline = props.multiline;

      let currentChari = 0;

      return (
        <div
          className={`${props.className || ""} ${
            this.valueCharLines.length === 0 ? "no-lines" : ""
          } ${this.isFocused ? "focused" : ""} ${
            this.value ? "" : "empty-input"
          } ${props.multiline ? "multiline" : ""} ${
            props.closeButton !== false ? "" : "without-close-button"
          } input-keyboard-flash-controlled`}
          placeholder={props.placeholder}
          onMouseDown={(event) => {
            event.stopPropagation();
            this.focus();
          }}
          onClick={(event) => event.stopPropagation()}
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
                      this.onCharMouseDown(event, charLinei + line.length);
                    }}
                    onMouseOver={(event) => {
                      event.stopPropagation();
                      this.onCharMouseOver(event, charLinei + line.length);
                    }}
                    onMouseUp={(event) => {
                      event.stopPropagation();
                      this.onCharMouseUp(event, charLinei + line.length);
                    }}
                  >
                    {(line.length ? line : [""]).map((letter, letteri) => {
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
                            this.onCharMouseDown(event, chari);
                          }}
                          onMouseOver={(event) => {
                            event.stopPropagation();
                            this.onCharMouseOver(event, chari);
                          }}
                          onMouseUp={(event) => {
                            event.stopPropagation();
                            this.onCharMouseUp(event, chari);
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
      if (this.cursorPosition - 1 === chari) {
        this.focusedCharItem = element;
        this.focusedLinei = linei;
        if (this.isCursorPositionChanged) {
          this.focusedOffset = element.offsetLeft + element.clientWidth;
          this.isCursorPositionChanged = false;
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
