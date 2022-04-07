import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { riseUpModalUpdates } from "../../components/apps/cm/Cm.store";
import mylib from "../my-lib/MyLib";
import {
  ModalConfig,
  ModalConfigInput,
  TheModalInputProps,
} from "./Modal.model";
import modalService from "./Modal.service";
import { onActionClick } from "./TheModal";

export default function ModalInput(topProps: TheModalInputProps) {
  let input: Partial<ModalConfigInput>, inputi: number | string | und;

  if (Array.isArray(topProps.config)) [input, inputi] = topProps.config;
  else [input, inputi] = [topProps.config, 0];

  const dispatch = useDispatch();
  const forceUpdate = () => dispatch(riseUpModalUpdates());
  const config = modalService.current();

  if (input == null) return null;
  input.set = (attrn: keyof ModalConfigInput, val) => {
    if (input.element) input.element.setAttribute(attrn, val);
    // input[attrn] = val;
  };
  input.setVal = (val) => input.set && input.set("value", val);
  const asFunc = (val?: Function | boolean | ReactNode) =>
    typeof val === "function" ? val(config) : val;

  const isTextArea = input.type === "textarea";
  const props: Record<string, Function | string> = mylib.overlap(
    isTextArea ? { rows: 3 } : {},
    {
      key: `app-modal-body-input-list-item-input-${inputi}`,
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
        forceUpdate();
      },
      onClick: (event: Event) => {
        try {
          const clickConfig: ModalConfig = mylib.overlap(
            { input, event },
            props
          );

          const onClick = () => {
            if (input.onClick) {
              input.onClick(clickConfig);
              forceUpdate();
            }
          };

          onActionClick(input, onClick, clickConfig, config as Partial<ModalConfig>);
        } catch (error) {
          // mylib.dcconsl(error.stack);
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

  return (
    <label
      key={`app-modal-body-input-list-item=${inputi}`}
      className="app-modal-body-input-list-item"
      hidden={asFunc(input.hidden)}
    >
      {input.title && (
        <span
          key={`app-modal-body-input-list-item-title=${inputi}`}
          className="app-modal-body-input-list-item-title"
        >
          {asFunc(input.title)}
        </span>
      )}
      {isTextArea ? (
        <textarea {...props}>{input.value}</textarea>
      ) : (
        <input {...props} />
      )}
    </label>
  );
}
