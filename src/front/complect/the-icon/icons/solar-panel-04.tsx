import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.5 9H7.73252C6.63802 9 6.09077 9 5.67127 9.33389C5.25177 9.66778 5.05962 10.2563 4.67531 11.4333L3.85904 13.9333C3.10748 16.2351 2.7317 17.386 3.21864 18.193C3.70558 19 4.7758 19 6.91624 19H17.0838C19.2242 19 20.2944 19 20.7814 18.193C21.2683 17.386 20.8925 16.2351 20.141 13.9333L19.3247 11.4333C18.9404 10.2563 18.7482 9.66778 18.3287 9.33389C17.9092 9 17.362 9 16.2675 9H15',
  d2: 'M12 11.5V19',
  d3: 'M20 14H4',
  d4: 'M12 19V22M12 22H14M12 22H10',
  d5: 'M12.5 2L10 5.5H14L11.5 9',
  d6: 'M3.83691 14L4.67497 11.4333C5.05927 10.2563 5.25143 9.66778 5.67093 9.33389C6.09043 9 6.63768 9 7.73218 9H11.9997V14H20.1624C20.8994 16.2574 21.2632 17.3938 20.781 18.193C20.2941 19 19.2239 19 17.0834 19H11.9997V14H3.83691Z',
  d7: 'M12.9359 1.38976C13.273 1.63051 13.3511 2.09893 13.1103 2.43599L11.4574 4.75006H14C14.2809 4.75006 14.5383 4.90707 14.6669 5.15687C14.7954 5.40668 14.7736 5.70738 14.6103 5.93599L12.1103 9.43599C11.8695 9.77305 11.4011 9.85112 11.0641 9.61036C10.727 9.3696 10.6489 8.90119 10.8897 8.56413L12.5426 6.25006H10C9.71906 6.25006 9.46168 6.09305 9.33313 5.84324C9.20457 5.59344 9.22641 5.29274 9.3897 5.06413L11.8897 1.56413C12.1305 1.22707 12.5989 1.149 12.9359 1.38976Z',
  d8: 'M9.37813 8.24988H7.68936C7.17904 8.24984 6.72755 8.24981 6.3535 8.29769C5.94352 8.35016 5.5559 8.46699 5.20416 8.74695C4.86076 9.02027 4.64653 9.37392 4.47407 9.76409C4.31015 10.1349 4.15614 10.6066 3.97387 11.165L3.29314 13.2498H11.25V11.2365C10.8806 11.1956 10.5162 11.0623 10.1922 10.831C9.35689 10.2343 9.05179 9.17153 9.37813 8.24988Z',
  d9: 'M12.75 10.8716V13.2498H20.7068L20.026 11.1649C19.8438 10.6066 19.6897 10.1349 19.5258 9.76409C19.3534 9.37392 19.1391 9.02027 18.7957 8.74695C18.444 8.46699 18.0564 8.35016 17.6464 8.29769C17.2724 8.24981 16.8209 8.24984 16.3105 8.24988H14.8009L13.3309 10.3078C13.1679 10.536 12.9702 10.7246 12.75 10.8716Z',
  d10: 'M2.33724 16.4851C2.42991 15.9917 2.59597 15.4163 2.80662 14.7498H11.25V19.7499H6.84907C5.83623 19.7499 4.98088 19.75 4.32217 19.6385C3.61331 19.5185 2.9772 19.2445 2.57643 18.5803C2.19179 17.9429 2.19736 17.2299 2.33724 16.4851Z',
  d11: 'M12.75 19.7499H17.1508C18.1637 19.7499 19.019 19.75 19.6777 19.6385C20.3866 19.5185 21.0227 19.2445 21.4235 18.5803C21.8081 17.9429 21.8025 17.2299 21.6627 16.4851C21.57 15.9917 21.4039 15.4163 21.1933 14.7498H12.75V19.7499Z',
  d12: 'M11.25 19.75V21.2499H10C9.58579 21.2499 9.25 21.5857 9.25 21.9999C9.25 22.4141 9.58579 22.7499 10 22.7499H14C14.4142 22.7499 14.75 22.4141 14.75 21.9999C14.75 21.5857 14.4142 21.2499 14 21.2499H12.75V19.75H11.25Z',
  d13: 'M7.68936 8.25H9.37813C9.05179 9.17165 9.35689 10.2344 10.1922 10.8311C10.5162 11.0625 10.8806 11.1957 11.25 11.2366L12.75 10.8717C12.9702 10.7248 13.1679 10.5361 13.3309 10.308L14.8009 8.25H16.3105C16.8209 8.24996 17.2724 8.24993 17.6464 8.29781C18.0564 8.35029 18.444 8.46712 18.7957 8.74708C19.1391 9.0204 19.3534 9.37404 19.5258 9.76421C19.6897 10.135 19.8438 10.6068 20.026 11.165L21.1933 14.7499C21.4039 15.4164 21.57 15.9918 21.6627 16.4852C21.8025 17.23 21.8081 17.943 21.4235 18.5805C21.0227 19.2447 20.3866 19.5186 19.6777 19.6386C19.019 19.7501 18.1637 19.7501 17.1508 19.75H12.75H6.84907C5.83623 19.7501 4.98088 19.7501 4.32217 19.6386C3.61331 19.5186 2.9772 19.2447 2.57643 18.5805C2.19179 17.943 2.19736 17.23 2.33724 16.4852C2.42991 15.9918 2.59597 15.4164 2.80662 14.7499L3.97387 11.1651C4.15614 10.6068 4.31015 10.135 4.47407 9.76421C4.64653 9.37404 4.86076 9.0204 5.20416 8.74708C5.5559 8.46712 5.94352 8.35029 6.3535 8.29781C6.72755 8.24993 7.17904 8.24996 7.68936 8.25Z',
  d14: 'M2.80664 14.7493L3.29505 13.2493H11.2498V11.2366L12.7498 10.8717C12.7498 10.8717 12.7498 10.8717 12.7498 10.8717L12.7498 13.2493H20.7045L21.1929 14.7493H12.7498V19.75H11.2498V14.7493H2.80664Z',
  d15: 'M8.50027 9H5.5L3 19H21.0003L18.5003 9.00004L15.0003 9',
  d16: 'M12 11.5V19M20 13.9999H4',
  d17: 'M13.5466 2.12174L11.4578 5.04611H15.4578L11.6747 10.3423L10.4541 9.47048L12.543 6.54611H8.54297L12.326 1.24988L13.5466 2.12174Z',
  d18: 'M11.25 19.7501H12.75V21.2501H14.75V22.7501H9.25V21.2501H11.25V19.7501Z',
  d19: 'M9.48214 8.25013L5.50001 8.25012C5.15586 8.25012 4.85587 8.48434 4.7724 8.81822L3.66444 13.2501H11.25V11.8824L8.36142 9.81915L9.48214 8.25013Z',
  d20: 'M12.75 11.4172V13.2501H20.3358L19.2279 8.81826C19.1444 8.48439 18.8444 8.25017 18.5003 8.25016L15.0122 8.25015L12.75 11.4172Z',
  d21: 'M20.7108 14.7501H12.75V19.7501H21.0003C21.2312 19.7501 21.4493 19.6437 21.5914 19.4617C21.7336 19.2796 21.7839 19.0423 21.7279 18.8182L20.7108 14.7501Z',
  d22: 'M11.25 14.7501V19.7501H3.00001C2.76906 19.7501 2.55098 19.6437 2.40885 19.4617C2.26672 19.2796 2.21639 19.0423 2.2724 18.8182L3.28944 14.7501H11.25Z',
};

export const IconSolarPanel04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-04-stroke-rounded IconSolarPanel04StrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-04-duotone-rounded IconSolarPanel04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-04-twotone-rounded IconSolarPanel04TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-04-solid-rounded IconSolarPanel04SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSolarPanel04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-04-bulk-rounded IconSolarPanel04BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-04-stroke-sharp IconSolarPanel04StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconSolarPanel04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="solar-panel-04-solid-sharp IconSolarPanel04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSolarPanel04: TheIconSelfPack = {
  name: 'SolarPanel04',
  StrokeRounded: IconSolarPanel04StrokeRounded,
  DuotoneRounded: IconSolarPanel04DuotoneRounded,
  TwotoneRounded: IconSolarPanel04TwotoneRounded,
  SolidRounded: IconSolarPanel04SolidRounded,
  BulkRounded: IconSolarPanel04BulkRounded,
  StrokeSharp: IconSolarPanel04StrokeSharp,
  SolidSharp: IconSolarPanel04SolidSharp,
};