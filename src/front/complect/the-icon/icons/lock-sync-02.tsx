import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 11H22C21.497 5.94668 17.2229 2 12.0247 2C6.48823 2 2 6.47715 2 12C2 17.5228 6.48823 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2154 16',
  d2: 'M14.25 10.9824V9.1905C14.25 7.98072 13.2426 7 12 7C10.7574 7 9.75 7.98072 9.75 9.1905V10.9824M12 17C10.067 17 8.5 15.4744 8.5 13.5926C8.5 11.7107 10.067 10.1851 12 10.1851C13.933 10.1851 15.5 11.7107 15.5 13.5926C15.5 15.4744 13.933 17 12 17Z',
  d3: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 10.1855C10.067 10.1855 8.5 11.7111 8.5 13.593C8.5 15.4749 10.067 17.0004 12 17.0004C13.933 17.0004 15.5 15.4749 15.5 13.593C15.5 11.7111 13.933 10.1855 12 10.1855Z',
  d4: 'M12 6.25C10.3622 6.25 9 7.54769 9 9.1905V10.6476C8.22966 11.3974 7.75 12.436 7.75 13.5925C7.75 15.9074 9.67186 17.7499 12 17.7499C14.3281 17.7499 16.25 15.9074 16.25 13.5925C16.25 12.436 15.7703 11.3974 15 10.6476V9.1905C15 7.54769 13.6378 6.25 12 6.25ZM13.5 9.70204V9.1905C13.5 8.41375 12.8475 7.75 12 7.75C11.1525 7.75 10.5 8.41375 10.5 9.1905V9.70204C10.9675 9.52934 11.4734 9.43506 12 9.43506C12.5266 9.43506 13.0325 9.52934 13.5 9.70204Z',
  d5: 'M12.0242 3.20455C7.15095 3.20455 3.20455 7.14468 3.20455 12C3.20455 16.8553 7.15095 20.7955 12.0242 20.7955C15.6407 20.7955 18.7495 18.6249 20.1107 15.517C20.3273 15.0226 20.9036 14.7974 21.398 15.0139C21.8924 15.2305 22.1176 15.8068 21.9011 16.3012C20.2388 20.0964 16.4424 22.75 12.0242 22.75C6.07605 22.75 1.25 17.9393 1.25 12C1.25 6.06066 6.07605 1.25 12.0242 1.25C16.7393 1.25 20.7464 4.27188 22.2073 8.48024C22.4777 9.25909 22.6608 10.0783 22.7452 10.9259C22.7759 11.2348 22.6581 11.5399 22.4278 11.748C22.1975 11.956 21.882 12.0423 21.5778 11.9804L19.177 11.4917C18.8159 11.4183 18.5269 11.148 18.4294 10.7927C18.3319 10.4374 18.4426 10.0575 18.7155 9.81002L19.8123 8.81587C19.9676 8.67506 20.0453 8.60466 20.0641 8.50614C20.083 8.40761 20.0388 8.31772 19.9506 8.13793C18.5165 5.21632 15.5056 3.20455 12.0242 3.20455Z',
  d6: 'M19 10L22 11C21.497 5.94668 17.2229 2 12.0247 2C6.48823 2 2 6.47715 2 12C2 17.5228 6.48823 22 12.0247 22C16.1355 22 19.6684 19.5318 21.2154 16',
  d7: 'M12.0014 6.25C10.3636 6.25 9.0014 7.54769 9.0014 9.1905V10.6476C8.23106 11.3975 7.7514 12.4361 7.7514 13.5926C7.7514 15.9075 9.67327 17.75 12.0014 17.75C14.3295 17.75 16.2514 15.9075 16.2514 13.5926C16.2514 12.4361 15.7717 11.3975 15.0014 10.6476V9.1905C15.0014 7.54769 13.6392 6.25 12.0014 6.25ZM12.0014 9.43511C11.4748 9.43511 10.9689 9.52939 10.5014 9.70209V9.1905C10.5014 8.41375 11.1539 7.75 12.0014 7.75C12.8489 7.75 13.5014 8.41375 13.5014 9.1905V9.70209C13.0339 9.52939 12.528 9.43511 12.0014 9.43511Z',
  d8: 'M12.0249 3.20455C7.15166 3.20455 3.20525 7.14468 3.20525 12C3.20525 16.8553 7.15166 20.7955 12.0249 20.7955C15.6414 20.7955 18.7502 18.6249 20.1114 15.517L21.9018 16.3012C20.2395 20.0964 16.4431 22.75 12.0249 22.75C6.07675 22.75 1.2507 17.9393 1.2507 12C1.2507 6.06066 6.07675 1.25 12.0249 1.25C17.6102 1.25 22.2049 5.49073 22.7459 10.9259C22.7787 11.2556 22.6423 11.5794 22.3835 11.7862C22.1246 11.993 21.7787 12.0546 21.4644 11.9499L18.5326 10.9726L19.1507 9.11833L20.5036 9.56931C19.4465 5.89551 16.0516 3.20455 12.0249 3.20455Z',
};

export const IconLockSync02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-02-stroke-rounded IconLockSync02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLockSync02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-02-duotone-rounded IconLockSync02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
    </TheIconWrapper>
  );
};

export const IconLockSync02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-02-twotone-rounded IconLockSync02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLockSync02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-02-solid-rounded IconLockSync02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconLockSync02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-02-bulk-rounded IconLockSync02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockSync02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-02-stroke-sharp IconLockSync02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLockSync02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="lock-sync-02-solid-sharp IconLockSync02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfLockSync02: TheIconSelfPack = {
  name: 'LockSync02',
  StrokeRounded: IconLockSync02StrokeRounded,
  DuotoneRounded: IconLockSync02DuotoneRounded,
  TwotoneRounded: IconLockSync02TwotoneRounded,
  SolidRounded: IconLockSync02SolidRounded,
  BulkRounded: IconLockSync02BulkRounded,
  StrokeSharp: IconLockSync02StrokeSharp,
  SolidSharp: IconLockSync02SolidSharp,
};