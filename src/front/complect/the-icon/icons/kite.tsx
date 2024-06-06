import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 2C7.71429 4.40741 4 8 2 14C5 12 9 11 12 14C15 11 19 12 22 14C20 8 16.2857 4.40741 12 2Z',
  d2: 'M11.9999 14C10.3912 14.7327 7.69631 15.8188 8.02333 18',
  d3: 'M11.6716 14C13.0709 17.203 9.38762 19.5 11.9053 22',
  d4: 'M12 14C14 14 13.5 18.5 15 19',
  d5: 'M12 14V2',
  d6: 'M10 7.00036C10.2913 6.73558 10.6667 6.52338 11.0134 6.36376C11.379 6.19547 11.5618 6.11133 12 6.11133C12.4382 6.11133 12.621 6.19547 12.9866 6.36376C13.3333 6.52338 13.7087 6.73558 14 7.00036',
  d7: 'M11.9999 14C10.3912 14.7327 7.69631 15.8188 8.02332 18',
  d8: 'M11.6716 14C13.0709 17.203 9.3876 19.5 11.9053 22',
  d9: 'M11.998 14V2M9.99805 7.00036C10.2893 6.73558 10.6647 6.52338 11.0114 6.36376C11.377 6.19547 11.5598 6.11133 11.998 6.11133C12.4362 6.11133 12.619 6.19547 12.9846 6.36376C13.3313 6.52338 13.7067 6.73558 13.998 7.00036',
  d10: 'M11.6896 13.044C11.7872 12.9996 11.8933 12.9766 12.0005 12.9766C12.8556 12.9766 13.4068 13.4876 13.7452 14.0516C14.0653 14.5852 14.2593 15.2628 14.4133 15.8482C14.446 15.9723 14.477 16.0929 14.5071 16.2098C14.6304 16.6886 14.738 17.1065 14.8774 17.4577C15.0612 17.9211 15.2033 18.0036 15.2378 18.015C15.6307 18.146 15.8431 18.5708 15.7121 18.9637C15.5811 19.3567 15.1564 19.5691 14.7634 19.4381C14.0479 19.1996 13.6899 18.5321 13.4831 18.011C13.3052 17.5625 13.1675 17.0258 13.0432 16.5412C13.0159 16.4344 12.9891 16.3302 12.9627 16.2299C12.9577 16.2107 12.9526 16.1916 12.9476 16.1726C12.8092 16.8466 12.5602 17.4572 12.3441 17.9874C12.3048 18.0836 12.2667 18.1772 12.2305 18.268C11.9711 18.9184 11.8054 19.4167 11.8053 19.8725C11.8052 20.2729 11.9345 20.6981 12.4343 21.1944C12.7282 21.4862 12.7299 21.9611 12.438 22.255C12.1462 22.5489 11.6713 22.5506 11.3774 22.2588C10.6184 21.5051 10.305 20.7055 10.3053 19.8721C10.3055 19.094 10.5832 18.3491 10.8372 17.7124C10.8657 17.6408 10.894 17.5701 10.9221 17.5002C11.3225 16.5021 11.6594 15.6623 11.5281 14.7656C10.9042 15.0553 10.2663 15.3793 9.74099 15.7798C9.00392 16.3418 8.66106 16.918 8.76562 17.6154C8.82703 18.025 8.54474 18.4069 8.13511 18.4683C7.72547 18.5297 7.34361 18.2474 7.2822 17.8378C7.05973 16.3539 7.90079 15.2965 8.83158 14.5869C9.65138 13.962 10.6743 13.5015 11.4308 13.161C11.5211 13.1203 11.6077 13.0813 11.6896 13.044Z',
  d11: 'M11.25 1.98643C11.25 1.67609 11.25 1.52092 11.1474 1.46371C11.0448 1.40651 10.9143 1.48717 10.6533 1.64849C6.64879 4.1235 3.20314 7.74431 1.28853 13.4881C1.18721 13.7921 1.29017 14.1268 1.5448 14.3213C1.79943 14.5158 2.14948 14.5271 2.41607 14.3493C3.84624 13.3959 5.47226 12.7113 7.05348 12.5984C8.60747 12.4874 10.1378 12.9237 11.4697 14.2556C11.7626 14.5485 12.2375 14.5485 12.5304 14.2556C13.8623 12.9237 15.3926 12.4874 16.9466 12.5984C18.5278 12.7113 20.1539 13.3959 21.584 14.3493C21.8506 14.5271 22.2007 14.5158 22.4553 14.3213C22.7099 14.1268 22.8129 13.7921 22.7116 13.4881C20.7969 7.74427 17.3513 4.12345 13.3467 1.64843C13.0857 1.48712 12.9552 1.40646 12.8526 1.46366C12.75 1.52087 12.75 1.67604 12.75 1.98638V4.88759C12.75 5.02747 12.75 5.09742 12.7836 5.14778C12.8171 5.19815 12.888 5.22776 13.0299 5.28697C13.1166 5.32317 13.1991 5.36119 13.2774 5.39726L13.3002 5.40777C13.6797 5.58247 14.1326 5.83264 14.5045 6.1707C14.811 6.44933 14.8336 6.92367 14.555 7.23016C14.2763 7.53665 13.802 7.55924 13.4955 7.28061C13.4366 7.22708 13.3709 7.1749 13.3 7.12435C13.0778 6.96607 12.9668 6.88693 12.8584 6.94278C12.75 6.99864 12.75 7.14658 12.75 7.44247V10.7253C12.75 11.1395 12.4142 11.4753 12 11.4753C11.5858 11.4753 11.25 11.1395 11.25 10.7253V7.44247C11.25 7.14658 11.25 6.99864 11.1416 6.94279C11.0332 6.88693 10.9222 6.96607 10.7 7.12435C10.6291 7.1749 10.5634 7.22708 10.5045 7.28061C10.198 7.55924 9.72368 7.53665 9.44505 7.23016C9.16642 6.92367 9.18901 6.44933 9.4955 6.1707C9.86737 5.83264 10.3203 5.58247 10.6998 5.40777L10.7226 5.39726C10.8009 5.36119 10.8834 5.32317 10.9701 5.28697C11.112 5.22776 11.1829 5.19815 11.2165 5.14778C11.25 5.09742 11.25 5.02747 11.25 4.88759V1.98643Z',
  d12: 'M11.6327 1.07267C11.8608 0.944528 12.1392 0.944528 12.3674 1.07267C16.7855 3.55444 20.6425 7.28225 22.7116 13.4894C22.8129 13.7934 22.7099 14.1281 22.4553 14.3226C22.2007 14.5171 21.8506 14.5283 21.584 14.3506C20.1539 13.3972 18.5278 12.7126 16.9466 12.5997C15.3926 12.4887 13.8623 12.925 12.5304 14.2569C12.2375 14.5498 11.7626 14.5498 11.4697 14.2569C10.1378 12.925 8.60747 12.4887 7.05348 12.5997C5.47226 12.7126 3.84624 13.3972 2.41607 14.3506C2.14948 14.5283 1.79943 14.5171 1.5448 14.3226C1.29017 14.1281 1.18721 13.7934 1.28853 13.4894C3.35758 7.28225 7.21464 3.55444 11.6327 1.07267Z',
  d13: 'M10.6133 13.5381C10.0225 13.8227 9.38134 14.1678 8.83158 14.5869C7.90079 15.2965 7.05973 16.3539 7.2822 17.8377C7.34361 18.2474 7.72547 18.5297 8.13511 18.4682C8.54474 18.4068 8.82703 18.025 8.76562 17.6153C8.66106 16.918 9.00392 16.3417 9.74099 15.7798C10.2663 15.3793 10.9042 15.0553 11.5281 14.7655C11.6594 15.6622 11.3225 16.5021 10.9221 17.5002C10.894 17.5701 10.8657 17.6408 10.8372 17.7123C10.5832 18.3491 10.3055 19.094 10.3053 19.872C10.305 20.7055 10.6184 21.505 11.3774 22.2587C11.6713 22.5506 12.1462 22.5489 12.438 22.255C12.7299 21.9611 12.7282 21.4862 12.4343 21.1943C11.9345 20.698 11.8052 20.2729 11.8053 19.8725C11.8054 19.4167 11.9711 18.9184 12.2305 18.268C12.2667 18.1771 12.3048 18.0836 12.3441 17.9873C12.5602 17.4572 12.8092 16.8466 12.9476 16.1725L12.9627 16.2299C12.9891 16.3302 13.0159 16.4344 13.0432 16.5412C13.1675 17.0258 13.3052 17.5625 13.4831 18.011C13.6899 18.532 14.0479 19.1995 14.7634 19.4381C15.1564 19.569 15.5811 19.3567 15.7121 18.9637C15.8431 18.5708 15.6307 18.146 15.2378 18.015C15.2033 18.0035 15.0612 17.9211 14.8774 17.4577C14.738 17.1065 14.6304 16.6886 14.5071 16.2098L14.5071 16.2097C14.477 16.0928 14.446 15.9723 14.4133 15.8482C14.2593 15.2627 14.0653 14.5852 13.7452 14.0516C13.6398 13.8759 13.5137 13.7053 13.3642 13.5538C13.0791 13.7532 12.8006 13.9866 12.5304 14.2569C12.2375 14.5498 11.7626 14.5498 11.4697 14.2569C11.1923 13.9795 10.9063 13.7409 10.6133 13.5381Z',
  d14: 'M12.75 1.29159V5.18672C12.9431 5.24447 13.1189 5.32549 13.2774 5.39852L13.2774 5.39852L13.3002 5.40904C13.6797 5.58374 14.1326 5.83391 14.5045 6.17197C14.811 6.4506 14.8336 6.92494 14.555 7.23143C14.2763 7.53792 13.802 7.56051 13.4955 7.28188C13.3022 7.1061 13.0353 6.94488 12.75 6.80782V10.7266C12.75 11.1408 12.4142 11.4766 12 11.4766C11.5858 11.4766 11.25 11.1408 11.25 10.7266V6.80782C10.9647 6.94488 10.6979 7.1061 10.5045 7.28188C10.198 7.56051 9.72368 7.53792 9.44505 7.23143C9.16642 6.92493 9.18901 6.4506 9.4955 6.17197C9.86737 5.83391 10.3203 5.58374 10.6998 5.40904L10.7226 5.39852C10.8811 5.32549 11.0569 5.24447 11.25 5.18672V1.29164C11.3771 1.21758 11.5047 1.1446 11.6327 1.07267C11.8608 0.944528 12.1392 0.944528 12.3674 1.07267C12.4954 1.14458 12.6229 1.21755 12.75 1.29159Z',
  d15: 'M12 14C9.98819 15 8.47937 15 8 18',
  d16: 'M12 14C15.5 14 14 19 17 19',
  d17: 'M11.25 1.5C7.05379 4.05591 3.41257 7.85586 1.43198 14.0603L0.75 16.1967L2.54442 14.9476C3.95542 13.9653 5.55966 13.2601 7.1197 13.1437C8.34736 13.0521 9.56003 13.3221 10.6692 14.1378C10.6646 14.1398 10.6599 14.1417 10.6552 14.1437C10.5361 14.1943 10.4165 14.245 10.2954 14.2976C9.85548 14.4886 9.39955 14.7027 8.98504 15.0037C8.09587 15.6493 7.52206 16.6007 7.25977 18.2422L8.74098 18.4789C8.95805 17.1204 9.37833 16.5718 9.86637 16.2175C10.1405 16.0184 10.4689 15.8575 10.8927 15.6735C10.9923 15.6303 11.098 15.5854 11.2088 15.5385L11.2275 15.5305C11.3346 16.3854 11.0614 17.1925 10.7455 18.1258C10.7166 18.2113 10.6872 18.2979 10.6578 18.3857C10.6099 18.5288 10.5614 18.6573 10.5153 18.7794C10.3549 19.2045 10.2245 19.55 10.2543 20.1507C10.2949 20.9701 10.6263 21.7548 11.3768 22.5L12.4337 21.4356C11.9254 20.9309 11.773 20.4909 11.7524 20.0764C11.7366 19.7571 11.7962 19.6073 11.9062 19.3307C11.955 19.2081 12.0137 19.0605 12.0801 18.8622C12.1131 18.7639 12.148 18.6626 12.1839 18.5583C12.499 17.6441 12.8916 16.5049 12.6967 15.2208C12.9443 15.3136 13.1206 15.458 13.2645 15.6273C13.5595 15.9744 13.7554 16.4676 13.9796 17.1081C13.9976 17.1595 14.0159 17.2122 14.0345 17.266C14.2263 17.8194 14.4585 18.4897 14.8357 19.016C15.2984 19.6616 15.985 20.1104 17 20.1104V18.6104C16.515 18.6104 16.2641 18.4341 16.0549 18.1422C15.8108 17.8016 15.6483 17.3364 15.4327 16.7194L15.3954 16.6126C15.1821 16.0031 14.9093 15.2463 14.4074 14.6559C14.1726 14.3796 13.8953 14.1473 13.5685 13.9723C14.6122 13.2856 15.7398 13.0586 16.8803 13.1437C18.4403 13.2601 20.0446 13.9653 21.4556 14.9476L23.25 16.1967L22.568 14.0603C20.5874 7.85586 16.9462 4.05591 12.75 1.5V5.50726C12.9425 5.56673 13.1179 5.64998 13.276 5.72504L13.2989 5.73588C13.6784 5.91586 14.1313 6.17359 14.5032 6.52187L13.4941 7.66532C13.3011 7.48452 13.0348 7.31867 12.75 7.17761V11.2141H11.25V7.17627C10.9642 7.31762 10.6968 7.48395 10.5031 7.66532L9.49414 6.52187C9.86601 6.17359 10.3189 5.91586 10.6984 5.73588L10.7213 5.72504C10.8801 5.64963 11.0564 5.56595 11.25 5.50642V1.5Z',
};

export const IconKiteStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kite-stroke-rounded IconKiteStrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKiteDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kite-duotone-rounded IconKiteDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKiteTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kite-twotone-rounded IconKiteTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
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
    </TheIconWrapper>
  );
};

export const IconKiteSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kite-solid-rounded IconKiteSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconKiteBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kite-bulk-rounded IconKiteBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconKiteStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kite-stroke-sharp IconKiteStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKiteSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kite-solid-sharp IconKiteSolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKite: TheIconSelfPack = {
  name: 'Kite',
  StrokeRounded: IconKiteStrokeRounded,
  DuotoneRounded: IconKiteDuotoneRounded,
  TwotoneRounded: IconKiteTwotoneRounded,
  SolidRounded: IconKiteSolidRounded,
  BulkRounded: IconKiteBulkRounded,
  StrokeSharp: IconKiteStrokeSharp,
  SolidSharp: IconKiteSolidSharp,
};