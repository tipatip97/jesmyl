import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28248 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088Z',
  d2: 'M9 21.5L9 2.5',
  d3: 'M21.5 8L9 8',
  d4: 'M21.5 16L9 16',
  d5: 'M20.1049 20.1127C21.4961 18.7214 21.4961 16.4822 21.4961 12.0039C21.4961 7.52556 21.4961 5.28639 20.1048 3.89515C18.7136 2.50391 16.4744 2.50391 11.9961 2.50391L8.99609 2.50391L8.99609 21.4812C9.86701 21.5039 10.8594 21.5039 11.9961 21.5039C16.4744 21.5039 18.7136 21.5039 20.1049 20.1127Z',
  d6: 'M10.9905 1.5007C10.525 1.5016 10.2922 1.50205 10.1461 1.64844C10 1.79483 10 2.02867 10 2.49635V6.00013C10 6.47153 10 6.70723 10.1464 6.85368C10.2929 7.00012 10.5286 7.00012 11 7.00012H22.0111C22.1968 7.00012 22.3419 6.8389 22.3172 6.65483C22.1284 5.25046 21.7283 4.09665 20.8159 3.18426C19.9035 2.27187 18.7497 1.87176 17.3453 1.68295C15.9851 1.50008 14.2504 1.5001 12.0744 1.50012L11.9256 1.50012C11.6043 1.50012 11.2927 1.50012 10.9905 1.5007ZM22.4941 9.97449C22.4896 9.51787 22.4874 9.28956 22.3412 9.14484C22.1951 9.00012 21.9644 9.00012 21.503 9.00012H11C10.5286 9.00012 10.2929 9.00012 10.1464 9.14657C10 9.29302 10 9.52872 10 10.0001L10 14.0001C10 14.4715 10 14.7072 10.1464 14.8537C10.2929 15.0001 10.5286 15.0001 11 15.0001H21.503C21.9644 15.0001 22.1951 15.0001 22.3412 14.8554C22.4874 14.7107 22.4896 14.4824 22.4941 14.0258C22.5 13.4189 22.5 12.7692 22.5 12.0745V11.9257C22.5 11.231 22.5 10.5814 22.4941 9.97449ZM22.3172 17.3454C22.3419 17.1613 22.1968 17.0001 22.0111 17.0001H11C10.5286 17.0001 10.2929 17.0001 10.1464 17.1466C10 17.293 10 17.5287 10 18.0001L10 21.5039C10 21.9716 10 22.2054 10.1461 22.3518C10.2922 22.4982 10.525 22.4986 10.9905 22.4995C11.2927 22.5001 11.6043 22.5001 11.9255 22.5001H12.0745C14.2504 22.5001 15.9852 22.5002 17.3453 22.3173C18.7497 22.1285 19.9035 21.7284 20.8159 20.816C21.7283 19.9036 22.1284 18.7498 22.3172 17.3454Z',
  d7: 'M1.5 11.9268V12.0757C1.49998 14.2517 1.49996 15.9864 1.68282 17.3465C1.87164 18.7509 2.27175 19.9047 3.18414 20.8171C4.09653 21.7295 5.25033 22.1296 6.65471 22.3184C6.7501 22.3312 6.84733 22.3432 6.94642 22.3543C7.42656 22.408 7.66663 22.4348 7.83332 22.2858C8 22.1367 8 21.8853 8 21.3824V2.62005C8 2.1172 8 1.86578 7.83332 1.7167C7.66663 1.56763 7.42656 1.59449 6.94642 1.64822C6.84733 1.65931 6.7501 1.67124 6.65471 1.68406C5.25033 1.87287 4.09653 2.27298 3.18414 3.18537C2.27175 4.09776 1.87164 5.25157 1.68282 6.65595C1.49996 8.01608 1.49998 9.75081 1.5 11.9268Z',
  d8: 'M3 21H21V3H3V21Z',
  d9: 'M9 21L9 3',
  d10: 'M21 8H9',
  d11: 'M21 16H9',
  d12: 'M10 21.75V17H21.75V21C21.75 21.4142 21.4142 21.75 21 21.75H10Z',
  d13: 'M8 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.58579 2.58579 2.25 3 2.25H8V21.75Z',
  d14: 'M10 2.25V7H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H10Z',
  d15: 'M21.75 9H10V15H21.75V9Z',
};

export const IconLayout06StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-06-stroke-rounded IconLayout06StrokeRounded"
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

export const IconLayout06DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-06-duotone-rounded IconLayout06DuotoneRounded"
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

export const IconLayout06TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-06-twotone-rounded IconLayout06TwotoneRounded"
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

export const IconLayout06SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-06-solid-rounded IconLayout06SolidRounded"
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

export const IconLayout06BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-06-bulk-rounded IconLayout06BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLayout06StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-06-stroke-sharp IconLayout06StrokeSharp"
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

export const IconLayout06SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-06-solid-sharp IconLayout06SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfLayout06: TheIconSelfPack = {
  name: 'Layout06',
  StrokeRounded: IconLayout06StrokeRounded,
  DuotoneRounded: IconLayout06DuotoneRounded,
  TwotoneRounded: IconLayout06TwotoneRounded,
  SolidRounded: IconLayout06SolidRounded,
  BulkRounded: IconLayout06BulkRounded,
  StrokeSharp: IconLayout06StrokeSharp,
  SolidSharp: IconLayout06SolidSharp,
};