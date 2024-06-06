import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 19C18 19 13.5811 14 12 14C10.4188 14 6 19 6 19',
  d2: 'M18 5.00004C18 5.00004 13.5811 9.99999 12 10C10.4188 10 6 5 6 5',
  d3: 'M5.08823 19.411C5.24986 19.7695 5.60662 20 5.99989 20L17.9999 20C18.3932 20 18.7499 19.7694 18.9115 19.4109C19.0732 19.0524 19.0096 18.6324 18.7492 18.3377L18.7476 18.336C18.7119 18.2961 18.6104 18.1826 18.5479 18.1135C18.4208 17.9734 18.2383 17.774 18.0146 17.5352C17.5681 17.0584 16.9533 16.4197 16.2852 15.7785C15.6214 15.1414 14.8849 14.4823 14.1973 13.976C13.8541 13.7233 13.5017 13.4927 13.1605 13.3213C12.8399 13.1602 12.4304 13 11.9998 13C11.5693 13 11.1598 13.1602 10.8392 13.3213C10.498 13.4927 10.1455 13.7233 9.80239 13.976C9.11481 14.4823 8.37831 15.1414 7.71448 15.7785C7.0464 16.4198 6.43162 17.0584 5.98512 17.5352C5.76143 17.7741 5.57893 17.9734 5.4519 18.1136C5.38906 18.1829 5.28743 18.2966 5.25217 18.336L5.251 18.3373C4.99057 18.632 4.92661 19.0524 5.08823 19.411Z',
  d4: 'M5.08823 4.58903C5.24986 4.23051 5.60662 4 5.99989 4L17.9999 4.00004C18.3932 4.00004 18.7499 4.23055 18.9115 4.58908C19.0732 4.94762 19.0096 5.36759 18.7492 5.66227L18.7476 5.66404C18.7119 5.70391 18.6104 5.81741 18.5479 5.88645C18.4208 6.02662 18.2383 6.22597 18.0146 6.46483C17.5681 6.94162 16.9533 7.58026 16.2852 8.22148C15.6214 8.85862 14.8849 9.51774 14.1973 10.024C13.8541 10.2767 13.5017 10.5073 13.1605 10.6787C12.8399 10.8398 12.4304 11 11.9998 11C11.5693 11 11.1598 10.8398 10.8392 10.6787C10.498 10.5073 10.1455 10.2767 9.80239 10.024C9.11481 9.51774 8.37831 8.8586 7.71448 8.22146C7.0464 7.58023 6.43162 6.94159 5.98512 6.46479C5.76143 6.22592 5.57893 6.02657 5.4519 5.88641C5.38906 5.81708 5.28743 5.70344 5.25217 5.66401L5.251 5.66271C4.99057 5.36802 4.92661 4.94756 5.08823 4.58903Z',
  d5: 'M6 5L12 10L18 5.00004',
  d6: 'M6 19L12 14L18 19',
  d7: 'M12 10L6 5L18 5.00004L12 10Z',
  d8: 'M12 14L6 19L18 19L12 14Z',
};

export const IconUnfoldLessStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-less-stroke-rounded IconUnfoldLessStrokeRounded"
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

export const IconUnfoldLessDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-less-duotone-rounded IconUnfoldLessDuotoneRounded"
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

export const IconUnfoldLessTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-less-twotone-rounded IconUnfoldLessTwotoneRounded"
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

export const IconUnfoldLessSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-less-solid-rounded IconUnfoldLessSolidRounded"
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

export const IconUnfoldLessBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-less-bulk-rounded IconUnfoldLessBulkRounded"
    >
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUnfoldLessStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-less-stroke-sharp IconUnfoldLessStrokeSharp"
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

export const IconUnfoldLessSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="unfold-less-solid-sharp IconUnfoldLessSolidSharp"
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

export const iconPackOfUnfoldLess: TheIconSelfPack = {
  name: 'UnfoldLess',
  StrokeRounded: IconUnfoldLessStrokeRounded,
  DuotoneRounded: IconUnfoldLessDuotoneRounded,
  TwotoneRounded: IconUnfoldLessTwotoneRounded,
  SolidRounded: IconUnfoldLessSolidRounded,
  BulkRounded: IconUnfoldLessBulkRounded,
  StrokeSharp: IconUnfoldLessStrokeSharp,
  SolidSharp: IconUnfoldLessSolidSharp,
};