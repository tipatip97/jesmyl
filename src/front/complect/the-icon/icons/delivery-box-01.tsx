import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 13.4286V8H22V13.4286C22 17.4692 22 19.4895 20.6983 20.7447C19.3965 22 17.3014 22 13.1111 22H10.8889C6.69863 22 4.6035 22 3.30175 20.7447C2 19.4895 2 17.4692 2 13.4286Z',
  d2: 'M2 8L2.96154 5.69231C3.70726 3.90257 4.08013 3.0077 4.8359 2.50385C5.59167 2 6.56112 2 8.5 2H15.5C17.4389 2 18.4083 2 19.1641 2.50385C19.9199 3.0077 20.2927 3.90257 21.0385 5.69231L22 8',
  d3: 'M12 8V2',
  d4: 'M10 12H14',
  d5: 'M8.52755 1.25L15.4724 1.25H15.4725C16.3755 1.24998 17.1309 1.24996 17.75 1.31454C18.4047 1.38284 18.9966 1.53023 19.5432 1.87979C20.0898 2.22936 20.4593 2.69681 20.7768 3.2503C21.0771 3.77368 21.3676 4.44256 21.7149 5.24222L22.6746 7.45172C22.7397 7.60176 22.7612 7.75879 22.7446 7.9098C22.7482 7.93937 22.75 7.96947 22.75 8V13.4872C22.75 15.4578 22.75 17.0159 22.5801 18.2347C22.4051 19.4901 22.037 20.4957 21.2189 21.2846C20.4045 22.0699 19.3729 22.4198 18.0843 22.5869C16.8258 22.75 15.2146 22.75 13.1662 22.75H10.8338C8.78537 22.75 7.17418 22.75 5.9157 22.5869C4.6271 22.4198 3.59552 22.0699 2.78115 21.2846C1.96296 20.4957 1.59493 19.4901 1.41991 18.2347C1.24997 17.0159 1.24998 15.4578 1.25 13.4872V13.4872V13.4872V13.4872L1.25 8C1.25 7.96947 1.25182 7.93937 1.25537 7.90979C1.23877 7.75879 1.26026 7.60176 1.32543 7.45172L2.28512 5.24222C2.63242 4.44256 2.92293 3.77368 3.22319 3.2503C3.54072 2.69681 3.91021 2.22936 4.45681 1.87979C5.0034 1.53023 5.59532 1.38284 6.25004 1.31454C6.86913 1.24996 7.6245 1.24998 8.52752 1.25H8.52755ZM3.53042 7.25L11 7.25V3.12494H8.57963C7.61098 3.12494 6.96239 3.12622 6.46133 3.17849C5.98402 3.22828 5.73295 3.31706 5.54097 3.43984C5.34898 3.56262 5.16699 3.75079 4.9355 4.1543C4.69249 4.57789 4.4418 5.15172 4.06924 6.00946L3.53042 7.25ZM13 7.25L20.4696 7.25L19.9308 6.00946C19.5582 5.15172 19.3075 4.57789 19.0645 4.1543C18.833 3.75079 18.651 3.56262 18.459 3.43984C18.2671 3.31706 18.016 3.22828 17.5387 3.17849C17.0376 3.12622 16.389 3.12494 15.4204 3.12494L13 3.12494V7.25ZM9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12Z',
  d6: 'M1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H22C22.4142 7.25 22.75 7.58579 22.75 8V13.4872C22.75 15.4578 22.75 17.0159 22.5801 18.2347C22.4051 19.4901 22.037 20.4957 21.2189 21.2846C20.4045 22.0699 19.3729 22.4198 18.0843 22.5869C16.8258 22.75 15.2146 22.75 13.1662 22.75H10.8338C8.78537 22.75 7.17418 22.75 5.9157 22.5869C4.6271 22.4198 3.59552 22.0699 2.78115 21.2846C1.96296 20.4957 1.59493 19.4901 1.4199 18.2347C1.24997 17.0159 1.24998 15.4578 1.25 13.4872V13.4872V8Z',
  d7: 'M9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12Z',
  d8: 'M8.52755 1.25H15.4724C16.3755 1.24998 17.1309 1.24996 17.75 1.31454C18.4047 1.38284 18.9966 1.53023 19.5432 1.87979C20.0898 2.22936 20.4593 2.69681 20.7768 3.2503C21.0771 3.77368 21.3676 4.44256 21.7149 5.24222L22.6746 7.45172C22.7397 7.60176 22.7612 7.75879 22.7446 7.9098C22.7001 7.53812 22.3837 7.25 22 7.25H20.4696L19.9308 6.00946C19.5582 5.15173 19.3075 4.57789 19.0645 4.1543C18.833 3.75079 18.651 3.56262 18.459 3.43984C18.2671 3.31706 18.016 3.22828 17.5387 3.17849C17.0376 3.12622 16.389 3.12494 15.4204 3.12494H13V7.25H11V3.12494H8.57963C7.61098 3.12494 6.96239 3.12622 6.46133 3.17849C5.98402 3.22828 5.73295 3.31706 5.54097 3.43984C5.34898 3.56262 5.16699 3.75079 4.9355 4.1543C4.69249 4.57789 4.4418 5.15173 4.06924 6.00946L3.53042 7.25H2C1.61632 7.25 1.29992 7.53811 1.25537 7.90979C1.23877 7.75879 1.26026 7.60176 1.32543 7.45172L2.28512 5.24223C2.63242 4.44256 2.92293 3.77368 3.22319 3.2503C3.54072 2.69681 3.91021 2.22936 4.45681 1.87979C5.0034 1.53023 5.59532 1.38284 6.25004 1.31454C6.86913 1.24996 7.62453 1.24998 8.52755 1.25Z',
  d9: 'M2 22V8H22V22H2Z',
  d10: 'M2 8L5 2L19 2.00001L22 8',
  d11: 'M9 12H15',
  d12: 'M19.5131 1.25001L4.47905 1.25L1.25 7.80279L1.25 22C1.25 22.4142 1.58579 22.75 2 22.75L22 22.75C22.4142 22.75 22.75 22.4142 22.75 22L22.75 7.80279L19.5131 1.25001ZM20.2683 7.25L18.2948 3.25L12.9842 3.25V7.25L20.2683 7.25ZM11.0107 7.25V3.25L5.70005 3.25L3.72656 7.25L11.0107 7.25ZM9 13H15V11H9L9 13Z',
};

export const IconDeliveryBox01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-01-stroke-rounded IconDeliveryBox01StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-01-duotone-rounded IconDeliveryBox01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-01-twotone-rounded IconDeliveryBox01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-01-solid-rounded IconDeliveryBox01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-01-bulk-rounded IconDeliveryBox01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDeliveryBox01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-01-stroke-sharp IconDeliveryBox01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDeliveryBox01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="delivery-box-01-solid-sharp IconDeliveryBox01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDeliveryBox01: TheIconSelfPack = {
  name: 'DeliveryBox01',
  StrokeRounded: IconDeliveryBox01StrokeRounded,
  DuotoneRounded: IconDeliveryBox01DuotoneRounded,
  TwotoneRounded: IconDeliveryBox01TwotoneRounded,
  SolidRounded: IconDeliveryBox01SolidRounded,
  BulkRounded: IconDeliveryBox01BulkRounded,
  StrokeSharp: IconDeliveryBox01StrokeSharp,
  SolidSharp: IconDeliveryBox01SolidSharp,
};