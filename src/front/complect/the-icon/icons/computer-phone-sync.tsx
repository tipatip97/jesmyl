import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20 17.1862C18.843 18 17.2107 18 13.9462 18H9.96412C6.6996 18 5.06734 18 3.9103 17.1862C3.48223 16.8851 3.1099 16.5111 2.81017 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81017 3.91891C3.1099 3.48891 3.48223 3.1149 3.9103 2.81382C5.06734 2 6.6996 2 9.96412 2',
  d2: 'M12 18V22',
  d3: 'M8 22H16',
  d4: 'M18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V10C22 11.8856 22 12.8284 21.4142 13.4142C20.8284 14 19.8856 14 18 14H17C15.1144 14 14.1716 14 13.5858 13.4142C13 12.8284 13 11.8856 13 10L13 6C13 4.11438 13 3.17157 13.5858 2.58579C14.1716 2 15.1144 2 17 2L18 2Z',
  d5: 'M17.5 11.5H17.509',
  d6: 'M10 2H14C14.6791 2 15.2879 2 15.8366 2.00723C14.6977 2.03128 14.0362 2.13536 13.5858 2.58579C13 3.17157 13 4.11438 13 6V10C13 11.8856 13 12.8284 13.5858 13.4142C14.1716 14 15.1144 14 17 14H18C19.8856 14 20.8284 14 21.4142 13.4142C22 12.8284 22 11.8856 22 10C22 13.2792 22 14.9188 21.1862 16.0811C20.8851 16.5111 20.5111 16.8851 20.0811 17.1862C18.9188 18 17.2792 18 14 18H10C6.72077 18 5.08116 18 3.91891 17.1862C3.48891 16.8851 3.1149 16.5111 2.81382 16.0811C2 14.9188 2 13.2792 2 10C2 6.72077 2 5.08116 2.81382 3.91891C3.1149 3.48891 3.48891 3.1149 3.91891 2.81382C5.08116 2 6.72077 2 10 2Z',
  d7: 'M9.9072 1L9.96412 1C10.5164 1 10.9641 1.44772 10.9641 2C10.9641 2.55229 10.5164 3 9.96412 3C8.31014 3 7.14808 3.00131 6.2522 3.09617C5.37436 3.18912 4.8681 3.36272 4.48561 3.63175C4.1531 3.86563 3.86366 4.1563 3.63053 4.49075C3.36179 4.87629 3.18849 5.38672 3.09581 6.26995C3.00129 7.17073 3 8.33886 3 10C3 11.6611 3.00129 12.8293 3.09581 13.7301C3.18849 14.6133 3.36179 15.1237 3.63053 15.5092C3.86366 15.8437 4.1531 16.1344 4.48561 16.3682C4.8681 16.6373 5.37436 16.8109 6.2522 16.9038C7.14808 16.9987 8.31014 17 9.96412 17H13.9462C15.6002 17 16.7622 16.9987 17.6581 16.9038C18.5359 16.8109 19.0422 16.6373 19.4247 16.3682C19.8764 16.0505 20.5002 16.1591 20.8179 16.6109C21.1357 17.0626 21.027 17.6864 20.5753 18.0041C19.8008 18.5489 18.9124 18.7822 17.8687 18.8927C16.8552 19 15.5871 19 14.0031 19H13.4C13.0229 19 13 19.0229 13 19.4V20C13 20.8273 13.1727 21 14 21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H8C7.44772 23 7 22.5523 7 22C7 21.4477 7.44772 21 8 21H10C10.8273 21 11 20.8273 11 20V19.4C11 19.0229 10.9771 19 10.6 19H9.90719C8.32323 19 7.05513 19 6.04161 18.8927C4.99792 18.7822 4.10954 18.5489 3.33499 18.0041C2.81136 17.6358 2.35615 17.1785 1.98981 16.6529C1.44838 15.8762 1.21659 14.9857 1.10673 13.9388C0.999974 12.9214 0.999985 11.6482 1 10.0565V9.94351C0.999985 8.35182 0.999974 7.07861 1.10673 6.06123C1.21659 5.01428 1.44838 4.12378 1.98981 3.34706C2.35615 2.82152 2.81136 2.36418 3.33499 1.99588C4.10954 1.45109 4.99792 1.21779 6.04161 1.10729C7.05513 0.999973 8.32323 0.999985 9.9072 1Z',
  d8: 'M17.198 1H18.302H18.3021H18.3021C19.2005 0.999975 19.9497 0.999954 20.5445 1.07992C21.1723 1.16432 21.7391 1.34999 22.1945 1.80546C22.65 2.26093 22.8357 2.82773 22.9201 3.45553C23.0001 4.0503 23 4.79954 23 5.69801V9.80203C23 10.7005 23.0001 11.4497 22.9201 12.0445C22.8357 12.6723 22.65 13.2391 22.1945 13.6945C21.7391 14.15 21.1723 14.3357 20.5445 14.4201C19.9497 14.5001 19.2005 14.5 18.302 14.5H17.198C16.2995 14.5 15.5503 14.5001 14.9555 14.4201C14.3277 14.3357 13.7609 14.15 13.3055 13.6945C12.85 13.2391 12.6643 12.6723 12.5799 12.0445C12.5 11.4497 12.5 10.7005 12.5 9.80203V9.802V5.69794V5.69791C12.5 4.79947 12.5 4.05028 12.5799 3.45553C12.6643 2.82773 12.85 2.26093 13.3055 1.80546C13.7609 1.34999 14.3277 1.16432 14.9555 1.07992C15.5503 0.999954 16.2995 0.999975 17.198 1H17.198H17.198ZM16.75 11.25C16.75 10.6977 17.1957 10.25 17.7455 10.25H17.7545C18.3043 10.25 18.75 10.6977 18.75 11.25C18.75 11.8023 18.3043 12.25 17.7545 12.25H17.7455C17.1957 12.25 16.75 11.8023 16.75 11.25Z',
  d9: 'M22 18H2V3H10',
  d10: 'M22 2H13V14H22V2Z',
  d11: 'M17.5 11H17.509',
  d12: 'M12 18.001V21.9996M12 21.9996H8M12 21.9996H16',
  d13: 'M13 1.25C12.5858 1.25 12.25 1.58579 12.25 2V14C12.25 14.4142 12.5858 14.75 13 14.75H22C22.4142 14.75 22.75 14.4142 22.75 14V2C22.75 1.58579 22.4142 1.25 22 1.25H13ZM18.509 11H16.5V13H18.509V11Z',
  d14: 'M2.22727 1.25C1.68754 1.25 1.25 1.68528 1.25 2.22222V17.7778C1.25 18.3147 1.68754 18.75 2.22727 18.75H9.25V20.75H7V22.75H17V20.75H14.75V18.75H22.75V16.8056H3.20455V3.19444H10L10 1.25H2.22727Z',
};

export const IconComputerPhoneSyncStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-phone-sync-stroke-rounded IconComputerPhoneSyncStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconComputerPhoneSyncDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-phone-sync-duotone-rounded IconComputerPhoneSyncDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconComputerPhoneSyncTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-phone-sync-twotone-rounded IconComputerPhoneSyncTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconComputerPhoneSyncSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-phone-sync-solid-rounded IconComputerPhoneSyncSolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconComputerPhoneSyncBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-phone-sync-bulk-rounded IconComputerPhoneSyncBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconComputerPhoneSyncStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-phone-sync-stroke-sharp IconComputerPhoneSyncStrokeSharp"
    >
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconComputerPhoneSyncSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="computer-phone-sync-solid-sharp IconComputerPhoneSyncSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfComputerPhoneSync: TheIconSelfPack = {
  name: 'ComputerPhoneSync',
  StrokeRounded: IconComputerPhoneSyncStrokeRounded,
  DuotoneRounded: IconComputerPhoneSyncDuotoneRounded,
  TwotoneRounded: IconComputerPhoneSyncTwotoneRounded,
  SolidRounded: IconComputerPhoneSyncSolidRounded,
  BulkRounded: IconComputerPhoneSyncBulkRounded,
  StrokeSharp: IconComputerPhoneSyncStrokeSharp,
  SolidSharp: IconComputerPhoneSyncSolidSharp,
};