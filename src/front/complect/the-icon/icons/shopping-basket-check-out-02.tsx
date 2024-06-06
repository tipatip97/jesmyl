import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13 22H10.0796C7.74664 22 6.58014 22 5.76809 21.2752C4.95603 20.5505 4.75097 19.3264 4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L20.5601 11.5',
  d2: 'M16 19.5C16.4915 20.0057 17.7998 22 18.5 22M21 19.5C20.5085 20.0057 19.2002 22 18.5 22M18.5 22V14',
  d3: 'M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5',
  d4: 'M4.5 17.5H13',
  d5: 'M4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L19.6591 16.8781C19.6167 17.1313 19.5765 17.3714 19.5376 17.5993H4.46242C4.42349 17.3714 4.38327 17.1313 4.34085 16.8781Z',
  d6: 'M19.5 18.75V14C19.5 13.4477 19.0523 13 18.5 13C17.9477 13 17.5 13.4477 17.5 14V18.75H16C15.6986 18.75 15.4265 18.9304 15.3092 19.2081C15.1918 19.4857 15.2521 19.8066 15.4622 20.0227C15.5509 20.114 16.3864 21.1531 16.5996 21.4245C16.8458 21.715 17.1213 22.0168 17.3968 22.2515C17.5349 22.369 17.6905 22.485 17.8578 22.5746C18.0193 22.661 18.2417 22.75 18.5 22.75C18.7583 22.75 18.9808 22.661 19.1422 22.5746C19.3096 22.485 19.4652 22.369 19.6032 22.2515C19.8787 22.0168 20.1543 21.715 20.4005 21.4245C20.6137 21.1531 21.4491 20.114 21.5378 20.0227C21.7479 19.8066 21.8082 19.4857 21.6909 19.2081C21.5736 18.9304 21.3014 18.75 21 18.75H19.5Z',
  d7: 'M12 3.25C9.79086 3.25 8 5.04086 8 7.25V7.75C8 8.30228 7.55228 8.75 7 8.75C6.44772 8.75 6 8.30228 6 7.75V7.25C6 3.93629 8.68629 1.25 12 1.25C15.3137 1.25 18 3.93629 18 7.25V7.75C18 8.30228 17.5523 8.75 17 8.75C16.4477 8.75 16 8.30228 16 7.75V7.25C16 5.04086 14.2091 3.25 12 3.25Z',
  d8: 'M3.73122 6.80485C4.09347 6.74988 4.54569 6.74994 5.03918 6.75H18.9608C19.4543 6.74994 19.9065 6.74988 20.2688 6.80485C20.6709 6.86589 21.0939 7.01213 21.4045 7.40759C21.7075 7.79348 21.7616 8.2371 21.7481 8.64362C21.7356 9.02281 21.6576 9.48825 21.5697 10.0124L21.1702 12.3976C21.0983 12.8266 21.0624 13.0411 20.9985 13.0569C20.9347 13.0726 20.7874 12.8785 20.493 12.4904C20.0364 11.8886 19.3136 11.5 18.5 11.5C17.1193 11.5 16 12.6193 16 14V15.9C16 16.1828 16 16.3243 15.9122 16.4121C15.8243 16.5 15.6829 16.5 15.4 16.5H4.02491C3.78234 16.5 3.66106 16.5 3.57716 16.429C3.49326 16.358 3.47323 16.2384 3.43315 15.9991L2.43027 10.0123C2.34242 9.48822 2.26442 9.02282 2.25186 8.64362C2.2384 8.2371 2.29245 7.79348 2.59554 7.40759C2.90613 7.01213 3.32906 6.86589 3.73122 6.80485Z',
  d9: 'M13.7924 19.3794C13.8107 18.9159 13.8198 18.6842 13.7313 18.5921C13.6427 18.5 13.455 18.5 13.0796 18.5H4.58218C4.24491 18.5 4.07627 18.5 3.98621 18.6119C3.89614 18.7239 3.9315 18.8852 4.0022 19.2079C4.05928 19.4683 4.11886 19.7096 4.18349 19.9321C4.40733 20.703 4.7155 21.3411 5.26868 21.8348C5.82696 22.3331 6.48525 22.5511 7.25514 22.6529C7.98918 22.7501 8.90541 22.75 10.028 22.75H13.972C14.4529 22.75 14.896 22.75 15.303 22.7424C15.4796 22.7391 15.5694 22.529 15.4552 22.3942L14.362 21.0424C13.9549 20.6102 13.7684 19.989 13.7924 19.3794Z',
  d10: 'M13.7926 19.3794C13.8109 18.9159 13.82 18.6842 13.7315 18.5921C13.6429 18.5 13.4552 18.5 13.0798 18.5H4.58238C4.2451 18.5 4.07647 18.5 3.9864 18.6119C3.89634 18.7239 3.93169 18.8852 4.0024 19.2079C4.05947 19.4683 4.11906 19.7096 4.18369 19.9321C4.40753 20.703 4.71569 21.3411 5.26888 21.8348C5.82716 22.3331 6.48545 22.5511 7.25533 22.6529C7.98938 22.7501 8.90561 22.75 10.0282 22.75H13.9722C14.4531 22.75 14.8962 22.75 15.3032 22.7424C15.4798 22.7391 15.5696 22.529 15.4554 22.3942L14.3622 21.0424C13.9551 20.6102 13.7686 19.989 13.7926 19.3794Z',
  d11: 'M17.499 7.49976C17.499 4.46219 15.0366 1.99976 11.999 1.99976C8.96145 1.99976 6.49902 4.46219 6.49902 7.49976',
  d12: 'M4.49902 17.4998H12.499',
  d13: 'M14.999 18.9998L17.999 21.9998L20.999 18.9998M17.999 13.9998V21.5426',
  d14: 'M12.5308 22.0002H5.04591L2.49918 7.53004C2.4981 7.52392 2.50281 7.51831 2.50903 7.51831H21.49C21.4963 7.51831 21.501 7.52395 21.4999 7.53009L20.5839 12.9952',
  d15: 'M11.5 1.25C8.25021 1.25 5.55745 3.63491 5.07645 6.75H2.00001C1.77881 6.75 1.56889 6.84764 1.42639 7.01682C1.28389 7.186 1.22333 7.40945 1.26091 7.62743L2.79066 16.5H15.7578L16.5433 15.7145V11.8358H21.0135L21.7391 7.62743C21.7767 7.40945 21.7161 7.186 21.5736 7.01682C21.4311 6.84764 21.2212 6.75 21 6.75H17.9236C17.4425 3.63491 14.7498 1.25 11.5 1.25ZM11.5 3.25C9.35841 3.25 7.56624 4.74601 7.11151 6.75H15.8885C15.4338 4.74601 13.6416 3.25 11.5 3.25Z',
  d16: 'M13.7578 18.5L13.2148 19.0429L16.9219 22.75H3.86825L3.13549 18.5H13.7578Z',
  d17: 'M19.043 22.75L22.7502 19.0429L21.3359 17.6287L20.043 18.9216V13.3358H18.043V18.9216L16.7502 17.6287L15.3359 19.0429L19.043 22.75Z',
} as const;

