import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H19M6 6.5H8',
  d2: 'M11 8.5C11.4915 9.0057 12.7998 11 13.5 11M16 8.5C15.5085 9.0057 14.2002 11 13.5 11M13.5 11V3',
  d3: 'M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5',
  d4: 'M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5',
  d5: 'M15.2632 16H8L6 6.5H19.3941C20.4947 6.5 21.045 6.5 21.3321 6.89507C21.6192 7.29013 21.4998 7.88311 21.261 9.06908C20.4333 13.1808 19.7508 16 15.2632 16Z',
  d6: 'M1.5 2C1.5 1.44772 1.94772 1 2.5 1L3.43845 1C4.81505 1 6.015 1.93689 6.34887 3.27239L6.35349 3.29084L6.8173 5.5L8 5.5C8.55228 5.5 9 5.94771 9 6.5C9 7.05228 8.55228 7.5 8 7.5H7.23721L8.81185 15L15.2632 15C16.2838 15 17.015 14.8393 17.5562 14.5882C18.0861 14.3423 18.4837 13.9869 18.8096 13.5112C19.5068 12.4937 19.8556 10.9832 20.2807 8.87172C20.4056 8.25109 20.4778 7.88216 20.4961 7.61683C20.5082 7.44136 19.8462 7.47705 19.5327 7.49395C19.4696 7.49736 19.4206 7.5 19.3941 7.5H19C18.4477 7.5 18 7.05228 18 6.5C18 5.94771 18.4477 5.5 19 5.5H19.3941L19.4593 5.49999C19.9527 5.49987 20.4344 5.49975 20.8249 5.56175C21.2743 5.6331 21.781 5.81179 22.141 6.30719C22.4858 6.78159 22.5219 7.31012 22.4914 7.75414C22.463 8.16594 22.3624 8.66554 22.253 9.20849L22.253 9.20852L22.2414 9.26643C21.8387 11.2668 21.4324 13.2217 20.4595 14.6417C19.9504 15.3847 19.2842 15.9911 18.3981 16.4023C17.5234 16.8083 16.4865 17 15.2632 17L8.88197 17L8.88 17H8.46857C7.86982 17 7.31751 17.3988 7.09895 18L17.5 18C17.57 18 17.6382 18.0072 17.7042 18.0209C18.8511 18.124 19.75 19.0879 19.75 20.2617C19.75 21.5044 18.7426 22.5117 17.5 22.5117C16.2574 22.5117 15.25 21.5044 15.25 20.2617C15.25 20.1732 15.2551 20.0859 15.2651 20H12.7349C12.7449 20.0859 12.75 20.1732 12.75 20.2617C12.75 21.5044 11.7426 22.5117 10.5 22.5117C9.25736 22.5117 8.25 21.5044 8.25 20.2617C8.25 20.1732 8.25511 20.0859 8.26506 20H6.41143C5.59384 20 5 19.3215 5 18.5714C5 17.2195 5.74057 16.0121 6.85392 15.4081L5.04829 6.80788C5.02706 6.74219 5.01243 6.67352 5.0052 6.60266L4.40464 3.74218C4.28811 3.30517 3.89205 3 3.43845 3L2.5 3C1.94772 3 1.5 2.55228 1.5 2ZM10.5 19.5117C10.0858 19.5117 9.75 19.8475 9.75 20.2617C9.75 20.6759 10.0858 21.0117 10.5 21.0117C10.9142 21.0117 11.25 20.6759 11.25 20.2617C11.25 19.8475 10.9142 19.5117 10.5 19.5117ZM16.75 20.2617C16.75 19.8475 17.0858 19.5117 17.5 19.5117C17.9142 19.5117 18.25 19.8475 18.25 20.2617C18.25 20.6759 17.9142 21.0117 17.5 21.0117C17.0858 21.0117 16.75 20.6759 16.75 20.2617Z',
  d7: 'M12.5 3C12.5 2.44772 12.9477 2 13.5 2C14.0523 2 14.5 2.44772 14.5 3V7.49999H14.662C14.9524 7.49989 15.2597 7.49979 15.5022 7.52882C15.679 7.54999 16.3295 7.62975 16.6296 8.2387C16.93 8.84813 16.5851 9.39082 16.4914 9.53737C16.3625 9.73915 16.1695 9.97181 15.9869 10.1919L15.9555 10.2297C15.668 10.5765 15.3257 10.9712 14.9824 11.2852C14.811 11.442 14.6127 11.6035 14.3974 11.7312C14.1978 11.8495 13.8826 12 13.5 12C13.1174 12 12.8022 11.8495 12.6026 11.7312C12.3873 11.6035 12.189 11.442 12.0176 11.2852C11.6743 10.9712 11.332 10.5765 11.0445 10.2297L11.0131 10.1919C10.8305 9.97181 10.6375 9.73915 10.5086 9.53737C10.4149 9.39082 10.07 8.84813 10.3704 8.2387C10.6705 7.62975 11.321 7.54999 11.4978 7.52882C11.7403 7.49979 12.0476 7.49989 12.338 7.49999H12.5V3Z',
  d8: 'M8.50195 16L5.50195 2.00006L2.00195 2',
  d9: 'M10.502 22C11.3304 22 12.002 21.3284 12.002 20.5C12.002 19.6716 11.3304 19 10.502 19C9.67353 19 9.00195 19.6716 9.00195 20.5C9.00195 21.3284 9.67353 22 10.502 22Z',
  d10: 'M17.502 22C18.3304 22 19.002 21.3284 19.002 20.5C19.002 19.6716 18.3304 19 17.502 19C16.6735 19 16.002 19.6716 16.002 20.5C16.002 21.3284 16.6735 22 17.502 22Z',
  d11: 'M11.502 8L14.502 11L17.502 8M14.502 3V10.4235',
  d12: 'M17.3099 18.9948H6.50586C6.50586 16.5658 8.57819 15.947 9.58631 16.0057H15.5226C20.7196 16.1332 21.9984 11.1572 21.9984 6.51515C21.9982 6.50981 21.9938 6.50586 21.9885 6.50586L18.9833 6.51515M6.5106 6.50586H10.0309',
  d13: 'M1.75003 1.25L5.1667 1.25005C5.627 1.25006 6.02476 1.57079 6.1212 2.01972L6.89717 5.63161L8 5.63161V7.57889L7.31641 7.57889L8.88529 14.8815H15.1864C17.0211 14.8815 18.2289 14.0987 19.0331 12.7427C19.7706 11.4992 20.1842 9.73599 20.2779 7.57886L19.0331 7.57886V5.63158L21.2738 5.63158C21.5327 5.63158 21.781 5.73416 21.9641 5.91676C22.1472 6.09936 22.25 6.34703 22.25 6.60526C22.25 9.35783 21.816 11.8738 20.7126 13.7342C19.5679 15.6644 17.7315 16.829 15.1855 16.829H8.73354C7.94873 16.829 7.31252 17.4652 7.31252 18.25H17C18.2426 18.25 19.25 19.2574 19.25 20.5C19.25 21.7426 18.2426 22.75 17 22.75C15.7574 22.75 14.75 21.7426 14.75 20.5C14.75 20.3974 14.7569 20.2964 14.7702 20.1974H12.2298C12.2431 20.2964 12.25 20.3974 12.25 20.5C12.25 21.7426 11.2426 22.75 10 22.75C8.75736 22.75 7.75 21.7426 7.75 20.5C7.75 20.3974 7.75687 20.2964 7.77018 20.1974H5.16667V19.2237C5.16667 18.323 5.39521 17.1355 5.78821 16.5475C6.13332 16.0311 6.57501 15.6771 7.00683 15.436L4.37751 3.19741L1.75 3.19737L1.75003 1.25ZM10 19.75C9.58579 19.75 9.25 20.0858 9.25 20.5C9.25 20.9142 9.58579 21.25 10 21.25C10.4142 21.25 10.75 20.9142 10.75 20.5C10.75 20.0858 10.4142 19.75 10 19.75ZM17 19.75C16.5858 19.75 16.25 20.0858 16.25 20.5C16.25 20.9142 16.5858 21.25 17 21.25C17.4142 21.25 17.75 20.9142 17.75 20.5C17.75 20.0858 17.4142 19.75 17 19.75Z',
  d14: 'M13.5001 11.4141L17.2072 7.70696L15.793 6.29274L14.5001 7.58564V1.99985H12.5001L12.5001 7.58564L11.2072 6.29274L9.79297 7.70696L13.5001 11.4141Z',
} as const;

