import { HTMLAttributes } from 'react';
import { theIconUsedPack } from './pack';
import { TheIconSelfPack } from './model';

export default function TheIcon(props: HTMLAttributes<HTMLOrSVGElement> & { name: KnownIconName }) {
  const Pack = theIconUsedPack[props.name];
  if (Pack === undefined) return null;
  return <Pack.StrokeRounded {...props} />;
}

export const theIconFromPack = (name: KnownIconName): TheIconSelfPack | und => theIconUsedPack[name];
