import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M5 12C5 9.33466 5 8.00198 5.62726 7.05511C5.69576 6.95171 5.76916 6.85287 5.84711 6.75905C6.56098 5.89991 7.69057 5.71144 9.94975 5.33451L12.1515 4.96715C15.338 4.4355 16.9312 4.16967 17.9656 5.21745C19 6.26523 19 8.14492 19 11.9043V12.0957C19 15.8551 19 17.7348 17.9656 18.7826C16.9312 19.8303 15.338 19.5645 12.1515 19.0328L9.94974 18.6655C7.69057 18.2886 6.56098 18.1001 5.84711 17.2409C5.76916 17.1471 5.69576 17.0483 5.62726 16.9449C5 15.998 5 14.6653 5 12Z',
  d2: 'M22 12L2 12',
  d3: 'M19.748 11L4.25 11C4.2541 10.1394 4.26993 9.4169 4.33072 8.80856C4.41485 7.96653 4.59131 7.25875 5.0006 6.64091C5.08379 6.51533 5.17331 6.39472 5.26885 6.27974C5.74916 5.70169 6.35694 5.37726 7.09658 5.14924C7.79891 4.93272 8.68771 4.78445 9.77405 4.60322L12.094 4.21615C13.6299 3.95984 14.8749 3.75209 15.8626 3.75002C16.901 3.74784 17.7874 3.97082 18.4979 4.69054C19.1876 5.38918 19.4769 6.31975 19.6139 7.45412C19.727 8.39125 19.7451 9.56182 19.748 11Z',
  d4: 'M19.748 13C19.7452 14.4382 19.727 15.6087 19.6139 16.5459C19.4769 17.6803 19.1876 18.6108 18.4979 19.3095C17.7874 20.0292 16.901 20.2522 15.8626 20.25C14.8749 20.2479 13.6299 20.0402 12.094 19.7839L9.77406 19.3968C8.68772 19.2156 7.79891 19.0673 7.09658 18.8508C6.35694 18.6227 5.74916 18.2983 5.26885 17.7203C5.17331 17.6053 5.08379 17.4847 5.0006 17.3591C4.59131 16.7413 4.41485 16.0335 4.33071 15.1914C4.26993 14.5831 4.2541 13.8606 4.25 13L19.748 13Z',
  d5: 'M1 12C1 11.4477 1.44772 11 2 11L4.25144 11L4.25144 13L2 13C1.44772 13 1 12.5523 1 12Z',
  d6: 'M19.7495 11L22 11C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13L19.7495 13L19.7495 11Z',
  d7: 'M4.25 11C4.2541 10.1394 4.26993 9.4169 4.33072 8.80856C4.41485 7.96653 4.59131 7.25875 5.0006 6.64091C5.08379 6.51533 5.17331 6.39472 5.26885 6.27974C5.74916 5.70169 6.35694 5.37726 7.09658 5.14924C7.79891 4.93272 8.68771 4.78445 9.77405 4.60322L12.094 4.21615C13.6299 3.95984 14.8749 3.75209 15.8626 3.75002C16.901 3.74784 17.7874 3.97082 18.4979 4.69054C19.1876 5.38918 19.4769 6.31975 19.6139 7.45412C19.727 8.39125 19.7451 9.56182 19.748 11L19.748 13C19.7452 14.4382 19.727 15.6087 19.6139 16.5459C19.4769 17.6803 19.1876 18.6108 18.4979 19.3095C17.7874 20.0292 16.901 20.2522 15.8626 20.25C14.8749 20.2479 13.6299 20.0402 12.094 19.7839L9.77406 19.3968C8.68772 19.2156 7.79891 19.0673 7.09658 18.8508C6.35694 18.6227 5.74916 18.2983 5.26885 17.7203C5.17331 17.6053 5.08379 17.4847 5.0006 17.3591C4.59131 16.7413 4.41485 16.0335 4.33071 15.1914C4.26993 14.5831 4.2541 13.8606 4.25 13L4.25 11Z',
  d8: 'M1 12C1 11.4477 1.44772 11 2 11L22 11C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13L2 13C1.44772 13 1 12.5523 1 12Z',
  d9: 'M18.5009 4.5L5.50202 6.5L5.5 17.5L18.5009 19.5V4.5Z',
  d10: 'M18.9893 3.93078C19.1554 4.07326 19.2509 4.28118 19.2509 4.50001V11.0001L4.75119 11.0001L4.75202 6.49987C4.75208 6.12975 5.02215 5.81501 5.38796 5.75873L18.3869 3.75873C18.6032 3.72545 18.8232 3.78829 18.9893 3.93078Z',
  d11: 'M4.75082 13.0001L19.2509 13.0001V19.5C19.2509 19.7188 19.1554 19.9267 18.9893 20.0692C18.8232 20.2117 18.6032 20.2746 18.3869 20.2413L5.38597 18.2413C5.02004 18.185 4.74993 17.8701 4.75 17.4999L4.75082 13.0001Z',
  d12: 'M4.75082 13.0001L2 13.0001V11.0001L4.75119 11.0001L4.75082 13.0001Z',
  d13: 'M19.2509 13.0001V11.0001L22 11.0001V13.0001L19.2509 13.0001Z',
};

export const IconTrapezoidLineHorizontalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-horizontal-stroke-rounded IconTrapezoidLineHorizontalStrokeRounded"
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

export const IconTrapezoidLineHorizontalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-horizontal-duotone-rounded IconTrapezoidLineHorizontalDuotoneRounded"
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

export const IconTrapezoidLineHorizontalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-horizontal-twotone-rounded IconTrapezoidLineHorizontalTwotoneRounded"
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

export const IconTrapezoidLineHorizontalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-horizontal-solid-rounded IconTrapezoidLineHorizontalSolidRounded"
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

export const IconTrapezoidLineHorizontalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-horizontal-bulk-rounded IconTrapezoidLineHorizontalBulkRounded"
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

export const IconTrapezoidLineHorizontalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-horizontal-stroke-sharp IconTrapezoidLineHorizontalStrokeSharp"
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

export const IconTrapezoidLineHorizontalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="trapezoid-line-horizontal-solid-sharp IconTrapezoidLineHorizontalSolidSharp"
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

export const iconPackOfTrapezoidLineHorizontal: TheIconSelfPack = {
  name: 'TrapezoidLineHorizontal',
  StrokeRounded: IconTrapezoidLineHorizontalStrokeRounded,
  DuotoneRounded: IconTrapezoidLineHorizontalDuotoneRounded,
  TwotoneRounded: IconTrapezoidLineHorizontalTwotoneRounded,
  SolidRounded: IconTrapezoidLineHorizontalSolidRounded,
  BulkRounded: IconTrapezoidLineHorizontalBulkRounded,
  StrokeSharp: IconTrapezoidLineHorizontalStrokeSharp,
  SolidSharp: IconTrapezoidLineHorizontalSolidSharp,
};