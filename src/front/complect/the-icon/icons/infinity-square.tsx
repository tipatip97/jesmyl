import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 12C12 12 10.3569 14.5 8.7 14.5C7.04315 14.5 6 13.3807 6 12C6 10.6193 7.04315 9.5 8.7 9.5C10.3569 9.5 12 12 12 12ZM12 12C12 12 13.6431 14.5 15.3 14.5C16.9569 14.5 18 13.3807 18 12C18 10.6193 16.9569 9.5 15.3 9.5C13.6431 9.5 12 12 12 12Z',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM7 12C7 11.203 7.56345 10.5 8.7 10.5C8.86652 10.5 9.09875 10.5656 9.39662 10.746C9.68924 10.9232 9.98532 11.175 10.2602 11.4531C10.4461 11.6411 10.6124 11.831 10.7509 12C10.6124 12.169 10.4461 12.3589 10.2602 12.5469C9.98532 12.825 9.68924 13.0768 9.39662 13.254C9.09875 13.4344 8.86652 13.5 8.7 13.5C7.56345 13.5 7 12.797 7 12ZM13.7398 12.5469C13.5539 12.3589 13.3876 12.169 13.2491 12C13.3876 11.831 13.5539 11.6411 13.7398 11.4531C14.0147 11.175 14.3108 10.9232 14.6034 10.746C14.9012 10.5656 15.1335 10.5 15.3 10.5C16.4366 10.5 17 11.203 17 12C17 12.797 16.4366 13.5 15.3 13.5C15.1335 13.5 14.9012 13.4344 14.6034 13.254C14.3108 13.0768 14.0147 12.825 13.7398 12.5469ZM11.6825 13.9531C11.7951 13.8391 11.9013 13.7255 12 13.6153C12.0987 13.7255 12.2049 13.8391 12.3175 13.9531C12.6606 14.3 13.0859 14.6732 13.5674 14.9648C14.0436 15.2531 14.6381 15.5 15.3 15.5C17.4772 15.5 19 13.9644 19 12C19 10.0356 17.4772 8.5 15.3 8.5C14.6381 8.5 14.0436 8.74686 13.5674 9.03524C13.0859 9.32679 12.6606 9.69997 12.3175 10.0469C12.2049 10.1609 12.0987 10.2745 12 10.3847C11.9013 10.2745 11.7951 10.1609 11.6825 10.0469C11.3394 9.69997 10.9141 9.32679 10.4326 9.03524C9.95639 8.74686 9.3619 8.5 8.7 8.5C6.52284 8.5 5 10.0356 5 12C5 13.9644 6.52284 15.5 8.7 15.5C9.3619 15.5 9.95639 15.2531 10.4326 14.9648C10.9141 14.6732 11.3394 14.3 11.6825 13.9531Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M8.7 10.5C7.56345 10.5 7 11.203 7 12C7 12.797 7.56345 13.5 8.7 13.5C8.86652 13.5 9.09875 13.4344 9.39662 13.254C9.68924 13.0768 9.98532 12.825 10.2602 12.5469C10.4461 12.3589 10.6124 12.169 10.7509 12C10.6124 11.831 10.4461 11.6411 10.2602 11.4531C9.98532 11.175 9.68924 10.9232 9.39662 10.746C9.09875 10.5656 8.86652 10.5 8.7 10.5ZM13.2491 12C13.3876 12.169 13.5539 12.3589 13.7398 12.5469C14.0147 12.825 14.3108 13.0768 14.6034 13.254C14.9012 13.4344 15.1335 13.5 15.3 13.5C16.4366 13.5 17 12.797 17 12C17 11.203 16.4366 10.5 15.3 10.5C15.1335 10.5 14.9012 10.5656 14.6034 10.746C14.3108 10.9232 14.0147 11.175 13.7398 11.4531C13.5539 11.6411 13.3876 11.831 13.2491 12ZM12 13.6153C11.9013 13.7255 11.7951 13.8391 11.6825 13.9531C11.3394 14.3 10.9141 14.6732 10.4326 14.9648C9.95639 15.2531 9.3619 15.5 8.7 15.5C6.52284 15.5 5 13.9644 5 12C5 10.0356 6.52284 8.5 8.7 8.5C9.3619 8.5 9.95639 8.74686 10.4326 9.03524C10.9141 9.32679 11.3394 9.69997 11.6825 10.0469C11.7951 10.1609 11.9013 10.2745 12 10.3847C12.0987 10.2745 12.2049 10.1609 12.3175 10.0469C12.6606 9.69997 13.0859 9.32679 13.5674 9.03524C14.0436 8.74686 14.6381 8.5 15.3 8.5C17.4772 8.5 19 10.0356 19 12C19 13.9644 17.4772 15.5 15.3 15.5C14.6381 15.5 14.0436 15.2531 13.5674 14.9648C13.0859 14.6732 12.6606 14.3 12.3175 13.9531C12.2049 13.8391 12.0987 13.7255 12 13.6153Z',
  d6: 'M3 21H21V3.00046L3 3V21Z',
  d7: 'M7 12C7 11.203 7.56345 10.5 8.7 10.5C8.86652 10.5 9.09875 10.5656 9.39662 10.746C9.68924 10.9232 9.98532 11.175 10.2602 11.4531C10.4461 11.6411 10.6124 11.831 10.7509 12C10.6124 12.169 10.4461 12.3589 10.2602 12.5469C9.98532 12.825 9.68924 13.0768 9.39662 13.254C9.09875 13.4344 8.86652 13.5 8.7 13.5C7.56345 13.5 7 12.797 7 12Z',
  d8: 'M13.7398 12.5469C13.5539 12.3589 13.3876 12.169 13.2491 12C13.3876 11.831 13.5539 11.6411 13.7398 11.4531C14.0147 11.175 14.3108 10.9232 14.6034 10.746C14.9012 10.5656 15.1335 10.5 15.3 10.5C16.4366 10.5 17 11.203 17 12C17 12.797 16.4366 13.5 15.3 13.5C15.1335 13.5 14.9012 13.4344 14.6034 13.254C14.3108 13.0768 14.0147 12.825 13.7398 12.5469Z',
  d9: 'M3.00002 2.25C2.8011 2.24999 2.61033 2.32901 2.46968 2.46966C2.32902 2.61032 2.25 2.80108 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3.00046C21.75 2.58626 21.4142 2.25047 21 2.25046L3.00002 2.25ZM11.6825 13.9531C11.7951 13.8391 11.9013 13.7255 12 13.6153C12.0987 13.7255 12.2049 13.8391 12.3175 13.9531C12.6606 14.3 13.0859 14.6732 13.5674 14.9648C14.0436 15.2531 14.6381 15.5 15.3 15.5C17.4772 15.5 19 13.9644 19 12C19 10.0356 17.4772 8.5 15.3 8.5C14.6381 8.5 14.0436 8.74686 13.5674 9.03524C13.0859 9.32679 12.6606 9.69997 12.3175 10.0469C12.2049 10.1609 12.0987 10.2745 12 10.3847C11.9013 10.2745 11.7951 10.1609 11.6825 10.0469C11.3394 9.69997 10.9141 9.32679 10.4326 9.03524C9.95639 8.74686 9.3619 8.5 8.7 8.5C6.52284 8.5 5 10.0356 5 12C5 13.9644 6.52284 15.5 8.7 15.5C9.3619 15.5 9.95639 15.2531 10.4326 14.9648C10.9141 14.6732 11.3394 14.3 11.6825 13.9531Z',
};

export const IconInfinitySquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-square-stroke-rounded IconInfinitySquareStrokeRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinitySquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-square-duotone-rounded IconInfinitySquareDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinitySquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-square-twotone-rounded IconInfinitySquareTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconInfinitySquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-square-solid-rounded IconInfinitySquareSolidRounded"
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

export const IconInfinitySquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-square-bulk-rounded IconInfinitySquareBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinitySquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-square-stroke-sharp IconInfinitySquareStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconInfinitySquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="infinity-square-solid-sharp IconInfinitySquareSolidSharp"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const iconPackOfInfinitySquare: TheIconSelfPack = {
  name: 'InfinitySquare',
  StrokeRounded: IconInfinitySquareStrokeRounded,
  DuotoneRounded: IconInfinitySquareDuotoneRounded,
  TwotoneRounded: IconInfinitySquareTwotoneRounded,
  SolidRounded: IconInfinitySquareSolidRounded,
  BulkRounded: IconInfinitySquareBulkRounded,
  StrokeSharp: IconInfinitySquareStrokeSharp,
  SolidSharp: IconInfinitySquareSolidSharp,
};