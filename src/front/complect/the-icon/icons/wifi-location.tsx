import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z',
  d2: 'M8 9.47776C9.14883 8.54314 10.5209 8 11.9946 8C13.4729 8 14.849 8.54657 16 9.48661M14.1743 12C13.5182 11.5909 12.7779 11.3607 11.9946 11.3607C11.2152 11.3607 10.4784 11.5886 9.82477 11.9938',
  d3: 'M12 15H12.0064',
  d4: 'M12 1.25C6.72451 1.25 2.25 5.60954 2.25 10.9258C2.25 13.6482 3.40187 15.9241 5.01689 17.8025C6.62496 19.6728 8.71834 21.1811 10.6782 22.3944L10.6911 22.4024L10.7043 22.4098C11.0996 22.6329 11.546 22.75 12 22.75C12.454 22.75 12.9004 22.6329 13.2957 22.4098L13.3072 22.4033L13.3185 22.3964C15.2855 21.1928 17.3793 19.6796 18.9866 17.8038C20.6003 15.9206 21.75 13.6392 21.75 10.9258C21.75 5.60954 17.2755 1.25 12 1.25ZM11.9946 7C10.2653 7 8.67508 7.63946 7.36896 8.70203C6.94054 9.05057 6.87578 9.68041 7.22431 10.1088C7.57284 10.5373 8.20269 10.602 8.63111 10.2535C9.62265 9.44682 10.7765 9 11.9946 9C13.2165 9 14.3738 9.44963 15.3675 10.2611C15.7952 10.6105 16.4252 10.5469 16.7746 10.1192C17.1239 9.6914 17.0603 9.06143 16.6326 8.71209C15.3241 7.64352 13.7294 7 11.9946 7ZM11.9946 10.3607C11.0147 10.3607 10.0971 10.6484 9.29784 11.144C8.82846 11.435 8.68388 12.0514 8.97491 12.5208C9.26595 12.9902 9.88239 13.1348 10.3518 12.8437C10.8597 12.5288 11.4157 12.3607 11.9946 12.3607C12.5764 12.3607 13.1351 12.5304 13.6452 12.8485C14.1138 13.1408 14.7306 12.9978 15.0228 12.5291C15.3151 12.0605 15.1721 11.4437 14.7034 11.1515C13.9013 10.6513 12.9795 10.3607 11.9946 10.3607ZM11 15C11 14.4477 11.4477 14 12 14H12.0064C12.5587 14 13.0064 14.4477 13.0064 15C13.0064 15.5523 12.5587 16 12.0064 16H12C11.4477 16 11 15.5523 11 15Z',
  d5: 'M2.25 10.9258C2.25 5.60954 6.72451 1.25 12 1.25C17.2755 1.25 21.75 5.60954 21.75 10.9258C21.75 13.6392 20.6003 15.9206 18.9866 17.8038C17.3793 19.6796 15.2855 21.1928 13.3185 22.3964L13.3072 22.4033L13.2957 22.4098C12.9004 22.6329 12.454 22.75 12 22.75C11.546 22.75 11.0996 22.6329 10.7043 22.4098L10.6911 22.4024L10.6782 22.3944C8.71834 21.1811 6.62496 19.6728 5.01689 17.8025C3.40187 15.9241 2.25 13.6482 2.25 10.9258Z',
  d6: 'M11.9946 7C10.2653 7 8.67508 7.63946 7.36896 8.70203C6.94054 9.05057 6.87578 9.68041 7.22431 10.1088C7.57284 10.5373 8.20269 10.602 8.63111 10.2535C9.62265 9.44682 10.7765 9 11.9946 9C13.2165 9 14.3738 9.44963 15.3675 10.2611C15.7952 10.6105 16.4252 10.5469 16.7746 10.1192C17.1239 9.6914 17.0603 9.06143 16.6326 8.71209C15.3241 7.64352 13.7294 7 11.9946 7Z',
  d7: 'M11.9946 10.3607C11.0147 10.3607 10.0971 10.6484 9.29784 11.144C8.82846 11.435 8.68388 12.0514 8.97491 12.5208C9.26595 12.9902 9.88239 13.1348 10.3518 12.8437C10.8598 12.5288 11.4157 12.3607 11.9946 12.3607C12.5764 12.3607 13.1351 12.5304 13.6452 12.8485C14.1138 13.1408 14.7306 12.9978 15.0228 12.5291C15.3151 12.0605 15.1721 11.4437 14.7034 11.1515C13.9013 10.6513 12.9795 10.3607 11.9946 10.3607Z',
  d8: 'M12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16H12.0064C12.5587 16 13.0064 15.5523 13.0064 15C13.0064 14.4477 12.5587 14 12.0064 14H12Z',
  d9: 'M12 2V1.25V2ZM12 22L11.6052 22.6377L11.9977 22.8807L12.3915 22.6397L12 22ZM3 10.9258H2.25H3ZM20.25 10.9258C20.25 13.1398 19.1098 15.1388 17.4109 16.9197C15.7142 18.6984 13.5315 20.1836 11.6085 21.3603L12.3915 22.6397C14.3448 21.4445 16.6621 19.8779 18.4963 17.9551C20.3284 16.0345 21.75 13.6825 21.75 10.9258H20.25ZM12.3948 21.3623C10.4717 20.1719 8.28889 18.6908 6.59093 16.9166C4.8916 15.141 3.75 13.1479 3.75 10.9258H2.25C2.25 13.6915 3.67384 16.038 5.50724 17.9537C7.342 19.8709 9.65917 21.433 11.6052 22.6377L12.3948 21.3623ZM3.75 10.9258C3.75 6.45641 7.53437 2.75 12 2.75V1.25C6.72451 1.25 2.25 5.60954 2.25 10.9258H3.75ZM12 2.75C16.4656 2.75 20.25 6.45641 20.25 10.9258H21.75C21.75 5.60954 17.2755 1.25 12 1.25V2.75Z',
  d10: 'M2.25 10.8673C2.25 5.5832 6.72451 1.25 12 1.25C17.2755 1.25 21.75 5.5832 21.75 10.8673C21.75 13.6073 20.3284 15.9452 18.4963 17.8542C16.6621 19.7654 14.3448 21.3225 12.3915 22.5105L11.9977 22.75L11.6052 22.5085C9.65917 21.3111 7.342 19.7584 5.50724 17.8528C3.67384 15.9487 2.25 13.6163 2.25 10.8673ZM7.36328 8.70203C8.6694 7.63946 10.2596 7 11.9889 7C13.7237 7 15.3185 7.64352 16.6269 8.71209L15.3618 10.2611C14.3681 9.44963 13.2108 9 11.9889 9C10.7708 9 9.61698 9.44682 8.62543 10.2535L7.36328 8.70203ZM9.29216 11.144C10.0915 10.6484 11.009 10.3607 11.9889 10.3607C12.9738 10.3607 13.8957 10.6513 14.6977 11.1515L13.6395 12.8485C13.1294 12.5304 12.5707 12.3607 11.9889 12.3607C11.41 12.3607 10.8541 12.5288 10.3461 12.8437L9.29216 11.144ZM11.9961 14C11.4438 14 10.9961 14.4477 10.9961 15C10.9961 15.5523 11.4438 16 11.9961 16H12.0024C12.5547 16 13.0024 15.5523 13.0024 15C13.0024 14.4477 12.5547 14 12.0024 14H11.9961Z',
};

export const IconWifiLocationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-location-stroke-rounded IconWifiLocationStrokeRounded"
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

export const IconWifiLocationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-location-duotone-rounded IconWifiLocationDuotoneRounded"
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

export const IconWifiLocationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-location-twotone-rounded IconWifiLocationTwotoneRounded"
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

export const IconWifiLocationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-location-solid-rounded IconWifiLocationSolidRounded"
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

export const IconWifiLocationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-location-bulk-rounded IconWifiLocationBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconWifiLocationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-location-stroke-sharp IconWifiLocationStrokeSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWifiLocationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wifi-location-solid-sharp IconWifiLocationSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWifiLocation: TheIconSelfPack = {
  name: 'WifiLocation',
  StrokeRounded: IconWifiLocationStrokeRounded,
  DuotoneRounded: IconWifiLocationDuotoneRounded,
  TwotoneRounded: IconWifiLocationTwotoneRounded,
  SolidRounded: IconWifiLocationSolidRounded,
  BulkRounded: IconWifiLocationBulkRounded,
  StrokeSharp: IconWifiLocationStrokeSharp,
  SolidSharp: IconWifiLocationSolidSharp,
};