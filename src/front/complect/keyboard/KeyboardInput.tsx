import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import propsOfClicker from "../clicker/propsOfClicker";
import EvaIcon, { EvaIconName } from "../eva-icon/EvaIcon";
import {
  keyboardKeyDict,
  keyboardNumberScreenLines
} from "./Keyboard.complect";
import { KeyboardInputProps } from "./Keyboard.model";
import "./Keyboard.scss";
import { KeyboardInputStorage } from "./KeyboardStorage";

let currentInput: KeyboardInputStorage;
let topForceUpdate: () => void = () => { };
let topOnBlur: () => void = () => { };
let topOnFocus: (currentInput: KeyboardInputStorage | nil) => void = () => { };
const isUseNativeKeyboardSelector = (state: RootState) => state.index.isUseNativeKeyboard;

export default function KeyboardInput(props: KeyboardInputProps) {
  const input = useMemo(() => new KeyboardInputStorage(), []);
  const isNative = useSelector(isUseNativeKeyboardSelector);
  const [updates, setUpdates] = useState(0);
  const nativeRef = useMemo<{ ref: HTMLTextAreaElement | null }>(() => ({ ref: null }), []);

  useEffect(() => {
    !isNative && props.value && input.replaceAll(props.value, false, true);
  }, [props.value, input, isNative]);

  if (isNative) {
    const {
      className,
      multiline,
      onInput,
      onChange,
      onPaste,
      type,
      closeButton,
      setIsUnknownSymbols,
      mapChar,
      preferLanguage,
      ...otherProps
    } = props;
    const invoke = (callback: (value: string, prev: string | null) => void, text: string) => {
      const prev = type === 'number' ? nativeRef.ref?.value.replace(/\D+/g, '') || '0' : nativeRef.ref?.value;
      const value = type === 'number' ? text.replace(/\D+/g, '') || '0' : text;
      callback(value, prev ?? null);
    };

    return <div className={`input-keyboard-flash-controlled input${multiline ? ' multiline' : ''} ${className || ''}`}>
      <textarea
        {...otherProps}
        className="native-input"
        onInput={onInput && ((event: any) => {
          invoke(onInput, event.target.value);
        })}
        onChange={onChange && ((event: any) => {
          invoke(onChange, event.target.value);
        })}
        onPaste={onPaste && (async () => {
          invoke(onPaste, await navigator.clipboard.readText());
        })}
        ref={el => {
          if (el) {
            if (multiline) el.rows = el.value.split('\n').length;
            else el.rows = 1;
            nativeRef.ref = el;
          }
        }}
      />
      {nativeRef.ref?.value && <div className="icon-button-container">
        <EvaIcon
          name="close"
          className="icon-button close-button"
          onMouseDown={() => {
            setTimeout(() => nativeRef.ref?.focus());

            if (nativeRef.ref) {
              const val = type === 'number' ? '0' : '';
              onChange?.(val, nativeRef.ref.value || '');
              onInput?.(val, nativeRef.ref.value || '');
              nativeRef.ref.value = val;
            }
          }}
        />
      </div>}
    </div>;
  }

  return input.node(
    props,
    () => {
      setUpdates(updates + 1);
      topForceUpdate();
    },
    () => {
      currentInput?.blur();
      topForceUpdate();
      topOnBlur();
      props.onBlur?.();
    },
    () => {
      currentInput?.blur(input !== currentInput);
      currentInput = input;
      topOnFocus(currentInput);
      props.onFocus?.();
    }
  );
}

