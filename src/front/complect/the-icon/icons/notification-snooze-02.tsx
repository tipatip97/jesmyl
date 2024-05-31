import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M13.5 2.14902C13.0153 2.05129 12.5136 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3702 14.1149 20.9692 13.5438 20.5719 13',
  d2: 'M16.016 4H19.6884C20.4611 4 20.8474 4 20.9503 4.24011C21.0532 4.48023 20.7903 4.76827 20.2646 5.34436L16.8469 8.65564C16.3212 9.23173 15.9131 9.51977 16.016 9.75989C16.1189 10 16.6504 10 17.423 10H21',
  d3: 'M8 19C8.45849 20.7252 10.0755 22 12 22C13.9245 22 15.5415 20.7252 16 19',
  d4: 'M2.52992 14.7696C2.31727 16.1636 3.268 17.1312 4.43205 17.6134C8.89481 19.4622 15.1052 19.4622 19.5679 17.6134C20.732 17.1312 21.6827 16.1636 21.4701 14.7696C21.3394 13.9129 20.6932 13.1995 20.2144 12.5029C19.5873 11.5793 19.525 10.5718 19.5249 9.5C19.5249 5.35786 16.1559 2 12 2C7.84413 2 4.47513 5.35786 4.47513 9.5C4.47503 10.5718 4.41272 11.5793 3.78561 12.5029C3.30684 13.1995 2.66061 13.9129 2.52992 14.7696Z',
  d5: 'M14.715 5.49887C15.0342 5.18153 15.1937 5.02285 15.1847 4.88651C15.1756 4.75017 14.9524 4.58072 14.5061 4.24183C13.9049 3.78527 13.5166 3.06276 13.5166 2.24956C13.5166 1.89922 13.5166 1.72405 13.4858 1.64042C13.4339 1.49943 13.3706 1.42938 13.2355 1.36362C13.1553 1.32461 13.0442 1.31343 12.8219 1.29107C12.5516 1.26388 12.2774 1.24996 12 1.24996C7.5442 1.24996 3.9279 4.84147 3.92787 9.27693C3.92778 10.3086 3.8584 11.0873 3.38273 11.7872C3.31659 11.883 3.22884 12.0032 3.13295 12.1344C2.9664 12.3624 2.77529 12.6239 2.63035 12.8505C2.37454 13.2503 2.12461 13.7324 2.03869 14.2941C1.75838 16.1269 3.05057 17.3136 4.33747 17.8453C8.87018 19.7182 15.1299 19.7182 19.6626 17.8453C20.9495 17.3136 22.2417 16.1269 21.9613 14.2941C21.8754 13.7324 21.6255 13.2503 21.3697 12.8505C21.2248 12.624 21.0337 12.3624 20.8671 12.1345C20.7713 12.0033 20.6835 11.8831 20.6174 11.7872C20.5558 11.6967 20.5011 11.6048 20.4524 11.5112C20.2386 11.1002 20.1317 10.8947 20.0121 10.8222C19.8925 10.7496 19.7201 10.7496 19.3752 10.7496L17.3382 10.7496C16.6006 10.75 15.847 10.7383 15.1603 10.4348C14.7415 10.2496 14.0792 9.8352 13.7187 8.99422C13.3321 8.0919 13.5313 7.26593 13.7567 6.77438C13.9801 6.28735 14.3326 5.87908 14.715 5.49887Z',
  d6: 'M19.1831 3.24999H16.0162C15.4639 3.24999 15.0162 2.80228 15.0162 2.24999C15.0162 1.69771 15.4639 1.24999 16.0162 1.24999L19.7458 1.24998C20.0812 1.24984 20.4352 1.2497 20.7149 1.29045C20.9866 1.33004 21.5982 1.46283 21.8697 2.0962C22.1376 2.7213 21.8232 3.25424 21.6698 3.47927C21.5103 3.71352 21.2707 3.97585 21.0416 4.22665L21.0416 4.22665L17.9288 7.24999H21.0003C21.5525 7.24999 22.0003 7.69771 22.0003 8.24999C22.0003 8.80228 21.5525 9.24999 21.0003 9.24999L17.378 9.25H17.378C17.0296 9.25007 16.6505 9.25015 16.3457 9.21239C16.1853 9.19253 15.9734 9.1548 15.7665 9.06329C15.5513 8.96817 15.2561 8.77491 15.0971 8.40379C14.9278 8.00879 15.0092 7.64119 15.1198 7.40016C15.2164 7.18955 15.3572 7.022 15.4489 6.91897C15.5402 6.81637 15.6488 6.70674 15.7451 6.60942L15.7451 6.60941L19.1831 3.24999Z',
  d7: 'M7.74342 17.7838C8.27718 17.6419 8.82487 17.9596 8.96672 18.4934C9.30661 19.7723 10.5207 20.7502 12.0003 20.7502C13.4798 20.7502 14.6939 19.7723 15.0338 18.4934C15.1757 17.9596 15.7233 17.6419 16.2571 17.7838C16.7909 17.9256 17.1086 18.4733 16.9667 19.007C16.3896 21.1785 14.3697 22.7502 12.0003 22.7502C9.63086 22.7502 7.61089 21.1785 7.03381 19.007C6.89196 18.4733 7.20966 17.9256 7.74342 17.7838Z',
  d8: 'M14.8074 19.0788C15.553 18.9866 16.2867 18.8573 16.9988 18.6908C17.0049 18.7945 16.9949 18.9011 16.9667 19.007C16.3896 21.1785 14.3697 22.7502 12.0003 22.7502C9.63086 22.7502 7.61089 21.1785 7.03381 19.007C7.00565 18.9011 6.9956 18.7946 7.00175 18.6909C7.71382 18.8574 8.44752 18.9867 9.1932 19.0788C9.7001 20.059 10.7564 20.7502 12.0003 20.7502C13.2442 20.7502 14.3005 20.059 14.8074 19.0788Z',
  d9: 'M15.4988 3.99902H20.9988V4.49902L15.9988 9.49902V9.99902H21.4988',
  d10: 'M15.9988 17.999C15.9988 20.2081 14.2079 21.999 11.9988 21.999C9.78964 21.999 7.99878 20.2081 7.99878 17.999',
  d11: 'M14.4919 2.41224C13.7223 2.14574 12.8958 2.00098 12.0354 2.00098C7.8928 2.00098 4.53455 5.35724 4.53455 9.49739V12.408L2.53932 15.8534C2.51635 15.8931 2.5216 15.9418 2.55498 15.9733C5.45746 18.7063 15.0927 21.1345 21.4312 15.9541C21.4693 15.9229 21.4792 15.8682 21.4541 15.8259L19.5022 12.5343',
  d12: 'M11.5 21.25C9.70507 21.25 8.25 19.7949 8.25 18H6.75C6.75 20.6234 8.87665 22.75 11.5 22.75C14.1234 22.75 16.25 20.6234 16.25 18H14.75C14.75 19.7949 13.2949 21.25 11.5 21.25Z',
  d13: 'M19.8358 5H16.25V3H22.75V4.91421L18.6642 9H22.25V11H15.75V9.08579L19.8358 5Z',
  d14: 'M11.5 1.25C7.03436 1.25 3.41425 4.94365 3.41425 9.5V12.3008L1.25 16.1652L1.70987 16.5687C3.94472 18.5294 7.52928 19.75 11.5 19.75C15.4707 19.75 19.0553 18.5294 21.2901 16.5687L21.75 16.1652L19.6973 12.5H14.25V8.46447L16.2145 6.5H14.75V1.94349C13.7554 1.49754 12.656 1.25 11.5 1.25Z',
} as const;

