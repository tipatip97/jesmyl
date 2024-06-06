import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.33333 2.75143C5.28498 2.94471 4.51342 3.28657 3.90345 3.89124C3.29347 4.49591 2.94861 5.26076 2.75363 6.3M14 2.50496C13.4105 2.5 12.7732 2.5 12.0833 2.5C11.3934 2.5 10.7562 2.5 10.1666 2.50496M2.505 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.505 13.9001M2.75363 17.7C2.94861 18.7392 3.29347 19.5041 3.90345 20.1088C4.51342 20.7134 5.28498 21.0553 6.33333 21.2486M14 21.495C13.4107 21.5 12.7729 21.5 12.0833 21.5C11.3935 21.5 10.7563 21.5 10.1668 21.495',
  d2: 'M17.5 2.5C18.5939 2.69854 19.399 3.04969 20.0355 3.6708C21.5 5.09987 21.5 7.39991 21.5 12C21.5 16.6001 21.5 18.9001 20.0355 20.3292C19.399 20.9503 18.5939 21.3015 17.5 21.5',
  d3: 'M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z',
  d4: 'M15 21.4866C15.0046 22.0389 14.5607 22.4904 14.0084 22.495C13.415 22.5 12.7739 22.5 12.0865 22.5L12.0802 22.5C11.3926 22.5 10.752 22.5 10.1584 22.495C9.60615 22.4904 9.16222 22.0389 9.16686 21.4866C9.1715 20.9344 9.62296 20.4904 10.1752 20.4951C10.7597 20.5 11.3925 20.5 12.0833 20.5C12.774 20.5 13.4073 20.5 13.9916 20.4951C14.5439 20.4904 14.9953 20.9344 15 21.4866ZM15 2.51336C14.9953 3.06563 14.5439 3.50956 13.9916 3.50492C13.4071 3.50001 12.7743 3.5 12.0833 3.5C11.3924 3.5 10.7596 3.50001 10.1751 3.50492C9.62279 3.50956 9.17132 3.06563 9.16668 2.51336C9.16204 1.96109 9.60598 1.50963 10.1582 1.50499C10.752 1.5 11.3927 1.5 12.0805 1.5L12.0861 1.5C12.7739 1.5 13.4147 1.5 14.0084 1.50499C14.5607 1.50963 15.0046 1.96109 15 2.51336ZM7.31676 2.57011C7.41689 3.11325 7.05777 3.63472 6.51464 3.73485C5.59273 3.90482 5.0306 4.18197 4.60746 4.60143C4.18511 5.02011 3.90718 5.57458 3.73648 6.4844C3.63464 7.02721 3.11205 7.38469 2.56923 7.28285C2.02642 7.18101 1.66894 6.65842 1.77078 6.1156C1.99004 4.94693 2.40184 3.97172 3.19943 3.18105C3.99624 2.39118 4.97723 1.98459 6.15202 1.768C6.69515 1.66786 7.21662 2.02698 7.31676 2.57011ZM7.31676 21.4299C7.21662 21.973 6.69515 22.3321 6.15202 22.232C4.97722 22.0154 3.99624 21.6088 3.19943 20.8189C2.40183 20.0283 1.99004 19.0531 1.77078 17.8844C1.66894 17.3416 2.02642 16.819 2.56923 16.7171C3.11205 16.6153 3.63464 16.9728 3.73648 17.5156C3.90718 18.4254 4.18511 18.9799 4.60746 19.3986C5.0306 19.818 5.59272 20.0952 6.51464 20.2651C7.05777 20.3653 7.41689 20.8868 7.31676 21.4299ZM2.51355 9.10004C3.06582 9.10476 3.50969 9.55629 3.50496 10.1086C3.50001 10.6879 3.5 11.3151 3.5 12C3.5 12.685 3.50001 13.3122 3.50496 13.8915C3.50969 14.4438 3.06582 14.8953 2.51355 14.9C1.96129 14.9048 1.50976 14.4609 1.50503 13.9086C1.5 13.3199 1.5 12.6846 1.5 12.0027L1.5 11.9973C1.5 11.3155 1.5 10.6802 1.50504 10.0914C1.50976 9.53918 1.96129 9.09531 2.51355 9.10004Z',
  d5: 'M22.5 11.9238L22.5 12.0763C22.5 14.3116 22.5 16.0934 22.3076 17.4903C22.1086 18.9343 21.6872 20.1147 20.7339 21.045C19.9099 21.849 18.8963 22.263 17.6786 22.484C17.1352 22.5826 16.6147 22.222 16.5161 21.6786C16.4175 21.1352 16.778 20.6147 17.3214 20.5161C18.2916 20.3401 18.8881 20.0517 19.3371 19.6135C19.8483 19.1147 20.1591 18.4305 20.3263 17.2173C20.4978 15.9727 20.5 14.329 20.5 12.0001C20.5 9.67106 20.4978 8.02737 20.3263 6.78281C20.1591 5.56957 19.8483 4.88538 19.3371 4.38656C18.8881 3.94843 18.2916 3.66005 17.3214 3.48398C16.778 3.38536 16.4175 2.86489 16.5161 2.32148C16.6147 1.77807 17.1352 1.4175 17.6786 1.51612C18.8963 1.73713 19.9099 2.15106 20.7339 2.95515C21.6872 3.88539 22.1086 5.06575 22.3076 6.50983C22.5 7.90673 22.5 9.68848 22.5 11.9238Z',
  d6: 'M17 3H21V21H17M7 21H3V17M7 3H3V7M15 3H9M9 21H15M3 9V15',
  d7: 'M2 3C2 2.44772 2.44772 2 3 2H7V4H4V7H2V3ZM9 2H15V4H9V2ZM17 2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H17V20H20V4H17V2ZM2 15V9H4V15H2ZM2 21V17H4V20H7V22H3C2.44772 22 2 21.5523 2 21ZM15 22H9V20H15V22Z',
};

export const IconBorderRight02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-right-02-stroke-rounded IconBorderRight02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconBorderRight02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-right-02-duotone-rounded IconBorderRight02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconBorderRight02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-right-02-twotone-rounded IconBorderRight02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderRight02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-right-02-solid-rounded IconBorderRight02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderRight02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-right-02-bulk-rounded IconBorderRight02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderRight02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-right-02-stroke-sharp IconBorderRight02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBorderRight02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-right-02-solid-sharp IconBorderRight02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBorderRight02: TheIconSelfPack = {
  name: 'BorderRight02',
  StrokeRounded: IconBorderRight02StrokeRounded,
  DuotoneRounded: IconBorderRight02DuotoneRounded,
  TwotoneRounded: IconBorderRight02TwotoneRounded,
  SolidRounded: IconBorderRight02SolidRounded,
  BulkRounded: IconBorderRight02BulkRounded,
  StrokeSharp: IconBorderRight02StrokeSharp,
  SolidSharp: IconBorderRight02SolidSharp,
};