import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 11C22 7.46252 22 5.69377 20.9472 4.5129C20.7788 4.32403 20.5932 4.14935 20.3925 3.99087C19.1379 3 17.2586 3 13.5 3H10.5C6.74142 3 4.86213 3 3.60746 3.99087C3.40678 4.14935 3.22119 4.32403 3.0528 4.5129C2 5.69377 2 7.46252 2 11C2 14.5375 2 16.3062 3.0528 17.4871C3.22119 17.676 3.40678 17.8506 3.60746 18.0091C4.86213 19 6.74142 19 10.5 19H12',
  d2: 'M18.5 21L18.5 14M15 17.5H22',
  d3: 'M5.5 11H5.49102',
  d4: 'M14.5 11C14.5 12.3807 13.3807 13.5 12 13.5C10.6193 13.5 9.5 12.3807 9.5 11C9.5 9.61929 10.6193 8.5 12 8.5C13.3807 8.5 14.5 9.61929 14.5 11Z',
  d5: 'M3.0528 4.5129C2 5.69377 2 7.46252 2 11C2 14.5375 2 16.3062 3.0528 17.4871C3.22119 17.676 3.40678 17.8506 3.60746 18.0091C4.86213 19 6.74142 19 10.5 19H13.5C17.2586 19 19.1379 19 20.3925 18.0091C20.5932 17.8506 20.7788 17.676 20.9472 17.4871C22 16.3062 22 14.5375 22 11C22 7.46252 22 5.69377 20.9472 4.5129C20.7788 4.32403 20.5932 4.14935 20.3925 3.99087C19.1379 3 17.2586 3 13.5 3H10.5C6.74142 3 4.86213 3 3.60746 3.99087C3.40678 4.14935 3.22119 4.32403 3.0528 4.5129ZM12.051 13.5C13.4317 13.5 14.551 12.3807 14.551 11C14.551 9.61929 13.4317 8.5 12.051 8.5C10.6703 8.5 9.55099 9.61929 9.55099 11C9.55099 12.3807 10.6703 13.5 12.051 13.5Z',
  d6: 'M17.9694 2.3786C16.8308 2.24998 15.3866 2.24999 13.5475 2.25H10.4525C8.61345 2.24999 7.16917 2.24998 6.03058 2.3786C4.86842 2.50988 3.926 2.78362 3.14263 3.40229C2.90811 3.58749 2.69068 3.79205 2.49298 4.0138C1.82681 4.76101 1.52932 5.66669 1.38763 6.77785C1.24998 7.85727 1.24999 9.22326 1.25 10.9473V11.0528C1.24999 12.7768 1.24998 14.1427 1.38763 15.2222C1.52932 16.3333 1.82681 17.239 2.49298 17.9862C2.69068 18.2079 2.90811 18.4125 3.14263 18.5977C3.926 19.2164 4.86842 19.4901 6.03058 19.6214C7.16917 19.75 8.61345 19.75 10.4525 19.75L13.0402 19.7501C13.3673 19.7501 13.5308 19.7501 13.5566 19.689C13.5824 19.6279 13.4577 19.4998 13.2083 19.2436C12.77 18.7932 12.5 18.1781 12.5 17.5C12.5 16.1193 13.6193 15 15 15H15.6C15.7886 15 15.8828 15 15.9414 14.9414C16 14.8828 16 14.7886 16 14.6V14C16 12.6193 17.1193 11.5 18.5 11.5C19.8807 11.5 21 12.6193 21 14V14.6C21 14.7886 21 14.8828 21.0586 14.9414C21.1172 15 21.2114 15 21.4 15H22C22.0591 15 22.1177 15.002 22.1757 15.0061C22.4085 15.0222 22.5249 15.0303 22.5872 14.9766C22.6496 14.9229 22.6575 14.8225 22.6733 14.6218C22.75 13.6481 22.75 12.4717 22.75 11.0528V10.9473C22.75 9.22325 22.75 7.85727 22.6124 6.77785C22.4707 5.66669 22.1732 4.76101 21.507 4.0138C21.3093 3.79205 21.0919 3.58749 20.8574 3.40229C20.074 2.78362 19.1316 2.50988 17.9694 2.3786ZM12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8ZM5.5 10C6.05229 10 6.5 10.4477 6.5 11C6.5 11.5523 6.05229 12 5.5 12H5.49102C4.93873 12 4.49102 11.5523 4.49102 11C4.49102 10.4477 4.93873 10 5.49102 10H5.5Z',
  d7: 'M18.5 13C19.0523 13 19.5 13.4477 19.5 14V16.5H22C22.5523 16.5 23 16.9477 23 17.5C23 18.0523 22.5523 18.5 22 18.5H19.5V21C19.5 21.5523 19.0523 22 18.5 22C17.9477 22 17.5 21.5523 17.5 21L17.5 18.5H15C14.4477 18.5 14 18.0523 14 17.5C14 16.9477 14.4477 16.5 15 16.5H17.5L17.5 14C17.5 13.4477 17.9477 13 18.5 13Z',
  d8: 'M13.5476 2.25H13.5475H10.4525H10.4524C8.61344 2.24999 7.16917 2.24998 6.03058 2.3786C4.86842 2.50988 3.926 2.78362 3.14263 3.40229C2.90811 3.58749 2.69068 3.79205 2.49298 4.0138C1.82681 4.76101 1.52932 5.66669 1.38763 6.77785C1.24998 7.85727 1.24999 9.22325 1.25 10.9472V10.9473V11.0528V11.0528C1.24999 12.7768 1.24998 14.1427 1.38763 15.2222C1.52932 16.3333 1.82681 17.239 2.49298 17.9862C2.69068 18.2079 2.90811 18.4125 3.14263 18.5977C3.926 19.2164 4.86842 19.4901 6.03058 19.6214C7.16917 19.75 8.61345 19.75 10.4525 19.75L13.0402 19.7501C13.3673 19.7501 13.5308 19.7501 13.5566 19.689C13.5824 19.6279 13.4577 19.4998 13.2083 19.2436C12.77 18.7932 12.5 18.1781 12.5 17.5C12.5 16.1193 13.6193 15 15 15H15.6C15.7886 15 15.8828 15 15.9414 14.9414C16 14.8828 16 14.7886 16 14.6V14C16 12.6193 17.1193 11.5 18.5 11.5C19.8807 11.5 21 12.6193 21 14V14.6C21 14.7886 21 14.8828 21.0586 14.9414C21.1172 15 21.2114 15 21.4 15H22C22.0591 15 22.1177 15.002 22.1757 15.0061C22.4085 15.0222 22.5249 15.0303 22.5872 14.9766C22.6496 14.9229 22.6575 14.8225 22.6733 14.6218C22.75 13.6481 22.75 12.4717 22.75 11.0528V10.9473C22.75 9.22325 22.75 7.85727 22.6124 6.77785C22.4707 5.66669 22.1732 4.76101 21.507 4.0138C21.3093 3.79205 21.0919 3.58749 20.8574 3.40229C20.074 2.78362 19.1316 2.50988 17.9694 2.3786C16.8308 2.24998 15.3866 2.24999 13.5476 2.25Z',
  d9: 'M11.9992 8C10.3424 8 8.99922 9.34315 8.99922 11C8.99922 12.6569 10.3424 14 11.9992 14C13.6561 14 14.9992 12.6569 14.9992 11C14.9992 9.34315 13.6561 8 11.9992 8ZM5.49922 10C6.0515 10 6.49922 10.4477 6.49922 11C6.49922 11.5523 6.0515 12 5.49922 12H5.49023C4.93795 12 4.49023 11.5523 4.49023 11C4.49023 10.4477 4.93795 10 5.49023 10H5.49922Z',
  d10: 'M22 11V3H2V19H12',
  d11: 'M2 2.25C1.58579 2.25 1.25 2.58579 1.25 3V19C1.25 19.4142 1.58579 19.75 2 19.75H14.25V15.75H16.75V13.25H21.75V15.75H22.75V3C22.75 2.58579 22.4142 2.25 22 2.25H2ZM8.80078 11C8.80078 9.20507 10.2559 7.75 12.0508 7.75C13.8457 7.75 15.3008 9.20507 15.3008 11C15.3008 12.7949 13.8457 14.25 12.0508 14.25C10.2559 14.25 8.80078 12.7949 8.80078 11ZM3.5 11.75H6.5V10.25H3.5L3.5 11.75Z',
  d12: 'M20.25 19.25V21.75L18.25 21.75L18.25 19.25H15.75V17.25H18.25L18.25 14.75H20.25V17.25H22.75V19.25H20.25Z',
};

