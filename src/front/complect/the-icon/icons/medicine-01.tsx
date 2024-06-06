import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503',
  d2: 'M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199',
  d3: 'M17.3294 4.50042C18.7099 6.89148 17.8906 9.94892 15.4996 11.3294C13.1085 12.7099 10.0511 11.8906 8.6706 9.49958M17.3294 4.50042C15.9489 2.10935 12.8915 1.29011 10.5004 2.6706C8.10935 4.05108 7.29011 7.10852 8.6706 9.49958M17.3294 4.50042L8.6706 9.49958',
  d4: 'M17.3294 4.50042C15.9489 2.10935 12.8915 1.29011 10.5004 2.6706C8.10955 4.05096 7.29025 7.108 8.67025 9.49898L17.3294 4.50042Z',
  d5: 'M6.39482 14H4V20.0199L10.3952 21.9176C10.9209 22.0736 11.4849 22.0063 11.9629 21.7305L19.4785 17.3942C20.0157 17.0842 20.1659 16.3529 19.7971 15.8423C19.2871 15.136 18.407 14.8352 17.5928 15.0889L13 16.5L12.8928 16.5441C12.6395 15.8625 11.9657 15.3751 11.1741 15.3751H10.1315C9.83735 15.3751 9.54724 15.3089 9.28415 15.1816L7.24217 14.1936C6.97908 14.0663 6.68897 14 6.39482 14Z',
  d6: 'M5.95526 13.25C5.52244 13.25 5.12561 13.2499 4.8028 13.2933C4.44732 13.3411 4.07159 13.4535 3.76257 13.7626C3.45355 14.0716 3.3411 14.4473 3.29331 14.8028C3.24991 15.1256 3.24995 15.5224 3.25 15.9553L3.25 18.5635C3.24996 18.8917 3.24993 19.1992 3.27988 19.4561C3.31321 19.7421 3.39038 20.0427 3.59756 20.3203C3.80474 20.5979 4.07102 20.7574 4.33569 20.8707C4.57351 20.9725 4.8683 21.06 5.18291 21.1533L10.1818 22.6366C10.9063 22.8516 11.6827 22.7581 12.3377 22.3802L19.8533 18.0438C20.7865 17.5054 21.0266 16.2638 20.4051 15.4032C19.7123 14.4437 18.5017 14.0209 17.3712 14.3724L17.3697 14.3729L15.2442 15.0259C14.9956 15.1023 14.8712 15.1405 14.8322 15.2122C14.7933 15.2839 14.8398 15.4474 14.9328 15.7743C15.0037 16.0236 15.0121 16.2627 15 16.3973C15 17.3786 14.331 18.171 13.4667 18.4099L10.9258 19.1124C10.0041 19.3673 9.01687 19.2796 8.15388 18.8621L6.5336 18.0781C6.22288 17.9278 6.09286 17.554 6.2432 17.2433C6.39354 16.9326 6.7673 16.8026 7.07802 16.9529L8.69831 17.7369C9.28692 18.0217 9.96218 18.082 10.5927 17.9076L13.1336 17.2051C13.4837 17.1083 13.75 16.7884 13.75 16.3973C13.75 14.9842 12.5733 14.6252 11.1741 14.6252L10.1315 14.6251C9.94974 14.6251 9.77138 14.5841 9.61081 14.5064L7.56883 13.5184C7.20322 13.3415 6.80136 13.25 6.39483 13.25L5.95526 13.25Z',
  d7: 'M16.9717 3.84254C17.2524 3.68047 17.3928 3.59944 17.4129 3.45409C17.433 3.30874 17.3276 3.20056 17.1168 2.98419C15.3251 1.1452 12.4517 0.678637 10.1263 2.0212C7.80088 3.36377 6.76821 6.08553 7.46498 8.55668C7.54696 8.84742 7.58794 8.99279 7.72387 9.04805C7.85979 9.10332 8.00015 9.02229 8.28087 8.86022L16.9717 3.84254ZM17.7213 5.14181C18.0021 4.97969 18.1425 4.89863 18.2785 4.95393C18.4144 5.00924 18.4554 5.15466 18.5373 5.44552C19.2329 7.91615 18.2002 10.6368 15.8754 11.979C13.5507 13.3213 10.6781 12.8553 8.88631 11.0175C8.67537 10.8011 8.56991 10.693 8.58998 10.5476C8.61006 10.4022 8.75046 10.3211 9.03125 10.159L17.7213 5.14181Z',
  d8: 'M16.9696 3.84113C17.2504 3.67901 17.3908 3.59795 17.4109 3.45257C17.431 3.30718 17.3255 3.19901 17.1146 2.98266C15.3228 1.14494 12.4503 0.679011 10.1255 2.0212C7.8008 3.36339 6.76806 6.08401 7.46367 8.55461C7.54556 8.84547 7.58651 8.9909 7.72246 9.0462C7.8584 9.10151 7.9988 9.02045 8.2796 8.85833L16.9696 3.84113Z',
  d9: 'M17.7204 5.13873C18.0012 4.97666 18.1415 4.89563 18.2774 4.95089C18.4134 5.00616 18.4543 5.15152 18.5363 5.44226C19.2332 7.91344 18.2005 10.6353 15.8751 11.9779C13.5496 13.3204 10.6761 12.8538 8.88445 11.0148C8.67366 10.7984 8.56826 10.6902 8.58836 10.5449C8.60846 10.3995 8.74882 10.3185 9.02953 10.1564L17.7204 5.13873Z',
  d10: 'M4 14H7L9.5 15.3751H10.5C12 15.3751 13 16.524 13 17.4998L10 18.4998L7 17.4998M12.9993 17L17.2103 15.5963C18.2149 15.2615 19.3064 15.7677 19.6997 16.7509L19.9993 17.5L10.9993 22L4 20.0199',
  d11: 'M3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H7C7.12639 13.25 7.25072 13.2819 7.36146 13.3429L9.69266 14.6251H10.5C11.7384 14.6251 12.7644 15.2585 13.3145 16.1044L10 17.7093L7.23717 16.7883L6.76283 18.2113L9.76283 19.2113C9.91678 19.2627 10.0832 19.2627 10.2372 19.2113L14.7965 16.9797V15.6104L16.9731 14.8848C18.3544 14.4244 19.8553 15.1205 20.396 16.4724L20.6957 17.2215C20.8405 17.5836 20.6836 17.9964 20.3347 18.1708L11.3347 22.6708C11.1675 22.7544 10.9751 22.7726 10.7952 22.7217L3.79584 20.7416C3.47293 20.6503 3.25 20.3555 3.25 20.0199V14Z',
  d12: 'M17.5604 3.49931C15.8315 1.24093 12.6539 0.560914 10.1246 2.0212C7.59527 3.48149 6.59535 6.57344 7.68675 9.19984L17.5604 3.49931Z',
  d13: 'M18.3106 4.79819L8.43648 10.499C10.165 12.7589 13.3437 13.4397 15.8737 11.979C18.4037 10.5183 19.4035 7.42507 18.3106 4.79819Z',
};

export const IconMedicine01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-01-stroke-rounded IconMedicine01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMedicine01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-01-duotone-rounded IconMedicine01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedicine01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-01-twotone-rounded IconMedicine01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedicine01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-01-solid-rounded IconMedicine01SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedicine01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-01-bulk-rounded IconMedicine01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMedicine01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-01-stroke-sharp IconMedicine01StrokeSharp"
    >
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

export const IconMedicine01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="medicine-01-solid-sharp IconMedicine01SolidSharp"
    >
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

export const iconPackOfMedicine01: TheIconSelfPack = {
  name: 'Medicine01',
  StrokeRounded: IconMedicine01StrokeRounded,
  DuotoneRounded: IconMedicine01DuotoneRounded,
  TwotoneRounded: IconMedicine01TwotoneRounded,
  SolidRounded: IconMedicine01SolidRounded,
  BulkRounded: IconMedicine01BulkRounded,
  StrokeSharp: IconMedicine01StrokeSharp,
  SolidSharp: IconMedicine01SolidSharp,
};