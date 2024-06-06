import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 2V4M6 2V4',
  d2: 'M3 8H21',
  d3: 'M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z',
  d4: 'M12.6047 12.0055L13.2206 13.2475C13.3046 13.4204 13.5286 13.5862 13.7175 13.618L14.8339 13.805C15.5478 13.925 15.7158 14.4472 15.2014 14.9624L14.3335 15.8374C14.1865 15.9856 14.106 16.2715 14.1515 16.4761L14.4 17.5594C14.596 18.4168 14.1445 18.7485 13.3921 18.3004L12.3457 17.6758C12.1567 17.5629 11.8453 17.5629 11.6528 17.6758L10.6064 18.3004C9.85748 18.7485 9.40253 18.4133 9.5985 17.5594L9.84698 16.4761C9.89247 16.2715 9.81198 15.9856 9.665 15.8374L8.79709 14.9624C8.28615 14.4472 8.45063 13.925 9.16455 13.805L10.2809 13.618C10.4664 13.5862 10.6904 13.4204 10.7744 13.2475L11.3903 12.0055C11.7263 11.3315 12.2722 11.3315 12.6047 12.0055Z',
  d5: 'M21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 10.5138 2.5 9.12764 2.57828 8H21.4217C21.5 9.12764 21.5 10.5138 21.5 12.2432ZM13.2206 13.2475L12.6047 12.0055C12.2722 11.3315 11.7263 11.3315 11.3903 12.0055L10.7744 13.2475C10.6904 13.4204 10.4664 13.5862 10.2809 13.618L9.16455 13.805C8.45063 13.925 8.28615 14.4472 8.79709 14.9624L9.665 15.8374C9.81198 15.9856 9.89247 16.2715 9.84698 16.4761L9.59851 17.5594C9.40253 18.4133 9.85748 18.7485 10.6064 18.3004L11.6528 17.6758C11.8453 17.5629 12.1567 17.5629 12.3457 17.6758L13.3921 18.3004C14.1445 18.7485 14.596 18.4168 14.4 17.5594L14.1515 16.4761C14.106 16.2715 14.1865 15.9856 14.3335 15.8374L15.2014 14.9624C15.7158 14.4472 15.5478 13.925 14.8339 13.805L13.7176 13.618C13.5286 13.5862 13.3046 13.4204 13.2206 13.2475Z',
  d6: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d7: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d8: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.8568 22.2322 4.92535 22.6329 6.21533 22.8204C7.45142 23.0001 9.02293 23 10.9712 23H13.0288C14.9771 23 16.5486 23.0001 17.7847 22.8204C19.0747 22.6329 20.1432 22.2322 20.982 21.3254C21.8105 20.4297 22.1672 19.3073 22.3358 17.9513C22.5 16.6311 22.5 14.9459 22.5 12.8261V12.1739C22.5 10.0541 22.5 8.36895 22.3358 7.04866C22.1672 5.69272 21.8105 4.57031 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2ZM4.49783 9C4.03921 9 3.8099 9 3.66385 9.14417C3.51781 9.28833 3.51487 9.51472 3.509 9.96751C3.50027 10.6407 3.5 11.3942 3.5 12.2432V12.7568C3.5 14.9616 3.50182 16.5221 3.64887 17.7045C3.79327 18.8656 4.06263 19.5094 4.48622 19.9673C4.89956 20.4142 5.4647 20.6903 6.503 20.8412C7.57858 20.9975 9.00425 21 11.05 21H12.95C14.9957 21 16.4214 20.9975 17.497 20.8412C18.5353 20.6903 19.1004 20.4142 19.5138 19.9673C19.9374 19.5094 20.2067 18.8656 20.3511 17.7045C20.4982 16.5221 20.5 14.9616 20.5 12.7568V12.2432C20.5 11.3942 20.4997 10.6407 20.491 9.96751C20.4851 9.51472 20.4822 9.28833 20.3362 9.14417C20.1901 9 19.9608 9 19.5022 9H4.49783Z',
  d9: 'M11.9989 11C12.6013 11 12.9952 11.4509 13.2013 11.8683L13.2017 11.8692L13.6388 12.7503C13.7016 12.8769 13.7331 12.9402 13.7876 12.9807C13.8421 13.0211 13.9118 13.0328 14.0512 13.0562L14.7832 13.1788C15.2435 13.2562 15.7668 13.5071 15.9448 14.0656C16.1225 14.6231 15.8424 15.1306 15.5123 15.4617L15.5113 15.4626L14.9389 16.0404C14.8322 16.1482 14.7789 16.202 14.759 16.2717C14.7391 16.3413 14.7559 16.4152 14.7895 16.5631L14.9459 17.2505C15.0513 17.7118 15.0712 18.3926 14.5364 18.7858C13.9986 19.1811 13.354 18.9529 12.9481 18.7111L12.2886 18.3174C12.1476 18.2332 12.0771 18.1911 11.9993 18.1911C11.9214 18.1911 11.8509 18.2332 11.71 18.3174L11.0508 18.7109C10.643 18.9548 10.0001 19.1795 9.46314 18.7844C8.92967 18.3918 8.94648 17.7133 9.05279 17.2499L9.20947 16.5667C9.24337 16.4189 9.26032 16.345 9.24053 16.2753C9.22074 16.2056 9.16747 16.1517 9.06093 16.0437L8.48553 15.4609C8.15741 15.13 7.87837 14.6232 8.05455 14.0668C8.23157 13.5078 8.75469 13.2562 9.21568 13.1788L9.94434 13.0564C10.0837 13.033 10.1534 13.0213 10.2079 12.9808C10.2624 12.9404 10.2938 12.8771 10.3566 12.7504L10.7942 11.8679L10.7948 11.8665C11.0025 11.45 11.3973 11 11.9989 11Z',
  d10: 'M17.5 2V6M6.5 2V6',
  d11: 'M21 4H3V22H21V4Z',
  d12: 'M3 9H21',
  d13: 'M12.0059 12.2307C12.0294 12.1957 12.0127 12.1948 12.0352 12.2305L13.2852 14.0977L15.4696 14.6657C15.5101 14.6771 15.5256 14.7266 15.4988 14.7592L14.113 16.5032L14.1731 18.6742C14.176 18.7162 14.2126 18.7759 14.1731 18.7618L12.0017 18.0133L9.88663 18.7618C9.84698 18.7755 9.79733 18.7162 9.80069 18.6742L9.92669 16.5306L8.50068 14.7586C8.47447 14.726 8.46065 14.7149 8.50074 14.7034L10.6814 14.1281L12.0059 12.2307Z',
  d14: 'M7.5 1.5V3H16.5V1.5H18.5V3H21C21.4142 3 21.75 3.33579 21.75 3.75V21.525C21.75 22.0635 21.3135 22.5 20.775 22.5H3.225C2.68652 22.5 2.25 22.0635 2.25 21.525V3.75C2.25 3.33579 2.58579 3 3 3H5.5V1.5H7.5ZM19.8 20.55V9.5H4.2V20.55H19.8Z',
  d15: 'M12 11.7749L13.2979 13.6239L15.5 14.2577L14.1 16.0342L14.1631 18.2749L12 17.5239L9.83688 18.2749L9.9 16.0342L8.5 14.2577L10.7021 13.6239L12 11.7749Z',
};

export const IconCalendarFavorite02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-02-stroke-rounded IconCalendarFavorite02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconCalendarFavorite02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-02-duotone-rounded IconCalendarFavorite02DuotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarFavorite02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-02-twotone-rounded IconCalendarFavorite02TwotoneRounded"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarFavorite02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-02-solid-rounded IconCalendarFavorite02SolidRounded"
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarFavorite02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-02-bulk-rounded IconCalendarFavorite02BulkRounded"
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
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarFavorite02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-02-stroke-sharp IconCalendarFavorite02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconCalendarFavorite02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-02-solid-sharp IconCalendarFavorite02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfCalendarFavorite02: TheIconSelfPack = {
  name: 'CalendarFavorite02',
  StrokeRounded: IconCalendarFavorite02StrokeRounded,
  DuotoneRounded: IconCalendarFavorite02DuotoneRounded,
  TwotoneRounded: IconCalendarFavorite02TwotoneRounded,
  SolidRounded: IconCalendarFavorite02SolidRounded,
  BulkRounded: IconCalendarFavorite02BulkRounded,
  StrokeSharp: IconCalendarFavorite02StrokeSharp,
  SolidSharp: IconCalendarFavorite02SolidSharp,
};