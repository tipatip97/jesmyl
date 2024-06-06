import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 14.8135V9.18646C18 6.04126 18 4.46866 17.074 4.0773C16.1481 3.68593 15.0583 4.79793 12.8787 7.02192C11.7499 8.17365 11.1059 8.42869 9.5 8.42869C8.3879 8.42869 7.02749 8.28131 6.33706 9.33566C6 9.85038 6 10.5669 6 12C6 13.4331 6 14.1496 6.33706 14.6643C7.02749 15.7187 8.3879 15.5713 9.5 15.5713C11.106 15.5713 11.7499 15.8264 12.8787 16.9781C15.0583 19.2021 16.1481 20.3141 17.074 19.9227C18 19.5313 18 17.9587 18 14.8135Z',
  d2: 'M6 12C6 10.5669 6 9.85038 6.33706 9.33566C7.02749 8.28131 8.3879 8.42869 9.5 8.42869C11.1059 8.42869 11.7499 8.17365 12.8787 7.02192C15.0583 4.79793 16.1481 3.68593 17.074 4.0773C18 4.46866 18 6.04126 18 9.18646V12',
  d3: 'M14.9916 3.9756C15.6784 3.44801 16.4957 3.01957 17.367 3.38808C18.2302 3.75318 18.5076 4.63267 18.6274 5.49785C18.7502 6.38459 18.7502 7.60557 18.7502 9.12365V14.8794C18.7502 16.3975 18.7502 17.6185 18.6274 18.5052C18.5076 19.3704 18.2302 20.2499 17.367 20.615C16.4957 20.9835 15.6784 20.5551 14.9916 20.0275C14.2892 19.488 13.3966 18.5765 12.3467 17.5044L12.3466 17.5044C11.8072 16.9535 11.4492 16.6873 11.0866 16.5374C10.7222 16.3868 10.2791 16.3229 9.50619 16.3229C8.83768 16.3229 8.23963 16.3229 7.78679 16.2758C7.31184 16.2265 6.87088 16.1191 6.47421 15.8485C5.7184 15.3328 5.42917 14.5777 5.31957 13.8838C5.23785 13.3663 5.24723 12.7981 5.25479 12.3405V11.6626C5.24723 11.205 5.23785 10.6368 5.31957 10.1193C5.42917 9.42536 5.7184 8.67029 6.47421 8.15462C6.87088 7.88398 7.31184 7.77657 7.78679 7.72723C8.23963 7.68019 8.83768 7.68021 9.50619 7.68023C10.2791 7.68023 10.7222 7.61628 11.0866 7.46563C11.4492 7.31574 11.8072 7.04954 12.3466 6.49869L12.3466 6.49869C13.3966 5.42655 14.2892 4.51511 14.9916 3.9756Z',
  d4: 'M6.07215 15.5138L11.0016 15.4861L17.9512 19.9903C18.0176 20.034 17.994 19.9424 17.994 19.8628V12.0059V4.13737C17.994 4.05779 18.0176 3.96612 17.9512 4.00985L11.0016 8.51407L6.07215 8.48641C6.01701 8.48641 6.00195 8.52923 6.00195 8.58446V12.003V15.4157C6.00195 15.4709 6.01701 15.5138 6.07215 15.5138Z',
  d5: 'M18.3587 3.34171C18.5995 3.47317 18.7493 3.72564 18.7493 4V20C18.7493 20.2744 18.5995 20.5268 18.3587 20.6583C18.1179 20.7898 17.8245 20.7792 17.5937 20.6309L10.7797 16.25H6C5.58579 16.25 5.25 15.9142 5.25 15.5V8.5C5.25 8.08579 5.58579 7.75 6 7.75H10.7797L17.5937 3.36914C17.8245 3.22076 18.1179 3.21024 18.3587 3.34171Z',
};

export const IconVolumeMute01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-mute-01-stroke-rounded IconVolumeMute01StrokeRounded"
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

export const IconVolumeMute01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-mute-01-duotone-rounded IconVolumeMute01DuotoneRounded"
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

export const IconVolumeMute01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-mute-01-twotone-rounded IconVolumeMute01TwotoneRounded"
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

export const IconVolumeMute01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-mute-01-solid-rounded IconVolumeMute01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVolumeMute01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-mute-01-bulk-rounded IconVolumeMute01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconVolumeMute01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-mute-01-stroke-sharp IconVolumeMute01StrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconVolumeMute01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="volume-mute-01-solid-sharp IconVolumeMute01SolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfVolumeMute01: TheIconSelfPack = {
  name: 'VolumeMute01',
  StrokeRounded: IconVolumeMute01StrokeRounded,
  DuotoneRounded: IconVolumeMute01DuotoneRounded,
  TwotoneRounded: IconVolumeMute01TwotoneRounded,
  SolidRounded: IconVolumeMute01SolidRounded,
  BulkRounded: IconVolumeMute01BulkRounded,
  StrokeSharp: IconVolumeMute01StrokeSharp,
  SolidSharp: IconVolumeMute01SolidSharp,
};