import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 17C18.2386 17 16 14.7614 16 12C16 9.23858 18.2386 7 21 7',
  d2: 'M21 21C16.0294 21 12 16.9706 12 12C12 7.02944 16.0294 3 21 3',
  d3: 'M6 3L6 8M6 21L6 11',
  d4: 'M3.5 8H8.5',
  d5: 'M9 3L9 7.35224C9 12.216 3 12.2159 3 7.35207L3 3',
  d6: 'M8.49928 8H3.49928H3.03711C3.52034 12 8.47836 12 8.96147 8H8.49928Z',
  d7: 'M16 12C16 14.7614 18.2386 17 21 17V21C16.0294 21 12 16.9706 12 12C12 7.02944 16.0294 3 21 3V7C18.2386 7 16 9.23858 16 12Z',
  d8: 'M6 21L6 11',
  d9: 'M6 3L6 8',
  d10: 'M21 2.25C15.6152 2.25 11.25 6.61522 11.25 12C11.25 17.3848 15.6152 21.75 21 21.75C21.4142 21.75 21.75 21.4142 21.75 21V18.3001C21.75 18.1344 21.6157 18.0001 21.45 18.0001H21C17.6863 18.0001 15 15.3138 15 12.0001C15 8.6864 17.6863 6.00011 21 6.00011L21.45 6.00007C21.6157 6.00006 21.75 5.86575 21.75 5.70007V3C21.75 2.58579 21.4142 2.25 21 2.25ZM21.75 8.30007C21.75 8.13438 21.6157 8.00006 21.45 8.00007L21 8.00011C18.7909 8.00011 17 9.79097 17 12.0001C17 14.2093 18.7909 16.0001 21 16.0001H21.45C21.6157 16.0001 21.75 15.8658 21.75 15.7001V8.30007Z',
  d11: 'M3.25 2C3.80228 2 4.25 2.44772 4.25 3V6.5C4.25 6.77614 4.47386 7 4.75 7C5.02614 7 5.25 6.77614 5.25 6.5L5.25 3C5.25 2.44772 5.69772 2 6.25 2C6.80228 2 7.25 2.44772 7.25 3V6.5C7.25 6.77614 7.47386 7 7.75 7C8.02614 7 8.25 6.77614 8.25 6.5L8.25 3C8.25 2.44772 8.69772 2 9.25 2C9.80228 2 10.25 2.44772 10.25 3L10.25 7.35224C10.25 8.7786 9.80618 9.94617 9.04652 10.7672C8.59564 11.2545 8.05144 11.5992 7.46856 11.7979C7.34071 11.8415 7.25 11.9588 7.25 12.0938L7.25 21C7.25 21.5523 6.80229 22 6.25 22C5.69772 22 5.25 21.5523 5.25 21L5.25 12.0938C5.25 11.9587 5.1593 11.8415 5.03145 11.7979C4.44856 11.5991 3.90434 11.2544 3.45347 10.7671C2.69382 9.94601 2.25 8.77843 2.25 7.35208V3C2.25 2.44772 2.69772 2 3.25 2Z',
  d12: 'M6 3L6 7.5M6 21L6 11',
  d13: 'M3 7.5L9 7.5',
  d14: 'M4.25 3V6.5H5.25L5.25 3H7.25V6.5H8.25L8.25 3H10.25L10.25 7.35224C10.25 8.7786 9.80618 9.94617 9.04652 10.7672C8.53972 11.315 7.91501 11.6825 7.25 11.8651L7.25 21H5.25L5.25 11.8651C4.58498 11.6824 3.96026 11.3149 3.45347 10.7671C2.69382 9.94601 2.25 8.77843 2.25 7.35208V3H4.25Z',
  d15: 'M21 2.25C15.6152 2.25 11.25 6.61522 11.25 12C11.25 17.3848 15.6152 21.75 21 21.75H21.75V18H21C17.6863 18 15 15.3137 15 12C15 8.68629 17.6863 6 21 6H21.75V2.25H21Z',
  d16: 'M21.75 8H21C18.7909 8 17 9.79086 17 12C17 14.2091 18.7909 16 21 16H21.75V8Z',
};

export const IconDish02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-02-stroke-rounded IconDish02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDish02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-02-duotone-rounded IconDish02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDish02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-02-twotone-rounded IconDish02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDish02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-02-solid-rounded IconDish02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDish02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-02-bulk-rounded IconDish02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDish02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-02-stroke-sharp IconDish02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDish02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dish-02-solid-sharp IconDish02SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDish02: TheIconSelfPack = {
  name: 'Dish02',
  StrokeRounded: IconDish02StrokeRounded,
  DuotoneRounded: IconDish02DuotoneRounded,
  TwotoneRounded: IconDish02TwotoneRounded,
  SolidRounded: IconDish02SolidRounded,
  BulkRounded: IconDish02BulkRounded,
  StrokeSharp: IconDish02StrokeSharp,
  SolidSharp: IconDish02SolidSharp,
};