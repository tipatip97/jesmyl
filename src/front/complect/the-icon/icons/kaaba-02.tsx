import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21 22V5C21 3.58579 21 2.87868 20.5607 2.43934C20.1213 2 19.4142 2 18 2H6C4.58579 2 3.87868 2 3.43934 2.43934C3 2.87868 3 3.58579 3 5V22',
  d2: 'M7 17C7 16.0572 7 15.5858 7.29289 15.2929C7.58579 15 8.05719 15 9 15H10C10.9428 15 11.4142 15 11.7071 15.2929C12 15.5858 12 16.0572 12 17V22H7V17Z',
  d3: 'M2 22H22',
  d4: 'M3 6H21',
  d5: 'M3 19H7',
  d6: 'M12 19L21 19',
  d7: 'M3.5 9H5.5M8.5 9H10.5M13.5 9H15.5M18.5 9H20.5',
  d8: 'M6 6.00071L18.0586 6.00071C19.4577 6.0007 21 6.0007 21 6.00342V22.0007H3L3.00011 6C3.00011 6 4.58579 6.00071 6 6.00071ZM7.29289 15.2929C7 15.5858 7 16.0572 7 17V22H12V17C12 16.0572 12 15.5858 11.7071 15.2929C11.4142 15 10.9428 15 10 15H9C8.05719 15 7.58579 15 7.29289 15.2929Z',
  d9: 'M4.25414 1.31161C4.71288 1.24993 5.28574 1.24996 5.95061 1.25H18.0494C18.7142 1.24996 19.2871 1.24993 19.7458 1.31161C20.2375 1.37771 20.7087 1.52677 21.091 1.90901C21.4732 2.29126 21.6223 2.76252 21.6884 3.25416C21.7593 3.78136 21.7562 4.31707 21.7521 4.85C21.7506 5.03928 21.7499 5.13392 21.6914 5.19195C21.6329 5.24999 21.5386 5.24999 21.35 5.24999H2.64997C2.46133 5.24999 2.36701 5.24999 2.30852 5.19195C2.25004 5.13391 2.24931 5.03928 2.24787 4.85C2.24378 4.31707 2.2407 3.78136 2.31158 3.25416C2.37768 2.76252 2.52674 2.29126 2.90899 1.90901C3.29124 1.52677 3.7625 1.37771 4.25414 1.31161Z',
  d10: 'M2.64997 6.74999C2.46141 6.74999 2.36713 6.74999 2.30855 6.80857C2.24997 6.86715 2.24997 6.96143 2.24997 7.14999L2.24997 7.84999C2.24997 8.03855 2.24997 8.13283 2.30855 8.19141C2.36713 8.24999 2.46141 8.24999 2.64997 8.24999H4.54409C4.95831 8.24999 5.29409 8.58578 5.29409 8.99999C5.29409 9.41421 4.95831 9.74999 4.54409 9.74999H2.64997C2.46141 9.74999 2.36713 9.74999 2.30855 9.80857C2.24997 9.86715 2.24997 9.96143 2.24997 10.15L2.24998 17.65C2.24998 17.9328 2.24998 18.0743 2.33785 18.1621C2.42571 18.25 2.56714 18.25 2.84998 18.25H5.85004C6.03861 18.25 6.13289 18.25 6.19147 18.1914C6.25005 18.1328 6.25005 18.0385 6.25004 17.85L6.24998 16.9552C6.24993 16.5224 6.24988 16.1256 6.29328 15.8028C6.34107 15.4473 6.45352 15.0716 6.76254 14.7626C7.07157 14.4535 7.44729 14.3411 7.80277 14.2933C8.12558 14.2499 8.52242 14.2499 8.95523 14.25H10.0447C10.4775 14.2499 10.8744 14.2499 11.1972 14.2933C11.5527 14.3411 11.9284 14.4535 12.2374 14.7626C12.5464 15.0716 12.6589 15.4473 12.7067 15.8028C12.7501 16.1256 12.75 16.5223 12.75 16.9551L12.7499 17.85C12.7499 18.0385 12.7499 18.1328 12.8085 18.1914C12.8671 18.25 12.9613 18.25 13.1499 18.25L21.15 18.25C21.4328 18.25 21.5742 18.25 21.6621 18.1621C21.75 18.0743 21.75 17.9328 21.75 17.65L21.75 10.15C21.75 9.96143 21.75 9.86715 21.6914 9.80857C21.6328 9.74999 21.5385 9.74999 21.35 9.74999L19.4559 9.74999C19.0416 9.74999 18.7059 9.41421 18.7059 8.99999C18.7059 8.58578 19.0416 8.24999 19.4559 8.24999H21.35C21.5385 8.24999 21.6328 8.24999 21.6914 8.19141C21.75 8.13284 21.75 8.03856 21.75 7.84999L21.75 7.14999C21.75 6.96143 21.75 6.86715 21.6914 6.80857C21.6328 6.74999 21.5385 6.74999 21.35 6.74999H2.64997ZM7.23527 8.99999C7.23527 8.58578 7.57105 8.24999 7.98527 8.24999L10.2794 8.24999C10.6936 8.24999 11.0294 8.58578 11.0294 8.99999C11.0294 9.41421 10.6936 9.74999 10.2794 9.74999L7.98527 9.74999C7.57105 9.74999 7.23527 9.41421 7.23527 8.99999ZM13.7206 8.24999C13.3063 8.24999 12.9706 8.58578 12.9706 8.99999C12.9706 9.41421 13.3063 9.74999 13.7206 9.74999H16.0147C16.4289 9.74999 16.7647 9.41421 16.7647 8.99999C16.7647 8.58578 16.4289 8.24999 16.0147 8.24999H13.7206Z',
  d11: 'M21.75 20.35C21.75 20.0672 21.75 19.9257 21.6621 19.8379C21.5742 19.75 21.4328 19.75 21.15 19.75L13.1499 19.75C12.9614 19.75 12.8671 19.75 12.8085 19.8086C12.7499 19.8672 12.7499 19.9614 12.7499 20.15L12.75 22C12.75 22.4142 12.4142 22.75 12 22.75H6.99998C6.58577 22.75 6.24998 22.4142 6.24998 22L6.25003 20.15C6.25004 19.9614 6.25004 19.8672 6.19146 19.8086C6.13288 19.75 6.0386 19.75 5.85003 19.75H2.84998C2.56714 19.75 2.42571 19.75 2.33785 19.8379C2.24998 19.9257 2.24998 20.0671 2.24998 20.35L2.24998 22C2.24998 22.4142 2.58577 22.75 2.99998 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V20.35Z',
  d12: 'M11.25 18.9966V17C11.25 16.5074 11.2484 16.2134 11.2201 16.0027C11.1966 15.8282 11.1771 15.8041 10.9973 15.7799C10.7866 15.7516 10.4926 15.75 9.99998 15.75H8.99998C8.50737 15.75 8.21337 15.7516 8.00264 15.7799C7.82436 15.8039 7.80334 15.8283 7.7799 16.0027C7.75157 16.2134 7.74998 16.5074 7.74998 17V18.9912L7.75003 19L7.74998 19.0087V21.25H11.25V19.0034L11.25 19L11.25 18.9966Z',
  d13: 'M1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22Z',
  d14: 'M11.25 18.9966V17C11.25 16.5074 11.2484 16.2134 11.2201 16.0027C11.1966 15.8282 11.1771 15.8041 10.9973 15.7799C10.7866 15.7516 10.4926 15.75 10 15.75H9C8.50739 15.75 8.21339 15.7516 8.00266 15.7799C7.82438 15.8039 7.80336 15.8283 7.77992 16.0027C7.75159 16.2134 7.75 16.5074 7.75 17V18.9912L7.75005 19L7.75 19.0087V21.25H11.25V19.0034L11.25 19L11.25 18.9966Z',
  d15: 'M2.65 6.75C2.46144 6.75 2.36716 6.75 2.30858 6.80858C2.25 6.86716 2.25 6.96144 2.25 7.15L2.25 7.85C2.25 8.03856 2.25 8.13284 2.30858 8.19142C2.36716 8.25 2.46144 8.25 2.65 8.25H4.54412C4.95833 8.25 5.29412 8.58579 5.29412 9C5.29412 9.41421 4.95833 9.75 4.54412 9.75H2.65C2.46144 9.75 2.36716 9.75 2.30858 9.80858C2.25 9.86716 2.25 9.96144 2.25 10.15L2.25 17.65C2.25 17.9328 2.25 18.0743 2.33787 18.1621C2.42574 18.25 2.56716 18.25 2.85 18.25H5.85006C6.03863 18.25 6.13292 18.25 6.1915 18.1914C6.25008 18.1328 6.25007 18.0385 6.25006 17.85L6.25 16.9553C6.24995 16.5224 6.24991 16.1256 6.29331 15.8028C6.3411 15.4473 6.45355 15.0716 6.76257 14.7626C7.07159 14.4535 7.44732 14.3411 7.8028 14.2933C8.12561 14.2499 8.52244 14.25 8.95526 14.25H10.0448C10.4776 14.25 10.8744 14.2499 11.1972 14.2933C11.5527 14.3411 11.9284 14.4535 12.2374 14.7626C12.5465 15.0716 12.6589 15.4473 12.7067 15.8028C12.7501 16.1256 12.7501 16.5223 12.75 16.9551L12.7499 17.85C12.7499 18.0386 12.7499 18.1328 12.8085 18.1914C12.8671 18.25 12.9614 18.25 13.1499 18.25L21.15 18.25C21.4328 18.25 21.5743 18.25 21.6621 18.1621C21.75 18.0743 21.75 17.9328 21.75 17.65L21.75 10.15C21.75 9.96144 21.75 9.86716 21.6914 9.80858C21.6328 9.75 21.5386 9.75 21.35 9.75L19.4559 9.75C19.0417 9.75 18.7059 9.41422 18.7059 9C18.7059 8.58579 19.0417 8.25 19.4559 8.25H21.35C21.5386 8.25 21.6328 8.25 21.6914 8.19142C21.75 8.13284 21.75 8.03856 21.75 7.85L21.75 7.15C21.75 6.96144 21.75 6.86716 21.6914 6.80858C21.6328 6.75 21.5386 6.75 21.35 6.75H2.65ZM7.23529 9C7.23529 8.58579 7.57108 8.25 7.98529 8.25L10.2794 8.25C10.6936 8.25 11.0294 8.58579 11.0294 9C11.0294 9.41421 10.6936 9.75 10.2794 9.75L7.98529 9.75C7.57108 9.75 7.23529 9.41421 7.23529 9ZM13.7206 8.25C13.3064 8.25 12.9706 8.58579 12.9706 9C12.9706 9.41421 13.3064 9.75 13.7206 9.75H16.0147C16.4289 9.75 16.7647 9.41422 16.7647 9C16.7647 8.58579 16.4289 8.25 16.0147 8.25H13.7206Z',
  d16: 'M21 22V2L3 2V22',
  d17: 'M12 22V15H7V22',
  d18: 'M3 19H7M12 19L21 19',
  d19: 'M3 9H6M8 9H11M13 9H16M18 9H21',
  d20: 'M1.25 21.25H22.75V22.75H1.25V21.25Z',
  d21: 'M21 1.25H3C2.58579 1.25 2.25 1.58579 2.25 2V5.25H21.75V2C21.75 1.80109 21.671 1.61032 21.5303 1.46967C21.3897 1.32902 21.1989 1.25 21 1.25Z',
  d22: 'M2.25 8.25V6.75H21.75V8.25H18V9.75H21.75V18.25H12.75V14.25H6.25V18.25H2.25V9.75H6V8.25H2.25ZM8 9.75H11V8.25H8V9.75ZM13 9.75H16V8.25H13V9.75Z',
  d23: 'M21.75 19.75H12.75V22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V19.75Z',
  d24: 'M11.25 15.75V22.75H7.75V15.75H11.25Z',
  d25: 'M6.25 22.75V19.75H2.25V22C2.25 22.4142 2.58579 22.75 3 22.75H6.25Z',
};

