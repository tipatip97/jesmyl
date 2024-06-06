import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.2486 6.33333C21.0553 5.28498 20.7134 4.51342 20.1088 3.90345C19.5041 3.29347 18.7392 2.94861 17.7 2.75363M21.495 14C21.5 13.4105 21.5 12.7732 21.5 12.0833C21.5 11.3934 21.5 10.7562 21.495 10.1666M13.9 2.505C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.0999 2.505M6.3 2.75363C5.26076 2.94861 4.49591 3.29347 3.89124 3.90345C3.28657 4.51342 2.94471 5.28497 2.75143 6.33333M2.50495 14C2.5 13.4107 2.5 12.7729 2.5 12.0833C2.5 11.3935 2.5 10.7563 2.50495 10.1668',
  d2: 'M21.5 17.5C21.3015 18.5939 20.9503 19.399 20.3292 20.0355C18.9001 21.5 16.6001 21.5 12 21.5C7.39991 21.5 5.09987 21.5 3.6708 20.0355C3.04969 19.399 2.69854 18.5939 2.5 17.5',
  d3: 'M3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124Z',
  d4: 'M2.51336 15C1.96109 15.0046 1.50963 14.5607 1.50499 14.0084C1.5 13.415 1.5 12.7739 1.5 12.0865L1.5 12.0802C1.5 11.3926 1.5 10.752 1.50499 10.1584C1.50963 9.60615 1.96109 9.16222 2.51336 9.16686C3.06562 9.1715 3.50956 9.62296 3.50492 10.1752C3.50001 10.7597 3.5 11.3925 3.5 12.0833C3.5 12.774 3.50001 13.4073 3.50492 13.9916C3.50956 14.5439 3.06562 14.9953 2.51336 15ZM21.4866 15C20.9344 14.9953 20.4904 14.5439 20.4951 13.9916C20.5 13.4071 20.5 12.7743 20.5 12.0833C20.5 11.3924 20.5 10.7596 20.4951 10.1751C20.4904 9.62279 20.9344 9.17132 21.4866 9.16668C22.0389 9.16204 22.4904 9.60598 22.495 10.1582C22.5 10.752 22.5 11.3927 22.5 12.0805L22.5 12.0861C22.5 12.7739 22.5 13.4147 22.495 14.0084C22.4904 14.5607 22.0389 15.0046 21.4866 15ZM21.4299 7.31676C20.8868 7.41689 20.3653 7.05777 20.2651 6.51464C20.0952 5.59273 19.818 5.0306 19.3986 4.60746C18.9799 4.18511 18.4254 3.90718 17.5156 3.73648C16.9728 3.63464 16.6153 3.11205 16.7171 2.56923C16.819 2.02642 17.3416 1.66894 17.8844 1.77078C19.0531 1.99004 20.0283 2.40184 20.8189 3.19943C21.6088 3.99624 22.0154 4.97723 22.232 6.15202C22.3321 6.69515 21.973 7.21662 21.4299 7.31676ZM2.57011 7.31676C2.02698 7.21662 1.66786 6.69515 1.768 6.15202C1.98459 4.97722 2.39118 3.99624 3.18106 3.19943C3.97172 2.40183 4.94693 1.99004 6.1156 1.77078C6.65842 1.66894 7.18101 2.02642 7.28285 2.56923C7.38469 3.11204 7.02721 3.63464 6.4844 3.73648C5.57459 3.90718 5.02011 4.18511 4.60143 4.60746C4.18197 5.0306 3.90482 5.59272 3.73485 6.51464C3.63472 7.05777 3.11325 7.41689 2.57011 7.31676ZM14.9 2.51355C14.8952 3.06582 14.4437 3.50969 13.8914 3.50496C13.3121 3.50001 12.6849 3.5 12 3.5C11.315 3.5 10.6878 3.50001 10.1085 3.50496C9.55621 3.50969 9.10468 3.06582 9.09996 2.51355C9.09524 1.96129 9.5391 1.50976 10.0914 1.50503C10.6801 1.5 11.3154 1.5 11.9973 1.5L12.0027 1.5C12.6845 1.5 13.3198 1.5 13.9086 1.50503C14.4608 1.50976 14.9047 1.96129 14.9 2.51355Z',
  d5: 'M12.0761 22.5L11.9236 22.5C9.68826 22.5 7.90651 22.5 6.50961 22.3076C5.06553 22.1086 3.88516 21.6872 2.95492 20.7339C2.15084 19.9099 1.7369 18.8963 1.5159 17.6786C1.41728 17.1352 1.77785 16.6147 2.32126 16.5161C2.86466 16.4174 3.38513 16.778 3.48375 17.3214C3.65982 18.2916 3.9482 18.8881 4.38633 19.3371C4.88516 19.8483 5.56935 20.1591 6.78258 20.3263C8.02714 20.4978 9.67083 20.5 11.9998 20.5C14.3288 20.5 15.9725 20.4978 17.2171 20.3263C18.4303 20.1591 19.1145 19.8483 19.6133 19.3371C20.0515 18.8881 20.3398 18.2916 20.5159 17.3214C20.6145 16.778 21.135 16.4175 21.6784 16.5161C22.2218 16.6147 22.5824 17.1352 22.4838 17.6786C22.2628 18.8963 21.8488 19.9099 21.0447 20.7339C20.1145 21.6872 18.9341 22.1086 17.49 22.3076C16.0931 22.5 14.3114 22.5 12.0761 22.5Z',
  d6: 'M3 17L3 21H21V17M21 7V3L17 3M3 7L3 3L7 3M3 15L3 9M21 9V15M9 3L15 3',
  d7: 'M20 4H17V2L21 2C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V7H20V4ZM15 4L9 4V2L15 2V4ZM4 4L7 4V2L3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3L2 7H4V4ZM20 15V9H22V15H20ZM4 9L4 15H2L2 9H4ZM20 20V17H22V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21L2 17H4L4 20H20Z',
};

export const IconBorderBottom02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-bottom-02-stroke-rounded IconBorderBottom02StrokeRounded"
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

export const IconBorderBottom02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-bottom-02-duotone-rounded IconBorderBottom02DuotoneRounded"
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

export const IconBorderBottom02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-bottom-02-twotone-rounded IconBorderBottom02TwotoneRounded"
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

export const IconBorderBottom02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-bottom-02-solid-rounded IconBorderBottom02SolidRounded"
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

export const IconBorderBottom02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-bottom-02-bulk-rounded IconBorderBottom02BulkRounded"
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

export const IconBorderBottom02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-bottom-02-stroke-sharp IconBorderBottom02StrokeSharp"
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

export const IconBorderBottom02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="border-bottom-02-solid-sharp IconBorderBottom02SolidSharp"
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

export const iconPackOfBorderBottom02: TheIconSelfPack = {
  name: 'BorderBottom02',
  StrokeRounded: IconBorderBottom02StrokeRounded,
  DuotoneRounded: IconBorderBottom02DuotoneRounded,
  TwotoneRounded: IconBorderBottom02TwotoneRounded,
  SolidRounded: IconBorderBottom02SolidRounded,
  BulkRounded: IconBorderBottom02BulkRounded,
  StrokeSharp: IconBorderBottom02StrokeSharp,
  SolidSharp: IconBorderBottom02SolidSharp,
};