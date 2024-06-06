import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 6C5 4.11438 5 3.17157 5.58579 2.58579C6.17157 2 7.11438 2 9 2H15C16.8856 2 17.8284 2 18.4142 2.58579C19 3.17157 19 4.11438 19 6V20C19 20.9428 19 21.4142 18.7071 21.7071C18.4142 22 17.9428 22 17 22H7C6.05719 22 5.58579 22 5.29289 21.7071C5 21.4142 5 20.9428 5 20V6Z',
  d2: 'M8 7H8.00898',
  d3: 'M8 13H8.00898',
  d4: 'M5 10H19',
  d5: 'M7 22H17H17C17.9428 22 18.4142 22 18.7071 21.7071C19 21.4142 19 20.9428 19 20V10H5V20C5 20.9428 5 21.4142 5.29289 21.7071C5.58579 22 6.05719 22 6.99999 22H7Z',
  d6: 'M15.052 1.25H8.948H8.94797C8.04953 1.24997 7.30028 1.24995 6.70552 1.32992C6.07773 1.41432 5.51093 1.59999 5.05546 2.05546C4.59999 2.51093 4.41432 3.07773 4.32991 3.70552C4.24995 4.3003 4.24997 5.04951 4.25 5.94797V5.948V8.4C4.25 8.68284 4.25 8.82427 4.33787 8.91213C4.42574 9 4.56716 9 4.85 9H19.15C19.4328 9 19.5743 9 19.6621 8.91213C19.75 8.82427 19.75 8.68284 19.75 8.4V5.94801C19.75 5.04954 19.7501 4.3003 19.6701 3.70552C19.5857 3.07773 19.4 2.51093 18.9445 2.05546C18.4891 1.59999 17.9223 1.41432 17.2945 1.32992C16.6997 1.24995 15.9505 1.24997 15.0521 1.25H15.052ZM19.75 11.6C19.75 11.3172 19.75 11.1757 19.6622 11.0879C19.5743 11 19.4329 11 19.15 11H4.85002C4.56718 11 4.42576 11 4.33789 11.0879C4.25002 11.1757 4.25002 11.3172 4.25002 11.6L4.25002 20.0448C4.24997 20.4776 4.24992 20.8744 4.29332 21.1972C4.34111 21.5527 4.45356 21.9284 4.76258 22.2375C5.07161 22.5465 5.44733 22.6589 5.80281 22.7067C6.12563 22.7501 6.52246 22.7501 6.95528 22.75H17.0448C17.4776 22.7501 17.8744 22.7501 18.1972 22.7067C18.5527 22.6589 18.9284 22.5465 19.2375 22.2375C19.5465 21.9284 19.6589 21.5527 19.7067 21.1972C19.7501 20.8744 19.7501 20.4776 19.75 20.0448L19.75 11.6ZM7 6C7 5.44772 7.44571 5 7.99553 5H8.00447C8.55429 5 9 5.44772 9 6C9 6.55228 8.55429 7 8.00447 7H7.99553C7.44571 7 7 6.55228 7 6ZM7.99553 13C7.44571 13 7 13.4477 7 14C7 14.5523 7.44571 15 7.99553 15H8.00447C8.55429 15 9 14.5523 9 14C9 13.4477 8.55429 13 8.00447 13H7.99553Z',
  d7: 'M15.052 1.25H8.948C8.04955 1.24997 7.30029 1.24995 6.70552 1.32992C6.07773 1.41432 5.51093 1.59999 5.05546 2.05546C4.59999 2.51093 4.41432 3.07773 4.32991 3.70552C4.24995 4.30031 4.24997 5.04952 4.25 5.948L4.25 8.4C4.25 8.68284 4.25 8.82427 4.33787 8.91213C4.42574 9 4.56716 9 4.85 9H19.15C19.4328 9 19.5743 9 19.6621 8.91213C19.75 8.82427 19.75 8.68284 19.75 8.4V5.94801C19.75 5.04954 19.7501 4.3003 19.6701 3.70552C19.5857 3.07773 19.4 2.51093 18.9445 2.05546C18.4891 1.59999 17.9223 1.41432 17.2945 1.32992C16.6997 1.24995 15.9505 1.24997 15.052 1.25Z',
  d8: 'M19.75 11.6C19.75 11.3172 19.75 11.1757 19.6622 11.0879C19.5743 11 19.4329 11 19.15 11H4.85002C4.56718 11 4.42576 11 4.33789 11.0879C4.25002 11.1757 4.25002 11.3172 4.25002 11.6L4.25002 20.0448C4.24997 20.4776 4.24992 20.8744 4.29332 21.1972C4.34111 21.5527 4.45356 21.9284 4.76258 22.2375C5.07161 22.5465 5.44733 22.6589 5.80281 22.7067C6.12563 22.7501 6.52246 22.7501 6.95528 22.75H17.0448C17.4776 22.7501 17.8744 22.7501 18.1972 22.7067C18.5527 22.6589 18.9284 22.5465 19.2375 22.2375C19.5465 21.9284 19.6589 21.5527 19.7067 21.1972C19.7501 20.8744 19.7501 20.4776 19.75 20.0448L19.75 11.6Z',
  d9: 'M7 6C7 5.44772 7.44571 5 7.99553 5H8.00447C8.55429 5 9 5.44772 9 6C9 6.55228 8.55429 7 8.00447 7H7.99553C7.44571 7 7 6.55228 7 6Z',
  d10: 'M7 14C7 13.4477 7.44571 13 7.99553 13H8.00447C8.55429 13 9 13.4477 9 14C9 14.5523 8.55429 15 8.00447 15H7.99553C7.44571 15 7 14.5523 7 14Z',
  d11: 'M19 2H5V22H19V2Z',
  d12: 'M8 7V5',
  d13: 'M8 17V13',
  d14: 'M4.25 2C4.25 1.58579 4.58579 1.25 5 1.25H19C19.4142 1.25 19.75 1.58579 19.75 2V9.25H4.25V2ZM4.25 10.75H19.75V22C19.75 22.4142 19.4142 22.75 19 22.75H5C4.58579 22.75 4.25 22.4142 4.25 22V10.75ZM9 5V7H7V5H9ZM9 17V13H7V17H9Z',
};

export const IconRefrigeratorStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="refrigerator-stroke-rounded IconRefrigeratorStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRefrigeratorDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="refrigerator-duotone-rounded IconRefrigeratorDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRefrigeratorTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="refrigerator-twotone-rounded IconRefrigeratorTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRefrigeratorSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="refrigerator-solid-rounded IconRefrigeratorSolidRounded"
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

export const IconRefrigeratorBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="refrigerator-bulk-rounded IconRefrigeratorBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconRefrigeratorStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="refrigerator-stroke-sharp IconRefrigeratorStrokeSharp"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRefrigeratorSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="refrigerator-solid-sharp IconRefrigeratorSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRefrigerator: TheIconSelfPack = {
  name: 'Refrigerator',
  StrokeRounded: IconRefrigeratorStrokeRounded,
  DuotoneRounded: IconRefrigeratorDuotoneRounded,
  TwotoneRounded: IconRefrigeratorTwotoneRounded,
  SolidRounded: IconRefrigeratorSolidRounded,
  BulkRounded: IconRefrigeratorBulkRounded,
  StrokeSharp: IconRefrigeratorStrokeSharp,
  SolidSharp: IconRefrigeratorSolidSharp,
};