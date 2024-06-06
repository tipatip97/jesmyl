import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6',
  d2: 'M6 6H7M22 6H20',
  d3: 'M10.515 2.38661C11.5876 1.74692 12.5238 2.00471 13.0863 2.41534C13.3169 2.58371 13.4322 2.66789 13.5 2.66789C13.5678 2.66789 13.6831 2.58371 13.9137 2.41534C14.4762 2.00471 15.4124 1.74692 16.485 2.38661C17.8928 3.22614 18.2113 5.99578 14.9642 8.33242C14.3457 8.77747 14.0365 9 13.5 9C12.9635 9 12.6543 8.77747 12.0358 8.33242C8.78869 5.99578 9.10723 3.22614 10.515 2.38661Z',
  d4: 'M8 20L15 20',
  d5: 'M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18',
  d6: 'M9.91568 6H5.5L8 15.5H14.7632C20.1073 15.1034 20.2491 13.4482 20.4743 10.8185C20.533 10.1332 20.5974 9.38172 20.761 8.56908C20.9998 7.38311 21.1192 6.79013 20.8321 6.39507C20.545 6 19.9947 6 18.8941 6H17.0843C16.6971 6.76918 16.0186 7.57363 14.9642 8.33242C14.3457 8.77747 14.0365 9 13.5 9C12.9635 9 12.6543 8.77747 12.0358 8.33242C10.9814 7.57363 10.3029 6.76918 9.91568 6Z',
  d7: 'M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3L2.966 3C3.47229 3 3.88381 3.33282 3.99481 3.76415L6.97007 15.3257C7.04276 15.6082 6.98213 15.9102 6.79668 16.1505L6.1384 17.0031C6.09253 17.0011 6.04639 17 6 17C4.34315 17 3 18.3431 3 20C3 21.6569 4.34315 23 6 23C7.30622 23 8.41746 22.1652 8.82929 21H14.1707C14.5825 22.1652 15.6938 23 17 23C18.6569 23 20 21.6569 20 20C20 18.3431 18.6569 17 17 17C15.6938 17 14.5825 17.8348 14.1707 19H8.82929C8.66671 18.54 8.39513 18.1315 8.04559 17.8055L8.37979 17.3727C8.48357 17.2382 8.57485 17.0965 8.65324 16.9491L16.8032 16.2699C18.1572 16.1571 19.3351 15.9448 20.1489 15.1531C20.9628 14.3613 21.2074 13.1897 21.3574 11.8393L21.8951 7H22C22.5523 7 23 6.55228 23 6C23 5.44772 22.5523 5 22 5H21.0099H20.9878L20 5C19.4477 5 19 5.44772 19 6C19 6.51289 19.3861 6.9356 19.8835 6.99329L19.3696 11.6185C19.2173 12.9892 19.0044 13.4762 18.7543 13.7195C18.5042 13.9628 18.0116 14.1623 16.6371 14.2768L8.92905 14.9191C8.92219 14.8885 8.91483 14.8578 8.90696 14.8273L6.89269 7H7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5H6.37801L5.93171 3.26571C5.58447 1.91637 4.34908 1 2.966 1L2 1ZM13.4996 1.78934C12.7268 1.23972 11.4798 0.938062 10.1305 1.74274C9.12413 2.34288 8.60249 3.56706 8.78649 4.90087C8.97188 6.24475 9.85426 7.68711 11.5974 8.94146L11.6715 8.99486C12.2254 9.39455 12.7184 9.75028 13.4996 9.75028C14.2809 9.75028 14.7739 9.39454 15.3279 8.99483L15.4019 8.94146C17.145 7.68711 18.0274 6.24475 18.2128 4.90087C18.3968 3.56706 17.8751 2.34288 16.8688 1.74274C15.5195 0.938062 14.2725 1.23972 13.4996 1.78934ZM6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20C7 19.4477 6.55228 19 6 19ZM17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21Z',
  d8: 'M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3L2.966 3C3.47229 3 3.88381 3.33282 3.99481 3.76415L6.97007 15.3257C7.04276 15.6082 6.98213 15.9102 6.79668 16.1505L6.1384 17.0031C6.09253 17.0011 6.04639 17 6 17C4.34315 17 3 18.3431 3 20C3 21.6569 4.34315 23 6 23C7.30622 23 8.41746 22.1652 8.82929 21H14.1707C14.5825 22.1652 15.6938 23 17 23C18.6569 23 20 21.6569 20 20C20 18.3431 18.6569 17 17 17C15.6938 17 14.5825 17.8348 14.1707 19H8.82929C8.66671 18.54 8.39513 18.1315 8.04559 17.8055L8.37979 17.3727C8.48357 17.2382 8.57485 17.0965 8.65324 16.9491L16.8032 16.2699C18.1572 16.1571 19.3351 15.9448 20.1489 15.1531C20.9628 14.3613 21.2074 13.1897 21.3574 11.8393L21.8951 7H22C22.5523 7 23 6.55228 23 6C23 5.44772 22.5523 5 22 5H21.0099H20.9878L20 5C19.4477 5 19 5.44772 19 6C19 6.51289 19.3861 6.9356 19.8835 6.99329L19.3696 11.6185C19.2173 12.9892 19.0044 13.4762 18.7543 13.7195C18.5042 13.9628 18.0116 14.1623 16.6371 14.2768L8.92905 14.9191C8.92219 14.8885 8.91483 14.8578 8.90696 14.8273L6.89269 7H7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5H6.37801L5.93171 3.26571C5.58447 1.91637 4.34908 1 2.966 1L2 1ZM6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20C7 19.4477 6.55228 19 6 19ZM17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21Z',
  d9: 'M10.1305 1.74274C11.4798 0.938062 12.7268 1.23972 13.4996 1.78934C14.2725 1.23972 15.5195 0.938062 16.8688 1.74274C17.8751 2.34288 18.3968 3.56706 18.2128 4.90087C18.0274 6.24475 17.145 7.68711 15.4019 8.94146C14.8171 9.36231 14.3155 9.75028 13.4996 9.75028C12.6837 9.75028 12.1822 9.36231 11.5974 8.94146C9.85426 7.68711 8.97188 6.24475 8.78649 4.90087C8.60249 3.56706 9.12413 2.34288 10.1305 1.74274Z',
  d10: 'M8 16L18.5 14.5L20 6',
  d11: 'M22 6H18.5',
  d12: 'M2 2H5L8 16L6.63213 18',
  d13: 'M15.2441 2.2896C13.6474 1.45704 12.501 2.68433 12.501 2.68433C12.501 2.68433 11.3545 1.45704 9.7578 2.2896C7.82391 3.29799 7.68505 7.24689 12.501 9C17.3169 7.24689 17.178 3.29799 15.2441 2.2896Z',
  d14: 'M15.6386 1.5396C14.0419 0.707044 12.8955 1.93433 12.8955 1.93433C12.8955 1.93433 11.749 0.70704 10.1523 1.5396C8.21845 2.54799 8.07958 6.49689 12.8955 8.25C17.7114 6.49689 17.5725 2.54799 15.6386 1.5396Z',
  d15: 'M5 1.25H2V3.25H4.19158L6.93225 16.0398L5.80672 17.6855L7.45754 18.8145L8.68096 17.0257L18.3961 15.6379C18.8241 15.5767 19.1644 15.2475 19.2395 14.8217L20.5757 7.25H22V5.25H18V7.25H18.5448L17.3959 13.7604L8.75378 14.995L7.09413 7.25H8V5.25H6.66556L5.9778 2.04047C5.879 1.5794 5.47154 1.25 5 1.25Z',
  d16: 'M6 17.25C4.48122 17.25 3.25 18.4812 3.25 20C3.25 21.5188 4.48122 22.75 6 22.75C7.16599 22.75 8.1625 22.0243 8.56253 21H14.4375C14.8375 22.0243 15.834 22.75 17 22.75C18.5188 22.75 19.75 21.5188 19.75 20C19.75 18.4812 18.5188 17.25 17 17.25C15.834 17.25 14.8375 17.9757 14.4375 19H8.56253C8.1625 17.9757 7.16599 17.25 6 17.25ZM5.08333 20C5.08333 19.4937 5.49374 19.0833 6 19.0833C6.50626 19.0833 6.91667 19.4937 6.91667 20C6.91667 20.5063 6.50626 20.9167 6 20.9167C5.49374 20.9167 5.08333 20.5063 5.08333 20ZM16.0833 20C16.0833 19.4937 16.4937 19.0833 17 19.0833C17.5063 19.0833 17.9167 19.4937 17.9167 20C17.9167 20.5063 17.5063 20.9167 17 20.9167C16.4937 20.9167 16.0833 20.5063 16.0833 20Z',
};

