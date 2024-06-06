import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.5 2H9.5C6.67157 2 5.25736 2 4.37868 2.87868C3.5 3.75736 3.5 5.17157 3.5 8V16C3.5 18.8284 3.5 20.2426 4.37868 21.1213C5.25736 22 6.67157 22 9.5 22H14.5C17.3284 22 18.7426 22 19.6213 21.1213C20.5 20.2426 20.5 18.8284 20.5 16V8C20.5 5.17157 20.5 3.75736 19.6213 2.87868C18.7426 2 17.3284 2 14.5 2Z',
  d2: 'M10 4.5H14',
  d3: 'M12 19H12.01',
  d4: 'M14.5549 1.25C15.9225 1.24998 17.0248 1.24996 17.8918 1.36652C18.7919 1.48754 19.5497 1.74643 20.1517 2.34835C20.7536 2.95027 21.0125 3.70814 21.1335 4.60825C21.25 5.47522 21.25 6.57754 21.25 7.94513L21.25 16.0549C21.25 17.4225 21.25 18.5248 21.1335 19.3918C21.0125 20.2919 20.7536 21.0497 20.1517 21.6517C19.5497 22.2536 18.7919 22.5125 17.8918 22.6335C17.0248 22.75 15.9225 22.75 14.5549 22.75L14.5549 22.75H9.44513L9.44512 22.75C8.07754 22.75 6.97522 22.75 6.10825 22.6335C5.20814 22.5125 4.45027 22.2536 3.84835 21.6517C3.24643 21.0497 2.98754 20.2919 2.86652 19.3918C2.74996 18.5248 2.74998 17.4225 2.75 16.0549V16.0549L2.75 7.94513V7.94511C2.74998 6.57753 2.74996 5.47521 2.86652 4.60825C2.98754 3.70814 3.24643 2.95027 3.84835 2.34835C4.45027 1.74643 5.20814 1.48754 6.10825 1.36652C6.97521 1.24996 8.07753 1.24998 9.44511 1.25H9.44513H14.5549H14.5549ZM9.25 4C9.25 3.58579 9.58579 3.25 10 3.25H14C14.4142 3.25 14.75 3.58579 14.75 4C14.75 4.41421 14.4142 4.75 14 4.75H10C9.58579 4.75 9.25 4.41421 9.25 4ZM12 18.5C11.4477 18.5 11 18.9477 11 19.5C11 20.0523 11.4477 20.5 12 20.5H12.01C12.5623 20.5 13.01 20.0523 13.01 19.5C13.01 18.9477 12.5623 18.5 12.01 18.5H12Z',
  d5: 'M14.5549 1.25C15.9225 1.24998 17.0248 1.24996 17.8918 1.36652C18.7919 1.48754 19.5497 1.74643 20.1517 2.34835C20.7536 2.95027 21.0125 3.70814 21.1335 4.60825C21.25 5.47522 21.25 6.57754 21.25 7.94513V16.0549C21.25 17.4225 21.25 18.5248 21.1335 19.3918C21.0125 20.2919 20.7536 21.0497 20.1517 21.6517C19.5497 22.2536 18.7919 22.5125 17.8918 22.6335C17.0248 22.75 15.9225 22.75 14.5549 22.75H9.44513C8.07754 22.75 6.97522 22.75 6.10825 22.6335C5.20814 22.5125 4.45027 22.2536 3.84835 21.6517C3.24643 21.0497 2.98754 20.2919 2.86652 19.3918C2.74996 18.5248 2.74998 17.4225 2.75 16.0549V16.0549V7.94513V7.94511C2.74998 6.57753 2.74996 5.47521 2.86652 4.60825C2.98754 3.70814 3.24643 2.95027 3.84835 2.34835C4.45027 1.74643 5.20814 1.48754 6.10825 1.36652C6.97521 1.24996 8.07753 1.24998 9.44511 1.25H9.44513H14.5549H14.5549Z',
  d6: 'M9.25 4C9.25 3.58579 9.58579 3.25 10 3.25H14C14.4142 3.25 14.75 3.58579 14.75 4C14.75 4.41421 14.4142 4.75 14 4.75H10C9.58579 4.75 9.25 4.41421 9.25 4Z',
  d7: 'M11 19.5C11 18.9477 11.4477 18.5 12 18.5H12.01C12.5623 18.5 13.01 18.9477 13.01 19.5C13.01 20.0523 12.5623 20.5 12.01 20.5H12C11.4477 20.5 11 20.0523 11 19.5Z',
  d8: 'M20.5 2H3.5V22H20.5V2Z',
  d9: 'M2.75 2C2.75 1.58579 3.08579 1.25 3.5 1.25L20.5 1.25C20.6989 1.25 20.8897 1.32902 21.0303 1.46967C21.171 1.61032 21.25 1.80109 21.25 2L21.25 22C21.25 22.4142 20.9142 22.75 20.5 22.75L3.5 22.75C3.08579 22.75 2.75 22.4142 2.75 22L2.75 2ZM14 4.75H10L10 3.25H14V4.75ZM13.01 18.5H11V20.5H13.01V18.5Z',
};

export const IconTablet02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-02-stroke-rounded IconTablet02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconTablet02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-02-duotone-rounded IconTablet02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      />
    </TheIconWrapper>
  );
};

export const IconTablet02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-02-twotone-rounded IconTablet02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTablet02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-02-solid-rounded IconTablet02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTablet02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-02-bulk-rounded IconTablet02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTablet02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-02-stroke-sharp IconTablet02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconTablet02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tablet-02-solid-sharp IconTablet02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTablet02: TheIconSelfPack = {
  name: 'Tablet02',
  StrokeRounded: IconTablet02StrokeRounded,
  DuotoneRounded: IconTablet02DuotoneRounded,
  TwotoneRounded: IconTablet02TwotoneRounded,
  SolidRounded: IconTablet02SolidRounded,
  BulkRounded: IconTablet02BulkRounded,
  StrokeSharp: IconTablet02StrokeSharp,
  SolidSharp: IconTablet02SolidSharp,
};