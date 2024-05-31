import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.9978 17.9974L12.0022 18.0052M15.9955 16L16 16.0078M8 16L8.00449 16.0078M15.9955 19.9948L16 20.0026M8 19.9948L8.00449 20.0026M11.9978 21.9922L12.0022 22',
  d2: 'M17.4776 10.9867C17.485 10.9867 17.4925 10.9867 17.5 10.9867C19.9853 10.9867 22 12.9969 22 15.4767C22 17.2396 20.9817 18.7653 19.5 19.5M17.4776 10.9867C17.4924 10.8224 17.5 10.656 17.5 10.4878C17.5 7.45697 15.0376 5 12 5C9.12324 5 6.76233 7.20372 6.52042 10.0116M17.4776 10.9867C17.395 11.9014 16.9769 12.6883 16.5 13.4181M6.52042 10.0116C3.98398 10.2524 2 12.3839 2 14.9778C2 16.8244 3.0055 18.4367 4.5 19.2993M6.52042 10.0116C6.67826 9.99657 6.83823 9.98891 7 9.98891C8.12582 9.98891 9.16474 10.3602 10.0005 10.9867',
  d3: 'M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M17.125 16C17.125 16.5523 16.6773 17 16.125 17C15.5727 17 15.125 16.5523 15.125 16C15.125 15.4477 15.5727 15 16.125 15C16.6773 15 17.125 15.4477 17.125 16Z',
  d6: 'M9.125 16C9.125 16.5523 8.67728 17 8.125 17C7.57272 17 7.125 16.5523 7.125 16C7.125 15.4477 7.57272 15 8.125 15C8.67728 15 9.125 15.4477 9.125 16Z',
  d7: 'M9.125 20C9.125 20.5523 8.67728 21 8.125 21C7.57272 21 7.125 20.5523 7.125 20C7.125 19.4477 7.57272 19 8.125 19C8.67728 19 9.125 19.4477 9.125 20Z',
  d8: 'M13.125 18C13.125 18.5523 12.6773 19 12.125 19C11.5727 19 11.125 18.5523 11.125 18C11.125 17.4477 11.5727 17 12.125 17C12.6773 17 13.125 17.4477 13.125 18Z',
  d9: 'M17.125 20C17.125 20.5523 16.6773 21 16.125 21C15.5727 21 15.125 20.5523 15.125 20C15.125 19.4477 15.5727 19 16.125 19C16.6773 19 17.125 19.4477 17.125 20Z',
  d10: 'M13.125 22C13.125 22.5523 12.6773 23 12.125 23C11.5727 23 11.125 22.5523 11.125 22C11.125 21.4477 11.5727 21 12.125 21C12.6773 21 13.125 21.4477 13.125 22Z',
  d11: 'M6.06431 8.96783C6.01491 9.16384 5.9902 9.26184 5.93372 9.3197C5.87724 9.37755 5.77924 9.40476 5.58325 9.45919C3.15606 10.1332 1.375 12.3583 1.375 15C1.375 17.4786 2.94329 19.5909 5.14171 20.3988C5.20953 20.4237 5.24344 20.4362 5.26634 20.4408C5.44621 20.4766 5.59301 20.3742 5.62139 20.193C5.625 20.1699 5.625 20.1133 5.625 20C5.625 19.4692 5.79042 18.977 6.07252 18.5723C6.29462 18.2536 6.40568 18.0942 6.40568 18C6.40568 17.9058 6.29462 17.7464 6.07252 17.4277C5.79042 17.023 5.625 16.5308 5.625 16C5.625 14.6193 6.74429 13.5 8.125 13.5C9.08878 13.5 9.92517 14.0454 10.3424 14.8443C10.5985 15.3346 10.7265 15.5798 10.8133 15.6232C10.9001 15.6666 11.173 15.622 11.7188 15.5328C11.851 15.5112 11.9867 15.5 12.125 15.5C12.2633 15.5 12.399 15.5112 12.5312 15.5328C13.077 15.622 13.3499 15.6666 13.4367 15.6232C13.5235 15.5798 13.6515 15.3346 13.9076 14.8443C14.3248 14.0454 15.1612 13.5 16.125 13.5C17.5057 13.5 18.625 14.6193 18.625 16C18.625 16.5308 18.4596 17.023 18.1775 17.4277C17.9554 17.7464 17.8443 17.9058 17.8443 18C17.8443 18.0942 17.9554 18.2536 18.1775 18.5723C18.4596 18.977 18.625 19.4692 18.625 20C18.625 20.2285 18.625 20.3428 18.6492 20.3993C18.6955 20.5076 18.7775 20.5679 18.8947 20.5798C18.9559 20.586 19.0353 20.5612 19.1941 20.5115C21.3271 19.8443 22.875 17.8529 22.875 15.5C22.875 13.0285 21.1672 10.9559 18.8673 10.3979C18.6239 10.3388 18.5022 10.3093 18.4397 10.2383C18.3772 10.1673 18.3635 10.0446 18.3362 9.79924C17.9878 6.67731 15.3399 4.25 12.125 4.25C9.20171 4.25 6.74772 6.25653 6.06431 8.96783Z',
  d12: 'M3.5346 7.46474C3.34879 7.13975 3.22813 6.79497 3.16869 6.4455C4.16672 6.68952 5.25676 6.56239 6.2176 6.0022C7.17738 5.44263 7.82838 4.55613 8.11629 3.56619C8.37869 3.78948 8.60811 4.06219 8.79034 4.38091C8.91301 4.59547 9.00697 4.81795 9.07377 5.04419C9.65061 4.72089 10.284 4.48644 10.9553 4.35935C10.8484 4.02729 10.7059 3.7018 10.5266 3.38824C9.84536 2.19671 8.75418 1.38631 7.53487 1.0384C7.2124 0.946381 6.86527 1.02213 6.61044 1.24011C6.35561 1.4581 6.22701 1.78931 6.26797 2.12214C6.37223 2.96944 5.97606 3.82792 5.21026 4.27441C4.44652 4.71968 3.52218 4.63524 2.85599 4.12676C2.58862 3.92269 2.23658 3.8667 1.91909 3.97775C1.60161 4.08881 1.36122 4.35202 1.27934 4.67825C0.969854 5.9114 1.11737 7.26636 1.79834 8.45742C2.27309 9.2878 2.94581 9.9323 3.72229 10.3646C4.27544 9.95797 4.90405 9.6479 5.58325 9.45929C5.77924 9.40487 5.87724 9.37765 5.93372 9.3198C5.98723 9.26499 6.01222 9.17414 6.05671 8.99805C5.04889 8.96131 4.07904 8.41702 3.5346 7.46474Z',
  d13: 'M1.95853 8.57974C2.46175 9.45844 3.17654 10.139 4.00113 10.5931C2.35088 11.6037 1.25 13.4231 1.25 15.5C1.25 18.2087 3.12292 20.4799 5.64437 21.0893C5.5509 20.827 5.5 20.5444 5.5 20.25C5.5 19.4322 5.89267 18.7061 6.49976 18.25C5.89267 17.7939 5.5 17.0678 5.5 16.25C5.5 14.8693 6.61929 13.75 8 13.75C9.38065 13.75 10.4999 14.8692 10.5 16.2498C10.9178 15.936 11.4372 15.75 12 15.75C12.5628 15.75 13.0822 15.936 13.5 16.2498C13.5001 14.8692 14.6193 13.75 16 13.75C17.3807 13.75 18.5 14.8693 18.5 16.25C18.5 17.0678 18.1073 17.7939 17.5002 18.25C18.1073 18.7061 18.5 19.4322 18.5 20.25C18.5 20.5812 18.4356 20.8973 18.3187 21.1865C20.8293 20.7934 22.75 18.621 22.75 16C22.75 13.3541 20.7927 11.1653 18.2469 10.8027C18.1428 7.44224 15.3858 4.75 12 4.75C11.9067 4.75 11.8139 4.75204 11.7216 4.75609C11.6072 4.24066 11.4145 3.73438 11.1397 3.25455C10.4229 2.00293 9.27509 1.152 7.99255 0.78665C7.68421 0.698817 7.35231 0.771121 7.10866 0.9792C6.86501 1.18728 6.74204 1.50343 6.7812 1.82114C6.89893 2.77626 6.45189 3.74549 5.58504 4.25004C4.72017 4.75344 3.67359 4.65753 2.91993 4.08326C2.66429 3.88846 2.32768 3.83502 2.02412 3.94102C1.72056 4.04703 1.49072 4.29828 1.41243 4.60968C1.08672 5.9053 1.242 7.32856 1.95853 8.57974ZM3.185 6.31676C3.23715 6.76732 3.37942 7.21446 3.61864 7.63218C4.14484 8.551 5.02726 9.12892 5.98611 9.29297C6.53241 7.36479 7.98051 5.81594 9.84591 5.13109C9.77166 4.81354 9.65063 4.50083 9.47955 4.20211C9.24355 3.79001 8.93636 3.44692 8.58292 3.17891C8.30957 4.28356 7.60885 5.28195 6.5482 5.8993C5.48709 6.51692 4.27537 6.63082 3.185 6.31676Z',
  d14: 'M17 16.25C17 16.8023 16.5523 17.25 16 17.25C15.4477 17.25 15 16.8023 15 16.25C15 15.6977 15.4477 15.25 16 15.25C16.5523 15.25 17 15.6977 17 16.25Z',
  d15: 'M9 16.25C9 16.8023 8.55228 17.25 8 17.25C7.44772 17.25 7 16.8023 7 16.25C7 15.6977 7.44772 15.25 8 15.25C8.55228 15.25 9 15.6977 9 16.25Z',
  d16: 'M9 20.25C9 20.8023 8.55228 21.25 8 21.25C7.44772 21.25 7 20.8023 7 20.25C7 19.6977 7.44772 19.25 8 19.25C8.55228 19.25 9 19.6977 9 20.25Z',
  d17: 'M13 18.25C13 18.8023 12.5523 19.25 12 19.25C11.4477 19.25 11 18.8023 11 18.25C11 17.6977 11.4477 17.25 12 17.25C12.5523 17.25 13 17.6977 13 18.25Z',
  d18: 'M17 20.25C17 20.8023 16.5523 21.25 16 21.25C15.4477 21.25 15 20.8023 15 20.25C15 19.6977 15.4477 19.25 16 19.25C16.5523 19.25 17 19.6977 17 20.25Z',
  d19: 'M13 22.25C13 22.8023 12.5523 23.25 12 23.25C11.4477 23.25 11 22.8023 11 22.25C11 21.6977 11.4477 21.25 12 21.25C12.5523 21.25 13 21.6977 13 22.25Z',
} as const;