export const IconShoppingCartFavorite02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-02-stroke-rounded IconShoppingCartFavorite02StrokeRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartFavorite02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-02-duotone-rounded IconShoppingCartFavorite02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartFavorite02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-02-twotone-rounded IconShoppingCartFavorite02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartFavorite02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-02-solid-rounded IconShoppingCartFavorite02SolidRounded"
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

export const IconShoppingCartFavorite02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-02-bulk-rounded IconShoppingCartFavorite02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconShoppingCartFavorite02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-02-stroke-sharp IconShoppingCartFavorite02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartFavorite02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-02-solid-sharp IconShoppingCartFavorite02SolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingCartFavorite02: TheIconSelfPack = {
  name: 'ShoppingCartFavorite02',
  StrokeRounded: IconShoppingCartFavorite02StrokeRounded,
  DuotoneRounded: IconShoppingCartFavorite02DuotoneRounded,
  TwotoneRounded: IconShoppingCartFavorite02TwotoneRounded,
  SolidRounded: IconShoppingCartFavorite02SolidRounded,
  BulkRounded: IconShoppingCartFavorite02BulkRounded,
  StrokeSharp: IconShoppingCartFavorite02StrokeSharp,
  SolidSharp: IconShoppingCartFavorite02SolidSharp,
};