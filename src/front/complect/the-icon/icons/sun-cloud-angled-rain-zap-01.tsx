import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
  d2: 'M17.4776 8.69731C17.485 8.69727 17.4925 8.69726 17.5 8.69726C19.9853 8.69726 22 10.6103 22 12.9702C22 14.8307 20.7478 16.4134 19 17M17.4776 8.69731C17.4924 8.54092 17.5 8.38254 17.5 8.22248C17.5 5.33819 15.0376 3 12 3C9.12324 3 6.76233 5.09718 6.52042 7.76927M17.4776 8.69731C17.3753 9.77451 16.9286 10.7574 16.2428 11.5459M6.52042 7.76927C3.98398 7.99846 2 10.0269 2 12.4954C2 14.0487 2.78555 15.4278 4 16.2939M6.52042 7.76927C6.67826 7.75501 6.83823 7.74771 7 7.74771C8.12582 7.74771 9.16474 8.10103 10.0005 8.69726',
  d3: 'M9.0784 13.5L7.30434 16.1838C7.06684 16.5431 6.94808 16.7227 7.02165 16.8614C7.09522 17 7.30931 17 7.73747 17H9.26253C9.69069 17 9.90478 17 9.97835 17.1386C10.0519 17.2773 9.93316 17.4569 9.69566 17.8162L7.9216 20.5',
  d4: 'M16 18.5L15 20.5',
  d5: 'M13 18.5L12 20.5',
  d6: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d7: 'M9.75542 13.2928C10.2161 13.5974 10.3427 14.2178 10.0382 14.6785L8.75014 16.627L9.42826 16.627C9.60405 16.6268 9.83382 16.6266 10.0264 16.6553C10.2373 16.6867 10.7217 16.7966 10.9873 17.2969C11.251 17.7939 11.0743 18.2548 10.9848 18.4458C10.9023 18.622 10.7755 18.8135 10.6776 18.9612L8.88139 21.6785C8.57684 22.1392 7.95646 22.2658 7.49574 21.9613C7.03501 21.6567 6.90841 21.0363 7.21296 20.5756L8.50102 18.627L7.82289 18.6271C7.64711 18.6273 7.41734 18.6275 7.22471 18.5988C7.01382 18.5673 6.52941 18.4575 6.2639 17.9572C6.00017 17.4602 6.17687 16.9992 6.26631 16.8083C6.34881 16.6321 6.47568 16.4406 6.57354 16.2929L8.3476 13.6091C8.65215 13.1484 9.2947 12.9883 9.75542 13.2928Z',
  d8: 'M13.5728 18.2326C14.0668 18.4796 14.267 19.0803 14.02 19.5743L13.02 21.5743C12.773 22.0682 12.1723 22.2685 11.6784 22.0215C11.1844 21.7745 10.9842 21.1738 11.2312 20.6798L12.2312 18.6798C12.4781 18.1858 13.0788 17.9856 13.5728 18.2326Z',
  d9: 'M16.5728 18.2326C17.0668 18.4796 17.267 19.0803 17.02 19.5743L16.02 21.5743C15.773 22.0682 15.1723 22.2685 14.6784 22.0215C14.1844 21.7745 13.9842 21.1738 14.2312 20.6798L15.2312 18.6798C15.4781 18.1858 16.0788 17.9856 16.5728 18.2326Z',
  d10: 'M6.06431 7.84283C6.01491 8.03884 5.9902 8.13684 5.93372 8.1947C5.87724 8.25255 5.77924 8.27976 5.58325 8.33419C3.15606 9.0082 1.375 11.2333 1.375 13.875C1.375 16.1593 2.70707 18.1325 4.63681 19.0602C4.73831 19.109 4.78906 19.1334 4.79732 19.1365C4.97769 19.2044 5.12701 19.0491 5.052 18.8715C5.04857 18.8634 5.0123 18.7951 4.93978 18.6584C4.3326 17.5142 4.76519 16.4768 4.90876 16.1702C5.0396 15.8908 5.21997 15.6191 5.30973 15.484L7.09716 12.78C7.8159 11.6928 9.36885 11.2367 10.5835 12.0396C11.7353 12.801 12.0518 14.3519 11.2904 15.5038C11.284 15.5133 11.2871 15.5263 11.2971 15.532C11.6597 15.7422 12.0372 16.072 12.3131 16.5919C12.3567 16.674 12.4515 16.7162 12.5419 16.6944C13.0948 16.5611 13.6959 16.6148 14.2445 16.8891C14.4517 16.9927 14.5552 17.0445 14.626 17.0445C14.6968 17.0445 14.8005 16.9927 15.008 16.8891C15.6875 16.5499 16.5128 16.5233 17.2445 16.8891C17.9776 17.2556 18.4519 17.9337 18.5871 18.6827C18.6666 19.1227 18.7063 19.3427 18.8273 19.4122C18.9482 19.4817 19.1053 19.4246 19.4195 19.3103C21.4353 18.5772 22.875 16.6442 22.875 14.375C22.875 11.9035 21.1672 9.83089 18.8673 9.27286C18.6239 9.2138 18.5022 9.18427 18.4397 9.11328C18.3772 9.0423 18.3635 8.91961 18.3362 8.67424C17.9878 5.55231 15.3399 3.125 12.125 3.125C9.20171 3.125 6.74772 5.13153 6.06431 7.84283Z',
  d11: 'M3.125 6.73179C3.125 5.15086 4.40141 3.875 5.96888 3.875C6.74917 3.875 7.45702 4.19017 7.97224 4.70404C8.47713 4.2548 9.05535 3.8862 9.68671 3.61845C8.79982 2.55488 7.46405 1.875 5.96888 1.875C3.29052 1.875 1.125 4.05262 1.125 6.73179C1.125 8.12511 1.71096 9.38195 2.64756 10.267C3.07158 9.74154 3.58625 9.29223 4.16783 8.94283C3.53021 8.41805 3.125 7.6229 3.125 6.73179Z',
  d12: 'M9.07875 13.5L7 17H10.0003L7.92195 20.5',
  d13: 'M16.5 17.5L15 20.5',
  d14: 'M13.5 17.5L12 20.5',
  d15: 'M8.21815 14.2285L9.93773 15.2498L8.7562 17.2392H11.7559L8.781 22.2497L7.06128 21.2286L8.24249 19.2392H5.24219L8.21815 14.2285Z',
  d16: 'M14.1055 21.292L15.6055 18.292L17.3943 19.1864L15.8943 22.1864L14.1055 21.292Z',
  d17: 'M12.6055 18.292L11.1055 21.292L12.8943 22.1864L14.3943 19.1864L12.6055 18.292Z',
  d18: 'M2.68308 9.70164C1.80115 8.86245 1.25 7.67454 1.25 6.35826C1.25 3.81619 3.30471 1.75 5.84601 1.75C7.23857 1.75 8.48541 2.37157 9.32672 3.3489C10.1372 2.96484 11.0435 2.75 12 2.75C15.3858 2.75 18.1428 5.44224 18.2469 8.80273C20.7927 9.16534 22.75 11.3541 22.75 14C22.75 16.3139 21.2531 18.2782 19.1748 18.9772L19.4056 18.5156L14.9334 16.2795L14.3334 17.4795L13.5801 17.1029L14.3898 15.7392H11.3905L11.9922 14.7261L7.69324 12.1729L3.99341 18.4023C2.34756 17.3907 1.25 15.5735 1.25 13.5C1.25 12.044 1.79103 10.7146 2.68308 9.70164ZM3.14766 6.35826C3.14766 4.85823 4.35875 3.64766 5.84601 3.64766C6.58272 3.64766 7.25136 3.94376 7.7396 4.42707C6.77854 5.32293 6.1002 6.51824 5.853 7.86454C5.25587 7.98547 4.69233 8.19886 4.17797 8.48912C3.54949 7.99188 3.14766 7.22264 3.14766 6.35826Z',
};

