import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L21.0524 11.5',
  d2: 'M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5',
  d3: 'M16.5 19.5C16.9915 20.0057 18.2998 22 19 22M21.5 19.5C21.0085 20.0057 19.7002 22 19 22M19 22V14',
  d4: 'M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z',
  d5: 'M12 3.25C9.79086 3.25 8 5.04086 8 7.25V7.75C8 8.30228 7.55228 8.75 7 8.75C6.44772 8.75 6 8.30228 6 7.75V7.25C6 3.93629 8.68629 1.25 12 1.25C15.3137 1.25 18 3.93629 18 7.25V7.75C18 8.30228 17.5523 8.75 17 8.75C16.4477 8.75 16 8.30228 16 7.75V7.25C16 5.04086 14.2091 3.25 12 3.25Z',
  d6: 'M19.4646 6.75C19.9568 6.74994 20.4052 6.74989 20.7642 6.80237C21.1588 6.86006 21.5792 6.99805 21.8925 7.38056C22.2023 7.75888 22.2601 8.19716 22.2487 8.59566C22.2381 8.96381 22.1625 9.41437 22.0784 9.9159L21.7151 12.0827C21.6355 12.5575 21.5957 12.795 21.533 12.8113C21.4703 12.8276 21.2996 12.6144 20.9581 12.1882C20.4999 11.6162 19.7957 11.25 19.0059 11.25C17.6251 11.25 16.5059 12.3693 16.5059 13.75L16.5059 16.2985C16.5059 16.5278 16.5059 16.6424 16.4511 16.7201C16.3964 16.7978 16.2699 16.8431 16.017 16.9335C15.5362 17.1054 14.9004 17.4744 14.5141 18.2708C14.1635 18.9935 14.2479 19.6876 14.3542 20.0998C14.4097 20.3156 14.5703 20.7227 14.7939 21.0501L15.3993 21.7957C15.7297 22.2026 15.8949 22.4061 15.8138 22.577C15.7326 22.7479 15.4729 22.7485 14.9533 22.7496C14.7837 22.75 14.6088 22.75 14.4285 22.75H9.57149C8.44034 22.75 7.51991 22.75 6.78342 22.6557C6.01361 22.5572 5.35455 22.3465 4.79455 21.8613C4.23682 21.3781 3.92692 20.7522 3.70412 19.997C3.48969 19.2701 3.33385 18.3404 3.1412 17.1911L1.92161 9.91593C1.83748 9.41439 1.76191 8.96382 1.75133 8.59566C1.73988 8.19716 1.79764 7.75888 2.10749 7.38055C2.42076 6.99805 2.84115 6.86006 3.23581 6.80237C3.59476 6.74989 4.04322 6.74994 4.53543 6.75H19.4646Z',
  d7: 'M20.0059 13.75C20.0059 13.1977 19.5581 12.75 19.0059 12.75C18.4536 12.75 18.0059 13.1977 18.0059 13.75L18.0059 18.25L17.4116 18.25C17.236 18.2499 17.0203 18.2497 16.8439 18.2718L16.8405 18.2722C16.7141 18.288 16.138 18.3598 15.8637 18.9254C15.5887 19.4923 15.8907 19.9924 15.956 20.1006L15.9584 20.1046C16.0506 20.2576 16.2951 20.5691 16.2951 20.5691C16.5897 20.9449 16.9954 21.4594 17.3759 21.8504C17.5657 22.0455 17.783 22.2467 18.0139 22.4056C18.2191 22.5468 18.5693 22.75 19 22.75C19.4307 22.75 19.7809 22.5468 19.9861 22.4056C20.217 22.2467 20.4343 22.0455 20.6241 21.8504C21.0046 21.4594 21.4102 20.9449 21.7049 20.5691C21.7049 20.5691 21.9494 20.2577 22.0416 20.1046L22.044 20.1006C22.1093 19.9924 22.4113 19.4922 22.1363 18.9254C21.862 18.3598 21.2859 18.288 21.1595 18.2722L21.1561 18.2718C20.9797 18.2497 20.764 18.2499 20.5884 18.25L20.0059 18.25L20.0059 13.75Z',
  d8: 'M16.5 19.5L19 22L21.5 19.5M19 14V21.3435',
  d9: 'M14.0059 22H5.04591L2.49918 7.5298C2.4981 7.52368 2.50281 7.51807 2.50903 7.51807H21.49C21.4963 7.51807 21.501 7.52371 21.4999 7.52984L20.5839 12.9949',
  d10: 'M12 3.25C9.51472 3.25 7.5 5.26472 7.5 7.75H5.5C5.5 4.16015 8.41015 1.25 12 1.25C15.5899 1.25 18.5 4.16015 18.5 7.75H16.5C16.5 5.26472 14.4853 3.25 12 3.25Z',
  d11: 'M19.043 22.75L22.2502 19.5429L20.8359 18.1287L20.043 18.9216V13.3358H18.043V18.9216L17.2502 18.1287L15.8359 19.5429L19.043 22.75Z',
  d12: 'M2.50001 6.75C2.27881 6.75 2.06889 6.84764 1.92639 7.01682C1.78389 7.186 1.72333 7.40945 1.76091 7.62743L4.36825 22.75H16.9219L13.7148 19.5429L16.5433 16.7145V11.8358H21.5135L22.2391 7.62743C22.2767 7.40945 22.2161 7.186 22.0736 7.01682C21.9311 6.84764 21.7212 6.75 21.5 6.75H2.50001Z',
} as const;

export const IconShoppingBasketCheckOut01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-01-stroke-rounded IconShoppingBasketCheckOut01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckOut01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-01-duotone-rounded IconShoppingBasketCheckOut01DuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckOut01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-01-twotone-rounded IconShoppingBasketCheckOut01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckOut01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-01-solid-rounded IconShoppingBasketCheckOut01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckOut01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-01-bulk-rounded IconShoppingBasketCheckOut01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckOut01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-01-stroke-sharp IconShoppingBasketCheckOut01StrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckOut01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-01-solid-sharp IconShoppingBasketCheckOut01SolidSharp"
    >
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
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketCheckOut01: TheIconSelfPack = {
  name: 'ShoppingBasketCheckOut01',
  StrokeRounded: IconShoppingBasketCheckOut01StrokeRounded,
  DuotoneRounded: IconShoppingBasketCheckOut01DuotoneRounded,
  TwotoneRounded: IconShoppingBasketCheckOut01TwotoneRounded,
  SolidRounded: IconShoppingBasketCheckOut01SolidRounded,
  BulkRounded: IconShoppingBasketCheckOut01BulkRounded,
  StrokeSharp: IconShoppingBasketCheckOut01StrokeSharp,
  SolidSharp: IconShoppingBasketCheckOut01SolidSharp,
};