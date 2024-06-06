import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H19M6 6.5H7.5',
  d2: 'M10.5 7C10.5 7 11.5 7 12.5 9C12.5 9 15.6765 4 18.5 3',
  d3: 'M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5',
  d4: 'M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5',
  d5: 'M15.2632 16H8L6 6.5H19.3941C20.4947 6.5 21.045 6.5 21.3321 6.89507C21.6192 7.29013 21.4998 7.88311 21.261 9.06908C20.4333 13.1808 19.7508 16 15.2632 16Z',
  d6: 'M1.5 2C1.5 1.44772 1.94772 1 2.5 1L3.43845 1C4.81505 1 6.015 1.93689 6.34887 3.27239L6.35349 3.29084L6.8173 5.5L7.5 5.5C8.05228 5.5 8.5 5.94772 8.5 6.5C8.5 7.05229 8.05228 7.5 7.5 7.5H7.23721L8.81185 15H8.88L15.2632 15C16.2838 15 17.015 14.8393 17.5562 14.5882C18.0861 14.3423 18.4837 13.9869 18.8096 13.5112C19.5068 12.4937 19.8556 10.9832 20.2807 8.87172C20.4056 8.25109 20.4778 7.88216 20.4961 7.61683C20.5082 7.44137 19.8462 7.47705 19.5327 7.49395C19.4696 7.49736 19.4206 7.5 19.3941 7.5H19C18.4477 7.5 18 7.05229 18 6.5C18 5.94772 18.4477 5.5 19 5.5H19.3941L19.4593 5.49999C19.9527 5.49987 20.4344 5.49975 20.8249 5.56175C21.2743 5.6331 21.781 5.81179 22.141 6.30719C22.4858 6.78159 22.5219 7.31012 22.4914 7.75414C22.463 8.16595 22.3624 8.66554 22.253 9.2085L22.253 9.20852L22.2414 9.26643C21.8387 11.2668 21.4324 13.2217 20.4595 14.6417C19.9504 15.3847 19.2842 15.9911 18.3981 16.4023C17.5234 16.8083 16.4865 17 15.2632 17L8.88 17H8.46857C7.86982 17 7.31751 17.3988 7.09895 18L17.5 18C17.5412 18 17.5817 18.0056 17.6216 18.0158C18.8003 18.0867 19.7344 19.0652 19.7344 20.2617C19.7344 21.5044 18.727 22.5117 17.4844 22.5117C16.2417 22.5117 15.2344 21.5044 15.2344 20.2617C15.2344 20.1732 15.2395 20.0859 15.2494 20H12.7193C12.7293 20.0859 12.7344 20.1732 12.7344 20.2617C12.7344 21.5044 11.727 22.5117 10.4844 22.5117C9.24173 22.5117 8.23438 21.5044 8.23438 20.2617C8.23438 20.1732 8.23949 20.0859 8.24943 20H6.41143C5.59384 20 5 19.3215 5 18.5714C5 17.2195 5.74057 16.0121 6.85392 15.4081L5.04829 6.80789C5.02706 6.74219 5.01243 6.67352 5.0052 6.60265L4.40464 3.74218C4.28811 3.30517 3.89205 3 3.43845 3L2.5 3C1.94772 3 1.5 2.55228 1.5 2ZM18.8338 3.9429C19.3544 3.75852 19.627 3.18702 19.4426 2.66643C19.2582 2.14583 18.6868 1.87327 18.1662 2.05765C17.288 2.36865 16.4486 2.96179 15.712 3.60781C14.965 4.26292 14.2666 5.02349 13.6733 5.73468C13.234 6.26128 12.8456 6.76895 12.5304 7.1997C12.2416 6.85384 11.954 6.60107 11.6797 6.41822C11.2691 6.14446 10.9049 6.04333 10.6771 6.01295C10.0758 5.93278 9.5 6.36837 9.5 7.00027C9.5 7.52099 9.89799 7.94874 10.4064 7.99595C10.429 8.00359 10.486 8.02611 10.5703 8.08232C10.7696 8.21517 11.1649 8.56612 11.6056 9.44749C11.7668 9.76985 12.0889 9.98053 12.4489 9.99896C12.8087 10.0174 13.1508 9.84059 13.3441 9.53651L13.3451 9.53496C13.5091 9.27894 13.6821 9.02846 13.8574 8.78008C14.1885 8.31109 14.6572 7.67736 15.2091 7.01586C15.7628 6.35205 16.388 5.67513 17.0307 5.11148C17.6837 4.53876 18.3002 4.1319 18.8338 3.9429ZM10.4844 19.5117C10.0702 19.5117 9.73438 19.8475 9.73438 20.2617C9.73438 20.6759 10.0702 21.0117 10.4844 21.0117C10.8986 21.0117 11.2344 20.6759 11.2344 20.2617C11.2344 19.8475 10.8986 19.5117 10.4844 19.5117ZM16.7344 20.2617C16.7344 19.8475 17.0702 19.5117 17.4844 19.5117C17.8986 19.5117 18.2344 19.8475 18.2344 20.2617C18.2344 20.6759 17.8986 21.0117 17.4844 21.0117C17.0702 21.0117 16.7344 20.6759 16.7344 20.2617Z',
  d7: 'M1.5 2C1.5 1.44772 1.94772 1 2.5 1L3.43845 1C4.81505 1 6.015 1.93689 6.34887 3.27239L6.35349 3.29084L6.8173 5.5L7.5 5.5C8.05228 5.5 8.5 5.94772 8.5 6.5C8.5 7.05229 8.05228 7.5 7.5 7.5H7.23721L8.81185 15H8.88L15.2632 15C16.2838 15 17.015 14.8393 17.5562 14.5882C18.0861 14.3423 18.4837 13.9869 18.8096 13.5112C19.5068 12.4937 19.8556 10.9832 20.2807 8.87172C20.4056 8.25109 20.4778 7.88216 20.4961 7.61683C20.5082 7.44137 19.8462 7.47705 19.5327 7.49395C19.4696 7.49736 19.4206 7.5 19.3941 7.5H19C18.4477 7.5 18 7.05229 18 6.5C18 5.94772 18.4477 5.5 19 5.5H19.3941L19.4593 5.49999C19.9527 5.49987 20.4344 5.49975 20.8249 5.56175C21.2743 5.6331 21.781 5.81179 22.141 6.30719C22.4858 6.78159 22.5219 7.31012 22.4914 7.75414C22.463 8.16595 22.3624 8.66554 22.253 9.2085L22.253 9.20852L22.2414 9.26643C21.8387 11.2668 21.4324 13.2217 20.4595 14.6417C19.9504 15.3847 19.2842 15.9911 18.3981 16.4023C17.5234 16.8083 16.4865 17 15.2632 17L8.88 17H8.46857C7.86982 17 7.31751 17.3988 7.09895 18L17.5 18C17.5412 18 17.5817 18.0056 17.6216 18.0158C18.8003 18.0867 19.7344 19.0652 19.7344 20.2617C19.7344 21.5044 18.727 22.5117 17.4844 22.5117C16.2417 22.5117 15.2344 21.5044 15.2344 20.2617C15.2344 20.1732 15.2395 20.0859 15.2494 20H12.7193C12.7293 20.0859 12.7344 20.1732 12.7344 20.2617C12.7344 21.5044 11.727 22.5117 10.4844 22.5117C9.24173 22.5117 8.23438 21.5044 8.23438 20.2617C8.23438 20.1732 8.23949 20.0859 8.24943 20H6.41143C5.59384 20 5 19.3215 5 18.5714C5 17.2195 5.74057 16.0121 6.85392 15.4081L5.04829 6.80789C5.02706 6.74219 5.01243 6.67352 5.0052 6.60265L4.40464 3.74218C4.28811 3.30517 3.89205 3 3.43845 3L2.5 3C1.94772 3 1.5 2.55228 1.5 2ZM10.4844 19.5117C10.0702 19.5117 9.73438 19.8475 9.73438 20.2617C9.73438 20.6759 10.0702 21.0117 10.4844 21.0117C10.8986 21.0117 11.2344 20.6759 11.2344 20.2617C11.2344 19.8475 10.8986 19.5117 10.4844 19.5117ZM16.7344 20.2617C16.7344 19.8475 17.0702 19.5117 17.4844 19.5117C17.8986 19.5117 18.2344 19.8475 18.2344 20.2617C18.2344 20.6759 17.8986 21.0117 17.4844 21.0117C17.0702 21.0117 16.7344 20.6759 16.7344 20.2617Z',
  d8: 'M19.4426 2.66643C19.627 3.18702 19.3544 3.75852 18.8338 3.9429C18.3002 4.1319 17.6837 4.53876 17.0307 5.11148C16.388 5.67513 15.7628 6.35205 15.2091 7.01586C14.6572 7.67736 14.1885 8.31109 13.8574 8.78008C13.6821 9.02846 13.5091 9.27894 13.3451 9.53496L13.3441 9.53651C13.1508 9.84059 12.8087 10.0174 12.4489 9.99896C12.0889 9.98053 11.7668 9.76985 11.6056 9.44749C11.1649 8.56612 10.7696 8.21517 10.5703 8.08232C10.486 8.02611 10.429 8.00359 10.4064 7.99595C9.89799 7.94874 9.5 7.52099 9.5 7.00027C9.5 6.36837 10.0758 5.93278 10.6771 6.01295C10.9049 6.04333 11.2691 6.14446 11.6797 6.41822C11.954 6.60107 12.2416 6.85384 12.5304 7.1997C12.8456 6.76895 13.234 6.26128 13.6733 5.73468C14.2666 5.02349 14.965 4.26292 15.712 3.60781C16.4486 2.96179 17.288 2.36865 18.1662 2.05765C18.6868 1.87327 19.2582 2.14583 19.4426 2.66643Z',
  d9: 'M8.50195 16L5.50195 2.00006L2.00195 2',
  d10: 'M10.502 22C11.3304 22 12.002 21.3284 12.002 20.5C12.002 19.6716 11.3304 19 10.502 19C9.67353 19 9.00195 19.6716 9.00195 20.5C9.00195 21.3284 9.67353 22 10.502 22Z',
  d11: 'M17.502 22C18.3304 22 19.002 21.3284 19.002 20.5C19.002 19.6716 18.3304 19 17.502 19C16.6735 19 16.002 19.6716 16.002 20.5C16.002 21.3284 16.6735 22 17.502 22Z',
  d12: 'M11.502 7L13.502 9L19.502 3',
  d13: 'M17.3099 18.9996H6.50586C6.50586 16.5707 8.57819 15.9519 9.58631 16.0105H15.5226C20.7196 16.138 21.9984 11.162 21.9984 6.52003C21.9982 6.51469 21.9938 6.51074 21.9885 6.51074H20.1715M6.5106 6.51074H8.97737',
  d14: 'M1.75003 1.25L5.1667 1.25005C5.627 1.25006 6.02476 1.57079 6.1212 2.01972L6.89717 5.63161L8 5.63161V7.57889L7.31641 7.57889L8.88529 14.8815H15.1864C17.0211 14.8815 18.2289 14.0987 19.0331 12.7427C19.7706 11.4992 20.1842 9.73599 20.2779 7.57886L19.0331 7.57886V5.63158L21.2738 5.63158C21.5327 5.63158 21.781 5.73416 21.9641 5.91676C22.1472 6.09936 22.25 6.34703 22.25 6.60526C22.25 9.35783 21.816 11.8738 20.7126 13.7342C19.5679 15.6644 17.7315 16.829 15.1855 16.829H8.73354C7.94873 16.829 7.31252 17.4652 7.31252 18.25H17C18.2426 18.25 19.25 19.2574 19.25 20.5C19.25 21.7426 18.2426 22.75 17 22.75C15.7574 22.75 14.75 21.7426 14.75 20.5C14.75 20.3974 14.7569 20.2964 14.7702 20.1974H12.2298C12.2431 20.2964 12.25 20.3974 12.25 20.5C12.25 21.7426 11.2426 22.75 10 22.75C8.75736 22.75 7.75 21.7426 7.75 20.5C7.75 20.3974 7.75687 20.2964 7.77018 20.1974H5.16667V19.2237C5.16667 18.323 5.39521 17.1355 5.78821 16.5475C6.13332 16.0311 6.57501 15.6771 7.00683 15.436L4.37751 3.19741L1.75 3.19737L1.75003 1.25ZM10 19.75C9.58579 19.75 9.25 20.0858 9.25 20.5C9.25 20.9142 9.58579 21.25 10 21.25C10.4142 21.25 10.75 20.9142 10.75 20.5C10.75 20.0858 10.4142 19.75 10 19.75ZM17 19.75C16.5858 19.75 16.25 20.0858 16.25 20.5C16.25 20.9142 16.5858 21.25 17 21.25C17.4142 21.25 17.75 20.9142 17.75 20.5C17.75 20.0858 17.4142 19.75 17 19.75Z',
  d15: 'M19.2072 3.33218L12.5001 10.0393L9.79297 7.33218L11.2072 5.91797L12.5001 7.21086L17.793 1.91797L19.2072 3.33218Z',
};

