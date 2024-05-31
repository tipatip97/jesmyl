import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 22C10.1818 22 9.40019 21.6698 7.83693 21.0095C3.94564 19.3657 2 18.5438 2 17.1613C2 16.7742 2 10.0645 2 7M11 22V11.3548M11 22C11.3404 22 11.6463 21.9428 12 21.8285M20 7V11.5',
  d2: 'M7.32592 9.69138L4.40472 8.27785C2.80157 7.5021 2 7.11423 2 6.5C2 5.88577 2.80157 5.4979 4.40472 4.72215L7.32592 3.30862C9.12883 2.43621 10.0303 2 11 2C11.9697 2 12.8712 2.4362 14.6741 3.30862L17.5953 4.72215C19.1984 5.4979 20 5.88577 20 6.5C20 7.11423 19.1984 7.5021 17.5953 8.27785L14.6741 9.69138C12.8712 10.5638 11.9697 11 11 11C10.0303 11 9.12883 10.5638 7.32592 9.69138Z',
  d3: 'M5 12L7 13',
  d4: 'M16 4L6 9',
  d5: 'M20.1322 20.1589L22 22M21.2074 17.5964C21.2074 19.5826 19.594 21.1928 17.6037 21.1928C15.6134 21.1928 14 19.5826 14 17.5964C14 15.6102 15.6134 14 17.6037 14C19.594 14 21.2074 15.6102 21.2074 17.5964Z',
  d6: 'M15.9219 20.6777C15.4399 20.8913 14.9171 21.1183 14.3535 21.363C12.7902 22.0418 12.0086 21.7154 11.1904 21.7154C10.3722 21.7154 9.59062 22.0418 8.02736 21.363C4.13607 19.6734 2.19043 18.8286 2.19043 17.4076V6.96289L11.1904 11.4392L20.1904 6.96289V14.9167C19.5535 14.3466 18.7124 14 17.7904 14C15.8022 14 14.1904 15.6118 14.1904 17.6C14.1904 18.904 14.8837 20.0461 15.9219 20.6777Z',
  d7: 'M11.1904 22C10.3722 22 9.59062 21.6698 8.02736 21.0095C4.13607 19.3657 2.19043 18.5438 2.19043 17.1613C2.19043 16.7742 2.19043 10.0645 2.19043 7M11.1904 22V11.3548M11.1904 22C11.5308 22 11.8367 21.9428 12.1904 21.8285M20.1904 7V11.5',
  d8: 'M20.3226 20.1589L22.1904 22M21.3978 17.5964C21.3978 19.5826 19.7844 21.1928 17.7941 21.1928C15.8038 21.1928 14.1904 19.5826 14.1904 17.5964C14.1904 15.6102 15.8038 14 17.7941 14C19.7844 14 21.3978 15.6102 21.3978 17.5964Z',
  d9: 'M7.51635 9.69138L4.59515 8.27785C2.992 7.5021 2.19043 7.11423 2.19043 6.5C2.19043 5.88577 2.992 5.4979 4.59515 4.72215L7.51635 3.30862C9.31926 2.43621 10.2207 2 11.1904 2C12.1601 2 13.0616 2.4362 14.8645 3.30862L17.7857 4.72215C19.3888 5.4979 20.1904 5.88577 20.1904 6.5C20.1904 7.11423 19.3888 7.5021 17.7857 8.27785L14.8645 9.69138C13.0616 10.5638 12.1601 11 11.1904 11C10.2207 11 9.31926 10.5638 7.51635 9.69138Z',
  d10: 'M5.19043 12L7.19043 13',
  d11: 'M16.1904 4L6.19043 9',
  d12: 'M12.875 17.475C12.875 14.9345 14.9345 12.875 17.475 12.875C20.0155 12.875 22.075 14.9345 22.075 17.475C22.075 18.3833 21.8118 19.23 21.3574 19.9432L22.5821 21.1679C22.9726 21.5584 22.9726 22.1916 22.5821 22.5821C22.1916 22.9726 21.5584 22.9726 21.1679 22.5821L19.9432 21.3574C19.23 21.8118 18.3833 22.075 17.475 22.075C14.9345 22.075 12.875 20.0155 12.875 17.475ZM17.475 14.875C16.0391 14.875 14.875 16.0391 14.875 17.475C14.875 18.9109 16.0391 20.075 17.475 20.075C18.9109 20.075 20.075 18.9109 20.075 17.475C20.075 16.0391 18.9109 14.875 17.475 14.875Z',
  d13: 'M10.875 3.03409C10.2053 3.03409 9.5597 3.31518 7.71745 4.18792L4.86928 5.5372C4.05859 5.92126 3.5507 6.16457 3.23235 6.375C3.5507 6.58543 4.05859 6.82874 4.86928 7.2128L5.94362 7.72175L13.5898 3.97886C12.0809 3.26961 11.488 3.03409 10.875 3.03409ZM15.8064 5.02825L8.1602 8.77113C9.66915 9.48039 10.262 9.71591 10.875 9.71591C11.5447 9.71591 12.1903 9.43482 14.0325 8.56208L16.8807 7.2128C17.6914 6.82874 18.1993 6.58543 18.5177 6.375C18.1993 6.16457 17.6914 5.92126 16.8807 5.5372L15.8064 5.02825ZM7.06588 2.37566C8.63051 1.6335 9.70254 1.125 10.875 1.125C12.0475 1.125 13.1195 1.6335 14.6841 2.37566C14.7492 2.40652 14.8151 2.43779 14.8819 2.46944L17.7962 3.85004C18.521 4.19331 19.16 4.49598 19.6096 4.79329C20.0597 5.09096 20.625 5.5792 20.625 6.375C20.625 7.1708 20.0597 7.65904 19.6096 7.95671C19.16 8.25402 18.521 8.55669 17.7962 8.89996L14.8819 10.2806C14.8151 10.3122 14.7492 10.3435 14.6841 10.3743C13.1195 11.1165 12.0475 11.625 10.875 11.625C9.70254 11.625 8.63052 11.1165 7.06589 10.3743C7.00082 10.3435 6.9349 10.3122 6.86809 10.2806L4.01991 8.93127C3.99779 8.92079 3.97575 8.91035 3.95378 8.89995C3.22902 8.55668 2.59 8.25402 2.14041 7.95671C1.69027 7.65904 1.125 7.1708 1.125 6.375C1.125 5.5792 1.69027 5.09096 2.14041 4.79329C2.59 4.49598 3.22902 4.19332 3.95378 3.85005C3.97575 3.83965 3.99779 3.82921 4.01991 3.81873L6.86809 2.46944C6.9349 2.43779 7.00081 2.40653 7.06588 2.37566Z',
  d14: 'M11.375 17.4762C11.375 14.1072 14.1061 11.3762 17.475 11.3762C18.2493 11.3762 18.9899 11.5205 19.6714 11.7836C20.1334 11.9619 20.3644 12.0511 20.4947 11.9617C20.625 11.8724 20.625 11.6442 20.625 11.1879L20.625 6.37622C20.625 6.34693 20.6233 6.31804 20.6201 6.28962C20.6043 6.15244 20.5964 6.08385 20.4605 6.00921C20.3245 5.93457 20.2255 5.98268 20.0273 6.07889L17.1436 7.47895L14.2224 8.89249C12.3546 9.79632 11.6326 10.1262 10.875 10.1262C10.1174 10.1262 9.39544 9.79632 7.5276 8.89249L4.6064 7.47895L1.72271 6.07889C1.52454 5.98268 1.42546 5.93457 1.28953 6.00921C1.1536 6.08385 1.14572 6.15244 1.12995 6.28962C1.12668 6.31804 1.125 6.34693 1.125 6.37622L1.125 17.0375C1.125 18.1579 1.94234 18.9031 2.94833 19.5067C3.96672 20.1178 5.67603 20.8399 7.56913 21.6396L7.56914 21.6396C8.98817 22.2395 9.90296 22.6262 10.875 22.6262C11.3964 22.6262 11.9012 22.515 12.4763 22.3192C12.8616 22.1881 13.0542 22.1225 13.0978 21.9727C13.1414 21.8228 12.9991 21.6454 12.7145 21.2906C11.8764 20.246 11.375 18.9197 11.375 17.4762ZM5.21057 11.2044C4.84009 11.0192 4.38959 11.1693 4.20434 11.5398C4.0191 11.9103 4.16927 12.3608 4.53975 12.546L6.53975 13.546C6.91024 13.7313 7.36074 13.5811 7.54598 13.2106C7.73123 12.8401 7.58106 12.3896 7.21057 12.2044L5.21057 11.2044Z',
  d15: 'M4.32934 11.6638C4.51459 11.2933 4.96509 11.1431 5.33557 11.3284L7.33557 12.3284C7.70606 12.5136 7.85623 12.9641 7.67098 13.3346C7.48574 13.7051 7.03524 13.8553 6.66475 13.67L4.66475 12.67C4.29427 12.4848 4.1441 12.0343 4.32934 11.6638Z',
  d16: 'M6.06836 7.84738L13.7145 4.10449L15.9311 5.15388L8.28495 8.89676L6.06836 7.84738Z',
  d17: 'M12.75 17.3502C12.75 14.8097 14.8095 12.7502 17.35 12.7502C19.8905 12.7502 21.95 14.8097 21.95 17.3502C21.95 18.2585 21.6868 19.1053 21.2324 19.8185L22.4571 21.0431C22.8476 21.4337 22.8476 22.0668 22.4571 22.4574C22.0666 22.8479 21.4334 22.8479 21.0429 22.4574L19.8182 21.2327C19.105 21.687 18.2583 21.9502 17.35 21.9502C14.8095 21.9502 12.75 19.8908 12.75 17.3502ZM17.35 14.7502C15.9141 14.7502 14.75 15.9143 14.75 17.3502C14.75 18.7862 15.9141 19.9502 17.35 19.9502C18.7859 19.9502 19.95 18.7862 19.95 17.3502C19.95 15.9143 18.7859 14.7502 17.35 14.7502Z',
  d18: 'M17.35 11.2503C13.9811 11.2503 11.25 13.9814 11.25 17.3503C11.25 19.2665 12.1335 20.9763 13.5154 22.0946C12.5211 22.502 11.7789 22.7503 11 22.7503C10.028 22.7503 9.11317 22.3636 7.69413 21.7636C5.80103 20.964 4.09172 20.2419 3.07333 19.6308C2.06734 19.0271 1.25 18.282 1.25 17.1616V6.50031C1.25 5.7045 1.81527 5.21596 2.26541 4.91829C2.715 4.62098 3.35402 4.31832 4.07878 3.97505L7.19088 2.50066C8.75551 1.7585 9.82754 1.25 11 1.25C12.1725 1.25 13.2445 1.7585 14.8091 2.50066L17.9213 3.97507C18.646 4.31832 19.285 4.621 19.7346 4.91829C20.1847 5.21596 20.75 5.7045 20.75 6.50031V12.285C19.7785 11.6316 18.6088 11.2503 17.35 11.2503ZM11.0001 3.15912C10.3304 3.15912 9.68477 3.4402 7.84253 4.31294L4.99436 5.66223C4.18366 6.04629 3.67577 6.28959 3.35742 6.50003C3.67577 6.71046 4.18366 6.95377 4.99436 7.33782L8.28528 8.89616C9.79422 9.60541 10.387 9.84094 11.0001 9.84094C11.6698 9.84094 12.3154 9.55985 14.1576 8.68711L17.0058 7.33783C17.8165 6.95377 18.3244 6.71046 18.6427 6.50003C18.3244 6.28959 17.8165 6.04628 17.0058 5.66223L13.7149 4.10389C12.2059 3.39464 11.6131 3.15912 11.0001 3.15912Z',
  d19: 'M11 10L20 6L11 2L2 6L11 10Z',
  d20: 'M15.5 4L6.5 8',
  d21: 'M20.4 20.4L22 22M21.2 17.6C21.2 15.6118 19.5882 14 17.6 14C15.6118 14 14 15.6118 14 17.6C14 19.5882 15.6118 21.2 17.6 21.2C19.5882 21.2 21.2 19.5882 21.2 17.6Z',
  d22: 'M2.00488 6.00195V18.0022L10.9466 21.9913C10.9725 22.0029 11.0021 22.0029 11.028 21.9914L13.4994 20.8911M10.9839 10.0476V21.4206M20 6V12.9942',
  d23: 'M13.75 18.0149C13.75 15.6595 15.6595 13.75 18.0149 13.75C20.3704 13.75 22.2798 15.6595 22.2798 18.0149C22.2798 18.857 22.0358 19.6421 21.6145 20.3033L22.75 21.4388L21.4388 22.75L20.3033 21.6145C19.6421 22.0358 18.857 22.2798 18.0149 22.2798C15.6595 22.2798 13.75 20.3704 13.75 18.0149ZM18.0149 15.6043C16.6836 15.6043 15.6043 16.6836 15.6043 18.0149C15.6043 19.3463 16.6836 20.4255 18.0149 20.4255C19.3463 20.4255 20.4255 19.3463 20.4255 18.0149C20.4255 16.6836 19.3463 15.6043 18.0149 15.6043Z',
  d24: 'M18.0149 12.2505C14.831 12.2505 12.25 14.8315 12.25 18.0154C12.25 19.4077 12.7436 20.6848 13.5653 21.6811L11.3046 22.6858C11.1107 22.772 10.8893 22.772 10.6954 22.6858L1.25 18.4879V6.00049C1.25 5.62506 1.47692 5.28484 1.82902 5.13237L10.604 1.33237C10.8561 1.2232 11.1439 1.2232 11.396 1.33237L20.171 5.13237C20.5231 5.28484 20.75 5.62506 20.75 6.00049V12.9393C19.9362 12.4999 19.0047 12.2505 18.0149 12.2505ZM4.62566 6.00049L6.61244 6.86086L12.9868 4.10046L11 3.24009L4.62566 6.00049ZM15.3874 5.14006L9.0131 7.90046L11 8.76088L17.3743 6.00049L15.3874 5.14006ZM7.5 14.0005L5 12.5005V11.0005L7.5 12.5005V14.0005Z',
} as const;

export const IconPackageSearchStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-search-stroke-rounded IconPackageSearchStrokeRounded"
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

export const IconPackageSearchDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-search-duotone-rounded IconPackageSearchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSearchTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-search-twotone-rounded IconPackageSearchTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconPackageSearchSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-search-solid-rounded IconPackageSearchSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSearchBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-search-bulk-rounded IconPackageSearchBulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSearchStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-search-stroke-sharp IconPackageSearchStrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageSearchSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-search-solid-sharp IconPackageSearchSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPackageSearch: TheIconSelfPack = {
  name: 'PackageSearch',
  StrokeRounded: IconPackageSearchStrokeRounded,
  DuotoneRounded: IconPackageSearchDuotoneRounded,
  TwotoneRounded: IconPackageSearchTwotoneRounded,
  SolidRounded: IconPackageSearchSolidRounded,
  BulkRounded: IconPackageSearchBulkRounded,
  StrokeSharp: IconPackageSearchStrokeSharp,
  SolidSharp: IconPackageSearchSolidSharp,
};