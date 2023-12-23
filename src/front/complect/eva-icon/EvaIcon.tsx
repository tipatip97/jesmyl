import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import * as pack from '../../resource/eva-icons.json';
import { MyLib } from '../my-lib/MyLib';

export type EvaIconName = keyof typeof pack;

const iconInners: Record<EvaIconName, ReactNode> = {} as never;

MyLib.entries(pack).forEach(([icon, __html]) => {
  iconInners[icon] = <g dangerouslySetInnerHTML={{ __html }} />;
});

export const evaPackNames: EvaIconName[] = MyLib.keys(pack);

export default function EvaIcon(
  props: HTMLAttributes<HTMLOrSVGElement> & {
    name: EvaIconName;
    alt?: string;
  },
) {
  return (
    <>
      {iconInners[props.name] && (
        <IconEva
          {...props}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={'eva-icon ' + (props.onClick ? 'pointer ' : '') + (props.className || '')}
          fill="var(--icon-color)"
        >
          {iconInners[props.name]}
        </IconEva>
      )}
    </>
  );
}

export const IconEva = styled.svg`
  --icon-size: 24px;
  --icon-scale: 1;

  transform: scale(var(--icon-scale));

  width: var(--icon-size);
  min-width: var(--icon-size);
  max-width: var(--icon-size);
  height: var(--icon-size);
  min-height: var(--icon-size);
  max-height: var(--icon-size);
`;
