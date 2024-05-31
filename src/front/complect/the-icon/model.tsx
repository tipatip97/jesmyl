import { FunctionComponent, HTMLAttributes } from 'react';
import { theIconUsedPack } from './pack';

export type TheIconType = FunctionComponent<HTMLAttributes<HTMLOrSVGElement>>;
export type TheIconName = keyof typeof theIconUsedPack;

export type TheIconSelfPackType =
  | 'StrokeRounded'
  | 'DuotoneRounded'
  | 'TwotoneRounded'
  | 'SolidRounded'
  | 'BulkRounded'
  | 'StrokeSharp'
  | 'SolidSharp';

export type TheIconSelfPack = Record<TheIconSelfPackType, TheIconType> & { name: string };

export type TheIconProps = HTMLAttributes<HTMLOrSVGElement>;
