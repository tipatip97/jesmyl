import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.9947 3L21 3.00529M18.4971 5.49736L18.5024 5.50264M16 7.99471L16.0053 8',
  d2: 'M9 10.0294C10.3726 8.65685 12.598 8.65685 13.9706 10.0294C15.3431 11.402 15.3431 13.6274 13.9706 15',
  d3: 'M4.85289 19.1471C8.04869 22.3429 12.9127 22.8538 16.6418 20.6797C17.5285 20.1627 17.9719 19.9043 17.999 19.3782C18.0261 18.8522 17.5277 18.4882 16.531 17.7603C14.683 16.4107 12.8636 14.7603 11.0516 12.9484C9.23967 11.1364 7.58927 9.31705 6.23969 7.46904C5.51179 6.47231 5.14784 5.97395 4.62178 6.00105C4.09572 6.02815 3.83725 6.47149 3.32031 7.35818C1.14624 11.0873 1.6571 15.9513 4.85289 19.1471Z',
  d4: 'M20.2877 2.29284C20.6782 1.90234 21.3114 1.90239 21.7019 2.29295L21.7072 2.29823C22.0977 2.68879 22.0976 3.32195 21.7071 3.71245C21.3165 4.10294 20.6833 4.10289 20.2928 3.71234L20.2876 3.70705C19.8971 3.3165 19.8971 2.68333 20.2877 2.29284ZM17.79 4.79021C18.1805 4.39971 18.8137 4.39974 19.2042 4.79029L19.2095 4.79558C19.6 5.18612 19.6 5.81929 19.2094 6.20979C18.8189 6.60029 18.1857 6.60026 17.7952 6.20971L17.7899 6.20442C17.3994 5.81388 17.3995 5.18071 17.79 4.79021ZM15.2929 7.28758C15.6835 6.89707 16.3166 6.89709 16.7071 7.28763L16.7124 7.29292C17.1029 7.68346 17.1029 8.31663 16.7124 8.70713C16.3218 9.09764 15.6887 9.09762 15.2982 8.70708L15.2929 8.70179C14.9024 8.31125 14.9024 7.67809 15.2929 7.28758Z',
  d5: 'M13.2635 10.7365C12.2815 9.75449 10.6892 9.75449 9.70718 10.7365L8.29297 9.32233C10.0561 7.55922 12.9146 7.55922 14.6777 9.32233C16.4409 11.0854 16.4409 13.944 14.6777 15.7071L13.2635 14.2929C14.2456 13.3108 14.2456 11.7186 13.2635 10.7365Z',
  d6: 'M6.81182 6.98094L6.84528 7.02676C8.16328 8.83152 9.78421 10.6204 11.5819 12.4181C13.3795 14.2157 15.1684 15.8367 16.9732 17.1547L17.019 17.1881C17.4779 17.5232 17.8928 17.8261 18.1812 18.1168C18.4993 18.4374 18.7768 18.8544 18.7479 19.4168C18.721 19.9388 18.4657 20.3117 18.1337 20.5993C17.8548 20.8409 17.4693 21.0655 17.0696 21.2984L17.0195 21.3277C13.0034 23.669 7.76507 23.1201 4.32247 19.6775C0.87986 16.2349 0.330924 10.9966 2.67229 6.98048L2.70151 6.93034C2.93442 6.5306 3.159 6.14515 3.40069 5.8662C3.6883 5.53424 4.06113 5.27897 4.5831 5.25208C5.14551 5.22311 5.56255 5.50061 5.88319 5.81874C6.17385 6.10712 6.47678 6.52205 6.81182 6.98094Z',
  d7: 'M2 12.3699C2 17.6885 6.31155 22 11.6301 22C14.0724 22 16.3024 21.0908 18 19.5925L4.40753 6C2.90917 7.69763 2 9.92759 2 12.3699Z',
  d8: 'M21.3309 1.25049L22.7503 2.6701L21.336 4.0842L19.9166 2.66459L21.3309 1.25049ZM18.8332 3.74784L20.2527 5.16743L18.8384 6.58156L17.4189 5.16198L18.8332 3.74784ZM16.3361 6.2452L17.7556 7.66476L16.3413 9.07892L14.9219 7.65936L16.3361 6.2452Z',
  d9: 'M13.2635 10.7361C12.2815 9.754 10.6892 9.754 9.70718 10.7361L8.29297 9.32184C10.0561 7.55873 12.9146 7.55873 14.6777 9.32184C16.4409 11.0849 16.4409 13.9435 14.6777 15.7066L13.2635 14.2924C14.2456 13.3103 14.2456 11.7181 13.2635 10.7361Z',
  d10: 'M19.0948 19.6261L18.4963 20.1543C16.6669 21.769 14.2621 22.7495 11.6301 22.7495C5.89733 22.7495 1.25 18.1022 1.25 12.3694C1.25 9.73743 2.23057 7.33263 3.84522 5.50324L4.37343 4.90479L19.0948 19.6261Z',
};

export const IconGpsSignal02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-signal-02-stroke-rounded IconGpsSignal02StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGpsSignal02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-signal-02-duotone-rounded IconGpsSignal02DuotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGpsSignal02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-signal-02-twotone-rounded IconGpsSignal02TwotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGpsSignal02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-signal-02-solid-rounded IconGpsSignal02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconGpsSignal02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-signal-02-bulk-rounded IconGpsSignal02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconGpsSignal02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-signal-02-stroke-sharp IconGpsSignal02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconGpsSignal02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-signal-02-solid-sharp IconGpsSignal02SolidSharp"
    >
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGpsSignal02: TheIconSelfPack = {
  name: 'GpsSignal02',
  StrokeRounded: IconGpsSignal02StrokeRounded,
  DuotoneRounded: IconGpsSignal02DuotoneRounded,
  TwotoneRounded: IconGpsSignal02TwotoneRounded,
  SolidRounded: IconGpsSignal02SolidRounded,
  BulkRounded: IconGpsSignal02BulkRounded,
  StrokeSharp: IconGpsSignal02StrokeSharp,
  SolidSharp: IconGpsSignal02SolidSharp,
};