export const IconShoppingCartCheckIn01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-in-01-stroke-rounded IconShoppingCartCheckIn01StrokeRounded"
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

export const IconShoppingCartCheckIn01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-in-01-duotone-rounded IconShoppingCartCheckIn01DuotoneRounded"
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

export const IconShoppingCartCheckIn01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-in-01-twotone-rounded IconShoppingCartCheckIn01TwotoneRounded"
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

export const IconShoppingCartCheckIn01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-in-01-solid-rounded IconShoppingCartCheckIn01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconShoppingCartCheckIn01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-in-01-bulk-rounded IconShoppingCartCheckIn01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconShoppingCartCheckIn01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-in-01-stroke-sharp IconShoppingCartCheckIn01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartCheckIn01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-check-in-01-solid-sharp IconShoppingCartCheckIn01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingCartCheckIn01: TheIconSelfPack = {
  name: 'ShoppingCartCheckIn01',
  StrokeRounded: IconShoppingCartCheckIn01StrokeRounded,
  DuotoneRounded: IconShoppingCartCheckIn01DuotoneRounded,
  TwotoneRounded: IconShoppingCartCheckIn01TwotoneRounded,
  SolidRounded: IconShoppingCartCheckIn01SolidRounded,
  BulkRounded: IconShoppingCartCheckIn01BulkRounded,
  StrokeSharp: IconShoppingCartCheckIn01StrokeSharp,
  SolidSharp: IconShoppingCartCheckIn01SolidSharp,
};