export const IconShoppingCartCheck01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-01-stroke-rounded IconShoppingCartCheck01StrokeRounded"
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
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="10.5" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="17.5" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconShoppingCartCheck01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-01-duotone-rounded IconShoppingCartCheck01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="10.5" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="17.5" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconShoppingCartCheck01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-01-twotone-rounded IconShoppingCartCheck01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
      <circle 
        cx="10.5" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <circle 
        cx="17.5" 
        cy="20.5" 
        r="1.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconShoppingCartCheck01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-01-solid-rounded IconShoppingCartCheck01SolidRounded"
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

export const IconShoppingCartCheck01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-01-bulk-rounded IconShoppingCartCheck01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconShoppingCartCheck01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-01-stroke-sharp IconShoppingCartCheck01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartCheck01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-01-solid-sharp IconShoppingCartCheck01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingCartCheck01: TheIconSelfPack = {
  name: 'ShoppingCartCheck01',
  StrokeRounded: IconShoppingCartCheck01StrokeRounded,
  DuotoneRounded: IconShoppingCartCheck01DuotoneRounded,
  TwotoneRounded: IconShoppingCartCheck01TwotoneRounded,
  SolidRounded: IconShoppingCartCheck01SolidRounded,
  BulkRounded: IconShoppingCartCheck01BulkRounded,
  StrokeSharp: IconShoppingCartCheck01StrokeSharp,
  SolidSharp: IconShoppingCartCheck01SolidSharp,
};