import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M9.99826 12L2 16C2 17.8856 2 18.3284 2.58579 18.9142C3.17157 19.5 4.11438 19.5 6 19.5H14C15.8856 19.5 16.8284 19.5 17.4142 18.9142C18 18.3284 18 17.8856 18 16M9.99826 12L21.9957 6M9.99826 12L2 8C2 6.61438 2 5.67157 2.58579 5.08579C3.17157 4.5 4.11438 4.5 6 4.5H14C15.8856 4.5 16.8284 4.5 17.4142 5.08579C18 5.67157 18 6.61438 18 8M9.99826 12L21.9957 18',
  d2: 'M2 16L9.99826 12L2 8C2 6.61438 2 5.67157 2.58579 5.08579C3.17157 4.5 4.11438 4.5 6 4.5H14C15.8856 4.5 16.8284 4.5 17.4142 5.08579C18 5.67157 18 6.61438 18 8L9.99826 12L18 16C18 17.8856 18 18.3284 17.4142 18.9142C16.8284 19.5 15.8856 19.5 14 19.5H6C4.11438 19.5 3.17157 19.5 2.58579 18.9142C2 18.3284 2 17.8856 2 16Z',
  d3: 'M2 16C2 17.8856 2 18.3284 2.58579 18.9142C3.17157 19.5 4.11438 19.5 6 19.5H14C15.8856 19.5 16.8284 19.5 17.4142 18.9142C18 18.3284 18 17.8856 18 16M2 8C2 6.61438 2 5.67157 2.58579 5.08579C3.17157 4.5 4.11438 4.5 6 4.5H14C15.8856 4.5 16.8284 4.5 17.4142 5.08579C18 5.67157 18 6.61438 18 8',
  d4: 'M2 16L9.99826 12M9.99826 12L21.9957 6M9.99826 12L2 8M9.99826 12L21.9957 18',
  d5: 'M14.052 3.75C14.9505 3.74997 15.6997 3.74995 16.2945 3.82991C16.9223 3.91432 17.4891 4.09999 17.9446 4.55546C18.3933 5.00419 18.582 5.5625 18.6683 6.13034C18.7 6.33905 18.7194 6.5615 18.7313 6.79399L21.6602 5.32921C22.0307 5.14394 22.4812 5.29407 22.6665 5.66453C22.8517 6.035 22.7016 6.48552 22.3311 6.67079L11.675 12L22.3311 17.3292C22.7016 17.5145 22.8517 17.965 22.6665 18.3355C22.4812 18.7059 22.0307 18.8561 21.6602 18.6708L18.7399 17.2103C18.7295 17.5438 18.7084 17.8283 18.6656 18.0735C18.5634 18.6592 18.3361 19.053 17.9446 19.4445C17.4891 19.9 16.9223 20.0857 16.2945 20.1701C15.6997 20.2501 14.9505 20.25 14.052 20.25H14.052H5.94802H5.94799C5.04952 20.25 4.30031 20.2501 3.70553 20.1701C3.07774 20.0857 2.51094 19.9 2.05547 19.4445C1.66392 19.053 1.4366 18.6592 1.3344 18.0735C1.24986 17.589 1.24992 16.9507 1.25001 16.0845L1.25001 16C1.25001 15.7159 1.41049 15.4563 1.66454 15.3292L8.32151 12L1.66454 8.67079C1.41049 8.54374 1.25001 8.28406 1.25001 8L1.25001 7.95707C1.24997 7.29913 1.24993 6.66897 1.33174 6.13034C1.41798 5.5625 1.60673 5.00419 2.05547 4.55546C2.51094 4.09999 3.07774 3.91432 3.70553 3.82991C4.30031 3.74995 5.04951 3.74997 5.94798 3.75H5.94801H14.052H14.052Z',
  d6: 'M14.052 3.75C14.9505 3.74997 15.6997 3.74995 16.2945 3.82991C16.9223 3.91432 17.4891 4.09999 17.9446 4.55546C18.3933 5.00419 18.582 5.5625 18.6683 6.13034C18.7 6.33905 18.7194 6.5615 18.7313 6.79399V8.47111L11.675 12L18.7399 15.5332V17.2103C18.7295 17.5438 18.7084 17.8283 18.6656 18.0735C18.5634 18.6592 18.3361 19.053 17.9446 19.4445C17.4891 19.9 16.9223 20.0857 16.2945 20.1701C15.6997 20.2501 14.9505 20.25 14.052 20.25H14.052H5.94802H5.94799C5.04952 20.25 4.30031 20.2501 3.70553 20.1701C3.07774 20.0857 2.51094 19.9 2.05547 19.4445C1.66392 19.053 1.4366 18.6592 1.3344 18.0735C1.24986 17.589 1.24992 16.9507 1.25001 16.0845L1.25001 16C1.25001 15.7159 1.41049 15.4563 1.66454 15.3292L8.32151 12L1.66454 8.67079C1.41049 8.54374 1.25001 8.28406 1.25001 8L1.25001 7.95707C1.24997 7.29913 1.24993 6.66897 1.33174 6.13034C1.41798 5.5625 1.60673 5.00419 2.05547 4.55546C2.51094 4.09999 3.07774 3.91432 3.70553 3.82991C4.30031 3.74995 5.04951 3.74997 5.94798 3.75H5.94801H14.052H14.052Z',
  d7: 'M22.6686 5.6647C22.8539 6.03516 22.7038 6.48568 22.3333 6.67096L11.6772 12.0002L22.3333 17.3294C22.7038 17.5146 22.8539 17.9652 22.6686 18.3356C22.4834 18.7061 22.0328 18.8562 21.6624 18.671L10.0004 12.8387L2.33765 16.671C1.96718 16.8562 1.51666 16.7061 1.33139 16.3356C1.14611 15.9652 1.29624 15.5146 1.66671 15.3294L8.32368 12.0002L1.66671 8.67096C1.29624 8.48568 1.14611 8.03516 1.33139 7.6647C1.51666 7.29423 1.96718 7.1441 2.33765 7.32937L10.0004 11.1616L21.6624 5.32937C22.0328 5.1441 22.4834 5.29423 22.6686 5.6647Z',
  d8: 'M9.99826 12L2 16L1.99989 19.5H18V16M9.99826 12L21.9957 6M9.99826 12L2 8L2.00011 4.50008L18 4.5V8M9.99826 12L21.9957 18',
  d9: 'M19.2978 4.50049V6.38056L21.8529 5.1061L22.7499 6.89488L12.5138 12.0005L22.7499 17.1061L21.8529 18.8949L19.2978 17.6204V19.5005C19.2978 20.0528 18.8489 20.5005 18.2951 20.5005H2.25255C1.98662 20.5005 1.73159 20.3951 1.54355 20.2076C1.35552 20.02 1.24989 19.7657 1.24989 19.5005L1.25 16.0005C1.25001 15.6217 1.46454 15.2755 1.80417 15.1061L8.03054 12.0005L1.80417 8.89488C1.46452 8.72546 1.24998 8.37921 1.25 8.00045L1.25011 4.50054C1.25013 3.94827 1.69903 3.50057 2.25276 3.50057L18.2951 3.50049C18.5611 3.50049 18.8161 3.60584 19.0041 3.79338C19.1922 3.98092 19.2978 4.23527 19.2978 4.50049Z',
};

export const IconCapcutStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-stroke-rounded IconCapcutStrokeRounded"
    >
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapcutDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-duotone-rounded IconCapcutDuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d2} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d1} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapcutTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-twotone-rounded IconCapcutTwotoneRounded"
    >
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapcutSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-solid-rounded IconCapcutSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconCapcutBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-bulk-rounded IconCapcutBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconCapcutStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-stroke-sharp IconCapcutStrokeSharp"
    >
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
    </TheIconWrapper>
  );
};

export const IconCapcutSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="capcut-solid-sharp IconCapcutSolidSharp"
    >
      <path 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfCapcut: TheIconSelfPack = {
  name: 'Capcut',
  StrokeRounded: IconCapcutStrokeRounded,
  DuotoneRounded: IconCapcutDuotoneRounded,
  TwotoneRounded: IconCapcutTwotoneRounded,
  SolidRounded: IconCapcutSolidRounded,
  BulkRounded: IconCapcutBulkRounded,
  StrokeSharp: IconCapcutStrokeSharp,
  SolidSharp: IconCapcutSolidSharp,
};