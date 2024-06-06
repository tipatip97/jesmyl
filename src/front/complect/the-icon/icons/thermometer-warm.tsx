import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.5 22C18.7091 22 20.5 20.2091 20.5 18C20.5 16.9335 20.0827 15.9646 19.4024 15.2475C18.8957 14.7134 18.6423 14.4463 18.5712 14.2679C18.5 14.0895 18.5 13.8535 18.5 13.3815V4C18.5 2.89543 17.6046 2 16.5 2C15.3954 2 14.5 2.89543 14.5 4V13.3815C14.5 13.8535 14.5 14.0895 14.4288 14.2679C14.3577 14.4463 14.1043 14.7134 13.5976 15.2475C12.9173 15.9646 12.5 16.9335 12.5 18C12.5 20.2091 14.2909 22 16.5 22Z',
  d2: 'M10.3133 15.8303C8.67792 15.5416 7.36329 14.104 7.20333 12.2607C7.01373 10.076 8.51806 8.14861 10.5634 7.95588C10.883 7.92576 11.197 7.9398 11.5 7.99327M10.2201 4L10.323 5.18677M6.04201 7.57572L5.18359 6.81058M4.611 12.505L3.5 12.6097M6.86776 17.0868L6.15499 18',
  d3: 'M16.9961 22C19.2052 22 20.9961 20.2091 20.9961 18C20.9961 16.9335 20.5787 15.9646 19.8985 15.2475C19.3918 14.7134 19.1384 14.4463 19.0673 14.2679C18.9961 14.0895 18.9961 13.8535 18.9961 13.3815V4C18.9961 2.89543 18.1007 2 16.9961 2C15.8915 2 14.9961 2.89543 14.9961 4V13.3815C14.9961 13.8535 14.9961 14.0895 14.9249 14.2679C14.8538 14.4463 14.6004 14.7134 14.0937 15.2475C13.4134 15.9646 12.9961 16.9335 12.9961 18C12.9961 20.2091 14.787 22 16.9961 22Z',
  d4: 'M10.9993 3C11.5516 3 11.9993 3.44772 11.9993 4V5C11.9993 5.55228 11.5516 6 10.9993 6C10.447 6 9.9993 5.55228 9.9993 5V4C9.9993 3.44772 10.447 3 10.9993 3ZM4.63604 5.63604C5.02656 5.24551 5.65973 5.24551 6.05025 5.63604L6.75736 6.34315C7.14788 6.73367 7.14788 7.36684 6.75736 7.75736C6.36684 8.14788 5.73367 8.14788 5.34315 7.75736L4.63604 7.05025C4.24551 6.65973 4.24551 6.02656 4.63604 5.63604ZM2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12ZM5.34375 16.2428C5.73427 15.8522 6.36744 15.8522 6.75796 16.2428C7.14849 16.6333 7.14849 17.2664 6.75796 17.657L6.05086 18.3641C5.66033 18.7546 5.02717 18.7546 4.63664 18.3641C4.24612 17.9736 4.24612 17.3404 4.63664 16.9499L5.34375 16.2428ZM11 18C11.5523 18 12 18.4477 12 19V20C12 20.5523 11.5523 21 11 21C10.4477 21 10 20.5523 10 20V19C10 18.4477 10.4477 18 11 18Z',
  d5: 'M10.9961 7.25C8.37274 7.25 6.24609 9.37665 6.24609 12C6.24609 14.6234 8.37274 16.75 10.9961 16.75C11.091 16.75 11.1852 16.7472 11.2787 16.7417C11.4562 16.7313 11.545 16.7261 11.6182 16.6699C11.6913 16.6137 11.7237 16.5155 11.7886 16.3191C12.0471 15.5366 12.4666 14.7832 13.0055 14.2151C13.1417 14.0716 13.251 13.9562 13.34 13.8608C13.4154 13.78 13.4531 13.7396 13.474 13.6866C13.4949 13.6336 13.4949 13.5767 13.4949 13.4629L13.4955 8.294C13.4955 8.12752 13.4955 8.04428 13.4523 7.97276C13.4091 7.90124 13.3413 7.86553 13.2057 7.79412C12.5456 7.44665 11.7938 7.25 10.9961 7.25Z',
  d6: 'M16.061 22C18.2353 22 19.9979 20.2091 19.9979 18C19.9979 16.5194 19.2062 15.2267 18.0294 14.5351V4C18.0294 2.89543 17.1482 2 16.061 2C14.9739 2 14.0925 2.89543 14.0925 4V14.5351C12.9157 15.2267 12.124 16.5194 12.124 18C12.124 20.2091 13.8867 22 16.061 22Z',
  d7: 'M11.3892 5.50139C9.9853 5.42613 8.08962 5.70769 7.72907 8.24502C7.5329 9.62556 8.32973 10.564 9.03759 11.024C9.46251 11.3001 9.96245 11.456 10.4654 11.4948C10.7787 11.519 11.0991 11.5078 11.3819 11.5078M11.3892 2.74902H9.90437M7.17219 3.90081L6.13286 4.96831M4.99805 7.75196V9.24148M6.12842 12.0382L7.17242 13.0947M9.89905 14.2461H11.3869',
  d8: 'M15.998 22C18.2072 22 19.998 20.2091 19.998 18C19.998 16.5194 19.1936 15.2267 17.998 14.5351V4C17.998 2.89543 17.1026 2 15.998 2C14.8935 2 13.998 2.89543 13.998 4V14.5351C12.8024 15.2267 11.998 16.5194 11.998 18C11.998 20.2091 13.7889 22 15.998 22Z',
  d9: 'M11.4991 2V3.5H9.4991V2H11.4991ZM6.25737 5.67195L5.19671 4.61129L6.61092 3.19708L7.67158 4.25774L6.25737 5.67195ZM5.5 9.5H4V7.5H5.5V9.5ZM7.67157 12.7426L6.61091 13.8033L5.1967 12.3891L6.25736 11.3284L7.67157 12.7426ZM11.4991 13.5V15H9.4991V13.5H11.4991Z',
  d10: 'M11.25 12.25H10.5C8.42893 12.25 6.75 10.5711 6.75 8.5C6.75 6.42893 8.42893 4.75 10.5 4.75H11.25V12.25Z',
} as const;

export const IconThermometerWarmStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-warm-stroke-rounded IconThermometerWarmStrokeRounded"
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

export const IconThermometerWarmDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-warm-duotone-rounded IconThermometerWarmDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconThermometerWarmTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-warm-twotone-rounded IconThermometerWarmTwotoneRounded"
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

export const IconThermometerWarmSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-warm-solid-rounded IconThermometerWarmSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThermometerWarmBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-warm-bulk-rounded IconThermometerWarmBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconThermometerWarmStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-warm-stroke-sharp IconThermometerWarmStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconThermometerWarmSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-warm-solid-sharp IconThermometerWarmSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfThermometerWarm: TheIconSelfPack = {
  name: 'ThermometerWarm',
  StrokeRounded: IconThermometerWarmStrokeRounded,
  DuotoneRounded: IconThermometerWarmDuotoneRounded,
  TwotoneRounded: IconThermometerWarmTwotoneRounded,
  SolidRounded: IconThermometerWarmSolidRounded,
  BulkRounded: IconThermometerWarmBulkRounded,
  StrokeSharp: IconThermometerWarmStrokeSharp,
  SolidSharp: IconThermometerWarmSolidSharp,
};