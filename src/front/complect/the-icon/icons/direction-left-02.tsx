import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.06006 5.67914C7.68595 4.85343 7.9989 4.44058 8.42672 4.22029C8.85454 4 9.34337 4 10.3211 4H16C16.9428 4 17.4142 4 17.7071 4.29289C18 4.58579 18 5.05719 18 6V9C18 9.94281 18 10.4142 17.7071 10.7071C17.4142 11 16.9428 11 16 11H10.3211C9.34337 11 8.85454 11 8.42672 10.7797C7.9989 10.5594 7.68595 10.1466 7.06006 9.32086L6.81211 8.99376C6.2707 8.27951 6 7.92239 6 7.5C6 7.07761 6.2707 6.72048 6.81211 6.00624L7.06006 5.67914Z',
  d2: 'M14 21L14 11',
  d3: 'M14 4L14 3',
  d4: 'M10 21H18',
  d5: 'M14 4V3',
  d6: 'M14 21V11M10 21H18',
  d7: 'M10.2849 3.25008C9.36962 3.24929 8.67636 3.24868 8.05698 3.54308C7.43909 3.83677 6.99768 4.37523 6.41229 5.08933C6.14131 5.41926 5.50808 6.19045 5.33646 6.46124C5.14815 6.75837 5 7.09388 5 7.50017C5 7.90645 5.14814 8.24196 5.33646 8.53909C5.50808 8.80988 6.14131 9.58107 6.41229 9.911C6.99767 10.6251 7.43909 11.1636 8.05698 11.4573C8.67636 11.7516 9.36962 11.751 10.2849 11.7502L16.2947 11.7502H16.2947C16.7276 11.7502 17.1244 11.7503 17.4472 11.7069C17.8027 11.6591 18.1784 11.5466 18.4874 11.2376C18.7965 10.9286 18.9089 10.5529 18.9567 10.1974C19.0001 9.87456 19 9.47773 19 9.04491V5.95542C19 5.5226 19.0001 5.12577 18.9567 4.80296C18.9089 4.44748 18.7965 4.07175 18.4874 3.76273C18.1784 3.45371 17.8027 3.34126 17.4472 3.29346C17.1244 3.25006 16.7276 3.25011 16.2947 3.25016L10.2849 3.25008Z',
  d8: 'M14 2C13.4477 2 13 2.44772 13 3V4C13 4.55228 13.4477 5 14 5C14.5523 5 15 4.55228 15 4V3C15 2.44772 14.5523 2 14 2ZM14 10C13.4477 10 13 10.4477 13 11L13 20H10C9.44771 20 9 20.4477 9 21C9 21.5523 9.44771 22 10 22H18C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20H15L15 11C15 10.4477 14.5523 10 14 10Z',
  d9: 'M13 3C13 2.44772 13.4477 2 14 2C14.5523 2 15 2.44772 15 3V3.25014L13 3.25012V3ZM13 11.7502L13 20H10C9.44771 20 9 20.4477 9 21C9 21.5523 9.44771 22 10 22H18C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20H15L15 11.7502L13 11.7502Z',
  d10: 'M13.999 12V21',
  d11: 'M13.999 3V5',
  d12: 'M17.9997 21H9.99707',
  d13: 'M9.02289 4.99181L17.9903 4.98242C17.9959 4.98242 18.0004 4.9869 18.0004 4.99242V11.9903C18.0004 11.9959 17.9959 12.0003 17.9903 12.0003L9.03609 12.01L6.00488 8.48585L9.02289 4.99181Z',
  d14: 'M13 3.75H8.64286L5 8L8.64286 12.25H13V19.5H10V21.5H18V19.5H15V12.25H18.25C18.6642 12.25 19 11.9142 19 11.5V4.5C19 4.08579 18.6642 3.75 18.25 3.75H15V2.5H13V3.75Z',
};

export const IconDirectionLeft02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-left-02-stroke-rounded IconDirectionLeft02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconDirectionLeft02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-left-02-duotone-rounded IconDirectionLeft02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconDirectionLeft02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-left-02-twotone-rounded IconDirectionLeft02TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDirectionLeft02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-left-02-solid-rounded IconDirectionLeft02SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDirectionLeft02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-left-02-bulk-rounded IconDirectionLeft02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDirectionLeft02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-left-02-stroke-sharp IconDirectionLeft02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
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
      />
    </TheIconWrapper>
  );
};

export const IconDirectionLeft02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-left-02-solid-sharp IconDirectionLeft02SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDirectionLeft02: TheIconSelfPack = {
  name: 'DirectionLeft02',
  StrokeRounded: IconDirectionLeft02StrokeRounded,
  DuotoneRounded: IconDirectionLeft02DuotoneRounded,
  TwotoneRounded: IconDirectionLeft02TwotoneRounded,
  SolidRounded: IconDirectionLeft02SolidRounded,
  BulkRounded: IconDirectionLeft02BulkRounded,
  StrokeSharp: IconDirectionLeft02StrokeSharp,
  SolidSharp: IconDirectionLeft02SolidSharp,
};