import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 7H17M11 5V9C11 10.6569 12.3431 12 14 12C15.6569 12 17 10.6569 17 9V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5Z',
  d2: 'M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503',
  d3: 'M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199',
  d4: 'M11 5V7H17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5Z',
  d5: 'M6.39482 14H4V20.0199L10.3952 21.9176C10.9209 22.0736 11.4849 22.0063 11.9629 21.7305L19.4785 17.3942C20.0157 17.0842 20.1659 16.3529 19.7971 15.8423C19.2871 15.136 18.407 14.8352 17.5928 15.0889L13 16.5L12.8928 16.5441C12.6395 15.8625 11.9657 15.3751 11.1741 15.3751H10.1315C9.83735 15.3751 9.54724 15.3089 9.28415 15.1816L7.24217 14.1936C6.97908 14.0663 6.68897 14 6.39482 14Z',
  d6: 'M14 1.25C11.9289 1.25 10.25 2.92893 10.25 5V5.65C10.25 5.93284 10.25 6.07426 10.3379 6.16213C10.4257 6.25 10.5672 6.25 10.85 6.25L17.15 6.25C17.4328 6.25 17.5743 6.25 17.6621 6.16213C17.75 6.07426 17.75 5.93284 17.75 5.65V5C17.75 2.92893 16.0711 1.25 14 1.25ZM17.15 7.75C17.4328 7.75 17.5743 7.75 17.6621 7.83787C17.75 7.92574 17.75 8.06716 17.75 8.35V9C17.75 11.0711 16.0711 12.75 14 12.75C11.9289 12.75 10.25 11.0711 10.25 9V8.35C10.25 8.06716 10.25 7.92574 10.3379 7.83787C10.4257 7.75 10.5672 7.75 10.85 7.75L17.15 7.75Z',
  d7: 'M5.95526 13.25C5.52244 13.25 5.12561 13.2499 4.8028 13.2933C4.44732 13.3411 4.07159 13.4535 3.76257 13.7626C3.45355 14.0716 3.3411 14.4473 3.29331 14.8028C3.24991 15.1256 3.24995 15.5224 3.25 15.9553L3.25 18.5635C3.24996 18.8917 3.24993 19.1992 3.27988 19.4561C3.31321 19.7421 3.39038 20.0427 3.59756 20.3203C3.80474 20.5979 4.07102 20.7574 4.33569 20.8707C4.57351 20.9725 4.8683 21.06 5.18291 21.1533L10.1818 22.6366C10.9063 22.8516 11.6827 22.7581 12.3377 22.3802L19.8533 18.0438C20.7865 17.5054 21.0266 16.2638 20.4051 15.4032C19.7123 14.4437 18.5017 14.0209 17.3712 14.3724L17.3697 14.3729L15.2442 15.0259C14.9956 15.1023 14.8712 15.1405 14.8322 15.2122C14.7933 15.2839 14.8398 15.4474 14.9328 15.7743C15.0037 16.0236 15.0121 16.2627 15 16.3973C15 17.3786 14.331 18.171 13.4667 18.4099L10.9258 19.1124C10.0041 19.3673 9.01687 19.2796 8.15388 18.8621L6.5336 18.0781C6.22288 17.9278 6.09286 17.554 6.2432 17.2433C6.39354 16.9326 6.7673 16.8026 7.07802 16.9529L8.69831 17.7369C9.28692 18.0217 9.96218 18.082 10.5927 17.9076L13.1336 17.2051C13.4837 17.1083 13.75 16.7884 13.75 16.3973C13.75 14.9842 12.5733 14.6252 11.1741 14.6252L10.1315 14.6251C9.94974 14.6251 9.77138 14.5841 9.61081 14.5064L7.56883 13.5184C7.20322 13.3415 6.80136 13.25 6.39483 13.25L5.95526 13.25Z',
  d8: 'M17.15 7.75C17.4328 7.75 17.5743 7.75 17.6621 7.83787C17.75 7.92574 17.75 8.06716 17.75 8.35V9C17.75 11.0711 16.0711 12.75 14 12.75C11.9289 12.75 10.25 11.0711 10.25 9V8.35C10.25 8.06716 10.25 7.92574 10.3379 7.83787C10.4257 7.75 10.5672 7.75 10.85 7.75H17.15Z',
  d9: 'M14 1.25C11.9289 1.25 10.25 2.92893 10.25 5V5.65C10.25 5.93284 10.25 6.07426 10.3379 6.16213C10.4257 6.25 10.5672 6.25 10.85 6.25H17.15C17.4328 6.25 17.5743 6.25 17.6621 6.16213C17.75 6.07426 17.75 5.93284 17.75 5.65V5C17.75 2.92893 16.0711 1.25 14 1.25Z',
  d10: 'M11 7L17 7M11 5V9C11 10.6569 12.3431 12 14 12C15.6569 12 17 10.6569 17 9V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5Z',
  d11: 'M4 14H7L9.5 15.3751H10.5C12 15.3751 13 16.524 13 17.4998L10 18.4998L7 17.4998M12.9993 17L17.2103 15.5963C18.2149 15.2615 19.3064 15.7677 19.6997 16.7509L19.9993 17.5L10.9993 22L4 20.0199',
  d12: 'M3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H7C7.12639 13.25 7.25072 13.2819 7.36146 13.3429L9.69266 14.6251H10.5C11.7384 14.6251 12.7644 15.2585 13.3145 16.1044L10 17.7093L7.23717 16.7883L6.76283 18.2113L9.76283 19.2113C9.91678 19.2627 10.0832 19.2627 10.2372 19.2113L14.7965 16.9797V15.6104L16.9731 14.8848C18.3544 14.4244 19.8553 15.1205 20.396 16.4724L20.6957 17.2215C20.8405 17.5836 20.6836 17.9964 20.3347 18.1708L11.3347 22.6708C11.1675 22.7544 10.9751 22.7726 10.7952 22.7217L3.79584 20.7416C3.47293 20.6503 3.25 20.3555 3.25 20.0199V14Z',
  d13: 'M13.999 1.25C11.928 1.25 10.249 2.92893 10.249 5V6.25H17.749V5C17.749 2.92893 16.0701 1.25 13.999 1.25Z',
  d14: 'M17.749 7.75H10.249V9C10.249 11.0711 11.928 12.75 13.999 12.75C16.0701 12.75 17.749 11.0711 17.749 9V7.75Z',
} as const;

export const IconGivePillStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="give-pill-stroke-rounded IconGivePillStrokeRounded"
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

export const IconGivePillDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="give-pill-duotone-rounded IconGivePillDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGivePillTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="give-pill-twotone-rounded IconGivePillTwotoneRounded"
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

export const IconGivePillSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="give-pill-solid-rounded IconGivePillSolidRounded"
    >
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

export const IconGivePillBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="give-pill-bulk-rounded IconGivePillBulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGivePillStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="give-pill-stroke-sharp IconGivePillStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGivePillSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="give-pill-solid-sharp IconGivePillSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGivePill: TheIconSelfPack = {
  name: 'GivePill',
  StrokeRounded: IconGivePillStrokeRounded,
  DuotoneRounded: IconGivePillDuotoneRounded,
  TwotoneRounded: IconGivePillTwotoneRounded,
  SolidRounded: IconGivePillSolidRounded,
  BulkRounded: IconGivePillBulkRounded,
  StrokeSharp: IconGivePillStrokeSharp,
  SolidSharp: IconGivePillSolidSharp,
};