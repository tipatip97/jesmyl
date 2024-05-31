import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.164 6.66386 20.9059 6.56796 20.5 6.52819M6 6.5H7.5',
  d2: 'M11.015 2.38661C12.0876 1.74692 13.0238 2.00471 13.5863 2.41534C13.8169 2.58371 13.9322 2.66789 14 2.66789C14.0678 2.66789 14.1831 2.58371 14.4137 2.41534C14.9762 2.00471 15.9124 1.74692 16.985 2.38661C18.3928 3.22614 18.7113 5.99578 15.4642 8.33242C14.8457 8.77747 14.5365 9 14 9C13.4635 9 13.1543 8.77747 12.5358 8.33242C9.28869 5.99578 9.60723 3.22614 11.015 2.38661Z',
  d3: 'M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5',
  d4: 'M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5',
  d5: 'M10.7065 6.5H6L8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H17.2935C16.8881 7.11284 16.292 7.7367 15.4642 8.33242C14.8457 8.77747 14.5365 9 14 9C13.4635 9 13.1543 8.77747 12.5358 8.33242C11.708 7.7367 11.1119 7.11284 10.7065 6.5Z',
  d6: 'M1.5 2C1.5 1.44772 1.94772 1 2.5 1L3.43845 1C4.81505 1 6.015 1.93689 6.34887 3.27239L6.35349 3.29084L6.8173 5.5L7.5 5.5C8.05228 5.5 8.5 5.94772 8.5 6.5C8.5 7.05228 8.05228 7.5 7.5 7.5H7.23721L8.81185 15H8.88L15.2632 15C16.2838 15 17.015 14.8393 17.5562 14.5882C18.0861 14.3423 18.4837 13.9869 18.8096 13.5112C19.5068 12.4937 19.8556 10.9832 20.2807 8.87172C20.4056 8.25109 20.4778 7.88216 20.4961 7.61683C20.5019 7.53287 20.4912 7.53185 20.4155 7.52468L20.4025 7.52342C19.8528 7.46956 19.4509 6.98031 19.5048 6.43066C19.5586 5.88101 20.0479 5.47909 20.5975 5.53296C21.093 5.58151 21.7167 5.72333 22.141 6.30719C22.4858 6.78159 22.5219 7.31012 22.4914 7.75414C22.463 8.16595 22.3624 8.66555 22.253 9.2085L22.253 9.20852L22.2414 9.26643C21.8387 11.2668 21.4324 13.2217 20.4595 14.6417C19.9504 15.3847 19.2842 15.9911 18.3981 16.4023C17.5234 16.8083 16.4865 17 15.2632 17L8.88 17H8.46857C7.86982 17 7.31751 17.3988 7.09895 18L10.5 18H17.5C18.7426 18 19.75 19.0074 19.75 20.25C19.75 21.4926 18.7426 22.5 17.5 22.5C16.2574 22.5 15.25 21.4926 15.25 20.25C15.25 20.1655 15.2547 20.0821 15.2637 20H12.7363C12.7453 20.0821 12.75 20.1655 12.75 20.25C12.75 21.4926 11.7426 22.5 10.5 22.5C9.25736 22.5 8.25 21.4926 8.25 20.25C8.25 20.1655 8.25466 20.0821 8.26373 20H6.41143C5.59384 20 5 19.3215 5 18.5714C5 17.2195 5.74057 16.0121 6.85392 15.4081L5.04829 6.80789C5.02706 6.74219 5.01243 6.67352 5.0052 6.60265L4.40464 3.74218C4.28811 3.30517 3.89205 3 3.43845 3L2.5 3C1.94772 3 1.5 2.55228 1.5 2ZM13.9996 1.78934C13.2268 1.23972 11.9798 0.938062 10.6305 1.74274C9.62413 2.34288 9.10249 3.56706 9.28649 4.90087C9.47188 6.24475 10.3543 7.68711 12.0974 8.94146L12.1714 8.99483C12.7253 9.39454 13.2183 9.75028 13.9996 9.75028C14.7809 9.75028 15.2739 9.39454 15.8279 8.99484L15.9019 8.94146C17.645 7.68711 18.5274 6.24475 18.7128 4.90087C18.8968 3.56706 18.3751 2.34288 17.3688 1.74274C16.0195 0.938062 14.7725 1.23972 13.9996 1.78934ZM10.5 19.5C10.0858 19.5 9.75 19.8358 9.75 20.25C9.75 20.6642 10.0858 21 10.5 21C10.9142 21 11.25 20.6642 11.25 20.25C11.25 19.8358 10.9142 19.5 10.5 19.5ZM16.75 20.25C16.75 19.8358 17.0858 19.5 17.5 19.5C17.9142 19.5 18.25 19.8358 18.25 20.25C18.25 20.6642 17.9142 21 17.5 21C17.0858 21 16.75 20.6642 16.75 20.25Z',
  d7: 'M1.5 2C1.5 1.44772 1.94772 1 2.5 1L3.43845 1C4.81505 1 6.015 1.93689 6.34887 3.27239L6.35349 3.29084L6.8173 5.5L7.5 5.5C8.05228 5.5 8.5 5.94772 8.5 6.5C8.5 7.05228 8.05228 7.5 7.5 7.5H7.23721L8.81185 15H8.88L15.2632 15C16.2838 15 17.015 14.8393 17.5562 14.5882C18.0861 14.3423 18.4837 13.9869 18.8096 13.5112C19.5068 12.4937 19.8556 10.9832 20.2807 8.87172C20.4056 8.25109 20.4778 7.88216 20.4961 7.61683C20.5019 7.53287 20.4912 7.53185 20.4155 7.52468L20.4025 7.52342C19.8528 7.46956 19.4509 6.98031 19.5048 6.43066C19.5586 5.88101 20.0479 5.47909 20.5975 5.53296C21.093 5.58151 21.7167 5.72333 22.141 6.30719C22.4858 6.78159 22.5219 7.31012 22.4914 7.75414C22.463 8.16595 22.3624 8.66555 22.253 9.2085L22.253 9.20852L22.2414 9.26643C21.8387 11.2668 21.4324 13.2217 20.4595 14.6417C19.9504 15.3847 19.2842 15.9911 18.3981 16.4023C17.5234 16.8083 16.4865 17 15.2632 17L8.88 17H8.46857C7.86982 17 7.31751 17.3988 7.09895 18L10.5 18H17.5C18.7426 18 19.75 19.0074 19.75 20.25C19.75 21.4926 18.7426 22.5 17.5 22.5C16.2574 22.5 15.25 21.4926 15.25 20.25C15.25 20.1655 15.2547 20.0821 15.2637 20H12.7363C12.7453 20.0821 12.75 20.1655 12.75 20.25C12.75 21.4926 11.7426 22.5 10.5 22.5C9.25736 22.5 8.25 21.4926 8.25 20.25C8.25 20.1655 8.25466 20.0821 8.26373 20H6.41143C5.59384 20 5 19.3215 5 18.5714C5 17.2195 5.74057 16.0121 6.85392 15.4081L5.04829 6.80789C5.02706 6.74219 5.01243 6.67352 5.0052 6.60265L4.40464 3.74218C4.28811 3.30517 3.89205 3 3.43845 3L2.5 3C1.94772 3 1.5 2.55228 1.5 2ZM10.5 19.5C10.0858 19.5 9.75 19.8358 9.75 20.25C9.75 20.6642 10.0858 21 10.5 21C10.9142 21 11.25 20.6642 11.25 20.25C11.25 19.8358 10.9142 19.5 10.5 19.5ZM16.75 20.25C16.75 19.8358 17.0858 19.5 17.5 19.5C17.9142 19.5 18.25 19.8358 18.25 20.25C18.25 20.6642 17.9142 21 17.5 21C17.0858 21 16.75 20.6642 16.75 20.25Z',
  d8: 'M10.6305 1.74274C11.9798 0.938062 13.2268 1.23972 13.9996 1.78934C14.7725 1.23972 16.0195 0.938062 17.3688 1.74274C18.3751 2.34288 18.8968 3.56706 18.7128 4.90087C18.5274 6.24475 17.645 7.68711 15.9019 8.94146L15.8279 8.99484C15.2739 9.39454 14.7809 9.75028 13.9996 9.75028C13.2183 9.75028 12.7253 9.39454 12.1714 8.99483L12.0974 8.94146C10.3543 7.68711 9.47188 6.24475 9.28649 4.90087C9.10249 3.56706 9.62413 2.34288 10.6305 1.74274Z',
  d9: 'M8.50195 16L5.50195 2.00006L2.00195 2',
  d10: 'M10.502 22C11.3304 22 12.002 21.3284 12.002 20.5C12.002 19.6716 11.3304 19 10.502 19C9.67353 19 9.00195 19.6716 9.00195 20.5C9.00195 21.3284 9.67353 22 10.502 22Z',
  d11: 'M17.502 22C18.3304 22 19.002 21.3284 19.002 20.5C19.002 19.6716 18.3304 19 17.502 19C16.6735 19 16.002 19.6716 16.002 20.5C16.002 21.3284 16.6735 22 17.502 22Z',
  d12: 'M17.2451 2.2896C15.6484 1.45704 14.502 2.68433 14.502 2.68433C14.502 2.68433 13.3555 1.45704 11.7588 2.2896C9.82492 3.29799 9.68605 7.24689 14.502 9C19.3179 7.24689 19.179 3.29799 17.2451 2.2896Z',
  d13: 'M17.3099 18.9996H6.50586C6.50586 16.5707 8.57819 15.9519 9.58631 16.0105H15.5226C20.7196 16.138 21.9984 11.162 21.9984 6.52003C21.9982 6.51469 21.9938 6.51074 21.9885 6.51074L19.9819 6.52003M6.5106 6.51074L9.00638 6.52003',
  d14: 'M1.75003 1.25L5.1667 1.25005C5.627 1.25006 6.02476 1.57079 6.1212 2.01972L6.89717 5.63161L8 5.63161V7.57889L7.31641 7.57889L8.88529 14.8815H15.1864C17.0211 14.8815 18.2289 14.0987 19.0331 12.7427C19.7706 11.4992 20.1842 9.73599 20.2779 7.57886L19.0331 7.57886V5.63158L21.2738 5.63158C21.5327 5.63158 21.781 5.73416 21.9641 5.91676C22.1472 6.09936 22.25 6.34703 22.25 6.60526C22.25 9.35783 21.816 11.8738 20.7126 13.7342C19.5679 15.6644 17.7315 16.829 15.1855 16.829H8.73354C7.94873 16.829 7.31252 17.4652 7.31252 18.25H17C18.2426 18.25 19.25 19.2574 19.25 20.5C19.25 21.7426 18.2426 22.75 17 22.75C15.7574 22.75 14.75 21.7426 14.75 20.5C14.75 20.3974 14.7569 20.2964 14.7702 20.1974H12.2298C12.2431 20.2964 12.25 20.3974 12.25 20.5C12.25 21.7426 11.2426 22.75 10 22.75C8.75736 22.75 7.75 21.7426 7.75 20.5C7.75 20.3974 7.75687 20.2964 7.77018 20.1974H5.16667V19.2237C5.16667 18.323 5.39521 17.1355 5.78821 16.5475C6.13332 16.0311 6.57501 15.6771 7.00683 15.436L4.37751 3.19741L1.75 3.19737L1.75003 1.25ZM10 19.75C9.58579 19.75 9.25 20.0858 9.25 20.5C9.25 20.9142 9.58579 21.25 10 21.25C10.4142 21.25 10.75 20.9142 10.75 20.5C10.75 20.0858 10.4142 19.75 10 19.75ZM17 19.75C16.5858 19.75 16.25 20.0858 16.25 20.5C16.25 20.9142 16.5858 21.25 17 21.25C17.4142 21.25 17.75 20.9142 17.75 20.5C17.75 20.0858 17.4142 19.75 17 19.75Z',
  d15: 'M13.085 1.48252C13.2702 1.55972 13.4323 1.64803 13.5692 1.73439C13.7061 1.64803 13.8682 1.55973 14.0533 1.48252C14.7061 1.21033 15.629 1.08742 16.6591 1.62457C17.9914 2.31925 18.591 3.94522 18.2005 5.54352C17.8013 7.17771 16.4065 8.7653 13.8258 9.70475L13.5692 9.79814L13.3127 9.70475C10.7319 8.7653 9.33714 7.17771 8.93788 5.54353C8.54737 3.94522 9.14701 2.31925 10.4793 1.62457C11.5094 1.08742 12.4323 1.21033 13.085 1.48252Z',
} as const;

