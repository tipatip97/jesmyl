import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.605 9.02776L6.20258 4.61605C5.61005 4.02227 5.61539 3.05421 6.21452 2.45382C6.81365 1.85343 7.77968 1.84807 8.37221 2.44185L16.1578 10.1671C18.8161 12.831 20.3484 16.3229 17.3811 19.9313L17.0646 20.2485C14.7342 22.5838 10.9558 22.5838 8.62533 20.2485L5.4366 17.0986C4.84407 16.5048 4.85617 15.53 5.46364 14.9213C6.03949 14.3442 6.94364 14.3033 7.54094 14.8064M10.605 9.02776L13.1141 11.5421M10.605 9.02776C10.0125 8.43398 9.01419 8.44781 8.40407 9.05922C7.79394 9.67062 7.77969 10.6476 8.37222 11.2414L9.10007 11.9708M9.10007 11.9708L10.8838 13.7583M9.10007 11.9708C8.50753 11.377 7.55767 11.4047 6.94755 12.0161C6.33742 12.6275 6.32317 13.6045 6.9157 14.1983L7.54094 14.8064M7.54094 14.8064L8.67132 15.9057M7.54094 14.8064C7.57373 14.834 7.6056 14.8633 7.63644 14.8942M12.1361 6.17661C12.3035 4.63978 14.1236 3.04666 16.3963 4.13842C16.6121 4.2421 16.7831 4.43824 16.7851 4.67806C16.7882 5.06439 16.6186 5.54136 16.075 5.85762C15.2974 6.31003 14.0236 8.03862 15.724 9.7426',
  d2: 'M12.0473 6.12685L8.38746 2.45671C7.78021 1.84776 6.79568 1.84776 6.18844 2.45671C5.5812 3.06567 5.5812 4.05298 6.18844 4.66193L10.5865 9.07236C9.97923 8.4634 8.9947 8.4634 8.38746 9.07236C7.78021 9.68131 7.78021 10.6686 8.38746 11.2776L9.12046 12.0126C8.51322 11.4037 7.52869 11.4037 6.92144 12.0126C6.3142 12.6216 6.3142 13.6089 6.92144 14.2179L7.65445 14.9529C7.04721 14.344 6.06267 14.344 5.45543 14.9529C4.84819 15.5619 4.84819 16.5492 5.45543 17.1581L8.02095 19.7309C14.5557 26.2841 23.0698 17.1805 16.817 10.91L16.0841 10.175L12.0473 6.12685Z',
  d3: 'M10.605 9.02776L6.20258 4.61605C5.61005 4.02227 5.61539 3.05421 6.21452 2.45382C6.81365 1.85343 7.77968 1.84807 8.37221 2.44185L16.1578 10.1671C18.8161 12.831 20.3484 16.3229 17.3811 19.9313L17.0646 20.2485C14.7342 22.5838 10.9558 22.5838 8.62533 20.2485L5.4366 17.0986C4.84407 16.5048 4.85617 15.53 5.46364 14.9213C6.03949 14.3442 6.94364 14.3033 7.54094 14.8064M10.605 9.02776L13.1141 11.5421M10.605 9.02776C10.0125 8.43398 9.01419 8.44781 8.40407 9.05922C7.79394 9.67062 7.77969 10.6476 8.37222 11.2414L9.10007 11.9708M7.54094 14.8064L6.9157 14.1983C6.32317 13.6045 6.33742 12.6275 6.94755 12.0161C7.55767 11.4047 8.50753 11.377 9.10007 11.9708M7.54094 14.8064L8.67132 15.9057M7.54094 14.8064C7.57373 14.834 7.6056 14.8633 7.63644 14.8942M9.10007 11.9708L10.8838 13.7583M12.1361 6.17661C12.3035 4.63978 14.1236 3.04666 16.3963 4.13842C16.6121 4.2421 16.7831 4.43824 16.7851 4.67806C16.7882 5.06439 16.6186 5.54136 16.075 5.85762C15.2974 6.31003 14.0236 8.03862 15.724 9.7426',
  d4: 'M10.6065 9.10589L6.20411 4.69418C5.61158 4.1004 5.61692 3.13234 6.21605 2.53195C6.81518 1.93156 7.78121 1.9262 8.37374 2.51998L16.1593 10.2452C18.8176 12.9091 20.3499 16.401 17.3826 20.0094L17.0661 20.3266C16.1466 21.2481 15.0017 21.8059 13.8092 22.0002M10.6065 9.10589L13.1156 11.6202M10.6065 9.10589C10.014 8.51211 9.01572 8.52594 8.4056 9.13735C7.79547 9.74875 7.78122 10.7257 8.37375 11.3195L9.1016 12.0489M7.54247 14.8845L6.91723 14.2764C6.3247 13.6826 6.33895 12.7056 6.94908 12.0942C7.5592 11.4828 8.50906 11.4551 9.1016 12.0489M7.54247 14.8845L8.67285 15.9838M7.54247 14.8845C7.57526 14.9121 7.60713 14.9414 7.63797 14.9723M9.1016 12.0489L10.8853 13.8364',
  d5: 'M10.6035 9.02825L6.20111 4.61654C5.60858 4.02276 5.61392 3.0547 6.21305 2.45431C6.81218 1.85392 7.77821 1.84856 8.37074 2.44234L16.1563 10.1676C18.8146 12.8315 20.3469 16.3234 17.3796 19.9318L17.0631 20.249C14.7327 22.5843 10.9543 22.5843 8.62386 20.249L5.43513 17.0991C4.8426 16.5053 4.8547 15.5305 5.46217 14.9218C6.03802 14.3447 6.94217 14.3038 7.53947 14.8069M10.6035 9.02825L13.1126 11.5426M10.6035 9.02825C10.011 8.43447 9.01272 8.4483 8.4026 9.05971C7.79247 9.67111 7.77822 10.6481 8.37075 11.2419L9.0986 11.9713M7.53947 14.8069L6.91423 14.1988C6.3217 13.605 6.33595 12.628 6.94608 12.0166C7.5562 11.4052 8.50606 11.3775 9.0986 11.9713M7.53947 14.8069L8.66985 15.9062M7.53947 14.8069C7.57226 14.8345 7.60413 14.8638 7.63497 14.8947M9.0986 11.9713L10.8823 13.7588M12.1346 6.1771C12.302 4.64027 14.1221 3.04715 16.3948 4.13891C16.6106 4.24259 16.7816 4.43873 16.7836 4.67855C16.7867 5.06488 16.6171 5.54185 16.0735 5.85811C15.2959 6.31052 14.0221 8.03911 15.7225 9.74309',
  d6: 'M7.46338 1.63701C6.92444 1.121 6.05115 1.121 5.5122 1.63701C4.97257 2.15367 4.97257 2.99183 5.5122 3.50849L13.5892 11.2417C13.7603 11.4055 13.7599 11.6707 13.5883 11.8341C13.4168 11.9974 13.139 11.997 12.9679 11.8332L10.0358 9.02591C9.49688 8.5099 8.62359 8.5099 8.08464 9.02591C7.54502 9.54257 7.54502 10.3807 8.08464 10.8974L10.9895 13.6786C11.1605 13.8424 11.1601 14.1076 10.9886 14.2709C10.817 14.4342 10.5393 14.4339 10.3682 14.2701L8.32086 12.3099L8.31995 12.309C7.78093 11.7939 6.90832 11.7941 6.36968 12.3099C5.83005 12.8265 5.83005 13.6647 6.36968 14.1813L8.38973 16.1154C8.5608 16.2792 8.56041 16.5444 8.38885 16.7077C8.2173 16.8711 7.93954 16.8707 7.76847 16.7069L6.6059 15.5938C6.06696 15.0778 5.19367 15.0778 4.65472 15.5938C4.11509 16.1105 4.11509 16.9486 4.65472 17.4653L7.6559 20.3388C9.49387 22.0985 11.4384 22.78 13.1986 22.749C14.9657 22.7178 16.5912 21.968 17.7843 20.7885C20.1614 18.4384 20.801 14.407 17.3244 11.0784L7.46338 1.63701Z',
  d7: 'M13.4498 3.91402C13.2442 4.07296 12.7856 4.56453 12.5816 5.35115L14.9587 7.627C14.9348 7.36015 14.9526 7.10049 15.0078 6.84869C15.2248 5.85867 15.9956 5.11925 16.727 4.6292C16.9757 4.46248 17.1397 4.20603 17.1789 3.98585C17.2142 3.78778 17.1526 3.65999 16.9913 3.58034C15.8681 3.02572 14.4711 3.12429 13.4498 3.91402Z',
  d8: 'M13.4502 3.91449C13.2446 4.07343 12.786 4.565 12.582 5.35161L14.959 7.62747C14.9352 7.36062 14.953 7.10096 15.0082 6.84916C15.2252 5.85914 15.996 5.11972 16.7273 4.62966C16.9761 4.46294 17.1401 4.2065 17.1793 3.98632C17.2146 3.78825 17.153 3.66046 16.9917 3.58081C15.8685 3.02619 14.4715 3.12476 13.4502 3.91449Z',
  d9: 'M13.0994 12.0895L6.20716 5.16822C5.60366 4.56216 5.60406 3.58049 6.20806 2.97494C6.8124 2.36904 7.79223 2.36903 8.39659 2.9749L16.2221 10.82C17.925 12.5632 18.6704 13.7566 18.942 15.541C19.063 16.3362 19.0004 17.1538 18.758 17.9205C18.1317 19.9006 16.9969 21.1822 15.2028 22.0405C14.565 22.3456 13.8668 22.5165 13.1601 22.5204C10.8637 22.5331 9.34414 21.5109 7.99576 20.24L5.44196 17.6269C4.84336 17.0143 4.85728 16.0301 5.47297 15.4349C6.06966 14.858 7.01478 14.8581 7.61133 15.4352L8.0422 15.8519M10.8911 14.3089L9.45276 12.8486M9.45276 12.8486L8.37387 11.7532C7.77729 11.1475 7.78921 10.1699 8.40037 9.57905C8.99256 9.00651 9.93103 9.0083 10.5211 9.58309L13.0919 12.0876M9.45276 12.8486L9.08222 12.4927C8.4838 11.9181 7.53955 11.9197 6.94307 12.4964C6.3264 13.0926 6.312 14.0782 6.91098 14.6923L8.0422 15.8519M9.45276 12.8486L9.49414 12.8883M9.41716 17.2615L8.0422 15.8519M8.0422 15.8519L8.04665 15.8562M12.2026 6.51115C12.1169 5.32386 14.0543 3.5286 16.4579 4.62687C16.652 4.71558 16.8177 4.87979 16.8262 5.09351C16.8339 5.28961 16.7829 5.4949 16.6994 5.68488C16.601 5.90846 16.4129 6.07434 16.2181 6.22122C14.6684 7.38982 14.4038 8.63952 15.9332 10.6114',
  d10: 'M7.6462 1.64419C7.11558 1.1186 6.25574 1.1186 5.72512 1.64419C5.19389 2.17038 5.19389 3.02396 5.72512 3.55015L13.5122 11.2634L12.9531 11.814L10.1263 9.01395C9.59568 8.48836 8.73584 8.48836 8.20522 9.01395C7.67399 9.54014 7.67399 10.3937 8.20522 10.9199L11.0058 13.6939L10.4467 14.2445L8.4729 12.2894C7.94228 11.7638 7.08244 11.7638 6.55182 12.2894C6.02059 12.8156 6.02059 13.6692 6.55182 14.1954L8.49936 16.1244L7.94033 16.675L6.8195 15.5648C6.28888 15.0393 5.42904 15.0393 4.89842 15.5648C4.36719 16.091 4.36719 16.9446 4.89842 17.4708L7.79187 20.3368C9.56856 22.0967 11.4504 22.7801 13.1561 22.749C14.8679 22.7178 16.442 21.9663 17.5969 20.7851C19.8986 18.431 20.5166 14.3926 17.1532 11.0611L7.6462 1.64419Z',
  d11: 'M13.38 3.91333C13.177 4.07574 12.7024 4.51224 12.5272 5.37455L14.8884 7.71337C14.8548 7.42237 14.8697 7.14022 14.9274 6.86774C15.1345 5.89044 15.8708 5.15822 16.5735 4.67109C16.819 4.5009 16.9817 4.23883 17.0208 4.01128C17.0564 3.80431 16.9937 3.66353 16.8251 3.57742C15.7327 3.01937 14.3737 3.11839 13.38 3.91333Z',
} as const;

