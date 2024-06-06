import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M18 2V4M6 2V4',
  d2: 'M21.4997 11.5C21.4957 7.63364 21.4267 5.62803 20.2479 4.35364C18.9958 3 16.9805 3 12.95 3H11.05C7.01949 3 5.00424 3 3.75212 4.35364C2.5 5.70728 2.5 7.88594 2.5 12.2432V12.7568C2.5 17.1141 2.5 19.2927 3.75212 20.6464C4.95133 21.9428 6.80467 21.9976 10.5 21.9999L12 22',
  d3: 'M3 8H21',
  d4: 'M16.2374 16.1771L16.2374 14.7868C16.2374 14.5814 16.246 14.3735 16.3196 14.1817C16.5155 13.6712 17.0346 13.0024 17.9795 13.0024C18.9245 13.0024 19.4639 13.6712 19.6598 14.1817C19.7335 14.3735 19.742 14.5814 19.742 14.7868L19.742 16.1771M16.3069 22H19.6929C20.6898 22 21.4979 21.1934 21.4979 20.1984V18.1971C21.4979 17.2021 20.6898 16.3955 19.6929 16.3955H16.3069C15.3101 16.3955 14.502 17.2021 14.502 18.1971V20.1984C14.502 21.1934 15.3101 22 16.3069 22Z',
  d5: 'M21.5 12.6885V13.2021C21.5 15.2255 21.5 16.7792 21.3746 17.9985C21.3721 17.9916 21.3694 17.9846 21.3668 17.9778C21.1892 17.5183 20.8485 17.1533 20.4197 16.963C20.0981 16.8203 19.6904 16.8203 18.875 16.8203H19.75V15.1328C19.75 14.2008 18.9665 13.4453 18 13.4453C17.0335 13.4453 16.25 14.2008 16.25 15.1328V16.8203H17.125C16.3096 16.8203 15.9019 16.8203 15.5803 16.963C15.1515 17.1533 14.8108 17.5183 14.6332 17.9778C14.5 18.3223 14.5 18.7592 14.5 19.6328C14.5 20.5064 14.5 20.9433 14.6332 21.2878C14.8108 21.7473 15.1515 22.1123 15.5803 22.3026C15.7027 22.3569 15.8375 22.3905 16.0025 22.4114C15.1367 22.4453 14.1297 22.4453 12.95 22.4453H11.05C7.01949 22.4453 5.00424 22.4453 3.75212 21.0917C2.5 19.738 2.5 17.5594 2.5 13.2021V12.6885C2.5 10.9591 2.5 9.57295 2.57828 8.44531H21.4217C21.5 9.57295 21.5 10.9591 21.5 12.6885Z',
  d6: 'M18 2.44531V4.44531M6 2.44531V4.44531',
  d7: 'M21.4997 11.9453C21.4957 8.07895 21.4267 6.07334 20.2479 4.79895C18.9958 3.44531 16.9805 3.44531 12.95 3.44531H11.05C7.01949 3.44531 5.00424 3.44531 3.75212 4.79895C2.5 6.15259 2.5 8.33125 2.5 12.6885V13.2021C2.5 17.5594 2.5 19.738 3.75212 21.0917C4.95133 22.3881 6.80467 22.4429 10.5 22.4452L12 22.4453',
  d8: 'M3 8.44531H21',
  d9: 'M16.2541 16.6221V15.233C16.2541 15.0278 16.2627 14.82 16.3361 14.6284C16.5315 14.1184 17.0491 13.4502 17.9914 13.4502C18.9338 13.4502 19.4717 14.1184 19.6671 14.6284C19.7405 14.82 19.7491 15.0278 19.7491 15.233V16.6221M16.3234 22.4399H19.7001C20.6942 22.4399 21.5001 21.634 21.5001 20.6399V18.6403C21.5001 17.6462 20.6942 16.8403 19.7001 16.8403H16.3234C15.3293 16.8403 14.5234 17.6462 14.5234 18.6403V20.6399C14.5234 21.634 15.3293 22.4399 16.3234 22.4399Z',
  d10: 'M7 2C7 1.44772 6.55228 1 6 1C5.44772 1 5 1.44772 5 2V2.44885C5.38032 2.32821 5.78554 2.24208 6.21533 2.17961C6.46328 2.14357 6.72472 2.11476 7 2.09173V2Z',
  d11: 'M19 2.44885C18.6197 2.32821 18.2145 2.24208 17.7847 2.17961C17.5367 2.14357 17.2753 2.11476 17 2.09173V2C17 1.44772 17.4477 1 18 1C18.5523 1 19 1.44772 19 2V2.44885Z',
  d12: 'M13.0288 2H10.9712C9.02294 1.99997 7.45141 1.99994 6.21533 2.17961C4.92535 2.3671 3.8568 2.76781 3.01802 3.6746C2.18949 4.57031 1.83279 5.69272 1.66416 7.04866C1.49997 8.36894 1.49998 10.0541 1.5 12.1739V12.8261C1.49998 14.9459 1.49997 16.6311 1.66416 17.9513C1.83279 19.3073 2.18949 20.4297 3.01802 21.3254C3.81739 22.1896 4.81631 22.5968 6.02843 22.7953C7.1999 22.9871 8.676 22.9988 10.4999 22.9999L11.4999 23C12.0522 23 12.5 22.5523 12.5 22C12.5 21.4478 12.0524 21 11.5001 21L10.5006 20.9999C8.62923 20.9987 7.33044 20.9818 6.3516 20.8216C5.41341 20.668 4.88606 20.3996 4.48622 19.9673C4.06263 19.5094 3.79327 18.8656 3.64887 17.7045C3.50182 16.5221 3.5 14.9616 3.5 12.7568V12.2432C3.5 11.3942 3.50027 10.6407 3.509 9.96751C3.51487 9.51472 3.51781 9.28833 3.66385 9.14417C3.8099 9 4.03921 9 4.49783 9H19.5021C19.9607 9 20.19 9 20.3361 9.14414C20.4821 9.28827 20.4851 9.51467 20.491 9.96748C20.4953 10.2927 20.4976 10.6374 20.4988 11.0032C20.5005 11.5555 20.9496 12.0018 21.5019 12C22.0542 11.9982 22.5005 11.5491 22.4987 10.9968C22.4931 9.2374 22.4638 7.80343 22.2791 6.64779C22.0908 5.46936 21.7271 4.4801 20.982 3.6746C20.1432 2.76781 19.0747 2.3671 17.7847 2.17961C16.5486 1.99994 14.9771 1.99997 13.0288 2Z',
  d13: 'M20.5005 14.6875V15.7492C20.5756 15.772 20.6502 15.7993 20.7244 15.8322C21.3446 16.1074 21.8216 16.6277 22.0668 17.262C22.1727 17.536 22.2134 17.8173 22.2323 18.1139C22.2505 18.3994 22.2505 18.7472 22.2505 19.1639C22.2505 19.2194 22.2506 19.275 22.2507 19.3306C22.2514 19.6408 22.252 19.9515 22.2323 20.2611C22.2134 20.5577 22.1727 20.839 22.0668 21.113C21.8216 21.7474 21.3446 22.2676 20.7244 22.5428C20.2323 22.7612 19.668 22.7562 19.1322 22.7514C19.0546 22.7507 18.9776 22.75 18.9016 22.75H17.0994C17.0233 22.75 16.9463 22.7507 16.8687 22.7514C16.3329 22.7562 15.7686 22.7612 15.2765 22.5428C14.6564 22.2676 14.1794 21.7474 13.9341 21.113C13.8282 20.839 13.7875 20.5577 13.7686 20.2611C13.7489 19.9515 13.7496 19.6408 13.7502 19.3306C13.7504 19.275 13.7505 19.2194 13.7505 19.1639C13.7505 18.7472 13.7505 18.3994 13.7686 18.1139C13.7875 17.8173 13.8282 17.536 13.9341 17.262C14.1794 16.6277 14.6564 16.1074 15.2765 15.8322C15.3507 15.7993 15.4253 15.772 15.5005 15.7492V14.6875C15.5005 13.3158 16.6457 12.25 18.0005 12.25C19.3552 12.25 20.5005 13.3158 20.5005 14.6875ZM18.0005 13.75C17.4222 13.75 17.0005 14.1952 17.0005 14.6875V15.625H19.0005V14.6875C19.0005 14.1952 18.5787 13.75 18.0005 13.75Z',
  d14: 'M17.5 2V6M6.5 2V6',
  d15: 'M21 12V4H3V22H11',
  d16: 'M3 9H21',
  d17: 'M19.5 16.5V15C19.5 13.8954 18.6046 13 17.5 13C16.3954 13 15.5 13.8954 15.5 15V16.5M14 16.5H21V22H14V16.5Z',
  d18: 'M16.5 1.5V3H7.5V1.5H5.5V3H3C2.58579 3 2.25 3.33579 2.25 3.75V21.525C2.25 22.0635 2.68652 22.5 3.225 22.5H10V20.55H4.2V9.5H19.8V12.025H21.75V3.75C21.75 3.33579 21.4142 3 21 3H18.5V1.5H16.5Z',
  d19: 'M16.5 12C14.9812 12 13.75 13.2312 13.75 14.75V15.5H12.25V22.5H20.75V15.5H19.25V14.75C19.25 13.2312 18.0188 12 16.5 12ZM15.25 14.75V15.5H17.75V14.75C17.75 14.0596 17.1904 13.5 16.5 13.5C15.8096 13.5 15.25 14.0596 15.25 14.75Z',
} as const;

