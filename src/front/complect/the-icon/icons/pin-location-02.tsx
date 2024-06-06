import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 11L12 18',
  d2: 'M17 19C17 20.1046 14.7614 21 12 21C9.23858 21 7 20.1046 7 19',
  d3: 'M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 11L12 18',
  d4: 'M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6C7.25 8.19587 8.74003 10.0437 10.7642 10.5876C10.9008 10.6244 11 10.7456 11 10.8871L11 17.75C11 18.3023 11.4477 18.75 12 18.75C12.5523 18.75 13 18.3023 13 17.75L13 10.8871C13 10.7456 13.0992 10.6244 13.2358 10.5876C15.26 10.0437 16.75 8.19587 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25Z',
  d5: 'M7.99924 19.7106C7.97855 19.1766 7.53909 18.75 7 18.75C6.44772 18.75 6 19.1977 6 19.75C6 20.3897 6.32823 20.898 6.70582 21.255C7.08129 21.6101 7.57094 21.8838 8.09308 22.0927C9.1429 22.5126 10.5246 22.75 12 22.75C13.4754 22.75 14.8571 22.5126 15.9069 22.0927C16.4291 21.8838 16.9187 21.6101 17.2942 21.255C17.6718 20.898 18 20.3897 18 19.75C18 19.1977 17.5523 18.75 17 18.75C16.4609 18.75 16.0215 19.1766 16.0008 19.7106C15.99 19.7273 15.9667 19.7578 15.92 19.8019C15.7894 19.9254 15.5468 20.0827 15.1641 20.2357C14.4043 20.5397 13.2861 20.75 12 20.75C10.7139 20.75 9.59568 20.5397 8.83586 20.2357C8.45317 20.0827 8.21059 19.9254 8.08003 19.8019C8.03333 19.7578 8.01 19.7273 7.99924 19.7106Z',
  d6: 'M17 18C17 19.6569 14.7614 21 12 21C9.23858 21 7 19.6569 7 18',
  d7: 'M8.97896 19.0138C9.70366 19.4486 10.7694 19.75 12 19.75C13.2306 19.75 14.2963 19.4486 15.021 19.0138C15.7656 18.5671 16 18.0892 16 17.75H18C18 19.0677 17.1151 20.0898 16.05 20.7288C14.9651 21.3798 13.5308 21.75 12 21.75C10.4692 21.75 9.03492 21.3798 7.94997 20.7288C6.88493 20.0898 6 19.0677 6 17.75H8C8 18.0892 8.23436 18.5671 8.97896 19.0138Z',
  d8: 'M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.28031 8.85683 11.1853 11 11.6446L11 18H13L13 11.6446C15.1432 11.1853 16.75 9.28031 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z',
};

export const IconPinLocation02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-02-stroke-rounded IconPinLocation02StrokeRounded"
    >
      <circle 
        cx="12" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconPinLocation02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-02-duotone-rounded IconPinLocation02DuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="7" 
        r="4" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
    </TheIconWrapper>
  );
};

export const IconPinLocation02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-02-twotone-rounded IconPinLocation02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconPinLocation02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-02-solid-rounded IconPinLocation02SolidRounded"
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

export const IconPinLocation02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-02-bulk-rounded IconPinLocation02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPinLocation02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-02-stroke-sharp IconPinLocation02StrokeSharp"
    >
      <circle 
        cx="12" 
        cy="7" 
        r="4" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconPinLocation02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="pin-location-02-solid-sharp IconPinLocation02SolidSharp"
    >
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

export const iconPackOfPinLocation02: TheIconSelfPack = {
  name: 'PinLocation02',
  StrokeRounded: IconPinLocation02StrokeRounded,
  DuotoneRounded: IconPinLocation02DuotoneRounded,
  TwotoneRounded: IconPinLocation02TwotoneRounded,
  SolidRounded: IconPinLocation02SolidRounded,
  BulkRounded: IconPinLocation02BulkRounded,
  StrokeSharp: IconPinLocation02StrokeSharp,
  SolidSharp: IconPinLocation02SolidSharp,
};