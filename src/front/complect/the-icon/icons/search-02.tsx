import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 14L16.5 16.5',
  d2: 'M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z',
  d3: 'M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z',
  d4: 'M14 14L16.4333 16.4333M16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333Z',
  d5: 'M16.7771 15.3629C17.5518 15.1066 18.4392 15.2866 19.0555 15.9029L22.0971 18.9445C22.9676 19.8151 22.9676 21.2265 22.0971 22.0971C21.2265 22.9676 19.8151 22.9676 18.9445 22.0971L15.9029 19.0555C15.2866 18.4392 15.1066 17.5518 15.3629 16.7771L13.293 14.7072L14.7072 13.293L16.7771 15.3629Z',
  d6: 'M1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9ZM9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3Z',
  d7: 'M14 14L17 17',
  d8: 'M22.0004 19.5552L17.946 15.5L15.501 17.945L19.5554 22.0002L22.0004 19.5552Z',
  d9: 'M17.4147 14.9697L16.8993 15.4851L14.7072 13.293L13.293 14.7072L15.4851 16.8993L14.9697 17.4147C14.6768 17.7076 14.6768 18.1824 14.9696 18.4753L19.024 22.5305C19.1647 22.6712 19.3554 22.7502 19.5544 22.7502C19.7533 22.7502 19.9441 22.6712 20.0847 22.5305L22.5298 20.0855C22.8226 19.7926 22.8227 19.3178 22.5298 19.0249L18.4754 14.9697C18.3348 14.829 18.144 14.75 17.9451 14.75C17.7461 14.75 17.5554 14.829 17.4147 14.9697Z',
  d10: 'M1.25 9C1.25 4.71979 4.71979 1.25 9 1.25C13.2802 1.25 16.75 4.71979 16.75 9C16.75 13.2802 13.2802 16.75 9 16.75C4.71979 16.75 1.25 13.2802 1.25 9ZM9 3.1875C5.78984 3.1875 3.1875 5.78984 3.1875 9C3.1875 12.2102 5.78984 14.8125 9 14.8125C12.2102 14.8125 14.8125 12.2102 14.8125 9C14.8125 5.78984 12.2102 3.1875 9 3.1875Z',
};

export const IconSearch02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-02-stroke-rounded IconSearch02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearch02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-02-duotone-rounded IconSearch02DuotoneRounded"
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
        strokeLinejoin="round" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearch02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-02-twotone-rounded IconSearch02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearch02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-02-solid-rounded IconSearch02SolidRounded"
    >
      <path 
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

export const IconSearch02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-02-bulk-rounded IconSearch02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconSearch02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-02-stroke-sharp IconSearch02StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSearch02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="search-02-solid-sharp IconSearch02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfSearch02: TheIconSelfPack = {
  name: 'Search02',
  StrokeRounded: IconSearch02StrokeRounded,
  DuotoneRounded: IconSearch02DuotoneRounded,
  TwotoneRounded: IconSearch02TwotoneRounded,
  SolidRounded: IconSearch02SolidRounded,
  BulkRounded: IconSearch02BulkRounded,
  StrokeSharp: IconSearch02StrokeSharp,
  SolidSharp: IconSearch02SolidSharp,
};