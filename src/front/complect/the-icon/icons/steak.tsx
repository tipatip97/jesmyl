import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 16C19.7614 16 22 13.7614 22 11C22 9.87418 21.6279 8.83526 21 7.99951C18.8745 5.17054 16 4 12 4C8 4 2 6.86508 2 10.5C2 11.8807 3.11929 13 4.5 13H8C9.32374 12.9675 12 13.5 14.2356 15.167C15.0274 15.6933 15.9779 16 17 16Z',
  d2: 'M2 10.5V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17C9.32374 16.9675 12 17.5 14.2356 19.167C15.0274 19.6933 15.9779 20 17 20C19.7614 20 22 17.7614 22 15V11',
  d3: 'M18.5 11C18.5 11.8284 17.8284 12.5 17 12.5C16.1716 12.5 15.5 11.8284 15.5 11C15.5 10.1716 16.1716 9.5 17 9.5C17.8284 9.5 18.5 10.1716 18.5 11Z',
  d4: 'M22 11C22 13.7614 19.7614 16 17 16C15.9779 16 15.0274 15.6933 14.2356 15.167C12 13.5 9.32374 12.9675 8 13H4.5C3.11929 13 2 11.8807 2 10.5C2 6.86508 8 4 12 4C16 4 18.8745 5.17054 21 7.99951C21.6279 8.83526 22 9.87418 22 11ZM17 12.5C17.8284 12.5 18.5 11.8284 18.5 11C18.5 10.1716 17.8284 9.5 17 9.5C16.1716 9.5 15.5 10.1716 15.5 11C15.5 11.8284 16.1716 12.5 17 12.5Z',
  d5: 'M5.12114 5.23963C7.2206 4.01078 9.84999 3.25 12 3.25C16.174 3.25 19.2991 4.48697 21.5996 7.54901C22.3218 8.51018 22.75 9.70616 22.75 11C22.75 11.044 22.7495 11.0879 22.7485 11.1317C22.7495 11.1493 22.75 11.167 22.75 11.1848V15.0109C22.75 18.1805 20.1248 20.75 16.8864 20.75C15.6891 20.75 14.573 20.3978 13.6438 19.7932L13.6218 19.7789L13.6006 19.7635C11.6063 18.308 9.20952 17.8539 8.11488 17.8801L8.1029 17.8804L8.02194 17.8804H8.02193C6.69859 17.8805 5.60736 17.8805 4.74369 17.7668C3.83695 17.6475 3.03615 17.3874 2.39495 16.7598C1.75375 16.1322 1.48796 15.3484 1.36606 14.4609C1.24994 13.6156 1.24997 12.5476 1.25 11.2523V11.2523L1.25 11.1848V10.7065C1.25 10.6823 1.25092 10.6583 1.25273 10.6345C1.25092 10.5899 1.25 10.545 1.25 10.5C1.25 8.26229 3.06571 6.44271 5.12114 5.23963ZM3.23885 13.4962C3.25333 13.7583 3.27391 13.993 3.30317 14.206C3.39594 14.8814 3.55951 15.1942 3.77702 15.4071C3.99453 15.62 4.31412 15.7801 5.00413 15.8709C5.72032 15.9651 6.67606 15.9674 8.07956 15.9674C9.57072 15.9351 12.3822 16.4976 14.7461 18.2132C15.3605 18.6076 16.0946 18.837 16.8864 18.837C18.935 18.837 20.6156 17.2945 20.7819 15.3313C19.771 16.2148 18.448 16.75 17 16.75C15.8257 16.75 14.7315 16.3972 13.8204 15.7916L13.8035 15.7803L13.7873 15.7682C11.6979 14.2103 9.1894 13.721 8.01839 13.7498L8.0092 13.75H4.5C4.05277 13.75 3.62663 13.6597 3.23885 13.4962ZM14.75 11C14.75 9.75736 15.7574 8.75 17 8.75C18.2426 8.75 19.25 9.75736 19.25 11C19.25 12.2426 18.2426 13.25 17 13.25C15.7574 13.25 14.75 12.2426 14.75 11Z',
  d6: 'M1.25273 10.6345C1.25092 10.6583 1.25 10.6823 1.25 10.7066V11.1848L1.25 11.2523L1.25 11.2523C1.24997 12.5476 1.24994 13.6156 1.36606 14.461C1.48797 15.3485 1.75375 16.1323 2.39495 16.7598C3.03615 17.3874 3.83695 17.6476 4.74369 17.7669C5.60736 17.8805 6.69859 17.8805 8.02193 17.8805H8.02194L8.1029 17.8805L8.11488 17.8802C9.20952 17.8539 11.6063 18.308 13.6006 19.7635L13.6218 19.779L13.6438 19.7933C14.573 20.3978 15.6891 20.75 16.8864 20.75C20.1248 20.75 22.75 18.1805 22.75 15.0109V11.1848C22.75 11.167 22.7495 11.1493 22.7485 11.1317C22.7109 12.8063 21.9573 14.3042 20.7819 15.3314C20.6156 17.2945 18.935 18.837 16.8864 18.837C16.0946 18.837 15.3605 18.6076 14.7461 18.2132C12.3822 16.4976 9.57072 15.9352 8.07956 15.9674C6.67606 15.9674 5.72032 15.9651 5.00413 15.8709C4.31412 15.7801 3.99453 15.62 3.77702 15.4071C3.55951 15.1942 3.39594 14.8814 3.30317 14.2061C3.27391 13.993 3.25333 13.7583 3.23885 13.4963C2.10937 13.0203 1.30523 11.9243 1.25273 10.6345Z',
  d7: 'M5.12114 5.23963C7.2206 4.01078 9.84999 3.25 12 3.25C16.174 3.25 19.2991 4.48697 21.5996 7.54901C22.3218 8.51018 22.75 9.70616 22.75 11C22.75 14.1756 20.1756 16.75 17 16.75C15.8257 16.75 14.7315 16.3972 13.8204 15.7916L13.8035 15.7803L13.7873 15.7682C11.6979 14.2103 9.1894 13.721 8.01839 13.7498L8.0092 13.75H4.5C2.70507 13.75 1.25 12.2949 1.25 10.5C1.25 8.26229 3.06571 6.44271 5.12114 5.23963Z',
  d8: 'M14.75 11C14.75 9.75736 15.7574 8.75 17 8.75C18.2426 8.75 19.25 9.75736 19.25 11C19.25 12.2426 18.2426 13.25 17 13.25C15.7574 13.25 14.75 12.2426 14.75 11Z',
  d9: 'M16.25 11C16.25 10.5858 16.5858 10.25 17 10.25C17.4142 10.25 17.75 10.5858 17.75 11C17.75 11.4142 17.4142 11.75 17 11.75C16.5858 11.75 16.25 11.4142 16.25 11Z',
  d10: 'M5.12114 5.23963C3.06571 6.44271 1.25 8.26229 1.25 10.5V11.0549C1.24998 12.4225 1.24997 13.5248 1.36653 14.3918C1.48754 15.2919 1.74644 16.0497 2.34835 16.6517C2.95027 17.2536 3.70814 17.5125 4.60825 17.6335C5.47521 17.75 6.57756 17.75 7.94513 17.75L8 17.75L8.0184 17.7498C9.18941 17.721 11.6979 18.2103 13.7873 19.7682C13.7981 19.7763 13.8092 19.7841 13.8204 19.7916C14.7315 20.3972 15.8257 20.75 17 20.75C20.1756 20.75 22.75 18.1756 22.75 15L22.75 11C22.75 9.70616 22.3218 8.51018 21.5996 7.54901C19.2991 4.48697 16.174 3.25 12 3.25C9.84999 3.25 7.2206 4.01078 5.12114 5.23963ZM17.0003 16.7501C18.684 16.7501 20.1987 16.0264 21.2503 14.8732V15.0001C21.2503 17.3473 19.3475 19.2501 17.0003 19.2501C16.1373 19.2501 15.3364 18.9937 14.667 18.553C12.2939 16.7909 9.46704 16.2167 7.99145 16.2501C6.56075 16.2501 5.5622 16.2483 4.8084 16.147C4.07462 16.0483 3.68605 15.8679 3.40929 15.5911C3.13253 15.3143 2.95208 14.9258 2.85343 14.192C2.81632 13.916 2.79256 13.6072 2.77734 13.2563C3.27682 13.5692 3.86743 13.7501 4.50028 13.7501H8.00028L8.01867 13.7499C9.18968 13.7212 11.6981 14.2104 13.7876 15.7683C13.7984 15.7764 13.8095 15.7842 13.8207 15.7917C14.7318 16.3973 15.8259 16.7501 17.0003 16.7501ZM17 8.75C15.7574 8.75 14.75 9.75736 14.75 11C14.75 12.2426 15.7574 13.25 17 13.25C18.2426 13.25 19.25 12.2426 19.25 11C19.25 9.75736 18.2426 8.75 17 8.75Z',
};

export const IconSteakStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steak-stroke-rounded IconSteakStrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSteakDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steak-duotone-rounded IconSteakDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSteakTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steak-twotone-rounded IconSteakTwotoneRounded"
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

export const IconSteakSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steak-solid-rounded IconSteakSolidRounded"
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

export const IconSteakBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steak-bulk-rounded IconSteakBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSteakStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steak-stroke-sharp IconSteakStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSteakSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="steak-solid-sharp IconSteakSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSteak: TheIconSelfPack = {
  name: 'Steak',
  StrokeRounded: IconSteakStrokeRounded,
  DuotoneRounded: IconSteakDuotoneRounded,
  TwotoneRounded: IconSteakTwotoneRounded,
  SolidRounded: IconSteakSolidRounded,
  BulkRounded: IconSteakBulkRounded,
  StrokeSharp: IconSteakStrokeSharp,
  SolidSharp: IconSteakSolidSharp,
};