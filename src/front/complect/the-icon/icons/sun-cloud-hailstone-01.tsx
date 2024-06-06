import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
  d2: 'M17.4776 9.00915C17.485 9.00911 17.4925 9.00909 17.5 9.00909C19.9853 9.00909 22 11.0269 22 13.5159C22 15.4782 20.7478 16.8813 19 17.5M17.4776 9.00915C17.4924 8.8442 17.5 8.67716 17.5 8.50834C17.5 5.46617 15.0376 3 12 3C9.12324 3 6.76233 5.21197 6.52042 8.03032M17.4776 9.00915C17.3753 10.1453 16.9286 11.182 16.2428 12.0136M6.52042 8.03032C3.98398 8.27205 2 10.4116 2 13.0152C2 15.0686 3.2341 16.7103 5 17.5M6.52042 8.03032C6.67826 8.01527 6.83823 8.00758 7 8.00758C8.12582 8.00758 9.16474 8.38023 10.0005 9.00909',
  d3: 'M11.9978 15L12.0022 15.0078M14.9966 17.9967L15.0011 18.0044M8.99888 17.9967L9.00337 18.0044M17.9955 20.9933L18 21.0011M6 20.9933L6.00449 21.0011M11.9978 21.9922L12.0022 22',
  d4: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d5: 'M13.125 15C13.125 15.5523 12.6773 16 12.125 16C11.5727 16 11.125 15.5523 11.125 15C11.125 14.4477 11.5727 14 12.125 14C12.6773 14 13.125 14.4477 13.125 15Z',
  d6: 'M10.125 18C10.125 18.5523 9.67728 19 9.125 19C8.57272 19 8.125 18.5523 8.125 18C8.125 17.4477 8.57272 17 9.125 17C9.67728 17 10.125 17.4477 10.125 18Z',
  d7: 'M16.125 18C16.125 18.5523 15.6773 19 15.125 19C14.5727 19 14.125 18.5523 14.125 18C14.125 17.4477 14.5727 17 15.125 17C15.6773 17 16.125 17.4477 16.125 18Z',
  d8: 'M7.125 21C7.125 21.5523 6.67728 22 6.125 22C5.57272 22 5.125 21.5523 5.125 21C5.125 20.4477 5.57272 20 6.125 20C6.67728 20 7.125 20.4477 7.125 21Z',
  d9: 'M13.125 22C13.125 22.5523 12.6773 23 12.125 23C11.5727 23 11.125 22.5523 11.125 22C11.125 21.4477 11.5727 21 12.125 21C12.6773 21 13.125 21.4477 13.125 22Z',
  d10: 'M19.125 21C19.125 21.5523 18.6773 22 18.125 22C17.5727 22 17.125 21.5523 17.125 21C17.125 20.4477 17.5727 20 18.125 20C18.6773 20 19.125 20.4477 19.125 21Z',
  d11: 'M6.06431 6.96783C6.01491 7.16384 5.9902 7.26184 5.93372 7.3197C5.87724 7.37755 5.77924 7.40476 5.58325 7.45919C3.15606 8.1332 1.375 10.3583 1.375 13C1.375 15.6054 3.10786 17.8061 5.48393 18.5124C5.54498 18.5306 5.57551 18.5396 5.60808 18.542C5.64065 18.5443 5.68083 18.5385 5.76121 18.5268C5.87997 18.5095 6.00144 18.5005 6.125 18.5005C6.27292 18.5005 6.34688 18.5005 6.36852 18.4973C6.54156 18.4719 6.59646 18.4171 6.62183 18.244C6.625 18.2224 6.625 18.1484 6.625 18.0005C6.625 16.6198 7.74429 15.5005 9.125 15.5005C9.27292 15.5005 9.34688 15.5005 9.36852 15.4973C9.54156 15.4719 9.59646 15.4171 9.62183 15.244C9.625 15.2224 9.625 15.1484 9.625 15.0005C9.625 13.6198 10.7443 12.5005 12.125 12.5005C13.5057 12.5005 14.625 13.6198 14.625 15.0005C14.625 15.1484 14.625 15.2224 14.6282 15.244C14.6535 15.4171 14.7084 15.4719 14.8815 15.4973C14.9031 15.5005 14.9771 15.5005 15.125 15.5005C16.5057 15.5005 17.625 16.6198 17.625 18.0005C17.625 18.1484 17.625 18.2224 17.6282 18.244C17.6535 18.4171 17.7084 18.4719 17.8815 18.4973C17.9031 18.5005 17.9771 18.5005 18.125 18.5005C18.32 18.5005 18.5097 18.5228 18.6918 18.565C18.7819 18.5859 18.8269 18.5963 18.8641 18.5956C18.9013 18.5949 18.936 18.5855 19.0054 18.5666C21.2352 17.9606 22.875 15.9218 22.875 13.5C22.875 11.0285 21.1672 8.95589 18.8673 8.39786C18.6239 8.3388 18.5022 8.30927 18.4397 8.23828C18.3772 8.1673 18.3635 8.04461 18.3362 7.79924C17.9878 4.67731 15.3399 2.25 12.125 2.25C9.20171 2.25 6.74772 4.25653 6.06431 6.96783Z',
  d12: 'M3.125 5.85679C3.125 4.27586 4.40141 3 5.96888 3C6.74917 3 7.45702 3.31517 7.97224 3.82904C8.47713 3.3798 9.05535 3.0112 9.68671 2.74345C8.79982 1.67988 7.46405 1 5.96888 1C3.29052 1 1.125 3.17762 1.125 5.85679C1.125 7.25011 1.71096 8.50695 2.64756 9.39203C3.07158 8.86654 3.58625 8.41723 4.16783 8.06783C3.53021 7.54305 3.125 6.7479 3.125 5.85679Z',
  d13: 'M13 14.75C13 15.3023 12.5523 15.75 12 15.75C11.4477 15.75 11 15.3023 11 14.75C11 14.1977 11.4477 13.75 12 13.75C12.5523 13.75 13 14.1977 13 14.75Z',
  d14: 'M10 17.75C10 18.3023 9.55228 18.75 9 18.75C8.44772 18.75 8 18.3023 8 17.75C8 17.1977 8.44772 16.75 9 16.75C9.55228 16.75 10 17.1977 10 17.75Z',
  d15: 'M13 21.75C13 22.3023 12.5523 22.75 12 22.75C11.4477 22.75 11 22.3023 11 21.75C11 21.1977 11.4477 20.75 12 20.75C12.5523 20.75 13 21.1977 13 21.75Z',
  d16: 'M15 18.75C15.5523 18.75 16 18.3023 16 17.75C16 17.1977 15.5523 16.75 15 16.75C14.4477 16.75 14 17.1977 14 17.75C14 18.3023 14.4477 18.75 15 18.75Z',
  d17: 'M7 20.75C7 21.3023 6.55228 21.75 6 21.75C5.44772 21.75 5 21.3023 5 20.75C5 20.1977 5.44772 19.75 6 19.75C6.55228 19.75 7 20.1977 7 20.75Z',
  d18: 'M19 20.75C19 21.3023 18.5523 21.75 18 21.75C17.4477 21.75 17 21.3023 17 20.75C17 20.1977 17.4477 19.75 18 19.75C18.5523 19.75 19 20.1977 19 20.75Z',
  d19: 'M2.68308 9.20164C1.80115 8.36245 1.25 7.17454 1.25 5.85826C1.25 3.31619 3.30471 1.25 5.84601 1.25C7.23857 1.25 8.48541 1.87157 9.32672 2.8489C10.1372 2.46484 11.0435 2.25 12 2.25C15.3858 2.25 18.1428 4.94224 18.2469 8.30273C20.7927 8.66534 22.75 10.8541 22.75 13.5C22.75 15.8428 21.2155 17.8271 19.0967 18.5028C18.7656 18.3409 18.3934 18.25 18 18.25C17.8061 18.25 17.6174 18.2721 17.4362 18.3138C17.4779 18.1326 17.5 17.9439 17.5 17.75C17.5 16.3693 16.3807 15.25 15 15.25C14.8061 15.25 14.6174 15.2721 14.4362 15.3138C14.4779 15.1326 14.5 14.9439 14.5 14.75C14.5 13.3693 13.3807 12.25 12 12.25C10.6193 12.25 9.5 13.3693 9.5 14.75C9.5 14.9439 9.52207 15.1326 9.56384 15.3138C9.38264 15.2721 9.1939 15.25 9 15.25C7.61929 15.25 6.5 16.3693 6.5 17.75C6.5 17.9439 6.52207 18.1326 6.56385 18.3138C6.38264 18.2721 6.1939 18.25 6 18.25C5.6767 18.25 5.36774 18.3114 5.08412 18.4231C2.85042 17.634 1.25 15.5039 1.25 13C1.25 11.544 1.79103 10.2146 2.68308 9.20164ZM3.14766 5.85826C3.14766 4.35823 4.35875 3.14766 5.84601 3.14766C6.58272 3.14766 7.25136 3.44376 7.7396 3.92707C6.77854 4.82293 6.1002 6.01824 5.853 7.36454C5.25587 7.48547 4.69233 7.69886 4.17797 7.98912C3.54949 7.49188 3.14766 6.72264 3.14766 5.85826Z',
};

