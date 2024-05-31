import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.002 13.5C16.002 14.3284 16.6735 15 17.502 15C18.3304 15 19.002 14.3284 19.002 13.5C19.002 12.6716 18.3304 12 17.502 12C16.6735 12 16.002 12.6716 16.002 13.5Z',
  d2: 'M2.00195 11C2.00195 7.22876 2.00195 5.34315 3.17353 4.17157C4.3451 3 6.23072 3 10.002 3H14.002C14.9319 3 15.3969 3 15.7784 3.10222C16.8137 3.37962 17.6223 4.18827 17.8997 5.22354C18.002 5.60504 18.002 6.07003 18.002 7M10.002 7H16.002C18.8304 7 20.2446 7 21.1233 7.87868C22.002 8.75736 22.002 10.1716 22.002 13V15C22.002 17.8284 22.002 19.2426 21.1233 20.1213C20.2446 21 18.8304 21 16.002 21H12.5005',
  d3: 'M10 17H6M6 17H2M6 17V21M6 17L6 13',
  d4: 'M22 13V15C22 17.8284 22 19.2426 21.1213 20.1213C20.2426 21 18.8284 21 16 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6568 2 16.7712 2 13V11C2 9.33128 2 8.03178 2.10149 6.99996H18C18.5809 6.91908 20.0184 6.98158 21.1213 7.87864C22 8.75732 22 10.1715 22 13ZM17.502 15C16.6735 15 16.002 14.3284 16.002 13.5C16.002 12.6716 16.6735 12 17.502 12C18.3304 12 19.002 12.6716 19.002 13.5C19.002 14.3284 18.3304 15 17.502 15Z',
  d5: 'M18.9386 5.67125C18.9195 5.43446 18.8872 5.2187 18.8327 5.01568C18.4712 3.66983 17.4176 2.6186 16.0686 2.25798C15.5685 2.12431 14.9913 2.12463 14.214 2.12505L4.30682 2.12509C2.68762 2.12509 1.375 3.43465 1.375 5.05008V12.9214V12.9223C1.375 13.2008 1.37499 13.4709 1.37558 13.7327C1.37624 14.0324 1.37657 14.1823 1.44401 14.2648C1.45928 14.2835 1.46832 14.2925 1.48705 14.3077C1.56974 14.375 1.75418 14.375 2.12305 14.375H3.02305C3.30589 14.375 3.44731 14.375 3.53518 14.2871C3.62305 14.1993 3.62305 14.0578 3.62305 13.775V12.875C3.62305 11.4943 4.74234 10.375 6.12305 10.375C7.50376 10.375 8.62305 11.4943 8.62305 12.875V13.775C8.62305 14.0578 8.62305 14.1993 8.71092 14.2871C8.79878 14.375 8.9402 14.375 9.22305 14.375H10.123C11.5038 14.375 12.623 15.4943 12.623 16.875C12.623 18.2557 11.5038 19.375 10.123 19.375H9.22305C8.9402 19.375 8.79878 19.375 8.71092 19.4629C8.62305 19.5507 8.62305 19.6922 8.62305 19.975V20.875C8.62305 21.2454 8.62305 21.4306 8.69083 21.5135C8.70569 21.5317 8.71444 21.5405 8.73258 21.5554C8.81529 21.6233 8.96575 21.6237 9.26667 21.6244C9.53524 21.625 9.81257 21.625 10.0988 21.625H10.099H16.103C17.4264 21.625 18.5177 21.6251 19.3813 21.5092C20.2881 21.3876 21.0889 21.1224 21.7301 20.4827C22.3713 19.843 22.637 19.0441 22.7589 18.1395C22.8751 17.2778 22.875 16.1891 22.875 14.8688V12.7813C22.875 11.461 22.8751 10.3723 22.7589 9.51062C22.637 8.60599 22.3713 7.80706 21.7301 7.16735C21.0889 6.52765 20.2881 6.26248 19.3813 6.14086C19.2284 6.12034 19.1519 6.11009 19.0998 6.07954C19.0474 6.04876 19.0132 6.0127 18.9852 5.95867C18.9575 5.90505 18.9512 5.82712 18.9386 5.67125ZM14.0791 4.07507C15.0509 4.07507 15.345 4.08345 15.5622 4.14152C16.2367 4.32183 16.7636 4.84744 16.9443 5.52037C16.9826 5.66287 17.0017 5.73412 16.9737 5.81928C16.955 5.8758 16.9029 5.94366 16.8532 5.97628C16.7781 6.02542 16.6824 6.02533 16.4909 6.02517L16.1026 6.02506L4.30638 6.02506C3.76664 6.02506 3.3291 5.58854 3.3291 5.05007C3.3291 4.51159 3.76664 4.07507 4.30638 4.07507H14.0791ZM17.625 11.8751C18.7296 11.8751 19.625 12.7706 19.625 13.8751C19.625 14.9797 18.7296 15.8751 17.625 15.8751C16.5204 15.8751 15.625 14.9797 15.625 13.8751C15.625 12.7706 16.5204 11.8751 17.625 11.8751Z',
  d6: 'M6.12305 11.875C6.67533 11.875 7.12305 12.3227 7.12305 12.875L7.12305 15.875H10.123C10.6753 15.875 11.123 16.3227 11.123 16.875C11.123 17.4273 10.6753 17.875 10.123 17.875H7.12305V20.875C7.12305 21.4273 6.67533 21.875 6.12305 21.875C5.57076 21.875 5.12305 21.4273 5.12305 20.875V17.875H2.12305C1.57076 17.875 1.12305 17.4273 1.12305 16.875C1.12305 16.3227 1.57076 15.875 2.12305 15.875H5.12305L5.12305 12.875C5.12305 12.3227 5.57076 11.875 6.12305 11.875Z',
  d7: 'M18.8327 5.01568C18.8872 5.2187 18.9195 5.43446 18.9386 5.67125C18.9512 5.82712 18.9575 5.90505 18.9852 5.95867C19.0132 6.0127 19.0474 6.04876 19.0998 6.07954C19.1519 6.11009 19.2284 6.12034 19.3813 6.14086C20.2881 6.26248 21.0889 6.52765 21.7301 7.16735C22.3713 7.80706 22.637 8.60599 22.7589 9.51062C22.8751 10.3723 22.875 11.461 22.875 12.7813V14.8688C22.875 16.1891 22.8751 17.2778 22.7589 18.1395C22.637 19.0441 22.3713 19.843 21.7301 20.4827C21.0889 21.1224 20.2881 21.3876 19.3813 21.5092C18.5177 21.6251 17.4264 21.625 16.103 21.625H10.099C9.81268 21.625 9.5353 21.625 9.26667 21.6244C8.96575 21.6237 8.81529 21.6233 8.73258 21.5554C8.71444 21.5405 8.70569 21.5317 8.69083 21.5135C8.62305 21.4306 8.62305 21.2454 8.62305 20.875V19.975C8.62305 19.6922 8.62305 19.5507 8.71092 19.4629C8.79878 19.375 8.9402 19.375 9.22305 19.375H10.123C11.5038 19.375 12.623 18.2557 12.623 16.875C12.623 15.4943 11.5038 14.375 10.123 14.375H9.22305C8.9402 14.375 8.79878 14.375 8.71092 14.2871C8.62305 14.1993 8.62305 14.0578 8.62305 13.775V12.875C8.62305 11.4943 7.50376 10.375 6.12305 10.375C4.74234 10.375 3.62305 11.4943 3.62305 12.875V13.775C3.62305 14.0578 3.62305 14.1993 3.53518 14.2871C3.44731 14.375 3.30589 14.375 3.02305 14.375H2.12305C1.75418 14.375 1.56974 14.375 1.48705 14.3077C1.46832 14.2925 1.45928 14.2835 1.44401 14.2648C1.37657 14.1823 1.37624 14.0324 1.37558 13.7327C1.37499 13.4706 1.375 13.2003 1.375 12.9214V5.05008C1.375 3.43465 2.68762 2.12509 4.30682 2.12509L14.214 2.12505C14.9913 2.12463 15.5685 2.12431 16.0686 2.25798C17.4176 2.6186 18.4712 3.66983 18.8327 5.01568ZM15.5622 4.14152C15.345 4.08345 15.0509 4.07507 14.0791 4.07507H4.30638C3.76664 4.07507 3.3291 4.51159 3.3291 5.05007C3.3291 5.58854 3.76664 6.02506 4.30638 6.02506L16.1026 6.02506C16.2343 6.02506 16.3638 6.02506 16.4909 6.02517C16.6824 6.02533 16.7781 6.02542 16.8532 5.97628C16.9029 5.94366 16.955 5.8758 16.9737 5.81928C17.0017 5.73412 16.9826 5.66287 16.9443 5.52037C16.7636 4.84744 16.2367 4.32183 15.5622 4.14152Z',
  d8: 'M19.625 13.875C19.625 12.7704 18.7296 11.875 17.625 11.875C16.5204 11.875 15.625 12.7704 15.625 13.875C15.625 14.9796 16.5204 15.875 17.625 15.875C18.7296 15.875 19.625 14.9796 19.625 13.875Z',
  d9: 'M10 7.00005H18M18 7.00005H22V21H13.5M18 7.00005V3H2V11.5',
  d10: 'M1.53476 2.01848C1.71708 1.84658 1.96437 1.75 2.22222 1.75H17.7778C18.3147 1.75 18.75 2.1604 18.75 2.66666V5.75H22C22.4142 5.75 22.75 6.08579 22.75 6.5V20.5C22.75 20.9142 22.4142 21.25 22 21.25H10.75V15.75H7.75V12.75H2.75L2.75 15.75H1.25003L1.25 6.5L1.25001 6.49637L1.25 2.66666C1.25 2.42355 1.35243 2.19039 1.53476 2.01848ZM16.8064 3.58331V5.74999H3.19532L3.19531 3.58331H16.8064ZM17.5 11.25C18.7426 11.25 19.75 12.2574 19.75 13.5C19.75 14.7426 18.7426 15.75 17.5 15.75C16.2574 15.75 15.25 14.7426 15.25 13.5C15.25 12.2574 16.2574 11.25 17.5 11.25Z',
  d11: 'M4.25 19.25V22.25H6.25V19.25H9.25V17.25H6.25L6.25 14.25H4.25L4.25 17.25H1.25V19.25H4.25Z',
} as const;

export const IconWalletAdd01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-01-stroke-rounded IconWalletAdd01StrokeRounded"
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

export const IconWalletAdd01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-01-duotone-rounded IconWalletAdd01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconWalletAdd01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-01-twotone-rounded IconWalletAdd01TwotoneRounded"
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

export const IconWalletAdd01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-01-solid-rounded IconWalletAdd01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletAdd01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-01-bulk-rounded IconWalletAdd01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletAdd01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-01-stroke-sharp IconWalletAdd01StrokeSharp"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletAdd01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-add-01-solid-sharp IconWalletAdd01SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfWalletAdd01: TheIconSelfPack = {
  name: 'WalletAdd01',
  StrokeRounded: IconWalletAdd01StrokeRounded,
  DuotoneRounded: IconWalletAdd01DuotoneRounded,
  TwotoneRounded: IconWalletAdd01TwotoneRounded,
  SolidRounded: IconWalletAdd01SolidRounded,
  BulkRounded: IconWalletAdd01BulkRounded,
  StrokeSharp: IconWalletAdd01StrokeSharp,
  SolidSharp: IconWalletAdd01SolidSharp,
};