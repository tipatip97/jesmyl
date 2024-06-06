import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16 5.5H8C5.17157 5.5 3.75736 5.5 2.87868 6.37868C2 7.25736 2 8.67157 2 11.5V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V11.5C22 8.67157 22 7.25736 21.1213 6.37868C20.2426 5.5 18.8284 5.5 16 5.5Z',
  d2: 'M17 8.5V12.5M19 10.5H15',
  d3: 'M9 10.5H5',
  d4: 'M9 5.5V4.75C9 4.04777 9 3.69665 8.83147 3.44443C8.75851 3.33524 8.66476 3.24149 8.55557 3.16853C8.30335 3 7.95223 3 7.25 3C6.54777 3 6.19665 3 5.94443 3.16853C5.83524 3.24149 5.74149 3.33524 5.66853 3.44443C5.5 3.69665 5.5 4.04777 5.5 4.75V5.5',
  d5: 'M18.5 5.5V4.75C18.5 4.04777 18.5 3.69665 18.3315 3.44443C18.2585 3.33524 18.1648 3.24149 18.0556 3.16853C17.8033 3 17.4522 3 16.75 3C16.0478 3 15.6967 3 15.4444 3.16853C15.3352 3.24149 15.2415 3.33524 15.1685 3.44443C15 3.69665 15 4.04777 15 4.75V5.5',
  d6: 'M16.0549 5.75H16.0549C17.4225 5.74998 18.5248 5.74996 19.3918 5.86652C20.2919 5.98754 21.0497 6.24643 21.6517 6.84835C22.2536 7.45027 22.5125 8.20814 22.6335 9.10825C22.75 9.97522 22.75 11.0775 22.75 12.4451V15.0549C22.75 16.4225 22.75 17.5248 22.6335 18.3918C22.5125 19.2919 22.2536 20.0497 21.6517 20.6517C21.0497 21.2536 20.2919 21.5125 19.3918 21.6335C18.5248 21.75 17.4225 21.75 16.0549 21.75H7.94513C6.57754 21.75 5.47522 21.75 4.60825 21.6335C3.70814 21.5125 2.95027 21.2536 2.34835 20.6517C1.74644 20.0497 1.48754 19.2919 1.36653 18.3918C1.24997 17.5248 1.24998 16.4225 1.25 15.0549V15.0549V15.0549V12.4451V12.4451V12.4451C1.24998 11.0775 1.24997 9.97521 1.36653 9.10825C1.48754 8.20814 1.74644 7.45027 2.34835 6.84835C2.95027 6.24643 3.70814 5.98754 4.60825 5.86652C5.47521 5.74996 6.57752 5.74998 7.94509 5.75H7.94511H7.94513H16.0549H16.0549ZM17 8.75C17.4142 8.75 17.75 9.08579 17.75 9.5V10.75H19C19.4142 10.75 19.75 11.0858 19.75 11.5C19.75 11.9142 19.4142 12.25 19 12.25H17.75V13.5C17.75 13.9142 17.4142 14.25 17 14.25C16.5858 14.25 16.25 13.9142 16.25 13.5V12.25H15C14.5858 12.25 14.25 11.9142 14.25 11.5C14.25 11.0858 14.5858 10.75 15 10.75H16.25V9.5C16.25 9.08579 16.5858 8.75 17 8.75ZM5 10.75C4.58579 10.75 4.25 11.0858 4.25 11.5C4.25 11.9142 4.58579 12.25 5 12.25H9C9.41421 12.25 9.75 11.9142 9.75 11.5C9.75 11.0858 9.41421 10.75 9 10.75H5Z',
  d7: 'M7.21731 2.25C6.89462 2.24997 6.59839 2.24995 6.35289 2.27492C6.0865 2.30202 5.79797 2.3646 5.52809 2.54493C5.337 2.67261 5.17294 2.83667 5.04526 3.02776C4.86493 3.29764 4.80235 3.58617 4.77525 3.85256C4.76038 3.99874 4.75437 4.16289 4.75195 4.33991C5.65129 4.24986 6.71228 4.24993 7.85726 4.25L9.74713 4.25001C9.74397 4.10712 9.73774 3.97367 9.72542 3.85256C9.69832 3.58617 9.63574 3.29764 9.45541 3.02776C9.32773 2.83667 9.16366 2.67261 8.97258 2.54493C8.7027 2.3646 8.41416 2.30202 8.14777 2.27492C7.90227 2.24995 7.60605 2.24997 7.28335 2.25H7.21731Z',
  d8: 'M19.2487 4.33991C18.3494 4.24986 17.2884 4.24993 16.1434 4.25L14.2535 4.25001C14.2567 4.10712 14.2629 3.97367 14.2753 3.85256C14.3023 3.58617 14.3649 3.29764 14.5453 3.02776C14.6729 2.83667 14.837 2.67261 15.0281 2.54493C15.298 2.3646 15.5865 2.30202 15.8529 2.27492C16.0984 2.24995 16.3946 2.24997 16.7173 2.25H16.7834C17.1061 2.24997 17.4023 2.24995 17.6478 2.27492C17.9142 2.30202 18.2027 2.3646 18.4726 2.54493C18.6637 2.67261 18.8277 2.83667 18.9554 3.02776C19.1357 3.29764 19.1983 3.58617 19.2254 3.85256C19.2403 3.99874 19.2463 4.16289 19.2487 4.33991Z',
  d9: 'M16.0549 5.75C17.4225 5.74998 18.5248 5.74996 19.3918 5.86652C20.2919 5.98754 21.0497 6.24643 21.6517 6.84835C22.2536 7.45027 22.5125 8.20814 22.6335 9.10825C22.75 9.97522 22.75 11.0775 22.75 12.4451V15.0549C22.75 16.4225 22.75 17.5248 22.6335 18.3918C22.5125 19.2919 22.2536 20.0497 21.6517 20.6517C21.0497 21.2536 20.2919 21.5125 19.3918 21.6335C18.5248 21.75 17.4225 21.75 16.0549 21.75H7.94513C6.57754 21.75 5.47522 21.75 4.60825 21.6335C3.70814 21.5125 2.95027 21.2536 2.34835 20.6517C1.74643 20.0497 1.48754 19.2919 1.36652 18.3918C1.24996 17.5248 1.24998 16.4225 1.25 15.0549V15.0549V12.4451V12.4451C1.24998 11.0775 1.24996 9.97521 1.36652 9.10825C1.48754 8.20814 1.74643 7.45027 2.34835 6.84835C2.95027 6.24643 3.70814 5.98754 4.60825 5.86652C5.47521 5.74996 6.57753 5.74998 7.94511 5.75H7.94513H16.0549H16.0549Z',
  d10: 'M17 8.75C17.4142 8.75 17.75 9.08579 17.75 9.5V10.75H19C19.4142 10.75 19.75 11.0858 19.75 11.5C19.75 11.9142 19.4142 12.25 19 12.25H17.75V13.5C17.75 13.9142 17.4142 14.25 17 14.25C16.5858 14.25 16.25 13.9142 16.25 13.5V12.25H15C14.5858 12.25 14.25 11.9142 14.25 11.5C14.25 11.0858 14.5858 10.75 15 10.75H16.25V9.5C16.25 9.08579 16.5858 8.75 17 8.75Z',
  d11: 'M4.25 11.5C4.25 11.0858 4.58579 10.75 5 10.75H9C9.41421 10.75 9.75 11.0858 9.75 11.5C9.75 11.9142 9.41421 12.25 9 12.25H5C4.58579 12.25 4.25 11.9142 4.25 11.5Z',
  d12: 'M22 5.5H2V21H22V5.5Z',
  d13: 'M18.5 5.5V3H15V5.5',
  d14: 'M9 5.5V3H5.5V5.5',
  d15: 'M1.25 5.5C1.25 5.08579 1.58579 4.75 2 4.75H22C22.4142 4.75 22.75 5.08579 22.75 5.5V21C22.75 21.4142 22.4142 21.75 22 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21V5.5ZM17.75 7.75V9.75H19.75V11.25H17.75V13.25H16.25V11.25H14.25V9.75H16.25V7.75H17.75ZM9.75 9.75H4.25V11.25H9.75V9.75Z',
  d16: 'M14.25 3C14.25 2.58579 14.5858 2.25 15 2.25H18.5C18.9142 2.25 19.25 2.58579 19.25 3V6.25H17.75V3.75H15.75V6.25H14.25V3Z',
  d17: 'M4.75 3C4.75 2.58579 5.08579 2.25 5.5 2.25H9C9.41421 2.25 9.75 2.58579 9.75 3V6.25H8.25V3.75H6.25V6.25H4.75V3Z',
};

