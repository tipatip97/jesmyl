import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z',
  d2: 'M3.1004 11C2.4033 12.1065 2 13.4168 2 14.8212C2 18.7859 5.21417 22 9.17905 22C10.5834 22 11.8935 21.5968 13 20.8998',
  d3: 'M12 10H15.5M12 10V6.5H14M12 10V13.5H14M15.5 10C16.3284 10 17 9.2165 17 8.25C17 7.2835 16.3284 6.5 15.5 6.5H14M15.5 10C16.3284 10 17 10.7835 17 11.75C17 12.7165 16.3284 13.5 15.5 13.5H14M14 13.5V14.5M14 6.5V5.5',
  d4: 'M12 10H15.5M12 10V7.5C12 7.0286 12 6.79289 12.1464 6.64645C12.2929 6.5 12.5286 6.5 13 6.5H14M12 10V12.5C12 12.9714 12 13.2071 12.1464 13.3536C12.2929 13.5 12.5286 13.5 13 13.5H14M15.5 10C16.3284 10 17 9.2165 17 8.25C17 7.2835 16.3284 6.5 15.5 6.5H14M15.5 10C16.3284 10 17 10.7835 17 11.75C17 12.7165 16.3284 13.5 15.5 13.5H14M14 13.5V14.5M14 6.5V5.5',
  d5: 'M2.98539 10.205C3.25498 9.87581 3.38978 9.7112 3.52076 9.75811C3.65173 9.80502 3.65134 10.0334 3.65055 10.4902C3.65054 10.4959 3.65054 10.5017 3.65054 10.5075C3.65054 15.9432 8.05704 20.3497 13.4927 20.3497C13.4985 20.3497 13.5043 20.3497 13.5101 20.3497C13.9668 20.3489 14.1952 20.3485 14.2421 20.4795C14.289 20.6105 14.1244 20.7453 13.7952 21.0149C12.4707 22.0995 10.7772 22.7502 8.93172 22.7502C4.68922 22.7502 1.25 19.311 1.25 15.0685C1.25 13.223 1.90079 11.5296 2.98539 10.205Z',
  d6: 'M14 1.25024C9.16751 1.25024 5.25 5.16775 5.25 10.0002C5.25 14.8327 9.16751 18.7502 14 18.7502C18.8325 18.7502 22.75 14.8327 22.75 10.0002C22.75 5.16775 18.8325 1.25024 14 1.25024ZM14.25 5.50024C14.25 5.08603 13.9142 4.75024 13.5 4.75024C13.0858 4.75024 12.75 5.08603 12.75 5.50024V5.75024H12.5L12.4656 5.75024C12.2605 5.75015 12.0387 5.75007 11.8514 5.77524C11.6321 5.80473 11.3519 5.88056 11.1161 6.11636C10.8803 6.35216 10.8045 6.63235 10.775 6.85167C10.7498 7.03889 10.7499 7.26068 10.75 7.4658L10.75 7.50024V12.5002L10.75 12.5347C10.7499 12.7398 10.7498 12.9616 10.775 13.1488C10.8045 13.3681 10.8803 13.6483 11.1161 13.8841C11.3519 14.1199 11.6321 14.1958 11.8514 14.2253C12.0387 14.2504 12.2604 14.2503 12.4655 14.2503H12.4656L12.5 14.2502H12.75V14.5002C12.75 14.9145 13.0858 15.2502 13.5 15.2502C13.9142 15.2502 14.25 14.9145 14.25 14.5002V14.2502H15C16.347 14.2502 17.25 13.0183 17.25 11.7502C17.25 11.1051 17.0162 10.4692 16.6092 10.0002C17.0162 9.53127 17.25 8.89544 17.25 8.25024C17.25 6.98216 16.347 5.75024 15 5.75024H14.25V5.50024ZM15.75 8.25024C15.75 8.91516 15.3099 9.25024 15 9.25024H12.25V7.50024C12.25 7.40117 12.2501 7.32085 12.2512 7.2514C12.3206 7.25028 12.4009 7.25024 12.5 7.25024H15C15.3099 7.25024 15.75 7.58533 15.75 8.25024ZM15 10.7502H12.25V12.5002C12.25 12.5993 12.2501 12.6796 12.2512 12.7491C12.3206 12.7502 12.4009 12.7502 12.5 12.7502H15C15.3099 12.7502 15.75 12.4152 15.75 11.7502C15.75 11.0853 15.3099 10.7502 15 10.7502Z',
  d7: 'M5.25 10.0002C5.25 5.16775 9.16751 1.25024 14 1.25024C18.8325 1.25024 22.75 5.16775 22.75 10.0002C22.75 14.8327 18.8325 18.7502 14 18.7502C9.16751 18.7502 5.25 14.8327 5.25 10.0002Z',
  d8: 'M13.5 4.75024C13.9142 4.75024 14.25 5.08603 14.25 5.50024V5.75024H15C16.347 5.75024 17.25 6.98216 17.25 8.25024C17.25 8.89544 17.0162 9.53127 16.6092 10.0002C17.0162 10.4692 17.25 11.1051 17.25 11.7502C17.25 13.0183 16.347 14.2502 15 14.2502H14.25V14.5002C14.25 14.9145 13.9142 15.2502 13.5 15.2502C13.0858 15.2502 12.75 14.9145 12.75 14.5002V14.2502H12.5C12.4886 14.2502 12.4771 14.2502 12.4656 14.2503C12.2605 14.2503 12.0387 14.2504 11.8514 14.2253C11.6321 14.1958 11.3519 14.1199 11.1161 13.8841C10.8803 13.6483 10.8045 13.3681 10.775 13.1488C10.7498 12.9616 10.7499 12.7398 10.75 12.5347C10.75 12.5232 10.75 12.5117 10.75 12.5002V7.50024C10.75 7.48882 10.75 7.47734 10.75 7.4658C10.7499 7.26068 10.7498 7.03889 10.775 6.85167C10.8045 6.63235 10.8803 6.35216 11.1161 6.11636C11.3519 5.88056 11.6321 5.80473 11.8514 5.77524C12.0387 5.75007 12.2605 5.75015 12.4656 5.75024C12.4771 5.75024 12.4886 5.75024 12.5 5.75024H12.75V5.50024C12.75 5.08603 13.0858 4.75024 13.5 4.75024ZM15 9.25024C15.3099 9.25024 15.75 8.91516 15.75 8.25024C15.75 7.58533 15.3099 7.25024 15 7.25024H12.5C12.4009 7.25024 12.3206 7.25028 12.2512 7.2514C12.2501 7.32085 12.25 7.40117 12.25 7.50024V9.25024H15ZM12.25 10.7502H15C15.3099 10.7502 15.75 11.0853 15.75 11.7502C15.75 12.4152 15.3099 12.7502 15 12.7502H12.5C12.4009 12.7502 12.3206 12.7502 12.2512 12.7491C12.2501 12.6796 12.25 12.5993 12.25 12.5002V10.7502Z',
  d9: 'M4.03233 7.60083C3.84776 8.37045 3.75 9.17383 3.75 10C3.75 15.661 8.33908 20.25 14 20.25C14.8262 20.25 15.6296 20.1523 16.3992 19.9677C14.802 21.6797 12.526 22.75 10 22.75C5.16751 22.75 1.25 18.8325 1.25 14C1.25 11.474 2.32039 9.19802 4.03233 7.60083Z',
  d10: 'M14 1.25C9.16751 1.25 5.25 5.16751 5.25 10C5.25 14.8325 9.16751 18.75 14 18.75C18.8325 18.75 22.75 14.8325 22.75 10C22.75 5.16751 18.8325 1.25 14 1.25ZM14.75 5.75V4.75H13.25V5.75H11.25V14.25H13.25V15.25H14.75V14.25H15.5C16.8469 14.25 17.75 13.0181 17.75 11.75C17.75 11.1048 17.5162 10.469 17.1091 10C17.5162 9.53103 17.75 8.89519 17.75 8.25C17.75 6.98192 16.8469 5.75 15.5 5.75H14.75ZM16.25 8.25C16.25 8.91492 15.8099 9.25 15.5 9.25H12.75V7.25H15.5C15.8099 7.25 16.25 7.58508 16.25 8.25ZM15.5 10.75H12.75V12.75H15.5C15.8099 12.75 16.25 12.4149 16.25 11.75C16.25 11.0851 15.8099 10.75 15.5 10.75Z',
} as const;

