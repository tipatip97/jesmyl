import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.0034 4.49902H21.0024M15.0034 4.49902C15.0034 3.79906 16.9974 2.49134 17.503 2M15.0034 4.49902C15.0034 5.19898 16.9974 6.5067 17.503 6.99804',
  d2: 'M16.8899 21.9882C16.8382 20.0749 16.9671 19.8446 17.1038 19.419C17.2405 18.9933 18.1967 17.4585 18.535 16.3619C19.6295 12.814 18.6094 12.0594 17.2493 11.0533C15.741 9.93751 12.8962 9.37244 11.4853 9.49477V3.74357C11.4853 2.78062 10.7045 2 9.74133 2C8.77816 2 7.99736 2.78062 7.99736 3.74357V14.0031L5.93753 11.8236C5.29802 11.1302 4.27027 11.0599 3.56885 11.6907C2.90415 12.2885 2.80714 13.2952 3.34548 14.0089L4.63762 15.7218M7.86803 22L7.8485 20.9496C7.89144 19.7183 6.99559 18.9149 5.8272 17.3087C5.74302 17.193 5.66111 17.0811 5.58135 16.9729M5.58135 16.9729C5.22735 16.4924 4.91587 16.0831 4.63762 15.7218M5.58135 16.9729L6.75058 18.5229M5.58135 16.9729L4.63762 15.7218M4.63762 15.7218C4.06634 14.9801 3.63509 14.441 3.26331 13.9055',
  d3: 'M17.9985 17.6892C18.7056 16.2125 19.6732 13.3226 18.3211 11.9618C16.1895 9.81667 13.2082 9.42404 11.5 9.5V3.75C11.5 2.7835 10.7165 2 9.75 2C8.7835 2 8 2.7835 8 3.75V14L5.78341 11.6713C5.05938 11.0311 3.96519 11.1372 3.36948 11.9053C2.87385 12.5444 2.87719 13.4534 3.3775 14.0886L6.65864 18.4236C7.23025 19.1788 7.51608 19.5565 7.6732 19.9973C7.68714 20.0364 7.70028 20.0758 7.71263 20.1155C7.85181 20.5628 7.85181 21.0418 7.85181 22H16.8919V20.382C16.8919 19.4564 17.6159 18.488 17.9985 17.6892Z',
  d4: 'M15 4.5H21M15 4.5C15 3.79977 16.9943 2.49153 17.5 2M15 4.5C15 5.20023 16.9943 6.50847 17.5 7',
  d5: 'M16.8928 21.9882C16.8411 20.0749 16.97 19.8446 17.1067 19.419C17.2434 18.9933 18.1996 17.4585 18.5379 16.3619C19.6324 12.814 18.6123 12.0594 17.2522 11.0533C15.7439 9.93751 12.8991 9.37244 11.4882 9.49477V3.74357C11.4882 2.78062 10.7074 2 9.74426 2C8.78109 2 8.00029 2.78062 8.00029 3.74357V14.0031L5.94046 11.8236C5.30095 11.1302 4.2732 11.0599 3.57178 11.6907C2.90708 12.2885 2.81007 13.2952 3.34841 14.0089L4.64055 15.7218M4.64055 15.7218C4.9188 16.0831 5.23028 16.4924 5.58428 16.9729M4.64055 15.7218L5.58428 16.9729M4.64055 15.7218C4.06927 14.9801 3.63802 14.441 3.26624 13.9055M7.87096 22L7.85143 20.9496C7.89437 19.7183 6.99852 18.9149 5.83013 17.3087C5.74595 17.193 5.66404 17.0811 5.58428 16.9729M5.58428 16.9729L6.75351 18.5229',
  d6: 'M16.8919 21.9882C16.8402 20.0749 16.9691 19.8446 17.1058 19.419C17.2425 18.9933 18.1987 17.4585 18.537 16.3619C19.6315 12.814 18.6114 12.0594 17.2513 11.0533C15.743 9.93751 12.8982 9.37244 11.4873 9.49477V3.74357C11.4873 2.78062 10.7065 2 9.74328 2C8.78011 2 7.99931 2.78062 7.99931 3.74357V14.0031L5.93948 11.8236C5.29997 11.1302 4.27222 11.0599 3.5708 11.6907C2.9061 12.2885 2.80909 13.2952 3.34743 14.0089L4.63957 15.7218M4.63957 15.7218C4.91782 16.0831 5.2293 16.4924 5.5833 16.9729M4.63957 15.7218L5.5833 16.9729M4.63957 15.7218C4.06829 14.9801 3.63704 14.441 3.26526 13.9055M7.86998 22L7.85045 20.9496C7.89339 19.7183 6.99754 18.9149 5.82915 17.3087C5.74497 17.193 5.66306 17.0811 5.5833 16.9729M5.5833 16.9729L6.75253 18.5229',
  d7: 'M7.125 3.75C7.125 2.36929 8.24429 1.25 9.625 1.25C11.0057 1.25 12.125 2.36929 12.125 3.75V8.74751C13.9889 8.81064 16.694 9.38616 18.7281 11.4332C19.664 12.3751 19.7195 13.7529 19.5487 14.8931C19.3725 16.0699 18.9221 17.2359 18.5499 18.0131C18.4306 18.2264 17.9492 19.1202 17.8475 19.3235C17.6311 19.7563 17.5169 20.1001 17.5169 20.382V20.382C17.5169 20.6473 17.5169 20.918 17.4998 21.1214C17.4813 21.3409 17.439 21.5809 17.3147 21.8165C17.1502 22.1284 16.8953 22.3833 16.5834 22.5479C16.3477 22.6721 16.1078 22.7145 15.8883 22.7329C15.6848 22.75 15.4412 22.75 15.1759 22.75H9.59141H9.5914C9.28368 22.75 9.00019 22.7501 8.76433 22.7266C8.50772 22.7012 8.04462 22.6003 7.7825 22.3382C7.5125 22.1107 7.36334 21.7789 7.2574 21.5062C7.14427 21.2149 7.02429 20.8294 6.87995 20.3655L6.87994 20.3655C6.77049 20.0584 6.5346 19.6676 5.93562 18.8763L2.65847 14.5465C1.9498 13.641 1.94679 12.3548 2.65182 11.4457C3.51024 10.3388 5.10327 10.1793 6.1552 11.1094L7.125 12.1242V3.75Z',
  d8: 'M20.875 5.50586C21.4273 5.50586 21.875 5.05814 21.875 4.50586C21.875 3.95357 21.4273 3.50586 20.875 3.50586L18.375 3.50586L18.375 2.9116C18.3751 2.73596 18.3753 2.52031 18.3532 2.34387L18.3528 2.34053C18.337 2.21408 18.2652 1.63804 17.6996 1.36368C17.1327 1.08872 16.6326 1.39065 16.5244 1.45597L16.0559 1.79511C15.6801 2.08975 15.1656 2.49545 14.7746 2.87588C14.5795 3.06571 14.3783 3.28297 14.2194 3.51388C14.0782 3.71914 13.875 4.06933 13.875 4.5C13.875 4.93067 14.0782 5.28086 14.2194 5.48612C14.3783 5.71703 14.5795 5.93429 14.7746 6.12412C15.1656 6.50455 15.6801 6.91025 16.0559 7.20488L16.5244 7.54403C16.6326 7.60935 17.1328 7.91128 17.6996 7.63632C18.2652 7.36196 18.337 6.78592 18.3528 6.65947L18.3532 6.65613C18.3753 6.47969 18.3751 6.26403 18.375 6.0884L18.375 5.50586L20.875 5.50586Z',
  d9: 'M21 4.5H15.7146M17.5 2L15 4.5L17.5 7',
  d10: 'M11.5062 9.52066V3.76942C11.5062 2.7922 10.7167 2 9.74284 2C8.76897 2 7.97949 2.7922 7.97949 3.76942V12.4367M11.5062 9.52066C12.9874 9.46863 14.1152 9.60377 15.6929 10.2551C16.9012 10.7538 18.1795 11.3967 18.717 12.5916C19.26 13.7986 18.9776 15.2365 18.2441 17.0933L16.8568 20.0417V21.9995M11.5062 9.52066V10.2618M7.87531 22V20.0664L3.40208 14.0638C3.06649 13.6135 2.88711 13.0277 3.07789 12.4989C3.09407 12.4541 3.11166 12.4096 3.13096 12.3653C3.36777 11.8221 3.84758 11.357 4.43158 11.2667C4.5783 11.244 4.72836 11.2451 4.88822 11.2672C5.3546 11.3315 5.74602 11.6338 6.06753 11.9789L7.98332 14.035V11.6955',
  d11: 'M7.10181 20.2492L2.7835 14.5466C2.0748 13.641 2.07178 12.3548 2.77682 11.4457C3.63524 10.3388 5.22827 10.1793 6.2802 11.1094L6.30439 11.1308L7.25 12.1242V3.75C7.25 2.36929 8.36929 1.25 9.75 1.25C11.1307 1.25 12.25 2.36929 12.25 3.75V8.74751C14.1139 8.81064 16.819 9.38616 18.8531 11.4332C19.789 12.3751 19.8445 13.7529 19.6737 14.8931C19.4975 16.0699 19.0471 17.2359 18.6749 18.0131C18.4835 18.4127 18.2068 18.9899 17.978 19.4671L17.6419 20.1679V22.75H7.10181V20.2492Z',
  d12: 'M18.1644 5.45711L18.9573 6.25L17.543 7.66421L14.3359 4.45711L17.543 1.25L18.9573 2.66421L18.1644 3.45711L21.7502 3.45711V5.45711H18.1644Z',
} as const;

export const IconSwipeLeft01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-01-stroke-rounded IconSwipeLeft01StrokeRounded"
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

export const IconSwipeLeft01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-01-duotone-rounded IconSwipeLeft01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconSwipeLeft01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-01-twotone-rounded IconSwipeLeft01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconSwipeLeft01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-01-solid-rounded IconSwipeLeft01SolidRounded"
    >
      <path 
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

export const IconSwipeLeft01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-01-bulk-rounded IconSwipeLeft01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSwipeLeft01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-01-stroke-sharp IconSwipeLeft01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeLeft01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-01-solid-sharp IconSwipeLeft01SolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeLeft01: TheIconSelfPack = {
  name: 'SwipeLeft01',
  StrokeRounded: IconSwipeLeft01StrokeRounded,
  DuotoneRounded: IconSwipeLeft01DuotoneRounded,
  TwotoneRounded: IconSwipeLeft01TwotoneRounded,
  SolidRounded: IconSwipeLeft01SolidRounded,
  BulkRounded: IconSwipeLeft01BulkRounded,
  StrokeSharp: IconSwipeLeft01StrokeSharp,
  SolidSharp: IconSwipeLeft01SolidSharp,
};