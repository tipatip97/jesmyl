import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 8.18677C2.60406 6.08705 2.91537 4.77792 3.84664 3.84664C4.77792 2.91537 6.08705 2.60406 8.18677 2.5M21.5 8.18677C21.3959 6.08705 21.0846 4.77792 20.1534 3.84664C19.2221 2.91537 17.9129 2.60406 15.8132 2.5M15.8132 21.5C17.9129 21.3959 19.2221 21.0846 20.1534 20.1534C21.0846 19.2221 21.3959 17.9129 21.5 15.8132M8.18676 21.5C6.08705 21.3959 4.77792 21.0846 3.84664 20.1534C2.91537 19.2221 2.60406 17.9129 2.5 15.8132',
  d2: 'M2.49986 12H21.4999',
  d3: 'M6 12C6 8.68629 8.68629 6 12 6C12 7.65685 13.3431 9 15 9C15.6755 9 16.2989 8.77672 16.8004 8.39993C17.5536 9.40273 18 10.6492 18 12M17.1973 15C16.1599 16.7934 14.2208 18 12 18C9.77915 18 7.84012 16.7934 6.80269 15',
  d4: 'M2.49986 8.18677C2.60392 6.08705 2.91523 4.77792 3.84651 3.84664C4.77778 2.91537 6.08691 2.60406 8.18663 2.5H15.8131C17.9128 2.60406 19.2219 2.91537 20.1532 3.84664C21.0845 4.77792 21.3958 6.08705 21.4999 8.18677V15.8132C21.3958 17.9129 21.0845 19.2221 20.1532 20.1534C19.2219 21.0846 17.9128 21.3959 15.8131 21.5H8.18663C6.08691 21.3959 4.77778 21.0846 3.84651 20.1534C2.91523 19.2221 2.60392 17.9129 2.49986 15.8132V8.18677ZM11.9999 6C8.68615 6 5.99986 8.68629 5.99986 12H17.9999C17.9999 10.6492 17.5535 9.40273 16.8002 8.39993C16.2988 8.77672 15.6754 9 14.9999 9C13.343 9 11.9999 7.65685 11.9999 6Z',
  d5: 'M5.99986 12C5.99986 8.68629 8.68615 6 11.9999 6C11.9999 7.65685 13.343 9 14.9999 9C15.6754 9 16.2988 8.77672 16.8002 8.39993C17.5535 9.40273 17.9999 10.6492 17.9999 12M17.1972 15C16.1597 16.7934 14.2207 18 11.9999 18C9.77902 18 7.83998 16.7934 6.80256 15',
  d6: 'M9.18554 2.45052C9.21288 3.00213 8.78788 3.47146 8.23627 3.4988C6.1643 3.60148 5.19941 3.90811 4.55375 4.55377C3.90809 5.19943 3.60146 6.16432 3.49877 8.23629C3.47144 8.7879 3.00211 9.21291 2.4505 9.18557C1.89889 9.15823 1.47389 8.6889 1.50123 8.1373C1.60666 6.00982 1.92264 4.35645 3.13954 3.13956C4.35643 1.92267 6.0098 1.60669 8.13727 1.50125C8.68888 1.47391 9.15821 1.89892 9.18554 2.45052ZM14.8145 2.45052C14.8418 1.89892 15.3111 1.47391 15.8627 1.50125C17.9902 1.60669 19.6436 1.92267 20.8605 3.13956C22.0774 4.35645 22.3933 6.00982 22.4988 8.1373C22.5261 8.6889 22.1011 9.15823 21.5495 9.18557C20.9979 9.21291 20.5286 8.7879 20.5012 8.23629C20.3985 6.16432 20.0919 5.19943 19.4463 4.55377C18.8006 3.90811 17.8357 3.60148 15.7637 3.4988C15.2121 3.47146 14.7871 3.00213 14.8145 2.45052ZM2.4505 14.8145C3.00211 14.7871 3.47144 15.2121 3.49877 15.7638C3.60146 17.8357 3.90809 18.8006 4.55375 19.4463C5.19941 20.0919 6.1643 20.3986 8.23626 20.5012C8.78787 20.5286 9.21288 20.9979 9.18554 21.5495C9.1582 22.1011 8.68887 22.5261 8.13726 22.4988C6.0098 22.3934 4.35643 22.0774 3.13954 20.8605C1.92264 19.6436 1.60666 17.9902 1.50123 15.8628C1.47389 15.3111 1.89889 14.8418 2.4505 14.8145ZM21.5495 14.8145C22.1011 14.8418 22.5261 15.3111 22.4988 15.8628C22.3933 17.9902 22.0774 19.6436 20.8605 20.8605C19.6436 22.0774 17.9902 22.3934 15.8627 22.4988C15.3111 22.5261 14.8418 22.1011 14.8145 21.5495C14.7871 20.9979 15.2121 20.5286 15.7637 20.5012C17.8357 20.3986 18.8006 20.0919 19.4463 19.4463C20.0919 18.8006 20.3985 17.8357 20.5012 15.7638C20.5286 15.2121 20.9979 14.7871 21.5495 14.8145Z',
  d7: 'M5.24986 12C5.24986 8.27208 8.27194 5.25 11.9999 5.25C12.4141 5.25 12.7499 5.58579 12.7499 6C12.7499 7.24264 13.7572 8.25 14.9999 8.25C15.5074 8.25 15.9737 8.08287 16.3497 7.80033C16.5088 7.68083 16.7088 7.62941 16.9057 7.65738C17.1027 7.68536 17.2804 7.79043 17.3999 7.94949C18.2474 9.07771 18.7499 10.4813 18.7499 12C18.7499 12.4142 18.4141 12.75 17.9999 12.75H5.99986C5.58565 12.75 5.24986 12.4142 5.24986 12Z',
  d8: 'M6.47907 14.3711C6.93766 14.1222 7.52446 14.2692 7.78974 14.6995C8.62049 16.0468 10.1709 16.9501 11.945 16.9501C13.7191 16.9501 15.2695 16.0468 16.1002 14.6995C16.3655 14.2692 16.9523 14.1222 17.4109 14.3711C17.8695 14.62 18.0262 15.1705 17.7609 15.6008C16.6013 17.4814 14.4316 18.75 11.945 18.75C9.45833 18.75 7.28863 17.4814 6.12906 15.6008C5.86378 15.1705 6.02049 14.62 6.47907 14.3711Z',
  d9: 'M1.49986 12C1.49986 11.4477 1.94758 11 2.49986 11H21.4999C22.0521 11 22.4999 11.4477 22.4999 12C22.4999 12.5523 22.0521 13 21.4999 13H2.49986C1.94758 13 1.49986 12.5523 1.49986 12Z',
  d10: 'M9.14413 2.5H2.49986V9.14426M14.8556 2.5H21.4999V9.14426M14.8556 21.5H21.4999V14.8557M9.14413 21.5H2.49986V14.8557',
  d11: 'M1.5 1.5H9.14426V3.5H3.5V9.14426H1.5V1.5ZM20.5 3.5H14.8557V1.5H22.5V9.14426H20.5V3.5ZM22.5 14.8557V22.5H14.8557V20.5H20.5V14.8557H22.5ZM3.5 20.5V14.8557H1.5V22.5H9.14426V20.5H3.5Z',
  d12: 'M22.5 13H1.5V11H22.5V13Z',
  d13: 'M5.25014 12C5.25014 8.27208 8.27222 5.25 12.0001 5.25C12.4144 5.25 12.7501 5.58579 12.7501 6C12.7501 7.24264 13.7575 8.25 15.0001 8.25C15.5077 8.25 15.974 8.08287 16.35 7.80033C16.509 7.68083 16.709 7.62941 16.906 7.65738C17.1029 7.68536 17.2807 7.79043 17.4002 7.94949C18.2477 9.07771 18.7501 10.4813 18.7501 12C18.7501 12.4142 18.4144 12.75 18.0001 12.75H6.00014C5.58592 12.75 5.25014 12.4142 5.25014 12Z',
  d14: 'M7.82301 14.4102C8.65811 15.8538 10.2166 16.8216 12 16.8216C13.7834 16.8216 15.3419 15.8538 16.177 14.4102L17.8464 15.3758C16.6807 17.3909 14.4997 18.7501 12 18.7501C9.50034 18.7501 7.31928 17.3909 6.15363 15.3758L7.82301 14.4102Z',
};

export const IconIrisScanStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="iris-scan-stroke-rounded IconIrisScanStrokeRounded"
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

export const IconIrisScanDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="iris-scan-duotone-rounded IconIrisScanDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
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

export const IconIrisScanTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="iris-scan-twotone-rounded IconIrisScanTwotoneRounded"
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

export const IconIrisScanSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="iris-scan-solid-rounded IconIrisScanSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconIrisScanBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="iris-scan-bulk-rounded IconIrisScanBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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

export const IconIrisScanStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="iris-scan-stroke-sharp IconIrisScanStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconIrisScanSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="iris-scan-solid-sharp IconIrisScanSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfIrisScan: TheIconSelfPack = {
  name: 'IrisScan',
  StrokeRounded: IconIrisScanStrokeRounded,
  DuotoneRounded: IconIrisScanDuotoneRounded,
  TwotoneRounded: IconIrisScanTwotoneRounded,
  SolidRounded: IconIrisScanSolidRounded,
  BulkRounded: IconIrisScanBulkRounded,
  StrokeSharp: IconIrisScanStrokeSharp,
  SolidSharp: IconIrisScanSolidSharp,
};