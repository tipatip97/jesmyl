import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8 12L16 12M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5',
  d3: 'M1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 12.0572L22.25 11.9428L22.25 11.9428C22.25 9.7521 22.25 8.03143 22.0694 6.68802C21.8843 5.31136 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L12.0572 1.75L11.9428 1.75L11.9428 1.75C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802ZM17 12C17 11.4477 16.5523 11 16 11L11.5 11L11.5 10.838C11.5001 10.5476 11.5002 10.2403 11.4712 9.99783C11.45 9.82103 11.3702 9.1705 10.7613 8.87038C10.1519 8.57002 9.60918 8.91494 9.46263 9.00859C9.26085 9.13753 9.02819 9.33054 8.80808 9.51314L8.77028 9.54449C8.42352 9.83196 8.02882 10.1743 7.71482 10.5176C7.55802 10.689 7.39647 10.8873 7.26884 11.1026C7.15052 11.3022 7 11.6174 7 12C7 12.3826 7.15052 12.6978 7.26884 12.8974C7.39647 13.1127 7.55802 13.311 7.71482 13.4824C8.02882 13.8257 8.42352 14.168 8.77028 14.4555L8.80807 14.4869C9.02819 14.6695 9.26085 14.8625 9.46263 14.9914C9.60918 15.0851 10.1519 15.43 10.7613 15.1296C11.3702 14.8295 11.45 14.179 11.4712 14.0022C11.5002 13.7597 11.5001 13.4524 11.5 13.162L11.5 13L16 13C16.5523 13 17 12.5523 17 12Z',
  d4: 'M1.75 11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.7521 1.74999 11.9428 1.75L11.9428 1.75L12.0572 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31136 22.0694 6.68802C22.25 8.03143 22.25 9.7521 22.25 11.9428L22.25 11.9428L22.25 12.0572L22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L11.9428 22.25C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 11.9428Z',
  d5: 'M16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L11.5 13L11.5 13.162C11.5001 13.4524 11.5002 13.7597 11.4712 14.0022C11.45 14.179 11.3702 14.8295 10.7613 15.1296C10.1519 15.43 9.60918 15.0851 9.46263 14.9914C9.26085 14.8625 9.02819 14.6695 8.80807 14.4869L8.77029 14.4555C8.42352 14.168 8.02882 13.8257 7.71482 13.4824C7.55802 13.311 7.39647 13.1127 7.26884 12.8974C7.15052 12.6978 7 12.3826 7 12C7 11.6174 7.15052 11.3022 7.26884 11.1026C7.39647 10.8873 7.55802 10.689 7.71482 10.5176C8.02882 10.1743 8.42352 9.83196 8.77028 9.54449L8.80808 9.51314C9.02819 9.33054 9.26085 9.13753 9.46263 9.00859C9.60918 8.91494 10.1519 8.57002 10.7613 8.87038C11.3702 9.1705 11.45 9.82103 11.4712 9.99783C11.5002 10.2403 11.5001 10.5476 11.5 10.838L11.5 11L16 11Z',
  d6: 'M16 12.0004L8.29866 12.0004M11 15L8 12.0004L11 9',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM11.5304 9.53039L10.4698 8.46973L6.93945 12.0001L10.4698 15.5304L11.5304 14.4697L9.81077 12.7501L16.0001 12.7501V11.2501H9.81077L11.5304 9.53039Z',
};

export const IconSquareArrowLeft02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-02-stroke-rounded IconSquareArrowLeft02StrokeRounded"
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

export const IconSquareArrowLeft02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-02-duotone-rounded IconSquareArrowLeft02DuotoneRounded"
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

export const IconSquareArrowLeft02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-02-twotone-rounded IconSquareArrowLeft02TwotoneRounded"
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

export const IconSquareArrowLeft02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-02-solid-rounded IconSquareArrowLeft02SolidRounded"
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

export const IconSquareArrowLeft02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-02-bulk-rounded IconSquareArrowLeft02BulkRounded"
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

export const IconSquareArrowLeft02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-02-stroke-sharp IconSquareArrowLeft02StrokeSharp"
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

export const IconSquareArrowLeft02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-02-solid-sharp IconSquareArrowLeft02SolidSharp"
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

export const iconPackOfSquareArrowLeft02: TheIconSelfPack = {
  name: 'SquareArrowLeft02',
  StrokeRounded: IconSquareArrowLeft02StrokeRounded,
  DuotoneRounded: IconSquareArrowLeft02DuotoneRounded,
  TwotoneRounded: IconSquareArrowLeft02TwotoneRounded,
  SolidRounded: IconSquareArrowLeft02SolidRounded,
  BulkRounded: IconSquareArrowLeft02BulkRounded,
  StrokeSharp: IconSquareArrowLeft02StrokeSharp,
  SolidSharp: IconSquareArrowLeft02SolidSharp,
};