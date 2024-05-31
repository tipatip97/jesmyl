import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22.0007 17C22.0007 17.5602 19.9999 19 19.9999 19M22.0007 17C22.0007 16.4398 19.9999 15 19.9999 15M22.0007 17H11.5039C10.2864 17 9.6776 17 9.19076 16.6953C8.70393 16.3905 8.43793 15.8429 7.90594 14.7478L2.70815 4.04763M2.70815 4.04763C2.23858 4.32009 2 6.70598 2 6.70598M2.70815 4.04763C3.17772 3.77517 5.35295 4.76046 5.35295 4.76046',
  d2: 'M6 10.8027C6.88252 10.2922 7.90714 10 9 10C12.3137 10 15 12.6863 15 16C15 16.3407 14.9716 16.6748 14.917 17',
  d3: 'M7.90594 14.7478L7.90594 14.7478L6 10.8027C6.88252 10.2922 7.90714 10 9 10C12.3137 10 15 12.6863 15 16C15 16.3407 14.9716 16.6748 14.917 17L11.5039 17C10.2864 17 9.6776 17 9.19076 16.6953C8.70393 16.3905 8.43793 15.8429 7.90594 14.7478Z',
  d4: 'M5.66231 4.57721C6.03962 4.74812 6.2071 5.1926 6.03619 5.56992C5.95797 5.7426 5.82246 5.8713 5.66231 5.94372L4.75344 6.46837L6.56712 10.202C7.32246 9.91003 8.14316 9.75 9.00012 9.75C12.728 9.75 15.7501 12.7721 15.7501 16.5L19.2586 16.5V15.6123C19.2302 15.4253 19.2721 15.2275 19.3912 15.0619C19.6331 14.7257 20.1018 14.6493 20.438 14.8912C20.5005 14.9449 20.6247 15.0485 20.7804 15.1783L20.7804 15.1783C21.2737 15.5895 22.0835 16.2645 22.2519 16.4565C22.3621 16.5821 22.4735 16.7238 22.5612 16.8729C22.639 17.0051 22.7508 17.2293 22.7508 17.5C22.7508 17.7707 22.639 17.9949 22.5612 18.1271C22.4735 18.2762 22.3621 18.4179 22.2519 18.5435C22.0834 18.7355 21.2738 19.4105 20.7808 19.8215L20.7806 19.8217C20.6251 19.9512 20.5012 20.0545 20.4388 20.1082C20.1026 20.3501 19.6331 20.2743 19.3912 19.9381C19.279 19.7821 19.2353 19.5977 19.2542 19.4207L19.2586 18.5L11.4576 18.5C10.8889 18.5 10.3877 18.5001 9.9701 18.4565C9.51784 18.4093 9.07895 18.3047 8.66069 18.0429C8.24242 17.7811 7.95653 17.432 7.71649 17.0458C7.49486 16.6892 7.27589 16.2384 7.02744 15.7269L3.0169 7.4708L2.25152 7.91262C2.15022 7.94882 2.03953 7.96367 1.92543 7.95226C1.51327 7.91105 1.21256 7.54351 1.25378 7.13136L1.25473 7.12408C1.28647 6.88049 1.37896 6.17075 1.44091 5.84063C1.50257 5.51214 1.58399 5.14886 1.68882 4.83817C1.74095 4.68369 1.80624 4.51973 1.88958 4.37186C1.96318 4.24127 2.09936 4.03381 2.3318 3.89893C2.5647 3.76379 2.81261 3.74882 2.96289 3.75007C3.13274 3.75148 3.3073 3.77673 3.46681 3.80867C3.7876 3.8729 4.14185 3.98385 4.45591 4.09449C4.77163 4.20572 5.4299 4.48028 5.65568 4.57445L5.66231 4.57721Z',
  d5: 'M5.66231 4.57721C6.03962 4.74812 6.2071 5.1926 6.03619 5.56992C5.95797 5.7426 5.82246 5.8713 5.66231 5.94372L4.75344 6.46837L9.36851 15.9381C9.50168 16.2113 9.56826 16.348 9.68987 16.424C9.81148 16.5 9.96347 16.5 10.2674 16.5H19.2586V15.6123C19.2302 15.4253 19.2721 15.2275 19.3912 15.0619C19.6331 14.7257 20.1018 14.6493 20.438 14.8912C20.5005 14.9449 20.6247 15.0485 20.7804 15.1783C21.2737 15.5895 22.0835 16.2645 22.2519 16.4565C22.3621 16.5821 22.4735 16.7238 22.5612 16.8729C22.639 17.0051 22.7508 17.2293 22.7508 17.5C22.7508 17.7707 22.639 17.9949 22.5612 18.1271C22.4735 18.2762 22.3621 18.4179 22.2519 18.5435C22.0834 18.7355 21.2738 19.4105 20.7808 19.8215C20.6254 19.951 20.5012 20.0545 20.4388 20.1082C20.1026 20.3501 19.6331 20.2743 19.3912 19.9381C19.279 19.7821 19.2353 19.5977 19.2542 19.4207L19.2586 18.5L11.4576 18.5C10.8889 18.5 10.3877 18.5001 9.9701 18.4565C9.51784 18.4093 9.07895 18.3047 8.66069 18.0429C8.24242 17.7811 7.95653 17.432 7.71649 17.0458C7.49486 16.6892 7.27589 16.2384 7.02744 15.7269L3.0169 7.4708L2.25152 7.91262C2.15022 7.94882 2.03953 7.96367 1.92543 7.95226C1.51327 7.91105 1.21256 7.54351 1.25378 7.13136L1.25473 7.12408C1.28647 6.88049 1.37896 6.17075 1.44091 5.84063C1.50257 5.51214 1.58399 5.14886 1.68882 4.83817C1.74095 4.68369 1.80624 4.51973 1.88958 4.37186C1.96318 4.24127 2.09936 4.03381 2.3318 3.89893C2.5647 3.76379 2.81261 3.74882 2.96289 3.75007C3.13274 3.75148 3.3073 3.77673 3.46681 3.80867C3.7876 3.8729 4.14185 3.98385 4.45591 4.09449C4.77163 4.20572 5.4299 4.48028 5.65568 4.57445L5.66231 4.57721Z',
  d6: 'M15.7483 16.5C15.7483 12.7721 12.7263 9.75 8.99835 9.75C8.14326 9.75 7.32429 9.90933 6.57031 10.2001L9.36673 15.9381C9.4999 16.2113 9.56648 16.348 9.68809 16.424C9.8097 16.5 9.96169 16.5 10.2657 16.5L15.7483 16.5Z',
  d7: 'M18.9993 19.5L22 16.9947L18.9993 14.5021M2 7.99851L3.20889 4.5L6.9998 5.49958M3.45608 4.99091L9.50025 16.9947H21.3783',
  d8: 'M15.0003 17C15.0003 13.6863 12.3141 11 9.00034 11C8.14636 11 7.33404 11.1784 6.59863 11.5',
  d9: 'M3.40407 3.53324C2.89832 3.39983 2.37528 3.67903 2.20446 4.17359L0.996094 7.67211L2.8856 8.3253L3.32093 7.06492L8.5546 17.6768C8.72441 18.0142 9.06978 18.2271 9.44738 18.2271H19.2397L18.3565 18.9647L19.6378 20.5L22.6371 17.9947C22.865 17.8044 22.9965 17.5227 22.9961 17.2258C22.9957 16.9289 22.8635 16.6475 22.6352 16.4578L19.6358 13.9653L18.3584 15.5037L19.2289 16.2271H15.6432C15.2599 12.8634 12.405 10.25 8.93956 10.25C8.34813 10.25 7.77377 10.3263 7.22614 10.4697L5.03987 6.03311L6.68363 6.46672L7.19333 4.53281L3.40407 3.53324Z',
} as const;

export const IconObtuseStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="obtuse-stroke-rounded IconObtuseStrokeRounded"
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

export const IconObtuseDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="obtuse-duotone-rounded IconObtuseDuotoneRounded"
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

export const IconObtuseTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="obtuse-twotone-rounded IconObtuseTwotoneRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconObtuseSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="obtuse-solid-rounded IconObtuseSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconObtuseBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="obtuse-bulk-rounded IconObtuseBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconObtuseStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="obtuse-stroke-sharp IconObtuseStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconObtuseSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="obtuse-solid-sharp IconObtuseSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfObtuse: TheIconSelfPack = {
  name: 'Obtuse',
  StrokeRounded: IconObtuseStrokeRounded,
  DuotoneRounded: IconObtuseDuotoneRounded,
  TwotoneRounded: IconObtuseTwotoneRounded,
  SolidRounded: IconObtuseSolidRounded,
  BulkRounded: IconObtuseBulkRounded,
  StrokeSharp: IconObtuseStrokeSharp,
  SolidSharp: IconObtuseSolidSharp,
};