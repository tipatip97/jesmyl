import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
  d2: 'M7.03315 12.0065H13.008M13.008 12.0065C13.008 12.5743 11.1339 14.0151 11.1339 14.0151M13.008 12.0065C13.008 11.424 11.1339 10.021 11.1339 10.021M16.0332 9.01074V15.0107',
  d3: 'M7 11.9958H12.9749M12.9749 11.9958C12.9749 12.5636 11.1007 14.0044 11.1007 14.0044M12.9749 11.9958C12.9749 11.4133 11.1007 10.0103 11.1007 10.0103M16 9V15',
  d4: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16 16.75C16.4142 16.75 16.75 16.4142 16.75 16V8C16.75 7.58579 16.4142 7.25 16 7.25C15.5858 7.25 15.25 7.58579 15.25 8V16C15.25 16.4142 15.5858 16.75 16 16.75ZM5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H10.25V13.061C10.25 13.3347 10.2499 13.6033 10.2736 13.8111C10.2921 13.9739 10.3538 14.4463 10.7721 14.6628C11.1907 14.8795 11.57 14.6345 11.6986 14.5482C11.8633 14.4377 12.057 14.2689 12.2545 14.0969L12.2826 14.0724C12.5848 13.8093 12.9202 13.5032 13.184 13.2002C13.3158 13.0489 13.446 12.88 13.5468 12.7015C13.6414 12.5338 13.75 12.2885 13.75 12C13.75 11.7115 13.6414 11.4662 13.5468 11.2985C13.446 11.12 13.3158 10.9511 13.184 10.7998C12.9202 10.4968 12.5848 10.1907 12.2826 9.92757L12.2545 9.90312C12.057 9.73106 11.8633 9.56231 11.6986 9.4518C11.57 9.36549 11.1907 9.12048 10.7721 9.33716C10.3538 9.55368 10.2921 10.0261 10.2736 10.1889C10.2499 10.3967 10.25 10.6653 10.25 10.939V11.25H6C5.58579 11.25 5.25 11.5858 5.25 12Z',
  d5: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d6: 'M16.75 8L16.75 16C16.75 16.4142 16.4142 16.75 16 16.75C15.5858 16.75 15.25 16.4142 15.25 16L15.25 8C15.25 7.58579 15.5858 7.25 16 7.25C16.4142 7.25 16.75 7.58579 16.75 8Z',
  d7: 'M6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25L10.25 11.25L10.25 10.939C10.25 10.6653 10.2499 10.3967 10.2736 10.1889C10.2921 10.0261 10.3538 9.55368 10.7721 9.33716C11.1907 9.12048 11.57 9.36549 11.6986 9.4518C11.8633 9.56231 12.057 9.73106 12.2545 9.90312L12.2826 9.92757C12.5848 10.1907 12.9202 10.4968 13.184 10.7998C13.3158 10.9511 13.446 11.12 13.5468 11.2985C13.6414 11.4662 13.75 11.7115 13.75 12C13.75 12.2885 13.6414 12.5338 13.5468 12.7015C13.446 12.88 13.3158 13.0488 13.184 13.2002C12.9202 13.5032 12.5848 13.8093 12.2826 14.0724L12.2545 14.0969C12.057 14.2689 11.8633 14.4377 11.6986 14.5482C11.57 14.6345 11.1907 14.8795 10.7721 14.6628C10.3538 14.4463 10.2921 13.9739 10.2736 13.8111C10.2499 13.6033 10.25 13.3347 10.25 13.061L10.25 12.75L6 12.75Z',
  d8: 'M15.9883 8.00049L15.9883 15.9952M6 11.9911H12.3904M9.99615 14.9952L12.9814 11.9911L9.98668 8.9985',
  d9: 'M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15 16H17V8H15V16ZM14.4142 12L10.7071 8.29289L9.29289 9.70711L10.5858 11H6V13H10.5858L9.29289 14.2929L10.7071 15.7071L14.4142 12Z',
};

export const IconLogoutCircle02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-circle-02-stroke-rounded IconLogoutCircle02StrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconLogoutCircle02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-circle-02-duotone-rounded IconLogoutCircle02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogoutCircle02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-circle-02-twotone-rounded IconLogoutCircle02TwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconLogoutCircle02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-circle-02-solid-rounded IconLogoutCircle02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogoutCircle02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-circle-02-bulk-rounded IconLogoutCircle02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
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

export const IconLogoutCircle02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-circle-02-stroke-sharp IconLogoutCircle02StrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconLogoutCircle02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="logout-circle-02-solid-sharp IconLogoutCircle02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfLogoutCircle02: TheIconSelfPack = {
  name: 'LogoutCircle02',
  StrokeRounded: IconLogoutCircle02StrokeRounded,
  DuotoneRounded: IconLogoutCircle02DuotoneRounded,
  TwotoneRounded: IconLogoutCircle02TwotoneRounded,
  SolidRounded: IconLogoutCircle02SolidRounded,
  BulkRounded: IconLogoutCircle02BulkRounded,
  StrokeSharp: IconLogoutCircle02StrokeSharp,
  SolidSharp: IconLogoutCircle02SolidSharp,
};