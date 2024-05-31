import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 9C21.9635 6.74771 21.7892 5.44656 20.9564 4.5129C20.7879 4.32403 20.6022 4.14935 20.4014 3.99087C19.1461 3 17.2659 3 13.5056 3H10.5041C6.74371 3 4.86352 3 3.60823 3.99087C3.40746 4.14935 3.22178 4.32403 3.05331 4.5129C2 5.69377 2 7.46252 2 11C2 14.5375 2 16.3062 3.05331 17.4871C3.22178 17.676 3.40746 17.8506 3.60823 18.0091C4.86352 19 6.74371 19 10.5041 19H11.5',
  d2: 'M2 8H22',
  d3: 'M18 13V14.7778M18 14.7778V19.2222M18 14.7778L19.5 14M18 14.7778L16.5 14M18 19.2222L18 21M18 19.2222L16.5 20M18 19.2222L19.5 20M22 17L20.2222 17M20.2222 17L15.7778 17M20.2222 17L21 18.5M20.2222 17L21 15.5M15.7778 17L14 17M15.7778 17L15 15.5M15.7778 17L15 18.5',
  d4: 'M10.5 19H13.5C17.2586 19 19.1379 19 20.3925 18.0091C20.5932 17.8506 20.7788 17.676 20.9472 17.4871C22 16.3062 22 14.5375 22 11C22 9.81688 22 8.8316 21.9606 8H2.03939C2 8.8316 2 9.81688 2 11C2 14.5375 2 16.3062 3.0528 17.4871C3.22119 17.676 3.40678 17.8506 3.60746 18.0091C4.86213 19 6.74142 19 10.5 19Z',
  d5: 'M18 12.25C18.4142 12.25 18.75 12.5858 18.75 13V13.5441L19.1548 13.3342C19.5225 13.1435 19.9751 13.287 20.1658 13.6548C20.3565 14.0225 20.213 14.4751 19.8452 14.6658L18.75 15.2337V16.25L19.7663 16.25L20.3342 15.1548C20.5249 14.787 20.9775 14.6435 21.3452 14.8342C21.713 15.0249 21.8565 15.4775 21.6658 15.8452L21.4559 16.25L22 16.25C22.4142 16.25 22.75 16.5858 22.75 17C22.75 17.4142 22.4142 17.75 22 17.75H21.4559L21.6658 18.1548C21.8565 18.5225 21.713 18.9751 21.3452 19.1658C20.9775 19.3565 20.5249 19.213 20.3342 18.8452L19.7663 17.75H18.75V18.7663L19.8452 19.3342C20.213 19.5249 20.3565 19.9775 20.1658 20.3452C19.9751 20.713 19.5225 20.8565 19.1548 20.6658L18.75 20.4559V21C18.75 21.4142 18.4142 21.75 18 21.75C17.5858 21.75 17.25 21.4142 17.25 21V20.4559L16.8452 20.6658C16.4775 20.8565 16.0249 20.713 15.8342 20.3452C15.6435 19.9775 15.787 19.5249 16.1548 19.3342L17.25 18.7663V17.75H16.2337L15.6658 18.8452C15.4751 19.213 15.0225 19.3565 14.6548 19.1658C14.287 18.9751 14.1435 18.5225 14.3342 18.1548L14.5441 17.75H14C13.5858 17.75 13.25 17.4142 13.25 17C13.25 16.5858 13.5858 16.25 14 16.25L14.5441 16.25L14.3342 15.8452C14.1435 15.4775 14.287 15.0249 14.6548 14.8342C15.0225 14.6435 15.4751 14.787 15.6658 15.1548L16.2337 16.25L17.25 16.25V15.2337L16.1548 14.6658C15.787 14.4751 15.6435 14.0225 15.8342 13.6548C16.0249 13.287 16.4775 13.1435 16.8452 13.3342L17.25 13.5441V13C17.25 12.5858 17.5858 12.25 18 12.25Z',
  d6: 'M17.9694 2.3786C16.8308 2.24998 15.3866 2.24999 13.5476 2.25H10.4525C8.61347 2.24999 7.16918 2.24998 6.03059 2.3786C4.86843 2.50988 3.92602 2.78362 3.14264 3.40229C2.90812 3.58749 2.69069 3.79205 2.49299 4.0138C1.82682 4.76101 1.52933 5.66669 1.38764 6.77785C1.37133 6.9057 1.36318 6.96963 1.37784 7.02579C1.40128 7.11554 1.47015 7.19375 1.55622 7.22835C1.61007 7.25 1.67746 7.25 1.81224 7.25H22.1878C22.3226 7.25 22.39 7.25 22.4438 7.22835C22.5299 7.19375 22.5987 7.11553 22.6222 7.02579C22.6368 6.96963 22.6287 6.9057 22.6124 6.77785C22.4707 5.66669 22.1732 4.76101 21.507 4.0138C21.3093 3.79205 21.0919 3.58749 20.8574 3.40229C20.074 2.78362 19.1316 2.50988 17.9694 2.3786Z',
  d7: 'M22.0357 13.5026C22.2218 13.599 22.3148 13.6473 22.3355 13.6544C22.5474 13.7276 22.6924 13.6414 22.7293 13.4203C22.7329 13.3987 22.7344 13.3231 22.7374 13.1719C22.75 12.5338 22.75 11.8296 22.75 11.0528V10.9473C22.75 10.3715 22.75 9.83565 22.7449 9.33709C22.7421 9.0614 22.7406 8.92356 22.653 8.83678C22.5653 8.75 22.4264 8.75 22.1486 8.75H1.85139C1.57361 8.75 1.43472 8.75 1.34704 8.83678C1.25937 8.92356 1.25795 9.0614 1.25512 9.33709C1.24999 9.83564 1.25 10.3715 1.25 10.9472V11.0527C1.24999 12.7767 1.24998 14.1427 1.38763 15.2222C1.52932 16.3333 1.82681 17.239 2.49298 17.9862C2.69068 18.2079 2.90811 18.4125 3.14263 18.5977C3.926 19.2164 4.86842 19.4901 6.03058 19.6214C7.16917 19.75 8.61345 19.75 10.4525 19.75H12.3753C12.5649 19.75 12.6597 19.75 12.7048 19.7353C12.8454 19.6897 12.9029 19.6154 12.9117 19.4679C12.9145 19.4205 12.8837 19.3021 12.8222 19.0654C12.8077 19.0097 12.8004 18.9818 12.7942 18.9657C12.7746 18.9151 12.7612 18.8949 12.722 18.8574C12.7096 18.8454 12.6866 18.828 12.6405 18.793C12.0994 18.3821 11.75 17.7319 11.75 17C11.75 16.299 12.0706 15.6728 12.5732 15.2602C12.6813 15.1714 12.7354 15.127 12.7602 15.0898C12.7849 15.0527 12.8051 14.9857 12.8454 14.8517C13.0146 14.2897 13.4021 13.7941 13.9643 13.5026C13.9921 13.4881 14.0202 13.4743 14.0483 13.4611C14.202 13.3893 14.2788 13.3534 14.3161 13.3161C14.3534 13.2788 14.3893 13.202 14.4611 13.0483C14.4743 13.0202 14.4881 12.9921 14.5026 12.9643C14.7941 12.4021 15.2897 12.0146 15.8517 11.8454C15.9857 11.8051 16.0527 11.7849 16.0898 11.7602C16.127 11.7354 16.1714 11.6813 16.2602 11.5732C16.6728 11.0706 17.299 10.75 18 10.75C18.701 10.75 19.3272 11.0706 19.7398 11.5732C19.8286 11.6813 19.873 11.7354 19.9102 11.7602C19.9473 11.7849 20.0143 11.8051 20.1483 11.8454C20.7103 12.0146 21.2059 12.4021 21.4974 12.9643C21.5119 12.9921 21.5257 13.0202 21.5389 13.0483C21.6107 13.202 21.6466 13.2788 21.6839 13.3161C21.7212 13.3534 21.798 13.3893 21.9517 13.4611C21.9798 13.4743 22.0079 13.4881 22.0357 13.5026Z',
  d8: 'M17.9703 2.3786C16.8317 2.24998 15.3875 2.24999 13.5485 2.25H10.4534C8.61437 2.24999 7.17008 2.24998 6.03149 2.3786C4.86933 2.50988 3.92692 2.78362 3.14354 3.40229C2.90902 3.58749 2.69159 3.79205 2.49389 4.0138C1.82772 4.76101 1.53023 5.66669 1.38854 6.77785C1.37223 6.9057 1.36408 6.96963 1.37874 7.02579C1.40218 7.11554 1.47105 7.19375 1.55712 7.22835C1.61097 7.25 1.67836 7.25 1.81314 7.25H22.1887C22.3235 7.25 22.3909 7.25 22.4447 7.22835C22.5308 7.19375 22.5996 7.11553 22.6231 7.02579C22.6377 6.96963 22.6296 6.9057 22.6133 6.77785C22.4716 5.66669 22.1741 4.76101 21.5079 4.0138C21.3102 3.79205 21.0928 3.58749 20.8583 3.40229C20.0749 2.78362 19.1325 2.50988 17.9703 2.3786Z',
  d9: 'M22 10V3H2V19H10',
  d10: 'M17.5 12V14M17.5 14V19M17.5 14L19.1875 13.125M17.5 14L15.8125 13.125M17.5 19L17.5 21M17.5 19L15.8125 19.875M17.5 19L19.1875 19.875M22 16.5L20 16.5M20 16.5L15 16.5M20 16.5L20.875 18.1875M20 16.5L20.875 14.8125M15 16.5L13 16.5M15 16.5L14.125 14.8125M15 16.5L14.125 18.1875',
  d11: 'M18.25 11.25V12.7663L19.5081 12.1139L20.1986 13.4456L18.25 14.4559V15.75H19.5441L20.5544 13.8014L21.8861 14.4919L21.2337 15.75L22.75 15.75V17.25H21.2337L21.8861 18.5081L20.5544 19.1986L19.5441 17.25H18.25V18.5441L20.1986 19.5544L19.5081 20.8861L18.25 20.2337V21.75H16.75L16.75 20.2337L15.4919 20.8861L14.8014 19.5544L16.75 18.5441V17.25H15.4559L14.4456 19.1986L13.1139 18.5081L13.7663 17.25H12.25L12.25 15.75H13.7663L13.1139 14.4919L14.4456 13.8014L15.4559 15.75L16.75 15.75V14.4559L14.8014 13.4456L15.4919 12.1139L16.75 12.7663V11.25H18.25Z',
  d12: 'M1.25 3C1.25 2.58579 1.58579 2.25 2 2.25H22C22.4142 2.25 22.75 2.58579 22.75 3V7.25H1.25V3Z',
  d13: 'M1.25 8.75H22.75V13.2502L21.4328 12.5672L19.75 9.75H15.25L13.5672 12.5672L10.75 14.25L10.75 18.75L12.2505 19.75H2C1.58579 19.75 1.25 19.4142 1.25 19V8.75Z',
} as const;

