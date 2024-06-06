import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 16C14.9241 16 15.6733 15.4883 15.6733 14.8571C15.6733 13.6365 15.6869 13.1336 16.755 12.4041C17.0817 12.1809 17.0817 11.8191 16.755 11.5959C15.6869 10.8664 15.6733 10.3635 15.6733 9.14286C15.6733 8.51167 14.9241 8 14 8M10 16C9.07588 16 8.32673 15.4883 8.32673 14.8571C8.32673 13.6365 8.31312 13.1336 7.24505 12.4041C6.91832 12.1809 6.91832 11.8191 7.24504 11.5959C8.31312 10.8664 8.32673 10.3635 8.32673 9.14286C8.32673 8.51167 9.07588 8 10 8',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM10 7C9.3631 7 8.74235 7.1746 8.25281 7.50897C7.7682 7.83996 7.32673 8.40014 7.32673 9.14286C7.32673 9.80662 7.31064 10.039 7.24871 10.2061C7.21336 10.3016 7.13104 10.4628 6.68104 10.7702C6.31004 11.0236 6 11.4516 6 12C6 12.5484 6.31004 12.9764 6.68104 13.2298C7.13104 13.5372 7.21336 13.6984 7.24871 13.7939C7.31064 13.961 7.32673 14.1934 7.32673 14.8571C7.32673 15.5999 7.7682 16.16 8.25281 16.491C8.74235 16.8254 9.3631 17 10 17C10.5523 17 11 16.5523 11 16C11 15.4477 10.5523 15 10 15C9.71277 15 9.49689 14.9188 9.38082 14.8395C9.35515 14.822 9.33794 14.8076 9.32675 14.797L9.32676 14.7898C9.32712 14.2499 9.32752 13.6479 9.12411 13.099C8.96218 12.6619 8.69876 12.3119 8.35281 12C8.69876 11.6881 8.96218 11.3381 9.12411 10.901C9.32752 10.3521 9.32711 9.74294 9.32675 9.20298C9.44281 9.1237 9.71277 9 10 9C10.5523 9 11 8.55229 11 8C11 7.44772 10.5523 7 10 7ZM14 7C13.4477 7 13 7.44772 13 8C13 8.55229 13.4477 9 14 9C14.2872 9 14.5572 9.1237 14.6732 9.20297C14.6729 9.74294 14.6725 10.3521 14.8759 10.901C15.0378 11.3381 15.3012 11.6881 15.6472 12C15.3012 12.3119 15.0378 12.6619 14.8759 13.099C14.6725 13.6479 14.6729 14.2499 14.6732 14.7898L14.6732 14.797C14.6621 14.8076 14.6448 14.822 14.6192 14.8395C14.5031 14.9188 14.2872 15 14 15C13.4477 15 13 15.4477 13 16C13 16.5523 13.4477 17 14 17C14.6369 17 15.2576 16.8254 15.7472 16.491C16.2318 16.16 16.6733 15.5999 16.6733 14.8571C16.6733 14.1934 16.6894 13.961 16.7513 13.7939C16.7866 13.6984 16.869 13.5372 17.319 13.2298C17.69 12.9764 18 12.5484 18 12C18 11.4516 17.69 11.0236 17.319 10.7702C16.869 10.4628 16.7866 10.3016 16.7513 10.2061C16.6894 10.039 16.6733 9.80662 16.6733 9.14286C16.6733 8.40014 16.2318 7.83996 15.7472 7.50897C15.2576 7.1746 14.6369 7 14 7Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M8.25281 7.50897C8.74235 7.1746 9.3631 7 10 7C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9C9.71277 9 9.44281 9.1237 9.32675 9.20297V9.20298C9.32711 9.74294 9.32752 10.3521 9.12411 10.901C8.96218 11.3381 8.69876 11.6881 8.35281 12C8.69876 12.3119 8.96218 12.6619 9.12411 13.099C9.32752 13.6479 9.32712 14.2499 9.32676 14.7898V14.7898L9.32675 14.797C9.33794 14.8076 9.35515 14.822 9.38082 14.8395C9.49689 14.9188 9.71277 15 10 15C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17C9.3631 17 8.74235 16.8254 8.25281 16.491C7.7682 16.16 7.32673 15.5999 7.32673 14.8571C7.32673 14.1934 7.31064 13.961 7.24871 13.7939C7.21336 13.6984 7.13104 13.5372 6.68104 13.2298C6.31004 12.9764 6 12.5484 6 12C6 11.4516 6.31004 11.0236 6.68104 10.7702C7.13104 10.4628 7.21336 10.3016 7.24871 10.2061C7.31064 10.039 7.32673 9.80662 7.32673 9.14286C7.32673 8.40014 7.7682 7.83996 8.25281 7.50897Z',
  d6: 'M13 8C13 7.44772 13.4477 7 14 7C14.6369 7 15.2576 7.1746 15.7472 7.50897C16.2318 7.83996 16.6733 8.40014 16.6733 9.14286C16.6733 9.80662 16.6894 10.039 16.7513 10.2061C16.7866 10.3016 16.869 10.4628 17.319 10.7702C17.69 11.0236 18 11.4516 18 12C18 12.5484 17.69 12.9764 17.319 13.2298C16.869 13.5372 16.7866 13.6984 16.7513 13.7939C16.6894 13.961 16.6733 14.1934 16.6733 14.8571C16.6733 15.5999 16.2318 16.16 15.7472 16.491C15.2576 16.8254 14.6369 17 14 17C13.4477 17 13 16.5523 13 16C13 15.4477 13.4477 15 14 15C14.2872 15 14.5031 14.9188 14.6192 14.8395C14.6448 14.822 14.6621 14.8076 14.6732 14.797L14.6732 14.7898C14.6729 14.2499 14.6725 13.6479 14.8759 13.099C15.0378 12.6619 15.3012 12.3119 15.6472 12C15.3012 11.6881 15.0378 11.3381 14.8759 10.901C14.6725 10.3521 14.6729 9.74294 14.6732 9.20297C14.5572 9.1237 14.2872 9 14 9C13.4477 9 13 8.55228 13 8Z',
  d7: 'M3 21H21V3.00046L3 3V21Z',
  d8: 'M14.0037 7.99609H15.9977C16.0032 7.99609 16.0077 8.00057 16.0077 8.00609V10.4923L17.0023 11.9883C17.0046 11.9917 17.0046 11.996 17.0023 11.9994L16.0077 13.4954V15.9831C16.0077 15.9886 16.0032 15.9931 15.9977 15.9931H14.0098M10.0011 15.9931H8.02313C8.01761 15.9931 8.01313 15.9886 8.01313 15.9831V13.4955L7.00658 11.9972C7.00431 11.9938 7.00432 11.9894 7.00659 11.986L8.01313 10.4945V8.00609C8.01313 8.00057 8.01761 7.99609 8.02313 7.99609H10.0061',
  d9: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM8 7C7.44772 7 7 7.44772 7 8V10.1972L6.16795 11.4453C5.94402 11.7812 5.94402 12.2188 6.16795 12.5547L7 13.8028V16C7 16.5523 7.44772 17 8 17H10V15H9V13.1972L8.20185 12L9 10.8028V9H10V7H8ZM14 9H15V10.8028L15.7981 12L15 13.1972V15H14V17H16C16.5523 17 17 16.5523 17 16V13.8028L17.8321 12.5547C18.056 12.2188 18.056 11.7812 17.8321 11.4453L17 10.1972V8C17 7.44772 16.5523 7 16 7H14V9Z',
};

