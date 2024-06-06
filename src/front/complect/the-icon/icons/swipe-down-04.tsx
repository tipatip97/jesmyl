import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.41601 14.5V11M6.41601 11V4.75C6.41601 3.7835 7.19951 3 8.16601 3C9.1325 3 9.91601 3.7835 9.91601 4.75V10L12.993 10.4776C14.9216 10.7669 15.886 10.9115 16.5652 11.3184C17.6872 11.9906 18.5 13 18.5 14.4736C18.5 15.5 18.2463 16.1886 17.6296 18.0387C17.2383 19.2127 17.0426 19.7996 16.7236 20.2643C16.1983 21.0293 15.4233 21.5878 14.5315 21.8442C13.9898 22 13.3711 22 12.1336 22H10.7287C8.94422 22 8.05198 22 7.28584 21.6651C6.9397 21.5137 6.61674 21.3141 6.32659 21.0722C5.68438 20.5367 5.28536 19.7387 4.48731 18.1426C3.84015 16.8483 3.51657 16.2011 3.50083 15.5302C3.49373 15.2276 3.53246 14.9256 3.61571 14.6346C3.80031 13.9894 4.27678 13.4448 5.2297 12.3558L6.41601 11Z',
  d2: 'M18 8L18 2M18 8C17.2998 8 15.9915 6.0057 15.5 5.5M18 8C18.7002 8 20.0085 6.0057 20.5 5.5',
  d3: 'M6.41601 4.75V11L5.2297 12.3558C4.27678 13.4448 3.80031 13.9894 3.61571 14.6346C3.53246 14.9256 3.49373 15.2276 3.50083 15.5302C3.51657 16.2011 3.84015 16.8483 4.48731 18.1426C5.28536 19.7387 5.68438 20.5367 6.32659 21.0722C6.61674 21.3141 6.9397 21.5137 7.28584 21.6651C8.05198 22 8.94422 22 10.7287 22H12.1336C13.3711 22 13.9898 22 14.5315 21.8442C15.4233 21.5878 16.1983 21.0293 16.7236 20.2643C17.0426 19.7996 17.2383 19.2127 17.6296 18.0387C18.2463 16.1886 18.5 15.5 18.5 14.4736C18.5 13 17.6872 11.9906 16.5652 11.3184C15.886 10.9115 14.9216 10.7669 12.993 10.4776L9.91601 10V4.75C9.91601 3.7835 9.1325 3 8.16601 3C7.19951 3 6.41601 3.7835 6.41601 4.75Z',
  d4: 'M5.66601 10.7182V4.75C5.66601 3.36929 6.78529 2.25 8.16601 2.25C9.54672 2.25 10.666 3.36929 10.666 4.75V9.35743L13.1043 9.73587L13.108 9.73645L13.1306 9.73982C14.0726 9.88112 14.8158 9.9926 15.4068 10.121C16.0075 10.2515 16.5095 10.4108 16.9506 10.6751C18.2281 11.4404 19.25 12.6633 19.25 14.4736C19.25 15.5606 18.9875 16.3446 18.4727 17.8824L18.4727 17.8824C18.1188 18.9447 17.7216 20.1359 17.3418 20.6888C16.718 21.5973 15.7978 22.2605 14.7388 22.565C14.0941 22.7504 13.3758 22.7503 12.2561 22.75L10.5544 22.75C8.93867 22.7505 7.89712 22.7508 6.9854 22.3523C6.57436 22.1726 6.19085 21.9355 5.8463 21.6482C5.08206 21.011 4.61655 20.0793 3.8944 18.6339C3.5825 18.0101 3.23662 17.3183 3.06139 16.8823C2.87909 16.4287 2.76179 16.006 2.75103 15.5478C2.74216 15.1695 2.79057 14.7921 2.89464 14.4283C3.02073 13.9876 3.24093 13.6082 3.53182 13.2153C3.81144 12.8377 4.18574 12.4099 4.645 11.8851L5.66601 10.7182Z',
  d5: 'M19.0059 2.24996C19.0059 1.69768 18.5581 1.24996 18.0059 1.24996C17.4536 1.24996 17.0059 1.69768 17.0059 2.24996L17.0059 4.75L16.4116 4.74998C16.236 4.74986 16.0203 4.7497 15.8439 4.77177L15.8405 4.77219C15.7141 4.78796 15.138 4.85979 14.8637 5.42539C14.5887 5.99221 14.8907 6.49235 14.956 6.60056L15.2951 7.06905C15.5897 7.44487 15.9954 7.95933 16.3759 8.35034C16.5657 8.54545 16.783 8.74669 17.0139 8.90553C17.2191 9.04674 17.5693 9.25 18 9.25C18.4307 9.25 18.7809 9.04674 18.9861 8.90553C19.217 8.74669 19.4343 8.54545 19.6241 8.35034C20.0046 7.95933 20.4102 7.44488 20.7049 7.06905L21.044 6.60056C21.1093 6.49235 21.4113 5.99221 21.1363 5.42539C20.862 4.85979 20.2859 4.78796 20.1595 4.77219L20.1561 4.77177C19.9797 4.7497 19.764 4.74986 19.5884 4.74998L19.0059 4.75L19.0059 2.24996Z',
  d6: 'M18 2L18 7.30207M15.5 5.5L18 8L20.5 5.5',
  d7: 'M6.41601 15.5302V11M6.41601 11V4.75C6.41601 3.7835 7.19951 3 8.16601 3C9.1325 3 9.91601 3.7835 9.91601 4.75V10H15.5C17.1569 10 18.5 11.3431 18.5 13V19C18.5 20.6569 17.1569 22 15.5 22H7L4.48731 18.1426C3.61571 16.8152 3.51657 16.2011 3.50083 15.5302C3.49373 15.2276 3.53246 14.9256 3.61571 14.6346C3.80031 13.9894 4.27678 13.4448 5.2297 12.3558L6.41601 11Z',
  d8: 'M19.043 1.25L19.043 4.83579L19.8359 4.04289L21.2502 5.45711L18.043 8.66421L14.8359 5.45711L16.2502 4.04289L17.043 4.83579L17.043 1.25H19.043Z',
  d9: 'M5.66601 10.7182V4.75C5.66601 3.36929 6.78529 2.25 8.16601 2.25C9.54672 2.25 10.666 3.36929 10.666 4.75V9.25H15.5C17.5711 9.25 19.25 10.9289 19.25 13V19C19.25 21.0711 17.5711 22.75 15.5 22.75H6.59346L3.86038 18.5543L3.85959 18.5531C3.40464 17.86 3.12579 17.3153 2.96228 16.8294C2.79394 16.3291 2.75991 15.9259 2.75103 15.5478C2.74216 15.1695 2.79057 14.7921 2.89464 14.4283C3.02073 13.9876 3.24093 13.6082 3.53182 13.2153C3.81143 12.8377 4.18572 12.4099 4.64497 11.8851L4.64499 11.8851L4.66526 11.8619L5.66601 10.7182Z',
};

