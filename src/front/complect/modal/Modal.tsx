import { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import di from "../../components/index/Index.store";
import { RootState } from "../../shared/store";
import mylib from "../my-lib/MyLib";
import {
  ModalConfig,
  ModalConfigButton,
  ModalConfigInput
} from "./Modal.model";
import "./Modal.scss";
import modalService from "./Modal.service";
import ModalButton from "./ModalButton";
import TheModalInput from "./ModalInput";

const getInputId = () => `modal input prefix ${Date.now()}`;
let inputPrefix = getInputId();

export const onActionClick = (
  input: ModalConfigInput | ModalConfigButton,
  onClick: (config: ModalConfig, clickConfig?: ModalConfig) => void,
  clickConfig: ModalConfig,
  config: Partial<ModalConfig>,
  event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  event?.stopPropagation();
  if (input.modal != null) {
    if (typeof input.onClick !== "function")
      modalService.open(
        typeof input.modal === "function"
          ? mylib.overlap({ title: config.title }, input.modal(clickConfig))
          : input.modal
      );
    else input.onClick(clickConfig);
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
  if ((input as ModalConfigInput).type === 'button' && (input as ModalConfigInput).closable !== false) {
    modalService.close(input.value);
    inputPrefix = getInputId();
  }
};

const numModalUpdatesSelector = (state: RootState) => state.index.numModalUpdates;

export default function Modal() {
  const [config, setConfig] = useState(modalService.current());
  useSelector(numModalUpdatesSelector);

  const dispatch = useDispatch();
  const forceUpdate = () => {
    dispatch(di.riseUpModalUpdates());
  };

  modalService.setConfigSetter((config) => setConfig(config));

  const asFunc = (val?: Function | boolean | ReactNode) => {
    if (typeof val === "function") {
      if (config) config.forceUpdate = forceUpdate;
      return val(config);
    } else return val;
  };
  const onClose = () => {
    const res = config?.onCloseAcion?.(config as ModalConfig);
    if (res !== false) {
      modalService.close(null);
      inputPrefix = getInputId();
    }
  };

  return config == null ? null : (
    <div className="app-modal-window" onClick={onClose}>
      <div className="app-modal"
        onClick={(event) => event.stopPropagation()}>
        <div className="app-modal-title">
          <span className="app-modal-title-label">{config.title}</span>
          {config.withoutCloseButton ? null : (
            <span className="app-modal-title-close-icon" onClick={onClose}>
              ×
            </span>
          )}
        </div>

        <div
          className={`app-modal-body${modalService.error ? " with-error" : ""}`}
        >
          <div className="app-modal-body-inner">
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
                          config={[input, inputPrefix + inputi]}
                          forceUpdate={forceUpdate}
                        />
                      )
                    ) : null
                  )}
              </div>
            )}
          </div>
        </div>

        <div className="app-modal-footer">
          {modalService.error && (
            <div className="app-modal-footer-error">{modalService.error}</div>
          )}
          {!config.theButtons && !config.buttons?.length ? null : (
            <div className="app-modal-footer-button-list">
              <div className="app-modal-footer-button-list-inner">
                {config.theButtons ||
                  config.buttons?.map((button, buttoni) => (
                    <ModalButton
                      key={`modal-button-${buttoni}`}
                      config={[button, buttoni]}
                      forceUpdate={forceUpdate}
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
