import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M16 10.8333L13.8856 8.7891C12.9967 7.9297 12.5523 7.5 12 7.5C11.4477 7.5 11.0033 7.9297 10.1144 8.7891L8 10.8333M16 16.5L13.8856 14.4558C12.9967 13.5964 12.5523 13.1667 12 13.1667C11.4477 13.1667 11.0033 13.5964 10.1144 14.4558L8 16.5',
  d3: 'M1.93059 6.68802C1.74998 8.03144 1.74999 9.75212 1.75 11.9428L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31137 21.8843 6.68802 22.0694C8.03144 22.25 9.75212 22.25 11.9428 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 12.0572L22.25 11.9428L22.25 11.9428C22.25 9.7521 22.25 8.03143 22.0694 6.68802C21.8843 5.31136 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L12.0572 1.75L11.9428 1.75L11.9428 1.75C9.7521 1.74999 8.03143 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802ZM8.19191 10.5148C7.90483 10.8481 7.94435 11.3494 8.28019 11.6344C8.61601 11.9194 9.12108 11.88 9.40818 11.5467L9.77434 11.1363C10.0026 10.8862 10.3133 10.5551 10.6473 10.2261C10.9847 9.89379 11.3298 9.57948 11.6288 9.35358C11.7789 9.2402 11.8998 9.1625 11.9891 9.11644L12 9.11091L12.0109 9.11645C12.1002 9.16251 12.2211 9.2402 12.3712 9.35359C12.6701 9.57949 13.0153 9.89379 13.3527 10.2261C13.6867 10.5551 13.9974 10.8862 14.2257 11.1363L14.5919 11.5468C14.879 11.8801 15.384 11.9194 15.7198 11.6344C16.0557 11.3494 16.0952 10.8481 15.8081 10.5147L15.4115 10.07C15.1715 9.807 14.8403 9.45392 14.4797 9.09873C14.1225 8.74692 13.7204 8.37707 13.3403 8.08985C13.1508 7.94668 12.9493 7.81057 12.7483 7.70697C12.5647 7.6123 12.2979 7.5 12 7.5C11.702 7.5 11.4353 7.6123 11.2516 7.70697C11.0507 7.81057 10.8491 7.94668 10.6597 8.08985C10.2796 8.37707 9.87746 8.74693 9.52028 9.09875C9.15968 9.45394 8.82852 9.80702 8.58851 10.07L8.19191 10.5148ZM9.52028 13.2739C9.15968 13.6291 8.82852 13.9821 8.58851 14.2452L8.19192 14.6899C7.98903 14.9255 7.94277 15.2567 8.07343 15.5382C8.20408 15.8197 8.48778 16 8.80001 16L15.2 16C15.5122 16 15.7959 15.8197 15.9266 15.5382C16.0572 15.2567 16.011 14.9254 15.8081 14.6898L15.4115 14.2451C15.1715 13.9821 14.8403 13.629 14.4797 13.2738C14.1225 12.922 13.7204 12.5522 13.3403 12.265C13.1508 12.1218 12.9493 11.9857 12.7483 11.8821C12.5647 11.7874 12.2979 11.6751 12 11.6751C11.702 11.6751 11.4353 11.7874 11.2516 11.8821C11.0507 11.9857 10.8491 12.1218 10.6597 12.265C10.2796 12.5522 9.87746 12.922 9.52028 13.2739Z',
  d4: 'M1.75 11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.7521 1.74999 11.9428 1.75L11.9428 1.75L12.0572 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31136 22.0694 6.68802C22.25 8.03143 22.25 9.7521 22.25 11.9428L22.25 11.9428L22.25 12.0572L22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L11.9428 22.25C9.75212 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 11.9428Z',
  d5: 'M8.28019 11.6344C7.94435 11.3494 7.90483 10.8481 8.19192 10.5148L8.58851 10.07C8.82852 9.80702 9.15968 9.45394 9.52028 9.09875C9.87746 8.74693 10.2796 8.37707 10.6597 8.08985C10.8491 7.94668 11.0507 7.81057 11.2516 7.70697C11.4353 7.6123 11.702 7.5 12 7.5C12.2979 7.5 12.5647 7.6123 12.7483 7.70697C12.9493 7.81057 13.1508 7.94668 13.3403 8.08985C13.7204 8.37707 14.1225 8.74692 14.4797 9.09873C14.8403 9.45392 15.1715 9.807 15.4115 10.07L15.8081 10.5147C16.0952 10.8481 16.0557 11.3494 15.7198 11.6344C15.384 11.9194 14.879 11.8801 14.5919 11.5468L14.2257 11.1363C13.9974 10.8862 13.6867 10.5551 13.3527 10.2261C13.0153 9.89379 12.6701 9.57949 12.3712 9.35359C12.2211 9.2402 12.1002 9.16251 12.0109 9.11644L12 9.11092L11.9891 9.11644C11.8998 9.1625 11.7789 9.2402 11.6288 9.35359C11.3298 9.57948 10.9847 9.89379 10.6473 10.2261C10.3133 10.5551 10.0026 10.8862 9.77434 11.1363L9.40818 11.5467C9.12108 11.88 8.61601 11.9194 8.28019 11.6344Z',
  d6: 'M8.58851 14.2452C8.82852 13.9821 9.15968 13.6291 9.52028 13.2739C9.87746 12.922 10.2796 12.5522 10.6597 12.265C10.8491 12.1218 11.0507 11.9857 11.2516 11.8821C11.4353 11.7874 11.702 11.6751 12 11.6751C12.2979 11.6751 12.5647 11.7874 12.7483 11.8821C12.9493 11.9857 13.1508 12.1218 13.3403 12.265C13.7204 12.5522 14.1225 12.922 14.4797 13.2738C14.8403 13.629 15.1715 13.9821 15.4115 14.2451L15.8081 14.6898C16.011 14.9254 16.0572 15.2567 15.9266 15.5382C15.7959 15.8197 15.5122 16 15.2 16L8.80001 16C8.48778 16 8.20408 15.8197 8.07343 15.5382C7.94277 15.2567 7.98903 14.9255 8.19192 14.6899L8.58851 14.2452Z',
  d7: 'M20.999 3V21H2.99902V3H20.999Z',
  d8: 'M15.9971 16.5L11.9971 13L7.99707 16.5M15.9971 11L11.9971 7.5L7.99707 11',
  d9: 'M2.99902 2.25C2.58481 2.25 2.24902 2.58579 2.24902 3V21C2.24902 21.4142 2.58481 21.75 2.99902 21.75H20.999C21.4132 21.75 21.749 21.4142 21.749 21V3C21.749 2.58579 21.4132 2.25 20.999 2.25H2.99902ZM16.4907 10.4356L11.9968 6.50342L7.50293 10.4356L8.49069 11.5644L11.9968 8.49657L15.5029 11.5644L16.4907 10.4356ZM16.4907 15.9356L11.9968 12.0034L7.50293 15.9356L8.49069 17.0644L11.9968 13.9966L15.5029 17.0644L16.4907 15.9356Z',
};

export const IconSquareArrowUpDoubleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-double-stroke-rounded IconSquareArrowUpDoubleStrokeRounded"
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

export const IconSquareArrowUpDoubleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-double-duotone-rounded IconSquareArrowUpDoubleDuotoneRounded"
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

export const IconSquareArrowUpDoubleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-double-twotone-rounded IconSquareArrowUpDoubleTwotoneRounded"
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

export const IconSquareArrowUpDoubleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-double-solid-rounded IconSquareArrowUpDoubleSolidRounded"
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

export const IconSquareArrowUpDoubleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-double-bulk-rounded IconSquareArrowUpDoubleBulkRounded"
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

export const IconSquareArrowUpDoubleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-double-stroke-sharp IconSquareArrowUpDoubleStrokeSharp"
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

export const IconSquareArrowUpDoubleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-up-double-solid-sharp IconSquareArrowUpDoubleSolidSharp"
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

export const iconPackOfSquareArrowUpDouble: TheIconSelfPack = {
  name: 'SquareArrowUpDouble',
  StrokeRounded: IconSquareArrowUpDoubleStrokeRounded,
  DuotoneRounded: IconSquareArrowUpDoubleDuotoneRounded,
  TwotoneRounded: IconSquareArrowUpDoubleTwotoneRounded,
  SolidRounded: IconSquareArrowUpDoubleSolidRounded,
  BulkRounded: IconSquareArrowUpDoubleBulkRounded,
  StrokeSharp: IconSquareArrowUpDoubleStrokeSharp,
  SolidSharp: IconSquareArrowUpDoubleSolidSharp,
};