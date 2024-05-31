import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 2V4M6 2V4',
  d2: 'M3 8H21',
  d3: 'M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z',
  d4: 'M9.3881 12.3314C10.3267 11.7831 11.1459 12.004 11.638 12.356C11.8398 12.5003 11.9406 12.5725 12 12.5725C12.0594 12.5725 12.1602 12.5003 12.362 12.356C12.8541 12.004 13.6733 11.7831 14.6119 12.3314C15.8437 13.051 16.1224 15.425 13.2812 17.4278C12.74 17.8093 12.4694 18 12 18C11.5306 18 11.26 17.8093 10.7188 17.4278C7.8776 15.425 8.15632 13.051 9.3881 12.3314Z',
  d5: 'M21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 10.5138 2.5 9.12764 2.57828 8H21.4217C21.5 9.12764 21.5 10.5138 21.5 12.2432ZM11.638 12.356C11.1459 12.004 10.3267 11.7831 9.3881 12.3314C8.15632 13.051 7.8776 15.425 10.7188 17.4278C11.26 17.8093 11.5306 18 12 18C12.4694 18 12.74 17.8093 13.2812 17.4278C16.1224 15.425 15.8437 13.051 14.6119 12.3314C13.6733 11.7831 12.8541 12.004 12.362 12.356C12.1602 12.5003 12.0594 12.5725 12 12.5725C11.9406 12.5725 11.8398 12.5003 11.638 12.356Z',
  d6: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d7: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d8: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.8568 22.2322 4.92535 22.6329 6.21533 22.8204C7.45142 23.0001 9.02293 23 10.9712 23H13.0288C14.9771 23 16.5486 23.0001 17.7847 22.8204C19.0747 22.6329 20.1432 22.2322 20.982 21.3254C21.8105 20.4297 22.1672 19.3073 22.3358 17.9513C22.5 16.6311 22.5 14.9459 22.5 12.8261V12.1739C22.5 10.0541 22.5 8.36895 22.3358 7.04866C22.1672 5.69272 21.8105 4.57031 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2ZM4.49783 9C4.03921 9 3.8099 9 3.66385 9.14417C3.51781 9.28833 3.51487 9.51472 3.509 9.96751C3.50027 10.6407 3.5 11.3942 3.5 12.2432V12.7568C3.5 14.9616 3.50182 16.5221 3.64887 17.7045C3.79327 18.8656 4.06263 19.5094 4.48622 19.9673C4.89956 20.4142 5.4647 20.6903 6.503 20.8412C7.57858 20.9975 9.00425 21 11.05 21H12.95C14.9957 21 16.4214 20.9975 17.497 20.8412C18.5353 20.6903 19.1004 20.4142 19.5138 19.9673C19.9374 19.5094 20.2067 18.8656 20.3511 17.7045C20.4982 16.5221 20.5 14.9616 20.5 12.7568V12.2432C20.5 11.3942 20.4997 10.6407 20.491 9.96751C20.4851 9.51472 20.4822 9.28833 20.3362 9.14417C20.1901 9 19.9608 9 19.5022 9H4.49783Z',
  d9: 'M11.9997 11.6951C12.7034 11.2281 13.8048 10.9918 14.9899 11.684C15.9085 12.2207 16.3834 13.3166 16.2162 14.5032C16.0482 15.6964 15.2521 16.9561 13.7129 18.041L13.6447 18.0893C13.1619 18.4307 12.71 18.7503 11.9997 18.7503C11.2893 18.7503 10.8374 18.4307 10.3546 18.0893L10.2864 18.041C8.74724 16.9561 7.95111 15.6964 7.78308 14.5032C7.61597 13.3166 8.09079 12.2207 9.00945 11.684C10.1945 10.9918 11.296 11.2281 11.9997 11.6951Z',
  d10: 'M14.4002 12.7482C13.0031 12.0346 12 13.0866 12 13.0866C12 13.0866 10.9968 12.0346 9.59972 12.7482C7.90757 13.6126 7.78606 16.9974 12 18.5C16.2139 16.9974 16.0924 13.6126 14.4002 12.7482Z',
  d11: 'M17.5 2V6M6.5 2V6',
  d12: 'M21 4H3V22H21V4Z',
  d13: 'M3 9H21',
  d14: 'M7.5 1.5V3H16.5V1.5H18.5V3H21C21.4142 3 21.75 3.33579 21.75 3.75V21.525C21.75 22.0635 21.3135 22.5 20.775 22.5H3.225C2.68652 22.5 2.25 22.0635 2.25 21.525V3.75C2.25 3.33579 2.58579 3 3 3H5.5V1.5H7.5ZM19.8 20.55V9.5H4.2V20.55H19.8Z',
  d15: 'M14.4002 12.2732C13.0031 11.5595 12 12.6115 12 12.6115C12 12.6115 10.9968 11.5595 9.59972 12.2731C7.90757 13.1375 7.78606 16.5223 12 18.0249C16.2139 16.5223 16.0924 13.1375 14.4002 12.2732Z',
} as const;

export const IconCalendarLove02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-02-stroke-rounded IconCalendarLove02StrokeRounded"
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

export const IconCalendarLove02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-02-duotone-rounded IconCalendarLove02DuotoneRounded"
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

export const IconCalendarLove02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-02-twotone-rounded IconCalendarLove02TwotoneRounded"
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

export const IconCalendarLove02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-02-solid-rounded IconCalendarLove02SolidRounded"
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

export const IconCalendarLove02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-02-bulk-rounded IconCalendarLove02BulkRounded"
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

export const IconCalendarLove02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-02-stroke-sharp IconCalendarLove02StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarLove02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-02-solid-sharp IconCalendarLove02SolidSharp"
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

export const iconPackOfCalendarLove02: TheIconSelfPack = {
  name: 'CalendarLove02',
  StrokeRounded: IconCalendarLove02StrokeRounded,
  DuotoneRounded: IconCalendarLove02DuotoneRounded,
  TwotoneRounded: IconCalendarLove02TwotoneRounded,
  SolidRounded: IconCalendarLove02SolidRounded,
  BulkRounded: IconCalendarLove02BulkRounded,
  StrokeSharp: IconCalendarLove02StrokeSharp,
  SolidSharp: IconCalendarLove02SolidSharp,
};