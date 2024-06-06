import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.992 12H12.001',
  d2: 'M11.9842 16H11.9932',
  d3: 'M11.9998 8H12.0088',
  d4: 'M2.48438 12C2.48438 7.52166 2.48438 5.28249 3.87562 3.89124C5.26686 2.5 7.50603 2.5 11.9844 2.5C16.4627 2.5 18.7019 2.5 20.0931 3.89124C21.4844 5.28249 21.4844 7.52166 21.4844 12C21.4844 16.4783 21.4844 18.7175 20.0931 20.1088C18.7019 21.5 16.4627 21.5 11.9844 21.5C7.50603 21.5 5.26686 21.5 3.87562 20.1088C2.48438 18.7175 2.48438 16.4783 2.48438 12Z',
  d5: 'M12.0415 1.75H11.9272C9.7365 1.74999 8.01582 1.74998 6.6724 1.93059C5.29574 2.11568 4.20349 2.50272 3.34529 3.36091C2.48709 4.21911 2.10006 5.31137 1.91497 6.68802C1.73435 8.03144 1.73436 9.75212 1.73438 11.9428V12.0572C1.73436 14.2479 1.73435 15.9686 1.91497 17.312C2.10006 18.6886 2.48709 19.7809 3.34529 20.6391C4.20349 21.4973 5.29574 21.8843 6.6724 22.0694C8.01581 22.25 9.73648 22.25 11.9272 22.25H11.9272H12.0415H12.0416C14.2323 22.25 15.9529 22.25 17.2964 22.0694C18.673 21.8843 19.7653 21.4973 20.6235 20.6391C21.4817 19.7809 21.8687 18.6886 22.0538 17.312C22.2344 15.9686 22.2344 14.2479 22.2344 12.0572V12.0572V11.9428V11.9428C22.2344 9.7521 22.2344 8.03144 22.0538 6.68802C21.8687 5.31137 21.4817 4.21911 20.6235 3.36091C19.7653 2.50272 18.673 2.11568 17.2964 1.93059C15.9529 1.74998 14.2323 1.74999 12.0415 1.75ZM11.9922 10.75C11.3018 10.75 10.7422 11.3096 10.7422 12C10.7422 12.6904 11.3018 13.25 11.9922 13.25H12.0012C12.6915 13.25 13.2512 12.6904 13.2512 12C13.2512 11.3096 12.6915 10.75 12.0012 10.75H11.9922ZM10.7344 16C10.7344 15.3096 11.294 14.75 11.9844 14.75H11.9934C12.6837 14.75 13.2434 15.3096 13.2434 16C13.2434 16.6904 12.6837 17.25 11.9934 17.25H11.9844C11.294 17.25 10.7344 16.6904 10.7344 16ZM12 6.75C11.3096 6.75 10.75 7.30964 10.75 8C10.75 8.69036 11.3096 9.25 12 9.25H12.009C12.6993 9.25 13.259 8.69036 13.259 8C13.259 7.30964 12.6993 6.75 12.009 6.75H12Z',
  d6: 'M11.9272 1.75H12.0415C14.2323 1.74999 15.9529 1.74998 17.2964 1.93059C18.673 2.11568 19.7653 2.50272 20.6235 3.36091C21.4817 4.21911 21.8687 5.31137 22.0538 6.68802C22.2344 8.03144 22.2344 9.75212 22.2344 11.9428V12.0572C22.2344 14.2479 22.2344 15.9686 22.0538 17.312C21.8687 18.6886 21.4817 19.7809 20.6235 20.6391C19.7653 21.4973 18.673 21.8843 17.2964 22.0694C15.9529 22.25 14.2323 22.25 12.0415 22.25H11.9272C9.7365 22.25 8.01582 22.25 6.6724 22.0694C5.29574 21.8843 4.20349 21.4973 3.34529 20.6391C2.48709 19.7809 2.10006 18.6886 1.91497 17.312C1.73435 15.9686 1.73436 14.2479 1.73438 12.0572V11.9428C1.73436 9.75212 1.73435 8.03144 1.91497 6.68802C2.10006 5.31137 2.48709 4.21911 3.34529 3.36091C4.20349 2.50272 5.29574 2.11568 6.6724 1.93059C8.01582 1.74998 9.7365 1.74999 11.9272 1.75Z',
  d7: 'M10.7422 12C10.7422 11.3096 11.3018 10.75 11.9922 10.75H12.0012C12.6915 10.75 13.2512 11.3096 13.2512 12C13.2512 12.6904 12.6915 13.25 12.0012 13.25H11.9922C11.3018 13.25 10.7422 12.6904 10.7422 12Z',
  d8: 'M10.7344 16C10.7344 15.3096 11.294 14.75 11.9844 14.75H11.9934C12.6837 14.75 13.2434 15.3096 13.2434 16C13.2434 16.6904 12.6837 17.25 11.9934 17.25H11.9844C11.294 17.25 10.7344 16.6904 10.7344 16Z',
  d9: 'M10.75 8C10.75 7.30964 11.3096 6.75 12 6.75H12.009C12.6993 6.75 13.259 7.30964 13.259 8C13.259 8.69036 12.6993 9.25 12.009 9.25H12C11.3096 9.25 10.75 8.69036 10.75 8Z',
  d10: 'M3 3L3 21H21V3L3 3Z',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.1989 2.32902 21.3897 2.46967 21.5303C2.61032 21.671 2.80109 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM13.25 8.25684V5.75H10.75L10.75 8.25684H13.25ZM13.25 10.7427V13.2495H10.75V10.7427H13.25ZM13.25 15.7432V18.25H10.75V15.7432H13.25Z',
};

export const IconMoreVerticalSquare02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-vertical-square-02-stroke-rounded IconMoreVerticalSquare02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMoreVerticalSquare02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-vertical-square-02-duotone-rounded IconMoreVerticalSquare02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
    </TheIconWrapper>
  );
};

export const IconMoreVerticalSquare02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-vertical-square-02-twotone-rounded IconMoreVerticalSquare02TwotoneRounded"
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
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreVerticalSquare02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-vertical-square-02-solid-rounded IconMoreVerticalSquare02SolidRounded"
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

export const IconMoreVerticalSquare02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-vertical-square-02-bulk-rounded IconMoreVerticalSquare02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreVerticalSquare02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-vertical-square-02-stroke-sharp IconMoreVerticalSquare02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMoreVerticalSquare02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="more-vertical-square-02-solid-sharp IconMoreVerticalSquare02SolidSharp"
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

export const iconPackOfMoreVerticalSquare02: TheIconSelfPack = {
  name: 'MoreVerticalSquare02',
  StrokeRounded: IconMoreVerticalSquare02StrokeRounded,
  DuotoneRounded: IconMoreVerticalSquare02DuotoneRounded,
  TwotoneRounded: IconMoreVerticalSquare02TwotoneRounded,
  SolidRounded: IconMoreVerticalSquare02SolidRounded,
  BulkRounded: IconMoreVerticalSquare02BulkRounded,
  StrokeSharp: IconMoreVerticalSquare02StrokeSharp,
  SolidSharp: IconMoreVerticalSquare02SolidSharp,
};