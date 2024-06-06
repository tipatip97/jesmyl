import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 11V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V11C20 14.7712 20 16.6569 18.8284 17.8284C17.6569 19 15.7712 19 12 19C8.22876 19 6.34315 19 5.17157 17.8284C4 16.6569 4 14.7712 4 11Z',
  d2: 'M4 12C4 12 7.73333 13 12 13C16.2667 13 20 12 20 12',
  d3: 'M7 19L5 22',
  d4: 'M17 19L19 22',
  d5: 'M4.5 16H6.5',
  d6: 'M17.5 16H19.5',
  d7: 'M5 5H19',
  d8: 'M5.17036 17.804C6.34214 19 8.22809 19 12 19C15.7719 19 17.6579 19 18.8296 17.804C19.8765 16.7355 19.9881 15.0851 20 12C14.055 13.8667 6.85623 12.7778 4 12C4.01189 15.0851 4.12346 16.7355 5.17036 17.804Z',
  d9: 'M18.9792 3.02513C17.7818 2 15.8545 2 12 2C8.1455 2 6.21824 2 5.0208 3.02513C4.45606 3.5086 4.15767 4.13105 4 5H20C19.8423 4.13105 19.5439 3.5086 18.9792 3.02513Z',
  d10: 'M7.55481 18.0431C8.01434 18.3494 8.13851 18.9703 7.83216 19.4298L5.83216 22.4298C5.5258 22.8893 4.90493 23.0135 4.44541 22.7072C3.98588 22.4008 3.8617 21.7799 4.16806 21.3204L6.16806 18.3204C6.47441 17.8609 7.09528 17.7367 7.55481 18.0431ZM16.4454 18.0431C16.9049 17.7367 17.5258 17.8609 17.8322 18.3204L19.8322 21.3204C20.1385 21.7799 20.0143 22.4008 19.5548 22.7072C19.0953 23.0135 18.4744 22.8893 18.1681 22.4298L16.1681 19.4298C15.8617 18.9703 15.9859 18.3494 16.4454 18.0431Z',
  d11: 'M11.9289 1.125H12.0711H12.0712C13.8439 1.12498 15.2729 1.12496 16.3967 1.27628C17.5635 1.43339 18.546 1.7695 19.3262 2.55093C20.1065 3.33237 20.4421 4.31627 20.599 5.48483C20.75 6.61038 20.75 8.04147 20.75 9.81695V10.9331C20.75 12.5813 20.75 13.9328 20.6292 15.0185C20.6221 15.0817 20.5635 15.125 20.5 15.125H18.75C18.3358 15.125 18 15.4608 18 15.875C18 16.2892 18.3358 16.625 18.75 16.625H19.4483C19.8434 16.625 20.041 16.625 20.1276 16.775C20.2142 16.9249 20.1243 17.0807 19.9445 17.3923C19.7777 17.6813 19.5745 17.9504 19.3262 18.1991C18.546 18.9805 17.5635 19.3166 16.3967 19.4737C15.2729 19.625 13.8439 19.625 12.0712 19.625H11.9289C10.1561 19.625 8.72713 19.625 7.60329 19.4737C6.43648 19.3166 5.45405 18.9805 4.67379 18.1991C4.42553 17.9504 4.22229 17.6813 4.05549 17.3923C3.87572 17.0807 3.78583 16.9249 3.87244 16.775C3.95905 16.625 4.1566 16.625 4.55171 16.625H5.25C5.66421 16.625 6 16.2892 6 15.875C6 15.4608 5.66421 15.125 5.25 15.125H3.5C3.43646 15.125 3.37788 15.0817 3.37085 15.0185C3.24996 13.9328 3.24998 12.5814 3.25 10.9331V10.9331V9.8169V9.81688C3.24998 8.04144 3.24996 6.61036 3.40105 5.48483C3.55792 4.31627 3.89353 3.33237 4.67379 2.55093C5.45405 1.7695 6.43648 1.43339 7.60329 1.27628C8.72712 1.12496 10.1561 1.12498 11.9288 1.125H11.9289ZM5.8698 5.625H18.13C18.3819 5.625 18.5078 5.625 18.5938 5.70395C18.6799 5.7829 18.6903 5.9041 18.7112 6.14649C18.7922 7.08622 18.8054 8.33226 18.8054 9.88816L18.8053 10.8959C18.8053 11.1297 18.8053 11.2466 18.7369 11.3297C18.6685 11.4127 18.5552 11.4349 18.3286 11.4793C18.0711 11.5297 17.785 11.5826 17.4743 11.6356C16.0344 11.881 14.0786 12.1249 12.0003 12.1249C9.92209 12.1249 7.96634 11.881 6.52637 11.6356C6.2153 11.5825 5.92889 11.5295 5.67117 11.4791C5.44456 11.4347 5.33125 11.4125 5.26287 11.3295C5.19449 11.2464 5.19448 11.1295 5.19445 10.8957L5.19434 9.88816C5.19434 8.33226 5.20757 7.08622 5.28856 6.14649C5.30945 5.9041 5.3199 5.7829 5.40594 5.70395C5.49199 5.625 5.61793 5.625 5.8698 5.625Z',
  d12: 'M16.2128 19.4967C16.275 19.4894 16.3363 19.4817 16.3967 19.4736C17.0816 19.3814 17.703 19.2275 18.2573 18.958L19.8322 21.3203C20.1385 21.7798 20.0143 22.4007 19.5548 22.707C19.0953 23.0134 18.4744 22.8892 18.1681 22.4297L16.2128 19.4967ZM5.74285 18.9581C6.29708 19.2275 6.91842 19.3814 7.60329 19.4736C7.66379 19.4817 7.72517 19.4895 7.78745 19.4967L5.83216 22.4297C5.5258 22.8892 4.90493 23.0134 4.44541 22.707C3.98588 22.4007 3.8617 21.7798 4.16806 21.3203L5.74285 18.9581Z',
  d13: 'M12.0711 1.125H11.9289H11.9289C10.1561 1.12498 8.72712 1.12496 7.60329 1.27628C6.43648 1.43339 5.45405 1.76949 4.67379 2.55093C3.89353 3.33237 3.55792 4.31627 3.40105 5.48483C3.24996 6.61036 3.24998 8.04144 3.25 9.81688V9.8169V10.9331V10.9331C3.24998 12.7086 3.24996 14.1396 3.40105 15.2652C3.55792 16.4337 3.89353 17.4176 4.67379 18.1991C5.45405 18.9805 6.43648 19.3166 7.60329 19.4737C8.72713 19.625 10.1561 19.625 11.9289 19.625H12.0712C13.8439 19.625 15.2729 19.625 16.3967 19.4737C17.5635 19.3166 18.546 18.9805 19.3262 18.1991C20.1065 17.4176 20.4421 16.4337 20.599 15.2652C20.75 14.1396 20.75 12.7085 20.75 10.9331V9.81695C20.75 8.04147 20.75 6.61038 20.599 5.48483C20.4421 4.31627 20.1065 3.33237 19.3262 2.55093C18.546 1.76949 17.5635 1.43339 16.3967 1.27628C15.2729 1.12496 13.8439 1.12498 12.0712 1.125H12.0711Z',
  d14: 'M18.131 5.625H5.87078C5.6189 5.625 5.49296 5.625 5.40692 5.70395C5.32087 5.7829 5.31043 5.90409 5.28954 6.14649C5.20855 7.08622 5.19531 8.33225 5.19531 9.88816L5.19543 10.8957C5.19545 11.1295 5.19547 11.2464 5.26385 11.3295C5.33223 11.4125 5.44554 11.4347 5.67215 11.4791C5.92986 11.5295 6.21627 11.5825 6.52734 11.6356C7.96732 11.881 9.92307 12.1249 12.0013 12.1249C14.0796 12.1249 16.0353 11.881 17.4753 11.6356C17.786 11.5826 18.0721 11.5297 18.3296 11.4793C18.5562 11.4349 18.6695 11.4127 18.7379 11.3297C18.8063 11.2466 18.8063 11.1297 18.8063 10.8959L18.8064 9.88816C18.8064 8.33225 18.7932 7.08622 18.7122 6.14649C18.6913 5.90409 18.6809 5.7829 18.5948 5.70395C18.5088 5.625 18.3828 5.625 18.131 5.625Z',
  d15: 'M20.6153 15.1339C20.5775 15.128 20.5389 15.125 20.4995 15.125H18.7495C18.3353 15.125 17.9995 15.4608 17.9995 15.875C17.9995 16.2892 18.3353 16.625 18.7495 16.625H20.2912C20.4372 16.2045 20.5333 15.7508 20.5985 15.2652C20.6043 15.2219 20.6099 15.1781 20.6153 15.1339ZM3.7078 16.625H5.24952C5.66373 16.625 5.99952 16.2892 5.99952 15.875C5.99952 15.4608 5.66373 15.125 5.24952 15.125H3.49952C3.46016 15.125 3.42151 15.128 3.38379 15.1339C3.38916 15.1781 3.39476 15.2219 3.40057 15.2652C3.46576 15.7508 3.56181 16.2045 3.7078 16.625Z',
  d16: 'M20 18V2H4V18H20Z',
  d17: 'M7 18L5 22M17 18L19 22',
  d18: 'M4 15H6.5M17.5 15H20',
  d19: 'M4 12H20',
  d20: 'M4.10352 21.8555L6.10352 17.8555L7.89237 18.7499L5.89237 22.7499L4.10352 21.8555ZM18.1035 22.7499L16.1035 18.7499L17.8924 17.8555L19.8924 21.8555L18.1035 22.7499Z',
  d21: 'M3.25 2.25C3.25 1.83579 3.58579 1.5 4 1.5H20C20.4142 1.5 20.75 1.83579 20.75 2.25V18.25C20.75 18.6642 20.4142 19 20 19H4C3.58579 19 3.25 18.6642 3.25 18.25V2.25ZM4.75 3V17.5H19.25V3H4.75Z',
  d22: 'M4 1.25C3.44772 1.25 3 1.69772 3 2.25V18.25C3 18.8023 3.44772 19.25 4 19.25H20C20.5523 19.25 21 18.8023 21 18.25V2.25C21 1.69772 20.5523 1.25 20 1.25H4ZM19 11V3.25H5V11H19ZM5 16.125H7.5V14.125H5V16.125ZM16.5 16.125H19V14.125H16.5V16.125Z',
};

export const IconTrain01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="train-01-stroke-rounded IconTrain01StrokeRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTrain01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="train-01-duotone-rounded IconTrain01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTrain01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="train-01-twotone-rounded IconTrain01TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconTrain01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="train-01-solid-rounded IconTrain01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconTrain01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="train-01-bulk-rounded IconTrain01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrain01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="train-01-stroke-sharp IconTrain01StrokeSharp"
    >
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
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrain01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="train-01-solid-sharp IconTrain01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTrain01: TheIconSelfPack = {
  name: 'Train01',
  StrokeRounded: IconTrain01StrokeRounded,
  DuotoneRounded: IconTrain01DuotoneRounded,
  TwotoneRounded: IconTrain01TwotoneRounded,
  SolidRounded: IconTrain01SolidRounded,
  BulkRounded: IconTrain01BulkRounded,
  StrokeSharp: IconTrain01StrokeSharp,
  SolidSharp: IconTrain01SolidSharp,
};