import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 14L4 19M4 19L3 22M4 19H6.65287C7.35734 19 7.52345 19.1407 7.63927 19.8356L8 22',
  d2: 'M21 14L20 19M20 19L21 22M20 19H17.3471C16.6427 19 16.4765 19.1407 16.3607 19.8356L16 22',
  d3: 'M12 10V22',
  d4: 'M4.60045 7.40727C6.67011 6.43818 8.75263 4.89851 10.2888 3.36403C11.1992 2.45468 11.6543 2 12 2C12.3457 2 12.8008 2.45468 13.7112 3.36403C15.2474 4.89851 17.3299 6.43818 19.3995 7.40727C20.1034 7.73682 20.5328 8.14335 20.873 8.9348C21.1333 9.54022 21.0165 10 20.3071 10H3.69295C2.98348 10 2.86672 9.54022 3.12697 8.9348C3.46718 8.14335 3.89663 7.73683 4.60045 7.40727Z',
  d5: 'M11 22H13',
  d6: 'M9 15H15',
  d7: 'M12 10V22M9 15H15',
  d8: 'M2.80416 12.8946C3.34571 12.7863 3.87254 13.1375 3.98085 13.6791L4.82008 17.8752H6.65314C6.99084 17.8752 7.56146 17.8865 8.01346 18.2694C8.46546 18.6523 8.57042 19.2133 8.62593 19.5464L8.98667 21.7108C9.07746 22.2556 8.70944 22.7708 8.16467 22.8616C7.6199 22.9524 7.10467 22.5844 7.01388 22.0396L6.65314 19.8752H4.72103L3.94895 22.1914C3.77431 22.7154 3.20799 22.9985 2.68404 22.8239C2.1601 22.6492 1.87694 22.0829 2.05159 21.559L2.96761 18.8109L2.01969 14.0713C1.91138 13.5297 2.2626 13.0029 2.80416 12.8946Z',
  d9: 'M21.1958 12.8946C20.6543 12.7863 20.1275 13.1375 20.0191 13.6791L19.1799 17.8752H17.3469C17.0092 17.8752 16.4385 17.8865 15.9865 18.2694C15.5345 18.6523 15.4296 19.2133 15.3741 19.5464L15.0133 21.7108C14.9225 22.2556 15.2906 22.7708 15.8353 22.8616C16.3801 22.9524 16.8953 22.5844 16.9861 22.0396L17.3469 19.8752H19.279L20.051 22.1914C20.2257 22.7154 20.792 22.9985 21.316 22.8239C21.8399 22.6492 22.1231 22.0829 21.9484 21.559L21.0324 18.8109L21.9803 14.0713C22.0886 13.5297 21.7374 13.0029 21.1958 12.8946Z',
  d10: 'M10.8742 1.64159C11.1389 1.41936 11.528 1.125 12.0002 1.125C12.4725 1.125 12.8616 1.41936 13.1263 1.64159C13.4222 1.88997 13.7824 2.24983 14.2154 2.68236L14.2154 2.68241L14.2415 2.70841C15.7247 4.19005 17.7372 5.67566 19.7178 6.60304C20.1253 6.79383 20.4902 7.02434 20.8075 7.34681C21.1251 7.66962 21.3646 8.05359 21.5623 8.51362C21.7162 8.87173 21.8558 9.39047 21.6384 9.8759C21.3806 10.4518 20.806 10.625 20.3073 10.625H3.69318C3.19446 10.625 2.61987 10.4518 2.36202 9.8759C2.14469 9.39047 2.28422 8.87173 2.43816 8.51361C2.63591 8.05359 2.87536 7.66962 3.19297 7.34681C3.51026 7.02434 3.87518 6.79383 4.28264 6.60304C6.26323 5.67566 8.27572 4.19005 9.75899 2.70841L9.78504 2.68239C10.218 2.24984 10.5783 1.88998 10.8742 1.64159Z',
  d11: 'M12 8.875C12.5523 8.875 13 9.32272 13 9.875V13.875H15C15.5523 13.875 16 14.3227 16 14.875C16 15.4273 15.5523 15.875 15 15.875H13V20.875C13.5523 20.875 14 21.3227 14 21.875C14 22.4273 13.5523 22.875 13 22.875H11C10.4477 22.875 10 22.4273 10 21.875C10 21.3227 10.4477 20.875 11 20.875V15.875H9C8.44772 15.875 8 15.4273 8 14.875C8 14.3227 8.44772 13.875 9 13.875H11V9.875C11 9.32272 11.4477 8.875 12 8.875Z',
  d12: 'M11 10.625H13V13.875H15C15.5523 13.875 16 14.3227 16 14.875C16 15.4273 15.5523 15.875 15 15.875H13V20.875C13.5523 20.875 14 21.3227 14 21.875C14 22.4273 13.5523 22.875 13 22.875H11C10.4477 22.875 10 22.4273 10 21.875C10 21.3227 10.4477 20.875 11 20.875V15.875H9C8.44772 15.875 8 15.4273 8 14.875C8 14.3227 8.44772 13.875 9 13.875H11V10.625Z',
  d13: 'M3 14.0273L3.99845 19.0386M3.99845 19.0386L3 22.0454M3.99845 19.0386H6.99378L7.99223 22.0454',
  d14: 'M20.9717 14.0273L19.9733 19.0386M19.9733 19.0386L20.9717 22.0454M19.9733 19.0386H16.9779L15.9795 22.0454',
  d15: 'M11.9863 10.0176V22.0446',
  d16: 'M10 22H14',
  d17: 'M8.99023 15.0293H14.9809',
  d18: 'M2.99023 8.11545V10.0636H20.9951V8.11645C20.9951 8.0796 20.9746 8.04552 20.9423 8.02802C17.777 6.31293 15.5836 4.95805 12.0197 2.07015C11.9818 2.03939 11.9259 2.04057 11.8893 2.07298C8.61557 4.97413 6.15063 6.28537 3.04168 8.02779C3.01009 8.0455 2.99023 8.07913 2.99023 8.11545Z',
  d19: 'M2.94979 19.3695L2 14.6299L3.96504 14.2377L4.80592 18.4338H6.99043C7.42172 18.4338 7.80461 18.7092 7.94099 19.1176L8.94297 22.1176L7.04185 22.75L6.26825 20.4338H4.70668L3.93308 22.75L2.03196 22.1176L2.94979 19.3695Z',
  d20: 'M19.1941 18.4338L20.035 14.2377L22 14.6299L21.0502 19.3695L21.968 22.1176L20.0669 22.75L19.2933 20.4338H17.7318L16.9581 22.75L15.057 22.1176L16.059 19.1176C16.1954 18.7092 16.5783 18.4338 17.0096 18.4338H19.1941Z',
  d21: 'M11.4699 1.46926C11.7628 1.17675 12.2372 1.17675 12.53 1.46926C13.2371 2.17552 14.9076 3.39516 16.7121 4.58592C18.5061 5.76982 20.3336 6.86059 21.3161 7.32065C21.5797 7.44407 21.748 7.70883 21.748 7.99988V10.7499H2.24805V7.99988C2.24805 7.70883 2.41643 7.44407 2.68001 7.32065C3.66265 6.86054 5.49118 5.7697 7.28613 4.58582C9.09158 3.39501 10.763 2.17542 11.4699 1.46926Z',
  d22: 'M14 22.7499H10V20.7499H11V15.9999H9V13.9999H11V9.99988H13V13.9999H15V15.9999H13V20.7499H14V22.7499Z',
} as const;

export const IconTerraceStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="terrace-stroke-rounded IconTerraceStrokeRounded"
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

export const IconTerraceDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="terrace-duotone-rounded IconTerraceDuotoneRounded"
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

export const IconTerraceTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="terrace-twotone-rounded IconTerraceTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconTerraceSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="terrace-solid-rounded IconTerraceSolidRounded"
    >
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTerraceBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="terrace-bulk-rounded IconTerraceBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTerraceStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="terrace-stroke-sharp IconTerraceStrokeSharp"
    >
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
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconTerraceSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="terrace-solid-sharp IconTerraceSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
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
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTerrace: TheIconSelfPack = {
  name: 'Terrace',
  StrokeRounded: IconTerraceStrokeRounded,
  DuotoneRounded: IconTerraceDuotoneRounded,
  TwotoneRounded: IconTerraceTwotoneRounded,
  SolidRounded: IconTerraceSolidRounded,
  BulkRounded: IconTerraceBulkRounded,
  StrokeSharp: IconTerraceStrokeSharp,
  SolidSharp: IconTerraceSolidSharp,
};