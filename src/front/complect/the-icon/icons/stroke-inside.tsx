import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z',
  d2: 'M11 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V17C22 15.1144 22 14.1716 21.4142 13.5858C20.8284 13 19.8856 13 18 13L15 13C13.1144 13 12.1716 13 11.5858 12.4142C11 11.8284 11 10.8856 11 9V6C11 4.11438 11 3.17157 10.4142 2.58579C9.82843 2 8.88562 2 7 2L6 2C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6V13',
  d3: 'M18 22H8C6.99728 22 6.1723 22 5.4859 21.9608C6.91168 21.7286 8 20.4914 8 19C8 17.3431 6.65685 16 5 16C3.50859 16 2.27136 17.0883 2.03915 18.5141C2 17.8277 2 17.0027 2 16V6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2H7C8.88562 2 9.82843 2 10.4142 2.58579C11 3.17157 11 4.11438 11 6V9C11 10.8856 11 11.8284 11.5858 12.4142C12.1716 13 13.1144 13 15 13L18 13C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22Z',
  d4: 'M8.25 19.25C8.25 21.183 6.683 22.75 4.75 22.75C2.817 22.75 1.25 21.183 1.25 19.25C1.25 17.317 2.817 15.75 4.75 15.75C6.683 15.75 8.25 17.317 8.25 19.25Z',
  d5: 'M9.29448 1.32992C9.92228 1.41432 10.4891 1.59999 10.9445 2.05546C11.4 2.51093 11.5857 3.07773 11.6701 3.70552C11.7501 4.3003 11.75 5.04954 11.75 5.94801L11.75 9C11.75 9.96402 11.7516 10.6116 11.8165 11.0946C11.8786 11.5561 11.9858 11.7536 12.1161 11.8839C12.2464 12.0142 12.4439 12.1214 12.9054 12.1835C13.3884 12.2484 14.036 12.25 15 12.25L18.052 12.25C18.9505 12.25 19.6997 12.2499 20.2945 12.3299C20.9223 12.4143 21.4891 12.6 21.9445 13.0555C22.4 13.5109 22.5857 14.0777 22.6701 14.7055C22.7501 15.3003 22.75 16.0495 22.75 16.948V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H9.74913C9.17012 22.75 8.88061 22.75 8.79324 22.6043C8.70586 22.4585 8.8583 22.1732 9.16317 21.6024C9.53769 20.9013 9.75 20.1004 9.75 19.25C9.75 16.4886 7.51143 14.25 4.75 14.25C3.89957 14.25 3.09873 14.4623 2.39759 14.8368C1.82685 15.1417 1.54147 15.2941 1.39574 15.2068C1.25 15.1194 1.25 14.8299 1.25 14.2509L1.25 5.94794C1.24997 5.04949 1.24995 4.30029 1.32992 3.70553C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32992C4.30029 1.24995 5.04955 1.24997 5.94801 1.25H7.05206C7.95052 1.24997 8.69972 1.24995 9.29448 1.32992Z',
  d6: 'M10 22H22V13H11V2L2 2V14',
  d7: 'M1.25 19.25C1.25 17.317 2.817 15.75 4.75 15.75C6.683 15.75 8.25 17.317 8.25 19.25C8.25 21.183 6.683 22.75 4.75 22.75C2.817 22.75 1.25 21.183 1.25 19.25Z',
  d8: 'M2 1.25C1.80109 1.25 1.61032 1.32902 1.46967 1.46967C1.32902 1.61032 1.25 1.80109 1.25 2V15.6793C2.15188 14.7952 3.38727 14.25 4.75 14.25C7.51142 14.25 9.75 16.4886 9.75 19.25C9.75 20.6127 9.20484 21.8481 8.32072 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22V13C22.75 12.5858 22.4142 12.25 22 12.25H11.75V2C11.75 1.58579 11.4142 1.25 11 1.25H2Z',
};

export const IconStrokeInsideStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-inside-stroke-rounded IconStrokeInsideStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconStrokeInsideDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-inside-duotone-rounded IconStrokeInsideDuotoneRounded"
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

export const IconStrokeInsideTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-inside-twotone-rounded IconStrokeInsideTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconStrokeInsideSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-inside-solid-rounded IconStrokeInsideSolidRounded"
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

export const IconStrokeInsideBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-inside-bulk-rounded IconStrokeInsideBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconStrokeInsideStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-inside-stroke-sharp IconStrokeInsideStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconStrokeInsideSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stroke-inside-solid-sharp IconStrokeInsideSolidSharp"
    >
      <path 
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

export const iconPackOfStrokeInside: TheIconSelfPack = {
  name: 'StrokeInside',
  StrokeRounded: IconStrokeInsideStrokeRounded,
  DuotoneRounded: IconStrokeInsideDuotoneRounded,
  TwotoneRounded: IconStrokeInsideTwotoneRounded,
  SolidRounded: IconStrokeInsideSolidRounded,
  BulkRounded: IconStrokeInsideBulkRounded,
  StrokeSharp: IconStrokeInsideStrokeSharp,
  SolidSharp: IconStrokeInsideSolidSharp,
};