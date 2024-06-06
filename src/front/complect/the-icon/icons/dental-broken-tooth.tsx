import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9766 5.17632C12.1974 4.99352 12.4268 4.78582 12.6639 4.55032C14.9635 2.2656 18.0955 2.71292 19.5629 4.55032C23.1682 9.06434 19.1305 16.1442 16.8219 20.2396C16.559 20.7058 16.0355 21 15.4715 21C14.5719 21 13.8687 20.2801 13.8395 19.4399C13.7789 17.7005 13.3749 15.5947 12 15.5C10.6251 15.5947 10.1743 17.7005 10.1138 19.4399C10.0845 20.2801 9.38138 21 8.48173 21C7.9178 21 7.39422 20.7058 7.13139 20.2396C3.84385 14.4077 2.95445 10.7488 3.00177 8.4C5 8.5 5.99221 7.5 5.99221 5.7C8 6 9 4.82865 9 3C10 3 10.5745 3.84009 11.2894 4.55032C11.5264 4.78582 11.7558 4.99352 11.9766 5.17632ZM11.9766 5.17632C13.4694 6.41228 14.5 6.5 15 6',
  d2: 'M12 15.5C10.6251 15.5947 10.1743 17.7005 10.1138 19.4399C10.0845 20.2801 9.38138 21 8.48173 21C7.9178 21 7.39422 20.7058 7.13139 20.2396C3.84385 14.4077 2.95445 10.7488 3.00177 8.4C5 8.5 5.99221 7.5 5.99221 5.7C8 6 9 4.82865 9 3C10 3 10.5745 3.84009 11.2894 4.55032C11.5264 4.78582 11.7558 4.99352 11.9766 5.17632C12.1974 4.99352 12.4268 4.78582 12.6639 4.55032C14.9635 2.2656 18.0955 2.71292 19.5629 4.55032C23.1414 9.03081 19.1901 16.0391 16.8736 20.1478L16.8219 20.2396C16.559 20.7058 16.0355 21 15.4715 21C14.5719 21 13.8687 20.2801 13.8395 19.4399C13.7789 17.7005 13.3749 15.5947 12 15.5Z',
  d3: 'M12 15.5C10.6251 15.5947 10.1743 17.7005 10.1138 19.4399C10.0845 20.2801 9.38138 21 8.48173 21C7.9178 21 7.39422 20.7058 7.13139 20.2396C3.84385 14.4077 2.95445 10.7488 3.00177 8.4C5 8.5 5.99221 7.5 5.99221 5.7C8 6 9 4.82865 9 3C10 3 10.5745 3.84009 11.2894 4.55031C11.5264 4.78582 11.7558 4.99351 11.9766 5.17632C13.4694 6.41228 14.5 6.5 15 6',
  d4: 'M8.25 3C8.25 2.58579 8.58579 2.25 9 2.25C9.73782 2.25 10.2964 2.56925 10.7322 2.93304C10.9456 3.11114 11.1398 3.30844 11.314 3.49139C11.3698 3.5501 11.9253 4.11812 11.9766 4.17265C11.9766 4.17265 12.0819 4.07133 12.1353 4.01826C14.7379 1.43261 18.3911 1.88126 20.1489 4.08229C22.1819 6.62765 22.0016 9.83483 21.1289 12.7659C20.2698 15.6517 18.6826 18.4665 17.5403 20.4924L17.5403 20.4924L17.4752 20.6079C17.0704 21.3259 16.2872 21.75 15.4715 21.75C14.1602 21.75 13.133 20.7024 13.0899 19.466C13.0607 18.627 12.9488 17.759 12.7095 17.1141C12.478 16.4902 12.2207 16.2926 11.9999 16.2544C11.7719 16.2936 11.5051 16.4986 11.2635 17.1236C11.0146 17.7677 10.8923 18.6342 10.8633 19.466C10.8203 20.7024 9.793 21.75 8.48174 21.75C7.666 21.75 6.88285 21.3259 6.47805 20.6079C3.16264 14.7266 2.20067 10.9284 2.25192 8.38489C2.25601 8.18214 2.34203 7.98968 2.49036 7.8514C2.6387 7.71312 2.83672 7.6408 3.03926 7.65094C3.9167 7.69485 4.43639 7.49124 4.73585 7.21303C5.03242 6.93751 5.24221 6.46854 5.24221 5.7C5.24221 5.48174 5.33729 5.27431 5.50263 5.13183C5.66797 4.98936 5.88718 4.92598 6.10304 4.95823C6.94579 5.08415 7.4395 4.88745 7.72796 4.60881C8.03326 4.3139 8.25 3.79166 8.25 3Z',
  d5: 'M14.9948 6.00007C14.4943 6.50007 13.4899 6.41235 11.9915 5.17639M11.9915 5.17639C12.2132 4.99359 12.4434 4.78589 12.6813 4.55039C14.9895 2.26567 18.0776 2.71299 19.5504 4.55039C20.5677 5.81947 23.279 9.48757 16.8547 20.2397C16.5909 20.7059 16.0654 21.0001 15.4993 21.0001C14.5964 21.0001 13.8906 20.2802 13.8613 19.44C13.799 17.658 13.4534 15.6036 11.9915 15.6036C10.5296 15.6036 10.1841 17.658 10.1218 19.44C10.0925 20.2802 9.3867 21.0001 8.48372 21.0001C7.9177 21.0001 7.39223 20.7059 7.12844 20.2397C4.01398 14.7353 2.99316 11.2994 2.99316 8.41761C5.29185 8.41761 5.96948 7.26205 5.96948 5.84718C7.66756 5.72123 8.90426 5.33269 8.97917 2.99734M11.9915 5.17639C11.7699 4.99359 10.3439 3.62459 10.1061 3.38909C9.60824 2.89618 8.87948 3.00542 8.2352 3.00542',
  d6: 'M8.24921 2.25H8.9992C9.73703 2.25 10.2956 2.56925 10.7314 2.93304C10.9448 3.11114 11.1391 3.30844 11.3132 3.49139C11.369 3.5501 11.4219 3.60631 11.4732 3.66084C11.5906 3.78554 11.6996 3.90145 11.8172 4.01826C11.8706 4.07133 11.9235 4.12278 11.9758 4.17265C12.0282 4.12278 12.0811 4.07133 12.1345 4.01826C14.7371 1.43261 18.3903 1.88126 20.1481 4.08229C22.166 6.60876 22.0032 9.78751 21.1477 12.6999C20.2934 15.608 18.6922 18.448 17.5419 20.4881L17.5261 20.5161L17.4744 20.6079C17.0696 21.3259 16.2864 21.75 15.4707 21.75C14.1595 21.75 13.1322 20.7024 13.0891 19.466C13.0599 18.627 12.948 17.759 12.7087 17.1141C12.4772 16.4902 12.2199 16.2926 11.9991 16.2544C11.7711 16.2936 11.5044 16.4986 11.2628 17.1236C11.0138 17.7677 10.8915 18.6342 10.8625 19.466C10.8195 20.7024 9.7922 21.75 8.48094 21.75C7.66521 21.75 6.88205 21.3259 6.47726 20.6079C3.15939 14.7222 2.25078 11.1828 2.25098 8.39994L2.25103 7.61153L3.03846 7.65094C3.91591 7.69485 4.43559 7.49124 4.73506 7.21303C5.03162 6.93751 5.24141 6.46854 5.24141 5.7V4.82961L6.10225 4.95823C6.945 5.08415 7.4387 4.88745 7.72716 4.60881C8.03247 4.3139 8.24921 3.79166 8.24921 3V2.25Z',
};

