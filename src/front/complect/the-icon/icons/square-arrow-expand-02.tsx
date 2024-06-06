import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M16.5148 16.5149C17.0896 15.9401 16.9941 13.4982 16.9941 13.4982M16.5148 16.5149C15.94 17.0897 13.4981 16.994 13.4981 16.994M16.5148 16.5149L13 13M7.48506 7.48512C8.05987 6.91031 10.5018 7.00596 10.5018 7.00596M7.48506 7.48512C6.91025 8.05993 7.00598 10.5018 7.00598 10.5018M7.48506 7.48512L11 11',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059ZM10.09 6.55196C10.5036 6.53024 10.8566 6.84796 10.8783 7.2616C10.8899 7.48255 10.8046 7.68618 10.6597 7.83126L9.95254 8.53836L11.5 10.0858C11.8905 10.4764 11.8905 11.1095 11.5 11.5001C11.1095 11.8906 10.4763 11.8906 10.0858 11.5001L8.53833 9.95258L7.83093 10.66C7.68587 10.8048 7.48236 10.8899 7.26156 10.8783C6.84791 10.8566 6.5302 10.5037 6.55192 10.09C6.55626 10.0073 6.54957 9.84737 6.5356 9.58823L6.53253 9.53159C6.52022 9.30472 6.50554 9.0342 6.50123 8.76598C6.49662 8.47871 6.50303 8.16199 6.5447 7.8765C6.57995 7.635 6.66217 7.23254 6.94733 6.94738C7.2325 6.66221 7.63495 6.58 7.87646 6.54474C8.16194 6.50307 8.47867 6.49667 8.76593 6.50128C9.03413 6.50558 9.30462 6.52026 9.53148 6.53257L9.58818 6.53564C9.84732 6.54962 10.0072 6.55631 10.09 6.55196ZM13.91 17.448C13.4964 17.4698 13.1434 17.152 13.1217 16.7384C13.1101 16.5176 13.1953 16.3141 13.3401 16.169L14.0475 15.4616L12.5 13.9142C12.1095 13.5237 12.1095 12.8905 12.5 12.5C12.8905 12.1094 13.5237 12.1094 13.9142 12.5L15.4617 14.0474L16.1688 13.3403C16.3139 13.1953 16.5175 13.1101 16.7384 13.1217C17.1521 13.1434 17.4698 13.4963 17.4481 13.91C17.4437 13.9927 17.4504 14.1526 17.4644 14.4118L17.4675 14.4684C17.4798 14.6953 17.4945 14.9658 17.4988 15.234C17.5034 15.5213 17.497 15.838 17.4553 16.1235C17.42 16.365 17.3378 16.7675 17.0527 17.0526C16.7675 17.3378 16.365 17.42 16.1235 17.4553C15.8381 17.4969 15.5213 17.5033 15.2341 17.4987C14.9659 17.4944 14.6953 17.4797 14.4685 17.4674L14.4118 17.4644C14.1527 17.4504 13.9928 17.4437 13.91 17.448Z',
  d4: 'M11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428Z',
  d5: 'M13.1217 16.7384C13.1434 17.152 13.4963 17.4698 13.91 17.448C13.9927 17.4437 14.1526 17.4504 14.4118 17.4644L14.4684 17.4674C14.6953 17.4797 14.9658 17.4944 15.234 17.4987C15.5213 17.5033 15.838 17.4969 16.1235 17.4553C16.365 17.42 16.7675 17.3378 17.0526 17.0526C17.3378 16.7675 17.42 16.365 17.4553 16.1235C17.4969 15.838 17.5033 15.5213 17.4987 15.234C17.4944 14.9658 17.4797 14.6953 17.4674 14.4684L17.4644 14.4118C17.4504 14.1526 17.4437 13.9927 17.448 13.91C17.4698 13.4963 17.152 13.1434 16.7384 13.1217C16.5174 13.1101 16.3138 13.1953 16.1687 13.3403L15.4616 14.0474L13.9142 12.5C13.5237 12.1094 12.8905 12.1094 12.5 12.5C12.1094 12.8905 12.1094 13.5237 12.5 13.9142L14.0474 15.4616L13.34 16.169C13.1952 16.3141 13.1101 16.5176 13.1217 16.7384Z',
  d6: 'M10.8782 7.2616C10.8565 6.84796 10.5036 6.53024 10.0899 6.55196C10.0072 6.55631 9.84728 6.54962 9.58813 6.53564L9.53143 6.53257C9.30458 6.52026 9.03409 6.50558 8.76589 6.50128C8.47863 6.49667 8.1619 6.50307 7.87641 6.54474C7.63491 6.58 7.23245 6.66221 6.94729 6.94738C6.66212 7.23254 6.57991 7.635 6.54465 7.8765C6.50298 8.16199 6.49658 8.47871 6.50119 8.76598C6.5055 9.0342 6.52017 9.30472 6.53248 9.53159L6.53555 9.58823C6.54953 9.84737 6.55622 10.0073 6.55187 10.09C6.53015 10.5037 6.84787 10.8566 7.26151 10.8783C7.48232 10.8899 7.68582 10.8048 7.83088 10.66L8.53828 9.95258L10.0858 11.5001C10.4763 11.8906 11.1094 11.8906 11.5 11.5001C11.8905 11.1095 11.8905 10.4764 11.5 10.0858L9.95249 8.53836L10.6596 7.83126C10.8046 7.68618 10.8898 7.48255 10.8782 7.2616Z',
  d7: 'M11.0047 11.0047L7.28634 7.28634M7.00597 11.0047L7.00586 7.00586H11.0047M13.0071 13.0071L16.6615 16.6615M17.0059 13.0071V17.0059H13.0071',
  d8: 'M21 3V21H3V3H21Z',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM10.9988 6.25H6.25V10.9988H7.75V8.81066L10.4685 11.5291L11.5291 10.4685L8.81066 7.75H10.9988V6.25ZM12.4709 13.5315L15.1893 16.25H13.0012V17.75H17.75V13.0012H16.25V15.1893L13.5315 12.4709L12.4709 13.5315Z',
};

export const IconSquareArrowExpand02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-expand-02-stroke-rounded IconSquareArrowExpand02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowExpand02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-expand-02-duotone-rounded IconSquareArrowExpand02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowExpand02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-expand-02-twotone-rounded IconSquareArrowExpand02TwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowExpand02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-expand-02-solid-rounded IconSquareArrowExpand02SolidRounded"
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

export const IconSquareArrowExpand02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-expand-02-bulk-rounded IconSquareArrowExpand02BulkRounded"
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

export const IconSquareArrowExpand02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-expand-02-stroke-sharp IconSquareArrowExpand02StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowExpand02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-expand-02-solid-sharp IconSquareArrowExpand02SolidSharp"
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

export const iconPackOfSquareArrowExpand02: TheIconSelfPack = {
  name: 'SquareArrowExpand02',
  StrokeRounded: IconSquareArrowExpand02StrokeRounded,
  DuotoneRounded: IconSquareArrowExpand02DuotoneRounded,
  TwotoneRounded: IconSquareArrowExpand02TwotoneRounded,
  SolidRounded: IconSquareArrowExpand02SolidRounded,
  BulkRounded: IconSquareArrowExpand02BulkRounded,
  StrokeSharp: IconSquareArrowExpand02StrokeSharp,
  SolidSharp: IconSquareArrowExpand02SolidSharp,
};