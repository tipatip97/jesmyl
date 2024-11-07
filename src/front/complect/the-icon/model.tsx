import { FunctionComponent, HTMLAttributes } from 'react';

export type TheIconType = FunctionComponent<HTMLAttributes<HTMLOrSVGElement>>;

export const theIconNamePostfixList = [
  'StrokeRounded',
  'DuotoneRounded',
  'TwotoneRounded',
  'SolidRounded',
  'BulkRounded',
  'StrokeSharp',
  'SolidSharp',
] as const;

export type TheIconSelfPack = Record<(typeof theIconNamePostfixList)[number], TheIconType> & { name: string };

export type TheIconProps = HTMLAttributes<HTMLOrSVGElement> & { withoutAnimation?: boolean };
