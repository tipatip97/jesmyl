import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.502 10.0023C17.3458 10.0023 18.3198 9.91895 18.801 10.7523C19.002 11.1004 19.002 11.5677 19.002 12.5023V13.5023C19.002 14.4369 19.002 14.9042 18.801 15.2523C18.3198 16.0857 17.3458 16.0023 16.502 16.0023C15.6581 16.0023 14.6841 16.0857 14.2029 15.2523C14.002 14.9042 14.002 14.4369 14.002 13.5023L14.002 12.5023C14.002 11.5677 14.002 11.1004 14.2029 10.7523C14.6841 9.91895 15.6581 10.0023 16.502 10.0023Z',
  d2: 'M7.50195 4.00232C8.34585 4.00232 9.31984 3.91895 9.80099 4.75232C10.002 5.10039 10.002 5.5677 10.002 6.50232L10.002 13.5023C10.002 14.4369 10.002 14.9042 9.80099 15.2523C9.31984 16.0857 8.34585 16.0023 7.50195 16.0023C6.65806 16.0023 5.68406 16.0857 5.20292 15.2523C5.00195 14.9042 5.00195 14.4369 5.00195 13.5023L5.00195 6.50232C5.00195 5.5677 5.00195 5.10039 5.20292 4.75232C5.68406 3.91895 6.65806 4.00232 7.50195 4.00232Z',
  d3: 'M22 20L2 20',
  d4: 'M7.5 4.00232C8.34389 4.00232 9.31789 3.91895 9.79904 4.75232C10 5.10039 10 5.5677 10 6.50232L10 13.5023C10 14.4369 10 14.9042 9.79904 15.2523C9.31789 16.0857 8.34389 16.0023 7.5 16.0023C6.65611 16.0023 5.68211 16.0857 5.20096 15.2523C5 14.9042 5 14.4369 5 13.5023L5 6.50232C5 5.5677 5 5.10039 5.20096 4.75232C5.68211 3.91895 6.65611 4.00232 7.5 4.00232Z',
  d5: 'M16.502 16.7523C16.858 16.7558 17.5102 16.7616 17.9372 16.6747C18.4904 16.562 19.0728 16.2815 19.4505 15.6273C19.6279 15.32 19.6939 14.9941 19.7238 14.6649C19.752 14.3536 19.752 13.9743 19.752 13.5345V12.47C19.752 12.0302 19.752 11.6509 19.7238 11.3396C19.6939 11.0104 19.6279 10.6845 19.4505 10.3773C19.0728 9.72299 18.4904 9.4425 17.9372 9.32983C17.5102 9.24287 16.858 9.24875 16.502 9.25226C16.1459 9.24875 15.4937 9.24287 15.0667 9.32983C14.5135 9.4425 13.9311 9.72299 13.5534 10.3773C13.376 10.6845 13.31 11.0104 13.2801 11.3396C13.2519 11.6509 13.2519 12.0302 13.252 12.47V12.47V13.5345V13.5345C13.2519 13.9743 13.2519 14.3536 13.2801 14.6649C13.31 14.9941 13.376 15.32 13.5534 15.6273C13.9311 16.2815 14.5135 16.562 15.0667 16.6747C15.4937 16.7616 16.1459 16.7558 16.502 16.7523Z',
  d6: 'M7.50196 16.7523C7.85802 16.7558 8.51023 16.7616 8.93719 16.6747C9.49038 16.562 10.0728 16.2815 10.4505 15.6273C10.6279 15.32 10.6939 14.9941 10.7238 14.6649C10.752 14.3536 10.752 13.9743 10.752 13.5345L10.752 6.47003C10.752 6.03024 10.752 5.6509 10.7238 5.33961C10.6939 5.01043 10.6279 4.68447 10.4505 4.37726C10.0728 3.72299 9.49038 3.4425 8.93718 3.32983C8.51023 3.24287 7.85802 3.24875 7.50195 3.25226C7.14588 3.24875 6.49368 3.24287 6.06672 3.32983C5.51353 3.4425 4.93114 3.72299 4.5534 4.37726C4.37603 4.68447 4.30997 5.01043 4.28014 5.33961C4.25192 5.65089 4.25194 6.03022 4.25195 6.47V6.47004V13.5345V13.5345C4.25194 13.9743 4.25192 14.3536 4.28014 14.6649C4.30997 14.9941 4.37603 15.32 4.5534 15.6273C4.93114 16.2815 5.51353 16.562 6.06672 16.6747C6.49368 16.7616 7.14589 16.7558 7.50196 16.7523Z',
  d7: 'M23 19.75C23 20.3023 22.5523 20.75 22 20.75L2 20.75C1.44771 20.75 1 20.3023 1 19.75C1 19.1977 1.44771 18.75 2 18.75L22 18.75C22.5523 18.75 23 19.1977 23 19.75Z',
  d8: 'M14 16L14 10L19 10.0039L19 16H14Z',
  d9: 'M5 16L5 4L10 4.00781L10 16H5Z',
  d10: 'M19 9.25391C19.4142 9.25391 19.75 9.58969 19.75 10.0039L19.75 16C19.75 16.414 19.4146 16.7497 19.0006 16.75L14.0006 16.7539C13.8016 16.7541 13.6107 16.6751 13.4699 16.5344C13.3291 16.3938 13.25 16.2029 13.25 16.0039L13.25 10.0039C13.25 9.80499 13.329 9.61423 13.4697 9.47358C13.6103 9.33292 13.8011 9.25391 14 9.25391L19 9.25391Z',
  d11: 'M10 3.25C10.4142 3.25 10.75 3.58579 10.75 4L10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16L4.25 4C4.25 3.80109 4.32902 3.61032 4.46967 3.46967C4.61032 3.32902 4.80109 3.25 5 3.25H10Z',
  d12: 'M2 18.75L22 18.75V20.75L2 20.75L2 18.75Z',
};

export const IconAlignBottomStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-bottom-stroke-rounded IconAlignBottomStrokeRounded"
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

export const IconAlignBottomDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-bottom-duotone-rounded IconAlignBottomDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignBottomTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-bottom-twotone-rounded IconAlignBottomTwotoneRounded"
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

export const IconAlignBottomSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-bottom-solid-rounded IconAlignBottomSolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignBottomBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-bottom-bulk-rounded IconAlignBottomBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconAlignBottomStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-bottom-stroke-sharp IconAlignBottomStrokeSharp"
    >
      <path 
        d={d.d8} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAlignBottomSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="align-bottom-solid-sharp IconAlignBottomSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfAlignBottom: TheIconSelfPack = {
  name: 'AlignBottom',
  StrokeRounded: IconAlignBottomStrokeRounded,
  DuotoneRounded: IconAlignBottomDuotoneRounded,
  TwotoneRounded: IconAlignBottomTwotoneRounded,
  SolidRounded: IconAlignBottomSolidRounded,
  BulkRounded: IconAlignBottomBulkRounded,
  StrokeSharp: IconAlignBottomStrokeSharp,
  SolidSharp: IconAlignBottomSolidSharp,
};