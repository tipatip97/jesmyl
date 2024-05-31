import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10',
  d2: 'M17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227C3.98398 9.26407 2 11.4003 2 14C2 16.7614 4.23858 19 7 19H17.5C19.9853 19 22 16.9853 22 14.5C22 12.0147 19.9853 10 17.5 10L17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5Z',
  d3: 'M17.4776 10.5001C17.485 10.5 17.4925 10.5 17.5 10.5C19.9853 10.5 22 12.5147 22 15C22 17.4853 19.9853 19.5 17.5 19.5H7C4.23858 19.5 2 17.2614 2 14.5C2 11.9003 3.98398 9.76407 6.52042 9.5227M17.4776 10.5001C17.4924 10.3354 17.5 10.1686 17.5 10C17.5 6.96243 15.0376 4.5 12 4.5C9.12324 4.5 6.76233 6.70862 6.52042 9.5227M17.4776 10.5001C17.3753 11.6345 16.9286 12.6696 16.2428 13.5M6.52042 9.5227C6.67826 9.50768 6.83823 9.5 7 9.5C8.12582 9.5 9.16474 9.87209 10.0005 10.5',
  d4: 'M6.5 9.5227C6.74235 6.70862 9.10766 4.5 11.9898 4.5C15.033 4.5 17.5 6.96243 17.5 10C17.5 11.3296 17.0273 12.5491 16.2405 13.5',
  d5: 'M1.25 14.5C1.25 11.717 3.22664 9.39643 5.853 8.86454C6.38731 5.95456 8.93585 3.75 12 3.75C15.3858 3.75 18.1428 6.44224 18.2469 9.80273C20.7927 10.1653 22.75 12.3541 22.75 15C22.75 17.8995 20.3995 20.25 17.5 20.25H7C3.82436 20.25 1.25 17.6756 1.25 14.5Z',
} as const;

export const IconCloudStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-stroke-rounded IconCloudStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-duotone-rounded IconCloudDuotoneRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconCloudTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-twotone-rounded IconCloudTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCloudSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-solid-rounded IconCloudSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-bulk-rounded IconCloudBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-stroke-sharp IconCloudStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-solid-sharp IconCloudSolidSharp"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCloud: TheIconSelfPack = {
  name: 'Cloud',
  StrokeRounded: IconCloudStrokeRounded,
  DuotoneRounded: IconCloudDuotoneRounded,
  TwotoneRounded: IconCloudTwotoneRounded,
  SolidRounded: IconCloudSolidRounded,
  BulkRounded: IconCloudBulkRounded,
  StrokeSharp: IconCloudStrokeSharp,
  SolidSharp: IconCloudSolidSharp,
};