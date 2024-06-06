import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.0808 2C5.47023 2.9359 2 7.01218 2 11.899C2 17.4776 6.52238 22 12.101 22C16.9878 22 21.0641 18.5298 22 13.9192',
  d2: 'M18.9375 18C19.3216 17.9166 19.6771 17.784 20 17.603M14.6875 17.3406C15.2831 17.6015 15.8576 17.7948 16.4051 17.9218M10.8546 14.9477C11.2681 15.238 11.71 15.5861 12.1403 15.8865M3 13.825C3.32234 13.6675 3.67031 13.4868 4.0625 13.3321M6.45105 13C7.01293 13.0624 7.64301 13.2226 8.35743 13.5232',
  d3: 'M18.5 7C18.5 6.17157 17.8284 5.5 17 5.5C16.1716 5.5 15.5 6.17157 15.5 7C15.5 7.82843 16.1716 8.5 17 8.5C17.8284 8.5 18.5 7.82843 18.5 7Z',
  d4: 'M17 2C19.7059 2 22 4.21814 22 6.90917C22 9.64306 19.6685 11.5616 17.515 12.8662C17.3581 12.9539 17.1806 13 17 13C16.8194 13 16.6419 12.9539 16.485 12.8662C14.3355 11.5489 12 9.65251 12 6.90917C12 4.21814 14.2941 2 17 2Z',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 10.9424 21.8358 9.92309 21.5315 8.96626C20.7428 10.6429 19.0818 11.917 17.515 12.8662C17.3581 12.9539 17.1806 13 17 13C16.8194 13 16.6419 12.9539 16.485 12.8662C14.3355 11.5489 12 9.65251 12 6.90917C12 4.93819 13.2307 3.22089 14.9524 2.44299C14.0192 2.15504 13.0277 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d6: 'M10.3188 3.18519C10.8477 3.07782 11.1895 2.56199 11.0821 2.03305C10.9747 1.50411 10.4589 1.16235 9.92995 1.26972C4.9777 2.27498 1.25 6.65175 1.25 11.9014C1.25 17.8929 6.1071 22.75 12.0986 22.75C17.3482 22.75 21.725 19.0223 22.7303 14.07C22.8376 13.5411 22.4959 13.0253 21.967 12.9179C21.438 12.8105 20.9222 13.1523 20.8148 13.6812C20.5655 14.9092 20.0631 16.0453 19.3644 17.0327C19.332 17.0785 19.2871 17.1141 19.2345 17.1339C19.0927 17.1871 18.9431 17.2312 18.7858 17.2657C17.8771 17.4418 16.9299 17.2892 16.6055 17.1993C16.1083 17.084 15.5109 16.8838 14.9525 16.6392C14.194 16.3529 13.0623 15.6219 12.575 15.2754L12.5698 15.2717C12.3666 15.1299 11.9201 14.7977 11.9155 14.7943C11.7113 14.6422 11.499 14.484 11.2921 14.3386C10.3543 13.6519 9.1392 13.0493 8.6485 12.8322C7.88909 12.5126 7.19972 12.3323 6.56673 12.2585C6.02094 12.1538 5.44083 12.2083 4.97194 12.2961C4.48664 12.387 4.0525 12.5268 3.78339 12.6363C3.7375 12.6544 3.68926 12.6743 3.63946 12.6955C3.45004 12.776 3.23361 12.6547 3.22112 12.4492C3.21011 12.268 3.20453 12.0853 3.20453 11.9014C3.20453 7.59961 6.25948 4.00918 10.3188 3.18519Z',
  d7: 'M17 1.25C13.8964 1.25 11.25 3.78766 11.25 6.90917C11.25 8.51179 11.9368 9.83954 12.8702 10.9142C13.7966 11.9809 14.9932 12.8316 16.0931 13.5056L16.106 13.5135L16.1191 13.5209C16.3884 13.6714 16.6919 13.75 17 13.75C17.3081 13.75 17.6116 13.6714 17.8809 13.5209L17.8924 13.5145L17.9036 13.5077C19.009 12.838 20.206 11.9845 21.1322 10.9145C22.0645 9.83727 22.75 8.50665 22.75 6.90917C22.75 3.78766 20.1036 1.25 17 1.25ZM17 5C18.1046 5 19 5.89543 19 7C19 8.10457 18.1046 9 17 9C15.8954 9 15 8.10457 15 7C15 5.89543 15.8954 5 17 5Z',
  d8: 'M17 1.99994C14.2386 1.99994 12 4.17066 12 6.84837C12 8.37949 12.625 9.57 13.875 10.6334C14.7561 11.3829 16.3591 12.9908 17 13.9999C17.6733 13.0108 19.2439 11.3829 20.125 10.6334C21.375 9.57 22 8.37949 22 6.84837C22 4.17066 19.7614 1.99994 17 1.99994Z',
  d9: 'M17 1.25C13.8463 1.25 11.25 3.73491 11.25 6.84843C11.25 8.63418 11.9999 10.0229 13.389 11.2047C14.2518 11.9387 15.7868 13.4885 16.3669 14.4021C16.5022 14.6152 16.7356 14.7459 16.988 14.7499C17.2404 14.7539 17.4779 14.6307 17.62 14.422C18.2436 13.5059 19.7621 11.9269 20.611 11.2047C22.0001 10.0229 22.75 8.63418 22.75 6.84843C22.75 3.73491 20.1537 1.25 17 1.25ZM17 9.25C15.7574 9.25 14.75 8.24264 14.75 7C14.75 5.75736 15.7574 4.75 17 4.75C18.2426 4.75 19.25 5.75736 19.25 7C19.25 8.24264 18.2426 9.25 17 9.25Z',
  d10: 'M3.20455 11.9998C3.20455 12.296 3.21918 12.5887 3.24777 12.8774C4.2209 12.4512 6.66233 11.8448 8.64309 12.8293C9.1001 13.0133 10.213 13.5509 11.2917 14.3377C12.0581 14.9818 13.8625 16.3435 14.9489 16.6373C15.7353 16.9107 17.6675 17.403 19.1057 17.1843C19.7912 16.2465 20.2955 15.1678 20.5671 13.9998H22.5643C21.627 18.9812 17.2536 22.7498 12 22.7498C6.06294 22.7498 1.25 17.9369 1.25 11.9998C1.25 6.74622 5.01864 2.37281 10 1.43555V3.43278C6.10597 4.33826 3.20455 7.83022 3.20455 11.9998Z',
};

export const IconMapsGlobal02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-02-stroke-rounded IconMapsGlobal02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsGlobal02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-02-duotone-rounded IconMapsGlobal02DuotoneRounded"
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
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsGlobal02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-02-twotone-rounded IconMapsGlobal02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsGlobal02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-02-solid-rounded IconMapsGlobal02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsGlobal02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-02-bulk-rounded IconMapsGlobal02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMapsGlobal02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-02-stroke-sharp IconMapsGlobal02StrokeSharp"
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconMapsGlobal02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-02-solid-sharp IconMapsGlobal02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMapsGlobal02: TheIconSelfPack = {
  name: 'MapsGlobal02',
  StrokeRounded: IconMapsGlobal02StrokeRounded,
  DuotoneRounded: IconMapsGlobal02DuotoneRounded,
  TwotoneRounded: IconMapsGlobal02TwotoneRounded,
  SolidRounded: IconMapsGlobal02SolidRounded,
  BulkRounded: IconMapsGlobal02BulkRounded,
  StrokeSharp: IconMapsGlobal02StrokeSharp,
  SolidSharp: IconMapsGlobal02SolidSharp,
};