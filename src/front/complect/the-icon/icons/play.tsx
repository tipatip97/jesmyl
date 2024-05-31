import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z',
  d2: 'M5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C18.9635 11.4312 19 11.7156 19 12',
  d3: 'M13.9405 6.33706C15.5735 7.26475 16.8567 7.99375 17.7709 8.66154C18.6913 9.33392 19.3721 10.0367 19.6159 10.9632C19.7947 11.6427 19.7947 12.3574 19.6159 13.0369C19.3721 13.9634 18.6913 14.6662 17.7709 15.3386C16.8567 16.0064 15.5735 16.7354 13.9406 17.663L13.9406 17.663C12.3632 18.5592 11.033 19.3149 10.0232 19.7444C9.0053 20.1774 8.07729 20.3968 7.17536 20.1412C6.51252 19.9534 5.90941 19.5969 5.42356 19.1067C4.76419 18.4414 4.49951 17.522 4.37429 16.4154C4.24998 15.317 4.24999 13.879 4.25 12.0502V12.0502V11.95V11.95C4.24999 10.1211 4.24998 8.68315 4.37429 7.5847C4.49951 6.47816 4.76419 5.55867 5.42356 4.89341C5.90941 4.40323 6.51252 4.04672 7.17536 3.8589C8.07729 3.60331 9.0053 3.82275 10.0232 4.25571C11.033 4.68522 12.3632 5.4409 13.9405 6.33706Z',
  d4: 'M17.7713 8.66278C18.6918 9.33515 19.3725 10.0379 19.6164 10.9644C19.7952 11.6439 19.7952 12.3587 19.6164 13.0381C19.3725 13.9647 18.6918 14.6674 17.7713 15.3398C16.8572 16.0076 15.574 16.7366 13.9411 17.6643L13.941 17.6643C12.3637 18.5604 11.0335 19.3161 10.0237 19.7456C9.00576 20.1786 8.07776 20.398 7.17582 20.1425C6.51298 19.9546 5.90987 19.5981 5.42403 19.1079C4.76465 18.4427 4.49997 17.5232 4.37475 16.4167C4.29889 15.7463 4.26933 14.9495 4.25781 14.0146L16.1055 7.58594C16.7533 7.97233 17.3094 8.32537 17.7713 8.66278Z',
  d5: 'M5 20V4L19 12L5 20Z',
  d6: 'M4.62355 3.35132C4.85479 3.21713 5.13998 3.21617 5.3721 3.34882L19.3721 11.3488C19.6058 11.4824 19.75 11.7309 19.75 12C19.75 12.2691 19.6058 12.5177 19.3721 12.6512L5.3721 20.6512C5.13998 20.7838 4.85479 20.7829 4.62355 20.6487C4.39232 20.5145 4.25 20.2674 4.25 20V4C4.25 3.73265 4.39232 3.48551 4.62355 3.35132Z',
} as const;

export const IconPlayStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-stroke-rounded IconPlayStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-duotone-rounded IconPlayDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-twotone-rounded IconPlayTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlaySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-solid-rounded IconPlaySolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-bulk-rounded IconPlayBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-stroke-sharp IconPlayStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlaySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-solid-sharp IconPlaySolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPlay: TheIconSelfPack = {
  name: 'Play',
  StrokeRounded: IconPlayStrokeRounded,
  DuotoneRounded: IconPlayDuotoneRounded,
  TwotoneRounded: IconPlayTwotoneRounded,
  SolidRounded: IconPlaySolidRounded,
  BulkRounded: IconPlayBulkRounded,
  StrokeSharp: IconPlayStrokeSharp,
  SolidSharp: IconPlaySolidSharp,
};