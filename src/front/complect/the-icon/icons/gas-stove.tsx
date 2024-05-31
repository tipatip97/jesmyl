import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 6C2 2.69067 2.69067 2 6 2H18C21.3093 2 22 2.69067 22 6V18C22 21.3093 21.3093 22 18 22H6C2.69067 22 2 21.3093 2 18V6Z',
  d2: 'M6 19H10',
  d3: 'M18 19.0089V19',
  d4: 'M15.5 10H17M12 13.5V15M8.5 10H7M12 6.5V5',
  d5: 'M6 2C2.69067 2 2 2.69067 2 6V18C2 21.3093 2.69067 22 6 22H18C21.3093 22 22 21.3093 22 18V6C22 2.69067 21.3093 2 18 2H6ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z',
  d6: 'M15.5 10H17M12 13.5V15M8.5 10H7M12 6.5V5M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10Z',
  d7: 'M6 1.25C5.15644 1.25 4.42823 1.29303 3.81795 1.42709C3.19918 1.56303 2.65477 1.80257 2.22867 2.22867C1.80257 2.65476 1.56303 3.19918 1.42709 3.81795C1.29303 4.42823 1.25 5.15644 1.25 6V18C1.25 18.8436 1.29303 19.5718 1.42709 20.182C1.56303 20.8008 1.80257 21.3452 2.22867 21.7713C2.65477 22.1974 3.19918 22.437 3.81795 22.5729C4.42823 22.707 5.15644 22.75 6 22.75H18C18.8436 22.75 19.5718 22.707 20.182 22.5729C20.8008 22.437 21.3452 22.1974 21.7713 21.7713C22.1974 21.3452 22.437 20.8008 22.5729 20.182C22.707 19.5718 22.75 18.8436 22.75 18V6C22.75 5.15644 22.707 4.42823 22.5729 3.81795C22.437 3.19918 22.1974 2.65477 21.7713 2.22867C21.3452 1.80257 20.8008 1.56303 20.182 1.42709C19.5718 1.29303 18.8436 1.25 18 1.25H6ZM6 18.25C5.58579 18.25 5.25 18.5858 5.25 19C5.25 19.4142 5.58579 19.75 6 19.75H10C10.4142 19.75 10.75 19.4142 10.75 19C10.75 18.5858 10.4142 18.25 10 18.25H6ZM18 18C18.5523 18 19 18.4457 19 18.9955V19.0045C19 19.5543 18.5523 20 18 20C17.4477 20 17 19.5543 17 19.0045V18.9955C17 18.4457 17.4477 18 18 18ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5V5.30888C9.22731 5.62971 7.62971 7.22731 7.30888 9.25H7C6.58579 9.25 6.25 9.58579 6.25 10C6.25 10.4142 6.58579 10.75 7 10.75H7.30888C7.62971 12.7727 9.22731 14.3703 11.25 14.6911V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15V14.6911C14.7727 14.3703 16.3703 12.7727 16.6911 10.75H17C17.4142 10.75 17.75 10.4142 17.75 10C17.75 9.58579 17.4142 9.25 17 9.25H16.6911C16.3703 7.22731 14.7727 5.62971 12.75 5.30888V5ZM8.82085 9.3219C9.08631 8.07118 10.0712 7.08631 11.3219 6.82085C11.4422 7.07455 11.7006 7.25 12 7.25C12.2994 7.25 12.5578 7.07455 12.6781 6.82085C13.9288 7.08631 14.9137 8.07118 15.1792 9.3219C14.9255 9.44215 14.75 9.70059 14.75 10C14.75 10.2994 14.9255 10.5578 15.1792 10.6781C14.9137 11.9288 13.9288 12.9137 12.6781 13.1792C12.5578 12.9255 12.2994 12.75 12 12.75C11.7006 12.75 11.4422 12.9255 11.3219 13.1792C10.0712 12.9137 9.08632 11.9288 8.82085 10.6781C9.07455 10.5578 9.25 10.2994 9.25 10C9.25 9.70059 9.07455 9.44215 8.82085 9.3219Z',
  d8: 'M3.81795 1.42709C4.42823 1.29303 5.15644 1.25 6 1.25H18C18.8436 1.25 19.5718 1.29303 20.182 1.42709C20.8008 1.56303 21.3452 1.80257 21.7713 2.22867C22.1974 2.65477 22.437 3.19918 22.5729 3.81795C22.707 4.42823 22.75 5.15644 22.75 6V18C22.75 18.8436 22.707 19.5718 22.5729 20.182C22.437 20.8008 22.1974 21.3452 21.7713 21.7713C21.3452 22.1974 20.8008 22.437 20.182 22.5729C19.5718 22.707 18.8436 22.75 18 22.75H6C5.15644 22.75 4.42823 22.707 3.81795 22.5729C3.19918 22.437 2.65477 22.1974 2.22867 21.7713C1.80257 21.3452 1.56303 20.8008 1.42709 20.182C1.29303 19.5718 1.25 18.8436 1.25 18V6C1.25 5.15644 1.29303 4.42823 1.42709 3.81795C1.56303 3.19918 1.80257 2.65476 2.22867 2.22867C2.65477 1.80257 3.19918 1.56303 3.81795 1.42709Z',
  d9: 'M5.25 19C5.25 18.5858 5.58579 18.25 6 18.25H10C10.4142 18.25 10.75 18.5858 10.75 19C10.75 19.4142 10.4142 19.75 10 19.75H6C5.58579 19.75 5.25 19.4142 5.25 19Z',
  d10: 'M18 18C18.5523 18 19 18.4457 19 18.9955V19.0045C19 19.5543 18.5523 20 18 20C17.4477 20 17 19.5543 17 19.0045V18.9955C17 18.4457 17.4477 18 18 18Z',
  d11: 'M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V5.30888C14.7727 5.62971 16.3703 7.22731 16.6911 9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H16.6911C16.3703 12.7727 14.7727 14.3703 12.75 14.6911V15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V14.6911C9.22731 14.3703 7.62971 12.7727 7.30888 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10C6.25 9.58579 6.58579 9.25 7 9.25H7.30888C7.62971 7.22731 9.22731 5.62971 11.25 5.30888V5C11.25 4.58579 11.5858 4.25 12 4.25ZM11.3219 6.82085C10.0712 7.08631 9.08631 8.07118 8.82085 9.3219C9.07455 9.44215 9.25 9.70059 9.25 10C9.25 10.2994 9.07455 10.5578 8.82085 10.6781C9.08632 11.9288 10.0712 12.9137 11.3219 13.1792C11.4422 12.9255 11.7006 12.75 12 12.75C12.2994 12.75 12.5578 12.9255 12.6781 13.1792C13.9288 12.9137 14.9137 11.9288 15.1792 10.6781C14.9255 10.5578 14.75 10.2994 14.75 10C14.75 9.70059 14.9255 9.44215 15.1792 9.3219C14.9137 8.07118 13.9288 7.08631 12.6781 6.82085C12.5578 7.07455 12.2994 7.25 12 7.25C11.7006 7.25 11.4422 7.07455 11.3219 6.82085Z',
  d12: 'M21 3H3V21H21V3Z',
  d13: 'M6 18H10',
  d14: 'M17 18.0089V18',
  d15: 'M15.5 11H17M12 14.5V16M8.5 11H7M12 7.5V6M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z',
  d16: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM6.125 18.8706H10.125V17.3706H6.125V18.8706ZM17.875 17.3706V18.8796H16.375V17.3706H17.875ZM8.45001 9.37061C8.74828 7.90126 9.90565 6.74388 11.375 6.44562V5.12061H12.875V6.44562C14.3443 6.74388 15.5017 7.90126 15.8 9.37061H17.125V10.8706H15.8C15.5017 12.34 14.3443 13.4973 12.875 13.7956V15.1206H11.375V13.7956C9.90565 13.4973 8.74828 12.34 8.45001 10.8706H7.125V9.37061H8.45001ZM9.875 10.1206C9.875 8.87796 10.8824 7.87061 12.125 7.87061C13.3676 7.87061 14.375 8.87796 14.375 10.1206C14.375 11.3632 13.3676 12.3706 12.125 12.3706C10.8824 12.3706 9.875 11.3632 9.875 10.1206Z',
} as const;

export const IconGasStoveStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-stove-stroke-rounded IconGasStoveStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="10" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGasStoveDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-stove-duotone-rounded IconGasStoveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="10" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGasStoveTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-stove-twotone-rounded IconGasStoveTwotoneRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGasStoveSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-stove-solid-rounded IconGasStoveSolidRounded"
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

export const IconGasStoveBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-stove-bulk-rounded IconGasStoveBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconGasStoveStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-stove-stroke-sharp IconGasStoveStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconGasStoveSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="gas-stove-solid-sharp IconGasStoveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfGasStove: TheIconSelfPack = {
  name: 'GasStove',
  StrokeRounded: IconGasStoveStrokeRounded,
  DuotoneRounded: IconGasStoveDuotoneRounded,
  TwotoneRounded: IconGasStoveTwotoneRounded,
  SolidRounded: IconGasStoveSolidRounded,
  BulkRounded: IconGasStoveBulkRounded,
  StrokeSharp: IconGasStoveStrokeSharp,
  SolidSharp: IconGasStoveSolidSharp,
};