export const IconNotificationSnooze02StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-02-stroke-rounded IconNotificationSnooze02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconNotificationSnooze02DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-02-duotone-rounded IconNotificationSnooze02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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
    </TheIconWrapper>
  );
};

export const IconNotificationSnooze02TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-02-twotone-rounded IconNotificationSnooze02TwotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconNotificationSnooze02SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-02-solid-rounded IconNotificationSnooze02SolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconNotificationSnooze02BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-02-bulk-rounded IconNotificationSnooze02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
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

export const IconNotificationSnooze02StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-02-stroke-sharp IconNotificationSnooze02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconNotificationSnooze02SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="notification-snooze-02-solid-sharp IconNotificationSnooze02SolidSharp"
    >
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfNotificationSnooze02: TheIconSelfPack = {
  name: 'NotificationSnooze02',
  StrokeRounded: IconNotificationSnooze02StrokeRounded,
  DuotoneRounded: IconNotificationSnooze02DuotoneRounded,
  TwotoneRounded: IconNotificationSnooze02TwotoneRounded,
  SolidRounded: IconNotificationSnooze02SolidRounded,
  BulkRounded: IconNotificationSnooze02BulkRounded,
  StrokeSharp: IconNotificationSnooze02StrokeSharp,
  SolidSharp: IconNotificationSnooze02SolidSharp,
};