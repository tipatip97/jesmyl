import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 3V17M19 10H5',
  d2: 'M19 21H5',
  d3: 'M12 1.75C12.6904 1.75 13.25 2.30964 13.25 3V8.75H19C19.6904 8.75 20.25 9.30964 20.25 10C20.25 10.6904 19.6904 11.25 19 11.25H13.25V17C13.25 17.6904 12.6904 18.25 12 18.25C11.3096 18.25 10.75 17.6904 10.75 17V11.25H5C4.30964 11.25 3.75 10.6904 3.75 10C3.75 9.30964 4.30964 8.75 5 8.75H10.75V3C10.75 2.30964 11.3096 1.75 12 1.75Z',
  d4: 'M20.25 21C20.25 21.6904 19.6904 22.25 19 22.25H5C4.30964 22.25 3.75 21.6904 3.75 21C3.75 20.3096 4.30964 19.75 5 19.75H19C19.6904 19.75 20.25 20.3096 20.25 21Z',
  d5: 'M10.75 8.25V2.5H13.25V8.25H19V10.75H13.25V16.5H10.75V10.75H5V8.25H10.75Z',
  d6: 'M5 19H19V21.5H5V19Z',
};

export const IconPlusMinus01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-01-stroke-rounded IconPlusMinus01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconPlusMinus01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-01-duotone-rounded IconPlusMinus01DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPlusMinus01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-01-twotone-rounded IconPlusMinus01TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlusMinus01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-01-solid-rounded IconPlusMinus01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlusMinus01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-01-bulk-rounded IconPlusMinus01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPlusMinus01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-01-stroke-sharp IconPlusMinus01StrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPlusMinus01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="plus-minus-01-solid-sharp IconPlusMinus01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfPlusMinus01: TheIconSelfPack = {
  name: 'PlusMinus01',
  StrokeRounded: IconPlusMinus01StrokeRounded,
  DuotoneRounded: IconPlusMinus01DuotoneRounded,
  TwotoneRounded: IconPlusMinus01TwotoneRounded,
  SolidRounded: IconPlusMinus01SolidRounded,
  BulkRounded: IconPlusMinus01BulkRounded,
  StrokeSharp: IconPlusMinus01StrokeSharp,
  SolidSharp: IconPlusMinus01SolidSharp,
};