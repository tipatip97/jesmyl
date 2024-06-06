import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7205 10.6235 21.621 10.747 21.4816 10.8132C20.9033 11.0876 20.4982 11.6081 20.3919 12.2134L19.7993 15.5878C19.5386 17.0725 19.4495 19.1943 18.1484 20.2402C17.1938 21 15.8184 21 13.0675 21H10.9325C8.18162 21 6.8062 21 5.8516 20.2402C4.55052 19.1942 4.46138 17.0725 4.20066 15.5878L3.60807 12.2134C3.50177 11.6081 3.09673 11.0876 2.51841 10.8132C2.37896 10.747 2.27952 10.6235 2.24894 10.4784C2.07874 9.67075 1.6264 8.5469 2.63812 8.10084C2.86684 8 3.17922 8 3.80397 8H7.5',
  d2: 'M14 12L10 12',
  d3: 'M6.5 11L10 3M15 3L17.5 8',
  d4: 'M19.7993 15.5878L20.3919 12.2134C20.4982 11.6081 20.9033 11.0876 21.4816 10.8132C21.621 10.747 21.7205 10.6235 21.7511 10.4784C21.9213 9.67075 22.3736 8.5469 21.3619 8.10084C21.1332 8 20.8208 8 20.196 8H11.5H7.5H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H13.0675C15.8184 21 17.1938 21 18.1484 20.2402C19.4495 19.1943 19.5386 17.0725 19.7993 15.5878Z',
  d5: 'M6.5 11L10 3',
  d6: 'M15 3L17.5 8',
  d7: 'M10.4011 2.20885C10.9071 2.43022 11.1378 3.01985 10.9164 3.52583L9.2325 7.37476L16.0071 7.37476L14.1058 3.57222C13.8588 3.07824 14.059 2.47757 14.553 2.23058C15.047 1.98359 15.6477 2.18381 15.8946 2.67779L18.2431 7.37476H20.2198H20.2199H20.2199C20.5119 7.37475 20.768 7.37474 20.9785 7.3891C21.1985 7.40411 21.434 7.43773 21.6644 7.53934C22.0522 7.71029 22.3488 7.97213 22.5339 8.3164C22.7121 8.64756 22.7549 8.99504 22.7496 9.29231C22.7442 9.58763 22.6901 9.87639 22.6362 10.1174C22.6033 10.2644 22.4849 10.7578 22.4849 10.7578C22.4038 11.1427 22.144 11.4538 21.8031 11.6156C21.4336 11.7909 21.1928 12.1136 21.1306 12.4679L20.431 16.5304C20.3464 17.1055 20.2472 17.7796 20.0904 18.3899C19.858 19.2948 19.4564 20.2758 18.6183 20.9495L18.6154 20.9518C17.9859 21.4529 17.2478 21.6713 16.3692 21.7746C15.5183 21.8748 14.4502 21.8748 13.1152 21.8748H13.1152H13.1152H10.8848H10.8848H10.8848C9.5498 21.8748 8.4817 21.8748 7.63078 21.7746C6.75215 21.6713 6.01409 21.4529 5.38455 20.9518L5.38167 20.9495C4.54362 20.2758 4.14201 19.2948 3.90958 18.3899C3.75283 17.7796 3.65361 17.1055 3.56896 16.5304L2.86937 12.4679C2.80715 12.1136 2.56639 11.7909 2.19688 11.6156C1.85601 11.4538 1.59618 11.1427 1.51506 10.7578C1.51506 10.7578 1.39665 10.2644 1.36376 10.1174C1.30986 9.87639 1.25576 9.58763 1.25043 9.29231C1.24507 8.99504 1.28792 8.64756 1.46605 8.3164C1.65124 7.97213 1.94781 7.71029 2.33555 7.53934C2.56603 7.43773 2.80147 7.40411 3.02149 7.3891C3.23204 7.37474 3.48812 7.37475 3.7801 7.37476H3.78013H3.78016L7.04947 7.37476L9.0841 2.72419C9.30546 2.21821 9.89509 1.98749 10.4011 2.20885ZM10 11.3748C9.58579 11.3748 9.25 11.7105 9.25 12.1248C9.25 12.539 9.58579 12.8748 10 12.8748L14 12.8748C14.4142 12.8748 14.75 12.539 14.75 12.1248C14.75 11.7105 14.4142 11.3748 14 11.3748L10 11.3748Z',
  d8: 'M20.2199 7.37476C20.5119 7.37475 20.7679 7.37474 20.9785 7.3891C21.1985 7.40411 21.434 7.43772 21.6644 7.53934C22.0522 7.71029 22.3488 7.97213 22.5339 8.3164C22.7121 8.64756 22.7549 8.99504 22.7496 9.29231C22.7442 9.58763 22.6901 9.87639 22.6362 10.1174C22.6033 10.2644 22.4849 10.7578 22.4849 10.7578C22.4038 11.1427 22.144 11.4538 21.8031 11.6156C21.4336 11.7909 21.1928 12.1136 21.1306 12.4679L20.431 16.5304C20.3464 17.1055 20.2472 17.7796 20.0904 18.3899C19.858 19.2948 19.4564 20.2758 18.6183 20.9495L18.6154 20.9518C17.9859 21.4529 17.2478 21.6713 16.3692 21.7746C15.5183 21.8748 14.4502 21.8748 13.1152 21.8748H10.8848C9.54983 21.8748 8.48171 21.8748 7.63078 21.7746C6.75215 21.6713 6.01409 21.4529 5.38455 20.9518L5.38167 20.9495C4.54362 20.2758 4.14201 19.2948 3.90958 18.3899C3.75283 17.7796 3.65361 17.1055 3.56896 16.5304L2.86937 12.4679C2.80715 12.1136 2.56639 11.7909 2.19688 11.6156C1.85601 11.4538 1.59618 11.1427 1.51506 10.7578C1.51506 10.7578 1.39665 10.2644 1.36376 10.1174C1.30986 9.87639 1.25576 9.58763 1.25043 9.29231C1.24507 8.99504 1.28792 8.64756 1.46605 8.3164C1.65124 7.97213 1.94781 7.71029 2.33555 7.53934C2.56603 7.43772 2.80147 7.40411 3.02149 7.3891C3.23205 7.37474 3.48813 7.37475 3.78013 7.37476H3.78016H20.2198H20.2199Z',
  d9: 'M10.4011 2.20885C10.9071 2.43022 11.1378 3.01985 10.9164 3.52583L7.41641 11.5258C7.19504 12.0318 6.60541 12.2625 6.09943 12.0412C5.59345 11.8198 5.36273 11.2302 5.5841 10.7242L9.0841 2.72419C9.30546 2.21821 9.89509 1.98749 10.4011 2.20885Z',
  d10: 'M9.25 12.1248C9.25 11.7105 9.58579 11.3748 10 11.3748L14 11.3748C14.4142 11.3748 14.75 11.7105 14.75 12.1248C14.75 12.539 14.4142 12.8748 14 12.8748L10 12.8748C9.58579 12.8748 9.25 12.539 9.25 12.1248Z',
  d11: 'M15.8946 2.67776C15.6477 2.18378 15.047 1.98356 14.553 2.23055C14.059 2.47754 13.8588 3.07821 14.1058 3.57219L16.0072 7.37498H18.2433L15.8946 2.67776Z',
  d12: 'M14.5 12H9.5',
  d13: 'M11.0307 8H21.8971C21.9523 8 21.9971 8.04477 21.9971 8.1V11.0093L20.4584 11.4903L18.5179 20.9202C18.5084 20.9666 18.4675 21 18.42 21H5.61972C5.57245 21 5.53164 20.9669 5.52188 20.9207L3.53549 11.515L2.08329 10.9969L2.00004 8.10288C1.99842 8.04654 2.04365 8 2.1 8H7.68303',
  d14: 'M22.0001 7.25H18.3955L15.8955 2.25L14.1067 3.14443L16.1595 7.25H9.10079L10.9173 3.09803L9.08496 2.29639L6.91776 7.25H1.99902C1.58481 7.25 1.24902 7.58579 1.24902 8V11.5407L2.85482 12.0756L4.76617 21.1545C4.83924 21.5016 5.14542 21.75 5.50008 21.75H18.499C18.8537 21.75 19.1598 21.5016 19.2329 21.1546L21.1453 12.0755L22.7501 11.5406V8C22.7501 7.58579 22.4143 7.25 22.0001 7.25ZM14.499 11.25H9.49902V12.75H14.499V11.25Z',
};

export const IconShoppingBasket03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-03-stroke-rounded IconShoppingBasket03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShoppingBasket03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-03-duotone-rounded IconShoppingBasket03DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-03-twotone-rounded IconShoppingBasket03TwotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-03-solid-rounded IconShoppingBasket03SolidRounded"
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

export const IconShoppingBasket03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-03-bulk-rounded IconShoppingBasket03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-03-stroke-sharp IconShoppingBasket03StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
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

export const IconShoppingBasket03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-03-solid-sharp IconShoppingBasket03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasket03: TheIconSelfPack = {
  name: 'ShoppingBasket03',
  StrokeRounded: IconShoppingBasket03StrokeRounded,
  DuotoneRounded: IconShoppingBasket03DuotoneRounded,
  TwotoneRounded: IconShoppingBasket03TwotoneRounded,
  SolidRounded: IconShoppingBasket03SolidRounded,
  BulkRounded: IconShoppingBasket03BulkRounded,
  StrokeSharp: IconShoppingBasket03StrokeSharp,
  SolidSharp: IconShoppingBasket03SolidSharp,
};