import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7.72161 14.8947V11.5789M7.72161 11.5789V6.15789C7.72161 5.24227 8.45287 4.5 9.35494 4.5C10.257 4.5 10.9883 5.24226 10.9883 6.15789V10.6316L13.8601 11.084C15.6602 11.3581 16.5602 11.4951 17.1942 11.8806C18.2414 12.5174 19 13.4737 19 14.8697C19 15.8421 18.7632 16.4945 18.1876 18.2472C17.8224 19.3594 17.6398 19.9154 17.342 20.3556C16.8517 21.0804 16.1285 21.6095 15.2961 21.8524C14.7905 22 14.213 22 13.0581 22H11.7468C10.0813 22 9.24852 22 8.53345 21.6827C8.21038 21.5393 7.90896 21.3502 7.63815 21.121C7.03875 20.6138 6.66633 19.8577 5.92149 18.3456C5.31747 17.1194 5.01546 16.5063 5.00077 15.8707C4.99414 15.584 5.0303 15.298 5.108 15.0223C5.28029 14.411 5.72499 13.8951 6.61438 12.8634L7.72161 11.5789Z',
  d2: 'M13.3164 6C13.3164 3.79086 11.5255 2 9.31641 2C7.10727 2 5.31641 3.79086 5.31641 6',
  d3: 'M7.72161 6.17352V11.5792L6.61438 12.8636C5.72499 13.8953 5.28029 14.4112 5.108 15.0225C5.0303 15.2982 4.99414 15.5842 5.00077 15.8709C5.01546 16.5066 5.31747 17.1197 5.92149 18.3459C6.66633 19.858 7.03875 20.614 7.63815 21.1213C7.90896 21.3505 8.21038 21.5396 8.53345 21.6829C9.24852 22.0002 10.0813 22.0002 11.7468 22.0002H13.0581C14.213 22.0002 14.7905 22.0002 15.2961 21.8527C16.1285 21.6097 16.8517 21.0806 17.342 20.3559C17.6398 19.9157 17.8224 19.3596 18.1876 18.2475C18.7632 16.4947 19 15.8423 19 14.87C19 13.4739 18.2414 12.5176 17.1942 11.8809C16.5602 11.4954 15.6602 11.3583 13.8601 11.0843L10.9883 10.6318V6.17352C10.9883 5.25789 10.257 4.51562 9.35494 4.51562C8.45287 4.51562 7.72161 5.25789 7.72161 6.17352Z',
  d4: 'M6.97161 11.4253V6.2829C6.97161 4.96364 8.02815 3.875 9.35494 3.875C10.6817 3.875 11.7383 4.96364 11.7383 6.28289V10.1155L13.9995 10.4716L13.9996 10.4716C14.8771 10.6052 15.5724 10.7111 16.126 10.8331C16.6894 10.9574 17.1648 11.11 17.5839 11.3648C18.7884 12.0973 19.75 13.2675 19.75 14.9947C19.75 16.0294 19.5034 16.7768 19.0235 18.232L19.0234 18.232C18.6945 19.2343 18.3205 20.3727 17.9632 20.9009C17.376 21.7689 16.508 22.405 15.5062 22.6974C14.8962 22.8754 12.6132 22.8753 11.5748 22.875C10.0761 22.8756 9.09165 22.8759 8.22924 22.4932C7.84076 22.3208 7.47866 22.0936 7.15364 21.8185C6.43329 21.2089 5.99537 20.3191 5.32476 18.9566C5.0341 18.3665 4.70687 17.7021 4.54281 17.2878C4.37182 16.856 4.26112 16.4518 4.25097 16.013C4.24262 15.6518 4.28816 15.2914 4.38612 14.9438C4.50521 14.5213 4.71316 14.158 4.98635 13.7835C5.2483 13.4244 5.59859 13.018 6.02641 12.5218L6.02645 12.5217L6.97161 11.4253Z',
  d5: 'M9.31641 3.125C7.65955 3.125 6.31641 4.46815 6.31641 6.125C6.31641 6.67728 5.86869 7.125 5.31641 7.125C4.76412 7.125 4.31641 6.67728 4.31641 6.125C4.31641 3.36358 6.55498 1.125 9.31641 1.125C12.0778 1.125 14.3164 3.36358 14.3164 6.125C14.3164 6.67728 13.8687 7.125 13.3164 7.125C12.7641 7.125 12.3164 6.67728 12.3164 6.125C12.3164 4.46815 10.9733 3.125 9.31641 3.125Z',
  d6: 'M7.72161 15.5302V11M7.72161 11V6.25C7.72161 5.2835 8.45287 4.5 9.35494 4.5C10.257 4.5 10.9883 5.2835 10.9883 6.25V10H16.2C17.7464 10 19 11.3431 19 13V19C19 20.6569 17.7464 22 16.2 22H8.26667L5.92149 18.1426C5.108 16.8152 5.01546 16.2011 5.00077 15.5302C4.99414 15.2276 5.0303 14.9256 5.108 14.6346C5.28029 13.9894 5.725 13.4448 6.61438 12.3558L7.72161 11Z',
  d7: 'M6.97161 10.7327V6.25C6.97161 4.91887 7.99076 3.75 9.35494 3.75C10.7191 3.75 11.7383 4.91887 11.7383 6.25V9.25H16.2C18.2085 9.25 19.75 10.9785 19.75 13V19C19.75 21.0215 18.2085 22.75 16.2 22.75H7.84491L5.28202 18.5345L5.28134 18.5334C4.85661 17.8402 4.59751 17.2972 4.44604 16.8149C4.29053 16.3197 4.25916 15.9216 4.25095 15.5466C4.24278 15.1735 4.28732 14.8009 4.38338 14.4412C4.59799 13.6374 5.14091 12.9733 5.93082 12.007L6.03348 11.8814L6.97161 10.7327Z',
  d8: 'M9.31641 2.75C7.52148 2.75 6.06641 4.20507 6.06641 6H4.56641C4.56641 3.37665 6.69305 1.25 9.31641 1.25C11.9398 1.25 14.0664 3.37665 14.0664 6H12.5664C12.5664 4.20507 11.1113 2.75 9.31641 2.75Z',
};

export const IconTap04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-04-stroke-rounded IconTap04StrokeRounded"
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

export const IconTap04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-04-duotone-rounded IconTap04DuotoneRounded"
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

export const IconTap04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-04-twotone-rounded IconTap04TwotoneRounded"
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

export const IconTap04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-04-solid-rounded IconTap04SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTap04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-04-bulk-rounded IconTap04BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconTap04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-04-stroke-sharp IconTap04StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTap04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tap-04-solid-sharp IconTap04SolidSharp"
    >
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

export const iconPackOfTap04: TheIconSelfPack = {
  name: 'Tap04',
  StrokeRounded: IconTap04StrokeRounded,
  DuotoneRounded: IconTap04DuotoneRounded,
  TwotoneRounded: IconTap04TwotoneRounded,
  SolidRounded: IconTap04SolidRounded,
  BulkRounded: IconTap04BulkRounded,
  StrokeSharp: IconTap04StrokeSharp,
  SolidSharp: IconTap04SolidSharp,
};