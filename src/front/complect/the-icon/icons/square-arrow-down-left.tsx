import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9.22687 14.7731L15 9M9.22687 14.7731C9.73219 15.2784 12.1154 14.7834 12.8351 14.7731M9.22687 14.7731C8.72156 14.2678 9.21665 11.8846 9.22687 11.1649',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H12.0572H11.9428H11.9428C9.7521 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694ZM15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L11.0236 11.5622L10.909 11.4477C10.7037 11.2422 10.4865 11.0249 10.2945 10.874C10.1546 10.7639 9.63816 10.3603 8.99535 10.5787C8.35203 10.7972 8.21219 11.4249 8.17478 11.5947C8.12328 11.8286 8.09524 12.1296 8.06872 12.4143L8.06872 12.4143L8.06416 12.4632C8.02223 12.9117 7.9852 13.4329 8.00593 13.8976C8.01628 14.1298 8.04227 14.3842 8.10425 14.6267C8.16171 14.8515 8.27815 15.1808 8.54869 15.4513C8.81922 15.7218 9.14853 15.8383 9.37332 15.8958C9.6158 15.9577 9.87025 15.9837 10.1024 15.9941C10.5671 16.0148 11.0883 15.9778 11.5368 15.9358L11.5857 15.9313L11.5857 15.9313C11.8704 15.9048 12.1714 15.8767 12.4053 15.8252C12.5751 15.7878 13.2028 15.648 13.4213 15.0046C13.6397 14.3618 13.2361 13.8454 13.126 13.7055C12.9751 13.5135 12.7577 13.2963 12.5523 13.091L12.4378 12.9764L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289Z',
  d4: 'M11.9428 22.25C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.7521 1.74999 11.9428 1.75H11.9428H12.0572H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428Z',
  d5: 'M14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L12.4378 12.9764L12.5523 13.091C12.7577 13.2963 12.9751 13.5135 13.126 13.7055C13.2361 13.8454 13.6397 14.3618 13.4213 15.0046C13.2028 15.648 12.5751 15.7878 12.4053 15.8252C12.1714 15.8767 11.8704 15.9048 11.5857 15.9313L11.5368 15.9358C11.0883 15.9778 10.5671 16.0148 10.1024 15.9941C9.87025 15.9837 9.6158 15.9577 9.37332 15.8958C9.14853 15.8383 8.81922 15.7218 8.54869 15.4513C8.27815 15.1808 8.16171 14.8515 8.10425 14.6267C8.04227 14.3842 8.01628 14.1298 8.00593 13.8977C7.9852 13.4329 8.02223 12.9117 8.06416 12.4632L8.06872 12.4143C8.09524 12.1296 8.12328 11.8286 8.17478 11.5947C8.21219 11.4249 8.35203 10.7972 8.99535 10.5787C9.63816 10.3603 10.1546 10.7639 10.2945 10.874C10.4865 11.0249 10.7037 11.2422 10.909 11.4477L11.0236 11.5622L14.2929 8.29289Z',
  d6: 'M15 9L9.27224 14.7278M14 15H9V10',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM15.5303 9.53026L10.8107 14.2499L14 14.2499V15.7499L8.25 15.7499L8.25 9.99993H9.75L9.75 13.1893L14.4697 8.4696L15.5303 9.53026Z',
} as const;

export const IconSquareArrowDownLeftStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-left-stroke-rounded IconSquareArrowDownLeftStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDownLeftDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-left-duotone-rounded IconSquareArrowDownLeftDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDownLeftTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-left-twotone-rounded IconSquareArrowDownLeftTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowDownLeftSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-left-solid-rounded IconSquareArrowDownLeftSolidRounded"
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

export const IconSquareArrowDownLeftBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-left-bulk-rounded IconSquareArrowDownLeftBulkRounded"
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

export const IconSquareArrowDownLeftStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-left-stroke-sharp IconSquareArrowDownLeftStrokeSharp"
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

export const IconSquareArrowDownLeftSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-left-solid-sharp IconSquareArrowDownLeftSolidSharp"
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

export const iconPackOfSquareArrowDownLeft: TheIconSelfPack = {
  name: 'SquareArrowDownLeft',
  StrokeRounded: IconSquareArrowDownLeftStrokeRounded,
  DuotoneRounded: IconSquareArrowDownLeftDuotoneRounded,
  TwotoneRounded: IconSquareArrowDownLeftTwotoneRounded,
  SolidRounded: IconSquareArrowDownLeftSolidRounded,
  BulkRounded: IconSquareArrowDownLeftBulkRounded,
  StrokeSharp: IconSquareArrowDownLeftStrokeSharp,
  SolidSharp: IconSquareArrowDownLeftSolidSharp,
};