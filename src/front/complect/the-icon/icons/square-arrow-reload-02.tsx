import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M16.5 11.5455C16.5 9.89921 16.4684 9.27273 14.7 9.27273L8.74059 9.27273C7.78727 9.27273 7.67835 9.04753 8.27024 8.30021L9.3 7M7.5 12.4545C7.5 14.1008 7.53158 14.7273 9.3 14.7273H15.2594C16.2127 14.7273 16.3216 14.9525 15.7298 15.6998L14.7 17',
  d3: 'M6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059ZM8.71206 6.53438C8.96923 6.20967 9.44094 6.15492 9.76565 6.41209C9.95242 6.56001 10.0499 6.77892 10.05 7V8.52276L14.7 8.52276C15.6397 8.52276 16.4098 8.77144 16.8523 9.47859C17.2287 10.0799 17.25 10.8698 17.25 11.5455C17.25 11.9597 16.9142 12.2955 16.5 12.2955C16.0858 12.2955 15.75 11.9597 15.75 11.5455C15.75 10.8007 15.6934 10.4543 15.5808 10.2744C15.5344 10.2002 15.4046 10.0228 14.7 10.0228H8.74059C8.48623 10.0228 8.22856 10.0091 8.00469 9.95471C7.80339 9.90583 7.43661 9.77752 7.25078 9.39329C7.06495 9.00906 7.19209 8.64187 7.27875 8.45372C7.37512 8.24447 7.52437 8.03399 7.6823 7.83459L8.71206 6.53438ZM6.75 12.4546C6.75 12.0404 7.08579 11.7046 7.5 11.7046C7.91421 11.7046 8.25 12.0404 8.25 12.4546C8.25 13.1993 8.30658 13.5458 8.41917 13.7257C8.46556 13.7998 8.59543 13.9773 9.3 13.9773H15.2594C15.5138 13.9773 15.7714 13.991 15.9953 14.0454C16.1966 14.0942 16.5634 14.2225 16.7492 14.6068C16.935 14.991 16.8079 15.3582 16.7213 15.5463C16.6249 15.7556 16.4756 15.9661 16.3177 16.1655L15.2879 17.4657C15.0308 17.7904 14.5591 17.8451 14.2344 17.588C14.0476 17.44 13.9501 17.2211 13.95 17V15.4773H9.3C8.36034 15.4773 7.59021 15.2286 7.14765 14.5215C6.77131 13.9201 6.75 13.1302 6.75 12.4546Z',
  d4: 'M11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428Z',
  d5: 'M9.76565 6.41209C9.44094 6.15492 8.96923 6.20967 8.71206 6.53438L7.6823 7.83459C7.52437 8.03399 7.37512 8.24447 7.27875 8.45372C7.19209 8.64187 7.06495 9.00906 7.25078 9.39329C7.43661 9.77752 7.80339 9.90583 8.00469 9.95471C8.22856 10.0091 8.48623 10.0228 8.74059 10.0228L14.7 10.0228C15.4046 10.0228 15.5344 10.2002 15.5808 10.2744C15.6934 10.4543 15.75 10.8007 15.75 11.5455C15.75 11.9597 16.0858 12.2955 16.5 12.2955C16.9142 12.2955 17.25 11.9597 17.25 11.5455C17.25 10.8698 17.2287 10.0799 16.8523 9.47859C16.4098 8.77144 15.6397 8.52276 14.7 8.52276L10.05 8.52276V7C10.0499 6.77892 9.95242 6.56001 9.76565 6.41209Z',
  d6: 'M7.5 11.7046C7.08579 11.7046 6.75 12.0404 6.75 12.4546C6.75 13.1302 6.77131 13.9201 7.14765 14.5215C7.59021 15.2286 8.36034 15.4773 9.3 15.4773H13.95V17C13.9501 17.2211 14.0476 17.44 14.2344 17.588C14.5591 17.8451 15.0308 17.7904 15.2879 17.4657L16.3177 16.1655C16.4756 15.9661 16.6249 15.7556 16.7213 15.5463C16.8079 15.3582 16.935 14.991 16.7492 14.6068C16.5634 14.2225 16.1966 14.0942 15.9953 14.0454C15.7714 13.991 15.5138 13.9773 15.2594 13.9773H9.3C8.59543 13.9773 8.46556 13.7998 8.41917 13.7257C8.30658 13.5458 8.25 13.1993 8.25 12.4546C8.25 12.0404 7.91421 11.7046 7.5 11.7046Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M8.0127 12.0039V14.4144L15.8824 14.4144C15.9674 14.4144 16.0141 14.5129 15.96 14.5781L13.5322 17.5039M16.0127 12.0039V9.59345L8.14301 9.59345C8.05795 9.59345 8.01128 9.49494 8.06544 9.42968L10.4932 6.50391',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM10.0857 6.96854L9.06048 8.25002H16.5009C16.9151 8.25002 17.2509 8.5858 17.2509 9.00002V12H15.7509V9.75002H7.50001C7.2117 9.75002 6.94892 9.58476 6.82403 9.32491C6.69914 9.06506 6.73425 8.75662 6.91436 8.53149L8.91436 6.03149L10.0857 6.96854ZM8.25001 12V14.25H16.5009C16.7893 14.25 17.0521 14.4153 17.1769 14.6752C17.3018 14.9351 17.2666 15.2436 17.0865 15.4687L15.0856 17.9687L13.9145 17.0314L14.94 15.75H7.50001C7.08579 15.75 6.75001 15.4142 6.75001 15V12H8.25001Z',
};

export const IconSquareArrowReload02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-reload-02-stroke-rounded IconSquareArrowReload02StrokeRounded"
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

export const IconSquareArrowReload02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-reload-02-duotone-rounded IconSquareArrowReload02DuotoneRounded"
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

export const IconSquareArrowReload02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-reload-02-twotone-rounded IconSquareArrowReload02TwotoneRounded"
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

export const IconSquareArrowReload02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-reload-02-solid-rounded IconSquareArrowReload02SolidRounded"
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

export const IconSquareArrowReload02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-reload-02-bulk-rounded IconSquareArrowReload02BulkRounded"
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

export const IconSquareArrowReload02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-reload-02-stroke-sharp IconSquareArrowReload02StrokeSharp"
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

export const IconSquareArrowReload02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-reload-02-solid-sharp IconSquareArrowReload02SolidSharp"
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

export const iconPackOfSquareArrowReload02: TheIconSelfPack = {
  name: 'SquareArrowReload02',
  StrokeRounded: IconSquareArrowReload02StrokeRounded,
  DuotoneRounded: IconSquareArrowReload02DuotoneRounded,
  TwotoneRounded: IconSquareArrowReload02TwotoneRounded,
  SolidRounded: IconSquareArrowReload02SolidRounded,
  BulkRounded: IconSquareArrowReload02BulkRounded,
  StrokeSharp: IconSquareArrowReload02StrokeSharp,
  SolidSharp: IconSquareArrowReload02SolidSharp,
};