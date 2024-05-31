import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.198 2.5H3.802C3.05147 2.5 2.6762 2.5 2.41637 2.67726C2.28768 2.76505 2.18133 2.88109 2.10567 3.01627C1.9529 3.28921 1.99024 3.65793 2.06493 4.39537C2.18958 5.62624 2.2519 6.24168 2.57823 6.68168C2.74084 6.90095 2.94701 7.08519 3.18414 7.22315C3.65999 7.5 4.28635 7.5 5.53908 7.5H18.4609C19.7136 7.5 20.34 7.5 20.8159 7.22315C21.053 7.08519 21.2592 6.90095 21.4218 6.68168C21.7481 6.24168 21.8104 5.62624 21.9351 4.39537C22.0098 3.65793 22.0471 3.28921 21.8943 3.01627C21.8187 2.88109 21.7123 2.76505 21.5836 2.67726C21.3238 2.5 20.9485 2.5 20.198 2.5Z',
  d2: 'M3 7.5L3 12.5408C3 16.2928 3 18.1688 4.17157 19.3344C5.23467 20.3921 6.8857 20.49 10 20.4991M21 12.5V7.5',
  d3: 'M17 18H17.009',
  d4: 'M21.772 17.5225C21.924 17.7357 22 17.8422 22 18C22 18.1578 21.924 18.2643 21.772 18.4775C21.089 19.4353 19.3446 21.5 17 21.5C14.6554 21.5 12.911 19.4353 12.228 18.4775C12.076 18.2643 12 18.1578 12 18C12 17.8422 12.076 17.7357 12.228 17.5225C12.911 16.5647 14.6554 14.5 17 14.5C19.3446 14.5 21.089 16.5647 21.772 17.5225Z',
  d5: 'M10 10.5H14',
  d6: 'M3 7.5V12.5408C3 16.2928 3 18.1688 4.17157 19.3344C5.34315 20.5 7.22876 20.5 11 20.5H13C13.4198 20.5 13.8162 20.5 14.1909 20.4984C13.2754 19.835 12.5969 18.9948 12.228 18.4775C12.076 18.2643 12 18.1578 12 18C12 17.8422 12.076 17.7357 12.228 17.5225C12.911 16.5647 14.6554 14.5 17 14.5C18.6537 14.5 20.0088 15.5272 20.9035 16.4686C21 15.4505 21 14.1732 21 12.5408V7.5H3Z',
  d7: 'M20.2317 1.75C20.578 1.74997 20.8919 1.74995 21.15 1.77593C21.4268 1.8038 21.7283 1.86808 22.0063 2.0577C22.2302 2.21048 22.4162 2.41299 22.5488 2.64997C22.7142 2.94548 22.7495 3.25255 22.75 3.53017C22.7505 3.78782 22.7191 4.09746 22.6847 4.43696V4.43698C22.6254 5.02264 22.5687 5.58311 22.4897 5.98104C22.4067 6.39932 22.2796 6.78401 22.0242 7.12846C21.8006 7.42989 21.5177 7.68253 21.193 7.87142C20.8231 8.08661 20.4263 8.17251 19.9991 8.21218C19.5915 8.25003 19.0924 8.25002 18.4954 8.25H5.50459H5.50457C4.90758 8.25002 4.40847 8.25003 4.00093 8.21218C3.57375 8.17251 3.17685 8.08661 2.80698 7.87142C2.48232 7.68253 2.19938 7.42989 1.97582 7.12846C1.72037 6.78401 1.59326 6.39932 1.51028 5.98104C1.43134 5.5831 1.3746 5.02267 1.3153 4.43699C1.28089 4.09748 1.2495 3.78782 1.25001 3.53017C1.25055 3.25255 1.28581 2.94548 1.45121 2.64997C1.58385 2.41299 1.76976 2.21048 1.9937 2.0577C2.27165 1.86808 2.57318 1.8038 2.85005 1.77593C3.10814 1.74995 3.42197 1.74997 3.76831 1.75H3.76838H20.2316H20.2317Z',
  d8: 'M3.225 6.75C3.76348 6.75 4.2 7.18282 4.2 7.71673V12.5898C4.2 14.4309 4.20209 15.7139 4.334 16.6818C4.46206 17.6213 4.69604 18.118 5.05495 18.472C5.38249 18.7951 5.82951 19.0147 6.62096 19.1472C7.44035 19.2844 8.52163 19.3121 10.0528 19.3166C10.5913 19.3181 11.0266 19.7522 11.025 20.2861C11.0234 20.82 10.5856 21.2515 10.0472 21.25C8.54193 21.2456 7.3001 21.2217 6.29638 21.0537C5.26471 20.881 4.3886 20.5421 3.67962 19.8427C2.89625 19.0699 2.55909 18.0964 2.40157 16.9407C2.24995 15.8282 2.24997 14.4141 2.25 12.6608L2.25 7.71673C2.25 7.18282 2.68652 6.75 3.225 6.75ZM20.775 6.75C21.3135 6.75 21.75 7.18282 21.75 7.71673V12.5504C21.75 13.0843 21.3135 13.5171 20.775 13.5171C20.2365 13.5171 19.8 13.0843 19.8 12.5504V7.71673C19.8 7.18282 20.2365 6.75 20.775 6.75Z',
  d9: 'M17 13.75C15.6017 13.75 14.4205 14.3652 13.5294 15.0609C12.6368 15.7578 11.9522 16.6169 11.5879 17.1278C11.4661 17.2948 11.25 17.5914 11.25 18C11.25 18.4086 11.4661 18.7052 11.5879 18.8722C11.9522 19.3831 12.6368 20.2422 13.5294 20.9391C14.4205 21.6348 15.6017 22.25 17 22.25C18.3983 22.25 19.5795 21.6348 20.4706 20.9391C21.3632 20.2422 22.0478 19.3831 22.4121 18.8722C22.5339 18.7052 22.75 18.4086 22.75 18C22.75 17.5914 22.5339 17.2948 22.4121 17.1278C22.0478 16.6169 21.3632 15.7578 20.4706 15.0609C19.5795 14.3652 18.3983 13.75 17 13.75ZM16.9933 16.5C16.1686 16.5 15.5 17.1716 15.5 18C15.5 18.8284 16.1686 19.5 16.9933 19.5H17.0067C17.8314 19.5 18.5 18.8284 18.5 18C18.5 17.1716 17.8314 16.5 17.0067 16.5H16.9933Z',
  d10: 'M9 10.5C9 9.94772 9.44772 9.5 10 9.5H14C14.5523 9.5 15 9.94772 15 10.5C15 11.0523 14.5523 11.5 14 11.5H10C9.44772 11.5 9 11.0523 9 10.5Z',
  d11: 'M2.28059 7.47656C2.26062 7.55366 2.25 7.63448 2.25 7.71776V12.6618C2.24997 14.4151 2.24995 15.8293 2.40157 16.9417C2.55909 18.0974 2.89625 19.0709 3.67962 19.8437C4.3886 20.5431 5.26471 20.882 6.29638 21.0547C7.3001 21.2227 8.54193 21.2467 10.0472 21.251C10.5856 21.2526 11.0234 20.821 11.025 20.2871C11.0266 19.7532 10.5913 19.3191 10.0528 19.3176C8.52163 19.3132 7.44036 19.2854 6.62096 19.1482C5.82951 19.0158 5.38249 18.7962 5.05495 18.4731C4.69604 18.119 4.46206 17.6223 4.334 16.6828C4.20209 15.7149 4.2 14.4319 4.2 12.5908V8.22933C4.13137 8.2251 4.06502 8.22009 4.00093 8.21414C3.57375 8.17447 3.17685 8.08857 2.80698 7.87337C2.61586 7.76218 2.43919 7.62889 2.28059 7.47656Z',
  d12: 'M19.8 8.22933V12.5514C19.8 13.0853 20.2365 13.5181 20.775 13.5181C21.3135 13.5181 21.75 13.0853 21.75 12.5514V7.71776C21.75 7.63448 21.7394 7.55366 21.7194 7.47656C21.5608 7.62889 21.3841 7.76218 21.193 7.87337C20.8231 8.08857 20.4263 8.17447 19.9991 8.21414C19.935 8.22009 19.8686 8.2251 19.8 8.22933Z',
  d13: 'M3 7.5V20.5H10M21 7.5V13',
  d14: 'M9.5 10.5H14.5',
  d15: 'M17 21.5C19.7614 21.5 22 18 22 18C22 18 19.7614 14.5 17 14.5C14.2386 14.5 12 18 12 18C12 18 14.2386 21.5 17 21.5Z',
  d16: 'M21.9 2.5H2.1C2.04477 2.5 2 2.54477 2 2.6V7.5H22V2.6C22 2.54477 21.9552 2.5 21.9 2.5Z',
  d17: 'M2 1.75C1.58579 1.75 1.25 2.08579 1.25 2.5V8.25H2.25V20.2833C2.25 20.5397 2.35272 20.7856 2.53557 20.9669C2.71842 21.1482 2.96641 21.25 3.225 21.25H10V19.3167H4.2V8.25H19.8V12.0333L21.75 12V8.25H22.7499V2.5C22.7499 2.08579 22.4141 1.75 21.9999 1.75H2Z',
  d18: 'M14.5 11.5H9.5V9.5H14.5V11.5Z',
  d19: 'M22.614 17.7998C22.4397 17.5408 22.1581 17.1223 22.06 16.9951C21.7913 16.6467 21.4012 16.1801 20.9159 15.7109C19.9753 14.8012 18.5423 13.75 16.859 13.75C15.1758 13.75 13.7428 14.8012 12.8021 15.7109C12.3169 16.1801 11.9267 16.6467 11.658 16.9951C11.56 17.1223 11.2784 17.5408 11.1041 17.7998C11.0388 17.8969 10.9886 17.9715 10.9688 18C10.9886 18.0285 11.0388 18.1031 11.1041 18.2002C11.2784 18.4592 11.56 18.8777 11.658 19.0049C11.9267 19.3533 12.3169 19.8199 12.8021 20.2891C13.7428 21.1988 15.1758 22.25 16.859 22.25C18.5423 22.25 19.9753 21.1988 20.9159 20.2891C21.4012 19.8199 21.7913 19.3533 22.06 19.0049C22.1581 18.8777 22.4397 18.4592 22.6139 18.2002C22.6793 18.1031 22.7295 18.0285 22.7493 18C22.7295 17.9715 22.6793 17.8969 22.614 17.7998ZM16.8527 16.5C16.0279 16.5 15.3594 17.1716 15.3594 18C15.3594 18.8284 16.0279 19.5 16.8527 19.5H16.8661C17.6908 19.5 18.3594 18.8284 18.3594 18C18.3594 17.1716 17.6908 16.5 16.8661 16.5H16.8527Z',
} as const;

export const IconDeliveryView02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-02-stroke-rounded IconDeliveryView02StrokeRounded"
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

export const IconDeliveryView02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-02-duotone-rounded IconDeliveryView02DuotoneRounded"
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

export const IconDeliveryView02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-02-twotone-rounded IconDeliveryView02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDeliveryView02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-02-solid-rounded IconDeliveryView02SolidRounded"
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

export const IconDeliveryView02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-02-bulk-rounded IconDeliveryView02BulkRounded"
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

export const IconDeliveryView02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-02-stroke-sharp IconDeliveryView02StrokeSharp"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryView02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-view-02-solid-sharp IconDeliveryView02SolidSharp"
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

export const iconPackOfDeliveryView02: TheIconSelfPack = {
  name: 'DeliveryView02',
  StrokeRounded: IconDeliveryView02StrokeRounded,
  DuotoneRounded: IconDeliveryView02DuotoneRounded,
  TwotoneRounded: IconDeliveryView02TwotoneRounded,
  SolidRounded: IconDeliveryView02SolidRounded,
  BulkRounded: IconDeliveryView02BulkRounded,
  StrokeSharp: IconDeliveryView02StrokeSharp,
  SolidSharp: IconDeliveryView02SolidSharp,
};