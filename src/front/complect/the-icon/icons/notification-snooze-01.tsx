import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12 5C8.35617 5 5.34988 7.85222 5.15837 11.491C5.08489 12.887 5.16936 14.373 3.92213 15.3084C3.34164 15.7438 3 16.427 3 17.1527C3 18.1508 3.7818 19 4.8 19H19.2C20.2182 19 21 18.1508 21 17.1527C21 16.427 20.6584 15.7438 20.0779 15.3084C19.5912 14.9434 19.3073 14.4946 19.1376 14',
  d2: 'M16.016 5H19.6884C20.4611 5 20.8474 5 20.9503 5.24011C21.0532 5.48023 20.7903 5.76827 20.2646 6.34436L16.8469 9.65564C16.3211 10.2317 15.9131 10.5198 16.016 10.7599C16.1189 11 16.6504 11 17.423 11H21',
  d3: 'M10.5 3.125C10.5 3.95343 11.1716 5 12 5C12.8284 5 13.5 3.95343 13.5 3.125C13.5 2.29657 12.8284 2 12 2C11.1716 2 10.5 2.29657 10.5 3.125Z',
  d4: 'M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19',
  d5: 'M5.15837 11.491C5.08489 12.887 5.16936 14.373 3.92213 15.3084C3.34164 15.7438 3 16.427 3 17.1527C3 18.1508 3.7818 19 4.8 19H19.2C20.2182 19 21 18.1508 21 17.1527C21 16.427 20.6584 15.7438 20.0779 15.3084C18.8306 14.373 18.9151 12.887 18.8416 11.491C18.6501 7.85223 15.6438 5 12 5C8.35617 5 5.34988 7.85222 5.15837 11.491Z',
  d6: 'M19.1376 14C19.3073 14.4946 19.5912 14.9434 20.0779 15.3084C20.6584 15.7438 21 16.427 21 17.1527C21 18.1508 20.2182 19 19.2 19H4.8C3.7818 19 3 18.1508 3 17.1527C3 16.427 3.34164 15.7438 3.92213 15.3084C5.16936 14.373 5.08489 12.887 5.15837 11.491C5.34988 7.85222 8.35617 5 12 5H12.5H13',
  d7: 'M12 4.25C7.95728 4.25 4.62188 7.41446 4.4094 11.4516C4.36943 12.2112 4.37444 12.8287 4.24749 13.4133C4.13025 13.9531 3.91329 14.3775 3.47213 14.7084C2.70278 15.2854 2.25 16.191 2.25 17.1527C2.25 18.534 3.33719 19.75 4.8 19.75H19.2C20.6628 19.75 21.75 18.534 21.75 17.1527C21.75 16.7214 21.6741 15.8578 21.2647 15.5819C21.1362 15.4953 20.9729 15.4966 20.6462 15.4992C19.5437 15.5081 18.4408 15.5001 17.3382 15.5001C16.6006 15.5005 15.8469 15.4889 15.1603 15.1853C14.7414 15.0001 14.0791 14.5857 13.7187 13.7447C13.332 12.8424 13.5313 12.0165 13.7567 11.5249C13.9801 11.0379 14.3326 10.6296 14.715 10.2494C15.0341 9.93205 15.1937 9.77338 15.1846 9.63704C15.1756 9.5007 14.9524 9.33125 14.5061 8.99235C13.9049 8.53579 13.5166 7.81328 13.5166 7.00009C13.5166 6.50692 13.6594 6.0471 13.9059 5.65973C14.246 5.12536 14.416 4.85817 14.3556 4.71363C14.2952 4.56909 14.0671 4.51981 13.6107 4.42125C13.0911 4.30903 12.5522 4.25 12 4.25Z',
  d8: 'M19.1831 8.00003H16.0162C15.4639 8.00003 15.0162 7.55232 15.0162 7.00003C15.0162 6.44775 15.4639 6.00003 16.0162 6.00003L19.7458 6.00002C20.0812 5.99988 20.4352 5.99974 20.7149 6.04049C20.9866 6.08008 21.5982 6.21287 21.8697 6.84624C22.1375 7.47134 21.8231 8.00428 21.6698 8.22931C21.5102 8.46356 21.2707 8.72589 21.0416 8.97669L21.0416 8.97669L17.9288 12H21.0002C21.5525 12 22.0002 12.4477 22.0002 13C22.0002 13.5523 21.5525 14 21.0002 14L17.378 14H17.378C17.0296 14.0001 16.6505 14.0002 16.3457 13.9624C16.1853 13.9426 15.9734 13.9048 15.7665 13.8133C15.5513 13.7182 15.2561 13.525 15.0971 13.1538C14.9278 12.7588 15.0092 12.3912 15.1197 12.1502C15.2163 11.9396 15.3572 11.772 15.4489 11.669C15.5402 11.5664 15.6487 11.4568 15.7451 11.3595L15.7451 11.3595L19.1831 8.00003Z',
  d9: 'M10.5286 1.37434C10.9737 1.08296 11.517 1 12 1C12.483 1 13.0263 1.08296 13.4714 1.37434C13.9652 1.69759 14.25 2.22083 14.25 2.875C14.25 3.47116 14.017 4.09375 13.6626 4.57057C13.3138 5.03989 12.7415 5.5 12 5.5C11.2585 5.5 10.6862 5.03989 10.3374 4.57057C9.98299 4.09375 9.75 3.47116 9.75 2.875C9.75 2.22083 10.0348 1.69759 10.5286 1.37434Z',
  d10: 'M9 18C9.55228 18 10 18.4477 10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19C14 18.4477 14.4477 18 15 18C15.5523 18 16 18.4477 16 19C16 21.2091 14.2091 23 12 23C9.79086 23 8 21.2091 8 19C8 18.4477 8.44772 18 9 18Z',
  d11: 'M12 1C11.517 1 10.9737 1.08296 10.5286 1.37434C10.0348 1.69759 9.75 2.22083 9.75 2.875C9.75 3.42284 9.94675 3.993 10.2537 4.45184C7.03554 5.20909 4.59033 8.01397 4.4094 11.4516C4.40032 11.6241 4.39356 11.7893 4.38705 11.9485C4.3649 12.49 4.3456 12.9615 4.24749 13.4133C4.13025 13.9531 3.91329 14.3775 3.47213 14.7084C2.70278 15.2854 2.25 16.191 2.25 17.1527C2.25 18.534 3.33719 19.75 4.8 19.75H19.2C20.6628 19.75 21.75 18.534 21.75 17.1527C21.75 16.7214 21.6741 15.8578 21.2647 15.5819C21.1362 15.4953 20.9729 15.4966 20.6462 15.4992C19.8987 15.5052 19.151 15.5035 18.4033 15.5018C18.0483 15.5009 17.6932 15.5001 17.3382 15.5001C16.6006 15.5005 15.8469 15.4889 15.1603 15.1853C14.7414 15.0001 14.0791 14.5857 13.7187 13.7447C13.332 12.8424 13.5313 12.0165 13.7567 11.5249C13.9801 11.0379 14.3326 10.6296 14.715 10.2494C15.0341 9.93205 15.1937 9.77338 15.1846 9.63704C15.1756 9.5007 14.9524 9.33125 14.5061 8.99236L14.5061 8.99235C13.9049 8.53579 13.5166 7.81328 13.5166 7.00009C13.5166 6.50692 13.6594 6.0471 13.9059 5.65973C14.246 5.12536 14.416 4.85817 14.3556 4.71363C14.3016 4.58427 14.1131 4.53121 13.747 4.45084C14.0535 3.99216 14.25 3.42244 14.25 2.875C14.25 2.22083 13.9652 1.69759 13.4714 1.37434C13.0263 1.08296 12.483 1 12 1Z',
  d12: 'M13.8546 19.75H15.9298C15.5787 21.6006 13.9528 23 12 23C10.0472 23 8.42125 21.6006 8.07019 19.75H10.1454C10.4421 20.483 11.1606 21 12 21C12.8393 21 13.5579 20.483 13.8546 19.75Z',
  d13: 'M14.999 6H20.499V6.5L15.499 11.5V12H20.999',
  d14: 'M10.499 3.5C10.499 4.32843 11.1706 5 11.999 5C12.8274 5 13.499 4.32843 13.499 3.5C13.499 2.67157 12.8274 2 11.999 2C11.1706 2 10.499 2.67157 10.499 3.5Z',
  d15: 'M14.999 19C14.999 20.6569 13.6559 22 11.999 22C10.3421 22 8.99902 20.6569 8.99902 19',
  d16: 'M18.8265 13.9263L20.9969 16.3999V18.96H3.00098V16.4798L5.11911 13.8992V11.3329C5.11911 8.33969 8.1687 4.95996 12.0112 4.95996C12.3399 4.95996 12.6623 4.98357 12.977 5.02874',
  d17: 'M9.25016 3.5C9.25016 2.25736 10.2575 1.25 11.5002 1.25C12.7428 1.25 13.7502 2.25736 13.7502 3.5C13.7502 4.74264 12.7428 5.75 11.5002 5.75C10.2575 5.75 9.25016 4.74264 9.25016 3.5ZM11.5002 2.75C11.086 2.75 10.7502 3.08579 10.7502 3.5C10.7502 3.91421 11.086 4.25 11.5002 4.25C11.9144 4.25 12.2502 3.91421 12.2502 3.5C12.2502 3.08579 11.9144 2.75 11.5002 2.75Z',
  d18: 'M9.50016 18.75C9.50016 19.8546 10.3956 20.75 11.5002 20.75C12.6047 20.75 13.5002 19.8546 13.5002 18.75H15.5002C15.5002 20.9591 13.7093 22.75 11.5002 22.75C9.29102 22.75 7.50016 20.9591 7.50016 18.75H9.50016Z',
  d19: 'M19.3358 7H15.75V5H22.25V6.91421L18.1642 11H21.75V13H15.25V11.0858L19.3358 7Z',
  d20: 'M14.2498 4.76314C13.3959 4.43154 12.4681 4.25 11.4998 4.25C7.4571 4.25 4.12171 7.41446 3.90923 11.4516L3.90819 11.4713V13.721L1.93213 16.0099C1.81453 16.1461 1.74982 16.32 1.74982 16.5V19.75H21.2498V16.5C21.2498 16.32 21.1851 16.1461 21.0675 16.0099L19.764 14.5H13.7498V10.4645L15.7143 8.5H14.2498V4.76314Z',
} as const;

