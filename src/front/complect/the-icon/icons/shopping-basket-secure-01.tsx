import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L21.0524 11.5',
  d2: 'M16.9992 14C15.7328 14 14.9117 14.8076 13.9405 15.102C13.5456 15.2217 13.3482 15.2815 13.2683 15.3659C13.1884 15.4502 13.165 15.5735 13.1182 15.8201C12.6174 18.4584 13.712 20.8976 16.3222 21.847C16.6027 21.949 16.7429 22 17.0006 22C17.2583 22 17.3986 21.949 17.679 21.847C20.2891 20.8976 21.3826 18.4584 20.8817 15.8201C20.8349 15.5735 20.8114 15.4502 20.7315 15.3658C20.6516 15.2814 20.4542 15.2216 20.0593 15.102C19.0878 14.8077 18.2657 14 16.9992 14Z',
  d3: 'M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5',
  d4: 'M2.66933 9.83981L3.87289 17.0194C4.27181 19.3991 4.47127 20.5889 5.28565 21.2945C6.10003 22 7.27396 22 9.62182 22H14.3782C15.301 22 16.0425 22 16.652 21.9572C16.5552 21.9317 16.4543 21.895 16.3222 21.847C13.712 20.8976 12.6174 18.4584 13.1182 15.8201C13.165 15.5735 13.1884 15.4502 13.2683 15.3659C13.3482 15.2815 13.5456 15.2217 13.9405 15.102C14.2925 14.9953 14.6248 14.8211 14.9658 14.6425C15.5655 14.3282 16.1919 14 16.9992 14C17.8066 14 18.4334 14.3282 19.0334 14.6425C19.3746 14.8211 19.7072 14.9953 20.0593 15.102C20.2098 15.1476 20.3316 15.1845 20.4292 15.2174L21.3307 9.83981C21.5126 8.75428 21.6036 8.21152 21.3123 7.85576C21.0209 7.5 20.4854 7.5 19.4144 7.5H4.58564C3.51461 7.5 2.9791 7.5 2.68773 7.85576C2.39637 8.21152 2.48735 8.75428 2.66933 9.83981Z',
  d5: 'M4.53543 6.75C4.04322 6.74994 3.59476 6.74989 3.23581 6.80237C2.84115 6.86006 2.42076 6.99805 2.10749 7.38055C1.79764 7.75888 1.73988 8.19716 1.75133 8.59566C1.76191 8.96382 1.83748 9.41439 1.92161 9.91593L3.1412 17.1911C3.33385 18.3404 3.48969 19.2701 3.70412 19.997C3.92692 20.7522 4.23682 21.3781 4.79455 21.8613C5.35455 22.3465 6.01361 22.5572 6.78342 22.6557C7.51991 22.75 8.44034 22.75 9.57149 22.75H11.6748C12.3566 22.75 12.6974 22.75 12.7803 22.584C12.8632 22.418 12.6406 22.1221 12.1956 21.5303C10.9092 19.8197 10.4927 17.5892 10.9077 15.4013C10.9253 15.3077 10.9692 15.0743 11.0262 14.8847C11.1041 14.6255 11.265 14.2092 11.6349 13.8186C12.0507 13.3796 12.546 13.1961 12.6902 13.1427C12.8516 13.0826 13.0849 13.0104 13.2467 12.9612C13.2675 12.9549 13.278 12.9517 13.288 12.9479C13.298 12.944 13.3078 12.9394 13.3274 12.9303L13.8628 12.6793C14.0015 12.6066 14.1701 12.5182 14.3658 12.4218C14.9725 12.1232 15.8606 11.75 16.9994 11.75C18.1381 11.75 19.0264 12.1232 19.6332 12.4217C19.8289 12.5179 19.9975 12.6063 20.1363 12.679C20.4695 12.8537 20.6141 12.919 20.736 12.9559C20.7631 12.9642 20.7985 12.9759 20.8393 12.99C21.1594 13.101 21.3195 13.1565 21.4392 13.0854C21.559 13.0143 21.5863 12.8515 21.6409 12.5258L22.0784 9.9159C22.1625 9.41437 22.2381 8.96381 22.2487 8.59566C22.2601 8.19716 22.2023 7.75888 21.8925 7.38056C21.5792 6.99805 21.1588 6.86006 20.7642 6.80237C20.4052 6.74989 19.9568 6.74994 19.4646 6.75H4.53543Z',
  d6: 'M15.028 13.7677C15.5535 13.5091 16.1975 13.25 16.9993 13.25C17.8011 13.25 18.4453 13.5091 18.971 13.7676C19.1494 13.8554 19.3038 13.9363 19.4442 14.0099C19.7544 14.1725 19.996 14.2991 20.2769 14.3842C20.4566 14.4387 20.6443 14.4955 20.7752 14.5442C20.8874 14.586 21.106 14.6705 21.2761 14.85C21.426 15.0083 21.4969 15.1817 21.5373 15.3162C21.5707 15.4272 21.5988 15.5758 21.6186 15.6802C22.1761 18.6167 20.9481 21.456 17.9354 22.5518C17.6623 22.6513 17.3912 22.75 17.0007 22.75C16.6102 22.75 16.3391 22.6513 16.0659 22.5518C13.0533 21.4561 11.824 18.617 12.3814 15.6802C12.4012 15.5758 12.4293 15.4273 12.4626 15.3163C12.503 15.1818 12.5739 15.0084 12.7238 14.8501C12.8939 14.6706 13.1124 14.5861 13.2247 14.5443C13.3556 14.4956 13.5432 14.4387 13.723 14.3842C14.0037 14.2991 14.245 14.1726 14.555 14.01C14.6953 13.9364 14.8496 13.8555 15.028 13.7677Z',
  d7: 'M12 3.25C9.79086 3.25 8 5.04086 8 7.25V7.75C8 8.30228 7.55228 8.75 7 8.75C6.44772 8.75 6 8.30228 6 7.75V7.25C6 3.93629 8.68629 1.25 12 1.25C15.3137 1.25 18 3.93629 18 7.25V7.75C18 8.30228 17.5523 8.75 17 8.75C16.4477 8.75 16 8.30228 16 7.75V7.25C16 5.04086 14.2091 3.25 12 3.25Z',
  d8: 'M17.499 7.50431C17.499 4.46369 15.0366 1.99878 11.999 1.99878C8.96145 1.99878 6.49902 4.46369 6.49902 7.50431',
  d9: 'M11.9856 22.0011H5.04591L2.49918 7.51638C2.4981 7.51026 2.50281 7.50464 2.50903 7.50464H21.49C21.4963 7.50464 21.501 7.51029 21.4999 7.51643L20.704 11.9979',
  d10: 'M16.891 14.0213C15.5122 14.1007 14.4033 15.2678 13.1842 15.2264C12.8594 16.3782 12.6807 19.1257 14.6816 20.885C15.1921 21.3339 16.247 21.9249 16.9775 22C17.7138 21.9325 18.9683 21.2588 19.3337 20.8746C19.9892 20.1852 21.5617 18.7946 20.818 15.2252C19.4714 15.2623 18.3782 13.9357 16.891 14.0213Z',
  d11: 'M11.5 3.25C9.01472 3.25 7 5.26472 7 7.75H5C5 4.16015 7.91015 1.25 11.5 1.25C15.0899 1.25 18 4.16015 18 7.75H16C16 5.26472 13.9853 3.25 11.5 3.25Z',
  d12: 'M15.8021 13.9119C16.3588 13.6233 17.0786 13.25 17.9999 13.25C18.9251 13.25 19.6456 13.6239 20.203 13.9132L20.2418 13.9333C20.8366 14.2417 21.2583 14.448 21.7835 14.448H22.3706L22.5115 15.0171C22.9716 16.8747 22.7532 18.6232 21.9624 20.01C21.1693 21.4011 19.8272 22.3781 18.1497 22.7195L17.9999 22.75L17.8501 22.7195C16.1725 22.3781 14.8305 21.4011 14.0374 20.01C13.2467 18.6232 13.0282 16.8747 13.4883 15.0171L13.6292 14.448H14.2163C14.7427 14.448 15.1662 14.2413 15.7611 13.9332L15.8021 13.9119Z',
  d13: 'M2.00098 6.75C1.77979 6.75 1.56987 6.84764 1.42737 7.01682C1.28486 7.186 1.2243 7.40945 1.26189 7.62743L3.86923 22.75H14.4384C13.755 22.203 13.1781 21.53 12.7351 20.753C11.7284 18.9874 11.4934 16.8355 12.0331 14.6565L12.4562 12.948H14.2171C14.3258 12.948 14.5248 12.8846 15.159 12.5561C15.7147 12.2674 16.7105 11.75 18.0007 11.75C19.295 11.75 20.2916 12.2682 20.8485 12.5578C20.8614 12.5644 20.8741 12.571 20.8866 12.5775L21.7401 7.62743C21.7777 7.40945 21.7171 7.186 21.5746 7.01682C21.4321 6.84764 21.2222 6.75 21.001 6.75H2.00098Z',
} as const;

