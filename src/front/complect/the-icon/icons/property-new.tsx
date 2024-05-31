import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z',
  d2: 'M2.5 8H21.5',
  d3: 'M11 17H17M7 17H8',
  d4: 'M11 13H17M7 13H8',
  d5: 'M3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 10.1509 21.5 8.68354 21.4021 7.5H2.59793C2.5 8.68354 2.5 10.1509 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088Z',
  d6: 'M11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.0977 6.89867 22.1119 7.00399 22.0683 7.08807C22.0466 7.13001 22.0128 7.16865 21.9742 7.19577C21.8966 7.25012 21.7868 7.25012 21.5672 7.25012H2.43285C2.21319 7.25012 2.10337 7.25012 2.02584 7.19577C1.98716 7.16865 1.95337 7.13001 1.93165 7.08807C1.88811 7.00399 1.90227 6.89867 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75213 1.74999 11.9428 1.75ZM22.1396 8.83596C22.2271 8.9218 22.2297 9.05822 22.2349 9.33105C22.25 10.1169 22.25 10.9848 22.25 11.9425V11.9426V11.9427V11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428V11.9428C1.74999 10.9849 1.74999 10.1169 1.76508 9.33105C1.77032 9.05822 1.77294 8.9218 1.86045 8.83596C1.94795 8.75012 2.0856 8.75012 2.3609 8.75012H21.6391C21.9144 8.75012 22.052 8.75012 22.1396 8.83596ZM7 12.2501C6.58579 12.2501 6.25 12.5859 6.25 13.0001C6.25 13.4143 6.58579 13.7501 7 13.7501H8C8.41421 13.7501 8.75 13.4143 8.75 13.0001C8.75 12.5859 8.41421 12.2501 8 12.2501H7ZM11 12.2501C10.5858 12.2501 10.25 12.5859 10.25 13.0001C10.25 13.4143 10.5858 13.7501 11 13.7501H17C17.4142 13.7501 17.75 13.4143 17.75 13.0001C17.75 12.5859 17.4142 12.2501 17 12.2501H11ZM7 16.2501C6.58579 16.2501 6.25 16.5859 6.25 17.0001C6.25 17.4143 6.58579 17.7501 7 17.7501H8C8.41421 17.7501 8.75 17.4143 8.75 17.0001C8.75 16.5859 8.41421 16.2501 8 16.2501H7ZM11 16.2501C10.5858 16.2501 10.25 16.5859 10.25 17.0001C10.25 17.4143 10.5858 17.7501 11 17.7501H17C17.4142 17.7501 17.75 17.4143 17.75 17.0001C17.75 16.5859 17.4142 16.2501 17 16.2501H11Z',
  d7: 'M22.2349 9.33093C22.2297 9.0581 22.2271 8.92168 22.1396 8.83584C22.052 8.75 21.9144 8.75 21.6391 8.75H2.3609C2.0856 8.75 1.94795 8.75 1.86045 8.83584C1.77294 8.92168 1.77032 9.0581 1.76508 9.33093C1.74999 10.1168 1.74999 10.9848 1.75 11.9427V12.0571C1.74999 14.2478 1.74998 15.9684 1.93059 17.3119C2.11568 18.6885 2.50272 19.7808 3.36091 20.639C4.21911 21.4972 5.31137 21.8842 6.68802 22.0693C8.03144 22.2499 9.7521 22.2499 11.9428 22.2499H12.0572C14.2479 22.2499 15.9686 22.2499 17.312 22.0693C18.6886 21.8842 19.7809 21.4972 20.6391 20.639C21.4973 19.7808 21.8843 18.6885 22.0694 17.3119C22.25 15.9684 22.25 14.2478 22.25 12.0571V11.9427C22.25 10.9849 22.25 10.1168 22.2349 9.33093Z',
  d8: 'M12.0575 1.75H11.9432C9.75247 1.74999 8.03178 1.74998 6.68836 1.93059C5.31171 2.11568 4.21945 2.50272 3.36125 3.36091C2.50306 4.21911 2.11602 5.31137 1.93093 6.68802C1.90261 6.89867 1.88845 7.00399 1.93199 7.08807C1.95371 7.13001 1.9875 7.16865 2.02618 7.19577C2.10371 7.25012 2.21354 7.25012 2.43319 7.25012H21.5675C21.7871 7.25012 21.897 7.25012 21.9745 7.19577C22.0132 7.16865 22.047 7.13001 22.0687 7.08807C22.1122 7.00399 22.0981 6.89867 22.0697 6.68802C21.8847 5.31137 21.4976 4.21911 20.6394 3.36091C19.7812 2.50272 18.689 2.11568 17.3123 1.93059C15.9689 1.74998 14.2482 1.74999 12.0575 1.75Z',
  d9: 'M6.25 13C6.25 12.5858 6.58579 12.25 7 12.25H8C8.41421 12.25 8.75 12.5858 8.75 13C8.75 13.4142 8.41421 13.75 8 13.75H7C6.58579 13.75 6.25 13.4142 6.25 13ZM10.25 13C10.25 12.5858 10.5858 12.25 11 12.25H17C17.4142 12.25 17.75 12.5858 17.75 13C17.75 13.4142 17.4142 13.75 17 13.75H11C10.5858 13.75 10.25 13.4142 10.25 13ZM6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17ZM10.25 17C10.25 16.5858 10.5858 16.25 11 16.25H17C17.4142 16.25 17.75 16.5858 17.75 17C17.75 17.4142 17.4142 17.75 17 17.75H11C10.5858 17.75 10.25 17.4142 10.25 17Z',
  d10: 'M3 3V21L21 21V3H3Z',
  d11: 'M3 8H21',
  d12: 'M11 16.5H17M7 16.5H9M11 12.5H17M7 12.5H9',
  d13: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V7.25H2.25V3Z',
  d14: 'M2.25 8.75H21.75V21C21.75 21.1989 21.671 21.3897 21.5303 21.5303C21.3897 21.671 21.1989 21.75 21 21.75L3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V8.75ZM7 14H9V12.5H7V14ZM11 14H17V12.5H11V14ZM7 18H9V16.5H7V18ZM11 18H17V16.5H11V18Z',
} as const;

export const IconPropertyNewStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-new-stroke-rounded IconPropertyNewStrokeRounded"
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

export const IconPropertyNewDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-new-duotone-rounded IconPropertyNewDuotoneRounded"
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
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconPropertyNewTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-new-twotone-rounded IconPropertyNewTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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

export const IconPropertyNewSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-new-solid-rounded IconPropertyNewSolidRounded"
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

export const IconPropertyNewBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-new-bulk-rounded IconPropertyNewBulkRounded"
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyNewStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-new-stroke-sharp IconPropertyNewStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconPropertyNewSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="property-new-solid-sharp IconPropertyNewSolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfPropertyNew: TheIconSelfPack = {
  name: 'PropertyNew',
  StrokeRounded: IconPropertyNewStrokeRounded,
  DuotoneRounded: IconPropertyNewDuotoneRounded,
  TwotoneRounded: IconPropertyNewTwotoneRounded,
  SolidRounded: IconPropertyNewSolidRounded,
  BulkRounded: IconPropertyNewBulkRounded,
  StrokeSharp: IconPropertyNewStrokeSharp,
  SolidSharp: IconPropertyNewSolidSharp,
};