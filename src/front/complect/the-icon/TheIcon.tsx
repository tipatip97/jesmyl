import { HTMLAttributes } from 'react';
import { TheIconSelfPack } from './model';
import { theIconKnownPack } from './pack';

export default function TheIcon(props: HTMLAttributes<HTMLOrSVGElement> & { name: KnownIconName }) {
  const Pack = theIconKnownPack[props.name];
  if (Pack === undefined) return null;
  return <Pack.StrokeRounded {...props} />;
}

export const theIconFromPack = (name: KnownIconName): TheIconSelfPack | und => theIconKnownPack[name];
