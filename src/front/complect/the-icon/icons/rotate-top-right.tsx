import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 15C7 18.2998 7 19.9497 8.02513 20.9749C9.05025 22 10.7002 22 14 22C17.2998 22 18.9497 22 19.9749 20.9749C21 19.9497 21 18.2998 21 15C21 11.7002 21 10.0503 19.9749 9.02513C18.9497 8 17.2998 8 14 8C10.7002 8 9.05025 8 8.02513 9.02513C7 10.0503 7 11.7002 7 15Z',
  d2: 'M9.57987 2L10.9256 3.11013C11.6419 3.70104 12 3.99649 12 4.36364L11 4.36364C7.22876 4.36364 5.34315 4.36364 4.17157 5.53521C3 6.70678 3 8.5924 3 12.3636V13',
  d3: 'M14.0558 7.25C15.6583 7.24998 16.9373 7.24997 17.9404 7.38483C18.9767 7.52415 19.8301 7.81966 20.5052 8.4948C21.1803 9.16994 21.4759 10.0233 21.6152 11.0596C21.75 12.0627 21.75 13.3417 21.75 14.9443V15.0557C21.75 16.6583 21.75 17.9373 21.6152 18.9404C21.4759 19.9767 21.1803 20.8301 20.5052 21.5052C19.8301 22.1803 18.9767 22.4759 17.9404 22.6152C16.9373 22.75 15.6583 22.75 14.0557 22.75H13.9443C12.3417 22.75 11.0627 22.75 10.0596 22.6152C9.02335 22.4759 8.16994 22.1803 7.4948 21.5052C6.81966 20.8301 6.52415 19.9767 6.38483 18.9404C6.24997 17.9373 6.24998 16.6583 6.25 15.0558V15.0557V14.9443V14.9443C6.24998 13.3417 6.24997 12.0627 6.38483 11.0596C6.52415 10.0233 6.81966 9.16994 7.4948 8.4948C8.16994 7.81966 9.02335 7.52415 10.0596 7.38483C11.0627 7.24997 12.3417 7.24998 13.9442 7.25H13.9443H14.0557H14.0558Z',
  d4: 'M9.05848 1.61367C9.40994 1.18764 10.0402 1.12718 10.4662 1.47864L11.8119 2.58877C11.8263 2.60065 11.8407 2.61252 11.8551 2.62438C12.1756 2.88865 12.4897 3.14769 12.7155 3.39183C12.9623 3.65863 13.25 4.0592 13.25 4.61366C13.25 4.87888 13.1446 5.13323 12.9571 5.32077C12.7696 5.50831 12.5152 5.61366 12.25 5.61366H11.25C9.33611 5.61366 8.0013 5.61579 6.99416 5.75119C6.01579 5.88273 5.4977 6.12333 5.12868 6.49234C4.75966 6.86136 4.51907 7.37946 4.38753 8.35782C4.25213 9.36496 4.25 10.6998 4.25 12.6137V13.25C4.25 13.8023 3.80229 14.25 3.25 14.25C2.69772 14.25 2.25 13.8023 2.25 13.25L2.25 12.5405C2.24997 10.717 2.24995 9.24728 2.40537 8.09133C2.56672 6.89118 2.91191 5.88069 3.71447 5.07813C4.51702 4.27557 5.52752 3.93038 6.72767 3.76903C7.60376 3.65124 8.66011 3.62274 9.91408 3.61585L9.19351 3.02142C8.76748 2.66997 8.70703 2.03969 9.05848 1.61367Z',
  d5: 'M7.5 9H20.5V22H7.5V9Z',
  d6: 'M10.5 2L13.4998 5H3.5V14',
  d7: 'M6.75 9C6.75 8.58579 7.08579 8.25 7.5 8.25H20.5C20.9142 8.25 21.25 8.58579 21.25 9V22C21.25 22.4142 20.9142 22.75 20.5 22.75H7.5C7.08579 22.75 6.75 22.4142 6.75 22V9Z',
  d8: 'M11.3357 1.25L14.457 4.54291C14.7429 4.82891 14.8285 5.25903 14.6737 5.63269C14.5189 6.00636 14.1543 6.25 13.7498 6.25H4.75V14.25H2.75V5.25C2.75 4.69771 3.19772 4.25 3.75 4.25H11.3357L9.92146 2.66417L11.3357 1.25Z',
};

export const IconRotateTopRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-right-stroke-rounded IconRotateTopRightStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconRotateTopRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-right-duotone-rounded IconRotateTopRightDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconRotateTopRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-right-twotone-rounded IconRotateTopRightTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateTopRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-right-solid-rounded IconRotateTopRightSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateTopRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-right-bulk-rounded IconRotateTopRightBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateTopRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-right-stroke-sharp IconRotateTopRightStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateTopRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-right-solid-sharp IconRotateTopRightSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRotateTopRight: TheIconSelfPack = {
  name: 'RotateTopRight',
  StrokeRounded: IconRotateTopRightStrokeRounded,
  DuotoneRounded: IconRotateTopRightDuotoneRounded,
  TwotoneRounded: IconRotateTopRightTwotoneRounded,
  SolidRounded: IconRotateTopRightSolidRounded,
  BulkRounded: IconRotateTopRightBulkRounded,
  StrokeSharp: IconRotateTopRightStrokeSharp,
  SolidSharp: IconRotateTopRightSolidSharp,
};