export const IconCreditCardFreezeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-freeze-stroke-rounded IconCreditCardFreezeStrokeRounded"
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

export const IconCreditCardFreezeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-freeze-duotone-rounded IconCreditCardFreezeDuotoneRounded"
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

export const IconCreditCardFreezeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-freeze-twotone-rounded IconCreditCardFreezeTwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardFreezeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-freeze-solid-rounded IconCreditCardFreezeSolidRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardFreezeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-freeze-bulk-rounded IconCreditCardFreezeBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCreditCardFreezeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-freeze-stroke-sharp IconCreditCardFreezeStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardFreezeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-freeze-solid-sharp IconCreditCardFreezeSolidSharp"
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
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCreditCardFreeze: TheIconSelfPack = {
  name: 'CreditCardFreeze',
  StrokeRounded: IconCreditCardFreezeStrokeRounded,
  DuotoneRounded: IconCreditCardFreezeDuotoneRounded,
  TwotoneRounded: IconCreditCardFreezeTwotoneRounded,
  SolidRounded: IconCreditCardFreezeSolidRounded,
  BulkRounded: IconCreditCardFreezeBulkRounded,
  StrokeSharp: IconCreditCardFreezeStrokeSharp,
  SolidSharp: IconCreditCardFreezeSolidSharp,
};