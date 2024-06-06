import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5',
  d2: 'M21.996 10.5024C21.9933 10.1357 21.9894 9.77017 21.9842 9.5265C21.9189 6.46005 21.8862 4.92682 20.7551 3.79105C19.6239 2.65528 18.0497 2.61571 14.9012 2.53658C12.9607 2.48781 11.0393 2.48781 9.09882 2.53657C5.95033 2.6157 4.37608 2.65526 3.24495 3.79103C2.11382 4.92681 2.08114 6.46003 2.01576 9.52648C1.99474 10.5125 1.99475 11.4926 2.01577 12.4786C2.08114 15.5451 2.11383 17.0783 3.24496 18.2141C4.37608 19.3498 5.95033 19.3894 9.09883 19.4685C9.7068 19.4838 10.4957 19.4943 11 19.5',
  d3: 'M15.586 18.6482C14.9572 19.0167 13.3086 19.7693 14.3127 20.711C14.8032 21.171 15.3495 21.5 16.0364 21.5H19.9556C20.6424 21.5 21.1887 21.171 21.6792 20.711C22.6834 19.7693 21.0347 19.0167 20.4059 18.6482C18.9314 17.7839 17.0605 17.7839 15.586 18.6482Z',
  d4: 'M19.996 14C19.996 15.1046 19.1005 16 17.996 16C16.8914 16 15.996 15.1046 15.996 14C15.996 12.8954 16.8914 12 17.996 12C19.1005 12 19.996 12.8954 19.996 14Z',
  d5: 'M14.3241 19.4773C12.5792 19.5113 10.8468 19.5071 9.09883 19.4647C5.95033 19.3883 4.37608 19.3501 3.24496 18.2539C2.11383 17.1576 2.08114 15.6777 2.01577 12.7178C1.99475 11.7661 1.99474 10.8201 2.01576 9.86836C2.0608 7.82941 2.09032 6.49275 2.47411 5.5L12 10.3276L21.5259 5.5C21.9097 6.49275 21.9392 7.82941 21.9842 9.86838C22.0053 10.8201 22.0053 11.7661 21.9842 12.7178C21.9189 15.6776 21.8862 17.1576 20.755 18.2539C20.6198 18.3849 20.4782 18.5009 20.3283 18.6036C18.8662 17.7842 17.0348 17.7991 15.5861 18.6482C15.5237 18.6848 15.4513 18.7251 15.3723 18.7691C15.049 18.9492 14.6171 19.1898 14.3241 19.4773ZM17.9961 16C19.1007 16 19.9961 15.1046 19.9961 14C19.9961 12.8954 19.1007 12 17.9961 12C16.8915 12 15.9961 12.8954 15.9961 14C15.9961 15.1046 16.8915 16 17.9961 16Z',
  d6: 'M15.5798 9.787L19.8155 7.38697C20.1765 7.18242 20.3571 7.08014 20.5039 7.16109C20.6507 7.24203 20.6604 7.44479 20.6798 7.85029C20.7058 8.39685 20.72 9.03051 20.736 9.7797C20.7403 9.98216 20.7437 10.1206 20.7462 10.2218C20.76 10.7735 21.1833 11.2298 21.7351 11.2416C22.2868 11.2533 22.7593 10.8159 22.7462 10.2642C22.7435 10.1519 22.7395 9.99261 22.734 9.73715L22.7324 9.66177C22.7012 8.19628 22.6753 6.98537 22.5047 6.00416C22.3229 4.9586 21.9641 4.08311 21.2146 3.33174C20.7913 2.90728 20.3249 2.6077 19.809 2.39389C19.7305 2.35104 19.6464 2.31873 19.5587 2.29811C19.2289 2.18184 18.8796 2.09616 18.5093 2.03176C17.5084 1.85765 16.2665 1.82652 14.7571 1.78868L14.6823 1.78681C12.7265 1.73773 11.2735 1.73774 9.3177 1.78681L9.24285 1.78869C7.73349 1.82652 6.49161 1.85765 5.49064 2.03175C4.42828 2.21654 3.53876 2.57641 2.78536 3.33174C2.0359 4.08311 1.67705 4.9586 1.49526 6.00416C1.32465 6.98538 1.29883 8.19623 1.26758 9.66175L1.26597 9.73714C1.24467 10.7351 1.24468 11.265 1.26599 12.2629L1.2676 12.3383C1.29884 13.8038 1.32466 15.0146 1.49527 15.9959C1.67707 17.0414 2.03592 17.9169 2.78537 18.6683C3.53878 19.4236 4.42829 19.7835 5.49066 19.9683C6.49162 20.1424 7.7335 20.1735 9.24286 20.2113L9.31772 20.2132C9.91661 20.2282 10.4684 20.2387 11.0018 20.2445C11.553 20.2505 11.9998 19.8032 11.9998 19.252C11.9998 18.7008 11.553 18.2545 11.0018 18.2483C10.4846 18.2426 9.94927 18.2324 9.36791 18.2178C7.76497 18.1776 6.67174 18.1476 5.83355 18.0018C5.04027 17.8638 4.5781 17.6374 4.20122 17.2595C3.82038 16.8777 3.59776 16.4218 3.46432 15.6543C3.32261 14.8393 3.29736 13.7803 3.26405 12.2203C3.24334 11.2508 3.24333 10.7492 3.26403 9.7797C3.28003 9.03061 3.29416 8.39704 3.32023 7.85053C3.33957 7.44501 3.34924 7.24225 3.49608 7.1613C3.64292 7.08035 3.82343 7.18263 4.18445 7.38719L8.41985 9.787C9.71946 10.5234 10.8186 11 11.9998 11C13.181 11 14.2801 10.5234 15.5798 9.787Z',
  d7: 'M15.2069 18.426C16.9156 17.5247 19.0767 17.5247 20.7854 18.426C21.0949 18.5801 21.8016 18.9329 22.1755 19.2571C22.4084 19.4591 22.6863 19.7713 22.7379 20.1894C22.7949 20.6509 22.5578 21.0489 22.1925 21.3573C21.6329 21.8296 20.9113 22.25 19.9558 22.25H16.0365C15.081 22.25 14.3594 21.8296 13.7998 21.3573C13.4346 21.0489 13.1974 20.6509 13.2544 20.1894C13.306 19.7712 13.5839 19.4591 13.8168 19.2571C14.1907 18.9329 14.8974 18.5801 15.2069 18.426Z',
  d8: 'M15.2462 14C15.2462 12.4812 16.4774 11.25 17.9962 11.25C19.5149 11.25 20.7462 12.4812 20.7462 14C20.7462 15.5188 19.5149 16.75 17.9962 16.75C16.4774 16.75 15.2462 15.5188 15.2462 14Z',
  d9: 'M22 11V2.5H2V19.5H12',
  d10: 'M2 6L12 11L22 6',
  d11: 'M22 21.5H15C15 19.567 16.567 18 18.5 18C20.433 18 22 19.567 22 21.5Z',
  d12: 'M20.25 14.25C20.25 15.2165 19.4665 16 18.5 16C17.5335 16 16.75 15.2165 16.75 14.25C16.75 13.2835 17.5335 12.5 18.5 12.5C19.4665 12.5 20.25 13.2835 20.25 14.25Z',
  d13: 'M1.25 2.72368C1.25 2.18593 1.68754 1.75 2.22727 1.75H21.7727C22.3125 1.75 22.75 2.18593 22.75 2.72368V10.5H20.796V7.60217L12.0003 12L3.20508 7.6024V18.3026H12V20.25H2.22727C1.68754 20.25 1.25 19.8141 1.25 19.2763V2.72368Z',
  d14: 'M16 14.25C16 12.8693 17.1193 11.75 18.5 11.75C19.8807 11.75 21 12.8693 21 14.25C21 15.6307 19.8807 16.75 18.5 16.75C17.1193 16.75 16 15.6307 16 14.25Z',
  d15: 'M14.25 21.5C14.25 19.1528 16.1528 17.25 18.5 17.25C20.8472 17.25 22.75 19.1528 22.75 21.5V22.25H14.25V21.5Z',
};

