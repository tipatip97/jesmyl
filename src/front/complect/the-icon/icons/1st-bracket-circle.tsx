import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 8C7.7945 8.85994 7 10.3304 7 12C7 13.6696 7.7945 15.1401 9 16M15 8C16.2055 8.85994 17 10.3304 17 12C17 13.6696 16.2055 15.1401 15 16',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM9.58073 8.81417C10.0303 8.49344 10.1348 7.86896 9.81409 7.41935C9.49337 6.96973 8.86888 6.86525 8.41927 7.18598C6.94665 8.23647 6 10.0123 6 12.0001C6 13.9878 6.94665 15.7637 8.41927 16.8142C8.86888 17.1349 9.49337 17.0304 9.81409 16.5808C10.1348 16.1312 10.0303 15.5067 9.58073 15.186C8.64235 14.5166 8 13.3515 8 12.0001C8 10.6487 8.64235 9.48356 9.58073 8.81417ZM15.5807 7.18598C15.1311 6.86525 14.5066 6.96973 14.1859 7.41935C13.8652 7.86896 13.9697 8.49344 14.4193 8.81417C15.3576 9.48356 16 10.6487 16 12.0001C16 13.3515 15.3576 14.5166 14.4193 15.186C13.9697 15.5067 13.8652 16.1312 14.1859 16.5808C14.5066 17.0304 15.1311 17.1349 15.5807 16.8142C17.0533 15.7637 18 13.9878 18 12.0001C18 10.0123 17.0533 8.23647 15.5807 7.18598Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M9.8141 7.41935C10.1348 7.86896 10.0303 8.49344 9.58073 8.81417C8.64235 9.48356 8 10.6487 8 12.0001C8 13.3515 8.64235 14.5166 9.58073 15.186C10.0303 15.5067 10.1348 16.1312 9.8141 16.5808C9.49337 17.0304 8.86888 17.1349 8.41927 16.8142C6.94665 15.7637 6 13.9878 6 12.0001C6 10.0123 6.94665 8.23647 8.41927 7.18598C8.86888 6.86525 9.49337 6.96973 9.8141 7.41935ZM14.1859 7.41935C14.5066 6.96973 15.1311 6.86525 15.5807 7.18598C17.0533 8.23647 18 10.0123 18 12.0001C18 13.9878 17.0533 15.7637 15.5807 16.8142C15.1311 17.1349 14.5066 17.0304 14.1859 16.5808C13.8652 16.1312 13.9697 15.5067 14.4193 15.186C15.3576 14.5166 16 13.3515 16 12.0001C16 10.6487 15.3576 9.48356 14.4193 8.81417C13.9697 8.49344 13.8652 7.86896 14.1859 7.41935Z',
  d5: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.5 11.9996C8.5 10.6483 9.14235 9.48313 10.0807 8.81374L8.91927 7.18555C7.44665 8.23603 6.5 10.0119 6.5 11.9996C6.5 13.9874 7.44665 15.7633 8.91927 16.8137L10.0807 15.1855C9.14235 14.5162 8.5 13.351 8.5 11.9996ZM17.5 11.9996C17.5 10.0119 16.5533 8.23603 15.0807 7.18555L13.9193 8.81374C14.8576 9.48313 15.5 10.6483 15.5 11.9996C15.5 13.351 14.8576 14.5162 13.9193 15.1855L15.0807 16.8137C16.5533 15.7633 17.5 13.9874 17.5 11.9996Z',
};

export const Icon1stBracketCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-circle-stroke-rounded Icon1stBracketCircleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const Icon1stBracketCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-circle-duotone-rounded Icon1stBracketCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const Icon1stBracketCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-circle-twotone-rounded Icon1stBracketCircleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const Icon1stBracketCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-circle-solid-rounded Icon1stBracketCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon1stBracketCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-circle-bulk-rounded Icon1stBracketCircleBulkRounded"
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

export const Icon1stBracketCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-circle-stroke-sharp Icon1stBracketCircleStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const Icon1stBracketCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-circle-solid-sharp Icon1stBracketCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOf1stBracketCircle: TheIconSelfPack = {
  name: '1stBracketCircle',
  StrokeRounded: Icon1stBracketCircleStrokeRounded,
  DuotoneRounded: Icon1stBracketCircleDuotoneRounded,
  TwotoneRounded: Icon1stBracketCircleTwotoneRounded,
  SolidRounded: Icon1stBracketCircleSolidRounded,
  BulkRounded: Icon1stBracketCircleBulkRounded,
  StrokeSharp: Icon1stBracketCircleStrokeSharp,
  SolidSharp: Icon1stBracketCircleSolidSharp,
};