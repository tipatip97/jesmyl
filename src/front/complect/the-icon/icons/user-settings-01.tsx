import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M11.5 14.0116C9.45338 13.9164 7.38334 14.4064 5.57757 15.4816C4.1628 16.324 0.453365 18.0441 2.71266 20.1966C3.81631 21.248 5.04549 22 6.59087 22H12',
  d2: 'M15.5 6.5C15.5 8.98528 13.4853 11 11 11C8.51472 11 6.5 8.98528 6.5 6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5Z',
  d3: 'M18 20.7143V22M18 20.7143C16.8432 20.7143 15.8241 20.1461 15.2263 19.2833M18 20.7143C19.1568 20.7143 20.1759 20.1461 20.7737 19.2833M18 14.2857C19.1569 14.2857 20.1761 14.854 20.7738 15.7169M18 14.2857C16.8431 14.2857 15.8239 14.854 15.2262 15.7169M18 14.2857V13M22 14.9286L20.7738 15.7169M14.0004 20.0714L15.2263 19.2833M14 14.9286L15.2262 15.7169M21.9996 20.0714L20.7737 19.2833M20.7738 15.7169C21.1273 16.2271 21.3333 16.8403 21.3333 17.5C21.3333 18.1597 21.1272 18.773 20.7737 19.2833M15.2262 15.7169C14.8727 16.2271 14.6667 16.8403 14.6667 17.5C14.6667 18.1597 14.8728 18.773 15.2263 19.2833',
  d4: 'M5.09548 15.7585C5.27346 15.6578 5.43687 15.5654 5.57757 15.4816C8.6781 13.6354 12.5577 13.5146 15.7602 15.1192C15.5581 15.2961 15.3787 15.4967 15.2265 15.7163C14.8731 16.2266 14.667 16.8398 14.667 17.4994C14.667 18.1592 14.8731 18.7725 15.2266 19.2828C15.8244 20.1455 16.8435 20.7137 18.0003 20.7137C18.2832 20.7137 18.5578 20.6798 18.8201 20.6158C17.8364 21.4422 16.74 22 15.4091 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.678069 18.2582 3.48398 16.6704 5.09548 15.7585Z',
  d5: 'M17.8751 11.875C18.4274 11.875 18.8751 12.3227 18.8751 12.875V13.2736C19.6155 13.4438 20.2849 13.7991 20.8263 14.289L21.3343 13.9624C21.7989 13.6637 22.4176 13.7982 22.7163 14.2628C23.015 14.7274 22.8805 15.3461 22.4159 15.6447L21.9517 15.9432C22.1176 16.39 22.2085 16.8723 22.2085 17.375C22.2085 17.8778 22.1176 18.3602 21.9516 18.807L22.4155 19.1053C22.88 19.4039 23.0145 20.0226 22.7159 20.4872C22.4172 20.9518 21.7985 21.0863 21.3339 20.7876L20.8262 20.4612C20.2847 20.951 19.6154 21.3062 18.8751 21.4764V21.875C18.8751 22.4273 18.4274 22.875 17.8751 22.875C17.3228 22.875 16.8751 22.4273 16.8751 21.875V21.4764C16.1348 21.3062 15.4655 20.951 14.9241 20.4612L14.4163 20.7876C13.9518 21.0863 13.333 20.9518 13.0344 20.4872C12.7357 20.0226 12.8702 19.4039 13.3348 19.1053L13.7986 18.807C13.6327 18.3602 13.5418 17.8778 13.5418 17.375C13.5418 16.8723 13.6326 16.39 13.7986 15.9432L13.3343 15.6447C12.8698 15.3461 12.7353 14.7274 13.034 14.2628C13.3326 13.7982 13.9513 13.6637 14.4159 13.9624L14.9239 14.289C15.4654 13.7991 16.1347 13.4438 16.8751 13.2736V12.875C16.8751 12.3227 17.3228 11.875 17.8751 11.875ZM17.8751 15.1607C17.0503 15.1607 16.3365 15.5648 15.9233 16.1613C15.6807 16.5116 15.5418 16.9276 15.5418 17.375C15.5418 17.8225 15.6807 18.2385 15.9234 18.5888C16.3366 19.1852 17.0503 19.5893 17.8751 19.5893C18.6999 19.5893 19.4136 19.1852 19.8268 18.5888C20.0695 18.2385 20.2085 17.8225 20.2085 17.375C20.2085 16.9276 20.0695 16.5116 19.8269 16.1613C19.4137 15.5648 18.7 15.1607 17.8751 15.1607Z',
  d6: 'M5.62535 6.375C5.62535 3.4755 7.97586 1.125 10.8754 1.125C13.7748 1.125 16.1254 3.4755 16.1254 6.375C16.1254 9.27449 13.7748 11.625 10.8754 11.625C7.97586 11.625 5.62535 9.27449 5.62535 6.375Z',
  d7: 'M11.6355 13.1502C10.847 13.0979 10.0539 13.127 9.27043 13.2375C7.80596 13.4441 6.37389 13.9352 5.06904 14.7122C4.95276 14.7814 4.80915 14.8624 4.64655 14.9542C3.93373 15.3563 2.85606 15.9643 2.1179 16.6868C1.65623 17.1387 1.21757 17.7342 1.13783 18.4638C1.05302 19.2396 1.39149 19.9677 2.0705 20.6146C3.24195 21.7306 4.64774 22.625 6.46604 22.625H11.5838C12.2979 22.625 12.6549 22.625 12.6822 22.5687C12.7096 22.5124 12.454 22.1873 11.9428 21.537C11.8824 21.4602 11.8256 21.3805 11.7728 21.2984C11.1833 20.3814 11.2688 19.2243 11.9024 18.4103C12.0029 18.2813 12.0532 18.2167 12.0692 18.1619C12.0853 18.1071 12.0786 18.034 12.0653 17.8877C12.0499 17.7187 12.042 17.5477 12.042 17.375C12.042 17.2025 12.0498 17.0316 12.0652 16.8627C12.0786 16.7164 12.0852 16.6432 12.0692 16.5884C12.0531 16.5336 12.0028 16.4691 11.9023 16.34C11.2684 15.5261 11.1828 14.3687 11.7724 13.4516C11.8501 13.3307 11.779 13.1597 11.6355 13.1502Z',
  d8: 'M10.8755 1.125C7.97599 1.125 5.62549 3.4755 5.62549 6.375C5.62549 9.27449 7.97599 11.625 10.8755 11.625C13.775 11.625 16.1255 9.27449 16.1255 6.375C16.1255 3.4755 13.775 1.125 10.8755 1.125Z',
  d9: 'M9.27043 13.2375C10.0539 13.127 10.847 13.0979 11.6355 13.1502C11.779 13.1597 11.8501 13.3307 11.7724 13.4516C11.1828 14.3687 11.2684 15.526 11.9023 16.34C12.0028 16.4691 12.0531 16.5336 12.0692 16.5884C12.0852 16.6432 12.0786 16.7164 12.0652 16.8627C12.0498 17.0316 12.042 17.2025 12.042 17.375C12.042 17.5477 12.0499 17.7187 12.0653 17.8877C12.0786 18.034 12.0853 18.1071 12.0692 18.1619C12.0532 18.2167 12.0029 18.2813 11.9024 18.4103C11.2688 19.2243 11.1833 20.3814 11.7728 21.2984C11.8256 21.3805 11.8824 21.4602 11.9428 21.537C12.454 22.1873 12.7096 22.5124 12.6822 22.5687C12.6549 22.625 12.2979 22.625 11.5838 22.625H6.46604C4.64774 22.625 3.24195 21.7306 2.0705 20.6146C1.39149 19.9677 1.05302 19.2396 1.13783 18.4638C1.21757 17.7342 1.65623 17.1387 2.1179 16.6868C2.85606 15.9643 3.93367 15.3563 4.64649 14.9542C4.80909 14.8625 4.95276 14.7814 5.06904 14.7122C6.37389 13.9352 7.80596 13.4441 9.27043 13.2375Z',
  d10: 'M11 20H2C2 16.134 5.58172 13 10 13C10.3387 13 10.6724 13.0184 11 13.0542M14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6Z',
  d11: 'M17.5 20.2143V22M17.5 20.2143C16.3432 20.2143 15.3241 19.6461 14.7263 18.7833M17.5 20.2143C18.6568 20.2143 19.6759 19.6461 20.2737 18.7833M17.5 13.7857C18.6569 13.7857 19.6761 14.354 20.2738 15.2169M17.5 13.7857C16.3431 13.7857 15.3239 14.354 14.7262 15.2169M17.5 13.7857V12M22 14L20.2738 15.2169M13 20L14.7263 18.7833M13 14L14.7262 15.2169M22 20L20.2737 18.7833M20.2738 15.2169C20.6273 15.7271 20.8333 16.3403 20.8333 17C20.8333 17.6597 20.6272 18.273 20.2737 18.7833M14.7262 15.2169C14.3727 15.7271 14.1667 16.3403 14.1667 17C14.1667 17.6597 14.3728 18.273 14.7263 18.7833',
  d12: 'M16.4447 12.8986C15.7282 13.0659 15.0792 13.4117 14.5508 13.8884L13.5647 13.1827L12.4297 14.8173L13.4278 15.5317C13.2558 15.9887 13.1614 16.4836 13.1614 17C13.1614 17.5165 13.2558 18.0114 13.4279 18.4684L12.4298 19.1826L13.5647 20.8174L14.5509 20.1117C15.0793 20.5883 15.7282 20.9341 16.4447 21.1014V22H18.4147V21.1014C19.1312 20.9341 19.7801 20.5883 20.3084 20.1117L21.2947 20.8174L22.4296 19.1826L21.4315 18.4684C21.6035 18.0114 21.698 17.5165 21.698 17C21.698 16.4836 21.6036 15.9887 21.4315 15.5317L22.4297 14.8173L21.2946 13.1827L20.3085 13.8884C19.7802 13.4117 19.1312 13.0659 18.4147 12.8986V12H16.4447V12.8986ZM17.4297 14.7857C16.6172 14.7857 15.9142 15.1898 15.5072 15.7863C15.2682 16.1366 15.1314 16.5526 15.1314 17C15.1314 17.4475 15.2682 17.8635 15.5073 18.2138C15.9143 18.8102 16.6173 19.2143 17.4297 19.2143C18.2421 19.2143 18.9451 18.8102 19.3521 18.2138C19.5912 17.8635 19.728 17.4475 19.728 17C19.728 16.5526 19.5912 16.1366 19.3522 15.7863C18.9452 15.1898 18.2422 14.7857 17.4297 14.7857Z',
  d13: 'M5.24707 6C5.24707 3.37665 7.37372 1.25 9.99707 1.25C12.6204 1.25 14.7471 3.37665 14.7471 6C14.7471 8.62335 12.6204 10.75 9.99707 10.75C7.37372 10.75 5.24707 8.62335 5.24707 6Z',
  d14: 'M1.24707 20C1.24707 15.6289 5.26178 12.25 9.99707 12.25C10.7574 12.25 11.4991 12.3371 12.2087 12.5015L10.3512 15.1765L11.7211 16.1569C11.6798 16.4323 11.6585 16.7139 11.6585 17C11.6585 17.2861 11.6798 17.5677 11.7211 17.8431L10.3513 18.8232L11.6889 20.75H1.24707V20Z',
};

export const IconUserSettings01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-01-stroke-rounded IconUserSettings01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconUserSettings01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-01-duotone-rounded IconUserSettings01DuotoneRounded"
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

export const IconUserSettings01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-01-twotone-rounded IconUserSettings01TwotoneRounded"
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
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSettings01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-01-solid-rounded IconUserSettings01SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconUserSettings01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-01-bulk-rounded IconUserSettings01BulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconUserSettings01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-01-stroke-sharp IconUserSettings01StrokeSharp"
    >
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconUserSettings01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="user-settings-01-solid-sharp IconUserSettings01SolidSharp"
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
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfUserSettings01: TheIconSelfPack = {
  name: 'UserSettings01',
  StrokeRounded: IconUserSettings01StrokeRounded,
  DuotoneRounded: IconUserSettings01DuotoneRounded,
  TwotoneRounded: IconUserSettings01TwotoneRounded,
  SolidRounded: IconUserSettings01SolidRounded,
  BulkRounded: IconUserSettings01BulkRounded,
  StrokeSharp: IconUserSettings01StrokeSharp,
  SolidSharp: IconUserSettings01SolidSharp,
};