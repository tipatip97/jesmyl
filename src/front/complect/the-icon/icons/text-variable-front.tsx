import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7.5 15H4.5M6 3V15M6 3C5.20721 3 4.18884 3.11448 3.37806 3.22723C3.03514 3.27492 2.86368 3.29877 2.71192 3.38287C2.39625 3.55779 2.1418 3.94131 2.04604 4.38652C2 4.60057 2 4.84482 2 5.33333M6 3C6.79279 3 7.81116 3.11448 8.62194 3.22723C8.96486 3.27492 9.13632 3.29877 9.28808 3.38287C9.60375 3.55779 9.8582 3.94131 9.95396 4.38652C10 4.60057 10 4.84482 10 5.33333',
  d2: 'M19.5 15H16.5M18 3V15M18 3C17.2072 3 16.1888 3.11448 15.3781 3.22723C15.0351 3.27492 14.8637 3.29877 14.7119 3.38287C14.3963 3.55779 14.1418 3.94131 14.046 4.38652C14 4.60057 14 4.84482 14 5.33333M18 3C18.7928 3 19.8112 3.11448 20.6219 3.22723C20.9649 3.27492 21.1363 3.29877 21.2881 3.38287C21.6037 3.55779 21.8582 3.94131 21.954 4.38652C22 4.60057 22 4.84482 22 5.33333',
  d3: 'M2 19H10',
  d4: 'M14 19L22 19',
  d5: 'M19.4286 15H15.5714M17.5 3V15M17.5 3C16.6081 3 15.4624 3.11448 14.5503 3.22723C14.1645 3.27492 13.9716 3.29877 13.8009 3.38287C13.4458 3.55779 13.1595 3.94131 13.0518 4.38652C13 4.60057 13 4.84482 13 5.33333M17.5 3C18.3919 3 19.5376 3.11448 20.4497 3.22723C20.8355 3.27492 21.0284 3.29877 21.1991 3.38287C21.5542 3.55779 21.8405 3.94131 21.9482 4.38652C22 4.60057 22 4.84482 22 5.33333',
  d6: 'M2 19H10M10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19M14 19L22 19',
  d7: 'M5.00009 4.17324C4.50436 4.21461 3.98341 4.27768 3.5159 4.3427C3.42812 4.35491 3.36086 4.36428 3.30279 4.37322C3.24605 4.38194 3.20949 4.38855 3.18427 4.39391C3.17204 4.40563 3.15276 4.42671 3.12989 4.46118C3.08666 4.52635 3.04641 4.61654 3.02377 4.72181C3.00555 4.8065 3.00009 4.9218 3.00009 5.45833C3.00009 6.01062 2.55238 6.45833 2.00009 6.45833C1.44781 6.45833 1.00009 6.01062 1.00009 5.45833C1.00009 5.42968 1.00007 5.4013 1.00004 5.37321C0.999716 4.96941 0.999433 4.62229 1.06849 4.30123C1.20785 3.65334 1.59574 2.98316 2.22731 2.63318C2.54918 2.45482 2.90352 2.40717 3.16939 2.37142C3.19384 2.36813 3.21755 2.36494 3.24041 2.36176C4.05866 2.24797 5.13428 2.125 6.00009 2.125C6.8659 2.125 7.94153 2.24797 8.75977 2.36176C8.78264 2.36494 8.80634 2.36813 8.83079 2.37142C9.09666 2.40717 9.451 2.45482 9.77287 2.63318C10.4044 2.98316 10.7923 3.65334 10.9317 4.30123C11.0007 4.62229 11.0005 4.96941 11.0001 5.37319C11.0001 5.4013 11.0001 5.42967 11.0001 5.45833C11.0001 6.01062 10.5524 6.45833 10.0001 6.45833C9.44781 6.45833 9.00009 6.01062 9.00009 5.45833C9.00009 4.92179 8.99463 4.8065 8.97641 4.72181C8.95377 4.61654 8.91353 4.52635 8.87029 4.46118C8.84742 4.42671 8.82814 4.40563 8.81591 4.39391C8.7907 4.38855 8.75413 4.38194 8.6974 4.37322C8.63932 4.36428 8.57206 4.35491 8.48428 4.3427C8.01677 4.27768 7.49582 4.21461 7.00009 4.17324V14.125H7.50009C8.05238 14.125 8.50009 14.5727 8.50009 15.125C8.50009 15.6773 8.05238 16.125 7.50009 16.125H4.50009C3.94781 16.125 3.50009 15.6773 3.50009 15.125C3.50009 14.5727 3.94781 14.125 4.50009 14.125H5.00009V4.17324Z',
  d8: 'M17.0001 4.17324C16.5044 4.21461 15.9834 4.27768 15.5159 4.3427C15.4281 4.35491 15.3609 4.36428 15.3028 4.37322C15.2461 4.38194 15.2095 4.38855 15.1843 4.39391C15.172 4.40563 15.1528 4.42671 15.1299 4.46118C15.0867 4.52635 15.0464 4.61654 15.0238 4.72181C15.0056 4.8065 15.0001 4.9218 15.0001 5.45833C15.0001 6.01062 14.5524 6.45833 14.0001 6.45833C13.4478 6.45833 13.0001 6.01062 13.0001 5.45833C13.0001 5.42968 13.0001 5.4013 13 5.37321C12.9997 4.96941 12.9994 4.62229 13.0685 4.30123C13.2079 3.65334 13.5957 2.98316 14.2273 2.63318C14.5492 2.45482 14.9035 2.40717 15.1694 2.37142C15.1938 2.36813 15.2175 2.36494 15.2404 2.36176C16.0587 2.24797 17.1343 2.125 18.0001 2.125C18.8659 2.125 19.9415 2.24797 20.7598 2.36176C20.7826 2.36494 20.8063 2.36813 20.8308 2.37142C21.0967 2.40717 21.451 2.45482 21.7729 2.63318C22.4044 2.98316 22.7923 3.65334 22.9317 4.30123C23.0007 4.62229 23.0005 4.96941 23.0001 5.37319C23.0001 5.4013 23.0001 5.42967 23.0001 5.45833C23.0001 6.01062 22.5524 6.45833 22.0001 6.45833C21.4478 6.45833 21.0001 6.01062 21.0001 5.45833C21.0001 4.92179 20.9946 4.8065 20.9764 4.72181C20.9538 4.61654 20.9135 4.52635 20.8703 4.46118C20.8474 4.42671 20.8281 4.40563 20.8159 4.39391C20.7907 4.38855 20.7541 4.38194 20.6974 4.37322C20.6393 4.36428 20.5721 4.35491 20.4843 4.3427C20.0168 4.27768 19.4958 4.21461 19.0001 4.17324V14.125H19.5001C20.0524 14.125 20.5001 14.5727 20.5001 15.125C20.5001 15.6773 20.0524 16.125 19.5001 16.125H16.5001C15.9478 16.125 15.5001 15.6773 15.5001 15.125C15.5001 14.5727 15.9478 14.125 16.5001 14.125H17.0001V4.17324Z',
  d9: 'M1 19.125C1 18.5727 1.44772 18.125 2 18.125H10C10.5523 18.125 11 18.5727 11 19.125C11 19.6773 10.5523 20.125 10 20.125H2C1.44772 20.125 1 19.6773 1 19.125Z',
  d10: 'M13 19.125C13 18.5727 13.4477 18.125 14 18.125L22 18.125C22.5523 18.125 23 18.5727 23 19.125C23 19.6773 22.5523 20.125 22 20.125L14 20.125C13.4477 20.125 13 19.6773 13 19.125Z',
  d11: 'M9.25 19.125C9.25 17.6062 10.4812 16.375 12 16.375C13.5188 16.375 14.75 17.6062 14.75 19.125C14.75 20.6438 13.5188 21.875 12 21.875C10.4812 21.875 9.25 20.6438 9.25 19.125Z',
  d12: 'M8 15H4M6.00058 3V15M6.00058 3C6.79337 3 10.0006 3.00006 10.0006 3.00006V4.99997M6.00058 3L2 3.00006V4.99997',
  d13: 'M20 15H16M18.0006 3V15M18.0006 3C18.7934 3 22.0006 3.00006 22.0006 3.00006V4.99997M18.0006 3L14 3.00006V4.99997',
  d14: 'M10 2C10.5523 2.00001 11.0006 2.44772 11.0006 3V4.99991H9.00058V3.99998L7.00058 3.99996V13.9999H8V15.9999H4V13.9999H5.00058V3.99996L3 3.99999V4.99991H1V3.00001C1 2.44773 1.44771 2.00001 1.99998 2.00001L10 2Z',
  d15: 'M14 2.00001L22 2C22.5523 2.00001 23.0006 2.44772 23.0006 3V4.99991H21.0006V3.99998L19.0006 3.99996V13.9999H20V15.9999H16V13.9999H17.0006V3.99996L15 3.99999V4.99991H13V3.00001C13 2.44773 13.4477 2.00001 14 2.00001Z',
  d16: 'M10 20H2V18H10V20Z',
  d17: 'M22 20L14 20L14 18L22 18L22 20Z',
  d18: 'M9 19C9 17.3431 10.3431 16 12 16C13.6569 16 15 17.3431 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19Z',
} as const;

