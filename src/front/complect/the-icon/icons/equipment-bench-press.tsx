import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 3V8M6 3V8',
  d2: 'M20.5 4V5.5M20.5 5.5V7M20.5 5.5H22M3.5 4V5.5M3.5 5.5V7M3.5 5.5H2',
  d3: 'M18 5.5L6 5.5',
  d4: 'M10 5.5V10M14 5.5V10',
  d5: 'M18.9517 16H5.06243M14.2556 10H10.2066C9.19904 10 8.82575 10.1443 8.27172 10.9923L5.25854 15.6043C5.07336 15.8877 5 16.1138 5 16.4581C5 18.6114 5.87314 19 7.8469 19H16.0969C18.1334 19 19 18.6165 19 16.4079C19 16.1018 18.9432 15.8986 18.7957 15.6351L16.2591 11.1056C15.725 10.1518 15.3409 10 14.2556 10Z',
  d6: 'M16 19V21M8 19V21',
  d7: 'M10.2066 10H14.2556C15.3409 10 15.725 10.1518 16.2591 11.1056L18.7957 15.6351C18.9432 15.8986 19 16.1018 19 16.4079C19 18.6165 18.1334 19 16.0969 19H7.8469C5.87314 19 5 18.6114 5 16.4581C5 16.1138 5.07336 15.8877 5.25854 15.6043L8.27172 10.9923C8.82575 10.1443 9.19904 10 10.2066 10Z',
  d8: 'M16.0969 19H7.8469C5.87314 19 5 18.6114 5 16.4581C5 16.2989 5.01568 16.165 5.05085 16.039C5.05772 16.0159 5.07897 16 5.10309 16H18.9183C18.938 16 18.9551 16.0133 18.96 16.0323C18.9878 16.1462 19 16.266 19 16.4079C19 18.6165 18.1334 19 16.0969 19Z',
  d9: 'M6 2C6.55228 2 7 2.44772 7 3V8C7 8.55228 6.55228 9 6 9C5.44772 9 5 8.55228 5 8V3C5 2.44772 5.44772 2 6 2ZM18 2C18.5523 2 19 2.44772 19 3V8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8V3C17 2.44772 17.4477 2 18 2Z',
  d10: 'M3.5 3C4.05228 3 4.5 3.44772 4.5 4V7C4.5 7.55228 4.05228 8 3.5 8C2.94772 8 2.5 7.55228 2.5 7V6.5H2C1.44772 6.5 1 6.05228 1 5.5C1 4.94772 1.44772 4.5 2 4.5H2.5V4C2.5 3.44772 2.94772 3 3.5 3ZM20.5 3C21.0523 3 21.5 3.44772 21.5 4V4.5H22C22.5523 4.5 23 4.94772 23 5.5C23 6.05228 22.5523 6.5 22 6.5H21.5V7C21.5 7.55228 21.0523 8 20.5 8C19.9477 8 19.5 7.55228 19.5 7V4C19.5 3.44772 19.9477 3 20.5 3Z',
  d11: 'M19 5.5C19 4.94772 18.5523 4.5 18 4.5L6 4.5C5.44771 4.5 5 4.94772 5 5.5C5 6.05228 5.44771 6.5 6 6.5L18 6.5C18.5523 6.5 19 6.05228 19 5.5Z',
  d12: 'M10 4.5C10.5523 4.5 11 4.94772 11 5.5V10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10V5.5C9 4.94772 9.44772 4.5 10 4.5ZM14 4.5C14.5523 4.5 15 4.94772 15 5.5V10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10V5.5C13 4.94772 13.4477 4.5 14 4.5Z',
  d13: 'M10.2066 9.25C9.69144 9.25 9.19346 9.2809 8.73778 9.50527C8.26759 9.73679 7.94509 10.121 7.64385 10.582L4.63066 15.1941C4.61485 15.2183 4.6324 15.25 4.6613 15.25H18.4159C18.8717 15.25 19.0997 15.25 19.1866 15.1017C19.2735 14.9534 19.1621 14.7545 18.9394 14.3568L16.9135 10.7391C16.6259 10.2255 16.308 9.79192 15.8135 9.53152C15.3372 9.28068 14.8028 9.25 14.2556 9.25H10.2066Z',
  d14: 'M19.6854 17.3729C19.7272 17.0968 19.7482 16.9588 19.6584 16.8544C19.5686 16.75 19.4182 16.75 19.1173 16.75H4.87801C4.57843 16.75 4.42864 16.75 4.3389 16.854C4.24915 16.9579 4.26942 17.0953 4.30994 17.3701C4.41763 18.1004 4.6843 18.7044 5.21918 19.1257C5.90951 19.6695 6.87077 19.75 7.8469 19.75H16.0969C17.0992 19.75 18.0784 19.6721 18.7768 19.1209C19.3091 18.7007 19.5752 18.0996 19.6854 17.3729Z',
  d15: 'M8 18C8.55228 18 9 18.4477 9 19V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V19C7 18.4477 7.44772 18 8 18ZM16 18C16.5523 18 17 18.4477 17 19V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V19C15 18.4477 15.4477 18 16 18Z',
  d16: 'M9 6.5V10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10V6.5H9ZM13 6.5H15V10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10V6.5Z',
  d17: 'M7 3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3V5.5L5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8L7 6.5L17 6.5V8C17 8.55228 17.4477 9 18 9C18.5523 9 19 8.55228 19 8V5.5V3C19 2.44772 18.5523 2 18 2C17.4477 2 17 2.44772 17 3V4.5L7 4.5V3Z',
  d18: 'M10.2069 9.25C9.69173 9.25 9.19375 9.2809 8.73807 9.50527C8.26788 9.73679 7.94538 10.121 7.64414 10.582L4.63095 15.1941C4.61515 15.2183 4.63269 15.25 4.66159 15.25H18.4162C18.872 15.25 19.0999 15.25 19.1869 15.1017C19.2738 14.9534 19.1624 14.7545 18.9397 14.3568L16.9138 10.7391C16.6261 10.2255 16.3083 9.79192 15.8138 9.53152C15.3375 9.28068 14.8031 9.25 14.2559 9.25H10.2069Z',
  d19: 'M19.6853 17.3729C19.7271 17.0968 19.7481 16.9588 19.6583 16.8544C19.5685 16.75 19.4181 16.75 19.1172 16.75H4.87788C4.57831 16.75 4.42852 16.75 4.33878 16.854C4.24903 16.9579 4.26929 17.0953 4.30982 17.3701C4.41751 18.1004 4.68418 18.7044 5.21906 19.1257C5.90938 19.6695 6.87065 19.75 7.84677 19.75H16.0968C17.0991 19.75 18.0783 19.6721 18.7767 19.1209C19.309 18.7007 19.575 18.0996 19.6853 17.3729Z',
  d20: 'M15 19.75H16.0968C16.4024 19.75 16.7059 19.7427 17 19.717V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V19.75ZM7 19.7197C7.27671 19.7431 7.5611 19.75 7.84677 19.75H9V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V19.7197Z',
  d21: 'M17.5 3V9M6.5 3V9M20 4V6M20 6V8M20 6H22M4 4V6M4 6V8M4 6H2',
  d22: 'M17.5 6L6.5 6',
  d23: 'M10 6V10M14 6V10',
  d24: 'M18.4314 16H5.44892M15.5 10H8.5L5 16V19H19V16L15.5 10Z',
  d25: 'M5.5 8.5V2.5H7.5V4.5H16.5V2.5H18.5V8.5H16.5V6.5H15V9.5H13V6.5H11V9.5H9V6.5H7.5V8.5H5.5Z',
  d26: 'M3 4.5V3.5H5V7.5H3V6.5H2V4.5H3Z',
  d27: 'M21 4.5V3.5H19V7.5H21V6.5H22V4.5H21Z',
  d28: 'M8.5 8.75C8.23325 8.75 7.98657 8.89168 7.85217 9.1221L4.56922 14.75H19.4308L16.1478 9.1221C16.0134 8.89168 15.7668 8.75 15.5 8.75H8.5Z',
  d29: 'M19.75 16.25H4.25V18.5C4.25 18.9142 4.58579 19.25 5 19.25H19C19.4142 19.25 19.75 18.9142 19.75 18.5V16.25Z',
  d30: 'M7 21.5V18.5H9V21.5H7ZM15 21.5V18.5H17V21.5H15Z',
} as const;

export const IconEquipmentBenchPressStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-bench-press-stroke-rounded IconEquipmentBenchPressStrokeRounded"
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
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentBenchPressDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-bench-press-duotone-rounded IconEquipmentBenchPressDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
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
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentBenchPressTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-bench-press-twotone-rounded IconEquipmentBenchPressTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
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

export const IconEquipmentBenchPressSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-bench-press-solid-rounded IconEquipmentBenchPressSolidRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEquipmentBenchPressBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-bench-press-bulk-rounded IconEquipmentBenchPressBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconEquipmentBenchPressStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-bench-press-stroke-sharp IconEquipmentBenchPressStrokeSharp"
    >
      <path 
        d={d.d21} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d22} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d23} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d24} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEquipmentBenchPressSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="equipment-bench-press-solid-sharp IconEquipmentBenchPressSolidSharp"
    >
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d29} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d30} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfEquipmentBenchPress: TheIconSelfPack = {
  name: 'EquipmentBenchPress',
  StrokeRounded: IconEquipmentBenchPressStrokeRounded,
  DuotoneRounded: IconEquipmentBenchPressDuotoneRounded,
  TwotoneRounded: IconEquipmentBenchPressTwotoneRounded,
  SolidRounded: IconEquipmentBenchPressSolidRounded,
  BulkRounded: IconEquipmentBenchPressBulkRounded,
  StrokeSharp: IconEquipmentBenchPressStrokeSharp,
  SolidSharp: IconEquipmentBenchPressSolidSharp,
};