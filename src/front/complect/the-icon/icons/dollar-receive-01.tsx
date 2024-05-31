import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d = {
  d1: 'M10.625 8.62963C10.625 6.62504 8.77817 5 6.5 5C4.22182 5 2.375 6.62504 2.375 8.62963C2.375 10.6342 3.5 11.7407 6.5 11.7407C9.5 11.7407 11 12.7778 11 15.3704C11 17.963 8.98528 19 6.5 19C4.01472 19 2 17.375 2 15.3704',
  d2: 'M6.5 3L6.5 5M6.5 21L6.5 19',
  d3: 'M14.5 12H22M14.5 12C14.5 12.7002 16.4943 14.0085 17 14.5M14.5 12C14.5 11.2998 16.4943 9.99153 17 9.5',
  d4: 'M10.6465 8.62963C10.6465 6.62504 8.79965 5 6.52148 5C4.2433 5 2.39648 6.62504 2.39648 8.62963C2.39648 10.6342 3.52148 11.7407 6.52148 11.7407C9.52148 11.7407 11.0215 12.7778 11.0215 15.3704C11.0215 17.963 9.00676 19 6.52148 19C4.0362 19 2.02148 17.375 2.02148 15.3704',
  d5: 'M6.52148 3V5M6.52148 21V19',
  d6: 'M14.5215 12H22.0215M14.5215 12C14.5215 12.7002 16.5158 14.0085 17.0215 14.5M14.5215 12C14.5215 11.2998 16.5158 9.99153 17.0215 9.5',
  d7: 'M6.5 2C7.05229 2 7.5 2.44772 7.5 3L7.5 4.08978C9.77476 4.50174 11.625 6.29148 11.625 8.62963C11.625 9.18191 11.1773 9.62963 10.625 9.62963C10.0727 9.62963 9.625 9.18191 9.625 8.62963C9.625 7.2937 8.34993 6 6.5 6C4.65006 6 3.375 7.2937 3.375 8.62963C3.375 9.44114 3.5943 9.88057 3.93879 10.1573C4.33301 10.474 5.08858 10.7407 6.5 10.7407C8.07836 10.7407 9.47621 11.0063 10.4889 11.794C11.5578 12.6253 12 13.8754 12 15.3704C12 16.964 11.3606 18.1851 10.2643 18.9704C9.4758 19.5352 8.50983 19.8335 7.5 19.9461L7.5 21C7.5 21.5523 7.05229 22 6.5 22C5.94772 22 5.5 21.5523 5.5 21L5.5 19.9214C3.07434 19.5388 1 17.7898 1 15.3704C1 14.8181 1.44772 14.3704 2 14.3704C2.55228 14.3704 3 14.8181 3 15.3704C3 16.6327 4.35556 18 6.5 18C7.62614 18 8.51732 17.7616 9.09964 17.3445C9.63205 16.9631 10 16.3693 10 15.3704C10 14.2728 9.6922 13.708 9.26106 13.3727C8.77379 12.9937 7.92164 12.7407 6.5 12.7407C4.91142 12.7407 3.60449 12.4542 2.68621 11.7165C1.7182 10.9388 1.375 9.82271 1.375 8.62963C1.375 6.29148 3.22524 4.50174 5.5 4.08978L5.5 3C5.5 2.44771 5.94772 2 6.5 2Z',
  d8: 'M22 10.9941C22.5523 10.9941 23 11.4419 23 11.9941C23 12.5464 22.5523 12.9941 22 12.9941L18.5 12.9941L18.5 13.5884C18.5001 13.764 18.5003 13.9797 18.4782 14.1561L18.4778 14.1595C18.462 14.2859 18.3902 14.862 17.8246 15.1363C17.2577 15.4113 16.7576 15.1093 16.6494 15.044L16.6454 15.0416C16.4924 14.9494 16.3215 14.8152 16.1809 14.7049L16.1507 14.6812C15.7748 14.3865 15.2906 14.0046 14.8996 13.6241C14.7045 13.4343 14.5033 13.217 14.3444 12.9861C14.2032 12.7809 14 12.4307 14 12C14 11.5693 14.2032 11.2191 14.3444 11.0139C14.5033 10.783 14.7045 10.5657 14.8996 10.3759C15.2906 9.99545 15.7748 9.61348 16.1507 9.31885L16.1809 9.29512C16.3215 9.18477 16.4923 9.05062 16.6454 8.95841L16.6494 8.95597C16.7576 8.89065 17.2578 8.58872 17.8246 8.86368C18.3902 9.13804 18.462 9.71408 18.4778 9.84053L18.4782 9.84387C18.5003 10.0203 18.5001 10.236 18.5 10.4116L18.5 10.9941L22 10.9941Z',
  d9: 'M6.5 2C7.05228 2 7.5 2.44772 7.5 3L7.5 5C7.5 5.55228 7.05228 6 6.5 6C5.94772 6 5.5 5.55228 5.5 5L5.5 3C5.5 2.44772 5.94772 2 6.5 2ZM6.5 18C7.05229 18 7.5 18.4477 7.5 19L7.5 21C7.5 21.5523 7.05229 22 6.5 22C5.94772 22 5.5 21.5523 5.5 21L5.5 19C5.5 18.4477 5.94772 18 6.5 18Z',
  d10: 'M6.5 6C4.65006 6 3.375 7.2937 3.375 8.62963C3.375 9.44114 3.5943 9.88057 3.93879 10.1573C4.33301 10.474 5.08858 10.7407 6.5 10.7407C8.07836 10.7407 9.47621 11.0063 10.4889 11.794C11.5578 12.6253 12 13.8754 12 15.3704C12 16.964 11.3606 18.1851 10.2643 18.9704C9.21796 19.7199 7.85914 20 6.5 20C3.67388 20 1 18.1173 1 15.3704C1 14.8181 1.44772 14.3704 2 14.3704C2.55228 14.3704 3 14.8181 3 15.3704C3 16.6327 4.35556 18 6.5 18C7.62614 18 8.51732 17.7616 9.09964 17.3445C9.63205 16.9631 10 16.3693 10 15.3704C10 14.2728 9.6922 13.708 9.26106 13.3727C8.77379 12.9937 7.92164 12.7407 6.5 12.7407C4.91142 12.7407 3.60449 12.4542 2.68621 11.7165C1.7182 10.9388 1.375 9.82271 1.375 8.62963C1.375 5.95638 3.79358 4 6.5 4C9.20641 4 11.625 5.95638 11.625 8.62963C11.625 9.18191 11.1773 9.62963 10.625 9.62963C10.0727 9.62963 9.625 9.18191 9.625 8.62963C9.625 7.2937 8.34993 6 6.5 6Z',
  d11: 'M22 12L14.4055 12M17 15L14 12L17 9',
  d12: 'M7 6C5.15006 6 3.875 7.2937 3.875 8.62963C3.875 9.44114 4.0943 9.88057 4.43879 10.1573C4.83301 10.474 5.58858 10.7407 7 10.7407C8.57836 10.7407 9.97621 11.0063 10.9889 11.794C12.0578 12.6253 12.5 13.8754 12.5 15.3704C12.5 16.964 11.8606 18.1851 10.7643 18.9704C9.71796 19.7199 8.35914 20 7 20C4.17388 20 1.5 18.1173 1.5 15.3704H3.5C3.5 16.6327 4.85556 18 7 18C8.12614 18 9.01732 17.7616 9.59964 17.3445C10.1321 16.9631 10.5 16.3693 10.5 15.3704C10.5 14.2728 10.1922 13.708 9.76106 13.3727C9.27379 12.9937 8.42164 12.7407 7 12.7407C5.41142 12.7407 4.10449 12.4542 3.18621 11.7165C2.2182 10.9388 1.875 9.82271 1.875 8.62963C1.875 5.95638 4.29358 4 7 4C9.70641 4 12.125 5.95638 12.125 8.62963H10.125C10.125 7.2937 8.84993 6 7 6Z',
  d13: 'M6 5L6 3L8 3L8 5L6 5ZM6 21L6 19L8 19L8 21L6 21Z',
  d14: 'M16.793 8.29297L18.2073 9.70718L16.9144 11.0001L22.5002 11.0001V13.0001L16.9144 13.0001L18.2073 14.293L16.793 15.7072L13.0859 12.0001L16.793 8.29297Z',
} as const;

