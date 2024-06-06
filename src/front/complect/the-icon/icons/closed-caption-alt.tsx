import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z',
  d2: 'M15 16H17M7 16H12',
  d3: 'M16 13H17M11 13H13M7 13H8',
  d4: 'M9.77965 1.82273C11.2369 1.72586 12.7601 1.72566 14.2204 1.82273C18.787 2.12629 22.4103 5.81258 22.7082 10.4224C22.7639 11.2848 22.7639 12.1768 22.7082 13.0392C22.4103 17.649 18.787 21.3353 14.2204 21.6389C12.7601 21.7359 11.2369 21.7357 9.77965 21.6389C9.21472 21.6013 8.59978 21.4677 8.05839 21.2448C7.8203 21.1467 7.65868 21.0804 7.54041 21.037C7.45909 21.0929 7.35108 21.1723 7.1938 21.2883C6.40136 21.8726 5.40092 22.2825 3.98117 22.248L3.93544 22.2469C3.66155 22.2403 3.36961 22.2334 3.13152 22.1873C2.84475 22.1318 2.48996 21.9931 2.26791 21.6145C2.02623 21.2025 2.12313 20.7858 2.21688 20.5234C2.30536 20.2757 2.45874 19.9852 2.61542 19.6885L2.6369 19.6478C3.10323 18.7641 3.23314 18.0419 2.98381 17.5604C2.15148 16.304 1.40272 14.7556 1.2918 13.0392C1.23607 12.1768 1.23607 11.2848 1.2918 10.4224C1.58972 5.81258 5.213 2.12629 9.77965 1.82273ZM6.25 16C6.25 15.5858 6.58579 15.25 7 15.25H12C12.4142 15.25 12.75 15.5858 12.75 16C12.75 16.4142 12.4142 16.75 12 16.75H7C6.58579 16.75 6.25 16.4142 6.25 16ZM14.25 16C14.25 15.5858 14.5858 15.25 15 15.25H17C17.4142 15.25 17.75 15.5858 17.75 16C17.75 16.4142 17.4142 16.75 17 16.75H15C14.5858 16.75 14.25 16.4142 14.25 16ZM7 12.25C6.58579 12.25 6.25 12.5858 6.25 13C6.25 13.4142 6.58579 13.75 7 13.75H8C8.41421 13.75 8.75 13.4142 8.75 13C8.75 12.5858 8.41421 12.25 8 12.25H7ZM11 12.25C10.5858 12.25 10.25 12.5858 10.25 13C10.25 13.4142 10.5858 13.75 11 13.75H13C13.4142 13.75 13.75 13.4142 13.75 13C13.75 12.5858 13.4142 12.25 13 12.25H11ZM16 12.25C15.5858 12.25 15.25 12.5858 15.25 13C15.25 13.4142 15.5858 13.75 16 13.75H17C17.4142 13.75 17.75 13.4142 17.75 13C17.75 12.5858 17.4142 12.25 17 12.25H16Z',
  d5: 'M9.77965 1.82273C11.2369 1.72586 12.7601 1.72566 14.2204 1.82273C18.787 2.12629 22.4103 5.81258 22.7082 10.4224C22.7639 11.2848 22.7639 12.1768 22.7082 13.0392C22.4103 17.649 18.787 21.3353 14.2204 21.6389C12.7601 21.7359 11.2369 21.7357 9.77965 21.6389C9.21472 21.6013 8.59978 21.4677 8.05839 21.2448C7.8203 21.1467 7.65868 21.0804 7.54041 21.037C7.45909 21.0929 7.35108 21.1723 7.1938 21.2883C6.40136 21.8726 5.40092 22.2825 3.98117 22.248C3.96599 22.2476 3.95074 22.2472 3.93544 22.2469C3.66155 22.2403 3.36961 22.2334 3.13152 22.1873C2.84475 22.1318 2.48996 21.9931 2.26791 21.6145C2.02623 21.2025 2.12313 20.7858 2.21688 20.5234C2.30536 20.2757 2.45874 19.9852 2.61542 19.6885C2.62258 19.6749 2.62974 19.6614 2.6369 19.6478C3.10323 18.7641 3.23314 18.0419 2.98381 17.5604C2.15148 16.304 1.40272 14.7556 1.2918 13.0392C1.23607 12.1768 1.23607 11.2848 1.2918 10.4224C1.58972 5.81258 5.213 2.12629 9.77965 1.82273Z',
  d6: 'M6.25 16C6.25 15.5858 6.58579 15.25 7 15.25H12C12.4142 15.25 12.75 15.5858 12.75 16C12.75 16.4142 12.4142 16.75 12 16.75H7C6.58579 16.75 6.25 16.4142 6.25 16ZM14.25 16C14.25 15.5858 14.5858 15.25 15 15.25H17C17.4142 15.25 17.75 15.5858 17.75 16C17.75 16.4142 17.4142 16.75 17 16.75H15C14.5858 16.75 14.25 16.4142 14.25 16Z',
  d7: 'M6.25 13C6.25 12.5858 6.58579 12.25 7 12.25H8C8.41421 12.25 8.75 12.5858 8.75 13C8.75 13.4142 8.41421 13.75 8 13.75H7C6.58579 13.75 6.25 13.4142 6.25 13ZM10.25 13C10.25 12.5858 10.5858 12.25 11 12.25H13C13.4142 12.25 13.75 12.5858 13.75 13C13.75 13.4142 13.4142 13.75 13 13.75H11C10.5858 13.75 10.25 13.4142 10.25 13ZM15.25 13C15.25 12.5858 15.5858 12.25 16 12.25H17C17.4142 12.25 17.75 12.5858 17.75 13C17.75 13.4142 17.4142 13.75 17 13.75H16C15.5858 13.75 15.25 13.4142 15.25 13Z',
  d8: 'M16 13.9853H19M9 13.9853H14M17 10.989H19M13 10.989H15M9 10.989H11',
  d9: 'M21.9034 2.01367H2.09902C2.04379 2.01367 1.99902 2.05844 1.99902 2.11367V17.8687C1.99902 17.9239 2.04379 17.9687 2.09902 17.9687H6.00066V21.7999C6.00066 21.8839 6.09795 21.9304 6.16338 21.8778L11.0178 17.9687H21.9034C21.9586 17.9687 22.0034 17.9239 22.0034 17.8687V2.11367C22.0034 2.05844 21.9586 2.01367 21.9034 2.01367Z',
  d10: 'M22 1.25L2 1.25C1.58579 1.25 1.25 1.58579 1.25 2V18C1.25 18.4142 1.58579 18.75 2 18.75H5.25V22C5.25 22.2883 5.41526 22.5511 5.67511 22.676C5.93496 22.8009 6.24339 22.7658 6.46852 22.5857L11.2631 18.75L22 18.75C22.1989 18.75 22.3897 18.671 22.5303 18.5303C22.671 18.3897 22.75 18.1989 22.75 18V2C22.75 1.80109 22.671 1.61032 22.5303 1.46967C22.3897 1.32902 22.1989 1.25 22 1.25ZM9 11.75H11V10.25H9V11.75ZM13 11.75H15V10.25H13V11.75ZM17 11.75H19V10.25H17V11.75ZM9 14.75H14V13.25H9V14.75ZM16 14.75H19V13.25H16V14.75Z',
};

