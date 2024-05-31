import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.4776 11.0448C17.485 11.0448 17.4925 11.0448 17.5 11.0448C19.9853 11.0448 22 13.0745 22 15.5784C22 16.921 21.5 18 21 18.5M17.4776 11.0448C17.4924 10.8789 17.5 10.7109 17.5 10.541C17.5 7.48081 15.0376 5 12 5C9.12324 5 6.76233 7.2251 6.52042 10.0602M17.4776 11.0448C17.3753 12.1877 16.9286 13.2306 16.2428 14.0672M6.52042 10.0602C3.98398 10.3034 2 12.4556 2 15.0746C2 16.4838 2.57432 17.617 3.5 18.5M6.52042 10.0602C6.67826 10.0451 6.83823 10.0373 7 10.0373C8.12582 10.0373 9.16474 10.4122 10.0005 11.0448',
  d2: 'M12.0017 15L12.0062 15.0078M15.0005 17.9967L15.005 18.0044M9.00278 17.9967L9.00727 18.0044M17.9994 20.9933L18.0039 21.0011M6.00391 20.9933L6.0084 21.0011M12.0017 21.9922L12.0062 22',
  d3: 'M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M13.127 15C13.127 15.5523 12.6792 16 12.127 16C11.5747 16 11.127 15.5523 11.127 15C11.127 14.4477 11.5747 14 12.127 14C12.6792 14 13.127 14.4477 13.127 15Z',
  d6: 'M10.127 18C10.127 18.5523 9.67924 19 9.12695 19C8.57467 19 8.12695 18.5523 8.12695 18C8.12695 17.4477 8.57467 17 9.12695 17C9.67924 17 10.127 17.4477 10.127 18Z',
  d7: 'M16.127 18C16.127 18.5523 15.6792 19 15.127 19C14.5747 19 14.127 18.5523 14.127 18C14.127 17.4477 14.5747 17 15.127 17C15.6792 17 16.127 17.4477 16.127 18Z',
  d8: 'M7.12695 21C7.12695 21.5523 6.67924 22 6.12695 22C5.57467 22 5.12695 21.5523 5.12695 21C5.12695 20.4477 5.57467 20 6.12695 20C6.67924 20 7.12695 20.4477 7.12695 21Z',
  d9: 'M13.127 22C13.127 22.5523 12.6792 23 12.127 23C11.5747 23 11.127 22.5523 11.127 22C11.127 21.4477 11.5747 21 12.127 21C12.6792 21 13.127 21.4477 13.127 22Z',
  d10: 'M19.127 21C19.127 21.5523 18.6792 22 18.127 22C17.5747 22 17.127 21.5523 17.127 21C17.127 20.4477 17.5747 20 18.127 20C18.6792 20 19.127 20.4477 19.127 21Z',
  d11: 'M6.06626 8.96783C6.01686 9.16384 5.99216 9.26184 5.93567 9.3197C5.87919 9.37755 5.7812 9.40476 5.58521 9.45919C3.15802 10.1332 1.37695 12.3583 1.37695 15C1.37695 16.7635 2.17081 18.3415 3.42065 19.3963C3.62469 19.5685 3.7267 19.6546 3.84506 19.6485C3.96342 19.6424 4.08443 19.5168 4.32645 19.2656C4.7812 18.7936 5.41979 18.5 6.12695 18.5C6.27487 18.5 6.34883 18.5 6.37047 18.4968C6.54352 18.4715 6.59841 18.4166 6.62378 18.2435C6.62695 18.2219 6.62695 18.1479 6.62695 18C6.62695 16.6193 7.74624 15.5 9.12695 15.5C9.27487 15.5 9.34883 15.5 9.37047 15.4968C9.54352 15.4715 9.59841 15.4166 9.62378 15.2435C9.62695 15.2219 9.62695 15.1479 9.62695 15C9.62695 13.6193 10.7462 12.5 12.127 12.5C13.5077 12.5 14.627 13.6193 14.627 15C14.627 15.1479 14.627 15.2219 14.6301 15.2435C14.6555 15.4166 14.7104 15.4715 14.8834 15.4968C14.9051 15.5 14.979 15.5 15.127 15.5C16.5077 15.5 17.627 16.6193 17.627 18C17.627 18.1479 17.627 18.2219 17.6301 18.2435C17.6555 18.4166 17.7104 18.4715 17.8834 18.4968C17.9051 18.5 17.979 18.5 18.127 18.5C18.8921 18.5 19.5769 18.8437 20.0355 19.3852C20.2709 19.6631 20.3886 19.8021 20.511 19.8132C20.6334 19.8243 20.7402 19.7367 20.9539 19.5615C22.1279 18.5987 22.877 17.1368 22.877 15.5C22.877 13.0285 21.1692 10.9559 18.8693 10.3979C18.6259 10.3388 18.5042 10.3093 18.4417 10.2383C18.3792 10.1673 18.3655 10.0446 18.3381 9.79924C17.9898 6.67731 15.3418 4.25 12.127 4.25C9.20367 4.25 6.74967 6.25653 6.06626 8.96783Z',
  d12: 'M3.53264 7.46474C3.34683 7.13975 3.22618 6.79497 3.16673 6.4455C4.16477 6.68952 5.25481 6.56239 6.21565 6.0022C7.17542 5.44263 7.82643 4.55613 8.11433 3.56619C8.37673 3.78948 8.60616 4.06219 8.78838 4.38091C8.91138 4.59603 9.00551 4.81911 9.07234 5.04597C9.64903 4.72229 10.2823 4.48743 10.9536 4.35994C10.8466 4.02767 10.704 3.70198 10.5246 3.38824C9.84341 2.19671 8.75223 1.38631 7.53292 1.0384C7.21044 0.946381 6.86332 1.02213 6.60849 1.24011C6.35366 1.4581 6.22506 1.78931 6.26601 2.12214C6.37027 2.96944 5.97411 3.82792 5.2083 4.27441C4.44457 4.71968 3.52023 4.63524 2.85403 4.12676C2.58667 3.92269 2.23462 3.8667 1.91714 3.97775C1.59966 4.08881 1.35927 4.35202 1.27739 4.67825C0.967901 5.9114 1.11542 7.26636 1.79638 8.45742C2.27157 9.28856 2.94509 9.93348 3.72247 10.3658C4.27605 9.95852 4.90527 9.64798 5.58521 9.45917C5.7812 9.40474 5.87919 9.37753 5.93567 9.31968C5.98916 9.2649 6.01415 9.17411 6.0586 8.99819C5.04941 8.96269 4.07778 8.41823 3.53264 7.46474Z',
  d13: 'M13.0039 15.25C13.0039 15.8023 12.5562 16.25 12.0039 16.25C11.4516 16.25 11.0039 15.8023 11.0039 15.25C11.0039 14.6977 11.4516 14.25 12.0039 14.25C12.5562 14.25 13.0039 14.6977 13.0039 15.25Z',
  d14: 'M10.0039 18.25C10.0039 18.8023 9.55619 19.25 9.00391 19.25C8.45162 19.25 8.00391 18.8023 8.00391 18.25C8.00391 17.6977 8.45162 17.25 9.00391 17.25C9.55619 17.25 10.0039 17.6977 10.0039 18.25Z',
  d15: 'M13.0039 22.25C13.0039 22.8023 12.5562 23.25 12.0039 23.25C11.4516 23.25 11.0039 22.8023 11.0039 22.25C11.0039 21.6977 11.4516 21.25 12.0039 21.25C12.5562 21.25 13.0039 21.6977 13.0039 22.25Z',
  d16: 'M15.0039 19.25C15.5562 19.25 16.0039 18.8023 16.0039 18.25C16.0039 17.6977 15.5562 17.25 15.0039 17.25C14.4516 17.25 14.0039 17.6977 14.0039 18.25C14.0039 18.8023 14.4516 19.25 15.0039 19.25Z',
  d17: 'M7.00391 21.25C7.00391 21.8023 6.55619 22.25 6.00391 22.25C5.45162 22.25 5.00391 21.8023 5.00391 21.25C5.00391 20.6977 5.45162 20.25 6.00391 20.25C6.55619 20.25 7.00391 20.6977 7.00391 21.25Z',
  d18: 'M19.0039 21.25C19.0039 21.8023 18.5562 22.25 18.0039 22.25C17.4516 22.25 17.0039 21.8023 17.0039 21.25C17.0039 20.6977 17.4516 20.25 18.0039 20.25C18.5562 20.25 19.0039 20.6977 19.0039 21.25Z',
  d19: 'M1.95853 8.57974C2.46175 9.45844 3.17654 10.139 4.00113 10.5931C2.35088 11.6037 1.25 13.4231 1.25 15.5C1.25 17.4577 2.22838 19.1869 3.72287 20.2253C4.11418 19.3556 4.98832 18.75 6.00391 18.75C6.1978 18.75 6.38654 18.7721 6.56775 18.8138C6.52598 18.6326 6.50391 18.4439 6.50391 18.25C6.50391 16.8693 7.62319 15.75 9.00391 15.75C9.1978 15.75 9.38654 15.7721 9.56775 15.8138C9.52598 15.6326 9.50391 15.4439 9.50391 15.25C9.50391 13.8693 10.6232 12.75 12.0039 12.75C13.3846 12.75 14.5039 13.8693 14.5039 15.25C14.5039 15.4439 14.4818 15.6326 14.4401 15.8138C14.6213 15.7721 14.81 15.75 15.0039 15.75C16.3846 15.75 17.5039 16.8693 17.5039 18.25C17.5039 18.4439 17.4818 18.6326 17.4401 18.8138C17.6213 18.7721 17.81 18.75 18.0039 18.75C19.088 18.75 20.011 19.4401 20.3575 20.405C21.7976 19.4688 22.75 17.8456 22.75 16C22.75 13.3541 20.7927 11.1653 18.2469 10.8027C18.1428 7.44224 15.3858 4.75 12 4.75C11.9067 4.75 11.8139 4.75204 11.7216 4.75609C11.6072 4.24066 11.4145 3.73438 11.1397 3.25455C10.4229 2.00293 9.27509 1.152 7.99255 0.78665C7.68421 0.698817 7.35231 0.771121 7.10866 0.9792C6.86501 1.18728 6.74204 1.50343 6.7812 1.82114C6.89893 2.77626 6.45189 3.74549 5.58504 4.25004C4.72017 4.75344 3.67359 4.65753 2.91993 4.08326C2.66429 3.88846 2.32768 3.83502 2.02412 3.94102C1.72056 4.04703 1.49072 4.29828 1.41243 4.60968C1.08672 5.9053 1.242 7.32856 1.95853 8.57974ZM3.185 6.31676C3.23715 6.76732 3.37942 7.21446 3.61864 7.63218C4.14484 8.551 5.02726 9.12892 5.98611 9.29297C6.53241 7.36479 7.98051 5.81594 9.84591 5.13109C9.77166 4.81354 9.65063 4.50083 9.47955 4.20211C9.24355 3.79001 8.93636 3.44692 8.58292 3.17891C8.30957 4.28356 7.60885 5.28195 6.5482 5.8993C5.48709 6.51692 4.27537 6.63082 3.185 6.31676Z',
} as const;

export const IconMoonCloudHailstoneStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-hailstone-stroke-rounded IconMoonCloudHailstoneStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudHailstoneDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-hailstone-duotone-rounded IconMoonCloudHailstoneDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudHailstoneTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-hailstone-twotone-rounded IconMoonCloudHailstoneTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudHailstoneSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-hailstone-solid-rounded IconMoonCloudHailstoneSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudHailstoneBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-hailstone-bulk-rounded IconMoonCloudHailstoneBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudHailstoneStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-hailstone-stroke-sharp IconMoonCloudHailstoneStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudHailstoneSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-hailstone-solid-sharp IconMoonCloudHailstoneSolidSharp"
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoonCloudHailstone: TheIconSelfPack = {
  name: 'MoonCloudHailstone',
  StrokeRounded: IconMoonCloudHailstoneStrokeRounded,
  DuotoneRounded: IconMoonCloudHailstoneDuotoneRounded,
  TwotoneRounded: IconMoonCloudHailstoneTwotoneRounded,
  SolidRounded: IconMoonCloudHailstoneSolidRounded,
  BulkRounded: IconMoonCloudHailstoneBulkRounded,
  StrokeSharp: IconMoonCloudHailstoneStrokeSharp,
  SolidSharp: IconMoonCloudHailstoneSolidSharp,
};