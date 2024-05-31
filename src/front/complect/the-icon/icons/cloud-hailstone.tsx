import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.4776 8.7803L17.5 8.78025C19.9853 8.78025 22 10.7212 22 13.1154C22 14.8176 20.9817 16.2906 19.5 17M17.4776 8.7803C17.4924 8.62164 17.5 8.46095 17.5 8.29856C17.5 5.37225 15.0376 3 12 3C9.12324 3 6.76233 5.12773 6.52042 7.83875M17.4776 8.7803C17.3753 9.8732 16.9286 10.8704 16.2428 11.6704M6.52042 7.83875C3.98398 8.07128 2 10.1293 2 12.6338C2 14.566 3.18102 16.2326 4.88559 17M6.52042 7.83875C6.67826 7.82428 6.83823 7.81688 7 7.81688C8.12582 7.81688 9.16474 8.17534 10.0005 8.78025',
  d2: 'M11.9978 14L12.0022 14.0078M14.9966 16.9967L15.0011 17.0044M8.99888 16.9967L9.00337 17.0044M17.9955 19.9933L18 20.0011M6 19.9933L6.00449 20.0011M11.9978 20.9922L12.0022 21',
  d3: 'M17.5 8.5C17.5 5.46243 15.0376 3 12 3C9.12324 3 6.76233 5.20862 6.52042 8.0227C3.98398 8.26407 2 10.4003 2 13C2 15.7614 4.23858 18 7 18H17.5C19.9853 18 22 15.9853 22 13.5C22 11.0147 19.9853 9 17.5 9L17.4776 9.00005C17.4924 8.83536 17.5 8.66856 17.5 8.5Z',
  d4: 'M13 20.8755C13 21.4278 12.5523 21.8755 12 21.8755C11.4477 21.8755 11 21.4278 11 20.8755C11 20.3232 11.4477 19.8755 12 19.8755C12.5523 19.8755 13 20.3232 13 20.8755Z',
  d5: 'M7 19.8755C7 20.4278 6.55228 20.8755 6 20.8755C5.44772 20.8755 5 20.4278 5 19.8755C5 19.3232 5.44772 18.8755 6 18.8755C6.55228 18.8755 7 19.3232 7 19.8755Z',
  d6: 'M10 16.875C10 17.4273 9.55228 17.875 9 17.875C8.44772 17.875 8 17.4273 8 16.875C8 16.3227 8.44772 15.875 9 15.875C9.55228 15.875 10 16.3227 10 16.875Z',
  d7: 'M13 13.875C13 14.4273 12.5523 14.875 12 14.875C11.4477 14.875 11 14.4273 11 13.875C11 13.3227 11.4477 12.875 12 12.875C12.5523 12.875 13 13.3227 13 13.875Z',
  d8: 'M16 16.875C16 17.4273 15.5523 17.875 15 17.875C14.4477 17.875 14 17.4273 14 16.875C14 16.3227 14.4477 15.875 15 15.875C15.5523 15.875 16 16.3227 16 16.875Z',
  d9: 'M19 19.875C19 20.4273 18.5523 20.875 18 20.875C17.4477 20.875 17 20.4273 17 19.875C17 19.3227 17.4477 18.875 18 18.875C18.5523 18.875 19 19.3227 19 19.875Z',
  d10: 'M5.93931 6.84283C5.88991 7.03884 5.8652 7.13684 5.80872 7.1947C5.75224 7.25255 5.65424 7.27976 5.45825 7.33419C3.03106 8.0082 1.25 10.2333 1.25 12.875C1.25 14.9549 2.35427 16.7768 4.0085 17.7865C4.15808 17.8778 4.23287 17.9235 4.31753 17.9233C4.40219 17.9231 4.49828 17.8639 4.69045 17.7455C5.0713 17.5109 5.51984 17.3755 6 17.3755C6.14791 17.3755 6.22186 17.3755 6.2435 17.3723C6.41659 17.347 6.47146 17.2921 6.49683 17.119C6.5 17.0974 6.5 17.0232 6.5 16.875C6.5 15.4943 7.61929 14.375 9 14.375C9.14792 14.375 9.22188 14.375 9.24352 14.3718C9.41656 14.3465 9.47146 14.2916 9.49683 14.1185C9.5 14.0969 9.5 14.0229 9.5 13.875C9.5 12.4943 10.6193 11.375 12 11.375C13.3807 11.375 14.5 12.4943 14.5 13.875C14.5 14.0229 14.5 14.0969 14.5032 14.1185C14.5285 14.2916 14.5834 14.3465 14.7565 14.3718C14.7781 14.375 14.8521 14.375 15 14.375C16.3807 14.375 17.5 15.4943 17.5 16.875C17.5 17.0229 17.5 17.0969 17.5032 17.1185C17.5285 17.2916 17.5834 17.3465 17.7565 17.3718C17.7781 17.375 17.8521 17.375 18 17.375C18.5387 17.375 19.0375 17.5454 19.4457 17.8352C19.6381 17.9718 19.7343 18.0401 19.8227 18.044C19.911 18.0479 19.9895 18.0019 20.1466 17.9101C21.7039 16.9993 22.75 15.3093 22.75 13.375C22.75 10.9035 21.0422 8.83089 18.7423 8.27286C18.4989 8.2138 18.3772 8.18427 18.3147 8.11328C18.2522 8.0423 18.2385 7.91961 18.2112 7.67424C17.8628 4.55231 15.2149 2.125 12 2.125C9.07671 2.125 6.62272 4.13153 5.93931 6.84283Z',
  d11: 'M13 14.25C13 14.8023 12.5523 15.25 12 15.25C11.4477 15.25 11 14.8023 11 14.25C11 13.6977 11.4477 13.25 12 13.25C12.5523 13.25 13 13.6977 13 14.25Z',
  d12: 'M10 17.25C10 17.8023 9.55228 18.25 9 18.25C8.44772 18.25 8 17.8023 8 17.25C8 16.6977 8.44772 16.25 9 16.25C9.55228 16.25 10 16.6977 10 17.25Z',
  d13: 'M13 21.25C13 21.8023 12.5523 22.25 12 22.25C11.4477 22.25 11 21.8023 11 21.25C11 20.6977 11.4477 20.25 12 20.25C12.5523 20.25 13 20.6977 13 21.25Z',
  d14: 'M15 18.25C15.5523 18.25 16 17.8023 16 17.25C16 16.6977 15.5523 16.25 15 16.25C14.4477 16.25 14 16.6977 14 17.25C14 17.8023 14.4477 18.25 15 18.25Z',
  d15: 'M7 20.25C7 20.8023 6.55228 21.25 6 21.25C5.44772 21.25 5 20.8023 5 20.25C5 19.6977 5.44772 19.25 6 19.25C6.55228 19.25 7 19.6977 7 20.25Z',
  d16: 'M19 20.25C19 20.8023 18.5523 21.25 18 21.25C17.4477 21.25 17 20.8023 17 20.25C17 19.6977 17.4477 19.25 18 19.25C18.5523 19.25 19 19.6977 19 20.25Z',
  d17: 'M5.853 6.86454C3.22664 7.39643 1.25 9.71699 1.25 12.5C1.25 15.0039 2.85042 17.134 5.08412 17.9231C5.36774 17.8114 5.6767 17.75 6 17.75C6.1939 17.75 6.38264 17.7721 6.56385 17.8138C6.52207 17.6326 6.5 17.4439 6.5 17.25C6.5 15.8693 7.61929 14.75 9 14.75C9.1939 14.75 9.38264 14.7721 9.56384 14.8138C9.52207 14.6326 9.5 14.4439 9.5 14.25C9.5 12.8693 10.6193 11.75 12 11.75C13.3807 11.75 14.5 12.8693 14.5 14.25C14.5 14.4439 14.4779 14.6326 14.4362 14.8138C14.6174 14.7721 14.8061 14.75 15 14.75C16.3807 14.75 17.5 15.8693 17.5 17.25C17.5 17.4439 17.4779 17.6326 17.4362 17.8138C17.6174 17.7721 17.8061 17.75 18 17.75C18.3934 17.75 18.7656 17.8409 19.0967 18.0028C21.2155 17.3271 22.75 15.3428 22.75 13C22.75 10.3541 20.7927 8.16534 18.2469 7.80273C18.1428 4.44224 15.3858 1.75 12 1.75C8.93585 1.75 6.38731 3.95456 5.853 6.86454Z',
} as const;

