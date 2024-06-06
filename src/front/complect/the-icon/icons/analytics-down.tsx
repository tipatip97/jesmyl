import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17 18L17 16',
  d2: 'M12 18L12 15',
  d3: 'M7 18L7 13',
  d4: 'M6 7C9.19706 10.2683 13.2338 11.0813 17.1413 9.99185M15.6881 8.47133L17.7617 9.48839C18.0076 9.60901 18.074 9.88829 17.91 10.1122L16.5269 12',
  d5: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d6: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572ZM17 15.25C17.4142 15.25 17.75 15.5858 17.75 16V18C17.75 18.4142 17.4142 18.75 17 18.75C16.5858 18.75 16.25 18.4142 16.25 18V16C16.25 15.5858 16.5858 15.25 17 15.25ZM12.75 15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V15ZM7 12.25C7.41421 12.25 7.75 12.5858 7.75 13L7.75 18C7.75 18.4142 7.41421 18.75 7 18.75C6.58579 18.75 6.25 18.4142 6.25 18L6.25 13C6.25 12.5858 6.58579 12.25 7 12.25ZM6.53614 6.47555C6.24649 6.17944 5.77165 6.17421 5.47555 6.46386C5.17944 6.75351 5.17421 7.22835 5.46386 7.52445C8.60009 10.7306 12.521 11.7203 16.3679 10.948L15.9219 11.5568C15.6771 11.8909 15.7495 12.3602 16.0837 12.605C16.4178 12.8498 16.8871 12.7774 17.1319 12.4432L18.515 10.5554C18.7167 10.2801 18.8008 9.93119 18.7192 9.5881C18.6374 9.24384 18.4033 8.96771 18.092 8.81503L16.0183 7.79797C15.6464 7.61556 15.1971 7.76917 15.0147 8.14106C14.8323 8.51295 14.9859 8.9623 15.3578 9.1447L16.0468 9.48264C12.6736 10.1527 9.28569 9.28637 6.53614 6.47555Z',
  d7: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d8: 'M17 15.25C17.4142 15.25 17.75 15.5858 17.75 16L17.75 18C17.75 18.4142 17.4142 18.75 17 18.75C16.5858 18.75 16.25 18.4142 16.25 18L16.25 16C16.25 15.5858 16.5858 15.25 17 15.25Z',
  d9: 'M12 14.25C12.4142 14.25 12.75 14.5858 12.75 15L12.75 18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18L11.25 15C11.25 14.5858 11.5858 14.25 12 14.25Z',
  d10: 'M7 12.25C7.41421 12.25 7.75 12.5858 7.75 13L7.75 18C7.75 18.4142 7.41421 18.75 7 18.75C6.58579 18.75 6.25 18.4142 6.25 18L6.25 13C6.25 12.5858 6.58579 12.25 7 12.25Z',
  d11: 'M5.47555 6.46386C5.77165 6.17421 6.24649 6.17944 6.53614 6.47555C9.28569 9.28637 12.6736 10.1527 16.0468 9.48264L15.3578 9.1447C14.9859 8.9623 14.8323 8.51295 15.0147 8.14106C15.1971 7.76917 15.6464 7.61556 16.0183 7.79797L18.092 8.81503C18.4033 8.96771 18.6374 9.24384 18.7192 9.5881C18.8008 9.93119 18.7167 10.2801 18.515 10.5554L17.1319 12.4432C16.8871 12.7774 16.4178 12.8498 16.0837 12.605C15.7495 12.3602 15.6771 11.8909 15.9219 11.5568L16.3679 10.948C12.521 11.7203 8.60009 10.7306 5.46386 7.52445C5.17421 7.22835 5.17944 6.75351 5.47555 6.46386Z',
  d12: 'M17 18V16',
  d13: 'M12 18V15',
  d14: 'M7 18V13',
  d15: 'M21 3V21H3V3H21Z',
  d16: 'M6.36133 6.65137C8.75087 9.46011 13.9972 11.4101 17.1921 10.9619M15.2049 8.42471L17.6735 10.8722L15.2049 13.3619',
  d17: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V3ZM17.7502 16V18H16.2502V16H17.7502ZM12.7502 18V15H11.2502V18H12.7502ZM7.75024 13L7.75024 18H6.25024L6.25024 13H7.75024ZM5.81323 7.17174C8.59017 9.94868 11.5652 11.0687 13.8535 11.489C14.5697 11.6205 15.2182 11.6835 15.7722 11.7078L14.6517 12.8283L15.7124 13.8889L18.7176 10.8837L15.7127 7.87885L14.6521 8.93951L15.9253 10.2127C15.4154 10.1941 14.8052 10.1386 14.1245 10.0136C12.0819 9.63854 9.40026 8.63745 6.87389 6.11108L5.81323 7.17174Z',
};

export const IconAnalyticsDownStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-down-stroke-rounded IconAnalyticsDownStrokeRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalyticsDownDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-down-duotone-rounded IconAnalyticsDownDuotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalyticsDownTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-down-twotone-rounded IconAnalyticsDownTwotoneRounded"
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
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalyticsDownSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-down-solid-rounded IconAnalyticsDownSolidRounded"
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

export const IconAnalyticsDownBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-down-bulk-rounded IconAnalyticsDownBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalyticsDownStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-down-stroke-sharp IconAnalyticsDownStrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalyticsDownSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-down-solid-sharp IconAnalyticsDownSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfAnalyticsDown: TheIconSelfPack = {
  name: 'AnalyticsDown',
  StrokeRounded: IconAnalyticsDownStrokeRounded,
  DuotoneRounded: IconAnalyticsDownDuotoneRounded,
  TwotoneRounded: IconAnalyticsDownTwotoneRounded,
  SolidRounded: IconAnalyticsDownSolidRounded,
  BulkRounded: IconAnalyticsDownBulkRounded,
  StrokeSharp: IconAnalyticsDownStrokeSharp,
  SolidSharp: IconAnalyticsDownSolidSharp,
};