export const IconTextVariableFrontStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-variable-front-stroke-rounded IconTextVariableFrontStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconTextVariableFrontDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-variable-front-duotone-rounded IconTextVariableFrontDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="19" 
        r="2" 
        fill="var(--icon-fill)"></circle>
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      <circle 
        cx="12" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconTextVariableFrontTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-variable-front-twotone-rounded IconTextVariableFrontTwotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTextVariableFrontSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-variable-front-solid-rounded IconTextVariableFrontSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextVariableFrontBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-variable-front-bulk-rounded IconTextVariableFrontBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTextVariableFrontStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-variable-front-stroke-sharp IconTextVariableFrontStrokeSharp"
    >
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="19" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
    </TheIconWrapper>
  );
};

export const IconTextVariableFrontSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="text-variable-front-solid-sharp IconTextVariableFrontSolidSharp"
    >
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
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

export const iconPackOfTextVariableFront: TheIconSelfPack = {
  name: 'TextVariableFront',
  StrokeRounded: IconTextVariableFrontStrokeRounded,
  DuotoneRounded: IconTextVariableFrontDuotoneRounded,
  TwotoneRounded: IconTextVariableFrontTwotoneRounded,
  SolidRounded: IconTextVariableFrontSolidRounded,
  BulkRounded: IconTextVariableFrontBulkRounded,
  StrokeSharp: IconTextVariableFrontStrokeSharp,
  SolidSharp: IconTextVariableFrontSolidSharp,
};