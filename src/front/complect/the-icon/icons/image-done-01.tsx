import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 3.00024C7.02166 3.00024 4.78249 3.00024 3.39124 4.39149C2 5.78273 2 8.0219 2 12.5002C2 16.9786 2 19.2178 3.39124 20.609C4.78249 22.0002 7.02166 22.0002 11.5 22.0002C15.9783 22.0002 18.2175 22.0002 19.6088 20.609C21 19.2178 21 16.9786 21 12.5002C21 11.14 21 9.98632 20.961 9.00024',
  d2: 'M4.5 21.5002C8.87246 16.2752 13.7741 9.38425 20.9975 14.0426',
  d3: 'M14 6.00024C14 6.00024 15 6.00024 16 8.00024C16 8.00024 19.1765 3.00024 22 2.00024',
  d4: 'M3.39124 4.39149C2 5.78273 2 8.0219 2 12.5002C2 16.9786 2 19.2178 3.39124 20.609L4.58365 21.3993C4.84455 21.0868 5.10737 20.7687 5.37249 20.4478L5.37254 20.4478C9.52909 15.4171 14.2504 9.70295 20.9974 14.0541C21 13.5683 21 13.0512 21 12.5002C21 8.0219 21 5.78273 19.6088 4.39149C18.2175 3.00024 15.9783 3.00024 11.5 3.00024C7.02166 3.00024 4.78249 3.00024 3.39124 4.39149Z',
  d5: 'M11.4255 2L11.5 2C12.0523 2 12.5 2.44772 12.5 3C12.5 3.55229 12.0523 4 11.5 4C9.23256 4 7.63258 4.00212 6.42121 4.16499C5.2386 4.32399 4.5772 4.6195 4.09835 5.09835C3.6195 5.5772 3.32399 6.2386 3.16499 7.42121C3.00212 8.63258 3 10.2326 3 12.5C3 14.7674 3.00212 16.3674 3.16499 17.5788C3.32399 18.7614 3.6195 19.4228 4.09835 19.9017C4.5772 20.3805 5.2386 20.676 6.42121 20.835C7.63258 20.9979 9.23256 21 11.5 21C13.7674 21 15.3674 20.9979 16.5788 20.835C17.7614 20.676 18.4228 20.3805 18.9017 19.9017C19.3805 19.4228 19.676 18.7614 19.835 17.5788C19.9979 16.3674 20 14.7674 20 12.5C20 11.1334 19.9998 10.0016 19.9618 9.03951C19.94 8.48765 20.3697 8.0226 20.9215 8.00078C21.4734 7.97896 21.9384 8.40864 21.9602 8.96049C22 9.96637 22 11.1364 22 12.4833V12.5744C22 14.7504 22 16.4851 21.8172 17.8453C21.6284 19.2497 21.2283 20.4035 20.3159 21.3159C19.4035 22.2283 18.2497 22.6284 16.8453 22.8172C15.4851 23 13.7504 23 11.5744 23H11.4256C9.24959 23 7.51485 23 6.15471 22.8172C4.75033 22.6284 3.59653 22.2283 2.68414 21.3159C1.77175 20.4035 1.37164 19.2497 1.18282 17.8453C0.999958 16.4852 0.999977 14.7504 1 12.5745V12.4255C0.999977 10.2496 0.999958 8.51485 1.18282 7.15471C1.37164 5.75033 1.77175 4.59653 2.68414 3.68414C3.59653 2.77175 4.75033 2.37164 6.15471 2.18282C7.51485 1.99996 9.24957 1.99998 11.4255 2Z',
  d6: 'M21.539 13.2018C19.5916 11.946 17.7341 11.419 15.9552 11.4908C14.1846 11.5623 12.59 12.223 11.1543 13.1756C8.70068 14.8037 6.54604 17.4123 4.62355 19.7398C4.34031 20.0827 4.06212 20.4195 3.78875 20.7462L3 21.4998L4.16173 22.3071C5.0304 22.6794 6.048 22.842 7.21841 22.9211C8.38431 22.9999 9.79172 22.9999 11.4687 22.9999H11.574C13.75 22.9999 15.4847 22.9999 16.8448 22.8171C18.2492 22.6282 19.403 22.2281 20.3154 21.3157C21.1019 20.5293 21.5829 19.8367 21.8055 18.6764C21.9972 17.6773 21.9971 16.308 21.997 14.217L21.997 13.4972L21.539 13.2018Z',
  d7: 'M22.9426 1.66643C23.127 2.18702 22.8544 2.75852 22.3338 2.9429C21.8002 3.1319 21.1837 3.53876 20.5307 4.11148C19.888 4.67513 19.2628 5.35205 18.7091 6.01586C18.1572 6.67736 17.6885 7.31109 17.3574 7.78008C17.1922 8.01407 17.0622 8.20579 16.9743 8.33786C16.9303 8.40386 16.8969 8.45488 16.8749 8.48874L16.8506 8.52634L16.8451 8.53496L16.8441 8.53651C16.6508 8.84059 16.3087 9.01739 15.9489 8.99896C15.5889 8.98053 15.2668 8.76985 15.1056 8.44749C14.6649 7.56612 14.2696 7.21517 14.0703 7.08232C13.986 7.02611 13.929 7.00359 13.9064 6.99595C13.398 6.94874 13 6.52099 13 6.00027C13 5.44799 13.4497 5.00027 14.002 5.00027L14.0759 5.00284C14.1055 5.00475 14.1393 5.00792 14.1771 5.01295C14.2527 5.02303 14.3434 5.04051 14.4466 5.07C14.6545 5.12939 14.9053 5.23529 15.1797 5.41822C15.454 5.60107 15.7416 5.85384 16.0304 6.1997C16.3456 5.76895 16.734 5.26128 17.1733 4.73468C17.7666 4.02349 18.465 3.26292 19.212 2.60781C19.9486 1.96179 20.788 1.36865 21.6662 1.05765C22.1868 0.873267 22.7582 1.14583 22.9426 1.66643Z',
  d8: 'M20 10.0002V22.0002H2V4.00024H11',
  d9: 'M4 22.0002L14 13.0002L20 17.0002',
  d10: 'M14 6.00024L16 8.00024L22 2.00024',
  d11: 'M2.5 2.5C1.94772 2.5 1.5 2.94772 1.5 3.5V21.5C1.5 22.0523 1.94772 22.5 2.5 22.5H20.5C21.0523 22.5 21.5 22.0523 21.5 21.5V9.5H19.5V14.6314L14.4397 11.2578L3.5 20.2085V4.5H11.5V2.5H2.5Z',
  d12: 'M22.5002 2.91421L15.793 9.62132L13.0859 6.91421L14.5002 5.5L15.793 6.79289L21.0859 1.5L22.5002 2.91421Z',
};

export const IconImageDone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-01-stroke-rounded IconImageDone01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-01-duotone-rounded IconImageDone01DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-01-twotone-rounded IconImageDone01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-01-solid-rounded IconImageDone01SolidRounded"
    >
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

export const IconImageDone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-01-bulk-rounded IconImageDone01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-01-stroke-sharp IconImageDone01StrokeSharp"
    >
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
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconImageDone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="image-done-01-solid-sharp IconImageDone01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfImageDone01: TheIconSelfPack = {
  name: 'ImageDone01',
  StrokeRounded: IconImageDone01StrokeRounded,
  DuotoneRounded: IconImageDone01DuotoneRounded,
  TwotoneRounded: IconImageDone01TwotoneRounded,
  SolidRounded: IconImageDone01SolidRounded,
  BulkRounded: IconImageDone01BulkRounded,
  StrokeSharp: IconImageDone01StrokeSharp,
  SolidSharp: IconImageDone01SolidSharp,
};