import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.4477 8.2C21.5 9.25014 21.5 10.4994 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C13.0719 2.5 14.0156 2.5 14.85 2.51908',
  d2: 'M8 11.5C8 11.5 9.5 11.5 11.5 15C11.5 15 16.5588 5.83333 21.5 4',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.1439 2.04244 18.8719 2.22803 19.5072 2.54678C19.8582 2.72284 20.0336 2.81087 20.0404 2.98797C20.0473 3.16506 19.8541 3.28144 19.4677 3.51419C18.569 4.0556 17.7091 4.75787 16.9121 5.51948C15.6891 6.68815 14.5566 8.05277 13.5958 9.33946C12.633 10.6288 11.8301 11.8568 11.2681 12.7618C11.2443 12.8002 11.189 12.802 11.1624 12.7655C10.4829 11.8344 9.85878 11.2433 9.32346 10.8685C8.93292 10.5952 8.59243 10.4391 8.31883 10.352C8.14597 10.2893 7.86759 10.2581 7.75 10.2503C7.19772 10.2503 6.75 10.698 6.75 11.2503C6.75 11.7648 7.13862 12.1886 7.63836 12.2441C7.65562 12.246 7.66425 12.247 7.67233 12.2483C7.67946 12.2495 7.6912 12.252 7.6982 12.2538C7.70613 12.2559 7.70823 12.2566 7.71242 12.2579C7.78257 12.2802 7.94208 12.3429 8.17654 12.507C8.64836 12.8373 9.43252 13.5852 10.3818 15.2464C10.5611 15.5603 10.8959 15.7529 11.2574 15.7502C11.6189 15.7476 11.9511 15.5493 12.1258 15.2329L12.1279 15.2291L12.1376 15.2117L12.1783 15.1395C12.2147 15.0752 12.2694 14.9793 12.3413 14.8559C12.485 14.6089 12.697 14.2519 12.9672 13.8169C13.5081 12.9458 14.2787 11.7676 15.1983 10.5361C16.1199 9.30194 17.1786 8.03114 18.2938 6.96544C19.22 6.08043 20.147 5.37393 21.0323 4.934C21.2656 4.8181 21.3822 4.76014 21.5089 4.81347C21.6357 4.86679 21.6756 4.99008 21.7554 5.23666C21.8992 5.68108 21.9989 6.16395 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75213 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d6: 'M22.4375 3.65241C22.6297 4.1702 22.3657 4.7457 21.8479 4.93782C20.7962 5.32801 19.6693 6.1399 18.5438 7.21544C17.4286 8.28114 16.3699 9.55194 15.4483 10.7861C14.5287 12.0176 13.7581 13.1958 13.2172 14.0669C12.9276 14.5332 12.6421 15.0027 12.3758 15.4829C12.2011 15.7993 11.8689 15.9976 11.5074 16.0002C11.1459 16.0029 10.8111 15.8103 10.6318 15.4964C9.68252 13.8352 8.89836 13.0873 8.42654 12.757C8.13674 12.5541 7.96606 12.5072 7.92605 12.4976C7.4083 12.4597 7 12.0277 7 11.5003C7 10.948 7.44772 10.5003 8 10.5003C8.56627 10.5042 9.12266 10.803 9.57346 11.1185C10.1234 11.5035 10.767 12.1168 11.4681 13.0925C12.0322 12.1802 12.8541 10.9175 13.8458 9.58946C14.8066 8.30277 15.9391 6.93815 17.1621 5.76948C18.3748 4.61064 19.7332 3.5892 21.1521 3.06272C21.6699 2.87061 22.2454 3.13462 22.4375 3.65241Z',
  d7: 'M21 10V21H3V3H15',
  d8: 'M8.5 10L12 13.5L21.0002 3.5',
  d9: 'M20.9562 2.25L11.9687 12.0544L9.20718 9.29291L7.79297 10.7071L12.0315 14.9456L21.75 4.34385V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.58579 2.58579 2.25 3 2.25H20.9562Z',
};

export const IconCheckmarkSquare03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-03-stroke-rounded IconCheckmarkSquare03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-03-duotone-rounded IconCheckmarkSquare03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-03-twotone-rounded IconCheckmarkSquare03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconCheckmarkSquare03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-03-solid-rounded IconCheckmarkSquare03SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-03-bulk-rounded IconCheckmarkSquare03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-03-stroke-sharp IconCheckmarkSquare03StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconCheckmarkSquare03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="checkmark-square-03-solid-sharp IconCheckmarkSquare03SolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCheckmarkSquare03: TheIconSelfPack = {
  name: 'CheckmarkSquare03',
  StrokeRounded: IconCheckmarkSquare03StrokeRounded,
  DuotoneRounded: IconCheckmarkSquare03DuotoneRounded,
  TwotoneRounded: IconCheckmarkSquare03TwotoneRounded,
  SolidRounded: IconCheckmarkSquare03SolidRounded,
  BulkRounded: IconCheckmarkSquare03BulkRounded,
  StrokeSharp: IconCheckmarkSquare03StrokeSharp,
  SolidSharp: IconCheckmarkSquare03SolidSharp,
};