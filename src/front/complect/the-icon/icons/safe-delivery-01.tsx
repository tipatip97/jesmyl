import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503',
  d2: 'M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199',
  d3: 'M15 12H13C11.1144 12 10.1716 12 9.58579 11.4142C9 10.8284 9 9.88562 9 8V6C9 4.11438 9 3.17157 9.58579 2.58579C10.1716 2 11.1144 2 13 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V8C19 9.88562 19 10.8284 18.4142 11.4142C17.8284 12 16.8856 12 15 12Z',
  d4: 'M13 5H15',
  d5: 'M17.2945 1.32991C16.6997 1.24994 15.9505 1.24997 15.052 1.25H15.052H12.948H12.948C12.0495 1.24997 11.3003 1.24994 10.7055 1.32991C10.0777 1.41431 9.51093 1.59998 9.05546 2.05545C8.59999 2.51092 8.41432 3.07772 8.32991 3.70552C8.24995 4.30029 8.24997 5.04948 8.25 5.94794V5.94797V5.948V8.052V8.05203V8.05206C8.24997 8.95051 8.24995 9.69971 8.32991 10.2945C8.41432 10.9223 8.59999 11.4891 9.05546 11.9445C9.51093 12.4 10.0777 12.5857 10.7055 12.6701C11.3003 12.7501 12.0495 12.75 12.948 12.75H12.948H12.948H15.052H15.052H15.0521C15.9505 12.75 16.6997 12.7501 17.2945 12.6701C17.9223 12.5857 18.4891 12.4 18.9445 11.9445C19.4 11.4891 19.5857 10.9223 19.6701 10.2945C19.7501 9.6997 19.75 8.95049 19.75 8.05202V8.05199V5.948V5.94797C19.75 5.0495 19.7501 4.30029 19.6701 3.70552C19.5857 3.07772 19.4 2.51092 18.9445 2.05545C18.4891 1.59998 17.9223 1.41431 17.2945 1.32991ZM13 4C12.4477 4 12 4.44771 12 5C12 5.55228 12.4477 6 13 6H15C15.5523 6 16 5.55228 16 5C16 4.44771 15.5523 4 15 4H13Z',
  d6: 'M5.95526 13.25C5.52244 13.25 5.12561 13.2499 4.8028 13.2933C4.44732 13.3411 4.07159 13.4535 3.76257 13.7626C3.45355 14.0716 3.3411 14.4473 3.29331 14.8028C3.24991 15.1256 3.24995 15.5224 3.25 15.9553L3.25 18.5635C3.24996 18.8917 3.24993 19.1992 3.27988 19.4561C3.31321 19.7421 3.39038 20.0427 3.59756 20.3203C3.80474 20.5979 4.07102 20.7574 4.33569 20.8707C4.57351 20.9725 4.8683 21.06 5.18291 21.1533L10.1818 22.6366C10.9063 22.8516 11.6827 22.7581 12.3377 22.3802L19.8533 18.0438C20.7865 17.5054 21.0266 16.2638 20.4051 15.4032C19.7123 14.4437 18.5017 14.0209 17.3712 14.3724L17.3697 14.3729L15.2442 15.0259C14.9956 15.1023 14.8712 15.1405 14.8322 15.2122C14.7933 15.2839 14.8398 15.4474 14.9328 15.7743C15.0037 16.0236 15.0121 16.2627 15 16.3973C15 17.3786 14.331 18.171 13.4667 18.4099L10.9258 19.1124C10.0041 19.3673 9.01687 19.2796 8.15388 18.8621L6.5336 18.0781C6.22288 17.9278 6.09286 17.554 6.2432 17.2433C6.39354 16.9326 6.7673 16.8026 7.07802 16.9529L8.69831 17.7369C9.28692 18.0217 9.96218 18.082 10.5927 17.9076L13.1336 17.2051C13.4837 17.1083 13.75 16.7884 13.75 16.3973C13.75 14.9842 12.5733 14.6252 11.1741 14.6252L10.1315 14.6251C9.94974 14.6251 9.77138 14.5841 9.61081 14.5064L7.56883 13.5184C7.20322 13.3415 6.80136 13.25 6.39483 13.25L5.95526 13.25Z',
  d7: 'M15.052 1.25C15.9505 1.24997 16.6997 1.24995 17.2945 1.32991C17.9223 1.41432 18.4891 1.59999 18.9445 2.05546C19.4 2.51093 19.5857 3.07773 19.6701 3.70552C19.7501 4.3003 19.75 5.04951 19.75 5.94798V5.94801V8.052V8.05203C19.75 8.9505 19.7501 9.69971 19.6701 10.2945C19.5857 10.9223 19.4 11.4891 18.9445 11.9445C18.4891 12.4 17.9223 12.5857 17.2945 12.6701C16.6997 12.7501 15.9505 12.75 15.052 12.75H15.052H12.948H12.948C12.0495 12.75 11.3003 12.7501 10.7055 12.6701C10.0777 12.5857 9.51093 12.4 9.05546 11.9445C8.59999 11.4891 8.41432 10.9223 8.32991 10.2945C8.24995 9.69971 8.24997 8.9505 8.25 8.05203V8.052V5.948V5.94797C8.24997 5.04951 8.24995 4.3003 8.32991 3.70552C8.41432 3.07773 8.59999 2.51093 9.05546 2.05546C9.51093 1.59999 10.0777 1.41432 10.7055 1.32991C11.3003 1.24995 12.0495 1.24997 12.948 1.25H12.948H15.052H15.052Z',
  d8: 'M12 5C12 4.44772 12.4477 4 13 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H13C12.4477 6 12 5.55228 12 5Z',
  d9: 'M4 14.0001L7 14L9.5 15.3752H11C12.0084 15.3752 13 16 13 17.5L9.5 18.5L7 17.5',
  d10: 'M13 16.5001L16.1751 15.3455C17.5251 14.8546 19.0337 15.3896 19.7728 16.6214L20 17.0001L11 22.0001H4',
  d11: 'M19 12H9V2H19V12Z',
  d12: 'M12.5 5H15.5',
  d13: 'M3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H7C7.12639 13.25 7.25072 13.2819 7.36146 13.3429L9.69266 14.6251H10.5C11.7384 14.6251 12.7644 15.2585 13.3145 16.1044L10 17.7093L7.23717 16.7883L6.76283 18.2113L9.76283 19.2113C9.91678 19.2627 10.0832 19.2627 10.2372 19.2113L14.7965 16.9797V15.6104L16.9731 14.8848C18.3544 14.4244 19.8553 15.1205 20.396 16.4724L20.6957 17.2215C20.8405 17.5836 20.6836 17.9964 20.3347 18.1708L11.3347 22.6708C11.1675 22.7544 10.9751 22.7726 10.7952 22.7217L3.79584 20.7416C3.47293 20.6503 3.25 20.3555 3.25 20.0199V14Z',
  d14: 'M19 1.25H9C8.58579 1.25 8.25 1.58579 8.25 2V12C8.25 12.1989 8.32902 12.3897 8.46967 12.5303C8.61032 12.671 8.80109 12.75 9 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12V2C19.75 1.80109 19.671 1.61032 19.5303 1.46967C19.3897 1.32902 19.1989 1.25 19 1.25ZM12.5 5.75H15.5V4.25H12.5V5.75Z',
};

