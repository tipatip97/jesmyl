import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M3 3L3 21M21 3V21',
  d2: 'M22 6L2 6',
  d3: 'M15.5 10C16.6046 10 17.5 10.9693 17.5 12.165C17.5 12.4484 17.4497 12.719 17.3583 12.967C17.0641 13.7653 13.8692 13.5843 13.6417 12.967C13.5503 12.719 13.5 12.4484 13.5 12.165C13.5 10.9693 14.3954 10 15.5 10Z',
  d4: 'M8.5 10C9.60457 10 10.5 10.9693 10.5 12.165C10.5 12.4484 10.4497 12.719 10.3583 12.967C10.0641 13.7653 6.86923 13.5843 6.64168 12.967C6.55027 12.719 6.5 12.4484 6.5 12.165C6.5 10.9693 7.39543 10 8.5 10Z',
  d5: 'M8.5 10V6M15.5 10V6',
  d6: 'M15.5 10C16.6046 10 17.5 10.9693 17.5 12.165C17.5 12.4484 17.4497 12.719 17.3583 12.967C17.0641 13.7653 13.8692 13.5843 13.6417 12.967C13.5503 12.719 13.5 12.4484 13.5 12.165C13.5 10.9693 14.3954 10 15.5 10ZM15.5 10V6M8.5 10C9.60457 10 10.5 10.9693 10.5 12.165C10.5 12.4484 10.4497 12.719 10.3583 12.967C10.0641 13.7653 6.86923 13.5843 6.64168 12.967C6.55027 12.719 6.5 12.4484 6.5 12.165C6.5 10.9693 7.39543 10 8.5 10ZM8.5 10V6',
  d7: 'M3 2C3.55229 2 4 2.44772 4 3L4 21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21L2 3C2 2.44772 2.44772 2 3 2ZM21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3C20 2.44772 20.4477 2 21 2Z',
  d8: 'M23 6C23 5.44772 22.5523 5 22 5L2 5C1.44772 5 1 5.44772 1 6C1 6.55228 1.44772 7 2 7L22 7C22.5523 7 23 6.55228 23 6Z',
  d9: 'M12.5 12.165C12.5 10.4932 13.77 9 15.5 9C17.23 9 18.5 10.4932 18.5 12.165C18.5 12.5671 18.4286 12.9547 18.2966 13.3128C18.1539 13.7001 17.8696 13.9387 17.6416 14.0768C17.4099 14.2172 17.1557 14.3041 16.9268 14.361C16.4666 14.4754 15.9362 14.5103 15.4488 14.4975C14.9588 14.4847 14.4464 14.4219 14.0149 14.3047C13.8018 14.2468 13.5695 14.1653 13.3598 14.046C13.178 13.9424 12.854 13.7214 12.7034 13.3128C12.5714 12.9547 12.5 12.5671 12.5 12.165ZM15.5 11C15.0209 11 14.5 11.4455 14.5 12.165C14.5 12.2348 14.5052 12.3025 14.5151 12.368C14.5229 12.3702 14.5309 12.3724 14.5392 12.3747C14.7799 12.44 15.1273 12.4884 15.5012 12.4982C15.8778 12.508 16.2154 12.477 16.4441 12.4201C16.4559 12.4172 16.467 12.4143 16.4776 12.4114C16.4922 12.3327 16.5 12.2503 16.5 12.165C16.5 11.4455 15.9791 11 15.5 11Z',
  d10: 'M5.5 12.165C5.5 10.4932 6.76997 9 8.5 9C10.23 9 11.5 10.4932 11.5 12.165C11.5 12.5671 11.4286 12.9547 11.2966 13.3128C11.1539 13.7001 10.8696 13.9387 10.6416 14.0768C10.4099 14.2172 10.1557 14.3041 9.92678 14.361C9.46662 14.4754 8.93617 14.5103 8.44883 14.4975C7.95876 14.4847 7.44641 14.4219 7.01488 14.3047C6.80183 14.2468 6.56947 14.1653 6.35982 14.046C6.17797 13.9424 5.85398 13.7214 5.70339 13.3128C5.57141 12.9547 5.5 12.5671 5.5 12.165ZM8.5 11C8.0209 11 7.5 11.4455 7.5 12.165C7.5 12.2348 7.50523 12.3025 7.51513 12.368C7.5229 12.3702 7.53092 12.3724 7.53918 12.3747C7.77987 12.44 8.1273 12.4884 8.50116 12.4982C8.87775 12.5081 9.2154 12.477 9.44415 12.4201C9.4559 12.4172 9.46703 12.4143 9.47756 12.4114C9.49218 12.3327 9.5 12.2503 9.5 12.165C9.5 11.4455 8.9791 11 8.5 11Z',
  d11: 'M8.5 5C9.05228 5 9.5 5.44772 9.5 6V10C9.5 10.5523 9.05228 11 8.5 11C7.94772 11 7.5 10.5523 7.5 10V6C7.5 5.44772 7.94772 5 8.5 5ZM15.5 5C16.0523 5 16.5 5.44772 16.5 6V10C16.5 10.5523 16.0523 11 15.5 11C14.9477 11 14.5 10.5523 14.5 10V6C14.5 5.44772 14.9477 5 15.5 5Z',
  d12: 'M9.5 6C9.5 5.44772 9.05228 5 8.5 5C7.94772 5 7.5 5.44772 7.5 6V9.1773C6.3022 9.62039 5.5 10.8363 5.5 12.165C5.5 12.5671 5.57141 12.9547 5.70339 13.3128C5.85398 13.7214 6.17797 13.9424 6.35982 14.046C6.56947 14.1653 6.80183 14.2468 7.01488 14.3047C7.44641 14.4219 7.95876 14.4847 8.44883 14.4975C8.93617 14.5103 9.46662 14.4754 9.92678 14.361C10.1557 14.3041 10.4099 14.2172 10.6416 14.0768C10.8696 13.9387 11.1539 13.7001 11.2966 13.3128C11.4286 12.9547 11.5 12.5671 11.5 12.165C11.5 10.8363 10.6978 9.62039 9.5 9.1773V6ZM8.5 11C8.0209 11 7.5 11.4455 7.5 12.165C7.5 12.2348 7.50523 12.3025 7.51513 12.368L7.53918 12.3747C7.77987 12.44 8.1273 12.4884 8.50116 12.4982C8.87775 12.508 9.2154 12.477 9.44415 12.4201C9.4559 12.4172 9.46703 12.4143 9.47756 12.4114C9.49218 12.3327 9.5 12.2503 9.5 12.165C9.5 11.4455 8.9791 11 8.5 11ZM16.5 6C16.5 5.44772 16.0523 5 15.5 5C14.9477 5 14.5 5.44772 14.5 6V9.1773C13.3022 9.62039 12.5 10.8363 12.5 12.165C12.5 12.5671 12.5714 12.9547 12.7034 13.3128C12.854 13.7214 13.178 13.9424 13.3598 14.046C13.5695 14.1653 13.8018 14.2468 14.0149 14.3047C14.4464 14.4219 14.9588 14.4847 15.4488 14.4975C15.9362 14.5103 16.4666 14.4754 16.9268 14.361C17.1557 14.3041 17.4099 14.2172 17.6416 14.0768C17.8696 13.9387 18.1539 13.7001 18.2966 13.3128C18.4286 12.9547 18.5 12.5671 18.5 12.165C18.5 10.8363 17.6978 9.62039 16.5 9.1773V6ZM15.5 11C15.0209 11 14.5 11.4455 14.5 12.165C14.5 12.2348 14.5052 12.3025 14.5151 12.368L14.5392 12.3747C14.7799 12.44 15.1273 12.4884 15.5012 12.4982C15.8778 12.508 16.2154 12.477 16.4441 12.4201C16.4559 12.4172 16.467 12.4143 16.4776 12.4114C16.4922 12.3327 16.5 12.2503 16.5 12.165C16.5 11.4455 15.9791 11 15.5 11Z',
  d13: 'M4 3L4 21M20 3V21',
  d14: 'M15.499 10C16.6036 10 17.499 10.9801 17.499 12.1891C17.499 12.4756 17.4488 12.7492 17.3573 13H13.6407C13.5493 12.7492 13.499 12.4756 13.499 12.1891C13.499 10.9801 14.3945 10 15.499 10Z',
  d15: 'M8.5 10C9.60457 10 10.5 10.9801 10.5 12.1891C10.5 12.4756 10.4497 12.7492 10.3583 13H6.64168C6.55027 12.7492 6.5 12.4756 6.5 12.1891C6.5 10.9801 7.39543 10 8.5 10Z',
  d16: 'M3.25 21L3.25 3H4.75L4.75 21H3.25ZM19.25 21V3H20.75V21H19.25Z',
  d17: 'M2 6.75L22 6.75V5.25L2 5.25V6.75Z',
  d18: 'M12.749 12.1891C12.749 10.6311 13.9179 9.25 15.499 9.25C17.0802 9.25 18.249 10.6311 18.249 12.1891C18.249 12.5636 18.1833 12.9242 18.062 13.2569L17.8822 13.75H13.1158L12.9361 13.2569C12.8148 12.9242 12.749 12.5636 12.749 12.1891ZM15.499 10.75C14.871 10.75 14.249 11.3291 14.249 12.1891C14.249 12.2096 14.2494 12.2298 14.2501 12.25H16.7479C16.7487 12.2298 16.749 12.2096 16.749 12.1891C16.749 11.3291 16.127 10.75 15.499 10.75Z',
  d19: 'M5.75 12.1891C5.75 10.6311 6.91887 9.25 8.5 9.25C10.0811 9.25 11.25 10.6311 11.25 12.1891C11.25 12.5636 11.1842 12.9242 11.063 13.2569L10.8832 13.75H6.1168L5.93704 13.2569C5.81576 12.9242 5.75 12.5636 5.75 12.1891ZM8.5 10.75C7.87199 10.75 7.25 11.3291 7.25 12.1891C7.25 12.2096 7.25037 12.2298 7.2511 12.25H9.7489C9.74963 12.2298 9.75 12.2096 9.75 12.1891C9.75 11.3291 9.12801 10.75 8.5 10.75Z',
  d20: 'M9.25 6V10H7.75V6H9.25ZM16.25 6V10H14.75V6H16.25Z',
};

export const IconEquipmentGym02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-02-stroke-rounded IconEquipmentGym02StrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentGym02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-02-duotone-rounded IconEquipmentGym02DuotoneRounded"
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
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentGym02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-02-twotone-rounded IconEquipmentGym02TwotoneRounded"
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentGym02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-02-solid-rounded IconEquipmentGym02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentGym02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-02-bulk-rounded IconEquipmentGym02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconEquipmentGym02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-02-stroke-sharp IconEquipmentGym02StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentGym02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-gym-02-solid-sharp IconEquipmentGym02SolidSharp"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEquipmentGym02: TheIconSelfPack = {
  name: 'EquipmentGym02',
  StrokeRounded: IconEquipmentGym02StrokeRounded,
  DuotoneRounded: IconEquipmentGym02DuotoneRounded,
  TwotoneRounded: IconEquipmentGym02TwotoneRounded,
  SolidRounded: IconEquipmentGym02SolidRounded,
  BulkRounded: IconEquipmentGym02BulkRounded,
  StrokeSharp: IconEquipmentGym02StrokeSharp,
  SolidSharp: IconEquipmentGym02SolidSharp,
};