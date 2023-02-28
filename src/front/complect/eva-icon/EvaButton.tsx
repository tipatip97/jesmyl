import { HTMLAttributes } from "react";
import modalService from "../modal/Modal.service";
import EvaIcon, { EvaIconName } from "./EvaIcon";

export default function EvaButton(
  props: HTMLAttributes<HTMLOrSVGElement> & {
    name: EvaIconName,
    alt?: string,
    disabled?: boolean,
    confirm?: string,
  }
) {
  const isClickable = !props.disabled && props.onClick ? true : undefined;

  return (
    <>
      <EvaIcon
        {...props}
        className={`${isClickable ? 'pointer' : ''} ${props.disabled ? "disabled" : ""} ${props.className}`}
        onClick={isClickable && (async (event) => {
          if (!props.confirm || await modalService.confirm(props.confirm))
            props.onClick!(event);
        })}
      />
    </>
  );
}
