import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M6.5 11V10C6.5 9.5286 6.5 9.29289 6.64645 9.14645C6.79289 9 7.0286 9 7.5 9H9C10.8856 9 11.8284 9 12.4142 9.58579C13 10.1716 13 11.1144 13 13V14C13 14.4714 13 14.7071 12.8536 14.8536C12.7071 15 12.4714 15 12 15H10.5C8.61438 15 7.67157 15 7.08579 14.4142C6.5 13.8284 6.5 12.8856 6.5 11Z',
  d3: 'M15.4498 10.5352L15.7998 10.1976C16.5247 9.49854 16.8872 9.14899 17.1936 9.27553C17.5 9.40207 17.5 9.90131 17.5 10.8998V13.1002C17.5 14.0987 17.5 14.5979 17.1936 14.7245C16.8872 14.851 16.5247 14.5015 15.7998 13.8024L15.4498 13.4648C15.0061 13.0369 15 13.0226 15 12.4115V11.5885C15 10.9774 15.0061 10.9631 15.4498 10.5352Z',
  d4: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM6.5 10V11C6.5 12.8856 6.5 13.8284 7.08579 14.4142C7.67157 15 8.61438 15 10.5 15H12C12.4714 15 12.7071 15 12.8536 14.8536C13 14.7071 13 14.4714 13 14V13C13 11.1144 13 10.1716 12.4142 9.58579C11.8284 9 10.8856 9 9 9H7.5C7.0286 9 6.79289 9 6.64645 9.14645C6.5 9.29289 6.5 9.5286 6.5 10ZM15.7998 10.1976L15.4498 10.5352C15.0061 10.9631 15 10.9774 15 11.5885V12.4115C15 13.0226 15.0061 13.0369 15.4498 13.4648L15.7998 13.8024C16.5247 14.5015 16.8872 14.851 17.1936 14.7245C17.5 14.5979 17.5 14.0987 17.5 13.1002V10.8998C17.5 9.90131 17.5 9.40207 17.1936 9.27553C16.8872 9.14899 16.5247 9.49854 15.7998 10.1976Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572ZM7.46557 8.24999L7.50002 8.25H9.00002L9.05202 8.25C9.9505 8.24997 10.6997 8.24994 11.2945 8.32991C11.9223 8.41432 12.4891 8.59999 12.9446 9.05546C13.4 9.51093 13.5857 10.0777 13.6701 10.7055C13.7501 11.3003 13.75 12.0495 13.75 12.948L13.75 14L13.75 14.0344C13.7501 14.2396 13.7502 14.4614 13.725 14.6486C13.6955 14.8679 13.6197 15.1481 13.3839 15.3839C13.1481 15.6197 12.8679 15.6955 12.6486 15.725C12.4614 15.7502 12.2396 15.7501 12.0345 15.75H12.0345L12 15.75L10.448 15.75C9.54954 15.75 8.80032 15.7501 8.20554 15.6701C7.57774 15.5857 7.01094 15.4 6.55547 14.9445C6.1 14.4891 5.91433 13.9223 5.82993 13.2945C5.74996 12.6997 5.74999 11.9505 5.75002 11.052L5.75002 11L5.75002 10L5.75001 9.96555C5.74993 9.76044 5.74984 9.53864 5.77501 9.35143C5.8045 9.1321 5.88033 8.85192 6.11613 8.61612C6.35193 8.38032 6.63212 8.30448 6.85145 8.27499C7.03866 8.24982 7.26046 8.24991 7.46557 8.24999ZM15.8698 9.70651L15.3797 10.1364C14.7585 10.6811 14.75 10.6993 14.75 11.4773V12.5252C14.75 13.3033 14.7585 13.3214 15.3797 13.8662L15.8698 14.296C16.8846 15.1861 17.3921 15.6312 17.821 15.47C18.25 15.3089 18.25 14.6733 18.25 13.4021V10.6005C18.25 9.32924 18.25 8.69362 17.821 8.53251C17.3921 8.37139 16.8846 8.81643 15.8698 9.70651Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M7.50002 8.25002L7.46557 8.25001L7.46557 8.25001C7.26046 8.24993 7.03866 8.24984 6.85145 8.27501C6.63212 8.3045 6.35193 8.38033 6.11613 8.61613C5.88033 8.85193 5.8045 9.13212 5.77501 9.35145C5.74984 9.53866 5.74993 9.76046 5.75001 9.96557L5.75001 9.96557L5.75002 10L5.75002 11L5.75002 11.052C5.74999 11.9505 5.74996 12.6997 5.82993 13.2945C5.91433 13.9223 6.1 14.4891 6.55547 14.9446C7.01094 15.4 7.57774 15.5857 8.20554 15.6701C8.80032 15.7501 9.54954 15.75 10.448 15.75L12 15.75L12.0345 15.75C12.2396 15.7501 12.4614 15.7502 12.6486 15.725C12.8679 15.6955 13.1481 15.6197 13.3839 15.3839C13.6197 15.1481 13.6955 14.8679 13.725 14.6486C13.7502 14.4614 13.7501 14.2396 13.75 14.0345L13.75 14L13.75 12.948C13.75 12.0495 13.7501 11.3003 13.6701 10.7055C13.5857 10.0777 13.4 9.51094 12.9446 9.05547C12.4891 8.6 11.9223 8.41433 11.2945 8.32993C10.6997 8.24996 9.9505 8.24999 9.05202 8.25002L9.00002 8.25002H7.50002ZM15.8698 9.70651L15.3797 10.1364C14.7585 10.6811 14.75 10.6993 14.75 11.4773L14.75 12.5252C14.75 13.3033 14.7585 13.3214 15.3797 13.8662L15.8698 14.296C16.8846 15.1861 17.3921 15.6312 17.821 15.47C18.25 15.3089 18.25 14.6733 18.25 13.4021V10.6005C18.25 9.32924 18.25 8.69362 17.821 8.53251C17.3921 8.37139 16.8846 8.81643 15.8698 9.70651Z',
  d8: 'M21 3V21H3V3H21Z',
  d9: 'M6.49316 12.9837V9.01367H10.9894C12.0931 9.01367 12.9878 9.9024 12.9878 10.9987V14.9688H8.49151C7.38785 14.9688 6.49316 14.08 6.49316 12.9837Z',
  d10: 'M17.5104 9.51352L15.0034 10.9944V13.0143L17.5104 14.5128C17.5141 14.515 17.519 14.5126 17.519 14.5087V9.51771C17.519 9.51373 17.5141 9.51134 17.5104 9.51352Z',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM6.5 9L6.5 13C6.5 14.1046 7.39543 15 8.5 15L14 15L14 11C14 9.89543 13.1046 9 12 9L6.5 9ZM17.5 9.50002L15 11V13L17.5 14.5L17.5 9.50002Z',
};

