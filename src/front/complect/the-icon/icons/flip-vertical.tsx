import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.57959 6.29516C10.5332 7.65364 11.01 8.33288 11.6564 8.46522C11.8828 8.51159 12.1172 8.51159 12.3436 8.46522C12.99 8.33288 13.4668 7.65364 14.4204 6.29516C15.5752 4.65002 16.1527 3.82745 15.9652 3.15323C15.9002 2.91938 15.7784 2.70324 15.6096 2.52214C15.1229 2 14.0819 2 12 2C9.9181 2 8.87715 2 8.39045 2.52214C8.22164 2.70324 8.09984 2.91938 8.03482 3.15323C7.84734 3.82745 8.42476 4.65003 9.57959 6.29516Z',
  d2: 'M14.4204 17.7048C13.4668 16.3464 12.99 15.6671 12.3436 15.5348C12.1172 15.4884 11.8828 15.4884 11.6564 15.5348C11.01 15.6671 10.5332 16.3464 9.57959 17.7048C8.42475 19.35 7.84734 20.1725 8.03482 20.8468C8.09984 21.0806 8.22164 21.2968 8.39045 21.4779C8.87715 22 9.9181 22 12 22C14.0819 22 15.1229 22 15.6095 21.4779C15.7784 21.2968 15.9002 21.0806 15.9652 20.8468C16.1527 20.1725 15.5752 19.35 14.4204 17.7048Z',
  d3: 'M10 12H14M17.5 12H21M3 12H6.5',
  d4: 'M12.0479 1.25C13.0483 1.24998 13.8635 1.24997 14.4869 1.31995C15.1098 1.38989 15.724 1.54476 16.1584 2.01076C16.4075 2.27806 16.59 2.60012 16.688 2.9523C16.8623 3.57932 16.6455 4.17619 16.3576 4.71406C16.0708 5.24983 15.0075 6.76442 15.0075 6.76442L15.0075 6.76443C14.5537 7.41099 14.1747 7.95093 13.8255 8.34055C13.4632 8.7448 13.0487 9.08646 12.4943 9.19998C12.1685 9.26668 11.8319 9.26668 11.5061 9.19998C10.9517 9.08646 10.5372 8.7448 10.1749 8.34055C9.82567 7.95092 9.44668 7.41098 8.99284 6.76441C8.99284 6.76441 7.92961 5.24984 7.6428 4.71406C7.35489 4.17619 7.13807 3.57933 7.31243 2.95231C7.41035 2.60013 7.59286 2.27806 7.84202 2.01076C8.27638 1.54476 8.89061 1.38989 9.51354 1.31995C10.1368 1.24997 10.9521 1.24998 11.9525 1.25H11.9525H12.0479H12.0479Z',
  d5: 'M12.0479 22.75C13.0483 22.75 13.8635 22.75 14.4869 22.68C15.1098 22.6101 15.724 22.4552 16.1584 21.9892C16.4075 21.7219 16.59 21.3999 16.688 21.0477C16.8623 20.4207 16.6455 19.8238 16.3576 19.2859C16.0708 18.7502 15.0075 17.2356 15.0075 17.2356L15.0075 17.2356C14.5537 16.589 14.1747 16.0491 13.8255 15.6595C13.4632 15.2552 13.0487 14.9135 12.4943 14.8C12.1685 14.7333 11.8319 14.7333 11.5061 14.8C10.9517 14.9135 10.5372 15.2552 10.1749 15.6595C9.82567 16.0491 9.44668 16.589 8.99284 17.2356C8.99284 17.2356 7.92961 18.7502 7.6428 19.2859C7.35489 19.8238 7.13807 20.4207 7.31243 21.0477C7.41035 21.3999 7.59286 21.7219 7.84202 21.9892C8.27638 22.4552 8.89061 22.6101 9.51354 22.68C10.1368 22.75 10.9521 22.75 11.9525 22.75H11.9525H12.0479H12.0479Z',
  d6: 'M2 12C2 11.4477 2.44772 11 3 11H6.5C7.05228 11 7.5 11.4477 7.5 12C7.5 12.5523 7.05228 13 6.5 13H3C2.44772 13 2 12.5523 2 12ZM9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12ZM16.5 12C16.5 11.4477 16.9477 11 17.5 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H17.5C16.9477 13 16.5 12.5523 16.5 12Z',
  d7: 'M17 22L12 15L7 22H17Z',
  d8: 'M17 2L12 9L7 2H17Z',
  d9: 'M10 12H14M17 12H21M3 12H7',
  d10: 'M12 14.25C12.2422 14.25 12.4695 14.367 12.6103 14.5641L17.6103 21.5641C17.7736 21.7927 17.7954 22.0934 17.6669 22.3432C17.5383 22.593 17.2809 22.75 17 22.75H7C6.71906 22.75 6.46168 22.593 6.33313 22.3432C6.20457 22.0934 6.22641 21.7927 6.3897 21.5641L11.3897 14.5641C11.5305 14.367 11.7578 14.25 12 14.25Z',
  d11: 'M6.33313 1.65681C6.46168 1.40701 6.71906 1.25 7 1.25H17C17.2809 1.25 17.5383 1.40701 17.6669 1.65681C17.7954 1.90662 17.7736 2.20732 17.6103 2.43593L12.6103 9.43593C12.4695 9.63303 12.2422 9.75 12 9.75C11.7578 9.75 11.5305 9.63303 11.3897 9.43593L6.3897 2.43593C6.22641 2.20732 6.20457 1.90662 6.33313 1.65681Z',
  d12: 'M7 13H3V11H7V13ZM14 13H10V11H14V13ZM21 13H17V11H21V13Z',
};

export const IconFlipVerticalStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-vertical-stroke-rounded IconFlipVerticalStrokeRounded"
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

export const IconFlipVerticalDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-vertical-duotone-rounded IconFlipVerticalDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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

export const IconFlipVerticalTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-vertical-twotone-rounded IconFlipVerticalTwotoneRounded"
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

export const IconFlipVerticalSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-vertical-solid-rounded IconFlipVerticalSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconFlipVerticalBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-vertical-bulk-rounded IconFlipVerticalBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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

export const IconFlipVerticalStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-vertical-stroke-sharp IconFlipVerticalStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFlipVerticalSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="flip-vertical-solid-sharp IconFlipVerticalSolidSharp"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfFlipVertical: TheIconSelfPack = {
  name: 'FlipVertical',
  StrokeRounded: IconFlipVerticalStrokeRounded,
  DuotoneRounded: IconFlipVerticalDuotoneRounded,
  TwotoneRounded: IconFlipVerticalTwotoneRounded,
  SolidRounded: IconFlipVerticalSolidRounded,
  BulkRounded: IconFlipVerticalBulkRounded,
  StrokeSharp: IconFlipVerticalStrokeSharp,
  SolidSharp: IconFlipVerticalSolidSharp,
};