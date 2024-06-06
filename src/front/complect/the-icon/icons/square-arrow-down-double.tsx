import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M8 13.1667L10.1144 15.2109C11.0033 16.0703 11.4477 16.5 12 16.5C12.5523 16.5 12.9967 16.0703 13.8856 15.2109L16 13.1667M8 7.5L10.1144 9.54423C11.0033 10.4036 11.4477 10.8333 12 10.8333C12.5523 10.8333 12.9967 10.4036 13.8856 9.54423L16 7.5',
  d3: 'M22.0694 17.312C22.25 15.9686 22.25 14.2479 22.25 12.0572L22.25 11.9428C22.25 9.75212 22.25 8.03144 22.0694 6.68802C21.8843 5.31137 21.4973 4.21911 20.6391 3.36091C19.7809 2.50271 18.6886 2.11568 17.312 1.93059C15.9686 1.74998 14.2479 1.74999 12.0572 1.75L11.9428 1.75C9.75212 1.74999 8.03144 1.74998 6.68802 1.93059C5.31137 2.11568 4.21911 2.50271 3.36091 3.36091C2.50271 4.21911 2.11568 5.31137 1.93059 6.68802C1.74998 8.03143 1.74999 9.7521 1.75 11.9428L1.75 11.9428L1.75 12.0572L1.75 12.0572C1.74999 14.2479 1.74998 15.9686 1.93059 17.312C2.11568 18.6886 2.50271 19.7809 3.36091 20.6391C4.21911 21.4973 5.31136 21.8843 6.68802 22.0694C8.03143 22.25 9.7521 22.25 11.9428 22.25L11.9428 22.25L12.0572 22.25L12.0572 22.25C14.2479 22.25 15.9686 22.25 17.312 22.0694C18.6886 21.8843 19.7809 21.4973 20.6391 20.6391C21.4973 19.7809 21.8843 18.6886 22.0694 17.312ZM15.8081 13.4852C16.0952 13.1519 16.0557 12.6506 15.7198 12.3656C15.384 12.0806 14.8789 12.12 14.5918 12.4533L14.2257 12.8637C13.9974 13.1138 13.6867 13.4449 13.3527 13.7739C13.0153 14.1062 12.6702 14.4205 12.3712 14.6464C12.2211 14.7598 12.1002 14.8375 12.0109 14.8836L12 14.8891L11.9891 14.8836C11.8998 14.8375 11.7789 14.7598 11.6288 14.6464C11.3299 14.4205 10.9847 14.1062 10.6473 13.7739C10.3133 13.4449 10.0026 13.1138 9.77434 12.8637L9.4081 12.4532C9.121 12.1199 8.61602 12.0806 8.28018 12.3656C7.94434 12.6506 7.90483 13.1519 8.19192 13.4853L8.58852 13.93C8.82854 14.193 9.15971 14.5461 9.52031 14.9013C9.87749 15.2531 10.2796 15.6229 10.6597 15.9102C10.8492 16.0533 11.0507 16.1894 11.2517 16.293C11.4353 16.3877 11.7021 16.5 12 16.5C12.298 16.5 12.5647 16.3877 12.7484 16.293C12.9493 16.1894 13.1509 16.0533 13.3403 15.9102C13.7204 15.6229 14.1225 15.2531 14.4797 14.9013C14.8403 14.5461 15.1715 14.193 15.4115 13.93L15.8081 13.4852ZM14.4797 10.7261C14.8403 10.3709 15.1715 10.0179 15.4115 9.75484L15.8081 9.31012C16.011 9.07453 16.0572 8.7433 15.9266 8.46181C15.7959 8.18031 15.5122 8 15.2 8L8.80001 8.00002C8.48778 8.00002 8.20408 8.18034 8.07342 8.46184C7.94277 8.74333 7.98904 9.07456 8.19192 9.31015L8.58852 9.75487C8.82854 10.0179 9.15971 10.371 9.52031 10.7262C9.87749 11.078 10.2796 11.4478 10.6597 11.735C10.8492 11.8782 11.0507 12.0143 11.2517 12.1179C11.4353 12.2126 11.7021 12.3249 12 12.3249C12.298 12.3249 12.5647 12.2126 12.7484 12.1179C12.9493 12.0143 13.1509 11.8782 13.3403 11.735C13.7204 11.4478 14.1225 11.078 14.4797 10.7261Z',
  d4: 'M22.25 12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25L12.0572 22.25L11.9428 22.25L11.9428 22.25C9.7521 22.25 8.03143 22.25 6.68802 22.0694C5.31136 21.8843 4.21911 21.4973 3.36091 20.6391C2.50271 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572L1.75 12.0572L1.75 11.9428L1.75 11.9428C1.74999 9.7521 1.74998 8.03143 1.93059 6.68802C2.11568 5.31137 2.50271 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75L12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.75212 22.25 11.9428L22.25 12.0572Z',
  d5: 'M15.7198 12.3656C16.0557 12.6506 16.0952 13.1519 15.8081 13.4852L15.4115 13.93C15.1715 14.193 14.8403 14.5461 14.4797 14.9013C14.1225 15.2531 13.7204 15.6229 13.3403 15.9102C13.1509 16.0533 12.9493 16.1894 12.7484 16.293C12.5647 16.3877 12.298 16.5 12 16.5C11.7021 16.5 11.4353 16.3877 11.2517 16.293C11.0507 16.1894 10.8492 16.0533 10.6597 15.9102C10.2796 15.6229 9.87749 15.2531 9.52031 14.9013C9.15971 14.5461 8.82854 14.193 8.58852 13.93L8.19192 13.4853C7.90483 13.1519 7.94434 12.6506 8.28018 12.3656C8.61602 12.0806 9.121 12.1199 9.4081 12.4532L9.77434 12.8637C10.0026 13.1138 10.3133 13.4449 10.6473 13.7739C10.9847 14.1062 11.3299 14.4205 11.6288 14.6464C11.7789 14.7598 11.8998 14.8375 11.9891 14.8836L12 14.8891L12.0109 14.8836C12.1002 14.8375 12.2211 14.7598 12.3712 14.6464C12.6702 14.4205 13.0153 14.1062 13.3527 13.7739C13.6867 13.4449 13.9974 13.1138 14.2257 12.8637L14.5918 12.4533C14.8789 12.12 15.384 12.0806 15.7198 12.3656Z',
  d6: 'M15.4115 9.75484C15.1715 10.0179 14.8403 10.3709 14.4797 10.7261C14.1225 11.078 13.7204 11.4478 13.3403 11.735C13.1509 11.8782 12.9493 12.0143 12.7484 12.1179C12.5647 12.2126 12.298 12.3249 12 12.3249C11.7021 12.3249 11.4353 12.2126 11.2517 12.1179C11.0507 12.0143 10.8492 11.8782 10.6597 11.735C10.2796 11.4478 9.87749 11.078 9.52031 10.7262C9.15971 10.371 8.82854 10.0179 8.58852 9.75487L8.19192 9.31015C7.98904 9.07456 7.94277 8.74333 8.07342 8.46184C8.20408 8.18034 8.48778 8.00002 8.80001 8.00002L15.2 8C15.5122 8 15.7959 8.18031 15.9266 8.46181C16.0572 8.7433 16.011 9.07453 15.8081 9.31012L15.4115 9.75484Z',
  d7: 'M21 3V21H3V3H21Z',
  d8: 'M15.998 7.5L11.998 11L7.99805 7.5M15.998 13L11.998 16.5L7.99805 13',
  d9: 'M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3V21C2.25 21.4142 2.58579 21.75 3 21.75H21C21.4142 21.75 21.75 21.4142 21.75 21V3C21.75 2.58579 21.4142 2.25 21 2.25H3ZM8.49166 6.93555L11.9978 10.0034L15.5039 6.93555L16.4917 8.06441L11.9978 11.9966L7.50391 8.06441L8.49166 6.93555ZM8.49166 12.4355L11.9978 15.5034L15.5039 12.4355L16.4917 13.5644L11.9978 17.4966L7.50391 13.5644L8.49166 12.4355Z',
};

export const IconSquareArrowDownDoubleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-double-stroke-rounded IconSquareArrowDownDoubleStrokeRounded"
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

export const IconSquareArrowDownDoubleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-double-duotone-rounded IconSquareArrowDownDoubleDuotoneRounded"
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

export const IconSquareArrowDownDoubleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-double-twotone-rounded IconSquareArrowDownDoubleTwotoneRounded"
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

export const IconSquareArrowDownDoubleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-double-solid-rounded IconSquareArrowDownDoubleSolidRounded"
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

export const IconSquareArrowDownDoubleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-double-bulk-rounded IconSquareArrowDownDoubleBulkRounded"
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

export const IconSquareArrowDownDoubleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-double-stroke-sharp IconSquareArrowDownDoubleStrokeSharp"
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

export const IconSquareArrowDownDoubleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="square-arrow-down-double-solid-sharp IconSquareArrowDownDoubleSolidSharp"
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

export const iconPackOfSquareArrowDownDouble: TheIconSelfPack = {
  name: 'SquareArrowDownDouble',
  StrokeRounded: IconSquareArrowDownDoubleStrokeRounded,
  DuotoneRounded: IconSquareArrowDownDoubleDuotoneRounded,
  TwotoneRounded: IconSquareArrowDownDoubleTwotoneRounded,
  SolidRounded: IconSquareArrowDownDoubleSolidRounded,
  BulkRounded: IconSquareArrowDownDoubleBulkRounded,
  StrokeSharp: IconSquareArrowDownDoubleStrokeSharp,
  SolidSharp: IconSquareArrowDownDoubleSolidSharp,
};