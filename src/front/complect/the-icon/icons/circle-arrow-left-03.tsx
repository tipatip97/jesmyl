import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M12.5028 9.49138C11.9716 10.0217 9.99296 11.3136 10.0029 12.059C10.0829 12.7968 12.0042 13.9748 12.5088 14.4951M17.0014 11.975L10.0083 11.9833M7.00268 16.0019L6.99316 8.00977',
  d3: 'M12.5058 9.4859C11.9745 10.0159 9.99587 11.3079 10.0058 12.0529C10.0858 12.7909 12.0071 13.9689 12.5117 14.4889M17.0043 11.9689L10.0112 11.9769M7.0056 15.9959L6.99609 8.00391',
  d4: 'M7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8L7.75 8ZM6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16H6.25ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM13.0227 10.0378C13.3198 9.74911 13.3265 9.27428 13.0378 8.97726C12.7491 8.68023 12.2743 8.67349 11.9773 8.96219L13.0227 10.0378ZM11.9773 15.0378C12.2743 15.3265 12.7491 15.3198 13.0378 15.0227C13.3265 14.7257 13.3198 14.2509 13.0227 13.9622L11.9773 15.0378ZM6.25 8L6.25 16H7.75L7.75 8L6.25 8ZM10 12.75H17V11.25H10V12.75ZM10.75 12C10.75 12.0832 10.7233 12.1116 10.7479 12.0656C10.7694 12.0255 10.8132 11.9601 10.8905 11.8694C11.0456 11.6873 11.274 11.4738 11.5452 11.2439C11.8132 11.0169 12.0975 10.7949 12.3593 10.5893C12.604 10.3971 12.8612 10.1949 13.0227 10.0378L11.9773 8.96219C11.886 9.05089 11.7042 9.19651 11.4328 9.40971C11.1784 9.60952 10.8693 9.85056 10.5755 10.0995C10.285 10.3457 9.98316 10.6213 9.74854 10.8968C9.63096 11.0348 9.51499 11.1904 9.42541 11.3578C9.33902 11.5193 9.25 11.7417 9.25 12H10.75ZM13.0227 13.9622C12.8612 13.8051 12.604 13.6029 12.3593 13.4107C12.0975 13.2051 11.8132 12.9831 11.5452 12.7561C11.274 12.5262 11.0456 12.3127 10.8905 12.1306C10.8132 12.0399 10.7694 11.9745 10.7479 11.9344C10.7233 11.8884 10.75 11.9168 10.75 12H9.25C9.25 12.2583 9.33902 12.4807 9.42541 12.6422C9.51499 12.8096 9.63096 12.9652 9.74854 13.1032C9.98316 13.3787 10.285 13.6543 10.5755 13.9005C10.8693 14.1494 11.1784 14.3905 11.4328 14.5903C11.7042 14.8035 11.886 14.9491 11.9773 15.0378L13.0227 13.9622Z',
  d5: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM18.5 12C18.5 12.4142 18.1642 12.75 17.75 12.75L13.5 12.75L13.5 13.061C13.5 13.3347 13.5001 13.6033 13.4764 13.8111C13.4579 13.9739 13.3962 14.4463 12.9779 14.6628C12.5593 14.8795 12.18 14.6345 12.0514 14.5482C11.8867 14.4377 11.693 14.2689 11.4955 14.0969L11.4674 14.0724C11.1652 13.8093 10.8298 13.5032 10.566 13.2002C10.4342 13.0489 10.304 12.88 10.2032 12.7015C10.1086 12.5338 10 12.2885 10 12C10 11.7115 10.1086 11.4662 10.2032 11.2985C10.304 11.12 10.4342 10.9512 10.566 10.7998C10.8298 10.4968 11.1652 10.1907 11.4674 9.92757L11.4955 9.90312C11.693 9.73106 11.8867 9.56232 12.0514 9.4518C12.18 9.36549 12.5593 9.12048 12.9779 9.33716C13.3962 9.55368 13.4579 10.0261 13.4764 10.1889C13.5001 10.3967 13.5 10.6653 13.5 10.939L13.5 11.25L17.75 11.25C18.1642 11.25 18.5 11.5858 18.5 12ZM7.75 16.75C7.33579 16.75 7 16.4142 7 16L7 8C7 7.58579 7.33579 7.25 7.75 7.25C8.16421 7.25 8.5 7.58579 8.5 8L8.5 16C8.5 16.4142 8.16421 16.75 7.75 16.75Z',
  d6: 'M12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25Z',
  d7: 'M7 8L7 16C7 16.4142 7.33579 16.75 7.75 16.75C8.16421 16.75 8.5 16.4142 8.5 16L8.5 8C8.5 7.58579 8.16421 7.25 7.75 7.25C7.33579 7.25 7 7.58579 7 8Z',
  d8: 'M17.75 12.75C18.1642 12.75 18.5 12.4142 18.5 12C18.5 11.5858 18.1642 11.25 17.75 11.25L13.5 11.25L13.5 10.939C13.5 10.6653 13.5001 10.3967 13.4764 10.1889C13.4579 10.0261 13.3962 9.55368 12.9779 9.33716C12.5593 9.12048 12.18 9.36549 12.0514 9.4518C11.8867 9.56231 11.693 9.73106 11.4955 9.90312L11.4674 9.92757C11.1652 10.1907 10.8298 10.4968 10.566 10.7998C10.4342 10.9512 10.304 11.12 10.2032 11.2985C10.1086 11.4662 10 11.7115 10 12C10 12.2885 10.1086 12.5338 10.2032 12.7015C10.304 12.88 10.4342 13.0489 10.566 13.2002C10.8298 13.5032 11.1652 13.8093 11.4674 14.0724L11.4955 14.0969C11.693 14.2689 11.8867 14.4377 12.0514 14.5482C12.18 14.6345 12.5593 14.8795 12.9779 14.6628C13.3962 14.4463 13.4579 13.9739 13.4764 13.8111C13.5001 13.6033 13.5 13.3347 13.5 13.061L13.5 12.75L17.75 12.75Z',
  d9: 'M13.9924 15.0072L10.9739 12.0072L13.9919 9.00725M18 12.0072L11.344 12.0072M8 8L8 16',
  d10: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM8.125 8H6.625L6.625 16H8.125L8.125 8ZM13.9053 9.53033L12.8447 8.46967L9.31434 12L12.8447 15.5303L13.9053 14.4697L12.1857 12.75H17.375V11.25H12.1857L13.9053 9.53033Z',
} as const;

