import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 11.0091C17.485 11.0091 17.4925 11.0091 17.5 11.0091C19.9853 11.0091 22 13.0269 22 15.5159C22 17.2442 20.9257 18.2931 19.5 19M17.4776 11.0091C17.4924 10.8442 17.5 10.6772 17.5 10.5083C17.5 7.46617 15.0376 5 12 5C9.12324 5 6.76233 7.21197 6.52042 10.0303M17.4776 11.0091C17.3954 11.9219 17.091 12.7704 16.6189 13.5M6.52042 10.0303C3.98398 10.2721 2 12.4116 2 15.0152C2 16.8687 3.0055 18.1412 4.5 19M6.52042 10.0303C6.67826 10.0153 6.83823 10.0076 7 10.0076C7.91072 10.0076 8.76457 10.2514 9.5 10.6775',
  d2: 'M12.0434 13L10.907 14.036C10.3596 14.596 10.3596 15.492 10.9358 16.052C11.224 16.332 11.6401 16.5 12.0434 16.5C12.4468 16.5 12.7797 16.36 13.0678 16.108C13.6441 15.548 13.6441 14.624 13.0678 14.064L12.0434 13Z',
  d3: 'M8.54345 18.5L7.40701 19.536C6.8596 20.096 6.85963 20.992 7.43585 21.552C7.72396 21.832 8.14009 22 8.54345 22C8.9468 22 9.27972 21.86 9.56783 21.608C10.1441 21.048 10.1441 20.124 9.56783 19.564L8.54345 18.5Z',
  d4: 'M15.5434 18.5L14.407 19.536C13.8596 20.096 13.8596 20.992 14.4358 21.552C14.724 21.832 15.1401 22 15.5434 22C15.9468 22 16.2797 21.86 16.5678 21.608C17.1441 21.048 17.1441 20.124 16.5678 19.564L15.5434 18.5Z',
  d5: 'M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664',
  d6: 'M12 5C15.0376 5 17.5 7.46243 17.5 10.5C17.5 10.6686 17.4924 10.8354 17.4776 11.0001L17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.9853 19.9853 20 17.5 20H16.8743C16.8027 19.8413 16.7006 19.693 16.5678 19.564L15.5434 18.5L14.407 19.536C14.2724 19.6737 14.1709 19.8317 14.1029 20H9.87429C9.80271 19.8413 9.70056 19.693 9.56783 19.564L8.54345 18.5L7.40701 19.536C7.27242 19.6737 7.17092 19.8317 7.10294 20H7C4.23858 20 2 17.7614 2 15C2 12.4003 3.98398 10.2641 6.52042 10.0227C6.76233 7.20862 9.12324 5 12 5ZM12.0434 13L10.907 14.036C10.3596 14.596 10.3596 15.492 10.9359 16.052C11.224 16.332 11.6401 16.5 12.0434 16.5C12.4468 16.5 12.7797 16.36 13.0678 16.108C13.6441 15.548 13.6441 14.624 13.0678 14.064L12.0434 13Z',
  d7: 'M11.6632 12.5707C11.9634 12.2971 12.427 12.3122 12.7087 12.6048L13.7254 13.6608C14.5948 14.5162 14.5915 15.9195 13.7155 16.7708C13.7061 16.78 13.6965 16.7889 13.6866 16.7975C13.2734 17.1589 12.7683 17.375 12.1684 17.375C11.5714 17.375 10.9673 17.1319 10.5381 16.7148C9.66131 15.8627 9.66102 14.4906 10.4957 13.6367C10.5057 13.6264 10.5161 13.6164 10.5267 13.6067L11.6632 12.5707Z',
  d8: 'M8.16317 18.0707C8.4634 17.7971 8.92696 17.8122 9.20873 18.1048L10.2254 19.1608C11.0948 20.0162 11.0915 21.4195 10.2155 22.2708C10.2061 22.28 10.1965 22.2889 10.1866 22.2975C9.77345 22.6589 9.26833 22.875 8.66844 22.875C8.07136 22.875 7.46729 22.6319 7.03814 22.2148C6.16131 21.3627 6.16102 19.9906 6.99568 19.1367C7.00574 19.1264 7.0161 19.1164 7.02674 19.1067L8.16317 18.0707Z',
  d9: 'M15.1632 18.0707C15.4634 17.7971 15.927 17.8122 16.2087 18.1048L17.2254 19.1608C18.0948 20.0162 18.0915 21.4195 17.2155 22.2708C17.2061 22.28 17.1965 22.2889 17.1866 22.2975C16.7734 22.6589 16.2683 22.875 15.6684 22.875C15.0714 22.875 14.4673 22.6319 14.0381 22.2148C13.1613 21.3627 13.161 19.9906 13.9957 19.1367C14.0057 19.1264 14.0161 19.1164 14.0267 19.1067L15.1632 18.0707Z',
  d10: 'M6.06431 9.09283C6.01491 9.28884 5.9902 9.38684 5.93372 9.4447C5.87724 9.50255 5.77924 9.52976 5.58325 9.58419C3.15606 10.2582 1.375 12.4833 1.375 15.125C1.375 17.2038 2.47811 19.0249 4.13088 20.0349C4.42564 20.215 4.57301 20.3051 4.71062 20.2527C4.84822 20.2002 4.90976 19.9971 5.03285 19.5908C5.19918 19.0417 5.49655 18.5245 5.92301 18.0882L7.15261 16.9622C7.34642 16.7856 7.56292 16.649 7.79178 16.5522C8.17322 16.3909 8.36393 16.3103 8.41425 16.2238C8.46456 16.1374 8.44299 15.9528 8.39983 15.5837C8.27512 14.5167 8.62055 13.4091 9.42301 12.5882L10.6526 11.4622C11.5533 10.6412 12.944 10.6865 13.7893 11.5645L14.7936 12.6076C15.6061 13.4168 15.9607 14.5114 15.8575 15.5697C15.8211 15.9431 15.8029 16.1299 15.8555 16.2156C15.908 16.3014 16.1027 16.3778 16.4922 16.5307C16.7846 16.6455 17.0575 16.8237 17.2893 17.0645L18.2936 18.1076C18.7728 18.5849 19.0928 19.1615 19.2534 19.7713C19.3583 20.1694 19.4107 20.3684 19.5444 20.4263C19.6782 20.4842 19.8248 20.405 20.118 20.2465C21.7597 19.359 22.875 17.6223 22.875 15.625C22.875 13.1535 21.1672 11.0809 18.8673 10.5229C18.6239 10.4638 18.5022 10.4343 18.4397 10.3633C18.3772 10.2923 18.3635 10.1696 18.3362 9.92424C17.9878 6.80231 15.3399 4.375 12.125 4.375C9.20171 4.375 6.74772 6.38153 6.06431 9.09283Z',
  d11: 'M3.5346 7.58974C3.34879 7.26475 3.22813 6.91997 3.16869 6.5705C4.16672 6.81452 5.25676 6.68739 6.2176 6.1272C7.17738 5.56763 7.82838 4.68113 8.11629 3.69119C8.37869 3.91448 8.60811 4.18719 8.79034 4.50591C8.91299 4.72044 9.00694 4.94288 9.07374 5.16909C9.65058 4.84579 10.2839 4.61133 10.9553 4.48424C10.8484 4.15221 10.7058 3.82676 10.5266 3.51324C9.84536 2.32171 8.75418 1.51131 7.53487 1.1634C7.2124 1.07138 6.86527 1.14713 6.61044 1.36511C6.35561 1.5831 6.22701 1.91431 6.26797 2.24714C6.37223 3.09444 5.97606 3.95292 5.21026 4.39941C4.44652 4.84468 3.52218 4.76024 2.85599 4.25176C2.58862 4.04769 2.23658 3.9917 1.91909 4.10275C1.60161 4.21381 1.36122 4.47702 1.27934 4.80325C0.969854 6.0364 1.11737 7.39136 1.79834 8.58242C2.27307 9.41277 2.94576 10.0572 3.7222 10.4896C4.27537 10.0829 4.90401 9.77279 5.58325 9.58417C5.77924 9.52974 5.87724 9.50253 5.93372 9.44468C5.98722 9.38988 6.01221 9.29906 6.05668 9.12305C5.04887 9.0863 4.07904 8.54201 3.5346 7.58974Z',
  d12: 'M10.907 14.036L12.0434 13L13.0678 14.064C13.6441 14.624 13.6441 15.548 13.0678 16.108C12.7797 16.36 12.4468 16.5 12.0434 16.5C11.6401 16.5 11.224 16.332 10.9358 16.052C10.3596 15.492 10.3596 14.596 10.907 14.036Z',
  d13: 'M7.40701 19.536L8.54345 18.5L9.56783 19.564C10.1441 20.124 10.1441 21.048 9.56783 21.608C9.27973 21.86 8.9468 22 8.54345 22C8.14009 22 7.72396 21.832 7.43585 21.552C6.85963 20.992 6.8596 20.096 7.40701 19.536Z',
  d14: 'M14.407 19.536L15.5434 18.5L16.5678 19.564C17.1441 20.124 17.1441 21.048 16.5678 21.608C16.2797 21.86 15.9468 22 15.5434 22C15.1401 22 14.724 21.832 14.4358 21.552C13.8596 20.992 13.8596 20.096 14.407 19.536Z',
  d15: 'M13.6004 14.0358C14.4698 14.8913 14.4665 16.2946 13.5905 17.1459L13.5764 17.1596L13.5616 17.1726C13.1484 17.5339 12.6433 17.75 12.0434 17.75C11.4464 17.75 10.8423 17.507 10.4131 17.0899C9.53631 16.2377 9.53602 14.8656 10.3707 14.0118L10.3858 13.9963L12.0775 12.4541L13.6004 14.0358Z',
  d16: 'M10.1004 19.5358C10.9698 20.3913 10.9665 21.7946 10.0905 22.6459L10.0764 22.6596L10.0616 22.6726C9.64845 23.0339 9.14333 23.25 8.54344 23.25C7.94636 23.25 7.34229 23.007 6.91314 22.5899C6.03631 21.7377 6.03602 20.3656 6.87068 19.5118L6.88578 19.4963L8.57753 17.9541L10.1004 19.5358Z',
  d17: 'M17.1004 19.5358C17.9698 20.3913 17.9665 21.7946 17.0905 22.6459L17.0764 22.6596L17.0616 22.6726C16.6484 23.0339 16.1433 23.25 15.5434 23.25C14.9464 23.25 14.3423 23.007 13.9131 22.5899C13.0363 21.7377 13.036 20.3656 13.8707 19.5118L13.8858 19.4963L15.5775 17.9541L17.1004 19.5358Z',
  d18: 'M1.95853 8.57974C2.46175 9.45844 3.17654 10.139 4.00113 10.5931C2.35088 11.6037 1.25 13.4231 1.25 15.5C1.25 17.8801 2.69608 19.9224 4.75756 20.7963C4.81206 19.9472 5.16106 19.1149 5.79801 18.4633L5.8433 18.417L8.30612 16.1719C8.10604 15.0411 8.44197 13.8391 9.29801 12.9633L9.3433 12.917L12.1457 10.3623L14.6686 12.9828C15.4828 13.7937 15.8373 14.8913 15.7319 15.9518L18.1686 18.4828C18.8553 19.1667 19.215 20.0546 19.2475 20.9521C21.2879 20.2321 22.75 18.2868 22.75 16C22.75 13.3541 20.7927 11.1653 18.2469 10.8027C18.1428 7.44224 15.3858 4.75 12 4.75C11.9067 4.75 11.8139 4.75204 11.7216 4.75609C11.6072 4.24066 11.4145 3.73438 11.1397 3.25455C10.4229 2.00293 9.27509 1.152 7.99255 0.78665C7.68421 0.698817 7.35231 0.771121 7.10866 0.9792C6.86501 1.18728 6.74204 1.50343 6.7812 1.82114C6.89893 2.77626 6.45189 3.74549 5.58504 4.25004C4.72017 4.75344 3.67359 4.65753 2.91993 4.08326C2.66429 3.88846 2.32768 3.83502 2.02412 3.94102C1.72056 4.04703 1.49072 4.29828 1.41243 4.60968C1.08672 5.9053 1.242 7.32856 1.95853 8.57974ZM3.185 6.31676C3.23715 6.76732 3.37942 7.21446 3.61864 7.63218C4.14484 8.551 5.02726 9.12892 5.98611 9.29297C6.53241 7.36479 7.98051 5.81594 9.84591 5.13109C9.77166 4.81354 9.65063 4.50083 9.47955 4.20211C9.24355 3.79001 8.93636 3.44692 8.58292 3.17891C8.30957 4.28356 7.60885 5.28195 6.5482 5.8993C5.48709 6.51692 4.27537 6.63082 3.185 6.31676Z',
};

export const IconMoonCloudMidRainStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-rain-stroke-rounded IconMoonCloudMidRainStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudMidRainDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-rain-duotone-rounded IconMoonCloudMidRainDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudMidRainTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-rain-twotone-rounded IconMoonCloudMidRainTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      </g>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudMidRainSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-rain-solid-rounded IconMoonCloudMidRainSolidRounded"
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

export const IconMoonCloudMidRainBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-rain-bulk-rounded IconMoonCloudMidRainBulkRounded"
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

export const IconMoonCloudMidRainStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-rain-stroke-sharp IconMoonCloudMidRainStrokeSharp"
    >
      <path 
        d={d.d1} 
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
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoonCloudMidRainSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="moon-cloud-mid-rain-solid-sharp IconMoonCloudMidRainSolidSharp"
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

export const iconPackOfMoonCloudMidRain: TheIconSelfPack = {
  name: 'MoonCloudMidRain',
  StrokeRounded: IconMoonCloudMidRainStrokeRounded,
  DuotoneRounded: IconMoonCloudMidRainDuotoneRounded,
  TwotoneRounded: IconMoonCloudMidRainTwotoneRounded,
  SolidRounded: IconMoonCloudMidRainSolidRounded,
  BulkRounded: IconMoonCloudMidRainBulkRounded,
  StrokeSharp: IconMoonCloudMidRainStrokeSharp,
  SolidSharp: IconMoonCloudMidRainSolidSharp,
};