export const IconZoomSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-square-stroke-rounded IconZoomSquareStrokeRounded"
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

export const IconZoomSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-square-duotone-rounded IconZoomSquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
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

export const IconZoomSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-square-twotone-rounded IconZoomSquareTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <g 
        opacity="var(--icon-opacity)">
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
      </g>
    </TheIconWrapper>
  );
};

export const IconZoomSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-square-solid-rounded IconZoomSquareSolidRounded"
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

export const IconZoomSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-square-bulk-rounded IconZoomSquareBulkRounded"
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

export const IconZoomSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-square-stroke-sharp IconZoomSquareStrokeSharp"
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
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconZoomSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="zoom-square-solid-sharp IconZoomSquareSolidSharp"
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

export const iconPackOfZoomSquare: TheIconSelfPack = {
  name: 'ZoomSquare',
  StrokeRounded: IconZoomSquareStrokeRounded,
  DuotoneRounded: IconZoomSquareDuotoneRounded,
  TwotoneRounded: IconZoomSquareTwotoneRounded,
  SolidRounded: IconZoomSquareSolidRounded,
  BulkRounded: IconZoomSquareBulkRounded,
  StrokeSharp: IconZoomSquareStrokeSharp,
  SolidSharp: IconZoomSquareSolidSharp,
};