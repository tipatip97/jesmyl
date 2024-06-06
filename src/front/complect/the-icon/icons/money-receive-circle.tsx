import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 2.22179C13.3538 2.09076 12.6849 2.02197 12 2.02197C6.47715 2.02197 2 6.49421 2 12.011C2 17.5277 6.47715 22 12 22C17.5228 22 22 17.5277 22 12.011C22 11.3269 21.9311 10.6587 21.8 10.0132',
  d2: 'M12 9.01428C10.8954 9.01428 10 9.68512 10 10.5126C10 11.3401 10.8954 12.011 12 12.011C13.1046 12.011 14 12.6819 14 13.5093C14 14.3368 13.1046 15.0077 12 15.0077M12 9.01428C12.8708 9.01428 13.6116 9.43123 13.8862 10.0132M12 9.01428V8.01538M12 15.0077C11.1292 15.0077 10.3884 14.5908 10.1138 14.0088M12 15.0077V16.0066',
  d3: 'M21.9951 2L17.8193 6.17362M16.9951 2.52119L17.1133 5.60928C17.1133 6.33713 17.5484 6.79062 18.3409 6.84782L21.465 6.99451',
  d4: 'M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z',
  d5: 'M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10',
  d6: 'M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V8M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16',
  d7: 'M13.9855 2.22084C13.3401 2.08979 12.6722 2.021 11.9882 2.021C6.47295 2.021 2.00195 6.49372 2.00195 12.0111C2.00195 17.5284 6.47295 22.0012 11.9882 22.0012C17.5034 22.0012 21.9745 17.5284 21.9745 12.0111C21.9745 11.3269 21.9057 10.6586 21.7747 10.0131',
  d8: 'M11.9885 9.01415C10.8854 9.01415 9.99121 9.68505 9.99121 10.5127C9.99121 11.3402 10.8854 12.0112 11.9885 12.0112C13.0915 12.0112 13.9857 12.6821 13.9857 13.5097C13.9857 14.3373 13.0915 15.0082 11.9885 15.0082M11.9885 9.01415C12.8581 9.01415 13.5978 9.43113 13.8721 10.0132M11.9885 9.01415V8.01514M11.9885 15.0082C11.1189 15.0082 10.3791 14.5912 10.1049 14.0092M11.9885 15.0082V16.0072',
  d9: 'M21.998 1.99902L17.8279 6.17309M17.0049 2.52027L17.1229 5.6087C17.1229 6.33662 17.5574 6.79016 18.3488 6.84736L21.4686 6.99408',
  d10: 'M12 6.5C12.5523 6.5 13 6.94772 13 7.5V7.77827C13.8024 8.03113 14.4829 8.58617 14.8085 9.36363C15.0219 9.87302 14.782 10.459 14.2726 10.6723C13.7632 10.8857 13.1772 10.6458 12.9639 10.1364C12.8699 9.91204 12.5363 9.625 12 9.625C11.2818 9.625 11 10.0853 11 10.3125C11 10.5397 11.2818 11 12 11C13.4909 11 15 12.0507 15 13.6875C15 14.9528 14.0981 15.8679 13 16.2181V16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5V16.2217C10.1976 15.9689 9.51714 15.4138 9.19146 14.6364C8.97807 14.127 9.21804 13.541 9.72743 13.3277C10.2368 13.1143 10.8228 13.3542 11.0361 13.8636C11.1301 14.088 11.4637 14.375 12 14.375C12.7182 14.375 13 13.9147 13 13.6875C13 13.4603 12.7182 13 12 13C10.5091 13 9 11.9493 9 10.3125C9 9.04719 9.90187 8.1321 11 7.78192V7.5C11 6.94772 11.4477 6.5 12 6.5Z',
  d11: 'M12 3.20455C7.1424 3.20455 3.20455 7.1424 3.20455 12C3.20455 16.8576 7.1424 20.7955 12 20.7955C16.8576 20.7955 20.7955 16.8576 20.7955 12C20.7955 11.3963 20.7348 10.8078 20.6195 10.2399C20.5121 9.71092 20.8539 9.19509 21.3828 9.08771C21.9118 8.98034 22.4276 9.3221 22.535 9.85104C22.6761 10.5462 22.75 11.265 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.735 1.25 13.4538 1.32391 14.149 1.46502C14.6779 1.57239 15.0197 2.08823 14.9123 2.61717C14.8049 3.14612 14.2891 3.48787 13.7601 3.3805C13.1922 3.26522 12.6037 3.20455 12 3.20455Z',
  d12: 'M21.0522 1.54097C21.4401 1.15301 22.0691 1.15301 22.4571 1.54097C22.845 1.92892 22.845 2.55793 22.4571 2.94588L20.6567 4.74631L20.7705 4.86011C20.9746 5.06404 21.1905 5.27981 21.3404 5.47055C21.4497 5.60961 21.8507 6.12261 21.6337 6.76119C21.4166 7.40029 20.7931 7.5392 20.6244 7.57637C20.3921 7.62754 20.0931 7.65539 19.8102 7.68174L19.7616 7.68626C19.3161 7.72791 18.7984 7.7647 18.3366 7.74411C18.1061 7.73383 17.8533 7.70801 17.6124 7.64644C17.3891 7.58936 17.062 7.47368 16.7932 7.20492C16.5244 6.93617 16.4088 6.60902 16.3517 6.38571C16.2901 6.14482 16.2643 5.89205 16.254 5.66147C16.2334 5.19974 16.2702 4.682 16.3119 4.23648L16.3164 4.18791C16.3427 3.90502 16.3706 3.606 16.4218 3.37368C16.4589 3.20496 16.5978 2.58145 17.2369 2.36434C17.8755 2.1474 18.3885 2.54834 18.5276 2.65767C18.7183 2.80761 18.9341 3.02352 19.138 3.22759L19.2518 3.34139L21.0522 1.54097Z',
  d13: 'M13.999 2.20004C13.3528 2.06886 12.6839 2 11.999 2C6.47617 2 1.99902 6.47715 1.99902 12C1.99902 17.5228 6.47617 22 11.999 22C17.5218 22 21.999 17.5228 21.999 12C21.999 11.3151 21.9301 10.6462 21.799 10',
  d14: 'M11.999 9C10.8944 9 9.99902 9.67157 9.99902 10.5C9.99902 11.3284 10.8944 12 11.999 12C13.1036 12 13.999 12.6716 13.999 13.5C13.999 14.3284 13.1036 15 11.999 15M11.999 9C12.8698 9 13.6106 9.4174 13.8852 10M11.999 9V7.5M11.999 15C11.1282 15 10.3874 14.5826 10.1128 14M11.999 15V16.5',
  d15: 'M22.001 2.00488L17.4767 6.51744M17.0127 2.47879V6.98028H21.5008',
  d16: 'M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.3823 20.9379 10.78 20.82 10.1989L22.78 9.80107C22.9244 10.5124 23 11.2479 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C12.7521 1 13.4876 1.07563 14.1989 1.22002L13.8011 3.18005C13.22 3.06209 12.6177 3 12 3Z',
  d17: 'M22.7071 2.70715L19.4185 5.99591H21.5002V7.99591H16.0045L16.0039 2.49589L18.0039 2.49568L18.0041 4.58187L21.2929 1.29297L22.7071 2.70715Z',
  d18: 'M11 8.14015C10.6279 8.24804 10.283 8.41646 9.98579 8.63934C9.43443 9.05286 9 9.70046 9 10.5C9 11.2995 9.43443 11.9471 9.98579 12.3607C10.5368 12.7739 11.2523 13 12 13C12.3568 13 12.6414 13.1097 12.8142 13.2393C12.9867 13.3687 13 13.4711 13 13.5C13 13.5289 12.9867 13.6313 12.8142 13.7607C12.6414 13.8903 12.3568 14 12 14C11.3991 14 11.0832 13.7112 11.0184 13.5737L9.20922 14.4263C9.55037 15.1502 10.2296 15.6351 11 15.8585V16.5H13V15.8598C13.3721 15.752 13.717 15.5835 14.0142 15.3607C14.5656 14.9471 15 14.2995 15 13.5C15 12.7005 14.5656 12.0529 14.0142 11.6393C13.4632 11.2261 12.7477 11 12 11C11.6432 11 11.3586 10.8903 11.1858 10.7607C11.0133 10.6313 11 10.5289 11 10.5C11 10.4711 11.0133 10.3687 11.1858 10.2393C11.3586 10.1097 11.6432 10 12 10C12.6009 10 12.9168 10.2888 12.9816 10.4263L14.7908 9.5737C14.4496 8.84981 13.7704 8.36492 13 8.14149V7.5H11V8.14015Z',
};

