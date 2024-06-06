import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.9638 4H16.9717M20.9638 4C20.9638 4.56018 19.4725 5.60678 18.9678 6M20.9638 4C20.9638 3.43982 19.4725 2.39322 18.9678 2',
  d2: 'M2.99902 4H6.99118M2.99902 4C2.99902 3.43982 4.49039 2.39322 4.9951 2M2.99902 4C2.99902 4.56018 4.49039 5.60678 4.9951 6',
  d3: 'M9.81487 22.0006V21.0595C9.81487 20.4116 9.60508 19.781 9.21688 19.2622L5.39417 14.1534C5.07649 13.7288 4.8396 13.2141 4.98547 12.7043C5.34567 11.4454 6.76774 10.3261 8.35883 12.2974L9.95899 14.0049V3.59381C10.0571 1.76459 13.1323 1.18685 13.4502 3.59381V9.52698C14.9328 9.33608 21.916 10.378 20.9001 14.7917C20.8515 15.0026 20.803 15.2167 20.7555 15.4279C20.5491 16.346 19.9405 17.98 19.2694 18.9355C18.5703 19.9309 18.8968 21.5353 18.817 22.0019',
  d4: 'M19.9421 17.6912C20.6469 16.2145 21.6113 13.3246 20.2636 11.9638C18.1391 9.81862 15.1676 9.42599 13.4651 9.50195V3.75195C13.4651 2.78545 12.6842 2.00195 11.7209 2.00195C10.7575 2.00195 9.97664 2.78545 9.97664 3.75195V14.002L7.76737 11.6733C7.04574 11.0331 5.95516 11.1392 5.36142 11.9073C4.86743 12.5464 4.87076 13.4554 5.36942 14.0906L8.63971 18.4256C9.20943 19.1808 9.49432 19.5585 9.65092 19.9993C9.66481 20.0384 9.67791 20.0778 9.69022 20.1175C9.82894 20.5648 9.82894 21.0438 9.82894 22.002H18.8391V20.384C18.8391 19.4584 19.5608 18.49 19.9421 17.6912Z',
  d5: 'M20.9409 4.00195H16.9541M20.9409 4.00195C20.9409 4.56213 19.4515 5.60873 18.9475 6.00195M20.9409 4.00195C20.9409 3.44177 19.4515 2.39517 18.9475 2.00195',
  d6: 'M3 4.00195H6.98678M3 4.00195C3 3.44177 4.48936 2.39517 4.99339 2.00195M3 4.00195C3 4.56213 4.48936 5.60873 4.99339 6.00195',
  d7: 'M9.85052 22.0027V21.0616C9.85052 20.4137 9.64142 19.7831 9.2545 19.2643L5.44443 14.1555C5.1278 13.7309 4.89169 13.2162 5.03708 12.7064C5.39609 11.4475 6.81346 10.3282 8.39929 12.2995L9.99416 14.007V3.59589C10.0919 1.76667 13.157 1.18893 13.4738 3.59589V9.52906C14.9515 9.33816 21.9116 10.3801 20.8991 14.7938C20.8507 15.0047 20.8023 15.2188 20.755 15.43C20.5493 16.3481 19.9427 17.9821 19.2738 18.9376C18.577 19.933 18.9024 21.5374 18.8229 22.004',
  d8: 'M20.9417 4H16.9546M20.9417 4C20.9417 4.56018 19.4522 5.60678 18.9481 6M20.9417 4C20.9417 3.43982 19.4522 2.39322 18.9481 2',
  d9: 'M2.99951 4H6.98657M2.99951 4C2.99951 3.43982 4.48898 2.39322 4.99304 2M2.99951 4C2.99951 4.56018 4.48898 5.60678 4.99304 6',
  d10: 'M9.85135 22.0007V21.0596C9.85135 20.4117 9.64224 19.7811 9.2553 19.2623L5.44495 14.1535C5.1283 13.7289 4.89217 13.2142 5.03757 12.7044C5.39661 11.4455 6.81408 10.3262 8.40002 12.2975L9.99501 14.005V3.59393C10.0928 1.76471 13.1581 1.18697 13.4749 3.59393V9.5271C14.9527 9.3362 21.9133 10.3781 20.9007 14.7918C20.8523 15.0027 20.8039 15.2168 20.7566 15.428C20.5509 16.3461 19.9442 17.9801 19.2753 18.9356C18.5785 19.931 18.9039 21.5354 18.8244 22.002',
  d11: 'M9.25 3.75C9.25 2.36929 10.3693 1.25 11.75 1.25C13.1307 1.25 14.25 2.36929 14.25 3.75V8.74751C16.1139 8.81064 18.819 9.38616 20.8531 11.4332C21.789 12.3751 21.8445 13.7529 21.6737 14.8931C21.4975 16.0699 21.0471 17.2359 20.6749 18.0131C20.5556 18.2264 20.0742 19.1202 19.9725 19.3235C19.7561 19.7563 19.6419 20.1001 19.6419 20.382V20.382C19.6419 20.6473 19.6419 20.918 19.6248 21.1214C19.6063 21.3409 19.564 21.5809 19.4397 21.8165C19.2752 22.1284 19.0203 22.3833 18.7084 22.5479C18.4727 22.6721 18.2328 22.7145 18.0133 22.7329C17.8098 22.75 17.5662 22.75 17.3009 22.75H11.7164H11.7164C11.4087 22.75 11.1252 22.7501 10.8893 22.7266C10.6327 22.7012 10.1696 22.6003 9.9075 22.3382C9.6375 22.1107 9.48834 21.7789 9.3824 21.5062C9.26927 21.2149 9.14929 20.8294 9.00495 20.3655L9.00494 20.3655C8.89549 20.0584 8.6596 19.6676 8.06062 18.8763L4.78347 14.5465C4.0748 13.641 4.07179 12.3548 4.77682 11.4457C5.63524 10.3388 7.22827 10.1793 8.2802 11.1094L9.25 12.1242V3.75Z',
  d12: 'M19.7104 6.5921C19.3834 6.84637 18.9122 6.78741 18.6579 6.46042C18.5514 6.32341 18.4999 6.16108 18.5 6V4.99995L17 4.99995C16.4477 4.99995 16 4.55223 16 3.99995C16 3.44766 16.4477 2.99995 17 2.99995H18.5V2.0068C18.4984 1.84352 18.5499 1.67857 18.6579 1.53965C18.9122 1.21266 19.3834 1.1537 19.7104 1.40796C19.7624 1.44844 19.8325 1.50131 19.9152 1.5637L19.9153 1.56371C20.183 1.76565 20.5831 2.06744 20.9325 2.37212C21.164 2.5739 21.4039 2.8025 21.5918 3.03496C21.6861 3.15156 21.7808 3.28548 21.8545 3.43173C21.9257 3.57295 22 3.76987 22 4.00003C22 4.2302 21.9257 4.42712 21.8545 4.56834C21.7808 4.71459 21.6861 4.84851 21.5918 4.96511C21.4039 5.19756 21.164 5.42616 20.9325 5.62795C20.5831 5.93264 20.183 6.23442 19.9153 6.43636C19.8325 6.49875 19.7624 6.55163 19.7104 6.5921Z',
  d13: 'M4.28962 6.5921C4.61661 6.84637 5.08781 6.78741 5.34207 6.46042C5.44861 6.32341 5.50012 6.16108 5.5 6V4.99995L7 4.99995C7.55228 4.99995 8 4.55223 8 3.99995C8 3.44766 7.55228 2.99995 7 2.99995H5.5V2.0068C5.50158 1.84352 5.45009 1.67857 5.34207 1.53965C5.08781 1.21266 4.61661 1.1537 4.28962 1.40796C4.23756 1.44844 4.16748 1.50131 4.08476 1.5637L4.08475 1.56371C3.81702 1.76565 3.41694 2.06744 3.06749 2.37212C2.83605 2.5739 2.59611 2.8025 2.40817 3.03496C2.31389 3.15156 2.21925 3.28548 2.14551 3.43173C2.0743 3.57295 2 3.76987 2 4.00003C2 4.2302 2.0743 4.42712 2.14551 4.56834C2.21925 4.71459 2.31389 4.84851 2.40817 4.96511C2.59611 5.19756 2.83605 5.42616 3.06749 5.62795C3.41695 5.93264 3.81702 6.23442 4.08475 6.43636C4.16747 6.49875 4.23756 6.55163 4.28962 6.5921Z',
  d14: 'M17 3.75H20.4027M19 5.75L21 3.75L19 1.75',
  d15: 'M7 3.75H3.59008M5 1.75L3 3.75L5 5.75',
  d16: 'M13.5062 9.27066V3.51942C13.5062 2.5422 12.7167 1.75 11.7428 1.75C10.769 1.75 9.97949 2.5422 9.97949 3.51942V12.1867M13.5062 9.27066C14.9874 9.21863 16.1152 9.35377 17.6929 10.0051C18.9012 10.5038 20.1795 11.1467 20.717 12.3416C21.26 13.5486 20.9776 14.9865 20.2441 16.8433L18.8568 19.7917V21.7495M13.5062 9.27066V10.0118M9.87531 21.75V19.8164L5.40208 13.8138C5.06649 13.3635 4.88711 12.7777 5.07789 12.2489C5.09407 12.2041 5.11166 12.1596 5.13096 12.1153C5.36777 11.5721 5.84758 11.107 6.43158 11.0167C6.5783 10.994 6.72836 10.9951 6.88822 11.0172C7.3546 11.0815 7.74602 11.3838 8.06753 11.7289L9.98332 13.785V11.4455',
  d17: 'M9.26587 20.4991L4.94757 14.7965C4.23886 13.8909 4.23584 12.6047 4.94088 11.6956C5.7993 10.5887 7.39234 10.4292 8.44427 11.3593L8.46846 11.3807L9.41406 12.3741V3.99988C9.41406 2.61917 10.5334 1.49988 11.9141 1.49988C13.2948 1.49988 14.4141 2.61917 14.4141 3.99988V8.99739C16.2779 9.06052 18.9831 9.63603 21.0171 11.683C21.9531 12.625 22.0085 14.0028 21.8378 15.143C21.6616 16.3197 21.2112 17.4858 20.839 18.263C20.6476 18.6626 20.3709 19.2398 20.142 19.717L19.8059 20.4178V22.9999H9.26587V20.4991Z',
  d18: 'M19.0424 7.41434L22.2495 4.20723L19.0424 1.00012L17.6282 2.41434L18.4211 3.20723H16.3353V5.20723H18.4211L17.6282 6.00012L19.0424 7.41434Z',
  d19: 'M5.57843 5.20706L6.37132 5.99995L4.95711 7.41417L1.75 4.20706L4.95711 0.999953L6.37132 2.41417L5.57843 3.20706H7.66406V5.20706H5.57843Z',
};

export const IconDrag01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-01-stroke-rounded IconDrag01StrokeRounded"
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

export const IconDrag01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-01-duotone-rounded IconDrag01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDrag01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-01-twotone-rounded IconDrag01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDrag01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-01-solid-rounded IconDrag01SolidRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconDrag01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-01-bulk-rounded IconDrag01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconDrag01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-01-stroke-sharp IconDrag01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
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

export const IconDrag01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="drag-01-solid-sharp IconDrag01SolidSharp"
    >
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfDrag01: TheIconSelfPack = {
  name: 'Drag01',
  StrokeRounded: IconDrag01StrokeRounded,
  DuotoneRounded: IconDrag01DuotoneRounded,
  TwotoneRounded: IconDrag01TwotoneRounded,
  SolidRounded: IconDrag01SolidRounded,
  BulkRounded: IconDrag01BulkRounded,
  StrokeSharp: IconDrag01StrokeSharp,
  SolidSharp: IconDrag01SolidSharp,
};