import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.06164 14.4413L3.42688 12.2985C3.85856 9.76583 4.0744 8.49951 4.92914 7.74975C5.78389 7 7.01171 7 9.46734 7H14.5327C16.9883 7 18.2161 7 19.0709 7.74975C19.9256 8.49951 20.1414 9.76583 20.5731 12.2985L20.9384 14.4413C21.5357 17.946 21.8344 19.6983 20.9147 20.8491C19.995 22 18.2959 22 14.8979 22H9.1021C5.70406 22 4.00504 22 3.08533 20.8491C2.16562 19.6983 2.4643 17.946 3.06164 14.4413Z',
  d2: 'M7.5 9L7.71501 5.98983C7.87559 3.74176 9.7462 2 12 2C14.2538 2 16.1244 3.74176 16.285 5.98983L16.5 9',
  d3: 'M14.5839 6.375C15.7682 6.37498 16.7296 6.37496 17.4988 6.47498C18.3026 6.57949 18.9857 6.80239 19.5654 7.31093C20.1415 7.8162 20.4645 8.47121 20.6999 9.26802C20.9273 10.0378 21.0954 11.024 21.3044 12.2502L21.3044 12.2503L21.6874 14.4975L21.6874 14.4975C21.9779 16.2013 22.2089 17.5567 22.245 18.6276C22.2821 19.7278 22.1212 20.6658 21.5006 21.4424C20.8744 22.2259 20.0045 22.5651 18.9463 22.7229C17.9265 22.875 16.6064 22.875 14.9607 22.875H14.9607H9.03931H9.03928C7.39361 22.875 6.07347 22.875 5.05369 22.7229C3.99552 22.5651 3.12563 22.2259 2.49943 21.4424C1.87881 20.6658 1.71794 19.7278 1.75501 18.6276C1.7911 17.5567 2.02213 16.2013 2.31255 14.4975L2.69558 12.2503C2.90457 11.024 3.07266 10.0378 3.30009 9.26802C3.53552 8.47121 3.85853 7.8162 4.43457 7.31093C5.01432 6.80239 5.69744 6.57949 6.50119 6.47498C7.27039 6.37496 8.23183 6.37498 9.4161 6.375H9.41612H14.5839H14.5839Z',
  d4: 'M12 3.125C10.2709 3.125 8.83571 4.46132 8.71251 6.18608L8.4975 9.19625C8.45815 9.74713 7.97968 10.1618 7.4288 10.1225C6.87791 10.0831 6.46324 9.60463 6.50258 9.05375L6.7176 6.04359C6.91555 3.27221 9.22161 1.125 12 1.125C14.7785 1.125 17.0845 3.27221 17.2825 6.04359L17.4975 9.05375C17.5368 9.60463 17.1222 10.0831 16.5713 10.1225C16.0204 10.1618 15.5419 9.74713 15.5026 9.19625L15.2876 6.18608C15.1644 4.46132 13.7292 3.125 12 3.125Z',
  d5: 'M7.5 9.5L7.71501 5.98983C7.87559 3.74176 9.7462 2 12 2C14.2538 2 16.1244 3.74176 16.285 5.98983L16.5 9.5',
  d6: 'M20.0318 7H4.00672L2.00105 21.8775C1.99233 21.9421 2.03916 22 2.10015 22H21.8998C21.9607 22 22.0075 21.9423 21.999 21.8778L20.0318 7Z',
  d7: 'M6.64939 7.25L6.71563 6.16858C6.91359 3.39721 9.21969 1.25 11.9981 1.25C14.7766 1.25 17.0826 3.39721 17.2806 6.16859L17.2813 6.17869L17.3469 7.25H20.6566L22.7434 21.9009C22.772 22.1152 22.7067 22.3314 22.5643 22.494C22.4219 22.6567 22.2162 22.75 22 22.75H2C1.78381 22.75 1.57813 22.6567 1.43572 22.494C1.2933 22.3314 1.22801 22.1152 1.25658 21.9009L3.34337 7.25H6.64939ZM8.65314 7.25L8.71094 6.30635C8.83642 4.58388 10.2705 3.25 11.9981 3.25C13.7257 3.25 15.1598 4.58386 15.2853 6.30633L15.3431 7.25H8.65314Z',
};

export const IconShoppingBag03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-03-stroke-rounded IconShoppingBag03StrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBag03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-03-duotone-rounded IconShoppingBag03DuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBag03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-03-twotone-rounded IconShoppingBag03TwotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBag03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-03-solid-rounded IconShoppingBag03SolidRounded"
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

export const IconShoppingBag03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-03-bulk-rounded IconShoppingBag03BulkRounded"
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

export const IconShoppingBag03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-03-stroke-sharp IconShoppingBag03StrokeSharp"
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

export const IconShoppingBag03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-bag-03-solid-sharp IconShoppingBag03SolidSharp"
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

export const iconPackOfShoppingBag03: TheIconSelfPack = {
  name: 'ShoppingBag03',
  StrokeRounded: IconShoppingBag03StrokeRounded,
  DuotoneRounded: IconShoppingBag03DuotoneRounded,
  TwotoneRounded: IconShoppingBag03TwotoneRounded,
  SolidRounded: IconShoppingBag03SolidRounded,
  BulkRounded: IconShoppingBag03BulkRounded,
  StrokeSharp: IconShoppingBag03StrokeSharp,
  SolidSharp: IconShoppingBag03SolidSharp,
};