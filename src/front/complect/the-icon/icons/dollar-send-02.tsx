import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M10.625 8.62963C10.625 6.62504 8.77817 5 6.5 5C4.22182 5 2.375 6.62504 2.375 8.62963C2.375 10.6342 3.5 11.7407 6.5 11.7407C9.5 11.7407 11 12.7778 11 15.3704C11 17.963 8.98528 19 6.5 19C4.01472 19 2 17.375 2 15.3704',
  d2: 'M6.5 3L6.5 21',
  d3: 'M22 12H14.5M22 12C22 12.7002 20.0057 14.0085 19.5 14.5M22 12C22 11.2998 20.0057 9.99153 19.5 9.5',
  d4: 'M6.5 2C7.05228 2 7.5 2.44772 7.5 3V4.08978C9.77476 4.50174 11.625 6.29148 11.625 8.62963C11.625 9.18191 11.1773 9.62963 10.625 9.62963C10.0727 9.62963 9.625 9.18191 9.625 8.62963C9.625 7.55102 8.79383 6.49995 7.5 6.13505L7.5 10.7809C8.66694 10.8806 9.69599 11.1772 10.4889 11.794C11.5578 12.6253 12 13.8754 12 15.3704C12 16.964 11.3606 18.1851 10.2643 18.9704C9.4758 19.5352 8.50983 19.8335 7.5 19.9461V21C7.5 21.5523 7.05229 22 6.5 22C5.94772 22 5.5 21.5523 5.5 21V19.9214C3.07434 19.5388 1 17.7898 1 15.3704C1 14.8181 1.44772 14.3704 2 14.3704C2.55228 14.3704 3 14.8181 3 15.3704C3 16.4231 3.94292 17.549 5.5 17.8937L5.5 12.698C4.35877 12.594 3.40382 12.293 2.68621 11.7165C1.7182 10.9388 1.375 9.82271 1.375 8.62963C1.375 6.29148 3.22524 4.50174 5.5 4.08978V3C5.5 2.44772 5.94772 2 6.5 2ZM5.5 6.13505C4.20617 6.49994 3.375 7.55102 3.375 8.62963C3.375 9.44114 3.5943 9.88057 3.93879 10.1573C4.22725 10.3891 4.7092 10.594 5.5 10.6873L5.5 6.13505ZM7.5 12.7901L7.5 17.9297C8.16133 17.8304 8.70236 17.629 9.09964 17.3445C9.63205 16.9631 10 16.3693 10 15.3704C10 14.2728 9.6922 13.708 9.26106 13.3727C8.90091 13.0926 8.34143 12.8813 7.5 12.7901Z',
  d5: 'M15 10.9941C14.4477 10.9941 14 11.4419 14 11.9941C14 12.5464 14.4477 12.9941 15 12.9941L18.5 12.9941L18.5 13.5884C18.4999 13.764 18.4997 13.9797 18.5218 14.1561L18.5222 14.1595C18.538 14.2859 18.6098 14.862 19.1754 15.1363C19.7423 15.4113 20.2424 15.1093 20.3506 15.044L20.3546 15.0416C20.5076 14.9494 20.6785 14.8152 20.8191 14.7049L20.8493 14.6812C21.2252 14.3865 21.7094 14.0046 22.1004 13.6241C22.2955 13.4343 22.4967 13.217 22.6556 12.9861C22.7968 12.7809 23 12.4307 23 12C23 11.5693 22.7968 11.2191 22.6556 11.0139C22.4967 10.783 22.2955 10.5657 22.1004 10.3759C21.7094 9.99545 21.2252 9.61348 20.8493 9.31885L20.8191 9.29512C20.6785 9.18477 20.5077 9.05062 20.3546 8.95841L20.3506 8.95597C20.2424 8.89065 19.7422 8.58872 19.1754 8.86368C18.6098 9.13804 18.538 9.71408 18.5222 9.84053L18.5218 9.84387C18.4997 10.0203 18.4999 10.236 18.5 10.4116L18.5 10.9941L15 10.9941Z',
  d6: 'M6.5 2C7.05228 2 7.5 2.44772 7.5 3L7.5 21C7.5 21.5523 7.05229 22 6.5 22C5.94772 22 5.5 21.5523 5.5 21L5.5 3C5.5 2.44772 5.94772 2 6.5 2Z',
  d7: 'M6.5 6C4.65006 6 3.375 7.2937 3.375 8.62963C3.375 9.44114 3.5943 9.88057 3.93879 10.1573C4.33301 10.474 5.08858 10.7407 6.5 10.7407C8.07836 10.7407 9.47621 11.0063 10.4889 11.794C11.5578 12.6253 12 13.8754 12 15.3704C12 16.964 11.3606 18.1851 10.2643 18.9704C9.21796 19.7199 7.85914 20 6.5 20C3.67388 20 1 18.1173 1 15.3704C1 14.8181 1.44772 14.3704 2 14.3704C2.55228 14.3704 3 14.8181 3 15.3704C3 16.6327 4.35556 18 6.5 18C7.62614 18 8.51732 17.7616 9.09964 17.3445C9.63205 16.9631 10 16.3693 10 15.3704C10 14.2728 9.6922 13.708 9.26106 13.3727C8.77379 12.9937 7.92164 12.7407 6.5 12.7407C4.91142 12.7407 3.60449 12.4542 2.68621 11.7165C1.7182 10.9388 1.375 9.82271 1.375 8.62963C1.375 5.95638 3.79358 4 6.5 4C9.20641 4 11.625 5.95638 11.625 8.62963C11.625 9.18191 11.1773 9.62963 10.625 9.62963C10.0727 9.62963 9.625 9.18191 9.625 8.62963C9.625 7.2937 8.34993 6 6.5 6Z',
  d8: 'M14 12L21.5122 12M19 15L22 12L19 9',
  d9: 'M6.75 6C4.90006 6 3.625 7.2937 3.625 8.62963C3.625 9.44114 3.8443 9.88057 4.18879 10.1573C4.58301 10.474 5.33858 10.7407 6.75 10.7407C8.32836 10.7407 9.72621 11.0063 10.7389 11.794C11.8078 12.6253 12.25 13.8754 12.25 15.3704C12.25 16.964 11.6106 18.1851 10.5143 18.9704C9.46796 19.7199 8.10914 20 6.75 20C3.92388 20 1.25 18.1173 1.25 15.3704H3.25C3.25 16.6327 4.60556 18 6.75 18C7.87614 18 8.76732 17.7616 9.34964 17.3445C9.88205 16.9631 10.25 16.3693 10.25 15.3704C10.25 14.2728 9.9422 13.708 9.51106 13.3727C9.02379 12.9937 8.17164 12.7407 6.75 12.7407C5.16142 12.7407 3.85449 12.4542 2.93621 11.7165C1.9682 10.9388 1.625 9.82271 1.625 8.62963C1.625 5.95638 4.04358 4 6.75 4C9.45641 4 11.875 5.95638 11.875 8.62963H9.875C9.875 7.2937 8.59993 6 6.75 6Z',
  d10: 'M5.75 21L5.75 3L7.75 3L7.75 21L5.75 21Z',
  d11: 'M18.9213 11.0001L17.6284 9.70718L19.0426 8.29297L22.7498 12.0001L19.0426 15.7072L17.6284 14.293L18.9213 13.0001L13.3355 13.0001V11.0001L18.9213 11.0001Z',
};

export const IconDollarSend02StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-02-stroke-rounded IconDollarSend02StrokeRounded"
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

export const IconDollarSend02DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-02-duotone-rounded IconDollarSend02DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconDollarSend02TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-02-twotone-rounded IconDollarSend02TwotoneRounded"
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

export const IconDollarSend02SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-02-solid-rounded IconDollarSend02SolidRounded"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d4} 
        fill="var(--icon-fill)" 
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarSend02BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-02-bulk-rounded IconDollarSend02BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarSend02StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-02-stroke-sharp IconDollarSend02StrokeSharp"
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
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarSend02SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-send-02-solid-sharp IconDollarSend02SolidSharp"
    >
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
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d11} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfDollarSend02: TheIconSelfPack = {
  name: 'DollarSend02',
  StrokeRounded: IconDollarSend02StrokeRounded,
  DuotoneRounded: IconDollarSend02DuotoneRounded,
  TwotoneRounded: IconDollarSend02TwotoneRounded,
  SolidRounded: IconDollarSend02SolidRounded,
  BulkRounded: IconDollarSend02BulkRounded,
  StrokeSharp: IconDollarSend02StrokeSharp,
  SolidSharp: IconDollarSend02SolidSharp,
};