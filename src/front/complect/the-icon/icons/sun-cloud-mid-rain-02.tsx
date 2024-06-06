import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.4776 11.0091C17.485 11.0091 17.4925 11.0091 17.5 11.0091C19.9853 11.0091 22 13.0269 22 15.5159C22 17.2442 20.9257 18.2931 19.5 19M17.4776 11.0091C17.4924 10.8442 17.5 10.6772 17.5 10.5083C17.5 7.46617 15.0376 5 12 5C9.12324 5 6.76233 7.21197 6.52042 10.0303M17.4776 11.0091C17.3954 11.9219 17.091 12.7704 16.6189 13.5M6.52042 10.0303C3.98398 10.2721 2 12.4116 2 15.0152C2 16.8687 3.0055 18.1412 4.5 19M6.52042 10.0303C6.67826 10.0153 6.83823 10.0076 7 10.0076C7.91072 10.0076 8.76457 10.2514 9.5 10.6775',
  d2: 'M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494',
  d3: 'M12.0434 13L10.907 14.036C10.3596 14.596 10.3596 15.492 10.9358 16.052C11.224 16.332 11.6401 16.5 12.0434 16.5C12.4468 16.5 12.7797 16.36 13.0678 16.108C13.6441 15.548 13.6441 14.624 13.0678 14.064L12.0434 13Z',
  d4: 'M8.54345 18.5L7.40701 19.536C6.8596 20.096 6.85963 20.992 7.43585 21.552C7.72396 21.832 8.14009 22 8.54345 22C8.9468 22 9.27972 21.86 9.56783 21.608C10.1441 21.048 10.1441 20.124 9.56783 19.564L8.54345 18.5Z',
  d5: 'M15.5434 18.5L14.407 19.536C13.8596 20.096 13.8596 20.992 14.4358 21.552C14.724 21.832 15.1401 22 15.5434 22C15.9468 22 16.2797 21.86 16.5678 21.608C17.1441 21.048 17.1441 20.124 16.5678 19.564L15.5434 18.5Z',
  d6: 'M12 5C15.0376 5 17.5 7.46243 17.5 10.5C17.5 10.6686 17.4924 10.8354 17.4776 11.0001L17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.9853 19.9853 20 17.5 20H16.8743C16.8027 19.8413 16.7006 19.693 16.5678 19.564L15.5434 18.5L14.407 19.536C14.2724 19.6737 14.1709 19.8317 14.1029 20H9.87429C9.80271 19.8413 9.70056 19.693 9.56783 19.564L8.54345 18.5L7.40701 19.536C7.27242 19.6737 7.17092 19.8317 7.10294 20H7C4.23858 20 2 17.7614 2 15C2 12.4003 3.98398 10.2641 6.52042 10.0227C6.76233 7.20862 9.12324 5 12 5ZM12.0434 13L10.907 14.036C10.3596 14.596 10.3596 15.492 10.9359 16.052C11.224 16.332 11.6401 16.5 12.0434 16.5C12.4468 16.5 12.7797 16.36 13.0678 16.108C13.6441 15.548 13.6441 14.624 13.0678 14.064L12.0434 13Z',
  d7: 'M11.6651 12.5707C11.9654 12.2971 12.4289 12.3122 12.7107 12.6048L13.7273 13.6608C14.5968 14.5162 14.5935 15.9195 13.7175 16.7708C13.3043 17.1322 12.7703 17.375 12.1704 17.375C11.5733 17.375 10.9692 17.1319 10.5401 16.7148C9.66327 15.8627 9.66297 14.4906 10.4976 13.6367L11.6651 12.5707Z',
  d8: 'M8.16512 18.0707C8.46535 17.7971 8.92892 17.8122 9.21068 18.1048L10.2273 19.1608C11.0968 20.0162 11.0935 21.4195 10.2175 22.2708C9.80434 22.6322 9.27028 22.875 8.67039 22.875C8.07331 22.875 7.46924 22.6319 7.04009 22.2148C6.16327 21.3627 6.16297 19.9906 6.99763 19.1367L8.16512 18.0707Z',
  d9: 'M15.1651 18.0707C15.4654 17.7971 15.9289 17.8122 16.2107 18.1048L17.2273 19.1608C18.0968 20.0162 18.0935 21.4195 17.2175 22.2708C16.8043 22.6322 16.2703 22.875 15.6704 22.875C15.0733 22.875 14.4692 22.6319 14.0401 22.2148C13.1633 21.3627 13.163 19.9906 13.9976 19.1367L15.1651 18.0707Z',
  d10: 'M6.01793 9.29041C5.99187 9.41018 5.89894 9.50478 5.77975 9.53336C3.2528 10.1393 1.375 12.4125 1.375 15.125C1.375 17.3548 2.6442 19.2881 4.49958 20.242C4.6834 20.3365 4.897 20.2051 4.93379 20.0017C5.06047 19.3015 5.39148 18.632 5.92302 18.0882L7.15262 16.9622C7.45324 16.6882 7.80844 16.5107 8.17974 16.4284C8.37726 16.3846 8.51528 16.1823 8.4696 15.9852C8.19518 14.801 8.51922 13.5128 9.42302 12.5882L10.6517 11.463L10.6526 11.4622C11.5533 10.6412 12.944 10.6865 13.7893 11.5645L14.7936 12.6076C15.711 13.5213 16.0447 14.7988 15.7947 15.9772C15.7524 16.1764 15.8965 16.3774 16.0965 16.416C16.5367 16.5009 16.9555 16.7178 17.2893 17.0645L18.2936 18.1076C18.8764 18.6881 19.2237 19.4154 19.3353 20.1709C19.3649 20.3712 19.5667 20.5085 19.7517 20.4264C21.5916 19.6102 22.875 17.7675 22.875 15.625C22.875 13.066 21.0441 10.9346 18.6208 10.4693C18.4776 10.4418 18.3694 10.321 18.3591 10.1755C18.1287 6.93355 15.4256 4.375 12.125 4.375C9.13114 4.375 6.62951 6.47958 6.01793 9.29041Z',
  d11: 'M7.45678 1.86266C7.31176 1.32976 6.76219 1.01532 6.22929 1.16034C5.69638 1.30537 5.38194 1.85493 5.52697 2.38784L5.54068 2.43824C4.65648 2.83226 3.8993 3.41778 3.30852 4.1302L3.08472 4.00267C2.60486 3.72925 1.99421 3.8966 1.72079 4.37646C1.44737 4.85631 1.61472 5.46696 2.09458 5.74038L2.30013 5.85751C1.97547 6.71023 1.84135 7.64114 1.93583 8.58785L1.87015 8.60518C1.33614 8.74606 1.01744 9.29318 1.15833 9.82719C1.29922 10.3612 1.84633 10.6799 2.38034 10.539L2.45888 10.5183C2.57779 10.7779 2.71386 11.0265 2.86534 11.2628C3.31726 10.7648 3.85533 10.3464 4.45607 10.031C4.28246 9.73178 4.14462 9.40573 4.04955 9.05639C3.754 7.97035 3.93212 6.86407 4.46372 5.95517C4.99615 5.04484 5.88318 4.33251 7.00404 4.0368C8.12001 3.74237 9.25021 3.91983 10.1766 4.44291C10.184 4.44724 10.1922 4.4519 10.1996 4.45603C10.2815 4.50296 10.3618 4.55261 10.4404 4.60489C10.9763 4.45525 11.5413 4.37524 12.125 4.37524C12.4436 4.37524 12.7566 4.39908 13.0624 4.44507C13.0248 4.34457 12.9704 4.24844 12.8986 4.16085C12.6335 3.83747 12.3369 3.54372 12.0147 3.28289L12.1291 3.08745C12.4079 2.61074 12.2476 1.99823 11.7708 1.71935C11.2941 1.44048 10.6816 1.60085 10.4028 2.07756L10.2781 2.2906C9.40219 1.96263 8.44507 1.82839 7.47389 1.92553L7.45678 1.86266Z',
  d12: 'M17.9776 11.0091C17.985 11.0091 17.9925 11.0091 18 11.0091C20.4853 11.0091 22.5 13.0269 22.5 15.5159C22.5 17.2442 21.4257 18.2931 20 19M17.9776 11.0091C17.9924 10.8442 18 10.6772 18 10.5083C18 7.46617 15.5376 5 12.5 5C9.62324 5 7.26233 7.21197 7.02042 10.0303M17.9776 11.0091C17.8954 11.9219 17.591 12.7704 17.1189 13.5M7.02042 10.0303C4.48398 10.2721 2.5 12.4116 2.5 15.0152C2.5 16.8687 3.5055 18.1412 5 19M7.02042 10.0303C7.17826 10.0153 7.33823 10.0076 7.5 10.0076C8.41072 10.0076 9.26457 10.2514 10 10.6775',
  d13: 'M7.45538 4V2M7.45538 4C5.26267 4 3.48513 5.79086 3.48513 8M7.45538 4C8.67809 4 9.7717 4.55686 10.5 5.43258M1.5 8H3.48513M3.48513 8C3.48513 9.19469 4.00499 10.2671 4.82923 11M3.24459 3.75766L4.64829 5.17188',
  d14: 'M12.5434 13L11.407 14.036C10.8596 14.596 10.8596 15.492 11.4358 16.052C11.724 16.332 12.1401 16.5 12.5434 16.5C12.9468 16.5 13.2797 16.36 13.5678 16.108C14.1441 15.548 14.1441 14.624 13.5678 14.064L12.5434 13Z',
  d15: 'M9.04345 18.5L7.90701 19.536C7.3596 20.096 7.35963 20.992 7.93585 21.552C8.22396 21.832 8.64009 22 9.04345 22C9.4468 22 9.77972 21.86 10.0678 21.608C10.6441 21.048 10.6441 20.124 10.0678 19.564L9.04345 18.5Z',
  d16: 'M16.0434 18.5L14.907 19.536C14.3596 20.096 14.3596 20.992 14.9358 21.552C15.224 21.832 15.6401 22 16.0434 22C16.4468 22 16.7797 21.86 17.0678 21.608C17.6441 21.048 17.6441 20.124 17.0678 19.564L16.0434 18.5Z',
  d17: 'M14.1004 13.5358C14.9698 14.3913 14.9665 15.7946 14.0905 16.6459L14.0764 16.6596L14.0616 16.6726C13.6484 17.0339 13.1433 17.25 12.5434 17.25C11.9464 17.25 11.3423 17.007 10.9131 16.5899C10.0363 15.7377 10.036 14.3656 10.8707 13.5118L10.8858 13.4963L12.5775 11.9541L14.1004 13.5358Z',
  d18: 'M10.6004 19.0358C11.4698 19.8913 11.4665 21.2946 10.5905 22.1459L10.5764 22.1596L10.5616 22.1726C10.1484 22.5339 9.64333 22.75 9.04344 22.75C8.44636 22.75 7.84229 22.507 7.41314 22.0899C6.53631 21.2377 6.53602 19.8656 7.37068 19.0118L7.38578 18.9963L9.07753 17.4541L10.6004 19.0358Z',
  d19: 'M17.6004 19.0358C18.4698 19.8913 18.4665 21.2946 17.5905 22.1459L17.5764 22.1596L17.5616 22.1726C17.1484 22.5339 16.6433 22.75 16.0434 22.75C15.4464 22.75 14.8423 22.507 14.4131 22.0899C13.5363 21.2377 13.536 19.8656 14.3707 19.0118L14.3858 18.9963L16.0775 17.4541L17.6004 19.0358Z',
  d20: 'M6.353 8.36454C3.72664 8.89643 1.75 11.217 1.75 14C1.75 16.4491 3.28121 18.5406 5.43854 19.3694C5.60959 18.8563 5.89662 18.374 6.29801 17.9633L6.3433 17.917L8.80612 15.6719C8.60604 14.5411 8.94197 13.3391 9.79801 12.4633L9.8433 12.417L12.6457 9.8623L15.1686 12.4828C15.9828 13.2937 16.3373 14.3913 16.2319 15.4518L18.6686 17.9828C19.1107 18.4231 19.4173 18.9479 19.5882 19.5055C21.7114 18.8324 23.25 16.8459 23.25 14.5C23.25 11.8541 21.2927 9.66534 18.7469 9.30273C18.6428 5.94224 15.8858 3.25 12.5 3.25C9.43585 3.25 6.88731 5.45456 6.353 8.36454Z',
  d21: 'M5.70538 2.35111C5.07484 2.48056 4.48827 2.73001 3.96989 3.07449L3.20433 2.3032L1.78485 3.71212L2.55911 4.49218C2.21331 5.01742 1.96355 5.61191 1.83467 6.25H0.75V8.25H1.83468C2.05366 9.33422 2.62153 10.2919 3.41473 10.9973L4.74374 9.50272C4.1249 8.95242 3.73513 8.14859 3.73513 7.25C3.73513 5.5861 5.07198 4.25 6.70538 4.25C7.61697 4.25 8.4337 4.66374 8.98114 5.322L10.5189 4.04315C9.81277 3.19414 8.82841 2.5823 7.70538 2.35134V1.25H5.70538V2.35111Z',
};

