import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M14.7731 9.22687L9 15M14.7731 9.22687C14.2678 8.72156 11.8846 9.21665 11.1649 9.22687M14.7731 9.22687C15.2784 9.73219 14.7834 12.1154 14.7731 12.8351',
  d2: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d3: 'M17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50272 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50272 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V12.0572V11.9428V11.9428C22.25 9.7521 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059ZM8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12.9764 12.4378L13.091 12.5523C13.2963 12.7578 13.5135 12.9751 13.7055 13.126C13.8454 13.2361 14.3618 13.6397 15.0046 13.4213C15.648 13.2028 15.7878 12.5751 15.8252 12.4053C15.8767 12.1714 15.9048 11.8704 15.9313 11.5857L15.9313 11.5857L15.9358 11.5368C15.9778 11.0883 16.0148 10.5671 15.9941 10.1024C15.9837 9.87025 15.9577 9.6158 15.8958 9.37332C15.8383 9.14853 15.7218 8.81922 15.4513 8.54869C15.1808 8.27815 14.8515 8.16171 14.6267 8.10425C14.3842 8.04226 14.1298 8.01628 13.8976 8.00593C13.4329 7.9852 12.9117 8.02223 12.4632 8.06416L12.4143 8.06872L12.4143 8.06872C12.1296 8.09524 11.8286 8.12328 11.5947 8.17478C11.4249 8.21219 10.7972 8.35203 10.5787 8.99535C10.3603 9.63816 10.7639 10.1546 10.874 10.2945C11.0249 10.4865 11.2423 10.7037 11.4477 10.909L11.5622 11.0236L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071Z',
  d4: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d5: 'M9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L11.5622 11.0236L11.4477 10.909C11.2423 10.7037 11.0249 10.4865 10.874 10.2945C10.7639 10.1546 10.3603 9.63816 10.5787 8.99535C10.7972 8.35203 11.4249 8.21219 11.5947 8.17478C11.8286 8.12327 12.1296 8.09524 12.4143 8.06872L12.4632 8.06416C12.9117 8.02223 13.4329 7.9852 13.8976 8.00593C14.1298 8.01628 14.3842 8.04227 14.6267 8.10425C14.8515 8.16171 15.1808 8.27815 15.4513 8.54869C15.7218 8.81922 15.8383 9.14853 15.8958 9.37332C15.9577 9.6158 15.9837 9.87025 15.9941 10.1023C16.0148 10.5671 15.9778 11.0883 15.9358 11.5368L15.9313 11.5857C15.9048 11.8704 15.8767 12.1714 15.8252 12.4053C15.7878 12.5751 15.648 13.2028 15.0046 13.4213C14.3618 13.6397 13.8454 13.2361 13.7055 13.126C13.5135 12.9751 13.2963 12.7578 13.091 12.5523L12.9764 12.4378L9.70711 15.7071Z',
  d6: 'M9 15L14.7526 9.24742M10 9H15V14',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM9.99908 9.75H13.1884L8.46875 14.4697L9.52941 15.5303L14.2491 10.8107V14H15.7491V8.25H9.99908V9.75Z',
} as const;

export const IconSquareArrowUpRightStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-right-stroke-rounded IconSquareArrowUpRightStrokeRounded"
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

export const IconSquareArrowUpRightDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-right-duotone-rounded IconSquareArrowUpRightDuotoneRounded"
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

export const IconSquareArrowUpRightTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-right-twotone-rounded IconSquareArrowUpRightTwotoneRounded"
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

export const IconSquareArrowUpRightSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-right-solid-rounded IconSquareArrowUpRightSolidRounded"
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

export const IconSquareArrowUpRightBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-right-bulk-rounded IconSquareArrowUpRightBulkRounded"
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

export const IconSquareArrowUpRightStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-right-stroke-sharp IconSquareArrowUpRightStrokeSharp"
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

export const IconSquareArrowUpRightSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-right-solid-sharp IconSquareArrowUpRightSolidSharp"
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

export const iconPackOfSquareArrowUpRight: TheIconSelfPack = {
  name: 'SquareArrowUpRight',
  StrokeRounded: IconSquareArrowUpRightStrokeRounded,
  DuotoneRounded: IconSquareArrowUpRightDuotoneRounded,
  TwotoneRounded: IconSquareArrowUpRightTwotoneRounded,
  SolidRounded: IconSquareArrowUpRightSolidRounded,
  BulkRounded: IconSquareArrowUpRightBulkRounded,
  StrokeSharp: IconSquareArrowUpRightStrokeSharp,
  SolidSharp: IconSquareArrowUpRightSolidSharp,
};