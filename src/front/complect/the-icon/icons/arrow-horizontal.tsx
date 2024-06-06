import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 9C4.39316 9.58984 2 11.1597 2 12C2 12.8403 4.39316 14.4102 5 15',
  d2: 'M19 9C19.6068 9.58984 22 11.1597 22 12C22 12.8403 19.6068 14.4102 19 15',
  d3: 'M2.42285 11.9795H21.868',
  d4: 'M22 12H2M22 12C22 11.1597 19.6068 9.58984 19 9M22 12C22 12.8403 19.6068 14.4102 19 15M2 12C2 11.1597 4.39316 9.58984 5 9M2 12C2 12.8403 4.39316 14.4102 5 15',
  d5: 'M22 12.75C22.4142 12.75 22.75 12.4142 22.75 12C22.75 11.5858 22.4142 11.25 22 11.25V12.75ZM2 11.25C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75L2 11.25ZM22 11.25L2 11.25L2 12.75L22 12.75V11.25Z',
  d6: 'M19 9C19.6068 9.58984 22 11.1597 22 12C22 12.8403 19.6068 14.4102 19 15M5 9C4.39316 9.58984 2 11.1597 2 12C2 12.8403 4.39316 14.4102 5 15',
  d7: 'M19.5227 8.46221C19.3066 8.25213 18.9857 8.19185 18.7081 8.30917C18.4304 8.42649 18.25 8.69861 18.25 9.00002V11L5.75 11V9.00002C5.75 8.69861 5.56957 8.42649 5.29193 8.30917C5.01429 8.19185 4.69339 8.25213 4.47726 8.46221C4.36071 8.57549 4.13501 8.7559 3.81197 9.00963C3.52108 9.23797 3.11067 9.56013 2.78758 9.8339C2.44084 10.1277 2.08603 10.4522 1.81244 10.7734C1.67538 10.9344 1.54343 11.112 1.44275 11.3002C1.34525 11.4824 1.25 11.7242 1.25 12C1.25 12.2758 1.34525 12.5177 1.44275 12.6999C1.54343 12.888 1.67538 13.0657 1.81244 13.2266C2.08603 13.5478 2.44084 13.8723 2.78758 14.1661C3.11067 14.4399 3.52107 14.7621 3.81197 14.9904C4.13501 15.2441 4.36071 15.4246 4.47726 15.5378C4.69339 15.7479 5.01429 15.8082 5.29193 15.6909C5.56957 15.5736 5.75 15.3014 5.75 15V13L18.25 13V15C18.25 15.3014 18.4304 15.5736 18.7081 15.6909C18.9857 15.8082 19.3066 15.7479 19.5227 15.5378C19.6393 15.4246 19.865 15.2441 20.188 14.9904C20.4789 14.7621 20.8893 14.4399 21.2124 14.1661C21.5592 13.8723 21.914 13.5478 22.1876 13.2266C22.3246 13.0657 22.4566 12.888 22.5573 12.6999C22.6547 12.5177 22.75 12.2758 22.75 12C22.75 11.7242 22.6547 11.4824 22.5572 11.3002C22.4566 11.112 22.3246 10.9344 22.1876 10.7734C21.914 10.4522 21.5592 10.1277 21.2124 9.8339C20.8893 9.56014 20.4789 9.23797 20.188 9.00963C19.865 8.7559 19.6393 8.57549 19.5227 8.46221Z',
  d8: 'M2 12C2 11.4477 2.44772 11 3 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L3 13C2.44772 13 2 12.5523 2 12Z',
  d9: 'M5.29193 8.30917C5.56957 8.42649 5.75 8.69861 5.75 9.00002V15C5.75 15.3014 5.56957 15.5736 5.29193 15.6909C5.01429 15.8082 4.69339 15.7479 4.47726 15.5378C4.36071 15.4246 4.13501 15.2441 3.81197 14.9904C3.52107 14.7621 3.11067 14.4399 2.78758 14.1661C2.44084 13.8723 2.08603 13.5478 1.81244 13.2266C1.67538 13.0657 1.54343 12.888 1.44275 12.6999C1.34525 12.5177 1.25 12.2758 1.25 12C1.25 11.7242 1.34525 11.4824 1.44275 11.3002C1.54343 11.112 1.67538 10.9344 1.81244 10.7734C2.08603 10.4522 2.44084 10.1277 2.78758 9.8339C3.11067 9.56013 3.52108 9.23797 3.81197 9.00963C4.13501 8.7559 4.36071 8.57549 4.47726 8.46221C4.69339 8.25213 5.01429 8.19185 5.29193 8.30917Z',
  d10: 'M18.7081 8.30917C18.9857 8.19185 19.3066 8.25213 19.5227 8.46221C19.6393 8.57549 19.865 8.7559 20.188 9.00963C20.4789 9.23797 20.8893 9.56014 21.2124 9.8339C21.5592 10.1277 21.914 10.4522 22.1876 10.7734C22.3246 10.9344 22.4566 11.112 22.5572 11.3002C22.6547 11.4824 22.75 11.7242 22.75 12C22.75 12.2758 22.6547 12.5177 22.5573 12.6999C22.4566 12.888 22.3246 13.0657 22.1876 13.2266C21.914 13.5478 21.5592 13.8723 21.2124 14.1661C20.8893 14.4399 20.4789 14.7621 20.188 14.9904C19.865 15.2441 19.6393 15.4246 19.5227 15.5378C19.3066 15.7479 18.9857 15.8082 18.7081 15.6909C18.4304 15.5736 18.25 15.3014 18.25 15V9.00002C18.25 8.69861 18.4304 8.42649 18.7081 8.30917Z',
  d11: 'M18 8L22 12.0001L18 16.0001M6 8L2 12.0001L6 16.0001M21.4832 12.0001H2.51604',
  d12: 'M5.99993 7L7.41417 8.41419L4.82836 11.0001H19.1716L16.5858 8.41419L18 7L23 12.0001L18.0002 17.0001L16.586 15.5859L19.1716 13.0001H4.82842L7.41414 15.5859L5.99993 17.0001L1 12.0001L5.99993 7Z',
};

export const IconArrowHorizontalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-horizontal-stroke-rounded IconArrowHorizontalStrokeRounded"
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

export const IconArrowHorizontalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-horizontal-duotone-rounded IconArrowHorizontalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowHorizontalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-horizontal-twotone-rounded IconArrowHorizontalTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowHorizontalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-horizontal-solid-rounded IconArrowHorizontalSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowHorizontalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-horizontal-bulk-rounded IconArrowHorizontalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
    </TheIconWrapper>
  );
};

export const IconArrowHorizontalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-horizontal-stroke-sharp IconArrowHorizontalStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowHorizontalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-horizontal-solid-sharp IconArrowHorizontalSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArrowHorizontal: TheIconSelfPack = {
  name: 'ArrowHorizontal',
  StrokeRounded: IconArrowHorizontalStrokeRounded,
  DuotoneRounded: IconArrowHorizontalDuotoneRounded,
  TwotoneRounded: IconArrowHorizontalTwotoneRounded,
  SolidRounded: IconArrowHorizontalSolidRounded,
  BulkRounded: IconArrowHorizontalBulkRounded,
  StrokeSharp: IconArrowHorizontalStrokeSharp,
  SolidSharp: IconArrowHorizontalSolidSharp,
};