export const IconNotificationSnooze01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-01-stroke-rounded IconNotificationSnooze01StrokeRounded"
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

export const IconNotificationSnooze01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-01-duotone-rounded IconNotificationSnooze01DuotoneRounded"
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

export const IconNotificationSnooze01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-01-twotone-rounded IconNotificationSnooze01TwotoneRounded"
    >
      <path 
        d={d.d6} 
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotificationSnooze01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-01-solid-rounded IconNotificationSnooze01SolidRounded"
    >
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconNotificationSnooze01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-01-bulk-rounded IconNotificationSnooze01BulkRounded"
    >
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconNotificationSnooze01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-01-stroke-sharp IconNotificationSnooze01StrokeSharp"
    >
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotificationSnooze01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-01-solid-sharp IconNotificationSnooze01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
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
      <path 
        d={d.d20} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNotificationSnooze01: TheIconSelfPack = {
  name: 'NotificationSnooze01',
  StrokeRounded: IconNotificationSnooze01StrokeRounded,
  DuotoneRounded: IconNotificationSnooze01DuotoneRounded,
  TwotoneRounded: IconNotificationSnooze01TwotoneRounded,
  SolidRounded: IconNotificationSnooze01SolidRounded,
  BulkRounded: IconNotificationSnooze01BulkRounded,
  StrokeSharp: IconNotificationSnooze01StrokeSharp,
  SolidSharp: IconNotificationSnooze01SolidSharp,
};