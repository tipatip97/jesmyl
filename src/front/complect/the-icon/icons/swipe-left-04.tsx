import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.41601 14.5V11M6.41601 11V4.75C6.41601 3.7835 7.19951 3 8.16601 3C9.1325 3 9.91601 3.7835 9.91601 4.75V10L12.993 10.4776C14.9216 10.7669 15.886 10.9115 16.5652 11.3184C17.6872 11.9906 18.5 13 18.5 14.4736C18.5 15.5 18.2463 16.1886 17.6296 18.0387C17.2383 19.2127 17.0426 19.7996 16.7236 20.2643C16.1983 21.0293 15.4233 21.5878 14.5315 21.8442C13.9898 22 13.3711 22 12.1336 22H10.7287C8.94422 22 8.05198 22 7.28584 21.6651C6.9397 21.5137 6.61674 21.3141 6.32659 21.0722C5.68438 20.5367 5.28536 19.7387 4.48731 18.1426C3.84015 16.8483 3.51657 16.2011 3.50083 15.5302C3.49373 15.2276 3.53246 14.9256 3.61571 14.6346C3.80031 13.9894 4.27678 13.4448 5.2297 12.3558L6.41601 11Z',
  d2: 'M14.5 4.5L20.5 4.5M14.5 4.5C14.5 3.79977 16.4943 2.49153 17 2M14.5 4.5C14.5 5.20023 16.4943 6.50847 17 7',
  d3: 'M6.41601 4.75V11L5.2297 12.3558C4.27678 13.4448 3.80031 13.9894 3.61571 14.6346C3.53246 14.9256 3.49373 15.2276 3.50083 15.5302C3.51657 16.2011 3.84015 16.8483 4.48731 18.1426C5.28536 19.7387 5.68438 20.5367 6.32659 21.0722C6.61674 21.3141 6.9397 21.5137 7.28584 21.6651C8.05198 22 8.94422 22 10.7287 22H12.1336C13.3711 22 13.9898 22 14.5315 21.8442C15.4233 21.5878 16.1983 21.0293 16.7236 20.2643C17.0426 19.7996 17.2383 19.2127 17.6296 18.0387C18.2463 16.1886 18.5 15.5 18.5 14.4736C18.5 13 17.6872 11.9906 16.5652 11.3184C15.886 10.9115 14.9216 10.7669 12.993 10.4776L9.91601 10V4.75C9.91601 3.7835 9.1325 3 8.16601 3C7.19951 3 6.41601 3.7835 6.41601 4.75Z',
  d4: 'M5.66601 10.7182V4.75C5.66601 3.36929 6.78529 2.25 8.16601 2.25C9.54672 2.25 10.666 3.36929 10.666 4.75V9.35743L13.1043 9.73587L13.108 9.73645L13.1306 9.73982C14.0726 9.88112 14.8158 9.9926 15.4068 10.121C16.0075 10.2515 16.5095 10.4108 16.9506 10.6751C18.2281 11.4404 19.25 12.6633 19.25 14.4736C19.25 15.5606 18.9875 16.3446 18.4727 17.8824L18.4727 17.8824C18.1188 18.9447 17.7216 20.1359 17.3418 20.6888C16.718 21.5973 15.7978 22.2605 14.7388 22.565C14.0941 22.7504 13.3758 22.7503 12.2561 22.75L10.5544 22.75C8.93867 22.7505 7.89712 22.7508 6.9854 22.3523C6.57436 22.1726 6.19085 21.9355 5.8463 21.6482C5.08206 21.011 4.61655 20.0793 3.8944 18.6339C3.5825 18.0101 3.23662 17.3183 3.06139 16.8823C2.87909 16.4287 2.76179 16.006 2.75103 15.5478C2.74216 15.1695 2.79057 14.7921 2.89464 14.4283C3.02073 13.9876 3.24093 13.6082 3.53182 13.2153C3.81144 12.8377 4.18574 12.4099 4.645 11.8851L5.66601 10.7182Z',
  d5: 'M20.25 5.50586C20.8023 5.50586 21.25 5.05814 21.25 4.50586C21.25 3.95357 20.8023 3.50586 20.25 3.50586L17.75 3.50586L17.75 2.9116C17.7501 2.73596 17.7503 2.52031 17.7282 2.34387L17.7278 2.34053C17.712 2.21408 17.6402 1.63804 17.0746 1.36368C16.5077 1.08872 16.0076 1.39065 15.8994 1.45597L15.4309 1.79511C15.0551 2.08975 14.5406 2.49545 14.1496 2.87588C13.9545 3.06571 13.7533 3.28297 13.5944 3.51388C13.4532 3.71914 13.25 4.06933 13.25 4.5C13.25 4.93067 13.4532 5.28086 13.5944 5.48612C13.7533 5.71703 13.9545 5.93429 14.1496 6.12412C14.5406 6.50455 15.0551 6.91025 15.4309 7.20488L15.8994 7.54403C16.0076 7.60935 16.5078 7.91128 17.0746 7.63632C17.6402 7.36196 17.712 6.78592 17.7278 6.65947L17.7282 6.65613C17.7503 6.47969 17.7501 6.26403 17.75 6.0884L17.75 5.50586L20.25 5.50586Z',
  d6: 'M5.91601 15.5302V11M5.91601 11V4.75C5.91601 3.7835 6.69951 3 7.66601 3C8.6325 3 9.41601 3.7835 9.41601 4.75V10H15C16.6569 10 18 11.3431 18 13V19C18 20.6569 16.6569 22 15 22H6.5L3.98731 18.1426C3.11571 16.8152 3.01657 16.2011 3.00083 15.5302C2.99373 15.2276 3.03246 14.9256 3.11571 14.6346C3.30031 13.9894 3.77678 13.4448 4.7297 12.3558L5.91601 11Z',
  d7: 'M21 4.5L15.773 4.5M17.5 2L15 4.5L17.5 7',
  d8: 'M5.66601 10.7182V4.75C5.66601 3.36929 6.78529 2.25 8.16601 2.25C9.54672 2.25 10.666 3.36929 10.666 4.75V9.25H15.5C17.5711 9.25 19.25 10.9289 19.25 13V19C19.25 21.0711 17.5711 22.75 15.5 22.75H6.59346L3.86038 18.5543L3.85959 18.5531C3.40464 17.86 3.12579 17.3153 2.96228 16.8294C2.79394 16.3291 2.75991 15.9259 2.75103 15.5478C2.74216 15.1695 2.79057 14.7921 2.89464 14.4283C3.02073 13.9876 3.24093 13.6082 3.53182 13.2153C3.81143 12.8377 4.18572 12.4099 4.64497 11.8851L4.64499 11.8851L4.66526 11.8619L5.66601 10.7182Z',
  d9: 'M17.6644 5.45711L18.4573 6.25L17.043 7.66421L13.8359 4.45711L17.043 1.25L18.4573 2.66421L17.6644 3.45711L21.2502 3.45711V5.45711H17.6644Z',
};

export const IconSwipeLeft04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-04-stroke-rounded IconSwipeLeft04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeLeft04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-04-duotone-rounded IconSwipeLeft04DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeLeft04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-04-twotone-rounded IconSwipeLeft04TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconSwipeLeft04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-04-solid-rounded IconSwipeLeft04SolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeLeft04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-04-bulk-rounded IconSwipeLeft04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeLeft04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-04-stroke-sharp IconSwipeLeft04StrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwipeLeft04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-left-04-solid-sharp IconSwipeLeft04SolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeLeft04: TheIconSelfPack = {
  name: 'SwipeLeft04',
  StrokeRounded: IconSwipeLeft04StrokeRounded,
  DuotoneRounded: IconSwipeLeft04DuotoneRounded,
  TwotoneRounded: IconSwipeLeft04TwotoneRounded,
  SolidRounded: IconSwipeLeft04SolidRounded,
  BulkRounded: IconSwipeLeft04BulkRounded,
  StrokeSharp: IconSwipeLeft04StrokeSharp,
  SolidSharp: IconSwipeLeft04SolidSharp,
};