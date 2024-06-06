import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 8.7803L17.5 8.78025C19.9853 8.78025 22 10.7212 22 13.1154C22 14.8176 20.9817 16.2906 19.5 17M17.4776 8.7803C17.4924 8.62164 17.5 8.46095 17.5 8.29856C17.5 5.37225 15.0376 3 12 3C9.12324 3 6.76233 5.12773 6.52042 7.83875M17.4776 8.7803C17.3753 9.8732 16.9286 10.8704 16.2428 11.6704M6.52042 7.83875C3.98398 8.07128 2 10.1293 2 12.6338C2 14.566 3.18102 16.2326 4.88559 17M6.52042 7.83875C6.67826 7.82428 6.83823 7.81688 7 7.81688C8.12582 7.81688 9.16474 8.17534 10.0005 8.78025',
  d2: 'M11.9978 16.9974L12.0022 17.0052M15.9955 15L16 15.0078M8 15L8.00449 15.0078M15.9955 18.9948L16 19.0026M8 18.9948L8.00449 19.0026M11.9978 20.9922L12.0022 21',
  d3: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d4: 'M17 14.875C17 15.4273 16.5523 15.875 16 15.875C15.4477 15.875 15 15.4273 15 14.875C15 14.3227 15.4477 13.875 16 13.875C16.5523 13.875 17 14.3227 17 14.875Z',
  d5: 'M9 14.875C9 15.4273 8.55228 15.875 8 15.875C7.44772 15.875 7 15.4273 7 14.875C7 14.3227 7.44772 13.875 8 13.875C8.55228 13.875 9 14.3227 9 14.875Z',
  d6: 'M13 16.875C13 17.4273 12.5523 17.875 12 17.875C11.4477 17.875 11 17.4273 11 16.875C11 16.3227 11.4477 15.875 12 15.875C12.5523 15.875 13 16.3227 13 16.875Z',
  d7: 'M13 20.875C13 21.4273 12.5523 21.875 12 21.875C11.4477 21.875 11 21.4273 11 20.875C11 20.3227 11.4477 19.875 12 19.875C12.5523 19.875 13 20.3227 13 20.875Z',
  d8: 'M9 18.875C9 19.4273 8.55228 19.875 8 19.875C7.44772 19.875 7 19.4273 7 18.875C7 18.3227 7.44772 17.875 8 17.875C8.55228 17.875 9 18.3227 9 18.875Z',
  d9: 'M17 18.875C17 19.4273 16.5523 19.875 16 19.875C15.4477 19.875 15 19.4273 15 18.875C15 18.3227 15.4477 17.875 16 17.875C16.5523 17.875 17 18.3227 17 18.875Z',
  d10: 'M5.93931 6.84283C5.88991 7.03884 5.8652 7.13684 5.80872 7.1947C5.75224 7.25255 5.65424 7.27976 5.45825 7.33419C3.03106 8.0082 1.25 10.2333 1.25 12.875C1.25 15.3167 2.77196 17.403 4.91898 18.2369C5.16758 18.3334 5.29188 18.3817 5.40182 18.3376C5.51176 18.2934 5.58571 18.1351 5.7336 17.8184C5.79441 17.6882 5.86611 17.5641 5.94753 17.4473C6.16963 17.1286 6.28068 16.9692 6.28068 16.875C6.28068 16.7808 6.16963 16.6214 5.94752 16.3027C5.66542 15.898 5.5 15.4058 5.5 14.875C5.5 13.4943 6.61929 12.375 8 12.375C8.96378 12.375 9.80017 12.9204 10.2174 13.7193C10.4735 14.2096 10.6015 14.4548 10.6883 14.4982C10.7751 14.5416 11.048 14.497 11.5938 14.4078C11.726 14.3862 11.8617 14.375 12 14.375C12.1383 14.375 12.274 14.3862 12.4062 14.4078C12.952 14.497 13.2249 14.5416 13.3117 14.4982C13.3985 14.4548 13.5265 14.2096 13.7826 13.7193C14.1998 12.9204 15.0362 12.375 16 12.375C17.3807 12.375 18.5 13.4943 18.5 14.875C18.5 15.4058 18.3346 15.898 18.0525 16.3027C17.8304 16.6214 17.7193 16.7808 17.7193 16.875C17.7193 16.9692 17.8304 17.1286 18.0525 17.4473C18.1561 17.596 18.244 17.7565 18.3137 17.9263C18.4429 18.241 18.5074 18.3983 18.6135 18.4478C18.7196 18.4974 18.8427 18.4584 19.0888 18.3803C21.2117 17.7071 22.75 15.7207 22.75 13.375C22.75 10.9035 21.0422 8.83089 18.7423 8.27286C18.4989 8.2138 18.3772 8.18427 18.3147 8.11328C18.2522 8.0423 18.2385 7.91961 18.2112 7.67424C17.8628 4.55231 15.2149 2.125 12 2.125C9.07671 2.125 6.62272 4.13153 5.93931 6.84283Z',
  d11: 'M17 14.751C17 15.3033 16.5523 15.751 16 15.751C15.4477 15.751 15 15.3033 15 14.751C15 14.1987 15.4477 13.751 16 13.751C16.5523 13.751 17 14.1987 17 14.751Z',
  d12: 'M9 14.751C9 15.3033 8.55228 15.751 8 15.751C7.44772 15.751 7 15.3033 7 14.751C7 14.1987 7.44772 13.751 8 13.751C8.55228 13.751 9 14.1987 9 14.751Z',
  d13: 'M9 18.751C9 19.3033 8.55228 19.751 8 19.751C7.44772 19.751 7 19.3033 7 18.751C7 18.1987 7.44772 17.751 8 17.751C8.55228 17.751 9 18.1987 9 18.751Z',
  d14: 'M13 16.751C13 17.3033 12.5523 17.751 12 17.751C11.4477 17.751 11 17.3033 11 16.751C11 16.1987 11.4477 15.751 12 15.751C12.5523 15.751 13 16.1987 13 16.751Z',
  d15: 'M17 18.751C17 19.3033 16.5523 19.751 16 19.751C15.4477 19.751 15 19.3033 15 18.751C15 18.1987 15.4477 17.751 16 17.751C16.5523 17.751 17 18.1987 17 18.751Z',
  d16: 'M13 20.751C13 21.3033 12.5523 21.751 12 21.751C11.4477 21.751 11 21.3033 11 20.751C11 20.1987 11.4477 19.751 12 19.751C12.5523 19.751 13 20.1987 13 20.751Z',
  d17: 'M5.853 7.36454C3.22664 7.89643 1.25 10.217 1.25 13C1.25 15.6594 3.05546 17.8972 5.50754 18.5544C5.5646 17.8171 5.94153 17.1694 6.49976 16.75C5.89267 16.2939 5.5 15.5678 5.5 14.75C5.5 13.3693 6.61929 12.25 8 12.25C9.38065 12.25 10.4999 13.3692 10.5 14.7498C10.9178 14.436 11.4372 14.25 12 14.25C12.5628 14.25 13.0822 14.436 13.5 14.7498C13.5001 13.3692 14.6193 12.25 16 12.25C17.3807 12.25 18.5 13.3693 18.5 14.75C18.5 15.5678 18.1073 16.2939 17.5002 16.75C18.0838 17.1884 18.4692 17.8763 18.4982 18.6552C20.9203 18.189 22.75 16.0582 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C8.93585 2.25 6.38731 4.45456 5.853 7.36454Z',
};

export const IconCloudSnowStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-snow-stroke-rounded IconCloudSnowStrokeRounded"
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

export const IconCloudSnowDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-snow-duotone-rounded IconCloudSnowDuotoneRounded"
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

export const IconCloudSnowTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-snow-twotone-rounded IconCloudSnowTwotoneRounded"
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

export const IconCloudSnowSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-snow-solid-rounded IconCloudSnowSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconCloudSnowBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-snow-bulk-rounded IconCloudSnowBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudSnowStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-snow-stroke-sharp IconCloudSnowStrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudSnowSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-snow-solid-sharp IconCloudSnowSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfCloudSnow: TheIconSelfPack = {
  name: 'CloudSnow',
  StrokeRounded: IconCloudSnowStrokeRounded,
  DuotoneRounded: IconCloudSnowDuotoneRounded,
  TwotoneRounded: IconCloudSnowTwotoneRounded,
  SolidRounded: IconCloudSnowSolidRounded,
  BulkRounded: IconCloudSnowBulkRounded,
  StrokeSharp: IconCloudSnowStrokeSharp,
  SolidSharp: IconCloudSnowSolidSharp,
};