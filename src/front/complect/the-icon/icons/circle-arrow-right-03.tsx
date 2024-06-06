import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M11.4966 9.49138C12.0279 10.0217 14.0065 11.3136 13.9966 12.059C13.9166 12.7968 11.9953 13.9748 11.4906 14.4951M6.99805 11.975L13.9911 11.9833M16.9967 16.0019L17.0063 8.00977',
  d3: 'M11.4726 9.49623C12.0162 10.0222 14.0052 11.298 14.0004 12.0433C13.9255 12.7818 12.0137 13.9754 11.5074 14.4998M7 12.0164L13.9898 11.9678M17.0277 15.9616L16.9721 7.96973',
  d4: 'M16.25 16C16.25 16.4142 16.5858 16.75 17 16.75C17.4142 16.75 17.75 16.4142 17.75 16H16.25ZM17.75 8C17.75 7.58579 17.4142 7.25 17 7.25C16.5858 7.25 16.25 7.58579 16.25 8H17.75ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75L7 11.25ZM10.9773 13.9622C10.6802 14.2509 10.6735 14.7257 10.9622 15.0227C11.2509 15.3198 11.7257 15.3265 12.0227 15.0378L10.9773 13.9622ZM12.0227 8.96219C11.7257 8.67349 11.2509 8.68023 10.9622 8.97726C10.6735 9.27428 10.6802 9.74911 10.9773 10.0378L12.0227 8.96219ZM17.75 16V8H16.25V16H17.75ZM14 11.25L7 11.25L7 12.75L14 12.75V11.25ZM13.25 12C13.25 11.9168 13.2767 11.8884 13.2521 11.9344C13.2306 11.9745 13.1868 12.0399 13.1095 12.1306C12.9544 12.3127 12.726 12.5262 12.4548 12.7561C12.1868 12.9831 11.9025 13.2051 11.6407 13.4107C11.396 13.6029 11.1388 13.8051 10.9773 13.9622L12.0227 15.0378C12.114 14.9491 12.2958 14.8035 12.5672 14.5903C12.8216 14.3905 13.1307 14.1494 13.4245 13.9005C13.715 13.6543 14.0168 13.3787 14.2515 13.1032C14.369 12.9652 14.485 12.8096 14.5746 12.6422C14.661 12.4807 14.75 12.2583 14.75 12H13.25ZM10.9773 10.0378C11.1388 10.1949 11.396 10.3971 11.6407 10.5893C11.9025 10.7949 12.1868 11.0169 12.4548 11.2439C12.726 11.4738 12.9544 11.6873 13.1095 11.8694C13.1868 11.9601 13.2306 12.0255 13.2521 12.0656C13.2767 12.1116 13.25 12.0832 13.25 12H14.75C14.75 11.7417 14.661 11.5193 14.5746 11.3578C14.485 11.1904 14.369 11.0348 14.2515 10.8968C14.0168 10.6213 13.715 10.3457 13.4245 10.0995C13.1307 9.85056 12.8216 9.60952 12.5672 9.40971C12.2958 9.19651 12.114 9.05089 12.0227 8.96219L10.9773 10.0378Z',
  d5: 'M1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12ZM5.5 12C5.5 11.5858 5.83579 11.25 6.25 11.25L10.5 11.25L10.5 10.939C10.4999 10.6653 10.4999 10.3967 10.5236 10.1889C10.5421 10.0261 10.6038 9.55368 11.0221 9.33716C11.4407 9.12048 11.82 9.36549 11.9486 9.4518C12.1133 9.56231 12.307 9.73107 12.5045 9.90312L12.5326 9.92757C12.8348 10.1907 13.1702 10.4968 13.434 10.7998C13.5658 10.9511 13.696 11.12 13.7968 11.2985C13.8914 11.4662 14 11.7115 14 12C14 12.2885 13.8914 12.5338 13.7968 12.7015C13.696 12.88 13.5658 13.0488 13.434 13.2002C13.1702 13.5032 12.8348 13.8093 12.5326 14.0724L12.5045 14.0969C12.307 14.2689 12.1133 14.4377 11.9486 14.5482C11.82 14.6345 11.4407 14.8795 11.0221 14.6628C10.6038 14.4463 10.5421 13.9739 10.5236 13.8111C10.4999 13.6033 10.4999 13.3347 10.5 13.061L10.5 12.75L6.25 12.75C5.83579 12.75 5.5 12.4142 5.5 12ZM16.25 7.25C16.6642 7.25 17 7.58579 17 8L17 16C17 16.4142 16.6642 16.75 16.25 16.75C15.8358 16.75 15.5 16.4142 15.5 16L15.5 8C15.5 7.58579 15.8358 7.25 16.25 7.25Z',
  d6: 'M12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75Z',
  d7: 'M17 16L17 8C17 7.58579 16.6642 7.25 16.25 7.25C15.8358 7.25 15.5 7.58579 15.5 8L15.5 16C15.5 16.4142 15.8358 16.75 16.25 16.75C16.6642 16.75 17 16.4142 17 16Z',
  d8: 'M6.25 11.25C5.83579 11.25 5.5 11.5858 5.5 12C5.5 12.4142 5.83579 12.75 6.25 12.75L10.5 12.75L10.5 13.061C10.5 13.3347 10.4999 13.6033 10.5236 13.8111C10.5421 13.9739 10.6038 14.4463 11.0221 14.6628C11.4407 14.8795 11.82 14.6345 11.9486 14.5482C12.1133 14.4377 12.307 14.2689 12.5045 14.0969L12.5326 14.0724C12.8348 13.8093 13.1702 13.5032 13.434 13.2002C13.5658 13.0488 13.696 12.88 13.7968 12.7015C13.8914 12.5338 14 12.2885 14 12C14 11.7115 13.8914 11.4662 13.7968 11.2985C13.696 11.12 13.5658 10.9511 13.434 10.7998C13.1702 10.4968 12.8348 10.1907 12.5326 9.92757L12.5045 9.90312C12.307 9.73107 12.1133 9.56231 11.9486 9.4518C11.82 9.36549 11.4407 9.12048 11.0221 9.33716C10.6038 9.55368 10.5421 10.0261 10.5236 10.1889C10.4999 10.3967 10.5 10.6653 10.5 10.939L10.5 11.25L6.25 11.25Z',
  d9: 'M10.5076 15.0072L13.5261 12.0072L10.5081 9.00725M6.5 12.0072L13.2462 12.0072M16.5 8V16',
  d10: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM15.875 8H17.375V16H15.875V8ZM10.0947 9.53033L11.1553 8.46967L14.6857 12L11.1553 15.5303L10.0947 14.4697L11.8143 12.75H6.625V11.25H11.8143L10.0947 9.53033Z',
};