export const IconCalendarLock01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-01-stroke-rounded IconCalendarLock01StrokeRounded"
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

export const IconCalendarLock01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-01-duotone-rounded IconCalendarLock01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCalendarLock01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-01-twotone-rounded IconCalendarLock01TwotoneRounded"
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

export const IconCalendarLock01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-01-solid-rounded IconCalendarLock01SolidRounded"
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

export const IconCalendarLock01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-01-bulk-rounded IconCalendarLock01BulkRounded"
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

export const IconCalendarLock01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-01-stroke-sharp IconCalendarLock01StrokeSharp"
    >
      <path 
        d={d.d14} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d17} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconCalendarLock01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="calendar-lock-01-solid-sharp IconCalendarLock01SolidSharp"
    >
      <path 
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

export const iconPackOfCalendarLock01: TheIconSelfPack = {
  name: 'CalendarLock01',
  StrokeRounded: IconCalendarLock01StrokeRounded,
  DuotoneRounded: IconCalendarLock01DuotoneRounded,
  TwotoneRounded: IconCalendarLock01TwotoneRounded,
  SolidRounded: IconCalendarLock01SolidRounded,
  BulkRounded: IconCalendarLock01BulkRounded,
  StrokeSharp: IconCalendarLock01StrokeSharp,
  SolidSharp: IconCalendarLock01SolidSharp,
};