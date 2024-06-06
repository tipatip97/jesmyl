import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M21.999 2V22',
  d2: 'M10 2V22',
  d3: 'M16.5 8.00232C17.3439 8.00232 18.3179 7.91895 18.799 8.75232C19 9.10039 19 9.5677 19 10.5023V13.5023C19 14.4369 19 14.9042 18.799 15.2523C18.3179 16.0857 17.3439 16.0023 16.5 16.0023C15.6561 16.0023 14.6821 16.0857 14.201 15.2523C14 14.9042 14 14.4369 14 13.5023L14 10.5023C14 9.5677 14 9.10039 14.201 8.75232C14.6821 7.91895 15.6561 8.00232 16.5 8.00232Z',
  d4: 'M4.5 5.00232C5.34389 5.00232 6.31789 4.91895 6.79904 5.75232C7 6.10039 7 6.5677 7 7.50232L7 16.5023C7 17.4369 7 17.9042 6.79904 18.2523C6.31789 19.0857 5.34389 19.0023 4.5 19.0023C3.65611 19.0023 2.68211 19.0857 2.20096 18.2523C2 17.9042 2 17.4369 2 16.5023L2 7.50232C2 6.5677 2 6.10039 2.20096 5.75232C2.68211 4.91895 3.65611 5.00232 4.5 5.00232Z',
  d5: 'M21.874 1C22.4263 1 22.874 1.44772 22.874 2V22C22.874 22.5523 22.4263 23 21.874 23C21.3217 23 20.874 22.5523 20.874 22V2C20.874 1.44772 21.3217 1 21.874 1Z',
  d6: 'M9.875 1C10.4273 1 10.875 1.44772 10.875 2V22C10.875 22.5523 10.4273 23 9.875 23C9.32272 23 8.875 22.5523 8.875 22V2C8.875 1.44772 9.32272 1 9.875 1Z',
  d7: 'M16.1918 7.2515C16.257 7.25214 16.3184 7.25275 16.375 7.25275C16.4316 7.25275 16.493 7.25214 16.5582 7.2515C16.9143 7.24799 17.3833 7.24336 17.8102 7.33032C18.3634 7.44299 18.9458 7.72349 19.3236 8.37775C19.5009 8.68496 19.567 9.01092 19.5968 9.3401C19.625 9.65139 19.625 10.0307 19.625 10.4705V13.535C19.625 13.9748 19.625 14.3541 19.5968 14.6654C19.567 14.9946 19.5009 15.3205 19.3236 15.6278C18.9458 16.282 18.3634 16.5625 17.8102 16.6752C17.3833 16.7621 16.9143 16.7575 16.5582 16.754H16.5581C16.493 16.7534 16.4316 16.7528 16.375 16.7528C16.3184 16.7528 16.257 16.7534 16.1919 16.754H16.1918C15.8357 16.7575 15.3667 16.7621 14.9398 16.6752C14.3866 16.5625 13.8042 16.282 13.4264 15.6278C13.2491 15.3205 13.183 14.9946 13.1532 14.6654C13.125 14.3541 13.125 13.9748 13.125 13.535V13.535V10.4705V10.4705C13.125 10.0307 13.125 9.65138 13.1532 9.3401C13.183 9.01092 13.2491 8.68496 13.4264 8.37775C13.8042 7.72349 14.3866 7.44299 14.9398 7.33032C15.3667 7.24336 15.8357 7.24799 16.1918 7.2515Z',
  d8: 'M4.19182 4.2515C4.25698 4.25214 4.31836 4.25275 4.375 4.25275C4.43165 4.25275 4.49302 4.25214 4.55818 4.2515C4.91425 4.24799 5.38327 4.24336 5.81023 4.33032C6.36343 4.44299 6.94582 4.72349 7.32356 5.37775C7.50093 5.68496 7.56699 6.01092 7.59682 6.3401C7.62503 6.65139 7.62502 7.03074 7.625 7.47052L7.625 16.535C7.62502 16.9748 7.62503 17.3541 7.59682 17.6654C7.56698 17.9946 7.50093 18.3205 7.32356 18.6278C6.94582 19.282 6.36343 19.5625 5.81023 19.6752C5.38327 19.7621 4.91425 19.7575 4.55818 19.754H4.55814C4.493 19.7534 4.43163 19.7528 4.375 19.7528C4.31837 19.7528 4.25701 19.7534 4.19186 19.754H4.19182C3.83575 19.7575 3.36673 19.7621 2.93977 19.6752C2.38658 19.5625 1.80418 19.282 1.42644 18.6278C1.24908 18.3205 1.18302 17.9946 1.15318 17.6654C1.12497 17.3541 1.12498 16.9748 1.125 16.535V16.535V7.47053V7.47047C1.12498 7.03071 1.12497 6.65138 1.15318 6.3401C1.18302 6.01092 1.24908 5.68496 1.42645 5.37775C1.80418 4.72349 2.38658 4.44299 2.93977 4.33032C3.36673 4.24336 3.83575 4.24799 4.19182 4.2515Z',
  d9: 'M21.5 2V22',
  d10: 'M10.5 2V22',
  d11: 'M7.5 5H2.5V19H7.5V5Z',
  d12: 'M18.5 8H13.5V16H18.5V8Z',
  d13: 'M9 22L9 2L11 2V22H9Z',
  d14: 'M20 22L20 2L22 2V22H20Z',
  d15: 'M13.5 16.0039C13.2239 16.0039 13 15.78 13 15.5039L13 8.50391C13 8.22776 13.2239 8.00391 13.5 8.00391L17.5 8.00391C17.7761 8.00391 18 8.22776 18 8.50391V15.5039C18 15.78 17.7761 16.0039 17.5 16.0039H13.5Z',
  d16: 'M2.5 19C2.22386 19 2 18.7761 2 18.5L2 5.5C2 5.22386 2.22386 5 2.5 5L6.5 5C6.77614 5 7 5.22386 7 5.5V18.5C7 18.7761 6.77614 19 6.5 19H2.5Z',
};

export const IconDistributeHorizontalRightStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-right-stroke-rounded IconDistributeHorizontalRightStrokeRounded"
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

export const IconDistributeHorizontalRightDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-right-duotone-rounded IconDistributeHorizontalRightDuotoneRounded"
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

export const IconDistributeHorizontalRightTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-right-twotone-rounded IconDistributeHorizontalRightTwotoneRounded"
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

export const IconDistributeHorizontalRightSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-right-solid-rounded IconDistributeHorizontalRightSolidRounded"
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

export const IconDistributeHorizontalRightBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-right-bulk-rounded IconDistributeHorizontalRightBulkRounded"
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

export const IconDistributeHorizontalRightStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-right-stroke-sharp IconDistributeHorizontalRightStrokeSharp"
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

export const IconDistributeHorizontalRightSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="distribute-horizontal-right-solid-sharp IconDistributeHorizontalRightSolidSharp"
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

export const iconPackOfDistributeHorizontalRight: TheIconSelfPack = {
  name: 'DistributeHorizontalRight',
  StrokeRounded: IconDistributeHorizontalRightStrokeRounded,
  DuotoneRounded: IconDistributeHorizontalRightDuotoneRounded,
  TwotoneRounded: IconDistributeHorizontalRightTwotoneRounded,
  SolidRounded: IconDistributeHorizontalRightSolidRounded,
  BulkRounded: IconDistributeHorizontalRightBulkRounded,
  StrokeSharp: IconDistributeHorizontalRightStrokeSharp,
  SolidSharp: IconDistributeHorizontalRightSolidSharp,
};