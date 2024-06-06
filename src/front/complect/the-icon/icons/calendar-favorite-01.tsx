import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.7774 13.6499L18.5693 15.2468C18.6773 15.4691 18.9653 15.6823 19.2083 15.7231L20.6436 15.9636C21.5615 16.1178 21.7775 16.7893 21.1161 17.4516L20.0002 18.5767C19.8112 18.7673 19.7077 19.1347 19.7662 19.3979L20.0857 20.7906C20.3377 21.893 19.7572 22.3195 18.7898 21.7433L17.4445 20.9403C17.2015 20.7952 16.801 20.7952 16.5536 20.9403L15.2082 21.7433C14.2453 22.3195 13.6604 21.8885 13.9124 20.7906L14.2318 19.3979C14.2903 19.1347 14.1868 18.7673 13.9979 18.5767L12.882 17.4516C12.225 16.7893 12.4365 16.1178 13.3544 15.9636L14.7898 15.7231C15.0282 15.6823 15.3162 15.4691 15.4242 15.2468L16.2161 13.6499C16.6481 12.7834 17.35 12.7834 17.7774 13.6499Z',
  d2: 'M18 2V4M6 2V4',
  d3: 'M21.4997 11.5C21.4957 7.63364 21.4267 5.62803 20.2479 4.35364C18.9958 3 16.9805 3 12.95 3H11.05C7.01949 3 5.00424 3 3.75212 4.35364C2.5 5.70728 2.5 7.88594 2.5 12.2432V12.7568C2.5 17.1141 2.5 19.2927 3.75212 20.6464C4.94594 21.937 6.83349 21.9971 10.5 21.9999',
  d4: 'M3 8H21',
  d5: 'M21.5 12.2432V12.7568C21.5 14.2217 21.5 15.4404 21.4524 16.4643C21.3477 16.2204 21.0722 16.0356 20.6436 15.9636L19.2083 15.7231C18.9653 15.6823 18.6773 15.4691 18.5693 15.2468L17.7774 13.6499C17.35 12.7834 16.6481 12.7834 16.2161 13.6499L15.4242 15.2468C15.3162 15.4691 15.0282 15.6823 14.7898 15.7231L13.3544 15.9636C12.4365 16.1178 12.225 16.7893 12.882 17.4516L13.9979 18.5767C14.1868 18.7673 14.2903 19.1347 14.2318 19.3979L13.9124 20.7906C13.7431 21.5281 13.9515 21.9647 14.3984 21.9972C13.9467 22 13.4648 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 10.5138 2.5 9.12764 2.57828 8H21.4217C21.5 9.12764 21.5 10.5138 21.5 12.2432Z',
  d6: 'M14.5215 21.9963C16.3042 21.9829 17.6074 21.9203 18.5977 21.6286L17.4445 20.9403C17.2015 20.7952 16.801 20.7952 16.5536 20.9403L15.2082 21.7433C14.9489 21.8985 14.717 21.9806 14.5215 21.9963Z',
  d7: 'M20.0893 20.8067C20.1435 20.7555 20.1963 20.7021 20.2479 20.6464C20.9977 19.8357 21.2985 18.7292 21.4192 17.0362C21.3561 17.1718 21.2556 17.3119 21.1161 17.4516L20.0002 18.5767C19.8112 18.7673 19.7077 19.1347 19.7662 19.3979L20.0857 20.7906C20.0869 20.796 20.0881 20.8014 20.0893 20.8067Z',
  d8: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.77848 22.1475 4.73022 22.5558 5.87053 22.7641C6.97469 22.9658 8.34133 22.9939 9.99696 22.999C10.5492 23.0007 10.9983 22.5543 11 22.002C11.0017 21.4497 10.5553 21.0007 10.003 20.999C8.31813 20.9939 7.12999 20.961 6.22993 20.7966C5.366 20.6388 4.86408 20.3758 4.48622 19.9673C4.06263 19.5094 3.79327 18.8656 3.64887 17.7045C3.50182 16.5221 3.5 14.9616 3.5 12.7568V12.2432C3.5 11.1847 3.50042 10.2746 3.51713 9.48363C3.52283 9.2139 3.74413 9 4.01391 9H19.986C20.2558 9 20.4771 9.21402 20.4828 9.48374C20.4955 10.0821 20.499 10.7502 20.4997 11.501C20.5003 12.0533 20.9485 12.5006 21.5008 12.5C22.0531 12.4994 22.5003 12.0512 22.4997 11.499C22.4977 9.58334 22.4813 8.04001 22.3041 6.81198C22.1236 5.56147 21.7617 4.51759 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2Z',
  d9: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d10: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d11: 'M16.9985 13C17.6681 13 18.1264 13.5022 18.3802 14.0162L19.1311 15.5308C19.1575 15.5625 19.1932 15.5887 19.2312 15.6047L20.5875 15.832C21.1503 15.9266 21.7399 16.2241 21.9383 16.8464C22.1363 17.4678 21.8291 18.052 21.4251 18.457L21.4242 18.4579L20.3701 19.521C20.348 19.5573 20.3313 19.6155 20.3323 19.6581L20.634 20.9737C20.7674 21.5571 20.7702 22.3269 20.1793 22.7613C19.5854 23.1979 18.8513 22.959 18.3381 22.6533L17.0657 21.8938C17.0224 21.8842 16.9731 21.8811 16.9302 21.895L15.6605 22.653C15.1459 22.9609 14.4134 23.196 13.8202 22.7595C13.2306 22.3257 13.23 21.5581 13.3642 20.9731L13.6658 19.6581C13.667 19.6115 13.6521 19.5606 13.628 19.521L12.5722 18.4562C12.1706 18.0513 11.8647 17.4678 12.061 16.8477C12.2583 16.2248 12.8474 15.9266 13.411 15.8319L14.7634 15.6053C14.8015 15.5882 14.8344 15.5614 14.8626 15.5309L15.6139 14.0157L15.6146 14.0144C15.8704 13.5012 16.3299 13 16.9985 13Z',
  d12: 'M17.4607 2.00146V5.98385M6.49023 2.00146V5.98385',
  d13: 'M20.9516 12.953V3.99268H3V21.9134H10.9785',
  d14: 'M3 8.97021H20.9516',
  d15: 'M16.4429 13.3989C16.4731 13.3539 16.5393 13.3549 16.5681 13.4007L18.08 15.8072L20.945 16.6108C20.9971 16.6254 21.017 16.689 20.9826 16.7309L19.118 19.0066L19.3178 21.9177C19.3215 21.9717 19.2689 22.0117 19.2182 21.9936L16.507 21.0236L13.6899 21.9948C13.639 22.0124 13.5868 21.9717 13.5912 21.9178L13.8242 19.0066L11.9923 16.7301C11.9586 16.6883 11.9783 16.6255 12.0298 16.6107L14.8276 15.8072L16.4429 13.3989Z',
  d16: 'M17.25 14L18.9187 16.4179L21.75 17.2467L19.95 19.5699L20.0312 22.5L17.25 21.5179L14.4688 22.5L14.55 19.5699L12.75 17.2467L15.5813 16.4179L17.25 14Z',
  d17: 'M16.5 1.5V3H7.5V1.5H5.5V3H3C2.58579 3 2.25 3.33579 2.25 3.75V21.525C2.25 22.0635 2.68652 22.5 3.225 22.5H11V20.55H4.2V9.5H19.8V13.025H21.75V3.75C21.75 3.33579 21.4142 3 21 3H18.5V1.5H16.5Z',
};

