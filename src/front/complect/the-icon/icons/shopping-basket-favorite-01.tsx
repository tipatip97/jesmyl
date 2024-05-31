import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11.5 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L21.0524 11.5',
  d2: 'M13.6418 14.4418C14.8486 13.7108 15.9018 14.0054 16.5345 14.4747C16.794 14.6671 16.9237 14.7633 17 14.7633C17.0763 14.7633 17.206 14.6671 17.4655 14.4747C18.0982 14.0054 19.1514 13.7108 20.3582 14.4418C21.9419 15.4013 22.3002 18.5666 18.6472 21.237C17.9514 21.7457 17.6035 22 17 22C16.3965 22 16.0486 21.7457 15.3528 21.237C11.6998 18.5666 12.0581 15.4013 13.6418 14.4418Z',
  d3: 'M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5',
  d4: 'M2.66933 9.83981L3.87289 17.0194C4.27181 19.3991 4.47127 20.5889 5.28565 21.2945C6.10003 22 7.27396 22 9.62182 22H14.3782C15.2832 22 16.0138 22 16.6166 21.9596C16.2179 21.8695 15.8884 21.6286 15.3528 21.237C11.6998 18.5666 12.0581 15.4013 13.6418 14.4418C14.8486 13.7108 15.9018 14.0054 16.5345 14.4747C16.794 14.6671 16.9237 14.7633 17 14.7633C17.0763 14.7633 17.206 14.6671 17.4655 14.4747C18.0982 14.0054 19.1514 13.7108 20.3582 14.4418C20.4202 14.4795 20.4805 14.5205 20.5386 14.5647L21.3307 9.83981C21.5126 8.75428 21.6036 8.21152 21.3123 7.85576C21.0209 7.5 20.4854 7.5 19.4144 7.5H4.58564C3.51461 7.5 2.9791 7.5 2.68773 7.85576C2.39637 8.21152 2.48735 8.75428 2.66933 9.83981Z',
  d5: 'M4.53543 6.75C4.04322 6.74994 3.59476 6.74989 3.23581 6.80237C2.84115 6.86006 2.42076 6.99805 2.10749 7.38055C1.79764 7.75888 1.73988 8.19716 1.75133 8.59566C1.76191 8.96382 1.83748 9.41439 1.92161 9.91593L3.1412 17.1911C3.33385 18.3404 3.48969 19.2701 3.70412 19.997C3.92692 20.7522 4.23682 21.3781 4.79455 21.8613C5.35455 22.3465 6.01361 22.5572 6.78342 22.6557C7.51991 22.75 8.44034 22.75 9.57149 22.75H11.9035C12.6009 22.75 12.9496 22.75 13.0282 22.5702C13.1068 22.3903 12.858 22.1214 12.3604 21.5837C11.1903 20.3193 10.4966 18.9203 10.3038 17.5006C10.0383 15.5451 10.7752 13.5477 12.4758 12.5174C14.0312 11.5751 15.5556 11.5998 16.7523 12.055C16.88 12.1036 16.9439 12.1279 16.9984 12.1281C17.0528 12.1284 17.1178 12.1043 17.2478 12.0561C18.2536 11.6836 19.5427 11.6443 20.8433 12.1841C21.2329 12.3459 21.4277 12.4267 21.5543 12.3566C21.681 12.2865 21.7131 12.0951 21.7772 11.7122L22.0784 9.9159C22.1625 9.41437 22.2381 8.96381 22.2487 8.59566C22.2601 8.19716 22.2023 7.75888 21.8925 7.38056C21.5792 6.99805 21.1588 6.86006 20.7642 6.80237C20.4052 6.74989 19.9568 6.74994 19.4646 6.75H4.53543Z',
  d6: 'M12 3.25C9.79086 3.25 8 5.04086 8 7.25V7.75C8 8.30228 7.55228 8.75 7 8.75C6.44772 8.75 6 8.30228 6 7.75V7.25C6 3.93629 8.68629 1.25 12 1.25C15.3137 1.25 18 3.93629 18 7.25V7.75C18 8.30228 17.5523 8.75 17 8.75C16.4477 8.75 16 8.30228 16 7.75V7.25C16 5.04086 14.2091 3.25 12 3.25Z',
  d7: 'M13.2529 13.8007C14.7563 12.8899 16.1394 13.2484 16.981 13.8726L16.9996 13.8864L17.0183 13.8726C17.8599 13.2484 19.2429 12.8899 20.7464 13.8007C21.8403 14.4634 22.4107 15.8159 22.2093 17.299C22.0061 18.7948 21.0362 20.4197 19.0894 21.8428C18.4636 22.3014 17.8509 22.7503 16.9996 22.7503C16.1483 22.7503 15.5356 22.3014 14.9098 21.8428C12.9631 20.4197 11.9931 18.7948 11.79 17.299C11.5886 15.8159 12.159 14.4634 13.2529 13.8007Z',
  d8: 'M19.7431 15.2896C18.1465 14.457 17 15.6843 17 15.6843C17 15.6843 15.8535 14.457 14.2568 15.2896C12.323 16.298 12.1841 20.2469 17 22C21.816 20.2469 21.677 16.298 19.7431 15.2896Z',
  d9: 'M11.9856 21.9819H5.04591L2.49918 7.51173C2.4981 7.50561 2.50281 7.5 2.50903 7.5H21.49C21.4963 7.5 21.501 7.50564 21.4999 7.51178L20.704 11.9887',
  d10: 'M11.499 3.25C9.01374 3.25 6.99902 5.26472 6.99902 7.75H4.99902C4.99902 4.16015 7.90917 1.25 11.499 1.25C15.0889 1.25 17.999 4.16015 17.999 7.75H15.999C15.999 5.26472 13.9843 3.25 11.499 3.25Z',
  d11: 'M17.5177 14.4347C17.7028 14.5119 17.8649 14.6002 18.0018 14.6865C18.1387 14.6002 18.3008 14.5119 18.486 14.4347C19.1387 14.1625 20.0616 14.0396 21.0917 14.5767C22.424 15.2714 23.0236 16.8974 22.6331 18.4957C22.2339 20.1299 20.8391 21.7174 18.2584 22.6569L18.0018 22.7503L17.7453 22.6569C15.1645 21.7175 13.7698 20.1299 13.3705 18.4957C12.98 16.8974 13.5796 15.2714 14.9119 14.5767C15.942 14.0396 16.8649 14.1625 17.5177 14.4347Z',
  d12: 'M1.99903 6.75C1.77783 6.75 1.56792 6.84764 1.42541 7.01682C1.28291 7.186 1.22235 7.40945 1.25993 7.62743L3.86727 22.75H14.6924C13.2289 21.7008 12.2809 20.3495 11.9149 18.8514C11.396 16.7275 12.1522 14.3246 14.2199 13.2464C15.6683 12.4912 17.0251 12.6297 18.0034 13.0123C18.7635 12.715 19.7521 12.5651 20.8347 12.8673L21.7381 7.62743C21.7757 7.40945 21.7152 7.186 21.5726 7.01682C21.4301 6.84764 21.2202 6.75 20.999 6.75H1.99903Z',
} as const;

export const IconShoppingBasketFavorite01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-01-stroke-rounded IconShoppingBasketFavorite01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-01-duotone-rounded IconShoppingBasketFavorite01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-01-twotone-rounded IconShoppingBasketFavorite01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-01-solid-rounded IconShoppingBasketFavorite01SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconShoppingBasketFavorite01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-01-bulk-rounded IconShoppingBasketFavorite01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconShoppingBasketFavorite01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-01-stroke-sharp IconShoppingBasketFavorite01StrokeSharp"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-01-solid-sharp IconShoppingBasketFavorite01SolidSharp"
    >
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
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketFavorite01: TheIconSelfPack = {
  name: 'ShoppingBasketFavorite01',
  StrokeRounded: IconShoppingBasketFavorite01StrokeRounded,
  DuotoneRounded: IconShoppingBasketFavorite01DuotoneRounded,
  TwotoneRounded: IconShoppingBasketFavorite01TwotoneRounded,
  SolidRounded: IconShoppingBasketFavorite01SolidRounded,
  BulkRounded: IconShoppingBasketFavorite01BulkRounded,
  StrokeSharp: IconShoppingBasketFavorite01StrokeSharp,
  SolidSharp: IconShoppingBasketFavorite01SolidSharp,
};