export const IconLoveKoreanFingerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="love-korean-finger-stroke-rounded IconLoveKoreanFingerStrokeRounded"
    >
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

export const IconLoveKoreanFingerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="love-korean-finger-duotone-rounded IconLoveKoreanFingerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
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

export const IconLoveKoreanFingerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="love-korean-finger-twotone-rounded IconLoveKoreanFingerTwotoneRounded"
    >
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoveKoreanFingerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="love-korean-finger-solid-rounded IconLoveKoreanFingerSolidRounded"
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

export const IconLoveKoreanFingerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="love-korean-finger-bulk-rounded IconLoveKoreanFingerBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLoveKoreanFingerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="love-korean-finger-stroke-sharp IconLoveKoreanFingerStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLoveKoreanFingerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="love-korean-finger-solid-sharp IconLoveKoreanFingerSolidSharp"
    >
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

export const iconPackOfLoveKoreanFinger: TheIconSelfPack = {
  name: 'LoveKoreanFinger',
  StrokeRounded: IconLoveKoreanFingerStrokeRounded,
  DuotoneRounded: IconLoveKoreanFingerDuotoneRounded,
  TwotoneRounded: IconLoveKoreanFingerTwotoneRounded,
  SolidRounded: IconLoveKoreanFingerSolidRounded,
  BulkRounded: IconLoveKoreanFingerBulkRounded,
  StrokeSharp: IconLoveKoreanFingerStrokeSharp,
  SolidSharp: IconLoveKoreanFingerSolidSharp,
};