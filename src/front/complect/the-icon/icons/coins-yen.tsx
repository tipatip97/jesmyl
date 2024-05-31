import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z',
  d2: 'M3.15657 11C2.42523 12.1176 2 13.4535 2 14.8888C2 18.8162 5.18378 22 9.11116 22C10.5465 22 11.8824 21.5748 13 20.8434',
  d3: 'M11.5 6.5C11.6667 7.21296 12.4 8.83333 14 9.61111M14 9.61111C15.6 8.83333 16.3333 7.21296 16.5 6.5M14 9.61111V13.5M16.0833 11.1667H11.9167',
  d4: 'M2.98515 10.205C3.25474 9.87581 3.38954 9.7112 3.52051 9.75811C3.65149 9.80502 3.6511 10.0334 3.65031 10.4902C3.6503 10.4959 3.65029 10.5017 3.65029 10.5075C3.65029 15.9432 8.05679 20.3497 13.4925 20.3497C13.4983 20.3497 13.5041 20.3497 13.5098 20.3497C13.9666 20.3489 14.195 20.3485 14.2419 20.4795C14.2888 20.6105 14.1242 20.7453 13.795 21.0149C12.4704 22.0995 10.777 22.7502 8.93147 22.7502C4.68898 22.7502 1.24976 19.311 1.24976 15.0685C1.24976 13.223 1.90054 11.5296 2.98515 10.205Z',
  d5: 'M13.9998 1.25024C9.16726 1.25024 5.24976 5.16775 5.24976 10.0002C5.24976 14.8327 9.16726 18.7502 13.9998 18.7502C18.8322 18.7502 22.7498 14.8327 22.7498 10.0002C22.7498 5.16775 18.8322 1.25024 13.9998 1.25024ZM12.2302 6.32969C12.1359 5.92635 11.7325 5.67581 11.3292 5.7701C10.9259 5.86439 10.6753 6.26779 10.7696 6.67113C10.9519 7.451 11.6735 9.09044 13.2499 10.055V10.4171H11.9166C11.5024 10.4171 11.1666 10.7529 11.1666 11.1671C11.1666 11.5813 11.5024 11.9171 11.9166 11.9171H13.2499V13.5004C13.2499 13.9146 13.5857 14.2504 13.9999 14.2504C14.4141 14.2504 14.7499 13.9146 14.7499 13.5004V11.9171H16.0833C16.4975 11.9171 16.8333 11.5813 16.8333 11.1671C16.8333 10.7529 16.4975 10.4171 16.0833 10.4171H14.7499V10.055C16.3263 9.09044 17.0479 7.451 17.2302 6.67113C17.3245 6.26779 17.074 5.86439 16.6706 5.7701C16.2673 5.67581 15.8639 5.92635 15.7696 6.32969C15.6458 6.85934 15.106 8.05913 13.9999 8.75475C12.8939 8.05913 12.354 6.85934 12.2302 6.32969Z',
  d6: 'M5.24976 10.0002C5.24976 5.16775 9.16726 1.25024 13.9998 1.25024C18.8322 1.25024 22.7498 5.16775 22.7498 10.0002C22.7498 14.8327 18.8322 18.7502 13.9998 18.7502C9.16726 18.7502 5.24976 14.8327 5.24976 10.0002Z',
  d7: 'M11.3292 5.7701C11.7325 5.67581 12.1359 5.92635 12.2302 6.32969C12.354 6.85934 12.8939 8.05913 13.9999 8.75475C15.106 8.05913 15.6458 6.85934 15.7696 6.32969C15.8639 5.92635 16.2673 5.67581 16.6706 5.7701C17.074 5.86439 17.3245 6.26779 17.2302 6.67113C17.0479 7.451 16.3263 9.09044 14.7499 10.055V10.4171H16.0833C16.4975 10.4171 16.8333 10.7529 16.8333 11.1671C16.8333 11.5813 16.4975 11.9171 16.0833 11.9171H14.7499V13.5004C14.7499 13.9146 14.4141 14.2504 13.9999 14.2504C13.5857 14.2504 13.2499 13.9146 13.2499 13.5004V11.9171H11.9166C11.5024 11.9171 11.1666 11.5813 11.1666 11.1671C11.1666 10.7529 11.5024 10.4171 11.9166 10.4171H13.2499V10.055C11.6735 9.09044 10.9519 7.451 10.7696 6.67113C10.6753 6.26779 10.9259 5.86439 11.3292 5.7701Z',
  d8: 'M11.5 6.5L14 9.61111M14 9.61111L16.5 6.5M14 9.61111V14.5M16.5 11.5H11.5',
  d9: 'M4.03233 7.60083C3.84776 8.37045 3.75 9.17383 3.75 10C3.75 15.661 8.33908 20.25 14 20.25C14.8262 20.25 15.6296 20.1523 16.3992 19.9677C14.802 21.6797 12.526 22.75 10 22.75C5.16751 22.75 1.25 18.8325 1.25 14C1.25 11.474 2.32039 9.19802 4.03233 7.60083Z',
  d10: 'M14 1.25C9.16751 1.25 5.25 5.16751 5.25 10C5.25 14.8325 9.16751 18.75 14 18.75C18.8325 18.75 22.75 14.8325 22.75 10C22.75 5.16751 18.8325 1.25 14 1.25ZM10.916 6.9698L13.2506 9.87512V10.75H11.5006V12.25H13.2506V14.5H14.7506V12.25H16.5006V10.75H14.7506V9.87512L17.0853 6.9698L15.916 6.03021L14.0006 8.41378L12.0853 6.03021L10.916 6.9698Z',
} as const;

export const IconCoinsYenStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-yen-stroke-rounded IconCoinsYenStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsYenDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-yen-duotone-rounded IconCoinsYenDuotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsYenTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-yen-twotone-rounded IconCoinsYenTwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsYenSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-yen-solid-rounded IconCoinsYenSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsYenBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-yen-bulk-rounded IconCoinsYenBulkRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsYenStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-yen-stroke-sharp IconCoinsYenStrokeSharp"
    >
      <path 
        d={d.d1} 
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCoinsYenSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="coins-yen-solid-sharp IconCoinsYenSolidSharp"
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

export const iconPackOfCoinsYen: TheIconSelfPack = {
  name: 'CoinsYen',
  StrokeRounded: IconCoinsYenStrokeRounded,
  DuotoneRounded: IconCoinsYenDuotoneRounded,
  TwotoneRounded: IconCoinsYenTwotoneRounded,
  SolidRounded: IconCoinsYenSolidRounded,
  BulkRounded: IconCoinsYenBulkRounded,
  StrokeSharp: IconCoinsYenStrokeSharp,
  SolidSharp: IconCoinsYenSolidSharp,
};