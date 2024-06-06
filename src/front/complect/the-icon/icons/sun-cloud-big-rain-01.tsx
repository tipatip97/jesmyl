import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9 4.65468C8.30552 3.65451 7.15088 3 5.84388 3C3.72096 3 2 4.72674 2 6.85679C2 8.15354 2.63783 9.30081 3.61588 10',
  d2: 'M17.4776 10.0091C17.485 10.0091 17.4925 10.0091 17.5 10.0091C19.9853 10.0091 22 12.0269 22 14.5159C22 16.8512 20.2265 18.7716 17.9548 19M17.4776 10.0091C17.4924 9.8442 17.5 9.67716 17.5 9.50834C17.5 6.46617 15.0376 4 12 4C9.12324 4 6.76233 6.21197 6.52042 9.03032M17.4776 10.0091C17.3753 11.1453 16.9286 12.182 16.2428 13.0136M6.52042 9.03032C3.98398 9.27205 2 11.4116 2 14.0152C2 16.4378 3.71776 18.536 6 19M6.52042 9.03032C6.67826 9.01527 6.83823 9.00758 7 9.00758C8.12582 9.00758 9.16474 9.38023 10.0005 10.0091',
  d3: 'M9.5 19.5034C9.5 18.2482 10.5532 17.0077 11.2924 16.2917C11.6939 15.9028 12.3061 15.9028 12.7076 16.2917C13.4468 17.0077 14.5 18.2482 14.5 19.5034C14.5 20.7341 13.5533 22 12 22C10.4467 22 9.5 20.7341 9.5 19.5034Z',
  d4: 'M12 4C15.0376 4 17.5 6.46243 17.5 9.5C17.5 9.66856 17.4924 9.83536 17.4776 10.0001L17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H14.9985C14.9499 17.5656 13.7186 16.1591 12.8491 15.3403C12.3674 14.8866 11.6326 14.8866 11.1509 15.3403C10.2814 16.1591 9.0501 17.5656 9.00149 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227C6.76233 6.20862 9.12324 4 12 4Z',
  d5: 'M9 19.0873C9 17.6229 10.2638 16.1757 11.1509 15.3403C11.6326 14.8866 12.3674 14.8866 12.8491 15.3403C13.7362 16.1757 15 17.6229 15 19.0873C15 20.5231 13.864 22 12 22C10.136 22 9 20.5231 9 19.0873Z',
  d6: 'M10.6367 14.7943C11.4073 14.0686 12.5927 14.0686 13.3633 14.7943C13.8302 15.234 14.4131 15.8497 14.8839 16.5659C15.3489 17.2733 15.75 18.1471 15.75 19.0873C15.75 20.8947 14.3196 22.75 12 22.75C9.68042 22.75 8.25 20.8947 8.25 19.0873C8.25 18.1471 8.65106 17.2733 9.11608 16.5659C9.58691 15.8497 10.1698 15.234 10.6367 14.7943Z',
  d7: 'M5.89293 8.16541C5.86687 8.28518 5.77394 8.37978 5.65475 8.40836C3.1278 9.01425 1.25 11.2875 1.25 14C1.25 16.9865 3.52692 19.4413 6.43955 19.723C6.62454 19.7409 6.77124 19.5781 6.7596 19.3927C6.75322 19.2909 6.75 19.189 6.75 19.0873C6.75 17.7311 7.32134 16.5654 7.86267 15.7419C8.42145 14.8919 9.09461 14.1861 9.60829 13.7023C10.9566 12.4326 13.0434 12.4326 14.3917 13.7023C14.9054 14.1861 15.5786 14.8919 16.1373 15.7419C16.6787 16.5654 17.25 17.7311 17.25 19.0873C17.25 19.2104 17.2453 19.3336 17.236 19.4567C17.2242 19.6123 17.3439 19.75 17.5 19.75C20.3995 19.75 22.75 17.3995 22.75 14.5C22.75 11.941 20.9191 9.80958 18.4958 9.34431C18.3526 9.31682 18.2444 9.196 18.2341 9.05055C18.0037 5.80855 15.3006 3.25 12 3.25C9.00614 3.25 6.50451 5.35458 5.89293 8.16541Z',
  d8: 'M3 6.85679C3 5.27586 4.27641 4 5.84388 4C6.62417 4 7.33201 4.31517 7.84724 4.82904C8.35213 4.37979 8.93035 4.0112 9.56171 3.74345C8.67483 2.67988 7.33905 2 5.84388 2C3.16552 2 1 4.17762 1 6.85679C1 8.25011 1.58596 9.50695 2.52256 10.392C2.94658 9.86654 3.46125 9.41723 4.04283 9.06783C3.40521 8.54305 3 7.7479 3 6.85679Z',
  d9: 'M10.7617 14.4193C11.5323 13.6936 12.7177 13.6936 13.4883 14.4193C13.9552 14.859 14.5381 15.4747 15.0089 16.1909C15.4739 16.8983 15.875 17.7721 15.875 18.7123C15.875 20.5197 14.4446 22.375 12.125 22.375C9.80542 22.375 8.375 20.5197 8.375 18.7123C8.375 17.7721 8.77606 16.8983 9.24108 16.1909C9.71191 15.4747 10.2948 14.859 10.7617 14.4193Z',
  d10: 'M6.01793 7.79041C5.99187 7.91018 5.89894 8.00478 5.77975 8.03336C3.2528 8.63925 1.375 10.9125 1.375 13.625C1.375 16.6115 3.65192 19.0663 6.56455 19.348C6.74954 19.3659 6.89624 19.2031 6.8846 19.0177C6.87822 18.9159 6.875 18.814 6.875 18.7123C6.875 17.3561 7.44634 16.1904 7.98767 15.3669C8.54645 14.5169 9.21961 13.8111 9.73329 13.3273C11.0816 12.0576 13.1684 12.0576 14.5167 13.3273C15.0304 13.8111 15.7036 14.5169 16.2623 15.3669C16.8037 16.1904 17.375 17.3561 17.375 18.7123C17.375 18.8354 17.3703 18.9586 17.361 19.0817C17.3492 19.2373 17.4689 19.375 17.625 19.375C20.5245 19.375 22.875 17.0245 22.875 14.125C22.875 11.566 21.0441 9.43458 18.6208 8.96931C18.4776 8.94182 18.3694 8.821 18.3591 8.67555C18.1287 5.43355 15.4256 2.875 12.125 2.875C9.13114 2.875 6.62951 4.97958 6.01793 7.79041Z',
  d11: 'M3.125 6.48179C3.125 4.90086 4.40141 3.625 5.96888 3.625C6.74917 3.625 7.45701 3.94017 7.97224 4.45404C8.47713 4.00479 9.05535 3.6362 9.68671 3.36845C8.79983 2.30488 7.46405 1.625 5.96888 1.625C3.29052 1.625 1.125 3.80262 1.125 6.48179C1.125 7.87511 1.71096 9.13195 2.64756 10.017C3.07158 9.49154 3.58625 9.04223 4.16783 8.69283C3.53021 8.16805 3.125 7.3729 3.125 6.48179Z',
  d12: 'M12 16C12 16 9.5 17.5 9.5 19.5034C9.5 20.7341 10.4467 22 12 22C13.5533 22 14.5 20.7341 14.5 19.5034C14.5 17.5 12 16 12 16Z',
  d13: 'M12 14.625C12.2562 14.8129 13.4341 15.6233 13.7805 15.9699C14.4469 16.6368 15.25 17.6963 15.25 19.0031C15.25 20.5848 14.028 22.2497 12 22.2497C9.97196 22.2497 8.75 20.5848 8.75 19.0031C8.75 17.6963 9.55305 16.6368 10.2195 15.9699C10.5659 15.6233 11.7438 14.8129 12 14.625Z',
  d14: 'M1.25 6.35826C1.25 7.67454 1.80115 8.86245 2.68308 9.70164C1.79103 10.7146 1.25 12.044 1.25 13.5C1.25 16.6756 3.82436 19.25 7 19.25H7.25687C7.2523 19.1675 7.25 19.0851 7.25 19.003C7.25 17.0858 8.40968 15.6589 9.15846 14.9096C9.43154 14.6363 9.91809 14.2748 10.2603 14.0255C10.4528 13.8853 11.8469 12.8734 12 12.7646C12.1531 12.8734 13.5471 13.8853 13.7397 14.0255C14.0819 14.2748 14.5685 14.6363 14.8415 14.9096C15.5903 15.6589 16.75 17.0858 16.75 19.003C16.75 19.0851 16.7477 19.1675 16.7431 19.25H17.5C20.3995 19.25 22.75 16.8995 22.75 14C22.75 11.3541 20.7927 9.16534 18.2469 8.80273C18.1428 5.44224 15.3858 2.75 12 2.75C11.0435 2.75 10.1372 2.96484 9.32672 3.3489C8.48541 2.37157 7.23857 1.75 5.84601 1.75C3.30471 1.75 1.25 3.81619 1.25 6.35826ZM5.84601 3.64766C4.35875 3.64766 3.14766 4.85823 3.14766 6.35826C3.14766 7.22264 3.54949 7.99188 4.17797 8.48912C4.69233 8.19886 5.25587 7.98547 5.853 7.86454C6.1002 6.51824 6.77854 5.32293 7.7396 4.42707C7.25136 3.94376 6.58272 3.64766 5.84601 3.64766Z',
};

export const IconSunCloudBigRain01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-01-stroke-rounded IconSunCloudBigRain01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudBigRain01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-01-duotone-rounded IconSunCloudBigRain01DuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudBigRain01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-01-twotone-rounded IconSunCloudBigRain01TwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudBigRain01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-01-solid-rounded IconSunCloudBigRain01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconSunCloudBigRain01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-01-bulk-rounded IconSunCloudBigRain01BulkRounded"
    >
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

export const IconSunCloudBigRain01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-01-stroke-sharp IconSunCloudBigRain01StrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconSunCloudBigRain01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-big-rain-01-solid-sharp IconSunCloudBigRain01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudBigRain01: TheIconSelfPack = {
  name: 'SunCloudBigRain01',
  StrokeRounded: IconSunCloudBigRain01StrokeRounded,
  DuotoneRounded: IconSunCloudBigRain01DuotoneRounded,
  TwotoneRounded: IconSunCloudBigRain01TwotoneRounded,
  SolidRounded: IconSunCloudBigRain01SolidRounded,
  BulkRounded: IconSunCloudBigRain01BulkRounded,
  StrokeSharp: IconSunCloudBigRain01StrokeSharp,
  SolidSharp: IconSunCloudBigRain01SolidSharp,
};