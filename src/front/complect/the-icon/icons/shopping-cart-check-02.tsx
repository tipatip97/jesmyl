import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6',
  d2: 'M6 6L7.5 6M22 6H19',
  d3: 'M10.5 7C10.5 7 11.5 7 12.5 9C12.5 9 15.6765 4 18.5 3',
  d4: 'M8 20L15 20',
  d5: 'M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18',
  d6: 'M14.7632 15.5H8L5.5 6H18.8941C19.9947 6 20.545 6 20.8321 6.39507C21.1192 6.79013 20.9998 7.38311 20.761 8.56908C19.9697 12.5 21.5 15 14.7632 15.5Z',
  d7: 'M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3L2.966 3C3.47229 3 3.88381 3.33282 3.99481 3.76415L6.97007 15.3257C7.04276 15.6082 6.98213 15.9102 6.79668 16.1505L6.1384 17.0031C6.09253 17.0011 6.04639 17 6 17C4.34315 17 3 18.3431 3 20C3 21.6569 4.34315 23 6 23C7.30622 23 8.41746 22.1652 8.82929 21H14.1707C14.5825 22.1652 15.6938 23 17 23C18.6569 23 20 21.6569 20 20C20 18.3431 18.6569 17 17 17C15.6938 17 14.5825 17.8348 14.1707 19H8.82929C8.66671 18.54 8.39513 18.1315 8.04559 17.8055L8.37979 17.3727C8.48357 17.2382 8.57485 17.0965 8.65324 16.9491L16.8032 16.2699C18.1572 16.1571 19.3351 15.9448 20.1489 15.1531C20.9628 14.3613 21.2074 13.1897 21.3574 11.8393L21.8951 7H22C22.5523 7 23 6.55228 23 6C23 5.44772 22.5523 5 22 5H21.0099H20.9878L19.5 5C18.9477 5 18.5 5.44772 18.5 6C18.5 6.55228 18.9477 7 19.5 7H19.8828L19.3696 11.6185C19.2173 12.9892 19.0044 13.4762 18.7543 13.7195C18.5042 13.9628 18.0116 14.1623 16.6371 14.2768L8.92905 14.9191C8.92219 14.8885 8.91483 14.8578 8.90696 14.8273L6.89269 7H7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5H6.37801L5.93171 3.26571C5.58447 1.91637 4.34908 1 2.966 1L2 1ZM18.8338 3.9429C19.3544 3.75852 19.627 3.18702 19.4426 2.66643C19.2582 2.14583 18.6868 1.87327 18.1662 2.05765C17.288 2.36865 16.4486 2.96179 15.712 3.60781C14.965 4.26292 14.2666 5.02349 13.6733 5.73468C13.234 6.26128 12.8456 6.76895 12.5304 7.1997C12.2416 6.85384 11.954 6.60107 11.6797 6.41822C11.4053 6.23529 11.1545 6.12939 10.9466 6.07C10.7642 6.01787 10.6368 6.00066 10.502 6.00027C9.9565 5.99948 9.5 6.45416 9.5 7.00027C9.5 7.52099 9.89799 7.94874 10.4064 7.99595C10.976 8.18834 11.3634 8.96312 11.6052 9.44666L11.6056 9.44749C11.7668 9.76985 12.0889 9.98053 12.4489 9.99896C12.8087 10.0174 13.1508 9.84059 13.3441 9.53651L13.3451 9.53496C13.5091 9.27893 13.6821 9.02848 13.8574 8.78008C14.1885 8.31109 14.6572 7.67736 15.2091 7.01586C15.7628 6.35205 16.388 5.67513 17.0307 5.11148C17.6837 4.53876 18.3002 4.1319 18.8338 3.9429ZM6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20C7 19.4477 6.55228 19 6 19ZM17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21Z',
  d8: 'M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3L2.966 3C3.47229 3 3.88381 3.33282 3.99481 3.76415L6.97007 15.3257C7.04276 15.6082 6.98213 15.9102 6.79668 16.1505L6.1384 17.0031C6.09253 17.0011 6.04639 17 6 17C4.34315 17 3 18.3431 3 20C3 21.6569 4.34315 23 6 23C7.30622 23 8.41746 22.1652 8.82929 21H14.1707C14.5825 22.1652 15.6938 23 17 23C18.6569 23 20 21.6569 20 20C20 18.3431 18.6569 17 17 17C15.6938 17 14.5825 17.8348 14.1707 19H8.82929C8.66671 18.54 8.39513 18.1315 8.04559 17.8055L8.37979 17.3727C8.48357 17.2382 8.57485 17.0965 8.65324 16.9491L16.8032 16.2699C18.1572 16.1571 19.3351 15.9448 20.1489 15.1531C20.9628 14.3613 21.2074 13.1897 21.3574 11.8393L21.8951 7H22C22.5523 7 23 6.55228 23 6C23 5.44772 22.5523 5 22 5H21.0099H20.9878L19.5 5C18.9477 5 18.5 5.44772 18.5 6C18.5 6.55228 18.9477 7 19.5 7H19.8828L19.3696 11.6185C19.2173 12.9892 19.0044 13.4762 18.7543 13.7195C18.5042 13.9628 18.0116 14.1623 16.6371 14.2768L8.92905 14.9191C8.92219 14.8885 8.91483 14.8578 8.90696 14.8273L6.89269 7H7C7.55228 7 8 6.55228 8 6C8 5.44772 7.55228 5 7 5H6.37801L5.93171 3.26571C5.58447 1.91637 4.34908 1 2.966 1L2 1ZM6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20C7 19.4477 6.55228 19 6 19ZM17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21Z',
  d9: 'M19.4426 2.66643C19.627 3.18702 19.3544 3.75852 18.8338 3.9429C18.3002 4.1319 17.6837 4.53876 17.0307 5.11148C16.388 5.67513 15.7628 6.35205 15.2091 7.01586C14.6572 7.67736 14.1885 8.31109 13.8574 8.78008C13.6821 9.02848 13.5091 9.27893 13.3451 9.53496L13.3441 9.53651C13.1508 9.84059 12.8087 10.0174 12.4489 9.99896C12.0889 9.98053 11.7668 9.76985 11.6056 9.44749C11.3638 8.964 10.9763 8.18845 10.4064 7.99595C9.89799 7.94874 9.5 7.52099 9.5 7.00027C9.5 6.45416 9.9565 5.99948 10.502 6.00027C10.6368 6.00066 10.7642 6.01787 10.9466 6.07C11.1545 6.12939 11.4053 6.23529 11.6797 6.41822C11.954 6.60107 12.2416 6.85384 12.5304 7.1997C12.8456 6.76895 13.234 6.26128 13.6733 5.73468C14.2666 5.02349 14.965 4.26292 15.712 3.60781C16.4486 2.96179 17.288 2.36865 18.1662 2.05765C18.6868 1.87327 19.2582 2.14583 19.4426 2.66643Z',
  d10: 'M8 16L18.5 14.5L20 6',
  d11: 'M6 6H8M22 6H18.5',
  d12: 'M2 2H5L8 16L6.63213 18',
  d13: 'M10 7L12 9L18 3',
  d14: 'M18.7072 2.66421L12.0001 9.37132L9.29297 6.66421L10.7072 5.25L12.0001 6.54289L17.293 1.25L18.7072 2.66421Z',
  d15: 'M5 1.25H2V3.25H4.19158L6.93225 16.0398L5.80672 17.6855L7.45754 18.8145L8.68096 17.0257L18.3961 15.6379C18.8241 15.5767 19.1644 15.2475 19.2395 14.8217L20.5757 7.25H22V5.25H18V7.25H18.5448L17.3959 13.7604L8.75378 14.995L7.09413 7.25H8V5.25H6.66556L5.9778 2.04047C5.879 1.5794 5.47154 1.25 5 1.25Z',
  d16: 'M6 17.25C4.48122 17.25 3.25 18.4812 3.25 20C3.25 21.5188 4.48122 22.75 6 22.75C7.16599 22.75 8.1625 22.0243 8.56253 21H14.4375C14.8375 22.0243 15.834 22.75 17 22.75C18.5188 22.75 19.75 21.5188 19.75 20C19.75 18.4812 18.5188 17.25 17 17.25C15.834 17.25 14.8375 17.9757 14.4375 19H8.56253C8.1625 17.9757 7.16599 17.25 6 17.25ZM5.08333 20C5.08333 19.4937 5.49374 19.0833 6 19.0833C6.50626 19.0833 6.91667 19.4937 6.91667 20C6.91667 20.5063 6.50626 20.9167 6 20.9167C5.49374 20.9167 5.08333 20.5063 5.08333 20ZM16.0833 20C16.0833 19.4937 16.4937 19.0833 17 19.0833C17.5063 19.0833 17.9167 19.4937 17.9167 20C17.9167 20.5063 17.5063 20.9167 17 20.9167C16.4937 20.9167 16.0833 20.5063 16.0833 20Z',
};

