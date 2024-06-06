import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 20.5C18.8888 20.3004 19.5638 19.9722 20.1088 19.4327C21.5 18.0554 21.5 15.8386 21.5 11.405C21.5 6.97145 21.5 4.75466 20.1088 3.37733C18.7175 2 16.4783 2 12 2C7.52166 2 5.28249 2 3.89124 3.37733C2.5 4.75466 2.5 6.97145 2.5 11.405C2.5 15.8386 2.5 18.0554 3.89124 19.4327C4.43619 19.9722 5.11124 20.3004 6 20.5',
  d2: 'M2.5 8.5H21.5',
  d3: 'M6.99981 5.5H7.00879',
  d4: 'M10.9998 5.5H11.0088',
  d5: 'M11.9991 13C10.5744 13 9.65061 13.9085 8.55807 14.2397C8.11384 14.3744 7.89172 14.4417 7.80183 14.5366C7.71194 14.6315 7.68562 14.7702 7.63297 15.0476C7.06963 18.0157 8.30095 20.7598 11.2375 21.8279C11.553 21.9426 11.7108 22 12.0007 22C12.2906 22 12.4484 21.9426 12.7639 21.8279C15.7002 20.7598 16.9304 18.0157 16.3669 15.0476C16.3142 14.7701 16.2879 14.6314 16.198 14.5365C16.1081 14.4416 15.886 14.3743 15.4418 14.2397C14.3488 13.9086 13.4239 13 11.9991 13Z',
  d6: 'M21.5 15.3132C21.3959 17.4129 21.0846 18.7221 20.1534 19.6534C19.2221 20.5846 17.9129 20.8959 15.8132 21H14.3169C16.1197 19.6559 16.818 17.4235 16.3669 15.0476C16.3142 14.7701 16.2879 14.6314 16.198 14.5365C16.1081 14.4416 15.886 14.3743 15.4418 14.2397C15.0456 14.1197 14.6714 13.9238 14.2876 13.7228C13.6126 13.3693 12.9075 13 11.9991 13C11.0908 13 10.3861 13.3693 9.71151 13.7228L9.7115 13.7228C9.32794 13.9238 8.95409 14.1197 8.55807 14.2397C8.11384 14.3744 7.89172 14.4417 7.80183 14.5366C7.71194 14.6315 7.68562 14.7702 7.63297 15.0476C7.18202 17.4235 7.88107 19.6559 9.68425 21H8.18676C6.08705 20.8959 4.77792 20.5846 3.84664 19.6534C2.91537 18.7221 2.60406 17.4129 2.5 15.3132V8.5H21.5V15.3132Z',
  d7: 'M17.2167 1.42649C15.8896 1.24996 14.1968 1.24998 12.0721 1.25H11.928C9.80325 1.24998 8.11037 1.24996 6.78326 1.42649C5.41409 1.60862 4.28855 1.99442 3.39751 2.87601C2.50512 3.75895 2.11335 4.87652 1.92864 6.23582C1.74996 7.55079 1.74998 9.22737 1.75 11.3279V11.4743C1.74998 13.5749 1.74996 15.2515 1.92864 16.5664C2.11335 17.9257 2.50512 19.0433 3.39751 19.9262C3.66903 20.1949 3.96289 20.4179 4.27962 20.6034C4.67714 20.8361 5.17047 20.6555 5.40211 20.2573C5.7069 19.7334 5.41486 19.0809 4.94582 18.697C4.88478 18.6471 4.82672 18.5946 4.7711 18.5396C4.30538 18.0788 4.01809 17.4432 3.86327 16.3039C3.7045 15.1355 3.70238 13.5917 3.70238 11.4011C3.70238 10.5327 3.70271 9.76594 3.71301 9.08391C3.71715 8.8097 3.71921 8.67259 3.8068 8.58632C3.89439 8.50005 4.03262 8.50005 4.3091 8.50005H19.6909C19.9674 8.50005 20.1056 8.50005 20.1932 8.58632C20.2808 8.67259 20.2829 8.8097 20.287 9.08391C20.2973 9.76594 20.2976 10.5327 20.2976 11.4011C20.2976 13.5917 20.2955 15.1355 20.1367 16.3039C19.9819 17.4432 19.6946 18.0788 19.2289 18.5396C19.1733 18.5946 19.1152 18.6471 19.0542 18.697C18.5851 19.0809 18.2931 19.7334 18.5979 20.2573C18.8295 20.6555 19.3229 20.8361 19.7204 20.6034C20.0371 20.4179 20.331 20.1949 20.6025 19.9262C21.4949 19.0433 21.8866 17.9257 22.0714 16.5664C22.25 15.2515 22.25 13.5749 22.25 11.4744V11.3279C22.25 9.22736 22.25 7.55079 22.0714 6.23582C21.8866 4.87652 21.4949 3.75895 20.6025 2.87601C19.7114 1.99442 18.5859 1.60862 17.2167 1.42649ZM7.101 3.875C6.55118 3.875 6.10547 4.32272 6.10547 4.875C6.10547 5.42728 6.55118 5.875 7.101 5.875H7.10994C7.65976 5.875 8.10547 5.42728 8.10547 4.875C8.10547 4.32272 7.65976 3.875 7.10994 3.875H7.101ZM11.101 3.875C10.5512 3.875 10.1055 4.32272 10.1055 4.875C10.1055 5.42728 10.5512 5.875 11.101 5.875H11.1099C11.6598 5.875 12.1055 5.42728 12.1055 4.875C12.1055 4.32272 11.6598 3.875 11.1099 3.875H11.101Z',
  d8: 'M9.82193 12.8228C10.408 12.5343 11.1173 12.25 11.9982 12.25C12.8792 12.25 13.5887 12.5343 14.175 12.8227C14.3696 12.9184 14.5403 13.0079 14.6971 13.09C15.0508 13.2754 15.3336 13.4236 15.6583 13.522L15.6794 13.5284C15.8833 13.5901 16.0689 13.6463 16.2134 13.7001C16.3392 13.7469 16.5665 13.8359 16.7415 14.0207C16.8965 14.1843 16.9706 14.3642 17.0137 14.5078C17.0498 14.6276 17.0761 14.7667 17.0986 14.8853L17.0986 14.8853L17.1028 14.9077C17.7229 18.174 16.3583 21.3182 13.0193 22.5327L12.9942 22.5418C12.6872 22.6536 12.4225 22.75 11.9998 22.75C11.5771 22.75 11.3124 22.6536 11.0053 22.5418L10.9802 22.5327C7.6413 21.3183 6.27521 18.1743 6.89521 14.9077L6.89944 14.8854C6.92191 14.7667 6.94823 14.6277 6.98423 14.5079C7.02737 14.3643 7.10146 14.1844 7.25639 14.0208C7.43141 13.8361 7.65866 13.747 7.7845 13.7002C7.92895 13.6464 8.11455 13.5902 8.31846 13.5284L8.31846 13.5284L8.3396 13.522C8.66413 13.4236 8.94654 13.2755 9.29999 13.0902C9.45671 13.008 9.62741 12.9185 9.82193 12.8228Z',
  d9: 'M12.0721 1.25C14.1968 1.24998 15.8896 1.24996 17.2167 1.4265C18.5859 1.60862 19.7114 1.99442 20.6025 2.87601C21.4949 3.75895 21.8866 4.87652 22.0714 6.23582C22.25 7.55079 22.25 9.22736 22.25 11.3279V11.4744C22.25 13.5749 22.25 15.2515 22.0714 16.5664C21.8866 17.9257 21.4949 19.0433 20.6025 19.9262C20.331 20.1949 20.0371 20.4179 19.7204 20.6034C19.3229 20.8361 18.8295 20.6555 18.5979 20.2573C18.2931 19.7334 18.5851 19.0809 19.0542 18.697C19.1152 18.6471 19.1733 18.5946 19.2289 18.5396C19.6946 18.0788 19.9819 17.4432 20.1367 16.3039C20.2955 15.1355 20.2976 13.5917 20.2976 11.4011C20.2976 10.5327 20.2973 9.76594 20.287 9.08391C20.2829 8.8097 20.2808 8.67259 20.1932 8.58632C20.1056 8.50005 19.9674 8.50005 19.6909 8.50005H4.3091C4.03262 8.50005 3.89439 8.50005 3.8068 8.58632C3.71922 8.67259 3.71715 8.8097 3.71301 9.08391C3.70271 9.76594 3.70238 10.5327 3.70238 11.4011C3.70238 13.5917 3.7045 15.1355 3.86327 16.3039C4.01809 17.4432 4.30538 18.0788 4.7711 18.5396C4.82672 18.5946 4.88478 18.6471 4.94582 18.697C5.41486 19.0809 5.70691 19.7334 5.40211 20.2573C5.17047 20.6555 4.67715 20.8361 4.27962 20.6034C3.96289 20.4179 3.66903 20.1949 3.39752 19.9262C2.50512 19.0433 2.11336 17.9257 1.92865 16.5664C1.74996 15.2515 1.74998 13.5749 1.75 11.4743V11.3279C1.74998 9.22737 1.74996 7.55079 1.92865 6.23582C2.11336 4.87652 2.50512 3.75895 3.39752 2.87601C4.28855 1.99442 5.41409 1.60862 6.78326 1.4265C8.11037 1.24996 9.80325 1.24998 11.928 1.25H12.0721Z',
  d10: 'M6.10547 4.875C6.10547 4.32272 6.55118 3.875 7.101 3.875H7.10994C7.65976 3.875 8.10547 4.32272 8.10547 4.875C8.10547 5.42728 7.65976 5.875 7.10994 5.875H7.101C6.55118 5.875 6.10547 5.42728 6.10547 4.875Z',
  d11: 'M10.1055 4.875C10.1055 4.32272 10.5512 3.875 11.101 3.875H11.1099C11.6598 3.875 12.1055 4.32272 12.1055 4.875C12.1055 5.42728 11.6598 5.875 11.1099 5.875H11.101C10.5512 5.875 10.1055 5.42728 10.1055 4.875Z',
  d12: 'M3 7.99805H21',
  d13: 'M7 4.99902H7.00898',
  d14: 'M11 4.99902H11.009',
  d15: 'M12.007 14.0068C10.5981 14.0068 9.60267 15.2304 8.21755 15.2268C7.44561 18.4259 8.79604 20.8115 11.1917 21.7496C11.4715 21.8516 11.7512 22.0017 12.0084 22.0017C12.2655 22.0017 12.4054 21.9507 12.6853 21.8488C15.6924 20.7534 16.4275 17.9022 15.786 15.222C14.5052 15.222 13.2707 14.0068 12.007 14.0068Z',
  d16: 'M6 19.9971H3.01C3.00448 19.9971 3 19.9926 3 19.9871V2.00902C3 2.0035 3.00448 1.99902 3.01 1.99902H20.99C20.9955 1.99902 21 2.0035 21 2.00902V19.9871C21 19.9926 20.9955 19.9971 20.99 19.9971H18',
  d17: 'M3.225 1.25C2.68652 1.25 2.25 1.68652 2.25 2.225V19.775C2.25 20.3135 2.68652 20.75 3.225 20.75H6.15V18.8H4.2V8H19.8V18.8H17.85V20.75H20.775C21.3135 20.75 21.75 20.3135 21.75 19.775V2.225C21.75 1.68652 21.3135 1.25 20.775 1.25H3.225ZM8 3.625H6V5.625H8V3.625ZM12 3.625H10V5.625H12V3.625Z',
  d18: 'M9.80224 13.9119C10.3589 13.6233 11.0787 13.25 12 13.25C12.9252 13.25 13.6458 13.6239 14.2031 13.9132L14.2419 13.9333C14.8367 14.2417 15.2584 14.448 15.7836 14.448H16.3707L16.5117 15.0171C16.9717 16.8747 16.7533 18.6232 15.9626 20.01C15.1694 21.4011 13.8274 22.3781 12.1498 22.7195L12 22.75L11.8502 22.7195C10.1727 22.3781 8.8306 21.4011 8.03749 20.01C7.24678 18.6232 7.02833 16.8747 7.4884 15.0171L7.62934 14.448H8.21647C8.74282 14.448 9.1663 14.2413 9.76124 13.9332L9.80224 13.9119Z',
};

export const IconWebProtectionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-protection-stroke-rounded IconWebProtectionStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconWebProtectionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-protection-duotone-rounded IconWebProtectionDuotoneRounded"
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

export const IconWebProtectionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-protection-twotone-rounded IconWebProtectionTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <path 
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

export const IconWebProtectionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-protection-solid-rounded IconWebProtectionSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconWebProtectionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-protection-bulk-rounded IconWebProtectionBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebProtectionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-protection-stroke-sharp IconWebProtectionStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWebProtectionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="web-protection-solid-sharp IconWebProtectionSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfWebProtection: TheIconSelfPack = {
  name: 'WebProtection',
  StrokeRounded: IconWebProtectionStrokeRounded,
  DuotoneRounded: IconWebProtectionDuotoneRounded,
  TwotoneRounded: IconWebProtectionTwotoneRounded,
  SolidRounded: IconWebProtectionSolidRounded,
  BulkRounded: IconWebProtectionBulkRounded,
  StrokeSharp: IconWebProtectionStrokeSharp,
  SolidSharp: IconWebProtectionSolidSharp,
};