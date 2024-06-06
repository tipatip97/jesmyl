import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5459 3.79364L12.2929 5.4104C11.2216 6.79272 13.3531 8.46736 14.4395 7.07557L14.8139 6.59591C15.5066 5.70846 16.8119 5.61801 17.5969 6.40307C18.382 7.18812 18.2915 8.49338 17.4041 9.18609L16.9244 9.56049C15.5326 10.6469 17.2073 12.7784 18.5896 11.7071L20.2064 10.4541C22.4319 8.7293 22.6147 5.42276 20.596 3.40405C18.5772 1.38533 15.2707 1.56805 13.5459 3.79364Z',
  d2: 'M3 17.4103L7 5M6.58974 21L17 12',
  d3: 'M21.1263 2.8736C18.7966 0.543941 14.9618 0.742184 12.9531 3.33411L11.7001 4.95086C11.3024 5.46405 11.1782 6.0484 11.2883 6.59693C11.3944 7.12575 11.7068 7.57082 12.0956 7.87435C12.4844 8.17791 12.9928 8.37342 13.5334 8.34585C14.0942 8.31726 14.63 8.0503 15.0308 7.53694L15.4052 7.05728C15.8279 6.51563 16.6086 6.47522 17.0666 6.93329C17.5247 7.39135 17.4843 8.17198 16.9426 8.59476L16.463 8.96917C15.9496 9.36987 15.6827 9.90573 15.6541 10.4666C15.6265 11.0072 15.822 11.5155 16.1256 11.9043C16.4291 12.2931 16.8742 12.6055 17.403 12.7116C17.9515 12.8217 18.5359 12.6975 19.0491 12.2998L20.6658 11.0468C23.2577 9.0381 23.456 5.20327 21.1263 2.8736Z',
  d4: 'M4.5 18C3.67157 18 3 18.6716 3 19.5C3 20.3284 3.67157 21 4.5 21C5.32843 21 6 20.3284 6 19.5C6 18.6716 5.32843 18 4.5 18ZM1 19.5C1 17.567 2.567 16 4.5 16C6.433 16 8 17.567 8 19.5C8 21.433 6.433 23 4.5 23C2.567 23 1 21.433 1 19.5Z',
  d5: 'M7.30704 4.04849C7.8327 4.21791 8.12148 4.78139 7.95205 5.30704L3.95205 17.7173C3.78263 18.243 3.21915 18.5317 2.6935 18.3623C2.16784 18.1929 1.87906 17.6294 2.04849 17.1038L6.04849 4.6935C6.21791 4.16784 6.78139 3.87906 7.30704 4.04849ZM17.7568 11.3463C18.118 11.7641 18.0721 12.3956 17.6543 12.7568L7.24402 21.7568C6.82622 22.118 6.19472 22.0721 5.83353 21.6543C5.47233 21.2365 5.51821 20.605 5.93601 20.2438L16.3463 11.2438C16.7641 10.8826 17.3956 10.9285 17.7568 11.3463Z',
  d6: 'M20.208 10.4541L18.0017 12L16.4349 10.0771L17.4058 9.18609C18.2932 8.49338 18.3837 7.18812 17.5986 6.40307C16.8135 5.61801 15.5083 5.70845 14.8156 6.59591L13.7895 7.64421L11.7422 5.74052L13.5476 3.79364C15.2724 1.56805 18.5789 1.38533 20.5976 3.40404C22.6163 5.42276 22.4336 8.7293 20.208 10.4541Z',
  d7: 'M3 17.4103L7 5M6.58974 21L17.5 11.5',
  d8: 'M12.9755 3.307C14.9899 0.740829 18.8061 0.552088 21.1276 2.8736C23.4572 5.20327 23.259 9.0381 20.6671 11.0468L20.6528 11.0579L17.8604 13.0144L15.4065 10.0025L16.9203 8.61317L16.9439 8.59476C17.4856 8.17198 17.526 7.39135 17.0679 6.93329C16.6098 6.47522 15.8292 6.51563 15.4064 7.05727L15.3806 7.09039L13.8138 8.69114L10.6826 5.77963L12.9755 3.307Z',
  d9: 'M4.5 17.75C3.5335 17.75 2.75 18.5335 2.75 19.5C2.75 20.4665 3.5335 21.25 4.5 21.25C5.4665 21.25 6.25 20.4665 6.25 19.5C6.25 18.5335 5.4665 17.75 4.5 17.75ZM1.25 19.5C1.25 17.7051 2.70507 16.25 4.5 16.25C6.29493 16.25 7.75 17.7051 7.75 19.5C7.75 21.2949 6.29493 22.75 4.5 22.75C2.70507 22.75 1.25 21.2949 1.25 19.5Z',
  d10: 'M7.71381 5.23018L3.71381 17.6404L2.28613 17.1803L6.28613 4.77002L7.71381 5.23018ZM17.9925 12.0657L7.08223 21.5657L6.0972 20.4345L17.0075 10.9345L17.9925 12.0657Z',
};

export const IconSafetyPin02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-02-stroke-rounded IconSafetyPin02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSafetyPin02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-02-duotone-rounded IconSafetyPin02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
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
      <circle 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSafetyPin02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-02-twotone-rounded IconSafetyPin02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconSafetyPin02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-02-solid-rounded IconSafetyPin02SolidRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSafetyPin02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-02-bulk-rounded IconSafetyPin02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconSafetyPin02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-02-stroke-sharp IconSafetyPin02StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="4.5" 
        cy="19.5" 
        r="2.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSafetyPin02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="safety-pin-02-solid-sharp IconSafetyPin02SolidSharp"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSafetyPin02: TheIconSelfPack = {
  name: 'SafetyPin02',
  StrokeRounded: IconSafetyPin02StrokeRounded,
  DuotoneRounded: IconSafetyPin02DuotoneRounded,
  TwotoneRounded: IconSafetyPin02TwotoneRounded,
  SolidRounded: IconSafetyPin02SolidRounded,
  BulkRounded: IconSafetyPin02BulkRounded,
  StrokeSharp: IconSafetyPin02StrokeSharp,
  SolidSharp: IconSafetyPin02SolidSharp,
};