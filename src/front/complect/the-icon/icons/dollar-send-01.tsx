import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.625 8.62963C10.625 6.62504 8.77817 5 6.5 5C4.22182 5 2.375 6.62504 2.375 8.62963C2.375 10.6342 3.5 11.7407 6.5 11.7407C9.5 11.7407 11 12.7778 11 15.3704C11 17.963 8.98528 19 6.5 19C4.01472 19 2 17.375 2 15.3704',
  d2: 'M6.5 3L6.5 5M6.5 21L6.5 19',
  d3: 'M22 12H14.5M22 12C22 12.7002 20.0057 14.0085 19.5 14.5M22 12C22 11.2998 20.0057 9.99153 19.5 9.5',
  d4: 'M6.5 3V5M6.5 21V19',
  d5: 'M6.5 2C7.05229 2 7.5 2.44772 7.5 3L7.5 4.08978C9.77476 4.50174 11.625 6.29148 11.625 8.62963C11.625 9.18191 11.1773 9.62963 10.625 9.62963C10.0727 9.62963 9.625 9.18191 9.625 8.62963C9.625 7.2937 8.34993 6 6.5 6C4.65006 6 3.375 7.2937 3.375 8.62963C3.375 9.44114 3.5943 9.88057 3.93879 10.1573C4.33301 10.474 5.08858 10.7407 6.5 10.7407C8.07836 10.7407 9.47621 11.0063 10.4889 11.794C11.5578 12.6253 12 13.8754 12 15.3704C12 16.964 11.3606 18.1851 10.2643 18.9704C9.4758 19.5352 8.50983 19.8335 7.5 19.9461L7.5 21C7.5 21.5523 7.05229 22 6.5 22C5.94772 22 5.5 21.5523 5.5 21L5.5 19.9214C3.07434 19.5388 1 17.7898 1 15.3704C1 14.8181 1.44772 14.3704 2 14.3704C2.55228 14.3704 3 14.8181 3 15.3704C3 16.6327 4.35556 18 6.5 18C7.62614 18 8.51732 17.7616 9.09964 17.3445C9.63205 16.9631 10 16.3693 10 15.3704C10 14.2728 9.6922 13.708 9.26106 13.3727C8.77379 12.9937 7.92164 12.7407 6.5 12.7407C4.91142 12.7407 3.60449 12.4542 2.68621 11.7165C1.7182 10.9388 1.375 9.82271 1.375 8.62963C1.375 6.29148 3.22524 4.50174 5.5 4.08978L5.5 3C5.5 2.44771 5.94772 2 6.5 2Z',
  d6: 'M15 10.9941C14.4477 10.9941 14 11.4419 14 11.9941C14 12.5464 14.4477 12.9941 15 12.9941L18.5 12.9941L18.5 13.5884C18.4999 13.764 18.4997 13.9797 18.5218 14.1561L18.5222 14.1595C18.538 14.2859 18.6098 14.862 19.1754 15.1363C19.7423 15.4113 20.2424 15.1093 20.3506 15.044L20.3546 15.0416C20.5076 14.9494 20.6785 14.8152 20.8191 14.7049L20.8493 14.6812C21.2252 14.3865 21.7094 14.0046 22.1004 13.6241C22.2955 13.4343 22.4967 13.217 22.6556 12.9861C22.7968 12.7809 23 12.4307 23 12C23 11.5693 22.7968 11.2191 22.6556 11.0139C22.4967 10.783 22.2955 10.5657 22.1004 10.3759C21.7094 9.99545 21.2252 9.61348 20.8493 9.31885L20.8191 9.29512C20.6785 9.18477 20.5077 9.05062 20.3546 8.95841L20.3506 8.95597C20.2424 8.89065 19.7422 8.58872 19.1754 8.86368C18.6098 9.13804 18.538 9.71408 18.5222 9.84053L18.5218 9.84387C18.4997 10.0203 18.4999 10.236 18.5 10.4116L18.5 10.9941L15 10.9941Z',
  d7: 'M6.5 2C7.05228 2 7.5 2.44772 7.5 3L7.5 5C7.5 5.55228 7.05228 6 6.5 6C5.94772 6 5.5 5.55228 5.5 5L5.5 3C5.5 2.44772 5.94772 2 6.5 2ZM6.5 18C7.05229 18 7.5 18.4477 7.5 19L7.5 21C7.5 21.5523 7.05229 22 6.5 22C5.94772 22 5.5 21.5523 5.5 21L5.5 19C5.5 18.4477 5.94772 18 6.5 18Z',
  d8: 'M6.5 6C4.65006 6 3.375 7.2937 3.375 8.62963C3.375 9.44114 3.5943 9.88057 3.93879 10.1573C4.33301 10.474 5.08858 10.7407 6.5 10.7407C8.07836 10.7407 9.47621 11.0063 10.4889 11.794C11.5578 12.6253 12 13.8754 12 15.3704C12 16.964 11.3606 18.1851 10.2643 18.9704C9.21796 19.7199 7.85914 20 6.5 20C3.67388 20 1 18.1173 1 15.3704C1 14.8181 1.44772 14.3704 2 14.3704C2.55228 14.3704 3 14.8181 3 15.3704C3 16.6327 4.35556 18 6.5 18C7.62614 18 8.51732 17.7616 9.09964 17.3445C9.63205 16.9631 10 16.3693 10 15.3704C10 14.2728 9.6922 13.708 9.26106 13.3727C8.77379 12.9937 7.92164 12.7407 6.5 12.7407C4.91142 12.7407 3.60449 12.4542 2.68621 11.7165C1.7182 10.9388 1.375 9.82271 1.375 8.62963C1.375 5.95638 3.79358 4 6.5 4C9.20641 4 11.625 5.95638 11.625 8.62963C11.625 9.18191 11.1773 9.62963 10.625 9.62963C10.0727 9.62963 9.625 9.18191 9.625 8.62963C9.625 7.2937 8.34993 6 6.5 6Z',
  d9: 'M6.5 5C4.22182 5 2.375 6.62504 2.375 8.62963C2.375 10.6342 3.5 11.7407 6.5 11.7407C9.5 11.7407 11 12.7778 11 15.3704C11 17.963 8.98528 19 6.5 19M6.5 5C8.77817 5 10.625 6.62504 10.625 8.62963M6.5 5L6.5 3M6.5 19C4.01472 19 2 17.375 2 15.3704M6.5 19L6.5 21',
  d10: 'M14 12L21.5379 12M19 15L22 12L19 9',
  d11: 'M5.75 4.08978L5.75 3H7.75L7.75 4.08978C10.0248 4.50174 11.875 6.29148 11.875 8.62963H9.875C9.875 7.2937 8.59993 6 6.75 6C4.90006 6 3.625 7.2937 3.625 8.62963C3.625 9.44114 3.8443 9.88057 4.18879 10.1573C4.58301 10.474 5.33858 10.7407 6.75 10.7407C8.32836 10.7407 9.72621 11.0063 10.7389 11.794C11.8078 12.6253 12.25 13.8754 12.25 15.3704C12.25 16.964 11.6106 18.1851 10.5143 18.9704C9.7258 19.5352 8.75983 19.8335 7.75 19.9461L7.75 21H5.75L5.75 19.9214C3.32434 19.5388 1.25 17.7898 1.25 15.3704H3.25C3.25 16.6327 4.60556 18 6.75 18C7.87614 18 8.76732 17.7616 9.34964 17.3445C9.88205 16.9631 10.25 16.3693 10.25 15.3704C10.25 14.2728 9.9422 13.708 9.51106 13.3727C9.02379 12.9937 8.17164 12.7407 6.75 12.7407C5.16142 12.7407 3.85449 12.4542 2.93621 11.7165C1.9682 10.9388 1.625 9.82271 1.625 8.62963C1.625 6.29148 3.47524 4.50174 5.75 4.08978Z',
  d12: 'M18.9215 11.0001L17.6286 9.70718L19.0428 8.29297L22.7499 12.0001L19.0428 15.7072L17.6286 14.293L18.9215 13.0001L13.3357 13.0001V11.0001L18.9215 11.0001Z',
};

