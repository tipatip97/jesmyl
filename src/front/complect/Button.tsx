import { HTMLAttributes } from "react";
import modalService from "./modal/Modal.service";

export default function TheButton({ disabled, confirm, onClick, ...props }: HTMLAttributes<HTMLDivElement> & { disabled?: boolean, confirm?: boolean | string }) {
  return <div
    {...props}
    className={`the-button ${props.className || ""}${disabled ? ' disabled' : ''}`}
    onClick={!confirm ? onClick : (event) => {
      if (onClick)
        modalService
          .confirm(confirm === true ? props.children : confirm, 'Подтверди')
          .then((is) => is && onClick(event));
    }}
  />;
}
