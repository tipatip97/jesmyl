import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M4.125 9.5L4.125 3.5M6 3.5V2M6 11V9.5M4.125 6.5H7.875M7.875 6.5C8.49632 6.5 9 7.00368 9 7.625V8.375C9 8.99632 8.49632 9.5 7.875 9.5H3M7.875 6.5C8.49632 6.5 9 5.99632 9 5.375V4.625C9 4.00368 8.49632 3.5 7.875 3.5H3',
  d2: 'M15 17.5L18 13L21 17.5M15 17.5L18 22L21 17.5M15 17.5L18 18.625L21 17.5',
  d3: 'M12 5C14.8284 5 17.2426 5 18.1213 5.7988C19 6.5976 19 7.4287 19 10L17 9',
  d4: 'M12 19C9.17157 19 6.75736 19 5.87868 18.2012C5 17.4024 5 16.5713 5 14L7 15',
  d5: 'M4.125 3.5V9.5H7.875C8.49632 9.5 9 8.99632 9 8.375V7.625C9 7.00368 8.49632 6.5 7.875 6.5C8.49632 6.5 9 5.99632 9 5.375V4.625C9 4.00368 8.49632 3.5 7.875 3.5H4.125Z',
  d6: 'M18 13L15 17.5L18 22L21 17.5L18 13Z',
  d7: 'M6 1.25C6.41421 1.25 6.75 1.58579 6.75 2V2.75H7.875C8.91053 2.75 9.75 3.58947 9.75 4.625V5.375C9.75 5.7971 9.61052 6.18663 9.37514 6.5C9.61052 6.81337 9.75 7.2029 9.75 7.625V8.375C9.75 9.41053 8.91053 10.25 7.875 10.25H6.75V11C6.75 11.4142 6.41421 11.75 6 11.75C5.58579 11.75 5.25 11.4142 5.25 11V10.25H3C2.58579 10.25 2.25 9.91421 2.25 9.5C2.25 9.08579 2.58579 8.75 3 8.75H3.375V6.50015C3.375 6.5001 3.375 6.5002 3.375 6.50015L3.375 4.25H3C2.58579 4.25 2.25 3.91421 2.25 3.5C2.25 3.08579 2.58579 2.75 3 2.75H5.25V2C5.25 1.58579 5.58579 1.25 6 1.25ZM4.875 4.25V5.75H7.875C8.08211 5.75 8.25 5.58211 8.25 5.375V4.625C8.25 4.41789 8.08211 4.25 7.875 4.25H4.875ZM7.875 7.25H4.875L4.875 8.75H7.875C8.08211 8.75 8.25 8.58211 8.25 8.375V7.625C8.25 7.41789 8.08211 7.25 7.875 7.25Z',
  d8: 'M18.6783 12.584C18.5271 12.3753 18.2726 12.25 18.0001 12.25C17.7275 12.25 17.473 12.3753 17.3218 12.584L14.3911 16.6287L18.0003 17.8278L21.6091 16.6288L18.6783 12.584Z',
  d9: 'M21.75 18.1768L18.2772 19.3306C18.0982 19.3901 17.9024 19.3901 17.7234 19.3306L14.25 18.1766L17.3218 22.416C17.473 22.6247 17.7275 22.75 18.0001 22.75C18.2726 22.75 18.5271 22.6247 18.6783 22.416L21.75 18.1768Z',
  d10: 'M15.7219 5.84659C14.6974 5.75071 13.4259 5.75 12 5.75C11.5858 5.75 11.25 5.41421 11.25 5C11.25 4.58579 11.5858 4.25 12 4.25L12.0282 4.25C13.4206 4.25 14.7598 4.24999 15.8617 4.35311C16.4185 4.40522 16.9415 4.48576 17.3975 4.61572C17.8467 4.74376 18.286 4.93495 18.6258 5.24384C19.1966 5.76276 19.4925 6.32392 19.629 7.10571C19.7501 7.79938 19.7501 8.70511 19.75 9.91847C19.75 9.9455 19.75 9.97267 19.75 10C19.75 10.2599 19.6154 10.5013 19.3943 10.638C19.1732 10.7746 18.8971 10.7871 18.6646 10.6708L16.6646 9.67082C16.2941 9.48558 16.1439 9.03507 16.3292 8.66459C16.5144 8.29411 16.9649 8.14394 17.3354 8.32918L18.2448 8.78389C18.2361 8.16132 18.213 7.71672 18.1513 7.36372C18.0682 6.88743 17.9247 6.63364 17.6168 6.35375C17.5173 6.26325 17.3253 6.15489 16.9863 6.05827C16.6541 5.96357 16.2321 5.89433 15.7219 5.84659Z',
  d11: 'M4.60571 13.362C4.82682 13.2254 5.10292 13.2129 5.33542 13.3292L7.33542 14.3292C7.7059 14.5144 7.85607 14.9649 7.67083 15.3354C7.48558 15.7059 7.03508 15.8561 6.66459 15.6708L5.75518 15.2161C5.76386 15.8387 5.78702 16.2833 5.84866 16.6363C5.93183 17.1126 6.07532 17.3664 6.38319 17.6462C6.48275 17.7368 6.67469 17.8451 7.01368 17.9417C7.3459 18.0364 7.7679 18.1057 8.27807 18.1534C9.30262 18.2493 10.5741 18.25 12 18.25C12.4142 18.25 12.75 18.5858 12.75 19C12.75 19.4142 12.4142 19.75 12 19.75H11.9718C10.5794 19.75 9.24021 19.75 8.13831 19.6469C7.58154 19.5948 7.05846 19.5142 6.6025 19.3843C6.1533 19.2562 5.71396 19.065 5.37418 18.7562C4.80337 18.2372 4.50752 17.6761 4.37102 16.8943C4.2499 16.2006 4.24994 15.2949 4.25 14.0815C4.25 14.0545 4.25001 14.0273 4.25001 14C4.25001 13.7401 4.38459 13.4987 4.60571 13.362Z',
  d12: 'M12 5.00005L19 5V10.0001H18.5L16.5 8.5',
  d13: 'M12 19L5 19.0001L5 14L5.5 14L7.5 15.5001',
  d14: 'M6.75 1.25V2.75H7.875C8.91053 2.75 9.75 3.58947 9.75 4.625V5.375C9.75 5.7971 9.61052 6.18663 9.37514 6.5C9.61052 6.81337 9.75 7.2029 9.75 7.625V8.375C9.75 9.41053 8.91053 10.25 7.875 10.25H6.75V11.75H5.25V10.25H2.25V8.75H3.375L3.375 4.25H2.25V2.75H5.25V1.25H6.75ZM4.875 4.25V5.75H7.875C8.08211 5.75 8.25 5.58211 8.25 5.375V4.625C8.25 4.41789 8.08211 4.25 7.875 4.25H4.875ZM7.875 7.25H4.875L4.875 8.75H7.875C8.08211 8.75 8.25 8.58211 8.25 8.375V7.625C8.25 7.41789 8.08211 7.25 7.875 7.25Z',
  d15: 'M19.75 4.25V10.7501H18.25L16.05 9.1L16.95 7.90001L18.25 8.87504V5.75001L12 5.75006L12 4.25006L19.75 4.25Z',
  d16: 'M4.25 13.25L5.75001 13.25L7.95001 14.9001L7.04999 16.1L5.75 15.125L5.75 18.25L12 18.25L12 19.75L4.25 19.7501L4.25 13.25Z',
} as const;

export const IconExchange02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-02-stroke-rounded IconExchange02StrokeRounded"
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

export const IconExchange02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-02-duotone-rounded IconExchange02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconExchange02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-02-twotone-rounded IconExchange02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconExchange02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-02-solid-rounded IconExchange02SolidRounded"
    >
      <path 
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
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

export const IconExchange02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-02-bulk-rounded IconExchange02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconExchange02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-02-stroke-sharp IconExchange02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconExchange02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="exchange-02-solid-sharp IconExchange02SolidSharp"
    >
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfExchange02: TheIconSelfPack = {
  name: 'Exchange02',
  StrokeRounded: IconExchange02StrokeRounded,
  DuotoneRounded: IconExchange02DuotoneRounded,
  TwotoneRounded: IconExchange02TwotoneRounded,
  SolidRounded: IconExchange02SolidRounded,
  BulkRounded: IconExchange02BulkRounded,
  StrokeSharp: IconExchange02StrokeSharp,
  SolidSharp: IconExchange02SolidSharp,
};