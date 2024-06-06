import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z',
  d2: 'M13.0002 12C13.0002 13.6569 11.6571 15 10.0002 15C8.34339 15 7.00025 13.6569 7.00025 12C7.00025 10.3431 8.34339 9 10.0002 9C11.6571 9 13.0002 10.3431 13.0002 12Z',
  d3: 'M12 9.76389C12.5308 9.28885 13.2316 9 14 9C15.6569 9 17 10.3431 17 12C17 13.6569 15.6569 15 14 15C13.2316 15 12.5308 14.7111 12 14.2361',
  d4: 'M3.0528 5.5129C2 6.69377 2 8.46252 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20H13.5C17.2586 20 19.1379 20 20.3925 19.0091C20.5932 18.8506 20.7788 18.676 20.9472 18.4871C22 17.3062 22 15.5375 22 12C22 8.46252 22 6.69377 20.9472 5.5129C20.7788 5.32403 20.5932 5.14935 20.3925 4.99087C19.1379 4 17.2586 4 13.5 4H10.5C6.74142 4 4.86213 4 3.60746 4.99087C3.40678 5.14935 3.22119 5.32403 3.0528 5.5129ZM10.0002 15C10.7686 15 11.4695 14.7111 12.0002 14.2361C12.531 14.7111 13.2319 15 14.0002 15C15.6571 15 17.0002 13.6569 17.0002 12C17.0002 10.3431 15.6571 9 14.0002 9C13.2319 9 12.531 9.28885 12.0002 9.76389C11.4695 9.28885 10.7686 9 10.0002 9C8.34339 9 7.00024 10.3431 7.00024 12C7.00024 13.6569 8.34339 15 10.0002 15Z',
  d5: 'M11.9998 9.76389C12.5305 9.28885 13.2314 9 13.9998 9C15.6566 9 16.9998 10.3431 16.9998 12C16.9998 13.6569 15.6566 15 13.9998 15C13.2314 15 12.5305 14.7111 11.9998 14.2361M13 12C13 13.6569 11.6569 15 10 15C8.34315 15 7 13.6569 7 12C7 10.3431 8.34315 9 10 9C11.6569 9 13 10.3431 13 12Z',
  d6: 'M13.5475 3.25H13.5475C15.3866 3.24999 16.8308 3.24998 17.9694 3.3786C19.1316 3.50988 20.074 3.78362 20.8574 4.40229C21.0919 4.58749 21.3093 4.79205 21.507 5.0138C22.1732 5.76101 22.4707 6.66669 22.6124 7.77785C22.75 8.85727 22.75 10.2232 22.75 11.9473V12.0528C22.75 13.7768 22.75 15.1427 22.6124 16.2222C22.4707 17.3333 22.1732 18.239 21.507 18.9862C21.3093 19.208 21.0919 19.4125 20.8574 19.5977C20.074 20.2164 19.1316 20.4901 17.9694 20.6214C16.8308 20.75 15.3866 20.75 13.5475 20.75H10.4525C8.61345 20.75 7.16917 20.75 6.03058 20.6214C4.86842 20.4901 3.926 20.2164 3.14263 19.5977C2.90811 19.4125 2.69068 19.2079 2.49298 18.9862C1.82681 18.239 1.52932 17.3333 1.38763 16.2222C1.24998 15.1427 1.24999 13.7767 1.25 12.0527V12.0527V11.9473V11.9472C1.24999 10.2232 1.24998 8.85727 1.38763 7.77785C1.52932 6.66669 1.82681 5.76101 2.49298 5.0138C2.69068 4.79205 2.90811 4.58749 3.14263 4.40229C3.926 3.78362 4.86842 3.50988 6.03058 3.3786C7.16917 3.24998 8.61345 3.24999 10.4525 3.25H10.4525H13.5475ZM10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16C10.7286 16 11.4117 15.8052 12.0001 15.4648C12.5884 15.8049 13.2719 16 13.9998 16C16.2089 16 17.9998 14.2091 17.9998 12C17.9998 9.79086 16.2089 8 13.9998 8C13.2719 8 12.5884 8.19505 12.0001 8.53517C11.4117 8.19481 10.7286 8 10 8ZM8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12ZM13.9998 14C13.8271 14 13.6599 13.9783 13.5004 13.9374C13.8187 13.3634 14 12.7029 14 12C14 11.2971 13.8187 10.6366 13.5004 10.0626C13.6599 10.0217 13.8271 10 13.9998 10C15.1043 10 15.9998 10.8954 15.9998 12C15.9998 13.1046 15.1043 14 13.9998 14Z',
  d7: 'M13.5475 3.25H13.5475H10.4525H10.4525C8.61345 3.24999 7.16917 3.24998 6.03058 3.3786C4.86842 3.50988 3.926 3.78362 3.14263 4.40229C2.90811 4.58749 2.69068 4.79205 2.49298 5.0138C1.82681 5.76101 1.52932 6.66669 1.38763 7.77785C1.24998 8.85727 1.24999 10.2232 1.25 11.9472V11.9473V12.0527V12.0527C1.24999 13.7767 1.24998 15.1427 1.38763 16.2222C1.52932 17.3333 1.82681 18.239 2.49298 18.9862C2.69068 19.2079 2.90811 19.4125 3.14263 19.5977C3.926 20.2164 4.86842 20.4901 6.03058 20.6214C7.16917 20.75 8.61345 20.75 10.4525 20.75H13.5475C15.3866 20.75 16.8308 20.75 17.9694 20.6214C19.1316 20.4901 20.074 20.2164 20.8574 19.5977C21.0919 19.4125 21.3093 19.208 21.507 18.9862C22.1732 18.239 22.4707 17.3333 22.6124 16.2222C22.75 15.1427 22.75 13.7768 22.75 12.0528V11.9473C22.75 10.2232 22.75 8.85727 22.6124 7.77785C22.4707 6.66669 22.1732 5.76101 21.507 5.0138C21.3093 4.79205 21.0919 4.58749 20.8574 4.40229C20.074 3.78362 19.1316 3.50988 17.9694 3.3786C16.8308 3.24998 15.3866 3.24999 13.5475 3.25Z',
  d8: 'M6 12C6 9.79086 7.79086 8 10 8C10.7286 8 11.4117 8.19481 12.0001 8.53517C12.5884 8.19505 13.2719 8 13.9998 8C16.2089 8 17.9998 9.79086 17.9998 12C17.9998 14.2091 16.2089 16 13.9998 16C13.2719 16 12.5884 15.8049 12.0001 15.4648C11.4117 15.8052 10.7286 16 10 16C7.79086 16 6 14.2091 6 12ZM10 10C8.89543 10 8 10.8954 8 12C8 13.1046 8.89543 14 10 14C11.1046 14 12 13.1046 12 12C12 10.8954 11.1046 10 10 10ZM13.5004 13.9374C13.6599 13.9783 13.8271 14 13.9998 14C15.1043 14 15.9998 13.1046 15.9998 12C15.9998 10.8954 15.1043 10 13.9998 10C13.8271 10 13.6599 10.0217 13.5004 10.0626C13.8187 10.6366 14 11.2971 14 12C14 12.7029 13.8187 13.3634 13.5004 13.9374Z',
  d9: 'M22 4V20H2V4H22Z',
  d10: 'M2 3.25C1.58579 3.25 1.25 3.58579 1.25 4V20C1.25 20.4142 1.58579 20.75 2 20.75H22C22.4142 20.75 22.75 20.4142 22.75 20V4C22.75 3.58579 22.4142 3.25 22 3.25H2ZM8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12ZM10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16C10.7286 16 11.4117 15.8052 12.0001 15.4648C12.5884 15.8049 13.2719 16 13.9998 16C16.2089 16 17.9998 14.2091 17.9998 12C17.9998 9.79086 16.2089 8 13.9998 8C13.2719 8 12.5884 8.19505 12.0001 8.53517C11.4117 8.19481 10.7286 8 10 8ZM13.9998 14C13.8271 14 13.6599 13.9783 13.5004 13.9374C13.8187 13.3634 14 12.7029 14 12C14 11.2971 13.8187 10.6366 13.5004 10.0626C13.6599 10.0217 13.8271 10 13.9998 10C15.1043 10 15.9998 10.8954 15.9998 12C15.9998 13.1046 15.1043 14 13.9998 14Z',
};

export const IconMasterCardStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="master-card-stroke-rounded IconMasterCardStrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMasterCardDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="master-card-duotone-rounded IconMasterCardDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
    </TheIconWrapper>
  );
};

export const IconMasterCardTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="master-card-twotone-rounded IconMasterCardTwotoneRounded"
    >
      <path 
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
      />
    </TheIconWrapper>
  );
};

export const IconMasterCardSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="master-card-solid-rounded IconMasterCardSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMasterCardBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="master-card-bulk-rounded IconMasterCardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconMasterCardStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="master-card-stroke-sharp IconMasterCardStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconMasterCardSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="master-card-solid-sharp IconMasterCardSolidSharp"
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

export const iconPackOfMasterCard: TheIconSelfPack = {
  name: 'MasterCard',
  StrokeRounded: IconMasterCardStrokeRounded,
  DuotoneRounded: IconMasterCardDuotoneRounded,
  TwotoneRounded: IconMasterCardTwotoneRounded,
  SolidRounded: IconMasterCardSolidRounded,
  BulkRounded: IconMasterCardBulkRounded,
  StrokeSharp: IconMasterCardStrokeSharp,
  SolidSharp: IconMasterCardSolidSharp,
};