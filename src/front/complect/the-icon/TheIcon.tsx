import { HTMLAttributes } from 'react';
import { TheIconName } from './model';
import { theIconUsedPack } from './pack';

export default function TheIcon(props: HTMLAttributes<HTMLOrSVGElement> & { name: TheIconName }) {
  const Icon = theIconUsedPack[props.name];
  if (Icon === undefined) return null;
  return <Icon {...props} />;
}

export const theIconFromPack = (name: TheIconName) => theIconUsedPack[name];
