import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M4 12V22M20 12V22',
  d2: 'M3 12H21',
  d3: 'M4 17L20 17',
  d4: 'M11 14.5L13 14.5',
  d5: 'M14.386 3.35537C14.2825 3.18589 14.1891 3.02611 14.1062 2.87981C13.8552 2.43706 13.7297 2.21569 13.5302 2.10784C13.3307 2 13.0642 2 12.5312 2H11.4688C10.9358 2 10.6693 2 10.4698 2.10784C10.2703 2.21569 10.1448 2.43706 9.89384 2.87981L9.89383 2.87981C9.81091 3.02611 9.71746 3.18589 9.61404 3.35537C8.41287 5.32381 7.81228 6.30803 8.05201 6.65402C8.29175 7 9.41969 7 11.6756 7H11.6756H12.3244H12.3244C14.5803 7 15.7082 7 15.948 6.65402C16.1877 6.30803 15.5871 5.32381 14.386 3.35537Z',
  d6: 'M12 7V12',
  d7: 'M4 12H20V17H4V12Z',
  d8: 'M4 22V17M20 22V17M4 17V12H20V17M4 17H20',
  d9: 'M5 17.625V21.875C5 22.4273 4.55228 22.875 4 22.875C3.44772 22.875 3 22.4273 3 21.875L3 12.875C2.44772 12.875 2 12.4273 2 11.875C2 11.3227 2.44772 10.875 3 10.875L21 10.875C21.5523 10.875 22 11.3227 22 11.875C22 12.4273 21.5523 12.875 21 12.875V21.875C21 22.4273 20.5523 22.875 20 22.875C19.4477 22.875 19 22.4273 19 21.875V17.625L5 17.625ZM11 13.625C10.5858 13.625 10.25 13.9608 10.25 14.375C10.25 14.7892 10.5858 15.125 11 15.125L13 15.125C13.4142 15.125 13.75 14.7892 13.75 14.375C13.75 13.9608 13.4142 13.625 13 13.625L11 13.625Z',
  d10: 'M13 7.62463V11.875C13 12.4273 12.5523 12.875 12 12.875C11.4477 12.875 11 12.4273 11 11.875V7.62463C10.2 7.62315 9.54836 7.61583 9.05316 7.57977C8.74021 7.55699 8.44762 7.52029 8.20078 7.45155C7.97502 7.38868 7.64754 7.2623 7.43543 6.95618C7.18929 6.60095 7.24003 6.20434 7.29677 5.96879C7.35883 5.71119 7.48061 5.4322 7.62308 5.15006C7.90706 4.58766 8.36985 3.82928 8.95285 2.87389L8.97371 2.8397C9.07261 2.67763 9.16198 2.52483 9.24125 2.38498L9.25558 2.35968C9.3686 2.16022 9.47879 1.96576 9.58835 1.81062C9.71053 1.63759 9.87184 1.45344 10.1131 1.32305C10.3416 1.19955 10.5741 1.15878 10.7805 1.14119C10.9709 1.12496 11.1984 1.12498 11.4419 1.125H11.4419L11.4686 1.125L12.5578 1.125H12.5579C12.8013 1.12498 13.0289 1.12496 13.2193 1.14119C13.4257 1.15878 13.6582 1.19955 13.8867 1.32305C14.1279 1.45344 14.2892 1.63759 14.4114 1.81062C14.521 1.96576 14.6312 2.16022 14.7442 2.35967L14.7442 2.35968L14.7585 2.38498C14.8378 2.52483 14.9272 2.67763 15.0261 2.8397L15.0469 2.87387L15.0469 2.87388C15.6299 3.82927 16.0927 4.58766 16.3767 5.15006C16.5192 5.4322 16.6409 5.71119 16.703 5.96879C16.7597 6.20434 16.8105 6.60095 16.5643 6.95618C16.3522 7.2623 16.0247 7.38868 15.799 7.45155C15.5521 7.52029 15.2596 7.55699 14.9466 7.57977C14.4515 7.61583 13.7999 7.62315 13 7.62463Z',
  d11: 'M5 21.875V17.625V12.875H19V17.625V21.875C19 22.4273 19.4477 22.875 20 22.875C20.5523 22.875 21 22.4273 21 21.875V12.875C21.5523 12.875 22 12.4273 22 11.875C22 11.3227 21.5523 10.875 21 10.875H3C2.44772 10.875 2 11.3227 2 11.875C2 12.4273 2.44772 12.875 3 12.875V21.875C3 22.4273 3.44772 22.875 4 22.875C4.55228 22.875 5 22.4273 5 21.875Z',
  d12: 'M5 17.625L19 17.625V12.875H5V17.625Z',
  d13: 'M10.25 15.25C10.25 14.8358 10.5858 14.5 11 14.5L13 14.5C13.4142 14.5 13.75 14.8358 13.75 15.25C13.75 15.6642 13.4142 16 13 16L11 16C10.5858 16 10.25 15.6642 10.25 15.25Z',
  d14: 'M11.4419 1.125L11.4686 1.125L12.5578 1.125H12.5579C12.8013 1.12498 13.0289 1.12496 13.2193 1.14119C13.4257 1.15878 13.6582 1.19955 13.8867 1.32305C14.1279 1.45344 14.2892 1.63759 14.4114 1.81062C14.521 1.96576 14.6312 2.16022 14.7442 2.35967L14.7442 2.35968L14.7585 2.38498C14.8378 2.52483 14.9272 2.67763 15.0261 2.8397L15.0469 2.87387C15.6299 3.82927 16.0927 4.58766 16.3767 5.15006C16.5192 5.4322 16.6409 5.71119 16.703 5.96879C16.7597 6.20434 16.8105 6.60095 16.5643 6.95618C16.3522 7.2623 16.0247 7.38868 15.799 7.45155C15.5521 7.52029 15.2596 7.55699 14.9466 7.57977C14.3253 7.62501 13.4578 7.62501 12.3601 7.625H12.3601H11.6397H11.6397C10.5419 7.62501 9.67443 7.62501 9.05316 7.57977C8.74021 7.55699 8.44762 7.52029 8.20078 7.45155C7.97502 7.38868 7.64754 7.2623 7.43543 6.95618C7.18929 6.60095 7.24003 6.20434 7.29677 5.96879C7.35883 5.71119 7.48061 5.4322 7.62308 5.15006C7.90706 4.58766 8.36985 3.82928 8.95285 2.87389L8.97371 2.8397C9.07261 2.67763 9.16198 2.52483 9.24125 2.38498L9.25558 2.35968C9.3686 2.16022 9.47879 1.96576 9.58835 1.81062C9.71053 1.63759 9.87184 1.45344 10.1131 1.32305C10.3416 1.19955 10.5741 1.15878 10.7805 1.14119C10.9709 1.12496 11.1984 1.12498 11.4419 1.125H11.4419Z',
  d15: 'M11 7.625C11.2037 7.62538 11.4169 7.62538 11.6397 7.62538H12.3601C12.5829 7.62538 12.7963 7.62538 13 7.625V11.8754C13 12.4277 12.5523 12.8754 12 12.8754C11.4477 12.8754 11 12.4277 11 11.8754V7.625Z',
  d16: 'M4 11.998V21.998M20 11.998V21.998',
  d17: 'M2 11.998H22',
  d18: 'M4 16.998H20',
  d19: 'M10.5 14.498H13.5',
  d20: 'M12 6.99805V11.998',
  d21: 'M15.2587 6.97756L8.74914 6.97807C8.70466 6.97807 8.01825 7.02309 8.03043 6.97756L10.0097 2.00195H13.9736L15.994 6.9779C16.0062 7.02343 15.3032 6.97756 15.2587 6.97756Z',
  d22: 'M3 13.5H2L2 11.5L22 11.5V13.5H21V22.25H19V18.25L5 18.25V22.25H3L3 13.5ZM10.5 15.75L13.5 15.75L13.5 14.25L10.5 14.25L10.5 15.75Z',
  d23: 'M16.6962 7.22125C16.7887 7.45233 16.7605 7.71425 16.621 7.92038C16.4815 8.12651 16.2488 8.25 15.9999 8.25H8.00049C7.75168 8.25 7.51906 8.12661 7.37953 7.9206C7.23999 7.71459 7.21171 7.45279 7.30402 7.22174L9.49017 1.75002L14.5058 1.75L16.6962 7.22125Z',
  d24: 'M11 12.5V7.5H13V12.5H11Z',
};

export const IconTableLamp01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-01-stroke-rounded IconTableLamp01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTableLamp01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-01-duotone-rounded IconTableLamp01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
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
    </TheIconWrapper>
  );
};

export const IconTableLamp01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-01-twotone-rounded IconTableLamp01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTableLamp01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-01-solid-rounded IconTableLamp01SolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconTableLamp01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-01-bulk-rounded IconTableLamp01BulkRounded"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTableLamp01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-01-stroke-sharp IconTableLamp01StrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTableLamp01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="table-lamp-01-solid-sharp IconTableLamp01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTableLamp01: TheIconSelfPack = {
  name: 'TableLamp01',
  StrokeRounded: IconTableLamp01StrokeRounded,
  DuotoneRounded: IconTableLamp01DuotoneRounded,
  TwotoneRounded: IconTableLamp01TwotoneRounded,
  SolidRounded: IconTableLamp01SolidRounded,
  BulkRounded: IconTableLamp01BulkRounded,
  StrokeSharp: IconTableLamp01StrokeSharp,
  SolidSharp: IconTableLamp01SolidSharp,
};