import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16Z',
  d2: 'M17.5 5H19.9994C20.9422 5 21.4136 5 21.7065 5.29289C21.9994 5.58579 21.9994 6.05719 21.9994 7V9.5M16 11L21.5 5.5',
  d3: 'M6.49942 5H4C3.05719 5 2.58579 5 2.29289 5.29289C2 5.58579 2 6.05719 2 7V9.5M8 11.0006L2.49942 5.5',
  d4: 'M8.25 16.0001C8.25 13.9291 9.92893 12.2501 12 12.2501C14.0711 12.2501 15.75 13.9291 15.75 16.0001C15.75 18.0712 14.0711 19.7501 12 19.7501C9.92893 19.7501 8.25 18.0712 8.25 16.0001Z',
  d5: 'M4.19561 4.25001C4.21372 4.25001 4.23186 4.25001 4.25001 4.25001H6.74943C7.30172 4.25001 7.74943 4.69773 7.74943 5.25001C7.74943 5.8023 7.30172 6.25001 6.74943 6.25001H4.66364L8.95712 10.5435C9.34764 10.934 9.34764 11.5672 8.95712 11.9577C8.5666 12.3482 7.93343 12.3482 7.54291 11.9577L3.25001 7.66481V9.75001C3.25001 10.3023 2.8023 10.75 2.25001 10.75C1.69773 10.75 1.25001 10.3023 1.25001 9.75001V7.25001C1.25001 7.23186 1.25001 7.21372 1.25001 7.19561C1.24992 6.77154 1.24984 6.35941 1.29554 6.01949C1.34706 5.63629 1.47259 5.19902 1.8358 4.8358C2.19902 4.47259 2.63629 4.34706 3.01949 4.29554C3.35941 4.24984 3.77154 4.24992 4.19561 4.25001ZM20.75 7.66481V9.75001C20.75 10.3023 21.1977 10.75 21.75 10.75C22.3023 10.75 22.75 10.3023 22.75 9.75001V7.25001C22.75 7.23185 22.75 7.21371 22.75 7.19558C22.7501 6.77152 22.7502 6.3594 22.7045 6.0195C22.653 5.63629 22.5274 5.19902 22.1642 4.8358C21.801 4.47258 21.3637 4.34706 20.9805 4.29554C20.6406 4.24984 20.2285 4.24992 19.8044 4.25001C19.7863 4.25001 19.7682 4.25001 19.75 4.25001H17.2506C16.6983 4.25001 16.2506 4.69773 16.2506 5.25001C16.2506 5.8023 16.6983 6.25001 17.2506 6.25001H19.3364L15.0435 10.5429C14.653 10.9334 14.653 11.5666 15.0435 11.9571C15.434 12.3476 16.0672 12.3476 16.4577 11.9571L20.75 7.66481Z',
  d6: 'M17 5H22V10M15.4999 11.5L21.5191 5.48091',
  d7: 'M7 5H2V10M8.5 11.5L2.47086 5.47086',
  d8: 'M8.25 16C8.25 13.9289 9.92893 12.25 12 12.25C14.0711 12.25 15.75 13.9289 15.75 16C15.75 18.0711 14.0711 19.75 12 19.75C9.92893 19.75 8.25 18.0711 8.25 16Z',
  d9: 'M16.7502 4.25H22.7502V10.25H20.7502V7.66419L15.9572 12.4571L14.543 11.0429L19.3359 6.25H16.7502V4.25Z',
  d10: 'M1.25 4.24988H7.25V6.24988H4.66421L9.45711 11.0428L8.04289 12.457L3.25 7.66409V10.2499H1.25V4.24988Z',
};

export const IconSharingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sharing-stroke-rounded IconSharingStrokeRounded"
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

export const IconSharingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sharing-duotone-rounded IconSharingDuotoneRounded"
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

export const IconSharingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sharing-twotone-rounded IconSharingTwotoneRounded"
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

export const IconSharingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sharing-solid-rounded IconSharingSolidRounded"
    >
      <path 
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

export const IconSharingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sharing-bulk-rounded IconSharingBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSharingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sharing-stroke-sharp IconSharingStrokeSharp"
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
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSharingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sharing-solid-sharp IconSharingSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSharing: TheIconSelfPack = {
  name: 'Sharing',
  StrokeRounded: IconSharingStrokeRounded,
  DuotoneRounded: IconSharingDuotoneRounded,
  TwotoneRounded: IconSharingTwotoneRounded,
  SolidRounded: IconSharingSolidRounded,
  BulkRounded: IconSharingBulkRounded,
  StrokeSharp: IconSharingStrokeSharp,
  SolidSharp: IconSharingSolidSharp,
};