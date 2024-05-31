import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M17 2V4M12 2V4M7 2V4',
  d2: 'M3.5 13V9C3.5 6.17157 3.5 4.75736 4.37868 3.87868C5.25736 3 6.67157 3 9.5 3H14.5C17.3284 3 18.7426 3 19.6213 3.87868C20.5 4.75736 20.5 6.17157 20.5 9V13C20.5 15.8284 20.5 17.2426 19.6213 18.1213C18.7426 19 17.3284 19 14.5 19H9.5C6.67157 19 5.25736 19 4.37868 18.1213C3.5 17.2426 3.5 15.8284 3.5 13Z',
  d3: 'M3.5 16V9C3.5 6.17157 3.5 4.75736 4.37868 3.87868C5.25736 3 6.67157 3 9.5 3H14.5C17.3284 3 18.7426 3 19.6213 3.87868C20.5 4.75736 20.5 6.17157 20.5 9V16C20.5 18.8284 20.5 20.2426 19.6213 21.1213C18.7426 22 17.3284 22 14.5 22H9.5C6.67157 22 5.25736 22 4.37868 21.1213C3.5 20.2426 3.5 18.8284 3.5 16Z',
  d4: 'M8 15H12M8 10H16',
  d5: 'M3.5 8.89474C3.5 6.11593 3.5 4.72653 4.52513 3.86326C5.55025 3 7.20017 3 10.5 3H13.5C16.7998 3 18.4497 3 19.4749 3.86326C20.5 4.72653 20.5 6.11593 20.5 8.89474V13.1053C20.5 15.8841 20.5 17.2735 19.4749 18.1367C18.4497 19 16.7998 19 13.5 19H10.5C7.20017 19 5.55025 19 4.52513 18.1367C3.5 17.2735 3.5 15.8841 3.5 13.1053V8.89474Z',
  d6: 'M20.5 13.375C20.9142 13.375 21.25 13.7108 21.25 14.125V16.1799C21.25 17.5475 21.25 18.6498 21.1335 19.5168C21.0125 20.4169 20.7536 21.1747 20.1517 21.7767C19.5497 22.3786 18.7919 22.6375 17.8918 22.7585C17.0248 22.875 15.9225 22.875 14.5549 22.875H9.44513C8.07754 22.875 6.97522 22.875 6.10825 22.7585C5.20814 22.6375 4.45027 22.3786 3.84835 21.7767C3.24643 21.1747 2.98754 20.4169 2.86652 19.5168C2.74996 18.6498 2.74998 17.5475 2.75 16.1799L2.75 14.125C2.75 13.7108 3.08579 13.375 3.5 13.375C3.91421 13.375 4.25 13.7108 4.25 14.125V16.125C4.25 17.5604 4.25159 18.5615 4.35315 19.3169C4.4518 20.0507 4.63225 20.4392 4.90901 20.716C5.18577 20.9928 5.57435 21.1732 6.30812 21.2719C7.06347 21.3734 8.06459 21.375 9.5 21.375H14.5C15.9354 21.375 16.9365 21.3734 17.6919 21.2719C18.4257 21.1732 18.8142 20.9928 19.091 20.716C19.3678 20.4392 19.5482 20.0507 19.6469 19.3169C19.7484 18.5615 19.75 17.5604 19.75 16.125V14.125C19.75 13.7108 20.0858 13.375 20.5 13.375Z',
  d7: 'M14.5549 2.375H14.5549H14.5549H9.44513H9.44511H9.4451C8.07752 2.37498 6.97521 2.37497 6.10825 2.49153C5.20814 2.61254 4.45027 2.87144 3.84835 3.47335C3.24644 4.07527 2.98754 4.83314 2.86653 5.73325C2.74997 6.60021 2.74998 7.70252 2.75 9.0701V9.07011V9.07013V13.1799V13.1799V13.1799C2.74998 14.5475 2.74997 15.6498 2.86653 16.5168C2.98754 17.4169 3.24644 18.1747 3.84835 18.7767C4.45027 19.3786 5.20814 19.6375 6.10825 19.7585C6.97522 19.875 8.07754 19.875 9.44513 19.875H14.5549C15.9225 19.875 17.0248 19.875 17.8918 19.7585C18.7919 19.6375 19.5497 19.3786 20.1517 18.7767C20.7536 18.1747 21.0125 17.4169 21.1335 16.5168C21.25 15.6498 21.25 14.5475 21.25 13.1799V9.07013C21.25 7.70254 21.25 6.60022 21.1335 5.73325C21.0125 4.83314 20.7536 4.07527 20.1517 3.47335C19.5497 2.87144 18.7919 2.61254 17.8918 2.49153C17.0248 2.37497 15.9225 2.37498 14.5549 2.375ZM8 9.375C7.58579 9.375 7.25 9.71079 7.25 10.125C7.25 10.5392 7.58579 10.875 8 10.875H16C16.4142 10.875 16.75 10.5392 16.75 10.125C16.75 9.71079 16.4142 9.375 16 9.375H8ZM8 14.375C7.58579 14.375 7.25 14.7108 7.25 15.125C7.25 15.5392 7.58579 15.875 8 15.875H12C12.4142 15.875 12.75 15.5392 12.75 15.125C12.75 14.7108 12.4142 14.375 12 14.375H8Z',
  d8: 'M7 1.125C7.55228 1.125 8 1.57272 8 2.125V4.125C8 4.67728 7.55228 5.125 7 5.125C6.44772 5.125 6 4.67728 6 4.125V2.125C6 1.57272 6.44772 1.125 7 1.125ZM12 1.125C12.5523 1.125 13 1.57272 13 2.125V4.125C13 4.67728 12.5523 5.125 12 5.125C11.4477 5.125 11 4.67728 11 4.125V2.125C11 1.57272 11.4477 1.125 12 1.125ZM17 1.125C17.5523 1.125 18 1.57272 18 2.125V4.125C18 4.67728 17.5523 5.125 17 5.125C16.4477 5.125 16 4.67728 16 4.125V2.125C16 1.57272 16.4477 1.125 17 1.125Z',
  d9: 'M2.75139 14.0789C2.75047 14.0942 2.75 14.1095 2.75 14.125V16.1799V16.1799C2.74998 17.5475 2.74997 18.6498 2.86653 19.5168C2.98754 20.4169 3.24644 21.1747 3.84835 21.7767C4.45027 22.3786 5.20814 22.6375 6.10825 22.7585C6.97522 22.875 8.07754 22.875 9.44512 22.875H9.44513H14.5549H14.5549C15.9225 22.875 17.0248 22.875 17.8918 22.7585C18.7919 22.6375 19.5497 22.3786 20.1517 21.7767C20.7536 21.1747 21.0125 20.4169 21.1335 19.5168C21.25 18.6498 21.25 17.5475 21.25 16.1799V14.125C21.25 14.1095 21.2495 14.0942 21.2486 14.079C21.2439 15.0405 21.2233 15.8485 21.1335 16.5168C21.0125 17.4169 20.7536 18.1747 20.1517 18.7767C19.9993 18.929 19.837 19.0594 19.6649 19.1711C19.6593 19.2207 19.6533 19.2693 19.6469 19.3169C19.5482 20.0507 19.3678 20.4392 19.091 20.716C18.8142 20.9928 18.4257 21.1732 17.6919 21.2719C16.9365 21.3734 15.9354 21.375 14.5 21.375H9.5C8.06459 21.375 7.06347 21.3734 6.30812 21.2719C5.57435 21.1732 5.18577 20.9928 4.90901 20.716C4.63225 20.4392 4.4518 20.0507 4.35315 19.3169C4.34675 19.2693 4.34074 19.2207 4.33511 19.1711C4.16302 19.0594 4.00069 18.929 3.84835 18.7767C3.24644 18.1747 2.98754 17.4169 2.86653 16.5168C2.77668 15.8485 2.7561 15.0405 2.75139 14.0789Z',
  d10: 'M14.5549 2.375C15.9225 2.37498 17.0248 2.37496 17.8918 2.49152C18.7919 2.61254 19.5497 2.87143 20.1517 3.47335C20.7536 4.07527 21.0125 4.83314 21.1335 5.73325C21.25 6.60022 21.25 7.70254 21.25 9.07013V13.1799C21.25 14.5475 21.25 15.6498 21.1335 16.5168C21.0125 17.4169 20.7536 18.1747 20.1517 18.7767C19.5497 19.3786 18.7919 19.6375 17.8918 19.7585C17.0248 19.875 15.9225 19.875 14.5549 19.875H9.44513C8.07754 19.875 6.97522 19.875 6.10825 19.7585C5.20814 19.6375 4.45027 19.3786 3.84835 18.7767C3.24643 18.1747 2.98754 17.4169 2.86652 16.5168C2.74996 15.6498 2.74998 14.5475 2.75 13.1799V13.1799V9.07013V9.07011C2.74998 7.70253 2.74996 6.60021 2.86652 5.73325C2.98754 4.83314 3.24643 4.07527 3.84835 3.47335C4.45027 2.87143 5.20814 2.61254 6.10825 2.49152C6.97521 2.37496 8.07753 2.37498 9.44511 2.375H9.44513H14.5549H14.5549Z',
  d11: 'M7.25 10.125C7.25 9.71079 7.58579 9.375 8 9.375H16C16.4142 9.375 16.75 9.71079 16.75 10.125C16.75 10.5392 16.4142 10.875 16 10.875H8C7.58579 10.875 7.25 10.5392 7.25 10.125ZM7.25 15.125C7.25 14.7108 7.58579 14.375 8 14.375H12C12.4142 14.375 12.75 14.7108 12.75 15.125C12.75 15.5392 12.4142 15.875 12 15.875H8C7.58579 15.875 7.25 15.5392 7.25 15.125Z',
  d12: 'M8 14H12M8 10H16',
  d13: 'M17 2V6M12 2V6M7 2V6',
  d14: 'M21 4H3V22L21 22V4Z',
  d15: 'M3 18L21 18',
  d16: 'M8 3H11V1.5H13V3H16V1.5H18V3H21C21.4142 3 21.75 3.33579 21.75 3.75V18H2.25V3.75C2.25 3.33579 2.58579 3 3 3H6V1.5H8V3ZM8 9.5H16V8H8V9.5ZM8 13.5H12V12H8V13.5Z',
  d17: 'M2.25 21.75V19.5H21.75V21.75C21.75 21.9489 21.671 22.1397 21.5303 22.2803C21.3897 22.421 21.1989 22.5 21 22.5L3 22.5C2.58579 22.5 2.25 22.1642 2.25 21.75Z',
} as const;

export const IconNote05StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-05-stroke-rounded IconNote05StrokeRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNote05DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-05-duotone-rounded IconNote05DuotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNote05TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-05-twotone-rounded IconNote05TwotoneRounded"
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
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconNote05SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-05-solid-rounded IconNote05SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNote05BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-05-bulk-rounded IconNote05BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNote05StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-05-stroke-sharp IconNote05StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d15} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNote05SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="note-05-solid-sharp IconNote05SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfNote05: TheIconSelfPack = {
  name: 'Note05',
  StrokeRounded: IconNote05StrokeRounded,
  DuotoneRounded: IconNote05DuotoneRounded,
  TwotoneRounded: IconNote05TwotoneRounded,
  SolidRounded: IconNote05SolidRounded,
  BulkRounded: IconNote05BulkRounded,
  StrokeSharp: IconNote05StrokeSharp,
  SolidSharp: IconNote05SolidSharp,
};