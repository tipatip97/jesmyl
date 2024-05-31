import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28248 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.52166 2.5 5.28248 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124Z',
  d2: 'M21.5 15L2.5 15',
  d3: 'M20.1049 3.89515C18.7136 2.50391 16.4744 2.50391 11.9961 2.50391C7.51775 2.50391 5.27858 2.50391 3.88734 3.89515C2.49609 5.28639 2.49609 7.52556 2.49609 12.0039L2.49609 15.0039L21.4733 15.0039C21.4961 14.133 21.4961 13.1406 21.4961 12.0039C21.4961 7.52556 21.4961 5.28639 20.1049 3.89515Z',
  d4: 'M1.5 11.9257V12.0746C1.5 12.3958 1.49999 12.7074 1.50058 13.0096C1.50148 13.4751 1.50193 13.7079 1.64832 13.854C1.79471 14.0001 2.02855 14.0001 2.49623 14.0001L21.5038 14.0001C21.9715 14.0001 22.2053 14.0001 22.3517 13.854C22.4981 13.7079 22.4985 13.4751 22.4994 13.0096C22.5 12.7074 22.5 12.3958 22.5 12.0745V11.9257C22.5 9.74971 22.5 8.01498 22.3172 6.65483C22.1284 5.25046 21.7283 4.09665 20.8159 3.18426C19.9035 2.27187 18.7497 1.87176 17.3453 1.68295C15.9851 1.50008 14.2504 1.5001 12.0744 1.50012L11.9256 1.50012C9.74959 1.5001 8.01485 1.50008 6.65471 1.68295C5.25033 1.87176 4.09653 2.27187 3.18414 3.18426C2.27175 4.09665 1.87164 5.25046 1.68282 6.65484C1.49996 8.01497 1.49998 9.7497 1.5 11.9257Z',
  d5: 'M22.3532 17.0537C22.4069 16.5736 22.4337 16.3335 22.2847 16.1668C22.1356 16.0001 21.8842 16.0001 21.3813 16.0001L2.61895 16.0001C2.1161 16.0001 1.86468 16.0001 1.71561 16.1668C1.56653 16.3335 1.5934 16.5736 1.64712 17.0537C1.65821 17.1528 1.67014 17.25 1.68296 17.3454C1.87178 18.7498 2.27188 19.9036 3.18427 20.816C4.09666 21.7284 5.25047 22.1285 6.65485 22.3173C8.01499 22.5002 9.74971 22.5001 11.9257 22.5001H12.0746C14.2506 22.5001 15.9853 22.5002 17.3454 22.3173C18.7498 22.1285 19.9036 21.7284 20.816 20.816C21.7284 19.9036 22.1285 18.7498 22.3173 17.3454C22.3301 17.25 22.3421 17.1528 22.3532 17.0537Z',
  d6: 'M3 21H21V3H3V21Z',
  d7: 'M21 15L3 15',
  d8: 'M2.25 16L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V16L2.25 16Z',
  d9: 'M21.75 14V3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 14L21.75 14Z',
} as const;

export const IconLayoutBottomStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-bottom-stroke-rounded IconLayoutBottomStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconLayoutBottomDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-bottom-duotone-rounded IconLayoutBottomDuotoneRounded"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconLayoutBottomTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-bottom-twotone-rounded IconLayoutBottomTwotoneRounded"
    >
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
      />
    </TheIconWrapper>
  );
};

export const IconLayoutBottomSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-bottom-solid-rounded IconLayoutBottomSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayoutBottomBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-bottom-bulk-rounded IconLayoutBottomBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayoutBottomStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-bottom-stroke-sharp IconLayoutBottomStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLayoutBottomSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="layout-bottom-solid-sharp IconLayoutBottomSolidSharp"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLayoutBottom: TheIconSelfPack = {
  name: 'LayoutBottom',
  StrokeRounded: IconLayoutBottomStrokeRounded,
  DuotoneRounded: IconLayoutBottomDuotoneRounded,
  TwotoneRounded: IconLayoutBottomTwotoneRounded,
  SolidRounded: IconLayoutBottomSolidRounded,
  BulkRounded: IconLayoutBottomBulkRounded,
  StrokeSharp: IconLayoutBottomStrokeSharp,
  SolidSharp: IconLayoutBottomSolidSharp,
};