export const IconCircleArrowLeft03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-03-stroke-rounded IconCircleArrowLeft03StrokeRounded"
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

export const IconCircleArrowLeft03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-03-duotone-rounded IconCircleArrowLeft03DuotoneRounded"
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

export const IconCircleArrowLeft03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-03-twotone-rounded IconCircleArrowLeft03TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowLeft03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-03-solid-rounded IconCircleArrowLeft03SolidRounded"
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

export const IconCircleArrowLeft03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-03-bulk-rounded IconCircleArrowLeft03BulkRounded"
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

export const IconCircleArrowLeft03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-03-stroke-sharp IconCircleArrowLeft03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCircleArrowLeft03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-left-03-solid-sharp IconCircleArrowLeft03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCircleArrowLeft03: TheIconSelfPack = {
  name: 'CircleArrowLeft03',
  StrokeRounded: IconCircleArrowLeft03StrokeRounded,
  DuotoneRounded: IconCircleArrowLeft03DuotoneRounded,
  TwotoneRounded: IconCircleArrowLeft03TwotoneRounded,
  SolidRounded: IconCircleArrowLeft03SolidRounded,
  BulkRounded: IconCircleArrowLeft03BulkRounded,
  StrokeSharp: IconCircleArrowLeft03StrokeSharp,
  SolidSharp: IconCircleArrowLeft03SolidSharp,
};