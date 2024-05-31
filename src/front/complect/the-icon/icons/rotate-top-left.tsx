import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M3 15C3 18.2998 3 19.9497 4.02513 20.9749C5.05025 22 6.70017 22 10 22C13.2998 22 14.9497 22 15.9749 20.9749C17 19.9497 17 18.2998 17 15C17 11.7002 17 10.0503 15.9749 9.02513C14.9497 8 13.2998 8 10 8C6.70017 8 5.05025 8 4.02513 9.02513C3 10.0503 3 11.7002 3 15Z',
  d2: 'M14.4201 2L13.0744 3.11013C12.3581 3.70104 12 3.99649 12 4.36364L13 4.36364C16.7712 4.36364 18.6569 4.36364 19.8284 5.53521C21 6.70678 21 8.59241 21 12.3636V13',
  d3: 'M9.94425 7.25C8.34166 7.24998 7.0627 7.24997 6.05961 7.38483C5.02335 7.52415 4.16994 7.81966 3.4948 8.4948C2.81966 9.16994 2.52415 10.0233 2.38483 11.0596C2.24997 12.0627 2.24998 13.3417 2.25 14.9443V15.0557C2.24998 16.6583 2.24997 17.9373 2.38483 18.9404C2.52415 19.9767 2.81966 20.8301 3.4948 21.5052C4.16994 22.1803 5.02335 22.4759 6.05961 22.6152C7.0627 22.75 8.34166 22.75 9.94426 22.75H10.0557C11.6583 22.75 12.9373 22.75 13.9404 22.6152C14.9767 22.4759 15.8301 22.1803 16.5052 21.5052C17.1803 20.8301 17.4758 19.9767 17.6152 18.9404C17.75 17.9373 17.75 16.6583 17.75 15.0558V15.0557V14.9443V14.9443C17.75 13.3417 17.75 12.0627 17.6152 11.0596C17.4758 10.0233 17.1803 9.16994 16.5052 8.4948C15.8301 7.81966 14.9767 7.52415 13.9404 7.38483C12.9373 7.24997 11.6583 7.24998 10.0558 7.25H10.0557H9.94426H9.94425Z',
  d4: 'M14.9415 1.61367C14.5901 1.18764 13.9598 1.12718 13.5338 1.47864L12.1881 2.58877C12.1737 2.60065 12.1593 2.61252 12.1449 2.62438C11.8244 2.88865 11.5103 3.14769 11.2845 3.39183C11.0377 3.65863 10.75 4.0592 10.75 4.61366C10.75 4.87888 10.8554 5.13323 11.0429 5.32077C11.2304 5.50831 11.4848 5.61366 11.75 5.61366H12.75C14.6639 5.61366 15.9987 5.61579 17.0058 5.75119C17.9842 5.88273 18.5023 6.12333 18.8713 6.49234C19.2403 6.86136 19.4809 7.37946 19.6125 8.35782C19.7479 9.36496 19.75 10.6998 19.75 12.6137V13.25C19.75 13.8023 20.1977 14.25 20.75 14.25C21.3023 14.25 21.75 13.8023 21.75 13.25L21.75 12.5405C21.75 10.717 21.75 9.24728 21.5946 8.09133C21.4333 6.89118 21.0881 5.88069 20.2855 5.07813C19.483 4.27557 18.4725 3.93038 17.2723 3.76903C16.3962 3.65124 15.3399 3.62274 14.0859 3.61585L14.8065 3.02142C15.2325 2.66997 15.293 2.03969 14.9415 1.61367Z',
  d5: 'M16.5 9H3.5V22H16.5V9Z',
  d6: 'M13.4998 2L10.5 5H20.4998V14',
  d7: 'M17.25 9C17.25 8.58579 16.9142 8.25 16.5 8.25H3.5C3.08579 8.25 2.75 8.58579 2.75 9V22C2.75 22.4142 3.08579 22.75 3.5 22.75H16.5C16.9142 22.75 17.25 22.4142 17.25 22V9Z',
  d8: 'M12.6641 1.25L9.5429 4.54291C9.25692 4.82891 9.17137 5.25903 9.32616 5.63269C9.48094 6.00636 9.84557 6.25 10.25 6.25H19.2499V14.25H21.2499V5.25C21.2499 4.69771 20.8021 4.25 20.2499 4.25H12.6641L14.0784 2.66417L12.6641 1.25Z',
} as const;

export const IconRotateTopLeftStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-left-stroke-rounded IconRotateTopLeftStrokeRounded"
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

export const IconRotateTopLeftDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-left-duotone-rounded IconRotateTopLeftDuotoneRounded"
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

export const IconRotateTopLeftTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-left-twotone-rounded IconRotateTopLeftTwotoneRounded"
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

export const IconRotateTopLeftSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-left-solid-rounded IconRotateTopLeftSolidRounded"
    >
      <path 
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

export const IconRotateTopLeftBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-left-bulk-rounded IconRotateTopLeftBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconRotateTopLeftStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-left-stroke-sharp IconRotateTopLeftStrokeSharp"
    >
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconRotateTopLeftSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="rotate-top-left-solid-sharp IconRotateTopLeftSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfRotateTopLeft: TheIconSelfPack = {
  name: 'RotateTopLeft',
  StrokeRounded: IconRotateTopLeftStrokeRounded,
  DuotoneRounded: IconRotateTopLeftDuotoneRounded,
  TwotoneRounded: IconRotateTopLeftTwotoneRounded,
  SolidRounded: IconRotateTopLeftSolidRounded,
  BulkRounded: IconRotateTopLeftBulkRounded,
  StrokeSharp: IconRotateTopLeftStrokeSharp,
  SolidSharp: IconRotateTopLeftSolidSharp,
};