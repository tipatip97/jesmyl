import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 2V4M6 2V4',
  d2: 'M3 8H21',
  d3: 'M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z',
  d4: 'M15 15L9 15M15 15C15 15.7002 13.0057 17.0085 12.5 17.5M15 15C15 14.2998 13.0057 12.9915 12.5 12.5',
  d5: 'M21.5 12.7568V12.2432C21.5 10.5138 21.5 9.12764 21.4217 8H2.57828C2.5 9.12764 2.5 10.5138 2.5 12.2432V12.7568C2.5 17.1141 2.5 19.2927 3.75212 20.6464C5.00424 22 7.01949 22 11.05 22H12.95C16.9805 22 18.9958 22 20.2479 20.6464C21.5 19.2927 21.5 17.1141 21.5 12.7568Z',
  d6: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d7: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d8: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.8568 22.2322 4.92535 22.6329 6.21533 22.8204C7.45142 23.0001 9.02293 23 10.9712 23H13.0288C14.9771 23 16.5486 23.0001 17.7847 22.8204C19.0747 22.6329 20.1432 22.2322 20.982 21.3254C21.8105 20.4297 22.1672 19.3073 22.3358 17.9513C22.5 16.6311 22.5 14.9459 22.5 12.8261V12.1739C22.5 10.0541 22.5 8.36895 22.3358 7.04866C22.1672 5.69272 21.8105 4.57031 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2ZM4.49783 9C4.03921 9 3.8099 9 3.66385 9.14417C3.51781 9.28833 3.51487 9.51472 3.509 9.96751C3.50027 10.6407 3.5 11.3942 3.5 12.2432V12.7568C3.5 14.9616 3.50182 16.5221 3.64887 17.7045C3.79327 18.8656 4.06263 19.5094 4.48622 19.9673C4.89956 20.4142 5.4647 20.6903 6.503 20.8412C7.57858 20.9975 9.00425 21 11.05 21H12.95C14.9957 21 16.4214 20.9975 17.497 20.8412C18.5353 20.6903 19.1004 20.4142 19.5138 19.9673C19.9374 19.5094 20.2067 18.8656 20.3511 17.7045C20.4982 16.5221 20.5 14.9616 20.5 12.7568V12.2432C20.5 11.3942 20.4997 10.6407 20.491 9.96751C20.4851 9.51472 20.4822 9.28833 20.3362 9.14417C20.1901 9 19.9608 9 19.5022 9H4.49783Z',
  d9: 'M12 14.0165L12 13.2783C11.9998 13.1402 11.9996 12.9622 12.0227 12.8139C12.048 12.6511 12.1374 12.2788 12.5352 12.089C12.9295 11.9007 13.2796 12.057 13.4285 12.1396C13.561 12.213 13.7023 12.3226 13.8106 12.4067L13.8353 12.4259C14.2133 12.7185 14.7096 13.1217 15.1173 13.5206C15.3198 13.7187 15.5188 13.9334 15.6724 14.1463C15.8012 14.325 16 14.6363 16 15C16 15.3637 15.8012 15.675 15.6724 15.8537C15.5188 16.0666 15.3198 16.2813 15.1173 16.4794C14.7096 16.8783 14.2133 17.2815 13.8353 17.5741L13.8106 17.5933C13.7023 17.6774 13.561 17.787 13.4285 17.8604C13.2796 17.943 12.9295 18.0993 12.5352 17.911C12.1374 17.7212 12.048 17.3489 12.0227 17.1861C11.9996 17.0378 11.9998 16.8598 12 16.7217L12 15.9832L9 15.9832C8.44772 15.9832 8 15.5429 8 14.9998C8 14.4568 8.44772 14.0165 9 14.0165L12 14.0165Z',
  d10: 'M17.5 2V6M6.5 2V6',
  d11: 'M21 4H3V22H21V4Z',
  d12: 'M3 9H21',
  d13: 'M9 15.5L14.5866 15.5M12.5 13L15 15.5L12.5 18',
  d14: 'M12.6581 15.775L11.4384 16.9946L12.4991 18.0553L15.5294 15.025L12.4991 11.9946L11.4384 13.0553L12.6581 14.275H8.46875V15.775H12.6581Z',
  d15: 'M7.5 1.5V3H16.5V1.5H18.5V3H21C21.4142 3 21.75 3.33579 21.75 3.75V21.525C21.75 22.0635 21.3135 22.5 20.775 22.5H3.225C2.68652 22.5 2.25 22.0635 2.25 21.525V3.75C2.25 3.33579 2.58579 3 3 3H5.5V1.5H7.5ZM19.8 20.55V9.5H4.2V20.55H19.8Z',
} as const;

export const IconCalendarCheckOut02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-check-out-02-stroke-rounded IconCalendarCheckOut02StrokeRounded"
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

export const IconCalendarCheckOut02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-check-out-02-duotone-rounded IconCalendarCheckOut02DuotoneRounded"
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

export const IconCalendarCheckOut02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-check-out-02-twotone-rounded IconCalendarCheckOut02TwotoneRounded"
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

export const IconCalendarCheckOut02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-check-out-02-solid-rounded IconCalendarCheckOut02SolidRounded"
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

export const IconCalendarCheckOut02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-check-out-02-bulk-rounded IconCalendarCheckOut02BulkRounded"
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

export const IconCalendarCheckOut02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-check-out-02-stroke-sharp IconCalendarCheckOut02StrokeSharp"
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

export const IconCalendarCheckOut02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-check-out-02-solid-sharp IconCalendarCheckOut02SolidSharp"
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

export const iconPackOfCalendarCheckOut02: TheIconSelfPack = {
  name: 'CalendarCheckOut02',
  StrokeRounded: IconCalendarCheckOut02StrokeRounded,
  DuotoneRounded: IconCalendarCheckOut02DuotoneRounded,
  TwotoneRounded: IconCalendarCheckOut02TwotoneRounded,
  SolidRounded: IconCalendarCheckOut02SolidRounded,
  BulkRounded: IconCalendarCheckOut02BulkRounded,
  StrokeSharp: IconCalendarCheckOut02StrokeSharp,
  SolidSharp: IconCalendarCheckOut02SolidSharp,
};