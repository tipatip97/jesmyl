import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z',
  d2: 'M7.99219 9H8.00116',
  d3: 'M9 14C8.08779 14.6072 6.63545 15 4.99963 15C3.87389 15 3.3355 14.8139 2.5 14.5',
  d4: 'M22.7502 12C22.7502 6.06294 17.9373 1.25 12.0002 1.25C6.06318 1.25 1.25024 6.06294 1.25024 12C1.25024 12.4007 1.27217 12.7962 1.31487 13.1855C1.33372 13.3573 1.34314 13.4432 1.39921 13.512C1.45527 13.5807 1.53775 13.6073 1.70269 13.6604C2.91066 14.0495 4.19282 14.25 4.9998 14.25C6.53651 14.25 7.83063 13.8776 8.58457 13.3757C8.92938 13.1462 9.39497 13.2396 9.62449 13.5844C9.85402 13.9292 9.76056 14.3948 9.41576 14.6243C8.34529 15.3369 6.73472 15.75 4.9998 15.75C4.40778 15.75 3.64155 15.6656 2.8262 15.5004C2.33124 15.4001 2.08377 15.35 1.96931 15.4914C1.85485 15.6328 1.94853 15.8484 2.13588 16.2797C3.79007 20.0872 7.58419 22.75 12.0002 22.75C17.9373 22.75 22.7502 17.9371 22.7502 12ZM9.25024 9C9.25024 8.30964 8.6926 7.75 8.00471 7.75H7.99577C7.30789 7.75 6.75024 8.30964 6.75024 9C6.75024 9.69036 7.30789 10.25 7.99577 10.25H8.00471C8.6926 10.25 9.25024 9.69036 9.25024 9Z',
  d5: 'M22.7502 12C22.7502 6.06294 17.9373 1.25 12.0002 1.25C6.06318 1.25 1.25024 6.06294 1.25024 12C1.25024 17.9371 6.06318 22.75 12.0002 22.75C17.9373 22.75 22.7502 17.9371 22.7502 12Z',
  d6: 'M9.25024 9C9.25024 8.30964 8.6926 7.75 8.00471 7.75H7.99577C7.30789 7.75 6.75024 8.30964 6.75024 9C6.75024 9.69036 7.30789 10.25 7.99577 10.25H8.00471C8.6926 10.25 9.25024 9.69036 9.25024 9Z',
  d7: 'M1.35962 13.5443C1.44328 14.1259 1.5735 14.6925 1.74638 15.2401C2.94295 15.5765 4.15013 15.7501 4.99908 15.7501C6.734 15.7501 8.34457 15.337 9.41504 14.6244C9.75984 14.3949 9.8533 13.9293 9.62377 13.5845C9.39425 13.2397 8.92866 13.1462 8.58385 13.3758C7.82991 13.8776 6.53579 14.2501 4.99908 14.2501C4.11531 14.2501 2.66162 14.0096 1.35962 13.5443Z',
  d8: 'M22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 12.3632 1.26801 12.7221 1.30318 13.0761C1.91303 13.4384 2.45878 13.6856 2.75968 13.7964L2.76421 13.7981C3.56041 14.0973 4.00247 14.2502 5.00006 14.2502C6.53677 14.2502 7.83089 13.8778 8.58483 13.3759L9.41602 14.6245C8.34555 15.3371 6.73498 15.7502 5.00006 15.7502C3.7472 15.7502 3.11247 15.5313 2.23879 15.2031C2.08702 15.1471 1.89058 15.0659 1.66282 14.9605C2.94844 19.4579 7.08977 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12ZM7.99921 7.75C8.68956 7.75 9.24921 8.30964 9.24921 9C9.24921 9.69036 8.68956 10.25 7.99921 10.25H7.99023C7.29988 10.25 6.74023 9.69036 6.74023 9C6.74023 8.30964 7.29988 7.75 7.99023 7.75H7.99921Z',
};

export const IconLookLeftStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="look-left-stroke-rounded IconLookLeftStrokeRounded"
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

export const IconLookLeftDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="look-left-duotone-rounded IconLookLeftDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
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

export const IconLookLeftTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="look-left-twotone-rounded IconLookLeftTwotoneRounded"
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

export const IconLookLeftSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="look-left-solid-rounded IconLookLeftSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLookLeftBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="look-left-bulk-rounded IconLookLeftBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLookLeftStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="look-left-stroke-sharp IconLookLeftStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLookLeftSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="look-left-solid-sharp IconLookLeftSolidSharp"
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

export const iconPackOfLookLeft: TheIconSelfPack = {
  name: 'LookLeft',
  StrokeRounded: IconLookLeftStrokeRounded,
  DuotoneRounded: IconLookLeftDuotoneRounded,
  TwotoneRounded: IconLookLeftTwotoneRounded,
  SolidRounded: IconLookLeftSolidRounded,
  BulkRounded: IconLookLeftBulkRounded,
  StrokeSharp: IconLookLeftStrokeSharp,
  SolidSharp: IconLookLeftSolidSharp,
};