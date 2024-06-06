import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.0172 18.0169C16.4796 19.5511 14.3574 20.4997 12.0137 20.4997C7.31925 20.4997 3.51367 16.6941 3.51367 11.9997C3.51367 9.65593 4.46225 7.53375 5.99643 5.99609',
  d2: 'M22.5 12H20.5',
  d3: 'M3.5 12H1.5',
  d4: 'M12 1.5L12 3.5',
  d5: 'M12 20.5V22.5',
  d6: 'M2 2L22 22',
  d7: 'M8.33594 4.32282C9.4491 3.79546 10.6968 3.5 12.0145 3.5C16.709 3.5 20.5145 7.24977 20.5145 11.8753C20.5145 13.1738 20.2147 14.4032 19.6795 15.5',
  d8: 'M3.51367 12C3.51367 16.6944 7.31925 20.5 12.0137 20.5C14.3487 20.5 16.4637 19.5585 18 18.0344L5.99287 6C4.46078 7.53737 3.51367 9.65808 3.51367 12Z',
  d9: 'M22.5 12H20.5M12 1.5V3.5M8.33594 4.32282C9.4491 3.79546 10.6968 3.5 12.0145 3.5C16.709 3.5 20.5145 7.24977 20.5145 11.8753C20.5145 13.1738 20.2147 14.4032 19.6795 15.5',
  d10: 'M2.29192 2.29289C2.68244 1.90237 3.31561 1.90237 3.70613 2.29289L21.7061 20.2929C22.0967 20.6834 22.0967 21.3166 21.7061 21.7071C21.3156 22.0976 20.6824 22.0976 20.2919 21.7071L2.29192 3.70711C1.90139 3.31658 1.90139 2.68342 2.29192 2.29289Z',
  d11: 'M11.999 1C12.5513 1 12.999 1.44772 12.999 2V2.78639C12.999 2.93932 13.1145 3.06726 13.2659 3.0886C17.2227 3.64603 20.3531 6.77642 20.9105 10.7332C20.9319 10.8846 21.0598 11.0001 21.2128 11L21.999 11C22.5512 11 22.999 11.4477 22.999 11.9999C22.9991 12.5522 22.5514 13 21.9991 13L21.2127 13C21.0598 13.0001 20.9319 13.1152 20.9106 13.2666C20.7744 14.2336 20.4846 15.1512 20.0666 15.9939C19.9779 16.1727 19.7408 16.2063 19.5997 16.0651L18.5376 15.003C18.4496 14.915 18.4256 14.7821 18.4731 14.6671C18.812 13.8451 18.999 12.9445 18.999 12.0001C18.999 8.13413 15.865 5.00013 11.999 5.00013C11.0547 5.00013 10.154 5.18712 9.33206 5.5261C9.21704 5.57354 9.08413 5.54957 8.99615 5.46159L7.93402 4.39947C7.79289 4.25833 7.8264 4.02126 8.00521 3.93258C8.84795 3.51458 9.76552 3.22474 10.7324 3.08855C10.8839 3.06723 10.999 2.93932 10.999 2.78639V2C10.999 1.44772 11.4467 1 11.999 1Z',
  d12: 'M12.999 21.2139V22C12.999 22.5523 12.5513 23 11.999 23C11.4467 23 10.999 22.5523 10.999 22V21.2139C10.999 21.0609 10.8836 20.933 10.7321 20.9117C6.77533 20.3542 3.6449 17.2238 3.08748 13.2669C3.06615 13.1155 2.93822 13.0001 2.7853 13L1.99896 13C1.44668 13 0.998988 12.5522 0.999023 11.9999C0.999058 11.4477 1.4468 11 1.99909 11L2.78528 11C2.93821 11.0001 3.06614 10.8848 3.08747 10.7334C3.35154 8.85878 4.19314 7.16963 5.42654 5.85171C5.53976 5.73073 5.7301 5.73108 5.84726 5.84823L18.1509 18.1519C18.2681 18.2691 18.2684 18.4594 18.1474 18.5726C16.8295 19.806 15.1403 20.6476 13.2657 20.9117C13.1142 20.933 12.999 21.0609 12.999 21.2139Z',
  d13: 'M12.999 21.2149V22.0011C12.999 22.5533 12.5513 23.0011 11.999 23.0011C11.4467 23.0011 10.999 22.5533 10.999 22.0011V21.2149C10.999 21.062 10.8836 20.934 10.7321 20.9127C6.77533 20.3553 3.6449 17.2248 3.08748 13.268C3.06615 13.1166 2.93822 13.0011 2.7853 13.0011L1.99896 13.0011C1.44668 13.001 0.998988 12.5533 0.999023 12.001C0.999058 11.4487 1.4468 11.001 1.99909 11.0011L2.78528 11.0011C2.93821 11.0011 3.06614 10.8859 3.08747 10.7345C3.35154 8.85983 4.19314 7.17068 5.42654 5.85276C5.53976 5.73179 5.7301 5.73213 5.84726 5.84928L18.1509 18.1529C18.2681 18.2701 18.2684 18.4604 18.1474 18.5737C16.8295 19.8071 15.1403 20.6487 13.2657 20.9127C13.1142 20.9341 12.999 21.062 12.999 21.2149Z',
  d14: 'M11.9993 1C12.5515 1 12.9993 1.44772 12.9993 2V2.78639C12.9993 2.93932 13.1147 3.06726 13.2662 3.0886C17.2229 3.64603 20.3533 6.77642 20.9108 10.7332C20.9321 10.8846 21.0601 11.0001 21.213 11L21.9992 11C22.5515 11 22.9992 11.4477 22.9993 11.9999C22.9993 12.5522 22.5516 13 21.9993 13L21.213 13C21.0601 13.0001 20.9322 13.1152 20.9108 13.2666C20.7747 14.2336 20.4848 15.1512 20.0668 15.9939C19.9781 16.1727 19.7411 16.2063 19.5999 16.0651L18.5378 15.003C18.4498 14.915 18.4259 14.7821 18.4733 14.6671C18.8123 13.8451 18.9993 12.9445 18.9993 12.0001C18.9993 8.13413 15.8653 5.00013 11.9993 5.00013C11.0549 5.00013 10.1543 5.18712 9.33229 5.5261C9.21727 5.57354 9.08436 5.54957 8.99639 5.46159L7.93426 4.39947C7.79313 4.25833 7.82664 4.02126 8.00545 3.93258C8.84819 3.51458 9.76576 3.22474 10.7327 3.08855C10.8841 3.06723 10.9993 2.93932 10.9993 2.78639V2C10.9993 1.44772 11.447 1 11.9993 1Z',
  d15: 'M22 12H20',
  d16: 'M4 12H2',
  d17: 'M12 2L12 4',
  d18: 'M12 20V22',
  d19: 'M8.16235 4.97939C9.30186 4.35502 10.61 4 12.001 4C16.4193 4 20.001 7.58172 20.001 12C20.001 13.391 19.646 14.6991 19.0216 15.8386M17.6682 17.6465C16.2196 19.1003 14.2154 20 12.001 20C7.5827 20 4.00098 16.4183 4.00098 12C4.00098 9.7856 4.90067 7.78134 6.35447 6.33282',
  d20: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d21: 'M20.9451 11C20.4839 6.82838 17.1716 3.51608 13 3.05493V1.25H11V3.05493C9.7967 3.18795 8.6649 3.55819 7.6524 4.11785L9.14246 5.60791C10.015 5.21725 10.9821 5 12 5C15.866 5 19 8.13401 19 12C19 13.0179 18.7827 13.985 18.3921 14.8575L19.8821 16.3476C20.4418 15.3351 20.8121 14.2033 20.9451 13H22.75V11H20.9451Z',
  d22: 'M13 22.75V20.9451C15.0856 20.7145 16.9564 19.7714 18.3635 18.3645L5.63554 5.63653C4.22865 7.04365 3.28548 8.91444 3.05493 11H1.25V13H3.05493C3.51608 17.1716 6.82838 20.4839 11 20.9451V22.75H13Z',
};

export const IconGpsOff01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-off-01-stroke-rounded IconGpsOff01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconGpsOff01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-off-01-duotone-rounded IconGpsOff01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconGpsOff01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-off-01-twotone-rounded IconGpsOff01TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGpsOff01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-off-01-solid-rounded IconGpsOff01SolidRounded"
    >
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

export const IconGpsOff01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-off-01-bulk-rounded IconGpsOff01BulkRounded"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
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

export const IconGpsOff01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-off-01-stroke-sharp IconGpsOff01StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGpsOff01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="gps-off-01-solid-sharp IconGpsOff01SolidSharp"
    >
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGpsOff01: TheIconSelfPack = {
  name: 'GpsOff01',
  StrokeRounded: IconGpsOff01StrokeRounded,
  DuotoneRounded: IconGpsOff01DuotoneRounded,
  TwotoneRounded: IconGpsOff01TwotoneRounded,
  SolidRounded: IconGpsOff01SolidRounded,
  BulkRounded: IconGpsOff01BulkRounded,
  StrokeSharp: IconGpsOff01StrokeSharp,
  SolidSharp: IconGpsOff01SolidSharp,
};