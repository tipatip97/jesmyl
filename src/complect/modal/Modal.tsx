import React, { ReactNode, useState } from "react";
import {
  ModalConfig,
  ModalConfigButton,
  ModalConfigInput,
} from "./Modal.model";
import modalService from "./Modal.service";
import "./Modal.scss";
import mylib from "../my-lib/MyLib";

export default function Modal() {
  const [config, setConfig] = useState(modalService.current());
  const [updates, setUpdates] = useState(0);
  const forceUpdate = () => setUpdates(updates + 1);

  modalService.setConfigSetter((config) => setConfig(config));

  const defTheme = "m-ok";
  const asFunc = (val?: Function | boolean | ReactNode) =>
    typeof val === "function" ? val(config) : val;

  const onActionClick = (
    input: ModalConfigInput | ModalConfigButton,
    onClick: (config: ModalConfig, clickConfig?: ModalConfig) => void,
    clickConfig: ModalConfig
  ) => {
    if (input.modal != null) {
      if (typeof input.onClick !== "function" || input.onClick(clickConfig))
        modalService.reopen(
          typeof input.modal === "function"
            ? mylib.overlap({ title: config.title }, input.modal(clickConfig))
            : input.modal,
            input.value
        );
    } else if (typeof input.confirm === "string") {
      const title = input.confirm.replace("#", "");

      modalService.reopen({
        title: (input as ModalConfigInput).value || input.title || title,
        description: `Ты действительно хочешь ${title[0].toLowerCase()}${title.substr(
          1
        )}?`,
        buttons: [
          {
            title: "да",
            onClick: (inheritConfig: ModalConfig) =>
              onClick(inheritConfig, clickConfig),
          },
          "нет",
        ],
      }, input.value);
    } else onClick(clickConfig);
    if ((input as ModalConfigButton).closable) modalService.close(input.value);
  };

  return config == null ? null : (
    <div
      key="app-modal-window"
      className="app-modal-window"
      onClick={() => modalService.close(null)}
    >
      <div key="app-modal" className="app-modal">
        <div key="app-modal-title" className="app-modal-title">
          <span key="app-modal-title-label" className="app-modal-title-label">
            {config.title}
          </span>
          {config.withoutCloseButton ? null : (
            <span
              key="app-modal-title-close-icon"
              className="app-modal-title-close-icon"
              onClick={() => {
                const res =
                  config.onCloseButtonClick &&
                  config.onCloseButtonClick(config as ModalConfig);
                if (res !== false) {
                  modalService.close(null);
                }
              }}
            >
              ×
            </span>
          )}
        </div>

        <div
          key="app-modal-body"
          className={`app-modal-body${
            modalService.error ? " with-error" : ""
          } ${config.theme || defTheme}`}
        >
          <div
            key="app-modal-body-inner"
            className={`app-modal-body-inner ${config.theme || defTheme}`}
          >
            {config.description && (
              <div
                key="app-modal-description"
                className="app-modal-description"
              >
                <span
                  key="app-modal-description-label"
                  className="app-modal-description-label"
                >
                  {asFunc(config.description)}
                </span>
              </div>
            )}

            {!config.inputs || !config.inputs.length ? null : (
              <div
                key="app-modal-body-input-list"
                className="app-modal-body-input-list"
              >
                {config.inputs.map((input, inputi) => {
                  if (input == null) return null;
                  input.set = (attrn: keyof ModalConfigInput, val) => {
                    if (input.element) input.element.setAttribute(attrn, val);
                    // input[attrn] = val;
                  };
                  input.setVal = (val) => input.set && input.set("value", val);

                  const isTextArea = input.type === "textarea";

                  return (
                    <label
                      {...{
                        key: `app-modal-body-input-list-item=${inputi}`,
                        className: "app-modal-body-input-list-item",
                      }}
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
                      {((props) =>
                        isTextArea ? (
                          <textarea {...props}>{input.value}</textarea>
                        ) : (
                          <input {...props} />
                        ))(
                        mylib.overlap(
                          isTextArea ? { rows: 3 } : {},
                          input,
                          {
                            style: mylib
                              .func(input.style, () => input.style)
                              .call(),
                            key: `app-modal-body-input-list-item-input-${inputi}`,
                            className: `app-modal-body-input-list-item-input${
                              input.className ? ` ${input.className}` : ""
                            }`,
                            onInput: (event: InputEvent) => {
                              input.value = (
                                event.target as HTMLInputElement
                              )?.value;
                              if (input.onInput) {
                                input.onInput(
                                  mylib.overlap({ input, event }, config)
                                );
                              }
                              forceUpdate();
                            },
                            onClick: (event: Event) => {
                              try {
                                const clickConfig: ModalConfig = mylib.overlap(
                                  { input, event },
                                  config
                                );

                                const onClick = () => {
                                  if (input.onClick) {
                                    input.onClick(clickConfig);
                                    forceUpdate();
                                  }
                                };

                                onActionClick(input, onClick, clickConfig);
                              } catch (error) {
                                // mylib.dcconsl(error.stack);
                                throw error;
                              }
                            },
                            title: null,
                            confirm: null,
                            modal: null,
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
                          },
                          {
                            disabled: asFunc(input.disabled),
                            hidden: asFunc(input.hidden),
                            checked: asFunc(input.checked),
                            min: asFunc(input.min),
                            max: asFunc(input.max),
                            value: asFunc(input.value),
                          }
                        )
                      )}
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div
          key="app-modal-footer"
          className={`app-modal-footer ${config.theme || defTheme}`}
        >
          {modalService.error && (
            <div
              key="app-modal-footer-error"
              className="app-modal-footer-error"
            >
              {modalService.error}
            </div>
          )}
          {!config.buttons || !config.buttons.length ? null : (
            <div
              key="app-modal-footer-button-list"
              className={`app-modal-footer-button-list ${
                config.theme || defTheme
              }`}
            >
              <div
                key="app-modal-footer-button-list-inner"
                className={`app-modal-footer-button-list-inner ${
                  config.theme || defTheme
                }`}
              >
                {config.buttons.map((button, buttoni) => {
                  if (button == null) return null;
                  if (typeof button === "string") button = { title: button };

                  return (
                    <button
                      {...mylib.overlap({}, button, {
                        key: `app-modal-footer-button-list-item${buttoni}`,
                        className: `app-modal-footer-button-list-item${
                          button.className ? ` ${button.className}` : ""
                        }`,
                        onClick: (event: Event) => {
                          if (typeof button === "string") return;

                          let isClose =
                            config.closeOnClick !== false &&
                            button.closable !== false;
                          const clickConfig: ModalConfig = mylib.overlap(
                            { button, event },
                            config,
                            { dontClose: () => (isClose = false) }
                          );

                          const onClick = () => {
                            if (typeof button === "string") return;

                            if (button.onClick) {
                              button.onClick(clickConfig);

                              if (isClose) modalService.close(button.value);
                            } else modalService.close(button.value);
                          };

                          onActionClick(button, onClick, clickConfig);
                        },
                        title: null,
                        modal: null,
                        confirm: null,
                      })}
                      disabled={asFunc(button.disabled)}
                      hidden={asFunc(button.hidden)}
                    >
                      {asFunc(button.title)}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
