import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 18L12 6M12 18C12.7002 18 14.0085 16.0057 14.5 15.5M12 18C11.2998 18 9.99153 16.0057 9.5 15.5M12 6C12.7002 6 14.0085 7.9943 14.5 8.5M12 6C11.2998 6 9.99153 7.9943 9.5 8.5',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03143 1.74999 9.7521 1.75 11.9428L1.75 11.9428L1.75 12.0572L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31136 21.8843 6.68802 22.0694C8.03143 22.25 9.7521 22.25 11.9428 22.25L11.9428 22.25L12.0572 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312ZM14.5018 16.5574C14.8096 16.2803 14.8345 15.8061 14.5574 15.4982C14.4094 15.3338 14.2051 15.2501 14 15.25L13 15.25L13 8.75L14 8.75001C14.2051 8.74994 14.4094 8.66623 14.5574 8.50179C14.8345 8.19394 14.8096 7.71972 14.5018 7.44259C14.4402 7.38714 14.3319 7.26934 14.1585 7.07622L14.1206 7.03399C13.9689 6.86486 13.788 6.66321 13.6014 6.4705C13.4015 6.26412 13.173 6.04469 12.9417 5.87229C12.746 5.72644 12.4033 5.5 12 5.5C11.5967 5.5 11.254 5.72644 11.0583 5.87229C10.827 6.04469 10.5985 6.26412 10.3986 6.4705C10.212 6.66321 10.0311 6.86486 9.87939 7.03398L9.84149 7.07622C9.66813 7.26934 9.55979 7.38714 9.4982 7.44259C9.19035 7.71972 9.16545 8.19394 9.44258 8.50179C9.59052 8.66612 9.79461 8.74983 9.99958 8.75001L11 8.75L11 15.25L9.99958 15.25C9.79461 15.2502 9.59052 15.3339 9.44258 15.4982C9.16545 15.8061 9.19035 16.2803 9.4982 16.5574C9.55979 16.6129 9.66813 16.7307 9.84149 16.9238L9.87937 16.966C10.0311 17.1351 10.212 17.3368 10.3986 17.5295C10.5985 17.7359 10.827 17.9553 11.0583 18.1277C11.254 18.2736 11.5967 18.5 12 18.5C12.4033 18.5 12.746 18.2736 12.9417 18.1277C13.173 17.9553 13.4015 17.7359 13.6014 17.5295C13.788 17.3368 13.9689 17.1352 14.1206 16.966L14.1585 16.9238C14.3319 16.7307 14.4402 16.6129 14.5018 16.5574Z',
  d4: 'M22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L12.0572 22.25L11.9428 22.25L11.9428 22.25C9.7521 22.25 8.03143 22.25 6.68802 22.0694C5.31136 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 12.0572L1.75 11.9428L1.75 11.9428C1.74999 9.7521 1.74998 8.03143 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428L22.25 12.0572Z',
  d5: 'M14.5574 15.4982C14.8345 15.8061 14.8096 16.2803 14.5018 16.5574C14.4402 16.6129 14.3319 16.7307 14.1585 16.9238L14.1206 16.966C13.9689 17.1352 13.788 17.3368 13.6014 17.5295C13.4015 17.7359 13.173 17.9553 12.9417 18.1277C12.746 18.2736 12.4033 18.5 12 18.5C11.5967 18.5 11.254 18.2736 11.0583 18.1277C10.827 17.9553 10.5985 17.7359 10.3986 17.5295C10.212 17.3368 10.0311 17.1351 9.87937 16.966L9.84149 16.9238C9.66813 16.7307 9.55979 16.6129 9.4982 16.5574C9.19035 16.2803 9.16545 15.8061 9.44258 15.4982C9.59052 15.3339 9.79461 15.2502 9.99958 15.25L11 15.25L11 8.75L9.99958 8.75001C9.79461 8.74983 9.59052 8.66612 9.44258 8.50179C9.16545 8.19394 9.19035 7.71972 9.4982 7.44259C9.55979 7.38714 9.66813 7.26934 9.84149 7.07622L9.87939 7.03398C10.0311 6.86486 10.212 6.66321 10.3986 6.4705C10.5985 6.26412 10.827 6.04469 11.0583 5.87229C11.254 5.72644 11.5967 5.5 12 5.5C12.4033 5.5 12.746 5.72644 12.9417 5.87229C13.173 6.04469 13.4015 6.26412 13.6014 6.47051C13.788 6.66321 13.9689 6.86486 14.1206 7.03399L14.1585 7.07622C14.3319 7.26934 14.4402 7.38714 14.5018 7.44259C14.8096 7.71972 14.8345 8.19394 14.5574 8.50179C14.4094 8.66623 14.2051 8.74994 14 8.75001L13 8.75L13 15.25L14 15.25C14.2051 15.2501 14.4094 15.3338 14.5574 15.4982Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M9 9.5L12 6.5L15 9.5M9 14.5L12 17.5L15 14.5M12 6.7237V17.2314',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM15.5294 8.46972L11.9991 4.93939L8.46875 8.46972L9.52941 9.53038L11.2491 7.81071V16.1894L9.52941 14.4697L8.46875 15.5304L11.9991 19.0607L15.5294 15.5304L14.4688 14.4697L12.7491 16.1894V7.81071L14.4688 9.53038L15.5294 8.46972Z',
} as const;

export const IconSquareArrowVerticalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-vertical-stroke-rounded IconSquareArrowVerticalStrokeRounded"
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

export const IconSquareArrowVerticalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-vertical-duotone-rounded IconSquareArrowVerticalDuotoneRounded"
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

export const IconSquareArrowVerticalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-vertical-twotone-rounded IconSquareArrowVerticalTwotoneRounded"
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

export const IconSquareArrowVerticalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-vertical-solid-rounded IconSquareArrowVerticalSolidRounded"
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

export const IconSquareArrowVerticalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-vertical-bulk-rounded IconSquareArrowVerticalBulkRounded"
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

export const IconSquareArrowVerticalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-vertical-stroke-sharp IconSquareArrowVerticalStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowVerticalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-vertical-solid-sharp IconSquareArrowVerticalSolidSharp"
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

export const iconPackOfSquareArrowVertical: TheIconSelfPack = {
  name: 'SquareArrowVertical',
  StrokeRounded: IconSquareArrowVerticalStrokeRounded,
  DuotoneRounded: IconSquareArrowVerticalDuotoneRounded,
  TwotoneRounded: IconSquareArrowVerticalTwotoneRounded,
  SolidRounded: IconSquareArrowVerticalSolidRounded,
  BulkRounded: IconSquareArrowVerticalBulkRounded,
  StrokeSharp: IconSquareArrowVerticalStrokeSharp,
  SolidSharp: IconSquareArrowVerticalSolidSharp,
};