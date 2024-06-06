import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 12.5C18 12.5 13.5811 18.5 12 18.5C10.4188 18.5 6 12.5 6 12.5',
  d2: 'M18 5.50005C18 5.50005 13.5811 11.5 12 11.5C10.4188 11.5 6 5.5 6 5.5',
  d3: 'M6.80501 11.907C6.83656 11.9493 6.93015 12.0749 6.99073 12.1551C7.11194 12.3156 7.2875 12.5457 7.50331 12.8223C7.93574 13.3764 8.52596 14.1119 9.16197 14.8444C9.80229 15.5819 10.4694 16.2936 11.0574 16.8131C11.3525 17.0739 11.6042 17.2651 11.8043 17.3858C11.8996 17.4433 11.9636 17.4726 11.9998 17.4873C12.036 17.4726 12.0999 17.4433 12.1953 17.3858C12.3954 17.2651 12.6471 17.0739 12.9422 16.8131C13.5301 16.2936 14.1973 15.5819 14.8376 14.8444C15.4737 14.1119 16.0639 13.3764 16.4963 12.8223C16.7121 12.5458 17.0734 12.0675 17.1946 11.907C17.5222 11.4623 18.1482 11.3673 18.5929 11.6949C19.0375 12.0224 19.1321 12.6489 18.8046 13.0936L18.8023 13.0967C18.6733 13.2674 18.2948 13.7686 18.073 14.0528C17.6275 14.6236 17.0142 15.3882 16.3478 16.1556C15.6858 16.9181 14.9518 17.7064 14.2665 18.3119C13.925 18.6136 13.572 18.8911 13.2278 19.0986C12.9111 19.2895 12.4759 19.5 11.9998 19.5C11.5236 19.5 11.0884 19.2895 10.7717 19.0986C10.4275 18.8911 10.0746 18.6136 9.73309 18.3119C9.04781 17.7064 8.31379 16.9181 7.65176 16.1556C6.98542 15.3881 6.37211 14.6236 5.9266 14.0527C5.70344 13.7668 5.52142 13.5282 5.3948 13.3605C5.33202 13.2774 5.23074 13.1415 5.19591 13.0948L5.19501 13.0935C4.8675 12.6489 4.9621 12.0223 5.4068 11.6948C5.8515 11.3673 6.47749 11.4623 6.80501 11.907Z',
  d4: 'M5.10738 5.04889C5.27754 4.71225 5.62265 4.5 5.99985 4.5L17.9999 4.50005C18.3771 4.50005 18.7222 4.7123 18.8923 5.04895C19.0625 5.38559 19.0287 5.78934 18.805 6.09306L18.8031 6.09561C18.7674 6.14356 18.667 6.27823 18.6048 6.36057C18.4782 6.52821 18.2962 6.76681 18.073 7.05277C17.6275 7.62364 17.0142 8.38817 16.3478 9.15563C15.6858 9.91813 14.9518 10.7064 14.2665 11.3119C13.925 11.6136 13.572 11.8911 13.2279 12.0986C12.9111 12.2895 12.4759 12.5 11.9998 12.5C11.5237 12.5 11.0885 12.2895 10.7718 12.0986C10.4276 11.8911 10.0746 11.6136 9.73314 11.3119C9.04786 10.7064 8.31383 9.91811 7.65181 9.15561C6.98546 8.38814 6.37215 7.6236 5.92665 7.05273C5.70348 6.76676 5.52146 6.52816 5.39484 6.36051C5.33206 6.27739 5.23078 6.14149 5.19595 6.09476L5.19505 6.09355C4.97137 5.78983 4.93722 5.38553 5.10738 5.04889Z',
  d5: 'M17.999 12.5L11.9991 18.5L5.99902 12.5',
  d6: 'M17.999 5.49951L11.9991 11.4995L5.99902 5.49956',
  d7: 'M19 12.8446L17.5858 11.5L12 16.8108L6.4142 11.5L5 12.8446L12.0001 19.5L19 12.8446Z',
  d8: 'M19 5.84461L17.5858 4.50001L12 9.8108L6.4142 4.5L5 5.84461L12.0001 12.5L19 5.84461Z',
} as const;

export const IconArrowDownDoubleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-double-stroke-rounded IconArrowDownDoubleStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconArrowDownDoubleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-double-duotone-rounded IconArrowDownDoubleDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDownDoubleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-double-twotone-rounded IconArrowDownDoubleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDownDoubleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-double-solid-rounded IconArrowDownDoubleSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDownDoubleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-double-bulk-rounded IconArrowDownDoubleBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDownDoubleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-double-stroke-sharp IconArrowDownDoubleStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArrowDownDoubleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-down-double-solid-sharp IconArrowDownDoubleSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfArrowDownDouble: TheIconSelfPack = {
  name: 'ArrowDownDouble',
  StrokeRounded: IconArrowDownDoubleStrokeRounded,
  DuotoneRounded: IconArrowDownDoubleDuotoneRounded,
  TwotoneRounded: IconArrowDownDoubleTwotoneRounded,
  SolidRounded: IconArrowDownDoubleSolidRounded,
  BulkRounded: IconArrowDownDoubleBulkRounded,
  StrokeSharp: IconArrowDownDoubleStrokeSharp,
  SolidSharp: IconArrowDownDoubleSolidSharp,
};