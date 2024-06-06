import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.41699 21.8261L2.1739 17.5852C1.91158 17.323 1.94759 16.8881 2.24947 16.6726C3.68235 15.6496 5.64516 15.812 6.89028 17.0565L6.94596 17.1121C8.19108 18.3566 8.35352 20.3184 7.33004 21.7506C7.11441 22.0523 6.67931 22.0883 6.41699 21.8261Z',
  d2: 'M7 17.002L11.002 13.002',
  d3: 'M14.498 9.50195H14.507',
  d4: 'M13.8631 5.6798C17.2916 3.92935 17.1251 2.68025 18.0622 2.01552C18.3557 1.88859 19.2716 2.46751 20.1767 3.28982C21.2027 4.22208 22.17 5.5026 21.9779 5.99625C21.3543 6.69228 20.0862 6.98316 18.7047 9.52814C16.9362 12.4935 14.4751 13.392 13.0604 13.9085L13.0243 13.9217C12.7108 14.0362 12.3553 14.0029 12.0997 13.7882C11.6727 13.4294 11.344 13.047 11.052 12.7635C9.99414 11.8 9.99414 11.5295 9.99414 11.2752C10.0554 10.246 12.1171 6.74921 13.8631 5.6798Z',
  d5: 'M21.7139 5.15438C21.4463 4.71486 21.0393 4.15215 20.4436 3.5564C19.8479 2.96065 19.2851 2.55374 18.8456 2.28609C18.4933 2.07153 18.3171 1.96426 18.103 2.01068C17.8889 2.05711 17.7423 2.27294 17.4491 2.70459C16.9258 3.47493 15.9683 4.5902 14.4627 5.32619C12.5075 6.28201 11.0859 8.59404 10.3198 10.3047C10.076 10.8492 9.95411 11.1214 10.0159 11.4568C10.0777 11.7921 10.3121 12.0265 10.7808 12.4953L11.5047 13.2192C11.9735 13.6879 12.2079 13.9223 12.5432 13.9841C12.8786 14.0459 13.1508 13.924 13.6953 13.6802C15.406 12.9141 17.718 11.4925 18.6738 9.53729C19.4098 8.03174 20.5251 7.07424 21.2954 6.55093C21.7271 6.25769 21.9429 6.11107 21.9893 5.89698C22.0357 5.68289 21.9285 5.50672 21.7139 5.15438Z',
  d6: 'M6.41674 21.8242L2.17577 17.5833C1.91358 17.3211 1.94957 16.8862 2.2513 16.6707C3.68346 15.6477 5.64529 15.8101 6.88979 17.0546L6.94544 17.1102C8.18994 18.3547 8.3523 20.3165 7.32933 21.7487C7.11381 22.0504 6.67893 22.0864 6.41674 21.8242Z',
  d7: 'M7 17L11 13',
  d8: 'M14.5 9.5H14.509',
  d9: 'M13.8602 5.69347C17.2887 3.94302 17.1222 2.69392 18.0593 2.02919C18.3528 1.90226 19.2687 2.48118 20.1738 3.30349C21.1998 4.23575 22.1671 5.51627 21.975 6.00992C21.3514 6.70595 20.0833 6.99683 18.7018 9.54181C16.9333 12.5072 14.4722 13.4057 13.0575 13.9222L13.0214 13.9354C12.7079 14.0499 12.3524 14.0166 12.0968 13.8019C11.6698 13.4431 11.3411 13.0607 11.0491 12.7772C9.99121 11.8137 9.99121 11.5432 9.99121 11.2889C10.0525 10.2597 12.1142 6.76288 13.8602 5.69347Z',
  d10: 'M7 17.0075L11 13.0055',
  d11: 'M6.41674 21.8342L2.17577 17.5912C1.91358 17.3288 1.94957 16.8937 2.2513 16.6781C3.68346 15.6546 5.64529 15.8171 6.88979 17.0622L6.94544 17.1178C8.18994 18.3629 8.3523 20.3257 7.32933 21.7587C7.11381 22.0605 6.67893 22.0965 6.41674 21.8342Z',
  d12: 'M14.5 9.50378H14.509',
  d13: 'M13.8651 5.68897C17.2936 3.93764 17.1271 2.68792 18.0642 2.02285C18.3577 1.89586 19.2736 2.47507 20.1787 3.29779C21.2047 4.23052 22.172 5.51168 21.9799 6.00558C21.3563 6.70196 20.0882 6.99299 18.7067 9.53925C16.9382 12.5061 14.4771 13.4051 13.0624 13.9218L13.0263 13.935C12.7128 14.0496 12.3573 14.0163 12.1017 13.8015C11.6747 13.4425 11.346 13.0599 11.054 12.7762C9.99609 11.8123 9.99609 11.5416 9.99609 11.2872C10.0574 10.2575 12.1191 6.75892 13.8651 5.68897Z',
  d14: 'M1.8154 16.0603C3.5459 14.8242 5.9164 15.0204 7.42014 16.5241L7.47579 16.5798C8.97954 18.0835 9.17573 20.454 7.93965 22.1845C7.45475 22.8634 6.47634 22.9444 5.88643 22.3544L1.64547 18.1135C1.05556 17.5236 1.13653 16.5452 1.8154 16.0603Z',
  d15: 'M11.7071 12.2929C12.0976 12.6834 12.0976 13.3166 11.7071 13.7071L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L10.2929 12.2929C10.6834 11.9024 11.3166 11.9024 11.7071 12.2929Z',
  d16: 'M20.9731 3.02601C20.3309 2.38383 19.6917 1.92364 19.2066 1.62823C19.0559 1.53632 18.8793 1.42862 18.71 1.35812C18.4956 1.26882 18.239 1.21352 17.9432 1.27766C17.6122 1.34945 17.3907 1.5485 17.2419 1.71765C17.1101 1.86741 16.9572 2.09262 16.8279 2.28309C16.3502 2.98624 15.4832 3.99206 14.1325 4.65233C13.0121 5.20005 12.0834 6.11419 11.3483 7.07729C10.6093 8.04552 9.99197 9.19931 9.59172 10.0931C9.38915 10.5413 9.17224 11.0213 9.27748 11.5926C9.33679 11.9145 9.48055 12.1669 9.655 12.3891C9.80817 12.5842 10.0119 12.7878 10.2249 13.0007L10.9984 13.7743L10.9984 13.7743C11.2113 13.9873 11.415 14.191 11.6101 14.3441C11.8323 14.5186 12.0846 14.6623 12.4065 14.7216C12.9778 14.8269 13.4578 14.61 13.906 14.4074C14.7998 14.0071 15.9536 13.3898 16.9218 12.6508C17.8849 11.9157 18.7991 10.987 19.3468 9.86662C20.0071 8.51594 21.0129 7.64894 21.716 7.17126C21.9065 7.04195 22.1317 6.88904 22.2815 6.75725C22.4506 6.60841 22.6497 6.38692 22.7215 6.05588C22.7856 5.76011 22.7303 5.50349 22.641 5.28909C22.5705 5.11982 22.4456 4.91495 22.3537 4.76425C22.0583 4.27913 21.6153 3.66819 20.9731 3.02601ZM14.4955 8.49988C13.9457 8.49988 13.5 8.94759 13.5 9.49988C13.5 10.0522 13.9457 10.4999 14.4955 10.4999H14.5045C15.0543 10.4999 15.5 10.0522 15.5 9.49988C15.5 8.94759 15.0543 8.49988 14.5045 8.49988H14.4955Z',
  d17: 'M7.98852 19.467C7.98852 17.5377 6.42451 15.9736 4.49521 15.9736C3.51775 15.9736 2.63404 16.3751 2 17.0221L6.94002 21.9622C7.58706 21.3281 7.98852 20.4444 7.98852 19.467Z',
  d18: 'M6.99023 16.9719L10.9826 12.9795',
  d19: 'M21.9685 5.88122L19.6859 3.63281L18.0524 1.99012C18.0068 1.94382 17.9288 1.95433 17.8945 2.00948C15.9778 5.08686 14.1712 5.1026 12.8084 6.46684C11.9532 7.34962 10.1826 9.64543 9.97139 11.4032C9.96783 11.4329 9.9783 11.462 9.99925 11.4832L11.1577 12.6356L12.4746 13.9333C12.4958 13.9542 12.5249 13.9647 12.5546 13.9612C14.3124 13.7502 16.6084 11.9798 17.4912 11.1247C18.8556 9.76201 18.8716 7.95542 21.9492 6.03908C22.0043 6.00474 22.0148 5.92681 21.9685 5.88122Z',
  d20: 'M22.5513 6.40407C22.5102 6.45445 22.4522 6.52234 22.3786 6.60035C22.2333 6.7546 22.0186 6.95774 21.7454 7.14333C21.0418 7.62133 20.0352 8.48893 19.3745 9.84057C18.8266 10.9612 17.9123 11.8901 16.9488 12.6254C15.9802 13.3647 14.921 13.9394 14.0269 14.3398C13.6869 14.4921 13.3414 14.5816 13.092 14.6332C12.9648 14.6595 12.8567 14.6772 12.7787 14.6884L12.2894 14.7406L11.4798 13.931L8.1708 17.2399C8.56474 17.8838 8.79179 18.6408 8.79179 19.4509C8.79179 20.6379 8.30335 21.7121 7.51841 22.4813L6.98906 23L1 17.0111L1.51873 16.4817C2.28791 15.6968 3.36216 15.2084 4.54915 15.2084C5.35864 15.2084 6.11518 15.4351 6.75875 15.8285L10.0681 12.5192L9.25977 11.711L9.3119 11.2217C9.32315 11.1438 9.3408 11.0356 9.36712 10.9084C9.4187 10.6591 9.50825 10.3135 9.66049 9.97356C10.0609 9.07945 10.6357 8.02024 11.3749 7.0517C12.1103 6.08827 13.0392 5.17392 14.1599 4.62611C15.5115 3.96537 16.3792 2.95885 16.8572 2.25522C17.0428 1.98202 17.2459 1.76735 17.4002 1.622C17.4782 1.54848 17.5461 1.49047 17.5965 1.44936L18.2079 1L23.0007 5.79269L22.5513 6.40407ZM14.4955 8.5C13.9457 8.5 13.5 8.94772 13.5 9.5C13.5 10.0523 13.9457 10.5 14.4955 10.5H14.5045C15.0543 10.5 15.5 10.0523 15.5 9.5C15.5 8.94772 15.0543 8.5 14.5045 8.5H14.4955Z',
};

export const IconHandBeaterStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-beater-stroke-rounded IconHandBeaterStrokeRounded"
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

export const IconHandBeaterDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-beater-duotone-rounded IconHandBeaterDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconHandBeaterTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-beater-twotone-rounded IconHandBeaterTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHandBeaterSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-beater-solid-rounded IconHandBeaterSolidRounded"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandBeaterBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-beater-bulk-rounded IconHandBeaterBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandBeaterStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-beater-stroke-sharp IconHandBeaterStrokeSharp"
    >
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandBeaterSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-beater-solid-sharp IconHandBeaterSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHandBeater: TheIconSelfPack = {
  name: 'HandBeater',
  StrokeRounded: IconHandBeaterStrokeRounded,
  DuotoneRounded: IconHandBeaterDuotoneRounded,
  TwotoneRounded: IconHandBeaterTwotoneRounded,
  SolidRounded: IconHandBeaterSolidRounded,
  BulkRounded: IconHandBeaterBulkRounded,
  StrokeSharp: IconHandBeaterStrokeSharp,
  SolidSharp: IconHandBeaterSolidSharp,
};