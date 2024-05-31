import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5Z',
  d2: 'M17.5 14H6.5C4.567 14 3 15.567 3 17.5C3 19.433 4.567 21 6.5 21H17.5C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14Z',
  d3: 'M3 6.5C3 8.433 4.567 10 6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5Z',
  d4: 'M6.5 3H17.5C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H6.5C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3Z',
  d5: 'M17.5 3H6.5C8.433 3 10 4.567 10 6.5C10 8.433 8.433 10 6.5 10H17.5C19.433 10 21 8.433 21 6.5C21 4.567 19.433 3 17.5 3Z',
  d6: 'M6.5 14H17.5C15.567 14 14 15.567 14 17.5C14 19.433 15.567 21 17.5 21H6.5C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14Z',
  d7: 'M6.5 2.25C4.15279 2.25 2.25 4.15279 2.25 6.5C2.25 8.84721 4.15279 10.75 6.5 10.75L17.5 10.75C19.8472 10.75 21.75 8.84721 21.75 6.5C21.75 4.15279 19.8472 2.25 17.5 2.25L6.5 2.25ZM6.5 9C7.88071 9 9 7.88071 9 6.5C9 5.11929 7.88071 4 6.5 4C5.11929 4 4 5.11929 4 6.5C4 7.88071 5.11929 9 6.5 9Z',
  d8: 'M6.5 13.25C4.15279 13.25 2.25 15.1528 2.25 17.5C2.25 19.8472 4.15279 21.75 6.5 21.75L17.5 21.75C19.8472 21.75 21.75 19.8472 21.75 17.5C21.75 15.1528 19.8472 13.25 17.5 13.25L6.5 13.25ZM17.5 20C18.8807 20 20 18.8807 20 17.5C20 16.1193 18.8807 15 17.5 15C16.1193 15 15 16.1193 15 17.5C15 18.8807 16.1193 20 17.5 20Z',
  d9: 'M21 14H3V21H21V14Z',
  d10: 'M21 14H14V21H21V14Z',
  d11: 'M3 3H21V10H3V3Z',
  d12: 'M3 3H10V10H3V3Z',
  d13: 'M13 13.25H3C2.58579 13.25 2.25 13.5858 2.25 14V21C2.25 21.4142 2.58579 21.75 3 21.75H13V13.25Z',
  d14: 'M15 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V14C21.75 13.5858 21.4142 13.25 21 13.25H15V21.75Z',
  d15: 'M9 2.25H3C2.58579 2.25 2.25 2.58579 2.25 3V10C2.25 10.4142 2.58579 10.75 3 10.75H9V2.25Z',
  d16: 'M11 10.75H21C21.4142 10.75 21.75 10.4142 21.75 10V3C21.75 2.58579 21.4142 2.25 21 2.25H11V10.75Z',
} as const;

export const IconCustomizeStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customize-stroke-rounded IconCustomizeStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCustomizeDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customize-duotone-rounded IconCustomizeDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomizeTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customize-twotone-rounded IconCustomizeTwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCustomizeSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customize-solid-rounded IconCustomizeSolidRounded"
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

export const IconCustomizeBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customize-bulk-rounded IconCustomizeBulkRounded"
    >
      <rect 
        opacity="var(--icon-opacity)" 
        x="2.25" 
        y="2.25" 
        width="19.5" 
        height="8.5" 
        rx="4.25" 
        fill="var(--icon-fill)"></rect>
      <circle 
        cx="6.5" 
        cy="6.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
      <rect 
        opacity="var(--icon-opacity)" 
        x="2.25" 
        y="13.25" 
        width="19.5" 
        height="8.5" 
        rx="4.25" 
        fill="var(--icon-fill)"></rect>
      <circle 
        cx="17.5" 
        cy="17.5" 
        r="2.5" 
        fill="var(--icon-fill)"></circle>
    </TheIconWrapper>
  );
};

export const IconCustomizeStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customize-stroke-sharp IconCustomizeStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
    </TheIconWrapper>
  );
};

export const IconCustomizeSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="customize-solid-sharp IconCustomizeSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCustomize: TheIconSelfPack = {
  name: 'Customize',
  StrokeRounded: IconCustomizeStrokeRounded,
  DuotoneRounded: IconCustomizeDuotoneRounded,
  TwotoneRounded: IconCustomizeTwotoneRounded,
  SolidRounded: IconCustomizeSolidRounded,
  BulkRounded: IconCustomizeBulkRounded,
  StrokeSharp: IconCustomizeStrokeSharp,
  SolidSharp: IconCustomizeSolidSharp,
};