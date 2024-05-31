import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.0784 15L7.30434 17.6838C7.06684 18.0431 6.94808 18.2227 7.02165 18.3614C7.09522 18.5 7.30931 18.5 7.73747 18.5H9.26253C9.69069 18.5 9.90478 18.5 9.97835 18.6386C10.0519 18.7773 9.93316 18.9569 9.69566 19.3162L7.9216 22',
  d2: 'M16 20L15 22',
  d3: 'M13 20L12 22',
  d4: 'M17.4776 10.9008C17.485 10.9007 17.4925 10.9007 17.5 10.9007C19.9853 10.9007 22 12.8821 22 15.3263C22 17.2532 20.7478 18.8925 19 19.5M17.4776 10.9008C17.4924 10.7388 17.5 10.5748 17.5 10.409C17.5 7.42169 15.0376 5 12 5C9.12324 5 6.76233 7.17208 6.52042 9.9396M17.4776 10.9008C17.3753 12.0165 16.9286 13.0344 16.2428 13.8511M6.52042 9.9396C3.98398 10.177 2 12.2779 2 14.8345C2 16.4433 2.78555 17.8716 4 18.7687M6.52042 9.9396C6.67826 9.92483 6.83823 9.91727 7 9.91727C8.12582 9.91727 9.16474 10.2832 10.0005 10.9007',
  d5: 'M10 5.14839C9.91652 4.71721 9.76249 4.29241 9.53351 3.89062C8.98606 2.93002 8.11203 2.27953 7.13552 2C7.28642 3.2303 6.71543 4.48952 5.58897 5.14839C4.46251 5.80725 3.10057 5.6786 2.1243 4.93106C1.87501 5.92756 1.99406 7.01964 2.54151 7.98024C3.20804 9.1498 4.35869 9.85965 5.58897 10',
  d6: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d7: 'M9.75542 14.0428C10.2161 14.3474 10.3427 14.9678 10.0382 15.4285L8.75014 17.377L9.42826 17.377C9.60405 17.3768 9.83382 17.3766 10.0264 17.4053C10.2373 17.4367 10.7217 17.5466 10.9873 18.0469C11.251 18.5439 11.0743 19.0048 10.9848 19.1958C10.9023 19.372 10.7755 19.5635 10.6776 19.7112L8.88139 22.4285C8.57684 22.8892 7.95646 23.0158 7.49574 22.7113C7.03501 22.4067 6.90841 21.7863 7.21296 21.3256L8.50102 19.377L7.82289 19.3771C7.64711 19.3773 7.41734 19.3775 7.22471 19.3488C7.01382 19.3173 6.52941 19.2075 6.2639 18.7072C6.00017 18.2102 6.17687 17.7492 6.26631 17.5583C6.34881 17.3821 6.47568 17.1906 6.57354 17.0429L8.3476 14.3591C8.65215 13.8984 9.2947 13.7383 9.75542 14.0428Z',
  d8: 'M13.5728 18.9826C14.0668 19.2296 14.267 19.8303 14.02 20.3243L13.02 22.3243C12.773 22.8182 12.1723 23.0185 11.6784 22.7715C11.1844 22.5245 10.9842 21.9238 11.2312 21.4298L12.2312 19.4298C12.4781 18.9358 13.0788 18.7356 13.5728 18.9826Z',
  d9: 'M16.5728 18.9826C17.0668 19.2296 17.267 19.8303 17.02 20.3243L16.02 22.3243C15.773 22.8182 15.1723 23.0185 14.6784 22.7715C14.1844 22.5245 13.9842 21.9238 14.2312 21.4298L15.2312 19.4298C15.4781 18.9358 16.0788 18.7356 16.5728 18.9826Z',
  d10: 'M6.06431 9.09283C6.01491 9.28884 5.9902 9.38684 5.93372 9.4447C5.87724 9.50255 5.77924 9.52976 5.58325 9.58419C3.15606 10.2582 1.375 12.4833 1.375 15.125C1.375 17.3682 2.65953 19.3114 4.53315 20.2591C4.97766 20.484 5.19992 20.5964 5.27358 20.5768C5.34817 20.557 5.39703 20.5075 5.41603 20.4327C5.43479 20.3589 5.30614 20.1115 5.04885 19.6167C5.01208 19.546 4.97575 19.4762 4.93978 19.4084C4.3326 18.2642 4.76519 17.2268 4.90876 16.9202C5.0396 16.6408 5.21997 16.3691 5.30973 16.234L7.09716 13.53C7.8159 12.4428 9.36885 11.9867 10.5835 12.7896C11.7353 13.551 12.0518 15.1019 11.2904 16.2538C11.284 16.2633 11.2871 16.2763 11.2972 16.282C11.3082 16.2882 11.3193 16.2945 11.3305 16.3008C11.5857 16.4451 11.8874 16.6156 12.1271 16.96C12.3035 17.2134 12.3917 17.3402 12.4628 17.3744C12.5339 17.4086 12.677 17.3991 12.9632 17.3801C13.3915 17.3517 13.8328 17.4332 14.2445 17.6391C14.4517 17.7427 14.5552 17.7945 14.626 17.7945C14.6968 17.7945 14.8005 17.7427 15.008 17.6391C15.6875 17.2999 16.5128 17.2733 17.2445 17.6391C18.088 18.0608 18.5889 18.8951 18.6249 19.7751C18.6469 20.3124 18.6579 20.5811 18.7856 20.6657C18.9133 20.7504 19.0982 20.6811 19.468 20.5424C21.4584 19.7961 22.875 17.876 22.875 15.625C22.875 13.1535 21.1672 11.0809 18.8673 10.5229C18.6239 10.4638 18.5022 10.4343 18.4397 10.3633C18.3772 10.2923 18.3635 10.1696 18.3362 9.92424C17.9878 6.80231 15.3399 4.375 12.125 4.375C9.20171 4.375 6.74772 6.38153 6.06431 9.09283Z',
  d11: 'M3.53528 7.61012C3.34843 7.28225 3.22734 6.93425 3.16804 6.58152C4.16662 6.82644 5.25741 6.69891 6.21881 6.13659C7.17879 5.5751 7.82916 4.68613 8.11664 3.69408C8.37847 3.9179 8.60755 4.19124 8.78965 4.51077C8.91124 4.72413 9.0047 4.94534 9.07149 5.17034C9.64819 4.84681 10.2814 4.6121 10.9527 4.48473C10.8462 4.1551 10.7048 3.83196 10.5273 3.5205C9.84659 2.32609 8.75573 1.51288 7.53569 1.16363C7.21321 1.07132 6.86594 1.14683 6.61091 1.36471C6.35589 1.58259 6.22708 1.91382 6.26792 2.24676C6.37255 3.09983 5.9747 3.96238 5.20905 4.41021C4.44617 4.85642 3.52313 4.77201 2.85722 4.2621C2.58984 4.05737 2.23738 4.00096 1.91947 4.11202C1.60155 4.22308 1.36089 4.4867 1.27916 4.81339C0.970065 6.04893 1.11731 7.4066 1.79765 8.60039C2.26835 9.42634 2.93457 10.0694 3.70378 10.5032C4.2614 10.0898 4.89646 9.77488 5.58325 9.58416C5.77924 9.52974 5.87724 9.50253 5.93372 9.44468C5.96588 9.41174 5.98773 9.3658 6.0097 9.29616C5.11436 9.11566 4.00186 8.42882 3.53528 7.61012Z',
  d12: 'M9.07875 15L7 18.5H10.0003L7.92195 22',
  d13: 'M16.5 19L15 21.9999',
  d14: 'M13.5 19L12 21.9999',
  d15: 'M8.8998 15.2285L10.6194 16.2498L9.43784 18.2392H12.438L9.4626 23.2498L7.74296 22.2286L8.92432 20.2392H5.92383L8.8998 15.2285Z',
  d16: 'M14.7871 22.2919L16.2871 19.292L18.0759 20.1864L16.5759 23.1863L14.7871 22.2919Z',
  d17: 'M13.2871 19.292L11.7871 22.2919L13.5759 23.1863L15.0759 20.1864L13.2871 19.292Z',
  d18: 'M1.95853 8.57974C2.46175 9.45844 3.17654 10.139 4.00113 10.5931C2.35088 11.6037 1.25 13.4231 1.25 15.5C1.25 17.6011 2.37695 19.439 4.05936 20.4422L8.37684 13.1729L12.6758 15.7261L12.0741 16.7392H15.0741L14.2641 18.1031L15.017 18.4795L15.6171 17.2795L20.0892 19.5157L19.3989 20.8961C21.3598 20.135 22.75 18.2298 22.75 16C22.75 13.3541 20.7927 11.1653 18.2469 10.8027C18.1428 7.44224 15.3858 4.75 12 4.75C11.9067 4.75 11.8139 4.75204 11.7216 4.75609C11.6072 4.24066 11.4145 3.73438 11.1397 3.25455C10.4229 2.00293 9.27509 1.152 7.99255 0.78665C7.68421 0.698817 7.35231 0.771121 7.10866 0.9792C6.86501 1.18728 6.74204 1.50343 6.7812 1.82114C6.89893 2.77626 6.45189 3.74549 5.58504 4.25004C4.72017 4.75344 3.67359 4.65753 2.91993 4.08326C2.66429 3.88846 2.32768 3.83502 2.02412 3.94102C1.72056 4.04703 1.49072 4.29828 1.41243 4.60968C1.08672 5.9053 1.242 7.32856 1.95853 8.57974ZM3.185 6.31676C3.23715 6.76732 3.37942 7.21446 3.61864 7.63218C4.14484 8.551 5.02726 9.12892 5.98611 9.29297C6.53241 7.36479 7.98051 5.81594 9.84591 5.13109C9.77166 4.81354 9.65063 4.50083 9.47955 4.20211C9.24355 3.79001 8.93636 3.44692 8.58292 3.17891C8.30957 4.28356 7.60885 5.28195 6.5482 5.8993C5.48709 6.51692 4.27537 6.63082 3.185 6.31676Z',
} as const;

export const IconMoonAngledRainZapStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-angled-rain-zap-stroke-rounded IconMoonAngledRainZapStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonAngledRainZapDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-angled-rain-zap-duotone-rounded IconMoonAngledRainZapDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonAngledRainZapTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-angled-rain-zap-twotone-rounded IconMoonAngledRainZapTwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonAngledRainZapSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-angled-rain-zap-solid-rounded IconMoonAngledRainZapSolidRounded"
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonAngledRainZapBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-angled-rain-zap-bulk-rounded IconMoonAngledRainZapBulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonAngledRainZapStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-angled-rain-zap-stroke-sharp IconMoonAngledRainZapStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonAngledRainZapSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-angled-rain-zap-solid-sharp IconMoonAngledRainZapSolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoonAngledRainZap: TheIconSelfPack = {
  name: 'MoonAngledRainZap',
  StrokeRounded: IconMoonAngledRainZapStrokeRounded,
  DuotoneRounded: IconMoonAngledRainZapDuotoneRounded,
  TwotoneRounded: IconMoonAngledRainZapTwotoneRounded,
  SolidRounded: IconMoonAngledRainZapSolidRounded,
  BulkRounded: IconMoonAngledRainZapBulkRounded,
  StrokeSharp: IconMoonAngledRainZapStrokeSharp,
  SolidSharp: IconMoonAngledRainZapSolidSharp,
};