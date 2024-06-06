import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.198 2.5H3.802C3.05147 2.5 2.6762 2.5 2.41637 2.67726C2.28768 2.76505 2.18133 2.88109 2.10567 3.01627C1.9529 3.28921 1.99024 3.65793 2.06493 4.39537C2.18958 5.62624 2.2519 6.24168 2.57823 6.68168C2.74084 6.90095 2.94701 7.08519 3.18414 7.22315C3.65999 7.5 4.28635 7.5 5.53908 7.5H18.4609C19.7136 7.5 20.34 7.5 20.8159 7.22315C21.053 7.08519 21.2592 6.90095 21.4218 6.68168C21.7481 6.24168 21.8104 5.62624 21.9351 4.39537C22.0098 3.65793 22.0471 3.28921 21.8943 3.01627C21.8187 2.88109 21.7123 2.76505 21.5836 2.67726C21.3238 2.5 20.9485 2.5 20.198 2.5Z',
  d2: 'M3 7.5L3 12.5408C3 16.2928 3 18.1688 4.17157 19.3344C5.34315 20.5 7.22876 20.5 11 20.5H12.5M21 9V7.5',
  d3: 'M18 11.5C15.7909 11.5 14 13.3089 14 15.5403C14 16.8163 14.5 17.8083 15.5 18.6945C16.2049 19.3191 17.0588 20.3566 17.5714 21.1975C17.8173 21.6008 18.165 21.6008 18.4286 21.1975C18.9672 20.3733 19.7951 19.3191 20.5 18.6945C21.5 17.8083 22 16.8163 22 15.5403C22 13.3089 20.2091 11.5 18 11.5Z',
  d4: 'M18 15.5H18.009',
  d5: 'M10 10.5H12',
  d6: 'M3 7.5V12.5408C3 16.2928 3 18.1688 4.17157 19.3344C5.34315 20.5 7.22876 20.5 11 20.5H13C14.6824 20.5 15.9896 20.5 17.0255 20.3965C16.5553 19.7662 15.9914 19.13 15.5 18.6945C14.5 17.8083 14 16.8163 14 15.5403C14 13.3089 15.7909 11.5 18 11.5C19.1947 11.5 20.267 12.029 21 12.8678C21 12.7604 21 12.6514 21 12.5408V7.5H3Z',
  d7: 'M20.2317 1.75C20.578 1.74997 20.8919 1.74995 21.15 1.77593C21.4268 1.8038 21.7283 1.86808 22.0063 2.0577C22.2302 2.21048 22.4162 2.41299 22.5488 2.64997C22.7142 2.94548 22.7495 3.25255 22.75 3.53017C22.7505 3.78782 22.7191 4.09746 22.6847 4.43696V4.43698C22.6254 5.02264 22.5687 5.58311 22.4897 5.98104C22.4067 6.39932 22.2796 6.78401 22.0242 7.12846C21.8006 7.42989 21.5177 7.68253 21.193 7.87142C20.8231 8.08661 20.4263 8.17251 19.9991 8.21218C19.5915 8.25003 19.0924 8.25002 18.4954 8.25H5.50459H5.50457C4.90758 8.25002 4.40847 8.25003 4.00093 8.21218C3.57375 8.17251 3.17685 8.08661 2.80698 7.87142C2.48232 7.68253 2.19938 7.42989 1.97582 7.12846C1.72037 6.78401 1.59326 6.39932 1.51028 5.98104C1.43134 5.5831 1.3746 5.02267 1.3153 4.43699C1.28089 4.09748 1.2495 3.78782 1.25001 3.53017C1.25055 3.25255 1.28581 2.94548 1.45121 2.64997C1.58385 2.41299 1.76976 2.21048 1.9937 2.0577C2.27165 1.86808 2.57318 1.8038 2.85005 1.77593C3.10814 1.74995 3.42197 1.74997 3.76831 1.75H3.76838H20.2316H20.2317Z',
  d8: 'M3.225 6.75C3.76348 6.75 4.2 7.18279 4.2 7.71667V12.5895C4.2 14.4304 4.20209 15.7133 4.334 16.6811C4.46206 17.6206 4.69604 18.1173 5.05495 18.4713C5.41455 18.826 5.92009 19.0577 6.87491 19.1844C7.85726 19.3146 9.1591 19.3167 11.025 19.3167H12.4875C13.026 19.3167 13.4625 19.7495 13.4625 20.2833C13.4625 20.8172 13.026 21.25 12.4875 21.25H10.954C9.17585 21.25 7.74311 21.25 6.61637 21.1006C5.44714 20.9456 4.46231 20.6139 3.67962 19.8419C2.89625 19.0692 2.55909 18.0957 2.40157 16.94C2.24995 15.8277 2.24997 14.4136 2.25 12.6605L2.25 7.71667C2.25 7.18279 2.68652 6.75 3.225 6.75ZM20.775 6.75C21.3135 6.75 21.75 7.18279 21.75 7.71667V9.16667C21.75 9.70054 21.3135 10.1333 20.775 10.1333C20.2365 10.1333 19.8 9.70054 19.8 9.16667V7.71667C19.8 7.18279 20.2365 6.75 20.775 6.75Z',
  d9: 'M18 10.75C15.3696 10.75 13.25 12.9018 13.25 15.5403C13.25 17.0592 13.8644 18.2472 15.0026 19.2558C15.6471 19.8269 16.454 20.8054 16.9311 21.5879C17.1225 21.902 17.4733 22.25 17.9934 22.25C18.5049 22.25 18.8578 21.9118 19.0564 21.6078C19.5758 20.813 20.3617 19.8191 20.9974 19.2558C22.1356 18.2472 22.75 17.0592 22.75 15.5403C22.75 12.9018 20.6304 10.75 18 10.75ZM17.9933 14C17.1686 14 16.5 14.6716 16.5 15.5C16.5 16.3284 17.1686 17 17.9933 17H18.0067C18.8314 17 19.5 16.3284 19.5 15.5C19.5 14.6716 18.8314 14 18.0067 14H17.9933Z',
  d10: 'M9 10.5C9 9.94772 9.44772 9.5 10 9.5H12C12.5523 9.5 13 9.94772 13 10.5C13 11.0523 12.5523 11.5 12 11.5H10C9.44772 11.5 9 11.0523 9 10.5Z',
  d11: 'M2.28077 7.47656C2.26069 7.55387 2.25 7.63492 2.25 7.71844V12.6622C2.24997 14.4154 2.24995 15.8295 2.40157 16.9418C2.55909 18.0975 2.89625 19.0709 3.67962 19.8436C4.46231 20.6157 5.44714 20.9473 6.61638 21.1024C7.74311 21.2518 9.17585 21.2518 10.954 21.2518H12.4875C13.026 21.2518 13.4625 20.819 13.4625 20.2851C13.4625 19.7512 13.026 19.3184 12.4875 19.3184H11.025C9.1591 19.3184 7.85726 19.3164 6.87491 19.1861C5.92009 19.0595 5.41455 18.8278 5.05495 18.4731C4.69604 18.1191 4.46206 17.6224 4.334 16.6829C4.20209 15.7151 4.2 14.4322 4.2 12.5912V8.22915C4.13137 8.22493 4.06502 8.21991 4.00093 8.21396C3.57375 8.17429 3.17685 8.08839 2.80698 7.8732C2.61593 7.76205 2.43933 7.62882 2.28077 7.47656Z',
  d12: 'M19.8 8.22915V9.16844C19.8 9.70232 20.2365 10.1351 20.775 10.1351C21.3135 10.1351 21.75 9.70232 21.75 9.16844V7.71844C21.75 7.63492 21.7393 7.55387 21.7192 7.47656C21.5607 7.62882 21.3841 7.76205 21.193 7.8732C20.8231 8.08839 20.4263 8.17429 19.9991 8.21396C19.935 8.21991 19.8686 8.22493 19.8 8.22915Z',
  d13: 'M3 7.64014V20.9721H12.5M21 7.64014V9.6912',
  d14: 'M9.5 10.5H12.5',
  d15: 'M18 11.7427C15.7909 11.7427 14 13.5978 14 15.8861C14 17.1947 14.5 18.212 15.5 19.1209C16.2049 19.7614 17.4873 21.1355 18 21.998C18.5386 21.1527 19.7951 19.7614 20.5 19.1209C21.5 18.212 22 17.1947 22 15.8861C22 13.5978 20.2091 11.7427 18 11.7427Z',
  d16: 'M21.9 2H2.1C2.04477 2 2 2.04591 2 2.10255V7.12767H22V2.10255C22 2.04591 21.9552 2 21.9 2Z',
  d17: 'M2 1.75C1.58579 1.75 1.25 2.08579 1.25 2.5V8.25H2.25V20.2833C2.25 20.5397 2.35272 20.7856 2.53557 20.9669C2.71842 21.1482 2.96641 21.25 3.225 21.25H12V19.3167H4.2V8.25H19.8V9.03333L21.75 9V8.25H22.7499V2.5C22.7499 2.08579 22.4141 1.75 21.9999 1.75H2Z',
  d18: 'M12.5 11.5H9.5V9.5H12.5V11.5Z',
  d19: 'M18 10.75C15.3696 10.75 13.25 12.9018 13.25 15.5403C13.25 17.0592 13.8644 18.2472 15.0026 19.2558C15.6888 19.8639 16.9052 21.1451 17.3596 21.8904C17.4936 22.1102 17.7309 22.2459 17.9882 22.2499C18.2456 22.2539 18.487 22.1257 18.6278 21.9103C19.1188 21.159 20.3246 19.852 20.9974 19.2558C22.1356 18.2472 22.75 17.0592 22.75 15.5403C22.75 12.9018 20.6304 10.75 18 10.75ZM17.9922 13.75C17.03 13.75 16.25 14.5335 16.25 15.5C16.25 16.4665 17.03 17.25 17.9922 17.25H18.0078C18.97 17.25 19.75 16.4665 19.75 15.5C19.75 14.5335 18.97 13.75 18.0078 13.75H17.9922Z',
};

export const IconDeliveryTracking02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-tracking-02-stroke-rounded IconDeliveryTracking02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryTracking02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-tracking-02-duotone-rounded IconDeliveryTracking02DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryTracking02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-tracking-02-twotone-rounded IconDeliveryTracking02TwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryTracking02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-tracking-02-solid-rounded IconDeliveryTracking02SolidRounded"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDeliveryTracking02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-tracking-02-bulk-rounded IconDeliveryTracking02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDeliveryTracking02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-tracking-02-stroke-sharp IconDeliveryTracking02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryTracking02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-tracking-02-solid-sharp IconDeliveryTracking02SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDeliveryTracking02: TheIconSelfPack = {
  name: 'DeliveryTracking02',
  StrokeRounded: IconDeliveryTracking02StrokeRounded,
  DuotoneRounded: IconDeliveryTracking02DuotoneRounded,
  TwotoneRounded: IconDeliveryTracking02TwotoneRounded,
  SolidRounded: IconDeliveryTracking02SolidRounded,
  BulkRounded: IconDeliveryTracking02BulkRounded,
  StrokeSharp: IconDeliveryTracking02StrokeSharp,
  SolidSharp: IconDeliveryTracking02SolidSharp,
};