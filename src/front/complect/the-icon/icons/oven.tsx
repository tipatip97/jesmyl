import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M6 5H10',
  d2: 'M18 5.00895V5',
  d3: 'M3 8L21 8',
  d4: 'M2 22H22',
  d5: 'M3 22V5C3 2.518 3.518 2 6 2H18C20.482 2 21 2.518 21 5V22',
  d6: 'M6 17V13C6 12.0572 6 11.5858 6.29289 11.2929C6.58579 11 7.05719 11 8 11H16C16.9428 11 17.4142 11 17.7071 11.2929C18 11.5858 18 12.0572 18 13V17C18 17.9428 18 18.4142 17.7071 18.7071C17.4142 19 16.9428 19 16 19H8C7.05719 19 6.58579 19 6.29289 18.7071C6 18.4142 6 17.9428 6 17Z',
  d7: 'M3 22H21V8H3V22ZM6 13V17C6 17.9428 6 18.4142 6.29289 18.7071C6.58579 19 7.05719 19 8 19H16C16.9428 19 17.4142 19 17.7071 18.7071C18 18.4142 18 17.9428 18 17V13C18 12.0572 18 11.5858 17.7071 11.2929C17.4142 11 16.9428 11 16 11H8C7.05719 11 6.58579 11 6.29289 11.2929C6 11.5858 6 12.0572 6 13Z',
  d8: 'M4.32323 1.38719C4.80098 1.28223 5.36327 1.25 6 1.25H18C18.6367 1.25 19.199 1.28223 19.6768 1.38719C20.163 1.49401 20.6083 1.68612 20.9611 2.03892C21.3139 2.39172 21.506 2.83699 21.6128 3.32323C21.7178 3.80098 21.75 4.36327 21.75 5V6.25C21.75 6.7214 21.75 6.95711 21.6036 7.10355C21.4571 7.25 21.2214 7.25 20.75 7.25H3.25C2.7786 7.25 2.54289 7.25 2.39645 7.10355C2.25 6.95711 2.25 6.7214 2.25 6.25V5C2.25 4.36327 2.28223 3.80098 2.38719 3.32323C2.494 2.83699 2.68612 2.39172 3.03892 2.03892C3.39172 1.68612 3.83699 1.49401 4.32323 1.38719ZM5.25 4.75C5.25 4.33579 5.58579 4 6 4H10C10.4142 4 10.75 4.33579 10.75 4.75C10.75 5.16421 10.4142 5.5 10 5.5H6C5.58579 5.5 5.25 5.16421 5.25 4.75ZM19 4.75C19 4.19772 18.5523 3.75 18 3.75C17.4477 3.75 17 4.19772 17 4.75V4.75895C17 5.31123 17.4477 5.75895 18 5.75895C18.5523 5.75895 19 5.31123 19 4.75895V4.75Z',
  d9: 'M1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22Z',
  d10: 'M2.39645 8.89645C2.54289 8.75 2.7786 8.75 3.25 8.75H20.75C21.2214 8.75 21.4571 8.75 21.6036 8.89645C21.75 9.04289 21.75 9.2786 21.75 9.75V22C21.75 22.4142 21.4142 22.75 21 22.75H3C2.58579 22.75 2.25 22.4142 2.25 22V9.75C2.25 9.2786 2.25 9.04289 2.39645 8.89645ZM6 13V17C6 17.9428 6 18.4142 6.29289 18.7071C6.58579 19 7.05719 19 8 19H16C16.9428 19 17.4142 19 17.7071 18.7071C18 18.4142 18 17.9428 18 17V13C18 12.0572 18 11.5858 17.7071 11.2929C17.4142 11 16.9428 11 16 11H8C7.05719 11 6.58579 11 6.29289 11.2929C6 11.5858 6 12.0572 6 13Z',
  d11: 'M3.25 8.75C2.7786 8.75 2.54289 8.75 2.39645 8.89645C2.25 9.04289 2.25 9.2786 2.25 9.75V22C2.25 22.4142 2.58579 22.75 3 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V9.75C21.75 9.2786 21.75 9.04289 21.6036 8.89645C21.4571 8.75 21.2214 8.75 20.75 8.75H3.25Z',
  d12: 'M17 5.00895V5',
  d13: 'M4 8L20 8',
  d14: 'M20 2H4V22H20V2Z',
  d15: 'M17 11H7V19H17V11Z',
  d16: 'M4 1.25C3.58579 1.25 3.25 1.58579 3.25 2V7.25H20.75V2C20.75 1.58579 20.4142 1.25 20 1.25H4ZM10.125 4.99561H6.125V3.49561H10.125V4.99561ZM17.875 5.00455V3.49561H16.375V5.00455H17.875Z',
  d17: 'M22 22.75H2V20.75H22V22.75Z',
  d18: 'M3.25 8.75H20.75V22C20.75 22.4142 20.4142 22.75 20 22.75H4C3.58579 22.75 3.25 22.4142 3.25 22V8.75ZM7 11H17V19H7V11Z',
} as const;

export const IconOvenStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="oven-stroke-rounded IconOvenStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOvenDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="oven-duotone-rounded IconOvenDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOvenTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="oven-twotone-rounded IconOvenTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconOvenSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="oven-solid-rounded IconOvenSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOvenBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="oven-bulk-rounded IconOvenBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconOvenStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="oven-stroke-sharp IconOvenStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconOvenSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="oven-solid-sharp IconOvenSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfOven: TheIconSelfPack = {
  name: 'Oven',
  StrokeRounded: IconOvenStrokeRounded,
  DuotoneRounded: IconOvenDuotoneRounded,
  TwotoneRounded: IconOvenTwotoneRounded,
  SolidRounded: IconOvenSolidRounded,
  BulkRounded: IconOvenBulkRounded,
  StrokeSharp: IconOvenStrokeSharp,
  SolidSharp: IconOvenSolidSharp,
};