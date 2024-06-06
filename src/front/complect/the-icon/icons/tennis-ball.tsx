import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z',
  d2: 'M5 5C8.99009 8.52068 9.0099 15.4618 5 19',
  d3: 'M19 19C14.9901 15.4618 15.0099 8.52068 19 5',
  d4: 'M19.1347 4.99311L19 5.00075C15.0099 8.52142 14.9901 15.4626 19 19.0007L19.1333 19.0083C17.319 20.8548 14.7932 22 12 22C9.20705 22 6.68152 20.855 4.86721 19.0088L5.00002 19.0007C9.00992 15.4626 8.99011 8.52142 5.00002 5.00075L4.86511 4.99335C6.67957 3.14589 9.20598 2 12 2C14.7939 2 17.3203 3.14579 19.1347 4.99311Z',
  d5: 'M5 18.9988C9.0099 15.4606 8.99009 8.51947 5 4.99879L4.91723 4.93945C3.11446 6.74816 2 9.24333 2 11.9988C2 14.7572 3.11687 17.2548 4.92307 19.064L5 18.9988Z',
  d6: 'M19 4.99879C15.0099 8.51947 14.9901 15.4606 19 18.9988L19.0808 19.0601C20.8847 17.2512 22 14.7552 22 11.9988C22 9.24234 20.8847 6.74637 19.0808 4.9375L19 4.99879Z',
  d7: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM3.2041 12C3.2041 9.91818 3.9274 8.00527 5.1364 6.49888C5.2157 6.40007 5.36588 6.40312 5.44123 6.50498C6.57803 8.04167 7.24952 9.942 7.24952 12.0001C7.24952 14.0581 6.57804 15.9584 5.44126 17.4951C5.36591 17.597 5.21573 17.6 5.13643 17.5012C3.92741 15.9948 3.2041 14.0819 3.2041 12ZM20.795 12C20.795 14.0819 20.0717 15.9949 18.8626 17.5013C18.7833 17.6001 18.6332 17.597 18.5578 17.4952C17.421 15.9585 16.7495 14.0581 16.7495 12.0001C16.7495 9.94198 17.421 8.04163 18.5578 6.50494C18.6332 6.40308 18.7834 6.40002 18.8627 6.49883C20.0717 8.00523 20.795 9.91816 20.795 12Z',
  d8: 'M3.20312 11.9992C3.20312 9.91737 3.92642 8.00445 5.13542 6.49806C5.21472 6.39925 5.3649 6.40231 5.44025 6.50417C6.57705 8.04085 7.24855 9.94118 7.24855 11.9992C7.24855 14.0573 6.57706 15.9576 5.44028 17.4943C5.36493 17.5961 5.21475 17.5992 5.13545 17.5004C3.92643 15.994 3.20312 14.0811 3.20312 11.9992ZM20.794 11.9992C20.794 14.0811 20.0707 15.994 18.8617 17.5004C18.7824 17.5993 18.6322 17.5962 18.5568 17.4943C17.42 15.9576 16.7485 14.0573 16.7485 11.9992C16.7485 9.94116 17.4201 8.04082 18.5569 6.50412C18.6322 6.40227 18.7824 6.39921 18.8617 6.49802C20.0707 8.00442 20.794 9.91735 20.794 11.9992Z',
  d9: 'M3.44359 5.49134C2.06723 7.29795 1.25 9.55354 1.25 12C1.25 14.4465 2.06726 16.7021 3.44367 18.5088C7.39255 15.0843 7.37492 8.90216 3.44359 5.49134Z',
  d10: 'M4.4333 4.36406C9.04271 8.36831 9.06495 15.6145 4.43342 19.6361C6.37597 21.561 9.04914 22.75 12 22.75C14.9505 22.75 17.6233 21.5614 19.5658 19.6368C14.9331 15.6152 14.9553 8.36764 19.5659 4.36328C17.6234 2.43868 14.9505 1.25 12 1.25C9.04908 1.25 6.37587 2.439 4.4333 4.36406Z',
  d11: 'M20.5557 5.49046C16.6231 8.9014 16.6054 15.085 20.5557 18.5096C21.9325 16.7029 22.75 14.4469 22.75 12C22.75 9.55314 21.9325 7.29722 20.5557 5.49046Z',
};

export const IconTennisBallStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tennis-ball-stroke-rounded IconTennisBallStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTennisBallDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tennis-ball-duotone-rounded IconTennisBallDuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTennisBallTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tennis-ball-twotone-rounded IconTennisBallTwotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconTennisBallSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tennis-ball-solid-rounded IconTennisBallSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d7} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconTennisBallBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tennis-ball-bulk-rounded IconTennisBallBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
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

export const IconTennisBallStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tennis-ball-stroke-sharp IconTennisBallStrokeSharp"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
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

export const IconTennisBallSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="tennis-ball-solid-sharp IconTennisBallSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfTennisBall: TheIconSelfPack = {
  name: 'TennisBall',
  StrokeRounded: IconTennisBallStrokeRounded,
  DuotoneRounded: IconTennisBallDuotoneRounded,
  TwotoneRounded: IconTennisBallTwotoneRounded,
  SolidRounded: IconTennisBallSolidRounded,
  BulkRounded: IconTennisBallBulkRounded,
  StrokeSharp: IconTennisBallStrokeSharp,
  SolidSharp: IconTennisBallSolidSharp,
};