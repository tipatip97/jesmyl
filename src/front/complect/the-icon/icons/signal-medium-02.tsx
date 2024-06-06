import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 19L18 19',
  d2: 'M7 17V16C7 15.0572 7 14.5858 6.70711 14.2929C6.41421 14 5.94281 14 5 14C4.05719 14 3.58579 14 3.29289 14.2929C3 14.5858 3 15.0572 3 16V17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17Z',
  d3: 'M14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10C11.0572 10 10.5858 10 10.2929 10.2929C10 10.5858 10 11.0572 10 12V17C10 17.9428 10 18.4142 10.2929 18.7071C10.5858 19 11.0572 19 12 19C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17Z',
  d4: 'M17 19C17 18.4477 17.4477 18 18 18L21 18C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20L18 20C17.4477 20 17 19.5523 17 19Z',
  d5: 'M4.95526 13.25L5.00001 13.25L5.04476 13.25C5.47757 13.25 5.8744 13.2499 6.19721 13.2933C6.55269 13.3411 6.92842 13.4535 7.23744 13.7626C7.54647 14.0716 7.65891 14.4473 7.70671 14.8028C7.75011 15.1256 7.75006 15.5224 7.75001 15.9553V15.9553L7.75001 16V17L7.75001 17.0448V17.0448C7.75006 17.4776 7.75011 17.8744 7.70671 18.1972C7.65891 18.5527 7.54647 18.9284 7.23744 19.2374C6.92842 19.5465 6.55269 19.6589 6.19721 19.7067C5.8744 19.7501 5.47758 19.7501 5.04476 19.75H5.04475L5.00001 19.75L4.95526 19.75H4.95525C4.52244 19.7501 4.12561 19.7501 3.8028 19.7067C3.44732 19.6589 3.07159 19.5465 2.76257 19.2374C2.45355 18.9284 2.3411 18.5527 2.29331 18.1972C2.24991 17.8744 2.24995 17.4776 2.25 17.0448L2.25001 17V16L2.25 15.9553C2.24995 15.5224 2.24991 15.1256 2.29331 14.8028C2.3411 14.4473 2.45355 14.0716 2.76257 13.7626C3.07159 13.4535 3.44732 13.3411 3.8028 13.2933C4.12561 13.2499 4.52244 13.25 4.95526 13.25Z',
  d6: 'M11.9553 9.25L12 9.25001L12.0448 9.25C12.4776 9.24995 12.8744 9.24991 13.1972 9.29331C13.5527 9.3411 13.9284 9.45355 14.2374 9.76257C14.5465 10.0716 14.6589 10.4473 14.7067 10.8028C14.7501 11.1256 14.7501 11.5224 14.75 11.9553V11.9553L14.75 12V17L14.75 17.0448V17.0448C14.7501 17.4776 14.7501 17.8744 14.7067 18.1972C14.6589 18.5527 14.5465 18.9284 14.2374 19.2374C13.9284 19.5465 13.5527 19.6589 13.1972 19.7067C12.8744 19.7501 12.4776 19.7501 12.0448 19.75H12.0448L12 19.75L11.9553 19.75H11.9553C11.5224 19.7501 11.1256 19.7501 10.8028 19.7067C10.4473 19.6589 10.0716 19.5465 9.76257 19.2374C9.45355 18.9284 9.3411 18.5527 9.29331 18.1972C9.24991 17.8744 9.24995 17.4776 9.25 17.0448L9.25001 17V12L9.25 11.9553C9.24995 11.5224 9.24991 11.1256 9.29331 10.8028C9.3411 10.4473 9.45355 10.0716 9.76257 9.76257C10.0716 9.45355 10.4473 9.3411 10.8028 9.29331C11.1256 9.24991 11.5224 9.24995 11.9553 9.25Z',
  d7: 'M7 14H3V19H7V14Z',
  d8: 'M14 10H10V19H14V10Z',
  d9: 'M17.25 15.25L21.25 15.25L21.25 17.25L17.25 17.25L17.25 15.25Z',
  d10: 'M2.75 11.5C2.75 11.0858 3.08579 10.75 3.5 10.75H7.5C7.91421 10.75 8.25 11.0858 8.25 11.5V16.5C8.25 16.9142 7.91421 17.25 7.5 17.25H3.5C3.08579 17.25 2.75 16.9142 2.75 16.5V11.5Z',
  d11: 'M9.75 7.5C9.75 7.08579 10.0858 6.75 10.5 6.75H14.5C14.9142 6.75 15.25 7.08579 15.25 7.5V16.5C15.25 16.9142 14.9142 17.25 14.5 17.25H10.5C10.0858 17.25 9.75 16.9142 9.75 16.5V7.5Z',
};

export const IconSignalMedium02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-medium-02-stroke-rounded IconSignalMedium02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSignalMedium02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-medium-02-duotone-rounded IconSignalMedium02DuotoneRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalMedium02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-medium-02-twotone-rounded IconSignalMedium02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconSignalMedium02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-medium-02-solid-rounded IconSignalMedium02SolidRounded"
    >
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalMedium02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-medium-02-bulk-rounded IconSignalMedium02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalMedium02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-medium-02-stroke-sharp IconSignalMedium02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalMedium02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-medium-02-solid-sharp IconSignalMedium02SolidSharp"
    >
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSignalMedium02: TheIconSelfPack = {
  name: 'SignalMedium02',
  StrokeRounded: IconSignalMedium02StrokeRounded,
  DuotoneRounded: IconSignalMedium02DuotoneRounded,
  TwotoneRounded: IconSignalMedium02TwotoneRounded,
  SolidRounded: IconSignalMedium02SolidRounded,
  BulkRounded: IconSignalMedium02BulkRounded,
  StrokeSharp: IconSignalMedium02StrokeSharp,
  SolidSharp: IconSignalMedium02SolidSharp,
};