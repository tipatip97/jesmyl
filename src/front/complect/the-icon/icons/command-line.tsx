import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M2.5 9H21.5',
  d3: 'M6.99981 6H7.00879',
  d4: 'M10.9998 6H11.0088',
  d5: 'M16 13L17.2265 14.0572C17.7422 14.5016 18 14.7239 18 15C18 15.2761 17.7422 15.4984 17.2265 15.9428L16 17',
  d6: 'M8 13L6.77346 14.0572C6.25782 14.5016 6 14.7239 6 15C6 15.2761 6.25782 15.4984 6.77346 15.9428L8 17',
  d7: 'M13 12L11 18',
  d8: 'M3.89124 20.1088C5.28249 21.5 7.52166 21.5 12 21.5C16.4783 21.5 18.7175 21.5 20.1088 20.1088C21.5 18.7175 21.5 16.4783 21.5 12C21.5 10.8633 21.5 9.87091 21.4773 9H2.52275C2.5 9.87091 2.5 10.8633 2.5 12C2.5 16.4783 2.5 18.7175 3.89124 20.1088Z',
  d9: 'M12.0579 1.75H11.9435H11.9435C9.75282 1.74999 8.03214 1.74998 6.68872 1.93059C5.31207 2.11568 4.21981 2.50272 3.36161 3.36091C2.50342 4.21911 2.11638 5.31137 1.93129 6.68802C1.89188 6.98118 1.86107 7.29229 1.83698 7.62234C1.81576 7.91313 1.80515 8.05853 1.89415 8.15427C1.98315 8.25 2.13164 8.25 2.42863 8.25H21.5728C21.8698 8.25 22.0183 8.25 22.1073 8.15427C22.1963 8.05853 22.1856 7.91313 22.1644 7.62234C22.1403 7.29229 22.1095 6.98118 22.0701 6.68802C21.885 5.31137 21.498 4.21911 20.6398 3.36091C19.7816 2.50272 18.6893 2.11568 17.3127 1.93059C15.9693 1.74998 14.2486 1.74999 12.0579 1.75H12.0579ZM6 5C6 4.44772 6.44571 4 6.99553 4H7.00447C7.55429 4 8 4.44772 8 5C8 5.55228 7.55429 6 7.00447 6H6.99553C6.44571 6 6 5.55228 6 5ZM10.9955 4C10.4457 4 10 4.44772 10 5C10 5.55228 10.4457 6 10.9955 6H11.0045C11.5543 6 12 5.55228 12 5C12 4.44772 11.5543 4 11.0045 4H10.9955Z',
  d10: 'M22.1566 9.83722C22.2444 9.92444 22.2452 10.0638 22.2469 10.3424C22.25 10.8458 22.25 11.3787 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9426C1.75 11.3786 1.74999 10.8457 1.75307 10.3424C1.75478 10.0638 1.75563 9.92444 1.84339 9.83722C1.93114 9.75 2.07108 9.75 2.35096 9.75H21.649C21.9289 9.75 22.0689 9.75 22.1566 9.83722ZM15.5103 14.5681C15.1966 14.2977 15.1615 13.8241 15.4319 13.5104C15.7023 13.1966 16.1759 13.1615 16.4897 13.4319L17.7162 14.4891L17.7476 14.5161C17.978 14.7147 18.205 14.9103 18.3682 15.0946C18.5487 15.2985 18.75 15.5954 18.75 16C18.75 16.4046 18.5487 16.7015 18.3682 16.9054C18.205 17.0898 17.978 17.2853 17.7476 17.4839L17.7476 17.4839L17.7162 17.5109L16.4897 18.5681C16.1759 18.8385 15.7023 18.8034 15.4319 18.4897C15.1615 18.1759 15.1966 17.7023 15.5103 17.4319L16.7369 16.3747C16.9366 16.2026 17.0685 16.0878 17.1591 16C17.0685 15.9123 16.9366 15.7974 16.7369 15.6253L15.5103 14.5681ZM8.5681 13.5104C8.83853 13.8241 8.80341 14.2977 8.48966 14.5681L7.26312 15.6253C7.06342 15.7974 6.93152 15.9123 6.84087 16C6.93152 16.0878 7.06342 16.2026 7.26312 16.3747L8.48966 17.4319C8.80341 17.7023 8.83853 18.1759 8.5681 18.4897C8.29767 18.8034 7.82409 18.8385 7.51034 18.5681L6.2838 17.5109L6.25243 17.4839C6.02197 17.2853 5.79495 17.0898 5.63178 16.9054C5.4513 16.7015 5.25 16.4046 5.25 16C5.25 15.5954 5.4513 15.2985 5.63178 15.0946C5.79495 14.9103 6.02197 14.7147 6.25244 14.5161L6.2838 14.4891L7.51034 13.4319C7.82409 13.1615 8.29767 13.1966 8.5681 13.5104ZM13.7117 13.2374C13.8427 12.8444 13.6303 12.4197 13.2374 12.2887C12.8444 12.1577 12.4197 12.3701 12.2887 12.763L10.2887 18.763C10.1577 19.156 10.3701 19.5807 10.763 19.7117C11.156 19.8427 11.5807 19.6303 11.7117 19.2374L13.7117 13.2374Z',
  d11: 'M22.2469 10.3424C22.2452 10.0638 22.2444 9.92444 22.1566 9.83722C22.0689 9.75 21.9289 9.75 21.649 9.75H2.35096C2.07108 9.75 1.93114 9.75 1.84339 9.83722C1.75563 9.92444 1.75478 10.0638 1.75307 10.3424C1.74999 10.8458 1.75 11.3787 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 11.3787 22.25 10.8458 22.2469 10.3424Z',
  d12: 'M15.4319 13.5104C15.1615 13.8241 15.1966 14.2977 15.5103 14.5681L16.7369 15.6253C16.9366 15.7974 17.0685 15.9123 17.1591 16C17.0685 16.0878 16.9366 16.2026 16.7369 16.3747L15.5103 17.4319C15.1966 17.7023 15.1615 18.1759 15.4319 18.4897C15.7023 18.8034 16.1759 18.8385 16.4897 18.5681L17.7162 17.5109C17.7267 17.5019 17.7371 17.4929 17.7476 17.4839C17.978 17.2853 18.205 17.0898 18.3682 16.9054C18.5487 16.7015 18.75 16.4046 18.75 16C18.75 15.5954 18.5487 15.2985 18.3682 15.0946C18.205 14.9103 17.978 14.7147 17.7476 14.5161C17.7371 14.5071 17.7267 14.4981 17.7162 14.4891L16.4897 13.4319C16.1759 13.1615 15.7023 13.1966 15.4319 13.5104Z',
  d13: 'M8.5681 13.5104C8.83853 13.8241 8.80341 14.2977 8.48966 14.5681L7.26312 15.6253C7.06342 15.7974 6.93152 15.9123 6.84087 16C6.93152 16.0878 7.06342 16.2026 7.26312 16.3747L8.48966 17.4319C8.80341 17.7023 8.83853 18.1759 8.5681 18.4897C8.29767 18.8034 7.82409 18.8385 7.51034 18.5681L6.2838 17.5109C6.27334 17.5019 6.26288 17.4929 6.25243 17.4839C6.02197 17.2853 5.79495 17.0898 5.63178 16.9054C5.4513 16.7015 5.25 16.4046 5.25 16C5.25 15.5954 5.4513 15.2985 5.63178 15.0946C5.79495 14.9103 6.02197 14.7147 6.25243 14.5161C6.26288 14.5071 6.27334 14.4981 6.2838 14.4891L7.51034 13.4319C7.82409 13.1615 8.29767 13.1966 8.5681 13.5104Z',
  d14: 'M13.2374 12.2887C13.6303 12.4197 13.8427 12.8444 13.7117 13.2374L11.7117 19.2374C11.5807 19.6303 11.156 19.8427 10.763 19.7117C10.3701 19.5807 10.1577 19.156 10.2887 18.763L12.2887 12.763C12.4197 12.3701 12.8444 12.1577 13.2374 12.2887Z',
  d15: 'M15 13L17 15L15 17',
  d16: 'M9 13L7 15L9 17',
  d17: 'M21 21V3H3V21L21 21Z',
  d18: 'M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V8.25H2.25V3ZM8 4.25H6V6.25H8V4.25ZM10 4.25H12V6.25H10V4.25Z',
  d19: 'M21.75 9.75V21C21.75 21.1989 21.671 21.3897 21.5303 21.5303C21.3897 21.671 21.1989 21.75 21 21.75L3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V9.75H21.75ZM14.4688 14.2804L15.9384 15.7501L14.4688 17.2197L15.5294 18.2804L18.0597 15.7501L15.5294 13.2197L14.4688 14.2804ZM8.46978 13.2197L9.53044 14.2804L8.06077 15.7501L9.53044 17.2197L8.46978 18.2804L5.93945 15.7501L8.46978 13.2197ZM12.2891 12.5127L10.2891 18.5127L11.7121 18.987L13.7121 12.987L12.2891 12.5127Z',
};

export const IconCommandLineStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="command-line-stroke-rounded IconCommandLineStrokeRounded"
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCommandLineDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="command-line-duotone-rounded IconCommandLineDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCommandLineTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="command-line-twotone-rounded IconCommandLineTwotoneRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCommandLineSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="command-line-solid-rounded IconCommandLineSolidRounded"
    >
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
    </TheIconWrapper>
  );
};

export const IconCommandLineBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="command-line-bulk-rounded IconCommandLineBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCommandLineStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="command-line-stroke-sharp IconCommandLineStrokeSharp"
    >
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
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

export const IconCommandLineSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="command-line-solid-sharp IconCommandLineSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCommandLine: TheIconSelfPack = {
  name: 'CommandLine',
  StrokeRounded: IconCommandLineStrokeRounded,
  DuotoneRounded: IconCommandLineDuotoneRounded,
  TwotoneRounded: IconCommandLineTwotoneRounded,
  SolidRounded: IconCommandLineSolidRounded,
  BulkRounded: IconCommandLineBulkRounded,
  StrokeSharp: IconCommandLineStrokeSharp,
  SolidSharp: IconCommandLineSolidSharp,
};