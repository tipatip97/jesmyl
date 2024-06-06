import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15.5 15L14 10.5C12.3432 10.4999 12 11.843 12 13.4999V15',
  d2: 'M8.5 15L10 10.5C11.6568 10.4999 12 11.843 12 13.4999V15',
  d3: 'M21.9779 21.9999C20.8283 21.3294 18.8918 19.8143 16.2887 20.008C15.6292 20.057 15.2991 20.0816 14.9976 20.0584C14.696 20.0352 14.6875 20.0333 14.6706 20.0293C13.139 19.6745 12 18.3357 12 16.7382V3.19665C12 2.53578 12.5357 2.00003 13.1966 2C13.6825 1.99997 14.1202 2.29381 14.3042 2.74356L17.0224 9.38799C18.088 11.993 18.6209 13.2954 19.5497 13.9653C19.6069 14.0065 19.7128 14.0777 19.7726 14.1149C20.7443 14.721 21.1628 14.721 22 14.721',
  d4: 'M2.02208 22C3.17173 21.3295 5.1082 19.8144 7.71127 20.008C8.37081 20.057 8.70094 20.0816 9.00245 20.0584C9.304 20.0353 9.31246 20.0333 9.32938 20.0294C10.861 19.6746 12 18.3357 12 16.7382V3.19664C12 2.53575 11.4642 2 10.8034 2C10.3175 2 9.8798 2.29382 9.69582 2.74355L6.97762 9.38804C5.91195 11.993 5.37912 13.2955 4.45028 13.9654C4.39315 14.0066 4.28717 14.0777 4.22741 14.115C3.25573 14.721 2.83715 14.721 2 14.721',
  d5: 'M12 3.19669V16.7382C12 18.3357 10.861 19.6746 9.32938 20.0294C9.31246 20.0333 9.304 20.0353 9.00245 20.0584C8.70094 20.0816 8.37081 20.057 7.71127 20.008C5.1082 19.8144 3.17173 21.3295 2.02208 22L2 14.721C2.83715 14.721 3.25573 14.721 4.22741 14.115C4.28717 14.0777 4.39315 14.0066 4.45028 13.9654C5.37912 13.2955 5.91195 11.993 6.97762 9.38804L9.69582 2.74355C9.8798 2.29382 10.3175 2 10.8034 2C11.4642 2 12 2.53581 12 3.19669Z',
  d6: 'M14.3042 2.74356L17.0224 9.38799C18.088 11.993 18.6209 13.2954 19.5497 13.9653C19.6069 14.0065 19.7128 14.0777 19.7726 14.1149C20.7443 14.721 21.1628 14.721 22 14.721L21.9779 21.9999C20.8283 21.3294 18.8918 19.8143 16.2887 20.008C15.6292 20.057 15.2991 20.0816 14.9976 20.0584C14.696 20.0352 14.6875 20.0333 14.6706 20.0293C13.139 19.6745 12 18.3357 12 16.7382V3.19665C12 2.53578 12.5357 2.00003 13.1966 2C13.6825 1.99997 14.1202 2.29381 14.3042 2.74356Z',
  d7: 'M13.3644 1.25C12.859 1.25003 12.4492 1.67522 12.4492 2.19972V10.9254C12.5857 10.7764 12.7435 10.6455 12.9251 10.5377C13.2962 10.3172 13.7411 10.2079 14.2594 10.2079C14.4392 10.2079 14.5988 10.3273 14.6556 10.5043L16.3265 15.7057C16.3995 15.9328 16.2812 16.1783 16.0624 16.254C15.8435 16.3297 15.6069 16.207 15.534 15.9799L13.9636 11.0915C13.7056 11.1223 13.5023 11.1937 13.3402 11.29C13.1221 11.4195 12.9528 11.6092 12.821 11.8627C12.5472 12.3893 12.4492 13.1624 12.4492 14.1088V17.8519C12.4492 19.4803 13.5664 20.8594 15.0891 21.231C15.534 21.3396 16.0294 21.2569 16.7779 21.1991C18.6043 21.0582 20.1587 21.6625 21.3743 22.3297C22.0004 22.6733 22.3134 22.8451 22.523 22.696C22.7325 22.5469 22.7337 22.1667 22.7359 21.4065L22.749 16.9339C22.7502 16.5122 22.7508 16.3013 22.6581 16.1635C22.6524 16.155 22.6486 16.1497 22.6425 16.1416C22.5433 16.0098 22.3266 15.9583 21.8932 15.8553C21.4634 15.7532 21.0322 15.5524 20.4686 15.1876C19.8746 14.7431 19.1592 13.9154 18.7203 13.0404C18.2854 12.1732 17.8343 11.029 17.2478 9.54148L14.2116 1.84012C14.0709 1.48318 13.7361 1.24998 13.3644 1.25Z',
  d8: 'M10.6375 1.25C11.143 1.25003 11.5527 1.67522 11.5527 2.19972V10.9254C11.4162 10.7764 11.2585 10.6455 11.0768 10.5377C10.7057 10.3172 10.2608 10.2079 9.74258 10.2079C9.56278 10.2079 9.40316 10.3273 9.34631 10.5043L7.67541 15.7057C7.60245 15.9328 7.72074 16.1783 7.9396 16.254C8.15846 16.3297 8.39503 16.207 8.46798 15.9799L10.0383 11.0915C10.2964 11.1223 10.4996 11.1937 10.6618 11.29C10.8798 11.4195 11.0492 11.6092 11.181 11.8627C11.4548 12.3893 11.5527 13.1624 11.5527 14.1088V17.8519C11.5527 19.4803 10.4356 20.8594 8.9129 21.231C8.46798 21.3396 7.97251 21.2569 7.22409 21.1991C5.3977 21.0582 3.84326 21.6625 2.62764 22.3297C2.00158 22.6733 1.68855 22.8451 1.47898 22.696C1.26941 22.5469 1.2683 22.1667 1.26607 21.4065L1.253 16.9339C1.25176 16.5122 1.25115 16.3013 1.34382 16.1635C1.34953 16.155 1.35332 16.1497 1.35944 16.1416C1.45867 16.0098 1.67539 15.9583 2.1088 15.8553C2.53852 15.7532 2.96977 15.5524 3.53338 15.1876C4.12737 14.7431 4.84273 13.9154 5.28161 13.0404C5.71657 12.1732 6.16766 11.029 6.75411 9.54148L9.79036 1.84012C9.93108 1.48318 10.2659 1.24998 10.6375 1.25Z',
  d9: 'M22.001 22L18.5154 20.008L15.0076 20C13.0032 20 12.001 18.3357 12.001 16.7382V3.19665C12.001 2.53578 12.5379 2.00003 13.2002 2C13.6872 1.99997 14.1259 2.29381 14.3103 2.74356L19.0165 14L22.001 15',
  d10: 'M2.00195 22L5.48757 20.008L8.99531 20C10.9997 20 12.002 18.3357 12.002 16.7382V3.19665C12.002 2.53578 11.465 2.00003 10.8027 2C10.3157 1.99997 9.87705 2.29381 9.69265 2.74356L4.98646 14L2.00195 15',
  d11: 'M13.3791 1.25C12.8736 1.25003 12.4639 1.67495 12.4639 2.19911V10.9193C12.6004 10.7703 12.7581 10.6395 12.9398 10.5317C13.3109 10.3114 13.7558 10.2022 14.274 10.2022C14.4538 10.2022 14.6134 10.3215 14.6703 10.4984L16.3412 15.6965L15.5486 15.9705L13.9783 11.0853C13.7202 11.116 13.517 11.1873 13.3548 11.2836C13.1368 11.413 12.9674 11.6026 12.8356 11.856C12.5618 12.3822 12.4639 13.1548 12.4639 14.1006V17.8414C12.4639 19.4686 13.581 20.8469 15.1037 21.2183C15.5486 21.3268 16.0441 21.2441 16.7925 21.1864C18.6189 21.0455 21.5349 22.0832 22.7505 22.75V15.9705C22.7505 15.9705 21.389 15.8561 20.4832 15.1787C19.8892 14.7345 19.1739 13.9073 18.735 13.0329C18.3 12.1662 17.8489 11.0228 17.2625 9.53619L14.2262 1.83975C14.0855 1.48303 13.7507 1.24998 13.3791 1.25Z',
  d12: 'M10.6205 1.25C11.1259 1.25003 11.5357 1.67495 11.5357 2.19911V10.9193C11.3992 10.7703 11.2414 10.6395 11.0598 10.5317C10.6887 10.3114 10.2438 10.2022 9.72553 10.2022C9.54573 10.2022 9.38611 10.3215 9.32926 10.4984L7.65836 15.6965L8.45094 15.9705L10.0213 11.0853C10.2793 11.116 10.4826 11.1873 10.6447 11.2836C10.8628 11.413 11.0321 11.6026 11.1639 11.856C11.4377 12.3822 11.5357 13.1548 11.5357 14.1006V17.8414C11.5357 19.4686 10.4185 20.8469 8.89585 21.2183C8.45094 21.3268 7.95546 21.2441 7.20704 21.1864C5.38065 21.0455 2.46463 22.0832 1.24902 22.75V15.9705C1.24902 15.9705 2.6106 15.8561 3.51634 15.1787C4.11032 14.7345 4.82568 13.9073 5.26456 13.0329C5.69952 12.1662 6.15062 11.0228 6.73707 9.53619L9.77331 1.83975C9.91404 1.48303 10.2488 1.24998 10.6205 1.25Z',
};

