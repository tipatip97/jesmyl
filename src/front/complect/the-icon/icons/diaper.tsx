import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 7.69231C2 7.04903 2 6.72738 2.04914 6.45923C2.27382 5.2332 3.2332 4.27382 4.45923 4.04914C4.72738 4 5.04903 4 5.69231 4H18.3077C18.951 4 19.2726 4 19.5408 4.04914C20.7668 4.27382 21.7262 5.2332 21.9509 6.45923C22 6.72738 22 7.04903 22 7.69231V10C22 15.5228 17.5228 20 12 20C6.47715 20 2 15.5228 2 10V7.69231Z',
  d2: 'M18 8H22',
  d3: 'M2 8H6',
  d4: 'M14.5 19.5V18.5C14.5 14.634 17.634 11.5 21.5 11.5',
  d5: 'M9.5 19.5V18.5C9.5 14.634 6.36599 11.5 2.5 11.5',
  d6: 'M2.04914 6.45923C2 6.72738 2 7.04903 2 7.69231V10L2.11182 11.5H2.50007C6.36606 11.5 9.50007 14.634 9.50007 18.5V19.685L12 20C12.8633 20 13.701 19.8906 14.5001 19.6849V18.5C14.5001 14.634 17.6341 11.5 21.5001 11.5H21.8883C21.9619 11.0107 22 10.5098 22 10V7.69231C22 7.04903 22 6.72738 21.9509 6.45923C21.7262 5.2332 20.7668 4.27382 19.5408 4.04914C19.2726 4 18.951 4 18.3077 4H5.69231C5.04903 4 4.72738 4 4.45923 4.04914C3.2332 4.27382 2.27382 5.2332 2.04914 6.45923Z',
  d7: 'M14.5 19.5V18.5C14.5 14.634 17.634 11.5 21.5 11.5M9.5 19.5V18.5C9.5 14.634 6.36599 11.5 2.5 11.5',
  d8: 'M5.61218 3.25001H18.3878C18.9538 3.24988 19.3395 3.24979 19.676 3.31145C21.2085 3.5923 22.4077 4.79153 22.6886 6.32407C22.7361 6.58343 22.7469 6.87206 22.7494 7.25H18C17.5858 7.25 17.25 7.58579 17.25 8C17.25 8.41421 17.5858 8.75 18 8.75H22.75V7.43754L22.75 7.61223L22.75 10C22.75 10.2521 22.7413 10.5022 22.7243 10.75H21.5C17.2198 10.75 13.75 14.2198 13.75 18.5V20.6083C13.1805 20.7015 12.5959 20.75 12 20.75C11.4041 20.75 10.8195 20.7015 10.25 20.6083V18.5C10.25 14.2198 6.78016 10.75 2.49996 10.75H1.27576C1.25869 10.5022 1.25001 10.2521 1.25001 10L1.25 8.75H5.99998C6.4142 8.75 6.74998 8.41421 6.74998 8C6.74998 7.58579 6.4142 7.25 5.99998 7.25H1.25065C1.25307 6.87206 1.2639 6.58343 1.31143 6.32407C1.59228 4.79153 2.79151 3.5923 4.32405 3.31145C4.66049 3.24979 5.04619 3.24988 5.61218 3.25001ZM1.48584 12.25C2.29331 16.0418 5.09998 19.0937 8.74996 20.25V18.5C8.74996 15.0482 5.95174 12.25 2.49996 12.25H1.48584ZM21.5 12.25H22.5142C21.7067 16.0418 18.9 19.0937 15.25 20.25V18.5C15.25 15.0482 18.0482 12.25 21.5 12.25Z',
  d9: 'M5.6122 3.25001H18.3878C18.9538 3.24988 19.3395 3.24979 19.676 3.31145C21.2085 3.5923 22.4077 4.79153 22.6886 6.32407C22.7503 6.66051 22.7502 7.04622 22.75 7.61223L22.75 10C22.75 15.9371 17.9371 20.75 12 20.75C6.06296 20.75 1.25002 15.9371 1.25002 10L1.25001 7.6122C1.24988 7.04621 1.24979 6.66051 1.31145 6.32407C1.5923 4.79153 2.79153 3.5923 4.32407 3.31145C4.66051 3.24979 5.04621 3.24988 5.6122 3.25001Z',
  d10: 'M17.25 8C17.25 7.58579 17.5858 7.25 18 7.25H22.7494C22.7501 7.36233 22.7501 7.48254 22.75 7.61223L22.75 8.75H18C17.5858 8.75 17.25 8.41421 17.25 8Z',
  d11: 'M6 7.25C6.41421 7.25 6.75 7.58579 6.75 8C6.75 8.41421 6.41421 8.75 6 8.75H1.25002L1.25001 7.6122L1.25001 7.6122C1.24998 7.48253 1.24995 7.36232 1.25067 7.25H6Z',
  d12: 'M13.75 18.5C13.75 14.2198 17.2198 10.75 21.5 10.75H22.7243C22.6891 11.2606 22.6182 11.7615 22.5142 12.25H21.5C18.0482 12.25 15.25 15.0482 15.25 18.5V20.25C14.764 20.404 14.2631 20.5243 13.75 20.6083V18.5Z',
  d13: 'M2.49997 10.75C6.78018 10.75 10.25 14.2198 10.25 18.5V20.6083C9.73684 20.5243 9.23593 20.4039 8.74997 20.25V18.5C8.74997 15.0482 5.95175 12.25 2.49997 12.25H1.48585C1.38182 11.7615 1.31097 11.2606 1.27578 10.75H2.49997Z',
  d14: 'M22 4H2V10C2 15.5228 6.47715 20 12 20C17.5228 20 22 15.5228 22 10V4Z',
  d15: 'M17 8H22',
  d16: 'M2 8H7',
  d17: 'M22.75 10C22.75 10.2521 22.7413 10.5022 22.7242 10.75H21.5C17.2198 10.75 13.75 14.2198 13.75 18.5V20.6083C13.1805 20.7015 12.5959 20.75 12 20.75C11.4041 20.75 10.8196 20.7015 10.25 20.6083V18.5C10.25 14.2198 6.78025 10.75 2.50005 10.75H1.27576C1.25868 10.5022 1.25 10.2521 1.25 10V8.75H7V7.25H1.25V3.25H22.75V7.25H17V8.75H22.75V10ZM1.48584 12.25C2.29332 16.0418 5.10003 19.0937 8.75005 20.25V18.5C8.75005 15.0482 5.95183 12.25 2.50005 12.25H1.48584ZM21.5 12.25H22.5142C21.7067 16.0418 18.9 19.0937 15.25 20.25V18.5C15.25 15.0482 18.0482 12.25 21.5 12.25Z',
};

export const IconDiaperStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diaper-stroke-rounded IconDiaperStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDiaperDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diaper-duotone-rounded IconDiaperDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconDiaperTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diaper-twotone-rounded IconDiaperTwotoneRounded"
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiaperSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diaper-solid-rounded IconDiaperSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiaperBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diaper-bulk-rounded IconDiaperBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiaperStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diaper-stroke-sharp IconDiaperStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiaperSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diaper-solid-sharp IconDiaperSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDiaper: TheIconSelfPack = {
  name: 'Diaper',
  StrokeRounded: IconDiaperStrokeRounded,
  DuotoneRounded: IconDiaperDuotoneRounded,
  TwotoneRounded: IconDiaperTwotoneRounded,
  SolidRounded: IconDiaperSolidRounded,
  BulkRounded: IconDiaperBulkRounded,
  StrokeSharp: IconDiaperStrokeSharp,
  SolidSharp: IconDiaperSolidSharp,
};