export const Icon3rdBracketSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-square-stroke-rounded Icon3rdBracketSquareStrokeRounded"
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

export const Icon3rdBracketSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-square-duotone-rounded Icon3rdBracketSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const Icon3rdBracketSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-square-twotone-rounded Icon3rdBracketSquareTwotoneRounded"
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

export const Icon3rdBracketSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-square-solid-rounded Icon3rdBracketSquareSolidRounded"
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

export const Icon3rdBracketSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-square-bulk-rounded Icon3rdBracketSquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const Icon3rdBracketSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-square-stroke-sharp Icon3rdBracketSquareStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const Icon3rdBracketSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-square-solid-sharp Icon3rdBracketSquareSolidSharp"
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

export const iconPackOf3rdBracketSquare: TheIconSelfPack = {
  name: '3rdBracketSquare',
  StrokeRounded: Icon3rdBracketSquareStrokeRounded,
  DuotoneRounded: Icon3rdBracketSquareDuotoneRounded,
  TwotoneRounded: Icon3rdBracketSquareTwotoneRounded,
  SolidRounded: Icon3rdBracketSquareSolidRounded,
  BulkRounded: Icon3rdBracketSquareBulkRounded,
  StrokeSharp: Icon3rdBracketSquareStrokeSharp,
  SolidSharp: Icon3rdBracketSquareSolidSharp,
};