export const IconKaaba02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-02-stroke-rounded IconKaaba02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconKaaba02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-02-duotone-rounded IconKaaba02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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
    </TheIconWrapper>
  );
};

export const IconKaaba02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-02-twotone-rounded IconKaaba02TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        d={d.d2} 
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
    </TheIconWrapper>
  );
};

export const IconKaaba02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-02-solid-rounded IconKaaba02SolidRounded"
    >
      <path 
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

export const IconKaaba02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-02-bulk-rounded IconKaaba02BulkRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d9} 
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
      </g>
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
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

export const IconKaaba02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-02-stroke-sharp IconKaaba02StrokeSharp"
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
      />
      <path 
        d={d.d4} 
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKaaba02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="kaaba-02-solid-sharp IconKaaba02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKaaba02: TheIconSelfPack = {
  name: 'Kaaba02',
  StrokeRounded: IconKaaba02StrokeRounded,
  DuotoneRounded: IconKaaba02DuotoneRounded,
  TwotoneRounded: IconKaaba02TwotoneRounded,
  SolidRounded: IconKaaba02SolidRounded,
  BulkRounded: IconKaaba02BulkRounded,
  StrokeSharp: IconKaaba02StrokeSharp,
  SolidSharp: IconKaaba02SolidSharp,
};