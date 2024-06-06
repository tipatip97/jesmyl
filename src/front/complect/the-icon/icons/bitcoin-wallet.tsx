import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 13C16 13.8284 16.6716 14.5 17.5 14.5C18.3284 14.5 19 13.8284 19 13C19 12.1716 18.3284 11.5 17.5 11.5C16.6716 11.5 16 12.1716 16 13Z',
  d2: 'M11 19H16C18.8284 19 20.2426 19 21.1213 18.1213C22 17.2426 22 15.8284 22 13V12C22 9.17157 22 7.75736 21.1213 6.87868C20.48 6.23738 19.5534 6.06413 18 6.01732M10 6H16C16.7641 6 17.425 6 18 6.01732M2 10C2 6.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14.9827C15.9308 3 16.4049 3 16.7779 3.15749C17.2579 3.36014 17.6399 3.7421 17.8425 4.22208C18 4.5951 18 5.06917 18 6.01732',
  d3: 'M3.125 19.5L3.125 13.5M5 13.5V12M5 21V19.5M3.125 16.5H6.875M6.875 16.5C7.49632 16.5 8 17.0037 8 17.625V18.375C8 18.9963 7.49632 19.5 6.875 19.5H2M6.875 16.5C7.49632 16.5 8 15.9963 8 15.375V14.625C8 14.0037 7.49632 13.5 6.875 13.5H2',
  d4: 'M22 12V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V10C2 6.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14.9827C15.9308 3 16.4049 3 16.7779 3.15749C17.2579 3.36014 17.6399 3.7421 17.8425 4.22208C18 4.5951 18 5.06917 18 6.01732C19.5534 6.06413 20.48 6.23738 21.1213 6.87868C22 7.75736 22 9.17157 22 12ZM17.5 14.5C16.6716 14.5 16 13.8284 16 13C16 12.1716 16.6716 11.5 17.5 11.5C18.3284 11.5 19 12.1716 19 13C19 13.8284 18.3284 14.5 17.5 14.5Z',
  d5: 'M5 11.25C5.41421 11.25 5.75 11.5858 5.75 12V12.75H6.875C7.91053 12.75 8.75 13.5895 8.75 14.625V15.375C8.75 15.7971 8.61052 16.1866 8.37514 16.5C8.61052 16.8134 8.75 17.2029 8.75 17.625V18.375C8.75 19.4105 7.91053 20.25 6.875 20.25H5.75V21C5.75 21.4142 5.41421 21.75 5 21.75C4.58579 21.75 4.25 21.4142 4.25 21V20.25H2C1.58579 20.25 1.25 19.9142 1.25 19.5C1.25 19.0858 1.58579 18.75 2 18.75H2.375L2.375 14.25H2C1.58579 14.25 1.25 13.9142 1.25 13.5C1.25 13.0858 1.58579 12.75 2 12.75H4.25V12C4.25 11.5858 4.58579 11.25 5 11.25ZM3.875 14.25V15.75H6.875C7.08211 15.75 7.25 15.5821 7.25 15.375V14.625C7.25 14.4179 7.08211 14.25 6.875 14.25H3.875ZM6.875 17.25H3.875L3.875 18.75H6.875C7.08211 18.75 7.25 18.5821 7.25 18.375V17.625C7.25 17.4179 7.08211 17.25 6.875 17.25Z',
  d6: 'M18.835 5.81247C18.8239 5.4427 18.7931 5.12942 18.7077 4.8442C18.3462 3.63639 17.2926 2.69298 15.9436 2.36934C15.4435 2.24938 14.8663 2.24966 14.089 2.25004L4.18182 2.25008C2.56262 2.25008 1.25 3.42533 1.25 4.87507V11.378C1.48458 11.2951 1.73702 11.25 2 11.25H2.87803C3.18691 10.3761 4.02033 9.75 5 9.75C5.98307 9.75 6.81889 10.3805 7.12518 11.2591C8.87231 11.3871 10.25 12.8452 10.25 14.625V15.375C10.25 15.7687 10.1821 16.1476 10.0575 16.5C10.1821 16.8524 10.25 17.2313 10.25 17.625V18.375C10.25 18.8647 10.1457 19.33 9.95812 19.75C9.96341 19.75 9.96869 19.75 9.97398 19.75H15.978H15.9781C17.3014 19.75 18.3927 19.7501 19.2563 19.6461C20.1631 19.5369 20.9639 19.299 21.6051 18.7249C22.2463 18.1508 22.512 17.4338 22.6339 16.6219C22.7501 15.8487 22.75 14.8716 22.75 13.6868V11.8133C22.75 10.6284 22.7501 9.65141 22.6339 8.87812C22.512 8.06627 22.2463 7.34928 21.6051 6.77519C20.9639 6.2011 20.1631 5.96312 19.2563 5.85397C19.1214 5.83774 18.981 5.82404 18.835 5.81247ZM13.9541 4.00007C14.9259 4.00007 15.22 4.00758 15.4372 4.0597C16.1117 4.22151 16.6386 4.69322 16.8193 5.29713C16.8505 5.40127 16.8674 5.52517 16.8763 5.7514C16.5897 5.75004 16.2901 5.75005 15.9776 5.75006L4.18137 5.75006C3.64164 5.75006 3.2041 5.35831 3.2041 4.87506C3.2041 4.39181 3.64164 4.00007 4.18137 4.00007H13.9541ZM19.75 12.75C19.75 11.7835 18.9665 11 18 11C17.0335 11 16.25 11.7835 16.25 12.75C16.25 13.7165 17.0335 14.5 18 14.5C18.9665 14.5 19.75 13.7165 19.75 12.75Z',
  d7: 'M18.7077 4.8442C18.7931 5.12942 18.8239 5.4427 18.835 5.81247C18.981 5.82404 19.1214 5.83774 19.2563 5.85397C20.1631 5.96312 20.9639 6.2011 21.6051 6.77519C22.2463 7.34928 22.512 8.06627 22.6339 8.87812C22.7501 9.65141 22.75 10.6284 22.75 11.8133V13.6868C22.75 14.8716 22.7501 15.8487 22.6339 16.6219C22.512 17.4338 22.2463 18.1508 21.6051 18.7249C20.9639 19.299 20.1631 19.5369 19.2563 19.6461C18.3927 19.7501 17.3014 19.75 15.9781 19.75H9.97398C9.96869 19.75 9.96341 19.75 9.95812 19.75C10.1457 19.33 10.25 18.8647 10.25 18.375V17.625C10.25 17.2313 10.1821 16.8524 10.0575 16.5C10.1821 16.1476 10.25 15.7687 10.25 15.375V14.625C10.25 12.8452 8.87231 11.3871 7.12518 11.2591C6.81889 10.3805 5.98307 9.75 5 9.75C4.02033 9.75 3.18691 10.3761 2.87803 11.25H2C1.73702 11.25 1.48458 11.2951 1.25 11.378V4.87507C1.25 3.42533 2.56262 2.25008 4.18182 2.25008L14.089 2.25004C14.8663 2.24966 15.4435 2.24938 15.9436 2.36934C17.2926 2.69298 18.3462 3.63639 18.7077 4.8442ZM15.4372 4.0597C15.22 4.00758 14.9259 4.00007 13.9541 4.00007H4.18137C3.64164 4.00007 3.2041 4.39181 3.2041 4.87506C3.2041 5.35831 3.64164 5.75006 4.18137 5.75006L15.9776 5.75006C16.2901 5.75005 16.5897 5.75004 16.8763 5.7514C16.8674 5.52517 16.8505 5.40127 16.8193 5.29713C16.6386 4.69322 16.1117 4.22151 15.4372 4.0597Z',
  d8: 'M19.75 12.75C19.75 11.7835 18.9665 11 18 11C17.0335 11 16.25 11.7835 16.25 12.75C16.25 13.7165 17.0335 14.5 18 14.5C18.9665 14.5 19.75 13.7165 19.75 12.75Z',
  d9: 'M10 6.00005H18M18 6.00005H22V19H10M18 6.00005V3H2L2.00002 11',
  d10: 'M5.75 11.25V12.75H6.875C7.91053 12.75 8.75 13.5895 8.75 14.625V15.375C8.75 15.7971 8.61052 16.1866 8.37514 16.5C8.61052 16.8134 8.75 17.2029 8.75 17.625V18.375C8.75 19.4105 7.91053 20.25 6.875 20.25H5.75V21.75H4.25V20.25H1.25V18.75H2.375L2.375 14.25H1.25V12.75H4.25V11.25H5.75ZM3.875 14.25V15.75H6.875C7.08211 15.75 7.25 15.5821 7.25 15.375V14.625C7.25 14.4179 7.08211 14.25 6.875 14.25H3.875ZM6.875 17.25H3.875L3.875 18.75H6.875C7.08211 18.75 7.25 18.5821 7.25 18.375V17.625C7.25 17.4179 7.08211 17.25 6.875 17.25Z',
  d11: 'M2.22222 2.25C1.96437 2.25 1.71708 2.33667 1.53476 2.49095C1.35243 2.64522 1.25 2.85447 1.25 3.07264L1.25001 6.50957L1.25 6.51282L1.25001 11.25H2.75V9.75H7.25V11.2706C8.93748 11.4571 10.25 12.8878 10.25 14.625V15.375C10.25 15.7687 10.1821 16.1476 10.0575 16.5C10.1821 16.8524 10.25 17.2313 10.25 17.625V18.375C10.25 18.8647 10.1457 19.33 9.95813 19.75H22C22.4142 19.75 22.75 19.4487 22.75 19.0769V6.51282C22.75 6.14109 22.4142 5.83974 22 5.83974H18.75V3.07264C18.75 2.61831 18.3147 2.25 17.7778 2.25H2.22222ZM16.8056 5.83974V3.89529H3.19445L3.19445 5.83974H16.8056ZM18.5 14.5C17.6716 14.5 17 13.8284 17 13C17 12.1716 17.6716 11.5 18.5 11.5C19.3284 11.5 20 12.1716 20 13C20 13.8284 19.3284 14.5 18.5 14.5Z',
};

