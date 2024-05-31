import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 7V12M3 7C3 10.0645 3 16.7742 3 17.1613C3 18.5438 4.94564 19.3657 8.83693 21.0095C10.4002 21.6698 11.1818 22 12 22L12 11.3548',
  d2: 'M15 19C15 19 15.875 19 16.75 21C16.75 21 19.5294 16 22 15',
  d3: 'M8.32592 9.69138L5.40472 8.27785C3.80157 7.5021 3 7.11423 3 6.5C3 5.88577 3.80157 5.4979 5.40472 4.72215L8.32592 3.30862C10.1288 2.43621 11.0303 2 12 2C12.9697 2 13.8712 2.4362 15.6741 3.30862L18.5953 4.72215C20.1984 5.4979 21 5.88577 21 6.5C21 7.11423 20.1984 7.5021 18.5953 8.27785L15.6741 9.69138C13.8712 10.5638 12.9697 11 12 11C11.0303 11 10.1288 10.5638 8.32592 9.69138Z',
  d4: 'M6 12L8 13',
  d5: 'M17 4L7 9',
  d6: 'M21 17.1613C21 18.5438 19.0544 19.3657 15.1631 21.0095C13.5998 21.6698 12.8182 22 12 22C11.1818 22 10.4002 21.6698 8.83693 21.0095C4.94564 19.3657 3 18.5438 3 17.1613L3 7L12 11.3548L21 7V17.1613Z',
  d7: 'M22.3019 14.6251C22.5092 15.137 22.2621 15.72 21.7502 15.9272C21.3162 16.1029 20.7921 16.4928 20.2203 17.0659C19.6613 17.6262 19.1158 18.301 18.6312 18.9648C18.1487 19.626 17.7385 20.2596 17.4487 20.7289C17.3041 20.963 17.077 21.3523 16.9999 21.4845L16.999 21.4861C16.8143 21.8183 16.4572 22.0172 16.0775 21.9991C15.6978 21.9811 15.3612 21.7493 15.2088 21.4011C14.8182 20.5082 14.472 20.1647 14.3158 20.0457C14.2769 20.016 14.2481 19.999 14.231 19.99C13.7469 19.9201 13.375 19.5036 13.375 19.0003C13.375 18.448 13.8227 18.0003 14.375 18.0003C14.582 18.0003 14.7343 18.0478 14.8358 18.0809C15.0406 18.1478 15.2769 18.2636 15.5279 18.4548C15.7288 18.6079 15.9343 18.8054 16.1397 19.0587C16.391 18.6724 16.6871 18.236 17.0158 17.7857C17.5349 17.0745 18.1475 16.3118 18.8045 15.6533C19.4487 15.0077 20.1985 14.3977 20.9998 14.0733C21.5117 13.8661 22.0947 14.1131 22.3019 14.6251Z',
  d8: 'M11.375 3.15909C10.7053 3.15909 10.0597 3.44018 8.21745 4.31292L5.36928 5.6622C4.55859 6.04626 4.0507 6.28957 3.73235 6.5C4.0507 6.71043 4.55859 6.95374 5.36928 7.3378L6.44362 7.84675L14.0898 4.10386C12.5809 3.39461 11.988 3.15909 11.375 3.15909ZM16.3064 5.15325L8.6602 8.89613C10.1691 9.60539 10.762 9.84091 11.375 9.84091C12.0447 9.84091 12.6903 9.55982 14.5325 8.68708L17.3807 7.3378C18.1914 6.95374 18.6993 6.71043 19.0177 6.5C18.6993 6.28957 18.1914 6.04626 17.3807 5.6622L16.3064 5.15325ZM7.56588 2.50066C9.13051 1.7585 10.2025 1.25 11.375 1.25C12.5475 1.25 13.6195 1.7585 15.1841 2.50066C15.2492 2.53152 15.3151 2.56279 15.3819 2.59444L18.2962 3.97504C19.021 4.31831 19.66 4.62098 20.1096 4.91829C20.5597 5.21596 21.125 5.7042 21.125 6.5C21.125 7.2958 20.5597 7.78404 20.1096 8.08171C19.66 8.37902 19.021 8.68169 18.2962 9.02496L15.3819 10.4056C15.3151 10.4372 15.2492 10.4685 15.1841 10.4993C13.6195 11.2415 12.5475 11.75 11.375 11.75C10.2025 11.75 9.13052 11.2415 7.56589 10.4993C7.50082 10.4685 7.4349 10.4372 7.36809 10.4056L4.51991 9.05627C4.49779 9.04579 4.47575 9.03535 4.45378 9.02495C3.72902 8.68168 3.09 8.37902 2.64041 8.08171C2.19027 7.78404 1.625 7.2958 1.625 6.5C1.625 5.7042 2.19027 5.21596 2.64041 4.91829C3.09 4.62098 3.72902 4.31832 4.45378 3.97505C4.47575 3.96465 4.49779 3.95421 4.51991 3.94373L7.36809 2.59444C7.4349 2.56279 7.50081 2.53153 7.56588 2.50066Z',
  d9: 'M21.0681 12.4114C21.125 12.3327 21.125 12.2124 21.125 11.9718L21.125 6.50244C21.125 6.47315 21.1233 6.44426 21.1201 6.41584C21.1043 6.27866 21.0964 6.21007 20.9605 6.13543C20.8245 6.06079 20.7255 6.1089 20.5273 6.20511L17.6436 7.60518L14.7224 9.01871C12.8546 9.92254 12.1326 10.2524 11.375 10.2524C10.6174 10.2524 9.89544 9.92254 8.0276 9.01871L5.1064 7.60517L2.22271 6.20511C2.02454 6.1089 1.92546 6.06079 1.78953 6.13543C1.6536 6.21007 1.64572 6.27866 1.62995 6.41584C1.62668 6.44426 1.625 6.47315 1.625 6.50244L1.625 17.1637C1.625 18.2841 2.44234 19.0293 3.44833 19.6329C4.46672 20.244 6.17603 20.9661 8.06913 21.7658L8.06914 21.7658C9.48817 22.3657 10.403 22.7524 11.375 22.7524C11.9941 22.7524 12.5899 22.5956 13.3076 22.3267C13.5798 22.2247 13.7159 22.1737 13.7632 22.0441C13.8106 21.9145 13.7425 21.7933 13.6063 21.5509C13.5935 21.5282 13.5812 21.5067 13.5694 21.4865C13.5318 21.4222 13.513 21.39 13.4795 21.3593C13.446 21.3287 13.4001 21.307 13.3084 21.2637L13.3083 21.2637C12.4609 20.8634 11.875 20.0021 11.875 19.0024C11.875 17.6217 12.9943 16.5024 14.375 16.5024C14.823 16.5024 15.1565 16.6098 15.3014 16.6571C15.3189 16.6629 15.3365 16.6688 15.3541 16.6748C15.6045 16.7611 15.7297 16.8043 15.8225 16.7762C15.9154 16.7481 15.9872 16.654 16.1307 16.4658C16.6062 15.8423 17.1524 15.1876 17.7426 14.596C18.4414 13.8957 19.3604 13.1208 20.437 12.685C20.4896 12.6638 20.5424 12.6444 20.5954 12.6269C20.8725 12.5357 21.0111 12.4901 21.0681 12.4114ZM5.71057 11.3306C5.34009 11.1454 4.88959 11.2955 4.70434 11.666C4.5191 12.0365 4.66927 12.487 5.03975 12.6723L7.03975 13.6723C7.41024 13.8575 7.86074 13.7073 8.04598 13.3368C8.23123 12.9664 8.08106 12.5159 7.71057 12.3306L5.71057 11.3306Z',
  d10: 'M22.6769 15.3751C22.8842 15.887 22.6371 16.47 22.1252 16.6772C21.6912 16.8529 21.1671 17.2428 20.5953 17.8159C20.0363 18.3762 19.4908 19.051 19.0062 19.7148C18.5237 20.376 18.1135 21.0096 17.8237 21.4789C17.6791 21.713 17.452 22.1023 17.3749 22.2345L17.374 22.2361C17.1893 22.5683 16.8322 22.7672 16.4525 22.7491C16.0728 22.7311 15.7362 22.4993 15.5838 22.1511C15.1932 21.2582 14.847 20.9147 14.6908 20.7957C14.6519 20.766 14.6231 20.749 14.606 20.74C14.1219 20.6701 13.75 20.2536 13.75 19.7503C13.75 19.198 14.1977 18.7503 14.75 18.7503C14.957 18.7503 15.1093 18.7978 15.2108 18.8309C15.4156 18.8978 15.6519 19.0136 15.9029 19.2048C16.1038 19.3579 16.3093 19.5554 16.5147 19.8087C16.766 19.4224 17.0621 18.986 17.3908 18.5357C17.9099 17.8245 18.5225 17.0618 19.1795 16.4033C19.8237 15.7577 20.5735 15.1477 21.3748 14.8233C21.8867 14.6161 22.4697 14.8631 22.6769 15.3751Z',
  d11: 'M13.6989 22.0189C12.8431 21.6218 12.25 20.7562 12.25 19.7503C12.25 18.3696 13.3693 17.2503 14.75 17.2503C15.198 17.2503 15.5315 17.3577 15.6764 17.405C15.8478 17.461 16.0228 17.5332 16.1994 17.6238C16.7406 16.8843 17.3962 16.067 18.1176 15.3439C18.803 14.657 19.7001 13.8985 20.75 13.4585V6.50031C20.75 5.7045 20.1847 5.21596 19.7346 4.91829C19.285 4.621 18.646 4.31835 17.9213 3.9751L14.8091 2.50066C13.2445 1.7585 12.1725 1.25 11 1.25C9.82754 1.25 8.75551 1.7585 7.19088 2.50066L4.07878 3.97505C3.35402 4.31832 2.715 4.62098 2.26541 4.91829C1.81527 5.21596 1.25 5.7045 1.25 6.50031V17.1616C1.25 18.282 2.06734 19.0271 3.07333 19.6308C4.09172 20.2419 5.80103 20.964 7.69413 21.7636C9.11317 22.3636 10.028 22.7503 11 22.7503C11.8261 22.7503 12.6109 22.471 13.6989 22.0189ZM11.0001 3.15912C10.3304 3.15912 9.68477 3.4402 7.84253 4.31294L4.99436 5.66223C4.18366 6.04629 3.67577 6.28959 3.35742 6.50003C3.67577 6.71046 4.18366 6.95377 4.99436 7.33782L8.28528 8.89616C9.79422 9.60541 10.387 9.84094 11.0001 9.84094C11.6698 9.84094 12.3154 9.55985 14.1576 8.68711L17.0058 7.33783C17.8165 6.95377 18.3244 6.71046 18.6427 6.50003C18.3244 6.28959 17.8165 6.04628 17.0058 5.66223L13.7149 4.10389C12.2059 3.39464 11.6131 3.15912 11.0001 3.15912Z',
  d12: 'M4.32934 11.6648C4.51459 11.2943 4.96509 11.1441 5.33557 11.3293L7.33557 12.3293C7.70606 12.5146 7.85623 12.9651 7.67098 13.3356C7.48574 13.7061 7.03524 13.8562 6.66475 13.671L4.66475 12.671C4.29427 12.4857 4.1441 12.0352 4.32934 11.6648Z',
  d13: 'M6.06836 7.84835L13.7145 4.10547L15.9311 5.15485L8.28495 8.89774L6.06836 7.84835Z',
  d14: 'M11 10L20 6L11 2L2 6L11 10Z',
  d15: 'M15.5 4L6.5 8',
  d16: 'M5 12L7 13',
  d17: 'M15 19L16.75 21L22 15',
  d18: 'M2.00391 6.03083L2.00394 18.0453L10.8594 21.9912C10.9256 22.0207 11 21.9722 11 21.8996V10.0047M20 6V12.5125',
  d19: 'M22.7503 15.8905L16.7477 22.7506L14.2451 19.8905L15.7503 18.5735L16.7477 19.7134L21.2451 14.5735L22.7503 15.8905Z',
  d20: 'M13.7461 21.5989L12.1279 19.7496L15.8908 16.457L16.7471 17.4357L20.749 12.8621V5.99902C20.749 5.62359 20.5221 5.28338 20.17 5.1309L11.395 1.3309C11.1429 1.22173 10.8551 1.22173 10.603 1.3309L1.82804 5.1309C1.47594 5.28338 1.24902 5.62359 1.24902 5.99902V18.4864L10.6944 22.6844C10.8883 22.7706 11.1097 22.7706 11.3036 22.6844L13.7461 21.5989ZM4.62468 5.99902L6.61146 6.85939L12.9858 4.099L10.999 3.23862L4.62468 5.99902ZM15.3865 5.1386L9.01212 7.899L10.999 8.75942L17.3734 5.99902L15.3865 5.1386ZM7.49902 13.999L4.99902 12.499V10.999L7.49902 12.499V13.999Z',
} as const;

export const IconPackageDeliveredStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-delivered-stroke-rounded IconPackageDeliveredStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageDeliveredDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-delivered-duotone-rounded IconPackageDeliveredDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageDeliveredTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-delivered-twotone-rounded IconPackageDeliveredTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageDeliveredSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-delivered-solid-rounded IconPackageDeliveredSolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageDeliveredBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-delivered-bulk-rounded IconPackageDeliveredBulkRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageDeliveredStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-delivered-stroke-sharp IconPackageDeliveredStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconPackageDeliveredSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-delivered-solid-sharp IconPackageDeliveredSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPackageDelivered: TheIconSelfPack = {
  name: 'PackageDelivered',
  StrokeRounded: IconPackageDeliveredStrokeRounded,
  DuotoneRounded: IconPackageDeliveredDuotoneRounded,
  TwotoneRounded: IconPackageDeliveredTwotoneRounded,
  SolidRounded: IconPackageDeliveredSolidRounded,
  BulkRounded: IconPackageDeliveredBulkRounded,
  StrokeSharp: IconPackageDeliveredStrokeSharp,
  SolidSharp: IconPackageDeliveredSolidSharp,
};