export const IconShoppingBasketSecure01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-01-stroke-rounded IconShoppingBasketSecure01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconShoppingBasketSecure01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-01-duotone-rounded IconShoppingBasketSecure01DuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconShoppingBasketSecure01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-01-twotone-rounded IconShoppingBasketSecure01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconShoppingBasketSecure01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-01-solid-rounded IconShoppingBasketSecure01SolidRounded"
    >
      <path 
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

export const IconShoppingBasketSecure01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-01-bulk-rounded IconShoppingBasketSecure01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconShoppingBasketSecure01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-01-stroke-sharp IconShoppingBasketSecure01StrokeSharp"
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

export const IconShoppingBasketSecure01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="shopping-basket-secure-01-solid-sharp IconShoppingBasketSecure01SolidSharp"
    >
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfShoppingBasketSecure01: TheIconSelfPack = {
  name: 'ShoppingBasketSecure01',
  StrokeRounded: IconShoppingBasketSecure01StrokeRounded,
  DuotoneRounded: IconShoppingBasketSecure01DuotoneRounded,
  TwotoneRounded: IconShoppingBasketSecure01TwotoneRounded,
  SolidRounded: IconShoppingBasketSecure01SolidRounded,
  BulkRounded: IconShoppingBasketSecure01BulkRounded,
  StrokeSharp: IconShoppingBasketSecure01StrokeSharp,
  SolidSharp: IconShoppingBasketSecure01SolidSharp,
};