export const IconMoneyAdd01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-01-stroke-rounded IconMoneyAdd01StrokeRounded"
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
      />
    </TheIconWrapper>
  );
};

export const IconMoneyAdd01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-01-duotone-rounded IconMoneyAdd01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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
      />
    </TheIconWrapper>
  );
};

export const IconMoneyAdd01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-01-twotone-rounded IconMoneyAdd01TwotoneRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMoneyAdd01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-01-solid-rounded IconMoneyAdd01SolidRounded"
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

export const IconMoneyAdd01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-01-bulk-rounded IconMoneyAdd01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
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

export const IconMoneyAdd01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-01-stroke-sharp IconMoneyAdd01StrokeSharp"
    >
      <path 
        d={d.d10} 
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
        strokeLinecap="square" 
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

export const IconMoneyAdd01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="money-add-01-solid-sharp IconMoneyAdd01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMoneyAdd01: TheIconSelfPack = {
  name: 'MoneyAdd01',
  StrokeRounded: IconMoneyAdd01StrokeRounded,
  DuotoneRounded: IconMoneyAdd01DuotoneRounded,
  TwotoneRounded: IconMoneyAdd01TwotoneRounded,
  SolidRounded: IconMoneyAdd01SolidRounded,
  BulkRounded: IconMoneyAdd01BulkRounded,
  StrokeSharp: IconMoneyAdd01StrokeSharp,
  SolidSharp: IconMoneyAdd01SolidSharp,
};