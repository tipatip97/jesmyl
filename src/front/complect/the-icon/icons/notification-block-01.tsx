import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13.5 5.29686C12.8666 5.10373 12.1949 5 11.5 5C7.85617 5 4.84988 7.85222 4.65837 11.491C4.58489 12.887 4.66936 14.373 3.42213 15.3084C2.84164 15.7438 2.5 16.427 2.5 17.1527C2.5 18.1508 3.2818 19 4.3 19H18.7C19.7182 19 20.5 18.1508 20.5 17.1527C20.5 16.427 20.1584 15.7438 19.5779 15.3084C19.5513 15.2885 19.5254 15.2683 19.5 15.2479',
  d2: 'M10 3.125C10 3.95343 10.6716 5 11.5 5C12.3284 5 13 3.95343 13 3.125C13 2.29657 12.3284 2 11.5 2C10.6716 2 10 2.29657 10 3.125Z',
  d3: 'M14.5 19C14.5 20.6569 13.1569 22 11.5 22C9.84315 22 8.5 20.6569 8.5 19',
  d4: 'M15.55 7.05L20.45 11.95M21.5 9.5C21.5 7.567 19.933 6 18 6C16.067 6 14.5 7.567 14.5 9.5C14.5 11.433 16.067 13 18 13C19.933 13 21.5 11.433 21.5 9.5Z',
  d5: 'M5.01965 11.9398C5.02536 11.7897 5.03106 11.6398 5.03846 11.491C5.21933 7.85222 8.05861 5 11.5 5C13.1588 5 14.6776 5.66264 15.8263 6.75662C15.0183 7.39775 14.5 8.38835 14.5 9.5C14.5 11.433 16.067 13 18 13C18.0146 13 18.0292 12.9999 18.0437 12.9997C18.1358 13.883 18.3741 14.7088 19.1291 15.3084C19.6773 15.7438 20 16.427 20 17.1527C20 18.1508 19.2616 19 18.3 19H4.7C3.73837 19 3 18.1508 3 17.1527C3 16.427 3.32266 15.7438 3.8709 15.3084C4.92326 14.4727 4.97178 13.1976 5.01965 11.9398Z',
  d6: 'M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19',
  d7: 'M12 4.25C7.95728 4.25 4.62188 7.41446 4.4094 11.4516C4.40032 11.6241 4.39357 11.7893 4.38705 11.9485C4.3649 12.49 4.34561 12.9615 4.24749 13.4133C4.13025 13.9531 3.91329 14.3775 3.47213 14.7084C2.70278 15.2854 2.25 16.191 2.25 17.1527C2.25 18.534 3.33719 19.75 4.8 19.75H19.2C20.6628 19.75 21.75 18.534 21.75 17.1527C21.75 16.8098 21.6924 16.4741 21.5835 16.1578C21.4612 15.8026 21.4 15.625 21.1867 15.5402C20.9734 15.4554 20.742 15.5766 20.2792 15.8189C19.4483 16.2539 18.5029 16.5 17.5 16.5C14.1863 16.5 11.5 13.8137 11.5 10.5C11.5 8.4871 12.4912 6.70572 14.0122 5.61732C14.5185 5.25497 14.7717 5.07379 14.737 4.8862C14.7022 4.69862 14.4415 4.63071 13.92 4.49489C13.3061 4.33499 12.6625 4.25 12 4.25Z',
  d8: 'M13 10.5C13 8.01472 15.0147 6 17.5 6C19.9853 6 22 8.01472 22 10.5C22 12.9853 19.9853 15 17.5 15C15.0147 15 13 12.9853 13 10.5ZM15.1722 9.58641C15.061 9.8694 15 10.1776 15 10.5C15 11.8807 16.1193 13 17.5 13C17.8224 13 18.1306 12.939 18.4136 12.8278L15.1722 9.58641ZM16.5864 8.17219L19.8278 11.4136C19.939 11.1306 20 10.8224 20 10.5C20 9.11929 18.8807 8 17.5 8C17.1776 8 16.8694 8.06104 16.5864 8.17219Z',
  d9: 'M10.5286 1.37434C10.9737 1.08296 11.517 1 12 1C12.483 1 13.0263 1.08296 13.4714 1.37434C13.9652 1.69759 14.25 2.22083 14.25 2.875C14.25 3.47116 14.017 4.09375 13.6626 4.57057C13.3138 5.03989 12.7415 5.5 12 5.5C11.2585 5.5 10.6862 5.03989 10.3374 4.57057C9.98299 4.09375 9.75 3.47116 9.75 2.875C9.75 2.22083 10.0348 1.69759 10.5286 1.37434Z',
  d10: 'M9 18C9.55228 18 10 18.4477 10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19C14 18.4477 14.4477 18 15 18C15.5523 18 16 18.4477 16 19C16 21.2091 14.2091 23 12 23C9.79086 23 8 21.2091 8 19C8 18.4477 8.44772 18 9 18Z',
  d11: 'M12 1C11.517 1 10.9737 1.08296 10.5286 1.37434C10.0348 1.69759 9.75 2.22083 9.75 2.875C9.75 3.42284 9.94675 3.993 10.2537 4.45184C7.03554 5.20909 4.59033 8.01397 4.4094 11.4516C4.40032 11.6241 4.39357 11.7893 4.38705 11.9484L4.38705 11.9485C4.3649 12.49 4.34561 12.9615 4.24749 13.4133C4.13025 13.9531 3.91329 14.3775 3.47213 14.7084C2.70278 15.2854 2.25 16.191 2.25 17.1527C2.25 18.534 3.33719 19.75 4.8 19.75H19.2C20.6628 19.75 21.75 18.534 21.75 17.1527C21.75 16.8098 21.6924 16.4741 21.5835 16.1578C21.4612 15.8026 21.4 15.625 21.1867 15.5402C20.9734 15.4554 20.742 15.5766 20.2792 15.8189C19.4483 16.2539 18.5029 16.5 17.5 16.5C14.1863 16.5 11.5 13.8137 11.5 10.5C11.5 8.4871 12.4912 6.70572 14.0122 5.61732C14.5185 5.25497 14.7717 5.07379 14.737 4.8862C14.7022 4.69862 14.4415 4.63071 13.92 4.49489C13.8624 4.47988 13.8045 4.46553 13.7463 4.45184C14.0532 3.993 14.25 3.42284 14.25 2.875C14.25 2.22083 13.9652 1.69759 13.4714 1.37434C13.0263 1.08296 12.483 1 12 1Z',
  d12: 'M13.8546 19.75H15.9298C15.5787 21.6006 13.9528 23 12 23C10.0472 23 8.42125 21.6006 8.07019 19.75H10.1454C10.4421 20.483 11.1606 21 12 21C12.8393 21 13.5579 20.483 13.8546 19.75Z',
  d13: 'M9.99902 3.5C9.99902 4.32843 10.6706 5 11.499 5C12.3274 5 12.999 4.32843 12.999 3.5C12.999 2.67157 12.3274 2 11.499 2C10.6706 2 9.99902 2.67157 9.99902 3.5Z',
  d14: 'M14.499 19C14.499 20.6569 13.1559 22 11.499 22C9.84217 22 8.49902 20.6569 8.49902 19',
  d15: 'M15.549 7.05L20.449 11.95M21.499 9.5C21.499 7.567 19.932 6 17.999 6C16.066 6 14.499 7.567 14.499 9.5C14.499 11.433 16.066 13 17.999 13C19.932 13 21.499 11.433 21.499 9.5Z',
  d16: 'M13.9075 5.43682C13.1662 5.15736 12.3599 5 11.5112 5C7.6687 5 4.61911 8.37973 4.61911 11.3729V13.9392L2.50098 16.5198V19H20.4969V16.4399L19.3231 15.0812',
  d17: 'M9.5 18.75C9.5 19.8546 10.3954 20.75 11.5 20.75C12.6046 20.75 13.5 19.8546 13.5 18.75H15.5C15.5 20.9591 13.7091 22.75 11.5 22.75C9.29086 22.75 7.5 20.9591 7.5 18.75H9.5Z',
  d18: 'M13.75 9.5C13.75 7.15279 15.6528 5.25 18 5.25C20.3472 5.25 22.25 7.15279 22.25 9.5C22.25 11.8472 20.3472 13.75 18 13.75C15.6528 13.75 13.75 11.8472 13.75 9.5ZM15.8015 8.63716C15.6965 8.90443 15.6389 9.19548 15.6389 9.5C15.6389 10.804 16.696 11.8611 18 11.8611C18.3045 11.8611 18.5956 11.8035 18.8628 11.6985L15.8015 8.63716ZM17.1372 7.30151L20.1985 10.3628C20.3035 10.0956 20.3611 9.80452 20.3611 9.5C20.3611 8.19599 19.304 7.13889 18 7.13889C17.6955 7.13889 17.4044 7.19654 17.1372 7.30151Z',
  d19: 'M9.25 3.5C9.25 2.25736 10.2574 1.25 11.5 1.25C12.7426 1.25 13.75 2.25736 13.75 3.5C13.75 4.74264 12.7426 5.75 11.5 5.75C10.2574 5.75 9.25 4.74264 9.25 3.5ZM11.5 2.75C11.0858 2.75 10.75 3.08579 10.75 3.5C10.75 3.91421 11.0858 4.25 11.5 4.25C11.9142 4.25 12.25 3.91421 12.25 3.5C12.25 3.08579 11.9142 2.75 11.5 2.75Z',
  d20: 'M14.82 5.01193C13.4161 6.00847 12.5 7.64725 12.5 9.5C12.5 12.5376 14.9624 15 18 15C18.6692 15 19.3105 14.8805 19.9037 14.6616L21.0677 16.0099C21.1853 16.1461 21.25 16.32 21.25 16.5V19.75H1.75V16.5C1.75 16.32 1.8147 16.1461 1.9323 16.0099L3.90837 13.721V11.4713L3.9094 11.4516C4.12189 7.41446 7.45728 4.25 11.5 4.25C12.6882 4.25 13.8154 4.52337 14.82 5.01193Z',
  d21: 'M15.8903 7.3903L15.8685 7.38894L15.8889 7.36847L15.8903 7.3903Z',
};

