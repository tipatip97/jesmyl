import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.5714 18H5.42857M8 3V18M8 3C6.81082 3 5.28326 3.12265 4.06709 3.24346C3.55271 3.29456 3.29552 3.32011 3.06788 3.41021C2.59438 3.59763 2.21271 4.00855 2.06906 4.48556C2 4.71489 2 4.97659 2 5.5M8 3C9.18918 3 10.7167 3.12265 11.9329 3.24346C12.4473 3.29456 12.7045 3.32011 12.9321 3.41021C13.4056 3.59763 13.7873 4.00855 13.9309 4.48556C14 4.71489 14 4.97659 14 5.5',
  d2: 'M19.7143 21H16.2857M18 12V21M18 12C17.2072 12 16.1888 12.0818 15.3781 12.1623C15.0351 12.1964 14.8637 12.2134 14.7119 12.2735C14.3963 12.3984 14.1418 12.6724 14.046 12.9904C14 13.1433 14 13.3177 14 13.6667M18 12C18.7928 12 19.8112 12.0818 20.6219 12.1623C20.9649 12.1964 21.1363 12.2134 21.2881 12.2735C21.6037 12.3984 21.8582 12.6724 21.954 12.9904C22 13.1433 22 13.3177 22 13.6667',
  d3: 'M8.00021 4.02423C7.06968 4.06495 6.04517 4.15125 5.16616 4.23856C4.59345 4.29545 4.50303 4.31354 4.43612 4.34003C4.23947 4.41786 4.08005 4.59707 4.0268 4.7739C4.01048 4.82812 4.00021 4.91136 4.00021 5.5C4.00021 6.05228 3.5525 6.5 3.00021 6.5C2.44793 6.5 2.00021 6.05228 2.00021 5.5C2.00021 5.46686 2.00016 5.43382 2.00011 5.40088C1.99942 4.97835 1.99876 4.57242 2.11175 4.19721C2.34579 3.42002 2.94972 2.7774 3.70006 2.4804C4.06179 2.33722 4.45438 2.29876 4.87503 2.25756C4.90602 2.25452 4.93716 2.25147 4.96846 2.24836C6.19023 2.12699 7.75884 2 9.00021 2C10.2416 2 11.8102 2.12699 13.032 2.24836C13.0633 2.25147 13.0944 2.25452 13.1254 2.25756C13.546 2.29876 13.9386 2.33722 14.3004 2.4804C15.0507 2.7774 15.6546 3.42002 15.8887 4.19721C16.0017 4.57242 16.001 4.97835 16.0003 5.40088C16.0003 5.43382 16.0002 5.46686 16.0002 5.5C16.0002 6.05228 15.5525 6.5 15.0002 6.5C14.4479 6.5 14.0002 6.05228 14.0002 5.5C14.0002 4.91136 13.99 4.82812 13.9736 4.7739C13.9204 4.59707 13.761 4.41786 13.5643 4.34003C13.4974 4.31354 13.407 4.29545 12.8343 4.23856C11.9553 4.15125 10.9307 4.06495 10.0002 4.02423V17H11.5716C12.1239 17 12.5716 17.4477 12.5716 18C12.5716 18.5523 12.1239 19 11.5716 19H6.42878C5.8765 19 5.42878 18.5523 5.42878 18C5.42878 17.4477 5.8765 17 6.42878 17H8.00021V4.02423Z',
  d4: 'M16.0003 13.0338C15.4887 13.0638 14.9529 13.1102 14.4772 13.1574C14.2956 13.1754 14.1975 13.1855 14.1249 13.1966C14.0974 13.2008 14.0818 13.2041 14.0746 13.2057C14.0435 13.2203 14.0174 13.2512 14.0074 13.2703C14.0066 13.2784 14.0056 13.2909 14.0046 13.309C14.0006 13.3822 14.0003 13.4817 14.0003 13.6667C14.0003 14.219 13.5526 14.6667 13.0003 14.6667C12.448 14.6667 12.0003 14.219 12.0003 13.6667C12.0003 13.6427 12.0002 13.6182 12.0002 13.5933C11.9993 13.3235 11.9984 13.0023 12.0888 12.702C12.275 12.0838 12.7517 11.5782 13.3442 11.3437C13.6314 11.23 13.9403 11.2001 14.2093 11.1741C14.233 11.1718 14.2564 11.1695 14.2795 11.1672C15.0959 11.0861 16.1553 11 17.0003 11C17.8453 11 18.9047 11.0861 19.7211 11.1672C19.7442 11.1695 19.7676 11.1718 19.7913 11.1741C20.0603 11.2001 20.3692 11.23 20.6564 11.3437C21.2489 11.5782 21.7256 12.0838 21.9118 12.702C22.0022 13.0023 22.0013 13.3235 22.0005 13.5933C22.0004 13.6182 22.0003 13.6427 22.0003 13.6667C22.0003 14.219 21.5526 14.6667 21.0003 14.6667C20.448 14.6667 20.0003 14.219 20.0003 13.6667C20.0003 13.4817 20 13.3822 19.996 13.309C19.995 13.2909 19.994 13.2784 19.9932 13.2703C19.9832 13.2512 19.9571 13.2203 19.926 13.2057C19.9188 13.2041 19.9032 13.2008 19.8757 13.1966C19.8031 13.1855 19.705 13.1754 19.5234 13.1574C19.0477 13.1102 18.5119 13.0638 18.0003 13.0338V20H18.7146C19.2669 20 19.7146 20.4477 19.7146 21C19.7146 21.5523 19.2669 22 18.7146 22H15.286C14.7337 22 14.286 21.5523 14.286 21C14.286 20.4477 14.7337 20 15.286 20H16.0003V13.0338Z',
  d5: 'M11.0007 18H5.0007M8.0007 3V18M14.0007 5.5V3H2V5.5',
  d6: 'M20.0015 21H16.0015M18.0015 12V21M22.0015 13.5V12H14.002L14.0024 13.5',
  d7: 'M1 3C1 2.44772 1.44772 2 2 2H14.0007C14.553 2 15.0007 2.44772 15.0007 3V5.5H13.0007V4H9.0007V17H11.0007V19H5.0007V17H7.0007V4H3V5.5H1V3Z',
  d8: 'M13.2928 11.293C13.4803 11.1054 13.7347 11 14 11H21.9995C22.5518 11 22.9995 11.4477 22.9995 12V13.5H20.9995V13H18.9995V20H19.9995V22H15.9995V20H16.9995V13H15.0003L15.0005 13.4997L13.0005 13.5003L13 12.0003C12.9999 11.735 13.1052 11.4806 13.2928 11.293Z',
};