export const IconSafeDelivery01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safe-delivery-01-stroke-rounded IconSafeDelivery01StrokeRounded"
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

export const IconSafeDelivery01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safe-delivery-01-duotone-rounded IconSafeDelivery01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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

export const IconSafeDelivery01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safe-delivery-01-twotone-rounded IconSafeDelivery01TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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

export const IconSafeDelivery01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safe-delivery-01-solid-rounded IconSafeDelivery01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconSafeDelivery01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safe-delivery-01-bulk-rounded IconSafeDelivery01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSafeDelivery01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safe-delivery-01-stroke-sharp IconSafeDelivery01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSafeDelivery01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safe-delivery-01-solid-sharp IconSafeDelivery01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSafeDelivery01: TheIconSelfPack = {
  name: 'SafeDelivery01',
  StrokeRounded: IconSafeDelivery01StrokeRounded,
  DuotoneRounded: IconSafeDelivery01DuotoneRounded,
  TwotoneRounded: IconSafeDelivery01TwotoneRounded,
  SolidRounded: IconSafeDelivery01SolidRounded,
  BulkRounded: IconSafeDelivery01BulkRounded,
  StrokeSharp: IconSafeDelivery01StrokeSharp,
  SolidSharp: IconSafeDelivery01SolidSharp,
};