export const IconClosedCaptionAltStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="closed-caption-alt-stroke-rounded IconClosedCaptionAltStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconClosedCaptionAltDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="closed-caption-alt-duotone-rounded IconClosedCaptionAltDuotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconClosedCaptionAltTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="closed-caption-alt-twotone-rounded IconClosedCaptionAltTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
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

export const IconClosedCaptionAltSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="closed-caption-alt-solid-rounded IconClosedCaptionAltSolidRounded"
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

export const IconClosedCaptionAltBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="closed-caption-alt-bulk-rounded IconClosedCaptionAltBulkRounded"
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconClosedCaptionAltStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="closed-caption-alt-stroke-sharp IconClosedCaptionAltStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconClosedCaptionAltSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="closed-caption-alt-solid-sharp IconClosedCaptionAltSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfClosedCaptionAlt: TheIconSelfPack = {
  name: 'ClosedCaptionAlt',
  StrokeRounded: IconClosedCaptionAltStrokeRounded,
  DuotoneRounded: IconClosedCaptionAltDuotoneRounded,
  TwotoneRounded: IconClosedCaptionAltTwotoneRounded,
  SolidRounded: IconClosedCaptionAltSolidRounded,
  BulkRounded: IconClosedCaptionAltBulkRounded,
  StrokeSharp: IconClosedCaptionAltStrokeSharp,
  SolidSharp: IconClosedCaptionAltSolidSharp,
};