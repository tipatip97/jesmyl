import { useEffect, useState } from "react";
import EvaIcon from "../eva-icon/EvaIcon";
import { keyboardKeyDict } from "./Keyboard.complect";
import {
  KeyboardInputProps,
  KeyboardKeyTranslateCase,
  keyboardKeyTranslateLangs,
  KeyboardKeyTranslateLangs,
} from "./Keyboard.model";
import "./Keyboard.scss";
import { KeyboardInputStorage } from "./KeyboardStorage";

const inputDict: Record<string, KeyboardInputStorage> = {};
let currentInput: KeyboardInputStorage | nil;
let topForceUpdate: () => void = () => {};
let topOnBlur: () => void = () => {};
let topOnFocus: () => void = () => {};

export default function useKeyboard() {
  const [updates, setUpdates] = useState(0);

  const ret = {
    Input: (id: string, props: KeyboardInputProps) => {
      const getNode = () =>
        inputDict[id].node(
          props,
          () => {
            setUpdates(updates + 1);
            topForceUpdate();
          },
          () => {
            currentInput = null;
            topForceUpdate();
            topOnBlur();
            props.onBlur?.();
          },
          () => {
            currentInput = inputDict[id];
            topOnFocus();
          }
        );
      if (inputDict[id]) return getNode();
      inputDict[id] = new KeyboardInputStorage();
      return getNode();
    },
  };
  return ret;
}

export function KEYBOARD_FLASH({
  onBlur,
  onFocus,
}: {
  onBlur: () => void;
  onFocus: () => void;
}) {
  const [updates, setUpdates] = useState(0);
  const [lang, setLang] = useState<KeyboardKeyTranslateLangs>("ru");
  const [keyCase, setKeyCase] = useState<KeyboardKeyTranslateCase>("lower");
  const [isCaps, setIsCaps] = useState(false);
  useKeyboard();
  topForceUpdate = () => setUpdates(updates + 1);
  topOnBlur = () => onBlur();
  topOnFocus = () => onFocus();

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => currentInput?.onMouseDown(event);
    const onMouseUp = () => currentInput?.onMouseUp();
    const onKeyDown = (event: KeyboardEvent) => currentInput?.onKeyDown(event);
    const onKeyUp = (event: KeyboardEvent) => currentInput?.onKeyUp(event);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      className={`keyboard-flash ${currentInput ? "" : "inactive"}`}
      onMouseUp={(event) => event.stopPropagation()}
    >
      {keyboardKeyDict[lang][keyCase].map((line, linei) => {
        return (
          <div key={`line-${linei}`} className="keyboard-flash-line">
            {linei === 3 ? (
              <EvaIcon
                name="arrow-upward-outline"
                className={`keyboard-flash-key shift-key ${
                  isCaps ? "caps-lock" : ""
                }`}
                onClick={() => {
                  if (isCaps) {
                    setKeyCase("lower");
                    setIsCaps(false);
                  } else if (keyCase === "upper") {
                    setIsCaps(true);
                  } else setKeyCase("upper");

                  if (currentInput)
                    currentInput.event.shiftKey =
                      keyCase === "lower" || !isCaps;
                }}
              />
            ) : null}
            {line.map((key, keyi) => {
              return (
                <div
                  key={`key-${keyi}`}
                  className="keyboard-flash-key writable"
                  onClick={() => {
                    currentInput?.type(key);
                    if (!isCaps) setKeyCase("lower");
                  }}
                >
                  {key}
                </div>
              );
            })}
            {linei === 3 ? (
              <EvaIcon
                name="backspace-outline"
                className="keyboard-flash-key"
                onClick={(event) => currentInput?.backspace(event.ctrlKey)}
              />
            ) : null}
          </div>
        );
      })}

      <div className="keyboard-flash-line">
        <EvaIcon
          name="globe-outline"
          className="keyboard-flash-key"
          onClick={() => {
            const langi = keyboardKeyTranslateLangs.indexOf(lang);
            if (langi === keyboardKeyTranslateLangs.length - 1)
              setLang(keyboardKeyTranslateLangs[0]);
            else setLang(keyboardKeyTranslateLangs[langi + 1]);
          }}
        />
        <EvaIcon
          name="corner-up-left-outline"
          className={`keyboard-flash-key ${
            currentInput?.canUndo() ? "" : "disabled"
          }`}
          onClick={() => currentInput?.undo()}
        />
        <EvaIcon
          name="corner-up-right-outline"
          className={`keyboard-flash-key ${
            currentInput?.canRedo() ? "" : "disabled"
          }`}
          onClick={() => currentInput?.redo()}
        />
        <div
          className="keyboard-flash-key space-key"
          onClick={() => currentInput?.type(" ")}
        />
        <EvaIcon
          name="arrowhead-down-outline"
          className="keyboard-flash-key"
          onClick={() => currentInput?.blur()}
        />
      </div>
    </div>
  );
}
