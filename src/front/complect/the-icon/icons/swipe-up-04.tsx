import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.41601 14.5V11M6.41601 11V4.75C6.41601 3.7835 7.19951 3 8.16601 3C9.1325 3 9.91601 3.7835 9.91601 4.75V10L12.993 10.4776C14.9216 10.7669 15.886 10.9115 16.5652 11.3184C17.6872 11.9906 18.5 13 18.5 14.4736C18.5 15.5 18.2463 16.1886 17.6296 18.0387C17.2383 19.2127 17.0426 19.7996 16.7236 20.2643C16.1983 21.0293 15.4233 21.5878 14.5315 21.8442C13.9898 22 13.3711 22 12.1336 22H10.7287C8.94422 22 8.05198 22 7.28584 21.6651C6.9397 21.5137 6.61674 21.3141 6.32659 21.0722C5.68438 20.5367 5.28536 19.7387 4.48731 18.1426C3.84015 16.8483 3.51657 16.2011 3.50083 15.5302C3.49373 15.2276 3.53246 14.9256 3.61571 14.6346C3.80031 13.9894 4.27678 13.4448 5.2297 12.3558L6.41601 11Z',
  d2: 'M18 2L18 8M18 2C17.2998 2 15.9915 3.9943 15.5 4.5M18 2C18.7002 2 20.0085 3.9943 20.5 4.5',
  d3: 'M6.41601 4.75V11L5.2297 12.3558C4.27678 13.4448 3.80031 13.9894 3.61571 14.6346C3.53246 14.9256 3.49373 15.2276 3.50083 15.5302C3.51657 16.2011 3.84015 16.8483 4.48731 18.1426C5.28536 19.7387 5.68438 20.5367 6.32659 21.0722C6.61674 21.3141 6.9397 21.5137 7.28584 21.6651C8.05198 22 8.94422 22 10.7287 22H12.1336C13.3711 22 13.9898 22 14.5315 21.8442C15.4233 21.5878 16.1983 21.0293 16.7236 20.2643C17.0426 19.7996 17.2383 19.2127 17.6296 18.0387C18.2463 16.1886 18.5 15.5 18.5 14.4736C18.5 13 17.6872 11.9906 16.5652 11.3184C15.886 10.9115 14.9216 10.7669 12.993 10.4776L9.91601 10V4.75C9.91601 3.7835 9.1325 3 8.16601 3C7.19951 3 6.41601 3.7835 6.41601 4.75Z',
  d4: 'M5.66601 10.7182V4.75C5.66601 3.36929 6.78529 2.25 8.16601 2.25C9.54672 2.25 10.666 3.36929 10.666 4.75V9.35743L13.1043 9.73587L13.108 9.73645L13.1306 9.73982C14.0726 9.88112 14.8158 9.9926 15.4068 10.121C16.0075 10.2515 16.5095 10.4108 16.9506 10.6751C18.2281 11.4404 19.25 12.6633 19.25 14.4736C19.25 15.5606 18.9875 16.3446 18.4727 17.8824L18.4727 17.8824C18.1188 18.9447 17.7216 20.1359 17.3418 20.6888C16.718 21.5973 15.7978 22.2605 14.7388 22.565C14.0941 22.7504 13.3758 22.7503 12.2561 22.75L10.5544 22.75C8.93867 22.7505 7.89712 22.7508 6.9854 22.3523C6.57436 22.1726 6.19085 21.9355 5.8463 21.6482C5.08206 21.011 4.61655 20.0793 3.8944 18.6339C3.5825 18.0101 3.23662 17.3183 3.06139 16.8823C2.87909 16.4287 2.76179 16.006 2.75103 15.5478C2.74216 15.1695 2.79057 14.7921 2.89464 14.4283C3.02073 13.9876 3.24093 13.6082 3.53182 13.2153C3.81144 12.8377 4.18574 12.4099 4.645 11.8851L5.66601 10.7182Z',
  d5: 'M19.0059 8.25004C19.0059 8.80232 18.5581 9.25004 18.0059 9.25004C17.4536 9.25004 17.0059 8.80232 17.0059 8.25004L17.0059 5.75L16.4116 5.75002C16.236 5.75014 16.0203 5.7503 15.8439 5.72823L15.8405 5.72781C15.7141 5.71204 15.138 5.64021 14.8637 5.07461C14.5887 4.50779 14.8907 4.00765 14.956 3.89944L15.2951 3.43095C15.5897 3.05513 15.9954 2.54067 16.3759 2.14966C16.5657 1.95455 16.783 1.75331 17.0139 1.59447C17.2191 1.45326 17.5693 1.25 18 1.25C18.4307 1.25 18.7809 1.45326 18.9861 1.59447C19.217 1.75331 19.4343 1.95455 19.6241 2.14966C20.0046 2.54067 20.4102 3.05512 20.7049 3.43095L21.044 3.89944C21.1093 4.00765 21.4113 4.50779 21.1363 5.07461C20.862 5.64021 20.2859 5.71204 20.1595 5.72781L20.1561 5.72823C19.9797 5.7503 19.764 5.75014 19.5884 5.75002L19.0059 5.75L19.0059 8.25004Z',
  d6: 'M18 8L18 2.69764M15.5 4.5L18 2L20.5 4.5',
  d7: 'M6.41601 15.5302V11M6.41601 11V4.75C6.41601 3.7835 7.19951 3 8.16601 3C9.1325 3 9.91601 3.7835 9.91601 4.75V10H15.5C17.1569 10 18.5 11.3431 18.5 13V19C18.5 20.6569 17.1569 22 15.5 22H7L4.48731 18.1426C3.61571 16.8152 3.51657 16.2011 3.50083 15.5302C3.49373 15.2276 3.53246 14.9256 3.61571 14.6346C3.80031 13.9894 4.27678 13.4448 5.2297 12.3558L6.41601 11Z',
  d8: 'M18.043 1.25L21.2502 4.45711L19.8359 5.87132L19.043 5.07843L19.043 8.66421H17.043L17.043 5.07843L16.2502 5.87132L14.8359 4.45711L18.043 1.25Z',
  d9: 'M5.66601 10.7182V4.75C5.66601 3.36929 6.78529 2.25 8.16601 2.25C9.54672 2.25 10.666 3.36929 10.666 4.75V9.25H15.5C17.5711 9.25 19.25 10.9289 19.25 13V19C19.25 21.0711 17.5711 22.75 15.5 22.75H6.59346L3.86038 18.5543L3.85959 18.5531C3.40464 17.86 3.12579 17.3153 2.96228 16.8294C2.79394 16.3291 2.75991 15.9259 2.75103 15.5478C2.74216 15.1695 2.79057 14.7921 2.89464 14.4283C3.02073 13.9876 3.24093 13.6082 3.53182 13.2153C3.81143 12.8377 4.18572 12.4099 4.64497 11.8851L4.64499 11.8851L4.66526 11.8619L5.66601 10.7182Z',
} as const;

