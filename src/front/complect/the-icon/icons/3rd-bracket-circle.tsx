import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14 16C14.9241 16 15.6733 15.4883 15.6733 14.8571C15.6733 13.6365 15.6869 13.1336 16.755 12.4041C17.0817 12.1809 17.0817 11.8191 16.755 11.5959C15.6869 10.8664 15.6733 10.3635 15.6733 9.14286C15.6733 8.51167 14.9241 8 14 8M10 16C9.07588 16 8.32673 15.4883 8.32673 14.8571C8.32673 13.6365 8.31312 13.1336 7.24505 12.4041C6.91832 12.1809 6.91832 11.8191 7.24504 11.5959C8.31312 10.8664 8.32673 10.3635 8.32673 9.14286C8.32673 8.51167 9.07588 8 10 8',
  d2: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM10 7C9.3631 7 8.74235 7.1746 8.25281 7.50897C7.7682 7.83996 7.32673 8.40014 7.32673 9.14286C7.32673 9.80662 7.31064 10.039 7.24871 10.2061C7.21336 10.3016 7.13104 10.4628 6.68104 10.7702C6.31004 11.0236 6 11.4516 6 12C6 12.5484 6.31004 12.9764 6.68104 13.2298C7.13104 13.5372 7.21336 13.6984 7.24871 13.7939C7.31064 13.961 7.32673 14.1934 7.32673 14.8571C7.32673 15.5999 7.7682 16.16 8.25281 16.491C8.74235 16.8254 9.3631 17 10 17C10.5523 17 11 16.5523 11 16C11 15.4477 10.5523 15 10 15C9.71277 15 9.44281 14.8763 9.32675 14.797L9.32676 14.7898C9.32712 14.2499 9.32752 13.6479 9.12411 13.099C8.96218 12.6619 8.69876 12.3119 8.35281 12C8.69876 11.6881 8.96218 11.3381 9.12411 10.901C9.32752 10.3521 9.32712 9.75013 9.32676 9.21017C9.44282 9.13089 9.71277 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7ZM14 7C13.4477 7 13 7.44772 13 8C13 8.55228 13.4477 9 14 9C14.2872 9 14.5572 9.13089 14.6732 9.21017C14.6729 9.75013 14.6725 10.3521 14.8759 10.901C15.0378 11.3381 15.3012 11.6881 15.6472 12C15.3012 12.3119 15.0378 12.6619 14.8759 13.099C14.6725 13.6479 14.6729 14.2499 14.6732 14.7898C14.5572 14.8691 14.2872 15 14 15C13.4477 15 13 15.4477 13 16C13 16.5523 13.4477 17 14 17C14.6369 17 15.2576 16.8254 15.7472 16.491C16.2318 16.16 16.6733 15.5999 16.6733 14.8571C16.6733 14.1934 16.6894 13.961 16.7513 13.7939C16.7866 13.6984 16.869 13.5372 17.319 13.2298C17.69 12.9764 18 12.5484 18 12C18 11.4516 17.69 11.0236 17.319 10.7702C16.869 10.4628 16.7866 10.3016 16.7513 10.2061C16.6894 10.039 16.6733 9.80662 16.6733 9.14286C16.6733 8.40014 16.2318 7.83996 15.7472 7.50897C15.2576 7.1746 14.6369 7 14 7Z',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d4: 'M8.25281 7.50897C8.74235 7.1746 9.3631 7 10 7C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9C9.71277 9 9.44282 9.13089 9.32676 9.21017V9.21017C9.32712 9.75013 9.32752 10.3521 9.12411 10.901C8.96218 11.3381 8.69876 11.6881 8.35281 12C8.69876 12.3119 8.96218 12.6619 9.12411 13.099C9.32752 13.6479 9.32712 14.2499 9.32676 14.7898V14.7898L9.32675 14.797C9.44281 14.8763 9.71277 15 10 15C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17C9.3631 17 8.74235 16.8254 8.25281 16.491C7.7682 16.16 7.32673 15.5999 7.32673 14.8571C7.32673 14.1934 7.31064 13.961 7.24871 13.7939C7.21336 13.6984 7.13104 13.5372 6.68104 13.2298C6.31004 12.9764 6 12.5484 6 12C6 11.4516 6.31004 11.0236 6.68104 10.7702C7.13104 10.4628 7.21336 10.3016 7.24871 10.2061C7.31064 10.039 7.32673 9.80662 7.32673 9.14286C7.32673 8.40014 7.7682 7.83996 8.25281 7.50897Z',
  d5: 'M13 8C13 7.44772 13.4477 7 14 7C14.6369 7 15.2576 7.1746 15.7472 7.50897C16.2318 7.83996 16.6733 8.40014 16.6733 9.14286C16.6733 9.80662 16.6894 10.039 16.7513 10.2061C16.7866 10.3016 16.869 10.4628 17.319 10.7702C17.69 11.0236 18 11.4516 18 12C18 12.5484 17.69 12.9764 17.319 13.2298C16.869 13.5372 16.7866 13.6984 16.7513 13.7939C16.6894 13.961 16.6733 14.1934 16.6733 14.8571C16.6733 15.5999 16.2318 16.16 15.7472 16.491C15.2576 16.8254 14.6369 17 14 17C13.4477 17 13 16.5523 13 16C13 15.4477 13.4477 15 14 15C14.2872 15 14.5572 14.8691 14.6732 14.7898C14.6729 14.2499 14.6725 13.6479 14.8759 13.099C15.0378 12.6619 15.3012 12.3119 15.6472 12C15.3012 11.6881 15.0378 11.3381 14.8759 10.901C14.6725 10.3521 14.6729 9.75013 14.6732 9.21017C14.5572 9.13089 14.2872 9 14 9C13.4477 9 13 8.55228 13 8Z',
  d6: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d7: 'M14.0141 8.01367H15.9944V10.4776L16.9796 11.9089C17.0109 11.9505 17.0106 12.0076 16.979 12.0489L15.9944 13.5853V15.9854H14.0141M10.0376 8.01367H8.05732V10.4776L7.07213 11.9089C7.04086 11.9505 7.04108 12.0076 7.07268 12.0489L8.05732 13.5853V15.9854H10.0376',
  d8: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM8 7C7.44772 7 7 7.44772 7 8V10.1972L6.16795 11.4453C5.94402 11.7812 5.94402 12.2188 6.16795 12.5547L7 13.8028V16C7 16.5523 7.44772 17 8 17H10V15H9V13.1972L8.20185 12L9 10.8028V9H10V7H8ZM14 9H15V10.8028L15.7981 12L15 13.1972V15H14V17H16C16.5523 17 17 16.5523 17 16V13.8028L17.8321 12.5547C18.056 12.2188 18.056 11.7812 17.8321 11.4453L17 10.1972V8C17 7.44772 16.5523 7 16 7H14V9Z',
};

