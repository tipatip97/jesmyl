import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.47022 4C3.35691 4.08553 3.24988 4.17937 3.14831 4.28231C2 5.44617 2 7.31938 2 11.0658V13.0526C2 16.7991 2 18.6723 3.14831 19.8361C4.29663 21 6.14481 21 9.84118 21H15.7221C17.8139 21 19.1166 21 20 20.625',
  d2: 'M18.8653 14.5C18.9521 14.2848 19.0001 14.0483 19.0001 13.8C19.0001 12.8059 18.2305 12 17.2813 12C17 12 16.7346 12.0707 16.5002 12.1961',
  d3: 'M18 7C18 6.07003 18 5.60504 17.8978 5.22354C17.6204 4.18827 16.8118 3.37962 15.7765 3.10222C15.395 3 14.93 3 14 3H10C9.05436 3 8.22726 3 7.50024 3.01847M11.2427 7H16C18.8285 7 20.2427 7 21.1214 7.87868C22 8.75736 22 10.1716 22 13V15C22 15.9959 22 16.8164 21.9617 17.5',
  d4: 'M2 2L22 22',
  d5: 'M9.84118 21H15.7221C17.8139 21 19.1166 21 20 20.625L3.47022 4C3.35691 4.08553 3.24988 4.17937 3.14831 4.28231C2 5.44617 2 7.31938 2 11.0658V13.0526C2 16.7991 2 18.6723 3.14831 19.8361C4.29663 21 6.14483 21 9.84118 21Z',
  d6: 'M3.46827 4C3.35496 4.08553 3.24793 4.17937 3.14636 4.28231C1.99805 5.44617 1.99805 7.31938 1.99805 11.0658V13.0526C1.99805 16.7991 1.99805 18.6723 3.14636 19.8361C4.29468 21 6.14286 21 9.83923 21H15.7201C17.8119 21 19.1146 21 19.998 20.625',
  d7: 'M17.9978 7C17.9978 6.07003 17.9978 5.60504 17.8956 5.22354C17.6182 4.18827 16.8096 3.37962 15.7743 3.10222C15.3928 3 14.9278 3 13.9978 3H9.99781C9.05217 3 8.22507 3 7.49805 3.01847M11.2405 7H15.9978C18.8263 7 20.2405 7 21.1192 7.87868C21.9978 8.75736 21.9978 10.1716 21.9978 13V15C21.9978 15.9959 21.9978 16.8164 21.9595 17.5',
  d8: 'M18.8651 14.5C18.9519 14.2848 18.9999 14.0483 18.9999 13.8C18.9999 12.8059 18.2303 12 17.2811 12C16.9998 12 16.7344 12.0707 16.5 12.1961',
  d9: 'M17.9998 7.25C17.9998 6.32003 17.9998 5.85504 17.8976 5.47354C17.6202 4.43827 16.8116 3.62962 15.7763 3.35222C15.3948 3.25 14.9298 3.25 13.9998 3.25H9.99976C9.05412 3.25 8.22702 3.25 7.5 3.26847M11.2425 7.25H15.9998C18.8283 7.25 20.2425 7.25 21.1212 8.12868C21.9998 9.00736 21.9998 10.4216 21.9998 13.25V15.25C21.9998 16.2459 21.9998 17.0664 21.9615 17.75',
  d10: 'M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z',
  d11: 'M18.7077 5.14068C18.7622 5.3437 18.7945 5.55946 18.8136 5.79625C18.8262 5.95212 18.8325 6.03005 18.8602 6.08367C18.8882 6.1377 18.9224 6.17376 18.9748 6.20454C19.0269 6.23509 19.1034 6.24534 19.2563 6.26586C20.1631 6.38748 20.9639 6.65265 21.6051 7.29235C22.2463 7.93206 22.512 8.73099 22.6339 9.63562C22.7501 10.4973 22.75 11.586 22.75 12.9063V14.9938C22.75 16.3141 22.7501 17.4028 22.6339 18.2645C22.6165 18.3936 22.6078 18.4582 22.5776 18.5099C22.5064 18.6321 22.3349 18.69 22.2042 18.6361C22.1488 18.6132 22.0979 18.5624 21.9962 18.4607L18.9319 15.3963C19.2834 15.0359 19.5 14.5432 19.5 14C19.5 12.8954 18.6046 12 17.5 12C16.9568 12 16.4641 12.2166 16.1037 12.5681L10.7099 7.17433C10.2739 6.73841 10.056 6.52045 10.1327 6.33526C10.2094 6.15006 10.5176 6.15006 11.1341 6.15006L16.3659 6.15017C16.5574 6.15033 16.6531 6.15042 16.7282 6.10127C16.7779 6.06866 16.83 6.0008 16.8487 5.94428C16.8767 5.85912 16.8576 5.78787 16.8193 5.64537C16.6386 4.97244 16.1117 4.44683 15.4372 4.26652C15.22 4.20845 14.9259 4.20007 13.9541 4.20007H7.98414C7.86151 4.20007 7.8002 4.20007 7.74507 4.17724C7.68994 4.1544 7.64658 4.11105 7.55987 4.02434L6.80988 3.27434C6.37396 2.83843 6.15601 2.62047 6.23272 2.43528C6.30943 2.25008 6.61766 2.25008 7.23414 2.25008L14.089 2.25005C14.8663 2.24963 15.4435 2.24931 15.9436 2.38298C17.2926 2.7436 18.3462 3.79483 18.7077 5.14068Z',
  d12: 'M1.25 13.0464V5.17508C1.25 4.2799 1.65308 3.47864 2.28804 2.9421C2.44347 2.81077 2.52118 2.7451 2.63804 2.75C2.7549 2.7549 2.83688 2.83688 3.00083 3.00083L4.18685 4.18685C4.19173 4.19173 4.18828 4.20007 4.18138 4.20007C3.64164 4.20007 3.2041 4.63659 3.2041 5.17507C3.2041 5.71354 3.64164 6.15006 4.18138 6.15006H5.90154C6.02416 6.15006 6.08547 6.15006 6.1406 6.1729C6.19574 6.19574 6.23909 6.23909 6.3258 6.3258L20.5172 20.5172C20.7675 20.7675 20.8927 20.8927 20.8567 21.0536C20.8207 21.2146 20.6713 21.2683 20.3725 21.3759C20.0233 21.5016 19.6498 21.5814 19.2563 21.6342C18.3927 21.7501 17.3014 21.75 15.978 21.75H9.97398C8.19196 21.75 6.75559 21.75 5.6259 21.5985C4.45303 21.4412 3.4655 21.1046 2.68119 20.3222C1.89687 19.5397 1.55952 18.5544 1.40184 17.3843C1.24996 16.2573 1.24998 14.8242 1.25 13.0464Z',
  d13: 'M18.7069 5.14068C18.7615 5.3437 18.7937 5.55946 18.8128 5.79625C18.8254 5.95212 18.8317 6.03005 18.8594 6.08367C18.8874 6.1377 18.9216 6.17376 18.9741 6.20454C19.0261 6.23509 19.1026 6.24534 19.2555 6.26586C20.1623 6.38748 20.9631 6.65265 21.6043 7.29235C22.2455 7.93206 22.5113 8.73099 22.6332 9.63562C22.7493 10.4973 22.7493 11.586 22.7492 12.9063V14.9938C22.7493 16.3141 22.7493 17.4028 22.6332 18.2645C22.6158 18.3936 22.6071 18.4582 22.5769 18.5099C22.5056 18.6321 22.3341 18.69 22.2034 18.6361C22.148 18.6132 22.0971 18.5624 21.9955 18.4607L18.9311 15.3963C19.2826 15.0359 19.4992 14.5432 19.4992 14C19.4992 12.8954 18.6038 12 17.4992 12C16.956 12 16.4633 12.2166 16.1029 12.5681L10.7091 7.17433C10.2732 6.73841 10.0552 6.52045 10.1319 6.33526C10.2086 6.15006 10.5169 6.15006 11.1334 6.15006L16.3651 6.15017C16.5566 6.15033 16.6524 6.15042 16.7274 6.10127C16.7772 6.06866 16.8292 6.0008 16.8479 5.94428C16.876 5.85912 16.8568 5.78787 16.8186 5.64537C16.6378 4.97244 16.111 4.44683 15.4365 4.26652C15.2193 4.20845 14.9251 4.20007 13.9533 4.20007H7.98337C7.86074 4.20007 7.79943 4.20007 7.7443 4.17724C7.68917 4.1544 7.64581 4.11105 7.5591 4.02434L6.80911 3.27434C6.37319 2.83843 6.15524 2.62047 6.23195 2.43528C6.30866 2.25008 6.61689 2.25008 7.23337 2.25008L14.0882 2.25005C14.8655 2.24963 15.4428 2.24931 15.9428 2.38298C17.2918 2.7436 18.3455 3.79483 18.7069 5.14068Z',
  d14: 'M1.25 13.0466V5.17534C1.25 4.28015 1.65308 3.4789 2.28804 2.94236C2.44347 2.81102 2.52118 2.74536 2.63804 2.75026C2.7549 2.75516 2.83688 2.83713 3.00083 3.00109L4.18685 4.18711C4.19173 4.19199 4.18828 4.20033 4.18138 4.20033C3.64164 4.20033 3.2041 4.63685 3.2041 5.17533C3.2041 5.7138 3.64164 6.15032 4.18138 6.15032H5.90154C6.02416 6.15032 6.08547 6.15032 6.1406 6.17316C6.19574 6.19599 6.23909 6.23935 6.3258 6.32606L20.5172 20.5175C20.7675 20.7678 20.8927 20.8929 20.8567 21.0539C20.8207 21.2148 20.6713 21.2686 20.3725 21.3762C20.0233 21.5019 19.6498 21.5817 19.2563 21.6345C18.3927 21.7503 17.3014 21.7503 15.978 21.7503H9.97398C8.19196 21.7503 6.75559 21.7503 5.6259 21.5988C4.45303 21.4415 3.4655 21.1049 2.68119 20.3224C1.89687 19.5399 1.55952 18.5547 1.40184 17.3846C1.24996 16.2575 1.24998 14.8245 1.25 13.0466Z',
  d15: 'M18.878 14.5C18.9648 14.2848 19.0128 14.0483 19.0128 13.8C19.0128 12.8059 18.2432 12 17.294 12C17.0127 12 16.7473 12.0707 16.5129 12.1961',
  d16: 'M2.01294 2L21.9978 22',
  d17: 'M6.20435 2.96777H17.9843C17.9898 2.96777 17.9943 2.97225 17.9943 2.97777V6.98223M17.9943 6.98223H10.1733M17.9943 6.98223H21.9748C21.9804 6.98223 21.9848 6.9867 21.9848 6.99223V18.8266',
  d18: 'M3.01155 3.00025L2.01219 3C2.00667 3 2.0022 3.00448 2.0022 3.01V20.9915C2.0022 20.997 2.00667 21.0015 2.01219 21.0015H21.016',
  d19: 'M21.3365 22.75L1.25073 2.66421L2.66495 1.25L22.7507 21.3358L21.3365 22.75Z',
  d20: 'M1.53427 2.51848C1.71659 2.34658 1.96388 2.25 2.22173 2.25H2.24954L4.08286 4.08332H3.19396L3.19396 6.25H6.24954L21.7495 21.75H1.99955C1.58534 21.75 1.24955 21.4142 1.24955 21L1.24951 7L1.24952 6.99637L1.24951 3.16666C1.24951 2.92355 1.35194 2.69039 1.53427 2.51848Z',
  d21: 'M17.7773 2.25C18.3142 2.25 18.7495 2.6604 18.7495 3.16666V6.25H21.9995C22.4137 6.25 22.7495 6.58579 22.7495 7V19.2144L19.1082 15.5731C19.505 15.1674 19.7495 14.6123 19.7495 14C19.7495 12.7574 18.7422 11.75 17.4995 11.75C16.8872 11.75 16.3321 11.9946 15.9264 12.3913L9.78508 6.25H16.8051V4.08332H7.61839L5.78508 2.25H17.7773Z',
};

export const IconWalletNotFound01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-01-stroke-rounded IconWalletNotFound01StrokeRounded"
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

export const IconWalletNotFound01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-01-duotone-rounded IconWalletNotFound01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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
        d={d.d7} 
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

export const IconWalletNotFound01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-01-twotone-rounded IconWalletNotFound01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletNotFound01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-01-solid-rounded IconWalletNotFound01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconWalletNotFound01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-01-bulk-rounded IconWalletNotFound01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletNotFound01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-01-stroke-sharp IconWalletNotFound01StrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletNotFound01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-not-found-01-solid-sharp IconWalletNotFound01SolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWalletNotFound01: TheIconSelfPack = {
  name: 'WalletNotFound01',
  StrokeRounded: IconWalletNotFound01StrokeRounded,
  DuotoneRounded: IconWalletNotFound01DuotoneRounded,
  TwotoneRounded: IconWalletNotFound01TwotoneRounded,
  SolidRounded: IconWalletNotFound01SolidRounded,
  BulkRounded: IconWalletNotFound01BulkRounded,
  StrokeSharp: IconWalletNotFound01StrokeSharp,
  SolidSharp: IconWalletNotFound01SolidSharp,
};