export const IconMoonCloudSnowStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-snow-stroke-rounded IconMoonCloudSnowStrokeRounded"
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

export const IconMoonCloudSnowDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-snow-duotone-rounded IconMoonCloudSnowDuotoneRounded"
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

export const IconMoonCloudSnowTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-snow-twotone-rounded IconMoonCloudSnowTwotoneRounded"
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

export const IconMoonCloudSnowSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-snow-solid-rounded IconMoonCloudSnowSolidRounded"
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

export const IconMoonCloudSnowBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-snow-bulk-rounded IconMoonCloudSnowBulkRounded"
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

export const IconMoonCloudSnowStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-snow-stroke-sharp IconMoonCloudSnowStrokeSharp"
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

export const IconMoonCloudSnowSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-snow-solid-sharp IconMoonCloudSnowSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoonCloudSnow: TheIconSelfPack = {
  name: 'MoonCloudSnow',
  StrokeRounded: IconMoonCloudSnowStrokeRounded,
  DuotoneRounded: IconMoonCloudSnowDuotoneRounded,
  TwotoneRounded: IconMoonCloudSnowTwotoneRounded,
  SolidRounded: IconMoonCloudSnowSolidRounded,
  BulkRounded: IconMoonCloudSnowBulkRounded,
  StrokeSharp: IconMoonCloudSnowStrokeSharp,
  SolidSharp: IconMoonCloudSnowSolidSharp,
};