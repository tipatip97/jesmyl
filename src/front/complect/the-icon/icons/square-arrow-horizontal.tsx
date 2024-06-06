import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M6 12H18M6 12C6 11.2998 7.9943 9.99153 8.5 9.5M6 12C6 12.7002 7.9943 14.0085 8.5 14.5M18 12C18 11.2998 16.0057 9.99153 15.5 9.5M18 12C18 12.7002 16.0057 14.0085 15.5 14.5',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM16.5574 9.49821C16.2803 9.19037 15.8061 9.16547 15.4982 9.4426C15.3338 9.59063 15.2501 9.7949 15.25 10L15.25 11H8.75L8.75001 10C8.74994 9.7949 8.66623 9.59063 8.50179 9.4426C8.19394 9.16547 7.71972 9.19037 7.44259 9.49821C7.38715 9.55981 7.26934 9.66814 7.07622 9.8415L7.03399 9.8794C6.86486 10.0311 6.66321 10.212 6.47051 10.3986C6.26412 10.5985 6.04469 10.827 5.87229 11.0583C5.72644 11.254 5.5 11.5967 5.5 12C5.5 12.4033 5.72644 12.746 5.87229 12.9417C6.04469 13.173 6.26412 13.4015 6.47051 13.6014C6.66321 13.788 6.86486 13.9689 7.03399 14.1206L7.07622 14.1585C7.26934 14.3319 7.38715 14.4402 7.44259 14.5018C7.71972 14.8096 8.19394 14.8345 8.50179 14.5574C8.66612 14.4095 8.74983 14.2054 8.75001 14.0004L8.75 13H15.25L15.25 14.0004C15.2502 14.2054 15.3339 14.4095 15.4982 14.5574C15.8061 14.8345 16.2803 14.8096 16.5574 14.5018C16.6129 14.4402 16.7307 14.3319 16.9238 14.1585L16.966 14.1206C17.1351 13.9689 17.3368 13.788 17.5295 13.6014C17.7359 13.4015 17.9553 13.173 18.1277 12.9417C18.2736 12.746 18.5 12.4033 18.5 12C18.5 11.5967 18.2736 11.254 18.1277 11.0583C17.9553 10.827 17.7359 10.5985 17.5295 10.3986C17.3368 10.212 17.1352 10.0311 16.966 9.87943L16.9238 9.8415C16.7307 9.66814 16.6129 9.55981 16.5574 9.49821Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M15.4982 9.4426C15.8061 9.16547 16.2803 9.19037 16.5574 9.49821C16.6129 9.55981 16.7307 9.66814 16.9238 9.8415L16.966 9.87943C17.1352 10.0311 17.3368 10.212 17.5295 10.3986C17.7359 10.5985 17.9553 10.827 18.1277 11.0583C18.2736 11.254 18.5 11.5967 18.5 12C18.5 12.4033 18.2736 12.746 18.1277 12.9417C17.9553 13.173 17.7359 13.4015 17.5295 13.6014C17.3368 13.788 17.1351 13.9689 16.966 14.1206L16.9238 14.1585C16.7307 14.3319 16.6129 14.4402 16.5574 14.5018C16.2803 14.8096 15.8061 14.8345 15.4982 14.5574C15.3339 14.4095 15.2502 14.2054 15.25 14.0004L15.25 13H8.75L8.75001 14.0004C8.74983 14.2054 8.66612 14.4095 8.50179 14.5574C8.19394 14.8345 7.71972 14.8096 7.44259 14.5018C7.38714 14.4402 7.26934 14.3319 7.07622 14.1585L7.03399 14.1206C6.86486 13.9689 6.66321 13.788 6.47051 13.6014C6.26412 13.4015 6.04469 13.173 5.87229 12.9417C5.72644 12.746 5.5 12.4033 5.5 12C5.5 11.5967 5.72644 11.254 5.87229 11.0583C6.04469 10.827 6.26412 10.5985 6.47051 10.3986C6.66321 10.212 6.86486 10.0311 7.03399 9.8794L7.07622 9.8415C7.26934 9.66814 7.38714 9.55981 7.44259 9.49821C7.71972 9.19037 8.19394 9.16547 8.50179 9.4426C8.66623 9.59063 8.74994 9.79489 8.75001 10L8.75 11H15.25L15.25 10C15.2501 9.79489 15.3338 9.59063 15.4982 9.4426Z',
  d6: 'M21 3V21H3V3H21Z',
  d7: 'M9.5 9L6.5 12L9.5 15M14.5 9L17.5 12L14.5 15M6.79895 12H17.2832',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM9.53044 9.53033L8.46978 8.46967L4.93945 12L8.46978 15.5303L9.53044 14.4697L7.81077 12.75H16.1895L14.4698 14.4697L15.5304 15.5303L19.0608 12L15.5304 8.46967L14.4698 9.53033L16.1895 11.25H7.81077L9.53044 9.53033Z',
};

export const IconSquareArrowHorizontalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-horizontal-stroke-rounded IconSquareArrowHorizontalStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowHorizontalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-horizontal-duotone-rounded IconSquareArrowHorizontalDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowHorizontalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-horizontal-twotone-rounded IconSquareArrowHorizontalTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowHorizontalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-horizontal-solid-rounded IconSquareArrowHorizontalSolidRounded"
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

export const IconSquareArrowHorizontalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-horizontal-bulk-rounded IconSquareArrowHorizontalBulkRounded"
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

export const IconSquareArrowHorizontalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-horizontal-stroke-sharp IconSquareArrowHorizontalStrokeSharp"
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

export const IconSquareArrowHorizontalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-horizontal-solid-sharp IconSquareArrowHorizontalSolidSharp"
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

export const iconPackOfSquareArrowHorizontal: TheIconSelfPack = {
  name: 'SquareArrowHorizontal',
  StrokeRounded: IconSquareArrowHorizontalStrokeRounded,
  DuotoneRounded: IconSquareArrowHorizontalDuotoneRounded,
  TwotoneRounded: IconSquareArrowHorizontalTwotoneRounded,
  SolidRounded: IconSquareArrowHorizontalSolidRounded,
  BulkRounded: IconSquareArrowHorizontalBulkRounded,
  StrokeSharp: IconSquareArrowHorizontalStrokeSharp,
  SolidSharp: IconSquareArrowHorizontalSolidSharp,
};