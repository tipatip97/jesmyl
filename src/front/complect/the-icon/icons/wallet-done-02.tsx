import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 15.0614V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C13.7295 21.6806 12.3748 21.509 11 21.2775',
  d2: 'M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044',
  d3: 'M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z',
  d4: 'M3 19C3 19 4 19 5 21C5 21 8.17647 16 11 15',
  d5: 'M3 6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C12.4235 21.553 9.53623 21.1109 6.78937 20.3687C5.08923 19.9093 4.23916 19.6796 3.61958 18.8663C3 18.0531 3 17.0558 3 15.0614V6ZM16.5 16.5C15.6716 16.5 15 15.8284 15 15C15 14.1716 15.6716 13.5 16.5 13.5C17.3284 13.5 18 14.1716 18 15C18 15.8284 17.3284 16.5 16.5 16.5Z',
  d6: 'M2.375 5.90114C2.375 4.681 3.14362 3.51401 4.41249 3.13745C6.36472 2.5581 9.91912 1.70754 14.7933 1.29363C15.6175 1.22142 17.0516 1.09578 18.012 2.26628C18.7163 3.12467 18.8804 4.30189 18.8749 5.28705C18.8719 5.80455 18.8215 6.32171 18.7467 6.80004C18.7022 7.08436 18.6799 7.22652 18.7413 7.32234C18.8027 7.41816 18.9455 7.45856 19.2311 7.53936C19.876 7.7218 20.4347 8.00144 20.8679 8.46866C21.4237 9.06812 21.6584 9.81615 21.7684 10.6993C21.875 11.5558 21.875 12.6461 21.875 14.005V16.1294C21.875 17.523 21.875 18.6519 21.744 19.5411C21.6068 20.4721 21.3128 21.2469 20.6472 21.8551C19.989 22.4566 19.2223 22.6852 18.3193 22.7385C17.467 22.7889 16.3513 22.6799 15.0629 22.5539C13.0805 22.3602 10.9162 22.056 8.76545 21.5905C8.3692 21.5047 8.17107 21.4619 8.11442 21.3063C8.05777 21.1508 8.18113 20.9916 8.42785 20.673C8.60093 20.4496 8.78793 20.2155 8.98589 19.9783C9.51002 19.35 10.0802 18.7358 10.6447 18.2407C11.2354 17.7227 11.6846 17.4558 11.9596 17.3583C13.2611 16.8974 13.9425 15.4687 13.4816 14.1672C13.0206 12.8657 11.5919 12.1843 10.2904 12.6452C9.15405 13.0477 8.14747 13.7804 7.34795 14.4816C6.52274 15.2053 5.76943 16.0286 5.14647 16.7753L5.14646 16.7753C5.09201 16.8406 5.06478 16.8732 5.03862 16.8934C4.96164 16.9527 4.88003 16.9701 4.78555 16.9474C4.75345 16.9397 4.71092 16.9189 4.62587 16.8773L4.62582 16.8773C4.41354 16.7735 4.208 16.6952 4.01326 16.6378C3.65164 16.5227 3.28842 16.5033 3.1396 16.5019L3.125 16.5018C2.75388 16.5018 2.56832 16.5018 2.48408 16.4296C2.471 16.4184 2.46413 16.4116 2.45283 16.3986C2.38006 16.3149 2.37896 16.1655 2.37676 15.8668C2.37499 15.6274 2.37499 15.3757 2.375 15.1112V15.1109V5.90114ZM15.9665 3.15136C15.683 3.10642 15.3467 3.1284 14.8662 3.16921C10.1434 3.57028 6.82086 4.3837 4.98308 4.92909C4.90099 4.95345 4.82174 4.99141 4.7483 5.04134C4.5771 5.15775 4.49149 5.21595 4.52899 5.40991C4.56649 5.60387 4.71175 5.63561 5.00227 5.69911C7.35233 6.21272 10.9667 6.76428 15.1809 7.0563C15.5299 7.08048 15.8647 7.10367 16.1841 7.1274C16.4358 7.1461 16.5617 7.15546 16.6531 7.08399C16.7444 7.01253 16.7647 6.89378 16.8053 6.65629C16.8799 6.21953 16.9314 5.7428 16.934 5.2768C16.9389 4.4144 16.7748 3.77638 16.4907 3.43022C16.3563 3.26634 16.2034 3.18892 15.9665 3.15136ZM16.625 13C17.7296 13 18.625 13.8954 18.625 15C18.625 16.1046 17.7296 17 16.625 17C15.5204 17 14.625 16.1046 14.625 15C14.625 13.8954 15.5204 13 16.625 13Z',
  d7: 'M12.0676 14.6664C12.252 15.187 11.9794 15.7585 11.4588 15.9429C10.9252 16.1319 10.3087 16.5388 9.65567 17.1115C9.01297 17.6751 8.38783 18.3521 7.83406 19.0159C7.28222 19.6774 6.81346 20.3111 6.48241 20.7801C6.31724 21.0141 6.18724 21.2058 6.09927 21.3379L5.96907 21.5365C5.77578 21.8406 5.43372 22.0174 5.07386 21.999C4.71393 21.9805 4.39175 21.7698 4.23057 21.4475C3.78989 20.5661 3.39456 20.2152 3.1953 20.0823C3.11098 20.0261 3.05401 20.0036 3.03138 19.9959C2.52299 19.9487 2.125 19.521 2.125 19.0003C2.125 18.448 2.57272 18.0003 3.125 18.0003C3.2074 18.0011 3.41207 18.0161 3.5716 18.07C3.77947 18.1294 4.0303 18.2353 4.3047 18.4182C4.57898 18.6011 4.86663 18.8538 5.15539 19.1997C5.47057 18.7689 5.859 18.2613 6.29829 17.7347C6.89159 17.0235 7.58997 16.2629 8.33697 15.6078C9.07361 14.9618 9.91303 14.3686 10.7912 14.0576C11.3118 13.8733 11.8832 14.1458 12.0676 14.6664Z',
  d8: 'M4.41249 3.13745C3.14362 3.51401 2.375 4.681 2.375 5.90114V15.1109C2.37499 15.3755 2.37499 15.6273 2.37676 15.8668C2.37896 16.1655 2.38006 16.3149 2.45283 16.3986C2.46413 16.4116 2.471 16.4184 2.48408 16.4296C2.56832 16.5018 2.75388 16.5018 3.125 16.5018L3.1396 16.5019C3.28842 16.5033 3.65164 16.5227 4.01326 16.6378C4.208 16.6952 4.41354 16.7735 4.62582 16.8773C4.7109 16.9189 4.75344 16.9397 4.78555 16.9474C4.88003 16.9701 4.96164 16.9527 5.03862 16.8934C5.06478 16.8732 5.09201 16.8406 5.14647 16.7753C5.76943 16.0286 6.52274 15.2053 7.34795 14.4816C8.14747 13.7804 9.15405 13.0477 10.2904 12.6452C11.5919 12.1843 13.0206 12.8657 13.4816 14.1672C13.9425 15.4687 13.2611 16.8974 11.9596 17.3583C11.6846 17.4558 11.2354 17.7227 10.6447 18.2407C10.0802 18.7358 9.51002 19.35 8.98589 19.9783C8.78793 20.2155 8.60093 20.4496 8.42785 20.673C8.18113 20.9916 8.05777 21.1508 8.11442 21.3063C8.17107 21.4619 8.3692 21.5047 8.76545 21.5905C10.9162 22.056 13.0805 22.3602 15.0629 22.5539C16.3513 22.6799 17.467 22.7889 18.3193 22.7385C19.2223 22.6852 19.989 22.4566 20.6472 21.8551C21.3128 21.2469 21.6068 20.4721 21.744 19.5411C21.875 18.6519 21.875 17.523 21.875 16.1294V14.005C21.875 12.6461 21.875 11.5558 21.7684 10.6993C21.6584 9.81615 21.4237 9.06812 20.8679 8.46866C20.4347 8.00144 19.876 7.7218 19.2311 7.53936C18.9455 7.45856 18.8027 7.41816 18.7413 7.32234C18.6799 7.22652 18.7022 7.08436 18.7467 6.80004C18.8215 6.32171 18.8719 5.80455 18.8749 5.28705C18.8804 4.30189 18.7163 3.12467 18.012 2.26628C17.0516 1.09578 15.6175 1.22142 14.7933 1.29363C9.91912 1.70754 6.36472 2.5581 4.41249 3.13745ZM14.8662 3.16921C15.3467 3.1284 15.683 3.10642 15.9665 3.15136C16.2034 3.18892 16.3563 3.26634 16.4907 3.43022C16.7748 3.77638 16.9389 4.4144 16.934 5.2768C16.9314 5.7428 16.8799 6.21953 16.8053 6.65629C16.7647 6.89378 16.7444 7.01253 16.6531 7.08399C16.5617 7.15546 16.4358 7.1461 16.1841 7.1274C15.8647 7.10367 15.5299 7.08048 15.1809 7.0563C10.9667 6.76428 7.35233 6.21272 5.00227 5.69911C4.71175 5.63561 4.56649 5.60387 4.52899 5.40991C4.49149 5.21595 4.5771 5.15775 4.7483 5.04134C4.82174 4.99141 4.90099 4.95345 4.98308 4.92909C6.82086 4.3837 10.1434 3.57028 14.8662 3.16921Z',
  d9: 'M18.625 15C18.625 13.8954 17.7296 13 16.625 13C15.5204 13 14.625 13.8954 14.625 15C14.625 16.1046 15.5204 17 16.625 17C17.7296 17 18.625 16.1046 18.625 15Z',
  d10: 'M3 6C5.1047 6.62133 11.5 8.00002 21 8.00002V22C17.7225 22 14.7738 22 12 21.6921M3 6V13M3 6C3 6 7 2 18 2V7.79215',
  d11: 'M3 19L5 21L11 15',
  d12: 'M3.16444 16.5073L2.75 16.9218V5.68934C4.28186 4.48481 5.3484 3.82901 6.58396 3.30877C9.05715 2.26743 12.9068 1.25 18.5 1.25H19.25V7.22374C19.9788 7.24087 20.729 7.25002 21.5 7.25002H22.25V22.75H21.4037C16.356 22.75 11.9752 22.7501 7.77585 21.5528L13.2858 16.0429L9.75023 12.5073L4.45733 17.8002L3.16444 16.5073ZM7.19552 5.29514C6.75735 5.48156 6.37153 5.66708 6.03516 5.84406C8.467 6.3476 12.2968 6.9327 17.2798 7.15647V3.39374C12.5235 3.50529 9.26617 4.41414 7.19552 5.29514ZM17 13C18.1046 13 19 13.8954 19 15C19 16.1046 18.1046 17 17 17C15.8954 17 15 16.1046 15 15C15 13.8954 15.8954 13 17 13Z',
  d13: 'M11.1642 16.0431L4.45711 22.7502L1.75 20.0431L3.16421 18.6289L4.45711 19.9218L9.75 14.6289L11.1642 16.0431Z',
};

export const IconWalletDone02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-02-stroke-rounded IconWalletDone02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletDone02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-02-duotone-rounded IconWalletDone02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletDone02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-02-twotone-rounded IconWalletDone02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletDone02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-02-solid-rounded IconWalletDone02SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconWalletDone02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-02-bulk-rounded IconWalletDone02BulkRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletDone02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-02-stroke-sharp IconWalletDone02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletDone02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-done-02-solid-sharp IconWalletDone02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWalletDone02: TheIconSelfPack = {
  name: 'WalletDone02',
  StrokeRounded: IconWalletDone02StrokeRounded,
  DuotoneRounded: IconWalletDone02DuotoneRounded,
  TwotoneRounded: IconWalletDone02TwotoneRounded,
  SolidRounded: IconWalletDone02SolidRounded,
  BulkRounded: IconWalletDone02BulkRounded,
  StrokeSharp: IconWalletDone02StrokeSharp,
  SolidSharp: IconWalletDone02SolidSharp,
};