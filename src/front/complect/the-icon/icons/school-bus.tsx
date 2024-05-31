import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17.5 19V22',
  d2: 'M6.5 19V22',
  d3: 'M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V13C20 15.8284 20 17.2426 19.1213 18.1213C18.2426 19 16.8284 19 14 19H10C7.17157 19 5.75736 19 4.87868 18.1213C4 17.2426 4 15.8284 4 13V10Z',
  d4: 'M7 16H8',
  d5: 'M16 16H17',
  d6: 'M2 8L2 10',
  d7: 'M22 8L22 10',
  d8: 'M4.5 5L19.5 5',
  d9: 'M4.5 13L19.5 13',
  d10: 'M12 13V5',
  d11: 'M10 19H14C16.8284 19 18.2426 19 19.1213 18.1213C20 17.2426 20 15.8284 20 13H4C4 15.8284 4 17.2426 4.87868 18.1213C5.75736 19 7.17157 19 10 19H10Z',
  d12: 'M18.8264 3.17157C17.6548 2 15.7692 2 11.998 2C8.22675 2 6.34114 2 5.16956 3.17157C4.69996 3.64118 4.41859 4.2255 4.25 5H19.746C19.5774 4.2255 19.296 3.64118 18.8264 3.17157Z',
  d13: 'M6.5 17.75C7.05228 17.75 7.5 18.1977 7.5 18.75V21.75C7.5 22.3023 7.05228 22.75 6.5 22.75C5.94772 22.75 5.5 22.3023 5.5 21.75V18.75C5.5 18.1977 5.94772 17.75 6.5 17.75ZM17.5 17.75C18.0523 17.75 18.5 18.1977 18.5 18.75V21.75C18.5 22.3023 18.0523 22.75 17.5 22.75C16.9477 22.75 16.5 22.3023 16.5 21.75V18.75C16.5 18.1977 16.9477 17.75 17.5 17.75Z',
  d14: 'M11.9289 1.25H12.0711C13.8439 1.24998 15.2729 1.24996 16.3967 1.40128C17.5635 1.55839 18.546 1.8945 19.3262 2.67593C20.1065 3.45737 20.4421 4.44128 20.599 5.60984C20.7501 6.73538 20.75 8.16647 20.75 9.94195V13.003C20.75 14.3215 20.7501 15.4087 20.6346 16.2691C20.5133 17.1726 20.2489 17.9704 19.611 18.6093C18.9731 19.2481 18.1764 19.5129 17.2744 19.6344C16.4152 19.7501 15.3296 19.75 14.0131 19.75H9.98695C8.67049 19.75 7.58483 19.7501 6.72564 19.6344C5.82358 19.5129 5.02692 19.2481 4.38904 18.6093C3.75115 17.9704 3.48674 17.1726 3.36546 16.2691C3.24995 15.4087 3.24997 14.3214 3.25 13.003V9.94188C3.24998 8.16647 3.24996 6.73534 3.40105 5.60984C3.55793 4.44128 3.89353 3.45737 4.67379 2.67593C5.45405 1.8945 6.43648 1.55839 7.60329 1.40128C8.72711 1.24996 10.1561 1.24998 11.9289 1.25ZM5.19434 10.0132C5.19434 8.54006 5.19563 7.41928 5.2612 6.52993C5.27936 6.28359 5.28844 6.16042 5.37478 6.08021C5.46112 6 5.58877 6 5.84408 6H10.4C10.6828 6 10.8243 6 10.9121 6.08787C11 6.17574 11 6.31716 11 6.6V11.4C11 11.6828 11 11.8243 10.9121 11.9121C10.8243 12 10.6828 12 10.4 12H5.79434C5.5115 12 5.37007 12 5.28221 11.9121C5.19434 11.8243 5.19434 11.6828 5.19434 11.4V10.0132ZM13.6 12C13.3172 12 13.1757 12 13.0879 11.9121C13 11.8243 13 11.6828 13 11.4V6.6C13 6.31716 13 6.17574 13.0879 6.08787C13.1757 6 13.3172 6 13.6 6H18.1557C18.411 6 18.5387 6 18.625 6.08021C18.7113 6.16042 18.7204 6.28359 18.7386 6.52993C18.8042 7.41928 18.8054 8.54006 18.8054 10.0132V11.4C18.8054 11.6828 18.8054 11.8243 18.7176 11.9121C18.6297 12 18.4883 12 18.2054 12H13.6ZM7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H8C8.55229 17 9 16.5523 9 16C9 15.4477 8.55229 15 8 15H7ZM16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15H16Z',
  d15: 'M1.5 7C2.05228 7 2.5 7.44772 2.5 8V10C2.5 10.5523 2.05228 11 1.5 11C0.947715 11 0.5 10.5523 0.5 10L0.5 8C0.5 7.44772 0.947715 7 1.5 7ZM22.5 7C23.0523 7 23.5 7.44772 23.5 8V10C23.5 10.5523 23.0523 11 22.5 11C21.9477 11 21.5 10.5523 21.5 10V8C21.5 7.44772 21.9477 7 22.5 7Z',
  d16: 'M11.9289 1.25H12.0711H12.0712C13.8439 1.24998 15.2729 1.24996 16.3967 1.40128C17.5635 1.55839 18.546 1.8945 19.3262 2.67593C20.1065 3.45737 20.4421 4.44128 20.599 5.60984C20.7501 6.73538 20.75 8.16647 20.75 9.94195V13.003C20.75 14.3215 20.7501 15.4087 20.6346 16.2691C20.5133 17.1726 20.2489 17.9704 19.611 18.6093C18.9731 19.2481 18.1764 19.5129 17.2744 19.6344C16.4152 19.7501 15.3296 19.75 14.0131 19.75H14.0131H9.98695H9.98693C8.67048 19.75 7.58482 19.7501 6.72564 19.6344C5.82358 19.5129 5.02692 19.2481 4.38904 18.6093C3.75115 17.9704 3.48674 17.1726 3.36546 16.2691C3.24995 15.4087 3.24997 14.3215 3.25 13.003V13.003V9.94188V9.94185C3.24998 8.16646 3.24996 6.73534 3.40105 5.60984C3.55793 4.44128 3.89353 3.45737 4.67379 2.67593C5.45405 1.8945 6.43648 1.55839 7.60329 1.40128C8.72711 1.24996 10.1561 1.24998 11.9289 1.25H11.9289Z',
  d17: 'M5.5 19.333V21.7503C5.5 22.3026 5.94772 22.7503 6.5 22.7503C7.05228 22.7503 7.5 22.3026 7.5 21.7503V19.7071C7.22409 19.6903 6.966 19.667 6.72564 19.6347C6.29058 19.5761 5.88004 19.4842 5.5 19.333ZM16.5 19.7071V21.7503C16.5 22.3026 16.9477 22.7503 17.5 22.7503C18.0523 22.7503 18.5 22.3026 18.5 21.7503V19.333C18.12 19.4842 17.7094 19.5761 17.2744 19.6347C17.034 19.667 16.7759 19.6903 16.5 19.7071Z',
  d18: 'M5.19531 10.0132C5.19531 8.54006 5.1966 7.41928 5.26217 6.52993C5.28033 6.28359 5.28941 6.16042 5.37575 6.08021C5.46209 6 5.58974 6 5.84505 6H10.401C10.6838 6 10.8252 6 10.9131 6.08787C11.001 6.17574 11.001 6.31716 11.001 6.6V11.4C11.001 11.6828 11.001 11.8243 10.9131 11.9121C10.8252 12 10.6838 12 10.401 12H5.79531C5.51247 12 5.37105 12 5.28318 11.9121C5.19531 11.8243 5.19531 11.6828 5.19531 11.4V10.0132ZM13.601 12C13.3181 12 13.1767 12 13.0888 11.9121C13.001 11.8243 13.001 11.6828 13.001 11.4V6.6C13.001 6.31716 13.001 6.17574 13.0888 6.08787C13.1767 6 13.3181 6 13.601 6H18.1567C18.412 6 18.5396 6 18.626 6.08021C18.7123 6.16042 18.7214 6.28359 18.7396 6.52993C18.8051 7.41928 18.8064 8.54006 18.8064 10.0132V11.4C18.8064 11.6828 18.8064 11.8243 18.7186 11.9121C18.6307 12 18.4893 12 18.2064 12H13.601ZM7.00097 15C6.44869 15 6.00097 15.4477 6.00097 16C6.00097 16.5523 6.44869 17 7.00097 17H8.00097C8.55326 17 9.00097 16.5523 9.00097 16C9.00097 15.4477 8.55326 15 8.00097 15H7.00097ZM16.001 15C15.4487 15 15.001 15.4477 15.001 16C15.001 16.5523 15.4487 17 16.001 17H17.001C17.5533 17 18.001 16.5523 18.001 16C18.001 15.4477 17.5533 15 17.001 15H16.001Z',
  d19: 'M17 19V22M7 19V22',
  d20: 'M20 19V2H4V19H20Z',
  d21: 'M7 16H9',
  d22: 'M15 16H17',
  d23: 'M2 7L2 10',
  d24: 'M22 7L22 10',
  d25: 'M6.00098 22.5V19.5H8.00098V22.5H6.00098ZM16.001 22.5V19.5H18.001V22.5H16.001Z',
  d26: 'M21.5 11V8L23.5 8V11H21.5Z',
  d27: 'M0.5 11L0.5 8L2.5 8V11H0.5Z',
  d28: 'M4.50391 1.5C3.95162 1.5 3.50391 1.94772 3.50391 2.5V19.5C3.50391 20.0523 3.95162 20.5 4.50391 20.5H19.5039C20.0562 20.5 20.5039 20.0523 20.5039 19.5V2.5C20.5039 1.94772 20.0562 1.5 19.5039 1.5H4.50391ZM5.50391 6.25V12.75H11.0039V6.25H5.50391ZM18.5039 12.75H13.0039V6.25H18.5039V12.75ZM7.00391 17.5H9.00391V15.5H7.00391V17.5ZM15.0039 17.5H17.0039V15.5H15.0039V17.5Z',
} as const;

export const IconSchoolBusStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bus-stroke-rounded IconSchoolBusStrokeRounded"
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
      <path 
        d={d.d7} 
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
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBusDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bus-duotone-rounded IconSchoolBusDuotoneRounded"
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d12} 
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
      <path 
        d={d.d7} 
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
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBusTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bus-twotone-rounded IconSchoolBusTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBusSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bus-solid-rounded IconSchoolBusSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconSchoolBusBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bus-bulk-rounded IconSchoolBusBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSchoolBusStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bus-stroke-sharp IconSchoolBusStrokeSharp"
    >
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
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
    </TheIconWrapper>
  );
};

export const IconSchoolBusSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="school-bus-solid-sharp IconSchoolBusSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d27} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d28} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSchoolBus: TheIconSelfPack = {
  name: 'SchoolBus',
  StrokeRounded: IconSchoolBusStrokeRounded,
  DuotoneRounded: IconSchoolBusDuotoneRounded,
  TwotoneRounded: IconSchoolBusTwotoneRounded,
  SolidRounded: IconSchoolBusSolidRounded,
  BulkRounded: IconSchoolBusBulkRounded,
  StrokeSharp: IconSchoolBusStrokeSharp,
  SolidSharp: IconSchoolBusSolidSharp,
};