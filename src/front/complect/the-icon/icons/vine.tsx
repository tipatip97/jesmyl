import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.04261 4.41495C2.7122 8.99913 4.26712 17.1284 8.97309 21.0871C10.406 22.2925 11.9014 22.3165 13.3266 21.0857C15.6727 19.0596 17.3041 15.9398 18.2214 14.2938C18.2214 14.2938 19.3849 14.6873 20.3522 14.7846C20.931 14.8427 21.4613 11.7387 20.3517 11.7315C17.4157 11.7122 14.1381 11.4181 13.6775 8.14692C13.1726 4.56122 17.2116 5.07346 16.7068 8.19571C17.7165 9.17141 19.7361 9.17141 19.7361 9.17141C20.7458 6.09795 18.7263 2 15.697 2C11.6579 2 10.1433 4.95167 10.1433 7.12244C10.1433 12.7571 14.6872 13.7816 14.6872 13.7816C13.9496 15.6526 12.6725 16.9898 11.8409 17.7649C11.2705 18.2965 11.0258 18.3051 10.5066 17.7152C7.16109 13.9145 6.21504 7.99135 6.55256 4.51754C6.62801 3.74099 3.10939 3.48846 3.04261 4.41495Z',
  d2: 'M3.04261 4.41495C2.7122 8.99913 4.26712 17.1284 8.9731 21.0871C10.406 22.2925 11.9014 22.3165 13.3266 21.0857C15.6727 19.0596 17.3041 15.9398 18.2214 14.2938C18.2214 14.2938 19.3849 14.6873 20.3522 14.7846C20.931 14.8427 21.4613 11.7387 20.3517 11.7315C17.4157 11.7122 14.1381 11.4181 13.6775 8.14692C13.1726 4.56122 17.2116 5.07346 16.7068 8.19571C17.7165 9.17141 19.7361 9.17141 19.7361 9.17141C20.7458 6.09795 18.7263 2 15.697 2C11.6579 2 10.1433 4.95167 10.1433 7.12244C10.1433 12.7571 14.6872 13.7816 14.6872 13.7816C13.9496 15.6526 12.6725 16.9898 11.8409 17.7649C11.2705 18.2965 11.0258 18.3051 10.5066 17.7152C7.16109 13.9145 6.21504 7.99135 6.55256 4.51754C6.62801 3.74099 3.09848 3.63988 3.04261 4.41495Z',
  d3: 'M11 18.1273C10.8528 18.069 10.6985 17.9327 10.5066 17.7148C7.16109 13.9141 6.21504 7.99091 6.55256 4.5171C6.62801 3.74055 3.10939 3.48802 3.04261 4.41451C2.7122 8.99869 4.26712 17.1279 8.9731 21.0867C9.63966 21.6474 10.3197 21.9575 11 21.9995',
  d4: 'M2.04709 3.65644C1.68199 8.69905 3.40013 17.6412 8.60011 21.9958C10.1834 23.3218 11.8358 23.3481 13.4106 21.9943C16.003 19.7656 17.5611 16.8804 18.5746 15.0698L21.1737 15.063C22.1445 15.0698 22.3992 11.7126 21.1732 11.7046C17.929 11.6834 14.3073 11.3599 13.7983 7.76162C13.2701 4.02726 17.2426 4.3336 17.1935 7.29156C17.1885 7.59633 17.1859 7.74871 17.2475 7.86339C17.3091 7.97808 17.3921 8.03116 17.5583 8.13733C18.2539 8.58187 19.1539 8.76335 19.7727 8.83744C20.1009 8.87672 20.2649 8.89636 20.4239 8.78022C20.5828 8.66409 20.6132 8.50574 20.674 8.18904C21.3018 4.91876 19.1508 1 16.0298 1C11.5668 1 9.89312 4.24684 9.89312 6.63468C9.89312 11.4365 12.9582 13.2188 14.3392 13.7781C14.6658 13.9104 14.8292 13.9765 14.8757 14.0986C14.9223 14.2207 14.8537 14.3602 14.7165 14.6392C13.8712 16.3576 12.5895 17.5801 11.7689 18.3414C11.1387 18.9262 10.8683 18.9356 10.2946 18.2868C6.59789 14.106 5.55253 7.59049 5.92548 3.76929C6.00885 2.91509 2.12087 2.63731 2.04709 3.65644Z',
  d5: 'M16.0312 1C11.5682 1 9.89453 4.24684 9.89453 6.63468C9.89453 11.4188 13.001 14.5 18.576 15.0698L21.1751 15.063C22.1459 15.0698 22.4006 11.7126 21.1746 11.7046C17.9304 11.6834 14.3087 11.3599 13.7997 7.76162C13.2715 4.02726 17.2441 4.3336 17.1949 7.29156V7.29157C17.1899 7.59633 17.1873 7.74871 17.2489 7.86339C17.3105 7.97808 17.3936 8.03116 17.5597 8.13733L17.5597 8.13733C18.2553 8.58187 19.1553 8.76335 19.7742 8.83744C20.1023 8.87672 20.2663 8.89636 20.4253 8.78022C20.5842 8.66409 20.6146 8.50574 20.6754 8.18904C21.3032 4.91876 19.1522 1 16.0312 1Z',
  d6: 'M10.543 21.9952C4.79807 18.1518 2.72203 8.9699 3.03222 4.42444C3.03259 4.41904 3.03716 4.41519 3.04257 4.41541L6.5629 4.55521C6.56858 4.55544 6.57293 4.56037 6.57247 4.56603C6.12505 10.1333 9.28015 15.6641 11.0062 17.584C12.7499 16.5505 14.3994 14.5724 14.6949 13.7548C11.0062 12.7374 10.1571 9.30893 10.1807 7.76738C10.0237 5.7476 11.3255 1.89425 15.5211 2.00375C19.4916 2.10738 20.4172 6.9061 19.7598 9.17913C19.7583 9.18451 19.7527 9.18731 19.7473 9.18564L16.7628 8.25202C16.7585 8.25067 16.7556 8.24635 16.7558 8.24185C16.8679 4.89889 13.9539 5.30844 13.715 6.91958C13.1019 11.0545 17.2674 11.7173 20.9872 11.5143C20.9929 11.514 20.9977 11.5186 20.9977 11.5243V14.5645C20.9977 14.5701 20.9932 14.5745 20.9877 14.5745H18.0549C16.1273 18.1623 12.3507 21.0507 10.553 21.9959C10.5498 21.9976 10.546 21.9973 10.543 21.9952Z',
  d7: 'M10.9958 17.5C7.64949 13.6983 6.21187 7.99286 6.54948 4.51817L3.03868 4.41556C2.70819 9.00089 4.49383 17.5 10.5046 22C14.6861 19.6908 17.1377 16.2545 18.0773 14.5563H21.0009L21.0004 11.5024C18.0638 11.4831 14.1368 11.4205 13.6761 8.14847C13.1711 4.56186 17.2112 5.07423 16.7062 8.19727L19.7362 9.17321C20.7462 6.09898 18.7262 2 15.6961 2C11.6561 2 10.1411 4.95241 10.1411 7.12372C10.1411 12.7598 14.6861 13.7846 14.6861 13.7846C13.9483 15.656 10.9958 17.5 10.9958 17.5Z',
} as const;

export const IconVineStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-stroke-rounded IconVineStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVineDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-duotone-rounded IconVineDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconVineTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-twotone-rounded IconVineTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconVineSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-solid-rounded IconVineSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVineBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-bulk-rounded IconVineBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVineStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-stroke-sharp IconVineStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVineSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="vine-solid-sharp IconVineSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVine: TheIconSelfPack = {
  name: 'Vine',
  StrokeRounded: IconVineStrokeRounded,
  DuotoneRounded: IconVineDuotoneRounded,
  TwotoneRounded: IconVineTwotoneRounded,
  SolidRounded: IconVineSolidRounded,
  BulkRounded: IconVineBulkRounded,
  StrokeSharp: IconVineStrokeSharp,
  SolidSharp: IconVineSolidSharp,
};