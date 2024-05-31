import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.41601 14.5V11M6.41601 11V4.75C6.41601 3.7835 7.19951 3 8.16601 3C9.1325 3 9.91601 3.7835 9.91601 4.75V10L12.993 10.4776C14.9216 10.7669 15.886 10.9115 16.5652 11.3184C17.6872 11.9906 18.5 13 18.5 14.4736C18.5 15.5 18.2463 16.1886 17.6296 18.0387C17.2383 19.2127 17.0426 19.7996 16.7236 20.2643C16.1983 21.0293 15.4233 21.5878 14.5315 21.8442C13.9898 22 13.3711 22 12.1336 22H10.7287C8.94422 22 8.05198 22 7.28584 21.6651C6.9397 21.5137 6.61674 21.3141 6.32659 21.0722C5.68438 20.5367 5.28536 19.7387 4.48731 18.1426C3.84015 16.8483 3.51657 16.2011 3.50083 15.5302C3.49373 15.2276 3.53246 14.9256 3.61571 14.6346C3.80031 13.9894 4.27678 13.4448 5.2297 12.3558L6.41601 11Z',
  d2: 'M20.5 4.5L14.5 4.5M20.5 4.5C20.5 3.79977 18.5057 2.49153 18 2M20.5 4.5C20.5 5.20023 18.5057 6.50847 18 7',
  d3: 'M6.41601 4.75V11L5.2297 12.3558C4.27678 13.4448 3.80031 13.9894 3.61571 14.6346C3.53246 14.9256 3.49373 15.2276 3.50083 15.5302C3.51657 16.2011 3.84015 16.8483 4.48731 18.1426C5.28536 19.7387 5.68438 20.5367 6.32659 21.0722C6.61674 21.3141 6.9397 21.5137 7.28584 21.6651C8.05198 22 8.94422 22 10.7287 22H12.1336C13.3711 22 13.9898 22 14.5315 21.8442C15.4233 21.5878 16.1983 21.0293 16.7236 20.2643C17.0426 19.7996 17.2383 19.2127 17.6296 18.0387C18.2463 16.1886 18.5 15.5 18.5 14.4736C18.5 13 17.6872 11.9906 16.5652 11.3184C15.886 10.9115 14.9216 10.7669 12.993 10.4776L9.91601 10V4.75C9.91601 3.7835 9.1325 3 8.16601 3C7.19951 3 6.41601 3.7835 6.41601 4.75Z',
  d4: 'M5.66601 10.7182V4.75C5.66601 3.36929 6.78529 2.25 8.16601 2.25C9.54672 2.25 10.666 3.36929 10.666 4.75V9.35743L13.1043 9.73587L13.108 9.73645L13.1306 9.73982C14.0726 9.88112 14.8158 9.9926 15.4068 10.121C16.0075 10.2515 16.5095 10.4108 16.9506 10.6751C18.2281 11.4404 19.25 12.6633 19.25 14.4736C19.25 15.5606 18.9875 16.3446 18.4727 17.8824L18.4727 17.8824C18.1188 18.9447 17.7216 20.1359 17.3418 20.6888C16.718 21.5973 15.7978 22.2605 14.7388 22.565C14.0941 22.7504 13.3758 22.7503 12.2561 22.75L10.5544 22.75C8.93867 22.7505 7.89712 22.7508 6.9854 22.3523C6.57436 22.1726 6.19085 21.9355 5.8463 21.6482C5.08206 21.011 4.61655 20.0793 3.8944 18.6339C3.5825 18.0101 3.23662 17.3183 3.06139 16.8823C2.87909 16.4287 2.76179 16.006 2.75103 15.5478C2.74216 15.1695 2.79057 14.7921 2.89464 14.4283C3.02073 13.9876 3.24093 13.6082 3.53182 13.2153C3.81144 12.8377 4.18574 12.4099 4.645 11.8851L5.66601 10.7182Z',
  d5: 'M14.25 5.50586C13.6977 5.50586 13.25 5.05814 13.25 4.50586C13.25 3.95357 13.6977 3.50586 14.25 3.50586L16.75 3.50586L16.75 2.9116C16.7499 2.73596 16.7497 2.52031 16.7718 2.34387L16.7722 2.34053C16.788 2.21408 16.8598 1.63804 17.4254 1.36368C17.9923 1.08872 18.4924 1.39065 18.6006 1.45597L19.0691 1.79511C19.4449 2.08975 19.9594 2.49545 20.3504 2.87588C20.5455 3.06571 20.7467 3.28297 20.9056 3.51388C21.0468 3.71914 21.25 4.06933 21.25 4.5C21.25 4.93067 21.0468 5.28086 20.9056 5.48612C20.7467 5.71703 20.5455 5.93429 20.3504 6.12412C19.9594 6.50455 19.4449 6.91025 19.0691 7.20488L18.6006 7.54403C18.4924 7.60935 17.9922 7.91128 17.4254 7.63632C16.8598 7.36196 16.788 6.78592 16.7722 6.65947L16.7718 6.65613C16.7497 6.47969 16.7499 6.26403 16.75 6.0884L16.75 5.50586L14.25 5.50586Z',
  d6: 'M5.91601 15.5302V11M5.91601 11V4.75C5.91601 3.7835 6.69951 3 7.66601 3C8.6325 3 9.41601 3.7835 9.41601 4.75V10H15C16.6569 10 18 11.3431 18 13V19C18 20.6569 16.6569 22 15 22H6.5L3.98731 18.1426C3.11571 16.8152 3.01657 16.2011 3.00083 15.5302C2.99373 15.2276 3.03246 14.9256 3.11571 14.6346C3.30031 13.9894 3.77678 13.4448 4.7297 12.3558L5.91601 11Z',
  d7: 'M15 4.5L20.4235 4.5M18.5 2L21 4.5L18.5 7',
  d8: 'M5.16601 10.7182V4.75C5.16601 3.36929 6.28529 2.25 7.66601 2.25C9.04672 2.25 10.166 3.36929 10.166 4.75V9.25H15C17.0711 9.25 18.75 10.9289 18.75 13V19C18.75 21.0711 17.0711 22.75 15 22.75H6.09346L3.36038 18.5543L3.35959 18.5531C2.90464 17.86 2.62579 17.3153 2.46228 16.8294C2.29394 16.3291 2.25991 15.9259 2.25103 15.5478C2.24216 15.1695 2.29057 14.7921 2.39464 14.4283C2.52073 13.9876 2.74093 13.6082 3.03182 13.2153C3.31143 12.8377 3.68572 12.4099 4.14497 11.8851L4.14499 11.8851L4.16526 11.8619L5.16601 10.7182Z',
  d9: 'M18.543 1.25L21.7502 4.45711L18.543 7.66421L17.1288 6.25L17.9217 5.45711H14.3359V3.45711L17.9217 3.45711L17.1288 2.66421L18.543 1.25Z',
} as const;

