import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z',
  d2: 'M10 7H16C18.8284 7 20.2426 7 21.1213 7.87868C22 8.75736 22 10.1716 22 13V15C22 17.8284 22 19.2426 21.1213 20.1213C20.2426 21 18.8284 21 16 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.93 3 15.395 3 15.7765 3.10222C16.8117 3.37962 17.6204 4.18827 17.8978 5.22354C18 5.60504 18 6.07003 18 7',
  d3: 'M22 13.0147V15.0111C22 17.8343 22 19.2459 21.1213 20.1229C20.2426 21 18.8284 21 16 21H10C6.22876 21 4.34315 21 3.17157 19.8306C2 18.6612 2 16.779 2 13.0147L2.00005 10.642C2.00065 9.01044 2.00095 8.19468 2.58669 7.61024C3.17243 7.02579 4.02407 7.02579 5.72735 7.02579H18C18.5809 6.94506 20.0184 7.00745 21.1213 7.90285C22 8.77991 22 10.1915 22 13.0147ZM17.5 15.5C16.6716 15.5 16 14.8284 16 14C16 13.1716 16.6716 12.5 17.5 12.5C18.3284 12.5 19 13.1716 19 14C19 14.8284 18.3284 15.5 17.5 15.5Z',
  d4: 'M18.7077 5.14068C18.7931 5.4585 18.8239 5.80758 18.835 6.21961C18.981 6.2325 19.1214 6.24776 19.2563 6.26586C20.1631 6.38748 20.9639 6.65265 21.6051 7.29235C22.2463 7.93206 22.512 8.73099 22.6339 9.63562C22.7501 10.4973 22.75 11.586 22.75 12.9063V14.9938C22.75 16.3141 22.7501 17.4028 22.6339 18.2645C22.512 19.1691 22.2463 19.968 21.6051 20.6077C20.9639 21.2474 20.1631 21.5126 19.2563 21.6342C18.3927 21.7501 17.3014 21.75 15.978 21.75H9.97398C8.19196 21.75 6.75559 21.75 5.6259 21.5985C4.45303 21.4412 3.4655 21.1046 2.68118 20.3222C1.89687 19.5397 1.55952 18.5544 1.40183 17.3843C1.24995 16.2573 1.24997 14.8242 1.25 13.0464V13.0464V5.17508C1.25 3.55965 2.56262 2.25009 4.18182 2.25009L14.089 2.25005C14.8663 2.24963 15.4435 2.24931 15.9436 2.38298C17.2926 2.7436 18.3462 3.79483 18.7077 5.14068ZM15.4372 4.26652C15.22 4.20845 14.9259 4.20007 13.9541 4.20007H4.18137C3.64164 4.20007 3.2041 4.63659 3.2041 5.17507C3.2041 5.71354 3.64164 6.15006 4.18137 6.15006L15.9776 6.15006C16.2901 6.15005 16.5897 6.15005 16.8763 6.15156C16.8674 5.89948 16.8505 5.76142 16.8193 5.64537C16.6386 4.97244 16.1117 4.44683 15.4372 4.26652ZM17.5 12C18.6046 12 19.5 12.8954 19.5 14C19.5 15.1046 18.6046 16 17.5 16C16.3954 16 15.5 15.1046 15.5 14C15.5 12.8954 16.3954 12 17.5 12Z',
  d5: 'M18.835 6.21961C18.8239 5.80758 18.7931 5.4585 18.7077 5.14068C18.3462 3.79483 17.2926 2.7436 15.9436 2.38298C15.4435 2.24931 14.8663 2.24963 14.089 2.25005L4.18182 2.25009C2.56262 2.25009 1.25 3.55965 1.25 5.17508V13.0464C1.24997 14.8242 1.24995 16.2572 1.40183 17.3843C1.55952 18.5544 1.89687 19.5397 2.68118 20.3222C3.4655 21.1046 4.45303 21.4412 5.6259 21.5985C6.75559 21.75 8.19196 21.75 9.97398 21.75H15.978C17.3014 21.75 18.3927 21.7501 19.2563 21.6342C20.1631 21.5126 20.9639 21.2474 21.6051 20.6077C22.2463 19.968 22.512 19.1691 22.6339 18.2645C22.7501 17.4028 22.75 16.3141 22.75 14.9938V12.9063C22.75 11.586 22.7501 10.4973 22.6339 9.63562C22.512 8.73099 22.2463 7.93206 21.6051 7.29235C20.9639 6.65265 20.1631 6.38748 19.2563 6.26586C19.1214 6.24776 18.981 6.2325 18.835 6.21961ZM13.9541 4.20007C14.9259 4.20007 15.22 4.20845 15.4372 4.26652C16.1117 4.44683 16.6386 4.97244 16.8193 5.64537C16.8505 5.76142 16.8674 5.89948 16.8763 6.15156C16.5897 6.15005 16.2901 6.15005 15.9776 6.15006L4.18137 6.15006C3.64164 6.15006 3.2041 5.71354 3.2041 5.17507C3.2041 4.63659 3.64164 4.20007 4.18137 4.20007H13.9541Z',
  d6: 'M19.5 14C19.5 12.8954 18.6046 12 17.5 12C16.3954 12 15.5 12.8954 15.5 14C15.5 15.1046 16.3954 16 17.5 16C18.6046 16 19.5 15.1046 19.5 14Z',
  d7: 'M10 7.00005H18M18 7.00005H22V21H2.00005L2 3H18V7.00005Z',
  d8: 'M1.53476 2.51846C1.71708 2.34655 1.96437 2.24998 2.22222 2.24998H17.7778C18.3147 2.24998 18.75 2.66038 18.75 3.16664V6.24998H22C22.4142 6.24998 22.75 6.58576 22.75 6.99998V21C22.75 21.4142 22.4142 21.75 22 21.75H2.00004C1.58582 21.75 1.25004 21.4142 1.25004 21L1.25 6.99998L1.25001 6.99635L1.25 3.16664C1.25 2.92352 1.35243 2.69037 1.53476 2.51846ZM16.8056 4.08329V6.24998H3.19445L3.19445 4.08329H16.8056ZM17.5 11.75C18.7426 11.75 19.75 12.7574 19.75 14C19.75 15.2426 18.7426 16.25 17.5 16.25C16.2574 16.25 15.25 15.2426 15.25 14C15.25 12.7574 16.2574 11.75 17.5 11.75Z',
} as const;

export const IconWallet01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-01-stroke-rounded IconWallet01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconWallet01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-01-duotone-rounded IconWallet01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
    </TheIconWrapper>
  );
};

export const IconWallet01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-01-twotone-rounded IconWallet01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconWallet01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-01-solid-rounded IconWallet01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-01-bulk-rounded IconWallet01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-01-stroke-sharp IconWallet01StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWallet01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="wallet-01-solid-sharp IconWallet01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfWallet01: TheIconSelfPack = {
  name: 'Wallet01',
  StrokeRounded: IconWallet01StrokeRounded,
  DuotoneRounded: IconWallet01DuotoneRounded,
  TwotoneRounded: IconWallet01TwotoneRounded,
  SolidRounded: IconWallet01SolidRounded,
  BulkRounded: IconWallet01BulkRounded,
  StrokeSharp: IconWallet01StrokeSharp,
  SolidSharp: IconWallet01SolidSharp,
};