import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 2V8M2 5H8',
  d2: 'M12 5H15M12 22H15M18 5H18.5C20.433 5 22 6.567 22 8.5V9M22 18V18.5C22 20.433 20.433 22 18.5 22H18M9 22H8.5C6.567 22 5 20.433 5 18.5L5 18M22 12V15M5 12L5 15',
  d3: 'M5 13.5C5 9.49306 5 7.48959 6.2448 6.2448C7.48959 5 9.49306 5 13.5 5C17.5069 5 19.5104 5 20.7552 6.2448C22 7.48959 22 9.49306 22 13.5C22 17.5069 22 19.5104 20.7552 20.7552C19.5104 22 17.5069 22 13.5 22C9.49306 22 7.48959 22 6.2448 20.7552C5 19.5104 5 17.5069 5 13.5Z',
  d4: 'M5 1C5.55228 1 6 1.44772 6 2V4H8C8.55228 4 9 4.44771 9 5C9 5.55228 8.55228 6 8 6H6V8C6 8.55228 5.55228 9 5 9C4.44771 9 4 8.55228 4 8V6H2C1.44772 6 1 5.55228 1 5C1 4.44771 1.44772 4 2 4H4V2C4 1.44772 4.44771 1 5 1Z',
  d5: 'M11 5C11 4.44772 11.4477 4 12 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H12C11.4477 6 11 5.55228 11 5ZM17 5C17 4.44772 17.4477 4 18 4H18.5C20.9853 4 23 6.01472 23 8.5V9C23 9.55228 22.5523 10 22 10C21.4477 10 21 9.55228 21 9V8.5C21 7.11929 19.8807 6 18.5 6H18C17.4477 6 17 5.55228 17 5ZM5 11C5.55228 11 6 11.4477 6 12V15C6 15.5523 5.55228 16 5 16C4.44772 16 4 15.5523 4 15L4 12C4 11.4477 4.44772 11 5 11ZM22 11C22.5523 11 23 11.4477 23 12V15C23 15.5523 22.5523 16 22 16C21.4477 16 21 15.5523 21 15V12C21 11.4477 21.4477 11 22 11ZM5 17C5.55229 17 6 17.4477 6 18V18.5C6 19.8807 7.11929 21 8.5 21H9C9.55228 21 10 21.4477 10 22C10 22.5523 9.55228 23 9 23H8.5C6.01472 23 4 20.9853 4 18.5L4 18C4 17.4477 4.44772 17 5 17ZM22 17C22.5523 17 23 17.4477 23 18V18.5C23 20.9853 20.9853 23 18.5 23H18C17.4477 23 17 22.5523 17 22C17 21.4477 17.4477 21 18 21H18.5C19.8807 21 21 19.8807 21 18.5V18C21 17.4477 21.4477 17 22 17ZM11 22C11 21.4477 11.4477 21 12 21H15C15.5523 21 16 21.4477 16 22C16 22.5523 15.5523 23 15 23H12C11.4477 23 11 22.5523 11 22Z',
  d6: 'M11 5H15M12 22H15M18 5H22V9M22 18V22H18M9 22H5L5 18M22 12V15M5 11L5 15',
  d7: 'M3.5 3.5V1.5H5.5V3.5H7.5V5.5H5.5V7.5H3.5V5.5H1.5V3.5H3.5Z',
  d8: 'M14.5 5.5H10.5V3.5H14.5V5.5ZM20.5 5.5H17.5V3.5H21.5C22.0523 3.5 22.5 3.94772 22.5 4.5V8.5H20.5V5.5ZM3.5 14.5L3.5 10.5H5.5V14.5H3.5ZM20.5 14.5V11.5H22.5V14.5H20.5ZM5.5 20.5L5.5 17.5H3.5L3.5 21.5C3.5 21.7652 3.60536 22.0196 3.79289 22.2071C3.98043 22.3946 4.23478 22.5 4.5 22.5H8.5V20.5H5.5ZM20.5 20.5V17.5H22.5V21.5C22.5 22.0523 22.0523 22.5 21.5 22.5H17.5V20.5H20.5ZM14.5 22.5H11.5V20.5H14.5V22.5Z',
};

export const IconSelect01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-01-stroke-rounded IconSelect01StrokeRounded"
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

export const IconSelect01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-01-duotone-rounded IconSelect01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconSelect01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-01-twotone-rounded IconSelect01TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSelect01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-01-solid-rounded IconSelect01SolidRounded"
    >
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

export const IconSelect01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-01-bulk-rounded IconSelect01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSelect01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-01-stroke-sharp IconSelect01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSelect01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="select-01-solid-sharp IconSelect01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfSelect01: TheIconSelfPack = {
  name: 'Select01',
  StrokeRounded: IconSelect01StrokeRounded,
  DuotoneRounded: IconSelect01DuotoneRounded,
  TwotoneRounded: IconSelect01TwotoneRounded,
  SolidRounded: IconSelect01SolidRounded,
  BulkRounded: IconSelect01BulkRounded,
  StrokeSharp: IconSelect01StrokeSharp,
  SolidSharp: IconSelect01SolidSharp,
};