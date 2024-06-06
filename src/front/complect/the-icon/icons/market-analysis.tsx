import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 16V8C14 7.05719 14 6.58579 13.7071 6.29289C13.4142 6 12.9428 6 12 6C11.0572 6 10.5858 6 10.2929 6.29289C10 6.58579 10 7.05719 10 8V16C10 16.9428 10 17.4142 10.2929 17.7071C10.5858 18 11.0572 18 12 18C12.9428 18 13.4142 18 13.7071 17.7071C14 17.4142 14 16.9428 14 16Z',
  d2: 'M21 9V7C21 6.05719 21 5.58579 20.7071 5.29289C20.4142 5 19.9428 5 19 5C18.0572 5 17.5858 5 17.2929 5.29289C17 5.58579 17 6.05719 17 7V9C17 9.94281 17 10.4142 17.2929 10.7071C17.5858 11 18.0572 11 19 11C19.9428 11 20.4142 11 20.7071 10.7071C21 10.4142 21 9.94281 21 9Z',
  d3: 'M7 14V12C7 11.0572 7 10.5858 6.70711 10.2929C6.41421 10 5.94281 10 5 10C4.05719 10 3.58579 10 3.29289 10.2929C3 10.5858 3 11.0572 3 12V14C3 14.9428 3 15.4142 3.29289 15.7071C3.58579 16 4.05719 16 5 16C5.94281 16 6.41421 16 6.70711 15.7071C7 15.4142 7 14.9428 7 14Z',
  d4: 'M12 21L12 18',
  d5: 'M19 13L19 11',
  d6: 'M12 6L12 3',
  d7: 'M19 5L19 3',
  d8: 'M5 18L5 16',
  d9: 'M5 10L5 8',
  d10: 'M11.9553 5.25L12 5.25001L12.0448 5.25C12.4776 5.24995 12.8744 5.24991 13.1972 5.29331C13.5527 5.3411 13.9284 5.45355 14.2374 5.76257C14.5465 6.07159 14.6589 6.44732 14.7067 6.8028C14.7501 7.12561 14.7501 7.52244 14.75 7.95525V7.95526L14.75 8.00001V16L14.75 16.0448V16.0448C14.7501 16.4776 14.7501 16.8744 14.7067 17.1972C14.6589 17.5527 14.5465 17.9284 14.2374 18.2374C13.9284 18.5465 13.5527 18.6589 13.1972 18.7067C12.8744 18.7501 12.4776 18.7501 12.0448 18.75H12.0448H11.9553H11.9553C11.5224 18.7501 11.1256 18.7501 10.8028 18.7067C10.4473 18.6589 10.0716 18.5465 9.76257 18.2374C9.45355 17.9284 9.3411 17.5527 9.29331 17.1972C9.24991 16.8744 9.24995 16.4776 9.25 16.0448L9.25001 8.00001L9.25 7.95526C9.24995 7.52244 9.24991 7.12561 9.29331 6.8028C9.3411 6.44732 9.45355 6.07159 9.76257 5.76257C10.0716 5.45355 10.4473 5.3411 10.8028 5.29331C11.1256 5.24991 11.5224 5.24995 11.9553 5.25Z',
  d11: 'M18.9553 4.25L19 4.25001L19.0448 4.25C19.4776 4.24995 19.8744 4.24991 20.1972 4.29331C20.5527 4.3411 20.9284 4.45355 21.2374 4.76257C21.5465 5.07159 21.6589 5.44732 21.7067 5.8028C21.7501 6.12561 21.7501 6.52244 21.75 6.95525V6.95526L21.75 7.00001V9.00001L21.75 9.04475V9.04476C21.7501 9.47758 21.7501 9.87441 21.7067 10.1972C21.6589 10.5527 21.5465 10.9284 21.2374 11.2374C20.9284 11.5465 20.5527 11.6589 20.1972 11.7067C19.8744 11.7501 19.4776 11.7501 19.0448 11.75H19.0448L19 11.75L18.9553 11.75H18.9553C18.5224 11.7501 18.1256 11.7501 17.8028 11.7067C17.4473 11.6589 17.0716 11.5465 16.7626 11.2374C16.4535 10.9284 16.3411 10.5527 16.2933 10.1972C16.2499 9.8744 16.25 9.47757 16.25 9.04475L16.25 9.00001V7.00001L16.25 6.95526C16.25 6.52244 16.2499 6.12561 16.2933 5.8028C16.3411 5.44732 16.4535 5.07159 16.7626 4.76257C17.0716 4.45355 17.4473 4.3411 17.8028 4.29331C18.1256 4.24991 18.5224 4.24995 18.9553 4.25Z',
  d12: 'M4.95526 9.25L5.00001 9.25001L5.04476 9.25C5.47757 9.24995 5.8744 9.24991 6.19721 9.29331C6.55269 9.3411 6.92842 9.45355 7.23744 9.76257C7.54647 10.0716 7.65891 10.4473 7.70671 10.8028C7.75011 11.1256 7.75006 11.5224 7.75001 11.9553V11.9553L7.75001 12V14L7.75001 14.0448V14.0448C7.75006 14.4776 7.75011 14.8744 7.70671 15.1972C7.65891 15.5527 7.54647 15.9284 7.23744 16.2374C6.92842 16.5465 6.5527 16.6589 6.19721 16.7067C5.8744 16.7501 5.47758 16.7501 5.04476 16.75H5.04475L5.00001 16.75L4.95526 16.75H4.95525C4.52244 16.7501 4.12561 16.7501 3.8028 16.7067C3.44732 16.6589 3.07159 16.5465 2.76257 16.2374C2.45355 15.9284 2.3411 15.5527 2.29331 15.1972C2.24991 14.8744 2.24995 14.4776 2.25 14.0448L2.25001 14V12L2.25 11.9553C2.24995 11.5224 2.24991 11.1256 2.29331 10.8028C2.3411 10.4473 2.45355 10.0716 2.76257 9.76257C3.07159 9.45355 3.44732 9.3411 3.8028 9.29331C4.12561 9.24991 4.52244 9.24995 4.95526 9.25Z',
  d13: 'M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2ZM19 2C19.5523 2 20 2.44772 20 3V5C20 5.55228 19.5523 6 19 6C18.4477 6 18 5.55228 18 5V3C18 2.44772 18.4477 2 19 2ZM5 7C5.55228 7 6 7.44772 6 8V10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10V8C4 7.44772 4.44772 7 5 7ZM19 10C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14C18.4477 14 18 13.5523 18 13V11C18 10.4477 18.4477 10 19 10ZM5 15C5.55228 15 6 15.4477 6 16V18C6 18.5523 5.55228 19 5 19C4.44772 19 4 18.5523 4 18L4 16C4 15.4477 4.44772 15 5 15ZM12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17Z',
  d14: 'M11.9553 5.25H12.0448C12.4776 5.24995 12.8744 5.24991 13.1972 5.29331C13.5527 5.3411 13.9284 5.45355 14.2374 5.76257C14.5465 6.07159 14.6589 6.44732 14.7067 6.8028C14.7501 7.12561 14.7501 7.52245 14.75 7.95526V16.0448C14.7501 16.4776 14.7501 16.8744 14.7067 17.1972C14.6589 17.5527 14.5465 17.9284 14.2374 18.2374C13.9284 18.5465 13.5527 18.6589 13.1972 18.7067C12.8744 18.7501 12.4776 18.7501 12.0448 18.75H11.9553C11.5224 18.7501 11.1256 18.7501 10.8028 18.7067C10.4473 18.6589 10.0716 18.5465 9.76257 18.2374C9.45355 17.9284 9.3411 17.5527 9.29331 17.1972C9.24991 16.8744 9.24995 16.4776 9.25 16.0448V7.95526C9.24995 7.52244 9.24991 7.12561 9.29331 6.8028C9.3411 6.44732 9.45355 6.07159 9.76257 5.76257C10.0716 5.45355 10.4473 5.3411 10.8028 5.29331C11.1256 5.24991 11.5224 5.24995 11.9553 5.25Z',
  d15: 'M18.9553 4.25H19.0448C19.4776 4.24995 19.8744 4.24991 20.1972 4.29331C20.5527 4.3411 20.9284 4.45355 21.2374 4.76257C21.5465 5.07159 21.6589 5.44732 21.7067 5.8028C21.7501 6.12561 21.7501 6.52245 21.75 6.95526V9.04475C21.7501 9.47756 21.7501 9.87441 21.7067 10.1972C21.6589 10.5527 21.5465 10.9284 21.2374 11.2374C20.9284 11.5465 20.5527 11.6589 20.1972 11.7067C19.8744 11.7501 19.4776 11.7501 19.0448 11.75H18.9553C18.5224 11.7501 18.1256 11.7501 17.8028 11.7067C17.4473 11.6589 17.0716 11.5465 16.7626 11.2374C16.4535 10.9284 16.3411 10.5527 16.2933 10.1972C16.2499 9.8744 16.25 9.47757 16.25 9.04475V6.95526C16.25 6.52244 16.2499 6.12561 16.2933 5.8028C16.3411 5.44732 16.4535 5.07159 16.7626 4.76257C17.0716 4.45355 17.4473 4.3411 17.8028 4.29331C18.1256 4.24991 18.5224 4.24995 18.9553 4.25Z',
  d16: 'M4.95526 9.25H5.04476C5.47757 9.24995 5.8744 9.24991 6.19721 9.29331C6.55269 9.3411 6.92842 9.45355 7.23744 9.76257C7.54647 10.0716 7.65891 10.4473 7.70671 10.8028C7.75011 11.1256 7.75006 11.5224 7.75001 11.9553V14.0448C7.75006 14.4776 7.75011 14.8744 7.70671 15.1972C7.65891 15.5527 7.54647 15.9284 7.23744 16.2374C6.92842 16.5465 6.5527 16.6589 6.19721 16.7067C5.8744 16.7501 5.47756 16.7501 5.04475 16.75H4.95526C4.52245 16.7501 4.12561 16.7501 3.8028 16.7067C3.44732 16.6589 3.07159 16.5465 2.76257 16.2374C2.45355 15.9284 2.3411 15.5527 2.29331 15.1972C2.24991 14.8744 2.24995 14.4776 2.25 14.0448V11.9553C2.24995 11.5224 2.24991 11.1256 2.29331 10.8028C2.3411 10.4473 2.45355 10.0716 2.76257 9.76257C3.07159 9.45355 3.44732 9.3411 3.8028 9.29331C4.12561 9.24991 4.52244 9.24995 4.95526 9.25Z',
  d17: 'M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V5.27254C11.2819 5.24992 11.6069 5.24996 11.9553 5.25H12.0448C12.3931 5.24996 12.7181 5.24992 13 5.27253V3Z',
  d18: 'M11 18.7275C11.2819 18.7501 11.6069 18.7501 11.9553 18.75H12.0448C12.3931 18.7501 12.7181 18.7501 13 18.7275V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18.7275Z',
  d19: 'M20 3C20 2.44772 19.5523 2 19 2C18.4477 2 18 2.44772 18 3V4.27254C18.2819 4.24992 18.6069 4.24996 18.9553 4.25H19.0448C19.3931 4.24996 19.7181 4.24992 20 4.27253V3Z',
  d20: 'M18 11.7275C18.2819 11.7501 18.6069 11.7501 18.9552 11.75H19.0448C19.3931 11.7501 19.7181 11.7501 20 11.7275V13C20 13.5523 19.5523 14 19 14C18.4477 14 18 13.5523 18 13V11.7275Z',
  d21: 'M6 8C6 7.44772 5.55228 7 5 7C4.44772 7 4 7.44772 4 8V9.27254C4.28189 9.24992 4.60692 9.24996 4.95526 9.25H5.04476C5.39309 9.24996 5.71811 9.24992 6 9.27253V8Z',
  d22: 'M4 16.7275C4.28189 16.7501 4.60693 16.7501 4.95526 16.75H5.04475C5.39308 16.7501 5.71811 16.7501 6 16.7275V18C6 18.5523 5.55228 19 5 19C4.44772 19 4 18.5523 4 18V16.7275Z',
  d23: 'M14 6H10V18H14V6Z',
  d24: 'M21 5H17V11H21V5Z',
  d25: 'M7 10H3V16H7V10Z',
  d26: 'M9.25 5.25H14.75V18.75H9.25V5.25Z',
  d27: 'M16.25 4.25H21.75V11.75H16.25V4.25Z',
  d28: 'M2.25 9.25H7.75V16.75H2.25V9.25Z',
  d29: 'M13 17L13 22L11 22L11 17L13 17Z',
  d30: 'M20 10L20 14L18 14L18 10L20 10Z',
  d31: 'M13 2L13 7L11 7L11 2L13 2Z',
  d32: 'M20 2L20 6L18 6L18 2L20 2Z',
  d33: 'M6 15L6 19L4 19L4 15L6 15Z',
  d34: 'M6 7L6 11L4 11L4 7L6 7Z',
} as const;

