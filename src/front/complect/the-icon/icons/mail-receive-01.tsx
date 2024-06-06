import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M22 12.5001C22 12.0087 21.9947 11.0172 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C9.90159 20.4836 10.7011 20.4954 11.5 20.4989',
  d2: 'M2 6L8.91302 9.92462C11.4387 11.3585 12.5613 11.3585 15.087 9.92462L22 6',
  d3: 'M14 17.5L22 17.5M14 17.5C14 16.7998 15.9943 15.4915 16.5 15M14 17.5C14 18.2002 15.9943 19.5085 16.5 20',
  d4: 'M9.09883 20.4647C11.0393 20.5118 12.9607 20.5118 14.9012 20.4647C18.0497 20.3883 19.6239 20.3501 20.755 19.2539C21.8862 18.1576 21.9189 16.6777 21.9842 13.7179V13.7178C22.0053 12.7661 22.0053 11.8201 21.9842 10.8684C21.9392 8.82941 21.9097 7.49275 21.5259 6.5L12 11.3276L2.47411 6.5C2.09032 7.49275 2.0608 8.82941 2.01576 10.8684C1.99474 11.8201 1.99475 12.7661 2.01577 13.7178C2.08114 16.6777 2.11383 18.1576 3.24496 19.2539C4.37608 20.3501 5.95033 20.3883 9.09883 20.4647Z',
  d5: 'M9.3177 2.78682C11.2735 2.73773 12.7265 2.73772 14.6823 2.78682L14.7571 2.78869C16.2665 2.82654 17.5084 2.85768 18.5093 3.03184C18.8796 3.09626 19.2289 3.18196 19.5587 3.29827C19.6464 3.3189 19.7305 3.35121 19.809 3.39408C20.3249 3.60795 20.7913 3.90762 21.2146 4.33221C21.9641 5.0838 22.3229 5.95955 22.5047 7.00542C22.6753 7.98692 22.7012 9.19819 22.7324 10.6641L22.734 10.7395C22.7471 11.3529 22.7522 11.7895 22.7492 12.2665C22.7457 12.8185 22.2868 13.2564 21.7351 13.2447C21.1833 13.2329 20.7478 12.7759 20.7509 12.2239C20.7533 11.777 20.7484 11.3637 20.736 10.7821C20.72 10.0327 20.7058 9.39883 20.6798 8.8521C20.6604 8.44648 20.6507 8.24366 20.5039 8.16269C20.3571 8.08172 20.1765 8.18402 19.8155 8.38864L15.5798 10.7894C14.2801 11.526 13.181 12.0027 11.9998 12.0027C10.8186 12.0027 9.71946 11.526 8.41985 10.7894L4.18445 8.38885C3.82343 8.18424 3.64292 8.08193 3.49608 8.1629C3.34924 8.24387 3.33957 8.44669 3.32023 8.85233C3.29416 9.399 3.28003 10.0328 3.26403 10.7821C3.24333 11.7519 3.24334 12.2536 3.26405 13.2234C3.29736 14.7839 3.32261 15.8432 3.46432 16.6584C3.59776 17.4261 3.82038 17.8822 4.20122 18.2641C4.5781 18.6421 5.04027 18.8686 5.83355 19.0066C6.67174 19.1525 7.76497 19.1824 9.36791 19.2227C9.94927 19.2373 10.4846 19.2474 11.0018 19.2532C11.553 19.2594 11.9998 19.7058 11.9998 20.2572C11.9998 20.8085 11.553 21.256 11.0018 21.2499C10.4684 21.2441 9.91661 21.2337 9.31772 21.2187L9.24286 21.2168C7.7335 21.1789 6.49162 21.1478 5.49066 20.9736C4.42829 20.7888 3.53878 20.4288 2.78537 19.6733C2.03592 18.9217 1.67707 18.0459 1.49527 17.0001C1.32466 16.0185 1.29884 14.8073 1.2676 13.3414L1.26599 13.266C1.24468 12.2678 1.24467 11.7377 1.26597 10.7395L1.26758 10.6641C1.29883 9.19814 1.32465 7.98693 1.49526 7.00541C1.67705 5.95955 2.0359 5.0838 2.78536 4.3322C3.53876 3.57665 4.42828 3.21668 5.49064 3.03184C6.49161 2.85768 7.73349 2.82654 9.24285 2.7887L9.3177 2.78682Z',
  d6: 'M21.75 18.416C22.3023 18.416 22.75 17.9683 22.75 17.416C22.75 16.8637 22.3023 16.416 21.75 16.416L17.25 16.416L17.25 15.8218C17.2501 15.6461 17.2503 15.4305 17.2282 15.254L17.2278 15.2507C17.212 15.1242 17.1402 14.5482 16.5746 14.2738C16.0077 13.9989 15.5076 14.3008 15.3994 14.3661L15.3954 14.3686C15.2424 14.4608 15.0715 14.5949 14.9309 14.7053L14.9007 14.729C14.5248 15.0236 14.0406 15.4056 13.6496 15.786C13.4545 15.9759 13.2533 16.1931 13.0944 16.424C12.9532 16.6293 12.75 16.9795 12.75 17.4102C12.75 17.8408 12.9532 18.191 13.0944 18.3963C13.2533 18.6272 13.4545 18.8444 13.6496 19.0343C14.0406 19.4147 14.5248 19.7967 14.9007 20.0913L14.9309 20.115C15.0715 20.2254 15.2423 20.3595 15.3954 20.4517L15.3994 20.4542C15.5076 20.5195 16.0078 20.8214 16.5746 20.5465C17.1402 20.2721 17.212 19.6961 17.2278 19.5696L17.2282 19.5663C17.2503 19.3898 17.2501 19.1742 17.25 18.9986L17.25 18.416L21.75 18.416Z',
  d7: 'M22 12V3.5H2V20.5H11',
  d8: 'M2 7L12 12L22 7',
  d9: 'M22 17.5L14.3991 17.5M17 20.5L14 17.5L17 14.5',
  d10: 'M1.24994 3.72368C1.24994 3.18593 1.68748 2.75 2.22721 2.75H21.7727C22.3124 2.75 22.7499 3.18593 22.7499 3.72368V12.5H20.7959V8.60217L12.0002 13L3.20502 8.6024V19.3026H11.9999V21.25H2.22721C1.68748 21.25 1.24994 20.8141 1.24994 20.2763V3.72368Z',
  d11: 'M17.164 16.5429L18.4569 15.25L17.0426 13.8358L13.3355 17.5429L17.0426 21.25L18.4569 19.8358L17.164 18.5429L22.7498 18.5429V16.5429L17.164 16.5429Z',
};

