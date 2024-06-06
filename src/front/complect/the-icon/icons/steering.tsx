import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M18.9181 10.4125C17.9491 10.8367 16.4851 11.218 15.1595 10.7168C13.2638 10 12.2893 10 12 10C11.7107 10 10.7362 10 8.84049 10.7168C7.51492 11.218 6.05092 10.8367 5.08186 10.4125M19 13.2548C16.8546 13.6631 13.6079 14.878 13.5238 19M10.4762 19C10.3921 14.878 7.14544 13.6631 5 13.2548',
  d3: 'M12.008 13L11.999 13',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM12 9.25C11.6295 9.25 10.5641 9.26325 8.57523 10.0153C7.55851 10.3997 6.36632 10.1406 5.46315 9.76002C5.25859 9.67383 5.02637 9.68268 4.82897 9.78419C4.63157 9.88569 4.48927 10.0694 4.44036 10.2859C4.31567 10.838 4.25 11.4118 4.25 12C4.25 12.4821 4.29412 12.9546 4.37873 13.4135C4.43436 13.7151 4.66807 13.9525 4.96882 14.0128C5.97308 14.2142 7.13598 14.5922 8.0553 15.3306C8.94576 16.0458 9.6488 17.1293 9.72164 18.864C9.73589 19.2033 9.97638 19.4907 10.3079 19.5646C10.8532 19.6861 11.4196 19.75 12 19.75C12.5804 19.75 13.1468 19.6861 13.6921 19.5646C14.0236 19.4907 14.2641 19.2033 14.2784 18.864C14.3512 17.1293 15.0542 16.0458 15.9447 15.3306C16.864 14.5922 18.0269 14.2142 19.0312 14.0128C19.3319 13.9525 19.5656 13.7151 19.6213 13.4135C19.7059 12.9546 19.75 12.4821 19.75 12C19.75 11.4118 19.6843 10.838 19.5596 10.2859C19.5107 10.0694 19.3684 9.88569 19.171 9.78419C18.9736 9.68268 18.7414 9.67383 18.5369 9.76002C17.6337 10.1406 16.4415 10.3997 15.4248 10.0153C13.4359 9.26325 12.3705 9.25 12 9.25Z',
  d5: 'M13.508 13C13.508 13.8284 12.8384 14.5 12.0125 14.5L12.0035 14.5C11.1776 14.5 10.508 13.8284 10.508 13C10.508 12.1716 11.1776 11.5 12.0035 11.5L12.0125 11.5C12.8384 11.5 13.508 12.1716 13.508 13Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d7: 'M12 9.25C11.6295 9.25 10.5641 9.26325 8.57523 10.0153C7.55851 10.3997 6.36632 10.1406 5.46315 9.76002C5.25859 9.67383 5.02637 9.68268 4.82897 9.78419C4.63157 9.88569 4.48927 10.0694 4.44036 10.2859C4.31567 10.838 4.25 11.4118 4.25 12C4.25 12.4821 4.29412 12.9546 4.37873 13.4135C4.43436 13.7151 4.66807 13.9525 4.96882 14.0128C5.97308 14.2142 7.13598 14.5922 8.0553 15.3306C8.94576 16.0458 9.6488 17.1293 9.72164 18.864C9.73589 19.2033 9.97638 19.4907 10.3079 19.5646C10.8532 19.6861 11.4196 19.75 12 19.75C12.5804 19.75 13.1468 19.6861 13.6921 19.5646C14.0236 19.4907 14.2641 19.2033 14.2784 18.864C14.3512 17.1293 15.0542 16.0458 15.9447 15.3306C16.864 14.5922 18.0269 14.2142 19.0312 14.0128C19.3319 13.9525 19.5656 13.7151 19.6213 13.4135C19.7059 12.9546 19.75 12.4821 19.75 12C19.75 11.4118 19.6843 10.838 19.5596 10.2859C19.5107 10.0694 19.3684 9.88569 19.171 9.78419C18.9736 9.68268 18.7414 9.67383 18.5369 9.76002C17.6337 10.1406 16.4415 10.3997 15.4248 10.0153C13.4359 9.26325 12.3705 9.25 12 9.25ZM12.0123 14.5C12.8382 14.5 13.5078 13.8284 13.5078 13C13.5078 12.1716 12.8382 11.5 12.0123 11.5H12.0033C11.1774 11.5 10.5078 12.1716 10.5078 13C10.5078 13.8284 11.1774 14.5 12.0033 14.5H12.0123Z',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.84049 10.7168C10.7362 10 11.7107 10 12 10C12.2893 10 13.2638 10 15.1595 10.7168C16.4478 11.2039 17.8668 10.8574 18.8352 10.4482C18.9482 10.9473 19.0078 11.4667 19.0078 12C19.0078 12.4357 18.968 12.8622 18.8918 13.2759C16.7767 13.6985 13.6927 14.9127 13.5289 18.8343C13.0392 18.9428 12.5302 19 12.0078 19C11.4798 19 10.9655 18.9415 10.4709 18.8307C10.3059 14.922 7.23839 13.7046 5.12441 13.2791C5.04783 12.8644 5.00781 12.4369 5.00781 12C5.00781 11.4688 5.06697 10.9515 5.17907 10.4542C6.14708 10.8608 7.55852 11.2015 8.84049 10.7168Z',
  d9: 'M13.25 13C13.25 13.6904 12.6924 14.25 12.0045 14.25H11.9955C11.3076 14.25 10.75 13.6904 10.75 13C10.75 12.3096 11.3076 11.75 11.9955 11.75L12.0045 11.75C12.6924 11.75 13.25 12.3096 13.25 13Z',
};

export const IconSteeringStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steering-stroke-rounded IconSteeringStrokeRounded"
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

export const IconSteeringDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steering-duotone-rounded IconSteeringDuotoneRounded"
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

export const IconSteeringTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steering-twotone-rounded IconSteeringTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSteeringSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steering-solid-rounded IconSteeringSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSteeringBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steering-bulk-rounded IconSteeringBulkRounded"
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

export const IconSteeringStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steering-stroke-sharp IconSteeringStrokeSharp"
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

export const IconSteeringSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steering-solid-sharp IconSteeringSolidSharp"
    >
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

export const iconPackOfSteering: TheIconSelfPack = {
  name: 'Steering',
  StrokeRounded: IconSteeringStrokeRounded,
  DuotoneRounded: IconSteeringDuotoneRounded,
  TwotoneRounded: IconSteeringTwotoneRounded,
  SolidRounded: IconSteeringSolidRounded,
  BulkRounded: IconSteeringBulkRounded,
  StrokeSharp: IconSteeringStrokeSharp,
  SolidSharp: IconSteeringSolidSharp,
};