import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 12.0001C17.485 12 17.4925 12 17.5 12C19.9853 12 22 14.0147 22 16.5C22 18.9853 19.9853 21 17.5 21H7C4.23858 21 2 18.7614 2 16C2 13.4003 3.98398 11.2641 6.52042 11.0227M17.4776 12.0001C17.4924 11.8354 17.5 11.6686 17.5 11.5C17.5 8.46243 15.0376 6 12 6C9.12324 6 6.76233 8.20862 6.52042 11.0227M17.4776 12.0001C17.3753 13.1345 16.9286 14.1696 16.2428 15M6.52042 11.0227C6.67826 11.0077 6.83823 11 7 11C8.12582 11 9.16474 11.3721 10.0005 12',
  d2: 'M11 5.53058C10.9061 5.04705 10.7328 4.5707 10.4752 4.12013C9.85932 3.04292 8.87603 2.31347 7.77746 2C7.94723 3.37965 7.30486 4.79173 6.03759 5.53058C4.77033 6.26942 3.23814 6.12516 2.13984 5.28687C1.85939 6.40434 1.99332 7.62899 2.6092 8.7062C3.44206 10.1629 4.94685 10.9839 6.5 11',
  d3: 'M17.5 11.5C17.5 8.46243 15.0376 6 12 6C9.12324 6 6.76233 8.20862 6.52042 11.0227C3.98398 11.2641 2 13.4003 2 16C2 18.7614 4.23858 21 7 21H17.5C19.9853 21 22 18.9853 22 16.5C22 14.0147 19.9853 12 17.5 12L17.4776 12.0001C17.4924 11.8354 17.5 11.6686 17.5 11.5Z',
  d4: 'M1.375 16.625C1.375 13.842 3.35164 11.5214 5.978 10.9895C6.51231 8.07956 9.06085 5.875 12.125 5.875C15.5108 5.875 18.2678 8.56724 18.3719 11.9277C20.9177 12.2903 22.875 14.4791 22.875 17.125C22.875 20.0245 20.5245 22.375 17.625 22.375H7.125C3.94936 22.375 1.375 19.8006 1.375 16.625Z',
  d5: 'M3.60228 8.83488C3.35209 8.39727 3.2033 7.92884 3.14876 7.45682C4.28914 7.78584 5.55644 7.66651 6.66622 7.01948C7.77552 6.37274 8.50838 5.32681 8.79426 4.16956C9.16391 4.45033 9.4852 4.80976 9.73203 5.24148C9.90936 5.55165 10.0353 5.87623 10.1131 6.20586C10.7335 5.99507 11.3976 5.87908 12.0884 5.87512C11.9704 5.31677 11.7651 4.76801 11.4683 4.24881C10.7186 2.93759 9.51818 2.04614 8.17681 1.6634C7.85434 1.57138 7.50721 1.64713 7.25238 1.86511C6.99755 2.0831 6.86895 2.41431 6.90991 2.74714C7.03303 3.74774 6.56549 4.76312 5.65888 5.29169C4.75434 5.81906 3.65975 5.71859 2.87153 5.11697C2.60416 4.9129 2.25212 4.85691 1.93463 4.96796C1.61715 5.07901 1.37676 5.34223 1.29488 5.66846C0.954231 7.02578 1.11663 8.5168 1.86602 9.82755C2.36897 10.7072 3.07397 11.3973 3.88816 11.8721C4.50845 11.4489 5.21587 11.1439 5.978 10.9896C6.00379 10.8491 6.03429 10.7102 6.0693 10.5732C5.06997 10.3992 4.15096 9.79456 3.60228 8.83488Z',
  d6: 'M1.25 16.5C1.25 13.717 3.22664 11.3964 5.853 10.8645C6.38731 7.95456 8.93585 5.75 12 5.75C15.3858 5.75 18.1428 8.44224 18.2469 11.8027C20.7927 12.1653 22.75 14.3541 22.75 17C22.75 19.8995 20.3995 22.25 17.5 22.25H7C3.82436 22.25 1.25 19.6756 1.25 16.5Z',
  d7: 'M3.185 7.31676C3.23715 7.76732 3.37942 8.21446 3.61864 8.63218C4.24116 9.7192 5.36226 10.3291 6.51863 10.341L6.49887 12.25C4.68518 12.2313 2.92869 11.2738 1.95853 9.57974C1.242 8.32856 1.08672 6.9053 1.41243 5.60968C1.49072 5.29828 1.72056 5.04703 2.02412 4.94102C2.32768 4.83502 2.66429 4.88846 2.91993 5.08326C3.67359 5.65753 4.72017 5.75344 5.58504 5.25004C6.45189 4.74549 6.89893 3.77626 6.7812 2.82114C6.74204 2.50343 6.86501 2.18728 7.10866 1.9792C7.35231 1.77112 7.68421 1.69882 7.99255 1.78665C9.27509 2.152 10.4229 3.00293 11.1397 4.25455C11.4387 4.7767 11.6406 5.33017 11.75 5.89267L9.87279 6.25667C9.80264 5.89608 9.67314 5.54013 9.47955 5.20211C9.24355 4.79001 8.93636 4.44692 8.58292 4.17891C8.30957 5.28356 7.60885 6.28195 6.5482 6.8993C5.48709 7.51692 4.27537 7.63082 3.185 7.31676Z',
};

export const IconMoonCloudStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-stroke-rounded IconMoonCloudStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMoonCloudDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-duotone-rounded IconMoonCloudDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-twotone-rounded IconMoonCloudTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-solid-rounded IconMoonCloudSolidRounded"
    >
      <path 
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

export const IconMoonCloudBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-bulk-rounded IconMoonCloudBulkRounded"
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

export const IconMoonCloudStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-stroke-sharp IconMoonCloudStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconMoonCloudSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-solid-sharp IconMoonCloudSolidSharp"
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

export const iconPackOfMoonCloud: TheIconSelfPack = {
  name: 'MoonCloud',
  StrokeRounded: IconMoonCloudStrokeRounded,
  DuotoneRounded: IconMoonCloudDuotoneRounded,
  TwotoneRounded: IconMoonCloudTwotoneRounded,
  SolidRounded: IconMoonCloudSolidRounded,
  BulkRounded: IconMoonCloudBulkRounded,
  StrokeSharp: IconMoonCloudStrokeSharp,
  SolidSharp: IconMoonCloudSolidSharp,
};