import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 13.5C2 9.74142 2 7.86213 3.0528 6.60746C3.22119 6.40678 3.40678 6.22119 3.60746 6.0528C4.86213 5 6.74142 5 10.5 5H13.5C17.2586 5 19.1379 5 20.3925 6.0528C20.5932 6.22119 20.7788 6.40678 20.9472 6.60746C22 7.86213 22 9.74142 22 13.5C22 17.2586 22 19.1379 20.9472 20.3925C20.7788 20.5932 20.5932 20.7788 20.3925 20.9472C19.1379 22 17.2586 22 13.5 22H10.5C6.74142 22 4.86213 22 3.60746 20.9472C3.40678 20.7788 3.22119 20.5932 3.0528 20.3925C2 19.1379 2 17.2586 2 13.5Z',
  d2: 'M10 5L14 2',
  d3: 'M6 12H7M6 15H7',
  d4: 'M3.0528 6.60746C2 7.86213 2 9.74142 2 13.5C2 17.2586 2 19.1379 3.0528 20.3925C3.22119 20.5932 3.40678 20.7788 3.60746 20.9472C4.86213 22 6.74142 22 10.5 22H13.5C17.2586 22 19.1379 22 20.3925 20.9472C20.5932 20.7788 20.7788 20.5932 20.9472 20.3925C22 19.1379 22 17.2586 22 13.5C22 9.74142 22 7.86213 20.9472 6.60746C20.7788 6.40678 20.5932 6.22119 20.3925 6.0528C19.1379 5 17.2586 5 13.5 5H10.5C6.74142 5 4.86213 5 3.60746 6.0528C3.40678 6.22119 3.22119 6.40678 3.0528 6.60746ZM14.5 17C16.433 17 18 15.433 18 13.5C18 11.567 16.433 10 14.5 10C12.567 10 11 11.567 11 13.5C11 15.433 12.567 17 14.5 17Z',
  d5: 'M14.8001 1.52506C15.1314 1.96689 15.0419 2.59369 14.6001 2.92506L10.6001 5.92506C10.1582 6.25643 9.53143 6.16689 9.20006 5.72506C8.86869 5.28323 8.95823 4.65643 9.40006 4.32506L13.4001 1.32506C13.8419 0.993688 14.4687 1.08323 14.8001 1.52506Z',
  d6: 'M17.9746 4.51194C16.8334 4.37498 15.3869 4.37499 13.5502 4.375H13.5502H10.4498H10.4498C8.61306 4.37499 7.16657 4.37498 6.02539 4.51194C4.85678 4.6522 3.9095 4.9453 3.12537 5.60327C2.89124 5.79972 2.67472 6.01624 2.47827 6.25037C1.8203 7.0345 1.5272 7.98178 1.38694 9.15039C1.24998 10.2916 1.24999 11.7381 1.25 13.5748V13.5748V13.6752V13.6752C1.24999 15.5119 1.24998 16.9584 1.38694 18.0996C1.5272 19.2682 1.8203 20.2155 2.47827 20.9996C2.67472 21.2338 2.89124 21.4503 3.12537 21.6467C3.9095 22.3047 4.85678 22.5978 6.02539 22.7381C7.16655 22.875 8.61303 22.875 10.4497 22.875H10.4498H10.4498H13.5502H13.5502H13.5503C15.387 22.875 16.8334 22.875 17.9746 22.7381C19.1432 22.5978 20.0905 22.3047 20.8746 21.6467C21.1088 21.4503 21.3253 21.2338 21.5217 20.9996C22.1797 20.2155 22.4728 19.2682 22.6131 18.0996C22.75 16.9584 22.75 15.512 22.75 13.6753V13.6752V13.6752V13.5748V13.5748V13.5747C22.75 11.738 22.75 10.2916 22.6131 9.15039C22.4728 7.98178 22.1797 7.0345 21.5217 6.25037C21.3253 6.01624 21.1088 5.79972 20.8746 5.60327C20.0905 4.9453 19.1432 4.6522 17.9746 4.51194ZM15 17.125C16.933 17.125 18.5 15.558 18.5 13.625C18.5 11.692 16.933 10.125 15 10.125C13.067 10.125 11.5 11.692 11.5 13.625C11.5 15.558 13.067 17.125 15 17.125ZM6.5 11.125C5.94772 11.125 5.5 11.5727 5.5 12.125C5.5 12.6773 5.94772 13.125 6.5 13.125H7.5C8.05228 13.125 8.5 12.6773 8.5 12.125C8.5 11.5727 8.05228 11.125 7.5 11.125H6.5ZM6.5 14.125C5.94772 14.125 5.5 14.5727 5.5 15.125C5.5 15.6773 5.94772 16.125 6.5 16.125H7.5C8.05228 16.125 8.5 15.6773 8.5 15.125C8.5 14.5727 8.05228 14.125 7.5 14.125H6.5Z',
  d7: 'M13.5502 4.375C15.3869 4.37499 16.8334 4.37498 17.9746 4.51194C19.1432 4.6522 20.0905 4.9453 20.8746 5.60327C21.1088 5.79972 21.3253 6.01624 21.5217 6.25037C22.1797 7.0345 22.4728 7.98178 22.6131 9.15039C22.75 10.2916 22.75 11.738 22.75 13.5748V13.5748V13.6752V13.6752C22.75 15.512 22.75 16.9584 22.6131 18.0996C22.4728 19.2682 22.1797 20.2155 21.5217 20.9996C21.3253 21.2338 21.1088 21.4503 20.8746 21.6467C20.0905 22.3047 19.1432 22.5978 17.9746 22.7381C16.8334 22.875 15.387 22.875 13.5502 22.875H13.5502H10.4498H10.4498C8.61304 22.875 7.16656 22.875 6.02539 22.7381C4.85678 22.5978 3.9095 22.3047 3.12537 21.6467C2.89124 21.4503 2.67472 21.2338 2.47827 20.9996C1.8203 20.2155 1.5272 19.2682 1.38694 18.0996C1.24998 16.9584 1.24999 15.5119 1.25 13.6752V13.6752V13.5748V13.5748C1.24999 11.7381 1.24998 10.2916 1.38694 9.15039C1.5272 7.98178 1.8203 7.0345 2.47827 6.25037C2.67472 6.01624 2.89124 5.79972 3.12537 5.60327C3.9095 4.9453 4.85678 4.6522 6.02539 4.51194C7.16657 4.37498 8.61306 4.37499 10.4498 4.375H10.4498H13.5502H13.5502Z',
  d8: 'M5.5 12.125C5.5 11.5727 5.94772 11.125 6.5 11.125H7.5C8.05228 11.125 8.5 11.5727 8.5 12.125C8.5 12.6773 8.05228 13.125 7.5 13.125H6.5C5.94772 13.125 5.5 12.6773 5.5 12.125ZM5.5 15.125C5.5 14.5727 5.94772 14.125 6.5 14.125H7.5C8.05228 14.125 8.5 14.5727 8.5 15.125C8.5 15.6773 8.05228 16.125 7.5 16.125H6.5C5.94772 16.125 5.5 15.6773 5.5 15.125Z',
  d9: 'M18.5 13.625C18.5 15.558 16.933 17.125 15 17.125C13.067 17.125 11.5 15.558 11.5 13.625C11.5 11.692 13.067 10.125 15 10.125C16.933 10.125 18.5 11.692 18.5 13.625Z',
  d10: 'M14.5988 2.92506C15.0407 2.59369 15.1302 1.96689 14.7988 1.52506C14.4675 1.08323 13.8407 0.993688 13.3988 1.32506L9.39884 4.32506C9.37701 4.34143 9.35604 4.35853 9.33594 4.37629C9.68995 4.375 10.0606 4.375 10.4486 4.375H12.6656L14.5988 2.92506Z',
  d11: 'M18 14C18 15.933 16.433 17.5 14.5 17.5C12.567 17.5 11 15.933 11 14C11 12.067 12.567 10.5 14.5 10.5C16.433 10.5 18 12.067 18 14Z',
  d12: 'M2 22H22V6H2V22Z',
  d13: 'M8 6L14 2',
  d14: 'M5 12H8M5 16H8',
  d15: 'M14.5547 2.9141L8.1094 7.35941L7 5.69531L13.4453 1.25L14.5547 2.9141Z',
  d16: 'M1.25 6C1.25 5.58579 1.58579 5.25 2 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6V22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V6ZM11.25 14C11.25 11.6528 13.1528 9.75 15.5 9.75C17.8472 9.75 19.75 11.6528 19.75 14C19.75 16.3472 17.8472 18.25 15.5 18.25C13.1528 18.25 11.25 16.3472 11.25 14ZM5 12.75H8V11.25H5V12.75ZM5 16.75H8V15.25H5V16.75Z',
};

export const IconRadioStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-stroke-rounded IconRadioStrokeRounded"
    >
      <circle 
        cx="14.5" 
        cy="13.5" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadioDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-duotone-rounded IconRadioDuotoneRounded"
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <circle 
        cx="14.5" 
        cy="13.5" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const IconRadioTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-twotone-rounded IconRadioTwotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="14.5" 
        cy="13.5" 
        r="3.5" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadioSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-solid-rounded IconRadioSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadioBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-bulk-rounded IconRadioBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconRadioStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-stroke-sharp IconRadioStrokeSharp"
    >
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
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRadioSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="radio-solid-sharp IconRadioSolidSharp"
    >
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
    </TheIconWrapper>
  );
};

export const iconPackOfRadio: TheIconSelfPack = {
  name: 'Radio',
  StrokeRounded: IconRadioStrokeRounded,
  DuotoneRounded: IconRadioDuotoneRounded,
  TwotoneRounded: IconRadioTwotoneRounded,
  SolidRounded: IconRadioSolidRounded,
  BulkRounded: IconRadioBulkRounded,
  StrokeSharp: IconRadioStrokeSharp,
  SolidSharp: IconRadioSolidSharp,
};