import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M12.5192 14.5051C11.9845 13.9782 9.99749 12.6993 10.0025 11.9539C10.0777 11.2155 11.9912 10.025 12.4924 9.50145M17.0014 11.992L10.0084 12.0295M6.97656 8.03076L7.0194 16.0227',
  d3: 'M12.53 14.4849C11.9953 13.9549 10.0082 12.6748 10.0133 11.9248C10.0884 11.1948 12.002 10.0049 12.5032 9.47485M17.0122 11.9648L10.0192 12.0049M6.9873 8.00488L7.0302 15.9949',
  d4: 'M7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8L7.75 8ZM6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16H6.25ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM13.0227 10.0378C13.3198 9.74911 13.3265 9.27428 13.0378 8.97726C12.7491 8.68023 12.2743 8.67349 11.9773 8.96219L13.0227 10.0378ZM11.9773 15.0378C12.2743 15.3265 12.7491 15.3198 13.0378 15.0227C13.3265 14.7257 13.3198 14.2509 13.0227 13.9622L11.9773 15.0378ZM6.25 8L6.25 16H7.75L7.75 8L6.25 8ZM10 12.75H17V11.25H10V12.75ZM10.75 12C10.75 12.0832 10.7233 12.1116 10.7479 12.0656C10.7694 12.0255 10.8132 11.9601 10.8905 11.8694C11.0456 11.6873 11.274 11.4738 11.5452 11.2439C11.8132 11.0169 12.0975 10.7949 12.3593 10.5893C12.604 10.3971 12.8612 10.1949 13.0227 10.0378L11.9773 8.96219C11.886 9.05089 11.7042 9.19651 11.4328 9.40971C11.1784 9.60952 10.8693 9.85056 10.5755 10.0995C10.285 10.3457 9.98316 10.6213 9.74854 10.8968C9.63096 11.0348 9.51499 11.1904 9.42541 11.3578C9.33902 11.5193 9.25 11.7417 9.25 12H10.75ZM13.0227 13.9622C12.8612 13.8051 12.604 13.6029 12.3593 13.4107C12.0975 13.2051 11.8132 12.9831 11.5452 12.7561C11.274 12.5262 11.0456 12.3127 10.8905 12.1306C10.8132 12.0399 10.7694 11.9745 10.7479 11.9344C10.7233 11.8884 10.75 11.9168 10.75 12H9.25C9.25 12.2583 9.33902 12.4807 9.42541 12.6422C9.51499 12.8096 9.63096 12.9652 9.74854 13.1032C9.98316 13.3787 10.285 13.6543 10.5755 13.9005C10.8693 14.1494 11.1784 14.3905 11.4328 14.5903C11.7042 14.8035 11.886 14.9491 11.9773 15.0378L13.0227 13.9622Z',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM6.25 16L6.25 8C6.25 7.58579 6.58579 7.25 7 7.25C7.41421 7.25 7.75 7.58579 7.75 8L7.75 16C7.75 16.4142 7.41421 16.75 7 16.75C6.58579 16.75 6.25 16.4142 6.25 16ZM17.75 12C17.75 12.4142 17.4142 12.75 17 12.75H12.75V13.061C12.75 13.3347 12.7501 13.6033 12.7264 13.8111C12.7079 13.9739 12.6462 14.4463 12.2279 14.6628C11.8093 14.8795 11.43 14.6345 11.3014 14.5482C11.1367 14.4377 10.943 14.2689 10.7455 14.0969L10.7174 14.0724C10.4152 13.8093 10.0798 13.5032 9.81597 13.2002C9.68419 13.0489 9.55395 12.88 9.4532 12.7015C9.35855 12.5338 9.25 12.2885 9.25 12C9.25 11.7115 9.35855 11.4662 9.4532 11.2985C9.55395 11.12 9.68419 10.9511 9.81597 10.7998C10.0798 10.4968 10.4152 10.1907 10.7174 9.92757L10.7455 9.90312C10.943 9.73106 11.1367 9.56231 11.3014 9.4518C11.43 9.36549 11.8093 9.12048 12.2279 9.33716C12.6462 9.55368 12.7079 10.0261 12.7264 10.1889C12.7501 10.3967 12.75 10.6653 12.75 10.939V11.25H17C17.4142 11.25 17.75 11.5858 17.75 12Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M6.25 8L6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16L7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8Z',
  d8: 'M17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25L12.75 11.25L12.75 10.939C12.75 10.6653 12.7501 10.3967 12.7264 10.1889C12.7079 10.0261 12.6462 9.55368 12.2279 9.33716C11.8093 9.12048 11.43 9.36549 11.3014 9.4518C11.1367 9.56231 10.943 9.73106 10.7455 9.90312L10.7174 9.92757C10.4152 10.1907 10.0798 10.4968 9.81597 10.7998C9.68419 10.9511 9.55395 11.12 9.4532 11.2985C9.35855 11.4662 9.25 11.7115 9.25 12C9.25 12.2885 9.35855 12.5338 9.4532 12.7015C9.55395 12.88 9.68419 13.0488 9.81597 13.2002C10.0798 13.5032 10.4152 13.8093 10.7174 14.0724L10.7455 14.0969C10.943 14.2689 11.1367 14.4377 11.3014 14.5482C11.43 14.6345 11.8093 14.8795 12.2279 14.6628C12.6462 14.4463 12.7079 13.9739 12.7264 13.8111C12.7501 13.6033 12.75 13.3347 12.75 13.061L12.75 12.75L17 12.75Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M12.9787 8.99275L9.96026 11.9928L12.9782 14.9928M16.9863 11.9928L10.2224 11.9928M6.98633 16L6.98633 8',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM6.25 8L6.25 16H7.75L7.75 8H6.25ZM13.5303 9.53033L12.4697 8.46967L8.93934 12L12.4697 15.5303L13.5303 14.4697L11.8107 12.75H17V11.25H11.8107L13.5303 9.53033Z',
};

export const IconSquareArrowLeft03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-03-stroke-rounded IconSquareArrowLeft03StrokeRounded"
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

export const IconSquareArrowLeft03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-03-duotone-rounded IconSquareArrowLeft03DuotoneRounded"
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

export const IconSquareArrowLeft03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-03-twotone-rounded IconSquareArrowLeft03TwotoneRounded"
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

export const IconSquareArrowLeft03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-03-solid-rounded IconSquareArrowLeft03SolidRounded"
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

export const IconSquareArrowLeft03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-03-bulk-rounded IconSquareArrowLeft03BulkRounded"
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

export const IconSquareArrowLeft03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-03-stroke-sharp IconSquareArrowLeft03StrokeSharp"
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

export const IconSquareArrowLeft03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-03-solid-sharp IconSquareArrowLeft03SolidSharp"
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

export const iconPackOfSquareArrowLeft03: TheIconSelfPack = {
  name: 'SquareArrowLeft03',
  StrokeRounded: IconSquareArrowLeft03StrokeRounded,
  DuotoneRounded: IconSquareArrowLeft03DuotoneRounded,
  TwotoneRounded: IconSquareArrowLeft03TwotoneRounded,
  SolidRounded: IconSquareArrowLeft03SolidRounded,
  BulkRounded: IconSquareArrowLeft03BulkRounded,
  StrokeSharp: IconSquareArrowLeft03StrokeSharp,
  SolidSharp: IconSquareArrowLeft03SolidSharp,
};