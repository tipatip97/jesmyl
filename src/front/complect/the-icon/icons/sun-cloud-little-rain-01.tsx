import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 9.04499C17.485 9.04496 17.4925 9.04494 17.5 9.04494C19.9853 9.04494 22 11.0747 22 13.5786C22 15.3587 20.9817 16.7581 19.5 17.5M17.4776 9.04499C17.4924 8.87906 17.5 8.71102 17.5 8.54119C17.5 5.48088 15.0376 3 12 3C9.12324 3 6.76233 5.22516 6.52042 8.06032M17.4776 9.04499C17.3753 10.1879 16.9286 11.2308 16.2428 12.0674M6.52042 8.06032C3.98398 8.3035 2 10.4558 2 13.0749C2 14.9843 3.05449 16.6457 4.60877 17.5M6.52042 8.06032C6.67826 8.04519 6.83823 8.03745 7 8.03745C8.12582 8.03745 9.16474 8.41232 10.0005 9.04494',
  d2: 'M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9',
  d3: 'M12.0011 14.5V16M9 17.5V19M15 17.5V19M6.5 20.5V22M17.5 20.5V22M12 20.5V22',
  d4: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d5: 'M12.1261 13.375C12.6784 13.375 13.1261 13.8227 13.1261 14.375V15.875C13.1261 16.4273 12.6784 16.875 12.1261 16.875C11.5738 16.875 11.1261 16.4273 11.1261 15.875V14.375C11.1261 13.8227 11.5738 13.375 12.1261 13.375ZM9.125 16.375C9.67728 16.375 10.125 16.8227 10.125 17.375V18.875C10.125 19.4273 9.67728 19.875 9.125 19.875C8.57272 19.875 8.125 19.4273 8.125 18.875V17.375C8.125 16.8227 8.57272 16.375 9.125 16.375ZM15.125 16.375C15.6773 16.375 16.125 16.8227 16.125 17.375V18.875C16.125 19.4273 15.6773 19.875 15.125 19.875C14.5727 19.875 14.125 19.4273 14.125 18.875V17.375C14.125 16.8227 14.5727 16.375 15.125 16.375ZM6.625 19.375C7.17728 19.375 7.625 19.8227 7.625 20.375V21.875C7.625 22.4273 7.17728 22.875 6.625 22.875C6.07272 22.875 5.625 22.4273 5.625 21.875V20.375C5.625 19.8227 6.07272 19.375 6.625 19.375ZM12.125 19.375C12.6773 19.375 13.125 19.8227 13.125 20.375V21.875C13.125 22.4273 12.6773 22.875 12.125 22.875C11.5727 22.875 11.125 22.4273 11.125 21.875V20.375C11.125 19.8227 11.5727 19.375 12.125 19.375ZM17.625 19.375C18.1773 19.375 18.625 19.8227 18.625 20.375V21.875C18.625 22.4273 18.1773 22.875 17.625 22.875C17.0727 22.875 16.625 22.4273 16.625 21.875V20.375C16.625 19.8227 17.0727 19.375 17.625 19.375Z',
  d6: 'M6.06431 7.09283C6.01491 7.28884 5.9902 7.38684 5.93372 7.4447C5.87724 7.50255 5.77924 7.52976 5.58325 7.58419C3.15606 8.2582 1.375 10.4833 1.375 13.125C1.375 15.4236 2.72381 17.4073 4.67314 18.3275C4.81498 18.3945 4.8859 18.428 4.96259 18.4234C5.03928 18.4187 5.12458 18.365 5.29519 18.2577C5.5463 18.0996 5.8275 17.985 6.12825 17.9244C6.34457 17.8808 6.45273 17.859 6.50804 17.8164C6.54976 17.7842 6.57093 17.7584 6.59418 17.7111C6.625 17.6485 6.625 17.5573 6.625 17.375C6.625 15.9943 7.74429 14.875 9.125 14.875C9.28862 14.875 9.37043 14.875 9.41289 14.8622C9.52188 14.8292 9.58029 14.7708 9.61324 14.6618C9.62607 14.6194 9.62607 14.5532 9.62607 14.4208V14.375C9.62607 12.9943 10.7454 11.875 12.1261 11.875C13.5068 11.875 14.6261 12.9943 14.6261 14.375V14.4226C14.6261 14.5534 14.6261 14.6188 14.6386 14.6608C14.6714 14.7707 14.7304 14.8297 14.8403 14.8625C14.8823 14.875 14.9632 14.875 15.125 14.875C16.5057 14.875 17.625 15.9943 17.625 17.375C17.625 17.5573 17.625 17.6485 17.6558 17.7111C17.6791 17.7584 17.7002 17.7842 17.742 17.8164C17.7973 17.859 17.9054 17.8808 18.1217 17.9244C18.4737 17.9953 18.7989 18.1402 19.0805 18.3422C19.2487 18.4628 19.3328 18.5231 19.4114 18.5315C19.4901 18.54 19.5635 18.5082 19.7103 18.4445C21.5724 17.6378 22.875 15.7835 22.875 13.625C22.875 11.1535 21.1672 9.08089 18.8673 8.52286C18.6239 8.4638 18.5022 8.43427 18.4397 8.36328C18.3772 8.2923 18.3635 8.16961 18.3362 7.92424C17.9878 4.80231 15.3399 2.375 12.125 2.375C9.20171 2.375 6.74772 4.38153 6.06431 7.09283Z',
  d7: 'M3.125 5.98179C3.125 4.40086 4.40141 3.125 5.96888 3.125C6.74917 3.125 7.45702 3.44017 7.97224 3.95404C8.47713 3.5048 9.05535 3.1362 9.68671 2.86845C8.79982 1.80488 7.46405 1.125 5.96888 1.125C3.29052 1.125 1.125 3.30262 1.125 5.98179C1.125 7.37511 1.71096 8.63195 2.64756 9.51703C3.07158 8.99154 3.58625 8.54223 4.16783 8.19283C3.53021 7.66805 3.125 6.8729 3.125 5.98179Z',
  d8: 'M11.0011 16.25V13.75H13.0011V16.25H11.0011ZM8 19.25V16.75H10V19.25H8ZM14 19.25V16.75H16V19.25H14ZM5.5 22.25V19.75H7.5V22.25H5.5ZM11 22.25V19.75H13V22.25H11ZM16.5 22.25V19.75H18.5V22.25H16.5Z',
  d9: 'M1.25 6.35826C1.25 7.67454 1.80115 8.86245 2.68308 9.70164C1.79103 10.7146 1.25 12.044 1.25 13.5C1.25 15.4733 2.24404 17.2145 3.75869 18.25H6.5V15.25H9.50107V12.25H14.5011V15.25H17.5V18.25H20.5828C21.8961 17.2958 22.75 15.7476 22.75 14C22.75 11.3541 20.7927 9.16534 18.2469 8.80273C18.1428 5.44224 15.3858 2.75 12 2.75C11.0435 2.75 10.1372 2.96484 9.32672 3.3489C8.48541 2.37157 7.23857 1.75 5.84601 1.75C3.30471 1.75 1.25 3.81619 1.25 6.35826ZM5.84601 3.64766C4.35875 3.64766 3.14766 4.85823 3.14766 6.35826C3.14766 7.22264 3.54949 7.99188 4.17797 8.48912C4.69233 8.19886 5.25587 7.98547 5.853 7.86454C6.1002 6.51824 6.77854 5.32293 7.7396 4.42707C7.25136 3.94376 6.58272 3.64766 5.84601 3.64766Z',
};

export const IconSunCloudLittleRain01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-01-stroke-rounded IconSunCloudLittleRain01StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-01-duotone-rounded IconSunCloudLittleRain01DuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-01-twotone-rounded IconSunCloudLittleRain01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-01-solid-rounded IconSunCloudLittleRain01SolidRounded"
    >
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-01-bulk-rounded IconSunCloudLittleRain01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-01-stroke-sharp IconSunCloudLittleRain01StrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudLittleRain01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-little-rain-01-solid-sharp IconSunCloudLittleRain01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudLittleRain01: TheIconSelfPack = {
  name: 'SunCloudLittleRain01',
  StrokeRounded: IconSunCloudLittleRain01StrokeRounded,
  DuotoneRounded: IconSunCloudLittleRain01DuotoneRounded,
  TwotoneRounded: IconSunCloudLittleRain01TwotoneRounded,
  SolidRounded: IconSunCloudLittleRain01SolidRounded,
  BulkRounded: IconSunCloudLittleRain01BulkRounded,
  StrokeSharp: IconSunCloudLittleRain01StrokeSharp,
  SolidSharp: IconSunCloudLittleRain01SolidSharp,
};