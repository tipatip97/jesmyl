import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M9.48581 12.5068C10.0159 11.9753 11.3066 9.99591 12.0519 10.0054C12.7899 10.085 13.969 12.0056 14.4895 12.5099M11.9721 17.0039L11.9763 10.0108M15.9931 7.00289L8.00098 6.99805',
  d3: 'M9.48881 12.51C10.0188 11.98 11.3096 10 12.0549 10.01C12.7928 10.09 13.9719 12.01 14.4925 12.51M11.975 17L11.9793 10.01M15.996 7H8.00391',
  d4: 'M16 7.75C16.4142 7.75 16.75 7.41421 16.75 7C16.75 6.58579 16.4142 6.25 16 6.25V7.75ZM8 6.25C7.58579 6.25 7.25 6.58579 7.25 7C7.25 7.41421 7.58579 7.75 8 7.75L8 6.25ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM13.9622 13.0227C14.2509 13.3198 14.7257 13.3265 15.0227 13.0378C15.3198 12.7491 15.3265 12.2743 15.0378 11.9773L13.9622 13.0227ZM8.96219 11.9773C8.67349 12.2743 8.68023 12.7491 8.97726 13.0378C9.27428 13.3265 9.74911 13.3198 10.0378 13.0227L8.96219 11.9773ZM16 6.25L8 6.25L8 7.75L16 7.75V6.25ZM11.25 10V17H12.75V10H11.25ZM12 10.75C11.9168 10.75 11.8884 10.7233 11.9344 10.7479C11.9745 10.7694 12.0399 10.8132 12.1306 10.8905C12.3127 11.0456 12.5262 11.274 12.7561 11.5452C12.9831 11.8132 13.2051 12.0975 13.4107 12.3593C13.6029 12.604 13.8051 12.8612 13.9622 13.0227L15.0378 11.9773C14.9491 11.886 14.8035 11.7042 14.5903 11.4328C14.3905 11.1784 14.1494 10.8693 13.9005 10.5755C13.6543 10.285 13.3787 9.98316 13.1032 9.74854C12.9652 9.63096 12.8096 9.51499 12.6422 9.42541C12.4807 9.33902 12.2583 9.25 12 9.25V10.75ZM10.0378 13.0227C10.1949 12.8612 10.3971 12.604 10.5893 12.3593C10.7949 12.0975 11.0169 11.8132 11.2439 11.5452C11.4738 11.274 11.6873 11.0456 11.8694 10.8905C11.9601 10.8132 12.0255 10.7694 12.0656 10.7479C12.1116 10.7233 12.0832 10.75 12 10.75V9.25C11.7417 9.25 11.5193 9.33902 11.3578 9.42541C11.1904 9.51499 11.0348 9.63096 10.8968 9.74854C10.6213 9.98316 10.3457 10.285 10.0995 10.5755C9.85056 10.8693 9.60953 11.1784 9.40971 11.4328C9.19651 11.7042 9.05089 11.886 8.96219 11.9773L10.0378 13.0227Z',
  d5: 'M22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03143 1.74999 9.7521 1.75 11.9428L1.75 11.9428L1.75 12.0572L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31136 21.8843 6.68802 22.0694C8.03143 22.25 9.7521 22.25 11.9428 22.25L11.9428 22.25L12.0572 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312ZM8 6.25L16 6.25C16.4142 6.25 16.75 6.58579 16.75 7C16.75 7.41421 16.4142 7.75 16 7.75L8 7.75C7.58579 7.75 7.25 7.41421 7.25 7C7.25 6.58579 7.58579 6.25 8 6.25ZM12 17.75C11.5858 17.75 11.25 17.4142 11.25 17L11.25 12.75L10.939 12.75C10.6653 12.75 10.3967 12.7501 10.1889 12.7264C10.0261 12.7079 9.55368 12.6462 9.33716 12.2279C9.12048 11.8093 9.36549 11.43 9.4518 11.3014C9.56231 11.1367 9.73107 10.943 9.90312 10.7455L9.92757 10.7174C10.1907 10.4152 10.4968 10.0798 10.7998 9.81597C10.9511 9.68419 11.12 9.55395 11.2985 9.4532C11.4662 9.35855 11.7115 9.25 12 9.25C12.2885 9.25 12.5338 9.35855 12.7015 9.4532C12.88 9.55395 13.0488 9.68419 13.2002 9.81597C13.5032 10.0798 13.8093 10.4152 14.0724 10.7174L14.0969 10.7455C14.2689 10.943 14.4377 11.1367 14.5482 11.3014C14.6345 11.43 14.8795 11.8093 14.6628 12.2279C14.4463 12.6462 13.9739 12.7079 13.8111 12.7264C13.6033 12.7501 13.3347 12.75 13.061 12.75L12.75 12.75L12.75 17C12.75 17.4142 12.4142 17.75 12 17.75Z',
  d6: 'M22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L12.0572 22.25L11.9428 22.25L11.9428 22.25C9.7521 22.25 8.03143 22.25 6.68802 22.0694C5.31136 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 12.0572L1.75 11.9428L1.75 11.9428C1.74999 9.7521 1.74998 8.03143 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428L22.25 12.0572Z',
  d7: 'M16 6.25L8 6.25C7.58579 6.25 7.25 6.58579 7.25 7C7.25 7.41421 7.58579 7.75 8 7.75L16 7.75C16.4142 7.75 16.75 7.41421 16.75 7C16.75 6.58579 16.4142 6.25 16 6.25Z',
  d8: 'M11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17L12.75 12.75L13.061 12.75C13.3347 12.75 13.6033 12.7501 13.8111 12.7264C13.9739 12.7079 14.4463 12.6462 14.6628 12.2279C14.8795 11.8093 14.6345 11.43 14.5482 11.3014C14.4377 11.1367 14.2689 10.943 14.0969 10.7455L14.0724 10.7174C13.8093 10.4152 13.5032 10.0798 13.2002 9.81597C13.0489 9.68419 12.88 9.55395 12.7015 9.4532C12.5338 9.35855 12.2885 9.25 12 9.25C11.7115 9.25 11.4662 9.35855 11.2985 9.4532C11.12 9.55395 10.9512 9.68419 10.7998 9.81597C10.4968 10.0798 10.1907 10.4152 9.92757 10.7174L9.90312 10.7455C9.73107 10.943 9.56231 11.1367 9.4518 11.3014C9.36549 11.43 9.12048 11.8093 9.33716 12.2279C9.55368 12.6462 10.0261 12.7079 10.1889 12.7264C10.3967 12.7501 10.6653 12.75 10.939 12.75L11.25 12.75L11.25 17Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M15.0063 12.9924L12.0063 9.97393L9.00627 12.9919M12.0063 17L12.0063 10.3958M7.99902 7L15.999 7',
  d11: 'M3.00098 2.25C2.58676 2.25 2.25098 2.58579 2.25098 3V21C2.25098 21.4142 2.58676 21.75 3.00098 21.75H21.001C21.4152 21.75 21.751 21.4142 21.751 21V3C21.751 2.58579 21.4152 2.25 21.001 2.25H3.00098ZM15.999 6.25L7.99902 6.25V7.75L15.999 7.75V6.25ZM15.5311 12.4695L11.9987 8.93934L8.47047 12.4698L9.53148 13.5302L11.249 11.8115V17H12.749V11.8098L14.4708 13.5305L15.5311 12.4695Z',
} as const;

