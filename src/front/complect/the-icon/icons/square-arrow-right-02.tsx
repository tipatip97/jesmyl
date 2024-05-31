import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 12L8 12M16 12C16 11.2998 14.0057 9.99153 13.5 9.5M16 12C16 12.7002 14.0057 14.0085 13.5 14.5',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03143 1.74999 9.7521 1.75 11.9428L1.75 11.9428L1.75 12.0572L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31136 21.8843 6.68802 22.0694C8.03143 22.25 9.7521 22.25 11.9428 22.25L11.9428 22.25L12.0572 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312ZM7 12C7 12.5523 7.44772 13 8 13L12.5 13L12.5 13.162C12.4999 13.4524 12.4998 13.7597 12.5288 14.0022C12.55 14.179 12.6298 14.8295 13.2387 15.1296C13.8481 15.43 14.3908 15.0851 14.5374 14.9914C14.7391 14.8625 14.9718 14.6695 15.1919 14.4869L15.2297 14.4555C15.5765 14.168 15.9712 13.8257 16.2852 13.4824C16.442 13.311 16.6035 13.1127 16.7312 12.8974C16.8495 12.6978 17 12.3826 17 12C17 11.6174 16.8495 11.3022 16.7312 11.1026C16.6035 10.8873 16.442 10.689 16.2852 10.5176C15.9712 10.1743 15.5765 9.83196 15.2297 9.54449L15.1919 9.51315C14.9718 9.33054 14.7392 9.13753 14.5374 9.00859C14.3908 8.91494 13.8481 8.57002 13.2387 8.87038C12.6298 9.1705 12.55 9.82103 12.5288 9.99783C12.4998 10.2403 12.4999 10.5476 12.5 10.838L12.5 11L8 11C7.44772 11 7 11.4477 7 12Z',
  d4: 'M22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L12.0572 22.25L11.9428 22.25L11.9428 22.25C9.7521 22.25 8.03143 22.25 6.68802 22.0694C5.31136 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 12.0572L1.75 11.9428L1.75 11.9428C1.74999 9.7521 1.74998 8.03143 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428L22.25 12.0572Z',
  d5: 'M8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11L12.5 11L12.5 10.838C12.4999 10.5476 12.4998 10.2403 12.5288 9.99783C12.55 9.82103 12.6298 9.1705 13.2387 8.87038C13.8481 8.57002 14.3908 8.91494 14.5374 9.00859C14.7392 9.13753 14.9718 9.33054 15.1919 9.51315L15.2297 9.54449C15.5765 9.83196 15.9712 10.1743 16.2852 10.5176C16.442 10.689 16.6035 10.8873 16.7312 11.1026C16.8495 11.3022 17 11.6174 17 12C17 12.3826 16.8495 12.6978 16.7312 12.8974C16.6035 13.1127 16.442 13.311 16.2852 13.4824C15.9712 13.8257 15.5765 14.168 15.2297 14.4555L15.1919 14.4869C14.9718 14.6695 14.7391 14.8625 14.5374 14.9914C14.3908 15.0851 13.8481 15.43 13.2387 15.1296C12.6298 14.8295 12.55 14.179 12.5288 14.0022C12.4998 13.7597 12.4999 13.4524 12.5 13.162L12.5 13L8 13Z',
  d6: 'M8 12.0004L15.5127 12.0004M13 15L16 12.0004L13 9',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12.4697 9.53039L14.1893 11.2501H8V12.7501L14.1893 12.7501L12.4697 14.4697L13.5303 15.5304L17.0607 12.0001L13.5303 8.46973L12.4697 9.53039Z',
} as const;

export const IconSquareArrowRight02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-02-stroke-rounded IconSquareArrowRight02StrokeRounded"
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

export const IconSquareArrowRight02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-02-duotone-rounded IconSquareArrowRight02DuotoneRounded"
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

export const IconSquareArrowRight02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-02-twotone-rounded IconSquareArrowRight02TwotoneRounded"
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

export const IconSquareArrowRight02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-02-solid-rounded IconSquareArrowRight02SolidRounded"
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

export const IconSquareArrowRight02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-02-bulk-rounded IconSquareArrowRight02BulkRounded"
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

export const IconSquareArrowRight02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-02-stroke-sharp IconSquareArrowRight02StrokeSharp"
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

export const IconSquareArrowRight02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-02-solid-sharp IconSquareArrowRight02SolidSharp"
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

export const iconPackOfSquareArrowRight02: TheIconSelfPack = {
  name: 'SquareArrowRight02',
  StrokeRounded: IconSquareArrowRight02StrokeRounded,
  DuotoneRounded: IconSquareArrowRight02DuotoneRounded,
  TwotoneRounded: IconSquareArrowRight02TwotoneRounded,
  SolidRounded: IconSquareArrowRight02SolidRounded,
  BulkRounded: IconSquareArrowRight02BulkRounded,
  StrokeSharp: IconSquareArrowRight02StrokeSharp,
  SolidSharp: IconSquareArrowRight02SolidSharp,
};