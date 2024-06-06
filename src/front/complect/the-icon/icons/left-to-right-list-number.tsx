import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 6L21 6',
  d2: 'M11 12L21 12',
  d3: 'M11 18L21 18',
  d4: 'M3 15H4.5C4.77879 15 4.91819 15 5.03411 15.0231C5.51014 15.1177 5.88225 15.4899 5.97694 15.9659C6 16.0818 6 16.2212 6 16.5C6 16.7788 6 16.9182 5.97694 17.0341C5.88225 17.5101 5.51014 17.8823 5.03411 17.9769C4.91819 18 4.77879 18 4.5 18C4.22121 18 4.08181 18 3.96589 18.0231C3.48986 18.1177 3.11775 18.4899 3.02306 18.9659C3 19.0818 3 19.2212 3 19.5V20.4C3 20.6828 3 20.8243 3.08787 20.9121C3.17574 21 3.31716 21 3.6 21H6',
  d5: 'M3 3H4.2C4.36569 3 4.5 3.13431 4.5 3.3V9M4.5 9H3M4.5 9H6',
  d6: 'M10 6C10 5.44772 10.4477 5 11 5L21 5C21.5523 5 22 5.44772 22 6C22 6.55229 21.5523 7 21 7L11 7C10.4477 7 10 6.55228 10 6Z',
  d7: 'M10 12C10 11.4477 10.4477 11 11 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13L11 13C10.4477 13 10 12.5523 10 12Z',
  d8: 'M10 18C10 17.4477 10.4477 17 11 17L21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19L11 19C10.4477 19 10 18.5523 10 18Z',
  d9: 'M4.79406 16.0023C4.73095 16.0002 4.64632 16 4.50014 16H3.00014C2.44786 16 2.00014 15.5523 2.00014 15C2.00014 14.4477 2.44786 14 3.00014 14H4.50014L4.55926 13.9999C4.775 13.9996 5.01248 13.9992 5.22934 14.0423C6.10206 14.2159 6.78427 14.8981 6.95787 15.7708C7.001 15.9877 7.00059 16.2252 7.00021 16.4409L7.00014 16.5L7.00021 16.5591C7.00059 16.7749 7.001 17.0124 6.95787 17.2292C6.78427 18.1019 6.10206 18.7842 5.22934 18.9577C5.01248 19.0009 4.775 19.0005 4.55927 19.0001L4.50014 19C4.35396 19 4.26934 19.0002 4.20622 19.0023C4.17716 19.0033 4.16154 19.0045 4.15524 19.0051C4.08068 19.0223 4.02241 19.0806 4.00525 19.1551C4.00466 19.1614 4.00343 19.177 4.00244 19.2061C4.00028 19.2692 4.00014 19.3538 4.00014 19.5V20H6.00014C6.55243 20 7.00014 20.4477 7.00014 21C7.00014 21.5523 6.55243 22 6.00014 22H3.60014L3.57261 22H3.57259C3.45839 22.0002 3.28884 22.0004 3.13771 21.9801C2.94513 21.9542 2.6416 21.88 2.3809 21.6193C2.1202 21.3586 2.04593 21.055 2.02004 20.8624C1.99972 20.7113 1.99996 20.5418 2.00011 20.4276L2.00014 20.4V19.5L2.00007 19.4409L2.00007 19.4409C1.99969 19.2252 1.99928 18.9877 2.04241 18.7708C2.21601 17.8981 2.89822 17.2159 3.77094 17.0423C3.9878 16.9992 4.22528 16.9996 4.44101 16.9999H4.44102L4.50014 17C4.64632 17 4.73095 16.9999 4.79406 16.9977C4.82312 16.9967 4.83874 16.9955 4.84504 16.9949C4.9196 16.9778 4.97787 16.9195 4.99504 16.8449C4.99562 16.8386 4.99685 16.823 4.99784 16.7939C5 16.7308 5.00014 16.6462 5.00014 16.5C5.00014 16.3538 5 16.2692 4.99784 16.2061C4.99685 16.177 4.99562 16.1614 4.99504 16.1551C4.97787 16.0806 4.9196 16.0223 4.84504 16.0051L4.79406 16.0023Z',
  d10: 'M2 3C2 2.44772 2.44772 2 3 2H4.2C4.91797 2 5.5 2.58203 5.5 3.3V8H6C6.55228 8 7 8.44772 7 9C7 9.55228 6.55228 10 6 10H3C2.44772 10 2 9.55228 2 9C2 8.44772 2.44772 8 3 8H3.5V4H3C2.44772 4 2 3.55228 2 3Z',
  d11: 'M10.5 6L20.5 6',
  d12: 'M10.5 12L20.5 12',
  d13: 'M10.5 18L20.5 18',
  d14: 'M3.5 15H6.5V18H3.50034V21H6.5',
  d15: 'M3.5 3H5V9M5 9H3.5M5 9H6.5',
  d16: 'M21 7L11 7L11 5L21 5V7Z',
  d17: 'M21 13L11 13L11 11L21 11V13Z',
  d18: 'M21 19L11 19L11 17L21 17V19Z',
  d19: 'M3 14H6.75C7.16421 14 7.5 14.3358 7.5 14.75V17.75C7.5 18.1642 7.16421 18.5 6.75 18.5H4.50034V20H7.5V21.5H3.75034C3.33613 21.5 3.00034 21.1642 3.00034 20.75V17.75C3.00034 17.3358 3.33613 17 3.75034 17H6V15.5H3V14Z',
  d20: 'M4.5 4H3.75V2.5H5.25C5.66421 2.5 6 2.83579 6 3.25V8.5H6.75V10H3.75V8.5H4.5V4Z',
};

export const IconLeftToRightListNumberStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-number-stroke-rounded IconLeftToRightListNumberStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftToRightListNumberDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-number-duotone-rounded IconLeftToRightListNumberDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftToRightListNumberTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-number-twotone-rounded IconLeftToRightListNumberTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftToRightListNumberSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-number-solid-rounded IconLeftToRightListNumberSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
      <path 
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

export const IconLeftToRightListNumberBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-number-bulk-rounded IconLeftToRightListNumberBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLeftToRightListNumberStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-number-stroke-sharp IconLeftToRightListNumberStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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

export const IconLeftToRightListNumberSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="left-to-right-list-number-solid-sharp IconLeftToRightListNumberSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLeftToRightListNumber: TheIconSelfPack = {
  name: 'LeftToRightListNumber',
  StrokeRounded: IconLeftToRightListNumberStrokeRounded,
  DuotoneRounded: IconLeftToRightListNumberDuotoneRounded,
  TwotoneRounded: IconLeftToRightListNumberTwotoneRounded,
  SolidRounded: IconLeftToRightListNumberSolidRounded,
  BulkRounded: IconLeftToRightListNumberBulkRounded,
  StrokeSharp: IconLeftToRightListNumberStrokeSharp,
  SolidSharp: IconLeftToRightListNumberSolidSharp,
};