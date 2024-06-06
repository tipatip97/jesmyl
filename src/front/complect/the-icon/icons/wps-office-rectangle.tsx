import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.3274 14.4152L14.1 16L18 8H13.8L12 11.6923L9.9 16L6 8H10.2L10.6875 9',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M3.89124 3.89124C2.5 5.28249 2.5 7.52166 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C7.52166 2.5 5.28249 2.5 3.89124 3.89124ZM10.2 8H6L9.9 16L12 11.6923L14.1 16L18 8H13.8L12 11.6923L10.2 8Z',
  d4: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059ZM6 7.25C5.74141 7.25 5.50106 7.38321 5.364 7.6025C5.22695 7.82179 5.21253 8.09621 5.32584 8.32865L9.22584 16.3287C9.35152 16.5864 9.6132 16.75 9.9 16.75C10.1868 16.75 10.4485 16.5864 10.5742 16.3287L14.2688 8.75H16.8L14.1 14.2885L14.0016 14.0866C13.8201 13.7143 13.3711 13.5596 12.9988 13.7411C12.6264 13.9226 12.4718 14.3716 12.6533 14.7439L13.4258 16.3287C13.5515 16.5864 13.8132 16.75 14.1 16.75C14.3868 16.75 14.6485 16.5864 14.7742 16.3287L18.6742 8.32865C18.7875 8.09621 18.7731 7.82179 18.636 7.6025C18.4989 7.38321 18.2586 7.25 18 7.25L13.8 7.25C13.5132 7.25 13.2515 7.41355 13.1258 7.67135L9.9 14.2885L7.2 8.75H9.73125L10.0133 9.32865C10.1949 9.70098 10.6438 9.85567 11.0162 9.67416C11.3885 9.49265 11.5432 9.04368 11.3617 8.67135L10.8742 7.67135C10.7485 7.41355 10.4868 7.25 10.2 7.25L6 7.25Z',
  d5: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d6: 'M5.364 7.6025C5.50106 7.38321 5.74141 7.25 6 7.25H10.2C10.4868 7.25 10.7485 7.41355 10.8742 7.67135L11.3617 8.67135C11.5432 9.04368 11.3885 9.49265 11.0162 9.67416C10.6438 9.85567 10.1949 9.70098 10.0133 9.32865L9.73125 8.75H7.2L9.9 14.2885L13.1258 7.67135C13.2515 7.41355 13.5132 7.25 13.8 7.25H18C18.2586 7.25 18.4989 7.38321 18.636 7.6025C18.7731 7.82179 18.7875 8.09621 18.6742 8.32865L14.7742 16.3287C14.6485 16.5864 14.3868 16.75 14.1 16.75C13.8132 16.75 13.5515 16.5864 13.4258 16.3287L12.6533 14.7439C12.4718 14.3716 12.6264 13.9226 12.9988 13.7411C13.3711 13.5596 13.8201 13.7143 14.0016 14.0866L14.1 14.2885L16.8 8.75H14.2688L10.5742 16.3287C10.4485 16.5864 10.1868 16.75 9.9 16.75C9.6132 16.75 9.35152 16.5864 9.22584 16.3287L5.32584 8.32865C5.21253 8.09621 5.22695 7.82179 5.364 7.6025Z',
  d7: 'M13.3274 14.4152L14.1 16H14.5L18 8.5V8H13.8L12 11.6923L9.9 16H9.5L6 8.5V8H10.2L10.6875 9',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM10.6688 7.25L5.25 7.25V8.66639L9.02235 16.75H10.3687L14.2688 8.75H17.0557L14.2896 14.6774L14.0016 14.0866L12.6533 14.7439L13.6313 16.75H14.9776L18.75 8.66639V7.25L13.3313 7.25L9.71041 14.6774L6.94431 8.75L9.73125 8.75L10.0133 9.32865L11.3617 8.67135L10.6688 7.25Z',
};

export const IconWpsOfficeRectangleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wps-office-rectangle-stroke-rounded IconWpsOfficeRectangleStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWpsOfficeRectangleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wps-office-rectangle-duotone-rounded IconWpsOfficeRectangleDuotoneRounded"
    >
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWpsOfficeRectangleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wps-office-rectangle-twotone-rounded IconWpsOfficeRectangleTwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconWpsOfficeRectangleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wps-office-rectangle-solid-rounded IconWpsOfficeRectangleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWpsOfficeRectangleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wps-office-rectangle-bulk-rounded IconWpsOfficeRectangleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconWpsOfficeRectangleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wps-office-rectangle-stroke-sharp IconWpsOfficeRectangleStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <rect 
        x="3" 
        y="3" 
        width="18" 
        height="18" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round"></rect>
    </TheIconWrapper>
  );
};

export const IconWpsOfficeRectangleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="wps-office-rectangle-solid-sharp IconWpsOfficeRectangleSolidSharp"
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

export const iconPackOfWpsOfficeRectangle: TheIconSelfPack = {
  name: 'WpsOfficeRectangle',
  StrokeRounded: IconWpsOfficeRectangleStrokeRounded,
  DuotoneRounded: IconWpsOfficeRectangleDuotoneRounded,
  TwotoneRounded: IconWpsOfficeRectangleTwotoneRounded,
  SolidRounded: IconWpsOfficeRectangleSolidRounded,
  BulkRounded: IconWpsOfficeRectangleBulkRounded,
  StrokeSharp: IconWpsOfficeRectangleStrokeSharp,
  SolidSharp: IconWpsOfficeRectangleSolidSharp,
};