import React, { ReactNode, useEffect, useState } from "react";
import EvaIcon, { EvaIconName } from "../eva-icon/EvaIcon";
import { keyboardKeyDict } from "./Keyboard.complect";
import { KeyboardInputProps } from "./Keyboard.model";
import "./Keyboard.scss";
import { KeyboardInputStorage } from "./KeyboardStorage";

const inputDict: Record<string, KeyboardInputStorage> = {};
let currentInput: KeyboardInputStorage;
let topForceUpdate: () => void = () => {};
let topOnBlur: () => void = () => {};
let topOnFocus: (currentInput: KeyboardInputStorage | nil) => void = () => {};

export default function useKeyboard(): (
  id: string,
  props: KeyboardInputProps
) => [
  ReactNode,
  (value: string, isRemember?: boolean) => void,
  (id: string) => void
] {
  const [updates, setUpdates] = useState(0);

  return (id: string, props: KeyboardInputProps) => {
    let localInput: KeyboardInputStorage;
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
        }
      );

    let inputNode;
    localInput = inputDict[id];

    if (localInput) inputNode = getNode();
    else {
      localInput = inputDict[id] = new KeyboardInputStorage(props.initialValue);
      inputNode = getNode();
    }

    return [
      inputNode,
      (value: string, isRemember = false) => {
        localInput.replaceAll(value, isRemember);
      },
      (id: string) => {
        delete inputDict[id];
      },
    ];
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

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      currentInput?.blur();
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const typeKeyNode = (
    className: string,
    key: string,
    iconName?: EvaIconName
  ) => {
    return (
      <div
        className={`keyboard-flash-key ${className} ${
          keyInFix === key ? "key-in-fix" : ""
        }`}
        onMouseUp={() => currentInput.write(key)}
        onMouseDown={() => setKeyInFix(key)}
        onMouseOver={() => keyInFix && setKeyInFix(key)}
        onTouchStart={(event) => {
          event.stopPropagation();
          setKeyInFix(key);
        }}
      >
        {iconName ? (
          <EvaIcon name={iconName} className="key-button" />
        ) : (
          <div>{key}</div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`keyboard-flash ${currentInput?.isFocused ? "active" : ""}`}
      onMouseDown={(event) => event.stopPropagation()}
      onTouchEnd={(event) => {
        event.stopPropagation();
        setKeyInFix(null);
      }}
      onMouseUp={(event) => {
        event.stopPropagation();
        setKeyInFix(null);
      }}
    >
      {currentInput ? (
        <>
          {keyboardKeyDict[currentInput.currentLanguage][
            currentInput.event.shiftKey ? "upper" : "lower"
          ].map((line, linei) => {
            return (
              <div key={`line-${linei}`} className="keyboard-flash-line">
                {linei === 3 ? (
                  <div
                    className={`keyboard-flash-key shift-key ${
                      currentInput.isCapsLock ? "caps-lock" : ""
                    }`}
                  >
                    <EvaIcon
                      name="arrow-upward-outline"
                      className="key-button"
                      onClick={() => currentInput.switchCaps()}
                      onContextMenu={(event) => {
                        event.preventDefault();
                        currentInput.switchCtrlKey();
                      }}
                    />
                    {currentInput.event.ctrlKey ? (
                      <div className="is-control-key-label">ctrl</div>
                    ) : null}
                  </div>
                ) : null}
                {line.map((key, keyi) => {
                  return (
                    <React.Fragment key={`key-${keyi}`}>
                      {typeKeyNode("writable", key)}
                    </React.Fragment>
                  );
                })}
                {linei === 3 ? (
                  <div className="keyboard-flash-key">
                    <EvaIcon
                      name="backspace-outline"
                      className="key-button"
                      onClick={(event) => currentInput.backspace(event)}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}

          <div className="keyboard-flash-line bottom-line">
            <div className="keyboard-flash-key">
              <EvaIcon
                name="corner-up-left-outline"
                className={`key-button ${
                  currentInput.canUndo() ? "" : "disabled"
                }`}
                onClick={() => currentInput.undo()}
              />
            </div>
            <div className="keyboard-flash-key">
              <EvaIcon
                name="corner-up-right-outline"
                className={`key-button ${
                  currentInput.canRedo() ? "" : "disabled"
                }`}
                onClick={() => currentInput.redo()}
              />
            </div>
            {typeKeyNode("space-key", " ")}
            <div className="keyboard-flash-key">
              <EvaIcon
                name="globe-outline"
                className="key-button"
                onClick={() => currentInput.switchLanguage()}
              />
            </div>
            {currentInput.isMultiline ? (
              typeKeyNode("enter", "\n", "corner-down-left-outline")
            ) : (
              <div className="keyboard-flash-key">
                <EvaIcon
                  name="arrowhead-down-outline"
                  className="key-button"
                  onClick={() => currentInput.blur()}
                />
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
