import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28248 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088Z',
  d2: 'M2.5 9L21.5 9',
  d3: 'M16 21.5L16 2.5',
  d4: 'M8 21.4998L8 2.49976',
  d5: 'M3.88734 20.1124C5.27858 21.5037 7.51775 21.5037 11.9961 21.5037C16.4744 21.5037 18.7136 21.5037 20.1049 20.1124C21.4961 18.7212 21.4961 16.482 21.4961 12.0037L21.4961 9.00366L2.51884 9.00366C2.49609 9.87458 2.49609 10.867 2.49609 12.0037C2.49609 16.482 2.49609 18.7212 3.88734 20.1124Z',
  d6: 'M6.65471 1.68257C6.83878 1.65782 7 1.80292 7 1.98864L7 6.99975C7 7.47115 7 7.70685 6.85355 7.8533C6.70711 7.99974 6.47141 7.99974 6 7.99974H2.61881C2.11596 7.99974 1.86454 7.99974 1.71547 7.83306C1.5664 7.66638 1.59326 7.4263 1.64699 6.94616C1.65807 6.84707 1.67 6.74984 1.68282 6.65446C1.87164 5.25008 2.27175 4.09627 3.18414 3.18388C4.09653 2.27149 5.25033 1.87138 6.65471 1.68257ZM2.49623 9.99974C2.02855 9.99974 1.79471 9.99974 1.64832 10.1458C1.50193 10.292 1.50148 10.5247 1.50058 10.9903C1.49999 11.2925 1.5 11.6041 1.5 11.9253V12.0742C1.49998 14.2502 1.49996 15.9849 1.68282 17.345C1.87164 18.7494 2.27175 19.9032 3.18414 20.8156C4.09653 21.728 5.25033 22.1281 6.65471 22.3169C6.83878 22.3417 7 22.1966 7 22.0108L7 10.9997C7 10.5283 7 10.2926 6.85355 10.1462C6.70711 9.99974 6.47141 9.99974 6 9.99974H2.49623ZM17 22.0108C17 22.1966 17.1612 22.3417 17.3453 22.3169C18.7497 22.1281 19.9035 21.728 20.8159 20.8156C21.7283 19.9032 22.1284 18.7494 22.3172 17.345C22.5 15.9849 22.5 14.2502 22.5 12.0742V11.9253C22.5 11.6041 22.5 11.2925 22.4994 10.9903C22.4985 10.5247 22.4981 10.292 22.3517 10.1458C22.2053 9.99974 21.9715 9.99974 21.5038 9.99974H18C17.5286 9.99974 17.2929 9.99974 17.1464 10.1462C17 10.2926 17 10.5283 17 10.9997L17 22.0108ZM21.3812 7.99974C21.884 7.99974 22.1355 7.99974 22.2845 7.83306C22.4336 7.66637 22.4067 7.4263 22.353 6.94616C22.3419 6.84707 22.33 6.74984 22.3172 6.65445C22.1284 5.25008 21.7283 4.09627 20.8159 3.18388C19.9035 2.27149 18.7497 1.87138 17.3453 1.68257C17.1612 1.65782 17 1.80292 17 1.98864V6.99974C17 7.47115 17 7.70685 17.1464 7.8533C17.2929 7.99974 17.5286 7.99974 18 7.99974H21.3812Z',
  d7: 'M9.97436 1.50605C9.51775 1.51052 9.28944 1.51276 9.14472 1.6589C9 1.80505 9 2.03574 9 2.49713L9 7.00012C9 7.47153 9 7.70723 9.14645 7.85368C9.29289 8.00012 9.5286 8.00012 10 8.00012H14C14.4714 8.00012 14.7071 8.00012 14.8536 7.85368C15 7.70723 15 7.47153 15 7.00012V2.49713C15 2.03574 15 1.80505 14.8553 1.6589C14.7106 1.51276 14.4823 1.51052 14.0256 1.50605C13.4188 1.50011 12.7691 1.50012 12.0744 1.50012H11.9256C11.2309 1.50012 10.5812 1.50011 9.97436 1.50605ZM9 21.5031C9 21.9645 9 22.1952 9.14472 22.3413C9.28944 22.4875 9.51775 22.4897 9.97436 22.4942C10.5812 22.5001 11.2309 22.5001 11.9256 22.5001H12.0745C12.7691 22.5001 13.4188 22.5001 14.0256 22.4942C14.4823 22.4897 14.7106 22.4875 14.8553 22.3413C15 22.1952 15 21.9645 15 21.5031L15 11.0001C15 10.5287 15 10.293 14.8536 10.1466C14.7071 10.0001 14.4714 10.0001 14 10.0001H10C9.5286 10.0001 9.29289 10.0001 9.14645 10.1466C9 10.293 9 10.5287 9 11.0001L9 21.5031Z',
  d8: 'M3 21H21V3H3V21Z',
  d9: 'M3 9L21 9',
  d10: 'M15 21L15 3',
  d11: 'M9 21L9 3',
  d12: 'M10 21.75L10 10H14L14 21.75H10Z',
  d13: 'M8 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V10L8 10L8 21.75Z',
  d14: 'M2.25 8L8 8L8 2.25H3C2.58579 2.25 2.25 2.58579 2.25 3V8Z',
  d15: 'M10 2.25L10 8H14V2.25H10Z',
  d16: 'M16 2.25V8L21.75 8V3C21.75 2.58579 21.4142 2.25 21 2.25H16Z',
  d17: 'M21.75 10L16 10L16 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V10Z',
} as const;

export const IconLayoutTable01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-01-stroke-rounded IconLayoutTable01StrokeRounded"
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

export const IconLayoutTable01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-01-duotone-rounded IconLayoutTable01DuotoneRounded"
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

export const IconLayoutTable01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-01-twotone-rounded IconLayoutTable01TwotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayoutTable01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-01-solid-rounded IconLayoutTable01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconLayoutTable01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-01-bulk-rounded IconLayoutTable01BulkRounded"
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayoutTable01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-01-stroke-sharp IconLayoutTable01StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayoutTable01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-table-01-solid-sharp IconLayoutTable01SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLayoutTable01: TheIconSelfPack = {
  name: 'LayoutTable01',
  StrokeRounded: IconLayoutTable01StrokeRounded,
  DuotoneRounded: IconLayoutTable01DuotoneRounded,
  TwotoneRounded: IconLayoutTable01TwotoneRounded,
  SolidRounded: IconLayoutTable01SolidRounded,
  BulkRounded: IconLayoutTable01BulkRounded,
  StrokeSharp: IconLayoutTable01StrokeSharp,
  SolidSharp: IconLayoutTable01SolidSharp,
};