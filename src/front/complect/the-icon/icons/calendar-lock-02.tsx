import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 2V4M6 2V4',
  d2: 'M3 8H21',
  d3: 'M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z',
  d4: 'M10.484 14.1864L10.484 13.0293C10.484 12.8584 10.4913 12.6854 10.5547 12.5258C10.7232 12.101 11.1697 11.5444 11.9825 11.5444C12.7952 11.5444 13.2592 12.101 13.4278 12.5258C13.4911 12.6854 13.4985 12.8584 13.4985 13.0293L13.4985 14.1864M10.5437 19.0322H13.4562C14.3137 19.0322 15.0088 18.361 15.0088 17.533V15.8674C15.0088 15.0394 14.3137 14.3682 13.4562 14.3682H10.5437C9.6863 14.3682 8.99121 15.0394 8.99121 15.8674V17.533C8.99121 18.361 9.6863 19.0322 10.5437 19.0322Z',
  d5: 'M21.5 12.5782V13.0918C21.5 17.4491 21.5 19.6277 20.2479 20.9814C18.9958 22.335 16.9805 22.335 12.95 22.335H11.05C7.01949 22.335 5.00424 22.335 3.75212 20.9814C2.5 19.6277 2.5 17.4491 2.5 13.0918V12.5782C2.5 10.8488 2.5 9.4626 2.57828 8.33496H21.4217C21.5 9.4626 21.5 10.8488 21.5 12.5782ZM10.3985 14.6475L10.3984 13.335C10.3984 12.5066 11.1147 11.835 11.9983 11.835C12.8819 11.835 13.5982 12.5065 13.5983 13.3348V14.6475H12.0628C12.6324 14.6484 13.1527 14.6606 13.6651 14.6832C14.2965 14.7111 14.8152 15.183 14.8996 15.7852C14.9546 16.1783 15 16.581 15 16.9912C15 17.4015 14.9546 17.8042 14.8996 18.1973C14.8152 18.7995 14.2965 19.2714 13.6651 19.2993C13.1339 19.3228 12.5943 19.335 12 19.335C11.4057 19.335 10.8661 19.3228 10.3349 19.2993C9.70355 19.2714 9.18476 18.7995 9.10043 18.1973C9.04539 17.8042 9 17.4015 9 16.9912C9 16.581 9.04539 16.1783 9.10043 15.7852C9.18476 15.183 9.70355 14.7111 10.3349 14.6832C10.8473 14.6606 11.3676 14.6484 11.9372 14.6475H10.3985Z',
  d6: 'M18 2.33496V4.33496M6 2.33496V4.33496',
  d7: 'M3 8.33496H21',
  d8: 'M2.5 12.5782C2.5 8.2209 2.5 6.04224 3.75212 4.6886C5.00424 3.33496 7.01949 3.33496 11.05 3.33496H12.95C16.9805 3.33496 18.9958 3.33496 20.2479 4.6886C21.5 6.04224 21.5 8.2209 21.5 12.5782V13.0918C21.5 17.4491 21.5 19.6277 20.2479 20.9814C18.9958 22.335 16.9805 22.335 12.95 22.335H11.05C7.01949 22.335 5.00424 22.335 3.75212 20.9814C2.5 19.6277 2.5 17.4491 2.5 13.0918V12.5782Z',
  d9: 'M10.3852 14.657V13.4237C10.3852 13.229 10.3938 13.0319 10.4672 12.85C10.6626 12.366 11.0374 11.8154 11.9797 11.8154C12.9221 11.8154 13.3212 12.366 13.5166 12.85C13.59 13.0319 13.5986 13.229 13.5986 13.4237V14.657M10.3852 19.3312H13.2935C13.6039 19.3312 13.9199 19.2975 14.1961 19.1558C14.2788 19.1134 14.3514 19.0693 14.4153 19.0241C15.0193 18.5966 14.9958 17.7151 14.9958 16.9752V16.3496C14.9202 15.368 14.7021 14.9149 13.6876 14.657H10.3109C9.6447 14.7668 9.35054 15.047 9.1665 15.5771C9.05249 15.9054 9.03223 16.2573 9.03223 16.6049V17.2693C9.03223 17.7422 9.02344 18.2416 9.27416 18.6425C9.47699 18.9668 9.82085 19.249 10.3852 19.3312Z',
  d10: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d11: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d12: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.8568 22.2322 4.92535 22.6329 6.21533 22.8204C7.45142 23.0001 9.02293 23 10.9712 23H13.0288C14.9771 23 16.5486 23.0001 17.7847 22.8204C19.0747 22.6329 20.1432 22.2322 20.982 21.3254C21.8105 20.4297 22.1672 19.3073 22.3358 17.9513C22.5 16.6311 22.5 14.9459 22.5 12.8261V12.1739C22.5 10.0541 22.5 8.36895 22.3358 7.04866C22.1672 5.69272 21.8105 4.57031 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2ZM4.49783 9C4.03921 9 3.8099 9 3.66385 9.14417C3.51781 9.28833 3.51487 9.51472 3.509 9.96751C3.50027 10.6407 3.5 11.3942 3.5 12.2432V12.7568C3.5 14.9616 3.50182 16.5221 3.64887 17.7045C3.79327 18.8656 4.06263 19.5094 4.48622 19.9673C4.89956 20.4142 5.4647 20.6903 6.503 20.8412C7.57858 20.9975 9.00425 21 11.05 21H12.95C14.9957 21 16.4214 20.9975 17.497 20.8412C18.5353 20.6903 19.1004 20.4142 19.5138 19.9673C19.9374 19.5094 20.2067 18.8656 20.3511 17.7045C20.4982 16.5221 20.5 14.9616 20.5 12.7568V12.2432C20.5 11.3942 20.4997 10.6407 20.491 9.96751C20.4851 9.51472 20.4822 9.28833 20.3362 9.14417C20.1901 9 19.9608 9 19.5022 9H4.49783Z',
  d13: 'M12.0003 12C11.4846 12 11.1504 12.3806 11.1504 12.75L11.1504 13.117C11.1504 13.213 11.1504 13.261 11.1803 13.2904C11.2101 13.3198 11.2583 13.319 11.3547 13.3175C11.564 13.3142 11.7784 13.3125 12 13.3125C12.2219 13.3125 12.4364 13.3142 12.646 13.3175C12.7424 13.319 12.7905 13.3198 12.8204 13.2904C12.8502 13.261 12.8502 13.213 12.8502 13.117L12.8502 12.7499C12.8502 12.3806 12.516 12 12.0003 12ZM14.4766 13.5386C14.4133 13.5092 14.3817 13.4946 14.366 13.47C14.3503 13.4453 14.3502 13.4128 14.3502 13.3477L14.3502 12.7498C14.3501 11.4624 13.2517 10.5 12.0003 10.5C10.7488 10.5 9.65031 11.4625 9.65039 12.7501L9.65043 13.3474C9.65043 13.4125 9.65044 13.445 9.6347 13.4697C9.61897 13.4943 9.58731 13.509 9.52397 13.5383C8.90985 13.8227 8.4553 14.399 8.35768 15.0962C8.30114 15.4999 8.25 15.9435 8.25 16.4062C8.25 16.869 8.30114 17.3126 8.35768 17.7163C8.49328 18.6848 9.31764 19.42 10.3018 19.4635C10.8443 19.4875 11.395 19.5 12 19.5C12.605 19.5 13.1557 19.4875 13.6982 19.4635C14.6824 19.42 15.5067 18.6848 15.6423 17.7163C15.6989 17.3126 15.75 16.869 15.75 16.4062C15.75 15.9435 15.6989 15.4999 15.6423 15.0962C15.5447 14.3993 15.0905 13.8231 14.4766 13.5386Z',
  d14: 'M13.5 15H15V19H9V15H10.5M13.5 15V13.5C13.5 12.6716 12.8284 12 12 12C11.1716 12 10.5 12.6716 10.5 13.5V15M13.5 15H10.5',
  d15: 'M17.5 2V6M6.5 2V6',
  d16: 'M21 4H3V22H21V4Z',
  d17: 'M3 9H21',
  d18: 'M12.002 10.7749C10.7593 10.7749 9.75195 11.7823 9.75195 13.0249V13.7749H8.25195V19.2749H15.752V13.7749H14.252V13.0249C14.252 11.7823 13.2446 10.7749 12.002 10.7749ZM11.252 13.0249V13.7749H12.752V13.0249C12.752 12.6107 12.4162 12.2749 12.002 12.2749C11.5877 12.2749 11.252 12.6107 11.252 13.0249Z',
  d19: 'M7.50195 1.5V3H16.502V1.5H18.502V3H21.002C21.4162 3 21.752 3.33579 21.752 3.75V21.525C21.752 22.0635 21.3154 22.5 20.777 22.5H3.22695C2.68848 22.5 2.25195 22.0635 2.25195 21.525V3.75C2.25195 3.33579 2.58774 3 3.00195 3H5.50195V1.5H7.50195ZM19.802 20.55V9.5H4.20195V20.55H19.802Z',
} as const;

export const IconCalendarLock02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-02-stroke-rounded IconCalendarLock02StrokeRounded"
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

export const IconCalendarLock02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-02-duotone-rounded IconCalendarLock02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarLock02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-02-twotone-rounded IconCalendarLock02TwotoneRounded"
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

export const IconCalendarLock02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-02-solid-rounded IconCalendarLock02SolidRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
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
    </TheIconWrapper>
  );
};

export const IconCalendarLock02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-02-bulk-rounded IconCalendarLock02BulkRounded"
    >
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconCalendarLock02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-02-stroke-sharp IconCalendarLock02StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarLock02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-02-solid-sharp IconCalendarLock02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d18} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d19} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCalendarLock02: TheIconSelfPack = {
  name: 'CalendarLock02',
  StrokeRounded: IconCalendarLock02StrokeRounded,
  DuotoneRounded: IconCalendarLock02DuotoneRounded,
  TwotoneRounded: IconCalendarLock02TwotoneRounded,
  SolidRounded: IconCalendarLock02SolidRounded,
  BulkRounded: IconCalendarLock02BulkRounded,
  StrokeSharp: IconCalendarLock02StrokeSharp,
  SolidSharp: IconCalendarLock02SolidSharp,
};