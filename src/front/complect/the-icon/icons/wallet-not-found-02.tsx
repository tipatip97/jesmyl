import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6.78937 6.833C5.17978 6.55311 3.88205 6.26039 3 6V15.0614C3 17.0558 3 18.0531 3.61958 18.8663C4.23916 19.6796 5.08923 19.9093 6.78937 20.3687C9.53623 21.1109 12.4235 21.553 15.0106 21.8058C17.6919 22.0677 19.0325 22.1987 20.0163 21.2998C20.2149 21.1182 20.3735 20.9144 20.5 20.681',
  d2: 'M11 7.5C12.2539 7.64451 13.5967 7.70543 15.0038 7.80293C17.9252 8.00537 19.3859 8.10658 20.1929 8.977C21 9.84742 21 11.2499 21 14.0547V16.0684C21 16.3972 21 16.7073 20.9985 17',
  d3: 'M3 6C3 5.16216 3.38491 4.39699 4 4',
  d4: 'M17.6264 8C18.0035 6.57668 18.3447 3.98809 17.3281 2.70275C16.685 1.8895 15.7281 1.96617 14.7873 2.04906C11.5661 2.33285 8.96217 2.80766 7 3.2701',
  d5: 'M2 2L22 22',
  d6: 'M6.78937 20.3687C9.53623 21.1109 12.4235 21.553 15.0106 21.8058C17.6919 22.0677 19.0325 22.1987 20.0163 21.2998C20.2149 21.1182 20.3735 20.9144 20.5 20.681L6.78937 6.833C5.17978 6.55311 3.88205 6.26039 3 6V15.0614C3 17.0558 3 18.0531 3.61958 18.8663C4.23916 19.6796 5.08923 19.9093 6.78937 20.3687Z',
  d7: 'M11 7.49988C12.2539 7.64439 13.5967 7.70531 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 16.3971 21 16.7071 20.9985 16.9999M7 3.2701C8.96217 2.80766 11.5661 2.33285 14.7873 2.04906C15.7281 1.96617 16.685 1.8895 17.3281 2.70275C18.3447 3.98809 18.0035 6.57668 17.6264 8',
  d8: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d9: 'M14.6683 1.29363C15.4925 1.22142 16.9266 1.09578 17.887 2.26628C18.5913 3.12467 18.7554 4.30189 18.7499 5.28705C18.7469 5.80455 18.6965 6.32171 18.6217 6.80004C18.5772 7.08436 18.5549 7.22652 18.6163 7.32234C18.6777 7.41816 18.8205 7.45856 19.1061 7.53936C19.751 7.7218 20.3097 8.00144 20.7429 8.46866C21.2987 9.06812 21.5334 9.81615 21.6434 10.6993C21.75 11.5558 21.75 12.6461 21.75 14.005V16.1316C21.75 16.367 21.75 16.5947 21.7494 16.8151C21.7477 17.3978 21.7469 17.6892 21.5619 17.7655C21.3768 17.8418 21.1691 17.6341 20.7535 17.2185L11.3487 7.8137C10.8348 7.29982 10.5779 7.04288 10.6693 6.85146C10.7607 6.66004 11.1241 6.6986 11.851 6.7757C12.8692 6.88372 13.9416 6.97908 15.0559 7.0563C15.4049 7.08048 15.7397 7.10367 16.0591 7.1274C16.3108 7.1461 16.4367 7.15546 16.5281 7.08399C16.6194 7.01253 16.6397 6.89378 16.6803 6.65629C16.7549 6.21953 16.8064 5.7428 16.809 5.2768C16.8139 4.4144 16.6498 3.77638 16.3657 3.43022C16.2313 3.26634 16.0784 3.18892 15.8415 3.15136C15.558 3.10642 15.2217 3.1284 14.7412 3.16921C12.0528 3.39752 9.81812 3.75944 8.05276 4.12947C7.89511 4.16252 7.81629 4.17904 7.74348 4.15736C7.67068 4.13569 7.61418 4.07919 7.5012 3.96621L6.92448 3.38949C6.58881 3.05382 6.42097 2.88598 6.47107 2.71522C6.52117 2.54446 6.75084 2.49441 7.21016 2.3943C9.14767 1.97202 11.6559 1.54944 14.6683 1.29363Z',
  d10: 'M20.5222 21.8551C19.864 22.4566 19.0973 22.6852 18.1943 22.7385C17.342 22.7889 16.2263 22.6799 14.9379 22.5539C12.3234 22.2985 9.39248 21.8507 6.59374 21.0945C5.06493 20.6825 3.79914 20.3414 3.02298 19.3226C2.61028 18.7808 2.42217 18.1908 2.33362 17.5045C2.24996 16.8561 2.24998 16.0675 2.25 15.1109V5.90114C2.25 5.1212 2.56406 4.36298 3.12209 3.81905C3.27458 3.6704 3.35083 3.59608 3.47397 3.59687C3.59711 3.59765 3.68344 3.68399 3.8561 3.85665L20.7908 20.7914C20.9519 20.9524 21.0324 21.033 21.0389 21.1473C21.0453 21.2617 20.9827 21.3402 20.8574 21.4972C20.7577 21.6223 20.6464 21.7416 20.5222 21.8551Z',
  d11: 'M14.6688 1.29363C15.493 1.22142 16.9271 1.09578 17.8875 2.26628C18.5918 3.12467 18.756 4.30189 18.7504 5.28705C18.7475 5.80455 18.6971 6.32171 18.6222 6.80004C18.5777 7.08436 18.5554 7.22652 18.6169 7.32234C18.6783 7.41816 18.8211 7.45856 19.1067 7.53936C19.7516 7.7218 20.3102 8.00144 20.7434 8.46866C21.2993 9.06812 21.5339 9.81615 21.6439 10.6993C21.7506 11.5558 21.7506 12.6461 21.7505 14.005V16.1316C21.7505 16.367 21.7505 16.5947 21.7499 16.8151C21.7482 17.3978 21.7474 17.6892 21.5624 17.7655C21.3774 17.8418 21.1696 17.6341 20.7541 17.2185L11.3492 7.8137C10.8353 7.29982 10.5784 7.04288 10.6698 6.85146C10.7612 6.66004 11.1247 6.6986 11.8515 6.7757C12.8697 6.88372 13.9421 6.97908 15.0565 7.0563C15.4054 7.08048 15.7402 7.10367 16.0597 7.1274C16.3114 7.1461 16.4372 7.15546 16.5286 7.08399C16.62 7.01253 16.6402 6.89378 16.6808 6.65629C16.7554 6.21953 16.8069 5.7428 16.8096 5.2768C16.8144 4.4144 16.6503 3.77638 16.3663 3.43022C16.2318 3.26634 16.0789 3.18892 15.842 3.15136C15.5585 3.10642 15.2223 3.1284 14.7417 3.16921C12.0533 3.39752 9.81865 3.75944 8.0533 4.12947C7.89565 4.16252 7.81682 4.17904 7.74402 4.15736C7.67121 4.13569 7.61472 4.07919 7.50174 3.96621L6.92502 3.38949C6.58934 3.05382 6.4215 2.88598 6.47161 2.71522C6.52171 2.54446 6.75137 2.49441 7.2107 2.3943C9.1482 1.97202 11.6565 1.54944 14.6688 1.29363Z',
  d12: 'M20.5222 21.8559C19.864 22.4574 19.0973 22.686 18.1943 22.7393C17.342 22.7897 16.2263 22.6807 14.9379 22.5547C12.3234 22.2993 9.39248 21.8515 6.59374 21.0953C5.06493 20.6833 3.79914 20.3422 3.02298 19.3234C2.61028 18.7816 2.42217 18.1916 2.33362 17.5053C2.24996 16.8569 2.24998 16.0683 2.25 15.1117V5.90194C2.25 5.122 2.56406 4.36378 3.12209 3.81984C3.27458 3.6712 3.35083 3.59688 3.47397 3.59766C3.59711 3.59845 3.68344 3.68478 3.8561 3.85745L20.7908 20.7922C20.9519 20.9532 21.0324 21.0338 21.0389 21.1481C21.0453 21.2625 20.9827 21.341 20.8574 21.498C20.7577 21.6231 20.6464 21.7424 20.5222 21.8559Z',
  d13: 'M2 2.04102L22 21.9501',
  d14: 'M20.9859 20.9339V21.9862C16.1825 22.055 7.6219 21.9162 2.98047 18.9459V6.0618M2.98047 6.0618L6.87591 6.88507M2.98047 6.0618C3.42893 5.64314 4.57364 4.91368 4.79229 4.78564',
  d15: 'M6.97754 3.78353C9.28936 2.88015 14.7785 1.85021 17.9785 2.02029V7.99353M17.9785 7.99353H21.002V17.7998M17.9785 7.99353C16.345 7.9574 12.5838 7.70989 10.5798 7.43236',
  d16: 'M21.3358 22.75L1.25 2.66421L2.66421 1.25L22.75 21.3358L21.3358 22.75Z',
  d17: 'M2.25 19.4452V5.68934C3.00695 5.09414 3.65029 4.63292 4.25654 4.25583L21.75 21.7493V22.75H20.9037C13.9787 22.7501 8.30894 22.7501 2.64086 19.6584L2.25 19.4452Z',
  d18: 'M18 1.25H18.75V7.22374C19.4788 7.24087 20.229 7.25002 21 7.25002H21.75V18.2138L10.1328 6.59659C12.0321 6.83748 14.2583 7.04324 16.7798 7.15647V3.39374C13.0776 3.48057 10.2836 4.05045 8.2505 4.71426L6.62609 3.08985C9.10704 2.12941 12.8 1.25 18 1.25Z',
} as const;

export const IconWalletNotFound02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-02-stroke-rounded IconWalletNotFound02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletNotFound02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-02-duotone-rounded IconWalletNotFound02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletNotFound02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-02-twotone-rounded IconWalletNotFound02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletNotFound02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-02-solid-rounded IconWalletNotFound02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletNotFound02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-02-bulk-rounded IconWalletNotFound02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWalletNotFound02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-02-stroke-sharp IconWalletNotFound02StrokeSharp"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconWalletNotFound02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-02-solid-sharp IconWalletNotFound02SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWalletNotFound02: TheIconSelfPack = {
  name: 'WalletNotFound02',
  StrokeRounded: IconWalletNotFound02StrokeRounded,
  DuotoneRounded: IconWalletNotFound02DuotoneRounded,
  TwotoneRounded: IconWalletNotFound02TwotoneRounded,
  SolidRounded: IconWalletNotFound02SolidRounded,
  BulkRounded: IconWalletNotFound02BulkRounded,
  StrokeSharp: IconWalletNotFound02StrokeSharp,
  SolidSharp: IconWalletNotFound02SolidSharp,
};