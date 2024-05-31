import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 14L8.5 17.5L19 6.5',
  d2: 'M8.5 17.5L19 6.5',
  d3: 'M19.6905 5.77665C20.09 6.15799 20.1047 6.79098 19.7234 7.19048L9.22336 18.1905C9.03745 18.3852 8.78086 18.4968 8.51163 18.4999C8.2424 18.5031 7.98328 18.3975 7.79289 18.2071L4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L8.48336 16.0692L18.2766 5.80953C18.658 5.41003 19.291 5.39531 19.6905 5.77665Z',
  d4: 'M4.29289 13.2929C4.68342 12.9024 5.31658 12.9024 5.70711 13.2929L9.20711 16.7929C9.59763 17.1834 9.59763 17.8166 9.20711 18.2071C8.81658 18.5976 8.18342 18.5976 7.79289 18.2071L4.29289 14.7071C3.90237 14.3166 3.90237 13.6834 4.29289 13.2929Z',
  d5: 'M19.6905 5.77665C20.09 6.15799 20.1047 6.79098 19.7234 7.19048L9.22336 18.1905C8.84202 18.59 8.20902 18.6047 7.80953 18.2234C7.41003 17.842 7.39531 17.209 7.77665 16.8095L18.2766 5.80953C18.658 5.41003 19.291 5.39531 19.6905 5.77665Z',
  d6: 'M20.5 6.39644L8.48123 19L3.5 14.0138L4.92866 12.5838L8.44762 16.1062L19.0385 5L20.5 6.39644Z',
} as const;

export const IconTick02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-02-stroke-rounded IconTick02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTick02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-02-duotone-rounded IconTick02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTick02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-02-twotone-rounded IconTick02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTick02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-02-solid-rounded IconTick02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTick02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-02-bulk-rounded IconTick02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTick02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-02-stroke-sharp IconTick02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconTick02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="tick-02-solid-sharp IconTick02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTick02: TheIconSelfPack = {
  name: 'Tick02',
  StrokeRounded: IconTick02StrokeRounded,
  DuotoneRounded: IconTick02DuotoneRounded,
  TwotoneRounded: IconTick02TwotoneRounded,
  SolidRounded: IconTick02SolidRounded,
  BulkRounded: IconTick02BulkRounded,
  StrokeSharp: IconTick02StrokeSharp,
  SolidSharp: IconTick02SolidSharp,
};