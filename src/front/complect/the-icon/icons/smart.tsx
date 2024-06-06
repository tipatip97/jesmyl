import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 17.7844C13.6177 18.5609 15.9391 17.1496 17 15',
  d2: 'M7 9.01067C7 9.01067 8.40944 8.88341 9.19588 9.50798M9.19588 9.50798L8.93275 10.3427C8.82896 10.6719 9.10031 11 9.4764 11C9.87165 11 10.1327 10.6434 9.92918 10.3348C9.74877 10.0612 9.50309 9.75196 9.19588 9.50798ZM14 9.01067C14 9.01067 15.4094 8.88341 16.1959 9.50798M16.1959 9.50798L15.9328 10.3427C15.829 10.6719 16.1003 11 16.4764 11C16.8717 11 17.1327 10.6434 16.9292 10.3348C16.7488 10.0612 16.5031 9.75196 16.1959 9.50798Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM17.3321 14.3274C17.7036 14.5107 17.8561 14.9605 17.6728 15.3319C16.4831 17.7424 13.8214 19.4036 10.7869 18.5034C10.3898 18.3856 10.1634 17.9682 10.2812 17.5711C10.399 17.174 10.8164 16.9475 11.2135 17.0653C13.4143 17.7182 15.3955 16.5568 16.3276 14.6681C16.511 14.2966 16.9607 14.1441 17.3321 14.3274ZM6.25309 9.07811C6.29032 9.49053 6.65475 9.79471 7.06715 9.75766C7.09803 9.75592 7.18301 9.75137 7.24383 9.75046C7.36647 9.74861 7.537 9.75174 7.72649 9.77119C7.92804 9.79188 8.12123 9.82816 8.29196 9.88098L8.2175 10.1172C7.93235 11.0217 8.69425 11.75 9.47644 11.75C9.89752 11.75 10.3008 11.5582 10.5422 11.2126C10.7984 10.8459 10.8349 10.3458 10.5554 9.92189C10.3496 9.60981 10.0532 9.23109 9.66236 8.92066C9.09859 8.47293 8.37374 8.32975 7.87965 8.27903C7.61848 8.25222 7.3875 8.24813 7.22129 8.25063C7.14262 8.25181 7.00001 8.25989 6.9424 8.26315L6.94236 8.26315L6.94226 8.26316L6.93261 8.26371C6.52007 8.30095 6.21584 8.66557 6.25309 9.07811ZM13.2531 9.07811C13.2903 9.49053 13.6548 9.79471 14.0671 9.75766C14.098 9.75592 14.183 9.75137 14.2438 9.75046C14.3665 9.74861 14.537 9.75174 14.7265 9.77119C14.928 9.79188 15.1212 9.82816 15.292 9.88098L15.2175 10.1172C14.9324 11.0217 15.6943 11.75 16.4764 11.75C16.8975 11.75 17.3008 11.5582 17.5422 11.2126C17.7984 10.8459 17.8349 10.3458 17.5554 9.92189C17.3496 9.60981 17.0532 9.23109 16.6624 8.92066C16.0986 8.47293 15.3737 8.32975 14.8797 8.27903C14.6185 8.25222 14.3875 8.24813 14.2213 8.25063C14.1426 8.25181 13.9998 8.2599 13.9423 8.26316L13.9326 8.26371C13.5201 8.30095 13.2158 8.66557 13.2531 9.07811Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M17.3321 14.3276C17.7036 14.5109 17.8561 14.9606 17.6728 15.3321C16.4831 17.7426 13.8214 19.4037 10.7869 18.5036C10.3898 18.3858 10.1634 17.9684 10.2812 17.5713C10.399 17.1741 10.8164 16.9477 11.2135 17.0655C13.4143 17.7184 15.3955 16.5569 16.3276 14.6683C16.511 14.2968 16.9607 14.1443 17.3321 14.3276Z',
  d6: 'M14.0671 9.75766C13.6548 9.79471 13.2903 9.49053 13.2531 9.07811C13.2158 8.66557 13.5201 8.30095 13.9326 8.2637C13.9819 8.26093 14.1377 8.25188 14.2213 8.25063C14.3875 8.24813 14.6185 8.25222 14.8797 8.27903C15.3737 8.32975 16.0986 8.47293 16.6624 8.92067C17.0532 9.23109 17.3496 9.60981 17.5554 9.92189C17.8349 10.3458 17.7984 10.8459 17.5422 11.2126C17.3008 11.5582 16.8975 11.75 16.4764 11.75C15.6943 11.75 14.9324 11.0217 15.2175 10.1172L15.292 9.88098C15.1212 9.82816 14.928 9.79188 14.7265 9.77119C14.537 9.75174 14.3665 9.74861 14.2438 9.75046C14.183 9.75137 14.098 9.75592 14.0671 9.75766Z',
  d7: 'M7.06715 9.75766C6.65475 9.79471 6.29032 9.49053 6.25309 9.07811C6.21584 8.66557 6.52007 8.30095 6.93261 8.2637C6.98187 8.26093 7.13769 8.25188 7.22129 8.25063C7.3875 8.24813 7.61848 8.25222 7.87965 8.27903C8.37374 8.32975 9.09859 8.47293 9.66236 8.92067C10.0532 9.23109 10.3496 9.60981 10.5554 9.92189C10.8349 10.3458 10.7984 10.8459 10.5422 11.2126C10.3008 11.5582 9.89752 11.75 9.47644 11.75C8.69425 11.75 7.93235 11.0217 8.2175 10.1172L8.29196 9.88098C8.12123 9.82816 7.92804 9.79188 7.72649 9.77119C7.537 9.75174 7.36647 9.74861 7.24383 9.75046C7.18301 9.75137 7.09803 9.75592 7.06715 9.75766Z',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM17.673 15.3318C16.4833 17.7423 13.8216 19.4035 10.7871 18.5033L11.2137 17.0652C13.4145 17.7181 15.3958 16.5567 16.3278 14.668L17.673 15.3318ZM7.13498 8.25063C7.04997 8.25188 6.8418 8.26367 6.8418 8.26367L6.97823 9.75775C6.97823 9.75775 7.45603 9.75183 7.64873 9.77128C7.85368 9.79197 8.05014 9.82826 8.22375 9.88107L8.14804 10.1173C7.85807 11.0219 8.63285 11.7502 9.42826 11.7502C9.85645 11.7502 10.2665 11.5584 10.5121 11.2128C10.7725 10.8461 10.8097 10.3459 10.5254 9.92198C10.3161 9.60989 10.0148 9.23115 9.61732 8.9207C9.04402 8.47295 8.30692 8.32975 7.80448 8.27903C7.53889 8.25222 7.304 8.24813 7.13498 8.25063ZM13.9602 8.26367L14.101 9.75743C14.2257 9.75558 14.5744 9.75183 14.7671 9.77128C14.972 9.79197 15.1685 9.82826 15.3421 9.88107L15.2664 10.1173C14.9764 11.0219 15.7512 11.7502 16.5466 11.7502C16.9748 11.7502 17.3849 11.5584 17.6304 11.2128C17.8909 10.8461 17.928 10.3459 17.6438 9.92198C17.4345 9.60989 17.1332 9.23115 16.7357 8.9207C16.1624 8.47295 15.4253 8.32975 14.9228 8.27903C14.6572 8.25222 14.4224 8.24813 14.2533 8.25063C14.1683 8.25188 13.9602 8.26367 13.9602 8.26367Z',
};

export const IconSmartStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-stroke-rounded IconSmartStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSmartDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-duotone-rounded IconSmartDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSmartTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-twotone-rounded IconSmartTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSmartSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-solid-rounded IconSmartSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSmartBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-bulk-rounded IconSmartBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconSmartStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-stroke-sharp IconSmartStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconSmartSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="smart-solid-sharp IconSmartSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSmart: TheIconSelfPack = {
  name: 'Smart',
  StrokeRounded: IconSmartStrokeRounded,
  DuotoneRounded: IconSmartDuotoneRounded,
  TwotoneRounded: IconSmartTwotoneRounded,
  SolidRounded: IconSmartSolidRounded,
  BulkRounded: IconSmartBulkRounded,
  StrokeSharp: IconSmartStrokeSharp,
  SolidSharp: IconSmartSolidSharp,
};