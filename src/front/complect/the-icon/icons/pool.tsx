import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M22 21H21C19.5486 21 18.278 20.1411 18 19C17.722 20.1411 16.4514 21 15 21C13.5486 21 12.278 20.1411 12 19C11.722 20.1411 10.4514 21 9 21C7.54863 21 6.27796 20.1411 6 19C5.72204 20.1411 4.45137 21 3 21H2',
  d2: 'M19 3L18.7351 3.0883C17.4151 3.52832 16.755 3.74832 16.3775 4.2721C16 4.79587 16 5.49159 16 6.88304L16 17',
  d3: 'M11 3L10.7351 3.0883C9.41505 3.52832 8.75503 3.74832 8.37752 4.2721C8 4.79587 8 5.49159 8 6.88304L8 17',
  d4: 'M8 7H16M8 11H16M8 15H16',
  d5: 'M16 17V6.88306H8V17H16Z',
  d6: 'M6 18C6.46112 18 6.86246 18.3153 6.97159 18.7633C7.11142 19.3374 7.87473 20 9 20C10.1253 20 10.8886 19.3374 11.0284 18.7633C11.1375 18.3153 11.5389 18 12 18C12.4611 18 12.8625 18.3153 12.9716 18.7633C13.1114 19.3374 13.8747 20 15 20C16.1253 20 16.8886 19.3374 17.0284 18.7633C17.1375 18.3153 17.5389 18 18 18C18.4611 18 18.8625 18.3153 18.9716 18.7633C19.1114 19.3374 19.8747 20 21 20H22C22.5523 20 23 20.4477 23 21C23 21.5523 22.5523 22 22 22H21C19.9542 22 18.9081 21.6347 18.1394 20.9861C18.0592 20.9183 17.9408 20.9183 17.8606 20.9861C17.0919 21.6347 16.0458 22 15 22C13.9542 22 12.9081 21.6347 12.1394 20.9861C12.0592 20.9183 11.9408 20.9183 11.8606 20.9861C11.0919 21.6347 10.0458 22 9 22C7.95416 22 6.90813 21.6347 6.13945 20.9861C6.0592 20.9183 5.9408 20.9183 5.86056 20.9861C5.09187 21.6347 4.04584 22 3 22H2C1.44772 22 1 21.5523 1 21C1 20.4477 1.44772 20 2 20H3C4.12527 20 4.88858 19.3374 5.02841 18.7633C5.13754 18.3153 5.53888 18 6 18Z',
  d7: 'M19.9487 2.68392C20.1233 3.20786 19.8402 3.77418 19.3162 3.94883L19.0513 4.03714C18.3694 4.26443 17.9382 4.40977 17.6247 4.55563C17.3344 4.69064 17.2411 4.78438 17.1888 4.85696C17.1365 4.92953 17.077 5.04776 17.0407 5.36577C17.0015 5.70934 17 6.16443 17 6.88319V17.0001C17 17.5524 16.5523 18.0001 16 18.0001C15.4477 18.0001 15 17.5524 15 17.0001L15 6.88319C15 6.86566 15 6.84819 15 6.83078C15 6.1799 14.9999 5.60942 15.0536 5.13891C15.1117 4.63026 15.2411 4.13874 15.5663 3.68754C15.8915 3.23633 16.3169 2.95819 16.7811 2.74225C17.2104 2.5425 17.7517 2.36213 18.3691 2.15634C18.3857 2.15084 18.4022 2.14531 18.4189 2.13977L18.6838 2.05147C19.2077 1.87682 19.774 2.15998 19.9487 2.68392Z',
  d8: 'M11.9487 2.68392C12.1233 3.20786 11.8402 3.77418 11.3162 3.94883L11.0513 4.03714C10.3694 4.26443 9.93819 4.40977 9.62465 4.55563C9.33444 4.69064 9.24107 4.78438 9.18876 4.85696C9.13645 4.92953 9.07704 5.04776 9.04074 5.36577C9.00151 5.70934 9 6.16443 9 6.88319L9 17.0001C9 17.5524 8.55229 18.0001 8 18.0001C7.44772 18.0001 7 17.5524 7 17.0001L7 6.88319C7 6.86566 7 6.84819 7 6.83078C6.99996 6.1799 6.99993 5.60942 7.05364 5.13891C7.11172 4.63026 7.24107 4.13874 7.56627 3.68754C7.89148 3.23633 8.31688 2.95819 8.78106 2.74225C9.21044 2.5425 9.75165 2.36213 10.3691 2.15634C10.3857 2.15084 10.4022 2.14531 10.4189 2.13977L10.6838 2.05147C11.2077 1.87682 11.774 2.15998 11.9487 2.68392Z',
  d9: 'M7 6.99988C7 6.44759 7.44772 5.99988 8 5.99988H16C16.5523 5.99988 17 6.44759 17 6.99988C17 7.55216 16.5523 7.99988 16 7.99988H8C7.44772 7.99988 7 7.55216 7 6.99988ZM7 10.9999C7 10.4476 7.44772 9.99988 8 9.99988H16C16.5523 9.99988 17 10.4476 17 10.9999C17 11.5522 16.5523 11.9999 16 11.9999H8C7.44772 11.9999 7 11.5522 7 10.9999ZM7 14.9999C7 14.4476 7.44772 13.9999 8 13.9999H16C16.5523 13.9999 17 14.4476 17 14.9999C17 15.5522 16.5523 15.9999 16 15.9999H8C7.44772 15.9999 7 15.5522 7 14.9999Z',
  d10: 'M19.9487 2.68392C20.1233 3.20786 19.8402 3.77418 19.3162 3.94883L19.0513 4.03714C18.3695 4.26443 17.9382 4.40977 17.6247 4.55563C17.3344 4.69064 17.2411 4.78438 17.1888 4.85696C17.1365 4.92953 17.077 5.04776 17.0407 5.36577C17.0015 5.70934 17 6.16443 17 6.88319V17.0001C17 17.5524 16.5523 18.0001 16 18.0001C15.4477 18.0001 15 17.5524 15 17.0001V15.9999L9 15.9999V17.0001C9 17.5524 8.55229 18.0001 8 18.0001C7.44772 18.0001 7 17.5524 7 17.0001V15.0027C7 15.0017 7 15.0008 7 14.9999C7 14.9989 7 14.998 7 14.9971V11.0027C7 11.0017 7 11.0008 7 10.9999C7 10.9989 7 10.998 7 10.9971L7 7.00267C7 7.00174 7 7.00081 7 6.99988C7 6.99895 7 6.99802 7 6.99709V6.88319L7 6.83078C6.99996 6.1799 6.99993 5.60942 7.05365 5.13891C7.11172 4.63026 7.24107 4.13874 7.56628 3.68754C7.89149 3.23633 8.31688 2.95819 8.78106 2.74225C9.21044 2.5425 9.75166 2.36213 10.3691 2.15634L10.4189 2.13977L10.6838 2.05147C11.2077 1.87682 11.774 2.15998 11.9487 2.68392C12.1233 3.20786 11.8402 3.77418 11.3162 3.94883L11.0513 4.03714C10.3695 4.26443 9.93819 4.40977 9.62466 4.55563C9.33444 4.69064 9.24107 4.78438 9.18876 4.85696C9.13645 4.92953 9.07705 5.04776 9.04074 5.36577C9.0207 5.54128 9.01051 5.74589 9.00533 5.99988L15.0049 5.99988C15.0109 5.68498 15.0242 5.39692 15.0536 5.13891C15.1117 4.63026 15.2411 4.13874 15.5663 3.68754C15.8915 3.23633 16.3169 2.95819 16.7811 2.74225C17.2104 2.5425 17.7517 2.36213 18.3691 2.15634L18.4189 2.13977L18.6838 2.05147C19.2077 1.87682 19.774 2.15998 19.9487 2.68392ZM15 7.99988V9.99988L9 9.99988L9 7.99988L15 7.99988ZM9 11.9999L15 11.9999L15 13.9999L9 13.9999V11.9999Z',
  d11: 'M18 3L16 5L16 17',
  d12: 'M10 3L8 5L8 17',
  d13: 'M3 20C4.12527 20 4.88858 19.3373 5.02841 18.7633H6.97159C7.11142 19.3373 7.87473 20 9 20C10.1253 20 10.8886 19.3373 11.0284 18.7633H12.9716C13.1114 19.3373 13.8747 20 15 20C16.1253 20 16.8886 19.3373 17.0284 18.7633H18.9716C19.1114 19.3373 19.8747 20 21 20H22V22H21C19.8894 22 18.7787 21.5881 18 20.8624C17.2213 21.5881 16.1106 22 15 22C13.8894 22 12.7787 21.5881 12 20.8624C11.2213 21.5881 10.1106 22 9 22C7.88944 22 6.77868 21.5881 6 20.8624C5.22133 21.5881 4.11056 22 3 22H2L2 20H3Z',
  d14: 'M15.2929 3.99988L17.2929 1.99988L18.7071 3.41409L17 5.1212V17H15V4.70698C15 4.44177 15.1054 4.18741 15.2929 3.99988Z',
  d15: 'M7.29289 3.99988L9.29289 1.99988L10.7071 3.41409L9 5.1212V17H7V4.70698C7 4.44177 7.10536 4.18741 7.29289 3.99988Z',
  d16: 'M16 8H8V6H16V8ZM16 12H8V10H16V12ZM16 16H8V14H16V16Z',
} as const;

export const IconPoolStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-stroke-rounded IconPoolStrokeRounded"
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-duotone-rounded IconPoolDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-twotone-rounded IconPoolTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-solid-rounded IconPoolSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
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

export const IconPoolBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-bulk-rounded IconPoolBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-stroke-sharp IconPoolStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPoolSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="pool-solid-sharp IconPoolSolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPool: TheIconSelfPack = {
  name: 'Pool',
  StrokeRounded: IconPoolStrokeRounded,
  DuotoneRounded: IconPoolDuotoneRounded,
  TwotoneRounded: IconPoolTwotoneRounded,
  SolidRounded: IconPoolSolidRounded,
  BulkRounded: IconPoolBulkRounded,
  StrokeSharp: IconPoolStrokeSharp,
  SolidSharp: IconPoolSolidSharp,
};