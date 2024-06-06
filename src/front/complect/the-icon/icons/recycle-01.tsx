import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.9999 15.9988C16.4999 16.999 14.6842 18.9772 14 22M15 19.3372C12.6321 14.0106 17.4087 12.2141 21.0443 12.0143C21.4831 11.9902 21.7025 11.9782 21.86 12.1336C22.0176 12.289 22.0085 12.5106 21.9903 12.9536C21.8394 16.638 20.3286 21.707 15 19.3372Z',
  d2: 'M11 20H6.02099C3.73502 20 2.59203 20 2.15185 19.2655C1.71168 18.531 2.2625 17.5428 3.36416 15.5666L4.79185 13.0054C5.53109 11.6793 5.90071 11.0162 6.47924 11.0003C7.05776 10.9844 7.46426 11.6261 8.27725 12.9095L8.97855 14.0166',
  d3: 'M8 8.03384L8.99165 6.15531C10.4526 3.38777 11.1831 2.004 12.2929 2.00001C13.4027 1.99601 14.1419 3.37449 15.6204 6.13145L15.8647 6.58709C16.7821 8.29766 17.2407 9.15294 16.8728 9.68491C16.5048 10.2169 15.6024 10.0032 13.7975 9.5758L13.715 9.55628',
  d4: 'M6.04867 20C3.74696 20 2.5961 20 2.1529 19.2633C1.70969 18.5266 2.26431 17.5355 3.37355 15.5533L9.03977 6.11395C10.3455 3.64999 11.0717 2.27961 12 2C12.9283 2.27961 13.6545 3.64999 14.9602 6.11395L18.7105 12.3616C15.7357 13.1105 13.1232 15.1147 15.0003 19.3372L15.5 20H6.04867Z',
  d5: 'M17.5444 8.17425C17.343 7.629 16.9829 6.95455 16.5668 6.17528C15.8819 4.89214 15.0074 3.2539 14.4722 2.52549C13.931 1.78891 13.2287 1.1212 12.2072 1.12489C11.1859 1.12859 10.4881 1.80109 9.95173 2.5414C9.42122 3.27358 8.86285 4.33623 8.18602 5.62433L8.186 5.62436L7.18582 7.5277C6.93558 8.0039 7.11701 8.59372 7.59104 8.8451C8.06508 9.09648 8.65222 8.91423 8.90246 8.43803L9.86492 6.60646C10.589 5.22854 11.0832 4.29335 11.5212 3.68895C11.963 3.07911 12.1583 3.07508 12.2142 3.07488C12.2699 3.07468 12.4648 3.07702 12.9104 3.68349C13.3519 4.28441 14.1009 5.6821 14.8334 7.05431C14.8332 7.05385 14.8329 7.05338 14.8327 7.05292L14.8342 7.0558C14.8339 7.05531 14.8337 7.05481 14.8334 7.05431C15.2872 7.90478 15.5996 8.51676 15.7474 8.91694C15.3571 8.88262 14.7111 8.73173 13.8146 8.51848C13.293 8.39441 12.77 8.7186 12.6465 9.24259C12.523 9.76658 12.8457 10.2919 13.3673 10.416C14.178 10.6089 15.0508 10.8166 15.6079 10.862C16.1695 10.9078 16.9629 10.8605 17.454 10.1473C17.9222 9.4673 17.742 8.70946 17.5444 8.17425Z',
  d6: 'M14.8327 7.05292C14.8329 7.05338 14.8332 7.05385 14.8334 7.05431C14.8337 7.05481 14.8339 7.05531 14.8342 7.0558L14.8327 7.05292Z',
  d7: 'M9.13314 12.2149L9.8138 13.2943C10.1006 13.7492 9.96609 14.3516 9.51327 14.6397C9.06044 14.9279 8.46083 14.7927 8.17398 14.3378L7.49332 13.2584C7.08125 12.6049 6.80651 12.1845 6.59767 11.9417C6.40291 12.1955 6.15287 12.6296 5.77815 13.3049L4.39248 15.802C3.84177 16.7944 3.48585 17.4413 3.30367 17.9278C3.21631 18.1611 3.20208 18.3589 3.19987 18.4314C3.26945 18.4666 3.46437 18.5588 3.71466 18.5957C4.23555 18.6723 4.98176 18.6749 6.12337 18.6749H10.9558C11.4919 18.6749 11.9264 19.1114 11.9264 19.6499C11.9264 20.1883 11.4919 20.6249 10.9558 20.6249L6.04718 20.6249H6.0471C5.00293 20.6249 4.112 20.625 3.4332 20.525C2.72994 20.4215 1.97641 20.1739 1.53558 19.4349C1.09196 18.6913 1.23721 17.9078 1.48682 17.2412C1.72647 16.6012 2.15686 15.8257 2.65925 14.9205L4.11673 12.294C4.44598 11.7005 4.74485 11.1617 5.0391 10.7783C5.35126 10.3716 5.82192 9.92041 6.54144 9.90053C7.26062 9.88065 7.75541 10.3047 8.08969 10.6933C8.40493 11.0598 8.77098 11.6404 9.13314 12.2149Z',
  d8: 'M21.635 11.1348C21.8758 11.1597 22.1507 11.2409 22.3868 11.4738C22.624 11.7077 22.7082 11.9831 22.7362 12.2231C22.7583 12.4137 22.7477 12.6689 22.7398 12.8585C22.6625 14.7462 22.2384 17.1212 21.0392 18.7369C20.4238 19.5659 19.5864 20.2172 18.4826 20.4637C17.6246 20.6554 16.6643 20.5893 15.5999 20.2452C16.3843 18.5385 17.5604 17.3682 18.5549 16.705C19.0144 16.3986 19.1385 15.7777 18.8321 15.3182C18.5257 14.8587 17.9048 14.7346 17.4453 15.041C16.2938 15.8089 14.9957 17.0762 14.0518 18.8636C14.1289 19.077 14.2165 19.2942 14.3148 19.5152C14.3902 19.6848 14.5257 19.8204 14.6953 19.8959C15.0048 20.0335 15.3063 20.1495 15.5999 20.2444C15.3431 20.8032 15.1283 21.4194 14.9755 22.0942C14.8536 22.6329 14.3181 22.9707 13.7795 22.8488C13.2408 22.7269 12.903 22.1913 13.0249 21.6527C13.2604 20.6122 13.6187 19.6832 14.0515 18.8635C13.6304 17.6981 13.5223 16.6477 13.697 15.7106C13.9054 14.593 14.5012 13.7166 15.2876 13.0538C16.8233 11.7596 19.1211 11.243 21.0033 11.1396C21.1907 11.1292 21.4447 11.1151 21.635 11.1348Z',
  d9: 'M17.9999 15.9988C16.4999 16.999 14.6842 18.9772 14 22M15 19.3372C12.6321 14.0106 17.5 12 22 12C22 16.5 20.3286 21.707 15 19.3372Z',
  d10: 'M11 20H2L7 11L8.5 13.5',
  d11: 'M13.502 9.5L16.445 10L12.0002 2L8.11133 9',
  d12: 'M15.4592 13.6112C17.1342 12.2919 19.6758 11.7793 21.9987 11.7793H22.7487V12.5293C22.7487 14.8312 22.3279 17.4443 21.1139 19.2006C20.4927 20.0992 19.6425 20.8018 18.5214 21.0805C17.6474 21.2978 16.6721 21.2416 15.5991 20.8989C16.3835 19.1929 17.5592 18.0231 18.5535 17.3601L17.4439 15.6961C16.2924 16.4639 14.9945 17.731 14.0506 19.5181C13.6297 18.3452 13.5286 17.2776 13.7262 16.3211C13.9615 15.182 14.6032 14.2854 15.4592 13.6112Z',
  d13: 'M13.0234 22.3085C13.2591 21.2676 13.6176 20.3381 14.0506 19.5181C14.1275 19.7323 14.215 19.95 14.3133 20.1712L14.4305 20.4346L14.6939 20.5518C15.0029 20.6892 15.3047 20.8048 15.5991 20.8989C15.342 21.458 15.127 22.0747 14.9741 22.7501L13.0234 22.3085Z',
  d14: 'M7.23334 10.2501C7.5905 10.2442 7.92371 10.4292 8.10749 10.7355L9.60749 13.2355L7.89251 14.2645L7.28331 13.2492L3.94952 19.25H11.25V21.25H2.25C1.89568 21.25 1.56781 21.0625 1.38813 20.7571C1.20844 20.4517 1.20377 20.0741 1.37584 19.7644L6.37584 10.7644C6.54932 10.4521 6.87618 10.2561 7.23334 10.2501Z',
  d15: 'M12.2494 1.25C12.6125 1.24999 12.9471 1.44687 13.1235 1.76433L17.5683 9.76433C17.7551 10.1005 17.7325 10.5139 17.5104 10.8278C17.2882 11.1416 16.9058 11.3003 16.5267 11.2359L13.5836 10.7359L13.9186 8.76413L14.8087 8.91534L12.2494 4.30906L9.23464 9.73564L7.48633 8.76436L11.3752 1.76436C11.5516 1.4469 11.8862 1.25001 12.2494 1.25Z',
};

export const IconRecycle01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-01-stroke-rounded IconRecycle01StrokeRounded"
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

export const IconRecycle01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-01-duotone-rounded IconRecycle01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconRecycle01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-01-twotone-rounded IconRecycle01TwotoneRounded"
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

export const IconRecycle01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-01-solid-rounded IconRecycle01SolidRounded"
    >
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRecycle01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-01-bulk-rounded IconRecycle01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRecycle01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-01-stroke-sharp IconRecycle01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRecycle01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="recycle-01-solid-sharp IconRecycle01SolidSharp"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRecycle01: TheIconSelfPack = {
  name: 'Recycle01',
  StrokeRounded: IconRecycle01StrokeRounded,
  DuotoneRounded: IconRecycle01DuotoneRounded,
  TwotoneRounded: IconRecycle01TwotoneRounded,
  SolidRounded: IconRecycle01SolidRounded,
  BulkRounded: IconRecycle01BulkRounded,
  StrokeSharp: IconRecycle01StrokeSharp,
  SolidSharp: IconRecycle01SolidSharp,
};