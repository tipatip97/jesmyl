import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M13.4368 9.55807L10.6 12M10.6 12L7 15M10.6 12L13.4949 14.3865M10.6 12L7 9M16 8.5C16 9.32843 15.3284 10 14.5 10C13.6716 10 13 9.32843 13 8.5C13 7.67157 13.6716 7 14.5 7C15.3284 7 16 7.67157 16 8.5ZM16 15.5C16 16.3284 15.3284 17 14.5 17C13.6716 17 13 16.3284 13 15.5C13 14.6716 13.6716 14 14.5 14C15.3284 14 16 14.6716 16 15.5Z',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10ZM14.5 17C15.3284 17 16 16.3284 16 15.5C16 14.6716 15.3284 14 14.5 14C13.6716 14 13 14.6716 13 15.5C13 16.3284 13.6716 17 14.5 17Z',
  d4: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM13.4832 10.5077C13.7886 10.6627 14.1341 10.75 14.5 10.75C15.7427 10.75 16.75 9.74264 16.75 8.5C16.75 7.25736 15.7427 6.25 14.5 6.25C13.2574 6.25 12.25 7.25736 12.25 8.5C12.25 8.82811 12.3203 9.13982 12.4465 9.42091L10.5922 11.0172L7.48016 8.42383C7.16195 8.15866 6.68903 8.20165 6.42385 8.51986C6.15868 8.83807 6.20167 9.31099 6.51988 9.57617L9.42848 12L6.51988 14.4238C6.20167 14.689 6.15868 15.1619 6.42385 15.4801C6.68903 15.7983 7.16195 15.8413 7.48016 15.5762L10.6026 12.9741L12.4751 14.5178C12.3309 14.8146 12.25 15.1479 12.25 15.5C12.25 16.7426 13.2574 17.75 14.5 17.75C15.7427 17.75 16.75 16.7426 16.75 15.5C16.75 14.2574 15.7427 13.25 14.5 13.25C14.1605 13.25 13.8385 13.3252 13.5499 13.4599L11.764 11.9876L13.4832 10.5077Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M14.5 10.75C14.1341 10.75 13.7886 10.6627 13.4832 10.5077L11.764 11.9876L13.5499 13.4599C13.8385 13.3252 14.1605 13.25 14.5 13.25C15.7427 13.25 16.75 14.2574 16.75 15.5C16.75 16.7426 15.7427 17.75 14.5 17.75C13.2574 17.75 12.25 16.7426 12.25 15.5C12.25 15.1479 12.3309 14.8146 12.4751 14.5178L10.6026 12.9741L7.48016 15.5762C7.16195 15.8413 6.68903 15.7983 6.42385 15.4801C6.15868 15.1619 6.20167 14.689 6.51988 14.4238L9.42848 12L6.51988 9.57617C6.20167 9.31099 6.15868 8.83807 6.42385 8.51986C6.68903 8.20165 7.16195 8.15866 7.48016 8.42383L10.5922 11.0172L12.4465 9.42091C12.3203 9.13982 12.25 8.82811 12.25 8.5C12.25 7.25736 13.2574 6.25 14.5 6.25C15.7427 6.25 16.75 7.25736 16.75 8.5C16.75 9.74264 15.7427 10.75 14.5 10.75Z',
  d7: 'M3 21H21V3H3V21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM14.4997 6.25C13.257 6.25 12.2497 7.25736 12.2497 8.5C12.2497 8.82811 12.3199 9.13982 12.4462 9.42091L10.5918 11.0172L7.47981 8.42383L6.51953 9.57617L9.42813 12L6.51953 14.4238L7.47981 15.5762L10.6022 12.9741L12.4748 14.5178C12.3306 14.8146 12.2497 15.1479 12.2497 15.5C12.2497 16.7426 13.257 17.75 14.4997 17.75C15.7423 17.75 16.7497 16.7426 16.7497 15.5C16.7497 14.2574 15.7423 13.25 14.4997 13.25C14.1601 13.25 13.8382 13.3252 13.5495 13.4599L11.7637 11.9876L13.4829 10.5077C13.7883 10.6627 14.1338 10.75 14.4997 10.75C15.7423 10.75 16.7497 9.74264 16.7497 8.5C16.7497 7.25736 15.7423 6.25 14.4997 6.25Z',
};

export const IconScissor01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-01-stroke-rounded IconScissor01StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconScissor01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-01-duotone-rounded IconScissor01DuotoneRounded"
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

export const IconScissor01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-01-twotone-rounded IconScissor01TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconScissor01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-01-solid-rounded IconScissor01SolidRounded"
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

export const IconScissor01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-01-bulk-rounded IconScissor01BulkRounded"
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

export const IconScissor01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-01-stroke-sharp IconScissor01StrokeSharp"
    >
      <path 
        d={d.d7} 
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

export const IconScissor01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-01-solid-sharp IconScissor01SolidSharp"
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

export const iconPackOfScissor01: TheIconSelfPack = {
  name: 'Scissor01',
  StrokeRounded: IconScissor01StrokeRounded,
  DuotoneRounded: IconScissor01DuotoneRounded,
  TwotoneRounded: IconScissor01TwotoneRounded,
  SolidRounded: IconScissor01SolidRounded,
  BulkRounded: IconScissor01BulkRounded,
  StrokeSharp: IconScissor01StrokeSharp,
  SolidSharp: IconScissor01SolidSharp,
};