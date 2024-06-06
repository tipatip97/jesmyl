import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 2L22 2',
  d2: 'M2 14.0005L22 14.0005',
  d3: 'M8.00232 7.5C8.00232 6.65611 7.91895 5.68211 8.75232 5.20096C9.10039 5 9.5677 5 10.5023 5H13.5023C14.4369 5 14.9042 5 15.2523 5.20096C16.0857 5.68211 16.0023 6.65611 16.0023 7.5C16.0023 8.34389 16.0857 9.31789 15.2523 9.79904C14.9042 10 14.4369 10 13.5023 10L10.5023 10C9.5677 10 9.10039 10 8.75232 9.79904C7.91895 9.31789 8.00232 8.34389 8.00232 7.5Z',
  d4: 'M5.00232 19.5C5.00232 18.6561 4.91895 17.6821 5.75232 17.201C6.10039 17 6.5677 17 7.50232 17L16.5023 17C17.4369 17 17.9042 17 18.2523 17.201C19.0857 17.6821 19.0023 18.6561 19.0023 19.5C19.0023 20.3439 19.0857 21.3179 18.2523 21.799C17.9042 22 17.4369 22 16.5023 22L7.50232 22C6.5677 22 6.10039 22 5.75232 21.799C4.91895 21.3179 5.00232 20.3439 5.00232 19.5Z',
  d5: 'M2 14L22 14',
  d6: 'M1 2.125C1 2.67728 1.44772 3.125 2 3.125L22 3.125C22.5523 3.125 23 2.67728 23 2.125C23 1.57272 22.5523 1.125 22 1.125H2C1.44772 1.125 1 1.57272 1 2.125Z',
  d7: 'M1 14.125C1 14.6773 1.44772 15.125 2 15.125L22 15.125C22.5523 15.125 23 14.6773 23 14.125C23 13.5727 22.5523 13.125 22 13.125H2C1.44772 13.125 1 13.5727 1 14.125Z',
  d8: 'M13.535 10.875C13.9748 10.875 14.3541 10.875 14.6654 10.8468C14.9946 10.817 15.3205 10.7509 15.6278 10.5736C16.282 10.1958 16.5625 9.61342 16.6752 9.06023C16.7621 8.63327 16.7575 8.16425 16.754 7.80818V7.80814C16.7534 7.74299 16.7528 7.68163 16.7528 7.625C16.7528 7.56837 16.7534 7.507 16.754 7.44186V7.44182C16.7575 7.08575 16.7621 6.61673 16.6752 6.18977C16.5625 5.63657 16.282 5.05418 15.6278 4.67644C15.3205 4.49907 14.9946 4.43302 14.6654 4.40318C14.3541 4.37497 13.9748 4.37498 13.535 4.375H10.4705C10.0307 4.37498 9.65139 4.37497 9.3401 4.40318C9.01092 4.43301 8.68496 4.49907 8.37775 4.67644C7.72349 5.05418 7.44299 5.63657 7.33032 6.18977C7.24336 6.61673 7.24799 7.08575 7.2515 7.44182C7.25214 7.50698 7.25275 7.56835 7.25275 7.625C7.25275 7.68164 7.25214 7.74302 7.2515 7.80818C7.24799 8.16425 7.24336 8.63327 7.33032 9.06023C7.44299 9.61342 7.72349 10.1958 8.37775 10.5736C8.68496 10.7509 9.01092 10.817 9.3401 10.8468C9.65139 10.875 10.0307 10.875 10.4705 10.875H10.4705H13.535H13.535Z',
  d9: 'M17.6654 22.8468C17.9946 22.817 18.3205 22.7509 18.6278 22.5736C19.282 22.1958 19.5625 21.6134 19.6752 21.0602C19.7621 20.6333 19.7575 20.1643 19.754 19.8082V19.8081C19.7534 19.743 19.7528 19.6816 19.7528 19.625C19.7528 19.5684 19.7534 19.507 19.754 19.4419V19.4418C19.7575 19.0857 19.7621 18.6167 19.6752 18.1898C19.5625 17.6366 19.282 17.0542 18.6278 16.6764C18.3205 16.4991 17.9946 16.433 17.6654 16.4032C17.3541 16.375 16.9748 16.375 16.535 16.375L7.47052 16.375C7.03074 16.375 6.65139 16.375 6.3401 16.4032C6.01092 16.433 5.68496 16.4991 5.37775 16.6764C4.72349 17.0542 4.44299 17.6366 4.33032 18.1898C4.24336 18.6167 4.24799 19.0857 4.2515 19.4418C4.25214 19.507 4.25275 19.5684 4.25275 19.625C4.25275 19.6816 4.25214 19.743 4.2515 19.8082C4.24799 20.1643 4.24336 20.6333 4.33032 21.0602C4.44299 21.6134 4.72349 22.1958 5.37775 22.5736C5.68496 22.7509 6.01092 22.817 6.3401 22.8468C6.65138 22.875 7.0307 22.875 7.47047 22.875H7.47052H16.535H16.535C16.9748 22.875 17.3541 22.875 17.6654 22.8468Z',
  d10: 'M2 2.5L22 2.5',
  d11: 'M2 13.5L22 13.5',
  d12: 'M5 16.5L5 21.5L19 21.5V16.5L5 16.5Z',
  d13: 'M8 5.5L8 10.5L16 10.5V5.5L8 5.5Z',
  d14: 'M22 15L2 15V13L22 13V15Z',
  d15: 'M22 4L2 4V2L22 2V4Z',
  d16: 'M16.0039 10.5C16.0039 10.7761 15.78 11 15.5039 11L8.50391 11C8.22776 11 8.00391 10.7761 8.00391 10.5L8.00391 6.5C8.00391 6.22386 8.22776 6 8.50391 6L15.5039 6C15.78 6 16.0039 6.22386 16.0039 6.5V10.5Z',
  d17: 'M19 21.5C19 21.7761 18.7761 22 18.5 22L5.5 22C5.22386 22 5 21.7761 5 21.5L5 17.5C5 17.2239 5.22386 17 5.5 17L18.5 17C18.7761 17 19 17.2239 19 17.5V21.5Z',
};

export const IconDistributeVerticalTopStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-top-stroke-rounded IconDistributeVerticalTopStrokeRounded"
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

export const IconDistributeVerticalTopDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-top-duotone-rounded IconDistributeVerticalTopDuotoneRounded"
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
        d={d.d5} 
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

export const IconDistributeVerticalTopTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-top-twotone-rounded IconDistributeVerticalTopTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
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

export const IconDistributeVerticalTopSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-top-solid-rounded IconDistributeVerticalTopSolidRounded"
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

export const IconDistributeVerticalTopBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-top-bulk-rounded IconDistributeVerticalTopBulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDistributeVerticalTopStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-top-stroke-sharp IconDistributeVerticalTopStrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d13} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDistributeVerticalTopSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-top-solid-sharp IconDistributeVerticalTopSolidSharp"
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
      <path 
        d={d.d16} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d17} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDistributeVerticalTop: TheIconSelfPack = {
  name: 'DistributeVerticalTop',
  StrokeRounded: IconDistributeVerticalTopStrokeRounded,
  DuotoneRounded: IconDistributeVerticalTopDuotoneRounded,
  TwotoneRounded: IconDistributeVerticalTopTwotoneRounded,
  SolidRounded: IconDistributeVerticalTopSolidRounded,
  BulkRounded: IconDistributeVerticalTopBulkRounded,
  StrokeSharp: IconDistributeVerticalTopStrokeSharp,
  SolidSharp: IconDistributeVerticalTopSolidSharp,
};