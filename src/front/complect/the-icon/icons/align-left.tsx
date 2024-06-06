import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.00232 7.5C8.00232 6.65611 7.91895 5.68211 8.75232 5.20096C9.10039 5 9.5677 5 10.5023 5H11.5023C12.4369 5 12.9042 5 13.2523 5.20096C14.0857 5.68211 14.0023 6.65611 14.0023 7.5C14.0023 8.34389 14.0857 9.31789 13.2523 9.79904C12.9042 10 12.4369 10 11.5023 10H10.5023C9.5677 10 9.10039 10 8.75232 9.79904C7.91895 9.31789 8.00232 8.34389 8.00232 7.5Z',
  d2: 'M8.00232 16.5C8.00232 15.6561 7.91895 14.6821 8.75232 14.201C9.10039 14 9.5677 14 10.5023 14H17.5023C18.4369 14 18.9042 14 19.2523 14.201C20.0857 14.6821 20.0023 15.6561 20.0023 16.5C20.0023 17.3439 20.0857 18.3179 19.2523 18.799C18.9042 19 18.4369 19 17.5023 19H10.5023C9.5677 19 9.10039 19 8.75232 18.799C7.91895 18.3179 8.00232 17.3439 8.00232 16.5Z',
  d3: 'M4 2V22',
  d4: 'M7.25165 7.5C7.24814 7.14393 7.24226 6.49173 7.32922 6.06477C7.44189 5.51157 7.72238 4.92918 8.37665 4.55144C8.68386 4.37407 9.00981 4.30801 9.339 4.27818C9.65029 4.24997 10.0296 4.24998 10.4694 4.25L11.5339 4.25C11.9737 4.24998 12.353 4.24997 12.6643 4.27818C12.9935 4.30802 13.3194 4.37407 13.6266 4.55144C14.2809 4.92918 14.5614 5.51157 14.6741 6.06477C14.761 6.49173 14.7552 7.14393 14.7516 7.5C14.7552 7.85607 14.761 8.50827 14.6741 8.93523C14.5614 9.48842 14.2809 10.0708 13.6266 10.4486C13.3194 10.6259 12.9935 10.692 12.6643 10.7218C12.353 10.75 11.9737 10.75 11.5339 10.75L11.5339 10.75L10.4694 10.75L10.4694 10.75C10.0296 10.75 9.65028 10.75 9.339 10.7218C9.00981 10.692 8.68386 10.6259 8.37665 10.4486C7.72238 10.0708 7.44189 9.48842 7.32922 8.93523C7.24226 8.50827 7.24814 7.85607 7.25165 7.5Z',
  d5: 'M7.25165 16.5C7.24814 16.1439 7.24226 15.4917 7.32922 15.0648C7.44189 14.5116 7.72238 13.9292 8.37665 13.5514C8.68386 13.3741 9.00981 13.308 9.339 13.2782C9.65029 13.25 10.0296 13.25 10.4694 13.25L17.5339 13.25C17.9737 13.25 18.353 13.25 18.6643 13.2782C18.9935 13.308 19.3194 13.3741 19.6266 13.5514C20.2809 13.9292 20.5614 14.5116 20.6741 15.0648C20.761 15.4917 20.7552 16.1439 20.7516 16.5C20.7552 16.8561 20.761 17.5083 20.6741 17.9352C20.5614 18.4884 20.2809 19.0708 19.6266 19.4486C19.3194 19.6259 18.9935 19.692 18.6643 19.7218C18.353 19.75 17.9737 19.75 17.5339 19.75L17.5339 19.75L10.4694 19.75L10.4694 19.75C10.0296 19.75 9.65028 19.75 9.339 19.7218C9.00981 19.692 8.68386 19.6259 8.37665 19.4486C7.72238 19.0708 7.44189 18.4884 7.32922 17.9352C7.24226 17.5083 7.24814 16.8561 7.25165 16.5Z',
  d6: 'M4.25 1C3.69772 1 3.25 1.44772 3.25 2L3.25 22C3.25 22.5523 3.69772 23 4.25 23C4.80228 23 5.25 22.5523 5.25 22L5.25 2C5.25 1.44772 4.80228 1 4.25 1Z',
  d7: 'M7.24774 7.5C7.24423 7.14393 7.23835 6.49173 7.32531 6.06477C7.43799 5.51157 7.71848 4.92918 8.37274 4.55144C8.67995 4.37407 9.00591 4.30801 9.33509 4.27818C9.64638 4.24997 10.0257 4.24998 10.4655 4.25L11.53 4.25C11.9698 4.24998 12.3491 4.24997 12.6604 4.27818C12.9896 4.30802 13.3155 4.37407 13.6227 4.55144C14.277 4.92918 14.5575 5.51157 14.6702 6.06477C14.7571 6.49173 14.7513 7.14393 14.7477 7.5C14.7513 7.85607 14.7571 8.50827 14.6702 8.93523C14.5575 9.48842 14.277 10.0708 13.6227 10.4486C13.3155 10.6259 12.9896 10.692 12.6604 10.7218C12.3491 10.75 11.9698 10.75 11.53 10.75L11.53 10.75L10.4655 10.75L10.4655 10.75C10.0257 10.75 9.64638 10.75 9.33509 10.7218C9.00591 10.692 8.67995 10.6259 8.37274 10.4486C7.71848 10.0708 7.43799 9.48842 7.32531 8.93523C7.23835 8.50827 7.24423 7.85607 7.24774 7.5Z',
  d8: 'M7.24774 16.5C7.24423 16.1439 7.23835 15.4917 7.32531 15.0648C7.43799 14.5116 7.71848 13.9292 8.37274 13.5514C8.67995 13.3741 9.00591 13.308 9.33509 13.2782C9.64638 13.25 10.0257 13.25 10.4655 13.25L17.53 13.25C17.9698 13.25 18.3491 13.25 18.6604 13.2782C18.9896 13.308 19.3155 13.3741 19.6227 13.5514C20.277 13.9292 20.5575 14.5116 20.6702 15.0648C20.7571 15.4917 20.7513 16.1439 20.7477 16.5C20.7513 16.8561 20.7571 17.5083 20.6702 17.9352C20.5575 18.4884 20.277 19.0708 19.6227 19.4486C19.3155 19.6259 18.9896 19.692 18.6604 19.7218C18.3491 19.75 17.9698 19.75 17.53 19.75L17.53 19.75L10.4655 19.75L10.4655 19.75C10.0257 19.75 9.64637 19.75 9.33509 19.7218C9.00591 19.692 8.67995 19.6259 8.37274 19.4486C7.71848 19.0708 7.43799 18.4884 7.32531 17.9352C7.23835 17.5083 7.24423 16.8561 7.24774 16.5Z',
  d9: 'M4.24805 1C3.69576 1 3.24805 1.44772 3.24805 2L3.24805 22C3.24805 22.5523 3.69576 23 4.24805 23C4.80033 23 5.24805 22.5523 5.24805 22L5.24805 2C5.24805 1.44772 4.80033 1 4.24805 1Z',
  d10: 'M8 10H14L13.9961 5H8V10Z',
  d11: 'M8 19H20L19.9922 14H8V19Z',
  d12: 'M14.7461 5C14.7461 4.58579 14.4103 4.25 13.9961 4.25H8C7.58602 4.25 7.25032 4.58543 7.25 4.99941L7.24609 9.99941C7.24594 10.1984 7.32489 10.3893 7.46556 10.5301C7.60623 10.6709 7.79708 10.75 7.99609 10.75H13.9961C14.195 10.75 14.3858 10.671 14.5264 10.5303C14.6671 10.3897 14.7461 10.1989 14.7461 10V5Z',
  d13: 'M20.75 14C20.75 13.5858 20.4142 13.25 20 13.25H8C7.58579 13.25 7.25 13.5858 7.25 14V19C7.25 19.4142 7.58579 19.75 8 19.75H20C20.1989 19.75 20.3897 19.671 20.5303 19.5303C20.671 19.3897 20.75 19.1989 20.75 19V14Z',
  d14: 'M5.25 22V2H3.25V22H5.25Z',
};

export const IconAlignLeftStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-left-stroke-rounded IconAlignLeftStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAlignLeftDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-left-duotone-rounded IconAlignLeftDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAlignLeftTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-left-twotone-rounded IconAlignLeftTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignLeftSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-left-solid-rounded IconAlignLeftSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignLeftBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-left-bulk-rounded IconAlignLeftBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignLeftStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-left-stroke-sharp IconAlignLeftStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignLeftSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-left-solid-sharp IconAlignLeftSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlignLeft: TheIconSelfPack = {
  name: 'AlignLeft',
  StrokeRounded: IconAlignLeftStrokeRounded,
  DuotoneRounded: IconAlignLeftDuotoneRounded,
  TwotoneRounded: IconAlignLeftTwotoneRounded,
  SolidRounded: IconAlignLeftSolidRounded,
  BulkRounded: IconAlignLeftBulkRounded,
  StrokeSharp: IconAlignLeftStrokeSharp,
  SolidSharp: IconAlignLeftSolidSharp,
};