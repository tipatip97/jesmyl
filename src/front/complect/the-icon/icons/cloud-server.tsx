import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.4776 8.00005C17.485 8.00002 17.4925 8 17.5 8C19.9853 8 22 10.0147 22 12.5C22 14.9853 19.9853 17 17.5 17H7C4.23858 17 2 14.7614 2 12C2 9.40034 3.98398 7.26407 6.52042 7.0227M17.4776 8.00005C17.4924 7.83536 17.5 7.66856 17.5 7.5C17.5 4.46243 15.0376 2 12 2C9.12324 2 6.76233 4.20862 6.52042 7.0227M17.4776 8.00005C17.3753 9.1345 16.9286 10.1696 16.2428 11M6.52042 7.0227C6.67826 7.00768 6.83823 7 7 7C8.12582 7 9.16474 7.37209 10.0005 8',
  d2: 'M14 20.75V20.5C14 19.9477 13.5523 19.5 13 19.5H12M14 20.75V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21V20.75M14 20.75H19M10 20.75V20.5C10 19.9477 10.4477 19.5 11 19.5H12M10 20.75H5M12 19.5V17',
  d3: 'M17.5 7.5C17.5 4.46243 15.0376 2 12 2C9.12324 2 6.76233 4.20862 6.52042 7.0227C3.98398 7.26407 2 9.40034 2 12C2 14.7614 4.23858 17 7 17H17.5C19.9853 17 22 14.9853 22 12.5C22 10.0147 19.9853 8 17.5 8L17.4776 8.00005C17.4924 7.83536 17.5 7.66856 17.5 7.5Z',
  d4: 'M1.25 12C1.25 9.21699 3.22664 6.89643 5.853 6.36454C6.38731 3.45456 8.93585 1.25 12 1.25C15.3858 1.25 18.1428 3.94224 18.2469 7.30273C20.7927 7.66534 22.75 9.85409 22.75 12.5C22.75 15.3995 20.3995 17.75 17.5 17.75H7C3.82436 17.75 1.25 15.1756 1.25 12Z',
  d5: 'M12 16.25C12.4142 16.25 12.75 16.5858 12.75 17V18.75H13C13.7928 18.75 14.4624 19.2771 14.6775 20H19C19.4142 20 19.75 20.3358 19.75 20.75C19.75 21.1642 19.4142 21.5 19 21.5H14.6775C14.4624 22.2229 13.7928 22.75 13 22.75H11C10.2072 22.75 9.53761 22.2229 9.32247 21.5H5C4.58579 21.5 4.25 21.1642 4.25 20.75C4.25 20.3358 4.58579 20 5 20H9.32247C9.53761 19.2771 10.2072 18.75 11 18.75H11.25V17C11.25 16.5858 11.5858 16.25 12 16.25Z',
  d6: 'M11.25 17.75V18.75H11C10.2072 18.75 9.53761 19.2771 9.32247 20H5C4.58579 20 4.25 20.3358 4.25 20.75C4.25 21.1642 4.58579 21.5 5 21.5H9.32247C9.53761 22.2229 10.2072 22.75 11 22.75H13C13.7928 22.75 14.4624 22.2229 14.6775 21.5H19C19.4142 21.5 19.75 21.1642 19.75 20.75C19.75 20.3358 19.4142 20 19 20H14.6775C14.4624 19.2771 13.7928 18.75 13 18.75H12.75V17.75H11.25Z',
  d7: 'M14 20.75V19.5H12M14 20.75V22H10V20.75M14 20.75H19M10 20.75V19.5H12M10 20.75H5M12 19.5V17',
  d8: 'M5 20H9.25V18.75H11.25V17H12.75V18.75H14.75V20H19V21.5H14.75V22.75H9.25V21.5H5V20Z',
} as const;

export const IconCloudServerStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-server-stroke-rounded IconCloudServerStrokeRounded"
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

export const IconCloudServerDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-server-duotone-rounded IconCloudServerDuotoneRounded"
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
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconCloudServerTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-server-twotone-rounded IconCloudServerTwotoneRounded"
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

export const IconCloudServerSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-server-solid-rounded IconCloudServerSolidRounded"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudServerBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-server-bulk-rounded IconCloudServerBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudServerStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-server-stroke-sharp IconCloudServerStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudServerSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-server-solid-sharp IconCloudServerSolidSharp"
    >
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCloudServer: TheIconSelfPack = {
  name: 'CloudServer',
  StrokeRounded: IconCloudServerStrokeRounded,
  DuotoneRounded: IconCloudServerDuotoneRounded,
  TwotoneRounded: IconCloudServerTwotoneRounded,
  SolidRounded: IconCloudServerSolidRounded,
  BulkRounded: IconCloudServerBulkRounded,
  StrokeSharp: IconCloudServerStrokeSharp,
  SolidSharp: IconCloudServerSolidSharp,
};