import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.002 13.5C16.002 14.3284 16.6735 15 17.502 15C18.3304 15 19.002 14.3284 19.002 13.5C19.002 12.6716 18.3304 12 17.502 12C16.6735 12 16.002 12.6716 16.002 13.5Z',
  d2: 'M10 15L3 22M10 22L3 15',
  d3: 'M10.002 7H16.002C18.8304 7 20.2446 7 21.1233 7.87868C22.002 8.75736 22.002 10.1716 22.002 13V15C22.002 17.8284 22.002 19.2426 21.1233 20.1213C20.2446 21 18.8304 21 16.002 21H13.501M18.002 7C18.002 6.07003 18.002 5.60504 17.8997 5.22354C17.6223 4.18827 16.8137 3.37962 15.7784 3.10222C15.3969 3 14.9319 3 14.002 3H10.002C6.23072 3 4.3451 3 3.17353 4.17157C2.00195 5.34315 2.00195 7.22876 2.00195 11V12',
  d4: 'M21.9983 13V15C21.9983 17.8284 21.9983 19.2426 21.1196 20.1213C20.2409 21 18.8267 21 15.9983 21H9.99829C6.22705 21 4.34144 21 3.16986 19.8284C1.99829 18.6568 1.99829 16.7712 1.99829 13V11C1.99829 9.33128 1.99829 8.03178 2.09978 6.99996H17.9983C18.5792 6.91908 20.0167 6.98158 21.1196 7.87864C21.9983 8.75732 21.9983 10.1715 21.9983 13ZM17.5002 15C16.6718 15 16.0002 14.3284 16.0002 13.5C16.0002 12.6716 16.6718 12 17.5002 12C18.3287 12 19.0002 12.6716 19.0002 13.5C19.0002 14.3284 18.3287 15 17.5002 15Z',
  d5: 'M16.0002 13.5C16.0002 14.3284 16.6718 15 17.5002 15C18.3287 15 19.0002 14.3284 19.0002 13.5C19.0002 12.6716 18.3287 12 17.5002 12C16.6718 12 16.0002 12.6716 16.0002 13.5Z',
  d6: 'M10.0002 15L3.00024 22M10.0002 22L3.00024 15',
  d7: 'M10.0002 7H16.0002C18.8287 7 20.2429 7 21.1216 7.87868C22.0002 8.75736 22.0002 10.1716 22.0002 13V15C22.0002 17.8284 22.0002 19.2426 21.1216 20.1213C20.2429 21 18.8287 21 16.0002 21H13.4993M18.0002 7C18.0002 6.07003 18.0002 5.60504 17.898 5.22354C17.6206 4.18827 16.812 3.37962 15.7767 3.10222C15.3952 3 14.9302 3 14.0002 3H10.0002C6.22901 3 4.34339 3 3.17182 4.17157C2.00024 5.34315 2.00024 7.22876 2.00024 11V12',
  d8: 'M18.8242 5.32742C18.8074 5.0281 18.774 4.76247 18.7077 4.51568C18.3462 3.16983 17.2926 2.1186 15.9436 1.75798C15.4435 1.62431 14.8663 1.62463 14.089 1.62505L4.18182 1.62509C2.56262 1.62509 1.25 2.93465 1.25 4.55008L1.25 11.8752C1.25 12.1411 1.58931 12.2932 1.82388 12.1681C2.76936 11.6639 3.97059 11.8102 4.76758 12.6072L6.28769 14.1273C6.40484 14.2445 6.59479 14.2445 6.71195 14.1273L8.23205 12.6072C9.20836 11.6309 10.7913 11.6309 11.7676 12.6072C12.7439 13.5835 12.7439 15.1665 11.7676 16.1428L10.2475 17.6629C10.1303 17.78 10.1303 17.97 10.2475 18.0871L11.7676 19.6072C12.1232 19.9628 12.3493 20.3989 12.4458 20.8568C12.4776 21.0076 12.6047 21.125 12.7589 21.125H15.978C17.3014 21.125 18.3927 21.1251 19.2563 21.0092C20.1631 20.8876 20.9639 20.6224 21.6051 19.9827C22.2463 19.343 22.512 18.5441 22.6339 17.6395C22.7501 16.7778 22.75 15.6891 22.75 14.3688V12.2813C22.75 10.961 22.7501 9.87228 22.6339 9.01062C22.512 8.10599 22.2463 7.30706 21.6051 6.66735C20.9639 6.02765 20.1631 5.76248 19.2563 5.64086C19.2053 5.63402 19.1536 5.62759 19.101 5.62153C18.9496 5.60409 18.8327 5.47957 18.8242 5.32742ZM13.9541 3.57507C14.9259 3.57507 15.22 3.58345 15.4372 3.64152C16.1117 3.82183 16.6386 4.34744 16.8193 5.02037C16.8344 5.07655 16.8461 5.13788 16.8553 5.21481C16.8753 5.38411 16.7343 5.52581 16.5638 5.52545C16.3738 5.52505 16.1784 5.52506 15.9776 5.52506L4.18137 5.52506C3.64164 5.52506 3.2041 5.08854 3.2041 4.55007C3.2041 4.01159 3.64164 3.57507 4.18137 3.57507H13.9541ZM17.5 11.375C18.6046 11.375 19.5 12.2704 19.5 13.375C19.5 14.4796 18.6046 15.375 17.5 15.375C16.3954 15.375 15.5 14.4796 15.5 13.375C15.5 12.2704 16.3954 11.375 17.5 11.375Z',
  d9: 'M2.29289 13.6679C2.68342 13.2774 3.31658 13.2774 3.70711 13.6679L6.5 16.4608L9.29289 13.6679C9.68342 13.2774 10.3166 13.2774 10.7071 13.6679C11.0976 14.0584 11.0976 14.6916 10.7071 15.0821L7.91421 17.875L10.7071 20.6679C11.0976 21.0584 11.0976 21.6916 10.7071 22.0821C10.3166 22.4726 9.68342 22.4726 9.29289 22.0821L6.5 19.2892L3.70711 22.0821C3.31658 22.4726 2.68342 22.4726 2.29289 22.0821C1.90237 21.6916 1.90237 21.0584 2.29289 20.6679L5.08579 17.875L2.29289 15.0821C1.90237 14.6916 1.90237 14.0584 2.29289 13.6679Z',
  d10: 'M18.7077 4.51568C18.774 4.76247 18.8074 5.0281 18.8242 5.32742C18.8327 5.47957 18.9496 5.60409 19.101 5.62153C19.1536 5.62759 19.2053 5.63402 19.2563 5.64086C20.1631 5.76248 20.9639 6.02765 21.6051 6.66735C22.2463 7.30706 22.512 8.10599 22.6339 9.01062C22.7501 9.87228 22.75 10.961 22.75 12.2813V14.3688C22.75 15.6891 22.7501 16.7778 22.6339 17.6395C22.512 18.5441 22.2463 19.343 21.6051 19.9827C20.9639 20.6224 20.1631 20.8876 19.2563 21.0092C18.3927 21.1251 17.3014 21.125 15.978 21.125H12.7589C12.6047 21.125 12.4776 21.0076 12.4458 20.8568C12.3493 20.3989 12.1232 19.9628 11.7676 19.6072L10.2475 18.0871C10.1303 17.97 10.1303 17.78 10.2475 17.6629L11.7676 16.1428C12.7439 15.1665 12.7439 13.5835 11.7676 12.6072C10.7913 11.6309 9.20836 11.6309 8.23205 12.6072L6.71195 14.1273C6.59479 14.2445 6.40484 14.2445 6.28769 14.1273L4.76758 12.6072C3.97059 11.8102 2.76936 11.6639 1.82388 12.1681C1.58931 12.2932 1.25 12.1411 1.25 11.8752L1.25 4.55008C1.25 2.93465 2.56262 1.62509 4.18182 1.62509L14.089 1.62505C14.8663 1.62463 15.4435 1.62431 15.9436 1.75798C17.2926 2.1186 18.3462 3.16983 18.7077 4.51568ZM15.4372 3.64152C15.22 3.58345 14.9259 3.57507 13.9541 3.57507H4.18137C3.64164 3.57507 3.2041 4.01159 3.2041 4.55007C3.2041 5.08854 3.64164 5.52506 4.18137 5.52506L15.9776 5.52506C16.1784 5.52506 16.3738 5.52505 16.5638 5.52545C16.7343 5.52581 16.8753 5.38411 16.8553 5.21481C16.8461 5.13788 16.8344 5.07655 16.8193 5.02037C16.6386 4.34744 16.1117 3.82183 15.4372 3.64152Z',
  d11: 'M19.5 13.375C19.5 12.2704 18.6046 11.375 17.5 11.375C16.3954 11.375 15.5 12.2704 15.5 13.375C15.5 14.4796 16.3954 15.375 17.5 15.375C18.6046 15.375 19.5 14.4796 19.5 13.375Z',
  d12: 'M10 7.00005H18M18 7.00005H22V21H13.5M18 7.00005V3H2V11.5',
  d13: 'M2.22222 1.75C1.96437 1.75 1.71708 1.84658 1.53476 2.01848C1.35243 2.19039 1.25 2.42355 1.25 2.66666L1.25001 6.49637L1.25 6.5L1.25002 13.129L2.66444 11.7145L5.45733 14.5074L8.25023 11.7145L11.7858 15.2501L8.99287 18.043L11.7858 20.8359L11.3716 21.25H22C22.4142 21.25 22.75 20.9142 22.75 20.5V6.5C22.75 6.08579 22.4142 5.75 22 5.75H18.75V2.66666C18.75 2.1604 18.3147 1.75 17.7778 1.75H2.22222ZM16.8056 5.75V3.58332H3.19445L3.19445 5.75H16.8056ZM17.5 11.25C18.7426 11.25 19.75 12.2574 19.75 13.5C19.75 14.7426 18.7426 15.75 17.5 15.75C16.2574 15.75 15.25 14.7426 15.25 13.5C15.25 12.2574 16.2574 11.25 17.5 11.25Z',
  d14: 'M6.87157 18.043L9.66446 20.8359L8.25024 22.2502L5.45735 19.4573L2.66446 22.2502L1.25024 20.8359L4.04314 18.043L1.25024 15.2502L2.66446 13.8359L5.45735 16.6288L8.25024 13.8359L9.66446 15.2502L6.87157 18.043Z',
} as const;

export const IconWalletRemove01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-01-stroke-rounded IconWalletRemove01StrokeRounded"
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

export const IconWalletRemove01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-01-duotone-rounded IconWalletRemove01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletRemove01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-01-twotone-rounded IconWalletRemove01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconWalletRemove01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-01-solid-rounded IconWalletRemove01SolidRounded"
    >
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

export const IconWalletRemove01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-01-bulk-rounded IconWalletRemove01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletRemove01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-01-stroke-sharp IconWalletRemove01StrokeSharp"
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
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWalletRemove01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-remove-01-solid-sharp IconWalletRemove01SolidSharp"
    >
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

export const iconPackOfWalletRemove01: TheIconSelfPack = {
  name: 'WalletRemove01',
  StrokeRounded: IconWalletRemove01StrokeRounded,
  DuotoneRounded: IconWalletRemove01DuotoneRounded,
  TwotoneRounded: IconWalletRemove01TwotoneRounded,
  SolidRounded: IconWalletRemove01SolidRounded,
  BulkRounded: IconWalletRemove01BulkRounded,
  StrokeSharp: IconWalletRemove01StrokeSharp,
  SolidSharp: IconWalletRemove01SolidSharp,
};