export const IconDollarReceive01StrokeRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-receive-01-stroke-rounded IconDollarReceive01StrokeRounded"
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

export const IconDollarReceive01DuotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-receive-01-duotone-rounded IconDollarReceive01DuotoneRounded"
    >
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
      />
      <path 
        d={d.d5} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d6} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarReceive01TwotoneRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-receive-01-twotone-rounded IconDollarReceive01TwotoneRounded"
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

export const IconDollarReceive01SolidRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-receive-01-solid-rounded IconDollarReceive01SolidRounded"
    >
      <path 
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

export const IconDollarReceive01BulkRounded = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-receive-01-bulk-rounded IconDollarReceive01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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
        opacity="var(--icon-opacity)" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d8} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarReceive01StrokeSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-receive-01-stroke-sharp IconDollarReceive01StrokeSharp"
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
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconDollarReceive01SolidSharp = (props: TheIconProps) => {
  return (
    <TheIconWrapper
      {...props}
      name="dollar-receive-01-solid-sharp IconDollarReceive01SolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d12} 
        fill="var(--icon-fill)" 
      />
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
    </TheIconWrapper>
  );
};

export const iconPackOfDollarReceive01: TheIconSelfPack = {
  name: 'DollarReceive01',
  StrokeRounded: IconDollarReceive01StrokeRounded,
  DuotoneRounded: IconDollarReceive01DuotoneRounded,
  TwotoneRounded: IconDollarReceive01TwotoneRounded,
  SolidRounded: IconDollarReceive01SolidRounded,
  BulkRounded: IconDollarReceive01BulkRounded,
  StrokeSharp: IconDollarReceive01StrokeSharp,
  SolidSharp: IconDollarReceive01SolidSharp,
};