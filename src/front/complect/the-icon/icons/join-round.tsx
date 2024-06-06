import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V17C22 15.1144 22 14.1716 21.4142 13.5858C20.8284 13 19.8856 13 18 13L15 13C13.1144 13 12.1716 13 11.5858 12.4142C11 11.8284 11 10.8856 11 9V6C11 4.11438 11 3.17157 10.4142 2.58579C9.82843 2 8.88562 2 7 2L6 2C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6L2 8C2 14.5997 2 17.8995 4.05025 19.9497C6.10051 22 9.40034 22 16 22Z',
  d2: 'M22 18V17C22 15.1144 22 14.1716 21.4142 13.5858C20.8284 13 19.8856 13 18 13L15 13C13.1144 13 12.1716 13 11.5858 12.4142C11 11.8284 11 10.8856 11 9V6C11 4.11438 11 3.17157 10.4142 2.58579C9.82843 2 8.88562 2 7 2L6 2',
  d3: 'M9.29448 1.32991C9.92228 1.41432 10.4891 1.59999 10.9445 2.05546C11.4 2.51093 11.5857 3.07773 11.6701 3.70552C11.7501 4.3003 11.75 5.04951 11.75 5.94798V5.94801L11.75 9C11.75 9.96401 11.7516 10.6116 11.8165 11.0946C11.8786 11.5561 11.9858 11.7536 12.1161 11.8839C12.2464 12.0142 12.4439 12.1214 12.9054 12.1835C13.3884 12.2484 14.036 12.25 15 12.25L18.052 12.25H18.052C18.9505 12.25 19.6997 12.2499 20.2945 12.3299C20.9223 12.4143 21.4891 12.6 21.9445 13.0555C22.4 13.5109 22.5857 14.0777 22.6701 14.7055C22.7501 15.3003 22.75 16.0495 22.75 16.948V18.052C22.75 18.9505 22.7501 19.6997 22.6701 20.2945C22.5857 20.9223 22.4 21.4891 21.9445 21.9445C21.4891 22.4 20.9223 22.5857 20.2945 22.6701C19.6997 22.7501 18.9505 22.75 18.052 22.75H15.9415C12.6912 22.75 10.1752 22.75 8.21916 22.487C6.2298 22.2196 4.70763 21.6678 3.51993 20.4801C2.33222 19.2924 1.78044 17.7702 1.51297 15.7808C1.24999 13.8248 1.24999 11.3088 1.25 8.05851L1.25 5.948V5.94797C1.24997 5.04951 1.24995 4.3003 1.32991 3.70552C1.41432 3.07773 1.59999 2.51093 2.05546 2.05546C2.51093 1.59999 3.07773 1.41432 3.70552 1.32991C4.3003 1.24995 5.0495 1.24997 5.94797 1.25H5.948H7.052H7.05203C7.9505 1.24997 8.69971 1.24995 9.29448 1.32991Z',
  d4: 'M12 21.9998H22V13H14C12.3431 13 11 11.6569 11 10V2H2V11.9998C2 17.5226 6.47715 21.9998 12 21.9998Z',
  d5: 'M11.75 10C11.75 11.2426 12.7574 12.25 14 12.25H22.75V22.7498H12C6.06294 22.7498 1.25 17.9368 1.25 11.9998V1.25H11.75V10Z',
};

export const IconJoinRoundStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="join-round-stroke-rounded IconJoinRoundStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinRoundDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="join-round-duotone-rounded IconJoinRoundDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconJoinRoundTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="join-round-twotone-rounded IconJoinRoundTwotoneRounded"
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

export const IconJoinRoundSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="join-round-solid-rounded IconJoinRoundSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinRoundBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="join-round-bulk-rounded IconJoinRoundBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinRoundStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="join-round-stroke-sharp IconJoinRoundStrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJoinRoundSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="join-round-solid-sharp IconJoinRoundSolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfJoinRound: TheIconSelfPack = {
  name: 'JoinRound',
  StrokeRounded: IconJoinRoundStrokeRounded,
  DuotoneRounded: IconJoinRoundDuotoneRounded,
  TwotoneRounded: IconJoinRoundTwotoneRounded,
  SolidRounded: IconJoinRoundSolidRounded,
  BulkRounded: IconJoinRoundBulkRounded,
  StrokeSharp: IconJoinRoundStrokeSharp,
  SolidSharp: IconJoinRoundSolidSharp,
};