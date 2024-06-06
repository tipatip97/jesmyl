import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.0808 2C5.47023 2.9359 2 7.01218 2 11.899C2 17.4776 6.52238 22 12.101 22C16.9878 22 21.0641 18.5298 22 13.9192',
  d2: 'M18.9375 18C19.3216 17.9166 19.6771 17.784 20 17.603M14.6875 17.3406C15.2831 17.6015 15.8576 17.7948 16.4051 17.9218M10.8546 14.9477C11.2681 15.238 11.71 15.5861 12.1403 15.8865M3 13.825C3.32234 13.6675 3.67031 13.4868 4.0625 13.3321M6.45105 13C7.01293 13.0624 7.64301 13.2226 8.35743 13.5232',
  d3: 'M18 7.5C18 6.67157 17.3284 6 16.5 6C15.6716 6 15 6.67157 15 7.5C15 8.32843 15.6716 9 16.5 9C17.3284 9 18 8.32843 18 7.5Z',
  d4: 'M17.488 13.6202C17.223 13.8638 16.8687 14 16.5001 14C16.1315 14 15.7773 13.8638 15.5123 13.6202C13.0855 11.3756 9.83336 8.86815 11.4193 5.2278C12.2769 3.25949 14.3353 2 16.5001 2C18.6649 2 20.7234 3.25949 21.5809 5.2278C23.1649 8.86356 19.9207 11.3833 17.488 13.6202Z',
  d5: 'M12 22C17.5228 22 22 17.5228 22 12C22 10.9707 21.8445 9.97776 21.5557 9.04333C20.845 10.5782 19.3958 11.8903 18.0547 13.1045C17.8627 13.2783 17.673 13.45 17.488 13.6202C17.223 13.8638 16.8687 14 16.5001 14C16.1315 14 15.7773 13.8638 15.5123 13.6202C15.3158 13.4384 15.1139 13.2549 14.9095 13.0693C12.5906 10.9621 9.96179 8.57338 11.4193 5.2278C12.0153 3.8599 13.1913 2.83434 14.5798 2.33595C13.7568 2.1168 12.892 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d6: 'M10.3188 3.18519C10.8477 3.07782 11.1895 2.56199 11.0821 2.03305C10.9747 1.50411 10.4589 1.16235 9.92995 1.26972C4.9777 2.27498 1.25 6.65175 1.25 11.9014C1.25 17.8929 6.1071 22.75 12.0986 22.75C17.3482 22.75 21.725 19.0223 22.7303 14.07C22.8376 13.5411 22.4959 13.0253 21.967 12.9179C21.438 12.8105 20.9222 13.1523 20.8148 13.6812C20.5655 14.9092 20.0631 16.0453 19.3644 17.0327C19.332 17.0785 19.2871 17.1141 19.2345 17.1339C19.0927 17.1871 18.9431 17.2312 18.7858 17.2657C17.8771 17.4418 16.9299 17.2892 16.6055 17.1993C16.1083 17.084 15.5109 16.8838 14.9525 16.6392C14.194 16.3529 13.0623 15.6219 12.575 15.2754L12.5698 15.2717C12.3666 15.1299 11.9201 14.7977 11.9155 14.7943C11.7113 14.6422 11.499 14.484 11.2921 14.3386C10.3543 13.6519 9.1392 13.0493 8.6485 12.8322C7.88909 12.5126 7.19972 12.3323 6.56673 12.2585C6.02094 12.1538 5.44083 12.2083 4.97194 12.2961C4.48664 12.387 4.0525 12.5268 3.78339 12.6363C3.7375 12.6544 3.68926 12.6743 3.63946 12.6955C3.45004 12.776 3.23361 12.6547 3.22112 12.4492C3.21011 12.268 3.20453 12.0853 3.20453 11.9014C3.20453 7.59961 6.25948 4.00918 10.3188 3.18519Z',
  d7: 'M16.5006 1.25C14.0602 1.25 11.7178 2.66605 10.7322 4.92824C9.81064 7.04359 10.3191 8.85224 11.3395 10.3665C12.1647 11.5911 13.3684 12.6836 14.4242 13.6418L14.4242 13.6418C14.6238 13.8229 14.8181 13.9993 15.0035 14.1708L15.0051 14.1723C15.4122 14.5465 15.9489 14.75 16.5006 14.75C17.0522 14.75 17.589 14.5465 17.9961 14.1723C18.1717 14.0108 18.355 13.845 18.5431 13.6749L18.5433 13.6747L18.5433 13.6747L18.5433 13.6747C19.61 12.7101 20.8298 11.6071 21.6636 10.3671C22.6827 8.85132 23.1894 7.04099 22.2689 4.92824C21.2834 2.66605 18.941 1.25 16.5006 1.25ZM16.5 5C17.7426 5 18.75 6.00736 18.75 7.25C18.75 8.49264 17.7426 9.5 16.5 9.5C15.2574 9.5 14.25 8.49264 14.25 7.25C14.25 6.00736 15.2574 5 16.5 5Z',
  d8: 'M22 7.4C22 11.6 16.5 14 16.5 14C16.5 14 11 11.6 11 7.4C11 4.41766 13.4624 2 16.5 2C19.5376 2 22 4.41766 22 7.4Z',
  d9: 'M3.20455 11.9998C3.20455 12.296 3.21918 12.5887 3.24777 12.8774C4.2209 12.4512 6.66233 11.8448 8.64309 12.8293C9.1001 13.0133 10.213 13.5509 11.2917 14.3377C12.0581 14.9818 13.8625 16.3435 14.9489 16.6373C15.7353 16.9107 17.6675 17.403 19.1057 17.1843C19.7912 16.2465 20.2955 15.1678 20.5671 13.9998H22.5643C21.627 18.9812 17.2536 22.7498 12 22.7498C6.06294 22.7498 1.25 17.9369 1.25 11.9998C1.25 6.74622 5.01864 2.37281 10 1.43555V3.43278C6.10597 4.33826 3.20455 7.83022 3.20455 11.9998Z',
  d10: 'M15.2724 14.1475C15.5441 14.2999 15.7716 14.416 15.9332 14.4949L16.5 14.75L17.0668 14.4949C17.2284 14.416 17.4559 14.2999 17.7276 14.1475C18.2693 13.8437 18.9951 13.3911 19.7249 12.7971C21.1572 11.6311 22.75 9.79838 22.75 7.36904C22.75 3.97674 19.9387 1.25 16.5 1.25C13.0613 1.25 10.25 3.97674 10.25 7.36904C10.25 9.79838 11.8428 11.6311 13.2751 12.7971C14.0049 13.3911 14.7307 13.8437 15.2724 14.1475ZM16.5 9.75C15.2574 9.75 14.25 8.74264 14.25 7.5C14.25 6.25736 15.2574 5.25 16.5 5.25C17.7426 5.25 18.75 6.25736 18.75 7.5C18.75 8.74264 17.7426 9.75 16.5 9.75Z',
};

export const IconMapsGlobal01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-01-stroke-rounded IconMapsGlobal01StrokeRounded"
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

export const IconMapsGlobal01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-01-duotone-rounded IconMapsGlobal01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconMapsGlobal01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-01-twotone-rounded IconMapsGlobal01TwotoneRounded"
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

export const IconMapsGlobal01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-01-solid-rounded IconMapsGlobal01SolidRounded"
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

export const IconMapsGlobal01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-01-bulk-rounded IconMapsGlobal01BulkRounded"
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

export const IconMapsGlobal01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-01-stroke-sharp IconMapsGlobal01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconMapsGlobal01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="maps-global-01-solid-sharp IconMapsGlobal01SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMapsGlobal01: TheIconSelfPack = {
  name: 'MapsGlobal01',
  StrokeRounded: IconMapsGlobal01StrokeRounded,
  DuotoneRounded: IconMapsGlobal01DuotoneRounded,
  TwotoneRounded: IconMapsGlobal01TwotoneRounded,
  SolidRounded: IconMapsGlobal01SolidRounded,
  BulkRounded: IconMapsGlobal01BulkRounded,
  StrokeSharp: IconMapsGlobal01StrokeSharp,
  SolidSharp: IconMapsGlobal01SolidSharp,
};