import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3',
  d2: 'M7.99707 16.999C11.5286 16.999 18.9122 15.5348 18.6979 6.43269M16.4886 8.04302L18.3721 6.14612C18.5656 5.95127 18.8798 5.94981 19.0751 6.14286L20.9971 8.04302',
  d3: 'M20 21H9C5.70017 21 4.05025 21 3.02513 19.9749C2 18.9497 2 17.2998 2 14V3',
  d4: 'M6 17C9.53153 17 16.9151 15.5358 16.7008 6.43367M14.4915 8.044L16.375 6.1471C16.5685 5.95225 16.8827 5.95079 17.078 6.14384L19 8.044',
  d5: 'M7 17C10.5315 17 17.9151 15.5357 17.7009 6.43366M15.4916 8.044L17.3751 6.1471C17.5685 5.95225 17.8827 5.95079 18.078 6.14384L20 8.044',
  d6: 'M6.5 16.5C6.5 17.0523 6.93662 17.5 7.47521 17.5C10.5479 17.5 13.4146 16.6059 15.5294 14.744C17.2484 13.2306 18.4118 11.1284 18.7999 8.5H19.7036C19.7092 8.5 19.7157 8.50002 19.7228 8.50004C19.7949 8.50027 19.9365 8.50071 20.0613 8.4824C20.1693 8.46657 20.6816 8.38303 20.9123 7.83795C21.143 7.29288 20.8526 6.85209 20.7902 6.76042C20.718 6.6544 20.621 6.54867 20.5715 6.49478C20.5667 6.48948 20.5623 6.48468 20.5584 6.48043L19.916 5.7759C19.904 5.76282 19.8921 5.74974 19.8802 5.73667C19.6201 5.45126 19.3621 5.16824 19.1192 4.96494C18.8457 4.73609 18.4679 4.5 17.9671 4.5C17.4663 4.5 17.0886 4.73608 16.8151 4.96494C16.5722 5.16823 16.3142 5.45126 16.0541 5.73667C16.0422 5.74974 16.0302 5.76282 16.0183 5.7759L15.3759 6.48043C15.372 6.48468 15.3676 6.48948 15.3628 6.49478C15.3133 6.54866 15.2163 6.6544 15.1441 6.76042C15.0816 6.85209 14.7913 7.29288 15.022 7.83795C15.2527 8.38303 15.765 8.46657 15.8729 8.4824C15.9978 8.50071 16.1394 8.50027 16.2115 8.50004C16.2186 8.50002 16.225 8.5 16.2307 8.5H16.8231C16.46 10.5427 15.5332 12.1046 14.2589 13.2266C12.5764 14.7078 10.1971 15.5 7.47521 15.5C6.93662 15.5 6.5 15.9477 6.5 16.5Z',
  d7: 'M3 2C3.55229 2 4 2.44772 4 3V14C4 15.6782 4.00213 16.8362 4.11923 17.7072C4.23246 18.5494 4.43644 18.972 4.73223 19.2678C5.02803 19.5636 5.45059 19.7675 6.2928 19.8808C7.16378 19.9979 8.32182 20 10 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H9.928C8.33933 22 7.04616 22.0001 6.0263 21.8629C4.96232 21.7199 4.04735 21.4113 3.31802 20.682C2.58869 19.9526 2.28011 19.0377 2.13706 17.9737C1.99994 16.9538 1.99997 15.6607 2 14.072L2 3C2 2.44772 2.44772 2 3 2Z',
  d8: 'M20.9615 21H3.00122V3',
  d9: 'M6.99243 16.9964C9.1539 16.9964 17.726 16.6222 17.9966 6.47708M14.4123 8.0284L18.0031 5.98047L20.9988 9.55938',
  d10: 'M3 20V3H1V21C1 21.5523 1.44772 22 2 22H20V20H3Z',
  d11: 'M13.6261 15.2538C15.4211 13.6888 16.6368 11.4541 17.0675 8.50117L18.4815 10.1508L20 8.84921L16.4621 4.72173L12.2446 7.13176L13.2369 8.86824L15.1451 7.77783C14.8307 10.5672 13.7652 12.4791 12.3118 13.7462C10.5438 15.2876 8.05856 16 5.24072 16V18C8.36471 18 11.3795 17.2124 13.6261 15.2538Z',
};

export const IconChartIncreaseStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-increase-stroke-rounded IconChartIncreaseStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconChartIncreaseDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-increase-duotone-rounded IconChartIncreaseDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconChartIncreaseTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-increase-twotone-rounded IconChartIncreaseTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconChartIncreaseSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-increase-solid-rounded IconChartIncreaseSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartIncreaseBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-increase-bulk-rounded IconChartIncreaseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconChartIncreaseStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-increase-stroke-sharp IconChartIncreaseStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconChartIncreaseSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="chart-increase-solid-sharp IconChartIncreaseSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfChartIncrease: TheIconSelfPack = {
  name: 'ChartIncrease',
  StrokeRounded: IconChartIncreaseStrokeRounded,
  DuotoneRounded: IconChartIncreaseDuotoneRounded,
  TwotoneRounded: IconChartIncreaseTwotoneRounded,
  SolidRounded: IconChartIncreaseSolidRounded,
  BulkRounded: IconChartIncreaseBulkRounded,
  StrokeSharp: IconChartIncreaseStrokeSharp,
  SolidSharp: IconChartIncreaseSolidSharp,
};