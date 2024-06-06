import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 15V13.5M4 15V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H11',
  d2: 'M18 9.71428V11M18 9.71428C16.8432 9.71428 15.8241 9.14608 15.2263 8.28331M18 9.71428C19.1568 9.71428 20.1759 9.14608 20.7737 8.28331M18 3.28571C19.1569 3.28571 20.1761 3.854 20.7738 4.71688M18 3.28571C16.8431 3.28571 15.8239 3.854 15.2262 4.71688M18 3.28571V2M22 3.92857L20.7738 4.71688M14.0004 9.07143L15.2263 8.28331M14 3.92857L15.2262 4.71688M21.9996 9.07143L20.7737 8.28331M20.7738 4.71688C21.1273 5.22711 21.3333 5.84035 21.3333 6.5C21.3333 7.15973 21.1272 7.77304 20.7737 8.28331M15.2262 4.71688C14.8727 5.22711 14.6667 5.84035 14.6667 6.5C14.6667 7.15973 14.8728 7.77304 15.2263 8.28331',
  d3: 'M3.49762 16.0154L4.01953 15H19.9518L20.5023 16.0154C21.9452 18.677 22.3046 20.0077 21.7561 21.0039C21.2077 22 19.7536 22 16.8454 22L7.15462 22C4.24642 22 2.79231 22 2.24387 21.0039C1.69543 20.0077 2.05474 18.677 3.49762 16.0154Z',
  d4: 'M19.4171 3.58864C18.9873 3.39396 18.5075 3.28516 18.0013 3.28516C16.8444 3.28516 15.8252 3.85345 15.2275 4.71632C14.874 5.22655 14.668 5.83979 14.668 6.49944C14.668 7.15917 14.8741 7.77248 15.2276 8.28275C15.8254 9.14552 16.8445 9.71373 18.0013 9.71373C18.7511 9.71373 19.4431 9.47499 20 9.07205V15H4V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438 3 8 3H16C17.8856 3 18.8284 3 19.4142 3.58579L19.4171 3.58864Z',
  d5: 'M17.2501 1.25C17.8024 1.25 18.2501 1.69772 18.2501 2.25V2.51987C18.8494 2.67537 19.3936 2.96738 19.8451 3.36095L20.2033 3.12703C20.6657 2.82503 21.2854 2.95507 21.5874 3.41748C21.8894 3.87988 21.7593 4.49955 21.2969 4.80154L20.963 5.01962C21.095 5.40613 21.1668 5.82007 21.1668 6.25C21.1668 6.68001 21.095 7.09402 20.9629 7.48058L21.2966 7.69846C21.759 8.00045 21.889 8.62012 21.587 9.08252C21.285 9.54493 20.6653 9.67496 20.2029 9.37297L19.845 9.13919C19.3934 9.53268 18.8494 9.82465 18.2501 9.98013V10.25C18.2501 10.8023 17.8024 11.25 17.2501 11.25C16.6978 11.25 16.2501 10.8023 16.2501 10.25V9.98013C15.6509 9.82465 15.1068 9.53268 14.6553 9.13919L14.2973 9.37297C13.8349 9.67496 13.2152 9.54493 12.9132 9.08252C12.6112 8.62012 12.7413 8.00045 13.2037 7.69846L13.5373 7.48058C13.4052 7.09402 13.3334 6.68001 13.3334 6.25C13.3334 5.82007 13.4052 5.40613 13.5372 5.01962L13.2033 4.80154C12.7409 4.49955 12.6109 3.87988 12.9129 3.41748C13.2149 2.95507 13.8345 2.82503 14.2969 3.12703L14.6551 3.36095C15.1067 2.96738 15.6508 2.67537 16.2501 2.51987V2.25C16.2501 1.69772 16.6978 1.25 17.2501 1.25ZM17.2501 4.39286C16.5767 4.39286 15.9906 4.72769 15.6492 5.22838C15.4489 5.52221 15.3334 5.87219 15.3334 6.25C15.3334 6.62786 15.4489 6.97787 15.6493 7.27173C15.9907 7.77235 16.5768 8.10714 17.2501 8.10714C17.9235 8.10714 18.5095 7.77235 18.8509 7.27173C19.0513 6.97787 19.1668 6.62786 19.1668 6.25C19.1668 5.87219 19.0514 5.52221 18.851 5.22838C18.5096 4.7277 17.9235 4.39286 17.2501 4.39286Z',
  d6: 'M8.18417 2.25C7.29769 2.24995 6.53387 2.24991 5.92221 2.33215C5.2667 2.42028 4.63835 2.61902 4.12868 3.12868C3.61902 3.63835 3.42028 4.2667 3.33215 4.92221C3.24991 5.53387 3.24995 6.29769 3.25 7.18417L3.25 14.75L3.24991 14.7913C3.24862 14.8426 3.2425 14.8679 3.22019 14.9141L3.21015 14.9338L2.83421 15.6653C2.11021 17.0014 1.62267 18.0653 1.39719 18.9487C1.16515 19.8577 1.1925 20.6495 1.58675 21.3656C2.02749 22.1661 2.81497 22.4782 3.69825 22.6165C4.55189 22.7501 5.69027 22.75 7.08676 22.75H16.913C18.3095 22.75 19.4479 22.7501 20.3015 22.6165C21.1848 22.4782 21.9723 22.1661 22.413 21.3656C22.8073 20.6495 22.8346 19.8576 22.6025 18.9486C22.3766 18.0637 21.8877 16.9975 21.1615 15.658L20.8047 14.9999C20.7881 14.9692 20.7798 14.9538 20.7744 14.9413C20.7586 14.9045 20.7549 14.8899 20.7512 14.85C20.75 14.8364 20.75 14.8076 20.75 14.75V12.75C20.75 12.1977 20.3023 11.75 19.75 11.75C19.1977 11.75 18.75 12.1977 18.75 12.75V13.65C18.75 13.9328 18.75 14.0743 18.6621 14.1621C18.5743 14.25 18.4328 14.25 18.15 14.25H5.85C5.56716 14.25 5.42574 14.25 5.33787 14.1621C5.25 14.0743 5.25 13.9328 5.25 13.65V7.25C5.25 6.27893 5.25213 5.65122 5.31431 5.18871C5.37263 4.75497 5.46677 4.61902 5.5429 4.5429C5.61902 4.46677 5.75497 4.37263 6.18871 4.31431C6.65122 4.25213 7.27893 4.25 8.25 4.25H10.373C10.9253 4.25 11.373 3.80229 11.373 3.25C11.373 2.69772 10.9253 2.25 10.373 2.25L8.18417 2.25Z',
  d7: 'M17.5 10.2143V12M17.5 10.2143C16.3432 10.2143 15.3241 9.64608 14.7263 8.78331M17.5 10.2143C18.6568 10.2143 19.6759 9.64608 20.2737 8.78331M17.5 3.78571C18.6569 3.78571 19.6761 4.354 20.2738 5.21688M17.5 3.78571C16.3431 3.78571 15.3239 4.354 14.7262 5.21688M17.5 3.78571V2M22 4L20.2738 5.21688M13 10L14.7263 8.78331M13 4L14.7262 5.21688M22 10L20.2737 8.78331M20.2738 5.21688C20.6273 5.72711 20.8333 6.34035 20.8333 7C20.8333 7.65973 20.6272 8.27304 20.2737 8.78331M14.7262 5.21688C14.3727 5.72711 14.1667 6.34035 14.1667 7C14.1667 7.65973 14.3728 8.27304 14.7263 8.78331',
  d8: 'M20 15V13M4 15V3L11 3',
  d9: 'M2 22L4.01911 15H19.9514L21.9996 22H2Z',
  d10: 'M17.0643 2.1037C16.3836 2.26257 15.767 2.59114 15.2651 3.044L14.3283 2.37354L13.25 3.92646L14.1982 4.6051C14.0348 5.03922 13.9451 5.50938 13.9451 6C13.9451 6.49067 14.0348 6.96087 14.1983 7.39502L13.2501 8.07348L14.3282 9.62652L15.2652 8.95609C15.7671 9.4089 16.3836 9.73744 17.0643 9.89629V10.75H18.9357V9.89629C19.6164 9.73744 20.2329 9.4089 20.7348 8.95609L21.6718 9.62652L22.7499 8.07348L21.8017 7.39502C21.9652 6.96087 22.0549 6.49067 22.0549 6C22.0549 5.50938 21.9652 5.03922 21.8018 4.6051L22.75 3.92646L21.6717 2.37354L20.7349 3.044C20.233 2.59114 19.6164 2.26257 18.9357 2.1037V1.25H17.0643V2.1037ZM18 3.89643C17.2281 3.89643 16.5603 4.28035 16.1736 4.847C15.9466 5.17977 15.8166 5.57496 15.8166 6C15.8166 6.42509 15.9466 6.82033 16.1737 7.15312C16.5604 7.71971 17.2282 8.10357 18 8.10357C18.7718 8.10357 19.4396 7.71971 19.8263 7.15312C20.0534 6.82033 20.1834 6.42509 20.1834 6C20.1834 5.57496 20.0534 5.17977 19.8264 4.847C19.4397 4.28035 18.7719 3.89643 18 3.89643Z',
  d11: 'M22.7124 21.5056L20.7954 14.8038V12.0833H18.8422V13.9643H5.16016V4.20239H12.0012L11.9998 2.25H3.20418V14.8038L1.2876 21.5057C1.20337 21.8002 1.26242 22.1172 1.4471 22.3617C1.63177 22.6062 1.92064 22.75 2.2273 22.75H21.7727C22.0794 22.75 22.3682 22.6062 22.5529 22.3617C22.7376 22.1171 22.7966 21.8002 22.7124 21.5056Z',
};

export const IconLaptopSettingsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-settings-stroke-rounded IconLaptopSettingsStrokeRounded"
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

export const IconLaptopSettingsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-settings-duotone-rounded IconLaptopSettingsDuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconLaptopSettingsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-settings-twotone-rounded IconLaptopSettingsTwotoneRounded"
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

export const IconLaptopSettingsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-settings-solid-rounded IconLaptopSettingsSolidRounded"
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

export const IconLaptopSettingsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-settings-bulk-rounded IconLaptopSettingsBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLaptopSettingsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-settings-stroke-sharp IconLaptopSettingsStrokeSharp"
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
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLaptopSettingsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="laptop-settings-solid-sharp IconLaptopSettingsSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLaptopSettings: TheIconSelfPack = {
  name: 'LaptopSettings',
  StrokeRounded: IconLaptopSettingsStrokeRounded,
  DuotoneRounded: IconLaptopSettingsDuotoneRounded,
  TwotoneRounded: IconLaptopSettingsTwotoneRounded,
  SolidRounded: IconLaptopSettingsSolidRounded,
  BulkRounded: IconLaptopSettingsBulkRounded,
  StrokeSharp: IconLaptopSettingsStrokeSharp,
  SolidSharp: IconLaptopSettingsSolidSharp,
};