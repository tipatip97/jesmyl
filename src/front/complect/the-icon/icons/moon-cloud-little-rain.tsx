import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.9972 14.5V16M8.99609 17.5V19M14.9961 17.5V19M6.49609 20.5V22M17.4961 20.5V22M11.9961 20.5V22',
  d2: 'M17.4776 11.045C17.485 11.045 17.4925 11.0449 17.5 11.0449C19.9853 11.0449 22 13.0747 22 15.5786C22 17.1505 21 18.5 20 19M17.4776 11.045C17.4924 10.8791 17.5 10.711 17.5 10.5412C17.5 7.48088 15.0376 5 12 5C9.12324 5 6.76233 7.22516 6.52042 10.0603M17.4776 11.045C17.3753 12.1879 16.9286 13.2308 16.2428 14.0674M6.52042 10.0603C3.98398 10.3035 2 12.4558 2 15.0749C2 16.723 2.78555 18.081 4 19M6.52042 10.0603C6.67826 10.0452 6.83823 10.0374 7 10.0374C8.12582 10.0374 9.16474 10.4123 10.0005 11.0449',
  d3: 'M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664',
  d4: 'M17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.7614 4.23858 20 7 20H17.5C19.9853 20 22 17.9853 22 15.5C22 13.0147 19.9853 11 17.5 11L17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5Z',
  d5: 'M12.1222 13.375C12.6745 13.375 13.1222 13.8227 13.1222 14.375V15.875C13.1222 16.4273 12.6745 16.875 12.1222 16.875C11.5699 16.875 11.1222 16.4273 11.1222 15.875V14.375C11.1222 13.8227 11.5699 13.375 12.1222 13.375ZM9.12109 16.375C9.67338 16.375 10.1211 16.8227 10.1211 17.375V18.875C10.1211 19.4273 9.67338 19.875 9.12109 19.875C8.56881 19.875 8.12109 19.4273 8.12109 18.875V17.375C8.12109 16.8227 8.56881 16.375 9.12109 16.375ZM15.1211 16.375C15.6734 16.375 16.1211 16.8227 16.1211 17.375V18.875C16.1211 19.4273 15.6734 19.875 15.1211 19.875C14.5688 19.875 14.1211 19.4273 14.1211 18.875V17.375C14.1211 16.8227 14.5688 16.375 15.1211 16.375ZM6.62109 19.375C7.17338 19.375 7.62109 19.8227 7.62109 20.375V21.875C7.62109 22.4273 7.17338 22.875 6.62109 22.875C6.06881 22.875 5.62109 22.4273 5.62109 21.875V20.375C5.62109 19.8227 6.06881 19.375 6.62109 19.375ZM12.1211 19.375C12.6734 19.375 13.1211 19.8227 13.1211 20.375V21.875C13.1211 22.4273 12.6734 22.875 12.1211 22.875C11.5688 22.875 11.1211 22.4273 11.1211 21.875V20.375C11.1211 19.8227 11.5688 19.375 12.1211 19.375ZM17.6211 19.375C18.1734 19.375 18.6211 19.8227 18.6211 20.375V21.875C18.6211 22.4273 18.1734 22.875 17.6211 22.875C17.0688 22.875 16.6211 22.4273 16.6211 21.875V20.375C16.6211 19.8227 17.0688 19.375 17.6211 19.375Z',
  d6: 'M6.06431 9.09283C6.01491 9.28884 5.9902 9.38684 5.93372 9.4447C5.87724 9.50255 5.77924 9.52976 5.58325 9.58419C3.15606 10.2582 1.375 12.4833 1.375 15.125C1.375 16.8792 2.16055 18.45 3.39906 19.5046C3.66956 19.735 3.80481 19.8502 3.94501 19.8244C4.08521 19.7986 4.19944 19.5905 4.42789 19.1741C4.77629 18.5392 5.39238 18.072 6.12424 17.9244C6.34063 17.8808 6.44883 17.8589 6.50414 17.8164C6.54586 17.7842 6.56702 17.7584 6.59027 17.7111C6.62109 17.6485 6.62109 17.5573 6.62109 17.375C6.62109 15.9943 7.74038 14.875 9.12109 14.875C9.28471 14.875 9.36652 14.875 9.40898 14.8622C9.51798 14.8292 9.57638 14.7708 9.60933 14.6618C9.62217 14.6194 9.62217 14.5532 9.62217 14.4208V14.375C9.62217 12.9943 10.7415 11.875 12.1222 11.875C13.5029 11.875 14.6222 12.9943 14.6222 14.375V14.4226C14.6222 14.5534 14.6222 14.6188 14.6347 14.6608C14.6675 14.7707 14.7265 14.8297 14.8364 14.8625C14.8784 14.875 14.9593 14.875 15.1211 14.875C16.5018 14.875 17.6211 15.9943 17.6211 17.375C17.6211 17.5573 17.6211 17.6485 17.6519 17.7111C17.6752 17.7584 17.6963 17.7842 17.7381 17.8164C17.7934 17.859 17.9015 17.8808 18.1179 17.9244C18.908 18.0837 19.5631 18.6155 19.8923 19.3287C20.0973 19.7729 20.1998 19.995 20.3422 20.0285C20.4846 20.062 20.626 19.9485 20.909 19.7213C22.1076 18.7591 22.875 17.2817 22.875 15.625C22.875 13.1535 21.1672 11.0809 18.8673 10.5229C18.6239 10.4638 18.5022 10.4343 18.4397 10.3633C18.3772 10.2923 18.3635 10.1696 18.3362 9.92424C17.9878 6.80231 15.3399 4.375 12.125 4.375C9.20171 4.375 6.74772 6.38153 6.06431 9.09283Z',
  d7: 'M3.5346 7.58974C3.34879 7.26475 3.22813 6.91997 3.16869 6.5705C4.16672 6.81452 5.25676 6.68739 6.2176 6.1272C7.17738 5.56763 7.82838 4.68113 8.11629 3.69119C8.37869 3.91448 8.60811 4.18719 8.79034 4.50591C8.91299 4.72044 9.00694 4.94288 9.07374 5.16909C9.65058 4.84579 10.2839 4.61133 10.9553 4.48424C10.8484 4.15221 10.7058 3.82676 10.5266 3.51324C9.84536 2.32171 8.75418 1.51131 7.53487 1.1634C7.2124 1.07138 6.86527 1.14713 6.61044 1.36511C6.35561 1.5831 6.22701 1.91431 6.26797 2.24714C6.37223 3.09444 5.97606 3.95292 5.21026 4.39941C4.44652 4.84468 3.52218 4.76024 2.85599 4.25176C2.58862 4.04769 2.23658 3.9917 1.91909 4.10275C1.60161 4.21381 1.36122 4.47702 1.27934 4.80325C0.969854 6.0364 1.11737 7.39136 1.79834 8.58242C2.27307 9.41277 2.94576 10.0572 3.7222 10.4896C4.27537 10.0829 4.90401 9.77279 5.58325 9.58417C5.77924 9.52974 5.87724 9.50253 5.93372 9.44468C5.98722 9.38988 6.01221 9.29906 6.05668 9.12305C5.04887 9.0863 4.07904 8.54201 3.5346 7.58974Z',
  d8: 'M10.9972 17.25V14.75H12.9972V17.25H10.9972ZM7.99609 20.25V17.75H9.99609V20.25H7.99609ZM13.9961 20.25V17.75H15.9961V20.25H13.9961ZM5.49609 23.25V20.75H7.49609V23.25H5.49609ZM10.9961 23.25V20.75H12.9961V23.25H10.9961ZM16.4961 23.25V20.75H18.4961V23.25H16.4961Z',
  d9: 'M1.95853 8.57974C2.46175 9.45844 3.17654 10.139 4.00113 10.5931C2.35088 11.6037 1.25 13.4231 1.25 15.5C1.25 17.5747 2.34875 19.3927 3.99609 20.4039V19.25H6.49609V16.25H9.49717V13.25H14.4972V16.25H17.4961V19.25H19.9961V20.6198C21.6361 19.7318 22.75 17.996 22.75 16C22.75 13.3541 20.7927 11.1653 18.2469 10.8027C18.1428 7.44224 15.3858 4.75 12 4.75C11.9067 4.75 11.8139 4.75204 11.7216 4.75609C11.6072 4.24066 11.4145 3.73438 11.1397 3.25455C10.4229 2.00293 9.27509 1.152 7.99255 0.78665C7.68421 0.698817 7.35231 0.771121 7.10866 0.9792C6.86501 1.18728 6.74204 1.50343 6.7812 1.82114C6.89893 2.77626 6.45189 3.74549 5.58504 4.25004C4.72017 4.75344 3.67359 4.65753 2.91993 4.08326C2.66429 3.88846 2.32768 3.83502 2.02412 3.94102C1.72056 4.04703 1.49072 4.29828 1.41243 4.60968C1.08672 5.9053 1.242 7.32856 1.95853 8.57974ZM3.185 6.31676C3.23715 6.76732 3.37942 7.21446 3.61864 7.63218C4.14484 8.551 5.02726 9.12892 5.98611 9.29297C6.53241 7.36479 7.98051 5.81594 9.84591 5.13109C9.77166 4.81354 9.65063 4.50083 9.47955 4.20211C9.24355 3.79001 8.93636 3.44692 8.58292 3.17891C8.30957 4.28356 7.60885 5.28195 6.5482 5.8993C5.48709 6.51692 4.27537 6.63082 3.185 6.31676Z',
};

export const IconMoonCloudLittleRainStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-rain-stroke-rounded IconMoonCloudLittleRainStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudLittleRainDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-rain-duotone-rounded IconMoonCloudLittleRainDuotoneRounded"
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
      />
      <path 
        d={d.d3} 
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

export const IconMoonCloudLittleRainTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-rain-twotone-rounded IconMoonCloudLittleRainTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudLittleRainSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-rain-solid-rounded IconMoonCloudLittleRainSolidRounded"
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

export const IconMoonCloudLittleRainBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-rain-bulk-rounded IconMoonCloudLittleRainBulkRounded"
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

export const IconMoonCloudLittleRainStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-rain-stroke-sharp IconMoonCloudLittleRainStrokeSharp"
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

export const IconMoonCloudLittleRainSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-little-rain-solid-sharp IconMoonCloudLittleRainSolidSharp"
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

export const iconPackOfMoonCloudLittleRain: TheIconSelfPack = {
  name: 'MoonCloudLittleRain',
  StrokeRounded: IconMoonCloudLittleRainStrokeRounded,
  DuotoneRounded: IconMoonCloudLittleRainDuotoneRounded,
  TwotoneRounded: IconMoonCloudLittleRainTwotoneRounded,
  SolidRounded: IconMoonCloudLittleRainSolidRounded,
  BulkRounded: IconMoonCloudLittleRainBulkRounded,
  StrokeSharp: IconMoonCloudLittleRainStrokeSharp,
  SolidSharp: IconMoonCloudLittleRainSolidSharp,
};