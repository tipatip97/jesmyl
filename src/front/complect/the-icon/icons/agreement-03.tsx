import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 22C9.35984 22 10.6908 21.3926 12.0494 20.1778M12.0494 20.1778C13.2078 19.1419 14.3863 17.6643 15 15.7452C16.3333 11.5753 8.33333 15.7452 11 19.2201C11.3281 19.6476 11.6815 19.9601 12.0494 20.1778ZM12.0494 20.1778C13.6521 21.1259 15.5311 20.274 16.8041 19.2944C17.1932 18.995 17.3877 18.8453 17.5038 18.8919C17.62 18.9385 17.6878 19.2064 17.8236 19.7422C18.2581 21.4569 19.5415 22.841 21 20.6105',
  d2: 'M20 13L20 7.89072C20 6.17637 20 5.31919 19.732 4.63459C19.3013 3.53399 18.3902 2.66585 17.2352 2.25535C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44686C5.81714 3.16523 4.22281 4.68448 3.46894 6.61052C3 7.80859 3 9.30864 3 12.3088L3 14.8859C3 17.9936 3 19.5474 3.8477 20.6265C4.09058 20.9356 4.37862 21.2101 4.70307 21.4416C5.07016 21.7034 5.48961 21.8804 6 22',
  d3: 'M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M6.3331 8.66669C4.50566 8.66669 3.02168 10.1373 3.00001 11.9596L3 14.7273C3 17.7966 3 19.3313 3.8477 20.3971C4.09058 20.7025 4.37862 20.9736 4.70307 21.2022C5.83546 22 7.46607 22 10.7273 22H11.5C15.5069 22 17.5104 22 18.7552 20.8284C20 19.6569 20 17.7712 20 14V7.81818C20 6.12494 20 5.27832 19.732 4.60214C19.3012 3.5151 18.3902 2.65765 17.2352 2.2522C16.5168 2 15.6173 2 13.8182 2C13.5142 2 13.2248 2 12.949 2.0004C11.1315 2.02753 9.66643 3.50935 9.66643 5.33335C9.66643 5.52069 9.67567 5.71747 9.68508 5.91795C9.70912 6.42997 9.73429 6.9662 9.60964 7.43138C9.45553 8.00654 9.00629 8.45578 8.43113 8.60989C7.96595 8.73454 7.42972 8.70937 6.9177 8.68533C6.71722 8.67592 6.52044 8.66669 6.3331 8.66669ZM12.1582 20.0795C13.2811 19.0492 14.4058 17.6044 15.0003 15.7452C16.3337 11.5753 8.33366 15.7452 11.0003 19.2201C11.2913 19.5993 11.6022 19.888 11.9255 20.1003C11.9828 20.1379 12.0115 20.1568 12.0457 20.154C12.08 20.1512 12.106 20.1273 12.1582 20.0795Z',
  d5: 'M16.307 14.0097C16.4797 14.5688 16.3972 15.1908 16.2025 15.7997C15.7613 17.1794 15.0605 18.3452 14.2811 19.2999C14.3686 19.2846 14.4573 19.2651 14.5473 19.2416C15.206 19.0693 15.8739 18.6908 16.4443 18.2519C16.4544 18.2441 16.4646 18.2363 16.4749 18.2284C16.6419 18.0998 16.8241 17.9594 16.981 17.8626C17.0658 17.8102 17.1998 17.7341 17.3637 17.685C17.5358 17.6335 17.8175 17.59 18.1264 17.7139C18.4358 17.8381 18.6048 18.0651 18.6837 18.1924C18.7659 18.325 18.8179 18.4602 18.8512 18.5561C18.914 18.7373 18.974 18.9744 19.0339 19.2108C19.0369 19.2227 19.0399 19.2347 19.043 19.2466C19.1322 19.5987 19.2598 19.9105 19.4027 20.1456C19.552 20.3914 19.6768 20.487 19.7286 20.5132C19.73 20.5139 19.7304 20.515 19.7308 20.516C19.7321 20.5193 19.7329 20.5214 19.772 20.503C19.871 20.4561 20.0997 20.2924 20.413 19.8132C20.7153 19.351 21.335 19.2213 21.7973 19.5235C22.2595 19.8258 22.3892 20.4455 22.087 20.9078C21.6711 21.5438 21.1924 22.0436 20.627 22.311C20.0131 22.6013 19.3782 22.5768 18.827 22.2984C18.3213 22.0431 17.9526 21.6106 17.6935 21.1843C17.5012 20.8678 17.3455 20.516 17.2256 20.1541C16.5999 20.5787 15.8562 20.9665 15.0534 21.1765C14.2436 21.3883 13.3415 21.4249 12.4573 21.1041C11.8971 21.5535 11.3549 21.9084 10.8852 22.1689C10.5804 22.338 10.2957 22.4731 10.0475 22.569C9.83849 22.6497 9.53894 22.75 9.25 22.75C8.69772 22.75 8.25 22.3023 8.25 21.75C8.25 21.2205 8.66161 20.7871 9.18234 20.7523C9.19764 20.7481 9.24363 20.7355 9.32696 20.7033C9.47193 20.6473 9.6724 20.5546 9.91509 20.42C10.1587 20.2849 10.4343 20.1133 10.7274 19.9054C10.6348 19.8022 10.5445 19.6933 10.4567 19.5789C9.53819 18.382 9.54245 17.0752 10.0205 15.976C10.4746 14.9316 11.3441 14.0758 12.2127 13.5224C12.6539 13.2414 13.1272 13.0172 13.5928 12.8843C14.0423 12.7561 14.5706 12.6887 15.0741 12.8251C15.6367 12.9776 16.1115 13.3765 16.307 14.0097ZM12.2386 18.5947C12.1736 18.5238 12.1085 18.4462 12.0433 18.3613C11.6285 17.8207 11.6242 17.3032 11.8545 16.7736C12.1087 16.1891 12.6559 15.6115 13.2873 15.2092C13.5961 15.0125 13.8936 14.8783 14.1416 14.8076C14.2426 14.7788 14.3278 14.7626 14.3964 14.7552C14.3871 14.8496 14.3613 14.9911 14.2975 15.1906C13.8561 16.571 13.0813 17.7075 12.2386 18.5947Z',
  d6: 'M5.42258 22.7239C5.94615 22.847 6.47005 22.5209 6.59274 21.9954C6.71543 21.4699 6.39046 20.9441 5.86689 20.8209C5.46618 20.7267 5.18104 20.5984 4.94738 20.4311C4.70593 20.2582 4.49316 20.0543 4.31475 19.8264C4.05705 19.4972 3.8866 19.0552 3.79403 18.2557C3.69891 17.4341 3.69737 16.362 3.69737 14.8201L3.69737 12.3015C3.69737 11.8858 3.69741 11.503 3.69867 11.1488C3.6998 10.8331 3.70037 10.6752 3.78661 10.4822C3.87284 10.2892 3.94977 10.2199 4.10363 10.0811C4.56155 9.66801 5.16808 9.41654 5.83333 9.41654C5.98046 9.41654 6.20446 9.4261 6.38206 9.43434C6.38206 9.43434 6.70558 9.44954 6.8737 9.45303C7.25379 9.46093 7.69733 9.44892 8.12548 9.3342C8.95945 9.11074 9.61086 8.45933 9.83432 7.62536C9.94905 7.19721 9.96105 6.75367 9.95316 6.37358C9.94966 6.20544 9.93446 5.88194 9.93446 5.88194C9.92622 5.70434 9.91667 5.48034 9.91667 5.33321C9.91667 4.67723 10.1612 4.07835 10.564 3.62274C10.7022 3.46646 10.7713 3.38831 10.9652 3.30009C11.1591 3.21186 11.3175 3.21073 11.6343 3.20846C12.1151 3.20502 12.6524 3.20449 13.2572 3.20449C15.0922 3.20449 15.7569 3.21875 16.2582 3.3976C17.1282 3.70793 17.7964 4.35729 18.1087 5.1581C18.1874 5.36002 18.2426 5.62427 18.2721 6.0791C18.3022 6.54244 18.3026 7.13358 18.3026 7.98399L18.3026 13.9771C18.3026 14.5168 18.7386 14.9543 19.2763 14.9543C19.8141 14.9543 20.25 14.5168 20.25 13.9771L20.25 7.95108C20.25 7.14135 20.25 6.48641 20.2153 5.95204C20.1796 5.40193 20.1043 4.91282 19.9221 4.4457C19.3955 3.09538 18.2896 2.04795 16.9104 1.55594C16.0499 1.24899 15.0155 1.24937 13.4618 1.24992L13.0191 1.24995C10.1813 1.24958 8.49273 1.24936 7.10864 1.7431C4.88596 2.53597 3.11477 4.2197 2.27358 6.37671C1.99357 7.09471 1.8693 7.86633 1.80914 8.7933C1.75 9.70442 1.75 10.8302 1.75 12.2668V14.8804C1.74998 16.3477 1.74996 17.5337 1.85968 18.4813C1.97347 19.464 2.21571 20.3085 2.7834 21.0338C3.07797 21.4102 3.42612 21.7428 3.81649 22.0222C4.2977 22.3668 4.82939 22.5844 5.42258 22.7239Z',
  d7: 'M9.0127 22.0035C9.37328 22.0035 10.707 21.396 12.0684 20.1809M12.0684 20.1809C13.2292 19.1448 14.4101 17.6669 15.0251 15.7475C16.3611 11.5767 8.34465 15.7475 11.0168 19.2231C11.3456 19.6506 11.6997 19.9632 12.0684 20.1809ZM12.0684 20.1809C13.6744 21.1292 15.5573 20.2772 16.8329 19.2974C17.2228 18.9979 17.4177 18.8482 17.5341 18.8948C17.6505 18.9414 17.7184 19.2093 17.8545 19.7453C18.2899 21.4603 19.576 22.8447 21.0375 20.6137',
  d8: 'M20.081 13.9965V2.11369C20.081 2.05845 20.0361 2.01367 19.9808 2.01367H10.0042L3.03613 8.968V21.9107C3.03613 21.966 3.081 22.0107 3.13634 22.0107H7.03598M10.0042 2.6441V8.968H3.55548',
  d9: 'M16.4704 14.0097C16.643 14.5688 16.5605 15.1908 16.3658 15.7997C15.9247 17.1794 15.2238 18.3452 14.4444 19.2999C14.5319 19.2846 14.6207 19.2651 14.7107 19.2416C15.3693 19.0693 16.0372 18.6908 16.6076 18.2519C16.6178 18.2441 16.6279 18.2363 16.6382 18.2284C16.8052 18.0998 16.9875 17.9594 17.1443 17.8626C17.2291 17.8102 17.3631 17.7341 17.527 17.685C17.6992 17.6335 17.9808 17.59 18.2897 17.7139C18.5991 17.8381 18.7682 18.0651 18.847 18.1924C18.9292 18.325 18.9813 18.4602 19.0145 18.5561C19.0773 18.7373 19.1374 18.9744 19.1972 19.2108C19.2003 19.2227 19.2033 19.2347 19.2063 19.2466C19.2955 19.5987 19.4231 19.9105 19.566 20.1456C19.7154 20.3914 19.8401 20.487 19.8919 20.5132C19.8934 20.5139 19.8938 20.515 19.8941 20.516C19.8954 20.5193 19.8962 20.5214 19.9353 20.503C20.0343 20.4561 20.263 20.2924 20.5764 19.8132L22.2503 20.9078C21.8344 21.5438 21.3558 22.0436 20.7904 22.311C20.1764 22.6013 19.5415 22.5768 18.9903 22.2984C18.4847 22.0431 18.116 21.6106 17.8569 21.1843C17.6645 20.8678 17.5088 20.516 17.3889 20.1541C16.7633 20.5787 16.0196 20.9665 15.2168 21.1765C14.4069 21.3883 13.5049 21.4249 12.6206 21.1041C12.0604 21.5535 11.5182 21.9084 11.0485 22.1689C10.7437 22.338 10.4591 22.4731 10.2108 22.569C10.0018 22.6497 9.70227 22.75 9.41333 22.75V20.75C9.36636 20.75 9.33995 20.7546 9.33984 20.754C9.33971 20.7533 9.38545 20.7438 9.49029 20.7033C9.63526 20.6473 9.83573 20.5546 10.0784 20.42C10.322 20.2849 10.5977 20.1133 10.8907 19.9054C10.7981 19.8022 10.7078 19.6933 10.62 19.5789C9.70152 18.382 9.70578 17.0752 10.1838 15.976C10.638 14.9316 11.5074 14.0758 12.376 13.5224C12.8173 13.2414 13.2906 13.0172 13.7561 12.8843C14.2057 12.7561 14.7339 12.6887 15.2374 12.8251C15.8 12.9776 16.2748 13.3765 16.4704 14.0097ZM12.402 18.5947C12.337 18.5238 12.2718 18.4462 12.2067 18.3613C11.7918 17.8207 11.7875 17.3032 12.0179 16.7736C12.272 16.1891 12.8192 15.6115 13.4506 15.2092C13.7594 15.0125 14.0569 14.8783 14.3049 14.8076C14.4059 14.7788 14.4911 14.7626 14.5598 14.7552C14.5504 14.8496 14.5246 14.9911 14.4608 15.1906C14.0195 16.571 13.2446 17.7075 12.402 18.5947Z',
  d10: 'M20.25 2.22727C20.25 1.68754 19.8141 1.25 19.2763 1.25H9.13616L1.75 8.66338V21.7727C1.75 22.3125 2.18593 22.75 2.72368 22.75H7.51306V20.7955H3.69727V10.0455H10.5131L10.5131 3.20459H18.3025V12H20.25V2.22727Z',
} as const;

export const IconAgreement03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-03-stroke-rounded IconAgreement03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAgreement03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-03-duotone-rounded IconAgreement03DuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-03-twotone-rounded IconAgreement03TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-03-solid-rounded IconAgreement03SolidRounded"
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

export const IconAgreement03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-03-bulk-rounded IconAgreement03BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-03-stroke-sharp IconAgreement03StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAgreement03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="agreement-03-solid-sharp IconAgreement03SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfAgreement03: TheIconSelfPack = {
  name: 'Agreement03',
  StrokeRounded: IconAgreement03StrokeRounded,
  DuotoneRounded: IconAgreement03DuotoneRounded,
  TwotoneRounded: IconAgreement03TwotoneRounded,
  SolidRounded: IconAgreement03SolidRounded,
  BulkRounded: IconAgreement03BulkRounded,
  StrokeSharp: IconAgreement03StrokeSharp,
  SolidSharp: IconAgreement03SolidSharp,
};