export const IconSquareArrowUp03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-03-stroke-rounded IconSquareArrowUp03StrokeRounded"
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

export const IconSquareArrowUp03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-03-duotone-rounded IconSquareArrowUp03DuotoneRounded"
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

export const IconSquareArrowUp03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-03-twotone-rounded IconSquareArrowUp03TwotoneRounded"
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

export const IconSquareArrowUp03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-03-solid-rounded IconSquareArrowUp03SolidRounded"
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

export const IconSquareArrowUp03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-03-bulk-rounded IconSquareArrowUp03BulkRounded"
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

export const IconSquareArrowUp03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-03-stroke-sharp IconSquareArrowUp03StrokeSharp"
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

export const IconSquareArrowUp03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-03-solid-sharp IconSquareArrowUp03SolidSharp"
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

export const iconPackOfSquareArrowUp03: TheIconSelfPack = {
  name: 'SquareArrowUp03',
  StrokeRounded: IconSquareArrowUp03StrokeRounded,
  DuotoneRounded: IconSquareArrowUp03DuotoneRounded,
  TwotoneRounded: IconSquareArrowUp03TwotoneRounded,
  SolidRounded: IconSquareArrowUp03SolidRounded,
  BulkRounded: IconSquareArrowUp03BulkRounded,
  StrokeSharp: IconSquareArrowUp03StrokeSharp,
  SolidSharp: IconSquareArrowUp03SolidSharp,
};