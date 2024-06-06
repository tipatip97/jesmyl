import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M13.5 9.5L11 12M11 12L7 16M11 12L13.5 14.5M11 12L7 8M17 8C17 9.10457 16.1046 10 15 10C13.8954 10 13 9.10457 13 8C13 6.89543 13.8954 6 15 6C16.1046 6 17 6.89543 17 8ZM17 16C17 17.1046 16.1046 18 15 18C13.8954 18 13 17.1046 13 16C13 14.8954 13.8954 14 15 14C16.1046 14 17 14.8954 17 16Z',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12ZM17 8C17 9.10457 16.1046 10 15 10C13.8954 10 13 9.10457 13 8C13 6.89543 13.8954 6 15 6C16.1046 6 17 6.89543 17 8ZM15 18C16.1046 18 17 17.1046 17 16C17 14.8954 16.1046 14 15 14C13.8954 14 13 14.8954 13 16C13 17.1046 13.8954 18 15 18Z',
  d4: 'M12.0572 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75214 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H11.9428H12.0572ZM15 5.25C13.4812 5.25 12.25 6.48122 12.25 8C12.25 8.48687 12.3765 8.94418 12.5985 9.34086L11 10.9393L7.53033 7.46967C7.23744 7.17678 6.76256 7.17678 6.46967 7.46967C6.17678 7.76256 6.17678 8.23744 6.46967 8.53033L9.93934 12L6.46967 15.4697C6.17678 15.7626 6.17678 16.2374 6.46967 16.5303C6.76256 16.8232 7.23744 16.8232 7.53033 16.5303L11 13.0607L12.5985 14.6591C12.3765 15.0558 12.25 15.5131 12.25 16C12.25 17.5188 13.4812 18.75 15 18.75C16.5188 18.75 17.75 17.5188 17.75 16C17.75 14.4812 16.5188 13.25 15 13.25C14.5131 13.25 14.0558 13.3765 13.6591 13.5985L12.0607 12L13.6591 10.4015C14.0558 10.6235 14.5131 10.75 15 10.75C16.5188 10.75 17.75 9.51878 17.75 8C17.75 6.48122 16.5188 5.25 15 5.25ZM13.75 8C13.75 7.30964 14.3096 6.75 15 6.75C15.6904 6.75 16.25 7.30964 16.25 8C16.25 8.69036 15.6904 9.25 15 9.25C14.3096 9.25 13.75 8.69036 13.75 8ZM13.75 16C13.75 15.3096 14.3096 14.75 15 14.75C15.6904 14.75 16.25 15.3096 16.25 16C16.25 16.6904 15.6904 17.25 15 17.25C14.3096 17.25 13.75 16.6904 13.75 16Z',
  d5: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75214 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75Z',
  d6: 'M12.25 8C12.25 6.48122 13.4812 5.25 15 5.25C16.5188 5.25 17.75 6.48122 17.75 8C17.75 9.51878 16.5188 10.75 15 10.75C14.5131 10.75 14.0558 10.6235 13.6591 10.4015L12.0607 12L13.6591 13.5985C14.0558 13.3765 14.5131 13.25 15 13.25C16.5188 13.25 17.75 14.4812 17.75 16C17.75 17.5188 16.5188 18.75 15 18.75C13.4812 18.75 12.25 17.5188 12.25 16C12.25 15.5131 12.3765 15.0558 12.5985 14.6591L11 13.0607L7.53033 16.5303C7.23744 16.8232 6.76256 16.8232 6.46967 16.5303C6.17678 16.2374 6.17678 15.7626 6.46967 15.4697L9.93934 12L6.46967 8.53033C6.17678 8.23744 6.17678 7.76256 6.46967 7.46967C6.76256 7.17678 7.23744 7.17678 7.53033 7.46967L11 10.9393L12.5985 9.34086C12.3765 8.94418 12.25 8.48687 12.25 8ZM15 6.75C14.3096 6.75 13.75 7.30964 13.75 8C13.75 8.69036 14.3096 9.25 15 9.25C15.6904 9.25 16.25 8.69036 16.25 8C16.25 7.30964 15.6904 6.75 15 6.75ZM15 14.75C14.3096 14.75 13.75 15.3096 13.75 16C13.75 16.6904 14.3096 17.25 15 17.25C15.6904 17.25 16.25 16.6904 16.25 16C16.25 15.3096 15.6904 14.75 15 14.75Z',
  d7: 'M21 3H3V21H21V3Z',
  d8: 'M3 2.25C2.80109 2.25 2.61032 2.32902 2.46967 2.46967C2.32902 2.61032 2.25 2.80109 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM13.7491 8C13.7491 7.30964 14.3087 6.75 14.9991 6.75C15.6894 6.75 16.2491 7.30964 16.2491 8C16.2491 8.69036 15.6894 9.25 14.9991 9.25C14.3087 9.25 13.7491 8.69036 13.7491 8ZM14.9991 5.25C13.4803 5.25 12.2491 6.48122 12.2491 8C12.2491 8.48687 12.3756 8.94418 12.5976 9.34086L10.9991 10.9393L7.52941 7.46967L6.46875 8.53033L9.93842 12L6.46875 15.4697L7.52941 16.5303L10.9991 13.0607L12.5976 14.6591C12.3756 15.0558 12.2491 15.5131 12.2491 16C12.2491 17.5188 13.4803 18.75 14.9991 18.75C16.5179 18.75 17.7491 17.5188 17.7491 16C17.7491 14.4812 16.5179 13.25 14.9991 13.25C14.5122 13.25 14.0549 13.3765 13.6582 13.5985L12.0597 12L13.6582 10.4015C14.0549 10.6235 14.5122 10.75 14.9991 10.75C16.5179 10.75 17.7491 9.51878 17.7491 8C17.7491 6.48122 16.5179 5.25 14.9991 5.25ZM13.7491 16C13.7491 15.3096 14.3087 14.75 14.9991 14.75C15.6894 14.75 16.2491 15.3096 16.2491 16C16.2491 16.6904 15.6894 17.25 14.9991 17.25C14.3087 17.25 13.7491 16.6904 13.7491 16Z',
};

export const IconScissorRectangleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-rectangle-stroke-rounded IconScissorRectangleStrokeRounded"
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

export const IconScissorRectangleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-rectangle-duotone-rounded IconScissorRectangleDuotoneRounded"
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

export const IconScissorRectangleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-rectangle-twotone-rounded IconScissorRectangleTwotoneRounded"
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

export const IconScissorRectangleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-rectangle-solid-rounded IconScissorRectangleSolidRounded"
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

export const IconScissorRectangleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-rectangle-bulk-rounded IconScissorRectangleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconScissorRectangleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-rectangle-stroke-sharp IconScissorRectangleStrokeSharp"
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

export const IconScissorRectangleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="scissor-rectangle-solid-sharp IconScissorRectangleSolidSharp"
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

export const iconPackOfScissorRectangle: TheIconSelfPack = {
  name: 'ScissorRectangle',
  StrokeRounded: IconScissorRectangleStrokeRounded,
  DuotoneRounded: IconScissorRectangleDuotoneRounded,
  TwotoneRounded: IconScissorRectangleTwotoneRounded,
  SolidRounded: IconScissorRectangleSolidRounded,
  BulkRounded: IconScissorRectangleBulkRounded,
  StrokeSharp: IconScissorRectangleStrokeSharp,
  SolidSharp: IconScissorRectangleSolidSharp,
};