export const IconSunCloudHailstone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-hailstone-01-stroke-rounded IconSunCloudHailstone01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudHailstone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-hailstone-01-duotone-rounded IconSunCloudHailstone01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudHailstone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-hailstone-01-twotone-rounded IconSunCloudHailstone01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconSunCloudHailstone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-hailstone-01-solid-rounded IconSunCloudHailstone01SolidRounded"
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

export const IconSunCloudHailstone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-hailstone-01-bulk-rounded IconSunCloudHailstone01BulkRounded"
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

export const IconSunCloudHailstone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-hailstone-01-stroke-sharp IconSunCloudHailstone01StrokeSharp"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudHailstone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-hailstone-01-solid-sharp IconSunCloudHailstone01SolidSharp"
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

export const iconPackOfSunCloudHailstone01: TheIconSelfPack = {
  name: 'SunCloudHailstone01',
  StrokeRounded: IconSunCloudHailstone01StrokeRounded,
  DuotoneRounded: IconSunCloudHailstone01DuotoneRounded,
  TwotoneRounded: IconSunCloudHailstone01TwotoneRounded,
  SolidRounded: IconSunCloudHailstone01SolidRounded,
  BulkRounded: IconSunCloudHailstone01BulkRounded,
  StrokeSharp: IconSunCloudHailstone01StrokeSharp,
  SolidSharp: IconSunCloudHailstone01SolidSharp,
};