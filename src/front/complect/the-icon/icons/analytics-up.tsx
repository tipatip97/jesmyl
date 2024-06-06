import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M7 18V16M12 18V15M17 18V13M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d2: 'M5.99219 11.4863C8.14729 11.5581 13.0341 11.2328 15.8137 6.82132M13.9923 6.28835L15.8678 5.98649C16.0964 5.95738 16.432 6.13785 16.5145 6.35298L17.0104 7.99142',
  d3: 'M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z',
  d4: 'M7 18V16',
  d5: 'M12 18V15',
  d6: 'M17 18V13',
  d7: 'M6.84668 17.5V15.5',
  d8: 'M5.98145 11.4975C8.13655 11.5693 13.0234 11.2441 15.803 6.83255M13.9815 6.29958L15.8571 5.99772C16.0856 5.96861 16.4212 6.14909 16.5038 6.36421L16.9996 8.00265',
  d9: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572ZM7 15.25C7.41421 15.25 7.75 15.5858 7.75 16V18C7.75 18.4142 7.41421 18.75 7 18.75C6.58579 18.75 6.25 18.4142 6.25 18V16C6.25 15.5858 6.58579 15.25 7 15.25ZM12.75 15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V15ZM17 12.25C17.4142 12.25 17.75 12.5858 17.75 13V18C17.75 18.4142 17.4142 18.75 17 18.75C16.5858 18.75 16.25 18.4142 16.25 18V13C16.25 12.5858 16.5858 12.25 17 12.25ZM15.8589 5.25228C16.0902 5.24173 16.3693 5.26295 16.6447 5.41952C16.9304 5.58187 17.0889 5.81911 17.1891 6.04105C17.2714 6.22343 17.335 6.44565 17.393 6.64857L17.393 6.64858L17.4029 6.68297L17.721 7.79345C17.8351 8.19164 17.6048 8.60692 17.2066 8.721C16.8084 8.83508 16.3931 8.60476 16.279 8.20656L16.1323 7.69448C13.8986 10.9059 10.322 12.25 6 12.25C5.58579 12.25 5.25 11.9142 5.25 11.5C5.25 11.0858 5.58579 10.75 6 10.75C9.95263 10.75 12.9634 9.5578 14.8459 6.91538L14.1221 7.03478C13.7134 7.1022 13.3274 6.82554 13.26 6.41685C13.1926 6.00815 13.4692 5.6222 13.8779 5.55478L15.1456 5.34568L15.1788 5.34021C15.4162 5.30098 15.6546 5.2616 15.8589 5.25228Z',
  d10: 'M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572Z',
  d11: 'M7 15.25C7.41421 15.25 7.75 15.5858 7.75 16L7.75 18C7.75 18.4142 7.41421 18.75 7 18.75C6.58579 18.75 6.25 18.4142 6.25 18L6.25 16C6.25 15.5858 6.58579 15.25 7 15.25Z',
  d12: 'M12 14.25C12.4142 14.25 12.75 14.5858 12.75 15L12.75 18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18L11.25 15C11.25 14.5858 11.5858 14.25 12 14.25Z',
  d13: 'M17 12.25C17.4142 12.25 17.75 12.5858 17.75 13L17.75 18C17.75 18.4142 17.4142 18.75 17 18.75C16.5858 18.75 16.25 18.4142 16.25 18L16.25 13C16.25 12.5858 16.5858 12.25 17 12.25Z',
  d14: 'M16.6447 5.41952C16.3693 5.26295 16.0902 5.24173 15.8589 5.25228C15.6546 5.2616 15.4162 5.30098 15.1788 5.34021C15.1677 5.34203 15.1566 5.34386 15.1456 5.34568L13.8779 5.55478C13.4692 5.6222 13.1926 6.00815 13.26 6.41685C13.3274 6.82554 13.7134 7.1022 14.1221 7.03478L14.8459 6.91538C12.9634 9.5578 9.95263 10.75 6 10.75C5.58579 10.75 5.25 11.0858 5.25 11.5C5.25 11.9142 5.58579 12.25 6 12.25C10.322 12.25 13.8986 10.9059 16.1323 7.69448L16.279 8.20656C16.3931 8.60476 16.8084 8.83508 17.2066 8.721C17.6048 8.60692 17.8351 8.19164 17.721 7.79345L17.4029 6.68297C17.3996 6.67158 17.3963 6.66011 17.393 6.64858C17.335 6.44566 17.2714 6.22344 17.1891 6.04105C17.0889 5.81911 16.9304 5.58187 16.6447 5.41952Z',
  d15: 'M21 3V21H3V3H21Z',
  d16: 'M6 11.9999C9.71154 12.2616 14.8342 9.8342 16.7102 7.21167M13.4565 6.925L16.9323 6.875L16.9826 10.3807',
  d17: 'M2.24976 3C2.24976 2.58579 2.58554 2.25 2.99976 2.25H20.9998C21.414 2.25 21.7498 2.58579 21.7498 3V21C21.7498 21.4142 21.414 21.75 20.9998 21.75H2.99976C2.58554 21.75 2.24976 21.4142 2.24976 21V3ZM7.74988 16V18H6.24988V16H7.74988ZM12.7499 18V15H11.2499V18H12.7499ZM17.7499 13V18H16.2499V13H17.7499ZM13.4998 7.75H15.3003C14.9267 8.09737 14.4559 8.48965 13.8862 8.8826C12.1767 10.0617 9.57258 11.25 5.99976 11.25V12.75C9.92694 12.75 12.8226 11.4383 14.7378 10.1174C15.3372 9.70399 15.8403 9.28998 16.2493 8.91538V10.5H17.7493V6.25H13.4998V7.75Z',
};

export const IconAnalyticsUpStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-up-stroke-rounded IconAnalyticsUpStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconAnalyticsUpDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-up-duotone-rounded IconAnalyticsUpDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
      />
    </TheIconWrapper>
  );
};

export const IconAnalyticsUpTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-up-twotone-rounded IconAnalyticsUpTwotoneRounded"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconAnalyticsUpSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-up-solid-rounded IconAnalyticsUpSolidRounded"
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

export const IconAnalyticsUpBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-up-bulk-rounded IconAnalyticsUpBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconAnalyticsUpStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-up-stroke-sharp IconAnalyticsUpStrokeSharp"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
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

export const IconAnalyticsUpSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="analytics-up-solid-sharp IconAnalyticsUpSolidSharp"
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

export const iconPackOfAnalyticsUp: TheIconSelfPack = {
  name: 'AnalyticsUp',
  StrokeRounded: IconAnalyticsUpStrokeRounded,
  DuotoneRounded: IconAnalyticsUpDuotoneRounded,
  TwotoneRounded: IconAnalyticsUpTwotoneRounded,
  SolidRounded: IconAnalyticsUpSolidRounded,
  BulkRounded: IconAnalyticsUpBulkRounded,
  StrokeSharp: IconAnalyticsUpStrokeSharp,
  SolidSharp: IconAnalyticsUpSolidSharp,
};