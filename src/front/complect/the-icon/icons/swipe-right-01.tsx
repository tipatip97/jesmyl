import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21.0005 4.49905H15.0005M21.0005 4.49905C21.0005 3.79909 19.0062 2.49134 18.5005 2M21.0005 4.49905C21.0005 5.19901 19.0062 6.50675 18.5005 6.9981',
  d2: 'M16.8937 21.9884C16.842 20.0751 16.9709 19.8448 17.1076 19.4191C17.2443 18.9935 18.2006 17.4587 18.539 16.3621C19.6337 12.8141 18.6134 12.0595 17.2531 11.0534C15.7446 9.93759 12.8993 9.37252 11.4881 9.49486V3.74359C11.4881 2.78063 10.7072 2 9.7439 2C8.78057 2 7.99965 2.78063 7.99965 3.74359V14.0032L5.93948 11.8238C5.29986 11.1303 4.27194 11.06 3.57041 11.6908C2.9056 12.2886 2.80858 13.2953 3.347 14.009L4.63935 15.722M7.87029 22.0002L7.85076 20.9498C7.8937 19.7185 6.99771 18.9151 5.82913 17.3089C5.74494 17.1931 5.66301 17.0813 5.58324 16.973M5.58324 16.973C5.22918 16.4926 4.91765 16.0832 4.63935 15.722M5.58324 16.973L6.75266 18.5231M5.58324 16.973L4.63935 15.722M4.63935 15.722C4.06798 14.9802 3.63666 14.4412 3.26482 13.9056',
  d3: 'M17.9985 17.6892C18.7056 16.2125 19.6732 13.3226 18.3211 11.9618C16.1895 9.81667 13.2082 9.42404 11.5 9.5V3.75C11.5 2.7835 10.7165 2 9.75 2C8.7835 2 8 2.7835 8 3.75V14L5.78341 11.6713C5.05938 11.0311 3.96519 11.1372 3.36948 11.9053C2.87385 12.5444 2.87719 13.4534 3.3775 14.0886L6.65864 18.4236C7.23025 19.1788 7.51608 19.5565 7.6732 19.9973C7.68714 20.0364 7.70028 20.0758 7.71263 20.1155C7.85181 20.5628 7.85181 21.0418 7.85181 22H16.8919V20.382C16.8919 19.4564 17.6159 18.488 17.9985 17.6892Z',
  d4: 'M21 4.5H15M21 4.5C21 3.79977 19.0057 2.49153 18.5 2M21 4.5C21 5.20023 19.0057 6.50847 18.5 7',
  d5: 'M16.8942 21.9884C16.8425 20.0751 16.9714 19.8448 17.1081 19.4191C17.2448 18.9935 18.2011 17.4587 18.5395 16.3621C19.6342 12.8141 18.6139 12.0595 17.2536 11.0534C15.7451 9.93759 12.8998 9.37252 11.4886 9.49486V3.74359C11.4886 2.78063 10.7077 2 9.74439 2C8.78106 2 8.00014 2.78063 8.00014 3.74359V14.0032L5.93997 11.8238C5.30035 11.1303 4.27243 11.06 3.5709 11.6908C2.90609 12.2886 2.80907 13.2953 3.34749 14.009L4.63984 15.722M4.63984 15.722C4.91814 16.0832 5.22967 16.4926 5.58373 16.973M4.63984 15.722L5.58373 16.973M4.63984 15.722C4.06847 14.9802 3.63715 14.4412 3.26531 13.9056M7.87078 22.0002L7.85125 20.9498C7.89419 19.7185 6.9982 18.9151 5.82962 17.3089C5.74543 17.1931 5.6635 17.0813 5.58373 16.973M5.58373 16.973L6.75315 18.5231',
  d6: 'M21.0005 4.5H15.0005M21.0005 4.5C21.0005 3.79977 19.0062 2.49153 18.5005 2M21.0005 4.5C21.0005 5.20023 19.0062 6.50847 18.5005 7',
  d7: 'M16.8937 21.9884C16.842 20.0751 16.9709 19.8448 17.1076 19.4191C17.2443 18.9935 18.2006 17.4587 18.539 16.3621C19.6337 12.8141 18.6134 12.0595 17.2531 11.0534C15.7446 9.93759 12.8993 9.37252 11.4881 9.49486V3.74359C11.4881 2.78063 10.7072 2 9.7439 2C8.78057 2 7.99965 2.78063 7.99965 3.74359V14.0032L5.93948 11.8238C5.29986 11.1303 4.27194 11.06 3.57041 11.6908C2.9056 12.2886 2.80858 13.2953 3.347 14.009L4.63935 15.722M4.63935 15.722C4.91765 16.0832 5.22918 16.4926 5.58324 16.973M4.63935 15.722L5.58324 16.973M4.63935 15.722C4.06798 14.9802 3.63666 14.4412 3.26482 13.9056M7.87029 22.0002L7.85076 20.9498C7.8937 19.7185 6.99771 18.9151 5.82913 17.3089C5.74494 17.1931 5.66301 17.0813 5.58324 16.973M5.58324 16.973L6.75266 18.5231',
  d8: 'M7.125 3.75C7.125 2.36929 8.24429 1.25 9.625 1.25C11.0057 1.25 12.125 2.36929 12.125 3.75V8.74751C13.9889 8.81064 16.694 9.38616 18.7281 11.4332C19.664 12.3751 19.7195 13.7529 19.5487 14.8931C19.3725 16.0699 18.9221 17.2359 18.5499 18.0131C18.4306 18.2264 17.9492 19.1202 17.8475 19.3235C17.6311 19.7563 17.5169 20.1001 17.5169 20.382V20.382C17.5169 20.6473 17.5169 20.918 17.4998 21.1214C17.4813 21.3409 17.439 21.5809 17.3147 21.8165C17.1502 22.1284 16.8953 22.3833 16.5834 22.5479C16.3477 22.6721 16.1078 22.7145 15.8883 22.7329C15.6848 22.75 15.4412 22.75 15.1759 22.75H9.59141H9.5914C9.28368 22.75 9.00019 22.7501 8.76433 22.7266C8.50772 22.7012 8.04462 22.6003 7.7825 22.3382C7.5125 22.1107 7.36334 21.7789 7.2574 21.5062C7.14427 21.2149 7.02429 20.8294 6.87995 20.3655L6.87994 20.3655C6.77049 20.0584 6.5346 19.6676 5.93562 18.8763L2.65847 14.5465C1.9498 13.641 1.94679 12.3548 2.65182 11.4457C3.51024 10.3388 5.10327 10.1793 6.1552 11.1094L7.125 12.1242V3.75Z',
  d9: 'M14.875 5.50586C14.3227 5.50586 13.875 5.05814 13.875 4.50586C13.875 3.95357 14.3227 3.50586 14.875 3.50586L17.375 3.50586L17.375 2.9116C17.3749 2.73596 17.3747 2.52031 17.3968 2.34387L17.3972 2.34053C17.413 2.21408 17.4848 1.63804 18.0504 1.36368C18.6173 1.08872 19.1174 1.39065 19.2256 1.45597L19.6941 1.79511C20.0699 2.08975 20.5844 2.49545 20.9754 2.87588C21.1705 3.06571 21.3717 3.28297 21.5306 3.51388C21.6718 3.71914 21.875 4.06933 21.875 4.5C21.875 4.93067 21.6718 5.28086 21.5306 5.48612C21.3717 5.71703 21.1705 5.93429 20.9754 6.12412C20.5844 6.50455 20.0699 6.91025 19.6941 7.20488L19.2256 7.54403C19.1174 7.60935 18.6172 7.91128 18.0504 7.63632C17.4848 7.36196 17.413 6.78592 17.3972 6.65947L17.3968 6.65613C17.3747 6.47969 17.3749 6.26403 17.375 6.0884L17.375 5.50586L14.875 5.50586Z',
  d10: 'M11.5062 9.52066V3.76942C11.5062 2.7922 10.7167 2 9.74284 2C8.76897 2 7.97949 2.7922 7.97949 3.76942V12.4367M11.5062 9.52066C12.9874 9.46863 14.1152 9.60377 15.6929 10.2551C16.9012 10.7538 18.1795 11.3967 18.717 12.5916C19.26 13.7986 18.9776 15.2365 18.2441 17.0933L16.8568 20.0417V21.9995M11.5062 9.52066V10.2618M7.87531 22V20.0664L3.40208 14.0638C3.06649 13.6135 2.88711 13.0277 3.07789 12.4989C3.09407 12.4541 3.11166 12.4096 3.13096 12.3653C3.36777 11.8221 3.84758 11.357 4.43158 11.2667C4.5783 11.244 4.72836 11.2451 4.88822 11.2672C5.3546 11.3315 5.74602 11.6338 6.06753 11.9789L7.98332 14.035V11.6955',
  d11: 'M15 4.5H20.444M18.5 2L21 4.5L18.5 7',
  d12: 'M7.10181 20.2492L2.7835 14.5466C2.0748 13.641 2.07178 12.3548 2.77682 11.4457C3.63524 10.3388 5.22827 10.1793 6.2802 11.1094L6.30439 11.1308L7.25 12.1242V3.75C7.25 2.36929 8.36929 1.25 9.75 1.25C11.1307 1.25 12.25 2.36929 12.25 3.75V8.74751C14.1139 8.81064 16.819 9.38616 18.8531 11.4332C19.789 12.3751 19.8445 13.7529 19.6737 14.8931C19.4975 16.0699 19.0471 17.2359 18.6749 18.0131C18.4835 18.4127 18.2068 18.9899 17.978 19.4671L17.6419 20.1679V22.75H7.10181V20.2492Z',
  d13: 'M17.9227 5.45711L17.1298 6.25L18.544 7.66421L21.7511 4.45711L18.544 1.25L17.1298 2.66421L17.9227 3.45711L14.3369 3.45711V5.45711H17.9227Z',
} as const;

export const IconSwipeRight01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-01-stroke-rounded IconSwipeRight01StrokeRounded"
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

export const IconSwipeRight01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-01-duotone-rounded IconSwipeRight01DuotoneRounded"
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

export const IconSwipeRight01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-01-twotone-rounded IconSwipeRight01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSwipeRight01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-01-solid-rounded IconSwipeRight01SolidRounded"
    >
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

export const IconSwipeRight01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-01-bulk-rounded IconSwipeRight01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSwipeRight01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-01-stroke-sharp IconSwipeRight01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconSwipeRight01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-01-solid-sharp IconSwipeRight01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeRight01: TheIconSelfPack = {
  name: 'SwipeRight01',
  StrokeRounded: IconSwipeRight01StrokeRounded,
  DuotoneRounded: IconSwipeRight01DuotoneRounded,
  TwotoneRounded: IconSwipeRight01TwotoneRounded,
  SolidRounded: IconSwipeRight01SolidRounded,
  BulkRounded: IconSwipeRight01BulkRounded,
  StrokeSharp: IconSwipeRight01StrokeSharp,
  SolidSharp: IconSwipeRight01SolidSharp,
};