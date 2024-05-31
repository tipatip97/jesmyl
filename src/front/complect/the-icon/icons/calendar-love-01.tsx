import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.1418 14.4418C14.3486 13.7108 15.4018 14.0054 16.0345 14.4747C16.294 14.6671 16.4237 14.7633 16.5 14.7633C16.5763 14.7633 16.706 14.6671 16.9655 14.4747C17.5982 14.0054 18.6514 13.7108 19.8582 14.4418C21.4419 15.4013 21.8002 18.5666 18.1472 21.237C17.4514 21.7457 17.1035 22 16.5 22C15.8965 22 15.5486 21.7457 14.8528 21.237C11.1998 18.5666 11.5581 15.4013 13.1418 14.4418Z',
  d2: 'M3 8H21',
  d3: 'M18 2V4M6 2V4',
  d4: 'M11.05 22C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.4765 5.68186 21.4996 7.80438 21.5 12',
  d5: 'M21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C19.5282 21.4244 18.5563 21.7553 17.0945 21.8959C17.4079 21.7775 17.7084 21.5578 18.1472 21.237C21.8002 18.5666 21.4419 15.4013 19.8582 14.4418C18.6514 13.7108 17.5982 14.0054 16.9655 14.4747C16.706 14.6671 16.5763 14.7633 16.5 14.7633C16.4237 14.7633 16.294 14.6671 16.0345 14.4747C15.4018 14.0054 14.3486 13.7108 13.1418 14.4418C11.5581 15.4013 11.1998 18.5666 14.8528 21.237C15.3914 21.6308 15.7215 21.8721 16.1232 21.9611C15.2306 22 14.1849 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432C2.5 10.5138 2.5 9.12764 2.57828 8H21.4217C21.5 9.12764 21.5 10.5138 21.5 12.2432Z',
  d6: 'M20.2464 13.7866C21.3403 14.4503 21.9107 15.805 21.7093 17.2904C21.5061 18.7884 20.5362 20.4158 18.5894 21.8411L18.5103 21.8991C17.8845 22.3584 17.3509 22.75 16.4996 22.75C15.6483 22.75 15.1148 22.3584 14.4889 21.8991L14.4098 21.8411C12.4631 20.4158 11.4931 18.7884 11.29 17.2904C11.0886 15.805 11.659 14.4503 12.7529 13.7866C13.927 13.0742 15.3786 13.0399 16.4996 13.8725C17.6207 13.0399 19.0723 13.0742 20.2464 13.7866Z',
  d7: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d8: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d9: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.81673 22.1889 4.82495 22.5945 6.03725 22.7929C7.21253 22.9853 8.68841 22.9985 10.4992 22.9999C11.0515 23.0003 11.4996 22.5529 11.5 22.0006C11.5004 21.4483 11.053 21.0003 10.5008 20.9999C8.64508 20.9984 7.34393 20.9802 6.36035 20.8192C5.4138 20.6642 4.88133 20.3945 4.48622 19.9673C4.06263 19.5094 3.79327 18.8656 3.64887 17.7045C3.50182 16.5221 3.5 14.9616 3.5 12.7568V12.2432C3.5 11.3942 3.50027 10.6407 3.509 9.96751C3.51487 9.51472 3.51781 9.28833 3.66385 9.14417C3.8099 9 4.03921 9 4.49783 9H19.5021C19.9607 9 20.19 9 20.3361 9.14415C20.4821 9.28829 20.4851 9.51469 20.491 9.9675C20.4971 10.437 20.4992 10.9465 20.4998 11.501C20.5003 12.0533 20.9485 12.5006 21.5008 12.5C22.0531 12.4994 22.5003 12.0512 22.4998 11.499C22.4977 9.58334 22.4813 8.04001 22.3041 6.81198C22.1236 5.56147 21.7617 4.51759 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2Z',
  d10: 'M19.7431 15.2896C18.1465 14.457 17 15.6843 17 15.6843C17 15.6843 15.8535 14.457 14.2568 15.2896C12.323 16.298 12.1841 20.2469 17 22C21.816 20.2469 21.677 16.298 19.7431 15.2896Z',
  d11: 'M17.5 2V6M6.5 2V6',
  d12: 'M21 12V4H3V22H11',
  d13: 'M3 9H21',
  d14: 'M16.5167 14.2312C16.7018 14.308 16.8639 14.3958 17.0008 14.4817C17.1378 14.3958 17.2999 14.308 17.485 14.2312C18.1377 13.9606 19.0606 13.8383 20.0907 14.3725C21.423 15.0632 22.0226 16.68 21.6322 18.2693C21.2329 19.8943 19.8381 21.473 17.2574 22.4071L17.0009 22.5L16.7443 22.4071C14.1636 21.473 12.7688 19.8943 12.3695 18.2693C11.979 16.68 12.5786 15.0632 13.9109 14.3725C14.9411 13.8383 15.864 13.9606 16.5167 14.2312Z',
  d15: 'M16.5 1.5V3H7.5V1.5H5.5V3H3C2.58579 3 2.25 3.33579 2.25 3.75V21.525C2.25 22.0635 2.68652 22.5 3.225 22.5H11V20.55H4.2V9.5H19.8V12.025H21.75V3.75C21.75 3.33579 21.4142 3 21 3H18.5V1.5H16.5Z',
} as const;

export const IconCalendarLove01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-01-stroke-rounded IconCalendarLove01StrokeRounded"
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

export const IconCalendarLove01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-01-duotone-rounded IconCalendarLove01DuotoneRounded"
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

export const IconCalendarLove01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-01-twotone-rounded IconCalendarLove01TwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCalendarLove01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-01-solid-rounded IconCalendarLove01SolidRounded"
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

export const IconCalendarLove01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-01-bulk-rounded IconCalendarLove01BulkRounded"
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
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarLove01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-01-stroke-sharp IconCalendarLove01StrokeSharp"
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

export const IconCalendarLove01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-love-01-solid-sharp IconCalendarLove01SolidSharp"
    >
      <path 
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

export const iconPackOfCalendarLove01: TheIconSelfPack = {
  name: 'CalendarLove01',
  StrokeRounded: IconCalendarLove01StrokeRounded,
  DuotoneRounded: IconCalendarLove01DuotoneRounded,
  TwotoneRounded: IconCalendarLove01TwotoneRounded,
  SolidRounded: IconCalendarLove01SolidRounded,
  BulkRounded: IconCalendarLove01BulkRounded,
  StrokeSharp: IconCalendarLove01StrokeSharp,
  SolidSharp: IconCalendarLove01SolidSharp,
};