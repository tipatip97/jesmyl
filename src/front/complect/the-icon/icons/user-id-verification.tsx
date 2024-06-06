import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.13432 2.5C6.46805 2.56075 4.9107 2.81456 3.84664 3.87493C2.91537 4.80297 2.60406 6.10756 2.5 8.2M14.8657 2.5C17.532 2.56075 19.0893 2.81456 20.1534 3.87493C21.0846 4.80297 21.3959 6.10756 21.5 8.2M14.8657 21.5C17.532 21.4392 19.0893 21.1854 20.1534 20.1251C21.0846 19.197 21.3959 17.8924 21.5 15.8M9.13432 21.5C6.46805 21.4392 4.9107 21.1854 3.84664 20.1251C2.91537 19.197 2.60406 17.8924 2.5 15.8',
  d2: 'M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z',
  d3: 'M9.13432 2.5C6.46805 2.56075 4.9107 2.81456 3.84664 3.87493C2.91537 4.80297 2.60406 6.10756 2.5 8.2V15.8C2.60406 17.8924 2.91537 19.197 3.84664 20.1251C4.9107 21.1854 6.46805 21.4392 9.13432 21.5H14.8657C17.532 21.4392 19.0893 21.1854 20.1534 20.1251C21.0846 19.197 21.3959 17.8924 21.5 15.8V8.2C21.3959 6.10756 21.0846 4.80297 20.1534 3.87493C19.0893 2.81456 17.532 2.56075 14.8657 2.5H9.13432ZM11.9918 12C13.3745 12 14.4954 10.8807 14.4954 9.5C14.4954 8.11929 13.3745 7 11.9918 7C10.6092 7 9.48828 8.11929 9.48828 9.5C9.48828 10.8807 10.6092 12 11.9918 12Z',
  d4: 'M10.0749 2.43281C10.0869 2.95985 9.6694 3.39684 9.14236 3.40885C6.42782 3.4707 5.24794 3.74835 4.48144 4.51219C3.81927 5.17206 3.51115 6.15377 3.40793 8.22923C3.38174 8.75576 2.93368 9.16137 2.40715 9.13519C1.88062 9.109 1.47501 8.66094 1.5012 8.13441C1.6071 6.00497 1.92456 4.36502 3.13386 3.15992C4.50565 1.79288 6.45536 1.56049 9.09887 1.50025C9.62592 1.48824 10.0629 1.90576 10.0749 2.43281ZM13.9251 2.43281C13.9371 1.90576 14.3741 1.48824 14.9011 1.50025C17.5446 1.56049 19.4943 1.79288 20.8661 3.15992C22.0754 4.36502 22.3929 6.00497 22.4988 8.13441C22.525 8.66094 22.1194 9.109 21.5928 9.13519C21.0663 9.16137 20.6183 8.75576 20.5921 8.22923C20.4889 6.15377 20.1807 5.17206 19.5186 4.51219C18.7521 3.74835 17.5722 3.4707 14.8576 3.40885C14.3306 3.39684 13.9131 2.95985 13.9251 2.43281ZM2.40715 14.8648C2.93368 14.8386 3.38174 15.2442 3.40793 15.7708C3.51115 17.8462 3.81927 18.8279 4.48144 19.4878C5.24794 20.2517 6.42782 20.5293 9.14236 20.5912C9.6694 20.6032 10.0869 21.0401 10.0749 21.5672C10.0629 22.0942 9.62592 22.5118 9.09887 22.4997C6.45536 22.4395 4.50565 22.2071 3.13386 20.8401C1.92456 19.635 1.6071 17.995 1.5012 15.8656C1.47501 15.3391 1.88062 14.891 2.40715 14.8648ZM21.5928 14.8648C22.1194 14.891 22.525 15.3391 22.4988 15.8656C22.3929 17.995 22.0754 19.635 20.8661 20.8401C19.4943 22.2071 17.5446 22.4395 14.9011 22.4997C14.3741 22.5118 13.9371 22.0942 13.9251 21.5672C13.9131 21.0401 14.3306 20.6032 14.8576 20.5912C17.5722 20.5293 18.7521 20.2517 19.5186 19.4878C20.1807 18.8279 20.4889 17.8462 20.5921 15.7708C20.6183 15.2442 21.0663 14.8386 21.5928 14.8648Z',
  d5: 'M8.8138 9.55723C8.8138 7.80306 10.2376 6.38281 11.9917 6.38281C13.7458 6.38281 15.1696 7.80306 15.1696 9.55723C15.1696 11.3114 13.7458 12.7316 11.9917 12.7316C10.2376 12.7316 8.8138 11.3114 8.8138 9.55723Z',
  d6: 'M7.09875 17.4127C6.80613 17.1333 6.7954 16.6696 7.07479 16.3769C9.62701 13.7038 14.3286 13.5595 16.934 16.3864C17.2082 16.6839 17.1893 17.1473 16.8918 17.4215C16.7509 17.5513 16.5729 17.6154 16.3953 17.6154L7.60463 17.6154C7.42279 17.6154 7.24066 17.5481 7.09875 17.4127Z',
  d7: 'M10.0291 2.20502C10.0414 2.74461 9.61393 3.192 9.07434 3.2043C6.29516 3.26762 5.08718 3.55188 4.30243 4.33391C3.6245 5.00949 3.30904 6.01458 3.20336 8.13945C3.17655 8.67852 2.71782 9.09379 2.17875 9.06698C1.63969 9.04017 1.22442 8.58143 1.25123 8.04237C1.35965 5.86224 1.68467 4.18323 2.92276 2.94944C4.32722 1.54985 6.32335 1.31193 9.02981 1.25026C9.5694 1.23796 10.0168 1.66542 10.0291 2.20502ZM13.9709 2.20502C13.9832 1.66542 14.4306 1.23796 14.9702 1.25026C17.6767 1.31193 19.6728 1.54985 21.0773 2.94944C22.3154 4.18323 22.6404 5.86223 22.7488 8.04237C22.7756 8.58143 22.3603 9.04017 21.8213 9.06698C21.2822 9.09379 20.8235 8.67852 20.7967 8.13945C20.691 6.01458 20.3755 5.00949 19.6976 4.33391C18.9128 3.55188 17.7049 3.26762 14.9257 3.2043C14.3861 3.192 13.9586 2.74461 13.9709 2.20502ZM2.17875 14.933C2.71782 14.9062 3.17655 15.3215 3.20336 15.8605C3.30904 17.9854 3.6245 18.9905 4.30243 19.6661C5.08718 20.4481 6.29516 20.7324 9.07434 20.7957C9.61393 20.808 10.0414 21.2554 10.0291 21.795C10.0168 22.3346 9.5694 22.762 9.02981 22.7497C6.32335 22.6881 4.32722 22.4501 2.92276 21.0506C1.68467 19.8168 1.35965 18.1378 1.25123 15.9576C1.22442 15.4186 1.63969 14.9598 2.17875 14.933ZM21.8213 14.933C22.3603 14.9598 22.7756 15.4186 22.7488 15.9576C22.6404 18.1378 22.3154 19.8168 21.0773 21.0506C19.6728 22.4501 17.6767 22.6881 14.9702 22.7497C14.4306 22.762 13.9832 22.3346 13.9709 21.795C13.9586 21.2554 14.3861 20.808 14.9257 20.7957C17.7049 20.7324 18.9128 20.4481 19.6976 19.6661C20.3755 18.9905 20.691 17.9854 20.7967 15.8605C20.8235 15.3215 21.2822 14.9062 21.8213 14.933Z',
  d8: 'M8.73797 9.5C8.73797 7.70407 10.1956 6.25 11.9915 6.25C13.7874 6.25 15.2451 7.70407 15.2451 9.5C15.2451 11.2959 13.7874 12.75 11.9915 12.75C10.1956 12.75 8.73797 11.2959 8.73797 9.5Z',
  d9: 'M6.98208 17.5425C6.68249 17.2564 6.67151 16.7817 6.95754 16.4821C9.57054 13.7453 14.3841 13.5975 17.0515 16.4917C17.3322 16.7963 17.3129 17.2708 17.0083 17.5515C16.8641 17.6844 16.6818 17.75 16.5 17.75L7.5 17.75C7.31383 17.75 7.12736 17.6812 6.98208 17.5425Z',
  d10: 'M9.14426 2.5H2.5V9.14426M14.8557 2.5H21.5V9.14426M14.8557 21.5H21.5V14.8557M9.14426 21.5H2.5V14.8557',
  d11: 'M1.5 1.5H9.14426V3.5H3.5V9.14426H1.5V1.5ZM20.5 3.5H14.8557V1.5H22.5V9.14426H20.5V3.5ZM22.5 14.8557V22.5H14.8557V20.5H20.5V14.8557H22.5ZM3.5 20.5V14.8557H1.5V22.5H9.14426V20.5H3.5Z',
  d12: 'M8.73828 9.5C8.73828 7.70407 10.196 6.25 11.9918 6.25C13.7877 6.25 15.2454 7.70407 15.2454 9.5C15.2454 11.2959 13.7877 12.75 11.9918 12.75C10.196 12.75 8.73828 11.2959 8.73828 9.5Z',
  d13: 'M15.7585 17.5049C13.8159 15.3971 10.1737 15.4684 8.21706 17.5178L6.77051 16.1366C9.47727 13.3016 14.4582 13.1429 17.2291 16.1495L15.7585 17.5049Z',
};

