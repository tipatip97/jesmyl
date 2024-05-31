import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M7 7.8V16.2C7 17.1941 7.8395 18 8.87508 18C9.91065 18 10.7502 17.1941 10.7502 16.2L10.7505 13.3411L13.5888 17.2323C14.1828 18.0466 15.352 18.2445 16.2003 17.6743C17.0486 17.1041 17.2547 15.9817 16.6607 15.1674L14.3504 12L16.6607 8.83259C17.2547 8.01826 17.0486 6.89588 16.2003 6.32568C15.352 5.75548 14.1828 5.95339 13.5888 6.76772L10.7505 10.6589L10.7502 7.8C10.7502 6.80589 9.91065 6 8.87508 6C7.8395 6 7 6.80589 7 7.8Z',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM8.87508 18C7.8395 18 7 17.1941 7 16.2V7.8C7 6.80589 7.8395 6 8.87508 6C9.91066 6 10.7502 6.80589 10.7502 7.8L10.7505 10.6589L13.5888 6.76772C14.1828 5.95339 15.352 5.75548 16.2003 6.32568C17.0486 6.89588 17.2547 8.01826 16.6607 8.83259L14.3504 12L16.6607 15.1674C17.2547 15.9817 17.0486 17.1041 16.2003 17.6743C15.352 18.2445 14.1828 18.0466 13.5888 17.2323L10.7505 13.3411L10.7502 16.2C10.7502 17.1941 9.91066 18 8.87508 18Z',
  d4: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM7 16.2L7 7.8C7 6.80589 7.8395 6 8.87508 6C9.91066 6 10.7502 6.80589 10.7502 7.8L10.7503 9.12527C10.7504 9.60912 11.3691 9.81076 11.6543 9.41986L13.5888 6.76772C14.1828 5.95339 15.352 5.75548 16.2003 6.32568C17.0486 6.89588 17.2547 8.01826 16.6607 8.83259L14.5653 11.7053C14.4373 11.8809 14.4373 12.1191 14.5653 12.2947L16.6607 15.1674C17.2547 15.9817 17.0486 17.1041 16.2003 17.6743C15.352 18.2445 14.1828 18.0466 13.5888 17.2323L11.6543 14.5801C11.3691 14.1892 10.7504 14.3909 10.7503 14.8747L10.7502 16.2C10.7502 17.1941 9.91066 18 8.87508 18C7.8395 18 7 17.1941 7 16.2Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M7 7.8V16.2C7 17.1941 7.8395 18 8.87508 18C9.91065 18 10.7502 17.1941 10.7502 16.2L10.7503 14.8747C10.7504 14.3909 11.3691 14.1892 11.6543 14.5801L13.5888 17.2323C14.1828 18.0466 15.352 18.2445 16.2003 17.6743C17.0486 17.1041 17.2547 15.9817 16.6607 15.1674L14.5653 12.2947C14.4372 12.1191 14.4372 11.8809 14.5653 11.7053L16.6607 8.83259C17.2547 8.01826 17.0486 6.89588 16.2003 6.32568C15.352 5.75548 14.1828 5.95339 13.5888 6.76772L11.6543 9.41985C11.3691 9.81076 10.7504 9.60912 10.7503 9.12527L10.7502 7.8C10.7502 6.80589 9.91065 6 8.87508 6C7.8395 6 7 6.80589 7 7.8Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M6.96875 18.0011V5.99007C6.96875 5.98638 6.97156 5.9834 6.97503 5.9834H10.7615C10.765 5.9834 10.7678 5.98646 10.7678 5.9902L10.6819 10.6711C10.6818 10.6773 10.689 10.6803 10.6929 10.6756L14.5198 5.98846C14.5221 5.98567 14.5261 5.98537 14.5287 5.9878L17.0234 8.30179C17.026 8.30417 17.0263 8.30828 17.0241 8.31107L14.1786 11.9576L17.0242 15.65C17.0263 15.6528 17.026 15.6568 17.0235 15.6592L14.5431 18.0033C14.5405 18.0058 14.5365 18.0055 14.5342 18.0027L10.7789 13.3616C10.7751 13.3569 10.7679 13.3597 10.7679 13.3659V18.0011C10.7679 18.0048 10.7651 18.0078 10.7616 18.0078H6.97503C6.97156 18.0078 6.96875 18.0048 6.96875 18.0011Z',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM17 8.33333L14.1875 12L17 15.6667L14.5 18L10.7505 13.5L10.7502 18H7L7 6L10.7502 6L10.7505 10.5L14.5 6L17 8.33333Z',
} as const;

export const IconKickstarter02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kickstarter-02-stroke-rounded IconKickstarter02StrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKickstarter02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kickstarter-02-duotone-rounded IconKickstarter02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKickstarter02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kickstarter-02-twotone-rounded IconKickstarter02TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconKickstarter02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kickstarter-02-solid-rounded IconKickstarter02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKickstarter02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kickstarter-02-bulk-rounded IconKickstarter02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconKickstarter02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kickstarter-02-stroke-sharp IconKickstarter02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconKickstarter02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="kickstarter-02-solid-sharp IconKickstarter02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfKickstarter02: TheIconSelfPack = {
  name: 'Kickstarter02',
  StrokeRounded: IconKickstarter02StrokeRounded,
  DuotoneRounded: IconKickstarter02DuotoneRounded,
  TwotoneRounded: IconKickstarter02TwotoneRounded,
  SolidRounded: IconKickstarter02SolidRounded,
  BulkRounded: IconKickstarter02BulkRounded,
  StrokeSharp: IconKickstarter02StrokeSharp,
  SolidSharp: IconKickstarter02SolidSharp,
};