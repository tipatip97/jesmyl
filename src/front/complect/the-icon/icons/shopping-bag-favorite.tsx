import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 21.9976C8.63187 22.0381 5.17171 21.5636 3.79294 20.6104C3.06862 20.1097 2.51576 19.4143 2.20436 18.6124C1.6959 17.3029 2.18223 15.6144 3.1549 12.2373C4.23479 8.48796 5.74529 7.5 9.65019 7.5H13.4291C16.9872 7.5 18.5032 8.37066 19.5 11',
  d2: 'M7 8V6.36364C7 3.95367 9.01472 2 11.5 2C13.9853 2 16 3.95367 16 6.36364V8',
  d3: 'M14.1418 14.4418C15.3486 13.7108 16.4018 14.0054 17.0345 14.4747C17.294 14.6671 17.4237 14.7633 17.5 14.7633C17.5763 14.7633 17.706 14.6671 17.9655 14.4747C18.5982 14.0054 19.6514 13.7108 20.8582 14.4418C22.4419 15.4013 22.8002 18.5666 19.1472 21.237C18.4514 21.7457 18.1035 22 17.5 22C16.8965 22 16.5486 21.7457 15.8528 21.237C12.1998 18.5666 12.5581 15.4013 14.1418 14.4418Z',
  d4: 'M10.5 11H12.5',
  d5: 'M9.61841 7.5H13.3816C17.4313 7.5 18.8173 8.63723 19.8499 12.2373C20.0602 12.9705 20.2477 13.6241 20.4071 14.2115C19.3911 13.7883 18.518 14.0649 17.9655 14.4747C17.706 14.6671 17.5763 14.7633 17.5 14.7633C17.4237 14.7633 17.294 14.6671 17.0346 14.4747C16.4018 14.0054 15.3486 13.7108 14.1418 14.4418C12.5581 15.4013 12.1998 18.5666 15.8528 21.237C16.0463 21.3785 16.213 21.5004 16.3657 21.6025C12.2626 22.3761 5.79787 22.0075 3.78549 20.6104C3.06418 20.1097 2.51361 19.4143 2.20352 18.6124C1.69716 17.3029 2.18147 15.6144 3.1501 12.2373C4.2255 8.48796 5.72973 7.5 9.61841 7.5Z',
  d6: 'M11.5 3.25C9.53777 3.25 8 4.78473 8 6.61364V8.25C8 8.80228 7.55228 9.25 7 9.25C6.44772 9.25 6 8.80228 6 8.25V6.61364C6 3.6226 8.49166 1.25 11.5 1.25C14.5083 1.25 17 3.6226 17 6.61364V8.25C17 8.80228 16.5523 9.25 16 9.25C15.4477 9.25 15 8.80228 15 8.25V6.61364C15 4.78473 13.4622 3.25 11.5 3.25Z',
  d7: 'M4.89181 7.85346C6.08783 6.99457 7.63833 6.75 9.61842 6.75H13.3816C15.451 6.75 17.0149 7.03438 18.1964 7.91803C19.1232 8.61127 19.73 9.61002 20.2033 10.8943C20.3537 11.3025 20.429 11.5067 20.3371 11.6358C20.2451 11.7648 19.9953 11.7599 19.4955 11.75C18.8664 11.7375 18.2756 11.8545 17.7484 12.055C17.6201 12.1038 17.5559 12.1282 17.5008 12.1282C17.4457 12.1282 17.3815 12.1038 17.2533 12.055C16.0566 11.5998 14.5321 11.5752 12.9768 12.5175C11.2761 13.5478 10.5393 15.5451 10.8048 17.5006C11.0003 18.9401 11.7107 20.3582 12.9105 21.6364C13.3583 22.1135 13.5822 22.3521 13.5077 22.5312C13.4332 22.7103 13.1258 22.7191 12.5109 22.7366C12.1592 22.7466 11.8057 22.751 11.4529 22.7498C9.82517 22.7446 8.19116 22.6213 6.78633 22.38C5.4116 22.1439 4.15266 21.7783 3.35779 21.2265C2.51618 20.6422 1.86936 19.8277 1.504 18.8829C1.17859 18.0413 1.19665 17.1319 1.38524 16.0691C1.57092 15.0227 1.94299 13.7256 2.41694 12.0732L2.42918 12.0305C2.98157 10.1046 3.68716 8.71854 4.89181 7.85346ZM10.5 10C9.94771 10 9.5 10.4477 9.5 11C9.5 11.5523 9.94771 12 10.5 12H12.5C13.0523 12 13.5 11.5523 13.5 11C13.5 10.4477 13.0523 10 12.5 10H10.5Z',
  d8: 'M13.7538 13.8007C15.2573 12.8899 16.6403 13.2484 17.4819 13.8726L17.5006 13.8864L17.5193 13.8726C18.3609 13.2484 19.7439 12.8899 21.2474 13.8007C22.3412 14.4634 22.9116 15.8159 22.7102 17.299C22.5071 18.7948 21.5372 20.4197 19.5904 21.8428C18.9646 22.3014 18.3519 22.7503 17.5006 22.7503C16.6493 22.7503 16.0366 22.3014 15.4108 21.8428C13.464 20.4197 12.4941 18.7948 12.291 17.299C12.0896 15.8159 12.6599 14.4634 13.7538 13.8007Z',
  d9: 'M9.61842 6.75C7.63833 6.75 6.08783 6.99457 4.89181 7.85346C3.68716 8.71854 2.98157 10.1046 2.42918 12.0305L2.41694 12.0732C1.94299 13.7256 1.57092 15.0227 1.38524 16.0691C1.19665 17.1319 1.17859 18.0413 1.504 18.8829C1.86936 19.8277 2.51618 20.6422 3.35779 21.2265C4.15266 21.7783 5.4116 22.1439 6.78633 22.38C8.19116 22.6213 9.82517 22.7446 11.4529 22.7498C11.8057 22.751 12.1592 22.7466 12.5109 22.7366C13.1258 22.7191 13.4332 22.7103 13.5077 22.5312C13.5822 22.3521 13.3583 22.1135 12.9105 21.6364C11.7107 20.3582 11.0003 18.9401 10.8048 17.5006C10.5393 15.5451 11.2761 13.5478 12.9768 12.5175C14.5321 11.5752 16.0566 11.5998 17.2533 12.055C17.3815 12.1038 17.4457 12.1282 17.5008 12.1282C17.5559 12.1282 17.6201 12.1038 17.7484 12.055C18.2756 11.8545 18.8664 11.7375 19.4955 11.75C19.9953 11.7599 20.2451 11.7648 20.3371 11.6358C20.429 11.5067 20.3537 11.3025 20.2033 10.8943C19.73 9.61002 19.1232 8.61127 18.1964 7.91803C17.0149 7.03438 15.451 6.75 13.3816 6.75H9.61842Z',
  d10: 'M9.5 11C9.5 10.4477 9.94772 10 10.5 10H12.5C13.0523 10 13.5 10.4477 13.5 11C13.5 11.5523 13.0523 12 12.5 12H10.5C9.94772 12 9.5 11.5523 9.5 11Z',
  d11: 'M8 6.61364C8 4.78473 9.53777 3.25 11.5 3.25C13.4622 3.25 15 4.78473 15 6.61364V6.82342C15.7447 6.89945 16.4084 7.03945 17 7.26584V6.61364C17 3.6226 14.5083 1.25 11.5 1.25C8.49166 1.25 6 3.6226 6 6.61364V7.26121C6.59681 7.03189 7.26155 6.89461 8 6.82095V6.61364Z',
  d12: 'M7.5 7.5V6.36364C7.5 3.95367 9.51472 2 12 2C14.4853 2 16.5 3.95367 16.5 6.36364V7.5',
  d13: 'M19.9973 11L19 7.5H5L3.6501 12.2373C2.68147 15.6144 2.19716 17.3029 2.70352 18.6124C3.01361 19.4143 3.56418 20.1097 4.28549 20.6104C5.59603 21.5203 8.79487 21.994 12 22',
  d14: 'M10 11H14',
  d15: 'M20.2431 15.2896C18.6465 14.457 17.5 15.6843 17.5 15.6843C17.5 15.6843 16.3535 14.457 14.7568 15.2896C12.823 16.298 12.6841 20.2469 17.5 22C22.316 20.2469 22.177 16.298 20.2431 15.2896Z',
  d16: 'M11.5 3.25C9.53777 3.25 8 4.78473 8 6.61364V7.75H6V6.61364C6 3.6226 8.49166 1.25 11.5 1.25C14.5083 1.25 17 3.6226 17 6.61364V7.75H15V6.61364C15 4.78473 13.4622 3.25 11.5 3.25Z',
  d17: 'M18.0667 15.454C18.2324 15.5217 18.3775 15.5992 18.5 15.675C18.6225 15.5992 18.7676 15.5217 18.9333 15.454C19.5174 15.2152 20.3434 15.1074 21.2653 15.5786C22.4576 16.1881 22.9943 17.6147 22.6448 19.0171C22.2875 20.4509 21.0392 21.8438 18.7296 22.6681L18.5 22.75L18.2704 22.6681C15.9608 21.8438 14.7125 20.4509 14.3552 19.0171C14.0057 17.6147 14.5424 16.1881 15.7347 15.5786C16.6566 15.1074 17.4826 15.2152 18.0667 15.454Z',
  d18: 'M20.5712 12.0318L20.5831 12.0731C20.7745 12.7406 20.9493 13.3501 21.102 13.9085C20.1124 13.6297 19.2056 13.7531 18.5017 14.0133C17.6008 13.6803 16.3676 13.5713 15.0536 14.243C13.1262 15.2283 12.4163 17.433 12.9014 19.3798C13.2025 20.5879 13.9218 21.6785 15.0044 22.5634C13.8767 22.6927 12.6608 22.7537 11.4529 22.7498C9.82517 22.7446 8.19116 22.6213 6.78633 22.38C5.4116 22.1439 4.15266 21.7783 3.35779 21.2265C2.51618 20.6422 1.86936 19.8277 1.504 18.8829C1.17859 18.0413 1.19665 17.1319 1.38524 16.0691C1.57092 15.0227 1.94299 13.7256 2.41694 12.0732L3.93387 6.75H19.0662L20.5712 12.0318ZM13.5 12H9.5V10H13.5V12Z',
} as const;

export const IconShoppingBagFavoriteStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-favorite-stroke-rounded IconShoppingBagFavoriteStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagFavoriteDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-favorite-duotone-rounded IconShoppingBagFavoriteDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagFavoriteTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-favorite-twotone-rounded IconShoppingBagFavoriteTwotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagFavoriteSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-favorite-solid-rounded IconShoppingBagFavoriteSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconShoppingBagFavoriteBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-favorite-bulk-rounded IconShoppingBagFavoriteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagFavoriteStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-favorite-stroke-sharp IconShoppingBagFavoriteStrokeSharp"
    >
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
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBagFavoriteSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-favorite-solid-sharp IconShoppingBagFavoriteSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBagFavorite: TheIconSelfPack = {
  name: 'ShoppingBagFavorite',
  StrokeRounded: IconShoppingBagFavoriteStrokeRounded,
  DuotoneRounded: IconShoppingBagFavoriteDuotoneRounded,
  TwotoneRounded: IconShoppingBagFavoriteTwotoneRounded,
  SolidRounded: IconShoppingBagFavoriteSolidRounded,
  BulkRounded: IconShoppingBagFavoriteBulkRounded,
  StrokeSharp: IconShoppingBagFavoriteStrokeSharp,
  SolidSharp: IconShoppingBagFavoriteSolidSharp,
};