export const IconNotificationBlock01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-block-01-stroke-rounded IconNotificationBlock01StrokeRounded"
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

export const IconNotificationBlock01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-block-01-duotone-rounded IconNotificationBlock01DuotoneRounded"
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

export const IconNotificationBlock01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-block-01-twotone-rounded IconNotificationBlock01TwotoneRounded"
    >
      <path 
        d={d.d1} 
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
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
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

export const IconNotificationBlock01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-block-01-solid-rounded IconNotificationBlock01SolidRounded"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotificationBlock01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-block-01-bulk-rounded IconNotificationBlock01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconNotificationBlock01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-block-01-stroke-sharp IconNotificationBlock01StrokeSharp"
    >
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
      <path 
        d={d.d16} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotificationBlock01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-block-01-solid-sharp IconNotificationBlock01SolidSharp"
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
      <path 
        d={d.d21} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNotificationBlock01: TheIconSelfPack = {
  name: 'NotificationBlock01',
  StrokeRounded: IconNotificationBlock01StrokeRounded,
  DuotoneRounded: IconNotificationBlock01DuotoneRounded,
  TwotoneRounded: IconNotificationBlock01TwotoneRounded,
  SolidRounded: IconNotificationBlock01SolidRounded,
  BulkRounded: IconNotificationBlock01BulkRounded,
  StrokeSharp: IconNotificationBlock01StrokeSharp,
  SolidSharp: IconNotificationBlock01SolidSharp,
};