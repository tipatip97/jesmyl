import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 2V4M6 2V4',
  d2: 'M3 8H21',
  d3: 'M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z',
  d4: 'M9.55 12.55L14.45 17.45M15.5 15C15.5 13.067 13.933 11.5 12 11.5C10.067 11.5 8.5 13.067 8.5 15C8.5 16.933 10.067 18.5 12 18.5C13.933 18.5 15.5 16.933 15.5 15Z',
  d5: 'M21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 10.5138 2.5 9.12764 2.57828 8H21.4217C21.5 9.12764 21.5 10.5138 21.5 12.2432ZM12 11.5C13.933 11.5 15.5 13.067 15.5 15C15.5 16.933 13.933 18.5 12 18.5C10.067 18.5 8.5 16.933 8.5 15C8.5 13.067 10.067 11.5 12 11.5Z',
  d6: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d7: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d8: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.8568 22.2322 4.92535 22.6329 6.21533 22.8204C7.45142 23.0001 9.02293 23 10.9712 23H13.0288C14.9771 23 16.5486 23.0001 17.7847 22.8204C19.0747 22.6329 20.1432 22.2322 20.982 21.3254C21.8105 20.4297 22.1672 19.3073 22.3358 17.9513C22.5 16.6311 22.5 14.9459 22.5 12.8261V12.1739C22.5 10.0541 22.5 8.36895 22.3358 7.04866C22.1672 5.69272 21.8105 4.57031 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2ZM4.49783 9C4.03921 9 3.8099 9 3.66385 9.14417C3.51781 9.28833 3.51487 9.51472 3.509 9.96751C3.50027 10.6407 3.5 11.3942 3.5 12.2432V12.7568C3.5 14.9616 3.50182 16.5221 3.64887 17.7045C3.79327 18.8656 4.06263 19.5094 4.48622 19.9673C4.89956 20.4142 5.4647 20.6903 6.503 20.8412C7.57858 20.9975 9.00425 21 11.05 21H12.95C14.9957 21 16.4214 20.9975 17.497 20.8412C18.5353 20.6903 19.1004 20.4142 19.5138 19.9673C19.9374 19.5094 20.2067 18.8656 20.3511 17.7045C20.4982 16.5221 20.5 14.9616 20.5 12.7568V12.2432C20.5 11.3942 20.4997 10.6407 20.491 9.96751C20.4851 9.51472 20.4822 9.28833 20.3362 9.14417C20.1901 9 19.9608 9 19.5022 9H4.49783Z',
  d9: 'M7.75 15C7.75 12.6528 9.65279 10.75 12 10.75C14.3472 10.75 16.25 12.6528 16.25 15C16.25 17.3472 14.3472 19.25 12 19.25C9.65279 19.25 7.75 17.3472 7.75 15ZM9.71882 13.9482C9.57107 14.2682 9.48864 14.6245 9.48864 15C9.48864 16.387 10.613 17.5114 12 17.5114C12.3755 17.5114 12.7318 17.4289 13.0518 17.2812L9.71882 13.9482ZM10.9482 12.7188L14.2812 16.0518C14.4289 15.7318 14.5114 15.3755 14.5114 15C14.5114 13.613 13.387 12.4886 12 12.4886C11.6245 12.4886 11.2682 12.5711 10.9482 12.7188Z',
  d10: 'M17.5 2V6M6.5 2V6',
  d11: 'M21 4H3V22H21V4Z',
  d12: 'M3 9H21',
  d13: 'M9.55 13.05L14.45 17.95M15.5 15.5C15.5 13.567 13.933 12 12 12C10.067 12 8.5 13.567 8.5 15.5C8.5 17.433 10.067 19 12 19C13.933 19 15.5 17.433 15.5 15.5Z',
  d14: 'M8 15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15C16 17.2091 14.2091 19 12 19C9.79086 19 8 17.2091 8 15ZM9.93084 14.1879C9.83203 14.4395 9.77778 14.7134 9.77778 15C9.77778 16.2273 10.7727 17.2222 12 17.2222C12.2866 17.2222 12.5605 17.168 12.8121 17.0692L9.93084 14.1879ZM11.1879 12.9308L14.0692 15.8121C14.168 15.5605 14.2222 15.2866 14.2222 15C14.2222 13.7727 13.2273 12.7778 12 12.7778C11.7134 12.7778 11.4395 12.832 11.1879 12.9308Z',
  d15: 'M7.5 1.5V3H16.5V1.5H18.5V3H21C21.4142 3 21.75 3.33579 21.75 3.75V21.525C21.75 22.0635 21.3135 22.5 20.775 22.5H3.225C2.68652 22.5 2.25 22.0635 2.25 21.525V3.75C2.25 3.33579 2.58579 3 3 3H5.5V1.5H7.5ZM19.8 20.55V9.5H4.2V20.55H19.8Z',
};

export const IconCalendarBlock02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-02-stroke-rounded IconCalendarBlock02StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconCalendarBlock02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-02-duotone-rounded IconCalendarBlock02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
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
      />
    </TheIconWrapper>
  );
};

export const IconCalendarBlock02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-02-twotone-rounded IconCalendarBlock02TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarBlock02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-02-solid-rounded IconCalendarBlock02SolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCalendarBlock02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-02-bulk-rounded IconCalendarBlock02BulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconCalendarBlock02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-02-stroke-sharp IconCalendarBlock02StrokeSharp"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarBlock02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-02-solid-sharp IconCalendarBlock02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCalendarBlock02: TheIconSelfPack = {
  name: 'CalendarBlock02',
  StrokeRounded: IconCalendarBlock02StrokeRounded,
  DuotoneRounded: IconCalendarBlock02DuotoneRounded,
  TwotoneRounded: IconCalendarBlock02TwotoneRounded,
  SolidRounded: IconCalendarBlock02SolidRounded,
  BulkRounded: IconCalendarBlock02BulkRounded,
  StrokeSharp: IconCalendarBlock02StrokeSharp,
  SolidSharp: IconCalendarBlock02SolidSharp,
};