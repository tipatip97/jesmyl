import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 14C18 14 13.5811 19 12 19C10.4188 19 6 14 6 14',
  d2: 'M18 9.99996C18 9.99996 13.5811 5.00001 12 5C10.4188 4.99999 6 10 6 10',
  d3: 'M5.08823 10.411C5.24986 10.7695 5.60662 11 5.99989 11L17.9999 11C18.3932 11 18.7499 10.7694 18.9115 10.4109C19.0732 10.0524 19.0096 9.63241 18.7492 9.33773L18.7476 9.33596C18.7119 9.29609 18.6104 9.18259 18.5479 9.11355C18.4208 8.97338 18.2383 8.77403 18.0146 8.53517C17.5681 8.05838 16.9533 7.41974 16.2852 6.77852C15.6214 6.14138 14.8849 5.48226 14.1973 4.97599C13.8541 4.72332 13.5017 4.49266 13.1605 4.32127C12.8399 4.16021 12.4304 4 11.9998 4C11.5693 4 11.1598 4.1602 10.8392 4.32126C10.498 4.49265 10.1455 4.72332 9.80239 4.97599C9.11481 5.48226 8.37831 6.1414 7.71448 6.77854C7.0464 7.41977 6.43162 8.05841 5.98512 8.53521C5.76143 8.77408 5.57893 8.97343 5.4519 9.11359C5.38906 9.18292 5.28743 9.29656 5.25217 9.33599L5.251 9.33729C4.99057 9.63198 4.92661 10.0524 5.08823 10.411Z',
  d4: 'M5.08823 13.589C5.24986 13.2305 5.60662 13 5.99989 13L17.9999 13C18.3932 13 18.7499 13.2306 18.9115 13.5891C19.0732 13.9476 19.0096 14.3676 18.7492 14.6623L18.7476 14.664C18.7119 14.7039 18.6104 14.8174 18.5479 14.8865C18.4208 15.0266 18.2383 15.226 18.0146 15.4648C17.5681 15.9416 16.9533 16.5803 16.2852 17.2215C15.6214 17.8586 14.8849 18.5177 14.1973 19.024C13.8541 19.2767 13.5017 19.5073 13.1605 19.6787C12.8399 19.8398 12.4304 20 11.9998 20C11.5693 20 11.1598 19.8398 10.8392 19.6787C10.498 19.5073 10.1455 19.2767 9.80239 19.024C9.11481 18.5177 8.37831 17.8586 7.71448 17.2215C7.0464 16.5802 6.43162 15.9416 5.98512 15.4648C5.76143 15.2259 5.57893 15.0266 5.4519 14.8864C5.38906 14.8171 5.28743 14.7034 5.25217 14.664L5.251 14.6627C4.99057 14.368 4.92661 13.9476 5.08823 13.589Z',
  d5: 'M18 9.99996L12 5L6 10',
  d6: 'M18 14L12 19L6 14',
  d7: 'M12 5L6 10L18 9.99996L12 5Z',
  d8: 'M12 19L6 14L18 14L12 19Z',
};

export const IconUnfoldMoreStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-more-stroke-rounded IconUnfoldMoreStrokeRounded"
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

export const IconUnfoldMoreDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-more-duotone-rounded IconUnfoldMoreDuotoneRounded"
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

export const IconUnfoldMoreTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-more-twotone-rounded IconUnfoldMoreTwotoneRounded"
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

export const IconUnfoldMoreSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-more-solid-rounded IconUnfoldMoreSolidRounded"
    >
      <path 
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

export const IconUnfoldMoreBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-more-bulk-rounded IconUnfoldMoreBulkRounded"
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

export const IconUnfoldMoreStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-more-stroke-sharp IconUnfoldMoreStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnfoldMoreSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-more-solid-sharp IconUnfoldMoreSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUnfoldMore: TheIconSelfPack = {
  name: 'UnfoldMore',
  StrokeRounded: IconUnfoldMoreStrokeRounded,
  DuotoneRounded: IconUnfoldMoreDuotoneRounded,
  TwotoneRounded: IconUnfoldMoreTwotoneRounded,
  SolidRounded: IconUnfoldMoreSolidRounded,
  BulkRounded: IconUnfoldMoreBulkRounded,
  StrokeSharp: IconUnfoldMoreStrokeSharp,
  SolidSharp: IconUnfoldMoreSolidSharp,
};