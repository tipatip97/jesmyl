import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4.5 18C3.96555 17.8228 3.53433 17.5662 3.17157 17.1945C2 15.994 2 14.0618 2 10.1975C2 6.33316 2 4.40099 3.17157 3.2005C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.2005C22 4.40099 22 6.33316 22 10.1975C22 14.0618 22 15.994 20.8284 17.1945C20.4657 17.5662 20.0345 17.8228 19.5 18',
  d2: 'M8.91499 16.7661C10.1081 15.0762 10.7046 14.2312 11.5143 14.0528C11.8336 13.9824 12.1664 13.9824 12.4857 14.0528C13.2954 14.2312 13.8919 15.0762 15.085 16.7661C16.4811 18.7436 17.1791 19.7324 16.9605 20.5425C16.875 20.8594 16.7031 21.151 16.4611 21.3897C15.8425 22 14.5617 22 12 22C9.43831 22 8.15747 22 7.5389 21.3897C7.29691 21.151 7.12502 20.8594 7.03949 20.5425C6.82085 19.7324 7.5189 18.7436 8.91499 16.7661Z',
  d3: 'M10 2H14C17.7712 2 19.6569 2 20.8284 3.2005C22 4.40099 22 6.33316 22 10.1975C22 14.0618 22 15.994 20.8284 17.1945C20.4657 17.5662 20.0345 17.8228 19.5 18H15.946C15.6989 17.6357 15.411 17.2279 15.085 16.7661C13.8919 15.0762 13.2954 14.2312 12.4857 14.0528C12.1664 13.9824 11.8336 13.9824 11.5143 14.0528C10.7046 14.2312 10.1081 15.0762 8.91499 16.7661C8.58899 17.2279 8.30105 17.6357 8.05396 18H4.5C3.96555 17.8228 3.53433 17.5662 3.17157 17.1945C2 15.994 2 14.0618 2 10.1975C2 6.33316 2 4.40099 3.17157 3.2005C4.34315 2 6.22876 2 10 2Z',
  d4: 'M8.91499 17.2661C10.1081 15.5762 10.7046 14.7312 11.5143 14.5528C11.8336 14.4824 12.1664 14.4824 12.4857 14.5528C13.2954 14.7312 13.8919 15.5762 15.085 17.2661C16.4811 19.2436 17.1791 20.2324 16.9605 21.0425C16.875 21.3594 16.7031 21.651 16.4611 21.8897C15.8425 22.5 14.5617 22.5 12 22.5C9.43831 22.5 8.15747 22.5 7.5389 21.8897C7.29691 21.651 7.12502 21.3594 7.03949 21.0425C6.82085 20.2324 7.5189 19.2436 8.91499 17.2661Z',
  d5: 'M14.0732 1.5C15.8966 1.49997 17.3664 1.49995 18.5223 1.65658C19.7225 1.81921 20.733 2.1671 21.5355 2.97595C22.3381 3.7848 22.6833 4.80322 22.8446 6.01277C23.0001 7.17779 23 8.65909 23 10.4969V10.6443C23 12.4821 23.0001 13.9633 22.8446 15.1282C22.6833 16.3378 22.3381 17.3561 21.5355 18.1649C20.733 18.9738 19.7225 19.3217 18.5223 19.4843C18.4226 19.4978 18.3727 19.5046 18.3271 19.4966C18.2631 19.4853 18.2084 19.4561 18.1632 19.4091C18.131 19.3756 18.1056 19.3243 18.0547 19.2217C18.0196 19.1509 17.9839 19.0821 17.9481 19.0153C17.8594 18.8498 17.7587 18.6767 17.6478 18.496C17.3989 18.0907 17.2744 17.888 17.3457 17.7387C17.4169 17.5894 17.6548 17.5605 18.1305 17.5027C18.1728 17.4976 18.2146 17.4922 18.2558 17.4866C19.2342 17.3541 19.7523 17.1116 20.1213 16.7397C20.4904 16.3677 20.7309 15.8456 20.8625 14.8597C20.9979 13.8447 21 12.4995 21 10.5706C21 8.64167 20.9979 7.29638 20.8625 6.28135C20.7309 5.2953 20.4903 4.77314 20.1213 4.40123C19.7523 4.02931 19.2342 3.78683 18.2558 3.65426C17.2487 3.5178 15.9139 3.51566 14 3.51566H10C8.08611 3.51566 6.7513 3.5178 5.74416 3.65426C4.7658 3.78683 4.2477 4.02931 3.87869 4.40122C3.50967 4.77314 3.26907 5.2953 3.13753 6.28135C3.00213 7.29638 3 8.64167 3 10.5706C3 12.4995 3.00213 13.8447 3.13753 14.8597C3.26907 15.8456 3.50965 16.3677 3.87869 16.7397C4.24771 17.1116 4.7658 17.3541 5.74416 17.4866C5.7854 17.4922 5.82719 17.4976 5.86954 17.5027C6.34524 17.5605 6.58309 17.5894 6.65433 17.7387C6.72558 17.888 6.60111 18.0907 6.35217 18.496C6.24125 18.6767 6.1406 18.8498 6.05191 19.0153C6.01612 19.0821 5.98039 19.1509 5.9453 19.2217C5.89444 19.3243 5.86901 19.3756 5.83678 19.4091C5.7916 19.4561 5.73687 19.4853 5.67291 19.4966C5.62728 19.5046 5.57741 19.4978 5.47766 19.4843C4.27752 19.3217 3.26702 18.9738 2.46446 18.1649C1.66192 17.3561 1.31673 16.3378 1.15537 15.1282C0.999952 13.9633 0.999974 12.482 1 10.6443V10.4968C0.999974 8.65906 0.999952 7.17778 1.15537 6.01277C1.31672 4.80322 1.66191 3.7848 2.46446 2.97595C3.26702 2.1671 4.27752 1.81921 5.47766 1.65658C6.63362 1.49995 8.10339 1.49997 9.92684 1.5H14.0732Z',
  d6: 'M18 17H22V3H2V17H6',
  d7: 'M7 21H17L12 13L7 21Z',
  d8: 'M1.25 3.21875C1.25 2.68372 1.68754 2.25 2.22727 2.25H21.7727C22.3125 2.25 22.75 2.68372 22.75 3.21875V16.7812C22.75 17.3163 22.3125 17.75 21.7727 17.75H17.8636V15.8125H20.7955V4.1875H3.20455V15.8125H6.13636V17.75H2.22727C1.68754 17.75 1.25 17.3163 1.25 16.7812V3.21875Z',
  d9: 'M12 12.25C12.2586 12.25 12.4989 12.3832 12.636 12.6025L17.636 20.6025C17.7805 20.8337 17.7882 21.1251 17.656 21.3636C17.5238 21.602 17.2726 21.75 17 21.75H7C6.72736 21.75 6.47619 21.602 6.34402 21.3636C6.21185 21.1251 6.2195 20.8337 6.364 20.6025L11.364 12.6025C11.5011 12.3832 11.7414 12.25 12 12.25Z',
};

export const IconAirplayLineStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplay-line-stroke-rounded IconAirplayLineStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAirplayLineDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplay-line-duotone-rounded IconAirplayLineDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconAirplayLineTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplay-line-twotone-rounded IconAirplayLineTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconAirplayLineSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplay-line-solid-rounded IconAirplayLineSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplayLineBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplay-line-bulk-rounded IconAirplayLineBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplayLineStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplay-line-stroke-sharp IconAirplayLineStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAirplayLineSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airplay-line-solid-sharp IconAirplayLineSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAirplayLine: TheIconSelfPack = {
  name: 'AirplayLine',
  StrokeRounded: IconAirplayLineStrokeRounded,
  DuotoneRounded: IconAirplayLineDuotoneRounded,
  TwotoneRounded: IconAirplayLineTwotoneRounded,
  SolidRounded: IconAirplayLineSolidRounded,
  BulkRounded: IconAirplayLineBulkRounded,
  StrokeSharp: IconAirplayLineStrokeSharp,
  SolidSharp: IconAirplayLineSolidSharp,
};