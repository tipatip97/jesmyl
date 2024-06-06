import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z',
  d2: 'M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z',
  d3: 'M15 1.25C15.3507 1.25 15.6546 1.49305 15.7317 1.83518L16.2704 4.22676C16.6637 5.97278 18.0272 7.33629 19.7732 7.7296L22.1648 8.26833C22.507 8.3454 22.75 8.64929 22.75 9C22.75 9.35071 22.507 9.6546 22.1648 9.73167L19.7732 10.2704C18.0272 10.6637 16.6637 12.0272 16.2704 13.7732L15.7317 16.1648C15.6546 16.507 15.3507 16.75 15 16.75C14.6493 16.75 14.3454 16.507 14.2683 16.1648L13.7296 13.7732C13.3363 12.0272 11.9728 10.6637 10.2268 10.2704L7.83518 9.73167C7.49305 9.6546 7.25 9.35071 7.25 9C7.25 8.64929 7.49305 8.3454 7.83518 8.26833L10.2268 7.7296C11.9728 7.33629 13.3363 5.97278 13.7296 4.22676L14.2683 1.83518C14.3454 1.49305 14.6493 1.25 15 1.25Z',
  d4: 'M7 11.25C7.35071 11.25 7.6546 11.493 7.73167 11.8352L8.11647 13.5435C8.37923 14.7099 9.29012 15.6208 10.4565 15.8835L12.1648 16.2683C12.507 16.3454 12.75 16.6493 12.75 17C12.75 17.3507 12.507 17.6546 12.1648 17.7317L10.4565 18.1165C9.29012 18.3792 8.37923 19.2901 8.11647 20.4565L7.73167 22.1648C7.6546 22.507 7.35071 22.75 7 22.75C6.64929 22.75 6.3454 22.507 6.26833 22.1648L5.88353 20.4565C5.62077 19.2901 4.70988 18.3792 3.54345 18.1165L1.83518 17.7317C1.49305 17.6546 1.25 17.3507 1.25 17C1.25 16.6493 1.49305 16.3454 1.83518 16.2683L3.54345 15.8835C4.70988 15.6208 5.62077 14.7099 5.88353 13.5435L6.26833 11.8352C6.3454 11.493 6.64929 11.25 7 11.25Z',
};

export const IconSparklesStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sparkles-stroke-rounded IconSparklesStrokeRounded"
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

export const IconSparklesDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sparkles-duotone-rounded IconSparklesDuotoneRounded"
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

export const IconSparklesTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sparkles-twotone-rounded IconSparklesTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSparklesSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sparkles-solid-rounded IconSparklesSolidRounded"
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

export const IconSparklesBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sparkles-bulk-rounded IconSparklesBulkRounded"
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

export const IconSparklesStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sparkles-stroke-sharp IconSparklesStrokeSharp"
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

export const IconSparklesSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="sparkles-solid-sharp IconSparklesSolidSharp"
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

export const iconPackOfSparkles: TheIconSelfPack = {
  name: 'Sparkles',
  StrokeRounded: IconSparklesStrokeRounded,
  DuotoneRounded: IconSparklesDuotoneRounded,
  TwotoneRounded: IconSparklesTwotoneRounded,
  SolidRounded: IconSparklesSolidRounded,
  BulkRounded: IconSparklesBulkRounded,
  StrokeSharp: IconSparklesStrokeSharp,
  SolidSharp: IconSparklesSolidSharp,
};