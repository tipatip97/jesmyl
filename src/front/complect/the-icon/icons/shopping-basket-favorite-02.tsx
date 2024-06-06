import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 22C7.66701 22 6.58014 22 5.76809 21.2752C4.95603 20.5505 4.75097 19.3264 4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L20.5601 11.5',
  d2: 'M13.1418 14.4418C14.3486 13.7108 15.4018 14.0054 16.0345 14.4747C16.294 14.6671 16.4237 14.7633 16.5 14.7633C16.5763 14.7633 16.706 14.6671 16.9655 14.4747C17.5982 14.0054 18.6514 13.7108 19.8582 14.4418C21.4419 15.4013 21.8002 18.5666 18.1472 21.237C17.4514 21.7457 17.1035 22 16.5 22C15.8965 22 15.5486 21.7457 14.8528 21.237C11.1998 18.5666 11.5581 15.4013 13.1418 14.4418Z',
  d3: 'M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5',
  d4: 'M4.5 17.5H9.5',
  d5: 'M3.17786 9.93557L4.34085 16.8781C4.38327 17.1313 4.42349 17.3714 4.46242 17.5993H12.1095C11.7653 16.1768 12.2663 14.9723 13.1418 14.4418C14.3486 13.7108 15.4018 14.0054 16.0345 14.4747C16.294 14.6671 16.4237 14.7633 16.5 14.7633C16.5763 14.7633 16.706 14.6671 16.9654 14.4747C17.5982 14.0054 18.6514 13.7108 19.8582 14.4418C19.9228 14.481 19.9854 14.5238 20.0458 14.5702L20.8221 9.93557C21.0113 8.8063 21.1059 8.24167 20.8146 7.87083C20.5234 7.5 19.9853 7.5 18.9092 7.5H5.09079C4.01468 7.5 3.47662 7.5 3.18537 7.87083C2.89411 8.24167 2.98869 8.8063 3.17786 9.93557Z',
  d6: 'M12 3.25C9.79086 3.25 8 5.04086 8 7.25V7.75C8 8.30228 7.55228 8.75 7 8.75C6.44772 8.75 6 8.30228 6 7.75V7.25C6 3.93629 8.68629 1.25 12 1.25C15.3137 1.25 18 3.93629 18 7.25V7.75C18 8.30228 17.5523 8.75 17 8.75C16.4477 8.75 16 8.30228 16 7.75V7.25C16 5.04086 14.2091 3.25 12 3.25Z',
  d7: 'M12.7529 13.8007C14.2563 12.8899 15.6394 13.2484 16.481 13.8726L16.4996 13.8864L16.5183 13.8726C17.3599 13.2484 18.7429 12.8899 20.2464 13.8007C21.3403 14.4634 21.9107 15.8159 21.7093 17.299C21.5061 18.7948 20.5362 20.4197 18.5894 21.8428C17.9636 22.3014 17.3509 22.7503 16.4996 22.7503C15.6483 22.7503 15.0356 22.3014 14.4098 21.8428C12.4631 20.4197 11.4931 18.7948 11.29 17.299C11.0886 15.8159 11.659 14.4634 12.7529 13.8007Z',
  d8: 'M3.73122 6.80485C4.09347 6.74988 4.54569 6.74994 5.03918 6.75H18.9608C19.4543 6.74994 19.9065 6.74988 20.2688 6.80485C20.6709 6.86589 21.0939 7.01213 21.4045 7.40759C21.7075 7.79348 21.7616 8.2371 21.7481 8.64362C21.7356 9.02281 21.6576 9.48825 21.5697 10.0124L21.2842 11.7167C21.2201 12.0996 21.188 12.2911 21.0613 12.3612C20.9346 12.4313 20.7399 12.3504 20.3503 12.1886C19.0481 11.6476 17.7544 11.6841 16.7478 12.0562C16.6177 12.1043 16.5527 12.1284 16.4983 12.1281C16.4439 12.1279 16.38 12.1036 16.2523 12.055C15.0556 11.5998 13.5312 11.5752 11.9758 12.5174C10.7349 13.2692 10.0071 14.5359 9.80746 15.9255C9.76648 16.2108 9.74599 16.3534 9.66143 16.4267C9.57686 16.5 9.44399 16.5 9.17826 16.5H4.02491C3.78234 16.5 3.66106 16.5 3.57716 16.429C3.49326 16.358 3.47323 16.2384 3.43315 15.9991L2.43027 10.0123C2.34242 9.48822 2.26442 9.02282 2.25186 8.64362C2.2384 8.2371 2.29245 7.79348 2.59554 7.40759C2.90613 7.01213 3.32906 6.86589 3.73122 6.80485Z',
  d9: 'M10.167 18.9205C10.0878 18.7111 10.0482 18.6064 9.9712 18.5532C9.89422 18.5 9.78916 18.5 9.57903 18.5H4.58218C4.24491 18.5 4.07627 18.5 3.98621 18.6119C3.89614 18.7239 3.9315 18.8852 4.0022 19.2079C4.05928 19.4683 4.11886 19.7096 4.18349 19.9321C4.40733 20.703 4.7155 21.3411 5.26868 21.8348C5.82696 22.3331 6.48525 22.5511 7.25514 22.6529C7.98918 22.7501 8.90541 22.75 10.028 22.75H11.4035C12.1009 22.75 12.4496 22.75 12.5282 22.5702C12.6068 22.3903 12.358 22.1214 11.8604 21.5837C11.0835 20.7442 10.5166 19.8454 10.167 18.9205Z',
  d10: 'M10.1671 18.9205C10.088 18.7111 10.0484 18.6064 9.97139 18.5532C9.89442 18.5 9.78935 18.5 9.57923 18.5H4.58238C4.2451 18.5 4.07647 18.5 3.9864 18.6119C3.89634 18.7239 3.93169 18.8852 4.0024 19.2079C4.05947 19.4683 4.11906 19.7096 4.18369 19.9321C4.40753 20.703 4.71569 21.3411 5.26888 21.8348C5.82716 22.3331 6.48545 22.5511 7.25533 22.6529C7.98938 22.7501 8.90561 22.75 10.0282 22.75H11.4037C12.1011 22.75 12.4498 22.75 12.5284 22.5702C12.607 22.3903 12.3582 22.1214 11.8606 21.5837C11.0837 20.7442 10.5168 19.8454 10.1671 18.9205Z',
  d11: 'M17.499 7.5C17.499 4.46243 15.0366 2 11.999 2C8.96145 2 6.49902 4.46243 6.49902 7.5',
  d12: 'M4.49902 17.5H9.49902',
  d13: 'M19.2421 15.2896C17.6455 14.457 16.499 15.6843 16.499 15.6843C16.499 15.6843 15.3525 14.457 13.7558 15.2896C11.822 16.298 11.6831 20.2469 16.499 22C21.315 20.2469 21.176 16.298 19.2421 15.2896Z',
  d14: 'M10.5115 22H5.04591L2.49918 7.5298C2.4981 7.52368 2.50281 7.51807 2.50903 7.51807H21.49C21.4963 7.51807 21.501 7.52371 21.4999 7.52984L20.704 12.0068',
  d15: 'M17.5177 14.4812C17.7028 14.558 17.8649 14.6458 18.0018 14.7317C18.1387 14.6458 18.3008 14.558 18.486 14.4812C19.1387 14.2106 20.0616 14.0883 21.0917 14.6225C22.424 15.3132 23.0236 16.93 22.6331 18.5193C22.2339 20.1443 20.8391 21.723 18.2584 22.6571L18.0018 22.75L17.7453 22.6571C15.1645 21.723 13.7698 20.1443 13.3705 18.5193C12.98 16.93 13.5796 15.3132 14.9119 14.6225C15.942 14.0883 16.8649 14.2106 17.5177 14.4812Z',
  d16: 'M11.499 1.25C8.24924 1.25 5.55648 3.63491 5.07547 6.75H1.99903C1.77783 6.75 1.56792 6.84764 1.42541 7.01682C1.28291 7.186 1.22235 7.40945 1.25993 7.62743L2.78969 16.5H11.8633C12.1333 15.1711 12.9178 13.9676 14.223 13.2908C15.671 12.54 17.0265 12.6786 18.0034 13.0592C18.7613 12.7639 19.747 12.6143 20.8269 12.9126L21.7381 7.62743C21.7757 7.40945 21.7152 7.186 21.5726 7.01682C21.4301 6.84764 21.2202 6.75 20.999 6.75H17.9226C17.4416 3.63491 14.7488 1.25 11.499 1.25ZM11.499 3.25C9.35744 3.25 7.56526 4.74601 7.11053 6.75H15.8875C15.4328 4.74601 13.6406 3.25 11.499 3.25Z',
  d17: 'M11.8367 18.5C11.8585 18.6265 11.8847 18.7523 11.9154 18.8772C12.2813 20.3665 13.2265 21.7079 14.6829 22.75H3.86727L3.13452 18.5H11.8367Z',
};

