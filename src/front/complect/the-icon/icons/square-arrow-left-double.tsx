import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M10.8333 8L8.7891 10.1144C7.9297 11.0033 7.5 11.4477 7.5 12C7.5 12.5523 7.9297 12.9967 8.7891 13.8856L10.8333 16M16.5 8L14.4558 10.1144C13.5964 11.0033 13.1667 11.4477 13.1667 12C13.1667 12.5523 13.5964 12.9967 14.4558 13.8856L16.5 16',
  d3: 'M6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V12.0572V11.9428V11.9428C1.74999 9.7521 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059ZM10.5148 8.19192C10.8481 7.90483 11.3494 7.94435 11.6344 8.28019C11.9194 8.61601 11.88 9.12108 11.5467 9.40818L11.1363 9.77434C10.8862 10.0026 10.5551 10.3133 10.2261 10.6473C9.89379 10.9847 9.57948 11.3298 9.35359 11.6288C9.2402 11.7789 9.1625 11.8998 9.11644 11.9891L9.11092 12L9.11645 12.0109C9.16251 12.1002 9.2402 12.2211 9.35359 12.3712C9.57949 12.6701 9.89379 13.0153 10.2261 13.3527C10.5551 13.6867 10.8862 13.9974 11.1363 14.2257L11.5468 14.5919C11.8801 14.879 11.9194 15.384 11.6344 15.7198C11.3494 16.0557 10.8481 16.0952 10.5147 15.8081L10.07 15.4115C9.807 15.1715 9.45392 14.8403 9.09873 14.4797C8.74692 14.1225 8.37707 13.7204 8.08985 13.3403C7.94668 13.1508 7.81057 12.9493 7.70697 12.7483C7.6123 12.5647 7.5 12.2979 7.5 12C7.5 11.702 7.6123 11.4353 7.70697 11.2516C7.81057 11.0507 7.94668 10.8491 8.08985 10.6597C8.37707 10.2796 8.74693 9.87746 9.09875 9.52028C9.45394 9.15968 9.80702 8.82852 10.07 8.58851L10.5148 8.19192ZM13.2739 9.52028C13.6291 9.15968 13.9821 8.82852 14.2452 8.58851L14.6899 8.19192C14.9255 7.98904 15.2567 7.94277 15.5382 8.07343C15.8197 8.20408 16 8.48778 16 8.80001L16 15.2C16 15.5122 15.8197 15.7959 15.5382 15.9266C15.2567 16.0572 14.9254 16.011 14.6899 15.8081L14.2451 15.4115C13.9821 15.1715 13.629 14.8403 13.2738 14.4797C12.922 14.1225 12.5522 13.7204 12.265 13.3403C12.1218 13.1508 11.9857 12.9493 11.8821 12.7483C11.7874 12.5647 11.6751 12.2979 11.6751 12C11.6751 11.702 11.7874 11.4353 11.8821 11.2516C11.9857 11.0507 12.1218 10.8491 12.265 10.6597C12.5522 10.2796 12.922 9.87746 13.2739 9.52028Z',
  d4: 'M11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50272 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03144 1.74999 9.7521 1.75 11.9428V11.9428V12.0572V12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.7521 22.25 11.9428 22.25H11.9428H12.0572H12.0572C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572V11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50272 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75H11.9428Z',
  d5: 'M11.6344 8.28019C11.3494 7.94435 10.8481 7.90483 10.5148 8.19192L10.07 8.58851C9.80702 8.82852 9.45394 9.15968 9.09875 9.52028C8.74693 9.87746 8.37707 10.2796 8.08985 10.6597C7.94668 10.8491 7.81057 11.0507 7.70697 11.2516C7.6123 11.4353 7.5 11.702 7.5 12C7.5 12.2979 7.6123 12.5647 7.70697 12.7483C7.81057 12.9493 7.94668 13.1508 8.08985 13.3403C8.37707 13.7204 8.74692 14.1225 9.09873 14.4797C9.45392 14.8403 9.807 15.1715 10.07 15.4115L10.5147 15.8081C10.8481 16.0952 11.3494 16.0557 11.6344 15.7198C11.9194 15.384 11.8801 14.879 11.5468 14.5919L11.1363 14.2257C10.8862 13.9974 10.5551 13.6867 10.2261 13.3527C9.89379 13.0153 9.57949 12.6701 9.35359 12.3712C9.2402 12.2211 9.16251 12.1002 9.11645 12.0109L9.11092 12L9.11644 11.9891C9.1625 11.8998 9.2402 11.7789 9.35359 11.6288C9.57948 11.3298 9.89379 10.9847 10.2261 10.6473C10.5551 10.3133 10.8862 10.0026 11.1363 9.77434L11.5467 9.40818C11.88 9.12108 11.9194 8.61601 11.6344 8.28019Z',
  d6: 'M14.2452 8.58851C13.9821 8.82852 13.6291 9.15968 13.2739 9.52028C12.922 9.87746 12.5522 10.2796 12.265 10.6597C12.1218 10.8491 11.9857 11.0507 11.8821 11.2516C11.7874 11.4353 11.6751 11.702 11.6751 12C11.6751 12.2979 11.7874 12.5647 11.8821 12.7483C11.9857 12.9493 12.1218 13.1508 12.265 13.3403C12.5522 13.7204 12.922 14.1225 13.2738 14.4797C13.629 14.8403 13.9821 15.1715 14.2451 15.4115L14.6899 15.8081C14.9254 16.011 15.2567 16.0572 15.5382 15.9266C15.8197 15.7959 16 15.5122 16 15.2L16 8.80001C16 8.48778 15.8197 8.20408 15.5382 8.07343C15.2567 7.94277 14.9255 7.98903 14.6899 8.19192L14.2452 8.58851Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M16.498 8L12.998 12L16.498 16M10.998 8L7.49805 12L10.998 16',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM11.563 8.49386L10.4341 7.5061L6.50195 12L10.4341 16.4939L11.563 15.5061L8.49511 12L11.563 8.49386ZM17.063 8.49386L15.9341 7.5061L12.002 12L15.9341 16.4939L17.063 15.5061L13.9951 12L17.063 8.49386Z',
} as const;

export const IconSquareArrowLeftDoubleStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-double-stroke-rounded IconSquareArrowLeftDoubleStrokeRounded"
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

export const IconSquareArrowLeftDoubleDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-double-duotone-rounded IconSquareArrowLeftDoubleDuotoneRounded"
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

export const IconSquareArrowLeftDoubleTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-double-twotone-rounded IconSquareArrowLeftDoubleTwotoneRounded"
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

export const IconSquareArrowLeftDoubleSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-double-solid-rounded IconSquareArrowLeftDoubleSolidRounded"
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

export const IconSquareArrowLeftDoubleBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-double-bulk-rounded IconSquareArrowLeftDoubleBulkRounded"
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
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowLeftDoubleStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-double-stroke-sharp IconSquareArrowLeftDoubleStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconSquareArrowLeftDoubleSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-left-double-solid-sharp IconSquareArrowLeftDoubleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfSquareArrowLeftDouble: TheIconSelfPack = {
  name: 'SquareArrowLeftDouble',
  StrokeRounded: IconSquareArrowLeftDoubleStrokeRounded,
  DuotoneRounded: IconSquareArrowLeftDoubleDuotoneRounded,
  TwotoneRounded: IconSquareArrowLeftDoubleTwotoneRounded,
  SolidRounded: IconSquareArrowLeftDoubleSolidRounded,
  BulkRounded: IconSquareArrowLeftDoubleBulkRounded,
  StrokeSharp: IconSquareArrowLeftDoubleStrokeSharp,
  SolidSharp: IconSquareArrowLeftDoubleSolidSharp,
};