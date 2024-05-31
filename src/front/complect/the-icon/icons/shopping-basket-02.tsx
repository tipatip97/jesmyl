import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L19.6591 16.8781C19.249 19.3264 19.044 20.5505 18.2319 21.2752C17.4199 22 16.2534 22 13.9204 22H10.0796C7.74664 22 6.58014 22 5.76809 21.2752C4.95603 20.5505 4.75097 19.3264 4.34085 16.8781Z',
  d2: 'M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5',
  d3: 'M4.5 17.5H19.5',
  d4: 'M4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L19.6591 16.8781C19.6167 17.1313 19.5765 17.3714 19.5376 17.5993H4.46242C4.42349 17.3714 4.38327 17.1313 4.34085 16.8781Z',
  d5: 'M12 3.25C9.79086 3.25 8 5.04086 8 7.25V7.75C8 8.30228 7.55228 8.75 7 8.75C6.44772 8.75 6 8.30228 6 7.75V7.25C6 3.93629 8.68629 1.25 12 1.25C15.3137 1.25 18 3.93629 18 7.25V7.75C18 8.30228 17.5523 8.75 17 8.75C16.4477 8.75 16 8.30228 16 7.75V7.25C16 5.04086 14.2091 3.25 12 3.25Z',
  d6: 'M5.03918 6.75C4.54569 6.74994 4.09347 6.74988 3.73122 6.80485C3.32906 6.86589 2.90613 7.01213 2.59554 7.40759C2.29245 7.79348 2.2384 8.2371 2.25186 8.64362C2.26442 9.02282 2.34242 9.48822 2.43027 10.0123L3.43315 15.9991C3.47323 16.2384 3.49326 16.358 3.57716 16.429C3.66106 16.5 3.78234 16.5 4.02491 16.5H19.9751C20.2177 16.5 20.3389 16.5 20.4228 16.429C20.5067 16.358 20.5268 16.2384 20.5668 15.9991L21.5697 10.0124C21.6576 9.48825 21.7356 9.02281 21.7481 8.64362C21.7616 8.2371 21.7075 7.79348 21.4045 7.40759C21.0939 7.01213 20.6709 6.86589 20.2688 6.80485C19.9065 6.74988 19.4543 6.74994 18.9608 6.75H5.03918Z',
  d7: 'M19.9978 19.2079C20.0685 18.8852 20.1039 18.7239 20.0138 18.6119C19.9237 18.5 19.7551 18.5 19.4178 18.5H4.58218C4.24491 18.5 4.07627 18.5 3.98621 18.6119C3.89614 18.7239 3.9315 18.8852 4.0022 19.2079C4.05928 19.4683 4.11886 19.7096 4.18349 19.9321C4.40733 20.703 4.7155 21.3411 5.26868 21.8348C5.82696 22.3331 6.48525 22.5511 7.25514 22.6529C7.98918 22.7501 8.90541 22.75 10.028 22.75H13.972C15.0946 22.75 16.0108 22.7501 16.7449 22.6529C17.5147 22.5511 18.173 22.3331 18.7313 21.8348C19.2845 21.3411 19.5927 20.703 19.8165 19.9321C19.8811 19.7096 19.9407 19.4683 19.9978 19.2079Z',
  d8: 'M19.998 19.2079C20.0687 18.8852 20.104 18.7239 20.014 18.6119C19.9239 18.5 19.7553 18.5 19.418 18.5H4.58238C4.2451 18.5 4.07647 18.5 3.9864 18.6119C3.89634 18.7239 3.93169 18.8852 4.0024 19.2079C4.05947 19.4683 4.11906 19.7096 4.18369 19.9321C4.40753 20.703 4.71569 21.3411 5.26888 21.8348C5.82716 22.3331 6.48545 22.5511 7.25533 22.6529C7.98938 22.7501 8.90561 22.75 10.0282 22.75H13.9722C15.0948 22.75 16.011 22.7501 16.7451 22.6529C17.5149 22.5511 18.1732 22.3331 18.7315 21.8348C19.2847 21.3411 19.5929 20.703 19.8167 19.9321C19.8813 19.7096 19.9409 19.4683 19.998 19.2079Z',
  d9: 'M17.5 6.64098C17.5 3.67494 15.0376 1.27051 12 1.27051C8.96243 1.27051 6.5 3.67494 6.5 6.64098',
  d10: 'M4.5 16.877H19.5',
  d11: 'M21.3999 7.10935L2.60013 7.10913C2.53806 7.10913 2.49095 7.16163 2.50148 7.21907L4.98696 21.2743H18.9815L21.4985 7.21949C21.5092 7.16199 21.462 7.10935 21.3999 7.10935Z',
  d12: 'M5.57547 6.75C6.05648 3.63491 8.74924 1.25 11.999 1.25C15.2488 1.25 17.9416 3.63491 18.4226 6.75H21.499C21.7202 6.75 21.9301 6.84764 22.0726 7.01682C22.2152 7.186 22.2757 7.40945 22.2381 7.62743L20.7084 16.5H3.28969L1.75993 7.62743C1.72235 7.40945 1.78291 7.186 1.92541 7.01682C2.06792 6.84764 2.27783 6.75 2.49903 6.75H5.57547ZM7.61053 6.75C8.06526 4.74601 9.85744 3.25 11.999 3.25C14.1406 3.25 15.9328 4.74601 16.3875 6.75H7.61053Z',
  d13: 'M3.63452 18.5H20.3635L19.6308 22.75H4.36727L3.63452 18.5Z',
} as const;

export const IconShoppingBasket02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-02-stroke-rounded IconShoppingBasket02StrokeRounded"
    >
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

export const IconShoppingBasket02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-02-duotone-rounded IconShoppingBasket02DuotoneRounded"
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

export const IconShoppingBasket02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-02-twotone-rounded IconShoppingBasket02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconShoppingBasket02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-02-solid-rounded IconShoppingBasket02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-02-bulk-rounded IconShoppingBasket02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-02-stroke-sharp IconShoppingBasket02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-02-solid-sharp IconShoppingBasket02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasket02: TheIconSelfPack = {
  name: 'ShoppingBasket02',
  StrokeRounded: IconShoppingBasket02StrokeRounded,
  DuotoneRounded: IconShoppingBasket02DuotoneRounded,
  TwotoneRounded: IconShoppingBasket02TwotoneRounded,
  SolidRounded: IconShoppingBasket02SolidRounded,
  BulkRounded: IconShoppingBasket02BulkRounded,
  StrokeSharp: IconShoppingBasket02StrokeSharp,
  SolidSharp: IconShoppingBasket02SolidSharp,
};