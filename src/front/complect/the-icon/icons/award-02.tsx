import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 21C8 19.5858 8 18.8787 8.43934 18.4393C8.87868 18 9.58579 18 11 18H13C14.4142 18 15.1213 18 15.5607 18.4393C16 18.8787 16 19.5858 16 21V22H8V21Z',
  d2: 'M12 13L12 18',
  d3: 'M6 22H18',
  d4: 'M13.0366 2.86651L14.0925 4.99573C14.2364 5.29212 14.6204 5.57642 14.9444 5.63086L16.8582 5.95145C18.082 6.15712 18.37 7.05236 17.4881 7.9355L16.0003 9.43563C15.7483 9.68968 15.6103 10.1796 15.6883 10.5305L16.1142 12.3875C16.4502 13.8574 15.6763 14.426 14.3864 13.6578L12.5926 12.5871C12.2687 12.3935 11.7347 12.3935 11.4048 12.5871L9.61096 13.6578C8.3271 14.426 7.54719 13.8513 7.88315 12.3875L8.3091 10.5305C8.3871 10.1796 8.24911 9.68968 7.99714 9.43563L6.5093 7.9355C5.6334 7.05236 5.91537 6.15712 7.13923 5.95145L9.05302 5.63086C9.37099 5.57642 9.75494 5.29212 9.89893 4.99573L10.9548 2.86651C11.5307 1.71116 12.4666 1.71116 13.0366 2.86651Z',
  d5: 'M8 21C8 19.5858 8 18.8787 8.43934 18.4393C8.87868 18 9.58579 18 11 18H13C14.4142 18 15.1213 18 15.5607 18.4393C16 18.8787 16 19.5858 16 21V21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21V21Z',
  d6: 'M13.0514 17.25C13.7163 17.25 14.2891 17.2499 14.7478 17.3116C15.2394 17.3777 15.7107 17.5268 16.093 17.909C16.4752 18.2913 16.6243 18.7625 16.6904 19.2542C16.7326 19.5684 16.7459 19.9361 16.7501 20.3503C16.752 20.5396 16.7529 20.6343 16.8114 20.6921C16.8698 20.75 16.9637 20.75 17.1515 20.75H17.7877C18.3202 20.75 18.752 21.1977 18.752 21.75C18.752 22.3023 18.3202 22.75 17.7877 22.75H6.21624C5.68368 22.75 5.25195 22.3023 5.25195 21.75C5.25195 21.1977 5.68368 20.75 6.21624 20.75H6.85239C7.04019 20.75 7.13409 20.75 7.19254 20.6921C7.25099 20.6343 7.25195 20.5396 7.25385 20.3503C7.25803 19.9361 7.27132 19.5684 7.31357 19.2542C7.37967 18.7625 7.52872 18.2913 7.91097 17.909C8.29322 17.5268 8.76448 17.3777 9.25612 17.3116C9.71484 17.2499 10.2878 17.25 10.9526 17.25H13.0514Z',
  d7: 'M13.0015 17.25C13.0015 17.8023 12.5538 18.25 12.0015 18.25C11.4492 18.25 11.0015 17.8023 11.0015 17.25L11.0015 14.4067C11.0015 14.0942 11.0015 13.938 10.9002 13.8805C10.6881 13.7601 10.187 14.1883 9.99721 14.3015C9.29637 14.7208 8.39799 14.9798 7.69665 14.4638C6.99898 13.9505 6.97062 13.0171 7.15363 12.2197L7.5787 10.3666C7.60352 10.2465 7.55326 10.0516 7.4661 9.96377L5.97827 8.46364C5.44703 7.92801 5.08858 7.20418 5.32333 6.46297C5.55899 5.7189 6.27185 5.33694 7.0168 5.21176L8.91916 4.89308C9.04516 4.87198 9.17241 4.77677 9.22848 4.66252L10.2851 2.5319C10.6257 1.84852 11.2028 1.25 11.9994 1.25C12.797 1.25 13.3725 1.8497 13.7102 2.53384L14.7673 4.66553C14.8248 4.77322 14.9515 4.86477 15.0701 4.89123L16.9839 5.21182C17.7281 5.33688 18.4418 5.71815 18.6788 6.46162C18.9155 7.20414 18.5548 7.92975 18.0203 8.46546L16.5342 9.96377C16.4471 10.0517 16.3968 10.2465 16.4216 10.3666L16.8469 12.2204C17.0289 13.0168 17.0045 13.9526 16.3057 14.4662C15.6038 14.9821 14.7037 14.7188 14.0035 14.3018C13.8139 14.1886 13.3146 13.7618 13.1027 13.8821C13.0015 13.9395 13.0015 14.0958 13.0015 14.4083L13.0015 17.25Z',
  d8: 'M15.999 22V18H7.99902V22',
  d9: 'M11.999 12.2422V17.9904',
  d10: 'M5.99902 22H17.999',
  d11: 'M11.9405 2.04413C11.9806 1.98422 12.0687 1.98555 12.107 2.04664L14.1175 5.25225L17.9273 6.32267C17.9965 6.34212 18.023 6.42682 17.9773 6.48267L15.4978 9.51395L15.7634 13.3917C15.7683 13.4636 15.6984 13.517 15.6309 13.4928L12.0257 12.2007L8.27966 13.4945C8.21193 13.5179 8.14259 13.4637 8.14834 13.3918L8.45824 9.51395L6.02217 6.48159C5.97738 6.42584 6.00366 6.34214 6.07215 6.32244L9.79255 5.25225L11.9405 2.04413Z',
  d12: 'M11 18L11 12L13 12L13 18L11 18Z',
  d13: 'M7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H16C16.4142 17.25 16.75 17.5858 16.75 18V20.75H18V22.75H6V20.75H7.25V18Z',
  d14: 'M12 1.25C12.2483 1.25 12.4805 1.37289 12.6202 1.57821L14.6947 4.62843L18.2136 5.67366C18.45 5.74387 18.6367 5.92581 18.7131 6.16027C18.7895 6.39474 18.7458 6.65178 18.5961 6.84777L16.357 9.7802L16.4579 13.4795C16.4647 13.7271 16.3488 13.962 16.1483 14.1073C15.9477 14.2526 15.6884 14.2896 15.4552 14.206L12 12.968L8.54479 14.206C8.31165 14.2896 8.05231 14.2526 7.85176 14.1073C7.65121 13.962 7.53533 13.7271 7.54208 13.4795L7.64305 9.7802L5.40391 6.84777C5.25426 6.65178 5.21051 6.39474 5.2869 6.16027C5.36329 5.92581 5.55006 5.74387 5.78645 5.67366L9.30527 4.62843L11.3799 1.57821C11.5195 1.37289 11.7517 1.25 12 1.25Z',
};

export const IconAward02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="award-02-stroke-rounded IconAward02StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAward02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="award-02-duotone-rounded IconAward02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAward02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="award-02-twotone-rounded IconAward02TwotoneRounded"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAward02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="award-02-solid-rounded IconAward02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="award-02-bulk-rounded IconAward02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="award-02-stroke-sharp IconAward02StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAward02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="award-02-solid-sharp IconAward02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAward02: TheIconSelfPack = {
  name: 'Award02',
  StrokeRounded: IconAward02StrokeRounded,
  DuotoneRounded: IconAward02DuotoneRounded,
  TwotoneRounded: IconAward02TwotoneRounded,
  SolidRounded: IconAward02SolidRounded,
  BulkRounded: IconAward02BulkRounded,
  StrokeSharp: IconAward02StrokeSharp,
  SolidSharp: IconAward02SolidSharp,
};