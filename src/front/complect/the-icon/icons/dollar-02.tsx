import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M18.4167 8.14815C18.4167 5.85719 15.5438 4 12 4C8.45617 4 5.58333 5.85719 5.58333 8.14815C5.58333 10.4391 7.33333 11.7037 12 11.7037C16.6667 11.7037 19 12.8889 19 15.8519C19 18.8148 15.866 20 12 20C8.13401 20 5 18.1428 5 15.8519',
  d2: 'M12 2V22',
  d3: 'M12 1C12.5523 1 13 1.44772 13 2V3.04549C14.5502 3.18762 15.9696 3.65724 17.0802 4.37517C18.4156 5.2385 19.4167 6.54973 19.4167 8.14815C19.4167 8.70043 18.969 9.14815 18.4167 9.14815C17.8644 9.14815 17.4167 8.70043 17.4167 8.14815C17.4167 7.45561 16.9813 6.69276 15.9944 6.05476C15.226 5.55802 14.1899 5.19012 13 5.05573V10.7226C14.932 10.7989 16.5472 11.1133 17.7461 11.7984C18.4666 12.2101 19.0458 12.7608 19.4377 13.47C19.8275 14.1752 20 14.979 20 15.8519C20 17.7763 18.9421 19.1185 17.4155 19.922C16.1904 20.5667 14.6434 20.8852 13 20.9737V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20.9613C9.30461 20.829 7.75183 20.3632 6.54045 19.6453C5.11627 18.8014 4 17.4928 4 15.8519C4 15.2996 4.44772 14.8519 5 14.8519C5.55228 14.8519 6 15.2996 6 15.8519C6 16.5019 6.45074 17.2674 7.56005 17.9247C8.43919 18.4457 9.63204 18.8271 11 18.9541V12.6835C9.09913 12.6034 7.60805 12.2805 6.53338 11.6462C5.88559 11.2639 5.38266 10.7644 5.04894 10.1438C4.71768 9.52773 4.58333 8.84872 4.58333 8.14815C4.58333 6.54973 5.58436 5.2385 6.91983 4.37517C8.03038 3.65724 9.44975 3.18762 11 3.04549V2C11 1.44772 11.4477 1 12 1ZM11 5.05573C9.81011 5.19012 8.77403 5.55802 8.00563 6.05476C7.01873 6.69276 6.58333 7.45561 6.58333 8.14815C6.58333 8.59305 6.66774 8.93123 6.81044 9.19662C6.95067 9.45743 7.17691 9.70367 7.54996 9.92385C8.2131 10.3153 9.30242 10.6018 11 10.6814V5.05573ZM13 12.7245V18.9704C14.4191 18.8838 15.6183 18.6077 16.484 18.1521C17.4909 17.6222 18 16.8904 18 15.8519C18 15.2433 17.8809 14.7877 17.6873 14.4374C17.4959 14.0911 17.2001 13.7899 16.7539 13.5349C15.9639 13.0835 14.7447 12.8006 13 12.7245Z',
  d4: 'M12 1C12.5523 1 13 1.44772 13 2V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V2C11 1.44772 11.4477 1 12 1Z',
  d5: 'M8.00563 6.05476C7.01873 6.69276 6.58333 7.45561 6.58333 8.14815C6.58333 8.59305 6.66774 8.93123 6.81044 9.19662C6.95067 9.45743 7.17691 9.70367 7.54996 9.92385C8.33512 10.3873 9.71773 10.7037 12 10.7037C14.3777 10.7037 16.3458 10.9982 17.7461 11.7984C18.4666 12.2101 19.0458 12.7608 19.4377 13.47C19.8275 14.1752 20 14.979 20 15.8519C20 17.7763 18.9421 19.1185 17.4155 19.922C15.9444 20.6962 14.009 21 12 21C9.91908 21 7.98652 20.5023 6.54045 19.6453C5.11627 18.8014 4 17.4928 4 15.8519C4 15.2996 4.44772 14.8519 5 14.8519C5.55228 14.8519 6 15.2996 6 15.8519C6 16.5019 6.45074 17.2674 7.56005 17.9247C8.64748 18.5691 10.2149 19 12 19C13.857 19 15.4216 18.7112 16.484 18.1521C17.4909 17.6222 18 16.8904 18 15.8519C18 15.2433 17.8809 14.7877 17.6873 14.4374C17.4959 14.0911 17.2001 13.7899 16.7539 13.5349C15.8209 13.0018 14.289 12.7037 12 12.7037C9.61561 12.7037 7.78988 12.3878 6.53338 11.6462C5.88559 11.2639 5.38266 10.7644 5.04894 10.1438C4.71768 9.52773 4.58333 8.84872 4.58333 8.14815C4.58333 6.54973 5.58436 5.2385 6.91983 4.37517C8.26538 3.50532 10.0643 3 12 3C13.9357 3 15.7346 3.50532 17.0802 4.37517C18.4156 5.2385 19.4167 6.54973 19.4167 8.14815C19.4167 8.70043 18.969 9.14815 18.4167 9.14815C17.8644 9.14815 17.4167 8.70043 17.4167 8.14815C17.4167 7.45561 16.9813 6.69276 15.9944 6.05476C15.0175 5.42327 13.6081 5 12 5C10.3919 5 8.98246 5.42327 8.00563 6.05476Z',
  d6: 'M8.00563 6.05476C7.01873 6.69276 6.58333 7.45561 6.58333 8.14815C6.58333 8.59305 6.66774 8.93123 6.81044 9.19662C6.95067 9.45743 7.17691 9.70367 7.54996 9.92385C8.33512 10.3873 9.71773 10.7037 12 10.7037C14.3777 10.7037 16.3458 10.9982 17.7461 11.7984C18.4666 12.2101 19.0458 12.7608 19.4377 13.47C19.8275 14.1752 20 14.979 20 15.8519C20 17.7763 18.9421 19.1185 17.4155 19.922C15.9444 20.6962 14.009 21 12 21C9.91908 21 7.98652 20.5023 6.54045 19.6453C5.11627 18.8014 4 17.4928 4 15.8519H6C6 16.5019 6.45074 17.2674 7.56005 17.9247C8.64748 18.5691 10.2149 19 12 19C13.857 19 15.4216 18.7112 16.484 18.1521C17.4909 17.6222 18 16.8904 18 15.8519C18 15.2433 17.8809 14.7877 17.6873 14.4374C17.4959 14.0911 17.2001 13.7899 16.7539 13.5349C15.8209 13.0018 14.289 12.7037 12 12.7037C9.61561 12.7037 7.78988 12.3878 6.53338 11.6462C5.88559 11.2639 5.38266 10.7644 5.04894 10.1438C4.71768 9.52773 4.58333 8.84872 4.58333 8.14815C4.58333 6.54973 5.58436 5.2385 6.91983 4.37517C8.26538 3.50532 10.0643 3 12 3C13.9357 3 15.7346 3.50532 17.0802 4.37517C18.4156 5.2385 19.4167 6.54973 19.4167 8.14815H17.4167C17.4167 7.45561 16.9813 6.69276 15.9944 6.05476C15.0175 5.42327 13.6081 5 12 5C10.3919 5 8.98246 5.42327 8.00563 6.05476Z',
  d7: 'M11 22V2H13V22H11Z',
};

export const IconDollar02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-02-stroke-rounded IconDollar02StrokeRounded"
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
    </TheIconWrapper>
  );
};

export const IconDollar02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-02-duotone-rounded IconDollar02DuotoneRounded"
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
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDollar02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-02-twotone-rounded IconDollar02TwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconDollar02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-02-solid-rounded IconDollar02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDollar02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-02-bulk-rounded IconDollar02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDollar02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-02-stroke-sharp IconDollar02StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconDollar02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-02-solid-sharp IconDollar02SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfDollar02: TheIconSelfPack = {
  name: 'Dollar02',
  StrokeRounded: IconDollar02StrokeRounded,
  DuotoneRounded: IconDollar02DuotoneRounded,
  TwotoneRounded: IconDollar02TwotoneRounded,
  SolidRounded: IconDollar02SolidRounded,
  BulkRounded: IconDollar02BulkRounded,
  StrokeSharp: IconDollar02StrokeSharp,
  SolidSharp: IconDollar02SolidSharp,
};