import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M6.5 17.5L6.5 14.5M11.5 17.5L11.5 8.5M16.5 17.5V13.5',
  d2: 'M21.5 5.5C21.5 7.15685 20.1569 8.5 18.5 8.5C16.8431 8.5 15.5 7.15685 15.5 5.5C15.5 3.84315 16.8431 2.5 18.5 2.5C20.1569 2.5 21.5 3.84315 21.5 5.5Z',
  d3: 'M21.4955 11C21.4955 11 21.5 11.3395 21.5 12C21.5 16.4784 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4784 2.5 12C2.5 7.52169 2.5 5.28252 3.89124 3.89127C5.28249 2.50003 7.52166 2.50003 12 2.50003L13 2.5',
  d4: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 9.64284 21.5 7.90603 21.2971 6.58668C20.8618 7.70637 19.7736 8.5 18.5 8.5C16.8431 8.5 15.5 7.15685 15.5 5.5C15.5 4.22641 16.2936 3.13818 17.4133 2.70287C16.094 2.5 14.3572 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124Z',
  d5: 'M14.3383 1.90488C14.2521 1.75525 13.9655 1.75408 13.3924 1.75173C12.968 1.74999 12.5233 1.75 12.0573 1.75H12.0572H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75213 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75214 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428V11.9427C22.25 11.4767 22.25 11.032 22.2483 10.6076V10.6076C22.2459 10.0344 22.2447 9.74786 22.0951 9.66173C21.9455 9.5756 21.6684 9.735 21.1143 10.0538C20.3445 10.4967 19.4518 10.75 18.5 10.75C15.6005 10.75 13.25 8.3995 13.25 5.5C13.25 4.54815 13.5033 3.65547 13.9462 2.88568C14.265 2.33156 14.4244 2.0545 14.3383 1.90488ZM12.75 9.5C12.75 9.08579 12.4142 8.75 12 8.75C11.5858 8.75 11.25 9.08579 11.25 9.5V17.5C11.25 17.9142 11.5858 18.25 12 18.25C12.4142 18.25 12.75 17.9142 12.75 17.5V9.5ZM17.75 13.5C17.75 13.0858 17.4142 12.75 17 12.75C16.5858 12.75 16.25 13.0858 16.25 13.5V17.5C16.25 17.9142 16.5858 18.25 17 18.25C17.4142 18.25 17.75 17.9142 17.75 17.5V13.5ZM7.75 14.5C7.75 14.0858 7.41421 13.75 7 13.75C6.58579 13.75 6.25 14.0858 6.25 14.5V17.5C6.25 17.9142 6.58579 18.25 7 18.25C7.41421 18.25 7.75 17.9142 7.75 17.5V14.5Z',
  d6: 'M14.75 5.5C14.75 3.42893 16.4289 1.75 18.5 1.75C20.5711 1.75 22.25 3.42893 22.25 5.5C22.25 7.57107 20.5711 9.25 18.5 9.25C16.4289 9.25 14.75 7.57107 14.75 5.5Z',
  d7: 'M13.3924 1.75173C13.9655 1.75408 14.2521 1.75525 14.3383 1.90488C14.4244 2.0545 14.265 2.33156 13.9462 2.88568C13.5033 3.65547 13.25 4.54815 13.25 5.5C13.25 8.3995 15.6005 10.75 18.5 10.75C19.4518 10.75 20.3445 10.4967 21.1143 10.0538C21.6684 9.735 21.9455 9.5756 22.0951 9.66173C22.2448 9.74786 22.2459 10.0345 22.2483 10.6076C22.25 11.032 22.25 11.4768 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.75214 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75213 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C12.5232 1.75 12.968 1.74999 13.3924 1.75173Z',
  d8: 'M12 8.75C12.4142 8.75 12.75 9.08579 12.75 9.5L12.75 17.5C12.75 17.9142 12.4142 18.25 12 18.25C11.5858 18.25 11.25 17.9142 11.25 17.5L11.25 9.5C11.25 9.08579 11.5858 8.75 12 8.75ZM17 12.75C17.4142 12.75 17.75 13.0858 17.75 13.5V17.5C17.75 17.9142 17.4142 18.25 17 18.25C16.5858 18.25 16.25 17.9142 16.25 17.5V13.5C16.25 13.0858 16.5858 12.75 17 12.75ZM7 13.75C7.41421 13.75 7.75 14.0858 7.75 14.5L7.75 17.5C7.75 17.9142 7.41421 18.25 7 18.25C6.58579 18.25 6.25 17.9142 6.25 17.5L6.25 14.5C6.25 14.0858 6.58579 13.75 7 13.75Z',
  d9: 'M6 18L6 15M11 18L11 9M16 18V14',
  d10: 'M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z',
  d11: 'M12.9474 4H2V22H20V11.0526',
  d12: 'M15.25 5C15.25 2.92893 16.9289 1.25 19 1.25C21.0711 1.25 22.75 2.92893 22.75 5C22.75 7.07107 21.0711 8.75 19 8.75C16.9289 8.75 15.25 7.07107 15.25 5Z',
  d13: 'M13.75 5C13.75 4.38639 13.8553 3.79736 14.0487 3.25H2C1.58579 3.25 1.25 3.58579 1.25 4V22C1.25 22.4142 1.58579 22.75 2 22.75H20C20.4142 22.75 20.75 22.4142 20.75 22V9.95126C20.2026 10.1447 19.6136 10.25 19 10.25C16.1005 10.25 13.75 7.8995 13.75 5ZM11.75 18V9H10.25V18H11.75ZM16.75 18V14H15.25V18H16.75ZM6.75 18V15H5.25V18H6.75Z',
};

export const IconAnalytics02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-02-stroke-rounded IconAnalytics02StrokeRounded"
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

export const IconAnalytics02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-02-duotone-rounded IconAnalytics02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAnalytics02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-02-twotone-rounded IconAnalytics02TwotoneRounded"
    >
      <path 
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

export const IconAnalytics02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-02-solid-rounded IconAnalytics02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconAnalytics02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-02-bulk-rounded IconAnalytics02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalytics02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-02-stroke-sharp IconAnalytics02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalytics02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-02-solid-sharp IconAnalytics02SolidSharp"
    >
      <path 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAnalytics02: TheIconSelfPack = {
  name: 'Analytics02',
  StrokeRounded: IconAnalytics02StrokeRounded,
  DuotoneRounded: IconAnalytics02DuotoneRounded,
  TwotoneRounded: IconAnalytics02TwotoneRounded,
  SolidRounded: IconAnalytics02SolidRounded,
  BulkRounded: IconAnalytics02BulkRounded,
  StrokeSharp: IconAnalytics02StrokeSharp,
  SolidSharp: IconAnalytics02SolidSharp,
};