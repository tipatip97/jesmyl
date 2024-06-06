import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 12C2 8.46252 2 6.69377 3.0528 5.5129C3.22119 5.32403 3.40678 5.14935 3.60746 4.99087C4.86213 4 6.74142 4 10.5 4H13.5C17.2586 4 19.1379 4 20.3925 4.99087C20.5932 5.14935 20.7788 5.32403 20.9472 5.5129C22 6.69377 22 8.46252 22 12C22 15.5375 22 17.3062 20.9472 18.4871C20.7788 18.676 20.5932 18.8506 20.3925 19.0091C19.1379 20 17.2586 20 13.5 20H10.5C6.74142 20 4.86213 20 3.60746 19.0091C3.40678 18.8506 3.22119 18.676 3.0528 18.4871C2 17.3062 2 15.5375 2 12Z',
  d2: 'M10 16H11.5',
  d3: 'M14.5 16L18 16',
  d4: 'M2 9H22',
  d5: 'M10.5 20H13.5C17.2586 20 19.1379 20 20.3925 19.0091C20.5932 18.8506 20.7788 18.676 20.9472 18.4871C22 17.3062 22 15.5375 22 12C22 10.8169 22 9.8316 21.9606 9H2.03939C2 9.8316 2 10.8169 2 12C2 15.5375 2 17.3062 3.0528 18.4871C3.22119 18.676 3.40678 18.8506 3.60746 19.0091C4.86213 20 6.74142 20 10.5 20Z',
  d6: 'M13.5476 3.25C15.3866 3.24999 16.8309 3.24998 17.9694 3.3786C19.1316 3.50988 20.074 3.78362 20.8574 4.40228C21.0919 4.58749 21.3093 4.79205 21.507 5.0138C22.1732 5.76101 22.4707 6.66669 22.6124 7.77785C22.6287 7.9057 22.6369 7.96962 22.6222 8.02578C22.5988 8.11553 22.5299 8.19375 22.4438 8.22835C22.39 8.25 22.3226 8.25 22.1878 8.25H1.81225C1.67747 8.25 1.61008 8.25 1.55623 8.22835C1.47016 8.19375 1.40129 8.11553 1.37785 8.02578C1.36319 7.96963 1.37134 7.9057 1.38765 7.77785C1.52934 6.66669 1.82683 5.76101 2.493 5.0138C2.6907 4.79205 2.90813 4.58749 3.14265 4.40228C3.92603 3.78362 4.86844 3.50988 6.0306 3.3786C7.16919 3.24998 8.61348 3.24999 10.4525 3.25H13.5476ZM22.75 12.0527C22.75 13.7768 22.75 15.1427 22.6124 16.2222C22.4707 17.3333 22.1732 18.239 21.507 18.9862C21.3093 19.2079 21.0919 19.4125 20.8574 19.5977C20.074 20.2164 19.1316 20.4901 17.9694 20.6214C16.8308 20.75 15.3866 20.75 13.5476 20.75H10.4525C8.61346 20.75 7.16918 20.75 6.03059 20.6214C4.86843 20.4901 3.92601 20.2164 3.14264 19.5977C2.90812 19.4125 2.69069 19.2079 2.49299 18.9862C1.82682 18.239 1.52933 17.3333 1.38764 16.2222C1.24999 15.1427 1.25 13.7767 1.25001 12.0527V11.9473C1.25001 11.3715 1.25 10.8357 1.25513 10.3371C1.25796 10.0614 1.25938 9.92356 1.34705 9.83678C1.43473 9.75 1.57362 9.75 1.8514 9.75H22.1486C22.4264 9.75 22.5653 9.75 22.653 9.83678C22.7406 9.92356 22.7421 10.0614 22.7449 10.3371C22.75 10.8356 22.75 11.3715 22.75 11.9472V12.0527ZM10.25 16C10.25 15.5858 10.5858 15.25 11 15.25H12.5C12.9142 15.25 13.25 15.5858 13.25 16C13.25 16.4142 12.9142 16.75 12.5 16.75H11C10.5858 16.75 10.25 16.4142 10.25 16ZM15.5 15.25C15.0858 15.25 14.75 15.5858 14.75 16C14.75 16.4142 15.0858 16.75 15.5 16.75H19C19.4142 16.75 19.75 16.4142 19.75 16C19.75 15.5858 19.4142 15.25 19 15.25H15.5Z',
  d7: 'M22.75 12.0528C22.75 13.7768 22.75 15.1427 22.6124 16.2222C22.4707 17.3333 22.1732 18.239 21.507 18.9862C21.3093 19.208 21.0919 19.4125 20.8574 19.5977C20.074 20.2164 19.1316 20.4901 17.9694 20.6214C16.8308 20.75 15.3866 20.75 13.5475 20.75H10.4525C8.61345 20.75 7.16917 20.75 6.03058 20.6214C4.86842 20.4901 3.926 20.2164 3.14263 19.5977C2.90811 19.4125 2.69068 19.2079 2.49298 18.9862C1.82681 18.239 1.52932 17.3333 1.38763 16.2222C1.24998 15.1427 1.24999 13.7767 1.25 12.0527V11.9473C1.25 11.3715 1.24999 10.8357 1.25512 10.3371C1.25795 10.0614 1.25937 9.92356 1.34704 9.83678C1.43472 9.75 1.57361 9.75 1.85139 9.75H22.1486C22.4264 9.75 22.5653 9.75 22.653 9.83678C22.7406 9.92356 22.7421 10.0614 22.7449 10.3371C22.75 10.8356 22.75 11.3715 22.75 11.9473V12.0528Z',
  d8: 'M13.5485 3.25C15.3875 3.24999 16.8317 3.24998 17.9703 3.3786C19.1325 3.50988 20.0749 3.78362 20.8583 4.40229C21.0928 4.58749 21.3102 4.79205 21.5079 5.0138C22.1741 5.76101 22.4716 6.66669 22.6133 7.77785C22.6296 7.9057 22.6377 7.96963 22.6231 8.02579C22.5996 8.11553 22.5308 8.19375 22.4447 8.22835C22.3909 8.25 22.3235 8.25 22.1887 8.25H1.81314C1.67836 8.25 1.61097 8.25 1.55712 8.22835C1.47105 8.19375 1.40218 8.11554 1.37874 8.02579C1.36408 7.96963 1.37223 7.9057 1.38854 7.77785C1.53023 6.66669 1.82772 5.76101 2.49389 5.0138C2.69159 4.79205 2.90902 4.58749 3.14354 4.40229C3.92692 3.78362 4.86933 3.50988 6.03149 3.3786C7.17008 3.24998 8.61437 3.24999 10.4534 3.25H13.5485Z',
  d9: 'M10.25 16C10.25 15.5858 10.5858 15.25 11 15.25H12.5C12.9142 15.25 13.25 15.5858 13.25 16C13.25 16.4142 12.9142 16.75 12.5 16.75H11C10.5858 16.75 10.25 16.4142 10.25 16Z',
  d10: 'M14.75 16C14.75 15.5858 15.0858 15.25 15.5 15.25L19 15.25C19.4142 15.25 19.75 15.5858 19.75 16C19.75 16.4142 19.4142 16.75 19 16.75L15.5 16.75C15.0858 16.75 14.75 16.4142 14.75 16Z',
  d11: 'M22 4H2V20H22V4Z',
  d12: 'M11 16H13M15 16L19 16',
  d13: 'M1.25 4C1.25 3.58579 1.58579 3.25 2 3.25H22C22.4142 3.25 22.75 3.58579 22.75 4V8.25H1.25V4ZM1.25 9.75H22.75V20C22.75 20.4142 22.4142 20.75 22 20.75H2C1.58579 20.75 1.25 20.4142 1.25 20V9.75ZM11 16.75H13V15.25H11V16.75ZM15 16.75H19V15.25H15V16.75Z',
};

export const IconCreditCardStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-stroke-rounded IconCreditCardStrokeRounded"
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
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
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

export const IconCreditCardDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-duotone-rounded IconCreditCardDuotoneRounded"
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
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
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

export const IconCreditCardTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-twotone-rounded IconCreditCardTwotoneRounded"
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
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
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

export const IconCreditCardSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-solid-rounded IconCreditCardSolidRounded"
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

export const IconCreditCardBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-bulk-rounded IconCreditCardBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
      <path 
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
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-stroke-sharp IconCreditCardStrokeSharp"
    >
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeMiterlimit="10" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCreditCardSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="credit-card-solid-sharp IconCreditCardSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCreditCard: TheIconSelfPack = {
  name: 'CreditCard',
  StrokeRounded: IconCreditCardStrokeRounded,
  DuotoneRounded: IconCreditCardDuotoneRounded,
  TwotoneRounded: IconCreditCardTwotoneRounded,
  SolidRounded: IconCreditCardSolidRounded,
  BulkRounded: IconCreditCardBulkRounded,
  StrokeSharp: IconCreditCardStrokeSharp,
  SolidSharp: IconCreditCardSolidSharp,
};