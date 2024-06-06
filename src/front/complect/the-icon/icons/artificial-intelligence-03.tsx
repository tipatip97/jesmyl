import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 22V21.5C16 20.3954 16.9321 19.5005 17.9223 19.011C18.8846 18.5354 19.6943 17.7511 19.7965 16.8313L20 15L22 14L19.5 10.25C19.5 5.69365 15.8063 2 11.25 2C10.096 2 8.99733 2.23694 8 2.66482M6.5 16.9962V22M6.5 16.9962C5.13927 16.0364 4.08188 14.6752 3.5 13.085M6.5 16.9962C7.25065 17.5257 8.09362 17.9331 9 18.1895',
  d2: 'M2.75 3.25L6 5.5H10M3.5 3.25C3.5 3.66421 3.16421 4 2.75 4C2.33579 4 2 3.66421 2 3.25C2 2.83579 2.33579 2.5 2.75 2.5C3.16421 2.5 3.5 2.83579 3.5 3.25Z',
  d3: 'M2.75 8.75H10M3.5 8.75C3.5 9.16421 3.16421 9.5 2.75 9.5C2.33579 9.5 2 9.16421 2 8.75C2 8.33579 2.33579 8 2.75 8C3.16421 8 3.5 8.33579 3.5 8.75Z',
  d4: 'M11.25 2C6.69365 2 3 5.69365 3 10.25C3 13.0379 4.38283 15.5028 6.5 16.9962V22H16V21.5C16 20.3954 16.9321 19.5005 17.9223 19.011C18.8846 18.5354 19.6943 17.7511 19.7965 16.8313L20 15L22 14L19.5 10.25C19.5 5.69365 15.8063 2 11.25 2Z',
  d5: 'M1.25 3.25C1.25 2.42157 1.92157 1.75 2.75 1.75C3.57843 1.75 4.25 2.42157 4.25 3.25C4.25 3.29136 4.24833 3.33232 4.24504 3.37283L6.23428 4.75H10C10.4142 4.75 10.75 5.08579 10.75 5.5C10.75 5.91421 10.4142 6.25 10 6.25H6C5.84745 6.25 5.69852 6.20348 5.57309 6.11664L3.39149 4.6063C3.19699 4.69845 2.97952 4.75 2.75 4.75C1.92157 4.75 1.25 4.07843 1.25 3.25Z',
  d6: 'M1.25 8.75C1.25 7.92157 1.92157 7.25 2.75 7.25C3.30521 7.25 3.78997 7.55165 4.04933 8H10C10.4142 8 10.75 8.33579 10.75 8.75C10.75 9.16421 10.4142 9.5 10 9.5H4.04933C3.78997 9.94835 3.30521 10.25 2.75 10.25C1.92157 10.25 1.25 9.57843 1.25 8.75Z',
  d7: 'M2.37109 11.7262C2.7491 14.0163 3.99173 16.0147 5.75056 17.3744V22C5.75056 22.4142 6.08635 22.75 6.50056 22.75H16.0006C16.4148 22.75 16.7506 22.4142 16.7506 22V21.5C16.7506 20.8308 17.3506 20.1305 18.2552 19.6834C19.3051 19.1644 20.3982 18.2128 20.5425 16.9141L20.7009 15.4883L22.336 14.6708C22.5284 14.5746 22.6702 14.4004 22.7254 14.1925C22.7807 13.9846 22.7439 13.763 22.6246 13.584L20.2476 10.0185C20.1249 5.15495 16.1437 1.25 11.2506 1.25C9.34644 1.25 7.58043 1.84132 6.12614 2.85035L6.70341 3.25H10.0006C11.2432 3.25 12.2506 4.25736 12.2506 5.5C12.2506 6.13881 11.9843 6.71544 11.5568 7.125C11.9843 7.53456 12.2506 8.11119 12.2506 8.75C12.2506 9.99264 11.2432 11 10.0006 11H4.7346C4.20663 11.4658 3.5122 11.75 2.75056 11.75C2.62203 11.75 2.49538 11.7419 2.37109 11.7262Z',
  d8: 'M2.73308 3.25L5.90341 5.5H9.80535M3.46469 3.25C3.46469 3.66421 3.13714 4 2.73308 4C2.32902 4 2.00146 3.66421 2.00146 3.25C2.00146 2.83579 2.32902 2.5 2.73308 2.5C3.13714 2.5 3.46469 2.83579 3.46469 3.25Z',
  d9: 'M2.73308 8.75H9.80535M3.46469 8.75C3.46469 9.16421 3.13714 9.5 2.73308 9.5C2.32902 9.5 2.00146 9.16421 2.00146 8.75C2.00146 8.33579 2.32902 8 2.73308 8C3.13714 8 3.46469 8.33579 3.46469 8.75Z',
  d10: 'M15.809 21.9489V19.43L18.8783 18.5527L19.7487 14.9512L21.9451 14.0452C21.9792 14.0311 22.0038 13.9987 21.9976 13.9621C21.994 13.9407 21.987 13.9172 21.9735 13.8977L20.7107 12.2731L19.2906 10.2414C19.2906 5.71914 15.8554 2 11.2823 2C10.0701 2 8.93421 2.26503 7.91937 2.73883M6.46335 22V16.9876M8.9375 18.1833C6.36124 17.4428 4.33557 15.4782 3.46436 12.9831',
  d11: 'M1.25 3.25C1.25 2.42157 1.92157 1.75 2.75 1.75C3.57843 1.75 4.25 2.42157 4.25 3.25C4.25 3.29136 4.24833 3.33232 4.24504 3.37283L6.23428 4.75H10V6.25H6C5.84745 6.25 5.69852 6.20348 5.57309 6.11664L3.39149 4.6063C3.19699 4.69845 2.97952 4.75 2.75 4.75C1.92157 4.75 1.25 4.07843 1.25 3.25Z',
  d12: 'M1.25 8.75C1.25 7.92157 1.92157 7.25 2.75 7.25C3.30521 7.25 3.78997 7.55165 4.04933 8H10V9.5H4.04933C3.78997 9.94835 3.30521 10.25 2.75 10.25C1.92157 10.25 1.25 9.57843 1.25 8.75Z',
  d13: 'M2.37109 11.7262C2.7491 14.0163 3.99173 16.0147 5.75056 17.3744V22.75H16.7506V20.0406L19.613 19.0864L20.6311 15.5233L22.336 14.6708C22.5284 14.5746 22.6702 14.4004 22.7254 14.1925C22.7807 13.9846 22.7439 13.763 22.6246 13.584L20.2476 10.0185C20.1249 5.15495 16.1437 1.25 11.2506 1.25C9.34644 1.25 7.58043 1.84132 6.12614 2.85035L6.70341 3.25H11.5006V11H4.7346C4.20663 11.4658 3.5122 11.75 2.75056 11.75C2.62203 11.75 2.49538 11.7419 2.37109 11.7262Z',
};

export const IconArtificialIntelligence03StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-03-stroke-rounded IconArtificialIntelligence03StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence03DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-03-duotone-rounded IconArtificialIntelligence03DuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence03TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-03-twotone-rounded IconArtificialIntelligence03TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence03SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-03-solid-rounded IconArtificialIntelligence03SolidRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence03BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-03-bulk-rounded IconArtificialIntelligence03BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence03StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-03-stroke-sharp IconArtificialIntelligence03StrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconArtificialIntelligence03SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="artificial-intelligence-03-solid-sharp IconArtificialIntelligence03SolidSharp"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfArtificialIntelligence03: TheIconSelfPack = {
  name: 'ArtificialIntelligence03',
  StrokeRounded: IconArtificialIntelligence03StrokeRounded,
  DuotoneRounded: IconArtificialIntelligence03DuotoneRounded,
  TwotoneRounded: IconArtificialIntelligence03TwotoneRounded,
  SolidRounded: IconArtificialIntelligence03SolidRounded,
  BulkRounded: IconArtificialIntelligence03BulkRounded,
  StrokeSharp: IconArtificialIntelligence03StrokeSharp,
  SolidSharp: IconArtificialIntelligence03SolidSharp,
};