export function KEYBOARD_FLASH({
  onBlur,
  onFocus,
}: {
  onBlur: () => void;
  onFocus: (currentInput: KeyboardInputStorage | nil) => void;
}) {
  const [updates, setUpdates] = useState(0);
  const [moreClosed, setMoreClosed] = useState(true);
  const [keyInFix, setKeyInFix] = useState<string | null>(null);
  const isNative = useSelector(isUseNativeKeyboardSelector);
  topForceUpdate = () => setUpdates(updates + 1);
  topOnBlur = () => onBlur();
  topOnFocus = () => onFocus(currentInput);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      event.stopPropagation();
      currentInput?.onOverflowMouseDown();
    };
    const onMouseUp = () => {
      currentInput?.onOverflowMouseUp();
      setKeyInFix(null);
    };
    const onKeyDown = (event: KeyboardEvent) =>
      currentInput?.onOverflowKeyDown(event);
    const onKeyUp = () => currentInput?.onOverflowKeyUp();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      currentInput?.blur();
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  if (isNative) return null;

  const keyNode = (
    className: string,
    key: string,
    iconName?: EvaIconName,
    onMouseUp?: React.MouseEventHandler<HTMLDivElement>,
    children?: ReactNode,
    onContextMenu?: React.MouseEventHandler<HTMLOrSVGElement>,
    onTouchStart?: React.TouchEventHandler<HTMLDivElement>
  ) => {
    return (
      <div
        className={`keyboard-flash-key ${className} ${keyInFix === key ? "key-in-fix" : ""}`}
        onMouseUp={onMouseUp || (() => currentInput.write(key))}
        onMouseDown={(event) => {
          event.stopPropagation();
          setKeyInFix(key);
        }}
        onMouseOver={() => keyInFix && setKeyInFix(key)}
        onTouchStart={(event) => {
          event.stopPropagation();
          setKeyInFix(key);
          onTouchStart?.(event);
        }}
        {...propsOfClicker({ onCtxMenu: onContextMenu })}
      >
        {children}
        {iconName ? (
          <EvaIcon name={iconName} className="key-button" />
        ) : (
          <div>{key}</div>
        )}
      </div >
    );
  };

  return (
    <div
      className={`keyboard-flash ${currentInput?.isFocused ? "active" : ""} ${moreClosed ? "" : "more-open"}`}
      onMouseDown={(event) => {
        event.stopPropagation();
        setKeyInFix("CLOSE-MORE");
      }}
      onTouchEnd={(event) => {
        event.stopPropagation();
        setKeyInFix(null);
        currentInput.onTouchNavigationEnd(event);
      }}
      onTouchMove={(event) => {
        currentInput.onTouchNavigationMove(
          event,
          event.targetTouches[0].clientX
        );
      }}
      onMouseUp={(event) => {
        event.stopPropagation();
        setKeyInFix(null);
        !moreClosed && setMoreClosed(true);
      }}
    >
      {currentInput ? (
        currentInput.type === "number" ? (
          <>
            {keyboardNumberScreenLines.map((line, linei) => {
              return (
                <div
                  key={`line-nums-${linei}`}
                  className="keyboard-flash-line number-type"
                >
                  {line.map((key, keyi) => {
                    return (
                      <React.Fragment key={`key-num-${keyi}`}>
                        {keyNode("writable", key)}
                      </React.Fragment>
                    );
                  })}
                </div>
              );
            })}
            <div className="keyboard-flash-line bottom-line">
              {keyNode(
                currentInput.canUndo() ? "full-width" : "full-width disabled",
                "UNDO",
                "corner-up-left-outline",
                () => currentInput.undo()
              )}
              {keyNode(
                currentInput.canRedo() ? "full-width" : "full-width disabled",
                "REDO",
                "corner-up-right-outline",
                () => currentInput.redo()
              )}
              {keyNode("writable self-width", "0")}
              {keyNode(
                "backspace full-width",
                "BACKSPACE",
                "backspace-outline",
                (event) => currentInput.backspace(event)
              )}
              {keyNode("full-width", "BLUR", "arrowhead-down-outline", () =>
                currentInput.blur()
              )}
            </div>
          </>
        ) : (
          <>
            {keyboardKeyDict[currentInput.currentLanguage][
              currentInput.event.shiftKey ? "upper" : "lower"
            ].map((line, linei) => {
              return (
                <div key={`line-${linei}`} className="keyboard-flash-line">
                  {linei === 3
                    ? keyNode(
                      `shift-key ${currentInput.isCapsLock ? "caps-lock" : ""
                      } ${currentInput.event.ctrlKey
                        ? "is-control-key-label"
                        : ""
                      }`,
                      "SHIFT",
                      "arrow-upward-outline",
                      () => currentInput.switchCaps(),
                      null,
                      (event) => {
                        event.preventDefault();
                        currentInput.switchCtrlKey();
                      },
                      (event) =>
                        currentInput.onTouchNavigationStart(
                          "select",
                          event.targetTouches[0].clientX
                        )
                    )
                    : null}
                  {line.map((key, keyi) => {
                    return (
                      <React.Fragment key={`key-${keyi}`}>
                        {keyNode("writable", key)}
                      </React.Fragment>
                    );
                  })}
                  {linei === 3
                    ? keyNode(
                      "backspace",
                      "BACKSPACE",
                      "backspace-outline",
                      (event) => currentInput.backspace(event),
                      null,
                      undefined,
                      (event) =>
                        currentInput.onTouchNavigationStart(
                          "delete",
                          event.targetTouches[0].clientX
                        )
                    )
                    : null}
                </div>
              );
            })}

            <div className="keyboard-flash-line bottom-line">
              {keyNode(
                currentInput.canUndo()
                  ? "undo-action"
                  : "undo-action disabled",
                "UNDO",
                "corner-up-left-outline",
                (event) => {
                  event.stopPropagation();
                  setKeyInFix(null);
                  currentInput.undo();
                }
              )}
              {keyNode(
                "more-box",
                "CLOSE-MORE",
                moreClosed ? "bulb-outline" : "close-outline",
                () => setMoreClosed(!moreClosed),
                moreClosed ? null : (
                  <div
                    className="keyboard-flash-key-more-box-list no-scrollbar"
                    ref={(elem) =>
                      elem &&
                      keyInFix === null &&
                      (elem.scrollTop = window.innerHeight)
                    }
                  >
                    <div className="keyboard-flash-key-more-box-inner">
                      {keyNode(
                        "",
                        "WORD-SELECT-MODE",
                        currentInput.event.ctrlKey
                          ? "flash-off-outline"
                          : "flash-outline",
                        () => currentInput.switchCtrlKey(),
                        <span className="key-description">Ctrl клавиша</span>
                      )}
                      {currentInput.nullOrCanSelectAll() &&
                        keyNode(
                          "",
                          "SELECT_ALL",
                          "text-outline",
                          () => currentInput.selectAll(),
                          <span className="key-description">Выделить всё</span>
                        )}
                      {currentInput.nullOrCanCopy() &&
                        keyNode(
                          "",
                          "COPY",
                          "copy-outline",
                          () => currentInput.copy(),
                          <span className="key-description">Копировать</span>
                        )}
                      {currentInput.nullOrCanPaste() &&
                        keyNode(
                          "",
                          "PASTE",
                          "clipboard-outline",
                          () => currentInput.paste(),
                          <span className="key-description">Вставить</span>
                        )}
                      {keyNode(
                        currentInput.canRedo() ? "" : " disabled",
                        "REDO",
                        "corner-up-right-outline",
                        (event) => {
                          event.stopPropagation();
                          setKeyInFix(null);
                          currentInput.redo();
                        },
                        <span className="key-description">Вернуть</span>
                      )}
                    </div>
                  </div>
                )
              )}
              {keyNode(
                "space-key",
                " ",
                undefined,
                undefined,
                null,
                undefined,
                (event) =>
                  currentInput.onTouchNavigationStart(
                    "navigate",
                    event.targetTouches[0].clientX
                  )
              )}
              {keyNode(
                "",
                "LANG",
                "globe-outline",
                () => currentInput.switchLanguage(),
                null
              )}
              {currentInput.isMultiline
                ? keyNode("enter", "\n", "corner-down-left-outline")
                : keyNode("", "BLUR", "arrowhead-down-outline", () =>
                  currentInput.blur()
                )}
            </div>
          </>
        )
      ) : null}
    </div>
  );
}