export const IconShoppingCartFavorite01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-01-stroke-rounded IconShoppingCartFavorite01StrokeRounded"
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

export const IconShoppingCartFavorite01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-01-duotone-rounded IconShoppingCartFavorite01DuotoneRounded"
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

export const IconShoppingCartFavorite01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-01-twotone-rounded IconShoppingCartFavorite01TwotoneRounded"
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

export const IconShoppingCartFavorite01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-01-solid-rounded IconShoppingCartFavorite01SolidRounded"
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

export const IconShoppingCartFavorite01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-01-bulk-rounded IconShoppingCartFavorite01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartFavorite01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-01-stroke-sharp IconShoppingCartFavorite01StrokeSharp"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartFavorite01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-favorite-01-solid-sharp IconShoppingCartFavorite01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingCartFavorite01: TheIconSelfPack = {
  name: 'ShoppingCartFavorite01',
  StrokeRounded: IconShoppingCartFavorite01StrokeRounded,
  DuotoneRounded: IconShoppingCartFavorite01DuotoneRounded,
  TwotoneRounded: IconShoppingCartFavorite01TwotoneRounded,
  SolidRounded: IconShoppingCartFavorite01SolidRounded,
  BulkRounded: IconShoppingCartFavorite01BulkRounded,
  StrokeSharp: IconShoppingCartFavorite01StrokeSharp,
  SolidSharp: IconShoppingCartFavorite01SolidSharp,
};