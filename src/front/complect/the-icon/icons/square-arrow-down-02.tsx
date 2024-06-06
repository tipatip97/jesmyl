import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.5 13.5C9.99153 14.0057 11.2998 16 12 16M14.5 13.5C14.0085 14.0057 12.7002 16 12 16M12 16V8',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.7521 1.74999 11.9428 1.75H11.9428H12.0572H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694ZM12 7C12.5523 7 13 7.44772 13 8V12.5H13.162C13.4524 12.4999 13.7597 12.4998 14.0022 12.5288C14.179 12.55 14.8295 12.6298 15.1296 13.2387C15.43 13.8481 15.0851 14.3908 14.9914 14.5374C14.8625 14.7392 14.6695 14.9718 14.4869 15.1919L14.4555 15.2297C14.168 15.5765 13.8257 15.9712 13.4824 16.2852C13.311 16.442 13.1127 16.6035 12.8974 16.7312C12.6978 16.8495 12.3826 17 12 17C11.6174 17 11.3022 16.8495 11.1026 16.7312C10.8873 16.6035 10.689 16.442 10.5176 16.2852C10.1743 15.9712 9.83196 15.5765 9.54449 15.2297L9.51315 15.1919C9.33054 14.9718 9.13753 14.7392 9.00859 14.5374C8.91494 14.3908 8.57002 13.8481 8.87038 13.2387C9.1705 12.6298 9.82103 12.55 9.99783 12.5288C10.2403 12.4998 10.5476 12.4999 10.838 12.5H11V8C11 7.44772 11.4477 7 12 7Z',
  d4: 'M12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25H12.0572Z',
  d5: 'M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12.5H10.838C10.5476 12.4999 10.2403 12.4998 9.99783 12.5288C9.82103 12.55 9.1705 12.6298 8.87038 13.2387C8.57002 13.8481 8.91494 14.3908 9.00859 14.5374C9.13753 14.7392 9.33054 14.9718 9.51315 15.1919L9.54449 15.2297C9.83196 15.5765 10.1743 15.9712 10.5176 16.2852C10.689 16.442 10.8873 16.6035 11.1026 16.7312C11.3022 16.8495 11.6174 17 12 17C12.3826 17 12.6978 16.8495 12.8974 16.7312C13.1127 16.6035 13.311 16.442 13.4824 16.2852C13.8257 15.9712 14.168 15.5765 14.4555 15.2297L14.4869 15.1919C14.6695 14.9718 14.8625 14.7392 14.9914 14.5374C15.0851 14.3908 15.43 13.8481 15.1296 13.2387C14.8295 12.6298 14.179 12.55 14.0022 12.5288C13.7597 12.4998 13.4524 12.4999 13.162 12.5H13V8Z',
  d6: 'M12.0004 8V15.6126M15 13L12.0004 16L9 13',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12.7491 14.1893V8H11.2491V14.1893L9.52941 12.4697L8.46875 13.5303L11.9991 17.0607L15.5294 13.5303L14.4688 12.4697L12.7491 14.1893Z',
};

export const IconSquareArrowDown02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-02-stroke-rounded IconSquareArrowDown02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-02-duotone-rounded IconSquareArrowDown02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-02-twotone-rounded IconSquareArrowDown02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-02-solid-rounded IconSquareArrowDown02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-02-bulk-rounded IconSquareArrowDown02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-02-stroke-sharp IconSquareArrowDown02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-02-solid-sharp IconSquareArrowDown02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareArrowDown02: TheIconSelfPack = {
  name: 'SquareArrowDown02',
  StrokeRounded: IconSquareArrowDown02StrokeRounded,
  DuotoneRounded: IconSquareArrowDown02DuotoneRounded,
  TwotoneRounded: IconSquareArrowDown02TwotoneRounded,
  SolidRounded: IconSquareArrowDown02SolidRounded,
  BulkRounded: IconSquareArrowDown02BulkRounded,
  StrokeSharp: IconSquareArrowDown02StrokeSharp,
  SolidSharp: IconSquareArrowDown02SolidSharp,
};