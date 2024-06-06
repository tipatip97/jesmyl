import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M14.5078 11.4936C13.9781 12.0255 12.6886 14.0057 11.9432 13.9966C11.2053 13.9175 10.025 11.9976 9.50414 11.4936M12.0189 6.99805V13.9911M8.00391 17.0015H15.996',
  d3: 'M14.5078 11.49C13.9781 12.03 12.6885 14.01 11.9432 14C11.2052 13.92 10.025 12 9.50411 11.49M12.0188 7V13.99M8.00391 17H15.996',
  d4: 'M16 16.25C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75V16.25ZM8 17.75C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25L8 17.75ZM11.25 7C11.25 6.58579 11.5858 6.25 12 6.25C12.4142 6.25 12.75 6.58579 12.75 7H11.25ZM13.9622 10.9773C14.2509 10.6802 14.7257 10.6735 15.0227 10.9622C15.3198 11.2509 15.3265 11.7257 15.0378 12.0227L13.9622 10.9773ZM8.96219 12.0227C8.67349 11.7257 8.68023 11.2509 8.97726 10.9622C9.27428 10.6735 9.74911 10.6802 10.0378 10.9773L8.96219 12.0227ZM16 17.75L8 17.75L8 16.25L16 16.25V17.75ZM11.25 14V7H12.75V14H11.25ZM12 13.25C11.9168 13.25 11.8884 13.2767 11.9344 13.2521C11.9745 13.2306 12.0399 13.1868 12.1306 13.1095C12.3127 12.9544 12.5262 12.726 12.7561 12.4548C12.9831 12.1868 13.2051 11.9025 13.4107 11.6407C13.6029 11.396 13.8051 11.1388 13.9622 10.9773L15.0378 12.0227C14.9491 12.114 14.8035 12.2958 14.5903 12.5672C14.3905 12.8216 14.1494 13.1307 13.9005 13.4245C13.6543 13.715 13.3787 14.0168 13.1032 14.2515C12.9652 14.369 12.8096 14.485 12.6422 14.5746C12.4807 14.661 12.2583 14.75 12 14.75V13.25ZM10.0378 10.9773C10.1949 11.1388 10.3971 11.396 10.5893 11.6407C10.7949 11.9025 11.0169 12.1868 11.2439 12.4548C11.4738 12.726 11.6873 12.9544 11.8694 13.1095C11.9601 13.1868 12.0255 13.2306 12.0656 13.2521C12.1116 13.2767 12.0832 13.25 12 13.25V14.75C11.7417 14.75 11.5193 14.661 11.3578 14.5746C11.1904 14.485 11.0348 14.369 10.8968 14.2515C10.6213 14.0168 10.3457 13.715 10.0995 13.4245C9.85056 13.1307 9.60953 12.8216 9.40971 12.5672C9.19651 12.2958 9.05089 12.114 8.96219 12.0227L10.0378 10.9773Z',
  d5: 'M1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 12.0572L22.25 11.9428L22.25 11.9428C22.25 9.7521 22.25 8.03143 22.0694 6.68802C21.8843 5.31136 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L12.0572 1.75L11.9428 1.75L11.9428 1.75C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802ZM16 17.75L8 17.75C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25L16 16.25C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7L12.75 11.25L13.061 11.25C13.3347 11.25 13.6033 11.2499 13.8111 11.2736C13.9739 11.2921 14.4463 11.3538 14.6628 11.7721C14.8795 12.1907 14.6345 12.57 14.5482 12.6986C14.4377 12.8633 14.2689 13.057 14.0969 13.2545L14.0724 13.2826C13.8093 13.5848 13.5032 13.9202 13.2002 14.184C13.0488 14.3158 12.88 14.446 12.7015 14.5468C12.5338 14.6414 12.2885 14.75 12 14.75C11.7115 14.75 11.4662 14.6414 11.2985 14.5468C11.12 14.446 10.9511 14.3158 10.7998 14.184C10.4968 13.9202 10.1907 13.5848 9.92757 13.2826L9.90312 13.2545C9.73106 13.057 9.56231 12.8633 9.4518 12.6986C9.36549 12.57 9.12048 12.1907 9.33716 11.7721C9.55368 11.3538 10.0261 11.2921 10.1889 11.2736C10.3967 11.2499 10.6653 11.25 10.939 11.25L11.25 11.25L11.25 7C11.25 6.58579 11.5858 6.25 12 6.25Z',
  d6: 'M1.75 11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.7521 1.74999 11.9428 1.75L11.9428 1.75L12.0572 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31136 22.0694 6.68802C22.25 8.03143 22.25 9.7521 22.25 11.9428L22.25 11.9428L22.25 12.0572L22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L11.9428 22.25C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 11.9428Z',
  d7: 'M8 17.75L16 17.75C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25L8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75Z',
  d8: 'M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L11.25 11.25H10.939C10.6653 11.25 10.3967 11.2499 10.1889 11.2736C10.0261 11.2921 9.55368 11.3538 9.33716 11.7721C9.12048 12.1907 9.36549 12.57 9.4518 12.6986C9.56231 12.8633 9.73106 13.057 9.90312 13.2545L9.92757 13.2826C10.1907 13.5848 10.4968 13.9202 10.7998 14.184C10.9512 14.3158 11.12 14.446 11.2985 14.5468C11.4662 14.6414 11.7115 14.75 12 14.75C12.2885 14.75 12.5338 14.6414 12.7015 14.5468C12.88 14.446 13.0489 14.3158 13.2002 14.184C13.5032 13.9202 13.8093 13.5848 14.0724 13.2826L14.0969 13.2545C14.2689 13.057 14.4377 12.8633 14.5482 12.6986C14.6345 12.57 14.8795 12.1907 14.6628 11.7721C14.4463 11.3538 13.9739 11.2921 13.8111 11.2736C13.6033 11.2499 13.3347 11.25 13.061 11.25L12.75 11.25L12.75 7Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M15.0072 11.0076L12.0072 14.0261L9.00725 11.0081M12.0072 7L12.0072 13.5881M8 17H16',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM12.75 12.1894L12.75 7H11.25L11.25 12.1894L9.53033 10.4697L8.46967 11.5304L12 15.0607L15.5303 11.5304L14.4697 10.4697L12.75 12.1894ZM16 17.75V16.25H8V17.75H16Z',
};

export const IconSquareArrowDown03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-03-stroke-rounded IconSquareArrowDown03StrokeRounded"
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

export const IconSquareArrowDown03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-03-duotone-rounded IconSquareArrowDown03DuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-03-twotone-rounded IconSquareArrowDown03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-03-solid-rounded IconSquareArrowDown03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-03-bulk-rounded IconSquareArrowDown03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-03-stroke-sharp IconSquareArrowDown03StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDown03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-03-solid-sharp IconSquareArrowDown03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareArrowDown03: TheIconSelfPack = {
  name: 'SquareArrowDown03',
  StrokeRounded: IconSquareArrowDown03StrokeRounded,
  DuotoneRounded: IconSquareArrowDown03DuotoneRounded,
  TwotoneRounded: IconSquareArrowDown03TwotoneRounded,
  SolidRounded: IconSquareArrowDown03SolidRounded,
  BulkRounded: IconSquareArrowDown03BulkRounded,
  StrokeSharp: IconSquareArrowDown03StrokeSharp,
  SolidSharp: IconSquareArrowDown03SolidSharp,
};