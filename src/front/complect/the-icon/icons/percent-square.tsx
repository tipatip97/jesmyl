import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8 16L16 8M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9ZM16 14.8284C16 15.3807 15.5523 15.8284 15 15.8284C14.4477 15.8284 14 15.3807 14 14.8284C14 14.2761 14.4477 13.8284 15 13.8284C15.5523 13.8284 16 14.2761 16 14.8284Z',
  d3: 'M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z',
  d4: 'M16 14.8284C16 15.3807 15.5523 15.8284 15 15.8284C14.4477 15.8284 14 15.3807 14 14.8284C14 14.2761 14.4477 13.8284 15 13.8284C15.5523 13.8284 16 14.2761 16 14.8284Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572ZM16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289ZM9 7.25C8.0335 7.25 7.25 8.0335 7.25 9C7.25 9.9665 8.0335 10.75 9 10.75C9.9665 10.75 10.75 9.9665 10.75 9C10.75 8.0335 9.9665 7.25 9 7.25ZM15 13.0784C14.0335 13.0784 13.25 13.8619 13.25 14.8284C13.25 15.7949 14.0335 16.5784 15 16.5784C15.9665 16.5784 16.75 15.7949 16.75 14.8284C16.75 13.8619 15.9665 13.0784 15 13.0784Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d7: 'M16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289Z',
  d8: 'M7.25 9C7.25 8.0335 8.0335 7.25 9 7.25C9.9665 7.25 10.75 8.0335 10.75 9C10.75 9.9665 9.9665 10.75 9 10.75C8.0335 10.75 7.25 9.9665 7.25 9Z',
  d9: 'M13.25 14.8284C13.25 13.8619 14.0335 13.0784 15 13.0784C15.9665 13.0784 16.75 13.8619 16.75 14.8284C16.75 15.7949 15.9665 16.5784 15 16.5784C14.0335 16.5784 13.25 15.7949 13.25 14.8284Z',
  d10: 'M3 21H21V3.00046L3 3V21Z',
  d11: 'M8 16L16 8M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9ZM16 15C16 15.5523 15.5523 16 15 16C14.4477 16 14 15.5523 14 15C14 14.4477 14.4477 14 15 14C15.5523 14 16 14.4477 16 15Z',
  d12: 'M2.46968 2.46966C2.61033 2.32901 2.8011 2.24999 3.00002 2.25L21 2.25046C21.4142 2.25047 21.75 2.58626 21.75 3.00046V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3C2.25 2.80108 2.32902 2.61032 2.46968 2.46966ZM7.25 9C7.25 8.0335 8.0335 7.25 9 7.25C9.9665 7.25 10.75 8.0335 10.75 9C10.75 9.9665 9.9665 10.75 9 10.75C8.0335 10.75 7.25 9.9665 7.25 9ZM13.25 15C13.25 14.0335 14.0335 13.25 15 13.25C15.9665 13.25 16.75 14.0335 16.75 15C16.75 15.9665 15.9665 16.75 15 16.75C14.0335 16.75 13.25 15.9665 13.25 15ZM8.70718 16.7072L16.7072 8.70718L15.293 7.29297L7.29297 15.293L8.70718 16.7072Z',
};

export const IconPercentSquareStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="percent-square-stroke-rounded IconPercentSquareStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconPercentSquareDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="percent-square-duotone-rounded IconPercentSquareDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPercentSquareTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="percent-square-twotone-rounded IconPercentSquareTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPercentSquareSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="percent-square-solid-rounded IconPercentSquareSolidRounded"
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

export const IconPercentSquareBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="percent-square-bulk-rounded IconPercentSquareBulkRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPercentSquareStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="percent-square-stroke-sharp IconPercentSquareStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconPercentSquareSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="percent-square-solid-sharp IconPercentSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPercentSquare: TheIconSelfPack = {
  name: 'PercentSquare',
  StrokeRounded: IconPercentSquareStrokeRounded,
  DuotoneRounded: IconPercentSquareDuotoneRounded,
  TwotoneRounded: IconPercentSquareTwotoneRounded,
  SolidRounded: IconPercentSquareSolidRounded,
  BulkRounded: IconPercentSquareBulkRounded,
  StrokeSharp: IconPercentSquareStrokeSharp,
  SolidSharp: IconPercentSquareSolidSharp,
};