export const IconShoppingBasketFavorite02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-02-stroke-rounded IconShoppingBasketFavorite02StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-02-duotone-rounded IconShoppingBasketFavorite02DuotoneRounded"
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

export const IconShoppingBasketFavorite02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-02-twotone-rounded IconShoppingBasketFavorite02TwotoneRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-02-solid-rounded IconShoppingBasketFavorite02SolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-02-bulk-rounded IconShoppingBasketFavorite02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-02-stroke-sharp IconShoppingBasketFavorite02StrokeSharp"
    >
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketFavorite02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-favorite-02-solid-sharp IconShoppingBasketFavorite02SolidSharp"
    >
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketFavorite02: TheIconSelfPack = {
  name: 'ShoppingBasketFavorite02',
  StrokeRounded: IconShoppingBasketFavorite02StrokeRounded,
  DuotoneRounded: IconShoppingBasketFavorite02DuotoneRounded,
  TwotoneRounded: IconShoppingBasketFavorite02TwotoneRounded,
  SolidRounded: IconShoppingBasketFavorite02SolidRounded,
  BulkRounded: IconShoppingBasketFavorite02BulkRounded,
  StrokeSharp: IconShoppingBasketFavorite02StrokeSharp,
  SolidSharp: IconShoppingBasketFavorite02SolidSharp,
};