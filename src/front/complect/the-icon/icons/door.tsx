import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M5 22V8C5 5.17157 5 3.75736 5.87868 2.87868C6.75736 2 8.17157 2 11 2H13C15.8284 2 17.2426 2 18.1213 2.87868C19 3.75736 19 5.17157 19 8V22H5Z',
  d2: 'M8 11V7C8 5.34533 8.34533 5 10 5H14C15.6547 5 16 5.34533 16 7V11C16 12.6547 15.6547 13 14 13H10C8.34533 13 8 12.6547 8 11Z',
  d3: 'M3 22H21',
  d4: 'M12 5V13M16 9L8 9',
  d5: 'M8.00801 17L7.99902 17',
  d6: 'M5 8V22H19V8C19 5.17157 19 3.75736 18.1213 2.87868C17.2426 2 15.8284 2 13 2H11C8.17157 2 6.75736 2 5.87868 2.87868C5 3.75736 5 5.17157 5 8ZM8 7V11C8 12.6547 8.34533 13 10 13H14C15.6547 13 16 12.6547 16 11V7C16 5.34533 15.6547 5 14 5H10C8.34533 5 8 5.34533 8 7Z',
  d7: 'M8.00801 17H7.99902',
  d8: 'M12.0078 5V13M16.0078 9H8.00781M8.00781 11V7C8.00781 5.34533 8.35314 5 10.0078 5H14.0078C15.6625 5 16.0078 5.34533 16.0078 7V11C16.0078 12.6547 15.6625 13 14.0078 13H10.0078C8.35314 13 8.00781 12.6547 8.00781 11Z',
  d9: 'M2.5 21.75C2.5 21.1977 2.94772 20.75 3.5 20.75H20.5C21.0523 20.75 21.5 21.1977 21.5 21.75C21.5 22.3023 21.0523 22.75 20.5 22.75H3.5C2.94772 22.75 2.5 22.3023 2.5 21.75Z',
  d10: 'M13.0549 1.25C14.4225 1.24998 15.5248 1.24996 16.3918 1.36652C17.2919 1.48754 18.0497 1.74643 18.6517 2.34835C19.2536 2.95027 19.5125 3.70814 19.6335 4.60825C19.75 5.47521 19.75 6.57753 19.75 7.9451V7.94511V7.94512V7.94513V22C19.75 22.4142 19.4142 22.75 19 22.75L5 22.75C4.58579 22.75 4.25 22.4142 4.25 22L4.25 7.94512V7.94511V7.94509C4.24998 6.57752 4.24996 5.47521 4.36652 4.60825C4.48754 3.70814 4.74643 2.95027 5.34835 2.34835C5.95027 1.74643 6.70814 1.48754 7.60825 1.36652C8.47521 1.24996 9.57753 1.24998 10.9451 1.25H10.9451H13.0549H13.0549ZM8.81235 6.15036C8.77173 6.33526 8.75 6.60256 8.75 7V8.25H11.25V5.75H10C9.60257 5.75 9.33527 5.77172 9.15036 5.81234C8.97395 5.8511 8.92349 5.89617 8.90983 5.90983C8.89618 5.92348 8.8511 5.97395 8.81235 6.15036ZM10 4.25C9.5701 4.25 9.17373 4.27144 8.82851 4.34728C8.4748 4.42498 8.12868 4.56966 7.84917 4.84917C7.56966 5.12868 7.42498 5.4748 7.34728 5.82851C7.27144 6.17373 7.25 6.5701 7.25 7V11C7.25 11.4299 7.27144 11.8263 7.34728 12.1715C7.42498 12.5252 7.56966 12.8713 7.84917 13.1508C8.12868 13.4303 8.4748 13.575 8.82851 13.6527C9.17374 13.7286 9.5701 13.75 10 13.75L14 13.75C14.4299 13.75 14.8263 13.7286 15.1715 13.6527C15.5252 13.575 15.8713 13.4303 16.1508 13.1508C16.4303 12.8713 16.575 12.5252 16.6527 12.1715C16.7286 11.8263 16.75 11.4299 16.75 11V7C16.75 6.5701 16.7286 6.17373 16.6527 5.82851C16.575 5.4748 16.4303 5.12868 16.1508 4.84917C15.8713 4.56966 15.5252 4.42498 15.1715 4.34728C14.8263 4.27144 14.4299 4.25 14 4.25H10ZM12.75 5.75V8.25H15.25V7C15.25 6.60256 15.2283 6.33526 15.1877 6.15036C15.1489 5.97395 15.1038 5.92348 15.0902 5.90983C15.0765 5.89617 15.0261 5.8511 14.8496 5.81234C14.6647 5.77172 14.3974 5.75 14 5.75H12.75ZM15.25 9.75H12.75V12.25H14C14.3974 12.25 14.6647 12.2283 14.8496 12.1877C15.0261 12.1489 15.0765 12.1038 15.0902 12.0902C15.1038 12.0765 15.1489 12.026 15.1877 11.8496C15.2283 11.6647 15.25 11.3974 15.25 11V9.75ZM8.75 9.75V11C8.75 11.3974 8.77173 11.6647 8.81235 11.8496C8.8511 12.026 8.89618 12.0765 8.90983 12.0902C8.92349 12.1038 8.97395 12.1489 9.15036 12.1877C9.33527 12.2283 9.60257 12.25 10 12.25H11.25L11.25 9.75H8.75ZM8.01228 18C8.5621 18 9.00781 17.5523 9.00781 17C9.00781 16.4477 8.5621 16 8.01228 16H8.00334C7.45353 16 7.00781 16.4477 7.00781 17C7.00781 17.5523 7.45353 18 8.00334 18H8.01228Z',
  d11: 'M13.0549 1.25C14.4225 1.24998 15.5248 1.24996 16.3918 1.36652C17.2919 1.48754 18.0497 1.74643 18.6517 2.34835C19.2536 2.95027 19.5125 3.70814 19.6335 4.60825C19.75 5.47522 19.75 6.57754 19.75 7.94512V7.94513V22C19.75 22.4142 19.4142 22.75 19 22.75H5C4.58579 22.75 4.25 22.4142 4.25 22V7.94513V7.94511C4.24998 6.57753 4.24996 5.47521 4.36652 4.60825C4.48754 3.70814 4.74643 2.95027 5.34835 2.34835C5.95027 1.74643 6.70814 1.48754 7.60825 1.36652C8.47521 1.24996 9.57753 1.24998 10.9451 1.25H10.9451H13.0549H13.0549Z',
  d12: 'M8.81234 6.15036C8.77172 6.33527 8.75 6.60256 8.75 7V8.25L11.25 8.25V5.75H10C9.60256 5.75 9.33527 5.77172 9.15036 5.81234C8.97395 5.8511 8.92349 5.89618 8.90983 5.90983C8.89618 5.92349 8.8511 5.97395 8.81234 6.15036ZM10 4.25C9.5701 4.25 9.17373 4.27144 8.82851 4.34728C8.4748 4.42498 8.12868 4.56966 7.84917 4.84917C7.56966 5.12868 7.42498 5.4748 7.34728 5.82851C7.27144 6.17373 7.25 6.5701 7.25 7V11C7.25 11.4299 7.27144 11.8263 7.34728 12.1715C7.42498 12.5252 7.56966 12.8713 7.84917 13.1508C8.12868 13.4303 8.4748 13.575 8.82851 13.6527C9.17373 13.7286 9.5701 13.75 10 13.75H14C14.4299 13.75 14.8263 13.7286 15.1715 13.6527C15.5252 13.575 15.8713 13.4303 16.1508 13.1508C16.4303 12.8713 16.575 12.5252 16.6527 12.1715C16.7286 11.8263 16.75 11.4299 16.75 11V7C16.75 6.5701 16.7286 6.17373 16.6527 5.82851C16.575 5.4748 16.4303 5.12868 16.1508 4.84917C15.8713 4.56966 15.5252 4.42498 15.1715 4.34728C14.8263 4.27144 14.4299 4.25 14 4.25H10ZM12.75 5.75V8.25H15.25V7C15.25 6.60256 15.2283 6.33527 15.1877 6.15036C15.1489 5.97395 15.1038 5.92349 15.0902 5.90983C15.0765 5.89618 15.0261 5.8511 14.8496 5.81234C14.6647 5.77172 14.3974 5.75 14 5.75H12.75ZM15.25 9.75H12.75V12.25H14C14.3974 12.25 14.6647 12.2283 14.8496 12.1877C15.0261 12.1489 15.0765 12.1038 15.0902 12.0902C15.1038 12.0765 15.1489 12.0261 15.1877 11.8496C15.2283 11.6647 15.25 11.3974 15.25 11V9.75ZM11.25 12.25V9.75L8.75 9.75V11C8.75 11.3974 8.77172 11.6647 8.81234 11.8496C8.8511 12.0261 8.89618 12.0765 8.90983 12.0902C8.92349 12.1038 8.97395 12.1489 9.15036 12.1877C9.33527 12.2283 9.60256 12.25 10 12.25H11.25Z',
  d13: 'M9.00781 17C9.00781 17.5502 8.55114 18 8.00334 18C7.45353 18 7.00781 17.5523 7.00781 17C7.00781 16.4477 7.45353 16 8.00334 16C8.55114 16 9.00781 16.4498 9.00781 17Z',
  d14: 'M16 5V13H8V5H16Z',
  d15: 'M19 2V22H5V2H19Z',
  d16: 'M21 22.75H3V20.75H21V22.75Z',
  d17: 'M4.25 2C4.25 1.58579 4.58579 1.25 5 1.25L19 1.25C19.4142 1.25 19.75 1.58579 19.75 2V22C19.75 22.4142 19.4142 22.75 19 22.75L5 22.75C4.58579 22.75 4.25 22.4142 4.25 22L4.25 2ZM16.75 4.25H7.25L7.25 13.75L16.75 13.75V4.25ZM8.75 8.25V5.75H11.25V8.25H8.75ZM8.75 9.75H11.25L11.25 12.25H8.75L8.75 9.75ZM15.25 12.25H12.75V9.75H15.25V12.25ZM15.25 8.25H12.75V5.75H15.25V8.25ZM7.24883 17.75L8.75781 17.75L8.75781 16.25L7.24883 16.25L7.24883 17.75Z',
} as const;

export const IconDoorStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="door-stroke-rounded IconDoorStrokeRounded"
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

export const IconDoorDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="door-duotone-rounded IconDoorDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
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

export const IconDoorTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="door-twotone-rounded IconDoorTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDoorSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="door-solid-rounded IconDoorSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDoorBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="door-bulk-rounded IconDoorBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDoorStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="door-stroke-sharp IconDoorStrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDoorSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="door-solid-sharp IconDoorSolidSharp"
    >
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

export const iconPackOfDoor: TheIconSelfPack = {
  name: 'Door',
  StrokeRounded: IconDoorStrokeRounded,
  DuotoneRounded: IconDoorDuotoneRounded,
  TwotoneRounded: IconDoorTwotoneRounded,
  SolidRounded: IconDoorSolidRounded,
  BulkRounded: IconDoorBulkRounded,
  StrokeSharp: IconDoorStrokeSharp,
  SolidSharp: IconDoorSolidSharp,
};