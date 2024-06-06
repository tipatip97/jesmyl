import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.5 13.4994V14.9993C17.5 18.2992 17.5 19.9491 16.4749 20.9742C15.4497 21.9993 13.7998 21.9993 10.5 21.9993C7.20017 21.9993 5.55025 21.9993 4.52513 20.9742C3.5 19.9491 3.5 18.2992 3.5 14.9993V8.99933C3.5 5.6995 3.5 4.04959 4.52513 3.02446C5.38151 2.16808 6.67392 2.02711 9 2.00391',
  d2: 'M15.9991 2C14.5744 2 13.6506 2.90855 12.5581 3.23971C12.1138 3.37436 11.8917 3.44168 11.8018 3.53659C11.7119 3.6315 11.6856 3.77019 11.633 4.04756C11.0696 7.0157 12.301 9.75979 15.2375 10.8279C15.553 10.9426 15.7108 11 16.0007 11C16.2906 11 16.4484 10.9426 16.7639 10.8279C19.7002 9.75978 20.9304 7.01569 20.3669 4.04756C20.3142 3.77014 20.2879 3.63143 20.198 3.53652C20.1081 3.44161 19.886 3.37432 19.4418 3.23974C18.3488 2.90862 17.4239 2 15.9991 2Z',
  d3: 'M9.5 19H11.5',
  d4: 'M17.5 15.0032C17.5 18.3031 17.5 19.953 16.4749 20.9781C15.4497 22.0032 13.7998 22.0032 10.5 22.0032C7.20017 22.0032 5.55025 22.0032 4.52513 20.9781C3.5 19.953 3.5 18.3031 3.5 15.0032V9.00324C3.5 5.70341 3.5 4.05349 4.52513 3.02837C5.38151 2.17199 6.67392 2.03102 9 2.00781L15.9 2.00147C15.0392 2.02706 14.3614 2.38223 13.7115 2.72278C13.3279 2.92377 12.9541 3.11967 12.5581 3.23971C12.1138 3.37436 11.8917 3.44168 11.8018 3.53659C11.7119 3.6315 11.6856 3.77019 11.633 4.04756C11.0696 7.0157 12.301 9.75979 15.2375 10.8279C15.553 10.9426 15.7108 11 16.0007 11C16.2906 11 16.4484 10.9426 16.7639 10.8279C17.0225 10.7338 17.2679 10.6267 17.5 10.5076V15.0032Z',
  d5: 'M17.5 2.33599V2L16.0921 2.00129C16.6178 2.01595 17.0754 2.15356 17.5 2.33599Z',
  d6: 'M10.9638 1.33209C10.9464 1.25734 10.9057 1.25601 10.8242 1.25337C10.7203 1.25 10.5947 1.25 10.4442 1.25H10.4442C8.84166 1.24998 7.56269 1.24997 6.55962 1.38483C5.52335 1.52415 4.66994 1.81966 3.9948 2.4948C3.31966 3.16994 3.02415 4.02335 2.88483 5.05962C2.74997 6.06269 2.74998 7.34166 2.75 8.94423V8.94424V15.0558V15.0558C2.74998 16.6583 2.74997 17.9373 2.88483 18.9404C3.02415 19.9767 3.31966 20.8301 3.9948 21.5052C4.66994 22.1803 5.52335 22.4758 6.55962 22.6152C7.5627 22.75 8.84167 22.75 10.4443 22.75H10.5557C12.1583 22.75 13.4373 22.75 14.4404 22.6152C15.4767 22.4758 16.3301 22.1803 17.0052 21.5052C17.6803 20.8301 17.9759 19.9767 18.1152 18.9404C18.25 17.9373 18.25 16.6583 18.25 15.0557V13.4224C18.25 13.1499 18.25 13.0137 18.1937 12.9352C18.1521 12.8774 18.0997 12.8407 18.0312 12.8214C17.9382 12.7953 17.8031 12.8444 17.533 12.9427C17.2127 13.0595 16.6895 13.2503 16.0008 13.2503C15.3121 13.2504 14.7888 13.0595 14.4685 12.9427C10.3225 11.4345 8.69015 7.48829 9.42248 3.62835L9.42585 3.6105L9.42585 3.6105C9.44583 3.50443 9.48908 3.27483 9.54863 3.0766C9.62923 2.80834 9.7934 2.38554 10.1683 1.98971C10.3929 1.75255 10.6412 1.58845 10.8478 1.47814C10.9368 1.43061 10.9813 1.40684 10.9638 1.33209ZM9.5 18C8.94772 18 8.5 18.4477 8.5 19C8.5 19.5523 8.94772 20 9.5 20H11.5C12.0523 20 12.5 19.5523 12.5 19C12.5 18.4477 12.0523 18 11.5 18H9.5Z',
  d7: 'M13.8219 1.82275C14.408 1.53431 15.1173 1.25 15.9982 1.25C16.8792 1.25 17.5887 1.5343 18.175 1.82271C18.3696 1.91841 18.5403 2.00789 18.6971 2.09005C19.0508 2.27543 19.3336 2.42358 19.6583 2.52196C19.8622 2.58373 20.0689 2.64634 20.2134 2.7001C20.3392 2.74694 20.5665 2.83594 20.7415 3.02072C20.8965 3.1843 20.9706 3.36418 21.0137 3.50776C21.0498 3.6276 21.0803 3.78901 21.1028 3.90766C21.7229 7.17405 20.3583 10.3182 17.0193 11.5327C16.7123 11.6445 16.4225 11.75 15.9998 11.75C15.5771 11.75 15.2873 11.6445 14.9802 11.5327C11.6413 10.3183 10.2752 7.17434 10.8952 3.90771C10.9177 3.78907 10.9482 3.62769 10.9842 3.50785C11.0274 3.36428 11.1015 3.18442 11.2564 3.02085C11.4314 2.83606 11.6587 2.74702 11.7845 2.70018C11.9289 2.6464 12.1357 2.58375 12.3396 2.52195C12.6641 2.42359 12.9465 2.2755 13.3 2.09017C13.4567 2.00799 13.6274 1.91849 13.8219 1.82275Z',
  d8: 'M10.8242 1.25337C10.9057 1.25601 10.9464 1.25734 10.9638 1.33209C10.9813 1.40684 10.9368 1.43061 10.8478 1.47814C10.6412 1.58845 10.3929 1.75255 10.1683 1.98971C9.7934 2.38554 9.62923 2.80834 9.54863 3.0766C9.48908 3.27483 9.44583 3.50444 9.42585 3.6105L9.42248 3.62835C8.69015 7.48829 10.3225 11.4345 14.4685 12.9427C14.7888 13.0595 15.3121 13.2504 16.0008 13.2503C16.6895 13.2503 17.2127 13.0595 17.533 12.9427C17.8031 12.8444 17.9382 12.7953 18.0312 12.8214C18.0997 12.8407 18.1521 12.8774 18.1937 12.9352C18.25 13.0137 18.25 13.1499 18.25 13.4224V15.0557C18.25 16.6583 18.25 17.9373 18.1152 18.9404C17.9759 19.9767 17.6803 20.8301 17.0052 21.5052C16.3301 22.1803 15.4767 22.4758 14.4404 22.6152C13.4373 22.75 12.1583 22.75 10.5557 22.75H10.4443C8.84167 22.75 7.5627 22.75 6.55962 22.6152C5.52335 22.4758 4.66994 22.1803 3.9948 21.5052C3.31966 20.8301 3.02415 19.9767 2.88483 18.9404C2.74997 17.9373 2.74998 16.6583 2.75 15.0558V8.94424C2.74998 7.34166 2.74997 6.06269 2.88483 5.05962C3.02415 4.02335 3.31966 3.16994 3.9948 2.4948C4.66994 1.81966 5.52335 1.52415 6.55962 1.38483C7.56269 1.24997 8.84166 1.24998 10.4442 1.25C10.5947 1.25 10.7203 1.25 10.8242 1.25337Z',
  d9: 'M8.5 19C8.5 18.4477 8.94772 18 9.5 18H11.5C12.0523 18 12.5 18.4477 12.5 19C12.5 19.5523 12.0523 20 11.5 20H9.5C8.94772 20 8.5 19.5523 8.5 19Z',
  d10: 'M9.00963 2H3V22H17.0225V14',
  d11: 'M8.50882 19H11.5136',
  d12: 'M14.9386 2.39625C13.9275 2.94249 13.2442 3.45874 12.2631 3.45874C11.4348 7.40925 12.939 9.97057 16.3127 10.9938C16.3343 11.0021 16.3589 11.0036 16.3814 10.9978C20.0435 10.3396 21.715 7.1057 20.7216 3.34579C19.8038 3.34579 18.9936 2.89514 17.9684 2.37722C17.0097 1.89289 15.8835 1.88579 14.9386 2.39625Z',
  d13: 'M3.00003 1.25H10.4446L10.0592 2.80658C9.46695 5.19804 9.72828 7.54367 10.8203 9.45917C11.9192 11.387 13.7781 12.7267 16.0507 13.1894L16.4997 13.2808L16.9488 13.1894C17.222 13.1337 17.4893 13.0654 17.75 12.9849V22C17.75 22.4142 17.4142 22.75 17 22.75H3.00003C2.58582 22.75 2.25003 22.4142 2.25003 22V2C2.25003 1.58579 2.58582 1.25 3.00003 1.25ZM8.50003 20H11.5V18H8.50003V20Z',
  d14: 'M14.0668 1.98627C14.6947 1.66071 15.4868 1.25 16.5 1.25C17.5177 1.25 18.3106 1.66149 18.9392 1.98767L18.9789 2.00828C19.6459 2.35417 20.1397 2.59801 20.7565 2.59801H21.3437L21.4846 3.16714C21.9972 5.2372 21.7525 7.17947 20.8764 8.7163C19.9979 10.2573 18.5113 11.3406 16.6498 11.7195L16.5 11.75L16.3502 11.7195C14.4887 11.3406 13.0021 10.2573 12.1237 8.71629C11.2476 7.17947 11.0028 5.23719 11.5155 3.16714L11.6564 2.59801H12.2435C12.8617 2.59801 13.3573 2.35383 14.0246 2.00815L14.0668 1.98627Z',
};

