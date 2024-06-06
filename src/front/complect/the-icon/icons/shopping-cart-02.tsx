import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6',
  d2: 'M6 6H22',
  d3: 'M8 20L15 20',
  d4: 'M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18',
  d5: 'M14.7632 15.5H8L5.5 6H18.8941C19.9947 6 20.545 6 20.8321 6.39507C21.1192 6.79013 20.9998 7.38311 20.761 8.56908C19.9697 12.5 21.5 15 14.7632 15.5Z',
  d6: 'M1 2C1 1.44772 1.44772 1 2 1H2.966C4.34908 1 5.58447 1.91637 5.93171 3.26571L6.37801 5H20.9853L20.9972 4.99991L21.0124 5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H21.8951L21.3574 11.8393C21.2074 13.1897 20.9628 14.3613 20.1489 15.153C19.3351 15.9448 18.1572 16.157 16.8032 16.2699L8.65326 16.949C8.57487 17.0965 8.48358 17.2382 8.37979 17.3727L8.04559 17.8055C8.39513 18.1315 8.66671 18.54 8.82929 19H14.1707C14.5825 17.8348 15.6938 17 17 17C18.6569 17 20 18.3431 20 20C20 21.6569 18.6569 23 17 23C15.6938 23 14.5825 22.1652 14.1707 21H8.82929C8.41746 22.1652 7.30622 23 6 23C4.34315 23 3 21.6569 3 20C3 18.3431 4.34315 17 6 17C6.04639 17 6.09253 17.0011 6.1384 17.0031L6.79668 16.1505C6.98213 15.9102 7.04276 15.6082 6.97007 15.3257L3.99481 3.76415C3.88381 3.33282 3.47229 3 2.966 3H2C1.44772 3 1 2.55228 1 2ZM19.8828 7H6.89269L8.92904 14.9191L16.6371 14.2768C18.0116 14.1622 18.5042 13.9628 18.7543 13.7195C19.0044 13.4762 19.2173 12.9892 19.3696 11.6184L19.8828 7ZM6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20C7 19.4477 6.55228 19 6 19ZM16 20C16 20.5523 16.4477 21 17 21C17.5523 21 18 20.5523 18 20C18 19.4477 17.5523 19 17 19C16.4477 19 16 19.4477 16 20Z',
  d7: 'M8 16L18.5 14.5L20 6',
  d8: 'M2 2H5L8 16L6.63213 18',
  d9: 'M5 1.25H2V3.25H4.19158L6.93225 16.0398L5.80672 17.6855L7.45754 18.8145L8.68096 17.0257L18.3961 15.6379C18.8241 15.5767 19.1644 15.2475 19.2395 14.8217L20.5757 7.25H22V5.25H6.66556L5.9778 2.04047C5.879 1.5794 5.47154 1.25 5 1.25ZM18.5448 7.25H7.09413L8.75378 14.995L17.3959 13.7604L18.5448 7.25Z',
  d10: 'M6 17.25C4.48122 17.25 3.25 18.4812 3.25 20C3.25 21.5188 4.48122 22.75 6 22.75C7.16599 22.75 8.1625 22.0243 8.56253 21H14.4375C14.8375 22.0243 15.834 22.75 17 22.75C18.5188 22.75 19.75 21.5188 19.75 20C19.75 18.4812 18.5188 17.25 17 17.25C15.834 17.25 14.8375 17.9757 14.4375 19H8.56253C8.1625 17.9757 7.16599 17.25 6 17.25ZM5.08333 20C5.08333 19.4937 5.49374 19.0833 6 19.0833C6.50626 19.0833 6.91667 19.4937 6.91667 20C6.91667 20.5063 6.50626 20.9167 6 20.9167C5.49374 20.9167 5.08333 20.5063 5.08333 20ZM16.0833 20C16.0833 19.4937 16.4937 19.0833 17 19.0833C17.5063 19.0833 17.9167 19.4937 17.9167 20C17.9167 20.5063 17.5063 20.9167 17 20.9167C16.4937 20.9167 16.0833 20.5063 16.0833 20Z',
};

export const IconShoppingCart02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-02-stroke-rounded IconShoppingCart02StrokeRounded"
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
      <circle 
        cx="6" 
        cy="20" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="17" 
        cy="20" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCart02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-02-duotone-rounded IconShoppingCart02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <circle 
        cx="6" 
        cy="20" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="17" 
        cy="20" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCart02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-02-twotone-rounded IconShoppingCart02TwotoneRounded"
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
      <circle 
        cx="6" 
        cy="20" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="17" 
        cy="20" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCart02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-02-solid-rounded IconShoppingCart02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCart02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-02-bulk-rounded IconShoppingCart02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCart02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-02-stroke-sharp IconShoppingCart02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <circle 
        cx="6" 
        cy="20" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="17" 
        cy="20" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCart02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-02-solid-sharp IconShoppingCart02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingCart02: TheIconSelfPack = {
  name: 'ShoppingCart02',
  StrokeRounded: IconShoppingCart02StrokeRounded,
  DuotoneRounded: IconShoppingCart02DuotoneRounded,
  TwotoneRounded: IconShoppingCart02TwotoneRounded,
  SolidRounded: IconShoppingCart02SolidRounded,
  BulkRounded: IconShoppingCart02BulkRounded,
  StrokeSharp: IconShoppingCart02StrokeSharp,
  SolidSharp: IconShoppingCart02SolidSharp,
};