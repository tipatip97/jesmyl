import { ReactNode } from "react";
import useKeyboard from "../keyboard/useKeyboard";
import mylib from "../my-lib/MyLib";
import { onActionClick } from "./Modal";
import {
  ModalConfig,
  ModalConfigInput,
  TheModalInputProps,
} from "./Modal.model";
import modalService from "./Modal.service";

export default function ModalInput(topProps: TheModalInputProps) {
  let input: Partial<ModalConfigInput>, uniq: string;
  const aboutInput = useKeyboard();

  if (Array.isArray(topProps.config)) [input, uniq = ""] = topProps.config;
  else [input, uniq] = [topProps.config, ""];

  const config = modalService.current();

  if (input == null) return null;
  input.set = (attrn: keyof ModalConfigInput, val) => {
    if (input.element) input.element.setAttribute(attrn, val);
    // input[attrn] = val;
  };
  input.setVal = (val) => input.set && input.set("value", val);
  const asFunc = (val?: Function | boolean | ReactNode, alt?: any) =>
    typeof val === "function" ? val(config) : alt !== undefined ? alt : val;

  const isTextArea = input.type === "textarea";
  const props: Record<string, Function | string> = mylib.overlap(
    isTextArea ? { rows: 3 } : {},
    {
      type: asFunc(input.type),
      value: asFunc(input.value),
      style: asFunc(input.style),
      disabled: asFunc(input.disabled),
      hidden: asFunc(input.hidden),
      checked: asFunc(input.checked),
      placeholder: asFunc(input.placeholder),
      min: asFunc(input.min),
      max: asFunc(input.max),
      className:
        asFunc(input.className) + " app-modal-body-input-list-item-input",
      onInput: (event: InputEvent) => {
        input.value = (event.target as HTMLInputElement)?.value;
        if (input.onInput) {
          input.onInput(mylib.overlap({ input, event }, props));
        }
        topProps.forceUpdate();
      },
      onClick: (event: Event) => {
        try {
          const clickConfig: ModalConfig = mylib.overlap(
            { input, event },
            props
          );
          if (input.closable === false) event.stopPropagation();

          const onClick = () => {
            if (input.onClick) {
              input.onClick(clickConfig);
              topProps.forceUpdate();
            }
          };

          onActionClick(
            input,
            onClick,
            clickConfig,
            config as Partial<ModalConfig>
          );
        } catch (error) {
          throw error;
        }
      },
      ref: (element: HTMLInputElement) => {
        // if (
        //   element &&
        //   focusedElement == null &&
        //   (config.focusOn === inputi ||
        //     (config.focusOn == null && inputi === 0))
        // ) {
        //   focusedElement = element;
        //   element.focus();
        //   element.select();
        // }
        if (element) input.element = element;
        // input.ref && input.ref(element);
      },
    }
  );

  const [inputNode] = aboutInput(uniq, { ...props, multiline: isTextArea });

  return (
    <label
      className="app-modal-body-input-list-item pointer"
      hidden={asFunc(input.hidden)}
    >
      {input.title && (
        <span className="app-modal-body-input-list-item-title">
          {asFunc(input.title)}
        </span>
      )}
      {inputNode}
    </label>
  );
}
