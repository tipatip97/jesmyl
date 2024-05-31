import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8 12L12 6L16 12M8 12L12 18L16 12M8 12L12 13.5L16 12',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM8 12L12 6L16 12L12 18L8 12Z',
  d4: 'M17.312 1.93059C15.9686 1.74998 14.1335 1.74999 11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.86647 1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.86646 22.25 12.0572 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572C22.25 9.86646 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059ZM12.0001 5.25C12.2509 5.25 12.4851 5.37533 12.6242 5.58398L16.322 11.1307L12.0004 12.7023L7.67839 11.1306L11.3761 5.58397C11.5152 5.37533 11.7494 5.25 12.0001 5.25ZM12.2567 14.2052L16.4474 12.6812L12.6242 18.416C12.4851 18.6247 12.2509 18.75 12.0001 18.75C11.7494 18.75 11.5152 18.6247 11.3761 18.416L7.55273 12.681L11.744 14.2052C11.9096 14.2654 12.0911 14.2654 12.2567 14.2052Z',
  d5: 'M11.9428 1.75C14.1335 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.86646 22.25 12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572C9.86646 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572C1.74999 9.86647 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75Z',
  d6: 'M12.6242 5.58397C12.4851 5.37533 12.2509 5.25 12.0001 5.25C11.7494 5.25 11.5152 5.37533 11.3761 5.58397L7.67839 11.1306L12.0004 12.7023L16.322 11.1307L12.6242 5.58397Z',
  d7: 'M16.4474 12.6812L12.2567 14.2052C12.0911 14.2654 11.9096 14.2654 11.744 14.2052L7.55273 12.681L11.3761 18.416C11.5152 18.6247 11.7494 18.75 12.0001 18.75C12.2509 18.75 12.4851 18.6247 12.6242 18.416L16.4474 12.6812Z',
  d8: 'M21 3.00041L3 3V21H21V3.00041Z',
  d9: 'M3.00002 2.25C2.8011 2.25 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00041C21.75 2.5862 21.4142 2.25042 21 2.25041L3.00002 2.25ZM12.0002 5.25C12.2509 5.25 12.4851 5.37533 12.6242 5.58398L16.322 11.1307L12.0004 12.7022L7.67842 11.1305L11.3761 5.58397C11.5152 5.37533 11.7494 5.25 12.0002 5.25ZM12.2567 14.205L16.4475 12.6811L12.6242 18.416C12.4851 18.6247 12.2509 18.75 12.0002 18.75C11.7494 18.75 11.5152 18.6247 11.3761 18.416L7.55273 12.6809L11.7441 14.205C11.9096 14.2653 12.0911 14.2653 12.2567 14.205Z',
} as const;

export const IconEthereumRectangleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-rectangle-stroke-rounded IconEthereumRectangleStrokeRounded"
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

export const IconEthereumRectangleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-rectangle-duotone-rounded IconEthereumRectangleDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
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

export const IconEthereumRectangleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-rectangle-twotone-rounded IconEthereumRectangleTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconEthereumRectangleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-rectangle-solid-rounded IconEthereumRectangleSolidRounded"
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

export const IconEthereumRectangleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-rectangle-bulk-rounded IconEthereumRectangleBulkRounded"
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
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconEthereumRectangleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-rectangle-stroke-sharp IconEthereumRectangleStrokeSharp"
    >
      <path 
        d={d.d8} 
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

export const IconEthereumRectangleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="ethereum-rectangle-solid-sharp IconEthereumRectangleSolidSharp"
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

export const iconPackOfEthereumRectangle: TheIconSelfPack = {
  name: 'EthereumRectangle',
  StrokeRounded: IconEthereumRectangleStrokeRounded,
  DuotoneRounded: IconEthereumRectangleDuotoneRounded,
  TwotoneRounded: IconEthereumRectangleTwotoneRounded,
  SolidRounded: IconEthereumRectangleSolidRounded,
  BulkRounded: IconEthereumRectangleBulkRounded,
  StrokeSharp: IconEthereumRectangleStrokeSharp,
  SolidSharp: IconEthereumRectangleSolidSharp,
};