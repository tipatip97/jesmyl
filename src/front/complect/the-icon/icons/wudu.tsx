import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.0281 2L13.1469 4.97519C11.5996 6.60052 11.6264 9.21756 13.1736 10.8153C14.7476 12.4131 17.282 12.3856 18.8292 10.7878C20.4032 9.16248 20.3765 6.5454 18.8292 4.94762L16.0281 2Z',
  d2: 'M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199',
  d3: 'M6.39482 14H4V20.0199L10.3952 21.9176C10.9209 22.0736 11.4849 22.0063 11.9629 21.7305L19.4785 17.3942C20.0157 17.0842 20.1659 16.3529 19.7971 15.8423C19.2871 15.136 18.407 14.8352 17.5928 15.0889L13 16.5L12.8908 16.5388C12.6361 15.86 11.9636 15.3751 11.1741 15.3751H10.1315C9.83735 15.3751 9.54724 15.3089 9.28415 15.1816L7.24217 14.1936C6.97908 14.0663 6.68897 14 6.39482 14Z',
  d4: 'M16.0319 1.25001C16.2362 1.25097 16.4313 1.33525 16.572 1.48335L19.3708 4.42851C21.1942 6.31419 21.2261 9.39115 19.3683 11.3096C17.5305 13.2073 14.5116 13.242 12.6396 11.3417L12.6351 11.3371C10.8099 9.45233 10.7773 6.37686 12.604 4.45806L12.6084 4.45342L15.4896 1.47825C15.6317 1.33148 15.8276 1.24905 16.0319 1.25001Z',
  d5: 'M5.95526 13.25C5.52244 13.25 5.12561 13.2499 4.8028 13.2933C4.44732 13.3411 4.07159 13.4535 3.76257 13.7626C3.45355 14.0716 3.3411 14.4473 3.29331 14.8028C3.24991 15.1256 3.24995 15.5224 3.25 15.9553L3.25 18.5635C3.24996 18.8917 3.24993 19.1992 3.27988 19.4561C3.31321 19.7421 3.39038 20.0427 3.59756 20.3203C3.80474 20.5979 4.07102 20.7574 4.33569 20.8707C4.57351 20.9725 4.8683 21.06 5.18291 21.1533L10.1818 22.6366C10.9063 22.8516 11.6827 22.7581 12.3377 22.3802L19.8533 18.0438C20.7865 17.5054 21.0266 16.2638 20.4051 15.4032C19.7123 14.4437 18.5017 14.0209 17.3712 14.3724L17.3697 14.3729L15.2442 15.0259C14.9956 15.1023 14.8712 15.1405 14.8322 15.2122C14.7933 15.2839 14.8398 15.4474 14.9328 15.7743C15.0037 16.0236 15.0121 16.2627 15 16.3973C15 17.3786 14.331 18.171 13.4667 18.4099L10.9258 19.1124C10.0041 19.3673 9.01687 19.2796 8.15388 18.8621L6.5336 18.0781C6.22288 17.9278 6.09286 17.554 6.2432 17.2433C6.39354 16.9326 6.7673 16.8026 7.07802 16.9529L8.69831 17.7369C9.28692 18.0217 9.96218 18.082 10.5927 17.9076L13.1336 17.2051C13.4837 17.1083 13.75 16.7884 13.75 16.3973C13.75 14.9842 12.5733 14.6252 11.1741 14.6252L10.1315 14.6251C9.94974 14.6251 9.77138 14.5841 9.61081 14.5064L7.56883 13.5184C7.20322 13.3415 6.80136 13.25 6.39483 13.25L5.95526 13.25Z',
  d6: 'M13.1472 4.97519L16.0284 2L18.8295 4.94762C20.3768 6.5454 20.4035 9.16248 18.8295 10.7878C17.2822 12.3856 14.7479 12.4131 13.1739 10.8153C11.6266 9.21756 11.5999 6.60052 13.1472 4.97519Z',
  d7: 'M4 14H7L9.5 15.3751H10.5C12 15.3751 13 16.524 13 17.4998L10 18.4998L7 17.4998M12.9993 17L17.2103 15.5963C18.2149 15.2615 19.3064 15.7677 19.6997 16.7509L19.9993 17.5L10.9993 22L4 20.0199',
  d8: 'M3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H7C7.12639 13.25 7.25072 13.2819 7.36146 13.3429L9.69266 14.6251H10.5C11.7384 14.6251 12.7644 15.2585 13.3145 16.1044L10 17.7093L7.23717 16.7883L6.76283 18.2113L9.76283 19.2113C9.91678 19.2627 10.0832 19.2627 10.2372 19.2113L14.7965 16.9797V15.6104L16.9731 14.8848C18.3544 14.4244 19.8553 15.1205 20.396 16.4724L20.6957 17.2215C20.8405 17.5836 20.6836 17.9964 20.3347 18.1708L11.3347 22.6708C11.1675 22.7544 10.9751 22.7726 10.7952 22.7217L3.79584 20.7416C3.47293 20.6503 3.25 20.3555 3.25 20.0199V14Z',
  d9: 'M19.3708 4.76188C21.1942 6.64756 21.2261 9.72452 19.3683 11.6429C17.5305 13.5407 14.5116 13.5753 12.6396 11.6751L12.6351 11.6705C10.8099 9.78571 10.7773 6.71024 12.604 4.79144L12.6084 4.7868L16.0335 1.25L19.3708 4.76188Z',
} as const;

export const IconWuduStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wudu-stroke-rounded IconWuduStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWuduDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wudu-duotone-rounded IconWuduDuotoneRounded"
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

export const IconWuduTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wudu-twotone-rounded IconWuduTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconWuduSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wudu-solid-rounded IconWuduSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWuduBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wudu-bulk-rounded IconWuduBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWuduStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wudu-stroke-sharp IconWuduStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWuduSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wudu-solid-sharp IconWuduSolidSharp"
    >
      <path 
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

export const iconPackOfWudu: TheIconSelfPack = {
  name: 'Wudu',
  StrokeRounded: IconWuduStrokeRounded,
  DuotoneRounded: IconWuduDuotoneRounded,
  TwotoneRounded: IconWuduTwotoneRounded,
  SolidRounded: IconWuduSolidRounded,
  BulkRounded: IconWuduBulkRounded,
  StrokeSharp: IconWuduStrokeSharp,
  SolidSharp: IconWuduSolidSharp,
};