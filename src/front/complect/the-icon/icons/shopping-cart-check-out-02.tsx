import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6',
  d2: 'M6 6H8M22 6H19',
  d3: 'M11 5.5C11.4915 4.9943 12.7998 3 13.5 3M16 5.5C15.5085 4.9943 14.2002 3 13.5 3M13.5 3V11',
  d4: 'M8 20L15 20',
  d5: 'M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18',
  d6: 'M14.7632 15.5H8L5.5 6H18.8941C19.9947 6 20.545 6 20.8321 6.39507C21.1192 6.79013 20.9998 7.38311 20.761 8.56908C19.9697 12.5 21.5 15 14.7632 15.5Z',
  d7: 'M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3L2.966 3C3.47229 3 3.88381 3.33282 3.99481 3.76415L6.97007 15.3257C7.04276 15.6082 6.98213 15.9102 6.79668 16.1505L6.1384 17.0031C6.09253 17.0011 6.04639 17 6 17C4.34315 17 3 18.3431 3 20C3 21.6569 4.34315 23 6 23C7.30622 23 8.41746 22.1652 8.82929 21H14.1707C14.5825 22.1652 15.6938 23 17 23C18.6569 23 20 21.6569 20 20C20 18.3431 18.6569 17 17 17C15.6938 17 14.5825 17.8348 14.1707 19H8.82929C8.66671 18.54 8.39513 18.1315 8.04559 17.8055L8.37979 17.3727C8.48358 17.2382 8.57487 17.0965 8.65326 16.949L16.8032 16.2699C18.1572 16.157 19.3351 15.9448 20.1489 15.153C20.9628 14.3613 21.2074 13.1897 21.3574 11.8393L21.8951 7H22C22.5523 7 23 6.55228 23 6C23 5.44772 22.5523 5 22 5H21.0124L20.9972 4.99991L20.9853 5L19 5C18.4477 5 18 5.44772 18 6C18 6.55228 18.4477 7 19 7H19.8828L19.3696 11.6184C19.2173 12.9892 19.0044 13.4762 18.7543 13.7195C18.5042 13.9628 18.0116 14.1622 16.6371 14.2768L8.92904 14.9191C8.92219 14.8884 8.91483 14.8578 8.90696 14.8273L6.89269 7H8C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H6.37801L5.93171 3.26571C5.58447 1.91637 4.34908 1 2.966 1L2 1ZM12.5 11C12.5 11.5523 12.9477 12 13.5 12C14.0523 12 14.5 11.5523 14.5 11V6.50001H14.662C14.9524 6.50011 15.2597 6.50021 15.5022 6.47118C15.679 6.45001 16.3295 6.37025 16.6296 5.7613C16.93 5.15187 16.5851 4.60918 16.4914 4.46263C16.3625 4.26086 16.1695 4.02821 15.9869 3.8081L15.9869 3.80809L15.9869 3.80808L15.9869 3.80807L15.9555 3.77028C15.668 3.42352 15.3257 3.02882 14.9824 2.71482C14.811 2.55802 14.6127 2.39647 14.3974 2.26884C14.1978 2.15052 13.8826 2 13.5 2C13.1174 2 12.8022 2.15052 12.6026 2.26884C12.3873 2.39647 12.189 2.55802 12.0176 2.71482C11.6743 3.02882 11.332 3.42352 11.0445 3.77028L11.0131 3.80808C10.8305 4.02819 10.6375 4.26085 10.5086 4.46263C10.4149 4.60918 10.07 5.15187 10.3704 5.7613C10.6705 6.37025 11.321 6.45001 11.4978 6.47118C11.7403 6.50021 12.0476 6.50011 12.338 6.50001H12.5V11ZM6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20C7 19.4477 6.55228 19 6 19ZM17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21Z',
  d8: 'M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3L2.966 3C3.47229 3 3.88381 3.33282 3.99481 3.76415L6.97007 15.3257C7.04276 15.6082 6.98213 15.9102 6.79668 16.1505L6.1384 17.0031C6.09253 17.0011 6.04639 17 6 17C4.34315 17 3 18.3431 3 20C3 21.6569 4.34315 23 6 23C7.30622 23 8.41746 22.1652 8.82929 21H14.1707C14.5825 22.1652 15.6938 23 17 23C18.6569 23 20 21.6569 20 20C20 18.3431 18.6569 17 17 17C15.6938 17 14.5825 17.8348 14.1707 19H8.82929C8.66671 18.54 8.39513 18.1315 8.04559 17.8055L8.37979 17.3727C8.48358 17.2382 8.57487 17.0965 8.65326 16.949L16.8032 16.2699C18.1572 16.157 19.3351 15.9448 20.1489 15.153C20.9628 14.3613 21.2074 13.1897 21.3574 11.8393L21.8951 7H22C22.5523 7 23 6.55228 23 6C23 5.44772 22.5523 5 22 5H21.0124L20.9972 4.99991L20.9853 5L19 5C18.4477 5 18 5.44772 18 6C18 6.55228 18.4477 7 19 7H19.8828L19.3696 11.6184C19.2173 12.9892 19.0044 13.4762 18.7543 13.7195C18.5042 13.9628 18.0116 14.1622 16.6371 14.2768L8.92904 14.9191C8.92219 14.8884 8.91483 14.8578 8.90696 14.8273L6.89269 7H8C8.55228 7 9 6.55228 9 6C9 5.44772 8.55228 5 8 5H6.37801L5.93171 3.26571C5.58447 1.91637 4.34908 1 2.966 1L2 1ZM6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20C7 19.4477 6.55228 19 6 19ZM17 21C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21Z',
  d9: 'M12.5 11C12.5 11.5523 12.9477 12 13.5 12C14.0523 12 14.5 11.5523 14.5 11V6.50001H14.662C14.9524 6.50011 15.2597 6.50021 15.5022 6.47118C15.679 6.45001 16.3295 6.37025 16.6296 5.7613C16.93 5.15187 16.5851 4.60918 16.4914 4.46263C16.3625 4.26085 16.1695 4.02819 15.9869 3.80807L15.9555 3.77028C15.668 3.42352 15.3257 3.02882 14.9824 2.71482C14.811 2.55802 14.6127 2.39647 14.3974 2.26884C14.1978 2.15052 13.8826 2 13.5 2C13.1174 2 12.8022 2.15052 12.6026 2.26884C12.3873 2.39647 12.189 2.55802 12.0176 2.71482C11.6743 3.02882 11.332 3.42352 11.0445 3.77028L11.0131 3.80808C10.8305 4.02819 10.6375 4.26085 10.5086 4.46263C10.4149 4.60918 10.07 5.15187 10.3704 5.7613C10.6705 6.37025 11.321 6.45001 11.4978 6.47118C11.7403 6.50021 12.0476 6.50011 12.338 6.50001H12.5V11Z',
  d10: 'M8 16L18.5 14.5L20 6',
  d11: 'M6 6H8M22 6H18',
  d12: 'M2 2H5L8 16L6.63213 18',
  d13: 'M13 10V2.58082M16 5L13 2L10 5',
  d14: 'M13.0001 0.75L16.7072 4.45711L15.293 5.87132L14.0001 4.57843V10.1642H12.0001V4.57843L10.7072 5.87132L9.29297 4.45711L13.0001 0.75Z',
  d15: 'M5 1.75H2V3.75H4.19158L6.93225 16.5398L5.80672 18.1855L7.45754 19.3145L8.68096 17.5257L18.3961 16.1379C18.8241 16.0767 19.1644 15.7475 19.2395 15.3217L20.5757 7.75H22V5.75H17V7.75H18.5448L17.3959 14.2604L8.75378 15.495L7.09413 7.75H9V5.75H6.66556L5.9778 2.54047C5.879 2.0794 5.47154 1.75 5 1.75Z',
  d16: 'M6 17.75C4.48122 17.75 3.25 18.9812 3.25 20.5C3.25 22.0188 4.48122 23.25 6 23.25C7.16599 23.25 8.1625 22.5243 8.56253 21.5H14.4375C14.8375 22.5243 15.834 23.25 17 23.25C18.5188 23.25 19.75 22.0188 19.75 20.5C19.75 18.9812 18.5188 17.75 17 17.75C15.834 17.75 14.8375 18.4757 14.4375 19.5H8.56253C8.1625 18.4757 7.16599 17.75 6 17.75ZM5.08333 20.5C5.08333 19.9937 5.49374 19.5833 6 19.5833C6.50626 19.5833 6.91667 19.9937 6.91667 20.5C6.91667 21.0063 6.50626 21.4167 6 21.4167C5.49374 21.4167 5.08333 21.0063 5.08333 20.5ZM16.0833 20.5C16.0833 19.9937 16.4937 19.5833 17 19.5833C17.5063 19.5833 17.9167 19.9937 17.9167 20.5C17.9167 21.0063 17.5063 21.4167 17 21.4167C16.4937 21.4167 16.0833 21.0063 16.0833 20.5Z',
};