export const IconSwipeRight04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-04-stroke-rounded IconSwipeRight04StrokeRounded"
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

export const IconSwipeRight04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-04-duotone-rounded IconSwipeRight04DuotoneRounded"
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

export const IconSwipeRight04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-04-twotone-rounded IconSwipeRight04TwotoneRounded"
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

export const IconSwipeRight04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-04-solid-rounded IconSwipeRight04SolidRounded"
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

export const IconSwipeRight04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-04-bulk-rounded IconSwipeRight04BulkRounded"
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

export const IconSwipeRight04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-04-stroke-sharp IconSwipeRight04StrokeSharp"
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

export const IconSwipeRight04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-right-04-solid-sharp IconSwipeRight04SolidSharp"
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

export const iconPackOfSwipeRight04: TheIconSelfPack = {
  name: 'SwipeRight04',
  StrokeRounded: IconSwipeRight04StrokeRounded,
  DuotoneRounded: IconSwipeRight04DuotoneRounded,
  TwotoneRounded: IconSwipeRight04TwotoneRounded,
  SolidRounded: IconSwipeRight04SolidRounded,
  BulkRounded: IconSwipeRight04BulkRounded,
  StrokeSharp: IconSwipeRight04StrokeSharp,
  SolidSharp: IconSwipeRight04SolidSharp,
};