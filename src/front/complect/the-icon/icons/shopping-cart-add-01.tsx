import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8 16.0001H15.2632C19.7508 16.0001 20.4333 13.1809 21.261 9.06916C21.4998 7.8832 21.6192 7.29022 21.3321 6.89515C21.1034 6.58048 20.7077 6.51645 20 6.50342',
  d2: 'M9 6.5H17M13 10.5V2.5',
  d3: 'M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5',
  d4: 'M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5',
  d5: 'M15.2632 16H8L6 6.5H19.3941C20.4947 6.5 21.045 6.5 21.3321 6.89507C21.6192 7.29013 21.4998 7.88311 21.261 9.06908C20.4333 13.1808 19.7508 16 15.2632 16Z',
  d6: 'M8 16.0006H15.2632C19.7508 16.0006 20.4333 13.1814 21.261 9.06965C21.4998 7.88369 21.6192 7.29071 21.3321 6.89564C21.1034 6.58097 20.7077 6.51694 20 6.50391',
  d7: 'M8 15.9996H15.2632C19.7508 15.9996 20.4333 13.1804 21.261 9.06868C21.4998 7.88271 21.6192 7.28973 21.3321 6.89467C21.1034 6.57999 20.7077 6.51596 20 6.50293',
  d8: 'M1.5 2C1.5 1.44772 1.94772 1 2.5 1L3.43845 1C4.81505 1 6.015 1.93689 6.34887 3.27239L6.35349 3.29084L8.81185 15H8.88C8.89152 15 8.90299 15.0002 8.91441 15.0006L15.2632 15.0006C16.2838 15.0006 17.015 14.8399 17.5562 14.5888C18.0861 14.3429 18.4837 13.9875 18.8096 13.5118C19.5068 12.4943 19.8556 10.9837 20.2807 8.8723C20.4056 8.25167 20.4778 7.88274 20.4961 7.61741C20.502 7.53142 20.4829 7.52996 20.4117 7.52452L20.384 7.52225C20.2781 7.51262 20.1477 7.5068 19.9816 7.50374C19.4294 7.49357 18.99 7.03769 19.0002 6.4855C19.0103 5.93331 19.4662 5.49391 20.0184 5.50408C20.3759 5.51066 20.758 5.52934 21.1007 5.61974C21.4829 5.72056 21.8604 5.92167 22.141 6.30777C22.4858 6.78217 22.5219 7.31071 22.4914 7.75472C22.463 8.16653 22.3624 8.66613 22.253 9.20908L22.2414 9.26701C21.8387 11.2673 21.4324 13.2223 20.4595 14.6422C19.9504 15.3853 19.2842 15.9917 18.3981 16.4029C17.5234 16.8088 16.4865 17.0006 15.2632 17.0006L8.42903 17.0006C7.84562 17.0177 7.31269 17.4121 7.09895 18L17.5 18L17.4984 18.0026C17.4982 18.003 17.4979 18.0035 17.4976 18.0039C17.4984 18.0039 17.4992 18.0039 17.5 18.0039C18.7426 18.0039 19.75 19.0113 19.75 20.2539C19.75 21.4965 18.7426 22.5039 17.5 22.5039C16.2574 22.5039 15.25 21.4965 15.25 20.2539C15.25 20.1681 15.2548 20.0833 15.2642 20H15.264H12.7358C12.7452 20.0833 12.75 20.1681 12.75 20.2539C12.75 21.4965 11.7426 22.5039 10.5 22.5039C9.25736 22.5039 8.25 21.4965 8.25 20.2539C8.25 20.1681 8.25481 20.0833 8.26417 20H6.41143C5.59384 20 5 19.3215 5 18.5714C5 17.2195 5.74057 16.0121 6.85392 15.4081L4.40464 3.74218C4.28811 3.30517 3.89205 3 3.43845 3L2.5 3C1.94772 3 1.5 2.55228 1.5 2ZM14 2.5C14 1.94772 13.5523 1.5 13 1.5C12.4477 1.5 12 1.94772 12 2.5L12 5.5L9 5.5C8.44772 5.5 8 5.94772 8 6.5C8 7.05228 8.44772 7.5 9 7.5L12 7.5V10.5C12 11.0523 12.4477 11.5 13 11.5C13.5523 11.5 14 11.0523 14 10.5V7.5L17 7.5C17.5523 7.5 18 7.05228 18 6.5C18 5.94772 17.5523 5.5 17 5.5L14 5.5L14 2.5ZM9.75 20.2539C9.75 19.8397 10.0858 19.5039 10.5 19.5039C10.9142 19.5039 11.25 19.8397 11.25 20.2539C11.25 20.6681 10.9142 21.0039 10.5 21.0039C10.0858 21.0039 9.75 20.6681 9.75 20.2539ZM17.5 19.5039C17.0858 19.5039 16.75 19.8397 16.75 20.2539C16.75 20.6681 17.0858 21.0039 17.5 21.0039C17.9142 21.0039 18.25 20.6681 18.25 20.2539C18.25 19.8397 17.9142 19.5039 17.5 19.5039Z',
  d9: 'M1.5 2C1.5 1.44772 1.94772 1 2.5 1L3.43845 1C4.81505 1 6.015 1.93689 6.34887 3.27239L6.35349 3.29084L8.81185 15H8.88C8.89152 15 8.90299 15.0002 8.91441 15.0006L15.2632 15.0006C16.2838 15.0006 17.015 14.8399 17.5562 14.5888C18.0861 14.3429 18.4837 13.9875 18.8096 13.5118C19.5068 12.4943 19.8556 10.9837 20.2807 8.8723C20.4056 8.25167 20.4778 7.88274 20.4961 7.61741C20.502 7.53142 20.4829 7.52996 20.4117 7.52452L20.384 7.52225C20.2781 7.51262 20.1477 7.5068 19.9816 7.50374C19.4294 7.49357 18.99 7.03769 19.0002 6.4855C19.0103 5.93331 19.4662 5.49391 20.0184 5.50408C20.3759 5.51066 20.758 5.52934 21.1007 5.61974C21.4829 5.72056 21.8604 5.92167 22.141 6.30777C22.4858 6.78217 22.5219 7.31071 22.4914 7.75472C22.463 8.16653 22.3624 8.66613 22.253 9.20908L22.2414 9.26701C21.8387 11.2673 21.4324 13.2223 20.4595 14.6422C19.9504 15.3853 19.2842 15.9917 18.3981 16.4029C17.5234 16.8088 16.4865 17.0006 15.2632 17.0006L8.42903 17.0006C7.84562 17.0177 7.31269 17.4121 7.09895 18L17.5 18L17.4984 18.0026C17.4982 18.003 17.4979 18.0035 17.4976 18.0039C17.4984 18.0039 17.4992 18.0039 17.5 18.0039C18.7426 18.0039 19.75 19.0113 19.75 20.2539C19.75 21.4965 18.7426 22.5039 17.5 22.5039C16.2574 22.5039 15.25 21.4965 15.25 20.2539C15.25 20.1681 15.2548 20.0833 15.2642 20H15.264H12.7358C12.7452 20.0833 12.75 20.1681 12.75 20.2539C12.75 21.4965 11.7426 22.5039 10.5 22.5039C9.25736 22.5039 8.25 21.4965 8.25 20.2539C8.25 20.1681 8.25481 20.0833 8.26417 20H6.41143C5.59384 20 5 19.3215 5 18.5714C5 17.2195 5.74057 16.0121 6.85392 15.4081L4.40464 3.74218C4.28811 3.30517 3.89205 3 3.43845 3L2.5 3C1.94772 3 1.5 2.55228 1.5 2ZM9.75 20.2539C9.75 19.8397 10.0858 19.5039 10.5 19.5039C10.9142 19.5039 11.25 19.8397 11.25 20.2539C11.25 20.6681 10.9142 21.0039 10.5 21.0039C10.0858 21.0039 9.75 20.6681 9.75 20.2539ZM17.5 19.5039C17.0858 19.5039 16.75 19.8397 16.75 20.2539C16.75 20.6681 17.0858 21.0039 17.5 21.0039C17.9142 21.0039 18.25 20.6681 18.25 20.2539C18.25 19.8397 17.9142 19.5039 17.5 19.5039Z',
  d10: 'M13 1.5C13.5523 1.5 14 1.94772 14 2.5V5.5H17C17.5523 5.5 18 5.94772 18 6.5C18 7.05228 17.5523 7.5 17 7.5H14V10.5C14 11.0523 13.5523 11.5 13 11.5C12.4477 11.5 12 11.0523 12 10.5V7.5H9C8.44772 7.5 8 7.05228 8 6.5C8 5.94772 8.44772 5.5 9 5.5H12V2.5C12 1.94772 12.4477 1.5 13 1.5Z',
  d11: 'M8.50195 16L5.50195 2.00006L2.00195 2',
  d12: 'M10.502 22C11.3304 22 12.002 21.3284 12.002 20.5C12.002 19.6716 11.3304 19 10.502 19C9.67353 19 9.00195 19.6716 9.00195 20.5C9.00195 21.3284 9.67353 22 10.502 22Z',
  d13: 'M17.502 22C18.3304 22 19.002 21.3284 19.002 20.5C19.002 19.6716 18.3304 19 17.502 19C16.6735 19 16.002 19.6716 16.002 20.5C16.002 21.3284 16.6735 22 17.502 22Z',
  d14: 'M10.502 6.5H18.502M14.502 10.5V2.5',
  d15: 'M17.3099 18.9996H6.50586C6.50586 16.5707 8.57819 15.9519 9.58631 16.0105H15.5226C20.7196 16.138 21.9984 11.162 21.9984 6.52003C21.9982 6.51469 21.9938 6.51074 21.9885 6.51074H20.1715M6.5106 6.51074H8.97737M10.5027 6.52003L18.4652 6.51074',
  d16: 'M14.5 6.25V9.25H12.5V6.25H9.5V4.25H12.5V1.25H14.5V4.25H17.5V6.25H14.5Z',
  d17: 'M1.75003 1.25L5.1667 1.25005C5.627 1.25006 6.02476 1.57079 6.1212 2.01972L6.89717 5.63161L8 5.63161V7.57889L7.31641 7.57889L8.88529 14.8815H15.1864C17.0211 14.8815 18.2289 14.0987 19.0331 12.7427C19.7706 11.4992 20.1842 9.73599 20.2779 7.57886L19.0331 7.57886V5.63158L21.2738 5.63158C21.5327 5.63158 21.781 5.73416 21.9641 5.91676C22.1472 6.09936 22.25 6.34703 22.25 6.60526C22.25 9.35783 21.816 11.8738 20.7126 13.7342C19.5679 15.6644 17.7315 16.829 15.1855 16.829H8.73354C7.94873 16.829 7.31252 17.4652 7.31252 18.25H17C18.2426 18.25 19.25 19.2574 19.25 20.5C19.25 21.7426 18.2426 22.75 17 22.75C15.7574 22.75 14.75 21.7426 14.75 20.5C14.75 20.3974 14.7569 20.2964 14.7702 20.1974H12.2298C12.2431 20.2964 12.25 20.3974 12.25 20.5C12.25 21.7426 11.2426 22.75 10 22.75C8.75736 22.75 7.75 21.7426 7.75 20.5C7.75 20.3974 7.75687 20.2964 7.77018 20.1974H5.16667V19.2237C5.16667 18.323 5.39521 17.1355 5.78821 16.5475C6.13332 16.0311 6.57501 15.6771 7.00683 15.436L4.37751 3.19741L1.75 3.19737L1.75003 1.25ZM10 19.75C9.58579 19.75 9.25 20.0858 9.25 20.5C9.25 20.9142 9.58579 21.25 10 21.25C10.4142 21.25 10.75 20.9142 10.75 20.5C10.75 20.0858 10.4142 19.75 10 19.75ZM17 19.75C16.5858 19.75 16.25 20.0858 16.25 20.5C16.25 20.9142 16.5858 21.25 17 21.25C17.4142 21.25 17.75 20.9142 17.75 20.5C17.75 20.0858 17.4142 19.75 17 19.75Z',
};