export const IconSunCloudMidRain02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-02-stroke-rounded IconSunCloudMidRain02StrokeRounded"
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

export const IconSunCloudMidRain02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-02-duotone-rounded IconSunCloudMidRain02DuotoneRounded"
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
        strokeLinecap="round" 
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

export const IconSunCloudMidRain02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-02-twotone-rounded IconSunCloudMidRain02TwotoneRounded"
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
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconSunCloudMidRain02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-02-solid-rounded IconSunCloudMidRain02SolidRounded"
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

export const IconSunCloudMidRain02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-02-bulk-rounded IconSunCloudMidRain02BulkRounded"
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

export const IconSunCloudMidRain02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-02-stroke-sharp IconSunCloudMidRain02StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSunCloudMidRain02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sun-cloud-mid-rain-02-solid-sharp IconSunCloudMidRain02SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSunCloudMidRain02: TheIconSelfPack = {
  name: 'SunCloudMidRain02',
  StrokeRounded: IconSunCloudMidRain02StrokeRounded,
  DuotoneRounded: IconSunCloudMidRain02DuotoneRounded,
  TwotoneRounded: IconSunCloudMidRain02TwotoneRounded,
  SolidRounded: IconSunCloudMidRain02SolidRounded,
  BulkRounded: IconSunCloudMidRain02BulkRounded,
  StrokeSharp: IconSunCloudMidRain02StrokeSharp,
  SolidSharp: IconSunCloudMidRain02SolidSharp,
};