export const IconDentalBrokenToothStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-broken-tooth-stroke-rounded IconDentalBrokenToothStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDentalBrokenToothDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-broken-tooth-duotone-rounded IconDentalBrokenToothDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDentalBrokenToothTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-broken-tooth-twotone-rounded IconDentalBrokenToothTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDentalBrokenToothSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-broken-tooth-solid-rounded IconDentalBrokenToothSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDentalBrokenToothBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-broken-tooth-bulk-rounded IconDentalBrokenToothBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDentalBrokenToothStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-broken-tooth-stroke-sharp IconDentalBrokenToothStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDentalBrokenToothSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dental-broken-tooth-solid-sharp IconDentalBrokenToothSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDentalBrokenTooth: TheIconSelfPack = {
  name: 'DentalBrokenTooth',
  StrokeRounded: IconDentalBrokenToothStrokeRounded,
  DuotoneRounded: IconDentalBrokenToothDuotoneRounded,
  TwotoneRounded: IconDentalBrokenToothTwotoneRounded,
  SolidRounded: IconDentalBrokenToothSolidRounded,
  BulkRounded: IconDentalBrokenToothBulkRounded,
  StrokeSharp: IconDentalBrokenToothStrokeSharp,
  SolidSharp: IconDentalBrokenToothSolidSharp,
};