export const IconMailReceive01StrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-01-stroke-rounded IconMailReceive01StrokeRounded"
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

export const IconMailReceive01DuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-01-duotone-rounded IconMailReceive01DuotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d4} 
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

export const IconMailReceive01TwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-01-twotone-rounded IconMailReceive01TwotoneRounded"
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

export const IconMailReceive01SolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-01-solid-rounded IconMailReceive01SolidRounded"
    >
      <path 
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

export const IconMailReceive01BulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-01-bulk-rounded IconMailReceive01BulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconMailReceive01StrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-01-stroke-sharp IconMailReceive01StrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
        strokeLinejoin="round" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d9} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconMailReceive01SolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="mail-receive-01-solid-sharp IconMailReceive01SolidSharp"
    >
      <path 
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

export const iconPackOfMailReceive01: TheIconSelfPack = {
  name: 'MailReceive01',
  StrokeRounded: IconMailReceive01StrokeRounded,
  DuotoneRounded: IconMailReceive01DuotoneRounded,
  TwotoneRounded: IconMailReceive01TwotoneRounded,
  SolidRounded: IconMailReceive01SolidRounded,
  BulkRounded: IconMailReceive01BulkRounded,
  StrokeSharp: IconMailReceive01StrokeSharp,
  SolidSharp: IconMailReceive01SolidSharp,
};