import React, { ReactNode, useState } from "react";
import {
  ModalConfig,
  ModalConfigButton,
  ModalConfigInput,
  ModalFixed,
} from "./Modal.model";
import modalService from "./Modal.service";
import "./Modal.scss";
import mylib from "../my-lib/MyLib";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TheModalInput } from "./TheModalInput";
import { TheModalButton } from "./TheModalButton";


export const onActionClick = (
  input: ModalConfigInput | ModalConfigButton,
  onClick: (config: ModalConfig, clickConfig?: ModalConfig) => void,
  clickConfig: ModalConfig,
  config: Partial<ModalConfig>,
) => {
  if (input.modal != null) {
    if (typeof input.onClick !== "function" || input.onClick(clickConfig))
      modalService.open(
        typeof input.modal === "function"
          ? mylib.overlap({ title: config.title }, input.modal(clickConfig))
          : input.modal,
      );
  } else if (typeof input.confirm === "string") {
    const title = input.confirm.replace("#", "");

    modalService.open(
      {
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
      },
    );
  } else onClick(clickConfig);
  if ((input as ModalConfigButton).closable) modalService.close(input.value);
};

export default function TheModal(props: ModalFixed) {
  const [config, setConfig] = useState(modalService.current());
  useSelector((state: RootState) => state.cm.numModalUpdates);

  modalService.setConfigSetter((config) => setConfig(config));

  const defTheme = "m-ok";
  const asFunc = (val?: Function | boolean | ReactNode) =>
    typeof val === "function" ? val(config) : val;


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

            {!config.theInputs && !config.inputs?.length ? null : (
              <div
                key="app-modal-body-input-list"
                className="app-modal-body-input-list"
              >
                {config.theInputs || config.inputs?.map((input, inputi) => input ? Array.isArray(input) ? input[0] : <TheModalInput key={`modal-input${inputi}`} config={[input, inputi]} /> : null)}
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
          {!config.theButtons && !config.buttons?.length ? null : (
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
                {config.theButtons || config.buttons?.map((button, buttoni) => <TheModalButton key={`modal-button-${buttoni}`} config={[button, buttoni]}/>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
