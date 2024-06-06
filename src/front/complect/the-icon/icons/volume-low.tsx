import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M19 9C19.6254 9.81968 20 10.8634 20 12C20 13.1366 19.6254 14.1803 19 15',
  d2: 'M16 14.8135V9.18646C16 6.04126 16 4.46866 15.0747 4.0773C14.1494 3.68593 13.0603 4.79793 10.8823 7.02192C9.75439 8.17365 9.11085 8.42869 7.50604 8.42869C6.10257 8.42869 5.40084 8.42869 4.89675 8.77262C3.85035 9.48655 4.00852 10.882 4.00852 12C4.00852 13.118 3.85035 14.5134 4.89675 15.2274C5.40084 15.5713 6.10257 15.5713 7.50604 15.5713C9.11085 15.5713 9.75439 15.8264 10.8823 16.9781C13.0603 19.2021 14.1494 20.3141 15.0747 19.9227C16 19.5313 16 17.9587 16 14.8135Z',
  d3: 'M18.3935 8.20504C18.8325 7.87003 19.4601 7.95439 19.7951 8.39347C20.5519 9.38539 21.0001 10.6418 21.0001 12.0001C21.0001 13.3583 20.5519 14.6147 19.7951 15.6066C19.4601 16.0457 18.8325 16.1301 18.3935 15.7951C17.9544 15.4601 17.87 14.8325 18.205 14.3935C18.699 13.746 19.0001 12.9149 19.0001 12.0001C19.0001 11.0852 18.699 10.2541 18.205 9.60664C17.87 9.16756 17.9544 8.54004 18.3935 8.20504Z',
  d4: 'M12.9916 3.9756C13.6784 3.44801 14.4957 3.01957 15.367 3.38808C16.2302 3.75318 16.5076 4.63267 16.6274 5.49785C16.7502 6.38459 16.7502 7.60557 16.7502 9.12365V14.8794C16.7502 16.3975 16.7502 17.6185 16.6274 18.5052C16.5076 19.3704 16.2302 20.2499 15.367 20.615C14.4957 20.9835 13.6784 20.5551 12.9916 20.0275C12.2892 19.488 11.3966 18.5765 10.3467 17.5044L10.3466 17.5044C9.80717 16.9535 9.44921 16.6873 9.08663 16.5374C8.72221 16.3868 8.27914 16.3229 7.50619 16.3229C6.83768 16.3229 6.23963 16.3229 5.78679 16.2758C5.31184 16.2265 4.87088 16.1191 4.47421 15.8485C3.7184 15.3328 3.42917 14.5777 3.31957 13.8838C3.23785 13.3663 3.24723 12.7981 3.25479 12.3405V11.6626C3.24723 11.205 3.23785 10.6368 3.31957 10.1193C3.42917 9.42536 3.7184 8.67029 4.47421 8.15462C4.87088 7.88398 5.31184 7.77657 5.78679 7.72723C6.23963 7.68019 6.83768 7.68021 7.50619 7.68023C8.27914 7.68023 8.72221 7.61628 9.08663 7.46563C9.44922 7.31574 9.80717 7.04954 10.3466 6.49869L10.3466 6.49869C11.3966 5.42655 12.2892 4.51511 12.9916 3.9756Z',
  d5: 'M18.9873 9.00195C19.6117 9.82163 19.9857 10.8654 19.9857 12.002C19.9857 13.1386 19.6117 14.1823 18.9873 15.002',
  d6: 'M4.05543 15.5152L8.97677 15.4876L15.9149 19.9918C15.9812 20.0355 15.9576 19.9438 15.9576 19.8643V12.0074V4.13884C15.9576 4.05925 15.9812 3.96758 15.9149 4.01131L8.97677 8.51554L4.05543 8.48788C4.00039 8.48788 3.98535 8.5307 3.98535 8.58592V12.0045V15.4172C3.98535 15.4724 4.00039 15.5152 4.05543 15.5152Z',
  d7: 'M18.7501 12.0001C18.7501 11.0853 18.4491 10.2542 17.9551 9.60673L19.5451 8.39355C20.3019 9.38548 20.7501 10.6419 20.7501 12.0001C20.7501 13.3584 20.3019 14.6148 19.5451 15.6067L17.9551 14.3936C18.4491 13.7461 18.7501 12.915 18.7501 12.0001Z',
  d8: 'M16.3587 3.34171C16.5995 3.47317 16.7493 3.72564 16.7493 4V20C16.7493 20.2744 16.5995 20.5268 16.3587 20.6583C16.1179 20.7898 15.8245 20.7792 15.5937 20.6309L8.77971 16.25H4C3.58579 16.25 3.25 15.9142 3.25 15.5V8.5C3.25 8.08579 3.58579 7.75 4 7.75H8.77971L15.5937 3.36914C15.8245 3.22076 16.1179 3.21024 16.3587 3.34171Z',
};

export const IconVolumeLowStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-low-stroke-rounded IconVolumeLowStrokeRounded"
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

export const IconVolumeLowDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-low-duotone-rounded IconVolumeLowDuotoneRounded"
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
        fill="var(--icon-fill)" 
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

export const IconVolumeLowTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-low-twotone-rounded IconVolumeLowTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconVolumeLowSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-low-solid-rounded IconVolumeLowSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconVolumeLowBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-low-bulk-rounded IconVolumeLowBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVolumeLowStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-low-stroke-sharp IconVolumeLowStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVolumeLowSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-low-solid-sharp IconVolumeLowSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfVolumeLow: TheIconSelfPack = {
  name: 'VolumeLow',
  StrokeRounded: IconVolumeLowStrokeRounded,
  DuotoneRounded: IconVolumeLowDuotoneRounded,
  TwotoneRounded: IconVolumeLowTwotoneRounded,
  SolidRounded: IconVolumeLowSolidRounded,
  BulkRounded: IconVolumeLowBulkRounded,
  StrokeSharp: IconVolumeLowStrokeSharp,
  SolidSharp: IconVolumeLowSolidSharp,
};