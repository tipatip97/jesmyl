import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z',
  d2: 'M4 20C2.89543 20 2 19.1046 2 18C2 16.8954 2.89543 16 4 16C5.10457 16 6 17.3333 6 18C6 18.6667 5.10457 20 4 20Z',
  d3: 'M8 20C6.89543 20 6 18.5 6 18C6 17.5 6.89543 16 8 16C9.10457 16 10 16.8954 10 18C10 19.1046 9.10457 20 8 20Z',
  d4: 'M13 20H16C18.8284 20 20.2426 20 21.1213 19.1213C22 18.2426 22 16.8284 22 14V13C22 10.1716 22 8.75736 21.1213 7.87868C20.48 7.23738 19.5534 7.06413 18 7.01732M10 7H16C16.7641 7 17.425 7 18 7.01732M18 7.01732C18 6.06917 18 5.5951 17.8425 5.22208C17.6399 4.7421 17.2579 4.36014 16.7779 4.15749C16.4049 4 15.9308 4 14.9827 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 7.22876 2 11V13',
  d5: 'M22 13V14C22 16.8284 22 18.2426 21.1213 19.1213C20.2426 20 18.8284 20 16 20H8C9.10457 20 10 19.1046 10 18C10 16.8954 9.10457 16 8 16C6.89543 16 6 17.5 6 18C6 17.3333 5.10457 16 4 16C3.1305 16 2.3906 16.5549 2.11505 17.3298C2 16.5078 2 15.4362 2 14V11C2 7.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14.9827C15.9308 4 16.4049 4 16.7779 4.15749C17.2579 4.36014 17.6399 4.7421 17.8425 5.22208C18 5.5951 18 6.06917 18 7.01732C19.5534 7.06413 20.48 7.23738 21.1213 7.87868C22 8.75736 22 10.1716 22 13ZM17.5 15.5C16.6716 15.5 16 14.8284 16 14C16 13.1716 16.6716 12.5 17.5 12.5C18.3284 12.5 19 13.1716 19 14C19 14.8284 18.3284 15.5 17.5 15.5Z',
  d6: 'M6 18C6 18.5 6.89543 20 8 20C6.51797 20 5.42421 20 4.59232 19.8736C5.40771 19.5254 6 18.5422 6 18Z',
  d7: 'M6 18C6 18.6667 5.10457 20 4 20C2.89543 20 2 19.1046 2 18C2 16.8954 2.89543 16 4 16C5.10457 16 6 17.3333 6 18ZM6 18C6 18.5 6.89543 20 8 20C9.10457 20 10 19.1046 10 18C10 16.8954 9.10457 16 8 16C6.89543 16 6 17.5 6 18Z',
  d8: 'M4 15.25C2.48122 15.25 1.25 16.4812 1.25 18C1.25 19.5188 2.48122 20.75 4 20.75C4.88747 20.75 5.57879 20.1652 5.9921 19.6656C5.99474 19.6624 5.99737 19.6592 6 19.656C6.00263 19.6592 6.00526 19.6624 6.0079 19.6656C6.42121 20.1652 7.11253 20.75 8 20.75C9.51878 20.75 10.75 19.5188 10.75 18C10.75 16.4812 9.51878 15.25 8 15.25C7.11253 15.25 6.42121 15.8348 6.0079 16.3344C6.00526 16.3376 6.00263 16.3408 6 16.344C5.99737 16.3408 5.99474 16.3376 5.9921 16.3344C5.57879 15.8348 4.88747 15.25 4 15.25ZM2.75 18C2.75 17.3096 3.30964 16.75 4 16.75C4.2171 16.75 4.52578 16.9152 4.83633 17.2906C4.97847 17.4624 5.09187 17.6452 5.16663 17.801C5.21744 17.9069 5.23734 17.9727 5.2451 18C5.23734 18.0273 5.21744 18.0931 5.16663 18.199C5.09187 18.3548 4.97847 18.5376 4.83633 18.7094C4.52578 19.0848 4.2171 19.25 4 19.25C3.30964 19.25 2.75 18.6904 2.75 18ZM9.25 18C9.25 17.3096 8.69036 16.75 8 16.75C7.7829 16.75 7.47422 16.9152 7.16367 17.2906C7.02153 17.4624 6.90812 17.6452 6.83337 17.801C6.78256 17.9069 6.76266 17.9727 6.7549 18C6.76266 18.0273 6.78256 18.0931 6.83337 18.199C6.90812 18.3548 7.02153 18.5376 7.16367 18.7094C7.47422 19.0848 7.7829 19.25 8 19.25C8.69036 19.25 9.25 18.6904 9.25 18Z',
  d9: 'M18.835 6.81247C18.8239 6.4427 18.7931 6.12942 18.7077 5.8442C18.3462 4.63639 17.2926 3.69298 15.9436 3.36934C15.4435 3.24938 14.8663 3.24966 14.089 3.25004L4.18182 3.25008C2.56262 3.25008 1.25 4.42533 1.25 5.87507V12.9391V12.9391V12.9391C1.24999 13.5943 1.24998 14.1974 1.26049 14.7506C2.00027 14.1263 2.95619 13.75 4 13.75C4.79669 13.75 5.46666 14.0127 6 14.3525C6.53334 14.0127 7.20331 13.75 8 13.75C10.3472 13.75 12.25 15.6528 12.25 18C12.25 19.0487 11.8701 20.0088 11.2405 20.75H15.978H15.9781C17.3014 20.75 18.3927 20.7501 19.2563 20.6461C20.1631 20.5369 20.9639 20.299 21.6051 19.7249C22.2463 19.1508 22.512 18.4338 22.6339 17.6219C22.7501 16.8487 22.75 15.8716 22.75 14.6868V12.8133C22.75 11.6284 22.7501 10.6514 22.6339 9.87812C22.512 9.06627 22.2463 8.34928 21.6051 7.77519C20.9639 7.2011 20.1631 6.96312 19.2563 6.85397C19.1214 6.83774 18.981 6.82404 18.835 6.81247ZM13.9541 5.00007C14.9259 5.00007 15.22 5.00758 15.4372 5.0597C16.1117 5.22151 16.6386 5.69322 16.8193 6.29713C16.8505 6.40127 16.8674 6.52517 16.8763 6.7514C16.5897 6.75004 16.2901 6.75005 15.9776 6.75006L4.18138 6.75006C3.64164 6.75006 3.2041 6.35831 3.2041 5.87506C3.2041 5.39181 3.64164 5.00007 4.18138 5.00007H13.9541ZM19.75 13.75C19.75 12.7835 18.9665 12 18 12C17.0335 12 16.25 12.7835 16.25 13.75C16.25 14.7165 17.0335 15.5 18 15.5C18.9665 15.5 19.75 14.7165 19.75 13.75Z',
  d10: 'M18.7077 5.8442C18.7931 6.12942 18.8239 6.4427 18.835 6.81247C18.981 6.82404 19.1214 6.83774 19.2563 6.85397C20.1631 6.96312 20.9639 7.2011 21.6051 7.77519C22.2463 8.34928 22.512 9.06627 22.6339 9.87812C22.7501 10.6514 22.75 11.6284 22.75 12.8133V14.6868C22.75 15.8716 22.7501 16.8487 22.6339 17.6219C22.512 18.4338 22.2463 19.1508 21.6051 19.7249C20.9639 20.299 20.1631 20.5369 19.2563 20.6461C18.3927 20.7501 17.3014 20.75 15.9781 20.75H11.2405C11.8701 20.0088 12.25 19.0487 12.25 18C12.25 15.6528 10.3472 13.75 8 13.75C7.20331 13.75 6.53334 14.0127 6 14.3525C5.46666 14.0127 4.7967 13.75 4 13.75C2.95619 13.75 2.00027 14.1263 1.26049 14.7506C1.24998 14.1974 1.24999 13.5943 1.25 12.9391V5.87507C1.25 4.42533 2.56262 3.25008 4.18182 3.25008L14.089 3.25004C14.8663 3.24966 15.4435 3.24938 15.9436 3.36934C17.2926 3.69298 18.3462 4.63639 18.7077 5.8442ZM15.4372 5.0597C15.22 5.00758 14.9259 5.00007 13.9541 5.00007H4.18138C3.64164 5.00007 3.2041 5.39181 3.2041 5.87506C3.2041 6.35831 3.64164 6.75006 4.18138 6.75006L15.9776 6.75006C16.2901 6.75005 16.5897 6.75004 16.8763 6.7514C16.8674 6.52517 16.8505 6.40127 16.8193 6.29713C16.6386 5.69322 16.1117 5.22151 15.4372 5.0597Z',
  d11: 'M19.75 13.75C19.75 12.7835 18.9665 12 18 12C17.0335 12 16.25 12.7835 16.25 13.75C16.25 14.7165 17.0335 15.5 18 15.5C18.9665 15.5 19.75 14.7165 19.75 13.75Z',
  d12: 'M10 7.00005H18M18 7.00005H22V20H12M18 7.00005V4H2L2.00002 14',
  d13: 'M2.22222 3.25C1.96437 3.25 1.71708 3.33667 1.53476 3.49095C1.35243 3.64522 1.25 3.85447 1.25 4.07264L1.25001 7.50957L1.25 7.51282L1.25002 14.7595C1.99124 14.1299 2.95126 13.75 4 13.75C4.79669 13.75 5.46666 14.0127 6 14.3525C6.53334 14.0127 7.20331 13.75 8 13.75C10.3472 13.75 12.25 15.6528 12.25 18C12.25 19.0488 11.8701 20.0088 11.2405 20.75H22C22.4142 20.75 22.75 20.4487 22.75 20.0769V7.51282C22.75 7.14109 22.4142 6.83974 22 6.83974H18.75V4.07264C18.75 3.61831 18.3147 3.25 17.7778 3.25H2.22222ZM16.8056 6.83974V4.89529H3.19445L3.19445 6.83974H16.8056ZM18.5 15.5C17.6716 15.5 17 14.8284 17 14C17 13.1716 17.6716 12.5 18.5 12.5C19.3284 12.5 20 13.1716 20 14C20 14.8284 19.3284 15.5 18.5 15.5Z',
} as const;

export const IconPurseStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-stroke-rounded IconPurseStrokeRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPurseDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-duotone-rounded IconPurseDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      />
    </TheIconWrapper>
  );
};

export const IconPurseTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-twotone-rounded IconPurseTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPurseSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-solid-rounded IconPurseSolidRounded"
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

export const IconPurseBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-bulk-rounded IconPurseBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPurseStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-stroke-sharp IconPurseStrokeSharp"
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
        d={d.d3} 
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

export const IconPurseSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="purse-solid-sharp IconPurseSolidSharp"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPurse: TheIconSelfPack = {
  name: 'Purse',
  StrokeRounded: IconPurseStrokeRounded,
  DuotoneRounded: IconPurseDuotoneRounded,
  TwotoneRounded: IconPurseTwotoneRounded,
  SolidRounded: IconPurseSolidRounded,
  BulkRounded: IconPurseBulkRounded,
  StrokeSharp: IconPurseStrokeSharp,
  SolidSharp: IconPurseSolidSharp,
};