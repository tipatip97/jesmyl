import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5 13L17 9M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z',
  d2: 'M6 12C6 8.68629 8.68629 6 12 6C13.0929 6 14.1175 6.29218 15 6.80269',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d4: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17Z',
  d5: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H12.0572H11.9428H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75211 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75214 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM17.5644 9.49389C17.8372 9.18216 17.8056 8.70834 17.4939 8.43558C17.1822 8.16282 16.7083 8.1944 16.4356 8.50613L12.9967 12.4362C12.6877 12.316 12.3516 12.25 12 12.25C10.4812 12.25 9.25 13.4812 9.25 15C9.25 16.5188 10.4812 17.75 12 17.75C13.5188 17.75 14.75 16.5188 14.75 15C14.75 14.3782 14.5436 13.8046 14.1956 13.3439L17.5644 9.49389ZM12 6.75C9.1005 6.75 6.75 9.1005 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 8.27208 8.27208 5.25 12 5.25C13.2282 5.25 14.3819 5.57872 15.3755 6.15349C15.7341 6.3609 15.8566 6.81969 15.6492 7.17824C15.4418 7.53678 14.983 7.65931 14.6245 7.4519C13.853 7.00564 12.9575 6.75 12 6.75Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.75214 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.75211 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H11.9428H12.0572H12.0572Z',
  d7: 'M17.4939 8.43558C17.8056 8.70834 17.8372 9.18216 17.5644 9.49389L14.1956 13.3439C14.5436 13.8046 14.75 14.3782 14.75 15C14.75 16.5188 13.5188 17.75 12 17.75C10.4812 17.75 9.25 16.5188 9.25 15C9.25 13.4812 10.4812 12.25 12 12.25C12.3516 12.25 12.6877 12.316 12.9967 12.4362L16.4356 8.50613C16.7083 8.1944 17.1822 8.16282 17.4939 8.43558ZM6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C12.9575 6.75 13.853 7.00564 14.6245 7.4519C14.983 7.65931 15.4418 7.53678 15.6492 7.17824C15.8566 6.81969 15.7341 6.3609 15.3755 6.15349C14.3819 5.57872 13.2282 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75C6.41421 12.75 6.75 12.4142 6.75 12Z',
  d8: 'M21 3H3V21H21V3Z',
  d9: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3ZM12.9967 12.4362C12.6877 12.316 12.3516 12.25 12 12.25C10.4812 12.25 9.25 13.4812 9.25 15C9.25 16.5188 10.4812 17.75 12 17.75C13.5188 17.75 14.75 16.5188 14.75 15C14.75 14.3782 14.5436 13.8046 14.1956 13.3439L17.5644 9.49386L16.4356 8.5061L12.9967 12.4362ZM12 13.75C11.3096 13.75 10.75 14.3096 10.75 15C10.75 15.6903 11.3096 16.25 12 16.25C12.6904 16.25 13.25 15.6903 13.25 15C13.25 14.3096 12.6904 13.75 12 13.75ZM6.75 12C6.75 9.1005 9.1005 6.75 12 6.75C12.9575 6.75 13.853 7.00564 14.6245 7.4519L15.3755 6.15349C14.3819 5.57872 13.2282 5.25 12 5.25C8.27208 5.25 5.25 8.27208 5.25 12H6.75Z',
};

export const IconDashboardSpeed01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-speed-01-stroke-rounded IconDashboardSpeed01StrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSpeed01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-speed-01-duotone-rounded IconDashboardSpeed01DuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSpeed01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-speed-01-twotone-rounded IconDashboardSpeed01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSpeed01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-speed-01-solid-rounded IconDashboardSpeed01SolidRounded"
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

export const IconDashboardSpeed01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-speed-01-bulk-rounded IconDashboardSpeed01BulkRounded"
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

export const IconDashboardSpeed01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-speed-01-stroke-sharp IconDashboardSpeed01StrokeSharp"
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

export const IconDashboardSpeed01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-speed-01-solid-sharp IconDashboardSpeed01SolidSharp"
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

export const iconPackOfDashboardSpeed01: TheIconSelfPack = {
  name: 'DashboardSpeed01',
  StrokeRounded: IconDashboardSpeed01StrokeRounded,
  DuotoneRounded: IconDashboardSpeed01DuotoneRounded,
  TwotoneRounded: IconDashboardSpeed01TwotoneRounded,
  SolidRounded: IconDashboardSpeed01SolidRounded,
  BulkRounded: IconDashboardSpeed01BulkRounded,
  StrokeSharp: IconDashboardSpeed01StrokeSharp,
  SolidSharp: IconDashboardSpeed01SolidSharp,
};