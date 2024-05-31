import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L21.0524 11.5',
  d2: 'M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5',
  d3: 'M16.5 16.5C16.9915 15.9943 18.2998 14 19 14M21.5 16.5C21.0085 15.9943 19.7002 14 19 14M19 14V22',
  d4: 'M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z',
  d5: 'M12 3.25C9.79086 3.25 8 5.04086 8 7.25V7.75C8 8.30228 7.55228 8.75 7 8.75C6.44772 8.75 6 8.30228 6 7.75V7.25C6 3.93629 8.68629 1.25 12 1.25C15.3137 1.25 18 3.93629 18 7.25V7.75C18 8.30228 17.5523 8.75 17 8.75C16.4477 8.75 16 8.30228 16 7.75V7.25C16 5.04086 14.2091 3.25 12 3.25Z',
  d6: 'M20.0059 21.75C20.0059 22.3023 19.5581 22.75 19.0059 22.75C18.4536 22.75 18.0059 22.3023 18.0059 21.75L18.0059 17.25L17.4116 17.25C17.236 17.2501 17.0203 17.2503 16.8439 17.2282L16.8405 17.2278C16.7141 17.212 16.138 17.1402 15.8637 16.5746C15.5887 16.0077 15.8907 15.5076 15.956 15.3994L15.9584 15.3954C16.0506 15.2424 16.2951 14.9309 16.2951 14.9309C16.5897 14.5551 16.9954 14.0406 17.3759 13.6496C17.5657 13.4545 17.783 13.2533 18.0139 13.0944C18.2191 12.9532 18.5693 12.75 19 12.75C19.4307 12.75 19.7809 12.9532 19.9861 13.0944C20.217 13.2533 20.4343 13.4545 20.6241 13.6496C21.0046 14.0406 21.4102 14.5551 21.7049 14.9309C21.7049 14.9309 21.9494 15.2423 22.0416 15.3954L22.044 15.3994C22.1093 15.5076 22.4113 16.0078 22.1363 16.5746C21.862 17.1402 21.2859 17.212 21.1595 17.2278L21.1561 17.2282C20.9797 17.2503 20.764 17.2501 20.5884 17.25L20.0059 17.25L20.0059 21.75Z',
  d7: 'M19.4646 6.75C19.9568 6.74994 20.4052 6.74989 20.7642 6.80237C21.1588 6.86006 21.5792 6.99805 21.8925 7.38056C22.2023 7.75888 22.2601 8.19716 22.2487 8.59566C22.2381 8.96381 22.1625 9.41437 22.0784 9.9159L21.8126 11.5012C21.7473 11.8908 21.7147 12.0856 21.6088 12.1577C21.5731 12.182 21.5431 12.1948 21.5008 12.2035C21.3754 12.2295 21.1957 12.1059 20.8363 11.8586C20.5534 11.664 19.8918 11.25 19 11.25C18.1082 11.25 17.4466 11.664 17.1637 11.8586C16.8178 12.0966 16.5227 12.3755 16.3008 12.6036L14.666 14.6338C14.5661 14.7976 13.8801 15.9224 14.5141 17.2292C14.9004 18.0256 15.5362 18.3946 16.017 18.5665C16.2699 18.6569 16.3964 18.7022 16.4511 18.7799C16.5059 18.8576 16.5059 18.9722 16.5059 19.2015L16.5059 21.75C16.5059 21.7993 16.5073 21.8482 16.5101 21.8968C16.535 22.3273 16.5475 22.5426 16.461 22.6362C16.3745 22.7299 16.2036 22.7335 15.862 22.7408C15.4273 22.75 14.9503 22.75 14.4285 22.75H9.57149C8.44034 22.75 7.51991 22.75 6.78342 22.6557C6.01361 22.5572 5.35455 22.3465 4.79455 21.8613C4.23682 21.3781 3.92692 20.7522 3.70412 19.997C3.48969 19.2701 3.33385 18.3404 3.1412 17.1911L1.92161 9.91593C1.83748 9.41439 1.76191 8.96382 1.75133 8.59566C1.73988 8.19716 1.79764 7.75888 2.10749 7.38055C2.42076 6.99805 2.84115 6.86006 3.23581 6.80237C3.59476 6.74989 4.04322 6.74994 4.53543 6.75H19.4646Z',
  d8: 'M17.4832 7.5C17.4832 4.46243 15.0292 2 12.0019 2C8.97459 2 6.52051 4.46243 6.52051 7.5',
  d9: 'M16.4863 16.5L18.9779 14L21.4694 16.5M18.9779 22V14.6024',
  d10: 'M14.9758 21.9878H5.04591L2.49918 7.51759C2.4981 7.51147 2.50281 7.50586 2.50903 7.50586H21.49C21.4963 7.50586 21.501 7.5115 21.4999 7.51764L20.6919 11.9941',
  d11: 'M19.043 13.3358L22.2502 16.5429L20.8359 17.9571L20.043 17.1642V22.75H18.043V17.1642L17.2502 17.9571L15.8359 16.5429L19.043 13.3358Z',
  d12: 'M12 1.25C8.75021 1.25 6.05745 3.63491 5.57645 6.75H2.50001C2.27881 6.75 2.06889 6.84764 1.92639 7.01682C1.78389 7.186 1.72333 7.40945 1.76091 7.62743L4.36825 22.75H16.5433V19.3712L13.7148 16.5428L19.0433 11.2144L21.2416 13.4127L22.2391 7.62743C22.2767 7.40945 22.2161 7.186 22.0736 7.01682C21.9311 6.84764 21.7212 6.75 21.5 6.75H18.4236C17.9425 3.63491 15.2498 1.25 12 1.25ZM12 3.25C9.85841 3.25 8.06624 4.74601 7.61151 6.75H16.3885C15.9338 4.74601 14.1416 3.25 12 3.25Z',
} as const;

export const IconShoppingBasketCheckIn01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-01-stroke-rounded IconShoppingBasketCheckIn01StrokeRounded"
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

export const IconShoppingBasketCheckIn01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-01-duotone-rounded IconShoppingBasketCheckIn01DuotoneRounded"
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

export const IconShoppingBasketCheckIn01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-01-twotone-rounded IconShoppingBasketCheckIn01TwotoneRounded"
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

export const IconShoppingBasketCheckIn01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-01-solid-rounded IconShoppingBasketCheckIn01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconShoppingBasketCheckIn01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-01-bulk-rounded IconShoppingBasketCheckIn01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckIn01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-01-stroke-sharp IconShoppingBasketCheckIn01StrokeSharp"
    >
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckIn01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-in-01-solid-sharp IconShoppingBasketCheckIn01SolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketCheckIn01: TheIconSelfPack = {
  name: 'ShoppingBasketCheckIn01',
  StrokeRounded: IconShoppingBasketCheckIn01StrokeRounded,
  DuotoneRounded: IconShoppingBasketCheckIn01DuotoneRounded,
  TwotoneRounded: IconShoppingBasketCheckIn01TwotoneRounded,
  SolidRounded: IconShoppingBasketCheckIn01SolidRounded,
  BulkRounded: IconShoppingBasketCheckIn01BulkRounded,
  StrokeSharp: IconShoppingBasketCheckIn01StrokeSharp,
  SolidSharp: IconShoppingBasketCheckIn01SolidSharp,
};