import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 10L5 19',
  d2: 'M5.80844 9.28111C5.43534 9.76037 5.2488 10 5 10C4.7512 10 4.56466 9.76037 4.19156 9.28112L3.44578 8.32312C2.37255 6.94451 1.83594 6.25521 2.04429 5.68812C2.06552 5.63034 2.0916 5.57458 2.12224 5.52145C2.423 5 3.282 5 5 5C6.718 5 7.577 5 7.87776 5.52145C7.9084 5.57458 7.93448 5.63034 7.95571 5.68812C8.16406 6.25521 7.62745 6.94451 6.55422 8.32312L5.80844 9.28111Z',
  d3: 'M18.4297 9L12.4297 15M18.4297 15L12.4297 9',
  d4: 'M12 19L13 19',
  d5: 'M8 19L9 19',
  d6: 'M16 19L17 19',
  d7: 'M20 19L21 19',
  d8: 'M5.00052 4.25001L4.94322 4.25C4.13319 4.24996 3.44572 4.24993 2.92652 4.32238C2.40289 4.39545 1.8045 4.57213 1.47308 5.14674C1.42098 5.23707 1.37676 5.33168 1.34083 5.42948C1.11533 6.04322 1.34856 6.61855 1.61704 7.07905C1.88484 7.53838 2.31284 8.08813 2.82035 8.73999L2.85449 8.78384L3.60027 9.74184L3.62551 9.77426C3.74905 9.93306 3.87528 10.0953 4 10.2332L4 19C4 19.5523 4.44772 20 5 20C5.55229 20 6 19.5523 6 19L6 10.2343C6.12506 10.0962 6.25166 9.9335 6.37554 9.77426L6.40077 9.74184L7.1807 8.73999C7.68819 8.08815 8.11622 7.53837 8.38401 7.07905C8.65249 6.61855 8.88572 6.04322 8.66022 5.42948C8.62429 5.33168 8.58006 5.23707 8.52796 5.14674C8.19655 4.57213 7.59815 4.39545 7.07452 4.32238C6.55532 4.24993 5.86791 4.24996 5.05789 4.25L5.00052 4.25001Z',
  d9: 'M11.7226 8.29289C12.1131 7.90237 12.7463 7.90237 13.1368 8.29289L15.4297 10.5858L17.7226 8.29289C18.1131 7.90237 18.7463 7.90237 19.1368 8.29289C19.5273 8.68342 19.5273 9.31658 19.1368 9.70711L16.8439 12L19.1368 14.2929C19.5273 14.6834 19.5273 15.3166 19.1368 15.7071C18.7463 16.0976 18.1131 16.0976 17.7226 15.7071L15.4297 13.4142L13.1368 15.7071C12.7463 16.0976 12.1131 16.0976 11.7226 15.7071C11.3321 15.3166 11.3321 14.6834 11.7226 14.2929L14.0155 12L11.7226 9.70711C11.3321 9.31658 11.3321 8.68342 11.7226 8.29289Z',
  d10: 'M11 19C11 18.4477 11.4477 18 12 18L13 18C13.5523 18 14 18.4477 14 19C14 19.5523 13.5523 20 13 20L12 20C11.4477 20 11 19.5523 11 19Z',
  d11: 'M7 19C7 18.4477 7.44772 18 8 18L9 18C9.55228 18 10 18.4477 10 19C10 19.5523 9.55228 20 9 20L8 20C7.44772 20 7 19.5523 7 19Z',
  d12: 'M15 19C15 18.4477 15.4477 18 16 18L17 18C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20L16 20C15.4477 20 15 19.5523 15 19Z',
  d13: 'M19 19C19 18.4477 19.4477 18 20 18L21 18C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20L20 20C19.4477 20 19 19.5523 19 19Z',
  d14: 'M5 10L5 19M5 10L8 5H2L5 10Z',
  d15: 'M21.75 18.25L19.25 18.25M17.75 18.25L15.25 18.25M13.75 18.25L11.25 18.25M9.75 18.25L7.25 18.25',
  d16: 'M17.345 11.7501L19.6378 14.043L18.2236 15.4572L15.9307 13.1643L13.6378 15.4572L12.2236 14.043L14.5165 11.7501L12.2236 9.45718L13.6378 8.04297L15.9307 10.3359L18.2236 8.04297L19.6378 9.45718L17.345 11.7501Z',
  d17: 'M8.00098 17L10.501 17V19L8.00098 19V17ZM12.001 17L14.501 17V19L12.001 19V17ZM16.001 17L18.501 17V19L16.001 19V17ZM20.001 17L22.501 17V19L20.001 19V17Z',
  d18: 'M6.49902 9.5L9.49902 5H1.49902L4.49902 9.5L4.49902 19H6.49902L6.49902 9.5Z',
} as const;

export const IconSignalNo01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-no-01-stroke-rounded IconSignalNo01StrokeRounded"
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalNo01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-no-01-duotone-rounded IconSignalNo01DuotoneRounded"
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
        fill="var(--icon-fill)" 
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalNo01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-no-01-twotone-rounded IconSignalNo01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalNo01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-no-01-solid-rounded IconSignalNo01SolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
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

export const IconSignalNo01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-no-01-bulk-rounded IconSignalNo01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalNo01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-no-01-stroke-sharp IconSignalNo01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSignalNo01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="signal-no-01-solid-sharp IconSignalNo01SolidSharp"
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
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSignalNo01: TheIconSelfPack = {
  name: 'SignalNo01',
  StrokeRounded: IconSignalNo01StrokeRounded,
  DuotoneRounded: IconSignalNo01DuotoneRounded,
  TwotoneRounded: IconSignalNo01TwotoneRounded,
  SolidRounded: IconSignalNo01SolidRounded,
  BulkRounded: IconSignalNo01BulkRounded,
  StrokeSharp: IconSignalNo01StrokeSharp,
  SolidSharp: IconSignalNo01SolidSharp,
};