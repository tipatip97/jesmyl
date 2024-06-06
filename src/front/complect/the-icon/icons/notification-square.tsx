import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M12.5 3H11.5C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5V11.5',
  d2: 'M22 5.5C22 7.433 20.433 9 18.5 9C16.567 9 15 7.433 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z',
  d3: 'M7 11H11',
  d4: 'M7 16H15',
  d5: 'M15.9871 3.06376C15.0756 3 13.9479 3 12.5 3H11.5C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5V11.5C21 10.0521 21 8.92443 20.9362 8.01292C20.3062 8.6239 19.447 9 18.5 9C16.567 9 15 7.433 15 5.5C15 4.553 15.3761 3.69385 15.9871 3.06376Z',
  d6: 'M14.75 5.25C14.75 3.04086 16.5409 1.25 18.75 1.25C20.9591 1.25 22.75 3.04086 22.75 5.25C22.75 7.45914 20.9591 9.25 18.75 9.25C16.5409 9.25 14.75 7.45914 14.75 5.25Z',
  d7: 'M21.75 12.5572C21.75 14.7479 21.75 16.4686 21.5694 17.812C21.3843 19.1886 20.9973 20.2809 20.1391 21.1391C19.2809 21.9973 18.1886 22.3843 16.812 22.5694C15.4686 22.75 13.7479 22.75 11.5572 22.75H11.4428C9.2521 22.75 7.53143 22.75 6.18802 22.5694C4.81136 22.3843 3.71911 21.9973 2.86091 21.1391C2.00271 20.2809 1.61568 19.1886 1.43059 17.812C1.24998 16.4686 1.24999 14.7479 1.25 12.5572V12.4428C1.24999 10.2521 1.24998 8.53144 1.43059 7.18802C1.61568 5.81137 2.00271 4.71911 2.86091 3.86091C3.71911 3.00272 4.81136 2.61568 6.18802 2.43059C7.53144 2.24998 9.25213 2.24999 11.4428 2.25H12.6628C13.2792 2.25 13.5874 2.25 13.7073 2.41392C13.8271 2.57784 13.7208 2.91187 13.5081 3.57993C13.3405 4.10663 13.25 4.66775 13.25 5.25C13.25 8.28757 15.7124 10.75 18.75 10.75C19.3394 10.75 19.9071 10.6573 20.4394 10.4857C21.0915 10.2754 21.4176 10.1703 21.582 10.2897C21.7464 10.409 21.7472 10.709 21.749 11.309C21.75 11.6721 21.75 12.0499 21.75 12.4427V12.4427V12.4428V12.5572ZM6.25 11C6.25 10.5858 6.58579 10.25 7 10.25H11C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H7C6.58579 11.75 6.25 11.4142 6.25 11ZM7 15.25C6.58579 15.25 6.25 15.5858 6.25 16C6.25 16.4142 6.58579 16.75 7 16.75H15C15.4142 16.75 15.75 16.4142 15.75 16C15.75 15.5858 15.4142 15.25 15 15.25H7Z',
  d8: 'M21.75 12.5572C21.75 14.7479 21.75 16.4686 21.5694 17.812C21.3843 19.1886 20.9973 20.2809 20.1391 21.1391C19.2809 21.9973 18.1886 22.3843 16.812 22.5694C15.4686 22.75 13.7479 22.75 11.5572 22.75H11.4428C9.2521 22.75 7.53144 22.75 6.18802 22.5694C4.81137 22.3843 3.71911 21.9973 2.86091 21.1391C2.00272 20.2809 1.61568 19.1886 1.43059 17.812C1.24998 16.4686 1.24999 14.7479 1.25 12.5572V12.4428C1.24999 10.2521 1.24998 8.53144 1.43059 7.18802C1.61568 5.81137 2.00272 4.71911 2.86091 3.86091C3.71911 3.00272 4.81137 2.61568 6.18802 2.43059C7.53144 2.24998 9.25213 2.24999 11.4428 2.25H12.6628C13.2792 2.25 13.5874 2.25 13.7073 2.41392C13.8271 2.57784 13.7208 2.91187 13.5081 3.57993C13.3405 4.10663 13.25 4.66775 13.25 5.25C13.25 8.28757 15.7124 10.75 18.75 10.75C19.3394 10.75 19.9071 10.6573 20.4394 10.4857C21.0915 10.2754 21.4176 10.1703 21.582 10.2897C21.7464 10.409 21.7472 10.709 21.749 11.309C21.75 11.6722 21.75 12.05 21.75 12.4428V12.5572Z',
  d9: 'M6.25 11C6.25 10.5858 6.58579 10.25 7 10.25H11C11.4142 10.25 11.75 10.5858 11.75 11C11.75 11.4142 11.4142 11.75 11 11.75H7C6.58579 11.75 6.25 11.4142 6.25 11Z',
  d10: 'M6.25 16C6.25 15.5858 6.58579 15.25 7 15.25H15C15.4142 15.25 15.75 15.5858 15.75 16C15.75 16.4142 15.4142 16.75 15 16.75H7C6.58579 16.75 6.25 16.4142 6.25 16Z',
  d11: 'M13 3H2L2 22L21 22V11',
  d12: 'M1.25 3C1.25 2.58579 1.58579 2.25 2 2.25H13.7559C13.1213 3.17454 12.75 4.2939 12.75 5.5C12.75 8.67564 15.3244 11.25 18.5 11.25C19.7061 11.25 20.8255 10.8787 21.75 10.2441V22C21.75 22.1989 21.671 22.3897 21.5303 22.5303C21.3897 22.671 21.1989 22.75 21 22.75L2 22.75C1.80109 22.75 1.61032 22.671 1.46967 22.5303C1.32902 22.3897 1.25 22.1989 1.25 22L1.25 3ZM11 11.75H7V10.25H11V11.75ZM7 15.25V16.75H15V15.25H7Z',
  d13: 'M14.25 5.5C14.25 3.15279 16.1528 1.25 18.5 1.25C20.8472 1.25 22.75 3.15279 22.75 5.5C22.75 7.84721 20.8472 9.75 18.5 9.75C16.1528 9.75 14.25 7.84721 14.25 5.5Z',
} as const;

export const IconNotificationSquareStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-square-stroke-rounded IconNotificationSquareStrokeRounded"
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

export const IconNotificationSquareDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-square-duotone-rounded IconNotificationSquareDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
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
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotificationSquareTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-square-twotone-rounded IconNotificationSquareTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconNotificationSquareSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-square-solid-rounded IconNotificationSquareSolidRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconNotificationSquareBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-square-bulk-rounded IconNotificationSquareBulkRounded"
    >
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconNotificationSquareStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-square-stroke-sharp IconNotificationSquareStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotificationSquareSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-square-solid-sharp IconNotificationSquareSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNotificationSquare: TheIconSelfPack = {
  name: 'NotificationSquare',
  StrokeRounded: IconNotificationSquareStrokeRounded,
  DuotoneRounded: IconNotificationSquareDuotoneRounded,
  TwotoneRounded: IconNotificationSquareTwotoneRounded,
  SolidRounded: IconNotificationSquareSolidRounded,
  BulkRounded: IconNotificationSquareBulkRounded,
  StrokeSharp: IconNotificationSquareStrokeSharp,
  SolidSharp: IconNotificationSquareSolidSharp,
};