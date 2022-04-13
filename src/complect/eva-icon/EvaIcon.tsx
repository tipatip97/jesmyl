import { HTMLAttributes } from "react";
import * as pack from "../../resource/eva-icons.json";
import { EvaIconName } from "./EvaIcon.model";

export default function EvaIcon(
  props: HTMLAttributes<HTMLOrSVGElement> & {
    name: EvaIconName;
    alt?: string;
    scale?: number;
  }
) {
  const { name, alt, scale = 1, className } = props;
  const icon = pack[name];

  return (
    <>
      {icon == null ? (
        alt || null
      ) : (
        <svg
          {...props}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            transform: `scale(${scale || "var(--icon-scale)"})`,
          }}
          className={"eva-icon " + (className || "")}
          fill="var(--svg-color)"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      )}
    </>
  );
}
