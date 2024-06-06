import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 16L4 22M10 22L4 16',
  d2: 'M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z',
  d3: 'M3 12.5V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C14.3572 21.7419 13.6846 21.666 13 21.5762',
  d4: 'M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044',
  d5: 'M3 6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C12.4235 21.553 9.53623 21.1109 6.78937 20.3687C5.08923 19.9093 4.23916 19.6796 3.61958 18.8663C3 18.0531 3 17.0558 3 15.0614V6ZM16.5 16.5C15.6716 16.5 15 15.8284 15 15C15 14.1716 15.6716 13.5 16.5 13.5C17.3284 13.5 18 14.1716 18 15C18 15.8284 17.3284 16.5 16.5 16.5Z',
  d6: 'M2.25 5.77614C2.25 4.556 3.01861 3.38901 4.28749 3.01245C6.23972 2.4331 9.79412 1.58254 14.6683 1.16863C15.4925 1.09642 16.9266 0.970784 17.887 2.14128C18.5913 2.99967 18.7554 4.17689 18.7499 5.16205C18.7469 5.67955 18.6965 6.19671 18.6217 6.67504C18.5772 6.95936 18.5549 7.10152 18.6163 7.19734C18.6777 7.29316 18.8205 7.33356 19.1061 7.41436C19.751 7.5968 20.3097 7.87644 20.7429 8.34366C21.2987 8.94312 21.5334 9.69115 21.6434 10.5743C21.75 11.4308 21.75 12.5211 21.75 13.88V16.0044C21.75 17.398 21.75 18.5269 21.619 19.4161C21.4818 20.3471 21.1878 21.1219 20.5222 21.7301C19.864 22.3316 19.0973 22.5602 18.1943 22.6135C17.342 22.6639 16.2263 22.5549 14.9379 22.4289C14.3279 22.3693 13.7007 22.2993 13.0619 22.2172C12.8096 22.1849 12.6835 22.1687 12.6111 22.0961C12.5387 22.0236 12.5191 21.8693 12.4801 21.5609C12.4129 21.0301 12.1754 20.5166 11.7678 20.1089L10.9598 19.301C10.7598 19.101 10.6598 19.001 10.6598 18.8767C10.6598 18.7524 10.7598 18.6524 10.9598 18.4524L11.7678 17.6445C12.7441 16.6682 12.7441 15.0853 11.7678 14.1089C10.7915 13.1326 9.20854 13.1326 8.23223 14.1089L7.42426 14.9169C7.22426 15.1169 7.12426 15.2169 7 15.2169C6.87574 15.2169 6.77574 15.1169 6.57574 14.9169L5.76777 14.1089C5.1501 13.4913 4.28963 13.2644 3.49359 13.4283C2.81181 13.5686 2.47091 13.6388 2.36046 13.5487C2.25 13.4587 2.25 13.1934 2.25 12.6627V5.77614ZM15.8415 3.02636C15.558 2.98142 15.2217 3.0034 14.7412 3.04421C10.0184 3.44528 6.69586 4.2587 4.85808 4.80409C4.77599 4.82845 4.69674 4.86641 4.6233 4.91634C4.45209 5.03275 4.36649 5.09095 4.40399 5.28491C4.44149 5.47887 4.58675 5.51061 4.87727 5.57411C7.22733 6.08772 10.8417 6.63928 15.0559 6.9313C15.4049 6.95548 15.7397 6.97867 16.0591 7.0024C16.3108 7.0211 16.4367 7.03046 16.5281 6.95899C16.6194 6.88753 16.6397 6.76878 16.6803 6.53129C16.7549 6.09453 16.8064 5.6178 16.809 5.1518C16.8139 4.2894 16.6498 3.65138 16.3657 3.30522C16.2313 3.14134 16.0784 3.06392 15.8415 3.02636ZM16.5 12.875C17.6046 12.875 18.5 13.7704 18.5 14.875C18.5 15.9796 17.6046 16.875 16.5 16.875C15.3954 16.875 14.5 15.9796 14.5 14.875C14.5 13.7704 15.3954 12.875 16.5 12.875Z',
  d7: 'M3.29289 15.1679C3.68342 14.7774 4.31658 14.7774 4.70711 15.1679L7 17.4608L9.29289 15.1679C9.68342 14.7774 10.3166 14.7774 10.7071 15.1679C11.0976 15.5584 11.0976 16.1916 10.7071 16.5821L8.41421 18.875L10.7071 21.1679C11.0976 21.5584 11.0976 22.1916 10.7071 22.5821C10.3166 22.9726 9.68342 22.9726 9.29289 22.5821L7 20.2892L4.70711 22.5821C4.31658 22.9726 3.68342 22.9726 3.29289 22.5821C2.90237 22.1916 2.90237 21.5584 3.29289 21.1679L5.58579 18.875L3.29289 16.5821C2.90237 16.1916 2.90237 15.5584 3.29289 15.1679Z',
  d8: 'M4.28749 3.01245C3.01861 3.38901 2.25 4.556 2.25 5.77614V12.6627C2.25 13.1934 2.25 13.4587 2.36046 13.5487C2.47091 13.6388 2.81181 13.5686 3.49359 13.4283C4.28963 13.2644 5.1501 13.4913 5.76777 14.1089L6.57574 14.9169C6.77574 15.1169 6.87574 15.2169 7 15.2169C7.12426 15.2169 7.22426 15.1169 7.42426 14.9169L8.23223 14.1089C9.20854 13.1326 10.7915 13.1326 11.7678 14.1089C12.7441 15.0853 12.7441 16.6682 11.7678 17.6445L10.9598 18.4524C10.7598 18.6524 10.6598 18.7524 10.6598 18.8767C10.6598 19.001 10.7598 19.101 10.9598 19.301L11.7678 20.1089C12.1754 20.5166 12.4129 21.0301 12.4801 21.5609C12.5191 21.8693 12.5387 22.0236 12.6111 22.0961C12.6835 22.1687 12.8096 22.1849 13.0619 22.2172C13.7007 22.2993 14.3279 22.3693 14.9379 22.4289C16.2263 22.5549 17.342 22.6639 18.1943 22.6135C19.0973 22.5602 19.864 22.3316 20.5222 21.7301C21.1878 21.1219 21.4818 20.3471 21.619 19.4161C21.75 18.5269 21.75 17.398 21.75 16.0044V13.88C21.75 12.5211 21.75 11.4308 21.6434 10.5743C21.5334 9.69115 21.2987 8.94312 20.7429 8.34366C20.3097 7.87644 19.751 7.5968 19.1061 7.41436C18.8205 7.33356 18.6777 7.29316 18.6163 7.19734C18.5549 7.10152 18.5772 6.95936 18.6217 6.67504C18.6965 6.19671 18.7469 5.67955 18.7499 5.16205C18.7554 4.17689 18.5913 2.99967 17.887 2.14128C16.9266 0.970784 15.4925 1.09642 14.6683 1.16863C9.79412 1.58254 6.23972 2.4331 4.28749 3.01245ZM14.7412 3.04421C15.2217 3.0034 15.558 2.98142 15.8415 3.02636C16.0784 3.06392 16.2313 3.14134 16.3657 3.30522C16.6498 3.65138 16.8139 4.2894 16.809 5.1518C16.8064 5.6178 16.7549 6.09453 16.6803 6.53129C16.6397 6.76878 16.6194 6.88753 16.5281 6.95899C16.4367 7.03046 16.3108 7.0211 16.0591 7.0024C15.7397 6.97867 15.4049 6.95548 15.0559 6.9313C10.8417 6.63928 7.22733 6.08772 4.87727 5.57411C4.58675 5.51061 4.44149 5.47887 4.40399 5.28491C4.36649 5.09095 4.45209 5.03275 4.6233 4.91634C4.69674 4.86641 4.77599 4.82845 4.85808 4.80409C6.69586 4.2587 10.0184 3.44528 14.7412 3.04421Z',
  d9: 'M18.5 14.875C18.5 13.7704 17.6046 12.875 16.5 12.875C15.3954 12.875 14.5 13.7704 14.5 14.875C14.5 15.9796 15.3954 16.875 16.5 16.875C17.6046 16.875 18.5 15.9796 18.5 14.875Z',
  d10: 'M3 6C5.1047 6.62133 11.5 8.00002 21 8.00002V22C18.4978 22 16.1873 22 14 21.863M3 6V12M3 6C3 6 7 2 18 2V7.67118',
  d11: 'M3.66444 13.2145L2.25 14.6289V5.68934C3.78186 4.48481 4.8484 3.82901 6.08396 3.30877C8.55715 2.26743 12.4068 1.25 18 1.25H18.75V7.22374C19.4788 7.24087 20.229 7.25002 21 7.25002H21.75V22.75H20.9037H20.9036C17.2563 22.75 13.9572 22.7501 10.8232 22.2984L11.7858 21.3358L9.49287 19.0429L11.7858 16.75L8.25023 13.2145L5.95733 15.5074L3.66444 13.2145ZM6.69552 5.29514C6.25735 5.48156 5.87153 5.66708 5.53516 5.84406C7.967 6.3476 11.7968 6.9327 16.7798 7.15647V3.39374C12.0235 3.50529 8.76617 4.41414 6.69552 5.29514ZM16.5 13C17.6046 13 18.5 13.8954 18.5 15C18.5 16.1046 17.6046 17 16.5 17C15.3954 17 14.5 16.1046 14.5 15C14.5 13.8954 15.3954 13 16.5 13Z',
  d12: 'M7.37156 19.043L9.66446 21.3359L8.25024 22.7502L5.95735 20.4573L3.66446 22.7502L2.25024 21.3359L4.54314 19.043L2.25024 16.7502L3.66446 15.3359L5.95735 17.6288L8.25024 15.3359L9.66446 16.7502L7.37156 19.043Z',
};

export const IconWalletRemove02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-02-stroke-rounded IconWalletRemove02StrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletRemove02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-02-duotone-rounded IconWalletRemove02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletRemove02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-02-twotone-rounded IconWalletRemove02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletRemove02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-02-solid-rounded IconWalletRemove02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconWalletRemove02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-02-bulk-rounded IconWalletRemove02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletRemove02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-02-stroke-sharp IconWalletRemove02StrokeSharp"
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletRemove02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-02-solid-sharp IconWalletRemove02SolidSharp"
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

export const iconPackOfWalletRemove02: TheIconSelfPack = {
  name: 'WalletRemove02',
  StrokeRounded: IconWalletRemove02StrokeRounded,
  DuotoneRounded: IconWalletRemove02DuotoneRounded,
  TwotoneRounded: IconWalletRemove02TwotoneRounded,
  SolidRounded: IconWalletRemove02SolidRounded,
  BulkRounded: IconWalletRemove02BulkRounded,
  StrokeSharp: IconWalletRemove02StrokeSharp,
  SolidSharp: IconWalletRemove02SolidSharp,
};