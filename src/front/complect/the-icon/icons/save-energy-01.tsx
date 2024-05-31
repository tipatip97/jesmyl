import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20 7C20 9.76142 17.7614 12 15 12C12.2386 12 10 9.76142 10 7C10 4.23858 12.2386 2 15 2C17.7614 2 20 4.23858 20 7Z',
  d2: 'M15.375 4.5L13.5 7H16.5L14.625 9.5',
  d3: 'M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199',
  d4: 'M6.39482 14H4V20.0199L10.3952 21.9176C10.9209 22.0736 11.4849 22.0063 11.9629 21.7305L19.4785 17.3942C20.0157 17.0842 20.1659 16.3529 19.7971 15.8423C19.2871 15.136 18.407 14.8352 17.5928 15.0889L12.9369 16.6799C12.727 15.9282 12.0173 15.3751 11.1741 15.3751H10.1315C9.83735 15.3751 9.54724 15.3089 9.28415 15.1816L7.24217 14.1936C6.97908 14.0663 6.68897 14 6.39482 14Z',
  d5: 'M15 1.25C11.8244 1.25 9.25 3.82436 9.25 7C9.25 10.1756 11.8244 12.75 15 12.75C18.1756 12.75 20.75 10.1756 20.75 7C20.75 3.82436 18.1756 1.25 15 1.25ZM15.975 4.95004C16.2235 4.61867 16.1564 4.14857 15.825 3.90004C15.4936 3.65152 15.0235 3.71867 14.775 4.05004L12.9 6.55004C12.7296 6.77731 12.7021 7.08137 12.8292 7.33545C12.9562 7.58954 13.2159 7.75004 13.5 7.75004H15L14.025 9.05004C13.7765 9.38142 13.8436 9.85152 14.175 10.1C14.5064 10.3486 14.9765 10.2814 15.225 9.95004L17.1 7.45004C17.2705 7.22278 17.2979 6.91872 17.1708 6.66463C17.0438 6.41055 16.7841 6.25004 16.5 6.25004H15L15.975 4.95004Z',
  d6: 'M5.95526 13.25C5.52244 13.25 5.12561 13.2499 4.8028 13.2933C4.44732 13.3411 4.07159 13.4535 3.76257 13.7626C3.45355 14.0716 3.3411 14.4473 3.29331 14.8028C3.24991 15.1256 3.24995 15.5224 3.25 15.9553L3.25 18.5635C3.24996 18.8917 3.24993 19.1992 3.27988 19.4561C3.31321 19.7421 3.39038 20.0427 3.59756 20.3203C3.80474 20.5979 4.07102 20.7574 4.33569 20.8707C4.57351 20.9725 4.8683 21.06 5.18291 21.1533L10.1818 22.6366C10.9063 22.8516 11.6827 22.7581 12.3377 22.3802L19.8533 18.0438C20.7865 17.5054 21.0266 16.2638 20.4051 15.4032C19.7123 14.4437 18.5017 14.0209 17.3712 14.3724L17.3697 14.3729L15.2442 15.0259C14.9956 15.1023 14.8712 15.1405 14.8322 15.2122C14.7933 15.2839 14.8398 15.4474 14.9328 15.7743C15.0037 16.0236 15.0121 16.2627 15 16.3973C15 17.3786 14.331 18.171 13.4667 18.4099L10.9258 19.1124C10.0041 19.3673 9.01687 19.2796 8.15388 18.8621L6.5336 18.0781C6.22288 17.9278 6.09286 17.554 6.2432 17.2433C6.39354 16.9326 6.7673 16.8026 7.07802 16.9529L8.69831 17.7369C9.28692 18.0217 9.96218 18.082 10.5927 17.9076L13.1336 17.2051C13.4837 17.1083 13.75 16.7884 13.75 16.3973C13.75 14.9842 12.5733 14.6252 11.1741 14.6252L10.1315 14.6251C9.94974 14.6251 9.77138 14.5841 9.61081 14.5064L7.56883 13.5184C7.20322 13.3415 6.80136 13.25 6.39483 13.25L5.95526 13.25Z',
  d7: 'M9.25 7C9.25 3.82436 11.8244 1.25 15 1.25C18.1756 1.25 20.75 3.82436 20.75 7C20.75 10.1756 18.1756 12.75 15 12.75C11.8244 12.75 9.25 10.1756 9.25 7Z',
  d8: 'M15.825 3.90004C16.1564 4.14857 16.2235 4.61867 15.975 4.95004L15 6.25004H16.5C16.7841 6.25004 17.0438 6.41055 17.1708 6.66463C17.2979 6.91872 17.2705 7.22278 17.1 7.45004L15.225 9.95004C14.9765 10.2814 14.5064 10.3486 14.175 10.1C13.8436 9.85152 13.7765 9.38142 14.025 9.05004L15 7.75004H13.5C13.2159 7.75004 12.9562 7.58954 12.8292 7.33545C12.7021 7.08137 12.7296 6.77731 12.9 6.55004L14.775 4.05004C15.0235 3.71867 15.4936 3.65152 15.825 3.90004Z',
  d9: 'M15.5 4L13.5 7H16.5L14.5 10',
  d10: 'M4 14H7L9.5 15.3751H10.5C12 15.3751 13 16.524 13 17.4998L10 18.4998L7 17.4998M12.9993 17L17.2103 15.5963C18.2149 15.2615 19.3064 15.7677 19.6997 16.7509L19.9993 17.5L10.9993 22L4 20.0199',
  d11: 'M15 1.25C11.8244 1.25 9.25 3.82436 9.25 7C9.25 10.1756 11.8244 12.75 15 12.75C18.1756 12.75 20.75 10.1756 20.75 7C20.75 3.82436 18.1756 1.25 15 1.25ZM16.1241 4.41603L14.876 3.58398L12.0986 7.75001L15.0986 7.75001L13.876 9.58398L15.1241 10.416L17.9014 6.25001H14.9014L16.1241 4.41603Z',
  d12: 'M3.7959 14C3.7959 13.5858 4.13168 13.25 4.5459 13.25H7.5459C7.67228 13.25 7.79662 13.2819 7.90736 13.3429L10.2386 14.6251H11.0459C12.2843 14.6251 13.3103 15.2585 13.8604 16.1044L10.5459 17.7093L7.78307 16.7883L7.30873 18.2113L10.3087 19.2113C10.4627 19.2627 10.6291 19.2627 10.7831 19.2113L15.3424 16.9797V15.6104L17.519 14.8848C18.9003 14.4244 20.4012 15.1205 20.9419 16.4724L21.2416 17.2215C21.3864 17.5836 21.2295 17.9964 20.8806 18.1708L11.8806 22.6708C11.7134 22.7544 11.521 22.7726 11.3411 22.7217L4.34174 20.7416C4.01883 20.6503 3.7959 20.3555 3.7959 20.0199V14Z',
} as const;

export const IconSaveEnergy01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-01-stroke-rounded IconSaveEnergy01StrokeRounded"
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

export const IconSaveEnergy01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-01-duotone-rounded IconSaveEnergy01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconSaveEnergy01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-01-twotone-rounded IconSaveEnergy01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSaveEnergy01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-01-solid-rounded IconSaveEnergy01SolidRounded"
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

export const IconSaveEnergy01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-01-bulk-rounded IconSaveEnergy01BulkRounded"
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

export const IconSaveEnergy01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-01-stroke-sharp IconSaveEnergy01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSaveEnergy01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="save-energy-01-solid-sharp IconSaveEnergy01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSaveEnergy01: TheIconSelfPack = {
  name: 'SaveEnergy01',
  StrokeRounded: IconSaveEnergy01StrokeRounded,
  DuotoneRounded: IconSaveEnergy01DuotoneRounded,
  TwotoneRounded: IconSaveEnergy01TwotoneRounded,
  SolidRounded: IconSaveEnergy01SolidRounded,
  BulkRounded: IconSaveEnergy01BulkRounded,
  StrokeSharp: IconSaveEnergy01StrokeSharp,
  SolidSharp: IconSaveEnergy01SolidSharp,
};