export const IconHandPrayerStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-prayer-stroke-rounded IconHandPrayerStrokeRounded"
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

export const IconHandPrayerDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-prayer-duotone-rounded IconHandPrayerDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconHandPrayerTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-prayer-twotone-rounded IconHandPrayerTwotoneRounded"
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

export const IconHandPrayerSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-prayer-solid-rounded IconHandPrayerSolidRounded"
    >
      <path 
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

export const IconHandPrayerBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-prayer-bulk-rounded IconHandPrayerBulkRounded"
    >
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

export const IconHandPrayerStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-prayer-stroke-sharp IconHandPrayerStrokeSharp"
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
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHandPrayerSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hand-prayer-solid-sharp IconHandPrayerSolidSharp"
    >
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

export const iconPackOfHandPrayer: TheIconSelfPack = {
  name: 'HandPrayer',
  StrokeRounded: IconHandPrayerStrokeRounded,
  DuotoneRounded: IconHandPrayerDuotoneRounded,
  TwotoneRounded: IconHandPrayerTwotoneRounded,
  SolidRounded: IconHandPrayerSolidRounded,
  BulkRounded: IconHandPrayerBulkRounded,
  StrokeSharp: IconHandPrayerStrokeSharp,
  SolidSharp: IconHandPrayerSolidSharp,
};