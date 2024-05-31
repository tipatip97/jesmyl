import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.2758 18C15.2907 19.1016 14.0122 20 12 20C9.98779 20 8.70931 19.1016 7.72419 18M16.2758 18C17.487 16.6456 18.2548 14.9842 19.3976 14.3081M16.2758 18C18.345 18 22 18.5623 22 15.5C22 14.7128 21.3199 14 20.5 14C20.2178 14 19.9595 14.0531 19.7188 14.1493M19.7188 14.1493C19.6082 14.1934 19.5014 14.2467 19.3976 14.3081M19.7188 14.1493C19.6197 14.1986 19.5127 14.2518 19.3976 14.3081M19.3976 14.3081C18.0731 14.9556 15.6802 16 12 16C8.31979 16 5.92692 14.9556 4.6024 14.3081M7.72419 18C6.51296 16.6456 5.7452 14.9842 4.6024 14.3081M7.72419 18C5.65501 18 2 18.5623 2 15.5C2 14.7128 2.68011 14 3.5 14C3.78217 14 4.04046 14.0531 4.28118 14.1493M4.28118 14.1493C4.39175 14.1934 4.49862 14.2467 4.6024 14.3081M4.28118 14.1493C4.38028 14.1986 4.48731 14.2518 4.6024 14.3081',
  d2: 'M6 12C6 10.495 6.44241 6.63041 8.57569 4.40139C8.83801 4.1273 9.20006 4 9.56726 4C9.83761 4 10.0901 4.14412 10.24 4.38406L10.4453 4.71248C10.7918 5.26695 11.3753 5.6 12 5.6C12.6247 5.6 13.2082 5.26695 13.5547 4.71248L13.76 4.38406C13.9099 4.14412 14.1624 4 14.4327 4C14.7999 4 15.162 4.1273 15.4243 4.40139C17.5576 6.63041 18 10.495 18 12',
  d3: 'M6.5 10C7.91553 10.51 9.39052 11 12 11C14.6095 11 16.0845 10.51 17.5 10',
  d4: 'M16.2759 17.9992C15.2908 19.1007 14.0123 19.9992 12.0001 19.9992C9.98786 19.9992 8.70938 19.1007 7.72426 17.9992C6.51303 16.6448 5.74527 14.9834 4.60247 14.3073C4.48738 14.251 4.38035 14.1978 4.28125 14.1484C4.39182 14.1926 4.49869 14.2459 4.60247 14.3073C5.92699 14.9547 8.31986 15.9992 12.0001 15.9992C15.6803 15.9992 18.0732 14.9547 19.3977 14.3073C19.5014 14.2459 19.6083 14.1926 19.7189 14.1484C19.6198 14.1978 19.5128 14.251 19.3977 14.3073C18.2549 14.9834 17.4871 16.6448 16.2759 17.9992Z',
  d5: 'M10.4454 4.71248L10.2401 4.38406C10.0901 4.14412 9.83767 4 9.56732 4C9.20011 4 8.83806 4.1273 8.57574 4.40139C7.18707 5.85238 6.5149 7.99643 6.21484 9.73153C7.86275 10.6544 12.4927 12 17.8293 10C17.5535 8.22237 16.8856 5.9282 15.4244 4.40139C15.162 4.1273 14.8 4 14.4328 4C14.1624 4 13.91 4.14412 13.76 4.38406L13.5548 4.71248C13.2082 5.26695 12.6248 5.6 12.0001 5.6C11.3753 5.6 10.7919 5.26695 10.4454 4.71248Z',
  d6: 'M6 12C6 10.495 6.44241 6.63041 8.57569 4.40139C8.83801 4.1273 9.20006 4 9.56726 4C9.83761 4 10.0901 4.14412 10.24 4.38406L10.4453 4.71248C10.7918 5.26695 11.3753 5.6 12 5.6C12.6247 5.6 13.2082 5.26695 13.5547 4.71248L13.76 4.38406C13.9099 4.14412 14.1624 4 14.4327 4C14.7999 4 15.162 4.1273 15.4243 4.40139C17.5576 6.63041 18 10.495 18 12M6.5 10C7.91553 10.51 9.39052 11 12 11C14.6095 11 16.0845 10.51 17.5 10',
  d7: 'M3.5 13.25C2.11383 13.25 1 14.4247 1 15.75C1 16.7308 1.30106 17.5397 1.89357 18.1369C2.46076 18.7085 3.19663 18.9857 3.88383 19.1277C4.57466 19.2704 5.3095 19.295 5.96453 19.29C6.28741 19.2875 6.60436 19.2775 6.89437 19.2684L6.91566 19.2677C7.0496 19.2635 7.17679 19.2595 7.29786 19.2564C8.38067 20.3521 9.84065 21.25 12 21.25C14.1593 21.25 15.6193 20.3521 16.7021 19.2564C16.8232 19.2595 16.9504 19.2635 17.0843 19.2677L17.1056 19.2684C17.3956 19.2775 17.7126 19.2875 18.0355 19.29C18.6905 19.295 19.4253 19.2704 20.1162 19.1277C20.8034 18.9857 21.5392 18.7085 22.1064 18.1369C22.6989 17.5397 23 16.7308 23 15.75C23 14.4247 21.8862 13.25 20.5 13.25C20.0878 13.25 19.7038 13.3284 19.3478 13.4706C19.1999 13.5297 19.0595 13.5988 18.926 13.6755C17.6711 14.2869 15.4423 15.25 12 15.25C8.55769 15.25 6.32894 14.2869 5.07405 13.6755C4.94054 13.5988 4.80007 13.5297 4.65219 13.4706C4.29625 13.3284 3.91222 13.25 3.5 13.25ZM5.6485 17.1857L5.72256 17.2903C5.19702 17.2871 4.71006 17.2561 4.28848 17.169C3.80327 17.0688 3.49607 16.9124 3.31328 16.7282C3.15582 16.5695 3 16.3004 3 15.75C3 15.501 3.24639 15.25 3.5 15.25C3.63915 15.25 3.76193 15.2732 3.87791 15.3156C3.95389 15.3534 4.03592 15.3941 4.12294 15.4368C4.48718 15.6628 4.85265 16.0824 5.32863 16.7375C5.43008 16.8771 5.53672 17.0278 5.6485 17.1857ZM18.6714 16.7375C19.1474 16.0824 19.5128 15.6628 19.877 15.4368C19.9641 15.3941 20.0461 15.3534 20.1221 15.3156C20.2381 15.2732 20.3608 15.25 20.5 15.25C20.7536 15.25 21 15.501 21 15.75C21 16.3004 20.8442 16.5695 20.6867 16.7282C20.5039 16.9124 20.1967 17.0688 19.7115 17.169C19.2899 17.2561 18.803 17.2871 18.2774 17.2903L18.3515 17.1857C18.4633 17.0278 18.5699 16.8771 18.6714 16.7375Z',
  d8: 'M7 11.75C7 11.5474 7.00915 11.2925 7.03149 10.9988C7.04015 10.885 7.04448 10.8281 7.08435 10.801C7.12423 10.7739 7.17975 10.7912 7.29079 10.8258C8.49344 11.2001 9.91419 11.5 11.9998 11.5C14.0856 11.5 15.5065 11.2001 16.7092 10.8256C16.8202 10.7911 16.8758 10.7738 16.9156 10.8008C16.9555 10.8279 16.9598 10.8848 16.9685 10.9986C16.9908 11.2924 17 11.5473 17 11.75C17 12.3023 17.4477 12.75 18 12.75C18.5523 12.75 19 12.3023 19 11.75C19 10.9204 18.8805 9.49175 18.4792 7.96758C18.0806 6.45362 17.3783 4.74679 16.1468 3.45997C15.6656 2.95717 15.0257 2.75 14.4327 2.75C13.7986 2.75 13.2344 3.08824 12.912 3.60406L12.7067 3.93248C12.5326 4.21107 12.2609 4.35 12 4.35C11.7391 4.35 11.4674 4.21107 11.2933 3.93248L11.088 3.60406C10.7656 3.08824 10.2014 2.75 9.56726 2.75C8.97429 2.75 8.33444 2.95717 7.85323 3.45997C6.62168 4.74679 5.91943 6.45362 5.52082 7.96758C5.11953 9.49175 5 10.9204 5 11.75C5 12.3023 5.44772 12.75 6 12.75C6.55228 12.75 7 12.3023 7 11.75Z',
  d9: 'M6 12.5C6 10 6 4.99999 10 4C10.2722 4.81668 11.1391 5.5 12 5.5C12.8609 5.5 13.7278 4.81668 14 4C18 5 18 10 18 12.5',
  d10: 'M6.5 10H17.5',
  d11: 'M3.5 13.25C2.2554 13.25 1.25 14.3092 1.25 15.5C1.25 16.427 1.53291 17.1684 2.07104 17.7108C2.59018 18.234 3.27246 18.4961 3.93441 18.6328C4.59908 18.7702 5.31293 18.795 5.96261 18.79C6.28247 18.7875 6.59684 18.7776 6.88753 18.7684L6.90778 18.7678C7.08172 18.7623 7.24586 18.7572 7.40072 18.7539C8.45749 19.8504 9.87474 20.75 12 20.75C14.1253 20.75 15.5425 19.8504 16.5993 18.7539C16.7541 18.7572 16.9183 18.7623 17.0922 18.7678L17.1125 18.7684C17.4031 18.7776 17.7176 18.7875 18.0374 18.79C18.6871 18.795 19.4009 18.7702 20.0656 18.6328C20.7275 18.4961 21.4098 18.234 21.929 17.7108C22.4671 17.1684 22.75 16.427 22.75 15.5C22.75 14.3092 21.7446 13.25 20.5 13.25C20.1203 13.25 19.7677 13.3221 19.4406 13.4528C19.3017 13.5083 19.1695 13.5735 19.0433 13.6465C17.7708 14.2669 15.5012 15.25 12 15.25C8.49876 15.25 6.22919 14.2669 4.95669 13.6465C4.83053 13.5735 4.69827 13.5083 4.55944 13.4528C4.2323 13.3221 3.87971 13.25 3.5 13.25ZM5.85804 16.7989C5.96964 16.9565 6.08549 17.1201 6.20587 17.2865C6.12118 17.2882 6.03624 17.2894 5.95109 17.29C5.3335 17.2948 4.74562 17.2688 4.2379 17.1639C3.72744 17.0584 3.36665 16.8869 3.13582 16.6543C2.92397 16.4408 2.75 16.1042 2.75 15.5C2.75 15.1165 3.10482 14.75 3.5 14.75C3.67448 14.75 3.83053 14.7804 3.97739 14.8358C4.05972 14.8768 4.14886 14.9211 4.24378 14.9676C4.65863 15.2212 5.05158 15.6809 5.53088 16.3405C5.63575 16.4849 5.7447 16.6388 5.85804 16.7989ZM18.4691 16.3405C18.9484 15.6809 19.3414 15.2212 19.7562 14.9676C19.8511 14.9211 19.9403 14.8768 20.0226 14.8358C20.1695 14.7804 20.3255 14.75 20.5 14.75C20.8952 14.75 21.25 15.1165 21.25 15.5C21.25 16.1042 21.076 16.4408 20.8642 16.6543C20.6333 16.8869 20.2726 17.0584 19.7621 17.1639C19.2544 17.2688 18.6665 17.2948 18.0489 17.29C17.9638 17.2894 17.8788 17.2882 17.7941 17.2865C17.9145 17.1201 18.0304 16.9565 18.142 16.7989C18.2553 16.6388 18.3643 16.4849 18.4691 16.3405Z',
  d12: 'M10.7115 3.76297C10.5876 3.39117 10.1983 3.17748 9.8181 3.27253C7.46588 3.86058 6.32368 5.64269 5.7809 7.47457C5.2499 9.26671 5.24996 11.2306 5.25 12.4679V12.468V12.5001H6.75C6.75 11.9845 6.75079 11.3853 6.78319 10.7501H17.2168C17.2492 11.3853 17.25 11.9845 17.25 12.5001H18.75V12.468C18.75 11.2306 18.7501 9.26672 18.2191 7.47457C17.6763 5.64269 16.5341 3.86059 14.1819 3.27253C13.8017 3.17748 13.4124 3.39117 13.2885 3.76297C13.1079 4.30475 12.5062 4.75014 12 4.75014C11.4938 4.75014 10.8921 4.30475 10.7115 3.76297Z',
} as const;

export const IconCowboyHatStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cowboy-hat-stroke-rounded IconCowboyHatStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCowboyHatDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cowboy-hat-duotone-rounded IconCowboyHatDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCowboyHatTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cowboy-hat-twotone-rounded IconCowboyHatTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCowboyHatSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cowboy-hat-solid-rounded IconCowboyHatSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCowboyHatBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cowboy-hat-bulk-rounded IconCowboyHatBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCowboyHatStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cowboy-hat-stroke-sharp IconCowboyHatStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCowboyHatSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cowboy-hat-solid-sharp IconCowboyHatSolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfCowboyHat: TheIconSelfPack = {
  name: 'CowboyHat',
  StrokeRounded: IconCowboyHatStrokeRounded,
  DuotoneRounded: IconCowboyHatDuotoneRounded,
  TwotoneRounded: IconCowboyHatTwotoneRounded,
  SolidRounded: IconCowboyHatSolidRounded,
  BulkRounded: IconCowboyHatBulkRounded,
  StrokeSharp: IconCowboyHatStrokeSharp,
  SolidSharp: IconCowboyHatSolidSharp,
};