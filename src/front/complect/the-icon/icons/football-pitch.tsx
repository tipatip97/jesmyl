import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 8.57143C2 6.41644 2 5.33894 2.58579 4.66947C3.17157 4 4.11438 4 6 4H18C19.8856 4 20.8284 4 21.4142 4.66947C22 5.33894 22 6.41644 22 8.57143V15.4286C22 17.5836 22 18.6611 21.4142 19.3305C20.8284 20 19.8856 20 18 20H6C4.11438 20 3.17157 20 2.58579 19.3305C2 18.6611 2 17.5836 2 15.4286V8.57143Z',
  d2: 'M12 10V5M12 14V19',
  d3: 'M22 9H19.5C18.9477 9 18.5 9.44772 18.5 10V14C18.5 14.5523 18.9477 15 19.5 15H22',
  d4: 'M2 9H4.5C5.05228 9 5.5 9.44772 5.5 10V14C5.5 14.5523 5.05228 15 4.5 15H2',
  d5: 'M2.58579 4.66947C2 5.33894 2 6.41644 2 8.57143V9H4.5C5.05228 9 5.5 9.44772 5.5 10V14C5.5 14.5523 5.05228 15 4.5 15H2V15.4286C2 17.5836 2 18.6611 2.58579 19.3305C3.17157 20 4.11438 20 6 20H18C19.8856 20 20.8284 20 21.4142 19.3305C22 18.6611 22 17.5836 22 15.4286V15H19.5C18.9477 15 18.5 14.5523 18.5 14V10C18.5 9.44772 18.9477 9 19.5 9H22V8.57143C22 6.41644 22 5.33894 21.4142 4.66947C20.8284 4 19.8856 4 18 4H6C4.11438 4 3.17157 4 2.58579 4.66947ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z',
  d6: 'M19.5 9H22V15H19.5C18.9477 15 18.5 14.5523 18.5 14V10C18.5 9.44772 18.9477 9 19.5 9Z',
  d7: 'M4.5 9H2V15H4.5C5.05228 15 5.5 14.5523 5.5 14V10C5.5 9.44772 5.05228 9 4.5 9Z',
  d8: 'M11.25 3.65C11.25 3.46144 11.25 3.36716 11.1914 3.30858C11.1328 3.25 11.0386 3.25 10.85 3.25L5.94217 3.25C5.0488 3.24996 4.2933 3.24993 3.69155 3.34239C3.04389 3.44191 2.47074 3.66202 2.02136 4.1756C1.58458 4.67477 1.40941 5.28682 1.32836 5.97576C1.2677 6.49143 1.25399 7.11389 1.2509 7.84969C1.2501 8.03806 1.24971 8.13225 1.30834 8.19113C1.36697 8.25 1.46141 8.25 1.6503 8.25H4.5C5.4665 8.25 6.25 9.0335 6.25 10V14C6.25 14.9665 5.4665 15.75 4.5 15.75H1.6503C1.46141 15.75 1.36697 15.75 1.30834 15.8089C1.24971 15.8678 1.2501 15.9619 1.2509 16.1503C1.25399 16.8861 1.2677 17.5086 1.32836 18.0243C1.40941 18.7132 1.58458 19.3252 2.02136 19.8244C2.47074 20.338 3.04389 20.5581 3.69155 20.6576C4.29332 20.7501 5.04875 20.7501 5.94215 20.75H10.85C11.0386 20.75 11.1328 20.75 11.1914 20.6914C11.25 20.6329 11.25 20.5386 11.25 20.35V14.949C11.25 14.8084 11.25 14.7381 11.216 14.6875C11.1819 14.6369 11.1093 14.6073 10.964 14.5482C9.95868 14.139 9.25 13.1523 9.25 12C9.25 10.8477 9.95868 9.86098 10.964 9.45184C11.1093 9.39271 11.1819 9.36314 11.216 9.31252C11.25 9.2619 11.25 9.19159 11.25 9.05096V3.65Z',
  d9: 'M1.25 13.85C1.25 14.0386 1.25 14.1328 1.30858 14.1914C1.36716 14.25 1.46144 14.25 1.65 14.25H4.5C4.63807 14.25 4.75 14.1381 4.75 14V10C4.75 9.86193 4.63807 9.75 4.5 9.75H1.65C1.46144 9.75 1.36716 9.75 1.30858 9.80858C1.25 9.86716 1.25 9.96144 1.25 10.15V13.85Z',
  d10: 'M12.75 20.35C12.75 20.5386 12.75 20.6329 12.8086 20.6914C12.8672 20.75 12.9614 20.75 13.15 20.75H18.0579C18.9513 20.7501 19.7067 20.7501 20.3084 20.6576C20.9561 20.5581 21.5293 20.338 21.9786 19.8244C22.4154 19.3252 22.5906 18.7132 22.6716 18.0243C22.7323 17.5086 22.746 16.8861 22.7491 16.1503C22.7499 15.9619 22.7503 15.8678 22.6917 15.8089C22.633 15.75 22.5386 15.75 22.3497 15.75H19.5C18.5335 15.75 17.75 14.9665 17.75 14V10C17.75 9.0335 18.5335 8.25 19.5 8.25H22.3497C22.5386 8.25 22.633 8.25 22.6917 8.19113C22.7503 8.13225 22.7499 8.03806 22.7491 7.84969C22.746 7.11389 22.7323 6.49143 22.6716 5.97576C22.5906 5.28682 22.4154 4.67477 21.9786 4.1756C21.5293 3.66202 20.9561 3.44191 20.3084 3.34239C19.7067 3.24993 18.9513 3.24996 18.0579 3.25L13.15 3.25C12.9614 3.25 12.8672 3.25 12.8086 3.30858C12.75 3.36716 12.75 3.46144 12.75 3.65V9.05096C12.75 9.19159 12.75 9.2619 12.784 9.31252C12.8181 9.36314 12.8907 9.39271 13.036 9.45184C14.0413 9.86098 14.75 10.8477 14.75 12C14.75 13.1523 14.0413 14.139 13.036 14.5482C12.8907 14.6073 12.8181 14.6369 12.784 14.6875C12.75 14.7381 12.75 14.8084 12.75 14.949V20.35Z',
  d11: 'M19.5 9.75H22.35C22.5386 9.75 22.6328 9.75 22.6914 9.80858C22.75 9.86716 22.75 9.96144 22.75 10.15V13.85C22.75 14.0386 22.75 14.1328 22.6914 14.1914C22.6328 14.25 22.5386 14.25 22.35 14.25H19.5C19.3619 14.25 19.25 14.1381 19.25 14V10C19.25 9.86193 19.3619 9.75 19.5 9.75Z',
  d12: 'M10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12Z',
  d13: 'M5.94217 3.25L6 3.25L18.0578 3.25H18.0579C18.9513 3.24996 19.7067 3.24992 20.3084 3.34239C20.9561 3.4419 21.5293 3.66202 21.9786 4.1756C22.4154 4.67476 22.5906 5.28681 22.6716 5.97576C22.75 6.64214 22.75 7.48683 22.75 8.52401V15.476C22.75 16.5132 22.75 17.3579 22.6716 18.0243C22.5906 18.7132 22.4154 19.3252 21.9786 19.8244C21.5293 20.338 20.9561 20.5581 20.3084 20.6576C19.7067 20.7501 18.9513 20.75 18.0579 20.75H5.94215C5.04875 20.75 4.29332 20.7501 3.69155 20.6576C3.04389 20.5581 2.47074 20.338 2.02136 19.8244C1.58458 19.3252 1.40941 18.7132 1.32836 18.0243C1.24997 17.3579 1.24998 16.5132 1.25 15.476V15.476V8.524V8.52399C1.24998 7.48682 1.24997 6.64213 1.32836 5.97576C1.40941 5.28681 1.58458 4.67476 2.02136 4.1756C2.47074 3.66202 3.04389 3.4419 3.69155 3.34239C4.29331 3.24992 5.04874 3.24996 5.94213 3.25H5.94217Z',
  d14: 'M1.25 9.75V8.524V8.52399C1.25 8.43112 1.25 8.33979 1.25005 8.25H4.5C5.4665 8.25 6.25 9.0335 6.25 10V14C6.25 14.9665 5.4665 15.75 4.5 15.75H1.25005C1.25 15.6602 1.25 15.5689 1.25 15.476V15.476V14.25H4.5C4.63807 14.25 4.75 14.1381 4.75 14V10C4.75 9.86193 4.63807 9.75 4.5 9.75H1.25ZM11.25 20.75V14.6465C10.0957 14.32 9.25 13.2588 9.25 12C9.25 10.7412 10.0957 9.67998 11.25 9.35352V3.25L12.75 3.25V9.35352C13.9043 9.67998 14.75 10.7412 14.75 12C14.75 13.2588 13.9043 14.32 12.75 14.6465V20.75H11.25ZM22.75 14.25V15.476C22.75 15.5689 22.75 15.6602 22.75 15.75H19.5C18.5335 15.75 17.75 14.9665 17.75 14V10C17.75 9.0335 18.5335 8.25 19.5 8.25H22.75C22.75 8.3398 22.75 8.43114 22.75 8.52402V9.75H19.5C19.3619 9.75 19.25 9.86193 19.25 10V14C19.25 14.1381 19.3619 14.25 19.5 14.25H22.75ZM10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12Z',
  d15: 'M12 10V4M12 14V20',
  d16: 'M22 9H18.5V15H22',
  d17: 'M2 9H5.5V15H2',
  d18: 'M22 4H2V20H22V4Z',
  d19: 'M12.75 3.25V9.35352C13.9043 9.67998 14.75 10.7412 14.75 12C14.75 13.2588 13.9043 14.32 12.75 14.6465V20.75H22C22.4142 20.75 22.75 20.4142 22.75 20V15.75H19.5C19.0858 15.75 18.75 15.4142 18.75 15V9C18.75 8.58579 19.0858 8.25 19.5 8.25H22.75V4C22.75 3.58579 22.4142 3.25 22 3.25H12.75Z',
  d20: 'M11.25 3.25V9.35352C10.0957 9.67998 9.25 10.7412 9.25 12C9.25 13.2588 10.0957 14.32 11.25 14.6465V20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V15.75H4.5C4.91421 15.75 5.25 15.4142 5.25 15V9C5.25 8.58579 4.91421 8.25 4.5 8.25H1.25V4C1.25 3.58579 1.58579 3.25 2 3.25H11.25Z',
  d21: 'M12 10.75C11.3096 10.75 10.75 11.3096 10.75 12C10.75 12.6904 11.3096 13.25 12 13.25C12.6904 13.25 13.25 12.6904 13.25 12C13.25 11.3096 12.6904 10.75 12 10.75Z',
  d22: 'M1.25 9.75V14.25H3.75V9.75H1.25Z',
  d23: 'M22.75 9.75H20.25V14.25H22.75V9.75Z',
};

