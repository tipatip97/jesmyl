import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 2V4M6 2V4',
  d2: 'M3 8H21',
  d3: 'M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z',
  d4: 'M12 17.5V18.5M12 17.5C11.1324 17.5 10.368 17.0581 9.91974 16.387M12 17.5C12.8676 17.5 13.632 17.0581 14.0803 16.387M12 12.5C12.8677 12.5 13.6321 12.942 14.0804 13.6131M12 12.5C11.1323 12.5 10.3679 12.942 9.91964 13.6131M12 12.5V11.5M15 13L14.0804 13.6131M9.00032 17L9.91974 16.387M9 13L9.91964 13.6131M14.9997 17L14.0803 16.387M14.0804 13.6131C14.3454 14.01 14.5 14.4869 14.5 15C14.5 15.5131 14.3454 15.9901 14.0803 16.387M9.91964 13.6131C9.65455 14.01 9.5 14.4869 9.5 15C9.5 15.5131 9.65459 15.9901 9.91974 16.387',
  d5: 'M21.4217 8C21.5 9.12764 21.5 10.5138 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 10.5138 2.5 9.12764 2.57828 8H21.4217ZM12 12.5C12.8677 12.5 13.6321 12.942 14.0804 13.6131C14.3454 14.01 14.5 14.4869 14.5 15C14.5 15.5131 14.3454 15.9901 14.0803 16.387C13.632 17.0581 12.8676 17.5 12 17.5C11.1324 17.5 10.368 17.0581 9.91974 16.387C9.65459 15.9901 9.5 15.5131 9.5 15C9.5 14.4869 9.65455 14.01 9.91964 13.6131C10.3679 12.942 11.1323 12.5 12 12.5Z',
  d6: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d7: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d8: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.8568 22.2322 4.92535 22.6329 6.21533 22.8204C7.45142 23.0001 9.02293 23 10.9712 23H13.0288C14.9771 23 16.5486 23.0001 17.7847 22.8204C19.0747 22.6329 20.1432 22.2322 20.982 21.3254C21.8105 20.4297 22.1672 19.3073 22.3358 17.9513C22.5 16.6311 22.5 14.9459 22.5 12.8261V12.1739C22.5 10.0541 22.5 8.36895 22.3358 7.04866C22.1672 5.69272 21.8105 4.57031 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2ZM4.49783 9C4.03921 9 3.8099 9 3.66385 9.14417C3.51781 9.28833 3.51487 9.51472 3.509 9.96751C3.50027 10.6407 3.5 11.3942 3.5 12.2432V12.7568C3.5 14.9616 3.50182 16.5221 3.64887 17.7045C3.79327 18.8656 4.06263 19.5094 4.48622 19.9673C4.89956 20.4142 5.4647 20.6903 6.503 20.8412C7.57858 20.9975 9.00425 21 11.05 21H12.95C14.9957 21 16.4214 20.9975 17.497 20.8412C18.5353 20.6903 19.1004 20.4142 19.5138 19.9673C19.9374 19.5094 20.2067 18.8656 20.3511 17.7045C20.4982 16.5221 20.5 14.9616 20.5 12.7568V12.2432C20.5 11.3942 20.4997 10.6407 20.491 9.96751C20.4851 9.51472 20.4822 9.28833 20.3362 9.14417C20.1901 9 19.9608 9 19.5022 9H4.49783Z',
  d9: 'M12 10.75C12.4779 10.75 12.8654 11.1392 12.8654 11.6193V11.8323C13.3442 11.9641 13.7791 12.2025 14.143 12.52L14.4045 12.3449C14.8022 12.0785 15.3394 12.1865 15.6046 12.586C15.8697 12.9854 15.7622 13.5252 15.3646 13.7915L15.1036 13.9662C15.211 14.2917 15.2692 14.6394 15.2692 15C15.2692 15.3607 15.211 15.7085 15.1036 16.0339L15.3643 16.2085C15.7619 16.4748 15.8694 17.0146 15.6043 17.414C15.3391 17.8135 14.8019 17.9215 14.4042 17.6551L14.1429 17.4801C13.779 17.7976 13.3442 18.0359 12.8654 18.1677V18.3807C12.8654 18.8608 12.4779 19.25 12 19.25C11.5221 19.25 11.1346 18.8608 11.1346 18.3807V18.1677C10.6558 18.0359 10.221 17.7976 9.85713 17.4801L9.5958 17.6551C9.19814 17.9215 8.66086 17.8135 8.39575 17.414C8.13063 17.0146 8.23807 16.4748 8.63573 16.2085L8.89641 16.0339C8.78899 15.7085 8.73085 15.3607 8.73085 15C8.73085 14.6394 8.78897 14.2917 8.89635 13.9662L8.63542 13.7915C8.23777 13.5252 8.13033 12.9854 8.39544 12.586C8.66056 12.1865 9.19784 12.0785 9.59549 12.3449L9.85699 12.52C10.2209 12.2025 10.6558 11.9641 11.1346 11.8323V11.6193C11.1346 11.1392 11.5221 10.75 12 10.75ZM12 13.4545C11.4669 13.4545 10.9966 13.7262 10.7193 14.1433C10.5565 14.3881 10.4616 14.6816 10.4616 15C10.4616 15.3184 10.5565 15.612 10.7194 15.8568C10.9967 16.2738 11.4669 16.5455 12 16.5455C12.5331 16.5455 13.0033 16.2738 13.2806 15.8568C13.4435 15.612 13.5384 15.3184 13.5384 15C13.5384 14.6816 13.4435 14.3881 13.2807 14.1433C13.0034 13.7262 12.5331 13.4545 12 13.4545Z',
  d10: 'M17.5 2V6M6.5 2V6',
  d11: 'M21 4H3V22H21V4Z',
  d12: 'M3 9H21',
  d13: 'M12 18.3929V20M12 18.3929C10.9717 18.3929 10.0658 17.8815 9.5345 17.105M12 18.3929C13.0283 18.3929 13.9342 17.8815 14.4655 17.105M12 12.6071C13.0283 12.6071 13.9343 13.1186 14.4656 13.8952M12 12.6071C10.9717 12.6071 10.0657 13.1186 9.53439 13.8952M12 12.6071V11M16 12.8L14.4656 13.8952M8 18.2L9.5345 17.105M8 12.8L9.53439 13.8952M16 18.2L14.4655 17.105M14.4656 13.8952C14.7798 14.3544 14.963 14.9063 14.963 15.5C14.963 16.0938 14.7797 16.6457 14.4655 17.105M9.53439 13.8952C9.22021 14.3544 9.03704 14.9063 9.03704 15.5C9.03704 16.0938 9.22025 16.6457 9.5345 17.105',
  d14: 'M11.2508 11.7875C10.6718 11.9195 10.1498 12.201 9.72873 12.5888L8.94107 12.0177L8.06055 13.2321L8.88213 13.8278C8.73756 14.1994 8.65822 14.6033 8.65822 15.0249C8.65822 15.4465 8.73758 15.8504 8.88217 16.2221L8.06061 16.8177L8.941 18.0321L9.72881 17.461C10.1499 17.8489 10.6718 18.1303 11.2508 18.2623V19.0249H12.7508V18.2623C13.3298 18.1303 13.8518 17.8489 14.2728 17.461L15.0606 18.0321L15.941 16.8177L15.1195 16.2221C15.264 15.8504 15.3434 15.4465 15.3434 15.0249C15.3434 14.6033 15.2641 14.1994 15.1195 13.8278L15.9411 13.2321L15.0605 12.0177L14.2729 12.5888C13.8518 12.201 13.3299 11.9195 12.7508 11.7875V11.0249H11.2508V11.7875ZM12.0008 13.2035C11.3593 13.2035 10.796 13.5266 10.4655 14.0174C10.2711 14.3059 10.1582 14.6514 10.1582 15.0249C10.1582 15.3984 10.2711 15.744 10.4655 16.0326C10.796 16.5232 11.3593 16.8463 12.0008 16.8463C12.6423 16.8463 13.2056 16.5232 13.5361 16.0326C13.7305 15.744 13.8434 15.3984 13.8434 15.0249C13.8434 14.6514 13.7305 14.3059 13.5361 14.0174C13.2057 13.5266 12.6423 13.2035 12.0008 13.2035Z',
  d15: 'M7.5 1.5V3H16.5V1.5H18.5V3H21C21.4142 3 21.75 3.33579 21.75 3.75V21.525C21.75 22.0635 21.3135 22.5 20.775 22.5H3.225C2.68652 22.5 2.25 22.0635 2.25 21.525V3.75C2.25 3.33579 2.58579 3 3 3H5.5V1.5H7.5ZM19.8 20.55V9.5H4.2V20.55H19.8Z',
} as const;

