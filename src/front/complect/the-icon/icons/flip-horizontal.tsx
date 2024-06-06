import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.29516 14.4204C7.65364 13.4668 8.33288 12.99 8.46522 12.3436C8.51159 12.1172 8.51159 11.8828 8.46522 11.6563C8.33288 11.01 7.65364 10.5332 6.29516 9.57959C4.65002 8.42475 3.82745 7.84734 3.15323 8.03482C2.91938 8.09984 2.70324 8.22164 2.52214 8.39045C2 8.87715 2 9.9181 2 12C2 14.0819 2 15.1229 2.52214 15.6096C2.70324 15.7784 2.91938 15.9002 3.15323 15.9652C3.82745 16.1527 4.65003 15.5752 6.29516 14.4204Z',
  d2: 'M17.7048 9.57959C16.3464 10.5332 15.6671 11.01 15.5348 11.6564C15.4884 11.8828 15.4884 12.1172 15.5348 12.3436C15.6671 12.99 16.3464 13.4668 17.7048 14.4204C19.35 15.5752 20.1725 16.1527 20.8468 15.9652C21.0806 15.9002 21.2968 15.7784 21.4779 15.6096C22 15.1229 22 14.0819 22 12C22 9.9181 22 8.87715 21.4779 8.39045C21.2968 8.22164 21.0806 8.09984 20.8468 8.03482C20.1725 7.84734 19.35 8.42476 17.7048 9.57959Z',
  d3: 'M12 14V10M12 6.5V3M12 21V17.5',
  d4: 'M17.7048 9.57958C16.3464 10.5332 15.6671 11.01 15.5348 11.6564C15.4884 11.8828 15.4884 12.1172 15.5348 12.3436C15.6671 12.99 16.3464 13.4668 17.7048 14.4204C19.35 15.5752 20.1725 16.1527 20.8468 15.9652C21.0806 15.9002 21.2968 15.7784 21.4779 15.6096C22 15.1229 22 14.0819 22 12C22 9.9181 22 8.87715 21.4779 8.39045C21.2968 8.22164 21.0806 8.09984 20.8468 8.03482C20.1725 7.84734 19.35 8.42476 17.7048 9.57958Z',
  d5: 'M22.75 12.0479C22.75 13.0483 22.75 13.8635 22.68 14.4869C22.6101 15.1098 22.4552 15.724 21.9892 16.1584C21.7219 16.4075 21.3999 16.59 21.0477 16.688C20.4207 16.8623 19.8238 16.6455 19.2859 16.3576C18.7502 16.0708 17.2356 15.0075 17.2356 15.0075L17.2356 15.0075C16.589 14.5537 16.0491 14.1747 15.6595 13.8255C15.2552 13.4632 14.9135 13.0487 14.8 12.4943C14.7333 12.1685 14.7333 11.8319 14.8 11.5061C14.9135 10.9517 15.2552 10.5372 15.6595 10.1749C16.0491 9.82567 16.589 9.44668 17.2356 8.99284C17.2356 8.99284 18.7502 7.92961 19.2859 7.6428C19.8238 7.35489 20.4207 7.13807 21.0477 7.31243C21.3999 7.41035 21.7219 7.59286 21.9892 7.84202C22.4552 8.27638 22.6101 8.89061 22.68 9.51354C22.75 10.1368 22.75 10.9521 22.75 11.9525L22.75 11.9525L22.75 12.0479L22.75 12.0479Z',
  d6: 'M1.25 12.0479C1.24998 13.0483 1.24997 13.8635 1.31995 14.4869C1.38989 15.1098 1.54476 15.724 2.01076 16.1584C2.27806 16.4075 2.60012 16.59 2.9523 16.688C3.57932 16.8623 4.17619 16.6455 4.71405 16.3576C5.24983 16.0708 6.76442 15.0075 6.76442 15.0075L6.76443 15.0075C7.41099 14.5537 7.95093 14.1747 8.34055 13.8255C8.7448 13.4632 9.08646 13.0487 9.19998 12.4943C9.26668 12.1685 9.26668 11.8319 9.19998 11.5061C9.08646 10.9517 8.7448 10.5372 8.34055 10.1749C7.95092 9.82567 7.41098 9.44668 6.76441 8.99284C6.76441 8.99284 5.24984 7.92961 4.71406 7.6428C4.17619 7.35489 3.57933 7.13807 2.95231 7.31243C2.60013 7.41035 2.27806 7.59286 2.01076 7.84202C1.54476 8.27638 1.38989 8.89061 1.31995 9.51354C1.24997 10.1368 1.24998 10.9521 1.25 11.9525L1.25 11.9525L1.25 12.0479L1.25 12.0479Z',
  d7: 'M12 2C12.5523 2 13 2.44772 13 3L13 6.5C13 7.05228 12.5523 7.5 12 7.5C11.4477 7.5 11 7.05228 11 6.5L11 3C11 2.44772 11.4477 2 12 2ZM12 9C12.5523 9 13 9.44772 13 10L13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L11 10C11 9.44772 11.4477 9 12 9ZM12 16.5C12.5523 16.5 13 16.9477 13 17.5L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21L11 17.5C11 16.9477 11.4477 16.5 12 16.5Z',
  d8: 'M1.99707 17L8.99707 12L1.99707 7L1.99707 17Z',
  d9: 'M21.9971 17L14.9971 12L21.9971 7V17Z',
  d10: 'M11.9971 10L11.9971 14M11.9971 17L11.9971 21M11.9971 3L11.9971 7',
  d11: 'M1.65388 6.33313C1.90369 6.20457 2.20439 6.22641 2.433 6.3897L9.433 11.3897C9.6301 11.5305 9.74707 11.7578 9.74707 12C9.74707 12.2422 9.6301 12.4695 9.433 12.6103L2.433 17.6103C2.20439 17.7736 1.90369 17.7954 1.65388 17.6669C1.40408 17.5383 1.24707 17.2809 1.24707 17V7C1.24707 6.71906 1.40408 6.46168 1.65388 6.33313Z',
  d12: 'M22.3403 6.33313C22.5901 6.46168 22.7471 6.71906 22.7471 7V17C22.7471 17.2809 22.5901 17.5383 22.3403 17.6669C22.0905 17.7954 21.7898 17.7736 21.5611 17.6103L14.5611 12.6103C14.364 12.4695 14.2471 12.2422 14.2471 12C14.2471 11.7578 14.364 11.5305 14.5611 11.3897L21.5611 6.3897C21.7898 6.22641 22.0905 6.20457 22.3403 6.33313Z',
  d13: 'M10.9971 7L10.9971 3H12.9971L12.9971 7H10.9971ZM10.9971 14L10.9971 10H12.9971V14H10.9971ZM10.9971 21L10.9971 17H12.9971V21H10.9971Z',
};

export const IconFlipHorizontalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-horizontal-stroke-rounded IconFlipHorizontalStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFlipHorizontalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-horizontal-duotone-rounded IconFlipHorizontalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconFlipHorizontalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-horizontal-twotone-rounded IconFlipHorizontalTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconFlipHorizontalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-horizontal-solid-rounded IconFlipHorizontalSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconFlipHorizontalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-horizontal-bulk-rounded IconFlipHorizontalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconFlipHorizontalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-horizontal-stroke-sharp IconFlipHorizontalStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipHorizontalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-horizontal-solid-sharp IconFlipHorizontalSolidSharp"
    >
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFlipHorizontal: TheIconSelfPack = {
  name: 'FlipHorizontal',
  StrokeRounded: IconFlipHorizontalStrokeRounded,
  DuotoneRounded: IconFlipHorizontalDuotoneRounded,
  TwotoneRounded: IconFlipHorizontalTwotoneRounded,
  SolidRounded: IconFlipHorizontalSolidRounded,
  BulkRounded: IconFlipHorizontalBulkRounded,
  StrokeSharp: IconFlipHorizontalStrokeSharp,
  SolidSharp: IconFlipHorizontalSolidSharp,
};