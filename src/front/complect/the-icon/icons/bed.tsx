import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 3.5V20.5',
  d2: 'M22 8.5L22 20.5',
  d3: 'M2 8.5L6 10.5H22',
  d4: 'M2 15.5H6M22 15.5H19',
  d5: 'M6 10.5V16.5C6 18.1547 6.34533 18.5 8 18.5H17C18.6547 18.5 19 18.1547 19 16.5V10.5',
  d6: 'M6.81362 10.5C6.89385 10.076 7.0202 9.63248 6.99567 9.19713C6.95941 8.5536 6.63697 7.96625 6.1264 7.61368C5.92478 7.47446 5.48 7.33239 5.01268 7.21093C4.3308 7.0337 3.98986 6.94508 3.59142 7.03644C3.30841 7.10133 3.06258 7.25187 2.71115 7.52079C2.67243 7.55042 2.65307 7.56523 2.62289 7.59026C2.3843 7.78812 2.17276 8.07424 2.05352 8.36034C2.03844 8.39653 2.02562 8.43102 2 8.5V8.5',
  d7: 'M6.99567 9.19713C6.95941 8.5536 6.63697 7.96625 6.1264 7.61368C5.92478 7.47446 5.48 7.33239 5.01268 7.21093C4.3308 7.0337 3.98986 6.94508 3.59142 7.03644C3.21727 7.12223 2.9081 7.35771 2.33399 7.81852C2.25856 7.87906 2.20097 7.959 2.16729 8.04967C2.07207 8.30598 2.18497 8.59287 2.42932 8.71555L6.71791 10.8688L6.81362 10.5C6.89385 10.076 7.0202 9.63248 6.99567 9.19713Z',
  d8: 'M6 16.5V10.5H19V16.5C19 18.1547 18.6547 18.5 17 18.5H8C6.34533 18.5 6 18.1547 6 16.5Z',
  d9: 'M6 10.5L2 8.5V15.5H6V10.5ZM6 10.5H19M19 10.5H22V15.5H19V10.5Z',
  d10: 'M5.10188 6.45844L5.20065 6.48421C5.44474 6.54765 5.6944 6.61936 5.91598 6.69682C6.1208 6.76842 6.3633 6.86547 6.55188 6.99569C7.26143 7.48567 7.69509 8.28984 7.74379 9.1541C7.76925 9.60602 7.66641 10.0867 7.59366 10.4267C7.57678 10.5056 7.56152 10.5769 7.54986 10.6386C7.54674 10.655 7.54308 10.6714 7.53888 10.6876L7.44316 11.0564C7.38625 11.2756 7.23329 11.4574 7.02698 11.551C6.82067 11.6445 6.58313 11.6399 6.38069 11.5382L2.0921 9.38498C1.50596 9.09069 1.23514 8.40249 1.46353 7.78767C1.54428 7.57031 1.68244 7.37839 1.86383 7.23279L1.89417 7.20843L1.89417 7.20843C2.41612 6.78937 2.85876 6.43397 3.42311 6.30458C4.00384 6.17142 4.51476 6.30497 5.10188 6.45844Z',
  d11: 'M5.25 10.5C5.25 10.0858 5.58579 9.75 6 9.75H19C19.4142 9.75 19.75 10.0858 19.75 10.5V16.5C19.75 16.9299 19.7286 17.3263 19.6527 17.6715C19.575 18.0252 19.4303 18.3713 19.1508 18.6508C18.8713 18.9303 18.5252 19.075 18.1715 19.1527C17.8263 19.2286 17.4299 19.25 17 19.25H8C7.5701 19.25 7.17373 19.2286 6.82851 19.1527C6.4748 19.075 6.12868 18.9303 5.84917 18.6508C5.56966 18.3713 5.42498 18.0252 5.34728 17.6715C5.27144 17.3263 5.25 16.9299 5.25 16.5V10.5Z',
  d12: 'M2 2.5C2.55228 2.5 3 2.94772 3 3.5V20.5C3 21.0523 2.55228 21.5 2 21.5C1.44772 21.5 1 21.0523 1 20.5V3.5C1 2.94772 1.44772 2.5 2 2.5ZM22 7.5C22.5523 7.5 23 7.94772 23 8.5V20.5C23 21.0523 22.5523 21.5 22 21.5C21.4477 21.5 21 21.0523 21 20.5V8.5C21 7.94772 21.4477 7.5 22 7.5Z',
  d13: 'M1.47427 7.64935C1.76909 7.46714 2.13723 7.45058 2.44721 7.60557L6.23607 9.5H22C22.5523 9.5 23 9.94772 23 10.5V15.5C23 16.0523 22.5523 16.5 22 16.5H19C18.4477 16.5 18 16.0523 18 15.5V11.5H7V15.5C7 16.0523 6.55228 16.5 6 16.5H2C1.44772 16.5 1 16.0523 1 15.5V8.5C1 8.15342 1.17945 7.83156 1.47427 7.64935ZM5 11.118L3 10.118V14.5H5V11.118ZM20 11.5V14.5H21V11.5H20Z',
  d14: 'M5 10.25C5 9.83579 5.34737 9.5 5.77586 9.5H19.2241C19.6526 9.5 20 9.83579 20 10.25V16.25C20 16.6799 19.9778 17.0763 19.8994 17.4215C19.819 17.7752 19.6693 18.1213 19.3802 18.4008C19.091 18.6803 18.733 18.825 18.3671 18.9027C18.0099 18.9786 17.5999 19 17.1552 19H7.84483C7.40011 19 6.99007 18.9786 6.63295 18.9027C6.26703 18.825 5.90898 18.6803 5.61983 18.4008C5.33068 18.1213 5.18102 17.7752 5.10063 17.4215C5.02218 17.0763 5 16.6799 5 16.25V10.25Z',
  d15: 'M5 14.5H1V15.5C1 16.0523 1.44772 16.5 2 16.5H5.00284C5.00086 16.4181 5 14.5847 5 14.5Z',
  d16: 'M22 9.5H19.2254C19.6533 9.50065 20 9.83619 20 10.25V11.5H21V14.5H20V16.25C20 16.3347 19.9991 16.4181 19.9972 16.5H22C22.5523 16.5 23 16.0523 23 15.5V10.5C23 9.94772 22.5523 9.5 22 9.5Z',
  d17: 'M5.77489 9.49927C5.34639 9.49927 4.99902 9.83505 4.99902 10.2493V10.8445L2.0921 9.38498C1.50596 9.09069 1.23514 8.40249 1.46353 7.78767C1.54428 7.57031 1.68244 7.37839 1.86383 7.23279L1.89417 7.20843C2.41612 6.78937 2.85876 6.43397 3.42311 6.30458C4.00384 6.17142 4.51476 6.30497 5.10188 6.45844L5.20065 6.48421C5.44474 6.54765 5.6944 6.61936 5.91598 6.69682C6.1208 6.76842 6.3633 6.86547 6.55188 6.99569C7.26143 7.48567 7.69509 8.28984 7.74379 9.1541C7.75022 9.26824 7.74847 9.3842 7.74108 9.49927H5.77489Z',
  d18: 'M2 11H22',
  d19: 'M2 16H6M22 16H19',
  d20: 'M6 11V19H19V11',
  d21: 'M4.5 8.5H9',
  d22: 'M1.5 20.5V3.5H3.5V20.5H1.5Z',
  d23: 'M20.5 20.5L20.5 8.5L22.5 8.5L22.5 20.5L20.5 20.5Z',
  d24: 'M21.5 12H1.5V10H21.5V12Z',
  d25: 'M5.5 17H1.5V15H5.5V17ZM21.5 17H18.5V15H21.5V17Z',
  d26: 'M4.5 19V11H19.5V19C19.5 19.5523 19.0523 20 18.5 20H5.5C4.94772 20 4.5 19.5523 4.5 19Z',
  d27: 'M9 8.5H4.5V6.5H9V8.5Z',
};

export const IconBedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-stroke-rounded IconBedStrokeRounded"
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
      <path 
        d={d.d5} 
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

export const IconBedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-duotone-rounded IconBedDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-twotone-rounded IconBedTwotoneRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-solid-rounded IconBedSolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-bulk-rounded IconBedBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconBedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-stroke-sharp IconBedStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconBedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bed-solid-sharp IconBedSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBed: TheIconSelfPack = {
  name: 'Bed',
  StrokeRounded: IconBedStrokeRounded,
  DuotoneRounded: IconBedDuotoneRounded,
  TwotoneRounded: IconBedTwotoneRounded,
  SolidRounded: IconBedSolidRounded,
  BulkRounded: IconBedBulkRounded,
  StrokeSharp: IconBedStrokeSharp,
  SolidSharp: IconBedSolidSharp,
};