export const IconCoinsBitcoinStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-bitcoin-stroke-rounded IconCoinsBitcoinStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsBitcoinDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-bitcoin-duotone-rounded IconCoinsBitcoinDuotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCoinsBitcoinTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-bitcoin-twotone-rounded IconCoinsBitcoinTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconCoinsBitcoinSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-bitcoin-solid-rounded IconCoinsBitcoinSolidRounded"
    >
      <path 
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

export const IconCoinsBitcoinBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-bitcoin-bulk-rounded IconCoinsBitcoinBulkRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCoinsBitcoinStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-bitcoin-stroke-sharp IconCoinsBitcoinStrokeSharp"
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
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsBitcoinSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-bitcoin-solid-sharp IconCoinsBitcoinSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCoinsBitcoin: TheIconSelfPack = {
  name: 'CoinsBitcoin',
  StrokeRounded: IconCoinsBitcoinStrokeRounded,
  DuotoneRounded: IconCoinsBitcoinDuotoneRounded,
  TwotoneRounded: IconCoinsBitcoinTwotoneRounded,
  SolidRounded: IconCoinsBitcoinSolidRounded,
  BulkRounded: IconCoinsBitcoinBulkRounded,
  StrokeSharp: IconCoinsBitcoinStrokeSharp,
  SolidSharp: IconCoinsBitcoinSolidSharp,
};