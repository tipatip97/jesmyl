import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M11 22C10.1818 22 9.40019 21.6698 7.83693 21.0095C3.94564 19.3657 2 18.5438 2 17.1613C2 16.7742 2 10.0645 2 7M11 22L11 11.3548M11 22C11.3404 22 11.6463 21.9428 12 21.8285M20 7V11.5',
  d2: 'M18 18.0005L18.9056 17.0949M22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18Z',
  d3: 'M7.32592 9.69138L4.40472 8.27785C2.80157 7.5021 2 7.11423 2 6.5C2 5.88577 2.80157 5.4979 4.40472 4.72215L7.32592 3.30862C9.12883 2.43621 10.0303 2 11 2C11.9697 2 12.8712 2.4362 14.6741 3.30862L17.5953 4.72215C19.1984 5.4979 20 5.88577 20 6.5C20 7.11423 19.1984 7.5021 17.5953 8.27785L14.6741 9.69138C12.8712 10.5638 11.9697 11 11 11C10.0303 11 9.12883 10.5638 7.32592 9.69138Z',
  d4: 'M5 12L7 13',
  d5: 'M16 4L6 9',
  d6: 'M15.0061 20.6527C14.7361 20.7674 14.455 20.8861 14.1631 21.0095C12.5998 21.6698 11.8182 22 11 22C10.1818 22 9.40019 21.6698 7.83693 21.0095C3.94564 19.3657 2 18.5438 2 17.1613V7L11 11.3548L20 7V14.5351C19.4117 14.1948 18.7286 14 18 14C15.7909 14 14 15.7909 14 18C14 19.0178 14.3801 19.9468 15.0061 20.6527Z',
  d7: 'M11 3.15909C10.3303 3.15909 9.6847 3.44018 7.84245 4.31292L4.99428 5.6622C4.18359 6.04626 3.6757 6.28957 3.35735 6.5C3.6757 6.71043 4.18359 6.95374 4.99428 7.3378L6.06862 7.84675L13.7148 4.10386C12.2059 3.39461 11.613 3.15909 11 3.15909ZM15.9314 5.15325L8.2852 8.89613C9.79415 9.60539 10.387 9.84091 11 9.84091C11.6697 9.84091 12.3153 9.55982 14.1575 8.68708L17.0057 7.3378C17.8164 6.95374 18.3243 6.71043 18.6427 6.5C18.3243 6.28957 17.8164 6.04626 17.0057 5.6622L15.9314 5.15325ZM7.19088 2.50066C8.75551 1.7585 9.82754 1.25 11 1.25C12.1725 1.25 13.2445 1.7585 14.8091 2.50066C14.8742 2.53152 14.9401 2.56279 15.0069 2.59444L17.9212 3.97504C18.646 4.31831 19.285 4.62098 19.7346 4.91829C20.1847 5.21596 20.75 5.7042 20.75 6.5C20.75 7.2958 20.1847 7.78404 19.7346 8.08171C19.285 8.37902 18.646 8.68169 17.9212 9.02496L15.0069 10.4056C14.9401 10.4372 14.8742 10.4685 14.8091 10.4993C13.2445 11.2415 12.1725 11.75 11 11.75C9.82754 11.75 8.75552 11.2415 7.19089 10.4993C7.12582 10.4685 7.0599 10.4372 6.99309 10.4056L4.14491 9.05627C4.12279 9.04579 4.10075 9.03535 4.07878 9.02495C3.35402 8.68168 2.715 8.37902 2.26541 8.08171C1.81527 7.78404 1.25 7.2958 1.25 6.5C1.25 5.7042 1.81527 5.21596 2.26541 4.91829C2.715 4.62098 3.35402 4.31832 4.07878 3.97505C4.10075 3.96465 4.12279 3.95421 4.14491 3.94373L6.99309 2.59444C7.0599 2.56279 7.12581 2.53153 7.19088 2.50066Z',
  d8: 'M11.75 18.0024C11.75 14.5506 14.5482 11.7524 18 11.7524C18.6464 11.7524 19.2698 11.8505 19.8563 12.0327C20.2893 12.1672 20.5058 12.2344 20.6279 12.1445C20.75 12.0546 20.75 11.8449 20.75 11.4255L20.75 6.50244C20.75 6.47315 20.7483 6.44426 20.7451 6.41584C20.7293 6.27866 20.7214 6.21007 20.5855 6.13543C20.4495 6.06079 20.3505 6.1089 20.1523 6.20511L17.2686 7.60518L14.3474 9.01871C12.4796 9.92254 11.7576 10.2524 11 10.2524C10.2424 10.2524 9.52044 9.92254 7.6526 9.01871L4.7314 7.60517L1.84771 6.20511C1.64954 6.1089 1.55046 6.06079 1.41453 6.13543C1.2786 6.21007 1.27072 6.27866 1.25495 6.41584C1.25168 6.44426 1.25 6.47315 1.25 6.50244L1.25 17.1637C1.25 18.2841 2.06734 19.0293 3.07333 19.6329C4.09172 20.244 5.80103 20.9661 7.69413 21.7658L7.69414 21.7658C9.11317 22.3657 10.028 22.7524 11 22.7524C11.5024 22.7524 11.9895 22.6491 12.5388 22.4665C12.8908 22.3494 13.0669 22.2909 13.1149 22.1499C13.1629 22.0089 13.0469 21.8371 12.8151 21.4934C12.1426 20.4966 11.75 19.2953 11.75 18.0024ZM5.33557 11.3306C4.96509 11.1454 4.51459 11.2955 4.32934 11.666C4.1441 12.0365 4.29427 12.487 4.66475 12.6723L6.66475 13.6723C7.03524 13.8575 7.48574 13.7073 7.67098 13.3368C7.85623 12.9664 7.70606 12.5159 7.33557 12.3306L5.33557 11.3306Z',
  d9: 'M18 13.25C15.3766 13.25 13.25 15.3766 13.25 18C13.25 20.6234 15.3766 22.75 18 22.75C20.6234 22.75 22.75 20.6234 22.75 18C22.75 15.3766 20.6234 13.25 18 13.25ZM19.6128 17.8009C20.0033 17.4103 20.0033 16.7772 19.6128 16.3866C19.2222 15.9961 18.5891 15.9961 18.1985 16.3866L17.2929 17.2923C16.9024 17.6828 16.9024 18.316 17.2929 18.7065C17.6834 19.097 18.3166 19.097 18.7071 18.7065L19.6128 17.8009Z',
  d10: 'M4.32934 11.6638C4.51459 11.2933 4.96509 11.1431 5.33557 11.3284L7.33557 12.3284C7.70606 12.5136 7.85623 12.9641 7.67098 13.3346C7.48574 13.7051 7.03524 13.8553 6.66475 13.67L4.66475 12.67C4.29427 12.4848 4.1441 12.0343 4.32934 11.6638Z',
  d11: 'M18 13.249C15.3766 13.249 13.25 15.3757 13.25 17.999C13.25 20.6224 15.3766 22.749 18 22.749C20.6234 22.749 22.75 20.6224 22.75 17.999C22.75 15.3757 20.6234 13.249 18 13.249ZM19.6128 17.7999C20.0033 17.4094 20.0033 16.7762 19.6128 16.3857C19.2222 15.9951 18.5891 15.9951 18.1985 16.3857L17.2929 17.2913C16.9024 17.6818 16.9024 18.315 17.2929 18.7055C17.6834 19.0961 18.3166 19.0961 18.7071 18.7055L19.6128 17.7999Z',
  d12: 'M18 11.7491C14.5482 11.7491 11.75 14.5474 11.75 17.9991C11.75 19.5997 12.3516 21.0597 13.3411 22.1654C12.4329 22.5306 11.7327 22.7503 11 22.7503C10.028 22.7503 9.11317 22.3636 7.69413 21.7636C5.80103 20.964 4.09172 20.2419 3.07333 19.6308C2.06734 19.0271 1.25 18.282 1.25 17.1616V6.50031C1.25 5.7045 1.81527 5.21596 2.26541 4.91829C2.715 4.62098 3.35402 4.31832 4.07878 3.97505L7.19088 2.50066C8.75551 1.7585 9.82754 1.25 11 1.25C12.1725 1.25 13.2445 1.7585 14.8091 2.50066L17.9213 3.97507C18.646 4.31832 19.285 4.621 19.7346 4.91829C20.1847 5.21596 20.75 5.7045 20.75 6.50031V12.3851C19.9201 11.9778 18.9868 11.7491 18 11.7491ZM11.0001 3.15912C10.3304 3.15912 9.68477 3.4402 7.84253 4.31294L4.99436 5.66223C4.18366 6.04629 3.67577 6.28959 3.35742 6.50003C3.67577 6.71046 4.18366 6.95377 4.99436 7.33782L8.28528 8.89616C9.79422 9.60541 10.387 9.84094 11.0001 9.84094C11.6698 9.84094 12.3154 9.55985 14.1576 8.68711L17.0058 7.33783C17.8165 6.95377 18.3244 6.71046 18.6427 6.50003C18.3244 6.28959 17.8165 6.04628 17.0058 5.66223L13.7149 4.10389C12.2059 3.39464 11.6131 3.15912 11.0001 3.15912Z',
  d13: 'M6.06836 7.84738L13.7145 4.10449L15.9311 5.15388L8.28495 8.89676L6.06836 7.84738Z',
  d14: 'M11 10L20 6L11 2L2 6L11 10Z',
  d15: 'M15.5 4L6.5 8',
  d16: 'M17.5 18.5L19.5 16.5M22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18Z',
  d17: 'M2 6.00784V18.0268L10.8705 21.9873C10.9367 22.0168 11.0113 21.9683 11.0113 21.8958V10.0477M20 5.99609V12.0173',
  d18: 'M18 11.75C14.5482 11.75 11.75 14.5482 11.75 18C11.75 19.4685 12.2565 20.8187 13.1043 21.8855L11.3046 22.6854C11.1107 22.7715 10.8893 22.7715 10.6954 22.6854L1.25 18.4874V6C1.25 5.62457 1.47692 5.28435 1.82902 5.13188L10.604 1.33188C10.8561 1.22271 11.1439 1.22271 11.396 1.33188L20.171 5.13188C20.5231 5.28435 20.75 5.62457 20.75 6V12.3859C19.9201 11.9787 18.9868 11.75 18 11.75ZM4.62566 6L6.61244 6.86037L12.9868 4.09997L11 3.2396L4.62566 6ZM15.3874 5.13957L9.0131 7.89997L11 8.7604L17.3743 6L15.3874 5.13957ZM7.5 14L5 12.5V11L7.5 12.5V14Z',
  d19: 'M18 13.25C15.3766 13.25 13.25 15.3766 13.25 18C13.25 20.6234 15.3766 22.75 18 22.75C20.6234 22.75 22.75 20.6234 22.75 18C22.75 15.3766 20.6234 13.25 18 13.25ZM18.2072 19.2072L20.2072 17.2072L18.793 15.793L16.793 17.793L18.2072 19.2072Z',
} as const;

export const IconPackageProcessStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-process-stroke-rounded IconPackageProcessStrokeRounded"
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

export const IconPackageProcessDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-process-duotone-rounded IconPackageProcessDuotoneRounded"
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

export const IconPackageProcessTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-process-twotone-rounded IconPackageProcessTwotoneRounded"
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

export const IconPackageProcessSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-process-solid-rounded IconPackageProcessSolidRounded"
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

export const IconPackageProcessBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-process-bulk-rounded IconPackageProcessBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconPackageProcessStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-process-stroke-sharp IconPackageProcessStrokeSharp"
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
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPackageProcessSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="package-process-solid-sharp IconPackageProcessSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPackageProcess: TheIconSelfPack = {
  name: 'PackageProcess',
  StrokeRounded: IconPackageProcessStrokeRounded,
  DuotoneRounded: IconPackageProcessDuotoneRounded,
  TwotoneRounded: IconPackageProcessTwotoneRounded,
  SolidRounded: IconPackageProcessSolidRounded,
  BulkRounded: IconPackageProcessBulkRounded,
  StrokeSharp: IconPackageProcessStrokeSharp,
  SolidSharp: IconPackageProcessSolidSharp,
};