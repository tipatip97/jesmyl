import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 8L8 16M14.5 16V14.5M14.5 14.5V13M14.5 14.5H13M14.5 14.5H16M8 9.5H11',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L16.7071 8.70711ZM7 8.5C6.44772 8.5 6 8.94772 6 9.5C6 10.0523 6.44772 10.5 7 10.5H10C10.5523 10.5 11 10.0523 11 9.5C11 8.94772 10.5523 8.5 10 8.5H7ZM16.5 13C16.5 12.4477 16.0523 12 15.5 12C14.9477 12 14.5 12.4477 14.5 13V13.5H14C13.4477 13.5 13 13.9477 13 14.5C13 15.0523 13.4477 15.5 14 15.5H14.5V16C14.5 16.5523 14.9477 17 15.5 17C16.0523 17 16.5 16.5523 16.5 16V15.5H17C17.5523 15.5 18 15.0523 18 14.5C18 13.9477 17.5523 13.5 17 13.5H16.5V13Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289ZM6 9.5C6 8.94772 6.44772 8.5 7 8.5H10C10.5523 8.5 11 8.94772 11 9.5C11 10.0523 10.5523 10.5 10 10.5H7C6.44772 10.5 6 10.0523 6 9.5ZM15.5 12C16.0523 12 16.5 12.4477 16.5 13V13.5H17C17.5523 13.5 18 13.9477 18 14.5C18 15.0523 17.5523 15.5 17 15.5H16.5V16C16.5 16.5523 16.0523 17 15.5 17C14.9477 17 14.5 16.5523 14.5 16V15.5H14C13.4477 15.5 13 15.0523 13 14.5C13 13.9477 13.4477 13.5 14 13.5H14.5V13C14.5 12.4477 14.9477 12 15.5 12Z',
  d5: 'M16 8L8 16M15 17V15M15 15V13M15 15H13M15 15H17M8 9.5H11',
  d6: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.6036 17.1036V15.6036H17.1036V13.6036H15.6036V12.1036H13.6036V13.6036H12.1036V15.6036H13.6036V17.1036H15.6036ZM14.8965 6.89648L6.89648 14.8965L8.3107 16.3107L16.3107 8.3107L14.8965 6.89648ZM7.10359 10.1036H10.6036V8.10359H7.10359V10.1036Z',
};

export const IconMinusPlusCircle02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-circle-02-stroke-rounded IconMinusPlusCircle02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconMinusPlusCircle02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-circle-02-duotone-rounded IconMinusPlusCircle02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconMinusPlusCircle02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-circle-02-twotone-rounded IconMinusPlusCircle02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconMinusPlusCircle02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-circle-02-solid-rounded IconMinusPlusCircle02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMinusPlusCircle02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-circle-02-bulk-rounded IconMinusPlusCircle02BulkRounded"
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

export const IconMinusPlusCircle02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-circle-02-stroke-sharp IconMinusPlusCircle02StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconMinusPlusCircle02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="minus-plus-circle-02-solid-sharp IconMinusPlusCircle02SolidSharp"
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

export const iconPackOfMinusPlusCircle02: TheIconSelfPack = {
  name: 'MinusPlusCircle02',
  StrokeRounded: IconMinusPlusCircle02StrokeRounded,
  DuotoneRounded: IconMinusPlusCircle02DuotoneRounded,
  TwotoneRounded: IconMinusPlusCircle02TwotoneRounded,
  SolidRounded: IconMinusPlusCircle02SolidRounded,
  BulkRounded: IconMinusPlusCircle02BulkRounded,
  StrokeSharp: IconMinusPlusCircle02StrokeSharp,
  SolidSharp: IconMinusPlusCircle02SolidSharp,
};