import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28248 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088Z',
  d2: 'M9 21.5L9 2.5',
  d3: 'M21.5 12L9 12',
  d4: 'M20.1049 20.1127C21.4961 18.7214 21.4961 16.4822 21.4961 12.0039C21.4961 7.52556 21.4961 5.28639 20.1048 3.89515C18.7136 2.50391 16.4744 2.50391 11.9961 2.50391L8.99609 2.50391L8.99609 21.4812C9.86701 21.5039 10.8594 21.5039 11.9961 21.5039C16.4744 21.5039 18.7136 21.5039 20.1049 20.1127Z',
  d5: 'M10.9905 1.5007C10.525 1.5016 10.2922 1.50205 10.1461 1.64844C10 1.79483 10 2.02867 10 2.49635V10.0001C10 10.4715 10 10.7072 10.1464 10.8537C10.2929 11.0001 10.5286 11.0001 11 11.0001L21.4975 11.0001C21.9709 11.0001 22.2076 11.0001 22.3543 10.852C22.501 10.7039 22.4988 10.4686 22.4943 9.99804C22.4819 8.69365 22.4424 7.58639 22.3172 6.65483C22.1284 5.25046 21.7283 4.09665 20.8159 3.18426C19.9035 2.27187 18.7497 1.87176 17.3453 1.68295C15.9851 1.50008 14.2504 1.5001 12.0744 1.50012L11.9256 1.50012C11.6043 1.50012 11.2927 1.50012 10.9905 1.5007ZM22.4943 14.0022C22.4988 13.5317 22.501 13.2964 22.3543 13.1483C22.2076 13.0001 21.9709 13.0001 21.4975 13.0001L11 13.0001C10.5286 13.0001 10.2929 13.0001 10.1464 13.1466C10 13.293 10 13.5287 10 14.0001L10 21.5039C10 21.9716 10 22.2054 10.1461 22.3518C10.2922 22.4982 10.525 22.4986 10.9905 22.4995C11.2927 22.5001 11.6043 22.5001 11.9255 22.5001H12.0745C14.2504 22.5001 15.9852 22.5002 17.3453 22.3173C18.7497 22.1285 19.9035 21.7284 20.8159 20.816C21.7283 19.9036 22.1284 18.7498 22.3172 17.3454C22.4424 16.4139 22.4819 15.3066 22.4943 14.0022Z',
  d6: 'M1.5 11.9268V12.0757C1.49998 14.2517 1.49996 15.9864 1.68282 17.3465C1.87164 18.7509 2.27175 19.9047 3.18414 20.8171C4.09653 21.7295 5.25033 22.1296 6.65471 22.3184C6.7501 22.3312 6.84733 22.3432 6.94642 22.3543C7.42656 22.408 7.66663 22.4348 7.83332 22.2858C8 22.1367 8 21.8853 8 21.3824V2.62005C8 2.1172 8 1.86578 7.83332 1.7167C7.66663 1.56763 7.42656 1.59449 6.94642 1.64822C6.84733 1.65931 6.7501 1.67124 6.65471 1.68406C5.25033 1.87287 4.09653 2.27298 3.18414 3.18537C2.27175 4.09776 1.87164 5.25157 1.68282 6.65595C1.49996 8.01608 1.49998 9.75081 1.5 11.9268Z',
  d7: 'M3 21H21V3H3V21Z',
  d8: 'M9 21L9 3',
  d9: 'M21 12H9',
  d10: 'M10 21.75V13H21.75V21C21.75 21.4142 21.4142 21.75 21 21.75H10Z',
  d11: 'M8 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.58579 2.58579 2.25 3 2.25H8V21.75Z',
  d12: 'M10 2.25V11H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H10Z',
} as const;

export const IconLayout04StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-04-stroke-rounded IconLayout04StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLayout04DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-04-duotone-rounded IconLayout04DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconLayout04TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-04-twotone-rounded IconLayout04TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconLayout04SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-04-solid-rounded IconLayout04SolidRounded"
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

export const IconLayout04BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-04-bulk-rounded IconLayout04BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconLayout04StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-04-stroke-sharp IconLayout04StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayout04SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-04-solid-sharp IconLayout04SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfLayout04: TheIconSelfPack = {
  name: 'Layout04',
  StrokeRounded: IconLayout04StrokeRounded,
  DuotoneRounded: IconLayout04DuotoneRounded,
  TwotoneRounded: IconLayout04TwotoneRounded,
  SolidRounded: IconLayout04SolidRounded,
  BulkRounded: IconLayout04BulkRounded,
  StrokeSharp: IconLayout04StrokeSharp,
  SolidSharp: IconLayout04SolidSharp,
};