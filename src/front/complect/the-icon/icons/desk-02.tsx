import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 4H2',
  d2: 'M21 8H3',
  d3: 'M21 12H14',
  d4: 'M21 16H18C16.1144 16 15.1716 16 14.5858 15.4142C14 14.8284 14 13.8856 14 12V8',
  d5: 'M3 4V20M21 4V20',
  d6: 'M3 8H21V4H3V8Z',
  d7: 'M18 16H21V8H14V12C14 13.8856 14 14.8284 14.5858 15.4142C15.1716 16 16.1144 16 18 16Z',
  d8: 'M22 4H21M2 4H3M3 4V8H21V4M3 4H21',
  d9: 'M21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM14 11.25C13.5858 11.25 13.25 11.5858 13.25 12C13.25 12.4142 13.5858 12.75 14 12.75V11.25ZM21 11.25H14V12.75H21V11.25Z',
  d10: 'M21 16.75C21.4142 16.75 21.75 16.4142 21.75 16C21.75 15.5858 21.4142 15.25 21 15.25V16.75ZM14.75 8C14.75 7.58579 14.4142 7.25 14 7.25C13.5858 7.25 13.25 7.58579 13.25 8H14.75ZM21 15.25H18V16.75H21V15.25ZM14.75 12V8H13.25V12H14.75ZM18 15.25C17.036 15.25 16.3884 15.2484 15.9054 15.1835C15.4439 15.1214 15.2464 15.0142 15.1161 14.8839L14.0555 15.9445C14.5109 16.4 15.0777 16.5857 15.7055 16.6701C16.3117 16.7516 17.0784 16.75 18 16.75V15.25ZM13.25 12C13.25 12.9216 13.2484 13.6883 13.3299 14.2945C13.4143 14.9223 13.6 15.4891 14.0555 15.9445L15.1161 14.8839C14.9858 14.7536 14.8786 14.5561 14.8165 14.0946C14.7516 13.6116 14.75 12.964 14.75 12H13.25Z',
  d11: 'M14 7C14.5523 7 15 7.44772 15 8V11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H15.0046C15.011 13.4407 15.0267 13.7813 15.0643 14.0613C15.1226 14.495 15.2168 14.631 15.2929 14.7071C15.369 14.7832 15.505 14.8774 15.9387 14.9357C16.4012 14.9979 17.0289 15 18 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17L17.9342 17C17.0477 17.0001 16.2839 17.0001 15.6722 16.9179C15.0167 16.8297 14.3883 16.631 13.8787 16.1213C13.369 15.6117 13.1703 14.9833 13.0821 14.3278C12.9999 13.7161 13 12.9523 13 12.0658C13 12.044 13 12.022 13 12V8C13 7.44772 13.4477 7 14 7Z',
  d12: 'M2 3C1.44772 3 1 3.44772 1 4C1 4.55228 1.44772 5 2 5V20C2 20.5523 2.44772 21 3 21C3.55228 21 4 20.5523 4 20V8.75H20V20C20 20.5523 20.4477 21 21 21C21.5523 21 22 20.5523 22 20V5C22.5523 5 23 4.55228 23 4C23 3.44772 22.5523 3 22 3H2Z',
  d13: 'M4 8.75H20V5H4V8.75Z',
  d14: 'M2 3C1.44772 3 1 3.44772 1 4C1 4.55228 1.44772 5 2 5V20C2 20.5523 2.44772 21 3 21C3.55228 21 4 20.5523 4 20V5H20V20C20 20.5523 20.4477 21 21 21C21.5523 21 22 20.5523 22 20V5C22.5523 5 23 4.55228 23 4C23 3.44772 22.5523 3 22 3H2Z',
  d15: 'M13 8.75H15V11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H15.0046C15.011 13.4407 15.0267 13.7813 15.0643 14.0613C15.1226 14.495 15.2168 14.631 15.2929 14.7071C15.369 14.7832 15.505 14.8774 15.9387 14.9357C16.4012 14.9979 17.0289 15 18 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17L17.9342 17C17.0477 17.0001 16.2839 17.0001 15.6722 16.9179C15.0167 16.8297 14.3883 16.631 13.8787 16.1213C13.369 15.6117 13.1703 14.9833 13.0821 14.3278C12.9999 13.7161 13 12.9523 13 12.0658L13 8.75Z',
  d16: 'M20 8H4',
  d17: 'M20 12H14',
  d18: 'M20 16H14V8',
  d19: 'M4 4V20M20 4V20',
  d20: 'M14 11.5H20V13.5H14V11.5Z',
  d21: 'M15 15.5V8.5H13V16.5C13 17.0523 13.4477 17.5 14 17.5H20V15.5H15Z',
  d22: 'M3 5.5V20.5H5V9.25H19V20.5H21V5.5H22V3.5H2V5.5H3Z',
};

export const IconDesk02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="desk-02-stroke-rounded IconDesk02StrokeRounded"
    >
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

export const IconDesk02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="desk-02-duotone-rounded IconDesk02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDesk02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="desk-02-twotone-rounded IconDesk02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
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

export const IconDesk02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="desk-02-solid-rounded IconDesk02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDesk02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="desk-02-bulk-rounded IconDesk02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDesk02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="desk-02-stroke-sharp IconDesk02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDesk02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="desk-02-solid-sharp IconDesk02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDesk02: TheIconSelfPack = {
  name: 'Desk02',
  StrokeRounded: IconDesk02StrokeRounded,
  DuotoneRounded: IconDesk02DuotoneRounded,
  TwotoneRounded: IconDesk02TwotoneRounded,
  SolidRounded: IconDesk02SolidRounded,
  BulkRounded: IconDesk02BulkRounded,
  StrokeSharp: IconDesk02StrokeSharp,
  SolidSharp: IconDesk02SolidSharp,
};