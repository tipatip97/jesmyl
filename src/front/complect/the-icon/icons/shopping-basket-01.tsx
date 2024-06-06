import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L20.1271 17.0194C19.7282 19.3991 19.5287 20.5889 18.7143 21.2945C17.9 22 16.726 22 14.3782 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194Z',
  d2: 'M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5',
  d3: 'M4.53543 6.75L4.58563 6.75001L19.4646 6.75C19.9568 6.74994 20.4052 6.74989 20.7642 6.80237C21.1588 6.86006 21.5792 6.99805 21.8925 7.38056C22.2023 7.75888 22.2601 8.19716 22.2487 8.59566C22.2381 8.96381 22.1625 9.41437 22.0784 9.9159L20.8588 17.191L20.8588 17.1911C20.6661 18.3404 20.5103 19.2701 20.2959 19.997C20.0731 20.7522 19.7632 21.3781 19.2054 21.8613C18.6454 22.3465 17.9864 22.5572 17.2166 22.6557C16.4801 22.75 15.5596 22.75 14.4285 22.75H9.57149C8.44034 22.75 7.51991 22.75 6.78342 22.6557C6.01361 22.5572 5.35455 22.3465 4.79455 21.8613C4.23682 21.3781 3.92692 20.7522 3.70412 19.997C3.48969 19.2701 3.33385 18.3404 3.1412 17.1911L1.92964 9.96382L1.92161 9.91593C1.83748 9.41439 1.76191 8.96382 1.75133 8.59566C1.73988 8.19716 1.79764 7.75888 2.10749 7.38055C2.42076 6.99805 2.84115 6.86006 3.23581 6.80237C3.59476 6.74989 4.04322 6.74994 4.53543 6.75Z',
  d4: 'M12 3.25C9.79086 3.25 8 5.04086 8 7.25V7.75C8 8.30228 7.55228 8.75 7 8.75C6.44772 8.75 6 8.30228 6 7.75V7.25C6 3.93629 8.68629 1.25 12 1.25C15.3137 1.25 18 3.93629 18 7.25V7.75C18 8.30228 17.5523 8.75 17 8.75C16.4477 8.75 16 8.30228 16 7.75V7.25C16 5.04086 14.2091 3.25 12 3.25Z',
  d5: 'M17.0098 7.45263C17.0098 4.44109 14.5474 1.99976 11.5098 1.99976C8.4722 1.99976 6.00977 4.44109 6.00977 7.45263',
  d6: 'M21.3999 7.59569L2.60013 7.59546C2.53806 7.59546 2.49095 7.65078 2.50148 7.71131L4.98696 22.0003H18.9815L21.4985 7.71175C21.5092 7.65116 21.462 7.59569 21.3999 7.59569Z',
  d7: 'M12.001 3.25C9.5157 3.25 7.50098 5.26472 7.50098 7.75H5.50098C5.50098 4.16015 8.41113 1.25 12.001 1.25C15.5908 1.25 18.501 4.16015 18.501 7.75H16.501C16.501 5.26472 14.4863 3.25 12.001 3.25Z',
  d8: 'M1.92737 7.01682C2.06987 6.84764 2.27979 6.75 2.50098 6.75H21.501C21.7222 6.75 21.9321 6.84764 22.0746 7.01682C22.2171 7.186 22.2777 7.40945 22.2401 7.62743L19.6327 22.75H4.36923L1.76189 7.62743C1.7243 7.40945 1.78486 7.186 1.92737 7.01682Z',
};

export const IconShoppingBasket01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-01-stroke-rounded IconShoppingBasket01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-01-duotone-rounded IconShoppingBasket01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-01-twotone-rounded IconShoppingBasket01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-01-solid-rounded IconShoppingBasket01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-01-bulk-rounded IconShoppingBasket01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-01-stroke-sharp IconShoppingBasket01StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasket01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-01-solid-sharp IconShoppingBasket01SolidSharp"
    >
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

export const iconPackOfShoppingBasket01: TheIconSelfPack = {
  name: 'ShoppingBasket01',
  StrokeRounded: IconShoppingBasket01StrokeRounded,
  DuotoneRounded: IconShoppingBasket01DuotoneRounded,
  TwotoneRounded: IconShoppingBasket01TwotoneRounded,
  SolidRounded: IconShoppingBasket01SolidRounded,
  BulkRounded: IconShoppingBasket01BulkRounded,
  StrokeSharp: IconShoppingBasket01StrokeSharp,
  SolidSharp: IconShoppingBasket01SolidSharp,
};