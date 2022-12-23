import { HTMLAttributes } from "react";
import * as pack from "../../resource/eva-icons.json";

export type EvaIconName = keyof typeof pack;

export default function EvaIcon(
  props: HTMLAttributes<HTMLOrSVGElement> & {
    name: EvaIconName;
    alt?: string;
  }
) {
  return (
    <>
      {pack[props.name] == null ? (
        props.alt || null
      ) : (
        <svg
          {...props}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={props.style}
          className={`eva-icon ${props.className || ""} ${
            props.onClick ? "pointer" : ""
          }`}
          fill="var(--svg-color)"
          dangerouslySetInnerHTML={{ __html: pack[props.name] }}
        />
      )}
    </>
  );
}