export const IconAutomotiveBattery01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-01-stroke-rounded IconAutomotiveBattery01StrokeRounded"
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

export const IconAutomotiveBattery01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-01-duotone-rounded IconAutomotiveBattery01DuotoneRounded"
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

export const IconAutomotiveBattery01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-01-twotone-rounded IconAutomotiveBattery01TwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAutomotiveBattery01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-01-solid-rounded IconAutomotiveBattery01SolidRounded"
    >
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

export const IconAutomotiveBattery01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-01-bulk-rounded IconAutomotiveBattery01BulkRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
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

export const IconAutomotiveBattery01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-01-stroke-sharp IconAutomotiveBattery01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAutomotiveBattery01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="automotive-battery-01-solid-sharp IconAutomotiveBattery01SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAutomotiveBattery01: TheIconSelfPack = {
  name: 'AutomotiveBattery01',
  StrokeRounded: IconAutomotiveBattery01StrokeRounded,
  DuotoneRounded: IconAutomotiveBattery01DuotoneRounded,
  TwotoneRounded: IconAutomotiveBattery01TwotoneRounded,
  SolidRounded: IconAutomotiveBattery01SolidRounded,
  BulkRounded: IconAutomotiveBattery01BulkRounded,
  StrokeSharp: IconAutomotiveBattery01StrokeSharp,
  SolidSharp: IconAutomotiveBattery01SolidSharp,
};