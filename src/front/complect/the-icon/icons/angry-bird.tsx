import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.5 9.19028C16.9878 7.3721 14.7872 6 12.5 6C8.35786 6 4.5 10.5 4.5 14C4.5 18.1421 8.35786 21 12.5 21C13.0064 21 13.5086 20.9573 14 20.8747',
  d2: 'M13 8.5L17.7059 10L21 8',
  d3: 'M20.6089 16.1305H22L20.1374 14.5872C18.8302 13.5041 18.1766 12.9625 17.4061 13.002C16.6357 13.0415 16.0515 13.6466 14.8831 14.8567L14.7463 14.9984C14.2628 15.4993 14.021 15.7497 14.0017 16.0446C13.9983 16.0956 14 16.1467 14.0066 16.1974C14.0447 16.4908 14.302 16.7278 14.8167 17.2016C16.1158 18.3976 16.7654 18.9957 17.527 19C17.6567 19.0007 17.7862 18.9889 17.9133 18.9648C18.6592 18.823 19.1688 18.1193 20.1879 16.7119L20.6089 16.1305ZM20.6089 16.1305H17.8266',
  d4: 'M13.008 12L12.999 12',
  d5: 'M20.008 11.5L19.999 11.5',
  d6: 'M13 6C12.7333 5 11.56 3 9 3',
  d7: 'M11 6C10.5 5.47719 9 4.58841 7 5.21578',
  d8: 'M2 11L4 14L2 15',
  d9: 'M12.5 21C8.35786 21 4.5 18.1421 4.5 14C4.5 10.5 8.35786 6 12.5 6C14.7872 6 16.9878 7.3721 18.5 9.19028C19.8365 11.2734 20.3012 13.0976 20.2096 14.647L20.1374 14.5872C18.8302 13.5041 18.1766 12.9625 17.4061 13.002C16.6357 13.0415 16.0515 13.6466 14.8831 14.8567L14.7463 14.9984C14.2628 15.4993 14.021 15.7497 14.0017 16.0446C13.9983 16.0956 14 16.1467 14.0066 16.1974C14.0447 16.4908 14.302 16.7278 14.8167 17.2016C16.1158 18.3976 16.7654 18.9957 17.527 19C17.6567 19.0007 17.7862 18.9889 17.9133 18.9648C17.9922 18.9497 18.0685 18.9284 18.1431 18.9007C16.8516 20.1048 15.2122 20.7756 14 20.8747C13.5086 20.9573 13.0064 21 12.5 21Z',
  d10: 'M22.8308 16.3847C22.938 16.0873 22.8472 15.7546 22.6038 15.5529L20.703 13.9779C20.082 13.4633 19.5598 13.0307 19.0947 12.7384C18.6005 12.4279 18.0901 12.2223 17.493 12.2529C16.8947 12.2836 16.4097 12.5412 15.9536 12.9023C15.5256 13.2411 15.0581 13.7253 14.5037 14.2996C14.2842 14.5269 13.8787 14.9467 13.7283 15.1445C13.5629 15.3619 13.4019 15.6389 13.3785 15.9955C13.372 16.0951 13.3752 16.195 13.3881 16.2939C13.434 16.6474 13.6115 16.9138 13.7895 17.1208C13.9519 17.3096 14.2356 17.5707 14.4695 17.786C15.0887 18.3561 15.6048 18.8312 16.0631 19.1582C16.5447 19.5017 17.0488 19.7465 17.648 19.7498C17.826 19.7509 18.0038 19.7347 18.1785 19.7015C18.7695 19.5892 19.2167 19.2546 19.6194 18.827C19.7104 18.7304 19.7559 18.682 19.7692 18.635C19.7941 18.5472 19.75 18.4451 19.669 18.403C19.6257 18.3805 19.5547 18.3805 19.4127 18.3805H17.9514C17.5372 18.3805 17.2014 18.0447 17.2014 17.6305C17.2014 17.2163 17.5372 16.8805 17.9514 16.8805H21.117C21.1169 16.8805 21.117 16.8805 21.117 16.8805L22.1252 16.8804C22.4414 16.8804 22.7236 16.6822 22.8308 16.3847Z',
  d11: 'M20.1375 12.4999C20.6873 12.4999 21.1331 12.0522 21.1331 11.4999C21.1331 10.9476 20.6873 10.4999 20.1375 10.4999H20.1286C19.5788 10.4999 19.1331 10.9476 19.1331 11.4999C19.1331 12.0522 19.5788 12.4999 20.1286 12.4999H20.1375ZM13.1375 12.9999C13.6873 12.9999 14.1331 12.5522 14.1331 11.9999C14.1331 11.4476 13.6873 10.9999 13.1375 10.9999H13.1286C12.5788 10.9999 12.1331 11.4476 12.1331 11.9999C12.1331 12.5522 12.5788 12.9999 13.1286 12.9999H13.1375Z',
  d12: 'M10.3784 2.03262C9.84402 1.89297 9.29764 2.21292 9.15799 2.74726C9.01833 3.2816 9.33829 3.82797 9.87263 3.96762C10.733 4.1925 11.2698 4.60977 11.6154 5.0745C11.3351 5.11576 11.0582 5.17354 10.7855 5.24629C10.0283 4.50493 8.18405 3.52281 5.8262 4.26244C5.29924 4.42774 5.00605 4.98893 5.17135 5.5159C5.33666 6.04287 5.89785 6.33605 6.42482 6.17075C7.30898 5.8934 8.04917 5.99772 8.57886 6.19542C7.75013 6.69293 6.9959 7.31453 6.34645 7.99915C5.2674 9.13664 4.40498 10.5245 3.95855 11.9468L2.95751 10.4453C2.65116 9.98576 2.03029 9.86158 1.57076 10.1679C1.11123 10.4743 0.98706 11.0952 1.29341 11.5547L2.66506 13.6122L1.67825 14.1056C1.18427 14.3525 0.984047 14.9532 1.23104 15.4472C1.47803 15.9412 2.0787 16.1414 2.57268 15.8944L3.73836 15.3116C4.46106 19.417 8.53201 21.9999 12.6252 21.9999C13.1878 21.9999 13.7454 21.9524 14.2909 21.8608C14.8356 21.7693 15.2029 21.2536 15.1114 20.7089C15.0199 20.1642 14.5042 19.7969 13.9595 19.8884C13.5223 19.9619 13.0755 19.9999 12.6252 19.9999C8.85451 19.9999 5.62524 17.4247 5.62524 13.9999C5.62524 12.5819 6.4312 10.8158 7.79744 9.3756C9.1567 7.94274 10.9114 6.99988 12.6252 6.99988C13.9817 6.99988 15.3624 7.59162 16.5481 8.54141L13.4292 7.54725C12.903 7.37953 12.3405 7.67013 12.1727 8.19633C12.005 8.72253 12.2956 9.28507 12.8218 9.45279L17.5277 10.9528C17.8032 11.0406 18.1032 11.0049 18.3504 10.8548L21.6445 8.85481C22.1166 8.56819 22.2669 7.95313 21.9803 7.48105C21.6937 7.00896 21.0786 6.85861 20.6065 7.14524L19.0112 8.11384C17.6701 6.66113 15.8726 5.48092 13.8895 5.1165C13.4537 3.98183 12.5122 2.59032 10.3784 2.03262Z',
  d13: 'M20.5007 16.0001H22.0007L17.5 13.0001L14.0007 16.0001L17.5 19.0001L20.5007 16.0001ZM20.5007 16.0001H18.0007',
  d14: 'M17.9148 12.3761C17.6352 12.1897 17.2658 12.212 17.0107 12.4307L13.5114 15.4307C13.3452 15.5732 13.2495 15.7812 13.2495 16.0001C13.2495 16.219 13.3452 16.427 13.5114 16.5695L17.0107 19.5695C17.3082 19.8246 17.7519 19.8076 18.0291 19.5305L19.7816 17.7784H17.2476V16.7501L21.9995 16.7501C22.33 16.7501 22.6216 16.5338 22.7173 16.2174C22.8131 15.9011 22.6905 15.5594 22.4155 15.3761L17.9148 12.3761Z',
  d15: 'M14.0056 12.0001C14.0056 12.5524 13.5579 13.0001 13.0056 13.0001L12.9966 13.0001C12.4443 13.0001 11.9966 12.5524 11.9966 12.0001C11.9966 11.4478 12.4443 11.0001 12.9966 11.0001L13.0056 11.0001C13.5579 11.0001 14.0056 11.4478 14.0056 12.0001Z',
  d16: 'M21.0056 11.5001C21.0056 12.0524 20.5579 12.5001 20.0056 12.5001L19.9966 12.5001C19.4443 12.5001 18.9966 12.0524 18.9966 11.5001C18.9966 10.9478 19.4443 10.5001 19.9966 10.5001L20.0056 10.5001C20.5579 10.5001 21.0056 10.9478 21.0056 11.5001Z',
  d17: 'M13.6924 5.28433C13.1209 4.01276 11.6843 2.24988 9.00132 2.24988V4.19988C10.1184 4.19988 10.8869 4.69907 11.3727 5.26173C10.9143 5.33433 10.4656 5.45065 10.0299 5.60391C9.11715 4.98502 7.53289 4.4303 5.59979 5.02773L6.1922 6.88833C6.80389 6.69929 7.34596 6.69211 7.79589 6.77077C7.23443 7.1665 6.71581 7.61679 6.25134 8.09917C5.18344 9.20826 4.32995 10.5614 3.88816 11.9483L2.89733 10.484L1.25049 11.5657L2.60791 13.5717L1.63133 14.0528L2.51649 15.7969L3.67026 15.2286C4.38537 19.2315 8.41418 21.7499 12.465 21.7499C13.0218 21.7499 13.5736 21.7036 14.1135 21.6143L13.7855 19.6912C13.3528 19.7628 12.9106 19.7999 12.465 19.7999C8.7334 19.7999 5.53762 17.2891 5.53762 13.9499C5.53762 12.5673 6.33522 10.8454 7.68729 9.44121C9.03245 8.04417 10.769 7.12488 12.465 7.12488C13.8074 7.12488 15.1737 7.70179 16.3471 8.62778L13.2604 7.65843L12.6593 9.51633L17.7455 11.1136L21.3905 8.9333L20.3633 7.26646L18.7846 8.2108C17.452 6.78878 15.6643 5.63459 13.6924 5.28433Z',
};

export const IconAngryBirdStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-bird-stroke-rounded IconAngryBirdStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAngryBirdDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-bird-duotone-rounded IconAngryBirdDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
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
    </TheIconWrapper>
  );
};

export const IconAngryBirdTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-bird-twotone-rounded IconAngryBirdTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAngryBirdSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-bird-solid-rounded IconAngryBirdSolidRounded"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAngryBirdBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-bird-bulk-rounded IconAngryBirdBulkRounded"
    >
      <path 
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAngryBirdStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-bird-stroke-sharp IconAngryBirdStrokeSharp"
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
      />
      <path 
        d={d.d13} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAngryBirdSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="angry-bird-solid-sharp IconAngryBirdSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAngryBird: TheIconSelfPack = {
  name: 'AngryBird',
  StrokeRounded: IconAngryBirdStrokeRounded,
  DuotoneRounded: IconAngryBirdDuotoneRounded,
  TwotoneRounded: IconAngryBirdTwotoneRounded,
  SolidRounded: IconAngryBirdSolidRounded,
  BulkRounded: IconAngryBirdBulkRounded,
  StrokeSharp: IconAngryBirdStrokeSharp,
  SolidSharp: IconAngryBirdSolidSharp,
};