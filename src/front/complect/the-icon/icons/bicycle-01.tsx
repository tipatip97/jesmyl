import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6 20.0029C8.20914 20.0029 10 18.2121 10 16.0029C10 13.7938 8.20914 12.0029 6 12.0029C3.79086 12.0029 2 13.7938 2 16.0029C2 18.2121 3.79086 20.0029 6 20.0029Z',
  d2: 'M18 20.0029C20.2091 20.0029 22 18.2121 22 16.0029C22 13.7938 20.2091 12.0029 18 12.0029C15.7909 12.0029 14 13.7938 14 16.0029C14 18.2121 15.7909 20.0029 18 20.0029Z',
  d3: 'M6 16.0029H10.3706C10.7302 16.0029 11.0622 15.8098 11.2399 15.4971L15.5 8.00293',
  d4: 'M12 13.0029L7 7.00293M7 7.00293H5M7 7.00293H9',
  d5: 'M20.0039 6.21862C19.7999 5.64262 19.4399 4.74262 18.2399 4.32262C17.4599 4.02262 15.5399 3.90262 15.2999 4.08262C14.9527 4.16943 14.9399 4.56262 15.1079 5.10262C15.2444 5.68157 15.4559 6.42818 15.6479 7.14262C16.1399 8.97342 17.2199 12.9386 18.0239 15.9986',
  d6: 'M6.25098 19.7529C8.46012 19.7529 10.251 17.9621 10.251 15.7529C10.251 13.5438 8.46012 11.7529 6.25098 11.7529C4.04184 11.7529 2.25098 13.5438 2.25098 15.7529C2.25098 17.9621 4.04184 19.7529 6.25098 19.7529Z',
  d7: 'M18.251 19.7529C20.4601 19.7529 22.251 17.9621 22.251 15.7529C22.251 13.5438 20.4601 11.7529 18.251 11.7529C16.0418 11.7529 14.251 13.5438 14.251 15.7529C14.251 17.9621 16.0418 19.7529 18.251 19.7529Z',
  d8: 'M6.25098 15.7529H10.6216C10.9812 15.7529 11.3132 15.5598 11.4909 15.2471L15.751 7.75293',
  d9: 'M12.251 12.7529L7.25098 6.75293M7.25098 6.75293H5.25098M7.25098 6.75293H9.25098',
  d10: 'M20.252 5.97253C20.048 5.39653 19.688 4.49653 18.488 4.07653C17.708 3.77653 15.788 3.65653 15.548 3.83653C15.2008 3.92334 15.188 4.31653 15.356 4.85653C15.4925 5.43548 15.704 6.18209 15.896 6.89653C16.388 8.72733 17.468 12.6925 18.272 15.7525',
  d11: 'M6 20C8.20914 20 10 18.2091 10 16C10 13.7909 8.20914 12 6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20Z',
  d12: 'M18 20C20.2091 20 22 18.2091 22 16C22 13.7909 20.2091 12 18 12C15.7909 12 14 13.7909 14 16C14 18.2091 15.7909 20 18 20Z',
  d13: 'M6 16H10.3706C10.7302 16 11.0622 15.8069 11.2399 15.4942L15.5 8',
  d14: 'M12 13L7 7M7 7H5M7 7H9',
  d15: 'M5 7H9',
  d16: 'M20.001 6.21862C19.797 5.64262 19.437 4.74262 18.237 4.32262C17.457 4.02262 15.537 3.90262 15.297 4.08262C14.9498 4.16943 14.937 4.56262 15.105 5.10262C15.2415 5.68157 15.453 6.42818 15.645 7.14262C16.137 8.97342 17.217 12.9386 18.021 15.9986',
  d17: 'M5.75 13C4.09315 13 2.75 14.3431 2.75 16C2.75 17.6569 4.09315 19 5.75 19C7.40685 19 8.75 17.6569 8.75 16C8.75 14.3431 7.40685 13 5.75 13ZM0.75 16C0.75 13.2386 2.98858 11 5.75 11C8.51142 11 10.75 13.2386 10.75 16C10.75 18.7614 8.51142 21 5.75 21C2.98858 21 0.75 18.7614 0.75 16Z',
  d18: 'M18.25 13C16.5931 13 15.25 14.3431 15.25 16C15.25 17.6569 16.5931 19 18.25 19C19.9069 19 21.25 17.6569 21.25 16C21.25 14.3431 19.9069 13 18.25 13ZM13.25 16C13.25 13.2386 15.4886 11 18.25 11C21.0114 11 23.25 13.2386 23.25 16C23.25 18.7614 21.0114 21 18.25 21C15.4886 21 13.25 18.7614 13.25 16Z',
  d19: 'M7.76825 6.35984C7.41468 5.93556 6.78412 5.87824 6.35984 6.2318C5.93556 6.58537 5.87824 7.21593 6.2318 7.64021L11.1794 13.5773L10.3706 15.0002H6C5.44772 15.0002 5 15.4479 5 16.0002C5 16.5525 5.44772 17.0002 6 17.0002H10.3706C11.0899 17.0002 11.7538 16.6139 12.1093 15.9885L16.3694 8.49436C16.6423 8.01423 16.4743 7.40375 15.9942 7.13082C15.5141 6.85789 14.9036 7.02585 14.6306 7.50599L12.2351 11.7201L7.76825 6.35984Z',
  d20: 'M4 7C4 6.44772 4.44772 6 5 6H9C9.55228 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8H5C4.44772 8 4 7.55228 4 7Z',
  d21: 'M14.3828 3.52466C14.8162 3.05074 15.4321 3 15.7941 3C16.6845 3 17.7619 3.05235 18.715 3.43536C19.7327 3.84431 20.5875 4.62352 20.9619 5.95145C21.1117 6.48301 20.8023 7.03541 20.2707 7.18526C19.7391 7.33511 19.1867 7.02567 19.0369 6.4941C18.8488 5.82698 18.4761 5.49481 17.9693 5.29113C17.4695 5.09028 16.8377 5.01806 16.1117 5.00311L18.9911 15.741C19.1342 16.2744 18.8177 16.8228 18.2842 16.9659C17.7508 17.1089 17.2024 16.7924 17.0594 16.259L14.0833 5.16035C13.9667 4.71665 13.9027 4.04977 14.3828 3.52466Z',
  d22: 'M6 19.991C8.20914 19.991 10 18.201 10 15.993C10 13.785 8.20914 11.9951 6 11.9951C3.79086 11.9951 2 13.785 2 15.993C2 18.201 3.79086 19.991 6 19.991Z',
  d23: 'M18 19.991C20.2091 19.991 22 18.201 22 15.993C22 13.785 20.2091 11.9951 18 11.9951C15.7909 11.9951 14 13.785 14 15.993C14 18.201 15.7909 19.991 18 19.991Z',
  d24: 'M6 15.9939H11L16 7.99805',
  d25: 'M12.5 13.4957L7 6.99902M7 6.99902H5M7 6.99902H10',
  d26: 'M17.998 15.9931L15.0052 3.99974C15.0036 3.99321 15.0085 3.98696 15.0152 3.98732C16.7088 4.07722 19.3258 3.89095 19.9943 6.21458',
  d27: 'M6 13C4.34315 13 3 14.3431 3 16C3 17.6569 4.34315 19 6 19C7.65685 19 9 17.6569 9 16C9 14.3431 7.65685 13 6 13ZM1 16C1 13.2386 3.23858 11 6 11C8.76142 11 11 13.2386 11 16C11 18.7614 8.76142 21 6 21C3.23858 21 1 18.7614 1 16Z',
  d28: 'M18 13C16.3431 13 15 14.3431 15 16C15 17.6569 16.3431 19 18 19C19.6569 19 21 17.6569 21 16C21 14.3431 19.6569 13 18 13ZM13 16C13 13.2386 15.2386 11 18 11C20.7614 11 23 13.2386 23 16C23 18.7614 20.7614 21 18 21C15.2386 21 13 18.7614 13 16Z',
  d29: 'M16.7992 8.60069L10.7815 16.6007C10.5926 16.8518 10.2966 16.9996 9.98238 16.9996H6V14.9996H9.48326L15.2008 7.39844L16.7992 8.60069Z',
  d30: 'M6.5362 8H5V6H10V8H9.15611L13.2634 12.8541L11.7366 14.1459L6.5362 8Z',
  d31: 'M14.2112 3.38538C14.4007 3.14219 14.6917 3 15 3C16.2434 3 17.5121 3.05033 18.5595 3.42035C19.6911 3.82009 20.5814 4.60053 20.9622 5.95145L19.0372 6.4941C18.8556 5.84997 18.496 5.51903 17.8934 5.30614C17.4653 5.15492 16.9349 5.07327 16.2918 5.03322L18.9952 15.7555L17.0559 16.2445L14.0304 4.24448C13.955 3.94555 14.0217 3.62856 14.2112 3.38538Z',
};

export const IconBicycle01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-01-stroke-rounded IconBicycle01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconBicycle01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-01-duotone-rounded IconBicycle01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycle01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-01-twotone-rounded IconBicycle01TwotoneRounded"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycle01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-01-solid-rounded IconBicycle01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycle01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-01-bulk-rounded IconBicycle01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconBicycle01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-01-stroke-sharp IconBicycle01StrokeSharp"
    >
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
    </TheIconWrapper>
  );
};

export const IconBicycle01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="bicycle-01-solid-sharp IconBicycle01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d31} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfBicycle01: TheIconSelfPack = {
  name: 'Bicycle01',
  StrokeRounded: IconBicycle01StrokeRounded,
  DuotoneRounded: IconBicycle01DuotoneRounded,
  TwotoneRounded: IconBicycle01TwotoneRounded,
  SolidRounded: IconBicycle01SolidRounded,
  BulkRounded: IconBicycle01BulkRounded,
  StrokeSharp: IconBicycle01StrokeSharp,
  SolidSharp: IconBicycle01SolidSharp,
};