import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 3H22',
  d2: 'M12 3V16',
  d3: 'M19.5 3V11',
  d4: 'M4.5 3V11',
  d5: 'M4.5 11.0001C2.7846 11.0001 1.7947 13.512 2.03594 14.9903C2.24261 16.2568 6.73167 16.4143 6.96406 14.9903C7.2053 13.512 6.21541 11.0001 4.5 11.0001Z',
  d6: 'M12 16C10.2846 16 9.2947 18.5119 9.53594 19.9902C9.74261 21.2567 14.2317 21.4142 14.4641 19.9902C14.7053 18.5119 13.7154 16 12 16Z',
  d7: 'M19.5 11.0001C17.7846 11.0001 16.7947 13.512 17.0359 14.9903C17.2426 16.2568 21.7317 16.4143 21.9641 14.9903C22.2053 13.512 21.2154 11.0001 19.5 11.0001Z',
  d8: 'M4.5 11C2.7846 11 1.7947 13.5119 2.03594 14.9902C2.24261 16.2567 6.73167 16.4142 6.96406 14.9902C7.2053 13.5119 6.21541 11 4.5 11Z',
  d9: 'M19.5 11C17.7846 11 16.7947 13.5119 17.0359 14.9902C17.2426 16.2567 21.7317 16.4142 21.9641 14.9902C22.2053 13.5119 21.2154 11 19.5 11Z',
  d10: 'M1.87189 12.214C2.35973 11.2957 3.23637 10.3751 4.50001 10.3751C5.76366 10.3751 6.64029 11.2957 7.12813 12.214C7.62256 13.1448 7.85581 14.3076 7.70428 15.2361C7.57798 16.0101 6.90807 16.408 6.38083 16.5992C5.81206 16.8056 5.12525 16.885 4.47782 16.8742C3.82896 16.8633 3.15139 16.7606 2.59641 16.5518C2.10852 16.3683 1.41816 15.9862 1.29575 15.2361C1.14422 14.3076 1.37746 13.1448 1.87189 12.214Z',
  d11: 'M9.37189 17.2139C9.85973 16.2955 10.7364 15.375 12 15.375C13.2637 15.375 14.1403 16.2955 14.6281 17.2139C15.1226 18.1447 15.3558 19.3074 15.2043 20.236C15.078 21.0099 14.4081 21.4079 13.8808 21.5991C13.3121 21.8054 12.6252 21.8849 11.9778 21.874C11.329 21.8632 10.6514 21.7605 10.0964 21.5517C9.60852 21.3682 8.91816 20.9861 8.79575 20.236C8.64422 19.3074 8.87746 18.1447 9.37189 17.2139Z',
  d12: 'M16.8719 12.214C17.3597 11.2957 18.2364 10.3751 19.5 10.3751C20.7637 10.3751 21.6403 11.2957 22.1281 12.214C22.6226 13.1448 22.8558 14.3076 22.7043 15.2361C22.578 16.0101 21.9081 16.408 21.3808 16.5992C20.8121 16.8056 20.1252 16.885 19.4778 16.8742C18.829 16.8633 18.1514 16.7606 17.5964 16.5518C17.1085 16.3683 16.4182 15.9862 16.2957 15.2361C16.1442 14.3076 16.3775 13.1448 16.8719 12.214Z',
  d13: 'M1 3.125C1 2.57272 1.44772 2.125 2 2.125H22C22.5523 2.125 23 2.57272 23 3.125C23 3.67728 22.5523 4.125 22 4.125H2C1.44772 4.125 1 3.67728 1 3.125Z',
  d14: 'M12 2.125C12.5523 2.125 13 2.57272 13 3.125V16.125C13 16.6773 12.5523 17.125 12 17.125C11.4477 17.125 11 16.6773 11 16.125V3.125C11 2.57272 11.4477 2.125 12 2.125Z',
  d15: 'M19.5 2.125C20.0523 2.125 20.5 2.57272 20.5 3.125V11.125C20.5 11.6773 20.0523 12.125 19.5 12.125C18.9477 12.125 18.5 11.6773 18.5 11.125V3.125C18.5 2.57272 18.9477 2.125 19.5 2.125Z',
  d16: 'M4.5 2.125C5.05228 2.125 5.5 2.57272 5.5 3.125V11.125C5.5 11.6773 5.05228 12.125 4.5 12.125C3.94772 12.125 3.5 11.6773 3.5 11.125V3.125C3.5 2.57272 3.94772 2.125 4.5 2.125Z',
  d17: 'M11 15.5878C11.3009 15.4559 11.6342 15.3788 12 15.3788C12.3658 15.3788 12.6991 15.4559 13 15.5878L13 3.12497C13 2.57269 12.5523 2.12497 12 2.12497C11.4477 2.12497 11 2.57269 11 3.12497L11 15.5878ZM3.5 10.5879C3.80088 10.456 4.13423 10.3789 4.50001 10.3789C4.86578 10.3789 5.19913 10.456 5.5 10.5879L5.5 3.12497C5.5 2.57269 5.05228 2.12497 4.5 2.12497C3.94772 2.12497 3.5 2.57269 3.5 3.12497L3.5 10.5879ZM18.5 10.5879C18.8009 10.456 19.1342 10.3789 19.5 10.3789C19.8658 10.3789 20.1991 10.456 20.5 10.5879V3.12497C20.5 2.57269 20.0523 2.12497 19.5 2.12497C18.9477 2.12497 18.5 2.57269 18.5 3.12497V10.5879Z',
  d18: 'M12 3V17',
  d19: 'M22 15C22 15 22 11 19.5 11C17 11 17 15 17 15H22Z',
  d20: 'M7 15C7 15 7 11 4.5 11C2 11 2 15 2 15H7Z',
  d21: 'M14.5 21C14.5 21 14.5 17 12 17C9.5 17 9.5 21 9.5 21H14.5Z',
  d22: 'M9.09664 18.7763C9.43089 17.7067 10.2237 16.25 12 16.25C13.7763 16.25 14.5691 17.7067 14.9034 18.7763C15.0794 19.3395 15.1647 19.8924 15.2069 20.2973C15.2282 20.5016 15.25 20.8359 15.25 21V21.75H8.75V21C8.75 20.8242 8.77181 20.5016 8.7931 20.2973C8.83528 19.8924 8.92062 19.3395 9.09664 18.7763Z',
  d23: 'M16.5966 12.7763C16.9309 11.7067 17.7237 10.25 19.5 10.25C21.2763 10.25 22.0691 11.7067 22.4034 12.7763C22.5794 13.3395 22.6647 13.8924 22.7069 14.2973C22.7282 14.5016 22.75 14.8359 22.75 15V15.75H16.25V15C16.25 14.8242 16.2718 14.5016 16.2931 14.2973C16.3353 13.8924 16.4206 13.3395 16.5966 12.7763Z',
  d24: 'M11 4.24988V16.9999H13V4.24988H18.5V10.9999H20.5V4.24988H22V2.24988H2V4.24988H3.5V10.9999H5.5V4.24988H11Z',
  d25: 'M1.59664 12.7762C1.93089 11.7066 2.72365 10.2499 4.5 10.2499C6.27635 10.2499 7.06911 11.7066 7.40336 12.7762C7.57938 13.3394 7.66472 13.8922 7.7069 14.2972C7.72819 14.5015 7.75 14.8358 7.75 14.9999V15.7499H1.25V14.9999C1.25 14.8241 1.27181 14.5015 1.2931 14.2972C1.33528 13.8922 1.42062 13.3394 1.59664 12.7762Z',
} as const;

export const IconCandelier02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-02-stroke-rounded IconCandelier02StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCandelier02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-02-duotone-rounded IconCandelier02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconCandelier02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-02-twotone-rounded IconCandelier02TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCandelier02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-02-solid-rounded IconCandelier02SolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCandelier02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-02-bulk-rounded IconCandelier02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCandelier02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-02-stroke-sharp IconCandelier02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCandelier02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="candelier-02-solid-sharp IconCandelier02SolidSharp"
    >
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCandelier02: TheIconSelfPack = {
  name: 'Candelier02',
  StrokeRounded: IconCandelier02StrokeRounded,
  DuotoneRounded: IconCandelier02DuotoneRounded,
  TwotoneRounded: IconCandelier02TwotoneRounded,
  SolidRounded: IconCandelier02SolidRounded,
  BulkRounded: IconCandelier02BulkRounded,
  StrokeSharp: IconCandelier02StrokeSharp,
  SolidSharp: IconCandelier02SolidSharp,
};