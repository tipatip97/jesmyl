import { FC } from 'react';
import { TheIconWrapper } from '../icon-wrapper';
import { TheIconProps, TheIconSelfPack } from '../model';

const d: Record<string, string> = {
  d1: 'M13 18C13 18 14 18 15 20C15 20 18.1765 15 21 14',
  d2: 'M11 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10',
  d3: 'M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2',
  d4: 'M3.0014 10.9896C3.34179 10.1536 4.90998 8.49792 8.49805 8.49792C8.79946 8.49792 9.59012 8.19468 9.5492 6.55168C9.53252 5.06667 10.0738 2.12886 12.3445 2.00216C12.7945 2 13.2836 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V17C20 17.9293 20 18.394 19.9231 18.7804C19.6075 20.3671 18.3671 21.6075 16.7804 21.9231C16.394 22 15.9293 22 15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 11.7548 3 11.3586 3.0014 10.9896Z',
  d5: 'M6.81154 22.6472C7.79379 22.75 9.35661 22.75 10.8977 22.75C11.4375 22.75 11.875 22.3124 11.875 21.7727C11.875 21.233 11.4375 20.7954 10.8977 20.7954C9.28909 20.7954 7.88285 20.7941 7.0134 20.7032C6.15948 20.6138 5.67555 20.4471 5.31772 20.194C5.07627 20.0233 4.86389 19.8222 4.6861 19.5978C4.43053 19.2753 4.26109 18.8425 4.16886 18.0558C4.07393 17.246 4.07235 16.1887 4.07235 14.6652L4.07227 11.765C4.07225 11.498 4.07242 10.8595 4.35304 10.3873C4.52597 10.0963 4.74739 9.8532 4.97484 9.72938C5.34135 9.52986 5.76154 9.4165 6.20821 9.4165L7.24858 9.45299C7.62867 9.46088 8.07221 9.44887 8.50036 9.33415C9.33433 9.11069 9.98574 8.45928 10.2092 7.62531C10.3239 7.19716 10.3359 6.75362 10.328 6.37353L10.2915 5.33316C10.2915 4.86547 10.4159 4.45834 10.6333 4.07993C10.76 3.85934 10.9807 3.65745 11.2855 3.48014C11.7476 3.21123 12.301 3.20874 12.6392 3.20722C12.9773 3.20569 13.3341 3.20452 13.6322 3.20452C15.4663 3.20452 16.1334 3.21847 16.6368 3.39582C17.5094 3.70328 18.1751 4.34492 18.4852 5.13029C18.5628 5.32693 18.6177 5.58535 18.6471 6.0333C18.6771 6.48997 18.6776 7.07292 18.6776 7.91318V10.0263C18.6776 10.564 19.1136 11 19.6513 11C20.1891 11 20.625 10.564 20.625 10.0263V7.88C20.625 7.08084 20.625 6.43328 20.5903 5.9047C20.5545 5.36007 20.4789 4.8744 20.2956 4.41024C19.7668 3.07093 18.6584 2.03666 17.2818 1.55166C16.423 1.24907 14.9509 1.24946 13.3959 1.25C10.5563 1.24964 8.86965 1.24943 7.48721 1.73651C5.26721 2.51869 3.49348 4.18143 2.65009 6.31749C2.36897 7.02945 2.24444 7.79416 2.18419 8.711C2.125 9.61171 2.125 10.7243 2.125 12.1426V12.1426V14.7261C2.12498 16.1742 2.12496 17.3469 2.23485 18.2842C2.34896 19.2576 2.59221 20.0955 3.16204 20.8145C3.45722 21.187 3.80577 21.5158 4.19614 21.7919C4.9409 22.3185 5.80212 22.5416 6.81154 22.6472Z',
  d6: 'M21.8176 13.6664C22.002 14.187 21.7294 14.7585 21.2088 14.9429C20.6752 15.1319 20.0587 15.5388 19.4057 16.1115C18.763 16.6751 18.1378 17.3521 17.5841 18.0159C17.0322 18.6774 16.5635 19.3111 16.2324 19.7801C16.0672 20.0141 15.807 20.4044 15.7191 20.5365C15.5258 20.8406 15.1837 21.0174 14.8239 20.999C14.4639 20.9805 14.1418 20.7698 13.9806 20.4475C13.5399 19.5661 13.1446 19.2152 12.9453 19.0823C12.861 19.0261 12.804 19.0036 12.7814 18.9959C12.273 18.9487 11.875 18.521 11.875 18.0003C11.875 17.448 12.3227 17.0003 12.875 17.0003C13.0078 17.0003 13.2184 17.0405 13.3216 17.07C13.5295 17.1294 13.7803 17.2353 14.0547 17.4182C14.329 17.6011 14.6166 17.8538 14.9054 18.1997C15.2206 17.7689 15.609 17.2613 16.0483 16.7347C16.6416 16.0235 17.34 15.2629 18.087 14.6078C18.8236 13.9618 19.663 13.3686 20.5412 13.0576C21.0618 12.8733 21.6332 13.1458 21.8176 13.6664Z',
  d7: 'M13 20L15 22L21 16',
  d8: 'M10 21.9985H3.01C3.00448 21.9985 3 21.9941 3 21.9885V9.00044L10 2.00146H19.99C19.9955 2.00146 20 2.00594 20 2.01146L19.99 12.9826M10 2.57797V9.00044H3.58066',
  d9: 'M21.7502 16.0429L15.043 22.75L12.3359 20.0429L13.7502 18.6287L15.043 19.9216L20.3359 14.6287L21.7502 16.0429Z',
  d10: 'M20.75 2.22727C20.75 1.68754 20.3141 1.25 19.7763 1.25H9.63616L2.25 8.66338V21.7727C2.25 22.3125 2.68593 22.75 3.22368 22.75H10.0131V20.7955H4.19727V10.0455H11.0131L11.0131 3.20459H18.8025V12H20.75V2.22727Z',
};

export const IconFileVerifiedStrokeRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-verified-stroke-rounded IconFileVerifiedStrokeRounded"
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

export const IconFileVerifiedDuotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-verified-duotone-rounded IconFileVerifiedDuotoneRounded"
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

export const IconFileVerifiedTwotoneRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-verified-twotone-rounded IconFileVerifiedTwotoneRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
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

export const IconFileVerifiedSolidRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-verified-solid-rounded IconFileVerifiedSolidRounded"
    >
      <path 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileVerifiedBulkRounded: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-verified-bulk-rounded IconFileVerifiedBulkRounded"
    >
      <path 
        opacity="var(--icon-opacity)" 
        d={d.d5} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d6} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileVerifiedStrokeSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-verified-stroke-sharp IconFileVerifiedStrokeSharp"
    >
      <path 
        d={d.d7} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
      <path 
        d={d.d8} 
        stroke="var(--icon-stroke)" 
        strokeWidth="var(--icon-stroke-width)" 
      />
    </TheIconWrapper>
  );
};

export const IconFileVerifiedSolidSharp: FC<TheIconProps> = (props: TheIconProps): JSX.Element => {
  return (
    <TheIconWrapper
      {...props}
      name="file-verified-solid-sharp IconFileVerifiedSolidSharp"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d={d.d9} 
        fill="var(--icon-fill)" 
      />
      <path 
        d={d.d10} 
        fill="var(--icon-fill)" 
      />
    </TheIconWrapper>
  );
};

export const iconPackOfFileVerified: TheIconSelfPack = {
  name: 'FileVerified',
  StrokeRounded: IconFileVerifiedStrokeRounded,
  DuotoneRounded: IconFileVerifiedDuotoneRounded,
  TwotoneRounded: IconFileVerifiedTwotoneRounded,
  SolidRounded: IconFileVerifiedSolidRounded,
  BulkRounded: IconFileVerifiedBulkRounded,
  StrokeSharp: IconFileVerifiedStrokeSharp,
  SolidSharp: IconFileVerifiedSolidSharp,
};