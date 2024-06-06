import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M2.5 7H7.25M21.5 7H16.75',
  d3: 'M7 7H17V7.5C17 8.91421 17 9.62132 16.5607 10.0607C16.1213 10.5 15.4142 10.5 14 10.5H10C8.58579 10.5 7.87868 10.5 7.43934 10.0607C7 9.62132 7 8.91421 7 7.5V7Z',
  d4: 'M12 14H12.009',
  d5: 'M12 21.5C7.52165 21.5 5.28248 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12C2.5 9.88124 2.5 8.26368 2.64733 7H7V7.5C7 8.91421 7 9.62132 7.43934 10.0607C7.87868 10.5 8.58579 10.5 10 10.5H14C15.4142 10.5 16.1213 10.5 16.5607 10.0607C17 9.62132 17 8.91421 17 7.5V7H21.3527C21.5 8.26368 21.5 9.88124 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5Z',
  d6: 'M12.0572 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.183 3.90482 21.5376 4.54273 21.7716 5.28748C21.8695 5.59919 21.9184 5.75505 21.8285 5.87752C21.7386 6 21.5652 6 21.2183 6H2.78168C2.43481 6 2.26137 6 2.17146 5.87752C2.08156 5.75505 2.13051 5.59919 2.22842 5.28748C2.46236 4.54273 2.81701 3.90482 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75211 1.74999 11.9428 1.75H11.9428H12.0572ZM17.9927 8.59672C17.9976 8.3136 18.0001 8.17205 18.0876 8.08602C18.1752 8 18.3155 8 18.5961 8H21.6207C21.8903 8 22.025 8 22.1122 8.084C22.1993 8.168 22.2042 8.30084 22.214 8.56653C22.25 9.54391 22.25 10.6632 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03143 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 10.6632 1.74999 9.54391 1.78598 8.56653C1.79576 8.30084 1.80066 8.168 1.88781 8.084C1.97496 8 2.10973 8 2.37928 8H5.4039C5.68452 8 5.82483 8 5.91237 8.08602C5.99991 8.17205 6.00238 8.3136 6.00733 8.59672C6.01509 9.04132 6.03106 9.53538 6.06383 9.77915C6.13366 10.2985 6.29579 10.8313 6.73223 11.2678C7.16867 11.7042 7.70148 11.8663 8.22084 11.9362C8.69655 12.0001 9.28426 12.0001 9.93839 12L10 12L14.0616 12C14.7157 12.0001 15.3034 12.0001 15.7792 11.9362C16.2985 11.8663 16.8313 11.7042 17.2678 11.2678C17.7042 10.8313 17.8663 10.2985 17.9362 9.77915C17.9689 9.53538 17.9849 9.04132 17.9927 8.59672ZM8.60453 8C8.31937 8 8.17679 8 8.08862 8.08965C8.00046 8.1793 8.00283 8.32069 8.00757 8.60347C8.01383 8.97738 8.02524 9.35829 8.046 9.51266C8.08456 9.7995 8.13941 9.8474 8.14592 9.85308L8.14692 9.85407C8.1526 9.86058 8.20049 9.91543 8.48734 9.954C8.81369 9.99787 9.26462 10 10 10H14C14.7354 10 15.1863 9.99787 15.5127 9.954C15.7995 9.91543 15.8474 9.86058 15.8531 9.85407L15.8541 9.85308C15.8606 9.8474 15.9154 9.7995 15.954 9.51266C15.9748 9.35829 15.9862 8.97738 15.9924 8.60347C15.9972 8.32069 15.9995 8.1793 15.9114 8.08965C15.8232 8 15.6806 8 15.3955 8H8.60453ZM11.9955 13C11.4457 13 11 13.4477 11 14C11 14.5523 11.4457 15 11.9955 15H12.0045C12.5543 15 13 14.5523 13 14C13 13.4477 12.5543 13 12.0045 13H11.9955Z',
  d7: 'M22.214 8.56653C22.2042 8.30084 22.1993 8.168 22.1122 8.084C22.025 8 21.8903 8 21.6207 8H18.5961C18.3155 8 18.1752 8 18.0876 8.08602C18.0001 8.17205 17.9976 8.3136 17.9927 8.59672C17.9849 9.04132 17.9689 9.53538 17.9362 9.77915C17.8663 10.2985 17.7042 10.8313 17.2678 11.2678C16.8313 11.7042 16.2985 11.8663 15.7792 11.9362C15.3034 12.0001 14.7157 12.0001 14.0616 12H9.93839C9.28426 12.0001 8.69655 12.0001 8.22084 11.9362C7.70148 11.8663 7.16867 11.7042 6.73223 11.2678C6.29579 10.8313 6.13366 10.2985 6.06383 9.77915C6.03106 9.53538 6.01509 9.04132 6.00733 8.59672C6.00238 8.3136 5.99991 8.17205 5.91237 8.08602C5.82483 8 5.68452 8 5.4039 8H2.37928C2.10973 8 1.97496 8 1.88781 8.084C1.80066 8.168 1.79576 8.30084 1.78598 8.56653C1.74999 9.54391 1.74999 10.6632 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03143 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 10.6632 22.25 9.54391 22.214 8.56653Z',
  d8: 'M12.058 1.75H11.9437C9.75298 1.74999 8.0323 1.74998 6.68888 1.93059C5.31222 2.11568 4.21997 2.50272 3.36177 3.36091C2.81787 3.90482 2.46322 4.54273 2.22928 5.28748C2.13137 5.59919 2.08242 5.75505 2.17232 5.87752C2.26223 6 2.43566 6 2.78254 6H21.2192C21.5661 6 21.7395 6 21.8294 5.87752C21.9193 5.75505 21.8703 5.59919 21.7724 5.28748C21.5385 4.54274 21.1839 3.90482 20.6399 3.36091C19.7817 2.50272 18.6895 2.11568 17.3128 1.93059C15.9694 1.74998 14.2487 1.74999 12.058 1.75Z',
  d9: 'M8.04686 9.51266C8.0261 9.35829 8.01469 8.97738 8.00843 8.60347C8.00369 8.32069 8.00132 8.1793 8.08948 8.08965C8.17765 8 8.32023 8 8.60539 8H15.3963C15.6815 8 15.8241 8 15.9122 8.08965C16.0004 8.1793 15.998 8.32069 15.9933 8.60347C15.987 8.97738 15.9756 9.35829 15.9549 9.51266C15.9163 9.7995 15.8614 9.8474 15.8549 9.85308L15.8539 9.85407C15.8483 9.86058 15.8004 9.91543 15.5135 9.954C15.1872 9.99787 14.7362 10 14.0009 10H10.0009C9.26548 10 8.81455 9.99787 8.4882 9.954C8.20135 9.91543 8.15345 9.86058 8.14777 9.85407L8.14678 9.85308C8.14027 9.8474 8.08542 9.7995 8.04686 9.51266Z',
  d10: 'M11 14C11 13.4477 11.4457 13 11.9955 13H12.0045C12.5543 13 13 13.4477 13 14C13 14.5523 12.5543 15 12.0045 15H11.9955C11.4457 15 11 14.5523 11 14Z',
  d11: 'M21 3H3V21H21V3Z',
  d12: 'M3 7H21',
  d13: 'M7 7V10.5H17V7',
  d14: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V6.25H21.75V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM21.75 7.75H17.75V11.25H6.25V7.75H2.25V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V7.75ZM7.75 7.75V9.75H16.25V7.75H7.75ZM13.009 13H11V15H13.009V13Z',
};

export const IconAirpod02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-02-stroke-rounded IconAirpod02StrokeRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAirpod02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-02-duotone-rounded IconAirpod02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAirpod02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-02-twotone-rounded IconAirpod02TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAirpod02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-02-solid-rounded IconAirpod02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirpod02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-02-bulk-rounded IconAirpod02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAirpod02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-02-stroke-sharp IconAirpod02StrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAirpod02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="airpod-02-solid-sharp IconAirpod02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAirpod02: TheIconSelfPack = {
  name: 'Airpod02',
  StrokeRounded: IconAirpod02StrokeRounded,
  DuotoneRounded: IconAirpod02DuotoneRounded,
  TwotoneRounded: IconAirpod02TwotoneRounded,
  SolidRounded: IconAirpod02SolidRounded,
  BulkRounded: IconAirpod02BulkRounded,
  StrokeSharp: IconAirpod02StrokeSharp,
  SolidSharp: IconAirpod02SolidSharp,
};