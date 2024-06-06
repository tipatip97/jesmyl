import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
  d2: 'M17.4776 9.00915C17.485 9.00911 17.4925 9.00909 17.5 9.00909C19.9853 9.00909 22 11.0269 22 13.5159C22 15.4782 20.7478 16.8813 19 17.5M17.4776 9.00915C17.4924 8.8442 17.5 8.67716 17.5 8.50834C17.5 5.46617 15.0376 3 12 3C9.12324 3 6.76233 5.21197 6.52042 8.03032M17.4776 9.00915C17.3753 10.1453 16.9286 11.182 16.2428 12.0136M6.52042 8.03032C3.98398 8.27205 2 10.4116 2 13.0152C2 15.0686 3.2341 16.7103 5 17.5M6.52042 8.03032C6.67826 8.01527 6.83823 8.00758 7 8.00758C8.12582 8.00758 9.16474 8.38023 10.0005 9.00909',
  d3: 'M11.9978 17.9974L12.0022 18.0052M15.9955 16L16 16.0078M8 16L8.00449 16.0078M15.9955 19.9948L16 20.0026M8 19.9948L8.00449 20.0026M11.9978 21.9922L12.0022 22',
  d4: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d5: 'M17.125 16C17.125 16.5523 16.6773 17 16.125 17C15.5727 17 15.125 16.5523 15.125 16C15.125 15.4477 15.5727 15 16.125 15C16.6773 15 17.125 15.4477 17.125 16Z',
  d6: 'M9.125 16C9.125 16.5523 8.67728 17 8.125 17C7.57272 17 7.125 16.5523 7.125 16C7.125 15.4477 7.57272 15 8.125 15C8.67728 15 9.125 15.4477 9.125 16Z',
  d7: 'M9.125 20C9.125 20.5523 8.67728 21 8.125 21C7.57272 21 7.125 20.5523 7.125 20C7.125 19.4477 7.57272 19 8.125 19C8.67728 19 9.125 19.4477 9.125 20Z',
  d8: 'M13.125 18C13.125 18.5523 12.6773 19 12.125 19C11.5727 19 11.125 18.5523 11.125 18C11.125 17.4477 11.5727 17 12.125 17C12.6773 17 13.125 17.4477 13.125 18Z',
  d9: 'M17.125 20C17.125 20.5523 16.6773 21 16.125 21C15.5727 21 15.125 20.5523 15.125 20C15.125 19.4477 15.5727 19 16.125 19C16.6773 19 17.125 19.4477 17.125 20Z',
  d10: 'M13.125 22C13.125 22.5523 12.6773 23 12.125 23C11.5727 23 11.125 22.5523 11.125 22C11.125 21.4477 11.5727 21 12.125 21C12.6773 21 13.125 21.4477 13.125 22Z',
  d11: 'M6.06431 6.96783C6.01491 7.16384 5.9902 7.26184 5.93372 7.3197C5.87724 7.37755 5.77924 7.40476 5.58325 7.45919C3.15606 8.1332 1.375 10.3583 1.375 13C1.375 15.6955 3.22971 17.9577 5.73255 18.5802C5.81426 18.6006 5.85511 18.6107 5.895 18.6099C5.95832 18.6086 6.00974 18.5917 6.06153 18.5553C6.09414 18.5323 6.12962 18.4896 6.20057 18.4041C6.3392 18.2371 6.40852 18.1536 6.42622 18.1075C6.46201 18.0142 6.46201 17.986 6.42624 17.8926C6.40854 17.8465 6.33914 17.7629 6.20033 17.5956C5.84102 17.1627 5.625 16.6066 5.625 16C5.625 14.6193 6.74429 13.5 8.125 13.5C9.08878 13.5 9.92517 14.0454 10.3424 14.8443C10.5985 15.3346 10.7265 15.5798 10.8133 15.6232C10.9001 15.6666 11.173 15.622 11.7188 15.5328C11.851 15.5112 11.9867 15.5 12.125 15.5C12.2633 15.5 12.399 15.5112 12.5312 15.5328C13.077 15.622 13.3499 15.6666 13.4367 15.6232C13.5235 15.5798 13.6515 15.3346 13.9076 14.8443C14.3248 14.0454 15.1612 13.5 16.125 13.5C17.5057 13.5 18.625 14.6193 18.625 16C18.625 16.5847 18.4243 17.1225 18.088 17.5483C17.9218 17.7587 17.8387 17.864 17.8229 17.9255C17.8054 17.9936 17.8054 18.0066 17.8229 18.0747C17.8387 18.1362 17.9217 18.2412 18.0876 18.4513C18.1733 18.5597 18.2162 18.6139 18.2595 18.6413C18.2961 18.6645 18.3302 18.6773 18.3731 18.6841C18.4236 18.6921 18.4757 18.6825 18.5797 18.6634C21.0234 18.2144 22.875 16.0735 22.875 13.5C22.875 11.0285 21.1672 8.95589 18.8673 8.39786C18.6239 8.3388 18.5022 8.30927 18.4397 8.23828C18.3772 8.1673 18.3635 8.04461 18.3362 7.79924C17.9878 4.67731 15.3399 2.25 12.125 2.25C9.20171 2.25 6.74772 4.25653 6.06431 6.96783Z',
  d12: 'M3.125 5.85679C3.125 4.27586 4.40141 3 5.96888 3C6.74917 3 7.45702 3.31517 7.97224 3.82904C8.47713 3.3798 9.05535 3.0112 9.68671 2.74345C8.79982 1.67988 7.46405 1 5.96888 1C3.29052 1 1.125 3.17762 1.125 5.85679C1.125 7.25011 1.71096 8.50695 2.64756 9.39203C3.07158 8.86654 3.58625 8.41723 4.16783 8.06783C3.53021 7.54305 3.125 6.7479 3.125 5.85679Z',
  d13: 'M17 15.251C17 15.8033 16.5523 16.251 16 16.251C15.4477 16.251 15 15.8033 15 15.251C15 14.6987 15.4477 14.251 16 14.251C16.5523 14.251 17 14.6987 17 15.251Z',
  d14: 'M9 15.251C9 15.8033 8.55228 16.251 8 16.251C7.44772 16.251 7 15.8033 7 15.251C7 14.6987 7.44772 14.251 8 14.251C8.55228 14.251 9 14.6987 9 15.251Z',
  d15: 'M9 19.251C9 19.8033 8.55228 20.251 8 20.251C7.44772 20.251 7 19.8033 7 19.251C7 18.6987 7.44772 18.251 8 18.251C8.55228 18.251 9 18.6987 9 19.251Z',
  d16: 'M13 17.251C13 17.8033 12.5523 18.251 12 18.251C11.4477 18.251 11 17.8033 11 17.251C11 16.6987 11.4477 16.251 12 16.251C12.5523 16.251 13 16.6987 13 17.251Z',
  d17: 'M17 19.251C17 19.8033 16.5523 20.251 16 20.251C15.4477 20.251 15 19.8033 15 19.251C15 18.6987 15.4477 18.251 16 18.251C16.5523 18.251 17 18.6987 17 19.251Z',
  d18: 'M13 21.251C13 21.8033 12.5523 22.251 12 22.251C11.4477 22.251 11 21.8033 11 21.251C11 20.6987 11.4477 20.251 12 20.251C12.5523 20.251 13 20.6987 13 21.251Z',
  d19: 'M2.68308 9.70164C1.80115 8.86245 1.25 7.67454 1.25 6.35826C1.25 3.81619 3.30471 1.75 5.84601 1.75C7.23857 1.75 8.48541 2.37157 9.32672 3.3489C10.1372 2.96484 11.0435 2.75 12 2.75C15.3858 2.75 18.1428 5.44224 18.2469 8.80273C20.7927 9.16534 22.75 11.3541 22.75 14C22.75 16.5582 20.9203 18.689 18.4982 19.1552C18.4692 18.3763 18.0838 17.6884 17.5002 17.25C18.1073 16.7939 18.5 16.0678 18.5 15.25C18.5 13.8693 17.3807 12.75 16 12.75C14.6193 12.75 13.5001 13.8692 13.5 15.2498C13.0822 14.936 12.5628 14.75 12 14.75C11.4372 14.75 10.9178 14.936 10.5 15.2498C10.4999 13.8692 9.38065 12.75 8 12.75C6.61929 12.75 5.5 13.8693 5.5 15.25C5.5 16.0678 5.89267 16.7939 6.49976 17.25C5.94153 17.6694 5.5646 18.3171 5.50754 19.0544C3.05546 18.3972 1.25 16.1594 1.25 13.5C1.25 12.044 1.79103 10.7146 2.68308 9.70164ZM3.14766 6.35826C3.14766 4.85823 4.35875 3.64766 5.84601 3.64766C6.58272 3.64766 7.25136 3.94376 7.7396 4.42707C6.77854 5.32293 6.1002 6.51824 5.853 7.86454C5.25587 7.98547 4.69233 8.19886 4.17797 8.48912C3.54949 7.99188 3.14766 7.22264 3.14766 6.35826Z',
};

export const IconSunCloudSnow01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-snow-01-stroke-rounded IconSunCloudSnow01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudSnow01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-snow-01-duotone-rounded IconSunCloudSnow01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconSunCloudSnow01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-snow-01-twotone-rounded IconSunCloudSnow01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudSnow01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-snow-01-solid-rounded IconSunCloudSnow01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSunCloudSnow01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-snow-01-bulk-rounded IconSunCloudSnow01BulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSunCloudSnow01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-snow-01-stroke-sharp IconSunCloudSnow01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudSnow01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-snow-01-solid-sharp IconSunCloudSnow01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfSunCloudSnow01: TheIconSelfPack = {
  name: 'SunCloudSnow01',
  StrokeRounded: IconSunCloudSnow01StrokeRounded,
  DuotoneRounded: IconSunCloudSnow01DuotoneRounded,
  TwotoneRounded: IconSunCloudSnow01TwotoneRounded,
  SolidRounded: IconSunCloudSnow01SolidRounded,
  BulkRounded: IconSunCloudSnow01BulkRounded,
  StrokeSharp: IconSunCloudSnow01StrokeSharp,
  SolidSharp: IconSunCloudSnow01SolidSharp,
};