import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12.5 3.00372C11.6049 2.99039 10.7047 3.01289 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0021 12.836 22.011 12.1627 21.9866 11.5',
  d2: 'M15 5.5H22M18.5 2L18.5 9',
  d3: 'M11.9953 12.5H12.0042M15.9908 12.5H15.9998M7.99976 12.5H8.00873',
  d4: 'M14.1706 21.3905C18.3536 21.1125 21.6856 17.7332 21.9598 13.4909C22.0134 12.6607 22.0134 11.8009 21.9598 10.9707C21.6856 6.72838 18.3536 3.34913 14.1706 3.07107C12.7435 2.97621 11.2536 2.97641 9.8294 3.07107C5.64639 3.34913 2.31441 6.72838 2.04024 10.9707C1.98659 11.8009 1.98659 12.6607 2.04024 13.4909C2.1401 15.036 2.82343 16.4666 3.62791 17.6746C4.09501 18.5203 3.78674 19.5758 3.30021 20.4978C2.94941 21.1626 2.77401 21.495 2.91484 21.7351C3.05568 21.9752 3.37026 21.9829 3.99943 21.9982C5.24367 22.0285 6.08268 21.6757 6.74868 21.1846C7.1264 20.9061 7.31527 20.7668 7.44544 20.7508C7.5756 20.7348 7.83177 20.8403 8.34401 21.0513C8.8044 21.2409 9.33896 21.3579 9.8294 21.3905C11.2536 21.4852 12.7435 21.4854 14.1706 21.3905Z',
  d5: 'M18.375 1.125C18.9273 1.125 19.375 1.57272 19.375 2.125V4.625H21.875C22.4273 4.625 22.875 5.07272 22.875 5.625C22.875 6.17728 22.4273 6.625 21.875 6.625H19.375V9.125C19.375 9.67728 18.9273 10.125 18.375 10.125C17.8227 10.125 17.375 9.67728 17.375 9.125V6.625H14.875C14.3227 6.625 13.875 6.17728 13.875 5.625C13.875 5.07272 14.3227 4.625 14.875 4.625H17.375V2.125C17.375 1.57272 17.8227 1.125 18.375 1.125Z',
  d6: 'M15.7164 2.70442C15.8103 2.72822 15.875 2.81335 15.875 2.91019C15.875 3.02883 15.7788 3.125 15.6602 3.125H14.875C13.4943 3.125 12.375 4.24429 12.375 5.625C12.375 7.00571 13.4943 8.125 14.875 8.125H15.275C15.5578 8.125 15.6993 8.125 15.7871 8.21287C15.875 8.30074 15.875 8.44216 15.875 8.725V9.125C15.875 10.5057 16.9943 11.625 18.375 11.625C19.7557 11.625 20.875 10.5057 20.875 9.125V8.72484C20.875 8.44207 20.875 8.30068 20.9628 8.21282C21.0507 8.12495 21.1921 8.12492 21.4748 8.12484L21.5095 8.12483C21.707 8.12478 21.8058 8.12475 21.8835 8.17943C21.9612 8.23411 21.9931 8.32312 22.0569 8.50116C22.3446 9.30379 22.5257 10.1584 22.5832 11.0474C22.6389 11.9098 22.6389 12.8018 22.5832 13.6642C22.2853 18.274 18.662 21.9603 14.0954 22.2639C12.6351 22.3609 11.1119 22.3607 9.65465 22.2639C9.08972 22.2263 8.47478 22.0927 7.93339 21.8698C7.84733 21.8343 7.77126 21.803 7.70361 21.7755C7.56703 21.7198 7.49873 21.692 7.42104 21.7016C7.34335 21.7112 7.28359 21.7552 7.16407 21.8431L7.0688 21.9133C6.27636 22.4976 5.27592 22.9075 3.85617 22.873L3.81044 22.8719C3.53655 22.8653 3.24461 22.8584 3.00652 22.8123C2.71975 22.7568 2.36496 22.6181 2.14291 22.2395C1.90123 21.8275 1.99813 21.4108 2.09188 21.1484C2.18036 20.9007 2.33374 20.6102 2.49042 20.3135L2.5119 20.2728C2.97823 19.3891 3.10814 18.6669 2.85881 18.1854C2.02648 16.929 1.27772 15.3806 1.1668 13.6642C1.11107 12.8018 1.11107 11.9098 1.1668 11.0474C1.46472 6.43758 5.088 2.75129 9.65465 2.44773C11.1119 2.35086 12.6351 2.35066 14.0954 2.44773C14.6511 2.48467 15.1929 2.57171 15.7164 2.70442ZM7.875 11.625C7.32272 11.625 6.875 12.0727 6.875 12.625C6.875 13.1773 7.32272 13.625 7.875 13.625H7.88397C8.43626 13.625 8.88397 13.1773 8.88397 12.625C8.88397 12.0727 8.43626 11.625 7.88397 11.625H7.875ZM11.8705 11.625C11.3182 11.625 10.8705 12.0727 10.8705 12.625C10.8705 13.1773 11.3182 13.625 11.8705 13.625H11.8795C12.4318 13.625 12.8795 13.1773 12.8795 12.625C12.8795 12.0727 12.4318 11.625 11.8795 11.625H11.8705ZM15.866 11.625C15.3137 11.625 14.866 12.0727 14.866 12.625C14.866 13.1773 15.3137 13.625 15.866 13.625H15.875C16.4273 13.625 16.875 13.1773 16.875 12.625C16.875 12.0727 16.4273 11.625 15.875 11.625H15.866Z',
  d7: 'M15.875 2.91019C15.875 2.81335 15.8103 2.72821 15.7164 2.70442C15.1929 2.57171 14.6511 2.48467 14.0954 2.44773C12.6351 2.35066 11.1119 2.35086 9.65465 2.44773C5.088 2.75129 1.46472 6.43758 1.1668 11.0474C1.11107 11.9098 1.11107 12.8018 1.1668 13.6642C1.27772 15.3806 2.02648 16.929 2.85881 18.1854C3.10814 18.6669 2.97823 19.3891 2.5119 20.2728L2.49042 20.3135C2.33374 20.6102 2.18036 20.9007 2.09188 21.1484C1.99813 21.4108 1.90123 21.8275 2.14291 22.2395C2.36496 22.6181 2.71975 22.7568 3.00652 22.8123C3.24461 22.8584 3.53655 22.8653 3.81044 22.8719L3.85617 22.873C5.27592 22.9075 6.27636 22.4976 7.0688 21.9133C7.10278 21.8882 7.13446 21.8649 7.16407 21.8431C7.28359 21.7552 7.34335 21.7112 7.42104 21.7016C7.49873 21.692 7.56703 21.7198 7.70361 21.7755C7.77126 21.803 7.84733 21.8343 7.93339 21.8698C8.47478 22.0927 9.08972 22.2263 9.65465 22.2639C11.1119 22.3607 12.6351 22.3609 14.0954 22.2639C18.662 21.9603 22.2853 18.274 22.5832 13.6642C22.6389 12.8018 22.6389 11.9098 22.5832 11.0474C22.5257 10.1584 22.3446 9.30379 22.0569 8.50115C21.9931 8.32312 21.9612 8.23411 21.8835 8.17943C21.8058 8.12475 21.707 8.12478 21.5095 8.12483L21.4748 8.12484C21.1921 8.12492 21.0507 8.12495 20.9628 8.21282C20.875 8.30068 20.875 8.44207 20.875 8.72484V9.125C20.875 10.5057 19.7557 11.625 18.375 11.625C16.9943 11.625 15.875 10.5057 15.875 9.125V8.725C15.875 8.44216 15.875 8.30074 15.7871 8.21287C15.6993 8.125 15.5578 8.125 15.275 8.125H14.875C13.4943 8.125 12.375 7.00571 12.375 5.625C12.375 4.24429 13.4943 3.125 14.875 3.125H15.6602C15.7788 3.125 15.875 3.02883 15.875 2.91019Z',
  d8: 'M6.875 12.625C6.875 12.0727 7.32272 11.625 7.875 11.625H7.88397C8.43626 11.625 8.88397 12.0727 8.88397 12.625C8.88397 13.1773 8.43626 13.625 7.88397 13.625H7.875C7.32272 13.625 6.875 13.1773 6.875 12.625ZM10.8705 12.625C10.8705 12.0727 11.3182 11.625 11.8705 11.625H11.8795C12.4318 11.625 12.8795 12.0727 12.8795 12.625C12.8795 13.1773 12.4318 13.625 11.8795 13.625H11.8705C11.3182 13.625 10.8705 13.1773 10.8705 12.625ZM14.866 12.625C14.866 12.0727 15.3137 11.625 15.866 11.625H15.875C16.4273 11.625 16.875 12.0727 16.875 12.625C16.875 13.1773 16.4273 13.625 15.875 13.625H15.866C15.3137 13.625 14.866 13.1773 14.866 12.625Z',
  d9: 'M15 5.75061H22M18.5 2.25V9.25121',
  d10: 'M11.9955 12.752H12.0044M15.991 12.752H16M8 12.752H8.00897',
  d11: 'M12.7519 3.26558C12.3851 3.25949 11.9537 3.24716 11.5599 3.26555C4.29634 3.39483 1.99805 7.83447 1.99805 12.8194C1.99805 14.524 2.34495 16.6109 3.59754 18.2505L2.01188 22.2282C2.00875 22.236 2.01618 22.244 2.02423 22.2414L6.57403 20.7796C8.07355 21.6099 9.77357 21.7927 11.6569 21.7927C18.1494 22.2479 21.9673 18.0427 21.9673 13.0578C21.9807 12.4384 22.0331 11.799 21.9673 11.1828',
  d12: 'M18.25 3.75V1.25H20.25V3.75H22.75V5.75H20.25V8.25H18.25V5.75H15.75V3.75H18.25Z',
  d13: 'M12.7895 2.25H12.7895H12.7896C13.4486 2.24999 13.8205 2.24999 14.1405 2.2722C14.261 2.28057 14.3808 2.29122 14.5 2.30412V7H17V9.5H21.5V7H21.5829C22.227 8.15558 22.631 9.46439 22.7278 10.8595C22.75 11.1796 22.75 11.5514 22.75 12.2105V12.2895C22.75 12.9486 22.75 13.3204 22.7278 13.6405C22.4082 18.2443 18.7443 21.9082 14.1405 22.2278C13.8204 22.25 13.4486 22.25 12.7895 22.25H11.2105C10.5514 22.25 10.1796 22.25 9.85949 22.2278C8.63831 22.143 7.48219 21.8226 6.43709 21.3113L1.47483 22.75L2.77921 18.0954C1.92471 16.8022 1.38603 15.2804 1.2722 13.6405C1.24999 13.3205 1.24999 12.9486 1.25 12.2895V12.2895V12.2895V12.2105V12.2105V12.2104C1.24999 11.5514 1.24999 11.1795 1.2722 10.8595C1.59176 6.25571 5.25571 2.59176 9.85949 2.2722C10.1795 2.24999 10.5514 2.24999 11.2105 2.25H11.2105H11.2105H12.7895ZM9.00897 11.5H7V13.5H9.00897V11.5ZM13.0045 11.5H10.9955V13.5H13.0045V11.5ZM17 11.5H14.991V13.5H17V11.5Z',
};

export const IconMessageAdd02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-02-stroke-rounded IconMessageAdd02StrokeRounded"
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

export const IconMessageAdd02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-02-duotone-rounded IconMessageAdd02DuotoneRounded"
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

export const IconMessageAdd02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-02-twotone-rounded IconMessageAdd02TwotoneRounded"
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
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageAdd02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-02-solid-rounded IconMessageAdd02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMessageAdd02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-02-bulk-rounded IconMessageAdd02BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMessageAdd02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-02-stroke-sharp IconMessageAdd02StrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
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

export const IconMessageAdd02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="message-add-02-solid-sharp IconMessageAdd02SolidSharp"
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
    </TheIconWrapper>
  );
};

export const iconPackOfMessageAdd02: TheIconSelfPack = {
  name: 'MessageAdd02',
  StrokeRounded: IconMessageAdd02StrokeRounded,
  DuotoneRounded: IconMessageAdd02DuotoneRounded,
  TwotoneRounded: IconMessageAdd02TwotoneRounded,
  SolidRounded: IconMessageAdd02SolidRounded,
  BulkRounded: IconMessageAdd02BulkRounded,
  StrokeSharp: IconMessageAdd02StrokeSharp,
  SolidSharp: IconMessageAdd02SolidSharp,
};