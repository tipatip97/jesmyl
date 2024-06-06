import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 19C2 19 3 19 4 21C4 21 7.17647 16 10 15',
  d2: 'M10.5 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V13C22 10.1716 22 8.75736 21.1213 7.87868C20.2426 7 18.8284 7 16 7H10M2 15V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.93 3 15.395 3 15.7765 3.10222C16.8117 3.37962 17.6204 4.18827 17.8978 5.22354C18 5.60504 18 6.07003 18 7',
  d3: 'M16 13.5C16 14.3284 16.6716 15 17.5 15C18.3284 15 19 14.3284 19 13.5C19 12.6716 18.3284 12 17.5 12C16.6716 12 16 12.6716 16 13.5Z',
  d4: 'M22 13V15C22 17.8284 22 19.2426 21.1213 20.1213C20.2426 21 18.8284 21 16 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6568 2 16.7712 2 13V11C2 9.33128 2 8.03178 2.10149 6.99996H18C18.5809 6.91908 20.0184 6.98158 21.1213 7.87864C22 8.75732 22 10.1715 22 13ZM17.502 15C16.6735 15 16.002 14.3284 16.002 13.5C16.002 12.6716 16.6735 12 17.502 12C18.3304 12 19.002 12.6716 19.002 13.5C19.002 14.3284 18.3304 15 17.502 15Z',
  d5: 'M18.9386 5.67125C18.9195 5.43446 18.8872 5.2187 18.8327 5.01568C18.4712 3.66983 17.4176 2.6186 16.0686 2.25798C15.5685 2.12431 14.9913 2.12463 14.214 2.12505L4.30682 2.12509C2.68762 2.12509 1.375 3.43465 1.375 5.05008V12.9214V12.9215C1.37499 13.999 1.37497 14.9498 1.40878 15.7826C1.41982 16.0547 1.42534 16.1907 1.49251 16.2696C1.50757 16.2873 1.51752 16.2968 1.5358 16.3112C1.61731 16.3751 1.78654 16.3751 2.125 16.3751C2.27382 16.3765 2.65164 16.396 3.01326 16.5111C3.208 16.5685 3.41354 16.6468 3.62582 16.7506L3.62584 16.7506C3.71091 16.7922 3.75345 16.813 3.78555 16.8207C3.88003 16.8434 3.96164 16.8259 4.03862 16.7667C4.06478 16.7465 4.09201 16.7139 4.14646 16.6486L4.14647 16.6486C4.76943 15.9018 5.52274 15.0785 6.34795 14.3549C7.14747 13.6537 8.15405 12.921 9.29038 12.5185C10.5919 12.0576 12.0206 12.739 12.4816 14.0405C12.9425 15.3419 12.2611 16.7707 10.9596 17.2316C10.6846 17.3291 10.2354 17.596 9.6447 18.114C9.08023 18.6091 8.51002 19.2233 7.98589 19.8515C7.75247 20.1313 7.53887 20.4159 7.34585 20.6849C7.06644 21.0743 6.92673 21.269 7.00746 21.4308C7.0882 21.5927 7.32688 21.5982 7.80425 21.6091C8.49488 21.625 9.25827 21.625 10.0985 21.625H10.099H16.103C17.4264 21.625 18.5177 21.6251 19.3813 21.5092C20.2881 21.3876 21.0889 21.1224 21.7301 20.4827C22.3713 19.843 22.637 19.0441 22.7589 18.1395C22.8751 17.2778 22.875 16.1891 22.875 14.8688V12.7813C22.875 11.461 22.8751 10.3723 22.7589 9.51062C22.637 8.60599 22.3713 7.80706 21.7301 7.16735C21.0889 6.52765 20.2881 6.26248 19.3813 6.14086C19.2284 6.12034 19.1519 6.11009 19.0998 6.07954C19.0474 6.04876 19.0132 6.0127 18.9852 5.95867C18.9575 5.90505 18.9512 5.82712 18.9386 5.67125ZM14.0791 4.07507C15.0509 4.07507 15.345 4.08345 15.5622 4.14152C16.2367 4.32183 16.7636 4.84744 16.9443 5.52037C16.9826 5.66287 17.0017 5.73412 16.9737 5.81928C16.955 5.8758 16.9029 5.94366 16.8532 5.97628C16.7781 6.02542 16.6824 6.02533 16.4909 6.02517L16.1026 6.02506L4.30638 6.02506C3.76664 6.02506 3.3291 5.58854 3.3291 5.05007C3.3291 4.51159 3.76664 4.07507 4.30638 4.07507H14.0791ZM17.625 11.8751C18.7296 11.8751 19.625 12.7706 19.625 13.8751C19.625 14.9797 18.7296 15.8751 17.625 15.8751C16.5204 15.8751 15.625 14.9797 15.625 13.8751C15.625 12.7706 16.5204 11.8751 17.625 11.8751Z',
  d6: 'M11.0676 14.5414C11.252 15.062 10.9794 15.6335 10.4588 15.8179C9.92521 16.0069 9.30874 16.4138 8.65567 16.9865C8.01297 17.5501 7.38783 18.2271 6.83406 18.8909C6.28222 19.5524 5.81346 20.1861 5.48241 20.6551C5.31724 20.8891 5.18724 21.0808 5.09927 21.2129L4.96907 21.4115C4.77578 21.7156 4.43372 21.8924 4.07386 21.874C3.71393 21.8555 3.39175 21.6448 3.23057 21.3225C2.78989 20.4411 2.39456 20.0902 2.1953 19.9573C2.11098 19.9011 2.05401 19.8786 2.03138 19.8709C1.52299 19.8237 1.125 19.396 1.125 18.8753C1.125 18.323 1.57272 17.8753 2.125 17.8753C2.2074 17.8761 2.41207 17.8911 2.5716 17.945C2.77947 18.0044 3.0303 18.1103 3.3047 18.2932C3.57898 18.4761 3.86663 18.7288 4.15539 19.0747C4.47057 18.6439 4.859 18.1363 5.29829 17.6097C5.89159 16.8985 6.58997 16.1379 7.33697 15.4828C8.07361 14.8368 8.91303 14.2436 9.79115 13.9326C10.3118 13.7483 10.8832 14.0208 11.0676 14.5414Z',
  d7: 'M18.8327 5.01568C18.8872 5.2187 18.9195 5.43446 18.9386 5.67125C18.9512 5.82712 18.9575 5.90505 18.9852 5.95867C19.0132 6.0127 19.0474 6.04876 19.0998 6.07954C19.1519 6.11009 19.2284 6.12034 19.3813 6.14086C20.2881 6.26248 21.0889 6.52765 21.7301 7.16735C22.3713 7.80706 22.637 8.60599 22.7589 9.51062C22.8751 10.3723 22.875 11.461 22.875 12.7813V14.8688C22.875 16.1891 22.8751 17.2778 22.7589 18.1395C22.637 19.0441 22.3713 19.843 21.7301 20.4827C21.0889 21.1224 20.2881 21.3876 19.3813 21.5092C18.5177 21.6251 17.4264 21.625 16.103 21.625H10.099C9.25855 21.625 8.495 21.625 7.80425 21.6091C7.32688 21.5982 7.0882 21.5927 7.00746 21.4308C6.92673 21.269 7.06644 21.0743 7.34585 20.6849C7.53887 20.4159 7.75247 20.1313 7.98589 19.8515C8.51002 19.2233 9.08023 18.6091 9.6447 18.114C10.2354 17.596 10.6846 17.3291 10.9596 17.2316C12.2611 16.7707 12.9425 15.3419 12.4816 14.0405C12.0206 12.739 10.5919 12.0576 9.29038 12.5185C8.15405 12.921 7.14747 13.6537 6.34795 14.3549C5.52274 15.0785 4.76943 15.9018 4.14647 16.6486C4.09201 16.7139 4.06478 16.7465 4.03862 16.7667C3.96164 16.8259 3.88003 16.8434 3.78555 16.8207C3.75344 16.813 3.7109 16.7922 3.62582 16.7506C3.41354 16.6468 3.208 16.5685 3.01326 16.5111C2.65164 16.396 2.27382 16.3765 2.125 16.3751C1.78654 16.3751 1.61731 16.3751 1.5358 16.3112C1.51752 16.2968 1.50757 16.2873 1.49251 16.2696C1.42534 16.1907 1.41982 16.0547 1.40878 15.7826C1.37497 14.9498 1.37499 13.9989 1.375 12.9214V5.05008C1.375 3.43465 2.68762 2.12509 4.30682 2.12509L14.214 2.12505C14.9913 2.12463 15.5685 2.12431 16.0686 2.25798C17.4176 2.6186 18.4712 3.66983 18.8327 5.01568ZM15.5622 4.14152C15.345 4.08345 15.0509 4.07507 14.0791 4.07507H4.30638C3.76664 4.07507 3.3291 4.51159 3.3291 5.05007C3.3291 5.58854 3.76664 6.02506 4.30638 6.02506L16.1026 6.02506C16.2343 6.02506 16.3638 6.02506 16.4909 6.02517C16.6824 6.02533 16.7781 6.02542 16.8532 5.97628C16.9029 5.94366 16.955 5.8758 16.9737 5.81928C17.0017 5.73412 16.9826 5.66287 16.9443 5.52037C16.7636 4.84744 16.2367 4.32183 15.5622 4.14152Z',
  d8: 'M19.625 13.875C19.625 12.7704 18.7296 11.875 17.625 11.875C16.5204 11.875 15.625 12.7704 15.625 13.875C15.625 14.9796 16.5204 15.875 17.625 15.875C18.7296 15.875 19.625 14.9796 19.625 13.875Z',
  d9: 'M2 19L4 21L10 15',
  d10: 'M10 7.00005H18M18 7.00005H22V21H13.5M18 7.00005V3H2V14.5',
  d11: 'M2.22222 1.75C1.96437 1.75 1.71708 1.84658 1.53476 2.01848C1.35243 2.19039 1.25 2.42355 1.25 2.66666L1.25001 6.49637L1.25 6.5L1.25003 17.4217L2.66444 16.0073L3.95733 17.3002L9.25023 12.0073L12.7858 15.5429L7.07862 21.25H22C22.4142 21.25 22.75 20.9142 22.75 20.5V6.5C22.75 6.08579 22.4142 5.75 22 5.75H18.75V2.66666C18.75 2.1604 18.3147 1.75 17.7778 1.75H2.22222ZM16.8056 5.75V3.58332H3.19445L3.19445 5.75H16.8056ZM17.5 11.25C18.7426 11.25 19.75 12.2574 19.75 13.5C19.75 14.7426 18.7426 15.75 17.5 15.75C16.2574 15.75 15.25 14.7426 15.25 13.5C15.25 12.2574 16.2574 11.25 17.5 11.25Z',
  d12: 'M10.6642 15.5431L3.95711 22.2502L1.25 19.5431L2.66421 18.1289L3.95711 19.4218L9.25 14.1289L10.6642 15.5431Z',
};

export const IconWalletDone01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-01-stroke-rounded IconWalletDone01StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletDone01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-01-duotone-rounded IconWalletDone01DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconWalletDone01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-01-twotone-rounded IconWalletDone01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletDone01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-01-solid-rounded IconWalletDone01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletDone01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-01-bulk-rounded IconWalletDone01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletDone01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-01-stroke-sharp IconWalletDone01StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconWalletDone01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-01-solid-sharp IconWalletDone01SolidSharp"
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

export const iconPackOfWalletDone01: TheIconSelfPack = {
  name: 'WalletDone01',
  StrokeRounded: IconWalletDone01StrokeRounded,
  DuotoneRounded: IconWalletDone01DuotoneRounded,
  TwotoneRounded: IconWalletDone01TwotoneRounded,
  SolidRounded: IconWalletDone01SolidRounded,
  BulkRounded: IconWalletDone01BulkRounded,
  StrokeSharp: IconWalletDone01StrokeSharp,
  SolidSharp: IconWalletDone01SolidSharp,
};