export const IconMoneyReceiveCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-circle-stroke-rounded IconMoneyReceiveCircleStrokeRounded"
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

export const IconMoneyReceiveCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-circle-duotone-rounded IconMoneyReceiveCircleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceiveCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-circle-twotone-rounded IconMoneyReceiveCircleTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceiveCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-circle-solid-rounded IconMoneyReceiveCircleSolidRounded"
    >
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceiveCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-circle-bulk-rounded IconMoneyReceiveCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconMoneyReceiveCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-circle-stroke-sharp IconMoneyReceiveCircleStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyReceiveCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-receive-circle-solid-sharp IconMoneyReceiveCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyReceiveCircle: TheIconSelfPack = {
  name: 'MoneyReceiveCircle',
  StrokeRounded: IconMoneyReceiveCircleStrokeRounded,
  DuotoneRounded: IconMoneyReceiveCircleDuotoneRounded,
  TwotoneRounded: IconMoneyReceiveCircleTwotoneRounded,
  SolidRounded: IconMoneyReceiveCircleSolidRounded,
  BulkRounded: IconMoneyReceiveCircleBulkRounded,
  StrokeSharp: IconMoneyReceiveCircleStrokeSharp,
  SolidSharp: IconMoneyReceiveCircleSolidSharp,
};