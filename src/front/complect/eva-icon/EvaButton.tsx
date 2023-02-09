import { HTMLAttributes } from "react";
import * as pack from "../../resource/eva-icons.json";
import modalService from "../modal/Modal.service";
import EvaIcon from "./EvaIcon";

export type EvaIconName = keyof typeof pack;

export default function EvaButton(
  props: HTMLAttributes<HTMLOrSVGElement> & {
    name: EvaIconName,
    alt?: string,
    disabled?: boolean,
    confirm?: string,
  }
) {
  return (
    <>
      <EvaIcon
        {...props}
        className={`pointer ${props.disabled ? "disabled" : ""} ${props.className}`}
        onClick={props.disabled ? undefined : props.onClick && (async (event) => {
          if (!props.confirm || await modalService.confirm(props.confirm))
            props.onClick!(event);
        })}
      />
    </>
  );
}
