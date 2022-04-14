import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import mylib from "../my-lib/MyLib";
import {
  ModalConfig,
  ModalConfigButton,
  ModalConfigInput,
  ModalFixed,
} from "./Modal.model";
import "./Modal.scss";
import modalService from "./Modal.service";
import ModalButton from "./ModalButton";
import TheModalInput from "./ModalInput";

export const onActionClick = (
  input: ModalConfigInput | ModalConfigButton,
  onClick: (config: ModalConfig, clickConfig?: ModalConfig) => void,
  clickConfig: ModalConfig,
  config: Partial<ModalConfig>
) => {
  if (input.modal != null) {
    if (typeof input.onClick !== "function" || input.onClick(clickConfig))
      modalService.open(
        typeof input.modal === "function"
          ? mylib.overlap({ title: config.title }, input.modal(clickConfig))
          : input.modal
      );
  } else if (typeof input.confirm === "string") {
    const title = input.confirm.replace("#", "");

    modalService.open({
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
    });
  } else onClick(clickConfig);
  if ((input as ModalConfigButton).closable) modalService.close(input.value);
};

export default function Modal(props: ModalFixed) {
  const [config, setConfig] = useState(modalService.current());
  // useSelector((state: RootState) => state.cm.numModalUpdates);

  modalService.setConfigSetter((config) => setConfig(config));

  const defTheme = "m-ok";
  const asFunc = (val?: Function | boolean | ReactNode) =>
    typeof val === "function" ? val(config) : val;

  return config == null ? null : (
    <div className="app-modal-window" onClick={() => modalService.close(null)}>
      <div className="app-modal">
        <div className="app-modal-title">
          <span className="app-modal-title-label">{config.title}</span>
          {config.withoutCloseButton ? null : (
            <span
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
          className={`app-modal-body${
            modalService.error ? " with-error" : ""
          } ${config.theme || defTheme}`}
        >
          <div className={`app-modal-body-inner ${config.theme || defTheme}`}>
            {config.description && (
              <div className="app-modal-description">
                <span className="app-modal-description-label">
                  {asFunc(config.description)}
                </span>
              </div>
            )}

            {!config.theInputs && !config.inputs?.length ? null : (
              <div className="app-modal-body-input-list">
                {config.theInputs ||
                  config.inputs?.map((input, inputi) =>
                    input ? (
                      Array.isArray(input) ? (
                        input[0]
                      ) : (
                        <TheModalInput
                          key={`modal-input${inputi}`}
                          config={[input, inputi]}
                        />
                      )
                    ) : null
                  )}
              </div>
            )}
          </div>
        </div>

        <div className={`app-modal-footer ${config.theme || defTheme}`}>
          {modalService.error && (
            <div className="app-modal-footer-error">{modalService.error}</div>
          )}
          {!config.theButtons && !config.buttons?.length ? null : (
            <div
              className={`app-modal-footer-button-list ${
                config.theme || defTheme
              }`}
            >
              <div
                className={`app-modal-footer-button-list-inner ${
                  config.theme || defTheme
                }`}
              >
                {config.theButtons ||
                  config.buttons?.map((button, buttoni) => (
                    <ModalButton
                      key={`modal-button-${buttoni}`}
                      config={[button, buttoni]}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
