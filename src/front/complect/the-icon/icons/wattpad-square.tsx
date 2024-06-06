import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M8.51991 8.70869C9.48019 9.16088 9.32015 10.4044 9.12009 10.9697C10.3504 8.58748 13.8307 6.02163 13.8307 10.2981C14.1319 9.8178 15.0354 8.74285 16.2401 8.28571C17.7461 7.71428 18.8745 8.85714 17.078 10.5714C17.078 10.5714 16.1798 11.4286 15.2816 13.1429C14.3834 14.8571 11.9881 16.5714 11.2205 12.6651C9.11986 17.7523 6.71939 16.3394 6.11921 12.948C5.51904 9.55655 7.31956 8.14345 8.51991 8.70869Z',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM9.12009 10.9697C9.32015 10.4044 9.48019 9.16088 8.51991 8.70869C7.31956 8.14345 5.51904 9.55655 6.11921 12.948C6.71939 16.3394 9.11986 17.7523 11.2205 12.6651C11.9881 16.5714 14.3834 14.8571 15.2816 13.1429C16.1798 11.4286 17.078 10.5714 17.078 10.5714C18.8745 8.85714 17.7461 7.71428 16.2401 8.28571C15.0354 8.74285 14.1319 9.8178 13.8307 10.2981C13.8307 6.02163 10.3504 8.58748 9.12009 10.9697Z',
  d4: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM8.7601 10.7764C8.98517 10.1052 9.16522 8.62852 8.0849 8.09155C6.73451 7.42034 4.70892 9.09836 5.38411 13.1256C6.05931 17.1528 8.75984 18.8306 11.123 12.7897C11.9866 17.4283 14.6813 15.3926 15.6918 13.357C16.7023 11.3213 17.7128 10.3035 17.7128 10.3035C19.7338 8.26783 18.4643 6.91072 16.7702 7.58927C15.4149 8.13211 14.3984 9.40858 14.0595 9.97896C14.0595 4.90074 10.1442 7.94762 8.7601 10.7764Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M8.0849 8.09155C9.16522 8.62851 8.98517 10.1052 8.7601 10.7764C10.1442 7.94762 14.0595 4.90074 14.0595 9.97896C14.3984 9.40858 15.4149 8.13211 16.7702 7.58927C18.4643 6.91072 19.7338 8.26783 17.7128 10.3035C17.7128 10.3035 16.7023 11.3213 15.6918 13.357C14.6813 15.3926 11.9866 17.4283 11.123 12.7897C8.75984 18.8306 6.05931 17.1528 5.38411 13.1256C4.70892 9.09836 6.73451 7.42034 8.0849 8.09155Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM9.12009 10.9697C9.32015 10.4044 9.48019 9.16088 8.51991 8.70869C7.31956 8.14345 5.51904 9.55655 6.11921 12.948C6.71939 16.3394 9.11986 17.7523 11.2205 12.6651C11.9881 16.5714 14.3834 14.8571 15.2816 13.1429C16.1798 11.4286 17.078 10.5714 17.078 10.5714C18.8745 8.85714 17.7461 7.71428 16.2401 8.28571C15.0354 8.74285 14.1319 9.8178 13.8307 10.2981C13.8307 6.02163 10.3504 8.58748 9.12009 10.9697Z',
};

export const IconWattpadSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wattpad-square-stroke-rounded IconWattpadSquareStrokeRounded"
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

export const IconWattpadSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wattpad-square-duotone-rounded IconWattpadSquareDuotoneRounded"
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

export const IconWattpadSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wattpad-square-twotone-rounded IconWattpadSquareTwotoneRounded"
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

export const IconWattpadSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wattpad-square-solid-rounded IconWattpadSquareSolidRounded"
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

export const IconWattpadSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wattpad-square-bulk-rounded IconWattpadSquareBulkRounded"
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

export const IconWattpadSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wattpad-square-stroke-sharp IconWattpadSquareStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWattpadSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wattpad-square-solid-sharp IconWattpadSquareSolidSharp"
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

export const iconPackOfWattpadSquare: TheIconSelfPack = {
  name: 'WattpadSquare',
  StrokeRounded: IconWattpadSquareStrokeRounded,
  DuotoneRounded: IconWattpadSquareDuotoneRounded,
  TwotoneRounded: IconWattpadSquareTwotoneRounded,
  SolidRounded: IconWattpadSquareSolidRounded,
  BulkRounded: IconWattpadSquareBulkRounded,
  StrokeSharp: IconWattpadSquareStrokeSharp,
  SolidSharp: IconWattpadSquareSolidSharp,
};