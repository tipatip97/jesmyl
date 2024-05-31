import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.5601 11.5L20.8221 9.93557C21.0113 8.8063 21.1059 8.24167 20.8146 7.87083C20.5234 7.5 19.9853 7.5 18.9092 7.5H5.09079C4.01468 7.5 3.47662 7.5 3.18537 7.87083C2.89411 8.24167 2.98869 8.8063 3.17786 9.93557L4.34085 16.8781C4.75097 19.3264 4.95603 20.5505 5.76809 21.2752C6.58014 22 7.66701 22 10 22H11',
  d2: 'M16.9992 14C15.7328 14 14.9117 14.8076 13.9405 15.102C13.5456 15.2217 13.3482 15.2815 13.2683 15.3659C13.1884 15.4502 13.165 15.5735 13.1182 15.8201C12.6174 18.4584 13.712 20.8976 16.3222 21.847C16.6027 21.949 16.7429 22 17.0006 22C17.2583 22 17.3986 21.949 17.679 21.847C20.2891 20.8976 21.3826 18.4584 20.8817 15.8201C20.8349 15.5735 20.8114 15.4502 20.7315 15.3658C20.6516 15.2814 20.4542 15.2216 20.0593 15.102C19.0878 14.8077 18.2657 14 16.9992 14Z',
  d3: 'M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5',
  d4: 'M4.5 17.5H9.5',
  d5: 'M3.17786 9.93557L4.34085 16.8781C4.38327 17.1313 4.42349 17.3714 4.46242 17.5993H13.0254C12.972 17.0274 13.0026 16.429 13.1182 15.8201C13.165 15.5735 13.1884 15.4502 13.2683 15.3659C13.3482 15.2815 13.5456 15.2217 13.9405 15.102C14.2925 14.9953 14.6248 14.8211 14.9658 14.6425C15.5655 14.3282 16.1919 14 16.9992 14C17.8066 14 18.4334 14.3282 19.0334 14.6425C19.343 14.8046 19.6455 14.963 19.9619 15.0707L20.8221 9.93557C21.0113 8.8063 21.1059 8.24167 20.8146 7.87083C20.5234 7.5 19.9853 7.5 18.9092 7.5H5.09079C4.01468 7.5 3.47662 7.5 3.18537 7.87083C2.89411 8.24167 2.98869 8.8063 3.17786 9.93557Z',
  d6: 'M12 3.25C9.79086 3.25 8 5.04086 8 7.25V7.75C8 8.30228 7.55228 8.75 7 8.75C6.44772 8.75 6 8.30228 6 7.75V7.25C6 3.93629 8.68629 1.25 12 1.25C15.3137 1.25 18 3.93629 18 7.25V7.75C18 8.30228 17.5523 8.75 17 8.75C16.4477 8.75 16 8.30228 16 7.75V7.25C16 5.04086 14.2091 3.25 12 3.25Z',
  d7: 'M15.028 13.7677C15.5535 13.5091 16.1975 13.25 16.9993 13.25C17.8011 13.25 18.4453 13.5091 18.971 13.7676C19.1494 13.8554 19.3038 13.9363 19.4442 14.0099C19.7544 14.1725 19.996 14.2991 20.2769 14.3842C20.4566 14.4387 20.6443 14.4955 20.7752 14.5442C20.8874 14.586 21.106 14.6705 21.2761 14.85C21.426 15.0083 21.4969 15.1817 21.5373 15.3162C21.5707 15.4272 21.5988 15.5758 21.6186 15.6802C22.1761 18.6167 20.9481 21.456 17.9354 22.5518C17.6623 22.6513 17.3912 22.75 17.0007 22.75C16.6102 22.75 16.3391 22.6513 16.0659 22.5518C13.0533 21.4561 11.824 18.617 12.3814 15.6802C12.4012 15.5758 12.4293 15.4273 12.4626 15.3163C12.503 15.1818 12.5739 15.0084 12.7238 14.8501C12.8939 14.6706 13.1124 14.5861 13.2247 14.5443C13.3556 14.4956 13.5432 14.4387 13.723 14.3842C14.0037 14.2991 14.245 14.1726 14.555 14.01C14.6953 13.9364 14.8496 13.8555 15.028 13.7677Z',
  d8: 'M3.73122 6.80485C4.09347 6.74988 4.54569 6.74994 5.03918 6.75H18.9608C19.4543 6.74994 19.9065 6.74988 20.2688 6.80485C20.6709 6.86589 21.0939 7.01213 21.4045 7.40759C21.7075 7.79348 21.7616 8.2371 21.7481 8.64362C21.7356 9.02281 21.6576 9.48825 21.5697 10.0124L21.1767 12.3587C21.1203 12.6953 21.0921 12.8636 20.9592 12.9326C20.8263 13.0016 20.6745 12.9289 20.3711 12.7833C20.0747 12.6412 19.7697 12.4918 19.6332 12.4217C19.0264 12.1232 18.1381 11.75 16.9994 11.75C15.8606 11.75 14.9725 12.1232 14.3658 12.4218C14.1701 12.5182 14.0015 12.6066 13.8628 12.6793C13.6455 12.7836 13.1068 13.0223 12.6902 13.1427C12.546 13.1961 12.0507 13.3796 11.6349 13.8186C11.265 14.2092 11.1041 14.6255 11.0262 14.8847C10.9692 15.0743 10.9253 15.3077 10.9077 15.4013C10.8738 15.5803 10.8454 15.7595 10.8226 15.9387C10.7877 16.2131 10.7702 16.3502 10.6852 16.4251C10.6002 16.5 10.4686 16.5 10.2055 16.5H4.02491C3.78234 16.5 3.66106 16.5 3.57716 16.429C3.49326 16.358 3.47323 16.2384 3.43315 15.9991L2.43027 10.0123C2.34242 9.48822 2.26442 9.02282 2.25186 8.64362C2.2384 8.2371 2.29245 7.79348 2.59554 7.40759C2.90613 7.01213 3.32906 6.86589 3.73122 6.80485Z',
  d9: 'M10.9918 18.9881C10.9311 18.7472 10.9007 18.6267 10.8194 18.5633C10.7381 18.5 10.6207 18.5 10.3859 18.5H4.58218C4.24491 18.5 4.07627 18.5 3.98621 18.6119C3.89614 18.7239 3.9315 18.8852 4.0022 19.2079C4.05928 19.4683 4.11886 19.7096 4.18349 19.9321C4.40733 20.703 4.7155 21.3411 5.26868 21.8348C5.82696 22.3331 6.48525 22.5511 7.25514 22.6529C7.98918 22.7501 8.90541 22.75 10.028 22.75H11.6748C12.3566 22.75 12.6974 22.75 12.7803 22.584C12.8632 22.418 12.6407 22.1221 12.1957 21.5305C11.6234 20.7694 11.2232 19.9054 10.9918 18.9881Z',
  d10: 'M10.992 18.9881C10.9313 18.7472 10.9009 18.6267 10.8196 18.5633C10.7383 18.5 10.6209 18.5 10.3861 18.5H4.58238C4.2451 18.5 4.07647 18.5 3.9864 18.6119C3.89634 18.7239 3.93169 18.8852 4.0024 19.2079C4.05947 19.4683 4.11906 19.7096 4.18369 19.9321C4.40753 20.703 4.71569 21.3411 5.26888 21.8348C5.82716 22.3331 6.48545 22.5511 7.25533 22.6529C7.98938 22.7501 8.90561 22.75 10.0282 22.75H11.675C12.3568 22.75 12.6976 22.75 12.7805 22.584C12.8634 22.418 12.6409 22.1221 12.1959 21.5305C11.6235 20.7694 11.2234 19.9054 10.992 18.9881Z',
  d11: 'M17.5 7.50171C17.5 4.46414 15.0376 2.00171 12 2.00171C8.96243 2.00171 6.5 4.46414 6.5 7.50171',
  d12: 'M4.5 17.5017H9.5',
  d13: 'M10.5169 21.9982H5.04591L2.49918 7.51345C2.4981 7.50733 2.50281 7.50171 2.50903 7.50171H21.49C21.4963 7.50171 21.501 7.50736 21.4999 7.5135L20.704 11.995',
  d14: 'M16.392 14.0194C15.0132 14.0987 13.9042 15.2658 12.6852 15.2245C12.3603 16.3762 12.1817 19.1238 14.1825 20.8831C14.6931 21.332 15.748 21.923 16.4785 21.998C17.2148 21.9306 18.4693 21.2569 18.8347 20.8726C19.4902 20.1833 21.0627 18.7926 20.3189 15.2233C18.9724 15.2603 17.8791 13.9337 16.392 14.0194Z',
  d15: 'M15.8021 13.9119C16.3588 13.6233 17.0786 13.25 17.9999 13.25C18.9251 13.25 19.6456 13.6239 20.203 13.9132L20.2418 13.9333C20.8366 14.2417 21.2583 14.448 21.7835 14.448H22.3706L22.5115 15.0171C22.9716 16.8747 22.7532 18.6232 21.9624 20.01C21.1693 21.4011 19.8272 22.3781 18.1497 22.7195L17.9999 22.75L17.8501 22.7195C16.1725 22.3781 14.8305 21.4011 14.0374 20.01C13.2467 18.6232 13.0282 16.8747 13.4883 15.0171L13.6292 14.448H14.2163C14.7427 14.448 15.1662 14.2413 15.7611 13.9332L15.8021 13.9119Z',
  d16: 'M11.5 1.25C8.25021 1.25 5.55745 3.63491 5.07645 6.75H2.00001C1.77881 6.75 1.56889 6.84764 1.42639 7.01682C1.28389 7.186 1.22333 7.40945 1.26091 7.62743L2.79066 16.5H11.7596C11.7879 15.8932 11.8787 15.2759 12.0321 14.6565L12.4552 12.948H14.2162C14.3248 12.948 14.5238 12.8846 15.158 12.5561C15.7137 12.2674 16.7095 11.75 17.9997 11.75C19.294 11.75 20.2906 12.2682 20.8475 12.5578C20.8604 12.5644 20.8731 12.571 20.8856 12.5775L21.7391 7.62743C21.7767 7.40945 21.7161 7.186 21.5736 7.01682C21.4311 6.84764 21.2212 6.75 21 6.75H17.9236C17.4425 3.63491 14.7498 1.25 11.5 1.25ZM11.5 3.25C9.35841 3.25 7.56624 4.74601 7.11151 6.75H15.8885C15.4338 4.74601 13.6416 3.25 11.5 3.25Z',
  d17: 'M11.9022 18.5C12.0588 19.2966 12.3361 20.055 12.7341 20.753C13.1771 21.53 13.754 22.203 14.4374 22.75H3.86825L3.13549 18.5H11.9022Z',
} as const;

