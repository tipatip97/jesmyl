import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5',
  d2: 'M11.992 17H12.001',
  d3: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.0523 10.5523 10.5 10 10.5C9.44771 10.5 9 10.0523 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5C15 10.0957 14.8253 10.6537 14.5241 11.1219C14.3433 11.4028 14.1337 11.6684 13.9471 11.9004L13.8449 12.027C13.6904 12.2182 13.5532 12.3881 13.426 12.5629C13.1099 12.9973 13 13.277 13 13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5C11 12.6184 11.4328 11.903 11.8088 11.3862C11.9687 11.1665 12.1441 10.9494 12.2993 10.7576L12.3889 10.6466C12.5739 10.4167 12.7241 10.2232 12.8422 10.0397C12.942 9.88454 13 9.70057 13 9.5C13 8.94772 12.5523 8.5 12 8.5ZM11.9955 15.5C11.4457 15.5 11 15.9477 11 16.5C11 17.0523 11.4457 17.5 11.9955 17.5H12.0045C12.5543 17.5 13 17.0523 13 16.5C13 15.9477 12.5543 15.5 12.0045 15.5H11.9955Z',
  d4: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z',
  d5: 'M12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.0523 10.5523 10.5 10 10.5C9.44772 10.5 9 10.0523 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5C15 10.0957 14.8253 10.6537 14.5241 11.1219C14.3433 11.4028 14.1337 11.6684 13.9471 11.9004C13.9122 11.9437 13.8781 11.9859 13.8449 12.027C13.6904 12.2182 13.5532 12.3881 13.426 12.5629C13.1099 12.9973 13 13.277 13 13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5C11 12.6184 11.4328 11.903 11.8088 11.3862C11.9687 11.1665 12.1441 10.9494 12.2993 10.7576C12.33 10.7195 12.36 10.6825 12.3889 10.6466C12.5739 10.4167 12.7241 10.2232 12.8422 10.0397C12.942 9.88454 13 9.70057 13 9.5C13 8.94772 12.5523 8.5 12 8.5Z',
  d6: 'M11 16.5C11 15.9477 11.4457 15.5 11.9955 15.5H12.0045C12.5543 15.5 13 15.9477 13 16.5C13 17.0523 12.5543 17.5 12.0045 17.5H11.9955C11.4457 17.5 11 17.0523 11 16.5Z',
  d7: 'M9.5 10C9.5 8.61929 10.6193 7.5 12 7.5C13.3807 7.5 14.5 8.61929 14.5 10C14.5 11.3807 13.3807 12.5 12 12.5V14.5M12 16V17.5',
  d8: 'M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM10.5 10C10.5 9.17157 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14.5H13V13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.067 6.5 8.5 8.067 8.5 10H10.5ZM11 16V17.5H13V16H11Z',
};

export const IconHelpCircleStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="help-circle-stroke-rounded IconHelpCircleStrokeRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHelpCircleDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="help-circle-duotone-rounded IconHelpCircleDuotoneRounded"
    >
      <circle 
        opacity="var(--icon-opacity)" 
        cx="12" 
        cy="12" 
        r="10" 
        fill="var(--icon-fill)"></circle>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHelpCircleTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="help-circle-twotone-rounded IconHelpCircleTwotoneRounded"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)"></circle>
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconHelpCircleSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="help-circle-solid-rounded IconHelpCircleSolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d3} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconHelpCircleBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="help-circle-bulk-rounded IconHelpCircleBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const IconHelpCircleStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="help-circle-stroke-sharp IconHelpCircleStrokeSharp"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="square" 
        strokeLinejoin="round"></circle>
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconHelpCircleSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="help-circle-solid-sharp IconHelpCircleSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfHelpCircle: TheIconSelfPack = {
  name: 'HelpCircle',
  StrokeRounded: IconHelpCircleStrokeRounded,
  DuotoneRounded: IconHelpCircleDuotoneRounded,
  TwotoneRounded: IconHelpCircleTwotoneRounded,
  SolidRounded: IconHelpCircleSolidRounded,
  BulkRounded: IconHelpCircleBulkRounded,
  StrokeSharp: IconHelpCircleStrokeSharp,
  SolidSharp: IconHelpCircleSolidSharp,
};