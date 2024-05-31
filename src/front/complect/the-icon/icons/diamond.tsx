import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5.92089 5.92089C8.15836 3.68342 9.2771 2.56468 10.5857 2.19562C11.5105 1.93479 12.4895 1.93479 13.4143 2.19562C14.7229 2.56468 15.8416 3.68342 18.0791 5.92089C20.3166 8.15836 21.4353 9.2771 21.8044 10.5857C22.0652 11.5105 22.0652 12.4895 21.8044 13.4143C21.4353 14.7229 20.3166 15.8416 18.0791 18.0791C15.8416 20.3166 14.7229 21.4353 13.4143 21.8044C12.4895 22.0652 11.5105 22.0652 10.5857 21.8044C9.2771 21.4353 8.15836 20.3166 5.92089 18.0791C3.68342 15.8416 2.56468 14.7229 2.19562 13.4143C1.93479 12.4895 1.93479 11.5105 2.19562 10.5857C2.56468 9.2771 3.68342 8.15836 5.92089 5.92089Z',
  d2: 'M12 2C11.5241 2 11.0481 2.06521 10.5857 2.19562C9.2771 2.56468 8.15836 3.68342 5.92089 5.92089C3.68342 8.15836 2.56468 9.2771 2.19562 10.5857C1.93479 11.5105 1.93479 12.4895 2.19562 13.4143C2.56468 14.7229 3.68342 15.8416 5.92089 18.0791C8.15836 20.3166 9.2771 21.4353 10.5857 21.8044C11.0481 21.9348 11.5241 22 12 22',
  d3: 'M10.3821 1.47378C11.4401 1.17541 12.5599 1.17541 13.6179 1.47378C14.4165 1.69901 15.1181 2.14452 15.8799 2.78263L21.2174 8.12005C21.8555 8.88193 22.301 9.5835 22.5262 10.3821C22.8246 11.4401 22.8246 12.5599 22.5262 13.6179C22.301 14.4165 21.8555 15.1181 21.2174 15.8799L15.8799 21.2174C15.1181 21.8555 14.4165 22.301 13.6179 22.5262C12.5599 22.8246 11.4401 22.8246 10.3821 22.5262C9.5835 22.301 8.88193 21.8555 8.12005 21.2174L2.78263 15.8799C2.14452 15.1181 1.69901 14.4165 1.47378 13.6179C1.17541 12.5599 1.17541 11.4401 1.47378 10.3821C1.69901 9.5835 2.14452 8.88193 2.78263 8.12005L8.12005 2.78263C8.88193 2.14452 9.5835 1.69901 10.3821 1.47378Z',
  d4: 'M21.2172 8.12184C21.8553 8.88372 22.3008 9.58528 22.5261 10.3839C22.8244 11.4419 22.8244 12.5617 22.5261 13.6197C22.3008 14.4183 21.8553 15.1199 21.2172 15.8817L15.8798 21.2192C15.1179 21.8573 14.4163 22.3028 13.6177 22.528C12.5598 22.8264 11.4399 22.8264 10.3819 22.528C9.58333 22.3028 8.88176 21.8573 8.11988 21.2192L5.45117 18.5504L18.5485 5.45312L21.2172 8.12184Z',
  d5: 'M22 12L12 2L2 12L12 22L22 12Z',
  d6: 'M11.4697 1.46967C11.7626 1.17678 12.2374 1.17678 12.5303 1.46967L22.5303 11.4697C22.8232 11.7626 22.8232 12.2374 22.5303 12.5303L12.5303 22.5303C12.2374 22.8232 11.7626 22.8232 11.4697 22.5303L1.46967 12.5303C1.17678 12.2374 1.17678 11.7626 1.46967 11.4697L11.4697 1.46967Z',
} as const;

export const IconDiamondStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-stroke-rounded IconDiamondStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamondDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-duotone-rounded IconDiamondDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamondTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-twotone-rounded IconDiamondTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconDiamondSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-solid-rounded IconDiamondSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamondBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-bulk-rounded IconDiamondBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamondStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-stroke-sharp IconDiamondStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamondSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-solid-sharp IconDiamondSolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDiamond: TheIconSelfPack = {
  name: 'Diamond',
  StrokeRounded: IconDiamondStrokeRounded,
  DuotoneRounded: IconDiamondDuotoneRounded,
  TwotoneRounded: IconDiamondTwotoneRounded,
  SolidRounded: IconDiamondSolidRounded,
  BulkRounded: IconDiamondBulkRounded,
  StrokeSharp: IconDiamondStrokeSharp,
  SolidSharp: IconDiamondSolidSharp,
};