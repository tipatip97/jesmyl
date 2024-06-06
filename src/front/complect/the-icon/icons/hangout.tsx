import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M12 22C16 22 21 16 21 11C21 6 16.9706 2 12 2C7.02944 2 3 6 3 11C3 16 7.02944 20 12 20V22Z',
  d2: 'M10.5 11.5V10C10.5 9.05719 10.5 8.58579 10.2071 8.29289C9.91421 8 9.44281 8 8.5 8C7.55719 8 7.08579 8 6.79289 8.29289C6.5 8.58579 6.5 9.05719 6.5 10V10.5C6.5 10.9659 6.5 11.1989 6.57612 11.3827C6.67761 11.6277 6.87229 11.8224 7.11732 11.9239C7.30109 12 7.8312 12 8.29714 12C8.51058 12.9056 8 14 8 14C9.38071 14 10.5 12.8807 10.5 11.5Z',
  d3: 'M17.5 11.5V10C17.5 9.05719 17.5 8.58579 17.2071 8.29289C16.9142 8 16.4428 8 15.5 8C14.5572 8 14.0858 8 13.7929 8.29289C13.5 8.58579 13.5 9.05719 13.5 10V10.5C13.5 10.9659 13.5 11.1989 13.5761 11.3827C13.6776 11.6277 13.8723 11.8224 14.1173 11.9239C14.3011 12 14.8312 12 15.2971 12C15.5106 12.9056 15 14 15 14C16.3807 14 17.5 12.8807 17.5 11.5Z',
  d4: 'M12 22C16 22 21 16 21 11C21 6 16.9706 2 12 2C7.02944 2 3 6 3 11C3 16 7.02944 20 12 20V22ZM10.5 11.5V10C10.5 9.05719 10.5 8.58579 10.2071 8.29289C9.91421 8 9.44281 8 8.5 8C7.55719 8 7.08579 8 6.79289 8.29289C6.5 8.58579 6.5 9.05719 6.5 10V10.5C6.5 10.9659 6.5 11.1989 6.57612 11.3827C6.67761 11.6277 6.87229 11.8224 7.11732 11.9239C7.30109 12 7.8312 12 8.29714 12C8.51058 12.9056 8 14 8 14C9.38071 14 10.5 12.8807 10.5 11.5ZM17.5 10V11.5C17.5 12.8807 16.3807 14 15 14C15 14 15.5106 12.9056 15.2971 12C14.8312 12 14.3011 12 14.1173 11.9239C13.8723 11.8224 13.6776 11.6277 13.5761 11.3827C13.5 11.1989 13.5 10.9659 13.5 10.5V10C13.5 9.05719 13.5 8.58579 13.7929 8.29289C14.0858 8 14.5572 8 15.5 8C16.4428 8 16.9142 8 17.2071 8.29289C17.5 8.58579 17.5 9.05719 17.5 10Z',
  d5: 'M2.25 11C2.25 5.58419 6.61682 1.25 12 1.25C17.3832 1.25 21.75 5.58419 21.75 11C21.75 13.726 20.4011 16.6391 18.5789 18.8518C16.7769 21.04 14.3355 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20.7218C6.21701 20.3413 2.25 16.1619 2.25 11ZM8.46707 7.5H8.46709H8.53292H8.53294C8.97617 7.49998 9.35807 7.49996 9.6639 7.54107C9.99166 7.58514 10.3058 7.68451 10.5607 7.93934C10.8155 8.19417 10.9149 8.50835 10.9589 8.83611C11.0001 9.14194 11 9.52384 11 9.96709V11.5C11 13.1569 9.65686 14.5 8 14.5C7.82913 14.5 7.67008 14.4127 7.57828 14.2686C7.48665 14.1248 7.47469 13.9441 7.54649 13.7895L7.54933 13.7832C7.55191 13.7774 7.55615 13.7678 7.56175 13.7547C7.57297 13.7285 7.58958 13.6883 7.60928 13.6367C7.64885 13.5329 7.6999 13.3854 7.74482 13.2133C7.80459 12.9843 7.8472 12.7353 7.84926 12.4977C7.75671 12.4962 7.6655 12.4938 7.57918 12.49C7.46544 12.4849 7.35192 12.477 7.24958 12.4638C7.15661 12.4517 7.03517 12.431 6.92598 12.3858C6.55844 12.2336 6.26643 11.9416 6.11418 11.574C6.04668 11.4111 6.02193 11.2461 6.01068 11.0812C5.99999 10.9246 6 10.7353 6 10.516V10.516L6 9.96705C5.99998 9.52383 5.99996 9.14193 6.04107 8.83611C6.08514 8.50835 6.18451 8.19417 6.43934 7.93934C6.69417 7.68451 7.00835 7.58514 7.33611 7.54107C7.64193 7.49996 8.02383 7.49998 8.46707 7.5ZM15.4671 7.5H15.4671H15.5329H15.5329C15.9762 7.49998 16.3581 7.49996 16.6639 7.54107C16.9917 7.58514 17.3058 7.68451 17.5607 7.93934C17.8155 8.19417 17.9149 8.50835 17.9589 8.83611C18.0001 9.14194 18 9.52384 18 9.96709L18 11.5C18 13.1569 16.6569 14.5 15 14.5C14.8291 14.5 14.6701 14.4127 14.5783 14.2686C14.4867 14.1248 14.4747 13.9441 14.5465 13.7895L14.5493 13.7832C14.5519 13.7774 14.5561 13.7678 14.5617 13.7547C14.573 13.7285 14.5896 13.6883 14.6093 13.6367C14.6489 13.5329 14.6999 13.3854 14.7448 13.2133C14.8046 12.9843 14.8472 12.7353 14.8493 12.4977C14.7567 12.4962 14.6655 12.4938 14.5792 12.49C14.4654 12.4849 14.3519 12.477 14.2496 12.4638C14.1566 12.4517 14.0352 12.431 13.926 12.3858C13.5584 12.2336 13.2664 11.9416 13.1142 11.574C13.0467 11.4111 13.0219 11.2461 13.0107 11.0812C13 10.9246 13 10.7353 13 10.516L13 9.96709C13 9.52384 13 9.14194 13.0411 8.83611C13.0851 8.50835 13.1845 8.19417 13.4393 7.93934C13.6942 7.68451 14.0083 7.58514 14.3361 7.54107C14.6419 7.49996 15.0238 7.49998 15.4671 7.5Z',
  d6: 'M12 1.25C6.61682 1.25 2.25 5.58419 2.25 11C2.25 16.1619 6.21701 20.3413 11.25 20.7218V22C11.25 22.4142 11.5858 22.75 12 22.75C14.3355 22.75 16.7769 21.04 18.5789 18.8518C20.4011 16.6391 21.75 13.726 21.75 11C21.75 5.58419 17.3832 1.25 12 1.25Z',
  d7: 'M8.46709 7.5C8.02384 7.49998 7.64194 7.49995 7.33611 7.54107C7.00835 7.58514 6.69417 7.68451 6.43934 7.93934C6.18451 8.19417 6.08514 8.50835 6.04107 8.83611C5.99996 9.14193 5.99998 9.52383 6 9.96705L6 10.516C6 10.7353 5.99999 10.9246 6.01068 11.0812C6.02193 11.2461 6.04668 11.4111 6.11418 11.574C6.26643 11.9416 6.55844 12.2336 6.92598 12.3858C7.03517 12.431 7.15661 12.4517 7.24958 12.4638C7.35192 12.477 7.46544 12.4849 7.57918 12.49C7.6655 12.4938 7.75671 12.4962 7.84926 12.4977C7.8472 12.7353 7.80459 12.9843 7.74482 13.2133C7.6999 13.3854 7.64885 13.5329 7.60928 13.6367C7.58958 13.6883 7.57297 13.7285 7.56175 13.7547C7.55615 13.7678 7.55191 13.7774 7.54933 13.7832L7.54649 13.7895C7.47469 13.9441 7.48665 14.1248 7.57828 14.2686C7.67008 14.4127 7.82913 14.5 8 14.5C9.65686 14.5 11 13.1569 11 11.5L11 9.96709C11 9.52384 11.0001 9.14194 10.9589 8.83611C10.9149 8.50835 10.8155 8.19417 10.5607 7.93934C10.3058 7.68451 9.99166 7.58514 9.6639 7.54107C9.35807 7.49995 8.97616 7.49998 8.53292 7.5H8.46709Z',
  d8: 'M15.4671 7.5C15.0238 7.49998 14.6419 7.49995 14.3361 7.54107C14.0083 7.58514 13.6942 7.68451 13.4393 7.93934C13.1845 8.19417 13.0851 8.50835 13.0411 8.83611C13 9.14194 13 9.52384 13 9.96709L13 10.516C13 10.7353 13 10.9246 13.0107 11.0812C13.0219 11.2461 13.0467 11.4111 13.1142 11.574C13.2664 11.9416 13.5584 12.2336 13.926 12.3858C14.0352 12.431 14.1566 12.4517 14.2496 12.4638C14.3519 12.477 14.4654 12.4849 14.5792 12.49C14.6655 12.4938 14.7567 12.4962 14.8493 12.4977C14.8472 12.7353 14.8046 12.9843 14.7448 13.2133C14.6999 13.3854 14.6489 13.5329 14.6093 13.6367C14.5896 13.6883 14.573 13.7285 14.5617 13.7547C14.5561 13.7678 14.5519 13.7774 14.5493 13.7832L14.5465 13.7895C14.4747 13.9441 14.4867 14.1248 14.5783 14.2686C14.6701 14.4127 14.8291 14.5 15 14.5C16.6569 14.5 18 13.1569 18 11.5L18 9.96709C18 9.52384 18.0001 9.14194 17.9589 8.83611C17.9149 8.50835 17.8155 8.19417 17.5607 7.93934C17.3058 7.68451 16.9917 7.58514 16.6639 7.54107C16.3581 7.49995 15.9762 7.49998 15.5329 7.5H15.4671Z',
  d9: 'M6.52506 11.9599L6.48157 8.04421C6.48126 8.01638 6.50374 7.99365 6.53157 7.99365H10.4611C10.4887 7.99365 10.5111 8.01604 10.5111 8.04365V10.8241C10.6985 13.4979 9.21319 14.0922 8.34034 14.0375C8.31452 14.0359 8.29521 14.0143 8.29521 13.9884V12.0093H6.57506C6.54766 12.0093 6.52537 11.9873 6.52506 11.9599Z',
  d10: 'M13.527 11.9599L13.4835 8.04421C13.4832 8.01638 13.5057 7.99365 13.5335 7.99365H17.4631C17.4907 7.99365 17.5131 8.01604 17.5131 8.04365V10.8241C17.7004 13.4979 16.2151 14.0922 15.3423 14.0375C15.3165 14.0359 15.2972 14.0143 15.2972 13.9884V12.0093H13.577C13.5496 12.0093 13.5273 11.9873 13.527 11.9599Z',
  d11: 'M3.0011 10.9993C3.0011 15.9708 7.03004 20.0011 12 20.0011V22.0024C12.7526 22.0024 13.7818 21.6972 14.35 21.3888C17.5147 19.7363 20.9989 15.404 20.9989 10.9993C20.9989 6.02778 16.97 1.99756 12 1.99756C7.03004 1.99756 3.0011 6.02778 3.0011 10.9993Z',
  d12: 'M2.25 11C2.25 5.58419 6.61682 1.25 12 1.25C17.3832 1.25 21.75 5.58419 21.75 11C21.75 13.726 20.4011 16.6391 18.5789 18.8518C16.7769 21.04 14.3355 22.75 12 22.75H11.25V20.7218C6.21701 20.3413 2.25 16.1619 2.25 11ZM17.5 11.7971V8H13.5V12H15.2971V14C16.5 14 17.5 13 17.5 11.7971ZM10.5 8V11.7971C10.5 13 9.5 14 8.29714 14V12H6.5L6.5 8L10.5 8Z',
};

export const IconHangoutStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hangout-stroke-rounded IconHangoutStrokeRounded"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHangoutDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hangout-duotone-rounded IconHangoutDuotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconHangoutTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hangout-twotone-rounded IconHangoutTwotoneRounded"
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
    </TheIconWrapper>
  );
};

export const IconHangoutSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hangout-solid-rounded IconHangoutSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHangoutBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hangout-bulk-rounded IconHangoutBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconHangoutStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hangout-stroke-sharp IconHangoutStrokeSharp"
    >
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d10} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHangoutSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="hangout-solid-sharp IconHangoutSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHangout: TheIconSelfPack = {
  name: 'Hangout',
  StrokeRounded: IconHangoutStrokeRounded,
  DuotoneRounded: IconHangoutDuotoneRounded,
  TwotoneRounded: IconHangoutTwotoneRounded,
  SolidRounded: IconHangoutSolidRounded,
  BulkRounded: IconHangoutBulkRounded,
  StrokeSharp: IconHangoutStrokeSharp,
  SolidSharp: IconHangoutSolidSharp,
};