export const IconShoppingCartCheckOut02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-out-02-stroke-rounded IconShoppingCartCheckOut02StrokeRounded"
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

export const IconShoppingCartCheckOut02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-out-02-duotone-rounded IconShoppingCartCheckOut02DuotoneRounded"
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

export const IconShoppingCartCheckOut02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-out-02-twotone-rounded IconShoppingCartCheckOut02TwotoneRounded"
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

export const IconShoppingCartCheckOut02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-out-02-solid-rounded IconShoppingCartCheckOut02SolidRounded"
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

export const IconShoppingCartCheckOut02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-out-02-bulk-rounded IconShoppingCartCheckOut02BulkRounded"
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

export const IconShoppingCartCheckOut02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-out-02-stroke-sharp IconShoppingCartCheckOut02StrokeSharp"
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

export const IconShoppingCartCheckOut02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-out-02-solid-sharp IconShoppingCartCheckOut02SolidSharp"
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

export const iconPackOfShoppingCartCheckOut02: TheIconSelfPack = {
  name: 'ShoppingCartCheckOut02',
  StrokeRounded: IconShoppingCartCheckOut02StrokeRounded,
  DuotoneRounded: IconShoppingCartCheckOut02DuotoneRounded,
  TwotoneRounded: IconShoppingCartCheckOut02TwotoneRounded,
  SolidRounded: IconShoppingCartCheckOut02SolidRounded,
  BulkRounded: IconShoppingCartCheckOut02BulkRounded,
  StrokeSharp: IconShoppingCartCheckOut02StrokeSharp,
  SolidSharp: IconShoppingCartCheckOut02SolidSharp,
};