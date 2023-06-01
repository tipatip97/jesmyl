import { HTMLAttributes, ReactNode } from "react";
import * as pack from "../../resource/eva-icons.json";
import { MyLib } from "../my-lib/MyLib";
import './Eva.scss';

export type EvaIconName = keyof typeof pack;

const iconInners: Record<EvaIconName, ReactNode> = {} as never;

MyLib.entries(pack).forEach(([icon, __html]) => {
  iconInners[icon] = <g dangerouslySetInnerHTML={{ __html }} />;
});

export default function EvaIcon(
  props: HTMLAttributes<HTMLOrSVGElement> & {
    name: EvaIconName;
    alt?: string;
  }
) {
  return (
    <>
      {iconInners[props.name] == null ? (
        props.alt || null
      ) : (
        <svg
          {...props}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={'eva-icon ' + (props.className || '')}
          fill="var(--icon-color)"
        >{iconInners[props.name]}</svg>
      )}
    </>
  );
}
