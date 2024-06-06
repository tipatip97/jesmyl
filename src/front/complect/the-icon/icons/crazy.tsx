import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 10C10 10.5 9.32205 11 8.5 11C7.67795 11 7 10.5523 7 10',
  d2: 'M17 10C17 8.34315 16.3284 7 15.5 7C14.6716 7 14 8.34315 14 10',
  d3: 'M16.633 13.5C17.1164 14.1528 17.1867 15.1365 16.4482 15.8211C14.9899 17.173 13.148 15.7039 12.2062 15.6704C11.2635 15.637 10.7624 16.555 8.86254 16.9554C7.70902 17.1985 7 16.5 7 15.6704',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7 9.25C7.40877 9.25 7.74116 9.57702 7.74983 9.98371C7.75795 9.99865 7.78392 10.034 7.85691 10.0825C7.9909 10.1716 8.21728 10.25 8.5 10.25C8.76468 10.25 8.99027 10.168 9.13286 10.0698C9.20964 10.0169 9.24021 9.97785 9.25101 9.96078C9.27141 9.56479 9.59894 9.25 10 9.25C10.4142 9.25 10.75 9.58579 10.75 10C10.75 10.5932 10.3641 11.0432 9.98368 11.3052C9.58178 11.582 9.05736 11.75 8.5 11.75C7.96067 11.75 7.43705 11.6046 7.02655 11.3317C6.62228 11.063 6.25 10.6076 6.25 10C6.25 9.58579 6.58579 9.25 7 9.25ZM7.74659 9.97583C7.74641 9.97588 7.74678 9.97747 7.74819 9.9805C7.74747 9.9773 7.74676 9.97579 7.74659 9.97583ZM15.1102 8.21409C14.901 8.63239 14.75 9.26276 14.75 10C14.75 10.4142 14.4142 10.75 14 10.75C13.5858 10.75 13.25 10.4142 13.25 10C13.25 9.08039 13.4348 8.21075 13.7685 7.54327C14.0798 6.92065 14.6487 6.25 15.5 6.25C16.3513 6.25 16.9202 6.92065 17.2315 7.54327C17.5652 8.21075 17.75 9.08039 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75C16.5858 10.75 16.25 10.4142 16.25 10C16.25 9.26276 16.099 8.63239 15.8898 8.21409C15.7854 8.00515 15.6804 7.87677 15.5995 7.80836C15.5608 7.77563 15.533 7.76113 15.5182 7.75507C15.5109 7.75208 15.5063 7.75093 15.5041 7.75048L15.5019 7.75011L15.5 7.75C15.4992 7.75 15.498 7.75005 15.4959 7.75048C15.4948 7.75071 15.493 7.75113 15.4906 7.75188C15.4883 7.75259 15.4853 7.75361 15.4818 7.75507C15.467 7.76113 15.4392 7.77563 15.4005 7.80836C15.3196 7.87677 15.2146 8.00515 15.1102 8.21409ZM17.2357 13.0536C16.9891 12.7208 16.5195 12.6508 16.1866 12.8973C15.8537 13.1438 15.7837 13.6135 16.0303 13.9464C16.3342 14.3568 16.3409 14.8978 15.9383 15.2711C15.4822 15.6939 14.9745 15.713 14.3265 15.5405C14.0473 15.4662 13.7807 15.3664 13.4976 15.2604L13.4974 15.2604C13.4396 15.2387 13.381 15.2168 13.3215 15.1948C13.0162 15.0818 12.6098 14.9343 12.2328 14.9209C11.5598 14.897 11.031 15.2036 10.6183 15.4429L10.6182 15.4429C10.5849 15.4623 10.5523 15.4812 10.5204 15.4994C10.0647 15.7606 9.54425 16.0452 8.70787 16.2215C8.30863 16.3056 8.07618 16.2134 7.95676 16.1213C7.83198 16.025 7.75 15.869 7.75 15.6704C7.75 15.2562 7.41421 14.9204 7 14.9204C6.58579 14.9204 6.25 15.2562 6.25 15.6704C6.25 16.3014 6.52252 16.9094 7.04064 17.309C7.56411 17.7128 8.26294 17.8482 9.01722 17.6892C10.0807 17.4651 10.7607 17.0905 11.2662 16.8009C11.8014 16.4942 11.9644 16.4123 12.1796 16.4199C12.2735 16.4233 12.4505 16.4719 12.801 16.6016C12.8492 16.6194 12.8999 16.6384 12.953 16.6583L12.953 16.6583C13.2359 16.7645 13.5833 16.8949 13.9406 16.99C14.8135 17.2224 15.9559 17.3002 16.9581 16.3711C18.0324 15.3752 17.8986 13.9488 17.2357 13.0536Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M7.74983 9.98371C7.74116 9.57702 7.40877 9.25 7 9.25C6.58579 9.25 6.25 9.58579 6.25 10C6.25 10.6076 6.62228 11.063 7.02655 11.3317C7.43705 11.6046 7.96067 11.75 8.5 11.75C9.05736 11.75 9.58178 11.582 9.98368 11.3052C10.3641 11.0432 10.75 10.5932 10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.59894 9.25 9.27141 9.56479 9.25101 9.96078C9.24021 9.97785 9.20964 10.0169 9.13286 10.0698C8.99027 10.168 8.76468 10.25 8.5 10.25C8.21728 10.25 7.9909 10.1716 7.85691 10.0825C7.78392 10.034 7.75795 9.99865 7.74983 9.98371ZM7.74659 9.97583C7.74641 9.97588 7.74678 9.97747 7.74819 9.9805C7.74747 9.9773 7.74676 9.97579 7.74659 9.97583Z',
  d7: 'M15.1102 8.21409C14.901 8.63239 14.75 9.26276 14.75 10C14.75 10.4142 14.4142 10.75 14 10.75C13.5858 10.75 13.25 10.4142 13.25 10C13.25 9.08039 13.4348 8.21075 13.7685 7.54327C14.0798 6.92065 14.6487 6.25 15.5 6.25C16.3513 6.25 16.9202 6.92065 17.2315 7.54327C17.5652 8.21075 17.75 9.08039 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75C16.5858 10.75 16.25 10.4142 16.25 10C16.25 9.26276 16.099 8.63239 15.8898 8.21409C15.7854 8.00515 15.6804 7.87676 15.5995 7.80836C15.5608 7.77563 15.533 7.76113 15.5182 7.75507C15.5109 7.75208 15.5063 7.75093 15.5041 7.75048C15.502 7.75005 15.5008 7.75 15.5 7.75C15.4992 7.75 15.498 7.75005 15.4959 7.75048C15.4937 7.75093 15.4891 7.75208 15.4818 7.75507C15.467 7.76113 15.4392 7.77563 15.4005 7.80836C15.3196 7.87676 15.2146 8.00515 15.1102 8.21409Z',
  d8: 'M16.1866 12.8973C16.5195 12.6508 16.9891 12.7208 17.2357 13.0537C17.8986 13.9489 18.0324 15.3752 16.9581 16.3712C15.9559 17.3002 14.8135 17.2225 13.9406 16.9901C13.5833 16.8949 13.2359 16.7646 12.953 16.6584C12.9 16.6385 12.8492 16.6195 12.801 16.6016C12.4505 16.472 12.2735 16.4233 12.1796 16.42C11.9644 16.4124 11.8014 16.4943 11.2662 16.801C10.7607 17.0906 10.0807 17.4652 9.01722 17.6893C8.26294 17.8483 7.56411 17.7128 7.04064 17.3091C6.52252 16.9095 6.25 16.3014 6.25 15.6705C6.25 15.2563 6.58579 14.9205 7 14.9205C7.41421 14.9205 7.75 15.2563 7.75 15.6705C7.75 15.8691 7.83198 16.0251 7.95676 16.1213C8.07618 16.2135 8.30863 16.3057 8.70787 16.2216C9.54425 16.0453 10.0647 15.7606 10.5204 15.4995C10.5523 15.4812 10.5849 15.4623 10.6182 15.443L10.6183 15.443C11.031 15.2037 11.5598 14.897 12.2328 14.921C12.6098 14.9343 13.0162 15.0819 13.3215 15.1948C13.381 15.2168 13.4396 15.2388 13.4974 15.2604L13.4976 15.2605C13.7807 15.3665 14.0473 15.4662 14.3265 15.5406C14.9745 15.7131 15.4822 15.6939 15.9383 15.2711C16.3409 14.8979 16.3342 14.3568 16.0303 13.9464C15.7837 13.6136 15.8537 13.1439 16.1866 12.8973Z',
  d9: 'M7 9.5C7 10.3284 7.67157 11 8.5 11C9.32843 11 10 10.3284 10 9.5',
  d10: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM6.25 9.5C6.25 10.7426 7.25736 11.75 8.5 11.75C9.74264 11.75 10.75 10.7426 10.75 9.5H9.25C9.25 9.91421 8.91421 10.25 8.5 10.25C8.08579 10.25 7.75 9.91421 7.75 9.5H6.25ZM15.1102 8.21409C14.901 8.63239 14.75 9.26276 14.75 10H13.25C13.25 9.08039 13.4348 8.21075 13.7685 7.54327C14.0798 6.92065 14.6487 6.25 15.5 6.25C16.3513 6.25 16.9202 6.92065 17.2315 7.54327C17.5652 8.21075 17.75 9.08039 17.75 10H16.25C16.25 9.26276 16.099 8.63239 15.8898 8.21409C15.7854 8.00515 15.6804 7.87677 15.5995 7.80836C15.5608 7.77563 15.533 7.76113 15.5182 7.75507C15.5109 7.75208 15.5063 7.75093 15.5041 7.75048L15.5019 7.75011L15.5 7.75C15.4992 7.75 15.498 7.75005 15.4959 7.75048C15.4948 7.75071 15.493 7.75113 15.4906 7.75188C15.4883 7.75259 15.4853 7.75361 15.4818 7.75507C15.467 7.76113 15.4392 7.77563 15.4005 7.80836C15.3196 7.87677 15.2146 8.00515 15.1102 8.21409ZM16.9581 16.3712C18.0324 15.3753 17.8986 13.9489 17.2357 13.0537L16.0303 13.9465C16.3342 14.3568 16.3409 14.8979 15.9383 15.2712C15.4822 15.694 14.9745 15.7131 14.3265 15.5406C14.0473 15.4663 13.7807 15.3665 13.4976 15.2605L13.4973 15.2604C13.4395 15.2388 13.381 15.2169 13.3215 15.1949C13.0162 15.0819 12.6098 14.9344 12.2328 14.921C11.5598 14.8971 11.031 15.2037 10.6183 15.443L10.6182 15.443C10.5849 15.4624 10.5523 15.4813 10.5204 15.4995C10.0647 15.7607 9.54425 16.0453 8.70787 16.2216C8.30863 16.3057 8.07618 16.2135 7.95676 16.1214C7.83198 16.0251 7.75 15.8691 7.75 15.6705H6.25C6.25 16.3015 6.52252 16.9095 7.04064 17.3091C7.56411 17.7129 8.26294 17.8483 9.01722 17.6893C10.0807 17.4652 10.7607 17.0906 11.2662 16.801C11.8014 16.4943 11.9644 16.4124 12.1796 16.42C12.2735 16.4234 12.4505 16.472 12.801 16.6017C12.8492 16.6195 12.9 16.6385 12.953 16.6584C13.2359 16.7646 13.5833 16.895 13.9406 16.9901C14.8135 17.2225 15.9559 17.3003 16.9581 16.3712Z',
};

export const IconCrazyStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crazy-stroke-rounded IconCrazyStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconCrazyDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crazy-duotone-rounded IconCrazyDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconCrazyTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crazy-twotone-rounded IconCrazyTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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

export const IconCrazySolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crazy-solid-rounded IconCrazySolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCrazyBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crazy-bulk-rounded IconCrazyBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCrazyStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crazy-stroke-sharp IconCrazyStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCrazySolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="crazy-solid-sharp IconCrazySolidSharp"
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

export const iconPackOfCrazy: TheIconSelfPack = {
  name: 'Crazy',
  StrokeRounded: IconCrazyStrokeRounded,
  DuotoneRounded: IconCrazyDuotoneRounded,
  TwotoneRounded: IconCrazyTwotoneRounded,
  SolidRounded: IconCrazySolidRounded,
  BulkRounded: IconCrazyBulkRounded,
  StrokeSharp: IconCrazyStrokeSharp,
  SolidSharp: IconCrazySolidSharp,
};