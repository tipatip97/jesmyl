import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M9 13.5V9C9 8.05719 9 7.58579 8.70711 7.29289C8.41421 7 7.94281 7 7 7H5C4.05719 7 3.58579 7 3.29289 7.29289C3 7.58579 3 8.05719 3 9V18C3 19.8856 3 20.8284 3.58579 21.4142C4.17157 22 5.11438 22 7 22H9M9 13.5L12.3167 11.8416C13.4174 11.2913 13.9678 11.0161 14.3942 11.199C14.4853 11.2381 14.57 11.2905 14.6457 11.3545C15 11.6541 15 12.2694 15 13.5L18.1056 11.9472C19.4028 11.2986 20.0515 10.9743 20.5257 11.2674C21 11.5605 21 12.2857 21 13.7361V18C21 19.8856 21 20.8284 20.4142 21.4142C19.8284 22 18.8856 22 17 22H9M9 13.5V22',
  d2: 'M3 10H9',
  d3: 'M13 2H8C7.05719 2 6.58579 2 6.29289 2.29289C6 2.58579 6 3.05719 6 4',
  d4: 'M16 2H17',
  d5: 'M11 5L17 5',
  d6: 'M8 7H4C3.44772 7 3 7.44772 3 8V10H9V8C9 7.44772 8.55228 7 8 7Z',
  d7: 'M21 13.736V17.9999C21 19.8855 21 20.8283 20.4142 21.4141C19.8284 21.9999 18.8856 21.9999 17 21.9999H9V13.4999L12.3167 11.8415C13.4174 11.2912 13.9678 11.016 14.3942 11.1989C14.4853 11.238 14.57 11.2904 14.6457 11.3544C15 11.654 15 12.2693 15 13.4999L18.1056 11.9471C19.4028 11.2985 20.0515 10.9742 20.5257 11.2673C21 11.5604 21 12.2856 21 13.736Z',
  d8: 'M3 18V9C3 8.05719 3 7.58579 3.29289 7.29289C3.58579 7 4.05719 7 5 7H7C7.94281 7 8.41421 7 8.70711 7.29289C9 7.58579 9 8.05719 9 9V22H7C5.11438 22 4.17157 22 3.58579 21.4142C3 20.8284 3 19.8856 3 18Z',
  d9: 'M21 13.7361V18C21 19.8856 21 20.8284 20.4142 21.4142C19.8284 22 18.8856 22 17 22H9V13.5L12.3167 11.8417C13.4174 11.2913 13.9678 11.0161 14.3942 11.199C14.4853 11.2381 14.57 11.2905 14.6457 11.3545C15 11.6541 15 12.2694 15 13.5L18.1056 11.9472C19.4028 11.2986 20.0515 10.9743 20.5257 11.2674C21 11.5605 21 12.2857 21 13.7361Z',
  d10: 'M7.95526 1.25L13 1.25001C13.4142 1.25001 13.75 1.58579 13.75 2.00001C13.75 2.41422 13.4142 2.75001 13 2.75001H8.00001C7.5074 2.75001 7.21339 2.7516 7.00267 2.77993C6.84407 2.79434 6.78809 2.93443 6.77993 3.00267C6.7516 3.21339 6.75001 3.5074 6.75001 4.00001C6.75001 4.41422 6.41422 4.75001 6.00001 4.75001C5.58579 4.75001 5.25001 4.41422 5.25001 4.00001L5.25 3.95526C5.24995 3.52244 5.24991 3.12561 5.29331 2.8028C5.3411 2.44732 5.45355 2.07159 5.76257 1.76257C6.07159 1.45355 6.44732 1.3411 6.8028 1.29331C7.12561 1.24991 7.52244 1.24995 7.95526 1.25Z',
  d11: 'M15.25 2C15.25 1.58579 15.5858 1.25 16 1.25H17C17.4142 1.25 17.75 1.58579 17.75 2C17.75 2.41421 17.4142 2.75 17 2.75H16C15.5858 2.75 15.25 2.41421 15.25 2Z',
  d12: 'M10.25 5C10.25 4.58579 10.5858 4.25 11 4.25L17 4.25C17.4142 4.25 17.75 4.58579 17.75 5C17.75 5.41421 17.4142 5.75 17 5.75L11 5.75C10.5858 5.75 10.25 5.41421 10.25 5Z',
  d13: 'M11.25 22.75L17.052 22.75C17.9505 22.75 18.6997 22.75 19.2945 22.6701C19.9223 22.5857 20.4891 22.4 20.9445 21.9445C21.4 21.489 21.5857 20.9222 21.6701 20.2944C21.7501 19.6997 21.75 18.9505 21.75 18.052L21.75 13.679C21.7501 13.0028 21.7501 12.4122 21.6826 11.9576C21.6115 11.4792 21.4388 10.95 20.92 10.6294C20.4013 10.3088 19.8507 10.3909 19.391 10.5413C18.9541 10.6843 18.426 10.9484 17.8212 11.2508L15.7288 12.2971C15.7217 12.1858 15.7122 12.0808 15.6996 11.9826C15.6472 11.574 15.5227 11.1138 15.13 10.7818C14.9976 10.6698 14.8492 10.5781 14.6898 10.5097C14.2172 10.307 13.7499 10.4014 13.361 10.5373C12.9867 10.668 12.5378 10.8925 12.0244 11.1493L11.25 11.5364V22.75Z',
  d14: 'M7.04475 6.25H4.95526C4.52244 6.24995 4.12561 6.24991 3.8028 6.29331C3.44732 6.3411 3.07159 6.45355 2.76257 6.76257C2.45355 7.07159 2.3411 7.44732 2.29331 7.8028C2.24991 8.12561 2.24995 8.52244 2.25 8.95526L2.25 9.25H9.75001L9.75001 8.95526C9.75006 8.52245 9.75011 8.12561 9.70671 7.8028C9.65891 7.44732 9.54647 7.07159 9.23744 6.76257C8.92842 6.45355 8.55269 6.3411 8.19721 6.29331C7.8744 6.24991 7.47757 6.24995 7.04475 6.25Z',
  d15: 'M9.75001 10.75H2.25L2.25001 18.052C2.24998 18.9505 2.24995 19.6997 2.32992 20.2945C2.41432 20.9223 2.59999 21.4891 3.05546 21.9446C3.51093 22.4 4.07773 22.5857 4.70553 22.6701C5.30031 22.7501 6.04953 22.75 6.94801 22.75L9.00001 22.75C9.41422 22.75 9.75001 22.4142 9.75001 22V10.75Z',
  d16: 'M3 10H9.00293',
  d17: 'M13.0054 2H6.00195V4',
  d18: 'M16.0068 2H17.0083',
  d19: 'M11.0039 5H17.0068',
  d20: 'M8.97709 13.5157L15.0558 11.0511V13.5399L20.9888 11.0511V21.9872C20.9888 21.9927 20.9843 21.9972 20.9788 21.9972H8.97709M8.97709 13.5157V21.9972M8.97709 13.5157V6.98852C8.97709 6.98299 8.97261 6.97852 8.96708 6.97852H3.00219C2.99667 6.97852 2.99219 6.98299 2.99219 6.98852V21.9872C2.99219 21.9927 2.99667 21.9972 3.00219 21.9972H8.97709',
  d21: 'M5.25 1.25H13.75V2.75H6.75V4.75H5.25V1.25Z',
  d22: 'M15.25 1.25H17.75V2.75H15.25V1.25Z',
  d23: 'M10.25 4.25L17.75 4.25L17.75 5.75L10.25 5.75L10.25 4.25Z',
  d24: 'M11.25 22.75H21C21.4142 22.75 21.75 22.4142 21.75 22V9.875L15.75 12.375V9.875L11.25 11.75V22.75Z',
  d25: 'M9 6.25H3C2.58579 6.25 2.25 6.58579 2.25 7V9.25H9.75V7C9.75 6.80109 9.67098 6.61032 9.53033 6.46967C9.38968 6.32902 9.19891 6.25 9 6.25Z',
  d26: 'M9.75 10.75H2.25V22C2.25 22.4142 2.58579 22.75 3 22.75H9.75V10.75Z',
} as const;

export const IconFactoryStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-stroke-rounded IconFactoryStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconFactoryDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-duotone-rounded IconFactoryDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
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
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconFactoryTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-twotone-rounded IconFactoryTwotoneRounded"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
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
    </TheIconWrapper>
  );
};

export const IconFactorySolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-solid-rounded IconFactorySolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFactoryBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-bulk-rounded IconFactoryBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFactoryStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-stroke-sharp IconFactoryStrokeSharp"
    >
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d18} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d19} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
      />
      <path 
        d={d.d20} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFactorySolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="factory-solid-sharp IconFactorySolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d22} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d23} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d24} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d25} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d26} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFactory: TheIconSelfPack = {
  name: 'Factory',
  StrokeRounded: IconFactoryStrokeRounded,
  DuotoneRounded: IconFactoryDuotoneRounded,
  TwotoneRounded: IconFactoryTwotoneRounded,
  SolidRounded: IconFactorySolidRounded,
  BulkRounded: IconFactoryBulkRounded,
  StrokeSharp: IconFactoryStrokeSharp,
  SolidSharp: IconFactorySolidSharp,
};