import React, { ReactNode, useEffect, useState } from "react";
import propsOfClicker from "../clicker/propsOfClicker";
import { isIPhone } from "../device-differences";
import EvaIcon, { EvaIconName } from "../eva-icon/EvaIcon";
import {
  keyboardKeyDict,
  keyboardNumberScreenLines,
} from "./Keyboard.complect";
import { KeyboardInputProps } from "./Keyboard.model";
import "./Keyboard.scss";
import { KeyboardInputStorage } from "./KeyboardStorage";

const inputDict: Record<string, KeyboardInputStorage> = {};
let currentInput: KeyboardInputStorage;
let topForceUpdate: () => void = () => { };
let topOnBlur: () => void = () => { };
let topOnFocus: (currentInput: KeyboardInputStorage | nil) => void = () => { };

export default function useKeyboard() {
  const [updates, setUpdates] = useState(0);

  return (id: string, props: KeyboardInputProps) => {
    let localInput: KeyboardInputStorage;
    let nativeInputNode: HTMLInputElement | HTMLTextAreaElement;

    const getNode = () =>
      inputDict[id].node(
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
          currentInput?.blur(inputDict[id] !== currentInput);
          currentInput = inputDict[id];
          topOnFocus(currentInput);
          props.onFocus?.();
        }
      );

    let inputNode;
    localInput = inputDict[id];
    let actions: {
      replaceAll: (value: string, isRemember: boolean, isInvokeOnInputEvent: boolean) => void;
      value: () => string;
      write: (value: string, isRememberAsPart?: boolean) => void;
      focus: () => void;
    } = {} as never;

    if (isIPhone) {
      if (localInput) inputNode = getNode();
      else {
        localInput = inputDict[id] = new KeyboardInputStorage(props.initialValue);
        inputNode = getNode();
      }
      actions = {
        replaceAll: localInput.replaceAll,
        value: () => localInput.value,
        write: localInput.write,
        focus: localInput.focus,
      };
    } else {
      const nodeProps = {
        ...props,
        defaultValue: props.initialValue,
        type: props.type,
        onInput: props.onInput && ((event: any) => props.onInput?.(event.target?.value, '')),
        onChange: props.onChange && ((event: any) => props.onChange?.(event.target?.value, '')),
        onPaste: props.onPaste && (async () => props.onPaste?.(await navigator.clipboard.readText())),
      };

      inputNode = <div className={`input-keyboard-flash-controlled input ${props.multiline ? 'multiline' : ''}`
    }>
    {
      props.multiline
        ? <textarea {...nodeProps}
          className="native-input"
          ref={(el) => {
            if (el) {
              nativeInputNode = el;
              el.rows = el.value.split('\n').length;
            }
          }}
        />
        : <input {...nodeProps} className="native-input" ref={(el) => el && (nativeInputNode = el)} />
    }
      </div >;

    actions = {
      replaceAll: (value) => nativeInputNode.value = value,
      value: () => nativeInputNode?.value || '',
      write: (val) => nativeInputNode.value += val,
      focus: () => nativeInputNode.focus(),
    };
  }

  return {
    node: inputNode,
    value: (
      value?: string,
      isRemember = false,
      isInvokeOnInputEvent = true
    ) => {
      if (value !== undefined)
        actions.replaceAll(value, isRemember, isInvokeOnInputEvent);
      return actions.value();
    },
    focus: () => actions.focus(),
    write: (value: string, isRememberAsPart?: boolean) => actions.write(value, isRememberAsPart),
    remove: () => {
      delete inputDict[id];
    },
  };
};
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
  useKeyboard();
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
        className={`keyboard-flash-key ${className} ${keyInFix === key ? "key-in-fix" : ""
          }`}
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
      className={`keyboard-flash ${currentInput?.isFocused ? "active" : ""} ${moreClosed ? "" : "more-open"
        }`}
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
                currentInput?.canUndo() ? "full-width" : "full-width disabled",
                "UNDO",
                "corner-up-left-outline",
                () => currentInput.undo()
              )}
              {keyNode(
                currentInput?.canRedo() ? "full-width" : "full-width disabled",
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
                currentInput?.canUndo()
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
                        currentInput?.canRedo() ? "" : " disabled",
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