export const IconSwipeUp04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-04-stroke-rounded IconSwipeUp04StrokeRounded"
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

export const IconSwipeUp04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-04-duotone-rounded IconSwipeUp04DuotoneRounded"
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

export const IconSwipeUp04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-04-twotone-rounded IconSwipeUp04TwotoneRounded"
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

export const IconSwipeUp04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-04-solid-rounded IconSwipeUp04SolidRounded"
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

export const IconSwipeUp04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-04-bulk-rounded IconSwipeUp04BulkRounded"
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

export const IconSwipeUp04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-04-stroke-sharp IconSwipeUp04StrokeSharp"
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

export const IconSwipeUp04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="swipe-up-04-solid-sharp IconSwipeUp04SolidSharp"
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

export const iconPackOfSwipeUp04: TheIconSelfPack = {
  name: 'SwipeUp04',
  StrokeRounded: IconSwipeUp04StrokeRounded,
  DuotoneRounded: IconSwipeUp04DuotoneRounded,
  TwotoneRounded: IconSwipeUp04TwotoneRounded,
  SolidRounded: IconSwipeUp04SolidRounded,
  BulkRounded: IconSwipeUp04BulkRounded,
  StrokeSharp: IconSwipeUp04StrokeSharp,
  SolidSharp: IconSwipeUp04SolidSharp,
};