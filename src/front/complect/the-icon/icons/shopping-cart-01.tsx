import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6',
  d2: 'M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5',
  d3: 'M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5',
  d4: 'M15.2632 16H8L6 6.5H19.3941C20.4947 6.5 21.045 6.5 21.3321 6.89507C21.6192 7.29013 21.4998 7.88311 21.261 9.06908C20.4333 13.1808 19.7508 16 15.2632 16Z',
  d5: 'M6 6.5H19.3941C20.4947 6.5 21.045 6.5 21.3321 6.89507',
  d6: 'M17.5 19H6.41143C6.1842 19 6 18.8081 6 18.5714C6 17.3182 6.86072 16.228 8 16',
  d7: 'M10.5 19.752C10.0858 19.752 9.75 20.0877 9.75 20.502C9.75 20.9162 10.0858 21.252 10.5 21.252C10.9142 21.252 11.25 20.9162 11.25 20.502C11.25 20.0877 10.9142 19.752 10.5 19.752ZM8.25 20.502C8.25 19.2593 9.25736 18.252 10.5 18.252C11.7426 18.252 12.75 19.2593 12.75 20.502C12.75 21.7446 11.7426 22.752 10.5 22.752C9.25736 22.752 8.25 21.7446 8.25 20.502Z',
  d8: 'M17.5 19.752C17.0858 19.752 16.75 20.0877 16.75 20.502C16.75 20.9162 17.0858 21.252 17.5 21.252C17.9142 21.252 18.25 20.9162 18.25 20.502C18.25 20.0877 17.9142 19.752 17.5 19.752ZM15.25 20.502C15.25 19.2593 16.2574 18.252 17.5 18.252C18.7426 18.252 19.75 19.2593 19.75 20.502C19.75 21.7446 18.7426 22.752 17.5 22.752C16.2574 22.752 15.25 21.7446 15.25 20.502Z',
  d9: 'M2.5 1.24805C1.94772 1.24805 1.5 1.69576 1.5 2.24805C1.5 2.80033 1.94772 3.24805 2.5 3.24805H3.43845C3.89205 3.24805 4.28811 3.55321 4.40464 3.99023L6.85392 15.6561C5.74057 16.2602 5 17.4675 5 18.8195C5 19.5696 5.59384 20.248 6.41143 20.248H8.88L10.44 19.248L12 20.248H16.7936C16.6287 19.8487 17.1938 18.7518 17.4984 18.2506L17.5 18.248H7.09895C7.31269 17.6601 7.84562 17.2657 8.42903 17.2486H15.2632C16.4865 17.2486 17.5234 17.0569 18.3981 16.651C19.2842 16.2398 19.9504 15.6334 20.4595 14.8903C21.4324 13.4703 21.8387 11.5154 22.2414 9.51506L22.253 9.45713C22.3624 8.91418 22.463 8.41457 22.4914 8.00277C22.5219 7.55875 22.4858 7.03022 22.141 6.55582C21.8604 6.16972 21.4829 5.96861 21.1007 5.86779C20.758 5.77738 20.3759 5.75871 20.0184 5.75213H6.81816L6.35349 3.53889L6.34887 3.52044C6.015 2.18494 4.81505 1.24805 3.43845 1.24805H2.5ZM8.81214 15.248H8.88029C8.8918 15.248 8.90327 15.2482 8.91469 15.2486H15.2635C16.284 15.2486 17.0153 15.088 17.5565 14.8368C18.0863 14.5909 18.484 14.2355 18.8099 13.7598C19.5071 12.7423 19.8559 11.2318 20.281 9.12033C20.4059 8.4997 20.4781 8.13077 20.4964 7.86544C20.5023 7.77945 20.4832 7.77799 20.412 7.77255L20.3842 7.77028C20.2784 7.76065 20.148 7.75483 19.9819 7.75177H7.23828L8.81214 15.248Z',
  d10: 'M10.498 19.752C10.0838 19.752 9.74805 20.0877 9.74805 20.502C9.74805 20.9162 10.0838 21.252 10.498 21.252C10.9123 21.252 11.248 20.9162 11.248 20.502C11.248 20.0877 10.9123 19.752 10.498 19.752ZM8.24805 20.502C8.24805 19.2593 9.25541 18.252 10.498 18.252C11.7407 18.252 12.748 19.2593 12.748 20.502C12.748 21.7446 11.7407 22.752 10.498 22.752C9.25541 22.752 8.24805 21.7446 8.24805 20.502Z',
  d11: 'M17.498 19.752C17.0838 19.752 16.748 20.0877 16.748 20.502C16.748 20.9162 17.0838 21.252 17.498 21.252C17.9123 21.252 18.248 20.9162 18.248 20.502C18.248 20.0877 17.9123 19.752 17.498 19.752ZM15.248 20.502C15.248 19.2593 16.2554 18.252 17.498 18.252C18.7407 18.252 19.748 19.2593 19.748 20.502C19.748 21.7446 18.7407 22.752 17.498 22.752C16.2554 22.752 15.248 21.7446 15.248 20.502Z',
  d12: 'M2.49805 1.24805C1.94576 1.24805 1.49805 1.69576 1.49805 2.24805C1.49805 2.80033 1.94576 3.24805 2.49805 3.24805H3.43649C3.89009 3.24805 4.28615 3.55321 4.40269 3.99023L6.85197 15.6561C5.73862 16.2602 4.99805 17.4675 4.99805 18.8195C4.99805 19.5696 5.59188 20.248 6.40948 20.248H8.87805L10.438 19.248L11.998 20.248H16.7916C16.6268 19.8487 17.1918 18.7518 17.4965 18.2506L17.498 18.248H7.09699C7.31074 17.6601 7.84367 17.2657 8.42707 17.2486H15.2613C16.4845 17.2486 17.5214 17.0569 18.3961 16.651C19.2823 16.2398 19.9484 15.6334 20.4575 14.8903C21.4304 13.4703 21.8367 11.5154 22.2394 9.51506L22.2511 9.45713C22.3604 8.91418 22.4611 8.41457 22.4894 8.00277C22.52 7.55875 22.4838 7.03022 22.1391 6.55582C21.8585 6.16972 21.481 5.96861 21.0988 5.86779C20.7561 5.77738 20.374 5.75871 20.0165 5.75213H6.81621L6.35153 3.53889L6.34692 3.52044C6.01305 2.18494 4.8131 1.24805 3.43649 1.24805H2.49805ZM8.81018 15.248H8.87833C8.88985 15.248 8.90132 15.2482 8.91274 15.2486H15.2616C16.2821 15.2486 17.0133 15.088 17.5545 14.8368C18.0844 14.5909 18.482 14.2355 18.8079 13.7598C19.5051 12.7423 19.854 11.2318 20.279 9.12033C20.404 8.4997 20.4762 8.13077 20.4944 7.86544C20.5003 7.77945 20.4813 7.77799 20.41 7.77255L20.3823 7.77028C20.2764 7.76065 20.146 7.75483 19.9799 7.75177H7.23633L8.81018 15.248Z',
  d13: 'M8.50239 16L5.50039 2.00006L1.99805 2',
  d14: 'M10.5039 22C11.3329 22 12.0049 21.3284 12.0049 20.5C12.0049 19.6716 11.3329 19 10.5039 19C9.67495 19 9.00293 19.6716 9.00293 20.5C9.00293 21.3284 9.67495 22 10.5039 22Z',
  d15: 'M17.5088 22C18.3378 22 19.0098 21.3284 19.0098 20.5C19.0098 19.6716 18.3378 19 17.5088 19C16.6798 19 16.0078 19.6716 16.0078 20.5C16.0078 21.3284 16.6798 22 17.5088 22Z',
  d16: 'M6.51451 6.50781H21.9924C21.9977 6.50781 22.0021 6.51177 22.0024 6.5171C22.0024 11.1591 20.7235 16.1351 15.5265 16.0076H9.59022C8.5821 15.949 6.50977 16.5678 6.50977 18.9967H17.3138',
  d17: 'M5.1667 1.25005L1.75003 1.25L1.75 3.19737L4.37751 3.19741L7.00683 15.436C6.57501 15.6771 6.13332 16.0311 5.78821 16.5475C5.39521 17.1355 5.16667 18.323 5.16667 19.2237V20.1974H7.77018C7.75687 20.2964 7.75 20.3974 7.75 20.5C7.75 21.7426 8.75736 22.75 10 22.75C11.2426 22.75 12.25 21.7426 12.25 20.5C12.25 20.3974 12.2431 20.2964 12.2298 20.1974H14.7702C14.7569 20.2964 14.75 20.3974 14.75 20.5C14.75 21.7426 15.7574 22.75 17 22.75C18.2426 22.75 19.25 21.7426 19.25 20.5C19.25 19.2574 18.2426 18.25 17 18.25C16.9595 18.25 16.9193 18.2511 16.8793 18.2532L16.881 18.25H7.31252C7.31252 17.4652 7.94873 16.829 8.73354 16.829H15.1855C17.7315 16.829 19.5679 15.6644 20.7126 13.7342C21.816 11.8738 22.25 9.35783 22.25 6.60526C22.25 6.34703 22.1472 6.09936 21.9641 5.91676C21.781 5.73416 21.5327 5.63158 21.2738 5.63158L6.89717 5.63161L6.1212 2.01972C6.02476 1.57079 5.627 1.25006 5.1667 1.25005ZM9.25 20.5C9.25 20.0858 9.58579 19.75 10 19.75C10.4142 19.75 10.75 20.0858 10.75 20.5C10.75 20.9142 10.4142 21.25 10 21.25C9.58579 21.25 9.25 20.9142 9.25 20.5ZM16.25 20.5C16.25 20.0858 16.5858 19.75 17 19.75C17.4142 19.75 17.75 20.0858 17.75 20.5C17.75 20.9142 17.4142 21.25 17 21.25C16.5858 21.25 16.25 20.9142 16.25 20.5ZM15.1864 14.8815C17.0211 14.8815 18.2289 14.0987 19.0331 12.7427C19.7706 11.4992 20.1842 9.73599 20.2779 7.57886L7.31641 7.57889L8.88529 14.8815H15.1864Z',
} as const;

export const IconShoppingCart01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-01-stroke-rounded IconShoppingCart01StrokeRounded"
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

export const IconShoppingCart01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-01-duotone-rounded IconShoppingCart01DuotoneRounded"
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

export const IconShoppingCart01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-01-twotone-rounded IconShoppingCart01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
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

export const IconShoppingCart01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-01-solid-rounded IconShoppingCart01SolidRounded"
    >
      <path 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCart01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-01-bulk-rounded IconShoppingCart01BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconShoppingCart01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-01-stroke-sharp IconShoppingCart01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCart01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-01-solid-sharp IconShoppingCart01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingCart01: TheIconSelfPack = {
  name: 'ShoppingCart01',
  StrokeRounded: IconShoppingCart01StrokeRounded,
  DuotoneRounded: IconShoppingCart01DuotoneRounded,
  TwotoneRounded: IconShoppingCart01TwotoneRounded,
  SolidRounded: IconShoppingCart01SolidRounded,
  BulkRounded: IconShoppingCart01BulkRounded,
  StrokeSharp: IconShoppingCart01StrokeSharp,
  SolidSharp: IconShoppingCart01SolidSharp,
};