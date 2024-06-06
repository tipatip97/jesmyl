import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 16L16 8M9.5 8L9.5 9.5M9.5 9.5L9.5 11M9.5 9.5L11 9.5M9.5 9.5L8 9.5M16 14.5L13 14.5',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289ZM9.5 8C9.5 7.44772 9.05228 7 8.5 7C7.94771 7 7.5 7.44772 7.5 8V8.5H7C6.44772 8.5 6 8.94772 6 9.5C6 10.0523 6.44772 10.5 7 10.5H7.5V11C7.5 11.5523 7.94772 12 8.5 12C9.05229 12 9.5 11.5523 9.5 11V10.5H10C10.5523 10.5 11 10.0523 11 9.5C11 8.94772 10.5523 8.5 10 8.5H9.5V8ZM17 13.5H14C13.4477 13.5 13 13.9477 13 14.5C13 15.0523 13.4477 15.5 14 15.5H17C17.5523 15.5 18 15.0523 18 14.5C18 13.9477 17.5523 13.5 17 13.5Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L15.2929 7.29289ZM8.5 7C9.05228 7 9.5 7.44772 9.5 8V8.5L10 8.5C10.5523 8.5 11 8.94772 11 9.5C11 10.0523 10.5523 10.5 10 10.5H9.5V11C9.5 11.5523 9.05228 12 8.5 12C7.94772 12 7.5 11.5523 7.5 11L7.5 10.5H7C6.44772 10.5 6 10.0523 6 9.5C6 8.94772 6.44772 8.5 7 8.5H7.5V8C7.5 7.44772 7.94772 7 8.5 7ZM14 13.5L17 13.5C17.5523 13.5 18 13.9477 18 14.5C18 15.0523 17.5523 15.5 17 15.5H14C13.4477 15.5 13 15.0523 13 14.5C13 13.9477 13.4477 13.5 14 13.5Z',
  d5: 'M8 16L16 8M9 7V9M9 9V11M9 9H11M9 9H7M16 14.5L13 14.5',
  d6: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8.39648 6.89648V8.39648H6.89648V10.3965H8.39648V11.8965H10.3965V10.3965H11.8965V8.39648H10.3965V6.89648H8.39648ZM9.10359 17.1036L17.1036 9.10359L15.6894 7.68938L7.68938 15.6894L9.10359 17.1036ZM16.8965 13.8965H13.3965V15.8965H16.8965V13.8965Z',
};

export const IconPlusMinusCircle02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-circle-02-stroke-rounded IconPlusMinusCircle02StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconPlusMinusCircle02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-circle-02-duotone-rounded IconPlusMinusCircle02DuotoneRounded"
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

export const IconPlusMinusCircle02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-circle-02-twotone-rounded IconPlusMinusCircle02TwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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

export const IconPlusMinusCircle02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-circle-02-solid-rounded IconPlusMinusCircle02SolidRounded"
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

export const IconPlusMinusCircle02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-circle-02-bulk-rounded IconPlusMinusCircle02BulkRounded"
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

export const IconPlusMinusCircle02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-circle-02-stroke-sharp IconPlusMinusCircle02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlusMinusCircle02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-circle-02-solid-sharp IconPlusMinusCircle02SolidSharp"
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

export const iconPackOfPlusMinusCircle02: TheIconSelfPack = {
  name: 'PlusMinusCircle02',
  StrokeRounded: IconPlusMinusCircle02StrokeRounded,
  DuotoneRounded: IconPlusMinusCircle02DuotoneRounded,
  TwotoneRounded: IconPlusMinusCircle02TwotoneRounded,
  SolidRounded: IconPlusMinusCircle02SolidRounded,
  BulkRounded: IconPlusMinusCircle02BulkRounded,
  StrokeSharp: IconPlusMinusCircle02StrokeSharp,
  SolidSharp: IconPlusMinusCircle02SolidSharp,
};