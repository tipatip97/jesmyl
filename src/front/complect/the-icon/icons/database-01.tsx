import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M2.5 12H21.5',
  d3: 'M13 7L17 7',
  d4: 'M13 17L17 17',
  d5: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52165 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52169 21.5 5.28248 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12ZM9.5 7C9.5 7.69036 8.94036 8.25 8.25 8.25C7.55964 8.25 7 7.69036 7 7C7 6.30964 7.55964 5.75 8.25 5.75C8.94036 5.75 9.5 6.30964 9.5 7ZM8.25 18.25C8.94036 18.25 9.5 17.6904 9.5 17C9.5 16.3096 8.94036 15.75 8.25 15.75C7.55964 15.75 7 16.3096 7 17C7 17.6904 7.55964 18.25 8.25 18.25Z',
  d6: 'M12.0591 1.75H11.9448C9.75347 1.74999 8.0323 1.74998 6.68852 1.93059C5.31149 2.11568 4.21893 2.50271 3.3605 3.36091C2.50207 4.21911 2.11492 5.31137 1.92979 6.68802C1.79853 7.66402 1.76264 8.83914 1.75283 10.2489C1.74956 10.7194 1.74792 10.9546 1.89461 11.1023C2.04131 11.25 2.27775 11.25 2.75064 11.25H21.2533C21.7262 11.25 21.9626 11.25 22.1093 11.1023C22.256 10.9546 22.2544 10.7194 22.2511 10.2489C22.2413 8.83914 22.2054 7.66402 22.0741 6.68802C21.889 5.31137 21.5018 4.21911 20.6434 3.36091C19.785 2.50271 18.6924 2.11568 17.3154 1.93059C15.9716 1.74998 14.2504 1.74999 12.0591 1.75ZM6.5 6.5C6.5 5.67157 7.17157 5 8 5C8.82843 5 9.5 5.67157 9.5 6.5C9.5 7.32843 8.82843 8 8 8C7.17157 8 6.5 7.32843 6.5 6.5ZM12 6.5C12 6.08579 12.3358 5.75 12.75 5.75L16.75 5.75C17.1642 5.75 17.5 6.08579 17.5 6.5C17.5 6.91421 17.1642 7.25 16.75 7.25H12.75C12.3358 7.25 12 6.91421 12 6.5Z',
  d7: 'M21.2533 12.75H2.75064C2.27775 12.75 2.04131 12.75 1.89461 12.8977C1.74792 13.0454 1.74956 13.2806 1.75283 13.7511C1.76264 15.1609 1.79853 16.336 1.92979 17.312C2.11492 18.6886 2.50207 19.7809 3.3605 20.6391C4.21893 21.4973 5.31149 21.8843 6.68852 22.0694C8.0323 22.25 9.75344 22.25 11.9447 22.25H12.0591C14.2504 22.25 15.9716 22.25 17.3154 22.0694C18.6924 21.8843 19.785 21.4973 20.6434 20.6391C21.5018 19.7809 21.889 18.6886 22.0741 17.312C22.2054 16.336 22.2413 15.1609 22.2511 13.7511C22.2544 13.2806 22.256 13.0454 22.1093 12.8977C21.9626 12.75 21.7262 12.75 21.2533 12.75ZM6.5 17.5C6.5 16.6716 7.17157 16 8 16C8.82843 16 9.5 16.6716 9.5 17.5C9.5 18.3284 8.82843 19 8 19C7.17157 19 6.5 18.3284 6.5 17.5ZM12 17.5C12 17.0858 12.3358 16.75 12.75 16.75L16.75 16.75C17.1642 16.75 17.5 17.0858 17.5 17.5C17.5 17.9142 17.1642 18.25 16.75 18.25L12.75 18.25C12.3358 18.25 12 17.9142 12 17.5Z',
  d8: 'M11.9448 1.75H12.0591C14.2504 1.74999 15.9716 1.74998 17.3154 1.93059C18.6924 2.11568 19.785 2.50272 20.6434 3.36091C21.5018 4.21911 21.889 5.31137 22.0741 6.68802C22.2054 7.66402 22.2413 8.83914 22.2511 10.2489C22.2544 10.7194 22.256 10.9546 22.1093 11.1023C21.9626 11.25 21.7262 11.25 21.2533 11.25H2.75064C2.27775 11.25 2.04131 11.25 1.89461 11.1023C1.74792 10.9546 1.74956 10.7194 1.75283 10.2489C1.76264 8.83914 1.79853 7.66402 1.92979 6.68802C2.11492 5.31137 2.50207 4.21911 3.3605 3.36091C4.21893 2.50272 5.31149 2.11568 6.68852 1.93059C8.0323 1.74998 9.75347 1.74999 11.9448 1.75Z',
  d9: 'M8 5C7.17157 5 6.5 5.67157 6.5 6.5C6.5 7.32843 7.17157 8 8 8C8.82843 8 9.5 7.32843 9.5 6.5C9.5 5.67157 8.82843 5 8 5Z',
  d10: 'M12.75 5.75C12.3358 5.75 12 6.08579 12 6.5C12 6.91421 12.3358 7.25 12.75 7.25L16.75 7.25C17.1642 7.25 17.5 6.91421 17.5 6.5C17.5 6.08579 17.1642 5.75 16.75 5.75L12.75 5.75Z',
  d11: 'M2.75064 12.75H21.2533C21.7262 12.75 21.9626 12.75 22.1093 12.8977C22.256 13.0454 22.2544 13.2806 22.2511 13.7511C22.2413 15.1609 22.2054 16.336 22.0741 17.312C21.889 18.6886 21.5018 19.7809 20.6434 20.6391C19.785 21.4973 18.6924 21.8843 17.3154 22.0694C15.9716 22.25 14.2504 22.25 12.0591 22.25H11.9447C9.75344 22.25 8.0323 22.25 6.68852 22.0694C5.31149 21.8843 4.21893 21.4973 3.3605 20.6391C2.50206 19.7809 2.11492 18.6886 1.92979 17.312C1.79853 16.336 1.76264 15.1609 1.75283 13.7511C1.74956 13.2806 1.74792 13.0454 1.89461 12.8977C2.04131 12.75 2.27775 12.75 2.75064 12.75Z',
  d12: 'M8 16C7.17157 16 6.5 16.6716 6.5 17.5C6.5 18.3284 7.17157 19 8 19C8.82843 19 9.5 18.3284 9.5 17.5C9.5 16.6716 8.82843 16 8 16ZM12.75 16.75C12.3358 16.75 12 17.0858 12 17.5C12 17.9142 12.3358 18.25 12.75 18.25L16.75 18.25C17.1642 18.25 17.5 17.9142 17.5 17.5C17.5 17.0858 17.1642 16.75 16.75 16.75L12.75 16.75Z',
  d13: 'M21 3H3V21H21V3Z',
  d14: 'M3 12H21',
  d15: 'M11 7.5L18 7.5M9 7.5H6',
  d16: 'M11 16.5L18 16.5M9 16.5H6',
  d17: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V11.25H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM21.75 12.75H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V12.75ZM18 7.75L11 7.75V5.75L18 5.75V7.75ZM6 5.75H9V7.75H6L6 5.75ZM11 18.25L18 18.25V16.25H11V18.25ZM9 16.25H6L6 18.25H9V16.25Z',
} as const;

