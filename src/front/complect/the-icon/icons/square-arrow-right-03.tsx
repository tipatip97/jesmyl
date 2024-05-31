import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M11.4947 9.48552C12.0259 10.0159 14.0045 11.3078 13.9946 12.0531C13.9146 12.791 11.9933 13.969 11.4887 14.4892M6.99609 11.9691L13.9892 11.9775M16.9948 15.996L17.0043 8.00391',
  d3: 'M11.4947 9.48999C12.0259 10.02 14.0045 11.31 13.9946 12.05C13.9146 12.79 11.9933 13.97 11.4887 14.49M6.99609 11.97L13.9892 11.98M16.9948 16L17.0043 8',
  d4: 'M16.25 16C16.25 16.4142 16.5858 16.75 17 16.75C17.4142 16.75 17.75 16.4142 17.75 16H16.25ZM17.75 8C17.75 7.58579 17.4142 7.25 17 7.25C16.5858 7.25 16.25 7.58579 16.25 8H17.75ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75L7 11.25ZM10.9773 13.9622C10.6802 14.2509 10.6735 14.7257 10.9622 15.0227C11.2509 15.3198 11.7257 15.3265 12.0227 15.0378L10.9773 13.9622ZM12.0227 8.96219C11.7257 8.67349 11.2509 8.68023 10.9622 8.97726C10.6735 9.27428 10.6802 9.74911 10.9773 10.0378L12.0227 8.96219ZM17.75 16V8H16.25V16H17.75ZM14 11.25L7 11.25L7 12.75L14 12.75V11.25ZM13.25 12C13.25 11.9168 13.2767 11.8884 13.2521 11.9344C13.2306 11.9745 13.1868 12.0399 13.1095 12.1306C12.9544 12.3127 12.726 12.5262 12.4548 12.7561C12.1868 12.9831 11.9025 13.2051 11.6407 13.4107C11.396 13.6029 11.1388 13.8051 10.9773 13.9622L12.0227 15.0378C12.114 14.9491 12.2958 14.8035 12.5672 14.5903C12.8216 14.3905 13.1307 14.1494 13.4245 13.9005C13.715 13.6543 14.0168 13.3787 14.2515 13.1032C14.369 12.9652 14.485 12.8096 14.5746 12.6422C14.661 12.4807 14.75 12.2583 14.75 12H13.25ZM10.9773 10.0378C11.1388 10.1949 11.396 10.3971 11.6407 10.5893C11.9025 10.7949 12.1868 11.0169 12.4548 11.2439C12.726 11.4738 12.9544 11.6873 13.1095 11.8694C13.1868 11.9601 13.2306 12.0255 13.2521 12.0656C13.2767 12.1116 13.25 12.0832 13.25 12H14.75C14.75 11.7417 14.661 11.5193 14.5746 11.3578C14.485 11.1904 14.369 11.0348 14.2515 10.8968C14.0168 10.6213 13.715 10.3457 13.4245 10.0995C13.1307 9.85056 12.8216 9.60952 12.5672 9.40971C12.2958 9.19651 12.114 9.05089 12.0227 8.96219L10.9773 10.0378Z',
  d5: 'M6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L12.0572 1.75L11.9428 1.75L11.9428 1.75C9.75211 1.74999 8.03144 1.74998 6.68803 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31136 1.93059 6.68802C1.74998 8.03143 1.74999 9.7521 1.75 11.9428L1.75 11.9428L1.75 12.0572L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694ZM17.75 8L17.75 16C17.75 16.4142 17.4142 16.75 17 16.75C16.5858 16.75 16.25 16.4142 16.25 16L16.25 8C16.25 7.58579 16.5858 7.25 17 7.25C17.4142 7.25 17.75 7.58579 17.75 8ZM6.25 12C6.25 11.5858 6.58579 11.25 7 11.25L11.25 11.25L11.25 10.939C11.25 10.6653 11.2499 10.3967 11.2736 10.1889C11.2921 10.0261 11.3538 9.55368 11.7721 9.33716C12.1907 9.12048 12.57 9.36549 12.6986 9.4518C12.8633 9.56231 13.057 9.73107 13.2545 9.90312L13.2826 9.92757C13.5848 10.1907 13.9202 10.4968 14.184 10.7998C14.3158 10.9511 14.446 11.12 14.5468 11.2985C14.6414 11.4662 14.75 11.7115 14.75 12C14.75 12.2885 14.6414 12.5338 14.5468 12.7015C14.446 12.88 14.3158 13.0488 14.184 13.2002C13.9202 13.5032 13.5848 13.8093 13.2826 14.0724L13.2545 14.0969C13.057 14.2689 12.8633 14.4377 12.6986 14.5482C12.57 14.6345 12.1907 14.8795 11.7721 14.6628C11.3538 14.4463 11.2921 13.9739 11.2736 13.8111C11.2499 13.6033 11.25 13.3347 11.25 13.061L11.25 12.75L7 12.75C6.58579 12.75 6.25 12.4142 6.25 12Z',
  d6: 'M11.9428 22.25C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 12.0572L1.75 11.9428L1.75 11.9428C1.74999 9.7521 1.74998 8.03143 1.93059 6.68802C2.11568 5.31136 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68803 1.93059C8.03144 1.74998 9.75211 1.74999 11.9428 1.75L11.9428 1.75L12.0572 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428L22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L11.9428 22.25Z',
  d7: 'M17.75 16L17.75 8C17.75 7.58579 17.4142 7.25 17 7.25C16.5858 7.25 16.25 7.58579 16.25 8L16.25 16C16.25 16.4142 16.5858 16.75 17 16.75C17.4142 16.75 17.75 16.4142 17.75 16Z',
  d8: 'M7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75L11.25 12.75L11.25 13.061C11.25 13.3347 11.2499 13.6033 11.2736 13.8111C11.2921 13.9739 11.3538 14.4463 11.7721 14.6628C12.1907 14.8795 12.57 14.6345 12.6986 14.5482C12.8633 14.4377 13.057 14.2689 13.2545 14.0969L13.2826 14.0724C13.5848 13.8093 13.9202 13.5032 14.184 13.2002C14.3158 13.0489 14.446 12.88 14.5468 12.7015C14.6414 12.5338 14.75 12.2885 14.75 12C14.75 11.7115 14.6414 11.4662 14.5468 11.2985C14.446 11.12 14.3158 10.9512 14.184 10.7998C13.9202 10.4968 13.5848 10.1907 13.2826 9.92757L13.2545 9.90312C13.057 9.73107 12.8633 9.56231 12.6986 9.4518C12.57 9.36549 12.1907 9.12048 11.7721 9.33716C11.3538 9.55368 11.2921 10.0261 11.2736 10.1889C11.2499 10.3967 11.25 10.6653 11.25 10.939L11.25 11.25L7 11.25Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M11.0076 8.99275L14.0261 11.9928L11.0081 14.9928M7 11.9928L13.5837 11.9928M17 16L17 8',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM16.25 16H17.75V8H16.25V16ZM10.4697 9.53033L12.1893 11.25H7V12.75H12.1893L10.4697 14.4697L11.5303 15.5303L15.0607 12L11.5303 8.46967L10.4697 9.53033Z',
} as const;

