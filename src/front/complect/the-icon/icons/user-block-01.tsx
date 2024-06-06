import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.97679 14.053 10.8425 13.6575 13.5 14.2952',
  d2: 'M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z',
  d3: 'M16.05 16.05L20.95 20.95M22 18.5C22 16.567 20.433 15 18.5 15C16.567 15 15 16.567 15 18.5C15 20.433 16.567 22 18.5 22C20.433 22 22 20.433 22 18.5Z',
  d4: 'M5.09548 15.7585C5.27346 15.6578 5.43687 15.5654 5.57757 15.4816C8.89519 13.5061 13.1048 13.5061 16.4224 15.4816C16.4721 15.5111 16.5246 15.5418 16.5795 15.5735C15.6281 16.1991 15 17.2762 15 18.5C15 19.9207 15.8464 21.1436 17.0625 21.6921C16.5509 21.8888 16.0034 22 15.4091 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.678069 18.2582 3.48398 16.6704 5.09548 15.7585Z',
  d5: 'M6.625 6.375C6.625 3.4755 8.9755 1.125 11.875 1.125C14.7745 1.125 17.125 3.4755 17.125 6.375C17.125 9.27449 14.7745 11.625 11.875 11.625C8.9755 11.625 6.625 9.27449 6.625 6.375Z',
  d6: 'M13.875 18.375C13.875 15.8897 15.8897 13.875 18.375 13.875C20.8603 13.875 22.875 15.8897 22.875 18.375C22.875 20.8603 20.8603 22.875 18.375 22.875C15.8897 22.875 13.875 20.8603 13.875 18.375ZM16.0472 17.4614C15.936 17.7444 15.875 18.0526 15.875 18.375C15.875 19.7557 16.9943 20.875 18.375 20.875C18.6974 20.875 19.0056 20.814 19.2886 20.7028L16.0472 17.4614ZM17.4614 16.0472L20.7028 19.2886C20.814 19.0056 20.875 18.6974 20.875 18.375C20.875 16.9943 19.7557 15.875 18.375 15.875C18.0526 15.875 17.7444 15.936 17.4614 16.0472Z',
  d7: 'M13.5351 13.4373C13.9711 13.5413 14.1891 13.5933 14.2413 13.7529C14.2935 13.9125 14.1298 14.1051 13.8023 14.4902C12.9121 15.537 12.375 16.8933 12.375 18.375C12.375 19.5143 12.6925 20.5794 13.2439 21.4866C13.5812 22.0416 13.7498 22.3191 13.6638 22.4721C13.5778 22.625 13.2811 22.625 12.6877 22.625H6.46604C4.64774 22.625 3.24195 21.7306 2.0705 20.6146C1.39149 19.9677 1.05302 19.2396 1.13783 18.4638C1.21757 17.7342 1.65623 17.1387 2.1179 16.6868C2.85606 15.9643 3.93357 15.3564 4.64639 14.9543C4.80901 14.8625 4.95275 14.7814 5.06904 14.7122C6.37389 13.9352 7.80596 13.4441 9.27043 13.2375C10.3343 13.0875 11.4161 13.0875 12.4799 13.2375C12.834 13.2875 13.1862 13.354 13.5351 13.4373Z',
  d8: 'M11.875 1.125C8.9755 1.125 6.625 3.4755 6.625 6.375C6.625 9.27449 8.9755 11.625 11.875 11.625C14.7745 11.625 17.125 9.27449 17.125 6.375C17.125 3.4755 14.7745 1.125 11.875 1.125Z',
  d9: 'M14.2413 13.7529C14.1891 13.5933 13.9711 13.5413 13.5351 13.4373C13.1862 13.354 12.834 13.2875 12.4799 13.2375C11.4161 13.0875 10.3343 13.0875 9.27043 13.2375C7.80596 13.4441 6.37389 13.9352 5.06904 14.7122C4.95278 14.7814 4.80908 14.8625 4.64651 14.9542C3.93369 15.3563 2.85606 15.9643 2.1179 16.6868C1.65623 17.1387 1.21757 17.7342 1.13783 18.4638C1.05302 19.2396 1.39149 19.9677 2.0705 20.6146C3.24195 21.7306 4.64774 22.625 6.46604 22.625H12.6877C13.2811 22.625 13.5778 22.625 13.6638 22.4721C13.7498 22.3191 13.5812 22.0416 13.2439 21.4866C12.6925 20.5794 12.375 19.5143 12.375 18.375C12.375 16.8933 12.9121 15.537 13.8023 14.4902C14.1298 14.1051 14.2935 13.9125 14.2413 13.7529Z',
  d10: 'M12 20H2C2 16.134 5.58172 13 10 13C11.4571 13 12.8233 13.3409 14 13.9365M14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z',
  d11: 'M13.75 18.25C13.75 15.7647 15.7647 13.75 18.25 13.75C20.7353 13.75 22.75 15.7647 22.75 18.25C22.75 20.7353 20.7353 22.75 18.25 22.75C15.7647 22.75 13.75 20.7353 13.75 18.25ZM15.9222 17.3364C15.811 17.6194 15.75 17.9276 15.75 18.25C15.75 19.6307 16.8693 20.75 18.25 20.75C18.5724 20.75 18.8806 20.689 19.1636 20.5778L15.9222 17.3364ZM17.3364 15.9222L20.5778 19.1636C20.689 18.8806 20.75 18.5724 20.75 18.25C20.75 16.8693 19.6307 15.75 18.25 15.75C17.9276 15.75 17.6194 15.811 17.3364 15.9222Z',
  d12: 'M10 1.25C7.37665 1.25 5.25 3.37665 5.25 6C5.25 8.62335 7.37665 10.75 10 10.75C12.6234 10.75 14.75 8.62335 14.75 6C14.75 3.37665 12.6234 1.25 10 1.25Z',
  d13: 'M10 12.25C5.26471 12.25 1.25 15.6289 1.25 20V20.75H12.794C12.4447 19.9889 12.25 19.1422 12.25 18.25C12.25 16.2822 13.1973 14.5356 14.6608 13.4415C13.3007 12.6837 11.6966 12.25 10 12.25Z',
};

export const IconUserBlock01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-01-stroke-rounded IconUserBlock01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserBlock01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-01-duotone-rounded IconUserBlock01DuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserBlock01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-01-twotone-rounded IconUserBlock01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserBlock01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-01-solid-rounded IconUserBlock01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconUserBlock01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-01-bulk-rounded IconUserBlock01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserBlock01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-01-stroke-sharp IconUserBlock01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserBlock01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-block-01-solid-sharp IconUserBlock01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserBlock01: TheIconSelfPack = {
  name: 'UserBlock01',
  StrokeRounded: IconUserBlock01StrokeRounded,
  DuotoneRounded: IconUserBlock01DuotoneRounded,
  TwotoneRounded: IconUserBlock01TwotoneRounded,
  SolidRounded: IconUserBlock01SolidRounded,
  BulkRounded: IconUserBlock01BulkRounded,
  StrokeSharp: IconUserBlock01StrokeSharp,
  SolidSharp: IconUserBlock01SolidSharp,
};