export const IconCloudHailstoneStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-hailstone-stroke-rounded IconCloudHailstoneStrokeRounded"
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

export const IconCloudHailstoneDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-hailstone-duotone-rounded IconCloudHailstoneDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
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

export const IconCloudHailstoneTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-hailstone-twotone-rounded IconCloudHailstoneTwotoneRounded"
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

export const IconCloudHailstoneSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-hailstone-solid-rounded IconCloudHailstoneSolidRounded"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudHailstoneBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-hailstone-bulk-rounded IconCloudHailstoneBulkRounded"
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudHailstoneStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-hailstone-stroke-sharp IconCloudHailstoneStrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCloudHailstoneSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="cloud-hailstone-solid-sharp IconCloudHailstoneSolidSharp"
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCloudHailstone: TheIconSelfPack = {
  name: 'CloudHailstone',
  StrokeRounded: IconCloudHailstoneStrokeRounded,
  DuotoneRounded: IconCloudHailstoneDuotoneRounded,
  TwotoneRounded: IconCloudHailstoneTwotoneRounded,
  SolidRounded: IconCloudHailstoneSolidRounded,
  BulkRounded: IconCloudHailstoneBulkRounded,
  StrokeSharp: IconCloudHailstoneStrokeSharp,
  SolidSharp: IconCloudHailstoneSolidSharp,
};