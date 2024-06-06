import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.5551 4C17.0179 4.42885 17.5421 4.96506 18.1713 5.60862C20.0571 7.53758 21 8.50206 21 9.70056C21 10.8991 20.0571 11.8635 18.1713 13.7925L11.7706 20.3396C11.5289 20.5868 11.2709 20.8069 11 21',
  d2: 'M2 16.6153C2 19.5892 4.48731 22 7.55556 22H16.4444C19.0634 22 20.3728 22 21.1864 21.2114C22 20.4229 22 19.1537 22 16.6153C22 16.0078 22 15.4729 21.9888 15',
  d3: 'M2 7.55556C2 4.93664 2 3.62718 2.80546 2.81359C3.61091 2 4.90728 2 7.5 2C10.0927 2 11.3891 2 12.1945 2.81359C13 3.62718 13 4.93664 13 7.55556V16.4444C13 19.5127 10.5376 22 7.5 22C4.46243 22 2 19.5127 2 16.4444V7.55556Z',
  d4: 'M7.5 17.5H7.50898',
  d5: 'M2 8H13M2 13H13',
  d6: 'M12.1945 2.81359C11.3891 2 10.0927 2 7.5 2C4.90728 2 3.61091 2 2.80546 2.81359C2 3.62718 2 4.93664 2 7.55556V8H13V7.55556C13 4.93664 13 3.62718 12.1945 2.81359Z',
  d7: 'M2 16.4444C2 19.5127 4.46243 22 7.5 22C10.5376 22 13 19.5127 13 16.4444V13H2V16.4444Z',
  d8: 'M2 13V16.4444C2 19.5127 4.46243 22 7.5 22C10.5376 22 13 19.5127 13 16.4444V13M2 13H13M2 13V8M13 13V8M2 8V7.55556C2 4.93664 2 3.62718 2.80546 2.81359C3.61091 2 4.90728 2 7.5 2C10.0927 2 11.3891 2 12.1945 2.81359C13 3.62718 13 4.93664 13 7.55556V8M2 8H13',
  d9: 'M15.8291 3.56186C16.1888 3.16743 16.7952 3.144 17.1834 3.50951C17.6443 3.94346 18.1604 4.47983 18.7517 5.09441L18.8127 5.15774C19.6766 6.05554 20.3918 6.79876 20.8821 7.46663C21.3984 8.16982 21.75 8.89894 21.75 9.77421C21.75 10.6495 21.3984 11.3786 20.8821 12.0818C20.3918 12.7497 19.6766 13.4929 18.8127 14.3907L12.6321 20.8139C12.3609 21.0958 12.0704 21.3477 11.7647 21.5691C11.3337 21.8812 10.7353 21.7793 10.4281 21.3414C10.1208 20.9036 10.2212 20.2955 10.6521 19.9834C10.8656 19.8288 11.0697 19.652 11.2616 19.4526L17.3956 13.0778C18.318 12.1192 18.9413 11.4684 19.3458 10.9175C19.7332 10.3898 19.8333 10.0659 19.8333 9.77421C19.8333 9.48252 19.7332 9.15861 19.3458 8.63096C18.9413 8.07998 18.318 7.42925 17.3956 6.47063C16.787 5.83819 16.303 5.33554 15.8806 4.93786C15.4924 4.57234 15.4693 3.95629 15.8291 3.56186Z',
  d10: 'M21.7456 14.2503C22.2808 14.238 22.7249 14.6507 22.7375 15.1722C22.7486 15.63 22.7486 16.1443 22.7486 16.7115L22.7486 16.7873C22.7486 17.9286 22.7487 18.8824 22.6408 19.6399C22.5265 20.4426 22.275 21.1632 21.6653 21.739C21.0598 22.3108 20.3092 22.5429 19.4739 22.649C18.6778 22.7501 17.6732 22.75 16.4601 22.75L7.77792 22.75C7.24257 22.75 6.80859 22.3272 6.80859 21.8056C6.80859 21.284 7.24257 20.8611 7.77792 20.8611H16.3941C17.69 20.8611 18.5674 20.8592 19.2234 20.7759C19.8545 20.6958 20.1329 20.5556 20.316 20.3826C20.4949 20.2137 20.6377 19.9626 20.7206 19.3804C20.8078 18.7679 20.8099 17.9462 20.8099 16.72C20.8099 16.143 20.8099 15.65 20.7994 15.2167C20.7868 14.6953 21.2104 14.2626 21.7456 14.2503Z',
  d11: 'M7.55481 1.25H7.55483C8.80459 1.24998 9.81903 1.24996 10.6184 1.35852C11.4518 1.4717 12.1625 1.71523 12.7275 2.28594C13.2915 2.85559 13.5312 3.5704 13.6428 4.40863C13.7169 4.96569 13.7398 5.6266 13.7469 6.3989C13.7494 6.68118 13.7507 6.82232 13.6627 6.91116C13.5747 7 13.4327 7 13.1488 7H1.85124C1.5673 7 1.42533 7 1.3373 6.91116C1.24927 6.82232 1.25056 6.68118 1.25314 6.3989C1.2602 5.6266 1.28309 4.96569 1.35724 4.40863C1.46881 3.5704 1.70851 2.85559 2.27247 2.28594C2.83746 1.71523 3.54816 1.4717 4.38158 1.35852C5.18098 1.24996 6.19542 1.24998 7.44517 1.25H7.44519H7.44521H7.5548H7.55481ZM1.85 9C1.56716 9 1.42574 9 1.33787 9.08787C1.25 9.17574 1.25 9.31716 1.25 9.6V11.4C1.25 11.6828 1.25 11.8243 1.33787 11.9121C1.42574 12 1.56716 12 1.85 12H13.15C13.4328 12 13.5743 12 13.6621 11.9121C13.75 11.8243 13.75 11.6828 13.75 11.4V9.6C13.75 9.31716 13.75 9.17574 13.6621 9.08787C13.5743 9 13.4328 9 13.15 9H1.85ZM13.75 14.6C13.75 14.3172 13.75 14.1757 13.6621 14.0879C13.5743 14 13.4328 14 13.15 14H1.85C1.56716 14 1.42574 14 1.33787 14.0879C1.25 14.1757 1.25 14.3172 1.25 14.6V16.4444C1.25 19.9198 4.04113 22.75 7.5 22.75C10.9589 22.75 13.75 19.9198 13.75 16.4444V14.6ZM6.5 17.5C6.5 16.9477 6.94571 16.5 7.49553 16.5H7.50447C8.05429 16.5 8.5 16.9477 8.5 17.5C8.5 18.0523 8.05429 18.5 7.50447 18.5H7.49553C6.94571 18.5 6.5 18.0523 6.5 17.5Z',
  d12: 'M7.55481 1.25H7.44521C6.19545 1.24998 5.18098 1.24996 4.38158 1.35852C3.54816 1.4717 2.83746 1.71523 2.27247 2.28594C1.70851 2.85559 1.46881 3.5704 1.35724 4.40863C1.28309 4.96569 1.2602 5.6266 1.25314 6.3989C1.25056 6.68118 1.24927 6.82232 1.3373 6.91116C1.42533 7 1.5673 7 1.85124 7H13.1488C13.4327 7 13.5747 7 13.6627 6.91116C13.7507 6.82232 13.7494 6.68118 13.7469 6.3989C13.7398 5.6266 13.7169 4.96569 13.6428 4.40863C13.5312 3.5704 13.2915 2.85559 12.7275 2.28594C12.1625 1.71523 11.4518 1.4717 10.6184 1.35852C9.81903 1.24996 8.80457 1.24998 7.55481 1.25Z',
  d13: 'M13.75 9.6C13.75 9.31716 13.75 9.17574 13.6621 9.08787C13.5743 9 13.4328 9 13.15 9H1.85C1.56716 9 1.42574 9 1.33787 9.08787C1.25 9.17574 1.25 9.31716 1.25 9.6V11.4C1.25 11.6828 1.25 11.8243 1.33787 11.9121C1.42574 12 1.56716 12 1.85 12H13.15C13.4328 12 13.5743 12 13.6621 11.9121C13.75 11.8243 13.75 11.6828 13.75 11.4V9.6Z',
  d14: 'M13.75 14.6C13.75 14.3172 13.75 14.1757 13.6621 14.0879C13.5743 14 13.4328 14 13.15 14H1.85C1.56716 14 1.42574 14 1.33787 14.0879C1.25 14.1757 1.25 14.3172 1.25 14.6V16.4444C1.25 19.9198 4.04113 22.75 7.5 22.75C10.9589 22.75 13.75 19.9198 13.75 16.4444V14.6Z',
  d15: 'M6.5 17.5C6.5 16.9477 6.94571 16.5 7.49553 16.5H7.50447C8.05429 16.5 8.5 16.9477 8.5 17.5C8.5 18.0523 8.05429 18.5 7.50447 18.5H7.49553C6.94571 18.5 6.5 18.0523 6.5 17.5Z',
  d16: 'M7.69922 22.7469C9.36884 22.6942 10.8708 21.9817 11.9606 20.8611H16.395C17.6909 20.8611 18.5682 20.8592 19.2242 20.7759C19.8554 20.6958 20.1337 20.5556 20.3169 20.3826C20.4958 20.2137 20.6385 19.9626 20.7214 19.3804C20.8086 18.7679 20.8108 17.9462 20.8108 16.72C20.8108 16.143 20.8108 15.65 20.8003 15.2167C20.7877 14.6953 21.2113 14.2626 21.7465 14.2503C22.2817 14.238 22.7258 14.6507 22.7384 15.1722C22.7495 15.6299 22.7495 16.1442 22.7495 16.7113L22.7495 16.7873C22.7495 17.9286 22.7495 18.8824 22.6417 19.6399C22.5274 20.4426 22.2759 21.1632 21.6661 21.739C21.0607 22.3108 20.31 22.5429 19.4747 22.649C18.6787 22.7501 17.6741 22.75 16.461 22.75L7.7788 22.75C7.752 22.75 7.72546 22.7489 7.69922 22.7469Z',
  d17: 'M17.1838 3.50951C16.7956 3.144 16.1893 3.16743 15.8295 3.56186C15.4698 3.95629 15.4929 4.57234 15.8811 4.93786C16.3034 5.33554 16.7874 5.83819 17.396 6.47063C18.3184 7.42925 18.9417 8.07998 19.3462 8.63096C19.7336 9.15861 19.8338 9.48252 19.8338 9.77421C19.8338 10.0659 19.7336 10.3898 19.3462 10.9175C18.9417 11.4684 18.3184 12.1192 17.396 13.0778L13.7356 16.8819C13.5985 18.8978 12.5211 20.657 10.9395 21.7107C11.2116 21.7915 11.5163 21.7493 11.7651 21.5691C12.0709 21.3477 12.3613 21.0958 12.6325 20.8139L18.8131 14.3907C19.6771 13.4929 20.3922 12.7497 20.8826 12.0818C21.3988 11.3786 21.7504 10.6495 21.7504 9.77421C21.7504 8.89894 21.3988 8.16982 20.8826 7.46663C20.3922 6.79876 19.6771 6.05554 18.8131 5.15774L18.7522 5.09441C18.1608 4.47983 17.6447 3.94346 17.1838 3.50951Z',
  d18: 'M11.002 22L22.002 8L16.556 4',
  d19: 'M2 16.6153C2 19.5892 4.4887 22 7.55866 22H22V14',
  d20: 'M13 16.4444V2H2V16.4444C2 19.5127 4.46243 22 7.5 22C10.5376 22 13 19.5127 13 16.4444Z',
  d21: 'M20.6131 8.14581L15.7916 4.60445L16.6796 3.39551L22.7499 7.85414L11.2713 22.4633L10.0918 21.5366L20.6131 8.14581Z',
  d22: 'M22.75 14V22C22.75 22.4142 22.4142 22.75 22 22.75H7.55866C4.09714 22.75 1.25 20.0257 1.25 16.6153H2.75C2.75 19.1527 4.88025 21.25 7.55866 21.25H21.25V14H22.75Z',
  d23: 'M2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V7.25H13.75V2C13.75 1.58579 13.4142 1.25 13 1.25H2ZM13.75 8.75H1.25V12.25H13.75V8.75ZM1.25 13.75H13.75V16.4444C13.75 19.9198 10.9589 22.75 7.5 22.75C4.04113 22.75 1.25 19.9198 1.25 16.4444V13.75ZM7.5 16.5C6.94772 16.5 6.5 16.9477 6.5 17.5C6.5 18.0523 6.94772 18.5 7.5 18.5H7.50898C8.06127 18.5 8.50898 18.0523 8.50898 17.5C8.50898 16.9477 8.06127 16.5 7.50898 16.5H7.5Z',
};

export const IconSwatchStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swatch-stroke-rounded IconSwatchStrokeRounded"
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
        strokeLinecap="round" 
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

export const IconSwatchDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swatch-duotone-rounded IconSwatchDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
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

export const IconSwatchTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swatch-twotone-rounded IconSwatchTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconSwatchSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swatch-solid-rounded IconSwatchSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSwatchBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swatch-bulk-rounded IconSwatchBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      </g>
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
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSwatchStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swatch-stroke-sharp IconSwatchStrokeSharp"
    >
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSwatchSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="swatch-solid-sharp IconSwatchSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSwatch: TheIconSelfPack = {
  name: 'Swatch',
  StrokeRounded: IconSwatchStrokeRounded,
  DuotoneRounded: IconSwatchDuotoneRounded,
  TwotoneRounded: IconSwatchTwotoneRounded,
  SolidRounded: IconSwatchSolidRounded,
  BulkRounded: IconSwatchBulkRounded,
  StrokeSharp: IconSwatchStrokeSharp,
  SolidSharp: IconSwatchSolidSharp,
};