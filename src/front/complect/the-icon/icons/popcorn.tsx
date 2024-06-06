import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5.00342 12.001L6.03831 17.0164C6.49989 19.2534 6.73067 20.3719 7.55975 21.0308C9.13581 22.2831 14.8599 22.2871 16.441 21.0308C17.2701 20.3719 17.5009 19.2534 17.9625 17.0164L18.9973 12.001',
  d2: 'M15.0044 12.0148L14.0044 21.999',
  d3: 'M11.0938 2.31253C11.4908 2.4964 11.8312 2.8496 12.0243 3.02872C12.2175 2.8496 12.5092 2.49637 12.9062 2.3125C14.4774 1.58479 16.6099 2.17175 17.4834 3.66401C17.8376 4.26919 18.1149 5.10452 18.0481 5.98859C19.2574 5.98859 20.9317 6.89326 20.9968 8.83838C21.0557 10.5998 20.1509 11.3979 19.4073 11.7759C19.0347 11.9653 18.6108 12.0135 18.1926 12.0135L5.80737 12.0135C5.38915 12.0135 4.96528 11.9653 4.59267 11.7759C3.84906 11.3979 2.94431 10.5998 3.00322 8.83841C3.06828 6.89329 4.79866 6.03205 6.00801 6.03205C5.94113 5.14798 6.16241 4.26922 6.51665 3.66404C7.39012 2.17178 9.52256 1.58482 11.0938 2.31253Z',
  d4: 'M6.03534 17.0303L5 12H19L17.9647 17.0303C17.5029 19.2739 17.272 20.3957 16.4426 21.0565C14.8608 22.3165 9.13419 22.3125 7.55745 21.0565C6.72801 20.3957 6.49712 19.2739 6.03534 17.0303Z',
  d5: 'M18.0748 12C21.9993 12 21.9623 5.92764 18.039 5.97291C18.5155 2.65667 14.3053 0.690008 12.0228 3.0098C9.73094 0.680579 5.50526 2.67586 6.01269 6.00282C2.0713 5.95775 1.9589 12 5.90147 12',
  d6: 'M15 12L14 21.5',
  d7: 'M16.3912 1.70162C17.7095 2.33712 18.7571 3.62974 18.8233 5.28714C19.6487 5.43723 20.3223 5.83823 20.8154 6.4003C21.4446 7.11743 21.7443 8.05401 21.7498 8.96434C21.7553 9.87467 21.4668 10.8148 20.8461 11.5392C20.2119 12.2795 19.2678 12.7494 18.0748 12.7494L5.90146 12.7494C4.70636 12.7494 3.76184 12.283 3.13056 11.5425C2.51284 10.8179 2.23385 9.87818 2.25072 8.96995C2.2676 8.0614 2.58132 7.13016 3.22018 6.41901C3.71943 5.86329 4.39634 5.46638 5.22256 5.31714C5.27697 3.65456 6.32087 2.353 7.63944 1.71041C8.97279 1.06062 10.6729 1.04269 12.0228 2.02213C13.3668 1.04711 15.0597 1.05973 16.3912 1.70162Z',
  d8: 'M11.9965 22.7491C12.191 22.7491 12.2883 22.7492 12.3642 22.698C12.382 22.6861 12.3993 22.6715 12.414 22.656C12.4772 22.5897 12.4939 22.4914 12.5273 22.2947L13.7746 14.9494C13.8298 14.6244 13.8574 14.4619 13.7676 14.3554C13.6777 14.249 13.5128 14.249 13.1831 14.249L5.89989 14.249C5.7945 14.249 5.69014 14.2462 5.58689 14.2408C5.1458 14.2176 4.92526 14.206 4.82918 14.3177C4.7331 14.4295 4.77396 14.628 4.85567 15.025L5.30926 17.2288C5.5317 18.3096 5.71278 19.1895 5.94716 19.8778C6.19224 20.5975 6.52108 21.19 7.08874 21.6422C7.62583 22.07 8.42361 22.3341 9.23942 22.498C10.0806 22.6669 11.0443 22.7488 11.9965 22.7491Z',
  d9: 'M18.4061 14.2397C18.8499 14.2146 19.0718 14.2021 19.1684 14.3139C19.2649 14.4257 19.2238 14.6253 19.1416 15.0246L18.6879 17.2288C18.4655 18.3096 18.2844 19.1895 18.05 19.8778C17.805 20.5975 17.4761 21.19 16.9085 21.6422C16.3701 22.071 15.5714 22.3354 14.7547 22.4991C14.4373 22.5628 14.2786 22.5946 14.1694 22.5073C14.1549 22.4957 14.1401 22.4813 14.1281 22.4672C14.0376 22.3606 14.0657 22.1947 14.1221 21.8629L15.3302 14.7485C15.3708 14.5099 15.391 14.3906 15.4749 14.3198C15.5587 14.249 15.6797 14.249 15.9218 14.249H18.0732C18.1854 14.249 18.2964 14.2459 18.4061 14.2397Z',
  d10: 'M5 12L7 22H17L19 12',
  d11: 'M12.0228 3.0098C9.73094 0.680579 5.50526 2.67586 6.01269 6.00282C2.0713 5.95775 1.9589 12 5.90147 12L18.0748 12C21.9993 12 21.9623 5.92764 18.039 5.97291C18.5155 2.65667 14.3053 0.690008 12.0228 3.0098Z',
  d12: 'M15 12L14 22',
  d13: 'M16.3912 1.7021C17.7095 2.33761 18.7571 3.63023 18.8233 5.28763C19.6487 5.43772 20.3223 5.83872 20.8154 6.40078C21.4446 7.11792 21.7443 8.05449 21.7498 8.96483C21.7553 9.87516 21.4668 10.8152 20.8461 11.5397C20.2119 12.28 19.2678 12.7499 18.0748 12.7499L5.90146 12.7499C4.70636 12.7499 3.76184 12.2835 3.13056 11.543C2.51284 10.8184 2.23385 9.87867 2.25072 8.97044C2.2676 8.06189 2.58132 7.13064 3.22018 6.4195C3.71943 5.86378 4.39634 5.46687 5.22256 5.31763C5.27697 3.65505 6.32087 2.35349 7.63944 1.7109C8.97279 1.0611 10.6729 1.04318 12.0228 2.02262C13.3668 1.0476 15.0597 1.06022 16.3912 1.7021Z',
  d14: 'M13.2676 22.7494H6.38514L4.6582 14.1147C5.05224 14.2036 5.46765 14.2499 5.90066 14.2499L13.9759 14.2499L13.2676 22.7494Z',
  d15: 'M15.4811 14.2499L14.7728 22.7494H17.6148L19.3432 14.1077C18.9415 14.201 18.5172 14.2499 18.074 14.2499H15.4811Z',
};

export const IconPopcornStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="popcorn-stroke-rounded IconPopcornStrokeRounded"
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

export const IconPopcornDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="popcorn-duotone-rounded IconPopcornDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPopcornTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="popcorn-twotone-rounded IconPopcornTwotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPopcornSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="popcorn-solid-rounded IconPopcornSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPopcornBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="popcorn-bulk-rounded IconPopcornBulkRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconPopcornStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="popcorn-stroke-sharp IconPopcornStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPopcornSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="popcorn-solid-sharp IconPopcornSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPopcorn: TheIconSelfPack = {
  name: 'Popcorn',
  StrokeRounded: IconPopcornStrokeRounded,
  DuotoneRounded: IconPopcornDuotoneRounded,
  TwotoneRounded: IconPopcornTwotoneRounded,
  SolidRounded: IconPopcornSolidRounded,
  BulkRounded: IconPopcornBulkRounded,
  StrokeSharp: IconPopcornStrokeSharp,
  SolidSharp: IconPopcornSolidSharp,
};