import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432C21.5 12.6622 21.4997 13 21.4997 13',
  d2: 'M15.0251 20.9749L19.9749 16.0251M21 18.5C21 20.433 19.433 22 17.5 22C15.567 22 14 20.433 14 18.5C14 16.567 15.567 15 17.5 15C19.433 15 21 16.567 21 18.5Z',
  d3: 'M18 2V4M6 2V4',
  d4: 'M3 8H21',
  d5: 'M21.5 12.2432V12.7568C21.5 16.9852 21.5 19.1619 20.3557 20.524C20.7615 19.9526 21 19.2542 21 18.5C21 16.567 19.433 15 17.5 15C15.567 15 14 16.567 14 18.5C14 20.1824 15.187 21.5875 16.7692 21.9236C15.7456 22 14.496 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 10.5138 2.5 9.12764 2.57828 8H21.4217C21.5 9.12764 21.5 10.5138 21.5 12.2432Z',
  d6: 'M13 18.5C13 16.0147 15.0147 14 17.5 14C19.9853 14 22 16.0147 22 18.5C22 20.9853 19.9853 23 17.5 23C15.0147 23 13 20.9853 13 18.5ZM17.5 16C16.1193 16 15 17.1193 15 18.5C15 18.8224 15.061 19.1306 15.1722 19.4136L18.4136 16.1722C18.1306 16.061 17.8224 16 17.5 16ZM19.8278 17.5864L16.5864 20.8278C16.8694 20.939 17.1776 21 17.5 21C18.8807 21 20 19.8807 20 18.5C20 18.1776 19.939 17.8694 19.8278 17.5864Z',
  d7: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.8568 22.2322 4.92535 22.6329 6.21533 22.8204C7.45142 23.0001 9.02293 23 10.9712 23H11.05C11.6023 23 12.05 22.5523 12.05 22C12.05 21.4477 11.6023 21 11.05 21C9.00425 21 7.57858 20.9975 6.503 20.8412C5.4647 20.6903 4.89956 20.4142 4.48622 19.9673C4.06263 19.5094 3.79327 18.8656 3.64887 17.7045C3.50182 16.5221 3.5 14.9616 3.5 12.7568V12.2432C3.5 11.1847 3.50042 10.2746 3.51713 9.48363C3.52283 9.2139 3.74413 9 4.01391 9H19.986C20.2558 9 20.4771 9.21402 20.4828 9.48374C20.4955 10.0821 20.499 10.7502 20.4997 11.501V12C20.4997 12.5523 20.9475 13 21.4997 13C22.052 13 22.4997 12.5523 22.4997 12V11.499C22.4977 9.58334 22.4813 8.04001 22.3041 6.81198C22.1236 5.56147 21.7617 4.51759 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2Z',
  d8: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d9: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d10: 'M17.5 2V6M6.5 2V6',
  d11: 'M21 13V4H3V22H12',
  d12: 'M3 9H21',
  d13: 'M19.9749 20.9749L15.0251 16.0251M14 18.5C14 20.433 15.567 22 17.5 22C19.433 22 21 20.433 21 18.5C21 16.567 19.433 15 17.5 15C15.567 15 14 16.567 14 18.5Z',
  d14: 'M16.5 1.5V3H7.5V1.5H5.5V3H3C2.58579 3 2.25 3.33579 2.25 3.75V21.525C2.25 22.0635 2.68652 22.5 3.225 22.5H11V20.55H4.2V9.5H19.8V13.025H21.75V3.75C21.75 3.33579 21.4142 3 21 3H18.5V1.5H16.5Z',
  d15: 'M20.75 18.25C20.75 15.9028 18.8472 14 16.5 14C14.1528 14 12.25 15.9028 12.25 18.25C12.25 20.5972 14.1528 22.5 16.5 22.5C18.8472 22.5 20.75 20.5972 20.75 18.25ZM16.5 15.8889C17.804 15.8889 18.8611 16.946 18.8611 18.25C18.8611 18.5545 18.8035 18.8456 18.6985 19.1128L15.6372 16.0515C15.9044 15.9465 16.1955 15.8889 16.5 15.8889ZM14.3015 17.3872L17.3628 20.4485C17.0956 20.5535 16.8045 20.6111 16.5 20.6111C15.196 20.6111 14.1389 19.554 14.1389 18.25C14.1389 17.9455 14.1965 17.6544 14.3015 17.3872Z',
};

export const IconCalendarBlock01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-01-stroke-rounded IconCalendarBlock01StrokeRounded"
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

export const IconCalendarBlock01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-01-duotone-rounded IconCalendarBlock01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCalendarBlock01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-01-twotone-rounded IconCalendarBlock01TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconCalendarBlock01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-01-solid-rounded IconCalendarBlock01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconCalendarBlock01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-01-bulk-rounded IconCalendarBlock01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconCalendarBlock01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-01-stroke-sharp IconCalendarBlock01StrokeSharp"
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarBlock01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-block-01-solid-sharp IconCalendarBlock01SolidSharp"
    >
      <path 
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

export const iconPackOfCalendarBlock01: TheIconSelfPack = {
  name: 'CalendarBlock01',
  StrokeRounded: IconCalendarBlock01StrokeRounded,
  DuotoneRounded: IconCalendarBlock01DuotoneRounded,
  TwotoneRounded: IconCalendarBlock01TwotoneRounded,
  SolidRounded: IconCalendarBlock01SolidRounded,
  BulkRounded: IconCalendarBlock01BulkRounded,
  StrokeSharp: IconCalendarBlock01StrokeSharp,
  SolidSharp: IconCalendarBlock01SolidSharp,
};