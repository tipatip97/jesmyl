import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.5 15.5C8.63206 15.9782 8.89835 16.5 9.59365 16.5C10.7968 16.5 11.0976 15.5 12 12C12.9024 8.5 13.2032 7.5 14.4064 7.5C15.1016 7.5 15.3679 8.02179 15.5 8.5M10.5417 10.75H14.4064',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM14.4066 6.5C13.9586 6.5 13.4974 6.59624 13.0754 6.89242C12.6727 7.1751 12.4011 7.57397 12.1934 7.99589C11.9737 8.44227 11.775 9.02656 11.5664 9.75H10.5419C9.98963 9.75 9.54192 10.1977 9.54192 10.75C9.54192 11.3023 9.98963 11.75 10.5419 11.75L11.0319 11.7503C10.5685 13.5479 10.2943 14.5488 10.0127 15.1209C9.88195 15.3865 9.79613 15.4565 9.77591 15.4707C9.68121 15.582 9.57564 15.4925 9.53469 15.4339C9.51098 15.3833 9.48725 15.3174 9.46417 15.2338C9.31715 14.7014 8.76641 14.3891 8.23406 14.5361C7.7017 14.6831 7.38932 15.2338 7.53633 15.7662C7.61805 16.0621 7.76899 16.4862 8.09022 16.8457C8.44639 17.2442 8.95627 17.5 9.5939 17.5C10.0419 17.5 10.5031 17.4038 10.9251 17.1076C11.3278 16.8249 11.5994 16.426 11.8071 16.0041C12.2023 15.2012 12.5297 13.9521 12.9686 12.2497C13.0134 12.0758 13.0565 11.9093 13.098 11.75H14.4066C14.9589 11.75 15.4066 11.3023 15.4066 10.75C15.4066 10.1977 14.9589 9.75 14.4066 9.75H13.6552C13.7724 9.38239 13.8796 9.09906 13.9878 8.87911C14.1186 8.61353 14.2044 8.54348 14.2246 8.52929C14.2815 8.47486 14.4094 8.40603 14.4658 8.5661C14.4895 8.61674 14.5133 8.68264 14.5363 8.7662C14.6834 9.29856 15.2341 9.61094 15.7665 9.46392C16.2988 9.3169 16.6112 8.76616 16.4642 8.2338C16.3825 7.93792 16.2315 7.51379 15.9103 7.15433C15.5541 6.75577 15.0442 6.5 14.4066 6.5Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M13.0754 6.89242C13.4974 6.59624 13.9586 6.5 14.4066 6.5C15.0442 6.5 15.5541 6.75577 15.9103 7.15433C16.2315 7.51379 16.3825 7.93792 16.4642 8.2338C16.6112 8.76616 16.2988 9.3169 15.7665 9.46392C15.2341 9.61094 14.6834 9.29856 14.5363 8.7662C14.5133 8.68264 14.4895 8.61674 14.4658 8.5661C14.4094 8.40603 14.2815 8.47486 14.2246 8.52929C14.2044 8.54348 14.1186 8.61353 13.9878 8.87911C13.8796 9.09906 13.7724 9.38239 13.6552 9.75H14.4066C14.9589 9.75 15.4066 10.1977 15.4066 10.75C15.4066 11.3023 14.9589 11.75 14.4066 11.75H13.098C13.0565 11.9093 13.0134 12.0758 12.9686 12.2497C12.5297 13.9521 12.2023 15.2012 11.8071 16.0041C11.5994 16.426 11.3278 16.8249 10.9251 17.1076C10.5031 17.4038 10.0419 17.5 9.5939 17.5C8.95627 17.5 8.44639 17.2442 8.09022 16.8457C7.76899 16.4862 7.61805 16.0621 7.53633 15.7662C7.38932 15.2338 7.7017 14.6831 8.23406 14.5361C8.76641 14.3891 9.31715 14.7014 9.46417 15.2338C9.48725 15.3174 9.51098 15.3833 9.53469 15.4339C9.57564 15.4925 9.68121 15.582 9.77591 15.4707C9.79613 15.4565 9.88195 15.3865 10.0127 15.1209C10.2943 14.5488 10.5685 13.5479 11.0319 11.7503L10.5419 11.75C9.98963 11.75 9.54192 11.3023 9.54192 10.75C9.54192 10.1977 9.98963 9.75 10.5419 9.75H11.5664C11.775 9.02656 11.9737 8.44226 12.1934 7.99589C12.4011 7.57397 12.6727 7.1751 13.0754 6.89242Z',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM14.4054 6.5C13.9575 6.5 13.4963 6.59624 13.0743 6.89242C12.6715 7.1751 12.3999 7.57397 12.1922 7.99589C11.9725 8.44227 11.7738 9.02656 11.5652 9.75H10.5407V11.75L11.0307 11.7503C10.5673 13.5479 10.2931 14.5488 10.0115 15.1209C9.77068 15.6332 9.5925 15.543 9.53351 15.4339C9.5098 15.3833 9.48607 15.3174 9.46299 15.2338L7.53516 15.7662C7.61687 16.0621 7.76781 16.4862 8.08904 16.8457C8.44521 17.2442 8.95509 17.5 9.59272 17.5C10.0407 17.5 10.5019 17.4038 10.9239 17.1076C11.3267 16.8249 11.5982 16.426 11.8059 16.0041C12.2011 15.2012 12.5285 13.9521 12.9674 12.2497C13.0122 12.0758 13.0553 11.9093 13.0968 11.75H14.4054V9.75H13.654C13.7712 9.38239 13.8784 9.09906 13.9867 8.87911C14.219 8.39285 14.4021 8.46783 14.4646 8.5661C14.4884 8.61674 14.5121 8.68264 14.5352 8.7662L16.463 8.2338C16.3813 7.93792 16.2303 7.51379 15.9091 7.15433C15.5529 6.75577 15.0431 6.5 14.4054 6.5Z',
};

export const IconFunctionCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-circle-stroke-rounded IconFunctionCircleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconFunctionCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-circle-duotone-rounded IconFunctionCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-circle-twotone-rounded IconFunctionCircleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconFunctionCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-circle-solid-rounded IconFunctionCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-circle-bulk-rounded IconFunctionCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFunctionCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-circle-stroke-sharp IconFunctionCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconFunctionCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="function-circle-solid-sharp IconFunctionCircleSolidSharp"
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

export const iconPackOfFunctionCircle: TheIconSelfPack = {
  name: 'FunctionCircle',
  StrokeRounded: IconFunctionCircleStrokeRounded,
  DuotoneRounded: IconFunctionCircleDuotoneRounded,
  TwotoneRounded: IconFunctionCircleTwotoneRounded,
  SolidRounded: IconFunctionCircleSolidRounded,
  BulkRounded: IconFunctionCircleBulkRounded,
  StrokeSharp: IconFunctionCircleStrokeSharp,
  SolidSharp: IconFunctionCircleSolidSharp,
};