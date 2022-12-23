import { ReactNode } from "react";
import mylib from "../my-lib/MyLib";
import { onActionClick } from "./Modal";
import { ModalConfig, TheModalButtonProps } from "./Modal.model";
import modalService from "./Modal.service";

export default function ModalButton(topProps: TheModalButtonProps) {
  let {
    config: [button],
  } = topProps;

  if (button == null) return null;
  if (typeof button === "string") button = { title: button };

  const config = modalService.current();
  const asFunc = (val?: Function | boolean | ReactNode) =>
    typeof val === "function" ? val(config) : val;

  return (
    <button
      className={`app-modal-footer-button-list-item${
        button.className ? ` ${button.className}` : ""
      }`}
      onClick={(event) => {
        if (typeof button === "string") return;
        topProps.forceUpdate();

        let isClose =
          config?.closeOnClick !== false && button.closable !== false;
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

        onActionClick(
          button,
          onClick,
          clickConfig,
          config as ModalConfig,
          event
        );
      }}
      disabled={asFunc(button.disabled)}
      hidden={asFunc(button.hidden)}
    >
      {asFunc(button.title)}
    </button>
  );
}
