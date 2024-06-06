import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 14V10C20 6.22876 20 4.34315 18.8973 3.17157C17.7947 2 16.02 2 12.4706 2L11.5294 2C7.98001 2 6.20531 2 5.10266 3.17157C4 4.34315 4 6.22876 4 10L4 14C4 17.7712 4 19.6569 5.10266 20.8284C6.20531 22 7.98001 22 11.5294 22H12.4706C16.02 22 17.7947 22 18.8973 20.8284C20 19.6569 20 17.7712 20 14Z',
  d2: 'M8.80059 12.6645C9.61627 13.4891 10.7485 14 12 14C14.4853 14 16.5 11.9853 16.5 9.5C16.5 7.01472 14.4853 5 12 5C9.51472 5 7.5 7.01472 7.5 9.5C7.5 10.7337 7.9965 11.8515 8.80059 12.6645ZM8.80059 12.6645L12 9.46504',
  d3: 'M10 19H14',
  d4: 'M20 10V14C20 17.7712 20 19.6569 18.8973 20.8284C17.7947 22 16.02 22 12.4706 22H11.5294C7.98001 22 6.20531 22 5.10266 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.10266 3.17157C6.20531 2 7.98001 2 11.5294 2H12.4706C16.02 2 17.7947 2 18.8973 3.17157C20 4.34315 20 6.22876 20 10ZM12 14C14.4853 14 16.5 11.9853 16.5 9.5C16.5 7.01472 14.4853 5 12 5C9.51472 5 7.5 7.01472 7.5 9.5C7.5 10.7337 7.9965 11.8515 8.80059 12.6645C9.61627 13.4891 10.7485 14 12 14Z',
  d5: 'M12.5298 1.25H11.4702H11.4702C9.74578 1.24998 8.37064 1.24997 7.29245 1.40398C6.17547 1.56354 5.26818 1.9014 4.55651 2.65755C3.85089 3.40727 3.54112 4.3523 3.39377 5.51676C3.24998 6.65309 3.24999 8.10624 3.25 9.94651V9.94652V14.0535V14.0535C3.24999 15.8938 3.24998 17.3469 3.39377 18.4832C3.54111 19.6477 3.85089 20.5927 4.55651 21.3424C5.26818 22.0986 6.17547 22.4365 7.29245 22.596C8.37065 22.75 9.7458 22.75 11.4703 22.75H12.5298C14.2542 22.75 15.6294 22.75 16.7076 22.596C17.8245 22.4365 18.7318 22.0986 19.4435 21.3425C20.1491 20.5927 20.4589 19.6477 20.6062 18.4832C20.75 17.3469 20.75 15.8938 20.75 14.0536V14.0535V14.0535V9.94655V9.94652V9.94649C20.75 8.10624 20.75 6.65308 20.6062 5.51676C20.4589 4.3523 20.1491 3.40727 19.4435 2.65755C18.7318 1.9014 17.8245 1.56354 16.7076 1.40399C15.6294 1.24997 14.2542 1.24998 12.5298 1.25H12.5298ZM9.25 19C9.25 18.5858 9.58579 18.25 10 18.25H14C14.4142 18.25 14.75 18.5858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75H10C9.58579 19.75 9.25 19.4142 9.25 19ZM16.5 9.5C16.5 11.9853 14.4853 14 12 14C11.2882 14 10.6149 13.8347 10.0166 13.5404C9.81927 13.4434 9.72062 13.3949 9.70382 13.2935C9.68702 13.192 9.76965 13.1094 9.93491 12.9442L12.7071 10.172C13.0976 9.78143 13.0976 9.14826 12.7071 8.75774C12.3166 8.36721 11.6834 8.36721 11.2929 8.75774L8.53279 11.5179C8.36579 11.6848 8.2823 11.7683 8.1802 11.7508C8.0781 11.7332 8.03035 11.6329 7.93484 11.4323C7.65604 10.8469 7.5 10.1917 7.5 9.5C7.5 7.01472 9.51472 5 12 5C14.4853 5 16.5 7.01472 16.5 9.5Z',
  d6: 'M12.5298 1.25H11.4702C9.74578 1.24998 8.37064 1.24997 7.29245 1.40398C6.17547 1.56354 5.26818 1.9014 4.55651 2.65755C3.85089 3.40727 3.54112 4.3523 3.39377 5.51676C3.24998 6.6531 3.24999 8.10624 3.25 9.94652V14.0535C3.24999 15.8938 3.24998 17.3469 3.39377 18.4832C3.54111 19.6477 3.85089 20.5927 4.55651 21.3424C5.26818 22.0986 6.17547 22.4365 7.29245 22.596C8.37065 22.75 9.7458 22.75 11.4703 22.75H12.5298C14.2542 22.75 15.6294 22.75 16.7076 22.596C17.8245 22.4365 18.7318 22.0986 19.4435 21.3425C20.1491 20.5927 20.4589 19.6477 20.6062 18.4832C20.75 17.3469 20.75 15.8938 20.75 14.0535V9.94655C20.75 8.10628 20.75 6.6531 20.6062 5.51676C20.4589 4.3523 20.1491 3.40727 19.4435 2.65755C18.7318 1.9014 17.8245 1.56354 16.7076 1.40399C15.6294 1.24997 14.2542 1.24998 12.5298 1.25Z',
  d7: 'M9.25 19C9.25 18.5858 9.58579 18.25 10 18.25H14C14.4142 18.25 14.75 18.5858 14.75 19C14.75 19.4142 14.4142 19.75 14 19.75H10C9.58579 19.75 9.25 19.4142 9.25 19Z',
  d8: 'M12 14C14.4853 14 16.5 11.9853 16.5 9.5C16.5 7.01472 14.4853 5 12 5C9.51472 5 7.5 7.01472 7.5 9.5C7.5 10.1917 7.65604 10.8469 7.93484 11.4323C8.03035 11.6329 8.0781 11.7332 8.1802 11.7508C8.2823 11.7683 8.36579 11.6848 8.53279 11.5179L11.2929 8.75774C11.6834 8.36721 12.3166 8.36721 12.7071 8.75774C13.0976 9.14826 13.0976 9.78143 12.7071 10.172L9.93491 12.9442C9.76965 13.1094 9.68702 13.192 9.70382 13.2935C9.72062 13.3949 9.81927 13.4434 10.0166 13.5404C10.6149 13.8347 11.2882 14 12 14Z',
  d9: 'M20 2H4V22H20V2Z',
  d10: 'M9.5 19H14.5',
  d11: 'M3.25 2C3.25 1.58579 3.58579 1.25 4 1.25H20C20.4142 1.25 20.75 1.58579 20.75 2V22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22V2ZM14.5 18.25V19.75H9.5V18.25H14.5ZM12 14C14.4853 14 16.5 11.9853 16.5 9.5C16.5 7.01472 14.4853 5 12 5C9.51472 5 7.5 7.01472 7.5 9.5C7.5 10.3715 7.74774 11.1851 8.17664 11.8743L11.2932 8.75781L12.7074 10.172L9.58296 13.2964C10.2811 13.7419 11.1104 14 12 14Z',
};

export const IconHddStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdd-stroke-rounded IconHddStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHddDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdd-duotone-rounded IconHddDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHddTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdd-twotone-rounded IconHddTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHddSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdd-solid-rounded IconHddSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHddBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdd-bulk-rounded IconHddBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHddStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdd-stroke-sharp IconHddStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHddSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hdd-solid-sharp IconHddSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHdd: TheIconSelfPack = {
  name: 'Hdd',
  StrokeRounded: IconHddStrokeRounded,
  DuotoneRounded: IconHddDuotoneRounded,
  TwotoneRounded: IconHddTwotoneRounded,
  SolidRounded: IconHddSolidRounded,
  BulkRounded: IconHddBulkRounded,
  StrokeSharp: IconHddStrokeSharp,
  SolidSharp: IconHddSolidSharp,
};