import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z',
  d3: 'M2 11C4.59628 12.0036 6.85307 12.668 8.99803 12.993M22 11.0031C19.4075 12.0125 17.152 12.6781 15.0021 13',
  d4: 'M21.9621 11.1238C21.5183 6.01125 17.2275 2 11.9999 2C6.81459 2 2.55104 5.94668 2.04932 11C4.5005 11.987 6.79468 12.6492 8.99995 12.9912C9.0047 11.3384 10.346 10 11.9999 10C13.6568 10 14.9999 11.3431 14.9999 13C14.9999 13.0386 14.9992 13.077 14.9978 13.1153C17.3195 12.8364 19.6102 12.1706 21.9621 11.1238Z',
  d5: 'M12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11ZM8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13Z',
  d6: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM3.2041 12C3.2041 16.8576 7.14196 20.7955 11.9996 20.7955C16.8572 20.7955 20.795 16.8576 20.795 12C20.795 11.8948 20.795 11.8421 20.7849 11.8042C20.7475 11.6638 20.6175 11.5714 20.4726 11.5822C20.4335 11.5851 20.383 11.6027 20.282 11.6379C18.6471 12.2068 17.1378 12.6229 15.6871 12.8861C15.3919 12.9397 15.2443 12.9665 15.1442 12.9009C15.044 12.8353 15.0027 12.66 14.9201 12.3094C14.6082 10.9855 13.4192 10 12 10C10.5831 10 9.39385 10.9823 9.0791 12.303C8.99565 12.6532 8.95392 12.8283 8.85373 12.8937C8.75354 12.959 8.60604 12.9321 8.31104 12.8781C6.86789 12.6143 5.36467 12.2005 3.73453 11.6368C3.61339 11.5949 3.55282 11.574 3.50064 11.5746C3.37873 11.576 3.26289 11.6585 3.22172 11.7732C3.2041 11.8224 3.2041 11.8816 3.2041 12Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM9.74964 13C9.74964 11.7574 10.757 10.75 11.9996 10.75C13.2423 10.75 14.2496 11.7574 14.2496 13C14.2496 14.2426 13.2423 15.25 11.9996 15.25C10.757 15.25 9.74964 14.2426 9.74964 13ZM2.75 12.0825C2.79431 17.1532 6.91854 21.25 11.9996 21.25C17.0786 21.25 21.2015 17.1566 21.2492 12.0888C19.2606 12.8174 17.4444 13.3393 15.694 13.6471C15.3874 15.4098 13.85 16.75 11.9996 16.75C10.1462 16.75 8.6069 15.4054 8.30379 13.6385C6.55717 13.3288 4.74081 12.8075 2.75 12.0825Z',
};

export const IconPokeballStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokeball-stroke-rounded IconPokeballStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPokeballDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokeball-duotone-rounded IconPokeballDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPokeballTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokeball-twotone-rounded IconPokeballTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPokeballSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokeball-solid-rounded IconPokeballSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPokeballBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokeball-bulk-rounded IconPokeballBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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

export const IconPokeballStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokeball-stroke-sharp IconPokeballStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPokeballSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pokeball-solid-sharp IconPokeballSolidSharp"
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

export const iconPackOfPokeball: TheIconSelfPack = {
  name: 'Pokeball',
  StrokeRounded: IconPokeballStrokeRounded,
  DuotoneRounded: IconPokeballDuotoneRounded,
  TwotoneRounded: IconPokeballTwotoneRounded,
  SolidRounded: IconPokeballSolidRounded,
  BulkRounded: IconPokeballBulkRounded,
  StrokeSharp: IconPokeballStrokeSharp,
  SolidSharp: IconPokeballSolidSharp,
};