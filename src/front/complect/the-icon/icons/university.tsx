import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 22H21.5',
  d2: 'M3 13V22M21 13V22',
  d3: 'M7.5 8V22M16.5 8V22',
  d4: 'M2 13H7M22 13H17',
  d5: 'M6.5 8H17.5',
  d6: 'M12 8V4.98221M12 4.98221V2.97035C12 2.49615 12 2.25905 12.1464 2.11173C12.6061 1.64939 14.5 2.74303 15.2203 3.18653C15.8285 3.56105 16 4.30914 16 4.98221H12Z',
  d7: 'M12 22L12 20',
  d8: 'M10.5 12L10.5 12.5M13.5 12V12.5',
  d9: 'M10.5 16L10.5 16.5M13.5 16V16.5',
  d10: 'M7.5 22V8H16.5V22H7.5Z',
  d11: 'M3 13V22M21 13V22M17 13H22M2 13H7',
  d12: 'M3.25 12C3.80228 12 4.25 12.4477 4.25 13V22C4.25 22.5523 3.80228 23 3.25 23C2.69772 23 2.25 22.5523 2.25 22V13C2.25 12.4477 2.69772 12 3.25 12ZM20.75 12C21.3023 12 21.75 12.4477 21.75 13V22C21.75 22.5523 21.3023 23 20.75 23C20.1977 23 19.75 22.5523 19.75 22V13C19.75 12.4477 20.1977 12 20.75 12Z',
  d13: 'M1 13C1 12.4477 1.44772 12 2 12H7C7.55228 12 8 12.4477 8 13C8 13.5523 7.55228 14 7 14H2C1.44772 14 1 13.5523 1 13ZM16 13C16 12.4477 16.4477 12 17 12H22C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14H17C16.4477 14 16 13.5523 16 13Z',
  d14: 'M1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22Z',
  d15: 'M16 5.73209H12.75V7.99988C12.75 8.41409 12.4142 8.74988 12 8.74988C11.5858 8.74988 11.25 8.41409 11.25 7.99988V2.97023L11.25 2.93579C11.2499 2.72925 11.2498 2.5067 11.2749 2.31898C11.3042 2.09966 11.3796 1.81926 11.6146 1.58285C12.0147 1.18033 12.572 1.23484 12.8489 1.2834C13.1892 1.34307 13.5552 1.47768 13.8857 1.62195C14.5559 1.9145 15.2453 2.32103 15.6135 2.54777C16.5707 3.13718 16.75 4.24513 16.75 4.98209C16.75 5.3963 16.4142 5.73209 16 5.73209Z',
  d16: 'M6.5 7.25C6.08579 7.25 5.75 7.58579 5.75 8C5.75 8.41421 6.08579 8.75 6.5 8.75H6.75L6.75 22C6.75 22.4142 7.08579 22.75 7.5 22.75H12C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75H16.5C16.9142 22.75 17.25 22.4142 17.25 22V8.75H17.5C17.9142 8.75 18.25 8.41421 18.25 8C18.25 7.58579 17.9142 7.25 17.5 7.25L6.5 7.25ZM10.5 11.25C10.9142 11.25 11.25 11.5858 11.25 12V12.5C11.25 12.9142 10.9142 13.25 10.5 13.25C10.0858 13.25 9.75 12.9142 9.75 12.5V12C9.75 11.5858 10.0858 11.25 10.5 11.25ZM13.5 11.25C13.9142 11.25 14.25 11.5858 14.25 12V12.5C14.25 12.9142 13.9142 13.25 13.5 13.25C13.0858 13.25 12.75 12.9142 12.75 12.5V12C12.75 11.5858 13.0858 11.25 13.5 11.25ZM11.25 16C11.25 15.5858 10.9142 15.25 10.5 15.25C10.0858 15.25 9.75 15.5858 9.75 16V16.5C9.75 16.9142 10.0858 17.25 10.5 17.25C10.9142 17.25 11.25 16.9142 11.25 16.5V16ZM14.25 16C14.25 15.5858 13.9142 15.25 13.5 15.25C13.0858 15.25 12.75 15.5858 12.75 16V16.5C12.75 16.9142 13.0858 17.25 13.5 17.25C13.9142 17.25 14.25 16.9142 14.25 16.5V16Z',
  d17: 'M5.75 8C5.75 7.58579 6.08579 7.25 6.5 7.25H17.5C17.9142 7.25 18.25 7.58579 18.25 8C18.25 8.41421 17.9142 8.75 17.5 8.75H17.25V22C17.25 22.4142 16.9142 22.75 16.5 22.75H7.5C7.08579 22.75 6.75 22.4142 6.75 22V8.75H6.5C6.08579 8.75 5.75 8.41421 5.75 8Z',
  d18: 'M2 14H2.25L2.25 22C2.25 22.5523 2.69772 23 3.25 23C3.80228 23 4.25 22.5523 4.25 22L4.25 14H6.75L6.75 12H3.25H2C1.44772 12 1 12.4477 1 13C1 13.5523 1.44772 14 2 14ZM17.25 12H20.75H22C22.5523 12 23 12.4477 23 13C23 13.5523 22.5523 14 22 14H21.75V22C21.75 22.5523 21.3023 23 20.75 23C20.1977 23 19.75 22.5523 19.75 22V14H17.25V12Z',
  d19: 'M5.75 8C5.75 7.58579 6.08579 7.25 6.5 7.25H17.5C17.9142 7.25 18.25 7.58579 18.25 8C18.25 8.41421 17.9142 8.75 17.5 8.75H6.5C6.08579 8.75 5.75 8.41421 5.75 8Z',
  d20: 'M12 19.25C12.4142 19.25 12.75 19.5858 12.75 20L12.75 22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22L11.25 20C11.25 19.5858 11.5858 19.25 12 19.25Z',
  d21: 'M10.5 11.25C10.9142 11.25 11.25 11.5858 11.25 12L11.25 12.5C11.25 12.9142 10.9142 13.25 10.5 13.25C10.0858 13.25 9.75 12.9142 9.75 12.5L9.75 12C9.75 11.5858 10.0858 11.25 10.5 11.25ZM13.5 11.25C13.9142 11.25 14.25 11.5858 14.25 12V12.5C14.25 12.9142 13.9142 13.25 13.5 13.25C13.0858 13.25 12.75 12.9142 12.75 12.5V12C12.75 11.5858 13.0858 11.25 13.5 11.25Z',
  d22: 'M10.5 15.25C10.9142 15.25 11.25 15.5858 11.25 16L11.25 16.5C11.25 16.9142 10.9142 17.25 10.5 17.25C10.0858 17.25 9.75 16.9142 9.75 16.5L9.75 16C9.75 15.5858 10.0858 15.25 10.5 15.25ZM13.5 15.25C13.9142 15.25 14.25 15.5858 14.25 16V16.5C14.25 16.9142 13.9142 17.25 13.5 17.25C13.0858 17.25 12.75 16.9142 12.75 16.5V16C12.75 15.5858 13.0858 15.25 13.5 15.25Z',
  d23: 'M1 22.0005H22.5',
  d24: 'M3 12.9971V21.9821M21 12.9971V21.9821',
  d25: 'M7.5 8.00488V21.9817M16.5 8.00488V21.9817',
  d26: 'M1 13.0068H7M23 13.0068H17',
  d27: 'M5.5 8.00488H18.5',
  d28: 'M12 21.9815V18.9873',
  d29: 'M10.5 11.0088V12.5077M13.5 11.0088V12.5077',
  d30: 'M10.5 14.9941V16.4917M13.5 14.9941V16.4917',
  d31: 'M12.2979 8.02798L12.2979 5.00563M12.2979 5.00563V2.00949C12.2979 2.00398 12.3023 1.99951 12.3077 1.99951H16.2092V5.00563H12.2979Z',
  d32: 'M5.5 8.75H6.75L6.75 22C6.75 22.4142 7.08579 22.75 7.5 22.75H16.5C16.9142 22.75 17.25 22.4142 17.25 22V8.75H18.5V7.25L5.5 7.25V8.75ZM13 22V19H11V22L13 22ZM9.75 12.5L9.75 11H11.25L11.25 12.5H9.75ZM12.75 12.5L12.75 11L14.25 11V12.5L12.75 12.5ZM9.75 15V16.5H11.25V15H9.75ZM12.75 15V16.5H14.25L14.25 15H12.75Z',
  d33: 'M22.5 22.75H1V21.25H22.5V22.75Z',
  d34: 'M2.25 13.75V22H3.75V13.75H7V12.25H1V13.75H2.25Z',
  d35: 'M20.25 13.75V22H21.75V13.75H23V12.25H17V13.75H20.25Z',
  d36: 'M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25H16.75V4.7322H12.75V7.99999H11.25V2Z',
} as const;

export const IconUniversityStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="university-stroke-rounded IconUniversityStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUniversityDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="university-duotone-rounded IconUniversityDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUniversityTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="university-twotone-rounded IconUniversityTwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d11} 
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
        opacity="var(--icon-opacity)" 
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUniversitySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="university-solid-rounded IconUniversitySolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconUniversityBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="university-bulk-rounded IconUniversityBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUniversityStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="university-stroke-sharp IconUniversityStrokeSharp"
    >
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
        d={d.d25} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d26} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d27} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d28} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d29} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d30} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d31} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUniversitySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="university-solid-sharp IconUniversitySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d32} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d33} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d34} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d35} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d36} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUniversity: TheIconSelfPack = {
  name: 'University',
  StrokeRounded: IconUniversityStrokeRounded,
  DuotoneRounded: IconUniversityDuotoneRounded,
  TwotoneRounded: IconUniversityTwotoneRounded,
  SolidRounded: IconUniversitySolidRounded,
  BulkRounded: IconUniversityBulkRounded,
  StrokeSharp: IconUniversityStrokeSharp,
  SolidSharp: IconUniversitySolidSharp,
};