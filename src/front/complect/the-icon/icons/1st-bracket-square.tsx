import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M9 8C7.7945 8.85994 7 10.3304 7 12C7 13.6696 7.7945 15.1401 9 16M15 8C16.2055 8.85994 17 10.3304 17 12C17 13.6696 16.2055 15.1401 15 16',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM9.58073 8.8141C10.0303 8.49337 10.1348 7.86888 9.81409 7.41927C9.49337 6.96966 8.86888 6.86518 8.41927 7.18591C6.94665 8.23639 6 10.0122 6 12C6 13.9878 6.94665 15.7636 8.41927 16.8141C8.86888 17.1348 9.49337 17.0303 9.81409 16.5807C10.1348 16.1311 10.0303 15.5066 9.58073 15.1859C8.64235 14.5165 8 13.3514 8 12C8 10.6486 8.64235 9.48349 9.58073 8.8141ZM15.5807 7.18591C15.1311 6.86518 14.5066 6.96966 14.1859 7.41927C13.8652 7.86888 13.9697 8.49337 14.4193 8.8141C15.3576 9.48349 16 10.6486 16 12C16 13.3514 15.3576 14.5165 14.4193 15.1859C13.9697 15.5066 13.8652 16.1311 14.1859 16.5807C14.5066 17.0303 15.1311 17.1348 15.5807 16.8141C17.0533 15.7636 18 13.9878 18 12C18 10.0122 17.0533 8.23639 15.5807 7.18591Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M9.8141 7.41935C10.1348 7.86896 10.0303 8.49344 9.58073 8.81417C8.64235 9.48356 8 10.6487 8 12.0001C8 13.3515 8.64235 14.5166 9.58073 15.186C10.0303 15.5067 10.1348 16.1312 9.8141 16.5808C9.49337 17.0304 8.86888 17.1349 8.41927 16.8142C6.94665 15.7637 6 13.9878 6 12.0001C6 10.0123 6.94665 8.23647 8.41927 7.18598C8.86888 6.86525 9.49337 6.96973 9.8141 7.41935ZM14.1859 7.41935C14.5066 6.96973 15.1311 6.86525 15.5807 7.18598C17.0533 8.23647 18 10.0123 18 12.0001C18 13.9878 17.0533 15.7637 15.5807 16.8142C15.1311 17.1349 14.5066 17.0304 14.1859 16.5808C13.8652 16.1312 13.9697 15.5067 14.4193 15.186C15.3576 14.5166 16 13.3515 16 12.0001C16 10.6487 15.3576 9.48356 14.4193 8.81417C13.9697 8.49344 13.8652 7.86896 14.1859 7.41935Z',
  d6: 'M3 21H21V3.00046L3 3V21Z',
  d7: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM8.5 11.9996C8.5 10.6483 9.14235 9.48313 10.0807 8.81374L8.91927 7.18555C7.44665 8.23603 6.5 10.0119 6.5 11.9996C6.5 13.9874 7.44665 15.7633 8.91927 16.8137L10.0807 15.1855C9.14235 14.5162 8.5 13.351 8.5 11.9996ZM17.5 11.9996C17.5 10.0119 16.5533 8.23603 15.0807 7.18555L13.9193 8.81374C14.8576 9.48313 15.5 10.6483 15.5 11.9996C15.5 13.351 14.8576 14.5162 13.9193 15.1855L15.0807 16.8137C16.5533 15.7633 17.5 13.9874 17.5 11.9996Z',
} as const;

export const Icon1stBracketSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-square-stroke-rounded Icon1stBracketSquareStrokeRounded"
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

export const Icon1stBracketSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-square-duotone-rounded Icon1stBracketSquareDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const Icon1stBracketSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-square-twotone-rounded Icon1stBracketSquareTwotoneRounded"
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

export const Icon1stBracketSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-square-solid-rounded Icon1stBracketSquareSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon1stBracketSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-square-bulk-rounded Icon1stBracketSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon1stBracketSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-square-stroke-sharp Icon1stBracketSquareStrokeSharp"
    >
      <path 
        d={d.d6} 
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
    </TheIconWrapper>
  );
};

export const Icon1stBracketSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="1st-bracket-square-solid-sharp Icon1stBracketSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOf1stBracketSquare: TheIconSelfPack = {
  name: '1stBracketSquare',
  StrokeRounded: Icon1stBracketSquareStrokeRounded,
  DuotoneRounded: Icon1stBracketSquareDuotoneRounded,
  TwotoneRounded: Icon1stBracketSquareTwotoneRounded,
  SolidRounded: Icon1stBracketSquareSolidRounded,
  BulkRounded: Icon1stBracketSquareBulkRounded,
  StrokeSharp: Icon1stBracketSquareStrokeSharp,
  SolidSharp: Icon1stBracketSquareSolidSharp,
};