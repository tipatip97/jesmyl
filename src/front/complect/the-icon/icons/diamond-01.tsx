import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.959 7.03438L8.04435 5.72804C10.1093 3.24268 11.1417 2 12.5 2C13.8583 2 14.8907 3.24268 16.9556 5.72803L18.041 7.03437C20.0137 9.4087 21 10.5959 21 12C21 13.4041 20.0137 14.5913 18.041 16.9656L16.9557 18.272C14.8907 20.7573 13.8583 22 12.5 22C11.1417 22 10.1093 20.7573 8.04435 18.272L6.95901 16.9656C4.98634 14.5913 4 13.4041 4 12C4 10.5959 4.98633 9.4087 6.959 7.03438Z',
  d2: 'M12.5 22C11.1417 22 10.1093 20.7573 8.04435 18.272L6.95901 16.9656C4.98634 14.5913 4 13.4041 4 12C4 10.5959 4.98633 9.4087 6.959 7.03438L8.04435 5.72804C10.1093 3.24268 11.1417 2 12.5 2',
  d3: 'M10.0337 2.37612C10.7839 1.69667 11.5548 1.25 12.5 1.25C13.4452 1.25 14.2161 1.69667 14.9663 2.37612C15.692 3.03335 16.4943 3.99908 17.4941 5.20247L17.4941 5.2025L18.65 6.59371L18.65 6.59378C19.6091 7.74814 20.3734 8.66801 20.8916 9.47617C21.4268 10.3109 21.75 11.1005 21.75 12C21.75 12.8995 21.4268 13.6891 20.8916 14.5238C20.3734 15.332 19.6091 16.2519 18.65 17.4063L18.65 17.4063L17.4941 18.7975C16.4943 20.0009 15.692 20.9666 14.9663 21.6239C14.2161 22.3033 13.4452 22.75 12.5 22.75C11.5548 22.75 10.7839 22.3033 10.0337 21.6239C9.30803 20.9666 8.50569 20.0009 7.50588 18.7975L6.35005 17.4063C5.39092 16.2519 4.62663 15.332 4.1084 14.5238C3.57316 13.6891 3.25 12.8995 3.25 12C3.25 11.1005 3.57316 10.3109 4.1084 9.47617C4.62663 8.66799 5.39092 7.74809 6.35005 6.59369L7.50591 5.20249L7.50592 5.20248C8.50571 3.99908 9.30804 3.03335 10.0337 2.37612Z',
  d4: 'M10.0337 2.37612C10.7839 1.69667 11.5548 1.25 12.5 1.25V22.75C11.5548 22.75 10.7839 22.3033 10.0337 21.6239C9.30803 20.9666 8.50569 20.0009 7.50588 18.7975L6.35005 17.4063C5.39092 16.2519 4.62663 15.332 4.1084 14.5238C3.57316 13.6891 3.25 12.8995 3.25 12C3.25 11.1005 3.57316 10.3109 4.1084 9.47617C4.62663 8.66799 5.39092 7.74809 6.35005 6.59369L7.50591 5.20249L7.50592 5.20248C8.50571 3.99908 9.30804 3.03335 10.0337 2.37612Z',
  d5: 'M20.5 12L12 2L3.5 12L12 22L20.5 12Z',
  d6: 'M12 1.25C12.22 1.25 12.429 1.34662 12.5715 1.51426L21.0715 11.5143C21.3095 11.7943 21.3095 12.2057 21.0715 12.4857L12.5715 22.4857C12.429 22.6534 12.22 22.75 12 22.75C11.78 22.75 11.571 22.6534 11.4285 22.4857L2.92855 12.4857C2.69048 12.2057 2.69048 11.7943 2.92855 11.5143L11.4285 1.51426C11.571 1.34662 11.78 1.25 12 1.25Z',
};

export const IconDiamond01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-01-stroke-rounded IconDiamond01StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-01-duotone-rounded IconDiamond01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-01-twotone-rounded IconDiamond01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-01-solid-rounded IconDiamond01SolidRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-01-bulk-rounded IconDiamond01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-01-stroke-sharp IconDiamond01StrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDiamond01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="diamond-01-solid-sharp IconDiamond01SolidSharp"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDiamond01: TheIconSelfPack = {
  name: 'Diamond01',
  StrokeRounded: IconDiamond01StrokeRounded,
  DuotoneRounded: IconDiamond01DuotoneRounded,
  TwotoneRounded: IconDiamond01TwotoneRounded,
  SolidRounded: IconDiamond01SolidRounded,
  BulkRounded: IconDiamond01BulkRounded,
  StrokeSharp: IconDiamond01StrokeSharp,
  SolidSharp: IconDiamond01SolidSharp,
};