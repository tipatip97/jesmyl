import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5',
  d2: 'M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17',
  d3: 'M14.9336 10.9999C14.3683 11.9382 13.3396 12.5657 12.1644 12.5657C10.3801 12.5657 8.93359 11.1192 8.93359 9.3349C8.93359 8.15968 9.56109 7.13101 10.4993 6.56567',
  d4: 'M13.5 8H13.509',
  d5: 'M3.5 19.5V5.5C3.5 3.567 5.067 2 7 2H17C18.933 2 20.5 3.567 20.5 5.5V17',
  d6: 'M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5V5.5C3.5 3.567 5.067 2 7 2H17C18.933 2 20.5 3.567 20.5 5.5V17Z',
  d7: 'M14.9336 11.0007C14.3683 11.9389 13.3396 12.5664 12.1644 12.5664C10.3801 12.5664 8.93359 11.1199 8.93359 9.33564C8.93359 8.16041 9.56109 7.13174 10.4993 6.56641',
  d8: 'M16.75 19.5C16.75 17.567 18.317 16 20.25 16C20.8023 16 21.25 16.4477 21.25 17C21.25 17.5523 20.8023 18 20.25 18C19.4216 18 18.75 18.6716 18.75 19.5C18.75 20.3284 19.4216 21 20.25 21C20.8023 21 21.25 21.4477 21.25 22C21.25 22.5523 20.8023 23 20.25 23C18.317 23 16.75 21.433 16.75 19.5Z',
  d9: 'M2.75 19.5C2.75 17.567 4.317 16 6.25 16H20.25C20.8023 16 21.25 16.4477 21.25 17C21.25 17.5523 20.8023 18 20.25 18H6.25C5.42157 18 4.75 18.6716 4.75 19.5C4.75 20.3284 5.42157 21 6.25 21H20.25C20.8023 21 21.25 21.4477 21.25 22C21.25 22.5523 20.8023 23 20.25 23H6.25C4.317 23 2.75 21.433 2.75 19.5Z',
  d10: 'M2.75 19.5L2.75 5.5C2.75 3.15279 4.65279 1.25 7 1.25H17C19.3472 1.25 21.25 3.15279 21.25 5.5L21.25 17C21.25 17.4142 20.9142 17.75 20.5 17.75L6 17.75C5.0335 17.75 4.25 18.5335 4.25 19.5C4.25 19.9142 3.91421 20.25 3.5 20.25C3.08579 20.25 2.75 19.9142 2.75 19.5ZM11.0154 7.42308C11.4885 7.13804 11.6409 6.5235 11.3558 6.05045C11.0708 5.5774 10.4563 5.42499 9.98322 5.71003C8.75719 6.44878 7.93359 7.79561 7.93359 9.33579C7.93359 11.6724 9.82777 13.5666 12.1644 13.5666C13.7045 13.5666 15.0514 12.743 15.7901 11.5169C16.0752 11.0439 15.9227 10.4293 15.4497 10.1443C14.9767 9.85926 14.3621 10.0117 14.0771 10.4847C13.6851 11.1352 12.9746 11.5666 12.1644 11.5666C10.9323 11.5666 9.93359 10.5678 9.93359 9.33579C9.93359 8.5255 10.365 7.81501 11.0154 7.42308ZM13.4998 7.0009C12.9476 7.0009 12.4998 7.44862 12.4998 8.0009C12.4998 8.55319 12.9476 9.0009 13.4998 9.0009H13.5088C14.0611 9.0009 14.5088 8.55319 14.5088 8.0009C14.5088 7.44862 14.0611 7.0009 13.5088 7.0009H13.4998Z',
  d11: 'M6.25 23C4.317 23 2.75 21.433 2.75 19.5L2.75 5.5C2.75 3.15279 4.65279 1.25 7 1.25H17C19.3472 1.25 21.25 3.15279 21.25 5.5L21.25 17C21.25 17.5523 20.8023 18 20.25 18C19.4216 18 18.75 18.6716 18.75 19.5C18.75 20.3284 19.4216 21 20.25 21C20.8023 21 21.25 21.4477 21.25 22C21.25 22.5523 20.8023 23 20.25 23L6.25 23ZM16.75 19.5C16.75 18.9632 16.8708 18.4546 17.0868 18H6.25C5.42157 18 4.75 18.6716 4.75 19.5C4.75 20.3284 5.42157 21 6.25 21H17.0868C16.8708 20.5454 16.75 20.0368 16.75 19.5Z',
  d12: 'M11.3558 6.05045C11.6409 6.5235 11.4885 7.13804 11.0154 7.42308C10.365 7.81501 9.93359 8.5255 9.93359 9.33579C9.93359 10.5678 10.9323 11.5666 12.1644 11.5666C12.9746 11.5666 13.6851 11.1352 14.0771 10.4847C14.3621 10.0117 14.9767 9.85926 15.4497 10.1443C15.9227 10.4293 16.0752 11.0439 15.7901 11.5169C15.0514 12.743 13.7045 13.5666 12.1644 13.5666C9.82777 13.5666 7.93359 11.6724 7.93359 9.33579C7.93359 7.79561 8.7572 6.44878 9.98322 5.71003C10.4563 5.42499 11.0708 5.5774 11.3558 6.05045Z',
  d13: 'M12.4998 8.0009C12.4998 7.44862 12.9476 7.0009 13.4998 7.0009H13.5088C14.0611 7.0009 14.5088 7.44862 14.5088 8.0009C14.5088 8.55319 14.0611 9.0009 13.5088 9.0009H13.4998C12.9476 9.0009 12.4998 8.55319 12.4998 8.0009Z',
  d14: 'M15 10.4343C14.4347 11.3725 13.406 12 12.2308 12C10.4465 12 9 10.5535 9 8.76923C9 7.594 9.6275 6.56534 10.5657 6',
  d15: 'M13.5664 7.43457H13.5754',
  d16: 'M3.51693 19.0986V6.15635C3.34571 3.2928 4.485 2.21495 6.39664 2.00112L20.4854 2.00098V15.9996L18.4855 16.0099M3.51693 19.0986C3.51693 20.7524 4.83897 21.999 6.49074 21.999H18.4855M3.51693 19.0986C3.51693 17.4447 4.83897 16.0099 6.49074 16.0099H18.4855M18.4855 16.0099V21.999M20.501 21.999H18.4855',
  d17: 'M6.50195 1.25C4.43095 1.25 2.75207 2.92882 2.75195 4.99979L2.74805 18.9998C2.74805 21.0709 4.51389 22.75 6.69217 22.75H21.2494V20.875H19.5125V17.125H21.2494L21.2521 1.25H6.50195ZM6.69277 17.125H17.541V20.875H6.69276C5.60372 20.875 4.72085 20.0354 4.7207 19V18.9987C4.72146 17.9637 5.6041 17.125 6.69277 17.125ZM11.0838 6.85661C10.4334 7.24853 10.002 7.95903 10.002 8.76931C10.002 10.0013 11.0007 11.0001 12.2327 11.0001C13.043 11.0001 13.7535 10.5687 14.1454 9.91825L15.8585 10.9505C15.1197 12.1765 13.7729 13.0001 12.2327 13.0001C9.89613 13.0001 8.00195 11.1059 8.00195 8.76931C8.00195 7.22914 8.82555 5.8823 10.0516 5.14355L11.0838 6.85661ZM12.5684 7.43457C12.5684 6.88229 13.0161 6.43457 13.5684 6.43457H13.5773C14.1296 6.43457 14.5773 6.88229 14.5773 7.43457C14.5773 7.98685 14.1296 8.43457 13.5773 8.43457H13.5684C13.0161 8.43457 12.5684 7.98685 12.5684 7.43457Z',
} as const;

export const IconQuran03StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-03-stroke-rounded IconQuran03StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuran03DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-03-duotone-rounded IconQuran03DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuran03TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-03-twotone-rounded IconQuran03TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconQuran03SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-03-solid-rounded IconQuran03SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconQuran03BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-03-bulk-rounded IconQuran03BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
    </TheIconWrapper>
  );
};

export const IconQuran03StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-03-stroke-sharp IconQuran03StrokeSharp"
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
        strokeLinecap="round" 
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

export const IconQuran03SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="quran-03-solid-sharp IconQuran03SolidSharp"
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

export const iconPackOfQuran03: TheIconSelfPack = {
  name: 'Quran03',
  StrokeRounded: IconQuran03StrokeRounded,
  DuotoneRounded: IconQuran03DuotoneRounded,
  TwotoneRounded: IconQuran03TwotoneRounded,
  SolidRounded: IconQuran03SolidRounded,
  BulkRounded: IconQuran03BulkRounded,
  StrokeSharp: IconQuran03StrokeSharp,
  SolidSharp: IconQuran03SolidSharp,
};