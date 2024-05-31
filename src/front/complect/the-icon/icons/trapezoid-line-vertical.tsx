import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 5C14.6653 5 15.998 5 16.9449 5.62726C17.0483 5.69576 17.1471 5.76916 17.2409 5.84711C18.1001 6.56098 18.2886 7.69057 18.6655 9.94975L19.0328 12.1515C19.5645 15.338 19.8303 16.9312 18.7825 17.9656C17.7348 19 15.8551 19 12.0957 19H11.9043C8.14492 19 6.26523 19 5.21745 17.9656C4.16967 16.9312 4.4355 15.338 4.96716 12.1515L5.33451 9.94974C5.71144 7.69057 5.89991 6.56098 6.75905 5.84711C6.85287 5.76915 6.95171 5.69576 7.05511 5.62726C8.00198 5 9.33465 5 12 5Z',
  d2: 'M12 22L12 2',
  d3: 'M13 19.748L13 4.25C13.8606 4.2541 14.5831 4.26993 15.1914 4.33072C16.0335 4.41485 16.7412 4.59131 17.3591 5.0006C17.4847 5.08379 17.6053 5.17331 17.7203 5.26885C18.2983 5.74916 18.6227 6.35694 18.8508 7.09658C19.0673 7.79891 19.2156 8.68772 19.3968 9.77406L19.7838 12.094C20.0402 13.6299 20.2479 14.8749 20.25 15.8626C20.2522 16.901 20.0292 17.7874 19.3095 18.4979C18.6108 19.1876 17.6803 19.4769 16.5459 19.6139C15.6087 19.727 14.4382 19.7451 13 19.748Z',
  d4: 'M11 19.748C9.56182 19.7452 8.39125 19.727 7.45411 19.6139C6.31975 19.4769 5.38917 19.1876 4.69054 18.4979C3.97082 17.7874 3.74784 16.901 3.75002 15.8626C3.75209 14.8749 3.95984 13.6299 4.21615 12.094L4.60321 9.77406C4.78444 8.68772 4.93272 7.79891 5.14924 7.09658C5.37726 6.35694 5.70169 5.74916 6.27973 5.26885C6.39471 5.17331 6.51532 5.08379 6.64091 5.0006C7.25875 4.59131 7.96652 4.41485 8.80856 4.33072C9.4169 4.26993 10.1394 4.2541 11 4.25L11 19.748Z',
  d5: 'M12 1C12.5523 1 13 1.44772 13 2L13 4.25144L11 4.25144L11 2C11 1.44772 11.4477 1 12 1Z',
  d6: 'M13 19.7495L13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22L11 19.7495L13 19.7495Z',
  d7: 'M13 4.25C13.8606 4.2541 14.5831 4.26993 15.1914 4.33072C16.0335 4.41485 16.7412 4.59131 17.3591 5.0006C17.4847 5.08379 17.6053 5.17331 17.7203 5.26885C18.2983 5.74916 18.6227 6.35694 18.8508 7.09658C19.0673 7.79891 19.2156 8.68772 19.3968 9.77406L19.7838 12.094C20.0402 13.6299 20.2479 14.8749 20.25 15.8626C20.2522 16.901 20.0292 17.7874 19.3095 18.4979C18.6108 19.1876 17.6803 19.4769 16.5459 19.6139C15.6087 19.727 14.4382 19.7451 13 19.748L11 19.748C9.56182 19.7452 8.39125 19.727 7.45411 19.6139C6.31975 19.4769 5.38917 19.1876 4.69054 18.4979C3.97082 17.7874 3.74784 16.901 3.75002 15.8626C3.75209 14.8749 3.95984 13.6299 4.21615 12.094L4.60321 9.77406C4.78444 8.68772 4.93272 7.79891 5.14924 7.09658C5.37726 6.35694 5.70169 5.74916 6.27973 5.26885C6.39471 5.17331 6.51532 5.08379 6.64091 5.0006C7.25875 4.59131 7.96652 4.41485 8.80856 4.33072C9.4169 4.26993 10.1394 4.2541 11 4.25L13 4.25Z',
  d8: 'M12 1C12.5523 1 13 1.44772 13 2L13 22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22L11 2C11 1.44772 11.4477 1 12 1Z',
  d9: 'M19.5 18.5005L17.5 5.50153L6.5 5.49951L4.5 18.5005L19.5 18.5005Z',
  d10: 'M20.0692 18.9893C19.9267 19.1554 19.7188 19.2509 19.5 19.2509H13L13 4.75119L17.5001 4.75202C17.8703 4.75208 18.185 5.02215 18.2413 5.38796L20.2413 18.3869C20.2746 18.6032 20.2117 18.8232 20.0692 18.9893Z',
  d11: 'M11 4.75082L11 19.2509H4.5C4.28118 19.2509 4.07327 19.1554 3.93078 18.9893C3.7883 18.8232 3.72545 18.6032 3.75873 18.3869L5.75873 5.38597C5.81502 5.02004 6.12991 4.74993 6.50014 4.75L11 4.75082Z',
  d12: 'M11 4.75082L10.9999 2L12.9999 2L13 4.75119L11 4.75082Z',
  d13: 'M11 19.2509H13L12.9999 22H10.9999L11 19.2509Z',
} as const;

export const IconTrapezoidLineVerticalStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-vertical-stroke-rounded IconTrapezoidLineVerticalStrokeRounded"
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
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrapezoidLineVerticalDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-vertical-duotone-rounded IconTrapezoidLineVerticalDuotoneRounded"
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
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrapezoidLineVerticalTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-vertical-twotone-rounded IconTrapezoidLineVerticalTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrapezoidLineVerticalSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-vertical-solid-rounded IconTrapezoidLineVerticalSolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrapezoidLineVerticalBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-vertical-bulk-rounded IconTrapezoidLineVerticalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTrapezoidLineVerticalStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-vertical-stroke-sharp IconTrapezoidLineVerticalStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTrapezoidLineVerticalSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-vertical-solid-sharp IconTrapezoidLineVerticalSolidSharp"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTrapezoidLineVertical: TheIconSelfPack = {
  name: 'TrapezoidLineVertical',
  StrokeRounded: IconTrapezoidLineVerticalStrokeRounded,
  DuotoneRounded: IconTrapezoidLineVerticalDuotoneRounded,
  TwotoneRounded: IconTrapezoidLineVerticalTwotoneRounded,
  SolidRounded: IconTrapezoidLineVerticalSolidRounded,
  BulkRounded: IconTrapezoidLineVerticalBulkRounded,
  StrokeSharp: IconTrapezoidLineVerticalStrokeSharp,
  SolidSharp: IconTrapezoidLineVerticalSolidSharp,
};