export const IconCalendarFavorite01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-01-stroke-rounded IconCalendarFavorite01StrokeRounded"
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

export const IconCalendarFavorite01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-01-duotone-rounded IconCalendarFavorite01DuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      </g>
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

export const IconCalendarFavorite01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-01-twotone-rounded IconCalendarFavorite01TwotoneRounded"
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

export const IconCalendarFavorite01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-01-solid-rounded IconCalendarFavorite01SolidRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarFavorite01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-01-bulk-rounded IconCalendarFavorite01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarFavorite01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-01-stroke-sharp IconCalendarFavorite01StrokeSharp"
    >
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarFavorite01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-favorite-01-solid-sharp IconCalendarFavorite01SolidSharp"
    >
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCalendarFavorite01: TheIconSelfPack = {
  name: 'CalendarFavorite01',
  StrokeRounded: IconCalendarFavorite01StrokeRounded,
  DuotoneRounded: IconCalendarFavorite01DuotoneRounded,
  TwotoneRounded: IconCalendarFavorite01TwotoneRounded,
  SolidRounded: IconCalendarFavorite01SolidRounded,
  BulkRounded: IconCalendarFavorite01BulkRounded,
  StrokeSharp: IconCalendarFavorite01StrokeSharp,
  SolidSharp: IconCalendarFavorite01SolidSharp,
};