export const IconShoppingBasketCheckOut02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-02-stroke-rounded IconShoppingBasketCheckOut02StrokeRounded"
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

export const IconShoppingBasketCheckOut02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-02-duotone-rounded IconShoppingBasketCheckOut02DuotoneRounded"
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
        strokeLinejoin="round" 
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

export const IconShoppingBasketCheckOut02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-02-twotone-rounded IconShoppingBasketCheckOut02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckOut02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-02-solid-rounded IconShoppingBasketCheckOut02SolidRounded"
    >
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

export const IconShoppingBasketCheckOut02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-02-bulk-rounded IconShoppingBasketCheckOut02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckOut02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-02-stroke-sharp IconShoppingBasketCheckOut02StrokeSharp"
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
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketCheckOut02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-check-out-02-solid-sharp IconShoppingBasketCheckOut02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfShoppingBasketCheckOut02: TheIconSelfPack = {
  name: 'ShoppingBasketCheckOut02',
  StrokeRounded: IconShoppingBasketCheckOut02StrokeRounded,
  DuotoneRounded: IconShoppingBasketCheckOut02DuotoneRounded,
  TwotoneRounded: IconShoppingBasketCheckOut02TwotoneRounded,
  SolidRounded: IconShoppingBasketCheckOut02SolidRounded,
  BulkRounded: IconShoppingBasketCheckOut02BulkRounded,
  StrokeSharp: IconShoppingBasketCheckOut02StrokeSharp,
  SolidSharp: IconShoppingBasketCheckOut02SolidSharp,
};