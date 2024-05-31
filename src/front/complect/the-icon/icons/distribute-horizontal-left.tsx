import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2.00098 2V22',
  d2: 'M14 2V22',
  d3: 'M19.5 8.00232C18.6561 8.00232 17.6821 7.91895 17.201 8.75232C17 9.10039 17 9.5677 17 10.5023V13.5023C17 14.4369 17 14.9042 17.201 15.2523C17.6821 16.0857 18.6561 16.0023 19.5 16.0023C20.3439 16.0023 21.3179 16.0857 21.799 15.2523C22 14.9042 22 14.4369 22 13.5023V10.5023C22 9.5677 22 9.10039 21.799 8.75232C21.3179 7.91895 20.3439 8.00232 19.5 8.00232Z',
  d4: 'M7.5 5.00232C6.65611 5.00232 5.68211 4.91895 5.20096 5.75232C5 6.10039 5 6.5677 5 7.50232L5 16.5023C5 17.4369 5 17.9042 5.20096 18.2523C5.68211 19.0857 6.65611 19.0023 7.5 19.0023C8.34389 19.0023 9.31789 19.0857 9.79904 18.2523C10 17.9042 10 17.4369 10 16.5023L10 7.50232C10 6.5677 10 6.10039 9.79904 5.75232C9.31789 4.91895 8.34389 5.00232 7.5 5.00232Z',
  d5: 'M7.50098 5.00232C6.65708 5.00232 5.68309 4.91895 5.20194 5.75232C5.00098 6.10039 5.00098 6.5677 5.00098 7.50232L5.00098 16.5023C5.00098 17.4369 5.00098 17.9042 5.20194 18.2523C5.68309 19.0857 6.65708 19.0023 7.50098 19.0023C8.34487 19.0023 9.31887 19.0857 9.80001 18.2523C10.001 17.9042 10.001 17.4369 10.001 16.5023L10.001 7.50232C10.001 6.5677 10.001 6.10039 9.80001 5.75232C9.31887 4.91895 8.34487 5.00232 7.50098 5.00232Z',
  d6: 'M2.125 1C2.67728 1 3.125 1.44772 3.125 2V22C3.125 22.5523 2.67728 23 2.125 23C1.57272 23 1.125 22.5523 1.125 22V2C1.125 1.44772 1.57272 1 2.125 1Z',
  d7: 'M14.124 1C14.6763 1 15.124 1.44772 15.124 2V22C15.124 22.5523 14.6763 23 14.124 23C13.5717 23 13.124 22.5523 13.124 22V2C13.124 1.44772 13.5717 1 14.124 1Z',
  d8: 'M19.4408 7.2515C19.506 7.25214 19.5674 7.25275 19.624 7.25275C19.6807 7.25275 19.742 7.25214 19.8072 7.2515C20.1633 7.24799 20.6323 7.24336 21.0593 7.33032C21.6124 7.44299 22.1948 7.72349 22.5726 8.37775C22.75 8.68496 22.816 9.01092 22.8458 9.3401C22.8741 9.65139 22.874 10.0307 22.874 10.4705V13.535C22.874 13.9748 22.8741 14.3541 22.8458 14.6654C22.816 14.9946 22.75 15.3205 22.5726 15.6278C22.1948 16.282 21.6124 16.5625 21.0593 16.6752C20.6323 16.7621 20.1633 16.7575 19.8072 16.754H19.8072C19.742 16.7534 19.6807 16.7528 19.624 16.7528C19.5674 16.7528 19.506 16.7534 19.4409 16.754H19.4408C19.0848 16.7575 18.6158 16.7621 18.1888 16.6752C17.6356 16.5625 17.0532 16.282 16.6755 15.6278C16.4981 15.3205 16.432 14.9946 16.4022 14.6654C16.374 14.3541 16.374 13.9748 16.374 13.535V13.535V10.4705V10.4705C16.374 10.0307 16.374 9.65139 16.4022 9.3401C16.432 9.01092 16.4981 8.68496 16.6755 8.37775C17.0532 7.72349 17.6356 7.44299 18.1888 7.33032C18.6158 7.24336 19.0848 7.24799 19.4408 7.2515Z',
  d9: 'M9.05926 4.33032C9.61245 4.44299 10.1948 4.72349 10.5726 5.37775C10.75 5.68496 10.816 6.01092 10.8458 6.3401C10.8741 6.65139 10.874 7.03074 10.874 7.47052L10.874 16.535C10.874 16.9748 10.8741 17.3541 10.8458 17.6654C10.816 17.9946 10.75 18.3205 10.5726 18.6278C10.1948 19.282 9.61245 19.5625 9.05926 19.6752C8.6323 19.7621 8.16328 19.7575 7.80721 19.754H7.80717C7.74202 19.7534 7.68066 19.7528 7.62403 19.7528C7.56739 19.7528 7.50603 19.7534 7.44088 19.754H7.44084C7.08477 19.7575 6.61575 19.7621 6.1888 19.6752C5.6356 19.5625 5.05321 19.282 4.67547 18.6278C4.4981 18.3205 4.43204 17.9946 4.40221 17.6654C4.37399 17.3541 4.37401 16.9748 4.37402 16.535V16.535V7.47052V7.47049C4.37401 7.03072 4.37399 6.65139 4.40221 6.3401C4.43204 6.01092 4.4981 5.68496 4.67547 5.37775C5.05321 4.72349 5.6356 4.44299 6.18879 4.33032C6.61575 4.24336 7.08477 4.24799 7.44084 4.2515C7.506 4.25214 7.56738 4.25275 7.62403 4.25275C7.68067 4.25275 7.74205 4.25214 7.80721 4.2515C8.16328 4.24799 8.6323 4.24336 9.05926 4.33032Z',
  d10: 'M2.5 2V22',
  d11: 'M13.499 2V22',
  d12: 'M16.5 16.0024V8.00244H21.5V16.0024H16.5Z',
  d13: 'M5.5 19V5H10.5V19H5.5Z',
  d14: 'M2.00098 22L2.00098 2L4.00098 2L4.00098 22H2.00098Z',
  d15: 'M13.001 22L13.001 2L15.001 2L15.001 22H13.001Z',
  d16: 'M17.5 16.0044C17.2239 16.0044 17 15.7805 17 15.5044L17 8.50439C17 8.22825 17.2239 8.00439 17.5 8.00439L21.5 8.00439C21.7761 8.00439 22 8.22825 22 8.50439L22 15.5044C22 15.7805 21.7761 16.0044 21.5 16.0044H17.5Z',
  d17: 'M6.5 19C6.22386 19 6 18.7761 6 18.5L6 5.5C6 5.22386 6.22386 5 6.5 5L10.5 5C10.7761 5 11 5.22386 11 5.5L11 18.5C11 18.7761 10.7761 19 10.5 19H6.5Z',
} as const;

export const IconDistributeHorizontalLeftStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-left-stroke-rounded IconDistributeHorizontalLeftStrokeRounded"
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

export const IconDistributeHorizontalLeftDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-left-duotone-rounded IconDistributeHorizontalLeftDuotoneRounded"
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

export const IconDistributeHorizontalLeftTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-left-twotone-rounded IconDistributeHorizontalLeftTwotoneRounded"
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

export const IconDistributeHorizontalLeftSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-left-solid-rounded IconDistributeHorizontalLeftSolidRounded"
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

export const IconDistributeHorizontalLeftBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-left-bulk-rounded IconDistributeHorizontalLeftBulkRounded"
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

export const IconDistributeHorizontalLeftStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-left-stroke-sharp IconDistributeHorizontalLeftStrokeSharp"
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

export const IconDistributeHorizontalLeftSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-left-solid-sharp IconDistributeHorizontalLeftSolidSharp"
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

export const iconPackOfDistributeHorizontalLeft: TheIconSelfPack = {
  name: 'DistributeHorizontalLeft',
  StrokeRounded: IconDistributeHorizontalLeftStrokeRounded,
  DuotoneRounded: IconDistributeHorizontalLeftDuotoneRounded,
  TwotoneRounded: IconDistributeHorizontalLeftTwotoneRounded,
  SolidRounded: IconDistributeHorizontalLeftSolidRounded,
  BulkRounded: IconDistributeHorizontalLeftBulkRounded,
  StrokeSharp: IconDistributeHorizontalLeftStrokeSharp,
  SolidSharp: IconDistributeHorizontalLeftSolidSharp,
};