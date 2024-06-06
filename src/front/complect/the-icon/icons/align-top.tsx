import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.502 7.99988C17.3458 7.99988 18.3198 7.9165 18.801 8.74988C19.002 9.09795 19.002 9.56526 19.002 10.4999V11.4999C19.002 12.4345 19.002 12.9018 18.801 13.2499C18.3198 14.0832 17.3458 13.9999 16.502 13.9999C15.6581 13.9999 14.6841 14.0832 14.2029 13.2499C14.002 12.9018 14.002 12.4345 14.002 11.4999L14.002 10.4999C14.002 9.56526 14.002 9.09795 14.2029 8.74988C14.6841 7.9165 15.6581 7.99988 16.502 7.99988Z',
  d2: 'M7.50195 7.99988C8.34585 7.99988 9.31984 7.9165 9.80099 8.74988C10.002 9.09795 10.002 9.56526 10.002 10.4999L10.002 17.4999C10.002 18.4345 10.002 18.9018 9.80099 19.2499C9.31984 20.0832 8.34585 19.9999 7.50195 19.9999C6.65806 19.9999 5.68406 20.0832 5.20292 19.2499C5.00195 18.9018 5.00195 18.4345 5.00195 17.4999L5.00195 10.4999C5.00195 9.56526 5.00195 9.09795 5.20292 8.74988C5.68406 7.9165 6.65806 7.99988 7.50195 7.99988Z',
  d3: 'M22 4L2 4',
  d4: 'M7.50391 8.00232C8.3478 8.00232 9.3218 7.91895 9.80294 8.75232C10.0039 9.10039 10.0039 9.5677 10.0039 10.5023L10.0039 17.5023C10.0039 18.4369 10.0039 18.9042 9.80294 19.2523C9.3218 20.0857 8.3478 20.0023 7.50391 20.0023C6.66001 20.0023 5.68602 20.0857 5.20487 19.2523C5.00391 18.9042 5.00391 18.4369 5.00391 17.5023L5.00391 10.5023C5.00391 9.5677 5.00391 9.10039 5.20487 8.75232C5.68602 7.91895 6.66001 8.00232 7.50391 8.00232Z',
  d5: 'M16.502 8.00036C17.3458 8.00036 18.3198 7.91699 18.801 8.75036C19.002 9.09844 19.002 9.56575 19.002 10.5004V11.5004C19.002 12.435 19.002 12.9023 18.801 13.2504C18.3198 14.0837 17.3458 14.0004 16.502 14.0004C15.6581 14.0004 14.6841 14.0837 14.2029 13.2504C14.002 12.9023 14.002 12.435 14.002 11.5004L14.002 10.5004C14.002 9.56575 14.002 9.09844 14.2029 8.75036C14.6841 7.91699 15.6581 8.00036 16.502 8.00036Z',
  d6: 'M7.50195 8.00036C8.34585 8.00036 9.31984 7.91699 9.80099 8.75036C10.002 9.09844 10.002 9.56575 10.002 10.5004L10.002 17.5004C10.002 18.435 10.002 18.9023 9.80099 19.2504C9.31984 20.0837 8.34585 20.0004 7.50195 20.0004C6.65806 20.0004 5.68406 20.0837 5.20292 19.2504C5.00195 18.9023 5.00195 18.435 5.00195 17.5004L5.00195 10.5004C5.00195 9.56575 5.00195 9.09844 5.20292 8.75036C5.68406 7.91699 6.65806 8.00036 7.50195 8.00036Z',
  d7: 'M16.502 7.99939C17.3458 7.99939 18.3198 7.91602 18.801 8.74939C19.002 9.09746 19.002 9.56477 19.002 10.4994V11.4994C19.002 12.434 19.002 12.9013 18.801 13.2494C18.3198 14.0828 17.3458 13.9994 16.502 13.9994C15.6581 13.9994 14.6841 14.0828 14.2029 13.2494C14.002 12.9013 14.002 12.434 14.002 11.4994L14.002 10.4994C14.002 9.56477 14.002 9.09746 14.2029 8.74939C14.6841 7.91602 15.6581 7.99939 16.502 7.99939Z',
  d8: 'M7.50195 7.99939C8.34585 7.99939 9.31984 7.91602 9.80099 8.74939C10.002 9.09746 10.002 9.56477 10.002 10.4994L10.002 17.4994C10.002 18.434 10.002 18.9013 9.80099 19.2494C9.31984 20.0828 8.34585 19.9994 7.50195 19.9994C6.65806 19.9994 5.68406 20.0828 5.20292 19.2494C5.00195 18.9013 5.00195 18.434 5.00195 17.4994L5.00195 10.4994C5.00195 9.56477 5.00195 9.09746 5.20292 8.74939C5.68406 7.91602 6.65806 7.99939 7.50195 7.99939Z',
  d9: 'M16.502 7.25165C16.858 7.24814 17.5102 7.24226 17.9372 7.32922C18.4904 7.44189 19.0728 7.72238 19.4505 8.37665C19.6279 8.68386 19.6939 9.00982 19.7238 9.339C19.752 9.65029 19.752 10.0296 19.752 10.4694V11.5339C19.752 11.9737 19.752 12.353 19.7238 12.6643C19.6939 12.9935 19.6279 13.3194 19.4505 13.6266C19.0728 14.2809 18.4904 14.5614 17.9372 14.6741C17.5102 14.761 16.858 14.7552 16.502 14.7516C16.1459 14.7552 15.4937 14.761 15.0667 14.6741C14.5135 14.5614 13.9311 14.2809 13.5534 13.6266C13.376 13.3194 13.31 12.9935 13.2801 12.6643C13.2519 12.353 13.2519 11.9737 13.252 11.5339V11.5339V10.4694V10.4694C13.2519 10.0296 13.2519 9.65028 13.2801 9.339C13.31 9.00981 13.376 8.68386 13.5534 8.37665C13.9311 7.72238 14.5135 7.44189 15.0667 7.32922C15.4937 7.24226 16.1459 7.24814 16.502 7.25165Z',
  d10: 'M7.50196 7.25165C7.85802 7.24814 8.51023 7.24226 8.93719 7.32922C9.49038 7.44189 10.0728 7.72238 10.4505 8.37665C10.6279 8.68386 10.6939 9.00981 10.7238 9.339C10.752 9.65029 10.752 10.0296 10.752 10.4694L10.752 17.5339C10.752 17.9737 10.752 18.353 10.7238 18.6643C10.6939 18.9935 10.6279 19.3194 10.4505 19.6266C10.0728 20.2809 9.49038 20.5614 8.93718 20.6741C8.51023 20.761 7.85802 20.7552 7.50195 20.7516C7.14588 20.7552 6.49368 20.761 6.06672 20.6741C5.51353 20.5614 4.93114 20.2809 4.5534 19.6266C4.37603 19.3194 4.30997 18.9935 4.28014 18.6643C4.25192 18.353 4.25194 17.9737 4.25195 17.5339V17.5339V10.4694V10.4694C4.25194 10.0296 4.25192 9.65028 4.28014 9.339C4.30997 9.00981 4.37603 8.68386 4.5534 8.37665C4.93114 7.72238 5.51353 7.44189 6.06672 7.32922C6.49368 7.24226 7.14589 7.24814 7.50196 7.25165Z',
  d11: 'M23 4.25C23 3.69772 22.5523 3.25 22 3.25L2 3.25C1.44771 3.25 1 3.69771 1 4.25C1 4.80228 1.44771 5.25 2 5.25L22 5.25C22.5523 5.25 23 4.80228 23 4.25Z',
  d12: 'M14 8L14 14L19 13.9961L19 8L14 8Z',
  d13: 'M5 8L5 20L10 19.9922L10 8L5 8Z',
  d14: 'M19 14.7461C19.4142 14.7461 19.75 14.4103 19.75 13.9961L19.75 8C19.75 7.58602 19.4146 7.25032 19.0006 7.25L14.0006 7.24609C13.8016 7.24594 13.6107 7.32489 13.4699 7.46556C13.3291 7.60623 13.25 7.79708 13.25 7.99609L13.25 13.9961C13.25 14.195 13.329 14.3858 13.4697 14.5264C13.6103 14.6671 13.8011 14.7461 14 14.7461L19 14.7461Z',
  d15: 'M10 20.75C10.4142 20.75 10.75 20.4142 10.75 20L10.75 8C10.75 7.58579 10.4142 7.25 10 7.25L5 7.25C4.58579 7.25 4.25 7.58579 4.25 8L4.25 20C4.25 20.1989 4.32902 20.3897 4.46967 20.5303C4.61032 20.671 4.80109 20.75 5 20.75H10Z',
  d16: 'M2 5.25L22 5.25V3.25L2 3.25L2 5.25Z',
};

export const IconAlignTopStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-top-stroke-rounded IconAlignTopStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAlignTopDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-top-duotone-rounded IconAlignTopDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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

export const IconAlignTopTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-top-twotone-rounded IconAlignTopTwotoneRounded"
    >
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

export const IconAlignTopSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-top-solid-rounded IconAlignTopSolidRounded"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignTopBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-top-bulk-rounded IconAlignTopBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignTopStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-top-stroke-sharp IconAlignTopStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
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

export const IconAlignTopSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-top-solid-sharp IconAlignTopSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlignTop: TheIconSelfPack = {
  name: 'AlignTop',
  StrokeRounded: IconAlignTopStrokeRounded,
  DuotoneRounded: IconAlignTopDuotoneRounded,
  TwotoneRounded: IconAlignTopTwotoneRounded,
  SolidRounded: IconAlignTopSolidRounded,
  BulkRounded: IconAlignTopBulkRounded,
  StrokeSharp: IconAlignTopStrokeSharp,
  SolidSharp: IconAlignTopSolidSharp,
};