import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14 22V18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22',
  d2: 'M18 12L20.7022 13.0133C21.7801 13.4175 22 13.7348 22 14.886V22H18V12Z',
  d3: 'M2 14.886C2 13.7348 2.21988 13.4175 3.29775 13.0133L6 12V22H2V14.886Z',
  d4: 'M16.208 9.5C17.3133 6.36054 15.1439 3 12 3C8.85611 3 6.68666 6.36054 7.79198 9.5',
  d5: 'M12 3V2',
  d6: 'M8 12V10M16 12V10',
  d7: 'M7 9.5H17',
  d8: 'M16.208 9.5C17.3133 6.36054 15.1439 3 12 3C8.85611 3 6.68666 6.36054 7.79198 9.5H16.208Z',
  d9: 'M18 12H6V22H10V18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V22H18V12Z',
  d10: 'M14 22V18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18V22H14Z',
  d11: 'M6 11.25C5.58579 11.25 5.25 11.5858 5.25 12V22C5.25 22.4142 5.58579 22.75 6 22.75H8.65C8.93284 22.75 9.07426 22.75 9.16213 22.6621C9.25 22.5743 9.25 22.4328 9.25 22.15V18C9.25 16.4812 10.4812 15.25 12 15.25C13.5188 15.25 14.75 16.4812 14.75 18V22.15C14.75 22.4328 14.75 22.5743 14.8379 22.6621C14.9257 22.75 15.0672 22.75 15.35 22.75H18C18.4142 22.75 18.75 22.4142 18.75 22V12C18.75 11.5858 18.4142 11.25 18 11.25H6ZM12.65 22.75C12.9328 22.75 13.0743 22.75 13.1621 22.6621C13.25 22.5743 13.25 22.4328 13.25 22.15V18C13.25 17.3096 12.6904 16.75 12 16.75C11.3096 16.75 10.75 17.3096 10.75 18V22.15C10.75 22.4328 10.75 22.5743 10.8379 22.6621C10.9257 22.75 11.0672 22.75 11.35 22.75H12.65Z',
  d12: 'M17.5728 11.3836C17.775 11.2434 18.033 11.2114 18.2633 11.2978L20.9656 12.3111C21.5129 12.5163 22.0389 12.762 22.3718 13.2424C22.7047 13.7228 22.75 14.3015 22.75 14.886V22C22.75 22.4142 22.4142 22.75 22 22.75H18C17.5858 22.75 17.25 22.4142 17.25 22V12C17.25 11.754 17.3706 11.5237 17.5728 11.3836ZM19.0202 13.1836C18.8975 13.1376 18.8361 13.1145 18.793 13.1444C18.75 13.1742 18.75 13.2397 18.75 13.3709V21.05C18.75 21.1443 18.75 21.1914 18.7793 21.2207C18.8086 21.25 18.8557 21.25 18.95 21.25H21.05C21.1443 21.25 21.1914 21.25 21.2207 21.2207C21.25 21.1914 21.25 21.1443 21.25 21.05V14.886C21.25 14.3193 21.1854 14.1639 21.1389 14.0968C21.0924 14.0297 20.9695 13.9146 20.4389 13.7156L19.0202 13.1836Z',
  d13: 'M6.4272 11.3836C6.62938 11.5237 6.75 11.754 6.75 12V22C6.75 22.4142 6.41421 22.75 6 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V14.886C1.25 14.3015 1.29532 13.7228 1.62823 13.2424C1.96114 12.762 2.48715 12.5163 3.03441 12.3111L5.73666 11.2978C5.96698 11.2114 6.22502 11.2434 6.4272 11.3836ZM5.25 13.3709C5.25 13.2397 5.25 13.1742 5.20696 13.1444C5.16392 13.1145 5.10254 13.1376 4.97977 13.1836L3.5611 13.7156C3.03049 13.9146 2.90762 14.0297 2.86112 14.0968C2.81462 14.1639 2.75 14.3193 2.75 14.886V21.05C2.75 21.1443 2.75 21.1914 2.77929 21.2207C2.80858 21.25 2.85572 21.25 2.95 21.25H5.05C5.14428 21.25 5.19142 21.25 5.22071 21.2207C5.25 21.1914 5.25 21.1443 5.25 21.05V13.3709Z',
  d14: 'M8 9.25C8.41421 9.25 8.75 9.58579 8.75 10V12C8.75 12.4142 8.41421 12.75 8 12.75C7.58579 12.75 7.25 12.4142 7.25 12V10C7.25 9.58579 7.58579 9.25 8 9.25ZM16 9.25C16.4142 9.25 16.75 9.58579 16.75 10V12C16.75 12.4142 16.4142 12.75 16 12.75C15.5858 12.75 15.25 12.4142 15.25 12V10C15.25 9.58579 15.5858 9.25 16 9.25Z',
  d15: 'M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V2.30438C15.7266 2.74206 17.6716 5.7516 17.168 8.7689C17.5013 8.84519 17.75 9.14356 17.75 9.5C17.75 9.91421 17.4142 10.25 17 10.25H16.2255C16.2139 10.2503 16.2022 10.2503 16.1906 10.25H7.80941C7.79776 10.2503 7.78613 10.2503 7.77454 10.25H7C6.58579 10.25 6.25 9.91421 6.25 9.5C6.25 9.14356 6.49866 8.84519 6.83197 8.7689C6.32836 5.7516 8.27342 2.74206 11.25 2.30438V2C11.25 1.58579 11.5858 1.25 12 1.25Z',
  d16: 'M7.25 10.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V10.25H7.80941C7.79776 10.2503 7.78613 10.2503 7.77454 10.25H7.25Z',
  d17: 'M15.25 10.25V12C15.25 12.4142 15.5858 12.75 16 12.75C16.4142 12.75 16.75 12.4142 16.75 12V10.25H16.2255C16.2139 10.2503 16.2022 10.2503 16.1906 10.25H15.25Z',
  d18: 'M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V2.30434C11.4933 2.26858 11.7435 2.25 11.9998 2.25C12.2562 2.25 12.5066 2.2686 12.75 2.30441V2Z',
  d19: 'M6.83127 8.76906C6.2864 5.50502 8.60706 2.25 11.9993 2.25C15.3914 2.25 17.712 5.50481 17.1673 8.76874C17.501 8.84478 17.75 9.14331 17.75 9.5C17.75 9.91421 17.4142 10.25 17 10.25H16.2073H7.79126H7C6.58579 10.25 6.25 9.91421 6.25 9.5C6.25 9.1438 6.49831 8.8456 6.83127 8.76906Z',
  d20: 'M6 12.9973H17.9984V21.9969H6V12.9973Z',
  d21: 'M13.9985 21.9971V16.9973H9.99902V21.9971',
  d22: 'M16.2059 9.99778C17.3111 7.09994 15.1419 3.99805 11.9984 3.99805C8.85496 3.99805 6.68579 7.09994 7.79097 9.99778',
  d23: 'M11.998 3.99747V2',
  d24: 'M7.99902 12.9964V9.99658M15.998 12.9964V9.99658',
  d25: 'M5.99902 9.98926H17.9975',
  d26: 'M22.0044 15.0311V21.988L18.104 21.9876C18.0488 21.9876 18.004 21.9428 18.004 21.8876L18.0039 13.1023C18.0039 13.0277 18.0826 12.9794 18.1491 13.0132L21.9497 14.9419C21.9833 14.959 22.0044 14.9934 22.0044 15.0311Z',
  d27: 'M1.99946 15.0262V21.9831L5.89993 21.9827C5.95515 21.9827 5.99991 21.9379 5.99991 21.8827L6 13.0974C6 13.0228 5.92128 12.9745 5.85476 13.0083L2.0542 14.937C2.02062 14.9541 1.99946 14.9886 1.99946 15.0262Z',
  d28: 'M12.75 3.05146V1.74988H11.25V3.05184C8.3541 3.45711 6.35244 6.17078 6.81701 8.99988H6V10.4999H7.25V12.7499H8.75V10.4999H15.25V12.7499H16.75V10.4999H18V8.99988H17.1857C17.6505 6.16988 15.6474 3.45539 12.75 3.05146Z',
  d29: 'M6 11.7501C5.87402 11.7501 5.75529 11.7812 5.65106 11.8361L1.66459 13.8293C1.4105 13.9563 1.25 14.216 1.25 14.5001V22.2501H9.25V15.7501L14.75 15.7501V22.2501H22.75V14.5001C22.75 14.216 22.5895 13.9563 22.3354 13.8293L18.3489 11.8361C18.2447 11.7812 18.126 11.7501 18 11.7501H6ZM2.75 14.9636L5.25 13.7136V20.7501H2.75V14.9636ZM18.75 13.7136V20.7501H21.25V14.9636L18.75 13.7136Z',
  d30: 'M13.25 22.2501V17.2501H10.75V22.2501H13.25Z',
} as const;

export const IconAlAqsaMosqueStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="al-aqsa-mosque-stroke-rounded IconAlAqsaMosqueStrokeRounded"
    >
      <rect 
        x="6" 
        y="12" 
        width="12" 
        height="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
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

export const IconAlAqsaMosqueDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="al-aqsa-mosque-duotone-rounded IconAlAqsaMosqueDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <rect 
        x="6" 
        y="12" 
        width="12" 
        height="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        d={d.d10} 
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

export const IconAlAqsaMosqueTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="al-aqsa-mosque-twotone-rounded IconAlAqsaMosqueTwotoneRounded"
    >
      <rect 
        x="6" 
        y="12" 
        width="12" 
        height="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></rect>
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
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

export const IconAlAqsaMosqueSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="al-aqsa-mosque-solid-rounded IconAlAqsaMosqueSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconAlAqsaMosqueBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="al-aqsa-mosque-bulk-rounded IconAlAqsaMosqueBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlAqsaMosqueStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="al-aqsa-mosque-stroke-sharp IconAlAqsaMosqueStrokeSharp"
    >
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
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAlAqsaMosqueSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="al-aqsa-mosque-solid-sharp IconAlAqsaMosqueSolidSharp"
    >
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
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAlAqsaMosque: TheIconSelfPack = {
  name: 'AlAqsaMosque',
  StrokeRounded: IconAlAqsaMosqueStrokeRounded,
  DuotoneRounded: IconAlAqsaMosqueDuotoneRounded,
  TwotoneRounded: IconAlAqsaMosqueTwotoneRounded,
  SolidRounded: IconAlAqsaMosqueSolidRounded,
  BulkRounded: IconAlAqsaMosqueBulkRounded,
  StrokeSharp: IconAlAqsaMosqueStrokeSharp,
  SolidSharp: IconAlAqsaMosqueSolidSharp,
};