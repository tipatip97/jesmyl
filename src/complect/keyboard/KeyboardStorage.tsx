import EvaIcon from "../eva-icon/EvaIcon";
import { KeyboardStorageCallbacks } from "./complect/F.Callbacks";
import {
  KeyboardInputProps,
  keyboardKeyTranslateLangs,
  KeyboardKeyTranslateLanguage,
} from "./Keyboard.model";

export class KeyboardInputStorage extends KeyboardStorageCallbacks {
  isNeedValuesInitialize = true;
  initialValue?: string;
  currentLanguage: KeyboardKeyTranslateLanguage = "ru";
  private viewFlowChari: number = 0;

  constructor(initialValue?: string) {
    super();
    this.initialValue = initialValue;
  }

  node(
    props: KeyboardInputProps,
    forceUpdater: () => void,
    onBlur: () => void,
    onFocus: () => void
  ) {
    this.offsetElements = [];
    this.onChange = props.onChange;
    this.onInput = props.onInput;
    this.onFocus = onFocus;
    this.forceUpdate = forceUpdater;
    this.onBlur = onBlur;
    this.isMultiline = props.multiline;
    this.type = props.type;
    this.setIsUnknownSymbols =
      props.setIsUnknownSymbols || this.dafaultSetIsUnknownSymbols;

    this.viewFlowChari = 0;

    if (this.isNeedValuesInitialize) {
      this.isNeedValuesInitialize = false;

      if (props.preferLanguage) this.currentLanguage = props.preferLanguage;
      this.isHiddenPassword = this.type === "password";

      setTimeout(() => {
        let isForceUpdated = false;

        if (this.initialValue) {
          this.replaceAll(this.initialValue || "", false);
          isForceUpdated = true;
        }

        if (props.autofocus) {
          this.focus(isForceUpdated);
          isForceUpdated = true;
        }
      });
    }

    return (
      <div
        className={`input-keyboard-flash-controlled input ${
          props.className || ""
        } ${this.valueCharLines.length === 0 ? "no-lines" : ""} ${
          this.isFocused ? "focused" : ""
        } ${this.value ? "" : "empty-input"} ${
          props.multiline ? "multiline" : ""
        } ${props.closeButton !== false ? "" : "without-close-button"} ${
          this.touchNavigationMode || this.isOverflowKeyDown
            ? "stable-cursor-mode"
            : ""
        }`}
        placeholder={props.placeholder}
        onMouseDown={this.onFlashMouseDown}
        onClick={this.onStopPropagation}
      >
        <div
          className="input-keyboard-flash-controlled-char-list"
          ref={this.charListElementRef}
          onContextMenu={this.onFlashContextMenu}
        >
          <div className={`input-keyboard-flash-controlled-char-list-inner`}>
            {this.valueCharLines.map(this.valueCharLinesNodeMap)}
          </div>
        </div>
        <div className="icon-button-container">
          {this.type === "password" ? (
            <EvaIcon
              name={this.isHiddenPassword ? "eye-outline" : "eye-off-outline"}
              className="icon-button eye-button"
              onMouseDown={this.onPasswordEyeButton}
            />
          ) : (
            <EvaIcon
              name="close"
              className="icon-button close-button"
              onMouseDown={this.onClearButton.bind(this)}
            />
          )}
        </div>
        {this.nullOrContextMenu() && (
          <div className="menu-actions-with-selected">
            {this.nullOrCanSelectAll() && (
              <div onMouseDown={this.onSelectAllButton}>Выделить всё</div>
            )}
            {this.nullOrCanCopy() && (
              <div onMouseDown={this.onCopyButton}>Копировать</div>
            )}
            {this.nullOrCanPaste() && (
              <div onMouseDown={this.onPasteButton}>Вставить</div>
            )}
            {this.nullOrCanPasteBefore() && (
              <div onMouseDown={this.onPasteBeforeButton}>Вставить перёд</div>
            )}
          </div>
        )}
      </div>
    );
  }

  valueCharLinesNodeMap = (line: string[], linei: number) => {
    const lineNode = (
      <div
        key={`line ${linei}`}
        className={`input-keyboard-flash-controlled-char-list-line ${
          this.isZeroCursorOn(this.viewFlowChari) ? "zero-cursor" : ""
        }`}
        onMouseDown={this.onCharMouseDown.bind(
          this,
          this.viewFlowChari + line.length
        )}
        onMouseOver={this.onCharMouseOver.bind(
          this,
          this.viewFlowChari + line.length
        )}
        onMouseUp={this.onCharMouseUp.bind(
          this,
          this.viewFlowChari + line.length
        )}
      >
        {line.map(this.valueCharLineNodeMap.bind(this, linei))}
      </div>
    );
    this.viewFlowChari++;
    return lineNode;
  };

  valueCharLineNodeMap = (linei: number, letter: string, letteri: number) => {
    const chari = this.viewFlowChari++;

    return (
      <span
        key={`node-${letteri}`}
        className={`input-keyboard-flash-controlled-char ${
          this.isCursorOn(chari) ? "cursor" : ""
        } ${this.isSelectedChar(chari) ? "selected" : ""}`}
        ref={this.charElementReference.bind(this, linei, chari)}
        onContextMenu={this.onCharContextMenu.bind(this, chari)}
        onDoubleClick={this.onCharDoubleClick.bind(this, chari)}
        onMouseDown={this.onCharMouseDown.bind(this, chari)}
        onMouseOver={this.onCharMouseOver.bind(this, chari)}
        onMouseUp={this.onCharMouseUp.bind(this, chari)}
      >
        {this.isHiddenPassword ? "●" : letter}
      </span>
    );
  };

  charElementReference(
    linei: number,
    chari: number,
    element: HTMLSpanElement | nil
  ) {
    if (element) {
      if (this.isSelected) {
        if (this.selected[1] === chari) {
          this.focusedCharItem = element;
          this.focusedLinei = linei;
        }
      } else if (this.cursorPosition - 1 === chari) {
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

  nullOrContextMenu() {
    return this.isFocused &&
      (this.isSelected || this.isContextOpen) &&
      this.touchNavigationMode !== "delete"
      ? true
      : null;
  }

  nullOrCanSelectAll() {
    return !this.value ||
      (this.isSelected &&
        ((this.selected[0] === 0 &&
          this.selected[1] === this.valueChars.length) ||
          (this.selected[0] === this.valueChars.length &&
            this.selected[1] === 0)))
      ? null
      : true;
  }

  nullOrCanCopy() {
    return this.isSelected ? true : null;
  }

  nullOrCanPaste() {
    return true;
  }

  nullOrCanPasteBefore() {
    return this.isContextOpen ? null : true;
  }

  switchLanguage() {
    const langi = keyboardKeyTranslateLangs.indexOf(this.currentLanguage);
    if (langi === keyboardKeyTranslateLangs.length - 1)
      this.currentLanguage = keyboardKeyTranslateLangs[0];
    else this.currentLanguage = keyboardKeyTranslateLangs[langi + 1];

    this.forceUpdate();
  }
}