export const IconSunCloudAngledRainZap01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-01-stroke-rounded IconSunCloudAngledRainZap01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-01-duotone-rounded IconSunCloudAngledRainZap01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-01-twotone-rounded IconSunCloudAngledRainZap01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-01-solid-rounded IconSunCloudAngledRainZap01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-01-bulk-rounded IconSunCloudAngledRainZap01BulkRounded"
    >
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-01-stroke-sharp IconSunCloudAngledRainZap01StrokeSharp"
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
        d={d.d12} 
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
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudAngledRainZap01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-angled-rain-zap-01-solid-sharp IconSunCloudAngledRainZap01SolidSharp"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudAngledRainZap01: TheIconSelfPack = {
  name: 'SunCloudAngledRainZap01',
  StrokeRounded: IconSunCloudAngledRainZap01StrokeRounded,
  DuotoneRounded: IconSunCloudAngledRainZap01DuotoneRounded,
  TwotoneRounded: IconSunCloudAngledRainZap01TwotoneRounded,
  SolidRounded: IconSunCloudAngledRainZap01SolidRounded,
  BulkRounded: IconSunCloudAngledRainZap01BulkRounded,
  StrokeSharp: IconSunCloudAngledRainZap01StrokeSharp,
  SolidSharp: IconSunCloudAngledRainZap01SolidSharp,
};