export const IconUserIdVerificationStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-id-verification-stroke-rounded IconUserIdVerificationStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserIdVerificationDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-id-verification-duotone-rounded IconUserIdVerificationDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
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
      />
    </TheIconWrapper>
  );
};

export const IconUserIdVerificationTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-id-verification-twotone-rounded IconUserIdVerificationTwotoneRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserIdVerificationSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-id-verification-solid-rounded IconUserIdVerificationSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserIdVerificationBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-id-verification-bulk-rounded IconUserIdVerificationBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconUserIdVerificationStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-id-verification-stroke-sharp IconUserIdVerificationStrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconUserIdVerificationSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-id-verification-solid-sharp IconUserIdVerificationSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfUserIdVerification: TheIconSelfPack = {
  name: 'UserIdVerification',
  StrokeRounded: IconUserIdVerificationStrokeRounded,
  DuotoneRounded: IconUserIdVerificationDuotoneRounded,
  TwotoneRounded: IconUserIdVerificationTwotoneRounded,
  SolidRounded: IconUserIdVerificationSolidRounded,
  BulkRounded: IconUserIdVerificationBulkRounded,
  StrokeSharp: IconUserIdVerificationStrokeSharp,
  SolidSharp: IconUserIdVerificationSolidSharp,
};