export const IconCalendarSetting02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-02-stroke-rounded IconCalendarSetting02StrokeRounded"
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

export const IconCalendarSetting02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-02-duotone-rounded IconCalendarSetting02DuotoneRounded"
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

export const IconCalendarSetting02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-02-twotone-rounded IconCalendarSetting02TwotoneRounded"
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

export const IconCalendarSetting02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-02-solid-rounded IconCalendarSetting02SolidRounded"
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

export const IconCalendarSetting02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-02-bulk-rounded IconCalendarSetting02BulkRounded"
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

export const IconCalendarSetting02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-02-stroke-sharp IconCalendarSetting02StrokeSharp"
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

export const IconCalendarSetting02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-setting-02-solid-sharp IconCalendarSetting02SolidSharp"
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

export const iconPackOfCalendarSetting02: TheIconSelfPack = {
  name: 'CalendarSetting02',
  StrokeRounded: IconCalendarSetting02StrokeRounded,
  DuotoneRounded: IconCalendarSetting02DuotoneRounded,
  TwotoneRounded: IconCalendarSetting02TwotoneRounded,
  SolidRounded: IconCalendarSetting02SolidRounded,
  BulkRounded: IconCalendarSetting02BulkRounded,
  StrokeSharp: IconCalendarSetting02StrokeSharp,
  SolidSharp: IconCalendarSetting02SolidSharp,
};