export const Icon3rdBracketCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-circle-stroke-rounded Icon3rdBracketCircleStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const Icon3rdBracketCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-circle-duotone-rounded Icon3rdBracketCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const Icon3rdBracketCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-circle-twotone-rounded Icon3rdBracketCircleTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
    </TheIconWrapper>
  );
};

export const Icon3rdBracketCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-circle-solid-rounded Icon3rdBracketCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3rdBracketCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-circle-bulk-rounded Icon3rdBracketCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3rdBracketCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-circle-stroke-sharp Icon3rdBracketCircleStrokeSharp"
    >
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const Icon3rdBracketCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="3rd-bracket-circle-solid-sharp Icon3rdBracketCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOf3rdBracketCircle: TheIconSelfPack = {
  name: '3rdBracketCircle',
  StrokeRounded: Icon3rdBracketCircleStrokeRounded,
  DuotoneRounded: Icon3rdBracketCircleDuotoneRounded,
  TwotoneRounded: Icon3rdBracketCircleTwotoneRounded,
  SolidRounded: Icon3rdBracketCircleSolidRounded,
  BulkRounded: Icon3rdBracketCircleBulkRounded,
  StrokeSharp: Icon3rdBracketCircleStrokeSharp,
  SolidSharp: Icon3rdBracketCircleSolidSharp,
};