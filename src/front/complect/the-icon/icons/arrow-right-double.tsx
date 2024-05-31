import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 18C12.5 18 18.5 13.5811 18.5 12C18.5 10.4188 12.5 6 12.5 6',
  d2: 'M5.50005 18C5.50005 18 11.5 13.5811 11.5 12C11.5 10.4188 5.5 6 5.5 6',
  d3: 'M11.907 6.80501C11.9493 6.83656 12.0749 6.93015 12.1551 6.99073C12.3156 7.11194 12.5457 7.2875 12.8223 7.50331C13.3764 7.93574 14.1119 8.52596 14.8444 9.16197C15.5819 9.80229 16.2936 10.4694 16.8131 11.0574C17.0739 11.3525 17.2651 11.6042 17.3858 11.8043C17.4433 11.8996 17.4726 11.9636 17.4873 11.9998C17.4726 12.036 17.4433 12.0999 17.3858 12.1953C17.2651 12.3954 17.0739 12.6471 16.8131 12.9422C16.2936 13.5301 15.5819 14.1973 14.8444 14.8376C14.1119 15.4737 13.3764 16.0639 12.8223 16.4963C12.5458 16.7121 12.0675 17.0734 11.907 17.1946C11.4623 17.5222 11.3673 18.1482 11.6949 18.5929C12.0224 19.0375 12.6489 19.1321 13.0936 18.8046L13.0967 18.8023C13.2674 18.6733 13.7686 18.2948 14.0528 18.073C14.6236 17.6275 15.3882 17.0142 16.1556 16.3478C16.9181 15.6858 17.7064 14.9518 18.3119 14.2665C18.6136 13.925 18.8911 13.572 19.0986 13.2278C19.2895 12.9111 19.5 12.4759 19.5 11.9998C19.5 11.5236 19.2895 11.0884 19.0986 10.7717C18.8911 10.4275 18.6136 10.0746 18.3119 9.73309C17.7064 9.04781 16.9181 8.31379 16.1556 7.65176C15.3881 6.98542 14.6236 6.37211 14.0527 5.9266C13.7668 5.70344 13.5282 5.52142 13.3605 5.3948C13.2774 5.33202 13.1415 5.23074 13.0948 5.19591L13.0935 5.19501C12.6489 4.8675 12.0223 4.9621 11.6948 5.4068C11.3673 5.8515 11.4623 6.47749 11.907 6.80501Z',
  d4: 'M5.04889 5.10738C4.71225 5.27754 4.5 5.62265 4.5 5.99985L4.50005 17.9999C4.50005 18.3771 4.7123 18.7222 5.04895 18.8923C5.38559 19.0625 5.78934 19.0287 6.09307 18.805L6.09561 18.8031C6.14356 18.7674 6.27823 18.667 6.36057 18.6048C6.52821 18.4782 6.76681 18.2962 7.05277 18.073C7.62364 17.6275 8.38817 17.0142 9.15563 16.3478C9.91813 15.6858 10.7064 14.9518 11.3119 14.2665C11.6136 13.925 11.8911 13.572 12.0986 13.2279C12.2895 12.9111 12.5 12.4759 12.5 11.9998C12.5 11.5237 12.2895 11.0885 12.0986 10.7718C11.8911 10.4276 11.6136 10.0746 11.3119 9.73314C10.7064 9.04786 9.91811 8.31383 9.15561 7.65181C8.38814 6.98546 7.6236 6.37215 7.05273 5.92665C6.76676 5.70348 6.52816 5.52147 6.36051 5.39484C6.27739 5.33206 6.14149 5.23078 6.09476 5.19595L6.09355 5.19505C5.78983 4.97137 5.38553 4.93722 5.04889 5.10738Z',
  d5: 'M12.5 6L18.5 12L12.5 18',
  d6: 'M5.5 6L11.5 12L5.50005 18',
  d7: 'M12.8446 5L11.5 6.41422L16.8108 12L11.5 17.5858L12.8446 19L19.5 11.9999L12.8446 5Z',
  d8: 'M5.84461 5L4.50001 6.41422L9.8108 12L4.5 17.5858L5.84461 19L12.5 11.9999L5.84461 5Z',
} as const;

export const IconArrowRightDoubleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-double-stroke-rounded IconArrowRightDoubleStrokeRounded"
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

export const IconArrowRightDoubleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-double-duotone-rounded IconArrowRightDoubleDuotoneRounded"
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

export const IconArrowRightDoubleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-double-twotone-rounded IconArrowRightDoubleTwotoneRounded"
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

export const IconArrowRightDoubleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-double-solid-rounded IconArrowRightDoubleSolidRounded"
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

export const IconArrowRightDoubleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-double-bulk-rounded IconArrowRightDoubleBulkRounded"
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

export const IconArrowRightDoubleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-double-stroke-sharp IconArrowRightDoubleStrokeSharp"
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

export const IconArrowRightDoubleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="arrow-right-double-solid-sharp IconArrowRightDoubleSolidSharp"
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

export const iconPackOfArrowRightDouble: TheIconSelfPack = {
  name: 'ArrowRightDouble',
  StrokeRounded: IconArrowRightDoubleStrokeRounded,
  DuotoneRounded: IconArrowRightDoubleDuotoneRounded,
  TwotoneRounded: IconArrowRightDoubleTwotoneRounded,
  SolidRounded: IconArrowRightDoubleSolidRounded,
  BulkRounded: IconArrowRightDoubleBulkRounded,
  StrokeSharp: IconArrowRightDoubleStrokeSharp,
  SolidSharp: IconArrowRightDoubleSolidSharp,
};