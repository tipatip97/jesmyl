import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.198 3H3.802C3.05147 3 2.6762 3 2.41637 3.17726C2.28768 3.26505 2.18133 3.38109 2.10567 3.51627C1.9529 3.78921 1.99024 4.15793 2.06493 4.89537C2.18958 6.12624 2.2519 6.74168 2.57823 7.18168C2.74084 7.40095 2.94701 7.58519 3.18414 7.72315C3.65999 8 4.28635 8 5.53908 8H18.4609C19.7136 8 20.34 8 20.8159 7.72315C21.053 7.58519 21.2592 7.40095 21.4218 7.18168C21.7481 6.74168 21.8104 6.12624 21.9351 4.89537C22.0098 4.15793 22.0471 3.78921 21.8943 3.51627C21.8187 3.38109 21.7123 3.26505 21.5836 3.17726C21.3238 3 20.9485 3 20.198 3Z',
  d2: 'M3 8L3 13.0408C3 16.7928 3 18.6688 4.17157 19.8344C5.34315 21 7.22876 21 11 21H13C16.7712 21 18.6569 21 19.8284 19.8344C21 18.6688 21 16.7928 21 13.0408V8',
  d3: 'M10 11H14',
  d4: 'M3 13.0408V8H21V13.0408C21 16.7928 21 18.6688 19.8284 19.8344C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8344C3 18.6688 3 16.7928 3 13.0408Z',
  d5: 'M20.2317 2.25C20.578 2.24997 20.8919 2.24995 21.15 2.27593C21.4268 2.3038 21.7283 2.36808 22.0063 2.5577C22.2302 2.71048 22.4162 2.91299 22.5488 3.14997C22.7142 3.44548 22.7495 3.75255 22.75 4.03017C22.7505 4.28782 22.7191 4.59746 22.6847 4.93696V4.93698C22.6254 5.52264 22.5687 6.08311 22.4897 6.48104C22.4067 6.89932 22.2796 7.28401 22.0242 7.62846C21.8006 7.92989 21.5177 8.18253 21.193 8.37142C20.8231 8.58661 20.4263 8.67251 19.9991 8.71218C19.5915 8.75003 19.0924 8.75002 18.4954 8.75H5.50459H5.50457C4.90758 8.75002 4.40847 8.75003 4.00093 8.71218C3.57375 8.67251 3.17685 8.58661 2.80698 8.37142C2.48232 8.18253 2.19938 7.92989 1.97582 7.62846C1.72037 7.28401 1.59326 6.89932 1.51028 6.48104C1.43134 6.0831 1.3746 5.52267 1.3153 4.93699C1.28089 4.59748 1.2495 4.28782 1.25001 4.03017C1.25055 3.75255 1.28581 3.44548 1.45121 3.14997C1.58385 2.91299 1.76976 2.71048 1.9937 2.5577C2.27165 2.36808 2.57318 2.3038 2.85005 2.27593C3.10814 2.24995 3.42197 2.24997 3.76831 2.25H3.76838H20.2316H20.2317Z',
  d6: 'M3.225 7.25C3.76348 7.25 4.2 7.68279 4.2 8.21667V13.0895C4.2 14.9304 4.20209 16.2133 4.334 17.1811C4.46206 18.1206 4.69604 18.6173 5.05495 18.9713C5.41455 19.326 5.92009 19.5577 6.87491 19.6844C7.85726 19.8146 9.1591 19.8167 11.025 19.8167H12.975C14.8409 19.8167 16.1427 19.8146 17.1251 19.6844C18.0799 19.5577 18.5855 19.326 18.9451 18.9713C19.304 18.6173 19.5379 18.1206 19.666 17.1811C19.7979 16.2133 19.8 14.9304 19.8 13.0895V8.21667C19.8 7.68279 20.2365 7.25 20.775 7.25C21.3135 7.25 21.75 7.68279 21.75 8.21667V13.1605C21.75 14.9136 21.75 16.3277 21.5984 17.44C21.4409 18.5957 21.1038 19.5692 20.3204 20.3419C19.5377 21.1139 18.5529 21.4456 17.3836 21.6006C16.2569 21.75 14.8242 21.75 13.046 21.75H10.954C9.17585 21.75 7.74311 21.75 6.61637 21.6006C5.44714 21.4456 4.46231 21.1139 3.67962 20.3419C2.89625 19.5692 2.55909 18.5957 2.40157 17.44C2.24995 16.3277 2.24997 14.9136 2.25 13.1605L2.25 8.21667C2.25 7.68279 2.68652 7.25 3.225 7.25Z',
  d7: 'M9 11C9 10.4477 9.44772 10 10 10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H10C9.44772 12 9 11.5523 9 11Z',
  d8: 'M2.28077 7.97656C2.26069 8.05387 2.25 8.13492 2.25 8.21844V13.1622C2.24997 14.9154 2.24995 16.3295 2.40157 17.4418C2.55909 18.5975 2.89625 19.5709 3.67962 20.3436C4.46231 21.1157 5.44714 21.4473 6.61638 21.6024C7.74311 21.7518 9.17585 21.7518 10.954 21.7518H13.046C14.8242 21.7518 16.2569 21.7518 17.3836 21.6024C18.5529 21.4473 19.5377 21.1157 20.3204 20.3436C21.1038 19.5709 21.4409 18.5975 21.5984 17.4418C21.75 16.3295 21.75 14.9154 21.75 13.1622V8.21844C21.75 8.13492 21.7393 8.05387 21.7192 7.97656C21.5607 8.12882 21.3841 8.26205 21.193 8.3732C20.8231 8.58839 20.4263 8.67429 19.9991 8.71396C19.935 8.71991 19.8686 8.72493 19.8 8.72915V13.0912C19.8 14.9322 19.7979 16.2151 19.666 17.1829C19.5379 18.1224 19.304 18.6191 18.9451 18.9731C18.5855 19.3278 18.0799 19.5595 17.1251 19.6861C16.1427 19.8164 14.8409 19.8184 12.975 19.8184H11.025C9.1591 19.8184 7.85726 19.8164 6.87491 19.6861C5.92009 19.5595 5.41455 19.3278 5.05495 18.9731C4.69604 18.6191 4.46206 18.1224 4.334 17.1829C4.20209 16.2151 4.2 14.9322 4.2 13.0912V8.72915C4.13137 8.72493 4.06502 8.71991 4.00093 8.71396C3.57375 8.67429 3.17685 8.58839 2.80698 8.3732C2.61593 8.26205 2.43933 8.12882 2.28077 7.97656Z',
  d9: 'M2 3V2.25C1.58579 2.25 1.25 2.58579 1.25 3H2ZM21.9999 3H22.7499C22.7499 2.58579 22.4141 2.25 21.9999 2.25V3ZM2 8H1.25V8.75H2V8ZM21.9999 8V8.75H22.7499V8H21.9999ZM2 3.75H21.9999V2.25H2V3.75ZM2 8.75H21.9999V7.25H2V8.75ZM2.75 8V3H1.25V8H2.75ZM21.2499 3V8H22.7499V3H21.2499Z',
  d10: 'M3 8V21H21V8',
  d11: 'M9.5 11H14.5',
  d12: 'M21.9 3H2.1C2.04477 3 2 3.04477 2 3.1V8H22V3.1C22 3.04477 21.9552 3 21.9 3Z',
  d13: 'M1.25 3C1.25 2.58579 1.58579 2.25 2 2.25H21.9999C22.4141 2.25 22.7499 2.58579 22.7499 3V8.75H1.25V3Z',
  d14: 'M4.2 7.25V19.8167H19.8V7.25H21.75V20.7833C21.75 21.3172 21.3135 21.75 20.775 21.75H3.225C2.96641 21.75 2.71842 21.6482 2.53557 21.4669C2.35272 21.2856 2.25 21.0397 2.25 20.7833V7.25H4.2Z',
  d15: 'M14.5 12H9.5V10H14.5V12Z',
};

export const IconDeliveryBox02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-02-stroke-rounded IconDeliveryBox02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-02-duotone-rounded IconDeliveryBox02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-02-twotone-rounded IconDeliveryBox02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-02-solid-rounded IconDeliveryBox02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-02-bulk-rounded IconDeliveryBox02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconDeliveryBox02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-02-stroke-sharp IconDeliveryBox02StrokeSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-02-solid-sharp IconDeliveryBox02SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDeliveryBox02: TheIconSelfPack = {
  name: 'DeliveryBox02',
  StrokeRounded: IconDeliveryBox02StrokeRounded,
  DuotoneRounded: IconDeliveryBox02DuotoneRounded,
  TwotoneRounded: IconDeliveryBox02TwotoneRounded,
  SolidRounded: IconDeliveryBox02SolidRounded,
  BulkRounded: IconDeliveryBox02BulkRounded,
  StrokeSharp: IconDeliveryBox02StrokeSharp,
  SolidSharp: IconDeliveryBox02SolidSharp,
};