export const IconMailAccount01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-01-stroke-rounded IconMailAccount01StrokeRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAccount01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-01-duotone-rounded IconMailAccount01DuotoneRounded"
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
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAccount01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-01-twotone-rounded IconMailAccount01TwotoneRounded"
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
      <g 
        opacity="var(--icon-opacity)">
      <path 
        d={d.d3} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d4} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      </g>
    </TheIconWrapper>
  );
};

export const IconMailAccount01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-01-solid-rounded IconMailAccount01SolidRounded"
    >
      <path 
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

export const IconMailAccount01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-01-bulk-rounded IconMailAccount01BulkRounded"
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

export const IconMailAccount01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-01-stroke-sharp IconMailAccount01StrokeSharp"
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
      <path 
        d={d.d11} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d12} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailAccount01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-account-01-solid-sharp IconMailAccount01SolidSharp"
    >
      <path 
        d={d.d13} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d14} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d15} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfMailAccount01: TheIconSelfPack = {
  name: 'MailAccount01',
  StrokeRounded: IconMailAccount01StrokeRounded,
  DuotoneRounded: IconMailAccount01DuotoneRounded,
  TwotoneRounded: IconMailAccount01TwotoneRounded,
  SolidRounded: IconMailAccount01SolidRounded,
  BulkRounded: IconMailAccount01BulkRounded,
  StrokeSharp: IconMailAccount01StrokeSharp,
  SolidSharp: IconMailAccount01SolidSharp,
};