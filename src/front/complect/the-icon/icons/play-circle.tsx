import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.4531 12.3948C15.3016 13.0215 14.5857 13.4644 13.1539 14.3502C11.7697 15.2064 11.0777 15.6346 10.5199 15.4625C10.2893 15.3913 10.0793 15.2562 9.90982 15.07C9.5 14.6198 9.5 13.7465 9.5 12C9.5 10.2535 9.5 9.38018 9.90982 8.92995C10.0793 8.74381 10.2893 8.60868 10.5199 8.53753C11.0777 8.36544 11.7697 8.79357 13.1539 9.64983C14.5857 10.5356 15.3016 10.9785 15.4531 11.6052C15.5156 11.8639 15.5156 12.1361 15.4531 12.3948Z',
  d2: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.1539 14.3502C14.5857 13.4644 15.3016 13.0215 15.4531 12.3948C15.5156 12.1361 15.5156 11.8639 15.4531 11.6052C15.3016 10.9785 14.5857 10.5356 13.1539 9.64983C11.7697 8.79357 11.0777 8.36544 10.5199 8.53753C10.2893 8.60868 10.0793 8.74381 9.90982 8.92995C9.5 9.38018 9.5 10.2535 9.5 12C9.5 13.7465 9.5 14.6198 9.90982 15.07C10.0793 15.2562 10.2893 15.3913 10.5199 15.4625C11.0777 15.6346 11.7697 15.2064 13.1539 14.3502Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM13.507 8.98648L13.5886 9.03697L13.5886 9.03698C14.2703 9.45868 14.8387 9.81024 15.2505 10.1378C15.6745 10.475 16.0479 10.8736 16.1821 11.4292C16.2726 11.8037 16.2726 12.1966 16.1821 12.5711C16.0479 13.1266 15.6745 13.5252 15.2505 13.8624C14.8387 14.19 14.2703 14.5416 13.5886 14.9633L13.5886 14.9633L13.507 15.0138L13.5069 15.0138C12.8503 15.4201 12.2993 15.7609 11.8422 15.9726C11.3786 16.1873 10.85 16.3494 10.2988 16.1793C9.93447 16.0668 9.6108 15.8559 9.35518 15.575C8.98329 15.1665 8.86071 14.6325 8.80525 14.0988C8.74997 13.567 8.74999 12.8798 8.75 12.0431V12.0431V11.9571V11.9571C8.74999 11.1204 8.74997 10.4333 8.80525 9.90146C8.86071 9.36777 8.98329 8.8338 9.35518 8.42523C9.6108 8.14441 9.93447 7.93342 10.2988 7.82101C10.85 7.65091 11.3786 7.81293 11.8422 8.02763C12.2993 8.23934 12.8503 8.58022 13.507 8.98648Z',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25Z',
  d5: 'M13.5886 9.03698L13.507 8.98648C12.8503 8.58022 12.2993 8.23934 11.8422 8.02763C11.3786 7.81293 10.85 7.65091 10.2988 7.82101C9.93447 7.93342 9.6108 8.14441 9.35518 8.42523C8.98329 8.8338 8.86071 9.36777 8.80525 9.90146C8.74997 10.4333 8.74999 11.1204 8.75 11.9571V12.0431C8.74999 12.8798 8.74997 13.567 8.80525 14.0988C8.86071 14.6325 8.98329 15.1665 9.35518 15.575C9.6108 15.8559 9.93447 16.0668 10.2988 16.1793C10.85 16.3494 11.3786 16.1873 11.8422 15.9726C12.2993 15.7609 12.8503 15.4201 13.507 15.0138L13.5886 14.9633C14.2703 14.5416 14.8387 14.19 15.2505 13.8625C15.6745 13.5252 16.0479 13.1266 16.1821 12.5711C16.2726 12.1966 16.2726 11.8037 16.1821 11.4292C16.0479 10.8736 15.6745 10.475 15.2505 10.1378C14.8387 9.81024 14.2703 9.45867 13.5886 9.03698Z',
  d6: 'M9.5 16V8L16 12L9.5 16Z',
  d7: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.75 12L9.25 7.5V16.5L16.75 12Z',
} as const;

export const IconPlayCircleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-circle-stroke-rounded IconPlayCircleStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayCircleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-circle-duotone-rounded IconPlayCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayCircleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-circle-twotone-rounded IconPlayCircleTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayCircleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-circle-solid-rounded IconPlayCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayCircleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-circle-bulk-rounded IconPlayCircleBulkRounded"
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

export const IconPlayCircleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-circle-stroke-sharp IconPlayCircleStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlayCircleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="play-circle-solid-sharp IconPlayCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPlayCircle: TheIconSelfPack = {
  name: 'PlayCircle',
  StrokeRounded: IconPlayCircleStrokeRounded,
  DuotoneRounded: IconPlayCircleDuotoneRounded,
  TwotoneRounded: IconPlayCircleTwotoneRounded,
  SolidRounded: IconPlayCircleSolidRounded,
  BulkRounded: IconPlayCircleBulkRounded,
  StrokeSharp: IconPlayCircleStrokeSharp,
  SolidSharp: IconPlayCircleSolidSharp,
};