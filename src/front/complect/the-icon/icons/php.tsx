import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M5 12V10C5 9.72386 5.22386 9.5 5.5 9.5H6.75C7.44036 9.5 8 10.0596 8 10.75C8 11.4404 7.44036 12 6.75 12H5ZM5 12V14.5',
  d3: 'M16 12V10C16 9.72386 16.2239 9.5 16.5 9.5H17.75C18.4404 9.5 19 10.0596 19 10.75C19 11.4404 18.4404 12 17.75 12H16ZM16 12V14.5',
  d4: 'M10.5 9.5V12M10.5 14.5V12M13.5 9.5V12M13.5 14.5V12M10.5 12H13.5',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM5.5 8.75C4.80964 8.75 4.25 9.30964 4.25 10V14.5C4.25 14.9142 4.58579 15.25 5 15.25C5.41421 15.25 5.75 14.9142 5.75 14.5V12.75H6.75C7.85457 12.75 8.75 11.8546 8.75 10.75C8.75 9.64543 7.85457 8.75 6.75 8.75H5.5ZM6.75 11.25H5.75V10.25H6.75C7.02614 10.25 7.25 10.4739 7.25 10.75C7.25 11.0261 7.02614 11.25 6.75 11.25ZM15.25 10C15.25 9.30964 15.8096 8.75 16.5 8.75H17.75C18.8546 8.75 19.75 9.64543 19.75 10.75C19.75 11.8546 18.8546 12.75 17.75 12.75H16.75V14.5C16.75 14.9142 16.4142 15.25 16 15.25C15.5858 15.25 15.25 14.9142 15.25 14.5V10ZM16.75 11.25H17.75C18.0261 11.25 18.25 11.0261 18.25 10.75C18.25 10.4739 18.0261 10.25 17.75 10.25H16.75V11.25ZM11.25 9.5C11.25 9.08579 10.9142 8.75 10.5 8.75C10.0858 8.75 9.75 9.08579 9.75 9.5V14.5C9.75 14.9142 10.0858 15.25 10.5 15.25C10.9142 15.25 11.25 14.9142 11.25 14.5V12.75H12.75V14.5C12.75 14.9142 13.0858 15.25 13.5 15.25C13.9142 15.25 14.25 14.9142 14.25 14.5V9.5C14.25 9.08579 13.9142 8.75 13.5 8.75C13.0858 8.75 12.75 9.08579 12.75 9.5V11.25H11.25V9.5Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M4.25 10C4.25 9.30964 4.80964 8.75 5.5 8.75H6.75C7.85457 8.75 8.75 9.64543 8.75 10.75C8.75 11.8546 7.85457 12.75 6.75 12.75H5.75V14.5C5.75 14.9142 5.41421 15.25 5 15.25C4.58579 15.25 4.25 14.9142 4.25 14.5V10ZM5.75 11.25H6.75C7.02614 11.25 7.25 11.0261 7.25 10.75C7.25 10.4739 7.02614 10.25 6.75 10.25H5.75V11.25Z',
  d8: 'M15.25 10C15.25 9.30964 15.8096 8.75 16.5 8.75H17.75C18.8546 8.75 19.75 9.64543 19.75 10.75C19.75 11.8546 18.8546 12.75 17.75 12.75H16.75V14.5C16.75 14.9142 16.4142 15.25 16 15.25C15.5858 15.25 15.25 14.9142 15.25 14.5V10ZM16.75 11.25H17.75C18.0261 11.25 18.25 11.0261 18.25 10.75C18.25 10.4739 18.0261 10.25 17.75 10.25H16.75V11.25Z',
  d9: 'M10.5 8.75C10.9142 8.75 11.25 9.08579 11.25 9.5V11.25H12.75V9.5C12.75 9.08579 13.0858 8.75 13.5 8.75C13.9142 8.75 14.25 9.08579 14.25 9.5V14.5C14.25 14.9142 13.9142 15.25 13.5 15.25C13.0858 15.25 12.75 14.9142 12.75 14.5V12.75H11.25V14.5C11.25 14.9142 10.9142 15.25 10.5 15.25C10.0858 15.25 9.75 14.9142 9.75 14.5V9.5C9.75 9.08579 10.0858 8.75 10.5 8.75Z',
  d10: 'M21 21V3H3V21L21 21Z',
  d11: 'M5.75 12V9.5H7C7.69036 9.5 8.25 10.0596 8.25 10.75C8.25 11.4404 7.69036 12 7 12H5.75ZM5.75 12V15M15.75 12V9.5H17C17.6904 9.5 18.25 10.0596 18.25 10.75C18.25 11.4404 17.6904 12 17 12H15.75ZM15.75 12V15M10.75 9V12M10.75 12V15M10.75 12H13.25M13.25 9V12M13.25 12V15',
  d12: 'M7 11.2503H6.5V10.2503H7C7.27614 10.2503 7.5 10.4742 7.5 10.7503C7.5 11.0264 7.27614 11.2503 7 11.2503Z',
  d13: 'M17 11.2503H16.5V10.2503H17C17.2761 10.2503 17.5 10.4742 17.5 10.7503C17.5 11.0264 17.2761 11.2503 17 11.2503Z',
  d14: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.1989 21.75 21.3897 21.671 21.5303 21.5303C21.671 21.3897 21.75 21.1989 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM5.75 8.75029C5.33579 8.75029 5 9.08608 5 9.50029V15.0003H6.5V12.7503H7C8.10457 12.7503 9 11.8549 9 10.7503C9 9.64572 8.10457 8.75029 7 8.75029H5.75ZM15.75 8.75029C15.3358 8.75029 15 9.08608 15 9.50029V15.0003H16.5V12.7503H17C18.1046 12.7503 19 11.8549 19 10.7503C19 9.64572 18.1046 8.75029 17 8.75029H15.75ZM11.5 8.75H10V15.0003H11.5V12.7503H12.5V15.0003H14V8.75H12.5V11.2503H11.5V8.75Z',
} as const;

export const IconPhpStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="php-stroke-rounded IconPhpStrokeRounded"
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

export const IconPhpDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="php-duotone-rounded IconPhpDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconPhpTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="php-twotone-rounded IconPhpTwotoneRounded"
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

export const IconPhpSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="php-solid-rounded IconPhpSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPhpBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="php-bulk-rounded IconPhpBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPhpStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="php-stroke-sharp IconPhpStrokeSharp"
    >
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

export const IconPhpSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="php-solid-sharp IconPhpSolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPhp: TheIconSelfPack = {
  name: 'Php',
  StrokeRounded: IconPhpStrokeRounded,
  DuotoneRounded: IconPhpDuotoneRounded,
  TwotoneRounded: IconPhpTwotoneRounded,
  SolidRounded: IconPhpSolidRounded,
  BulkRounded: IconPhpBulkRounded,
  StrokeSharp: IconPhpStrokeSharp,
  SolidSharp: IconPhpSolidSharp,
};