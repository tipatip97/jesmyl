import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M15.8008 15.8008L8.19915 8.19915M15.8008 15.8008C16.2444 15.3573 15.8098 13.2652 15.8008 12.6335M15.8008 15.8008C15.3573 16.2444 13.2652 15.8098 12.6335 15.8008M8.19915 8.19915C8.64273 7.75558 10.7348 8.19018 11.3665 8.19916M8.19915 8.19915C7.75558 8.64273 8.19018 10.7348 8.19915 11.3665',
  d3: 'M6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059ZM10.5459 7.00899C10.9595 6.98728 11.3124 7.30499 11.3342 7.71864C11.3458 7.93959 11.2605 8.14321 11.1155 8.28829L10.4084 8.99539L15.0046 13.5916L15.7117 12.8845C15.8568 12.7395 16.0604 12.6542 16.2814 12.6658C16.695 12.6876 17.0127 13.0405 16.991 13.4541C16.9867 13.5369 16.9934 13.6968 17.0073 13.9559L17.0104 14.0126C17.0227 14.2395 17.0374 14.51 17.0417 14.7782C17.0463 15.0655 17.0399 15.3822 16.9982 15.6677C16.963 15.9092 16.8808 16.3116 16.5956 16.5968C16.3104 16.882 15.908 16.9642 15.6665 16.9994C15.381 17.0411 15.0643 17.0475 14.777 17.0429C14.5088 17.0386 14.2383 17.0239 14.0115 17.0116L14.0114 17.0116L13.9547 17.0085C13.6956 16.9946 13.5357 16.9879 13.4529 16.9922C13.0393 17.0139 12.6864 16.6962 12.6646 16.2826C12.653 16.0618 12.7382 15.8583 12.883 15.7132L13.5904 15.0058L8.9942 10.4096L8.2868 11.117C8.14174 11.2618 7.93823 11.347 7.71743 11.3354C7.30379 11.3136 6.98607 10.9607 7.00779 10.5471C7.01213 10.4643 7.00544 10.3044 6.99147 10.0453L6.9884 9.98862C6.97609 9.76175 6.96141 9.49123 6.9571 9.22301C6.95249 8.93575 6.9589 8.61902 7.00057 8.33353C7.03582 8.09203 7.11804 7.68957 7.4032 7.40441C7.68837 7.11925 8.09082 7.03703 8.33233 7.00178C8.61781 6.9601 8.93454 6.9537 9.2218 6.95831C9.49 6.96262 9.76049 6.97729 9.98735 6.9896L10.0441 6.99267C10.3032 7.00665 10.4631 7.01334 10.5459 7.00899Z',
  d4: 'M11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428Z',
  d5: 'M11.3342 7.71864C11.3124 7.30499 10.9595 6.98727 10.5459 7.00899C10.4631 7.01334 10.3032 7.00665 10.0441 6.99267L9.98735 6.9896C9.76049 6.97729 9.49 6.96262 9.2218 6.95831C8.93454 6.9537 8.61781 6.9601 8.33233 7.00178C8.09082 7.03703 7.68837 7.11925 7.4032 7.40441C7.11804 7.68957 7.03582 8.09203 7.00057 8.33353C6.9589 8.61902 6.95249 8.93575 6.9571 9.22301C6.96141 9.49123 6.97609 9.76175 6.9884 9.98862L6.99147 10.0453C7.00544 10.3044 7.01213 10.4643 7.00779 10.5471C6.98607 10.9607 7.30379 11.3136 7.71743 11.3354C7.93823 11.347 8.14174 11.2618 8.2868 11.117L8.9942 10.4096L13.5904 15.0058L12.883 15.7132C12.7382 15.8583 12.653 16.0618 12.6646 16.2826C12.6864 16.6962 13.0393 17.0139 13.4529 16.9922C13.5357 16.9879 13.6956 16.9946 13.9547 17.0085L14.0114 17.0116C14.2383 17.0239 14.5088 17.0386 14.777 17.0429C15.0643 17.0475 15.381 17.0411 15.6665 16.9994C15.908 16.9642 16.3104 16.882 16.5956 16.5968C16.8808 16.3116 16.963 15.9092 16.9982 15.6677C17.0399 15.3822 17.0463 15.0655 17.0417 14.7782C17.0374 14.51 17.0227 14.2395 17.0104 14.0126L17.0073 13.9559C16.9934 13.6968 16.9867 13.5369 16.991 13.4541C17.0127 13.0405 16.695 12.6876 16.2814 12.6658C16.0604 12.6542 15.8568 12.7395 15.7117 12.8845L15.0046 13.5916L10.4084 8.99539L11.1155 8.28829C11.2605 8.14321 11.3458 7.93959 11.3342 7.71864Z',
  d6: 'M11 7H7V11M13 17H17V13M7.24087 7.24087L16.6481 16.6481',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM11 6.25H6.25V11H7.75V8.81066L15.1893 16.25H13V17.75H17.75V13H16.25V15.1893L8.81066 7.75H11V6.25Z',
};

export const IconSquareArrowDiagonal02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-02-stroke-rounded IconSquareArrowDiagonal02StrokeRounded"
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

export const IconSquareArrowDiagonal02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-02-duotone-rounded IconSquareArrowDiagonal02DuotoneRounded"
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

export const IconSquareArrowDiagonal02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-02-twotone-rounded IconSquareArrowDiagonal02TwotoneRounded"
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

export const IconSquareArrowDiagonal02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-02-solid-rounded IconSquareArrowDiagonal02SolidRounded"
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

export const IconSquareArrowDiagonal02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-02-bulk-rounded IconSquareArrowDiagonal02BulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconSquareArrowDiagonal02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-02-stroke-sharp IconSquareArrowDiagonal02StrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDiagonal02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-diagonal-02-solid-sharp IconSquareArrowDiagonal02SolidSharp"
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

export const iconPackOfSquareArrowDiagonal02: TheIconSelfPack = {
  name: 'SquareArrowDiagonal02',
  StrokeRounded: IconSquareArrowDiagonal02StrokeRounded,
  DuotoneRounded: IconSquareArrowDiagonal02DuotoneRounded,
  TwotoneRounded: IconSquareArrowDiagonal02TwotoneRounded,
  SolidRounded: IconSquareArrowDiagonal02SolidRounded,
  BulkRounded: IconSquareArrowDiagonal02BulkRounded,
  StrokeSharp: IconSquareArrowDiagonal02StrokeSharp,
  SolidSharp: IconSquareArrowDiagonal02SolidSharp,
};