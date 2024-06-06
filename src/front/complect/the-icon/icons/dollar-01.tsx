import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M17.9583 8.38889C17.9583 6.24111 15.2907 4.5 12 4.5C8.7093 4.5 6.04167 6.24111 6.04167 8.38889C6.04167 10.5367 7.66667 11.7222 12 11.7222C16.3333 11.7222 18.5 12.8333 18.5 15.6111C18.5 18.3889 15.5899 19.5 12 19.5C8.41015 19.5 5.5 17.7589 5.5 15.6111',
  d2: 'M12.5 2.5V4.21M12.5 21.5V19.79',
  d3: 'M17.9583 8.38889C17.9583 6.24111 15.2907 4.5 12 4.5C8.7093 4.5 6.04167 6.24111 6.04167 8.38889C6.04167 10.5367 7.66667 11.7222 12 11.7222C16.3333 11.7222 18.5 12.8333 18.5 15.6111C18.5 18.3889 15.5899 19.5 12 19.5C8.41015 19.5 5.5 17.7589 5.5 15.6111M12.5 2.5V4.21M12.5 21.5V19.79',
  d4: 'M12.5 1.5C13.0523 1.5 13.5 1.94772 13.5 2.5V3.61161C14.7308 3.79776 15.854 4.21042 16.7597 4.80161C18.0138 5.62008 18.9583 6.86662 18.9583 8.38889C18.9583 8.94117 18.5106 9.38889 17.9583 9.38889C17.406 9.38889 16.9583 8.94117 16.9583 8.38889C16.9583 7.76338 16.5691 7.06548 15.6666 6.47645C14.7732 5.89332 13.4797 5.5 12 5.5C10.5203 5.5 9.22681 5.89332 8.33339 6.47645C7.4309 7.06548 7.04167 7.76338 7.04167 8.38889C7.04167 8.79941 7.11882 9.10711 7.24591 9.34574C7.3704 9.57948 7.57161 9.80163 7.90774 10.0019C8.61889 10.4257 9.88525 10.7222 12 10.7222C14.2118 10.7222 16.0565 10.9983 17.3747 11.7588C18.054 12.1507 18.601 12.6756 18.9709 13.3515C19.3385 14.0229 19.5 14.786 19.5 15.6111C19.5 17.4379 18.5035 18.7162 17.0654 19.4803C16.0579 20.0157 14.8215 20.3125 13.5 20.434V21.5C13.5 22.0523 13.0523 22.5 12.5 22.5C11.9477 22.5 11.5 22.0523 11.5 21.5V20.4896C9.74677 20.4165 8.12961 19.9605 6.89039 19.2191C5.55453 18.4199 4.5 17.1757 4.5 15.6111C4.5 15.0588 4.94772 14.6111 5.5 14.6111C6.05228 14.6111 6.5 15.0588 6.5 15.6111C6.5 16.1943 6.90055 16.8946 7.91722 17.5028C8.91355 18.0989 10.3547 18.5 12 18.5C13.718 18.5 15.1561 18.23 16.127 17.7141C17.0414 17.2282 17.5 16.5621 17.5 15.6111C17.5 15.0473 17.3907 14.6299 17.2166 14.3117C17.0448 13.998 16.7793 13.7243 16.3753 13.4912C15.5268 13.0017 14.1216 12.7222 12 12.7222C9.78141 12.7222 8.06861 12.426 6.88393 11.72C6.27214 11.3554 5.79627 10.8785 5.48065 10.2859C5.16764 9.69817 5.04167 9.05226 5.04167 8.38889C5.04167 6.86662 5.98625 5.62008 7.24026 4.80161C8.38628 4.05363 9.88019 3.59143 11.5 3.51219V2.5C11.5 1.94772 11.9477 1.5 12.5 1.5Z',
  d5: 'M12.5 1.5C13.0523 1.5 13.5 1.94772 13.5 2.5V4.21C13.5 4.76228 13.0523 5.21 12.5 5.21C11.9477 5.21 11.5 4.76228 11.5 4.21V2.5C11.5 1.94772 11.9477 1.5 12.5 1.5ZM12.5 18.79C13.0523 18.79 13.5 19.2377 13.5 19.79V21.5C13.5 22.0523 13.0523 22.5 12.5 22.5C11.9477 22.5 11.5 22.0523 11.5 21.5V19.79C11.5 19.2377 11.9477 18.79 12.5 18.79Z',
  d6: 'M8.33339 6.47645C7.4309 7.06548 7.04167 7.76338 7.04167 8.38889C7.04167 8.79941 7.11882 9.10711 7.24591 9.34574C7.3704 9.57949 7.57161 9.80163 7.90774 10.0019C8.61889 10.4257 9.88525 10.7222 12 10.7222C14.2118 10.7222 16.0565 10.9983 17.3747 11.7588C18.054 12.1507 18.601 12.6756 18.9709 13.3515C19.3385 14.0229 19.5 14.786 19.5 15.6111C19.5 17.4379 18.5035 18.7162 17.0654 19.4803C15.6837 20.2144 13.8719 20.5 12 20.5C10.0555 20.5 8.2466 20.0305 6.89039 19.2191C5.55453 18.4199 4.5 17.1757 4.5 15.6111C4.5 15.0588 4.94772 14.6111 5.5 14.6111C6.05228 14.6111 6.5 15.0588 6.5 15.6111C6.5 16.1943 6.90055 16.8946 7.91722 17.5028C8.91355 18.0989 10.3547 18.5 12 18.5C13.718 18.5 15.1561 18.23 16.127 17.7141C17.0414 17.2282 17.5 16.5621 17.5 15.6111C17.5 15.0473 17.3907 14.6299 17.2166 14.3117C17.0448 13.998 16.7793 13.7243 16.3753 13.4912C15.5268 13.0017 14.1216 12.7222 12 12.7222C9.78141 12.7222 8.06861 12.426 6.88393 11.72C6.27214 11.3554 5.79627 10.8785 5.48065 10.2859C5.16764 9.69817 5.04167 9.05226 5.04167 8.38889C5.04167 6.86662 5.98625 5.62008 7.24026 4.80161C8.50332 3.97723 10.189 3.5 12 3.5C13.811 3.5 15.4967 3.97723 16.7597 4.80161C18.0138 5.62008 18.9583 6.86662 18.9583 8.38889C18.9583 8.94117 18.5106 9.38889 17.9583 9.38889C17.406 9.38889 16.9583 8.94117 16.9583 8.38889C16.9583 7.76338 16.5691 7.06548 15.6666 6.47645C14.7732 5.89332 13.4797 5.5 12 5.5C10.5203 5.5 9.22681 5.89332 8.33339 6.47645Z',
  d7: 'M18.4167 9.14815C18.4167 6.85719 15.5438 5 12 5C8.45617 5 5.58333 6.85719 5.58333 9.14815C5.58333 11.4391 7.33333 12.7037 12 12.7037C16.6667 12.7037 19 13.8889 19 16.8519C19 19.8148 15.866 21 12 21C8.13401 21 5 19.1428 5 16.8519',
  d8: 'M12 3V5M12 23V21',
  d9: 'M8.00563 6.05476C7.01873 6.69276 6.58333 7.45561 6.58333 8.14815C6.58333 8.59305 6.66774 8.93123 6.81044 9.19662C6.95067 9.45743 7.17691 9.70367 7.54996 9.92385C8.33512 10.3873 9.71773 10.7037 12 10.7037C14.3777 10.7037 16.3458 10.9982 17.7461 11.7984C18.4666 12.2101 19.0458 12.7608 19.4377 13.47C19.8275 14.1752 20 14.979 20 15.8519C20 17.7763 18.9421 19.1185 17.4155 19.922C15.9444 20.6962 14.009 21 12 21C9.91908 21 7.98652 20.5023 6.54045 19.6453C5.11627 18.8014 4 17.4928 4 15.8519H6C6 16.5019 6.45074 17.2674 7.56005 17.9247C8.64748 18.5691 10.2149 19 12 19C13.857 19 15.4216 18.7112 16.484 18.1521C17.4909 17.6222 18 16.8904 18 15.8519C18 15.2433 17.8809 14.7877 17.6873 14.4374C17.4959 14.0911 17.2001 13.7899 16.7539 13.5349C15.8209 13.0018 14.289 12.7037 12 12.7037C9.61561 12.7037 7.78988 12.3878 6.53338 11.6462C5.88559 11.2639 5.38266 10.7644 5.04894 10.1438C4.71768 9.52773 4.58333 8.84872 4.58333 8.14815C4.58333 6.54973 5.58436 5.2385 6.91983 4.37517C8.26538 3.50532 10.0643 3 12 3C13.9357 3 15.7346 3.50532 17.0802 4.37517C18.4156 5.2385 19.4167 6.54973 19.4167 8.14815H17.4167C17.4167 7.45561 16.9813 6.69276 15.9944 6.05476C15.0175 5.42327 13.6081 5 12 5C10.3919 5 8.98246 5.42327 8.00563 6.05476Z',
  d10: 'M11 4V2H13V4H11ZM11 22V20H13V22H11Z',
};

export const IconDollar01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-01-stroke-rounded IconDollar01StrokeRounded"
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

export const IconDollar01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-01-duotone-rounded IconDollar01DuotoneRounded"
    >
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

export const IconDollar01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-01-twotone-rounded IconDollar01TwotoneRounded"
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

export const IconDollar01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-01-solid-rounded IconDollar01SolidRounded"
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

export const IconDollar01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-01-bulk-rounded IconDollar01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDollar01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-01-stroke-sharp IconDollar01StrokeSharp"
    >
      <path 
        d={d.d7} 
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

export const IconDollar01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-01-solid-sharp IconDollar01SolidSharp"
    >
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

export const iconPackOfDollar01: TheIconSelfPack = {
  name: 'Dollar01',
  StrokeRounded: IconDollar01StrokeRounded,
  DuotoneRounded: IconDollar01DuotoneRounded,
  TwotoneRounded: IconDollar01TwotoneRounded,
  SolidRounded: IconDollar01SolidRounded,
  BulkRounded: IconDollar01BulkRounded,
  StrokeSharp: IconDollar01StrokeSharp,
  SolidSharp: IconDollar01SolidSharp,
};