export const IconBitcoinWalletStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-wallet-stroke-rounded IconBitcoinWalletStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinWalletDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-wallet-duotone-rounded IconBitcoinWalletDuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinWalletTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-wallet-twotone-rounded IconBitcoinWalletTwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinWalletSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-wallet-solid-rounded IconBitcoinWalletSolidRounded"
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

export const IconBitcoinWalletBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-wallet-bulk-rounded IconBitcoinWalletBulkRounded"
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
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinWalletStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-wallet-stroke-sharp IconBitcoinWalletStrokeSharp"
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
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconBitcoinWalletSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bitcoin-wallet-solid-sharp IconBitcoinWalletSolidSharp"
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

export const iconPackOfBitcoinWallet: TheIconSelfPack = {
  name: 'BitcoinWallet',
  StrokeRounded: IconBitcoinWalletStrokeRounded,
  DuotoneRounded: IconBitcoinWalletDuotoneRounded,
  TwotoneRounded: IconBitcoinWalletTwotoneRounded,
  SolidRounded: IconBitcoinWalletSolidRounded,
  BulkRounded: IconBitcoinWalletBulkRounded,
  StrokeSharp: IconBitcoinWalletStrokeSharp,
  SolidSharp: IconBitcoinWalletSolidSharp,
};