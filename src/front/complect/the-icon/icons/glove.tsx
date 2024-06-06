import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.2821 21H12.202C10.2655 21 9.29724 21 8.464 20.5777C7.63076 20.1554 7.04981 19.3703 5.88792 17.8L3.41438 14.4571C2.79576 13.621 2.87779 12.4511 3.60684 11.7121C4.49835 10.8085 5.97278 10.9147 6.72926 11.9371L8.25569 14V9.42066C8.25569 9.03006 8.25569 8.83476 8.26466 8.66978C8.43073 5.61591 10.8365 3.17742 13.8493 3.00909C14.0121 3 14.2048 3 14.5901 3C15.0368 3 15.2602 3 15.44 3.01111C18.8039 3.21885 21.3181 6.22724 20.9673 9.62464C20.9485 9.80626 20.9118 10.0296 20.8384 10.4762L20.0657 15.1752C19.6781 17.5327 19.4843 18.7114 18.8157 19.5373C18.5131 19.9111 18.1461 20.2262 17.7326 20.4673C16.819 21 15.64 21 13.2821 21Z',
  d2: 'M19 17H12',
  d3: 'M15.4863 2.26241C15.2831 2.24986 14.5604 2.24988 14.5604 2.24988C14.2033 2.24987 13.9914 2.24987 13.8075 2.26014C10.4049 2.45025 7.70216 5.20141 7.51577 8.62893C7.50568 8.81447 7.50568 9.02843 7.50569 9.39134V11.7254L7.33216 11.4908C6.30284 10.0997 4.28899 9.95266 3.07293 11.1853C2.08365 12.188 1.97373 13.7708 2.81148 14.903L5.3983 18.3992C6.44956 19.8209 7.13131 20.743 8.12495 21.2466C9.12015 21.751 10.2602 21.7505 12.0127 21.7499L13.3198 21.7499C14.4668 21.7499 15.3805 21.7499 16.1196 21.68C16.8799 21.608 17.5232 21.4575 18.1104 21.1151C18.6028 20.828 19.0391 20.4532 19.3986 20.0091C19.7032 19.6328 19.9175 19.2158 20.0862 18.7356C20.1993 18.4139 20.2559 18.253 20.1662 18.1264C20.0765 17.9999 19.8961 17.9999 19.5352 17.9999H14C13.4477 17.9999 13 17.5522 13 16.9999C13 16.4476 13.4477 15.9999 14 15.9999H20.0138C20.3358 15.9999 20.4967 15.9999 20.6084 15.9057C20.6091 15.9051 20.6098 15.9045 20.6105 15.9039C20.7216 15.809 20.7477 15.6504 20.7998 15.3331L21.584 10.5638C21.6522 10.1494 21.6922 9.90586 21.7133 9.70156C22.1069 5.89008 19.2856 2.49705 15.4863 2.26241Z',
  d4: 'M14.5604 2.25012C14.5604 2.25012 15.2831 2.25011 15.4863 2.26266C19.2856 2.4973 22.1069 5.89032 21.7133 9.7018C21.6922 9.9061 21.6522 10.1496 21.584 10.564L20.7998 15.3334C20.6111 16.4813 20.4611 17.3937 20.2718 18.1198C20.0775 18.8656 19.8265 19.4808 19.3986 20.0093C19.0391 20.4534 18.6028 20.8283 18.1104 21.1154C17.5232 21.4577 16.8799 21.6083 16.1196 21.6802C15.3805 21.7501 14.4669 21.7501 13.3199 21.7501H13.3198L12.0127 21.7502C10.2602 21.7508 9.12015 21.7512 8.12495 21.2468C7.13131 20.7432 6.44956 19.8212 5.3983 18.3994L2.81148 14.9033C1.97373 13.7711 2.08365 12.1883 3.07293 11.1855C4.28899 9.95291 6.30284 10.1 7.33216 11.4911L7.50569 11.7256V9.3916V9.39159C7.50568 9.02868 7.50568 8.81472 7.51577 8.62918C7.70216 5.20165 10.4049 2.45049 13.8075 2.26039C13.9914 2.25011 14.2032 2.25012 14.5604 2.25012H14.5604Z',
  d5: 'M20.3023 18.0001H14C13.4477 18.0001 13 17.5524 13 17.0001C13 16.4478 13.4477 16.0001 14 16.0001H20.6896C20.5585 16.7849 20.44 17.4448 20.3023 18.0001Z',
  d6: 'M19.4621 16.9648H11.9795',
  d7: 'M18.8544 20.9424H8.3091C8.2777 20.9424 8.24813 20.9276 8.22929 20.9025L5.31095 17.0125C4.7368 16.0681 2.88869 14.2975 3.01388 13.0839C3.078 12.4623 3.34705 11.9852 3.68244 11.6514C4.16022 11.1757 4.88591 10.996 5.54641 11.1314C6.48565 11.3239 6.95467 12.1721 8.25922 14.0195V8.85088C8.25922 6.58313 10.0971 2.61096 15.2706 2.9667C19.8748 3.2833 21.1663 7.52717 20.9893 9.29691L18.9527 20.8599C18.9443 20.9076 18.9029 20.9424 18.8544 20.9424Z',
  d8: 'M15.4863 2.26253C15.2831 2.24998 15.0387 2.24999 14.6254 2.25H14.6254C14.2682 2.24999 13.9914 2.24999 13.8075 2.26026C10.4049 2.45037 7.70216 5.20153 7.51577 8.62906C7.50568 8.8146 7.50568 9.02855 7.50569 9.39146V9.39147V9.39148L7.50569 11.7255L7.33216 11.491C6.30284 10.0998 4.28899 9.95279 3.07293 11.1854C2.08365 12.1881 1.97373 13.771 2.81148 14.9032L7.88747 21.75L19.6303 21.75L20.2853 18L13 18V16L20.6346 16L21.584 10.5639C21.6522 10.1495 21.6922 9.90598 21.7133 9.70168C22.1069 5.8902 19.2856 2.49718 15.4863 2.26253Z',
};

export const IconGloveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="glove-stroke-rounded IconGloveStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconGloveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="glove-duotone-rounded IconGloveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconGloveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="glove-twotone-rounded IconGloveTwotoneRounded"
    >
      <path 
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
    </TheIconWrapper>
  );
};

export const IconGloveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="glove-solid-rounded IconGloveSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGloveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="glove-bulk-rounded IconGloveBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGloveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="glove-stroke-sharp IconGloveStrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconGloveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="glove-solid-sharp IconGloveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGlove: TheIconSelfPack = {
  name: 'Glove',
  StrokeRounded: IconGloveStrokeRounded,
  DuotoneRounded: IconGloveDuotoneRounded,
  TwotoneRounded: IconGloveTwotoneRounded,
  SolidRounded: IconGloveSolidRounded,
  BulkRounded: IconGloveBulkRounded,
  StrokeSharp: IconGloveStrokeSharp,
  SolidSharp: IconGloveSolidSharp,
};