export const IconTextSmallcapsStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-smallcaps-stroke-rounded IconTextSmallcapsStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTextSmallcapsDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-smallcaps-duotone-rounded IconTextSmallcapsDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTextSmallcapsTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-smallcaps-twotone-rounded IconTextSmallcapsTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTextSmallcapsSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-smallcaps-solid-rounded IconTextSmallcapsSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTextSmallcapsBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-smallcaps-bulk-rounded IconTextSmallcapsBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTextSmallcapsStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-smallcaps-stroke-sharp IconTextSmallcapsStrokeSharp"
    >
      <path 
        d={d.d5} 
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

export const IconTextSmallcapsSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="text-smallcaps-solid-sharp IconTextSmallcapsSolidSharp"
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

export const iconPackOfTextSmallcaps: TheIconSelfPack = {
  name: 'TextSmallcaps',
  StrokeRounded: IconTextSmallcapsStrokeRounded,
  DuotoneRounded: IconTextSmallcapsDuotoneRounded,
  TwotoneRounded: IconTextSmallcapsTwotoneRounded,
  SolidRounded: IconTextSmallcapsSolidRounded,
  BulkRounded: IconTextSmallcapsBulkRounded,
  StrokeSharp: IconTextSmallcapsStrokeSharp,
  SolidSharp: IconTextSmallcapsSolidSharp,
};