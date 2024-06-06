import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M16 5.5H8C5.17157 5.5 3.75736 5.5 2.87868 6.37868C2 7.25736 2 8.67157 2 11.5V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V11.5C22 8.67157 22 7.25736 21.1213 6.37868C20.2426 5.5 18.8284 5.5 16 5.5Z',
  d2: 'M12.5 9L10 13H14L11.5 17',
  d3: 'M9 5.5V4.75C9 4.04777 9 3.69665 8.83147 3.44443C8.75851 3.33524 8.66476 3.24149 8.55557 3.16853C8.30335 3 7.95223 3 7.25 3C6.54777 3 6.19665 3 5.94443 3.16853C5.83524 3.24149 5.74149 3.33524 5.66853 3.44443C5.5 3.69665 5.5 4.04777 5.5 4.75V5.5',
  d4: 'M18.5 5.5V4.75C18.5 4.04777 18.5 3.69665 18.3315 3.44443C18.2585 3.33524 18.1648 3.24149 18.0556 3.16853C17.8033 3 17.4522 3 16.75 3C16.0478 3 15.6967 3 15.4444 3.16853C15.3352 3.24149 15.2415 3.33524 15.1685 3.44443C15 3.69665 15 4.04777 15 4.75V5.5',
  d5: 'M9 5.5V4.75C9 4.04777 9 3.69665 8.83147 3.44443C8.75851 3.33524 8.66476 3.24149 8.55557 3.16853C8.30335 3 7.95223 3 7.25 3C6.54777 3 6.19665 3 5.94443 3.16853C5.83524 3.24149 5.74149 3.33524 5.66853 3.44443C5.5 3.69665 5.5 4.04777 5.5 4.75V5.5M18.5 5.5V4.75C18.5 4.04777 18.5 3.69665 18.3315 3.44443C18.2585 3.33524 18.1648 3.24149 18.0556 3.16853C17.8033 3 17.4522 3 16.75 3C16.0478 3 15.6967 3 15.4444 3.16853C15.3352 3.24149 15.2415 3.33524 15.1685 3.44443C15 3.69665 15 4.04777 15 4.75V5.5',
  d6: 'M7.21731 2.25C6.89462 2.24997 6.59839 2.24995 6.35289 2.27492C6.0865 2.30202 5.79797 2.3646 5.52809 2.54493C5.337 2.67261 5.17294 2.83667 5.04526 3.02776C4.86493 3.29764 4.80235 3.58617 4.77525 3.85256C4.76038 3.99874 4.75437 4.16289 4.75195 4.33991C5.65129 4.24986 6.71228 4.24993 7.85726 4.25L9.74713 4.25001C9.74397 4.10712 9.73774 3.97367 9.72542 3.85256C9.69832 3.58617 9.63574 3.29764 9.45541 3.02776C9.32773 2.83667 9.16366 2.67261 8.97258 2.54493C8.7027 2.3646 8.41416 2.30202 8.14777 2.27492C7.90227 2.24995 7.60605 2.24997 7.28335 2.25H7.21731Z',
  d7: 'M19.2487 4.33991C18.3494 4.24986 17.2884 4.24993 16.1434 4.25L14.2535 4.25001C14.2567 4.10712 14.2629 3.97367 14.2753 3.85256C14.3023 3.58617 14.3649 3.29764 14.5453 3.02776C14.6729 2.83667 14.837 2.67261 15.0281 2.54493C15.298 2.3646 15.5865 2.30202 15.8529 2.27492C16.0984 2.24995 16.3946 2.24997 16.7173 2.25H16.7834C17.1061 2.24997 17.4023 2.24995 17.6478 2.27492C17.9142 2.30202 18.2027 2.3646 18.4726 2.54493C18.6637 2.67261 18.8277 2.83667 18.9554 3.02776C19.1357 3.29764 19.1983 3.58617 19.2254 3.85256C19.2403 3.99874 19.2463 4.16289 19.2487 4.33991Z',
  d8: 'M16.0549 5.75H16.0549H16.0549H7.94513H7.94511H7.94509C6.57752 5.74998 5.47521 5.74996 4.60825 5.86652C3.70814 5.98754 2.95027 6.24643 2.34835 6.84835C1.74643 7.45027 1.48754 8.20814 1.36652 9.10825C1.24996 9.97521 1.24998 11.0775 1.25 12.4451V12.4451V12.4451V15.0549V15.0549V15.0549C1.24998 16.4225 1.24996 17.5248 1.36652 18.3918C1.48754 19.2919 1.74643 20.0497 2.34835 20.6517C2.95027 21.2536 3.70814 21.5125 4.60825 21.6335C5.47522 21.75 6.57754 21.75 7.94513 21.75H16.0549C17.4225 21.75 18.5248 21.75 19.3918 21.6335C20.2919 21.5125 21.0497 21.2536 21.6517 20.6517C22.2536 20.0497 22.5125 19.2919 22.6335 18.3918C22.75 17.5248 22.75 16.4225 22.75 15.0549V12.4451C22.75 11.0775 22.75 9.97522 22.6335 9.10825C22.5125 8.20814 22.2536 7.45027 21.6517 6.84835C21.0497 6.24643 20.2919 5.98754 19.3918 5.86652C18.5248 5.74996 17.4225 5.74998 16.0549 5.75ZM13.136 10.1476C13.3555 9.79635 13.2488 9.33363 12.8975 9.1141C12.5462 8.89457 12.0835 9.00135 11.864 9.3526L9.364 13.3526C9.2195 13.5838 9.21185 13.8752 9.34402 14.1137C9.47619 14.3521 9.72736 14.5001 10 14.5001H12.6468L10.864 17.3526C10.6445 17.7039 10.7512 18.1666 11.1025 18.3861C11.4538 18.6056 11.9165 18.4989 12.136 18.1476L14.636 14.1476C14.7805 13.9164 14.7882 13.625 14.656 13.3865C14.5238 13.1481 14.2726 13.0001 14 13.0001H11.3532L13.136 10.1476Z',
  d9: 'M16.0549 5.75C17.4225 5.74998 18.5248 5.74996 19.3918 5.86652C20.2919 5.98754 21.0497 6.24643 21.6517 6.84835C22.2536 7.45027 22.5125 8.20814 22.6335 9.10825C22.75 9.97522 22.75 11.0775 22.75 12.4451V15.0549C22.75 16.4225 22.75 17.5248 22.6335 18.3918C22.5125 19.2919 22.2536 20.0497 21.6517 20.6517C21.0497 21.2536 20.2919 21.5125 19.3918 21.6335C18.5248 21.75 17.4225 21.75 16.0549 21.75H7.94513C6.57754 21.75 5.47522 21.75 4.60825 21.6335C3.70814 21.5125 2.95027 21.2536 2.34835 20.6517C1.74643 20.0497 1.48754 19.2919 1.36652 18.3918C1.24996 17.5248 1.24998 16.4225 1.25 15.0549V15.0549V12.4451V12.4451C1.24998 11.0775 1.24996 9.97521 1.36652 9.10825C1.48754 8.20814 1.74643 7.45027 2.34835 6.84835C2.95027 6.24643 3.70814 5.98754 4.60825 5.86652C5.47521 5.74996 6.57753 5.74998 7.94511 5.75H7.94513H16.0549H16.0549Z',
  d10: 'M12.8975 9.1141C13.2488 9.33363 13.3555 9.79635 13.136 10.1476L11.3532 13.0001H14C14.2726 13.0001 14.5238 13.1481 14.656 13.3865C14.7882 13.625 14.7805 13.9164 14.636 14.1476L12.136 18.1476C11.9165 18.4989 11.4538 18.6056 11.1025 18.3861C10.7512 18.1666 10.6445 17.7039 10.864 17.3526L12.6468 14.5001H10C9.72736 14.5001 9.47619 14.3521 9.34402 14.1137C9.21185 13.8752 9.2195 13.5838 9.364 13.3526L11.864 9.3526C12.0835 9.00135 12.5462 8.89457 12.8975 9.1141Z',
  d11: 'M22 5.5H2V21H22V5.5Z',
  d12: 'M18.5 5.5V3H15V5.5',
  d13: 'M9 5.5V3H5.5V5.5',
  d14: 'M2 4.75C1.58579 4.75 1.25 5.08579 1.25 5.5V21C1.25 21.4142 1.58579 21.75 2 21.75H22C22.4142 21.75 22.75 21.4142 22.75 21V5.5C22.75 5.08579 22.4142 4.75 22 4.75H2ZM11.8038 12.0001L13.8776 8.68207L12.1816 7.62207L8.19531 14.0001H12.1953L10.1216 17.3181L11.8176 18.3781L15.8038 12.0001H11.8038Z',
  d15: 'M14.25 3C14.25 2.58579 14.5858 2.25 15 2.25H18.5C18.9142 2.25 19.25 2.58579 19.25 3V6.25H17.75V3.75H15.75V6.25H14.25V3Z',
  d16: 'M4.75 3C4.75 2.58579 5.08579 2.25 5.5 2.25H9C9.41421 2.25 9.75 2.58579 9.75 3V6.25H8.25V3.75H6.25V6.25H4.75V3Z',
} as const;