export const IconMarketAnalysisStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="market-analysis-stroke-rounded IconMarketAnalysisStrokeRounded"
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMarketAnalysisDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="market-analysis-duotone-rounded IconMarketAnalysisDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMarketAnalysisTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="market-analysis-twotone-rounded IconMarketAnalysisTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMarketAnalysisSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="market-analysis-solid-rounded IconMarketAnalysisSolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconMarketAnalysisBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="market-analysis-bulk-rounded IconMarketAnalysisBulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMarketAnalysisStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="market-analysis-stroke-sharp IconMarketAnalysisStrokeSharp"
    >
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
    </TheIconWrapper>
  );
};

export const IconMarketAnalysisSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="market-analysis-solid-sharp IconMarketAnalysisSolidSharp"
    >
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMarketAnalysis: TheIconSelfPack = {
  name: 'MarketAnalysis',
  StrokeRounded: IconMarketAnalysisStrokeRounded,
  DuotoneRounded: IconMarketAnalysisDuotoneRounded,
  TwotoneRounded: IconMarketAnalysisTwotoneRounded,
  SolidRounded: IconMarketAnalysisSolidRounded,
  BulkRounded: IconMarketAnalysisBulkRounded,
  StrokeSharp: IconMarketAnalysisStrokeSharp,
  SolidSharp: IconMarketAnalysisSolidSharp,
};