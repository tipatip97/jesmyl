import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 8.81069C17.485 8.81066 17.4925 8.81064 17.5 8.81064C19.9853 8.81064 22 10.7618 22 13.1686C22 15.4118 20.25 17.2591 18 17.5M17.4776 8.81069C17.4924 8.65119 17.5 8.48966 17.5 8.32642C17.5 5.38472 15.0376 3 12 3C9.12324 3 6.76233 5.13891 6.52042 7.86418M17.4776 8.81069C17.3753 9.90933 16.9286 10.9118 16.2428 11.716M6.52042 7.86418C3.98398 8.09794 2 10.1668 2 12.6844C2 15.027 3.71776 17.0514 6 17.5M6.52042 7.86418C6.67826 7.84964 6.83823 7.8422 7 7.8422C8.12582 7.8422 9.16474 8.20254 10.0005 8.81064',
  d2: 'M12 15V21M14.5 16.5L9.50013 19.5M9.5 16.5L14.4999 19.5',
  d3: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d4: 'M12.0002 13.75C12.5524 13.75 13.0002 14.1977 13.0002 14.75V15.9838L13.9856 15.3925C14.4592 15.1084 15.0735 15.2619 15.3576 15.7355C15.6418 16.2091 15.4882 16.8233 15.0147 17.1075L13.9438 17.75L15.0145 18.3925C15.4881 18.6767 15.6417 19.2909 15.3575 19.7645C15.0734 20.2381 14.4591 20.3916 13.9855 20.1075L13.0002 19.5163V20.75C13.0002 21.3023 12.5524 21.75 12.0002 21.75C11.4479 21.75 11.0002 21.3023 11.0002 20.75V19.5163L10.0148 20.1075C9.54121 20.3916 8.92695 20.2381 8.6428 19.7645C8.35864 19.2909 8.5122 18.6767 8.98578 18.3925L10.0565 17.75L8.98565 17.1075C8.51207 16.8233 8.35851 16.2091 8.64266 15.7355C8.92682 15.2619 9.54108 15.1084 10.0147 15.3925L11.0002 15.9838V14.75C11.0002 14.1977 11.4479 13.75 12.0002 13.75Z',
  d5: 'M5.89293 7.16541C5.86687 7.28518 5.77394 7.37979 5.65475 7.40836C3.1278 8.01425 1.25 10.2875 1.25 13C1.25 16.1756 3.82436 18.75 7 18.75C7.02969 18.75 7.05519 18.7291 7.06172 18.7001C7.12238 18.4313 7.22718 18.1726 7.37319 17.9358C7.44311 17.8224 7.44308 17.6777 7.37316 17.5644C6.89835 16.7945 6.85917 15.7929 7.35666 14.9637C7.82311 14.1863 8.64536 13.7539 9.49023 13.7497C9.61874 13.749 9.73778 13.6776 9.79881 13.5645C10.2212 12.7818 11.0487 12.25 12.0004 12.25C12.9521 12.25 13.7796 12.7818 14.2019 13.5645C14.263 13.6776 14.382 13.749 14.5105 13.7497C15.3554 13.7539 16.1776 14.1863 16.6441 14.9637C17.1416 15.7929 17.1024 16.7945 16.6276 17.5644C16.5577 17.6777 16.5576 17.8224 16.6276 17.9358C16.7393 18.1171 16.827 18.3112 16.8891 18.5128C16.9311 18.649 17.0521 18.75 17.1946 18.75H17.5C20.3995 18.75 22.75 16.3995 22.75 13.5C22.75 10.941 20.9191 8.80958 18.4958 8.34431C18.3526 8.31682 18.2444 8.196 18.2341 8.05055C18.0037 4.80855 15.3006 2.25 12 2.25C9.00614 2.25 6.50451 4.35458 5.89293 7.16541Z',
  d6: 'M12.0001 14.25C12.4143 14.25 12.7501 14.5858 12.7501 15V16.6754L14.1142 15.8569C14.4694 15.6438 14.9301 15.7589 15.1432 16.1141C15.3563 16.4693 15.2412 16.93 14.886 17.1431L13.4578 18L14.8859 18.8569C15.241 19.07 15.3562 19.5307 15.1431 19.8859C14.93 20.2411 14.4693 20.3562 14.1141 20.1431L12.7501 19.3247V21C12.7501 21.4142 12.4143 21.75 12.0001 21.75C11.5859 21.75 11.2501 21.4142 11.2501 21V19.3247L9.88612 20.1431C9.53094 20.3562 9.07024 20.2411 8.85713 19.8859C8.64401 19.5307 8.75918 19.07 9.11437 18.8569L10.5424 18L9.11423 17.1431C8.75905 16.93 8.64388 16.4693 8.857 16.1141C9.07011 15.7589 9.53081 15.6438 9.88599 15.8569L11.2501 16.6754V15C11.2501 14.5858 11.5859 14.25 12.0001 14.25Z',
  d7: 'M5.89293 7.16541C5.86687 7.28518 5.77394 7.37978 5.65475 7.40836C3.1278 8.01425 1.25 10.2875 1.25 13C1.25 16.1756 3.82436 18.75 7 18.75C7.02969 18.75 7.05519 18.7291 7.06172 18.7001C7.12238 18.4313 7.22718 18.1726 7.37319 17.9358C7.44311 17.8224 7.44308 17.6777 7.37316 17.5644C6.89835 16.7945 6.85917 15.7929 7.35666 14.9637C7.82311 14.1863 8.64536 13.7539 9.49023 13.7497C9.61874 13.749 9.73778 13.6776 9.79881 13.5645C10.2212 12.7818 11.0487 12.25 12.0004 12.25C12.9521 12.25 13.7796 12.7818 14.2019 13.5645C14.263 13.6776 14.382 13.749 14.5105 13.7497C15.3554 13.7539 16.1776 14.1863 16.6441 14.9637C17.1416 15.7929 17.1024 16.7945 16.6276 17.5644C16.5577 17.6777 16.5576 17.8224 16.6276 17.9358C16.7393 18.1171 16.827 18.3112 16.8891 18.5128C16.9311 18.649 17.0521 18.75 17.1946 18.75H17.5C20.3995 18.75 22.75 16.3995 22.75 13.5C22.75 10.941 20.9191 8.80958 18.4958 8.34431C18.3526 8.31682 18.2444 8.196 18.2341 8.05055C18.0037 4.80855 15.3006 2.25 12 2.25C9.00614 2.25 6.50451 4.35458 5.89293 7.16541Z',
  d8: 'M11 16.509V14.75H13V16.509L14.4961 15.6362L15.5039 17.3638L13.9846 18.25L15.5037 19.1362L14.4959 20.8638L13 19.9911V21.75H11V19.9911L9.50401 20.8638L8.49625 19.1362L10.0154 18.25L8.49609 17.3638L9.50386 15.6362L11 16.509Z',
  d9: 'M5.853 7.36454C3.22664 7.89643 1.25 10.217 1.25 13C1.25 16.0789 3.66989 18.5926 6.71148 18.7429L6.44531 18.25L9.50067 13.25H14.5007L17.556 18.25L17.286 18.75H17.5C20.3995 18.75 22.75 16.3995 22.75 13.5C22.75 10.8541 20.7927 8.66534 18.2469 8.30273C18.1428 4.94224 15.3858 2.25 12 2.25C8.93585 2.25 6.38731 4.45456 5.853 7.36454Z',
};

