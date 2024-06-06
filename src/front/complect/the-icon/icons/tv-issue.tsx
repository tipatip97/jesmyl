import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z',
  d2: 'M11.9998 18H12.0088',
  d3: 'M12 15L12 11',
  d4: 'M9 3L12 6L16 2',
  d5: 'M14 6H10C6.22876 6 4.34315 6 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.6569 6 17.7712 6 14 6Z',
  d6: 'M15.2929 1.54289C15.6834 1.15237 16.3166 1.15237 16.7071 1.54289C17.0976 1.93342 17.0976 2.56658 16.7071 2.95711L12.7071 6.95711C12.3166 7.34763 11.6834 7.34763 11.2929 6.95711L8.29289 3.95711C7.90237 3.56658 7.90237 2.93342 8.29289 2.54289C8.68342 2.15237 9.31658 2.15237 9.70711 2.54289L12 4.83579L15.2929 1.54289Z',
  d7: 'M9.94358 5.75H14.0564H14.0564H14.0564C15.8942 5.74999 17.3498 5.74997 18.489 5.89876C19.6614 6.05189 20.6104 6.37451 21.3588 7.10149C22.1071 7.82848 22.4392 8.75031 22.5969 9.88924C22.75 10.9959 22.75 12.41 22.75 14.1952V14.3048C22.75 16.0901 22.75 17.5041 22.5969 18.6108C22.4392 19.7497 22.1071 20.6715 21.3588 21.3985C20.6104 22.1255 19.6614 22.4481 18.489 22.6012C17.3498 22.75 15.8942 22.75 14.0564 22.75H9.94354C8.1058 22.75 6.65018 22.75 5.51098 22.6012C4.33856 22.4481 3.38961 22.1255 2.64124 21.3985C1.89288 20.6715 1.56076 19.7497 1.40313 18.6108C1.24997 17.5041 1.24998 16.0901 1.25 14.3048V14.1952C1.24998 12.4099 1.24997 10.9959 1.40313 9.88924C1.56076 8.75031 1.89288 7.82848 2.64124 7.10149C3.38961 6.37451 4.33856 6.05189 5.51098 5.89876C6.65019 5.74997 8.10582 5.74999 9.94357 5.75H9.94357H9.94358ZM12.0002 15.75C11.4479 15.75 11.0002 15.3023 11.0002 14.75V10.75C11.0002 10.1977 11.4479 9.75 12.0002 9.75C12.5525 9.75 13.0002 10.1977 13.0002 10.75V14.75C13.0002 15.3023 12.5525 15.75 12.0002 15.75ZM11 17.75C11 17.1977 11.4457 16.75 11.9955 16.75H12.0045C12.5543 16.75 13 17.1977 13 17.75C13 18.3023 12.5543 18.75 12.0045 18.75H11.9955C11.4457 18.75 11 18.3023 11 17.75Z',
  d8: 'M14.0564 5.75H9.94358H9.94357C8.10583 5.74999 6.65019 5.74997 5.51098 5.89876C4.33856 6.05188 3.38961 6.37451 2.64124 7.10149C1.89288 7.82848 1.56076 8.75031 1.40313 9.88924C1.24997 10.9959 1.24998 12.4099 1.25 14.1952V14.3048C1.24998 16.0901 1.24997 17.5041 1.40313 18.6108C1.56076 19.7497 1.89288 20.6715 2.64124 21.3985C3.38961 22.1255 4.33856 22.4481 5.51098 22.6012C6.65018 22.75 8.1058 22.75 9.94354 22.75H14.0564C15.8942 22.75 17.3498 22.75 18.489 22.6012C19.6614 22.4481 20.6104 22.1255 21.3588 21.3985C22.1071 20.6715 22.4392 19.7497 22.5969 18.6108C22.75 17.5041 22.75 16.0901 22.75 14.3048V14.1952C22.75 12.41 22.75 10.9959 22.5969 9.88924C22.4392 8.75031 22.1071 7.82848 21.3588 7.10149C20.6104 6.37451 19.6614 6.05188 18.489 5.89876C17.3498 5.74997 15.8942 5.74999 14.0564 5.75H14.0564Z',
  d9: 'M16.7071 1.54289C16.3166 1.15237 15.6834 1.15237 15.2929 1.54289L12 4.83579L9.70711 2.54289C9.31658 2.15237 8.68342 2.15237 8.29289 2.54289C7.90237 2.93342 7.90237 3.56658 8.29289 3.95711L10.0858 5.75H13.9142L16.7071 2.95711C17.0976 2.56658 17.0976 1.93342 16.7071 1.54289Z',
  d10: 'M11.0002 14.75C11.0002 15.3023 11.4479 15.75 12.0002 15.75C12.5525 15.75 13.0002 15.3023 13.0002 14.75V10.75C13.0002 10.1977 12.5525 9.75 12.0002 9.75C11.4479 9.75 11.0002 10.1977 11.0002 10.75V14.75ZM11.9955 16.75C11.4457 16.75 11 17.1977 11 17.75C11 18.3023 11.4457 18.75 11.9955 18.75H12.0045C12.5543 18.75 13 18.3023 13 17.75C13 17.1977 12.5543 16.75 12.0045 16.75H11.9955Z',
  d11: 'M22 6H2V22H22V6Z',
  d12: 'M11.9998 17H12.0088',
  d13: 'M12 15L12 10',
  d14: 'M16.7072 2.66421L12.7072 6.66421C12.3167 7.05474 11.6835 7.05474 11.293 6.66421L8.29297 3.66421L9.70718 2.25L12.0001 4.54289L15.293 1.25L16.7072 2.66421Z',
  d15: 'M1.25 6C1.25 5.58579 1.58579 5.25 2 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6V22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22V6ZM11 16H13.009V18H11V16ZM13 15V10H11V15H13Z',
};

export const IconTvIssueStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-issue-stroke-rounded IconTvIssueStrokeRounded"
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

export const IconTvIssueDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-issue-duotone-rounded IconTvIssueDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconTvIssueTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-issue-twotone-rounded IconTvIssueTwotoneRounded"
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

export const IconTvIssueSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-issue-solid-rounded IconTvIssueSolidRounded"
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

export const IconTvIssueBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-issue-bulk-rounded IconTvIssueBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
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

export const IconTvIssueStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-issue-stroke-sharp IconTvIssueStrokeSharp"
    >
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
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
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

export const IconTvIssueSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tv-issue-solid-sharp IconTvIssueSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTvIssue: TheIconSelfPack = {
  name: 'TvIssue',
  StrokeRounded: IconTvIssueStrokeRounded,
  DuotoneRounded: IconTvIssueDuotoneRounded,
  TwotoneRounded: IconTvIssueTwotoneRounded,
  SolidRounded: IconTvIssueSolidRounded,
  BulkRounded: IconTvIssueBulkRounded,
  StrokeSharp: IconTvIssueStrokeSharp,
  SolidSharp: IconTvIssueSolidSharp,
};