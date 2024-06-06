import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14Z',
  d2: 'M11.3333 10.6667C12.3883 11.7216 13.7778 12.7937 13.7778 12.7937L15.6825 10.8889C15.6825 10.8889 14.6105 9.49939 13.5556 8.44444C12.5006 7.3895 11.1111 6.31746 11.1111 6.31746L9.20635 8.22222C9.20635 8.22222 10.2784 9.61172 11.3333 10.6667ZM11.3333 10.6667L8 14M16 10.5714L13.4603 13.1111M11.4286 6L8.88889 8.53968',
  d3: 'M8 18H16',
  d4: 'M3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10ZM13.5553 8.44444C12.5004 7.3895 11.1109 6.31746 11.1109 6.31746L9.20613 8.22222C9.20613 8.22222 10.2782 9.61172 11.3331 10.6667C12.3881 11.7216 13.7776 12.7937 13.7776 12.7937L15.6823 10.8889C15.6823 10.8889 14.6103 9.49939 13.5553 8.44444Z',
  d5: 'M13.0564 1.25C14.8942 1.24998 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C21.1071 3.38961 21.4392 4.33856 21.5969 5.51098C21.75 6.65018 21.75 8.1058 21.75 9.94354V9.94359V14.0564V14.0565C21.75 15.8942 21.75 17.3498 21.5969 18.489C21.4392 19.6614 21.1071 20.6104 20.3588 21.3588C19.6104 22.1071 18.6614 22.4392 17.489 22.5969C16.3498 22.75 14.8942 22.75 13.0565 22.75H13.0564H10.9436H10.9435C9.1058 22.75 7.65018 22.75 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24998 15.8942 2.25 14.0564V14.0564V9.94358V9.94357C2.24998 8.10582 2.24997 6.65019 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.10582 1.24998 10.9436 1.25H10.9436H13.0564H13.0564ZM12.9298 13.3914C13.2227 13.6843 13.6975 13.6843 13.9904 13.3914L16.5301 10.8518C16.823 10.5589 16.823 10.084 16.5301 9.7911C16.3672 9.62818 16.148 9.55588 15.9351 9.57421C15.8571 9.58092 15.777 9.5572 15.7272 9.49682C15.6835 9.44386 15.6378 9.38872 15.5903 9.33177C15.1842 8.84506 14.6361 8.21453 14.0857 7.66411C13.5353 7.1137 12.9047 6.56559 12.418 6.15948C12.3611 6.11196 12.3059 6.06626 12.253 6.0226C12.1926 5.97283 12.1689 5.89265 12.1756 5.8147C12.1939 5.60181 12.1216 5.38259 11.9587 5.21967C11.6658 4.92678 11.1909 4.92678 10.898 5.21967L8.35834 7.75935C8.06545 8.05225 8.06545 8.52712 8.35834 8.82001C8.52126 8.98293 8.74048 9.05523 8.95337 9.0369C9.03133 9.03019 9.11151 9.05391 9.16127 9.11429C9.20494 9.16726 9.25064 9.22239 9.29815 9.27934C9.49887 9.51989 9.73427 9.79557 9.98749 10.0794C10.0585 10.1589 10.0555 10.2801 9.98015 10.3555L7.54289 12.7927C7.15237 13.1833 7.15237 13.8164 7.54289 14.2069C7.93342 14.5975 8.56658 14.5975 8.95711 14.2069L11.3944 11.7697C11.4697 11.6943 11.591 11.6914 11.6705 11.7623C11.9542 12.0155 12.2299 12.2509 12.4704 12.4516C12.5274 12.4991 12.5825 12.5448 12.6355 12.5885C12.6959 12.6383 12.7196 12.7185 12.7129 12.7964C12.6946 13.0093 12.7669 13.2285 12.9298 13.3914ZM8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17H8Z',
  d6: 'M13.0564 1.25C14.8942 1.24998 16.3498 1.24997 17.489 1.40314C18.6614 1.56076 19.6104 1.89288 20.3588 2.64124C21.1071 3.38961 21.4392 4.33856 21.5969 5.51098C21.75 6.65018 21.75 8.1058 21.75 9.94354V9.94359V14.0564V14.0565C21.75 15.8942 21.75 17.3498 21.5969 18.489C21.4392 19.6614 21.1071 20.6104 20.3588 21.3588C19.6104 22.1071 18.6614 22.4392 17.489 22.5969C16.3498 22.75 14.8942 22.75 13.0565 22.75H13.0564H10.9436H10.9435C9.1058 22.75 7.65018 22.75 6.51098 22.5969C5.33856 22.4392 4.38961 22.1071 3.64124 21.3588C2.89288 20.6104 2.56076 19.6614 2.40314 18.489C2.24997 17.3498 2.24998 15.8942 2.25 14.0564V14.0564V9.94358V9.94357C2.24998 8.10582 2.24997 6.65019 2.40314 5.51098C2.56076 4.33856 2.89288 3.38961 3.64124 2.64124C4.38961 1.89288 5.33856 1.56076 6.51098 1.40314C7.65019 1.24997 9.10582 1.24998 10.9436 1.25H10.9436H13.0564H13.0564Z',
  d7: 'M12.9298 13.3914C13.2227 13.6843 13.6975 13.6843 13.9904 13.3914L16.5301 10.8518C16.823 10.5589 16.823 10.084 16.5301 9.7911C16.3672 9.62818 16.148 9.55588 15.9351 9.57421C15.8571 9.58092 15.777 9.5572 15.7272 9.49682C15.6835 9.44385 15.6378 9.38872 15.5903 9.33177C15.1842 8.84506 14.6361 8.21453 14.0857 7.66411C13.5353 7.1137 12.9047 6.56559 12.418 6.15948C12.3611 6.11196 12.3059 6.06626 12.253 6.0226C12.1926 5.97283 12.1689 5.89265 12.1756 5.8147C12.1939 5.60181 12.1216 5.38259 11.9587 5.21967C11.6658 4.92678 11.1909 4.92678 10.898 5.21967L8.35834 7.75935C8.06545 8.05225 8.06545 8.52712 8.35834 8.82001C8.52126 8.98293 8.74048 9.05523 8.95337 9.0369C9.03133 9.03019 9.11151 9.05391 9.16127 9.11429C9.20494 9.16726 9.25064 9.22239 9.29816 9.27934C9.49887 9.51989 9.73427 9.79557 9.98749 10.0794C10.0585 10.1589 10.0555 10.2801 9.98015 10.3555L7.54289 12.7927C7.15237 13.1833 7.15237 13.8164 7.54289 14.2069C7.93342 14.5975 8.56658 14.5975 8.95711 14.2069L11.3944 11.7697C11.4697 11.6943 11.591 11.6914 11.6705 11.7623C11.9542 12.0155 12.2299 12.2509 12.4704 12.4516C12.5274 12.4991 12.5825 12.5448 12.6355 12.5885C12.6959 12.6383 12.7196 12.7185 12.7129 12.7964C12.6946 13.0093 12.7669 13.2285 12.9298 13.3914Z',
  d8: 'M7 18C7 17.4477 7.44772 17 8 17H16C16.5523 17 17 17.4477 17 18C17 18.5523 16.5523 19 16 19H8C7.44772 19 7 18.5523 7 18Z',
  d9: 'M3 2V22H21V2H3Z',
  d10: 'M11.5 10.5005L8 14.0005M12.0002 6.00014L16.0005 10.0005L13.5004 12.5007L9.5 8.50031L12.0002 6.00014Z',
  d11: 'M2.46967 1.46967C2.61032 1.32902 2.80109 1.25 3 1.25H21C21.4142 1.25 21.75 1.58579 21.75 2V22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V2C2.25 1.80109 2.32902 1.61032 2.46967 1.46967ZM11.4689 5.46967C11.7618 5.17678 12.2367 5.17678 12.5296 5.46967L16.5299 9.47002C16.8228 9.76291 16.8228 10.2378 16.5299 10.5307L14.0298 13.0309C13.7369 13.3237 13.262 13.3237 12.9691 13.0309L11.4992 11.5609L8.52942 14.5307L7.46875 13.4701L10.4385 10.5003L8.96875 9.03051C8.67586 8.73761 8.67586 8.26274 8.96875 7.96985L11.4689 5.46967ZM8 18.75H16V17.25H8V18.75Z',
};

export const IconLegalDocument01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-01-stroke-rounded IconLegalDocument01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLegalDocument01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-01-duotone-rounded IconLegalDocument01DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconLegalDocument01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-01-twotone-rounded IconLegalDocument01TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLegalDocument01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-01-solid-rounded IconLegalDocument01SolidRounded"
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

export const IconLegalDocument01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-01-bulk-rounded IconLegalDocument01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconLegalDocument01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-01-stroke-sharp IconLegalDocument01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLegalDocument01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="legal-document-01-solid-sharp IconLegalDocument01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLegalDocument01: TheIconSelfPack = {
  name: 'LegalDocument01',
  StrokeRounded: IconLegalDocument01StrokeRounded,
  DuotoneRounded: IconLegalDocument01DuotoneRounded,
  TwotoneRounded: IconLegalDocument01TwotoneRounded,
  SolidRounded: IconLegalDocument01SolidRounded,
  BulkRounded: IconLegalDocument01BulkRounded,
  StrokeSharp: IconLegalDocument01StrokeSharp,
  SolidSharp: IconLegalDocument01SolidSharp,
};