export const IconShoppingCartAdd01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-add-01-stroke-rounded IconShoppingCartAdd01StrokeRounded"
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

export const IconShoppingCartAdd01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-add-01-duotone-rounded IconShoppingCartAdd01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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

export const IconShoppingCartAdd01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-add-01-twotone-rounded IconShoppingCartAdd01TwotoneRounded"
    >
      <path 
        d={d.d7} 
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

export const IconShoppingCartAdd01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-add-01-solid-rounded IconShoppingCartAdd01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartAdd01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-add-01-bulk-rounded IconShoppingCartAdd01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconShoppingCartAdd01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-add-01-stroke-sharp IconShoppingCartAdd01StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingCartAdd01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-cart-add-01-solid-sharp IconShoppingCartAdd01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingCartAdd01: TheIconSelfPack = {
  name: 'ShoppingCartAdd01',
  StrokeRounded: IconShoppingCartAdd01StrokeRounded,
  DuotoneRounded: IconShoppingCartAdd01DuotoneRounded,
  TwotoneRounded: IconShoppingCartAdd01TwotoneRounded,
  SolidRounded: IconShoppingCartAdd01SolidRounded,
  BulkRounded: IconShoppingCartAdd01BulkRounded,
  StrokeSharp: IconShoppingCartAdd01StrokeSharp,
  SolidSharp: IconShoppingCartAdd01SolidSharp,
};