export const IconShoppingBasketSecure02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-02-stroke-rounded IconShoppingBasketSecure02StrokeRounded"
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

export const IconShoppingBasketSecure02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-02-duotone-rounded IconShoppingBasketSecure02DuotoneRounded"
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

export const IconShoppingBasketSecure02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-02-twotone-rounded IconShoppingBasketSecure02TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketSecure02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-02-solid-rounded IconShoppingBasketSecure02SolidRounded"
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

export const IconShoppingBasketSecure02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-02-bulk-rounded IconShoppingBasketSecure02BulkRounded"
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

export const IconShoppingBasketSecure02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-02-stroke-sharp IconShoppingBasketSecure02StrokeSharp"
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

export const IconShoppingBasketSecure02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-02-solid-sharp IconShoppingBasketSecure02SolidSharp"
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

export const iconPackOfShoppingBasketSecure02: TheIconSelfPack = {
  name: 'ShoppingBasketSecure02',
  StrokeRounded: IconShoppingBasketSecure02StrokeRounded,
  DuotoneRounded: IconShoppingBasketSecure02DuotoneRounded,
  TwotoneRounded: IconShoppingBasketSecure02TwotoneRounded,
  SolidRounded: IconShoppingBasketSecure02SolidRounded,
  BulkRounded: IconShoppingBasketSecure02BulkRounded,
  StrokeSharp: IconShoppingBasketSecure02StrokeSharp,
  SolidSharp: IconShoppingBasketSecure02SolidSharp,
};