export const IconShoppingCartCheck02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-02-stroke-rounded IconShoppingCartCheck02StrokeRounded"
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
        strokeLinejoin="round" 
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

export const IconShoppingCartCheck02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-02-duotone-rounded IconShoppingCartCheck02DuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconShoppingCartCheck02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-02-twotone-rounded IconShoppingCartCheck02TwotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconShoppingCartCheck02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-02-solid-rounded IconShoppingCartCheck02SolidRounded"
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

export const IconShoppingCartCheck02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-02-bulk-rounded IconShoppingCartCheck02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconShoppingCartCheck02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-02-stroke-sharp IconShoppingCartCheck02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartCheck02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-02-solid-sharp IconShoppingCartCheck02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfShoppingCartCheck02: TheIconSelfPack = {
  name: 'ShoppingCartCheck02',
  StrokeRounded: IconShoppingCartCheck02StrokeRounded,
  DuotoneRounded: IconShoppingCartCheck02DuotoneRounded,
  TwotoneRounded: IconShoppingCartCheck02TwotoneRounded,
  SolidRounded: IconShoppingCartCheck02SolidRounded,
  BulkRounded: IconShoppingCartCheck02BulkRounded,
  StrokeSharp: IconShoppingCartCheck02StrokeSharp,
  SolidSharp: IconShoppingCartCheck02SolidSharp,
};