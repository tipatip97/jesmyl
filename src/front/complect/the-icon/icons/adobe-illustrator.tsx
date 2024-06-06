import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M13 16L12.1339 13.2M7 16L7.86614 13.2M7.86614 13.2L8.59031 10.8589C9.17989 8.95298 9.47468 8 10 8C10.5253 8 10.8201 8.95298 11.4097 10.8589L12.1339 13.2M7.86614 13.2H12.1339',
  d3: 'M16 16V11',
  d4: 'M16 8.5V8',
  d5: 'M13 16L12.1339 13.2M12.1339 13.2L11.4097 10.8589C10.8201 8.95298 10.5253 8 10 8C9.47468 8 9.17989 8.95298 8.59031 10.8589L7.86614 13.2M12.1339 13.2H7.86614M7 16L7.86614 13.2M16 16V11M16 8.5V8',
  d6: 'M12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75ZM9.30701 11.0806C9.6063 10.113 9.81137 9.45472 10.0002 9.02969C10.189 9.45472 10.3941 10.113 10.6934 11.0806L11.117 12.45L8.8834 12.45L9.30701 11.0806ZM12.2837 16.2216L11.581 13.95L8.4194 13.95L7.7167 16.2216C7.59429 16.6174 7.17427 16.8389 6.77856 16.7165C6.38285 16.5941 6.16129 16.1741 6.2837 15.7784L7.87401 10.6373L7.89049 10.584C8.17127 9.67625 8.40309 8.92673 8.63478 8.40859C8.75277 8.14472 8.89738 7.87733 9.09188 7.66808C9.30261 7.44135 9.606 7.25 10.0002 7.25C10.3944 7.25 10.6978 7.44136 10.9085 7.66808C11.103 7.87734 11.2476 8.14472 11.3656 8.40859C11.5973 8.92673 11.8291 9.67624 12.1099 10.584L12.1099 10.584L13.7167 15.7784C13.8391 16.1741 13.6176 16.5941 13.2218 16.7165C12.8261 16.8389 12.4061 16.6174 12.2837 16.2216ZM16.7502 8C16.7502 7.58579 16.4144 7.25 16.0002 7.25C15.586 7.25 15.2502 7.58579 15.2502 8V8.5C15.2502 8.91421 15.586 9.25 16.0002 9.25C16.4144 9.25 16.7502 8.91421 16.7502 8.5V8ZM16.7502 11C16.7502 10.5858 16.4144 10.25 16.0002 10.25C15.586 10.25 15.2502 10.5858 15.2502 11L15.2502 16C15.2502 16.4142 15.586 16.75 16.0002 16.75C16.4144 16.75 16.7502 16.4142 16.7502 16V11Z',
  d7: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d8: 'M10.0002 9.02969C9.81137 9.45472 9.6063 10.113 9.30701 11.0806L8.8834 12.45H11.117L10.6934 11.0806C10.3941 10.113 10.189 9.45472 10.0002 9.02969ZM11.581 13.95L12.2837 16.2216C12.4061 16.6174 12.8261 16.8389 13.2218 16.7165C13.6176 16.5941 13.8391 16.1741 13.7167 15.7784L12.1099 10.584C11.8291 9.67625 11.5973 8.92674 11.3656 8.40859C11.2476 8.14472 11.103 7.87734 10.9085 7.66808C10.6978 7.44136 10.3944 7.25 10.0002 7.25C9.606 7.25 9.30261 7.44136 9.09188 7.66808C8.89738 7.87733 8.75277 8.14472 8.63478 8.40859C8.40309 8.92674 8.17127 9.67625 7.89049 10.584C7.88502 10.6017 7.87952 10.6195 7.87401 10.6373L6.2837 15.7784C6.16129 16.1741 6.38285 16.5941 6.77856 16.7165C7.17427 16.8389 7.59429 16.6174 7.7167 16.2216L8.4194 13.95H11.581ZM16.0002 7.25C16.4144 7.25 16.7502 7.58579 16.7502 8V8.5C16.7502 8.91421 16.4144 9.25 16.0002 9.25C15.586 9.25 15.2502 8.91421 15.2502 8.5V8C15.2502 7.58579 15.586 7.25 16.0002 7.25ZM16.0002 10.25C16.4144 10.25 16.7502 10.5858 16.7502 11V16C16.7502 16.4142 16.4144 16.75 16.0002 16.75C15.586 16.75 15.2502 16.4142 15.2502 16V11C15.2502 10.5858 15.586 10.25 16.0002 10.25Z',
  d9: 'M21 3V21H3V3H21Z',
  d10: 'M6.5 16.25L9.5 8.25H10.5L13.5 16.25M8 12.75H12M16.5 16.25V10.25M16.5 9.25V7.75',
  d11: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM14.2014 15.9867L11.0189 7.5L8.97937 7.5L5.79688 15.9867L7.20137 16.5133L8.33137 13.5L11.6669 13.5L12.7969 16.5133L14.2014 15.9867ZM11.1044 12L8.89387 12L9.99912 9.05267L11.1044 12ZM17.2491 9.25V7.75H15.7491V9.25H17.2491ZM17.2491 16.25V10.25H15.7491L15.7491 16.25H17.2491Z',
};

export const IconAdobeIllustratorStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-illustrator-stroke-rounded IconAdobeIllustratorStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAdobeIllustratorDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-illustrator-duotone-rounded IconAdobeIllustratorDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconAdobeIllustratorTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-illustrator-twotone-rounded IconAdobeIllustratorTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAdobeIllustratorSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-illustrator-solid-rounded IconAdobeIllustratorSolidRounded"
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

export const IconAdobeIllustratorBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-illustrator-bulk-rounded IconAdobeIllustratorBulkRounded"
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
    </TheIconWrapper>
  );
};

export const IconAdobeIllustratorStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-illustrator-stroke-sharp IconAdobeIllustratorStrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconAdobeIllustratorSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="adobe-illustrator-solid-sharp IconAdobeIllustratorSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAdobeIllustrator: TheIconSelfPack = {
  name: 'AdobeIllustrator',
  StrokeRounded: IconAdobeIllustratorStrokeRounded,
  DuotoneRounded: IconAdobeIllustratorDuotoneRounded,
  TwotoneRounded: IconAdobeIllustratorTwotoneRounded,
  SolidRounded: IconAdobeIllustratorSolidRounded,
  BulkRounded: IconAdobeIllustratorBulkRounded,
  StrokeSharp: IconAdobeIllustratorStrokeSharp,
  SolidSharp: IconAdobeIllustratorSolidSharp,
};