export const IconSwipeDown04StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-04-stroke-rounded IconSwipeDown04StrokeRounded"
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

export const IconSwipeDown04DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-04-duotone-rounded IconSwipeDown04DuotoneRounded"
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

export const IconSwipeDown04TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-04-twotone-rounded IconSwipeDown04TwotoneRounded"
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

export const IconSwipeDown04SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-04-solid-rounded IconSwipeDown04SolidRounded"
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

export const IconSwipeDown04BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-04-bulk-rounded IconSwipeDown04BulkRounded"
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

export const IconSwipeDown04StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-04-stroke-sharp IconSwipeDown04StrokeSharp"
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

export const IconSwipeDown04SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-down-04-solid-sharp IconSwipeDown04SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwipeDown04: TheIconSelfPack = {
  name: 'SwipeDown04',
  StrokeRounded: IconSwipeDown04StrokeRounded,
  DuotoneRounded: IconSwipeDown04DuotoneRounded,
  TwotoneRounded: IconSwipeDown04TwotoneRounded,
  SolidRounded: IconSwipeDown04SolidRounded,
  BulkRounded: IconSwipeDown04BulkRounded,
  StrokeSharp: IconSwipeDown04StrokeSharp,
  SolidSharp: IconSwipeDown04SolidSharp,
};