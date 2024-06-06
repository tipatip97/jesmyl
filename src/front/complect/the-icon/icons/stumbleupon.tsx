import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 13V15C18 16.1046 17.1046 17 16 17C14.8954 17 14 16.1046 14 15V13M6 13V15C6 16.1046 6.89543 17 8 17C9.10457 17 10 16.1046 10 15V9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9V10',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9V10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10V9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9L11 15C11 16.6569 9.65685 18 8 18C6.34315 18 5 16.6569 5 15L5 13C5 12.4477 5.44772 12 6 12C6.55228 12 7 12.4477 7 13V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15L9 9ZM13 13C13 12.4477 13.4477 12 14 12C14.5523 12 15 12.4477 15 13L15 15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15V13C17 12.4477 17.4477 12 18 12C18.5523 12 19 12.4477 19 13V15C19 16.6569 17.6569 18 16 18C14.3431 18 13 16.6569 13 15L13 13Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M12 6C10.3431 6 9 7.34315 9 9V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V13C7 12.4477 6.55228 12 6 12C5.44772 12 5 12.4477 5 13V15C5 16.6569 6.34315 18 8 18C9.65685 18 11 16.6569 11 15V9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9C15 7.34315 13.6569 6 12 6Z',
  d6: 'M14 12C13.4477 12 13 12.4477 13 13V15C13 16.6569 14.3431 18 16 18C17.6569 18 19 16.6569 19 15V13C19 12.4477 18.5523 12 18 12C17.4477 12 17 12.4477 17 13V15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15V13C15 12.4477 14.5523 12 14 12Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM12 6.25C10.4812 6.25 9.25 7.48122 9.25 9L9.25 15C9.25 15.6904 8.69036 16.25 8 16.25C7.30964 16.25 6.75 15.6904 6.75 15V13H5.25V15C5.25 16.5188 6.48122 17.75 8 17.75C9.51878 17.75 10.75 16.5188 10.75 15L10.75 9C10.75 8.30964 11.3096 7.75 12 7.75C12.6904 7.75 13.25 8.30964 13.25 9V10H14.75V9C14.75 7.48122 13.5188 6.25 12 6.25ZM14.75 15L14.75 13H13.25L13.25 15C13.25 16.5188 14.4812 17.75 16 17.75C17.5188 17.75 18.75 16.5188 18.75 15V13H17.25V15C17.25 15.6904 16.6904 16.25 16 16.25C15.3096 16.25 14.75 15.6904 14.75 15Z',
};

export const IconStumbleuponStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stumbleupon-stroke-rounded IconStumbleuponStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconStumbleuponDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stumbleupon-duotone-rounded IconStumbleuponDuotoneRounded"
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

export const IconStumbleuponTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stumbleupon-twotone-rounded IconStumbleuponTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconStumbleuponSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stumbleupon-solid-rounded IconStumbleuponSolidRounded"
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

export const IconStumbleuponBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stumbleupon-bulk-rounded IconStumbleuponBulkRounded"
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

export const IconStumbleuponStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stumbleupon-stroke-sharp IconStumbleuponStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconStumbleuponSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="stumbleupon-solid-sharp IconStumbleuponSolidSharp"
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

export const iconPackOfStumbleupon: TheIconSelfPack = {
  name: 'Stumbleupon',
  StrokeRounded: IconStumbleuponStrokeRounded,
  DuotoneRounded: IconStumbleuponDuotoneRounded,
  TwotoneRounded: IconStumbleuponTwotoneRounded,
  SolidRounded: IconStumbleuponSolidRounded,
  BulkRounded: IconStumbleuponBulkRounded,
  StrokeSharp: IconStumbleuponStrokeSharp,
  SolidSharp: IconStumbleuponSolidSharp,
};