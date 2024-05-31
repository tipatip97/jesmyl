import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16.8516 5.67914C16.1736 4.85343 15.8345 4.44058 15.3711 4.22029C14.9076 4 14.378 4 13.3189 4H8C7.05719 4 6.58579 4 6.29289 4.29289C6 4.58579 6 5.05719 6 6V9C6 9.94281 6 10.4142 6.29289 10.7071C6.58579 11 7.05719 11 8 11H13.3189C14.378 11 14.9076 11 15.3711 10.7797C15.8345 10.5594 16.1736 10.1466 16.8516 9.32086L17.1202 8.99376C17.7067 8.27951 18 7.92239 18 7.5C18 7.07761 17.7067 6.72048 17.1202 6.00624L16.8516 5.67914Z',
  d2: 'M10 11L10 21',
  d3: 'M10 3L10 4',
  d4: 'M6 21H14',
  d5: 'M10 3V4',
  d6: 'M10 21V11M6 21H14',
  d7: 'M13.7151 3.25008C14.6304 3.24929 15.3236 3.24868 15.943 3.54308C16.5609 3.83677 17.0023 4.37523 17.5877 5.08933C17.8587 5.41926 18.4919 6.19045 18.6635 6.46124C18.8519 6.75837 19 7.09388 19 7.50017C19 7.90645 18.8519 8.24196 18.6635 8.53909C18.4919 8.80988 17.8587 9.58107 17.5877 9.911C17.0023 10.6251 16.5609 11.1636 15.943 11.4573C15.3236 11.7516 14.6304 11.751 13.7151 11.7502L7.70526 11.7502H7.70525C7.27244 11.7502 6.87561 11.7503 6.5528 11.7069C6.19732 11.6591 5.82159 11.5466 5.51257 11.2376C5.20355 10.9286 5.0911 10.5529 5.04331 10.1974C4.99991 9.87456 4.99995 9.47773 5 9.04491V5.95542C4.99995 5.5226 4.99991 5.12577 5.04331 4.80296C5.0911 4.44748 5.20355 4.07175 5.51257 3.76273C5.82159 3.45371 6.19732 3.34126 6.5528 3.29346C6.87561 3.25006 7.27244 3.25011 7.70526 3.25016L13.7151 3.25008Z',
  d8: 'M10 2C10.5523 2 11 2.44772 11 3V4C11 4.55228 10.5523 5 10 5C9.44772 5 9 4.55228 9 4V3C9 2.44772 9.44772 2 10 2ZM10 10C10.5523 10 11 10.4477 11 11L11 20H14C14.5523 20 15 20.4477 15 21C15 21.5523 14.5523 22 14 22H6C5.44772 22 5 21.5523 5 21C5 20.4477 5.44772 20 6 20H9L9 11C9 10.4477 9.44771 10 10 10Z',
  d9: 'M11 3C11 2.44772 10.5523 2 10 2C9.44772 2 9 2.44772 9 3V3.25014L11 3.25012V3ZM9 11.7502L11 11.7502L11 20H14C14.5523 20 15 20.4477 15 21C15 21.5523 14.5523 22 14 22H6C5.44772 22 5 21.5523 5 21C5 20.4477 5.44772 20 6 20H9L9 11.7502Z',
  d10: 'M10 12V21',
  d11: 'M10 3V5',
  d12: 'M14.98 11.9906L6.01258 12C6.00706 12 6.00258 11.9955 6.00258 11.99V4.99208C6.00258 4.98656 6.00706 4.98208 6.01258 4.98208L14.9668 4.97246L17.998 8.49657L14.98 11.9906Z',
  d13: 'M11 3.75H15.3571L19 8L15.3571 12.25H11L11 19.5H14V21.5H6V19.5H9L9 12.25H5.75C5.33579 12.25 5 11.9142 5 11.5V4.5C5 4.08579 5.33579 3.75 5.75 3.75H9V2.5H11V3.75Z',
} as const;

export const IconDirectionRight02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-right-02-stroke-rounded IconDirectionRight02StrokeRounded"
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

export const IconDirectionRight02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-right-02-duotone-rounded IconDirectionRight02DuotoneRounded"
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

export const IconDirectionRight02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-right-02-twotone-rounded IconDirectionRight02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDirectionRight02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-right-02-solid-rounded IconDirectionRight02SolidRounded"
    >
      <path 
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

export const IconDirectionRight02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-right-02-bulk-rounded IconDirectionRight02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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

export const IconDirectionRight02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-right-02-stroke-sharp IconDirectionRight02StrokeSharp"
    >
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDirectionRight02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="direction-right-02-solid-sharp IconDirectionRight02SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDirectionRight02: TheIconSelfPack = {
  name: 'DirectionRight02',
  StrokeRounded: IconDirectionRight02StrokeRounded,
  DuotoneRounded: IconDirectionRight02DuotoneRounded,
  TwotoneRounded: IconDirectionRight02TwotoneRounded,
  SolidRounded: IconDirectionRight02SolidRounded,
  BulkRounded: IconDirectionRight02BulkRounded,
  StrokeSharp: IconDirectionRight02StrokeSharp,
  SolidSharp: IconDirectionRight02SolidSharp,
};