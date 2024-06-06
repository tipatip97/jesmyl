import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13',
  d2: 'M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2',
  d3: 'M11 16H8.5M6 16H8.5M8.5 16V22',
  d4: 'M18 16H15.3C14.582 16 14 16.582 14 17.3V17.7C14 18.418 14.582 19 15.3 19H16.7C17.418 19 18 19.582 18 20.3V20.7C18 21.418 17.418 22 16.7 22H14',
  d5: 'M9.49879 8.49792C5.89879 8.49792 3.5 9.5 3.5 12.1963V13H20.5V7.82643C20.5 6.13079 20.5 5.28297 20.232 4.60583C19.8012 3.51725 18.8902 2.65858 17.7352 2.25256C17.0168 2 16.1172 2 14.3182 2C13.9881 2 13.6753 2 13.3783 2.00051C9.49879 2.00051 10.5332 5.05948 10.5499 6.55167C10.5909 8.19467 9.8002 8.49792 9.49879 8.49792Z',
  d6: 'M17.2614 3.36158C16.7582 3.18692 16.0914 3.17316 14.2572 3.17316C13.9564 3.17316 13.6722 3.17328 13.4034 3.17382C12.175 3.20376 11.1886 4.19647 11.1886 5.41671C11.1957 5.56541 11.2206 6.24697 11.2241 6.41206C11.2319 6.78386 11.2209 7.23773 11.1001 7.6829C10.86 8.56775 10.1602 9.25889 9.26413 9.49598C8.81333 9.61527 8.35372 9.62611 7.97723 9.61838C7.81007 9.61496 7.11987 9.59034 6.9693 9.58335C5.7166 9.58335 4.7007 10.5845 4.69738 11.8208L4.69737 12.7885C4.69737 13.3195 4.26144 13.75 3.72368 13.75C3.18593 13.75 2.75 13.3195 2.75 12.7885C2.75007 11.4642 2.75219 9.45463 2.80918 8.60017C2.86942 7.69695 2.99393 6.94378 3.27491 6.24261C4.11806 4.13859 5.8915 2.50027 8.1118 1.72949C9.39558 1.28382 10.9417 1.25214 13.4291 1.25017C14.9839 1.24964 17.0482 1.24915 17.9072 1.54735C19.2841 2.02533 20.3922 3.04443 20.9208 4.36341C21.1039 4.82043 21.1795 5.29867 21.2153 5.83514C21.25 6.35588 21.25 6.9938 21.25 7.78132V12.7885C21.25 13.3195 20.8141 13.75 20.2763 13.75C19.7386 13.75 19.3026 13.3195 19.3026 12.7885V7.81394C19.3026 6.98607 19.3021 6.41159 19.2721 5.96152C19.2427 5.52002 19.1878 5.26511 19.11 5.07103C18.7997 4.29659 18.1337 3.66441 17.2614 3.36158Z',
  d7: 'M5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H9.25V22C9.25 22.4142 8.91421 22.75 8.5 22.75C8.08579 22.75 7.75 22.4142 7.75 22V16.75H6C5.58579 16.75 5.25 16.4142 5.25 16Z',
  d8: 'M13.25 17.3C13.25 16.1678 14.1678 15.25 15.3 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H15.3C14.9962 16.75 14.75 16.9962 14.75 17.3V17.7C14.75 18.0038 14.9962 18.25 15.3 18.25H16.7C17.8322 18.25 18.75 19.1678 18.75 20.3V20.7C18.75 21.8322 17.8322 22.75 16.7 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22C13.25 21.5858 13.5858 21.25 14 21.25H16.7C17.0038 21.25 17.25 21.0038 17.25 20.7V20.3C17.25 19.9962 17.0038 19.75 16.7 19.75H15.3C14.1678 19.75 13.25 18.8322 13.25 17.7V17.3Z',
  d9: 'M20.5 12.9908V2H10.5L3.5 9.01345L3.50012 13M10.5 2.53682V9L4.10689 9.01228',
  d10: 'M20.2763 1.25C20.8141 1.25 21.25 1.68754 21.25 2.22727V13.0682H19.3026V3.20455L11.5132 3.20455L11.5132 10.0455H4.69737L4.69737 13.0682H2.75V8.66338L10.1362 1.25H20.2763Z',
  d11: 'M5.25 15.25H11.75V16.75H9.25V22.75H7.75V16.75H5.25V15.25Z',
  d12: 'M13.25 17.3C13.25 16.1678 14.1678 15.25 15.3 15.25H18.75V16.75H15.3C14.9962 16.75 14.75 16.9962 14.75 17.3V17.7C14.75 18.0038 14.9962 18.25 15.3 18.25H16.7C17.8322 18.25 18.75 19.1678 18.75 20.3V20.7C18.75 21.8322 17.8322 22.75 16.7 22.75H13.25V21.25H16.7C17.0038 21.25 17.25 21.0038 17.25 20.7V20.3C17.25 19.9962 17.0038 19.75 16.7 19.75H15.3C14.1678 19.75 13.25 18.8322 13.25 17.7V17.3Z',
};

export const IconTypescript02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-02-stroke-rounded IconTypescript02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconTypescript02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-02-duotone-rounded IconTypescript02DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconTypescript02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-02-twotone-rounded IconTypescript02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconTypescript02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-02-solid-rounded IconTypescript02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconTypescript02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-02-bulk-rounded IconTypescript02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconTypescript02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-02-stroke-sharp IconTypescript02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconTypescript02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="typescript-02-solid-sharp IconTypescript02SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTypescript02: TheIconSelfPack = {
  name: 'Typescript02',
  StrokeRounded: IconTypescript02StrokeRounded,
  DuotoneRounded: IconTypescript02DuotoneRounded,
  TwotoneRounded: IconTypescript02TwotoneRounded,
  SolidRounded: IconTypescript02SolidRounded,
  BulkRounded: IconTypescript02BulkRounded,
  StrokeSharp: IconTypescript02StrokeSharp,
  SolidSharp: IconTypescript02SolidSharp,
};