import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z',
  d2: 'M5 6L2 6M5 12H2M5 18H2',
  d3: 'M17.5 7L13.5 7M15.5 11H13.5',
  d4: 'M9 22L9 2',
  d5: 'M22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12C10.8302 2 9.84189 2 9 2.03496V21.965C9.84189 22 10.8302 22 12 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z',
  d6: 'M1.25 6C1.25 5.44772 1.69772 5 2.25 5L5.25 5C5.80229 5 6.25 5.44772 6.25 6C6.25 6.55229 5.80228 7 5.25 7L2.25 7C1.69772 7 1.25 6.55228 1.25 6ZM1.25 12C1.25 11.4477 1.69772 11 2.25 11H5.25C5.80228 11 6.25 11.4477 6.25 12C6.25 12.5523 5.80228 13 5.25 13H2.25C1.69772 13 1.25 12.5523 1.25 12ZM1.25 18C1.25 17.4477 1.69772 17 2.25 17H5.25C5.80228 17 6.25 17.4477 6.25 18C6.25 18.5523 5.80228 19 5.25 19H2.25C1.69772 19 1.25 18.5523 1.25 18Z',
  d7: 'M9.83689 22.6539C9.75 22.5662 9.75 22.427 9.75 22.1487V1.85129C9.75 1.57297 9.75 1.4338 9.83689 1.3461C9.92379 1.25841 10.062 1.25713 10.3385 1.25459C10.8378 1.24999 11.3722 1.25 11.9434 1.25H14.0564C15.8942 1.24999 17.3498 1.24997 18.489 1.40314C19.6614 1.56076 20.6104 1.89288 21.3588 2.64125C22.1071 3.38961 22.4392 4.33856 22.5969 5.51098C22.75 6.65019 22.75 8.10585 22.75 9.94359V14.0565C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H11.9435C11.3726 22.75 10.8377 22.75 10.3385 22.7454C10.062 22.7429 9.92379 22.7416 9.83689 22.6539ZM14.25 6C13.6977 6 13.25 6.44772 13.25 7C13.25 7.55229 13.6977 8 14.25 8L18.25 8C18.8023 8 19.25 7.55229 19.25 7C19.25 6.44772 18.8023 6 18.25 6L14.25 6ZM14.25 10C13.6977 10 13.25 10.4477 13.25 11C13.25 11.5523 13.6977 12 14.25 12H16.25C16.8023 12 17.25 11.5523 17.25 11C17.25 10.4477 16.8023 10 16.25 10H14.25Z',
  d8: 'M8.25 1.97355C8.25 1.66698 8.25 1.51369 8.14852 1.42412C8.04703 1.33455 7.89993 1.35297 7.60572 1.38982C7.5739 1.3938 7.54232 1.3979 7.51098 1.40211C6.33856 1.55974 5.38961 1.89186 4.64124 2.64022C3.89288 3.38859 3.56076 4.33753 3.40314 5.50996C3.24997 6.64917 3.24999 8.10479 3.25 9.94254V14.0554C3.24999 15.8931 3.24997 17.3488 3.40314 18.488C3.56076 19.6604 3.89288 20.6094 4.64124 21.3577C5.38961 22.1061 6.33856 22.4382 7.51098 22.5958C7.54232 22.6001 7.5739 22.6042 7.60571 22.6081C7.89993 22.645 8.04703 22.6634 8.14852 22.5738C8.25 22.4843 8.25 22.331 8.25 22.0244L8.25 1.97355Z',
  d9: 'M14.25 6C13.6977 6 13.25 6.44772 13.25 7C13.25 7.55228 13.6977 8 14.25 8L18.25 8C18.8023 8 19.25 7.55229 19.25 7C19.25 6.44772 18.8023 6 18.25 6L14.25 6ZM14.25 10C13.6977 10 13.25 10.4477 13.25 11C13.25 11.5523 13.6977 12 14.25 12H16.25C16.8023 12 17.25 11.5523 17.25 11C17.25 10.4477 16.8023 10 16.25 10H14.25Z',
  d10: 'M4 22H22V2H4V22Z',
  d11: 'M6 6L2 6M6 12H2M6 18H2',
  d12: 'M18 7H13M16 11L13 11',
  d13: 'M4.25 1.25H8L8 22.75H4.25C3.83579 22.75 3.5 22.4142 3.5 22V19H1.5V17H3.5V13H1.5V11H3.5V7H1.5V5H3.5V2C3.5 1.58579 3.83579 1.25 4.25 1.25ZM21.75 22.75H9.5L9.5 1.25H21.75C22.1642 1.25 22.5 1.58579 22.5 2V22C22.5 22.4142 22.1642 22.75 21.75 22.75ZM18.5 6.25H13.5V7.75H18.5V6.25ZM16.5 10.25H13.5V11.75H16.5V10.25Z',
} as const;

export const IconNotebook02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-02-stroke-rounded IconNotebook02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconNotebook02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-02-duotone-rounded IconNotebook02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconNotebook02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-02-twotone-rounded IconNotebook02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotebook02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-02-solid-rounded IconNotebook02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotebook02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-02-bulk-rounded IconNotebook02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotebook02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-02-stroke-sharp IconNotebook02StrokeSharp"
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
      <path 
        d={d.d12} 
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
    </TheIconWrapper>
  );
};

export const IconNotebook02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notebook-02-solid-sharp IconNotebook02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNotebook02: TheIconSelfPack = {
  name: 'Notebook02',
  StrokeRounded: IconNotebook02StrokeRounded,
  DuotoneRounded: IconNotebook02DuotoneRounded,
  TwotoneRounded: IconNotebook02TwotoneRounded,
  SolidRounded: IconNotebook02SolidRounded,
  BulkRounded: IconNotebook02BulkRounded,
  StrokeSharp: IconNotebook02StrokeSharp,
  SolidSharp: IconNotebook02SolidSharp,
};