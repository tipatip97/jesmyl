import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z',
  d2: 'M15.0038 7.80257C9.57619 7.42647 5.1047 6.62109 3 5.99976V15.0612C3 17.0556 3 18.0528 3.61958 18.8661C4.23916 19.6794 5.08923 19.9091 6.78937 20.3685C9.53623 21.1107 12.4235 21.5527 15.0106 21.8055C17.6919 22.0675 19.0325 22.1985 20.0163 21.2995C21 20.4005 21 18.9564 21 16.068V14.0544C21 11.2495 21 9.84706 20.1929 8.97664C19.3859 8.10622 17.9252 8.005 15.0038 7.80257Z',
  d3: 'M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044',
  d4: 'M3 6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C12.4235 21.553 9.53623 21.1109 6.78937 20.3687C5.08923 19.9093 4.23916 19.6796 3.61958 18.8663C3 18.0531 3 17.0558 3 15.0614V6ZM16.5 16.5C15.6716 16.5 15 15.8284 15 15C15 14.1716 15.6716 13.5 16.5 13.5C17.3284 13.5 18 14.1716 18 15C18 15.8284 17.3284 16.5 16.5 16.5Z',
  d5: 'M4.28749 3.13745C3.01861 3.51401 2.25 4.681 2.25 5.90114V15.1109V15.1109C2.24998 16.0675 2.24996 16.8561 2.33362 17.5045C2.42217 18.1908 2.61028 18.7808 3.02298 19.3226C3.79914 20.3414 5.06493 20.6825 6.59374 21.0945C9.39248 21.8507 12.3234 22.2985 14.9379 22.5539C16.2263 22.6799 17.342 22.7889 18.1943 22.7385C19.0973 22.6852 19.864 22.4566 20.5222 21.8551C21.1878 21.2469 21.4818 20.4721 21.619 19.5411C21.75 18.6519 21.75 17.523 21.75 16.1294V14.005C21.75 12.6461 21.75 11.5558 21.6434 10.6993C21.5334 9.81615 21.2987 9.06812 20.7429 8.46866C20.3097 8.00144 19.751 7.7218 19.1061 7.53936C18.8205 7.45856 18.6777 7.41816 18.6163 7.32234C18.5549 7.22652 18.5772 7.08436 18.6217 6.80004C18.6965 6.32171 18.7469 5.80455 18.7499 5.28705C18.7554 4.30189 18.5913 3.12467 17.887 2.26628C16.9266 1.09578 15.4925 1.22142 14.6683 1.29363C9.79412 1.70754 6.23972 2.5581 4.28749 3.13745ZM14.7412 3.16921C15.2217 3.1284 15.558 3.10642 15.8415 3.15136C16.0784 3.18892 16.2313 3.26634 16.3657 3.43022C16.6498 3.77638 16.8139 4.4144 16.809 5.2768C16.8064 5.7428 16.7549 6.21953 16.6803 6.65629C16.6397 6.89378 16.6194 7.01253 16.5281 7.08399C16.4367 7.15546 16.3108 7.1461 16.0591 7.1274C15.7397 7.10367 15.4049 7.08048 15.0559 7.0563C10.8417 6.76428 7.22733 6.21272 4.87727 5.69911C4.58675 5.63561 4.44149 5.60387 4.40399 5.40991C4.36649 5.21595 4.45209 5.15775 4.6233 5.04134C4.69674 4.99141 4.77599 4.95345 4.85808 4.92909C6.69586 4.3837 10.0184 3.57028 14.7412 3.16921ZM16.5 13C17.6046 13 18.5 13.8954 18.5 15C18.5 16.1046 17.6046 17 16.5 17C15.3954 17 14.5 16.1046 14.5 15C14.5 13.8954 15.3954 13 16.5 13Z',
  d6: 'M2.25 5.90114C2.25 4.681 3.01861 3.51401 4.28749 3.13745C6.23972 2.5581 9.79412 1.70754 14.6683 1.29363C15.4925 1.22142 16.9266 1.09578 17.887 2.26628C18.5913 3.12467 18.7554 4.30189 18.7499 5.28705C18.7469 5.80455 18.6965 6.32171 18.6217 6.80004C18.5772 7.08436 18.5549 7.22652 18.6163 7.32234C18.6777 7.41816 18.8205 7.45856 19.1061 7.53936C19.751 7.7218 20.3097 8.00144 20.7429 8.46866C21.2987 9.06812 21.5334 9.81615 21.6434 10.6993C21.75 11.5558 21.75 12.6461 21.75 14.005V16.1294C21.75 17.523 21.75 18.6519 21.619 19.5411C21.4818 20.4721 21.1878 21.2469 20.5222 21.8551C19.864 22.4566 19.0973 22.6852 18.1943 22.7385C17.342 22.7889 16.2263 22.6799 14.9379 22.5539C12.3234 22.2985 9.39248 21.8507 6.59374 21.0945C5.06493 20.6825 3.79914 20.3414 3.02298 19.3226C2.61028 18.7808 2.42217 18.1908 2.33362 17.5045C2.24996 16.8561 2.24998 16.0675 2.25 15.1109V5.90114ZM15.8415 3.15136C15.558 3.10642 15.2217 3.1284 14.7412 3.16921C10.0184 3.57028 6.69586 4.3837 4.85808 4.92909C4.77599 4.95345 4.69674 4.99141 4.6233 5.04134C4.45209 5.15775 4.36649 5.21595 4.40399 5.40991C4.44149 5.60387 4.58675 5.63561 4.87727 5.69911C7.22733 6.21272 10.8417 6.76428 15.0559 7.0563C15.4049 7.08048 15.7397 7.10367 16.0591 7.1274C16.3108 7.1461 16.4367 7.15546 16.5281 7.08399C16.6194 7.01253 16.6397 6.89378 16.6803 6.65629C16.7549 6.21953 16.8064 5.7428 16.809 5.2768C16.8139 4.4144 16.6498 3.77638 16.3657 3.43022C16.2313 3.26634 16.0784 3.18892 15.8415 3.15136Z',
  d7: 'M18.5 15C18.5 13.8954 17.6046 13 16.5 13C15.3954 13 14.5 13.8954 14.5 15C14.5 16.1046 15.3954 17 16.5 17C17.6046 17 18.5 16.1046 18.5 15Z',
  d8: 'M3 6C5.1047 6.62133 11.5 8.00002 21 8.00002V22C14 22 8.5 22 3 19V6ZM3 6C3 6 7 2 18 2V7.79215',
  d9: 'M2.25 5.68934V19.4452L2.64086 19.6584C8.30894 22.7501 13.9787 22.7501 20.9037 22.75H21.75V7.25002H21C20.229 7.25002 19.4788 7.24087 18.75 7.22374V1.25H18C12.4068 1.25 8.55715 2.26743 6.08396 3.30877C4.8484 3.82901 3.78186 4.48481 2.25 5.68934ZM5.53516 5.84406C5.87153 5.66708 6.25735 5.48156 6.69552 5.29514C8.76617 4.41414 12.0235 3.50529 16.7798 3.39374V7.15647C11.7968 6.9327 7.967 6.3476 5.53516 5.84406ZM16.5 13C17.6046 13 18.5 13.8954 18.5 15C18.5 16.1046 17.6046 17 16.5 17C15.3954 17 14.5 16.1046 14.5 15C14.5 13.8954 15.3954 13 16.5 13Z',
} as const;

export const IconWallet03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-03-stroke-rounded IconWallet03StrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-03-duotone-rounded IconWallet03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-03-twotone-rounded IconWallet03TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-03-solid-rounded IconWallet03SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-03-bulk-rounded IconWallet03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconWallet03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-03-stroke-sharp IconWallet03StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-03-solid-sharp IconWallet03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWallet03: TheIconSelfPack = {
  name: 'Wallet03',
  StrokeRounded: IconWallet03StrokeRounded,
  DuotoneRounded: IconWallet03DuotoneRounded,
  TwotoneRounded: IconWallet03TwotoneRounded,
  SolidRounded: IconWallet03SolidRounded,
  BulkRounded: IconWallet03BulkRounded,
  StrokeSharp: IconWallet03StrokeSharp,
  SolidSharp: IconWallet03SolidSharp,
};