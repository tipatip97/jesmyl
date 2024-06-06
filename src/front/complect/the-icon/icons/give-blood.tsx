import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 7.54707C9 5.55959 10.6851 3.59556 11.8678 2.46181C12.5102 1.84606 13.4898 1.84606 14.1322 2.46181C15.3149 3.59556 17 5.55959 17 7.54707C17 9.4957 15.4853 11.5 13 11.5C10.5147 11.5 9 9.4957 9 7.54707Z',
  d2: 'M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503',
  d3: 'M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199',
  d4: 'M6.39482 14H4V20.0199L10.3952 21.9176C10.9209 22.0736 11.4849 22.0063 11.9629 21.7305L19.4785 17.3942C20.0157 17.0842 20.1659 16.3529 19.7971 15.8423C19.2871 15.136 18.407 14.8352 17.5928 15.0889L13 16.5L12.8928 16.5441C12.6395 15.8625 11.9657 15.3751 11.1741 15.3751H10.1315C9.83735 15.3751 9.54724 15.3089 9.28415 15.1816L7.24217 14.1936C6.97908 14.0663 6.68897 14 6.39482 14Z',
  d5: 'M11.3508 1.92038C12.2832 1.02654 13.7207 1.02654 14.6531 1.92038C15.2678 2.50959 16.0293 3.32932 16.6416 4.27738C17.2485 5.21702 17.752 6.349 17.752 7.54707C17.752 9.85435 15.9549 12.25 13.002 12.25C10.049 12.25 8.25195 9.85435 8.25195 7.54707C8.25195 6.349 8.75544 5.21702 9.36232 4.27738C9.97464 3.32932 10.7361 2.50959 11.3508 1.92038Z',
  d6: 'M5.95526 13.25C5.52244 13.25 5.12561 13.2499 4.8028 13.2933C4.44732 13.3411 4.07159 13.4535 3.76257 13.7626C3.45355 14.0716 3.3411 14.4473 3.29331 14.8028C3.24991 15.1256 3.24995 15.5224 3.25 15.9553L3.25 18.5635C3.24996 18.8917 3.24993 19.1992 3.27988 19.4561C3.31321 19.7421 3.39038 20.0427 3.59756 20.3203C3.80474 20.5979 4.07102 20.7574 4.33569 20.8707C4.57351 20.9725 4.8683 21.06 5.18291 21.1533L10.1818 22.6366C10.9063 22.8516 11.6827 22.7581 12.3377 22.3802L19.8533 18.0438C20.7865 17.5054 21.0266 16.2638 20.4051 15.4032C19.7123 14.4437 18.5017 14.0209 17.3712 14.3724L17.3697 14.3729L15.2442 15.0259C14.9956 15.1023 14.8712 15.1405 14.8322 15.2122C14.7933 15.2839 14.8398 15.4474 14.9328 15.7743C15.0037 16.0236 15.0121 16.2627 15 16.3973C15 17.3786 14.331 18.171 13.4667 18.4099L10.9258 19.1124C10.0041 19.3673 9.01687 19.2796 8.15388 18.8621L6.5336 18.0781C6.22288 17.9278 6.09286 17.554 6.2432 17.2433C6.39354 16.9326 6.7673 16.8026 7.07802 16.9529L8.69831 17.7369C9.28692 18.0217 9.96218 18.082 10.5927 17.9076L13.1336 17.2051C13.4837 17.1083 13.75 16.7884 13.75 16.3973C13.75 14.9842 12.5733 14.6252 11.1741 14.6252L10.1315 14.6251C9.94974 14.6251 9.77138 14.5841 9.61081 14.5064L7.56883 13.5184C7.20322 13.3415 6.80136 13.25 6.39483 13.25L5.95526 13.25Z',
  d7: 'M13.001 2C13.001 2 17.001 4.5 17.001 7.75C17.001 10.0972 15.2101 12 13.001 12C10.7918 12 9.00098 10.0972 9.00098 7.75C9.00098 4.5 13.001 2 13.001 2Z',
  d8: 'M4 14H7L9.5 15.3751H10.5C12 15.3751 13 16.524 13 17.4998L10 18.4998L7 17.4998M12.9993 17L17.2103 15.5963C18.2149 15.2615 19.3064 15.7677 19.6997 16.7509L19.9993 17.5L10.9993 22L4 20.0199',
  d9: 'M3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H7C7.12639 13.25 7.25072 13.2819 7.36146 13.3429L9.69266 14.6251H10.5C11.7384 14.6251 12.7644 15.2585 13.3145 16.1044L10 17.7093L7.23717 16.7883L6.76283 18.2113L9.76283 19.2113C9.91678 19.2627 10.0832 19.2627 10.2372 19.2113L14.7965 16.9797V15.6104L16.9731 14.8848C18.3544 14.4244 19.8553 15.1205 20.396 16.4724L20.6957 17.2215C20.8405 17.5836 20.6836 17.9964 20.3347 18.1708L11.3347 22.6708C11.1675 22.7544 10.9751 22.7726 10.7952 22.7217L3.79584 20.7416C3.47293 20.6503 3.25 20.3555 3.25 20.0199V14Z',
  d10: 'M13.002 1.25C13.1206 1.33008 13.8821 1.82101 14.0809 1.97042C14.4772 2.2683 15.0075 2.70209 15.5404 3.24525C16.5805 4.30553 17.752 5.90621 17.752 7.80778C17.752 10.4943 15.6675 12.75 13.002 12.75C10.3364 12.75 8.25195 10.4943 8.25195 7.80778C8.25195 5.90621 9.42336 4.30553 10.4635 3.24525C10.9964 2.70209 11.5267 2.2683 11.923 1.97042C12.1218 1.82101 12.8833 1.33008 13.002 1.25Z',
};

export const IconGiveBloodStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="give-blood-stroke-rounded IconGiveBloodStrokeRounded"
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

export const IconGiveBloodDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="give-blood-duotone-rounded IconGiveBloodDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconGiveBloodTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="give-blood-twotone-rounded IconGiveBloodTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconGiveBloodSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="give-blood-solid-rounded IconGiveBloodSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGiveBloodBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="give-blood-bulk-rounded IconGiveBloodBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGiveBloodStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="give-blood-stroke-sharp IconGiveBloodStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGiveBloodSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="give-blood-solid-sharp IconGiveBloodSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGiveBlood: TheIconSelfPack = {
  name: 'GiveBlood',
  StrokeRounded: IconGiveBloodStrokeRounded,
  DuotoneRounded: IconGiveBloodDuotoneRounded,
  TwotoneRounded: IconGiveBloodTwotoneRounded,
  SolidRounded: IconGiveBloodSolidRounded,
  BulkRounded: IconGiveBloodBulkRounded,
  StrokeSharp: IconGiveBloodStrokeSharp,
  SolidSharp: IconGiveBloodSolidSharp,
};