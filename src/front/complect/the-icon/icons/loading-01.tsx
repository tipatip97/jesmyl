import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.2014 2H6.79876C5.341 2 4.06202 2.9847 4.0036 4.40355C3.93009 6.18879 5.18564 7.37422 6.50435 8.4871C8.32861 10.0266 9.24075 10.7964 9.33642 11.7708C9.35139 11.9233 9.35139 12.0767 9.33642 12.2292C9.24075 13.2036 8.32862 13.9734 6.50435 15.5129C5.14932 16.6564 3.9263 17.7195 4.0036 19.5964C4.06202 21.0153 5.341 22 6.79876 22L17.2014 22C18.6591 22 19.9381 21.0153 19.9965 19.5964C20.043 18.4668 19.6244 17.342 18.7352 16.56C18.3298 16.2034 17.9089 15.8615 17.4958 15.5129C15.6715 13.9734 14.7594 13.2036 14.6637 12.2292C14.6487 12.0767 14.6487 11.9233 14.6637 11.7708C14.7594 10.7964 15.6715 10.0266 17.4958 8.4871C18.8366 7.35558 20.0729 6.25809 19.9965 4.40355C19.9381 2.9847 18.6591 2 17.2014 2Z',
  d2: 'M9 21.6381C9 21.1962 9 20.9752 9.0876 20.7821C9.10151 20.7514 9.11699 20.7214 9.13399 20.6923C9.24101 20.509 9.42211 20.3796 9.78432 20.1208C10.7905 19.4021 11.2935 19.0427 11.8652 19.0045C11.955 18.9985 12.045 18.9985 12.1348 19.0045C12.7065 19.0427 13.2095 19.4021 14.2157 20.1208C14.5779 20.3796 14.759 20.509 14.866 20.6923C14.883 20.7214 14.8985 20.7514 14.9124 20.7821C15 20.9752 15 21.1962 15 21.6381V22H9V21.6381Z',
  d3: 'M6.79864 2H17.2012C18.659 2 19.938 2.9847 19.9964 4.40355C20.0727 6.25809 18.8364 7.35558 17.4956 8.4871C15.6714 10.0266 14.7592 10.7964 14.6636 11.7708C14.6486 11.9233 14.6486 12.0767 14.6636 12.2292C14.7592 13.2036 15.6714 13.9734 17.4956 15.5129C17.6297 15.6261 17.7647 15.7385 17.8996 15.851C18.1804 16.0851 18.4613 16.3192 18.7351 16.56C19.6243 17.342 20.0429 18.4668 19.9964 19.5964C19.938 21.0153 18.659 22 17.2012 22H14.9999V21.6381C14.9999 21.1962 14.9999 20.9752 14.9123 20.7821C14.8984 20.7514 14.8829 20.7214 14.8659 20.6923C14.7589 20.509 14.5778 20.3796 14.2156 20.1209C13.2095 19.4021 12.7064 19.0427 12.1347 19.0045C12.0449 18.9985 11.9548 18.9985 11.8651 19.0045C11.2934 19.0427 10.7903 19.4021 9.7842 20.1208C9.422 20.3796 9.24089 20.509 9.13387 20.6923C9.11688 20.7214 9.10139 20.7514 9.08748 20.7821C8.99988 20.9752 8.99988 21.1962 8.99988 21.6381V22L6.79864 22C5.34088 22 4.0619 21.0153 4.00348 19.5964C3.92618 17.7195 5.1492 16.6564 6.50423 15.5129C8.3285 13.9734 9.24063 13.2036 9.3363 12.2292C9.35127 12.0767 9.35127 11.9233 9.3363 11.7708C9.24063 10.7964 8.3285 10.0266 6.50423 8.4871C5.18552 7.37422 3.92997 6.18879 4.00348 4.40355C4.0619 2.9847 5.34088 2 6.79864 2Z',
  d4: 'M6.94315 1.25C5.13681 1.25 3.33751 2.50234 3.25421 4.53599C3.16084 6.81554 4.78989 8.26192 6.02989 9.3138C6.93644 10.0828 7.54545 10.6018 7.94968 11.0417C8.34207 11.4687 8.42619 11.7018 8.44277 11.8715C8.45112 11.957 8.45112 12.043 8.44277 12.1285C8.42619 12.2982 8.34207 12.5313 7.94968 12.9583C7.54545 13.3982 6.93644 13.9172 6.02989 14.6862L5.97859 14.7297C4.72238 15.7949 3.15823 17.1212 3.25421 19.464C3.33751 21.4977 5.13681 22.75 6.94315 22.75L17.0569 22.75C18.8632 22.75 20.6625 21.4977 20.7458 19.464C20.8019 18.0954 20.2966 16.7007 19.1902 15.7225C18.9144 15.4787 18.6238 15.2351 18.3453 15.0019L18.3441 15.0008C18.216 14.8935 18.0904 14.7883 17.9701 14.6862C17.0636 13.9172 16.4546 13.3982 16.0503 12.9583C15.6579 12.5313 15.5738 12.2982 15.5573 12.1285C15.5489 12.043 15.5489 11.957 15.5573 11.8715C15.5738 11.7018 15.6579 11.4687 16.0503 11.0417C16.4546 10.6018 17.0636 10.0828 17.9701 9.3138L17.9858 9.30048C19.2365 8.23957 20.8417 6.87794 20.7458 4.53599C20.6625 2.50234 18.8632 1.25 17.0569 1.25H6.94315ZM8.2708 20.1882C8.13113 20.4275 8.10416 20.7955 8.49392 20.7955L15.507 20.7955C15.8967 20.7955 15.8698 20.4275 15.7301 20.1882C15.51 19.8112 15.1529 19.5587 14.8733 19.361C14.0168 18.7491 13.1085 17.9997 11.9998 18C10.8916 18.0003 9.98363 18.7494 9.1276 19.361C8.84798 19.5587 8.49084 19.8112 8.2708 20.1882Z',
  d5: 'M6.94315 0.949219C5.13681 0.949219 3.33751 2.20156 3.25421 4.23521C3.16084 6.51476 4.78989 7.96114 6.02989 9.01301C6.93644 9.78203 7.54545 10.301 7.94968 10.7409C8.34207 11.1679 8.42619 11.4011 8.44277 11.5707C8.45112 11.6562 8.45112 11.7422 8.44277 11.8277C8.42619 11.9974 8.34207 12.2305 7.94968 12.6575C7.54545 13.0974 6.93644 13.6164 6.02989 14.3854L5.97859 14.4289C4.72238 15.4941 3.15823 16.8204 3.25421 19.1632C3.33751 21.1969 5.13681 22.4492 6.94315 22.4492L17.0569 22.4492C18.8632 22.4492 20.6625 21.1969 20.7458 19.1632C20.8019 17.7946 20.2966 16.3999 19.1902 15.4217C18.9144 15.1779 18.6238 14.9344 18.3453 14.7011L18.3441 14.7001C18.216 14.5927 18.0904 14.4875 17.9701 14.3854C17.0636 13.6164 16.4546 13.0974 16.0503 12.6575C15.6579 12.2305 15.5738 11.9974 15.5573 11.8277C15.5489 11.7422 15.5489 11.6562 15.5573 11.5707C15.5738 11.4011 15.6579 11.1679 16.0503 10.7409C16.4546 10.301 17.0636 9.78203 17.9701 9.01301L17.9858 8.9997C19.2365 7.93879 20.8417 6.57715 20.7458 4.23521C20.6625 2.20156 18.8632 0.949219 17.0569 0.949219H6.94315ZM8.2708 19.8874C8.13113 20.1267 8.10416 20.4947 8.49392 20.4947L15.507 20.4947C15.8967 20.4947 15.8698 20.1267 15.7301 19.8874C15.51 19.5104 15.1529 19.2579 14.8733 19.0602C14.0168 18.4483 13.1085 17.699 11.9998 17.6992C10.8916 17.6995 9.98363 18.4486 9.1276 19.0602C8.84798 19.2579 8.49084 19.5104 8.2708 19.8874Z',
  d6: 'M8.26983 19.8874C8.13017 20.1267 8.10319 20.4947 8.49295 20.4947L15.506 20.4947C15.8958 20.4947 15.8688 20.1267 15.7291 19.8874C15.5091 19.5104 15.1519 19.2579 14.8723 19.0602C14.0159 18.4483 13.1075 17.699 11.9988 17.6992C10.8907 17.6995 9.98267 18.4486 9.12663 19.0602C8.84702 19.2579 8.48987 19.5104 8.26983 19.8874Z',
  d7: 'M19 2V5C19 8.86599 15.866 12 12 12M5 2V5C5 8.86599 8.13401 12 12 12M12 12C15.866 12 19 15.134 19 19V22M12 12C8.13401 12 5 15.134 5 19V22',
  d8: 'M3 2H21',
  d9: 'M3 22H21',
  d10: 'M9 22H15V19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19V22Z',
  d11: 'M15.3302 12C17.9438 10.7544 19.75 8.08811 19.75 5V1.25H4.25V5C4.25 8.08811 6.05618 10.7544 8.66976 12C6.05618 13.2456 4.25 15.9119 4.25 19V22.75L8.25 22.75V19C8.25 16.9289 9.92893 15.25 12 15.25C14.0711 15.25 15.75 16.9289 15.75 19V22.75H19.75V19C19.75 15.9119 17.9438 13.2456 15.3302 12Z',
  d12: 'M21 3.25H3V1.25H21V3.25Z',
  d13: 'M21 22.75H3V20.75H21V22.75Z',
};

export const IconLoading01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="loading-01-stroke-rounded IconLoading01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconLoading01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="loading-01-duotone-rounded IconLoading01DuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoading01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="loading-01-twotone-rounded IconLoading01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoading01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="loading-01-solid-rounded IconLoading01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLoading01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="loading-01-bulk-rounded IconLoading01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLoading01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="loading-01-stroke-sharp IconLoading01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLoading01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="loading-01-solid-sharp IconLoading01SolidSharp"
    >
      <path 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLoading01: TheIconSelfPack = {
  name: 'Loading01',
  StrokeRounded: IconLoading01StrokeRounded,
  DuotoneRounded: IconLoading01DuotoneRounded,
  TwotoneRounded: IconLoading01TwotoneRounded,
  SolidRounded: IconLoading01SolidRounded,
  BulkRounded: IconLoading01BulkRounded,
  StrokeSharp: IconLoading01StrokeSharp,
  SolidSharp: IconLoading01SolidSharp,
};