export const IconMobileProtectionStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-protection-stroke-rounded IconMobileProtectionStrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconMobileProtectionDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-protection-duotone-rounded IconMobileProtectionDuotoneRounded"
    >
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      </g>
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
    </TheIconWrapper>
  );
};

export const IconMobileProtectionTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-protection-twotone-rounded IconMobileProtectionTwotoneRounded"
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

export const IconMobileProtectionSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-protection-solid-rounded IconMobileProtectionSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileProtectionBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-protection-bulk-rounded IconMobileProtectionBulkRounded"
    >
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
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileProtectionStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-protection-stroke-sharp IconMobileProtectionStrokeSharp"
    >
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMobileProtectionSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mobile-protection-solid-sharp IconMobileProtectionSolidSharp"
    >
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

export const iconPackOfMobileProtection: TheIconSelfPack = {
  name: 'MobileProtection',
  StrokeRounded: IconMobileProtectionStrokeRounded,
  DuotoneRounded: IconMobileProtectionDuotoneRounded,
  TwotoneRounded: IconMobileProtectionTwotoneRounded,
  SolidRounded: IconMobileProtectionSolidRounded,
  BulkRounded: IconMobileProtectionBulkRounded,
  StrokeSharp: IconMobileProtectionStrokeSharp,
  SolidSharp: IconMobileProtectionSolidSharp,
};