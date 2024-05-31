import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M9.22687 9.22687L15 15M9.22687 9.22687C9.73219 8.72156 12.1154 9.21665 12.8351 9.22687M9.22687 9.22687C8.72156 9.73219 9.21665 12.1154 9.22687 12.8351',
  d3: 'M6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059ZM15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.0236 12.4378L10.909 12.5523C10.7037 12.7578 10.4865 12.9751 10.2945 13.126C10.1546 13.2361 9.63816 13.6397 8.99535 13.4213C8.35203 13.2028 8.21219 12.5751 8.17478 12.4053C8.12328 12.1714 8.09524 11.8704 8.06872 11.5857L8.06872 11.5857L8.06416 11.5368C8.02223 11.0883 7.9852 10.5671 8.00593 10.1024C8.01628 9.87025 8.04227 9.6158 8.10425 9.37332C8.16171 9.14853 8.27815 8.81922 8.54869 8.54869C8.81922 8.27815 9.14853 8.16171 9.37332 8.10425C9.6158 8.04226 9.87025 8.01628 10.1024 8.00593C10.5671 7.9852 11.0883 8.02223 11.5368 8.06416L11.5857 8.06872L11.5857 8.06872C11.8704 8.09524 12.1714 8.12328 12.4053 8.17478C12.5751 8.21219 13.2028 8.35203 13.4213 8.99535C13.6397 9.63816 13.2361 10.1546 13.126 10.2945C12.9751 10.4865 12.7577 10.7037 12.5523 10.909L12.4378 11.0236L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071Z',
  d4: 'M11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428Z',
  d5: 'M14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.4378 11.0236L12.5523 10.909C12.7577 10.7037 12.9751 10.4865 13.126 10.2945C13.2361 10.1546 13.6397 9.63816 13.4213 8.99535C13.2028 8.35203 12.5751 8.21219 12.4053 8.17478C12.1714 8.12327 11.8704 8.09524 11.5857 8.06872L11.5368 8.06416C11.0883 8.02223 10.5671 7.9852 10.1024 8.00593C9.87025 8.01628 9.6158 8.04227 9.37332 8.10425C9.14853 8.16171 8.81922 8.27815 8.54869 8.54869C8.27815 8.81922 8.16171 9.14853 8.10425 9.37332C8.04227 9.6158 8.01628 9.87025 8.00593 10.1023C7.9852 10.5671 8.02223 11.0883 8.06416 11.5368L8.06872 11.5857C8.09524 11.8704 8.12328 12.1714 8.17478 12.4053C8.21219 12.5751 8.35203 13.2028 8.99535 13.4213C9.63816 13.6397 10.1546 13.2361 10.2945 13.126C10.4865 12.9751 10.7037 12.7578 10.909 12.5523L11.0236 12.4378L14.2929 15.7071Z',
  d6: 'M15 15L9.23479 9.23479M14 9L9 9V14',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM14 9.75V8.25L8.25 8.25V14H9.75V10.8107L14.4697 15.5303L15.5303 14.4697L10.8107 9.75H14Z',
} as const;

export const IconSquareArrowUpLeftStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-left-stroke-rounded IconSquareArrowUpLeftStrokeRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowUpLeftDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-left-duotone-rounded IconSquareArrowUpLeftDuotoneRounded"
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

export const IconSquareArrowUpLeftTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-left-twotone-rounded IconSquareArrowUpLeftTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowUpLeftSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-left-solid-rounded IconSquareArrowUpLeftSolidRounded"
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

export const IconSquareArrowUpLeftBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-left-bulk-rounded IconSquareArrowUpLeftBulkRounded"
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

export const IconSquareArrowUpLeftStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-left-stroke-sharp IconSquareArrowUpLeftStrokeSharp"
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

export const IconSquareArrowUpLeftSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-left-solid-sharp IconSquareArrowUpLeftSolidSharp"
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

export const iconPackOfSquareArrowUpLeft: TheIconSelfPack = {
  name: 'SquareArrowUpLeft',
  StrokeRounded: IconSquareArrowUpLeftStrokeRounded,
  DuotoneRounded: IconSquareArrowUpLeftDuotoneRounded,
  TwotoneRounded: IconSquareArrowUpLeftTwotoneRounded,
  SolidRounded: IconSquareArrowUpLeftSolidRounded,
  BulkRounded: IconSquareArrowUpLeftBulkRounded,
  StrokeSharp: IconSquareArrowUpLeftStrokeSharp,
  SolidSharp: IconSquareArrowUpLeftSolidSharp,
};