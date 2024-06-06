import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18 9.35714V10.5M18 9.35714C16.9878 9.35714 16.0961 8.85207 15.573 8.08517M18 9.35714C19.0122 9.35714 19.9039 8.85207 20.427 8.08517M18 3.64286C19.0123 3.64286 19.9041 4.148 20.4271 4.915M18 3.64286C16.9877 3.64286 16.0959 4.148 15.5729 4.915M18 3.64286V2.5M21.5 4.21429L20.4271 4.915M14.5004 8.78571L15.573 8.08517M14.5 4.21429L15.5729 4.915M21.4996 8.78571L20.427 8.08517M20.4271 4.915C20.7364 5.36854 20.9167 5.91364 20.9167 6.5C20.9167 7.08643 20.7363 7.63159 20.427 8.08517M15.5729 4.915C15.2636 5.36854 15.0833 5.91364 15.0833 6.5C15.0833 7.08643 15.2637 7.63159 15.573 8.08517',
  d2: 'M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6C10 7.40013 10 8.1002 9.72752 8.63498C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72752C2.89462 9.48783 2.51217 9.10538 2.27248 8.63498C2 8.1002 2 7.40013 2 6Z',
  d3: 'M2 18C2 16.5999 2 15.8998 2.27248 15.365C2.51217 14.8946 2.89462 14.5122 3.36502 14.2725C3.8998 14 4.59987 14 6 14C7.40013 14 8.1002 14 8.63498 14.2725C9.10538 14.5122 9.48783 14.8946 9.72752 15.365C10 15.8998 10 16.5999 10 18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18Z',
  d4: 'M14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18Z',
  d5: 'M18 1.25C18.5523 1.25 19 1.69772 19 2.25V2.51987C19.5993 2.67537 20.1434 2.96738 20.595 3.36095L20.9532 3.12703C21.4156 2.82503 22.0353 2.95507 22.3372 3.41748C22.6392 3.87988 22.5092 4.49955 22.0468 4.80154L21.7129 5.01962C21.8449 5.40613 21.9167 5.82007 21.9167 6.25C21.9167 6.68001 21.8449 7.09402 21.7128 7.48058L22.0464 7.69846C22.5088 8.00045 22.6389 8.62012 22.3369 9.08252C22.0349 9.54493 21.4152 9.67496 20.9528 9.37297L20.5949 9.13919C20.1433 9.53268 19.5992 9.82465 19 9.98013V10.25C19 10.8023 18.5523 11.25 18 11.25C17.4477 11.25 17 10.8023 17 10.25V9.98013C16.4007 9.82465 15.8567 9.53268 15.4051 9.13919L15.0472 9.37297C14.5848 9.67496 13.9651 9.54493 13.6631 9.08252C13.3611 8.62012 13.4912 8.00045 13.9536 7.69846L14.2872 7.48058C14.1551 7.09402 14.0833 6.68001 14.0833 6.25C14.0833 5.82007 14.1551 5.40613 14.2871 5.01962L13.9532 4.80154C13.4908 4.49955 13.3607 3.87988 13.6627 3.41748C13.9647 2.95507 14.5844 2.82503 15.0468 3.12703L15.405 3.36095C15.8565 2.96738 16.4007 2.67537 17 2.51987V2.25C17 1.69772 17.4477 1.25 18 1.25ZM18 4.39286C17.3266 4.39286 16.7405 4.7277 16.3991 5.22838C16.1987 5.52221 16.0833 5.87219 16.0833 6.25C16.0833 6.62786 16.1988 6.97787 16.3992 7.27173C16.7406 7.77235 17.3267 8.10714 18 8.10714C18.6733 8.10714 19.2594 7.77235 19.6008 7.27173C19.8012 6.97787 19.9167 6.62786 19.9167 6.25C19.9167 5.87219 19.8012 5.52221 19.6009 5.22838C19.2595 4.7277 18.6734 4.39286 18 4.39286Z',
  d6: 'M18.0314 13.25C18.7048 13.25 19.2555 13.25 19.7031 13.2866C20.1663 13.3244 20.5847 13.4051 20.9755 13.6042C21.587 13.9158 22.0842 14.413 22.3958 15.0245C22.5949 15.4153 22.6756 15.8337 22.7134 16.2969C22.75 16.7445 22.75 17.2952 22.75 17.9685V17.9686V18.0314V18.0315C22.75 18.7048 22.75 19.2555 22.7134 19.7031C22.6756 20.1663 22.5949 20.5847 22.3958 20.9755C22.0842 21.587 21.587 22.0842 20.9755 22.3958C20.5847 22.5949 20.1663 22.6756 19.7031 22.7134C19.2555 22.75 18.7048 22.75 18.0315 22.75H18.0314H17.9686H17.9685C17.2952 22.75 16.7445 22.75 16.2969 22.7134C15.8337 22.6756 15.4153 22.5949 15.0245 22.3958C14.413 22.0842 13.9158 21.587 13.6042 20.9755C13.4051 20.5847 13.3244 20.1663 13.2866 19.7031C13.25 19.2555 13.25 18.7048 13.25 18.0314V18.0314V17.9686V17.9686C13.25 17.2952 13.25 16.7445 13.2866 16.2969C13.3244 15.8337 13.4051 15.4153 13.6042 15.0245C13.9158 14.413 14.413 13.9158 15.0245 13.6042C15.4153 13.4051 15.8337 13.3244 16.2969 13.2866C16.7445 13.25 17.2952 13.25 17.9686 13.25H17.9686H18.0314H18.0314Z',
  d7: 'M6.03143 13.25C6.7048 13.25 7.25551 13.25 7.70307 13.2866C8.16633 13.3244 8.58473 13.4051 8.97547 13.6042C9.587 13.9158 10.0842 14.413 10.3958 15.0245C10.5949 15.4153 10.6756 15.8337 10.7134 16.2969C10.75 16.7445 10.75 17.2952 10.75 17.9685V17.9686V18.0314V18.0315C10.75 18.7048 10.75 19.2555 10.7134 19.7031C10.6756 20.1663 10.5949 20.5847 10.3958 20.9755C10.0842 21.587 9.587 22.0842 8.97547 22.3958C8.58473 22.5949 8.16633 22.6756 7.70307 22.7134C7.25552 22.75 6.70482 22.75 6.03147 22.75H6.03144H5.96856H5.96853C5.29518 22.75 4.74448 22.75 4.29693 22.7134C3.83367 22.6756 3.41527 22.5949 3.02453 22.3958C2.413 22.0842 1.91582 21.587 1.60423 20.9755C1.40514 20.5847 1.3244 20.1663 1.28655 19.7031C1.24998 19.2555 1.24999 18.7048 1.25 18.0314V18.0314V17.9686V17.9686C1.24999 17.2952 1.24998 16.7445 1.28655 16.2969C1.3244 15.8337 1.40514 15.4153 1.60423 15.0245C1.91582 14.413 2.413 13.9158 3.02453 13.6042C3.41527 13.4051 3.83367 13.3244 4.29693 13.2866C4.74449 13.25 5.2952 13.25 5.96857 13.25H5.96858H6.03142H6.03143Z',
  d8: 'M6.03143 1.25C6.7048 1.24999 7.25551 1.24998 7.70307 1.28655C8.16633 1.3244 8.58473 1.40514 8.97547 1.60423C9.587 1.91582 10.0842 2.413 10.3958 3.02453C10.5949 3.41527 10.6756 3.83367 10.7134 4.29693C10.75 4.74448 10.75 5.29518 10.75 5.96853V5.96856V6.03144V6.03147C10.75 6.70482 10.75 7.25552 10.7134 7.70307C10.6756 8.16633 10.5949 8.58473 10.3958 8.97547C10.0842 9.587 9.587 10.0842 8.97547 10.3958C8.58473 10.5949 8.16633 10.6756 7.70307 10.7134C7.25552 10.75 6.70482 10.75 6.03147 10.75H6.03144H5.96856H5.96853C5.29518 10.75 4.74448 10.75 4.29693 10.7134C3.83367 10.6756 3.41527 10.5949 3.02453 10.3958C2.413 10.0842 1.91582 9.587 1.60423 8.97547C1.40514 8.58473 1.3244 8.16633 1.28655 7.70307C1.24998 7.25551 1.24999 6.7048 1.25 6.03143V6.03142V5.96858V5.96857C1.24999 5.2952 1.24998 4.74449 1.28655 4.29693C1.3244 3.83367 1.40514 3.41527 1.60423 3.02453C1.91582 2.413 2.413 1.91582 3.02453 1.60423C3.41527 1.40514 3.83367 1.3244 4.29693 1.28655C4.74449 1.24998 5.2952 1.24999 5.96857 1.25H5.96858H6.03142H6.03143Z',
  d9: 'M18 9.71428V11.5M18 9.71428C16.8432 9.71428 15.8241 9.14608 15.2263 8.28331M18 9.71428C19.1568 9.71428 20.1759 9.14608 20.7737 8.28331M18 3.28571C19.1569 3.28571 20.1761 3.854 20.7738 4.71688M18 3.28571C16.8431 3.28571 15.8239 3.854 15.2262 4.71688M18 3.28571V1.5M22.5 3.5L20.7738 4.71688M13.5 9.5L15.2263 8.28331M13.5 3.5L15.2262 4.71688M22.5 9.5L20.7737 8.28331M20.7738 4.71688C21.1273 5.22711 21.3333 5.84035 21.3333 6.5C21.3333 7.15973 21.1272 7.77304 20.7737 8.28331M15.2262 4.71688C14.8727 5.22711 14.6667 5.84035 14.6667 6.5C14.6667 7.15973 14.8728 7.77304 15.2263 8.28331',
  d10: 'M10 2H2V10H10V2Z',
  d11: 'M10 14H2V22H10V14Z',
  d12: 'M22 14H14V22H22V14Z',
  d13: 'M16.6738 2.14864C15.9464 2.31586 15.2875 2.66173 14.7511 3.13842L13.75 2.43267L12.5977 4.06733L13.611 4.78169C13.4364 5.23865 13.3405 5.73355 13.3405 6.25C13.3405 6.76649 13.4364 7.26144 13.6111 7.71844L12.5977 8.43261L13.7499 10.0674L14.7512 9.36167C15.2876 9.83832 15.9464 10.1841 16.6738 10.3514V11.25H18.6738V10.3514C19.4012 10.1841 20.06 9.83832 20.5964 9.36167L21.5977 10.0674L22.7499 8.43261L21.7366 7.71844C21.9113 7.26144 22.0072 6.76649 22.0072 6.25C22.0072 5.73355 21.9113 5.23865 21.7367 4.78169L22.75 4.06733L21.5977 2.43267L20.5965 3.13842C20.0601 2.66173 19.4013 2.31586 18.6738 2.14864V1.25H16.6738V2.14864ZM17.6738 4.03571C16.849 4.03571 16.1352 4.43984 15.7221 5.03631C15.4794 5.3866 15.3405 5.80259 15.3405 6.25C15.3405 6.69747 15.4794 7.11351 15.7221 7.46382C16.1353 8.06022 16.849 8.46428 17.6738 8.46428C18.4986 8.46428 19.2123 8.06022 19.6255 7.46382C19.8682 7.11351 20.0072 6.69747 20.0072 6.25C20.0072 5.80259 19.8683 5.3866 19.6256 5.03631C19.2124 4.43984 18.4987 4.03571 17.6738 4.03571Z',
  d14: 'M1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H10C10.4142 1.25 10.75 1.58579 10.75 2V10C10.75 10.4142 10.4142 10.75 10 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10V2Z',
  d15: 'M1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H10C10.4142 13.25 10.75 13.5858 10.75 14V22C10.75 22.4142 10.4142 22.75 10 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V14Z',
  d16: 'M13.25 14C13.25 13.5858 13.5858 13.25 14 13.25H22C22.4142 13.25 22.75 13.5858 22.75 14V22C22.75 22.4142 22.4142 22.75 22 22.75H14C13.5858 22.75 13.25 22.4142 13.25 22V14Z',
};

export const IconDashboardSquareSettingStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-setting-stroke-rounded IconDashboardSquareSettingStrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquareSettingDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-setting-duotone-rounded IconDashboardSquareSettingDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
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
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquareSettingTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-setting-twotone-rounded IconDashboardSquareSettingTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquareSettingSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-setting-solid-rounded IconDashboardSquareSettingSolidRounded"
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
      <path 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquareSettingBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-setting-bulk-rounded IconDashboardSquareSettingBulkRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquareSettingStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-setting-stroke-sharp IconDashboardSquareSettingStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDashboardSquareSettingSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dashboard-square-setting-solid-sharp IconDashboardSquareSettingSolidSharp"
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
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDashboardSquareSetting: TheIconSelfPack = {
  name: 'DashboardSquareSetting',
  StrokeRounded: IconDashboardSquareSettingStrokeRounded,
  DuotoneRounded: IconDashboardSquareSettingDuotoneRounded,
  TwotoneRounded: IconDashboardSquareSettingTwotoneRounded,
  SolidRounded: IconDashboardSquareSettingSolidRounded,
  BulkRounded: IconDashboardSquareSettingBulkRounded,
  StrokeSharp: IconDashboardSquareSettingStrokeSharp,
  SolidSharp: IconDashboardSquareSettingSolidSharp,
};