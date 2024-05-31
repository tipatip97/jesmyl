import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M2 22L22 22',
  d2: 'M2 10L22 10',
  d3: 'M8.00232 4.5C8.00232 5.34389 7.91895 6.31789 8.75232 6.79904C9.10039 7 9.5677 7 10.5023 7H13.5023C14.4369 7 14.9042 7 15.2523 6.79904C16.0857 6.31789 16.0023 5.34389 16.0023 4.5C16.0023 3.65611 16.0857 2.68211 15.2523 2.20096C14.9042 2 14.4369 2 13.5023 2L10.5023 2C9.5677 2 9.10039 2 8.75232 2.20096C7.91895 2.68211 8.00232 3.65611 8.00232 4.5Z',
  d4: 'M5.00232 16.5C5.00232 17.3439 4.91895 18.3179 5.75232 18.799C6.10039 19 6.5677 19 7.50232 19L16.5023 19C17.4369 19 17.9042 19 18.2523 18.799C19.0857 18.3179 19.0023 17.3439 19.0023 16.5C19.0023 15.6561 19.0857 14.6821 18.2523 14.201C17.9042 14 17.4369 14 16.5023 14L7.50232 14C6.5677 14 6.10039 14 5.75232 14.201C4.91895 14.6821 5.00232 15.6561 5.00232 16.5Z',
  d5: 'M1 21.875C1 21.3227 1.44772 20.875 2 20.875L22 20.875C22.5523 20.875 23 21.3227 23 21.875C23 22.4273 22.5523 22.875 22 22.875H2C1.44772 22.875 1 22.4273 1 21.875Z',
  d6: 'M1 9.875C1 9.32272 1.44772 8.875 2 8.875L22 8.875C22.5523 8.875 23 9.32272 23 9.875C23 10.4273 22.5523 10.875 22 10.875H2C1.44772 10.875 1 10.4273 1 9.875Z',
  d7: 'M13.535 1.125C13.9748 1.12498 14.3541 1.12497 14.6654 1.15318C14.9946 1.18302 15.3205 1.24908 15.6278 1.42644C16.282 1.80418 16.5625 2.38658 16.6752 2.93977C16.7621 3.36673 16.7575 3.83575 16.754 4.19182V4.19186C16.7534 4.25701 16.7528 4.31837 16.7528 4.375C16.7528 4.43163 16.7534 4.493 16.754 4.55814V4.55818C16.7575 4.91425 16.7621 5.38327 16.6752 5.81023C16.5625 6.36343 16.282 6.94582 15.6278 7.32356C15.3205 7.50093 14.9946 7.56698 14.6654 7.59682C14.3541 7.62503 13.9748 7.62502 13.535 7.625H10.4705C10.0307 7.62502 9.65139 7.62503 9.3401 7.59682C9.01092 7.56699 8.68496 7.50093 8.37775 7.32356C7.72349 6.94582 7.44299 6.36343 7.33032 5.81023C7.24336 5.38327 7.24799 4.91425 7.2515 4.55818C7.25214 4.49302 7.25275 4.43165 7.25275 4.375C7.25275 4.31836 7.25214 4.25698 7.2515 4.19182C7.24799 3.83575 7.24336 3.36673 7.33032 2.93977C7.44299 2.38658 7.72349 1.80418 8.37775 1.42644C8.68496 1.24908 9.01092 1.18302 9.3401 1.15318C9.65139 1.12497 10.0307 1.12498 10.4705 1.125H10.4705H13.535H13.535Z',
  d8: 'M17.6654 13.1532C17.9946 13.183 18.3205 13.2491 18.6278 13.4264C19.282 13.8042 19.5625 14.3866 19.6752 14.9398C19.7621 15.3667 19.7575 15.8357 19.754 16.1918V16.1919C19.7534 16.257 19.7528 16.3184 19.7528 16.375C19.7528 16.4316 19.7534 16.493 19.754 16.5581V16.5582C19.7575 16.9143 19.7621 17.3833 19.6752 17.8102C19.5625 18.3634 19.282 18.9458 18.6278 19.3236C18.3205 19.5009 17.9946 19.567 17.6654 19.5968C17.3541 19.625 16.9748 19.625 16.535 19.625L7.47052 19.625C7.03074 19.625 6.65139 19.625 6.3401 19.5968C6.01092 19.567 5.68496 19.5009 5.37775 19.3236C4.72349 18.9458 4.44299 18.3634 4.33032 17.8102C4.24336 17.3833 4.24799 16.9143 4.2515 16.5582C4.25214 16.493 4.25275 16.4316 4.25275 16.375C4.25275 16.3184 4.25214 16.257 4.2515 16.1918C4.24799 15.8357 4.24336 15.3667 4.33032 14.9398C4.44299 14.3866 4.72349 13.8042 5.37775 13.4264C5.68496 13.2491 6.01092 13.183 6.3401 13.1532C6.65138 13.125 7.0307 13.125 7.47047 13.125H7.47052H16.535H16.535C16.9748 13.125 17.3541 13.125 17.6654 13.1532Z',
  d9: 'M2 21.5L22 21.5',
  d10: 'M2 10.5L22 10.5',
  d11: 'M16.0039 7.5L8.00391 7.5L8.00391 2.5L16.0039 2.5V7.5Z',
  d12: 'M19 18.5L5 18.5L5 13.5L19 13.5V18.5Z',
  d13: 'M22 22L2 22V20L22 20V22Z',
  d14: 'M22 11L2 11V9L22 9V11Z',
  d15: 'M16.0039 6.5C16.0039 6.77614 15.78 7 15.5039 7L8.50391 7C8.22776 7 8.00391 6.77614 8.00391 6.5L8.00391 2.5C8.00391 2.22386 8.22776 2 8.50391 2L15.5039 2C15.78 2 16.0039 2.22386 16.0039 2.5V6.5Z',
  d16: 'M19 17.5C19 17.7761 18.7761 18 18.5 18L5.5 18C5.22386 18 5 17.7761 5 17.5L5 13.5C5 13.2239 5.22386 13 5.5 13L18.5 13C18.7761 13 19 13.2239 19 13.5V17.5Z',
} as const;

export const IconDistributeVerticalBottomStrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-bottom-stroke-rounded IconDistributeVerticalBottomStrokeRounded"
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

export const IconDistributeVerticalBottomDuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-bottom-duotone-rounded IconDistributeVerticalBottomDuotoneRounded"
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

export const IconDistributeVerticalBottomTwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-bottom-twotone-rounded IconDistributeVerticalBottomTwotoneRounded"
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

export const IconDistributeVerticalBottomSolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-bottom-solid-rounded IconDistributeVerticalBottomSolidRounded"
    >
      <path 
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

export const IconDistributeVerticalBottomBulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-bottom-bulk-rounded IconDistributeVerticalBottomBulkRounded"
    >
      <path 
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
        opacity="var(--icon-opacity)" 
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

export const IconDistributeVerticalBottomStrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-bottom-stroke-sharp IconDistributeVerticalBottomStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
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

export const IconDistributeVerticalBottomSolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-vertical-bottom-solid-sharp IconDistributeVerticalBottomSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const iconPackOfDistributeVerticalBottom: TheIconSelfPack = {
  name: 'DistributeVerticalBottom',
  StrokeRounded: IconDistributeVerticalBottomStrokeRounded,
  DuotoneRounded: IconDistributeVerticalBottomDuotoneRounded,
  TwotoneRounded: IconDistributeVerticalBottomTwotoneRounded,
  SolidRounded: IconDistributeVerticalBottomSolidRounded,
  BulkRounded: IconDistributeVerticalBottomBulkRounded,
  StrokeSharp: IconDistributeVerticalBottomStrokeSharp,
  SolidSharp: IconDistributeVerticalBottomSolidSharp,
};