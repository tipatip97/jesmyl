import { ReactNode } from "react";
import mylib from "../my-lib/MyLib";
import { ModalConfig, TheModalButtonProps } from "./Modal.model";
import modalService from "./Modal.service";
import { onActionClick } from "./TheModal";

export default function ModalButton(topProps: TheModalButtonProps) {
  let {
    config: [button, buttoni],
  } = topProps;

  if (button == null) return null;
  if (typeof button === "string") button = { title: button };
  
  const config = modalService.current();
  const asFunc = (val?: Function | boolean | ReactNode) =>
    typeof val === "function" ? val(config) : val;

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

          onActionClick(button, onClick, clickConfig, config as ModalConfig);
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
}
