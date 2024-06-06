import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5294 2C16.5225 2 18.519 2 19.7595 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.7595 20.8284C18.519 22 16.5225 22 12.5294 22H11.4706C7.47751 22 5.48098 22 4.24049 20.8284C3 19.6569 3 17.7712 3 14L3 10C3 6.22876 3 4.34315 4.24049 3.17157C5.48098 2 7.47752 2 11.4706 2L12.5294 2Z',
  d2: 'M8 7H16',
  d3: 'M8 12H16',
  d4: 'M8 17H12',
  d5: 'M17.2712 1.40242C16.0706 1.24998 14.5342 1.24999 12.5833 1.25H12.5833H11.4167C9.46585 1.24999 7.92941 1.24998 6.72885 1.40242C5.49987 1.55847 4.50965 1.88575 3.72552 2.62631C2.93534 3.37259 2.5806 4.32468 2.41255 5.50521C2.24997 6.64729 2.24998 8.1054 2.25 9.94067V9.94068V14.0593V14.0593C2.24998 15.8946 2.24997 17.3527 2.41255 18.4948C2.5806 19.6753 2.93534 20.6274 3.72552 21.3737C4.50965 22.1142 5.49987 22.4415 6.72885 22.5976C7.92941 22.75 9.46586 22.75 11.4167 22.75H12.5833C14.5342 22.75 16.0706 22.75 17.2712 22.5976C18.5001 22.4415 19.4904 22.1143 20.2745 21.3737C21.0647 20.6274 21.4194 19.6753 21.5875 18.4948C21.75 17.3527 21.75 15.8946 21.75 14.0593V9.94074V9.94072V9.94071V9.94069V9.94067C21.75 8.10541 21.75 6.64729 21.5875 5.50521C21.4194 4.32468 21.0647 3.37259 20.2745 2.62631C19.4904 1.88575 18.5001 1.55847 17.2712 1.40242ZM8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8H16C16.5523 8 17 7.55228 17 7C17 6.44772 16.5523 6 16 6H8ZM7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H8Z',
  d6: 'M12.5833 1.25C14.5342 1.24999 16.0706 1.24998 17.2712 1.40242C18.5001 1.55847 19.4904 1.88575 20.2745 2.62631C21.0647 3.37259 21.4194 4.32468 21.5875 5.50521C21.75 6.6473 21.75 8.10543 21.75 9.94072V9.94074V14.0593C21.75 15.8946 21.75 17.3527 21.5875 18.4948C21.4194 19.6753 21.0647 20.6274 20.2745 21.3737C19.4904 22.1143 18.5001 22.4415 17.2712 22.5976C16.0706 22.75 14.5342 22.75 12.5833 22.75H11.4167C9.46586 22.75 7.92941 22.75 6.72885 22.5976C5.49987 22.4415 4.50965 22.1142 3.72552 21.3737C2.93534 20.6274 2.5806 19.6753 2.41255 18.4948C2.24997 17.3527 2.24998 15.8946 2.25 14.0593V14.0593V9.94068V9.94067C2.24998 8.1054 2.24997 6.64729 2.41255 5.50521C2.5806 4.32468 2.93534 3.37259 3.72552 2.62631C4.50965 1.88575 5.49987 1.55847 6.72885 1.40242C7.92941 1.24998 9.46585 1.24999 11.4167 1.25H12.5833H12.5833Z',
  d7: 'M7 7C7 6.44772 7.44772 6 8 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H8C7.44772 8 7 7.55228 7 7Z',
  d8: 'M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z',
  d9: 'M7 17C7 16.4477 7.44772 16 8 16L12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z',
  d10: 'M21 22V2H3.00017L3 22H21Z',
  d11: 'M8 7H16M8 12H16M8 17H12',
  d12: 'M3.00017 1.25C2.58596 1.25 2.25018 1.58578 2.25017 1.99999L2.25 22C2.25 22.1989 2.32902 22.3897 2.46967 22.5303C2.61032 22.671 2.80109 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V2C21.75 1.58579 21.4142 1.25 21 1.25H3.00017ZM8 8H16V6H8V8ZM8 13H16V11H8V13ZM8 18H12V16H8V18Z',
};

export const IconLicenseStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-stroke-rounded IconLicenseStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-duotone-rounded IconLicenseDuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-twotone-rounded IconLicenseTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-solid-rounded IconLicenseSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-bulk-rounded IconLicenseBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-stroke-sharp IconLicenseStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLicenseSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="license-solid-sharp IconLicenseSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLicense: TheIconSelfPack = {
  name: 'License',
  StrokeRounded: IconLicenseStrokeRounded,
  DuotoneRounded: IconLicenseDuotoneRounded,
  TwotoneRounded: IconLicenseTwotoneRounded,
  SolidRounded: IconLicenseSolidRounded,
  BulkRounded: IconLicenseBulkRounded,
  StrokeSharp: IconLicenseStrokeSharp,
  SolidSharp: IconLicenseSolidSharp,
};