export const IconCircleArrowRight03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-right-03-stroke-rounded IconCircleArrowRight03StrokeRounded"
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

export const IconCircleArrowRight03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-right-03-duotone-rounded IconCircleArrowRight03DuotoneRounded"
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

export const IconCircleArrowRight03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-right-03-twotone-rounded IconCircleArrowRight03TwotoneRounded"
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

export const IconCircleArrowRight03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-right-03-solid-rounded IconCircleArrowRight03SolidRounded"
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

export const IconCircleArrowRight03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-right-03-bulk-rounded IconCircleArrowRight03BulkRounded"
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

export const IconCircleArrowRight03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-right-03-stroke-sharp IconCircleArrowRight03StrokeSharp"
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

export const IconCircleArrowRight03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="circle-arrow-right-03-solid-sharp IconCircleArrowRight03SolidSharp"
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

export const iconPackOfCircleArrowRight03: TheIconSelfPack = {
  name: 'CircleArrowRight03',
  StrokeRounded: IconCircleArrowRight03StrokeRounded,
  DuotoneRounded: IconCircleArrowRight03DuotoneRounded,
  TwotoneRounded: IconCircleArrowRight03TwotoneRounded,
  SolidRounded: IconCircleArrowRight03SolidRounded,
  BulkRounded: IconCircleArrowRight03BulkRounded,
  StrokeSharp: IconCircleArrowRight03StrokeSharp,
  SolidSharp: IconCircleArrowRight03SolidSharp,
};