import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 22C19.7091 22 21.5 20.2091 21.5 18C21.5 16.9335 21.0827 15.9646 20.4024 15.2475C19.8957 14.7134 19.6423 14.4463 19.5712 14.2679C19.5 14.0895 19.5 13.8535 19.5 13.3815V4C19.5 2.89543 18.6046 2 17.5 2C16.3954 2 15.5 2.89543 15.5 4V13.3815C15.5 13.8535 15.5 14.0895 15.4288 14.2679C15.3577 14.4463 15.1043 14.7134 14.5976 15.2475C13.9173 15.9646 13.5 16.9335 13.5 18C13.5 20.2091 15.2909 22 17.5 22Z',
  d2: 'M9.04545 5V8.65625M9.04545 8.65625V14.3438M9.04545 8.65625L11.0909 6.625M9.04545 8.65625L7 6.625M9.04545 14.3438L9.04546 18M9.04545 14.3438L7 16.375M9.04545 14.3438L11.0909 16.375M4.13636 9.46875L6.18182 11.5M6.18182 11.5L4.13636 13.5312M6.18182 11.5H11.5M6.18182 11.5H2.5',
  d3: 'M18 22C20.2091 22 22 20.2091 22 18C22 16.9335 21.5827 15.9646 20.9024 15.2475C20.3957 14.7134 20.1423 14.4463 20.0712 14.2679C20 14.0895 20 13.8535 20 13.3815V4C20 2.89543 19.1046 2 18 2C16.8954 2 16 2.89543 16 4V13.3815C16 13.8535 16 14.0895 15.9288 14.2679C15.8577 14.4463 15.6043 14.7134 15.0976 15.2475C14.4173 15.9646 14 16.9335 14 18C14 20.2091 15.7909 22 18 22Z',
  d4: 'M9.54545 4C10.0977 4 10.5455 4.44772 10.5455 5V6.25388L10.8863 5.91543C11.2782 5.52627 11.9113 5.52848 12.3005 5.92036C12.6896 6.31224 12.6874 6.94541 12.2955 7.33457L10.5455 9.07251V10.5H12C12.5523 10.5 13 10.9477 13 11.5C13 12.0523 12.5523 12.5 12 12.5H10.5455V13.9275L12.2955 15.6654C12.6874 16.0546 12.6896 16.6878 12.3005 17.0796C11.9113 17.4715 11.2782 17.4737 10.8863 17.0846L10.5455 16.7461L10.5455 18C10.5455 18.5523 10.0977 19 9.54546 19C8.99317 19 8.54546 18.5523 8.54546 18L8.54545 16.7461L8.20464 17.0846C7.81276 17.4737 7.17959 17.4715 6.79043 17.0796C6.40127 16.6878 6.40348 16.0546 6.79536 15.6654L8.54545 13.9275V12.5H7.09399L5.341 14.2408C4.94912 14.63 4.31596 14.6278 3.9268 14.2359C3.53764 13.844 3.53984 13.2108 3.93172 12.8217L4.25566 12.5H3C2.44772 12.5 2 12.0523 2 11.5C2 10.9477 2.44772 10.5 3 10.5H4.25566L3.93172 10.1783C3.53984 9.78915 3.53764 9.15599 3.9268 8.76411C4.31596 8.37223 4.94912 8.37002 5.341 8.75918L7.09399 10.5H8.54545V9.07251L6.79536 7.33457C6.40348 6.94541 6.40127 6.31224 6.79043 5.92036C7.17959 5.52848 7.81276 5.52627 8.20464 5.91543L8.54545 6.25388V5C8.54545 4.44772 8.99317 4 9.54545 4Z',
  d5: 'M17.5 22C19.7091 22 21.5 20.2091 21.5 18C21.5 16.5194 20.6956 15.2267 19.5 14.5351V4C19.5 2.89543 18.6046 2 17.5 2C16.3954 2 15.5 2.89543 15.5 4V14.5351C14.3044 15.2267 13.5 16.5194 13.5 18C13.5 20.2091 15.2909 22 17.5 22Z',
  d6: 'M8.04545 6.25388V5H10.0455V6.25388L10.3863 5.91543L11.7955 7.33457L10.0455 9.07251V10.5H11.7955V12.5H10.0455V13.9275L11.7955 15.6654L10.3863 17.0846L10.0455 16.7461L10.0455 18H8.04546L8.04545 16.7461L7.70464 17.0846L6.29536 15.6654L8.04545 13.9275V12.5H6.59399L4.841 14.2408L3.43172 12.8217L3.75566 12.5H2.5V10.5H3.75566L3.43172 10.1783L4.841 8.75918L6.59399 10.5H8.04545V9.07251L6.29536 7.33457L7.70464 5.91543L8.04545 6.25388Z',
};

export const IconThermometerColdStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-cold-stroke-rounded IconThermometerColdStrokeRounded"
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

export const IconThermometerColdDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-cold-duotone-rounded IconThermometerColdDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconThermometerColdTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-cold-twotone-rounded IconThermometerColdTwotoneRounded"
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

export const IconThermometerColdSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-cold-solid-rounded IconThermometerColdSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconThermometerColdBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-cold-bulk-rounded IconThermometerColdBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconThermometerColdStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-cold-stroke-sharp IconThermometerColdStrokeSharp"
    >
      <path 
        d={d.d5} 
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

export const IconThermometerColdSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="thermometer-cold-solid-sharp IconThermometerColdSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfThermometerCold: TheIconSelfPack = {
  name: 'ThermometerCold',
  StrokeRounded: IconThermometerColdStrokeRounded,
  DuotoneRounded: IconThermometerColdDuotoneRounded,
  TwotoneRounded: IconThermometerColdTwotoneRounded,
  SolidRounded: IconThermometerColdSolidRounded,
  BulkRounded: IconThermometerColdBulkRounded,
  StrokeSharp: IconThermometerColdStrokeSharp,
  SolidSharp: IconThermometerColdSolidSharp,
};