export const IconDollarSend01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-01-stroke-rounded IconDollarSend01StrokeRounded"
    >
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

export const IconDollarSend01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-01-duotone-rounded IconDollarSend01DuotoneRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d4} 
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

export const IconDollarSend01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-01-twotone-rounded IconDollarSend01TwotoneRounded"
    >
      <path 
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

export const IconDollarSend01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-01-solid-rounded IconDollarSend01SolidRounded"
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
    </TheIconWrapper>
  );
};

export const IconDollarSend01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-01-bulk-rounded IconDollarSend01BulkRounded"
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
      <path 
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarSend01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-01-stroke-sharp IconDollarSend01StrokeSharp"
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
      />
    </TheIconWrapper>
  );
};

export const IconDollarSend01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-01-solid-sharp IconDollarSend01SolidSharp"
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

export const iconPackOfDollarSend01: TheIconSelfPack = {
  name: 'DollarSend01',
  StrokeRounded: IconDollarSend01StrokeRounded,
  DuotoneRounded: IconDollarSend01DuotoneRounded,
  TwotoneRounded: IconDollarSend01TwotoneRounded,
  SolidRounded: IconDollarSend01SolidRounded,
  BulkRounded: IconDollarSend01BulkRounded,
  StrokeSharp: IconDollarSend01StrokeSharp,
  SolidSharp: IconDollarSend01SolidSharp,
};