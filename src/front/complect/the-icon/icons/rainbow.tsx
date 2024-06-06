import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 15V12C2 7.58172 5.58172 4 10 4C13.3574 4 16.3229 6.06817 17.5 9',
  d2: 'M5 15V12C5 9.23858 7.23858 7 10 7C11.8507 7 13.6488 8.0055 14.5 9.5',
  d3: 'M8 15V12C8 10.8954 8.89543 10 10 10C10.9319 10 11.778 10.6374 12 11.5',
  d4: 'M19.5127 15.2C19.5168 15.2 19.5209 15.2 19.525 15.2C20.8919 15.2 22 16.2745 22 17.6C22 18.9255 20.8919 20 19.525 20H13.75C12.2312 20 11 18.8061 11 17.3333C11 15.9469 12.0912 14.8075 13.4862 14.6788M19.5127 15.2C19.5208 15.1122 19.525 15.0232 19.525 14.9333C19.525 13.3133 18.1707 12 16.5 12C14.9178 12 13.6193 13.1779 13.4862 14.6788M19.5127 15.2C19.4564 15.8051 19.2107 16.3571 18.8336 16.8M13.4862 14.6788C13.573 14.6708 13.661 14.6667 13.75 14.6667C14.3692 14.6667 14.9406 14.8651 15.4003 15.2',
  d5: 'M19.525 14.9333C19.525 13.3133 18.1707 12 16.5 12C14.9178 12 13.6193 13.1779 13.4862 14.6788C12.0912 14.8075 11 15.9469 11 17.3333C11 18.8061 12.2312 20 13.75 20H19.525C20.8919 20 22 18.9255 22 17.6C22 16.2745 20.8919 15.2 19.525 15.2L19.5127 15.2C19.5208 15.1122 19.525 15.0232 19.525 14.9333Z',
  d6: 'M10.25 18.3333C10.25 16.7393 11.3596 15.4236 12.8382 15.0341C13.2519 13.4214 14.7483 12.25 16.5 12.25C18.4264 12.25 20.0468 13.6691 20.2529 15.531C21.6707 15.8517 22.75 17.0887 22.75 18.6C22.75 20.3613 21.2842 21.75 19.525 21.75H13.75C11.8389 21.75 10.25 20.2419 10.25 18.3333Z',
  d7: 'M1.25 12C1.25 7.16751 5.16751 3.25 10 3.25C14.3385 3.25 17.9395 6.40754 18.6304 10.5499C18.6784 10.8375 18.7023 10.9813 18.6184 11.0547C18.5344 11.1281 18.3817 11.0811 18.0762 10.9869C17.5757 10.8326 17.0456 10.75 16.5 10.75C16.2134 10.75 15.9227 10.7806 15.6325 10.8376C15.0949 8.21922 12.7774 6.25 10 6.25C6.82436 6.25 4.25 8.82436 4.25 12V15.75H2C1.58579 15.75 1.25 15.4142 1.25 15V12Z',
  d8: 'M5.75 15.75H8C8.41421 15.75 8.75 15.4142 8.75 15V12C8.75 11.3096 9.30964 10.75 10 10.75C10.6904 10.75 11.25 11.3096 11.25 12V12.278C11.25 12.9833 11.25 13.3359 11.3722 13.3875C11.4944 13.4391 11.7682 13.1728 12.316 12.64C12.8453 12.1252 13.4962 11.6641 14.1969 11.3263C13.874 9.29923 12.1179 7.75 10 7.75C7.65279 7.75 5.75 9.65279 5.75 12V15.75Z',
  d9: 'M1.25 12C1.25 7.16751 5.16751 3.25 10 3.25C14.3385 3.25 17.9395 6.40754 18.6304 10.5499C18.6784 10.8375 18.7023 10.9813 18.6184 11.0547C18.5344 11.1281 18.3817 11.0811 18.0762 10.9869C17.5757 10.8326 17.0456 10.75 16.5 10.75C16.2134 10.75 15.9227 10.7806 15.6325 10.8376C15.0949 8.21922 12.7774 6.25 10 6.25C6.82436 6.25 4.25 8.82436 4.25 12V15.75H2C1.58579 15.75 1.25 15.4142 1.25 15V12ZM5.75 15.75H8C8.41421 15.75 8.75 15.4142 8.75 15V12C8.75 11.3096 9.30964 10.75 10 10.75C10.6904 10.75 11.25 11.3096 11.25 12V12.278C11.25 12.9833 11.25 13.3359 11.3722 13.3875C11.4944 13.4391 11.7682 13.1728 12.316 12.64L12.316 12.64C12.8453 12.1251 13.4962 11.6641 14.1969 11.3263C13.874 9.29923 12.1179 7.75 10 7.75C7.65279 7.75 5.75 9.65279 5.75 12V15.75Z',
  d10: 'M10.25 17.3333C10.25 15.7393 11.3596 14.4236 12.8382 14.0341C13.2519 12.4214 14.7483 11.25 16.5 11.25C18.4264 11.25 20.0468 12.6691 20.2529 14.531C21.6707 14.8517 22.75 16.0887 22.75 17.6C22.75 19.3613 21.2842 20.75 19.525 20.75H13.75C11.8389 20.75 10.25 19.2419 10.25 17.3333Z',
  d11: 'M10 3.25C5.16751 3.25 1.25 7.16751 1.25 12V15C1.25 15.4142 1.58579 15.75 2 15.75H4.25V12C4.25 8.82436 6.82436 6.25 10 6.25C12.2481 6.25 14.1948 7.54012 15.1403 9.42038L16.9295 7.6312C17.198 7.36263 17.2234 6.93568 16.9886 6.63716C15.3667 4.57542 12.8096 3.25 10 3.25Z',
  d12: 'M14.0001 10.5606C13.4103 8.9218 11.842 7.75 10 7.75C7.65279 7.75 5.75 9.65279 5.75 12V15.75H8C8.41421 15.75 8.75 15.4142 8.75 15V12C8.75 11.3096 9.30964 10.75 10 10.75C10.6093 10.75 11.1417 11.1743 11.2737 11.6869C11.3408 11.9477 11.5426 12.1525 11.8023 12.2235C12.0621 12.2945 12.3399 12.2207 12.5303 12.0303L14.0001 10.5606Z',
};

export const IconRainbowStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rainbow-stroke-rounded IconRainbowStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRainbowDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rainbow-duotone-rounded IconRainbowDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRainbowTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rainbow-twotone-rounded IconRainbowTwotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRainbowSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rainbow-solid-rounded IconRainbowSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconRainbowBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rainbow-bulk-rounded IconRainbowBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRainbowStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rainbow-stroke-sharp IconRainbowStrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconRainbowSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="rainbow-solid-sharp IconRainbowSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRainbow: TheIconSelfPack = {
  name: 'Rainbow',
  StrokeRounded: IconRainbowStrokeRounded,
  DuotoneRounded: IconRainbowDuotoneRounded,
  TwotoneRounded: IconRainbowTwotoneRounded,
  SolidRounded: IconRainbowSolidRounded,
  BulkRounded: IconRainbowBulkRounded,
  StrokeSharp: IconRainbowStrokeSharp,
  SolidSharp: IconRainbowSolidSharp,
};