export const IconSquareArrowRight03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-03-stroke-rounded IconSquareArrowRight03StrokeRounded"
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

export const IconSquareArrowRight03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-03-duotone-rounded IconSquareArrowRight03DuotoneRounded"
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

export const IconSquareArrowRight03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-03-twotone-rounded IconSquareArrowRight03TwotoneRounded"
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

export const IconSquareArrowRight03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-03-solid-rounded IconSquareArrowRight03SolidRounded"
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

export const IconSquareArrowRight03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-03-bulk-rounded IconSquareArrowRight03BulkRounded"
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

export const IconSquareArrowRight03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-03-stroke-sharp IconSquareArrowRight03StrokeSharp"
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

export const IconSquareArrowRight03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-right-03-solid-sharp IconSquareArrowRight03SolidSharp"
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

export const iconPackOfSquareArrowRight03: TheIconSelfPack = {
  name: 'SquareArrowRight03',
  StrokeRounded: IconSquareArrowRight03StrokeRounded,
  DuotoneRounded: IconSquareArrowRight03DuotoneRounded,
  TwotoneRounded: IconSquareArrowRight03TwotoneRounded,
  SolidRounded: IconSquareArrowRight03SolidRounded,
  BulkRounded: IconSquareArrowRight03BulkRounded,
  StrokeSharp: IconSquareArrowRight03StrokeSharp,
  SolidSharp: IconSquareArrowRight03SolidSharp,
};