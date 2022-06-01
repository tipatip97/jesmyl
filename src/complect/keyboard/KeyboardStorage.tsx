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
  private readonly viewEmptyLine = [""];

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
      if (this.initialValue)
        setTimeout(this.replaceAll, 0, this.initialValue || "", false);
    }

    return (
      <div
        className={`input-keyboard-flash-controlled input ${
          props.className || ""
        } ${this.valueCharLines.length === 0 ? "no-lines" : ""} ${
          this.isFocused ? "focused" : ""
        } ${this.value ? "" : "empty-input"} ${
          props.multiline ? "multiline" : ""
        } ${props.closeButton !== false ? "" : "without-close-button"}`}
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
              <div onMouseDown={this.onPasteBeforeButton}>Вставить перед</div>
            )}
          </div>
        )}
      </div>
    );
  }

  valueCharLinesNodeMap = (line: string[], linei: number) => {
    const charLinei = this.viewFlowChari;

    return (
      <div
        key={`line ${linei}`}
        className={`input-keyboard-flash-controlled-char-list-line ${
          this.isZeroCursorOn(charLinei) ? "zero-cursor" : ""
        }`}
        onMouseDown={this.onCharMouseDown.bind(this, charLinei + line.length)}
        onMouseOver={this.onCharMouseOver.bind(this, charLinei + line.length)}
        onMouseUp={this.onCharMouseUp.bind(this, charLinei + line.length)}
      >
        {(line.length ? line : this.viewEmptyLine).map(
          this.valueCharLineNodeMap.bind(this, linei)
        )}
      </div>
    );
  };

  valueCharLineNodeMap = (linei: number, letter: string, letteri: number) => {
    const chari = this.viewFlowChari - (letteri ? 1 : 0);
    this.viewFlowChari += letteri ? 1 : 2;

    return (
      <span
        key={`node-${letteri}`}
        className={`input-keyboard-flash-controlled-char ${
          this.isCursorOn(chari) ? "cursor" : ""
        } ${this.isSelectedChar(chari) ? "selected" : ""}`}
        ref={(element) => {
          this.charElementReference(element, linei, chari);
        }}
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

  nullOrContextMenu() {
    console.log(this.isFocused && (this.isSelected || this.isContextOpen), '===', this.isFocused, this.isSelected, this.isContextOpen);
    return this.isFocused && (this.isSelected || this.isContextOpen)
      ? true
      : null;
  }

  nullOrCanSelectAll() {
    return (this.selected[0] === 0 &&
      this.selected[1] === this.valueChars.length) ||
      (this.selected[0] === this.valueChars.length && this.selected[1] === 0)
      ? null
      : true;
  }

  nullOrCanCopy() {
    return this.isContextOpen ? null : true;
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