export const IconAutomotiveBattery02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-02-stroke-rounded IconAutomotiveBattery02StrokeRounded"
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

export const IconAutomotiveBattery02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-02-duotone-rounded IconAutomotiveBattery02DuotoneRounded"
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
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAutomotiveBattery02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-02-twotone-rounded IconAutomotiveBattery02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAutomotiveBattery02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-02-solid-rounded IconAutomotiveBattery02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
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

export const IconAutomotiveBattery02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-02-bulk-rounded IconAutomotiveBattery02BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAutomotiveBattery02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-02-stroke-sharp IconAutomotiveBattery02StrokeSharp"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAutomotiveBattery02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-02-solid-sharp IconAutomotiveBattery02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAutomotiveBattery02: TheIconSelfPack = {
  name: 'AutomotiveBattery02',
  StrokeRounded: IconAutomotiveBattery02StrokeRounded,
  DuotoneRounded: IconAutomotiveBattery02DuotoneRounded,
  TwotoneRounded: IconAutomotiveBattery02TwotoneRounded,
  SolidRounded: IconAutomotiveBattery02SolidRounded,
  BulkRounded: IconAutomotiveBattery02BulkRounded,
  StrokeSharp: IconAutomotiveBattery02StrokeSharp,
  SolidSharp: IconAutomotiveBattery02SolidSharp,
};