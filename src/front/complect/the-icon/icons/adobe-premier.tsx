import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M7 16V12M7 12V8.57143C7 8.21809 7.23449 8 7.57143 8H9C10.1046 8 11 8.89543 11 10C11 11.1046 10.1046 12 9 12H7Z',
  d3: 'M14 10.5V12.5M14 12.5V16M14 12.5C14.561 11.752 15.0832 10.8199 16 10.5663C16.1547 10.5235 16.3207 10.5 16.5 10.5',
  d4: 'M7 16V12M7 12V8.57143C7 8.21809 7.23449 8 7.57143 8H9C10.1046 8 11 8.89543 11 10C11 11.1046 10.1046 12 9 12H7ZM14 10.5V12.5M14 12.5V16M14 12.5C14.561 11.752 15.0832 10.8199 16 10.5663C16.1547 10.5235 16.3207 10.5 16.5 10.5',
  d5: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM7.82143 7.25C7.48957 7.25 7.14727 7.36005 6.88451 7.61746C6.61933 7.87725 6.5 8.22371 6.5 8.57143L6.5 16C6.5 16.4142 6.83579 16.75 7.25 16.75C7.66421 16.75 8 16.4142 8 16V12.75L9.25 12.75C10.7688 12.75 12 11.5188 12 10C12 8.48122 10.7688 7.25 9.25 7.25L7.82143 7.25ZM9.25 11.25L8 11.25V8.75L9.25 8.75C9.94036 8.75 10.5 9.30964 10.5 10C10.5 10.6904 9.94036 11.25 9.25 11.25ZM14.25 9.75C14.6355 9.75 14.953 10.0408 14.9952 10.415C15.2846 10.1707 15.6307 9.95943 16.05 9.84343C16.2708 9.78235 16.5041 9.75 16.75 9.75C17.1642 9.75 17.5 10.0858 17.5 10.5C17.5 10.9142 17.1642 11.25 16.75 11.25C16.6373 11.25 16.5386 11.2646 16.45 11.2891C16.1909 11.3608 15.9488 11.5373 15.6796 11.8432C15.4909 12.0576 15.3362 12.2751 15.1621 12.5197L15.1621 12.5198C15.1102 12.5926 15.0567 12.6679 15 12.7462L15 16C15 16.4142 14.6642 16.75 14.25 16.75C13.8358 16.75 13.5 16.4142 13.5 16L13.5 10.5C13.5 10.0858 13.8358 9.75 14.25 9.75Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M6.88451 7.61746C7.14727 7.36005 7.48957 7.25 7.82143 7.25H9.25C10.7688 7.25 12 8.48122 12 10C12 11.5188 10.7688 12.75 9.25 12.75H8V16C8 16.4142 7.66421 16.75 7.25 16.75C6.83579 16.75 6.5 16.4142 6.5 16V8.57143C6.5 8.22371 6.61933 7.87725 6.88451 7.61746ZM8 11.25H9.25C9.94036 11.25 10.5 10.6904 10.5 10C10.5 9.30964 9.94036 8.75 9.25 8.75H8V11.25ZM14.9952 10.415C14.953 10.0408 14.6355 9.75 14.25 9.75C13.8358 9.75 13.5 10.0858 13.5 10.5V16C13.5 16.4142 13.8358 16.75 14.25 16.75C14.6642 16.75 15 16.4142 15 16V12.7462C15.0567 12.6679 15.1102 12.5926 15.1621 12.5198C15.3362 12.2751 15.4909 12.0576 15.6796 11.8432C15.9488 11.5373 16.1909 11.3608 16.45 11.2891C16.5386 11.2646 16.6373 11.25 16.75 11.25C17.1642 11.25 17.5 10.9142 17.5 10.5C17.5 10.0858 17.1642 9.75 16.75 9.75C16.5041 9.75 16.2708 9.78235 16.05 9.84343C15.6307 9.95943 15.2846 10.1707 14.9952 10.415Z',
  d8: 'M21 3V21H3V3H21Z',
  d9: 'M14 16V10.5H16.5',
  d10: 'M6.99512 12.0001H11.0042C11.0097 12.0001 11.0142 11.9956 11.0142 11.9901V7.99535C11.0142 7.98983 11.0097 7.98535 11.0042 7.98535H6.99512V12.0001ZM6.99512 12.0001V16.7485',
  d11: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25L21 2.25C21.4142 2.25 21.75 2.58579 21.75 3L21.75 21C21.75 21.4142 21.4142 21.75 21 21.75L3 21.75C2.58579 21.75 2.25 21.4142 2.25 21L2.25 3ZM6.25 7.25L11 7.25C11.4142 7.25 11.75 7.58579 11.75 8V12C11.75 12.4142 11.4142 12.75 11 12.75L7.75 12.75V16.75H6.25L6.25 7.25ZM7.75 11.25L10.25 11.25V8.75L7.75 8.75L7.75 11.25ZM14 9.75C13.5858 9.75 13.25 10.0858 13.25 10.5L13.25 16.75H14.75L14.75 11.25H17.25V9.75H14Z',
} as const;

export const IconAdobePremierStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-premier-stroke-rounded IconAdobePremierStrokeRounded"
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
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobePremierDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-premier-duotone-rounded IconAdobePremierDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconAdobePremierTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-premier-twotone-rounded IconAdobePremierTwotoneRounded"
    >
      <path 
        d={d.d1} 
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
    </TheIconWrapper>
  );
};

export const IconAdobePremierSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-premier-solid-rounded IconAdobePremierSolidRounded"
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

export const IconAdobePremierBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-premier-bulk-rounded IconAdobePremierBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconAdobePremierStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-premier-stroke-sharp IconAdobePremierStrokeSharp"
    >
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobePremierSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-premier-solid-sharp IconAdobePremierSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAdobePremier: TheIconSelfPack = {
  name: 'AdobePremier',
  StrokeRounded: IconAdobePremierStrokeRounded,
  DuotoneRounded: IconAdobePremierDuotoneRounded,
  TwotoneRounded: IconAdobePremierTwotoneRounded,
  SolidRounded: IconAdobePremierSolidRounded,
  BulkRounded: IconAdobePremierBulkRounded,
  StrokeSharp: IconAdobePremierStrokeSharp,
  SolidSharp: IconAdobePremierSolidSharp,
};