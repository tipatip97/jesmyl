import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 10C20 10 22.375 11.8222 21.375 14.6667C20.375 17.5111 21.375 19.4074 22 20M20 10H4M20 10V4M4 10C4 10 1.625 11.8222 2.625 14.6667C3.625 17.5111 2.625 19.4074 2 20M4 10V4M22 4H20.75H20M2 4H3.25H4M4 4H20',
  d2: 'M11 7H13',
  d3: 'M4 10H20V4H4V10Z',
  d4: 'M2 3C1.44772 3 1 3.44772 1 4C1 4.55228 1.44772 5 2 5H3L3 9.55821C2.97535 9.58289 2.94989 9.60882 2.92376 9.636C2.67529 9.89436 2.35573 10.2748 2.07169 10.7663C1.49538 11.7635 1.0619 13.2356 1.6816 14.9983C2.5593 17.4949 1.63276 18.9702 1.31196 19.2743C0.911183 19.6543 0.894337 20.2873 1.27433 20.688C1.65433 21.0888 2.28727 21.1057 2.68805 20.7257C3.61724 19.8447 4.6907 17.5273 3.5684 14.335C3.18811 13.2533 3.44213 12.392 3.80332 11.767C3.98802 11.4474 4.19972 11.1945 4.36531 11.0223L4.38697 11L19.613 11L19.6347 11.0223C19.8003 11.1945 20.012 11.4474 20.1967 11.767C20.5579 12.392 20.8119 13.2533 20.4316 14.335C19.3093 17.5273 20.3828 19.8447 21.312 20.7257C21.7127 21.1057 22.3457 21.0888 22.7257 20.688C23.1057 20.2873 23.0888 19.6543 22.688 19.2743C22.3672 18.9702 21.4407 17.4949 22.3184 14.9983C22.9381 13.2356 22.5046 11.7635 21.9283 10.7663C21.6443 10.2748 21.3247 9.89436 21.0762 9.636C21.0501 9.60882 21.0247 9.58289 21 9.55821L21 5H22C22.5523 5 23 4.55228 23 4C23 3.44772 22.5523 3 22 3L2 3ZM11 6C10.4477 6 10 6.44771 10 7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7C14 6.44771 13.5523 6 13 6H11Z',
  d5: 'M20 5V11H4V5H20Z',
  d6: 'M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H21V9.55821C21.0247 9.58289 21.0501 9.60882 21.0762 9.636C21.3247 9.89436 21.6443 10.2748 21.9283 10.7663C22.5046 11.7635 22.9381 13.2356 22.3184 14.9983C21.4407 17.4949 22.3672 18.9702 22.688 19.2743C23.0888 19.6543 23.1057 20.2873 22.7257 20.688C22.3457 21.0888 21.7127 21.1057 21.312 20.7257C20.3828 19.8447 19.3093 17.5273 20.4316 14.335C20.8119 13.2533 20.5579 12.392 20.1967 11.767C20.012 11.4474 19.7786 11.1722 19.613 11L19.2949 10.481C19.1021 10.1665 19 9.80472 19 9.43576V5H5V9.43576C5 9.80472 4.89794 10.1665 4.7051 10.481L4.38697 11C4.22137 11.1722 3.98802 11.4474 3.80332 11.767C3.44213 12.392 3.18811 13.2533 3.5684 14.335C4.6907 17.5273 3.61724 19.8447 2.68805 20.7257C2.28727 21.1057 1.65433 21.0888 1.27433 20.688C0.894337 20.2873 0.911183 19.6543 1.31196 19.2743C1.63276 18.9702 2.5593 17.4949 1.6816 14.9983C1.0619 13.2356 1.49538 11.7635 2.07169 10.7663C2.35573 10.2748 2.67529 9.89436 2.92376 9.636C2.94989 9.60882 2.97535 9.58289 3 9.55821V5H2C1.44772 5 1 4.55228 1 4Z',
  d7: 'M10 8C10 7.44772 10.4477 7 11 7H13C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9H11C10.4477 9 10 8.55228 10 8Z',
  d8: 'M10 7H14',
  d9: 'M22.058 5.22454V3.25H1.94203V5.22454H2.94783V9.72472C2.92303 9.74908 2.89743 9.77468 2.87114 9.80152C2.62123 10.0566 2.29982 10.4322 2.01413 10.9174C1.43448 11.902 0.998489 13.3553 1.62179 15.0956C2.50457 17.5604 1.57266 19.0168 1.25 19.3171L2.63406 20.75C3.56865 19.8802 4.64833 17.5924 3.51952 14.4407C3.13702 13.3727 3.39252 12.5225 3.7558 11.9054C3.94158 11.5899 4.1545 11.3402 4.32105 11.1702L4.34283 11.1481H19.6572L19.6789 11.1702C19.8455 11.3402 20.0584 11.5899 20.2442 11.9054C20.6075 12.5225 20.863 13.3727 20.4805 14.4407C19.3517 17.5924 20.4314 19.8802 21.3659 20.75L22.75 19.3171C22.4273 19.0168 21.4954 17.5604 22.3782 15.0956C23.0015 13.3553 22.5655 11.902 21.9859 10.9174C21.7002 10.4322 21.3788 10.0566 21.1289 9.80152C21.1026 9.77468 21.077 9.74908 21.0522 9.72472V5.22454H22.058ZM10 7.75H14V6.25H10V7.75Z',
};

export const IconTable01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-01-stroke-rounded IconTable01StrokeRounded"
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

export const IconTable01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-01-duotone-rounded IconTable01DuotoneRounded"
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

export const IconTable01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-01-twotone-rounded IconTable01TwotoneRounded"
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

export const IconTable01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-01-solid-rounded IconTable01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTable01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-01-bulk-rounded IconTable01BulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTable01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-01-stroke-sharp IconTable01StrokeSharp"
    >
      <path 
        d={d.d1} 
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

export const IconTable01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-01-solid-sharp IconTable01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTable01: TheIconSelfPack = {
  name: 'Table01',
  StrokeRounded: IconTable01StrokeRounded,
  DuotoneRounded: IconTable01DuotoneRounded,
  TwotoneRounded: IconTable01TwotoneRounded,
  SolidRounded: IconTable01SolidRounded,
  BulkRounded: IconTable01BulkRounded,
  StrokeSharp: IconTable01StrokeSharp,
  SolidSharp: IconTable01SolidSharp,
};