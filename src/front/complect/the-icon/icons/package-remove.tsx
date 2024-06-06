import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11 22C10.1818 22 9.40019 21.6698 7.83693 21.0095C3.94564 19.3657 2 18.5438 2 17.1613C2 16.7742 2 10.0645 2 7M11 22L11 11.3548M11 22C11.6167 22 12.12 21.8124 13 21.4372M20 7V12',
  d2: 'M16 15L19 18M19 18L22 21M19 18L16 21M19 18L22 15',
  d3: 'M7.32592 9.69138L4.40472 8.27785C2.80157 7.5021 2 7.11423 2 6.5C2 5.88577 2.80157 5.4979 4.40472 4.72215L7.32592 3.30862C9.12883 2.43621 10.0303 2 11 2C11.9697 2 12.8712 2.4362 14.6741 3.30862L17.5953 4.72215C19.1984 5.4979 20 5.88577 20 6.5C20 7.11423 19.1984 7.5021 17.5953 8.27785L14.6741 9.69138C12.8712 10.5638 11.9697 11 11 11C10.0303 11 9.12883 10.5638 7.32592 9.69138Z',
  d4: 'M5 12L7 13',
  d5: 'M16 4L6 9',
  d6: 'M20 17.1613C20 18.5438 18.0544 19.3657 14.1631 21.0095C12.5998 21.6698 11.8182 22 11 22C10.1818 22 9.40019 21.6698 7.83693 21.0095C3.94564 19.3657 2 18.5438 2 17.1613L2 7L11 11.3548L20 7V17.1613Z',
  d7: 'M10.875 3.15909C10.2053 3.15909 9.5597 3.44018 7.71745 4.31292L4.86928 5.6622C4.05859 6.04626 3.5507 6.28957 3.23235 6.5C3.5507 6.71043 4.05859 6.95374 4.86928 7.3378L5.94362 7.84675L13.5898 4.10386C12.0809 3.39461 11.488 3.15909 10.875 3.15909ZM15.8064 5.15325L8.1602 8.89613C9.66915 9.60539 10.262 9.84091 10.875 9.84091C11.5447 9.84091 12.1903 9.55982 14.0325 8.68708L16.8807 7.3378C17.6914 6.95374 18.1993 6.71043 18.5177 6.5C18.1993 6.28957 17.6914 6.04626 16.8807 5.6622L15.8064 5.15325ZM7.06588 2.50066C8.63051 1.7585 9.70254 1.25 10.875 1.25C12.0475 1.25 13.1195 1.7585 14.6841 2.50066C14.7492 2.53152 14.8151 2.56279 14.8819 2.59444L17.7962 3.97504C18.521 4.31831 19.16 4.62098 19.6096 4.91829C20.0597 5.21596 20.625 5.7042 20.625 6.5C20.625 7.2958 20.0597 7.78404 19.6096 8.08171C19.16 8.37902 18.521 8.68169 17.7962 9.02496L14.8819 10.4056C14.8151 10.4372 14.7492 10.4685 14.6841 10.4993C13.1195 11.2415 12.0475 11.75 10.875 11.75C9.70254 11.75 8.63052 11.2415 7.06589 10.4993C7.00082 10.4685 6.9349 10.4372 6.86809 10.4056L4.01991 9.05627C3.99779 9.04579 3.97575 9.03535 3.95378 9.02495C3.22902 8.68168 2.59 8.37902 2.14041 8.08171C1.69027 7.78404 1.125 7.2958 1.125 6.5C1.125 5.7042 1.69027 5.21596 2.14041 4.91829C2.59 4.62098 3.22902 4.31832 3.95378 3.97505C3.97575 3.96465 3.99779 3.95421 4.01991 3.94373L6.86809 2.59444C6.9349 2.56279 7.00081 2.53153 7.06588 2.50066Z',
  d8: 'M20.5946 12.7901C20.625 12.7279 20.625 12.6483 20.625 12.4892L20.625 6.50122C20.625 6.47193 20.6233 6.44304 20.6201 6.41462C20.6043 6.27744 20.5964 6.20885 20.4605 6.13421C20.3245 6.05957 20.2255 6.10768 20.0273 6.20389L17.1436 7.60395L14.2224 9.01749C12.3546 9.92132 11.6326 10.2512 10.875 10.2512C10.1174 10.2512 9.39544 9.92132 7.5276 9.01749L4.6064 7.60395L1.72271 6.20389C1.52454 6.10768 1.42546 6.05957 1.28953 6.13421C1.1536 6.20885 1.14572 6.27744 1.12995 6.41462C1.12668 6.44304 1.125 6.47193 1.125 6.50122L1.125 17.1625C1.125 18.2829 1.94234 19.0281 2.94833 19.6317C3.96672 20.2428 5.67603 20.9649 7.56913 21.7646L7.56914 21.7646C8.98817 22.3645 9.90296 22.7512 10.875 22.7512C11.554 22.7512 12.2051 22.5625 13.0196 22.2442L13.0197 22.2442C13.2666 22.1477 13.39 22.0995 13.4426 22.0064C13.4951 21.9134 13.4672 21.7515 13.4114 21.4277C13.2782 20.6544 13.5102 19.8305 14.1072 19.2334L14.9152 18.4254C15.1152 18.2254 15.2152 18.1254 15.2152 18.0012C15.2152 17.8769 15.1152 17.7769 14.9152 17.5769L14.1072 16.769C13.1309 15.7926 13.1309 14.2097 14.1072 13.2334C15.0835 12.2571 16.6665 12.2571 17.6428 13.2334L18.4507 14.0414C18.6507 14.2414 18.7507 14.3414 18.875 14.3414C18.9993 14.3414 19.0993 14.2414 19.2993 14.0414L20.1072 13.2334C20.181 13.1597 20.2581 13.0915 20.3383 13.0289L20.3383 13.0289C20.4889 12.9112 20.5643 12.8524 20.5946 12.7901ZM5.21057 11.3294C4.84009 11.1442 4.38959 11.2943 4.20434 11.6648C4.0191 12.0353 4.16927 12.4858 4.53975 12.671L6.53975 13.671C6.91024 13.8563 7.36074 13.7061 7.54598 13.3356C7.73123 12.9651 7.58106 12.5146 7.21057 12.3294L5.21057 11.3294Z',
  d9: 'M22.5821 14.2929C22.9726 14.6834 22.9726 15.3166 22.5821 15.7071L20.2892 18L22.5821 20.2929C22.9726 20.6834 22.9726 21.3166 22.5821 21.7071C22.1916 22.0976 21.5584 22.0976 21.1679 21.7071L18.875 19.4142L16.5821 21.7071C16.1916 22.0976 15.5584 22.0976 15.1679 21.7071C14.7774 21.3166 14.7774 20.6834 15.1679 20.2929L17.4608 18L15.1679 15.7071C14.7774 15.3166 14.7774 14.6834 15.1679 14.2929C15.5584 13.9024 16.1916 13.9024 16.5821 14.2929L18.875 16.5858L21.1679 14.2929C21.5584 13.9024 22.1916 13.9024 22.5821 14.2929Z',
  d10: 'M4.32934 11.6638C4.51459 11.2933 4.96509 11.1431 5.33557 11.3284L7.33557 12.3284C7.70606 12.5136 7.85623 12.9641 7.67098 13.3346C7.48574 13.7051 7.03524 13.8553 6.66475 13.67L4.66475 12.67C4.29427 12.4848 4.1441 12.0343 4.32934 11.6638Z',
  d11: 'M6.06836 7.84738L13.7145 4.10449L15.9311 5.15388L8.28495 8.89676L6.06836 7.84738Z',
  d12: 'M22.4571 14.2919C22.8476 14.6824 22.8476 15.3156 22.4571 15.7061L20.1642 17.999L22.4571 20.2919C22.8476 20.6824 22.8476 21.3156 22.4571 21.7061C22.0666 22.0967 21.4334 22.0967 21.0429 21.7061L18.75 19.4132L16.4571 21.7061C16.0666 22.0967 15.4334 22.0967 15.0429 21.7061C14.6524 21.3156 14.6524 20.6824 15.0429 20.2919L17.3358 17.999L15.0429 15.7061C14.6524 15.3156 14.6524 14.6824 15.0429 14.2919C15.4334 13.9014 16.0666 13.9014 16.4571 14.2919L18.75 16.5848L21.0429 14.2919C21.4334 13.9014 22.0666 13.9014 22.4571 14.2919Z',
  d13: 'M20.75 12.7071C20.4713 12.8286 20.2102 13.0034 19.9822 13.2314L18.75 14.4636L17.5178 13.2314C16.5415 12.2551 14.9585 12.2551 13.9822 13.2314C13.0059 14.2077 13.0059 15.7906 13.9822 16.7669L15.2145 17.9991L13.9822 19.2314C13.2064 20.0072 13.0471 21.166 13.5043 22.0992C12.5155 22.5038 11.776 22.7503 11 22.7503C10.028 22.7503 9.11317 22.3636 7.69413 21.7636C5.80103 20.964 4.09172 20.2419 3.07333 19.6308C2.06734 19.0271 1.25 18.282 1.25 17.1616V6.50031C1.25 5.7045 1.81527 5.21596 2.26541 4.91829C2.715 4.62098 3.35402 4.31832 4.07878 3.97505L7.19088 2.50066C8.75551 1.7585 9.82754 1.25 11 1.25C12.1725 1.25 13.2445 1.7585 14.8091 2.50066L17.9213 3.97507C18.646 4.31832 19.285 4.621 19.7346 4.91829C20.1847 5.21596 20.75 5.7045 20.75 6.50031V12.7071ZM11.0001 3.15912C10.3304 3.15912 9.68477 3.4402 7.84253 4.31294L4.99436 5.66223C4.18366 6.04629 3.67577 6.28959 3.35742 6.50003C3.67577 6.71046 4.18366 6.95377 4.99436 7.33782L8.28528 8.89616C9.79422 9.60541 10.387 9.84094 11.0001 9.84094C11.6698 9.84094 12.3154 9.55985 14.1576 8.68711L17.0058 7.33783C17.8165 6.95377 18.3244 6.71046 18.6427 6.50003C18.3244 6.28959 17.8165 6.04628 17.0058 5.66223L13.7149 4.10389C12.2059 3.39464 11.6131 3.15912 11.0001 3.15912Z',
  d14: 'M11 10L20 6L11 2L2 6L11 10Z',
  d15: 'M15.5 4L6.5 8',
  d16: 'M2.00488 6.00195V18.0022L10.9466 21.9913C10.9725 22.0029 11.0021 22.0029 11.028 21.9914L13.4994 20.8911M10.9839 10.0476V21.4206M20 6V12.9942',
  d17: 'M17.6288 19.0433L15.3359 21.3362L16.7502 22.7504L19.043 20.4575L21.3359 22.7504L22.7502 21.3362L20.4573 19.0433L22.7502 16.7504L21.3359 15.3362L19.043 17.6291L16.7502 15.3362L15.3359 16.7504L17.6288 19.0433Z',
  d18: 'M20.75 13.801V6.00098C20.75 5.62555 20.5231 5.28533 20.171 5.13285L11.396 1.33285C11.1439 1.22368 10.8561 1.22368 10.604 1.33285L1.82902 5.13285C1.47692 5.28533 1.25 5.62555 1.25 6.00098V18.4884L10.6954 22.6863C10.8893 22.7725 11.1107 22.7725 11.3046 22.6863L13.5618 21.6831L13.2148 21.3362L15.5077 19.0433L13.2148 16.7504L16.7504 13.2148L19.0433 15.5077L20.75 13.801ZM4.62566 6.00098L6.61244 6.86135L12.9868 4.10095L11 3.24058L4.62566 6.00098ZM15.3874 5.14055L9.0131 7.90095L11 8.76137L17.3743 6.00098L15.3874 5.14055ZM7.5 14.001L5 12.501V11.001L7.5 12.501V14.001Z',
};

export const IconPackageRemoveStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-remove-stroke-rounded IconPackageRemoveStrokeRounded"
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

export const IconPackageRemoveDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-remove-duotone-rounded IconPackageRemoveDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageRemoveTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-remove-twotone-rounded IconPackageRemoveTwotoneRounded"
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

export const IconPackageRemoveSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-remove-solid-rounded IconPackageRemoveSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconPackageRemoveBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-remove-bulk-rounded IconPackageRemoveBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageRemoveStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-remove-stroke-sharp IconPackageRemoveStrokeSharp"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageRemoveSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="package-remove-solid-sharp IconPackageRemoveSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPackageRemove: TheIconSelfPack = {
  name: 'PackageRemove',
  StrokeRounded: IconPackageRemoveStrokeRounded,
  DuotoneRounded: IconPackageRemoveDuotoneRounded,
  TwotoneRounded: IconPackageRemoveTwotoneRounded,
  SolidRounded: IconPackageRemoveSolidRounded,
  BulkRounded: IconPackageRemoveBulkRounded,
  StrokeSharp: IconPackageRemoveStrokeSharp,
  SolidSharp: IconPackageRemoveSolidSharp,
};