export const IconCloudMidSnowStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-snow-stroke-rounded IconCloudMidSnowStrokeRounded"
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

export const IconCloudMidSnowDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-snow-duotone-rounded IconCloudMidSnowDuotoneRounded"
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

export const IconCloudMidSnowTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-snow-twotone-rounded IconCloudMidSnowTwotoneRounded"
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

export const IconCloudMidSnowSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-snow-solid-rounded IconCloudMidSnowSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudMidSnowBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-snow-bulk-rounded IconCloudMidSnowBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudMidSnowStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-snow-stroke-sharp IconCloudMidSnowStrokeSharp"
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
    </TheIconWrapper>
  );
};

export const IconCloudMidSnowSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-mid-snow-solid-sharp IconCloudMidSnowSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCloudMidSnow: TheIconSelfPack = {
  name: 'CloudMidSnow',
  StrokeRounded: IconCloudMidSnowStrokeRounded,
  DuotoneRounded: IconCloudMidSnowDuotoneRounded,
  TwotoneRounded: IconCloudMidSnowTwotoneRounded,
  SolidRounded: IconCloudMidSnowSolidRounded,
  BulkRounded: IconCloudMidSnowBulkRounded,
  StrokeSharp: IconCloudMidSnowStrokeSharp,
  SolidSharp: IconCloudMidSnowSolidSharp,
};