export const IconFootballPitchStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="football-pitch-stroke-rounded IconFootballPitchStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconFootballPitchDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="football-pitch-duotone-rounded IconFootballPitchDuotoneRounded"
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
    </TheIconWrapper>
  );
};

export const IconFootballPitchTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="football-pitch-twotone-rounded IconFootballPitchTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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

export const IconFootballPitchSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="football-pitch-solid-rounded IconFootballPitchSolidRounded"
    >
      <path 
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
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFootballPitchBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="football-pitch-bulk-rounded IconFootballPitchBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFootballPitchStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="football-pitch-stroke-sharp IconFootballPitchStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></circle>
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
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFootballPitchSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="football-pitch-solid-sharp IconFootballPitchSolidSharp"
    >
      <path 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFootballPitch: TheIconSelfPack = {
  name: 'FootballPitch',
  StrokeRounded: IconFootballPitchStrokeRounded,
  DuotoneRounded: IconFootballPitchDuotoneRounded,
  TwotoneRounded: IconFootballPitchTwotoneRounded,
  SolidRounded: IconFootballPitchSolidRounded,
  BulkRounded: IconFootballPitchBulkRounded,
  StrokeSharp: IconFootballPitchStrokeSharp,
  SolidSharp: IconFootballPitchSolidSharp,
};