export const IconDatabase01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-01-stroke-rounded IconDatabase01StrokeRounded"
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
      <circle 
        cx="8.25" 
        cy="7" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="8.25" 
        cy="17" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconDatabase01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-01-duotone-rounded IconDatabase01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
      <circle 
        cx="8.25" 
        cy="7" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        cx="8.25" 
        cy="17" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconDatabase01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-01-twotone-rounded IconDatabase01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        opacity="var(--icon-opacity)" 
        cx="8.25" 
        cy="7" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
      <circle 
        opacity="var(--icon-opacity)" 
        cx="8.25" 
        cy="17" 
        r="1.25" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round"></circle>
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

export const IconDatabase01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-01-solid-rounded IconDatabase01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconDatabase01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-01-bulk-rounded IconDatabase01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabase01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-01-stroke-sharp IconDatabase01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDatabase01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="database-01-solid-sharp IconDatabase01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDatabase01: TheIconSelfPack = {
  name: 'Database01',
  StrokeRounded: IconDatabase01StrokeRounded,
  DuotoneRounded: IconDatabase01DuotoneRounded,
  TwotoneRounded: IconDatabase01TwotoneRounded,
  SolidRounded: IconDatabase01SolidRounded,
  BulkRounded: IconDatabase01BulkRounded,
  StrokeSharp: IconDatabase01StrokeSharp,
  SolidSharp: IconDatabase01SolidSharp,
};