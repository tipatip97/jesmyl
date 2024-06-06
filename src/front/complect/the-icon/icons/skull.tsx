import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5908 14.536C11.1388 14.7038 10.7358 15.0268 10.3317 15.2845C9.48946 15.8216 8.63063 16.4131 7.58474 16.3597C4.46802 16.2004 2 12.3209 2 9.56692C2 5.38782 6.10119 2 11.1603 2C15.7188 2 19.4995 4.75056 20.2031 8.35214C20.4227 9.47603 19.9208 10.1613 19.3027 11.0803L21.3692 13.1287C21.797 13.5528 22.011 13.7649 21.9996 13.9858C21.9881 14.2066 21.7199 14.4234 21.1834 14.8569C20.7141 15.236 20.3205 15.6902 20.3205 16.1249C20.5325 17.5959 21.4196 20.0253 20.4459 21.2837C19.2685 22.8054 16.9884 21.5105 15.6126 20.9801C14.178 20.4271 13.4607 20.1506 12.9795 19.6296C11.8449 18.4013 11.5908 14.536 11.5908 14.536ZM11.5908 14.536C13.0845 13.9816 14.3114 15.7714 15.8378 15.1043C16.3596 14.8762 16.8134 14.4444 17.2671 14.1071',
  d2: 'M20.5 19C20.5 19 19 18.5 18.5 17.5',
  d3: 'M14 9.01907C14 9.01907 12.1384 9.01907 11.3067 10.3287C11.0575 10.7213 10.6752 11.0693 10.2233 10.9881C9.01847 10.7716 7.65343 9.99767 7 8',
  d4: 'M11.1603 2C15.7188 2 19.4995 4.75056 20.2031 8.35214C20.4227 9.47603 19.9208 10.1613 19.3027 11.0803L21.3692 13.1287C21.797 13.5528 22.011 13.7649 21.9996 13.9858C21.9881 14.2066 21.7199 14.4234 21.1834 14.8569C20.7141 15.236 20.3205 15.6902 20.3205 16.1249C20.5325 17.5959 21.4196 20.0253 20.4459 21.2837C19.2685 22.8054 16.9884 21.5105 15.6126 20.9801L15.6126 20.9801C14.178 20.4271 13.4607 20.1506 12.9795 19.6296C11.8449 18.4013 11.5908 14.536 11.5908 14.536C11.1388 14.7038 10.7358 15.0268 10.3317 15.2845C9.48946 15.8216 8.63063 16.4131 7.58474 16.3597C4.46802 16.2004 2 12.3209 2 9.56692C2 5.38782 6.10119 2 11.1603 2Z',
  d5: 'M11.1603 1.25C5.82745 1.25 1.25 4.84588 1.25 9.56692C1.25 11.1397 1.94189 12.9527 3.02491 14.388C4.10578 15.8205 5.68404 17.0135 7.54646 17.1087C8.32884 17.1487 9.02278 16.9024 9.61981 16.5918C9.64457 16.5789 9.65695 16.5724 9.66955 16.5642C9.68214 16.5559 9.69384 16.5465 9.71724 16.5275C10.2519 16.095 11.3253 15.2738 11.6857 15.1756C12.6711 14.8099 13.5625 15.1256 14.1288 15.3263C14.7127 15.5313 15.0619 15.6253 15.538 15.4172C15.718 15.3385 15.9064 15.2154 16.1251 15.0494L16.8202 14.5053C17.1526 14.2582 17.6224 14.3273 17.8695 14.6598C18.1167 14.9922 18.0475 15.462 17.7151 15.7091L17.0319 16.2442C16.7799 16.4355 16.4806 16.6422 16.1387 16.7916C15.0884 17.2507 14.2386 16.9546 13.6317 16.7415C13.0418 16.5343 12.7042 16.4228 12.278 16.5577C12.2488 16.5669 12.2342 16.5715 12.2141 16.5814C12.194 16.5912 12.1783 16.6021 12.1469 16.6238C11.889 16.8019 11.2312 17.2597 11.228 17.2619C11.2279 17.262 11.228 17.262 11.2279 17.2621C11.2249 17.2643 11.2236 17.268 11.2244 17.2716C11.3172 17.7013 11.4322 18.1438 11.5743 18.5587C11.7687 19.1257 12.0383 19.716 12.4286 20.1385C12.7561 20.4931 13.146 20.7417 13.6109 20.9675C14.0582 21.1848 14.621 21.4017 15.3129 21.6684L15.3428 21.6799C15.4931 21.7379 15.6739 21.8146 15.8758 21.9002L15.8758 21.9002L15.8759 21.9002C16.4619 22.1488 17.2259 22.4729 17.9392 22.6332C18.9357 22.8571 20.1831 22.849 21.0391 21.7427C21.3128 21.389 21.4733 20.9859 21.5593 20.5681C21.6071 20.3356 21.6311 20.2194 21.5638 20.1161C21.4965 20.0127 21.3637 19.9839 21.0981 19.9262C20.7767 19.8564 20.5013 19.7836 20.3172 19.7295C20.3026 19.7252 20.2888 19.7211 20.2652 19.7134C20.2433 19.7063 20.2322 19.7024 20.2186 19.6975C20.0735 19.6456 19.534 19.4416 18.9895 19.0758C18.6456 18.8448 18.5541 18.3788 18.7851 18.035C19.0161 17.6912 19.482 17.5997 19.8259 17.8306C20.2223 18.0969 20.63 18.2516 20.7238 18.2852L20.726 18.286L20.7296 18.2872L20.7331 18.2883L20.7343 18.2886L20.7405 18.2905C21.0739 18.3885 21.2407 18.4376 21.362 18.3432C21.3741 18.3338 21.3877 18.3213 21.398 18.3101C21.5024 18.1972 21.4669 18.0228 21.3959 17.6739C21.364 17.5171 21.3314 17.3641 21.2997 17.2168C21.1477 16.4286 21.134 16.1643 21.1583 16.0114C21.1639 15.9765 21.1667 15.959 21.1839 15.9215C21.2012 15.884 21.2159 15.8667 21.2454 15.8321C21.3549 15.7034 21.5141 15.5539 21.6835 15.417C21.9268 15.2204 22.155 15.0361 22.3195 14.8711C22.4753 14.7148 22.7275 14.4319 22.7486 14.0245C22.7686 13.6374 22.5784 13.3468 22.4377 13.1686C22.3033 12.9985 22.1144 12.8114 21.9237 12.6224L20.6166 11.3267C20.4546 11.1661 20.3736 11.0857 20.3594 10.9858C20.3453 10.8858 20.4047 10.7794 20.5234 10.5667C20.8825 9.92331 21.1294 9.18185 20.9392 8.20834C20.1498 4.1676 15.9808 1.25 11.1603 1.25ZM7.71304 7.76704C7.58427 7.37335 7.16073 7.15859 6.76704 7.28737C6.37335 7.41614 6.15859 7.83968 6.28737 8.23337C7.03698 10.5251 8.64907 11.4674 10.0908 11.7265C10.5579 11.8105 10.9639 11.662 11.266 11.4544C11.5588 11.2532 11.7815 10.9808 11.9401 10.731C12.2171 10.2947 12.6899 10.0426 13.1727 9.90378C13.4068 9.83646 13.7617 9.76927 14.0032 9.76927C14.416 9.76766 14.7502 9.4325 14.7502 9.01928C14.7502 8.60506 14.4144 8.26928 14.0002 8.26928C13.586 8.26928 13.0934 8.3658 12.7582 8.46219C12.1022 8.65079 11.2284 9.05353 10.6738 9.92691C10.6172 10.0161 10.5605 10.1002 10.4925 10.1631C10.463 10.1903 10.4483 10.204 10.3766 10.2232C10.3049 10.2424 10.2683 10.2341 10.1953 10.2175C9.26707 10.0063 8.23965 9.37702 7.71304 7.76704Z',
  d6: 'M11.1603 1.25C5.82745 1.25 1.25 4.84588 1.25 9.56692C1.25 11.1397 1.94189 12.9527 3.02491 14.388C4.10578 15.8205 5.68404 17.0135 7.54646 17.1087C8.35165 17.1499 9.06317 16.8878 9.67178 16.5644C10.1885 16.1436 11.3148 15.2766 11.6857 15.1756C12.6711 14.8099 13.5625 15.1256 14.1288 15.3263C14.7127 15.5313 15.0619 15.6253 15.538 15.4172C15.718 15.3385 15.9064 15.2154 16.1251 15.0494L16.8202 14.5053C17.1526 14.2582 17.6224 14.3273 17.8695 14.6598C18.1167 14.9922 18.0475 15.462 17.7151 15.7091L17.0319 16.2442C16.7799 16.4355 16.4806 16.6422 16.1387 16.7916C15.0884 17.2507 14.2386 16.9546 13.6317 16.7415C13.0097 16.5231 12.6682 16.411 12.2077 16.5819C12.0169 16.7128 11.228 17.262 11.228 17.262L11.2231 17.2657C11.3161 17.6973 11.4315 18.142 11.5743 18.5587C11.7687 19.1257 12.0383 19.716 12.4286 20.1385C12.7561 20.4931 13.146 20.7417 13.6109 20.9675C14.0582 21.1848 14.621 21.4017 15.3129 21.6684L15.3428 21.6799C15.4931 21.7379 15.6739 21.8146 15.8758 21.9002L15.8758 21.9002C16.4619 22.1488 17.2258 22.4729 17.9392 22.6332C18.9357 22.8571 20.1831 22.849 21.0391 21.7427C21.728 20.8524 21.6999 19.6491 21.5713 18.6849C21.5036 18.1778 21.3974 17.6706 21.2997 17.2168C21.1101 16.2335 21.1356 16.0656 21.1819 15.9121C21.2867 15.7684 21.4776 15.5834 21.6835 15.417C21.9268 15.2204 22.155 15.0361 22.3195 14.8711C22.4753 14.7148 22.7275 14.4319 22.7486 14.0245C22.7686 13.6374 22.5784 13.3468 22.4377 13.1686C22.3033 12.9985 22.1144 12.8114 21.9237 12.6224L20.2703 10.9834C20.7509 10.242 21.1717 9.39861 20.9392 8.20834C20.1498 4.1676 15.9808 1.25 11.1603 1.25Z',
  d7: 'M21.5434 18.4869C21.2265 18.422 20.9396 18.3489 20.7411 18.2905L20.7349 18.2886L20.7336 18.2883C20.7336 18.2883 20.7339 18.2883 20.7302 18.2872L20.7266 18.286L20.7244 18.2852C20.6306 18.2516 20.2229 18.0969 19.8265 17.8306C19.4826 17.5997 19.0167 17.6912 18.7857 18.035C18.5547 18.3788 18.6462 18.8448 18.9901 19.0758C19.5346 19.4416 20.0741 19.6456 20.2192 19.6975C20.2328 19.7024 20.2439 19.7063 20.2658 19.7134C20.2894 19.7211 20.3032 19.7252 20.3179 19.7295C20.5978 19.8119 21.0894 19.9374 21.6323 20.0298C21.6645 19.567 21.6276 19.1042 21.5719 18.6863C21.563 18.6198 21.5535 18.5533 21.5434 18.4869Z',
  d8: 'M6.76704 7.28737C7.16073 7.15859 7.58427 7.37335 7.71304 7.76704C8.27013 9.47019 9.38766 10.0759 10.3553 10.25C10.4922 10.1995 10.5831 10.0697 10.6738 9.92691C11.2284 9.05353 12.1022 8.65079 12.7582 8.46219C13.0934 8.3658 13.586 8.26928 14.0002 8.26928C14.4144 8.26928 14.7502 8.60506 14.7502 9.01928C14.7502 9.43249 14.416 9.76766 14.0032 9.76927C13.7617 9.76927 13.4068 9.83646 13.1727 9.90378C12.6899 10.0426 12.2171 10.2947 11.9401 10.731C11.7815 10.9808 11.5588 11.2532 11.266 11.4544C10.9639 11.662 10.5579 11.8105 10.0908 11.7265C8.64907 11.4674 7.03698 10.5251 6.28737 8.23337C6.15859 7.83968 6.37335 7.41614 6.76704 7.28737Z',
  d9: 'M11.5908 14.536C11.1388 14.7038 10.7358 15.0268 10.3317 15.2845C9.48946 15.8216 8.63063 16.4131 7.58474 16.3597C4.46802 16.2004 2 12.3209 2 9.56692C2 5.38782 6.10119 2 11.1603 2C15.7188 2 19.4995 4.75056 20.2031 8.35214C20.4227 9.47603 19.9208 10.1613 19.3027 11.0803L22 14L20.5 16C20.712 17.471 21.4196 20.0253 20.4459 21.2837C19.2685 22.8054 16.9884 21.5105 15.6126 20.9801C14.178 20.4271 13.4607 20.1506 12.9795 19.6296C11.8449 18.4013 11.5908 14.536 11.5908 14.536ZM11.5908 14.536C13.0845 13.9816 14.3114 15.7714 15.8378 15.1043C16.3596 14.8762 16.8134 14.4444 17.2671 14.1071',
  d10: 'M21 19L18 18',
  d11: 'M11.1603 1.25098C5.82745 1.25098 1.25 4.84686 1.25 9.56789C1.25 11.1407 1.94189 12.9537 3.02491 14.389C4.10578 15.8215 5.68404 17.0145 7.54646 17.1097C8.78673 17.1731 9.80477 16.517 10.5668 16.0259L10.631 15.984C10.8041 15.869 11.2752 15.5566 11.3501 15.5083C11.5404 15.3856 11.7012 15.2966 11.8521 15.2406C12.2687 15.086 12.6875 15.2433 13.4376 15.5664C13.974 15.7977 14.7275 16.1226 15.581 15.9648L16.139 17.3275C15.0586 17.7997 14.0886 17.3815 13.438 17.101C12.6879 16.7778 12.2691 16.6205 11.8526 16.7751C11.7016 16.8312 11.5408 16.9202 11.3505 17.0429C11.3283 17.0572 11.2711 17.0948 11.1971 17.1437C11.2944 17.6132 11.4179 18.1032 11.5743 18.5597C11.7687 19.1267 12.0383 19.717 12.4286 20.1395C12.7561 20.4941 13.146 20.7427 13.6109 20.9685C14.0582 21.1857 14.621 21.4026 15.3129 21.6694L15.3428 21.6809C15.4931 21.7389 15.674 21.8156 15.8758 21.9012C16.4619 22.1498 17.2259 22.4739 17.9392 22.6342C18.9357 22.8581 20.1831 22.85 21.0391 21.7437C21.3112 21.3921 21.4791 20.9849 21.5772 20.5588L19.0371 19.7121L19.5115 18.2891L21.6884 19.0147C21.6827 18.8942 21.6746 18.7758 21.665 18.6603C21.6089 17.9875 21.4774 17.2509 21.3698 16.648C21.3411 16.4868 21.314 16.3352 21.2905 16.1969L22.75 14L20.2555 11.0073C20.7421 10.2603 21.1741 9.41186 20.9392 8.20932C20.1498 4.16857 15.9808 1.25098 11.1603 1.25098ZM12.7579 8.46371C12.102 8.65231 11.2281 9.05505 10.6736 9.92842C10.5561 10.186 10.5008 10.2778 10.3551 10.2515C9.38741 10.0774 8.26987 9.4717 7.71278 7.76855L6.28711 8.23488C7.03672 10.5266 8.64881 11.4689 10.0905 11.728C10.5576 11.812 10.9636 11.6636 11.2657 11.4559C11.5585 11.2547 11.7812 10.9823 11.9398 10.7325C12.2169 10.2962 12.6897 10.0441 13.1724 9.9053C13.4066 9.83798 13.6216 9.80384 13.7774 9.78683C13.8547 9.7784 13.9156 9.77437 13.9548 9.77246L13.8818 8.27424C13.816 8.27744 13.725 8.28365 13.6147 8.29568C13.3955 8.3196 13.0932 8.36732 12.7579 8.46371Z',
};

export const IconSkullStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="skull-stroke-rounded IconSkullStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSkullDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="skull-duotone-rounded IconSkullDuotoneRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSkullTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="skull-twotone-rounded IconSkullTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSkullSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="skull-solid-rounded IconSkullSolidRounded"
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

export const IconSkullBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="skull-bulk-rounded IconSkullBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconSkullStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="skull-stroke-sharp IconSkullStrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSkullSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="skull-solid-sharp IconSkullSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSkull: TheIconSelfPack = {
  name: 'Skull',
  StrokeRounded: IconSkullStrokeRounded,
  DuotoneRounded: IconSkullDuotoneRounded,
  TwotoneRounded: IconSkullTwotoneRounded,
  SolidRounded: IconSkullSolidRounded,
  BulkRounded: IconSkullBulkRounded,
  StrokeSharp: IconSkullStrokeSharp,
  SolidSharp: IconSkullSolidSharp,
};