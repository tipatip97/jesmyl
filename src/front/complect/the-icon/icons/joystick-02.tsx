import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M15.5 5.5C15.5 7.433 13.933 9 12 9C10.067 9 8.5 7.433 8.5 5.5C8.5 3.567 10.067 2 12 2C13.933 2 15.5 3.567 15.5 5.5Z',
  d2: 'M12 9L12 14',
  d3: 'M16 17H8L8.27758 16.3754C8.79 15.2225 9.04621 14.646 9.54325 14.323C10.0403 14 10.6711 14 11.9328 14H12.0672C13.3289 14 13.9597 14 14.4567 14.323C14.9538 14.646 15.21 15.2225 15.7224 16.3754L16 17Z',
  d4: 'M17.189 22H6.99519C6.08792 22 5.63428 22 5.37813 21.7472C5.16606 21.538 5.03017 21.223 5.00302 20.8777C4.97022 20.4606 5.20535 19.9541 5.67559 18.941C6.00825 18.2243 6.17458 17.866 6.4039 17.6075C6.59695 17.3899 6.82135 17.2249 7.06392 17.1221C7.35206 17 7.67298 17 8.3148 17H15.845C16.4947 17 16.8196 17 17.1075 17.1219C17.4079 17.249 17.6795 17.4712 17.8982 17.7687C18.1078 18.0537 18.2495 18.4354 18.533 19.1989C18.863 20.0876 19.0281 20.532 18.9961 20.8934C18.963 21.2677 18.8023 21.6026 18.5588 21.8048C18.3237 22 17.9455 22 17.189 22Z',
  d5: 'M7.75 5.5C7.75 3.15279 9.65279 1.25 12 1.25C14.3472 1.25 16.25 3.15279 16.25 5.5C16.25 7.84721 14.3472 9.75 12 9.75C9.65279 9.75 7.75 7.84721 7.75 5.5Z',
  d6: 'M12 8C12.5523 8 13 8.44772 13 9L13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L11 9C11 8.44772 11.4477 8 12 8Z',
  d7: 'M12.1098 13.25C12.6697 13.25 13.1626 13.2499 13.5722 13.2914C14.0157 13.3364 14.4455 13.4361 14.8514 13.6861C15.2574 13.936 15.5282 14.2676 15.7516 14.6332C15.958 14.971 16.1768 15.4374 16.4042 15.9221L16.4042 15.9222L16.6679 16.4843C16.881 16.9385 16.665 17.4703 16.1856 17.6722C15.7062 17.8741 15.1448 17.6695 14.9317 17.2153L14.668 16.6533C14.4164 16.1169 14.2568 15.7795 14.1074 15.535C13.9694 15.3092 13.8824 15.236 13.8162 15.1953C13.7499 15.1545 13.644 15.1089 13.3702 15.0811C13.0736 15.0511 12.6834 15.0499 12.0638 15.0499H11.9362C11.3166 15.0499 10.9264 15.0511 10.6298 15.0811C10.356 15.1089 10.2501 15.1545 10.1838 15.1953C10.1176 15.236 10.0306 15.3092 9.89265 15.535C9.74322 15.7795 9.58357 16.1169 9.33195 16.6533L9.06827 17.2153C8.85519 17.6695 8.2938 17.8741 7.81438 17.6722C7.33495 17.4703 7.11903 16.9385 7.33211 16.4843L7.5958 15.9222C7.82321 15.4374 8.042 14.971 8.24839 14.6332C8.47183 14.2676 8.74264 13.936 9.14856 13.6861C9.55449 13.4361 9.98434 13.3364 10.4278 13.2914C10.8374 13.2499 11.3303 13.25 11.8902 13.25H11.8903H12.1097H12.1098Z',
  d8: 'M15.9546 16.2499C16.4947 16.249 16.968 16.2483 17.3999 16.4312C17.8402 16.6176 18.2146 16.9329 18.5024 17.3244C18.7756 17.6959 18.9519 18.1715 19.1973 18.8331L19.2361 18.9377L19.2454 18.9627C19.4025 19.3858 19.5339 19.7398 19.6199 20.0326C19.7079 20.3324 19.7714 20.6401 19.7431 20.9595C19.696 21.4929 19.4637 22.0281 19.0379 22.3817C18.7564 22.6155 18.4321 22.6897 18.1526 22.7209C17.892 22.75 17.5723 22.75 17.2259 22.75L6.99517 22.75L6.95312 22.75C6.53572 22.75 6.15637 22.7501 5.85159 22.7129C5.52706 22.6732 5.15277 22.5785 4.85132 22.281C4.49043 21.9249 4.29416 21.4306 4.2553 20.9364C4.2261 20.5651 4.3213 20.2116 4.44759 19.8716C4.57144 19.5383 4.75823 19.1359 4.98238 18.653L4.98238 18.653L4.99528 18.6252L5.04258 18.5232C5.32864 17.906 5.53895 17.4523 5.84286 17.1097C6.10214 16.8175 6.41573 16.5822 6.77126 16.4315C7.20349 16.2484 7.67272 16.2491 8.20716 16.2499L8.31478 16.25H15.8449L15.9546 16.2499Z',
  d9: 'M11 9.63171C11.3207 9.70905 11.6556 9.75003 12 9.75003C12.3444 9.75003 12.6793 9.70905 13 9.63171L13 13.2577C12.7271 13.25 12.4294 13.25 12.1098 13.25H12.1098H12.1097H11.8903H11.8902H11.8902C11.5706 13.25 11.2729 13.25 11 13.2577V9.63171Z',
  d10: 'M19.5 22H4.5L6.5 17H17.5L19.5 22Z',
  d11: 'M16 17H8L9.06667 14H14.9333L16 17Z',
  d12: 'M12 1.25C9.65279 1.25 7.75 3.15279 7.75 5.5C7.75 7.5913 9.26049 9.3298 11.25 9.68403V13.25H9.0667C8.74935 13.25 8.46635 13.4497 8.36004 13.7487L7.4707 16.25H16.5294L15.64 13.7487C15.5337 13.4497 15.2507 13.25 14.9334 13.25H12.75V9.68403C14.7395 9.3298 16.25 7.5913 16.25 5.5C16.25 3.15279 14.3472 1.25 12 1.25Z',
  d13: 'M3.80365 21.7215L5.39223 17.75H18.6078L20.1964 21.7215C20.2888 21.9525 20.2606 22.2144 20.1211 22.4205C19.9815 22.6266 19.7489 22.75 19.5 22.75H4.5C4.25114 22.75 4.01848 22.6266 3.87895 22.4205C3.73943 22.2144 3.71122 21.9525 3.80365 21.7215Z',
} as const;

export const IconJoystick02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-02-stroke-rounded IconJoystick02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconJoystick02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-02-duotone-rounded IconJoystick02DuotoneRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconJoystick02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-02-twotone-rounded IconJoystick02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconJoystick02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-02-solid-rounded IconJoystick02SolidRounded"
    >
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

export const IconJoystick02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-02-bulk-rounded IconJoystick02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconJoystick02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-02-stroke-sharp IconJoystick02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconJoystick02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="joystick-02-solid-sharp IconJoystick02SolidSharp"
    >
      <path 
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

export const iconPackOfJoystick02: TheIconSelfPack = {
  name: 'Joystick02',
  StrokeRounded: IconJoystick02StrokeRounded,
  DuotoneRounded: IconJoystick02DuotoneRounded,
  TwotoneRounded: IconJoystick02TwotoneRounded,
  SolidRounded: IconJoystick02SolidRounded,
  BulkRounded: IconJoystick02BulkRounded,
  StrokeSharp: IconJoystick02StrokeSharp,
  SolidSharp: IconJoystick02SolidSharp,
};